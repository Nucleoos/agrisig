var annee="2005";

function DeleteDataSource(object)
{
  var sources=object.database.GetDataSources();
  var ds;
  while (sources.hasMoreElements()){
  	ds=sources.getNext();
	  object.database.RemoveDataSource(ds);
  }
}

/* Remplit une grille correctement */
/* Renvoie le composant grid */
function fill_grid(object,query){
  var result = pgsql_query(query);
  var ds = result.QueryInterface(Components.interfaces.nsIRDFDataSource);
  var grid = top.document.getElementById(object);
  DeleteDataSource(grid);
  grid.database.AddDataSource(ds);
  grid.builder.rebuild();
  return grid;
}


/* Remplit une liste correctement en concervant la ligne sÃÂ©lectionnÃÂ©e */
/* Renvoie le composant liste */
function fill_list(object,query){
  var result = pgsql_query(query);
  var list = top.document.getElementById(object);
  var idx = list.selectedIndex;

  DeleteDataSource(list);
  if (result.rowCount>0){
	  var ds = result.QueryInterface(Components.interfaces.nsIRDFDataSource);
  	list.database.AddDataSource(ds);
	  list.builder.rebuild();
		
	  if (idx<0) list.selectedIndex=0;
  	else{
  	  if (idx>=list.rowCount)	list.selectedIndex=list.rowCount-1;
	    else list.selectedIndex=idx;
	  }
  }
  list.setAttribute("lines",result.rowCount);
  return list;
}


function current_annee(){
  return annee;
}

function elem(id){
  return top.document.getElementById(id);
}


/* Fonction d'initialisation */
function cot_start(){
  pgsql_init(true);
  if (pgsql_getConnectionState()){
//    alert("It is good! ");
    /* Chargement des elements de la fenetre */
	  var query = "SELECT AS_Numero, AS_Nom FROM Assolocale;";
	  var annee = current_annee();
	  fill_list("c-assolocale-menulist",query);
	  query = "SELECT tco_typecotisation AS tc_nom, tc_tarif, tc_numero, tco_numero FROM tarifcotisation NATURAL LEFT OUTER JOIN typecotisation WHERE tc_annee="+annee+";";
	  fill_list("c-tarif-menulist",query);
	  query = "SELECT tp_type, tp_tarif, tp_numero FROM tarifproduction WHERE tp_annee="+annee+";";
	  fill_grid("c-culture-rows",query);
	  query = "SELECT ts_tarifttc, ts_numero FROM tarifsacea WHERE ts_annee="+annee+";";
	  fill_list("c-conseil-menulist",query);
	  query = "SELECT tab_tarif, tab_numero FROM tarifabonnement WHERE EXTRACT (year FROM tab_dateapp)="+annee+";";
	  fill_list("c-journal-menulist",query);
	  cot_total();
  } else window.close();
}


/* Remplit la liste des personnes */
function cot_select_personnes(){
    var extrait=top.document.getElementById("c-personne-menulist").value;
//    alert(extrait);
    var query="SELECT pe_numero-1000000 AS pe_numfd, pe_numero, pe_titre, pe_nom, pe_prenom FROM personne WHERE pe_nom ILIKE '%"+extrait+"%' OR pe_prenom ILIKE '%"+extrait+"%' OR pe_titre ILIKE '%"+extrait+"%' OR pe_numero ILIKE '%"+extrait+"%';";
//    prompt("hjhg",query);
    fill_list("c-personne-menulist",query);
  //  alert("fini!");
}


/* Renvoie le numero de la personne en cours */
function current_personne(){
  menulist=elem("c-personne-menulist");
  if (menulist.selectedIndex>-1)
    return menulist.selectedItem.value;
  else
    return 0;
}


/* Charge  les elements relatif à la personne en cours */
function cot_charge_personne(){
  /* Mise a jour des productions */
  var personne=current_personne();
  var query="SELECT pr_nom, production.pr_numero, toto.pr_numero IS NOT NULL AS pr_cultive FROM production LEFT OUTER JOIN (SELECT pr_numero FROM aproduction WHERE pe_numero="+personne+") AS toto ON (production.pr_numero=toto.pr_numero);";
  fill_list("c-production-list",query);
  /* Montant appelÃÂ© */
  var montantappel=elem("c-total-appel");
  
  query="SELECT co_etat, co_appelmontant FROM cotisation WHERE pe_numero="+personne+" AND co_annee="+annee+";";
  result=pgsql_query(query);
  if (result.rowCount<=0)
    montantappel.value="(Montant appelé inconnu)";
  else{
    enumr=result.enumerate();
    enumr.first();
    var etat=enumr.getVariant(0);
//    alert(etat);
    switch(etat){
      case "APPELE": montantappel.value="(Montant appelé "+enumr.getVariant(1)+" euros)"; break;
      case "ADHERENT": montantappel.value="(La personne a déjà payé sa cotisation)"; break;
      default: montantappel.value="("+enumr.getVariant(0).toLowerCase()+" : Montant appelé "+enumr.getVariant(1)+" euros)";
    }
  }
}




/* Valide et enregistre la cotisation */
function cot_valide(){
  var personne=current_personne();
  var annee=current_annee();
  var assolocale=elem("c-assolocale-menulist").selectedItem.value;
  var tarifcotisation=elem("c-tarif-menulist").selectedItem.value;
  var typecotisation=elem("c-tarif-menulist").selectedItem.getAttribute("cotisation");
  var tarifsacea="NULL";
  var montant_cotisation=1*elem("c-cotisation").value+1*elem("c-hectare").value;
  var query;
  /* tests de base */
  if (personne<=0 || personne==null){
    alert("Il faut choisir une personne de la liste pour pouvoir lui affecter une cotisation.");
    return;
  }
  if (assolocale<=0 || assolocale==null){
    alert("Il faut choisir l'association locale qui paye pour la personne");
    return;
  }
  if (tarifcotisation<=0 || tarifcotisation==null){
    alert("Il faut choisir une cotisation forfaitaire");
    return;
  }
  if (typecotisation<=0 || typecotisation==null){
    alert("Il faut choisir une cotisation forfaitaire ou appeler votre administrateur système.");
    return;
  }
  if (elem("c-conseil-checkbox").checked) tarifsacea=elem("c-conseil-menulist").selectedItem.value;
  
  
  /* Tests à faire */
  // Voir si le coco a déjà  payé sa cotisation
  var erreur="";
  var warning="";
  query="SELECT co_etat, co_appelmontant, co_montantregle FROM cotisation WHERE pe_numero="+personne+" AND co_annee="+annee+";";
  result=pgsql_query(query);
  if (result.rowCount<=0)
    warning+="Cette personne n'a pas été enregistrée en tant qu'adhérente,appelée ou autre donc elle sera considérée comme appelée.\n";
  else{
    enumr=result.enumerate();
    enumr.first();
    var etat=enumr.getVariant(0);
    if (etat!="APPELE"){
      if (etat=="ADHERENT")
        erreur+="La personne est déjà adhérente.\n";
    }
  }
  if (montant_cotisation<=0) erreur+="Les cotisations gratuites ça n'existent pas.";
  
  if (erreur!=""){
    alert(erreur);
    return null;
  }
  if (warning!="") if (!confirm(warning+"Voulez-vous poursuivre?")) return null;
  
  
    
  /* Si les tests sont ok => on enregistre */
  // la cotisation
  query="SELECT nextval('seq_cotisation');";
  result=pgsql_query(query);
  if (result.rowCount>0){
    var enumr=result.enumerate();
    enumr.first();
    var co_numero=enumr.getVariant(0);
   
      query="INSERT INTO cotisation(co_numero, pe_numero, as_numero, db_numero, tc_numero, ts_numero, tco_numero, co_annee, co_etat, co_echeance, co_montantcotis, co_montantregle, co_adhesion, co_numfacture, co_numfacturesacea, co_clpayeur, co_modereglement, co_banque, co_numcheque, co_nb_employe, co_donneeproduction) VALUES(";
      query+=co_numero+",";             // numero (clé primaire)
      query+=personne+",";              // clé de la personne à qui on attribue la cotisation
      query+=assolocale+",";            // clé de l'association locale qui paye à la place de l'adhérent
      query+="NULL"+",";                // clé des données bancaires
      query+=tarifcotisation+",";       // clé du tarif de la cotisation de base
      query+=tarifsacea+",";            // clé du tarif SACEA potentiellement pris
      query+=typecotisation+",";        // clé du type du tarif de la cotisation de base
      query+=annee+",";                 // année de cotisation
      query+="'ADHERENT',";             // Met la personne en l'état d'adhérent vu qu'elle paye sa cotis'
      query+="'31/12/"+annee+"',";      // Date d'échéance (fin de l'adhérence si non renouvellement)
      query+=montant_cotisation+",";    // Montant de la cotisation + à l'hectare
      query+=montant_regle+",";         // Montant réglé
      query+=");";
      pgsql_update(query);
      // cotisations à l'hectare
      // les tarifs annexes
      // les productions
      // abonnement journal
      // cotisation en apellé pour l'année prochaine
      /* Ce fait en traitement de debut d'année */
    } else alert("Il n'est pas possible de créer une nouvelle cotisation (Pas ce clé disponible).");
    
}


/* Calcule tous les totaux */
function cot_total(){
  //alert("totaux");
  /* cotiz de base */
  elem("c-cotisation").value= elem("c-tarif-menulist").selectedItem.getAttribute("tarif");
  /* Cotisation ÃÂ  l'hectare */
  var i,somme=0;
  if (elem("c-culture-checkbox").checked) {
    var rows=elem("c-culture-rows");
    var row;
    for (i=1;i<rows.childNodes.length;i++){
      row = rows.childNodes[i];
      if (row.childNodes[0].checked){
        somme+=1*row.childNodes[1].value*row.childNodes[1].getAttribute("tarif");
      }
    }
  }
  elem("c-hectare").value=somme;
  
  /* total */ 
  var total;
  total=1*elem("c-cotisation").value+1*elem("c-hectare").value;
  if (elem("c-conseil-checkbox").checked) total+=1*elem("c-conseil-menulist").selectedItem.getAttribute("tarif");
  if (elem("c-journal-checkbox").checked) total+=1*elem("c-journal-menulist").selectedItem.getAttribute("tarif");
  elem("c-total").value=total;
  //alert("totaux calculÃÂ©s");
}

//alert("Fichier chargÃÂ©");

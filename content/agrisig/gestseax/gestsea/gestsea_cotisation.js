var num_service;
var num_employe;

function DeleteDataSource(object)
{
  var sources=object.database.GetDataSources();
  var ds;
  while (sources.hasMoreElements()){
  	ds=sources.getNext();
	  object.database.RemoveDataSource(ds);
  }
}

function requete(query)
{
    result=pgsql_query(query);
    if (result.rowCount<=0)
	return null;
    else{
	enumr=result.enumerate();
	enumr.first();
	return enumr.getVariant(0);
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

function jeTravaillePour(abbrev)
{
    query="UPDATE employe SET em_service=se_numero FROM service LEFT JOIN societe ON (se_societe=so_numero) where so_abbrev='"+abbrev+"' and em_login=CURRENT_USER;";
    pgsql_update(query);
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
	num_employe=requete("SELECT em_numero FROM employe  WHERE em_login=current_user;");
	num_service=requete("SELECT em_service FROM employe WHERE em_login=current_user;");
	
	jeTravaillePour('FDS');
	elem('tarif1').setAttribute("tarif",requete("SELECT px_tarifttc FROM produit LEFT JOIN prix using (pd_numero) WHERE px_Actif AND pd_numero=500000054"));
	elem('tarif2').setAttribute("tarif",requete("SELECT px_tarifttc FROM produit LEFT JOIN prix using (pd_numero) WHERE px_Actif AND pd_numero=500000053"));
	elem('tarif3').setAttribute("tarif",(1*elem('tarif1').getAttribute("tarif")+1*elem('tarif2').getAttribute("tarif"))+".00");
	elem('tarif4').setAttribute("tarif",requete("SELECT px_tarifttc FROM produit LEFT JOIN prix using (pd_numero) WHERE px_Actif AND pd_numero=500000052"));
	elem('tarif5').setAttribute("tarif",requete("select sum(px_tarifttc) from prix left join produit using (pd_numero) where pd_numero=500000130 OR pd_numero=500000054 and px_actif"));
	
	cot_charge_tiers_payeurs();

	query = "SELECT pd_libelle, px_tarifttc as pd_tarif, pd_numero FROM produit LEFT JOIN prix using (pd_numero) WHERE px_Actif AND 500000055<=pd_numero AND pd_numero<=500000060 ORDER BY pd_numero ASC;";
	fill_grid("c-culture-rows",query);
	
	query = "SELECT mr_libelle, mr_numero FROM modereglement WHERE mr_actif;";
	fill_list('c-modereglement',query);

	// AAVA
	jeTravaillePour('AAV');
	query = "SELECT px_tarifttc, pd_numero FROM produit LEFT JOIN prix using (pd_numero) WHERE px_Actif AND (pd_numero=500000096 OR pd_numero=500000094);";
	fill_list("c-journal-menulist",query);
	
	// SACEA
	jeTravaillePour('SAC');
	query = "SELECT px_tarifttc, pd_numero FROM produit LEFT JOIN prix using (pd_numero) WHERE px_Actif AND (pd_numero=500000036 OR pd_numero=500000065 OR pd_numero=500000069);";
	fill_list("c-conseil-menulist",query);
	//      jeTravaillePour('FDS');
	
	// alert('OK '+elem('tarif3').getAttribute("tarif"));
	/*
	  var query = "SELECT AS_Numero, AS_Nom FROM Assolocale;";
	  var annee = current_annee();
	  fill_list("c-assolocale-menulist",query);
	  query = "SELECT tco_typecotisation AS tc_nom, tc_tarif, tc_numero, tco_numero FROM tarifcotisation NATURAL LEFT OUTER JOIN typecotisation WHERE tc_annee="+annee+";";
	  fill_list("c-tarif-menulist",query);
	  query = "SELECT tab_tarif, tab_numero FROM tarifabonnement WHERE EXTRACT (year FROM tab_dateapp)="+annee+";";
	  fill_list("c-journal-menulist",query);
	*/
	cot_total();
	query="UPDATE employe SET em_service="+num_service+" WHERE em_numero="+num_employe+";";
	pgsql_update(query);
    } else window.close();
    //    alert('ok');
}


/* Remplit la liste des personnes */
function cot_select_personnes(){
    var extrait=top.document.getElementById("c-personne-menulist").value;
    var query="SELECT pe_numpersonne, pe_numero, pe_titre, pe_nom, pe_prenom FROM personne WHERE pe_nom ILIKE '%"+extrait+"%' OR pe_prenom ILIKE '%"+extrait+"%' OR pe_titre ILIKE '%"+extrait+"%' OR pe_numpersonne ILIKE '%0"+extrait+"%';";
    fill_list("c-personne-menulist",query);
}

function cot_cotisation()
{
    elem('c-cotisation').value=elem('tarif'+elem('cotiz').value).getAttribute("tarif");
    //    var tarifs= requete("SELECT");
    cot_total();
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
    var query="SELECT cr_libelle, categorie.cr_numero, at_numero IS NOT NULL AS cr_cultive FROM categorie LEFT OUTER JOIN (SELECT cr_numero, at_numero FROM attribut WHERE pe_numero="+personne+" AND ta_numero=500000000) AS toto USING (cr_numero) WHERE cr_numero<60 AND ta_numero=500000000;";
    fill_list("c-production-list",query);
    query = "SELECT ad_numero, ad_libelle FROM adresse WHERE ad_active AND pe_numero="+current_personne()+";";
    fill_list("c-journal-adresse",query);
}

function cot_charge_tiers_payeurs()
{
    query = "SELECT pe_numpersonne, pe_numero, pe_nom FROM personne left join attribut using (pe_numero) WHERE ta_numero=500000003;";
    fill_list("c-payeur-menulist", query);
}

function cot_charge_reg(){
    var payeur=elem('c-payeur-menulist').selectedItem.value;
    var query="SELECT rg_numero, rg_montant FROM reglement WHERE pe_numero="+payeur+";";
    fill_list("c-payeur-reg-menulist",query);
}


/* Valide et enregistre la cotisation */
function cot_valide(){
    //    alert('ok');
    /*
    if (elem('c-tierspayeur').selected) {
	alert("Pas de tiers payeur seulement des adhérents directs pour l'instant.");
	return;
    }
    */
    /*
    if (1*elem('c-cotisation').value+1<=1) {
	alert("Vous devez sélectionner un type de cotisation");
	return;
    }
    */
    cot_cotisation();
    //    alert('ok2');
    var personne=current_personne();
    var query;
    if (personne<=0 || personne==null){
	alert("Il faut choisir une personne de la liste pour pouvoir lui affecter une cotisation.");
	return;
    }

    //    alert('ok3');
    var rows=elem("c-production-list");
    var row;
    production="";
    //    alert(rows.childNodes.length);
    for (i=1;i<rows.childNodes.length;i++){
	//	row = rows.childNodes[i];
	if (rows.childNodes[i].checked) production+="1";
        else production+="0";
    }
    if (elem("c-production-autre-checkbox").checked)
	production+="1"+elem("c-production-autre-textbox").value;
    else
	production+="0";

    //    alert('ok4');
    
    query="SELECT * FROM FC_CouponReponse("+personne+", ";
    if (elem('c-cotisation-checkbox').checked)
	query+=elem('cotiz').value;
    else
	query+="0";

    
    if (elem("c-culture-checkbox").checked) {
	var rows=elem("c-culture-rows");
	var row;
	for (i=1;i<rows.childNodes.length;i++){
	    row = rows.childNodes[i];
	    if (row.childNodes[0].checked){
		query+=","+row.childNodes[1].value;
	    }
	    else query+=", 0";
	}
    } else query+=", 0, 0, 0, 0, 0, 0";

    
    if (elem("c-conseil-checkbox").checked) query+=", "+elem("c-conseil-menulist").selectedItem.value;
    else query+=", 0";
    if (elem("c-journal-checkbox").checked) query+=", "+elem("c-journal-menulist").selectedItem.value;
    else query+=", 0";

    
    query+=", '"+elem("c-reglement-date").value+"'";
    query+=", " +elem("c-modereglement").selectedItem.value;
    query+=", '"+elem("c-libelle-banque").value+"'";
    query+=", '"+elem("c-reglement-compte").value+"'";
    query+=", '"+elem("c-reglement-cheque").value+"'";
    query+=", '"+production+"'";
    
    query+=", "+elem("c-reglement-montant").value;

    query+=", "+elem("c-journal-debut").value;
    query+=", "+elem("c-journal-fin").value;
    query+=", "+elem("c-journal-nbex").value;
    if (elem('c-journal-checkbox').checked) {
	if (elem("c-journal-adresse").selectedIndex>-1)
	    query+=", "+elem("c-journal-adresse").selectedItem.value;
	else {
	    alert("Il faut spécifier une adresse pour l'abonnement.");
	    return;
	}
    }
    else query+=", NULL";

    if (elem('c-tierspayeur').selected) 
	query+=", "+elem("c-payeur-reg-menulist").selectedItem.value;
    else 
	query+=", NULL";

    query+=");";

    //    alert(query);
    
    result=pgsql_query(query);
    if (result.rowCount<=0)
	return null;
    else{
	alert(result.rowCount+" factures.");
	enum=result.enumerate();
	enum.beforeFirst();
	var encore = true;
        while(encore){
	    encore = enum.next();
	    alert(enum.getVariant(0));
	    window.open(enum.getVariant(0));
	}
    }

    alert("Cotisation enregistrée");
   
}


/* Calcule tous les totaux */
function cot_total(){
    //alert("totaux");
    /* cotiz de base */
    if (elem("c-cotisation-checkbox").checked)
	elem('c-cotisation').value=elem('tarif'+elem('cotiz').value).getAttribute("tarif");
    else
	elem('c-cotisation').value=0;

    /* Cotisation à l'hectare */
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
    if (elem("c-journal-checkbox").checked) {
	elem("c-journal-total").value="("+elem('c-journal-nbex').value*elem("c-journal-menulist").selectedItem.getAttribute("tarif")+" euros)";
	total+=1*elem('c-journal-nbex').value*elem("c-journal-menulist").selectedItem.getAttribute("tarif");
    } else elem("c-journal-total").value="";

    if (1*elem("c-reglement-montant").value==0 || elem("c-reglement-montant").value==elem("c-total").value)
	elem("c-reglement-montant").value=total;
    elem("c-total").value=total;
    //alert("totaux calculés");
}

//alert("Fichier chargé");

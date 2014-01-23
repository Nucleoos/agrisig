var FactureEnCours=0;

/*
 * @param table table maitre du document à imprimer
 */

function QueryNumber(query){
    result=pgsql_query(query);
    if (result.rowCount>0){
	var enum=result.enumerate();
	enum.first();
	return enum.getVariant(0);
    }
    return null;
}


function ChoisitModele(table){
    var query = "SELECT IM_Numero FROM Impression WHERE lower(IM_KeyTable)='"+table.toLowerCase()+"' and IM_Societe=current_societe() AND IM_Defaut;";
    var result = pgsql_query(query);
    if (result.rowCount>0) {
	var enum = result.enumerate();
	enum.first();
	return enum.getVariant(0);
    }
    return -1;
}


function LancerPrint(){
    window.openDialog('gestsea_print.xul','showmore','modal,centerscreen,chrome');
}

function Test(compo){
    alert(compo.getCleVal());
}

function ValideReglement(compo)
{
    if (confirm("Etes-vous sûr(e) de vouloir valider le réglement ?")) {
	num_reglement=compo.getCleVal();
	pgsql_query("SELECT FC_ReglementVersCompta("+num_reglement+");");
    }
}

function ChangerNumeroJournal()
{
    var num=QueryNumber("SELECT cs_valeur FROM constante WHERE cs_type=1;");
    num=prompt("Veuillez indiquer le numéro du journal .\nN'oubliez pas de rafraichir la liste ensuite.",num);
    if (num!=null && num!=undefined) {
	query="UPDATE constante SET cs_valeur="+num+" WHERE cs_type=1;";
	pgsql_update(query);
    }
}

function ChangerNombrePasses()
{
    var num=QueryNumber("SELECT cs_valeur FROM constante WHERE cs_type=2;");
    num=prompt("Veuillez indiquer le nombre de numéros passés après la fin de service pour lequel une relance est souhaitable.",num);
    if (num!=null && num!=undefined) {
	query="UPDATE constante SET cs_valeur="+num+" WHERE cs_type=2;";
	pgsql_update(query);
    }
}

function ChangerNombreFuturs()
{
    var num=QueryNumber("SELECT cs_valeur FROM constante WHERE cs_type=3;");
    num=prompt("Veuillez indiquer le nombre de numéros à paraitre avant la fin de service pour lequel une relance est souhaitable.",num);
    if (num!=null && num!=undefined) {
	query="UPDATE constante SET cs_valeur="+num+" WHERE cs_type=3;";
	pgsql_update(query);
    }
}

function GroupeRoutage(compo)
{
    FactureEnCours=compo.getCleVal();
    window.openDialog("gestsea_routage.xul");
}

function SupprimeRoutage(compo)
{
    FactureEnCours=compo.getCleVal();
    if (confirm("Etes-vous sûr(e) de vouloir supprimer les routages associés à cette facture ?")) {
	query="DELETE FROM routage WHERE fa_numero="+FactureEnCours+";";
	pgsql_update(query);
    }
}

function DevisVersFacture(compo){
    //    alert("Fonction pas encore en place : devis n°"+compo.getCleVal()+".");
    //    var NumDevis=compo.getCleVal();
    if (confirm("Voulez-vous réellement passer ce devis en facture?")) {
	query="SELECT FC_DevisVersFacture("+compo.getCleVal()+");";
	var NumFact=QueryNumber(query);
	FactureEnCours=NumFact;
	if (NumFact==null)
	    alert("Le devis n'a pas pu être passé en facture.");
	else
	    alert("Facture créée avec succès :\nN° "+NumFact);
	//    window.openDialog('gestsea_reglement.xul');
    }
}

function FactureVersAvoir(compo){
    if (confirm("Voulez-vous réellement passer cette facture en avoir?")) {
	query="SELECT FC_FactureVersAvoir("+compo.getCleVal()+");";
	var NumFact=QueryNumber(query);
	if (NumFact==null)
	    alert("La facture n'a pas pu être passé en avoir.");
	else
	    alert("Avoir créé avec succès :\nN° "+NumFact);
    }
}

function ViderPersonneUpdate(){
    pgsql_update("DELETE FROM Personneupdate;");
    alert("La liste a été vidée.");
}

function MiseAJourAdhesion(){
    pgsql_query("SELECT FC_MAJ_Adhesion();");
    alert("Les adhésions ont été mises à jour.");
}


function LastBordereauPrint(){
    var modele= ChoisitModele('reglement');
    var adresse=QueryNumber("SELECT pi_"+modele+"(0)");
    window.setTimeout("window.open('"+adresse+"')",500);
}

function BordereauPrint(){
    var debut, fin;
    debut=QueryNumber("SELECT cs_valeur FROM constante WHERE cs_type=100;");
    fin=QueryNumber("SELECT cs_valeur FROM constante WHERE cs_type=101;");
    debut=prompt("Veuillez indiquer la date de début du bordereau ("+debut+")",fin);
    if (debut!=null && debut!=undefined) {
	var query="UPDATE constante SET cs_valeur='"+debut+"' WHERE cs_type=100;";
	pgsql_update(query);
	fin=prompt("Veuillez indiquer la date de fin du bordereau ("+fin+")",debut);
	if (fin!=null && fin!=undefined) {
	    query="UPDATE constante SET cs_valeur='"+fin+"' WHERE cs_type=101;";
	    pgsql_update(query);
	    var modele= ChoisitModele('reglement');
	    var adresse=QueryNumber("SELECT pi_"+modele+"(0)");
	    window.setTimeout("window.open('"+adresse+"')",500);
	}
    }
}


function Imprimer(compo,table){
    var adresse;
    if (compo.getCleVal()>=0){
	modele = ChoisitModele(table);
	if (modele>0) {
	    var query="SELECT pi_"+modele+"("+compo.getCleVal()+")";
	    var result = pgsql_query(query);
	    if (result.rowCount>0) {
		var enum = result.enumerate();
		enum.first();
		adresse=enum.getVariant(0);
		window.setTimeout("window.open('"+adresse+"')",500);
	    } else alert("Une erreur est survenue lors de la création du document.\nLe modèle est peut-être invalide.");
	} else alert("Aucun modèle n'a été trouvé pour ce type d'impression : \nPas de modèle '"+table+"' par défaut!");
    } else alert("Il faut sélectionner une ligne de la liste avant de lancer l'impression.");
}

/*
function Imprimer(compo,table){
    if (compo.getCleVal()>=0){
	//	alert("Impression du document "+table+" n "+compo.getCleVal()+".");
	modele = ChoisitModele(table);
	if (modele>0) latex_ImprimerUnDocument(modele,compo.getCleVal());
	else alert("Aucun modèle n'a été trouvé pour ce type d'impression : \nPas de modèle '"+table+"' par défaut!");
    } else alert("Il faut sélectionner une ligne de la liste avant de lancer l'impression.");
}
*/
//***********************************************************************
// Bouton Rechercher
//***********************************************************************

function Open_Rechercher(Req,CompoPerso)
{
    var res=pgsql_query(Req);
    if (res.rowCount!=0) {
	window.openDialog("RecherchePop.xul", "showmore", "centerscreen, modal, chrome,scrollbars,resizable",CompoPerso,res);
    } else alert("Personne non trouvée");
}

function Recherche_Num(CompoPerso)
{
    var Cle=prompt("Entrez un numéro de personne","");
    if (Cle==null) return;
    Cle=Cle*1+1000000;
    var Req='select pe_numero from personne where pe_numero = '+Cle;
    var res=pgsql_query(Req);
    if (res.rowCount!=0){
	var enumerator=res.enumerate();
	enumerator.beforeFirst();
	enumerator.next();
	//CompoPerso.ConserverLaSelection=false;
	CompoPerso.ForceNextSelection(enumerator.getVariant(0));
	CompoPerso.SelectItem(enumerator.getVariant(0));
	//CompoPerso.ConserverLaSelection=true;
    } else alert("Personne non trouvée");
}

function Recherche_Nom(CompoPerso)
{
    var NomPerso=prompt("Entrez le nom de la personne","");
    if (NomPerso==null)
	return;
    var Req="select pe_numero,pe_titre,pe_fullname,pe_complement from personne where pe_libelle ilike('%"+NomPerso+"%') order by pe_fullname";
    Open_Rechercher(Req,CompoPerso);
}

function Recherche_CP(CompoPerso)
{
    var CpPerso=prompt("Entrez un code postal","");
    if (CpPerso==null)
	return;
    var Req="select personne.pe_numero,pe_titre,pe_fullname,pe_complement from personne join adresse on (adresse.pe_numero=personne.pe_numero) join codepostal on (adresse.cp_numero=codepostal.cp_numero) where cp_codepostal="+CpPerso+"  order by pe_fullname";
    Open_Rechercher(Req,CompoPerso);
}

function Recherche_Ville(CompoPerso)
{
    var NomVille=prompt("Entrez le nom de la ville","");
    if (NomVille==null)
	return;
    var Req="select personne.pe_numero,pe_titre,pe_fullname,pe_complement from personne join adresse on (adresse.pe_numero=personne.pe_numero) join ville on (adresse.vi_numero=ville.vi_numero) where vi_nom ilike('%"+NomVille+"%')  order by pe_fullname";
    Open_Rechercher(Req,CompoPerso);
}

function Recherche_Contact(CompoPerso)
{
    var NumCont=prompt("Entrez un numéro de téléphone/fax/portable","");
    if (NumCont==null)
	return;
    var Req="select personne.pe_numero,pe_titre,pe_fullname,pe_complement from personne join estjoignable on (personne.pe_numero=estjoignable.pe_numero) join contact on (estjoignable.cn_numero=contact.cn_numero) where contact.cn_coordonnees ilike('"+NumCont+"%')  order by pe_fullname";
    Open_Rechercher(Req,CompoPerso);
}

//***********************************************************************
// Onglet Est Lié
//***********************************************************************

function RefreshOngletEstLie(CompoPerso)
{
    if (!ALeDroit(DT_SELECT,'estlie'))
	return;
	
    var Cle=CompoPerso.getCleVal();
    
    var query="(select personne.pe_numero,pe_titre,personne.pe_nom,personne.pe_prenom,pe_complement from estlie join personne on (estlie.el_personne1=personne.pe_numero) where estlie.el_personne2="+Cle+")";
    query +=  " UNION ";
    query +=  "(select personne.pe_numero,pe_titre,personne.pe_nom,personne.pe_prenom,pe_complement from estlie join personne on (estlie.el_personne2=personne.pe_numero) where estlie.el_personne1="+Cle+")";
    
    var result=pgsql_query(query);

    var tree=top.document.getElementById("arbre_lierA");

    var sources=tree.database.GetDataSources();
    var oldds;

    while (sources.hasMoreElements()) {
	oldds = sources.getNext();
	tree.database.RemoveDataSource(oldds);
    }
    
    var ds=result.QueryInterface(Components.interfaces.nsIRDFDataSource);
    tree.database.AddDataSource(ds);
    
    tree.builder.rebuild();
}

function Insert_LierA()
{
    if (!ALeDroit(DT_INSERT,'estlie')){
	alert("Vous n'avez pas le droit d'ajouter une liaison");
	return;
    }
    var tree=top.document.getElementById("arbre_lierA");
    var Id=tree.getAttribute("IdTab");
    CompoPerso=GetSQLCompoAt(Id);
    var Cle1=CompoPerso.getCleVal();
    if (Cle1==-1){
	alert("Vous devez être sur la personne à lier \n(si vous êtes en train d'inserer la personne passez en mode mise à jour pour ajouter une liaison)");
	return;
    }
    var CleFede=prompt("Entrez le n°adhérent de la personne à lier");
    CleFede=CleFede*1+1000000;
    var query,res;
    if (CleFede!=null)
	{
	    query='select pe_numero from personne where pe_numero='+CleFede;
	    res=pgsql_query(query);
	    if (res.rowCount!=0)
		{
		    var enumerator=res.enumerate();
		    enumerator.first();
		    var Cle2=enumerator.getVariant(0);

		    /* on vérifie que le lien n'existe pas déjà */
		    query='(select * from estlie where el_personne2='+Cle1+' and el_personne1='+Cle2+')';
		    query+=' UNION ';
		    query+='(select * from estlie where el_personne2='+Cle2+' and el_personne1='+Cle1+')';
		    res=pgsql_query(query);
		    if (res.rowCount==0)
			{
			    query='insert into estlie (el_personne2,el_personne1) values('+Cle1+','+Cle2+')';
			    pgsql_update(query);
			    RefreshOngletEstLie(CompoPerso);
			}
		    else
			alert('Ce lien existe déjà');
		}
	    else
		alert('Ce numéro n\'existe pas');
	}
}

function Delete_LierA()
{
    if (!ALeDroit(DT_DELETE,'estlie'))
	{
	    alert("Vous n'avez pas le droit de supprimer une liaison");
	    return;
	}
    var tree=top.document.getElementById("arbre_lierA");
    var Id=tree.getAttribute("IdTab");
    CompoPerso=GetSQLCompoAt(Id);
    var Cle1=CompoPerso.getCleVal();
    var Cle2;
    if (tree.view!=null && tree.currentIndex!=-1)
	{
	    if (confirm("Voulez-vous vraiment supprimer cette liaison ?")){
		Cle2=tree.view.getCellValue(tree.currentIndex, tree.treeBoxObject.columns.getColumnAt(0));
		query='delete from estlie where el_personne2='+Cle1+' and el_personne1='+Cle2;
		pgsql_update(query);
		query='delete from estlie where el_personne2='+Cle2+' and el_personne1='+Cle1;
		pgsql_update(query);
		RefreshOngletEstLie(CompoPerso);
	    }
	}
    else
	alert("Selectionnez la personne à délier");
}

function ConstruireOngletEstLie(Nom_tabbox,IdTab)
{
    var tabbox=top.document.getElementById(Nom_tabbox);
    var mydoc=top.document;
    var tab,tabpanel,groupbox,caption,tree,treecols,treecol,splitter,template,treechildren,treeitem,treerow,treecell,button,hbox;
    
    tab=mydoc.createElement("tab");
    tab.setAttribute("label","Liens");
    tabbox.firstChild.firstChild.appendChild(tab);
    
    tabpanel=mydoc.createElement("tabpanel");
    tabpanel.setAttribute("flex","1");
    tabpanel.setAttribute("orient","vertical");
    tabbox.childNodes[3].appendChild(tabpanel);
    
    groupbox = mydoc.createElement("groupbox");
    groupbox.setAttribute("flex","1");
    tabpanel.appendChild(groupbox);
			 
    caption = mydoc.createElement("caption");
    caption.setAttribute("label","Liens vers les personnes");
    groupbox.appendChild(caption);

    tree = mydoc.createElement("tree");
    tree.setAttribute("flex","1");
    tree.setAttribute("IdTab",IdTab);
    tree.setAttribute("id","arbre_lierA");
    tree.setAttribute("style","min-height:100px;min-width:300px");
    tree.setAttribute("enableColumnDrag","true");
    tree.setAttribute("datasources","rdf:null");
    tree.setAttribute("ref","SQL:ResultRoot");
    tree.setAttribute("flags","dont-build-content");
    groupbox.appendChild(tree);
    //    tabpanel.appendChild(tree);
    
    /* on génère les colonnes */
    treecols = mydoc.createElement("treecols");
    tree.appendChild(treecols);
    
    /* les colonnes */
    treecol = mydoc.createElement("treecol");
    treecol.setAttribute("flex","1");
    treecol.setAttribute("label","N°Adhérent");
    treecol.setAttribute("sortDirection","ascending");
    treecol.setAttribute("sortActive","true");
    treecols.appendChild(treecol);
    
    splitter = mydoc.createElement("splitter");
    splitter.setAttribute("class","tree-splitter");
    treecols.appendChild(splitter);
    
    treecol = mydoc.createElement("treecol");
    treecol.setAttribute("flex","1");
    treecol.setAttribute("label","Titre");
    treecols.appendChild(treecol);
    
    splitter = mydoc.createElement("splitter");
    splitter.setAttribute("class","tree-splitter");
    treecols.appendChild(splitter);
    
    treecol = mydoc.createElement("treecol");
    treecol.setAttribute("flex","1");
    treecol.setAttribute("label","Nom");
    treecols.appendChild(treecol);
    
    splitter = mydoc.createElement("splitter");
    splitter.setAttribute("class","tree-splitter");
    treecols.appendChild(splitter);
    
    treecol = mydoc.createElement("treecol");
    treecol.setAttribute("flex","1");
    treecol.setAttribute("label","Prénom");
    treecols.appendChild(treecol);
    
    splitter = mydoc.createElement("splitter");
    splitter.setAttribute("class","tree-splitter");
    treecols.appendChild(splitter);
    
    treecol = mydoc.createElement("treecol");
    treecol.setAttribute("flex","1");
    treecol.setAttribute("label","Complement");
    treecols.appendChild(treecol);
    
    template = mydoc.createElement("template");
    tree.appendChild(template);
    
    treechildren = mydoc.createElement("treechildren");
    template.appendChild(treechildren);
    
    treeitem = mydoc.createElement("treeitem");
    treeitem.setAttribute("uri","rdf:*");
    treechildren.appendChild(treeitem);
    
    /* on génère les lignes */
    
    treerow = mydoc.createElement("treerow");
    treeitem.appendChild(treerow);
    
    treecell = mydoc.createElement("treecell");
    treecell.setAttribute("label","rdf:http://www.mozilla.org/SQL-rdf#pe_numero");
    treecell.setAttribute("value","rdf:http://www.mozilla.org/SQL-rdf#pe_numero");
    treerow.appendChild(treecell);
    
    treecell = mydoc.createElement("treecell");
    treecell.setAttribute("label","rdf:http://www.mozilla.org/SQL-rdf#pe_titre");
    treecell.setAttribute("value","rdf:http://www.mozilla.org/SQL-rdf#pe_numero");
    treerow.appendChild(treecell);
    
    treecell = mydoc.createElement("treecell");
    treecell.setAttribute("label","rdf:http://www.mozilla.org/SQL-rdf#pe_nom");
    treecell.setAttribute("value","rdf:http://www.mozilla.org/SQL-rdf#pe_numero");
    treerow.appendChild(treecell);
    
    treecell = mydoc.createElement("treecell");
    treecell.setAttribute("label","rdf:http://www.mozilla.org/SQL-rdf#pe_prenom");
    treecell.setAttribute("value","rdf:http://www.mozilla.org/SQL-rdf#pe_numero");
    treerow.appendChild(treecell);
    
    treecell = mydoc.createElement("treecell");
    treecell.setAttribute("label","rdf:http://www.mozilla.org/SQL-rdf#pe_complement");
    treecell.setAttribute("value","rdf:http://www.mozilla.org/SQL-rdf#pe_numero");
    treerow.appendChild(treecell);

    hbox = mydoc.createElement("hbox");
    //    hbox.setAttribute("flex","1");
    hbox.setAttribute("pack","end");
    hbox.setAttribute("class","fondstyle");
    hbox.setAttribute("align","end");
    tabpanel.appendChild(hbox);
    
    button = mydoc.createElement("button");
    button.setAttribute("class","icon_Ajouter");
    button.setAttribute("label","Ajouter");
    button.setAttribute("oncommand","Insert_LierA()");
    hbox.appendChild(button);
    
    button = mydoc.createElement("button");
    button.setAttribute("class","icon_Supprimer");
    button.setAttribute("label","Supprimer");
    button.setAttribute("oncommand","Delete_LierA()");
    hbox.appendChild(button);
}


//***********************************************************************
// Fin
//***********************************************************************

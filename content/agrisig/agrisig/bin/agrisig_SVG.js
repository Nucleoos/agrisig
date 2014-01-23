/* Indice de surfaces */
const AIRE_M2      = 1;
const AIRE_HECTARE = 2;
const AIRE_ARE     = 3;
const AIRE_KM2     = 4;
/* Indice des tabs d'actions */
const TAB_PROFIL     = 0;
const TAB_RECOLTE    = 1;
const TAB_IRRIGATION = 2;


var Loaded=false;
/**
 * Convertit les unités de surfaces en utilisant le m² comme unité de référence
 * @param   surface      valeur de la surface
 * @param   unite_sortie unité de sortie
 * @param   unite_entree unite d'entrée si différent du m²
 * 
 * @return               retourne la surface dans l'unite demandée
 */
function surface_convert(surface, unite_sortie, unite_entree)
{
    var surface_norm;
    var surface_retour;

    if (unite_entree==null) unite_entree=AIRE_M2;

    /* Conversion en m² si nécessaire */
    if (unite_entree!=AIRE_M2) {
	switch(unite_entree){
	case AIRE_HECTARE: surface_norm = surface*10000; break;
	case AIRE_ARE:     surface_norm = surface*100; break;
	case AIRE_KM2:     surface_norm = surface*1000000; break;
	}
    }else surface_norm=surface;

    /* Conversion dans l'unité voulue */
    if (unite_sortie!=AIRE_M2){
	switch(unite_sortie){
	case AIRE_HECTARE: surface_retour = surface_norm/10000; break;
	case AIRE_ARE:     surface_retour = surface_norm/100; break;
	case AIRE_KM2:     surface_retour = surface_norm/1000000; break;
	}
    }else surface_retour=surface_norm;

    return surface_retour;
}



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


/* Remplit une liste correctement en concervant la ligne sélectionnée */
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
		
	if (idx<0)
	    list.selectedIndex=0;
	else{
	    if (idx>=list.rowCount)
		list.selectedIndex=list.rowCount-1;
	    else
		list.selectedIndex=idx;
	}
    }
    list.setAttribute("lines",result.rowCount);

    return list;
}

/* Remplit une liste correctement en concervant la ligne sélectionnée */
function fill_tree(object,query){
    var result = pgsql_query(query);
    var ds = result.QueryInterface(Components.interfaces.nsIRDFDataSource);
    var tree = top.document.getElementById(object);
    var idx = tree.currentIndex;

    DeleteDataSource(tree);
    tree.database.AddDataSource(ds);
    tree.builder.rebuild();

    if (idx<0)
	tree.view.selection.select(0);
    else{
	if (idx>=tree.view.rowCount)
	    tree.view.selection.select(tree.view.rowCount-1);
	else
	    tree.view.selection.select(idx);
    }
    return tree;
}


/* Fonction utilisée pour vérifier la présence d'enregistrements spécifiques */
function pas_de_resultat(query){
    var result=pgsql_query(query);
    if (result.rowCount>0)
	return false;
    else
	return true;
}


function onSousIlotClick(){
    var sousilot=current_sousilot();

    top.document.getElementById("tab-sousilot-numero").value=sousilot;
    tab_sousilot_refresh(sousilot);
    tab_ilot_refresh(sousilot);
    sousilot_selection_repositionne(sousilot);
    action_refresh();
}

function sousilot_clean(){
    var query="DELETE FROM sousilot WHERE si_numero>=100;";
    pgsql_update(query);
}




/*=============================================================================*/
/*=============================================================================*/

/*                            P R E F E R E N C E S                            */

/*=============================================================================*/
/*=============================================================================*/


function setPreference(champs,valeur){
    var query="SELECT AgriSetPreference('"+champs+"','"+valeur+"');";
    pgsql_query(query);
}

function getPreference(champs,defaut){
    var query="SELECT AgriGetPreference('"+champs+"');";
    var result=pgsql_query(query);
    if (result.rowCount>0){
	var enum=result.enumerate();
	enum.first();
	if (enum.getVariant(0)==''){
	    setPreference(champs,defaut);
	    return defaut;
	} else return enum.getVariant(0);
    } return null;
}



/*=============================================================================*/
/*=============================================================================*/

/*                ( R E - )  I N I T I A L I S A T I O N                       */

/*=============================================================================*/
/*=============================================================================*/


function agrisig_user(){
    alert("Par sécurité, veuillez vous enregistrer en tant qu'administrateur");
    window.openDialog('user.xul','showmore','centerscreen,modal,chrome');
}

function agrisig_start(){
    pgsql_init(true);
    if (pgsql_getConnectionState()){
	var query="SELECT AU_Admin, AU_Login, AU_Existe FROM AgrisigUser;";
	var result=pgsql_query(query); 
	if (result.rowCount>0){
	    var enum=result.enumerate();
            enum.first();
	    var superuser= enum.getBool(0);
            var login    = enum.getVariant(1);
	    var existe   = enum.getBool(2);
            if (!existe){
		if (superuser){
		    if (login.toLowerCase()=='admin'){
			//alert('Gestion des utilisateurs');
			agrisig_user();}
		    else
			if (confirm("Vous ne possédez pas de compte. En tant qu'administrateur vous pouvez vous en créer un.\nVoulez-vous continuer?")) agrisig_user();
		}
		else
		    alert("Vous n'avez pas de compte exploitant actif.\nVeuillez contacter un administrateur pour qu'il vous active votre compte.");
		/* On quitte le logiciel */
		window.close();
	    }
	    else{
		top.document.getElementById('menu-user').setAttribute("disabled",!superuser);
		svg_init();
		demarrage_SVG();
		agrisig_overlay_Chargement();
		//alert("Démarrage effectué");
	    }
	}
	else{
	    if (confirm('Les données saisies sont incorrectes. Voulez-vous recommencer?'))
		agrisig_start();
	    else
       		window.close();
	}
    }
    else
	if (confirm("La connexion au serveur n'a pas pu etre établie. Voulez-vous retenter une connexion?"))
	    agrisig_start();
	else
	    window.close();
}

function demarrage_SVG(){
    if (!Loaded){
	tab_couleur_list_fill();
      	tab_couche_refresh();
	date_travail_refresh();
	tab_sousilot_adresse_list_refresh();
	tab_ilot_commune_list_refresh();
	sousilot_selection_refresh();
      	tab_groupe_list_refresh();
       	tab_groupe_sousilot_list_refresh();
	tab_sousilot_groupe_list_refresh();
	//	ongl_groupes_tree_refresh();
	Loaded=true;
    }
}

function onglet_carte_refresh(){
    date_travail_refresh();
    sousilot_selection_refresh();
    tab_couche_refresh();

}

/*=============================================================================*/
/*=============================================================================*/

/*                    P A R T I E   H A U T   G A U C H E                      */

/*=============================================================================*/
/*=============================================================================*/

/* Rafraichit le selecteur de sous-ilot */
function sousilot_selection_refresh(){
    query="SELECT SI_Libelle, SI_Numero FROM SousIlot;";
    fill_list("sousilot-selection-list",query);
}

/* Repositionne le selecteur de sous-ilot sur celui désiré*/
function sousilot_selection_repositionne(sousilot){
    var list=top.document.getElementById("sousilot-selection-list");
    var i;
    for(i=0;i<1*list.getAttribute("lines");i++){
	list.selectedIndex=i;
	if (list.selectedItem.value==sousilot) break;
    }
}

/* Opération effectuée lors de la selection dans la liste */
function sousilot_selection_select(list){
    list_select_sousilot(list);
    ChangerOutils(top.document.getElementById("carte_centrer_select"));
}


function date_travail_change(){
    date=top.document.getElementById("date-travail").value;
    if (isDateValid(date)){
	setPreference("DATE_TRAVAIL",date);
	/* Refresh de l'affichage SVG et du reste*/
	onglet_carte_refresh();
    } else alert("La date de travail n'est pas valide.");
}

function date_travail_refresh(){
    var ladate=new Date();
    top.document.getElementById("date-travail").value=getPreference("DATE_TRAVAIL",ladate.getDate()+"/"+(ladate.getMonth()+1)+"/"+ladate.getFullYear());
}

function current_date(){
    return elem("date-travail").value;
}




/*=============================================================================*/
/*=============================================================================*/

/*            P A R T I E   O N G L E T   H A U T   G A U C H E                */

/*=============================================================================*/
/*=============================================================================*/



/*============================================================================*/
/*                             ONGLET SOUS-ILOT                               */
/*============================================================================*/

/**
 * Rafraichit l'onglet droit sous-ilot
 * @param   si_numero   numero du sous-ilot dont on récupère les infos
 * @param   date        date en cours
 */

function tab_sousilot_refresh(si_numero)
{
    if (si_numero==null)
	si_numero=2;

    /* Recupération du nom et de la taille du sous ilot */
    var query="SELECT si_nom, area(si_trace), perimeter(si_trace), si_adresse "+
	"FROM sousilot WHERE si_numero="+si_numero+";";
    //    prompt("requete",query);
    var result = pgsql_query(query);
    if (result.rowCount>0){
	var enum = result.enumerate();
	var surface;
	var nom,data;
	var i=0;
	enum.first();
	nom = enum.getVariant(i++);
	if (nom==null)
	    top.document.getElementById("tab-sousilot-nom").value = "<Pas de nom>";
	else
	    top.document.getElementById("tab-sousilot-nom").value = nom;
	
	surface = enum.getVariant(i++);
	
	/* Chargement des valeurs convertie */
	top.document.getElementById("tab_sousilot_surface_m2").value  = surface;
	top.document.getElementById("tab_sousilot_surface_km2").value = surface_convert(surface,AIRE_KM2);
	top.document.getElementById("tab_sousilot_surface_ha").value  = surface_convert(surface,AIRE_HECTARE);
	top.document.getElementById("tab_sousilot_surface_are").value = surface_convert(surface,AIRE_ARE);
	tab_sousilot_unite();
	
	/* Construction de l'adrese */
	data = enum.getVariant(i++);
	if (data!=null) top.document.getElementById("tab-sousilot-perimetre").value = data;
	
	//Recherche de l'adresse dans la liste
	data=enum.getVariant(i++);
	//	tab_sousilot_adresse_list_refresh();
	var list=top.document.getElementById("tab-sousilot-adresse-list");
	var j,max;
	max=1*list.getAttribute("lines");
	//	alert(max+", "+data);
	for(j=0;j<max;j++){
	    list.selectedIndex=j;
	    //alert(list.selectedIndex+" "+list.selectedItem.value+" "+data);
	    if (list.selectedItem.value==data) break;
	}
    }
    
    tab_sousilot_groupe_list_refresh();
}

/* Met à jour la valeur de la surface suivant l'unité */
function tab_sousilot_unite()
{
    top.document.getElementById("tab_sousilot_surface").value = top.document.getElementById("tab_sousilot_list").selectedItem.value;
}

/* Rafraichit la liste des adresses */
function tab_sousilot_adresse_list_refresh(){
    var query="SELECT AD_Libelle,AD_Numero FROM Adresse;";
    fill_list("tab-sousilot-adresse-list",query);
}

/* Rafraichit la table des groupes */
function tab_sousilot_groupe_list_refresh(){
    /* Recupération de la liste des groupes auxquels appartient le sous-ilot */
    var sousilot=current_sousilot();
    if (sousilot!=null && sousilot!=undefined){
	query = "SELECT gr_nom, gr_numero FROM sousilotgroupe, groupe WHERE sg_sousilot="+sousilot+" AND sg_groupe=gr_numero;";
	fill_list("tab-sousilot-groupe-list",query);
    }
}

/* Supprime l'appartenance à un groupe */
function tab_sousilot_detacher_groupe(){
    var sousilot=current_sousilot();
    var list=top.document.getElementById("tab-sousilot-groupe-list");
    if (list.selectedIndex>=0){
	var groupe=list.selectedItem.value;
	sousilotgroupe("delete",sousilot,groupe);
    }else alert("Vous devez d'abord sélectionner un groupe dans la liste pour pouvoir détacher le sous-îlot de ce groupe.");
}

/* Fait d'un sousilot le membre d'un groupe */
function tab_sousilot_rattacher_groupe(){
    var sousilot=current_sousilot();
    var list=top.document.getElementById("tab-sousilot-groupe-selection-list");
    if (list.selectedIndex>=0){
	var groupe=list.selectedItem.value;
	sousilotgroupe("insert",sousilot,groupe);
    } else alert("Vous devez sélectionner un des groupes auxquel vous désirez rattacher le sous-îlot.");
}

/*----------------------------------------------------------------*/
function elem(id){
    return top.document.getElementById(id);
}

/* Permet d'éditer les données du sous-ilot */
function tab_sousilot_modifier(){
    var sousilot=current_sousilot();
    if (sousilot==null || sousilot==undefined)
	return;
    elem("tab-sousilot-modifier").hidden=true;
    elem("tab-sousilot-enregistrer").hidden=false;
    elem("tab-sousilot-annuler").hidden=false;

    elem("tab-sousilot-nom").disabled=false;
    elem("tab-sousilot-creation").disabled=false;
    elem("tab-sousilot-adresse-list").disabled=false;
}

/* Permet d'annuler les modifications */
function tab_sousilot_annuler(){
    elem("tab-sousilot-modifier").hidden=false;
    elem("tab-sousilot-enregistrer").hidden=true;
    elem("tab-sousilot-annuler").hidden=true;

    elem("tab-sousilot-nom").disabled=true;
    elem("tab-sousilot-creation").disabled=true;
    elem("tab-sousilot-adresse-list").disabled=true;
}

/* Enregistrer les infos relatives au sous-ilot */
function tab_sousilot_enregistrer(){
    tab_sousilot_annuler();
    var nom    =elem("tab-sousilot-nom").value;
    var adresse=elem("tab-sousilot-adresse-list").selectedItem.value;
    var numero=current_sousilot();
    var query;
    query = "UPDATE sousilot SET si_nom='"+nom+"', si_adresse="+adresse+" WHERE si_numero="+numero+";";
    pgsql_update(query);
    sousilot_selection_refresh();
}

/*----------------------------------------------------------------*/

/* Renvoie le sous-ilot courant */
function current_sousilot(){
    return svg_no_ssilot_base();
}

/* Fonction appellée à chaque fois que l'on a un changement
au niveau des sous-ilots  
function onSousilotChange(){
    var sousilot=current_sousilot();
    sousilot_selection_refresh();
    sousilot_selection_repositionne(sousilot);

}
*/
/*============================================================================*/
/*                                ONGLET ILOT                                 */
/*============================================================================*/

/**
 * Rafraichit l'onglet droit ilot
 * @param   si_numero   numero de l'ilot dont on récupère les infos
 * @param   date        date en cours
 */

function tab_ilot_refresh(si_numero)
{
    if (si_numero==null)
	si_numero=2;
    var il_numero;

    /* Recupération du nom et de la taille du sous ilot */
    var query="SELECT il_numero, il_nom, il_code, area(il_trace),il_surfaceref, perimeter(il_trace), il_commune "+
	"FROM ilot, sousilot "+
	"WHERE si_numero="+si_numero+" AND si_ilot=il_numero;";
    //    prompt('Requestingfulliest request :',query);

    var result = pgsql_query(query);
    top.document.getElementById("tab-ilot-numero").value = null;
    if (result.rowCount>0){
	var enum = result.enumerate();
	var surface;
	var nom,data;
	var i=0;

	enum.first();

	il_numero = enum.getVariant(i++);
	top.document.getElementById("tab-ilot-numero").value = il_numero;

	nom = enum.getVariant(i++);
	if (nom==null)
	    top.document.getElementById("tab-ilot-nom").value = "<Pas de nom>";
	else
	    top.document.getElementById("tab-ilot-nom").value = nom;

	data = enum.getVariant(i++);
	if (data==null) top.document.getElementById("tab-ilot-code").value = "-";
	else top.document.getElementById("tab-ilot-code").value = data;

	surface = enum.getVariant(i++);
	/* Chargement des valeurs convertie */
	top.document.getElementById("tab_ilot_surface_m2").value  = surface;
	top.document.getElementById("tab_ilot_surface_km2").value = surface_convert(surface,AIRE_KM2);
	top.document.getElementById("tab_ilot_surface_ha").value  = surface_convert(surface,AIRE_HECTARE);
	top.document.getElementById("tab_ilot_surface_are").value = surface_convert(surface,AIRE_ARE);
	tab_ilot_unite();
	
	
	surface = enum.getVariant(i++);
	/* Chargement des valeurs convertie */
	top.document.getElementById("tab_ilot_surfaceref_m2").value  = surface;
	top.document.getElementById("tab_ilot_surfaceref_km2").value = surface_convert(surface,AIRE_KM2);
	top.document.getElementById("tab_ilot_surfaceref_ha").value  = surface_convert(surface,AIRE_HECTARE);
	top.document.getElementById("tab_ilot_surfaceref_are").value = surface_convert(surface,AIRE_ARE);
	top.document.getElementById("tab_ilot_surfaceref").value = top.document.getElementById("tab_ilot_listref").selectedItem.value;
	tab_ilot_uniteref();


	data = enum.getVariant(i++);
	if (data==null) top.document.getElementById("tab-ilot-perimetre").value = "-";
	else top.document.getElementById("tab-ilot-perimetre").value = data;
 
	/* Recherche de la commune dans la liste */
	data=enum.getVariant(i++);
	//	tab_ilot_commune_list_refresh();
	var list=top.document.getElementById("tab-ilot-commune-list");
	var j,max;
	max=1*list.getAttribute("lines");
	for(j=0;j<max;j++){
	    list.selectedIndex=j;
	    if (list.selectedItem.value==data) break;
	}

	/* Recupération des sousilots */
	var couche = current_couche();
	// 	alert('couche '+couche);
	query =  "SELECT si_nom, si_numero, area(si_trace)/10000 AS si_surface, area(si_trace) AS si_aire FROM sousilotfils ";
	query += "WHERE si_ilot="+il_numero+" AND si_couche="+couche+";";
	//      	prompt("ilot_refresh : sous-ilots de l'ilot",query);

	var tree = fill_tree("tab-ilot-sousilot-tree",query);
	var i;
	for (i=0;i<tree.view.rowCount;i++){
	    //	    alert(si_numero+" ?= "+tree.view.getCellValue(tree.currentIndex,tree.columns.getColumnAt(0)));
	    if(si_numero==tree.view.getCellValue(i,tree.columns.getColumnAt(0))){
		tree.view.selection.select(i);
	    }
	}
    }
}

/* Met à jour la valeur de la surface suivant l'unité */
function tab_ilot_unite()
{
    top.document.getElementById("tab_ilot_surface").value = top.document.getElementById("tab_ilot_list").selectedItem.value;
}

/* Met à jour la valeur de la surface suivant l'unité */
function tab_ilot_uniteref()
{
    top.document.getElementById("tab_ilot_surfaceref").value = top.document.getElementById("tab_ilot_listref").selectedItem.value;
}

function tab_ilot_commune_list_refresh(){
    var query="SELECT CO_Nom, CO_Numero FROM Commune;";
    fill_list("tab-ilot-commune-list",query);
}
/*------------------------------------------------------------------------------*/

function tab_ilot_modifier(){
    var sousilot=current_sousilot();
    if (sousilot==null || sousilot==undefined)
	return;    
    elem("tab-ilot-modifier").hidden=true;
    elem("tab-ilot-enregistrer").hidden=false;
    elem("tab-ilot-annuler").hidden=false;

    elem("tab-ilot-nom").disabled=false;
    elem("tab-ilot-code").disabled=false;
    elem("tab-ilot-commune-list").disabled=false;
}

function tab_ilot_annuler(){
    elem("tab-ilot-modifier").hidden=false;
    elem("tab-ilot-enregistrer").hidden=true;
    elem("tab-ilot-annuler").hidden=true;

    elem("tab-ilot-nom").disabled=true;
    elem("tab-ilot-code").disabled=true;
    elem("tab-ilot-commune-list").disabled=true;
}

function tab_ilot_enregistrer(){
    tab_ilot_annuler();
    var nom     = elem("tab-ilot-nom").value;
    var code    = elem("tab-ilot-code").value;
    var commune = elem("tab-ilot-commune-list").selectedItem.value;
    var numero  = elem("tab-ilot-numero").value;
    var query;
    query = "UPDATE ilot SET il_nom='"+nom+"', il_code='"+code+"', il_commune="+commune+" WHERE il_numero="+numero+";";
    pgsql_update(query);
}

/*------------------------------------------------------------------------------*/
function tree_select_sousilot(tree_id,col){
    if (tree_id==null) tree_id="tab-ilot-sousilot-tree";
    if (col==null) col=0;
    var tree = top.document.getElementById(tree_id);
    
    if (tree.currentIndex>=0){
	var sousilot=tree.view.getCellValue(tree.currentIndex,tree.columns.getColumnAt(col));
	svg_selectionne_ssilot(sousilot);
    }
}

function list_select_sousilot(list){
    //    var list = top.document.getElementById(list_id);

    if (list.selectedIndex>=0){
	var sousilot=list.selectedItem.value;
	svg_selectionne_ssilot(sousilot);
    }
}



/*============================================================================*/
/*                               ONGLET ACTION                                */
/*============================================================================*/

function accorder(nombre,nom,feminin){
    if (feminin==null)
	feminin=false;
    var nb=nombre*1;
    if (Math.abs(nb)>1)
	return nombre+" "+nom+"s";
    else{
	if (Math.abs(nb)==1)
	    return nombre+" "+nom;
	else{
	    if (feminin)
		return "Aucune "+nom;
	    else
		return "Aucun "+nom;
	}
    }
}

function action_refresh(){
    var query;
    var list;
    var sousilot=current_sousilot();
    if (!(sousilot==null || sousilot==undefined)){
	query="SELECT PR_Nom, PR_Numero FROM Profil,Applique WHERE "+sousilot+"=AL_SousIlot AND AL_Profil=PR_Numero;";
	list =fill_list("action-profil-list",query);
	top.document.getElementById("action-profil-count").value=accorder(list.getAttribute("lines"),"profil");
	query="SELECT RE_Libelle, RE_Numero FROM Recolte WHERE RE_Sousilot="+sousilot+";";
	list =fill_list("action-recolte-list",query);
	top.document.getElementById("action-recolte-count").value=accorder(list.getAttribute("lines"),"récolte",true);
	query="SELECT IR_Libelle, IR_Numero FROM Irrigation WHERE IR_SousIlot="+sousilot+";";
	list =fill_list("action-irrigation-list",query);
	top.document.getElementById("action-irrigation-count").value=accorder(list.getAttribute("lines"),"irrigation",true);
    }
}

function action_voir(){
    var tabbox=top.document.getElementById("action-tabbox");
    var list;
    switch(tabbox.selectedTab){
    case TAB_PROFIL: 
	list = top.document.getElementById("action-profil-list");
	if (list.selectedIndex>=0){
	    alert("A faire!");
	}
	break;
    case TAB_RECOLTE: 
	list = top.document.getElementById("action-recolte-list");
	if (list.selectedIndex>=0){
	    alert("A faire!");
	}
	break;
    case TAB_IRRIGATION: 
	list = top.document.getElementById("action-irrigation-list");
	if (list.selectedIndex>=0){
	    alert("A faire!");
	}
	break;
    default:
	alert("Il n'y a rien à voir pour cet onglet.");
    }
}

function action_ajouter(){
    var tabbox=top.document.getElementById("action-tabbox");
    switch(tabbox.selectedTab){
    case TAB_PROFIL: 
	break;
    case TAB_RECOLTE: 
	break;
    case TAB_IRRIGATION: 
	break;
    default:
	alert("Il n'y a rien à ajouter pour cet onglet.");
    }
}





/*=============================================================================*/
/*=============================================================================*/

/*                     P A R T I E   B A S   G A U C H E                       */

/*=============================================================================*/
/*=============================================================================*/


/*============================================================================*/
/*                              ONGLET COUCHES                                */
/*============================================================================*/

function tab_couche_refresh(provenance){
   /* Recupération de la liste des profils appliqués dessus */
    var query = "SELECT cc_nom, tc_nom, cc_numero, tc_numero FROM couche, typecouche WHERE cc_typecouche=tc_numero ORDER BY cc_nom;";
    var l=fill_list("tab-couche-list",query);
    l.rows=l.rowCount;
    fill_list("tab-couche-travail-popup",query);
    var list=top.document.getElementById("tab-couche-travail");
    if (list.selectedIndex<2)
	list.selectedIndex=2;
    
    tab_couche_travail_select();
}


/* Lors de la sélection d'une couche de travail */
function tab_couche_travail_select(){
    var i,item;

    /* On vérifie que la couche de travail est cochée dans la liste sinon on coche */
    var couche=current_couche();
    var list=top.document.getElementById("tab-couche-list");
    var last=list.getAttribute("last-item");
    for(i=0;i<list.getRowCount();i++){
	item=list.getItemAtIndex(i);
	if (item.value==last){
	    item.checked=false;
	}
	if (item.value==couche){
	    item.checked=true;
	    item.setAttribute("style","color:red;font-weight:bold;");
	    list.setAttribute("last-item",item.value);
	}else{
	    item.setAttribute("style","");
	}
    }

    /* Sauvegarde dans la base pour les vues */
    setPreference("CURRENT_COUCHE",couche);

    /* On liste les versions */
    //    elem("tab-couche-travail-version-checkbox").checked=false;
    query = "SELECT cc_version,cc_numero FROM CoucheBanie WHERE CC_Mere="+couche+" ORDER BY CC_Version";
    fill_list("tab-couche-travail-version-list",query);

    /* Réactualisation de l'affichage SVG */
    svg_refresh();

    /* Réactualisation de la liste des profils */
    action_refresh();

}

/* Valide les opérations d'une couche jusqu'à une date donnée */
function tab_couche_travail_valide(){
    if (confirm("Etes-vous sur de valider la totalité des opérations effectuées jusqu'à la date de travail en cours pour la couche en cours?")){
	var couche=current_couche();
	var date  =current_date();
	var query="SELECT AgriSeparerCouche("+couche+",'"+date+"');";
	pgsql_query(query);
	onglet_carte_refresh();
    }
}


/* Vérifications sur la couche de travail */
function tab_couche_list_select(){
    //    alert("Sélection del'affichage d'une couche");
    var couche=current_couche();
    var list=top.document.getElementById("tab-couche-list");
    if (list.selectedItem.value==couche)
	list.selectedItem.checked=true;
    /* Réactualisation de l'affichage SVG */
    svg_refresh();
}

/* Fonction qui appelle la fonction d'affichage des couches */
function svg_refresh(){
    var taille,i;
    var tab=new Array();
    var item;
    var list= top.document.getElementById("tab-couche-list");
    for (i=0;i<list.getRowCount();i++){
	item=list.getItemAtIndex(i);
	if (item.checked)
	    tab.push(item.value);
    }
    if (elem("tab-couche-travail-version-checkbox").checked)
	tab.push(elem("tab-couche-travail-version-list").selectedItem.value);
    taille=tab.length;
    svg_couche_travail_refresh();
    carte_importer_couches(taille,tab);
}

/* Change la couche de travail */
function svg_couche_travail_refresh(){
    /* Mise en place de la couche de travail */
    var list=top.document.getElementById("tab-couche-travail");
    var travail=list.selectedItem.value;
    svg_change_couche(travail);
}

/* Recuperation du type de la couche */
function current_typecouche(){
    /* on recupère la couche */
    var couche=current_couche();
    /* grace à une requete  on recupère le type de couche */
    var query="SELECT cc_typecouche FROM couche WHERE cc_numero="+couche+";";
    result = pgsql_query(query);
    if (result.rowCount>0){
	var enum = result.enumerate();
	enum.first();
	return enum.getVariant(0);
    }
    return 0;
}

/* Recuperation de la couche */
function current_couche(){
    return top.document.getElementById("tab-couche-travail").selectedItem.value;
}

/*============================================================================*/
/*                              ONGLET COULEURS                               */
/*============================================================================*/

/* Remplissage de la combo de la liste des tables de coloriage */
function tab_couleur_list_fill(){
    var tab=mcd_getTablesCouleur();
    var menupopup=top.document.getElementById("tab-couleur-popup");
    var i=0;
    var menuitem;
    /* Destruction de la liste */

    /* Construction */
    while(tab[0][i]!=undefined){
	menuitem=top.document.createElement("menuitem");
	menuitem.setAttribute("label",tab[0][i]);
	menuitem.setAttribute("value",tab[1][i]);
	menupopup.appendChild(menuitem);
	i++;
    }
    var menulist=top.document.getElementById("tab-couleur-list");
    menulist.selectedIndex=0;
}

function tab_couleur_legende_refresh(){
    var menulist=top.document.getElementById("tab-couleur-list");
    var table=menulist.selectedItem.value;
    var tabchamps=mcd_getMinChampsLogique(table);
    var tablabels=mcd_getMinChampsLabel(table);
    var i=0;
    var debut=true;
    var typechamps;
    var champs="";
    while (tabchamps[i]!=undefined){
	typechamps=mcd_getType(table,tabchamps[i]);
	//alert("Type = "+typechamps+" <"+table+"> <"+tabchamps[i]+">");
	if (typechamps!=TYPE_GEOMETRY && getCle(table).toLowerCase()!=table.toLowerCase()+'.'+tabchamps[i].toLowerCase()){
            if (!debut){
		champs+=" || ' - ' || ";
	    }
	    debut=false;
	    champs+="'"+tablabels[i]+" : ' || ";            
	    switch(typechamps){
	    case TYPE_BOOL:
		champs+="CASE WHEN "+tabchamps[i]+" IS NULL THEN '<Non renseigné>' WHEN "+tabchamps[i]+"=true THEN 'vrai' ELSE 'faux' END ";
		break;
	    case TYPE_INT:
            case TYPE_FLOAT:
		champs+="CASE WHEN "+tabchamps[i]+" IS NULL THEN '<Non renseigné>' ELSE to_char("+tabchamps[i]+",'999999999D99') END ";
		break;
	    case TYPE_DATE:
		champs+="CASE WHEN "+tabchamps[i]+" IS NULL THEN '<Non renseigné>' ELSE to_char("+tabchamps[i]+"::timestamp,'DD/MM/YYYY') END ";
		break;
	    default:
		champs+="CASE WHEN "+tabchamps[i]+" IS NULL THEN '<Non renseigné>' ELSE "+tabchamps[i]+" END ";
		//tabchamps[i];
		break;
	    }
	}
	i++;
    }

    query="SELECT couleur, "+champs+" AS xx_nom, "+getCle(table)+" AS xx_numero FROM "+table+";";
    //    prompt("Requete",query);
    var listbox=fill_list("tab-couleur-legende",query);
    var html;
    /* Mise à jour */
    var colorpicker;
    for (i=0;i<listbox.getRowCount();i++){
	listitem=listbox.getItemAtIndex(i);
	colorpicker=listitem.firstChild.firstChild.firstChild;
	colorpicker.color=colorpicker.getAttribute("value");
    }
    tab_couleur_change();
}

function tab_couleur_legende_enregistre(colorpicker){
    var menulist=top.document.getElementById("tab-couleur-list");
    var table=menulist.selectedItem.value;
    if(colorpicker.color != undefined){
	var query="UPDATE "+table+" SET couleur='"+colorpicker.color+"' WHERE "+getCle(table)+"="+colorpicker.getAttribute("pkey")+";";
	pgsql_update(query);
    }
    tab_couleur_change();
}

function tab_couleur_change(){
    var menulist=top.document.getElementById("tab-couleur-list");
    var table=menulist.selectedItem.value;
    var query=mcd_getRequeteCouleur(table);
    var result=pgsql_query(query);
    if (result.rowCount>0){
	enum=result.enumerate();
	var tab=new Array();
	tab.push(new Array());
	tab.push(new Array());
	var i=0;
	enum.beforeFirst();
        while(enum.next()){
	    tab[0].push(enum.getVariant(1));
	    tab[1].push(enum.getVariant(0));
	    i++;
	}
	tab[0].push(enum.getVariant(1));
	tab[1].push(enum.getVariant(0));
	svg_applique_couleurs(i,tab);
    }
}


/*============================================================================*/
/*                              ONGLET GROUPES                                */
/*============================================================================*/

function current_groupe(){
    var list=top.document.getElementById("tab-groupe-list");
    if (list.selectedIndex>=0)
	return list.selectedItem.value;
    else
	return -1;
}

function tab_groupe_list_refresh(){
    var couche=current_couche();
    var query ="SELECT gr_nom, gr_numero FROM groupe WHERE gr_couche="+couche+" ORDER BY gr_nom;";
    fill_list("tab-groupe-list",query);
    fill_list("tab-sousilot-groupe-selection-list",query);
}

function tab_groupe_sousilot_list_refresh(){
    var groupe=current_groupe();
    var query ="SELECT Sousilot.SI_Libelle, SousIlot.SI_Numero FROM sousilot,sousilotfils,sousilotgroupe WHERE SG_Groupe="+groupe+" AND SG_SousIlot=SousIlotFils.SI_Numero AND SousilotFils.SI_Numero=SousIlot.SI_Numero";
    fill_list("tab-groupe-sousilot-list",query);
}


function tab_groupe_ajouter_sousilot(){
    var sousilot=current_sousilot();
    var groupe=current_groupe();
    if (sousilot>=0){
	if (groupe>=0){
	    sousilotgroupe("insert",sousilot,groupe);
	} else alert("Il est nécessaire de sélectionner le groupe dans lequel il faut mettre le sous-îlot.");
    } else alert("Il est nécessaire de sélectionner le sous-îlot sur la carte pour l'ajouter un groupe.");
}


function tab_groupe_supprimer_sousilot(){
    var list=top.document.getElementById("tab-group-sousilot-list");
    var groupe=current_groupe();
    if (list.selectedIndex>=0){
	if (groupe>=0){
	    var sousilot = list.selectedItem.value;
	    sousilotgroupe("delete",sousilot,groupe);
	} else alert("Vous devez sélectionner le groupe duquel vous désirez retirer le sous-îlot.");
    } else alert("Vous devez sélectionner dans la liste le sous-îlot à enlever du groupe.");
}


/***************************************************************************/
/***************************************************************************/
/***************************************************************************/
/***************************************************************************/
/***************************************************************************/
/***************************************************************************/
/***************************************************************************/
/***************************************************************************/


function sousilotgroupe(action,sousilot,groupe){
    var query;
    switch(action){
    case "insert":
	// Verification que l'enregistrement n'existe pas
	if (pas_de_resultat("SELECT * FROM SousilotGroupe WHERE SG_Groupe="+groupe+" AND SG_Sousilot="+sousilot+";")){
	    query="INSERT INTO SousilotGroupe VALUES ("+sousilot+","+groupe+");";
	    pgsql_update(query);
	    //		alert("Sous-ilot ajouté");
	} else alert("Ce sous-îlot appartient déjà à ce groupe.");
	break;
    case "delete":
	query="DELETE FROM SousilotGroupe WHERE SG_sousilot="+sousilot+" AND SG_groupe="+groupe+";";
	pgsql_update(query);
	break;
    default: 
	alert("function sousilotgroupe() : action inconnue : "+action);
    }
    tab_sousilot_groupe_list_refresh();
    tab_groupe_sousilot_list_refresh();
}






/*
function ongl_groupes_action(action){
    var couche=current_couche();
    if (action!='add')
	var groupe=current_groupe();
    var nom=top.document.getElementById("ongl-groupes-nom").value;
    var query;
    switch(action){
    case 'add':
	query="INSERT INTO groupe(gr_numero,gr_nom,gr_couche) VALUES (nextval('seq_groupe'),'"+nom+"',"+couche+");";
	break;
    case 'mod':
	query="UPDATE groupe SET gr_nom='"+nom+"' WHERE gr_numero="+groupe+";";
	break;
    case 'del':
	query="DELETE FROM groupe WHERE gr_numero="+groupe+";";
	break;
    default: alert("Action inconnue : "+action);
    }
    //    if (confirm(query)){
	pgsql_update(query);
	ongl_groupes_tree_refresh();
	tab_sousilot_refresh();
	//    }
}

function ongl_groupes_tree_select(groupe){
    var i,idx=-1;
    //    alert("groupe = "+groupe);
    var tree= top.document.getElementById("ongl-groupes-tree");
    for(i=0;i<tree.view.rowCount;i++){
	if (tree.view.getCellValue(i,tree.columns.getColumnAt(0))==groupe)
	    tree.view.selection.select(i);
    }
    if (idx==-1 && tree.view.rowCount>0){
	tree.view.selection.select(0);
	//	alert("rowCount = "+tree.view.rowCount);
    }
}


function ongl_groupes_sousilot_tree_refresh(){
    var groupes=top.document.getElementById("ongl-groupes-tree");
    if (groupes.view.rowCount>0){
        var nom=groupes.view.getCellText(groupes.currentIndex,groupes.columns.getColumnAt(0));
	top.document.getElementById("ongl-groupes-nom").value=nom;
	top.document.getElementById("ongl-groupes-add").disabled=false;
	top.document.getElementById("ongl-groupes-mod").disabled=false;
	top.document.getElementById("ongl-groupes-del").disabled=false;
    }else{
	top.document.getElementById("ongl-groupes-add").disabled=false;
	top.document.getElementById("ongl-groupes-mod").disabled=true;
	top.document.getElementById("ongl-groupes-del").disabled=true;
    }
    //    ongl_groupes_tree_select(current_groupe());

    var groupe=current_groupe();
    //    alert("si_groupe");
    query="SELECT si_nom, si_numero, area(si_trace)/10000 AS si_surface, area(si_trace) AS si_aire "
	+"FROM sousilot, sousilotgroupe "
	+"WHERE sg_sousilot=si_numero AND sg_groupe="+groupe+";";
    //    prompt("irq",query);
    var tree = fill_tree("ongl-groupes-sousilot-tree",query);
    if (tree.currentIndex>=0){
	top.document.getElementById("ongl-groupes-sousilot-del").disabled=false;
    }else{
	top.document.getElementById("ongl-groupes-sousilot-del").disabled=true;
    }
}

function current_groupe(){
    var tree=top.document.getElementById("ongl-groupes-tree");
    if (tree.view.rowCount>0)
	return tree.view.getCellValue(tree.currentIndex,tree.columns.getColumnAt(0));
    else
	return -1;
}


*/

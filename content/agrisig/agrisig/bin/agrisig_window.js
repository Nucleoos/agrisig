function AllerAOnglet(i)
{
	top.document.getElementById("Main_Tabbox").selectedIndex=i;
	top.document.getElementById(Onglet).hidden=false;
}
function FermerOnglet(Onglet)
{
	top.document.getElementById("Tous_les_onglets").advanceSelectedTab(-1);
	top.document.getElementById(Onglet).hidden=true;
}
function Suppr_ListeDessous(event)
{
   if(event.type!="keypress" || event.keyCode!=event.DOM_VK_DELETE)
	return;

   tree=event.target;

   if (tree.disabled || tree.view==null || tree.currentIndex==-1)
	return;

    var SelectedItem =  tree.view.getItemAtIndex(tree.currentIndex);
    var treeChildren =  SelectedItem.parentNode;
    treeChildren.removeChild(SelectedItem);
}

function DoubleClic_ArbreDessus(ListeDessus,ListeDessous)
{
    if(ListeDessous.disabled || ListeDessus.view==null || ListeDessus.currentIndex==-1)
	return;

    /* on regarde si cet item n'existe pas déjà */
    if(ListeDessous.view!=null)
	{
	    var ValDessus=ListeDessus.view.getCellValue(ListeDessus.currentIndex,ListeDessus.treeBoxObject.columns.getColumnAt(0));
	    for(i=0;i<ListeDessous.view.rowCount;i++)
		{
		    if( ListeDessous.view.getCellValue(i,ListeDessous.treeBoxObject.columns.getColumnAt(0)) == ValDessus )
			{
			    alert("Cet élément est déjà présent");
			    return;
			}
		}
	}

    var item =  ListeDessus.view.getItemAtIndex(ListeDessus.currentIndex).cloneNode(true);

    /* si il n'y a pas de tree children pour le content */    
    var Tab=ChercherCompo(ListeDessous,"treechildren",2);
    var treechildren;
    if(Tab.length!=2)
	{
	    /* on crée le treechildren */
	    var mydoc = top.document;
	    treechildren = mydoc.createElement("treechildren");
	    ListeDessous.appendChild(treechildren);
	}
    else
	{
	    /* Le TarNode est le treechildren */
	    treechildren = Tab[1];
	}
    treechildren.appendChild(item);
}
/* TABLEAU GLOBALE QUI CONTIENT LES COMPOSANTS D'INTERFACE */

var TAB_GLOBAL_COMPO = new Array();
/* pour associer des attributs aux composants */
function stProprieteCompo()
{
	this.Action_en_cours=null;
	this.NewCle=null;
}
var TAB_COMPO_PPTES = new Array(274);
/* on init le tableau */
var id
for(id=0;id<TAB_COMPO_PPTES.length;id++)
{
	TAB_COMPO_PPTES[id] = new stProprieteCompo();
}
const INSERT=1;
const DELETE=2;
const UPDATE=3;

function GetValAt(i)
{
    /* ON CONVERTIE EN CHAINE DE CARACTERE  */
    return ""+TAB_GLOBAL_COMPO[i].getValue();
}

function GetSQLCompoAt(i)
{
    return TAB_GLOBAL_COMPO[i];
}



/* *********************************************** 
         FONCTIONS POUR L'ONGLET Application de profil
   ***********************************************/ 

 /* FILTRES DE RELATION ENTRE ONGLETS => VARIABLES GLOBALES POUR ETRE ACCESSIBLES DEPUIS INTERFACE_USER.JS */

function OuvrirOnglet_Application_de_profil()
{
 var tabs = top.document.getElementById("Tous_les_onglets");
 tabs.selectedItem = top.document.getElementById("Onglet_Application_de_profil");
}

function Insert_Application_de_profil_Application__de_profil0()
{
 TAB_COMPO_PPTES[3].Action_en_cours = INSERT;
/* On calcule la nouvelle clé */
 TAB_COMPO_PPTES[3].NewCle = getNewCle("applique");
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[3].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[8];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[9];
 Esclave_1.ActiverComposant(true);
 var Esclave_2=TAB_GLOBAL_COMPO[10];
 Esclave_2.ActiverComposant(true);
 var Esclave_3=TAB_GLOBAL_COMPO[11];
 Esclave_3.ActiverComposant(true);
top.document.getElementById("Validate_Application_de_profil_Lot_s__5").disabled=true;
top.document.getElementById("Annuler_Application_de_profil_Lot_s__5").disabled=true;
top.document.getElementById("Insert_Application_de_profil_Lot_s__5").disabled=false;
top.document.getElementById("Delete_Application_de_profil_Lot_s__5").disabled=false;
top.document.getElementById("Update_Application_de_profil_Lot_s__5").disabled=false;
 var Esclave_4=TAB_GLOBAL_COMPO[12];
 Esclave_4.ActiverComposant(true);
top.document.getElementById("Validate_Application_de_profil_Application__de_profil0").disabled=false;
top.document.getElementById("Annuler_Application_de_profil_Application__de_profil0").disabled=false;
top.document.getElementById("Insert_Application_de_profil_Application__de_profil0").disabled=true;
top.document.getElementById("Delete_Application_de_profil_Application__de_profil0").disabled=true;
top.document.getElementById("Update_Application_de_profil_Application__de_profil0").disabled=true;
 var Maitre=TAB_GLOBAL_COMPO[3];
 /* Pour une insertion on désectionne */
 var tree=Maitre.getComposantXul();
 if (tree.view!=null)
 {
 	tree.currentIndex=-1;
 	tree.view.selection.clearSelection();
 }
return TAB_COMPO_PPTES[3].NewCle;
}

function Delete_Application_de_profil_Application__de_profil0()
{
 if (TAB_GLOBAL_COMPO[3].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement à suprimer");
 	return;
 }
 /* On recupère le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[3];
 if (confirm("Voulez vous vraiment supprimer l'enregistrement en cours ?"))
 {
	TAB_COMPO_PPTES[3].Action_en_cours = DELETE;
 	User_Delete_Application_de_profil_Application__de_profil0(Maitre);
	Maitre.RefreshTotal();
 }
}

function Update_Application_de_profil_Application__de_profil0()
{
 if (TAB_GLOBAL_COMPO[3].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement à mettre à jour");
 	return -1;
 }
 TAB_COMPO_PPTES[3].Action_en_cours = UPDATE;
/* On calcule la nouvelle clé */
 TAB_COMPO_PPTES[3].NewCle = TAB_GLOBAL_COMPO[3].getCleVal();
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[3].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[8];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[9];
 Esclave_1.ActiverComposant(true);
 var Esclave_2=TAB_GLOBAL_COMPO[10];
 Esclave_2.ActiverComposant(true);
 var Esclave_3=TAB_GLOBAL_COMPO[11];
 Esclave_3.ActiverComposant(true);
top.document.getElementById("Validate_Application_de_profil_Lot_s__5").disabled=true;
top.document.getElementById("Annuler_Application_de_profil_Lot_s__5").disabled=true;
top.document.getElementById("Insert_Application_de_profil_Lot_s__5").disabled=false;
top.document.getElementById("Delete_Application_de_profil_Lot_s__5").disabled=false;
top.document.getElementById("Update_Application_de_profil_Lot_s__5").disabled=false;
 var Esclave_4=TAB_GLOBAL_COMPO[12];
 Esclave_4.ActiverComposant(true);
top.document.getElementById("Validate_Application_de_profil_Application__de_profil0").disabled=false;
top.document.getElementById("Annuler_Application_de_profil_Application__de_profil0").disabled=false;
top.document.getElementById("Insert_Application_de_profil_Application__de_profil0").disabled=true;
top.document.getElementById("Delete_Application_de_profil_Application__de_profil0").disabled=true;
top.document.getElementById("Update_Application_de_profil_Application__de_profil0").disabled=true;
return TAB_COMPO_PPTES[3].NewCle;
}

function Validate_Application_de_profil_Application__de_profil0(retour)
{
 /* Retour à l'onget appellant si appelle par gérer */
if (retour==null)
	retour=true;

 /* On recupère le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[3];
 /* On recupère la clé du nouvel enregistrement */
 var NewCle=null;
 switch(TAB_COMPO_PPTES[3].Action_en_cours){
	case INSERT :
	if ((NewCle = User_Insert_Application_de_profil_Application__de_profil0(Maitre))==-1)
		return -1;
	break;
	case UPDATE :
	if ((User_Update_Application_de_profil_Application__de_profil0(Maitre))==-1)
		return -1;
	break;
 }
 /* On construit la requete pour ajouter les nouvelles cles */
 if (NewCle!=null)
 {
 	var ReqNewCle=new clReqSQL();
 	var OldUnion=Maitre.my_ReqRefresh.getUnion();
	if (OldUnion==null)
	{
		ReqNewCle.Cloner(Maitre.my_ReqInterne);
	}
	else
	{
		ReqNewCle.Cloner(OldUnion);
	}
 	ReqNewCle.AddWhere(Maitre.getCle()+" = "+NewCle,"OR");
	Maitre.Union(ReqNewCle);
 }
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[3].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[8];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[9];
 Esclave_1.ActiverComposant(false);
 var Esclave_2=TAB_GLOBAL_COMPO[10];
 Esclave_2.ActiverComposant(false);
 var Esclave_3=TAB_GLOBAL_COMPO[11];
 Esclave_3.ActiverComposant(false);
Annuler_Application_de_profil_Lot_s__5();
top.document.getElementById("Validate_Application_de_profil_Lot_s__5").disabled=true;
top.document.getElementById("Annuler_Application_de_profil_Lot_s__5").disabled=true;
top.document.getElementById("Insert_Application_de_profil_Lot_s__5").disabled=true;
top.document.getElementById("Delete_Application_de_profil_Lot_s__5").disabled=true;
top.document.getElementById("Update_Application_de_profil_Lot_s__5").disabled=true;
 var Esclave_4=TAB_GLOBAL_COMPO[12];
 Esclave_4.ActiverComposant(false);
top.document.getElementById("Validate_Application_de_profil_Application__de_profil0").disabled=true;
top.document.getElementById("Annuler_Application_de_profil_Application__de_profil0").disabled=true;
top.document.getElementById("Insert_Application_de_profil_Application__de_profil0").disabled=false;
top.document.getElementById("Delete_Application_de_profil_Application__de_profil0").disabled=false;
top.document.getElementById("Update_Application_de_profil_Application__de_profil0").disabled=false;
 if (NewCle==null)
 	NewCle=TAB_COMPO_PPTES[3].NewCle;
 Maitre.ForceNextSelection(NewCle)
 Maitre.RefreshTotal();
 if(retour)
 {
 }
 TAB_COMPO_PPTES[3].Action_en_cours = null;
 return NewCle;
}

function Annuler_Application_de_profil_Application__de_profil0()
{
 TAB_COMPO_PPTES[3].Action_en_cours = null;
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[3].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[8];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[9];
 Esclave_1.ActiverComposant(false);
 var Esclave_2=TAB_GLOBAL_COMPO[10];
 Esclave_2.ActiverComposant(false);
 var Esclave_3=TAB_GLOBAL_COMPO[11];
 Esclave_3.ActiverComposant(false);
Annuler_Application_de_profil_Lot_s__5();
top.document.getElementById("Validate_Application_de_profil_Lot_s__5").disabled=true;
top.document.getElementById("Annuler_Application_de_profil_Lot_s__5").disabled=true;
top.document.getElementById("Insert_Application_de_profil_Lot_s__5").disabled=true;
top.document.getElementById("Delete_Application_de_profil_Lot_s__5").disabled=true;
top.document.getElementById("Update_Application_de_profil_Lot_s__5").disabled=true;
 var Esclave_4=TAB_GLOBAL_COMPO[12];
 Esclave_4.ActiverComposant(false);
top.document.getElementById("Validate_Application_de_profil_Application__de_profil0").disabled=true;
top.document.getElementById("Annuler_Application_de_profil_Application__de_profil0").disabled=true;
top.document.getElementById("Insert_Application_de_profil_Application__de_profil0").disabled=false;
top.document.getElementById("Delete_Application_de_profil_Application__de_profil0").disabled=false;
top.document.getElementById("Update_Application_de_profil_Application__de_profil0").disabled=false;
}

function Insert_Application_de_profil_Lot_s__5()
{
 if (TAB_COMPO_PPTES[3].Action_en_cours == INSERT)
 	{
 		if (confirm("Pour continuer, vous devez enregistrer votre saisie\n Voulez vous poursuivre ?"))
		{
			var CleValide=Validate_Application_de_profil_Application__de_profil0(false);
			if (CleValide==-1)
			{
				return -1;
			}
			CleValide=Update_Application_de_profil_Application__de_profil0();
			if (CleValide==-1)
			{
				alert("Erreur l'enregistrement n'a pas étais correctement inséré");
				return -1;
			}
			Insert_Application_de_profil_Lot_s__5();
		}
 		return;
 	}
 TAB_COMPO_PPTES[12].Action_en_cours = INSERT;
/* On calcule la nouvelle clé */
 TAB_COMPO_PPTES[12].NewCle = getNewCle("lot");
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[12].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[15];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[16];
 Esclave_1.ActiverComposant(true);
top.document.getElementById("Validate_Application_de_profil_Lot_s__5").disabled=false;
top.document.getElementById("Annuler_Application_de_profil_Lot_s__5").disabled=false;
top.document.getElementById("Insert_Application_de_profil_Lot_s__5").disabled=true;
top.document.getElementById("Delete_Application_de_profil_Lot_s__5").disabled=true;
top.document.getElementById("Update_Application_de_profil_Lot_s__5").disabled=true;
 var Maitre=TAB_GLOBAL_COMPO[12];
 /* Pour une insertion on désectionne */
 var tree=Maitre.getComposantXul();
 if (tree.view!=null)
 {
 	tree.currentIndex=-1;
 	tree.view.selection.clearSelection();
 }
return TAB_COMPO_PPTES[12].NewCle;
}

function Delete_Application_de_profil_Lot_s__5()
{
 if (TAB_GLOBAL_COMPO[12].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement à suprimer");
 	return;
 }
 /* On recupère le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[12];
 if (confirm("Voulez vous vraiment supprimer l'enregistrement en cours ?"))
 {
	TAB_COMPO_PPTES[12].Action_en_cours = DELETE;
 	User_Delete_Application_de_profil_Lot_s__5(Maitre);
	Maitre.RefreshTotal();
 }
}

function Update_Application_de_profil_Lot_s__5()
{
 if (TAB_GLOBAL_COMPO[12].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement à mettre à jour");
 	return -1;
 }
 TAB_COMPO_PPTES[12].Action_en_cours = UPDATE;
/* On calcule la nouvelle clé */
 TAB_COMPO_PPTES[12].NewCle = TAB_GLOBAL_COMPO[12].getCleVal();
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[12].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[15];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[16];
 Esclave_1.ActiverComposant(true);
top.document.getElementById("Validate_Application_de_profil_Lot_s__5").disabled=false;
top.document.getElementById("Annuler_Application_de_profil_Lot_s__5").disabled=false;
top.document.getElementById("Insert_Application_de_profil_Lot_s__5").disabled=true;
top.document.getElementById("Delete_Application_de_profil_Lot_s__5").disabled=true;
top.document.getElementById("Update_Application_de_profil_Lot_s__5").disabled=true;
return TAB_COMPO_PPTES[12].NewCle;
}

function Validate_Application_de_profil_Lot_s__5(retour)
{
 /* Retour à l'onget appellant si appelle par gérer */
if (retour==null)
	retour=true;

 /* On recupère le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[12];
 /* On recupère la clé du nouvel enregistrement */
 var NewCle=null;
 switch(TAB_COMPO_PPTES[12].Action_en_cours){
	case INSERT :
	if ((NewCle = User_Insert_Application_de_profil_Lot_s__5(Maitre))==-1)
		return -1;
	break;
	case UPDATE :
	if ((User_Update_Application_de_profil_Lot_s__5(Maitre))==-1)
		return -1;
	break;
 }
 /* On construit la requete pour ajouter les nouvelles cles */
 if (NewCle!=null)
 {
 	var ReqNewCle=new clReqSQL();
 	var OldUnion=Maitre.my_ReqRefresh.getUnion();
	if (OldUnion==null)
	{
		ReqNewCle.Cloner(Maitre.my_ReqInterne);
	}
	else
	{
		ReqNewCle.Cloner(OldUnion);
	}
 	ReqNewCle.AddWhere(Maitre.getCle()+" = "+NewCle,"OR");
	Maitre.Union(ReqNewCle);
 }
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[12].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[15];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[16];
 Esclave_1.ActiverComposant(false);
top.document.getElementById("Validate_Application_de_profil_Lot_s__5").disabled=true;
top.document.getElementById("Annuler_Application_de_profil_Lot_s__5").disabled=true;
top.document.getElementById("Insert_Application_de_profil_Lot_s__5").disabled=false;
top.document.getElementById("Delete_Application_de_profil_Lot_s__5").disabled=false;
top.document.getElementById("Update_Application_de_profil_Lot_s__5").disabled=false;
 if (NewCle==null)
 	NewCle=TAB_COMPO_PPTES[12].NewCle;
 Maitre.ForceNextSelection(NewCle)
 Maitre.RefreshTotal();
 if(retour)
 {
 }
 TAB_COMPO_PPTES[12].Action_en_cours = null;
 return NewCle;
}

function Annuler_Application_de_profil_Lot_s__5()
{
 TAB_COMPO_PPTES[12].Action_en_cours = null;
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[12].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[15];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[16];
 Esclave_1.ActiverComposant(false);
top.document.getElementById("Validate_Application_de_profil_Lot_s__5").disabled=true;
top.document.getElementById("Annuler_Application_de_profil_Lot_s__5").disabled=true;
top.document.getElementById("Insert_Application_de_profil_Lot_s__5").disabled=false;
top.document.getElementById("Delete_Application_de_profil_Lot_s__5").disabled=false;
top.document.getElementById("Update_Application_de_profil_Lot_s__5").disabled=false;
}






/* *********************************************** 
         FONCTIONS POUR L'ONGLET Profils
   ***********************************************/ 

 /* FILTRES DE RELATION ENTRE ONGLETS => VARIABLES GLOBALES POUR ETRE ACCESSIBLES DEPUIS INTERFACE_USER.JS */

 var Filtre_Dep_Profils_0;
function Retour_Profils()
{
 if (Filtre_Dep_Profils_0.my_Filtre.getEtat())
 {
 	Filtre_Dep_Profils_0.FctFermetureOnglet();
 }
}
function Gerer_Profils(IdFiltreOnglet)
{
/* On désactive les autres filtres */
if (Filtre_Dep_Profils_0.getId()!=IdFiltreOnglet)
{
	Filtre_Dep_Profils_0.OnClose(true,false);
}
/* On change d'onglet */
 var tabs = top.document.getElementById("Tous_les_onglets");
 top.document.getElementById("Tous_les_onglets").setAttribute("hidden","false");
 tabs.selectedItem = top.document.getElementById("Onglet_Profils");
}

function OuvrirOnglet_Profils()
{
 var tabs = top.document.getElementById("Tous_les_onglets");
 tabs.selectedItem = top.document.getElementById("Onglet_Profils");
}

function Insert_Profils_Profils_existants0()
{
 TAB_COMPO_PPTES[17].Action_en_cours = INSERT;
/* On calcule la nouvelle clé */
 TAB_COMPO_PPTES[17].NewCle = getNewCle("profil");
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[17].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[19];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[20];
 Esclave_1.ActiverComposant(true);
 var Esclave_2=TAB_GLOBAL_COMPO[21];
 Esclave_2.ActiverComposant(true);
 var Esclave_3=TAB_GLOBAL_COMPO[22];
 Esclave_3.ActiverComposant(true);
 var Esclave_4=TAB_GLOBAL_COMPO[26];
 Esclave_4.ActiverComposant(true);
top.document.getElementById("Validate_Profils_Articles_présents_dans_le_profil_7").disabled=true;
top.document.getElementById("Annuler_Profils_Articles_présents_dans_le_profil_7").disabled=true;
top.document.getElementById("Insert_Profils_Articles_présents_dans_le_profil_7").disabled=false;
top.document.getElementById("Delete_Profils_Articles_présents_dans_le_profil_7").disabled=false;
top.document.getElementById("Update_Profils_Articles_présents_dans_le_profil_7").disabled=false;
 var Esclave_5=TAB_GLOBAL_COMPO[29];
 Esclave_5.ActiverComposant(true);
 var Esclave_6=TAB_GLOBAL_COMPO[37];
 Esclave_6.ActiverComposant(true);
top.document.getElementById("Validate_Profils_Profils_existants0").disabled=false;
top.document.getElementById("Annuler_Profils_Profils_existants0").disabled=false;
top.document.getElementById("Insert_Profils_Profils_existants0").disabled=true;
top.document.getElementById("Delete_Profils_Profils_existants0").disabled=true;
top.document.getElementById("Update_Profils_Profils_existants0").disabled=true;
 var Maitre=TAB_GLOBAL_COMPO[17];
 /* Pour une insertion on désectionne */
 var tree=Maitre.getComposantXul();
 if (tree.view!=null)
 {
 	tree.currentIndex=-1;
 	tree.view.selection.clearSelection();
 }
return TAB_COMPO_PPTES[17].NewCle;
}

function Delete_Profils_Profils_existants0()
{
 if (TAB_GLOBAL_COMPO[17].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement à suprimer");
 	return;
 }
 /* On recupère le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[17];
 if (confirm("Voulez vous vraiment supprimer l'enregistrement en cours ?"))
 {
	TAB_COMPO_PPTES[17].Action_en_cours = DELETE;
 	User_Delete_Profils_Profils_existants0(Maitre);
	Maitre.RefreshTotal();
	Filtre_Dep_Profils_0.OnClose(true);
 }
}

function Update_Profils_Profils_existants0()
{
 if (TAB_GLOBAL_COMPO[17].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement à mettre à jour");
 	return -1;
 }
 TAB_COMPO_PPTES[17].Action_en_cours = UPDATE;
/* On calcule la nouvelle clé */
 TAB_COMPO_PPTES[17].NewCle = TAB_GLOBAL_COMPO[17].getCleVal();
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[17].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[19];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[20];
 Esclave_1.ActiverComposant(true);
 var Esclave_2=TAB_GLOBAL_COMPO[21];
 Esclave_2.ActiverComposant(true);
 var Esclave_3=TAB_GLOBAL_COMPO[22];
 Esclave_3.ActiverComposant(true);
 var Esclave_4=TAB_GLOBAL_COMPO[26];
 Esclave_4.ActiverComposant(true);
top.document.getElementById("Validate_Profils_Articles_présents_dans_le_profil_7").disabled=true;
top.document.getElementById("Annuler_Profils_Articles_présents_dans_le_profil_7").disabled=true;
top.document.getElementById("Insert_Profils_Articles_présents_dans_le_profil_7").disabled=false;
top.document.getElementById("Delete_Profils_Articles_présents_dans_le_profil_7").disabled=false;
top.document.getElementById("Update_Profils_Articles_présents_dans_le_profil_7").disabled=false;
 var Esclave_5=TAB_GLOBAL_COMPO[29];
 Esclave_5.ActiverComposant(true);
 var Esclave_6=TAB_GLOBAL_COMPO[37];
 Esclave_6.ActiverComposant(true);
top.document.getElementById("Validate_Profils_Profils_existants0").disabled=false;
top.document.getElementById("Annuler_Profils_Profils_existants0").disabled=false;
top.document.getElementById("Insert_Profils_Profils_existants0").disabled=true;
top.document.getElementById("Delete_Profils_Profils_existants0").disabled=true;
top.document.getElementById("Update_Profils_Profils_existants0").disabled=true;
return TAB_COMPO_PPTES[17].NewCle;
}

function Validate_Profils_Profils_existants0(retour)
{
 /* Retour à l'onget appellant si appelle par gérer */
if (retour==null)
	retour=true;

 /* On recupère le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[17];
 /* On recupère la clé du nouvel enregistrement */
 var NewCle=null;
 switch(TAB_COMPO_PPTES[17].Action_en_cours){
	case INSERT :
	if ((NewCle = User_Insert_Profils_Profils_existants0(Maitre))==-1)
		return -1;
	break;
	case UPDATE :
	if ((User_Update_Profils_Profils_existants0(Maitre))==-1)
		return -1;
	break;
 }
 /* On construit la requete pour ajouter les nouvelles cles */
 if (NewCle!=null)
 {
 	var ReqNewCle=new clReqSQL();
 	var OldUnion=Maitre.my_ReqRefresh.getUnion();
	if (OldUnion==null)
	{
		ReqNewCle.Cloner(Maitre.my_ReqInterne);
	}
	else
	{
		ReqNewCle.Cloner(OldUnion);
	}
 	ReqNewCle.AddWhere(Maitre.getCle()+" = "+NewCle,"OR");
	Maitre.Union(ReqNewCle);
 }
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[17].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[19];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[20];
 Esclave_1.ActiverComposant(false);
 var Esclave_2=TAB_GLOBAL_COMPO[21];
 Esclave_2.ActiverComposant(false);
 var Esclave_3=TAB_GLOBAL_COMPO[22];
 Esclave_3.ActiverComposant(false);
 var Esclave_4=TAB_GLOBAL_COMPO[26];
 Esclave_4.ActiverComposant(false);
Annuler_Profils_Articles_présents_dans_le_profil_7();
top.document.getElementById("Validate_Profils_Articles_présents_dans_le_profil_7").disabled=true;
top.document.getElementById("Annuler_Profils_Articles_présents_dans_le_profil_7").disabled=true;
top.document.getElementById("Insert_Profils_Articles_présents_dans_le_profil_7").disabled=true;
top.document.getElementById("Delete_Profils_Articles_présents_dans_le_profil_7").disabled=true;
top.document.getElementById("Update_Profils_Articles_présents_dans_le_profil_7").disabled=true;
 var Esclave_5=TAB_GLOBAL_COMPO[29];
 Esclave_5.ActiverComposant(false);
 var Esclave_6=TAB_GLOBAL_COMPO[37];
 Esclave_6.ActiverComposant(false);
top.document.getElementById("Validate_Profils_Profils_existants0").disabled=true;
top.document.getElementById("Annuler_Profils_Profils_existants0").disabled=true;
top.document.getElementById("Insert_Profils_Profils_existants0").disabled=false;
top.document.getElementById("Delete_Profils_Profils_existants0").disabled=false;
top.document.getElementById("Update_Profils_Profils_existants0").disabled=false;
 if (NewCle==null)
 	NewCle=TAB_COMPO_PPTES[17].NewCle;
 Maitre.ForceNextSelection(NewCle)
 Maitre.RefreshTotal();
 if(retour)
 {
 Filtre_Dep_Profils_0.OnClose(false);
 }
 TAB_COMPO_PPTES[17].Action_en_cours = null;
 return NewCle;
}

function Annuler_Profils_Profils_existants0()
{
 TAB_COMPO_PPTES[17].Action_en_cours = null;
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[17].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[19];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[20];
 Esclave_1.ActiverComposant(false);
 var Esclave_2=TAB_GLOBAL_COMPO[21];
 Esclave_2.ActiverComposant(false);
 var Esclave_3=TAB_GLOBAL_COMPO[22];
 Esclave_3.ActiverComposant(false);
 var Esclave_4=TAB_GLOBAL_COMPO[26];
 Esclave_4.ActiverComposant(false);
Annuler_Profils_Articles_présents_dans_le_profil_7();
top.document.getElementById("Validate_Profils_Articles_présents_dans_le_profil_7").disabled=true;
top.document.getElementById("Annuler_Profils_Articles_présents_dans_le_profil_7").disabled=true;
top.document.getElementById("Insert_Profils_Articles_présents_dans_le_profil_7").disabled=true;
top.document.getElementById("Delete_Profils_Articles_présents_dans_le_profil_7").disabled=true;
top.document.getElementById("Update_Profils_Articles_présents_dans_le_profil_7").disabled=true;
 var Esclave_5=TAB_GLOBAL_COMPO[29];
 Esclave_5.ActiverComposant(false);
 var Esclave_6=TAB_GLOBAL_COMPO[37];
 Esclave_6.ActiverComposant(false);
top.document.getElementById("Validate_Profils_Profils_existants0").disabled=true;
top.document.getElementById("Annuler_Profils_Profils_existants0").disabled=true;
top.document.getElementById("Insert_Profils_Profils_existants0").disabled=false;
top.document.getElementById("Delete_Profils_Profils_existants0").disabled=false;
top.document.getElementById("Update_Profils_Profils_existants0").disabled=false;
}

function Insert_Profils_Articles_présents_dans_le_profil_7()
{
 if (TAB_COMPO_PPTES[17].Action_en_cours == INSERT)
 	{
 		if (confirm("Pour continuer, vous devez enregistrer votre saisie\n Voulez vous poursuivre ?"))
		{
			var CleValide=Validate_Profils_Profils_existants0(false);
			if (CleValide==-1)
			{
				return -1;
			}
			CleValide=Update_Profils_Profils_existants0();
			if (CleValide==-1)
			{
				alert("Erreur l'enregistrement n'a pas étais correctement inséré");
				return -1;
			}
			Insert_Profils_Articles_présents_dans_le_profil_7();
		}
 		return;
 	}
 TAB_COMPO_PPTES[29].Action_en_cours = INSERT;
/* On calcule la nouvelle clé */
 TAB_COMPO_PPTES[29].NewCle = getNewCle("definiprofil");
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[29].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[32];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[33];
 Esclave_1.ActiverComposant(true);
top.document.getElementById("Validate_Profils_Articles_présents_dans_le_profil_7").disabled=false;
top.document.getElementById("Annuler_Profils_Articles_présents_dans_le_profil_7").disabled=false;
top.document.getElementById("Insert_Profils_Articles_présents_dans_le_profil_7").disabled=true;
top.document.getElementById("Delete_Profils_Articles_présents_dans_le_profil_7").disabled=true;
top.document.getElementById("Update_Profils_Articles_présents_dans_le_profil_7").disabled=true;
 var Maitre=TAB_GLOBAL_COMPO[29];
 /* Pour une insertion on désectionne */
 var tree=Maitre.getComposantXul();
 if (tree.view!=null)
 {
 	tree.currentIndex=-1;
 	tree.view.selection.clearSelection();
 }
return TAB_COMPO_PPTES[29].NewCle;
}

function Delete_Profils_Articles_présents_dans_le_profil_7()
{
 if (TAB_GLOBAL_COMPO[29].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement à suprimer");
 	return;
 }
 /* On recupère le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[29];
 if (confirm("Voulez vous vraiment supprimer l'enregistrement en cours ?"))
 {
	TAB_COMPO_PPTES[29].Action_en_cours = DELETE;
 	User_Delete_Profils_Articles_présents_dans_le_profil_7(Maitre);
	Maitre.RefreshTotal();
 }
}

function Update_Profils_Articles_présents_dans_le_profil_7()
{
 if (TAB_GLOBAL_COMPO[29].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement à mettre à jour");
 	return -1;
 }
 TAB_COMPO_PPTES[29].Action_en_cours = UPDATE;
/* On calcule la nouvelle clé */
 TAB_COMPO_PPTES[29].NewCle = TAB_GLOBAL_COMPO[29].getCleVal();
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[29].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[32];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[33];
 Esclave_1.ActiverComposant(true);
top.document.getElementById("Validate_Profils_Articles_présents_dans_le_profil_7").disabled=false;
top.document.getElementById("Annuler_Profils_Articles_présents_dans_le_profil_7").disabled=false;
top.document.getElementById("Insert_Profils_Articles_présents_dans_le_profil_7").disabled=true;
top.document.getElementById("Delete_Profils_Articles_présents_dans_le_profil_7").disabled=true;
top.document.getElementById("Update_Profils_Articles_présents_dans_le_profil_7").disabled=true;
return TAB_COMPO_PPTES[29].NewCle;
}

function Validate_Profils_Articles_présents_dans_le_profil_7(retour)
{
 /* Retour à l'onget appellant si appelle par gérer */
if (retour==null)
	retour=true;

 /* On recupère le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[29];
 /* On recupère la clé du nouvel enregistrement */
 var NewCle=null;
 switch(TAB_COMPO_PPTES[29].Action_en_cours){
	case INSERT :
	if ((NewCle = User_Insert_Profils_Articles_présents_dans_le_profil_7(Maitre))==-1)
		return -1;
	break;
	case UPDATE :
	if ((User_Update_Profils_Articles_présents_dans_le_profil_7(Maitre))==-1)
		return -1;
	break;
 }
 /* On construit la requete pour ajouter les nouvelles cles */
 if (NewCle!=null)
 {
 	var ReqNewCle=new clReqSQL();
 	var OldUnion=Maitre.my_ReqRefresh.getUnion();
	if (OldUnion==null)
	{
		ReqNewCle.Cloner(Maitre.my_ReqInterne);
	}
	else
	{
		ReqNewCle.Cloner(OldUnion);
	}
 	ReqNewCle.AddWhere(Maitre.getCle()+" = "+NewCle,"OR");
	Maitre.Union(ReqNewCle);
 }
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[29].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[32];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[33];
 Esclave_1.ActiverComposant(false);
top.document.getElementById("Validate_Profils_Articles_présents_dans_le_profil_7").disabled=true;
top.document.getElementById("Annuler_Profils_Articles_présents_dans_le_profil_7").disabled=true;
top.document.getElementById("Insert_Profils_Articles_présents_dans_le_profil_7").disabled=false;
top.document.getElementById("Delete_Profils_Articles_présents_dans_le_profil_7").disabled=false;
top.document.getElementById("Update_Profils_Articles_présents_dans_le_profil_7").disabled=false;
 if (NewCle==null)
 	NewCle=TAB_COMPO_PPTES[29].NewCle;
 Maitre.ForceNextSelection(NewCle)
 Maitre.RefreshTotal();
 if(retour)
 {
 }
 TAB_COMPO_PPTES[29].Action_en_cours = null;
 return NewCle;
}

function Annuler_Profils_Articles_présents_dans_le_profil_7()
{
 TAB_COMPO_PPTES[29].Action_en_cours = null;
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[29].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[32];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[33];
 Esclave_1.ActiverComposant(false);
top.document.getElementById("Validate_Profils_Articles_présents_dans_le_profil_7").disabled=true;
top.document.getElementById("Annuler_Profils_Articles_présents_dans_le_profil_7").disabled=true;
top.document.getElementById("Insert_Profils_Articles_présents_dans_le_profil_7").disabled=false;
top.document.getElementById("Delete_Profils_Articles_présents_dans_le_profil_7").disabled=false;
top.document.getElementById("Update_Profils_Articles_présents_dans_le_profil_7").disabled=false;
}






/* *********************************************** 
         FONCTIONS POUR L'ONGLET Famille de profil
   ***********************************************/ 

 /* FILTRES DE RELATION ENTRE ONGLETS => VARIABLES GLOBALES POUR ETRE ACCESSIBLES DEPUIS INTERFACE_USER.JS */

 var Filtre_Dep_Famille_de_profil_0;
function Retour_Famille_de_profil()
{
 if (Filtre_Dep_Famille_de_profil_0.my_Filtre.getEtat())
 {
 	Filtre_Dep_Famille_de_profil_0.FctFermetureOnglet();
 }
}
function Gerer_Famille_de_profil(IdFiltreOnglet)
{
/* On désactive les autres filtres */
if (Filtre_Dep_Famille_de_profil_0.getId()!=IdFiltreOnglet)
{
	Filtre_Dep_Famille_de_profil_0.OnClose(true,false);
}
/* On change d'onglet */
 var tabs = top.document.getElementById("Tous_les_onglets");
 top.document.getElementById("Tous_les_onglets").setAttribute("hidden","false");
 tabs.selectedItem = top.document.getElementById("Onglet_Famille_de_profil");
}

function OuvrirOnglet_Famille_de_profil()
{
 var tabs = top.document.getElementById("Tous_les_onglets");
 tabs.selectedItem = top.document.getElementById("Onglet_Famille_de_profil");
}

function Insert_Famille_de_profil_Famille_de_profil0()
{
 TAB_COMPO_PPTES[40].Action_en_cours = INSERT;
/* On calcule la nouvelle clé */
 TAB_COMPO_PPTES[40].NewCle = getNewCle("typeprofil");
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[40].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[42];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[43];
 Esclave_1.ActiverComposant(true);
 var Esclave_2=TAB_GLOBAL_COMPO[44];
 Esclave_2.ActiverComposant(true);
top.document.getElementById("Validate_Famille_de_profil_Famille_de_profil0").disabled=false;
top.document.getElementById("Annuler_Famille_de_profil_Famille_de_profil0").disabled=false;
top.document.getElementById("Insert_Famille_de_profil_Famille_de_profil0").disabled=true;
top.document.getElementById("Delete_Famille_de_profil_Famille_de_profil0").disabled=true;
top.document.getElementById("Update_Famille_de_profil_Famille_de_profil0").disabled=true;
 var Maitre=TAB_GLOBAL_COMPO[40];
 /* Pour une insertion on désectionne */
 var tree=Maitre.getComposantXul();
 if (tree.view!=null)
 {
 	tree.currentIndex=-1;
 	tree.view.selection.clearSelection();
 }
return TAB_COMPO_PPTES[40].NewCle;
}

function Delete_Famille_de_profil_Famille_de_profil0()
{
 if (TAB_GLOBAL_COMPO[40].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement à suprimer");
 	return;
 }
 /* On recupère le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[40];
 if (confirm("Voulez vous vraiment supprimer l'enregistrement en cours ?"))
 {
	TAB_COMPO_PPTES[40].Action_en_cours = DELETE;
 	User_Delete_Famille_de_profil_Famille_de_profil0(Maitre);
	Maitre.RefreshTotal();
	Filtre_Dep_Famille_de_profil_0.OnClose(true);
 }
}

function Update_Famille_de_profil_Famille_de_profil0()
{
 if (TAB_GLOBAL_COMPO[40].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement à mettre à jour");
 	return -1;
 }
 TAB_COMPO_PPTES[40].Action_en_cours = UPDATE;
/* On calcule la nouvelle clé */
 TAB_COMPO_PPTES[40].NewCle = TAB_GLOBAL_COMPO[40].getCleVal();
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[40].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[42];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[43];
 Esclave_1.ActiverComposant(true);
 var Esclave_2=TAB_GLOBAL_COMPO[44];
 Esclave_2.ActiverComposant(true);
top.document.getElementById("Validate_Famille_de_profil_Famille_de_profil0").disabled=false;
top.document.getElementById("Annuler_Famille_de_profil_Famille_de_profil0").disabled=false;
top.document.getElementById("Insert_Famille_de_profil_Famille_de_profil0").disabled=true;
top.document.getElementById("Delete_Famille_de_profil_Famille_de_profil0").disabled=true;
top.document.getElementById("Update_Famille_de_profil_Famille_de_profil0").disabled=true;
return TAB_COMPO_PPTES[40].NewCle;
}

function Validate_Famille_de_profil_Famille_de_profil0(retour)
{
 /* Retour à l'onget appellant si appelle par gérer */
if (retour==null)
	retour=true;

 /* On recupère le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[40];
 /* On recupère la clé du nouvel enregistrement */
 var NewCle=null;
 switch(TAB_COMPO_PPTES[40].Action_en_cours){
	case INSERT :
	if ((NewCle = User_Insert_Famille_de_profil_Famille_de_profil0(Maitre))==-1)
		return -1;
	break;
	case UPDATE :
	if ((User_Update_Famille_de_profil_Famille_de_profil0(Maitre))==-1)
		return -1;
	break;
 }
 /* On construit la requete pour ajouter les nouvelles cles */
 if (NewCle!=null)
 {
 	var ReqNewCle=new clReqSQL();
 	var OldUnion=Maitre.my_ReqRefresh.getUnion();
	if (OldUnion==null)
	{
		ReqNewCle.Cloner(Maitre.my_ReqInterne);
	}
	else
	{
		ReqNewCle.Cloner(OldUnion);
	}
 	ReqNewCle.AddWhere(Maitre.getCle()+" = "+NewCle,"OR");
	Maitre.Union(ReqNewCle);
 }
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[40].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[42];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[43];
 Esclave_1.ActiverComposant(false);
 var Esclave_2=TAB_GLOBAL_COMPO[44];
 Esclave_2.ActiverComposant(false);
top.document.getElementById("Validate_Famille_de_profil_Famille_de_profil0").disabled=true;
top.document.getElementById("Annuler_Famille_de_profil_Famille_de_profil0").disabled=true;
top.document.getElementById("Insert_Famille_de_profil_Famille_de_profil0").disabled=false;
top.document.getElementById("Delete_Famille_de_profil_Famille_de_profil0").disabled=false;
top.document.getElementById("Update_Famille_de_profil_Famille_de_profil0").disabled=false;
 if (NewCle==null)
 	NewCle=TAB_COMPO_PPTES[40].NewCle;
 Maitre.ForceNextSelection(NewCle)
 Maitre.RefreshTotal();
 if(retour)
 {
 Filtre_Dep_Famille_de_profil_0.OnClose(false);
 }
 TAB_COMPO_PPTES[40].Action_en_cours = null;
 return NewCle;
}

function Annuler_Famille_de_profil_Famille_de_profil0()
{
 TAB_COMPO_PPTES[40].Action_en_cours = null;
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[40].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[42];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[43];
 Esclave_1.ActiverComposant(false);
 var Esclave_2=TAB_GLOBAL_COMPO[44];
 Esclave_2.ActiverComposant(false);
top.document.getElementById("Validate_Famille_de_profil_Famille_de_profil0").disabled=true;
top.document.getElementById("Annuler_Famille_de_profil_Famille_de_profil0").disabled=true;
top.document.getElementById("Insert_Famille_de_profil_Famille_de_profil0").disabled=false;
top.document.getElementById("Delete_Famille_de_profil_Famille_de_profil0").disabled=false;
top.document.getElementById("Update_Famille_de_profil_Famille_de_profil0").disabled=false;
}






/* *********************************************** 
         FONCTIONS POUR L'ONGLET Articles
   ***********************************************/ 

 /* FILTRES DE RELATION ENTRE ONGLETS => VARIABLES GLOBALES POUR ETRE ACCESSIBLES DEPUIS INTERFACE_USER.JS */

 var Filtre_Dep_Articles_0;
 var Filtre_Dep_Articles_1;
function Retour_Articles()
{
 if (Filtre_Dep_Articles_0.my_Filtre.getEtat())
 {
 	Filtre_Dep_Articles_0.FctFermetureOnglet();
 }
 if (Filtre_Dep_Articles_1.my_Filtre.getEtat())
 {
 	Filtre_Dep_Articles_1.FctFermetureOnglet();
 }
}
function Gerer_Articles(IdFiltreOnglet)
{
/* On désactive les autres filtres */
if (Filtre_Dep_Articles_0.getId()!=IdFiltreOnglet)
{
	Filtre_Dep_Articles_0.OnClose(true,false);
}
if (Filtre_Dep_Articles_1.getId()!=IdFiltreOnglet)
{
	Filtre_Dep_Articles_1.OnClose(true,false);
}
/* On change d'onglet */
 var tabs = top.document.getElementById("Tous_les_onglets");
 top.document.getElementById("Tous_les_onglets").setAttribute("hidden","false");
 tabs.selectedItem = top.document.getElementById("Onglet_Articles");
}

function OuvrirOnglet_Articles()
{
 var tabs = top.document.getElementById("Tous_les_onglets");
 tabs.selectedItem = top.document.getElementById("Onglet_Articles");
}

function Insert_Articles_Articles0()
{
 TAB_COMPO_PPTES[45].Action_en_cours = INSERT;
/* On calcule la nouvelle clé */
 TAB_COMPO_PPTES[45].NewCle = getNewCle("article");
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[45].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[47];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[48];
 Esclave_1.ActiverComposant(true);
 var Esclave_2=TAB_GLOBAL_COMPO[49];
 Esclave_2.ActiverComposant(true);
 var Esclave_3=TAB_GLOBAL_COMPO[50];
 Esclave_3.ActiverComposant(true);
 var Esclave_4=TAB_GLOBAL_COMPO[53];
 Esclave_4.ActiverComposant(true);
 var Esclave_5=TAB_GLOBAL_COMPO[54];
 Esclave_5.ActiverComposant(true);
 var Esclave_6=TAB_GLOBAL_COMPO[55];
 Esclave_6.ActiverComposant(true);
 var Esclave_7=TAB_GLOBAL_COMPO[56];
 Esclave_7.ActiverComposant(true);
 var Esclave_8=TAB_GLOBAL_COMPO[57];
 Esclave_8.ActiverComposant(true);
top.document.getElementById("Validate_Articles_Articles0").disabled=false;
top.document.getElementById("Annuler_Articles_Articles0").disabled=false;
top.document.getElementById("Insert_Articles_Articles0").disabled=true;
top.document.getElementById("Delete_Articles_Articles0").disabled=true;
top.document.getElementById("Update_Articles_Articles0").disabled=true;
 var Maitre=TAB_GLOBAL_COMPO[45];
 /* Pour une insertion on désectionne */
 var tree=Maitre.getComposantXul();
 if (tree.view!=null)
 {
 	tree.currentIndex=-1;
 	tree.view.selection.clearSelection();
 }
return TAB_COMPO_PPTES[45].NewCle;
}

function Delete_Articles_Articles0()
{
 if (TAB_GLOBAL_COMPO[45].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement à suprimer");
 	return;
 }
 /* On recupère le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[45];
 if (confirm("Voulez vous vraiment supprimer l'enregistrement en cours ?"))
 {
	TAB_COMPO_PPTES[45].Action_en_cours = DELETE;
 	User_Delete_Articles_Articles0(Maitre);
	Maitre.RefreshTotal();
	Filtre_Dep_Articles_0.OnClose(true);
	Filtre_Dep_Articles_1.OnClose(true);
 }
}

function Update_Articles_Articles0()
{
 if (TAB_GLOBAL_COMPO[45].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement à mettre à jour");
 	return -1;
 }
 TAB_COMPO_PPTES[45].Action_en_cours = UPDATE;
/* On calcule la nouvelle clé */
 TAB_COMPO_PPTES[45].NewCle = TAB_GLOBAL_COMPO[45].getCleVal();
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[45].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[47];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[48];
 Esclave_1.ActiverComposant(true);
 var Esclave_2=TAB_GLOBAL_COMPO[49];
 Esclave_2.ActiverComposant(true);
 var Esclave_3=TAB_GLOBAL_COMPO[50];
 Esclave_3.ActiverComposant(true);
 var Esclave_4=TAB_GLOBAL_COMPO[53];
 Esclave_4.ActiverComposant(true);
 var Esclave_5=TAB_GLOBAL_COMPO[54];
 Esclave_5.ActiverComposant(true);
 var Esclave_6=TAB_GLOBAL_COMPO[55];
 Esclave_6.ActiverComposant(true);
 var Esclave_7=TAB_GLOBAL_COMPO[56];
 Esclave_7.ActiverComposant(true);
 var Esclave_8=TAB_GLOBAL_COMPO[57];
 Esclave_8.ActiverComposant(true);
top.document.getElementById("Validate_Articles_Articles0").disabled=false;
top.document.getElementById("Annuler_Articles_Articles0").disabled=false;
top.document.getElementById("Insert_Articles_Articles0").disabled=true;
top.document.getElementById("Delete_Articles_Articles0").disabled=true;
top.document.getElementById("Update_Articles_Articles0").disabled=true;
return TAB_COMPO_PPTES[45].NewCle;
}

function Validate_Articles_Articles0(retour)
{
 /* Retour à l'onget appellant si appelle par gérer */
if (retour==null)
	retour=true;

 /* On recupère le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[45];
if (!UniteOk_Article(TAB_GLOBAL_COMPO[49],TAB_GLOBAL_COMPO[48]))
{
	alert("L'unité du conditionnement doit être la même que celle du produit");
	return -1;
}

 /* On recupère la clé du nouvel enregistrement */
 var NewCle=null;
 switch(TAB_COMPO_PPTES[45].Action_en_cours){
	case INSERT :
	if ((NewCle = User_Insert_Articles_Articles0(Maitre))==-1)
		return -1;
	break;
	case UPDATE :
	if ((User_Update_Articles_Articles0(Maitre))==-1)
		return -1;
	break;
 }
 /* On construit la requete pour ajouter les nouvelles cles */
 if (NewCle!=null)
 {
 	var ReqNewCle=new clReqSQL();
 	var OldUnion=Maitre.my_ReqRefresh.getUnion();
	if (OldUnion==null)
	{
		ReqNewCle.Cloner(Maitre.my_ReqInterne);
	}
	else
	{
		ReqNewCle.Cloner(OldUnion);
	}
 	ReqNewCle.AddWhere(Maitre.getCle()+" = "+NewCle,"OR");
	Maitre.Union(ReqNewCle);
 }
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[45].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[47];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[48];
 Esclave_1.ActiverComposant(false);
 var Esclave_2=TAB_GLOBAL_COMPO[49];
 Esclave_2.ActiverComposant(false);
 var Esclave_3=TAB_GLOBAL_COMPO[50];
 Esclave_3.ActiverComposant(false);
 var Esclave_4=TAB_GLOBAL_COMPO[53];
 Esclave_4.ActiverComposant(false);
 var Esclave_5=TAB_GLOBAL_COMPO[54];
 Esclave_5.ActiverComposant(false);
 var Esclave_6=TAB_GLOBAL_COMPO[55];
 Esclave_6.ActiverComposant(false);
 var Esclave_7=TAB_GLOBAL_COMPO[56];
 Esclave_7.ActiverComposant(false);
 var Esclave_8=TAB_GLOBAL_COMPO[57];
 Esclave_8.ActiverComposant(false);
top.document.getElementById("Validate_Articles_Articles0").disabled=true;
top.document.getElementById("Annuler_Articles_Articles0").disabled=true;
top.document.getElementById("Insert_Articles_Articles0").disabled=false;
top.document.getElementById("Delete_Articles_Articles0").disabled=false;
top.document.getElementById("Update_Articles_Articles0").disabled=false;
 if (NewCle==null)
 	NewCle=TAB_COMPO_PPTES[45].NewCle;
 Maitre.ForceNextSelection(NewCle)
 Maitre.RefreshTotal();
 if(retour)
 {
 Filtre_Dep_Articles_0.OnClose(false);
 Filtre_Dep_Articles_1.OnClose(false);
 }
 TAB_COMPO_PPTES[45].Action_en_cours = null;
 return NewCle;
}

function Annuler_Articles_Articles0()
{
 TAB_COMPO_PPTES[45].Action_en_cours = null;
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[45].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[47];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[48];
 Esclave_1.ActiverComposant(false);
 var Esclave_2=TAB_GLOBAL_COMPO[49];
 Esclave_2.ActiverComposant(false);
 var Esclave_3=TAB_GLOBAL_COMPO[50];
 Esclave_3.ActiverComposant(false);
 var Esclave_4=TAB_GLOBAL_COMPO[53];
 Esclave_4.ActiverComposant(false);
 var Esclave_5=TAB_GLOBAL_COMPO[54];
 Esclave_5.ActiverComposant(false);
 var Esclave_6=TAB_GLOBAL_COMPO[55];
 Esclave_6.ActiverComposant(false);
 var Esclave_7=TAB_GLOBAL_COMPO[56];
 Esclave_7.ActiverComposant(false);
 var Esclave_8=TAB_GLOBAL_COMPO[57];
 Esclave_8.ActiverComposant(false);
top.document.getElementById("Validate_Articles_Articles0").disabled=true;
top.document.getElementById("Annuler_Articles_Articles0").disabled=true;
top.document.getElementById("Insert_Articles_Articles0").disabled=false;
top.document.getElementById("Delete_Articles_Articles0").disabled=false;
top.document.getElementById("Update_Articles_Articles0").disabled=false;
}






/* *********************************************** 
         FONCTIONS POUR L'ONGLET Conditionnements
   ***********************************************/ 

 /* FILTRES DE RELATION ENTRE ONGLETS => VARIABLES GLOBALES POUR ETRE ACCESSIBLES DEPUIS INTERFACE_USER.JS */

 var Filtre_Dep_Conditionnements_0;
function Retour_Conditionnements()
{
 if (Filtre_Dep_Conditionnements_0.my_Filtre.getEtat())
 {
 	Filtre_Dep_Conditionnements_0.FctFermetureOnglet();
 }
}
function Gerer_Conditionnements(IdFiltreOnglet)
{
/* On désactive les autres filtres */
if (Filtre_Dep_Conditionnements_0.getId()!=IdFiltreOnglet)
{
	Filtre_Dep_Conditionnements_0.OnClose(true,false);
}
/* On change d'onglet */
 var tabs = top.document.getElementById("Tous_les_onglets");
 top.document.getElementById("Tous_les_onglets").setAttribute("hidden","false");
 tabs.selectedItem = top.document.getElementById("Onglet_Conditionnements");
}

function OuvrirOnglet_Conditionnements()
{
 var tabs = top.document.getElementById("Tous_les_onglets");
 tabs.selectedItem = top.document.getElementById("Onglet_Conditionnements");
}

function Insert_Conditionnements_Conditionnements0()
{
 TAB_COMPO_PPTES[58].Action_en_cours = INSERT;
/* On calcule la nouvelle clé */
 TAB_COMPO_PPTES[58].NewCle = getNewCle("conditionnement");
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[58].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[62];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[63];
 Esclave_1.ActiverComposant(true);
 var Esclave_2=TAB_GLOBAL_COMPO[64];
 Esclave_2.ActiverComposant(true);
 var Esclave_3=TAB_GLOBAL_COMPO[65];
 Esclave_3.ActiverComposant(true);
 var Esclave_4=TAB_GLOBAL_COMPO[66];
 Esclave_4.ActiverComposant(true);
top.document.getElementById("Validate_Conditionnements_Conditionnements0").disabled=false;
top.document.getElementById("Annuler_Conditionnements_Conditionnements0").disabled=false;
top.document.getElementById("Insert_Conditionnements_Conditionnements0").disabled=true;
top.document.getElementById("Delete_Conditionnements_Conditionnements0").disabled=true;
top.document.getElementById("Update_Conditionnements_Conditionnements0").disabled=true;
 var Maitre=TAB_GLOBAL_COMPO[58];
 /* Pour une insertion on désectionne */
 var tree=Maitre.getComposantXul();
 if (tree.view!=null)
 {
 	tree.currentIndex=-1;
 	tree.view.selection.clearSelection();
 }
return TAB_COMPO_PPTES[58].NewCle;
}

function Delete_Conditionnements_Conditionnements0()
{
 if (TAB_GLOBAL_COMPO[58].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement à suprimer");
 	return;
 }
 /* On recupère le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[58];
 if (confirm("Voulez vous vraiment supprimer l'enregistrement en cours ?"))
 {
	TAB_COMPO_PPTES[58].Action_en_cours = DELETE;
 	User_Delete_Conditionnements_Conditionnements0(Maitre);
	Maitre.RefreshTotal();
	Filtre_Dep_Conditionnements_0.OnClose(true);
 }
}

function Update_Conditionnements_Conditionnements0()
{
 if (TAB_GLOBAL_COMPO[58].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement à mettre à jour");
 	return -1;
 }
 TAB_COMPO_PPTES[58].Action_en_cours = UPDATE;
/* On calcule la nouvelle clé */
 TAB_COMPO_PPTES[58].NewCle = TAB_GLOBAL_COMPO[58].getCleVal();
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[58].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[62];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[63];
 Esclave_1.ActiverComposant(true);
 var Esclave_2=TAB_GLOBAL_COMPO[64];
 Esclave_2.ActiverComposant(true);
 var Esclave_3=TAB_GLOBAL_COMPO[65];
 Esclave_3.ActiverComposant(true);
 var Esclave_4=TAB_GLOBAL_COMPO[66];
 Esclave_4.ActiverComposant(true);
top.document.getElementById("Validate_Conditionnements_Conditionnements0").disabled=false;
top.document.getElementById("Annuler_Conditionnements_Conditionnements0").disabled=false;
top.document.getElementById("Insert_Conditionnements_Conditionnements0").disabled=true;
top.document.getElementById("Delete_Conditionnements_Conditionnements0").disabled=true;
top.document.getElementById("Update_Conditionnements_Conditionnements0").disabled=true;
return TAB_COMPO_PPTES[58].NewCle;
}

function Validate_Conditionnements_Conditionnements0(retour)
{
 /* Retour à l'onget appellant si appelle par gérer */
if (retour==null)
	retour=true;

 /* On recupère le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[58];
 /* On recupère la clé du nouvel enregistrement */
 var NewCle=null;
 switch(TAB_COMPO_PPTES[58].Action_en_cours){
	case INSERT :
	if ((NewCle = User_Insert_Conditionnements_Conditionnements0(Maitre))==-1)
		return -1;
	break;
	case UPDATE :
	if ((User_Update_Conditionnements_Conditionnements0(Maitre))==-1)
		return -1;
	break;
 }
 /* On construit la requete pour ajouter les nouvelles cles */
 if (NewCle!=null)
 {
 	var ReqNewCle=new clReqSQL();
 	var OldUnion=Maitre.my_ReqRefresh.getUnion();
	if (OldUnion==null)
	{
		ReqNewCle.Cloner(Maitre.my_ReqInterne);
	}
	else
	{
		ReqNewCle.Cloner(OldUnion);
	}
 	ReqNewCle.AddWhere(Maitre.getCle()+" = "+NewCle,"OR");
	Maitre.Union(ReqNewCle);
 }
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[58].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[62];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[63];
 Esclave_1.ActiverComposant(false);
 var Esclave_2=TAB_GLOBAL_COMPO[64];
 Esclave_2.ActiverComposant(false);
 var Esclave_3=TAB_GLOBAL_COMPO[65];
 Esclave_3.ActiverComposant(false);
 var Esclave_4=TAB_GLOBAL_COMPO[66];
 Esclave_4.ActiverComposant(false);
top.document.getElementById("Validate_Conditionnements_Conditionnements0").disabled=true;
top.document.getElementById("Annuler_Conditionnements_Conditionnements0").disabled=true;
top.document.getElementById("Insert_Conditionnements_Conditionnements0").disabled=false;
top.document.getElementById("Delete_Conditionnements_Conditionnements0").disabled=false;
top.document.getElementById("Update_Conditionnements_Conditionnements0").disabled=false;
 if (NewCle==null)
 	NewCle=TAB_COMPO_PPTES[58].NewCle;
 Maitre.ForceNextSelection(NewCle)
 Maitre.RefreshTotal();
 if(retour)
 {
 Filtre_Dep_Conditionnements_0.OnClose(false);
 }
 TAB_COMPO_PPTES[58].Action_en_cours = null;
 return NewCle;
}

function Annuler_Conditionnements_Conditionnements0()
{
 TAB_COMPO_PPTES[58].Action_en_cours = null;
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[58].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[62];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[63];
 Esclave_1.ActiverComposant(false);
 var Esclave_2=TAB_GLOBAL_COMPO[64];
 Esclave_2.ActiverComposant(false);
 var Esclave_3=TAB_GLOBAL_COMPO[65];
 Esclave_3.ActiverComposant(false);
 var Esclave_4=TAB_GLOBAL_COMPO[66];
 Esclave_4.ActiverComposant(false);
top.document.getElementById("Validate_Conditionnements_Conditionnements0").disabled=true;
top.document.getElementById("Annuler_Conditionnements_Conditionnements0").disabled=true;
top.document.getElementById("Insert_Conditionnements_Conditionnements0").disabled=false;
top.document.getElementById("Delete_Conditionnements_Conditionnements0").disabled=false;
top.document.getElementById("Update_Conditionnements_Conditionnements0").disabled=false;
}






/* *********************************************** 
         FONCTIONS POUR L'ONGLET Produits
   ***********************************************/ 

 /* FILTRES DE RELATION ENTRE ONGLETS => VARIABLES GLOBALES POUR ETRE ACCESSIBLES DEPUIS INTERFACE_USER.JS */

 var Filtre_Dep_Produits_0;
function Retour_Produits()
{
 if (Filtre_Dep_Produits_0.my_Filtre.getEtat())
 {
 	Filtre_Dep_Produits_0.FctFermetureOnglet();
 }
}
function Gerer_Produits(IdFiltreOnglet)
{
/* On désactive les autres filtres */
if (Filtre_Dep_Produits_0.getId()!=IdFiltreOnglet)
{
	Filtre_Dep_Produits_0.OnClose(true,false);
}
/* On change d'onglet */
 var tabs = top.document.getElementById("Tous_les_onglets");
 top.document.getElementById("Tous_les_onglets").setAttribute("hidden","false");
 tabs.selectedItem = top.document.getElementById("Onglet_Produits");
}

function OuvrirOnglet_Produits()
{
 var tabs = top.document.getElementById("Tous_les_onglets");
 tabs.selectedItem = top.document.getElementById("Onglet_Produits");
}

function Insert_Produits_Produits0()
{
 TAB_COMPO_PPTES[67].Action_en_cours = INSERT;
/* On calcule la nouvelle clé */
 TAB_COMPO_PPTES[67].NewCle = getNewCle("produit");
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[67].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[70];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[71];
 Esclave_1.ActiverComposant(true);
 var Esclave_2=TAB_GLOBAL_COMPO[72];
 Esclave_2.ActiverComposant(true);
 var Esclave_3=TAB_GLOBAL_COMPO[73];
 Esclave_3.ActiverComposant(true);
 var Esclave_4=TAB_GLOBAL_COMPO[74];
 Esclave_4.ActiverComposant(true);
 var Esclave_5=TAB_GLOBAL_COMPO[75];
 Esclave_5.ActiverComposant(true);
 var Esclave_6=TAB_GLOBAL_COMPO[76];
 Esclave_6.ActiverComposant(true);
 var Esclave_7=TAB_GLOBAL_COMPO[77];
 Esclave_7.ActiverComposant(true);
 var Esclave_8=TAB_GLOBAL_COMPO[78];
 Esclave_8.ActiverComposant(true);
 var Esclave_9=TAB_GLOBAL_COMPO[79];
 Esclave_9.ActiverComposant(true);
 var Esclave_10=TAB_GLOBAL_COMPO[83];
 Esclave_10.ActiverComposant(true);
top.document.getElementById("Validate_Produits_Produits0").disabled=false;
top.document.getElementById("Annuler_Produits_Produits0").disabled=false;
top.document.getElementById("Insert_Produits_Produits0").disabled=true;
top.document.getElementById("Delete_Produits_Produits0").disabled=true;
top.document.getElementById("Update_Produits_Produits0").disabled=true;
 var Maitre=TAB_GLOBAL_COMPO[67];
 /* Pour une insertion on désectionne */
 var tree=Maitre.getComposantXul();
 if (tree.view!=null)
 {
 	tree.currentIndex=-1;
 	tree.view.selection.clearSelection();
 }
return TAB_COMPO_PPTES[67].NewCle;
}

function Delete_Produits_Produits0()
{
 if (TAB_GLOBAL_COMPO[67].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement à suprimer");
 	return;
 }
 /* On recupère le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[67];
 if (confirm("Voulez vous vraiment supprimer l'enregistrement en cours ?"))
 {
	TAB_COMPO_PPTES[67].Action_en_cours = DELETE;
 	User_Delete_Produits_Produits0(Maitre);
	Maitre.RefreshTotal();
	Filtre_Dep_Produits_0.OnClose(true);
 }
}

function Update_Produits_Produits0()
{
 if (TAB_GLOBAL_COMPO[67].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement à mettre à jour");
 	return -1;
 }
 TAB_COMPO_PPTES[67].Action_en_cours = UPDATE;
/* On calcule la nouvelle clé */
 TAB_COMPO_PPTES[67].NewCle = TAB_GLOBAL_COMPO[67].getCleVal();
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[67].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[70];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[71];
 Esclave_1.ActiverComposant(true);
 var Esclave_2=TAB_GLOBAL_COMPO[72];
 Esclave_2.ActiverComposant(true);
 var Esclave_3=TAB_GLOBAL_COMPO[73];
 Esclave_3.ActiverComposant(true);
 var Esclave_4=TAB_GLOBAL_COMPO[74];
 Esclave_4.ActiverComposant(true);
 var Esclave_5=TAB_GLOBAL_COMPO[75];
 Esclave_5.ActiverComposant(true);
 var Esclave_6=TAB_GLOBAL_COMPO[76];
 Esclave_6.ActiverComposant(true);
 var Esclave_7=TAB_GLOBAL_COMPO[77];
 Esclave_7.ActiverComposant(true);
 var Esclave_8=TAB_GLOBAL_COMPO[78];
 Esclave_8.ActiverComposant(true);
 var Esclave_9=TAB_GLOBAL_COMPO[79];
 Esclave_9.ActiverComposant(true);
 var Esclave_10=TAB_GLOBAL_COMPO[83];
 Esclave_10.ActiverComposant(true);
top.document.getElementById("Validate_Produits_Produits0").disabled=false;
top.document.getElementById("Annuler_Produits_Produits0").disabled=false;
top.document.getElementById("Insert_Produits_Produits0").disabled=true;
top.document.getElementById("Delete_Produits_Produits0").disabled=true;
top.document.getElementById("Update_Produits_Produits0").disabled=true;
return TAB_COMPO_PPTES[67].NewCle;
}

function Validate_Produits_Produits0(retour)
{
 /* Retour à l'onget appellant si appelle par gérer */
if (retour==null)
	retour=true;

 /* On recupère le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[67];
 /* On recupère la clé du nouvel enregistrement */
 var NewCle=null;
 switch(TAB_COMPO_PPTES[67].Action_en_cours){
	case INSERT :
	if ((NewCle = User_Insert_Produits_Produits0(Maitre))==-1)
		return -1;
	break;
	case UPDATE :
	if ((User_Update_Produits_Produits0(Maitre))==-1)
		return -1;
	break;
 }
 /* On construit la requete pour ajouter les nouvelles cles */
 if (NewCle!=null)
 {
 	var ReqNewCle=new clReqSQL();
 	var OldUnion=Maitre.my_ReqRefresh.getUnion();
	if (OldUnion==null)
	{
		ReqNewCle.Cloner(Maitre.my_ReqInterne);
	}
	else
	{
		ReqNewCle.Cloner(OldUnion);
	}
 	ReqNewCle.AddWhere(Maitre.getCle()+" = "+NewCle,"OR");
	Maitre.Union(ReqNewCle);
 }
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[67].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[70];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[71];
 Esclave_1.ActiverComposant(false);
 var Esclave_2=TAB_GLOBAL_COMPO[72];
 Esclave_2.ActiverComposant(false);
 var Esclave_3=TAB_GLOBAL_COMPO[73];
 Esclave_3.ActiverComposant(false);
 var Esclave_4=TAB_GLOBAL_COMPO[74];
 Esclave_4.ActiverComposant(false);
 var Esclave_5=TAB_GLOBAL_COMPO[75];
 Esclave_5.ActiverComposant(false);
 var Esclave_6=TAB_GLOBAL_COMPO[76];
 Esclave_6.ActiverComposant(false);
 var Esclave_7=TAB_GLOBAL_COMPO[77];
 Esclave_7.ActiverComposant(false);
 var Esclave_8=TAB_GLOBAL_COMPO[78];
 Esclave_8.ActiverComposant(false);
 var Esclave_9=TAB_GLOBAL_COMPO[79];
 Esclave_9.ActiverComposant(false);
 var Esclave_10=TAB_GLOBAL_COMPO[83];
 Esclave_10.ActiverComposant(false);
top.document.getElementById("Validate_Produits_Produits0").disabled=true;
top.document.getElementById("Annuler_Produits_Produits0").disabled=true;
top.document.getElementById("Insert_Produits_Produits0").disabled=false;
top.document.getElementById("Delete_Produits_Produits0").disabled=false;
top.document.getElementById("Update_Produits_Produits0").disabled=false;
 if (NewCle==null)
 	NewCle=TAB_COMPO_PPTES[67].NewCle;
 Maitre.ForceNextSelection(NewCle)
 Maitre.RefreshTotal();
 if(retour)
 {
 Filtre_Dep_Produits_0.OnClose(false);
 }
 TAB_COMPO_PPTES[67].Action_en_cours = null;
 return NewCle;
}

function Annuler_Produits_Produits0()
{
 TAB_COMPO_PPTES[67].Action_en_cours = null;
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[67].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[70];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[71];
 Esclave_1.ActiverComposant(false);
 var Esclave_2=TAB_GLOBAL_COMPO[72];
 Esclave_2.ActiverComposant(false);
 var Esclave_3=TAB_GLOBAL_COMPO[73];
 Esclave_3.ActiverComposant(false);
 var Esclave_4=TAB_GLOBAL_COMPO[74];
 Esclave_4.ActiverComposant(false);
 var Esclave_5=TAB_GLOBAL_COMPO[75];
 Esclave_5.ActiverComposant(false);
 var Esclave_6=TAB_GLOBAL_COMPO[76];
 Esclave_6.ActiverComposant(false);
 var Esclave_7=TAB_GLOBAL_COMPO[77];
 Esclave_7.ActiverComposant(false);
 var Esclave_8=TAB_GLOBAL_COMPO[78];
 Esclave_8.ActiverComposant(false);
 var Esclave_9=TAB_GLOBAL_COMPO[79];
 Esclave_9.ActiverComposant(false);
 var Esclave_10=TAB_GLOBAL_COMPO[83];
 Esclave_10.ActiverComposant(false);
top.document.getElementById("Validate_Produits_Produits0").disabled=true;
top.document.getElementById("Annuler_Produits_Produits0").disabled=true;
top.document.getElementById("Insert_Produits_Produits0").disabled=false;
top.document.getElementById("Delete_Produits_Produits0").disabled=false;
top.document.getElementById("Update_Produits_Produits0").disabled=false;
}






/* *********************************************** 
         FONCTIONS POUR L'ONGLET Couches
   ***********************************************/ 

 /* FILTRES DE RELATION ENTRE ONGLETS => VARIABLES GLOBALES POUR ETRE ACCESSIBLES DEPUIS INTERFACE_USER.JS */

function OuvrirOnglet_Couches()
{
 var tabs = top.document.getElementById("Tous_les_onglets");
 tabs.selectedItem = top.document.getElementById("Onglet_Couches");
}

function Insert_Couches_Couches0()
{
 TAB_COMPO_PPTES[86].Action_en_cours = INSERT;
/* On calcule la nouvelle clé */
 TAB_COMPO_PPTES[86].NewCle = getNewCle("couche");
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[86].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[89];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[90];
 Esclave_1.ActiverComposant(true);
 var Esclave_2=TAB_GLOBAL_COMPO[91];
 Esclave_2.ActiverComposant(true);
 var Esclave_3=TAB_GLOBAL_COMPO[92];
 Esclave_3.ActiverComposant(true);
top.document.getElementById("Validate_Couches_Couches0").disabled=false;
top.document.getElementById("Annuler_Couches_Couches0").disabled=false;
top.document.getElementById("Insert_Couches_Couches0").disabled=true;
top.document.getElementById("Delete_Couches_Couches0").disabled=true;
top.document.getElementById("Update_Couches_Couches0").disabled=true;
 var Maitre=TAB_GLOBAL_COMPO[86];
 /* Pour une insertion on désectionne */
 var tree=Maitre.getComposantXul();
 if (tree.view!=null)
 {
 	tree.currentIndex=-1;
 	tree.view.selection.clearSelection();
 }
return TAB_COMPO_PPTES[86].NewCle;
}

function Delete_Couches_Couches0()
{
 if (TAB_GLOBAL_COMPO[86].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement à suprimer");
 	return;
 }
 /* On recupère le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[86];
 if (confirm("Voulez vous vraiment supprimer l'enregistrement en cours ?"))
 {
	TAB_COMPO_PPTES[86].Action_en_cours = DELETE;
 	User_Delete_Couches_Couches0(Maitre);
	Maitre.RefreshTotal();
 }
}

function Update_Couches_Couches0()
{
 if (TAB_GLOBAL_COMPO[86].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement à mettre à jour");
 	return -1;
 }
 TAB_COMPO_PPTES[86].Action_en_cours = UPDATE;
/* On calcule la nouvelle clé */
 TAB_COMPO_PPTES[86].NewCle = TAB_GLOBAL_COMPO[86].getCleVal();
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[86].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[89];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[90];
 Esclave_1.ActiverComposant(true);
 var Esclave_2=TAB_GLOBAL_COMPO[91];
 Esclave_2.ActiverComposant(true);
 var Esclave_3=TAB_GLOBAL_COMPO[92];
 Esclave_3.ActiverComposant(true);
top.document.getElementById("Validate_Couches_Couches0").disabled=false;
top.document.getElementById("Annuler_Couches_Couches0").disabled=false;
top.document.getElementById("Insert_Couches_Couches0").disabled=true;
top.document.getElementById("Delete_Couches_Couches0").disabled=true;
top.document.getElementById("Update_Couches_Couches0").disabled=true;
return TAB_COMPO_PPTES[86].NewCle;
}

function Validate_Couches_Couches0(retour)
{
 /* Retour à l'onget appellant si appelle par gérer */
if (retour==null)
	retour=true;

 /* On recupère le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[86];
 /* On recupère la clé du nouvel enregistrement */
 var NewCle=null;
 switch(TAB_COMPO_PPTES[86].Action_en_cours){
	case INSERT :
	if ((NewCle = User_Insert_Couches_Couches0(Maitre))==-1)
		return -1;
	break;
	case UPDATE :
	if ((User_Update_Couches_Couches0(Maitre))==-1)
		return -1;
	break;
 }
 /* On construit la requete pour ajouter les nouvelles cles */
 if (NewCle!=null)
 {
 	var ReqNewCle=new clReqSQL();
 	var OldUnion=Maitre.my_ReqRefresh.getUnion();
	if (OldUnion==null)
	{
		ReqNewCle.Cloner(Maitre.my_ReqInterne);
	}
	else
	{
		ReqNewCle.Cloner(OldUnion);
	}
 	ReqNewCle.AddWhere(Maitre.getCle()+" = "+NewCle,"OR");
	Maitre.Union(ReqNewCle);
 }
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[86].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[89];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[90];
 Esclave_1.ActiverComposant(false);
 var Esclave_2=TAB_GLOBAL_COMPO[91];
 Esclave_2.ActiverComposant(false);
 var Esclave_3=TAB_GLOBAL_COMPO[92];
 Esclave_3.ActiverComposant(false);
top.document.getElementById("Validate_Couches_Couches0").disabled=true;
top.document.getElementById("Annuler_Couches_Couches0").disabled=true;
top.document.getElementById("Insert_Couches_Couches0").disabled=false;
top.document.getElementById("Delete_Couches_Couches0").disabled=false;
top.document.getElementById("Update_Couches_Couches0").disabled=false;
 if (NewCle==null)
 	NewCle=TAB_COMPO_PPTES[86].NewCle;
 Maitre.ForceNextSelection(NewCle)
 Maitre.RefreshTotal();
 if(retour)
 {
 }
 TAB_COMPO_PPTES[86].Action_en_cours = null;
 return NewCle;
}

function Annuler_Couches_Couches0()
{
 TAB_COMPO_PPTES[86].Action_en_cours = null;
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[86].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[89];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[90];
 Esclave_1.ActiverComposant(false);
 var Esclave_2=TAB_GLOBAL_COMPO[91];
 Esclave_2.ActiverComposant(false);
 var Esclave_3=TAB_GLOBAL_COMPO[92];
 Esclave_3.ActiverComposant(false);
top.document.getElementById("Validate_Couches_Couches0").disabled=true;
top.document.getElementById("Annuler_Couches_Couches0").disabled=true;
top.document.getElementById("Insert_Couches_Couches0").disabled=false;
top.document.getElementById("Delete_Couches_Couches0").disabled=false;
top.document.getElementById("Update_Couches_Couches0").disabled=false;
}






/* *********************************************** 
         FONCTIONS POUR L'ONGLET Type de couche
   ***********************************************/ 

 /* FILTRES DE RELATION ENTRE ONGLETS => VARIABLES GLOBALES POUR ETRE ACCESSIBLES DEPUIS INTERFACE_USER.JS */

 var Filtre_Dep_Type_de_couche_0;
 var Filtre_Dep_Type_de_couche_1;
function Retour_Type_de_couche()
{
 if (Filtre_Dep_Type_de_couche_0.my_Filtre.getEtat())
 {
 	Filtre_Dep_Type_de_couche_0.FctFermetureOnglet();
 }
 if (Filtre_Dep_Type_de_couche_1.my_Filtre.getEtat())
 {
 	Filtre_Dep_Type_de_couche_1.FctFermetureOnglet();
 }
}
function Gerer_Type_de_couche(IdFiltreOnglet)
{
/* On désactive les autres filtres */
if (Filtre_Dep_Type_de_couche_0.getId()!=IdFiltreOnglet)
{
	Filtre_Dep_Type_de_couche_0.OnClose(true,false);
}
if (Filtre_Dep_Type_de_couche_1.getId()!=IdFiltreOnglet)
{
	Filtre_Dep_Type_de_couche_1.OnClose(true,false);
}
/* On change d'onglet */
 var tabs = top.document.getElementById("Tous_les_onglets");
 top.document.getElementById("Tous_les_onglets").setAttribute("hidden","false");
 tabs.selectedItem = top.document.getElementById("Onglet_Type_de_couche");
}

function OuvrirOnglet_Type_de_couche()
{
 var tabs = top.document.getElementById("Tous_les_onglets");
 tabs.selectedItem = top.document.getElementById("Onglet_Type_de_couche");
}

function Insert_Type_de_couche_Type_de_couches0()
{
 TAB_COMPO_PPTES[93].Action_en_cours = INSERT;
/* On calcule la nouvelle clé */
 TAB_COMPO_PPTES[93].NewCle = getNewCle("typecouche");
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[93].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[96];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[97];
 Esclave_1.ActiverComposant(true);
 var Esclave_2=TAB_GLOBAL_COMPO[98];
 Esclave_2.ActiverComposant(true);
 var Esclave_3=TAB_GLOBAL_COMPO[99];
 Esclave_3.ActiverComposant(true);
top.document.getElementById("Validate_Type_de_couche_Type_de_couches0").disabled=false;
top.document.getElementById("Annuler_Type_de_couche_Type_de_couches0").disabled=false;
top.document.getElementById("Insert_Type_de_couche_Type_de_couches0").disabled=true;
top.document.getElementById("Delete_Type_de_couche_Type_de_couches0").disabled=true;
top.document.getElementById("Update_Type_de_couche_Type_de_couches0").disabled=true;
 var Maitre=TAB_GLOBAL_COMPO[93];
 /* Pour une insertion on désectionne */
 var tree=Maitre.getComposantXul();
 if (tree.view!=null)
 {
 	tree.currentIndex=-1;
 	tree.view.selection.clearSelection();
 }
return TAB_COMPO_PPTES[93].NewCle;
}

function Delete_Type_de_couche_Type_de_couches0()
{
 if (TAB_GLOBAL_COMPO[93].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement à suprimer");
 	return;
 }
 /* On recupère le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[93];
 if (confirm("Voulez vous vraiment supprimer l'enregistrement en cours ?"))
 {
	TAB_COMPO_PPTES[93].Action_en_cours = DELETE;
 	User_Delete_Type_de_couche_Type_de_couches0(Maitre);
	Maitre.RefreshTotal();
	Filtre_Dep_Type_de_couche_0.OnClose(true);
	Filtre_Dep_Type_de_couche_1.OnClose(true);
 }
}

function Update_Type_de_couche_Type_de_couches0()
{
 if (TAB_GLOBAL_COMPO[93].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement à mettre à jour");
 	return -1;
 }
 TAB_COMPO_PPTES[93].Action_en_cours = UPDATE;
/* On calcule la nouvelle clé */
 TAB_COMPO_PPTES[93].NewCle = TAB_GLOBAL_COMPO[93].getCleVal();
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[93].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[96];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[97];
 Esclave_1.ActiverComposant(true);
 var Esclave_2=TAB_GLOBAL_COMPO[98];
 Esclave_2.ActiverComposant(true);
 var Esclave_3=TAB_GLOBAL_COMPO[99];
 Esclave_3.ActiverComposant(true);
top.document.getElementById("Validate_Type_de_couche_Type_de_couches0").disabled=false;
top.document.getElementById("Annuler_Type_de_couche_Type_de_couches0").disabled=false;
top.document.getElementById("Insert_Type_de_couche_Type_de_couches0").disabled=true;
top.document.getElementById("Delete_Type_de_couche_Type_de_couches0").disabled=true;
top.document.getElementById("Update_Type_de_couche_Type_de_couches0").disabled=true;
return TAB_COMPO_PPTES[93].NewCle;
}

function Validate_Type_de_couche_Type_de_couches0(retour)
{
 /* Retour à l'onget appellant si appelle par gérer */
if (retour==null)
	retour=true;

 /* On recupère le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[93];
 /* On recupère la clé du nouvel enregistrement */
 var NewCle=null;
 switch(TAB_COMPO_PPTES[93].Action_en_cours){
	case INSERT :
	if ((NewCle = User_Insert_Type_de_couche_Type_de_couches0(Maitre))==-1)
		return -1;
	break;
	case UPDATE :
	if ((User_Update_Type_de_couche_Type_de_couches0(Maitre))==-1)
		return -1;
	break;
 }
 /* On construit la requete pour ajouter les nouvelles cles */
 if (NewCle!=null)
 {
 	var ReqNewCle=new clReqSQL();
 	var OldUnion=Maitre.my_ReqRefresh.getUnion();
	if (OldUnion==null)
	{
		ReqNewCle.Cloner(Maitre.my_ReqInterne);
	}
	else
	{
		ReqNewCle.Cloner(OldUnion);
	}
 	ReqNewCle.AddWhere(Maitre.getCle()+" = "+NewCle,"OR");
	Maitre.Union(ReqNewCle);
 }
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[93].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[96];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[97];
 Esclave_1.ActiverComposant(false);
 var Esclave_2=TAB_GLOBAL_COMPO[98];
 Esclave_2.ActiverComposant(false);
 var Esclave_3=TAB_GLOBAL_COMPO[99];
 Esclave_3.ActiverComposant(false);
top.document.getElementById("Validate_Type_de_couche_Type_de_couches0").disabled=true;
top.document.getElementById("Annuler_Type_de_couche_Type_de_couches0").disabled=true;
top.document.getElementById("Insert_Type_de_couche_Type_de_couches0").disabled=false;
top.document.getElementById("Delete_Type_de_couche_Type_de_couches0").disabled=false;
top.document.getElementById("Update_Type_de_couche_Type_de_couches0").disabled=false;
 if (NewCle==null)
 	NewCle=TAB_COMPO_PPTES[93].NewCle;
 Maitre.ForceNextSelection(NewCle)
 Maitre.RefreshTotal();
 if(retour)
 {
 Filtre_Dep_Type_de_couche_0.OnClose(false);
 Filtre_Dep_Type_de_couche_1.OnClose(false);
 }
 TAB_COMPO_PPTES[93].Action_en_cours = null;
 return NewCle;
}

function Annuler_Type_de_couche_Type_de_couches0()
{
 TAB_COMPO_PPTES[93].Action_en_cours = null;
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[93].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[96];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[97];
 Esclave_1.ActiverComposant(false);
 var Esclave_2=TAB_GLOBAL_COMPO[98];
 Esclave_2.ActiverComposant(false);
 var Esclave_3=TAB_GLOBAL_COMPO[99];
 Esclave_3.ActiverComposant(false);
top.document.getElementById("Validate_Type_de_couche_Type_de_couches0").disabled=true;
top.document.getElementById("Annuler_Type_de_couche_Type_de_couches0").disabled=true;
top.document.getElementById("Insert_Type_de_couche_Type_de_couches0").disabled=false;
top.document.getElementById("Delete_Type_de_couche_Type_de_couches0").disabled=false;
top.document.getElementById("Update_Type_de_couche_Type_de_couches0").disabled=false;
}






/* *********************************************** 
         FONCTIONS POUR L'ONGLET Type de produits
   ***********************************************/ 

 /* FILTRES DE RELATION ENTRE ONGLETS => VARIABLES GLOBALES POUR ETRE ACCESSIBLES DEPUIS INTERFACE_USER.JS */

 var Filtre_Dep_Type_de_produits_0;
 var Filtre_Dep_Type_de_produits_1;
function Retour_Type_de_produits()
{
 if (Filtre_Dep_Type_de_produits_0.my_Filtre.getEtat())
 {
 	Filtre_Dep_Type_de_produits_0.FctFermetureOnglet();
 }
 if (Filtre_Dep_Type_de_produits_1.my_Filtre.getEtat())
 {
 	Filtre_Dep_Type_de_produits_1.FctFermetureOnglet();
 }
}
function Gerer_Type_de_produits(IdFiltreOnglet)
{
/* On désactive les autres filtres */
if (Filtre_Dep_Type_de_produits_0.getId()!=IdFiltreOnglet)
{
	Filtre_Dep_Type_de_produits_0.OnClose(true,false);
}
if (Filtre_Dep_Type_de_produits_1.getId()!=IdFiltreOnglet)
{
	Filtre_Dep_Type_de_produits_1.OnClose(true,false);
}
/* On change d'onglet */
 var tabs = top.document.getElementById("Tous_les_onglets");
 top.document.getElementById("Tous_les_onglets").setAttribute("hidden","false");
 tabs.selectedItem = top.document.getElementById("Onglet_Type_de_produits");
}

function OuvrirOnglet_Type_de_produits()
{
 var tabs = top.document.getElementById("Tous_les_onglets");
 tabs.selectedItem = top.document.getElementById("Onglet_Type_de_produits");
}

function Insert_Type_de_produits_Type_de_produits0()
{
 TAB_COMPO_PPTES[100].Action_en_cours = INSERT;
/* On calcule la nouvelle clé */
 TAB_COMPO_PPTES[100].NewCle = getNewCle("typeproduit");
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[100].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[103];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[104];
 Esclave_1.ActiverComposant(true);
 var Esclave_2=TAB_GLOBAL_COMPO[105];
 Esclave_2.ActiverComposant(true);
top.document.getElementById("Validate_Type_de_produits_Type_de_produits0").disabled=false;
top.document.getElementById("Annuler_Type_de_produits_Type_de_produits0").disabled=false;
top.document.getElementById("Insert_Type_de_produits_Type_de_produits0").disabled=true;
top.document.getElementById("Delete_Type_de_produits_Type_de_produits0").disabled=true;
top.document.getElementById("Update_Type_de_produits_Type_de_produits0").disabled=true;
 var Maitre=TAB_GLOBAL_COMPO[100];
 /* Pour une insertion on désectionne */
 var tree=Maitre.getComposantXul();
 if (tree.view!=null)
 {
 	tree.currentIndex=-1;
 	tree.view.selection.clearSelection();
 }
return TAB_COMPO_PPTES[100].NewCle;
}

function Delete_Type_de_produits_Type_de_produits0()
{
 if (TAB_GLOBAL_COMPO[100].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement à suprimer");
 	return;
 }
 /* On recupère le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[100];
 if (confirm("Voulez vous vraiment supprimer l'enregistrement en cours ?"))
 {
	TAB_COMPO_PPTES[100].Action_en_cours = DELETE;
 	User_Delete_Type_de_produits_Type_de_produits0(Maitre);
	Maitre.RefreshTotal();
	Filtre_Dep_Type_de_produits_0.OnClose(true);
	Filtre_Dep_Type_de_produits_1.OnClose(true);
 }
}

function Update_Type_de_produits_Type_de_produits0()
{
 if (TAB_GLOBAL_COMPO[100].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement à mettre à jour");
 	return -1;
 }
 TAB_COMPO_PPTES[100].Action_en_cours = UPDATE;
/* On calcule la nouvelle clé */
 TAB_COMPO_PPTES[100].NewCle = TAB_GLOBAL_COMPO[100].getCleVal();
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[100].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[103];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[104];
 Esclave_1.ActiverComposant(true);
 var Esclave_2=TAB_GLOBAL_COMPO[105];
 Esclave_2.ActiverComposant(true);
top.document.getElementById("Validate_Type_de_produits_Type_de_produits0").disabled=false;
top.document.getElementById("Annuler_Type_de_produits_Type_de_produits0").disabled=false;
top.document.getElementById("Insert_Type_de_produits_Type_de_produits0").disabled=true;
top.document.getElementById("Delete_Type_de_produits_Type_de_produits0").disabled=true;
top.document.getElementById("Update_Type_de_produits_Type_de_produits0").disabled=true;
return TAB_COMPO_PPTES[100].NewCle;
}

function Validate_Type_de_produits_Type_de_produits0(retour)
{
 /* Retour à l'onget appellant si appelle par gérer */
if (retour==null)
	retour=true;

 /* On recupère le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[100];
 /* On recupère la clé du nouvel enregistrement */
 var NewCle=null;
 switch(TAB_COMPO_PPTES[100].Action_en_cours){
	case INSERT :
	if ((NewCle = User_Insert_Type_de_produits_Type_de_produits0(Maitre))==-1)
		return -1;
	break;
	case UPDATE :
	if ((User_Update_Type_de_produits_Type_de_produits0(Maitre))==-1)
		return -1;
	break;
 }
 /* On construit la requete pour ajouter les nouvelles cles */
 if (NewCle!=null)
 {
 	var ReqNewCle=new clReqSQL();
 	var OldUnion=Maitre.my_ReqRefresh.getUnion();
	if (OldUnion==null)
	{
		ReqNewCle.Cloner(Maitre.my_ReqInterne);
	}
	else
	{
		ReqNewCle.Cloner(OldUnion);
	}
 	ReqNewCle.AddWhere(Maitre.getCle()+" = "+NewCle,"OR");
	Maitre.Union(ReqNewCle);
 }
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[100].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[103];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[104];
 Esclave_1.ActiverComposant(false);
 var Esclave_2=TAB_GLOBAL_COMPO[105];
 Esclave_2.ActiverComposant(false);
top.document.getElementById("Validate_Type_de_produits_Type_de_produits0").disabled=true;
top.document.getElementById("Annuler_Type_de_produits_Type_de_produits0").disabled=true;
top.document.getElementById("Insert_Type_de_produits_Type_de_produits0").disabled=false;
top.document.getElementById("Delete_Type_de_produits_Type_de_produits0").disabled=false;
top.document.getElementById("Update_Type_de_produits_Type_de_produits0").disabled=false;
 if (NewCle==null)
 	NewCle=TAB_COMPO_PPTES[100].NewCle;
 Maitre.ForceNextSelection(NewCle)
 Maitre.RefreshTotal();
 if(retour)
 {
 Filtre_Dep_Type_de_produits_0.OnClose(false);
 Filtre_Dep_Type_de_produits_1.OnClose(false);
 }
 TAB_COMPO_PPTES[100].Action_en_cours = null;
 return NewCle;
}

function Annuler_Type_de_produits_Type_de_produits0()
{
 TAB_COMPO_PPTES[100].Action_en_cours = null;
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[100].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[103];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[104];
 Esclave_1.ActiverComposant(false);
 var Esclave_2=TAB_GLOBAL_COMPO[105];
 Esclave_2.ActiverComposant(false);
top.document.getElementById("Validate_Type_de_produits_Type_de_produits0").disabled=true;
top.document.getElementById("Annuler_Type_de_produits_Type_de_produits0").disabled=true;
top.document.getElementById("Insert_Type_de_produits_Type_de_produits0").disabled=false;
top.document.getElementById("Delete_Type_de_produits_Type_de_produits0").disabled=false;
top.document.getElementById("Update_Type_de_produits_Type_de_produits0").disabled=false;
}






/* *********************************************** 
         FONCTIONS POUR L'ONGLET Unité
   ***********************************************/ 

 /* FILTRES DE RELATION ENTRE ONGLETS => VARIABLES GLOBALES POUR ETRE ACCESSIBLES DEPUIS INTERFACE_USER.JS */

 var Filtre_Dep_Unité_0;
 var Filtre_Dep_Unité_1;
 var Filtre_Dep_Unité_2;
function Retour_Unité()
{
 if (Filtre_Dep_Unité_0.my_Filtre.getEtat())
 {
 	Filtre_Dep_Unité_0.FctFermetureOnglet();
 }
 if (Filtre_Dep_Unité_1.my_Filtre.getEtat())
 {
 	Filtre_Dep_Unité_1.FctFermetureOnglet();
 }
 if (Filtre_Dep_Unité_2.my_Filtre.getEtat())
 {
 	Filtre_Dep_Unité_2.FctFermetureOnglet();
 }
}
function Gerer_Unité(IdFiltreOnglet)
{
/* On désactive les autres filtres */
if (Filtre_Dep_Unité_0.getId()!=IdFiltreOnglet)
{
	Filtre_Dep_Unité_0.OnClose(true,false);
}
if (Filtre_Dep_Unité_1.getId()!=IdFiltreOnglet)
{
	Filtre_Dep_Unité_1.OnClose(true,false);
}
if (Filtre_Dep_Unité_2.getId()!=IdFiltreOnglet)
{
	Filtre_Dep_Unité_2.OnClose(true,false);
}
/* On change d'onglet */
 var tabs = top.document.getElementById("Tous_les_onglets");
 top.document.getElementById("Tous_les_onglets").setAttribute("hidden","false");
 tabs.selectedItem = top.document.getElementById("Onglet_Unité");
}

function OuvrirOnglet_Unité()
{
 var tabs = top.document.getElementById("Tous_les_onglets");
 tabs.selectedItem = top.document.getElementById("Onglet_Unité");
}

function Insert_Unité_Unités0()
{
 TAB_COMPO_PPTES[106].Action_en_cours = INSERT;
/* On calcule la nouvelle clé */
 TAB_COMPO_PPTES[106].NewCle = getNewCle("unite");
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[106].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[108];
 Esclave_0.ActiverComposant(true);
top.document.getElementById("Validate_Unité_Unités0").disabled=false;
top.document.getElementById("Annuler_Unité_Unités0").disabled=false;
top.document.getElementById("Insert_Unité_Unités0").disabled=true;
top.document.getElementById("Delete_Unité_Unités0").disabled=true;
top.document.getElementById("Update_Unité_Unités0").disabled=true;
 var Maitre=TAB_GLOBAL_COMPO[106];
 /* Pour une insertion on désectionne */
 var tree=Maitre.getComposantXul();
 if (tree.view!=null)
 {
 	tree.currentIndex=-1;
 	tree.view.selection.clearSelection();
 }
return TAB_COMPO_PPTES[106].NewCle;
}

function Delete_Unité_Unités0()
{
 if (TAB_GLOBAL_COMPO[106].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement à suprimer");
 	return;
 }
 /* On recupère le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[106];
 if (confirm("Voulez vous vraiment supprimer l'enregistrement en cours ?"))
 {
	TAB_COMPO_PPTES[106].Action_en_cours = DELETE;
 	User_Delete_Unité_Unités0(Maitre);
	Maitre.RefreshTotal();
	Filtre_Dep_Unité_0.OnClose(true);
	Filtre_Dep_Unité_1.OnClose(true);
	Filtre_Dep_Unité_2.OnClose(true);
 }
}

function Update_Unité_Unités0()
{
 if (TAB_GLOBAL_COMPO[106].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement à mettre à jour");
 	return -1;
 }
 TAB_COMPO_PPTES[106].Action_en_cours = UPDATE;
/* On calcule la nouvelle clé */
 TAB_COMPO_PPTES[106].NewCle = TAB_GLOBAL_COMPO[106].getCleVal();
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[106].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[108];
 Esclave_0.ActiverComposant(true);
top.document.getElementById("Validate_Unité_Unités0").disabled=false;
top.document.getElementById("Annuler_Unité_Unités0").disabled=false;
top.document.getElementById("Insert_Unité_Unités0").disabled=true;
top.document.getElementById("Delete_Unité_Unités0").disabled=true;
top.document.getElementById("Update_Unité_Unités0").disabled=true;
return TAB_COMPO_PPTES[106].NewCle;
}

function Validate_Unité_Unités0(retour)
{
 /* Retour à l'onget appellant si appelle par gérer */
if (retour==null)
	retour=true;

 /* On recupère le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[106];
 /* On recupère la clé du nouvel enregistrement */
 var NewCle=null;
 switch(TAB_COMPO_PPTES[106].Action_en_cours){
	case INSERT :
	if ((NewCle = User_Insert_Unité_Unités0(Maitre))==-1)
		return -1;
	break;
	case UPDATE :
	if ((User_Update_Unité_Unités0(Maitre))==-1)
		return -1;
	break;
 }
 /* On construit la requete pour ajouter les nouvelles cles */
 if (NewCle!=null)
 {
 	var ReqNewCle=new clReqSQL();
 	var OldUnion=Maitre.my_ReqRefresh.getUnion();
	if (OldUnion==null)
	{
		ReqNewCle.Cloner(Maitre.my_ReqInterne);
	}
	else
	{
		ReqNewCle.Cloner(OldUnion);
	}
 	ReqNewCle.AddWhere(Maitre.getCle()+" = "+NewCle,"OR");
	Maitre.Union(ReqNewCle);
 }
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[106].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[108];
 Esclave_0.ActiverComposant(false);
top.document.getElementById("Validate_Unité_Unités0").disabled=true;
top.document.getElementById("Annuler_Unité_Unités0").disabled=true;
top.document.getElementById("Insert_Unité_Unités0").disabled=false;
top.document.getElementById("Delete_Unité_Unités0").disabled=false;
top.document.getElementById("Update_Unité_Unités0").disabled=false;
 if (NewCle==null)
 	NewCle=TAB_COMPO_PPTES[106].NewCle;
 Maitre.ForceNextSelection(NewCle)
 Maitre.RefreshTotal();
 if(retour)
 {
 Filtre_Dep_Unité_0.OnClose(false);
 Filtre_Dep_Unité_1.OnClose(false);
 Filtre_Dep_Unité_2.OnClose(false);
 }
 TAB_COMPO_PPTES[106].Action_en_cours = null;
 return NewCle;
}

function Annuler_Unité_Unités0()
{
 TAB_COMPO_PPTES[106].Action_en_cours = null;
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[106].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[108];
 Esclave_0.ActiverComposant(false);
top.document.getElementById("Validate_Unité_Unités0").disabled=true;
top.document.getElementById("Annuler_Unité_Unités0").disabled=true;
top.document.getElementById("Insert_Unité_Unités0").disabled=false;
top.document.getElementById("Delete_Unité_Unités0").disabled=false;
top.document.getElementById("Update_Unité_Unités0").disabled=false;
}






/* *********************************************** 
         FONCTIONS POUR L'ONGLET Forme
   ***********************************************/ 

 /* FILTRES DE RELATION ENTRE ONGLETS => VARIABLES GLOBALES POUR ETRE ACCESSIBLES DEPUIS INTERFACE_USER.JS */

 var Filtre_Dep_Forme_0;
function Retour_Forme()
{
 if (Filtre_Dep_Forme_0.my_Filtre.getEtat())
 {
 	Filtre_Dep_Forme_0.FctFermetureOnglet();
 }
}
function Gerer_Forme(IdFiltreOnglet)
{
/* On désactive les autres filtres */
if (Filtre_Dep_Forme_0.getId()!=IdFiltreOnglet)
{
	Filtre_Dep_Forme_0.OnClose(true,false);
}
/* On change d'onglet */
 var tabs = top.document.getElementById("Tous_les_onglets");
 top.document.getElementById("Tous_les_onglets").setAttribute("hidden","false");
 tabs.selectedItem = top.document.getElementById("Onglet_Forme");
}

function OuvrirOnglet_Forme()
{
 var tabs = top.document.getElementById("Tous_les_onglets");
 tabs.selectedItem = top.document.getElementById("Onglet_Forme");
}

function Insert_Forme_Formes0()
{
 TAB_COMPO_PPTES[109].Action_en_cours = INSERT;
/* On calcule la nouvelle clé */
 TAB_COMPO_PPTES[109].NewCle = getNewCle("forme");
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[109].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[111];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[112];
 Esclave_1.ActiverComposant(true);
 var Esclave_2=TAB_GLOBAL_COMPO[113];
 Esclave_2.ActiverComposant(true);
top.document.getElementById("Validate_Forme_Formes0").disabled=false;
top.document.getElementById("Annuler_Forme_Formes0").disabled=false;
top.document.getElementById("Insert_Forme_Formes0").disabled=true;
top.document.getElementById("Delete_Forme_Formes0").disabled=true;
top.document.getElementById("Update_Forme_Formes0").disabled=true;
 var Maitre=TAB_GLOBAL_COMPO[109];
 /* Pour une insertion on désectionne */
 var tree=Maitre.getComposantXul();
 if (tree.view!=null)
 {
 	tree.currentIndex=-1;
 	tree.view.selection.clearSelection();
 }
return TAB_COMPO_PPTES[109].NewCle;
}

function Delete_Forme_Formes0()
{
 if (TAB_GLOBAL_COMPO[109].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement à suprimer");
 	return;
 }
 /* On recupère le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[109];
 if (confirm("Voulez vous vraiment supprimer l'enregistrement en cours ?"))
 {
	TAB_COMPO_PPTES[109].Action_en_cours = DELETE;
 	User_Delete_Forme_Formes0(Maitre);
	Maitre.RefreshTotal();
	Filtre_Dep_Forme_0.OnClose(true);
 }
}

function Update_Forme_Formes0()
{
 if (TAB_GLOBAL_COMPO[109].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement à mettre à jour");
 	return -1;
 }
 TAB_COMPO_PPTES[109].Action_en_cours = UPDATE;
/* On calcule la nouvelle clé */
 TAB_COMPO_PPTES[109].NewCle = TAB_GLOBAL_COMPO[109].getCleVal();
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[109].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[111];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[112];
 Esclave_1.ActiverComposant(true);
 var Esclave_2=TAB_GLOBAL_COMPO[113];
 Esclave_2.ActiverComposant(true);
top.document.getElementById("Validate_Forme_Formes0").disabled=false;
top.document.getElementById("Annuler_Forme_Formes0").disabled=false;
top.document.getElementById("Insert_Forme_Formes0").disabled=true;
top.document.getElementById("Delete_Forme_Formes0").disabled=true;
top.document.getElementById("Update_Forme_Formes0").disabled=true;
return TAB_COMPO_PPTES[109].NewCle;
}

function Validate_Forme_Formes0(retour)
{
 /* Retour à l'onget appellant si appelle par gérer */
if (retour==null)
	retour=true;

 /* On recupère le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[109];
 /* On recupère la clé du nouvel enregistrement */
 var NewCle=null;
 switch(TAB_COMPO_PPTES[109].Action_en_cours){
	case INSERT :
	if ((NewCle = User_Insert_Forme_Formes0(Maitre))==-1)
		return -1;
	break;
	case UPDATE :
	if ((User_Update_Forme_Formes0(Maitre))==-1)
		return -1;
	break;
 }
 /* On construit la requete pour ajouter les nouvelles cles */
 if (NewCle!=null)
 {
 	var ReqNewCle=new clReqSQL();
 	var OldUnion=Maitre.my_ReqRefresh.getUnion();
	if (OldUnion==null)
	{
		ReqNewCle.Cloner(Maitre.my_ReqInterne);
	}
	else
	{
		ReqNewCle.Cloner(OldUnion);
	}
 	ReqNewCle.AddWhere(Maitre.getCle()+" = "+NewCle,"OR");
	Maitre.Union(ReqNewCle);
 }
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[109].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[111];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[112];
 Esclave_1.ActiverComposant(false);
 var Esclave_2=TAB_GLOBAL_COMPO[113];
 Esclave_2.ActiverComposant(false);
top.document.getElementById("Validate_Forme_Formes0").disabled=true;
top.document.getElementById("Annuler_Forme_Formes0").disabled=true;
top.document.getElementById("Insert_Forme_Formes0").disabled=false;
top.document.getElementById("Delete_Forme_Formes0").disabled=false;
top.document.getElementById("Update_Forme_Formes0").disabled=false;
 if (NewCle==null)
 	NewCle=TAB_COMPO_PPTES[109].NewCle;
 Maitre.ForceNextSelection(NewCle)
 Maitre.RefreshTotal();
 if(retour)
 {
 Filtre_Dep_Forme_0.OnClose(false);
 }
 TAB_COMPO_PPTES[109].Action_en_cours = null;
 return NewCle;
}

function Annuler_Forme_Formes0()
{
 TAB_COMPO_PPTES[109].Action_en_cours = null;
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[109].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[111];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[112];
 Esclave_1.ActiverComposant(false);
 var Esclave_2=TAB_GLOBAL_COMPO[113];
 Esclave_2.ActiverComposant(false);
top.document.getElementById("Validate_Forme_Formes0").disabled=true;
top.document.getElementById("Annuler_Forme_Formes0").disabled=true;
top.document.getElementById("Insert_Forme_Formes0").disabled=false;
top.document.getElementById("Delete_Forme_Formes0").disabled=false;
top.document.getElementById("Update_Forme_Formes0").disabled=false;
}






/* *********************************************** 
         FONCTIONS POUR L'ONGLET Varieté
   ***********************************************/ 

 /* FILTRES DE RELATION ENTRE ONGLETS => VARIABLES GLOBALES POUR ETRE ACCESSIBLES DEPUIS INTERFACE_USER.JS */

 var Filtre_Dep_Varieté_0;
 var Filtre_Dep_Varieté_1;
function Retour_Varieté()
{
 if (Filtre_Dep_Varieté_0.my_Filtre.getEtat())
 {
 	Filtre_Dep_Varieté_0.FctFermetureOnglet();
 }
 if (Filtre_Dep_Varieté_1.my_Filtre.getEtat())
 {
 	Filtre_Dep_Varieté_1.FctFermetureOnglet();
 }
}
function Gerer_Varieté(IdFiltreOnglet)
{
/* On désactive les autres filtres */
if (Filtre_Dep_Varieté_0.getId()!=IdFiltreOnglet)
{
	Filtre_Dep_Varieté_0.OnClose(true,false);
}
if (Filtre_Dep_Varieté_1.getId()!=IdFiltreOnglet)
{
	Filtre_Dep_Varieté_1.OnClose(true,false);
}
/* On change d'onglet */
 var tabs = top.document.getElementById("Tous_les_onglets");
 top.document.getElementById("Tous_les_onglets").setAttribute("hidden","false");
 tabs.selectedItem = top.document.getElementById("Onglet_Varieté");
}

function OuvrirOnglet_Varieté()
{
 var tabs = top.document.getElementById("Tous_les_onglets");
 tabs.selectedItem = top.document.getElementById("Onglet_Varieté");
}

function Insert_Varieté_Varietés0()
{
 TAB_COMPO_PPTES[114].Action_en_cours = INSERT;
/* On calcule la nouvelle clé */
 TAB_COMPO_PPTES[114].NewCle = getNewCle("variete");
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[114].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[116];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[117];
 Esclave_1.ActiverComposant(true);
 var Esclave_2=TAB_GLOBAL_COMPO[118];
 Esclave_2.ActiverComposant(true);
top.document.getElementById("Validate_Varieté_Varietés0").disabled=false;
top.document.getElementById("Annuler_Varieté_Varietés0").disabled=false;
top.document.getElementById("Insert_Varieté_Varietés0").disabled=true;
top.document.getElementById("Delete_Varieté_Varietés0").disabled=true;
top.document.getElementById("Update_Varieté_Varietés0").disabled=true;
 var Maitre=TAB_GLOBAL_COMPO[114];
 /* Pour une insertion on désectionne */
 var tree=Maitre.getComposantXul();
 if (tree.view!=null)
 {
 	tree.currentIndex=-1;
 	tree.view.selection.clearSelection();
 }
return TAB_COMPO_PPTES[114].NewCle;
}

function Delete_Varieté_Varietés0()
{
 if (TAB_GLOBAL_COMPO[114].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement à suprimer");
 	return;
 }
 /* On recupère le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[114];
 if (confirm("Voulez vous vraiment supprimer l'enregistrement en cours ?"))
 {
	TAB_COMPO_PPTES[114].Action_en_cours = DELETE;
 	User_Delete_Varieté_Varietés0(Maitre);
	Maitre.RefreshTotal();
	Filtre_Dep_Varieté_0.OnClose(true);
	Filtre_Dep_Varieté_1.OnClose(true);
 }
}

function Update_Varieté_Varietés0()
{
 if (TAB_GLOBAL_COMPO[114].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement à mettre à jour");
 	return -1;
 }
 TAB_COMPO_PPTES[114].Action_en_cours = UPDATE;
/* On calcule la nouvelle clé */
 TAB_COMPO_PPTES[114].NewCle = TAB_GLOBAL_COMPO[114].getCleVal();
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[114].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[116];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[117];
 Esclave_1.ActiverComposant(true);
 var Esclave_2=TAB_GLOBAL_COMPO[118];
 Esclave_2.ActiverComposant(true);
top.document.getElementById("Validate_Varieté_Varietés0").disabled=false;
top.document.getElementById("Annuler_Varieté_Varietés0").disabled=false;
top.document.getElementById("Insert_Varieté_Varietés0").disabled=true;
top.document.getElementById("Delete_Varieté_Varietés0").disabled=true;
top.document.getElementById("Update_Varieté_Varietés0").disabled=true;
return TAB_COMPO_PPTES[114].NewCle;
}

function Validate_Varieté_Varietés0(retour)
{
 /* Retour à l'onget appellant si appelle par gérer */
if (retour==null)
	retour=true;

 /* On recupère le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[114];
 /* On recupère la clé du nouvel enregistrement */
 var NewCle=null;
 switch(TAB_COMPO_PPTES[114].Action_en_cours){
	case INSERT :
	if ((NewCle = User_Insert_Varieté_Varietés0(Maitre))==-1)
		return -1;
	break;
	case UPDATE :
	if ((User_Update_Varieté_Varietés0(Maitre))==-1)
		return -1;
	break;
 }
 /* On construit la requete pour ajouter les nouvelles cles */
 if (NewCle!=null)
 {
 	var ReqNewCle=new clReqSQL();
 	var OldUnion=Maitre.my_ReqRefresh.getUnion();
	if (OldUnion==null)
	{
		ReqNewCle.Cloner(Maitre.my_ReqInterne);
	}
	else
	{
		ReqNewCle.Cloner(OldUnion);
	}
 	ReqNewCle.AddWhere(Maitre.getCle()+" = "+NewCle,"OR");
	Maitre.Union(ReqNewCle);
 }
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[114].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[116];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[117];
 Esclave_1.ActiverComposant(false);
 var Esclave_2=TAB_GLOBAL_COMPO[118];
 Esclave_2.ActiverComposant(false);
top.document.getElementById("Validate_Varieté_Varietés0").disabled=true;
top.document.getElementById("Annuler_Varieté_Varietés0").disabled=true;
top.document.getElementById("Insert_Varieté_Varietés0").disabled=false;
top.document.getElementById("Delete_Varieté_Varietés0").disabled=false;
top.document.getElementById("Update_Varieté_Varietés0").disabled=false;
 if (NewCle==null)
 	NewCle=TAB_COMPO_PPTES[114].NewCle;
 Maitre.ForceNextSelection(NewCle)
 Maitre.RefreshTotal();
 if(retour)
 {
 Filtre_Dep_Varieté_0.OnClose(false);
 Filtre_Dep_Varieté_1.OnClose(false);
 }
 TAB_COMPO_PPTES[114].Action_en_cours = null;
 return NewCle;
}

function Annuler_Varieté_Varietés0()
{
 TAB_COMPO_PPTES[114].Action_en_cours = null;
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[114].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[116];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[117];
 Esclave_1.ActiverComposant(false);
 var Esclave_2=TAB_GLOBAL_COMPO[118];
 Esclave_2.ActiverComposant(false);
top.document.getElementById("Validate_Varieté_Varietés0").disabled=true;
top.document.getElementById("Annuler_Varieté_Varietés0").disabled=true;
top.document.getElementById("Insert_Varieté_Varietés0").disabled=false;
top.document.getElementById("Delete_Varieté_Varietés0").disabled=false;
top.document.getElementById("Update_Varieté_Varietés0").disabled=false;
}






/* *********************************************** 
         FONCTIONS POUR L'ONGLET Composition
   ***********************************************/ 

 /* FILTRES DE RELATION ENTRE ONGLETS => VARIABLES GLOBALES POUR ETRE ACCESSIBLES DEPUIS INTERFACE_USER.JS */

 var Filtre_Dep_Composition_0;
function Retour_Composition()
{
 if (Filtre_Dep_Composition_0.my_Filtre.getEtat())
 {
 	Filtre_Dep_Composition_0.FctFermetureOnglet();
 }
}
function Gerer_Composition(IdFiltreOnglet)
{
/* On désactive les autres filtres */
if (Filtre_Dep_Composition_0.getId()!=IdFiltreOnglet)
{
	Filtre_Dep_Composition_0.OnClose(true,false);
}
/* On change d'onglet */
 var tabs = top.document.getElementById("Tous_les_onglets");
 top.document.getElementById("Tous_les_onglets").setAttribute("hidden","false");
 tabs.selectedItem = top.document.getElementById("Onglet_Composition");
}

function OuvrirOnglet_Composition()
{
 var tabs = top.document.getElementById("Tous_les_onglets");
 tabs.selectedItem = top.document.getElementById("Onglet_Composition");
}

function Insert_Composition_Compositions0()
{
 TAB_COMPO_PPTES[119].Action_en_cours = INSERT;
/* On calcule la nouvelle clé */
 TAB_COMPO_PPTES[119].NewCle = getNewCle("composition");
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[119].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[121];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[122];
 Esclave_1.ActiverComposant(true);
top.document.getElementById("Validate_Composition_Composants_3").disabled=true;
top.document.getElementById("Annuler_Composition_Composants_3").disabled=true;
top.document.getElementById("Insert_Composition_Composants_3").disabled=false;
top.document.getElementById("Delete_Composition_Composants_3").disabled=false;
top.document.getElementById("Update_Composition_Composants_3").disabled=false;
 var Esclave_2=TAB_GLOBAL_COMPO[123];
 Esclave_2.ActiverComposant(true);
top.document.getElementById("Validate_Composition_Compositions0").disabled=false;
top.document.getElementById("Annuler_Composition_Compositions0").disabled=false;
top.document.getElementById("Insert_Composition_Compositions0").disabled=true;
top.document.getElementById("Delete_Composition_Compositions0").disabled=true;
top.document.getElementById("Update_Composition_Compositions0").disabled=true;
 var Maitre=TAB_GLOBAL_COMPO[119];
 /* Pour une insertion on désectionne */
 var tree=Maitre.getComposantXul();
 if (tree.view!=null)
 {
 	tree.currentIndex=-1;
 	tree.view.selection.clearSelection();
 }
return TAB_COMPO_PPTES[119].NewCle;
}

function Delete_Composition_Compositions0()
{
 if (TAB_GLOBAL_COMPO[119].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement à suprimer");
 	return;
 }
 /* On recupère le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[119];
 if (confirm("Voulez vous vraiment supprimer l'enregistrement en cours ?"))
 {
	TAB_COMPO_PPTES[119].Action_en_cours = DELETE;
 	User_Delete_Composition_Compositions0(Maitre);
	Maitre.RefreshTotal();
	Filtre_Dep_Composition_0.OnClose(true);
 }
}

function Update_Composition_Compositions0()
{
 if (TAB_GLOBAL_COMPO[119].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement à mettre à jour");
 	return -1;
 }
 TAB_COMPO_PPTES[119].Action_en_cours = UPDATE;
/* On calcule la nouvelle clé */
 TAB_COMPO_PPTES[119].NewCle = TAB_GLOBAL_COMPO[119].getCleVal();
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[119].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[121];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[122];
 Esclave_1.ActiverComposant(true);
top.document.getElementById("Validate_Composition_Composants_3").disabled=true;
top.document.getElementById("Annuler_Composition_Composants_3").disabled=true;
top.document.getElementById("Insert_Composition_Composants_3").disabled=false;
top.document.getElementById("Delete_Composition_Composants_3").disabled=false;
top.document.getElementById("Update_Composition_Composants_3").disabled=false;
 var Esclave_2=TAB_GLOBAL_COMPO[123];
 Esclave_2.ActiverComposant(true);
top.document.getElementById("Validate_Composition_Compositions0").disabled=false;
top.document.getElementById("Annuler_Composition_Compositions0").disabled=false;
top.document.getElementById("Insert_Composition_Compositions0").disabled=true;
top.document.getElementById("Delete_Composition_Compositions0").disabled=true;
top.document.getElementById("Update_Composition_Compositions0").disabled=true;
return TAB_COMPO_PPTES[119].NewCle;
}

function Validate_Composition_Compositions0(retour)
{
 /* Retour à l'onget appellant si appelle par gérer */
if (retour==null)
	retour=true;

 /* On recupère le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[119];
 /* On recupère la clé du nouvel enregistrement */
 var NewCle=null;
 switch(TAB_COMPO_PPTES[119].Action_en_cours){
	case INSERT :
	if ((NewCle = User_Insert_Composition_Compositions0(Maitre))==-1)
		return -1;
	break;
	case UPDATE :
	if ((User_Update_Composition_Compositions0(Maitre))==-1)
		return -1;
	break;
 }
 /* On construit la requete pour ajouter les nouvelles cles */
 if (NewCle!=null)
 {
 	var ReqNewCle=new clReqSQL();
 	var OldUnion=Maitre.my_ReqRefresh.getUnion();
	if (OldUnion==null)
	{
		ReqNewCle.Cloner(Maitre.my_ReqInterne);
	}
	else
	{
		ReqNewCle.Cloner(OldUnion);
	}
 	ReqNewCle.AddWhere(Maitre.getCle()+" = "+NewCle,"OR");
	Maitre.Union(ReqNewCle);
 }
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[119].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[121];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[122];
 Esclave_1.ActiverComposant(false);
Annuler_Composition_Composants_3();
top.document.getElementById("Validate_Composition_Composants_3").disabled=true;
top.document.getElementById("Annuler_Composition_Composants_3").disabled=true;
top.document.getElementById("Insert_Composition_Composants_3").disabled=true;
top.document.getElementById("Delete_Composition_Composants_3").disabled=true;
top.document.getElementById("Update_Composition_Composants_3").disabled=true;
 var Esclave_2=TAB_GLOBAL_COMPO[123];
 Esclave_2.ActiverComposant(false);
top.document.getElementById("Validate_Composition_Compositions0").disabled=true;
top.document.getElementById("Annuler_Composition_Compositions0").disabled=true;
top.document.getElementById("Insert_Composition_Compositions0").disabled=false;
top.document.getElementById("Delete_Composition_Compositions0").disabled=false;
top.document.getElementById("Update_Composition_Compositions0").disabled=false;
 if (NewCle==null)
 	NewCle=TAB_COMPO_PPTES[119].NewCle;
 Maitre.ForceNextSelection(NewCle)
 Maitre.RefreshTotal();
 if(retour)
 {
 Filtre_Dep_Composition_0.OnClose(false);
 }
 TAB_COMPO_PPTES[119].Action_en_cours = null;
 return NewCle;
}

function Annuler_Composition_Compositions0()
{
 TAB_COMPO_PPTES[119].Action_en_cours = null;
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[119].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[121];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[122];
 Esclave_1.ActiverComposant(false);
Annuler_Composition_Composants_3();
top.document.getElementById("Validate_Composition_Composants_3").disabled=true;
top.document.getElementById("Annuler_Composition_Composants_3").disabled=true;
top.document.getElementById("Insert_Composition_Composants_3").disabled=true;
top.document.getElementById("Delete_Composition_Composants_3").disabled=true;
top.document.getElementById("Update_Composition_Composants_3").disabled=true;
 var Esclave_2=TAB_GLOBAL_COMPO[123];
 Esclave_2.ActiverComposant(false);
top.document.getElementById("Validate_Composition_Compositions0").disabled=true;
top.document.getElementById("Annuler_Composition_Compositions0").disabled=true;
top.document.getElementById("Insert_Composition_Compositions0").disabled=false;
top.document.getElementById("Delete_Composition_Compositions0").disabled=false;
top.document.getElementById("Update_Composition_Compositions0").disabled=false;
}

function Insert_Composition_Composants_3()
{
 if (TAB_COMPO_PPTES[119].Action_en_cours == INSERT)
 	{
 		if (confirm("Pour continuer, vous devez enregistrer votre saisie\n Voulez vous poursuivre ?"))
		{
			var CleValide=Validate_Composition_Compositions0(false);
			if (CleValide==-1)
			{
				return -1;
			}
			CleValide=Update_Composition_Compositions0();
			if (CleValide==-1)
			{
				alert("Erreur l'enregistrement n'a pas étais correctement inséré");
				return -1;
			}
			Insert_Composition_Composants_3();
		}
 		return;
 	}
 TAB_COMPO_PPTES[123].Action_en_cours = INSERT;
/* On calcule la nouvelle clé */
 TAB_COMPO_PPTES[123].NewCle = getNewCle("compose");
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[123].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[127];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[128];
 Esclave_1.ActiverComposant(true);
 var Esclave_2=TAB_GLOBAL_COMPO[129];
 Esclave_2.ActiverComposant(true);
top.document.getElementById("Validate_Composition_Composants_3").disabled=false;
top.document.getElementById("Annuler_Composition_Composants_3").disabled=false;
top.document.getElementById("Insert_Composition_Composants_3").disabled=true;
top.document.getElementById("Delete_Composition_Composants_3").disabled=true;
top.document.getElementById("Update_Composition_Composants_3").disabled=true;
 var Maitre=TAB_GLOBAL_COMPO[123];
 /* Pour une insertion on désectionne */
 var tree=Maitre.getComposantXul();
 if (tree.view!=null)
 {
 	tree.currentIndex=-1;
 	tree.view.selection.clearSelection();
 }
return TAB_COMPO_PPTES[123].NewCle;
}

function Delete_Composition_Composants_3()
{
 if (TAB_GLOBAL_COMPO[123].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement à suprimer");
 	return;
 }
 /* On recupère le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[123];
 if (confirm("Voulez vous vraiment supprimer l'enregistrement en cours ?"))
 {
	TAB_COMPO_PPTES[123].Action_en_cours = DELETE;
 	User_Delete_Composition_Composants_3(Maitre);
	Maitre.RefreshTotal();
 }
}

function Update_Composition_Composants_3()
{
 if (TAB_GLOBAL_COMPO[123].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement à mettre à jour");
 	return -1;
 }
 TAB_COMPO_PPTES[123].Action_en_cours = UPDATE;
/* On calcule la nouvelle clé */
 TAB_COMPO_PPTES[123].NewCle = TAB_GLOBAL_COMPO[123].getCleVal();
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[123].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[127];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[128];
 Esclave_1.ActiverComposant(true);
 var Esclave_2=TAB_GLOBAL_COMPO[129];
 Esclave_2.ActiverComposant(true);
top.document.getElementById("Validate_Composition_Composants_3").disabled=false;
top.document.getElementById("Annuler_Composition_Composants_3").disabled=false;
top.document.getElementById("Insert_Composition_Composants_3").disabled=true;
top.document.getElementById("Delete_Composition_Composants_3").disabled=true;
top.document.getElementById("Update_Composition_Composants_3").disabled=true;
return TAB_COMPO_PPTES[123].NewCle;
}

function Validate_Composition_Composants_3(retour)
{
 /* Retour à l'onget appellant si appelle par gérer */
if (retour==null)
	retour=true;

 /* On recupère le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[123];
 /* On recupère la clé du nouvel enregistrement */
 var NewCle=null;
 switch(TAB_COMPO_PPTES[123].Action_en_cours){
	case INSERT :
	if ((NewCle = User_Insert_Composition_Composants_3(Maitre))==-1)
		return -1;
	break;
	case UPDATE :
	if ((User_Update_Composition_Composants_3(Maitre))==-1)
		return -1;
	break;
 }
 /* On construit la requete pour ajouter les nouvelles cles */
 if (NewCle!=null)
 {
 	var ReqNewCle=new clReqSQL();
 	var OldUnion=Maitre.my_ReqRefresh.getUnion();
	if (OldUnion==null)
	{
		ReqNewCle.Cloner(Maitre.my_ReqInterne);
	}
	else
	{
		ReqNewCle.Cloner(OldUnion);
	}
 	ReqNewCle.AddWhere(Maitre.getCle()+" = "+NewCle,"OR");
	Maitre.Union(ReqNewCle);
 }
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[123].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[127];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[128];
 Esclave_1.ActiverComposant(false);
 var Esclave_2=TAB_GLOBAL_COMPO[129];
 Esclave_2.ActiverComposant(false);
top.document.getElementById("Validate_Composition_Composants_3").disabled=true;
top.document.getElementById("Annuler_Composition_Composants_3").disabled=true;
top.document.getElementById("Insert_Composition_Composants_3").disabled=false;
top.document.getElementById("Delete_Composition_Composants_3").disabled=false;
top.document.getElementById("Update_Composition_Composants_3").disabled=false;
 if (NewCle==null)
 	NewCle=TAB_COMPO_PPTES[123].NewCle;
 Maitre.ForceNextSelection(NewCle)
 Maitre.RefreshTotal();
 if(retour)
 {
 }
 TAB_COMPO_PPTES[123].Action_en_cours = null;
 return NewCle;
}

function Annuler_Composition_Composants_3()
{
 TAB_COMPO_PPTES[123].Action_en_cours = null;
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[123].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[127];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[128];
 Esclave_1.ActiverComposant(false);
 var Esclave_2=TAB_GLOBAL_COMPO[129];
 Esclave_2.ActiverComposant(false);
top.document.getElementById("Validate_Composition_Composants_3").disabled=true;
top.document.getElementById("Annuler_Composition_Composants_3").disabled=true;
top.document.getElementById("Insert_Composition_Composants_3").disabled=false;
top.document.getElementById("Delete_Composition_Composants_3").disabled=false;
top.document.getElementById("Update_Composition_Composants_3").disabled=false;
}






/* *********************************************** 
         FONCTIONS POUR L'ONGLET Composants
   ***********************************************/ 

 /* FILTRES DE RELATION ENTRE ONGLETS => VARIABLES GLOBALES POUR ETRE ACCESSIBLES DEPUIS INTERFACE_USER.JS */

 var Filtre_Dep_Composants_0;
function Retour_Composants()
{
 if (Filtre_Dep_Composants_0.my_Filtre.getEtat())
 {
 	Filtre_Dep_Composants_0.FctFermetureOnglet();
 }
}
function Gerer_Composants(IdFiltreOnglet)
{
/* On désactive les autres filtres */
if (Filtre_Dep_Composants_0.getId()!=IdFiltreOnglet)
{
	Filtre_Dep_Composants_0.OnClose(true,false);
}
/* On change d'onglet */
 var tabs = top.document.getElementById("Tous_les_onglets");
 top.document.getElementById("Tous_les_onglets").setAttribute("hidden","false");
 tabs.selectedItem = top.document.getElementById("Onglet_Composants");
}

function OuvrirOnglet_Composants()
{
 var tabs = top.document.getElementById("Tous_les_onglets");
 tabs.selectedItem = top.document.getElementById("Onglet_Composants");
}

function Insert_Composants_Composants0()
{
 TAB_COMPO_PPTES[130].Action_en_cours = INSERT;
/* On calcule la nouvelle clé */
 TAB_COMPO_PPTES[130].NewCle = getNewCle("composant");
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[130].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[132];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[133];
 Esclave_1.ActiverComposant(true);
 var Esclave_2=TAB_GLOBAL_COMPO[134];
 Esclave_2.ActiverComposant(true);
 var Esclave_3=TAB_GLOBAL_COMPO[135];
 Esclave_3.ActiverComposant(true);
top.document.getElementById("Validate_Composants_Date_Avant_Récolte_5").disabled=true;
top.document.getElementById("Annuler_Composants_Date_Avant_Récolte_5").disabled=true;
top.document.getElementById("Insert_Composants_Date_Avant_Récolte_5").disabled=false;
top.document.getElementById("Delete_Composants_Date_Avant_Récolte_5").disabled=false;
top.document.getElementById("Update_Composants_Date_Avant_Récolte_5").disabled=false;
 var Esclave_4=TAB_GLOBAL_COMPO[136];
 Esclave_4.ActiverComposant(true);
top.document.getElementById("Validate_Composants_Composants0").disabled=false;
top.document.getElementById("Annuler_Composants_Composants0").disabled=false;
top.document.getElementById("Insert_Composants_Composants0").disabled=true;
top.document.getElementById("Delete_Composants_Composants0").disabled=true;
top.document.getElementById("Update_Composants_Composants0").disabled=true;
 var Maitre=TAB_GLOBAL_COMPO[130];
 /* Pour une insertion on désectionne */
 var tree=Maitre.getComposantXul();
 if (tree.view!=null)
 {
 	tree.currentIndex=-1;
 	tree.view.selection.clearSelection();
 }
return TAB_COMPO_PPTES[130].NewCle;
}

function Delete_Composants_Composants0()
{
 if (TAB_GLOBAL_COMPO[130].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement à suprimer");
 	return;
 }
 /* On recupère le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[130];
 if (confirm("Voulez vous vraiment supprimer l'enregistrement en cours ?"))
 {
	TAB_COMPO_PPTES[130].Action_en_cours = DELETE;
 	User_Delete_Composants_Composants0(Maitre);
	Maitre.RefreshTotal();
	Filtre_Dep_Composants_0.OnClose(true);
 }
}

function Update_Composants_Composants0()
{
 if (TAB_GLOBAL_COMPO[130].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement à mettre à jour");
 	return -1;
 }
 TAB_COMPO_PPTES[130].Action_en_cours = UPDATE;
/* On calcule la nouvelle clé */
 TAB_COMPO_PPTES[130].NewCle = TAB_GLOBAL_COMPO[130].getCleVal();
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[130].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[132];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[133];
 Esclave_1.ActiverComposant(true);
 var Esclave_2=TAB_GLOBAL_COMPO[134];
 Esclave_2.ActiverComposant(true);
 var Esclave_3=TAB_GLOBAL_COMPO[135];
 Esclave_3.ActiverComposant(true);
top.document.getElementById("Validate_Composants_Date_Avant_Récolte_5").disabled=true;
top.document.getElementById("Annuler_Composants_Date_Avant_Récolte_5").disabled=true;
top.document.getElementById("Insert_Composants_Date_Avant_Récolte_5").disabled=false;
top.document.getElementById("Delete_Composants_Date_Avant_Récolte_5").disabled=false;
top.document.getElementById("Update_Composants_Date_Avant_Récolte_5").disabled=false;
 var Esclave_4=TAB_GLOBAL_COMPO[136];
 Esclave_4.ActiverComposant(true);
top.document.getElementById("Validate_Composants_Composants0").disabled=false;
top.document.getElementById("Annuler_Composants_Composants0").disabled=false;
top.document.getElementById("Insert_Composants_Composants0").disabled=true;
top.document.getElementById("Delete_Composants_Composants0").disabled=true;
top.document.getElementById("Update_Composants_Composants0").disabled=true;
return TAB_COMPO_PPTES[130].NewCle;
}

function Validate_Composants_Composants0(retour)
{
 /* Retour à l'onget appellant si appelle par gérer */
if (retour==null)
	retour=true;

 /* On recupère le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[130];
 /* On recupère la clé du nouvel enregistrement */
 var NewCle=null;
 switch(TAB_COMPO_PPTES[130].Action_en_cours){
	case INSERT :
	if ((NewCle = User_Insert_Composants_Composants0(Maitre))==-1)
		return -1;
	break;
	case UPDATE :
	if ((User_Update_Composants_Composants0(Maitre))==-1)
		return -1;
	break;
 }
 /* On construit la requete pour ajouter les nouvelles cles */
 if (NewCle!=null)
 {
 	var ReqNewCle=new clReqSQL();
 	var OldUnion=Maitre.my_ReqRefresh.getUnion();
	if (OldUnion==null)
	{
		ReqNewCle.Cloner(Maitre.my_ReqInterne);
	}
	else
	{
		ReqNewCle.Cloner(OldUnion);
	}
 	ReqNewCle.AddWhere(Maitre.getCle()+" = "+NewCle,"OR");
	Maitre.Union(ReqNewCle);
 }
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[130].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[132];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[133];
 Esclave_1.ActiverComposant(false);
 var Esclave_2=TAB_GLOBAL_COMPO[134];
 Esclave_2.ActiverComposant(false);
 var Esclave_3=TAB_GLOBAL_COMPO[135];
 Esclave_3.ActiverComposant(false);
Annuler_Composants_Date_Avant_Récolte_5();
top.document.getElementById("Validate_Composants_Date_Avant_Récolte_5").disabled=true;
top.document.getElementById("Annuler_Composants_Date_Avant_Récolte_5").disabled=true;
top.document.getElementById("Insert_Composants_Date_Avant_Récolte_5").disabled=true;
top.document.getElementById("Delete_Composants_Date_Avant_Récolte_5").disabled=true;
top.document.getElementById("Update_Composants_Date_Avant_Récolte_5").disabled=true;
 var Esclave_4=TAB_GLOBAL_COMPO[136];
 Esclave_4.ActiverComposant(false);
top.document.getElementById("Validate_Composants_Composants0").disabled=true;
top.document.getElementById("Annuler_Composants_Composants0").disabled=true;
top.document.getElementById("Insert_Composants_Composants0").disabled=false;
top.document.getElementById("Delete_Composants_Composants0").disabled=false;
top.document.getElementById("Update_Composants_Composants0").disabled=false;
 if (NewCle==null)
 	NewCle=TAB_COMPO_PPTES[130].NewCle;
 Maitre.ForceNextSelection(NewCle)
 Maitre.RefreshTotal();
 if(retour)
 {
 Filtre_Dep_Composants_0.OnClose(false);
 }
 TAB_COMPO_PPTES[130].Action_en_cours = null;
 return NewCle;
}

function Annuler_Composants_Composants0()
{
 TAB_COMPO_PPTES[130].Action_en_cours = null;
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[130].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[132];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[133];
 Esclave_1.ActiverComposant(false);
 var Esclave_2=TAB_GLOBAL_COMPO[134];
 Esclave_2.ActiverComposant(false);
 var Esclave_3=TAB_GLOBAL_COMPO[135];
 Esclave_3.ActiverComposant(false);
Annuler_Composants_Date_Avant_Récolte_5();
top.document.getElementById("Validate_Composants_Date_Avant_Récolte_5").disabled=true;
top.document.getElementById("Annuler_Composants_Date_Avant_Récolte_5").disabled=true;
top.document.getElementById("Insert_Composants_Date_Avant_Récolte_5").disabled=true;
top.document.getElementById("Delete_Composants_Date_Avant_Récolte_5").disabled=true;
top.document.getElementById("Update_Composants_Date_Avant_Récolte_5").disabled=true;
 var Esclave_4=TAB_GLOBAL_COMPO[136];
 Esclave_4.ActiverComposant(false);
top.document.getElementById("Validate_Composants_Composants0").disabled=true;
top.document.getElementById("Annuler_Composants_Composants0").disabled=true;
top.document.getElementById("Insert_Composants_Composants0").disabled=false;
top.document.getElementById("Delete_Composants_Composants0").disabled=false;
top.document.getElementById("Update_Composants_Composants0").disabled=false;
}

function Insert_Composants_Date_Avant_Récolte_5()
{
 if (TAB_COMPO_PPTES[130].Action_en_cours == INSERT)
 	{
 		if (confirm("Pour continuer, vous devez enregistrer votre saisie\n Voulez vous poursuivre ?"))
		{
			var CleValide=Validate_Composants_Composants0(false);
			if (CleValide==-1)
			{
				return -1;
			}
			CleValide=Update_Composants_Composants0();
			if (CleValide==-1)
			{
				alert("Erreur l'enregistrement n'a pas étais correctement inséré");
				return -1;
			}
			Insert_Composants_Date_Avant_Récolte_5();
		}
 		return;
 	}
 TAB_COMPO_PPTES[136].Action_en_cours = INSERT;
/* On calcule la nouvelle clé */
 TAB_COMPO_PPTES[136].NewCle = getNewCle("dateavantrecolte");
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[136].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[139];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[140];
 Esclave_1.ActiverComposant(true);
top.document.getElementById("Validate_Composants_Date_Avant_Récolte_5").disabled=false;
top.document.getElementById("Annuler_Composants_Date_Avant_Récolte_5").disabled=false;
top.document.getElementById("Insert_Composants_Date_Avant_Récolte_5").disabled=true;
top.document.getElementById("Delete_Composants_Date_Avant_Récolte_5").disabled=true;
top.document.getElementById("Update_Composants_Date_Avant_Récolte_5").disabled=true;
 var Maitre=TAB_GLOBAL_COMPO[136];
 /* Pour une insertion on désectionne */
 var tree=Maitre.getComposantXul();
 if (tree.view!=null)
 {
 	tree.currentIndex=-1;
 	tree.view.selection.clearSelection();
 }
return TAB_COMPO_PPTES[136].NewCle;
}

function Delete_Composants_Date_Avant_Récolte_5()
{
 if (TAB_GLOBAL_COMPO[136].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement à suprimer");
 	return;
 }
 /* On recupère le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[136];
 if (confirm("Voulez vous vraiment supprimer l'enregistrement en cours ?"))
 {
	TAB_COMPO_PPTES[136].Action_en_cours = DELETE;
 	User_Delete_Composants_Date_Avant_Récolte_5(Maitre);
	Maitre.RefreshTotal();
 }
}

function Update_Composants_Date_Avant_Récolte_5()
{
 if (TAB_GLOBAL_COMPO[136].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement à mettre à jour");
 	return -1;
 }
 TAB_COMPO_PPTES[136].Action_en_cours = UPDATE;
/* On calcule la nouvelle clé */
 TAB_COMPO_PPTES[136].NewCle = TAB_GLOBAL_COMPO[136].getCleVal();
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[136].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[139];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[140];
 Esclave_1.ActiverComposant(true);
top.document.getElementById("Validate_Composants_Date_Avant_Récolte_5").disabled=false;
top.document.getElementById("Annuler_Composants_Date_Avant_Récolte_5").disabled=false;
top.document.getElementById("Insert_Composants_Date_Avant_Récolte_5").disabled=true;
top.document.getElementById("Delete_Composants_Date_Avant_Récolte_5").disabled=true;
top.document.getElementById("Update_Composants_Date_Avant_Récolte_5").disabled=true;
return TAB_COMPO_PPTES[136].NewCle;
}

function Validate_Composants_Date_Avant_Récolte_5(retour)
{
 /* Retour à l'onget appellant si appelle par gérer */
if (retour==null)
	retour=true;

 /* On recupère le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[136];
 /* On recupère la clé du nouvel enregistrement */
 var NewCle=null;
 switch(TAB_COMPO_PPTES[136].Action_en_cours){
	case INSERT :
	if ((NewCle = User_Insert_Composants_Date_Avant_Récolte_5(Maitre))==-1)
		return -1;
	break;
	case UPDATE :
	if ((User_Update_Composants_Date_Avant_Récolte_5(Maitre))==-1)
		return -1;
	break;
 }
 /* On construit la requete pour ajouter les nouvelles cles */
 if (NewCle!=null)
 {
 	var ReqNewCle=new clReqSQL();
 	var OldUnion=Maitre.my_ReqRefresh.getUnion();
	if (OldUnion==null)
	{
		ReqNewCle.Cloner(Maitre.my_ReqInterne);
	}
	else
	{
		ReqNewCle.Cloner(OldUnion);
	}
 	ReqNewCle.AddWhere(Maitre.getCle()+" = "+NewCle,"OR");
	Maitre.Union(ReqNewCle);
 }
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[136].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[139];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[140];
 Esclave_1.ActiverComposant(false);
top.document.getElementById("Validate_Composants_Date_Avant_Récolte_5").disabled=true;
top.document.getElementById("Annuler_Composants_Date_Avant_Récolte_5").disabled=true;
top.document.getElementById("Insert_Composants_Date_Avant_Récolte_5").disabled=false;
top.document.getElementById("Delete_Composants_Date_Avant_Récolte_5").disabled=false;
top.document.getElementById("Update_Composants_Date_Avant_Récolte_5").disabled=false;
 if (NewCle==null)
 	NewCle=TAB_COMPO_PPTES[136].NewCle;
 Maitre.ForceNextSelection(NewCle)
 Maitre.RefreshTotal();
 if(retour)
 {
 }
 TAB_COMPO_PPTES[136].Action_en_cours = null;
 return NewCle;
}

function Annuler_Composants_Date_Avant_Récolte_5()
{
 TAB_COMPO_PPTES[136].Action_en_cours = null;
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[136].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[139];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[140];
 Esclave_1.ActiverComposant(false);
top.document.getElementById("Validate_Composants_Date_Avant_Récolte_5").disabled=true;
top.document.getElementById("Annuler_Composants_Date_Avant_Récolte_5").disabled=true;
top.document.getElementById("Insert_Composants_Date_Avant_Récolte_5").disabled=false;
top.document.getElementById("Delete_Composants_Date_Avant_Récolte_5").disabled=false;
top.document.getElementById("Update_Composants_Date_Avant_Récolte_5").disabled=false;
}






/* *********************************************** 
         FONCTIONS POUR L'ONGLET Espèce
   ***********************************************/ 

 /* FILTRES DE RELATION ENTRE ONGLETS => VARIABLES GLOBALES POUR ETRE ACCESSIBLES DEPUIS INTERFACE_USER.JS */

 var Filtre_Dep_Espèce_0;
 var Filtre_Dep_Espèce_1;
function Retour_Espèce()
{
 if (Filtre_Dep_Espèce_0.my_Filtre.getEtat())
 {
 	Filtre_Dep_Espèce_0.FctFermetureOnglet();
 }
 if (Filtre_Dep_Espèce_1.my_Filtre.getEtat())
 {
 	Filtre_Dep_Espèce_1.FctFermetureOnglet();
 }
}
function Gerer_Espèce(IdFiltreOnglet)
{
/* On désactive les autres filtres */
if (Filtre_Dep_Espèce_0.getId()!=IdFiltreOnglet)
{
	Filtre_Dep_Espèce_0.OnClose(true,false);
}
if (Filtre_Dep_Espèce_1.getId()!=IdFiltreOnglet)
{
	Filtre_Dep_Espèce_1.OnClose(true,false);
}
/* On change d'onglet */
 var tabs = top.document.getElementById("Tous_les_onglets");
 top.document.getElementById("Tous_les_onglets").setAttribute("hidden","false");
 tabs.selectedItem = top.document.getElementById("Onglet_Espèce");
}

function OuvrirOnglet_Espèce()
{
 var tabs = top.document.getElementById("Tous_les_onglets");
 tabs.selectedItem = top.document.getElementById("Onglet_Espèce");
}

function Insert_Espèce_Espèces0()
{
 TAB_COMPO_PPTES[141].Action_en_cours = INSERT;
/* On calcule la nouvelle clé */
 TAB_COMPO_PPTES[141].NewCle = getNewCle("espece");
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[141].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[143];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[144];
 Esclave_1.ActiverComposant(true);
 var Esclave_2=TAB_GLOBAL_COMPO[145];
 Esclave_2.ActiverComposant(true);
top.document.getElementById("Validate_Espèce_Espèces0").disabled=false;
top.document.getElementById("Annuler_Espèce_Espèces0").disabled=false;
top.document.getElementById("Insert_Espèce_Espèces0").disabled=true;
top.document.getElementById("Delete_Espèce_Espèces0").disabled=true;
top.document.getElementById("Update_Espèce_Espèces0").disabled=true;
 var Maitre=TAB_GLOBAL_COMPO[141];
 /* Pour une insertion on désectionne */
 var tree=Maitre.getComposantXul();
 if (tree.view!=null)
 {
 	tree.currentIndex=-1;
 	tree.view.selection.clearSelection();
 }
return TAB_COMPO_PPTES[141].NewCle;
}

function Delete_Espèce_Espèces0()
{
 if (TAB_GLOBAL_COMPO[141].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement à suprimer");
 	return;
 }
 /* On recupère le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[141];
 if (confirm("Voulez vous vraiment supprimer l'enregistrement en cours ?"))
 {
	TAB_COMPO_PPTES[141].Action_en_cours = DELETE;
 	User_Delete_Espèce_Espèces0(Maitre);
	Maitre.RefreshTotal();
	Filtre_Dep_Espèce_0.OnClose(true);
	Filtre_Dep_Espèce_1.OnClose(true);
 }
}

function Update_Espèce_Espèces0()
{
 if (TAB_GLOBAL_COMPO[141].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement à mettre à jour");
 	return -1;
 }
 TAB_COMPO_PPTES[141].Action_en_cours = UPDATE;
/* On calcule la nouvelle clé */
 TAB_COMPO_PPTES[141].NewCle = TAB_GLOBAL_COMPO[141].getCleVal();
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[141].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[143];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[144];
 Esclave_1.ActiverComposant(true);
 var Esclave_2=TAB_GLOBAL_COMPO[145];
 Esclave_2.ActiverComposant(true);
top.document.getElementById("Validate_Espèce_Espèces0").disabled=false;
top.document.getElementById("Annuler_Espèce_Espèces0").disabled=false;
top.document.getElementById("Insert_Espèce_Espèces0").disabled=true;
top.document.getElementById("Delete_Espèce_Espèces0").disabled=true;
top.document.getElementById("Update_Espèce_Espèces0").disabled=true;
return TAB_COMPO_PPTES[141].NewCle;
}

function Validate_Espèce_Espèces0(retour)
{
 /* Retour à l'onget appellant si appelle par gérer */
if (retour==null)
	retour=true;

 /* On recupère le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[141];
 /* On recupère la clé du nouvel enregistrement */
 var NewCle=null;
 switch(TAB_COMPO_PPTES[141].Action_en_cours){
	case INSERT :
	if ((NewCle = User_Insert_Espèce_Espèces0(Maitre))==-1)
		return -1;
	break;
	case UPDATE :
	if ((User_Update_Espèce_Espèces0(Maitre))==-1)
		return -1;
	break;
 }
 /* On construit la requete pour ajouter les nouvelles cles */
 if (NewCle!=null)
 {
 	var ReqNewCle=new clReqSQL();
 	var OldUnion=Maitre.my_ReqRefresh.getUnion();
	if (OldUnion==null)
	{
		ReqNewCle.Cloner(Maitre.my_ReqInterne);
	}
	else
	{
		ReqNewCle.Cloner(OldUnion);
	}
 	ReqNewCle.AddWhere(Maitre.getCle()+" = "+NewCle,"OR");
	Maitre.Union(ReqNewCle);
 }
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[141].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[143];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[144];
 Esclave_1.ActiverComposant(false);
 var Esclave_2=TAB_GLOBAL_COMPO[145];
 Esclave_2.ActiverComposant(false);
top.document.getElementById("Validate_Espèce_Espèces0").disabled=true;
top.document.getElementById("Annuler_Espèce_Espèces0").disabled=true;
top.document.getElementById("Insert_Espèce_Espèces0").disabled=false;
top.document.getElementById("Delete_Espèce_Espèces0").disabled=false;
top.document.getElementById("Update_Espèce_Espèces0").disabled=false;
 if (NewCle==null)
 	NewCle=TAB_COMPO_PPTES[141].NewCle;
 Maitre.ForceNextSelection(NewCle)
 Maitre.RefreshTotal();
 if(retour)
 {
 Filtre_Dep_Espèce_0.OnClose(false);
 Filtre_Dep_Espèce_1.OnClose(false);
 }
 TAB_COMPO_PPTES[141].Action_en_cours = null;
 return NewCle;
}

function Annuler_Espèce_Espèces0()
{
 TAB_COMPO_PPTES[141].Action_en_cours = null;
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[141].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[143];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[144];
 Esclave_1.ActiverComposant(false);
 var Esclave_2=TAB_GLOBAL_COMPO[145];
 Esclave_2.ActiverComposant(false);
top.document.getElementById("Validate_Espèce_Espèces0").disabled=true;
top.document.getElementById("Annuler_Espèce_Espèces0").disabled=true;
top.document.getElementById("Insert_Espèce_Espèces0").disabled=false;
top.document.getElementById("Delete_Espèce_Espèces0").disabled=false;
top.document.getElementById("Update_Espèce_Espèces0").disabled=false;
}






/* *********************************************** 
         FONCTIONS POUR L'ONGLET Classement
   ***********************************************/ 

 /* FILTRES DE RELATION ENTRE ONGLETS => VARIABLES GLOBALES POUR ETRE ACCESSIBLES DEPUIS INTERFACE_USER.JS */

 var Filtre_Dep_Classement_0;
function Retour_Classement()
{
 if (Filtre_Dep_Classement_0.my_Filtre.getEtat())
 {
 	Filtre_Dep_Classement_0.FctFermetureOnglet();
 }
}
function Gerer_Classement(IdFiltreOnglet)
{
/* On désactive les autres filtres */
if (Filtre_Dep_Classement_0.getId()!=IdFiltreOnglet)
{
	Filtre_Dep_Classement_0.OnClose(true,false);
}
/* On change d'onglet */
 var tabs = top.document.getElementById("Tous_les_onglets");
 top.document.getElementById("Tous_les_onglets").setAttribute("hidden","false");
 tabs.selectedItem = top.document.getElementById("Onglet_Classement");
}

function OuvrirOnglet_Classement()
{
 var tabs = top.document.getElementById("Tous_les_onglets");
 tabs.selectedItem = top.document.getElementById("Onglet_Classement");
}

function Insert_Classement_Classements0()
{
 TAB_COMPO_PPTES[146].Action_en_cours = INSERT;
/* On calcule la nouvelle clé */
 TAB_COMPO_PPTES[146].NewCle = getNewCle("classement");
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[146].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[148];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[149];
 Esclave_1.ActiverComposant(true);
 var Esclave_2=TAB_GLOBAL_COMPO[150];
 Esclave_2.ActiverComposant(true);
top.document.getElementById("Validate_Classement_Classements0").disabled=false;
top.document.getElementById("Annuler_Classement_Classements0").disabled=false;
top.document.getElementById("Insert_Classement_Classements0").disabled=true;
top.document.getElementById("Delete_Classement_Classements0").disabled=true;
top.document.getElementById("Update_Classement_Classements0").disabled=true;
 var Maitre=TAB_GLOBAL_COMPO[146];
 /* Pour une insertion on désectionne */
 var tree=Maitre.getComposantXul();
 if (tree.view!=null)
 {
 	tree.currentIndex=-1;
 	tree.view.selection.clearSelection();
 }
return TAB_COMPO_PPTES[146].NewCle;
}

function Delete_Classement_Classements0()
{
 if (TAB_GLOBAL_COMPO[146].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement à suprimer");
 	return;
 }
 /* On recupère le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[146];
 if (confirm("Voulez vous vraiment supprimer l'enregistrement en cours ?"))
 {
	TAB_COMPO_PPTES[146].Action_en_cours = DELETE;
 	User_Delete_Classement_Classements0(Maitre);
	Maitre.RefreshTotal();
	Filtre_Dep_Classement_0.OnClose(true);
 }
}

function Update_Classement_Classements0()
{
 if (TAB_GLOBAL_COMPO[146].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement à mettre à jour");
 	return -1;
 }
 TAB_COMPO_PPTES[146].Action_en_cours = UPDATE;
/* On calcule la nouvelle clé */
 TAB_COMPO_PPTES[146].NewCle = TAB_GLOBAL_COMPO[146].getCleVal();
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[146].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[148];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[149];
 Esclave_1.ActiverComposant(true);
 var Esclave_2=TAB_GLOBAL_COMPO[150];
 Esclave_2.ActiverComposant(true);
top.document.getElementById("Validate_Classement_Classements0").disabled=false;
top.document.getElementById("Annuler_Classement_Classements0").disabled=false;
top.document.getElementById("Insert_Classement_Classements0").disabled=true;
top.document.getElementById("Delete_Classement_Classements0").disabled=true;
top.document.getElementById("Update_Classement_Classements0").disabled=true;
return TAB_COMPO_PPTES[146].NewCle;
}

function Validate_Classement_Classements0(retour)
{
 /* Retour à l'onget appellant si appelle par gérer */
if (retour==null)
	retour=true;

 /* On recupère le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[146];
 /* On recupère la clé du nouvel enregistrement */
 var NewCle=null;
 switch(TAB_COMPO_PPTES[146].Action_en_cours){
	case INSERT :
	if ((NewCle = User_Insert_Classement_Classements0(Maitre))==-1)
		return -1;
	break;
	case UPDATE :
	if ((User_Update_Classement_Classements0(Maitre))==-1)
		return -1;
	break;
 }
 /* On construit la requete pour ajouter les nouvelles cles */
 if (NewCle!=null)
 {
 	var ReqNewCle=new clReqSQL();
 	var OldUnion=Maitre.my_ReqRefresh.getUnion();
	if (OldUnion==null)
	{
		ReqNewCle.Cloner(Maitre.my_ReqInterne);
	}
	else
	{
		ReqNewCle.Cloner(OldUnion);
	}
 	ReqNewCle.AddWhere(Maitre.getCle()+" = "+NewCle,"OR");
	Maitre.Union(ReqNewCle);
 }
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[146].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[148];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[149];
 Esclave_1.ActiverComposant(false);
 var Esclave_2=TAB_GLOBAL_COMPO[150];
 Esclave_2.ActiverComposant(false);
top.document.getElementById("Validate_Classement_Classements0").disabled=true;
top.document.getElementById("Annuler_Classement_Classements0").disabled=true;
top.document.getElementById("Insert_Classement_Classements0").disabled=false;
top.document.getElementById("Delete_Classement_Classements0").disabled=false;
top.document.getElementById("Update_Classement_Classements0").disabled=false;
 if (NewCle==null)
 	NewCle=TAB_COMPO_PPTES[146].NewCle;
 Maitre.ForceNextSelection(NewCle)
 Maitre.RefreshTotal();
 if(retour)
 {
 Filtre_Dep_Classement_0.OnClose(false);
 }
 TAB_COMPO_PPTES[146].Action_en_cours = null;
 return NewCle;
}

function Annuler_Classement_Classements0()
{
 TAB_COMPO_PPTES[146].Action_en_cours = null;
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[146].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[148];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[149];
 Esclave_1.ActiverComposant(false);
 var Esclave_2=TAB_GLOBAL_COMPO[150];
 Esclave_2.ActiverComposant(false);
top.document.getElementById("Validate_Classement_Classements0").disabled=true;
top.document.getElementById("Annuler_Classement_Classements0").disabled=true;
top.document.getElementById("Insert_Classement_Classements0").disabled=false;
top.document.getElementById("Delete_Classement_Classements0").disabled=false;
top.document.getElementById("Update_Classement_Classements0").disabled=false;
}






/* *********************************************** 
         FONCTIONS POUR L'ONGLET Materiel
   ***********************************************/ 

 /* FILTRES DE RELATION ENTRE ONGLETS => VARIABLES GLOBALES POUR ETRE ACCESSIBLES DEPUIS INTERFACE_USER.JS */

function OuvrirOnglet_Materiel()
{
 var tabs = top.document.getElementById("Tous_les_onglets");
 tabs.selectedItem = top.document.getElementById("Onglet_Materiel");
}

function Insert_Materiel_Materiels0()
{
 TAB_COMPO_PPTES[151].Action_en_cours = INSERT;
/* On calcule la nouvelle clé */
 TAB_COMPO_PPTES[151].NewCle = getNewCle("materiel");
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[151].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[153];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[154];
 Esclave_1.ActiverComposant(true);
 var Esclave_2=TAB_GLOBAL_COMPO[155];
 Esclave_2.ActiverComposant(true);
 var Esclave_3=TAB_GLOBAL_COMPO[156];
 Esclave_3.ActiverComposant(true);
 var Esclave_4=TAB_GLOBAL_COMPO[157];
 Esclave_4.ActiverComposant(true);
 var Esclave_5=TAB_GLOBAL_COMPO[158];
 Esclave_5.ActiverComposant(true);
 var Esclave_6=TAB_GLOBAL_COMPO[159];
 Esclave_6.ActiverComposant(true);
top.document.getElementById("Validate_Materiel_Materiels0").disabled=false;
top.document.getElementById("Annuler_Materiel_Materiels0").disabled=false;
top.document.getElementById("Insert_Materiel_Materiels0").disabled=true;
top.document.getElementById("Delete_Materiel_Materiels0").disabled=true;
top.document.getElementById("Update_Materiel_Materiels0").disabled=true;
 var Maitre=TAB_GLOBAL_COMPO[151];
 /* Pour une insertion on désectionne */
 var tree=Maitre.getComposantXul();
 if (tree.view!=null)
 {
 	tree.currentIndex=-1;
 	tree.view.selection.clearSelection();
 }
return TAB_COMPO_PPTES[151].NewCle;
}

function Delete_Materiel_Materiels0()
{
 if (TAB_GLOBAL_COMPO[151].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement à suprimer");
 	return;
 }
 /* On recupère le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[151];
 if (confirm("Voulez vous vraiment supprimer l'enregistrement en cours ?"))
 {
	TAB_COMPO_PPTES[151].Action_en_cours = DELETE;
 	User_Delete_Materiel_Materiels0(Maitre);
	Maitre.RefreshTotal();
 }
}

function Update_Materiel_Materiels0()
{
 if (TAB_GLOBAL_COMPO[151].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement à mettre à jour");
 	return -1;
 }
 TAB_COMPO_PPTES[151].Action_en_cours = UPDATE;
/* On calcule la nouvelle clé */
 TAB_COMPO_PPTES[151].NewCle = TAB_GLOBAL_COMPO[151].getCleVal();
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[151].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[153];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[154];
 Esclave_1.ActiverComposant(true);
 var Esclave_2=TAB_GLOBAL_COMPO[155];
 Esclave_2.ActiverComposant(true);
 var Esclave_3=TAB_GLOBAL_COMPO[156];
 Esclave_3.ActiverComposant(true);
 var Esclave_4=TAB_GLOBAL_COMPO[157];
 Esclave_4.ActiverComposant(true);
 var Esclave_5=TAB_GLOBAL_COMPO[158];
 Esclave_5.ActiverComposant(true);
 var Esclave_6=TAB_GLOBAL_COMPO[159];
 Esclave_6.ActiverComposant(true);
top.document.getElementById("Validate_Materiel_Materiels0").disabled=false;
top.document.getElementById("Annuler_Materiel_Materiels0").disabled=false;
top.document.getElementById("Insert_Materiel_Materiels0").disabled=true;
top.document.getElementById("Delete_Materiel_Materiels0").disabled=true;
top.document.getElementById("Update_Materiel_Materiels0").disabled=true;
return TAB_COMPO_PPTES[151].NewCle;
}

function Validate_Materiel_Materiels0(retour)
{
 /* Retour à l'onget appellant si appelle par gérer */
if (retour==null)
	retour=true;

 /* On recupère le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[151];
 /* On recupère la clé du nouvel enregistrement */
 var NewCle=null;
 switch(TAB_COMPO_PPTES[151].Action_en_cours){
	case INSERT :
	if ((NewCle = User_Insert_Materiel_Materiels0(Maitre))==-1)
		return -1;
	break;
	case UPDATE :
	if ((User_Update_Materiel_Materiels0(Maitre))==-1)
		return -1;
	break;
 }
 /* On construit la requete pour ajouter les nouvelles cles */
 if (NewCle!=null)
 {
 	var ReqNewCle=new clReqSQL();
 	var OldUnion=Maitre.my_ReqRefresh.getUnion();
	if (OldUnion==null)
	{
		ReqNewCle.Cloner(Maitre.my_ReqInterne);
	}
	else
	{
		ReqNewCle.Cloner(OldUnion);
	}
 	ReqNewCle.AddWhere(Maitre.getCle()+" = "+NewCle,"OR");
	Maitre.Union(ReqNewCle);
 }
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[151].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[153];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[154];
 Esclave_1.ActiverComposant(false);
 var Esclave_2=TAB_GLOBAL_COMPO[155];
 Esclave_2.ActiverComposant(false);
 var Esclave_3=TAB_GLOBAL_COMPO[156];
 Esclave_3.ActiverComposant(false);
 var Esclave_4=TAB_GLOBAL_COMPO[157];
 Esclave_4.ActiverComposant(false);
 var Esclave_5=TAB_GLOBAL_COMPO[158];
 Esclave_5.ActiverComposant(false);
 var Esclave_6=TAB_GLOBAL_COMPO[159];
 Esclave_6.ActiverComposant(false);
top.document.getElementById("Validate_Materiel_Materiels0").disabled=true;
top.document.getElementById("Annuler_Materiel_Materiels0").disabled=true;
top.document.getElementById("Insert_Materiel_Materiels0").disabled=false;
top.document.getElementById("Delete_Materiel_Materiels0").disabled=false;
top.document.getElementById("Update_Materiel_Materiels0").disabled=false;
 if (NewCle==null)
 	NewCle=TAB_COMPO_PPTES[151].NewCle;
 Maitre.ForceNextSelection(NewCle)
 Maitre.RefreshTotal();
 if(retour)
 {
 }
 TAB_COMPO_PPTES[151].Action_en_cours = null;
 return NewCle;
}

function Annuler_Materiel_Materiels0()
{
 TAB_COMPO_PPTES[151].Action_en_cours = null;
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[151].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[153];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[154];
 Esclave_1.ActiverComposant(false);
 var Esclave_2=TAB_GLOBAL_COMPO[155];
 Esclave_2.ActiverComposant(false);
 var Esclave_3=TAB_GLOBAL_COMPO[156];
 Esclave_3.ActiverComposant(false);
 var Esclave_4=TAB_GLOBAL_COMPO[157];
 Esclave_4.ActiverComposant(false);
 var Esclave_5=TAB_GLOBAL_COMPO[158];
 Esclave_5.ActiverComposant(false);
 var Esclave_6=TAB_GLOBAL_COMPO[159];
 Esclave_6.ActiverComposant(false);
top.document.getElementById("Validate_Materiel_Materiels0").disabled=true;
top.document.getElementById("Annuler_Materiel_Materiels0").disabled=true;
top.document.getElementById("Insert_Materiel_Materiels0").disabled=false;
top.document.getElementById("Delete_Materiel_Materiels0").disabled=false;
top.document.getElementById("Update_Materiel_Materiels0").disabled=false;
}






/* *********************************************** 
         FONCTIONS POUR L'ONGLET Modele
   ***********************************************/ 

 /* FILTRES DE RELATION ENTRE ONGLETS => VARIABLES GLOBALES POUR ETRE ACCESSIBLES DEPUIS INTERFACE_USER.JS */

 var Filtre_Dep_Modele_0;
function Retour_Modele()
{
 if (Filtre_Dep_Modele_0.my_Filtre.getEtat())
 {
 	Filtre_Dep_Modele_0.FctFermetureOnglet();
 }
}
function Gerer_Modele(IdFiltreOnglet)
{
/* On désactive les autres filtres */
if (Filtre_Dep_Modele_0.getId()!=IdFiltreOnglet)
{
	Filtre_Dep_Modele_0.OnClose(true,false);
}
/* On change d'onglet */
 var tabs = top.document.getElementById("Tous_les_onglets");
 top.document.getElementById("Tous_les_onglets").setAttribute("hidden","false");
 tabs.selectedItem = top.document.getElementById("Onglet_Modele");
}

function OuvrirOnglet_Modele()
{
 var tabs = top.document.getElementById("Tous_les_onglets");
 tabs.selectedItem = top.document.getElementById("Onglet_Modele");
}

function Insert_Modele_Modeles0()
{
 TAB_COMPO_PPTES[160].Action_en_cours = INSERT;
/* On calcule la nouvelle clé */
 TAB_COMPO_PPTES[160].NewCle = getNewCle("modele");
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[160].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[162];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[163];
 Esclave_1.ActiverComposant(true);
 var Esclave_2=TAB_GLOBAL_COMPO[164];
 Esclave_2.ActiverComposant(true);
 var Esclave_3=TAB_GLOBAL_COMPO[165];
 Esclave_3.ActiverComposant(true);
top.document.getElementById("Validate_Modele_Modeles0").disabled=false;
top.document.getElementById("Annuler_Modele_Modeles0").disabled=false;
top.document.getElementById("Insert_Modele_Modeles0").disabled=true;
top.document.getElementById("Delete_Modele_Modeles0").disabled=true;
top.document.getElementById("Update_Modele_Modeles0").disabled=true;
 var Maitre=TAB_GLOBAL_COMPO[160];
 /* Pour une insertion on désectionne */
 var tree=Maitre.getComposantXul();
 if (tree.view!=null)
 {
 	tree.currentIndex=-1;
 	tree.view.selection.clearSelection();
 }
return TAB_COMPO_PPTES[160].NewCle;
}

function Delete_Modele_Modeles0()
{
 if (TAB_GLOBAL_COMPO[160].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement à suprimer");
 	return;
 }
 /* On recupère le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[160];
 if (confirm("Voulez vous vraiment supprimer l'enregistrement en cours ?"))
 {
	TAB_COMPO_PPTES[160].Action_en_cours = DELETE;
 	User_Delete_Modele_Modeles0(Maitre);
	Maitre.RefreshTotal();
	Filtre_Dep_Modele_0.OnClose(true);
 }
}

function Update_Modele_Modeles0()
{
 if (TAB_GLOBAL_COMPO[160].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement à mettre à jour");
 	return -1;
 }
 TAB_COMPO_PPTES[160].Action_en_cours = UPDATE;
/* On calcule la nouvelle clé */
 TAB_COMPO_PPTES[160].NewCle = TAB_GLOBAL_COMPO[160].getCleVal();
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[160].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[162];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[163];
 Esclave_1.ActiverComposant(true);
 var Esclave_2=TAB_GLOBAL_COMPO[164];
 Esclave_2.ActiverComposant(true);
 var Esclave_3=TAB_GLOBAL_COMPO[165];
 Esclave_3.ActiverComposant(true);
top.document.getElementById("Validate_Modele_Modeles0").disabled=false;
top.document.getElementById("Annuler_Modele_Modeles0").disabled=false;
top.document.getElementById("Insert_Modele_Modeles0").disabled=true;
top.document.getElementById("Delete_Modele_Modeles0").disabled=true;
top.document.getElementById("Update_Modele_Modeles0").disabled=true;
return TAB_COMPO_PPTES[160].NewCle;
}

function Validate_Modele_Modeles0(retour)
{
 /* Retour à l'onget appellant si appelle par gérer */
if (retour==null)
	retour=true;

 /* On recupère le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[160];
 /* On recupère la clé du nouvel enregistrement */
 var NewCle=null;
 switch(TAB_COMPO_PPTES[160].Action_en_cours){
	case INSERT :
	if ((NewCle = User_Insert_Modele_Modeles0(Maitre))==-1)
		return -1;
	break;
	case UPDATE :
	if ((User_Update_Modele_Modeles0(Maitre))==-1)
		return -1;
	break;
 }
 /* On construit la requete pour ajouter les nouvelles cles */
 if (NewCle!=null)
 {
 	var ReqNewCle=new clReqSQL();
 	var OldUnion=Maitre.my_ReqRefresh.getUnion();
	if (OldUnion==null)
	{
		ReqNewCle.Cloner(Maitre.my_ReqInterne);
	}
	else
	{
		ReqNewCle.Cloner(OldUnion);
	}
 	ReqNewCle.AddWhere(Maitre.getCle()+" = "+NewCle,"OR");
	Maitre.Union(ReqNewCle);
 }
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[160].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[162];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[163];
 Esclave_1.ActiverComposant(false);
 var Esclave_2=TAB_GLOBAL_COMPO[164];
 Esclave_2.ActiverComposant(false);
 var Esclave_3=TAB_GLOBAL_COMPO[165];
 Esclave_3.ActiverComposant(false);
top.document.getElementById("Validate_Modele_Modeles0").disabled=true;
top.document.getElementById("Annuler_Modele_Modeles0").disabled=true;
top.document.getElementById("Insert_Modele_Modeles0").disabled=false;
top.document.getElementById("Delete_Modele_Modeles0").disabled=false;
top.document.getElementById("Update_Modele_Modeles0").disabled=false;
 if (NewCle==null)
 	NewCle=TAB_COMPO_PPTES[160].NewCle;
 Maitre.ForceNextSelection(NewCle)
 Maitre.RefreshTotal();
 if(retour)
 {
 Filtre_Dep_Modele_0.OnClose(false);
 }
 TAB_COMPO_PPTES[160].Action_en_cours = null;
 return NewCle;
}

function Annuler_Modele_Modeles0()
{
 TAB_COMPO_PPTES[160].Action_en_cours = null;
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[160].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[162];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[163];
 Esclave_1.ActiverComposant(false);
 var Esclave_2=TAB_GLOBAL_COMPO[164];
 Esclave_2.ActiverComposant(false);
 var Esclave_3=TAB_GLOBAL_COMPO[165];
 Esclave_3.ActiverComposant(false);
top.document.getElementById("Validate_Modele_Modeles0").disabled=true;
top.document.getElementById("Annuler_Modele_Modeles0").disabled=true;
top.document.getElementById("Insert_Modele_Modeles0").disabled=false;
top.document.getElementById("Delete_Modele_Modeles0").disabled=false;
top.document.getElementById("Update_Modele_Modeles0").disabled=false;
}






/* *********************************************** 
         FONCTIONS POUR L'ONGLET Firmes
   ***********************************************/ 

 /* FILTRES DE RELATION ENTRE ONGLETS => VARIABLES GLOBALES POUR ETRE ACCESSIBLES DEPUIS INTERFACE_USER.JS */

 var Filtre_Dep_Firmes_0;
 var Filtre_Dep_Firmes_1;
function Retour_Firmes()
{
 if (Filtre_Dep_Firmes_0.my_Filtre.getEtat())
 {
 	Filtre_Dep_Firmes_0.FctFermetureOnglet();
 }
 if (Filtre_Dep_Firmes_1.my_Filtre.getEtat())
 {
 	Filtre_Dep_Firmes_1.FctFermetureOnglet();
 }
}
function Gerer_Firmes(IdFiltreOnglet)
{
/* On désactive les autres filtres */
if (Filtre_Dep_Firmes_0.getId()!=IdFiltreOnglet)
{
	Filtre_Dep_Firmes_0.OnClose(true,false);
}
if (Filtre_Dep_Firmes_1.getId()!=IdFiltreOnglet)
{
	Filtre_Dep_Firmes_1.OnClose(true,false);
}
/* On change d'onglet */
 var tabs = top.document.getElementById("Tous_les_onglets");
 top.document.getElementById("Tous_les_onglets").setAttribute("hidden","false");
 tabs.selectedItem = top.document.getElementById("Onglet_Firmes");
}

function OuvrirOnglet_Firmes()
{
 var tabs = top.document.getElementById("Tous_les_onglets");
 tabs.selectedItem = top.document.getElementById("Onglet_Firmes");
}

function Insert_Firmes_Firmes0()
{
 TAB_COMPO_PPTES[166].Action_en_cours = INSERT;
/* On calcule la nouvelle clé */
 TAB_COMPO_PPTES[166].NewCle = getNewCle("firme");
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[166].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[168];
 Esclave_0.ActiverComposant(true);
top.document.getElementById("Validate_Firmes_Firmes0").disabled=false;
top.document.getElementById("Annuler_Firmes_Firmes0").disabled=false;
top.document.getElementById("Insert_Firmes_Firmes0").disabled=true;
top.document.getElementById("Delete_Firmes_Firmes0").disabled=true;
top.document.getElementById("Update_Firmes_Firmes0").disabled=true;
 var Maitre=TAB_GLOBAL_COMPO[166];
 /* Pour une insertion on désectionne */
 var tree=Maitre.getComposantXul();
 if (tree.view!=null)
 {
 	tree.currentIndex=-1;
 	tree.view.selection.clearSelection();
 }
return TAB_COMPO_PPTES[166].NewCle;
}

function Delete_Firmes_Firmes0()
{
 if (TAB_GLOBAL_COMPO[166].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement à suprimer");
 	return;
 }
 /* On recupère le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[166];
 if (confirm("Voulez vous vraiment supprimer l'enregistrement en cours ?"))
 {
	TAB_COMPO_PPTES[166].Action_en_cours = DELETE;
 	User_Delete_Firmes_Firmes0(Maitre);
	Maitre.RefreshTotal();
	Filtre_Dep_Firmes_0.OnClose(true);
	Filtre_Dep_Firmes_1.OnClose(true);
 }
}

function Update_Firmes_Firmes0()
{
 if (TAB_GLOBAL_COMPO[166].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement à mettre à jour");
 	return -1;
 }
 TAB_COMPO_PPTES[166].Action_en_cours = UPDATE;
/* On calcule la nouvelle clé */
 TAB_COMPO_PPTES[166].NewCle = TAB_GLOBAL_COMPO[166].getCleVal();
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[166].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[168];
 Esclave_0.ActiverComposant(true);
top.document.getElementById("Validate_Firmes_Firmes0").disabled=false;
top.document.getElementById("Annuler_Firmes_Firmes0").disabled=false;
top.document.getElementById("Insert_Firmes_Firmes0").disabled=true;
top.document.getElementById("Delete_Firmes_Firmes0").disabled=true;
top.document.getElementById("Update_Firmes_Firmes0").disabled=true;
return TAB_COMPO_PPTES[166].NewCle;
}

function Validate_Firmes_Firmes0(retour)
{
 /* Retour à l'onget appellant si appelle par gérer */
if (retour==null)
	retour=true;

 /* On recupère le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[166];
 /* On recupère la clé du nouvel enregistrement */
 var NewCle=null;
 switch(TAB_COMPO_PPTES[166].Action_en_cours){
	case INSERT :
	if ((NewCle = User_Insert_Firmes_Firmes0(Maitre))==-1)
		return -1;
	break;
	case UPDATE :
	if ((User_Update_Firmes_Firmes0(Maitre))==-1)
		return -1;
	break;
 }
 /* On construit la requete pour ajouter les nouvelles cles */
 if (NewCle!=null)
 {
 	var ReqNewCle=new clReqSQL();
 	var OldUnion=Maitre.my_ReqRefresh.getUnion();
	if (OldUnion==null)
	{
		ReqNewCle.Cloner(Maitre.my_ReqInterne);
	}
	else
	{
		ReqNewCle.Cloner(OldUnion);
	}
 	ReqNewCle.AddWhere(Maitre.getCle()+" = "+NewCle,"OR");
	Maitre.Union(ReqNewCle);
 }
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[166].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[168];
 Esclave_0.ActiverComposant(false);
top.document.getElementById("Validate_Firmes_Firmes0").disabled=true;
top.document.getElementById("Annuler_Firmes_Firmes0").disabled=true;
top.document.getElementById("Insert_Firmes_Firmes0").disabled=false;
top.document.getElementById("Delete_Firmes_Firmes0").disabled=false;
top.document.getElementById("Update_Firmes_Firmes0").disabled=false;
 if (NewCle==null)
 	NewCle=TAB_COMPO_PPTES[166].NewCle;
 Maitre.ForceNextSelection(NewCle)
 Maitre.RefreshTotal();
 if(retour)
 {
 Filtre_Dep_Firmes_0.OnClose(false);
 Filtre_Dep_Firmes_1.OnClose(false);
 }
 TAB_COMPO_PPTES[166].Action_en_cours = null;
 return NewCle;
}

function Annuler_Firmes_Firmes0()
{
 TAB_COMPO_PPTES[166].Action_en_cours = null;
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[166].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[168];
 Esclave_0.ActiverComposant(false);
top.document.getElementById("Validate_Firmes_Firmes0").disabled=true;
top.document.getElementById("Annuler_Firmes_Firmes0").disabled=true;
top.document.getElementById("Insert_Firmes_Firmes0").disabled=false;
top.document.getElementById("Delete_Firmes_Firmes0").disabled=false;
top.document.getElementById("Update_Firmes_Firmes0").disabled=false;
}






/* *********************************************** 
         FONCTIONS POUR L'ONGLET Personnes
   ***********************************************/ 

 /* FILTRES DE RELATION ENTRE ONGLETS => VARIABLES GLOBALES POUR ETRE ACCESSIBLES DEPUIS INTERFACE_USER.JS */

 var Filtre_Dep_Personnes_0;
 var Filtre_Dep_Personnes_1;
function Retour_Personnes()
{
 if (Filtre_Dep_Personnes_0.my_Filtre.getEtat())
 {
 	Filtre_Dep_Personnes_0.FctFermetureOnglet();
 }
 if (Filtre_Dep_Personnes_1.my_Filtre.getEtat())
 {
 	Filtre_Dep_Personnes_1.FctFermetureOnglet();
 }
}
function Gerer_Personnes(IdFiltreOnglet)
{
/* On désactive les autres filtres */
if (Filtre_Dep_Personnes_0.getId()!=IdFiltreOnglet)
{
	Filtre_Dep_Personnes_0.OnClose(true,false);
}
if (Filtre_Dep_Personnes_1.getId()!=IdFiltreOnglet)
{
	Filtre_Dep_Personnes_1.OnClose(true,false);
}
/* On change d'onglet */
 var tabs = top.document.getElementById("Tous_les_onglets");
 top.document.getElementById("Tous_les_onglets").setAttribute("hidden","false");
 tabs.selectedItem = top.document.getElementById("Onglet_Personnes");
}

function OuvrirOnglet_Personnes()
{
 var tabs = top.document.getElementById("Tous_les_onglets");
 tabs.selectedItem = top.document.getElementById("Onglet_Personnes");
}

function Insert_Personnes_Personnes_existants0()
{
 TAB_COMPO_PPTES[169].Action_en_cours = INSERT;
/* On calcule la nouvelle clé */
 TAB_COMPO_PPTES[169].NewCle = getNewCle("personne");
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[169].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[172];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[173];
 Esclave_1.ActiverComposant(true);
 var Esclave_2=TAB_GLOBAL_COMPO[174];
 Esclave_2.ActiverComposant(true);
 var Esclave_3=TAB_GLOBAL_COMPO[175];
 Esclave_3.ActiverComposant(true);
top.document.getElementById("Validate_Personnes_Adresse_5").disabled=true;
top.document.getElementById("Annuler_Personnes_Adresse_5").disabled=true;
top.document.getElementById("Insert_Personnes_Adresse_5").disabled=false;
top.document.getElementById("Delete_Personnes_Adresse_5").disabled=false;
top.document.getElementById("Update_Personnes_Adresse_5").disabled=false;
 var Esclave_4=TAB_GLOBAL_COMPO[176];
 Esclave_4.ActiverComposant(true);
top.document.getElementById("Validate_Personnes_Contact_11").disabled=true;
top.document.getElementById("Annuler_Personnes_Contact_11").disabled=true;
top.document.getElementById("Insert_Personnes_Contact_11").disabled=false;
top.document.getElementById("Delete_Personnes_Contact_11").disabled=false;
top.document.getElementById("Update_Personnes_Contact_11").disabled=false;
 var Esclave_5=TAB_GLOBAL_COMPO[187];
 Esclave_5.ActiverComposant(true);
top.document.getElementById("Validate_Personnes_Personnes_existants0").disabled=false;
top.document.getElementById("Annuler_Personnes_Personnes_existants0").disabled=false;
top.document.getElementById("Insert_Personnes_Personnes_existants0").disabled=true;
top.document.getElementById("Delete_Personnes_Personnes_existants0").disabled=true;
top.document.getElementById("Update_Personnes_Personnes_existants0").disabled=true;
 var Maitre=TAB_GLOBAL_COMPO[169];
 /* Pour une insertion on désectionne */
 var tree=Maitre.getComposantXul();
 if (tree.view!=null)
 {
 	tree.currentIndex=-1;
 	tree.view.selection.clearSelection();
 }
return TAB_COMPO_PPTES[169].NewCle;
}

function Delete_Personnes_Personnes_existants0()
{
 if (TAB_GLOBAL_COMPO[169].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement à suprimer");
 	return;
 }
 /* On recupère le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[169];
 if (confirm("Voulez vous vraiment supprimer l'enregistrement en cours ?"))
 {
	TAB_COMPO_PPTES[169].Action_en_cours = DELETE;
 	User_Delete_Personnes_Personnes_existants0(Maitre);
	Maitre.RefreshTotal();
	Filtre_Dep_Personnes_0.OnClose(true);
	Filtre_Dep_Personnes_1.OnClose(true);
 }
}

function Update_Personnes_Personnes_existants0()
{
 if (TAB_GLOBAL_COMPO[169].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement à mettre à jour");
 	return -1;
 }
 TAB_COMPO_PPTES[169].Action_en_cours = UPDATE;
/* On calcule la nouvelle clé */
 TAB_COMPO_PPTES[169].NewCle = TAB_GLOBAL_COMPO[169].getCleVal();
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[169].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[172];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[173];
 Esclave_1.ActiverComposant(true);
 var Esclave_2=TAB_GLOBAL_COMPO[174];
 Esclave_2.ActiverComposant(true);
 var Esclave_3=TAB_GLOBAL_COMPO[175];
 Esclave_3.ActiverComposant(true);
top.document.getElementById("Validate_Personnes_Adresse_5").disabled=true;
top.document.getElementById("Annuler_Personnes_Adresse_5").disabled=true;
top.document.getElementById("Insert_Personnes_Adresse_5").disabled=false;
top.document.getElementById("Delete_Personnes_Adresse_5").disabled=false;
top.document.getElementById("Update_Personnes_Adresse_5").disabled=false;
 var Esclave_4=TAB_GLOBAL_COMPO[176];
 Esclave_4.ActiverComposant(true);
top.document.getElementById("Validate_Personnes_Contact_11").disabled=true;
top.document.getElementById("Annuler_Personnes_Contact_11").disabled=true;
top.document.getElementById("Insert_Personnes_Contact_11").disabled=false;
top.document.getElementById("Delete_Personnes_Contact_11").disabled=false;
top.document.getElementById("Update_Personnes_Contact_11").disabled=false;
 var Esclave_5=TAB_GLOBAL_COMPO[187];
 Esclave_5.ActiverComposant(true);
top.document.getElementById("Validate_Personnes_Personnes_existants0").disabled=false;
top.document.getElementById("Annuler_Personnes_Personnes_existants0").disabled=false;
top.document.getElementById("Insert_Personnes_Personnes_existants0").disabled=true;
top.document.getElementById("Delete_Personnes_Personnes_existants0").disabled=true;
top.document.getElementById("Update_Personnes_Personnes_existants0").disabled=true;
return TAB_COMPO_PPTES[169].NewCle;
}

function Validate_Personnes_Personnes_existants0(retour)
{
 /* Retour à l'onget appellant si appelle par gérer */
if (retour==null)
	retour=true;

 /* On recupère le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[169];
 /* On recupère la clé du nouvel enregistrement */
 var NewCle=null;
 switch(TAB_COMPO_PPTES[169].Action_en_cours){
	case INSERT :
	if ((NewCle = User_Insert_Personnes_Personnes_existants0(Maitre))==-1)
		return -1;
	break;
	case UPDATE :
	if ((User_Update_Personnes_Personnes_existants0(Maitre))==-1)
		return -1;
	break;
 }
 /* On construit la requete pour ajouter les nouvelles cles */
 if (NewCle!=null)
 {
 	var ReqNewCle=new clReqSQL();
 	var OldUnion=Maitre.my_ReqRefresh.getUnion();
	if (OldUnion==null)
	{
		ReqNewCle.Cloner(Maitre.my_ReqInterne);
	}
	else
	{
		ReqNewCle.Cloner(OldUnion);
	}
 	ReqNewCle.AddWhere(Maitre.getCle()+" = "+NewCle,"OR");
	Maitre.Union(ReqNewCle);
 }
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[169].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[172];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[173];
 Esclave_1.ActiverComposant(false);
 var Esclave_2=TAB_GLOBAL_COMPO[174];
 Esclave_2.ActiverComposant(false);
 var Esclave_3=TAB_GLOBAL_COMPO[175];
 Esclave_3.ActiverComposant(false);
Annuler_Personnes_Adresse_5();
top.document.getElementById("Validate_Personnes_Adresse_5").disabled=true;
top.document.getElementById("Annuler_Personnes_Adresse_5").disabled=true;
top.document.getElementById("Insert_Personnes_Adresse_5").disabled=true;
top.document.getElementById("Delete_Personnes_Adresse_5").disabled=true;
top.document.getElementById("Update_Personnes_Adresse_5").disabled=true;
 var Esclave_4=TAB_GLOBAL_COMPO[176];
 Esclave_4.ActiverComposant(false);
Annuler_Personnes_Contact_11();
top.document.getElementById("Validate_Personnes_Contact_11").disabled=true;
top.document.getElementById("Annuler_Personnes_Contact_11").disabled=true;
top.document.getElementById("Insert_Personnes_Contact_11").disabled=true;
top.document.getElementById("Delete_Personnes_Contact_11").disabled=true;
top.document.getElementById("Update_Personnes_Contact_11").disabled=true;
 var Esclave_5=TAB_GLOBAL_COMPO[187];
 Esclave_5.ActiverComposant(false);
top.document.getElementById("Validate_Personnes_Personnes_existants0").disabled=true;
top.document.getElementById("Annuler_Personnes_Personnes_existants0").disabled=true;
top.document.getElementById("Insert_Personnes_Personnes_existants0").disabled=false;
top.document.getElementById("Delete_Personnes_Personnes_existants0").disabled=false;
top.document.getElementById("Update_Personnes_Personnes_existants0").disabled=false;
 if (NewCle==null)
 	NewCle=TAB_COMPO_PPTES[169].NewCle;
 Maitre.ForceNextSelection(NewCle)
 Maitre.RefreshTotal();
 if(retour)
 {
 Filtre_Dep_Personnes_0.OnClose(false);
 Filtre_Dep_Personnes_1.OnClose(false);
 }
 TAB_COMPO_PPTES[169].Action_en_cours = null;
 return NewCle;
}

function Annuler_Personnes_Personnes_existants0()
{
 TAB_COMPO_PPTES[169].Action_en_cours = null;
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[169].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[172];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[173];
 Esclave_1.ActiverComposant(false);
 var Esclave_2=TAB_GLOBAL_COMPO[174];
 Esclave_2.ActiverComposant(false);
 var Esclave_3=TAB_GLOBAL_COMPO[175];
 Esclave_3.ActiverComposant(false);
Annuler_Personnes_Adresse_5();
top.document.getElementById("Validate_Personnes_Adresse_5").disabled=true;
top.document.getElementById("Annuler_Personnes_Adresse_5").disabled=true;
top.document.getElementById("Insert_Personnes_Adresse_5").disabled=true;
top.document.getElementById("Delete_Personnes_Adresse_5").disabled=true;
top.document.getElementById("Update_Personnes_Adresse_5").disabled=true;
 var Esclave_4=TAB_GLOBAL_COMPO[176];
 Esclave_4.ActiverComposant(false);
Annuler_Personnes_Contact_11();
top.document.getElementById("Validate_Personnes_Contact_11").disabled=true;
top.document.getElementById("Annuler_Personnes_Contact_11").disabled=true;
top.document.getElementById("Insert_Personnes_Contact_11").disabled=true;
top.document.getElementById("Delete_Personnes_Contact_11").disabled=true;
top.document.getElementById("Update_Personnes_Contact_11").disabled=true;
 var Esclave_5=TAB_GLOBAL_COMPO[187];
 Esclave_5.ActiverComposant(false);
top.document.getElementById("Validate_Personnes_Personnes_existants0").disabled=true;
top.document.getElementById("Annuler_Personnes_Personnes_existants0").disabled=true;
top.document.getElementById("Insert_Personnes_Personnes_existants0").disabled=false;
top.document.getElementById("Delete_Personnes_Personnes_existants0").disabled=false;
top.document.getElementById("Update_Personnes_Personnes_existants0").disabled=false;
}

function Insert_Personnes_Adresse_5()
{
 TAB_COMPO_PPTES[176].Action_en_cours = INSERT;
/* On calcule la nouvelle clé */
 TAB_COMPO_PPTES[176].NewCle = getNewCle("adresse");
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[176].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[182];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[183];
 Esclave_1.ActiverComposant(true);
 var Esclave_2=TAB_GLOBAL_COMPO[184];
 Esclave_2.ActiverComposant(true);
 var Esclave_3=TAB_GLOBAL_COMPO[185];
 Esclave_3.ActiverComposant(true);
 var Esclave_4=TAB_GLOBAL_COMPO[186];
 Esclave_4.ActiverComposant(true);
top.document.getElementById("Validate_Personnes_Adresse_5").disabled=false;
top.document.getElementById("Annuler_Personnes_Adresse_5").disabled=false;
top.document.getElementById("Insert_Personnes_Adresse_5").disabled=true;
top.document.getElementById("Delete_Personnes_Adresse_5").disabled=true;
top.document.getElementById("Update_Personnes_Adresse_5").disabled=true;
 var Maitre=TAB_GLOBAL_COMPO[176];
 /* Pour une insertion on désectionne */
 var tree=Maitre.getComposantXul();
 if (tree.view!=null)
 {
 	tree.currentIndex=-1;
 	tree.view.selection.clearSelection();
 }
return TAB_COMPO_PPTES[176].NewCle;
}

function Delete_Personnes_Adresse_5()
{
 if (TAB_GLOBAL_COMPO[176].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement à suprimer");
 	return;
 }
 /* On recupère le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[176];
 if (confirm("Voulez vous vraiment supprimer l'enregistrement en cours ?"))
 {
	TAB_COMPO_PPTES[176].Action_en_cours = DELETE;
 	User_Delete_Personnes_Adresse_5(Maitre);
	Maitre.RefreshTotal();
 }
}

function Update_Personnes_Adresse_5()
{
 if (TAB_GLOBAL_COMPO[176].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement à mettre à jour");
 	return -1;
 }
 TAB_COMPO_PPTES[176].Action_en_cours = UPDATE;
/* On calcule la nouvelle clé */
 TAB_COMPO_PPTES[176].NewCle = TAB_GLOBAL_COMPO[176].getCleVal();
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[176].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[182];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[183];
 Esclave_1.ActiverComposant(true);
 var Esclave_2=TAB_GLOBAL_COMPO[184];
 Esclave_2.ActiverComposant(true);
 var Esclave_3=TAB_GLOBAL_COMPO[185];
 Esclave_3.ActiverComposant(true);
 var Esclave_4=TAB_GLOBAL_COMPO[186];
 Esclave_4.ActiverComposant(true);
top.document.getElementById("Validate_Personnes_Adresse_5").disabled=false;
top.document.getElementById("Annuler_Personnes_Adresse_5").disabled=false;
top.document.getElementById("Insert_Personnes_Adresse_5").disabled=true;
top.document.getElementById("Delete_Personnes_Adresse_5").disabled=true;
top.document.getElementById("Update_Personnes_Adresse_5").disabled=true;
return TAB_COMPO_PPTES[176].NewCle;
}

function Validate_Personnes_Adresse_5(retour)
{
 /* Retour à l'onget appellant si appelle par gérer */
if (retour==null)
	retour=true;

 /* On recupère le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[176];
 /* On recupère la clé du nouvel enregistrement */
 var NewCle=null;
 switch(TAB_COMPO_PPTES[176].Action_en_cours){
	case INSERT :
	if ((NewCle = User_Insert_Personnes_Adresse_5(Maitre))==-1)
		return -1;
	break;
	case UPDATE :
	if ((User_Update_Personnes_Adresse_5(Maitre))==-1)
		return -1;
	break;
 }
 /* On construit la requete pour ajouter les nouvelles cles */
 if (NewCle!=null)
 {
 	var ReqNewCle=new clReqSQL();
 	var OldUnion=Maitre.my_ReqRefresh.getUnion();
	if (OldUnion==null)
	{
		ReqNewCle.Cloner(Maitre.my_ReqInterne);
	}
	else
	{
		ReqNewCle.Cloner(OldUnion);
	}
 	ReqNewCle.AddWhere(Maitre.getCle()+" = "+NewCle,"OR");
	Maitre.Union(ReqNewCle);
 }
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[176].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[182];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[183];
 Esclave_1.ActiverComposant(false);
 var Esclave_2=TAB_GLOBAL_COMPO[184];
 Esclave_2.ActiverComposant(false);
 var Esclave_3=TAB_GLOBAL_COMPO[185];
 Esclave_3.ActiverComposant(false);
 var Esclave_4=TAB_GLOBAL_COMPO[186];
 Esclave_4.ActiverComposant(false);
top.document.getElementById("Validate_Personnes_Adresse_5").disabled=true;
top.document.getElementById("Annuler_Personnes_Adresse_5").disabled=true;
top.document.getElementById("Insert_Personnes_Adresse_5").disabled=false;
top.document.getElementById("Delete_Personnes_Adresse_5").disabled=false;
top.document.getElementById("Update_Personnes_Adresse_5").disabled=false;
 if (NewCle==null)
 	NewCle=TAB_COMPO_PPTES[176].NewCle;
 Maitre.ForceNextSelection(NewCle)
 Maitre.RefreshTotal();
 if(retour)
 {
 }
 TAB_COMPO_PPTES[176].Action_en_cours = null;
 return NewCle;
}

function Annuler_Personnes_Adresse_5()
{
 TAB_COMPO_PPTES[176].Action_en_cours = null;
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[176].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[182];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[183];
 Esclave_1.ActiverComposant(false);
 var Esclave_2=TAB_GLOBAL_COMPO[184];
 Esclave_2.ActiverComposant(false);
 var Esclave_3=TAB_GLOBAL_COMPO[185];
 Esclave_3.ActiverComposant(false);
 var Esclave_4=TAB_GLOBAL_COMPO[186];
 Esclave_4.ActiverComposant(false);
top.document.getElementById("Validate_Personnes_Adresse_5").disabled=true;
top.document.getElementById("Annuler_Personnes_Adresse_5").disabled=true;
top.document.getElementById("Insert_Personnes_Adresse_5").disabled=false;
top.document.getElementById("Delete_Personnes_Adresse_5").disabled=false;
top.document.getElementById("Update_Personnes_Adresse_5").disabled=false;
}

function Insert_Personnes_Contact_11()
{
 TAB_COMPO_PPTES[187].Action_en_cours = INSERT;
/* On calcule la nouvelle clé */
 TAB_COMPO_PPTES[187].NewCle = getNewCle("contact");
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[187].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[191];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[192];
 Esclave_1.ActiverComposant(true);
 var Esclave_2=TAB_GLOBAL_COMPO[193];
 Esclave_2.ActiverComposant(true);
top.document.getElementById("Validate_Personnes_Contact_11").disabled=false;
top.document.getElementById("Annuler_Personnes_Contact_11").disabled=false;
top.document.getElementById("Insert_Personnes_Contact_11").disabled=true;
top.document.getElementById("Delete_Personnes_Contact_11").disabled=true;
top.document.getElementById("Update_Personnes_Contact_11").disabled=true;
 var Maitre=TAB_GLOBAL_COMPO[187];
 /* Pour une insertion on désectionne */
 var tree=Maitre.getComposantXul();
 if (tree.view!=null)
 {
 	tree.currentIndex=-1;
 	tree.view.selection.clearSelection();
 }
return TAB_COMPO_PPTES[187].NewCle;
}

function Delete_Personnes_Contact_11()
{
 if (TAB_GLOBAL_COMPO[187].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement à suprimer");
 	return;
 }
 /* On recupère le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[187];
 if (confirm("Voulez vous vraiment supprimer l'enregistrement en cours ?"))
 {
	TAB_COMPO_PPTES[187].Action_en_cours = DELETE;
 	User_Delete_Personnes_Contact_11(Maitre);
	Maitre.RefreshTotal();
 }
}

function Update_Personnes_Contact_11()
{
 if (TAB_GLOBAL_COMPO[187].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement à mettre à jour");
 	return -1;
 }
 TAB_COMPO_PPTES[187].Action_en_cours = UPDATE;
/* On calcule la nouvelle clé */
 TAB_COMPO_PPTES[187].NewCle = TAB_GLOBAL_COMPO[187].getCleVal();
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[187].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[191];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[192];
 Esclave_1.ActiverComposant(true);
 var Esclave_2=TAB_GLOBAL_COMPO[193];
 Esclave_2.ActiverComposant(true);
top.document.getElementById("Validate_Personnes_Contact_11").disabled=false;
top.document.getElementById("Annuler_Personnes_Contact_11").disabled=false;
top.document.getElementById("Insert_Personnes_Contact_11").disabled=true;
top.document.getElementById("Delete_Personnes_Contact_11").disabled=true;
top.document.getElementById("Update_Personnes_Contact_11").disabled=true;
return TAB_COMPO_PPTES[187].NewCle;
}

function Validate_Personnes_Contact_11(retour)
{
 /* Retour à l'onget appellant si appelle par gérer */
if (retour==null)
	retour=true;

 /* On recupère le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[187];
 /* On recupère la clé du nouvel enregistrement */
 var NewCle=null;
 switch(TAB_COMPO_PPTES[187].Action_en_cours){
	case INSERT :
	if ((NewCle = User_Insert_Personnes_Contact_11(Maitre))==-1)
		return -1;
	break;
	case UPDATE :
	if ((User_Update_Personnes_Contact_11(Maitre))==-1)
		return -1;
	break;
 }
 /* On construit la requete pour ajouter les nouvelles cles */
 if (NewCle!=null)
 {
 	var ReqNewCle=new clReqSQL();
 	var OldUnion=Maitre.my_ReqRefresh.getUnion();
	if (OldUnion==null)
	{
		ReqNewCle.Cloner(Maitre.my_ReqInterne);
	}
	else
	{
		ReqNewCle.Cloner(OldUnion);
	}
 	ReqNewCle.AddWhere(Maitre.getCle()+" = "+NewCle,"OR");
	Maitre.Union(ReqNewCle);
 }
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[187].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[191];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[192];
 Esclave_1.ActiverComposant(false);
 var Esclave_2=TAB_GLOBAL_COMPO[193];
 Esclave_2.ActiverComposant(false);
top.document.getElementById("Validate_Personnes_Contact_11").disabled=true;
top.document.getElementById("Annuler_Personnes_Contact_11").disabled=true;
top.document.getElementById("Insert_Personnes_Contact_11").disabled=false;
top.document.getElementById("Delete_Personnes_Contact_11").disabled=false;
top.document.getElementById("Update_Personnes_Contact_11").disabled=false;
 if (NewCle==null)
 	NewCle=TAB_COMPO_PPTES[187].NewCle;
 Maitre.ForceNextSelection(NewCle)
 Maitre.RefreshTotal();
 if(retour)
 {
 }
 TAB_COMPO_PPTES[187].Action_en_cours = null;
 return NewCle;
}

function Annuler_Personnes_Contact_11()
{
 TAB_COMPO_PPTES[187].Action_en_cours = null;
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[187].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[191];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[192];
 Esclave_1.ActiverComposant(false);
 var Esclave_2=TAB_GLOBAL_COMPO[193];
 Esclave_2.ActiverComposant(false);
top.document.getElementById("Validate_Personnes_Contact_11").disabled=true;
top.document.getElementById("Annuler_Personnes_Contact_11").disabled=true;
top.document.getElementById("Insert_Personnes_Contact_11").disabled=false;
top.document.getElementById("Delete_Personnes_Contact_11").disabled=false;
top.document.getElementById("Update_Personnes_Contact_11").disabled=false;
}






/* *********************************************** 
         FONCTIONS POUR L'ONGLET Communes
   ***********************************************/ 

 /* FILTRES DE RELATION ENTRE ONGLETS => VARIABLES GLOBALES POUR ETRE ACCESSIBLES DEPUIS INTERFACE_USER.JS */

 var Filtre_Dep_Communes_0;
function Retour_Communes()
{
 if (Filtre_Dep_Communes_0.my_Filtre.getEtat())
 {
 	Filtre_Dep_Communes_0.FctFermetureOnglet();
 }
}
function Gerer_Communes(IdFiltreOnglet)
{
/* On désactive les autres filtres */
if (Filtre_Dep_Communes_0.getId()!=IdFiltreOnglet)
{
	Filtre_Dep_Communes_0.OnClose(true,false);
}
/* On change d'onglet */
 var tabs = top.document.getElementById("Tous_les_onglets");
 top.document.getElementById("Tous_les_onglets").setAttribute("hidden","false");
 tabs.selectedItem = top.document.getElementById("Onglet_Communes");
}

function OuvrirOnglet_Communes()
{
 var tabs = top.document.getElementById("Tous_les_onglets");
 tabs.selectedItem = top.document.getElementById("Onglet_Communes");
}

function Insert_Communes_Communes0()
{
 TAB_COMPO_PPTES[194].Action_en_cours = INSERT;
/* On calcule la nouvelle clé */
 TAB_COMPO_PPTES[194].NewCle = getNewCle("commune");
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[194].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[197];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[198];
 Esclave_1.ActiverComposant(true);
 var Esclave_2=TAB_GLOBAL_COMPO[199];
 Esclave_2.ActiverComposant(true);
top.document.getElementById("Validate_Communes_Communes0").disabled=false;
top.document.getElementById("Annuler_Communes_Communes0").disabled=false;
top.document.getElementById("Insert_Communes_Communes0").disabled=true;
top.document.getElementById("Delete_Communes_Communes0").disabled=true;
top.document.getElementById("Update_Communes_Communes0").disabled=true;
 var Maitre=TAB_GLOBAL_COMPO[194];
 /* Pour une insertion on désectionne */
 var tree=Maitre.getComposantXul();
 if (tree.view!=null)
 {
 	tree.currentIndex=-1;
 	tree.view.selection.clearSelection();
 }
return TAB_COMPO_PPTES[194].NewCle;
}

function Delete_Communes_Communes0()
{
 if (TAB_GLOBAL_COMPO[194].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement à suprimer");
 	return;
 }
 /* On recupère le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[194];
 if (confirm("Voulez vous vraiment supprimer l'enregistrement en cours ?"))
 {
	TAB_COMPO_PPTES[194].Action_en_cours = DELETE;
 	User_Delete_Communes_Communes0(Maitre);
	Maitre.RefreshTotal();
	Filtre_Dep_Communes_0.OnClose(true);
 }
}

function Update_Communes_Communes0()
{
 if (TAB_GLOBAL_COMPO[194].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement à mettre à jour");
 	return -1;
 }
 TAB_COMPO_PPTES[194].Action_en_cours = UPDATE;
/* On calcule la nouvelle clé */
 TAB_COMPO_PPTES[194].NewCle = TAB_GLOBAL_COMPO[194].getCleVal();
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[194].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[197];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[198];
 Esclave_1.ActiverComposant(true);
 var Esclave_2=TAB_GLOBAL_COMPO[199];
 Esclave_2.ActiverComposant(true);
top.document.getElementById("Validate_Communes_Communes0").disabled=false;
top.document.getElementById("Annuler_Communes_Communes0").disabled=false;
top.document.getElementById("Insert_Communes_Communes0").disabled=true;
top.document.getElementById("Delete_Communes_Communes0").disabled=true;
top.document.getElementById("Update_Communes_Communes0").disabled=true;
return TAB_COMPO_PPTES[194].NewCle;
}

function Validate_Communes_Communes0(retour)
{
 /* Retour à l'onget appellant si appelle par gérer */
if (retour==null)
	retour=true;

 /* On recupère le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[194];
 /* On recupère la clé du nouvel enregistrement */
 var NewCle=null;
 switch(TAB_COMPO_PPTES[194].Action_en_cours){
	case INSERT :
	if ((NewCle = User_Insert_Communes_Communes0(Maitre))==-1)
		return -1;
	break;
	case UPDATE :
	if ((User_Update_Communes_Communes0(Maitre))==-1)
		return -1;
	break;
 }
 /* On construit la requete pour ajouter les nouvelles cles */
 if (NewCle!=null)
 {
 	var ReqNewCle=new clReqSQL();
 	var OldUnion=Maitre.my_ReqRefresh.getUnion();
	if (OldUnion==null)
	{
		ReqNewCle.Cloner(Maitre.my_ReqInterne);
	}
	else
	{
		ReqNewCle.Cloner(OldUnion);
	}
 	ReqNewCle.AddWhere(Maitre.getCle()+" = "+NewCle,"OR");
	Maitre.Union(ReqNewCle);
 }
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[194].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[197];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[198];
 Esclave_1.ActiverComposant(false);
 var Esclave_2=TAB_GLOBAL_COMPO[199];
 Esclave_2.ActiverComposant(false);
top.document.getElementById("Validate_Communes_Communes0").disabled=true;
top.document.getElementById("Annuler_Communes_Communes0").disabled=true;
top.document.getElementById("Insert_Communes_Communes0").disabled=false;
top.document.getElementById("Delete_Communes_Communes0").disabled=false;
top.document.getElementById("Update_Communes_Communes0").disabled=false;
 if (NewCle==null)
 	NewCle=TAB_COMPO_PPTES[194].NewCle;
 Maitre.ForceNextSelection(NewCle)
 Maitre.RefreshTotal();
 if(retour)
 {
 Filtre_Dep_Communes_0.OnClose(false);
 }
 TAB_COMPO_PPTES[194].Action_en_cours = null;
 return NewCle;
}

function Annuler_Communes_Communes0()
{
 TAB_COMPO_PPTES[194].Action_en_cours = null;
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[194].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[197];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[198];
 Esclave_1.ActiverComposant(false);
 var Esclave_2=TAB_GLOBAL_COMPO[199];
 Esclave_2.ActiverComposant(false);
top.document.getElementById("Validate_Communes_Communes0").disabled=true;
top.document.getElementById("Annuler_Communes_Communes0").disabled=true;
top.document.getElementById("Insert_Communes_Communes0").disabled=false;
top.document.getElementById("Delete_Communes_Communes0").disabled=false;
top.document.getElementById("Update_Communes_Communes0").disabled=false;
}






/* *********************************************** 
         FONCTIONS POUR L'ONGLET Codes postaux
   ***********************************************/ 

 /* FILTRES DE RELATION ENTRE ONGLETS => VARIABLES GLOBALES POUR ETRE ACCESSIBLES DEPUIS INTERFACE_USER.JS */

 var Filtre_Dep_Codes_postaux_0;
function Retour_Codes_postaux()
{
 if (Filtre_Dep_Codes_postaux_0.my_Filtre.getEtat())
 {
 	Filtre_Dep_Codes_postaux_0.FctFermetureOnglet();
 }
}
function Gerer_Codes_postaux(IdFiltreOnglet)
{
/* On désactive les autres filtres */
if (Filtre_Dep_Codes_postaux_0.getId()!=IdFiltreOnglet)
{
	Filtre_Dep_Codes_postaux_0.OnClose(true,false);
}
/* On change d'onglet */
 var tabs = top.document.getElementById("Tous_les_onglets");
 top.document.getElementById("Tous_les_onglets").setAttribute("hidden","false");
 tabs.selectedItem = top.document.getElementById("Onglet_Codes_postaux");
}

function OuvrirOnglet_Codes_postaux()
{
 var tabs = top.document.getElementById("Tous_les_onglets");
 tabs.selectedItem = top.document.getElementById("Onglet_Codes_postaux");
}

function Insert_Codes_postaux_Codes_postaux0()
{
 TAB_COMPO_PPTES[200].Action_en_cours = INSERT;
/* On calcule la nouvelle clé */
 TAB_COMPO_PPTES[200].NewCle = getNewCle("codepostal");
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[200].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[203];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[204];
 Esclave_1.ActiverComposant(true);
 var Esclave_2=TAB_GLOBAL_COMPO[208];
 Esclave_2.ActiverComposant(true);
top.document.getElementById("Validate_Codes_postaux_Codes_postaux0").disabled=false;
top.document.getElementById("Annuler_Codes_postaux_Codes_postaux0").disabled=false;
top.document.getElementById("Insert_Codes_postaux_Codes_postaux0").disabled=true;
top.document.getElementById("Delete_Codes_postaux_Codes_postaux0").disabled=true;
top.document.getElementById("Update_Codes_postaux_Codes_postaux0").disabled=true;
 var Maitre=TAB_GLOBAL_COMPO[200];
 /* Pour une insertion on désectionne */
 var tree=Maitre.getComposantXul();
 if (tree.view!=null)
 {
 	tree.currentIndex=-1;
 	tree.view.selection.clearSelection();
 }
return TAB_COMPO_PPTES[200].NewCle;
}

function Delete_Codes_postaux_Codes_postaux0()
{
 if (TAB_GLOBAL_COMPO[200].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement à suprimer");
 	return;
 }
 /* On recupère le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[200];
 if (confirm("Voulez vous vraiment supprimer l'enregistrement en cours ?"))
 {
	TAB_COMPO_PPTES[200].Action_en_cours = DELETE;
 	User_Delete_Codes_postaux_Codes_postaux0(Maitre);
	Maitre.RefreshTotal();
	Filtre_Dep_Codes_postaux_0.OnClose(true);
 }
}

function Update_Codes_postaux_Codes_postaux0()
{
 if (TAB_GLOBAL_COMPO[200].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement à mettre à jour");
 	return -1;
 }
 TAB_COMPO_PPTES[200].Action_en_cours = UPDATE;
/* On calcule la nouvelle clé */
 TAB_COMPO_PPTES[200].NewCle = TAB_GLOBAL_COMPO[200].getCleVal();
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[200].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[203];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[204];
 Esclave_1.ActiverComposant(true);
 var Esclave_2=TAB_GLOBAL_COMPO[208];
 Esclave_2.ActiverComposant(true);
top.document.getElementById("Validate_Codes_postaux_Codes_postaux0").disabled=false;
top.document.getElementById("Annuler_Codes_postaux_Codes_postaux0").disabled=false;
top.document.getElementById("Insert_Codes_postaux_Codes_postaux0").disabled=true;
top.document.getElementById("Delete_Codes_postaux_Codes_postaux0").disabled=true;
top.document.getElementById("Update_Codes_postaux_Codes_postaux0").disabled=true;
return TAB_COMPO_PPTES[200].NewCle;
}

function Validate_Codes_postaux_Codes_postaux0(retour)
{
 /* Retour à l'onget appellant si appelle par gérer */
if (retour==null)
	retour=true;

 /* On recupère le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[200];
 /* On recupère la clé du nouvel enregistrement */
 var NewCle=null;
 switch(TAB_COMPO_PPTES[200].Action_en_cours){
	case INSERT :
	if ((NewCle = User_Insert_Codes_postaux_Codes_postaux0(Maitre))==-1)
		return -1;
	break;
	case UPDATE :
	if ((User_Update_Codes_postaux_Codes_postaux0(Maitre))==-1)
		return -1;
	break;
 }
 /* On construit la requete pour ajouter les nouvelles cles */
 if (NewCle!=null)
 {
 	var ReqNewCle=new clReqSQL();
 	var OldUnion=Maitre.my_ReqRefresh.getUnion();
	if (OldUnion==null)
	{
		ReqNewCle.Cloner(Maitre.my_ReqInterne);
	}
	else
	{
		ReqNewCle.Cloner(OldUnion);
	}
 	ReqNewCle.AddWhere(Maitre.getCle()+" = "+NewCle,"OR");
	Maitre.Union(ReqNewCle);
 }
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[200].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[203];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[204];
 Esclave_1.ActiverComposant(false);
 var Esclave_2=TAB_GLOBAL_COMPO[208];
 Esclave_2.ActiverComposant(false);
top.document.getElementById("Validate_Codes_postaux_Codes_postaux0").disabled=true;
top.document.getElementById("Annuler_Codes_postaux_Codes_postaux0").disabled=true;
top.document.getElementById("Insert_Codes_postaux_Codes_postaux0").disabled=false;
top.document.getElementById("Delete_Codes_postaux_Codes_postaux0").disabled=false;
top.document.getElementById("Update_Codes_postaux_Codes_postaux0").disabled=false;
 if (NewCle==null)
 	NewCle=TAB_COMPO_PPTES[200].NewCle;
 Maitre.ForceNextSelection(NewCle)
 Maitre.RefreshTotal();
 if(retour)
 {
 Filtre_Dep_Codes_postaux_0.OnClose(false);
 }
 TAB_COMPO_PPTES[200].Action_en_cours = null;
 return NewCle;
}

function Annuler_Codes_postaux_Codes_postaux0()
{
 TAB_COMPO_PPTES[200].Action_en_cours = null;
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[200].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[203];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[204];
 Esclave_1.ActiverComposant(false);
 var Esclave_2=TAB_GLOBAL_COMPO[208];
 Esclave_2.ActiverComposant(false);
top.document.getElementById("Validate_Codes_postaux_Codes_postaux0").disabled=true;
top.document.getElementById("Annuler_Codes_postaux_Codes_postaux0").disabled=true;
top.document.getElementById("Insert_Codes_postaux_Codes_postaux0").disabled=false;
top.document.getElementById("Delete_Codes_postaux_Codes_postaux0").disabled=false;
top.document.getElementById("Update_Codes_postaux_Codes_postaux0").disabled=false;
}






/* *********************************************** 
         FONCTIONS POUR L'ONGLET Achat
   ***********************************************/ 

 /* FILTRES DE RELATION ENTRE ONGLETS => VARIABLES GLOBALES POUR ETRE ACCESSIBLES DEPUIS INTERFACE_USER.JS */

function OuvrirOnglet_Achat()
{
 var tabs = top.document.getElementById("Tous_les_onglets");
 tabs.selectedItem = top.document.getElementById("Onglet_Achat");
}

function Insert_Achat_Achat0()
{
 TAB_COMPO_PPTES[211].Action_en_cours = INSERT;
/* On calcule la nouvelle clé */
 TAB_COMPO_PPTES[211].NewCle = getNewCle("achat");
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[211].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[214];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[215];
 Esclave_1.ActiverComposant(true);
 var Esclave_2=TAB_GLOBAL_COMPO[216];
 Esclave_2.ActiverComposant(true);
 var Esclave_3=TAB_GLOBAL_COMPO[217];
 Esclave_3.ActiverComposant(true);
 var Esclave_4=TAB_GLOBAL_COMPO[218];
 Esclave_4.ActiverComposant(true);
 var Esclave_5=TAB_GLOBAL_COMPO[219];
 Esclave_5.ActiverComposant(true);
top.document.getElementById("Validate_Achat_Achat0").disabled=false;
top.document.getElementById("Annuler_Achat_Achat0").disabled=false;
top.document.getElementById("Insert_Achat_Achat0").disabled=true;
top.document.getElementById("Delete_Achat_Achat0").disabled=true;
top.document.getElementById("Update_Achat_Achat0").disabled=true;
 var Maitre=TAB_GLOBAL_COMPO[211];
 /* Pour une insertion on désectionne */
 var tree=Maitre.getComposantXul();
 if (tree.view!=null)
 {
 	tree.currentIndex=-1;
 	tree.view.selection.clearSelection();
 }
return TAB_COMPO_PPTES[211].NewCle;
}

function Delete_Achat_Achat0()
{
 if (TAB_GLOBAL_COMPO[211].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement à suprimer");
 	return;
 }
 /* On recupère le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[211];
 if (confirm("Voulez vous vraiment supprimer l'enregistrement en cours ?"))
 {
	TAB_COMPO_PPTES[211].Action_en_cours = DELETE;
 	User_Delete_Achat_Achat0(Maitre);
	Maitre.RefreshTotal();
 }
}

function Update_Achat_Achat0()
{
 if (TAB_GLOBAL_COMPO[211].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement à mettre à jour");
 	return -1;
 }
 TAB_COMPO_PPTES[211].Action_en_cours = UPDATE;
/* On calcule la nouvelle clé */
 TAB_COMPO_PPTES[211].NewCle = TAB_GLOBAL_COMPO[211].getCleVal();
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[211].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[214];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[215];
 Esclave_1.ActiverComposant(true);
 var Esclave_2=TAB_GLOBAL_COMPO[216];
 Esclave_2.ActiverComposant(true);
 var Esclave_3=TAB_GLOBAL_COMPO[217];
 Esclave_3.ActiverComposant(true);
 var Esclave_4=TAB_GLOBAL_COMPO[218];
 Esclave_4.ActiverComposant(true);
 var Esclave_5=TAB_GLOBAL_COMPO[219];
 Esclave_5.ActiverComposant(true);
top.document.getElementById("Validate_Achat_Achat0").disabled=false;
top.document.getElementById("Annuler_Achat_Achat0").disabled=false;
top.document.getElementById("Insert_Achat_Achat0").disabled=true;
top.document.getElementById("Delete_Achat_Achat0").disabled=true;
top.document.getElementById("Update_Achat_Achat0").disabled=true;
return TAB_COMPO_PPTES[211].NewCle;
}

function Validate_Achat_Achat0(retour)
{
 /* Retour à l'onget appellant si appelle par gérer */
if (retour==null)
	retour=true;

 /* On recupère le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[211];
 /* On recupère la clé du nouvel enregistrement */
 var NewCle=null;
 switch(TAB_COMPO_PPTES[211].Action_en_cours){
	case INSERT :
	if ((NewCle = User_Insert_Achat_Achat0(Maitre))==-1)
		return -1;
	break;
	case UPDATE :
	if ((User_Update_Achat_Achat0(Maitre))==-1)
		return -1;
	break;
 }
 /* On construit la requete pour ajouter les nouvelles cles */
 if (NewCle!=null)
 {
 	var ReqNewCle=new clReqSQL();
 	var OldUnion=Maitre.my_ReqRefresh.getUnion();
	if (OldUnion==null)
	{
		ReqNewCle.Cloner(Maitre.my_ReqInterne);
	}
	else
	{
		ReqNewCle.Cloner(OldUnion);
	}
 	ReqNewCle.AddWhere(Maitre.getCle()+" = "+NewCle,"OR");
	Maitre.Union(ReqNewCle);
 }
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[211].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[214];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[215];
 Esclave_1.ActiverComposant(false);
 var Esclave_2=TAB_GLOBAL_COMPO[216];
 Esclave_2.ActiverComposant(false);
 var Esclave_3=TAB_GLOBAL_COMPO[217];
 Esclave_3.ActiverComposant(false);
 var Esclave_4=TAB_GLOBAL_COMPO[218];
 Esclave_4.ActiverComposant(false);
 var Esclave_5=TAB_GLOBAL_COMPO[219];
 Esclave_5.ActiverComposant(false);
top.document.getElementById("Validate_Achat_Achat0").disabled=true;
top.document.getElementById("Annuler_Achat_Achat0").disabled=true;
top.document.getElementById("Insert_Achat_Achat0").disabled=false;
top.document.getElementById("Delete_Achat_Achat0").disabled=false;
top.document.getElementById("Update_Achat_Achat0").disabled=false;
 if (NewCle==null)
 	NewCle=TAB_COMPO_PPTES[211].NewCle;
 Maitre.ForceNextSelection(NewCle)
 Maitre.RefreshTotal();
 if(retour)
 {
 }
 TAB_COMPO_PPTES[211].Action_en_cours = null;
 return NewCle;
}

function Annuler_Achat_Achat0()
{
 TAB_COMPO_PPTES[211].Action_en_cours = null;
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[211].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[214];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[215];
 Esclave_1.ActiverComposant(false);
 var Esclave_2=TAB_GLOBAL_COMPO[216];
 Esclave_2.ActiverComposant(false);
 var Esclave_3=TAB_GLOBAL_COMPO[217];
 Esclave_3.ActiverComposant(false);
 var Esclave_4=TAB_GLOBAL_COMPO[218];
 Esclave_4.ActiverComposant(false);
 var Esclave_5=TAB_GLOBAL_COMPO[219];
 Esclave_5.ActiverComposant(false);
top.document.getElementById("Validate_Achat_Achat0").disabled=true;
top.document.getElementById("Annuler_Achat_Achat0").disabled=true;
top.document.getElementById("Insert_Achat_Achat0").disabled=false;
top.document.getElementById("Delete_Achat_Achat0").disabled=false;
top.document.getElementById("Update_Achat_Achat0").disabled=false;
}






/* *********************************************** 
         FONCTIONS POUR L'ONGLET Documents
   ***********************************************/ 

 /* FILTRES DE RELATION ENTRE ONGLETS => VARIABLES GLOBALES POUR ETRE ACCESSIBLES DEPUIS INTERFACE_USER.JS */

function OuvrirOnglet_Documents()
{
 var tabs = top.document.getElementById("Tous_les_onglets");
 tabs.selectedItem = top.document.getElementById("Onglet_Documents");
}

function Insert_Documents_Documents0()
{
 TAB_COMPO_PPTES[220].Action_en_cours = INSERT;
/* On calcule la nouvelle clé */
 TAB_COMPO_PPTES[220].NewCle = getNewCle("document");
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[220].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[223];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[224];
 Esclave_1.ActiverComposant(true);
 var Esclave_2=TAB_GLOBAL_COMPO[225];
 Esclave_2.ActiverComposant(true);
 var Esclave_3=TAB_GLOBAL_COMPO[226];
 Esclave_3.ActiverComposant(true);
top.document.getElementById("Validate_Documents_Documents0").disabled=false;
top.document.getElementById("Annuler_Documents_Documents0").disabled=false;
top.document.getElementById("Insert_Documents_Documents0").disabled=true;
top.document.getElementById("Delete_Documents_Documents0").disabled=true;
top.document.getElementById("Update_Documents_Documents0").disabled=true;
 var Maitre=TAB_GLOBAL_COMPO[220];
 /* Pour une insertion on désectionne */
 var tree=Maitre.getComposantXul();
 if (tree.view!=null)
 {
 	tree.currentIndex=-1;
 	tree.view.selection.clearSelection();
 }
return TAB_COMPO_PPTES[220].NewCle;
}

function Delete_Documents_Documents0()
{
 if (TAB_GLOBAL_COMPO[220].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement à suprimer");
 	return;
 }
 /* On recupère le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[220];
 if (confirm("Voulez vous vraiment supprimer l'enregistrement en cours ?"))
 {
	TAB_COMPO_PPTES[220].Action_en_cours = DELETE;
 	User_Delete_Documents_Documents0(Maitre);
	Maitre.RefreshTotal();
 }
}

function Update_Documents_Documents0()
{
 if (TAB_GLOBAL_COMPO[220].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement à mettre à jour");
 	return -1;
 }
 TAB_COMPO_PPTES[220].Action_en_cours = UPDATE;
/* On calcule la nouvelle clé */
 TAB_COMPO_PPTES[220].NewCle = TAB_GLOBAL_COMPO[220].getCleVal();
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[220].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[223];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[224];
 Esclave_1.ActiverComposant(true);
 var Esclave_2=TAB_GLOBAL_COMPO[225];
 Esclave_2.ActiverComposant(true);
 var Esclave_3=TAB_GLOBAL_COMPO[226];
 Esclave_3.ActiverComposant(true);
top.document.getElementById("Validate_Documents_Documents0").disabled=false;
top.document.getElementById("Annuler_Documents_Documents0").disabled=false;
top.document.getElementById("Insert_Documents_Documents0").disabled=true;
top.document.getElementById("Delete_Documents_Documents0").disabled=true;
top.document.getElementById("Update_Documents_Documents0").disabled=true;
return TAB_COMPO_PPTES[220].NewCle;
}

function Validate_Documents_Documents0(retour)
{
 /* Retour à l'onget appellant si appelle par gérer */
if (retour==null)
	retour=true;

 /* On recupère le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[220];
 /* On recupère la clé du nouvel enregistrement */
 var NewCle=null;
 switch(TAB_COMPO_PPTES[220].Action_en_cours){
	case INSERT :
	if ((NewCle = User_Insert_Documents_Documents0(Maitre))==-1)
		return -1;
	break;
	case UPDATE :
	if ((User_Update_Documents_Documents0(Maitre))==-1)
		return -1;
	break;
 }
 /* On construit la requete pour ajouter les nouvelles cles */
 if (NewCle!=null)
 {
 	var ReqNewCle=new clReqSQL();
 	var OldUnion=Maitre.my_ReqRefresh.getUnion();
	if (OldUnion==null)
	{
		ReqNewCle.Cloner(Maitre.my_ReqInterne);
	}
	else
	{
		ReqNewCle.Cloner(OldUnion);
	}
 	ReqNewCle.AddWhere(Maitre.getCle()+" = "+NewCle,"OR");
	Maitre.Union(ReqNewCle);
 }
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[220].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[223];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[224];
 Esclave_1.ActiverComposant(false);
 var Esclave_2=TAB_GLOBAL_COMPO[225];
 Esclave_2.ActiverComposant(false);
 var Esclave_3=TAB_GLOBAL_COMPO[226];
 Esclave_3.ActiverComposant(false);
top.document.getElementById("Validate_Documents_Documents0").disabled=true;
top.document.getElementById("Annuler_Documents_Documents0").disabled=true;
top.document.getElementById("Insert_Documents_Documents0").disabled=false;
top.document.getElementById("Delete_Documents_Documents0").disabled=false;
top.document.getElementById("Update_Documents_Documents0").disabled=false;
 if (NewCle==null)
 	NewCle=TAB_COMPO_PPTES[220].NewCle;
 Maitre.ForceNextSelection(NewCle)
 Maitre.RefreshTotal();
 if(retour)
 {
 }
 TAB_COMPO_PPTES[220].Action_en_cours = null;
 return NewCle;
}

function Annuler_Documents_Documents0()
{
 TAB_COMPO_PPTES[220].Action_en_cours = null;
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[220].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[223];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[224];
 Esclave_1.ActiverComposant(false);
 var Esclave_2=TAB_GLOBAL_COMPO[225];
 Esclave_2.ActiverComposant(false);
 var Esclave_3=TAB_GLOBAL_COMPO[226];
 Esclave_3.ActiverComposant(false);
top.document.getElementById("Validate_Documents_Documents0").disabled=true;
top.document.getElementById("Annuler_Documents_Documents0").disabled=true;
top.document.getElementById("Insert_Documents_Documents0").disabled=false;
top.document.getElementById("Delete_Documents_Documents0").disabled=false;
top.document.getElementById("Update_Documents_Documents0").disabled=false;
}






/* *********************************************** 
         FONCTIONS POUR L'ONGLET Type de documents
   ***********************************************/ 

 /* FILTRES DE RELATION ENTRE ONGLETS => VARIABLES GLOBALES POUR ETRE ACCESSIBLES DEPUIS INTERFACE_USER.JS */

 var Filtre_Dep_Type_de_documents_0;
function Retour_Type_de_documents()
{
 if (Filtre_Dep_Type_de_documents_0.my_Filtre.getEtat())
 {
 	Filtre_Dep_Type_de_documents_0.FctFermetureOnglet();
 }
}
function Gerer_Type_de_documents(IdFiltreOnglet)
{
/* On désactive les autres filtres */
if (Filtre_Dep_Type_de_documents_0.getId()!=IdFiltreOnglet)
{
	Filtre_Dep_Type_de_documents_0.OnClose(true,false);
}
/* On change d'onglet */
 var tabs = top.document.getElementById("Tous_les_onglets");
 top.document.getElementById("Tous_les_onglets").setAttribute("hidden","false");
 tabs.selectedItem = top.document.getElementById("Onglet_Type_de_documents");
}

function OuvrirOnglet_Type_de_documents()
{
 var tabs = top.document.getElementById("Tous_les_onglets");
 tabs.selectedItem = top.document.getElementById("Onglet_Type_de_documents");
}

function Insert_Type_de_documents_Type_de_documents0()
{
 TAB_COMPO_PPTES[227].Action_en_cours = INSERT;
/* On calcule la nouvelle clé */
 TAB_COMPO_PPTES[227].NewCle = getNewCle("typedocument");
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[227].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[229];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[230];
 Esclave_1.ActiverComposant(true);
 var Esclave_2=TAB_GLOBAL_COMPO[231];
 Esclave_2.ActiverComposant(true);
top.document.getElementById("Validate_Type_de_documents_Type_de_documents0").disabled=false;
top.document.getElementById("Annuler_Type_de_documents_Type_de_documents0").disabled=false;
top.document.getElementById("Insert_Type_de_documents_Type_de_documents0").disabled=true;
top.document.getElementById("Delete_Type_de_documents_Type_de_documents0").disabled=true;
top.document.getElementById("Update_Type_de_documents_Type_de_documents0").disabled=true;
 var Maitre=TAB_GLOBAL_COMPO[227];
 /* Pour une insertion on désectionne */
 var tree=Maitre.getComposantXul();
 if (tree.view!=null)
 {
 	tree.currentIndex=-1;
 	tree.view.selection.clearSelection();
 }
return TAB_COMPO_PPTES[227].NewCle;
}

function Delete_Type_de_documents_Type_de_documents0()
{
 if (TAB_GLOBAL_COMPO[227].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement à suprimer");
 	return;
 }
 /* On recupère le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[227];
 if (confirm("Voulez vous vraiment supprimer l'enregistrement en cours ?"))
 {
	TAB_COMPO_PPTES[227].Action_en_cours = DELETE;
 	User_Delete_Type_de_documents_Type_de_documents0(Maitre);
	Maitre.RefreshTotal();
	Filtre_Dep_Type_de_documents_0.OnClose(true);
 }
}

function Update_Type_de_documents_Type_de_documents0()
{
 if (TAB_GLOBAL_COMPO[227].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement à mettre à jour");
 	return -1;
 }
 TAB_COMPO_PPTES[227].Action_en_cours = UPDATE;
/* On calcule la nouvelle clé */
 TAB_COMPO_PPTES[227].NewCle = TAB_GLOBAL_COMPO[227].getCleVal();
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[227].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[229];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[230];
 Esclave_1.ActiverComposant(true);
 var Esclave_2=TAB_GLOBAL_COMPO[231];
 Esclave_2.ActiverComposant(true);
top.document.getElementById("Validate_Type_de_documents_Type_de_documents0").disabled=false;
top.document.getElementById("Annuler_Type_de_documents_Type_de_documents0").disabled=false;
top.document.getElementById("Insert_Type_de_documents_Type_de_documents0").disabled=true;
top.document.getElementById("Delete_Type_de_documents_Type_de_documents0").disabled=true;
top.document.getElementById("Update_Type_de_documents_Type_de_documents0").disabled=true;
return TAB_COMPO_PPTES[227].NewCle;
}

function Validate_Type_de_documents_Type_de_documents0(retour)
{
 /* Retour à l'onget appellant si appelle par gérer */
if (retour==null)
	retour=true;

 /* On recupère le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[227];
 /* On recupère la clé du nouvel enregistrement */
 var NewCle=null;
 switch(TAB_COMPO_PPTES[227].Action_en_cours){
	case INSERT :
	if ((NewCle = User_Insert_Type_de_documents_Type_de_documents0(Maitre))==-1)
		return -1;
	break;
	case UPDATE :
	if ((User_Update_Type_de_documents_Type_de_documents0(Maitre))==-1)
		return -1;
	break;
 }
 /* On construit la requete pour ajouter les nouvelles cles */
 if (NewCle!=null)
 {
 	var ReqNewCle=new clReqSQL();
 	var OldUnion=Maitre.my_ReqRefresh.getUnion();
	if (OldUnion==null)
	{
		ReqNewCle.Cloner(Maitre.my_ReqInterne);
	}
	else
	{
		ReqNewCle.Cloner(OldUnion);
	}
 	ReqNewCle.AddWhere(Maitre.getCle()+" = "+NewCle,"OR");
	Maitre.Union(ReqNewCle);
 }
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[227].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[229];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[230];
 Esclave_1.ActiverComposant(false);
 var Esclave_2=TAB_GLOBAL_COMPO[231];
 Esclave_2.ActiverComposant(false);
top.document.getElementById("Validate_Type_de_documents_Type_de_documents0").disabled=true;
top.document.getElementById("Annuler_Type_de_documents_Type_de_documents0").disabled=true;
top.document.getElementById("Insert_Type_de_documents_Type_de_documents0").disabled=false;
top.document.getElementById("Delete_Type_de_documents_Type_de_documents0").disabled=false;
top.document.getElementById("Update_Type_de_documents_Type_de_documents0").disabled=false;
 if (NewCle==null)
 	NewCle=TAB_COMPO_PPTES[227].NewCle;
 Maitre.ForceNextSelection(NewCle)
 Maitre.RefreshTotal();
 if(retour)
 {
 Filtre_Dep_Type_de_documents_0.OnClose(false);
 }
 TAB_COMPO_PPTES[227].Action_en_cours = null;
 return NewCle;
}

function Annuler_Type_de_documents_Type_de_documents0()
{
 TAB_COMPO_PPTES[227].Action_en_cours = null;
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[227].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[229];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[230];
 Esclave_1.ActiverComposant(false);
 var Esclave_2=TAB_GLOBAL_COMPO[231];
 Esclave_2.ActiverComposant(false);
top.document.getElementById("Validate_Type_de_documents_Type_de_documents0").disabled=true;
top.document.getElementById("Annuler_Type_de_documents_Type_de_documents0").disabled=true;
top.document.getElementById("Insert_Type_de_documents_Type_de_documents0").disabled=false;
top.document.getElementById("Delete_Type_de_documents_Type_de_documents0").disabled=false;
top.document.getElementById("Update_Type_de_documents_Type_de_documents0").disabled=false;
}






/* *********************************************** 
         FONCTIONS POUR L'ONGLET Prélèvements
   ***********************************************/ 

 /* FILTRES DE RELATION ENTRE ONGLETS => VARIABLES GLOBALES POUR ETRE ACCESSIBLES DEPUIS INTERFACE_USER.JS */

function OuvrirOnglet_Prélèvements()
{
 var tabs = top.document.getElementById("Tous_les_onglets");
 tabs.selectedItem = top.document.getElementById("Onglet_Prélèvements");
}

function Insert_Prélèvements_Prélèvements0()
{
 TAB_COMPO_PPTES[232].Action_en_cours = INSERT;
/* On calcule la nouvelle clé */
 TAB_COMPO_PPTES[232].NewCle = getNewCle("prelevement");
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[232].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[234];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[235];
 Esclave_1.ActiverComposant(true);
 var Esclave_2=TAB_GLOBAL_COMPO[236];
 Esclave_2.ActiverComposant(true);
 var Esclave_3=TAB_GLOBAL_COMPO[237];
 Esclave_3.ActiverComposant(true);
 var Esclave_4=TAB_GLOBAL_COMPO[238];
 Esclave_4.ActiverComposant(true);
 var Esclave_5=TAB_GLOBAL_COMPO[239];
 Esclave_5.ActiverComposant(true);
 var Esclave_6=TAB_GLOBAL_COMPO[240];
 Esclave_6.ActiverComposant(true);
top.document.getElementById("Validate_Prélèvements_Prélèvements0").disabled=false;
top.document.getElementById("Annuler_Prélèvements_Prélèvements0").disabled=false;
top.document.getElementById("Insert_Prélèvements_Prélèvements0").disabled=true;
top.document.getElementById("Delete_Prélèvements_Prélèvements0").disabled=true;
top.document.getElementById("Update_Prélèvements_Prélèvements0").disabled=true;
 var Maitre=TAB_GLOBAL_COMPO[232];
 /* Pour une insertion on désectionne */
 var tree=Maitre.getComposantXul();
 if (tree.view!=null)
 {
 	tree.currentIndex=-1;
 	tree.view.selection.clearSelection();
 }
return TAB_COMPO_PPTES[232].NewCle;
}

function Delete_Prélèvements_Prélèvements0()
{
 if (TAB_GLOBAL_COMPO[232].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement à suprimer");
 	return;
 }
 /* On recupère le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[232];
 if (confirm("Voulez vous vraiment supprimer l'enregistrement en cours ?"))
 {
	TAB_COMPO_PPTES[232].Action_en_cours = DELETE;
 	User_Delete_Prélèvements_Prélèvements0(Maitre);
	Maitre.RefreshTotal();
 }
}

function Update_Prélèvements_Prélèvements0()
{
 if (TAB_GLOBAL_COMPO[232].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement à mettre à jour");
 	return -1;
 }
 TAB_COMPO_PPTES[232].Action_en_cours = UPDATE;
/* On calcule la nouvelle clé */
 TAB_COMPO_PPTES[232].NewCle = TAB_GLOBAL_COMPO[232].getCleVal();
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[232].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[234];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[235];
 Esclave_1.ActiverComposant(true);
 var Esclave_2=TAB_GLOBAL_COMPO[236];
 Esclave_2.ActiverComposant(true);
 var Esclave_3=TAB_GLOBAL_COMPO[237];
 Esclave_3.ActiverComposant(true);
 var Esclave_4=TAB_GLOBAL_COMPO[238];
 Esclave_4.ActiverComposant(true);
 var Esclave_5=TAB_GLOBAL_COMPO[239];
 Esclave_5.ActiverComposant(true);
 var Esclave_6=TAB_GLOBAL_COMPO[240];
 Esclave_6.ActiverComposant(true);
top.document.getElementById("Validate_Prélèvements_Prélèvements0").disabled=false;
top.document.getElementById("Annuler_Prélèvements_Prélèvements0").disabled=false;
top.document.getElementById("Insert_Prélèvements_Prélèvements0").disabled=true;
top.document.getElementById("Delete_Prélèvements_Prélèvements0").disabled=true;
top.document.getElementById("Update_Prélèvements_Prélèvements0").disabled=true;
return TAB_COMPO_PPTES[232].NewCle;
}

function Validate_Prélèvements_Prélèvements0(retour)
{
 /* Retour à l'onget appellant si appelle par gérer */
if (retour==null)
	retour=true;

 /* On recupère le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[232];
 /* On recupère la clé du nouvel enregistrement */
 var NewCle=null;
 switch(TAB_COMPO_PPTES[232].Action_en_cours){
	case INSERT :
	if ((NewCle = User_Insert_Prélèvements_Prélèvements0(Maitre))==-1)
		return -1;
	break;
	case UPDATE :
	if ((User_Update_Prélèvements_Prélèvements0(Maitre))==-1)
		return -1;
	break;
 }
 /* On construit la requete pour ajouter les nouvelles cles */
 if (NewCle!=null)
 {
 	var ReqNewCle=new clReqSQL();
 	var OldUnion=Maitre.my_ReqRefresh.getUnion();
	if (OldUnion==null)
	{
		ReqNewCle.Cloner(Maitre.my_ReqInterne);
	}
	else
	{
		ReqNewCle.Cloner(OldUnion);
	}
 	ReqNewCle.AddWhere(Maitre.getCle()+" = "+NewCle,"OR");
	Maitre.Union(ReqNewCle);
 }
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[232].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[234];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[235];
 Esclave_1.ActiverComposant(false);
 var Esclave_2=TAB_GLOBAL_COMPO[236];
 Esclave_2.ActiverComposant(false);
 var Esclave_3=TAB_GLOBAL_COMPO[237];
 Esclave_3.ActiverComposant(false);
 var Esclave_4=TAB_GLOBAL_COMPO[238];
 Esclave_4.ActiverComposant(false);
 var Esclave_5=TAB_GLOBAL_COMPO[239];
 Esclave_5.ActiverComposant(false);
 var Esclave_6=TAB_GLOBAL_COMPO[240];
 Esclave_6.ActiverComposant(false);
top.document.getElementById("Validate_Prélèvements_Prélèvements0").disabled=true;
top.document.getElementById("Annuler_Prélèvements_Prélèvements0").disabled=true;
top.document.getElementById("Insert_Prélèvements_Prélèvements0").disabled=false;
top.document.getElementById("Delete_Prélèvements_Prélèvements0").disabled=false;
top.document.getElementById("Update_Prélèvements_Prélèvements0").disabled=false;
 if (NewCle==null)
 	NewCle=TAB_COMPO_PPTES[232].NewCle;
 Maitre.ForceNextSelection(NewCle)
 Maitre.RefreshTotal();
 if(retour)
 {
 }
 TAB_COMPO_PPTES[232].Action_en_cours = null;
 return NewCle;
}

function Annuler_Prélèvements_Prélèvements0()
{
 TAB_COMPO_PPTES[232].Action_en_cours = null;
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[232].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[234];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[235];
 Esclave_1.ActiverComposant(false);
 var Esclave_2=TAB_GLOBAL_COMPO[236];
 Esclave_2.ActiverComposant(false);
 var Esclave_3=TAB_GLOBAL_COMPO[237];
 Esclave_3.ActiverComposant(false);
 var Esclave_4=TAB_GLOBAL_COMPO[238];
 Esclave_4.ActiverComposant(false);
 var Esclave_5=TAB_GLOBAL_COMPO[239];
 Esclave_5.ActiverComposant(false);
 var Esclave_6=TAB_GLOBAL_COMPO[240];
 Esclave_6.ActiverComposant(false);
top.document.getElementById("Validate_Prélèvements_Prélèvements0").disabled=true;
top.document.getElementById("Annuler_Prélèvements_Prélèvements0").disabled=true;
top.document.getElementById("Insert_Prélèvements_Prélèvements0").disabled=false;
top.document.getElementById("Delete_Prélèvements_Prélèvements0").disabled=false;
top.document.getElementById("Update_Prélèvements_Prélèvements0").disabled=false;
}






/* *********************************************** 
         FONCTIONS POUR L'ONGLET Type de prélèvement
   ***********************************************/ 

 /* FILTRES DE RELATION ENTRE ONGLETS => VARIABLES GLOBALES POUR ETRE ACCESSIBLES DEPUIS INTERFACE_USER.JS */

 var Filtre_Dep_Type_de_prélèvement_0;
function Retour_Type_de_prélèvement()
{
 if (Filtre_Dep_Type_de_prélèvement_0.my_Filtre.getEtat())
 {
 	Filtre_Dep_Type_de_prélèvement_0.FctFermetureOnglet();
 }
}
function Gerer_Type_de_prélèvement(IdFiltreOnglet)
{
/* On désactive les autres filtres */
if (Filtre_Dep_Type_de_prélèvement_0.getId()!=IdFiltreOnglet)
{
	Filtre_Dep_Type_de_prélèvement_0.OnClose(true,false);
}
/* On change d'onglet */
 var tabs = top.document.getElementById("Tous_les_onglets");
 top.document.getElementById("Tous_les_onglets").setAttribute("hidden","false");
 tabs.selectedItem = top.document.getElementById("Onglet_Type_de_prélèvement");
}

function OuvrirOnglet_Type_de_prélèvement()
{
 var tabs = top.document.getElementById("Tous_les_onglets");
 tabs.selectedItem = top.document.getElementById("Onglet_Type_de_prélèvement");
}

function Insert_Type_de_prélèvement_Type_de_prélèvement0()
{
 TAB_COMPO_PPTES[241].Action_en_cours = INSERT;
/* On calcule la nouvelle clé */
 TAB_COMPO_PPTES[241].NewCle = getNewCle("typeprelevement");
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[241].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[243];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[244];
 Esclave_1.ActiverComposant(true);
 var Esclave_2=TAB_GLOBAL_COMPO[245];
 Esclave_2.ActiverComposant(true);
top.document.getElementById("Validate_Type_de_prélèvement_Type_de_prélèvement0").disabled=false;
top.document.getElementById("Annuler_Type_de_prélèvement_Type_de_prélèvement0").disabled=false;
top.document.getElementById("Insert_Type_de_prélèvement_Type_de_prélèvement0").disabled=true;
top.document.getElementById("Delete_Type_de_prélèvement_Type_de_prélèvement0").disabled=true;
top.document.getElementById("Update_Type_de_prélèvement_Type_de_prélèvement0").disabled=true;
 var Maitre=TAB_GLOBAL_COMPO[241];
 /* Pour une insertion on désectionne */
 var tree=Maitre.getComposantXul();
 if (tree.view!=null)
 {
 	tree.currentIndex=-1;
 	tree.view.selection.clearSelection();
 }
return TAB_COMPO_PPTES[241].NewCle;
}

function Delete_Type_de_prélèvement_Type_de_prélèvement0()
{
 if (TAB_GLOBAL_COMPO[241].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement à suprimer");
 	return;
 }
 /* On recupère le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[241];
 if (confirm("Voulez vous vraiment supprimer l'enregistrement en cours ?"))
 {
	TAB_COMPO_PPTES[241].Action_en_cours = DELETE;
 	User_Delete_Type_de_prélèvement_Type_de_prélèvement0(Maitre);
	Maitre.RefreshTotal();
	Filtre_Dep_Type_de_prélèvement_0.OnClose(true);
 }
}

function Update_Type_de_prélèvement_Type_de_prélèvement0()
{
 if (TAB_GLOBAL_COMPO[241].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement à mettre à jour");
 	return -1;
 }
 TAB_COMPO_PPTES[241].Action_en_cours = UPDATE;
/* On calcule la nouvelle clé */
 TAB_COMPO_PPTES[241].NewCle = TAB_GLOBAL_COMPO[241].getCleVal();
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[241].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[243];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[244];
 Esclave_1.ActiverComposant(true);
 var Esclave_2=TAB_GLOBAL_COMPO[245];
 Esclave_2.ActiverComposant(true);
top.document.getElementById("Validate_Type_de_prélèvement_Type_de_prélèvement0").disabled=false;
top.document.getElementById("Annuler_Type_de_prélèvement_Type_de_prélèvement0").disabled=false;
top.document.getElementById("Insert_Type_de_prélèvement_Type_de_prélèvement0").disabled=true;
top.document.getElementById("Delete_Type_de_prélèvement_Type_de_prélèvement0").disabled=true;
top.document.getElementById("Update_Type_de_prélèvement_Type_de_prélèvement0").disabled=true;
return TAB_COMPO_PPTES[241].NewCle;
}

function Validate_Type_de_prélèvement_Type_de_prélèvement0(retour)
{
 /* Retour à l'onget appellant si appelle par gérer */
if (retour==null)
	retour=true;

 /* On recupère le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[241];
 /* On recupère la clé du nouvel enregistrement */
 var NewCle=null;
 switch(TAB_COMPO_PPTES[241].Action_en_cours){
	case INSERT :
	if ((NewCle = User_Insert_Type_de_prélèvement_Type_de_prélèvement0(Maitre))==-1)
		return -1;
	break;
	case UPDATE :
	if ((User_Update_Type_de_prélèvement_Type_de_prélèvement0(Maitre))==-1)
		return -1;
	break;
 }
 /* On construit la requete pour ajouter les nouvelles cles */
 if (NewCle!=null)
 {
 	var ReqNewCle=new clReqSQL();
 	var OldUnion=Maitre.my_ReqRefresh.getUnion();
	if (OldUnion==null)
	{
		ReqNewCle.Cloner(Maitre.my_ReqInterne);
	}
	else
	{
		ReqNewCle.Cloner(OldUnion);
	}
 	ReqNewCle.AddWhere(Maitre.getCle()+" = "+NewCle,"OR");
	Maitre.Union(ReqNewCle);
 }
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[241].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[243];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[244];
 Esclave_1.ActiverComposant(false);
 var Esclave_2=TAB_GLOBAL_COMPO[245];
 Esclave_2.ActiverComposant(false);
top.document.getElementById("Validate_Type_de_prélèvement_Type_de_prélèvement0").disabled=true;
top.document.getElementById("Annuler_Type_de_prélèvement_Type_de_prélèvement0").disabled=true;
top.document.getElementById("Insert_Type_de_prélèvement_Type_de_prélèvement0").disabled=false;
top.document.getElementById("Delete_Type_de_prélèvement_Type_de_prélèvement0").disabled=false;
top.document.getElementById("Update_Type_de_prélèvement_Type_de_prélèvement0").disabled=false;
 if (NewCle==null)
 	NewCle=TAB_COMPO_PPTES[241].NewCle;
 Maitre.ForceNextSelection(NewCle)
 Maitre.RefreshTotal();
 if(retour)
 {
 Filtre_Dep_Type_de_prélèvement_0.OnClose(false);
 }
 TAB_COMPO_PPTES[241].Action_en_cours = null;
 return NewCle;
}

function Annuler_Type_de_prélèvement_Type_de_prélèvement0()
{
 TAB_COMPO_PPTES[241].Action_en_cours = null;
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[241].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[243];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[244];
 Esclave_1.ActiverComposant(false);
 var Esclave_2=TAB_GLOBAL_COMPO[245];
 Esclave_2.ActiverComposant(false);
top.document.getElementById("Validate_Type_de_prélèvement_Type_de_prélèvement0").disabled=true;
top.document.getElementById("Annuler_Type_de_prélèvement_Type_de_prélèvement0").disabled=true;
top.document.getElementById("Insert_Type_de_prélèvement_Type_de_prélèvement0").disabled=false;
top.document.getElementById("Delete_Type_de_prélèvement_Type_de_prélèvement0").disabled=false;
top.document.getElementById("Update_Type_de_prélèvement_Type_de_prélèvement0").disabled=false;
}






/* *********************************************** 
         FONCTIONS POUR L'ONGLET Produits de récolte
   ***********************************************/ 

 /* FILTRES DE RELATION ENTRE ONGLETS => VARIABLES GLOBALES POUR ETRE ACCESSIBLES DEPUIS INTERFACE_USER.JS */

function OuvrirOnglet_Produits_de_récolte()
{
 var tabs = top.document.getElementById("Tous_les_onglets");
 tabs.selectedItem = top.document.getElementById("Onglet_Produits_de_récolte");
}

function Insert_Produits_de_récolte_Produits_de_récolte0()
{
 TAB_COMPO_PPTES[246].Action_en_cours = INSERT;
/* On calcule la nouvelle clé */
 TAB_COMPO_PPTES[246].NewCle = getNewCle("produitrecolte");
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[246].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[248];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[249];
 Esclave_1.ActiverComposant(true);
 var Esclave_2=TAB_GLOBAL_COMPO[250];
 Esclave_2.ActiverComposant(true);
 var Esclave_3=TAB_GLOBAL_COMPO[251];
 Esclave_3.ActiverComposant(true);
 var Esclave_4=TAB_GLOBAL_COMPO[252];
 Esclave_4.ActiverComposant(true);
 var Esclave_5=TAB_GLOBAL_COMPO[253];
 Esclave_5.ActiverComposant(true);
 var Esclave_6=TAB_GLOBAL_COMPO[254];
 Esclave_6.ActiverComposant(true);
 var Esclave_7=TAB_GLOBAL_COMPO[255];
 Esclave_7.ActiverComposant(true);
top.document.getElementById("Validate_Produits_de_récolte_Produits_de_récolte0").disabled=false;
top.document.getElementById("Annuler_Produits_de_récolte_Produits_de_récolte0").disabled=false;
top.document.getElementById("Insert_Produits_de_récolte_Produits_de_récolte0").disabled=true;
top.document.getElementById("Delete_Produits_de_récolte_Produits_de_récolte0").disabled=true;
top.document.getElementById("Update_Produits_de_récolte_Produits_de_récolte0").disabled=true;
 var Maitre=TAB_GLOBAL_COMPO[246];
 /* Pour une insertion on désectionne */
 var tree=Maitre.getComposantXul();
 if (tree.view!=null)
 {
 	tree.currentIndex=-1;
 	tree.view.selection.clearSelection();
 }
return TAB_COMPO_PPTES[246].NewCle;
}

function Delete_Produits_de_récolte_Produits_de_récolte0()
{
 if (TAB_GLOBAL_COMPO[246].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement à suprimer");
 	return;
 }
 /* On recupère le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[246];
 if (confirm("Voulez vous vraiment supprimer l'enregistrement en cours ?"))
 {
	TAB_COMPO_PPTES[246].Action_en_cours = DELETE;
 	User_Delete_Produits_de_récolte_Produits_de_récolte0(Maitre);
	Maitre.RefreshTotal();
 }
}

function Update_Produits_de_récolte_Produits_de_récolte0()
{
 if (TAB_GLOBAL_COMPO[246].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement à mettre à jour");
 	return -1;
 }
 TAB_COMPO_PPTES[246].Action_en_cours = UPDATE;
/* On calcule la nouvelle clé */
 TAB_COMPO_PPTES[246].NewCle = TAB_GLOBAL_COMPO[246].getCleVal();
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[246].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[248];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[249];
 Esclave_1.ActiverComposant(true);
 var Esclave_2=TAB_GLOBAL_COMPO[250];
 Esclave_2.ActiverComposant(true);
 var Esclave_3=TAB_GLOBAL_COMPO[251];
 Esclave_3.ActiverComposant(true);
 var Esclave_4=TAB_GLOBAL_COMPO[252];
 Esclave_4.ActiverComposant(true);
 var Esclave_5=TAB_GLOBAL_COMPO[253];
 Esclave_5.ActiverComposant(true);
 var Esclave_6=TAB_GLOBAL_COMPO[254];
 Esclave_6.ActiverComposant(true);
 var Esclave_7=TAB_GLOBAL_COMPO[255];
 Esclave_7.ActiverComposant(true);
top.document.getElementById("Validate_Produits_de_récolte_Produits_de_récolte0").disabled=false;
top.document.getElementById("Annuler_Produits_de_récolte_Produits_de_récolte0").disabled=false;
top.document.getElementById("Insert_Produits_de_récolte_Produits_de_récolte0").disabled=true;
top.document.getElementById("Delete_Produits_de_récolte_Produits_de_récolte0").disabled=true;
top.document.getElementById("Update_Produits_de_récolte_Produits_de_récolte0").disabled=true;
return TAB_COMPO_PPTES[246].NewCle;
}

function Validate_Produits_de_récolte_Produits_de_récolte0(retour)
{
 /* Retour à l'onget appellant si appelle par gérer */
if (retour==null)
	retour=true;

 /* On recupère le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[246];
 /* On recupère la clé du nouvel enregistrement */
 var NewCle=null;
 switch(TAB_COMPO_PPTES[246].Action_en_cours){
	case INSERT :
	if ((NewCle = User_Insert_Produits_de_récolte_Produits_de_récolte0(Maitre))==-1)
		return -1;
	break;
	case UPDATE :
	if ((User_Update_Produits_de_récolte_Produits_de_récolte0(Maitre))==-1)
		return -1;
	break;
 }
 /* On construit la requete pour ajouter les nouvelles cles */
 if (NewCle!=null)
 {
 	var ReqNewCle=new clReqSQL();
 	var OldUnion=Maitre.my_ReqRefresh.getUnion();
	if (OldUnion==null)
	{
		ReqNewCle.Cloner(Maitre.my_ReqInterne);
	}
	else
	{
		ReqNewCle.Cloner(OldUnion);
	}
 	ReqNewCle.AddWhere(Maitre.getCle()+" = "+NewCle,"OR");
	Maitre.Union(ReqNewCle);
 }
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[246].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[248];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[249];
 Esclave_1.ActiverComposant(false);
 var Esclave_2=TAB_GLOBAL_COMPO[250];
 Esclave_2.ActiverComposant(false);
 var Esclave_3=TAB_GLOBAL_COMPO[251];
 Esclave_3.ActiverComposant(false);
 var Esclave_4=TAB_GLOBAL_COMPO[252];
 Esclave_4.ActiverComposant(false);
 var Esclave_5=TAB_GLOBAL_COMPO[253];
 Esclave_5.ActiverComposant(false);
 var Esclave_6=TAB_GLOBAL_COMPO[254];
 Esclave_6.ActiverComposant(false);
 var Esclave_7=TAB_GLOBAL_COMPO[255];
 Esclave_7.ActiverComposant(false);
top.document.getElementById("Validate_Produits_de_récolte_Produits_de_récolte0").disabled=true;
top.document.getElementById("Annuler_Produits_de_récolte_Produits_de_récolte0").disabled=true;
top.document.getElementById("Insert_Produits_de_récolte_Produits_de_récolte0").disabled=false;
top.document.getElementById("Delete_Produits_de_récolte_Produits_de_récolte0").disabled=false;
top.document.getElementById("Update_Produits_de_récolte_Produits_de_récolte0").disabled=false;
 if (NewCle==null)
 	NewCle=TAB_COMPO_PPTES[246].NewCle;
 Maitre.ForceNextSelection(NewCle)
 Maitre.RefreshTotal();
 if(retour)
 {
 }
 TAB_COMPO_PPTES[246].Action_en_cours = null;
 return NewCle;
}

function Annuler_Produits_de_récolte_Produits_de_récolte0()
{
 TAB_COMPO_PPTES[246].Action_en_cours = null;
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[246].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[248];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[249];
 Esclave_1.ActiverComposant(false);
 var Esclave_2=TAB_GLOBAL_COMPO[250];
 Esclave_2.ActiverComposant(false);
 var Esclave_3=TAB_GLOBAL_COMPO[251];
 Esclave_3.ActiverComposant(false);
 var Esclave_4=TAB_GLOBAL_COMPO[252];
 Esclave_4.ActiverComposant(false);
 var Esclave_5=TAB_GLOBAL_COMPO[253];
 Esclave_5.ActiverComposant(false);
 var Esclave_6=TAB_GLOBAL_COMPO[254];
 Esclave_6.ActiverComposant(false);
 var Esclave_7=TAB_GLOBAL_COMPO[255];
 Esclave_7.ActiverComposant(false);
top.document.getElementById("Validate_Produits_de_récolte_Produits_de_récolte0").disabled=true;
top.document.getElementById("Annuler_Produits_de_récolte_Produits_de_récolte0").disabled=true;
top.document.getElementById("Insert_Produits_de_récolte_Produits_de_récolte0").disabled=false;
top.document.getElementById("Delete_Produits_de_récolte_Produits_de_récolte0").disabled=false;
top.document.getElementById("Update_Produits_de_récolte_Produits_de_récolte0").disabled=false;
}






/* *********************************************** 
         FONCTIONS POUR L'ONGLET Ventes
   ***********************************************/ 

 /* FILTRES DE RELATION ENTRE ONGLETS => VARIABLES GLOBALES POUR ETRE ACCESSIBLES DEPUIS INTERFACE_USER.JS */

function OuvrirOnglet_Ventes()
{
 var tabs = top.document.getElementById("Tous_les_onglets");
 tabs.selectedItem = top.document.getElementById("Onglet_Ventes");
}

function Insert_Ventes_Ventes0()
{
 TAB_COMPO_PPTES[256].Action_en_cours = INSERT;
/* On calcule la nouvelle clé */
 TAB_COMPO_PPTES[256].NewCle = getNewCle("vente");
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[256].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[262];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[263];
 Esclave_1.ActiverComposant(true);
 var Esclave_2=TAB_GLOBAL_COMPO[264];
 Esclave_2.ActiverComposant(true);
 var Esclave_3=TAB_GLOBAL_COMPO[265];
 Esclave_3.ActiverComposant(true);
 var Esclave_4=TAB_GLOBAL_COMPO[266];
 Esclave_4.ActiverComposant(true);
 var Esclave_5=TAB_GLOBAL_COMPO[267];
 Esclave_5.ActiverComposant(true);
top.document.getElementById("Validate_Ventes_Ventes0").disabled=false;
top.document.getElementById("Annuler_Ventes_Ventes0").disabled=false;
top.document.getElementById("Insert_Ventes_Ventes0").disabled=true;
top.document.getElementById("Delete_Ventes_Ventes0").disabled=true;
top.document.getElementById("Update_Ventes_Ventes0").disabled=true;
 var Maitre=TAB_GLOBAL_COMPO[256];
 /* Pour une insertion on désectionne */
 var tree=Maitre.getComposantXul();
 if (tree.view!=null)
 {
 	tree.currentIndex=-1;
 	tree.view.selection.clearSelection();
 }
return TAB_COMPO_PPTES[256].NewCle;
}

function Delete_Ventes_Ventes0()
{
 if (TAB_GLOBAL_COMPO[256].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement à suprimer");
 	return;
 }
 /* On recupère le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[256];
 if (confirm("Voulez vous vraiment supprimer l'enregistrement en cours ?"))
 {
	TAB_COMPO_PPTES[256].Action_en_cours = DELETE;
 	User_Delete_Ventes_Ventes0(Maitre);
	Maitre.RefreshTotal();
 }
}

function Update_Ventes_Ventes0()
{
 if (TAB_GLOBAL_COMPO[256].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement à mettre à jour");
 	return -1;
 }
 TAB_COMPO_PPTES[256].Action_en_cours = UPDATE;
/* On calcule la nouvelle clé */
 TAB_COMPO_PPTES[256].NewCle = TAB_GLOBAL_COMPO[256].getCleVal();
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[256].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[262];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[263];
 Esclave_1.ActiverComposant(true);
 var Esclave_2=TAB_GLOBAL_COMPO[264];
 Esclave_2.ActiverComposant(true);
 var Esclave_3=TAB_GLOBAL_COMPO[265];
 Esclave_3.ActiverComposant(true);
 var Esclave_4=TAB_GLOBAL_COMPO[266];
 Esclave_4.ActiverComposant(true);
 var Esclave_5=TAB_GLOBAL_COMPO[267];
 Esclave_5.ActiverComposant(true);
top.document.getElementById("Validate_Ventes_Ventes0").disabled=false;
top.document.getElementById("Annuler_Ventes_Ventes0").disabled=false;
top.document.getElementById("Insert_Ventes_Ventes0").disabled=true;
top.document.getElementById("Delete_Ventes_Ventes0").disabled=true;
top.document.getElementById("Update_Ventes_Ventes0").disabled=true;
return TAB_COMPO_PPTES[256].NewCle;
}

function Validate_Ventes_Ventes0(retour)
{
 /* Retour à l'onget appellant si appelle par gérer */
if (retour==null)
	retour=true;

 /* On recupère le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[256];
 /* On recupère la clé du nouvel enregistrement */
 var NewCle=null;
 switch(TAB_COMPO_PPTES[256].Action_en_cours){
	case INSERT :
	if ((NewCle = User_Insert_Ventes_Ventes0(Maitre))==-1)
		return -1;
	break;
	case UPDATE :
	if ((User_Update_Ventes_Ventes0(Maitre))==-1)
		return -1;
	break;
 }
 /* On construit la requete pour ajouter les nouvelles cles */
 if (NewCle!=null)
 {
 	var ReqNewCle=new clReqSQL();
 	var OldUnion=Maitre.my_ReqRefresh.getUnion();
	if (OldUnion==null)
	{
		ReqNewCle.Cloner(Maitre.my_ReqInterne);
	}
	else
	{
		ReqNewCle.Cloner(OldUnion);
	}
 	ReqNewCle.AddWhere(Maitre.getCle()+" = "+NewCle,"OR");
	Maitre.Union(ReqNewCle);
 }
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[256].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[262];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[263];
 Esclave_1.ActiverComposant(false);
 var Esclave_2=TAB_GLOBAL_COMPO[264];
 Esclave_2.ActiverComposant(false);
 var Esclave_3=TAB_GLOBAL_COMPO[265];
 Esclave_3.ActiverComposant(false);
 var Esclave_4=TAB_GLOBAL_COMPO[266];
 Esclave_4.ActiverComposant(false);
 var Esclave_5=TAB_GLOBAL_COMPO[267];
 Esclave_5.ActiverComposant(false);
top.document.getElementById("Validate_Ventes_Ventes0").disabled=true;
top.document.getElementById("Annuler_Ventes_Ventes0").disabled=true;
top.document.getElementById("Insert_Ventes_Ventes0").disabled=false;
top.document.getElementById("Delete_Ventes_Ventes0").disabled=false;
top.document.getElementById("Update_Ventes_Ventes0").disabled=false;
 if (NewCle==null)
 	NewCle=TAB_COMPO_PPTES[256].NewCle;
 Maitre.ForceNextSelection(NewCle)
 Maitre.RefreshTotal();
 if(retour)
 {
 }
 TAB_COMPO_PPTES[256].Action_en_cours = null;
 return NewCle;
}

function Annuler_Ventes_Ventes0()
{
 TAB_COMPO_PPTES[256].Action_en_cours = null;
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[256].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[262];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[263];
 Esclave_1.ActiverComposant(false);
 var Esclave_2=TAB_GLOBAL_COMPO[264];
 Esclave_2.ActiverComposant(false);
 var Esclave_3=TAB_GLOBAL_COMPO[265];
 Esclave_3.ActiverComposant(false);
 var Esclave_4=TAB_GLOBAL_COMPO[266];
 Esclave_4.ActiverComposant(false);
 var Esclave_5=TAB_GLOBAL_COMPO[267];
 Esclave_5.ActiverComposant(false);
top.document.getElementById("Validate_Ventes_Ventes0").disabled=true;
top.document.getElementById("Annuler_Ventes_Ventes0").disabled=true;
top.document.getElementById("Insert_Ventes_Ventes0").disabled=false;
top.document.getElementById("Delete_Ventes_Ventes0").disabled=false;
top.document.getElementById("Update_Ventes_Ventes0").disabled=false;
}






/* *********************************************** 
         FONCTIONS POUR L'ONGLET Stock d'achat
   ***********************************************/ 

 /* FILTRES DE RELATION ENTRE ONGLETS => VARIABLES GLOBALES POUR ETRE ACCESSIBLES DEPUIS INTERFACE_USER.JS */

function OuvrirOnglet_Stock_d_achat()
{
 var tabs = top.document.getElementById("Tous_les_onglets");
 tabs.selectedItem = top.document.getElementById("Onglet_Stock_d_achat");
}





function agrisig_window_Chargement()
{
pgsql_init(true);
if (!pgsql_getConnectionState())
{
	top.close();
	return;
}
Init_ALeDroit();
var Col_N0_Sous_îlot_De_Application_de_profil_Application__de_profil0=new clAttribut("si_libelle","sousilot",null);

var Joint_Col_N0_Sous_îlot_De_Application_de_profil_Application__de_profil0=new clJointureMulti("applique",
	new Array(
	new stJointure("sousilot","al_sousilot","si_numero",null,true)
	));
var Col_N1_Profil_De_Application_de_profil_Application__de_profil0=new clAttribut("pr_nom","profil",null);

var Joint_Col_N1_Profil_De_Application_de_profil_Application__de_profil0=new clJointureMulti("applique",
	new Array(
	new stJointure("profil","al_profil","pr_numero",null,true)
	));
var Col_N2_Debut_De_Application_de_profil_Application__de_profil0=new clAttribut("al_periodedebut","applique",null);

var Col_N3_Fin_De_Application_de_profil_Application__de_profil0=new clAttribut("al_periodefin","applique",null);

var Application_de_profil_Sous_îlot_1=new clAttribut("si_libelle","sousilot",null);


	/* Ce composant représente: sousilot.si_libelle sous le nom "Sous îlot" */
var Compo_Application_de_profil_Sous_îlot_1=new clCompoListeDeroulanteSimple(Application_de_profil_Sous_îlot_1,null,"Sous îlot");
var Joint_Esclave_Application_de_profil_Sous_îlot_1=new clJointureMulti("applique",
	new Array(
	new stJointure("sousilot","al_sousilot","si_numero",null,false)
	));
var Application_de_profil_Profil_2=new clAttribut("pr_nom","profil",null);


	/* Ce composant représente: profil.pr_nom sous le nom "Profil" */
var Compo_Application_de_profil_Profil_2=new clCompoListeDeroulanteSimple(Application_de_profil_Profil_2,new Array(clCompoListeDeroulanteSimple.prototype.FiltreParDefaut(),Filtre_Profil_Applique=new clInterfaceFiltragePermanant(),Filtre_Dep_Profils_0=new clInterfaceFiltrageRelationOnglet("Profils",Gerer_Profils,OuvrirOnglet_Application_de_profil)),"Profil");
var Joint_Esclave_Application_de_profil_Profil_2=new clJointureMulti("applique",
	new Array(
	new stJointure("profil","al_profil","pr_numero",null,false)
	));
var Application_de_profil_Debut_3=new clAttribut("al_periodedebut","applique",null);


	/* Ce composant représente: applique.al_periodedebut sous le nom "Debut" */
var Compo_Application_de_profil_Debut_3=new clCompoTextBox(Application_de_profil_Debut_3,null,"Debut",false,false);
var Application_de_profil_Fin_4=new clAttribut("al_periodefin","applique",null);


	/* Ce composant représente: applique.al_periodefin sous le nom "Fin" */
var Compo_Application_de_profil_Fin_4=new clCompoTextBox(Application_de_profil_Fin_4,null,"Fin",false,false);
var Col_N0_Article_De_Application_de_profil_Lot_s__5=new clAttribut("ar_nom","article",null);

var Joint_Col_N0_Article_De_Application_de_profil_Lot_s__5=new clJointureMulti("lot",
	new Array(
	new stJointure("article","lo_article","ar_numero",null,true)
	));
var Col_N1_N_lot_De_Application_de_profil_Lot_s__5=new clAttribut("lo_lot","lot",null);

var Application_de_profil_Article_6=new clAttribut("ar_nom","article",null);


	/* Ce composant représente: article.ar_nom sous le nom "Article" */
var Compo_Application_de_profil_Article_6=new clCompoListeDeroulanteSimple(Application_de_profil_Article_6,null,"Article");
var Joint_Esclave_Application_de_profil_Article_6=new clJointureMulti("lot",
	new Array(
	new stJointure("article","lo_article","ar_numero",null,false)
	));
var Application_de_profil_N_lot_7=new clAttribut("lo_lot","lot",null);


	/* Ce composant représente: lot.lo_lot sous le nom "N°lot" */
var Compo_Application_de_profil_N_lot_7=new clCompoTextBox(Application_de_profil_N_lot_7,null,"N°lot",false,false);
var Application_de_profil_Lot_s__5=new clEnsembleAttributs("lot",
	new Array(
	new clLiaison(Joint_Col_N0_Article_De_Application_de_profil_Lot_s__5,Col_N0_Article_De_Application_de_profil_Lot_s__5)
	,new clLiaison(null,Col_N1_N_lot_De_Application_de_profil_Lot_s__5)
	),
	new Array(
	new clLiaison(Joint_Esclave_Application_de_profil_Article_6,Application_de_profil_Article_6)
	,new clLiaison(null,Application_de_profil_N_lot_7)
	));

var Titre_Application_de_profil_Lot_s__5=new Array("Article","N°lot");

	/* Ce composant représente: des éléments de la table lot sous le nom "Lot(s)" */
var Compo_Application_de_profil_Lot_s__5=new clCompoListe(Application_de_profil_Lot_s__5,null,Titre_Application_de_profil_Lot_s__5,"Lot(s)",true,false);
var Joint_Esclave_Application_de_profil_Lot_s__5=new clJointureMulti("applique",
	new Array(
	new stJointure("lot","al_numero","lo_applique",null,false)
	));
var Application_de_profil_Application__de_profil0=new clEnsembleAttributs("applique",
	new Array(
	new clLiaison(Joint_Col_N0_Sous_îlot_De_Application_de_profil_Application__de_profil0,Col_N0_Sous_îlot_De_Application_de_profil_Application__de_profil0)
	,new clLiaison(Joint_Col_N1_Profil_De_Application_de_profil_Application__de_profil0,Col_N1_Profil_De_Application_de_profil_Application__de_profil0)
	,new clLiaison(null,Col_N2_Debut_De_Application_de_profil_Application__de_profil0)
	,new clLiaison(null,Col_N3_Fin_De_Application_de_profil_Application__de_profil0)
	),
	new Array(
	new clLiaison(Joint_Esclave_Application_de_profil_Sous_îlot_1,Application_de_profil_Sous_îlot_1)
	,new clLiaison(Joint_Esclave_Application_de_profil_Profil_2,Application_de_profil_Profil_2)
	,new clLiaison(null,Application_de_profil_Debut_3)
	,new clLiaison(null,Application_de_profil_Fin_4)
	,new clLiaison(Joint_Esclave_Application_de_profil_Lot_s__5,Application_de_profil_Lot_s__5)
	));

var Titre_Application_de_profil_Application__de_profil0=new Array("Sous îlot","Profil","Debut","Fin");

	/* Ce composant représente: des éléments de la table applique sous le nom "Application  de profil" */
var Compo_Application_de_profil_Application__de_profil0=new clCompoListe(Application_de_profil_Application__de_profil0,new Array(new clInterfaceFiltrageVide()),Titre_Application_de_profil_Application__de_profil0,"Application  de profil",true,false);

	/* Ce composant représente: applique.undefined sous le nom "Application  de profil" */
 if(ALeDroit(0,"applique"))
 {
Compo_Application_de_profil_Application__de_profil0.GenererXUL(top.document.getElementById("Application_de_profil_Application__de_profil0"));

 }

	/* On l'ajoute au tableau global à l'indice 3*/
top.TAB_GLOBAL_COMPO[3]=Compo_Application_de_profil_Application__de_profil0;

	/* Ce composant représente: des éléments de la table sousilot sous le nom "Sous îlot" */
 if(ALeDroit(0,"sousilot"))
 {
Compo_Application_de_profil_Sous_îlot_1.GenererXUL(top.document.getElementById("Application_de_profil_Application__de_profil0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 8*/
top.TAB_GLOBAL_COMPO[8]=Compo_Application_de_profil_Sous_îlot_1;

	/* Ce composant représente: des éléments de la table profil sous le nom "Profil" */
 if(ALeDroit(0,"profil"))
 {
Compo_Application_de_profil_Profil_2.GenererXUL(top.document.getElementById("Application_de_profil_Application__de_profil0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 9*/
top.TAB_GLOBAL_COMPO[9]=Compo_Application_de_profil_Profil_2;

	/* Ce composant représente: des éléments de la table applique sous le nom "Debut" */
 if(ALeDroit(0,"applique"))
 {
Compo_Application_de_profil_Debut_3.GenererXUL(top.document.getElementById("Application_de_profil_Application__de_profil0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 10*/
top.TAB_GLOBAL_COMPO[10]=Compo_Application_de_profil_Debut_3;

	/* Ce composant représente: des éléments de la table applique sous le nom "Fin" */
 if(ALeDroit(0,"applique"))
 {
Compo_Application_de_profil_Fin_4.GenererXUL(top.document.getElementById("Application_de_profil_Application__de_profil0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 11*/
top.TAB_GLOBAL_COMPO[11]=Compo_Application_de_profil_Fin_4;

	/* Ce composant représente: lot.undefined sous le nom "Lot(s)" */
 if(ALeDroit(0,"lot"))
 {
Compo_Application_de_profil_Lot_s__5.GenererXUL(top.document.getElementById("Application_de_profil_Lot_s__5"));

 }

	/* On l'ajoute au tableau global à l'indice 12*/
top.TAB_GLOBAL_COMPO[12]=Compo_Application_de_profil_Lot_s__5;

	/* Ce composant représente: des éléments de la table article sous le nom "Article" */
var Joint_Profil_Applique=new clJointureMulti("profil",
	new Array(
		new stJointure("definiprofil","pr_numero","dp_profil",null,false),
		new stJointure("article","dp_article","ar_numero",null,false)));
Filtre_Profil_Applique.setComposant(Compo_Application_de_profil_Article_6,Joint_Profil_Applique);
 if(ALeDroit(0,"article"))
 {
Compo_Application_de_profil_Article_6.GenererXUL(top.document.getElementById("Application_de_profil_Lot_s__5_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 15*/
top.TAB_GLOBAL_COMPO[15]=Compo_Application_de_profil_Article_6;

	/* Ce composant représente: des éléments de la table lot sous le nom "N°lot" */
 if(ALeDroit(0,"lot"))
 {
Compo_Application_de_profil_N_lot_7.GenererXUL(top.document.getElementById("Application_de_profil_Lot_s__5_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 16*/
top.TAB_GLOBAL_COMPO[16]=Compo_Application_de_profil_N_lot_7;
var Col_N0_Nom_De_Profils_Profils_existants0=new clAttribut("pr_nom","profil",null);

var Profils_Nom_1=new clAttribut("pr_nom","profil",null);


	/* Ce composant représente: profil.pr_nom sous le nom "Nom" */
var Compo_Profils_Nom_1=new clCompoTextBox(Profils_Nom_1,null,"Nom",false,false);
var Profils_Note_2=new clAttribut("note","profil",null);


	/* Ce composant représente: profil.note sous le nom "Note" */
var Compo_Profils_Note_2=new clCompoTextBox(Profils_Note_2,null,"Note",false,true);
var Profils_Profil_partagé_3=new clAttribut("pr_partage","profil",null);


	/* Ce composant représente: profil.pr_partage sous le nom "Profil partagé" */
var Compo_Profils_Profil_partagé_3=new clCompoCheckBox(Profils_Profil_partagé_3,null,"Profil partagé");
var Profils_Couleur_4=new clAttribut("couleur","profil",null);


	/* Ce composant représente: profil.couleur sous le nom "Couleur" */
var Compo_Profils_Couleur_4=new clCompoColor(Profils_Couleur_4,null,"Couleur");
var Col_N0_Nom_De_Profils_Familles_du_profil_6=new clAttribut("tp_nom","typeprofil",null);

var Col_N1_Note_De_Profils_Familles_du_profil_6=new clAttribut("note","typeprofil",null);

var Profils_Familles_du_profil_6=new clEnsembleAttributs("typeprofil",
	new Array(
	new clLiaison(null,Col_N0_Nom_De_Profils_Familles_du_profil_6)
	,new clLiaison(null,Col_N1_Note_De_Profils_Familles_du_profil_6)
	),
	null);

var Titre_Profils_Familles_du_profil_6=new Array("Nom","Note");

	/* Ce composant représente: des éléments de la table typeprofil sous le nom "Familles du profil" */
var Compo_Profils_Familles_du_profil_6=new clCompoListe(Profils_Familles_du_profil_6,null,Titre_Profils_Familles_du_profil_6,"Familles du profil",true,true);
var Joint_Esclave_Profils_Familles_du_profil_6=new clJointureMulti("profil",
	new Array(
	new stJointure("estdetype","pr_numero","et_profil",null,false)
	,new stJointure("typeprofil","et_typeprofil","tp_numero",null,false)
	));
var Col_N0_Nom_De_Profils_Articles_présents_dans_le_profil_7=new clAttribut("ar_nom","article",null);

var Joint_Col_N0_Nom_De_Profils_Articles_présents_dans_le_profil_7=new clJointureMulti("definiprofil",
	new Array(
	new stJointure("article","dp_article","ar_numero",null,true)
	));
var Col_N1_Densité_De_Profils_Articles_présents_dans_le_profil_7=new clAttribut("dp_densite","definiprofil",null);

var Profils_Article_8=new clAttribut("ar_nom","article",null);


	/* Ce composant représente: article.ar_nom sous le nom "Article" */
var Compo_Profils_Article_8=new clCompoListeDeroulanteSimple(Profils_Article_8,new Array(clCompoListeDeroulanteSimple.prototype.FiltreParDefaut(),Filtre_Dep_Articles_0=new clInterfaceFiltrageRelationOnglet("Articles",Gerer_Articles,OuvrirOnglet_Profils)),"Article");
var Joint_Esclave_Profils_Article_8=new clJointureMulti("definiprofil",
	new Array(
	new stJointure("article","dp_article","ar_numero",null,false)
	));
var Profils_Densité_9=new clAttribut("dp_densite","definiprofil",null);


	/* Ce composant représente: definiprofil.dp_densite sous le nom "Densité" */
var Compo_Profils_Densité_9=new clCompoTextBox(Profils_Densité_9,null,"Densité",false,false);
var Profils_Articles_présents_dans_le_profil_7=new clEnsembleAttributs("definiprofil",
	new Array(
	new clLiaison(Joint_Col_N0_Nom_De_Profils_Articles_présents_dans_le_profil_7,Col_N0_Nom_De_Profils_Articles_présents_dans_le_profil_7)
	,new clLiaison(null,Col_N1_Densité_De_Profils_Articles_présents_dans_le_profil_7)
	),
	new Array(
	new clLiaison(Joint_Esclave_Profils_Article_8,Profils_Article_8)
	,new clLiaison(null,Profils_Densité_9)
	));

var Titre_Profils_Articles_présents_dans_le_profil_7=new Array("Nom","Densité");

	/* Ce composant représente: des éléments de la table definiprofil sous le nom "Articles présents dans le profil" */
var Compo_Profils_Articles_présents_dans_le_profil_7=new clCompoListe(Profils_Articles_présents_dans_le_profil_7,null,Titre_Profils_Articles_présents_dans_le_profil_7,"Articles présents dans le profil",true,false);
var Joint_Esclave_Profils_Articles_présents_dans_le_profil_7=new clJointureMulti("profil",
	new Array(
	new stJointure("definiprofil","pr_numero","dp_profil",null,false)
	));
var Col_N0_Nom_De_Profils_Type_de_couche_11=new clAttribut("tc_nom","typecouche",null);

var Col_N1_Note_De_Profils_Type_de_couche_11=new clAttribut("note","typecouche",null);

var Profils_Type_de_couche_11=new clEnsembleAttributs("typecouche",
	new Array(
	new clLiaison(null,Col_N0_Nom_De_Profils_Type_de_couche_11)
	,new clLiaison(null,Col_N1_Note_De_Profils_Type_de_couche_11)
	),
	null);

var Titre_Profils_Type_de_couche_11=new Array("Nom","Note");

	/* Ce composant représente: des éléments de la table typecouche sous le nom "Type de couche" */
var Compo_Profils_Type_de_couche_11=new clCompoListe(Profils_Type_de_couche_11,null,Titre_Profils_Type_de_couche_11,"Type de couche",true,true);
var Joint_Esclave_Profils_Type_de_couche_11=new clJointureMulti("profil",
	new Array(
	new stJointure("profiltypecouche","pr_numero","pc_profil",null,false)
	,new stJointure("typecouche","pc_typecouche","tc_numero",null,false)
	));
var Profils_Profils_existants0=new clEnsembleAttributs("profil",
	new Array(
	new clLiaison(null,Col_N0_Nom_De_Profils_Profils_existants0)
	),
	new Array(
	new clLiaison(null,Profils_Nom_1)
	,new clLiaison(null,Profils_Note_2)
	,new clLiaison(null,Profils_Profil_partagé_3)
	,new clLiaison(null,Profils_Couleur_4)
	,new clLiaison(Joint_Esclave_Profils_Familles_du_profil_6,Profils_Familles_du_profil_6)
	,new clLiaison(Joint_Esclave_Profils_Articles_présents_dans_le_profil_7,Profils_Articles_présents_dans_le_profil_7)
	,new clLiaison(Joint_Esclave_Profils_Type_de_couche_11,Profils_Type_de_couche_11)
	));

var Titre_Profils_Profils_existants0=new Array("Nom");

	/* Ce composant représente: des éléments de la table profil sous le nom "Profils existants" */
var Compo_Profils_Profils_existants0=new clCompoListe(Profils_Profils_existants0,new Array(new clInterfaceFiltrageVide()),Titre_Profils_Profils_existants0,"Profils existants",true,false);
var Col_N0_Nom_De_Profils_Indpt_Familles_de_profil_existantes_5=new clAttribut("tp_nom","typeprofil",null);

var Col_N1_Note_De_Profils_Indpt_Familles_de_profil_existantes_5=new clAttribut("note","typeprofil",null);

var Profils_Indpt_Familles_de_profil_existantes_5=new clEnsembleAttributs("typeprofil",
	new Array(
	new clLiaison(null,Col_N0_Nom_De_Profils_Indpt_Familles_de_profil_existantes_5)
	,new clLiaison(null,Col_N1_Note_De_Profils_Indpt_Familles_de_profil_existantes_5)
	),
	null);

var Titre_Profils_Indpt_Familles_de_profil_existantes_5=new Array("Nom","Note");

	/* Ce composant représente: des éléments de la table typeprofil sous le nom "Familles de profil existantes" */
var Compo_Profils_Indpt_Familles_de_profil_existantes_5=new clCompoListe(Profils_Indpt_Familles_de_profil_existantes_5,new Array(new clInterfaceFiltrageVide(),Filtre_Dep_Famille_de_profil_0=new clInterfaceFiltrageRelationOnglet("Famille de profil",Gerer_Famille_de_profil,OuvrirOnglet_Profils)),Titre_Profils_Indpt_Familles_de_profil_existantes_5,"Familles de profil existantes",true,true);
var Col_N0_Nom_De_Profils_Indpt_Type_de_couche_existants_10=new clAttribut("tc_nom","typecouche",null);

var Col_N1_Note_De_Profils_Indpt_Type_de_couche_existants_10=new clAttribut("note","typecouche",null);

var Profils_Indpt_Type_de_couche_existants_10=new clEnsembleAttributs("typecouche",
	new Array(
	new clLiaison(null,Col_N0_Nom_De_Profils_Indpt_Type_de_couche_existants_10)
	,new clLiaison(null,Col_N1_Note_De_Profils_Indpt_Type_de_couche_existants_10)
	),
	null);

var Titre_Profils_Indpt_Type_de_couche_existants_10=new Array("Nom","Note");

	/* Ce composant représente: des éléments de la table typecouche sous le nom "Type de couche existants" */
var Compo_Profils_Indpt_Type_de_couche_existants_10=new clCompoListe(Profils_Indpt_Type_de_couche_existants_10,new Array(new clInterfaceFiltrageVide(),Filtre_Dep_Type_de_couche_0=new clInterfaceFiltrageRelationOnglet("Type de couche",Gerer_Type_de_couche,OuvrirOnglet_Profils)),Titre_Profils_Indpt_Type_de_couche_existants_10,"Type de couche existants",true,true);

	/* Ce composant représente: profil.undefined sous le nom "Profils existants" */
 if(ALeDroit(0,"profil"))
 {
Compo_Profils_Profils_existants0.GenererXUL(top.document.getElementById("Profils_Profils_existants0"));

 }

	/* On l'ajoute au tableau global à l'indice 17*/
top.TAB_GLOBAL_COMPO[17]=Compo_Profils_Profils_existants0;

	/* Ce composant représente: des éléments de la table profil sous le nom "Nom" */
 if(ALeDroit(0,"profil"))
 {
Compo_Profils_Nom_1.GenererXUL(top.document.getElementById("Profils_Profils_existants0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 19*/
top.TAB_GLOBAL_COMPO[19]=Compo_Profils_Nom_1;

	/* Ce composant représente: des éléments de la table profil sous le nom "Note" */
 if(ALeDroit(0,"profil"))
 {
Compo_Profils_Note_2.GenererXUL(top.document.getElementById("Profils_Profils_existants0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 20*/
top.TAB_GLOBAL_COMPO[20]=Compo_Profils_Note_2;

	/* Ce composant représente: des éléments de la table profil sous le nom "Profil partagé" */
 if(ALeDroit(0,"profil"))
 {
Compo_Profils_Profil_partagé_3.GenererXUL(top.document.getElementById("Profils_Profils_existants0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 21*/
top.TAB_GLOBAL_COMPO[21]=Compo_Profils_Profil_partagé_3;

	/* Ce composant représente: des éléments de la table profil sous le nom "Couleur" */
 if(ALeDroit(0,"profil"))
 {
Compo_Profils_Couleur_4.GenererXUL(top.document.getElementById("Profils_Profils_existants0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 22*/
top.TAB_GLOBAL_COMPO[22]=Compo_Profils_Couleur_4;

	/* Ce composant représente: typeprofil.undefined sous le nom "Familles de profil existantes" */
 if(ALeDroit(0,"typeprofil"))
 {
Compo_Profils_Indpt_Familles_de_profil_existantes_5.GenererXUL(top.document.getElementById("ListeDessus_Profils_Familles_du_profil_6"));

 }

	/* On l'ajoute au tableau global à l'indice 23*/
top.TAB_GLOBAL_COMPO[23]=Compo_Profils_Indpt_Familles_de_profil_existantes_5;

	/* Ce composant représente: typeprofil.undefined sous le nom "Familles du profil" */
 if(ALeDroit(0,"typeprofil"))
 {
Compo_Profils_Familles_du_profil_6.GenererXUL(top.document.getElementById("Profils_Familles_du_profil_6"));

 }

	/* On l'ajoute au tableau global à l'indice 26*/
top.TAB_GLOBAL_COMPO[26]=Compo_Profils_Familles_du_profil_6;

	/* Ce composant représente: definiprofil.undefined sous le nom "Articles présents dans le profil" */
 if(ALeDroit(0,"definiprofil"))
 {
Compo_Profils_Articles_présents_dans_le_profil_7.GenererXUL(top.document.getElementById("Profils_Articles_présents_dans_le_profil_7"));

 }

	/* On l'ajoute au tableau global à l'indice 29*/
top.TAB_GLOBAL_COMPO[29]=Compo_Profils_Articles_présents_dans_le_profil_7;

	/* Ce composant représente: des éléments de la table article sous le nom "Article" */
 if(ALeDroit(0,"article"))
 {
Compo_Profils_Article_8.GenererXUL(top.document.getElementById("Profils_Articles_présents_dans_le_profil_7_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 32*/
top.TAB_GLOBAL_COMPO[32]=Compo_Profils_Article_8;

	/* Ce composant représente: des éléments de la table definiprofil sous le nom "Densité" */
 if(ALeDroit(0,"definiprofil"))
 {
Compo_Profils_Densité_9.GenererXUL(top.document.getElementById("Profils_Articles_présents_dans_le_profil_7_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 33*/
top.TAB_GLOBAL_COMPO[33]=Compo_Profils_Densité_9;

	/* Ce composant représente: typecouche.undefined sous le nom "Type de couche existants" */
 if(ALeDroit(0,"typecouche"))
 {
Compo_Profils_Indpt_Type_de_couche_existants_10.GenererXUL(top.document.getElementById("ListeDessus_Profils_Type_de_couche_11"));

 }

	/* On l'ajoute au tableau global à l'indice 34*/
top.TAB_GLOBAL_COMPO[34]=Compo_Profils_Indpt_Type_de_couche_existants_10;

	/* Ce composant représente: typecouche.undefined sous le nom "Type de couche" */
 if(ALeDroit(0,"typecouche"))
 {
Compo_Profils_Type_de_couche_11.GenererXUL(top.document.getElementById("Profils_Type_de_couche_11"));

 }

	/* On l'ajoute au tableau global à l'indice 37*/
top.TAB_GLOBAL_COMPO[37]=Compo_Profils_Type_de_couche_11;
var Col_N0_Nom_De_Famille_de_profil_Famille_de_profil0=new clAttribut("tp_nom","typeprofil",null);

var Famille_de_profil_Nom_1=new clAttribut("tp_nom","typeprofil",null);


	/* Ce composant représente: typeprofil.tp_nom sous le nom "Nom" */
var Compo_Famille_de_profil_Nom_1=new clCompoTextBox(Famille_de_profil_Nom_1,null,"Nom",false,false);
var Famille_de_profil_Note_2=new clAttribut("note","typeprofil",null);


	/* Ce composant représente: typeprofil.note sous le nom "Note" */
var Compo_Famille_de_profil_Note_2=new clCompoTextBox(Famille_de_profil_Note_2,null,"Note",false,true);
var Famille_de_profil_Couleur_3=new clAttribut("couleur","typeprofil",null);


	/* Ce composant représente: typeprofil.couleur sous le nom "Couleur" */
var Compo_Famille_de_profil_Couleur_3=new clCompoColor(Famille_de_profil_Couleur_3,null,"Couleur");
var Famille_de_profil_Famille_de_profil0=new clEnsembleAttributs("typeprofil",
	new Array(
	new clLiaison(null,Col_N0_Nom_De_Famille_de_profil_Famille_de_profil0)
	),
	new Array(
	new clLiaison(null,Famille_de_profil_Nom_1)
	,new clLiaison(null,Famille_de_profil_Note_2)
	,new clLiaison(null,Famille_de_profil_Couleur_3)
	));

var Titre_Famille_de_profil_Famille_de_profil0=new Array("Nom");

	/* Ce composant représente: des éléments de la table typeprofil sous le nom "Famille de profil" */
var Compo_Famille_de_profil_Famille_de_profil0=new clCompoListe(Famille_de_profil_Famille_de_profil0,new Array(new clInterfaceFiltrageVide()),Titre_Famille_de_profil_Famille_de_profil0,"Famille de profil",true,false);

	/* Ce composant représente: typeprofil.undefined sous le nom "Famille de profil" */
 if(ALeDroit(0,"typeprofil"))
 {
Compo_Famille_de_profil_Famille_de_profil0.GenererXUL(top.document.getElementById("Famille_de_profil_Famille_de_profil0"));

 }

	/* On l'ajoute au tableau global à l'indice 40*/
top.TAB_GLOBAL_COMPO[40]=Compo_Famille_de_profil_Famille_de_profil0;

	/* Ce composant représente: des éléments de la table typeprofil sous le nom "Nom" */
 if(ALeDroit(0,"typeprofil"))
 {
Compo_Famille_de_profil_Nom_1.GenererXUL(top.document.getElementById("Famille_de_profil_Famille_de_profil0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 42*/
top.TAB_GLOBAL_COMPO[42]=Compo_Famille_de_profil_Nom_1;

	/* Ce composant représente: des éléments de la table typeprofil sous le nom "Note" */
 if(ALeDroit(0,"typeprofil"))
 {
Compo_Famille_de_profil_Note_2.GenererXUL(top.document.getElementById("Famille_de_profil_Famille_de_profil0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 43*/
top.TAB_GLOBAL_COMPO[43]=Compo_Famille_de_profil_Note_2;

	/* Ce composant représente: des éléments de la table typeprofil sous le nom "Couleur" */
 if(ALeDroit(0,"typeprofil"))
 {
Compo_Famille_de_profil_Couleur_3.GenererXUL(top.document.getElementById("Famille_de_profil_Famille_de_profil0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 44*/
top.TAB_GLOBAL_COMPO[44]=Compo_Famille_de_profil_Couleur_3;
var Col_N0_Nom_De_Articles_Articles0=new clAttribut("ar_nom","article",null);

var Articles_Nom_1=new clAttribut("ar_nom","article",null);


	/* Ce composant représente: article.ar_nom sous le nom "Nom" */
var Compo_Articles_Nom_1=new clCompoTextBox(Articles_Nom_1,null,"Nom",false,false);
var Articles_Produit_2=new clAttribut("pd_nom","produit",null);


	/* Ce composant représente: produit.pd_nom sous le nom "Produit" */
var Compo_Articles_Produit_2=new clCompoListeDeroulanteSimple(Articles_Produit_2,new Array(clCompoListeDeroulanteSimple.prototype.FiltreParDefaut(),Filtre_Dep_Produits_0=new clInterfaceFiltrageRelationOnglet("Produits",Gerer_Produits,OuvrirOnglet_Articles)),"Produit");
var Joint_Esclave_Articles_Produit_2=new clJointureMulti("article",
	new Array(
	new stJointure("produit","ar_produit","pd_numero",null,false)
	));
var Articles_Conditionnement_3=new clAttribut("ca_nom","conditionnement",null);


	/* Ce composant représente: conditionnement.ca_nom sous le nom "Conditionnement" */
var Compo_Articles_Conditionnement_3=new clCompoListeDeroulanteSimple(Articles_Conditionnement_3,new Array(clCompoListeDeroulanteSimple.prototype.FiltreParDefaut(),Filtre_Dep_Conditionnements_0=new clInterfaceFiltrageRelationOnglet("Conditionnements",Gerer_Conditionnements,OuvrirOnglet_Articles)),"Conditionnement");
var Joint_Esclave_Articles_Conditionnement_3=new clJointureMulti("article",
	new Array(
	new stJointure("conditionnement","ar_conditionnement","ca_numero",null,false)
	));
var Col_N0_Nom_De_Articles_Vendeur_4=new clAttribut("pe_nom","personne",null);

var Col_N1_Prenom_De_Articles_Vendeur_4=new clAttribut("pe_prenom","personne",null);

var Articles_Vendeur_4=new clEnsembleAttributs("personne",
	new Array(
	new clLiaison(null,Col_N0_Nom_De_Articles_Vendeur_4)
	,new clLiaison(null,Col_N1_Prenom_De_Articles_Vendeur_4)
	),
	null);

var Titre_Articles_Vendeur_4=new Array("Nom","Prenom");

	/* Ce composant représente: des éléments de la table personne sous le nom "Vendeur" */
var Compo_Articles_Vendeur_4=new clCompoListeDeroulanteMulti(Articles_Vendeur_4,new Array(clCompoListeDeroulanteMulti.prototype.FiltreParDefaut(),Filtre_Dep_Personnes_0=new clInterfaceFiltrageRelationOnglet("Personnes",Gerer_Personnes,OuvrirOnglet_Personnes)),Titre_Articles_Vendeur_4,"Vendeur");
var Joint_Esclave_Articles_Vendeur_4=new clJointureMulti("article",
	new Array(
	new stJointure("personne","ar_personne","pe_numero",null,false)
	));
var Articles_Prix_5=new clAttribut("ar_prix","article",null);


	/* Ce composant représente: article.ar_prix sous le nom "Prix" */
var Compo_Articles_Prix_5=new clCompoTextBox(Articles_Prix_5,null,"Prix",false,false);
var Articles_Code_EAN13_6=new clAttribut("ar_codeean13","article",null);


	/* Ce composant représente: article.ar_codeean13 sous le nom "Code EAN13" */
var Compo_Articles_Code_EAN13_6=new clCompoTextBox(Articles_Code_EAN13_6,null,"Code EAN13",false,false);
var Articles_Code_secondaire_7=new clAttribut("ar_code2","article",null);


	/* Ce composant représente: article.ar_code2 sous le nom "Code secondaire" */
var Compo_Articles_Code_secondaire_7=new clCompoTextBox(Articles_Code_secondaire_7,null,"Code secondaire",false,false);
var Articles_Code_tertiaire_8=new clAttribut("ar_code3","article",null);


	/* Ce composant représente: article.ar_code3 sous le nom "Code tertiaire" */
var Compo_Articles_Code_tertiaire_8=new clCompoTextBox(Articles_Code_tertiaire_8,null,"Code tertiaire",false,false);
var Articles_Note_9=new clAttribut("note","article",null);


	/* Ce composant représente: article.note sous le nom "Note" */
var Compo_Articles_Note_9=new clCompoTextBox(Articles_Note_9,null,"Note",false,true);
var Articles_Articles0=new clEnsembleAttributs("article",
	new Array(
	new clLiaison(null,Col_N0_Nom_De_Articles_Articles0)
	),
	new Array(
	new clLiaison(null,Articles_Nom_1)
	,new clLiaison(Joint_Esclave_Articles_Produit_2,Articles_Produit_2)
	,new clLiaison(Joint_Esclave_Articles_Conditionnement_3,Articles_Conditionnement_3)
	,new clLiaison(Joint_Esclave_Articles_Vendeur_4,Articles_Vendeur_4)
	,new clLiaison(null,Articles_Prix_5)
	,new clLiaison(null,Articles_Code_EAN13_6)
	,new clLiaison(null,Articles_Code_secondaire_7)
	,new clLiaison(null,Articles_Code_tertiaire_8)
	,new clLiaison(null,Articles_Note_9)
	));

var Titre_Articles_Articles0=new Array("Nom");

	/* Ce composant représente: des éléments de la table article sous le nom "Articles" */
var Compo_Articles_Articles0=new clCompoListe(Articles_Articles0,new Array(new clInterfaceFiltrageVide()),Titre_Articles_Articles0,"Articles",true,false);

	/* Ce composant représente: article.undefined sous le nom "Articles" */
 if(ALeDroit(0,"article"))
 {
Compo_Articles_Articles0.GenererXUL(top.document.getElementById("Articles_Articles0"));

 }

	/* On l'ajoute au tableau global à l'indice 45*/
top.TAB_GLOBAL_COMPO[45]=Compo_Articles_Articles0;

	/* Ce composant représente: des éléments de la table article sous le nom "Nom" */
 if(ALeDroit(0,"article"))
 {
Compo_Articles_Nom_1.GenererXUL(top.document.getElementById("Articles_Articles0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 47*/
top.TAB_GLOBAL_COMPO[47]=Compo_Articles_Nom_1;

	/* Ce composant représente: des éléments de la table produit sous le nom "Produit" */
 if(ALeDroit(0,"produit"))
 {
Compo_Articles_Produit_2.GenererXUL(top.document.getElementById("Articles_Articles0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 48*/
top.TAB_GLOBAL_COMPO[48]=Compo_Articles_Produit_2;

	/* Ce composant représente: des éléments de la table conditionnement sous le nom "Conditionnement" */
 if(ALeDroit(0,"conditionnement"))
 {
Compo_Articles_Conditionnement_3.GenererXUL(top.document.getElementById("Articles_Articles0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 49*/
top.TAB_GLOBAL_COMPO[49]=Compo_Articles_Conditionnement_3;

	/* Ce composant représente: personne.undefined sous le nom "Vendeur" */
 if(ALeDroit(0,"personne"))
 {
Compo_Articles_Vendeur_4.GenererXUL(top.document.getElementById("Articles_Vendeur_4"));

 }

	/* On l'ajoute au tableau global à l'indice 50*/
top.TAB_GLOBAL_COMPO[50]=Compo_Articles_Vendeur_4;

	/* Ce composant représente: des éléments de la table article sous le nom "Prix" */
 if(ALeDroit(0,"article"))
 {
Compo_Articles_Prix_5.GenererXUL(top.document.getElementById("Articles_Articles0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 53*/
top.TAB_GLOBAL_COMPO[53]=Compo_Articles_Prix_5;

	/* Ce composant représente: des éléments de la table article sous le nom "Code EAN13" */
 if(ALeDroit(0,"article"))
 {
Compo_Articles_Code_EAN13_6.GenererXUL(top.document.getElementById("Articles_Articles0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 54*/
top.TAB_GLOBAL_COMPO[54]=Compo_Articles_Code_EAN13_6;

	/* Ce composant représente: des éléments de la table article sous le nom "Code secondaire" */
 if(ALeDroit(0,"article"))
 {
Compo_Articles_Code_secondaire_7.GenererXUL(top.document.getElementById("Articles_Articles0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 55*/
top.TAB_GLOBAL_COMPO[55]=Compo_Articles_Code_secondaire_7;

	/* Ce composant représente: des éléments de la table article sous le nom "Code tertiaire" */
 if(ALeDroit(0,"article"))
 {
Compo_Articles_Code_tertiaire_8.GenererXUL(top.document.getElementById("Articles_Articles0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 56*/
top.TAB_GLOBAL_COMPO[56]=Compo_Articles_Code_tertiaire_8;

	/* Ce composant représente: des éléments de la table article sous le nom "Note" */
 if(ALeDroit(0,"article"))
 {
Compo_Articles_Note_9.GenererXUL(top.document.getElementById("Articles_Articles0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 57*/
top.TAB_GLOBAL_COMPO[57]=Compo_Articles_Note_9;
var Col_N0_Nom_De_Conditionnements_Conditionnements0=new clAttribut("ca_nom","conditionnement",null);

var Col_N1_Quantite_De_Conditionnements_Conditionnements0=new clAttribut("ca_quantite","conditionnement",null);

var Col_N2_Unite_De_Conditionnements_Conditionnements0=new clAttribut("un_nom","unite",null);

var Joint_Col_N2_Unite_De_Conditionnements_Conditionnements0=new clJointureMulti("conditionnement",
	new Array(
	new stJointure("unite","ca_unite","un_numero",null,true)
	));
var Conditionnements_Nom_1=new clAttribut("ca_nom","conditionnement",null);


	/* Ce composant représente: conditionnement.ca_nom sous le nom "Nom" */
var Compo_Conditionnements_Nom_1=new clCompoTextBox(Conditionnements_Nom_1,null,"Nom",false,false);
var Conditionnements_Quantite_2=new clAttribut("ca_quantite","conditionnement",null);


	/* Ce composant représente: conditionnement.ca_quantite sous le nom "Quantite" */
var Compo_Conditionnements_Quantite_2=new clCompoTextBox(Conditionnements_Quantite_2,null,"Quantite",false,false);
var Conditionnements_Unité_3=new clAttribut("un_nom","unite",null);


	/* Ce composant représente: unite.un_nom sous le nom "Unité" */
var Compo_Conditionnements_Unité_3=new clCompoListeDeroulanteSimple(Conditionnements_Unité_3,new Array(clCompoListeDeroulanteSimple.prototype.FiltreParDefaut(),Filtre_Dep_Unité_1=new clInterfaceFiltrageRelationOnglet("Unité",Gerer_Unité,OuvrirOnglet_Conditionnements)),"Unité");
var Joint_Esclave_Conditionnements_Unité_3=new clJointureMulti("conditionnement",
	new Array(
	new stJointure("unite","ca_unite","un_numero",null,false)
	));
var Conditionnements_Description_4=new clAttribut("ca_description","conditionnement",null);


	/* Ce composant représente: conditionnement.ca_description sous le nom "Description" */
var Compo_Conditionnements_Description_4=new clCompoTextBox(Conditionnements_Description_4,null,"Description",false,false);
var Conditionnements_Note_5=new clAttribut("note","conditionnement",null);


	/* Ce composant représente: conditionnement.note sous le nom "Note" */
var Compo_Conditionnements_Note_5=new clCompoTextBox(Conditionnements_Note_5,null,"Note",false,true);
var Conditionnements_Conditionnements0=new clEnsembleAttributs("conditionnement",
	new Array(
	new clLiaison(null,Col_N0_Nom_De_Conditionnements_Conditionnements0)
	,new clLiaison(null,Col_N1_Quantite_De_Conditionnements_Conditionnements0)
	,new clLiaison(Joint_Col_N2_Unite_De_Conditionnements_Conditionnements0,Col_N2_Unite_De_Conditionnements_Conditionnements0)
	),
	new Array(
	new clLiaison(null,Conditionnements_Nom_1)
	,new clLiaison(null,Conditionnements_Quantite_2)
	,new clLiaison(Joint_Esclave_Conditionnements_Unité_3,Conditionnements_Unité_3)
	,new clLiaison(null,Conditionnements_Description_4)
	,new clLiaison(null,Conditionnements_Note_5)
	));

var Titre_Conditionnements_Conditionnements0=new Array("Nom","Quantite","Unite");

	/* Ce composant représente: des éléments de la table conditionnement sous le nom "Conditionnements" */
var Compo_Conditionnements_Conditionnements0=new clCompoListe(Conditionnements_Conditionnements0,new Array(new clInterfaceFiltrageVide()),Titre_Conditionnements_Conditionnements0,"Conditionnements",true,false);

	/* Ce composant représente: conditionnement.undefined sous le nom "Conditionnements" */
 if(ALeDroit(0,"conditionnement"))
 {
Compo_Conditionnements_Conditionnements0.GenererXUL(top.document.getElementById("Conditionnements_Conditionnements0"));

 }

	/* On l'ajoute au tableau global à l'indice 58*/
top.TAB_GLOBAL_COMPO[58]=Compo_Conditionnements_Conditionnements0;

	/* Ce composant représente: des éléments de la table conditionnement sous le nom "Nom" */
 if(ALeDroit(0,"conditionnement"))
 {
Compo_Conditionnements_Nom_1.GenererXUL(top.document.getElementById("Conditionnements_Conditionnements0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 62*/
top.TAB_GLOBAL_COMPO[62]=Compo_Conditionnements_Nom_1;

	/* Ce composant représente: des éléments de la table conditionnement sous le nom "Quantite" */
 if(ALeDroit(0,"conditionnement"))
 {
Compo_Conditionnements_Quantite_2.GenererXUL(top.document.getElementById("Conditionnements_Conditionnements0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 63*/
top.TAB_GLOBAL_COMPO[63]=Compo_Conditionnements_Quantite_2;

	/* Ce composant représente: des éléments de la table unite sous le nom "Unité" */
 if(ALeDroit(0,"unite"))
 {
Compo_Conditionnements_Unité_3.GenererXUL(top.document.getElementById("Conditionnements_Conditionnements0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 64*/
top.TAB_GLOBAL_COMPO[64]=Compo_Conditionnements_Unité_3;

	/* Ce composant représente: des éléments de la table conditionnement sous le nom "Description" */
 if(ALeDroit(0,"conditionnement"))
 {
Compo_Conditionnements_Description_4.GenererXUL(top.document.getElementById("Conditionnements_Conditionnements0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 65*/
top.TAB_GLOBAL_COMPO[65]=Compo_Conditionnements_Description_4;

	/* Ce composant représente: des éléments de la table conditionnement sous le nom "Note" */
 if(ALeDroit(0,"conditionnement"))
 {
Compo_Conditionnements_Note_5.GenererXUL(top.document.getElementById("Conditionnements_Conditionnements0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 66*/
top.TAB_GLOBAL_COMPO[66]=Compo_Conditionnements_Note_5;
var Col_N0_Nom_De_Produits_Produits0=new clAttribut("pd_nom","produit",null);

var Col_N1_Code_De_Produits_Produits0=new clAttribut("pd_code","produit",null);

var Produits_Nom_1=new clAttribut("pd_nom","produit",null);


	/* Ce composant représente: produit.pd_nom sous le nom "Nom" */
var Compo_Produits_Nom_1=new clCompoTextBox(Produits_Nom_1,null,"Nom",false,false);
var Produits_Code_2=new clAttribut("pd_code","produit",null);


	/* Ce composant représente: produit.pd_code sous le nom "Code" */
var Compo_Produits_Code_2=new clCompoTextBox(Produits_Code_2,null,"Code",false,false);
var Produits_Type_3=new clAttribut("td_nom","typeproduit",null);


	/* Ce composant représente: typeproduit.td_nom sous le nom "Type" */
var Compo_Produits_Type_3=new clCompoListeDeroulanteSimple(Produits_Type_3,new Array(clCompoListeDeroulanteSimple.prototype.FiltreParDefaut(),Filtre_Dep_Type_de_produits_0=new clInterfaceFiltrageRelationOnglet("Type de produits",Gerer_Type_de_produits,OuvrirOnglet_Produits)),"Type");
var Joint_Esclave_Produits_Type_3=new clJointureMulti("produit",
	new Array(
	new stJointure("typeproduit","pd_typeproduit","td_numero",null,false)
	));
var Produits_Firme_4=new clAttribut("fi_nom","firme",null);


	/* Ce composant représente: firme.fi_nom sous le nom "Firme" */
var Compo_Produits_Firme_4=new clCompoListeDeroulanteSimple(Produits_Firme_4,new Array(clCompoListeDeroulanteSimple.prototype.FiltreParDefaut(),Filtre_Dep_Firmes_0=new clInterfaceFiltrageRelationOnglet("Firmes",Gerer_Firmes,OuvrirOnglet_Produits)),"Firme");
var Joint_Esclave_Produits_Firme_4=new clJointureMulti("produit",
	new Array(
	new stJointure("firme","pd_firme","fi_numero",null,false)
	));
var Produits_Unité_5=new clAttribut("un_nom","unite",null);


	/* Ce composant représente: unite.un_nom sous le nom "Unité" */
var Compo_Produits_Unité_5=new clCompoListeDeroulanteSimple(Produits_Unité_5,new Array(clCompoListeDeroulanteSimple.prototype.FiltreParDefaut(),Filtre_Dep_Unité_0=new clInterfaceFiltrageRelationOnglet("Unité",Gerer_Unité,OuvrirOnglet_Produits)),"Unité");
var Joint_Esclave_Produits_Unité_5=new clJointureMulti("produit",
	new Array(
	new stJointure("unite","pd_unite","un_numero",null,false)
	));
var Produits_Sous_forme_de_6=new clAttribut("fo_nom","forme",null);


	/* Ce composant représente: forme.fo_nom sous le nom "Sous forme de" */
var Compo_Produits_Sous_forme_de_6=new clCompoListeDeroulanteSimple(Produits_Sous_forme_de_6,new Array(clCompoListeDeroulanteSimple.prototype.FiltreParDefaut(),Filtre_Dep_Forme_0=new clInterfaceFiltrageRelationOnglet("Forme",Gerer_Forme,OuvrirOnglet_Produits)),"Sous forme de");
var Joint_Esclave_Produits_Sous_forme_de_6=new clJointureMulti("produit",
	new Array(
	new stJointure("forme","pd_forme","fo_numero",null,false)
	));
var Produits_Variete_7=new clAttribut("va_nom","variete",null);


	/* Ce composant représente: variete.va_nom sous le nom "Variete" */
var Compo_Produits_Variete_7=new clCompoListeDeroulanteSimple(Produits_Variete_7,new Array(clCompoListeDeroulanteSimple.prototype.FiltreParDefaut(),Filtre_Dep_Varieté_0=new clInterfaceFiltrageRelationOnglet("Varieté",Gerer_Varieté,OuvrirOnglet_Produits)),"Variete");
var Joint_Esclave_Produits_Variete_7=new clJointureMulti("produit",
	new Array(
	new stJointure("variete","pd_variete","va_numero",null,false)
	));
var Produits_Composition_8=new clAttribut("cs_nom","composition",null);


	/* Ce composant représente: composition.cs_nom sous le nom "Composition" */
var Compo_Produits_Composition_8=new clCompoListeDeroulanteSimple(Produits_Composition_8,new Array(clCompoListeDeroulanteSimple.prototype.FiltreParDefaut(),Filtre_Dep_Composition_0=new clInterfaceFiltrageRelationOnglet("Composition",Gerer_Composition,OuvrirOnglet_Produits)),"Composition");
var Joint_Esclave_Produits_Composition_8=new clJointureMulti("produit",
	new Array(
	new stJointure("composition","pd_composition","cs_numero",null,false)
	));
var Produits_Couleur_9=new clAttribut("couleur","produit",null);


	/* Ce composant représente: produit.couleur sous le nom "Couleur" */
var Compo_Produits_Couleur_9=new clCompoColor(Produits_Couleur_9,null,"Couleur");
var Produits_Note_10=new clAttribut("note","produit",null);


	/* Ce composant représente: produit.note sous le nom "Note" */
var Compo_Produits_Note_10=new clCompoTextBox(Produits_Note_10,null,"Note",false,true);
var Col_N0_Symbole_De_Produits_Classements_du_produit_12=new clAttribut("cl_symbole","classement",null);

var Col_N1_Nom_De_Produits_Classements_du_produit_12=new clAttribut("cl_nom","classement",null);

var Produits_Classements_du_produit_12=new clEnsembleAttributs("classement",
	new Array(
	new clLiaison(null,Col_N0_Symbole_De_Produits_Classements_du_produit_12)
	,new clLiaison(null,Col_N1_Nom_De_Produits_Classements_du_produit_12)
	),
	null);

var Titre_Produits_Classements_du_produit_12=new Array("Symbole","Nom");

	/* Ce composant représente: des éléments de la table classement sous le nom "Classements du produit" */
var Compo_Produits_Classements_du_produit_12=new clCompoListe(Produits_Classements_du_produit_12,null,Titre_Produits_Classements_du_produit_12,"Classements du produit",true,true);
var Joint_Esclave_Produits_Classements_du_produit_12=new clJointureMulti("produit",
	new Array(
	new stJointure("declassement","pd_numero","dc_produit",null,false)
	,new stJointure("classement","dc_classement","cl_numero",null,false)
	));
var Produits_Produits0=new clEnsembleAttributs("produit",
	new Array(
	new clLiaison(null,Col_N0_Nom_De_Produits_Produits0)
	,new clLiaison(null,Col_N1_Code_De_Produits_Produits0)
	),
	new Array(
	new clLiaison(null,Produits_Nom_1)
	,new clLiaison(null,Produits_Code_2)
	,new clLiaison(Joint_Esclave_Produits_Type_3,Produits_Type_3)
	,new clLiaison(Joint_Esclave_Produits_Firme_4,Produits_Firme_4)
	,new clLiaison(Joint_Esclave_Produits_Unité_5,Produits_Unité_5)
	,new clLiaison(Joint_Esclave_Produits_Sous_forme_de_6,Produits_Sous_forme_de_6)
	,new clLiaison(Joint_Esclave_Produits_Variete_7,Produits_Variete_7)
	,new clLiaison(Joint_Esclave_Produits_Composition_8,Produits_Composition_8)
	,new clLiaison(null,Produits_Couleur_9)
	,new clLiaison(null,Produits_Note_10)
	,new clLiaison(Joint_Esclave_Produits_Classements_du_produit_12,Produits_Classements_du_produit_12)
	));

var Titre_Produits_Produits0=new Array("Nom","Code");

	/* Ce composant représente: des éléments de la table produit sous le nom "Produits" */
var Compo_Produits_Produits0=new clCompoListe(Produits_Produits0,new Array(new clInterfaceFiltrageVide()),Titre_Produits_Produits0,"Produits",true,false);
var Col_N0_Symbole_De_Produits_Indpt_Classements_existants_11=new clAttribut("cl_symbole","classement",null);

var Col_N1_Nom_De_Produits_Indpt_Classements_existants_11=new clAttribut("cl_nom","classement",null);

var Produits_Indpt_Classements_existants_11=new clEnsembleAttributs("classement",
	new Array(
	new clLiaison(null,Col_N0_Symbole_De_Produits_Indpt_Classements_existants_11)
	,new clLiaison(null,Col_N1_Nom_De_Produits_Indpt_Classements_existants_11)
	),
	null);

var Titre_Produits_Indpt_Classements_existants_11=new Array("Symbole","Nom");

	/* Ce composant représente: des éléments de la table classement sous le nom "Classements existants" */
var Compo_Produits_Indpt_Classements_existants_11=new clCompoListe(Produits_Indpt_Classements_existants_11,new Array(new clInterfaceFiltrageVide(),Filtre_Dep_Classement_0=new clInterfaceFiltrageRelationOnglet("Classement",Gerer_Classement,OuvrirOnglet_Produits)),Titre_Produits_Indpt_Classements_existants_11,"Classements existants",true,true);

	/* Ce composant représente: produit.undefined sous le nom "Produits" */
 if(ALeDroit(0,"produit"))
 {
Compo_Produits_Produits0.GenererXUL(top.document.getElementById("Produits_Produits0"));

 }

	/* On l'ajoute au tableau global à l'indice 67*/
top.TAB_GLOBAL_COMPO[67]=Compo_Produits_Produits0;

	/* Ce composant représente: des éléments de la table produit sous le nom "Nom" */
 if(ALeDroit(0,"produit"))
 {
Compo_Produits_Nom_1.GenererXUL(top.document.getElementById("Produits_Produits0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 70*/
top.TAB_GLOBAL_COMPO[70]=Compo_Produits_Nom_1;

	/* Ce composant représente: des éléments de la table produit sous le nom "Code" */
 if(ALeDroit(0,"produit"))
 {
Compo_Produits_Code_2.GenererXUL(top.document.getElementById("Produits_Produits0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 71*/
top.TAB_GLOBAL_COMPO[71]=Compo_Produits_Code_2;

	/* Ce composant représente: des éléments de la table typeproduit sous le nom "Type" */
 if(ALeDroit(0,"typeproduit"))
 {
Compo_Produits_Type_3.GenererXUL(top.document.getElementById("Produits_Produits0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 72*/
top.TAB_GLOBAL_COMPO[72]=Compo_Produits_Type_3;

	/* Ce composant représente: des éléments de la table firme sous le nom "Firme" */
 if(ALeDroit(0,"firme"))
 {
Compo_Produits_Firme_4.GenererXUL(top.document.getElementById("Produits_Produits0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 73*/
top.TAB_GLOBAL_COMPO[73]=Compo_Produits_Firme_4;

	/* Ce composant représente: des éléments de la table unite sous le nom "Unité" */
 if(ALeDroit(0,"unite"))
 {
Compo_Produits_Unité_5.GenererXUL(top.document.getElementById("Produits_Produits0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 74*/
top.TAB_GLOBAL_COMPO[74]=Compo_Produits_Unité_5;

	/* Ce composant représente: des éléments de la table forme sous le nom "Sous forme de" */
 if(ALeDroit(0,"forme"))
 {
Compo_Produits_Sous_forme_de_6.GenererXUL(top.document.getElementById("Produits_Produits0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 75*/
top.TAB_GLOBAL_COMPO[75]=Compo_Produits_Sous_forme_de_6;

	/* Ce composant représente: des éléments de la table variete sous le nom "Variete" */
 if(ALeDroit(0,"variete"))
 {
Compo_Produits_Variete_7.GenererXUL(top.document.getElementById("Produits_Produits0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 76*/
top.TAB_GLOBAL_COMPO[76]=Compo_Produits_Variete_7;

	/* Ce composant représente: des éléments de la table composition sous le nom "Composition" */
 if(ALeDroit(0,"composition"))
 {
Compo_Produits_Composition_8.GenererXUL(top.document.getElementById("Produits_Produits0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 77*/
top.TAB_GLOBAL_COMPO[77]=Compo_Produits_Composition_8;

	/* Ce composant représente: des éléments de la table produit sous le nom "Couleur" */
 if(ALeDroit(0,"produit"))
 {
Compo_Produits_Couleur_9.GenererXUL(top.document.getElementById("Produits_Produits0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 78*/
top.TAB_GLOBAL_COMPO[78]=Compo_Produits_Couleur_9;

	/* Ce composant représente: des éléments de la table produit sous le nom "Note" */
 if(ALeDroit(0,"produit"))
 {
Compo_Produits_Note_10.GenererXUL(top.document.getElementById("Produits_Produits0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 79*/
top.TAB_GLOBAL_COMPO[79]=Compo_Produits_Note_10;

	/* Ce composant représente: classement.undefined sous le nom "Classements existants" */
 if(ALeDroit(0,"classement"))
 {
Compo_Produits_Indpt_Classements_existants_11.GenererXUL(top.document.getElementById("ListeDessus_Produits_Classements_du_produit_12"));

 }

	/* On l'ajoute au tableau global à l'indice 80*/
top.TAB_GLOBAL_COMPO[80]=Compo_Produits_Indpt_Classements_existants_11;

	/* Ce composant représente: classement.undefined sous le nom "Classements du produit" */
 if(ALeDroit(0,"classement"))
 {
Compo_Produits_Classements_du_produit_12.GenererXUL(top.document.getElementById("Produits_Classements_du_produit_12"));

 }

	/* On l'ajoute au tableau global à l'indice 83*/
top.TAB_GLOBAL_COMPO[83]=Compo_Produits_Classements_du_produit_12;
var Col_N0_Nom_De_Couches_Couches0=new clAttribut("cc_nom","couche",null);

var Col_N1_Type_De_Couches_Couches0=new clAttribut("tc_nom","typecouche",null);

var Joint_Col_N1_Type_De_Couches_Couches0=new clJointureMulti("couche",
	new Array(
	new stJointure("typecouche","cc_typecouche","tc_numero",null,true)
	));
var Couches_Nom_1=new clAttribut("cc_nom","couche",null);


	/* Ce composant représente: couche.cc_nom sous le nom "Nom" */
var Compo_Couches_Nom_1=new clCompoTextBox(Couches_Nom_1,null,"Nom",false,false);
var Couches_Type_2=new clAttribut("tc_nom","typecouche",null);


	/* Ce composant représente: typecouche.tc_nom sous le nom "Type" */
var Compo_Couches_Type_2=new clCompoListeDeroulanteSimple(Couches_Type_2,new Array(clCompoListeDeroulanteSimple.prototype.FiltreParDefaut(),Filtre_Dep_Type_de_couche_1=new clInterfaceFiltrageRelationOnglet("Type de couche",Gerer_Type_de_couche,OuvrirOnglet_Couches)),"Type");
var Joint_Esclave_Couches_Type_2=new clJointureMulti("couche",
	new Array(
	new stJointure("typecouche","cc_typecouche","tc_numero",null,false)
	));
var Couches_Note_3=new clAttribut("note","couche",null);


	/* Ce composant représente: couche.note sous le nom "Note" */
var Compo_Couches_Note_3=new clCompoTextBox(Couches_Note_3,null,"Note",false,true);
var Couches_Couleur_4=new clAttribut("couleur","couche",null);


	/* Ce composant représente: couche.couleur sous le nom "Couleur" */
var Compo_Couches_Couleur_4=new clCompoColor(Couches_Couleur_4,null,"Couleur");
var Couches_Couches0=new clEnsembleAttributs("couche",
	new Array(
	new clLiaison(null,Col_N0_Nom_De_Couches_Couches0)
	,new clLiaison(Joint_Col_N1_Type_De_Couches_Couches0,Col_N1_Type_De_Couches_Couches0)
	),
	new Array(
	new clLiaison(null,Couches_Nom_1)
	,new clLiaison(Joint_Esclave_Couches_Type_2,Couches_Type_2)
	,new clLiaison(null,Couches_Note_3)
	,new clLiaison(null,Couches_Couleur_4)
	));

var Titre_Couches_Couches0=new Array("Nom","Type");

	/* Ce composant représente: des éléments de la table couche sous le nom "Couches" */
var Compo_Couches_Couches0=new clCompoListe(Couches_Couches0,new Array(new clInterfaceFiltrageVide()),Titre_Couches_Couches0,"Couches",true,false);

	/* Ce composant représente: couche.undefined sous le nom "Couches" */
 if(ALeDroit(0,"couche"))
 {
Compo_Couches_Couches0.GenererXUL(top.document.getElementById("Couches_Couches0"));

 }

	/* On l'ajoute au tableau global à l'indice 86*/
top.TAB_GLOBAL_COMPO[86]=Compo_Couches_Couches0;

	/* Ce composant représente: des éléments de la table couche sous le nom "Nom" */
 if(ALeDroit(0,"couche"))
 {
Compo_Couches_Nom_1.GenererXUL(top.document.getElementById("Couches_Couches0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 89*/
top.TAB_GLOBAL_COMPO[89]=Compo_Couches_Nom_1;

	/* Ce composant représente: des éléments de la table typecouche sous le nom "Type" */
 if(ALeDroit(0,"typecouche"))
 {
Compo_Couches_Type_2.GenererXUL(top.document.getElementById("Couches_Couches0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 90*/
top.TAB_GLOBAL_COMPO[90]=Compo_Couches_Type_2;

	/* Ce composant représente: des éléments de la table couche sous le nom "Note" */
 if(ALeDroit(0,"couche"))
 {
Compo_Couches_Note_3.GenererXUL(top.document.getElementById("Couches_Couches0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 91*/
top.TAB_GLOBAL_COMPO[91]=Compo_Couches_Note_3;

	/* Ce composant représente: des éléments de la table couche sous le nom "Couleur" */
 if(ALeDroit(0,"couche"))
 {
Compo_Couches_Couleur_4.GenererXUL(top.document.getElementById("Couches_Couches0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 92*/
top.TAB_GLOBAL_COMPO[92]=Compo_Couches_Couleur_4;
var Col_N0_Nom_De_Type_de_couche_Type_de_couches0=new clAttribut("tc_nom","typecouche",null);

var Col_N1_Note_De_Type_de_couche_Type_de_couches0=new clAttribut("note","typecouche",null);

var Type_de_couche_Nom_1=new clAttribut("tc_nom","typecouche",null);


	/* Ce composant représente: typecouche.tc_nom sous le nom "Nom" */
var Compo_Type_de_couche_Nom_1=new clCompoTextBox(Type_de_couche_Nom_1,null,"Nom",false,false);
var Type_de_couche_Note_2=new clAttribut("note","typecouche",null);


	/* Ce composant représente: typecouche.note sous le nom "Note" */
var Compo_Type_de_couche_Note_2=new clCompoTextBox(Type_de_couche_Note_2,null,"Note",false,true);
var Type_de_couche_Couleur_3=new clAttribut("couleur","typecouche",null);


	/* Ce composant représente: typecouche.couleur sous le nom "Couleur" */
var Compo_Type_de_couche_Couleur_3=new clCompoColor(Type_de_couche_Couleur_3,null,"Couleur");
var Type_de_couche_Sans_sous_ilots_4=new clAttribut("tc_sansilots","typecouche",null);


	/* Ce composant représente: typecouche.tc_sansilots sous le nom "Sans sous-ilots" */
var Compo_Type_de_couche_Sans_sous_ilots_4=new clCompoCheckBox(Type_de_couche_Sans_sous_ilots_4,null,"Sans sous-ilots");
var Type_de_couche_Type_de_couches0=new clEnsembleAttributs("typecouche",
	new Array(
	new clLiaison(null,Col_N0_Nom_De_Type_de_couche_Type_de_couches0)
	,new clLiaison(null,Col_N1_Note_De_Type_de_couche_Type_de_couches0)
	),
	new Array(
	new clLiaison(null,Type_de_couche_Nom_1)
	,new clLiaison(null,Type_de_couche_Note_2)
	,new clLiaison(null,Type_de_couche_Couleur_3)
	,new clLiaison(null,Type_de_couche_Sans_sous_ilots_4)
	));

var Titre_Type_de_couche_Type_de_couches0=new Array("Nom","Note");

	/* Ce composant représente: des éléments de la table typecouche sous le nom "Type de couches" */
var Compo_Type_de_couche_Type_de_couches0=new clCompoListe(Type_de_couche_Type_de_couches0,new Array(new clInterfaceFiltrageVide()),Titre_Type_de_couche_Type_de_couches0,"Type de couches",true,false);

	/* Ce composant représente: typecouche.undefined sous le nom "Type de couches" */
 if(ALeDroit(0,"typecouche"))
 {
Compo_Type_de_couche_Type_de_couches0.GenererXUL(top.document.getElementById("Type_de_couche_Type_de_couches0"));

 }

	/* On l'ajoute au tableau global à l'indice 93*/
top.TAB_GLOBAL_COMPO[93]=Compo_Type_de_couche_Type_de_couches0;

	/* Ce composant représente: des éléments de la table typecouche sous le nom "Nom" */
 if(ALeDroit(0,"typecouche"))
 {
Compo_Type_de_couche_Nom_1.GenererXUL(top.document.getElementById("Type_de_couche_Type_de_couches0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 96*/
top.TAB_GLOBAL_COMPO[96]=Compo_Type_de_couche_Nom_1;

	/* Ce composant représente: des éléments de la table typecouche sous le nom "Note" */
 if(ALeDroit(0,"typecouche"))
 {
Compo_Type_de_couche_Note_2.GenererXUL(top.document.getElementById("Type_de_couche_Type_de_couches0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 97*/
top.TAB_GLOBAL_COMPO[97]=Compo_Type_de_couche_Note_2;

	/* Ce composant représente: des éléments de la table typecouche sous le nom "Couleur" */
 if(ALeDroit(0,"typecouche"))
 {
Compo_Type_de_couche_Couleur_3.GenererXUL(top.document.getElementById("Type_de_couche_Type_de_couches0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 98*/
top.TAB_GLOBAL_COMPO[98]=Compo_Type_de_couche_Couleur_3;

	/* Ce composant représente: des éléments de la table typecouche sous le nom "Sans sous-ilots" */
 if(ALeDroit(0,"typecouche"))
 {
Compo_Type_de_couche_Sans_sous_ilots_4.GenererXUL(top.document.getElementById("Type_de_couche_Type_de_couches0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 99*/
top.TAB_GLOBAL_COMPO[99]=Compo_Type_de_couche_Sans_sous_ilots_4;
var Col_N0_Nom_De_Type_de_produits_Type_de_produits0=new clAttribut("td_nom","typeproduit",null);

var Col_N1_Note_De_Type_de_produits_Type_de_produits0=new clAttribut("note","typeproduit",null);

var Type_de_produits_Nom_1=new clAttribut("td_nom","typeproduit",null);


	/* Ce composant représente: typeproduit.td_nom sous le nom "Nom" */
var Compo_Type_de_produits_Nom_1=new clCompoTextBox(Type_de_produits_Nom_1,null,"Nom",false,false);
var Type_de_produits_Couleur_2=new clAttribut("couleur","typeproduit",null);


	/* Ce composant représente: typeproduit.couleur sous le nom "Couleur" */
var Compo_Type_de_produits_Couleur_2=new clCompoColor(Type_de_produits_Couleur_2,null,"Couleur");
var Type_de_produits_Note_3=new clAttribut("note","typeproduit",null);


	/* Ce composant représente: typeproduit.note sous le nom "Note" */
var Compo_Type_de_produits_Note_3=new clCompoTextBox(Type_de_produits_Note_3,null,"Note",false,true);
var Type_de_produits_Type_de_produits0=new clEnsembleAttributs("typeproduit",
	new Array(
	new clLiaison(null,Col_N0_Nom_De_Type_de_produits_Type_de_produits0)
	,new clLiaison(null,Col_N1_Note_De_Type_de_produits_Type_de_produits0)
	),
	new Array(
	new clLiaison(null,Type_de_produits_Nom_1)
	,new clLiaison(null,Type_de_produits_Couleur_2)
	,new clLiaison(null,Type_de_produits_Note_3)
	));

var Titre_Type_de_produits_Type_de_produits0=new Array("Nom","Note");

	/* Ce composant représente: des éléments de la table typeproduit sous le nom "Type de produits" */
var Compo_Type_de_produits_Type_de_produits0=new clCompoListe(Type_de_produits_Type_de_produits0,new Array(new clInterfaceFiltrageVide()),Titre_Type_de_produits_Type_de_produits0,"Type de produits",true,false);

	/* Ce composant représente: typeproduit.undefined sous le nom "Type de produits" */
 if(ALeDroit(0,"typeproduit"))
 {
Compo_Type_de_produits_Type_de_produits0.GenererXUL(top.document.getElementById("Type_de_produits_Type_de_produits0"));

 }

	/* On l'ajoute au tableau global à l'indice 100*/
top.TAB_GLOBAL_COMPO[100]=Compo_Type_de_produits_Type_de_produits0;

	/* Ce composant représente: des éléments de la table typeproduit sous le nom "Nom" */
 if(ALeDroit(0,"typeproduit"))
 {
Compo_Type_de_produits_Nom_1.GenererXUL(top.document.getElementById("Type_de_produits_Type_de_produits0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 103*/
top.TAB_GLOBAL_COMPO[103]=Compo_Type_de_produits_Nom_1;

	/* Ce composant représente: des éléments de la table typeproduit sous le nom "Couleur" */
 if(ALeDroit(0,"typeproduit"))
 {
Compo_Type_de_produits_Couleur_2.GenererXUL(top.document.getElementById("Type_de_produits_Type_de_produits0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 104*/
top.TAB_GLOBAL_COMPO[104]=Compo_Type_de_produits_Couleur_2;

	/* Ce composant représente: des éléments de la table typeproduit sous le nom "Note" */
 if(ALeDroit(0,"typeproduit"))
 {
Compo_Type_de_produits_Note_3.GenererXUL(top.document.getElementById("Type_de_produits_Type_de_produits0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 105*/
top.TAB_GLOBAL_COMPO[105]=Compo_Type_de_produits_Note_3;
var Col_N0_Nom_De_Unité_Unités0=new clAttribut("un_nom","unite",null);

var Unité_Nom_1=new clAttribut("un_nom","unite",null);


	/* Ce composant représente: unite.un_nom sous le nom "Nom" */
var Compo_Unité_Nom_1=new clCompoTextBox(Unité_Nom_1,null,"Nom",false,false);
var Unité_Unités0=new clEnsembleAttributs("unite",
	new Array(
	new clLiaison(null,Col_N0_Nom_De_Unité_Unités0)
	),
	new Array(
	new clLiaison(null,Unité_Nom_1)
	));

var Titre_Unité_Unités0=new Array("Nom");

	/* Ce composant représente: des éléments de la table unite sous le nom "Unités" */
var Compo_Unité_Unités0=new clCompoListe(Unité_Unités0,new Array(new clInterfaceFiltrageVide()),Titre_Unité_Unités0,"Unités",true,false);

	/* Ce composant représente: unite.undefined sous le nom "Unités" */
 if(ALeDroit(0,"unite"))
 {
Compo_Unité_Unités0.GenererXUL(top.document.getElementById("Unité_Unités0"));

 }

	/* On l'ajoute au tableau global à l'indice 106*/
top.TAB_GLOBAL_COMPO[106]=Compo_Unité_Unités0;

	/* Ce composant représente: des éléments de la table unite sous le nom "Nom" */
 if(ALeDroit(0,"unite"))
 {
Compo_Unité_Nom_1.GenererXUL(top.document.getElementById("Unité_Unités0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 108*/
top.TAB_GLOBAL_COMPO[108]=Compo_Unité_Nom_1;
var Col_N0_Nom_De_Forme_Formes0=new clAttribut("fo_nom","forme",null);

var Forme_Nom_1=new clAttribut("fo_nom","forme",null);


	/* Ce composant représente: forme.fo_nom sous le nom "Nom" */
var Compo_Forme_Nom_1=new clCompoTextBox(Forme_Nom_1,null,"Nom",false,false);
var Forme_Abbrevation_2=new clAttribut("fo_abbrevation","forme",null);


	/* Ce composant représente: forme.fo_abbrevation sous le nom "Abbrevation" */
var Compo_Forme_Abbrevation_2=new clCompoTextBox(Forme_Abbrevation_2,null,"Abbrevation",false,false);
var Forme_Description_3=new clAttribut("fo_description","forme",null);


	/* Ce composant représente: forme.fo_description sous le nom "Description" */
var Compo_Forme_Description_3=new clCompoTextBox(Forme_Description_3,null,"Description",false,false);
var Forme_Formes0=new clEnsembleAttributs("forme",
	new Array(
	new clLiaison(null,Col_N0_Nom_De_Forme_Formes0)
	),
	new Array(
	new clLiaison(null,Forme_Nom_1)
	,new clLiaison(null,Forme_Abbrevation_2)
	,new clLiaison(null,Forme_Description_3)
	));

var Titre_Forme_Formes0=new Array("Nom");

	/* Ce composant représente: des éléments de la table forme sous le nom "Formes" */
var Compo_Forme_Formes0=new clCompoListe(Forme_Formes0,new Array(new clInterfaceFiltrageVide()),Titre_Forme_Formes0,"Formes",true,false);

	/* Ce composant représente: forme.undefined sous le nom "Formes" */
 if(ALeDroit(0,"forme"))
 {
Compo_Forme_Formes0.GenererXUL(top.document.getElementById("Forme_Formes0"));

 }

	/* On l'ajoute au tableau global à l'indice 109*/
top.TAB_GLOBAL_COMPO[109]=Compo_Forme_Formes0;

	/* Ce composant représente: des éléments de la table forme sous le nom "Nom" */
 if(ALeDroit(0,"forme"))
 {
Compo_Forme_Nom_1.GenererXUL(top.document.getElementById("Forme_Formes0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 111*/
top.TAB_GLOBAL_COMPO[111]=Compo_Forme_Nom_1;

	/* Ce composant représente: des éléments de la table forme sous le nom "Abbrevation" */
 if(ALeDroit(0,"forme"))
 {
Compo_Forme_Abbrevation_2.GenererXUL(top.document.getElementById("Forme_Formes0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 112*/
top.TAB_GLOBAL_COMPO[112]=Compo_Forme_Abbrevation_2;

	/* Ce composant représente: des éléments de la table forme sous le nom "Description" */
 if(ALeDroit(0,"forme"))
 {
Compo_Forme_Description_3.GenererXUL(top.document.getElementById("Forme_Formes0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 113*/
top.TAB_GLOBAL_COMPO[113]=Compo_Forme_Description_3;
var Col_N0_Nom_De_Varieté_Varietés0=new clAttribut("va_nom","variete",null);

var Varieté_Nom_1=new clAttribut("va_nom","variete",null);


	/* Ce composant représente: variete.va_nom sous le nom "Nom" */
var Compo_Varieté_Nom_1=new clCompoTextBox(Varieté_Nom_1,null,"Nom",false,false);
var Varieté_Espèce_2=new clAttribut("es_nom","espece",null);


	/* Ce composant représente: espece.es_nom sous le nom "Espèce" */
var Compo_Varieté_Espèce_2=new clCompoListeDeroulanteSimple(Varieté_Espèce_2,new Array(clCompoListeDeroulanteSimple.prototype.FiltreParDefaut(),Filtre_Dep_Espèce_0=new clInterfaceFiltrageRelationOnglet("Espèce",Gerer_Espèce,OuvrirOnglet_Varieté)),"Espèce");
var Joint_Esclave_Varieté_Espèce_2=new clJointureMulti("variete",
	new Array(
	new stJointure("espece","va_espece","es_numero",null,false)
	));
var Varieté_Couleur_3=new clAttribut("couleur","variete",null);


	/* Ce composant représente: variete.couleur sous le nom "Couleur" */
var Compo_Varieté_Couleur_3=new clCompoColor(Varieté_Couleur_3,null,"Couleur");
var Varieté_Varietés0=new clEnsembleAttributs("variete",
	new Array(
	new clLiaison(null,Col_N0_Nom_De_Varieté_Varietés0)
	),
	new Array(
	new clLiaison(null,Varieté_Nom_1)
	,new clLiaison(Joint_Esclave_Varieté_Espèce_2,Varieté_Espèce_2)
	,new clLiaison(null,Varieté_Couleur_3)
	));

var Titre_Varieté_Varietés0=new Array("Nom");

	/* Ce composant représente: des éléments de la table variete sous le nom "Varietés" */
var Compo_Varieté_Varietés0=new clCompoListe(Varieté_Varietés0,new Array(new clInterfaceFiltrageVide()),Titre_Varieté_Varietés0,"Varietés",true,false);

	/* Ce composant représente: variete.undefined sous le nom "Varietés" */
 if(ALeDroit(0,"variete"))
 {
Compo_Varieté_Varietés0.GenererXUL(top.document.getElementById("Varieté_Varietés0"));

 }

	/* On l'ajoute au tableau global à l'indice 114*/
top.TAB_GLOBAL_COMPO[114]=Compo_Varieté_Varietés0;

	/* Ce composant représente: des éléments de la table variete sous le nom "Nom" */
 if(ALeDroit(0,"variete"))
 {
Compo_Varieté_Nom_1.GenererXUL(top.document.getElementById("Varieté_Varietés0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 116*/
top.TAB_GLOBAL_COMPO[116]=Compo_Varieté_Nom_1;

	/* Ce composant représente: des éléments de la table espece sous le nom "Espèce" */
 if(ALeDroit(0,"espece"))
 {
Compo_Varieté_Espèce_2.GenererXUL(top.document.getElementById("Varieté_Varietés0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 117*/
top.TAB_GLOBAL_COMPO[117]=Compo_Varieté_Espèce_2;

	/* Ce composant représente: des éléments de la table variete sous le nom "Couleur" */
 if(ALeDroit(0,"variete"))
 {
Compo_Varieté_Couleur_3.GenererXUL(top.document.getElementById("Varieté_Varietés0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 118*/
top.TAB_GLOBAL_COMPO[118]=Compo_Varieté_Couleur_3;
var Col_N0_Nom_De_Composition_Compositions0=new clAttribut("cs_nom","composition",null);

var Composition_Nom_1=new clAttribut("cs_nom","composition",null);


	/* Ce composant représente: composition.cs_nom sous le nom "Nom" */
var Compo_Composition_Nom_1=new clCompoTextBox(Composition_Nom_1,null,"Nom",false,false);
var Composition_Note_2=new clAttribut("note","composition",null);


	/* Ce composant représente: composition.note sous le nom "Note" */
var Compo_Composition_Note_2=new clCompoTextBox(Composition_Note_2,null,"Note",false,true);
var Col_N0_Nom_De_Composition_Composants_3=new clAttribut("cm_nom","composant",null);

var Joint_Col_N0_Nom_De_Composition_Composants_3=new clJointureMulti("compose",
	new Array(
	new stJointure("composant","ce_composant","cm_numero",null,true)
	));
var Col_N1_Concentration_De_Composition_Composants_3=new clAttribut("ce_concentration","compose",null);

var Col_N2_Unité_De_Composition_Composants_3=new clAttribut("ce_unite","compose",null);

var Composition_Concentration_4=new clAttribut("ce_concentration","compose",null);


	/* Ce composant représente: compose.ce_concentration sous le nom "Concentration" */
var Compo_Composition_Concentration_4=new clCompoTextBox(Composition_Concentration_4,null,"Concentration",false,false);
var Composition_Unité_5=new clAttribut("ce_unite","compose",null);


	/* Ce composant représente: compose.ce_unite sous le nom "Unité" */
var Compo_Composition_Unité_5=new clCompoListeDeroulanteStatic(Composition_Unité_5,null,"Unité",new Array('gr/L','%'));
var Composition_Composant_6=new clAttribut("cm_nom","composant",null);


	/* Ce composant représente: composant.cm_nom sous le nom "Composant" */
var Compo_Composition_Composant_6=new clCompoListeDeroulanteSimple(Composition_Composant_6,new Array(clCompoListeDeroulanteSimple.prototype.FiltreParDefaut(),Filtre_Dep_Composants_0=new clInterfaceFiltrageRelationOnglet("Composants",Gerer_Composants,OuvrirOnglet_Composition)),"Composant");
var Joint_Esclave_Composition_Composant_6=new clJointureMulti("compose",
	new Array(
	new stJointure("composant","ce_composant","cm_numero",null,false)
	));
var Composition_Composants_3=new clEnsembleAttributs("compose",
	new Array(
	new clLiaison(Joint_Col_N0_Nom_De_Composition_Composants_3,Col_N0_Nom_De_Composition_Composants_3)
	,new clLiaison(null,Col_N1_Concentration_De_Composition_Composants_3)
	,new clLiaison(null,Col_N2_Unité_De_Composition_Composants_3)
	),
	new Array(
	new clLiaison(null,Composition_Concentration_4)
	,new clLiaison(null,Composition_Unité_5)
	,new clLiaison(Joint_Esclave_Composition_Composant_6,Composition_Composant_6)
	));

var Titre_Composition_Composants_3=new Array("Nom","Concentration","Unité");

	/* Ce composant représente: des éléments de la table compose sous le nom "Composants" */
var Compo_Composition_Composants_3=new clCompoListe(Composition_Composants_3,null,Titre_Composition_Composants_3,"Composants",true,false);
var Joint_Esclave_Composition_Composants_3=new clJointureMulti("composition",
	new Array(
	new stJointure("compose","cs_numero","ce_composition",null,false)
	));
var Composition_Compositions0=new clEnsembleAttributs("composition",
	new Array(
	new clLiaison(null,Col_N0_Nom_De_Composition_Compositions0)
	),
	new Array(
	new clLiaison(null,Composition_Nom_1)
	,new clLiaison(null,Composition_Note_2)
	,new clLiaison(Joint_Esclave_Composition_Composants_3,Composition_Composants_3)
	));

var Titre_Composition_Compositions0=new Array("Nom");

	/* Ce composant représente: des éléments de la table composition sous le nom "Compositions" */
var Compo_Composition_Compositions0=new clCompoListe(Composition_Compositions0,new Array(new clInterfaceFiltrageVide()),Titre_Composition_Compositions0,"Compositions",true,false);

	/* Ce composant représente: composition.undefined sous le nom "Compositions" */
 if(ALeDroit(0,"composition"))
 {
Compo_Composition_Compositions0.GenererXUL(top.document.getElementById("Composition_Compositions0"));

 }

	/* On l'ajoute au tableau global à l'indice 119*/
top.TAB_GLOBAL_COMPO[119]=Compo_Composition_Compositions0;

	/* Ce composant représente: des éléments de la table composition sous le nom "Nom" */
 if(ALeDroit(0,"composition"))
 {
Compo_Composition_Nom_1.GenererXUL(top.document.getElementById("Composition_Compositions0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 121*/
top.TAB_GLOBAL_COMPO[121]=Compo_Composition_Nom_1;

	/* Ce composant représente: des éléments de la table composition sous le nom "Note" */
 if(ALeDroit(0,"composition"))
 {
Compo_Composition_Note_2.GenererXUL(top.document.getElementById("Composition_Compositions0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 122*/
top.TAB_GLOBAL_COMPO[122]=Compo_Composition_Note_2;

	/* Ce composant représente: compose.undefined sous le nom "Composants" */
 if(ALeDroit(0,"compose"))
 {
Compo_Composition_Composants_3.GenererXUL(top.document.getElementById("Composition_Composants_3"));

 }

	/* On l'ajoute au tableau global à l'indice 123*/
top.TAB_GLOBAL_COMPO[123]=Compo_Composition_Composants_3;

	/* Ce composant représente: des éléments de la table compose sous le nom "Concentration" */
 if(ALeDroit(0,"compose"))
 {
Compo_Composition_Concentration_4.GenererXUL(top.document.getElementById("Composition_Composants_3_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 127*/
top.TAB_GLOBAL_COMPO[127]=Compo_Composition_Concentration_4;

	/* Ce composant représente: des éléments de la table compose sous le nom "Unité" */
 if(ALeDroit(0,"compose"))
 {
Compo_Composition_Unité_5.GenererXUL(top.document.getElementById("Composition_Composants_3_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 128*/
top.TAB_GLOBAL_COMPO[128]=Compo_Composition_Unité_5;

	/* Ce composant représente: des éléments de la table composant sous le nom "Composant" */
 if(ALeDroit(0,"composant"))
 {
Compo_Composition_Composant_6.GenererXUL(top.document.getElementById("Composition_Composants_3_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 129*/
top.TAB_GLOBAL_COMPO[129]=Compo_Composition_Composant_6;
var Col_N0_Nom_De_Composants_Composants0=new clAttribut("cm_nom","composant",null);

var Composants_Nom_1=new clAttribut("cm_nom","composant",null);


	/* Ce composant représente: composant.cm_nom sous le nom "Nom" */
var Compo_Composants_Nom_1=new clCompoTextBox(Composants_Nom_1,null,"Nom",false,false);
var Composants_Formule_2=new clAttribut("cm_formule","composant",null);


	/* Ce composant représente: composant.cm_formule sous le nom "Formule" */
var Compo_Composants_Formule_2=new clCompoTextBox(Composants_Formule_2,null,"Formule",false,false);
var Composants_Description_3=new clAttribut("cm_description","composant",null);


	/* Ce composant représente: composant.cm_description sous le nom "Description" */
var Compo_Composants_Description_3=new clCompoTextBox(Composants_Description_3,null,"Description",false,false);
var Composants_Note_4=new clAttribut("note","composant",null);


	/* Ce composant représente: composant.note sous le nom "Note" */
var Compo_Composants_Note_4=new clCompoTextBox(Composants_Note_4,null,"Note",false,true);
var Col_N0_Espèce_De_Composants_Date_Avant_Récolte_5=new clAttribut("es_nom","espece",null);

var Joint_Col_N0_Espèce_De_Composants_Date_Avant_Récolte_5=new clJointureMulti("dateavantrecolte",
	new Array(
	new stJointure("espece","da_espece","es_numero",null,true)
	));
var Col_N1_Dar__jours__De_Composants_Date_Avant_Récolte_5=new clAttribut("da_dar","dateavantrecolte",null);

var Composants_Dar__jours__6=new clAttribut("da_dar","dateavantrecolte",null);


	/* Ce composant représente: dateavantrecolte.da_dar sous le nom "Dar (jours)" */
var Compo_Composants_Dar__jours__6=new clCompoTextBox(Composants_Dar__jours__6,null,"Dar (jours)",false,false);
var Composants_Espèce_7=new clAttribut("es_nom","espece",null);


	/* Ce composant représente: espece.es_nom sous le nom "Espèce" */
var Compo_Composants_Espèce_7=new clCompoListeDeroulanteSimple(Composants_Espèce_7,new Array(clCompoListeDeroulanteSimple.prototype.FiltreParDefaut(),Filtre_Dep_Espèce_1=new clInterfaceFiltrageRelationOnglet("Espèce",Gerer_Espèce,OuvrirOnglet_Composants)),"Espèce");
var Joint_Esclave_Composants_Espèce_7=new clJointureMulti("dateavantrecolte",
	new Array(
	new stJointure("espece","da_espece","es_numero",null,false)
	));
var Composants_Date_Avant_Récolte_5=new clEnsembleAttributs("dateavantrecolte",
	new Array(
	new clLiaison(Joint_Col_N0_Espèce_De_Composants_Date_Avant_Récolte_5,Col_N0_Espèce_De_Composants_Date_Avant_Récolte_5)
	,new clLiaison(null,Col_N1_Dar__jours__De_Composants_Date_Avant_Récolte_5)
	),
	new Array(
	new clLiaison(null,Composants_Dar__jours__6)
	,new clLiaison(Joint_Esclave_Composants_Espèce_7,Composants_Espèce_7)
	));

var Titre_Composants_Date_Avant_Récolte_5=new Array("Espèce","Dar (jours)");

	/* Ce composant représente: des éléments de la table dateavantrecolte sous le nom "Date Avant Récolte" */
var Compo_Composants_Date_Avant_Récolte_5=new clCompoListe(Composants_Date_Avant_Récolte_5,null,Titre_Composants_Date_Avant_Récolte_5,"Date Avant Récolte",true,false);
var Joint_Esclave_Composants_Date_Avant_Récolte_5=new clJointureMulti("composant",
	new Array(
	new stJointure("dateavantrecolte","cm_numero","da_composant",null,false)
	));
var Composants_Composants0=new clEnsembleAttributs("composant",
	new Array(
	new clLiaison(null,Col_N0_Nom_De_Composants_Composants0)
	),
	new Array(
	new clLiaison(null,Composants_Nom_1)
	,new clLiaison(null,Composants_Formule_2)
	,new clLiaison(null,Composants_Description_3)
	,new clLiaison(null,Composants_Note_4)
	,new clLiaison(Joint_Esclave_Composants_Date_Avant_Récolte_5,Composants_Date_Avant_Récolte_5)
	));

var Titre_Composants_Composants0=new Array("Nom");

	/* Ce composant représente: des éléments de la table composant sous le nom "Composants" */
var Compo_Composants_Composants0=new clCompoListe(Composants_Composants0,new Array(new clInterfaceFiltrageVide()),Titre_Composants_Composants0,"Composants",true,false);

	/* Ce composant représente: composant.undefined sous le nom "Composants" */
 if(ALeDroit(0,"composant"))
 {
Compo_Composants_Composants0.GenererXUL(top.document.getElementById("Composants_Composants0"));

 }

	/* On l'ajoute au tableau global à l'indice 130*/
top.TAB_GLOBAL_COMPO[130]=Compo_Composants_Composants0;

	/* Ce composant représente: des éléments de la table composant sous le nom "Nom" */
 if(ALeDroit(0,"composant"))
 {
Compo_Composants_Nom_1.GenererXUL(top.document.getElementById("Composants_Composants0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 132*/
top.TAB_GLOBAL_COMPO[132]=Compo_Composants_Nom_1;

	/* Ce composant représente: des éléments de la table composant sous le nom "Formule" */
 if(ALeDroit(0,"composant"))
 {
Compo_Composants_Formule_2.GenererXUL(top.document.getElementById("Composants_Composants0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 133*/
top.TAB_GLOBAL_COMPO[133]=Compo_Composants_Formule_2;

	/* Ce composant représente: des éléments de la table composant sous le nom "Description" */
 if(ALeDroit(0,"composant"))
 {
Compo_Composants_Description_3.GenererXUL(top.document.getElementById("Composants_Composants0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 134*/
top.TAB_GLOBAL_COMPO[134]=Compo_Composants_Description_3;

	/* Ce composant représente: des éléments de la table composant sous le nom "Note" */
 if(ALeDroit(0,"composant"))
 {
Compo_Composants_Note_4.GenererXUL(top.document.getElementById("Composants_Composants0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 135*/
top.TAB_GLOBAL_COMPO[135]=Compo_Composants_Note_4;

	/* Ce composant représente: dateavantrecolte.undefined sous le nom "Date Avant Récolte" */
 if(ALeDroit(0,"dateavantrecolte"))
 {
Compo_Composants_Date_Avant_Récolte_5.GenererXUL(top.document.getElementById("Composants_Date_Avant_Récolte_5"));

 }

	/* On l'ajoute au tableau global à l'indice 136*/
top.TAB_GLOBAL_COMPO[136]=Compo_Composants_Date_Avant_Récolte_5;

	/* Ce composant représente: des éléments de la table dateavantrecolte sous le nom "Dar (jours)" */
 if(ALeDroit(0,"dateavantrecolte"))
 {
Compo_Composants_Dar__jours__6.GenererXUL(top.document.getElementById("Composants_Date_Avant_Récolte_5_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 139*/
top.TAB_GLOBAL_COMPO[139]=Compo_Composants_Dar__jours__6;

	/* Ce composant représente: des éléments de la table espece sous le nom "Espèce" */
 if(ALeDroit(0,"espece"))
 {
Compo_Composants_Espèce_7.GenererXUL(top.document.getElementById("Composants_Date_Avant_Récolte_5_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 140*/
top.TAB_GLOBAL_COMPO[140]=Compo_Composants_Espèce_7;
var Col_N0_Nom_De_Espèce_Espèces0=new clAttribut("es_nom","espece",null);

var Espèce_Nom_1=new clAttribut("es_nom","espece",null);


	/* Ce composant représente: espece.es_nom sous le nom "Nom" */
var Compo_Espèce_Nom_1=new clCompoTextBox(Espèce_Nom_1,null,"Nom",false,false);
var Espèce_Couleur_2=new clAttribut("couleur","espece",null);


	/* Ce composant représente: espece.couleur sous le nom "Couleur" */
var Compo_Espèce_Couleur_2=new clCompoColor(Espèce_Couleur_2,null,"Couleur");
var Espèce_Note_3=new clAttribut("note","espece",null);


	/* Ce composant représente: espece.note sous le nom "Note" */
var Compo_Espèce_Note_3=new clCompoTextBox(Espèce_Note_3,null,"Note",false,true);
var Espèce_Espèces0=new clEnsembleAttributs("espece",
	new Array(
	new clLiaison(null,Col_N0_Nom_De_Espèce_Espèces0)
	),
	new Array(
	new clLiaison(null,Espèce_Nom_1)
	,new clLiaison(null,Espèce_Couleur_2)
	,new clLiaison(null,Espèce_Note_3)
	));

var Titre_Espèce_Espèces0=new Array("Nom");

	/* Ce composant représente: des éléments de la table espece sous le nom "Espèces" */
var Compo_Espèce_Espèces0=new clCompoListe(Espèce_Espèces0,new Array(new clInterfaceFiltrageVide()),Titre_Espèce_Espèces0,"Espèces",true,false);

	/* Ce composant représente: espece.undefined sous le nom "Espèces" */
 if(ALeDroit(0,"espece"))
 {
Compo_Espèce_Espèces0.GenererXUL(top.document.getElementById("Espèce_Espèces0"));

 }

	/* On l'ajoute au tableau global à l'indice 141*/
top.TAB_GLOBAL_COMPO[141]=Compo_Espèce_Espèces0;

	/* Ce composant représente: des éléments de la table espece sous le nom "Nom" */
 if(ALeDroit(0,"espece"))
 {
Compo_Espèce_Nom_1.GenererXUL(top.document.getElementById("Espèce_Espèces0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 143*/
top.TAB_GLOBAL_COMPO[143]=Compo_Espèce_Nom_1;

	/* Ce composant représente: des éléments de la table espece sous le nom "Couleur" */
 if(ALeDroit(0,"espece"))
 {
Compo_Espèce_Couleur_2.GenererXUL(top.document.getElementById("Espèce_Espèces0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 144*/
top.TAB_GLOBAL_COMPO[144]=Compo_Espèce_Couleur_2;

	/* Ce composant représente: des éléments de la table espece sous le nom "Note" */
 if(ALeDroit(0,"espece"))
 {
Compo_Espèce_Note_3.GenererXUL(top.document.getElementById("Espèce_Espèces0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 145*/
top.TAB_GLOBAL_COMPO[145]=Compo_Espèce_Note_3;
var Col_N0_Nom_De_Classement_Classements0=new clAttribut("cl_nom","classement",null);

var Classement_Nom_1=new clAttribut("cl_nom","classement",null);


	/* Ce composant représente: classement.cl_nom sous le nom "Nom" */
var Compo_Classement_Nom_1=new clCompoTextBox(Classement_Nom_1,null,"Nom",false,false);
var Classement_Symbole_2=new clAttribut("cl_symbole","classement",null);


	/* Ce composant représente: classement.cl_symbole sous le nom "Symbole" */
var Compo_Classement_Symbole_2=new clCompoTextBox(Classement_Symbole_2,null,"Symbole",false,false);
var Classement_Description_3=new clAttribut("cl_description","classement",null);


	/* Ce composant représente: classement.cl_description sous le nom "Description" */
var Compo_Classement_Description_3=new clCompoTextBox(Classement_Description_3,null,"Description",false,false);
var Classement_Classements0=new clEnsembleAttributs("classement",
	new Array(
	new clLiaison(null,Col_N0_Nom_De_Classement_Classements0)
	),
	new Array(
	new clLiaison(null,Classement_Nom_1)
	,new clLiaison(null,Classement_Symbole_2)
	,new clLiaison(null,Classement_Description_3)
	));

var Titre_Classement_Classements0=new Array("Nom");

	/* Ce composant représente: des éléments de la table classement sous le nom "Classements" */
var Compo_Classement_Classements0=new clCompoListe(Classement_Classements0,new Array(new clInterfaceFiltrageVide()),Titre_Classement_Classements0,"Classements",true,false);

	/* Ce composant représente: classement.undefined sous le nom "Classements" */
 if(ALeDroit(0,"classement"))
 {
Compo_Classement_Classements0.GenererXUL(top.document.getElementById("Classement_Classements0"));

 }

	/* On l'ajoute au tableau global à l'indice 146*/
top.TAB_GLOBAL_COMPO[146]=Compo_Classement_Classements0;

	/* Ce composant représente: des éléments de la table classement sous le nom "Nom" */
 if(ALeDroit(0,"classement"))
 {
Compo_Classement_Nom_1.GenererXUL(top.document.getElementById("Classement_Classements0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 148*/
top.TAB_GLOBAL_COMPO[148]=Compo_Classement_Nom_1;

	/* Ce composant représente: des éléments de la table classement sous le nom "Symbole" */
 if(ALeDroit(0,"classement"))
 {
Compo_Classement_Symbole_2.GenererXUL(top.document.getElementById("Classement_Classements0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 149*/
top.TAB_GLOBAL_COMPO[149]=Compo_Classement_Symbole_2;

	/* Ce composant représente: des éléments de la table classement sous le nom "Description" */
 if(ALeDroit(0,"classement"))
 {
Compo_Classement_Description_3.GenererXUL(top.document.getElementById("Classement_Classements0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 150*/
top.TAB_GLOBAL_COMPO[150]=Compo_Classement_Description_3;
var Col_N0_Nom_De_Materiel_Materiels0=new clAttribut("ma_nom","materiel",null);

var Materiel_Nom_1=new clAttribut("ma_nom","materiel",null);


	/* Ce composant représente: materiel.ma_nom sous le nom "Nom" */
var Compo_Materiel_Nom_1=new clCompoTextBox(Materiel_Nom_1,null,"Nom",false,false);
var Materiel_Date_d_achat_2=new clAttribut("ma_dateachat","materiel",null);


	/* Ce composant représente: materiel.ma_dateachat sous le nom "Date d'achat" */
var Compo_Materiel_Date_d_achat_2=new clCompoTextBox(Materiel_Date_d_achat_2,null,"Date d'achat",false,false);
var Materiel_Date_de_mise_en_service_3=new clAttribut("ma_dateservice","materiel",null);


	/* Ce composant représente: materiel.ma_dateservice sous le nom "Date de mise en service" */
var Compo_Materiel_Date_de_mise_en_service_3=new clCompoTextBox(Materiel_Date_de_mise_en_service_3,null,"Date de mise en service",false,false);
var Materiel_Date_de_mise_hors_service_4=new clAttribut("ma_datehorsservice","materiel",null);


	/* Ce composant représente: materiel.ma_datehorsservice sous le nom "Date de mise hors service" */
var Compo_Materiel_Date_de_mise_hors_service_4=new clCompoTextBox(Materiel_Date_de_mise_hors_service_4,null,"Date de mise hors service",false,false);
var Materiel_Prix_5=new clAttribut("ma_prix","materiel",null);


	/* Ce composant représente: materiel.ma_prix sous le nom "Prix" */
var Compo_Materiel_Prix_5=new clCompoTextBox(Materiel_Prix_5,null,"Prix",false,false);
var Materiel_Note_6=new clAttribut("note","materiel",null);


	/* Ce composant représente: materiel.note sous le nom "Note" */
var Compo_Materiel_Note_6=new clCompoTextBox(Materiel_Note_6,null,"Note",false,true);
var Materiel_Modele_7=new clAttribut("mo_nom","modele",null);


	/* Ce composant représente: modele.mo_nom sous le nom "Modele" */
var Compo_Materiel_Modele_7=new clCompoListeDeroulanteSimple(Materiel_Modele_7,new Array(clCompoListeDeroulanteSimple.prototype.FiltreParDefaut(),Filtre_Dep_Modele_0=new clInterfaceFiltrageRelationOnglet("Modele",Gerer_Modele,OuvrirOnglet_Materiel)),"Modele");
var Joint_Esclave_Materiel_Modele_7=new clJointureMulti("materiel",
	new Array(
	new stJointure("modele","ma_modele","mo_numero",null,false)
	));
var Materiel_Materiels0=new clEnsembleAttributs("materiel",
	new Array(
	new clLiaison(null,Col_N0_Nom_De_Materiel_Materiels0)
	),
	new Array(
	new clLiaison(null,Materiel_Nom_1)
	,new clLiaison(null,Materiel_Date_d_achat_2)
	,new clLiaison(null,Materiel_Date_de_mise_en_service_3)
	,new clLiaison(null,Materiel_Date_de_mise_hors_service_4)
	,new clLiaison(null,Materiel_Prix_5)
	,new clLiaison(null,Materiel_Note_6)
	,new clLiaison(Joint_Esclave_Materiel_Modele_7,Materiel_Modele_7)
	));

var Titre_Materiel_Materiels0=new Array("Nom");

	/* Ce composant représente: des éléments de la table materiel sous le nom "Materiels" */
var Compo_Materiel_Materiels0=new clCompoListe(Materiel_Materiels0,new Array(new clInterfaceFiltrageVide()),Titre_Materiel_Materiels0,"Materiels",true,false);

	/* Ce composant représente: materiel.undefined sous le nom "Materiels" */
 if(ALeDroit(0,"materiel"))
 {
Compo_Materiel_Materiels0.GenererXUL(top.document.getElementById("Materiel_Materiels0"));

 }

	/* On l'ajoute au tableau global à l'indice 151*/
top.TAB_GLOBAL_COMPO[151]=Compo_Materiel_Materiels0;

	/* Ce composant représente: des éléments de la table materiel sous le nom "Nom" */
 if(ALeDroit(0,"materiel"))
 {
Compo_Materiel_Nom_1.GenererXUL(top.document.getElementById("Materiel_Materiels0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 153*/
top.TAB_GLOBAL_COMPO[153]=Compo_Materiel_Nom_1;

	/* Ce composant représente: des éléments de la table materiel sous le nom "Date d'achat" */
 if(ALeDroit(0,"materiel"))
 {
Compo_Materiel_Date_d_achat_2.GenererXUL(top.document.getElementById("Materiel_Materiels0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 154*/
top.TAB_GLOBAL_COMPO[154]=Compo_Materiel_Date_d_achat_2;

	/* Ce composant représente: des éléments de la table materiel sous le nom "Date de mise en service" */
 if(ALeDroit(0,"materiel"))
 {
Compo_Materiel_Date_de_mise_en_service_3.GenererXUL(top.document.getElementById("Materiel_Materiels0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 155*/
top.TAB_GLOBAL_COMPO[155]=Compo_Materiel_Date_de_mise_en_service_3;

	/* Ce composant représente: des éléments de la table materiel sous le nom "Date de mise hors service" */
 if(ALeDroit(0,"materiel"))
 {
Compo_Materiel_Date_de_mise_hors_service_4.GenererXUL(top.document.getElementById("Materiel_Materiels0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 156*/
top.TAB_GLOBAL_COMPO[156]=Compo_Materiel_Date_de_mise_hors_service_4;

	/* Ce composant représente: des éléments de la table materiel sous le nom "Prix" */
 if(ALeDroit(0,"materiel"))
 {
Compo_Materiel_Prix_5.GenererXUL(top.document.getElementById("Materiel_Materiels0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 157*/
top.TAB_GLOBAL_COMPO[157]=Compo_Materiel_Prix_5;

	/* Ce composant représente: des éléments de la table materiel sous le nom "Note" */
 if(ALeDroit(0,"materiel"))
 {
Compo_Materiel_Note_6.GenererXUL(top.document.getElementById("Materiel_Materiels0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 158*/
top.TAB_GLOBAL_COMPO[158]=Compo_Materiel_Note_6;

	/* Ce composant représente: des éléments de la table modele sous le nom "Modele" */
 if(ALeDroit(0,"modele"))
 {
Compo_Materiel_Modele_7.GenererXUL(top.document.getElementById("Materiel_Materiels0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 159*/
top.TAB_GLOBAL_COMPO[159]=Compo_Materiel_Modele_7;
var Col_N0_Nom_De_Modele_Modeles0=new clAttribut("mo_nom","modele",null);

var Modele_Nom_1=new clAttribut("mo_nom","modele",null);


	/* Ce composant représente: modele.mo_nom sous le nom "Nom" */
var Compo_Modele_Nom_1=new clCompoTextBox(Modele_Nom_1,null,"Nom",false,false);
var Modele_Réference_2=new clAttribut("mo_reference","modele",null);


	/* Ce composant représente: modele.mo_reference sous le nom "Réference" */
var Compo_Modele_Réference_2=new clCompoTextBox(Modele_Réference_2,null,"Réference",false,false);
var Modele_Note_3=new clAttribut("note","modele",null);


	/* Ce composant représente: modele.note sous le nom "Note" */
var Compo_Modele_Note_3=new clCompoTextBox(Modele_Note_3,null,"Note",false,true);
var Modele_Firme_4=new clAttribut("fi_nom","firme",null);


	/* Ce composant représente: firme.fi_nom sous le nom "Firme" */
var Compo_Modele_Firme_4=new clCompoListeDeroulanteSimple(Modele_Firme_4,new Array(clCompoListeDeroulanteSimple.prototype.FiltreParDefaut(),Filtre_Dep_Firmes_1=new clInterfaceFiltrageRelationOnglet("Firmes",Gerer_Firmes,OuvrirOnglet_Modele)),"Firme");
var Joint_Esclave_Modele_Firme_4=new clJointureMulti("modele",
	new Array(
	new stJointure("firme","mo_firme","fi_numero",null,false)
	));
var Modele_Modeles0=new clEnsembleAttributs("modele",
	new Array(
	new clLiaison(null,Col_N0_Nom_De_Modele_Modeles0)
	),
	new Array(
	new clLiaison(null,Modele_Nom_1)
	,new clLiaison(null,Modele_Réference_2)
	,new clLiaison(null,Modele_Note_3)
	,new clLiaison(Joint_Esclave_Modele_Firme_4,Modele_Firme_4)
	));

var Titre_Modele_Modeles0=new Array("Nom");

	/* Ce composant représente: des éléments de la table modele sous le nom "Modeles" */
var Compo_Modele_Modeles0=new clCompoListe(Modele_Modeles0,new Array(new clInterfaceFiltrageVide()),Titre_Modele_Modeles0,"Modeles",true,false);

	/* Ce composant représente: modele.undefined sous le nom "Modeles" */
 if(ALeDroit(0,"modele"))
 {
Compo_Modele_Modeles0.GenererXUL(top.document.getElementById("Modele_Modeles0"));

 }

	/* On l'ajoute au tableau global à l'indice 160*/
top.TAB_GLOBAL_COMPO[160]=Compo_Modele_Modeles0;

	/* Ce composant représente: des éléments de la table modele sous le nom "Nom" */
 if(ALeDroit(0,"modele"))
 {
Compo_Modele_Nom_1.GenererXUL(top.document.getElementById("Modele_Modeles0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 162*/
top.TAB_GLOBAL_COMPO[162]=Compo_Modele_Nom_1;

	/* Ce composant représente: des éléments de la table modele sous le nom "Réference" */
 if(ALeDroit(0,"modele"))
 {
Compo_Modele_Réference_2.GenererXUL(top.document.getElementById("Modele_Modeles0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 163*/
top.TAB_GLOBAL_COMPO[163]=Compo_Modele_Réference_2;

	/* Ce composant représente: des éléments de la table modele sous le nom "Note" */
 if(ALeDroit(0,"modele"))
 {
Compo_Modele_Note_3.GenererXUL(top.document.getElementById("Modele_Modeles0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 164*/
top.TAB_GLOBAL_COMPO[164]=Compo_Modele_Note_3;

	/* Ce composant représente: des éléments de la table firme sous le nom "Firme" */
 if(ALeDroit(0,"firme"))
 {
Compo_Modele_Firme_4.GenererXUL(top.document.getElementById("Modele_Modeles0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 165*/
top.TAB_GLOBAL_COMPO[165]=Compo_Modele_Firme_4;
var Col_N0_Nom_De_Firmes_Firmes0=new clAttribut("fi_nom","firme",null);

var Firmes_Nom_1=new clAttribut("fi_nom","firme",null);


	/* Ce composant représente: firme.fi_nom sous le nom "Nom" */
var Compo_Firmes_Nom_1=new clCompoTextBox(Firmes_Nom_1,null,"Nom",false,false);
var Firmes_Firmes0=new clEnsembleAttributs("firme",
	new Array(
	new clLiaison(null,Col_N0_Nom_De_Firmes_Firmes0)
	),
	new Array(
	new clLiaison(null,Firmes_Nom_1)
	));

var Titre_Firmes_Firmes0=new Array("Nom");

	/* Ce composant représente: des éléments de la table firme sous le nom "Firmes" */
var Compo_Firmes_Firmes0=new clCompoListe(Firmes_Firmes0,new Array(new clInterfaceFiltrageVide()),Titre_Firmes_Firmes0,"Firmes",true,false);

	/* Ce composant représente: firme.undefined sous le nom "Firmes" */
 if(ALeDroit(0,"firme"))
 {
Compo_Firmes_Firmes0.GenererXUL(top.document.getElementById("Firmes_Firmes0"));

 }

	/* On l'ajoute au tableau global à l'indice 166*/
top.TAB_GLOBAL_COMPO[166]=Compo_Firmes_Firmes0;

	/* Ce composant représente: des éléments de la table firme sous le nom "Nom" */
 if(ALeDroit(0,"firme"))
 {
Compo_Firmes_Nom_1.GenererXUL(top.document.getElementById("Firmes_Firmes0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 168*/
top.TAB_GLOBAL_COMPO[168]=Compo_Firmes_Nom_1;
var Col_N0_Nom_De_Personnes_Personnes_existants0=new clAttribut("pe_nom","personne",null);

var Col_N1_Prenom_De_Personnes_Personnes_existants0=new clAttribut("pe_prenom","personne",null);

var Personnes_Nom_1=new clAttribut("pe_nom","personne",null);


	/* Ce composant représente: personne.pe_nom sous le nom "Nom" */
var Compo_Personnes_Nom_1=new clCompoTextBox(Personnes_Nom_1,null,"Nom",false,false);
var Personnes_Prenom_2=new clAttribut("pe_prenom","personne",null);


	/* Ce composant représente: personne.pe_prenom sous le nom "Prenom" */
var Compo_Personnes_Prenom_2=new clCompoTextBox(Personnes_Prenom_2,null,"Prenom",false,false);
var Personnes_Siret_3=new clAttribut("pe_siret","personne",null);


	/* Ce composant représente: personne.pe_siret sous le nom "Siret" */
var Compo_Personnes_Siret_3=new clCompoTextBox(Personnes_Siret_3,null,"Siret",false,false);
var Personnes_Entreprise_4=new clAttribut("pe_entreprise","personne",null);


	/* Ce composant représente: personne.pe_entreprise sous le nom "Entreprise" */
var Compo_Personnes_Entreprise_4=new clCompoCheckBox(Personnes_Entreprise_4,null,"Entreprise");
var Col_N0_Ligne1_De_Personnes_Adresse_5=new clAttribut("ad_addr1","adresse",null);

var Col_N1_Ligne2_De_Personnes_Adresse_5=new clAttribut("ad_addr2","adresse",null);

var Col_N2_Ligne3_De_Personnes_Adresse_5=new clAttribut("ad_addr3","adresse",null);

var Col_N3_Commune_De_Personnes_Adresse_5=new clAttribut("co_nom","commune",null);

var Joint_Col_N3_Commune_De_Personnes_Adresse_5=new clJointureMulti("adresse",
	new Array(
	new stJointure("commune","ad_commune","co_numero",null,true)
	));
var Col_N4_CP_De_Personnes_Adresse_5=new clAttribut("cp_code","codepostal",null);

var Joint_Col_N4_CP_De_Personnes_Adresse_5=new clJointureMulti("adresse",
	new Array(
	new stJointure("codepostal","ad_codepostal","cp_numero",null,true)
	));
var Personnes_Ligne1_6=new clAttribut("ad_addr1","adresse",null);


	/* Ce composant représente: adresse.ad_addr1 sous le nom "Ligne1" */
var Compo_Personnes_Ligne1_6=new clCompoTextBox(Personnes_Ligne1_6,null,"Ligne1",false,false);
var Personnes_Ligne2_7=new clAttribut("ad_addr2","adresse",null);


	/* Ce composant représente: adresse.ad_addr2 sous le nom "Ligne2" */
var Compo_Personnes_Ligne2_7=new clCompoTextBox(Personnes_Ligne2_7,null,"Ligne2",false,false);
var Personnes_Ligne3_8=new clAttribut("ad_addr3","adresse",null);


	/* Ce composant représente: adresse.ad_addr3 sous le nom "Ligne3" */
var Compo_Personnes_Ligne3_8=new clCompoTextBox(Personnes_Ligne3_8,null,"Ligne3",false,false);
var Personnes_Commune_9=new clAttribut("co_nom","commune",null);


	/* Ce composant représente: commune.co_nom sous le nom "Commune" */
var Compo_Personnes_Commune_9=new clCompoListeDeroulanteSimple(Personnes_Commune_9,new Array(clCompoListeDeroulanteSimple.prototype.FiltreParDefaut(),Filtre_Dep_Communes_0=new clInterfaceFiltrageRelationOnglet("Communes",Gerer_Communes,OuvrirOnglet_Personnes)),"Commune");
var Joint_Esclave_Personnes_Commune_9=new clJointureMulti("adresse",
	new Array(
	new stJointure("commune","ad_commune","co_numero",null,false)
	));
var Personnes_CP_10=new clAttribut("cp_code","codepostal",null);


	/* Ce composant représente: codepostal.cp_code sous le nom "CP" */
var Compo_Personnes_CP_10=new clCompoListeDeroulanteSimple(Personnes_CP_10,new Array(clCompoListeDeroulanteSimple.prototype.FiltreParDefaut(),Filtre_Dep_Codes_postaux_0=new clInterfaceFiltrageRelationOnglet("Codes postaux",Gerer_Codes_postaux,OuvrirOnglet_Personnes)),"CP");
var Joint_Esclave_Personnes_CP_10=new clJointureMulti("adresse",
	new Array(
	new stJointure("codepostal","ad_codepostal","cp_numero",null,false)
	));
var Personnes_Adresse_5=new clEnsembleAttributs("adresse",
	new Array(
	new clLiaison(null,Col_N0_Ligne1_De_Personnes_Adresse_5)
	,new clLiaison(null,Col_N1_Ligne2_De_Personnes_Adresse_5)
	,new clLiaison(null,Col_N2_Ligne3_De_Personnes_Adresse_5)
	,new clLiaison(Joint_Col_N3_Commune_De_Personnes_Adresse_5,Col_N3_Commune_De_Personnes_Adresse_5)
	,new clLiaison(Joint_Col_N4_CP_De_Personnes_Adresse_5,Col_N4_CP_De_Personnes_Adresse_5)
	),
	new Array(
	new clLiaison(null,Personnes_Ligne1_6)
	,new clLiaison(null,Personnes_Ligne2_7)
	,new clLiaison(null,Personnes_Ligne3_8)
	,new clLiaison(Joint_Esclave_Personnes_Commune_9,Personnes_Commune_9)
	,new clLiaison(Joint_Esclave_Personnes_CP_10,Personnes_CP_10)
	));

var Titre_Personnes_Adresse_5=new Array("Ligne1","Ligne2","Ligne3","Commune","CP");

	/* Ce composant représente: des éléments de la table adresse sous le nom "Adresse" */
var Compo_Personnes_Adresse_5=new clCompoListe(Personnes_Adresse_5,null,Titre_Personnes_Adresse_5,"Adresse",true,false);
var Joint_Esclave_Personnes_Adresse_5=new clJointureMulti("personne",
	new Array(
	new stJointure("adressepersonne","pe_numero","ap_personne",null,false)
	,new stJointure("adresse","ap_adresse","ad_numero",null,false)
	));
var Col_N0_Tel_De_Personnes_Contact_11=new clAttribut("cn_tel","contact",null);

var Col_N1_Fax_De_Personnes_Contact_11=new clAttribut("cn_fax","contact",null);

var Col_N2_E_mail_De_Personnes_Contact_11=new clAttribut("cn_email","contact",null);

var Personnes_Tel_12=new clAttribut("cn_tel","contact",null);


	/* Ce composant représente: contact.cn_tel sous le nom "Tel" */
var Compo_Personnes_Tel_12=new clCompoTextBox(Personnes_Tel_12,null,"Tel",false,false);
var Personnes_Fax_13=new clAttribut("cn_fax","contact",null);


	/* Ce composant représente: contact.cn_fax sous le nom "Fax" */
var Compo_Personnes_Fax_13=new clCompoTextBox(Personnes_Fax_13,null,"Fax",false,false);
var Personnes_E_mail_14=new clAttribut("cn_email","contact",null);


	/* Ce composant représente: contact.cn_email sous le nom "E-mail" */
var Compo_Personnes_E_mail_14=new clCompoTextBox(Personnes_E_mail_14,null,"E-mail",false,false);
var Personnes_Contact_11=new clEnsembleAttributs("contact",
	new Array(
	new clLiaison(null,Col_N0_Tel_De_Personnes_Contact_11)
	,new clLiaison(null,Col_N1_Fax_De_Personnes_Contact_11)
	,new clLiaison(null,Col_N2_E_mail_De_Personnes_Contact_11)
	),
	new Array(
	new clLiaison(null,Personnes_Tel_12)
	,new clLiaison(null,Personnes_Fax_13)
	,new clLiaison(null,Personnes_E_mail_14)
	));

var Titre_Personnes_Contact_11=new Array("Tel","Fax","E-mail");

	/* Ce composant représente: des éléments de la table contact sous le nom "Contact" */
var Compo_Personnes_Contact_11=new clCompoListe(Personnes_Contact_11,null,Titre_Personnes_Contact_11,"Contact",true,false);
var Joint_Esclave_Personnes_Contact_11=new clJointureMulti("personne",
	new Array(
	new stJointure("estjoignable","pe_numero","ej_personne",null,false)
	,new stJointure("contact","ej_contact","cn_numero",null,false)
	));
var Personnes_Personnes_existants0=new clEnsembleAttributs("personne",
	new Array(
	new clLiaison(null,Col_N0_Nom_De_Personnes_Personnes_existants0)
	,new clLiaison(null,Col_N1_Prenom_De_Personnes_Personnes_existants0)
	),
	new Array(
	new clLiaison(null,Personnes_Nom_1)
	,new clLiaison(null,Personnes_Prenom_2)
	,new clLiaison(null,Personnes_Siret_3)
	,new clLiaison(null,Personnes_Entreprise_4)
	,new clLiaison(Joint_Esclave_Personnes_Adresse_5,Personnes_Adresse_5)
	,new clLiaison(Joint_Esclave_Personnes_Contact_11,Personnes_Contact_11)
	));

var Titre_Personnes_Personnes_existants0=new Array("Nom","Prenom");

	/* Ce composant représente: des éléments de la table personne sous le nom "Personnes existants" */
var Compo_Personnes_Personnes_existants0=new clCompoListe(Personnes_Personnes_existants0,new Array(new clInterfaceFiltrageVide()),Titre_Personnes_Personnes_existants0,"Personnes existants",true,false);

	/* Ce composant représente: personne.undefined sous le nom "Personnes existants" */
 if(ALeDroit(0,"personne"))
 {
Compo_Personnes_Personnes_existants0.GenererXUL(top.document.getElementById("Personnes_Personnes_existants0"));

 }

	/* On l'ajoute au tableau global à l'indice 169*/
top.TAB_GLOBAL_COMPO[169]=Compo_Personnes_Personnes_existants0;

	/* Ce composant représente: des éléments de la table personne sous le nom "Nom" */
 if(ALeDroit(0,"personne"))
 {
Compo_Personnes_Nom_1.GenererXUL(top.document.getElementById("Personnes_Personnes_existants0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 172*/
top.TAB_GLOBAL_COMPO[172]=Compo_Personnes_Nom_1;

	/* Ce composant représente: des éléments de la table personne sous le nom "Prenom" */
 if(ALeDroit(0,"personne"))
 {
Compo_Personnes_Prenom_2.GenererXUL(top.document.getElementById("Personnes_Personnes_existants0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 173*/
top.TAB_GLOBAL_COMPO[173]=Compo_Personnes_Prenom_2;

	/* Ce composant représente: des éléments de la table personne sous le nom "Siret" */
 if(ALeDroit(0,"personne"))
 {
Compo_Personnes_Siret_3.GenererXUL(top.document.getElementById("Personnes_Personnes_existants0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 174*/
top.TAB_GLOBAL_COMPO[174]=Compo_Personnes_Siret_3;

	/* Ce composant représente: des éléments de la table personne sous le nom "Entreprise" */
 if(ALeDroit(0,"personne"))
 {
Compo_Personnes_Entreprise_4.GenererXUL(top.document.getElementById("Personnes_Personnes_existants0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 175*/
top.TAB_GLOBAL_COMPO[175]=Compo_Personnes_Entreprise_4;

	/* Ce composant représente: adresse.undefined sous le nom "Adresse" */
 if(ALeDroit(0,"adresse"))
 {
Compo_Personnes_Adresse_5.GenererXUL(top.document.getElementById("Personnes_Adresse_5"));

 }

	/* On l'ajoute au tableau global à l'indice 176*/
top.TAB_GLOBAL_COMPO[176]=Compo_Personnes_Adresse_5;

	/* Ce composant représente: des éléments de la table adresse sous le nom "Ligne1" */
 if(ALeDroit(0,"adresse"))
 {
Compo_Personnes_Ligne1_6.GenererXUL(top.document.getElementById("Personnes_Adresse_5_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 182*/
top.TAB_GLOBAL_COMPO[182]=Compo_Personnes_Ligne1_6;

	/* Ce composant représente: des éléments de la table adresse sous le nom "Ligne2" */
 if(ALeDroit(0,"adresse"))
 {
Compo_Personnes_Ligne2_7.GenererXUL(top.document.getElementById("Personnes_Adresse_5_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 183*/
top.TAB_GLOBAL_COMPO[183]=Compo_Personnes_Ligne2_7;

	/* Ce composant représente: des éléments de la table adresse sous le nom "Ligne3" */
 if(ALeDroit(0,"adresse"))
 {
Compo_Personnes_Ligne3_8.GenererXUL(top.document.getElementById("Personnes_Adresse_5_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 184*/
top.TAB_GLOBAL_COMPO[184]=Compo_Personnes_Ligne3_8;

	/* Ce composant représente: des éléments de la table commune sous le nom "Commune" */
 if(ALeDroit(0,"commune"))
 {
Compo_Personnes_Commune_9.GenererXUL(top.document.getElementById("Personnes_Adresse_5_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 185*/
top.TAB_GLOBAL_COMPO[185]=Compo_Personnes_Commune_9;

	/* Ce composant représente: des éléments de la table codepostal sous le nom "CP" */
 if(ALeDroit(0,"codepostal"))
 {
Compo_Personnes_CP_10.GenererXUL(top.document.getElementById("Personnes_Adresse_5_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 186*/
top.TAB_GLOBAL_COMPO[186]=Compo_Personnes_CP_10;

	/* Ce composant représente: contact.undefined sous le nom "Contact" */
 if(ALeDroit(0,"contact"))
 {
Compo_Personnes_Contact_11.GenererXUL(top.document.getElementById("Personnes_Contact_11"));

 }

	/* On l'ajoute au tableau global à l'indice 187*/
top.TAB_GLOBAL_COMPO[187]=Compo_Personnes_Contact_11;

	/* Ce composant représente: des éléments de la table contact sous le nom "Tel" */
 if(ALeDroit(0,"contact"))
 {
Compo_Personnes_Tel_12.GenererXUL(top.document.getElementById("Personnes_Contact_11_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 191*/
top.TAB_GLOBAL_COMPO[191]=Compo_Personnes_Tel_12;

	/* Ce composant représente: des éléments de la table contact sous le nom "Fax" */
 if(ALeDroit(0,"contact"))
 {
Compo_Personnes_Fax_13.GenererXUL(top.document.getElementById("Personnes_Contact_11_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 192*/
top.TAB_GLOBAL_COMPO[192]=Compo_Personnes_Fax_13;

	/* Ce composant représente: des éléments de la table contact sous le nom "E-mail" */
 if(ALeDroit(0,"contact"))
 {
Compo_Personnes_E_mail_14.GenererXUL(top.document.getElementById("Personnes_Contact_11_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 193*/
top.TAB_GLOBAL_COMPO[193]=Compo_Personnes_E_mail_14;
var Col_N0_Nom_De_Communes_Communes0=new clAttribut("co_nom","commune",null);

var Col_N1_Siret_De_Communes_Communes0=new clAttribut("co_siret","commune",null);

var Communes_Nom_1=new clAttribut("co_nom","commune",null);


	/* Ce composant représente: commune.co_nom sous le nom "Nom" */
var Compo_Communes_Nom_1=new clCompoTextBox(Communes_Nom_1,null,"Nom",false,false);
var Communes_Siret_2=new clAttribut("co_siret","commune",null);


	/* Ce composant représente: commune.co_siret sous le nom "Siret" */
var Compo_Communes_Siret_2=new clCompoTextBox(Communes_Siret_2,null,"Siret",false,false);
var Communes_Couleur_3=new clAttribut("couleur","commune",null);


	/* Ce composant représente: commune.couleur sous le nom "Couleur" */
var Compo_Communes_Couleur_3=new clCompoColor(Communes_Couleur_3,null,"Couleur");
var Communes_Communes0=new clEnsembleAttributs("commune",
	new Array(
	new clLiaison(null,Col_N0_Nom_De_Communes_Communes0)
	,new clLiaison(null,Col_N1_Siret_De_Communes_Communes0)
	),
	new Array(
	new clLiaison(null,Communes_Nom_1)
	,new clLiaison(null,Communes_Siret_2)
	,new clLiaison(null,Communes_Couleur_3)
	));

var Titre_Communes_Communes0=new Array("Nom","Siret");

	/* Ce composant représente: des éléments de la table commune sous le nom "Communes" */
var Compo_Communes_Communes0=new clCompoListe(Communes_Communes0,new Array(new clInterfaceFiltrageVide()),Titre_Communes_Communes0,"Communes",true,false);

	/* Ce composant représente: commune.undefined sous le nom "Communes" */
 if(ALeDroit(0,"commune"))
 {
Compo_Communes_Communes0.GenererXUL(top.document.getElementById("Communes_Communes0"));

 }

	/* On l'ajoute au tableau global à l'indice 194*/
top.TAB_GLOBAL_COMPO[194]=Compo_Communes_Communes0;

	/* Ce composant représente: des éléments de la table commune sous le nom "Nom" */
 if(ALeDroit(0,"commune"))
 {
Compo_Communes_Nom_1.GenererXUL(top.document.getElementById("Communes_Communes0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 197*/
top.TAB_GLOBAL_COMPO[197]=Compo_Communes_Nom_1;

	/* Ce composant représente: des éléments de la table commune sous le nom "Siret" */
 if(ALeDroit(0,"commune"))
 {
Compo_Communes_Siret_2.GenererXUL(top.document.getElementById("Communes_Communes0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 198*/
top.TAB_GLOBAL_COMPO[198]=Compo_Communes_Siret_2;

	/* Ce composant représente: des éléments de la table commune sous le nom "Couleur" */
 if(ALeDroit(0,"commune"))
 {
Compo_Communes_Couleur_3.GenererXUL(top.document.getElementById("Communes_Communes0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 199*/
top.TAB_GLOBAL_COMPO[199]=Compo_Communes_Couleur_3;
var Col_N0_CP_De_Codes_postaux_Codes_postaux0=new clAttribut("cp_code","codepostal",null);

var Col_N1_Bureau_dist__De_Codes_postaux_Codes_postaux0=new clAttribut("cp_bureau","codepostal",null);

var Codes_postaux_CP_1=new clAttribut("cp_code","codepostal",null);


	/* Ce composant représente: codepostal.cp_code sous le nom "CP" */
var Compo_Codes_postaux_CP_1=new clCompoTextBox(Codes_postaux_CP_1,null,"CP",false,false);
var Codes_postaux_Bureau_distributeur_2=new clAttribut("cp_bureau","codepostal",null);


	/* Ce composant représente: codepostal.cp_bureau sous le nom "Bureau distributeur" */
var Compo_Codes_postaux_Bureau_distributeur_2=new clCompoTextBox(Codes_postaux_Bureau_distributeur_2,null,"Bureau distributeur",false,false);
var Col_N0_Nom_De_Codes_postaux_Communes_4=new clAttribut("co_nom","commune",null);

var Col_N1_Siret_De_Codes_postaux_Communes_4=new clAttribut("co_siret","commune",null);

var Codes_postaux_Communes_4=new clEnsembleAttributs("commune",
	new Array(
	new clLiaison(null,Col_N0_Nom_De_Codes_postaux_Communes_4)
	,new clLiaison(null,Col_N1_Siret_De_Codes_postaux_Communes_4)
	),
	null);

var Titre_Codes_postaux_Communes_4=new Array("Nom","Siret");

	/* Ce composant représente: des éléments de la table commune sous le nom "Communes" */
var Compo_Codes_postaux_Communes_4=new clCompoListe(Codes_postaux_Communes_4,null,Titre_Codes_postaux_Communes_4,"Communes",true,true);
var Joint_Esclave_Codes_postaux_Communes_4=new clJointureMulti("codepostal",
	new Array(
	new stJointure("communecp","cp_numero","mc_codepostal",null,false)
	,new stJointure("commune","mc_commune","co_numero",null,false)
	));
var Codes_postaux_Codes_postaux0=new clEnsembleAttributs("codepostal",
	new Array(
	new clLiaison(null,Col_N0_CP_De_Codes_postaux_Codes_postaux0)
	,new clLiaison(null,Col_N1_Bureau_dist__De_Codes_postaux_Codes_postaux0)
	),
	new Array(
	new clLiaison(null,Codes_postaux_CP_1)
	,new clLiaison(null,Codes_postaux_Bureau_distributeur_2)
	,new clLiaison(Joint_Esclave_Codes_postaux_Communes_4,Codes_postaux_Communes_4)
	));

var Titre_Codes_postaux_Codes_postaux0=new Array("CP","Bureau dist.");

	/* Ce composant représente: des éléments de la table codepostal sous le nom "Codes postaux" */
var Compo_Codes_postaux_Codes_postaux0=new clCompoListe(Codes_postaux_Codes_postaux0,new Array(new clInterfaceFiltrageVide()),Titre_Codes_postaux_Codes_postaux0,"Codes postaux",true,false);
var Col_N0_Nom_De_Codes_postaux_Indpt_Communes_existantes_3=new clAttribut("co_nom","commune",null);

var Col_N1_Siret_De_Codes_postaux_Indpt_Communes_existantes_3=new clAttribut("co_siret","commune",null);

var Codes_postaux_Indpt_Communes_existantes_3=new clEnsembleAttributs("commune",
	new Array(
	new clLiaison(null,Col_N0_Nom_De_Codes_postaux_Indpt_Communes_existantes_3)
	,new clLiaison(null,Col_N1_Siret_De_Codes_postaux_Indpt_Communes_existantes_3)
	),
	null);

var Titre_Codes_postaux_Indpt_Communes_existantes_3=new Array("Nom","Siret");

	/* Ce composant représente: des éléments de la table commune sous le nom "Communes existantes" */
var Compo_Codes_postaux_Indpt_Communes_existantes_3=new clCompoListe(Codes_postaux_Indpt_Communes_existantes_3,new Array(new clInterfaceFiltrageVide()),Titre_Codes_postaux_Indpt_Communes_existantes_3,"Communes existantes",true,true);

	/* Ce composant représente: codepostal.undefined sous le nom "Codes postaux" */
 if(ALeDroit(0,"codepostal"))
 {
Compo_Codes_postaux_Codes_postaux0.GenererXUL(top.document.getElementById("Codes_postaux_Codes_postaux0"));

 }

	/* On l'ajoute au tableau global à l'indice 200*/
top.TAB_GLOBAL_COMPO[200]=Compo_Codes_postaux_Codes_postaux0;

	/* Ce composant représente: des éléments de la table codepostal sous le nom "CP" */
 if(ALeDroit(0,"codepostal"))
 {
Compo_Codes_postaux_CP_1.GenererXUL(top.document.getElementById("Codes_postaux_Codes_postaux0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 203*/
top.TAB_GLOBAL_COMPO[203]=Compo_Codes_postaux_CP_1;

	/* Ce composant représente: des éléments de la table codepostal sous le nom "Bureau distributeur" */
 if(ALeDroit(0,"codepostal"))
 {
Compo_Codes_postaux_Bureau_distributeur_2.GenererXUL(top.document.getElementById("Codes_postaux_Codes_postaux0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 204*/
top.TAB_GLOBAL_COMPO[204]=Compo_Codes_postaux_Bureau_distributeur_2;

	/* Ce composant représente: commune.undefined sous le nom "Communes existantes" */
 if(ALeDroit(0,"commune"))
 {
Compo_Codes_postaux_Indpt_Communes_existantes_3.GenererXUL(top.document.getElementById("ListeDessus_Codes_postaux_Communes_4"));

 }

	/* On l'ajoute au tableau global à l'indice 205*/
top.TAB_GLOBAL_COMPO[205]=Compo_Codes_postaux_Indpt_Communes_existantes_3;

	/* Ce composant représente: commune.undefined sous le nom "Communes" */
 if(ALeDroit(0,"commune"))
 {
Compo_Codes_postaux_Communes_4.GenererXUL(top.document.getElementById("Codes_postaux_Communes_4"));

 }

	/* On l'ajoute au tableau global à l'indice 208*/
top.TAB_GLOBAL_COMPO[208]=Compo_Codes_postaux_Communes_4;
var Col_N0_Article_De_Achat_Achat0=new clAttribut("ar_nom","article",null);

var Joint_Col_N0_Article_De_Achat_Achat0=new clJointureMulti("achat",
	new Array(
	new stJointure("article","ac_article","ar_numero",null,true)
	));
var Col_N1_Quantite_De_Achat_Achat0=new clAttribut("ac_quantite","achat",null);

var Achat_Article_1=new clAttribut("ar_nom","article",null);


	/* Ce composant représente: article.ar_nom sous le nom "Article" */
var Compo_Achat_Article_1=new clCompoListeDeroulanteSimple(Achat_Article_1,new Array(clCompoListeDeroulanteSimple.prototype.FiltreParDefaut(),Filtre_Dep_Articles_1=new clInterfaceFiltrageRelationOnglet("Articles",Gerer_Articles,OuvrirOnglet_Achat)),"Article");
var Joint_Esclave_Achat_Article_1=new clJointureMulti("achat",
	new Array(
	new stJointure("article","ac_article","ar_numero",null,false)
	));
var Achat_Quantite_2=new clAttribut("ac_quantite","achat",null);


	/* Ce composant représente: achat.ac_quantite sous le nom "Quantite" */
var Compo_Achat_Quantite_2=new clCompoTextBox(Achat_Quantite_2,null,"Quantite",false,false);
var Achat_Date_3=new clAttribut("ac_date","achat",null);


	/* Ce composant représente: achat.ac_date sous le nom "Date" */
var Compo_Achat_Date_3=new clCompoTextBox(Achat_Date_3,null,"Date",false,false);
var Achat_Perte_après_achat_4=new clAttribut("ac_differencequantite","achat",null);


	/* Ce composant représente: achat.ac_differencequantite sous le nom "Perte après achat" */
var Compo_Achat_Perte_après_achat_4=new clCompoTextBox(Achat_Perte_après_achat_4,null,"Perte après achat",false,false);
var Achat_Quantite_5=new clAttribut("ac_quantite","achat",null);


	/* Ce composant représente: achat.ac_quantite sous le nom "Quantite" */
var Compo_Achat_Quantite_5=new clCompoTextBox(Achat_Quantite_5,null,"Quantite",false,false);
var Achat_Note_6=new clAttribut("note","achat",null);


	/* Ce composant représente: achat.note sous le nom "Note" */
var Compo_Achat_Note_6=new clCompoTextBox(Achat_Note_6,null,"Note",false,true);
var Achat_Achat0=new clEnsembleAttributs("achat",
	new Array(
	new clLiaison(Joint_Col_N0_Article_De_Achat_Achat0,Col_N0_Article_De_Achat_Achat0)
	,new clLiaison(null,Col_N1_Quantite_De_Achat_Achat0)
	),
	new Array(
	new clLiaison(Joint_Esclave_Achat_Article_1,Achat_Article_1)
	,new clLiaison(null,Achat_Quantite_2)
	,new clLiaison(null,Achat_Date_3)
	,new clLiaison(null,Achat_Perte_après_achat_4)
	,new clLiaison(null,Achat_Quantite_5)
	,new clLiaison(null,Achat_Note_6)
	));

var Titre_Achat_Achat0=new Array("Article","Quantite");

	/* Ce composant représente: des éléments de la table achat sous le nom "Achat" */
var Compo_Achat_Achat0=new clCompoListe(Achat_Achat0,new Array(new clInterfaceFiltrageVide()),Titre_Achat_Achat0,"Achat",true,false);

	/* Ce composant représente: achat.undefined sous le nom "Achat" */
 if(ALeDroit(0,"achat"))
 {
Compo_Achat_Achat0.GenererXUL(top.document.getElementById("Achat_Achat0"));

 }

	/* On l'ajoute au tableau global à l'indice 211*/
top.TAB_GLOBAL_COMPO[211]=Compo_Achat_Achat0;

	/* Ce composant représente: des éléments de la table article sous le nom "Article" */
 if(ALeDroit(0,"article"))
 {
Compo_Achat_Article_1.GenererXUL(top.document.getElementById("Achat_Achat0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 214*/
top.TAB_GLOBAL_COMPO[214]=Compo_Achat_Article_1;

	/* Ce composant représente: des éléments de la table achat sous le nom "Quantite" */
 if(ALeDroit(0,"achat"))
 {
Compo_Achat_Quantite_2.GenererXUL(top.document.getElementById("Achat_Achat0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 215*/
top.TAB_GLOBAL_COMPO[215]=Compo_Achat_Quantite_2;

	/* Ce composant représente: des éléments de la table achat sous le nom "Date" */
 if(ALeDroit(0,"achat"))
 {
Compo_Achat_Date_3.GenererXUL(top.document.getElementById("Achat_Achat0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 216*/
top.TAB_GLOBAL_COMPO[216]=Compo_Achat_Date_3;

	/* Ce composant représente: des éléments de la table achat sous le nom "Perte après achat" */
 if(ALeDroit(0,"achat"))
 {
Compo_Achat_Perte_après_achat_4.GenererXUL(top.document.getElementById("Achat_Achat0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 217*/
top.TAB_GLOBAL_COMPO[217]=Compo_Achat_Perte_après_achat_4;

	/* Ce composant représente: des éléments de la table achat sous le nom "Quantite" */
 if(ALeDroit(0,"achat"))
 {
Compo_Achat_Quantite_5.GenererXUL(top.document.getElementById("Achat_Achat0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 218*/
top.TAB_GLOBAL_COMPO[218]=Compo_Achat_Quantite_5;

	/* Ce composant représente: des éléments de la table achat sous le nom "Note" */
 if(ALeDroit(0,"achat"))
 {
Compo_Achat_Note_6.GenererXUL(top.document.getElementById("Achat_Achat0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 219*/
top.TAB_GLOBAL_COMPO[219]=Compo_Achat_Note_6;
var Col_N0_Nom_De_Documents_Documents0=new clAttribut("do_nom","document",null);

var Col_N1_Type_De_Documents_Documents0=new clAttribut("to_nom","typedocument",null);

var Joint_Col_N1_Type_De_Documents_Documents0=new clJointureMulti("document",
	new Array(
	new stJointure("typedocument","do_typedocument","to_numero",null,true)
	));
var Documents_Type_1=new clAttribut("to_nom","typedocument",null);


	/* Ce composant représente: typedocument.to_nom sous le nom "Type" */
var Compo_Documents_Type_1=new clCompoListeDeroulanteSimple(Documents_Type_1,new Array(clCompoListeDeroulanteSimple.prototype.FiltreParDefaut(),Filtre_Dep_Type_de_documents_0=new clInterfaceFiltrageRelationOnglet("Type de documents",Gerer_Type_de_documents,OuvrirOnglet_Documents)),"Type");
var Joint_Esclave_Documents_Type_1=new clJointureMulti("document",
	new Array(
	new stJointure("typedocument","do_typedocument","to_numero",null,false)
	));
var Documents_Nom_2=new clAttribut("do_nom","document",null);


	/* Ce composant représente: document.do_nom sous le nom "Nom" */
var Compo_Documents_Nom_2=new clCompoTextBox(Documents_Nom_2,null,"Nom",false,false);
var Documents_Date_3=new clAttribut("do_date","document",null);


	/* Ce composant représente: document.do_date sous le nom "Date" */
var Compo_Documents_Date_3=new clCompoTextBox(Documents_Date_3,null,"Date",false,false);
var Documents_Note_4=new clAttribut("note","document",null);


	/* Ce composant représente: document.note sous le nom "Note" */
var Compo_Documents_Note_4=new clCompoTextBox(Documents_Note_4,null,"Note",false,true);
var Documents_Documents0=new clEnsembleAttributs("document",
	new Array(
	new clLiaison(null,Col_N0_Nom_De_Documents_Documents0)
	,new clLiaison(Joint_Col_N1_Type_De_Documents_Documents0,Col_N1_Type_De_Documents_Documents0)
	),
	new Array(
	new clLiaison(Joint_Esclave_Documents_Type_1,Documents_Type_1)
	,new clLiaison(null,Documents_Nom_2)
	,new clLiaison(null,Documents_Date_3)
	,new clLiaison(null,Documents_Note_4)
	));

var Titre_Documents_Documents0=new Array("Nom","Type");

	/* Ce composant représente: des éléments de la table document sous le nom "Documents" */
var Compo_Documents_Documents0=new clCompoListe(Documents_Documents0,new Array(new clInterfaceFiltrageVide()),Titre_Documents_Documents0,"Documents",true,false);

	/* Ce composant représente: document.undefined sous le nom "Documents" */
 if(ALeDroit(0,"document"))
 {
Compo_Documents_Documents0.GenererXUL(top.document.getElementById("Documents_Documents0"));

 }

	/* On l'ajoute au tableau global à l'indice 220*/
top.TAB_GLOBAL_COMPO[220]=Compo_Documents_Documents0;

	/* Ce composant représente: des éléments de la table typedocument sous le nom "Type" */
 if(ALeDroit(0,"typedocument"))
 {
Compo_Documents_Type_1.GenererXUL(top.document.getElementById("Documents_Documents0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 223*/
top.TAB_GLOBAL_COMPO[223]=Compo_Documents_Type_1;

	/* Ce composant représente: des éléments de la table document sous le nom "Nom" */
 if(ALeDroit(0,"document"))
 {
Compo_Documents_Nom_2.GenererXUL(top.document.getElementById("Documents_Documents0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 224*/
top.TAB_GLOBAL_COMPO[224]=Compo_Documents_Nom_2;

	/* Ce composant représente: des éléments de la table document sous le nom "Date" */
 if(ALeDroit(0,"document"))
 {
Compo_Documents_Date_3.GenererXUL(top.document.getElementById("Documents_Documents0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 225*/
top.TAB_GLOBAL_COMPO[225]=Compo_Documents_Date_3;

	/* Ce composant représente: des éléments de la table document sous le nom "Note" */
 if(ALeDroit(0,"document"))
 {
Compo_Documents_Note_4.GenererXUL(top.document.getElementById("Documents_Documents0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 226*/
top.TAB_GLOBAL_COMPO[226]=Compo_Documents_Note_4;
var Col_N0_Nom_De_Type_de_documents_Type_de_documents0=new clAttribut("to_nom","typedocument",null);

var Type_de_documents_Nom_1=new clAttribut("to_nom","typedocument",null);


	/* Ce composant représente: typedocument.to_nom sous le nom "Nom" */
var Compo_Type_de_documents_Nom_1=new clCompoTextBox(Type_de_documents_Nom_1,null,"Nom",false,false);
var Type_de_documents_Date_2=new clAttribut("to_description","typedocument",null);


	/* Ce composant représente: typedocument.to_description sous le nom "Date" */
var Compo_Type_de_documents_Date_2=new clCompoTextBox(Type_de_documents_Date_2,null,"Date",false,false);
var Type_de_documents_Note_3=new clAttribut("note","typedocument",null);


	/* Ce composant représente: typedocument.note sous le nom "Note" */
var Compo_Type_de_documents_Note_3=new clCompoTextBox(Type_de_documents_Note_3,null,"Note",false,true);
var Type_de_documents_Type_de_documents0=new clEnsembleAttributs("typedocument",
	new Array(
	new clLiaison(null,Col_N0_Nom_De_Type_de_documents_Type_de_documents0)
	),
	new Array(
	new clLiaison(null,Type_de_documents_Nom_1)
	,new clLiaison(null,Type_de_documents_Date_2)
	,new clLiaison(null,Type_de_documents_Note_3)
	));

var Titre_Type_de_documents_Type_de_documents0=new Array("Nom");

	/* Ce composant représente: des éléments de la table typedocument sous le nom "Type de documents" */
var Compo_Type_de_documents_Type_de_documents0=new clCompoListe(Type_de_documents_Type_de_documents0,new Array(new clInterfaceFiltrageVide()),Titre_Type_de_documents_Type_de_documents0,"Type de documents",true,false);

	/* Ce composant représente: typedocument.undefined sous le nom "Type de documents" */
 if(ALeDroit(0,"typedocument"))
 {
Compo_Type_de_documents_Type_de_documents0.GenererXUL(top.document.getElementById("Type_de_documents_Type_de_documents0"));

 }

	/* On l'ajoute au tableau global à l'indice 227*/
top.TAB_GLOBAL_COMPO[227]=Compo_Type_de_documents_Type_de_documents0;

	/* Ce composant représente: des éléments de la table typedocument sous le nom "Nom" */
 if(ALeDroit(0,"typedocument"))
 {
Compo_Type_de_documents_Nom_1.GenererXUL(top.document.getElementById("Type_de_documents_Type_de_documents0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 229*/
top.TAB_GLOBAL_COMPO[229]=Compo_Type_de_documents_Nom_1;

	/* Ce composant représente: des éléments de la table typedocument sous le nom "Date" */
 if(ALeDroit(0,"typedocument"))
 {
Compo_Type_de_documents_Date_2.GenererXUL(top.document.getElementById("Type_de_documents_Type_de_documents0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 230*/
top.TAB_GLOBAL_COMPO[230]=Compo_Type_de_documents_Date_2;

	/* Ce composant représente: des éléments de la table typedocument sous le nom "Note" */
 if(ALeDroit(0,"typedocument"))
 {
Compo_Type_de_documents_Note_3.GenererXUL(top.document.getElementById("Type_de_documents_Type_de_documents0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 231*/
top.TAB_GLOBAL_COMPO[231]=Compo_Type_de_documents_Note_3;
var Col_N0_Nom_De_Prélèvements_Prélèvements0=new clAttribut("pv_nom","prelevement",null);

var Prélèvements_Nom_1=new clAttribut("pv_nom","prelevement",null);


	/* Ce composant représente: prelevement.pv_nom sous le nom "Nom" */
var Compo_Prélèvements_Nom_1=new clCompoTextBox(Prélèvements_Nom_1,null,"Nom",false,false);
var Prélèvements_Type_2=new clAttribut("tv_nom","typeprelevement",null);


	/* Ce composant représente: typeprelevement.tv_nom sous le nom "Type" */
var Compo_Prélèvements_Type_2=new clCompoListeDeroulanteSimple(Prélèvements_Type_2,new Array(clCompoListeDeroulanteSimple.prototype.FiltreParDefaut(),Filtre_Dep_Type_de_prélèvement_0=new clInterfaceFiltrageRelationOnglet("Type de prélèvement",Gerer_Type_de_prélèvement,OuvrirOnglet_Prélèvements)),"Type");
var Joint_Esclave_Prélèvements_Type_2=new clJointureMulti("prelevement",
	new Array(
	new stJointure("typeprelevement","pv_typeprelevement","tv_numero",null,false)
	));
var Prélèvements_Abcisse_3=new clAttribut("pv_x","prelevement",null);


	/* Ce composant représente: prelevement.pv_x sous le nom "Abcisse" */
var Compo_Prélèvements_Abcisse_3=new clCompoTextBox(Prélèvements_Abcisse_3,null,"Abcisse",false,false);
var Prélèvements_Ordonnée_4=new clAttribut("pv_y","prelevement",null);


	/* Ce composant représente: prelevement.pv_y sous le nom "Ordonnée" */
var Compo_Prélèvements_Ordonnée_4=new clCompoTextBox(Prélèvements_Ordonnée_4,null,"Ordonnée",false,false);
var Prélèvements_Altitude_5=new clAttribut("pv_z","prelevement",null);


	/* Ce composant représente: prelevement.pv_z sous le nom "Altitude" */
var Compo_Prélèvements_Altitude_5=new clCompoTextBox(Prélèvements_Altitude_5,null,"Altitude",false,false);
var Prélèvements_Couleur_6=new clAttribut("couleur","prelevement",null);


	/* Ce composant représente: prelevement.couleur sous le nom "Couleur" */
var Compo_Prélèvements_Couleur_6=new clCompoColor(Prélèvements_Couleur_6,null,"Couleur");
var Prélèvements_Note_7=new clAttribut("note","prelevement",null);


	/* Ce composant représente: prelevement.note sous le nom "Note" */
var Compo_Prélèvements_Note_7=new clCompoTextBox(Prélèvements_Note_7,null,"Note",false,true);
var Prélèvements_Prélèvements0=new clEnsembleAttributs("prelevement",
	new Array(
	new clLiaison(null,Col_N0_Nom_De_Prélèvements_Prélèvements0)
	),
	new Array(
	new clLiaison(null,Prélèvements_Nom_1)
	,new clLiaison(Joint_Esclave_Prélèvements_Type_2,Prélèvements_Type_2)
	,new clLiaison(null,Prélèvements_Abcisse_3)
	,new clLiaison(null,Prélèvements_Ordonnée_4)
	,new clLiaison(null,Prélèvements_Altitude_5)
	,new clLiaison(null,Prélèvements_Couleur_6)
	,new clLiaison(null,Prélèvements_Note_7)
	));

var Titre_Prélèvements_Prélèvements0=new Array("Nom");

	/* Ce composant représente: des éléments de la table prelevement sous le nom "Prélèvements" */
var Compo_Prélèvements_Prélèvements0=new clCompoListe(Prélèvements_Prélèvements0,new Array(new clInterfaceFiltrageVide()),Titre_Prélèvements_Prélèvements0,"Prélèvements",true,false);

	/* Ce composant représente: prelevement.undefined sous le nom "Prélèvements" */
 if(ALeDroit(0,"prelevement"))
 {
Compo_Prélèvements_Prélèvements0.GenererXUL(top.document.getElementById("Prélèvements_Prélèvements0"));

 }

	/* On l'ajoute au tableau global à l'indice 232*/
top.TAB_GLOBAL_COMPO[232]=Compo_Prélèvements_Prélèvements0;

	/* Ce composant représente: des éléments de la table prelevement sous le nom "Nom" */
 if(ALeDroit(0,"prelevement"))
 {
Compo_Prélèvements_Nom_1.GenererXUL(top.document.getElementById("Prélèvements_Prélèvements0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 234*/
top.TAB_GLOBAL_COMPO[234]=Compo_Prélèvements_Nom_1;

	/* Ce composant représente: des éléments de la table typeprelevement sous le nom "Type" */
 if(ALeDroit(0,"typeprelevement"))
 {
Compo_Prélèvements_Type_2.GenererXUL(top.document.getElementById("Prélèvements_Prélèvements0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 235*/
top.TAB_GLOBAL_COMPO[235]=Compo_Prélèvements_Type_2;

	/* Ce composant représente: des éléments de la table prelevement sous le nom "Abcisse" */
 if(ALeDroit(0,"prelevement"))
 {
Compo_Prélèvements_Abcisse_3.GenererXUL(top.document.getElementById("Prélèvements_Prélèvements0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 236*/
top.TAB_GLOBAL_COMPO[236]=Compo_Prélèvements_Abcisse_3;

	/* Ce composant représente: des éléments de la table prelevement sous le nom "Ordonnée" */
 if(ALeDroit(0,"prelevement"))
 {
Compo_Prélèvements_Ordonnée_4.GenererXUL(top.document.getElementById("Prélèvements_Prélèvements0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 237*/
top.TAB_GLOBAL_COMPO[237]=Compo_Prélèvements_Ordonnée_4;

	/* Ce composant représente: des éléments de la table prelevement sous le nom "Altitude" */
 if(ALeDroit(0,"prelevement"))
 {
Compo_Prélèvements_Altitude_5.GenererXUL(top.document.getElementById("Prélèvements_Prélèvements0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 238*/
top.TAB_GLOBAL_COMPO[238]=Compo_Prélèvements_Altitude_5;

	/* Ce composant représente: des éléments de la table prelevement sous le nom "Couleur" */
 if(ALeDroit(0,"prelevement"))
 {
Compo_Prélèvements_Couleur_6.GenererXUL(top.document.getElementById("Prélèvements_Prélèvements0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 239*/
top.TAB_GLOBAL_COMPO[239]=Compo_Prélèvements_Couleur_6;

	/* Ce composant représente: des éléments de la table prelevement sous le nom "Note" */
 if(ALeDroit(0,"prelevement"))
 {
Compo_Prélèvements_Note_7.GenererXUL(top.document.getElementById("Prélèvements_Prélèvements0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 240*/
top.TAB_GLOBAL_COMPO[240]=Compo_Prélèvements_Note_7;
var Col_N0_Nom_De_Type_de_prélèvement_Type_de_prélèvement0=new clAttribut("tv_nom","typeprelevement",null);

var Type_de_prélèvement_Nom_1=new clAttribut("tv_nom","typeprelevement",null);


	/* Ce composant représente: typeprelevement.tv_nom sous le nom "Nom" */
var Compo_Type_de_prélèvement_Nom_1=new clCompoTextBox(Type_de_prélèvement_Nom_1,null,"Nom",false,false);
var Type_de_prélèvement_Couleur_2=new clAttribut("couleur","typeprelevement",null);


	/* Ce composant représente: typeprelevement.couleur sous le nom "Couleur" */
var Compo_Type_de_prélèvement_Couleur_2=new clCompoColor(Type_de_prélèvement_Couleur_2,null,"Couleur");
var Type_de_prélèvement_Note_3=new clAttribut("note","typeprelevement",null);


	/* Ce composant représente: typeprelevement.note sous le nom "Note" */
var Compo_Type_de_prélèvement_Note_3=new clCompoTextBox(Type_de_prélèvement_Note_3,null,"Note",false,true);
var Type_de_prélèvement_Type_de_prélèvement0=new clEnsembleAttributs("typeprelevement",
	new Array(
	new clLiaison(null,Col_N0_Nom_De_Type_de_prélèvement_Type_de_prélèvement0)
	),
	new Array(
	new clLiaison(null,Type_de_prélèvement_Nom_1)
	,new clLiaison(null,Type_de_prélèvement_Couleur_2)
	,new clLiaison(null,Type_de_prélèvement_Note_3)
	));

var Titre_Type_de_prélèvement_Type_de_prélèvement0=new Array("Nom");

	/* Ce composant représente: des éléments de la table typeprelevement sous le nom "Type de prélèvement" */
var Compo_Type_de_prélèvement_Type_de_prélèvement0=new clCompoListe(Type_de_prélèvement_Type_de_prélèvement0,new Array(new clInterfaceFiltrageVide()),Titre_Type_de_prélèvement_Type_de_prélèvement0,"Type de prélèvement",true,false);

	/* Ce composant représente: typeprelevement.undefined sous le nom "Type de prélèvement" */
 if(ALeDroit(0,"typeprelevement"))
 {
Compo_Type_de_prélèvement_Type_de_prélèvement0.GenererXUL(top.document.getElementById("Type_de_prélèvement_Type_de_prélèvement0"));

 }

	/* On l'ajoute au tableau global à l'indice 241*/
top.TAB_GLOBAL_COMPO[241]=Compo_Type_de_prélèvement_Type_de_prélèvement0;

	/* Ce composant représente: des éléments de la table typeprelevement sous le nom "Nom" */
 if(ALeDroit(0,"typeprelevement"))
 {
Compo_Type_de_prélèvement_Nom_1.GenererXUL(top.document.getElementById("Type_de_prélèvement_Type_de_prélèvement0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 243*/
top.TAB_GLOBAL_COMPO[243]=Compo_Type_de_prélèvement_Nom_1;

	/* Ce composant représente: des éléments de la table typeprelevement sous le nom "Couleur" */
 if(ALeDroit(0,"typeprelevement"))
 {
Compo_Type_de_prélèvement_Couleur_2.GenererXUL(top.document.getElementById("Type_de_prélèvement_Type_de_prélèvement0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 244*/
top.TAB_GLOBAL_COMPO[244]=Compo_Type_de_prélèvement_Couleur_2;

	/* Ce composant représente: des éléments de la table typeprelevement sous le nom "Note" */
 if(ALeDroit(0,"typeprelevement"))
 {
Compo_Type_de_prélèvement_Note_3.GenererXUL(top.document.getElementById("Type_de_prélèvement_Type_de_prélèvement0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 245*/
top.TAB_GLOBAL_COMPO[245]=Compo_Type_de_prélèvement_Note_3;
var Col_N0_Nom_De_Produits_de_récolte_Produits_de_récolte0=new clAttribut("pl_nom","produitrecolte",null);

var Produits_de_récolte_Nom_1=new clAttribut("pl_nom","produitrecolte",null);


	/* Ce composant représente: produitrecolte.pl_nom sous le nom "Nom" */
var Compo_Produits_de_récolte_Nom_1=new clCompoTextBox(Produits_de_récolte_Nom_1,null,"Nom",false,false);
var Produits_de_récolte_Code_2=new clAttribut("pl_code","produitrecolte",null);


	/* Ce composant représente: produitrecolte.pl_code sous le nom "Code" */
var Compo_Produits_de_récolte_Code_2=new clCompoTextBox(Produits_de_récolte_Code_2,null,"Code",false,false);
var Produits_de_récolte_Prix_3=new clAttribut("pl_prix","produitrecolte",null);


	/* Ce composant représente: produitrecolte.pl_prix sous le nom "Prix" */
var Compo_Produits_de_récolte_Prix_3=new clCompoTextBox(Produits_de_récolte_Prix_3,null,"Prix",false,false);
var Produits_de_récolte_Unité_4=new clAttribut("un_nom","unite",null);


	/* Ce composant représente: unite.un_nom sous le nom "Unité" */
var Compo_Produits_de_récolte_Unité_4=new clCompoListeDeroulanteSimple(Produits_de_récolte_Unité_4,new Array(clCompoListeDeroulanteSimple.prototype.FiltreParDefaut(),Filtre_Dep_Unité_2=new clInterfaceFiltrageRelationOnglet("Unité",Gerer_Unité,OuvrirOnglet_Produits_de_récolte)),"Unité");
var Joint_Esclave_Produits_de_récolte_Unité_4=new clJointureMulti("produitrecolte",
	new Array(
	new stJointure("unite","pl_unite","un_numero",null,false)
	));
var Produits_de_récolte_Type_de_produit_5=new clAttribut("td_nom","typeproduit",null);


	/* Ce composant représente: typeproduit.td_nom sous le nom "Type de produit" */
var Compo_Produits_de_récolte_Type_de_produit_5=new clCompoListeDeroulanteSimple(Produits_de_récolte_Type_de_produit_5,new Array(clCompoListeDeroulanteSimple.prototype.FiltreParDefaut(),Filtre_Dep_Type_de_produits_1=new clInterfaceFiltrageRelationOnglet("Type de produits",Gerer_Type_de_produits,OuvrirOnglet_Produits_de_récolte)),"Type de produit");
var Joint_Esclave_Produits_de_récolte_Type_de_produit_5=new clJointureMulti("produitrecolte",
	new Array(
	new stJointure("typeproduit","pl_typeproduit","td_numero",null,false)
	));
var Produits_de_récolte_Variete_6=new clAttribut("va_nom","variete",null);


	/* Ce composant représente: variete.va_nom sous le nom "Variete" */
var Compo_Produits_de_récolte_Variete_6=new clCompoListeDeroulanteSimple(Produits_de_récolte_Variete_6,new Array(clCompoListeDeroulanteSimple.prototype.FiltreParDefaut(),Filtre_Dep_Varieté_1=new clInterfaceFiltrageRelationOnglet("Varieté",Gerer_Varieté,OuvrirOnglet_Produits_de_récolte)),"Variete");
var Joint_Esclave_Produits_de_récolte_Variete_6=new clJointureMulti("produitrecolte",
	new Array(
	new stJointure("variete","pl_variete","va_numero",null,false)
	));
var Produits_de_récolte_Couleur_7=new clAttribut("couleur","produitrecolte",null);


	/* Ce composant représente: produitrecolte.couleur sous le nom "Couleur" */
var Compo_Produits_de_récolte_Couleur_7=new clCompoColor(Produits_de_récolte_Couleur_7,null,"Couleur");
var Produits_de_récolte_Note_8=new clAttribut("note","produitrecolte",null);


	/* Ce composant représente: produitrecolte.note sous le nom "Note" */
var Compo_Produits_de_récolte_Note_8=new clCompoTextBox(Produits_de_récolte_Note_8,null,"Note",false,true);
var Produits_de_récolte_Produits_de_récolte0=new clEnsembleAttributs("produitrecolte",
	new Array(
	new clLiaison(null,Col_N0_Nom_De_Produits_de_récolte_Produits_de_récolte0)
	),
	new Array(
	new clLiaison(null,Produits_de_récolte_Nom_1)
	,new clLiaison(null,Produits_de_récolte_Code_2)
	,new clLiaison(null,Produits_de_récolte_Prix_3)
	,new clLiaison(Joint_Esclave_Produits_de_récolte_Unité_4,Produits_de_récolte_Unité_4)
	,new clLiaison(Joint_Esclave_Produits_de_récolte_Type_de_produit_5,Produits_de_récolte_Type_de_produit_5)
	,new clLiaison(Joint_Esclave_Produits_de_récolte_Variete_6,Produits_de_récolte_Variete_6)
	,new clLiaison(null,Produits_de_récolte_Couleur_7)
	,new clLiaison(null,Produits_de_récolte_Note_8)
	));

var Titre_Produits_de_récolte_Produits_de_récolte0=new Array("Nom");

	/* Ce composant représente: des éléments de la table produitrecolte sous le nom "Produits de récolte" */
var Compo_Produits_de_récolte_Produits_de_récolte0=new clCompoListe(Produits_de_récolte_Produits_de_récolte0,new Array(new clInterfaceFiltrageVide()),Titre_Produits_de_récolte_Produits_de_récolte0,"Produits de récolte",true,false);

	/* Ce composant représente: produitrecolte.undefined sous le nom "Produits de récolte" */
 if(ALeDroit(0,"produitrecolte"))
 {
Compo_Produits_de_récolte_Produits_de_récolte0.GenererXUL(top.document.getElementById("Produits_de_récolte_Produits_de_récolte0"));

 }

	/* On l'ajoute au tableau global à l'indice 246*/
top.TAB_GLOBAL_COMPO[246]=Compo_Produits_de_récolte_Produits_de_récolte0;

	/* Ce composant représente: des éléments de la table produitrecolte sous le nom "Nom" */
 if(ALeDroit(0,"produitrecolte"))
 {
Compo_Produits_de_récolte_Nom_1.GenererXUL(top.document.getElementById("Produits_de_récolte_Produits_de_récolte0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 248*/
top.TAB_GLOBAL_COMPO[248]=Compo_Produits_de_récolte_Nom_1;

	/* Ce composant représente: des éléments de la table produitrecolte sous le nom "Code" */
 if(ALeDroit(0,"produitrecolte"))
 {
Compo_Produits_de_récolte_Code_2.GenererXUL(top.document.getElementById("Produits_de_récolte_Produits_de_récolte0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 249*/
top.TAB_GLOBAL_COMPO[249]=Compo_Produits_de_récolte_Code_2;

	/* Ce composant représente: des éléments de la table produitrecolte sous le nom "Prix" */
 if(ALeDroit(0,"produitrecolte"))
 {
Compo_Produits_de_récolte_Prix_3.GenererXUL(top.document.getElementById("Produits_de_récolte_Produits_de_récolte0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 250*/
top.TAB_GLOBAL_COMPO[250]=Compo_Produits_de_récolte_Prix_3;

	/* Ce composant représente: des éléments de la table unite sous le nom "Unité" */
 if(ALeDroit(0,"unite"))
 {
Compo_Produits_de_récolte_Unité_4.GenererXUL(top.document.getElementById("Produits_de_récolte_Produits_de_récolte0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 251*/
top.TAB_GLOBAL_COMPO[251]=Compo_Produits_de_récolte_Unité_4;

	/* Ce composant représente: des éléments de la table typeproduit sous le nom "Type de produit" */
 if(ALeDroit(0,"typeproduit"))
 {
Compo_Produits_de_récolte_Type_de_produit_5.GenererXUL(top.document.getElementById("Produits_de_récolte_Produits_de_récolte0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 252*/
top.TAB_GLOBAL_COMPO[252]=Compo_Produits_de_récolte_Type_de_produit_5;

	/* Ce composant représente: des éléments de la table variete sous le nom "Variete" */
 if(ALeDroit(0,"variete"))
 {
Compo_Produits_de_récolte_Variete_6.GenererXUL(top.document.getElementById("Produits_de_récolte_Produits_de_récolte0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 253*/
top.TAB_GLOBAL_COMPO[253]=Compo_Produits_de_récolte_Variete_6;

	/* Ce composant représente: des éléments de la table produitrecolte sous le nom "Couleur" */
 if(ALeDroit(0,"produitrecolte"))
 {
Compo_Produits_de_récolte_Couleur_7.GenererXUL(top.document.getElementById("Produits_de_récolte_Produits_de_récolte0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 254*/
top.TAB_GLOBAL_COMPO[254]=Compo_Produits_de_récolte_Couleur_7;

	/* Ce composant représente: des éléments de la table produitrecolte sous le nom "Note" */
 if(ALeDroit(0,"produitrecolte"))
 {
Compo_Produits_de_récolte_Note_8.GenererXUL(top.document.getElementById("Produits_de_récolte_Produits_de_récolte0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 255*/
top.TAB_GLOBAL_COMPO[255]=Compo_Produits_de_récolte_Note_8;
var Col_N0_Quantite_De_Ventes_Ventes0=new clAttribut("ve_quantite","vente",null);

var Col_N1_Prix_De_Ventes_Ventes0=new clAttribut("ve_prix","vente",null);

var Col_N2_Personne_De_Ventes_Ventes0=new clAttribut("pe_nom","personne",null);

var Joint_Col_N2_Personne_De_Ventes_Ventes0=new clJointureMulti("vente",
	new Array(
	new stJointure("personne","ve_personne","pe_numero",null,true)
	));
var Col_N3_Récolte_De_Ventes_Ventes0=new clAttribut("re_libelle","recolte",null);

var Joint_Col_N3_Récolte_De_Ventes_Ventes0=new clJointureMulti("vente",
	new Array(
	new stJointure("recolte","ve_recolte","re_numero",null,true)
	));
var Col_N4_Reste_De_Ventes_Ventes0=new clAttribut("re_reste","recolte",null);

var Joint_Col_N4_Reste_De_Ventes_Ventes0=new clJointureMulti("vente",
	new Array(
	new stJointure("recolte","ve_recolte","re_numero",null,true)
	));
var Ventes_Quantite_1=new clAttribut("ve_quantite","vente",null);


	/* Ce composant représente: vente.ve_quantite sous le nom "Quantite" */
var Compo_Ventes_Quantite_1=new clCompoTextBox(Ventes_Quantite_1,null,"Quantite",false,false);
var Ventes_Prix_2=new clAttribut("ve_prix","vente",null);


	/* Ce composant représente: vente.ve_prix sous le nom "Prix" */
var Compo_Ventes_Prix_2=new clCompoTextBox(Ventes_Prix_2,null,"Prix",false,false);
var Ventes_Date_3=new clAttribut("ve_date","vente",null);


	/* Ce composant représente: vente.ve_date sous le nom "Date" */
var Compo_Ventes_Date_3=new clCompoTextBox(Ventes_Date_3,null,"Date",false,false);
var Ventes_Personne_4=new clAttribut("pe_nom","personne",null);


	/* Ce composant représente: personne.pe_nom sous le nom "Personne" */
var Compo_Ventes_Personne_4=new clCompoListeDeroulanteSimple(Ventes_Personne_4,new Array(clCompoListeDeroulanteSimple.prototype.FiltreParDefaut(),Filtre_Dep_Personnes_1=new clInterfaceFiltrageRelationOnglet("Personnes",Gerer_Personnes,OuvrirOnglet_Ventes)),"Personne");
var Joint_Esclave_Ventes_Personne_4=new clJointureMulti("vente",
	new Array(
	new stJointure("personne","ve_personne","pe_numero",null,false)
	));
var Ventes_Récolte_5=new clAttribut("re_libelle","recolte",null);


	/* Ce composant représente: recolte.re_libelle sous le nom "Récolte" */
var Compo_Ventes_Récolte_5=new clCompoListeDeroulanteSimple(Ventes_Récolte_5,null,"Récolte");
var Joint_Esclave_Ventes_Récolte_5=new clJointureMulti("vente",
	new Array(
	new stJointure("recolte","ve_recolte","re_numero",null,false)
	));
var Ventes_Note_6=new clAttribut("note","vente",null);


	/* Ce composant représente: vente.note sous le nom "Note" */
var Compo_Ventes_Note_6=new clCompoTextBox(Ventes_Note_6,null,"Note",false,true);
var Ventes_Ventes0=new clEnsembleAttributs("vente",
	new Array(
	new clLiaison(null,Col_N0_Quantite_De_Ventes_Ventes0)
	,new clLiaison(null,Col_N1_Prix_De_Ventes_Ventes0)
	,new clLiaison(Joint_Col_N2_Personne_De_Ventes_Ventes0,Col_N2_Personne_De_Ventes_Ventes0)
	,new clLiaison(Joint_Col_N3_Récolte_De_Ventes_Ventes0,Col_N3_Récolte_De_Ventes_Ventes0)
	,new clLiaison(Joint_Col_N4_Reste_De_Ventes_Ventes0,Col_N4_Reste_De_Ventes_Ventes0)
	),
	new Array(
	new clLiaison(null,Ventes_Quantite_1)
	,new clLiaison(null,Ventes_Prix_2)
	,new clLiaison(null,Ventes_Date_3)
	,new clLiaison(Joint_Esclave_Ventes_Personne_4,Ventes_Personne_4)
	,new clLiaison(Joint_Esclave_Ventes_Récolte_5,Ventes_Récolte_5)
	,new clLiaison(null,Ventes_Note_6)
	));

var Titre_Ventes_Ventes0=new Array("Quantite","Prix","Personne","Récolte","Reste");

	/* Ce composant représente: des éléments de la table vente sous le nom "Ventes" */
var Compo_Ventes_Ventes0=new clCompoListe(Ventes_Ventes0,new Array(new clInterfaceFiltrageVide()),Titre_Ventes_Ventes0,"Ventes",true,false);

	/* Ce composant représente: vente.undefined sous le nom "Ventes" */
 if(ALeDroit(0,"vente"))
 {
Compo_Ventes_Ventes0.GenererXUL(top.document.getElementById("Ventes_Ventes0"));

 }

	/* On l'ajoute au tableau global à l'indice 256*/
top.TAB_GLOBAL_COMPO[256]=Compo_Ventes_Ventes0;

	/* Ce composant représente: des éléments de la table vente sous le nom "Quantite" */
 if(ALeDroit(0,"vente"))
 {
Compo_Ventes_Quantite_1.GenererXUL(top.document.getElementById("Ventes_Ventes0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 262*/
top.TAB_GLOBAL_COMPO[262]=Compo_Ventes_Quantite_1;

	/* Ce composant représente: des éléments de la table vente sous le nom "Prix" */
 if(ALeDroit(0,"vente"))
 {
Compo_Ventes_Prix_2.GenererXUL(top.document.getElementById("Ventes_Ventes0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 263*/
top.TAB_GLOBAL_COMPO[263]=Compo_Ventes_Prix_2;

	/* Ce composant représente: des éléments de la table vente sous le nom "Date" */
 if(ALeDroit(0,"vente"))
 {
Compo_Ventes_Date_3.GenererXUL(top.document.getElementById("Ventes_Ventes0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 264*/
top.TAB_GLOBAL_COMPO[264]=Compo_Ventes_Date_3;

	/* Ce composant représente: des éléments de la table personne sous le nom "Personne" */
 if(ALeDroit(0,"personne"))
 {
Compo_Ventes_Personne_4.GenererXUL(top.document.getElementById("Ventes_Ventes0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 265*/
top.TAB_GLOBAL_COMPO[265]=Compo_Ventes_Personne_4;

	/* Ce composant représente: des éléments de la table recolte sous le nom "Récolte" */
 if(ALeDroit(0,"recolte"))
 {
Compo_Ventes_Récolte_5.GenererXUL(top.document.getElementById("Ventes_Ventes0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 266*/
top.TAB_GLOBAL_COMPO[266]=Compo_Ventes_Récolte_5;

	/* Ce composant représente: des éléments de la table vente sous le nom "Note" */
 if(ALeDroit(0,"vente"))
 {
Compo_Ventes_Note_6.GenererXUL(top.document.getElementById("Ventes_Ventes0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 267*/
top.TAB_GLOBAL_COMPO[267]=Compo_Ventes_Note_6;
var Col_N0_Article_De_Stock_d_achat_Stock_d_achat0=new clAttribut("sa_article_nom","stockachat",null);

var Col_N1_Entree_De_Stock_d_achat_Stock_d_achat0=new clAttribut("sa_entree","stockachat",null);

var Col_N2_Sortie_De_Stock_d_achat_Stock_d_achat0=new clAttribut("sa_sortie","stockachat",null);

var Col_N3_Stock_De_Stock_d_achat_Stock_d_achat0=new clAttribut("sa_stock","stockachat",null);

var Col_N4_Quantité_perdue_De_Stock_d_achat_Stock_d_achat0=new clAttribut("sa_quantiteperdue","stockachat",null);

var Stock_d_achat_Stock_d_achat0=new clEnsembleAttributs("stockachat",
	new Array(
	new clLiaison(null,Col_N0_Article_De_Stock_d_achat_Stock_d_achat0)
	,new clLiaison(null,Col_N1_Entree_De_Stock_d_achat_Stock_d_achat0)
	,new clLiaison(null,Col_N2_Sortie_De_Stock_d_achat_Stock_d_achat0)
	,new clLiaison(null,Col_N3_Stock_De_Stock_d_achat_Stock_d_achat0)
	,new clLiaison(null,Col_N4_Quantité_perdue_De_Stock_d_achat_Stock_d_achat0)
	),
	null);

var Titre_Stock_d_achat_Stock_d_achat0=new Array("Article","Entree","Sortie","Stock","Quantité perdue");

	/* Ce composant représente: des éléments de la table stockachat sous le nom "Stock d'achat" */
var Compo_Stock_d_achat_Stock_d_achat0=new clCompoListe(Stock_d_achat_Stock_d_achat0,new Array(new clInterfaceFiltrageVide()),Titre_Stock_d_achat_Stock_d_achat0,"Stock d'achat",true,false);

	/* Ce composant représente: stockachat.undefined sous le nom "Stock d'achat" */
 if(ALeDroit(0,"stockachat"))
 {
Compo_Stock_d_achat_Stock_d_achat0.GenererXUL(top.document.getElementById("Stock_d_achat_Stock_d_achat0"));

 }

	/* On l'ajoute au tableau global à l'indice 268*/
top.TAB_GLOBAL_COMPO[268]=Compo_Stock_d_achat_Stock_d_achat0;
Filtre_Dep_Profils_0.setComposant(TAB_GLOBAL_COMPO[17],null);
   /* ARBRE DU DESSUS */
   var box=top.document.getElementById("ListeDessus_Profils_Familles_du_profil_6");
   var Tab=ChercherCompo(box,"tree");
   var tree=Tab[0];
   tree.setAttribute("id","Tree_ListeDessus_Profils_Familles_du_profil_6");
   tree.setAttribute("ondblclick","DoubleClic_ArbreDessus(document.getElementById('Tree_ListeDessus_Profils_Familles_du_profil_6'), document.getElementById('Tree_ListeDessous_Profils_Familles_du_profil_6'))");

   /* ARBRE DU DESSOUS */
   var box=top.document.getElementById("Profils_Familles_du_profil_6");
   var Tab=ChercherCompo(box,"tree");
   var tree=Tab[0];
   tree.setAttribute("id","Tree_ListeDessous_Profils_Familles_du_profil_6");
   tree.setAttribute("onkeypress","Suppr_ListeDessous(event)");

   /* ARBRE DU DESSUS */
   var box=top.document.getElementById("ListeDessus_Profils_Type_de_couche_11");
   var Tab=ChercherCompo(box,"tree");
   var tree=Tab[0];
   tree.setAttribute("id","Tree_ListeDessus_Profils_Type_de_couche_11");
   tree.setAttribute("ondblclick","DoubleClic_ArbreDessus(document.getElementById('Tree_ListeDessus_Profils_Type_de_couche_11'), document.getElementById('Tree_ListeDessous_Profils_Type_de_couche_11'))");

   /* ARBRE DU DESSOUS */
   var box=top.document.getElementById("Profils_Type_de_couche_11");
   var Tab=ChercherCompo(box,"tree");
   var tree=Tab[0];
   tree.setAttribute("id","Tree_ListeDessous_Profils_Type_de_couche_11");
   tree.setAttribute("onkeypress","Suppr_ListeDessous(event)");

Filtre_Dep_Famille_de_profil_0.setComposant(TAB_GLOBAL_COMPO[40],null);
Filtre_Dep_Articles_0.setComposant(TAB_GLOBAL_COMPO[45],null);
Filtre_Dep_Articles_1.setComposant(TAB_GLOBAL_COMPO[45],null);
Filtre_Dep_Conditionnements_0.setComposant(TAB_GLOBAL_COMPO[58],null);
Filtre_Dep_Produits_0.setComposant(TAB_GLOBAL_COMPO[67],null);
   /* ARBRE DU DESSUS */
   var box=top.document.getElementById("ListeDessus_Produits_Classements_du_produit_12");
   var Tab=ChercherCompo(box,"tree");
   var tree=Tab[0];
   tree.setAttribute("id","Tree_ListeDessus_Produits_Classements_du_produit_12");
   tree.setAttribute("ondblclick","DoubleClic_ArbreDessus(document.getElementById('Tree_ListeDessus_Produits_Classements_du_produit_12'), document.getElementById('Tree_ListeDessous_Produits_Classements_du_produit_12'))");

   /* ARBRE DU DESSOUS */
   var box=top.document.getElementById("Produits_Classements_du_produit_12");
   var Tab=ChercherCompo(box,"tree");
   var tree=Tab[0];
   tree.setAttribute("id","Tree_ListeDessous_Produits_Classements_du_produit_12");
   tree.setAttribute("onkeypress","Suppr_ListeDessous(event)");

Filtre_Dep_Type_de_couche_0.setComposant(TAB_GLOBAL_COMPO[93],null);
Filtre_Dep_Type_de_couche_1.setComposant(TAB_GLOBAL_COMPO[93],null);
Filtre_Dep_Type_de_produits_0.setComposant(TAB_GLOBAL_COMPO[100],null);
Filtre_Dep_Type_de_produits_1.setComposant(TAB_GLOBAL_COMPO[100],null);
Filtre_Dep_Unité_0.setComposant(TAB_GLOBAL_COMPO[106],null);
Filtre_Dep_Unité_1.setComposant(TAB_GLOBAL_COMPO[106],null);
Filtre_Dep_Unité_2.setComposant(TAB_GLOBAL_COMPO[106],null);
Filtre_Dep_Forme_0.setComposant(TAB_GLOBAL_COMPO[109],null);
Filtre_Dep_Varieté_0.setComposant(TAB_GLOBAL_COMPO[114],null);
Filtre_Dep_Varieté_1.setComposant(TAB_GLOBAL_COMPO[114],null);
Filtre_Dep_Composition_0.setComposant(TAB_GLOBAL_COMPO[119],null);
Filtre_Dep_Composants_0.setComposant(TAB_GLOBAL_COMPO[130],null);
Filtre_Dep_Espèce_0.setComposant(TAB_GLOBAL_COMPO[141],null);
Filtre_Dep_Espèce_1.setComposant(TAB_GLOBAL_COMPO[141],null);
Filtre_Dep_Classement_0.setComposant(TAB_GLOBAL_COMPO[146],null);
Filtre_Dep_Modele_0.setComposant(TAB_GLOBAL_COMPO[160],null);
Filtre_Dep_Firmes_0.setComposant(TAB_GLOBAL_COMPO[166],null);
Filtre_Dep_Firmes_1.setComposant(TAB_GLOBAL_COMPO[166],null);
Filtre_Dep_Personnes_0.setComposant(TAB_GLOBAL_COMPO[169],null);
Filtre_Dep_Personnes_1.setComposant(TAB_GLOBAL_COMPO[169],null);
Filtre_Dep_Communes_0.setComposant(TAB_GLOBAL_COMPO[194],null);
Filtre_Dep_Codes_postaux_0.setComposant(TAB_GLOBAL_COMPO[200],null);
   /* ARBRE DU DESSUS */
   var box=top.document.getElementById("ListeDessus_Codes_postaux_Communes_4");
   var Tab=ChercherCompo(box,"tree");
   var tree=Tab[0];
   tree.setAttribute("id","Tree_ListeDessus_Codes_postaux_Communes_4");
   tree.setAttribute("ondblclick","DoubleClic_ArbreDessus(document.getElementById('Tree_ListeDessus_Codes_postaux_Communes_4'), document.getElementById('Tree_ListeDessous_Codes_postaux_Communes_4'))");

   /* ARBRE DU DESSOUS */
   var box=top.document.getElementById("Codes_postaux_Communes_4");
   var Tab=ChercherCompo(box,"tree");
   var tree=Tab[0];
   tree.setAttribute("id","Tree_ListeDessous_Codes_postaux_Communes_4");
   tree.setAttribute("onkeypress","Suppr_ListeDessous(event)");

Filtre_Dep_Type_de_documents_0.setComposant(TAB_GLOBAL_COMPO[227],null);
Filtre_Dep_Type_de_prélèvement_0.setComposant(TAB_GLOBAL_COMPO[241],null);
 if(ALeDroit(5,"applique"))
 {
/* On refresh les composants non dépendents de l'onget Application de profil*/
var Composant_0 = TAB_GLOBAL_COMPO[3];
if (Composant_0!=null){
Composant_0.ActiverComposant(true);
Composant_0.Refresh();
}

 }
 else
 {
top.document.getElementById("Onglet_Application_de_profil").hidden=true;
if (top.document.getElementById("Onglet_Application_de_profil").selected)
	top.document.getElementById("Tous_les_onglets").advanceSelectedTab(1);

 }
var nb_button=0
 if(ALeDroit(2,"applique"))
 {
nb_button++;
top.document.getElementById("Insert_Application_de_profil_Application__de_profil0").disabled=false;

 }
 else
 {
top.document.getElementById("Insert_Application_de_profil_Application__de_profil0").hidden=true;

 }
 if(ALeDroit(4,"applique"))
 {
nb_button++;
top.document.getElementById("Delete_Application_de_profil_Application__de_profil0").disabled=false;

 }
 else
 {
top.document.getElementById("Delete_Application_de_profil_Application__de_profil0").hidden=true;

 }
 if(ALeDroit(1,"applique"))
 {
nb_button++;
top.document.getElementById("Update_Application_de_profil_Application__de_profil0").disabled=false;

 }
 else
 {
top.document.getElementById("Update_Application_de_profil_Application__de_profil0").hidden=true;

 }
if (nb_button==0)
{
	top.document.getElementById("Validate_Application_de_profil_Application__de_profil0").hidden=true;
	top.document.getElementById("Annuler_Application_de_profil_Application__de_profil0").hidden=true;
}
var nb_button=0
 if(ALeDroit(2,"lot"))
 {
nb_button++;

 }
 else
 {
top.document.getElementById("Insert_Application_de_profil_Lot_s__5").hidden=true;

 }
 if(ALeDroit(4,"lot"))
 {
nb_button++;

 }
 else
 {
top.document.getElementById("Delete_Application_de_profil_Lot_s__5").hidden=true;

 }
 if(ALeDroit(1,"lot"))
 {
nb_button++;

 }
 else
 {
top.document.getElementById("Update_Application_de_profil_Lot_s__5").hidden=true;

 }
if (nb_button==0)
{
	top.document.getElementById("Validate_Application_de_profil_Lot_s__5").hidden=true;
	top.document.getElementById("Annuler_Application_de_profil_Lot_s__5").hidden=true;
}
 if(ALeDroit(5,"profil"))
 {
/* On refresh les composants non dépendents de l'onget Profils*/
var Composant_0 = TAB_GLOBAL_COMPO[17];
if (Composant_0!=null){
Composant_0.ActiverComposant(true);
Composant_0.Refresh();
}
var Composant_5 = TAB_GLOBAL_COMPO[23];
if (Composant_5!=null){
Composant_5.ActiverComposant(true);
Composant_5.Refresh();
}
var Composant_10 = TAB_GLOBAL_COMPO[34];
if (Composant_10!=null){
Composant_10.ActiverComposant(true);
Composant_10.Refresh();
}

 }
 else
 {
top.document.getElementById("Onglet_Profils").hidden=true;
if (top.document.getElementById("Onglet_Profils").selected)
	top.document.getElementById("Tous_les_onglets").advanceSelectedTab(1);

 }
var nb_button=0
 if(ALeDroit(2,"profil"))
 {
nb_button++;
top.document.getElementById("Insert_Profils_Profils_existants0").disabled=false;

 }
 else
 {
top.document.getElementById("Insert_Profils_Profils_existants0").hidden=true;

 }
 if(ALeDroit(4,"profil"))
 {
nb_button++;
top.document.getElementById("Delete_Profils_Profils_existants0").disabled=false;

 }
 else
 {
top.document.getElementById("Delete_Profils_Profils_existants0").hidden=true;

 }
 if(ALeDroit(1,"profil"))
 {
nb_button++;
top.document.getElementById("Update_Profils_Profils_existants0").disabled=false;

 }
 else
 {
top.document.getElementById("Update_Profils_Profils_existants0").hidden=true;

 }
if (nb_button==0)
{
	top.document.getElementById("Validate_Profils_Profils_existants0").hidden=true;
	top.document.getElementById("Annuler_Profils_Profils_existants0").hidden=true;
}
var nb_button=0
 if(ALeDroit(2,"definiprofil"))
 {
nb_button++;

 }
 else
 {
top.document.getElementById("Insert_Profils_Articles_présents_dans_le_profil_7").hidden=true;

 }
 if(ALeDroit(4,"definiprofil"))
 {
nb_button++;

 }
 else
 {
top.document.getElementById("Delete_Profils_Articles_présents_dans_le_profil_7").hidden=true;

 }
 if(ALeDroit(1,"definiprofil"))
 {
nb_button++;

 }
 else
 {
top.document.getElementById("Update_Profils_Articles_présents_dans_le_profil_7").hidden=true;

 }
if (nb_button==0)
{
	top.document.getElementById("Validate_Profils_Articles_présents_dans_le_profil_7").hidden=true;
	top.document.getElementById("Annuler_Profils_Articles_présents_dans_le_profil_7").hidden=true;
}
 if(ALeDroit(5,"typeprofil"))
 {
/* On refresh les composants non dépendents de l'onget Famille de profil*/
var Composant_0 = TAB_GLOBAL_COMPO[40];
if (Composant_0!=null){
Composant_0.ActiverComposant(true);
Composant_0.Refresh();
}

 }
 else
 {
top.document.getElementById("Onglet_Famille_de_profil").hidden=true;
if (top.document.getElementById("Onglet_Famille_de_profil").selected)
	top.document.getElementById("Tous_les_onglets").advanceSelectedTab(1);

 }
var nb_button=0
 if(ALeDroit(2,"typeprofil"))
 {
nb_button++;
top.document.getElementById("Insert_Famille_de_profil_Famille_de_profil0").disabled=false;

 }
 else
 {
top.document.getElementById("Insert_Famille_de_profil_Famille_de_profil0").hidden=true;

 }
 if(ALeDroit(4,"typeprofil"))
 {
nb_button++;
top.document.getElementById("Delete_Famille_de_profil_Famille_de_profil0").disabled=false;

 }
 else
 {
top.document.getElementById("Delete_Famille_de_profil_Famille_de_profil0").hidden=true;

 }
 if(ALeDroit(1,"typeprofil"))
 {
nb_button++;
top.document.getElementById("Update_Famille_de_profil_Famille_de_profil0").disabled=false;

 }
 else
 {
top.document.getElementById("Update_Famille_de_profil_Famille_de_profil0").hidden=true;

 }
if (nb_button==0)
{
	top.document.getElementById("Validate_Famille_de_profil_Famille_de_profil0").hidden=true;
	top.document.getElementById("Annuler_Famille_de_profil_Famille_de_profil0").hidden=true;
}
 if(ALeDroit(5,"article"))
 {
/* On refresh les composants non dépendents de l'onget Articles*/
var Composant_0 = TAB_GLOBAL_COMPO[45];
if (Composant_0!=null){
Composant_0.ActiverComposant(true);
Composant_0.Refresh();
}

 }
 else
 {
top.document.getElementById("Onglet_Articles").hidden=true;
if (top.document.getElementById("Onglet_Articles").selected)
	top.document.getElementById("Tous_les_onglets").advanceSelectedTab(1);

 }
var nb_button=0
 if(ALeDroit(2,"article"))
 {
nb_button++;
top.document.getElementById("Insert_Articles_Articles0").disabled=false;

 }
 else
 {
top.document.getElementById("Insert_Articles_Articles0").hidden=true;

 }
 if(ALeDroit(4,"article"))
 {
nb_button++;
top.document.getElementById("Delete_Articles_Articles0").disabled=false;

 }
 else
 {
top.document.getElementById("Delete_Articles_Articles0").hidden=true;

 }
 if(ALeDroit(1,"article"))
 {
nb_button++;
top.document.getElementById("Update_Articles_Articles0").disabled=false;

 }
 else
 {
top.document.getElementById("Update_Articles_Articles0").hidden=true;

 }
if (nb_button==0)
{
	top.document.getElementById("Validate_Articles_Articles0").hidden=true;
	top.document.getElementById("Annuler_Articles_Articles0").hidden=true;
}
 if(ALeDroit(5,"conditionnement"))
 {
/* On refresh les composants non dépendents de l'onget Conditionnements*/
var Composant_0 = TAB_GLOBAL_COMPO[58];
if (Composant_0!=null){
Composant_0.ActiverComposant(true);
Composant_0.Refresh();
}

 }
 else
 {
top.document.getElementById("Onglet_Conditionnements").hidden=true;
if (top.document.getElementById("Onglet_Conditionnements").selected)
	top.document.getElementById("Tous_les_onglets").advanceSelectedTab(1);

 }
var nb_button=0
 if(ALeDroit(2,"conditionnement"))
 {
nb_button++;
top.document.getElementById("Insert_Conditionnements_Conditionnements0").disabled=false;

 }
 else
 {
top.document.getElementById("Insert_Conditionnements_Conditionnements0").hidden=true;

 }
 if(ALeDroit(4,"conditionnement"))
 {
nb_button++;
top.document.getElementById("Delete_Conditionnements_Conditionnements0").disabled=false;

 }
 else
 {
top.document.getElementById("Delete_Conditionnements_Conditionnements0").hidden=true;

 }
 if(ALeDroit(1,"conditionnement"))
 {
nb_button++;
top.document.getElementById("Update_Conditionnements_Conditionnements0").disabled=false;

 }
 else
 {
top.document.getElementById("Update_Conditionnements_Conditionnements0").hidden=true;

 }
if (nb_button==0)
{
	top.document.getElementById("Validate_Conditionnements_Conditionnements0").hidden=true;
	top.document.getElementById("Annuler_Conditionnements_Conditionnements0").hidden=true;
}
 if(ALeDroit(5,"produit"))
 {
/* On refresh les composants non dépendents de l'onget Produits*/
var Composant_0 = TAB_GLOBAL_COMPO[67];
if (Composant_0!=null){
Composant_0.ActiverComposant(true);
Composant_0.Refresh();
}
var Composant_11 = TAB_GLOBAL_COMPO[80];
if (Composant_11!=null){
Composant_11.ActiverComposant(true);
Composant_11.Refresh();
}

 }
 else
 {
top.document.getElementById("Onglet_Produits").hidden=true;
if (top.document.getElementById("Onglet_Produits").selected)
	top.document.getElementById("Tous_les_onglets").advanceSelectedTab(1);

 }
var nb_button=0
 if(ALeDroit(2,"produit"))
 {
nb_button++;
top.document.getElementById("Insert_Produits_Produits0").disabled=false;

 }
 else
 {
top.document.getElementById("Insert_Produits_Produits0").hidden=true;

 }
 if(ALeDroit(4,"produit"))
 {
nb_button++;
top.document.getElementById("Delete_Produits_Produits0").disabled=false;

 }
 else
 {
top.document.getElementById("Delete_Produits_Produits0").hidden=true;

 }
 if(ALeDroit(1,"produit"))
 {
nb_button++;
top.document.getElementById("Update_Produits_Produits0").disabled=false;

 }
 else
 {
top.document.getElementById("Update_Produits_Produits0").hidden=true;

 }
if (nb_button==0)
{
	top.document.getElementById("Validate_Produits_Produits0").hidden=true;
	top.document.getElementById("Annuler_Produits_Produits0").hidden=true;
}
 if(ALeDroit(5,"couche"))
 {
/* On refresh les composants non dépendents de l'onget Couches*/
var Composant_0 = TAB_GLOBAL_COMPO[86];
if (Composant_0!=null){
Composant_0.ActiverComposant(true);
Composant_0.Refresh();
}

 }
 else
 {
top.document.getElementById("Onglet_Couches").hidden=true;
if (top.document.getElementById("Onglet_Couches").selected)
	top.document.getElementById("Tous_les_onglets").advanceSelectedTab(1);

 }
var nb_button=0
 if(ALeDroit(2,"couche"))
 {
nb_button++;
top.document.getElementById("Insert_Couches_Couches0").disabled=false;

 }
 else
 {
top.document.getElementById("Insert_Couches_Couches0").hidden=true;

 }
 if(ALeDroit(4,"couche"))
 {
nb_button++;
top.document.getElementById("Delete_Couches_Couches0").disabled=false;

 }
 else
 {
top.document.getElementById("Delete_Couches_Couches0").hidden=true;

 }
 if(ALeDroit(1,"couche"))
 {
nb_button++;
top.document.getElementById("Update_Couches_Couches0").disabled=false;

 }
 else
 {
top.document.getElementById("Update_Couches_Couches0").hidden=true;

 }
if (nb_button==0)
{
	top.document.getElementById("Validate_Couches_Couches0").hidden=true;
	top.document.getElementById("Annuler_Couches_Couches0").hidden=true;
}
 if(ALeDroit(5,"typecouche"))
 {
/* On refresh les composants non dépendents de l'onget Type de couche*/
var Composant_0 = TAB_GLOBAL_COMPO[93];
if (Composant_0!=null){
Composant_0.ActiverComposant(true);
Composant_0.Refresh();
}

 }
 else
 {
top.document.getElementById("Onglet_Type_de_couche").hidden=true;
if (top.document.getElementById("Onglet_Type_de_couche").selected)
	top.document.getElementById("Tous_les_onglets").advanceSelectedTab(1);

 }
var nb_button=0
 if(ALeDroit(2,"typecouche"))
 {
nb_button++;
top.document.getElementById("Insert_Type_de_couche_Type_de_couches0").disabled=false;

 }
 else
 {
top.document.getElementById("Insert_Type_de_couche_Type_de_couches0").hidden=true;

 }
 if(ALeDroit(4,"typecouche"))
 {
nb_button++;
top.document.getElementById("Delete_Type_de_couche_Type_de_couches0").disabled=false;

 }
 else
 {
top.document.getElementById("Delete_Type_de_couche_Type_de_couches0").hidden=true;

 }
 if(ALeDroit(1,"typecouche"))
 {
nb_button++;
top.document.getElementById("Update_Type_de_couche_Type_de_couches0").disabled=false;

 }
 else
 {
top.document.getElementById("Update_Type_de_couche_Type_de_couches0").hidden=true;

 }
if (nb_button==0)
{
	top.document.getElementById("Validate_Type_de_couche_Type_de_couches0").hidden=true;
	top.document.getElementById("Annuler_Type_de_couche_Type_de_couches0").hidden=true;
}
 if(ALeDroit(5,"typeproduit"))
 {
/* On refresh les composants non dépendents de l'onget Type de produits*/
var Composant_0 = TAB_GLOBAL_COMPO[100];
if (Composant_0!=null){
Composant_0.ActiverComposant(true);
Composant_0.Refresh();
}

 }
 else
 {
top.document.getElementById("Onglet_Type_de_produits").hidden=true;
if (top.document.getElementById("Onglet_Type_de_produits").selected)
	top.document.getElementById("Tous_les_onglets").advanceSelectedTab(1);

 }
var nb_button=0
 if(ALeDroit(2,"typeproduit"))
 {
nb_button++;
top.document.getElementById("Insert_Type_de_produits_Type_de_produits0").disabled=false;

 }
 else
 {
top.document.getElementById("Insert_Type_de_produits_Type_de_produits0").hidden=true;

 }
 if(ALeDroit(4,"typeproduit"))
 {
nb_button++;
top.document.getElementById("Delete_Type_de_produits_Type_de_produits0").disabled=false;

 }
 else
 {
top.document.getElementById("Delete_Type_de_produits_Type_de_produits0").hidden=true;

 }
 if(ALeDroit(1,"typeproduit"))
 {
nb_button++;
top.document.getElementById("Update_Type_de_produits_Type_de_produits0").disabled=false;

 }
 else
 {
top.document.getElementById("Update_Type_de_produits_Type_de_produits0").hidden=true;

 }
if (nb_button==0)
{
	top.document.getElementById("Validate_Type_de_produits_Type_de_produits0").hidden=true;
	top.document.getElementById("Annuler_Type_de_produits_Type_de_produits0").hidden=true;
}
 if(ALeDroit(5,"unite"))
 {
/* On refresh les composants non dépendents de l'onget Unité*/
var Composant_0 = TAB_GLOBAL_COMPO[106];
if (Composant_0!=null){
Composant_0.ActiverComposant(true);
Composant_0.Refresh();
}

 }
 else
 {
top.document.getElementById("Onglet_Unité").hidden=true;
if (top.document.getElementById("Onglet_Unité").selected)
	top.document.getElementById("Tous_les_onglets").advanceSelectedTab(1);

 }
var nb_button=0
 if(ALeDroit(2,"unite"))
 {
nb_button++;
top.document.getElementById("Insert_Unité_Unités0").disabled=false;

 }
 else
 {
top.document.getElementById("Insert_Unité_Unités0").hidden=true;

 }
 if(ALeDroit(4,"unite"))
 {
nb_button++;
top.document.getElementById("Delete_Unité_Unités0").disabled=false;

 }
 else
 {
top.document.getElementById("Delete_Unité_Unités0").hidden=true;

 }
 if(ALeDroit(1,"unite"))
 {
nb_button++;
top.document.getElementById("Update_Unité_Unités0").disabled=false;

 }
 else
 {
top.document.getElementById("Update_Unité_Unités0").hidden=true;

 }
if (nb_button==0)
{
	top.document.getElementById("Validate_Unité_Unités0").hidden=true;
	top.document.getElementById("Annuler_Unité_Unités0").hidden=true;
}
 if(ALeDroit(5,"forme"))
 {
/* On refresh les composants non dépendents de l'onget Forme*/
var Composant_0 = TAB_GLOBAL_COMPO[109];
if (Composant_0!=null){
Composant_0.ActiverComposant(true);
Composant_0.Refresh();
}

 }
 else
 {
top.document.getElementById("Onglet_Forme").hidden=true;
if (top.document.getElementById("Onglet_Forme").selected)
	top.document.getElementById("Tous_les_onglets").advanceSelectedTab(1);

 }
var nb_button=0
 if(ALeDroit(2,"forme"))
 {
nb_button++;
top.document.getElementById("Insert_Forme_Formes0").disabled=false;

 }
 else
 {
top.document.getElementById("Insert_Forme_Formes0").hidden=true;

 }
 if(ALeDroit(4,"forme"))
 {
nb_button++;
top.document.getElementById("Delete_Forme_Formes0").disabled=false;

 }
 else
 {
top.document.getElementById("Delete_Forme_Formes0").hidden=true;

 }
 if(ALeDroit(1,"forme"))
 {
nb_button++;
top.document.getElementById("Update_Forme_Formes0").disabled=false;

 }
 else
 {
top.document.getElementById("Update_Forme_Formes0").hidden=true;

 }
if (nb_button==0)
{
	top.document.getElementById("Validate_Forme_Formes0").hidden=true;
	top.document.getElementById("Annuler_Forme_Formes0").hidden=true;
}
 if(ALeDroit(5,"variete"))
 {
/* On refresh les composants non dépendents de l'onget Varieté*/
var Composant_0 = TAB_GLOBAL_COMPO[114];
if (Composant_0!=null){
Composant_0.ActiverComposant(true);
Composant_0.Refresh();
}

 }
 else
 {
top.document.getElementById("Onglet_Varieté").hidden=true;
if (top.document.getElementById("Onglet_Varieté").selected)
	top.document.getElementById("Tous_les_onglets").advanceSelectedTab(1);

 }
var nb_button=0
 if(ALeDroit(2,"variete"))
 {
nb_button++;
top.document.getElementById("Insert_Varieté_Varietés0").disabled=false;

 }
 else
 {
top.document.getElementById("Insert_Varieté_Varietés0").hidden=true;

 }
 if(ALeDroit(4,"variete"))
 {
nb_button++;
top.document.getElementById("Delete_Varieté_Varietés0").disabled=false;

 }
 else
 {
top.document.getElementById("Delete_Varieté_Varietés0").hidden=true;

 }
 if(ALeDroit(1,"variete"))
 {
nb_button++;
top.document.getElementById("Update_Varieté_Varietés0").disabled=false;

 }
 else
 {
top.document.getElementById("Update_Varieté_Varietés0").hidden=true;

 }
if (nb_button==0)
{
	top.document.getElementById("Validate_Varieté_Varietés0").hidden=true;
	top.document.getElementById("Annuler_Varieté_Varietés0").hidden=true;
}
 if(ALeDroit(5,"composition"))
 {
/* On refresh les composants non dépendents de l'onget Composition*/
var Composant_0 = TAB_GLOBAL_COMPO[119];
if (Composant_0!=null){
Composant_0.ActiverComposant(true);
Composant_0.Refresh();
}

 }
 else
 {
top.document.getElementById("Onglet_Composition").hidden=true;
if (top.document.getElementById("Onglet_Composition").selected)
	top.document.getElementById("Tous_les_onglets").advanceSelectedTab(1);

 }
var nb_button=0
 if(ALeDroit(2,"composition"))
 {
nb_button++;
top.document.getElementById("Insert_Composition_Compositions0").disabled=false;

 }
 else
 {
top.document.getElementById("Insert_Composition_Compositions0").hidden=true;

 }
 if(ALeDroit(4,"composition"))
 {
nb_button++;
top.document.getElementById("Delete_Composition_Compositions0").disabled=false;

 }
 else
 {
top.document.getElementById("Delete_Composition_Compositions0").hidden=true;

 }
 if(ALeDroit(1,"composition"))
 {
nb_button++;
top.document.getElementById("Update_Composition_Compositions0").disabled=false;

 }
 else
 {
top.document.getElementById("Update_Composition_Compositions0").hidden=true;

 }
if (nb_button==0)
{
	top.document.getElementById("Validate_Composition_Compositions0").hidden=true;
	top.document.getElementById("Annuler_Composition_Compositions0").hidden=true;
}
var nb_button=0
 if(ALeDroit(2,"compose"))
 {
nb_button++;

 }
 else
 {
top.document.getElementById("Insert_Composition_Composants_3").hidden=true;

 }
 if(ALeDroit(4,"compose"))
 {
nb_button++;

 }
 else
 {
top.document.getElementById("Delete_Composition_Composants_3").hidden=true;

 }
 if(ALeDroit(1,"compose"))
 {
nb_button++;

 }
 else
 {
top.document.getElementById("Update_Composition_Composants_3").hidden=true;

 }
if (nb_button==0)
{
	top.document.getElementById("Validate_Composition_Composants_3").hidden=true;
	top.document.getElementById("Annuler_Composition_Composants_3").hidden=true;
}
 if(ALeDroit(5,"composant"))
 {
/* On refresh les composants non dépendents de l'onget Composants*/
var Composant_0 = TAB_GLOBAL_COMPO[130];
if (Composant_0!=null){
Composant_0.ActiverComposant(true);
Composant_0.Refresh();
}

 }
 else
 {
top.document.getElementById("Onglet_Composants").hidden=true;
if (top.document.getElementById("Onglet_Composants").selected)
	top.document.getElementById("Tous_les_onglets").advanceSelectedTab(1);

 }
var nb_button=0
 if(ALeDroit(2,"composant"))
 {
nb_button++;
top.document.getElementById("Insert_Composants_Composants0").disabled=false;

 }
 else
 {
top.document.getElementById("Insert_Composants_Composants0").hidden=true;

 }
 if(ALeDroit(4,"composant"))
 {
nb_button++;
top.document.getElementById("Delete_Composants_Composants0").disabled=false;

 }
 else
 {
top.document.getElementById("Delete_Composants_Composants0").hidden=true;

 }
 if(ALeDroit(1,"composant"))
 {
nb_button++;
top.document.getElementById("Update_Composants_Composants0").disabled=false;

 }
 else
 {
top.document.getElementById("Update_Composants_Composants0").hidden=true;

 }
if (nb_button==0)
{
	top.document.getElementById("Validate_Composants_Composants0").hidden=true;
	top.document.getElementById("Annuler_Composants_Composants0").hidden=true;
}
var nb_button=0
 if(ALeDroit(2,"dateavantrecolte"))
 {
nb_button++;

 }
 else
 {
top.document.getElementById("Insert_Composants_Date_Avant_Récolte_5").hidden=true;

 }
 if(ALeDroit(4,"dateavantrecolte"))
 {
nb_button++;

 }
 else
 {
top.document.getElementById("Delete_Composants_Date_Avant_Récolte_5").hidden=true;

 }
 if(ALeDroit(1,"dateavantrecolte"))
 {
nb_button++;

 }
 else
 {
top.document.getElementById("Update_Composants_Date_Avant_Récolte_5").hidden=true;

 }
if (nb_button==0)
{
	top.document.getElementById("Validate_Composants_Date_Avant_Récolte_5").hidden=true;
	top.document.getElementById("Annuler_Composants_Date_Avant_Récolte_5").hidden=true;
}
 if(ALeDroit(5,"espece"))
 {
/* On refresh les composants non dépendents de l'onget Espèce*/
var Composant_0 = TAB_GLOBAL_COMPO[141];
if (Composant_0!=null){
Composant_0.ActiverComposant(true);
Composant_0.Refresh();
}

 }
 else
 {
top.document.getElementById("Onglet_Espèce").hidden=true;
if (top.document.getElementById("Onglet_Espèce").selected)
	top.document.getElementById("Tous_les_onglets").advanceSelectedTab(1);

 }
var nb_button=0
 if(ALeDroit(2,"espece"))
 {
nb_button++;
top.document.getElementById("Insert_Espèce_Espèces0").disabled=false;

 }
 else
 {
top.document.getElementById("Insert_Espèce_Espèces0").hidden=true;

 }
 if(ALeDroit(4,"espece"))
 {
nb_button++;
top.document.getElementById("Delete_Espèce_Espèces0").disabled=false;

 }
 else
 {
top.document.getElementById("Delete_Espèce_Espèces0").hidden=true;

 }
 if(ALeDroit(1,"espece"))
 {
nb_button++;
top.document.getElementById("Update_Espèce_Espèces0").disabled=false;

 }
 else
 {
top.document.getElementById("Update_Espèce_Espèces0").hidden=true;

 }
if (nb_button==0)
{
	top.document.getElementById("Validate_Espèce_Espèces0").hidden=true;
	top.document.getElementById("Annuler_Espèce_Espèces0").hidden=true;
}
 if(ALeDroit(5,"classement"))
 {
/* On refresh les composants non dépendents de l'onget Classement*/
var Composant_0 = TAB_GLOBAL_COMPO[146];
if (Composant_0!=null){
Composant_0.ActiverComposant(true);
Composant_0.Refresh();
}

 }
 else
 {
top.document.getElementById("Onglet_Classement").hidden=true;
if (top.document.getElementById("Onglet_Classement").selected)
	top.document.getElementById("Tous_les_onglets").advanceSelectedTab(1);

 }
var nb_button=0
 if(ALeDroit(2,"classement"))
 {
nb_button++;
top.document.getElementById("Insert_Classement_Classements0").disabled=false;

 }
 else
 {
top.document.getElementById("Insert_Classement_Classements0").hidden=true;

 }
 if(ALeDroit(4,"classement"))
 {
nb_button++;
top.document.getElementById("Delete_Classement_Classements0").disabled=false;

 }
 else
 {
top.document.getElementById("Delete_Classement_Classements0").hidden=true;

 }
 if(ALeDroit(1,"classement"))
 {
nb_button++;
top.document.getElementById("Update_Classement_Classements0").disabled=false;

 }
 else
 {
top.document.getElementById("Update_Classement_Classements0").hidden=true;

 }
if (nb_button==0)
{
	top.document.getElementById("Validate_Classement_Classements0").hidden=true;
	top.document.getElementById("Annuler_Classement_Classements0").hidden=true;
}
 if(ALeDroit(5,"materiel"))
 {
/* On refresh les composants non dépendents de l'onget Materiel*/
var Composant_0 = TAB_GLOBAL_COMPO[151];
if (Composant_0!=null){
Composant_0.ActiverComposant(true);
Composant_0.Refresh();
}

 }
 else
 {
top.document.getElementById("Onglet_Materiel").hidden=true;
if (top.document.getElementById("Onglet_Materiel").selected)
	top.document.getElementById("Tous_les_onglets").advanceSelectedTab(1);

 }
var nb_button=0
 if(ALeDroit(2,"materiel"))
 {
nb_button++;
top.document.getElementById("Insert_Materiel_Materiels0").disabled=false;

 }
 else
 {
top.document.getElementById("Insert_Materiel_Materiels0").hidden=true;

 }
 if(ALeDroit(4,"materiel"))
 {
nb_button++;
top.document.getElementById("Delete_Materiel_Materiels0").disabled=false;

 }
 else
 {
top.document.getElementById("Delete_Materiel_Materiels0").hidden=true;

 }
 if(ALeDroit(1,"materiel"))
 {
nb_button++;
top.document.getElementById("Update_Materiel_Materiels0").disabled=false;

 }
 else
 {
top.document.getElementById("Update_Materiel_Materiels0").hidden=true;

 }
if (nb_button==0)
{
	top.document.getElementById("Validate_Materiel_Materiels0").hidden=true;
	top.document.getElementById("Annuler_Materiel_Materiels0").hidden=true;
}
 if(ALeDroit(5,"modele"))
 {
/* On refresh les composants non dépendents de l'onget Modele*/
var Composant_0 = TAB_GLOBAL_COMPO[160];
if (Composant_0!=null){
Composant_0.ActiverComposant(true);
Composant_0.Refresh();
}

 }
 else
 {
top.document.getElementById("Onglet_Modele").hidden=true;
if (top.document.getElementById("Onglet_Modele").selected)
	top.document.getElementById("Tous_les_onglets").advanceSelectedTab(1);

 }
var nb_button=0
 if(ALeDroit(2,"modele"))
 {
nb_button++;
top.document.getElementById("Insert_Modele_Modeles0").disabled=false;

 }
 else
 {
top.document.getElementById("Insert_Modele_Modeles0").hidden=true;

 }
 if(ALeDroit(4,"modele"))
 {
nb_button++;
top.document.getElementById("Delete_Modele_Modeles0").disabled=false;

 }
 else
 {
top.document.getElementById("Delete_Modele_Modeles0").hidden=true;

 }
 if(ALeDroit(1,"modele"))
 {
nb_button++;
top.document.getElementById("Update_Modele_Modeles0").disabled=false;

 }
 else
 {
top.document.getElementById("Update_Modele_Modeles0").hidden=true;

 }
if (nb_button==0)
{
	top.document.getElementById("Validate_Modele_Modeles0").hidden=true;
	top.document.getElementById("Annuler_Modele_Modeles0").hidden=true;
}
 if(ALeDroit(5,"firme"))
 {
/* On refresh les composants non dépendents de l'onget Firmes*/
var Composant_0 = TAB_GLOBAL_COMPO[166];
if (Composant_0!=null){
Composant_0.ActiverComposant(true);
Composant_0.Refresh();
}

 }
 else
 {
top.document.getElementById("Onglet_Firmes").hidden=true;
if (top.document.getElementById("Onglet_Firmes").selected)
	top.document.getElementById("Tous_les_onglets").advanceSelectedTab(1);

 }
var nb_button=0
 if(ALeDroit(2,"firme"))
 {
nb_button++;
top.document.getElementById("Insert_Firmes_Firmes0").disabled=false;

 }
 else
 {
top.document.getElementById("Insert_Firmes_Firmes0").hidden=true;

 }
 if(ALeDroit(4,"firme"))
 {
nb_button++;
top.document.getElementById("Delete_Firmes_Firmes0").disabled=false;

 }
 else
 {
top.document.getElementById("Delete_Firmes_Firmes0").hidden=true;

 }
 if(ALeDroit(1,"firme"))
 {
nb_button++;
top.document.getElementById("Update_Firmes_Firmes0").disabled=false;

 }
 else
 {
top.document.getElementById("Update_Firmes_Firmes0").hidden=true;

 }
if (nb_button==0)
{
	top.document.getElementById("Validate_Firmes_Firmes0").hidden=true;
	top.document.getElementById("Annuler_Firmes_Firmes0").hidden=true;
}
 if(ALeDroit(5,"personne"))
 {
/* On refresh les composants non dépendents de l'onget Personnes*/
var Composant_0 = TAB_GLOBAL_COMPO[169];
if (Composant_0!=null){
Composant_0.ActiverComposant(true);
Composant_0.Refresh();
}

 }
 else
 {
top.document.getElementById("Onglet_Personnes").hidden=true;
if (top.document.getElementById("Onglet_Personnes").selected)
	top.document.getElementById("Tous_les_onglets").advanceSelectedTab(1);

 }
var nb_button=0
 if(ALeDroit(2,"personne"))
 {
nb_button++;
top.document.getElementById("Insert_Personnes_Personnes_existants0").disabled=false;

 }
 else
 {
top.document.getElementById("Insert_Personnes_Personnes_existants0").hidden=true;

 }
 if(ALeDroit(4,"personne"))
 {
nb_button++;
top.document.getElementById("Delete_Personnes_Personnes_existants0").disabled=false;

 }
 else
 {
top.document.getElementById("Delete_Personnes_Personnes_existants0").hidden=true;

 }
 if(ALeDroit(1,"personne"))
 {
nb_button++;
top.document.getElementById("Update_Personnes_Personnes_existants0").disabled=false;

 }
 else
 {
top.document.getElementById("Update_Personnes_Personnes_existants0").hidden=true;

 }
if (nb_button==0)
{
	top.document.getElementById("Validate_Personnes_Personnes_existants0").hidden=true;
	top.document.getElementById("Annuler_Personnes_Personnes_existants0").hidden=true;
}
var nb_button=0
 if(ALeDroit(2,"adresse"))
 {
nb_button++;

 }
 else
 {
top.document.getElementById("Insert_Personnes_Adresse_5").hidden=true;

 }
 if(ALeDroit(4,"adresse"))
 {
nb_button++;

 }
 else
 {
top.document.getElementById("Delete_Personnes_Adresse_5").hidden=true;

 }
 if(ALeDroit(1,"adresse"))
 {
nb_button++;

 }
 else
 {
top.document.getElementById("Update_Personnes_Adresse_5").hidden=true;

 }
if (nb_button==0)
{
	top.document.getElementById("Validate_Personnes_Adresse_5").hidden=true;
	top.document.getElementById("Annuler_Personnes_Adresse_5").hidden=true;
}
var nb_button=0
 if(ALeDroit(2,"contact"))
 {
nb_button++;

 }
 else
 {
top.document.getElementById("Insert_Personnes_Contact_11").hidden=true;

 }
 if(ALeDroit(4,"contact"))
 {
nb_button++;

 }
 else
 {
top.document.getElementById("Delete_Personnes_Contact_11").hidden=true;

 }
 if(ALeDroit(1,"contact"))
 {
nb_button++;

 }
 else
 {
top.document.getElementById("Update_Personnes_Contact_11").hidden=true;

 }
if (nb_button==0)
{
	top.document.getElementById("Validate_Personnes_Contact_11").hidden=true;
	top.document.getElementById("Annuler_Personnes_Contact_11").hidden=true;
}
 if(ALeDroit(5,"commune"))
 {
/* On refresh les composants non dépendents de l'onget Communes*/
var Composant_0 = TAB_GLOBAL_COMPO[194];
if (Composant_0!=null){
Composant_0.ActiverComposant(true);
Composant_0.Refresh();
}

 }
 else
 {
top.document.getElementById("Onglet_Communes").hidden=true;
if (top.document.getElementById("Onglet_Communes").selected)
	top.document.getElementById("Tous_les_onglets").advanceSelectedTab(1);

 }
var nb_button=0
 if(ALeDroit(2,"commune"))
 {
nb_button++;
top.document.getElementById("Insert_Communes_Communes0").disabled=false;

 }
 else
 {
top.document.getElementById("Insert_Communes_Communes0").hidden=true;

 }
 if(ALeDroit(4,"commune"))
 {
nb_button++;
top.document.getElementById("Delete_Communes_Communes0").disabled=false;

 }
 else
 {
top.document.getElementById("Delete_Communes_Communes0").hidden=true;

 }
 if(ALeDroit(1,"commune"))
 {
nb_button++;
top.document.getElementById("Update_Communes_Communes0").disabled=false;

 }
 else
 {
top.document.getElementById("Update_Communes_Communes0").hidden=true;

 }
if (nb_button==0)
{
	top.document.getElementById("Validate_Communes_Communes0").hidden=true;
	top.document.getElementById("Annuler_Communes_Communes0").hidden=true;
}
 if(ALeDroit(5,"codepostal"))
 {
/* On refresh les composants non dépendents de l'onget Codes postaux*/
var Composant_0 = TAB_GLOBAL_COMPO[200];
if (Composant_0!=null){
Composant_0.ActiverComposant(true);
Composant_0.Refresh();
}
var Composant_3 = TAB_GLOBAL_COMPO[205];
if (Composant_3!=null){
Composant_3.ActiverComposant(true);
Composant_3.Refresh();
}

 }
 else
 {
top.document.getElementById("Onglet_Codes_postaux").hidden=true;
if (top.document.getElementById("Onglet_Codes_postaux").selected)
	top.document.getElementById("Tous_les_onglets").advanceSelectedTab(1);

 }
var nb_button=0
 if(ALeDroit(2,"codepostal"))
 {
nb_button++;
top.document.getElementById("Insert_Codes_postaux_Codes_postaux0").disabled=false;

 }
 else
 {
top.document.getElementById("Insert_Codes_postaux_Codes_postaux0").hidden=true;

 }
 if(ALeDroit(4,"codepostal"))
 {
nb_button++;
top.document.getElementById("Delete_Codes_postaux_Codes_postaux0").disabled=false;

 }
 else
 {
top.document.getElementById("Delete_Codes_postaux_Codes_postaux0").hidden=true;

 }
 if(ALeDroit(1,"codepostal"))
 {
nb_button++;
top.document.getElementById("Update_Codes_postaux_Codes_postaux0").disabled=false;

 }
 else
 {
top.document.getElementById("Update_Codes_postaux_Codes_postaux0").hidden=true;

 }
if (nb_button==0)
{
	top.document.getElementById("Validate_Codes_postaux_Codes_postaux0").hidden=true;
	top.document.getElementById("Annuler_Codes_postaux_Codes_postaux0").hidden=true;
}
 if(ALeDroit(5,"achat"))
 {
/* On refresh les composants non dépendents de l'onget Achat*/
var Composant_0 = TAB_GLOBAL_COMPO[211];
if (Composant_0!=null){
Composant_0.ActiverComposant(true);
Composant_0.Refresh();
}

 }
 else
 {
top.document.getElementById("Onglet_Achat").hidden=true;
if (top.document.getElementById("Onglet_Achat").selected)
	top.document.getElementById("Tous_les_onglets").advanceSelectedTab(1);

 }
var nb_button=0
 if(ALeDroit(2,"achat"))
 {
nb_button++;
top.document.getElementById("Insert_Achat_Achat0").disabled=false;

 }
 else
 {
top.document.getElementById("Insert_Achat_Achat0").hidden=true;

 }
 if(ALeDroit(4,"achat"))
 {
nb_button++;
top.document.getElementById("Delete_Achat_Achat0").disabled=false;

 }
 else
 {
top.document.getElementById("Delete_Achat_Achat0").hidden=true;

 }
 if(ALeDroit(1,"achat"))
 {
nb_button++;
top.document.getElementById("Update_Achat_Achat0").disabled=false;

 }
 else
 {
top.document.getElementById("Update_Achat_Achat0").hidden=true;

 }
if (nb_button==0)
{
	top.document.getElementById("Validate_Achat_Achat0").hidden=true;
	top.document.getElementById("Annuler_Achat_Achat0").hidden=true;
}
 if(ALeDroit(5,"document"))
 {
/* On refresh les composants non dépendents de l'onget Documents*/
var Composant_0 = TAB_GLOBAL_COMPO[220];
if (Composant_0!=null){
Composant_0.ActiverComposant(true);
Composant_0.Refresh();
}

 }
 else
 {
top.document.getElementById("Onglet_Documents").hidden=true;
if (top.document.getElementById("Onglet_Documents").selected)
	top.document.getElementById("Tous_les_onglets").advanceSelectedTab(1);

 }
var nb_button=0
 if(ALeDroit(2,"document"))
 {
nb_button++;
top.document.getElementById("Insert_Documents_Documents0").disabled=false;

 }
 else
 {
top.document.getElementById("Insert_Documents_Documents0").hidden=true;

 }
 if(ALeDroit(4,"document"))
 {
nb_button++;
top.document.getElementById("Delete_Documents_Documents0").disabled=false;

 }
 else
 {
top.document.getElementById("Delete_Documents_Documents0").hidden=true;

 }
 if(ALeDroit(1,"document"))
 {
nb_button++;
top.document.getElementById("Update_Documents_Documents0").disabled=false;

 }
 else
 {
top.document.getElementById("Update_Documents_Documents0").hidden=true;

 }
if (nb_button==0)
{
	top.document.getElementById("Validate_Documents_Documents0").hidden=true;
	top.document.getElementById("Annuler_Documents_Documents0").hidden=true;
}
 if(ALeDroit(5,"typedocument"))
 {
/* On refresh les composants non dépendents de l'onget Type de documents*/
var Composant_0 = TAB_GLOBAL_COMPO[227];
if (Composant_0!=null){
Composant_0.ActiverComposant(true);
Composant_0.Refresh();
}

 }
 else
 {
top.document.getElementById("Onglet_Type_de_documents").hidden=true;
if (top.document.getElementById("Onglet_Type_de_documents").selected)
	top.document.getElementById("Tous_les_onglets").advanceSelectedTab(1);

 }
var nb_button=0
 if(ALeDroit(2,"typedocument"))
 {
nb_button++;
top.document.getElementById("Insert_Type_de_documents_Type_de_documents0").disabled=false;

 }
 else
 {
top.document.getElementById("Insert_Type_de_documents_Type_de_documents0").hidden=true;

 }
 if(ALeDroit(4,"typedocument"))
 {
nb_button++;
top.document.getElementById("Delete_Type_de_documents_Type_de_documents0").disabled=false;

 }
 else
 {
top.document.getElementById("Delete_Type_de_documents_Type_de_documents0").hidden=true;

 }
 if(ALeDroit(1,"typedocument"))
 {
nb_button++;
top.document.getElementById("Update_Type_de_documents_Type_de_documents0").disabled=false;

 }
 else
 {
top.document.getElementById("Update_Type_de_documents_Type_de_documents0").hidden=true;

 }
if (nb_button==0)
{
	top.document.getElementById("Validate_Type_de_documents_Type_de_documents0").hidden=true;
	top.document.getElementById("Annuler_Type_de_documents_Type_de_documents0").hidden=true;
}
 if(ALeDroit(5,"prelevement"))
 {
/* On refresh les composants non dépendents de l'onget Prélèvements*/
var Composant_0 = TAB_GLOBAL_COMPO[232];
if (Composant_0!=null){
Composant_0.ActiverComposant(true);
Composant_0.Refresh();
}

 }
 else
 {
top.document.getElementById("Onglet_Prélèvements").hidden=true;
if (top.document.getElementById("Onglet_Prélèvements").selected)
	top.document.getElementById("Tous_les_onglets").advanceSelectedTab(1);

 }
var nb_button=0
 if(ALeDroit(2,"prelevement"))
 {
nb_button++;
top.document.getElementById("Insert_Prélèvements_Prélèvements0").disabled=false;

 }
 else
 {
top.document.getElementById("Insert_Prélèvements_Prélèvements0").hidden=true;

 }
 if(ALeDroit(4,"prelevement"))
 {
nb_button++;
top.document.getElementById("Delete_Prélèvements_Prélèvements0").disabled=false;

 }
 else
 {
top.document.getElementById("Delete_Prélèvements_Prélèvements0").hidden=true;

 }
 if(ALeDroit(1,"prelevement"))
 {
nb_button++;
top.document.getElementById("Update_Prélèvements_Prélèvements0").disabled=false;

 }
 else
 {
top.document.getElementById("Update_Prélèvements_Prélèvements0").hidden=true;

 }
if (nb_button==0)
{
	top.document.getElementById("Validate_Prélèvements_Prélèvements0").hidden=true;
	top.document.getElementById("Annuler_Prélèvements_Prélèvements0").hidden=true;
}
 if(ALeDroit(5,"typeprelevement"))
 {
/* On refresh les composants non dépendents de l'onget Type de prélèvement*/
var Composant_0 = TAB_GLOBAL_COMPO[241];
if (Composant_0!=null){
Composant_0.ActiverComposant(true);
Composant_0.Refresh();
}

 }
 else
 {
top.document.getElementById("Onglet_Type_de_prélèvement").hidden=true;
if (top.document.getElementById("Onglet_Type_de_prélèvement").selected)
	top.document.getElementById("Tous_les_onglets").advanceSelectedTab(1);

 }
var nb_button=0
 if(ALeDroit(2,"typeprelevement"))
 {
nb_button++;
top.document.getElementById("Insert_Type_de_prélèvement_Type_de_prélèvement0").disabled=false;

 }
 else
 {
top.document.getElementById("Insert_Type_de_prélèvement_Type_de_prélèvement0").hidden=true;

 }
 if(ALeDroit(4,"typeprelevement"))
 {
nb_button++;
top.document.getElementById("Delete_Type_de_prélèvement_Type_de_prélèvement0").disabled=false;

 }
 else
 {
top.document.getElementById("Delete_Type_de_prélèvement_Type_de_prélèvement0").hidden=true;

 }
 if(ALeDroit(1,"typeprelevement"))
 {
nb_button++;
top.document.getElementById("Update_Type_de_prélèvement_Type_de_prélèvement0").disabled=false;

 }
 else
 {
top.document.getElementById("Update_Type_de_prélèvement_Type_de_prélèvement0").hidden=true;

 }
if (nb_button==0)
{
	top.document.getElementById("Validate_Type_de_prélèvement_Type_de_prélèvement0").hidden=true;
	top.document.getElementById("Annuler_Type_de_prélèvement_Type_de_prélèvement0").hidden=true;
}
 if(ALeDroit(5,"produitrecolte"))
 {
/* On refresh les composants non dépendents de l'onget Produits de récolte*/
var Composant_0 = TAB_GLOBAL_COMPO[246];
if (Composant_0!=null){
Composant_0.ActiverComposant(true);
Composant_0.Refresh();
}

 }
 else
 {
top.document.getElementById("Onglet_Produits_de_récolte").hidden=true;
if (top.document.getElementById("Onglet_Produits_de_récolte").selected)
	top.document.getElementById("Tous_les_onglets").advanceSelectedTab(1);

 }
var nb_button=0
 if(ALeDroit(2,"produitrecolte"))
 {
nb_button++;
top.document.getElementById("Insert_Produits_de_récolte_Produits_de_récolte0").disabled=false;

 }
 else
 {
top.document.getElementById("Insert_Produits_de_récolte_Produits_de_récolte0").hidden=true;

 }
 if(ALeDroit(4,"produitrecolte"))
 {
nb_button++;
top.document.getElementById("Delete_Produits_de_récolte_Produits_de_récolte0").disabled=false;

 }
 else
 {
top.document.getElementById("Delete_Produits_de_récolte_Produits_de_récolte0").hidden=true;

 }
 if(ALeDroit(1,"produitrecolte"))
 {
nb_button++;
top.document.getElementById("Update_Produits_de_récolte_Produits_de_récolte0").disabled=false;

 }
 else
 {
top.document.getElementById("Update_Produits_de_récolte_Produits_de_récolte0").hidden=true;

 }
if (nb_button==0)
{
	top.document.getElementById("Validate_Produits_de_récolte_Produits_de_récolte0").hidden=true;
	top.document.getElementById("Annuler_Produits_de_récolte_Produits_de_récolte0").hidden=true;
}
 if(ALeDroit(5,"vente"))
 {
/* On refresh les composants non dépendents de l'onget Ventes*/
var Composant_0 = TAB_GLOBAL_COMPO[256];
if (Composant_0!=null){
Composant_0.ActiverComposant(true);
Composant_0.Refresh();
}

 }
 else
 {
top.document.getElementById("Onglet_Ventes").hidden=true;
if (top.document.getElementById("Onglet_Ventes").selected)
	top.document.getElementById("Tous_les_onglets").advanceSelectedTab(1);

 }
var nb_button=0
 if(ALeDroit(2,"vente"))
 {
nb_button++;
top.document.getElementById("Insert_Ventes_Ventes0").disabled=false;

 }
 else
 {
top.document.getElementById("Insert_Ventes_Ventes0").hidden=true;

 }
 if(ALeDroit(4,"vente"))
 {
nb_button++;
top.document.getElementById("Delete_Ventes_Ventes0").disabled=false;

 }
 else
 {
top.document.getElementById("Delete_Ventes_Ventes0").hidden=true;

 }
 if(ALeDroit(1,"vente"))
 {
nb_button++;
top.document.getElementById("Update_Ventes_Ventes0").disabled=false;

 }
 else
 {
top.document.getElementById("Update_Ventes_Ventes0").hidden=true;

 }
if (nb_button==0)
{
	top.document.getElementById("Validate_Ventes_Ventes0").hidden=true;
	top.document.getElementById("Annuler_Ventes_Ventes0").hidden=true;
}
 if(ALeDroit(5,"stockachat"))
 {
/* On refresh les composants non dépendents de l'onget Stock d'achat*/
var Composant_0 = TAB_GLOBAL_COMPO[268];
if (Composant_0!=null){
Composant_0.ActiverComposant(true);
Composant_0.Refresh();
}

 }
 else
 {
top.document.getElementById("Onglet_Stock_d_achat").hidden=true;
if (top.document.getElementById("Onglet_Stock_d_achat").selected)
	top.document.getElementById("Tous_les_onglets").advanceSelectedTab(1);

 }
}

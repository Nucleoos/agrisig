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
var TAB_COMPO_PPTES = new Array(32);
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
         FONCTIONS POUR L'ONGLET Classes
   ***********************************************/ 

 /* FILTRES DE RELATION ENTRE ONGLETS => VARIABLES GLOBALES POUR ETRE ACCESSIBLES DEPUIS INTERFACE_USER.JS */

function OuvrirOnglet_Classes()
{
 var tabs = top.document.getElementById("Tous_les_onglets");
 tabs.selectedItem = top.document.getElementById("Onglet_Classes");
}

function Insert_Classes_Liste_des_classes0()
{
 TAB_COMPO_PPTES[3].Action_en_cours = INSERT;
/* On calcule la nouvelle clé */
 TAB_COMPO_PPTES[3].NewCle = getNewCle("classe");
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[3].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[7];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[8];
 Esclave_1.ActiverComposant(true);
 var Esclave_2=TAB_GLOBAL_COMPO[9];
 Esclave_2.ActiverComposant(true);
 var Esclave_3=TAB_GLOBAL_COMPO[10];
 Esclave_3.ActiverComposant(true);
 var Esclave_4=TAB_GLOBAL_COMPO[11];
 Esclave_4.ActiverComposant(true);
 var Esclave_5=TAB_GLOBAL_COMPO[12];
 Esclave_5.ActiverComposant(true);
 var Esclave_6=TAB_GLOBAL_COMPO[13];
 Esclave_6.ActiverComposant(true);
top.document.getElementById("Validate_Classes_Propriétés_8").disabled=true;
top.document.getElementById("Annuler_Classes_Propriétés_8").disabled=true;
top.document.getElementById("Insert_Classes_Propriétés_8").disabled=false;
top.document.getElementById("Delete_Classes_Propriétés_8").disabled=false;
top.document.getElementById("Update_Classes_Propriétés_8").disabled=false;
 var Esclave_7=TAB_GLOBAL_COMPO[14];
 Esclave_7.ActiverComposant(true);
top.document.getElementById("Validate_Classes_Liste_des_classes0").disabled=false;
top.document.getElementById("Annuler_Classes_Liste_des_classes0").disabled=false;
top.document.getElementById("Insert_Classes_Liste_des_classes0").disabled=true;
top.document.getElementById("Delete_Classes_Liste_des_classes0").disabled=true;
top.document.getElementById("Update_Classes_Liste_des_classes0").disabled=true;
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

function Delete_Classes_Liste_des_classes0()
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
 	User_Delete_Classes_Liste_des_classes0(Maitre);
	Maitre.RefreshTotal();
 }
}

function Update_Classes_Liste_des_classes0()
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
 var Esclave_0=TAB_GLOBAL_COMPO[7];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[8];
 Esclave_1.ActiverComposant(true);
 var Esclave_2=TAB_GLOBAL_COMPO[9];
 Esclave_2.ActiverComposant(true);
 var Esclave_3=TAB_GLOBAL_COMPO[10];
 Esclave_3.ActiverComposant(true);
 var Esclave_4=TAB_GLOBAL_COMPO[11];
 Esclave_4.ActiverComposant(true);
 var Esclave_5=TAB_GLOBAL_COMPO[12];
 Esclave_5.ActiverComposant(true);
 var Esclave_6=TAB_GLOBAL_COMPO[13];
 Esclave_6.ActiverComposant(true);
top.document.getElementById("Validate_Classes_Propriétés_8").disabled=true;
top.document.getElementById("Annuler_Classes_Propriétés_8").disabled=true;
top.document.getElementById("Insert_Classes_Propriétés_8").disabled=false;
top.document.getElementById("Delete_Classes_Propriétés_8").disabled=false;
top.document.getElementById("Update_Classes_Propriétés_8").disabled=false;
 var Esclave_7=TAB_GLOBAL_COMPO[14];
 Esclave_7.ActiverComposant(true);
top.document.getElementById("Validate_Classes_Liste_des_classes0").disabled=false;
top.document.getElementById("Annuler_Classes_Liste_des_classes0").disabled=false;
top.document.getElementById("Insert_Classes_Liste_des_classes0").disabled=true;
top.document.getElementById("Delete_Classes_Liste_des_classes0").disabled=true;
top.document.getElementById("Update_Classes_Liste_des_classes0").disabled=true;
return TAB_COMPO_PPTES[3].NewCle;
}

function Validate_Classes_Liste_des_classes0(retour)
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
	if ((NewCle = User_Insert_Classes_Liste_des_classes0(Maitre))==-1)
		return -1;
	break;
	case UPDATE :
	if ((User_Update_Classes_Liste_des_classes0(Maitre))==-1)
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
 var Esclave_0=TAB_GLOBAL_COMPO[7];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[8];
 Esclave_1.ActiverComposant(false);
 var Esclave_2=TAB_GLOBAL_COMPO[9];
 Esclave_2.ActiverComposant(false);
 var Esclave_3=TAB_GLOBAL_COMPO[10];
 Esclave_3.ActiverComposant(false);
 var Esclave_4=TAB_GLOBAL_COMPO[11];
 Esclave_4.ActiverComposant(false);
 var Esclave_5=TAB_GLOBAL_COMPO[12];
 Esclave_5.ActiverComposant(false);
 var Esclave_6=TAB_GLOBAL_COMPO[13];
 Esclave_6.ActiverComposant(false);
Annuler_Classes_Propriétés_8();
top.document.getElementById("Validate_Classes_Propriétés_8").disabled=true;
top.document.getElementById("Annuler_Classes_Propriétés_8").disabled=true;
top.document.getElementById("Insert_Classes_Propriétés_8").disabled=true;
top.document.getElementById("Delete_Classes_Propriétés_8").disabled=true;
top.document.getElementById("Update_Classes_Propriétés_8").disabled=true;
 var Esclave_7=TAB_GLOBAL_COMPO[14];
 Esclave_7.ActiverComposant(false);
top.document.getElementById("Validate_Classes_Liste_des_classes0").disabled=true;
top.document.getElementById("Annuler_Classes_Liste_des_classes0").disabled=true;
top.document.getElementById("Insert_Classes_Liste_des_classes0").disabled=false;
top.document.getElementById("Delete_Classes_Liste_des_classes0").disabled=false;
top.document.getElementById("Update_Classes_Liste_des_classes0").disabled=false;
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

function Annuler_Classes_Liste_des_classes0()
{
 TAB_COMPO_PPTES[3].Action_en_cours = null;
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[3].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[7];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[8];
 Esclave_1.ActiverComposant(false);
 var Esclave_2=TAB_GLOBAL_COMPO[9];
 Esclave_2.ActiverComposant(false);
 var Esclave_3=TAB_GLOBAL_COMPO[10];
 Esclave_3.ActiverComposant(false);
 var Esclave_4=TAB_GLOBAL_COMPO[11];
 Esclave_4.ActiverComposant(false);
 var Esclave_5=TAB_GLOBAL_COMPO[12];
 Esclave_5.ActiverComposant(false);
 var Esclave_6=TAB_GLOBAL_COMPO[13];
 Esclave_6.ActiverComposant(false);
Annuler_Classes_Propriétés_8();
top.document.getElementById("Validate_Classes_Propriétés_8").disabled=true;
top.document.getElementById("Annuler_Classes_Propriétés_8").disabled=true;
top.document.getElementById("Insert_Classes_Propriétés_8").disabled=true;
top.document.getElementById("Delete_Classes_Propriétés_8").disabled=true;
top.document.getElementById("Update_Classes_Propriétés_8").disabled=true;
 var Esclave_7=TAB_GLOBAL_COMPO[14];
 Esclave_7.ActiverComposant(false);
top.document.getElementById("Validate_Classes_Liste_des_classes0").disabled=true;
top.document.getElementById("Annuler_Classes_Liste_des_classes0").disabled=true;
top.document.getElementById("Insert_Classes_Liste_des_classes0").disabled=false;
top.document.getElementById("Delete_Classes_Liste_des_classes0").disabled=false;
top.document.getElementById("Update_Classes_Liste_des_classes0").disabled=false;
}

function Insert_Classes_Propriétés_8()
{
 if (TAB_COMPO_PPTES[3].Action_en_cours == INSERT)
 	{
 		if (confirm("Pour continuer, vous devez enregistrer votre saisie\n Voulez vous poursuivre ?"))
		{
			var CleValide=Validate_Classes_Liste_des_classes0(false);
			if (CleValide==-1)
			{
				return -1;
			}
			CleValide=Update_Classes_Liste_des_classes0();
			if (CleValide==-1)
			{
				alert("Erreur l'enregistrement n'a pas étais correctement inséré");
				return -1;
			}
			Insert_Classes_Propriétés_8();
		}
 		return;
 	}
 TAB_COMPO_PPTES[14].Action_en_cours = INSERT;
/* On calcule la nouvelle clé */
 TAB_COMPO_PPTES[14].NewCle = getNewCle("propriete");
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[14].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[19];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[20];
 Esclave_1.ActiverComposant(true);
 var Esclave_2=TAB_GLOBAL_COMPO[21];
 Esclave_2.ActiverComposant(true);
 var Esclave_3=TAB_GLOBAL_COMPO[22];
 Esclave_3.ActiverComposant(true);
 var Esclave_4=TAB_GLOBAL_COMPO[23];
 Esclave_4.ActiverComposant(true);
 var Esclave_5=TAB_GLOBAL_COMPO[24];
 Esclave_5.ActiverComposant(true);
 var Esclave_6=TAB_GLOBAL_COMPO[25];
 Esclave_6.ActiverComposant(true);
top.document.getElementById("Validate_Classes_Propriétés_8").disabled=false;
top.document.getElementById("Annuler_Classes_Propriétés_8").disabled=false;
top.document.getElementById("Insert_Classes_Propriétés_8").disabled=true;
top.document.getElementById("Delete_Classes_Propriétés_8").disabled=true;
top.document.getElementById("Update_Classes_Propriétés_8").disabled=true;
 var Maitre=TAB_GLOBAL_COMPO[14];
 /* Pour une insertion on désectionne */
 var tree=Maitre.getComposantXul();
 if (tree.view!=null)
 {
 	tree.currentIndex=-1;
 	tree.view.selection.clearSelection();
 }
return TAB_COMPO_PPTES[14].NewCle;
}

function Delete_Classes_Propriétés_8()
{
 if (TAB_GLOBAL_COMPO[14].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement à suprimer");
 	return;
 }
 /* On recupère le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[14];
 if (confirm("Voulez vous vraiment supprimer l'enregistrement en cours ?"))
 {
	TAB_COMPO_PPTES[14].Action_en_cours = DELETE;
 	User_Delete_Classes_Propriétés_8(Maitre);
	Maitre.RefreshTotal();
 }
}

function Update_Classes_Propriétés_8()
{
 if (TAB_GLOBAL_COMPO[14].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement à mettre à jour");
 	return -1;
 }
 TAB_COMPO_PPTES[14].Action_en_cours = UPDATE;
/* On calcule la nouvelle clé */
 TAB_COMPO_PPTES[14].NewCle = TAB_GLOBAL_COMPO[14].getCleVal();
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[14].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[19];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[20];
 Esclave_1.ActiverComposant(true);
 var Esclave_2=TAB_GLOBAL_COMPO[21];
 Esclave_2.ActiverComposant(true);
 var Esclave_3=TAB_GLOBAL_COMPO[22];
 Esclave_3.ActiverComposant(true);
 var Esclave_4=TAB_GLOBAL_COMPO[23];
 Esclave_4.ActiverComposant(true);
 var Esclave_5=TAB_GLOBAL_COMPO[24];
 Esclave_5.ActiverComposant(true);
 var Esclave_6=TAB_GLOBAL_COMPO[25];
 Esclave_6.ActiverComposant(true);
top.document.getElementById("Validate_Classes_Propriétés_8").disabled=false;
top.document.getElementById("Annuler_Classes_Propriétés_8").disabled=false;
top.document.getElementById("Insert_Classes_Propriétés_8").disabled=true;
top.document.getElementById("Delete_Classes_Propriétés_8").disabled=true;
top.document.getElementById("Update_Classes_Propriétés_8").disabled=true;
return TAB_COMPO_PPTES[14].NewCle;
}

function Validate_Classes_Propriétés_8(retour)
{
 /* Retour à l'onget appellant si appelle par gérer */
if (retour==null)
	retour=true;

 /* On recupère le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[14];
 /* On recupère la clé du nouvel enregistrement */
 var NewCle=null;
 switch(TAB_COMPO_PPTES[14].Action_en_cours){
	case INSERT :
	if ((NewCle = User_Insert_Classes_Propriétés_8(Maitre))==-1)
		return -1;
	break;
	case UPDATE :
	if ((User_Update_Classes_Propriétés_8(Maitre))==-1)
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
 TAB_GLOBAL_COMPO[14].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[19];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[20];
 Esclave_1.ActiverComposant(false);
 var Esclave_2=TAB_GLOBAL_COMPO[21];
 Esclave_2.ActiverComposant(false);
 var Esclave_3=TAB_GLOBAL_COMPO[22];
 Esclave_3.ActiverComposant(false);
 var Esclave_4=TAB_GLOBAL_COMPO[23];
 Esclave_4.ActiverComposant(false);
 var Esclave_5=TAB_GLOBAL_COMPO[24];
 Esclave_5.ActiverComposant(false);
 var Esclave_6=TAB_GLOBAL_COMPO[25];
 Esclave_6.ActiverComposant(false);
top.document.getElementById("Validate_Classes_Propriétés_8").disabled=true;
top.document.getElementById("Annuler_Classes_Propriétés_8").disabled=true;
top.document.getElementById("Insert_Classes_Propriétés_8").disabled=false;
top.document.getElementById("Delete_Classes_Propriétés_8").disabled=false;
top.document.getElementById("Update_Classes_Propriétés_8").disabled=false;
 if (NewCle==null)
 	NewCle=TAB_COMPO_PPTES[14].NewCle;
 Maitre.ForceNextSelection(NewCle)
 Maitre.RefreshTotal();
 if(retour)
 {
 }
 TAB_COMPO_PPTES[14].Action_en_cours = null;
 return NewCle;
}

function Annuler_Classes_Propriétés_8()
{
 TAB_COMPO_PPTES[14].Action_en_cours = null;
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[14].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[19];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[20];
 Esclave_1.ActiverComposant(false);
 var Esclave_2=TAB_GLOBAL_COMPO[21];
 Esclave_2.ActiverComposant(false);
 var Esclave_3=TAB_GLOBAL_COMPO[22];
 Esclave_3.ActiverComposant(false);
 var Esclave_4=TAB_GLOBAL_COMPO[23];
 Esclave_4.ActiverComposant(false);
 var Esclave_5=TAB_GLOBAL_COMPO[24];
 Esclave_5.ActiverComposant(false);
 var Esclave_6=TAB_GLOBAL_COMPO[25];
 Esclave_6.ActiverComposant(false);
top.document.getElementById("Validate_Classes_Propriétés_8").disabled=true;
top.document.getElementById("Annuler_Classes_Propriétés_8").disabled=true;
top.document.getElementById("Insert_Classes_Propriétés_8").disabled=false;
top.document.getElementById("Delete_Classes_Propriétés_8").disabled=false;
top.document.getElementById("Update_Classes_Propriétés_8").disabled=false;
}






/* *********************************************** 
         FONCTIONS POUR L'ONGLET Types de propriétés
   ***********************************************/ 

 /* FILTRES DE RELATION ENTRE ONGLETS => VARIABLES GLOBALES POUR ETRE ACCESSIBLES DEPUIS INTERFACE_USER.JS */

function OuvrirOnglet_Types_de_propriétés()
{
 var tabs = top.document.getElementById("Tous_les_onglets");
 tabs.selectedItem = top.document.getElementById("Onglet_Types_de_propriétés");
}

function Insert_Types_de_propriétés_Liste_des_types_de_propriétés0()
{
 TAB_COMPO_PPTES[26].Action_en_cours = INSERT;
/* On calcule la nouvelle clé */
 TAB_COMPO_PPTES[26].NewCle = getNewCle("typepropriete");
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[26].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[28];
 Esclave_0.ActiverComposant(true);
top.document.getElementById("Validate_Types_de_propriétés_Liste_des_choix_2").disabled=true;
top.document.getElementById("Annuler_Types_de_propriétés_Liste_des_choix_2").disabled=true;
top.document.getElementById("Insert_Types_de_propriétés_Liste_des_choix_2").disabled=false;
top.document.getElementById("Delete_Types_de_propriétés_Liste_des_choix_2").disabled=false;
top.document.getElementById("Update_Types_de_propriétés_Liste_des_choix_2").disabled=false;
 var Esclave_1=TAB_GLOBAL_COMPO[29];
 Esclave_1.ActiverComposant(true);
top.document.getElementById("Validate_Types_de_propriétés_Liste_des_types_de_propriétés0").disabled=false;
top.document.getElementById("Annuler_Types_de_propriétés_Liste_des_types_de_propriétés0").disabled=false;
top.document.getElementById("Insert_Types_de_propriétés_Liste_des_types_de_propriétés0").disabled=true;
top.document.getElementById("Delete_Types_de_propriétés_Liste_des_types_de_propriétés0").disabled=true;
top.document.getElementById("Update_Types_de_propriétés_Liste_des_types_de_propriétés0").disabled=true;
 var Maitre=TAB_GLOBAL_COMPO[26];
 /* Pour une insertion on désectionne */
 var tree=Maitre.getComposantXul();
 if (tree.view!=null)
 {
 	tree.currentIndex=-1;
 	tree.view.selection.clearSelection();
 }
return TAB_COMPO_PPTES[26].NewCle;
}

function Delete_Types_de_propriétés_Liste_des_types_de_propriétés0()
{
 if (TAB_GLOBAL_COMPO[26].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement à suprimer");
 	return;
 }
 /* On recupère le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[26];
 if (confirm("Voulez vous vraiment supprimer l'enregistrement en cours ?"))
 {
	TAB_COMPO_PPTES[26].Action_en_cours = DELETE;
 	User_Delete_Types_de_propriétés_Liste_des_types_de_propriétés0(Maitre);
	Maitre.RefreshTotal();
 }
}

function Update_Types_de_propriétés_Liste_des_types_de_propriétés0()
{
 if (TAB_GLOBAL_COMPO[26].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement à mettre à jour");
 	return -1;
 }
 TAB_COMPO_PPTES[26].Action_en_cours = UPDATE;
/* On calcule la nouvelle clé */
 TAB_COMPO_PPTES[26].NewCle = TAB_GLOBAL_COMPO[26].getCleVal();
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[26].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[28];
 Esclave_0.ActiverComposant(true);
top.document.getElementById("Validate_Types_de_propriétés_Liste_des_choix_2").disabled=true;
top.document.getElementById("Annuler_Types_de_propriétés_Liste_des_choix_2").disabled=true;
top.document.getElementById("Insert_Types_de_propriétés_Liste_des_choix_2").disabled=false;
top.document.getElementById("Delete_Types_de_propriétés_Liste_des_choix_2").disabled=false;
top.document.getElementById("Update_Types_de_propriétés_Liste_des_choix_2").disabled=false;
 var Esclave_1=TAB_GLOBAL_COMPO[29];
 Esclave_1.ActiverComposant(true);
top.document.getElementById("Validate_Types_de_propriétés_Liste_des_types_de_propriétés0").disabled=false;
top.document.getElementById("Annuler_Types_de_propriétés_Liste_des_types_de_propriétés0").disabled=false;
top.document.getElementById("Insert_Types_de_propriétés_Liste_des_types_de_propriétés0").disabled=true;
top.document.getElementById("Delete_Types_de_propriétés_Liste_des_types_de_propriétés0").disabled=true;
top.document.getElementById("Update_Types_de_propriétés_Liste_des_types_de_propriétés0").disabled=true;
return TAB_COMPO_PPTES[26].NewCle;
}

function Validate_Types_de_propriétés_Liste_des_types_de_propriétés0(retour)
{
 /* Retour à l'onget appellant si appelle par gérer */
if (retour==null)
	retour=true;

 /* On recupère le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[26];
 /* On recupère la clé du nouvel enregistrement */
 var NewCle=null;
 switch(TAB_COMPO_PPTES[26].Action_en_cours){
	case INSERT :
	if ((NewCle = User_Insert_Types_de_propriétés_Liste_des_types_de_propriétés0(Maitre))==-1)
		return -1;
	break;
	case UPDATE :
	if ((User_Update_Types_de_propriétés_Liste_des_types_de_propriétés0(Maitre))==-1)
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
 TAB_GLOBAL_COMPO[26].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[28];
 Esclave_0.ActiverComposant(false);
Annuler_Types_de_propriétés_Liste_des_choix_2();
top.document.getElementById("Validate_Types_de_propriétés_Liste_des_choix_2").disabled=true;
top.document.getElementById("Annuler_Types_de_propriétés_Liste_des_choix_2").disabled=true;
top.document.getElementById("Insert_Types_de_propriétés_Liste_des_choix_2").disabled=true;
top.document.getElementById("Delete_Types_de_propriétés_Liste_des_choix_2").disabled=true;
top.document.getElementById("Update_Types_de_propriétés_Liste_des_choix_2").disabled=true;
 var Esclave_1=TAB_GLOBAL_COMPO[29];
 Esclave_1.ActiverComposant(false);
top.document.getElementById("Validate_Types_de_propriétés_Liste_des_types_de_propriétés0").disabled=true;
top.document.getElementById("Annuler_Types_de_propriétés_Liste_des_types_de_propriétés0").disabled=true;
top.document.getElementById("Insert_Types_de_propriétés_Liste_des_types_de_propriétés0").disabled=false;
top.document.getElementById("Delete_Types_de_propriétés_Liste_des_types_de_propriétés0").disabled=false;
top.document.getElementById("Update_Types_de_propriétés_Liste_des_types_de_propriétés0").disabled=false;
 if (NewCle==null)
 	NewCle=TAB_COMPO_PPTES[26].NewCle;
 Maitre.ForceNextSelection(NewCle)
 Maitre.RefreshTotal();
 if(retour)
 {
 }
 TAB_COMPO_PPTES[26].Action_en_cours = null;
 return NewCle;
}

function Annuler_Types_de_propriétés_Liste_des_types_de_propriétés0()
{
 TAB_COMPO_PPTES[26].Action_en_cours = null;
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[26].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[28];
 Esclave_0.ActiverComposant(false);
Annuler_Types_de_propriétés_Liste_des_choix_2();
top.document.getElementById("Validate_Types_de_propriétés_Liste_des_choix_2").disabled=true;
top.document.getElementById("Annuler_Types_de_propriétés_Liste_des_choix_2").disabled=true;
top.document.getElementById("Insert_Types_de_propriétés_Liste_des_choix_2").disabled=true;
top.document.getElementById("Delete_Types_de_propriétés_Liste_des_choix_2").disabled=true;
top.document.getElementById("Update_Types_de_propriétés_Liste_des_choix_2").disabled=true;
 var Esclave_1=TAB_GLOBAL_COMPO[29];
 Esclave_1.ActiverComposant(false);
top.document.getElementById("Validate_Types_de_propriétés_Liste_des_types_de_propriétés0").disabled=true;
top.document.getElementById("Annuler_Types_de_propriétés_Liste_des_types_de_propriétés0").disabled=true;
top.document.getElementById("Insert_Types_de_propriétés_Liste_des_types_de_propriétés0").disabled=false;
top.document.getElementById("Delete_Types_de_propriétés_Liste_des_types_de_propriétés0").disabled=false;
top.document.getElementById("Update_Types_de_propriétés_Liste_des_types_de_propriétés0").disabled=false;
}

function Insert_Types_de_propriétés_Liste_des_choix_2()
{
 if (TAB_COMPO_PPTES[26].Action_en_cours == INSERT)
 	{
 		if (confirm("Pour continuer, vous devez enregistrer votre saisie\n Voulez vous poursuivre ?"))
		{
			var CleValide=Validate_Types_de_propriétés_Liste_des_types_de_propriétés0(false);
			if (CleValide==-1)
			{
				return -1;
			}
			CleValide=Update_Types_de_propriétés_Liste_des_types_de_propriétés0();
			if (CleValide==-1)
			{
				alert("Erreur l'enregistrement n'a pas étais correctement inséré");
				return -1;
			}
			Insert_Types_de_propriétés_Liste_des_choix_2();
		}
 		return;
 	}
 TAB_COMPO_PPTES[29].Action_en_cours = INSERT;
/* On calcule la nouvelle clé */
 TAB_COMPO_PPTES[29].NewCle = getNewCle("listechoix");
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[29].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[31];
 Esclave_0.ActiverComposant(true);
top.document.getElementById("Validate_Types_de_propriétés_Liste_des_choix_2").disabled=false;
top.document.getElementById("Annuler_Types_de_propriétés_Liste_des_choix_2").disabled=false;
top.document.getElementById("Insert_Types_de_propriétés_Liste_des_choix_2").disabled=true;
top.document.getElementById("Delete_Types_de_propriétés_Liste_des_choix_2").disabled=true;
top.document.getElementById("Update_Types_de_propriétés_Liste_des_choix_2").disabled=true;
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

function Delete_Types_de_propriétés_Liste_des_choix_2()
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
 	User_Delete_Types_de_propriétés_Liste_des_choix_2(Maitre);
	Maitre.RefreshTotal();
 }
}

function Update_Types_de_propriétés_Liste_des_choix_2()
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
 var Esclave_0=TAB_GLOBAL_COMPO[31];
 Esclave_0.ActiverComposant(true);
top.document.getElementById("Validate_Types_de_propriétés_Liste_des_choix_2").disabled=false;
top.document.getElementById("Annuler_Types_de_propriétés_Liste_des_choix_2").disabled=false;
top.document.getElementById("Insert_Types_de_propriétés_Liste_des_choix_2").disabled=true;
top.document.getElementById("Delete_Types_de_propriétés_Liste_des_choix_2").disabled=true;
top.document.getElementById("Update_Types_de_propriétés_Liste_des_choix_2").disabled=true;
return TAB_COMPO_PPTES[29].NewCle;
}

function Validate_Types_de_propriétés_Liste_des_choix_2(retour)
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
	if ((NewCle = User_Insert_Types_de_propriétés_Liste_des_choix_2(Maitre))==-1)
		return -1;
	break;
	case UPDATE :
	if ((User_Update_Types_de_propriétés_Liste_des_choix_2(Maitre))==-1)
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
 var Esclave_0=TAB_GLOBAL_COMPO[31];
 Esclave_0.ActiverComposant(false);
top.document.getElementById("Validate_Types_de_propriétés_Liste_des_choix_2").disabled=true;
top.document.getElementById("Annuler_Types_de_propriétés_Liste_des_choix_2").disabled=true;
top.document.getElementById("Insert_Types_de_propriétés_Liste_des_choix_2").disabled=false;
top.document.getElementById("Delete_Types_de_propriétés_Liste_des_choix_2").disabled=false;
top.document.getElementById("Update_Types_de_propriétés_Liste_des_choix_2").disabled=false;
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

function Annuler_Types_de_propriétés_Liste_des_choix_2()
{
 TAB_COMPO_PPTES[29].Action_en_cours = null;
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[29].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[31];
 Esclave_0.ActiverComposant(false);
top.document.getElementById("Validate_Types_de_propriétés_Liste_des_choix_2").disabled=true;
top.document.getElementById("Annuler_Types_de_propriétés_Liste_des_choix_2").disabled=true;
top.document.getElementById("Insert_Types_de_propriétés_Liste_des_choix_2").disabled=false;
top.document.getElementById("Delete_Types_de_propriétés_Liste_des_choix_2").disabled=false;
top.document.getElementById("Update_Types_de_propriétés_Liste_des_choix_2").disabled=false;
}





function gestsea_constructeur_Chargement()
{
pgsql_init(true);
if (!pgsql_getConnectionState())
{
	top.close();
	return;
}
Init_ALeDroit();
var query='SELECT current_user, current_date;';
var result=pgsql_query(query);
if (result.rowCount>0){var enum=result.enumerate();enum.first();top.document.getElementById('status_login').label='Login : '+enum.getVariant(0);}
var Col_N0_Libellé_De_Classes_Liste_des_classes0=new clAttribut("cl_libelle","classe",null);

var Col_N1_Statut_De_Classes_Liste_des_classes0=new clAttribut("cl_statut","classe",null);

var Col_N2_Société_De_Classes_Liste_des_classes0=new clAttribut("so_libelle","societe",null);

var Joint_Col_N2_Société_De_Classes_Liste_des_classes0=new clJointureMulti("classe",
	new Array(
	new stJointure("societe","cl_societe","so_numero",null,true)
	));
var Classes_Société_1=new clAttribut("so_libelle","societe",null);


	/* Ce composant représente: societe.so_libelle sous le nom "Société" */
var Compo_Classes_Société_1=new clCompoListeDeroulanteSimple(Classes_Société_1,null,"Société");
var Joint_Esclave_Classes_Société_1=new clJointureMulti("classe",
	new Array(
	new stJointure("societe","cl_societe","so_numero",null,false)
	));
var Classes_Libellé__Ex_____Livraisons___2=new clAttribut("cl_libelle","classe",null);


	/* Ce composant représente: classe.cl_libelle sous le nom "Libellé (Ex. : 'Livraisons')" */
var Compo_Classes_Libellé__Ex_____Livraisons___2=new clCompoTextBox(Classes_Libellé__Ex_____Livraisons___2,null,"Libellé (Ex. : 'Livraisons')",false,false);
var Classes_Nom_logique__Ex_____Livraison___3=new clAttribut("cl_nom","classe",null);


	/* Ce composant représente: classe.cl_nom sous le nom "Nom logique (Ex. : 'Livraison')" */
var Compo_Classes_Nom_logique__Ex_____Livraison___3=new clCompoTextBox(Classes_Nom_logique__Ex_____Livraison___3,null,"Nom logique (Ex. : 'Livraison')",false,false);
var Classes_Represente__Ex_____une_livraison___4=new clAttribut("cl_represente","classe",null);


	/* Ce composant représente: classe.cl_represente sous le nom "Represente (Ex. : 'une livraison')" */
var Compo_Classes_Represente__Ex_____une_livraison___4=new clCompoTextBox(Classes_Represente__Ex_____une_livraison___4,null,"Represente (Ex. : 'une livraison')",false,false);
var Classes_La_table_doit_apparaitre_en_tant_qu_onglet_indépendant_5=new clAttribut("cl_mere","classe",null);


	/* Ce composant représente: classe.cl_mere sous le nom "La table doit apparaitre en tant qu'onglet indépendant" */
var Compo_Classes_La_table_doit_apparaitre_en_tant_qu_onglet_indépendant_5=new clCompoCheckBox(Classes_La_table_doit_apparaitre_en_tant_qu_onglet_indépendant_5,null,"La table doit apparaitre en tant qu'onglet indépendant");
var Classes_La_table_est_une_association_6=new clAttribut("cl_assoc","classe",null);


	/* Ce composant représente: classe.cl_assoc sous le nom "La table est une association" */
var Compo_Classes_La_table_est_une_association_6=new clCompoCheckBox(Classes_La_table_est_une_association_6,null,"La table est une association");
var Classes_Ordre_d_apparence_7=new clAttribut("cl_ordre","classe",null);


	/* Ce composant représente: classe.cl_ordre sous le nom "Ordre d'apparence" */
var Compo_Classes_Ordre_d_apparence_7=new clCompoTextBox(Classes_Ordre_d_apparence_7,null,"Ordre d'apparence",false,false);
var Col_N0_Ordre_De_Classes_Propriétés_8=new clAttribut("pr_ordre","propriete",null);

var Col_N1_Libellé_De_Classes_Propriétés_8=new clAttribut("pr_libelle","propriete",null);

var Col_N2_Nom_logique_De_Classes_Propriétés_8=new clAttribut("pr_nom","propriete",null);

var Col_N3_Type_De_Classes_Propriétés_8=new clAttribut("tr_libelle","typepropriete",null);

var Joint_Col_N3_Type_De_Classes_Propriétés_8=new clJointureMulti("propriete",
	new Array(
	new stJointure("typepropriete","pr_type","tr_numero",null,true)
	));
var Classes_Libellé_9=new clAttribut("pr_libelle","propriete",null);


	/* Ce composant représente: propriete.pr_libelle sous le nom "Libellé" */
var Compo_Classes_Libellé_9=new clCompoTextBox(Classes_Libellé_9,null,"Libellé",false,false);
var Classes_Nom_logique_10=new clAttribut("pr_nom","propriete",null);


	/* Ce composant représente: propriete.pr_nom sous le nom "Nom logique" */
var Compo_Classes_Nom_logique_10=new clCompoTextBox(Classes_Nom_logique_10,null,"Nom logique",false,false);
var Classes_Type_11=new clAttribut("tr_libelle","typepropriete",null);


	/* Ce composant représente: typepropriete.tr_libelle sous le nom "Type" */
var Compo_Classes_Type_11=new clCompoListeDeroulanteSimple(Classes_Type_11,null,"Type");
var Joint_Esclave_Classes_Type_11=new clJointureMulti("propriete",
	new Array(
	new stJointure("typepropriete","pr_type","tr_numero",null,false)
	));
var Classes_Obligatoire_12=new clAttribut("pr_obligatoire","propriete",null);


	/* Ce composant représente: propriete.pr_obligatoire sous le nom "Obligatoire" */
var Compo_Classes_Obligatoire_12=new clCompoCheckBox(Classes_Obligatoire_12,null,"Obligatoire");
var Classes_Colonne_de_la_liste_13=new clAttribut("pr_colonne","propriete",null);


	/* Ce composant représente: propriete.pr_colonne sous le nom "Colonne de la liste" */
var Compo_Classes_Colonne_de_la_liste_13=new clCompoCheckBox(Classes_Colonne_de_la_liste_13,null,"Colonne de la liste");
var Classes_Colonne_indispensable_en_affichage_14=new clAttribut("pr_colesclave","propriete",null);


	/* Ce composant représente: propriete.pr_colesclave sous le nom "Colonne indispensable en affichage" */
var Compo_Classes_Colonne_indispensable_en_affichage_14=new clCompoCheckBox(Classes_Colonne_indispensable_en_affichage_14,null,"Colonne indispensable en affichage");
var Classes_Ordre_15=new clAttribut("pr_ordre","propriete",null);


	/* Ce composant représente: propriete.pr_ordre sous le nom "Ordre" */
var Compo_Classes_Ordre_15=new clCompoTextBox(Classes_Ordre_15,null,"Ordre",false,false);
var Classes_Propriétés_8=new clEnsembleAttributs("propriete",
	new Array(
	new clLiaison(null,Col_N0_Ordre_De_Classes_Propriétés_8)
	,new clLiaison(null,Col_N1_Libellé_De_Classes_Propriétés_8)
	,new clLiaison(null,Col_N2_Nom_logique_De_Classes_Propriétés_8)
	,new clLiaison(Joint_Col_N3_Type_De_Classes_Propriétés_8,Col_N3_Type_De_Classes_Propriétés_8)
	),
	new Array(
	new clLiaison(null,Classes_Libellé_9)
	,new clLiaison(null,Classes_Nom_logique_10)
	,new clLiaison(Joint_Esclave_Classes_Type_11,Classes_Type_11)
	,new clLiaison(null,Classes_Obligatoire_12)
	,new clLiaison(null,Classes_Colonne_de_la_liste_13)
	,new clLiaison(null,Classes_Colonne_indispensable_en_affichage_14)
	,new clLiaison(null,Classes_Ordre_15)
	));

var Titre_Classes_Propriétés_8=new Array("Ordre","Libellé","Nom logique","Type");

	/* Ce composant représente: des éléments de la table propriete sous le nom "Propriétés" */
var Compo_Classes_Propriétés_8=new clCompoListe(Classes_Propriétés_8,null,Titre_Classes_Propriétés_8,"Propriétés",true,false);
var Joint_Esclave_Classes_Propriétés_8=new clJointureMulti("classe",
	new Array(
	new stJointure("propriete","cl_numero","pr_classe",null,false)
	));
var Classes_Liste_des_classes0=new clEnsembleAttributs("classe",
	new Array(
	new clLiaison(null,Col_N0_Libellé_De_Classes_Liste_des_classes0)
	,new clLiaison(null,Col_N1_Statut_De_Classes_Liste_des_classes0)
	,new clLiaison(Joint_Col_N2_Société_De_Classes_Liste_des_classes0,Col_N2_Société_De_Classes_Liste_des_classes0)
	),
	new Array(
	new clLiaison(Joint_Esclave_Classes_Société_1,Classes_Société_1)
	,new clLiaison(null,Classes_Libellé__Ex_____Livraisons___2)
	,new clLiaison(null,Classes_Nom_logique__Ex_____Livraison___3)
	,new clLiaison(null,Classes_Represente__Ex_____une_livraison___4)
	,new clLiaison(null,Classes_La_table_doit_apparaitre_en_tant_qu_onglet_indépendant_5)
	,new clLiaison(null,Classes_La_table_est_une_association_6)
	,new clLiaison(null,Classes_Ordre_d_apparence_7)
	,new clLiaison(Joint_Esclave_Classes_Propriétés_8,Classes_Propriétés_8)
	));

var Titre_Classes_Liste_des_classes0=new Array("Libellé","Statut","Société");

	/* Ce composant représente: des éléments de la table classe sous le nom "Liste des classes" */
var Compo_Classes_Liste_des_classes0=new clCompoListe(Classes_Liste_des_classes0,new Array(new clInterfaceFiltrageVide()),Titre_Classes_Liste_des_classes0,"Liste des classes",true,false);

	/* Ce composant représente: classe.undefined sous le nom "Liste des classes" */
 if(ALeDroit(0,"classe"))
 {
Compo_Classes_Liste_des_classes0.GenererXUL(top.document.getElementById("Classes_Liste_des_classes0"));

 }

	/* On l'ajoute au tableau global à l'indice 3*/
top.TAB_GLOBAL_COMPO[3]=Compo_Classes_Liste_des_classes0;

	/* Ce composant représente: des éléments de la table societe sous le nom "Société" */
 if(ALeDroit(0,"societe"))
 {
Compo_Classes_Société_1.GenererXUL(top.document.getElementById("Classes_Liste_des_classes0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 7*/
top.TAB_GLOBAL_COMPO[7]=Compo_Classes_Société_1;

	/* Ce composant représente: des éléments de la table classe sous le nom "Libellé (Ex. : 'Livraisons')" */
 if(ALeDroit(0,"classe"))
 {
Compo_Classes_Libellé__Ex_____Livraisons___2.GenererXUL(top.document.getElementById("Classes_Liste_des_classes0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 8*/
top.TAB_GLOBAL_COMPO[8]=Compo_Classes_Libellé__Ex_____Livraisons___2;

	/* Ce composant représente: des éléments de la table classe sous le nom "Nom logique (Ex. : 'Livraison')" */
 if(ALeDroit(0,"classe"))
 {
Compo_Classes_Nom_logique__Ex_____Livraison___3.GenererXUL(top.document.getElementById("Classes_Liste_des_classes0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 9*/
top.TAB_GLOBAL_COMPO[9]=Compo_Classes_Nom_logique__Ex_____Livraison___3;

	/* Ce composant représente: des éléments de la table classe sous le nom "Represente (Ex. : 'une livraison')" */
 if(ALeDroit(0,"classe"))
 {
Compo_Classes_Represente__Ex_____une_livraison___4.GenererXUL(top.document.getElementById("Classes_Liste_des_classes0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 10*/
top.TAB_GLOBAL_COMPO[10]=Compo_Classes_Represente__Ex_____une_livraison___4;

	/* Ce composant représente: des éléments de la table classe sous le nom "La table doit apparaitre en tant qu'onglet indépendant" */
 if(ALeDroit(0,"classe"))
 {
Compo_Classes_La_table_doit_apparaitre_en_tant_qu_onglet_indépendant_5.GenererXUL(top.document.getElementById("Classes_Liste_des_classes0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 11*/
top.TAB_GLOBAL_COMPO[11]=Compo_Classes_La_table_doit_apparaitre_en_tant_qu_onglet_indépendant_5;

	/* Ce composant représente: des éléments de la table classe sous le nom "La table est une association" */
 if(ALeDroit(0,"classe"))
 {
Compo_Classes_La_table_est_une_association_6.GenererXUL(top.document.getElementById("Classes_Liste_des_classes0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 12*/
top.TAB_GLOBAL_COMPO[12]=Compo_Classes_La_table_est_une_association_6;

	/* Ce composant représente: des éléments de la table classe sous le nom "Ordre d'apparence" */
 if(ALeDroit(0,"classe"))
 {
Compo_Classes_Ordre_d_apparence_7.GenererXUL(top.document.getElementById("Classes_Liste_des_classes0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 13*/
top.TAB_GLOBAL_COMPO[13]=Compo_Classes_Ordre_d_apparence_7;

	/* Ce composant représente: propriete.undefined sous le nom "Propriétés" */
 if(ALeDroit(0,"propriete"))
 {
Compo_Classes_Propriétés_8.GenererXUL(top.document.getElementById("Classes_Propriétés_8"));

 }

	/* On l'ajoute au tableau global à l'indice 14*/
top.TAB_GLOBAL_COMPO[14]=Compo_Classes_Propriétés_8;

	/* Ce composant représente: des éléments de la table propriete sous le nom "Libellé" */
 if(ALeDroit(0,"propriete"))
 {
Compo_Classes_Libellé_9.GenererXUL(top.document.getElementById("Classes_Propriétés_8_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 19*/
top.TAB_GLOBAL_COMPO[19]=Compo_Classes_Libellé_9;

	/* Ce composant représente: des éléments de la table propriete sous le nom "Nom logique" */
 if(ALeDroit(0,"propriete"))
 {
Compo_Classes_Nom_logique_10.GenererXUL(top.document.getElementById("Classes_Propriétés_8_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 20*/
top.TAB_GLOBAL_COMPO[20]=Compo_Classes_Nom_logique_10;

	/* Ce composant représente: des éléments de la table typepropriete sous le nom "Type" */
 if(ALeDroit(0,"typepropriete"))
 {
Compo_Classes_Type_11.GenererXUL(top.document.getElementById("Classes_Propriétés_8_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 21*/
top.TAB_GLOBAL_COMPO[21]=Compo_Classes_Type_11;

	/* Ce composant représente: des éléments de la table propriete sous le nom "Obligatoire" */
 if(ALeDroit(0,"propriete"))
 {
Compo_Classes_Obligatoire_12.GenererXUL(top.document.getElementById("Classes_Propriétés_8_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 22*/
top.TAB_GLOBAL_COMPO[22]=Compo_Classes_Obligatoire_12;

	/* Ce composant représente: des éléments de la table propriete sous le nom "Colonne de la liste" */
 if(ALeDroit(0,"propriete"))
 {
Compo_Classes_Colonne_de_la_liste_13.GenererXUL(top.document.getElementById("Classes_Propriétés_8_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 23*/
top.TAB_GLOBAL_COMPO[23]=Compo_Classes_Colonne_de_la_liste_13;

	/* Ce composant représente: des éléments de la table propriete sous le nom "Colonne indispensable en affichage" */
 if(ALeDroit(0,"propriete"))
 {
Compo_Classes_Colonne_indispensable_en_affichage_14.GenererXUL(top.document.getElementById("Classes_Propriétés_8_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 24*/
top.TAB_GLOBAL_COMPO[24]=Compo_Classes_Colonne_indispensable_en_affichage_14;

	/* Ce composant représente: des éléments de la table propriete sous le nom "Ordre" */
 if(ALeDroit(0,"propriete"))
 {
Compo_Classes_Ordre_15.GenererXUL(top.document.getElementById("Classes_Propriétés_8_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 25*/
top.TAB_GLOBAL_COMPO[25]=Compo_Classes_Ordre_15;
var Col_N0_Libellé_De_Types_de_propriétés_Liste_des_types_de_propriétés0=new clAttribut("tr_libelle","typepropriete",null);

var Types_de_propriétés_Libellé_de_la_liste_1=new clAttribut("tr_libelle","typepropriete",null);


	/* Ce composant représente: typepropriete.tr_libelle sous le nom "Libellé de la liste" */
var Compo_Types_de_propriétés_Libellé_de_la_liste_1=new clCompoTextBox(Types_de_propriétés_Libellé_de_la_liste_1,null,"Libellé de la liste",false,false);
var Col_N0_Choix_De_Types_de_propriétés_Liste_des_choix_2=new clAttribut("lc_libelle","listechoix",null);

var Types_de_propriétés_Choix_3=new clAttribut("lc_libelle","listechoix",null);


	/* Ce composant représente: listechoix.lc_libelle sous le nom "Choix" */
var Compo_Types_de_propriétés_Choix_3=new clCompoTextBox(Types_de_propriétés_Choix_3,null,"Choix",false,false);
var Types_de_propriétés_Liste_des_choix_2=new clEnsembleAttributs("listechoix",
	new Array(
	new clLiaison(null,Col_N0_Choix_De_Types_de_propriétés_Liste_des_choix_2)
	),
	new Array(
	new clLiaison(null,Types_de_propriétés_Choix_3)
	));

var Titre_Types_de_propriétés_Liste_des_choix_2=new Array("Choix");

	/* Ce composant représente: des éléments de la table listechoix sous le nom "Liste des choix" */
var Compo_Types_de_propriétés_Liste_des_choix_2=new clCompoListe(Types_de_propriétés_Liste_des_choix_2,null,Titre_Types_de_propriétés_Liste_des_choix_2,"Liste des choix",true,false);
var Joint_Esclave_Types_de_propriétés_Liste_des_choix_2=new clJointureMulti("typepropriete",
	new Array(
	new stJointure("listechoix","tr_numero","lc_typepropriete",null,false)
	));
var Types_de_propriétés_Liste_des_types_de_propriétés0=new clEnsembleAttributs("typepropriete",
	new Array(
	new clLiaison(null,Col_N0_Libellé_De_Types_de_propriétés_Liste_des_types_de_propriétés0)
	),
	new Array(
	new clLiaison(null,Types_de_propriétés_Libellé_de_la_liste_1)
	,new clLiaison(Joint_Esclave_Types_de_propriétés_Liste_des_choix_2,Types_de_propriétés_Liste_des_choix_2)
	));

var Titre_Types_de_propriétés_Liste_des_types_de_propriétés0=new Array("Libellé");

	/* Ce composant représente: des éléments de la table typepropriete sous le nom "Liste des types de propriétés" */
var Compo_Types_de_propriétés_Liste_des_types_de_propriétés0=new clCompoListe(Types_de_propriétés_Liste_des_types_de_propriétés0,new Array(new clInterfaceFiltrageVide()),Titre_Types_de_propriétés_Liste_des_types_de_propriétés0,"Liste des types de propriétés",true,false);

	/* Ce composant représente: typepropriete.undefined sous le nom "Liste des types de propriétés" */
 if(ALeDroit(0,"typepropriete"))
 {
Compo_Types_de_propriétés_Liste_des_types_de_propriétés0.GenererXUL(top.document.getElementById("Types_de_propriétés_Liste_des_types_de_propriétés0"));

 }

	/* On l'ajoute au tableau global à l'indice 26*/
top.TAB_GLOBAL_COMPO[26]=Compo_Types_de_propriétés_Liste_des_types_de_propriétés0;

	/* Ce composant représente: des éléments de la table typepropriete sous le nom "Libellé de la liste" */
 if(ALeDroit(0,"typepropriete"))
 {
Compo_Types_de_propriétés_Libellé_de_la_liste_1.GenererXUL(top.document.getElementById("Types_de_propriétés_Liste_des_types_de_propriétés0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 28*/
top.TAB_GLOBAL_COMPO[28]=Compo_Types_de_propriétés_Libellé_de_la_liste_1;

	/* Ce composant représente: listechoix.undefined sous le nom "Liste des choix" */
 if(ALeDroit(0,"listechoix"))
 {
Compo_Types_de_propriétés_Liste_des_choix_2.GenererXUL(top.document.getElementById("Types_de_propriétés_Liste_des_choix_2"));

 }

	/* On l'ajoute au tableau global à l'indice 29*/
top.TAB_GLOBAL_COMPO[29]=Compo_Types_de_propriétés_Liste_des_choix_2;

	/* Ce composant représente: des éléments de la table listechoix sous le nom "Choix" */
 if(ALeDroit(0,"listechoix"))
 {
Compo_Types_de_propriétés_Choix_3.GenererXUL(top.document.getElementById("Types_de_propriétés_Liste_des_choix_2_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 31*/
top.TAB_GLOBAL_COMPO[31]=Compo_Types_de_propriétés_Choix_3;
 if(ALeDroit(5,"classe"))
 {
/* On refresh les composants non dépendents de l'onget Classes*/
var Composant_0 = TAB_GLOBAL_COMPO[3];
if (Composant_0!=null){
Composant_0.ActiverComposant(true);
Composant_0.Refresh();
}

 }
 else
 {
top.document.getElementById("Onglet_Classes").hidden=true;
if (top.document.getElementById("Onglet_Classes").selected)
	top.document.getElementById("Tous_les_onglets").advanceSelectedTab(1);

 }
var nb_button=0
 if(ALeDroit(2,"classe"))
 {
nb_button++;
top.document.getElementById("Insert_Classes_Liste_des_classes0").disabled=false;

 }
 else
 {
top.document.getElementById("Insert_Classes_Liste_des_classes0").hidden=true;

 }
 if(ALeDroit(4,"classe"))
 {
nb_button++;
top.document.getElementById("Delete_Classes_Liste_des_classes0").disabled=false;

 }
 else
 {
top.document.getElementById("Delete_Classes_Liste_des_classes0").hidden=true;

 }
 if(ALeDroit(1,"classe"))
 {
nb_button++;
top.document.getElementById("Update_Classes_Liste_des_classes0").disabled=false;

 }
 else
 {
top.document.getElementById("Update_Classes_Liste_des_classes0").hidden=true;

 }
if (nb_button==0)
{
	top.document.getElementById("Validate_Classes_Liste_des_classes0").hidden=true;
	top.document.getElementById("Annuler_Classes_Liste_des_classes0").hidden=true;
}
var nb_button=0
 if(ALeDroit(2,"propriete"))
 {
nb_button++;

 }
 else
 {
top.document.getElementById("Insert_Classes_Propriétés_8").hidden=true;

 }
 if(ALeDroit(4,"propriete"))
 {
nb_button++;

 }
 else
 {
top.document.getElementById("Delete_Classes_Propriétés_8").hidden=true;

 }
 if(ALeDroit(1,"propriete"))
 {
nb_button++;

 }
 else
 {
top.document.getElementById("Update_Classes_Propriétés_8").hidden=true;

 }
if (nb_button==0)
{
	top.document.getElementById("Validate_Classes_Propriétés_8").hidden=true;
	top.document.getElementById("Annuler_Classes_Propriétés_8").hidden=true;
}
 if(ALeDroit(5,"typepropriete"))
 {
/* On refresh les composants non dépendents de l'onget Types de propriétés*/
var Composant_0 = TAB_GLOBAL_COMPO[26];
if (Composant_0!=null){
Composant_0.ActiverComposant(true);
Composant_0.Refresh();
}

 }
 else
 {
top.document.getElementById("Onglet_Types_de_propriétés").hidden=true;
if (top.document.getElementById("Onglet_Types_de_propriétés").selected)
	top.document.getElementById("Tous_les_onglets").advanceSelectedTab(1);

 }
var nb_button=0
 if(ALeDroit(2,"typepropriete"))
 {
nb_button++;
top.document.getElementById("Insert_Types_de_propriétés_Liste_des_types_de_propriétés0").disabled=false;

 }
 else
 {
top.document.getElementById("Insert_Types_de_propriétés_Liste_des_types_de_propriétés0").hidden=true;

 }
 if(ALeDroit(4,"typepropriete"))
 {
nb_button++;
top.document.getElementById("Delete_Types_de_propriétés_Liste_des_types_de_propriétés0").disabled=false;

 }
 else
 {
top.document.getElementById("Delete_Types_de_propriétés_Liste_des_types_de_propriétés0").hidden=true;

 }
 if(ALeDroit(1,"typepropriete"))
 {
nb_button++;
top.document.getElementById("Update_Types_de_propriétés_Liste_des_types_de_propriétés0").disabled=false;

 }
 else
 {
top.document.getElementById("Update_Types_de_propriétés_Liste_des_types_de_propriétés0").hidden=true;

 }
if (nb_button==0)
{
	top.document.getElementById("Validate_Types_de_propriétés_Liste_des_types_de_propriétés0").hidden=true;
	top.document.getElementById("Annuler_Types_de_propriétés_Liste_des_types_de_propriétés0").hidden=true;
}
var nb_button=0
 if(ALeDroit(2,"listechoix"))
 {
nb_button++;

 }
 else
 {
top.document.getElementById("Insert_Types_de_propriétés_Liste_des_choix_2").hidden=true;

 }
 if(ALeDroit(4,"listechoix"))
 {
nb_button++;

 }
 else
 {
top.document.getElementById("Delete_Types_de_propriétés_Liste_des_choix_2").hidden=true;

 }
 if(ALeDroit(1,"listechoix"))
 {
nb_button++;

 }
 else
 {
top.document.getElementById("Update_Types_de_propriétés_Liste_des_choix_2").hidden=true;

 }
if (nb_button==0)
{
	top.document.getElementById("Validate_Types_de_propriétés_Liste_des_choix_2").hidden=true;
	top.document.getElementById("Annuler_Types_de_propriétés_Liste_des_choix_2").hidden=true;
}
}

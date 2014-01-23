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
var TAB_COMPO_PPTES = new Array(259);
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
         FONCTIONS POUR L'ONGLET Personnes
   ***********************************************/ 

 /* FILTRES DE RELATION ENTRE ONGLETS => VARIABLES GLOBALES POUR ETRE ACCESSIBLES DEPUIS INTERFACE_USER.JS */

function OuvrirOnglet_Personnes()
{
 var tabs = top.document.getElementById("Tous_les_onglets");
 tabs.selectedItem = top.document.getElementById("Onglet_Personnes");
}

function Insert_Personnes_Liste_des_personnes0()
{
 TAB_COMPO_PPTES[3].Action_en_cours = INSERT;
/* On calcule la nouvelle clé */
 TAB_COMPO_PPTES[3].NewCle = getNewCle("personne");
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[3].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[10];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[11];
 Esclave_1.ActiverComposant(true);
 var Esclave_2=TAB_GLOBAL_COMPO[12];
 Esclave_2.ActiverComposant(true);
 var Esclave_3=TAB_GLOBAL_COMPO[13];
 Esclave_3.ActiverComposant(true);
 var Esclave_4=TAB_GLOBAL_COMPO[14];
 Esclave_4.ActiverComposant(true);
 var Esclave_5=TAB_GLOBAL_COMPO[15];
 Esclave_5.ActiverComposant(true);
 var Esclave_6=TAB_GLOBAL_COMPO[16];
 Esclave_6.ActiverComposant(true);
 var Esclave_7=TAB_GLOBAL_COMPO[17];
 Esclave_7.ActiverComposant(true);
 var Esclave_8=TAB_GLOBAL_COMPO[18];
 Esclave_8.ActiverComposant(true);
 var Esclave_9=TAB_GLOBAL_COMPO[19];
 Esclave_9.ActiverComposant(true);
top.document.getElementById("Validate_Personnes_Observations_11").disabled=true;
top.document.getElementById("Annuler_Personnes_Observations_11").disabled=true;
top.document.getElementById("Insert_Personnes_Observations_11").disabled=false;
top.document.getElementById("Delete_Personnes_Observations_11").disabled=false;
top.document.getElementById("Update_Personnes_Observations_11").disabled=false;
 var Esclave_10=TAB_GLOBAL_COMPO[24];
 Esclave_10.ActiverComposant(true);
top.document.getElementById("Validate_Personnes_Adresses_14").disabled=true;
top.document.getElementById("Annuler_Personnes_Adresses_14").disabled=true;
top.document.getElementById("Insert_Personnes_Adresses_14").disabled=false;
top.document.getElementById("Delete_Personnes_Adresses_14").disabled=false;
top.document.getElementById("Update_Personnes_Adresses_14").disabled=false;
 var Esclave_11=TAB_GLOBAL_COMPO[29];
 Esclave_11.ActiverComposant(true);
top.document.getElementById("Validate_Personnes_Contact_23").disabled=true;
top.document.getElementById("Annuler_Personnes_Contact_23").disabled=true;
top.document.getElementById("Insert_Personnes_Contact_23").disabled=false;
top.document.getElementById("Delete_Personnes_Contact_23").disabled=false;
top.document.getElementById("Update_Personnes_Contact_23").disabled=false;
 var Esclave_12=TAB_GLOBAL_COMPO[46];
 Esclave_12.ActiverComposant(true);
top.document.getElementById("Validate_Personnes_Tâches_26").disabled=true;
top.document.getElementById("Annuler_Personnes_Tâches_26").disabled=true;
top.document.getElementById("Insert_Personnes_Tâches_26").disabled=false;
top.document.getElementById("Delete_Personnes_Tâches_26").disabled=false;
top.document.getElementById("Update_Personnes_Tâches_26").disabled=false;
 var Esclave_13=TAB_GLOBAL_COMPO[52];
 Esclave_13.ActiverComposant(true);
top.document.getElementById("Validate_Personnes_Responsabilités_32").disabled=true;
top.document.getElementById("Annuler_Personnes_Responsabilités_32").disabled=true;
top.document.getElementById("Insert_Personnes_Responsabilités_32").disabled=false;
top.document.getElementById("Delete_Personnes_Responsabilités_32").disabled=false;
top.document.getElementById("Update_Personnes_Responsabilités_32").disabled=false;
 var Esclave_14=TAB_GLOBAL_COMPO[63];
 Esclave_14.ActiverComposant(true);
top.document.getElementById("Validate_Personnes_Attributs_38").disabled=true;
top.document.getElementById("Annuler_Personnes_Attributs_38").disabled=true;
top.document.getElementById("Insert_Personnes_Attributs_38").disabled=false;
top.document.getElementById("Delete_Personnes_Attributs_38").disabled=false;
top.document.getElementById("Update_Personnes_Attributs_38").disabled=false;
 var Esclave_15=TAB_GLOBAL_COMPO[75];
 Esclave_15.ActiverComposant(true);
 var Esclave_16=TAB_GLOBAL_COMPO[81];
 Esclave_16.ActiverComposant(true);
 var Esclave_17=TAB_GLOBAL_COMPO[87];
 Esclave_17.ActiverComposant(true);
 var Esclave_18=TAB_GLOBAL_COMPO[94];
 Esclave_18.ActiverComposant(true);
top.document.getElementById("Validate_Personnes_Routages_45").disabled=true;
top.document.getElementById("Annuler_Personnes_Routages_45").disabled=true;
top.document.getElementById("Insert_Personnes_Routages_45").disabled=false;
top.document.getElementById("Delete_Personnes_Routages_45").disabled=false;
top.document.getElementById("Update_Personnes_Routages_45").disabled=false;
 var Esclave_19=TAB_GLOBAL_COMPO[100];
 Esclave_19.ActiverComposant(true);
top.document.getElementById("Validate_Personnes_Liste_des_personnes0").disabled=false;
top.document.getElementById("Annuler_Personnes_Liste_des_personnes0").disabled=false;
top.document.getElementById("Insert_Personnes_Liste_des_personnes0").disabled=true;
top.document.getElementById("Delete_Personnes_Liste_des_personnes0").disabled=true;
top.document.getElementById("Update_Personnes_Liste_des_personnes0").disabled=true;
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

function Delete_Personnes_Liste_des_personnes0()
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
 	User_Delete_Personnes_Liste_des_personnes0(Maitre);
	Maitre.RefreshTotal();
 }
}

function Update_Personnes_Liste_des_personnes0()
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
 var Esclave_0=TAB_GLOBAL_COMPO[10];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[11];
 Esclave_1.ActiverComposant(true);
 var Esclave_2=TAB_GLOBAL_COMPO[12];
 Esclave_2.ActiverComposant(true);
 var Esclave_3=TAB_GLOBAL_COMPO[13];
 Esclave_3.ActiverComposant(true);
 var Esclave_4=TAB_GLOBAL_COMPO[14];
 Esclave_4.ActiverComposant(true);
 var Esclave_5=TAB_GLOBAL_COMPO[15];
 Esclave_5.ActiverComposant(true);
 var Esclave_6=TAB_GLOBAL_COMPO[16];
 Esclave_6.ActiverComposant(true);
 var Esclave_7=TAB_GLOBAL_COMPO[17];
 Esclave_7.ActiverComposant(true);
 var Esclave_8=TAB_GLOBAL_COMPO[18];
 Esclave_8.ActiverComposant(true);
 var Esclave_9=TAB_GLOBAL_COMPO[19];
 Esclave_9.ActiverComposant(true);
top.document.getElementById("Validate_Personnes_Observations_11").disabled=true;
top.document.getElementById("Annuler_Personnes_Observations_11").disabled=true;
top.document.getElementById("Insert_Personnes_Observations_11").disabled=false;
top.document.getElementById("Delete_Personnes_Observations_11").disabled=false;
top.document.getElementById("Update_Personnes_Observations_11").disabled=false;
 var Esclave_10=TAB_GLOBAL_COMPO[24];
 Esclave_10.ActiverComposant(true);
top.document.getElementById("Validate_Personnes_Adresses_14").disabled=true;
top.document.getElementById("Annuler_Personnes_Adresses_14").disabled=true;
top.document.getElementById("Insert_Personnes_Adresses_14").disabled=false;
top.document.getElementById("Delete_Personnes_Adresses_14").disabled=false;
top.document.getElementById("Update_Personnes_Adresses_14").disabled=false;
 var Esclave_11=TAB_GLOBAL_COMPO[29];
 Esclave_11.ActiverComposant(true);
top.document.getElementById("Validate_Personnes_Contact_23").disabled=true;
top.document.getElementById("Annuler_Personnes_Contact_23").disabled=true;
top.document.getElementById("Insert_Personnes_Contact_23").disabled=false;
top.document.getElementById("Delete_Personnes_Contact_23").disabled=false;
top.document.getElementById("Update_Personnes_Contact_23").disabled=false;
 var Esclave_12=TAB_GLOBAL_COMPO[46];
 Esclave_12.ActiverComposant(true);
top.document.getElementById("Validate_Personnes_Tâches_26").disabled=true;
top.document.getElementById("Annuler_Personnes_Tâches_26").disabled=true;
top.document.getElementById("Insert_Personnes_Tâches_26").disabled=false;
top.document.getElementById("Delete_Personnes_Tâches_26").disabled=false;
top.document.getElementById("Update_Personnes_Tâches_26").disabled=false;
 var Esclave_13=TAB_GLOBAL_COMPO[52];
 Esclave_13.ActiverComposant(true);
top.document.getElementById("Validate_Personnes_Responsabilités_32").disabled=true;
top.document.getElementById("Annuler_Personnes_Responsabilités_32").disabled=true;
top.document.getElementById("Insert_Personnes_Responsabilités_32").disabled=false;
top.document.getElementById("Delete_Personnes_Responsabilités_32").disabled=false;
top.document.getElementById("Update_Personnes_Responsabilités_32").disabled=false;
 var Esclave_14=TAB_GLOBAL_COMPO[63];
 Esclave_14.ActiverComposant(true);
top.document.getElementById("Validate_Personnes_Attributs_38").disabled=true;
top.document.getElementById("Annuler_Personnes_Attributs_38").disabled=true;
top.document.getElementById("Insert_Personnes_Attributs_38").disabled=false;
top.document.getElementById("Delete_Personnes_Attributs_38").disabled=false;
top.document.getElementById("Update_Personnes_Attributs_38").disabled=false;
 var Esclave_15=TAB_GLOBAL_COMPO[75];
 Esclave_15.ActiverComposant(true);
 var Esclave_16=TAB_GLOBAL_COMPO[81];
 Esclave_16.ActiverComposant(true);
 var Esclave_17=TAB_GLOBAL_COMPO[87];
 Esclave_17.ActiverComposant(true);
 var Esclave_18=TAB_GLOBAL_COMPO[94];
 Esclave_18.ActiverComposant(true);
top.document.getElementById("Validate_Personnes_Routages_45").disabled=true;
top.document.getElementById("Annuler_Personnes_Routages_45").disabled=true;
top.document.getElementById("Insert_Personnes_Routages_45").disabled=false;
top.document.getElementById("Delete_Personnes_Routages_45").disabled=false;
top.document.getElementById("Update_Personnes_Routages_45").disabled=false;
 var Esclave_19=TAB_GLOBAL_COMPO[100];
 Esclave_19.ActiverComposant(true);
top.document.getElementById("Validate_Personnes_Liste_des_personnes0").disabled=false;
top.document.getElementById("Annuler_Personnes_Liste_des_personnes0").disabled=false;
top.document.getElementById("Insert_Personnes_Liste_des_personnes0").disabled=true;
top.document.getElementById("Delete_Personnes_Liste_des_personnes0").disabled=true;
top.document.getElementById("Update_Personnes_Liste_des_personnes0").disabled=true;
return TAB_COMPO_PPTES[3].NewCle;
}

function Validate_Personnes_Liste_des_personnes0(retour)
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
	if ((NewCle = User_Insert_Personnes_Liste_des_personnes0(Maitre))==-1)
		return -1;
	break;
	case UPDATE :
	if ((User_Update_Personnes_Liste_des_personnes0(Maitre))==-1)
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
 var Esclave_0=TAB_GLOBAL_COMPO[10];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[11];
 Esclave_1.ActiverComposant(false);
 var Esclave_2=TAB_GLOBAL_COMPO[12];
 Esclave_2.ActiverComposant(false);
 var Esclave_3=TAB_GLOBAL_COMPO[13];
 Esclave_3.ActiverComposant(false);
 var Esclave_4=TAB_GLOBAL_COMPO[14];
 Esclave_4.ActiverComposant(false);
 var Esclave_5=TAB_GLOBAL_COMPO[15];
 Esclave_5.ActiverComposant(false);
 var Esclave_6=TAB_GLOBAL_COMPO[16];
 Esclave_6.ActiverComposant(false);
 var Esclave_7=TAB_GLOBAL_COMPO[17];
 Esclave_7.ActiverComposant(false);
 var Esclave_8=TAB_GLOBAL_COMPO[18];
 Esclave_8.ActiverComposant(false);
 var Esclave_9=TAB_GLOBAL_COMPO[19];
 Esclave_9.ActiverComposant(false);
Annuler_Personnes_Observations_11();
top.document.getElementById("Validate_Personnes_Observations_11").disabled=true;
top.document.getElementById("Annuler_Personnes_Observations_11").disabled=true;
top.document.getElementById("Insert_Personnes_Observations_11").disabled=true;
top.document.getElementById("Delete_Personnes_Observations_11").disabled=true;
top.document.getElementById("Update_Personnes_Observations_11").disabled=true;
 var Esclave_10=TAB_GLOBAL_COMPO[24];
 Esclave_10.ActiverComposant(false);
Annuler_Personnes_Adresses_14();
top.document.getElementById("Validate_Personnes_Adresses_14").disabled=true;
top.document.getElementById("Annuler_Personnes_Adresses_14").disabled=true;
top.document.getElementById("Insert_Personnes_Adresses_14").disabled=true;
top.document.getElementById("Delete_Personnes_Adresses_14").disabled=true;
top.document.getElementById("Update_Personnes_Adresses_14").disabled=true;
 var Esclave_11=TAB_GLOBAL_COMPO[29];
 Esclave_11.ActiverComposant(false);
Annuler_Personnes_Contact_23();
top.document.getElementById("Validate_Personnes_Contact_23").disabled=true;
top.document.getElementById("Annuler_Personnes_Contact_23").disabled=true;
top.document.getElementById("Insert_Personnes_Contact_23").disabled=true;
top.document.getElementById("Delete_Personnes_Contact_23").disabled=true;
top.document.getElementById("Update_Personnes_Contact_23").disabled=true;
 var Esclave_12=TAB_GLOBAL_COMPO[46];
 Esclave_12.ActiverComposant(false);
Annuler_Personnes_Tâches_26();
top.document.getElementById("Validate_Personnes_Tâches_26").disabled=true;
top.document.getElementById("Annuler_Personnes_Tâches_26").disabled=true;
top.document.getElementById("Insert_Personnes_Tâches_26").disabled=true;
top.document.getElementById("Delete_Personnes_Tâches_26").disabled=true;
top.document.getElementById("Update_Personnes_Tâches_26").disabled=true;
 var Esclave_13=TAB_GLOBAL_COMPO[52];
 Esclave_13.ActiverComposant(false);
Annuler_Personnes_Responsabilités_32();
top.document.getElementById("Validate_Personnes_Responsabilités_32").disabled=true;
top.document.getElementById("Annuler_Personnes_Responsabilités_32").disabled=true;
top.document.getElementById("Insert_Personnes_Responsabilités_32").disabled=true;
top.document.getElementById("Delete_Personnes_Responsabilités_32").disabled=true;
top.document.getElementById("Update_Personnes_Responsabilités_32").disabled=true;
 var Esclave_14=TAB_GLOBAL_COMPO[63];
 Esclave_14.ActiverComposant(false);
Annuler_Personnes_Attributs_38();
top.document.getElementById("Validate_Personnes_Attributs_38").disabled=true;
top.document.getElementById("Annuler_Personnes_Attributs_38").disabled=true;
top.document.getElementById("Insert_Personnes_Attributs_38").disabled=true;
top.document.getElementById("Delete_Personnes_Attributs_38").disabled=true;
top.document.getElementById("Update_Personnes_Attributs_38").disabled=true;
 var Esclave_15=TAB_GLOBAL_COMPO[75];
 Esclave_15.ActiverComposant(false);
 var Esclave_16=TAB_GLOBAL_COMPO[81];
 Esclave_16.ActiverComposant(false);
 var Esclave_17=TAB_GLOBAL_COMPO[87];
 Esclave_17.ActiverComposant(false);
 var Esclave_18=TAB_GLOBAL_COMPO[94];
 Esclave_18.ActiverComposant(false);
Annuler_Personnes_Routages_45();
top.document.getElementById("Validate_Personnes_Routages_45").disabled=true;
top.document.getElementById("Annuler_Personnes_Routages_45").disabled=true;
top.document.getElementById("Insert_Personnes_Routages_45").disabled=true;
top.document.getElementById("Delete_Personnes_Routages_45").disabled=true;
top.document.getElementById("Update_Personnes_Routages_45").disabled=true;
 var Esclave_19=TAB_GLOBAL_COMPO[100];
 Esclave_19.ActiverComposant(false);
top.document.getElementById("Validate_Personnes_Liste_des_personnes0").disabled=true;
top.document.getElementById("Annuler_Personnes_Liste_des_personnes0").disabled=true;
top.document.getElementById("Insert_Personnes_Liste_des_personnes0").disabled=false;
top.document.getElementById("Delete_Personnes_Liste_des_personnes0").disabled=false;
top.document.getElementById("Update_Personnes_Liste_des_personnes0").disabled=false;
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

function Annuler_Personnes_Liste_des_personnes0()
{
 TAB_COMPO_PPTES[3].Action_en_cours = null;
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[3].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[10];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[11];
 Esclave_1.ActiverComposant(false);
 var Esclave_2=TAB_GLOBAL_COMPO[12];
 Esclave_2.ActiverComposant(false);
 var Esclave_3=TAB_GLOBAL_COMPO[13];
 Esclave_3.ActiverComposant(false);
 var Esclave_4=TAB_GLOBAL_COMPO[14];
 Esclave_4.ActiverComposant(false);
 var Esclave_5=TAB_GLOBAL_COMPO[15];
 Esclave_5.ActiverComposant(false);
 var Esclave_6=TAB_GLOBAL_COMPO[16];
 Esclave_6.ActiverComposant(false);
 var Esclave_7=TAB_GLOBAL_COMPO[17];
 Esclave_7.ActiverComposant(false);
 var Esclave_8=TAB_GLOBAL_COMPO[18];
 Esclave_8.ActiverComposant(false);
 var Esclave_9=TAB_GLOBAL_COMPO[19];
 Esclave_9.ActiverComposant(false);
Annuler_Personnes_Observations_11();
top.document.getElementById("Validate_Personnes_Observations_11").disabled=true;
top.document.getElementById("Annuler_Personnes_Observations_11").disabled=true;
top.document.getElementById("Insert_Personnes_Observations_11").disabled=true;
top.document.getElementById("Delete_Personnes_Observations_11").disabled=true;
top.document.getElementById("Update_Personnes_Observations_11").disabled=true;
 var Esclave_10=TAB_GLOBAL_COMPO[24];
 Esclave_10.ActiverComposant(false);
Annuler_Personnes_Adresses_14();
top.document.getElementById("Validate_Personnes_Adresses_14").disabled=true;
top.document.getElementById("Annuler_Personnes_Adresses_14").disabled=true;
top.document.getElementById("Insert_Personnes_Adresses_14").disabled=true;
top.document.getElementById("Delete_Personnes_Adresses_14").disabled=true;
top.document.getElementById("Update_Personnes_Adresses_14").disabled=true;
 var Esclave_11=TAB_GLOBAL_COMPO[29];
 Esclave_11.ActiverComposant(false);
Annuler_Personnes_Contact_23();
top.document.getElementById("Validate_Personnes_Contact_23").disabled=true;
top.document.getElementById("Annuler_Personnes_Contact_23").disabled=true;
top.document.getElementById("Insert_Personnes_Contact_23").disabled=true;
top.document.getElementById("Delete_Personnes_Contact_23").disabled=true;
top.document.getElementById("Update_Personnes_Contact_23").disabled=true;
 var Esclave_12=TAB_GLOBAL_COMPO[46];
 Esclave_12.ActiverComposant(false);
Annuler_Personnes_Tâches_26();
top.document.getElementById("Validate_Personnes_Tâches_26").disabled=true;
top.document.getElementById("Annuler_Personnes_Tâches_26").disabled=true;
top.document.getElementById("Insert_Personnes_Tâches_26").disabled=true;
top.document.getElementById("Delete_Personnes_Tâches_26").disabled=true;
top.document.getElementById("Update_Personnes_Tâches_26").disabled=true;
 var Esclave_13=TAB_GLOBAL_COMPO[52];
 Esclave_13.ActiverComposant(false);
Annuler_Personnes_Responsabilités_32();
top.document.getElementById("Validate_Personnes_Responsabilités_32").disabled=true;
top.document.getElementById("Annuler_Personnes_Responsabilités_32").disabled=true;
top.document.getElementById("Insert_Personnes_Responsabilités_32").disabled=true;
top.document.getElementById("Delete_Personnes_Responsabilités_32").disabled=true;
top.document.getElementById("Update_Personnes_Responsabilités_32").disabled=true;
 var Esclave_14=TAB_GLOBAL_COMPO[63];
 Esclave_14.ActiverComposant(false);
Annuler_Personnes_Attributs_38();
top.document.getElementById("Validate_Personnes_Attributs_38").disabled=true;
top.document.getElementById("Annuler_Personnes_Attributs_38").disabled=true;
top.document.getElementById("Insert_Personnes_Attributs_38").disabled=true;
top.document.getElementById("Delete_Personnes_Attributs_38").disabled=true;
top.document.getElementById("Update_Personnes_Attributs_38").disabled=true;
 var Esclave_15=TAB_GLOBAL_COMPO[75];
 Esclave_15.ActiverComposant(false);
 var Esclave_16=TAB_GLOBAL_COMPO[81];
 Esclave_16.ActiverComposant(false);
 var Esclave_17=TAB_GLOBAL_COMPO[87];
 Esclave_17.ActiverComposant(false);
 var Esclave_18=TAB_GLOBAL_COMPO[94];
 Esclave_18.ActiverComposant(false);
Annuler_Personnes_Routages_45();
top.document.getElementById("Validate_Personnes_Routages_45").disabled=true;
top.document.getElementById("Annuler_Personnes_Routages_45").disabled=true;
top.document.getElementById("Insert_Personnes_Routages_45").disabled=true;
top.document.getElementById("Delete_Personnes_Routages_45").disabled=true;
top.document.getElementById("Update_Personnes_Routages_45").disabled=true;
 var Esclave_19=TAB_GLOBAL_COMPO[100];
 Esclave_19.ActiverComposant(false);
top.document.getElementById("Validate_Personnes_Liste_des_personnes0").disabled=true;
top.document.getElementById("Annuler_Personnes_Liste_des_personnes0").disabled=true;
top.document.getElementById("Insert_Personnes_Liste_des_personnes0").disabled=false;
top.document.getElementById("Delete_Personnes_Liste_des_personnes0").disabled=false;
top.document.getElementById("Update_Personnes_Liste_des_personnes0").disabled=false;
}

function Insert_Personnes_Observations_11()
{
 if (TAB_COMPO_PPTES[3].Action_en_cours == INSERT)
 	{
 		if (confirm("Pour continuer, vous devez enregistrer votre saisie\n Voulez vous poursuivre ?"))
		{
			var CleValide=Validate_Personnes_Liste_des_personnes0(false);
			if (CleValide==-1)
			{
				return -1;
			}
			CleValide=Update_Personnes_Liste_des_personnes0();
			if (CleValide==-1)
			{
				alert("Erreur l'enregistrement n'a pas étais correctement inséré");
				return -1;
			}
			Insert_Personnes_Observations_11();
		}
 		return;
 	}
 TAB_COMPO_PPTES[24].Action_en_cours = INSERT;
/* On calcule la nouvelle clé */
 TAB_COMPO_PPTES[24].NewCle = getNewCle("observation");
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[24].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[27];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[28];
 Esclave_1.ActiverComposant(true);
top.document.getElementById("Validate_Personnes_Observations_11").disabled=false;
top.document.getElementById("Annuler_Personnes_Observations_11").disabled=false;
top.document.getElementById("Insert_Personnes_Observations_11").disabled=true;
top.document.getElementById("Delete_Personnes_Observations_11").disabled=true;
top.document.getElementById("Update_Personnes_Observations_11").disabled=true;
 var Maitre=TAB_GLOBAL_COMPO[24];
 /* Pour une insertion on désectionne */
 var tree=Maitre.getComposantXul();
 if (tree.view!=null)
 {
 	tree.currentIndex=-1;
 	tree.view.selection.clearSelection();
 }
return TAB_COMPO_PPTES[24].NewCle;
}

function Delete_Personnes_Observations_11()
{
 if (TAB_GLOBAL_COMPO[24].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement à suprimer");
 	return;
 }
 /* On recupère le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[24];
 if (confirm("Voulez vous vraiment supprimer l'enregistrement en cours ?"))
 {
	TAB_COMPO_PPTES[24].Action_en_cours = DELETE;
 	User_Delete_Personnes_Observations_11(Maitre);
	Maitre.RefreshTotal();
 }
}

function Update_Personnes_Observations_11()
{
 if (TAB_GLOBAL_COMPO[24].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement à mettre à jour");
 	return -1;
 }
 TAB_COMPO_PPTES[24].Action_en_cours = UPDATE;
/* On calcule la nouvelle clé */
 TAB_COMPO_PPTES[24].NewCle = TAB_GLOBAL_COMPO[24].getCleVal();
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[24].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[27];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[28];
 Esclave_1.ActiverComposant(true);
top.document.getElementById("Validate_Personnes_Observations_11").disabled=false;
top.document.getElementById("Annuler_Personnes_Observations_11").disabled=false;
top.document.getElementById("Insert_Personnes_Observations_11").disabled=true;
top.document.getElementById("Delete_Personnes_Observations_11").disabled=true;
top.document.getElementById("Update_Personnes_Observations_11").disabled=true;
return TAB_COMPO_PPTES[24].NewCle;
}

function Validate_Personnes_Observations_11(retour)
{
 /* Retour à l'onget appellant si appelle par gérer */
if (retour==null)
	retour=true;

 /* On recupère le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[24];
 /* On recupère la clé du nouvel enregistrement */
 var NewCle=null;
 switch(TAB_COMPO_PPTES[24].Action_en_cours){
	case INSERT :
	if ((NewCle = User_Insert_Personnes_Observations_11(Maitre))==-1)
		return -1;
	break;
	case UPDATE :
	if ((User_Update_Personnes_Observations_11(Maitre))==-1)
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
 TAB_GLOBAL_COMPO[24].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[27];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[28];
 Esclave_1.ActiverComposant(false);
top.document.getElementById("Validate_Personnes_Observations_11").disabled=true;
top.document.getElementById("Annuler_Personnes_Observations_11").disabled=true;
top.document.getElementById("Insert_Personnes_Observations_11").disabled=false;
top.document.getElementById("Delete_Personnes_Observations_11").disabled=false;
top.document.getElementById("Update_Personnes_Observations_11").disabled=false;
 if (NewCle==null)
 	NewCle=TAB_COMPO_PPTES[24].NewCle;
 Maitre.ForceNextSelection(NewCle)
 Maitre.RefreshTotal();
 if(retour)
 {
 }
 TAB_COMPO_PPTES[24].Action_en_cours = null;
 return NewCle;
}

function Annuler_Personnes_Observations_11()
{
 TAB_COMPO_PPTES[24].Action_en_cours = null;
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[24].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[27];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[28];
 Esclave_1.ActiverComposant(false);
top.document.getElementById("Validate_Personnes_Observations_11").disabled=true;
top.document.getElementById("Annuler_Personnes_Observations_11").disabled=true;
top.document.getElementById("Insert_Personnes_Observations_11").disabled=false;
top.document.getElementById("Delete_Personnes_Observations_11").disabled=false;
top.document.getElementById("Update_Personnes_Observations_11").disabled=false;
}

function Insert_Personnes_Adresses_14()
{
 if (TAB_COMPO_PPTES[3].Action_en_cours == INSERT)
 	{
 		if (confirm("Pour continuer, vous devez enregistrer votre saisie\n Voulez vous poursuivre ?"))
		{
			var CleValide=Validate_Personnes_Liste_des_personnes0(false);
			if (CleValide==-1)
			{
				return -1;
			}
			CleValide=Update_Personnes_Liste_des_personnes0();
			if (CleValide==-1)
			{
				alert("Erreur l'enregistrement n'a pas étais correctement inséré");
				return -1;
			}
			Insert_Personnes_Adresses_14();
		}
 		return;
 	}
 TAB_COMPO_PPTES[29].Action_en_cours = INSERT;
/* On calcule la nouvelle clé */
 TAB_COMPO_PPTES[29].NewCle = getNewCle("adresse");
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[29].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[38];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[39];
 Esclave_1.ActiverComposant(true);
 var Esclave_2=TAB_GLOBAL_COMPO[40];
 Esclave_2.ActiverComposant(true);
 var Esclave_3=TAB_GLOBAL_COMPO[41];
 Esclave_3.ActiverComposant(true);
 var Esclave_4=TAB_GLOBAL_COMPO[42];
 Esclave_4.ActiverComposant(true);
 var Esclave_5=TAB_GLOBAL_COMPO[43];
 Esclave_5.ActiverComposant(true);
 var Esclave_6=TAB_GLOBAL_COMPO[44];
 Esclave_6.ActiverComposant(true);
 var Esclave_7=TAB_GLOBAL_COMPO[45];
 Esclave_7.ActiverComposant(true);
top.document.getElementById("Validate_Personnes_Adresses_14").disabled=false;
top.document.getElementById("Annuler_Personnes_Adresses_14").disabled=false;
top.document.getElementById("Insert_Personnes_Adresses_14").disabled=true;
top.document.getElementById("Delete_Personnes_Adresses_14").disabled=true;
top.document.getElementById("Update_Personnes_Adresses_14").disabled=true;
 var Maitre=TAB_GLOBAL_COMPO[29];
 /* Pour une insertion on désectionne */
 var tree=Maitre.getComposantXul();
 if (tree.view!=null)
 {
 	tree.currentIndex=-1;
 	tree.view.selection.clearSelection();
 }
TAB_GLOBAL_COMPO[43].my_CompoXUL.value="DEFAUT";
TAB_GLOBAL_COMPO[41].my_CompoXUL.value=true;
TAB_GLOBAL_COMPO[41].my_CompoXUL.checked=true;

return TAB_COMPO_PPTES[29].NewCle;
}

function Delete_Personnes_Adresses_14()
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
 	User_Delete_Personnes_Adresses_14(Maitre);
	Maitre.RefreshTotal();
 }
}

function Update_Personnes_Adresses_14()
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
 var Esclave_0=TAB_GLOBAL_COMPO[38];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[39];
 Esclave_1.ActiverComposant(true);
 var Esclave_2=TAB_GLOBAL_COMPO[40];
 Esclave_2.ActiverComposant(true);
 var Esclave_3=TAB_GLOBAL_COMPO[41];
 Esclave_3.ActiverComposant(true);
 var Esclave_4=TAB_GLOBAL_COMPO[42];
 Esclave_4.ActiverComposant(true);
 var Esclave_5=TAB_GLOBAL_COMPO[43];
 Esclave_5.ActiverComposant(true);
 var Esclave_6=TAB_GLOBAL_COMPO[44];
 Esclave_6.ActiverComposant(true);
 var Esclave_7=TAB_GLOBAL_COMPO[45];
 Esclave_7.ActiverComposant(true);
top.document.getElementById("Validate_Personnes_Adresses_14").disabled=false;
top.document.getElementById("Annuler_Personnes_Adresses_14").disabled=false;
top.document.getElementById("Insert_Personnes_Adresses_14").disabled=true;
top.document.getElementById("Delete_Personnes_Adresses_14").disabled=true;
top.document.getElementById("Update_Personnes_Adresses_14").disabled=true;
return TAB_COMPO_PPTES[29].NewCle;
}

function Validate_Personnes_Adresses_14(retour)
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
	if ((NewCle = User_Insert_Personnes_Adresses_14(Maitre))==-1)
		return -1;
	break;
	case UPDATE :
	if ((User_Update_Personnes_Adresses_14(Maitre))==-1)
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
 var Esclave_0=TAB_GLOBAL_COMPO[38];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[39];
 Esclave_1.ActiverComposant(false);
 var Esclave_2=TAB_GLOBAL_COMPO[40];
 Esclave_2.ActiverComposant(false);
 var Esclave_3=TAB_GLOBAL_COMPO[41];
 Esclave_3.ActiverComposant(false);
 var Esclave_4=TAB_GLOBAL_COMPO[42];
 Esclave_4.ActiverComposant(false);
 var Esclave_5=TAB_GLOBAL_COMPO[43];
 Esclave_5.ActiverComposant(false);
 var Esclave_6=TAB_GLOBAL_COMPO[44];
 Esclave_6.ActiverComposant(false);
 var Esclave_7=TAB_GLOBAL_COMPO[45];
 Esclave_7.ActiverComposant(false);
top.document.getElementById("Validate_Personnes_Adresses_14").disabled=true;
top.document.getElementById("Annuler_Personnes_Adresses_14").disabled=true;
top.document.getElementById("Insert_Personnes_Adresses_14").disabled=false;
top.document.getElementById("Delete_Personnes_Adresses_14").disabled=false;
top.document.getElementById("Update_Personnes_Adresses_14").disabled=false;
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

function Annuler_Personnes_Adresses_14()
{
 TAB_COMPO_PPTES[29].Action_en_cours = null;
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[29].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[38];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[39];
 Esclave_1.ActiverComposant(false);
 var Esclave_2=TAB_GLOBAL_COMPO[40];
 Esclave_2.ActiverComposant(false);
 var Esclave_3=TAB_GLOBAL_COMPO[41];
 Esclave_3.ActiverComposant(false);
 var Esclave_4=TAB_GLOBAL_COMPO[42];
 Esclave_4.ActiverComposant(false);
 var Esclave_5=TAB_GLOBAL_COMPO[43];
 Esclave_5.ActiverComposant(false);
 var Esclave_6=TAB_GLOBAL_COMPO[44];
 Esclave_6.ActiverComposant(false);
 var Esclave_7=TAB_GLOBAL_COMPO[45];
 Esclave_7.ActiverComposant(false);
top.document.getElementById("Validate_Personnes_Adresses_14").disabled=true;
top.document.getElementById("Annuler_Personnes_Adresses_14").disabled=true;
top.document.getElementById("Insert_Personnes_Adresses_14").disabled=false;
top.document.getElementById("Delete_Personnes_Adresses_14").disabled=false;
top.document.getElementById("Update_Personnes_Adresses_14").disabled=false;
}

function Insert_Personnes_Contact_23()
{
 if (TAB_COMPO_PPTES[3].Action_en_cours == INSERT)
 	{
 		if (confirm("Pour continuer, vous devez enregistrer votre saisie\n Voulez vous poursuivre ?"))
		{
			var CleValide=Validate_Personnes_Liste_des_personnes0(false);
			if (CleValide==-1)
			{
				return -1;
			}
			CleValide=Update_Personnes_Liste_des_personnes0();
			if (CleValide==-1)
			{
				alert("Erreur l'enregistrement n'a pas étais correctement inséré");
				return -1;
			}
			Insert_Personnes_Contact_23();
		}
 		return;
 	}
 TAB_COMPO_PPTES[46].Action_en_cours = INSERT;
/* On calcule la nouvelle clé */
 TAB_COMPO_PPTES[46].NewCle = getNewCle("estjoignable");
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[46].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[50];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[51];
 Esclave_1.ActiverComposant(true);
top.document.getElementById("Validate_Personnes_Contact_23").disabled=false;
top.document.getElementById("Annuler_Personnes_Contact_23").disabled=false;
top.document.getElementById("Insert_Personnes_Contact_23").disabled=true;
top.document.getElementById("Delete_Personnes_Contact_23").disabled=true;
top.document.getElementById("Update_Personnes_Contact_23").disabled=true;
 var Maitre=TAB_GLOBAL_COMPO[46];
 /* Pour une insertion on désectionne */
 var tree=Maitre.getComposantXul();
 if (tree.view!=null)
 {
 	tree.currentIndex=-1;
 	tree.view.selection.clearSelection();
 }
TAB_GLOBAL_COMPO[51].my_CompoXUL.value=true;
TAB_GLOBAL_COMPO[51].my_CompoXUL.checked=true;

return TAB_COMPO_PPTES[46].NewCle;
}

function Delete_Personnes_Contact_23()
{
 if (TAB_GLOBAL_COMPO[46].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement à suprimer");
 	return;
 }
 /* On recupère le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[46];
 if (confirm("Voulez vous vraiment supprimer l'enregistrement en cours ?"))
 {
	TAB_COMPO_PPTES[46].Action_en_cours = DELETE;
 	User_Delete_Personnes_Contact_23(Maitre);
	Maitre.RefreshTotal();
 }
}

function Update_Personnes_Contact_23()
{
 if (TAB_GLOBAL_COMPO[46].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement à mettre à jour");
 	return -1;
 }
 TAB_COMPO_PPTES[46].Action_en_cours = UPDATE;
/* On calcule la nouvelle clé */
 TAB_COMPO_PPTES[46].NewCle = TAB_GLOBAL_COMPO[46].getCleVal();
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[46].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[50];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[51];
 Esclave_1.ActiverComposant(true);
top.document.getElementById("Validate_Personnes_Contact_23").disabled=false;
top.document.getElementById("Annuler_Personnes_Contact_23").disabled=false;
top.document.getElementById("Insert_Personnes_Contact_23").disabled=true;
top.document.getElementById("Delete_Personnes_Contact_23").disabled=true;
top.document.getElementById("Update_Personnes_Contact_23").disabled=true;
return TAB_COMPO_PPTES[46].NewCle;
}

function Validate_Personnes_Contact_23(retour)
{
 /* Retour à l'onget appellant si appelle par gérer */
if (retour==null)
	retour=true;

 /* On recupère le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[46];
 /* On recupère la clé du nouvel enregistrement */
 var NewCle=null;
 switch(TAB_COMPO_PPTES[46].Action_en_cours){
	case INSERT :
	if ((NewCle = User_Insert_Personnes_Contact_23(Maitre))==-1)
		return -1;
	break;
	case UPDATE :
	if ((User_Update_Personnes_Contact_23(Maitre))==-1)
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
 TAB_GLOBAL_COMPO[46].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[50];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[51];
 Esclave_1.ActiverComposant(false);
top.document.getElementById("Validate_Personnes_Contact_23").disabled=true;
top.document.getElementById("Annuler_Personnes_Contact_23").disabled=true;
top.document.getElementById("Insert_Personnes_Contact_23").disabled=false;
top.document.getElementById("Delete_Personnes_Contact_23").disabled=false;
top.document.getElementById("Update_Personnes_Contact_23").disabled=false;
 if (NewCle==null)
 	NewCle=TAB_COMPO_PPTES[46].NewCle;
 Maitre.ForceNextSelection(NewCle)
 Maitre.RefreshTotal();
 if(retour)
 {
 }
 TAB_COMPO_PPTES[46].Action_en_cours = null;
 return NewCle;
}

function Annuler_Personnes_Contact_23()
{
 TAB_COMPO_PPTES[46].Action_en_cours = null;
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[46].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[50];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[51];
 Esclave_1.ActiverComposant(false);
top.document.getElementById("Validate_Personnes_Contact_23").disabled=true;
top.document.getElementById("Annuler_Personnes_Contact_23").disabled=true;
top.document.getElementById("Insert_Personnes_Contact_23").disabled=false;
top.document.getElementById("Delete_Personnes_Contact_23").disabled=false;
top.document.getElementById("Update_Personnes_Contact_23").disabled=false;
}

function Insert_Personnes_Tâches_26()
{
 if (TAB_COMPO_PPTES[3].Action_en_cours == INSERT)
 	{
 		if (confirm("Pour continuer, vous devez enregistrer votre saisie\n Voulez vous poursuivre ?"))
		{
			var CleValide=Validate_Personnes_Liste_des_personnes0(false);
			if (CleValide==-1)
			{
				return -1;
			}
			CleValide=Update_Personnes_Liste_des_personnes0();
			if (CleValide==-1)
			{
				alert("Erreur l'enregistrement n'a pas étais correctement inséré");
				return -1;
			}
			Insert_Personnes_Tâches_26();
		}
 		return;
 	}
 TAB_COMPO_PPTES[52].Action_en_cours = INSERT;
/* On calcule la nouvelle clé */
 TAB_COMPO_PPTES[52].NewCle = getNewCle("appel");
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[52].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[58];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[59];
 Esclave_1.ActiverComposant(true);
 var Esclave_2=TAB_GLOBAL_COMPO[60];
 Esclave_2.ActiverComposant(true);
 var Esclave_3=TAB_GLOBAL_COMPO[61];
 Esclave_3.ActiverComposant(true);
 var Esclave_4=TAB_GLOBAL_COMPO[62];
 Esclave_4.ActiverComposant(true);
top.document.getElementById("Validate_Personnes_Tâches_26").disabled=false;
top.document.getElementById("Annuler_Personnes_Tâches_26").disabled=false;
top.document.getElementById("Insert_Personnes_Tâches_26").disabled=true;
top.document.getElementById("Delete_Personnes_Tâches_26").disabled=true;
top.document.getElementById("Update_Personnes_Tâches_26").disabled=true;
 var Maitre=TAB_GLOBAL_COMPO[52];
 /* Pour une insertion on désectionne */
 var tree=Maitre.getComposantXul();
 if (tree.view!=null)
 {
 	tree.currentIndex=-1;
 	tree.view.selection.clearSelection();
 }
var ladate=new Date();
var today=ladate.getDate()+"/"+(ladate.getMonth()+1)+"/"+ladate.getFullYear();
TAB_GLOBAL_COMPO[58].my_CompoXUL.value=today;

return TAB_COMPO_PPTES[52].NewCle;
}

function Delete_Personnes_Tâches_26()
{
 if (TAB_GLOBAL_COMPO[52].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement à suprimer");
 	return;
 }
 /* On recupère le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[52];
 if (confirm("Voulez vous vraiment supprimer l'enregistrement en cours ?"))
 {
	TAB_COMPO_PPTES[52].Action_en_cours = DELETE;
 	User_Delete_Personnes_Tâches_26(Maitre);
	Maitre.RefreshTotal();
 }
}

function Update_Personnes_Tâches_26()
{
 if (TAB_GLOBAL_COMPO[52].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement à mettre à jour");
 	return -1;
 }
 TAB_COMPO_PPTES[52].Action_en_cours = UPDATE;
/* On calcule la nouvelle clé */
 TAB_COMPO_PPTES[52].NewCle = TAB_GLOBAL_COMPO[52].getCleVal();
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[52].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[58];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[59];
 Esclave_1.ActiverComposant(true);
 var Esclave_2=TAB_GLOBAL_COMPO[60];
 Esclave_2.ActiverComposant(true);
 var Esclave_3=TAB_GLOBAL_COMPO[61];
 Esclave_3.ActiverComposant(true);
 var Esclave_4=TAB_GLOBAL_COMPO[62];
 Esclave_4.ActiverComposant(true);
top.document.getElementById("Validate_Personnes_Tâches_26").disabled=false;
top.document.getElementById("Annuler_Personnes_Tâches_26").disabled=false;
top.document.getElementById("Insert_Personnes_Tâches_26").disabled=true;
top.document.getElementById("Delete_Personnes_Tâches_26").disabled=true;
top.document.getElementById("Update_Personnes_Tâches_26").disabled=true;
return TAB_COMPO_PPTES[52].NewCle;
}

function Validate_Personnes_Tâches_26(retour)
{
 /* Retour à l'onget appellant si appelle par gérer */
if (retour==null)
	retour=true;

 /* On recupère le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[52];
 /* On recupère la clé du nouvel enregistrement */
 var NewCle=null;
 switch(TAB_COMPO_PPTES[52].Action_en_cours){
	case INSERT :
	if ((NewCle = User_Insert_Personnes_Tâches_26(Maitre))==-1)
		return -1;
	break;
	case UPDATE :
	if ((User_Update_Personnes_Tâches_26(Maitre))==-1)
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
 TAB_GLOBAL_COMPO[52].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[58];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[59];
 Esclave_1.ActiverComposant(false);
 var Esclave_2=TAB_GLOBAL_COMPO[60];
 Esclave_2.ActiverComposant(false);
 var Esclave_3=TAB_GLOBAL_COMPO[61];
 Esclave_3.ActiverComposant(false);
 var Esclave_4=TAB_GLOBAL_COMPO[62];
 Esclave_4.ActiverComposant(false);
top.document.getElementById("Validate_Personnes_Tâches_26").disabled=true;
top.document.getElementById("Annuler_Personnes_Tâches_26").disabled=true;
top.document.getElementById("Insert_Personnes_Tâches_26").disabled=false;
top.document.getElementById("Delete_Personnes_Tâches_26").disabled=false;
top.document.getElementById("Update_Personnes_Tâches_26").disabled=false;
 if (NewCle==null)
 	NewCle=TAB_COMPO_PPTES[52].NewCle;
 Maitre.ForceNextSelection(NewCle)
 Maitre.RefreshTotal();
 if(retour)
 {
 }
 TAB_COMPO_PPTES[52].Action_en_cours = null;
 return NewCle;
}

function Annuler_Personnes_Tâches_26()
{
 TAB_COMPO_PPTES[52].Action_en_cours = null;
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[52].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[58];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[59];
 Esclave_1.ActiverComposant(false);
 var Esclave_2=TAB_GLOBAL_COMPO[60];
 Esclave_2.ActiverComposant(false);
 var Esclave_3=TAB_GLOBAL_COMPO[61];
 Esclave_3.ActiverComposant(false);
 var Esclave_4=TAB_GLOBAL_COMPO[62];
 Esclave_4.ActiverComposant(false);
top.document.getElementById("Validate_Personnes_Tâches_26").disabled=true;
top.document.getElementById("Annuler_Personnes_Tâches_26").disabled=true;
top.document.getElementById("Insert_Personnes_Tâches_26").disabled=false;
top.document.getElementById("Delete_Personnes_Tâches_26").disabled=false;
top.document.getElementById("Update_Personnes_Tâches_26").disabled=false;
}

function Insert_Personnes_Responsabilités_32()
{
 if (TAB_COMPO_PPTES[3].Action_en_cours == INSERT)
 	{
 		if (confirm("Pour continuer, vous devez enregistrer votre saisie\n Voulez vous poursuivre ?"))
		{
			var CleValide=Validate_Personnes_Liste_des_personnes0(false);
			if (CleValide==-1)
			{
				return -1;
			}
			CleValide=Update_Personnes_Liste_des_personnes0();
			if (CleValide==-1)
			{
				alert("Erreur l'enregistrement n'a pas étais correctement inséré");
				return -1;
			}
			Insert_Personnes_Responsabilités_32();
		}
 		return;
 	}
 TAB_COMPO_PPTES[63].Action_en_cours = INSERT;
/* On calcule la nouvelle clé */
 TAB_COMPO_PPTES[63].NewCle = getNewCle("estresponsable");
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[63].ActiverComposant(false,true);
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
top.document.getElementById("Validate_Personnes_Responsabilités_32").disabled=false;
top.document.getElementById("Annuler_Personnes_Responsabilités_32").disabled=false;
top.document.getElementById("Insert_Personnes_Responsabilités_32").disabled=true;
top.document.getElementById("Delete_Personnes_Responsabilités_32").disabled=true;
top.document.getElementById("Update_Personnes_Responsabilités_32").disabled=true;
 var Maitre=TAB_GLOBAL_COMPO[63];
 /* Pour une insertion on désectionne */
 var tree=Maitre.getComposantXul();
 if (tree.view!=null)
 {
 	tree.currentIndex=-1;
 	tree.view.selection.clearSelection();
 }
return TAB_COMPO_PPTES[63].NewCle;
}

function Delete_Personnes_Responsabilités_32()
{
 if (TAB_GLOBAL_COMPO[63].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement à suprimer");
 	return;
 }
 /* On recupère le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[63];
 if (confirm("Voulez vous vraiment supprimer l'enregistrement en cours ?"))
 {
	TAB_COMPO_PPTES[63].Action_en_cours = DELETE;
 	User_Delete_Personnes_Responsabilités_32(Maitre);
	Maitre.RefreshTotal();
 }
}

function Update_Personnes_Responsabilités_32()
{
 if (TAB_GLOBAL_COMPO[63].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement à mettre à jour");
 	return -1;
 }
 TAB_COMPO_PPTES[63].Action_en_cours = UPDATE;
/* On calcule la nouvelle clé */
 TAB_COMPO_PPTES[63].NewCle = TAB_GLOBAL_COMPO[63].getCleVal();
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[63].ActiverComposant(false,true);
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
top.document.getElementById("Validate_Personnes_Responsabilités_32").disabled=false;
top.document.getElementById("Annuler_Personnes_Responsabilités_32").disabled=false;
top.document.getElementById("Insert_Personnes_Responsabilités_32").disabled=true;
top.document.getElementById("Delete_Personnes_Responsabilités_32").disabled=true;
top.document.getElementById("Update_Personnes_Responsabilités_32").disabled=true;
return TAB_COMPO_PPTES[63].NewCle;
}

function Validate_Personnes_Responsabilités_32(retour)
{
 /* Retour à l'onget appellant si appelle par gérer */
if (retour==null)
	retour=true;

 /* On recupère le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[63];
 /* On recupère la clé du nouvel enregistrement */
 var NewCle=null;
 switch(TAB_COMPO_PPTES[63].Action_en_cours){
	case INSERT :
	if ((NewCle = User_Insert_Personnes_Responsabilités_32(Maitre))==-1)
		return -1;
	break;
	case UPDATE :
	if ((User_Update_Personnes_Responsabilités_32(Maitre))==-1)
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
 TAB_GLOBAL_COMPO[63].ActiverComposant(true,true);
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
top.document.getElementById("Validate_Personnes_Responsabilités_32").disabled=true;
top.document.getElementById("Annuler_Personnes_Responsabilités_32").disabled=true;
top.document.getElementById("Insert_Personnes_Responsabilités_32").disabled=false;
top.document.getElementById("Delete_Personnes_Responsabilités_32").disabled=false;
top.document.getElementById("Update_Personnes_Responsabilités_32").disabled=false;
 if (NewCle==null)
 	NewCle=TAB_COMPO_PPTES[63].NewCle;
 Maitre.ForceNextSelection(NewCle)
 Maitre.RefreshTotal();
 if(retour)
 {
 }
 TAB_COMPO_PPTES[63].Action_en_cours = null;
 return NewCle;
}

function Annuler_Personnes_Responsabilités_32()
{
 TAB_COMPO_PPTES[63].Action_en_cours = null;
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[63].ActiverComposant(true,true);
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
top.document.getElementById("Validate_Personnes_Responsabilités_32").disabled=true;
top.document.getElementById("Annuler_Personnes_Responsabilités_32").disabled=true;
top.document.getElementById("Insert_Personnes_Responsabilités_32").disabled=false;
top.document.getElementById("Delete_Personnes_Responsabilités_32").disabled=false;
top.document.getElementById("Update_Personnes_Responsabilités_32").disabled=false;
}

function Insert_Personnes_Attributs_38()
{
 if (TAB_COMPO_PPTES[3].Action_en_cours == INSERT)
 	{
 		if (confirm("Pour continuer, vous devez enregistrer votre saisie\n Voulez vous poursuivre ?"))
		{
			var CleValide=Validate_Personnes_Liste_des_personnes0(false);
			if (CleValide==-1)
			{
				return -1;
			}
			CleValide=Update_Personnes_Liste_des_personnes0();
			if (CleValide==-1)
			{
				alert("Erreur l'enregistrement n'a pas étais correctement inséré");
				return -1;
			}
			Insert_Personnes_Attributs_38();
		}
 		return;
 	}
 TAB_COMPO_PPTES[75].Action_en_cours = INSERT;
/* On calcule la nouvelle clé */
 TAB_COMPO_PPTES[75].NewCle = getNewCle("attribut");
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[75].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[78];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[79];
 Esclave_1.ActiverComposant(true);
 var Esclave_2=TAB_GLOBAL_COMPO[80];
 Esclave_2.ActiverComposant(true);
top.document.getElementById("Validate_Personnes_Attributs_38").disabled=false;
top.document.getElementById("Annuler_Personnes_Attributs_38").disabled=false;
top.document.getElementById("Insert_Personnes_Attributs_38").disabled=true;
top.document.getElementById("Delete_Personnes_Attributs_38").disabled=true;
top.document.getElementById("Update_Personnes_Attributs_38").disabled=true;
 var Maitre=TAB_GLOBAL_COMPO[75];
 /* Pour une insertion on désectionne */
 var tree=Maitre.getComposantXul();
 if (tree.view!=null)
 {
 	tree.currentIndex=-1;
 	tree.view.selection.clearSelection();
 }
return TAB_COMPO_PPTES[75].NewCle;
}

function Delete_Personnes_Attributs_38()
{
 if (TAB_GLOBAL_COMPO[75].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement à suprimer");
 	return;
 }
 /* On recupère le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[75];
 if (confirm("Voulez vous vraiment supprimer l'enregistrement en cours ?"))
 {
	TAB_COMPO_PPTES[75].Action_en_cours = DELETE;
 	User_Delete_Personnes_Attributs_38(Maitre);
	Maitre.RefreshTotal();
 }
}

function Update_Personnes_Attributs_38()
{
 if (TAB_GLOBAL_COMPO[75].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement à mettre à jour");
 	return -1;
 }
 TAB_COMPO_PPTES[75].Action_en_cours = UPDATE;
/* On calcule la nouvelle clé */
 TAB_COMPO_PPTES[75].NewCle = TAB_GLOBAL_COMPO[75].getCleVal();
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[75].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[78];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[79];
 Esclave_1.ActiverComposant(true);
 var Esclave_2=TAB_GLOBAL_COMPO[80];
 Esclave_2.ActiverComposant(true);
top.document.getElementById("Validate_Personnes_Attributs_38").disabled=false;
top.document.getElementById("Annuler_Personnes_Attributs_38").disabled=false;
top.document.getElementById("Insert_Personnes_Attributs_38").disabled=true;
top.document.getElementById("Delete_Personnes_Attributs_38").disabled=true;
top.document.getElementById("Update_Personnes_Attributs_38").disabled=true;
return TAB_COMPO_PPTES[75].NewCle;
}

function Validate_Personnes_Attributs_38(retour)
{
 /* Retour à l'onget appellant si appelle par gérer */
if (retour==null)
	retour=true;

 /* On recupère le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[75];
 /* On recupère la clé du nouvel enregistrement */
 var NewCle=null;
 switch(TAB_COMPO_PPTES[75].Action_en_cours){
	case INSERT :
	if ((NewCle = User_Insert_Personnes_Attributs_38(Maitre))==-1)
		return -1;
	break;
	case UPDATE :
	if ((User_Update_Personnes_Attributs_38(Maitre))==-1)
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
 TAB_GLOBAL_COMPO[75].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[78];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[79];
 Esclave_1.ActiverComposant(false);
 var Esclave_2=TAB_GLOBAL_COMPO[80];
 Esclave_2.ActiverComposant(false);
top.document.getElementById("Validate_Personnes_Attributs_38").disabled=true;
top.document.getElementById("Annuler_Personnes_Attributs_38").disabled=true;
top.document.getElementById("Insert_Personnes_Attributs_38").disabled=false;
top.document.getElementById("Delete_Personnes_Attributs_38").disabled=false;
top.document.getElementById("Update_Personnes_Attributs_38").disabled=false;
 if (NewCle==null)
 	NewCle=TAB_COMPO_PPTES[75].NewCle;
 Maitre.ForceNextSelection(NewCle)
 Maitre.RefreshTotal();
 if(retour)
 {
 }
 TAB_COMPO_PPTES[75].Action_en_cours = null;
 return NewCle;
}

function Annuler_Personnes_Attributs_38()
{
 TAB_COMPO_PPTES[75].Action_en_cours = null;
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[75].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[78];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[79];
 Esclave_1.ActiverComposant(false);
 var Esclave_2=TAB_GLOBAL_COMPO[80];
 Esclave_2.ActiverComposant(false);
top.document.getElementById("Validate_Personnes_Attributs_38").disabled=true;
top.document.getElementById("Annuler_Personnes_Attributs_38").disabled=true;
top.document.getElementById("Insert_Personnes_Attributs_38").disabled=false;
top.document.getElementById("Delete_Personnes_Attributs_38").disabled=false;
top.document.getElementById("Update_Personnes_Attributs_38").disabled=false;
}

function Insert_Personnes_Routages_45()
{
 if (TAB_COMPO_PPTES[3].Action_en_cours == INSERT)
 	{
 		if (confirm("Pour continuer, vous devez enregistrer votre saisie\n Voulez vous poursuivre ?"))
		{
			var CleValide=Validate_Personnes_Liste_des_personnes0(false);
			if (CleValide==-1)
			{
				return -1;
			}
			CleValide=Update_Personnes_Liste_des_personnes0();
			if (CleValide==-1)
			{
				alert("Erreur l'enregistrement n'a pas étais correctement inséré");
				return -1;
			}
			Insert_Personnes_Routages_45();
		}
 		return;
 	}
 TAB_COMPO_PPTES[100].Action_en_cours = INSERT;
/* On calcule la nouvelle clé */
 TAB_COMPO_PPTES[100].NewCle = getNewCle("routage");
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[100].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[106];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[107];
 Esclave_1.ActiverComposant(true);
 var Esclave_2=TAB_GLOBAL_COMPO[108];
 Esclave_2.ActiverComposant(true);
 var Esclave_3=TAB_GLOBAL_COMPO[109];
 Esclave_3.ActiverComposant(true);
 var Esclave_4=TAB_GLOBAL_COMPO[110];
 Esclave_4.ActiverComposant(true);
top.document.getElementById("Validate_Personnes_Routages_45").disabled=false;
top.document.getElementById("Annuler_Personnes_Routages_45").disabled=false;
top.document.getElementById("Insert_Personnes_Routages_45").disabled=true;
top.document.getElementById("Delete_Personnes_Routages_45").disabled=true;
top.document.getElementById("Update_Personnes_Routages_45").disabled=true;
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

function Delete_Personnes_Routages_45()
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
 	User_Delete_Personnes_Routages_45(Maitre);
	Maitre.RefreshTotal();
 }
}

function Update_Personnes_Routages_45()
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
 var Esclave_0=TAB_GLOBAL_COMPO[106];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[107];
 Esclave_1.ActiverComposant(true);
 var Esclave_2=TAB_GLOBAL_COMPO[108];
 Esclave_2.ActiverComposant(true);
 var Esclave_3=TAB_GLOBAL_COMPO[109];
 Esclave_3.ActiverComposant(true);
 var Esclave_4=TAB_GLOBAL_COMPO[110];
 Esclave_4.ActiverComposant(true);
top.document.getElementById("Validate_Personnes_Routages_45").disabled=false;
top.document.getElementById("Annuler_Personnes_Routages_45").disabled=false;
top.document.getElementById("Insert_Personnes_Routages_45").disabled=true;
top.document.getElementById("Delete_Personnes_Routages_45").disabled=true;
top.document.getElementById("Update_Personnes_Routages_45").disabled=true;
return TAB_COMPO_PPTES[100].NewCle;
}

function Validate_Personnes_Routages_45(retour)
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
	if ((NewCle = User_Insert_Personnes_Routages_45(Maitre))==-1)
		return -1;
	break;
	case UPDATE :
	if ((User_Update_Personnes_Routages_45(Maitre))==-1)
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
 var Esclave_0=TAB_GLOBAL_COMPO[106];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[107];
 Esclave_1.ActiverComposant(false);
 var Esclave_2=TAB_GLOBAL_COMPO[108];
 Esclave_2.ActiverComposant(false);
 var Esclave_3=TAB_GLOBAL_COMPO[109];
 Esclave_3.ActiverComposant(false);
 var Esclave_4=TAB_GLOBAL_COMPO[110];
 Esclave_4.ActiverComposant(false);
top.document.getElementById("Validate_Personnes_Routages_45").disabled=true;
top.document.getElementById("Annuler_Personnes_Routages_45").disabled=true;
top.document.getElementById("Insert_Personnes_Routages_45").disabled=false;
top.document.getElementById("Delete_Personnes_Routages_45").disabled=false;
top.document.getElementById("Update_Personnes_Routages_45").disabled=false;
 if (NewCle==null)
 	NewCle=TAB_COMPO_PPTES[100].NewCle;
 Maitre.ForceNextSelection(NewCle)
 Maitre.RefreshTotal();
 if(retour)
 {
 }
 TAB_COMPO_PPTES[100].Action_en_cours = null;
 return NewCle;
}

function Annuler_Personnes_Routages_45()
{
 TAB_COMPO_PPTES[100].Action_en_cours = null;
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[100].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[106];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[107];
 Esclave_1.ActiverComposant(false);
 var Esclave_2=TAB_GLOBAL_COMPO[108];
 Esclave_2.ActiverComposant(false);
 var Esclave_3=TAB_GLOBAL_COMPO[109];
 Esclave_3.ActiverComposant(false);
 var Esclave_4=TAB_GLOBAL_COMPO[110];
 Esclave_4.ActiverComposant(false);
top.document.getElementById("Validate_Personnes_Routages_45").disabled=true;
top.document.getElementById("Annuler_Personnes_Routages_45").disabled=true;
top.document.getElementById("Insert_Personnes_Routages_45").disabled=false;
top.document.getElementById("Delete_Personnes_Routages_45").disabled=false;
top.document.getElementById("Update_Personnes_Routages_45").disabled=false;
}






/* *********************************************** 
         FONCTIONS POUR L'ONGLET Contacts
   ***********************************************/ 

 /* FILTRES DE RELATION ENTRE ONGLETS => VARIABLES GLOBALES POUR ETRE ACCESSIBLES DEPUIS INTERFACE_USER.JS */

 var Filtre_Dep_Contacts_0;
function Retour_Contacts()
{
 if (Filtre_Dep_Contacts_0.my_Filtre.getEtat())
 {
 	Filtre_Dep_Contacts_0.FctFermetureOnglet();
 }
}
function Gerer_Contacts(IdFiltreOnglet)
{
/* On désactive les autres filtres */
if (Filtre_Dep_Contacts_0.getId()!=IdFiltreOnglet)
{
	Filtre_Dep_Contacts_0.OnClose(true,false);
}
/* On change d'onglet */
 var tabs = top.document.getElementById("Tous_les_onglets");
 top.document.getElementById("Tous_les_onglets").setAttribute("hidden","false");
 tabs.selectedItem = top.document.getElementById("Onglet_Contacts");
}

function OuvrirOnglet_Contacts()
{
 var tabs = top.document.getElementById("Tous_les_onglets");
 tabs.selectedItem = top.document.getElementById("Onglet_Contacts");
}

function Insert_Contacts_Liste_des_contacts0()
{
 TAB_COMPO_PPTES[111].Action_en_cours = INSERT;
/* On calcule la nouvelle clé */
 TAB_COMPO_PPTES[111].NewCle = getNewCle("contact");
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[111].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[114];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[115];
 Esclave_1.ActiverComposant(true);
top.document.getElementById("Validate_Contacts_Liste_des_contacts0").disabled=false;
top.document.getElementById("Annuler_Contacts_Liste_des_contacts0").disabled=false;
top.document.getElementById("Insert_Contacts_Liste_des_contacts0").disabled=true;
top.document.getElementById("Delete_Contacts_Liste_des_contacts0").disabled=true;
top.document.getElementById("Update_Contacts_Liste_des_contacts0").disabled=true;
 var Maitre=TAB_GLOBAL_COMPO[111];
 /* Pour une insertion on désectionne */
 var tree=Maitre.getComposantXul();
 if (tree.view!=null)
 {
 	tree.currentIndex=-1;
 	tree.view.selection.clearSelection();
 }
TAB_GLOBAL_COMPO[114].my_CompoXUL.value="TELEPHONE";

return TAB_COMPO_PPTES[111].NewCle;
}

function Delete_Contacts_Liste_des_contacts0()
{
 if (TAB_GLOBAL_COMPO[111].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement à suprimer");
 	return;
 }
 /* On recupère le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[111];
 if (confirm("Voulez vous vraiment supprimer l'enregistrement en cours ?"))
 {
	TAB_COMPO_PPTES[111].Action_en_cours = DELETE;
 	User_Delete_Contacts_Liste_des_contacts0(Maitre);
	Maitre.RefreshTotal();
	Filtre_Dep_Contacts_0.OnClose(true);
 }
}

function Update_Contacts_Liste_des_contacts0()
{
 if (TAB_GLOBAL_COMPO[111].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement à mettre à jour");
 	return -1;
 }
 TAB_COMPO_PPTES[111].Action_en_cours = UPDATE;
/* On calcule la nouvelle clé */
 TAB_COMPO_PPTES[111].NewCle = TAB_GLOBAL_COMPO[111].getCleVal();
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[111].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[114];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[115];
 Esclave_1.ActiverComposant(true);
top.document.getElementById("Validate_Contacts_Liste_des_contacts0").disabled=false;
top.document.getElementById("Annuler_Contacts_Liste_des_contacts0").disabled=false;
top.document.getElementById("Insert_Contacts_Liste_des_contacts0").disabled=true;
top.document.getElementById("Delete_Contacts_Liste_des_contacts0").disabled=true;
top.document.getElementById("Update_Contacts_Liste_des_contacts0").disabled=true;
return TAB_COMPO_PPTES[111].NewCle;
}

function Validate_Contacts_Liste_des_contacts0(retour)
{
 /* Retour à l'onget appellant si appelle par gérer */
if (retour==null)
	retour=true;

 /* On recupère le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[111];
 /* On recupère la clé du nouvel enregistrement */
 var NewCle=null;
 switch(TAB_COMPO_PPTES[111].Action_en_cours){
	case INSERT :
	if ((NewCle = User_Insert_Contacts_Liste_des_contacts0(Maitre))==-1)
		return -1;
	break;
	case UPDATE :
	if ((User_Update_Contacts_Liste_des_contacts0(Maitre))==-1)
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
 TAB_GLOBAL_COMPO[111].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[114];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[115];
 Esclave_1.ActiverComposant(false);
top.document.getElementById("Validate_Contacts_Liste_des_contacts0").disabled=true;
top.document.getElementById("Annuler_Contacts_Liste_des_contacts0").disabled=true;
top.document.getElementById("Insert_Contacts_Liste_des_contacts0").disabled=false;
top.document.getElementById("Delete_Contacts_Liste_des_contacts0").disabled=false;
top.document.getElementById("Update_Contacts_Liste_des_contacts0").disabled=false;
 if (NewCle==null)
 	NewCle=TAB_COMPO_PPTES[111].NewCle;
 Maitre.ForceNextSelection(NewCle)
 Maitre.RefreshTotal();
 if(retour)
 {
 Filtre_Dep_Contacts_0.OnClose(false);
 }
 TAB_COMPO_PPTES[111].Action_en_cours = null;
 return NewCle;
}

function Annuler_Contacts_Liste_des_contacts0()
{
 TAB_COMPO_PPTES[111].Action_en_cours = null;
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[111].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[114];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[115];
 Esclave_1.ActiverComposant(false);
top.document.getElementById("Validate_Contacts_Liste_des_contacts0").disabled=true;
top.document.getElementById("Annuler_Contacts_Liste_des_contacts0").disabled=true;
top.document.getElementById("Insert_Contacts_Liste_des_contacts0").disabled=false;
top.document.getElementById("Delete_Contacts_Liste_des_contacts0").disabled=false;
top.document.getElementById("Update_Contacts_Liste_des_contacts0").disabled=false;
}






/* *********************************************** 
         FONCTIONS POUR L'ONGLET Devis
   ***********************************************/ 

 /* FILTRES DE RELATION ENTRE ONGLETS => VARIABLES GLOBALES POUR ETRE ACCESSIBLES DEPUIS INTERFACE_USER.JS */

 var Filtre_DepFor_Devis_0;
function Retour_Devis()
{
 if (Filtre_DepFor_Devis_0.my_Filtre.getEtat())
 {
 	Filtre_DepFor_Devis_0.FctFermetureOnglet();
 }
}
function Gerer_Devis(IdFiltreOnglet)
{
/* Pour les filtrage fort on ne doit pas être en mode insertion */
if(TAB_COMPO_PPTES[3].Action_en_cours == INSERT)
{
	if (confirm("Pour continuer, vous devez enregistrer votre saisie\n Voulez vous poursuivre ?"))
	{
		var CleValide=Validate_Personnes_Liste_des_personnes0(false);
		if (CleValide==-1)
		{
			return;
		}
		CleValide=Update_Personnes_Liste_des_personnes0();
		if (CleValide==-1)
		{
			alert("Erreur l'enregistrement n'a pas étais correctement inséré");
			return;
		}
	}
	else
 		return;
}
/* On désactive les autres filtres */
if (Filtre_DepFor_Devis_0.getId()!=IdFiltreOnglet)
{
	Filtre_DepFor_Devis_0.OnClose(true,false);
}
/* On change d'onglet */
 var tabs = top.document.getElementById("Tous_les_onglets");
 top.document.getElementById("Tous_les_onglets").setAttribute("hidden","false");
 tabs.selectedItem = top.document.getElementById("Onglet_Devis");
}

function OuvrirOnglet_Devis()
{
 var tabs = top.document.getElementById("Tous_les_onglets");
 tabs.selectedItem = top.document.getElementById("Onglet_Devis");
}

function Insert_Devis_Liste_des_devis0()
{
 TAB_COMPO_PPTES[116].Action_en_cours = INSERT;
/* On calcule la nouvelle clé */
 TAB_COMPO_PPTES[116].NewCle = getNewCle("devis");
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[116].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[120];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[121];
 Esclave_1.ActiverComposant(true);
 var Esclave_2=TAB_GLOBAL_COMPO[122];
 Esclave_2.ActiverComposant(true);
 var Esclave_3=TAB_GLOBAL_COMPO[123];
 Esclave_3.ActiverComposant(true);
 var Esclave_4=TAB_GLOBAL_COMPO[124];
 Esclave_4.ActiverComposant(true);
 var Esclave_5=TAB_GLOBAL_COMPO[125];
 Esclave_5.ActiverComposant(true);
 var Esclave_6=TAB_GLOBAL_COMPO[126];
 Esclave_6.ActiverComposant(true);
top.document.getElementById("Validate_Devis_Lignes_du_devis_8").disabled=true;
top.document.getElementById("Annuler_Devis_Lignes_du_devis_8").disabled=true;
top.document.getElementById("Insert_Devis_Lignes_du_devis_8").disabled=false;
top.document.getElementById("Delete_Devis_Lignes_du_devis_8").disabled=false;
top.document.getElementById("Update_Devis_Lignes_du_devis_8").disabled=false;
 var Esclave_7=TAB_GLOBAL_COMPO[127];
 Esclave_7.ActiverComposant(true);
top.document.getElementById("Validate_Devis_Liste_des_devis0").disabled=false;
top.document.getElementById("Annuler_Devis_Liste_des_devis0").disabled=false;
top.document.getElementById("Insert_Devis_Liste_des_devis0").disabled=true;
top.document.getElementById("Delete_Devis_Liste_des_devis0").disabled=true;
top.document.getElementById("Update_Devis_Liste_des_devis0").disabled=true;
 var Maitre=TAB_GLOBAL_COMPO[116];
 /* Pour une insertion on désectionne */
 var tree=Maitre.getComposantXul();
 if (tree.view!=null)
 {
 	tree.currentIndex=-1;
 	tree.view.selection.clearSelection();
 }
var ladate=new Date();
var today=ladate.getDate()+"/"+(ladate.getMonth()+1)+"/"+ladate.getFullYear();
TAB_GLOBAL_COMPO[120].my_CompoXUL.value=today;
TAB_GLOBAL_COMPO[125].my_CompoXUL.value="Chère Madame, Cher Monsieur";
TAB_GLOBAL_COMPO[126].my_CompoXUL.value="Suite à notre conversation, je vous communique les éléments du devis concernant mon intervention sur le dossier de ";

return TAB_COMPO_PPTES[116].NewCle;
}

function Delete_Devis_Liste_des_devis0()
{
 if (TAB_GLOBAL_COMPO[116].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement à suprimer");
 	return;
 }
 /* On recupère le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[116];
 if (confirm("Voulez vous vraiment supprimer l'enregistrement en cours ?"))
 {
	TAB_COMPO_PPTES[116].Action_en_cours = DELETE;
 	User_Delete_Devis_Liste_des_devis0(Maitre);
	Maitre.RefreshTotal();
	Filtre_DepFor_Devis_0.Refresh();
 }
}

function Update_Devis_Liste_des_devis0()
{
 if (TAB_GLOBAL_COMPO[116].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement à mettre à jour");
 	return -1;
 }
 TAB_COMPO_PPTES[116].Action_en_cours = UPDATE;
/* On calcule la nouvelle clé */
 TAB_COMPO_PPTES[116].NewCle = TAB_GLOBAL_COMPO[116].getCleVal();
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[116].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[120];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[121];
 Esclave_1.ActiverComposant(true);
 var Esclave_2=TAB_GLOBAL_COMPO[122];
 Esclave_2.ActiverComposant(true);
 var Esclave_3=TAB_GLOBAL_COMPO[123];
 Esclave_3.ActiverComposant(true);
 var Esclave_4=TAB_GLOBAL_COMPO[124];
 Esclave_4.ActiverComposant(true);
 var Esclave_5=TAB_GLOBAL_COMPO[125];
 Esclave_5.ActiverComposant(true);
 var Esclave_6=TAB_GLOBAL_COMPO[126];
 Esclave_6.ActiverComposant(true);
top.document.getElementById("Validate_Devis_Lignes_du_devis_8").disabled=true;
top.document.getElementById("Annuler_Devis_Lignes_du_devis_8").disabled=true;
top.document.getElementById("Insert_Devis_Lignes_du_devis_8").disabled=false;
top.document.getElementById("Delete_Devis_Lignes_du_devis_8").disabled=false;
top.document.getElementById("Update_Devis_Lignes_du_devis_8").disabled=false;
 var Esclave_7=TAB_GLOBAL_COMPO[127];
 Esclave_7.ActiverComposant(true);
top.document.getElementById("Validate_Devis_Liste_des_devis0").disabled=false;
top.document.getElementById("Annuler_Devis_Liste_des_devis0").disabled=false;
top.document.getElementById("Insert_Devis_Liste_des_devis0").disabled=true;
top.document.getElementById("Delete_Devis_Liste_des_devis0").disabled=true;
top.document.getElementById("Update_Devis_Liste_des_devis0").disabled=true;
return TAB_COMPO_PPTES[116].NewCle;
}

function Validate_Devis_Liste_des_devis0(retour)
{
 /* Retour à l'onget appellant si appelle par gérer */
if (retour==null)
	retour=true;

 /* On recupère le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[116];
 /* On recupère la clé du nouvel enregistrement */
 var NewCle=null;
 switch(TAB_COMPO_PPTES[116].Action_en_cours){
	case INSERT :
	if ((NewCle = User_Insert_Devis_Liste_des_devis0(Maitre))==-1)
		return -1;
	break;
	case UPDATE :
	if ((User_Update_Devis_Liste_des_devis0(Maitre))==-1)
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
 TAB_GLOBAL_COMPO[116].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[120];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[121];
 Esclave_1.ActiverComposant(false);
 var Esclave_2=TAB_GLOBAL_COMPO[122];
 Esclave_2.ActiverComposant(false);
 var Esclave_3=TAB_GLOBAL_COMPO[123];
 Esclave_3.ActiverComposant(false);
 var Esclave_4=TAB_GLOBAL_COMPO[124];
 Esclave_4.ActiverComposant(false);
 var Esclave_5=TAB_GLOBAL_COMPO[125];
 Esclave_5.ActiverComposant(false);
 var Esclave_6=TAB_GLOBAL_COMPO[126];
 Esclave_6.ActiverComposant(false);
Annuler_Devis_Lignes_du_devis_8();
top.document.getElementById("Validate_Devis_Lignes_du_devis_8").disabled=true;
top.document.getElementById("Annuler_Devis_Lignes_du_devis_8").disabled=true;
top.document.getElementById("Insert_Devis_Lignes_du_devis_8").disabled=true;
top.document.getElementById("Delete_Devis_Lignes_du_devis_8").disabled=true;
top.document.getElementById("Update_Devis_Lignes_du_devis_8").disabled=true;
 var Esclave_7=TAB_GLOBAL_COMPO[127];
 Esclave_7.ActiverComposant(false);
top.document.getElementById("Validate_Devis_Liste_des_devis0").disabled=true;
top.document.getElementById("Annuler_Devis_Liste_des_devis0").disabled=true;
top.document.getElementById("Insert_Devis_Liste_des_devis0").disabled=false;
top.document.getElementById("Delete_Devis_Liste_des_devis0").disabled=false;
top.document.getElementById("Update_Devis_Liste_des_devis0").disabled=false;
 if (NewCle==null)
 	NewCle=TAB_COMPO_PPTES[116].NewCle;
 Maitre.ForceNextSelection(NewCle)
 Maitre.RefreshTotal();
 if(retour)
 {
 Filtre_DepFor_Devis_0.Refresh();
 }
 TAB_COMPO_PPTES[116].Action_en_cours = null;
 return NewCle;
}

function Annuler_Devis_Liste_des_devis0()
{
 TAB_COMPO_PPTES[116].Action_en_cours = null;
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[116].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[120];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[121];
 Esclave_1.ActiverComposant(false);
 var Esclave_2=TAB_GLOBAL_COMPO[122];
 Esclave_2.ActiverComposant(false);
 var Esclave_3=TAB_GLOBAL_COMPO[123];
 Esclave_3.ActiverComposant(false);
 var Esclave_4=TAB_GLOBAL_COMPO[124];
 Esclave_4.ActiverComposant(false);
 var Esclave_5=TAB_GLOBAL_COMPO[125];
 Esclave_5.ActiverComposant(false);
 var Esclave_6=TAB_GLOBAL_COMPO[126];
 Esclave_6.ActiverComposant(false);
Annuler_Devis_Lignes_du_devis_8();
top.document.getElementById("Validate_Devis_Lignes_du_devis_8").disabled=true;
top.document.getElementById("Annuler_Devis_Lignes_du_devis_8").disabled=true;
top.document.getElementById("Insert_Devis_Lignes_du_devis_8").disabled=true;
top.document.getElementById("Delete_Devis_Lignes_du_devis_8").disabled=true;
top.document.getElementById("Update_Devis_Lignes_du_devis_8").disabled=true;
 var Esclave_7=TAB_GLOBAL_COMPO[127];
 Esclave_7.ActiverComposant(false);
top.document.getElementById("Validate_Devis_Liste_des_devis0").disabled=true;
top.document.getElementById("Annuler_Devis_Liste_des_devis0").disabled=true;
top.document.getElementById("Insert_Devis_Liste_des_devis0").disabled=false;
top.document.getElementById("Delete_Devis_Liste_des_devis0").disabled=false;
top.document.getElementById("Update_Devis_Liste_des_devis0").disabled=false;
}

function Insert_Devis_Lignes_du_devis_8()
{
 if (TAB_COMPO_PPTES[116].Action_en_cours == INSERT)
 	{
 		if (confirm("Pour continuer, vous devez enregistrer votre saisie\n Voulez vous poursuivre ?"))
		{
			var CleValide=Validate_Devis_Liste_des_devis0(false);
			if (CleValide==-1)
			{
				return -1;
			}
			CleValide=Update_Devis_Liste_des_devis0();
			if (CleValide==-1)
			{
				alert("Erreur l'enregistrement n'a pas étais correctement inséré");
				return -1;
			}
			Insert_Devis_Lignes_du_devis_8();
		}
 		return;
 	}
 TAB_COMPO_PPTES[127].Action_en_cours = INSERT;
/* On calcule la nouvelle clé */
 TAB_COMPO_PPTES[127].NewCle = getNewCle("ligne");
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[127].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[132];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[133];
 Esclave_1.ActiverComposant(true);
 var Esclave_2=TAB_GLOBAL_COMPO[134];
 Esclave_2.ActiverComposant(true);
top.document.getElementById("Validate_Devis_Lignes_du_devis_8").disabled=false;
top.document.getElementById("Annuler_Devis_Lignes_du_devis_8").disabled=false;
top.document.getElementById("Insert_Devis_Lignes_du_devis_8").disabled=true;
top.document.getElementById("Delete_Devis_Lignes_du_devis_8").disabled=true;
top.document.getElementById("Update_Devis_Lignes_du_devis_8").disabled=true;
 var Maitre=TAB_GLOBAL_COMPO[127];
 /* Pour une insertion on désectionne */
 var tree=Maitre.getComposantXul();
 if (tree.view!=null)
 {
 	tree.currentIndex=-1;
 	tree.view.selection.clearSelection();
 }
TAB_GLOBAL_COMPO[133].my_CompoXUL.value=1;

return TAB_COMPO_PPTES[127].NewCle;
}

function Delete_Devis_Lignes_du_devis_8()
{
 if (TAB_GLOBAL_COMPO[127].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement à suprimer");
 	return;
 }
 /* On recupère le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[127];
 if (confirm("Voulez vous vraiment supprimer l'enregistrement en cours ?"))
 {
	TAB_COMPO_PPTES[127].Action_en_cours = DELETE;
 	User_Delete_Devis_Lignes_du_devis_8(Maitre);
	Maitre.RefreshTotal();
 }
}

function Update_Devis_Lignes_du_devis_8()
{
 if (TAB_GLOBAL_COMPO[127].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement à mettre à jour");
 	return -1;
 }
 TAB_COMPO_PPTES[127].Action_en_cours = UPDATE;
/* On calcule la nouvelle clé */
 TAB_COMPO_PPTES[127].NewCle = TAB_GLOBAL_COMPO[127].getCleVal();
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[127].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[132];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[133];
 Esclave_1.ActiverComposant(true);
 var Esclave_2=TAB_GLOBAL_COMPO[134];
 Esclave_2.ActiverComposant(true);
top.document.getElementById("Validate_Devis_Lignes_du_devis_8").disabled=false;
top.document.getElementById("Annuler_Devis_Lignes_du_devis_8").disabled=false;
top.document.getElementById("Insert_Devis_Lignes_du_devis_8").disabled=true;
top.document.getElementById("Delete_Devis_Lignes_du_devis_8").disabled=true;
top.document.getElementById("Update_Devis_Lignes_du_devis_8").disabled=true;
return TAB_COMPO_PPTES[127].NewCle;
}

function Validate_Devis_Lignes_du_devis_8(retour)
{
 /* Retour à l'onget appellant si appelle par gérer */
if (retour==null)
	retour=true;

 /* On recupère le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[127];
 /* On recupère la clé du nouvel enregistrement */
 var NewCle=null;
 switch(TAB_COMPO_PPTES[127].Action_en_cours){
	case INSERT :
	if ((NewCle = User_Insert_Devis_Lignes_du_devis_8(Maitre))==-1)
		return -1;
	break;
	case UPDATE :
	if ((User_Update_Devis_Lignes_du_devis_8(Maitre))==-1)
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
 TAB_GLOBAL_COMPO[127].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[132];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[133];
 Esclave_1.ActiverComposant(false);
 var Esclave_2=TAB_GLOBAL_COMPO[134];
 Esclave_2.ActiverComposant(false);
top.document.getElementById("Validate_Devis_Lignes_du_devis_8").disabled=true;
top.document.getElementById("Annuler_Devis_Lignes_du_devis_8").disabled=true;
top.document.getElementById("Insert_Devis_Lignes_du_devis_8").disabled=false;
top.document.getElementById("Delete_Devis_Lignes_du_devis_8").disabled=false;
top.document.getElementById("Update_Devis_Lignes_du_devis_8").disabled=false;
 if (NewCle==null)
 	NewCle=TAB_COMPO_PPTES[127].NewCle;
 Maitre.ForceNextSelection(NewCle)
 Maitre.RefreshTotal();
 if(retour)
 {
 }
 TAB_COMPO_PPTES[127].Action_en_cours = null;
 return NewCle;
}

function Annuler_Devis_Lignes_du_devis_8()
{
 TAB_COMPO_PPTES[127].Action_en_cours = null;
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[127].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[132];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[133];
 Esclave_1.ActiverComposant(false);
 var Esclave_2=TAB_GLOBAL_COMPO[134];
 Esclave_2.ActiverComposant(false);
top.document.getElementById("Validate_Devis_Lignes_du_devis_8").disabled=true;
top.document.getElementById("Annuler_Devis_Lignes_du_devis_8").disabled=true;
top.document.getElementById("Insert_Devis_Lignes_du_devis_8").disabled=false;
top.document.getElementById("Delete_Devis_Lignes_du_devis_8").disabled=false;
top.document.getElementById("Update_Devis_Lignes_du_devis_8").disabled=false;
}






/* *********************************************** 
         FONCTIONS POUR L'ONGLET Facture
   ***********************************************/ 

 /* FILTRES DE RELATION ENTRE ONGLETS => VARIABLES GLOBALES POUR ETRE ACCESSIBLES DEPUIS INTERFACE_USER.JS */

 var Filtre_DepFor_Facture_0;
function Retour_Facture()
{
 if (Filtre_DepFor_Facture_0.my_Filtre.getEtat())
 {
 	Filtre_DepFor_Facture_0.FctFermetureOnglet();
 }
}
function Gerer_Facture(IdFiltreOnglet)
{
/* Pour les filtrage fort on ne doit pas être en mode insertion */
if(TAB_COMPO_PPTES[3].Action_en_cours == INSERT)
{
	if (confirm("Pour continuer, vous devez enregistrer votre saisie\n Voulez vous poursuivre ?"))
	{
		var CleValide=Validate_Personnes_Liste_des_personnes0(false);
		if (CleValide==-1)
		{
			return;
		}
		CleValide=Update_Personnes_Liste_des_personnes0();
		if (CleValide==-1)
		{
			alert("Erreur l'enregistrement n'a pas étais correctement inséré");
			return;
		}
	}
	else
 		return;
}
/* On désactive les autres filtres */
if (Filtre_DepFor_Facture_0.getId()!=IdFiltreOnglet)
{
	Filtre_DepFor_Facture_0.OnClose(true,false);
}
/* On change d'onglet */
 var tabs = top.document.getElementById("Tous_les_onglets");
 top.document.getElementById("Tous_les_onglets").setAttribute("hidden","false");
 tabs.selectedItem = top.document.getElementById("Onglet_Facture");
}

function OuvrirOnglet_Facture()
{
 var tabs = top.document.getElementById("Tous_les_onglets");
 tabs.selectedItem = top.document.getElementById("Onglet_Facture");
}

function Insert_Facture_Liste_des_factures0()
{
 TAB_COMPO_PPTES[135].Action_en_cours = INSERT;
/* On calcule la nouvelle clé */
 TAB_COMPO_PPTES[135].NewCle = getNewCle("facture");
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[135].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[141];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[142];
 Esclave_1.ActiverComposant(true);
 var Esclave_2=TAB_GLOBAL_COMPO[143];
 Esclave_2.ActiverComposant(true);
 var Esclave_3=TAB_GLOBAL_COMPO[144];
 Esclave_3.ActiverComposant(true);
 var Esclave_4=TAB_GLOBAL_COMPO[145];
 Esclave_4.ActiverComposant(true);
 var Esclave_5=TAB_GLOBAL_COMPO[146];
 Esclave_5.ActiverComposant(true);
 var Esclave_6=TAB_GLOBAL_COMPO[147];
 Esclave_6.ActiverComposant(true);
 var Esclave_7=TAB_GLOBAL_COMPO[148];
 Esclave_7.ActiverComposant(true);
 var Esclave_8=TAB_GLOBAL_COMPO[153];
 Esclave_8.ActiverComposant(true);
top.document.getElementById("Validate_Facture_Règlements_10").disabled=true;
top.document.getElementById("Annuler_Facture_Règlements_10").disabled=true;
top.document.getElementById("Insert_Facture_Règlements_10").disabled=false;
top.document.getElementById("Delete_Facture_Règlements_10").disabled=false;
top.document.getElementById("Update_Facture_Règlements_10").disabled=false;
 var Esclave_9=TAB_GLOBAL_COMPO[156];
 Esclave_9.ActiverComposant(true);
top.document.getElementById("Validate_Facture_Routages_15").disabled=true;
top.document.getElementById("Annuler_Facture_Routages_15").disabled=true;
top.document.getElementById("Insert_Facture_Routages_15").disabled=false;
top.document.getElementById("Delete_Facture_Routages_15").disabled=false;
top.document.getElementById("Update_Facture_Routages_15").disabled=false;
 var Esclave_10=TAB_GLOBAL_COMPO[166];
 Esclave_10.ActiverComposant(true);
top.document.getElementById("Validate_Facture_Liste_des_factures0").disabled=false;
top.document.getElementById("Annuler_Facture_Liste_des_factures0").disabled=false;
top.document.getElementById("Insert_Facture_Liste_des_factures0").disabled=true;
top.document.getElementById("Delete_Facture_Liste_des_factures0").disabled=true;
top.document.getElementById("Update_Facture_Liste_des_factures0").disabled=true;
 var Maitre=TAB_GLOBAL_COMPO[135];
 /* Pour une insertion on désectionne */
 var tree=Maitre.getComposantXul();
 if (tree.view!=null)
 {
 	tree.currentIndex=-1;
 	tree.view.selection.clearSelection();
 }
return TAB_COMPO_PPTES[135].NewCle;
}

function Delete_Facture_Liste_des_factures0()
{
 if (TAB_GLOBAL_COMPO[135].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement à suprimer");
 	return;
 }
 /* On recupère le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[135];
 if (confirm("Voulez vous vraiment supprimer l'enregistrement en cours ?"))
 {
	TAB_COMPO_PPTES[135].Action_en_cours = DELETE;
 	User_Delete_Facture_Liste_des_factures0(Maitre);
	Maitre.RefreshTotal();
	Filtre_DepFor_Facture_0.Refresh();
 }
}

function Update_Facture_Liste_des_factures0()
{
 if (TAB_GLOBAL_COMPO[135].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement à mettre à jour");
 	return -1;
 }
 TAB_COMPO_PPTES[135].Action_en_cours = UPDATE;
/* On calcule la nouvelle clé */
 TAB_COMPO_PPTES[135].NewCle = TAB_GLOBAL_COMPO[135].getCleVal();
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[135].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[141];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[142];
 Esclave_1.ActiverComposant(true);
 var Esclave_2=TAB_GLOBAL_COMPO[143];
 Esclave_2.ActiverComposant(true);
 var Esclave_3=TAB_GLOBAL_COMPO[144];
 Esclave_3.ActiverComposant(true);
 var Esclave_4=TAB_GLOBAL_COMPO[145];
 Esclave_4.ActiverComposant(true);
 var Esclave_5=TAB_GLOBAL_COMPO[146];
 Esclave_5.ActiverComposant(true);
 var Esclave_6=TAB_GLOBAL_COMPO[147];
 Esclave_6.ActiverComposant(true);
 var Esclave_7=TAB_GLOBAL_COMPO[148];
 Esclave_7.ActiverComposant(true);
 var Esclave_8=TAB_GLOBAL_COMPO[153];
 Esclave_8.ActiverComposant(true);
top.document.getElementById("Validate_Facture_Règlements_10").disabled=true;
top.document.getElementById("Annuler_Facture_Règlements_10").disabled=true;
top.document.getElementById("Insert_Facture_Règlements_10").disabled=false;
top.document.getElementById("Delete_Facture_Règlements_10").disabled=false;
top.document.getElementById("Update_Facture_Règlements_10").disabled=false;
 var Esclave_9=TAB_GLOBAL_COMPO[156];
 Esclave_9.ActiverComposant(true);
top.document.getElementById("Validate_Facture_Routages_15").disabled=true;
top.document.getElementById("Annuler_Facture_Routages_15").disabled=true;
top.document.getElementById("Insert_Facture_Routages_15").disabled=false;
top.document.getElementById("Delete_Facture_Routages_15").disabled=false;
top.document.getElementById("Update_Facture_Routages_15").disabled=false;
 var Esclave_10=TAB_GLOBAL_COMPO[166];
 Esclave_10.ActiverComposant(true);
top.document.getElementById("Validate_Facture_Liste_des_factures0").disabled=false;
top.document.getElementById("Annuler_Facture_Liste_des_factures0").disabled=false;
top.document.getElementById("Insert_Facture_Liste_des_factures0").disabled=true;
top.document.getElementById("Delete_Facture_Liste_des_factures0").disabled=true;
top.document.getElementById("Update_Facture_Liste_des_factures0").disabled=true;
return TAB_COMPO_PPTES[135].NewCle;
}

function Validate_Facture_Liste_des_factures0(retour)
{
 /* Retour à l'onget appellant si appelle par gérer */
if (retour==null)
	retour=true;

 /* On recupère le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[135];
 /* On recupère la clé du nouvel enregistrement */
 var NewCle=null;
 switch(TAB_COMPO_PPTES[135].Action_en_cours){
	case INSERT :
	if ((NewCle = User_Insert_Facture_Liste_des_factures0(Maitre))==-1)
		return -1;
	break;
	case UPDATE :
	if ((User_Update_Facture_Liste_des_factures0(Maitre))==-1)
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
 TAB_GLOBAL_COMPO[135].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[141];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[142];
 Esclave_1.ActiverComposant(false);
 var Esclave_2=TAB_GLOBAL_COMPO[143];
 Esclave_2.ActiverComposant(false);
 var Esclave_3=TAB_GLOBAL_COMPO[144];
 Esclave_3.ActiverComposant(false);
 var Esclave_4=TAB_GLOBAL_COMPO[145];
 Esclave_4.ActiverComposant(false);
 var Esclave_5=TAB_GLOBAL_COMPO[146];
 Esclave_5.ActiverComposant(false);
 var Esclave_6=TAB_GLOBAL_COMPO[147];
 Esclave_6.ActiverComposant(false);
 var Esclave_7=TAB_GLOBAL_COMPO[148];
 Esclave_7.ActiverComposant(false);
 var Esclave_8=TAB_GLOBAL_COMPO[153];
 Esclave_8.ActiverComposant(false);
Annuler_Facture_Règlements_10();
top.document.getElementById("Validate_Facture_Règlements_10").disabled=true;
top.document.getElementById("Annuler_Facture_Règlements_10").disabled=true;
top.document.getElementById("Insert_Facture_Règlements_10").disabled=true;
top.document.getElementById("Delete_Facture_Règlements_10").disabled=true;
top.document.getElementById("Update_Facture_Règlements_10").disabled=true;
 var Esclave_9=TAB_GLOBAL_COMPO[156];
 Esclave_9.ActiverComposant(false);
Annuler_Facture_Routages_15();
top.document.getElementById("Validate_Facture_Routages_15").disabled=true;
top.document.getElementById("Annuler_Facture_Routages_15").disabled=true;
top.document.getElementById("Insert_Facture_Routages_15").disabled=true;
top.document.getElementById("Delete_Facture_Routages_15").disabled=true;
top.document.getElementById("Update_Facture_Routages_15").disabled=true;
 var Esclave_10=TAB_GLOBAL_COMPO[166];
 Esclave_10.ActiverComposant(false);
top.document.getElementById("Validate_Facture_Liste_des_factures0").disabled=true;
top.document.getElementById("Annuler_Facture_Liste_des_factures0").disabled=true;
top.document.getElementById("Insert_Facture_Liste_des_factures0").disabled=false;
top.document.getElementById("Delete_Facture_Liste_des_factures0").disabled=false;
top.document.getElementById("Update_Facture_Liste_des_factures0").disabled=false;
 if (NewCle==null)
 	NewCle=TAB_COMPO_PPTES[135].NewCle;
 Maitre.ForceNextSelection(NewCle)
 Maitre.RefreshTotal();
 if(retour)
 {
 Filtre_DepFor_Facture_0.Refresh();
 }
 TAB_COMPO_PPTES[135].Action_en_cours = null;
 return NewCle;
}

function Annuler_Facture_Liste_des_factures0()
{
 TAB_COMPO_PPTES[135].Action_en_cours = null;
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[135].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[141];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[142];
 Esclave_1.ActiverComposant(false);
 var Esclave_2=TAB_GLOBAL_COMPO[143];
 Esclave_2.ActiverComposant(false);
 var Esclave_3=TAB_GLOBAL_COMPO[144];
 Esclave_3.ActiverComposant(false);
 var Esclave_4=TAB_GLOBAL_COMPO[145];
 Esclave_4.ActiverComposant(false);
 var Esclave_5=TAB_GLOBAL_COMPO[146];
 Esclave_5.ActiverComposant(false);
 var Esclave_6=TAB_GLOBAL_COMPO[147];
 Esclave_6.ActiverComposant(false);
 var Esclave_7=TAB_GLOBAL_COMPO[148];
 Esclave_7.ActiverComposant(false);
 var Esclave_8=TAB_GLOBAL_COMPO[153];
 Esclave_8.ActiverComposant(false);
Annuler_Facture_Règlements_10();
top.document.getElementById("Validate_Facture_Règlements_10").disabled=true;
top.document.getElementById("Annuler_Facture_Règlements_10").disabled=true;
top.document.getElementById("Insert_Facture_Règlements_10").disabled=true;
top.document.getElementById("Delete_Facture_Règlements_10").disabled=true;
top.document.getElementById("Update_Facture_Règlements_10").disabled=true;
 var Esclave_9=TAB_GLOBAL_COMPO[156];
 Esclave_9.ActiverComposant(false);
Annuler_Facture_Routages_15();
top.document.getElementById("Validate_Facture_Routages_15").disabled=true;
top.document.getElementById("Annuler_Facture_Routages_15").disabled=true;
top.document.getElementById("Insert_Facture_Routages_15").disabled=true;
top.document.getElementById("Delete_Facture_Routages_15").disabled=true;
top.document.getElementById("Update_Facture_Routages_15").disabled=true;
 var Esclave_10=TAB_GLOBAL_COMPO[166];
 Esclave_10.ActiverComposant(false);
top.document.getElementById("Validate_Facture_Liste_des_factures0").disabled=true;
top.document.getElementById("Annuler_Facture_Liste_des_factures0").disabled=true;
top.document.getElementById("Insert_Facture_Liste_des_factures0").disabled=false;
top.document.getElementById("Delete_Facture_Liste_des_factures0").disabled=false;
top.document.getElementById("Update_Facture_Liste_des_factures0").disabled=false;
}

function Insert_Facture_Règlements_10()
{
 if (TAB_COMPO_PPTES[135].Action_en_cours == INSERT)
 	{
 		if (confirm("Pour continuer, vous devez enregistrer votre saisie\n Voulez vous poursuivre ?"))
		{
			var CleValide=Validate_Facture_Liste_des_factures0(false);
			if (CleValide==-1)
			{
				return -1;
			}
			CleValide=Update_Facture_Liste_des_factures0();
			if (CleValide==-1)
			{
				alert("Erreur l'enregistrement n'a pas étais correctement inséré");
				return -1;
			}
			Insert_Facture_Règlements_10();
		}
 		return;
 	}
 TAB_COMPO_PPTES[156].Action_en_cours = INSERT;
/* On calcule la nouvelle clé */
 TAB_COMPO_PPTES[156].NewCle = getNewCle("facturereglement");
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[156].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[162];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[163];
 Esclave_1.ActiverComposant(true);
 var Esclave_2=TAB_GLOBAL_COMPO[164];
 Esclave_2.ActiverComposant(true);
 var Esclave_3=TAB_GLOBAL_COMPO[165];
 Esclave_3.ActiverComposant(true);
top.document.getElementById("Validate_Facture_Règlements_10").disabled=false;
top.document.getElementById("Annuler_Facture_Règlements_10").disabled=false;
top.document.getElementById("Insert_Facture_Règlements_10").disabled=true;
top.document.getElementById("Delete_Facture_Règlements_10").disabled=true;
top.document.getElementById("Update_Facture_Règlements_10").disabled=true;
 var Maitre=TAB_GLOBAL_COMPO[156];
 /* Pour une insertion on désectionne */
 var tree=Maitre.getComposantXul();
 if (tree.view!=null)
 {
 	tree.currentIndex=-1;
 	tree.view.selection.clearSelection();
 }
return TAB_COMPO_PPTES[156].NewCle;
}

function Delete_Facture_Règlements_10()
{
 if (TAB_GLOBAL_COMPO[156].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement à suprimer");
 	return;
 }
 /* On recupère le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[156];
 if (confirm("Voulez vous vraiment supprimer l'enregistrement en cours ?"))
 {
	TAB_COMPO_PPTES[156].Action_en_cours = DELETE;
 	User_Delete_Facture_Règlements_10(Maitre);
	Maitre.RefreshTotal();
 }
}

function Update_Facture_Règlements_10()
{
 if (TAB_GLOBAL_COMPO[156].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement à mettre à jour");
 	return -1;
 }
 TAB_COMPO_PPTES[156].Action_en_cours = UPDATE;
/* On calcule la nouvelle clé */
 TAB_COMPO_PPTES[156].NewCle = TAB_GLOBAL_COMPO[156].getCleVal();
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[156].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[162];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[163];
 Esclave_1.ActiverComposant(true);
 var Esclave_2=TAB_GLOBAL_COMPO[164];
 Esclave_2.ActiverComposant(true);
 var Esclave_3=TAB_GLOBAL_COMPO[165];
 Esclave_3.ActiverComposant(true);
top.document.getElementById("Validate_Facture_Règlements_10").disabled=false;
top.document.getElementById("Annuler_Facture_Règlements_10").disabled=false;
top.document.getElementById("Insert_Facture_Règlements_10").disabled=true;
top.document.getElementById("Delete_Facture_Règlements_10").disabled=true;
top.document.getElementById("Update_Facture_Règlements_10").disabled=true;
return TAB_COMPO_PPTES[156].NewCle;
}

function Validate_Facture_Règlements_10(retour)
{
 /* Retour à l'onget appellant si appelle par gérer */
if (retour==null)
	retour=true;

 /* On recupère le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[156];
 /* On recupère la clé du nouvel enregistrement */
 var NewCle=null;
 switch(TAB_COMPO_PPTES[156].Action_en_cours){
	case INSERT :
	if ((NewCle = User_Insert_Facture_Règlements_10(Maitre))==-1)
		return -1;
	break;
	case UPDATE :
	if ((User_Update_Facture_Règlements_10(Maitre))==-1)
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
 TAB_GLOBAL_COMPO[156].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[162];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[163];
 Esclave_1.ActiverComposant(false);
 var Esclave_2=TAB_GLOBAL_COMPO[164];
 Esclave_2.ActiverComposant(false);
 var Esclave_3=TAB_GLOBAL_COMPO[165];
 Esclave_3.ActiverComposant(false);
top.document.getElementById("Validate_Facture_Règlements_10").disabled=true;
top.document.getElementById("Annuler_Facture_Règlements_10").disabled=true;
top.document.getElementById("Insert_Facture_Règlements_10").disabled=false;
top.document.getElementById("Delete_Facture_Règlements_10").disabled=false;
top.document.getElementById("Update_Facture_Règlements_10").disabled=false;
 if (NewCle==null)
 	NewCle=TAB_COMPO_PPTES[156].NewCle;
 Maitre.ForceNextSelection(NewCle)
 Maitre.RefreshTotal();
 if(retour)
 {
 }
 TAB_COMPO_PPTES[156].Action_en_cours = null;
 return NewCle;
}

function Annuler_Facture_Règlements_10()
{
 TAB_COMPO_PPTES[156].Action_en_cours = null;
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[156].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[162];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[163];
 Esclave_1.ActiverComposant(false);
 var Esclave_2=TAB_GLOBAL_COMPO[164];
 Esclave_2.ActiverComposant(false);
 var Esclave_3=TAB_GLOBAL_COMPO[165];
 Esclave_3.ActiverComposant(false);
top.document.getElementById("Validate_Facture_Règlements_10").disabled=true;
top.document.getElementById("Annuler_Facture_Règlements_10").disabled=true;
top.document.getElementById("Insert_Facture_Règlements_10").disabled=false;
top.document.getElementById("Delete_Facture_Règlements_10").disabled=false;
top.document.getElementById("Update_Facture_Règlements_10").disabled=false;
}

function Insert_Facture_Routages_15()
{
 if (TAB_COMPO_PPTES[135].Action_en_cours == INSERT)
 	{
 		if (confirm("Pour continuer, vous devez enregistrer votre saisie\n Voulez vous poursuivre ?"))
		{
			var CleValide=Validate_Facture_Liste_des_factures0(false);
			if (CleValide==-1)
			{
				return -1;
			}
			CleValide=Update_Facture_Liste_des_factures0();
			if (CleValide==-1)
			{
				alert("Erreur l'enregistrement n'a pas étais correctement inséré");
				return -1;
			}
			Insert_Facture_Routages_15();
		}
 		return;
 	}
 TAB_COMPO_PPTES[166].Action_en_cours = INSERT;
/* On calcule la nouvelle clé */
 TAB_COMPO_PPTES[166].NewCle = getNewCle("routage");
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[166].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[171];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[172];
 Esclave_1.ActiverComposant(true);
 var Esclave_2=TAB_GLOBAL_COMPO[173];
 Esclave_2.ActiverComposant(true);
 var Esclave_3=TAB_GLOBAL_COMPO[174];
 Esclave_3.ActiverComposant(true);
top.document.getElementById("Validate_Facture_Routages_15").disabled=false;
top.document.getElementById("Annuler_Facture_Routages_15").disabled=false;
top.document.getElementById("Insert_Facture_Routages_15").disabled=true;
top.document.getElementById("Delete_Facture_Routages_15").disabled=true;
top.document.getElementById("Update_Facture_Routages_15").disabled=true;
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

function Delete_Facture_Routages_15()
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
 	User_Delete_Facture_Routages_15(Maitre);
	Maitre.RefreshTotal();
 }
}

function Update_Facture_Routages_15()
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
 var Esclave_0=TAB_GLOBAL_COMPO[171];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[172];
 Esclave_1.ActiverComposant(true);
 var Esclave_2=TAB_GLOBAL_COMPO[173];
 Esclave_2.ActiverComposant(true);
 var Esclave_3=TAB_GLOBAL_COMPO[174];
 Esclave_3.ActiverComposant(true);
top.document.getElementById("Validate_Facture_Routages_15").disabled=false;
top.document.getElementById("Annuler_Facture_Routages_15").disabled=false;
top.document.getElementById("Insert_Facture_Routages_15").disabled=true;
top.document.getElementById("Delete_Facture_Routages_15").disabled=true;
top.document.getElementById("Update_Facture_Routages_15").disabled=true;
return TAB_COMPO_PPTES[166].NewCle;
}

function Validate_Facture_Routages_15(retour)
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
	if ((NewCle = User_Insert_Facture_Routages_15(Maitre))==-1)
		return -1;
	break;
	case UPDATE :
	if ((User_Update_Facture_Routages_15(Maitre))==-1)
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
 var Esclave_0=TAB_GLOBAL_COMPO[171];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[172];
 Esclave_1.ActiverComposant(false);
 var Esclave_2=TAB_GLOBAL_COMPO[173];
 Esclave_2.ActiverComposant(false);
 var Esclave_3=TAB_GLOBAL_COMPO[174];
 Esclave_3.ActiverComposant(false);
top.document.getElementById("Validate_Facture_Routages_15").disabled=true;
top.document.getElementById("Annuler_Facture_Routages_15").disabled=true;
top.document.getElementById("Insert_Facture_Routages_15").disabled=false;
top.document.getElementById("Delete_Facture_Routages_15").disabled=false;
top.document.getElementById("Update_Facture_Routages_15").disabled=false;
 if (NewCle==null)
 	NewCle=TAB_COMPO_PPTES[166].NewCle;
 Maitre.ForceNextSelection(NewCle)
 Maitre.RefreshTotal();
 if(retour)
 {
 }
 TAB_COMPO_PPTES[166].Action_en_cours = null;
 return NewCle;
}

function Annuler_Facture_Routages_15()
{
 TAB_COMPO_PPTES[166].Action_en_cours = null;
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[166].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[171];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[172];
 Esclave_1.ActiverComposant(false);
 var Esclave_2=TAB_GLOBAL_COMPO[173];
 Esclave_2.ActiverComposant(false);
 var Esclave_3=TAB_GLOBAL_COMPO[174];
 Esclave_3.ActiverComposant(false);
top.document.getElementById("Validate_Facture_Routages_15").disabled=true;
top.document.getElementById("Annuler_Facture_Routages_15").disabled=true;
top.document.getElementById("Insert_Facture_Routages_15").disabled=false;
top.document.getElementById("Delete_Facture_Routages_15").disabled=false;
top.document.getElementById("Update_Facture_Routages_15").disabled=false;
}






/* *********************************************** 
         FONCTIONS POUR L'ONGLET Avoir
   ***********************************************/ 

 /* FILTRES DE RELATION ENTRE ONGLETS => VARIABLES GLOBALES POUR ETRE ACCESSIBLES DEPUIS INTERFACE_USER.JS */

 var Filtre_Dep_Avoir_0;
function Retour_Avoir()
{
 if (Filtre_Dep_Avoir_0.my_Filtre.getEtat())
 {
 	Filtre_Dep_Avoir_0.FctFermetureOnglet();
 }
}
function Gerer_Avoir(IdFiltreOnglet)
{
/* On désactive les autres filtres */
if (Filtre_Dep_Avoir_0.getId()!=IdFiltreOnglet)
{
	Filtre_Dep_Avoir_0.OnClose(true,false);
}
/* On change d'onglet */
 var tabs = top.document.getElementById("Tous_les_onglets");
 top.document.getElementById("Tous_les_onglets").setAttribute("hidden","false");
 tabs.selectedItem = top.document.getElementById("Onglet_Avoir");
}

function OuvrirOnglet_Avoir()
{
 var tabs = top.document.getElementById("Tous_les_onglets");
 tabs.selectedItem = top.document.getElementById("Onglet_Avoir");
}

function Insert_Avoir_Liste_des_avoirs0()
{
 TAB_COMPO_PPTES[175].Action_en_cours = INSERT;
/* On calcule la nouvelle clé */
 TAB_COMPO_PPTES[175].NewCle = getNewCle("avoir");
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[175].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[179];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[180];
 Esclave_1.ActiverComposant(true);
 var Esclave_2=TAB_GLOBAL_COMPO[181];
 Esclave_2.ActiverComposant(true);
 var Esclave_3=TAB_GLOBAL_COMPO[182];
 Esclave_3.ActiverComposant(true);
 var Esclave_4=TAB_GLOBAL_COMPO[183];
 Esclave_4.ActiverComposant(true);
top.document.getElementById("Validate_Avoir_Liste_des_avoirs0").disabled=false;
top.document.getElementById("Annuler_Avoir_Liste_des_avoirs0").disabled=false;
top.document.getElementById("Insert_Avoir_Liste_des_avoirs0").disabled=true;
top.document.getElementById("Delete_Avoir_Liste_des_avoirs0").disabled=true;
top.document.getElementById("Update_Avoir_Liste_des_avoirs0").disabled=true;
 var Maitre=TAB_GLOBAL_COMPO[175];
 /* Pour une insertion on désectionne */
 var tree=Maitre.getComposantXul();
 if (tree.view!=null)
 {
 	tree.currentIndex=-1;
 	tree.view.selection.clearSelection();
 }
return TAB_COMPO_PPTES[175].NewCle;
}

function Delete_Avoir_Liste_des_avoirs0()
{
 if (TAB_GLOBAL_COMPO[175].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement à suprimer");
 	return;
 }
 /* On recupère le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[175];
 if (confirm("Voulez vous vraiment supprimer l'enregistrement en cours ?"))
 {
	TAB_COMPO_PPTES[175].Action_en_cours = DELETE;
 	User_Delete_Avoir_Liste_des_avoirs0(Maitre);
	Maitre.RefreshTotal();
	Filtre_Dep_Avoir_0.OnClose(true);
 }
}

function Update_Avoir_Liste_des_avoirs0()
{
 if (TAB_GLOBAL_COMPO[175].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement à mettre à jour");
 	return -1;
 }
 TAB_COMPO_PPTES[175].Action_en_cours = UPDATE;
/* On calcule la nouvelle clé */
 TAB_COMPO_PPTES[175].NewCle = TAB_GLOBAL_COMPO[175].getCleVal();
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[175].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[179];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[180];
 Esclave_1.ActiverComposant(true);
 var Esclave_2=TAB_GLOBAL_COMPO[181];
 Esclave_2.ActiverComposant(true);
 var Esclave_3=TAB_GLOBAL_COMPO[182];
 Esclave_3.ActiverComposant(true);
 var Esclave_4=TAB_GLOBAL_COMPO[183];
 Esclave_4.ActiverComposant(true);
top.document.getElementById("Validate_Avoir_Liste_des_avoirs0").disabled=false;
top.document.getElementById("Annuler_Avoir_Liste_des_avoirs0").disabled=false;
top.document.getElementById("Insert_Avoir_Liste_des_avoirs0").disabled=true;
top.document.getElementById("Delete_Avoir_Liste_des_avoirs0").disabled=true;
top.document.getElementById("Update_Avoir_Liste_des_avoirs0").disabled=true;
return TAB_COMPO_PPTES[175].NewCle;
}

function Validate_Avoir_Liste_des_avoirs0(retour)
{
 /* Retour à l'onget appellant si appelle par gérer */
if (retour==null)
	retour=true;

 /* On recupère le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[175];
 /* On recupère la clé du nouvel enregistrement */
 var NewCle=null;
 switch(TAB_COMPO_PPTES[175].Action_en_cours){
	case INSERT :
	if ((NewCle = User_Insert_Avoir_Liste_des_avoirs0(Maitre))==-1)
		return -1;
	break;
	case UPDATE :
	if ((User_Update_Avoir_Liste_des_avoirs0(Maitre))==-1)
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
 TAB_GLOBAL_COMPO[175].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[179];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[180];
 Esclave_1.ActiverComposant(false);
 var Esclave_2=TAB_GLOBAL_COMPO[181];
 Esclave_2.ActiverComposant(false);
 var Esclave_3=TAB_GLOBAL_COMPO[182];
 Esclave_3.ActiverComposant(false);
 var Esclave_4=TAB_GLOBAL_COMPO[183];
 Esclave_4.ActiverComposant(false);
top.document.getElementById("Validate_Avoir_Liste_des_avoirs0").disabled=true;
top.document.getElementById("Annuler_Avoir_Liste_des_avoirs0").disabled=true;
top.document.getElementById("Insert_Avoir_Liste_des_avoirs0").disabled=false;
top.document.getElementById("Delete_Avoir_Liste_des_avoirs0").disabled=false;
top.document.getElementById("Update_Avoir_Liste_des_avoirs0").disabled=false;
 if (NewCle==null)
 	NewCle=TAB_COMPO_PPTES[175].NewCle;
 Maitre.ForceNextSelection(NewCle)
 Maitre.RefreshTotal();
 if(retour)
 {
 Filtre_Dep_Avoir_0.OnClose(false);
 }
 TAB_COMPO_PPTES[175].Action_en_cours = null;
 return NewCle;
}

function Annuler_Avoir_Liste_des_avoirs0()
{
 TAB_COMPO_PPTES[175].Action_en_cours = null;
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[175].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[179];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[180];
 Esclave_1.ActiverComposant(false);
 var Esclave_2=TAB_GLOBAL_COMPO[181];
 Esclave_2.ActiverComposant(false);
 var Esclave_3=TAB_GLOBAL_COMPO[182];
 Esclave_3.ActiverComposant(false);
 var Esclave_4=TAB_GLOBAL_COMPO[183];
 Esclave_4.ActiverComposant(false);
top.document.getElementById("Validate_Avoir_Liste_des_avoirs0").disabled=true;
top.document.getElementById("Annuler_Avoir_Liste_des_avoirs0").disabled=true;
top.document.getElementById("Insert_Avoir_Liste_des_avoirs0").disabled=false;
top.document.getElementById("Delete_Avoir_Liste_des_avoirs0").disabled=false;
top.document.getElementById("Update_Avoir_Liste_des_avoirs0").disabled=false;
}






/* *********************************************** 
         FONCTIONS POUR L'ONGLET Réglement
   ***********************************************/ 

 /* FILTRES DE RELATION ENTRE ONGLETS => VARIABLES GLOBALES POUR ETRE ACCESSIBLES DEPUIS INTERFACE_USER.JS */

 var Filtre_Dep_Réglement_0;
 var Filtre_DepFor_Réglement_1;
function Retour_Réglement()
{
 if (Filtre_Dep_Réglement_0.my_Filtre.getEtat())
 {
 	Filtre_Dep_Réglement_0.FctFermetureOnglet();
 }
 if (Filtre_DepFor_Réglement_1.my_Filtre.getEtat())
 {
 	Filtre_DepFor_Réglement_1.FctFermetureOnglet();
 }
}
function Gerer_Réglement(IdFiltreOnglet)
{
/* Pour les filtrage fort on ne doit pas être en mode insertion */
if(TAB_COMPO_PPTES[3].Action_en_cours == INSERT)
{
	if (confirm("Pour continuer, vous devez enregistrer votre saisie\n Voulez vous poursuivre ?"))
	{
		var CleValide=Validate_Personnes_Liste_des_personnes0(false);
		if (CleValide==-1)
		{
			return;
		}
		CleValide=Update_Personnes_Liste_des_personnes0();
		if (CleValide==-1)
		{
			alert("Erreur l'enregistrement n'a pas étais correctement inséré");
			return;
		}
	}
	else
 		return;
}
/* On désactive les autres filtres */
if (Filtre_Dep_Réglement_0.getId()!=IdFiltreOnglet)
{
	Filtre_Dep_Réglement_0.OnClose(true,false);
}
if (Filtre_DepFor_Réglement_1.getId()!=IdFiltreOnglet)
{
	Filtre_DepFor_Réglement_1.OnClose(true,false);
}
/* On change d'onglet */
 var tabs = top.document.getElementById("Tous_les_onglets");
 top.document.getElementById("Tous_les_onglets").setAttribute("hidden","false");
 tabs.selectedItem = top.document.getElementById("Onglet_Réglement");
}

function OuvrirOnglet_Réglement()
{
 var tabs = top.document.getElementById("Tous_les_onglets");
 tabs.selectedItem = top.document.getElementById("Onglet_Réglement");
}

function Insert_Réglement_Liste_des_réglements0()
{
 TAB_COMPO_PPTES[188].Action_en_cours = INSERT;
/* On calcule la nouvelle clé */
 TAB_COMPO_PPTES[188].NewCle = getNewCle("reglement");
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[188].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[194];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[195];
 Esclave_1.ActiverComposant(true);
 var Esclave_2=TAB_GLOBAL_COMPO[196];
 Esclave_2.ActiverComposant(true);
 var Esclave_3=TAB_GLOBAL_COMPO[197];
 Esclave_3.ActiverComposant(true);
 var Esclave_4=TAB_GLOBAL_COMPO[198];
 Esclave_4.ActiverComposant(true);
 var Esclave_5=TAB_GLOBAL_COMPO[199];
 Esclave_5.ActiverComposant(true);
top.document.getElementById("Validate_Réglement_Factures_concernées_7").disabled=true;
top.document.getElementById("Annuler_Réglement_Factures_concernées_7").disabled=true;
top.document.getElementById("Insert_Réglement_Factures_concernées_7").disabled=false;
top.document.getElementById("Delete_Réglement_Factures_concernées_7").disabled=false;
top.document.getElementById("Update_Réglement_Factures_concernées_7").disabled=false;
 var Esclave_6=TAB_GLOBAL_COMPO[200];
 Esclave_6.ActiverComposant(true);
top.document.getElementById("Validate_Réglement_Dont_reversements____12").disabled=true;
top.document.getElementById("Annuler_Réglement_Dont_reversements____12").disabled=true;
top.document.getElementById("Insert_Réglement_Dont_reversements____12").disabled=false;
top.document.getElementById("Delete_Réglement_Dont_reversements____12").disabled=false;
top.document.getElementById("Update_Réglement_Dont_reversements____12").disabled=false;
 var Esclave_7=TAB_GLOBAL_COMPO[209];
 Esclave_7.ActiverComposant(true);
top.document.getElementById("Validate_Réglement_Liste_des_réglements0").disabled=false;
top.document.getElementById("Annuler_Réglement_Liste_des_réglements0").disabled=false;
top.document.getElementById("Insert_Réglement_Liste_des_réglements0").disabled=true;
top.document.getElementById("Delete_Réglement_Liste_des_réglements0").disabled=true;
top.document.getElementById("Update_Réglement_Liste_des_réglements0").disabled=true;
 var Maitre=TAB_GLOBAL_COMPO[188];
 /* Pour une insertion on désectionne */
 var tree=Maitre.getComposantXul();
 if (tree.view!=null)
 {
 	tree.currentIndex=-1;
 	tree.view.selection.clearSelection();
 }
return TAB_COMPO_PPTES[188].NewCle;
}

function Delete_Réglement_Liste_des_réglements0()
{
 if (TAB_GLOBAL_COMPO[188].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement à suprimer");
 	return;
 }
 /* On recupère le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[188];
 if (confirm("Voulez vous vraiment supprimer l'enregistrement en cours ?"))
 {
	TAB_COMPO_PPTES[188].Action_en_cours = DELETE;
 	User_Delete_Réglement_Liste_des_réglements0(Maitre);
	Maitre.RefreshTotal();
	Filtre_Dep_Réglement_0.OnClose(true);
	Filtre_DepFor_Réglement_1.Refresh();
 }
}

function Update_Réglement_Liste_des_réglements0()
{
 if (TAB_GLOBAL_COMPO[188].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement à mettre à jour");
 	return -1;
 }
 TAB_COMPO_PPTES[188].Action_en_cours = UPDATE;
/* On calcule la nouvelle clé */
 TAB_COMPO_PPTES[188].NewCle = TAB_GLOBAL_COMPO[188].getCleVal();
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[188].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[194];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[195];
 Esclave_1.ActiverComposant(true);
 var Esclave_2=TAB_GLOBAL_COMPO[196];
 Esclave_2.ActiverComposant(true);
 var Esclave_3=TAB_GLOBAL_COMPO[197];
 Esclave_3.ActiverComposant(true);
 var Esclave_4=TAB_GLOBAL_COMPO[198];
 Esclave_4.ActiverComposant(true);
 var Esclave_5=TAB_GLOBAL_COMPO[199];
 Esclave_5.ActiverComposant(true);
top.document.getElementById("Validate_Réglement_Factures_concernées_7").disabled=true;
top.document.getElementById("Annuler_Réglement_Factures_concernées_7").disabled=true;
top.document.getElementById("Insert_Réglement_Factures_concernées_7").disabled=false;
top.document.getElementById("Delete_Réglement_Factures_concernées_7").disabled=false;
top.document.getElementById("Update_Réglement_Factures_concernées_7").disabled=false;
 var Esclave_6=TAB_GLOBAL_COMPO[200];
 Esclave_6.ActiverComposant(true);
top.document.getElementById("Validate_Réglement_Dont_reversements____12").disabled=true;
top.document.getElementById("Annuler_Réglement_Dont_reversements____12").disabled=true;
top.document.getElementById("Insert_Réglement_Dont_reversements____12").disabled=false;
top.document.getElementById("Delete_Réglement_Dont_reversements____12").disabled=false;
top.document.getElementById("Update_Réglement_Dont_reversements____12").disabled=false;
 var Esclave_7=TAB_GLOBAL_COMPO[209];
 Esclave_7.ActiverComposant(true);
top.document.getElementById("Validate_Réglement_Liste_des_réglements0").disabled=false;
top.document.getElementById("Annuler_Réglement_Liste_des_réglements0").disabled=false;
top.document.getElementById("Insert_Réglement_Liste_des_réglements0").disabled=true;
top.document.getElementById("Delete_Réglement_Liste_des_réglements0").disabled=true;
top.document.getElementById("Update_Réglement_Liste_des_réglements0").disabled=true;
return TAB_COMPO_PPTES[188].NewCle;
}

function Validate_Réglement_Liste_des_réglements0(retour)
{
 /* Retour à l'onget appellant si appelle par gérer */
if (retour==null)
	retour=true;

 /* On recupère le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[188];
 /* On recupère la clé du nouvel enregistrement */
 var NewCle=null;
 switch(TAB_COMPO_PPTES[188].Action_en_cours){
	case INSERT :
	if ((NewCle = User_Insert_Réglement_Liste_des_réglements0(Maitre))==-1)
		return -1;
	break;
	case UPDATE :
	if ((User_Update_Réglement_Liste_des_réglements0(Maitre))==-1)
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
 TAB_GLOBAL_COMPO[188].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[194];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[195];
 Esclave_1.ActiverComposant(false);
 var Esclave_2=TAB_GLOBAL_COMPO[196];
 Esclave_2.ActiverComposant(false);
 var Esclave_3=TAB_GLOBAL_COMPO[197];
 Esclave_3.ActiverComposant(false);
 var Esclave_4=TAB_GLOBAL_COMPO[198];
 Esclave_4.ActiverComposant(false);
 var Esclave_5=TAB_GLOBAL_COMPO[199];
 Esclave_5.ActiverComposant(false);
Annuler_Réglement_Factures_concernées_7();
top.document.getElementById("Validate_Réglement_Factures_concernées_7").disabled=true;
top.document.getElementById("Annuler_Réglement_Factures_concernées_7").disabled=true;
top.document.getElementById("Insert_Réglement_Factures_concernées_7").disabled=true;
top.document.getElementById("Delete_Réglement_Factures_concernées_7").disabled=true;
top.document.getElementById("Update_Réglement_Factures_concernées_7").disabled=true;
 var Esclave_6=TAB_GLOBAL_COMPO[200];
 Esclave_6.ActiverComposant(false);
Annuler_Réglement_Dont_reversements____12();
top.document.getElementById("Validate_Réglement_Dont_reversements____12").disabled=true;
top.document.getElementById("Annuler_Réglement_Dont_reversements____12").disabled=true;
top.document.getElementById("Insert_Réglement_Dont_reversements____12").disabled=true;
top.document.getElementById("Delete_Réglement_Dont_reversements____12").disabled=true;
top.document.getElementById("Update_Réglement_Dont_reversements____12").disabled=true;
 var Esclave_7=TAB_GLOBAL_COMPO[209];
 Esclave_7.ActiverComposant(false);
top.document.getElementById("Validate_Réglement_Liste_des_réglements0").disabled=true;
top.document.getElementById("Annuler_Réglement_Liste_des_réglements0").disabled=true;
top.document.getElementById("Insert_Réglement_Liste_des_réglements0").disabled=false;
top.document.getElementById("Delete_Réglement_Liste_des_réglements0").disabled=false;
top.document.getElementById("Update_Réglement_Liste_des_réglements0").disabled=false;
 if (NewCle==null)
 	NewCle=TAB_COMPO_PPTES[188].NewCle;
 Maitre.ForceNextSelection(NewCle)
 Maitre.RefreshTotal();
 if(retour)
 {
 Filtre_Dep_Réglement_0.OnClose(false);
 Filtre_DepFor_Réglement_1.Refresh();
 }
 TAB_COMPO_PPTES[188].Action_en_cours = null;
 return NewCle;
}

function Annuler_Réglement_Liste_des_réglements0()
{
 TAB_COMPO_PPTES[188].Action_en_cours = null;
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[188].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[194];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[195];
 Esclave_1.ActiverComposant(false);
 var Esclave_2=TAB_GLOBAL_COMPO[196];
 Esclave_2.ActiverComposant(false);
 var Esclave_3=TAB_GLOBAL_COMPO[197];
 Esclave_3.ActiverComposant(false);
 var Esclave_4=TAB_GLOBAL_COMPO[198];
 Esclave_4.ActiverComposant(false);
 var Esclave_5=TAB_GLOBAL_COMPO[199];
 Esclave_5.ActiverComposant(false);
Annuler_Réglement_Factures_concernées_7();
top.document.getElementById("Validate_Réglement_Factures_concernées_7").disabled=true;
top.document.getElementById("Annuler_Réglement_Factures_concernées_7").disabled=true;
top.document.getElementById("Insert_Réglement_Factures_concernées_7").disabled=true;
top.document.getElementById("Delete_Réglement_Factures_concernées_7").disabled=true;
top.document.getElementById("Update_Réglement_Factures_concernées_7").disabled=true;
 var Esclave_6=TAB_GLOBAL_COMPO[200];
 Esclave_6.ActiverComposant(false);
Annuler_Réglement_Dont_reversements____12();
top.document.getElementById("Validate_Réglement_Dont_reversements____12").disabled=true;
top.document.getElementById("Annuler_Réglement_Dont_reversements____12").disabled=true;
top.document.getElementById("Insert_Réglement_Dont_reversements____12").disabled=true;
top.document.getElementById("Delete_Réglement_Dont_reversements____12").disabled=true;
top.document.getElementById("Update_Réglement_Dont_reversements____12").disabled=true;
 var Esclave_7=TAB_GLOBAL_COMPO[209];
 Esclave_7.ActiverComposant(false);
top.document.getElementById("Validate_Réglement_Liste_des_réglements0").disabled=true;
top.document.getElementById("Annuler_Réglement_Liste_des_réglements0").disabled=true;
top.document.getElementById("Insert_Réglement_Liste_des_réglements0").disabled=false;
top.document.getElementById("Delete_Réglement_Liste_des_réglements0").disabled=false;
top.document.getElementById("Update_Réglement_Liste_des_réglements0").disabled=false;
}

function Insert_Réglement_Factures_concernées_7()
{
 if (TAB_COMPO_PPTES[188].Action_en_cours == INSERT)
 	{
 		if (confirm("Pour continuer, vous devez enregistrer votre saisie\n Voulez vous poursuivre ?"))
		{
			var CleValide=Validate_Réglement_Liste_des_réglements0(false);
			if (CleValide==-1)
			{
				return -1;
			}
			CleValide=Update_Réglement_Liste_des_réglements0();
			if (CleValide==-1)
			{
				alert("Erreur l'enregistrement n'a pas étais correctement inséré");
				return -1;
			}
			Insert_Réglement_Factures_concernées_7();
		}
 		return;
 	}
 TAB_COMPO_PPTES[200].Action_en_cours = INSERT;
/* On calcule la nouvelle clé */
 TAB_COMPO_PPTES[200].NewCle = getNewCle("facturereglement");
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[200].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[205];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[206];
 Esclave_1.ActiverComposant(true);
 var Esclave_2=TAB_GLOBAL_COMPO[207];
 Esclave_2.ActiverComposant(true);
 var Esclave_3=TAB_GLOBAL_COMPO[208];
 Esclave_3.ActiverComposant(true);
top.document.getElementById("Validate_Réglement_Factures_concernées_7").disabled=false;
top.document.getElementById("Annuler_Réglement_Factures_concernées_7").disabled=false;
top.document.getElementById("Insert_Réglement_Factures_concernées_7").disabled=true;
top.document.getElementById("Delete_Réglement_Factures_concernées_7").disabled=true;
top.document.getElementById("Update_Réglement_Factures_concernées_7").disabled=true;
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

function Delete_Réglement_Factures_concernées_7()
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
 	User_Delete_Réglement_Factures_concernées_7(Maitre);
	Maitre.RefreshTotal();
 }
}

function Update_Réglement_Factures_concernées_7()
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
 var Esclave_0=TAB_GLOBAL_COMPO[205];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[206];
 Esclave_1.ActiverComposant(true);
 var Esclave_2=TAB_GLOBAL_COMPO[207];
 Esclave_2.ActiverComposant(true);
 var Esclave_3=TAB_GLOBAL_COMPO[208];
 Esclave_3.ActiverComposant(true);
top.document.getElementById("Validate_Réglement_Factures_concernées_7").disabled=false;
top.document.getElementById("Annuler_Réglement_Factures_concernées_7").disabled=false;
top.document.getElementById("Insert_Réglement_Factures_concernées_7").disabled=true;
top.document.getElementById("Delete_Réglement_Factures_concernées_7").disabled=true;
top.document.getElementById("Update_Réglement_Factures_concernées_7").disabled=true;
return TAB_COMPO_PPTES[200].NewCle;
}

function Validate_Réglement_Factures_concernées_7(retour)
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
	if ((NewCle = User_Insert_Réglement_Factures_concernées_7(Maitre))==-1)
		return -1;
	break;
	case UPDATE :
	if ((User_Update_Réglement_Factures_concernées_7(Maitre))==-1)
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
 var Esclave_0=TAB_GLOBAL_COMPO[205];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[206];
 Esclave_1.ActiverComposant(false);
 var Esclave_2=TAB_GLOBAL_COMPO[207];
 Esclave_2.ActiverComposant(false);
 var Esclave_3=TAB_GLOBAL_COMPO[208];
 Esclave_3.ActiverComposant(false);
top.document.getElementById("Validate_Réglement_Factures_concernées_7").disabled=true;
top.document.getElementById("Annuler_Réglement_Factures_concernées_7").disabled=true;
top.document.getElementById("Insert_Réglement_Factures_concernées_7").disabled=false;
top.document.getElementById("Delete_Réglement_Factures_concernées_7").disabled=false;
top.document.getElementById("Update_Réglement_Factures_concernées_7").disabled=false;
 if (NewCle==null)
 	NewCle=TAB_COMPO_PPTES[200].NewCle;
 Maitre.ForceNextSelection(NewCle)
 Maitre.RefreshTotal();
 if(retour)
 {
 }
 TAB_COMPO_PPTES[200].Action_en_cours = null;
 return NewCle;
}

function Annuler_Réglement_Factures_concernées_7()
{
 TAB_COMPO_PPTES[200].Action_en_cours = null;
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[200].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[205];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[206];
 Esclave_1.ActiverComposant(false);
 var Esclave_2=TAB_GLOBAL_COMPO[207];
 Esclave_2.ActiverComposant(false);
 var Esclave_3=TAB_GLOBAL_COMPO[208];
 Esclave_3.ActiverComposant(false);
top.document.getElementById("Validate_Réglement_Factures_concernées_7").disabled=true;
top.document.getElementById("Annuler_Réglement_Factures_concernées_7").disabled=true;
top.document.getElementById("Insert_Réglement_Factures_concernées_7").disabled=false;
top.document.getElementById("Delete_Réglement_Factures_concernées_7").disabled=false;
top.document.getElementById("Update_Réglement_Factures_concernées_7").disabled=false;
}

function Insert_Réglement_Dont_reversements____12()
{
 if (TAB_COMPO_PPTES[188].Action_en_cours == INSERT)
 	{
 		if (confirm("Pour continuer, vous devez enregistrer votre saisie\n Voulez vous poursuivre ?"))
		{
			var CleValide=Validate_Réglement_Liste_des_réglements0(false);
			if (CleValide==-1)
			{
				return -1;
			}
			CleValide=Update_Réglement_Liste_des_réglements0();
			if (CleValide==-1)
			{
				alert("Erreur l'enregistrement n'a pas étais correctement inséré");
				return -1;
			}
			Insert_Réglement_Dont_reversements____12();
		}
 		return;
 	}
 TAB_COMPO_PPTES[209].Action_en_cours = INSERT;
/* On calcule la nouvelle clé */
 TAB_COMPO_PPTES[209].NewCle = getNewCle("repartition");
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[209].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[212];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[213];
 Esclave_1.ActiverComposant(true);
top.document.getElementById("Validate_Réglement_Dont_reversements____12").disabled=false;
top.document.getElementById("Annuler_Réglement_Dont_reversements____12").disabled=false;
top.document.getElementById("Insert_Réglement_Dont_reversements____12").disabled=true;
top.document.getElementById("Delete_Réglement_Dont_reversements____12").disabled=true;
top.document.getElementById("Update_Réglement_Dont_reversements____12").disabled=true;
 var Maitre=TAB_GLOBAL_COMPO[209];
 /* Pour une insertion on désectionne */
 var tree=Maitre.getComposantXul();
 if (tree.view!=null)
 {
 	tree.currentIndex=-1;
 	tree.view.selection.clearSelection();
 }
return TAB_COMPO_PPTES[209].NewCle;
}

function Delete_Réglement_Dont_reversements____12()
{
 if (TAB_GLOBAL_COMPO[209].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement à suprimer");
 	return;
 }
 /* On recupère le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[209];
 if (confirm("Voulez vous vraiment supprimer l'enregistrement en cours ?"))
 {
	TAB_COMPO_PPTES[209].Action_en_cours = DELETE;
 	User_Delete_Réglement_Dont_reversements____12(Maitre);
	Maitre.RefreshTotal();
 }
}

function Update_Réglement_Dont_reversements____12()
{
 if (TAB_GLOBAL_COMPO[209].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement à mettre à jour");
 	return -1;
 }
 TAB_COMPO_PPTES[209].Action_en_cours = UPDATE;
/* On calcule la nouvelle clé */
 TAB_COMPO_PPTES[209].NewCle = TAB_GLOBAL_COMPO[209].getCleVal();
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[209].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[212];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[213];
 Esclave_1.ActiverComposant(true);
top.document.getElementById("Validate_Réglement_Dont_reversements____12").disabled=false;
top.document.getElementById("Annuler_Réglement_Dont_reversements____12").disabled=false;
top.document.getElementById("Insert_Réglement_Dont_reversements____12").disabled=true;
top.document.getElementById("Delete_Réglement_Dont_reversements____12").disabled=true;
top.document.getElementById("Update_Réglement_Dont_reversements____12").disabled=true;
return TAB_COMPO_PPTES[209].NewCle;
}

function Validate_Réglement_Dont_reversements____12(retour)
{
 /* Retour à l'onget appellant si appelle par gérer */
if (retour==null)
	retour=true;

 /* On recupère le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[209];
 /* On recupère la clé du nouvel enregistrement */
 var NewCle=null;
 switch(TAB_COMPO_PPTES[209].Action_en_cours){
	case INSERT :
	if ((NewCle = User_Insert_Réglement_Dont_reversements____12(Maitre))==-1)
		return -1;
	break;
	case UPDATE :
	if ((User_Update_Réglement_Dont_reversements____12(Maitre))==-1)
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
 TAB_GLOBAL_COMPO[209].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[212];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[213];
 Esclave_1.ActiverComposant(false);
top.document.getElementById("Validate_Réglement_Dont_reversements____12").disabled=true;
top.document.getElementById("Annuler_Réglement_Dont_reversements____12").disabled=true;
top.document.getElementById("Insert_Réglement_Dont_reversements____12").disabled=false;
top.document.getElementById("Delete_Réglement_Dont_reversements____12").disabled=false;
top.document.getElementById("Update_Réglement_Dont_reversements____12").disabled=false;
 if (NewCle==null)
 	NewCle=TAB_COMPO_PPTES[209].NewCle;
 Maitre.ForceNextSelection(NewCle)
 Maitre.RefreshTotal();
 if(retour)
 {
 }
 TAB_COMPO_PPTES[209].Action_en_cours = null;
 return NewCle;
}

function Annuler_Réglement_Dont_reversements____12()
{
 TAB_COMPO_PPTES[209].Action_en_cours = null;
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[209].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[212];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[213];
 Esclave_1.ActiverComposant(false);
top.document.getElementById("Validate_Réglement_Dont_reversements____12").disabled=true;
top.document.getElementById("Annuler_Réglement_Dont_reversements____12").disabled=true;
top.document.getElementById("Insert_Réglement_Dont_reversements____12").disabled=false;
top.document.getElementById("Delete_Réglement_Dont_reversements____12").disabled=false;
top.document.getElementById("Update_Réglement_Dont_reversements____12").disabled=false;
}






/* *********************************************** 
         FONCTIONS POUR L'ONGLET Routage
   ***********************************************/ 

 /* FILTRES DE RELATION ENTRE ONGLETS => VARIABLES GLOBALES POUR ETRE ACCESSIBLES DEPUIS INTERFACE_USER.JS */

function OuvrirOnglet_Routage()
{
 var tabs = top.document.getElementById("Tous_les_onglets");
 tabs.selectedItem = top.document.getElementById("Onglet_Routage");
}






/* *********************************************** 
         FONCTIONS POUR L'ONGLET Relances
   ***********************************************/ 

 /* FILTRES DE RELATION ENTRE ONGLETS => VARIABLES GLOBALES POUR ETRE ACCESSIBLES DEPUIS INTERFACE_USER.JS */

function OuvrirOnglet_Relances()
{
 var tabs = top.document.getElementById("Tous_les_onglets");
 tabs.selectedItem = top.document.getElementById("Onglet_Relances");
}






/* *********************************************** 
         FONCTIONS POUR L'ONGLET Vérification
   ***********************************************/ 

 /* FILTRES DE RELATION ENTRE ONGLETS => VARIABLES GLOBALES POUR ETRE ACCESSIBLES DEPUIS INTERFACE_USER.JS */

function OuvrirOnglet_Vérification()
{
 var tabs = top.document.getElementById("Tous_les_onglets");
 tabs.selectedItem = top.document.getElementById("Onglet_Vérification");
}

function Insert_Vérification_Liste_des_modifications_sur_les_personnes0()
{
 TAB_COMPO_PPTES[238].Action_en_cours = INSERT;
/* On calcule la nouvelle clé */
 TAB_COMPO_PPTES[238].NewCle = getNewCle("personneupdate");
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[238].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[245];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[246];
 Esclave_1.ActiverComposant(true);
 var Esclave_2=TAB_GLOBAL_COMPO[247];
 Esclave_2.ActiverComposant(true);
 var Esclave_3=TAB_GLOBAL_COMPO[248];
 Esclave_3.ActiverComposant(true);
 var Esclave_4=TAB_GLOBAL_COMPO[249];
 Esclave_4.ActiverComposant(true);
 var Esclave_5=TAB_GLOBAL_COMPO[250];
 Esclave_5.ActiverComposant(true);
 var Esclave_6=TAB_GLOBAL_COMPO[251];
 Esclave_6.ActiverComposant(true);
 var Esclave_7=TAB_GLOBAL_COMPO[252];
 Esclave_7.ActiverComposant(true);
 var Esclave_8=TAB_GLOBAL_COMPO[253];
 Esclave_8.ActiverComposant(true);
 var Esclave_9=TAB_GLOBAL_COMPO[254];
 Esclave_9.ActiverComposant(true);
 var Esclave_10=TAB_GLOBAL_COMPO[255];
 Esclave_10.ActiverComposant(true);
 var Esclave_11=TAB_GLOBAL_COMPO[256];
 Esclave_11.ActiverComposant(true);
 var Esclave_12=TAB_GLOBAL_COMPO[257];
 Esclave_12.ActiverComposant(true);
 var Esclave_13=TAB_GLOBAL_COMPO[258];
 Esclave_13.ActiverComposant(true);
top.document.getElementById("Validate_Vérification_Liste_des_modifications_sur_les_personnes0").disabled=false;
top.document.getElementById("Annuler_Vérification_Liste_des_modifications_sur_les_personnes0").disabled=false;
top.document.getElementById("Insert_Vérification_Liste_des_modifications_sur_les_personnes0").disabled=true;
top.document.getElementById("Delete_Vérification_Liste_des_modifications_sur_les_personnes0").disabled=true;
top.document.getElementById("Update_Vérification_Liste_des_modifications_sur_les_personnes0").disabled=true;
 var Maitre=TAB_GLOBAL_COMPO[238];
 /* Pour une insertion on désectionne */
 var tree=Maitre.getComposantXul();
 if (tree.view!=null)
 {
 	tree.currentIndex=-1;
 	tree.view.selection.clearSelection();
 }
return TAB_COMPO_PPTES[238].NewCle;
}

function Delete_Vérification_Liste_des_modifications_sur_les_personnes0()
{
 if (TAB_GLOBAL_COMPO[238].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement à suprimer");
 	return;
 }
 /* On recupère le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[238];
 if (confirm("Voulez vous vraiment supprimer l'enregistrement en cours ?"))
 {
	TAB_COMPO_PPTES[238].Action_en_cours = DELETE;
 	User_Delete_Vérification_Liste_des_modifications_sur_les_personnes0(Maitre);
	Maitre.RefreshTotal();
 }
}

function Update_Vérification_Liste_des_modifications_sur_les_personnes0()
{
 if (TAB_GLOBAL_COMPO[238].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement à mettre à jour");
 	return -1;
 }
 TAB_COMPO_PPTES[238].Action_en_cours = UPDATE;
/* On calcule la nouvelle clé */
 TAB_COMPO_PPTES[238].NewCle = TAB_GLOBAL_COMPO[238].getCleVal();
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[238].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[245];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[246];
 Esclave_1.ActiverComposant(true);
 var Esclave_2=TAB_GLOBAL_COMPO[247];
 Esclave_2.ActiverComposant(true);
 var Esclave_3=TAB_GLOBAL_COMPO[248];
 Esclave_3.ActiverComposant(true);
 var Esclave_4=TAB_GLOBAL_COMPO[249];
 Esclave_4.ActiverComposant(true);
 var Esclave_5=TAB_GLOBAL_COMPO[250];
 Esclave_5.ActiverComposant(true);
 var Esclave_6=TAB_GLOBAL_COMPO[251];
 Esclave_6.ActiverComposant(true);
 var Esclave_7=TAB_GLOBAL_COMPO[252];
 Esclave_7.ActiverComposant(true);
 var Esclave_8=TAB_GLOBAL_COMPO[253];
 Esclave_8.ActiverComposant(true);
 var Esclave_9=TAB_GLOBAL_COMPO[254];
 Esclave_9.ActiverComposant(true);
 var Esclave_10=TAB_GLOBAL_COMPO[255];
 Esclave_10.ActiverComposant(true);
 var Esclave_11=TAB_GLOBAL_COMPO[256];
 Esclave_11.ActiverComposant(true);
 var Esclave_12=TAB_GLOBAL_COMPO[257];
 Esclave_12.ActiverComposant(true);
 var Esclave_13=TAB_GLOBAL_COMPO[258];
 Esclave_13.ActiverComposant(true);
top.document.getElementById("Validate_Vérification_Liste_des_modifications_sur_les_personnes0").disabled=false;
top.document.getElementById("Annuler_Vérification_Liste_des_modifications_sur_les_personnes0").disabled=false;
top.document.getElementById("Insert_Vérification_Liste_des_modifications_sur_les_personnes0").disabled=true;
top.document.getElementById("Delete_Vérification_Liste_des_modifications_sur_les_personnes0").disabled=true;
top.document.getElementById("Update_Vérification_Liste_des_modifications_sur_les_personnes0").disabled=true;
return TAB_COMPO_PPTES[238].NewCle;
}

function Validate_Vérification_Liste_des_modifications_sur_les_personnes0(retour)
{
 /* Retour à l'onget appellant si appelle par gérer */
if (retour==null)
	retour=true;

 /* On recupère le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[238];
 /* On recupère la clé du nouvel enregistrement */
 var NewCle=null;
 switch(TAB_COMPO_PPTES[238].Action_en_cours){
	case INSERT :
	if ((NewCle = User_Insert_Vérification_Liste_des_modifications_sur_les_personnes0(Maitre))==-1)
		return -1;
	break;
	case UPDATE :
	if ((User_Update_Vérification_Liste_des_modifications_sur_les_personnes0(Maitre))==-1)
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
 TAB_GLOBAL_COMPO[238].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[245];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[246];
 Esclave_1.ActiverComposant(false);
 var Esclave_2=TAB_GLOBAL_COMPO[247];
 Esclave_2.ActiverComposant(false);
 var Esclave_3=TAB_GLOBAL_COMPO[248];
 Esclave_3.ActiverComposant(false);
 var Esclave_4=TAB_GLOBAL_COMPO[249];
 Esclave_4.ActiverComposant(false);
 var Esclave_5=TAB_GLOBAL_COMPO[250];
 Esclave_5.ActiverComposant(false);
 var Esclave_6=TAB_GLOBAL_COMPO[251];
 Esclave_6.ActiverComposant(false);
 var Esclave_7=TAB_GLOBAL_COMPO[252];
 Esclave_7.ActiverComposant(false);
 var Esclave_8=TAB_GLOBAL_COMPO[253];
 Esclave_8.ActiverComposant(false);
 var Esclave_9=TAB_GLOBAL_COMPO[254];
 Esclave_9.ActiverComposant(false);
 var Esclave_10=TAB_GLOBAL_COMPO[255];
 Esclave_10.ActiverComposant(false);
 var Esclave_11=TAB_GLOBAL_COMPO[256];
 Esclave_11.ActiverComposant(false);
 var Esclave_12=TAB_GLOBAL_COMPO[257];
 Esclave_12.ActiverComposant(false);
 var Esclave_13=TAB_GLOBAL_COMPO[258];
 Esclave_13.ActiverComposant(false);
top.document.getElementById("Validate_Vérification_Liste_des_modifications_sur_les_personnes0").disabled=true;
top.document.getElementById("Annuler_Vérification_Liste_des_modifications_sur_les_personnes0").disabled=true;
top.document.getElementById("Insert_Vérification_Liste_des_modifications_sur_les_personnes0").disabled=false;
top.document.getElementById("Delete_Vérification_Liste_des_modifications_sur_les_personnes0").disabled=false;
top.document.getElementById("Update_Vérification_Liste_des_modifications_sur_les_personnes0").disabled=false;
 if (NewCle==null)
 	NewCle=TAB_COMPO_PPTES[238].NewCle;
 Maitre.ForceNextSelection(NewCle)
 Maitre.RefreshTotal();
 if(retour)
 {
 }
 TAB_COMPO_PPTES[238].Action_en_cours = null;
 return NewCle;
}

function Annuler_Vérification_Liste_des_modifications_sur_les_personnes0()
{
 TAB_COMPO_PPTES[238].Action_en_cours = null;
/* On désactive le composant maitre */
 TAB_GLOBAL_COMPO[238].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[245];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[246];
 Esclave_1.ActiverComposant(false);
 var Esclave_2=TAB_GLOBAL_COMPO[247];
 Esclave_2.ActiverComposant(false);
 var Esclave_3=TAB_GLOBAL_COMPO[248];
 Esclave_3.ActiverComposant(false);
 var Esclave_4=TAB_GLOBAL_COMPO[249];
 Esclave_4.ActiverComposant(false);
 var Esclave_5=TAB_GLOBAL_COMPO[250];
 Esclave_5.ActiverComposant(false);
 var Esclave_6=TAB_GLOBAL_COMPO[251];
 Esclave_6.ActiverComposant(false);
 var Esclave_7=TAB_GLOBAL_COMPO[252];
 Esclave_7.ActiverComposant(false);
 var Esclave_8=TAB_GLOBAL_COMPO[253];
 Esclave_8.ActiverComposant(false);
 var Esclave_9=TAB_GLOBAL_COMPO[254];
 Esclave_9.ActiverComposant(false);
 var Esclave_10=TAB_GLOBAL_COMPO[255];
 Esclave_10.ActiverComposant(false);
 var Esclave_11=TAB_GLOBAL_COMPO[256];
 Esclave_11.ActiverComposant(false);
 var Esclave_12=TAB_GLOBAL_COMPO[257];
 Esclave_12.ActiverComposant(false);
 var Esclave_13=TAB_GLOBAL_COMPO[258];
 Esclave_13.ActiverComposant(false);
top.document.getElementById("Validate_Vérification_Liste_des_modifications_sur_les_personnes0").disabled=true;
top.document.getElementById("Annuler_Vérification_Liste_des_modifications_sur_les_personnes0").disabled=true;
top.document.getElementById("Insert_Vérification_Liste_des_modifications_sur_les_personnes0").disabled=false;
top.document.getElementById("Delete_Vérification_Liste_des_modifications_sur_les_personnes0").disabled=false;
top.document.getElementById("Update_Vérification_Liste_des_modifications_sur_les_personnes0").disabled=false;
}





function gestsea_principal_Chargement()
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
var Col_N0_Nom_De_Personnes_Liste_des_personnes0=new clAttribut("pe_fullname","personne",null);

var Col_N1_N_Pers__De_Personnes_Liste_des_personnes0=new clAttribut("pe_numpersonne","personne",null);

var Col_N2_Tél__De_Personnes_Liste_des_personnes0=new clAttribut("pe_telephone","personne",null);

var Col_N3_Fax_De_Personnes_Liste_des_personnes0=new clAttribut("pe_fax","personne",null);

var Col_N4_Canton_De_Personnes_Liste_des_personnes0=new clAttribut("ct_nom","personne",null);

var Col_N5_Adresse_De_Personnes_Liste_des_personnes0=new clAttribut("pe_adresse","personne",null);

var Personnes_Titre_1=new clAttribut("pe_titre","personne",null);


	/* Ce composant représente: personne.pe_titre sous le nom "Titre" */
var Compo_Personnes_Titre_1=new clCompoTextBox(Personnes_Titre_1,null,"Titre",false,false);
var Personnes_Nom_2=new clAttribut("pe_nom","personne",null);


	/* Ce composant représente: personne.pe_nom sous le nom "Nom" */
var Compo_Personnes_Nom_2=new clCompoTextBox(Personnes_Nom_2,null,"Nom",false,false);
var Personnes_Prénom_3=new clAttribut("pe_prenom","personne",null);


	/* Ce composant représente: personne.pe_prenom sous le nom "Prénom" */
var Compo_Personnes_Prénom_3=new clCompoTextBox(Personnes_Prénom_3,null,"Prénom",false,false);
var Personnes_Complément_4=new clAttribut("pe_complement","personne",null);


	/* Ce composant représente: personne.pe_complement sous le nom "Complément" */
var Compo_Personnes_Complément_4=new clCompoTextBox(Personnes_Complément_4,null,"Complément",false,false);
var Personnes_Entité_morale_5=new clAttribut("pe_morale","personne",null);


	/* Ce composant représente: personne.pe_morale sous le nom "Entité morale" */
var Compo_Personnes_Entité_morale_5=new clCompoCheckBox(Personnes_Entité_morale_5,null,"Entité morale");
var Personnes_Date_de_naissance_6=new clAttribut("pe_naissance","personne",null);


	/* Ce composant représente: personne.pe_naissance sous le nom "Date de naissance" */
var Compo_Personnes_Date_de_naissance_6=new clCompoTextBox(Personnes_Date_de_naissance_6,null,"Date de naissance",false,false);
var Personnes_Etat_7=new clAttribut("ep_libelle","etatpersonne",null);


	/* Ce composant représente: etatpersonne.ep_libelle sous le nom "Etat" */
var Compo_Personnes_Etat_7=new clCompoListeDeroulanteSimple(Personnes_Etat_7,null,"Etat");
var Joint_Esclave_Personnes_Etat_7=new clJointureMulti("personne",
	new Array(
	new stJointure("etatpersonne","ep_numero","ep_numero",null,false)
	));
var Personnes_Type_8=new clAttribut("tp_type","typepersonne",null);


	/* Ce composant représente: typepersonne.tp_type sous le nom "Type" */
var Compo_Personnes_Type_8=new clCompoListeDeroulanteSimple(Personnes_Type_8,null,"Type");
var Joint_Esclave_Personnes_Type_8=new clJointureMulti("personne",
	new Array(
	new stJointure("typepersonne","tp_numero","tp_numero",null,false)
	));
var Personnes_Régime_fiscal_9=new clAttribut("pe_regimefiscal","personne",null);


	/* Ce composant représente: personne.pe_regimefiscal sous le nom "Régime fiscal" */
var Compo_Personnes_Régime_fiscal_9=new clCompoListeDeroulanteStatic(Personnes_Régime_fiscal_9,null,"Régime fiscal",new Array('FORFAIT','NON RENSEIGNE','REEL'));
var Col_N0_Libellé_De_Personnes_Adhésions_10=new clAttribut("ah_libelle","adherence",null);

var Joint_Col_N0_Libellé_De_Personnes_Adhésions_10=new clJointureMulti("adhesion",
	new Array(
	new stJointure("adherence","ah_numero","ah_numero",null,true)
	));
var Col_N1_Du_De_Personnes_Adhésions_10=new clAttribut("po_debut","periode",null);

var Joint_Col_N1_Du_De_Personnes_Adhésions_10=new clJointureMulti("adhesion",
	new Array(
	new stJointure("periode","po_numero","po_numero",null,true)
	));
var Col_N2_Au_De_Personnes_Adhésions_10=new clAttribut("po_fin","periode",null);

var Joint_Col_N2_Au_De_Personnes_Adhésions_10=new clJointureMulti("adhesion",
	new Array(
	new stJointure("periode","po_numero","po_numero",null,true)
	));
var Col_N3_Active_De_Personnes_Adhésions_10=new clAttribut("as_active","adhesion",null);

var Personnes_Adhésions_10=new clEnsembleAttributs("adhesion",
	new Array(
	new clLiaison(Joint_Col_N0_Libellé_De_Personnes_Adhésions_10,Col_N0_Libellé_De_Personnes_Adhésions_10)
	,new clLiaison(Joint_Col_N1_Du_De_Personnes_Adhésions_10,Col_N1_Du_De_Personnes_Adhésions_10)
	,new clLiaison(Joint_Col_N2_Au_De_Personnes_Adhésions_10,Col_N2_Au_De_Personnes_Adhésions_10)
	,new clLiaison(null,Col_N3_Active_De_Personnes_Adhésions_10)
	),
	null);

var Titre_Personnes_Adhésions_10=new Array("Libellé","Du","Au","Active");

	/* Ce composant représente: des éléments de la table adhesion sous le nom "Adhésions" */
var Compo_Personnes_Adhésions_10=new clCompoListe(Personnes_Adhésions_10,null,Titre_Personnes_Adhésions_10,"Adhésions",true,false);
var Joint_Esclave_Personnes_Adhésions_10=new clJointureMulti("personne",
	new Array(
	new stJointure("adhesion","pe_numero","pe_numero",null,false)
	));
var Col_N0_Importance_De_Personnes_Observations_11=new clAttribut("ob_niveau","observation",null);

var Col_N1_Description_De_Personnes_Observations_11=new clAttribut("ob_observation","observation",null);

var Personnes_Importance_12=new clAttribut("ob_niveau","observation",null);


	/* Ce composant représente: observation.ob_niveau sous le nom "Importance" */
var Compo_Personnes_Importance_12=new clCompoTextBox(Personnes_Importance_12,null,"Importance",false,false);
var Personnes_Description_13=new clAttribut("ob_observation","observation",null);


	/* Ce composant représente: observation.ob_observation sous le nom "Description" */
var Compo_Personnes_Description_13=new clCompoTextBox(Personnes_Description_13,null,"Description",false,true);
var Personnes_Observations_11=new clEnsembleAttributs("observation",
	new Array(
	new clLiaison(null,Col_N0_Importance_De_Personnes_Observations_11)
	,new clLiaison(null,Col_N1_Description_De_Personnes_Observations_11)
	),
	new Array(
	new clLiaison(null,Personnes_Importance_12)
	,new clLiaison(null,Personnes_Description_13)
	));

var Titre_Personnes_Observations_11=new Array("Importance","Description");

	/* Ce composant représente: des éléments de la table observation sous le nom "Observations" */
var Compo_Personnes_Observations_11=new clCompoListe(Personnes_Observations_11,null,Titre_Personnes_Observations_11,"Observations",true,false);
var Joint_Esclave_Personnes_Observations_11=new clJointureMulti("personne",
	new Array(
	new stJointure("observation","pe_numero","pe_numero",null,false)
	));
var Col_N0_Uti__De_Personnes_Adresses_14=new clAttribut("ad_encours","adresse",null);

var Col_N1_Type_De_Personnes_Adresses_14=new clAttribut("ad_type","adresse",null);

var Col_N2_Ligne_n_1_De_Personnes_Adresses_14=new clAttribut("ad_addr1","adresse",null);

var Col_N3_Ligne_n_2_De_Personnes_Adresses_14=new clAttribut("ad_addr2","adresse",null);

var Col_N4_Ligne_n_3_De_Personnes_Adresses_14=new clAttribut("ad_addr3","adresse",null);

var Col_N5_Code_postal_De_Personnes_Adresses_14=new clAttribut("cp_codepostal","codepostal",null);

var Joint_Col_N5_Code_postal_De_Personnes_Adresses_14=new clJointureMulti("adresse",
	new Array(
	new stJointure("codepostal","cp_numero","cp_numero",null,true)
	));
var Col_N6_Ville_De_Personnes_Adresses_14=new clAttribut("vi_nom","ville",null);

var Joint_Col_N6_Ville_De_Personnes_Adresses_14=new clJointureMulti("adresse",
	new Array(
	new stJointure("ville","vi_numero","vi_numero",null,true)
	));
var Col_N7_Canton_De_Personnes_Adresses_14=new clAttribut("ct_nom","canton",null);

var Joint_Col_N7_Canton_De_Personnes_Adresses_14=new clJointureMulti("adresse",
	new Array(
	new stJointure("ville","vi_numero","vi_numero",null,true)
	,new stJointure("canton","ct_numero","ct_numero",null,true)
	));
var Personnes_Ligne_n_1_15=new clAttribut("ad_addr1","adresse",null);


	/* Ce composant représente: adresse.ad_addr1 sous le nom "Ligne n°1" */
var Compo_Personnes_Ligne_n_1_15=new clCompoTextBox(Personnes_Ligne_n_1_15,null,"Ligne n°1",false,false);
var Personnes_Ligne_n_2_16=new clAttribut("ad_addr2","adresse",null);


	/* Ce composant représente: adresse.ad_addr2 sous le nom "Ligne n°2" */
var Compo_Personnes_Ligne_n_2_16=new clCompoTextBox(Personnes_Ligne_n_2_16,null,"Ligne n°2",false,false);
var Personnes_Ligne_n_3_17=new clAttribut("ad_addr3","adresse",null);


	/* Ce composant représente: adresse.ad_addr3 sous le nom "Ligne n°3" */
var Compo_Personnes_Ligne_n_3_17=new clCompoTextBox(Personnes_Ligne_n_3_17,null,"Ligne n°3",false,false);
var Personnes_Adresse_en_cours_18=new clAttribut("ad_active","adresse",null);


	/* Ce composant représente: adresse.ad_active sous le nom "Adresse en cours" */
var Compo_Personnes_Adresse_en_cours_18=new clCompoCheckBox(Personnes_Adresse_en_cours_18,null,"Adresse en cours");
var Personnes_Date_de_fin_19=new clAttribut("ad_datestop","adresse",null);


	/* Ce composant représente: adresse.ad_datestop sous le nom "Date de fin" */
var Compo_Personnes_Date_de_fin_19=new clCompoTextBox(Personnes_Date_de_fin_19,null,"Date de fin",false,false);
var Personnes_Type_20=new clAttribut("ad_type","adresse",null);


	/* Ce composant représente: adresse.ad_type sous le nom "Type" */
var Compo_Personnes_Type_20=new clCompoListeDeroulanteStatic(Personnes_Type_20,null,"Type",new Array('DEFAUT','COURRIER','PERSONNELLE','PROFESSIONNELLE'));
var Personnes_Code_postal_21=new clAttribut("cp_codepostal","codepostal",null);


	/* Ce composant représente: codepostal.cp_codepostal sous le nom "Code postal" */
var Compo_Personnes_Code_postal_21=new clCompoListeDeroulanteSimple(Personnes_Code_postal_21,new Array(clCompoListeDeroulanteSimple.prototype.FiltreParDefaut(),Filtre_CP_Personne=new clInterfaceFiltrageContenuHautBas()),"Code postal");
var Joint_Esclave_Personnes_Code_postal_21=new clJointureMulti("adresse",
	new Array(
	new stJointure("codepostal","cp_numero","cp_numero",null,false)
	));
var Personnes_Ville_22=new clAttribut("vi_nom","ville",null);


	/* Ce composant représente: ville.vi_nom sous le nom "Ville" */
var Compo_Personnes_Ville_22=new clCompoListeDeroulanteSimple(Personnes_Ville_22,new Array(clCompoListeDeroulanteSimple.prototype.FiltreParDefaut(),Filtre_Ville_Personne=new clInterfaceFiltrageContenuHautBas(Filtre_CP_Personne)),"Ville");
var Joint_Esclave_Personnes_Ville_22=new clJointureMulti("adresse",
	new Array(
	new stJointure("ville","vi_numero","vi_numero",null,false)
	));
var Personnes_Adresses_14=new clEnsembleAttributs("adresse",
	new Array(
	new clLiaison(null,Col_N0_Uti__De_Personnes_Adresses_14)
	,new clLiaison(null,Col_N1_Type_De_Personnes_Adresses_14)
	,new clLiaison(null,Col_N2_Ligne_n_1_De_Personnes_Adresses_14)
	,new clLiaison(null,Col_N3_Ligne_n_2_De_Personnes_Adresses_14)
	,new clLiaison(null,Col_N4_Ligne_n_3_De_Personnes_Adresses_14)
	,new clLiaison(Joint_Col_N5_Code_postal_De_Personnes_Adresses_14,Col_N5_Code_postal_De_Personnes_Adresses_14)
	,new clLiaison(Joint_Col_N6_Ville_De_Personnes_Adresses_14,Col_N6_Ville_De_Personnes_Adresses_14)
	,new clLiaison(Joint_Col_N7_Canton_De_Personnes_Adresses_14,Col_N7_Canton_De_Personnes_Adresses_14)
	),
	new Array(
	new clLiaison(null,Personnes_Ligne_n_1_15)
	,new clLiaison(null,Personnes_Ligne_n_2_16)
	,new clLiaison(null,Personnes_Ligne_n_3_17)
	,new clLiaison(null,Personnes_Adresse_en_cours_18)
	,new clLiaison(null,Personnes_Date_de_fin_19)
	,new clLiaison(null,Personnes_Type_20)
	,new clLiaison(Joint_Esclave_Personnes_Code_postal_21,Personnes_Code_postal_21)
	,new clLiaison(Joint_Esclave_Personnes_Ville_22,Personnes_Ville_22)
	));

var Titre_Personnes_Adresses_14=new Array("Uti.","Type","Ligne n°1","Ligne n°2","Ligne n°3","Code postal","Ville","Canton");

	/* Ce composant représente: des éléments de la table adresse sous le nom "Adresses" */
var Compo_Personnes_Adresses_14=new clCompoListe(Personnes_Adresses_14,null,Titre_Personnes_Adresses_14,"Adresses",true,false);
var Joint_Esclave_Personnes_Adresses_14=new clJointureMulti("personne",
	new Array(
	new stJointure("adresse","pe_numero","pe_numero",null,false)
	));
var Col_N0_Status_De_Personnes_Contact_23=new clAttribut("ej_etat","estjoignable",null);

var Col_N1_Type_De_Personnes_Contact_23=new clAttribut("cn_type","contact",null);

var Joint_Col_N1_Type_De_Personnes_Contact_23=new clJointureMulti("estjoignable",
	new Array(
	new stJointure("contact","cn_numero","cn_numero",null,true)
	));
var Col_N2_Coordonnées_De_Personnes_Contact_23=new clAttribut("cn_coordonnee","contact",null);

var Joint_Col_N2_Coordonnées_De_Personnes_Contact_23=new clJointureMulti("estjoignable",
	new Array(
	new stJointure("contact","cn_numero","cn_numero",null,true)
	));
var Personnes_Coordonnée_24=new clAttribut("cn_coordonnee","contact",null);


	/* Ce composant représente: contact.cn_coordonnee sous le nom "Coordonnée" */
var Compo_Personnes_Coordonnée_24=new clCompoListeDeroulanteSimple(Personnes_Coordonnée_24,new Array(clCompoListeDeroulanteSimple.prototype.FiltreParDefaut(),Filtre_Dep_Contacts_0=new clInterfaceFiltrageRelationOnglet("Contacts",Gerer_Contacts,OuvrirOnglet_Personnes)),"Coordonnée");
var Joint_Esclave_Personnes_Coordonnée_24=new clJointureMulti("estjoignable",
	new Array(
	new stJointure("contact","cn_numero","cn_numero",null,false)
	));
var Personnes_Actif_25=new clAttribut("ej_actif","estjoignable",null);


	/* Ce composant représente: estjoignable.ej_actif sous le nom "Actif" */
var Compo_Personnes_Actif_25=new clCompoCheckBox(Personnes_Actif_25,null,"Actif");
var Personnes_Contact_23=new clEnsembleAttributs("estjoignable",
	new Array(
	new clLiaison(null,Col_N0_Status_De_Personnes_Contact_23)
	,new clLiaison(Joint_Col_N1_Type_De_Personnes_Contact_23,Col_N1_Type_De_Personnes_Contact_23)
	,new clLiaison(Joint_Col_N2_Coordonnées_De_Personnes_Contact_23,Col_N2_Coordonnées_De_Personnes_Contact_23)
	),
	new Array(
	new clLiaison(Joint_Esclave_Personnes_Coordonnée_24,Personnes_Coordonnée_24)
	,new clLiaison(null,Personnes_Actif_25)
	));

var Titre_Personnes_Contact_23=new Array("Status","Type","Coordonnées");

	/* Ce composant représente: des éléments de la table estjoignable sous le nom "Contact" */
var Compo_Personnes_Contact_23=new clCompoListe(Personnes_Contact_23,null,Titre_Personnes_Contact_23,"Contact",true,false);
var Joint_Esclave_Personnes_Contact_23=new clJointureMulti("personne",
	new Array(
	new stJointure("estjoignable","pe_numero","pe_numero",null,false)
	));
var Col_N0_Date_De_Personnes_Tâches_26=new clAttribut("ap_date","appel",null);

var Col_N1_Type_De_Personnes_Tâches_26=new clAttribut("th_libelle","typetache",null);

var Joint_Col_N1_Type_De_Personnes_Tâches_26=new clJointureMulti("appel",
	new Array(
	new stJointure("typetache","th_numero","th_numero",null,true)
	));
var Col_N2_Motif_De_Personnes_Tâches_26=new clAttribut("ap_libelle","appel",null);

var Col_N3_Durée__min__De_Personnes_Tâches_26=new clAttribut("ap_duree","appel",null);

var Col_N4_Login_De_Personnes_Tâches_26=new clAttribut("update_user","appel",null);

var Personnes_Date_27=new clAttribut("ap_date","appel",null);


	/* Ce composant représente: appel.ap_date sous le nom "Date" */
var Compo_Personnes_Date_27=new clCompoTextBox(Personnes_Date_27,null,"Date",false,false);
var Personnes_Type_28=new clAttribut("th_libelle","typetache",null);


	/* Ce composant représente: typetache.th_libelle sous le nom "Type" */
var Compo_Personnes_Type_28=new clCompoListeDeroulanteSimple(Personnes_Type_28,null,"Type");
var Joint_Esclave_Personnes_Type_28=new clJointureMulti("appel",
	new Array(
	new stJointure("typetache","th_numero","th_numero",null,false)
	));
var Personnes_Motif_29=new clAttribut("ap_libelle","appel",null);


	/* Ce composant représente: appel.ap_libelle sous le nom "Motif" */
var Compo_Personnes_Motif_29=new clCompoTextBox(Personnes_Motif_29,null,"Motif",false,false);
var Personnes_Durée__min__30=new clAttribut("ap_duree","appel",null);


	/* Ce composant représente: appel.ap_duree sous le nom "Durée (min)" */
var Compo_Personnes_Durée__min__30=new clCompoTextBox(Personnes_Durée__min__30,null,"Durée (min)",false,false);
var Personnes_Détails_complémentaires_31=new clAttribut("ap_description","appel",null);


	/* Ce composant représente: appel.ap_description sous le nom "Détails complémentaires" */
var Compo_Personnes_Détails_complémentaires_31=new clCompoTextBox(Personnes_Détails_complémentaires_31,null,"Détails complémentaires",false,true);
var Personnes_Tâches_26=new clEnsembleAttributs("appel",
	new Array(
	new clLiaison(null,Col_N0_Date_De_Personnes_Tâches_26)
	,new clLiaison(Joint_Col_N1_Type_De_Personnes_Tâches_26,Col_N1_Type_De_Personnes_Tâches_26)
	,new clLiaison(null,Col_N2_Motif_De_Personnes_Tâches_26)
	,new clLiaison(null,Col_N3_Durée__min__De_Personnes_Tâches_26)
	,new clLiaison(null,Col_N4_Login_De_Personnes_Tâches_26)
	),
	new Array(
	new clLiaison(null,Personnes_Date_27)
	,new clLiaison(Joint_Esclave_Personnes_Type_28,Personnes_Type_28)
	,new clLiaison(null,Personnes_Motif_29)
	,new clLiaison(null,Personnes_Durée__min__30)
	,new clLiaison(null,Personnes_Détails_complémentaires_31)
	));

var Titre_Personnes_Tâches_26=new Array("Date","Type","Motif","Durée (min)","Login");

	/* Ce composant représente: des éléments de la table appel sous le nom "Tâches" */
var Compo_Personnes_Tâches_26=new clCompoListe(Personnes_Tâches_26,null,Titre_Personnes_Tâches_26,"Tâches",true,false);
var Joint_Esclave_Personnes_Tâches_26=new clJointureMulti("personne",
	new Array(
	new stJointure("appel","pe_numero","pe_numero",null,false)
	));
var Col_N0_Status_De_Personnes_Responsabilités_32=new clAttribut("peac_fini","estresponsable",null);

var Col_N1_Nom_De_Personnes_Responsabilités_32=new clAttribut("re_nom","responsabilite",null);

var Joint_Col_N1_Nom_De_Personnes_Responsabilités_32=new clJointureMulti("estresponsable",
	new Array(
	new stJointure("responsabilite","re_numero","re_numero",null,true)
	));
var Col_N2_Famille_De_Personnes_Responsabilités_32=new clAttribut("re_famille","responsabilite",null);

var Joint_Col_N2_Famille_De_Personnes_Responsabilités_32=new clJointureMulti("estresponsable",
	new Array(
	new stJointure("responsabilite","re_numero","re_numero",null,true)
	));
var Col_N3_Code_De_Personnes_Responsabilités_32=new clAttribut("re_code","responsabilite",null);

var Joint_Col_N3_Code_De_Personnes_Responsabilités_32=new clJointureMulti("estresponsable",
	new Array(
	new stJointure("responsabilite","re_numero","re_numero",null,true)
	));
var Col_N4_Du_De_Personnes_Responsabilités_32=new clAttribut("peac_periodedebut","estresponsable",null);

var Col_N5_Au_De_Personnes_Responsabilités_32=new clAttribut("peac_periodefin","estresponsable",null);

var Personnes_Responsabilité_33=new clAttribut("re_nom","responsabilite",null);


	/* Ce composant représente: responsabilite.re_nom sous le nom "Responsabilité" */
var Compo_Personnes_Responsabilité_33=new clCompoListeDeroulanteSimple(Personnes_Responsabilité_33,null,"Responsabilité");
var Joint_Esclave_Personnes_Responsabilité_33=new clJointureMulti("estresponsable",
	new Array(
	new stJointure("responsabilite","re_numero","re_numero",null,false)
	));
var Personnes_Titre_34=new clAttribut("peac_titre","estresponsable",null);


	/* Ce composant représente: estresponsable.peac_titre sous le nom "Titre" */
var Compo_Personnes_Titre_34=new clCompoTextBox(Personnes_Titre_34,null,"Titre",false,false);
var Personnes_Du_35=new clAttribut("peac_periodedebut","estresponsable",null);


	/* Ce composant représente: estresponsable.peac_periodedebut sous le nom "Du" */
var Compo_Personnes_Du_35=new clCompoTextBox(Personnes_Du_35,null,"Du",false,false);
var Personnes_Au_36=new clAttribut("peac_periodefin","estresponsable",null);


	/* Ce composant représente: estresponsable.peac_periodefin sous le nom "Au" */
var Compo_Personnes_Au_36=new clCompoTextBox(Personnes_Au_36,null,"Au",false,false);
var Personnes_Fin_de_mandat_37=new clAttribut("peac_fini","estresponsable",null);


	/* Ce composant représente: estresponsable.peac_fini sous le nom "Fin de mandat" */
var Compo_Personnes_Fin_de_mandat_37=new clCompoCheckBox(Personnes_Fin_de_mandat_37,null,"Fin de mandat");
var Personnes_Responsabilités_32=new clEnsembleAttributs("estresponsable",
	new Array(
	new clLiaison(null,Col_N0_Status_De_Personnes_Responsabilités_32)
	,new clLiaison(Joint_Col_N1_Nom_De_Personnes_Responsabilités_32,Col_N1_Nom_De_Personnes_Responsabilités_32)
	,new clLiaison(Joint_Col_N2_Famille_De_Personnes_Responsabilités_32,Col_N2_Famille_De_Personnes_Responsabilités_32)
	,new clLiaison(Joint_Col_N3_Code_De_Personnes_Responsabilités_32,Col_N3_Code_De_Personnes_Responsabilités_32)
	,new clLiaison(null,Col_N4_Du_De_Personnes_Responsabilités_32)
	,new clLiaison(null,Col_N5_Au_De_Personnes_Responsabilités_32)
	),
	new Array(
	new clLiaison(Joint_Esclave_Personnes_Responsabilité_33,Personnes_Responsabilité_33)
	,new clLiaison(null,Personnes_Titre_34)
	,new clLiaison(null,Personnes_Du_35)
	,new clLiaison(null,Personnes_Au_36)
	,new clLiaison(null,Personnes_Fin_de_mandat_37)
	));

var Titre_Personnes_Responsabilités_32=new Array("Status","Nom","Famille","Code","Du","Au");

	/* Ce composant représente: des éléments de la table estresponsable sous le nom "Responsabilités" */
var Compo_Personnes_Responsabilités_32=new clCompoListe(Personnes_Responsabilités_32,new Array(clCompoListe.prototype.FiltreParDefaut(),Filtre_PersonneResponsabilite=new clInterfaceFiltrageEnsXCustom(new Array("Période en cours","(estresponsable.peac_periodefin is null) or (estresponsable.peac_periodefin>= date('01/01/' || date_part('year',current_date)))"))),Titre_Personnes_Responsabilités_32,"Responsabilités",true,false);
var Joint_Esclave_Personnes_Responsabilités_32=new clJointureMulti("personne",
	new Array(
	new stJointure("estresponsable","pe_numero","pe_numero",null,false)
	));
var Col_N0_Attribut_De_Personnes_Attributs_38=new clAttribut("ta_nom","typeattribut",null);

var Joint_Col_N0_Attribut_De_Personnes_Attributs_38=new clJointureMulti("attribut",
	new Array(
	new stJointure("typeattribut","ta_numero","ta_numero",null,true)
	));
var Col_N1_Valeur_De_Personnes_Attributs_38=new clAttribut("cr_libelle","categorie",null);

var Joint_Col_N1_Valeur_De_Personnes_Attributs_38=new clJointureMulti("attribut",
	new Array(
	new stJointure("categorie","cr_numero","cr_numero",null,true)
	));
var Personnes_Attribut_39=new clAttribut("ta_nom","typeattribut",null);


	/* Ce composant représente: typeattribut.ta_nom sous le nom "Attribut" */
var Compo_Personnes_Attribut_39=new clCompoListeDeroulanteSimple(Personnes_Attribut_39,new Array(clCompoListeDeroulanteSimple.prototype.FiltreParDefaut(),Filtre_Typeattribut_Personne=new clInterfaceFiltrageContenuHautBas()),"Attribut");
var Joint_Esclave_Personnes_Attribut_39=new clJointureMulti("attribut",
	new Array(
	new stJointure("typeattribut","ta_numero","ta_numero",null,false)
	));
var Personnes_Valeur_40=new clAttribut("cr_libelle","categorie",null);


	/* Ce composant représente: categorie.cr_libelle sous le nom "Valeur" */
var Compo_Personnes_Valeur_40=new clCompoListeDeroulanteSimple(Personnes_Valeur_40,null,"Valeur");
var Joint_Esclave_Personnes_Valeur_40=new clJointureMulti("attribut",
	new Array(
	new stJointure("categorie","cr_numero","cr_numero",null,false)
	));
var Personnes_Détail_41=new clAttribut("at_valeur","attribut",null);


	/* Ce composant représente: attribut.at_valeur sous le nom "Détail" */
var Compo_Personnes_Détail_41=new clCompoTextBox(Personnes_Détail_41,null,"Détail",false,true);
var Personnes_Attributs_38=new clEnsembleAttributs("attribut",
	new Array(
	new clLiaison(Joint_Col_N0_Attribut_De_Personnes_Attributs_38,Col_N0_Attribut_De_Personnes_Attributs_38)
	,new clLiaison(Joint_Col_N1_Valeur_De_Personnes_Attributs_38,Col_N1_Valeur_De_Personnes_Attributs_38)
	),
	new Array(
	new clLiaison(Joint_Esclave_Personnes_Attribut_39,Personnes_Attribut_39)
	,new clLiaison(Joint_Esclave_Personnes_Valeur_40,Personnes_Valeur_40)
	,new clLiaison(null,Personnes_Détail_41)
	));

var Titre_Personnes_Attributs_38=new Array("Attribut","Valeur");

	/* Ce composant représente: des éléments de la table attribut sous le nom "Attributs" */
var Compo_Personnes_Attributs_38=new clCompoListe(Personnes_Attributs_38,null,Titre_Personnes_Attributs_38,"Attributs",true,false);
var Joint_Esclave_Personnes_Attributs_38=new clJointureMulti("personne",
	new Array(
	new stJointure("attribut","pe_numero","pe_numero",null,false)
	));
var Col_N0_N__De_Personnes_Devis_en_cours_42=new clAttribut("de_numero","devis",null);

var Col_N1_Date_De_Personnes_Devis_en_cours_42=new clAttribut("de_date","devis",null);

var Col_N2_Libellé_De_Personnes_Devis_en_cours_42=new clAttribut("de_libelle","devis",null);

var Col_N3_Montant_HT_De_Personnes_Devis_en_cours_42=new clAttribut("de_montantht","devis",null);

var Col_N4_Montant_TTC_De_Personnes_Devis_en_cours_42=new clAttribut("de_montantttc","devis",null);

var Personnes_Devis_en_cours_42=new clEnsembleAttributs("devis",
	new Array(
	new clLiaison(null,Col_N0_N__De_Personnes_Devis_en_cours_42)
	,new clLiaison(null,Col_N1_Date_De_Personnes_Devis_en_cours_42)
	,new clLiaison(null,Col_N2_Libellé_De_Personnes_Devis_en_cours_42)
	,new clLiaison(null,Col_N3_Montant_HT_De_Personnes_Devis_en_cours_42)
	,new clLiaison(null,Col_N4_Montant_TTC_De_Personnes_Devis_en_cours_42)
	),
	null);

var Titre_Personnes_Devis_en_cours_42=new Array("N°","Date","Libellé","Montant HT","Montant TTC");

	/* Ce composant représente: des éléments de la table devis sous le nom "Devis en cours" */
var Compo_Personnes_Devis_en_cours_42=new clCompoListe(Personnes_Devis_en_cours_42,new Array(clCompoListe.prototype.FiltreParDefaut(),Filtre_PersonneDevis=new clInterfaceFiltragePermanantCustom("de_locked=false"),Filtre_DepFor_Devis_0=new clInterfaceFiltrageRelationOnglet("Devis",Gerer_Devis,OuvrirOnglet_Personnes,true)),Titre_Personnes_Devis_en_cours_42,"Devis en cours",true,false);
var Joint_Esclave_Personnes_Devis_en_cours_42=new clJointureMulti("personne",
	new Array(
	new stJointure("devis","pe_numero","pe_numero",null,false)
	));
var Col_N0_N__De_Personnes_Factures_43=new clAttribut("fa_numfact","facture",null);

var Col_N1_Date_De_Personnes_Factures_43=new clAttribut("fa_date","facture",null);

var Col_N2_Libellé_De_Personnes_Factures_43=new clAttribut("fa_libelle","facture",null);

var Col_N3_Agent_De_Personnes_Factures_43=new clAttribut("ag_libelle","agent",null);

var Joint_Col_N3_Agent_De_Personnes_Factures_43=new clJointureMulti("facture",
	new Array(
	new stJointure("agent","ag_numero","ag_numero",null,true)
	));
var Col_N4_Montant_HT_De_Personnes_Factures_43=new clAttribut("fa_montantht","facture",null);

var Col_N5_Montant_TTC_De_Personnes_Factures_43=new clAttribut("fa_montantttc","facture",null);

var Personnes_Factures_43=new clEnsembleAttributs("facture",
	new Array(
	new clLiaison(null,Col_N0_N__De_Personnes_Factures_43)
	,new clLiaison(null,Col_N1_Date_De_Personnes_Factures_43)
	,new clLiaison(null,Col_N2_Libellé_De_Personnes_Factures_43)
	,new clLiaison(Joint_Col_N3_Agent_De_Personnes_Factures_43,Col_N3_Agent_De_Personnes_Factures_43)
	,new clLiaison(null,Col_N4_Montant_HT_De_Personnes_Factures_43)
	,new clLiaison(null,Col_N5_Montant_TTC_De_Personnes_Factures_43)
	),
	null);

var Titre_Personnes_Factures_43=new Array("N°","Date","Libellé","Agent","Montant HT","Montant TTC");

	/* Ce composant représente: des éléments de la table facture sous le nom "Factures" */
var Compo_Personnes_Factures_43=new clCompoListe(Personnes_Factures_43,new Array(clCompoListe.prototype.FiltreParDefaut(),Filtre_DepFor_Facture_0=new clInterfaceFiltrageRelationOnglet("Facture",Gerer_Facture,OuvrirOnglet_Personnes,true)),Titre_Personnes_Factures_43,"Factures",true,false);
var Joint_Esclave_Personnes_Factures_43=new clJointureMulti("personne",
	new Array(
	new stJointure("facture","pe_numero","pe_numero",null,false)
	));
var Col_N0_N__De_Personnes_Réglements_44=new clAttribut("rg_numero","reglement",null);

var Col_N1_Date_De_Personnes_Réglements_44=new clAttribut("rg_date","reglement",null);

var Col_N2_Montant_De_Personnes_Réglements_44=new clAttribut("rg_montant","reglement",null);

var Col_N3_Mode_De_Personnes_Réglements_44=new clAttribut("mr_libelle","modereglement",null);

var Joint_Col_N3_Mode_De_Personnes_Réglements_44=new clJointureMulti("reglement",
	new Array(
	new stJointure("modereglement","mr_numero","mr_numero",null,true)
	));
var Col_N4_Etat_De_Personnes_Réglements_44=new clAttribut("rg_etat","reglement",null);

var Personnes_Réglements_44=new clEnsembleAttributs("reglement",
	new Array(
	new clLiaison(null,Col_N0_N__De_Personnes_Réglements_44)
	,new clLiaison(null,Col_N1_Date_De_Personnes_Réglements_44)
	,new clLiaison(null,Col_N2_Montant_De_Personnes_Réglements_44)
	,new clLiaison(Joint_Col_N3_Mode_De_Personnes_Réglements_44,Col_N3_Mode_De_Personnes_Réglements_44)
	,new clLiaison(null,Col_N4_Etat_De_Personnes_Réglements_44)
	),
	null);

var Titre_Personnes_Réglements_44=new Array("N°","Date","Montant","Mode","Etat");

	/* Ce composant représente: des éléments de la table reglement sous le nom "Réglements" */
var Compo_Personnes_Réglements_44=new clCompoListe(Personnes_Réglements_44,new Array(clCompoListe.prototype.FiltreParDefaut(),Filtre_DepFor_Réglement_1=new clInterfaceFiltrageRelationOnglet("Réglement",Gerer_Réglement,OuvrirOnglet_Personnes,true)),Titre_Personnes_Réglements_44,"Réglements",true,false);
var Joint_Esclave_Personnes_Réglements_44=new clJointureMulti("personne",
	new Array(
	new stJointure("reglement","pe_numero","pe_numero",null,false)
	));
var Col_N0_Début_De_Personnes_Routages_45=new clAttribut("ro_debutservice","routage",null);

var Col_N1_Fin_De_Personnes_Routages_45=new clAttribut("ro_finservice","routage",null);

var Col_N2_Qté__De_Personnes_Routages_45=new clAttribut("ro_quantite","routage",null);

var Col_N3_Adresse_De_Personnes_Routages_45=new clAttribut("ad_libelle","adresse",null);

var Joint_Col_N3_Adresse_De_Personnes_Routages_45=new clJointureMulti("routage",
	new Array(
	new stJointure("adresse","ad_numero","ad_numero",null,true)
	));
var Col_N4_Facture_De_Personnes_Routages_45=new clAttribut("fa_numfact","facture",null);

var Joint_Col_N4_Facture_De_Personnes_Routages_45=new clJointureMulti("routage",
	new Array(
	new stJointure("facture","fa_numero","fa_numero",null,true)
	));
var Personnes_Début_46=new clAttribut("ro_debutservice","routage",null);


	/* Ce composant représente: routage.ro_debutservice sous le nom "Début" */
var Compo_Personnes_Début_46=new clCompoTextBox(Personnes_Début_46,null,"Début",false,false);
var Personnes_Fin_47=new clAttribut("ro_finservice","routage",null);


	/* Ce composant représente: routage.ro_finservice sous le nom "Fin" */
var Compo_Personnes_Fin_47=new clCompoTextBox(Personnes_Fin_47,null,"Fin",false,false);
var Personnes_Quantité_48=new clAttribut("ro_quantite","routage",null);


	/* Ce composant représente: routage.ro_quantite sous le nom "Quantité" */
var Compo_Personnes_Quantité_48=new clCompoTextBox(Personnes_Quantité_48,null,"Quantité",false,false);
var Personnes_Adresse_49=new clAttribut("ad_libelle","adresse",null);


	/* Ce composant représente: adresse.ad_libelle sous le nom "Adresse" */
var Compo_Personnes_Adresse_49=new clCompoListeDeroulanteSimple(Personnes_Adresse_49,null,"Adresse");
var Joint_Esclave_Personnes_Adresse_49=new clJointureMulti("routage",
	new Array(
	new stJointure("adresse","ad_numero","ad_numero",null,false)
	));
var Personnes_Suspendre_les_relances_50=new clAttribut("ro_suspendu","routage",null);


	/* Ce composant représente: routage.ro_suspendu sous le nom "Suspendre les relances" */
var Compo_Personnes_Suspendre_les_relances_50=new clCompoCheckBox(Personnes_Suspendre_les_relances_50,null,"Suspendre les relances");
var Personnes_Routages_45=new clEnsembleAttributs("routage",
	new Array(
	new clLiaison(null,Col_N0_Début_De_Personnes_Routages_45)
	,new clLiaison(null,Col_N1_Fin_De_Personnes_Routages_45)
	,new clLiaison(null,Col_N2_Qté__De_Personnes_Routages_45)
	,new clLiaison(Joint_Col_N3_Adresse_De_Personnes_Routages_45,Col_N3_Adresse_De_Personnes_Routages_45)
	,new clLiaison(Joint_Col_N4_Facture_De_Personnes_Routages_45,Col_N4_Facture_De_Personnes_Routages_45)
	),
	new Array(
	new clLiaison(null,Personnes_Début_46)
	,new clLiaison(null,Personnes_Fin_47)
	,new clLiaison(null,Personnes_Quantité_48)
	,new clLiaison(Joint_Esclave_Personnes_Adresse_49,Personnes_Adresse_49)
	,new clLiaison(null,Personnes_Suspendre_les_relances_50)
	));

var Titre_Personnes_Routages_45=new Array("Début","Fin","Qté.","Adresse","Facture");

	/* Ce composant représente: des éléments de la table routage sous le nom "Routages" */
var Compo_Personnes_Routages_45=new clCompoListe(Personnes_Routages_45,null,Titre_Personnes_Routages_45,"Routages",true,false);
var Joint_Esclave_Personnes_Routages_45=new clJointureMulti("personne",
	new Array(
	new stJointure("routage","pe_numero","pe_numero",null,false)
	));
var Personnes_Liste_des_personnes0=new clEnsembleAttributs("personne",
	new Array(
	new clLiaison(null,Col_N0_Nom_De_Personnes_Liste_des_personnes0)
	,new clLiaison(null,Col_N1_N_Pers__De_Personnes_Liste_des_personnes0)
	,new clLiaison(null,Col_N2_Tél__De_Personnes_Liste_des_personnes0)
	,new clLiaison(null,Col_N3_Fax_De_Personnes_Liste_des_personnes0)
	,new clLiaison(null,Col_N4_Canton_De_Personnes_Liste_des_personnes0)
	,new clLiaison(null,Col_N5_Adresse_De_Personnes_Liste_des_personnes0)
	),
	new Array(
	new clLiaison(null,Personnes_Titre_1)
	,new clLiaison(null,Personnes_Nom_2)
	,new clLiaison(null,Personnes_Prénom_3)
	,new clLiaison(null,Personnes_Complément_4)
	,new clLiaison(null,Personnes_Entité_morale_5)
	,new clLiaison(null,Personnes_Date_de_naissance_6)
	,new clLiaison(Joint_Esclave_Personnes_Etat_7,Personnes_Etat_7)
	,new clLiaison(Joint_Esclave_Personnes_Type_8,Personnes_Type_8)
	,new clLiaison(null,Personnes_Régime_fiscal_9)
	,new clLiaison(Joint_Esclave_Personnes_Adhésions_10,Personnes_Adhésions_10)
	,new clLiaison(Joint_Esclave_Personnes_Observations_11,Personnes_Observations_11)
	,new clLiaison(Joint_Esclave_Personnes_Adresses_14,Personnes_Adresses_14)
	,new clLiaison(Joint_Esclave_Personnes_Contact_23,Personnes_Contact_23)
	,new clLiaison(Joint_Esclave_Personnes_Tâches_26,Personnes_Tâches_26)
	,new clLiaison(Joint_Esclave_Personnes_Responsabilités_32,Personnes_Responsabilités_32)
	,new clLiaison(Joint_Esclave_Personnes_Attributs_38,Personnes_Attributs_38)
	,new clLiaison(Joint_Esclave_Personnes_Devis_en_cours_42,Personnes_Devis_en_cours_42)
	,new clLiaison(Joint_Esclave_Personnes_Factures_43,Personnes_Factures_43)
	,new clLiaison(Joint_Esclave_Personnes_Réglements_44,Personnes_Réglements_44)
	,new clLiaison(Joint_Esclave_Personnes_Routages_45,Personnes_Routages_45)
	));

var Titre_Personnes_Liste_des_personnes0=new Array("Nom","N°Pers.","Tél.","Fax","Canton","Adresse");

	/* Ce composant représente: des éléments de la table personne sous le nom "Liste des personnes" */
var Compo_Personnes_Liste_des_personnes0=new clCompoListe(Personnes_Liste_des_personnes0,new Array(new clInterfaceFiltrageVide()),Titre_Personnes_Liste_des_personnes0,"Liste des personnes",true,false);

	/* Ce composant représente: personne.undefined sous le nom "Liste des personnes" */
Compo_Personnes_Liste_des_personnes0.AddCompoAddOn(new clAddon_Fctmenupopup("Rechercher",new Array("Par numéro","Par nom","Par code postal","Par ville","Par contact"),new Array(Recherche_Num,Recherche_Nom,Recherche_CP,Recherche_Ville,Recherche_Contact),new Array(Compo_Personnes_Liste_des_personnes0,Compo_Personnes_Liste_des_personnes0,Compo_Personnes_Liste_des_personnes0,Compo_Personnes_Liste_des_personnes0,Compo_Personnes_Liste_des_personnes0)));
 if(ALeDroit(0,"personne"))
 {
Compo_Personnes_Liste_des_personnes0.GenererXUL(top.document.getElementById("Personnes_Liste_des_personnes0"));

 }

	/* On l'ajoute au tableau global à l'indice 3*/
top.TAB_GLOBAL_COMPO[3]=Compo_Personnes_Liste_des_personnes0;

	/* Ce composant représente: des éléments de la table personne sous le nom "Titre" */
 if(ALeDroit(0,"personne"))
 {
Compo_Personnes_Titre_1.GenererXUL(top.document.getElementById("Personnes_Liste_des_personnes0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 10*/
top.TAB_GLOBAL_COMPO[10]=Compo_Personnes_Titre_1;

	/* Ce composant représente: des éléments de la table personne sous le nom "Nom" */
 if(ALeDroit(0,"personne"))
 {
Compo_Personnes_Nom_2.GenererXUL(top.document.getElementById("Personnes_Liste_des_personnes0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 11*/
top.TAB_GLOBAL_COMPO[11]=Compo_Personnes_Nom_2;

	/* Ce composant représente: des éléments de la table personne sous le nom "Prénom" */
 if(ALeDroit(0,"personne"))
 {
Compo_Personnes_Prénom_3.GenererXUL(top.document.getElementById("Personnes_Liste_des_personnes0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 12*/
top.TAB_GLOBAL_COMPO[12]=Compo_Personnes_Prénom_3;

	/* Ce composant représente: des éléments de la table personne sous le nom "Complément" */
 if(ALeDroit(0,"personne"))
 {
Compo_Personnes_Complément_4.GenererXUL(top.document.getElementById("Personnes_Liste_des_personnes0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 13*/
top.TAB_GLOBAL_COMPO[13]=Compo_Personnes_Complément_4;

	/* Ce composant représente: des éléments de la table personne sous le nom "Entité morale" */
 if(ALeDroit(0,"personne"))
 {
Compo_Personnes_Entité_morale_5.GenererXUL(top.document.getElementById("Personnes_Liste_des_personnes0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 14*/
top.TAB_GLOBAL_COMPO[14]=Compo_Personnes_Entité_morale_5;

	/* Ce composant représente: des éléments de la table personne sous le nom "Date de naissance" */
 if(ALeDroit(0,"personne"))
 {
Compo_Personnes_Date_de_naissance_6.GenererXUL(top.document.getElementById("Personnes_Liste_des_personnes0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 15*/
top.TAB_GLOBAL_COMPO[15]=Compo_Personnes_Date_de_naissance_6;

	/* Ce composant représente: des éléments de la table etatpersonne sous le nom "Etat" */
 if(ALeDroit(0,"etatpersonne"))
 {
Compo_Personnes_Etat_7.GenererXUL(top.document.getElementById("Personnes_Liste_des_personnes0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 16*/
top.TAB_GLOBAL_COMPO[16]=Compo_Personnes_Etat_7;

	/* Ce composant représente: des éléments de la table typepersonne sous le nom "Type" */
 if(ALeDroit(0,"typepersonne"))
 {
Compo_Personnes_Type_8.GenererXUL(top.document.getElementById("Personnes_Liste_des_personnes0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 17*/
top.TAB_GLOBAL_COMPO[17]=Compo_Personnes_Type_8;

	/* Ce composant représente: des éléments de la table personne sous le nom "Régime fiscal" */
 if(ALeDroit(0,"personne"))
 {
Compo_Personnes_Régime_fiscal_9.GenererXUL(top.document.getElementById("Personnes_Liste_des_personnes0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 18*/
top.TAB_GLOBAL_COMPO[18]=Compo_Personnes_Régime_fiscal_9;

	/* Ce composant représente: adhesion.undefined sous le nom "Adhésions" */
 if(ALeDroit(0,"adhesion"))
 {
Compo_Personnes_Adhésions_10.GenererXUL(top.document.getElementById("Personnes_Adhésions_10"));

 }

	/* On l'ajoute au tableau global à l'indice 19*/
top.TAB_GLOBAL_COMPO[19]=Compo_Personnes_Adhésions_10;

	/* Ce composant représente: observation.undefined sous le nom "Observations" */
 if(ALeDroit(0,"observation"))
 {
Compo_Personnes_Observations_11.GenererXUL(top.document.getElementById("Personnes_Observations_11"));

 }

	/* On l'ajoute au tableau global à l'indice 24*/
top.TAB_GLOBAL_COMPO[24]=Compo_Personnes_Observations_11;

	/* Ce composant représente: des éléments de la table observation sous le nom "Importance" */
 if(ALeDroit(0,"observation"))
 {
Compo_Personnes_Importance_12.GenererXUL(top.document.getElementById("Personnes_Observations_11_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 27*/
top.TAB_GLOBAL_COMPO[27]=Compo_Personnes_Importance_12;

	/* Ce composant représente: des éléments de la table observation sous le nom "Description" */
 if(ALeDroit(0,"observation"))
 {
Compo_Personnes_Description_13.GenererXUL(top.document.getElementById("Personnes_Observations_11_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 28*/
top.TAB_GLOBAL_COMPO[28]=Compo_Personnes_Description_13;

	/* Ce composant représente: adresse.undefined sous le nom "Adresses" */
 if(ALeDroit(0,"adresse"))
 {
Compo_Personnes_Adresses_14.GenererXUL(top.document.getElementById("Personnes_Adresses_14"));

 }

	/* On l'ajoute au tableau global à l'indice 29*/
top.TAB_GLOBAL_COMPO[29]=Compo_Personnes_Adresses_14;

	/* Ce composant représente: des éléments de la table adresse sous le nom "Ligne n°1" */
 if(ALeDroit(0,"adresse"))
 {
Compo_Personnes_Ligne_n_1_15.GenererXUL(top.document.getElementById("Personnes_Adresses_14_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 38*/
top.TAB_GLOBAL_COMPO[38]=Compo_Personnes_Ligne_n_1_15;

	/* Ce composant représente: des éléments de la table adresse sous le nom "Ligne n°2" */
 if(ALeDroit(0,"adresse"))
 {
Compo_Personnes_Ligne_n_2_16.GenererXUL(top.document.getElementById("Personnes_Adresses_14_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 39*/
top.TAB_GLOBAL_COMPO[39]=Compo_Personnes_Ligne_n_2_16;

	/* Ce composant représente: des éléments de la table adresse sous le nom "Ligne n°3" */
 if(ALeDroit(0,"adresse"))
 {
Compo_Personnes_Ligne_n_3_17.GenererXUL(top.document.getElementById("Personnes_Adresses_14_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 40*/
top.TAB_GLOBAL_COMPO[40]=Compo_Personnes_Ligne_n_3_17;

	/* Ce composant représente: des éléments de la table adresse sous le nom "Adresse en cours" */
 if(ALeDroit(0,"adresse"))
 {
Compo_Personnes_Adresse_en_cours_18.GenererXUL(top.document.getElementById("Personnes_Adresses_14_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 41*/
top.TAB_GLOBAL_COMPO[41]=Compo_Personnes_Adresse_en_cours_18;

	/* Ce composant représente: des éléments de la table adresse sous le nom "Date de fin" */
 if(ALeDroit(0,"adresse"))
 {
Compo_Personnes_Date_de_fin_19.GenererXUL(top.document.getElementById("Personnes_Adresses_14_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 42*/
top.TAB_GLOBAL_COMPO[42]=Compo_Personnes_Date_de_fin_19;

	/* Ce composant représente: des éléments de la table adresse sous le nom "Type" */
 if(ALeDroit(0,"adresse"))
 {
Compo_Personnes_Type_20.GenererXUL(top.document.getElementById("Personnes_Adresses_14_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 43*/
top.TAB_GLOBAL_COMPO[43]=Compo_Personnes_Type_20;

	/* Ce composant représente: des éléments de la table codepostal sous le nom "Code postal" */
var Joint_Filtre_CP_Personne=new clJointureMulti("codepostal",
	new Array(
		new stJointure("villecp","cp_numero","cp_numero",null,false),
		new stJointure("ville","vi_numero","vi_numero",null,false)));
Filtre_CP_Personne.setComposant(Compo_Personnes_Ville_22,Joint_Filtre_CP_Personne);
 if(ALeDroit(0,"codepostal"))
 {
Compo_Personnes_Code_postal_21.GenererXUL(top.document.getElementById("Personnes_Adresses_14_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 44*/
top.TAB_GLOBAL_COMPO[44]=Compo_Personnes_Code_postal_21;

	/* Ce composant représente: des éléments de la table ville sous le nom "Ville" */
var Joint_Filtre_Ville_Personne=new clJointureMulti("ville",
	new Array(
		new stJointure("villecp","vi_numero","vi_numero",null,false),
		new stJointure("codepostal","cp_numero","cp_numero",null,false)));
Filtre_Ville_Personne.setComposant(Compo_Personnes_Code_postal_21,Joint_Filtre_Ville_Personne);
 if(ALeDroit(0,"ville"))
 {
Compo_Personnes_Ville_22.GenererXUL(top.document.getElementById("Personnes_Adresses_14_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 45*/
top.TAB_GLOBAL_COMPO[45]=Compo_Personnes_Ville_22;

	/* Ce composant représente: estjoignable.undefined sous le nom "Contact" */
 if(ALeDroit(0,"estjoignable"))
 {
Compo_Personnes_Contact_23.GenererXUL(top.document.getElementById("Personnes_Contact_23"));

 }

	/* On l'ajoute au tableau global à l'indice 46*/
top.TAB_GLOBAL_COMPO[46]=Compo_Personnes_Contact_23;

	/* Ce composant représente: des éléments de la table contact sous le nom "Coordonnée" */
 if(ALeDroit(0,"contact"))
 {
Compo_Personnes_Coordonnée_24.GenererXUL(top.document.getElementById("Personnes_Contact_23_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 50*/
top.TAB_GLOBAL_COMPO[50]=Compo_Personnes_Coordonnée_24;

	/* Ce composant représente: des éléments de la table estjoignable sous le nom "Actif" */
 if(ALeDroit(0,"estjoignable"))
 {
Compo_Personnes_Actif_25.GenererXUL(top.document.getElementById("Personnes_Contact_23_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 51*/
top.TAB_GLOBAL_COMPO[51]=Compo_Personnes_Actif_25;

	/* Ce composant représente: appel.undefined sous le nom "Tâches" */
 if(ALeDroit(0,"appel"))
 {
Compo_Personnes_Tâches_26.GenererXUL(top.document.getElementById("Personnes_Tâches_26"));

 }

	/* On l'ajoute au tableau global à l'indice 52*/
top.TAB_GLOBAL_COMPO[52]=Compo_Personnes_Tâches_26;

	/* Ce composant représente: des éléments de la table appel sous le nom "Date" */
 if(ALeDroit(0,"appel"))
 {
Compo_Personnes_Date_27.GenererXUL(top.document.getElementById("Personnes_Tâches_26_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 58*/
top.TAB_GLOBAL_COMPO[58]=Compo_Personnes_Date_27;

	/* Ce composant représente: des éléments de la table typetache sous le nom "Type" */
 if(ALeDroit(0,"typetache"))
 {
Compo_Personnes_Type_28.GenererXUL(top.document.getElementById("Personnes_Tâches_26_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 59*/
top.TAB_GLOBAL_COMPO[59]=Compo_Personnes_Type_28;

	/* Ce composant représente: des éléments de la table appel sous le nom "Motif" */
 if(ALeDroit(0,"appel"))
 {
Compo_Personnes_Motif_29.GenererXUL(top.document.getElementById("Personnes_Tâches_26_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 60*/
top.TAB_GLOBAL_COMPO[60]=Compo_Personnes_Motif_29;

	/* Ce composant représente: des éléments de la table appel sous le nom "Durée (min)" */
 if(ALeDroit(0,"appel"))
 {
Compo_Personnes_Durée__min__30.GenererXUL(top.document.getElementById("Personnes_Tâches_26_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 61*/
top.TAB_GLOBAL_COMPO[61]=Compo_Personnes_Durée__min__30;

	/* Ce composant représente: des éléments de la table appel sous le nom "Détails complémentaires" */
 if(ALeDroit(0,"appel"))
 {
Compo_Personnes_Détails_complémentaires_31.GenererXUL(top.document.getElementById("Personnes_Tâches_26_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 62*/
top.TAB_GLOBAL_COMPO[62]=Compo_Personnes_Détails_complémentaires_31;

	/* Ce composant représente: estresponsable.undefined sous le nom "Responsabilités" */
 if(ALeDroit(0,"estresponsable"))
 {
Compo_Personnes_Responsabilités_32.GenererXUL(top.document.getElementById("Personnes_Responsabilités_32"));

 }

	/* On l'ajoute au tableau global à l'indice 63*/
top.TAB_GLOBAL_COMPO[63]=Compo_Personnes_Responsabilités_32;

	/* Ce composant représente: des éléments de la table responsabilite sous le nom "Responsabilité" */
 if(ALeDroit(0,"responsabilite"))
 {
Compo_Personnes_Responsabilité_33.GenererXUL(top.document.getElementById("Personnes_Responsabilités_32_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 70*/
top.TAB_GLOBAL_COMPO[70]=Compo_Personnes_Responsabilité_33;

	/* Ce composant représente: des éléments de la table estresponsable sous le nom "Titre" */
 if(ALeDroit(0,"estresponsable"))
 {
Compo_Personnes_Titre_34.GenererXUL(top.document.getElementById("Personnes_Responsabilités_32_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 71*/
top.TAB_GLOBAL_COMPO[71]=Compo_Personnes_Titre_34;

	/* Ce composant représente: des éléments de la table estresponsable sous le nom "Du" */
 if(ALeDroit(0,"estresponsable"))
 {
Compo_Personnes_Du_35.GenererXUL(top.document.getElementById("Personnes_Responsabilités_32_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 72*/
top.TAB_GLOBAL_COMPO[72]=Compo_Personnes_Du_35;

	/* Ce composant représente: des éléments de la table estresponsable sous le nom "Au" */
 if(ALeDroit(0,"estresponsable"))
 {
Compo_Personnes_Au_36.GenererXUL(top.document.getElementById("Personnes_Responsabilités_32_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 73*/
top.TAB_GLOBAL_COMPO[73]=Compo_Personnes_Au_36;

	/* Ce composant représente: des éléments de la table estresponsable sous le nom "Fin de mandat" */
 if(ALeDroit(0,"estresponsable"))
 {
Compo_Personnes_Fin_de_mandat_37.GenererXUL(top.document.getElementById("Personnes_Responsabilités_32_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 74*/
top.TAB_GLOBAL_COMPO[74]=Compo_Personnes_Fin_de_mandat_37;

	/* Ce composant représente: attribut.undefined sous le nom "Attributs" */
 if(ALeDroit(0,"attribut"))
 {
Compo_Personnes_Attributs_38.GenererXUL(top.document.getElementById("Personnes_Attributs_38"));

 }

	/* On l'ajoute au tableau global à l'indice 75*/
top.TAB_GLOBAL_COMPO[75]=Compo_Personnes_Attributs_38;

	/* Ce composant représente: des éléments de la table typeattribut sous le nom "Attribut" */
var Joint_Filtre_Typeattribut_Personne=new clJointureMulti("typeattribut",
	new Array(
		new stJointure("categorie","ta_numero","ta_numero",null,false),
		new stJointure("categorie","cr_numero","cr_numero",null,false)));
Filtre_Typeattribut_Personne.setComposant(Compo_Personnes_Valeur_40,Joint_Filtre_Typeattribut_Personne);
 if(ALeDroit(0,"typeattribut"))
 {
Compo_Personnes_Attribut_39.GenererXUL(top.document.getElementById("Personnes_Attributs_38_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 78*/
top.TAB_GLOBAL_COMPO[78]=Compo_Personnes_Attribut_39;

	/* Ce composant représente: des éléments de la table categorie sous le nom "Valeur" */
 if(ALeDroit(0,"categorie"))
 {
Compo_Personnes_Valeur_40.GenererXUL(top.document.getElementById("Personnes_Attributs_38_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 79*/
top.TAB_GLOBAL_COMPO[79]=Compo_Personnes_Valeur_40;

	/* Ce composant représente: des éléments de la table attribut sous le nom "Détail" */
 if(ALeDroit(0,"attribut"))
 {
Compo_Personnes_Détail_41.GenererXUL(top.document.getElementById("Personnes_Attributs_38_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 80*/
top.TAB_GLOBAL_COMPO[80]=Compo_Personnes_Détail_41;

	/* Ce composant représente: devis.undefined sous le nom "Devis en cours" */
 if(ALeDroit(0,"devis"))
 {
Compo_Personnes_Devis_en_cours_42.GenererXUL(top.document.getElementById("Personnes_Devis_en_cours_42"));

 }

	/* On l'ajoute au tableau global à l'indice 81*/
top.TAB_GLOBAL_COMPO[81]=Compo_Personnes_Devis_en_cours_42;

	/* Ce composant représente: facture.undefined sous le nom "Factures" */
 if(ALeDroit(0,"facture"))
 {
Compo_Personnes_Factures_43.GenererXUL(top.document.getElementById("Personnes_Factures_43"));

 }

	/* On l'ajoute au tableau global à l'indice 87*/
top.TAB_GLOBAL_COMPO[87]=Compo_Personnes_Factures_43;

	/* Ce composant représente: reglement.undefined sous le nom "Réglements" */
 if(ALeDroit(0,"reglement"))
 {
Compo_Personnes_Réglements_44.GenererXUL(top.document.getElementById("Personnes_Réglements_44"));

 }

	/* On l'ajoute au tableau global à l'indice 94*/
top.TAB_GLOBAL_COMPO[94]=Compo_Personnes_Réglements_44;

	/* Ce composant représente: routage.undefined sous le nom "Routages" */
 if(ALeDroit(0,"routage"))
 {
Compo_Personnes_Routages_45.GenererXUL(top.document.getElementById("Personnes_Routages_45"));

 }

	/* On l'ajoute au tableau global à l'indice 100*/
top.TAB_GLOBAL_COMPO[100]=Compo_Personnes_Routages_45;

	/* Ce composant représente: des éléments de la table routage sous le nom "Début" */
 if(ALeDroit(0,"routage"))
 {
Compo_Personnes_Début_46.GenererXUL(top.document.getElementById("Personnes_Routages_45_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 106*/
top.TAB_GLOBAL_COMPO[106]=Compo_Personnes_Début_46;

	/* Ce composant représente: des éléments de la table routage sous le nom "Fin" */
 if(ALeDroit(0,"routage"))
 {
Compo_Personnes_Fin_47.GenererXUL(top.document.getElementById("Personnes_Routages_45_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 107*/
top.TAB_GLOBAL_COMPO[107]=Compo_Personnes_Fin_47;

	/* Ce composant représente: des éléments de la table routage sous le nom "Quantité" */
 if(ALeDroit(0,"routage"))
 {
Compo_Personnes_Quantité_48.GenererXUL(top.document.getElementById("Personnes_Routages_45_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 108*/
top.TAB_GLOBAL_COMPO[108]=Compo_Personnes_Quantité_48;

	/* Ce composant représente: des éléments de la table adresse sous le nom "Adresse" */
 if(ALeDroit(0,"adresse"))
 {
Compo_Personnes_Adresse_49.GenererXUL(top.document.getElementById("Personnes_Routages_45_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 109*/
top.TAB_GLOBAL_COMPO[109]=Compo_Personnes_Adresse_49;

	/* Ce composant représente: des éléments de la table routage sous le nom "Suspendre les relances" */
 if(ALeDroit(0,"routage"))
 {
Compo_Personnes_Suspendre_les_relances_50.GenererXUL(top.document.getElementById("Personnes_Routages_45_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 110*/
top.TAB_GLOBAL_COMPO[110]=Compo_Personnes_Suspendre_les_relances_50;
var Col_N0_Type_De_Contacts_Liste_des_contacts0=new clAttribut("cn_type","contact",null);

var Col_N1_Coordonnées_De_Contacts_Liste_des_contacts0=new clAttribut("cn_coordonnee","contact",null);

var Contacts_Type_1=new clAttribut("cn_type","contact",null);


	/* Ce composant représente: contact.cn_type sous le nom "Type" */
var Compo_Contacts_Type_1=new clCompoListeDeroulanteStatic(Contacts_Type_1,null,"Type",new Array('FAX','PORTABLE','TELEPHONE','E-MAIL'));
var Contacts_Coordonnées_2=new clAttribut("cn_coordonnee","contact",null);


	/* Ce composant représente: contact.cn_coordonnee sous le nom "Coordonnées" */
var Compo_Contacts_Coordonnées_2=new clCompoTextBox(Contacts_Coordonnées_2,null,"Coordonnées",false,false);
var Contacts_Liste_des_contacts0=new clEnsembleAttributs("contact",
	new Array(
	new clLiaison(null,Col_N0_Type_De_Contacts_Liste_des_contacts0)
	,new clLiaison(null,Col_N1_Coordonnées_De_Contacts_Liste_des_contacts0)
	),
	new Array(
	new clLiaison(null,Contacts_Type_1)
	,new clLiaison(null,Contacts_Coordonnées_2)
	));

var Titre_Contacts_Liste_des_contacts0=new Array("Type","Coordonnées");

	/* Ce composant représente: des éléments de la table contact sous le nom "Liste des contacts" */
var Compo_Contacts_Liste_des_contacts0=new clCompoListe(Contacts_Liste_des_contacts0,new Array(new clInterfaceFiltrageVide()),Titre_Contacts_Liste_des_contacts0,"Liste des contacts",true,false);

	/* Ce composant représente: contact.undefined sous le nom "Liste des contacts" */
 if(ALeDroit(0,"contact"))
 {
Compo_Contacts_Liste_des_contacts0.GenererXUL(top.document.getElementById("Contacts_Liste_des_contacts0"));

 }

	/* On l'ajoute au tableau global à l'indice 111*/
top.TAB_GLOBAL_COMPO[111]=Compo_Contacts_Liste_des_contacts0;

	/* Ce composant représente: des éléments de la table contact sous le nom "Type" */
 if(ALeDroit(0,"contact"))
 {
Compo_Contacts_Type_1.GenererXUL(top.document.getElementById("Contacts_Liste_des_contacts0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 114*/
top.TAB_GLOBAL_COMPO[114]=Compo_Contacts_Type_1;

	/* Ce composant représente: des éléments de la table contact sous le nom "Coordonnées" */
 if(ALeDroit(0,"contact"))
 {
Compo_Contacts_Coordonnées_2.GenererXUL(top.document.getElementById("Contacts_Liste_des_contacts0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 115*/
top.TAB_GLOBAL_COMPO[115]=Compo_Contacts_Coordonnées_2;
var Col_N0_Devis_De_Devis_Liste_des_devis0=new clAttribut("de_numero","devis",null);

var Col_N1_Date_De_Devis_Liste_des_devis0=new clAttribut("de_date","devis",null);

var Col_N2_Montant_TTC_De_Devis_Liste_des_devis0=new clAttribut("de_montantttc","devis",null);

var Devis_Date_1=new clAttribut("de_date","devis",null);


	/* Ce composant représente: devis.de_date sous le nom "Date" */
var Compo_Devis_Date_1=new clCompoTextBox(Devis_Date_1,null,"Date",false,false);
var Devis_Libellé_2=new clAttribut("de_libelle","devis",null);


	/* Ce composant représente: devis.de_libelle sous le nom "Libellé" */
var Compo_Devis_Libellé_2=new clCompoTextBox(Devis_Libellé_2,null,"Libellé",false,false);
var Devis_Suivi_par_3=new clAttribut("em_libelle","employe",null);


	/* Ce composant représente: employe.em_libelle sous le nom "Suivi par" */
var Compo_Devis_Suivi_par_3=new clCompoListeDeroulanteSimple(Devis_Suivi_par_3,null,"Suivi par");
var Joint_Esclave_Devis_Suivi_par_3=new clJointureMulti("devis",
	new Array(
	new stJointure("employe","em_numero","em_numero",null,false)
	));
var Devis_Acompte_à_payer_4=new clAttribut("de_acompte","devis",null);


	/* Ce composant représente: devis.de_acompte sous le nom "Acompte à payer" */
var Compo_Devis_Acompte_à_payer_4=new clCompoCheckBox(Devis_Acompte_à_payer_4,null,"Acompte à payer");
var Devis_Devis_sous_forme_de_lettre_5=new clAttribut("de_lettre","devis",null);


	/* Ce composant représente: devis.de_lettre sous le nom "Devis sous forme de lettre" */
var Compo_Devis_Devis_sous_forme_de_lettre_5=new clCompoCheckBox(Devis_Devis_sous_forme_de_lettre_5,null,"Devis sous forme de lettre");
var Devis_Civilités_6=new clAttribut("de_civilites","devis",null);


	/* Ce composant représente: devis.de_civilites sous le nom "Civilités" */
var Compo_Devis_Civilités_6=new clCompoTextBox(Devis_Civilités_6,null,"Civilités",false,false);
var Devis_Introduction_de_la_lettre_7=new clAttribut("de_introduction","devis",null);


	/* Ce composant représente: devis.de_introduction sous le nom "Introduction de la lettre" */
var Compo_Devis_Introduction_de_la_lettre_7=new clCompoTextBox(Devis_Introduction_de_la_lettre_7,null,"Introduction de la lettre",false,true);
var Col_N0_Produit_De_Devis_Lignes_du_devis_8=new clAttribut("pd_libelle","produit",null);

var Joint_Col_N0_Produit_De_Devis_Lignes_du_devis_8=new clJointureMulti("ligne",
	new Array(
	new stJointure("produit","pd_numero","pd_numero",null,true)
	));
var Col_N1_Qté__De_Devis_Lignes_du_devis_8=new clAttribut("l_quantite","ligne",null);

var Col_N2_Montant_HT_De_Devis_Lignes_du_devis_8=new clAttribut("l_montantht","ligne",null);

var Col_N3_Montant_TTC_De_Devis_Lignes_du_devis_8=new clAttribut("l_montantttc","ligne",null);

var Devis_Produit_9=new clAttribut("pd_libelle","produit",null);


	/* Ce composant représente: produit.pd_libelle sous le nom "Produit" */
var Compo_Devis_Produit_9=new clCompoListeDeroulanteSimple(Devis_Produit_9,new Array(clCompoListeDeroulanteSimple.prototype.FiltreParDefaut(),Filtre_DevisLigneProduit=new clInterfaceFiltragePermanantCustom("pd_actif=true")),"Produit");
var Joint_Esclave_Devis_Produit_9=new clJointureMulti("ligne",
	new Array(
	new stJointure("produit","pd_numero","pd_numero",null,false)
	));
var Devis_Quantité__10=new clAttribut("l_quantite","ligne",null);


	/* Ce composant représente: ligne.l_quantite sous le nom "Quantité." */
var Compo_Devis_Quantité__10=new clCompoTextBox(Devis_Quantité__10,null,"Quantité.",false,false);
var Devis_Notes_11=new clAttribut("l_notes","ligne",null);


	/* Ce composant représente: ligne.l_notes sous le nom "Notes" */
var Compo_Devis_Notes_11=new clCompoTextBox(Devis_Notes_11,null,"Notes",false,true);
var Devis_Lignes_du_devis_8=new clEnsembleAttributs("ligne",
	new Array(
	new clLiaison(Joint_Col_N0_Produit_De_Devis_Lignes_du_devis_8,Col_N0_Produit_De_Devis_Lignes_du_devis_8)
	,new clLiaison(null,Col_N1_Qté__De_Devis_Lignes_du_devis_8)
	,new clLiaison(null,Col_N2_Montant_HT_De_Devis_Lignes_du_devis_8)
	,new clLiaison(null,Col_N3_Montant_TTC_De_Devis_Lignes_du_devis_8)
	),
	new Array(
	new clLiaison(Joint_Esclave_Devis_Produit_9,Devis_Produit_9)
	,new clLiaison(null,Devis_Quantité__10)
	,new clLiaison(null,Devis_Notes_11)
	));

var Titre_Devis_Lignes_du_devis_8=new Array("Produit","Qté.","Montant HT","Montant TTC");

	/* Ce composant représente: des éléments de la table ligne sous le nom "Lignes du devis" */
var Compo_Devis_Lignes_du_devis_8=new clCompoListe(Devis_Lignes_du_devis_8,null,Titre_Devis_Lignes_du_devis_8,"Lignes du devis",true,false);
var Joint_Esclave_Devis_Lignes_du_devis_8=new clJointureMulti("devis",
	new Array(
	new stJointure("ligne","de_numero","de_numero",null,false)
	));
var Devis_Liste_des_devis0=new clEnsembleAttributs("devis",
	new Array(
	new clLiaison(null,Col_N0_Devis_De_Devis_Liste_des_devis0)
	,new clLiaison(null,Col_N1_Date_De_Devis_Liste_des_devis0)
	,new clLiaison(null,Col_N2_Montant_TTC_De_Devis_Liste_des_devis0)
	),
	new Array(
	new clLiaison(null,Devis_Date_1)
	,new clLiaison(null,Devis_Libellé_2)
	,new clLiaison(Joint_Esclave_Devis_Suivi_par_3,Devis_Suivi_par_3)
	,new clLiaison(null,Devis_Acompte_à_payer_4)
	,new clLiaison(null,Devis_Devis_sous_forme_de_lettre_5)
	,new clLiaison(null,Devis_Civilités_6)
	,new clLiaison(null,Devis_Introduction_de_la_lettre_7)
	,new clLiaison(Joint_Esclave_Devis_Lignes_du_devis_8,Devis_Lignes_du_devis_8)
	));

var Titre_Devis_Liste_des_devis0=new Array("Devis","Date","Montant TTC");

	/* Ce composant représente: des éléments de la table devis sous le nom "Liste des devis" */
var Compo_Devis_Liste_des_devis0=new clCompoListe(Devis_Liste_des_devis0,new Array(new clInterfaceFiltrageVide()),Titre_Devis_Liste_des_devis0,"Liste des devis",true,false);

	/* Ce composant représente: devis.undefined sous le nom "Liste des devis" */
 if(ALeDroit(0,"devis"))
 {
Compo_Devis_Liste_des_devis0.GenererXUL(top.document.getElementById("Devis_Liste_des_devis0"));

 }

	/* On l'ajoute au tableau global à l'indice 116*/
top.TAB_GLOBAL_COMPO[116]=Compo_Devis_Liste_des_devis0;

	/* Ce composant représente: des éléments de la table devis sous le nom "Date" */
 if(ALeDroit(0,"devis"))
 {
Compo_Devis_Date_1.GenererXUL(top.document.getElementById("Devis_Liste_des_devis0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 120*/
top.TAB_GLOBAL_COMPO[120]=Compo_Devis_Date_1;

	/* Ce composant représente: des éléments de la table devis sous le nom "Libellé" */
 if(ALeDroit(0,"devis"))
 {
Compo_Devis_Libellé_2.GenererXUL(top.document.getElementById("Devis_Liste_des_devis0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 121*/
top.TAB_GLOBAL_COMPO[121]=Compo_Devis_Libellé_2;

	/* Ce composant représente: des éléments de la table employe sous le nom "Suivi par" */
 if(ALeDroit(0,"employe"))
 {
Compo_Devis_Suivi_par_3.GenererXUL(top.document.getElementById("Devis_Liste_des_devis0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 122*/
top.TAB_GLOBAL_COMPO[122]=Compo_Devis_Suivi_par_3;

	/* Ce composant représente: des éléments de la table devis sous le nom "Acompte à payer" */
 if(ALeDroit(0,"devis"))
 {
Compo_Devis_Acompte_à_payer_4.GenererXUL(top.document.getElementById("Devis_Liste_des_devis0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 123*/
top.TAB_GLOBAL_COMPO[123]=Compo_Devis_Acompte_à_payer_4;

	/* Ce composant représente: des éléments de la table devis sous le nom "Devis sous forme de lettre" */
 if(ALeDroit(0,"devis"))
 {
Compo_Devis_Devis_sous_forme_de_lettre_5.GenererXUL(top.document.getElementById("Devis_Liste_des_devis0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 124*/
top.TAB_GLOBAL_COMPO[124]=Compo_Devis_Devis_sous_forme_de_lettre_5;

	/* Ce composant représente: des éléments de la table devis sous le nom "Civilités" */
 if(ALeDroit(0,"devis"))
 {
Compo_Devis_Civilités_6.GenererXUL(top.document.getElementById("Devis_Liste_des_devis0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 125*/
top.TAB_GLOBAL_COMPO[125]=Compo_Devis_Civilités_6;

	/* Ce composant représente: des éléments de la table devis sous le nom "Introduction de la lettre" */
 if(ALeDroit(0,"devis"))
 {
Compo_Devis_Introduction_de_la_lettre_7.GenererXUL(top.document.getElementById("Devis_Liste_des_devis0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 126*/
top.TAB_GLOBAL_COMPO[126]=Compo_Devis_Introduction_de_la_lettre_7;

	/* Ce composant représente: ligne.undefined sous le nom "Lignes du devis" */
 if(ALeDroit(0,"ligne"))
 {
Compo_Devis_Lignes_du_devis_8.GenererXUL(top.document.getElementById("Devis_Lignes_du_devis_8"));

 }

	/* On l'ajoute au tableau global à l'indice 127*/
top.TAB_GLOBAL_COMPO[127]=Compo_Devis_Lignes_du_devis_8;

	/* Ce composant représente: des éléments de la table produit sous le nom "Produit" */
 if(ALeDroit(0,"produit"))
 {
Compo_Devis_Produit_9.GenererXUL(top.document.getElementById("Devis_Lignes_du_devis_8_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 132*/
top.TAB_GLOBAL_COMPO[132]=Compo_Devis_Produit_9;

	/* Ce composant représente: des éléments de la table ligne sous le nom "Quantité." */
 if(ALeDroit(0,"ligne"))
 {
Compo_Devis_Quantité__10.GenererXUL(top.document.getElementById("Devis_Lignes_du_devis_8_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 133*/
top.TAB_GLOBAL_COMPO[133]=Compo_Devis_Quantité__10;

	/* Ce composant représente: des éléments de la table ligne sous le nom "Notes" */
 if(ALeDroit(0,"ligne"))
 {
Compo_Devis_Notes_11.GenererXUL(top.document.getElementById("Devis_Lignes_du_devis_8_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 134*/
top.TAB_GLOBAL_COMPO[134]=Compo_Devis_Notes_11;
var Col_N0_N__Fact__De_Facture_Liste_des_factures0=new clAttribut("fa_numfact","facture",null);

var Col_N1_N__Devis_De_Facture_Liste_des_factures0=new clAttribut("de_numero","facture",null);

var Col_N2_Date_De_Facture_Liste_des_factures0=new clAttribut("fa_date","facture",null);

var Col_N3_Agent_De_Facture_Liste_des_factures0=new clAttribut("ag_initiales","agent",null);

var Joint_Col_N3_Agent_De_Facture_Liste_des_factures0=new clJointureMulti("facture",
	new Array(
	new stJointure("agent","ag_numero","ag_numero",null,true)
	));
var Col_N4_Montant_TTC_De_Facture_Liste_des_factures0=new clAttribut("fa_montantttc","facture",null);

var Facture_N__Facture_1=new clAttribut("fa_numfact","facture",null);


	/* Ce composant représente: facture.fa_numfact sous le nom "N° Facture" */
var Compo_Facture_N__Facture_1=new clCompolabel(Facture_N__Facture_1,null,"N° Facture",undefined,undefined);
var Facture_Date_2=new clAttribut("fa_date","facture",null);


	/* Ce composant représente: facture.fa_date sous le nom "Date" */
var Compo_Facture_Date_2=new clCompolabel(Facture_Date_2,null,"Date",undefined,undefined);
var Facture_Libellé_3=new clAttribut("fa_libelle","facture",null);


	/* Ce composant représente: facture.fa_libelle sous le nom "Libellé" */
var Compo_Facture_Libellé_3=new clCompolabel(Facture_Libellé_3,null,"Libellé",undefined,undefined);
var Facture_Réduction_4=new clAttribut("fa_reduction","facture",null);


	/* Ce composant représente: facture.fa_reduction sous le nom "Réduction" */
var Compo_Facture_Réduction_4=new clCompolabel(Facture_Réduction_4,null,"Réduction",undefined,undefined);
var Facture_Montant_HT_5=new clAttribut("fa_montantht","facture",null);


	/* Ce composant représente: facture.fa_montantht sous le nom "Montant HT" */
var Compo_Facture_Montant_HT_5=new clCompolabel(Facture_Montant_HT_5,null,"Montant HT",undefined,undefined);
var Facture_Montant_TTC_6=new clAttribut("fa_montantttc","facture",null);


	/* Ce composant représente: facture.fa_montantttc sous le nom "Montant TTC" */
var Compo_Facture_Montant_TTC_6=new clCompolabel(Facture_Montant_TTC_6,null,"Montant TTC",undefined,undefined);
var Facture_Annotation_7=new clAttribut("fa_annotation","facture",null);


	/* Ce composant représente: facture.fa_annotation sous le nom "Annotation" */
var Compo_Facture_Annotation_7=new clCompoTextBox(Facture_Annotation_7,null,"Annotation",false,false);
var Col_N0_Produit_De_Facture_Lignes_de_la_facture_8=new clAttribut("pd_libelle","produit",null);

var Joint_Col_N0_Produit_De_Facture_Lignes_de_la_facture_8=new clJointureMulti("lignefacture",
	new Array(
	new stJointure("produit","pd_numero","pd_numero",null,true)
	));
var Col_N1_Qté__De_Facture_Lignes_de_la_facture_8=new clAttribut("lf_quantite","lignefacture",null);

var Col_N2_Montant_HT_De_Facture_Lignes_de_la_facture_8=new clAttribut("lf_montantht","lignefacture",null);

var Col_N3_Montant_TTC_De_Facture_Lignes_de_la_facture_8=new clAttribut("lf_montantttc","lignefacture",null);

var Facture_Lignes_de_la_facture_8=new clEnsembleAttributs("lignefacture",
	new Array(
	new clLiaison(Joint_Col_N0_Produit_De_Facture_Lignes_de_la_facture_8,Col_N0_Produit_De_Facture_Lignes_de_la_facture_8)
	,new clLiaison(null,Col_N1_Qté__De_Facture_Lignes_de_la_facture_8)
	,new clLiaison(null,Col_N2_Montant_HT_De_Facture_Lignes_de_la_facture_8)
	,new clLiaison(null,Col_N3_Montant_TTC_De_Facture_Lignes_de_la_facture_8)
	),
	null);

var Titre_Facture_Lignes_de_la_facture_8=new Array("Produit","Qté.","Montant HT","Montant TTC");

	/* Ce composant représente: des éléments de la table lignefacture sous le nom "Lignes de la facture" */
var Compo_Facture_Lignes_de_la_facture_8=new clCompoListe(Facture_Lignes_de_la_facture_8,null,Titre_Facture_Lignes_de_la_facture_8,"Lignes de la facture",true,false);
var Joint_Esclave_Facture_Lignes_de_la_facture_8=new clJointureMulti("facture",
	new Array(
	new stJointure("lignefacture","fa_numero","fa_numero",null,false)
	));
var Col_N0_Date_De_Facture_Avoirs_de_la_facture_9=new clAttribut("av_date","avoir",null);

var Col_N1_Montant_De_Facture_Avoirs_de_la_facture_9=new clAttribut("av_montantttc","avoir",null);

var Facture_Avoirs_de_la_facture_9=new clEnsembleAttributs("avoir",
	new Array(
	new clLiaison(null,Col_N0_Date_De_Facture_Avoirs_de_la_facture_9)
	,new clLiaison(null,Col_N1_Montant_De_Facture_Avoirs_de_la_facture_9)
	),
	null);

var Titre_Facture_Avoirs_de_la_facture_9=new Array("Date","Montant");

	/* Ce composant représente: des éléments de la table avoir sous le nom "Avoirs de la facture" */
var Compo_Facture_Avoirs_de_la_facture_9=new clCompoListe(Facture_Avoirs_de_la_facture_9,new Array(clCompoListe.prototype.FiltreParDefaut(),Filtre_Dep_Avoir_0=new clInterfaceFiltrageRelationOnglet("Avoir",Gerer_Avoir,OuvrirOnglet_Facture)),Titre_Facture_Avoirs_de_la_facture_9,"Avoirs de la facture",true,false);
var Joint_Esclave_Facture_Avoirs_de_la_facture_9=new clJointureMulti("facture",
	new Array(
	new stJointure("avoir","fa_numero","fa_numero",null,false)
	));
var Col_N0_N__De_Facture_Règlements_10=new clAttribut("rg_numero","facturereglement",null);

var Col_N1_Date_De_Facture_Règlements_10=new clAttribut("rg_date","reglement",null);

var Joint_Col_N1_Date_De_Facture_Règlements_10=new clJointureMulti("facturereglement",
	new Array(
	new stJointure("reglement","rg_numero","rg_numero",null,true)
	));
var Col_N2_Montant_De_Facture_Règlements_10=new clAttribut("rg_montant","reglement",null);

var Joint_Col_N2_Montant_De_Facture_Règlements_10=new clJointureMulti("facturereglement",
	new Array(
	new stJointure("reglement","rg_numero","rg_numero",null,true)
	));
var Col_N3_Mode_De_Facture_Règlements_10=new clAttribut("rg_mode","reglement",null);

var Joint_Col_N3_Mode_De_Facture_Règlements_10=new clJointureMulti("facturereglement",
	new Array(
	new stJointure("reglement","rg_numero","rg_numero",null,true)
	));
var Col_N4_Etat_De_Facture_Règlements_10=new clAttribut("rg_etat","reglement",null);

var Joint_Col_N4_Etat_De_Facture_Règlements_10=new clJointureMulti("facturereglement",
	new Array(
	new stJointure("reglement","rg_numero","rg_numero",null,true)
	));
var Facture_Règlement_11=new clAttribut("rg_libelle","reglement",null);


	/* Ce composant représente: reglement.rg_libelle sous le nom "Règlement" */
var Compo_Facture_Règlement_11=new clCompoListeDeroulanteSimple(Facture_Règlement_11,new Array(clCompoListeDeroulanteSimple.prototype.FiltreParDefaut(),Filtre_Dep_Réglement_0=new clInterfaceFiltrageRelationOnglet("Réglement",Gerer_Réglement,OuvrirOnglet_Facture)),"Règlement");
var Joint_Esclave_Facture_Règlement_11=new clJointureMulti("facturereglement",
	new Array(
	new stJointure("reglement","rg_numero","rg_numero",null,false)
	));
var Facture_Ce_règlement_est_un_acompte_12=new clAttribut("fr_acompte","facturereglement",null);


	/* Ce composant représente: facturereglement.fr_acompte sous le nom "Ce règlement est un acompte" */
var Compo_Facture_Ce_règlement_est_un_acompte_12=new clCompoCheckBox(Facture_Ce_règlement_est_un_acompte_12,null,"Ce règlement est un acompte");
var Facture_Une_part_du_montant_du_règlement_est_utilisé_13=new clAttribut("fr_partiel","facturereglement",null);


	/* Ce composant représente: facturereglement.fr_partiel sous le nom "Une part du montant du règlement est utilisé" */
var Compo_Facture_Une_part_du_montant_du_règlement_est_utilisé_13=new clCompoCheckBox(Facture_Une_part_du_montant_du_règlement_est_utilisé_13,null,"Une part du montant du règlement est utilisé");
var Facture_Montant_de_la_part_14=new clAttribut("fr_montant","facturereglement",null);


	/* Ce composant représente: facturereglement.fr_montant sous le nom "Montant de la part" */
var Compo_Facture_Montant_de_la_part_14=new clCompoTextBox(Facture_Montant_de_la_part_14,null,"Montant de la part",false,false);
var Facture_Règlements_10=new clEnsembleAttributs("facturereglement",
	new Array(
	new clLiaison(null,Col_N0_N__De_Facture_Règlements_10)
	,new clLiaison(Joint_Col_N1_Date_De_Facture_Règlements_10,Col_N1_Date_De_Facture_Règlements_10)
	,new clLiaison(Joint_Col_N2_Montant_De_Facture_Règlements_10,Col_N2_Montant_De_Facture_Règlements_10)
	,new clLiaison(Joint_Col_N3_Mode_De_Facture_Règlements_10,Col_N3_Mode_De_Facture_Règlements_10)
	,new clLiaison(Joint_Col_N4_Etat_De_Facture_Règlements_10,Col_N4_Etat_De_Facture_Règlements_10)
	),
	new Array(
	new clLiaison(Joint_Esclave_Facture_Règlement_11,Facture_Règlement_11)
	,new clLiaison(null,Facture_Ce_règlement_est_un_acompte_12)
	,new clLiaison(null,Facture_Une_part_du_montant_du_règlement_est_utilisé_13)
	,new clLiaison(null,Facture_Montant_de_la_part_14)
	));

var Titre_Facture_Règlements_10=new Array("N°","Date","Montant","Mode","Etat");

	/* Ce composant représente: des éléments de la table facturereglement sous le nom "Règlements" */
var Compo_Facture_Règlements_10=new clCompoListe(Facture_Règlements_10,null,Titre_Facture_Règlements_10,"Règlements",true,false);
var Joint_Esclave_Facture_Règlements_10=new clJointureMulti("facture",
	new Array(
	new stJointure("facturereglement","fa_numero","fa_numero",null,false)
	));
var Col_N0_Début_De_Facture_Routages_15=new clAttribut("ro_debutservice","routage",null);

var Col_N1_Fin_De_Facture_Routages_15=new clAttribut("ro_finservice","routage",null);

var Col_N2_Qté__De_Facture_Routages_15=new clAttribut("ro_quantite","routage",null);

var Col_N3_Personne_De_Facture_Routages_15=new clAttribut("pe_libelle","personne",null);

var Joint_Col_N3_Personne_De_Facture_Routages_15=new clJointureMulti("routage",
	new Array(
	new stJointure("personne","pe_numero","pe_numero",null,true)
	));
var Facture_Personne_16=new clAttribut("pe_fullname","personne",null);


	/* Ce composant représente: personne.pe_fullname sous le nom "Personne" */
var Compo_Facture_Personne_16=new clCompoListeDeroulanteSimple(Facture_Personne_16,null,"Personne");
var Joint_Esclave_Facture_Personne_16=new clJointureMulti("routage",
	new Array(
	new stJointure("personne","pe_numero","pe_numero",null,false)
	));
var Facture_Début_17=new clAttribut("ro_debutservice","routage",null);


	/* Ce composant représente: routage.ro_debutservice sous le nom "Début" */
var Compo_Facture_Début_17=new clCompoTextBox(Facture_Début_17,null,"Début",false,false);
var Facture_Fin_18=new clAttribut("ro_finservice","routage",null);


	/* Ce composant représente: routage.ro_finservice sous le nom "Fin" */
var Compo_Facture_Fin_18=new clCompoTextBox(Facture_Fin_18,null,"Fin",false,false);
var Facture_Quantité_19=new clAttribut("ro_quantite","routage",null);


	/* Ce composant représente: routage.ro_quantite sous le nom "Quantité" */
var Compo_Facture_Quantité_19=new clCompoTextBox(Facture_Quantité_19,null,"Quantité",false,false);
var Facture_Routages_15=new clEnsembleAttributs("routage",
	new Array(
	new clLiaison(null,Col_N0_Début_De_Facture_Routages_15)
	,new clLiaison(null,Col_N1_Fin_De_Facture_Routages_15)
	,new clLiaison(null,Col_N2_Qté__De_Facture_Routages_15)
	,new clLiaison(Joint_Col_N3_Personne_De_Facture_Routages_15,Col_N3_Personne_De_Facture_Routages_15)
	),
	new Array(
	new clLiaison(Joint_Esclave_Facture_Personne_16,Facture_Personne_16)
	,new clLiaison(null,Facture_Début_17)
	,new clLiaison(null,Facture_Fin_18)
	,new clLiaison(null,Facture_Quantité_19)
	));

var Titre_Facture_Routages_15=new Array("Début","Fin","Qté.","Personne");

	/* Ce composant représente: des éléments de la table routage sous le nom "Routages" */
var Compo_Facture_Routages_15=new clCompoListe(Facture_Routages_15,null,Titre_Facture_Routages_15,"Routages",true,false);
var Joint_Esclave_Facture_Routages_15=new clJointureMulti("facture",
	new Array(
	new stJointure("routage","fa_numero","fa_numero",null,false)
	));
var Facture_Liste_des_factures0=new clEnsembleAttributs("facture",
	new Array(
	new clLiaison(null,Col_N0_N__Fact__De_Facture_Liste_des_factures0)
	,new clLiaison(null,Col_N1_N__Devis_De_Facture_Liste_des_factures0)
	,new clLiaison(null,Col_N2_Date_De_Facture_Liste_des_factures0)
	,new clLiaison(Joint_Col_N3_Agent_De_Facture_Liste_des_factures0,Col_N3_Agent_De_Facture_Liste_des_factures0)
	,new clLiaison(null,Col_N4_Montant_TTC_De_Facture_Liste_des_factures0)
	),
	new Array(
	new clLiaison(null,Facture_N__Facture_1)
	,new clLiaison(null,Facture_Date_2)
	,new clLiaison(null,Facture_Libellé_3)
	,new clLiaison(null,Facture_Réduction_4)
	,new clLiaison(null,Facture_Montant_HT_5)
	,new clLiaison(null,Facture_Montant_TTC_6)
	,new clLiaison(null,Facture_Annotation_7)
	,new clLiaison(Joint_Esclave_Facture_Lignes_de_la_facture_8,Facture_Lignes_de_la_facture_8)
	,new clLiaison(Joint_Esclave_Facture_Avoirs_de_la_facture_9,Facture_Avoirs_de_la_facture_9)
	,new clLiaison(Joint_Esclave_Facture_Règlements_10,Facture_Règlements_10)
	,new clLiaison(Joint_Esclave_Facture_Routages_15,Facture_Routages_15)
	));

var Titre_Facture_Liste_des_factures0=new Array("N° Fact.","N° Devis","Date","Agent","Montant TTC");

	/* Ce composant représente: des éléments de la table facture sous le nom "Liste des factures" */
var Compo_Facture_Liste_des_factures0=new clCompoListe(Facture_Liste_des_factures0,new Array(new clInterfaceFiltrageVide()),Titre_Facture_Liste_des_factures0,"Liste des factures",true,false);

	/* Ce composant représente: facture.undefined sous le nom "Liste des factures" */
 if(ALeDroit(0,"facture"))
 {
Compo_Facture_Liste_des_factures0.GenererXUL(top.document.getElementById("Facture_Liste_des_factures0"));

 }

	/* On l'ajoute au tableau global à l'indice 135*/
top.TAB_GLOBAL_COMPO[135]=Compo_Facture_Liste_des_factures0;

	/* Ce composant représente: des éléments de la table facture sous le nom "N° Facture" */
 if(ALeDroit(0,"facture"))
 {
Compo_Facture_N__Facture_1.GenererXUL(top.document.getElementById("Facture_Liste_des_factures0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 141*/
top.TAB_GLOBAL_COMPO[141]=Compo_Facture_N__Facture_1;

	/* Ce composant représente: des éléments de la table facture sous le nom "Date" */
 if(ALeDroit(0,"facture"))
 {
Compo_Facture_Date_2.GenererXUL(top.document.getElementById("Facture_Liste_des_factures0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 142*/
top.TAB_GLOBAL_COMPO[142]=Compo_Facture_Date_2;

	/* Ce composant représente: des éléments de la table facture sous le nom "Libellé" */
 if(ALeDroit(0,"facture"))
 {
Compo_Facture_Libellé_3.GenererXUL(top.document.getElementById("Facture_Liste_des_factures0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 143*/
top.TAB_GLOBAL_COMPO[143]=Compo_Facture_Libellé_3;

	/* Ce composant représente: des éléments de la table facture sous le nom "Réduction" */
 if(ALeDroit(0,"facture"))
 {
Compo_Facture_Réduction_4.GenererXUL(top.document.getElementById("Facture_Liste_des_factures0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 144*/
top.TAB_GLOBAL_COMPO[144]=Compo_Facture_Réduction_4;

	/* Ce composant représente: des éléments de la table facture sous le nom "Montant HT" */
 if(ALeDroit(0,"facture"))
 {
Compo_Facture_Montant_HT_5.GenererXUL(top.document.getElementById("Facture_Liste_des_factures0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 145*/
top.TAB_GLOBAL_COMPO[145]=Compo_Facture_Montant_HT_5;

	/* Ce composant représente: des éléments de la table facture sous le nom "Montant TTC" */
 if(ALeDroit(0,"facture"))
 {
Compo_Facture_Montant_TTC_6.GenererXUL(top.document.getElementById("Facture_Liste_des_factures0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 146*/
top.TAB_GLOBAL_COMPO[146]=Compo_Facture_Montant_TTC_6;

	/* Ce composant représente: des éléments de la table facture sous le nom "Annotation" */
 if(ALeDroit(0,"facture"))
 {
Compo_Facture_Annotation_7.GenererXUL(top.document.getElementById("Facture_Liste_des_factures0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 147*/
top.TAB_GLOBAL_COMPO[147]=Compo_Facture_Annotation_7;

	/* Ce composant représente: lignefacture.undefined sous le nom "Lignes de la facture" */
 if(ALeDroit(0,"lignefacture"))
 {
Compo_Facture_Lignes_de_la_facture_8.GenererXUL(top.document.getElementById("Facture_Lignes_de_la_facture_8"));

 }

	/* On l'ajoute au tableau global à l'indice 148*/
top.TAB_GLOBAL_COMPO[148]=Compo_Facture_Lignes_de_la_facture_8;

	/* Ce composant représente: avoir.undefined sous le nom "Avoirs de la facture" */
 if(ALeDroit(0,"avoir"))
 {
Compo_Facture_Avoirs_de_la_facture_9.GenererXUL(top.document.getElementById("Facture_Avoirs_de_la_facture_9"));

 }

	/* On l'ajoute au tableau global à l'indice 153*/
top.TAB_GLOBAL_COMPO[153]=Compo_Facture_Avoirs_de_la_facture_9;

	/* Ce composant représente: facturereglement.undefined sous le nom "Règlements" */
 if(ALeDroit(0,"facturereglement"))
 {
Compo_Facture_Règlements_10.GenererXUL(top.document.getElementById("Facture_Règlements_10"));

 }

	/* On l'ajoute au tableau global à l'indice 156*/
top.TAB_GLOBAL_COMPO[156]=Compo_Facture_Règlements_10;

	/* Ce composant représente: des éléments de la table reglement sous le nom "Règlement" */
 if(ALeDroit(0,"reglement"))
 {
Compo_Facture_Règlement_11.GenererXUL(top.document.getElementById("Facture_Règlements_10_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 162*/
top.TAB_GLOBAL_COMPO[162]=Compo_Facture_Règlement_11;

	/* Ce composant représente: des éléments de la table facturereglement sous le nom "Ce règlement est un acompte" */
 if(ALeDroit(0,"facturereglement"))
 {
Compo_Facture_Ce_règlement_est_un_acompte_12.GenererXUL(top.document.getElementById("Facture_Règlements_10_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 163*/
top.TAB_GLOBAL_COMPO[163]=Compo_Facture_Ce_règlement_est_un_acompte_12;

	/* Ce composant représente: des éléments de la table facturereglement sous le nom "Une part du montant du règlement est utilisé" */
 if(ALeDroit(0,"facturereglement"))
 {
Compo_Facture_Une_part_du_montant_du_règlement_est_utilisé_13.GenererXUL(top.document.getElementById("Facture_Règlements_10_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 164*/
top.TAB_GLOBAL_COMPO[164]=Compo_Facture_Une_part_du_montant_du_règlement_est_utilisé_13;

	/* Ce composant représente: des éléments de la table facturereglement sous le nom "Montant de la part" */
 if(ALeDroit(0,"facturereglement"))
 {
Compo_Facture_Montant_de_la_part_14.GenererXUL(top.document.getElementById("Facture_Règlements_10_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 165*/
top.TAB_GLOBAL_COMPO[165]=Compo_Facture_Montant_de_la_part_14;

	/* Ce composant représente: routage.undefined sous le nom "Routages" */
 if(ALeDroit(0,"routage"))
 {
Compo_Facture_Routages_15.GenererXUL(top.document.getElementById("Facture_Routages_15"));

 }

	/* On l'ajoute au tableau global à l'indice 166*/
top.TAB_GLOBAL_COMPO[166]=Compo_Facture_Routages_15;

	/* Ce composant représente: des éléments de la table personne sous le nom "Personne" */
 if(ALeDroit(0,"personne"))
 {
Compo_Facture_Personne_16.GenererXUL(top.document.getElementById("Facture_Routages_15_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 171*/
top.TAB_GLOBAL_COMPO[171]=Compo_Facture_Personne_16;

	/* Ce composant représente: des éléments de la table routage sous le nom "Début" */
 if(ALeDroit(0,"routage"))
 {
Compo_Facture_Début_17.GenererXUL(top.document.getElementById("Facture_Routages_15_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 172*/
top.TAB_GLOBAL_COMPO[172]=Compo_Facture_Début_17;

	/* Ce composant représente: des éléments de la table routage sous le nom "Fin" */
 if(ALeDroit(0,"routage"))
 {
Compo_Facture_Fin_18.GenererXUL(top.document.getElementById("Facture_Routages_15_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 173*/
top.TAB_GLOBAL_COMPO[173]=Compo_Facture_Fin_18;

	/* Ce composant représente: des éléments de la table routage sous le nom "Quantité" */
 if(ALeDroit(0,"routage"))
 {
Compo_Facture_Quantité_19.GenererXUL(top.document.getElementById("Facture_Routages_15_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 174*/
top.TAB_GLOBAL_COMPO[174]=Compo_Facture_Quantité_19;
var Col_N0_N__Facture_De_Avoir_Liste_des_avoirs0=new clAttribut("av_numfact","avoir",null);

var Col_N1_Date_De_Avoir_Liste_des_avoirs0=new clAttribut("av_date","avoir",null);

var Col_N2_Montant_TTC_De_Avoir_Liste_des_avoirs0=new clAttribut("av_montantttc","avoir",null);

var Avoir_N__Facture_1=new clAttribut("av_numfact","avoir",null);


	/* Ce composant représente: avoir.av_numfact sous le nom "N° Facture" */
var Compo_Avoir_N__Facture_1=new clCompolabel(Avoir_N__Facture_1,null,"N° Facture",undefined,undefined);
var Avoir_Date_2=new clAttribut("av_date","avoir",null);


	/* Ce composant représente: avoir.av_date sous le nom "Date" */
var Compo_Avoir_Date_2=new clCompoTextBox(Avoir_Date_2,null,"Date",false,false);
var Avoir_Montant_TTC_3=new clAttribut("av_montantttc","avoir",null);


	/* Ce composant représente: avoir.av_montantttc sous le nom "Montant TTC" */
var Compo_Avoir_Montant_TTC_3=new clCompolabel(Avoir_Montant_TTC_3,null,"Montant TTC",undefined,undefined);
var Avoir_Montant_HT_4=new clAttribut("av_montantht","avoir",null);


	/* Ce composant représente: avoir.av_montantht sous le nom "Montant HT" */
var Compo_Avoir_Montant_HT_4=new clCompolabel(Avoir_Montant_HT_4,null,"Montant HT",undefined,undefined);
var Col_N0_Produit_De_Avoir_Lignes_de_l_avoir_5=new clAttribut("pd_libelle","produit",null);

var Joint_Col_N0_Produit_De_Avoir_Lignes_de_l_avoir_5=new clJointureMulti("ligneavoir",
	new Array(
	new stJointure("produit","pd_numero","pd_numero",null,true)
	));
var Col_N1_Qté__De_Avoir_Lignes_de_l_avoir_5=new clAttribut("la_quantite","ligneavoir",null);

var Col_N2_Montant_HT_De_Avoir_Lignes_de_l_avoir_5=new clAttribut("la_montantht","ligneavoir",null);

var Col_N3_Montant_TTC_De_Avoir_Lignes_de_l_avoir_5=new clAttribut("la_montantttc","ligneavoir",null);

var Avoir_Lignes_de_l_avoir_5=new clEnsembleAttributs("ligneavoir",
	new Array(
	new clLiaison(Joint_Col_N0_Produit_De_Avoir_Lignes_de_l_avoir_5,Col_N0_Produit_De_Avoir_Lignes_de_l_avoir_5)
	,new clLiaison(null,Col_N1_Qté__De_Avoir_Lignes_de_l_avoir_5)
	,new clLiaison(null,Col_N2_Montant_HT_De_Avoir_Lignes_de_l_avoir_5)
	,new clLiaison(null,Col_N3_Montant_TTC_De_Avoir_Lignes_de_l_avoir_5)
	),
	null);

var Titre_Avoir_Lignes_de_l_avoir_5=new Array("Produit","Qté.","Montant HT","Montant TTC");

	/* Ce composant représente: des éléments de la table ligneavoir sous le nom "Lignes de l'avoir" */
var Compo_Avoir_Lignes_de_l_avoir_5=new clCompoListe(Avoir_Lignes_de_l_avoir_5,null,Titre_Avoir_Lignes_de_l_avoir_5,"Lignes de l'avoir",true,false);
var Joint_Esclave_Avoir_Lignes_de_l_avoir_5=new clJointureMulti("avoir",
	new Array(
	new stJointure("ligneavoir","av_numero","av_numero",null,false)
	));
var Avoir_Liste_des_avoirs0=new clEnsembleAttributs("avoir",
	new Array(
	new clLiaison(null,Col_N0_N__Facture_De_Avoir_Liste_des_avoirs0)
	,new clLiaison(null,Col_N1_Date_De_Avoir_Liste_des_avoirs0)
	,new clLiaison(null,Col_N2_Montant_TTC_De_Avoir_Liste_des_avoirs0)
	),
	new Array(
	new clLiaison(null,Avoir_N__Facture_1)
	,new clLiaison(null,Avoir_Date_2)
	,new clLiaison(null,Avoir_Montant_TTC_3)
	,new clLiaison(null,Avoir_Montant_HT_4)
	,new clLiaison(Joint_Esclave_Avoir_Lignes_de_l_avoir_5,Avoir_Lignes_de_l_avoir_5)
	));

var Titre_Avoir_Liste_des_avoirs0=new Array("N° Facture","Date","Montant TTC");

	/* Ce composant représente: des éléments de la table avoir sous le nom "Liste des avoirs" */
var Compo_Avoir_Liste_des_avoirs0=new clCompoListe(Avoir_Liste_des_avoirs0,new Array(new clInterfaceFiltrageVide()),Titre_Avoir_Liste_des_avoirs0,"Liste des avoirs",true,false);

	/* Ce composant représente: avoir.undefined sous le nom "Liste des avoirs" */
 if(ALeDroit(0,"avoir"))
 {
Compo_Avoir_Liste_des_avoirs0.GenererXUL(top.document.getElementById("Avoir_Liste_des_avoirs0"));

 }

	/* On l'ajoute au tableau global à l'indice 175*/
top.TAB_GLOBAL_COMPO[175]=Compo_Avoir_Liste_des_avoirs0;

	/* Ce composant représente: des éléments de la table avoir sous le nom "N° Facture" */
 if(ALeDroit(0,"avoir"))
 {
Compo_Avoir_N__Facture_1.GenererXUL(top.document.getElementById("Avoir_Liste_des_avoirs0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 179*/
top.TAB_GLOBAL_COMPO[179]=Compo_Avoir_N__Facture_1;

	/* Ce composant représente: des éléments de la table avoir sous le nom "Date" */
 if(ALeDroit(0,"avoir"))
 {
Compo_Avoir_Date_2.GenererXUL(top.document.getElementById("Avoir_Liste_des_avoirs0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 180*/
top.TAB_GLOBAL_COMPO[180]=Compo_Avoir_Date_2;

	/* Ce composant représente: des éléments de la table avoir sous le nom "Montant TTC" */
 if(ALeDroit(0,"avoir"))
 {
Compo_Avoir_Montant_TTC_3.GenererXUL(top.document.getElementById("Avoir_Liste_des_avoirs0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 181*/
top.TAB_GLOBAL_COMPO[181]=Compo_Avoir_Montant_TTC_3;

	/* Ce composant représente: des éléments de la table avoir sous le nom "Montant HT" */
 if(ALeDroit(0,"avoir"))
 {
Compo_Avoir_Montant_HT_4.GenererXUL(top.document.getElementById("Avoir_Liste_des_avoirs0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 182*/
top.TAB_GLOBAL_COMPO[182]=Compo_Avoir_Montant_HT_4;

	/* Ce composant représente: ligneavoir.undefined sous le nom "Lignes de l'avoir" */
 if(ALeDroit(0,"ligneavoir"))
 {
Compo_Avoir_Lignes_de_l_avoir_5.GenererXUL(top.document.getElementById("Avoir_Lignes_de_l_avoir_5"));

 }

	/* On l'ajoute au tableau global à l'indice 183*/
top.TAB_GLOBAL_COMPO[183]=Compo_Avoir_Lignes_de_l_avoir_5;
var Col_N0_N__De_Réglement_Liste_des_réglements0=new clAttribut("rg_numero","reglement",null);

var Col_N1_Etat_De_Réglement_Liste_des_réglements0=new clAttribut("rg_etat","reglement",null);

var Col_N2_Date_De_Réglement_Liste_des_réglements0=new clAttribut("rg_date","reglement",null);

var Col_N3_Montant_De_Réglement_Liste_des_réglements0=new clAttribut("rg_montant","reglement",null);

var Col_N4_Mode_De_Réglement_Liste_des_réglements0=new clAttribut("mr_libelle","modereglement",null);

var Joint_Col_N4_Mode_De_Réglement_Liste_des_réglements0=new clJointureMulti("reglement",
	new Array(
	new stJointure("modereglement","mr_numero","mr_numero",null,true)
	));
var Réglement_Date_1=new clAttribut("rg_date","reglement",null);


	/* Ce composant représente: reglement.rg_date sous le nom "Date" */
var Compo_Réglement_Date_1=new clCompoTextBox(Réglement_Date_1,null,"Date",false,false);
var Réglement_Montant_2=new clAttribut("rg_montant","reglement",null);


	/* Ce composant représente: reglement.rg_montant sous le nom "Montant" */
var Compo_Réglement_Montant_2=new clCompoTextBox(Réglement_Montant_2,null,"Montant",false,false);
var Réglement_Mode_de_paiement_3=new clAttribut("mr_libelle","modereglement",null);


	/* Ce composant représente: modereglement.mr_libelle sous le nom "Mode de paiement" */
var Compo_Réglement_Mode_de_paiement_3=new clCompoListeDeroulanteSimple(Réglement_Mode_de_paiement_3,null,"Mode de paiement");
var Joint_Esclave_Réglement_Mode_de_paiement_3=new clJointureMulti("reglement",
	new Array(
	new stJointure("modereglement","mr_numero","mr_numero",null,false)
	));
var Réglement_Libellé_de_la_banque_4=new clAttribut("rg_libellebanque","reglement",null);


	/* Ce composant représente: reglement.rg_libellebanque sous le nom "Libellé de la banque" */
var Compo_Réglement_Libellé_de_la_banque_4=new clCompoTextBox(Réglement_Libellé_de_la_banque_4,null,"Libellé de la banque",false,false);
var Réglement_N__compte_5=new clAttribut("rg_numerocompte","reglement",null);


	/* Ce composant représente: reglement.rg_numerocompte sous le nom "N° compte" */
var Compo_Réglement_N__compte_5=new clCompoTextBox(Réglement_N__compte_5,null,"N° compte",false,false);
var Réglement_Référence_6=new clAttribut("rg_reference","reglement",null);


	/* Ce composant représente: reglement.rg_reference sous le nom "Référence" */
var Compo_Réglement_Référence_6=new clCompoTextBox(Réglement_Référence_6,null,"Référence",false,false);
var Col_N0_N__Fact__De_Réglement_Factures_concernées_7=new clAttribut("fa_numfact","facture",null);

var Joint_Col_N0_N__Fact__De_Réglement_Factures_concernées_7=new clJointureMulti("facturereglement",
	new Array(
	new stJointure("facture","fa_numero","fa_numero",null,true)
	));
var Col_N1_Date_De_Réglement_Factures_concernées_7=new clAttribut("fa_date","facture",null);

var Joint_Col_N1_Date_De_Réglement_Factures_concernées_7=new clJointureMulti("facturereglement",
	new Array(
	new stJointure("facture","fa_numero","fa_numero",null,true)
	));
var Col_N2_Type_De_Réglement_Factures_concernées_7=new clAttribut("fr_type","facturereglement",null);

var Col_N3_Montant_De_Réglement_Factures_concernées_7=new clAttribut("fr_montant","facturereglement",null);

var Réglement_Facture_8=new clAttribut("fa_numfact","facture",null);


	/* Ce composant représente: facture.fa_numfact sous le nom "Facture" */
var Compo_Réglement_Facture_8=new clCompoListeDeroulanteSimple(Réglement_Facture_8,null,"Facture");
var Joint_Esclave_Réglement_Facture_8=new clJointureMulti("facturereglement",
	new Array(
	new stJointure("facture","fa_numero","fa_numero",null,false)
	));
var Réglement_Acompte_9=new clAttribut("fr_acompte","facturereglement",null);


	/* Ce composant représente: facturereglement.fr_acompte sous le nom "Acompte" */
var Compo_Réglement_Acompte_9=new clCompoCheckBox(Réglement_Acompte_9,null,"Acompte");
var Réglement_La_facture_reçoit_seulement_une_part_du_réglement_10=new clAttribut("fr_partiel","facturereglement",null);


	/* Ce composant représente: facturereglement.fr_partiel sous le nom "La facture reçoit seulement une part du réglement" */
var Compo_Réglement_La_facture_reçoit_seulement_une_part_du_réglement_10=new clCompoCheckBox(Réglement_La_facture_reçoit_seulement_une_part_du_réglement_10,null,"La facture reçoit seulement une part du réglement");
var Réglement_Montant_de_la_part_11=new clAttribut("fr_montant","facturereglement",null);


	/* Ce composant représente: facturereglement.fr_montant sous le nom "Montant de la part" */
var Compo_Réglement_Montant_de_la_part_11=new clCompoTextBox(Réglement_Montant_de_la_part_11,null,"Montant de la part",false,false);
var Réglement_Factures_concernées_7=new clEnsembleAttributs("facturereglement",
	new Array(
	new clLiaison(Joint_Col_N0_N__Fact__De_Réglement_Factures_concernées_7,Col_N0_N__Fact__De_Réglement_Factures_concernées_7)
	,new clLiaison(Joint_Col_N1_Date_De_Réglement_Factures_concernées_7,Col_N1_Date_De_Réglement_Factures_concernées_7)
	,new clLiaison(null,Col_N2_Type_De_Réglement_Factures_concernées_7)
	,new clLiaison(null,Col_N3_Montant_De_Réglement_Factures_concernées_7)
	),
	new Array(
	new clLiaison(Joint_Esclave_Réglement_Facture_8,Réglement_Facture_8)
	,new clLiaison(null,Réglement_Acompte_9)
	,new clLiaison(null,Réglement_La_facture_reçoit_seulement_une_part_du_réglement_10)
	,new clLiaison(null,Réglement_Montant_de_la_part_11)
	));

var Titre_Réglement_Factures_concernées_7=new Array("N° Fact.","Date","Type","Montant");

	/* Ce composant représente: des éléments de la table facturereglement sous le nom "Factures concernées" */
var Compo_Réglement_Factures_concernées_7=new clCompoListe(Réglement_Factures_concernées_7,null,Titre_Réglement_Factures_concernées_7,"Factures concernées",true,false);
var Joint_Esclave_Réglement_Factures_concernées_7=new clJointureMulti("reglement",
	new Array(
	new stJointure("facturereglement","rg_numero","rg_numero",null,false)
	));
var Col_N0_Montant_De_Réglement_Dont_reversements____12=new clAttribut("rp_montant","repartition",null);

var Col_N1_Vers_De_Réglement_Dont_reversements____12=new clAttribut("mp_libelle","moderepartition",null);

var Joint_Col_N1_Vers_De_Réglement_Dont_reversements____12=new clJointureMulti("repartition",
	new Array(
	new stJointure("moderepartition","mp_numero","mp_numero",null,true)
	));
var Réglement_Montant_13=new clAttribut("rp_montant","repartition",null);


	/* Ce composant représente: repartition.rp_montant sous le nom "Montant" */
var Compo_Réglement_Montant_13=new clCompoTextBox(Réglement_Montant_13,null,"Montant",false,false);
var Réglement_Vers_14=new clAttribut("mp_libelle","moderepartition",null);


	/* Ce composant représente: moderepartition.mp_libelle sous le nom "Vers" */
var Compo_Réglement_Vers_14=new clCompoListeDeroulanteSimple(Réglement_Vers_14,null,"Vers");
var Joint_Esclave_Réglement_Vers_14=new clJointureMulti("repartition",
	new Array(
	new stJointure("moderepartition","mp_numero","mp_numero",null,false)
	));
var Réglement_Dont_reversements____12=new clEnsembleAttributs("repartition",
	new Array(
	new clLiaison(null,Col_N0_Montant_De_Réglement_Dont_reversements____12)
	,new clLiaison(Joint_Col_N1_Vers_De_Réglement_Dont_reversements____12,Col_N1_Vers_De_Réglement_Dont_reversements____12)
	),
	new Array(
	new clLiaison(null,Réglement_Montant_13)
	,new clLiaison(Joint_Esclave_Réglement_Vers_14,Réglement_Vers_14)
	));

var Titre_Réglement_Dont_reversements____12=new Array("Montant","Vers");

	/* Ce composant représente: des éléments de la table repartition sous le nom "Dont reversements..." */
var Compo_Réglement_Dont_reversements____12=new clCompoListe(Réglement_Dont_reversements____12,null,Titre_Réglement_Dont_reversements____12,"Dont reversements...",true,false);
var Joint_Esclave_Réglement_Dont_reversements____12=new clJointureMulti("reglement",
	new Array(
	new stJointure("repartition","rg_numero","rg_numero",null,false)
	));
var Réglement_Liste_des_réglements0=new clEnsembleAttributs("reglement",
	new Array(
	new clLiaison(null,Col_N0_N__De_Réglement_Liste_des_réglements0)
	,new clLiaison(null,Col_N1_Etat_De_Réglement_Liste_des_réglements0)
	,new clLiaison(null,Col_N2_Date_De_Réglement_Liste_des_réglements0)
	,new clLiaison(null,Col_N3_Montant_De_Réglement_Liste_des_réglements0)
	,new clLiaison(Joint_Col_N4_Mode_De_Réglement_Liste_des_réglements0,Col_N4_Mode_De_Réglement_Liste_des_réglements0)
	),
	new Array(
	new clLiaison(null,Réglement_Date_1)
	,new clLiaison(null,Réglement_Montant_2)
	,new clLiaison(Joint_Esclave_Réglement_Mode_de_paiement_3,Réglement_Mode_de_paiement_3)
	,new clLiaison(null,Réglement_Libellé_de_la_banque_4)
	,new clLiaison(null,Réglement_N__compte_5)
	,new clLiaison(null,Réglement_Référence_6)
	,new clLiaison(Joint_Esclave_Réglement_Factures_concernées_7,Réglement_Factures_concernées_7)
	,new clLiaison(Joint_Esclave_Réglement_Dont_reversements____12,Réglement_Dont_reversements____12)
	));

var Titre_Réglement_Liste_des_réglements0=new Array("N°","Etat","Date","Montant","Mode");

	/* Ce composant représente: des éléments de la table reglement sous le nom "Liste des réglements" */
var Compo_Réglement_Liste_des_réglements0=new clCompoListe(Réglement_Liste_des_réglements0,new Array(new clInterfaceFiltrageVide()),Titre_Réglement_Liste_des_réglements0,"Liste des réglements",true,false);

	/* Ce composant représente: reglement.undefined sous le nom "Liste des réglements" */
 if(ALeDroit(0,"reglement"))
 {
Compo_Réglement_Liste_des_réglements0.GenererXUL(top.document.getElementById("Réglement_Liste_des_réglements0"));

 }

	/* On l'ajoute au tableau global à l'indice 188*/
top.TAB_GLOBAL_COMPO[188]=Compo_Réglement_Liste_des_réglements0;

	/* Ce composant représente: des éléments de la table reglement sous le nom "Date" */
 if(ALeDroit(0,"reglement"))
 {
Compo_Réglement_Date_1.GenererXUL(top.document.getElementById("Réglement_Liste_des_réglements0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 194*/
top.TAB_GLOBAL_COMPO[194]=Compo_Réglement_Date_1;

	/* Ce composant représente: des éléments de la table reglement sous le nom "Montant" */
 if(ALeDroit(0,"reglement"))
 {
Compo_Réglement_Montant_2.GenererXUL(top.document.getElementById("Réglement_Liste_des_réglements0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 195*/
top.TAB_GLOBAL_COMPO[195]=Compo_Réglement_Montant_2;

	/* Ce composant représente: des éléments de la table modereglement sous le nom "Mode de paiement" */
 if(ALeDroit(0,"modereglement"))
 {
Compo_Réglement_Mode_de_paiement_3.GenererXUL(top.document.getElementById("Réglement_Liste_des_réglements0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 196*/
top.TAB_GLOBAL_COMPO[196]=Compo_Réglement_Mode_de_paiement_3;

	/* Ce composant représente: des éléments de la table reglement sous le nom "Libellé de la banque" */
 if(ALeDroit(0,"reglement"))
 {
Compo_Réglement_Libellé_de_la_banque_4.GenererXUL(top.document.getElementById("Réglement_Liste_des_réglements0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 197*/
top.TAB_GLOBAL_COMPO[197]=Compo_Réglement_Libellé_de_la_banque_4;

	/* Ce composant représente: des éléments de la table reglement sous le nom "N° compte" */
 if(ALeDroit(0,"reglement"))
 {
Compo_Réglement_N__compte_5.GenererXUL(top.document.getElementById("Réglement_Liste_des_réglements0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 198*/
top.TAB_GLOBAL_COMPO[198]=Compo_Réglement_N__compte_5;

	/* Ce composant représente: des éléments de la table reglement sous le nom "Référence" */
 if(ALeDroit(0,"reglement"))
 {
Compo_Réglement_Référence_6.GenererXUL(top.document.getElementById("Réglement_Liste_des_réglements0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 199*/
top.TAB_GLOBAL_COMPO[199]=Compo_Réglement_Référence_6;

	/* Ce composant représente: facturereglement.undefined sous le nom "Factures concernées" */
 if(ALeDroit(0,"facturereglement"))
 {
Compo_Réglement_Factures_concernées_7.GenererXUL(top.document.getElementById("Réglement_Factures_concernées_7"));

 }

	/* On l'ajoute au tableau global à l'indice 200*/
top.TAB_GLOBAL_COMPO[200]=Compo_Réglement_Factures_concernées_7;

	/* Ce composant représente: des éléments de la table facture sous le nom "Facture" */
 if(ALeDroit(0,"facture"))
 {
Compo_Réglement_Facture_8.GenererXUL(top.document.getElementById("Réglement_Factures_concernées_7_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 205*/
top.TAB_GLOBAL_COMPO[205]=Compo_Réglement_Facture_8;

	/* Ce composant représente: des éléments de la table facturereglement sous le nom "Acompte" */
 if(ALeDroit(0,"facturereglement"))
 {
Compo_Réglement_Acompte_9.GenererXUL(top.document.getElementById("Réglement_Factures_concernées_7_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 206*/
top.TAB_GLOBAL_COMPO[206]=Compo_Réglement_Acompte_9;

	/* Ce composant représente: des éléments de la table facturereglement sous le nom "La facture reçoit seulement une part du réglement" */
 if(ALeDroit(0,"facturereglement"))
 {
Compo_Réglement_La_facture_reçoit_seulement_une_part_du_réglement_10.GenererXUL(top.document.getElementById("Réglement_Factures_concernées_7_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 207*/
top.TAB_GLOBAL_COMPO[207]=Compo_Réglement_La_facture_reçoit_seulement_une_part_du_réglement_10;

	/* Ce composant représente: des éléments de la table facturereglement sous le nom "Montant de la part" */
 if(ALeDroit(0,"facturereglement"))
 {
Compo_Réglement_Montant_de_la_part_11.GenererXUL(top.document.getElementById("Réglement_Factures_concernées_7_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 208*/
top.TAB_GLOBAL_COMPO[208]=Compo_Réglement_Montant_de_la_part_11;

	/* Ce composant représente: repartition.undefined sous le nom "Dont reversements..." */
 if(ALeDroit(0,"repartition"))
 {
Compo_Réglement_Dont_reversements____12.GenererXUL(top.document.getElementById("Réglement_Dont_reversements____12"));

 }

	/* On l'ajoute au tableau global à l'indice 209*/
top.TAB_GLOBAL_COMPO[209]=Compo_Réglement_Dont_reversements____12;

	/* Ce composant représente: des éléments de la table repartition sous le nom "Montant" */
 if(ALeDroit(0,"repartition"))
 {
Compo_Réglement_Montant_13.GenererXUL(top.document.getElementById("Réglement_Dont_reversements____12_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 212*/
top.TAB_GLOBAL_COMPO[212]=Compo_Réglement_Montant_13;

	/* Ce composant représente: des éléments de la table moderepartition sous le nom "Vers" */
 if(ALeDroit(0,"moderepartition"))
 {
Compo_Réglement_Vers_14.GenererXUL(top.document.getElementById("Réglement_Dont_reversements____12_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 213*/
top.TAB_GLOBAL_COMPO[213]=Compo_Réglement_Vers_14;
var Col_N0_N_Journal_De_Routage_Liste_des_routages0=new clAttribut("rc_numero","current_routage",null);

var Col_N1_N_Client_De_Routage_Liste_des_routages0=new clAttribut("rc_ncli","current_routage",null);

var Col_N2_Titre_De_Routage_Liste_des_routages0=new clAttribut("rc_titr","current_routage",null);

var Col_N3_Nom_De_Routage_Liste_des_routages0=new clAttribut("rc_nomp","current_routage",null);

var Col_N4_Comp__De_Routage_Liste_des_routages0=new clAttribut("rc_cide","current_routage",null);

var Col_N5_Ligne_1_De_Routage_Liste_des_routages0=new clAttribut("rc_ad1","current_routage",null);

var Col_N6_Ligne_2_De_Routage_Liste_des_routages0=new clAttribut("rc_ad2","current_routage",null);

var Col_N7_C_P__De_Routage_Liste_des_routages0=new clAttribut("rc_cpos","current_routage",null);

var Col_N8_Ville_De_Routage_Liste_des_routages0=new clAttribut("rc_burd","current_routage",null);

var Col_N9_Nb__Ex__De_Routage_Liste_des_routages0=new clAttribut("rc_nbex","current_routage",null);

var Routage_Liste_des_routages0=new clEnsembleAttributs("current_routage",
	new Array(
	new clLiaison(null,Col_N0_N_Journal_De_Routage_Liste_des_routages0)
	,new clLiaison(null,Col_N1_N_Client_De_Routage_Liste_des_routages0)
	,new clLiaison(null,Col_N2_Titre_De_Routage_Liste_des_routages0)
	,new clLiaison(null,Col_N3_Nom_De_Routage_Liste_des_routages0)
	,new clLiaison(null,Col_N4_Comp__De_Routage_Liste_des_routages0)
	,new clLiaison(null,Col_N5_Ligne_1_De_Routage_Liste_des_routages0)
	,new clLiaison(null,Col_N6_Ligne_2_De_Routage_Liste_des_routages0)
	,new clLiaison(null,Col_N7_C_P__De_Routage_Liste_des_routages0)
	,new clLiaison(null,Col_N8_Ville_De_Routage_Liste_des_routages0)
	,new clLiaison(null,Col_N9_Nb__Ex__De_Routage_Liste_des_routages0)
	),
	null);

var Titre_Routage_Liste_des_routages0=new Array("N°Journal","N°Client","Titre","Nom","Comp.","Ligne 1","Ligne 2","C.P.","Ville","Nb. Ex.");

	/* Ce composant représente: des éléments de la table current_routage sous le nom "Liste des routages" */
var Compo_Routage_Liste_des_routages0=new clCompoListe(Routage_Liste_des_routages0,new Array(new clInterfaceFiltrageVide()),Titre_Routage_Liste_des_routages0,"Liste des routages",true,false);

	/* Ce composant représente: current_routage.undefined sous le nom "Liste des routages" */
 if(ALeDroit(0,"current_routage"))
 {
Compo_Routage_Liste_des_routages0.GenererXUL(top.document.getElementById("Routage_Liste_des_routages0"));

 }

	/* On l'ajoute au tableau global à l'indice 214*/
top.TAB_GLOBAL_COMPO[214]=Compo_Routage_Liste_des_routages0;
var Col_N0_Niveau_De_Relances_Liste_des_relances0=new clAttribut("rl_niveau","current_relance",null);

var Col_N1_Dernier_N__De_Relances_Liste_des_relances0=new clAttribut("rl_derniernumero","current_relance",null);

var Col_N2_N_Client_De_Relances_Liste_des_relances0=new clAttribut("pe_numero","current_relance",null);

var Col_N3_Titre_De_Relances_Liste_des_relances0=new clAttribut("pe_titre","current_relance",null);

var Col_N4_Nom_De_Relances_Liste_des_relances0=new clAttribut("pe_nom","current_relance",null);

var Col_N5_Prénom_De_Relances_Liste_des_relances0=new clAttribut("pe_prenom","current_relance",null);

var Col_N6_Comp__De_Relances_Liste_des_relances0=new clAttribut("pe_complement","current_relance",null);

var Col_N7_Ligne_1_De_Relances_Liste_des_relances0=new clAttribut("ad_addr1","current_relance",null);

var Col_N8_Ligne_2_De_Relances_Liste_des_relances0=new clAttribut("ad_addr2","current_relance",null);

var Col_N9_Ligne_3_De_Relances_Liste_des_relances0=new clAttribut("ad_addr2","current_relance",null);

var Col_N10_C_P__De_Relances_Liste_des_relances0=new clAttribut("cp_codepostal","current_relance",null);

var Col_N11_Ville_De_Relances_Liste_des_relances0=new clAttribut("vi_nom","current_relance",null);

var Relances_Liste_des_relances0=new clEnsembleAttributs("current_relance",
	new Array(
	new clLiaison(null,Col_N0_Niveau_De_Relances_Liste_des_relances0)
	,new clLiaison(null,Col_N1_Dernier_N__De_Relances_Liste_des_relances0)
	,new clLiaison(null,Col_N2_N_Client_De_Relances_Liste_des_relances0)
	,new clLiaison(null,Col_N3_Titre_De_Relances_Liste_des_relances0)
	,new clLiaison(null,Col_N4_Nom_De_Relances_Liste_des_relances0)
	,new clLiaison(null,Col_N5_Prénom_De_Relances_Liste_des_relances0)
	,new clLiaison(null,Col_N6_Comp__De_Relances_Liste_des_relances0)
	,new clLiaison(null,Col_N7_Ligne_1_De_Relances_Liste_des_relances0)
	,new clLiaison(null,Col_N8_Ligne_2_De_Relances_Liste_des_relances0)
	,new clLiaison(null,Col_N9_Ligne_3_De_Relances_Liste_des_relances0)
	,new clLiaison(null,Col_N10_C_P__De_Relances_Liste_des_relances0)
	,new clLiaison(null,Col_N11_Ville_De_Relances_Liste_des_relances0)
	),
	null);

var Titre_Relances_Liste_des_relances0=new Array("Niveau","Dernier N°","N°Client","Titre","Nom","Prénom","Comp.","Ligne 1","Ligne 2","Ligne 3","C.P.","Ville");

	/* Ce composant représente: des éléments de la table current_relance sous le nom "Liste des relances" */
var Compo_Relances_Liste_des_relances0=new clCompoListe(Relances_Liste_des_relances0,new Array(new clInterfaceFiltrageVide()),Titre_Relances_Liste_des_relances0,"Liste des relances",true,false);

	/* Ce composant représente: current_relance.undefined sous le nom "Liste des relances" */
 if(ALeDroit(0,"current_relance"))
 {
Compo_Relances_Liste_des_relances0.GenererXUL(top.document.getElementById("Relances_Liste_des_relances0"));

 }

	/* On l'ajoute au tableau global à l'indice 225*/
top.TAB_GLOBAL_COMPO[225]=Compo_Relances_Liste_des_relances0;
var Col_N0_Date_De_Vérification_Liste_des_modifications_sur_les_personnes0=new clAttribut("pu_date","personneupdate",null);

var Col_N1_Login_De_Vérification_Liste_des_modifications_sur_les_personnes0=new clAttribut("update_user","personneupdate",null);

var Col_N2_N__De_Vérification_Liste_des_modifications_sur_les_personnes0=new clAttribut("pe_numpersonne","personneupdate",null);

var Col_N3_Nom_De_Vérification_Liste_des_modifications_sur_les_personnes0=new clAttribut("pe_libelle","personneupdate",null);

var Col_N4_Action_De_Vérification_Liste_des_modifications_sur_les_personnes0=new clAttribut("pu_action","personneupdate",null);

var Col_N5_Bilan_De_Vérification_Liste_des_modifications_sur_les_personnes0=new clAttribut("pu_bilan","personneupdate",null);

var Vérification_Action_1=new clAttribut("pu_action","personneupdate",null);


	/* Ce composant représente: personneupdate.pu_action sous le nom "Action" */
var Compo_Vérification_Action_1=new clCompolabel(Vérification_Action_1,null,"Action",undefined,undefined);
var Vérification_Bilan_2=new clAttribut("pu_bilan","personneupdate",null);


	/* Ce composant représente: personneupdate.pu_bilan sous le nom "Bilan" */
var Compo_Vérification_Bilan_2=new clCompoTextBox(Vérification_Bilan_2,null,"Bilan",false,true);
var Vérification_Titre__Avant__3=new clAttribut("pe_titre","personneupdate",null);


	/* Ce composant représente: personneupdate.pe_titre sous le nom "Titre (Avant)" */
var Compo_Vérification_Titre__Avant__3=new clCompoTextBox(Vérification_Titre__Avant__3,null,"Titre (Avant)",false,false);
var Vérification_Titre__Actuellement__4=new clAttribut("pe_titre","personne",null);


	/* Ce composant représente: personne.pe_titre sous le nom "Titre (Actuellement)" */
var Compo_Vérification_Titre__Actuellement__4=new clCompoTextBox(Vérification_Titre__Actuellement__4,null,"Titre (Actuellement)",false,false);
var Joint_Esclave_Vérification_Titre__Actuellement__4=new clJointureMulti("personneupdate",
	new Array(
	new stJointure("personne","pe_numero","pe_numero",null,false)
	));
var Vérification_Nom__Avant__5=new clAttribut("pe_nom","personneupdate",null);


	/* Ce composant représente: personneupdate.pe_nom sous le nom "Nom (Avant)" */
var Compo_Vérification_Nom__Avant__5=new clCompoTextBox(Vérification_Nom__Avant__5,null,"Nom (Avant)",false,false);
var Vérification_Nom__Actuellement__6=new clAttribut("pe_nom","personne",null);


	/* Ce composant représente: personne.pe_nom sous le nom "Nom (Actuellement)" */
var Compo_Vérification_Nom__Actuellement__6=new clCompoTextBox(Vérification_Nom__Actuellement__6,null,"Nom (Actuellement)",false,false);
var Joint_Esclave_Vérification_Nom__Actuellement__6=new clJointureMulti("personneupdate",
	new Array(
	new stJointure("personne","pe_numero","pe_numero",null,false)
	));
var Vérification_Prénom__Avant__7=new clAttribut("pe_prenom","personneupdate",null);


	/* Ce composant représente: personneupdate.pe_prenom sous le nom "Prénom (Avant)" */
var Compo_Vérification_Prénom__Avant__7=new clCompoTextBox(Vérification_Prénom__Avant__7,null,"Prénom (Avant)",false,false);
var Vérification_Prénom__Actuellement__8=new clAttribut("pe_prenom","personne",null);


	/* Ce composant représente: personne.pe_prenom sous le nom "Prénom (Actuellement)" */
var Compo_Vérification_Prénom__Actuellement__8=new clCompoTextBox(Vérification_Prénom__Actuellement__8,null,"Prénom (Actuellement)",false,false);
var Joint_Esclave_Vérification_Prénom__Actuellement__8=new clJointureMulti("personneupdate",
	new Array(
	new stJointure("personne","pe_numero","pe_numero",null,false)
	));
var Vérification_Régime_fiscal__Avant__9=new clAttribut("pe_regimefiscal","personneupdate",null);


	/* Ce composant représente: personneupdate.pe_regimefiscal sous le nom "Régime fiscal (Avant)" */
var Compo_Vérification_Régime_fiscal__Avant__9=new clCompoListeDeroulanteStatic(Vérification_Régime_fiscal__Avant__9,null,"Régime fiscal (Avant)",new Array('FORFAIT','NON RENSEIGNE','REEL'));
var Vérification_Régime_fiscal__Actuellement__10=new clAttribut("pe_regimefiscal","personne",null);


	/* Ce composant représente: personne.pe_regimefiscal sous le nom "Régime fiscal (Actuellement)" */
var Compo_Vérification_Régime_fiscal__Actuellement__10=new clCompoListeDeroulanteStatic(Vérification_Régime_fiscal__Actuellement__10,null,"Régime fiscal (Actuellement)",new Array('FORFAIT','NON RENSEIGNE','REEL'));
var Joint_Esclave_Vérification_Régime_fiscal__Actuellement__10=new clJointureMulti("personneupdate",
	new Array(
	new stJointure("personne","pe_numero","pe_numero",null,false)
	));
var Vérification_Naissance__Avant__11=new clAttribut("pe_naissance","personneupdate",null);


	/* Ce composant représente: personneupdate.pe_naissance sous le nom "Naissance (Avant)" */
var Compo_Vérification_Naissance__Avant__11=new clCompoTextBox(Vérification_Naissance__Avant__11,null,"Naissance (Avant)",false,false);
var Vérification_Naissance__Actuellement__12=new clAttribut("pe_naissance","personne",null);


	/* Ce composant représente: personne.pe_naissance sous le nom "Naissance (Actuellement)" */
var Compo_Vérification_Naissance__Actuellement__12=new clCompoTextBox(Vérification_Naissance__Actuellement__12,null,"Naissance (Actuellement)",false,false);
var Joint_Esclave_Vérification_Naissance__Actuellement__12=new clJointureMulti("personneupdate",
	new Array(
	new stJointure("personne","pe_numero","pe_numero",null,false)
	));
var Vérification_Entité_morale__Avant__13=new clAttribut("pe_morale","personneupdate",null);


	/* Ce composant représente: personneupdate.pe_morale sous le nom "Entité morale (Avant)" */
var Compo_Vérification_Entité_morale__Avant__13=new clCompoCheckBox(Vérification_Entité_morale__Avant__13,null,"Entité morale (Avant)");
var Vérification_Entité_morale__Actuellement__14=new clAttribut("pe_naissance","personne",null);


	/* Ce composant représente: personne.pe_naissance sous le nom "Entité morale (Actuellement)" */
var Compo_Vérification_Entité_morale__Actuellement__14=new clCompoCheckBox(Vérification_Entité_morale__Actuellement__14,null,"Entité morale (Actuellement)");
var Joint_Esclave_Vérification_Entité_morale__Actuellement__14=new clJointureMulti("personneupdate",
	new Array(
	new stJointure("personne","pe_numero","pe_numero",null,false)
	));
var Vérification_Liste_des_modifications_sur_les_personnes0=new clEnsembleAttributs("personneupdate",
	new Array(
	new clLiaison(null,Col_N0_Date_De_Vérification_Liste_des_modifications_sur_les_personnes0)
	,new clLiaison(null,Col_N1_Login_De_Vérification_Liste_des_modifications_sur_les_personnes0)
	,new clLiaison(null,Col_N2_N__De_Vérification_Liste_des_modifications_sur_les_personnes0)
	,new clLiaison(null,Col_N3_Nom_De_Vérification_Liste_des_modifications_sur_les_personnes0)
	,new clLiaison(null,Col_N4_Action_De_Vérification_Liste_des_modifications_sur_les_personnes0)
	,new clLiaison(null,Col_N5_Bilan_De_Vérification_Liste_des_modifications_sur_les_personnes0)
	),
	new Array(
	new clLiaison(null,Vérification_Action_1)
	,new clLiaison(null,Vérification_Bilan_2)
	,new clLiaison(null,Vérification_Titre__Avant__3)
	,new clLiaison(Joint_Esclave_Vérification_Titre__Actuellement__4,Vérification_Titre__Actuellement__4)
	,new clLiaison(null,Vérification_Nom__Avant__5)
	,new clLiaison(Joint_Esclave_Vérification_Nom__Actuellement__6,Vérification_Nom__Actuellement__6)
	,new clLiaison(null,Vérification_Prénom__Avant__7)
	,new clLiaison(Joint_Esclave_Vérification_Prénom__Actuellement__8,Vérification_Prénom__Actuellement__8)
	,new clLiaison(null,Vérification_Régime_fiscal__Avant__9)
	,new clLiaison(Joint_Esclave_Vérification_Régime_fiscal__Actuellement__10,Vérification_Régime_fiscal__Actuellement__10)
	,new clLiaison(null,Vérification_Naissance__Avant__11)
	,new clLiaison(Joint_Esclave_Vérification_Naissance__Actuellement__12,Vérification_Naissance__Actuellement__12)
	,new clLiaison(null,Vérification_Entité_morale__Avant__13)
	,new clLiaison(Joint_Esclave_Vérification_Entité_morale__Actuellement__14,Vérification_Entité_morale__Actuellement__14)
	));

var Titre_Vérification_Liste_des_modifications_sur_les_personnes0=new Array("Date","Login","N°","Nom","Action","Bilan");

	/* Ce composant représente: des éléments de la table personneupdate sous le nom "Liste des modifications sur les personnes" */
var Compo_Vérification_Liste_des_modifications_sur_les_personnes0=new clCompoListe(Vérification_Liste_des_modifications_sur_les_personnes0,new Array(new clInterfaceFiltrageVide()),Titre_Vérification_Liste_des_modifications_sur_les_personnes0,"Liste des modifications sur les personnes",true,false);

	/* Ce composant représente: personneupdate.undefined sous le nom "Liste des modifications sur les personnes" */
 if(ALeDroit(0,"personneupdate"))
 {
Compo_Vérification_Liste_des_modifications_sur_les_personnes0.GenererXUL(top.document.getElementById("Vérification_Liste_des_modifications_sur_les_personnes0"));

 }

	/* On l'ajoute au tableau global à l'indice 238*/
top.TAB_GLOBAL_COMPO[238]=Compo_Vérification_Liste_des_modifications_sur_les_personnes0;

	/* Ce composant représente: des éléments de la table personneupdate sous le nom "Action" */
 if(ALeDroit(0,"personneupdate"))
 {
Compo_Vérification_Action_1.GenererXUL(top.document.getElementById("Vérification_Liste_des_modifications_sur_les_personnes0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 245*/
top.TAB_GLOBAL_COMPO[245]=Compo_Vérification_Action_1;

	/* Ce composant représente: des éléments de la table personneupdate sous le nom "Bilan" */
 if(ALeDroit(0,"personneupdate"))
 {
Compo_Vérification_Bilan_2.GenererXUL(top.document.getElementById("Vérification_Liste_des_modifications_sur_les_personnes0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 246*/
top.TAB_GLOBAL_COMPO[246]=Compo_Vérification_Bilan_2;

	/* Ce composant représente: des éléments de la table personneupdate sous le nom "Titre (Avant)" */
 if(ALeDroit(0,"personneupdate"))
 {
Compo_Vérification_Titre__Avant__3.GenererXUL(top.document.getElementById("Vérification_Liste_des_modifications_sur_les_personnes0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 247*/
top.TAB_GLOBAL_COMPO[247]=Compo_Vérification_Titre__Avant__3;

	/* Ce composant représente: des éléments de la table personne sous le nom "Titre (Actuellement)" */
 if(ALeDroit(0,"personne"))
 {
Compo_Vérification_Titre__Actuellement__4.GenererXUL(top.document.getElementById("Vérification_Liste_des_modifications_sur_les_personnes0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 248*/
top.TAB_GLOBAL_COMPO[248]=Compo_Vérification_Titre__Actuellement__4;

	/* Ce composant représente: des éléments de la table personneupdate sous le nom "Nom (Avant)" */
 if(ALeDroit(0,"personneupdate"))
 {
Compo_Vérification_Nom__Avant__5.GenererXUL(top.document.getElementById("Vérification_Liste_des_modifications_sur_les_personnes0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 249*/
top.TAB_GLOBAL_COMPO[249]=Compo_Vérification_Nom__Avant__5;

	/* Ce composant représente: des éléments de la table personne sous le nom "Nom (Actuellement)" */
 if(ALeDroit(0,"personne"))
 {
Compo_Vérification_Nom__Actuellement__6.GenererXUL(top.document.getElementById("Vérification_Liste_des_modifications_sur_les_personnes0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 250*/
top.TAB_GLOBAL_COMPO[250]=Compo_Vérification_Nom__Actuellement__6;

	/* Ce composant représente: des éléments de la table personneupdate sous le nom "Prénom (Avant)" */
 if(ALeDroit(0,"personneupdate"))
 {
Compo_Vérification_Prénom__Avant__7.GenererXUL(top.document.getElementById("Vérification_Liste_des_modifications_sur_les_personnes0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 251*/
top.TAB_GLOBAL_COMPO[251]=Compo_Vérification_Prénom__Avant__7;

	/* Ce composant représente: des éléments de la table personne sous le nom "Prénom (Actuellement)" */
 if(ALeDroit(0,"personne"))
 {
Compo_Vérification_Prénom__Actuellement__8.GenererXUL(top.document.getElementById("Vérification_Liste_des_modifications_sur_les_personnes0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 252*/
top.TAB_GLOBAL_COMPO[252]=Compo_Vérification_Prénom__Actuellement__8;

	/* Ce composant représente: des éléments de la table personneupdate sous le nom "Régime fiscal (Avant)" */
 if(ALeDroit(0,"personneupdate"))
 {
Compo_Vérification_Régime_fiscal__Avant__9.GenererXUL(top.document.getElementById("Vérification_Liste_des_modifications_sur_les_personnes0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 253*/
top.TAB_GLOBAL_COMPO[253]=Compo_Vérification_Régime_fiscal__Avant__9;

	/* Ce composant représente: des éléments de la table personne sous le nom "Régime fiscal (Actuellement)" */
 if(ALeDroit(0,"personne"))
 {
Compo_Vérification_Régime_fiscal__Actuellement__10.GenererXUL(top.document.getElementById("Vérification_Liste_des_modifications_sur_les_personnes0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 254*/
top.TAB_GLOBAL_COMPO[254]=Compo_Vérification_Régime_fiscal__Actuellement__10;

	/* Ce composant représente: des éléments de la table personneupdate sous le nom "Naissance (Avant)" */
 if(ALeDroit(0,"personneupdate"))
 {
Compo_Vérification_Naissance__Avant__11.GenererXUL(top.document.getElementById("Vérification_Liste_des_modifications_sur_les_personnes0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 255*/
top.TAB_GLOBAL_COMPO[255]=Compo_Vérification_Naissance__Avant__11;

	/* Ce composant représente: des éléments de la table personne sous le nom "Naissance (Actuellement)" */
 if(ALeDroit(0,"personne"))
 {
Compo_Vérification_Naissance__Actuellement__12.GenererXUL(top.document.getElementById("Vérification_Liste_des_modifications_sur_les_personnes0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 256*/
top.TAB_GLOBAL_COMPO[256]=Compo_Vérification_Naissance__Actuellement__12;

	/* Ce composant représente: des éléments de la table personneupdate sous le nom "Entité morale (Avant)" */
 if(ALeDroit(0,"personneupdate"))
 {
Compo_Vérification_Entité_morale__Avant__13.GenererXUL(top.document.getElementById("Vérification_Liste_des_modifications_sur_les_personnes0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 257*/
top.TAB_GLOBAL_COMPO[257]=Compo_Vérification_Entité_morale__Avant__13;

	/* Ce composant représente: des éléments de la table personne sous le nom "Entité morale (Actuellement)" */
 if(ALeDroit(0,"personne"))
 {
Compo_Vérification_Entité_morale__Actuellement__14.GenererXUL(top.document.getElementById("Vérification_Liste_des_modifications_sur_les_personnes0_Slaves"));

 }

	/* On l'ajoute au tableau global à l'indice 258*/
top.TAB_GLOBAL_COMPO[258]=Compo_Vérification_Entité_morale__Actuellement__14;
Filtre_Dep_Contacts_0.setComposant(TAB_GLOBAL_COMPO[111],null);
Filtre_DepFor_Devis_0.setComposant(TAB_GLOBAL_COMPO[116],null);
Filtre_DepFor_Facture_0.setComposant(TAB_GLOBAL_COMPO[135],null);
Filtre_Dep_Avoir_0.setComposant(TAB_GLOBAL_COMPO[175],null);
Filtre_Dep_Réglement_0.setComposant(TAB_GLOBAL_COMPO[188],null);
Filtre_DepFor_Réglement_1.setComposant(TAB_GLOBAL_COMPO[188],null);
 if(ALeDroit(5,"personne"))
 {
/* On refresh les composants non dépendents de l'onget Personnes*/
var Composant_0 = TAB_GLOBAL_COMPO[3];
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
top.document.getElementById("Insert_Personnes_Liste_des_personnes0").disabled=false;

 }
 else
 {
top.document.getElementById("Insert_Personnes_Liste_des_personnes0").hidden=true;

 }
 if(ALeDroit(4,"personne"))
 {
nb_button++;
top.document.getElementById("Delete_Personnes_Liste_des_personnes0").disabled=false;

 }
 else
 {
top.document.getElementById("Delete_Personnes_Liste_des_personnes0").hidden=true;

 }
 if(ALeDroit(1,"personne"))
 {
nb_button++;
top.document.getElementById("Update_Personnes_Liste_des_personnes0").disabled=false;

 }
 else
 {
top.document.getElementById("Update_Personnes_Liste_des_personnes0").hidden=true;

 }
if (nb_button==0)
{
	top.document.getElementById("Validate_Personnes_Liste_des_personnes0").hidden=true;
	top.document.getElementById("Annuler_Personnes_Liste_des_personnes0").hidden=true;
}
var nb_button=0
 if(ALeDroit(2,"observation"))
 {
nb_button++;

 }
 else
 {
top.document.getElementById("Insert_Personnes_Observations_11").hidden=true;

 }
 if(ALeDroit(4,"observation"))
 {
nb_button++;

 }
 else
 {
top.document.getElementById("Delete_Personnes_Observations_11").hidden=true;

 }
 if(ALeDroit(1,"observation"))
 {
nb_button++;

 }
 else
 {
top.document.getElementById("Update_Personnes_Observations_11").hidden=true;

 }
if (nb_button==0)
{
	top.document.getElementById("Validate_Personnes_Observations_11").hidden=true;
	top.document.getElementById("Annuler_Personnes_Observations_11").hidden=true;
}
var nb_button=0
 if(ALeDroit(2,"adresse"))
 {
nb_button++;

 }
 else
 {
top.document.getElementById("Insert_Personnes_Adresses_14").hidden=true;

 }
 if(ALeDroit(4,"adresse"))
 {
nb_button++;

 }
 else
 {
top.document.getElementById("Delete_Personnes_Adresses_14").hidden=true;

 }
 if(ALeDroit(1,"adresse"))
 {
nb_button++;

 }
 else
 {
top.document.getElementById("Update_Personnes_Adresses_14").hidden=true;

 }
if (nb_button==0)
{
	top.document.getElementById("Validate_Personnes_Adresses_14").hidden=true;
	top.document.getElementById("Annuler_Personnes_Adresses_14").hidden=true;
}
var nb_button=0
 if(ALeDroit(2,"estjoignable"))
 {
nb_button++;

 }
 else
 {
top.document.getElementById("Insert_Personnes_Contact_23").hidden=true;

 }
 if(ALeDroit(4,"estjoignable"))
 {
nb_button++;

 }
 else
 {
top.document.getElementById("Delete_Personnes_Contact_23").hidden=true;

 }
 if(ALeDroit(1,"estjoignable"))
 {
nb_button++;

 }
 else
 {
top.document.getElementById("Update_Personnes_Contact_23").hidden=true;

 }
if (nb_button==0)
{
	top.document.getElementById("Validate_Personnes_Contact_23").hidden=true;
	top.document.getElementById("Annuler_Personnes_Contact_23").hidden=true;
}
var nb_button=0
 if(ALeDroit(2,"appel"))
 {
nb_button++;

 }
 else
 {
top.document.getElementById("Insert_Personnes_Tâches_26").hidden=true;

 }
 if(ALeDroit(4,"appel"))
 {
nb_button++;

 }
 else
 {
top.document.getElementById("Delete_Personnes_Tâches_26").hidden=true;

 }
 if(ALeDroit(1,"appel"))
 {
nb_button++;

 }
 else
 {
top.document.getElementById("Update_Personnes_Tâches_26").hidden=true;

 }
if (nb_button==0)
{
	top.document.getElementById("Validate_Personnes_Tâches_26").hidden=true;
	top.document.getElementById("Annuler_Personnes_Tâches_26").hidden=true;
}
var nb_button=0
 if(ALeDroit(2,"estresponsable"))
 {
nb_button++;

 }
 else
 {
top.document.getElementById("Insert_Personnes_Responsabilités_32").hidden=true;

 }
 if(ALeDroit(4,"estresponsable"))
 {
nb_button++;

 }
 else
 {
top.document.getElementById("Delete_Personnes_Responsabilités_32").hidden=true;

 }
 if(ALeDroit(1,"estresponsable"))
 {
nb_button++;

 }
 else
 {
top.document.getElementById("Update_Personnes_Responsabilités_32").hidden=true;

 }
if (nb_button==0)
{
	top.document.getElementById("Validate_Personnes_Responsabilités_32").hidden=true;
	top.document.getElementById("Annuler_Personnes_Responsabilités_32").hidden=true;
}
var nb_button=0
 if(ALeDroit(2,"attribut"))
 {
nb_button++;

 }
 else
 {
top.document.getElementById("Insert_Personnes_Attributs_38").hidden=true;

 }
 if(ALeDroit(4,"attribut"))
 {
nb_button++;

 }
 else
 {
top.document.getElementById("Delete_Personnes_Attributs_38").hidden=true;

 }
 if(ALeDroit(1,"attribut"))
 {
nb_button++;

 }
 else
 {
top.document.getElementById("Update_Personnes_Attributs_38").hidden=true;

 }
if (nb_button==0)
{
	top.document.getElementById("Validate_Personnes_Attributs_38").hidden=true;
	top.document.getElementById("Annuler_Personnes_Attributs_38").hidden=true;
}
var nb_button=0
 if(ALeDroit(2,"routage"))
 {
nb_button++;

 }
 else
 {
top.document.getElementById("Insert_Personnes_Routages_45").hidden=true;

 }
 if(ALeDroit(4,"routage"))
 {
nb_button++;

 }
 else
 {
top.document.getElementById("Delete_Personnes_Routages_45").hidden=true;

 }
 if(ALeDroit(1,"routage"))
 {
nb_button++;

 }
 else
 {
top.document.getElementById("Update_Personnes_Routages_45").hidden=true;

 }
if (nb_button==0)
{
	top.document.getElementById("Validate_Personnes_Routages_45").hidden=true;
	top.document.getElementById("Annuler_Personnes_Routages_45").hidden=true;
}
 if(ALeDroit(5,"contact"))
 {
/* On refresh les composants non dépendents de l'onget Contacts*/
var Composant_0 = TAB_GLOBAL_COMPO[111];
if (Composant_0!=null){
Composant_0.ActiverComposant(true);
Composant_0.Refresh();
}

 }
 else
 {
top.document.getElementById("Onglet_Contacts").hidden=true;
if (top.document.getElementById("Onglet_Contacts").selected)
	top.document.getElementById("Tous_les_onglets").advanceSelectedTab(1);

 }
var nb_button=0
 if(ALeDroit(2,"contact"))
 {
nb_button++;
top.document.getElementById("Insert_Contacts_Liste_des_contacts0").disabled=false;

 }
 else
 {
top.document.getElementById("Insert_Contacts_Liste_des_contacts0").hidden=true;

 }
 if(ALeDroit(4,"contact"))
 {
nb_button++;
top.document.getElementById("Delete_Contacts_Liste_des_contacts0").disabled=false;

 }
 else
 {
top.document.getElementById("Delete_Contacts_Liste_des_contacts0").hidden=true;

 }
 if(ALeDroit(1,"contact"))
 {
nb_button++;
top.document.getElementById("Update_Contacts_Liste_des_contacts0").disabled=false;

 }
 else
 {
top.document.getElementById("Update_Contacts_Liste_des_contacts0").hidden=true;

 }
if (nb_button==0)
{
	top.document.getElementById("Validate_Contacts_Liste_des_contacts0").hidden=true;
	top.document.getElementById("Annuler_Contacts_Liste_des_contacts0").hidden=true;
}
 if(ALeDroit(5,"devis"))
 {
/* On refresh les composants non dépendents de l'onget Devis*/
var Composant_0 = TAB_GLOBAL_COMPO[116];
if (Composant_0!=null){
Composant_0.ActiverComposant(true);
Composant_0.Refresh();
}

 }
 else
 {
top.document.getElementById("Onglet_Devis").hidden=true;
if (top.document.getElementById("Onglet_Devis").selected)
	top.document.getElementById("Tous_les_onglets").advanceSelectedTab(1);

 }
var nb_button=0
 if(ALeDroit(2,"devis"))
 {
nb_button++;
top.document.getElementById("Insert_Devis_Liste_des_devis0").disabled=false;

 }
 else
 {
top.document.getElementById("Insert_Devis_Liste_des_devis0").hidden=true;

 }
 if(ALeDroit(4,"devis"))
 {
nb_button++;
top.document.getElementById("Delete_Devis_Liste_des_devis0").disabled=false;

 }
 else
 {
top.document.getElementById("Delete_Devis_Liste_des_devis0").hidden=true;

 }
 if(ALeDroit(1,"devis"))
 {
nb_button++;
top.document.getElementById("Update_Devis_Liste_des_devis0").disabled=false;

 }
 else
 {
top.document.getElementById("Update_Devis_Liste_des_devis0").hidden=true;

 }
if (nb_button==0)
{
	top.document.getElementById("Validate_Devis_Liste_des_devis0").hidden=true;
	top.document.getElementById("Annuler_Devis_Liste_des_devis0").hidden=true;
}
var nb_button=0
 if(ALeDroit(2,"ligne"))
 {
nb_button++;

 }
 else
 {
top.document.getElementById("Insert_Devis_Lignes_du_devis_8").hidden=true;

 }
 if(ALeDroit(4,"ligne"))
 {
nb_button++;

 }
 else
 {
top.document.getElementById("Delete_Devis_Lignes_du_devis_8").hidden=true;

 }
 if(ALeDroit(1,"ligne"))
 {
nb_button++;

 }
 else
 {
top.document.getElementById("Update_Devis_Lignes_du_devis_8").hidden=true;

 }
if (nb_button==0)
{
	top.document.getElementById("Validate_Devis_Lignes_du_devis_8").hidden=true;
	top.document.getElementById("Annuler_Devis_Lignes_du_devis_8").hidden=true;
}
 if(ALeDroit(5,"facture"))
 {
/* On refresh les composants non dépendents de l'onget Facture*/
var Composant_0 = TAB_GLOBAL_COMPO[135];
if (Composant_0!=null){
Composant_0.ActiverComposant(true);
Composant_0.Refresh();
}

 }
 else
 {
top.document.getElementById("Onglet_Facture").hidden=true;
if (top.document.getElementById("Onglet_Facture").selected)
	top.document.getElementById("Tous_les_onglets").advanceSelectedTab(1);

 }
var nb_button=0
 if(ALeDroit(2,"facture"))
 {
nb_button++;
top.document.getElementById("Insert_Facture_Liste_des_factures0").disabled=false;

 }
 else
 {
top.document.getElementById("Insert_Facture_Liste_des_factures0").hidden=true;

 }
 if(ALeDroit(4,"facture"))
 {
nb_button++;
top.document.getElementById("Delete_Facture_Liste_des_factures0").disabled=false;

 }
 else
 {
top.document.getElementById("Delete_Facture_Liste_des_factures0").hidden=true;

 }
 if(ALeDroit(1,"facture"))
 {
nb_button++;
top.document.getElementById("Update_Facture_Liste_des_factures0").disabled=false;

 }
 else
 {
top.document.getElementById("Update_Facture_Liste_des_factures0").hidden=true;

 }
if (nb_button==0)
{
	top.document.getElementById("Validate_Facture_Liste_des_factures0").hidden=true;
	top.document.getElementById("Annuler_Facture_Liste_des_factures0").hidden=true;
}
var nb_button=0
 if(ALeDroit(2,"facturereglement"))
 {
nb_button++;

 }
 else
 {
top.document.getElementById("Insert_Facture_Règlements_10").hidden=true;

 }
 if(ALeDroit(4,"facturereglement"))
 {
nb_button++;

 }
 else
 {
top.document.getElementById("Delete_Facture_Règlements_10").hidden=true;

 }
 if(ALeDroit(1,"facturereglement"))
 {
nb_button++;

 }
 else
 {
top.document.getElementById("Update_Facture_Règlements_10").hidden=true;

 }
if (nb_button==0)
{
	top.document.getElementById("Validate_Facture_Règlements_10").hidden=true;
	top.document.getElementById("Annuler_Facture_Règlements_10").hidden=true;
}
var nb_button=0
 if(ALeDroit(2,"routage"))
 {
nb_button++;

 }
 else
 {
top.document.getElementById("Insert_Facture_Routages_15").hidden=true;

 }
 if(ALeDroit(4,"routage"))
 {
nb_button++;

 }
 else
 {
top.document.getElementById("Delete_Facture_Routages_15").hidden=true;

 }
 if(ALeDroit(1,"routage"))
 {
nb_button++;

 }
 else
 {
top.document.getElementById("Update_Facture_Routages_15").hidden=true;

 }
if (nb_button==0)
{
	top.document.getElementById("Validate_Facture_Routages_15").hidden=true;
	top.document.getElementById("Annuler_Facture_Routages_15").hidden=true;
}
 if(ALeDroit(5,"avoir"))
 {
/* On refresh les composants non dépendents de l'onget Avoir*/
var Composant_0 = TAB_GLOBAL_COMPO[175];
if (Composant_0!=null){
Composant_0.ActiverComposant(true);
Composant_0.Refresh();
}

 }
 else
 {
top.document.getElementById("Onglet_Avoir").hidden=true;
if (top.document.getElementById("Onglet_Avoir").selected)
	top.document.getElementById("Tous_les_onglets").advanceSelectedTab(1);

 }
var nb_button=0
 if(ALeDroit(2,"avoir"))
 {
nb_button++;
top.document.getElementById("Insert_Avoir_Liste_des_avoirs0").disabled=false;

 }
 else
 {
top.document.getElementById("Insert_Avoir_Liste_des_avoirs0").hidden=true;

 }
 if(ALeDroit(4,"avoir"))
 {
nb_button++;
top.document.getElementById("Delete_Avoir_Liste_des_avoirs0").disabled=false;

 }
 else
 {
top.document.getElementById("Delete_Avoir_Liste_des_avoirs0").hidden=true;

 }
 if(ALeDroit(1,"avoir"))
 {
nb_button++;
top.document.getElementById("Update_Avoir_Liste_des_avoirs0").disabled=false;

 }
 else
 {
top.document.getElementById("Update_Avoir_Liste_des_avoirs0").hidden=true;

 }
if (nb_button==0)
{
	top.document.getElementById("Validate_Avoir_Liste_des_avoirs0").hidden=true;
	top.document.getElementById("Annuler_Avoir_Liste_des_avoirs0").hidden=true;
}
 if(ALeDroit(5,"reglement"))
 {
/* On refresh les composants non dépendents de l'onget Réglement*/
var Composant_0 = TAB_GLOBAL_COMPO[188];
if (Composant_0!=null){
Composant_0.ActiverComposant(true);
Composant_0.Refresh();
}

 }
 else
 {
top.document.getElementById("Onglet_Réglement").hidden=true;
if (top.document.getElementById("Onglet_Réglement").selected)
	top.document.getElementById("Tous_les_onglets").advanceSelectedTab(1);

 }
var nb_button=0
 if(ALeDroit(2,"reglement"))
 {
nb_button++;
top.document.getElementById("Insert_Réglement_Liste_des_réglements0").disabled=false;

 }
 else
 {
top.document.getElementById("Insert_Réglement_Liste_des_réglements0").hidden=true;

 }
 if(ALeDroit(4,"reglement"))
 {
nb_button++;
top.document.getElementById("Delete_Réglement_Liste_des_réglements0").disabled=false;

 }
 else
 {
top.document.getElementById("Delete_Réglement_Liste_des_réglements0").hidden=true;

 }
 if(ALeDroit(1,"reglement"))
 {
nb_button++;
top.document.getElementById("Update_Réglement_Liste_des_réglements0").disabled=false;

 }
 else
 {
top.document.getElementById("Update_Réglement_Liste_des_réglements0").hidden=true;

 }
if (nb_button==0)
{
	top.document.getElementById("Validate_Réglement_Liste_des_réglements0").hidden=true;
	top.document.getElementById("Annuler_Réglement_Liste_des_réglements0").hidden=true;
}
var nb_button=0
 if(ALeDroit(2,"facturereglement"))
 {
nb_button++;

 }
 else
 {
top.document.getElementById("Insert_Réglement_Factures_concernées_7").hidden=true;

 }
 if(ALeDroit(4,"facturereglement"))
 {
nb_button++;

 }
 else
 {
top.document.getElementById("Delete_Réglement_Factures_concernées_7").hidden=true;

 }
 if(ALeDroit(1,"facturereglement"))
 {
nb_button++;

 }
 else
 {
top.document.getElementById("Update_Réglement_Factures_concernées_7").hidden=true;

 }
if (nb_button==0)
{
	top.document.getElementById("Validate_Réglement_Factures_concernées_7").hidden=true;
	top.document.getElementById("Annuler_Réglement_Factures_concernées_7").hidden=true;
}
var nb_button=0
 if(ALeDroit(2,"repartition"))
 {
nb_button++;

 }
 else
 {
top.document.getElementById("Insert_Réglement_Dont_reversements____12").hidden=true;

 }
 if(ALeDroit(4,"repartition"))
 {
nb_button++;

 }
 else
 {
top.document.getElementById("Delete_Réglement_Dont_reversements____12").hidden=true;

 }
 if(ALeDroit(1,"repartition"))
 {
nb_button++;

 }
 else
 {
top.document.getElementById("Update_Réglement_Dont_reversements____12").hidden=true;

 }
if (nb_button==0)
{
	top.document.getElementById("Validate_Réglement_Dont_reversements____12").hidden=true;
	top.document.getElementById("Annuler_Réglement_Dont_reversements____12").hidden=true;
}
 if(ALeDroit(5,"current_routage"))
 {
/* On refresh les composants non dépendents de l'onget Routage*/
var Composant_0 = TAB_GLOBAL_COMPO[214];
if (Composant_0!=null){
Composant_0.ActiverComposant(true);
Composant_0.Refresh();
}

 }
 else
 {
top.document.getElementById("Onglet_Routage").hidden=true;
if (top.document.getElementById("Onglet_Routage").selected)
	top.document.getElementById("Tous_les_onglets").advanceSelectedTab(1);

 }
 if(ALeDroit(5,"current_relance"))
 {
/* On refresh les composants non dépendents de l'onget Relances*/
var Composant_0 = TAB_GLOBAL_COMPO[225];
if (Composant_0!=null){
Composant_0.ActiverComposant(true);
Composant_0.Refresh();
}

 }
 else
 {
top.document.getElementById("Onglet_Relances").hidden=true;
if (top.document.getElementById("Onglet_Relances").selected)
	top.document.getElementById("Tous_les_onglets").advanceSelectedTab(1);

 }
 if(ALeDroit(5,"personneupdate"))
 {
/* On refresh les composants non dépendents de l'onget Vérification*/
var Composant_0 = TAB_GLOBAL_COMPO[238];
if (Composant_0!=null){
Composant_0.ActiverComposant(true);
Composant_0.Refresh();
}

 }
 else
 {
top.document.getElementById("Onglet_Vérification").hidden=true;
if (top.document.getElementById("Onglet_Vérification").selected)
	top.document.getElementById("Tous_les_onglets").advanceSelectedTab(1);

 }
var nb_button=0
 if(ALeDroit(2,"personneupdate"))
 {
nb_button++;
top.document.getElementById("Insert_Vérification_Liste_des_modifications_sur_les_personnes0").disabled=false;

 }
 else
 {
top.document.getElementById("Insert_Vérification_Liste_des_modifications_sur_les_personnes0").hidden=true;

 }
 if(ALeDroit(4,"personneupdate"))
 {
nb_button++;
top.document.getElementById("Delete_Vérification_Liste_des_modifications_sur_les_personnes0").disabled=false;

 }
 else
 {
top.document.getElementById("Delete_Vérification_Liste_des_modifications_sur_les_personnes0").hidden=true;

 }
 if(ALeDroit(1,"personneupdate"))
 {
nb_button++;
top.document.getElementById("Update_Vérification_Liste_des_modifications_sur_les_personnes0").disabled=false;

 }
 else
 {
top.document.getElementById("Update_Vérification_Liste_des_modifications_sur_les_personnes0").hidden=true;

 }
if (nb_button==0)
{
	top.document.getElementById("Validate_Vérification_Liste_des_modifications_sur_les_personnes0").hidden=true;
	top.document.getElementById("Annuler_Vérification_Liste_des_modifications_sur_les_personnes0").hidden=true;
}
ConstruireOngletEstLie("tabbox_Personnes_Liste_des_personnes0",3);
Compo_Personnes_Liste_des_personnes0.OnChangeUser=RefreshOngletEstLie;
Compo_Personnes_Liste_des_personnes0.OnChangeUserParams=Compo_Personnes_Liste_des_personnes0;
Filtre_PersonneResponsabilite.setComposant(Compo_Personnes_Responsabilités_32);
Filtre_PersonneDevis.setComposant(Compo_Personnes_Devis_en_cours_42);
Filtre_DevisLigneProduit.setComposant(Compo_Devis_Produit_9);
}

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

    /* on regarde si cet item n'existe pas d�j� */
    if(ListeDessous.view!=null)
	{
	    var ValDessus=ListeDessus.view.getCellValue(ListeDessus.currentIndex,ListeDessus.treeBoxObject.columns.getColumnAt(0));
	    for(i=0;i<ListeDessous.view.rowCount;i++)
		{
		    if( ListeDessous.view.getCellValue(i,ListeDessous.treeBoxObject.columns.getColumnAt(0)) == ValDessus )
			{
			    alert("Cet �l�ment est d�j� pr�sent");
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
	    /* on cr�e le treechildren */
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
var TAB_COMPO_PPTES = new Array(237);
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
         FONCTIONS POUR L'ONGLET Acc�s
   ***********************************************/ 

 /* FILTRES DE RELATION ENTRE ONGLETS => VARIABLES GLOBALES POUR ETRE ACCESSIBLES DEPUIS INTERFACE_USER.JS */

 var Filtre_Dep_Acc�s_0;
function Retour_Acc�s()
{
 if (Filtre_Dep_Acc�s_0.my_Filtre.getEtat())
 {
 	Filtre_Dep_Acc�s_0.FctFermetureOnglet();
 }
}
function Gerer_Acc�s(IdFiltreOnglet)
{
/* On d�sactive les autres filtres */
if (Filtre_Dep_Acc�s_0.getId()!=IdFiltreOnglet)
{
	Filtre_Dep_Acc�s_0.OnClose(true,false);
}
/* On change d'onglet */
 var tabs = top.document.getElementById("Tous_les_onglets");
 top.document.getElementById("Tous_les_onglets").setAttribute("hidden","false");
 tabs.selectedItem = top.document.getElementById("Onglet_Acc�s");
}

function OuvrirOnglet_Acc�s()
{
 var tabs = top.document.getElementById("Tous_les_onglets");
 tabs.selectedItem = top.document.getElementById("Onglet_Acc�s");
}

function Insert_Acc�s_Liste_des_niveaux_d_acc�s0()
{
 TAB_COMPO_PPTES[3].Action_en_cours = INSERT;
/* On calcule la nouvelle cl� */
 TAB_COMPO_PPTES[3].NewCle = getNewCle("acces");
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[3].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[6];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[7];
 Esclave_1.ActiverComposant(true);
top.document.getElementById("Validate_Acc�s_Liste_des_niveaux_d_acc�s0").disabled=false;
top.document.getElementById("Annuler_Acc�s_Liste_des_niveaux_d_acc�s0").disabled=false;
top.document.getElementById("Insert_Acc�s_Liste_des_niveaux_d_acc�s0").disabled=true;
top.document.getElementById("Delete_Acc�s_Liste_des_niveaux_d_acc�s0").disabled=true;
top.document.getElementById("Update_Acc�s_Liste_des_niveaux_d_acc�s0").disabled=true;
 var Maitre=TAB_GLOBAL_COMPO[3];
 /* Pour une insertion on d�sectionne */
 var tree=Maitre.getComposantXul();
 if (tree.view!=null)
 {
 	tree.currentIndex=-1;
 	tree.view.selection.clearSelection();
 }
return TAB_COMPO_PPTES[3].NewCle;
}

function Delete_Acc�s_Liste_des_niveaux_d_acc�s0()
{
 if (TAB_GLOBAL_COMPO[3].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement � suprimer");
 	return;
 }
 /* On recup�re le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[3];
 if (confirm("Voulez vous vraiment supprimer l'enregistrement en cours ?"))
 {
	TAB_COMPO_PPTES[3].Action_en_cours = DELETE;
 	User_Delete_Acc�s_Liste_des_niveaux_d_acc�s0(Maitre);
	Maitre.RefreshTotal();
	Filtre_Dep_Acc�s_0.OnClose(true);
 }
}

function Update_Acc�s_Liste_des_niveaux_d_acc�s0()
{
 if (TAB_GLOBAL_COMPO[3].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement � mettre � jour");
 	return -1;
 }
 TAB_COMPO_PPTES[3].Action_en_cours = UPDATE;
/* On calcule la nouvelle cl� */
 TAB_COMPO_PPTES[3].NewCle = TAB_GLOBAL_COMPO[3].getCleVal();
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[3].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[6];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[7];
 Esclave_1.ActiverComposant(true);
top.document.getElementById("Validate_Acc�s_Liste_des_niveaux_d_acc�s0").disabled=false;
top.document.getElementById("Annuler_Acc�s_Liste_des_niveaux_d_acc�s0").disabled=false;
top.document.getElementById("Insert_Acc�s_Liste_des_niveaux_d_acc�s0").disabled=true;
top.document.getElementById("Delete_Acc�s_Liste_des_niveaux_d_acc�s0").disabled=true;
top.document.getElementById("Update_Acc�s_Liste_des_niveaux_d_acc�s0").disabled=true;
return TAB_COMPO_PPTES[3].NewCle;
}

function Validate_Acc�s_Liste_des_niveaux_d_acc�s0(retour)
{
 /* Retour � l'onget appellant si appelle par g�rer */
if (retour==null)
	retour=true;

 /* On recup�re le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[3];
 /* On recup�re la cl� du nouvel enregistrement */
 var NewCle=null;
 switch(TAB_COMPO_PPTES[3].Action_en_cours){
	case INSERT :
	if ((NewCle = User_Insert_Acc�s_Liste_des_niveaux_d_acc�s0(Maitre))==-1)
		return -1;
	break;
	case UPDATE :
	if ((User_Update_Acc�s_Liste_des_niveaux_d_acc�s0(Maitre))==-1)
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
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[3].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[6];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[7];
 Esclave_1.ActiverComposant(false);
top.document.getElementById("Validate_Acc�s_Liste_des_niveaux_d_acc�s0").disabled=true;
top.document.getElementById("Annuler_Acc�s_Liste_des_niveaux_d_acc�s0").disabled=true;
top.document.getElementById("Insert_Acc�s_Liste_des_niveaux_d_acc�s0").disabled=false;
top.document.getElementById("Delete_Acc�s_Liste_des_niveaux_d_acc�s0").disabled=false;
top.document.getElementById("Update_Acc�s_Liste_des_niveaux_d_acc�s0").disabled=false;
 if (NewCle==null)
 	NewCle=TAB_COMPO_PPTES[3].NewCle;
 Maitre.ForceNextSelection(NewCle)
 Maitre.RefreshTotal();
 if(retour)
 {
 Filtre_Dep_Acc�s_0.OnClose(false);
 }
 TAB_COMPO_PPTES[3].Action_en_cours = null;
 return NewCle;
}

function Annuler_Acc�s_Liste_des_niveaux_d_acc�s0()
{
 TAB_COMPO_PPTES[3].Action_en_cours = null;
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[3].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[6];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[7];
 Esclave_1.ActiverComposant(false);
top.document.getElementById("Validate_Acc�s_Liste_des_niveaux_d_acc�s0").disabled=true;
top.document.getElementById("Annuler_Acc�s_Liste_des_niveaux_d_acc�s0").disabled=true;
top.document.getElementById("Insert_Acc�s_Liste_des_niveaux_d_acc�s0").disabled=false;
top.document.getElementById("Delete_Acc�s_Liste_des_niveaux_d_acc�s0").disabled=false;
top.document.getElementById("Update_Acc�s_Liste_des_niveaux_d_acc�s0").disabled=false;
}






/* *********************************************** 
         FONCTIONS POUR L'ONGLET Adh�rence
   ***********************************************/ 

 /* FILTRES DE RELATION ENTRE ONGLETS => VARIABLES GLOBALES POUR ETRE ACCESSIBLES DEPUIS INTERFACE_USER.JS */

function OuvrirOnglet_Adh�rence()
{
 var tabs = top.document.getElementById("Tous_les_onglets");
 tabs.selectedItem = top.document.getElementById("Onglet_Adh�rence");
}

function Insert_Adh�rence_Liste_des_adh�rences0()
{
 TAB_COMPO_PPTES[180].Action_en_cours = INSERT;
/* On calcule la nouvelle cl� */
 TAB_COMPO_PPTES[180].NewCle = getNewCle("adherence");
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[180].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[184];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[185];
 Esclave_1.ActiverComposant(true);
 var Esclave_2=TAB_GLOBAL_COMPO[186];
 Esclave_2.ActiverComposant(true);
 var Esclave_3=TAB_GLOBAL_COMPO[187];
 Esclave_3.ActiverComposant(true);
 var Esclave_4=TAB_GLOBAL_COMPO[191];
 Esclave_4.ActiverComposant(true);
top.document.getElementById("Validate_Adh�rence_Liste_des_adh�rences0").disabled=false;
top.document.getElementById("Annuler_Adh�rence_Liste_des_adh�rences0").disabled=false;
top.document.getElementById("Insert_Adh�rence_Liste_des_adh�rences0").disabled=true;
top.document.getElementById("Delete_Adh�rence_Liste_des_adh�rences0").disabled=true;
top.document.getElementById("Update_Adh�rence_Liste_des_adh�rences0").disabled=true;
 var Maitre=TAB_GLOBAL_COMPO[180];
 /* Pour une insertion on d�sectionne */
 var tree=Maitre.getComposantXul();
 if (tree.view!=null)
 {
 	tree.currentIndex=-1;
 	tree.view.selection.clearSelection();
 }
return TAB_COMPO_PPTES[180].NewCle;
}

function Delete_Adh�rence_Liste_des_adh�rences0()
{
 if (TAB_GLOBAL_COMPO[180].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement � suprimer");
 	return;
 }
 /* On recup�re le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[180];
 if (confirm("Voulez vous vraiment supprimer l'enregistrement en cours ?"))
 {
	TAB_COMPO_PPTES[180].Action_en_cours = DELETE;
 	User_Delete_Adh�rence_Liste_des_adh�rences0(Maitre);
	Maitre.RefreshTotal();
 }
}

function Update_Adh�rence_Liste_des_adh�rences0()
{
 if (TAB_GLOBAL_COMPO[180].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement � mettre � jour");
 	return -1;
 }
 TAB_COMPO_PPTES[180].Action_en_cours = UPDATE;
/* On calcule la nouvelle cl� */
 TAB_COMPO_PPTES[180].NewCle = TAB_GLOBAL_COMPO[180].getCleVal();
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[180].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[184];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[185];
 Esclave_1.ActiverComposant(true);
 var Esclave_2=TAB_GLOBAL_COMPO[186];
 Esclave_2.ActiverComposant(true);
 var Esclave_3=TAB_GLOBAL_COMPO[187];
 Esclave_3.ActiverComposant(true);
 var Esclave_4=TAB_GLOBAL_COMPO[191];
 Esclave_4.ActiverComposant(true);
top.document.getElementById("Validate_Adh�rence_Liste_des_adh�rences0").disabled=false;
top.document.getElementById("Annuler_Adh�rence_Liste_des_adh�rences0").disabled=false;
top.document.getElementById("Insert_Adh�rence_Liste_des_adh�rences0").disabled=true;
top.document.getElementById("Delete_Adh�rence_Liste_des_adh�rences0").disabled=true;
top.document.getElementById("Update_Adh�rence_Liste_des_adh�rences0").disabled=true;
return TAB_COMPO_PPTES[180].NewCle;
}

function Validate_Adh�rence_Liste_des_adh�rences0(retour)
{
 /* Retour � l'onget appellant si appelle par g�rer */
if (retour==null)
	retour=true;

 /* On recup�re le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[180];
 /* On recup�re la cl� du nouvel enregistrement */
 var NewCle=null;
 switch(TAB_COMPO_PPTES[180].Action_en_cours){
	case INSERT :
	if ((NewCle = User_Insert_Adh�rence_Liste_des_adh�rences0(Maitre))==-1)
		return -1;
	break;
	case UPDATE :
	if ((User_Update_Adh�rence_Liste_des_adh�rences0(Maitre))==-1)
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
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[180].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[184];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[185];
 Esclave_1.ActiverComposant(false);
 var Esclave_2=TAB_GLOBAL_COMPO[186];
 Esclave_2.ActiverComposant(false);
 var Esclave_3=TAB_GLOBAL_COMPO[187];
 Esclave_3.ActiverComposant(false);
 var Esclave_4=TAB_GLOBAL_COMPO[191];
 Esclave_4.ActiverComposant(false);
top.document.getElementById("Validate_Adh�rence_Liste_des_adh�rences0").disabled=true;
top.document.getElementById("Annuler_Adh�rence_Liste_des_adh�rences0").disabled=true;
top.document.getElementById("Insert_Adh�rence_Liste_des_adh�rences0").disabled=false;
top.document.getElementById("Delete_Adh�rence_Liste_des_adh�rences0").disabled=false;
top.document.getElementById("Update_Adh�rence_Liste_des_adh�rences0").disabled=false;
 if (NewCle==null)
 	NewCle=TAB_COMPO_PPTES[180].NewCle;
 Maitre.ForceNextSelection(NewCle)
 Maitre.RefreshTotal();
 if(retour)
 {
 }
 TAB_COMPO_PPTES[180].Action_en_cours = null;
 return NewCle;
}

function Annuler_Adh�rence_Liste_des_adh�rences0()
{
 TAB_COMPO_PPTES[180].Action_en_cours = null;
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[180].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[184];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[185];
 Esclave_1.ActiverComposant(false);
 var Esclave_2=TAB_GLOBAL_COMPO[186];
 Esclave_2.ActiverComposant(false);
 var Esclave_3=TAB_GLOBAL_COMPO[187];
 Esclave_3.ActiverComposant(false);
 var Esclave_4=TAB_GLOBAL_COMPO[191];
 Esclave_4.ActiverComposant(false);
top.document.getElementById("Validate_Adh�rence_Liste_des_adh�rences0").disabled=true;
top.document.getElementById("Annuler_Adh�rence_Liste_des_adh�rences0").disabled=true;
top.document.getElementById("Insert_Adh�rence_Liste_des_adh�rences0").disabled=false;
top.document.getElementById("Delete_Adh�rence_Liste_des_adh�rences0").disabled=false;
top.document.getElementById("Update_Adh�rence_Liste_des_adh�rences0").disabled=false;
}






/* *********************************************** 
         FONCTIONS POUR L'ONGLET Agents
   ***********************************************/ 

 /* FILTRES DE RELATION ENTRE ONGLETS => VARIABLES GLOBALES POUR ETRE ACCESSIBLES DEPUIS INTERFACE_USER.JS */

 var Filtre_Dep_Agents_0;
 var Filtre_Dep_Agents_1;
function Retour_Agents()
{
 if (Filtre_Dep_Agents_0.my_Filtre.getEtat())
 {
 	Filtre_Dep_Agents_0.FctFermetureOnglet();
 }
 if (Filtre_Dep_Agents_1.my_Filtre.getEtat())
 {
 	Filtre_Dep_Agents_1.FctFermetureOnglet();
 }
}
function Gerer_Agents(IdFiltreOnglet)
{
/* On d�sactive les autres filtres */
if (Filtre_Dep_Agents_0.getId()!=IdFiltreOnglet)
{
	Filtre_Dep_Agents_0.OnClose(true,false);
}
if (Filtre_Dep_Agents_1.getId()!=IdFiltreOnglet)
{
	Filtre_Dep_Agents_1.OnClose(true,false);
}
/* On change d'onglet */
 var tabs = top.document.getElementById("Tous_les_onglets");
 top.document.getElementById("Tous_les_onglets").setAttribute("hidden","false");
 tabs.selectedItem = top.document.getElementById("Onglet_Agents");
}

function OuvrirOnglet_Agents()
{
 var tabs = top.document.getElementById("Tous_les_onglets");
 tabs.selectedItem = top.document.getElementById("Onglet_Agents");
}

function Insert_Agents_Liste_des_agents0()
{
 TAB_COMPO_PPTES[104].Action_en_cours = INSERT;
/* On calcule la nouvelle cl� */
 TAB_COMPO_PPTES[104].NewCle = getNewCle("agent");
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[104].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[110];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[111];
 Esclave_1.ActiverComposant(true);
 var Esclave_2=TAB_GLOBAL_COMPO[112];
 Esclave_2.ActiverComposant(true);
 var Esclave_3=TAB_GLOBAL_COMPO[113];
 Esclave_3.ActiverComposant(true);
 var Esclave_4=TAB_GLOBAL_COMPO[114];
 Esclave_4.ActiverComposant(true);
 var Esclave_5=TAB_GLOBAL_COMPO[115];
 Esclave_5.ActiverComposant(true);
 var Esclave_6=TAB_GLOBAL_COMPO[116];
 Esclave_6.ActiverComposant(true);
 var Esclave_7=TAB_GLOBAL_COMPO[117];
 Esclave_7.ActiverComposant(true);
 var Esclave_8=TAB_GLOBAL_COMPO[118];
 Esclave_8.ActiverComposant(true);
 var Esclave_9=TAB_GLOBAL_COMPO[119];
 Esclave_9.ActiverComposant(true);
top.document.getElementById("Validate_Agents_Liste_des_agents0").disabled=false;
top.document.getElementById("Annuler_Agents_Liste_des_agents0").disabled=false;
top.document.getElementById("Insert_Agents_Liste_des_agents0").disabled=true;
top.document.getElementById("Delete_Agents_Liste_des_agents0").disabled=true;
top.document.getElementById("Update_Agents_Liste_des_agents0").disabled=true;
 var Maitre=TAB_GLOBAL_COMPO[104];
 /* Pour une insertion on d�sectionne */
 var tree=Maitre.getComposantXul();
 if (tree.view!=null)
 {
 	tree.currentIndex=-1;
 	tree.view.selection.clearSelection();
 }
return TAB_COMPO_PPTES[104].NewCle;
}

function Delete_Agents_Liste_des_agents0()
{
 if (TAB_GLOBAL_COMPO[104].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement � suprimer");
 	return;
 }
 /* On recup�re le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[104];
 if (confirm("Voulez vous vraiment supprimer l'enregistrement en cours ?"))
 {
	TAB_COMPO_PPTES[104].Action_en_cours = DELETE;
 	User_Delete_Agents_Liste_des_agents0(Maitre);
	Maitre.RefreshTotal();
	Filtre_Dep_Agents_0.OnClose(true);
	Filtre_Dep_Agents_1.OnClose(true);
 }
}

function Update_Agents_Liste_des_agents0()
{
 if (TAB_GLOBAL_COMPO[104].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement � mettre � jour");
 	return -1;
 }
 TAB_COMPO_PPTES[104].Action_en_cours = UPDATE;
/* On calcule la nouvelle cl� */
 TAB_COMPO_PPTES[104].NewCle = TAB_GLOBAL_COMPO[104].getCleVal();
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[104].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[110];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[111];
 Esclave_1.ActiverComposant(true);
 var Esclave_2=TAB_GLOBAL_COMPO[112];
 Esclave_2.ActiverComposant(true);
 var Esclave_3=TAB_GLOBAL_COMPO[113];
 Esclave_3.ActiverComposant(true);
 var Esclave_4=TAB_GLOBAL_COMPO[114];
 Esclave_4.ActiverComposant(true);
 var Esclave_5=TAB_GLOBAL_COMPO[115];
 Esclave_5.ActiverComposant(true);
 var Esclave_6=TAB_GLOBAL_COMPO[116];
 Esclave_6.ActiverComposant(true);
 var Esclave_7=TAB_GLOBAL_COMPO[117];
 Esclave_7.ActiverComposant(true);
 var Esclave_8=TAB_GLOBAL_COMPO[118];
 Esclave_8.ActiverComposant(true);
 var Esclave_9=TAB_GLOBAL_COMPO[119];
 Esclave_9.ActiverComposant(true);
top.document.getElementById("Validate_Agents_Liste_des_agents0").disabled=false;
top.document.getElementById("Annuler_Agents_Liste_des_agents0").disabled=false;
top.document.getElementById("Insert_Agents_Liste_des_agents0").disabled=true;
top.document.getElementById("Delete_Agents_Liste_des_agents0").disabled=true;
top.document.getElementById("Update_Agents_Liste_des_agents0").disabled=true;
return TAB_COMPO_PPTES[104].NewCle;
}

function Validate_Agents_Liste_des_agents0(retour)
{
 /* Retour � l'onget appellant si appelle par g�rer */
if (retour==null)
	retour=true;

 /* On recup�re le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[104];
 /* On recup�re la cl� du nouvel enregistrement */
 var NewCle=null;
 switch(TAB_COMPO_PPTES[104].Action_en_cours){
	case INSERT :
	if ((NewCle = User_Insert_Agents_Liste_des_agents0(Maitre))==-1)
		return -1;
	break;
	case UPDATE :
	if ((User_Update_Agents_Liste_des_agents0(Maitre))==-1)
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
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[104].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[110];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[111];
 Esclave_1.ActiverComposant(false);
 var Esclave_2=TAB_GLOBAL_COMPO[112];
 Esclave_2.ActiverComposant(false);
 var Esclave_3=TAB_GLOBAL_COMPO[113];
 Esclave_3.ActiverComposant(false);
 var Esclave_4=TAB_GLOBAL_COMPO[114];
 Esclave_4.ActiverComposant(false);
 var Esclave_5=TAB_GLOBAL_COMPO[115];
 Esclave_5.ActiverComposant(false);
 var Esclave_6=TAB_GLOBAL_COMPO[116];
 Esclave_6.ActiverComposant(false);
 var Esclave_7=TAB_GLOBAL_COMPO[117];
 Esclave_7.ActiverComposant(false);
 var Esclave_8=TAB_GLOBAL_COMPO[118];
 Esclave_8.ActiverComposant(false);
 var Esclave_9=TAB_GLOBAL_COMPO[119];
 Esclave_9.ActiverComposant(false);
top.document.getElementById("Validate_Agents_Liste_des_agents0").disabled=true;
top.document.getElementById("Annuler_Agents_Liste_des_agents0").disabled=true;
top.document.getElementById("Insert_Agents_Liste_des_agents0").disabled=false;
top.document.getElementById("Delete_Agents_Liste_des_agents0").disabled=false;
top.document.getElementById("Update_Agents_Liste_des_agents0").disabled=false;
 if (NewCle==null)
 	NewCle=TAB_COMPO_PPTES[104].NewCle;
 Maitre.ForceNextSelection(NewCle)
 Maitre.RefreshTotal();
 if(retour)
 {
 Filtre_Dep_Agents_0.OnClose(false);
 Filtre_Dep_Agents_1.OnClose(false);
 }
 TAB_COMPO_PPTES[104].Action_en_cours = null;
 return NewCle;
}

function Annuler_Agents_Liste_des_agents0()
{
 TAB_COMPO_PPTES[104].Action_en_cours = null;
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[104].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[110];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[111];
 Esclave_1.ActiverComposant(false);
 var Esclave_2=TAB_GLOBAL_COMPO[112];
 Esclave_2.ActiverComposant(false);
 var Esclave_3=TAB_GLOBAL_COMPO[113];
 Esclave_3.ActiverComposant(false);
 var Esclave_4=TAB_GLOBAL_COMPO[114];
 Esclave_4.ActiverComposant(false);
 var Esclave_5=TAB_GLOBAL_COMPO[115];
 Esclave_5.ActiverComposant(false);
 var Esclave_6=TAB_GLOBAL_COMPO[116];
 Esclave_6.ActiverComposant(false);
 var Esclave_7=TAB_GLOBAL_COMPO[117];
 Esclave_7.ActiverComposant(false);
 var Esclave_8=TAB_GLOBAL_COMPO[118];
 Esclave_8.ActiverComposant(false);
 var Esclave_9=TAB_GLOBAL_COMPO[119];
 Esclave_9.ActiverComposant(false);
top.document.getElementById("Validate_Agents_Liste_des_agents0").disabled=true;
top.document.getElementById("Annuler_Agents_Liste_des_agents0").disabled=true;
top.document.getElementById("Insert_Agents_Liste_des_agents0").disabled=false;
top.document.getElementById("Delete_Agents_Liste_des_agents0").disabled=false;
top.document.getElementById("Update_Agents_Liste_des_agents0").disabled=false;
}






/* *********************************************** 
         FONCTIONS POUR L'ONGLET Cantons
   ***********************************************/ 

 /* FILTRES DE RELATION ENTRE ONGLETS => VARIABLES GLOBALES POUR ETRE ACCESSIBLES DEPUIS INTERFACE_USER.JS */

 var Filtre_Dep_Cantons_0;
function Retour_Cantons()
{
 if (Filtre_Dep_Cantons_0.my_Filtre.getEtat())
 {
 	Filtre_Dep_Cantons_0.FctFermetureOnglet();
 }
}
function Gerer_Cantons(IdFiltreOnglet)
{
/* On d�sactive les autres filtres */
if (Filtre_Dep_Cantons_0.getId()!=IdFiltreOnglet)
{
	Filtre_Dep_Cantons_0.OnClose(true,false);
}
/* On change d'onglet */
 var tabs = top.document.getElementById("Tous_les_onglets");
 top.document.getElementById("Tous_les_onglets").setAttribute("hidden","false");
 tabs.selectedItem = top.document.getElementById("Onglet_Cantons");
}

function OuvrirOnglet_Cantons()
{
 var tabs = top.document.getElementById("Tous_les_onglets");
 tabs.selectedItem = top.document.getElementById("Onglet_Cantons");
}

function Insert_Cantons_Liste_des_cantons0()
{
 TAB_COMPO_PPTES[137].Action_en_cours = INSERT;
/* On calcule la nouvelle cl� */
 TAB_COMPO_PPTES[137].NewCle = getNewCle("canton");
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[137].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[140];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[141];
 Esclave_1.ActiverComposant(true);
top.document.getElementById("Validate_Cantons_Liste_des_cantons0").disabled=false;
top.document.getElementById("Annuler_Cantons_Liste_des_cantons0").disabled=false;
top.document.getElementById("Insert_Cantons_Liste_des_cantons0").disabled=true;
top.document.getElementById("Delete_Cantons_Liste_des_cantons0").disabled=true;
top.document.getElementById("Update_Cantons_Liste_des_cantons0").disabled=true;
 var Maitre=TAB_GLOBAL_COMPO[137];
 /* Pour une insertion on d�sectionne */
 var tree=Maitre.getComposantXul();
 if (tree.view!=null)
 {
 	tree.currentIndex=-1;
 	tree.view.selection.clearSelection();
 }
return TAB_COMPO_PPTES[137].NewCle;
}

function Delete_Cantons_Liste_des_cantons0()
{
 if (TAB_GLOBAL_COMPO[137].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement � suprimer");
 	return;
 }
 /* On recup�re le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[137];
 if (confirm("Voulez vous vraiment supprimer l'enregistrement en cours ?"))
 {
	TAB_COMPO_PPTES[137].Action_en_cours = DELETE;
 	User_Delete_Cantons_Liste_des_cantons0(Maitre);
	Maitre.RefreshTotal();
	Filtre_Dep_Cantons_0.OnClose(true);
 }
}

function Update_Cantons_Liste_des_cantons0()
{
 if (TAB_GLOBAL_COMPO[137].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement � mettre � jour");
 	return -1;
 }
 TAB_COMPO_PPTES[137].Action_en_cours = UPDATE;
/* On calcule la nouvelle cl� */
 TAB_COMPO_PPTES[137].NewCle = TAB_GLOBAL_COMPO[137].getCleVal();
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[137].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[140];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[141];
 Esclave_1.ActiverComposant(true);
top.document.getElementById("Validate_Cantons_Liste_des_cantons0").disabled=false;
top.document.getElementById("Annuler_Cantons_Liste_des_cantons0").disabled=false;
top.document.getElementById("Insert_Cantons_Liste_des_cantons0").disabled=true;
top.document.getElementById("Delete_Cantons_Liste_des_cantons0").disabled=true;
top.document.getElementById("Update_Cantons_Liste_des_cantons0").disabled=true;
return TAB_COMPO_PPTES[137].NewCle;
}

function Validate_Cantons_Liste_des_cantons0(retour)
{
 /* Retour � l'onget appellant si appelle par g�rer */
if (retour==null)
	retour=true;

 /* On recup�re le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[137];
 /* On recup�re la cl� du nouvel enregistrement */
 var NewCle=null;
 switch(TAB_COMPO_PPTES[137].Action_en_cours){
	case INSERT :
	if ((NewCle = User_Insert_Cantons_Liste_des_cantons0(Maitre))==-1)
		return -1;
	break;
	case UPDATE :
	if ((User_Update_Cantons_Liste_des_cantons0(Maitre))==-1)
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
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[137].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[140];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[141];
 Esclave_1.ActiverComposant(false);
top.document.getElementById("Validate_Cantons_Liste_des_cantons0").disabled=true;
top.document.getElementById("Annuler_Cantons_Liste_des_cantons0").disabled=true;
top.document.getElementById("Insert_Cantons_Liste_des_cantons0").disabled=false;
top.document.getElementById("Delete_Cantons_Liste_des_cantons0").disabled=false;
top.document.getElementById("Update_Cantons_Liste_des_cantons0").disabled=false;
 if (NewCle==null)
 	NewCle=TAB_COMPO_PPTES[137].NewCle;
 Maitre.ForceNextSelection(NewCle)
 Maitre.RefreshTotal();
 if(retour)
 {
 Filtre_Dep_Cantons_0.OnClose(false);
 }
 TAB_COMPO_PPTES[137].Action_en_cours = null;
 return NewCle;
}

function Annuler_Cantons_Liste_des_cantons0()
{
 TAB_COMPO_PPTES[137].Action_en_cours = null;
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[137].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[140];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[141];
 Esclave_1.ActiverComposant(false);
top.document.getElementById("Validate_Cantons_Liste_des_cantons0").disabled=true;
top.document.getElementById("Annuler_Cantons_Liste_des_cantons0").disabled=true;
top.document.getElementById("Insert_Cantons_Liste_des_cantons0").disabled=false;
top.document.getElementById("Delete_Cantons_Liste_des_cantons0").disabled=false;
top.document.getElementById("Update_Cantons_Liste_des_cantons0").disabled=false;
}






/* *********************************************** 
         FONCTIONS POUR L'ONGLET Codes postaux
   ***********************************************/ 

 /* FILTRES DE RELATION ENTRE ONGLETS => VARIABLES GLOBALES POUR ETRE ACCESSIBLES DEPUIS INTERFACE_USER.JS */

function OuvrirOnglet_Codes_postaux()
{
 var tabs = top.document.getElementById("Tous_les_onglets");
 tabs.selectedItem = top.document.getElementById("Onglet_Codes_postaux");
}

function Insert_Codes_postaux_Liste_des_codes_postaux0()
{
 TAB_COMPO_PPTES[128].Action_en_cours = INSERT;
/* On calcule la nouvelle cl� */
 TAB_COMPO_PPTES[128].NewCle = getNewCle("codepostal");
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[128].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[131];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[132];
 Esclave_1.ActiverComposant(true);
 var Esclave_2=TAB_GLOBAL_COMPO[135];
 Esclave_2.ActiverComposant(true);
top.document.getElementById("Validate_Codes_postaux_Liste_des_codes_postaux0").disabled=false;
top.document.getElementById("Annuler_Codes_postaux_Liste_des_codes_postaux0").disabled=false;
top.document.getElementById("Insert_Codes_postaux_Liste_des_codes_postaux0").disabled=true;
top.document.getElementById("Delete_Codes_postaux_Liste_des_codes_postaux0").disabled=true;
top.document.getElementById("Update_Codes_postaux_Liste_des_codes_postaux0").disabled=true;
 var Maitre=TAB_GLOBAL_COMPO[128];
 /* Pour une insertion on d�sectionne */
 var tree=Maitre.getComposantXul();
 if (tree.view!=null)
 {
 	tree.currentIndex=-1;
 	tree.view.selection.clearSelection();
 }
return TAB_COMPO_PPTES[128].NewCle;
}

function Delete_Codes_postaux_Liste_des_codes_postaux0()
{
 if (TAB_GLOBAL_COMPO[128].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement � suprimer");
 	return;
 }
 /* On recup�re le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[128];
 if (confirm("Voulez vous vraiment supprimer l'enregistrement en cours ?"))
 {
	TAB_COMPO_PPTES[128].Action_en_cours = DELETE;
 	User_Delete_Codes_postaux_Liste_des_codes_postaux0(Maitre);
	Maitre.RefreshTotal();
 }
}

function Update_Codes_postaux_Liste_des_codes_postaux0()
{
 if (TAB_GLOBAL_COMPO[128].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement � mettre � jour");
 	return -1;
 }
 TAB_COMPO_PPTES[128].Action_en_cours = UPDATE;
/* On calcule la nouvelle cl� */
 TAB_COMPO_PPTES[128].NewCle = TAB_GLOBAL_COMPO[128].getCleVal();
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[128].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[131];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[132];
 Esclave_1.ActiverComposant(true);
 var Esclave_2=TAB_GLOBAL_COMPO[135];
 Esclave_2.ActiverComposant(true);
top.document.getElementById("Validate_Codes_postaux_Liste_des_codes_postaux0").disabled=false;
top.document.getElementById("Annuler_Codes_postaux_Liste_des_codes_postaux0").disabled=false;
top.document.getElementById("Insert_Codes_postaux_Liste_des_codes_postaux0").disabled=true;
top.document.getElementById("Delete_Codes_postaux_Liste_des_codes_postaux0").disabled=true;
top.document.getElementById("Update_Codes_postaux_Liste_des_codes_postaux0").disabled=true;
return TAB_COMPO_PPTES[128].NewCle;
}

function Validate_Codes_postaux_Liste_des_codes_postaux0(retour)
{
 /* Retour � l'onget appellant si appelle par g�rer */
if (retour==null)
	retour=true;

 /* On recup�re le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[128];
 /* On recup�re la cl� du nouvel enregistrement */
 var NewCle=null;
 switch(TAB_COMPO_PPTES[128].Action_en_cours){
	case INSERT :
	if ((NewCle = User_Insert_Codes_postaux_Liste_des_codes_postaux0(Maitre))==-1)
		return -1;
	break;
	case UPDATE :
	if ((User_Update_Codes_postaux_Liste_des_codes_postaux0(Maitre))==-1)
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
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[128].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[131];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[132];
 Esclave_1.ActiverComposant(false);
 var Esclave_2=TAB_GLOBAL_COMPO[135];
 Esclave_2.ActiverComposant(false);
top.document.getElementById("Validate_Codes_postaux_Liste_des_codes_postaux0").disabled=true;
top.document.getElementById("Annuler_Codes_postaux_Liste_des_codes_postaux0").disabled=true;
top.document.getElementById("Insert_Codes_postaux_Liste_des_codes_postaux0").disabled=false;
top.document.getElementById("Delete_Codes_postaux_Liste_des_codes_postaux0").disabled=false;
top.document.getElementById("Update_Codes_postaux_Liste_des_codes_postaux0").disabled=false;
 if (NewCle==null)
 	NewCle=TAB_COMPO_PPTES[128].NewCle;
 Maitre.ForceNextSelection(NewCle)
 Maitre.RefreshTotal();
 if(retour)
 {
 }
 TAB_COMPO_PPTES[128].Action_en_cours = null;
 return NewCle;
}

function Annuler_Codes_postaux_Liste_des_codes_postaux0()
{
 TAB_COMPO_PPTES[128].Action_en_cours = null;
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[128].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[131];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[132];
 Esclave_1.ActiverComposant(false);
 var Esclave_2=TAB_GLOBAL_COMPO[135];
 Esclave_2.ActiverComposant(false);
top.document.getElementById("Validate_Codes_postaux_Liste_des_codes_postaux0").disabled=true;
top.document.getElementById("Annuler_Codes_postaux_Liste_des_codes_postaux0").disabled=true;
top.document.getElementById("Insert_Codes_postaux_Liste_des_codes_postaux0").disabled=false;
top.document.getElementById("Delete_Codes_postaux_Liste_des_codes_postaux0").disabled=false;
top.document.getElementById("Update_Codes_postaux_Liste_des_codes_postaux0").disabled=false;
}






/* *********************************************** 
         FONCTIONS POUR L'ONGLET Profils de droits
   ***********************************************/ 

 /* FILTRES DE RELATION ENTRE ONGLETS => VARIABLES GLOBALES POUR ETRE ACCESSIBLES DEPUIS INTERFACE_USER.JS */

 var Filtre_Dep_Profils_de_droits_0;
function Retour_Profils_de_droits()
{
 if (Filtre_Dep_Profils_de_droits_0.my_Filtre.getEtat())
 {
 	Filtre_Dep_Profils_de_droits_0.FctFermetureOnglet();
 }
}
function Gerer_Profils_de_droits(IdFiltreOnglet)
{
/* On d�sactive les autres filtres */
if (Filtre_Dep_Profils_de_droits_0.getId()!=IdFiltreOnglet)
{
	Filtre_Dep_Profils_de_droits_0.OnClose(true,false);
}
/* On change d'onglet */
 var tabs = top.document.getElementById("Tous_les_onglets");
 top.document.getElementById("Tous_les_onglets").setAttribute("hidden","false");
 tabs.selectedItem = top.document.getElementById("Onglet_Profils_de_droits");
}

function OuvrirOnglet_Profils_de_droits()
{
 var tabs = top.document.getElementById("Tous_les_onglets");
 tabs.selectedItem = top.document.getElementById("Onglet_Profils_de_droits");
}

function Insert_Profils_de_droits_Liste_des_profils_de_droits0()
{
 TAB_COMPO_PPTES[88].Action_en_cours = INSERT;
/* On calcule la nouvelle cl� */
 TAB_COMPO_PPTES[88].NewCle = getNewCle("droitprofil");
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[88].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[90];
 Esclave_0.ActiverComposant(true);
top.document.getElementById("Validate_Profils_de_droits_Droits_2").disabled=true;
top.document.getElementById("Annuler_Profils_de_droits_Droits_2").disabled=true;
top.document.getElementById("Insert_Profils_de_droits_Droits_2").disabled=false;
top.document.getElementById("Delete_Profils_de_droits_Droits_2").disabled=false;
top.document.getElementById("Update_Profils_de_droits_Droits_2").disabled=false;
 var Esclave_1=TAB_GLOBAL_COMPO[91];
 Esclave_1.ActiverComposant(true);
top.document.getElementById("Validate_Profils_de_droits_Liste_des_profils_de_droits0").disabled=false;
top.document.getElementById("Annuler_Profils_de_droits_Liste_des_profils_de_droits0").disabled=false;
top.document.getElementById("Insert_Profils_de_droits_Liste_des_profils_de_droits0").disabled=true;
top.document.getElementById("Delete_Profils_de_droits_Liste_des_profils_de_droits0").disabled=true;
top.document.getElementById("Update_Profils_de_droits_Liste_des_profils_de_droits0").disabled=true;
 var Maitre=TAB_GLOBAL_COMPO[88];
 /* Pour une insertion on d�sectionne */
 var tree=Maitre.getComposantXul();
 if (tree.view!=null)
 {
 	tree.currentIndex=-1;
 	tree.view.selection.clearSelection();
 }
return TAB_COMPO_PPTES[88].NewCle;
}

function Delete_Profils_de_droits_Liste_des_profils_de_droits0()
{
 if (TAB_GLOBAL_COMPO[88].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement � suprimer");
 	return;
 }
 /* On recup�re le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[88];
 if (confirm("Voulez vous vraiment supprimer l'enregistrement en cours ?"))
 {
	TAB_COMPO_PPTES[88].Action_en_cours = DELETE;
 	User_Delete_Profils_de_droits_Liste_des_profils_de_droits0(Maitre);
	Maitre.RefreshTotal();
	Filtre_Dep_Profils_de_droits_0.OnClose(true);
 }
}

function Update_Profils_de_droits_Liste_des_profils_de_droits0()
{
 if (TAB_GLOBAL_COMPO[88].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement � mettre � jour");
 	return -1;
 }
 TAB_COMPO_PPTES[88].Action_en_cours = UPDATE;
/* On calcule la nouvelle cl� */
 TAB_COMPO_PPTES[88].NewCle = TAB_GLOBAL_COMPO[88].getCleVal();
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[88].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[90];
 Esclave_0.ActiverComposant(true);
top.document.getElementById("Validate_Profils_de_droits_Droits_2").disabled=true;
top.document.getElementById("Annuler_Profils_de_droits_Droits_2").disabled=true;
top.document.getElementById("Insert_Profils_de_droits_Droits_2").disabled=false;
top.document.getElementById("Delete_Profils_de_droits_Droits_2").disabled=false;
top.document.getElementById("Update_Profils_de_droits_Droits_2").disabled=false;
 var Esclave_1=TAB_GLOBAL_COMPO[91];
 Esclave_1.ActiverComposant(true);
top.document.getElementById("Validate_Profils_de_droits_Liste_des_profils_de_droits0").disabled=false;
top.document.getElementById("Annuler_Profils_de_droits_Liste_des_profils_de_droits0").disabled=false;
top.document.getElementById("Insert_Profils_de_droits_Liste_des_profils_de_droits0").disabled=true;
top.document.getElementById("Delete_Profils_de_droits_Liste_des_profils_de_droits0").disabled=true;
top.document.getElementById("Update_Profils_de_droits_Liste_des_profils_de_droits0").disabled=true;
return TAB_COMPO_PPTES[88].NewCle;
}

function Validate_Profils_de_droits_Liste_des_profils_de_droits0(retour)
{
 /* Retour � l'onget appellant si appelle par g�rer */
if (retour==null)
	retour=true;

 /* On recup�re le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[88];
 /* On recup�re la cl� du nouvel enregistrement */
 var NewCle=null;
 switch(TAB_COMPO_PPTES[88].Action_en_cours){
	case INSERT :
	if ((NewCle = User_Insert_Profils_de_droits_Liste_des_profils_de_droits0(Maitre))==-1)
		return -1;
	break;
	case UPDATE :
	if ((User_Update_Profils_de_droits_Liste_des_profils_de_droits0(Maitre))==-1)
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
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[88].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[90];
 Esclave_0.ActiverComposant(false);
Annuler_Profils_de_droits_Droits_2();
top.document.getElementById("Validate_Profils_de_droits_Droits_2").disabled=true;
top.document.getElementById("Annuler_Profils_de_droits_Droits_2").disabled=true;
top.document.getElementById("Insert_Profils_de_droits_Droits_2").disabled=true;
top.document.getElementById("Delete_Profils_de_droits_Droits_2").disabled=true;
top.document.getElementById("Update_Profils_de_droits_Droits_2").disabled=true;
 var Esclave_1=TAB_GLOBAL_COMPO[91];
 Esclave_1.ActiverComposant(false);
top.document.getElementById("Validate_Profils_de_droits_Liste_des_profils_de_droits0").disabled=true;
top.document.getElementById("Annuler_Profils_de_droits_Liste_des_profils_de_droits0").disabled=true;
top.document.getElementById("Insert_Profils_de_droits_Liste_des_profils_de_droits0").disabled=false;
top.document.getElementById("Delete_Profils_de_droits_Liste_des_profils_de_droits0").disabled=false;
top.document.getElementById("Update_Profils_de_droits_Liste_des_profils_de_droits0").disabled=false;
 if (NewCle==null)
 	NewCle=TAB_COMPO_PPTES[88].NewCle;
 Maitre.ForceNextSelection(NewCle)
 Maitre.RefreshTotal();
 if(retour)
 {
 Filtre_Dep_Profils_de_droits_0.OnClose(false);
 }
 TAB_COMPO_PPTES[88].Action_en_cours = null;
 return NewCle;
}

function Annuler_Profils_de_droits_Liste_des_profils_de_droits0()
{
 TAB_COMPO_PPTES[88].Action_en_cours = null;
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[88].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[90];
 Esclave_0.ActiverComposant(false);
Annuler_Profils_de_droits_Droits_2();
top.document.getElementById("Validate_Profils_de_droits_Droits_2").disabled=true;
top.document.getElementById("Annuler_Profils_de_droits_Droits_2").disabled=true;
top.document.getElementById("Insert_Profils_de_droits_Droits_2").disabled=true;
top.document.getElementById("Delete_Profils_de_droits_Droits_2").disabled=true;
top.document.getElementById("Update_Profils_de_droits_Droits_2").disabled=true;
 var Esclave_1=TAB_GLOBAL_COMPO[91];
 Esclave_1.ActiverComposant(false);
top.document.getElementById("Validate_Profils_de_droits_Liste_des_profils_de_droits0").disabled=true;
top.document.getElementById("Annuler_Profils_de_droits_Liste_des_profils_de_droits0").disabled=true;
top.document.getElementById("Insert_Profils_de_droits_Liste_des_profils_de_droits0").disabled=false;
top.document.getElementById("Delete_Profils_de_droits_Liste_des_profils_de_droits0").disabled=false;
top.document.getElementById("Update_Profils_de_droits_Liste_des_profils_de_droits0").disabled=false;
}

function Insert_Profils_de_droits_Droits_2()
{
 if (TAB_COMPO_PPTES[88].Action_en_cours == INSERT)
 	{
 		if (confirm("Pour continuer, vous devez enregistrer votre saisie\n Voulez vous poursuivre ?"))
		{
			var CleValide=Validate_Profils_de_droits_Liste_des_profils_de_droits0(false);
			if (CleValide==-1)
			{
				return -1;
			}
			CleValide=Update_Profils_de_droits_Liste_des_profils_de_droits0();
			if (CleValide==-1)
			{
				alert("Erreur l'enregistrement n'a pas �tais correctement ins�r�");
				return -1;
			}
			Insert_Profils_de_droits_Droits_2();
		}
 		return;
 	}
 TAB_COMPO_PPTES[91].Action_en_cours = INSERT;
/* On calcule la nouvelle cl� */
 TAB_COMPO_PPTES[91].NewCle = getNewCle("droit");
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[91].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[94];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[95];
 Esclave_1.ActiverComposant(true);
 var Esclave_2=TAB_GLOBAL_COMPO[96];
 Esclave_2.ActiverComposant(true);
 var Esclave_3=TAB_GLOBAL_COMPO[97];
 Esclave_3.ActiverComposant(true);
 var Esclave_4=TAB_GLOBAL_COMPO[98];
 Esclave_4.ActiverComposant(true);
top.document.getElementById("Validate_Profils_de_droits_Droits_2").disabled=false;
top.document.getElementById("Annuler_Profils_de_droits_Droits_2").disabled=false;
top.document.getElementById("Insert_Profils_de_droits_Droits_2").disabled=true;
top.document.getElementById("Delete_Profils_de_droits_Droits_2").disabled=true;
top.document.getElementById("Update_Profils_de_droits_Droits_2").disabled=true;
 var Maitre=TAB_GLOBAL_COMPO[91];
 /* Pour une insertion on d�sectionne */
 var tree=Maitre.getComposantXul();
 if (tree.view!=null)
 {
 	tree.currentIndex=-1;
 	tree.view.selection.clearSelection();
 }
TAB_GLOBAL_COMPO[95].my_CompoXUL.value=true;
TAB_GLOBAL_COMPO[95].my_CompoXUL.checked=true;

return TAB_COMPO_PPTES[91].NewCle;
}

function Delete_Profils_de_droits_Droits_2()
{
 if (TAB_GLOBAL_COMPO[91].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement � suprimer");
 	return;
 }
 /* On recup�re le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[91];
 if (confirm("Voulez vous vraiment supprimer l'enregistrement en cours ?"))
 {
	TAB_COMPO_PPTES[91].Action_en_cours = DELETE;
 	User_Delete_Profils_de_droits_Droits_2(Maitre);
	Maitre.RefreshTotal();
 }
}

function Update_Profils_de_droits_Droits_2()
{
 if (TAB_GLOBAL_COMPO[91].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement � mettre � jour");
 	return -1;
 }
 TAB_COMPO_PPTES[91].Action_en_cours = UPDATE;
/* On calcule la nouvelle cl� */
 TAB_COMPO_PPTES[91].NewCle = TAB_GLOBAL_COMPO[91].getCleVal();
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[91].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[94];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[95];
 Esclave_1.ActiverComposant(true);
 var Esclave_2=TAB_GLOBAL_COMPO[96];
 Esclave_2.ActiverComposant(true);
 var Esclave_3=TAB_GLOBAL_COMPO[97];
 Esclave_3.ActiverComposant(true);
 var Esclave_4=TAB_GLOBAL_COMPO[98];
 Esclave_4.ActiverComposant(true);
top.document.getElementById("Validate_Profils_de_droits_Droits_2").disabled=false;
top.document.getElementById("Annuler_Profils_de_droits_Droits_2").disabled=false;
top.document.getElementById("Insert_Profils_de_droits_Droits_2").disabled=true;
top.document.getElementById("Delete_Profils_de_droits_Droits_2").disabled=true;
top.document.getElementById("Update_Profils_de_droits_Droits_2").disabled=true;
return TAB_COMPO_PPTES[91].NewCle;
}

function Validate_Profils_de_droits_Droits_2(retour)
{
 /* Retour � l'onget appellant si appelle par g�rer */
if (retour==null)
	retour=true;

 /* On recup�re le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[91];
 /* On recup�re la cl� du nouvel enregistrement */
 var NewCle=null;
 switch(TAB_COMPO_PPTES[91].Action_en_cours){
	case INSERT :
	if ((NewCle = User_Insert_Profils_de_droits_Droits_2(Maitre))==-1)
		return -1;
	break;
	case UPDATE :
	if ((User_Update_Profils_de_droits_Droits_2(Maitre))==-1)
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
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[91].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[94];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[95];
 Esclave_1.ActiverComposant(false);
 var Esclave_2=TAB_GLOBAL_COMPO[96];
 Esclave_2.ActiverComposant(false);
 var Esclave_3=TAB_GLOBAL_COMPO[97];
 Esclave_3.ActiverComposant(false);
 var Esclave_4=TAB_GLOBAL_COMPO[98];
 Esclave_4.ActiverComposant(false);
top.document.getElementById("Validate_Profils_de_droits_Droits_2").disabled=true;
top.document.getElementById("Annuler_Profils_de_droits_Droits_2").disabled=true;
top.document.getElementById("Insert_Profils_de_droits_Droits_2").disabled=false;
top.document.getElementById("Delete_Profils_de_droits_Droits_2").disabled=false;
top.document.getElementById("Update_Profils_de_droits_Droits_2").disabled=false;
 if (NewCle==null)
 	NewCle=TAB_COMPO_PPTES[91].NewCle;
 Maitre.ForceNextSelection(NewCle)
 Maitre.RefreshTotal();
 if(retour)
 {
 }
 TAB_COMPO_PPTES[91].Action_en_cours = null;
 return NewCle;
}

function Annuler_Profils_de_droits_Droits_2()
{
 TAB_COMPO_PPTES[91].Action_en_cours = null;
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[91].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[94];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[95];
 Esclave_1.ActiverComposant(false);
 var Esclave_2=TAB_GLOBAL_COMPO[96];
 Esclave_2.ActiverComposant(false);
 var Esclave_3=TAB_GLOBAL_COMPO[97];
 Esclave_3.ActiverComposant(false);
 var Esclave_4=TAB_GLOBAL_COMPO[98];
 Esclave_4.ActiverComposant(false);
top.document.getElementById("Validate_Profils_de_droits_Droits_2").disabled=true;
top.document.getElementById("Annuler_Profils_de_droits_Droits_2").disabled=true;
top.document.getElementById("Insert_Profils_de_droits_Droits_2").disabled=false;
top.document.getElementById("Delete_Profils_de_droits_Droits_2").disabled=false;
top.document.getElementById("Update_Profils_de_droits_Droits_2").disabled=false;
}






/* *********************************************** 
         FONCTIONS POUR L'ONGLET Employ�s
   ***********************************************/ 

 /* FILTRES DE RELATION ENTRE ONGLETS => VARIABLES GLOBALES POUR ETRE ACCESSIBLES DEPUIS INTERFACE_USER.JS */

 var Filtre_DepFor_Employ�s_0;
function Retour_Employ�s()
{
 if (Filtre_DepFor_Employ�s_0.my_Filtre.getEtat())
 {
 	Filtre_DepFor_Employ�s_0.FctFermetureOnglet();
 }
}
function Gerer_Employ�s(IdFiltreOnglet)
{
/* Pour les filtrage fort on ne doit pas �tre en mode insertion */
if(TAB_COMPO_PPTES[67].Action_en_cours == INSERT)
{
	if (confirm("Pour continuer, vous devez enregistrer votre saisie\n Voulez vous poursuivre ?"))
	{
		var CleValide=Validate_Services_Liste_des_services0(false);
		if (CleValide==-1)
		{
			return;
		}
		CleValide=Update_Services_Liste_des_services0();
		if (CleValide==-1)
		{
			alert("Erreur l'enregistrement n'a pas �tais correctement ins�r�");
			return;
		}
	}
	else
 		return;
}
/* On d�sactive les autres filtres */
if (Filtre_DepFor_Employ�s_0.getId()!=IdFiltreOnglet)
{
	Filtre_DepFor_Employ�s_0.OnClose(true,false);
}
/* On change d'onglet */
 var tabs = top.document.getElementById("Tous_les_onglets");
 top.document.getElementById("Tous_les_onglets").setAttribute("hidden","false");
 tabs.selectedItem = top.document.getElementById("Onglet_Employ�s");
}

function OuvrirOnglet_Employ�s()
{
 var tabs = top.document.getElementById("Tous_les_onglets");
 tabs.selectedItem = top.document.getElementById("Onglet_Employ�s");
}

function Insert_Employ�s_Liste_des_employ�s0()
{
 TAB_COMPO_PPTES[77].Action_en_cours = INSERT;
/* On calcule la nouvelle cl� */
 TAB_COMPO_PPTES[77].NewCle = getNewCle("employe");
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[77].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[81];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[82];
 Esclave_1.ActiverComposant(true);
 var Esclave_2=TAB_GLOBAL_COMPO[83];
 Esclave_2.ActiverComposant(true);
 var Esclave_3=TAB_GLOBAL_COMPO[84];
 Esclave_3.ActiverComposant(true);
 var Esclave_4=TAB_GLOBAL_COMPO[85];
 Esclave_4.ActiverComposant(true);
 var Esclave_5=TAB_GLOBAL_COMPO[86];
 Esclave_5.ActiverComposant(true);
 var Esclave_6=TAB_GLOBAL_COMPO[87];
 Esclave_6.ActiverComposant(true);
top.document.getElementById("Validate_Employ�s_Liste_des_employ�s0").disabled=false;
top.document.getElementById("Annuler_Employ�s_Liste_des_employ�s0").disabled=false;
top.document.getElementById("Insert_Employ�s_Liste_des_employ�s0").disabled=true;
top.document.getElementById("Delete_Employ�s_Liste_des_employ�s0").disabled=true;
top.document.getElementById("Update_Employ�s_Liste_des_employ�s0").disabled=true;
 var Maitre=TAB_GLOBAL_COMPO[77];
 /* Pour une insertion on d�sectionne */
 var tree=Maitre.getComposantXul();
 if (tree.view!=null)
 {
 	tree.currentIndex=-1;
 	tree.view.selection.clearSelection();
 }
return TAB_COMPO_PPTES[77].NewCle;
}

function Delete_Employ�s_Liste_des_employ�s0()
{
 if (TAB_GLOBAL_COMPO[77].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement � suprimer");
 	return;
 }
 /* On recup�re le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[77];
 if (confirm("Voulez vous vraiment supprimer l'enregistrement en cours ?"))
 {
	TAB_COMPO_PPTES[77].Action_en_cours = DELETE;
 	User_Delete_Employ�s_Liste_des_employ�s0(Maitre);
	Maitre.RefreshTotal();
	Filtre_DepFor_Employ�s_0.Refresh();
 }
}

function Update_Employ�s_Liste_des_employ�s0()
{
 if (TAB_GLOBAL_COMPO[77].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement � mettre � jour");
 	return -1;
 }
 TAB_COMPO_PPTES[77].Action_en_cours = UPDATE;
/* On calcule la nouvelle cl� */
 TAB_COMPO_PPTES[77].NewCle = TAB_GLOBAL_COMPO[77].getCleVal();
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[77].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[81];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[82];
 Esclave_1.ActiverComposant(true);
 var Esclave_2=TAB_GLOBAL_COMPO[83];
 Esclave_2.ActiverComposant(true);
 var Esclave_3=TAB_GLOBAL_COMPO[84];
 Esclave_3.ActiverComposant(true);
 var Esclave_4=TAB_GLOBAL_COMPO[85];
 Esclave_4.ActiverComposant(true);
 var Esclave_5=TAB_GLOBAL_COMPO[86];
 Esclave_5.ActiverComposant(true);
 var Esclave_6=TAB_GLOBAL_COMPO[87];
 Esclave_6.ActiverComposant(true);
top.document.getElementById("Validate_Employ�s_Liste_des_employ�s0").disabled=false;
top.document.getElementById("Annuler_Employ�s_Liste_des_employ�s0").disabled=false;
top.document.getElementById("Insert_Employ�s_Liste_des_employ�s0").disabled=true;
top.document.getElementById("Delete_Employ�s_Liste_des_employ�s0").disabled=true;
top.document.getElementById("Update_Employ�s_Liste_des_employ�s0").disabled=true;
return TAB_COMPO_PPTES[77].NewCle;
}

function Validate_Employ�s_Liste_des_employ�s0(retour)
{
 /* Retour � l'onget appellant si appelle par g�rer */
if (retour==null)
	retour=true;

 /* On recup�re le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[77];
 /* On recup�re la cl� du nouvel enregistrement */
 var NewCle=null;
 switch(TAB_COMPO_PPTES[77].Action_en_cours){
	case INSERT :
	if ((NewCle = User_Insert_Employ�s_Liste_des_employ�s0(Maitre))==-1)
		return -1;
	break;
	case UPDATE :
	if ((User_Update_Employ�s_Liste_des_employ�s0(Maitre))==-1)
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
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[77].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[81];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[82];
 Esclave_1.ActiverComposant(false);
 var Esclave_2=TAB_GLOBAL_COMPO[83];
 Esclave_2.ActiverComposant(false);
 var Esclave_3=TAB_GLOBAL_COMPO[84];
 Esclave_3.ActiverComposant(false);
 var Esclave_4=TAB_GLOBAL_COMPO[85];
 Esclave_4.ActiverComposant(false);
 var Esclave_5=TAB_GLOBAL_COMPO[86];
 Esclave_5.ActiverComposant(false);
 var Esclave_6=TAB_GLOBAL_COMPO[87];
 Esclave_6.ActiverComposant(false);
top.document.getElementById("Validate_Employ�s_Liste_des_employ�s0").disabled=true;
top.document.getElementById("Annuler_Employ�s_Liste_des_employ�s0").disabled=true;
top.document.getElementById("Insert_Employ�s_Liste_des_employ�s0").disabled=false;
top.document.getElementById("Delete_Employ�s_Liste_des_employ�s0").disabled=false;
top.document.getElementById("Update_Employ�s_Liste_des_employ�s0").disabled=false;
 if (NewCle==null)
 	NewCle=TAB_COMPO_PPTES[77].NewCle;
 Maitre.ForceNextSelection(NewCle)
 Maitre.RefreshTotal();
 if(retour)
 {
 Filtre_DepFor_Employ�s_0.Refresh();
 }
 TAB_COMPO_PPTES[77].Action_en_cours = null;
 return NewCle;
}

function Annuler_Employ�s_Liste_des_employ�s0()
{
 TAB_COMPO_PPTES[77].Action_en_cours = null;
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[77].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[81];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[82];
 Esclave_1.ActiverComposant(false);
 var Esclave_2=TAB_GLOBAL_COMPO[83];
 Esclave_2.ActiverComposant(false);
 var Esclave_3=TAB_GLOBAL_COMPO[84];
 Esclave_3.ActiverComposant(false);
 var Esclave_4=TAB_GLOBAL_COMPO[85];
 Esclave_4.ActiverComposant(false);
 var Esclave_5=TAB_GLOBAL_COMPO[86];
 Esclave_5.ActiverComposant(false);
 var Esclave_6=TAB_GLOBAL_COMPO[87];
 Esclave_6.ActiverComposant(false);
top.document.getElementById("Validate_Employ�s_Liste_des_employ�s0").disabled=true;
top.document.getElementById("Annuler_Employ�s_Liste_des_employ�s0").disabled=true;
top.document.getElementById("Insert_Employ�s_Liste_des_employ�s0").disabled=false;
top.document.getElementById("Delete_Employ�s_Liste_des_employ�s0").disabled=false;
top.document.getElementById("Update_Employ�s_Liste_des_employ�s0").disabled=false;
}






/* *********************************************** 
         FONCTIONS POUR L'ONGLET �quipes
   ***********************************************/ 

 /* FILTRES DE RELATION ENTRE ONGLETS => VARIABLES GLOBALES POUR ETRE ACCESSIBLES DEPUIS INTERFACE_USER.JS */

 var Filtre_Dep_�quipes_0;
function Retour_�quipes()
{
 if (Filtre_Dep_�quipes_0.my_Filtre.getEtat())
 {
 	Filtre_Dep_�quipes_0.FctFermetureOnglet();
 }
}
function Gerer_�quipes(IdFiltreOnglet)
{
/* On d�sactive les autres filtres */
if (Filtre_Dep_�quipes_0.getId()!=IdFiltreOnglet)
{
	Filtre_Dep_�quipes_0.OnClose(true,false);
}
/* On change d'onglet */
 var tabs = top.document.getElementById("Tous_les_onglets");
 top.document.getElementById("Tous_les_onglets").setAttribute("hidden","false");
 tabs.selectedItem = top.document.getElementById("Onglet_�quipes");
}

function OuvrirOnglet_�quipes()
{
 var tabs = top.document.getElementById("Tous_les_onglets");
 tabs.selectedItem = top.document.getElementById("Onglet_�quipes");
}

function Insert_�quipes_Liste_des_�quipes0()
{
 TAB_COMPO_PPTES[120].Action_en_cours = INSERT;
/* On calcule la nouvelle cl� */
 TAB_COMPO_PPTES[120].NewCle = getNewCle("equipe");
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[120].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[122];
 Esclave_0.ActiverComposant(true);
top.document.getElementById("Validate_�quipes_Liste_des_�quipes0").disabled=false;
top.document.getElementById("Annuler_�quipes_Liste_des_�quipes0").disabled=false;
top.document.getElementById("Insert_�quipes_Liste_des_�quipes0").disabled=true;
top.document.getElementById("Delete_�quipes_Liste_des_�quipes0").disabled=true;
top.document.getElementById("Update_�quipes_Liste_des_�quipes0").disabled=true;
 var Maitre=TAB_GLOBAL_COMPO[120];
 /* Pour une insertion on d�sectionne */
 var tree=Maitre.getComposantXul();
 if (tree.view!=null)
 {
 	tree.currentIndex=-1;
 	tree.view.selection.clearSelection();
 }
return TAB_COMPO_PPTES[120].NewCle;
}

function Delete_�quipes_Liste_des_�quipes0()
{
 if (TAB_GLOBAL_COMPO[120].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement � suprimer");
 	return;
 }
 /* On recup�re le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[120];
 if (confirm("Voulez vous vraiment supprimer l'enregistrement en cours ?"))
 {
	TAB_COMPO_PPTES[120].Action_en_cours = DELETE;
 	User_Delete_�quipes_Liste_des_�quipes0(Maitre);
	Maitre.RefreshTotal();
	Filtre_Dep_�quipes_0.OnClose(true);
 }
}

function Update_�quipes_Liste_des_�quipes0()
{
 if (TAB_GLOBAL_COMPO[120].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement � mettre � jour");
 	return -1;
 }
 TAB_COMPO_PPTES[120].Action_en_cours = UPDATE;
/* On calcule la nouvelle cl� */
 TAB_COMPO_PPTES[120].NewCle = TAB_GLOBAL_COMPO[120].getCleVal();
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[120].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[122];
 Esclave_0.ActiverComposant(true);
top.document.getElementById("Validate_�quipes_Liste_des_�quipes0").disabled=false;
top.document.getElementById("Annuler_�quipes_Liste_des_�quipes0").disabled=false;
top.document.getElementById("Insert_�quipes_Liste_des_�quipes0").disabled=true;
top.document.getElementById("Delete_�quipes_Liste_des_�quipes0").disabled=true;
top.document.getElementById("Update_�quipes_Liste_des_�quipes0").disabled=true;
return TAB_COMPO_PPTES[120].NewCle;
}

function Validate_�quipes_Liste_des_�quipes0(retour)
{
 /* Retour � l'onget appellant si appelle par g�rer */
if (retour==null)
	retour=true;

 /* On recup�re le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[120];
 /* On recup�re la cl� du nouvel enregistrement */
 var NewCle=null;
 switch(TAB_COMPO_PPTES[120].Action_en_cours){
	case INSERT :
	if ((NewCle = User_Insert_�quipes_Liste_des_�quipes0(Maitre))==-1)
		return -1;
	break;
	case UPDATE :
	if ((User_Update_�quipes_Liste_des_�quipes0(Maitre))==-1)
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
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[120].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[122];
 Esclave_0.ActiverComposant(false);
top.document.getElementById("Validate_�quipes_Liste_des_�quipes0").disabled=true;
top.document.getElementById("Annuler_�quipes_Liste_des_�quipes0").disabled=true;
top.document.getElementById("Insert_�quipes_Liste_des_�quipes0").disabled=false;
top.document.getElementById("Delete_�quipes_Liste_des_�quipes0").disabled=false;
top.document.getElementById("Update_�quipes_Liste_des_�quipes0").disabled=false;
 if (NewCle==null)
 	NewCle=TAB_COMPO_PPTES[120].NewCle;
 Maitre.ForceNextSelection(NewCle)
 Maitre.RefreshTotal();
 if(retour)
 {
 Filtre_Dep_�quipes_0.OnClose(false);
 }
 TAB_COMPO_PPTES[120].Action_en_cours = null;
 return NewCle;
}

function Annuler_�quipes_Liste_des_�quipes0()
{
 TAB_COMPO_PPTES[120].Action_en_cours = null;
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[120].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[122];
 Esclave_0.ActiverComposant(false);
top.document.getElementById("Validate_�quipes_Liste_des_�quipes0").disabled=true;
top.document.getElementById("Annuler_�quipes_Liste_des_�quipes0").disabled=true;
top.document.getElementById("Insert_�quipes_Liste_des_�quipes0").disabled=false;
top.document.getElementById("Delete_�quipes_Liste_des_�quipes0").disabled=false;
top.document.getElementById("Update_�quipes_Liste_des_�quipes0").disabled=false;
}






/* *********************************************** 
         FONCTIONS POUR L'ONGLET Etats de personne
   ***********************************************/ 

 /* FILTRES DE RELATION ENTRE ONGLETS => VARIABLES GLOBALES POUR ETRE ACCESSIBLES DEPUIS INTERFACE_USER.JS */

function OuvrirOnglet_Etats_de_personne()
{
 var tabs = top.document.getElementById("Tous_les_onglets");
 tabs.selectedItem = top.document.getElementById("Onglet_Etats_de_personne");
}

function Insert_Etats_de_personne_Liste_des_�tats_de_personne0()
{
 TAB_COMPO_PPTES[50].Action_en_cours = INSERT;
/* On calcule la nouvelle cl� */
 TAB_COMPO_PPTES[50].NewCle = getNewCle("etatpersonne");
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[50].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[52];
 Esclave_0.ActiverComposant(true);
top.document.getElementById("Validate_Etats_de_personne_Liste_des_�tats_de_personne0").disabled=false;
top.document.getElementById("Annuler_Etats_de_personne_Liste_des_�tats_de_personne0").disabled=false;
top.document.getElementById("Insert_Etats_de_personne_Liste_des_�tats_de_personne0").disabled=true;
top.document.getElementById("Delete_Etats_de_personne_Liste_des_�tats_de_personne0").disabled=true;
top.document.getElementById("Update_Etats_de_personne_Liste_des_�tats_de_personne0").disabled=true;
 var Maitre=TAB_GLOBAL_COMPO[50];
 /* Pour une insertion on d�sectionne */
 var tree=Maitre.getComposantXul();
 if (tree.view!=null)
 {
 	tree.currentIndex=-1;
 	tree.view.selection.clearSelection();
 }
return TAB_COMPO_PPTES[50].NewCle;
}

function Delete_Etats_de_personne_Liste_des_�tats_de_personne0()
{
 if (TAB_GLOBAL_COMPO[50].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement � suprimer");
 	return;
 }
 /* On recup�re le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[50];
 if (confirm("Voulez vous vraiment supprimer l'enregistrement en cours ?"))
 {
	TAB_COMPO_PPTES[50].Action_en_cours = DELETE;
 	User_Delete_Etats_de_personne_Liste_des_�tats_de_personne0(Maitre);
	Maitre.RefreshTotal();
 }
}

function Update_Etats_de_personne_Liste_des_�tats_de_personne0()
{
 if (TAB_GLOBAL_COMPO[50].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement � mettre � jour");
 	return -1;
 }
 TAB_COMPO_PPTES[50].Action_en_cours = UPDATE;
/* On calcule la nouvelle cl� */
 TAB_COMPO_PPTES[50].NewCle = TAB_GLOBAL_COMPO[50].getCleVal();
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[50].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[52];
 Esclave_0.ActiverComposant(true);
top.document.getElementById("Validate_Etats_de_personne_Liste_des_�tats_de_personne0").disabled=false;
top.document.getElementById("Annuler_Etats_de_personne_Liste_des_�tats_de_personne0").disabled=false;
top.document.getElementById("Insert_Etats_de_personne_Liste_des_�tats_de_personne0").disabled=true;
top.document.getElementById("Delete_Etats_de_personne_Liste_des_�tats_de_personne0").disabled=true;
top.document.getElementById("Update_Etats_de_personne_Liste_des_�tats_de_personne0").disabled=true;
return TAB_COMPO_PPTES[50].NewCle;
}

function Validate_Etats_de_personne_Liste_des_�tats_de_personne0(retour)
{
 /* Retour � l'onget appellant si appelle par g�rer */
if (retour==null)
	retour=true;

 /* On recup�re le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[50];
 /* On recup�re la cl� du nouvel enregistrement */
 var NewCle=null;
 switch(TAB_COMPO_PPTES[50].Action_en_cours){
	case INSERT :
	if ((NewCle = User_Insert_Etats_de_personne_Liste_des_�tats_de_personne0(Maitre))==-1)
		return -1;
	break;
	case UPDATE :
	if ((User_Update_Etats_de_personne_Liste_des_�tats_de_personne0(Maitre))==-1)
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
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[50].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[52];
 Esclave_0.ActiverComposant(false);
top.document.getElementById("Validate_Etats_de_personne_Liste_des_�tats_de_personne0").disabled=true;
top.document.getElementById("Annuler_Etats_de_personne_Liste_des_�tats_de_personne0").disabled=true;
top.document.getElementById("Insert_Etats_de_personne_Liste_des_�tats_de_personne0").disabled=false;
top.document.getElementById("Delete_Etats_de_personne_Liste_des_�tats_de_personne0").disabled=false;
top.document.getElementById("Update_Etats_de_personne_Liste_des_�tats_de_personne0").disabled=false;
 if (NewCle==null)
 	NewCle=TAB_COMPO_PPTES[50].NewCle;
 Maitre.ForceNextSelection(NewCle)
 Maitre.RefreshTotal();
 if(retour)
 {
 }
 TAB_COMPO_PPTES[50].Action_en_cours = null;
 return NewCle;
}

function Annuler_Etats_de_personne_Liste_des_�tats_de_personne0()
{
 TAB_COMPO_PPTES[50].Action_en_cours = null;
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[50].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[52];
 Esclave_0.ActiverComposant(false);
top.document.getElementById("Validate_Etats_de_personne_Liste_des_�tats_de_personne0").disabled=true;
top.document.getElementById("Annuler_Etats_de_personne_Liste_des_�tats_de_personne0").disabled=true;
top.document.getElementById("Insert_Etats_de_personne_Liste_des_�tats_de_personne0").disabled=false;
top.document.getElementById("Delete_Etats_de_personne_Liste_des_�tats_de_personne0").disabled=false;
top.document.getElementById("Update_Etats_de_personne_Liste_des_�tats_de_personne0").disabled=false;
}






/* *********************************************** 
         FONCTIONS POUR L'ONGLET Groupe de tables
   ***********************************************/ 

 /* FILTRES DE RELATION ENTRE ONGLETS => VARIABLES GLOBALES POUR ETRE ACCESSIBLES DEPUIS INTERFACE_USER.JS */

 var Filtre_Dep_Groupe_de_tables_0;
function Retour_Groupe_de_tables()
{
 if (Filtre_Dep_Groupe_de_tables_0.my_Filtre.getEtat())
 {
 	Filtre_Dep_Groupe_de_tables_0.FctFermetureOnglet();
 }
}
function Gerer_Groupe_de_tables(IdFiltreOnglet)
{
/* On d�sactive les autres filtres */
if (Filtre_Dep_Groupe_de_tables_0.getId()!=IdFiltreOnglet)
{
	Filtre_Dep_Groupe_de_tables_0.OnClose(true,false);
}
/* On change d'onglet */
 var tabs = top.document.getElementById("Tous_les_onglets");
 top.document.getElementById("Tous_les_onglets").setAttribute("hidden","false");
 tabs.selectedItem = top.document.getElementById("Onglet_Groupe_de_tables");
}

function OuvrirOnglet_Groupe_de_tables()
{
 var tabs = top.document.getElementById("Tous_les_onglets");
 tabs.selectedItem = top.document.getElementById("Onglet_Groupe_de_tables");
}

function Insert_Groupe_de_tables_Liste_des_groupes_de_tables0()
{
 TAB_COMPO_PPTES[99].Action_en_cours = INSERT;
/* On calcule la nouvelle cl� */
 TAB_COMPO_PPTES[99].NewCle = getNewCle("groupetable");
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[99].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[102];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[103];
 Esclave_1.ActiverComposant(true);
top.document.getElementById("Validate_Groupe_de_tables_Liste_des_groupes_de_tables0").disabled=false;
top.document.getElementById("Annuler_Groupe_de_tables_Liste_des_groupes_de_tables0").disabled=false;
top.document.getElementById("Insert_Groupe_de_tables_Liste_des_groupes_de_tables0").disabled=true;
top.document.getElementById("Delete_Groupe_de_tables_Liste_des_groupes_de_tables0").disabled=true;
top.document.getElementById("Update_Groupe_de_tables_Liste_des_groupes_de_tables0").disabled=true;
 var Maitre=TAB_GLOBAL_COMPO[99];
 /* Pour une insertion on d�sectionne */
 var tree=Maitre.getComposantXul();
 if (tree.view!=null)
 {
 	tree.currentIndex=-1;
 	tree.view.selection.clearSelection();
 }
return TAB_COMPO_PPTES[99].NewCle;
}

function Delete_Groupe_de_tables_Liste_des_groupes_de_tables0()
{
 if (TAB_GLOBAL_COMPO[99].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement � suprimer");
 	return;
 }
 /* On recup�re le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[99];
 if (confirm("Voulez vous vraiment supprimer l'enregistrement en cours ?"))
 {
	TAB_COMPO_PPTES[99].Action_en_cours = DELETE;
 	User_Delete_Groupe_de_tables_Liste_des_groupes_de_tables0(Maitre);
	Maitre.RefreshTotal();
	Filtre_Dep_Groupe_de_tables_0.OnClose(true);
 }
}

function Update_Groupe_de_tables_Liste_des_groupes_de_tables0()
{
 if (TAB_GLOBAL_COMPO[99].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement � mettre � jour");
 	return -1;
 }
 TAB_COMPO_PPTES[99].Action_en_cours = UPDATE;
/* On calcule la nouvelle cl� */
 TAB_COMPO_PPTES[99].NewCle = TAB_GLOBAL_COMPO[99].getCleVal();
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[99].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[102];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[103];
 Esclave_1.ActiverComposant(true);
top.document.getElementById("Validate_Groupe_de_tables_Liste_des_groupes_de_tables0").disabled=false;
top.document.getElementById("Annuler_Groupe_de_tables_Liste_des_groupes_de_tables0").disabled=false;
top.document.getElementById("Insert_Groupe_de_tables_Liste_des_groupes_de_tables0").disabled=true;
top.document.getElementById("Delete_Groupe_de_tables_Liste_des_groupes_de_tables0").disabled=true;
top.document.getElementById("Update_Groupe_de_tables_Liste_des_groupes_de_tables0").disabled=true;
return TAB_COMPO_PPTES[99].NewCle;
}

function Validate_Groupe_de_tables_Liste_des_groupes_de_tables0(retour)
{
 /* Retour � l'onget appellant si appelle par g�rer */
if (retour==null)
	retour=true;

 /* On recup�re le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[99];
 /* On recup�re la cl� du nouvel enregistrement */
 var NewCle=null;
 switch(TAB_COMPO_PPTES[99].Action_en_cours){
	case INSERT :
	if ((NewCle = User_Insert_Groupe_de_tables_Liste_des_groupes_de_tables0(Maitre))==-1)
		return -1;
	break;
	case UPDATE :
	if ((User_Update_Groupe_de_tables_Liste_des_groupes_de_tables0(Maitre))==-1)
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
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[99].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[102];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[103];
 Esclave_1.ActiverComposant(false);
top.document.getElementById("Validate_Groupe_de_tables_Liste_des_groupes_de_tables0").disabled=true;
top.document.getElementById("Annuler_Groupe_de_tables_Liste_des_groupes_de_tables0").disabled=true;
top.document.getElementById("Insert_Groupe_de_tables_Liste_des_groupes_de_tables0").disabled=false;
top.document.getElementById("Delete_Groupe_de_tables_Liste_des_groupes_de_tables0").disabled=false;
top.document.getElementById("Update_Groupe_de_tables_Liste_des_groupes_de_tables0").disabled=false;
 if (NewCle==null)
 	NewCle=TAB_COMPO_PPTES[99].NewCle;
 Maitre.ForceNextSelection(NewCle)
 Maitre.RefreshTotal();
 if(retour)
 {
 Filtre_Dep_Groupe_de_tables_0.OnClose(false);
 }
 TAB_COMPO_PPTES[99].Action_en_cours = null;
 return NewCle;
}

function Annuler_Groupe_de_tables_Liste_des_groupes_de_tables0()
{
 TAB_COMPO_PPTES[99].Action_en_cours = null;
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[99].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[102];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[103];
 Esclave_1.ActiverComposant(false);
top.document.getElementById("Validate_Groupe_de_tables_Liste_des_groupes_de_tables0").disabled=true;
top.document.getElementById("Annuler_Groupe_de_tables_Liste_des_groupes_de_tables0").disabled=true;
top.document.getElementById("Insert_Groupe_de_tables_Liste_des_groupes_de_tables0").disabled=false;
top.document.getElementById("Delete_Groupe_de_tables_Liste_des_groupes_de_tables0").disabled=false;
top.document.getElementById("Update_Groupe_de_tables_Liste_des_groupes_de_tables0").disabled=false;
}






/* *********************************************** 
         FONCTIONS POUR L'ONGLET Groupes de cantons
   ***********************************************/ 

 /* FILTRES DE RELATION ENTRE ONGLETS => VARIABLES GLOBALES POUR ETRE ACCESSIBLES DEPUIS INTERFACE_USER.JS */

function OuvrirOnglet_Groupes_de_cantons()
{
 var tabs = top.document.getElementById("Tous_les_onglets");
 tabs.selectedItem = top.document.getElementById("Onglet_Groupes_de_cantons");
}

function Insert_Groupes_de_cantons_Liste_des_groupes_de_cantons0()
{
 TAB_COMPO_PPTES[35].Action_en_cours = INSERT;
/* On calcule la nouvelle cl� */
 TAB_COMPO_PPTES[35].NewCle = getNewCle("groupecanton");
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[35].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[37];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[41];
 Esclave_1.ActiverComposant(true);
top.document.getElementById("Validate_Groupes_de_cantons_Liste_des_groupes_de_cantons0").disabled=false;
top.document.getElementById("Annuler_Groupes_de_cantons_Liste_des_groupes_de_cantons0").disabled=false;
top.document.getElementById("Insert_Groupes_de_cantons_Liste_des_groupes_de_cantons0").disabled=true;
top.document.getElementById("Delete_Groupes_de_cantons_Liste_des_groupes_de_cantons0").disabled=true;
top.document.getElementById("Update_Groupes_de_cantons_Liste_des_groupes_de_cantons0").disabled=true;
 var Maitre=TAB_GLOBAL_COMPO[35];
 /* Pour une insertion on d�sectionne */
 var tree=Maitre.getComposantXul();
 if (tree.view!=null)
 {
 	tree.currentIndex=-1;
 	tree.view.selection.clearSelection();
 }
return TAB_COMPO_PPTES[35].NewCle;
}

function Delete_Groupes_de_cantons_Liste_des_groupes_de_cantons0()
{
 if (TAB_GLOBAL_COMPO[35].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement � suprimer");
 	return;
 }
 /* On recup�re le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[35];
 if (confirm("Voulez vous vraiment supprimer l'enregistrement en cours ?"))
 {
	TAB_COMPO_PPTES[35].Action_en_cours = DELETE;
 	User_Delete_Groupes_de_cantons_Liste_des_groupes_de_cantons0(Maitre);
	Maitre.RefreshTotal();
 }
}

function Update_Groupes_de_cantons_Liste_des_groupes_de_cantons0()
{
 if (TAB_GLOBAL_COMPO[35].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement � mettre � jour");
 	return -1;
 }
 TAB_COMPO_PPTES[35].Action_en_cours = UPDATE;
/* On calcule la nouvelle cl� */
 TAB_COMPO_PPTES[35].NewCle = TAB_GLOBAL_COMPO[35].getCleVal();
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[35].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[37];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[41];
 Esclave_1.ActiverComposant(true);
top.document.getElementById("Validate_Groupes_de_cantons_Liste_des_groupes_de_cantons0").disabled=false;
top.document.getElementById("Annuler_Groupes_de_cantons_Liste_des_groupes_de_cantons0").disabled=false;
top.document.getElementById("Insert_Groupes_de_cantons_Liste_des_groupes_de_cantons0").disabled=true;
top.document.getElementById("Delete_Groupes_de_cantons_Liste_des_groupes_de_cantons0").disabled=true;
top.document.getElementById("Update_Groupes_de_cantons_Liste_des_groupes_de_cantons0").disabled=true;
return TAB_COMPO_PPTES[35].NewCle;
}

function Validate_Groupes_de_cantons_Liste_des_groupes_de_cantons0(retour)
{
 /* Retour � l'onget appellant si appelle par g�rer */
if (retour==null)
	retour=true;

 /* On recup�re le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[35];
 /* On recup�re la cl� du nouvel enregistrement */
 var NewCle=null;
 switch(TAB_COMPO_PPTES[35].Action_en_cours){
	case INSERT :
	if ((NewCle = User_Insert_Groupes_de_cantons_Liste_des_groupes_de_cantons0(Maitre))==-1)
		return -1;
	break;
	case UPDATE :
	if ((User_Update_Groupes_de_cantons_Liste_des_groupes_de_cantons0(Maitre))==-1)
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
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[35].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[37];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[41];
 Esclave_1.ActiverComposant(false);
top.document.getElementById("Validate_Groupes_de_cantons_Liste_des_groupes_de_cantons0").disabled=true;
top.document.getElementById("Annuler_Groupes_de_cantons_Liste_des_groupes_de_cantons0").disabled=true;
top.document.getElementById("Insert_Groupes_de_cantons_Liste_des_groupes_de_cantons0").disabled=false;
top.document.getElementById("Delete_Groupes_de_cantons_Liste_des_groupes_de_cantons0").disabled=false;
top.document.getElementById("Update_Groupes_de_cantons_Liste_des_groupes_de_cantons0").disabled=false;
 if (NewCle==null)
 	NewCle=TAB_COMPO_PPTES[35].NewCle;
 Maitre.ForceNextSelection(NewCle)
 Maitre.RefreshTotal();
 if(retour)
 {
 }
 TAB_COMPO_PPTES[35].Action_en_cours = null;
 return NewCle;
}

function Annuler_Groupes_de_cantons_Liste_des_groupes_de_cantons0()
{
 TAB_COMPO_PPTES[35].Action_en_cours = null;
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[35].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[37];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[41];
 Esclave_1.ActiverComposant(false);
top.document.getElementById("Validate_Groupes_de_cantons_Liste_des_groupes_de_cantons0").disabled=true;
top.document.getElementById("Annuler_Groupes_de_cantons_Liste_des_groupes_de_cantons0").disabled=true;
top.document.getElementById("Insert_Groupes_de_cantons_Liste_des_groupes_de_cantons0").disabled=false;
top.document.getElementById("Delete_Groupes_de_cantons_Liste_des_groupes_de_cantons0").disabled=false;
top.document.getElementById("Update_Groupes_de_cantons_Liste_des_groupes_de_cantons0").disabled=false;
}






/* *********************************************** 
         FONCTIONS POUR L'ONGLET Mod�les d'impressions
   ***********************************************/ 

 /* FILTRES DE RELATION ENTRE ONGLETS => VARIABLES GLOBALES POUR ETRE ACCESSIBLES DEPUIS INTERFACE_USER.JS */

function OuvrirOnglet_Mod�les_d_impressions()
{
 var tabs = top.document.getElementById("Tous_les_onglets");
 tabs.selectedItem = top.document.getElementById("Onglet_Mod�les_d_impressions");
}

function Insert_Mod�les_d_impressions_Liste_des_mod�les_d_impressions0()
{
 TAB_COMPO_PPTES[217].Action_en_cours = INSERT;
/* On calcule la nouvelle cl� */
 TAB_COMPO_PPTES[217].NewCle = getNewCle("impression");
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[217].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[219];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[220];
 Esclave_1.ActiverComposant(true);
 var Esclave_2=TAB_GLOBAL_COMPO[221];
 Esclave_2.ActiverComposant(true);
 var Esclave_3=TAB_GLOBAL_COMPO[222];
 Esclave_3.ActiverComposant(true);
 var Esclave_4=TAB_GLOBAL_COMPO[223];
 Esclave_4.ActiverComposant(true);
 var Esclave_5=TAB_GLOBAL_COMPO[224];
 Esclave_5.ActiverComposant(true);
 var Esclave_6=TAB_GLOBAL_COMPO[225];
 Esclave_6.ActiverComposant(true);
top.document.getElementById("Validate_Mod�les_d_impressions_Liste_des_mod�les_d_impressions0").disabled=false;
top.document.getElementById("Annuler_Mod�les_d_impressions_Liste_des_mod�les_d_impressions0").disabled=false;
top.document.getElementById("Insert_Mod�les_d_impressions_Liste_des_mod�les_d_impressions0").disabled=true;
top.document.getElementById("Delete_Mod�les_d_impressions_Liste_des_mod�les_d_impressions0").disabled=true;
top.document.getElementById("Update_Mod�les_d_impressions_Liste_des_mod�les_d_impressions0").disabled=true;
 var Maitre=TAB_GLOBAL_COMPO[217];
 /* Pour une insertion on d�sectionne */
 var tree=Maitre.getComposantXul();
 if (tree.view!=null)
 {
 	tree.currentIndex=-1;
 	tree.view.selection.clearSelection();
 }
return TAB_COMPO_PPTES[217].NewCle;
}

function Delete_Mod�les_d_impressions_Liste_des_mod�les_d_impressions0()
{
 if (TAB_GLOBAL_COMPO[217].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement � suprimer");
 	return;
 }
 /* On recup�re le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[217];
 if (confirm("Voulez vous vraiment supprimer l'enregistrement en cours ?"))
 {
	TAB_COMPO_PPTES[217].Action_en_cours = DELETE;
 	User_Delete_Mod�les_d_impressions_Liste_des_mod�les_d_impressions0(Maitre);
	Maitre.RefreshTotal();
 }
}

function Update_Mod�les_d_impressions_Liste_des_mod�les_d_impressions0()
{
 if (TAB_GLOBAL_COMPO[217].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement � mettre � jour");
 	return -1;
 }
 TAB_COMPO_PPTES[217].Action_en_cours = UPDATE;
/* On calcule la nouvelle cl� */
 TAB_COMPO_PPTES[217].NewCle = TAB_GLOBAL_COMPO[217].getCleVal();
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[217].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[219];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[220];
 Esclave_1.ActiverComposant(true);
 var Esclave_2=TAB_GLOBAL_COMPO[221];
 Esclave_2.ActiverComposant(true);
 var Esclave_3=TAB_GLOBAL_COMPO[222];
 Esclave_3.ActiverComposant(true);
 var Esclave_4=TAB_GLOBAL_COMPO[223];
 Esclave_4.ActiverComposant(true);
 var Esclave_5=TAB_GLOBAL_COMPO[224];
 Esclave_5.ActiverComposant(true);
 var Esclave_6=TAB_GLOBAL_COMPO[225];
 Esclave_6.ActiverComposant(true);
top.document.getElementById("Validate_Mod�les_d_impressions_Liste_des_mod�les_d_impressions0").disabled=false;
top.document.getElementById("Annuler_Mod�les_d_impressions_Liste_des_mod�les_d_impressions0").disabled=false;
top.document.getElementById("Insert_Mod�les_d_impressions_Liste_des_mod�les_d_impressions0").disabled=true;
top.document.getElementById("Delete_Mod�les_d_impressions_Liste_des_mod�les_d_impressions0").disabled=true;
top.document.getElementById("Update_Mod�les_d_impressions_Liste_des_mod�les_d_impressions0").disabled=true;
return TAB_COMPO_PPTES[217].NewCle;
}

function Validate_Mod�les_d_impressions_Liste_des_mod�les_d_impressions0(retour)
{
 /* Retour � l'onget appellant si appelle par g�rer */
if (retour==null)
	retour=true;

 /* On recup�re le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[217];
 /* On recup�re la cl� du nouvel enregistrement */
 var NewCle=null;
 switch(TAB_COMPO_PPTES[217].Action_en_cours){
	case INSERT :
	if ((NewCle = User_Insert_Mod�les_d_impressions_Liste_des_mod�les_d_impressions0(Maitre))==-1)
		return -1;
	break;
	case UPDATE :
	if ((User_Update_Mod�les_d_impressions_Liste_des_mod�les_d_impressions0(Maitre))==-1)
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
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[217].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[219];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[220];
 Esclave_1.ActiverComposant(false);
 var Esclave_2=TAB_GLOBAL_COMPO[221];
 Esclave_2.ActiverComposant(false);
 var Esclave_3=TAB_GLOBAL_COMPO[222];
 Esclave_3.ActiverComposant(false);
 var Esclave_4=TAB_GLOBAL_COMPO[223];
 Esclave_4.ActiverComposant(false);
 var Esclave_5=TAB_GLOBAL_COMPO[224];
 Esclave_5.ActiverComposant(false);
 var Esclave_6=TAB_GLOBAL_COMPO[225];
 Esclave_6.ActiverComposant(false);
top.document.getElementById("Validate_Mod�les_d_impressions_Liste_des_mod�les_d_impressions0").disabled=true;
top.document.getElementById("Annuler_Mod�les_d_impressions_Liste_des_mod�les_d_impressions0").disabled=true;
top.document.getElementById("Insert_Mod�les_d_impressions_Liste_des_mod�les_d_impressions0").disabled=false;
top.document.getElementById("Delete_Mod�les_d_impressions_Liste_des_mod�les_d_impressions0").disabled=false;
top.document.getElementById("Update_Mod�les_d_impressions_Liste_des_mod�les_d_impressions0").disabled=false;
 if (NewCle==null)
 	NewCle=TAB_COMPO_PPTES[217].NewCle;
 Maitre.ForceNextSelection(NewCle)
 Maitre.RefreshTotal();
 if(retour)
 {
 }
 TAB_COMPO_PPTES[217].Action_en_cours = null;
 return NewCle;
}

function Annuler_Mod�les_d_impressions_Liste_des_mod�les_d_impressions0()
{
 TAB_COMPO_PPTES[217].Action_en_cours = null;
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[217].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[219];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[220];
 Esclave_1.ActiverComposant(false);
 var Esclave_2=TAB_GLOBAL_COMPO[221];
 Esclave_2.ActiverComposant(false);
 var Esclave_3=TAB_GLOBAL_COMPO[222];
 Esclave_3.ActiverComposant(false);
 var Esclave_4=TAB_GLOBAL_COMPO[223];
 Esclave_4.ActiverComposant(false);
 var Esclave_5=TAB_GLOBAL_COMPO[224];
 Esclave_5.ActiverComposant(false);
 var Esclave_6=TAB_GLOBAL_COMPO[225];
 Esclave_6.ActiverComposant(false);
top.document.getElementById("Validate_Mod�les_d_impressions_Liste_des_mod�les_d_impressions0").disabled=true;
top.document.getElementById("Annuler_Mod�les_d_impressions_Liste_des_mod�les_d_impressions0").disabled=true;
top.document.getElementById("Insert_Mod�les_d_impressions_Liste_des_mod�les_d_impressions0").disabled=false;
top.document.getElementById("Delete_Mod�les_d_impressions_Liste_des_mod�les_d_impressions0").disabled=false;
top.document.getElementById("Update_Mod�les_d_impressions_Liste_des_mod�les_d_impressions0").disabled=false;
}






/* *********************************************** 
         FONCTIONS POUR L'ONGLET Impressions
   ***********************************************/ 

 /* FILTRES DE RELATION ENTRE ONGLETS => VARIABLES GLOBALES POUR ETRE ACCESSIBLES DEPUIS INTERFACE_USER.JS */

function OuvrirOnglet_Impressions()
{
 var tabs = top.document.getElementById("Tous_les_onglets");
 tabs.selectedItem = top.document.getElementById("Onglet_Impressions");
}

function Insert_Impressions_Liste_des_mod�les_d_impressions0()
{
 TAB_COMPO_PPTES[226].Action_en_cours = INSERT;
/* On calcule la nouvelle cl� */
 TAB_COMPO_PPTES[226].NewCle = getNewCle("table_impression");
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[226].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[229];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[230];
 Esclave_1.ActiverComposant(true);
 var Esclave_2=TAB_GLOBAL_COMPO[231];
 Esclave_2.ActiverComposant(true);
 var Esclave_3=TAB_GLOBAL_COMPO[232];
 Esclave_3.ActiverComposant(true);
 var Esclave_4=TAB_GLOBAL_COMPO[233];
 Esclave_4.ActiverComposant(true);
 var Esclave_5=TAB_GLOBAL_COMPO[234];
 Esclave_5.ActiverComposant(true);
 var Esclave_6=TAB_GLOBAL_COMPO[235];
 Esclave_6.ActiverComposant(true);
 var Esclave_7=TAB_GLOBAL_COMPO[236];
 Esclave_7.ActiverComposant(true);
top.document.getElementById("Validate_Impressions_Liste_des_mod�les_d_impressions0").disabled=false;
top.document.getElementById("Annuler_Impressions_Liste_des_mod�les_d_impressions0").disabled=false;
top.document.getElementById("Insert_Impressions_Liste_des_mod�les_d_impressions0").disabled=true;
top.document.getElementById("Delete_Impressions_Liste_des_mod�les_d_impressions0").disabled=true;
top.document.getElementById("Update_Impressions_Liste_des_mod�les_d_impressions0").disabled=true;
 var Maitre=TAB_GLOBAL_COMPO[226];
 /* Pour une insertion on d�sectionne */
 var tree=Maitre.getComposantXul();
 if (tree.view!=null)
 {
 	tree.currentIndex=-1;
 	tree.view.selection.clearSelection();
 }
return TAB_COMPO_PPTES[226].NewCle;
}

function Delete_Impressions_Liste_des_mod�les_d_impressions0()
{
 if (TAB_GLOBAL_COMPO[226].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement � suprimer");
 	return;
 }
 /* On recup�re le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[226];
 if (confirm("Voulez vous vraiment supprimer l'enregistrement en cours ?"))
 {
	TAB_COMPO_PPTES[226].Action_en_cours = DELETE;
 	User_Delete_Impressions_Liste_des_mod�les_d_impressions0(Maitre);
	Maitre.RefreshTotal();
 }
}

function Update_Impressions_Liste_des_mod�les_d_impressions0()
{
 if (TAB_GLOBAL_COMPO[226].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement � mettre � jour");
 	return -1;
 }
 TAB_COMPO_PPTES[226].Action_en_cours = UPDATE;
/* On calcule la nouvelle cl� */
 TAB_COMPO_PPTES[226].NewCle = TAB_GLOBAL_COMPO[226].getCleVal();
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[226].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[229];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[230];
 Esclave_1.ActiverComposant(true);
 var Esclave_2=TAB_GLOBAL_COMPO[231];
 Esclave_2.ActiverComposant(true);
 var Esclave_3=TAB_GLOBAL_COMPO[232];
 Esclave_3.ActiverComposant(true);
 var Esclave_4=TAB_GLOBAL_COMPO[233];
 Esclave_4.ActiverComposant(true);
 var Esclave_5=TAB_GLOBAL_COMPO[234];
 Esclave_5.ActiverComposant(true);
 var Esclave_6=TAB_GLOBAL_COMPO[235];
 Esclave_6.ActiverComposant(true);
 var Esclave_7=TAB_GLOBAL_COMPO[236];
 Esclave_7.ActiverComposant(true);
top.document.getElementById("Validate_Impressions_Liste_des_mod�les_d_impressions0").disabled=false;
top.document.getElementById("Annuler_Impressions_Liste_des_mod�les_d_impressions0").disabled=false;
top.document.getElementById("Insert_Impressions_Liste_des_mod�les_d_impressions0").disabled=true;
top.document.getElementById("Delete_Impressions_Liste_des_mod�les_d_impressions0").disabled=true;
top.document.getElementById("Update_Impressions_Liste_des_mod�les_d_impressions0").disabled=true;
return TAB_COMPO_PPTES[226].NewCle;
}

function Validate_Impressions_Liste_des_mod�les_d_impressions0(retour)
{
 /* Retour � l'onget appellant si appelle par g�rer */
if (retour==null)
	retour=true;

 /* On recup�re le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[226];
 /* On recup�re la cl� du nouvel enregistrement */
 var NewCle=null;
 switch(TAB_COMPO_PPTES[226].Action_en_cours){
	case INSERT :
	if ((NewCle = User_Insert_Impressions_Liste_des_mod�les_d_impressions0(Maitre))==-1)
		return -1;
	break;
	case UPDATE :
	if ((User_Update_Impressions_Liste_des_mod�les_d_impressions0(Maitre))==-1)
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
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[226].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[229];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[230];
 Esclave_1.ActiverComposant(false);
 var Esclave_2=TAB_GLOBAL_COMPO[231];
 Esclave_2.ActiverComposant(false);
 var Esclave_3=TAB_GLOBAL_COMPO[232];
 Esclave_3.ActiverComposant(false);
 var Esclave_4=TAB_GLOBAL_COMPO[233];
 Esclave_4.ActiverComposant(false);
 var Esclave_5=TAB_GLOBAL_COMPO[234];
 Esclave_5.ActiverComposant(false);
 var Esclave_6=TAB_GLOBAL_COMPO[235];
 Esclave_6.ActiverComposant(false);
 var Esclave_7=TAB_GLOBAL_COMPO[236];
 Esclave_7.ActiverComposant(false);
top.document.getElementById("Validate_Impressions_Liste_des_mod�les_d_impressions0").disabled=true;
top.document.getElementById("Annuler_Impressions_Liste_des_mod�les_d_impressions0").disabled=true;
top.document.getElementById("Insert_Impressions_Liste_des_mod�les_d_impressions0").disabled=false;
top.document.getElementById("Delete_Impressions_Liste_des_mod�les_d_impressions0").disabled=false;
top.document.getElementById("Update_Impressions_Liste_des_mod�les_d_impressions0").disabled=false;
 if (NewCle==null)
 	NewCle=TAB_COMPO_PPTES[226].NewCle;
 Maitre.ForceNextSelection(NewCle)
 Maitre.RefreshTotal();
 if(retour)
 {
 }
 TAB_COMPO_PPTES[226].Action_en_cours = null;
 return NewCle;
}

function Annuler_Impressions_Liste_des_mod�les_d_impressions0()
{
 TAB_COMPO_PPTES[226].Action_en_cours = null;
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[226].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[229];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[230];
 Esclave_1.ActiverComposant(false);
 var Esclave_2=TAB_GLOBAL_COMPO[231];
 Esclave_2.ActiverComposant(false);
 var Esclave_3=TAB_GLOBAL_COMPO[232];
 Esclave_3.ActiverComposant(false);
 var Esclave_4=TAB_GLOBAL_COMPO[233];
 Esclave_4.ActiverComposant(false);
 var Esclave_5=TAB_GLOBAL_COMPO[234];
 Esclave_5.ActiverComposant(false);
 var Esclave_6=TAB_GLOBAL_COMPO[235];
 Esclave_6.ActiverComposant(false);
 var Esclave_7=TAB_GLOBAL_COMPO[236];
 Esclave_7.ActiverComposant(false);
top.document.getElementById("Validate_Impressions_Liste_des_mod�les_d_impressions0").disabled=true;
top.document.getElementById("Annuler_Impressions_Liste_des_mod�les_d_impressions0").disabled=true;
top.document.getElementById("Insert_Impressions_Liste_des_mod�les_d_impressions0").disabled=false;
top.document.getElementById("Delete_Impressions_Liste_des_mod�les_d_impressions0").disabled=false;
top.document.getElementById("Update_Impressions_Liste_des_mod�les_d_impressions0").disabled=false;
}






/* *********************************************** 
         FONCTIONS POUR L'ONGLET Mod�les
   ***********************************************/ 

 /* FILTRES DE RELATION ENTRE ONGLETS => VARIABLES GLOBALES POUR ETRE ACCESSIBLES DEPUIS INTERFACE_USER.JS */

function OuvrirOnglet_Mod�les()
{
 var tabs = top.document.getElementById("Tous_les_onglets");
 tabs.selectedItem = top.document.getElementById("Onglet_Mod�les");
}

function Insert_Mod�les_Liste_des_mod�les0()
{
 TAB_COMPO_PPTES[205].Action_en_cours = INSERT;
/* On calcule la nouvelle cl� */
 TAB_COMPO_PPTES[205].NewCle = getNewCle("modele");
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[205].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[207];
 Esclave_0.ActiverComposant(true);
top.document.getElementById("Validate_Mod�les_Lignes_du_mod�le_2").disabled=true;
top.document.getElementById("Annuler_Mod�les_Lignes_du_mod�le_2").disabled=true;
top.document.getElementById("Insert_Mod�les_Lignes_du_mod�le_2").disabled=false;
top.document.getElementById("Delete_Mod�les_Lignes_du_mod�le_2").disabled=false;
top.document.getElementById("Update_Mod�les_Lignes_du_mod�le_2").disabled=false;
 var Esclave_1=TAB_GLOBAL_COMPO[208];
 Esclave_1.ActiverComposant(true);
top.document.getElementById("Validate_Mod�les_Liste_des_mod�les0").disabled=false;
top.document.getElementById("Annuler_Mod�les_Liste_des_mod�les0").disabled=false;
top.document.getElementById("Insert_Mod�les_Liste_des_mod�les0").disabled=true;
top.document.getElementById("Delete_Mod�les_Liste_des_mod�les0").disabled=true;
top.document.getElementById("Update_Mod�les_Liste_des_mod�les0").disabled=true;
 var Maitre=TAB_GLOBAL_COMPO[205];
 /* Pour une insertion on d�sectionne */
 var tree=Maitre.getComposantXul();
 if (tree.view!=null)
 {
 	tree.currentIndex=-1;
 	tree.view.selection.clearSelection();
 }
return TAB_COMPO_PPTES[205].NewCle;
}

function Delete_Mod�les_Liste_des_mod�les0()
{
 if (TAB_GLOBAL_COMPO[205].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement � suprimer");
 	return;
 }
 /* On recup�re le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[205];
 if (confirm("Voulez vous vraiment supprimer l'enregistrement en cours ?"))
 {
	TAB_COMPO_PPTES[205].Action_en_cours = DELETE;
 	User_Delete_Mod�les_Liste_des_mod�les0(Maitre);
	Maitre.RefreshTotal();
 }
}

function Update_Mod�les_Liste_des_mod�les0()
{
 if (TAB_GLOBAL_COMPO[205].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement � mettre � jour");
 	return -1;
 }
 TAB_COMPO_PPTES[205].Action_en_cours = UPDATE;
/* On calcule la nouvelle cl� */
 TAB_COMPO_PPTES[205].NewCle = TAB_GLOBAL_COMPO[205].getCleVal();
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[205].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[207];
 Esclave_0.ActiverComposant(true);
top.document.getElementById("Validate_Mod�les_Lignes_du_mod�le_2").disabled=true;
top.document.getElementById("Annuler_Mod�les_Lignes_du_mod�le_2").disabled=true;
top.document.getElementById("Insert_Mod�les_Lignes_du_mod�le_2").disabled=false;
top.document.getElementById("Delete_Mod�les_Lignes_du_mod�le_2").disabled=false;
top.document.getElementById("Update_Mod�les_Lignes_du_mod�le_2").disabled=false;
 var Esclave_1=TAB_GLOBAL_COMPO[208];
 Esclave_1.ActiverComposant(true);
top.document.getElementById("Validate_Mod�les_Liste_des_mod�les0").disabled=false;
top.document.getElementById("Annuler_Mod�les_Liste_des_mod�les0").disabled=false;
top.document.getElementById("Insert_Mod�les_Liste_des_mod�les0").disabled=true;
top.document.getElementById("Delete_Mod�les_Liste_des_mod�les0").disabled=true;
top.document.getElementById("Update_Mod�les_Liste_des_mod�les0").disabled=true;
return TAB_COMPO_PPTES[205].NewCle;
}

function Validate_Mod�les_Liste_des_mod�les0(retour)
{
 /* Retour � l'onget appellant si appelle par g�rer */
if (retour==null)
	retour=true;

 /* On recup�re le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[205];
 /* On recup�re la cl� du nouvel enregistrement */
 var NewCle=null;
 switch(TAB_COMPO_PPTES[205].Action_en_cours){
	case INSERT :
	if ((NewCle = User_Insert_Mod�les_Liste_des_mod�les0(Maitre))==-1)
		return -1;
	break;
	case UPDATE :
	if ((User_Update_Mod�les_Liste_des_mod�les0(Maitre))==-1)
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
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[205].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[207];
 Esclave_0.ActiverComposant(false);
Annuler_Mod�les_Lignes_du_mod�le_2();
top.document.getElementById("Validate_Mod�les_Lignes_du_mod�le_2").disabled=true;
top.document.getElementById("Annuler_Mod�les_Lignes_du_mod�le_2").disabled=true;
top.document.getElementById("Insert_Mod�les_Lignes_du_mod�le_2").disabled=true;
top.document.getElementById("Delete_Mod�les_Lignes_du_mod�le_2").disabled=true;
top.document.getElementById("Update_Mod�les_Lignes_du_mod�le_2").disabled=true;
 var Esclave_1=TAB_GLOBAL_COMPO[208];
 Esclave_1.ActiverComposant(false);
top.document.getElementById("Validate_Mod�les_Liste_des_mod�les0").disabled=true;
top.document.getElementById("Annuler_Mod�les_Liste_des_mod�les0").disabled=true;
top.document.getElementById("Insert_Mod�les_Liste_des_mod�les0").disabled=false;
top.document.getElementById("Delete_Mod�les_Liste_des_mod�les0").disabled=false;
top.document.getElementById("Update_Mod�les_Liste_des_mod�les0").disabled=false;
 if (NewCle==null)
 	NewCle=TAB_COMPO_PPTES[205].NewCle;
 Maitre.ForceNextSelection(NewCle)
 Maitre.RefreshTotal();
 if(retour)
 {
 }
 TAB_COMPO_PPTES[205].Action_en_cours = null;
 return NewCle;
}

function Annuler_Mod�les_Liste_des_mod�les0()
{
 TAB_COMPO_PPTES[205].Action_en_cours = null;
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[205].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[207];
 Esclave_0.ActiverComposant(false);
Annuler_Mod�les_Lignes_du_mod�le_2();
top.document.getElementById("Validate_Mod�les_Lignes_du_mod�le_2").disabled=true;
top.document.getElementById("Annuler_Mod�les_Lignes_du_mod�le_2").disabled=true;
top.document.getElementById("Insert_Mod�les_Lignes_du_mod�le_2").disabled=true;
top.document.getElementById("Delete_Mod�les_Lignes_du_mod�le_2").disabled=true;
top.document.getElementById("Update_Mod�les_Lignes_du_mod�le_2").disabled=true;
 var Esclave_1=TAB_GLOBAL_COMPO[208];
 Esclave_1.ActiverComposant(false);
top.document.getElementById("Validate_Mod�les_Liste_des_mod�les0").disabled=true;
top.document.getElementById("Annuler_Mod�les_Liste_des_mod�les0").disabled=true;
top.document.getElementById("Insert_Mod�les_Liste_des_mod�les0").disabled=false;
top.document.getElementById("Delete_Mod�les_Liste_des_mod�les0").disabled=false;
top.document.getElementById("Update_Mod�les_Liste_des_mod�les0").disabled=false;
}

function Insert_Mod�les_Lignes_du_mod�le_2()
{
 if (TAB_COMPO_PPTES[205].Action_en_cours == INSERT)
 	{
 		if (confirm("Pour continuer, vous devez enregistrer votre saisie\n Voulez vous poursuivre ?"))
		{
			var CleValide=Validate_Mod�les_Liste_des_mod�les0(false);
			if (CleValide==-1)
			{
				return -1;
			}
			CleValide=Update_Mod�les_Liste_des_mod�les0();
			if (CleValide==-1)
			{
				alert("Erreur l'enregistrement n'a pas �tais correctement ins�r�");
				return -1;
			}
			Insert_Mod�les_Lignes_du_mod�le_2();
		}
 		return;
 	}
 TAB_COMPO_PPTES[208].Action_en_cours = INSERT;
/* On calcule la nouvelle cl� */
 TAB_COMPO_PPTES[208].NewCle = getNewCle("lignemodele");
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[208].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[213];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[214];
 Esclave_1.ActiverComposant(true);
 var Esclave_2=TAB_GLOBAL_COMPO[215];
 Esclave_2.ActiverComposant(true);
 var Esclave_3=TAB_GLOBAL_COMPO[216];
 Esclave_3.ActiverComposant(true);
top.document.getElementById("Validate_Mod�les_Lignes_du_mod�le_2").disabled=false;
top.document.getElementById("Annuler_Mod�les_Lignes_du_mod�le_2").disabled=false;
top.document.getElementById("Insert_Mod�les_Lignes_du_mod�le_2").disabled=true;
top.document.getElementById("Delete_Mod�les_Lignes_du_mod�le_2").disabled=true;
top.document.getElementById("Update_Mod�les_Lignes_du_mod�le_2").disabled=true;
 var Maitre=TAB_GLOBAL_COMPO[208];
 /* Pour une insertion on d�sectionne */
 var tree=Maitre.getComposantXul();
 if (tree.view!=null)
 {
 	tree.currentIndex=-1;
 	tree.view.selection.clearSelection();
 }
return TAB_COMPO_PPTES[208].NewCle;
}

function Delete_Mod�les_Lignes_du_mod�le_2()
{
 if (TAB_GLOBAL_COMPO[208].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement � suprimer");
 	return;
 }
 /* On recup�re le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[208];
 if (confirm("Voulez vous vraiment supprimer l'enregistrement en cours ?"))
 {
	TAB_COMPO_PPTES[208].Action_en_cours = DELETE;
 	User_Delete_Mod�les_Lignes_du_mod�le_2(Maitre);
	Maitre.RefreshTotal();
 }
}

function Update_Mod�les_Lignes_du_mod�le_2()
{
 if (TAB_GLOBAL_COMPO[208].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement � mettre � jour");
 	return -1;
 }
 TAB_COMPO_PPTES[208].Action_en_cours = UPDATE;
/* On calcule la nouvelle cl� */
 TAB_COMPO_PPTES[208].NewCle = TAB_GLOBAL_COMPO[208].getCleVal();
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[208].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[213];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[214];
 Esclave_1.ActiverComposant(true);
 var Esclave_2=TAB_GLOBAL_COMPO[215];
 Esclave_2.ActiverComposant(true);
 var Esclave_3=TAB_GLOBAL_COMPO[216];
 Esclave_3.ActiverComposant(true);
top.document.getElementById("Validate_Mod�les_Lignes_du_mod�le_2").disabled=false;
top.document.getElementById("Annuler_Mod�les_Lignes_du_mod�le_2").disabled=false;
top.document.getElementById("Insert_Mod�les_Lignes_du_mod�le_2").disabled=true;
top.document.getElementById("Delete_Mod�les_Lignes_du_mod�le_2").disabled=true;
top.document.getElementById("Update_Mod�les_Lignes_du_mod�le_2").disabled=true;
return TAB_COMPO_PPTES[208].NewCle;
}

function Validate_Mod�les_Lignes_du_mod�le_2(retour)
{
 /* Retour � l'onget appellant si appelle par g�rer */
if (retour==null)
	retour=true;

 /* On recup�re le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[208];
 /* On recup�re la cl� du nouvel enregistrement */
 var NewCle=null;
 switch(TAB_COMPO_PPTES[208].Action_en_cours){
	case INSERT :
	if ((NewCle = User_Insert_Mod�les_Lignes_du_mod�le_2(Maitre))==-1)
		return -1;
	break;
	case UPDATE :
	if ((User_Update_Mod�les_Lignes_du_mod�le_2(Maitre))==-1)
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
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[208].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[213];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[214];
 Esclave_1.ActiverComposant(false);
 var Esclave_2=TAB_GLOBAL_COMPO[215];
 Esclave_2.ActiverComposant(false);
 var Esclave_3=TAB_GLOBAL_COMPO[216];
 Esclave_3.ActiverComposant(false);
top.document.getElementById("Validate_Mod�les_Lignes_du_mod�le_2").disabled=true;
top.document.getElementById("Annuler_Mod�les_Lignes_du_mod�le_2").disabled=true;
top.document.getElementById("Insert_Mod�les_Lignes_du_mod�le_2").disabled=false;
top.document.getElementById("Delete_Mod�les_Lignes_du_mod�le_2").disabled=false;
top.document.getElementById("Update_Mod�les_Lignes_du_mod�le_2").disabled=false;
 if (NewCle==null)
 	NewCle=TAB_COMPO_PPTES[208].NewCle;
 Maitre.ForceNextSelection(NewCle)
 Maitre.RefreshTotal();
 if(retour)
 {
 }
 TAB_COMPO_PPTES[208].Action_en_cours = null;
 return NewCle;
}

function Annuler_Mod�les_Lignes_du_mod�le_2()
{
 TAB_COMPO_PPTES[208].Action_en_cours = null;
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[208].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[213];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[214];
 Esclave_1.ActiverComposant(false);
 var Esclave_2=TAB_GLOBAL_COMPO[215];
 Esclave_2.ActiverComposant(false);
 var Esclave_3=TAB_GLOBAL_COMPO[216];
 Esclave_3.ActiverComposant(false);
top.document.getElementById("Validate_Mod�les_Lignes_du_mod�le_2").disabled=true;
top.document.getElementById("Annuler_Mod�les_Lignes_du_mod�le_2").disabled=true;
top.document.getElementById("Insert_Mod�les_Lignes_du_mod�le_2").disabled=false;
top.document.getElementById("Delete_Mod�les_Lignes_du_mod�le_2").disabled=false;
top.document.getElementById("Update_Mod�les_Lignes_du_mod�le_2").disabled=false;
}






/* *********************************************** 
         FONCTIONS POUR L'ONGLET Mode de r�glements
   ***********************************************/ 

 /* FILTRES DE RELATION ENTRE ONGLETS => VARIABLES GLOBALES POUR ETRE ACCESSIBLES DEPUIS INTERFACE_USER.JS */

function OuvrirOnglet_Mode_de_r�glements()
{
 var tabs = top.document.getElementById("Tous_les_onglets");
 tabs.selectedItem = top.document.getElementById("Onglet_Mode_de_r�glements");
}

function Insert_Mode_de_r�glements_Liste_des_modes_de_r�glement0()
{
 TAB_COMPO_PPTES[8].Action_en_cours = INSERT;
/* On calcule la nouvelle cl� */
 TAB_COMPO_PPTES[8].NewCle = getNewCle("modereglement");
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[8].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[11];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[12];
 Esclave_1.ActiverComposant(true);
 var Esclave_2=TAB_GLOBAL_COMPO[13];
 Esclave_2.ActiverComposant(true);
 var Esclave_3=TAB_GLOBAL_COMPO[14];
 Esclave_3.ActiverComposant(true);
top.document.getElementById("Validate_Mode_de_r�glements_Liste_des_modes_de_r�glement0").disabled=false;
top.document.getElementById("Annuler_Mode_de_r�glements_Liste_des_modes_de_r�glement0").disabled=false;
top.document.getElementById("Insert_Mode_de_r�glements_Liste_des_modes_de_r�glement0").disabled=true;
top.document.getElementById("Delete_Mode_de_r�glements_Liste_des_modes_de_r�glement0").disabled=true;
top.document.getElementById("Update_Mode_de_r�glements_Liste_des_modes_de_r�glement0").disabled=true;
 var Maitre=TAB_GLOBAL_COMPO[8];
 /* Pour une insertion on d�sectionne */
 var tree=Maitre.getComposantXul();
 if (tree.view!=null)
 {
 	tree.currentIndex=-1;
 	tree.view.selection.clearSelection();
 }
return TAB_COMPO_PPTES[8].NewCle;
}

function Delete_Mode_de_r�glements_Liste_des_modes_de_r�glement0()
{
 if (TAB_GLOBAL_COMPO[8].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement � suprimer");
 	return;
 }
 /* On recup�re le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[8];
 if (confirm("Voulez vous vraiment supprimer l'enregistrement en cours ?"))
 {
	TAB_COMPO_PPTES[8].Action_en_cours = DELETE;
 	User_Delete_Mode_de_r�glements_Liste_des_modes_de_r�glement0(Maitre);
	Maitre.RefreshTotal();
 }
}

function Update_Mode_de_r�glements_Liste_des_modes_de_r�glement0()
{
 if (TAB_GLOBAL_COMPO[8].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement � mettre � jour");
 	return -1;
 }
 TAB_COMPO_PPTES[8].Action_en_cours = UPDATE;
/* On calcule la nouvelle cl� */
 TAB_COMPO_PPTES[8].NewCle = TAB_GLOBAL_COMPO[8].getCleVal();
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[8].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[11];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[12];
 Esclave_1.ActiverComposant(true);
 var Esclave_2=TAB_GLOBAL_COMPO[13];
 Esclave_2.ActiverComposant(true);
 var Esclave_3=TAB_GLOBAL_COMPO[14];
 Esclave_3.ActiverComposant(true);
top.document.getElementById("Validate_Mode_de_r�glements_Liste_des_modes_de_r�glement0").disabled=false;
top.document.getElementById("Annuler_Mode_de_r�glements_Liste_des_modes_de_r�glement0").disabled=false;
top.document.getElementById("Insert_Mode_de_r�glements_Liste_des_modes_de_r�glement0").disabled=true;
top.document.getElementById("Delete_Mode_de_r�glements_Liste_des_modes_de_r�glement0").disabled=true;
top.document.getElementById("Update_Mode_de_r�glements_Liste_des_modes_de_r�glement0").disabled=true;
return TAB_COMPO_PPTES[8].NewCle;
}

function Validate_Mode_de_r�glements_Liste_des_modes_de_r�glement0(retour)
{
 /* Retour � l'onget appellant si appelle par g�rer */
if (retour==null)
	retour=true;

 /* On recup�re le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[8];
 /* On recup�re la cl� du nouvel enregistrement */
 var NewCle=null;
 switch(TAB_COMPO_PPTES[8].Action_en_cours){
	case INSERT :
	if ((NewCle = User_Insert_Mode_de_r�glements_Liste_des_modes_de_r�glement0(Maitre))==-1)
		return -1;
	break;
	case UPDATE :
	if ((User_Update_Mode_de_r�glements_Liste_des_modes_de_r�glement0(Maitre))==-1)
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
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[8].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[11];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[12];
 Esclave_1.ActiverComposant(false);
 var Esclave_2=TAB_GLOBAL_COMPO[13];
 Esclave_2.ActiverComposant(false);
 var Esclave_3=TAB_GLOBAL_COMPO[14];
 Esclave_3.ActiverComposant(false);
top.document.getElementById("Validate_Mode_de_r�glements_Liste_des_modes_de_r�glement0").disabled=true;
top.document.getElementById("Annuler_Mode_de_r�glements_Liste_des_modes_de_r�glement0").disabled=true;
top.document.getElementById("Insert_Mode_de_r�glements_Liste_des_modes_de_r�glement0").disabled=false;
top.document.getElementById("Delete_Mode_de_r�glements_Liste_des_modes_de_r�glement0").disabled=false;
top.document.getElementById("Update_Mode_de_r�glements_Liste_des_modes_de_r�glement0").disabled=false;
 if (NewCle==null)
 	NewCle=TAB_COMPO_PPTES[8].NewCle;
 Maitre.ForceNextSelection(NewCle)
 Maitre.RefreshTotal();
 if(retour)
 {
 }
 TAB_COMPO_PPTES[8].Action_en_cours = null;
 return NewCle;
}

function Annuler_Mode_de_r�glements_Liste_des_modes_de_r�glement0()
{
 TAB_COMPO_PPTES[8].Action_en_cours = null;
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[8].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[11];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[12];
 Esclave_1.ActiverComposant(false);
 var Esclave_2=TAB_GLOBAL_COMPO[13];
 Esclave_2.ActiverComposant(false);
 var Esclave_3=TAB_GLOBAL_COMPO[14];
 Esclave_3.ActiverComposant(false);
top.document.getElementById("Validate_Mode_de_r�glements_Liste_des_modes_de_r�glement0").disabled=true;
top.document.getElementById("Annuler_Mode_de_r�glements_Liste_des_modes_de_r�glement0").disabled=true;
top.document.getElementById("Insert_Mode_de_r�glements_Liste_des_modes_de_r�glement0").disabled=false;
top.document.getElementById("Delete_Mode_de_r�glements_Liste_des_modes_de_r�glement0").disabled=false;
top.document.getElementById("Update_Mode_de_r�glements_Liste_des_modes_de_r�glement0").disabled=false;
}






/* *********************************************** 
         FONCTIONS POUR L'ONGLET Modes de r�partition
   ***********************************************/ 

 /* FILTRES DE RELATION ENTRE ONGLETS => VARIABLES GLOBALES POUR ETRE ACCESSIBLES DEPUIS INTERFACE_USER.JS */

function OuvrirOnglet_Modes_de_r�partition()
{
 var tabs = top.document.getElementById("Tous_les_onglets");
 tabs.selectedItem = top.document.getElementById("Onglet_Modes_de_r�partition");
}

function Insert_Modes_de_r�partition_Liste_des_modes_de_r�partition0()
{
 TAB_COMPO_PPTES[15].Action_en_cours = INSERT;
/* On calcule la nouvelle cl� */
 TAB_COMPO_PPTES[15].NewCle = getNewCle("moderepartition");
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[15].ActiverComposant(false,true);
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
top.document.getElementById("Validate_Modes_de_r�partition_Liste_des_modes_de_r�partition0").disabled=false;
top.document.getElementById("Annuler_Modes_de_r�partition_Liste_des_modes_de_r�partition0").disabled=false;
top.document.getElementById("Insert_Modes_de_r�partition_Liste_des_modes_de_r�partition0").disabled=true;
top.document.getElementById("Delete_Modes_de_r�partition_Liste_des_modes_de_r�partition0").disabled=true;
top.document.getElementById("Update_Modes_de_r�partition_Liste_des_modes_de_r�partition0").disabled=true;
 var Maitre=TAB_GLOBAL_COMPO[15];
 /* Pour une insertion on d�sectionne */
 var tree=Maitre.getComposantXul();
 if (tree.view!=null)
 {
 	tree.currentIndex=-1;
 	tree.view.selection.clearSelection();
 }
return TAB_COMPO_PPTES[15].NewCle;
}

function Delete_Modes_de_r�partition_Liste_des_modes_de_r�partition0()
{
 if (TAB_GLOBAL_COMPO[15].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement � suprimer");
 	return;
 }
 /* On recup�re le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[15];
 if (confirm("Voulez vous vraiment supprimer l'enregistrement en cours ?"))
 {
	TAB_COMPO_PPTES[15].Action_en_cours = DELETE;
 	User_Delete_Modes_de_r�partition_Liste_des_modes_de_r�partition0(Maitre);
	Maitre.RefreshTotal();
 }
}

function Update_Modes_de_r�partition_Liste_des_modes_de_r�partition0()
{
 if (TAB_GLOBAL_COMPO[15].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement � mettre � jour");
 	return -1;
 }
 TAB_COMPO_PPTES[15].Action_en_cours = UPDATE;
/* On calcule la nouvelle cl� */
 TAB_COMPO_PPTES[15].NewCle = TAB_GLOBAL_COMPO[15].getCleVal();
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[15].ActiverComposant(false,true);
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
top.document.getElementById("Validate_Modes_de_r�partition_Liste_des_modes_de_r�partition0").disabled=false;
top.document.getElementById("Annuler_Modes_de_r�partition_Liste_des_modes_de_r�partition0").disabled=false;
top.document.getElementById("Insert_Modes_de_r�partition_Liste_des_modes_de_r�partition0").disabled=true;
top.document.getElementById("Delete_Modes_de_r�partition_Liste_des_modes_de_r�partition0").disabled=true;
top.document.getElementById("Update_Modes_de_r�partition_Liste_des_modes_de_r�partition0").disabled=true;
return TAB_COMPO_PPTES[15].NewCle;
}

function Validate_Modes_de_r�partition_Liste_des_modes_de_r�partition0(retour)
{
 /* Retour � l'onget appellant si appelle par g�rer */
if (retour==null)
	retour=true;

 /* On recup�re le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[15];
 /* On recup�re la cl� du nouvel enregistrement */
 var NewCle=null;
 switch(TAB_COMPO_PPTES[15].Action_en_cours){
	case INSERT :
	if ((NewCle = User_Insert_Modes_de_r�partition_Liste_des_modes_de_r�partition0(Maitre))==-1)
		return -1;
	break;
	case UPDATE :
	if ((User_Update_Modes_de_r�partition_Liste_des_modes_de_r�partition0(Maitre))==-1)
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
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[15].ActiverComposant(true,true);
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
top.document.getElementById("Validate_Modes_de_r�partition_Liste_des_modes_de_r�partition0").disabled=true;
top.document.getElementById("Annuler_Modes_de_r�partition_Liste_des_modes_de_r�partition0").disabled=true;
top.document.getElementById("Insert_Modes_de_r�partition_Liste_des_modes_de_r�partition0").disabled=false;
top.document.getElementById("Delete_Modes_de_r�partition_Liste_des_modes_de_r�partition0").disabled=false;
top.document.getElementById("Update_Modes_de_r�partition_Liste_des_modes_de_r�partition0").disabled=false;
 if (NewCle==null)
 	NewCle=TAB_COMPO_PPTES[15].NewCle;
 Maitre.ForceNextSelection(NewCle)
 Maitre.RefreshTotal();
 if(retour)
 {
 }
 TAB_COMPO_PPTES[15].Action_en_cours = null;
 return NewCle;
}

function Annuler_Modes_de_r�partition_Liste_des_modes_de_r�partition0()
{
 TAB_COMPO_PPTES[15].Action_en_cours = null;
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[15].ActiverComposant(true,true);
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
top.document.getElementById("Validate_Modes_de_r�partition_Liste_des_modes_de_r�partition0").disabled=true;
top.document.getElementById("Annuler_Modes_de_r�partition_Liste_des_modes_de_r�partition0").disabled=true;
top.document.getElementById("Insert_Modes_de_r�partition_Liste_des_modes_de_r�partition0").disabled=false;
top.document.getElementById("Delete_Modes_de_r�partition_Liste_des_modes_de_r�partition0").disabled=false;
top.document.getElementById("Update_Modes_de_r�partition_Liste_des_modes_de_r�partition0").disabled=false;
}






/* *********************************************** 
         FONCTIONS POUR L'ONGLET P�riodes
   ***********************************************/ 

 /* FILTRES DE RELATION ENTRE ONGLETS => VARIABLES GLOBALES POUR ETRE ACCESSIBLES DEPUIS INTERFACE_USER.JS */

 var Filtre_Dep_P�riodes_0;
function Retour_P�riodes()
{
 if (Filtre_Dep_P�riodes_0.my_Filtre.getEtat())
 {
 	Filtre_Dep_P�riodes_0.FctFermetureOnglet();
 }
}
function Gerer_P�riodes(IdFiltreOnglet)
{
/* On d�sactive les autres filtres */
if (Filtre_Dep_P�riodes_0.getId()!=IdFiltreOnglet)
{
	Filtre_Dep_P�riodes_0.OnClose(true,false);
}
/* On change d'onglet */
 var tabs = top.document.getElementById("Tous_les_onglets");
 top.document.getElementById("Tous_les_onglets").setAttribute("hidden","false");
 tabs.selectedItem = top.document.getElementById("Onglet_P�riodes");
}

function OuvrirOnglet_P�riodes()
{
 var tabs = top.document.getElementById("Tous_les_onglets");
 tabs.selectedItem = top.document.getElementById("Onglet_P�riodes");
}

function Insert_P�riodes_Liste_des_p�riodes0()
{
 TAB_COMPO_PPTES[194].Action_en_cours = INSERT;
/* On calcule la nouvelle cl� */
 TAB_COMPO_PPTES[194].NewCle = getNewCle("periode");
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[194].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[197];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[198];
 Esclave_1.ActiverComposant(true);
top.document.getElementById("Validate_P�riodes_Liste_des_p�riodes0").disabled=false;
top.document.getElementById("Annuler_P�riodes_Liste_des_p�riodes0").disabled=false;
top.document.getElementById("Insert_P�riodes_Liste_des_p�riodes0").disabled=true;
top.document.getElementById("Delete_P�riodes_Liste_des_p�riodes0").disabled=true;
top.document.getElementById("Update_P�riodes_Liste_des_p�riodes0").disabled=true;
 var Maitre=TAB_GLOBAL_COMPO[194];
 /* Pour une insertion on d�sectionne */
 var tree=Maitre.getComposantXul();
 if (tree.view!=null)
 {
 	tree.currentIndex=-1;
 	tree.view.selection.clearSelection();
 }
return TAB_COMPO_PPTES[194].NewCle;
}

function Delete_P�riodes_Liste_des_p�riodes0()
{
 if (TAB_GLOBAL_COMPO[194].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement � suprimer");
 	return;
 }
 /* On recup�re le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[194];
 if (confirm("Voulez vous vraiment supprimer l'enregistrement en cours ?"))
 {
	TAB_COMPO_PPTES[194].Action_en_cours = DELETE;
 	User_Delete_P�riodes_Liste_des_p�riodes0(Maitre);
	Maitre.RefreshTotal();
	Filtre_Dep_P�riodes_0.OnClose(true);
 }
}

function Update_P�riodes_Liste_des_p�riodes0()
{
 if (TAB_GLOBAL_COMPO[194].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement � mettre � jour");
 	return -1;
 }
 TAB_COMPO_PPTES[194].Action_en_cours = UPDATE;
/* On calcule la nouvelle cl� */
 TAB_COMPO_PPTES[194].NewCle = TAB_GLOBAL_COMPO[194].getCleVal();
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[194].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[197];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[198];
 Esclave_1.ActiverComposant(true);
top.document.getElementById("Validate_P�riodes_Liste_des_p�riodes0").disabled=false;
top.document.getElementById("Annuler_P�riodes_Liste_des_p�riodes0").disabled=false;
top.document.getElementById("Insert_P�riodes_Liste_des_p�riodes0").disabled=true;
top.document.getElementById("Delete_P�riodes_Liste_des_p�riodes0").disabled=true;
top.document.getElementById("Update_P�riodes_Liste_des_p�riodes0").disabled=true;
return TAB_COMPO_PPTES[194].NewCle;
}

function Validate_P�riodes_Liste_des_p�riodes0(retour)
{
 /* Retour � l'onget appellant si appelle par g�rer */
if (retour==null)
	retour=true;

 /* On recup�re le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[194];
 /* On recup�re la cl� du nouvel enregistrement */
 var NewCle=null;
 switch(TAB_COMPO_PPTES[194].Action_en_cours){
	case INSERT :
	if ((NewCle = User_Insert_P�riodes_Liste_des_p�riodes0(Maitre))==-1)
		return -1;
	break;
	case UPDATE :
	if ((User_Update_P�riodes_Liste_des_p�riodes0(Maitre))==-1)
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
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[194].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[197];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[198];
 Esclave_1.ActiverComposant(false);
top.document.getElementById("Validate_P�riodes_Liste_des_p�riodes0").disabled=true;
top.document.getElementById("Annuler_P�riodes_Liste_des_p�riodes0").disabled=true;
top.document.getElementById("Insert_P�riodes_Liste_des_p�riodes0").disabled=false;
top.document.getElementById("Delete_P�riodes_Liste_des_p�riodes0").disabled=false;
top.document.getElementById("Update_P�riodes_Liste_des_p�riodes0").disabled=false;
 if (NewCle==null)
 	NewCle=TAB_COMPO_PPTES[194].NewCle;
 Maitre.ForceNextSelection(NewCle)
 Maitre.RefreshTotal();
 if(retour)
 {
 Filtre_Dep_P�riodes_0.OnClose(false);
 }
 TAB_COMPO_PPTES[194].Action_en_cours = null;
 return NewCle;
}

function Annuler_P�riodes_Liste_des_p�riodes0()
{
 TAB_COMPO_PPTES[194].Action_en_cours = null;
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[194].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[197];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[198];
 Esclave_1.ActiverComposant(false);
top.document.getElementById("Validate_P�riodes_Liste_des_p�riodes0").disabled=true;
top.document.getElementById("Annuler_P�riodes_Liste_des_p�riodes0").disabled=true;
top.document.getElementById("Insert_P�riodes_Liste_des_p�riodes0").disabled=false;
top.document.getElementById("Delete_P�riodes_Liste_des_p�riodes0").disabled=false;
top.document.getElementById("Update_P�riodes_Liste_des_p�riodes0").disabled=false;
}






/* *********************************************** 
         FONCTIONS POUR L'ONGLET Pr�fixes
   ***********************************************/ 

 /* FILTRES DE RELATION ENTRE ONGLETS => VARIABLES GLOBALES POUR ETRE ACCESSIBLES DEPUIS INTERFACE_USER.JS */

function OuvrirOnglet_Pr�fixes()
{
 var tabs = top.document.getElementById("Tous_les_onglets");
 tabs.selectedItem = top.document.getElementById("Onglet_Pr�fixes");
}

function Insert_Pr�fixes_Liste_des_pr�fixes0()
{
 TAB_COMPO_PPTES[202].Action_en_cours = INSERT;
/* On calcule la nouvelle cl� */
 TAB_COMPO_PPTES[202].NewCle = getNewCle("prefixe");
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[202].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[204];
 Esclave_0.ActiverComposant(true);
top.document.getElementById("Validate_Pr�fixes_Liste_des_pr�fixes0").disabled=false;
top.document.getElementById("Annuler_Pr�fixes_Liste_des_pr�fixes0").disabled=false;
top.document.getElementById("Insert_Pr�fixes_Liste_des_pr�fixes0").disabled=true;
top.document.getElementById("Delete_Pr�fixes_Liste_des_pr�fixes0").disabled=true;
top.document.getElementById("Update_Pr�fixes_Liste_des_pr�fixes0").disabled=true;
 var Maitre=TAB_GLOBAL_COMPO[202];
 /* Pour une insertion on d�sectionne */
 var tree=Maitre.getComposantXul();
 if (tree.view!=null)
 {
 	tree.currentIndex=-1;
 	tree.view.selection.clearSelection();
 }
return TAB_COMPO_PPTES[202].NewCle;
}

function Delete_Pr�fixes_Liste_des_pr�fixes0()
{
 if (TAB_GLOBAL_COMPO[202].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement � suprimer");
 	return;
 }
 /* On recup�re le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[202];
 if (confirm("Voulez vous vraiment supprimer l'enregistrement en cours ?"))
 {
	TAB_COMPO_PPTES[202].Action_en_cours = DELETE;
 	User_Delete_Pr�fixes_Liste_des_pr�fixes0(Maitre);
	Maitre.RefreshTotal();
 }
}

function Update_Pr�fixes_Liste_des_pr�fixes0()
{
 if (TAB_GLOBAL_COMPO[202].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement � mettre � jour");
 	return -1;
 }
 TAB_COMPO_PPTES[202].Action_en_cours = UPDATE;
/* On calcule la nouvelle cl� */
 TAB_COMPO_PPTES[202].NewCle = TAB_GLOBAL_COMPO[202].getCleVal();
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[202].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[204];
 Esclave_0.ActiverComposant(true);
top.document.getElementById("Validate_Pr�fixes_Liste_des_pr�fixes0").disabled=false;
top.document.getElementById("Annuler_Pr�fixes_Liste_des_pr�fixes0").disabled=false;
top.document.getElementById("Insert_Pr�fixes_Liste_des_pr�fixes0").disabled=true;
top.document.getElementById("Delete_Pr�fixes_Liste_des_pr�fixes0").disabled=true;
top.document.getElementById("Update_Pr�fixes_Liste_des_pr�fixes0").disabled=true;
return TAB_COMPO_PPTES[202].NewCle;
}

function Validate_Pr�fixes_Liste_des_pr�fixes0(retour)
{
 /* Retour � l'onget appellant si appelle par g�rer */
if (retour==null)
	retour=true;

 /* On recup�re le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[202];
 /* On recup�re la cl� du nouvel enregistrement */
 var NewCle=null;
 switch(TAB_COMPO_PPTES[202].Action_en_cours){
	case INSERT :
	if ((NewCle = User_Insert_Pr�fixes_Liste_des_pr�fixes0(Maitre))==-1)
		return -1;
	break;
	case UPDATE :
	if ((User_Update_Pr�fixes_Liste_des_pr�fixes0(Maitre))==-1)
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
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[202].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[204];
 Esclave_0.ActiverComposant(false);
top.document.getElementById("Validate_Pr�fixes_Liste_des_pr�fixes0").disabled=true;
top.document.getElementById("Annuler_Pr�fixes_Liste_des_pr�fixes0").disabled=true;
top.document.getElementById("Insert_Pr�fixes_Liste_des_pr�fixes0").disabled=false;
top.document.getElementById("Delete_Pr�fixes_Liste_des_pr�fixes0").disabled=false;
top.document.getElementById("Update_Pr�fixes_Liste_des_pr�fixes0").disabled=false;
 if (NewCle==null)
 	NewCle=TAB_COMPO_PPTES[202].NewCle;
 Maitre.ForceNextSelection(NewCle)
 Maitre.RefreshTotal();
 if(retour)
 {
 }
 TAB_COMPO_PPTES[202].Action_en_cours = null;
 return NewCle;
}

function Annuler_Pr�fixes_Liste_des_pr�fixes0()
{
 TAB_COMPO_PPTES[202].Action_en_cours = null;
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[202].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[204];
 Esclave_0.ActiverComposant(false);
top.document.getElementById("Validate_Pr�fixes_Liste_des_pr�fixes0").disabled=true;
top.document.getElementById("Annuler_Pr�fixes_Liste_des_pr�fixes0").disabled=true;
top.document.getElementById("Insert_Pr�fixes_Liste_des_pr�fixes0").disabled=false;
top.document.getElementById("Delete_Pr�fixes_Liste_des_pr�fixes0").disabled=false;
top.document.getElementById("Update_Pr�fixes_Liste_des_pr�fixes0").disabled=false;
}






/* *********************************************** 
         FONCTIONS POUR L'ONGLET Produits
   ***********************************************/ 

 /* FILTRES DE RELATION ENTRE ONGLETS => VARIABLES GLOBALES POUR ETRE ACCESSIBLES DEPUIS INTERFACE_USER.JS */

 var Filtre_Dep_Produits_0;
 var Filtre_Dep_Produits_1;
function Retour_Produits()
{
 if (Filtre_Dep_Produits_0.my_Filtre.getEtat())
 {
 	Filtre_Dep_Produits_0.FctFermetureOnglet();
 }
 if (Filtre_Dep_Produits_1.my_Filtre.getEtat())
 {
 	Filtre_Dep_Produits_1.FctFermetureOnglet();
 }
}
function Gerer_Produits(IdFiltreOnglet)
{
/* On d�sactive les autres filtres */
if (Filtre_Dep_Produits_0.getId()!=IdFiltreOnglet)
{
	Filtre_Dep_Produits_0.OnClose(true,false);
}
if (Filtre_Dep_Produits_1.getId()!=IdFiltreOnglet)
{
	Filtre_Dep_Produits_1.OnClose(true,false);
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

function Insert_Produits_Liste_des_produits0()
{
 TAB_COMPO_PPTES[158].Action_en_cours = INSERT;
/* On calcule la nouvelle cl� */
 TAB_COMPO_PPTES[158].NewCle = getNewCle("produit");
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[158].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[161];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[162];
 Esclave_1.ActiverComposant(true);
 var Esclave_2=TAB_GLOBAL_COMPO[163];
 Esclave_2.ActiverComposant(true);
 var Esclave_3=TAB_GLOBAL_COMPO[164];
 Esclave_3.ActiverComposant(true);
top.document.getElementById("Validate_Produits_Prix_5").disabled=true;
top.document.getElementById("Annuler_Produits_Prix_5").disabled=true;
top.document.getElementById("Insert_Produits_Prix_5").disabled=false;
top.document.getElementById("Delete_Produits_Prix_5").disabled=false;
top.document.getElementById("Update_Produits_Prix_5").disabled=false;
 var Esclave_4=TAB_GLOBAL_COMPO[165];
 Esclave_4.ActiverComposant(true);
top.document.getElementById("Validate_Produits_Comptes_g�n�raux_11").disabled=true;
top.document.getElementById("Annuler_Produits_Comptes_g�n�raux_11").disabled=true;
top.document.getElementById("Insert_Produits_Comptes_g�n�raux_11").disabled=false;
top.document.getElementById("Delete_Produits_Comptes_g�n�raux_11").disabled=false;
top.document.getElementById("Update_Produits_Comptes_g�n�raux_11").disabled=false;
 var Esclave_5=TAB_GLOBAL_COMPO[175];
 Esclave_5.ActiverComposant(true);
top.document.getElementById("Validate_Produits_Liste_des_produits0").disabled=false;
top.document.getElementById("Annuler_Produits_Liste_des_produits0").disabled=false;
top.document.getElementById("Insert_Produits_Liste_des_produits0").disabled=true;
top.document.getElementById("Delete_Produits_Liste_des_produits0").disabled=true;
top.document.getElementById("Update_Produits_Liste_des_produits0").disabled=true;
 var Maitre=TAB_GLOBAL_COMPO[158];
 /* Pour une insertion on d�sectionne */
 var tree=Maitre.getComposantXul();
 if (tree.view!=null)
 {
 	tree.currentIndex=-1;
 	tree.view.selection.clearSelection();
 }
TAB_GLOBAL_COMPO[163].my_CompoXUL.value=true;
TAB_GLOBAL_COMPO[163].my_CompoXUL.checked=true;

return TAB_COMPO_PPTES[158].NewCle;
}

function Delete_Produits_Liste_des_produits0()
{
 if (TAB_GLOBAL_COMPO[158].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement � suprimer");
 	return;
 }
 /* On recup�re le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[158];
 if (confirm("Voulez vous vraiment supprimer l'enregistrement en cours ?"))
 {
	TAB_COMPO_PPTES[158].Action_en_cours = DELETE;
 	User_Delete_Produits_Liste_des_produits0(Maitre);
	Maitre.RefreshTotal();
	Filtre_Dep_Produits_0.OnClose(true);
	Filtre_Dep_Produits_1.OnClose(true);
 }
}

function Update_Produits_Liste_des_produits0()
{
 if (TAB_GLOBAL_COMPO[158].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement � mettre � jour");
 	return -1;
 }
 TAB_COMPO_PPTES[158].Action_en_cours = UPDATE;
/* On calcule la nouvelle cl� */
 TAB_COMPO_PPTES[158].NewCle = TAB_GLOBAL_COMPO[158].getCleVal();
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[158].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[161];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[162];
 Esclave_1.ActiverComposant(true);
 var Esclave_2=TAB_GLOBAL_COMPO[163];
 Esclave_2.ActiverComposant(true);
 var Esclave_3=TAB_GLOBAL_COMPO[164];
 Esclave_3.ActiverComposant(true);
top.document.getElementById("Validate_Produits_Prix_5").disabled=true;
top.document.getElementById("Annuler_Produits_Prix_5").disabled=true;
top.document.getElementById("Insert_Produits_Prix_5").disabled=false;
top.document.getElementById("Delete_Produits_Prix_5").disabled=false;
top.document.getElementById("Update_Produits_Prix_5").disabled=false;
 var Esclave_4=TAB_GLOBAL_COMPO[165];
 Esclave_4.ActiverComposant(true);
top.document.getElementById("Validate_Produits_Comptes_g�n�raux_11").disabled=true;
top.document.getElementById("Annuler_Produits_Comptes_g�n�raux_11").disabled=true;
top.document.getElementById("Insert_Produits_Comptes_g�n�raux_11").disabled=false;
top.document.getElementById("Delete_Produits_Comptes_g�n�raux_11").disabled=false;
top.document.getElementById("Update_Produits_Comptes_g�n�raux_11").disabled=false;
 var Esclave_5=TAB_GLOBAL_COMPO[175];
 Esclave_5.ActiverComposant(true);
top.document.getElementById("Validate_Produits_Liste_des_produits0").disabled=false;
top.document.getElementById("Annuler_Produits_Liste_des_produits0").disabled=false;
top.document.getElementById("Insert_Produits_Liste_des_produits0").disabled=true;
top.document.getElementById("Delete_Produits_Liste_des_produits0").disabled=true;
top.document.getElementById("Update_Produits_Liste_des_produits0").disabled=true;
return TAB_COMPO_PPTES[158].NewCle;
}

function Validate_Produits_Liste_des_produits0(retour)
{
 /* Retour � l'onget appellant si appelle par g�rer */
if (retour==null)
	retour=true;

 /* On recup�re le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[158];
 /* On recup�re la cl� du nouvel enregistrement */
 var NewCle=null;
 switch(TAB_COMPO_PPTES[158].Action_en_cours){
	case INSERT :
	if ((NewCle = User_Insert_Produits_Liste_des_produits0(Maitre))==-1)
		return -1;
	break;
	case UPDATE :
	if ((User_Update_Produits_Liste_des_produits0(Maitre))==-1)
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
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[158].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[161];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[162];
 Esclave_1.ActiverComposant(false);
 var Esclave_2=TAB_GLOBAL_COMPO[163];
 Esclave_2.ActiverComposant(false);
 var Esclave_3=TAB_GLOBAL_COMPO[164];
 Esclave_3.ActiverComposant(false);
Annuler_Produits_Prix_5();
top.document.getElementById("Validate_Produits_Prix_5").disabled=true;
top.document.getElementById("Annuler_Produits_Prix_5").disabled=true;
top.document.getElementById("Insert_Produits_Prix_5").disabled=true;
top.document.getElementById("Delete_Produits_Prix_5").disabled=true;
top.document.getElementById("Update_Produits_Prix_5").disabled=true;
 var Esclave_4=TAB_GLOBAL_COMPO[165];
 Esclave_4.ActiverComposant(false);
Annuler_Produits_Comptes_g�n�raux_11();
top.document.getElementById("Validate_Produits_Comptes_g�n�raux_11").disabled=true;
top.document.getElementById("Annuler_Produits_Comptes_g�n�raux_11").disabled=true;
top.document.getElementById("Insert_Produits_Comptes_g�n�raux_11").disabled=true;
top.document.getElementById("Delete_Produits_Comptes_g�n�raux_11").disabled=true;
top.document.getElementById("Update_Produits_Comptes_g�n�raux_11").disabled=true;
 var Esclave_5=TAB_GLOBAL_COMPO[175];
 Esclave_5.ActiverComposant(false);
top.document.getElementById("Validate_Produits_Liste_des_produits0").disabled=true;
top.document.getElementById("Annuler_Produits_Liste_des_produits0").disabled=true;
top.document.getElementById("Insert_Produits_Liste_des_produits0").disabled=false;
top.document.getElementById("Delete_Produits_Liste_des_produits0").disabled=false;
top.document.getElementById("Update_Produits_Liste_des_produits0").disabled=false;
 if (NewCle==null)
 	NewCle=TAB_COMPO_PPTES[158].NewCle;
 Maitre.ForceNextSelection(NewCle)
 Maitre.RefreshTotal();
 if(retour)
 {
 Filtre_Dep_Produits_0.OnClose(false);
 Filtre_Dep_Produits_1.OnClose(false);
 }
 TAB_COMPO_PPTES[158].Action_en_cours = null;
 return NewCle;
}

function Annuler_Produits_Liste_des_produits0()
{
 TAB_COMPO_PPTES[158].Action_en_cours = null;
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[158].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[161];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[162];
 Esclave_1.ActiverComposant(false);
 var Esclave_2=TAB_GLOBAL_COMPO[163];
 Esclave_2.ActiverComposant(false);
 var Esclave_3=TAB_GLOBAL_COMPO[164];
 Esclave_3.ActiverComposant(false);
Annuler_Produits_Prix_5();
top.document.getElementById("Validate_Produits_Prix_5").disabled=true;
top.document.getElementById("Annuler_Produits_Prix_5").disabled=true;
top.document.getElementById("Insert_Produits_Prix_5").disabled=true;
top.document.getElementById("Delete_Produits_Prix_5").disabled=true;
top.document.getElementById("Update_Produits_Prix_5").disabled=true;
 var Esclave_4=TAB_GLOBAL_COMPO[165];
 Esclave_4.ActiverComposant(false);
Annuler_Produits_Comptes_g�n�raux_11();
top.document.getElementById("Validate_Produits_Comptes_g�n�raux_11").disabled=true;
top.document.getElementById("Annuler_Produits_Comptes_g�n�raux_11").disabled=true;
top.document.getElementById("Insert_Produits_Comptes_g�n�raux_11").disabled=true;
top.document.getElementById("Delete_Produits_Comptes_g�n�raux_11").disabled=true;
top.document.getElementById("Update_Produits_Comptes_g�n�raux_11").disabled=true;
 var Esclave_5=TAB_GLOBAL_COMPO[175];
 Esclave_5.ActiverComposant(false);
top.document.getElementById("Validate_Produits_Liste_des_produits0").disabled=true;
top.document.getElementById("Annuler_Produits_Liste_des_produits0").disabled=true;
top.document.getElementById("Insert_Produits_Liste_des_produits0").disabled=false;
top.document.getElementById("Delete_Produits_Liste_des_produits0").disabled=false;
top.document.getElementById("Update_Produits_Liste_des_produits0").disabled=false;
}

function Insert_Produits_Prix_5()
{
 if (TAB_COMPO_PPTES[158].Action_en_cours == INSERT)
 	{
 		if (confirm("Pour continuer, vous devez enregistrer votre saisie\n Voulez vous poursuivre ?"))
		{
			var CleValide=Validate_Produits_Liste_des_produits0(false);
			if (CleValide==-1)
			{
				return -1;
			}
			CleValide=Update_Produits_Liste_des_produits0();
			if (CleValide==-1)
			{
				alert("Erreur l'enregistrement n'a pas �tais correctement ins�r�");
				return -1;
			}
			Insert_Produits_Prix_5();
		}
 		return;
 	}
 TAB_COMPO_PPTES[165].Action_en_cours = INSERT;
/* On calcule la nouvelle cl� */
 TAB_COMPO_PPTES[165].NewCle = getNewCle("prix");
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[165].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[170];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[171];
 Esclave_1.ActiverComposant(true);
 var Esclave_2=TAB_GLOBAL_COMPO[172];
 Esclave_2.ActiverComposant(true);
 var Esclave_3=TAB_GLOBAL_COMPO[173];
 Esclave_3.ActiverComposant(true);
 var Esclave_4=TAB_GLOBAL_COMPO[174];
 Esclave_4.ActiverComposant(true);
top.document.getElementById("Validate_Produits_Prix_5").disabled=false;
top.document.getElementById("Annuler_Produits_Prix_5").disabled=false;
top.document.getElementById("Insert_Produits_Prix_5").disabled=true;
top.document.getElementById("Delete_Produits_Prix_5").disabled=true;
top.document.getElementById("Update_Produits_Prix_5").disabled=true;
 var Maitre=TAB_GLOBAL_COMPO[165];
 /* Pour une insertion on d�sectionne */
 var tree=Maitre.getComposantXul();
 if (tree.view!=null)
 {
 	tree.currentIndex=-1;
 	tree.view.selection.clearSelection();
 }
TAB_GLOBAL_COMPO[172].my_CompoXUL.selectedIndex=1;

return TAB_COMPO_PPTES[165].NewCle;
}

function Delete_Produits_Prix_5()
{
 if (TAB_GLOBAL_COMPO[165].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement � suprimer");
 	return;
 }
 /* On recup�re le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[165];
 if (confirm("Voulez vous vraiment supprimer l'enregistrement en cours ?"))
 {
	TAB_COMPO_PPTES[165].Action_en_cours = DELETE;
 	User_Delete_Produits_Prix_5(Maitre);
	Maitre.RefreshTotal();
 }
}

function Update_Produits_Prix_5()
{
 if (TAB_GLOBAL_COMPO[165].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement � mettre � jour");
 	return -1;
 }
 TAB_COMPO_PPTES[165].Action_en_cours = UPDATE;
/* On calcule la nouvelle cl� */
 TAB_COMPO_PPTES[165].NewCle = TAB_GLOBAL_COMPO[165].getCleVal();
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[165].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[170];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[171];
 Esclave_1.ActiverComposant(true);
 var Esclave_2=TAB_GLOBAL_COMPO[172];
 Esclave_2.ActiverComposant(true);
 var Esclave_3=TAB_GLOBAL_COMPO[173];
 Esclave_3.ActiverComposant(true);
 var Esclave_4=TAB_GLOBAL_COMPO[174];
 Esclave_4.ActiverComposant(true);
top.document.getElementById("Validate_Produits_Prix_5").disabled=false;
top.document.getElementById("Annuler_Produits_Prix_5").disabled=false;
top.document.getElementById("Insert_Produits_Prix_5").disabled=true;
top.document.getElementById("Delete_Produits_Prix_5").disabled=true;
top.document.getElementById("Update_Produits_Prix_5").disabled=true;
return TAB_COMPO_PPTES[165].NewCle;
}

function Validate_Produits_Prix_5(retour)
{
 /* Retour � l'onget appellant si appelle par g�rer */
if (retour==null)
	retour=true;

 /* On recup�re le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[165];
 /* On recup�re la cl� du nouvel enregistrement */
 var NewCle=null;
 switch(TAB_COMPO_PPTES[165].Action_en_cours){
	case INSERT :
	if ((NewCle = User_Insert_Produits_Prix_5(Maitre))==-1)
		return -1;
	break;
	case UPDATE :
	if ((User_Update_Produits_Prix_5(Maitre))==-1)
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
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[165].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[170];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[171];
 Esclave_1.ActiverComposant(false);
 var Esclave_2=TAB_GLOBAL_COMPO[172];
 Esclave_2.ActiverComposant(false);
 var Esclave_3=TAB_GLOBAL_COMPO[173];
 Esclave_3.ActiverComposant(false);
 var Esclave_4=TAB_GLOBAL_COMPO[174];
 Esclave_4.ActiverComposant(false);
top.document.getElementById("Validate_Produits_Prix_5").disabled=true;
top.document.getElementById("Annuler_Produits_Prix_5").disabled=true;
top.document.getElementById("Insert_Produits_Prix_5").disabled=false;
top.document.getElementById("Delete_Produits_Prix_5").disabled=false;
top.document.getElementById("Update_Produits_Prix_5").disabled=false;
 if (NewCle==null)
 	NewCle=TAB_COMPO_PPTES[165].NewCle;
 Maitre.ForceNextSelection(NewCle)
 Maitre.RefreshTotal();
 if(retour)
 {
 }
 TAB_COMPO_PPTES[165].Action_en_cours = null;
 return NewCle;
}

function Annuler_Produits_Prix_5()
{
 TAB_COMPO_PPTES[165].Action_en_cours = null;
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[165].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[170];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[171];
 Esclave_1.ActiverComposant(false);
 var Esclave_2=TAB_GLOBAL_COMPO[172];
 Esclave_2.ActiverComposant(false);
 var Esclave_3=TAB_GLOBAL_COMPO[173];
 Esclave_3.ActiverComposant(false);
 var Esclave_4=TAB_GLOBAL_COMPO[174];
 Esclave_4.ActiverComposant(false);
top.document.getElementById("Validate_Produits_Prix_5").disabled=true;
top.document.getElementById("Annuler_Produits_Prix_5").disabled=true;
top.document.getElementById("Insert_Produits_Prix_5").disabled=false;
top.document.getElementById("Delete_Produits_Prix_5").disabled=false;
top.document.getElementById("Update_Produits_Prix_5").disabled=false;
}

function Insert_Produits_Comptes_g�n�raux_11()
{
 if (TAB_COMPO_PPTES[158].Action_en_cours == INSERT)
 	{
 		if (confirm("Pour continuer, vous devez enregistrer votre saisie\n Voulez vous poursuivre ?"))
		{
			var CleValide=Validate_Produits_Liste_des_produits0(false);
			if (CleValide==-1)
			{
				return -1;
			}
			CleValide=Update_Produits_Liste_des_produits0();
			if (CleValide==-1)
			{
				alert("Erreur l'enregistrement n'a pas �tais correctement ins�r�");
				return -1;
			}
			Insert_Produits_Comptes_g�n�raux_11();
		}
 		return;
 	}
 TAB_COMPO_PPTES[175].Action_en_cours = INSERT;
/* On calcule la nouvelle cl� */
 TAB_COMPO_PPTES[175].NewCle = getNewCle("compteproduit");
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[175].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[178];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[179];
 Esclave_1.ActiverComposant(true);
top.document.getElementById("Validate_Produits_Comptes_g�n�raux_11").disabled=false;
top.document.getElementById("Annuler_Produits_Comptes_g�n�raux_11").disabled=false;
top.document.getElementById("Insert_Produits_Comptes_g�n�raux_11").disabled=true;
top.document.getElementById("Delete_Produits_Comptes_g�n�raux_11").disabled=true;
top.document.getElementById("Update_Produits_Comptes_g�n�raux_11").disabled=true;
 var Maitre=TAB_GLOBAL_COMPO[175];
 /* Pour une insertion on d�sectionne */
 var tree=Maitre.getComposantXul();
 if (tree.view!=null)
 {
 	tree.currentIndex=-1;
 	tree.view.selection.clearSelection();
 }
return TAB_COMPO_PPTES[175].NewCle;
}

function Delete_Produits_Comptes_g�n�raux_11()
{
 if (TAB_GLOBAL_COMPO[175].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement � suprimer");
 	return;
 }
 /* On recup�re le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[175];
 if (confirm("Voulez vous vraiment supprimer l'enregistrement en cours ?"))
 {
	TAB_COMPO_PPTES[175].Action_en_cours = DELETE;
 	User_Delete_Produits_Comptes_g�n�raux_11(Maitre);
	Maitre.RefreshTotal();
 }
}

function Update_Produits_Comptes_g�n�raux_11()
{
 if (TAB_GLOBAL_COMPO[175].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement � mettre � jour");
 	return -1;
 }
 TAB_COMPO_PPTES[175].Action_en_cours = UPDATE;
/* On calcule la nouvelle cl� */
 TAB_COMPO_PPTES[175].NewCle = TAB_GLOBAL_COMPO[175].getCleVal();
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[175].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[178];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[179];
 Esclave_1.ActiverComposant(true);
top.document.getElementById("Validate_Produits_Comptes_g�n�raux_11").disabled=false;
top.document.getElementById("Annuler_Produits_Comptes_g�n�raux_11").disabled=false;
top.document.getElementById("Insert_Produits_Comptes_g�n�raux_11").disabled=true;
top.document.getElementById("Delete_Produits_Comptes_g�n�raux_11").disabled=true;
top.document.getElementById("Update_Produits_Comptes_g�n�raux_11").disabled=true;
return TAB_COMPO_PPTES[175].NewCle;
}

function Validate_Produits_Comptes_g�n�raux_11(retour)
{
 /* Retour � l'onget appellant si appelle par g�rer */
if (retour==null)
	retour=true;

 /* On recup�re le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[175];
 /* On recup�re la cl� du nouvel enregistrement */
 var NewCle=null;
 switch(TAB_COMPO_PPTES[175].Action_en_cours){
	case INSERT :
	if ((NewCle = User_Insert_Produits_Comptes_g�n�raux_11(Maitre))==-1)
		return -1;
	break;
	case UPDATE :
	if ((User_Update_Produits_Comptes_g�n�raux_11(Maitre))==-1)
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
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[175].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[178];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[179];
 Esclave_1.ActiverComposant(false);
top.document.getElementById("Validate_Produits_Comptes_g�n�raux_11").disabled=true;
top.document.getElementById("Annuler_Produits_Comptes_g�n�raux_11").disabled=true;
top.document.getElementById("Insert_Produits_Comptes_g�n�raux_11").disabled=false;
top.document.getElementById("Delete_Produits_Comptes_g�n�raux_11").disabled=false;
top.document.getElementById("Update_Produits_Comptes_g�n�raux_11").disabled=false;
 if (NewCle==null)
 	NewCle=TAB_COMPO_PPTES[175].NewCle;
 Maitre.ForceNextSelection(NewCle)
 Maitre.RefreshTotal();
 if(retour)
 {
 }
 TAB_COMPO_PPTES[175].Action_en_cours = null;
 return NewCle;
}

function Annuler_Produits_Comptes_g�n�raux_11()
{
 TAB_COMPO_PPTES[175].Action_en_cours = null;
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[175].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[178];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[179];
 Esclave_1.ActiverComposant(false);
top.document.getElementById("Validate_Produits_Comptes_g�n�raux_11").disabled=true;
top.document.getElementById("Annuler_Produits_Comptes_g�n�raux_11").disabled=true;
top.document.getElementById("Insert_Produits_Comptes_g�n�raux_11").disabled=false;
top.document.getElementById("Delete_Produits_Comptes_g�n�raux_11").disabled=false;
top.document.getElementById("Update_Produits_Comptes_g�n�raux_11").disabled=false;
}






/* *********************************************** 
         FONCTIONS POUR L'ONGLET Responsabilit�s
   ***********************************************/ 

 /* FILTRES DE RELATION ENTRE ONGLETS => VARIABLES GLOBALES POUR ETRE ACCESSIBLES DEPUIS INTERFACE_USER.JS */

function OuvrirOnglet_Responsabilit�s()
{
 var tabs = top.document.getElementById("Tous_les_onglets");
 tabs.selectedItem = top.document.getElementById("Onglet_Responsabilit�s");
}

function Insert_Responsabilit�s_Responsabilit�s0()
{
 TAB_COMPO_PPTES[143].Action_en_cours = INSERT;
/* On calcule la nouvelle cl� */
 TAB_COMPO_PPTES[143].NewCle = getNewCle("responsabilite");
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[143].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[147];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[148];
 Esclave_1.ActiverComposant(true);
 var Esclave_2=TAB_GLOBAL_COMPO[149];
 Esclave_2.ActiverComposant(true);
top.document.getElementById("Validate_Responsabilit�s_Responsabilit�s0").disabled=false;
top.document.getElementById("Annuler_Responsabilit�s_Responsabilit�s0").disabled=false;
top.document.getElementById("Insert_Responsabilit�s_Responsabilit�s0").disabled=true;
top.document.getElementById("Delete_Responsabilit�s_Responsabilit�s0").disabled=true;
top.document.getElementById("Update_Responsabilit�s_Responsabilit�s0").disabled=true;
 var Maitre=TAB_GLOBAL_COMPO[143];
 /* Pour une insertion on d�sectionne */
 var tree=Maitre.getComposantXul();
 if (tree.view!=null)
 {
 	tree.currentIndex=-1;
 	tree.view.selection.clearSelection();
 }
return TAB_COMPO_PPTES[143].NewCle;
}

function Delete_Responsabilit�s_Responsabilit�s0()
{
 if (TAB_GLOBAL_COMPO[143].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement � suprimer");
 	return;
 }
 /* On recup�re le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[143];
 if (confirm("Voulez vous vraiment supprimer l'enregistrement en cours ?"))
 {
	TAB_COMPO_PPTES[143].Action_en_cours = DELETE;
 	User_Delete_Responsabilit�s_Responsabilit�s0(Maitre);
	Maitre.RefreshTotal();
 }
}

function Update_Responsabilit�s_Responsabilit�s0()
{
 if (TAB_GLOBAL_COMPO[143].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement � mettre � jour");
 	return -1;
 }
 TAB_COMPO_PPTES[143].Action_en_cours = UPDATE;
/* On calcule la nouvelle cl� */
 TAB_COMPO_PPTES[143].NewCle = TAB_GLOBAL_COMPO[143].getCleVal();
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[143].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[147];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[148];
 Esclave_1.ActiverComposant(true);
 var Esclave_2=TAB_GLOBAL_COMPO[149];
 Esclave_2.ActiverComposant(true);
top.document.getElementById("Validate_Responsabilit�s_Responsabilit�s0").disabled=false;
top.document.getElementById("Annuler_Responsabilit�s_Responsabilit�s0").disabled=false;
top.document.getElementById("Insert_Responsabilit�s_Responsabilit�s0").disabled=true;
top.document.getElementById("Delete_Responsabilit�s_Responsabilit�s0").disabled=true;
top.document.getElementById("Update_Responsabilit�s_Responsabilit�s0").disabled=true;
return TAB_COMPO_PPTES[143].NewCle;
}

function Validate_Responsabilit�s_Responsabilit�s0(retour)
{
 /* Retour � l'onget appellant si appelle par g�rer */
if (retour==null)
	retour=true;

 /* On recup�re le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[143];
 /* On recup�re la cl� du nouvel enregistrement */
 var NewCle=null;
 switch(TAB_COMPO_PPTES[143].Action_en_cours){
	case INSERT :
	if ((NewCle = User_Insert_Responsabilit�s_Responsabilit�s0(Maitre))==-1)
		return -1;
	break;
	case UPDATE :
	if ((User_Update_Responsabilit�s_Responsabilit�s0(Maitre))==-1)
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
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[143].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[147];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[148];
 Esclave_1.ActiverComposant(false);
 var Esclave_2=TAB_GLOBAL_COMPO[149];
 Esclave_2.ActiverComposant(false);
top.document.getElementById("Validate_Responsabilit�s_Responsabilit�s0").disabled=true;
top.document.getElementById("Annuler_Responsabilit�s_Responsabilit�s0").disabled=true;
top.document.getElementById("Insert_Responsabilit�s_Responsabilit�s0").disabled=false;
top.document.getElementById("Delete_Responsabilit�s_Responsabilit�s0").disabled=false;
top.document.getElementById("Update_Responsabilit�s_Responsabilit�s0").disabled=false;
 if (NewCle==null)
 	NewCle=TAB_COMPO_PPTES[143].NewCle;
 Maitre.ForceNextSelection(NewCle)
 Maitre.RefreshTotal();
 if(retour)
 {
 }
 TAB_COMPO_PPTES[143].Action_en_cours = null;
 return NewCle;
}

function Annuler_Responsabilit�s_Responsabilit�s0()
{
 TAB_COMPO_PPTES[143].Action_en_cours = null;
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[143].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[147];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[148];
 Esclave_1.ActiverComposant(false);
 var Esclave_2=TAB_GLOBAL_COMPO[149];
 Esclave_2.ActiverComposant(false);
top.document.getElementById("Validate_Responsabilit�s_Responsabilit�s0").disabled=true;
top.document.getElementById("Annuler_Responsabilit�s_Responsabilit�s0").disabled=true;
top.document.getElementById("Insert_Responsabilit�s_Responsabilit�s0").disabled=false;
top.document.getElementById("Delete_Responsabilit�s_Responsabilit�s0").disabled=false;
top.document.getElementById("Update_Responsabilit�s_Responsabilit�s0").disabled=false;
}






/* *********************************************** 
         FONCTIONS POUR L'ONGLET Services
   ***********************************************/ 

 /* FILTRES DE RELATION ENTRE ONGLETS => VARIABLES GLOBALES POUR ETRE ACCESSIBLES DEPUIS INTERFACE_USER.JS */

 var Filtre_DepFor_Services_0;
function Retour_Services()
{
 if (Filtre_DepFor_Services_0.my_Filtre.getEtat())
 {
 	Filtre_DepFor_Services_0.FctFermetureOnglet();
 }
}
function Gerer_Services(IdFiltreOnglet)
{
/* Pour les filtrage fort on ne doit pas �tre en mode insertion */
if(TAB_COMPO_PPTES[56].Action_en_cours == INSERT)
{
	if (confirm("Pour continuer, vous devez enregistrer votre saisie\n Voulez vous poursuivre ?"))
	{
		var CleValide=Validate_Soci�t�s_Liste_des_soci�t�s0(false);
		if (CleValide==-1)
		{
			return;
		}
		CleValide=Update_Soci�t�s_Liste_des_soci�t�s0();
		if (CleValide==-1)
		{
			alert("Erreur l'enregistrement n'a pas �tais correctement ins�r�");
			return;
		}
	}
	else
 		return;
}
/* On d�sactive les autres filtres */
if (Filtre_DepFor_Services_0.getId()!=IdFiltreOnglet)
{
	Filtre_DepFor_Services_0.OnClose(true,false);
}
/* On change d'onglet */
 var tabs = top.document.getElementById("Tous_les_onglets");
 top.document.getElementById("Tous_les_onglets").setAttribute("hidden","false");
 tabs.selectedItem = top.document.getElementById("Onglet_Services");
}

function OuvrirOnglet_Services()
{
 var tabs = top.document.getElementById("Tous_les_onglets");
 tabs.selectedItem = top.document.getElementById("Onglet_Services");
}

function Insert_Services_Liste_des_services0()
{
 TAB_COMPO_PPTES[67].Action_en_cours = INSERT;
/* On calcule la nouvelle cl� */
 TAB_COMPO_PPTES[67].NewCle = getNewCle("service");
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[67].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[71];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[72];
 Esclave_1.ActiverComposant(true);
 var Esclave_2=TAB_GLOBAL_COMPO[73];
 Esclave_2.ActiverComposant(true);
top.document.getElementById("Validate_Services_Liste_des_services0").disabled=false;
top.document.getElementById("Annuler_Services_Liste_des_services0").disabled=false;
top.document.getElementById("Insert_Services_Liste_des_services0").disabled=true;
top.document.getElementById("Delete_Services_Liste_des_services0").disabled=true;
top.document.getElementById("Update_Services_Liste_des_services0").disabled=true;
 var Maitre=TAB_GLOBAL_COMPO[67];
 /* Pour une insertion on d�sectionne */
 var tree=Maitre.getComposantXul();
 if (tree.view!=null)
 {
 	tree.currentIndex=-1;
 	tree.view.selection.clearSelection();
 }
return TAB_COMPO_PPTES[67].NewCle;
}

function Delete_Services_Liste_des_services0()
{
 if (TAB_GLOBAL_COMPO[67].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement � suprimer");
 	return;
 }
 /* On recup�re le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[67];
 if (confirm("Voulez vous vraiment supprimer l'enregistrement en cours ?"))
 {
	TAB_COMPO_PPTES[67].Action_en_cours = DELETE;
 	User_Delete_Services_Liste_des_services0(Maitre);
	Maitre.RefreshTotal();
	Filtre_DepFor_Services_0.Refresh();
 }
}

function Update_Services_Liste_des_services0()
{
 if (TAB_GLOBAL_COMPO[67].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement � mettre � jour");
 	return -1;
 }
 TAB_COMPO_PPTES[67].Action_en_cours = UPDATE;
/* On calcule la nouvelle cl� */
 TAB_COMPO_PPTES[67].NewCle = TAB_GLOBAL_COMPO[67].getCleVal();
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[67].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[71];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[72];
 Esclave_1.ActiverComposant(true);
 var Esclave_2=TAB_GLOBAL_COMPO[73];
 Esclave_2.ActiverComposant(true);
top.document.getElementById("Validate_Services_Liste_des_services0").disabled=false;
top.document.getElementById("Annuler_Services_Liste_des_services0").disabled=false;
top.document.getElementById("Insert_Services_Liste_des_services0").disabled=true;
top.document.getElementById("Delete_Services_Liste_des_services0").disabled=true;
top.document.getElementById("Update_Services_Liste_des_services0").disabled=true;
return TAB_COMPO_PPTES[67].NewCle;
}

function Validate_Services_Liste_des_services0(retour)
{
 /* Retour � l'onget appellant si appelle par g�rer */
if (retour==null)
	retour=true;

 /* On recup�re le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[67];
 /* On recup�re la cl� du nouvel enregistrement */
 var NewCle=null;
 switch(TAB_COMPO_PPTES[67].Action_en_cours){
	case INSERT :
	if ((NewCle = User_Insert_Services_Liste_des_services0(Maitre))==-1)
		return -1;
	break;
	case UPDATE :
	if ((User_Update_Services_Liste_des_services0(Maitre))==-1)
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
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[67].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[71];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[72];
 Esclave_1.ActiverComposant(false);
 var Esclave_2=TAB_GLOBAL_COMPO[73];
 Esclave_2.ActiverComposant(false);
top.document.getElementById("Validate_Services_Liste_des_services0").disabled=true;
top.document.getElementById("Annuler_Services_Liste_des_services0").disabled=true;
top.document.getElementById("Insert_Services_Liste_des_services0").disabled=false;
top.document.getElementById("Delete_Services_Liste_des_services0").disabled=false;
top.document.getElementById("Update_Services_Liste_des_services0").disabled=false;
 if (NewCle==null)
 	NewCle=TAB_COMPO_PPTES[67].NewCle;
 Maitre.ForceNextSelection(NewCle)
 Maitre.RefreshTotal();
 if(retour)
 {
 Filtre_DepFor_Services_0.Refresh();
 }
 TAB_COMPO_PPTES[67].Action_en_cours = null;
 return NewCle;
}

function Annuler_Services_Liste_des_services0()
{
 TAB_COMPO_PPTES[67].Action_en_cours = null;
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[67].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[71];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[72];
 Esclave_1.ActiverComposant(false);
 var Esclave_2=TAB_GLOBAL_COMPO[73];
 Esclave_2.ActiverComposant(false);
top.document.getElementById("Validate_Services_Liste_des_services0").disabled=true;
top.document.getElementById("Annuler_Services_Liste_des_services0").disabled=true;
top.document.getElementById("Insert_Services_Liste_des_services0").disabled=false;
top.document.getElementById("Delete_Services_Liste_des_services0").disabled=false;
top.document.getElementById("Update_Services_Liste_des_services0").disabled=false;
}






/* *********************************************** 
         FONCTIONS POUR L'ONGLET Soci�t�s
   ***********************************************/ 

 /* FILTRES DE RELATION ENTRE ONGLETS => VARIABLES GLOBALES POUR ETRE ACCESSIBLES DEPUIS INTERFACE_USER.JS */

function OuvrirOnglet_Soci�t�s()
{
 var tabs = top.document.getElementById("Tous_les_onglets");
 tabs.selectedItem = top.document.getElementById("Onglet_Soci�t�s");
}

function Insert_Soci�t�s_Liste_des_soci�t�s0()
{
 TAB_COMPO_PPTES[56].Action_en_cours = INSERT;
/* On calcule la nouvelle cl� */
 TAB_COMPO_PPTES[56].NewCle = getNewCle("societe");
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[56].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[59];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[60];
 Esclave_1.ActiverComposant(true);
 var Esclave_2=TAB_GLOBAL_COMPO[61];
 Esclave_2.ActiverComposant(true);
 var Esclave_3=TAB_GLOBAL_COMPO[62];
 Esclave_3.ActiverComposant(true);
 var Esclave_4=TAB_GLOBAL_COMPO[63];
 Esclave_4.ActiverComposant(true);
 var Esclave_5=TAB_GLOBAL_COMPO[64];
 Esclave_5.ActiverComposant(true);
top.document.getElementById("Validate_Soci�t�s_Liste_des_soci�t�s0").disabled=false;
top.document.getElementById("Annuler_Soci�t�s_Liste_des_soci�t�s0").disabled=false;
top.document.getElementById("Insert_Soci�t�s_Liste_des_soci�t�s0").disabled=true;
top.document.getElementById("Delete_Soci�t�s_Liste_des_soci�t�s0").disabled=true;
top.document.getElementById("Update_Soci�t�s_Liste_des_soci�t�s0").disabled=true;
 var Maitre=TAB_GLOBAL_COMPO[56];
 /* Pour une insertion on d�sectionne */
 var tree=Maitre.getComposantXul();
 if (tree.view!=null)
 {
 	tree.currentIndex=-1;
 	tree.view.selection.clearSelection();
 }
return TAB_COMPO_PPTES[56].NewCle;
}

function Delete_Soci�t�s_Liste_des_soci�t�s0()
{
 if (TAB_GLOBAL_COMPO[56].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement � suprimer");
 	return;
 }
 /* On recup�re le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[56];
 if (confirm("Voulez vous vraiment supprimer l'enregistrement en cours ?"))
 {
	TAB_COMPO_PPTES[56].Action_en_cours = DELETE;
 	User_Delete_Soci�t�s_Liste_des_soci�t�s0(Maitre);
	Maitre.RefreshTotal();
 }
}

function Update_Soci�t�s_Liste_des_soci�t�s0()
{
 if (TAB_GLOBAL_COMPO[56].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement � mettre � jour");
 	return -1;
 }
 TAB_COMPO_PPTES[56].Action_en_cours = UPDATE;
/* On calcule la nouvelle cl� */
 TAB_COMPO_PPTES[56].NewCle = TAB_GLOBAL_COMPO[56].getCleVal();
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[56].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[59];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[60];
 Esclave_1.ActiverComposant(true);
 var Esclave_2=TAB_GLOBAL_COMPO[61];
 Esclave_2.ActiverComposant(true);
 var Esclave_3=TAB_GLOBAL_COMPO[62];
 Esclave_3.ActiverComposant(true);
 var Esclave_4=TAB_GLOBAL_COMPO[63];
 Esclave_4.ActiverComposant(true);
 var Esclave_5=TAB_GLOBAL_COMPO[64];
 Esclave_5.ActiverComposant(true);
top.document.getElementById("Validate_Soci�t�s_Liste_des_soci�t�s0").disabled=false;
top.document.getElementById("Annuler_Soci�t�s_Liste_des_soci�t�s0").disabled=false;
top.document.getElementById("Insert_Soci�t�s_Liste_des_soci�t�s0").disabled=true;
top.document.getElementById("Delete_Soci�t�s_Liste_des_soci�t�s0").disabled=true;
top.document.getElementById("Update_Soci�t�s_Liste_des_soci�t�s0").disabled=true;
return TAB_COMPO_PPTES[56].NewCle;
}

function Validate_Soci�t�s_Liste_des_soci�t�s0(retour)
{
 /* Retour � l'onget appellant si appelle par g�rer */
if (retour==null)
	retour=true;

 /* On recup�re le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[56];
 /* On recup�re la cl� du nouvel enregistrement */
 var NewCle=null;
 switch(TAB_COMPO_PPTES[56].Action_en_cours){
	case INSERT :
	if ((NewCle = User_Insert_Soci�t�s_Liste_des_soci�t�s0(Maitre))==-1)
		return -1;
	break;
	case UPDATE :
	if ((User_Update_Soci�t�s_Liste_des_soci�t�s0(Maitre))==-1)
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
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[56].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[59];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[60];
 Esclave_1.ActiverComposant(false);
 var Esclave_2=TAB_GLOBAL_COMPO[61];
 Esclave_2.ActiverComposant(false);
 var Esclave_3=TAB_GLOBAL_COMPO[62];
 Esclave_3.ActiverComposant(false);
 var Esclave_4=TAB_GLOBAL_COMPO[63];
 Esclave_4.ActiverComposant(false);
 var Esclave_5=TAB_GLOBAL_COMPO[64];
 Esclave_5.ActiverComposant(false);
top.document.getElementById("Validate_Soci�t�s_Liste_des_soci�t�s0").disabled=true;
top.document.getElementById("Annuler_Soci�t�s_Liste_des_soci�t�s0").disabled=true;
top.document.getElementById("Insert_Soci�t�s_Liste_des_soci�t�s0").disabled=false;
top.document.getElementById("Delete_Soci�t�s_Liste_des_soci�t�s0").disabled=false;
top.document.getElementById("Update_Soci�t�s_Liste_des_soci�t�s0").disabled=false;
 if (NewCle==null)
 	NewCle=TAB_COMPO_PPTES[56].NewCle;
 Maitre.ForceNextSelection(NewCle)
 Maitre.RefreshTotal();
 if(retour)
 {
 }
 TAB_COMPO_PPTES[56].Action_en_cours = null;
 return NewCle;
}

function Annuler_Soci�t�s_Liste_des_soci�t�s0()
{
 TAB_COMPO_PPTES[56].Action_en_cours = null;
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[56].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[59];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[60];
 Esclave_1.ActiverComposant(false);
 var Esclave_2=TAB_GLOBAL_COMPO[61];
 Esclave_2.ActiverComposant(false);
 var Esclave_3=TAB_GLOBAL_COMPO[62];
 Esclave_3.ActiverComposant(false);
 var Esclave_4=TAB_GLOBAL_COMPO[63];
 Esclave_4.ActiverComposant(false);
 var Esclave_5=TAB_GLOBAL_COMPO[64];
 Esclave_5.ActiverComposant(false);
top.document.getElementById("Validate_Soci�t�s_Liste_des_soci�t�s0").disabled=true;
top.document.getElementById("Annuler_Soci�t�s_Liste_des_soci�t�s0").disabled=true;
top.document.getElementById("Insert_Soci�t�s_Liste_des_soci�t�s0").disabled=false;
top.document.getElementById("Delete_Soci�t�s_Liste_des_soci�t�s0").disabled=false;
top.document.getElementById("Update_Soci�t�s_Liste_des_soci�t�s0").disabled=false;
}






/* *********************************************** 
         FONCTIONS POUR L'ONGLET TVA
   ***********************************************/ 

 /* FILTRES DE RELATION ENTRE ONGLETS => VARIABLES GLOBALES POUR ETRE ACCESSIBLES DEPUIS INTERFACE_USER.JS */

 var Filtre_Dep_TVA_0;
function Retour_TVA()
{
 if (Filtre_Dep_TVA_0.my_Filtre.getEtat())
 {
 	Filtre_Dep_TVA_0.FctFermetureOnglet();
 }
}
function Gerer_TVA(IdFiltreOnglet)
{
/* On d�sactive les autres filtres */
if (Filtre_Dep_TVA_0.getId()!=IdFiltreOnglet)
{
	Filtre_Dep_TVA_0.OnClose(true,false);
}
/* On change d'onglet */
 var tabs = top.document.getElementById("Tous_les_onglets");
 top.document.getElementById("Tous_les_onglets").setAttribute("hidden","false");
 tabs.selectedItem = top.document.getElementById("Onglet_TVA");
}

function OuvrirOnglet_TVA()
{
 var tabs = top.document.getElementById("Tous_les_onglets");
 tabs.selectedItem = top.document.getElementById("Onglet_TVA");
}

function Insert_TVA_Liste_des_T_V_A_0()
{
 TAB_COMPO_PPTES[150].Action_en_cours = INSERT;
/* On calcule la nouvelle cl� */
 TAB_COMPO_PPTES[150].NewCle = getNewCle("tva");
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[150].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[154];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[155];
 Esclave_1.ActiverComposant(true);
 var Esclave_2=TAB_GLOBAL_COMPO[156];
 Esclave_2.ActiverComposant(true);
 var Esclave_3=TAB_GLOBAL_COMPO[157];
 Esclave_3.ActiverComposant(true);
top.document.getElementById("Validate_TVA_Liste_des_T_V_A_0").disabled=false;
top.document.getElementById("Annuler_TVA_Liste_des_T_V_A_0").disabled=false;
top.document.getElementById("Insert_TVA_Liste_des_T_V_A_0").disabled=true;
top.document.getElementById("Delete_TVA_Liste_des_T_V_A_0").disabled=true;
top.document.getElementById("Update_TVA_Liste_des_T_V_A_0").disabled=true;
 var Maitre=TAB_GLOBAL_COMPO[150];
 /* Pour une insertion on d�sectionne */
 var tree=Maitre.getComposantXul();
 if (tree.view!=null)
 {
 	tree.currentIndex=-1;
 	tree.view.selection.clearSelection();
 }
return TAB_COMPO_PPTES[150].NewCle;
}

function Delete_TVA_Liste_des_T_V_A_0()
{
 if (TAB_GLOBAL_COMPO[150].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement � suprimer");
 	return;
 }
 /* On recup�re le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[150];
 if (confirm("Voulez vous vraiment supprimer l'enregistrement en cours ?"))
 {
	TAB_COMPO_PPTES[150].Action_en_cours = DELETE;
 	User_Delete_TVA_Liste_des_T_V_A_0(Maitre);
	Maitre.RefreshTotal();
	Filtre_Dep_TVA_0.OnClose(true);
 }
}

function Update_TVA_Liste_des_T_V_A_0()
{
 if (TAB_GLOBAL_COMPO[150].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement � mettre � jour");
 	return -1;
 }
 TAB_COMPO_PPTES[150].Action_en_cours = UPDATE;
/* On calcule la nouvelle cl� */
 TAB_COMPO_PPTES[150].NewCle = TAB_GLOBAL_COMPO[150].getCleVal();
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[150].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[154];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[155];
 Esclave_1.ActiverComposant(true);
 var Esclave_2=TAB_GLOBAL_COMPO[156];
 Esclave_2.ActiverComposant(true);
 var Esclave_3=TAB_GLOBAL_COMPO[157];
 Esclave_3.ActiverComposant(true);
top.document.getElementById("Validate_TVA_Liste_des_T_V_A_0").disabled=false;
top.document.getElementById("Annuler_TVA_Liste_des_T_V_A_0").disabled=false;
top.document.getElementById("Insert_TVA_Liste_des_T_V_A_0").disabled=true;
top.document.getElementById("Delete_TVA_Liste_des_T_V_A_0").disabled=true;
top.document.getElementById("Update_TVA_Liste_des_T_V_A_0").disabled=true;
return TAB_COMPO_PPTES[150].NewCle;
}

function Validate_TVA_Liste_des_T_V_A_0(retour)
{
 /* Retour � l'onget appellant si appelle par g�rer */
if (retour==null)
	retour=true;

 /* On recup�re le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[150];
 /* On recup�re la cl� du nouvel enregistrement */
 var NewCle=null;
 switch(TAB_COMPO_PPTES[150].Action_en_cours){
	case INSERT :
	if ((NewCle = User_Insert_TVA_Liste_des_T_V_A_0(Maitre))==-1)
		return -1;
	break;
	case UPDATE :
	if ((User_Update_TVA_Liste_des_T_V_A_0(Maitre))==-1)
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
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[150].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[154];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[155];
 Esclave_1.ActiverComposant(false);
 var Esclave_2=TAB_GLOBAL_COMPO[156];
 Esclave_2.ActiverComposant(false);
 var Esclave_3=TAB_GLOBAL_COMPO[157];
 Esclave_3.ActiverComposant(false);
top.document.getElementById("Validate_TVA_Liste_des_T_V_A_0").disabled=true;
top.document.getElementById("Annuler_TVA_Liste_des_T_V_A_0").disabled=true;
top.document.getElementById("Insert_TVA_Liste_des_T_V_A_0").disabled=false;
top.document.getElementById("Delete_TVA_Liste_des_T_V_A_0").disabled=false;
top.document.getElementById("Update_TVA_Liste_des_T_V_A_0").disabled=false;
 if (NewCle==null)
 	NewCle=TAB_COMPO_PPTES[150].NewCle;
 Maitre.ForceNextSelection(NewCle)
 Maitre.RefreshTotal();
 if(retour)
 {
 Filtre_Dep_TVA_0.OnClose(false);
 }
 TAB_COMPO_PPTES[150].Action_en_cours = null;
 return NewCle;
}

function Annuler_TVA_Liste_des_T_V_A_0()
{
 TAB_COMPO_PPTES[150].Action_en_cours = null;
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[150].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[154];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[155];
 Esclave_1.ActiverComposant(false);
 var Esclave_2=TAB_GLOBAL_COMPO[156];
 Esclave_2.ActiverComposant(false);
 var Esclave_3=TAB_GLOBAL_COMPO[157];
 Esclave_3.ActiverComposant(false);
top.document.getElementById("Validate_TVA_Liste_des_T_V_A_0").disabled=true;
top.document.getElementById("Annuler_TVA_Liste_des_T_V_A_0").disabled=true;
top.document.getElementById("Insert_TVA_Liste_des_T_V_A_0").disabled=false;
top.document.getElementById("Delete_TVA_Liste_des_T_V_A_0").disabled=false;
top.document.getElementById("Update_TVA_Liste_des_T_V_A_0").disabled=false;
}






/* *********************************************** 
         FONCTIONS POUR L'ONGLET Types d'attribut
   ***********************************************/ 

 /* FILTRES DE RELATION ENTRE ONGLETS => VARIABLES GLOBALES POUR ETRE ACCESSIBLES DEPUIS INTERFACE_USER.JS */

function OuvrirOnglet_Types_d_attribut()
{
 var tabs = top.document.getElementById("Tous_les_onglets");
 tabs.selectedItem = top.document.getElementById("Onglet_Types_d_attribut");
}

function Insert_Types_d_attribut_Liste_des_types_d_attribut_de_personne0()
{
 TAB_COMPO_PPTES[28].Action_en_cours = INSERT;
/* On calcule la nouvelle cl� */
 TAB_COMPO_PPTES[28].NewCle = getNewCle("typeattribut");
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[28].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[30];
 Esclave_0.ActiverComposant(true);
top.document.getElementById("Validate_Types_d_attribut_Cat�gories_2").disabled=true;
top.document.getElementById("Annuler_Types_d_attribut_Cat�gories_2").disabled=true;
top.document.getElementById("Insert_Types_d_attribut_Cat�gories_2").disabled=false;
top.document.getElementById("Delete_Types_d_attribut_Cat�gories_2").disabled=false;
top.document.getElementById("Update_Types_d_attribut_Cat�gories_2").disabled=false;
 var Esclave_1=TAB_GLOBAL_COMPO[31];
 Esclave_1.ActiverComposant(true);
top.document.getElementById("Validate_Types_d_attribut_Liste_des_types_d_attribut_de_personne0").disabled=false;
top.document.getElementById("Annuler_Types_d_attribut_Liste_des_types_d_attribut_de_personne0").disabled=false;
top.document.getElementById("Insert_Types_d_attribut_Liste_des_types_d_attribut_de_personne0").disabled=true;
top.document.getElementById("Delete_Types_d_attribut_Liste_des_types_d_attribut_de_personne0").disabled=true;
top.document.getElementById("Update_Types_d_attribut_Liste_des_types_d_attribut_de_personne0").disabled=true;
 var Maitre=TAB_GLOBAL_COMPO[28];
 /* Pour une insertion on d�sectionne */
 var tree=Maitre.getComposantXul();
 if (tree.view!=null)
 {
 	tree.currentIndex=-1;
 	tree.view.selection.clearSelection();
 }
return TAB_COMPO_PPTES[28].NewCle;
}

function Delete_Types_d_attribut_Liste_des_types_d_attribut_de_personne0()
{
 if (TAB_GLOBAL_COMPO[28].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement � suprimer");
 	return;
 }
 /* On recup�re le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[28];
 if (confirm("Voulez vous vraiment supprimer l'enregistrement en cours ?"))
 {
	TAB_COMPO_PPTES[28].Action_en_cours = DELETE;
 	User_Delete_Types_d_attribut_Liste_des_types_d_attribut_de_personne0(Maitre);
	Maitre.RefreshTotal();
 }
}

function Update_Types_d_attribut_Liste_des_types_d_attribut_de_personne0()
{
 if (TAB_GLOBAL_COMPO[28].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement � mettre � jour");
 	return -1;
 }
 TAB_COMPO_PPTES[28].Action_en_cours = UPDATE;
/* On calcule la nouvelle cl� */
 TAB_COMPO_PPTES[28].NewCle = TAB_GLOBAL_COMPO[28].getCleVal();
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[28].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[30];
 Esclave_0.ActiverComposant(true);
top.document.getElementById("Validate_Types_d_attribut_Cat�gories_2").disabled=true;
top.document.getElementById("Annuler_Types_d_attribut_Cat�gories_2").disabled=true;
top.document.getElementById("Insert_Types_d_attribut_Cat�gories_2").disabled=false;
top.document.getElementById("Delete_Types_d_attribut_Cat�gories_2").disabled=false;
top.document.getElementById("Update_Types_d_attribut_Cat�gories_2").disabled=false;
 var Esclave_1=TAB_GLOBAL_COMPO[31];
 Esclave_1.ActiverComposant(true);
top.document.getElementById("Validate_Types_d_attribut_Liste_des_types_d_attribut_de_personne0").disabled=false;
top.document.getElementById("Annuler_Types_d_attribut_Liste_des_types_d_attribut_de_personne0").disabled=false;
top.document.getElementById("Insert_Types_d_attribut_Liste_des_types_d_attribut_de_personne0").disabled=true;
top.document.getElementById("Delete_Types_d_attribut_Liste_des_types_d_attribut_de_personne0").disabled=true;
top.document.getElementById("Update_Types_d_attribut_Liste_des_types_d_attribut_de_personne0").disabled=true;
return TAB_COMPO_PPTES[28].NewCle;
}

function Validate_Types_d_attribut_Liste_des_types_d_attribut_de_personne0(retour)
{
 /* Retour � l'onget appellant si appelle par g�rer */
if (retour==null)
	retour=true;

 /* On recup�re le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[28];
 /* On recup�re la cl� du nouvel enregistrement */
 var NewCle=null;
 switch(TAB_COMPO_PPTES[28].Action_en_cours){
	case INSERT :
	if ((NewCle = User_Insert_Types_d_attribut_Liste_des_types_d_attribut_de_personne0(Maitre))==-1)
		return -1;
	break;
	case UPDATE :
	if ((User_Update_Types_d_attribut_Liste_des_types_d_attribut_de_personne0(Maitre))==-1)
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
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[28].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[30];
 Esclave_0.ActiverComposant(false);
Annuler_Types_d_attribut_Cat�gories_2();
top.document.getElementById("Validate_Types_d_attribut_Cat�gories_2").disabled=true;
top.document.getElementById("Annuler_Types_d_attribut_Cat�gories_2").disabled=true;
top.document.getElementById("Insert_Types_d_attribut_Cat�gories_2").disabled=true;
top.document.getElementById("Delete_Types_d_attribut_Cat�gories_2").disabled=true;
top.document.getElementById("Update_Types_d_attribut_Cat�gories_2").disabled=true;
 var Esclave_1=TAB_GLOBAL_COMPO[31];
 Esclave_1.ActiverComposant(false);
top.document.getElementById("Validate_Types_d_attribut_Liste_des_types_d_attribut_de_personne0").disabled=true;
top.document.getElementById("Annuler_Types_d_attribut_Liste_des_types_d_attribut_de_personne0").disabled=true;
top.document.getElementById("Insert_Types_d_attribut_Liste_des_types_d_attribut_de_personne0").disabled=false;
top.document.getElementById("Delete_Types_d_attribut_Liste_des_types_d_attribut_de_personne0").disabled=false;
top.document.getElementById("Update_Types_d_attribut_Liste_des_types_d_attribut_de_personne0").disabled=false;
 if (NewCle==null)
 	NewCle=TAB_COMPO_PPTES[28].NewCle;
 Maitre.ForceNextSelection(NewCle)
 Maitre.RefreshTotal();
 if(retour)
 {
 }
 TAB_COMPO_PPTES[28].Action_en_cours = null;
 return NewCle;
}

function Annuler_Types_d_attribut_Liste_des_types_d_attribut_de_personne0()
{
 TAB_COMPO_PPTES[28].Action_en_cours = null;
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[28].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[30];
 Esclave_0.ActiverComposant(false);
Annuler_Types_d_attribut_Cat�gories_2();
top.document.getElementById("Validate_Types_d_attribut_Cat�gories_2").disabled=true;
top.document.getElementById("Annuler_Types_d_attribut_Cat�gories_2").disabled=true;
top.document.getElementById("Insert_Types_d_attribut_Cat�gories_2").disabled=true;
top.document.getElementById("Delete_Types_d_attribut_Cat�gories_2").disabled=true;
top.document.getElementById("Update_Types_d_attribut_Cat�gories_2").disabled=true;
 var Esclave_1=TAB_GLOBAL_COMPO[31];
 Esclave_1.ActiverComposant(false);
top.document.getElementById("Validate_Types_d_attribut_Liste_des_types_d_attribut_de_personne0").disabled=true;
top.document.getElementById("Annuler_Types_d_attribut_Liste_des_types_d_attribut_de_personne0").disabled=true;
top.document.getElementById("Insert_Types_d_attribut_Liste_des_types_d_attribut_de_personne0").disabled=false;
top.document.getElementById("Delete_Types_d_attribut_Liste_des_types_d_attribut_de_personne0").disabled=false;
top.document.getElementById("Update_Types_d_attribut_Liste_des_types_d_attribut_de_personne0").disabled=false;
}

function Insert_Types_d_attribut_Cat�gories_2()
{
 if (TAB_COMPO_PPTES[28].Action_en_cours == INSERT)
 	{
 		if (confirm("Pour continuer, vous devez enregistrer votre saisie\n Voulez vous poursuivre ?"))
		{
			var CleValide=Validate_Types_d_attribut_Liste_des_types_d_attribut_de_personne0(false);
			if (CleValide==-1)
			{
				return -1;
			}
			CleValide=Update_Types_d_attribut_Liste_des_types_d_attribut_de_personne0();
			if (CleValide==-1)
			{
				alert("Erreur l'enregistrement n'a pas �tais correctement ins�r�");
				return -1;
			}
			Insert_Types_d_attribut_Cat�gories_2();
		}
 		return;
 	}
 TAB_COMPO_PPTES[31].Action_en_cours = INSERT;
/* On calcule la nouvelle cl� */
 TAB_COMPO_PPTES[31].NewCle = getNewCle("categorie");
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[31].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[33];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[34];
 Esclave_1.ActiverComposant(true);
top.document.getElementById("Validate_Types_d_attribut_Cat�gories_2").disabled=false;
top.document.getElementById("Annuler_Types_d_attribut_Cat�gories_2").disabled=false;
top.document.getElementById("Insert_Types_d_attribut_Cat�gories_2").disabled=true;
top.document.getElementById("Delete_Types_d_attribut_Cat�gories_2").disabled=true;
top.document.getElementById("Update_Types_d_attribut_Cat�gories_2").disabled=true;
 var Maitre=TAB_GLOBAL_COMPO[31];
 /* Pour une insertion on d�sectionne */
 var tree=Maitre.getComposantXul();
 if (tree.view!=null)
 {
 	tree.currentIndex=-1;
 	tree.view.selection.clearSelection();
 }
return TAB_COMPO_PPTES[31].NewCle;
}

function Delete_Types_d_attribut_Cat�gories_2()
{
 if (TAB_GLOBAL_COMPO[31].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement � suprimer");
 	return;
 }
 /* On recup�re le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[31];
 if (confirm("Voulez vous vraiment supprimer l'enregistrement en cours ?"))
 {
	TAB_COMPO_PPTES[31].Action_en_cours = DELETE;
 	User_Delete_Types_d_attribut_Cat�gories_2(Maitre);
	Maitre.RefreshTotal();
 }
}

function Update_Types_d_attribut_Cat�gories_2()
{
 if (TAB_GLOBAL_COMPO[31].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement � mettre � jour");
 	return -1;
 }
 TAB_COMPO_PPTES[31].Action_en_cours = UPDATE;
/* On calcule la nouvelle cl� */
 TAB_COMPO_PPTES[31].NewCle = TAB_GLOBAL_COMPO[31].getCleVal();
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[31].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[33];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[34];
 Esclave_1.ActiverComposant(true);
top.document.getElementById("Validate_Types_d_attribut_Cat�gories_2").disabled=false;
top.document.getElementById("Annuler_Types_d_attribut_Cat�gories_2").disabled=false;
top.document.getElementById("Insert_Types_d_attribut_Cat�gories_2").disabled=true;
top.document.getElementById("Delete_Types_d_attribut_Cat�gories_2").disabled=true;
top.document.getElementById("Update_Types_d_attribut_Cat�gories_2").disabled=true;
return TAB_COMPO_PPTES[31].NewCle;
}

function Validate_Types_d_attribut_Cat�gories_2(retour)
{
 /* Retour � l'onget appellant si appelle par g�rer */
if (retour==null)
	retour=true;

 /* On recup�re le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[31];
 /* On recup�re la cl� du nouvel enregistrement */
 var NewCle=null;
 switch(TAB_COMPO_PPTES[31].Action_en_cours){
	case INSERT :
	if ((NewCle = User_Insert_Types_d_attribut_Cat�gories_2(Maitre))==-1)
		return -1;
	break;
	case UPDATE :
	if ((User_Update_Types_d_attribut_Cat�gories_2(Maitre))==-1)
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
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[31].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[33];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[34];
 Esclave_1.ActiverComposant(false);
top.document.getElementById("Validate_Types_d_attribut_Cat�gories_2").disabled=true;
top.document.getElementById("Annuler_Types_d_attribut_Cat�gories_2").disabled=true;
top.document.getElementById("Insert_Types_d_attribut_Cat�gories_2").disabled=false;
top.document.getElementById("Delete_Types_d_attribut_Cat�gories_2").disabled=false;
top.document.getElementById("Update_Types_d_attribut_Cat�gories_2").disabled=false;
 if (NewCle==null)
 	NewCle=TAB_COMPO_PPTES[31].NewCle;
 Maitre.ForceNextSelection(NewCle)
 Maitre.RefreshTotal();
 if(retour)
 {
 }
 TAB_COMPO_PPTES[31].Action_en_cours = null;
 return NewCle;
}

function Annuler_Types_d_attribut_Cat�gories_2()
{
 TAB_COMPO_PPTES[31].Action_en_cours = null;
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[31].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[33];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[34];
 Esclave_1.ActiverComposant(false);
top.document.getElementById("Validate_Types_d_attribut_Cat�gories_2").disabled=true;
top.document.getElementById("Annuler_Types_d_attribut_Cat�gories_2").disabled=true;
top.document.getElementById("Insert_Types_d_attribut_Cat�gories_2").disabled=false;
top.document.getElementById("Delete_Types_d_attribut_Cat�gories_2").disabled=false;
top.document.getElementById("Update_Types_d_attribut_Cat�gories_2").disabled=false;
}






/* *********************************************** 
         FONCTIONS POUR L'ONGLET Types de journaux
   ***********************************************/ 

 /* FILTRES DE RELATION ENTRE ONGLETS => VARIABLES GLOBALES POUR ETRE ACCESSIBLES DEPUIS INTERFACE_USER.JS */

function OuvrirOnglet_Types_de_journaux()
{
 var tabs = top.document.getElementById("Tous_les_onglets");
 tabs.selectedItem = top.document.getElementById("Onglet_Types_de_journaux");
}

function Insert_Types_de_journaux_Liste_des_types_de_journaux0()
{
 TAB_COMPO_PPTES[199].Action_en_cours = INSERT;
/* On calcule la nouvelle cl� */
 TAB_COMPO_PPTES[199].NewCle = getNewCle("typejournal");
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[199].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[201];
 Esclave_0.ActiverComposant(true);
top.document.getElementById("Validate_Types_de_journaux_Liste_des_types_de_journaux0").disabled=false;
top.document.getElementById("Annuler_Types_de_journaux_Liste_des_types_de_journaux0").disabled=false;
top.document.getElementById("Insert_Types_de_journaux_Liste_des_types_de_journaux0").disabled=true;
top.document.getElementById("Delete_Types_de_journaux_Liste_des_types_de_journaux0").disabled=true;
top.document.getElementById("Update_Types_de_journaux_Liste_des_types_de_journaux0").disabled=true;
 var Maitre=TAB_GLOBAL_COMPO[199];
 /* Pour une insertion on d�sectionne */
 var tree=Maitre.getComposantXul();
 if (tree.view!=null)
 {
 	tree.currentIndex=-1;
 	tree.view.selection.clearSelection();
 }
return TAB_COMPO_PPTES[199].NewCle;
}

function Delete_Types_de_journaux_Liste_des_types_de_journaux0()
{
 if (TAB_GLOBAL_COMPO[199].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement � suprimer");
 	return;
 }
 /* On recup�re le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[199];
 if (confirm("Voulez vous vraiment supprimer l'enregistrement en cours ?"))
 {
	TAB_COMPO_PPTES[199].Action_en_cours = DELETE;
 	User_Delete_Types_de_journaux_Liste_des_types_de_journaux0(Maitre);
	Maitre.RefreshTotal();
 }
}

function Update_Types_de_journaux_Liste_des_types_de_journaux0()
{
 if (TAB_GLOBAL_COMPO[199].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement � mettre � jour");
 	return -1;
 }
 TAB_COMPO_PPTES[199].Action_en_cours = UPDATE;
/* On calcule la nouvelle cl� */
 TAB_COMPO_PPTES[199].NewCle = TAB_GLOBAL_COMPO[199].getCleVal();
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[199].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[201];
 Esclave_0.ActiverComposant(true);
top.document.getElementById("Validate_Types_de_journaux_Liste_des_types_de_journaux0").disabled=false;
top.document.getElementById("Annuler_Types_de_journaux_Liste_des_types_de_journaux0").disabled=false;
top.document.getElementById("Insert_Types_de_journaux_Liste_des_types_de_journaux0").disabled=true;
top.document.getElementById("Delete_Types_de_journaux_Liste_des_types_de_journaux0").disabled=true;
top.document.getElementById("Update_Types_de_journaux_Liste_des_types_de_journaux0").disabled=true;
return TAB_COMPO_PPTES[199].NewCle;
}

function Validate_Types_de_journaux_Liste_des_types_de_journaux0(retour)
{
 /* Retour � l'onget appellant si appelle par g�rer */
if (retour==null)
	retour=true;

 /* On recup�re le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[199];
 /* On recup�re la cl� du nouvel enregistrement */
 var NewCle=null;
 switch(TAB_COMPO_PPTES[199].Action_en_cours){
	case INSERT :
	if ((NewCle = User_Insert_Types_de_journaux_Liste_des_types_de_journaux0(Maitre))==-1)
		return -1;
	break;
	case UPDATE :
	if ((User_Update_Types_de_journaux_Liste_des_types_de_journaux0(Maitre))==-1)
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
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[199].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[201];
 Esclave_0.ActiverComposant(false);
top.document.getElementById("Validate_Types_de_journaux_Liste_des_types_de_journaux0").disabled=true;
top.document.getElementById("Annuler_Types_de_journaux_Liste_des_types_de_journaux0").disabled=true;
top.document.getElementById("Insert_Types_de_journaux_Liste_des_types_de_journaux0").disabled=false;
top.document.getElementById("Delete_Types_de_journaux_Liste_des_types_de_journaux0").disabled=false;
top.document.getElementById("Update_Types_de_journaux_Liste_des_types_de_journaux0").disabled=false;
 if (NewCle==null)
 	NewCle=TAB_COMPO_PPTES[199].NewCle;
 Maitre.ForceNextSelection(NewCle)
 Maitre.RefreshTotal();
 if(retour)
 {
 }
 TAB_COMPO_PPTES[199].Action_en_cours = null;
 return NewCle;
}

function Annuler_Types_de_journaux_Liste_des_types_de_journaux0()
{
 TAB_COMPO_PPTES[199].Action_en_cours = null;
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[199].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[201];
 Esclave_0.ActiverComposant(false);
top.document.getElementById("Validate_Types_de_journaux_Liste_des_types_de_journaux0").disabled=true;
top.document.getElementById("Annuler_Types_de_journaux_Liste_des_types_de_journaux0").disabled=true;
top.document.getElementById("Insert_Types_de_journaux_Liste_des_types_de_journaux0").disabled=false;
top.document.getElementById("Delete_Types_de_journaux_Liste_des_types_de_journaux0").disabled=false;
top.document.getElementById("Update_Types_de_journaux_Liste_des_types_de_journaux0").disabled=false;
}






/* *********************************************** 
         FONCTIONS POUR L'ONGLET Types de lien
   ***********************************************/ 

 /* FILTRES DE RELATION ENTRE ONGLETS => VARIABLES GLOBALES POUR ETRE ACCESSIBLES DEPUIS INTERFACE_USER.JS */

function OuvrirOnglet_Types_de_lien()
{
 var tabs = top.document.getElementById("Tous_les_onglets");
 tabs.selectedItem = top.document.getElementById("Onglet_Types_de_lien");
}

function Insert_Types_de_lien_Liste_des_types_de_lien_entre_personne0()
{
 TAB_COMPO_PPTES[43].Action_en_cours = INSERT;
/* On calcule la nouvelle cl� */
 TAB_COMPO_PPTES[43].NewCle = getNewCle("typelien");
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[43].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[45];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[46];
 Esclave_1.ActiverComposant(true);
top.document.getElementById("Validate_Types_de_lien_Liste_des_types_de_lien_entre_personne0").disabled=false;
top.document.getElementById("Annuler_Types_de_lien_Liste_des_types_de_lien_entre_personne0").disabled=false;
top.document.getElementById("Insert_Types_de_lien_Liste_des_types_de_lien_entre_personne0").disabled=true;
top.document.getElementById("Delete_Types_de_lien_Liste_des_types_de_lien_entre_personne0").disabled=true;
top.document.getElementById("Update_Types_de_lien_Liste_des_types_de_lien_entre_personne0").disabled=true;
 var Maitre=TAB_GLOBAL_COMPO[43];
 /* Pour une insertion on d�sectionne */
 var tree=Maitre.getComposantXul();
 if (tree.view!=null)
 {
 	tree.currentIndex=-1;
 	tree.view.selection.clearSelection();
 }
return TAB_COMPO_PPTES[43].NewCle;
}

function Delete_Types_de_lien_Liste_des_types_de_lien_entre_personne0()
{
 if (TAB_GLOBAL_COMPO[43].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement � suprimer");
 	return;
 }
 /* On recup�re le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[43];
 if (confirm("Voulez vous vraiment supprimer l'enregistrement en cours ?"))
 {
	TAB_COMPO_PPTES[43].Action_en_cours = DELETE;
 	User_Delete_Types_de_lien_Liste_des_types_de_lien_entre_personne0(Maitre);
	Maitre.RefreshTotal();
 }
}

function Update_Types_de_lien_Liste_des_types_de_lien_entre_personne0()
{
 if (TAB_GLOBAL_COMPO[43].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement � mettre � jour");
 	return -1;
 }
 TAB_COMPO_PPTES[43].Action_en_cours = UPDATE;
/* On calcule la nouvelle cl� */
 TAB_COMPO_PPTES[43].NewCle = TAB_GLOBAL_COMPO[43].getCleVal();
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[43].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[45];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[46];
 Esclave_1.ActiverComposant(true);
top.document.getElementById("Validate_Types_de_lien_Liste_des_types_de_lien_entre_personne0").disabled=false;
top.document.getElementById("Annuler_Types_de_lien_Liste_des_types_de_lien_entre_personne0").disabled=false;
top.document.getElementById("Insert_Types_de_lien_Liste_des_types_de_lien_entre_personne0").disabled=true;
top.document.getElementById("Delete_Types_de_lien_Liste_des_types_de_lien_entre_personne0").disabled=true;
top.document.getElementById("Update_Types_de_lien_Liste_des_types_de_lien_entre_personne0").disabled=true;
return TAB_COMPO_PPTES[43].NewCle;
}

function Validate_Types_de_lien_Liste_des_types_de_lien_entre_personne0(retour)
{
 /* Retour � l'onget appellant si appelle par g�rer */
if (retour==null)
	retour=true;

 /* On recup�re le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[43];
 /* On recup�re la cl� du nouvel enregistrement */
 var NewCle=null;
 switch(TAB_COMPO_PPTES[43].Action_en_cours){
	case INSERT :
	if ((NewCle = User_Insert_Types_de_lien_Liste_des_types_de_lien_entre_personne0(Maitre))==-1)
		return -1;
	break;
	case UPDATE :
	if ((User_Update_Types_de_lien_Liste_des_types_de_lien_entre_personne0(Maitre))==-1)
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
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[43].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[45];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[46];
 Esclave_1.ActiverComposant(false);
top.document.getElementById("Validate_Types_de_lien_Liste_des_types_de_lien_entre_personne0").disabled=true;
top.document.getElementById("Annuler_Types_de_lien_Liste_des_types_de_lien_entre_personne0").disabled=true;
top.document.getElementById("Insert_Types_de_lien_Liste_des_types_de_lien_entre_personne0").disabled=false;
top.document.getElementById("Delete_Types_de_lien_Liste_des_types_de_lien_entre_personne0").disabled=false;
top.document.getElementById("Update_Types_de_lien_Liste_des_types_de_lien_entre_personne0").disabled=false;
 if (NewCle==null)
 	NewCle=TAB_COMPO_PPTES[43].NewCle;
 Maitre.ForceNextSelection(NewCle)
 Maitre.RefreshTotal();
 if(retour)
 {
 }
 TAB_COMPO_PPTES[43].Action_en_cours = null;
 return NewCle;
}

function Annuler_Types_de_lien_Liste_des_types_de_lien_entre_personne0()
{
 TAB_COMPO_PPTES[43].Action_en_cours = null;
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[43].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[45];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[46];
 Esclave_1.ActiverComposant(false);
top.document.getElementById("Validate_Types_de_lien_Liste_des_types_de_lien_entre_personne0").disabled=true;
top.document.getElementById("Annuler_Types_de_lien_Liste_des_types_de_lien_entre_personne0").disabled=true;
top.document.getElementById("Insert_Types_de_lien_Liste_des_types_de_lien_entre_personne0").disabled=false;
top.document.getElementById("Delete_Types_de_lien_Liste_des_types_de_lien_entre_personne0").disabled=false;
top.document.getElementById("Update_Types_de_lien_Liste_des_types_de_lien_entre_personne0").disabled=false;
}






/* *********************************************** 
         FONCTIONS POUR L'ONGLET Types de personne
   ***********************************************/ 

 /* FILTRES DE RELATION ENTRE ONGLETS => VARIABLES GLOBALES POUR ETRE ACCESSIBLES DEPUIS INTERFACE_USER.JS */

function OuvrirOnglet_Types_de_personne()
{
 var tabs = top.document.getElementById("Tous_les_onglets");
 tabs.selectedItem = top.document.getElementById("Onglet_Types_de_personne");
}

function Insert_Types_de_personne_Liste_des_types_de_personne0()
{
 TAB_COMPO_PPTES[47].Action_en_cours = INSERT;
/* On calcule la nouvelle cl� */
 TAB_COMPO_PPTES[47].NewCle = getNewCle("typepersonne");
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[47].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[49];
 Esclave_0.ActiverComposant(true);
top.document.getElementById("Validate_Types_de_personne_Liste_des_types_de_personne0").disabled=false;
top.document.getElementById("Annuler_Types_de_personne_Liste_des_types_de_personne0").disabled=false;
top.document.getElementById("Insert_Types_de_personne_Liste_des_types_de_personne0").disabled=true;
top.document.getElementById("Delete_Types_de_personne_Liste_des_types_de_personne0").disabled=true;
top.document.getElementById("Update_Types_de_personne_Liste_des_types_de_personne0").disabled=true;
 var Maitre=TAB_GLOBAL_COMPO[47];
 /* Pour une insertion on d�sectionne */
 var tree=Maitre.getComposantXul();
 if (tree.view!=null)
 {
 	tree.currentIndex=-1;
 	tree.view.selection.clearSelection();
 }
return TAB_COMPO_PPTES[47].NewCle;
}

function Delete_Types_de_personne_Liste_des_types_de_personne0()
{
 if (TAB_GLOBAL_COMPO[47].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement � suprimer");
 	return;
 }
 /* On recup�re le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[47];
 if (confirm("Voulez vous vraiment supprimer l'enregistrement en cours ?"))
 {
	TAB_COMPO_PPTES[47].Action_en_cours = DELETE;
 	User_Delete_Types_de_personne_Liste_des_types_de_personne0(Maitre);
	Maitre.RefreshTotal();
 }
}

function Update_Types_de_personne_Liste_des_types_de_personne0()
{
 if (TAB_GLOBAL_COMPO[47].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement � mettre � jour");
 	return -1;
 }
 TAB_COMPO_PPTES[47].Action_en_cours = UPDATE;
/* On calcule la nouvelle cl� */
 TAB_COMPO_PPTES[47].NewCle = TAB_GLOBAL_COMPO[47].getCleVal();
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[47].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[49];
 Esclave_0.ActiverComposant(true);
top.document.getElementById("Validate_Types_de_personne_Liste_des_types_de_personne0").disabled=false;
top.document.getElementById("Annuler_Types_de_personne_Liste_des_types_de_personne0").disabled=false;
top.document.getElementById("Insert_Types_de_personne_Liste_des_types_de_personne0").disabled=true;
top.document.getElementById("Delete_Types_de_personne_Liste_des_types_de_personne0").disabled=true;
top.document.getElementById("Update_Types_de_personne_Liste_des_types_de_personne0").disabled=true;
return TAB_COMPO_PPTES[47].NewCle;
}

function Validate_Types_de_personne_Liste_des_types_de_personne0(retour)
{
 /* Retour � l'onget appellant si appelle par g�rer */
if (retour==null)
	retour=true;

 /* On recup�re le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[47];
 /* On recup�re la cl� du nouvel enregistrement */
 var NewCle=null;
 switch(TAB_COMPO_PPTES[47].Action_en_cours){
	case INSERT :
	if ((NewCle = User_Insert_Types_de_personne_Liste_des_types_de_personne0(Maitre))==-1)
		return -1;
	break;
	case UPDATE :
	if ((User_Update_Types_de_personne_Liste_des_types_de_personne0(Maitre))==-1)
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
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[47].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[49];
 Esclave_0.ActiverComposant(false);
top.document.getElementById("Validate_Types_de_personne_Liste_des_types_de_personne0").disabled=true;
top.document.getElementById("Annuler_Types_de_personne_Liste_des_types_de_personne0").disabled=true;
top.document.getElementById("Insert_Types_de_personne_Liste_des_types_de_personne0").disabled=false;
top.document.getElementById("Delete_Types_de_personne_Liste_des_types_de_personne0").disabled=false;
top.document.getElementById("Update_Types_de_personne_Liste_des_types_de_personne0").disabled=false;
 if (NewCle==null)
 	NewCle=TAB_COMPO_PPTES[47].NewCle;
 Maitre.ForceNextSelection(NewCle)
 Maitre.RefreshTotal();
 if(retour)
 {
 }
 TAB_COMPO_PPTES[47].Action_en_cours = null;
 return NewCle;
}

function Annuler_Types_de_personne_Liste_des_types_de_personne0()
{
 TAB_COMPO_PPTES[47].Action_en_cours = null;
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[47].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[49];
 Esclave_0.ActiverComposant(false);
top.document.getElementById("Validate_Types_de_personne_Liste_des_types_de_personne0").disabled=true;
top.document.getElementById("Annuler_Types_de_personne_Liste_des_types_de_personne0").disabled=true;
top.document.getElementById("Insert_Types_de_personne_Liste_des_types_de_personne0").disabled=false;
top.document.getElementById("Delete_Types_de_personne_Liste_des_types_de_personne0").disabled=false;
top.document.getElementById("Update_Types_de_personne_Liste_des_types_de_personne0").disabled=false;
}






/* *********************************************** 
         FONCTIONS POUR L'ONGLET Types de soci�t�s
   ***********************************************/ 

 /* FILTRES DE RELATION ENTRE ONGLETS => VARIABLES GLOBALES POUR ETRE ACCESSIBLES DEPUIS INTERFACE_USER.JS */

 var Filtre_Dep_Types_de_soci�t�s_0;
function Retour_Types_de_soci�t�s()
{
 if (Filtre_Dep_Types_de_soci�t�s_0.my_Filtre.getEtat())
 {
 	Filtre_Dep_Types_de_soci�t�s_0.FctFermetureOnglet();
 }
}
function Gerer_Types_de_soci�t�s(IdFiltreOnglet)
{
/* On d�sactive les autres filtres */
if (Filtre_Dep_Types_de_soci�t�s_0.getId()!=IdFiltreOnglet)
{
	Filtre_Dep_Types_de_soci�t�s_0.OnClose(true,false);
}
/* On change d'onglet */
 var tabs = top.document.getElementById("Tous_les_onglets");
 top.document.getElementById("Tous_les_onglets").setAttribute("hidden","false");
 tabs.selectedItem = top.document.getElementById("Onglet_Types_de_soci�t�s");
}

function OuvrirOnglet_Types_de_soci�t�s()
{
 var tabs = top.document.getElementById("Tous_les_onglets");
 tabs.selectedItem = top.document.getElementById("Onglet_Types_de_soci�t�s");
}

function Insert_Types_de_soci�t�s_Liste_des_types_de_soci�t�s0()
{
 TAB_COMPO_PPTES[53].Action_en_cours = INSERT;
/* On calcule la nouvelle cl� */
 TAB_COMPO_PPTES[53].NewCle = getNewCle("typesociete");
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[53].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[55];
 Esclave_0.ActiverComposant(true);
top.document.getElementById("Validate_Types_de_soci�t�s_Liste_des_types_de_soci�t�s0").disabled=false;
top.document.getElementById("Annuler_Types_de_soci�t�s_Liste_des_types_de_soci�t�s0").disabled=false;
top.document.getElementById("Insert_Types_de_soci�t�s_Liste_des_types_de_soci�t�s0").disabled=true;
top.document.getElementById("Delete_Types_de_soci�t�s_Liste_des_types_de_soci�t�s0").disabled=true;
top.document.getElementById("Update_Types_de_soci�t�s_Liste_des_types_de_soci�t�s0").disabled=true;
 var Maitre=TAB_GLOBAL_COMPO[53];
 /* Pour une insertion on d�sectionne */
 var tree=Maitre.getComposantXul();
 if (tree.view!=null)
 {
 	tree.currentIndex=-1;
 	tree.view.selection.clearSelection();
 }
return TAB_COMPO_PPTES[53].NewCle;
}

function Delete_Types_de_soci�t�s_Liste_des_types_de_soci�t�s0()
{
 if (TAB_GLOBAL_COMPO[53].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement � suprimer");
 	return;
 }
 /* On recup�re le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[53];
 if (confirm("Voulez vous vraiment supprimer l'enregistrement en cours ?"))
 {
	TAB_COMPO_PPTES[53].Action_en_cours = DELETE;
 	User_Delete_Types_de_soci�t�s_Liste_des_types_de_soci�t�s0(Maitre);
	Maitre.RefreshTotal();
	Filtre_Dep_Types_de_soci�t�s_0.OnClose(true);
 }
}

function Update_Types_de_soci�t�s_Liste_des_types_de_soci�t�s0()
{
 if (TAB_GLOBAL_COMPO[53].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement � mettre � jour");
 	return -1;
 }
 TAB_COMPO_PPTES[53].Action_en_cours = UPDATE;
/* On calcule la nouvelle cl� */
 TAB_COMPO_PPTES[53].NewCle = TAB_GLOBAL_COMPO[53].getCleVal();
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[53].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[55];
 Esclave_0.ActiverComposant(true);
top.document.getElementById("Validate_Types_de_soci�t�s_Liste_des_types_de_soci�t�s0").disabled=false;
top.document.getElementById("Annuler_Types_de_soci�t�s_Liste_des_types_de_soci�t�s0").disabled=false;
top.document.getElementById("Insert_Types_de_soci�t�s_Liste_des_types_de_soci�t�s0").disabled=true;
top.document.getElementById("Delete_Types_de_soci�t�s_Liste_des_types_de_soci�t�s0").disabled=true;
top.document.getElementById("Update_Types_de_soci�t�s_Liste_des_types_de_soci�t�s0").disabled=true;
return TAB_COMPO_PPTES[53].NewCle;
}

function Validate_Types_de_soci�t�s_Liste_des_types_de_soci�t�s0(retour)
{
 /* Retour � l'onget appellant si appelle par g�rer */
if (retour==null)
	retour=true;

 /* On recup�re le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[53];
 /* On recup�re la cl� du nouvel enregistrement */
 var NewCle=null;
 switch(TAB_COMPO_PPTES[53].Action_en_cours){
	case INSERT :
	if ((NewCle = User_Insert_Types_de_soci�t�s_Liste_des_types_de_soci�t�s0(Maitre))==-1)
		return -1;
	break;
	case UPDATE :
	if ((User_Update_Types_de_soci�t�s_Liste_des_types_de_soci�t�s0(Maitre))==-1)
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
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[53].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[55];
 Esclave_0.ActiverComposant(false);
top.document.getElementById("Validate_Types_de_soci�t�s_Liste_des_types_de_soci�t�s0").disabled=true;
top.document.getElementById("Annuler_Types_de_soci�t�s_Liste_des_types_de_soci�t�s0").disabled=true;
top.document.getElementById("Insert_Types_de_soci�t�s_Liste_des_types_de_soci�t�s0").disabled=false;
top.document.getElementById("Delete_Types_de_soci�t�s_Liste_des_types_de_soci�t�s0").disabled=false;
top.document.getElementById("Update_Types_de_soci�t�s_Liste_des_types_de_soci�t�s0").disabled=false;
 if (NewCle==null)
 	NewCle=TAB_COMPO_PPTES[53].NewCle;
 Maitre.ForceNextSelection(NewCle)
 Maitre.RefreshTotal();
 if(retour)
 {
 Filtre_Dep_Types_de_soci�t�s_0.OnClose(false);
 }
 TAB_COMPO_PPTES[53].Action_en_cours = null;
 return NewCle;
}

function Annuler_Types_de_soci�t�s_Liste_des_types_de_soci�t�s0()
{
 TAB_COMPO_PPTES[53].Action_en_cours = null;
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[53].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[55];
 Esclave_0.ActiverComposant(false);
top.document.getElementById("Validate_Types_de_soci�t�s_Liste_des_types_de_soci�t�s0").disabled=true;
top.document.getElementById("Annuler_Types_de_soci�t�s_Liste_des_types_de_soci�t�s0").disabled=true;
top.document.getElementById("Insert_Types_de_soci�t�s_Liste_des_types_de_soci�t�s0").disabled=false;
top.document.getElementById("Delete_Types_de_soci�t�s_Liste_des_types_de_soci�t�s0").disabled=false;
top.document.getElementById("Update_Types_de_soci�t�s_Liste_des_types_de_soci�t�s0").disabled=false;
}






/* *********************************************** 
         FONCTIONS POUR L'ONGLET Types de t�ches
   ***********************************************/ 

 /* FILTRES DE RELATION ENTRE ONGLETS => VARIABLES GLOBALES POUR ETRE ACCESSIBLES DEPUIS INTERFACE_USER.JS */

function OuvrirOnglet_Types_de_t�ches()
{
 var tabs = top.document.getElementById("Tous_les_onglets");
 tabs.selectedItem = top.document.getElementById("Onglet_Types_de_t�ches");
}

function Insert_Types_de_t�ches_Liste_des_types_de_t�ches0()
{
 TAB_COMPO_PPTES[24].Action_en_cours = INSERT;
/* On calcule la nouvelle cl� */
 TAB_COMPO_PPTES[24].NewCle = getNewCle("typetache");
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[24].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[26];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[27];
 Esclave_1.ActiverComposant(true);
top.document.getElementById("Validate_Types_de_t�ches_Liste_des_types_de_t�ches0").disabled=false;
top.document.getElementById("Annuler_Types_de_t�ches_Liste_des_types_de_t�ches0").disabled=false;
top.document.getElementById("Insert_Types_de_t�ches_Liste_des_types_de_t�ches0").disabled=true;
top.document.getElementById("Delete_Types_de_t�ches_Liste_des_types_de_t�ches0").disabled=true;
top.document.getElementById("Update_Types_de_t�ches_Liste_des_types_de_t�ches0").disabled=true;
 var Maitre=TAB_GLOBAL_COMPO[24];
 /* Pour une insertion on d�sectionne */
 var tree=Maitre.getComposantXul();
 if (tree.view!=null)
 {
 	tree.currentIndex=-1;
 	tree.view.selection.clearSelection();
 }
return TAB_COMPO_PPTES[24].NewCle;
}

function Delete_Types_de_t�ches_Liste_des_types_de_t�ches0()
{
 if (TAB_GLOBAL_COMPO[24].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement � suprimer");
 	return;
 }
 /* On recup�re le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[24];
 if (confirm("Voulez vous vraiment supprimer l'enregistrement en cours ?"))
 {
	TAB_COMPO_PPTES[24].Action_en_cours = DELETE;
 	User_Delete_Types_de_t�ches_Liste_des_types_de_t�ches0(Maitre);
	Maitre.RefreshTotal();
 }
}

function Update_Types_de_t�ches_Liste_des_types_de_t�ches0()
{
 if (TAB_GLOBAL_COMPO[24].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement � mettre � jour");
 	return -1;
 }
 TAB_COMPO_PPTES[24].Action_en_cours = UPDATE;
/* On calcule la nouvelle cl� */
 TAB_COMPO_PPTES[24].NewCle = TAB_GLOBAL_COMPO[24].getCleVal();
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[24].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[26];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[27];
 Esclave_1.ActiverComposant(true);
top.document.getElementById("Validate_Types_de_t�ches_Liste_des_types_de_t�ches0").disabled=false;
top.document.getElementById("Annuler_Types_de_t�ches_Liste_des_types_de_t�ches0").disabled=false;
top.document.getElementById("Insert_Types_de_t�ches_Liste_des_types_de_t�ches0").disabled=true;
top.document.getElementById("Delete_Types_de_t�ches_Liste_des_types_de_t�ches0").disabled=true;
top.document.getElementById("Update_Types_de_t�ches_Liste_des_types_de_t�ches0").disabled=true;
return TAB_COMPO_PPTES[24].NewCle;
}

function Validate_Types_de_t�ches_Liste_des_types_de_t�ches0(retour)
{
 /* Retour � l'onget appellant si appelle par g�rer */
if (retour==null)
	retour=true;

 /* On recup�re le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[24];
 /* On recup�re la cl� du nouvel enregistrement */
 var NewCle=null;
 switch(TAB_COMPO_PPTES[24].Action_en_cours){
	case INSERT :
	if ((NewCle = User_Insert_Types_de_t�ches_Liste_des_types_de_t�ches0(Maitre))==-1)
		return -1;
	break;
	case UPDATE :
	if ((User_Update_Types_de_t�ches_Liste_des_types_de_t�ches0(Maitre))==-1)
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
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[24].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[26];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[27];
 Esclave_1.ActiverComposant(false);
top.document.getElementById("Validate_Types_de_t�ches_Liste_des_types_de_t�ches0").disabled=true;
top.document.getElementById("Annuler_Types_de_t�ches_Liste_des_types_de_t�ches0").disabled=true;
top.document.getElementById("Insert_Types_de_t�ches_Liste_des_types_de_t�ches0").disabled=false;
top.document.getElementById("Delete_Types_de_t�ches_Liste_des_types_de_t�ches0").disabled=false;
top.document.getElementById("Update_Types_de_t�ches_Liste_des_types_de_t�ches0").disabled=false;
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

function Annuler_Types_de_t�ches_Liste_des_types_de_t�ches0()
{
 TAB_COMPO_PPTES[24].Action_en_cours = null;
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[24].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[26];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[27];
 Esclave_1.ActiverComposant(false);
top.document.getElementById("Validate_Types_de_t�ches_Liste_des_types_de_t�ches0").disabled=true;
top.document.getElementById("Annuler_Types_de_t�ches_Liste_des_types_de_t�ches0").disabled=true;
top.document.getElementById("Insert_Types_de_t�ches_Liste_des_types_de_t�ches0").disabled=false;
top.document.getElementById("Delete_Types_de_t�ches_Liste_des_types_de_t�ches0").disabled=false;
top.document.getElementById("Update_Types_de_t�ches_Liste_des_types_de_t�ches0").disabled=false;
}






/* *********************************************** 
         FONCTIONS POUR L'ONGLET Villes
   ***********************************************/ 

 /* FILTRES DE RELATION ENTRE ONGLETS => VARIABLES GLOBALES POUR ETRE ACCESSIBLES DEPUIS INTERFACE_USER.JS */

 var Filtre_Dep_Villes_0;
function Retour_Villes()
{
 if (Filtre_Dep_Villes_0.my_Filtre.getEtat())
 {
 	Filtre_Dep_Villes_0.FctFermetureOnglet();
 }
}
function Gerer_Villes(IdFiltreOnglet)
{
/* On d�sactive les autres filtres */
if (Filtre_Dep_Villes_0.getId()!=IdFiltreOnglet)
{
	Filtre_Dep_Villes_0.OnClose(true,false);
}
/* On change d'onglet */
 var tabs = top.document.getElementById("Tous_les_onglets");
 top.document.getElementById("Tous_les_onglets").setAttribute("hidden","false");
 tabs.selectedItem = top.document.getElementById("Onglet_Villes");
}

function OuvrirOnglet_Villes()
{
 var tabs = top.document.getElementById("Tous_les_onglets");
 tabs.selectedItem = top.document.getElementById("Onglet_Villes");
}

function Insert_Villes_Liste_des_villes0()
{
 TAB_COMPO_PPTES[123].Action_en_cours = INSERT;
/* On calcule la nouvelle cl� */
 TAB_COMPO_PPTES[123].NewCle = getNewCle("ville");
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[123].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[126];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[127];
 Esclave_1.ActiverComposant(true);
top.document.getElementById("Validate_Villes_Liste_des_villes0").disabled=false;
top.document.getElementById("Annuler_Villes_Liste_des_villes0").disabled=false;
top.document.getElementById("Insert_Villes_Liste_des_villes0").disabled=true;
top.document.getElementById("Delete_Villes_Liste_des_villes0").disabled=true;
top.document.getElementById("Update_Villes_Liste_des_villes0").disabled=true;
 var Maitre=TAB_GLOBAL_COMPO[123];
 /* Pour une insertion on d�sectionne */
 var tree=Maitre.getComposantXul();
 if (tree.view!=null)
 {
 	tree.currentIndex=-1;
 	tree.view.selection.clearSelection();
 }
return TAB_COMPO_PPTES[123].NewCle;
}

function Delete_Villes_Liste_des_villes0()
{
 if (TAB_GLOBAL_COMPO[123].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement � suprimer");
 	return;
 }
 /* On recup�re le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[123];
 if (confirm("Voulez vous vraiment supprimer l'enregistrement en cours ?"))
 {
	TAB_COMPO_PPTES[123].Action_en_cours = DELETE;
 	User_Delete_Villes_Liste_des_villes0(Maitre);
	Maitre.RefreshTotal();
	Filtre_Dep_Villes_0.OnClose(true);
 }
}

function Update_Villes_Liste_des_villes0()
{
 if (TAB_GLOBAL_COMPO[123].getCleVal()==-1)
 {
 	alert("Vous devez selectionner l'enregistrement � mettre � jour");
 	return -1;
 }
 TAB_COMPO_PPTES[123].Action_en_cours = UPDATE;
/* On calcule la nouvelle cl� */
 TAB_COMPO_PPTES[123].NewCle = TAB_GLOBAL_COMPO[123].getCleVal();
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[123].ActiverComposant(false,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[126];
 Esclave_0.ActiverComposant(true);
 var Esclave_1=TAB_GLOBAL_COMPO[127];
 Esclave_1.ActiverComposant(true);
top.document.getElementById("Validate_Villes_Liste_des_villes0").disabled=false;
top.document.getElementById("Annuler_Villes_Liste_des_villes0").disabled=false;
top.document.getElementById("Insert_Villes_Liste_des_villes0").disabled=true;
top.document.getElementById("Delete_Villes_Liste_des_villes0").disabled=true;
top.document.getElementById("Update_Villes_Liste_des_villes0").disabled=true;
return TAB_COMPO_PPTES[123].NewCle;
}

function Validate_Villes_Liste_des_villes0(retour)
{
 /* Retour � l'onget appellant si appelle par g�rer */
if (retour==null)
	retour=true;

 /* On recup�re le composant maitre  */
 var Maitre=TAB_GLOBAL_COMPO[123];
 /* On recup�re la cl� du nouvel enregistrement */
 var NewCle=null;
 switch(TAB_COMPO_PPTES[123].Action_en_cours){
	case INSERT :
	if ((NewCle = User_Insert_Villes_Liste_des_villes0(Maitre))==-1)
		return -1;
	break;
	case UPDATE :
	if ((User_Update_Villes_Liste_des_villes0(Maitre))==-1)
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
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[123].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[126];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[127];
 Esclave_1.ActiverComposant(false);
top.document.getElementById("Validate_Villes_Liste_des_villes0").disabled=true;
top.document.getElementById("Annuler_Villes_Liste_des_villes0").disabled=true;
top.document.getElementById("Insert_Villes_Liste_des_villes0").disabled=false;
top.document.getElementById("Delete_Villes_Liste_des_villes0").disabled=false;
top.document.getElementById("Update_Villes_Liste_des_villes0").disabled=false;
 if (NewCle==null)
 	NewCle=TAB_COMPO_PPTES[123].NewCle;
 Maitre.ForceNextSelection(NewCle)
 Maitre.RefreshTotal();
 if(retour)
 {
 Filtre_Dep_Villes_0.OnClose(false);
 }
 TAB_COMPO_PPTES[123].Action_en_cours = null;
 return NewCle;
}

function Annuler_Villes_Liste_des_villes0()
{
 TAB_COMPO_PPTES[123].Action_en_cours = null;
/* On d�sactive le composant maitre */
 TAB_GLOBAL_COMPO[123].ActiverComposant(true,true);
/* On active les composants esclaves et on vide les champs */
 var Esclave_0=TAB_GLOBAL_COMPO[126];
 Esclave_0.ActiverComposant(false);
 var Esclave_1=TAB_GLOBAL_COMPO[127];
 Esclave_1.ActiverComposant(false);
top.document.getElementById("Validate_Villes_Liste_des_villes0").disabled=true;
top.document.getElementById("Annuler_Villes_Liste_des_villes0").disabled=true;
top.document.getElementById("Insert_Villes_Liste_des_villes0").disabled=false;
top.document.getElementById("Delete_Villes_Liste_des_villes0").disabled=false;
top.document.getElementById("Update_Villes_Liste_des_villes0").disabled=false;
}





function gestsea_parametrage_Chargement()
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
var Col_N0_Nom_De_Acc�s_Liste_des_niveaux_d_acc�s0=new clAttribut("ac_libelle","acces",null);

var Col_N1_Niveau_De_Acc�s_Liste_des_niveaux_d_acc�s0=new clAttribut("ac_niveau","acces",null);

var Acc�s_Nom_1=new clAttribut("ac_libelle","acces",null);


	/* Ce composant repr�sente: acces.ac_libelle sous le nom "Nom" */
var Compo_Acc�s_Nom_1=new clCompoTextBox(Acc�s_Nom_1,null,"Nom",false,false);
var Acc�s_Niveau_2=new clAttribut("ac_niveau","acces",null);


	/* Ce composant repr�sente: acces.ac_niveau sous le nom "Niveau" */
var Compo_Acc�s_Niveau_2=new clCompoTextBox(Acc�s_Niveau_2,null,"Niveau",false,false);
var Acc�s_Liste_des_niveaux_d_acc�s0=new clEnsembleAttributs("acces",
	new Array(
	new clLiaison(null,Col_N0_Nom_De_Acc�s_Liste_des_niveaux_d_acc�s0)
	,new clLiaison(null,Col_N1_Niveau_De_Acc�s_Liste_des_niveaux_d_acc�s0)
	),
	new Array(
	new clLiaison(null,Acc�s_Nom_1)
	,new clLiaison(null,Acc�s_Niveau_2)
	));

var Titre_Acc�s_Liste_des_niveaux_d_acc�s0=new Array("Nom","Niveau");

	/* Ce composant repr�sente: des �l�ments de la table acces sous le nom "Liste des niveaux d'acc�s" */
var Compo_Acc�s_Liste_des_niveaux_d_acc�s0=new clCompoListe(Acc�s_Liste_des_niveaux_d_acc�s0,new Array(new clInterfaceFiltrageVide()),Titre_Acc�s_Liste_des_niveaux_d_acc�s0,"Liste des niveaux d'acc�s",true,false);

	/* Ce composant repr�sente: acces.undefined sous le nom "Liste des niveaux d'acc�s" */
 if(ALeDroit(0,"acces"))
 {
Compo_Acc�s_Liste_des_niveaux_d_acc�s0.GenererXUL(top.document.getElementById("Acc�s_Liste_des_niveaux_d_acc�s0"));

 }

	/* On l'ajoute au tableau global � l'indice 3*/
top.TAB_GLOBAL_COMPO[3]=Compo_Acc�s_Liste_des_niveaux_d_acc�s0;

	/* Ce composant repr�sente: des �l�ments de la table acces sous le nom "Nom" */
 if(ALeDroit(0,"acces"))
 {
Compo_Acc�s_Nom_1.GenererXUL(top.document.getElementById("Acc�s_Liste_des_niveaux_d_acc�s0_Slaves"));

 }

	/* On l'ajoute au tableau global � l'indice 6*/
top.TAB_GLOBAL_COMPO[6]=Compo_Acc�s_Nom_1;

	/* Ce composant repr�sente: des �l�ments de la table acces sous le nom "Niveau" */
 if(ALeDroit(0,"acces"))
 {
Compo_Acc�s_Niveau_2.GenererXUL(top.document.getElementById("Acc�s_Liste_des_niveaux_d_acc�s0_Slaves"));

 }

	/* On l'ajoute au tableau global � l'indice 7*/
top.TAB_GLOBAL_COMPO[7]=Compo_Acc�s_Niveau_2;
var Col_N0_Libell�_De_Adh�rence_Liste_des_adh�rences0=new clAttribut("ah_libelle","adherence",null);

var Col_N1_R�duction_De_Adh�rence_Liste_des_adh�rences0=new clAttribut("ah_reduction","adherence",null);

var Col_N2_Quantit�_De_Adh�rence_Liste_des_adh�rences0=new clAttribut("ah_quantite","adherence",null);

var Adh�rence_Produit_1=new clAttribut("pd_libelle","produit",null);


	/* Ce composant repr�sente: produit.pd_libelle sous le nom "Produit" */
var Compo_Adh�rence_Produit_1=new clCompoListeDeroulanteSimple(Adh�rence_Produit_1,new Array(clCompoListeDeroulanteSimple.prototype.FiltreParDefaut(),Filtre_Dep_Produits_0=new clInterfaceFiltrageRelationOnglet("Produits",Gerer_Produits,OuvrirOnglet_Adh�rence)),"Produit");
var Joint_Esclave_Adh�rence_Produit_1=new clJointureMulti("adherence",
	new Array(
	new stJointure("produit","pd_numero","pd_numero",null,false)
	));
var Adh�rence_Libell�_2=new clAttribut("ah_libelle","adherence",null);


	/* Ce composant repr�sente: adherence.ah_libelle sous le nom "Libell�" */
var Compo_Adh�rence_Libell�_2=new clCompoTextBox(Adh�rence_Libell�_2,null,"Libell�",false,false);
var Adh�rence_R�duction_3=new clAttribut("ah_reduction","adherence",null);


	/* Ce composant repr�sente: adherence.ah_reduction sous le nom "R�duction" */
var Compo_Adh�rence_R�duction_3=new clCompoTextBox(Adh�rence_R�duction_3,null,"R�duction",false,false);
var Adh�rence_Quantit�_4=new clAttribut("ah_quantite","adherence",null);


	/* Ce composant repr�sente: adherence.ah_quantite sous le nom "Quantit�" */
var Compo_Adh�rence_Quantit�_4=new clCompoTextBox(Adh�rence_Quantit�_4,null,"Quantit�",false,false);
var Col_N0_Du_De_Adh�rence_P�riodes_de_validit�_6=new clAttribut("po_debut","periode",null);

var Col_N1_au_De_Adh�rence_P�riodes_de_validit�_6=new clAttribut("po_fin","periode",null);

var Adh�rence_P�riodes_de_validit�_6=new clEnsembleAttributs("periode",
	new Array(
	new clLiaison(null,Col_N0_Du_De_Adh�rence_P�riodes_de_validit�_6)
	,new clLiaison(null,Col_N1_au_De_Adh�rence_P�riodes_de_validit�_6)
	),
	null);

var Titre_Adh�rence_P�riodes_de_validit�_6=new Array("Du","au");

	/* Ce composant repr�sente: des �l�ments de la table periode sous le nom "P�riodes de validit�" */
var Compo_Adh�rence_P�riodes_de_validit�_6=new clCompoListe(Adh�rence_P�riodes_de_validit�_6,null,Titre_Adh�rence_P�riodes_de_validit�_6,"P�riodes de validit�",true,true);
var Joint_Esclave_Adh�rence_P�riodes_de_validit�_6=new clJointureMulti("adherence",
	new Array(
	new stJointure("periodeadherence","ah_numero","ah_numero",null,false)
	,new stJointure("periode","po_numero","po_numero",null,false)
	));
var Adh�rence_Liste_des_adh�rences0=new clEnsembleAttributs("adherence",
	new Array(
	new clLiaison(null,Col_N0_Libell�_De_Adh�rence_Liste_des_adh�rences0)
	,new clLiaison(null,Col_N1_R�duction_De_Adh�rence_Liste_des_adh�rences0)
	,new clLiaison(null,Col_N2_Quantit�_De_Adh�rence_Liste_des_adh�rences0)
	),
	new Array(
	new clLiaison(Joint_Esclave_Adh�rence_Produit_1,Adh�rence_Produit_1)
	,new clLiaison(null,Adh�rence_Libell�_2)
	,new clLiaison(null,Adh�rence_R�duction_3)
	,new clLiaison(null,Adh�rence_Quantit�_4)
	,new clLiaison(Joint_Esclave_Adh�rence_P�riodes_de_validit�_6,Adh�rence_P�riodes_de_validit�_6)
	));

var Titre_Adh�rence_Liste_des_adh�rences0=new Array("Libell�","R�duction","Quantit�");

	/* Ce composant repr�sente: des �l�ments de la table adherence sous le nom "Liste des adh�rences" */
var Compo_Adh�rence_Liste_des_adh�rences0=new clCompoListe(Adh�rence_Liste_des_adh�rences0,new Array(new clInterfaceFiltrageVide()),Titre_Adh�rence_Liste_des_adh�rences0,"Liste des adh�rences",true,false);
var Col_N0_Du_De_Adh�rence_Indpt_P�riodes_disponibles_5=new clAttribut("po_debut","periode",null);

var Col_N1_au_De_Adh�rence_Indpt_P�riodes_disponibles_5=new clAttribut("po_fin","periode",null);

var Adh�rence_Indpt_P�riodes_disponibles_5=new clEnsembleAttributs("periode",
	new Array(
	new clLiaison(null,Col_N0_Du_De_Adh�rence_Indpt_P�riodes_disponibles_5)
	,new clLiaison(null,Col_N1_au_De_Adh�rence_Indpt_P�riodes_disponibles_5)
	),
	null);

var Titre_Adh�rence_Indpt_P�riodes_disponibles_5=new Array("Du","au");

	/* Ce composant repr�sente: des �l�ments de la table periode sous le nom "P�riodes disponibles" */
var Compo_Adh�rence_Indpt_P�riodes_disponibles_5=new clCompoListe(Adh�rence_Indpt_P�riodes_disponibles_5,new Array(new clInterfaceFiltrageVide(),Filtre_Dep_P�riodes_0=new clInterfaceFiltrageRelationOnglet("P�riodes",Gerer_P�riodes,OuvrirOnglet_Adh�rence)),Titre_Adh�rence_Indpt_P�riodes_disponibles_5,"P�riodes disponibles",true,true);

	/* Ce composant repr�sente: adherence.undefined sous le nom "Liste des adh�rences" */
 if(ALeDroit(0,"adherence"))
 {
Compo_Adh�rence_Liste_des_adh�rences0.GenererXUL(top.document.getElementById("Adh�rence_Liste_des_adh�rences0"));

 }

	/* On l'ajoute au tableau global � l'indice 180*/
top.TAB_GLOBAL_COMPO[180]=Compo_Adh�rence_Liste_des_adh�rences0;

	/* Ce composant repr�sente: des �l�ments de la table produit sous le nom "Produit" */
 if(ALeDroit(0,"produit"))
 {
Compo_Adh�rence_Produit_1.GenererXUL(top.document.getElementById("Adh�rence_Liste_des_adh�rences0_Slaves"));

 }

	/* On l'ajoute au tableau global � l'indice 184*/
top.TAB_GLOBAL_COMPO[184]=Compo_Adh�rence_Produit_1;

	/* Ce composant repr�sente: des �l�ments de la table adherence sous le nom "Libell�" */
 if(ALeDroit(0,"adherence"))
 {
Compo_Adh�rence_Libell�_2.GenererXUL(top.document.getElementById("Adh�rence_Liste_des_adh�rences0_Slaves"));

 }

	/* On l'ajoute au tableau global � l'indice 185*/
top.TAB_GLOBAL_COMPO[185]=Compo_Adh�rence_Libell�_2;

	/* Ce composant repr�sente: des �l�ments de la table adherence sous le nom "R�duction" */
 if(ALeDroit(0,"adherence"))
 {
Compo_Adh�rence_R�duction_3.GenererXUL(top.document.getElementById("Adh�rence_Liste_des_adh�rences0_Slaves"));

 }

	/* On l'ajoute au tableau global � l'indice 186*/
top.TAB_GLOBAL_COMPO[186]=Compo_Adh�rence_R�duction_3;

	/* Ce composant repr�sente: des �l�ments de la table adherence sous le nom "Quantit�" */
 if(ALeDroit(0,"adherence"))
 {
Compo_Adh�rence_Quantit�_4.GenererXUL(top.document.getElementById("Adh�rence_Liste_des_adh�rences0_Slaves"));

 }

	/* On l'ajoute au tableau global � l'indice 187*/
top.TAB_GLOBAL_COMPO[187]=Compo_Adh�rence_Quantit�_4;

	/* Ce composant repr�sente: periode.undefined sous le nom "P�riodes disponibles" */
 if(ALeDroit(0,"periode"))
 {
Compo_Adh�rence_Indpt_P�riodes_disponibles_5.GenererXUL(top.document.getElementById("ListeDessus_Adh�rence_P�riodes_de_validit�_6"));

 }

	/* On l'ajoute au tableau global � l'indice 188*/
top.TAB_GLOBAL_COMPO[188]=Compo_Adh�rence_Indpt_P�riodes_disponibles_5;

	/* Ce composant repr�sente: periode.undefined sous le nom "P�riodes de validit�" */
 if(ALeDroit(0,"periode"))
 {
Compo_Adh�rence_P�riodes_de_validit�_6.GenererXUL(top.document.getElementById("Adh�rence_P�riodes_de_validit�_6"));

 }

	/* On l'ajoute au tableau global � l'indice 191*/
top.TAB_GLOBAL_COMPO[191]=Compo_Adh�rence_P�riodes_de_validit�_6;
var Col_N0_Ini__De_Agents_Liste_des_agents0=new clAttribut("ag_initiales","agent",null);

var Col_N1_Nom_De_Agents_Liste_des_agents0=new clAttribut("ag_nom","agent",null);

var Col_N2_Pr�nom_De_Agents_Liste_des_agents0=new clAttribut("ag_prenom","agent",null);

var Col_N3_�quipe_De_Agents_Liste_des_agents0=new clAttribut("eq_nom","equipe",null);

var Joint_Col_N3_�quipe_De_Agents_Liste_des_agents0=new clJointureMulti("agent",
	new Array(
	new stJointure("equipe","eq_numero","eq_numero",null,true)
	));
var Col_N4_R�le_De_Agents_Liste_des_agents0=new clAttribut("ag_role","agent",null);

var Agents_Nom_1=new clAttribut("ag_nom","agent",null);


	/* Ce composant repr�sente: agent.ag_nom sous le nom "Nom" */
var Compo_Agents_Nom_1=new clCompoTextBox(Agents_Nom_1,null,"Nom",false,false);
var Agents_Pr�nom_2=new clAttribut("ag_prenom","agent",null);


	/* Ce composant repr�sente: agent.ag_prenom sous le nom "Pr�nom" */
var Compo_Agents_Pr�nom_2=new clCompoTextBox(Agents_Pr�nom_2,null,"Pr�nom",false,false);
var Agents_Initiales_3=new clAttribut("ag_initiales","agent",null);


	/* Ce composant repr�sente: agent.ag_initiales sous le nom "Initiales" */
var Compo_Agents_Initiales_3=new clCompoTextBox(Agents_Initiales_3,null,"Initiales",false,false);
var Agents_En_activit�_4=new clAttribut("ag_actif","agent",null);


	/* Ce composant repr�sente: agent.ag_actif sous le nom "En activit�" */
var Compo_Agents_En_activit�_4=new clCompoCheckBox(Agents_En_activit�_4,null,"En activit�");
var Agents_R�le_5=new clAttribut("ag_role","agent",null);


	/* Ce composant repr�sente: agent.ag_role sous le nom "R�le" */
var Compo_Agents_R�le_5=new clCompoTextBox(Agents_R�le_5,null,"R�le",false,false);
var Agents_�quipe_6=new clAttribut("eq_nom","equipe",null);


	/* Ce composant repr�sente: equipe.eq_nom sous le nom "�quipe" */
var Compo_Agents_�quipe_6=new clCompoListeDeroulanteSimple(Agents_�quipe_6,new Array(clCompoListeDeroulanteSimple.prototype.FiltreParDefaut(),Filtre_Dep_�quipes_0=new clInterfaceFiltrageRelationOnglet("�quipes",Gerer_�quipes,OuvrirOnglet_Agents)),"�quipe");
var Joint_Esclave_Agents_�quipe_6=new clJointureMulti("agent",
	new Array(
	new stJointure("equipe","eq_numero","eq_numero",null,false)
	));
var Agents_T�l�phone_professionnel_7=new clAttribut("ag_telephone","agent",null);


	/* Ce composant repr�sente: agent.ag_telephone sous le nom "T�l�phone professionnel" */
var Compo_Agents_T�l�phone_professionnel_7=new clCompoTextBox(Agents_T�l�phone_professionnel_7,null,"T�l�phone professionnel",false,false);
var Agents_T�l�phone_portable_8=new clAttribut("ag_mobile","agent",null);


	/* Ce composant repr�sente: agent.ag_mobile sous le nom "T�l�phone portable" */
var Compo_Agents_T�l�phone_portable_8=new clCompoTextBox(Agents_T�l�phone_portable_8,null,"T�l�phone portable",false,false);
var Agents_Adresse_e_mail_9=new clAttribut("ag_email","agent",null);


	/* Ce composant repr�sente: agent.ag_email sous le nom "Adresse e-mail" */
var Compo_Agents_Adresse_e_mail_9=new clCompoTextBox(Agents_Adresse_e_mail_9,null,"Adresse e-mail",false,false);
var Agents_Commentaire_10=new clAttribut("ag_commentaire","agent",null);


	/* Ce composant repr�sente: agent.ag_commentaire sous le nom "Commentaire" */
var Compo_Agents_Commentaire_10=new clCompoTextBox(Agents_Commentaire_10,null,"Commentaire",false,false);
var Agents_Liste_des_agents0=new clEnsembleAttributs("agent",
	new Array(
	new clLiaison(null,Col_N0_Ini__De_Agents_Liste_des_agents0)
	,new clLiaison(null,Col_N1_Nom_De_Agents_Liste_des_agents0)
	,new clLiaison(null,Col_N2_Pr�nom_De_Agents_Liste_des_agents0)
	,new clLiaison(Joint_Col_N3_�quipe_De_Agents_Liste_des_agents0,Col_N3_�quipe_De_Agents_Liste_des_agents0)
	,new clLiaison(null,Col_N4_R�le_De_Agents_Liste_des_agents0)
	),
	new Array(
	new clLiaison(null,Agents_Nom_1)
	,new clLiaison(null,Agents_Pr�nom_2)
	,new clLiaison(null,Agents_Initiales_3)
	,new clLiaison(null,Agents_En_activit�_4)
	,new clLiaison(null,Agents_R�le_5)
	,new clLiaison(Joint_Esclave_Agents_�quipe_6,Agents_�quipe_6)
	,new clLiaison(null,Agents_T�l�phone_professionnel_7)
	,new clLiaison(null,Agents_T�l�phone_portable_8)
	,new clLiaison(null,Agents_Adresse_e_mail_9)
	,new clLiaison(null,Agents_Commentaire_10)
	));

var Titre_Agents_Liste_des_agents0=new Array("Ini.","Nom","Pr�nom","�quipe","R�le");

	/* Ce composant repr�sente: des �l�ments de la table agent sous le nom "Liste des agents" */
var Compo_Agents_Liste_des_agents0=new clCompoListe(Agents_Liste_des_agents0,new Array(new clInterfaceFiltrageVide()),Titre_Agents_Liste_des_agents0,"Liste des agents",true,false);

	/* Ce composant repr�sente: agent.undefined sous le nom "Liste des agents" */
 if(ALeDroit(0,"agent"))
 {
Compo_Agents_Liste_des_agents0.GenererXUL(top.document.getElementById("Agents_Liste_des_agents0"));

 }

	/* On l'ajoute au tableau global � l'indice 104*/
top.TAB_GLOBAL_COMPO[104]=Compo_Agents_Liste_des_agents0;

	/* Ce composant repr�sente: des �l�ments de la table agent sous le nom "Nom" */
 if(ALeDroit(0,"agent"))
 {
Compo_Agents_Nom_1.GenererXUL(top.document.getElementById("Agents_Liste_des_agents0_Slaves"));

 }

	/* On l'ajoute au tableau global � l'indice 110*/
top.TAB_GLOBAL_COMPO[110]=Compo_Agents_Nom_1;

	/* Ce composant repr�sente: des �l�ments de la table agent sous le nom "Pr�nom" */
 if(ALeDroit(0,"agent"))
 {
Compo_Agents_Pr�nom_2.GenererXUL(top.document.getElementById("Agents_Liste_des_agents0_Slaves"));

 }

	/* On l'ajoute au tableau global � l'indice 111*/
top.TAB_GLOBAL_COMPO[111]=Compo_Agents_Pr�nom_2;

	/* Ce composant repr�sente: des �l�ments de la table agent sous le nom "Initiales" */
 if(ALeDroit(0,"agent"))
 {
Compo_Agents_Initiales_3.GenererXUL(top.document.getElementById("Agents_Liste_des_agents0_Slaves"));

 }

	/* On l'ajoute au tableau global � l'indice 112*/
top.TAB_GLOBAL_COMPO[112]=Compo_Agents_Initiales_3;

	/* Ce composant repr�sente: des �l�ments de la table agent sous le nom "En activit�" */
 if(ALeDroit(0,"agent"))
 {
Compo_Agents_En_activit�_4.GenererXUL(top.document.getElementById("Agents_Liste_des_agents0_Slaves"));

 }

	/* On l'ajoute au tableau global � l'indice 113*/
top.TAB_GLOBAL_COMPO[113]=Compo_Agents_En_activit�_4;

	/* Ce composant repr�sente: des �l�ments de la table agent sous le nom "R�le" */
 if(ALeDroit(0,"agent"))
 {
Compo_Agents_R�le_5.GenererXUL(top.document.getElementById("Agents_Liste_des_agents0_Slaves"));

 }

	/* On l'ajoute au tableau global � l'indice 114*/
top.TAB_GLOBAL_COMPO[114]=Compo_Agents_R�le_5;

	/* Ce composant repr�sente: des �l�ments de la table equipe sous le nom "�quipe" */
 if(ALeDroit(0,"equipe"))
 {
Compo_Agents_�quipe_6.GenererXUL(top.document.getElementById("Agents_Liste_des_agents0_Slaves"));

 }

	/* On l'ajoute au tableau global � l'indice 115*/
top.TAB_GLOBAL_COMPO[115]=Compo_Agents_�quipe_6;

	/* Ce composant repr�sente: des �l�ments de la table agent sous le nom "T�l�phone professionnel" */
 if(ALeDroit(0,"agent"))
 {
Compo_Agents_T�l�phone_professionnel_7.GenererXUL(top.document.getElementById("Agents_Liste_des_agents0_Slaves"));

 }

	/* On l'ajoute au tableau global � l'indice 116*/
top.TAB_GLOBAL_COMPO[116]=Compo_Agents_T�l�phone_professionnel_7;

	/* Ce composant repr�sente: des �l�ments de la table agent sous le nom "T�l�phone portable" */
 if(ALeDroit(0,"agent"))
 {
Compo_Agents_T�l�phone_portable_8.GenererXUL(top.document.getElementById("Agents_Liste_des_agents0_Slaves"));

 }

	/* On l'ajoute au tableau global � l'indice 117*/
top.TAB_GLOBAL_COMPO[117]=Compo_Agents_T�l�phone_portable_8;

	/* Ce composant repr�sente: des �l�ments de la table agent sous le nom "Adresse e-mail" */
 if(ALeDroit(0,"agent"))
 {
Compo_Agents_Adresse_e_mail_9.GenererXUL(top.document.getElementById("Agents_Liste_des_agents0_Slaves"));

 }

	/* On l'ajoute au tableau global � l'indice 118*/
top.TAB_GLOBAL_COMPO[118]=Compo_Agents_Adresse_e_mail_9;

	/* Ce composant repr�sente: des �l�ments de la table agent sous le nom "Commentaire" */
 if(ALeDroit(0,"agent"))
 {
Compo_Agents_Commentaire_10.GenererXUL(top.document.getElementById("Agents_Liste_des_agents0_Slaves"));

 }

	/* On l'ajoute au tableau global � l'indice 119*/
top.TAB_GLOBAL_COMPO[119]=Compo_Agents_Commentaire_10;
var Col_N0_N__De_Cantons_Liste_des_cantons0=new clAttribut("ct_numero","canton",null);

var Col_N1_Nom_De_Cantons_Liste_des_cantons0=new clAttribut("ct_nom","canton",null);

var Cantons_Nom_1=new clAttribut("ct_nom","canton",null);


	/* Ce composant repr�sente: canton.ct_nom sous le nom "Nom" */
var Compo_Cantons_Nom_1=new clCompoTextBox(Cantons_Nom_1,null,"Nom",false,false);
var Col_N0_Nom_De_Cantons_Villes_2=new clAttribut("vi_nom","ville",null);

var Cantons_Villes_2=new clEnsembleAttributs("ville",
	new Array(
	new clLiaison(null,Col_N0_Nom_De_Cantons_Villes_2)
	),
	null);

var Titre_Cantons_Villes_2=new Array("Nom");

	/* Ce composant repr�sente: des �l�ments de la table ville sous le nom "Villes" */
var Compo_Cantons_Villes_2=new clCompoListe(Cantons_Villes_2,null,Titre_Cantons_Villes_2,"Villes",true,false);
var Joint_Esclave_Cantons_Villes_2=new clJointureMulti("canton",
	new Array(
	new stJointure("ville","ct_numero","ct_numero",null,false)
	));
var Cantons_Liste_des_cantons0=new clEnsembleAttributs("canton",
	new Array(
	new clLiaison(null,Col_N0_N__De_Cantons_Liste_des_cantons0)
	,new clLiaison(null,Col_N1_Nom_De_Cantons_Liste_des_cantons0)
	),
	new Array(
	new clLiaison(null,Cantons_Nom_1)
	,new clLiaison(Joint_Esclave_Cantons_Villes_2,Cantons_Villes_2)
	));

var Titre_Cantons_Liste_des_cantons0=new Array("N�","Nom");

	/* Ce composant repr�sente: des �l�ments de la table canton sous le nom "Liste des cantons" */
var Compo_Cantons_Liste_des_cantons0=new clCompoListe(Cantons_Liste_des_cantons0,new Array(new clInterfaceFiltrageVide()),Titre_Cantons_Liste_des_cantons0,"Liste des cantons",true,false);

	/* Ce composant repr�sente: canton.undefined sous le nom "Liste des cantons" */
 if(ALeDroit(0,"canton"))
 {
Compo_Cantons_Liste_des_cantons0.GenererXUL(top.document.getElementById("Cantons_Liste_des_cantons0"));

 }

	/* On l'ajoute au tableau global � l'indice 137*/
top.TAB_GLOBAL_COMPO[137]=Compo_Cantons_Liste_des_cantons0;

	/* Ce composant repr�sente: des �l�ments de la table canton sous le nom "Nom" */
 if(ALeDroit(0,"canton"))
 {
Compo_Cantons_Nom_1.GenererXUL(top.document.getElementById("Cantons_Liste_des_cantons0_Slaves"));

 }

	/* On l'ajoute au tableau global � l'indice 140*/
top.TAB_GLOBAL_COMPO[140]=Compo_Cantons_Nom_1;

	/* Ce composant repr�sente: ville.undefined sous le nom "Villes" */
 if(ALeDroit(0,"ville"))
 {
Compo_Cantons_Villes_2.GenererXUL(top.document.getElementById("Cantons_Villes_2"));

 }

	/* On l'ajoute au tableau global � l'indice 141*/
top.TAB_GLOBAL_COMPO[141]=Compo_Cantons_Villes_2;
var Col_N0_Code_De_Codes_postaux_Liste_des_codes_postaux0=new clAttribut("cp_codepostal","codepostal",null);

var Col_N1_Bureau_De_Codes_postaux_Liste_des_codes_postaux0=new clAttribut("cp_bureau","codepostal",null);

var Codes_postaux_Code_postal_1=new clAttribut("cp_codepostal","codepostal",null);


	/* Ce composant repr�sente: codepostal.cp_codepostal sous le nom "Code postal" */
var Compo_Codes_postaux_Code_postal_1=new clCompoTextBox(Codes_postaux_Code_postal_1,null,"Code postal",false,false);
var Codes_postaux_Bureau_distributeur_2=new clAttribut("cp_bureau","codepostal",null);


	/* Ce composant repr�sente: codepostal.cp_bureau sous le nom "Bureau distributeur" */
var Compo_Codes_postaux_Bureau_distributeur_2=new clCompoTextBox(Codes_postaux_Bureau_distributeur_2,null,"Bureau distributeur",false,false);
var Col_N0_Nom_De_Codes_postaux_Villes_li�es_au_code_postal_4=new clAttribut("vi_nom","ville",null);

var Codes_postaux_Villes_li�es_au_code_postal_4=new clEnsembleAttributs("ville",
	new Array(
	new clLiaison(null,Col_N0_Nom_De_Codes_postaux_Villes_li�es_au_code_postal_4)
	),
	null);

var Titre_Codes_postaux_Villes_li�es_au_code_postal_4=new Array("Nom");

	/* Ce composant repr�sente: des �l�ments de la table ville sous le nom "Villes li�es au code postal" */
var Compo_Codes_postaux_Villes_li�es_au_code_postal_4=new clCompoListe(Codes_postaux_Villes_li�es_au_code_postal_4,null,Titre_Codes_postaux_Villes_li�es_au_code_postal_4,"Villes li�es au code postal",true,true);
var Joint_Esclave_Codes_postaux_Villes_li�es_au_code_postal_4=new clJointureMulti("codepostal",
	new Array(
	new stJointure("villecp","cp_numero","cp_numero",null,false)
	,new stJointure("ville","vi_numero","vi_numero",null,false)
	));
var Codes_postaux_Liste_des_codes_postaux0=new clEnsembleAttributs("codepostal",
	new Array(
	new clLiaison(null,Col_N0_Code_De_Codes_postaux_Liste_des_codes_postaux0)
	,new clLiaison(null,Col_N1_Bureau_De_Codes_postaux_Liste_des_codes_postaux0)
	),
	new Array(
	new clLiaison(null,Codes_postaux_Code_postal_1)
	,new clLiaison(null,Codes_postaux_Bureau_distributeur_2)
	,new clLiaison(Joint_Esclave_Codes_postaux_Villes_li�es_au_code_postal_4,Codes_postaux_Villes_li�es_au_code_postal_4)
	));

var Titre_Codes_postaux_Liste_des_codes_postaux0=new Array("Code","Bureau");

	/* Ce composant repr�sente: des �l�ments de la table codepostal sous le nom "Liste des codes postaux" */
var Compo_Codes_postaux_Liste_des_codes_postaux0=new clCompoListe(Codes_postaux_Liste_des_codes_postaux0,new Array(new clInterfaceFiltrageVide()),Titre_Codes_postaux_Liste_des_codes_postaux0,"Liste des codes postaux",true,false);
var Col_N0_Nom_De_Codes_postaux_Indpt_Villes_disponibles_3=new clAttribut("vi_nom","ville",null);

var Codes_postaux_Indpt_Villes_disponibles_3=new clEnsembleAttributs("ville",
	new Array(
	new clLiaison(null,Col_N0_Nom_De_Codes_postaux_Indpt_Villes_disponibles_3)
	),
	null);

var Titre_Codes_postaux_Indpt_Villes_disponibles_3=new Array("Nom");

	/* Ce composant repr�sente: des �l�ments de la table ville sous le nom "Villes disponibles" */
var Compo_Codes_postaux_Indpt_Villes_disponibles_3=new clCompoListe(Codes_postaux_Indpt_Villes_disponibles_3,new Array(new clInterfaceFiltrageVide(),Filtre_Dep_Villes_0=new clInterfaceFiltrageRelationOnglet("Villes",Gerer_Villes,OuvrirOnglet_Codes_postaux)),Titre_Codes_postaux_Indpt_Villes_disponibles_3,"Villes disponibles",true,true);

	/* Ce composant repr�sente: codepostal.undefined sous le nom "Liste des codes postaux" */
 if(ALeDroit(0,"codepostal"))
 {
Compo_Codes_postaux_Liste_des_codes_postaux0.GenererXUL(top.document.getElementById("Codes_postaux_Liste_des_codes_postaux0"));

 }

	/* On l'ajoute au tableau global � l'indice 128*/
top.TAB_GLOBAL_COMPO[128]=Compo_Codes_postaux_Liste_des_codes_postaux0;

	/* Ce composant repr�sente: des �l�ments de la table codepostal sous le nom "Code postal" */
 if(ALeDroit(0,"codepostal"))
 {
Compo_Codes_postaux_Code_postal_1.GenererXUL(top.document.getElementById("Codes_postaux_Liste_des_codes_postaux0_Slaves"));

 }

	/* On l'ajoute au tableau global � l'indice 131*/
top.TAB_GLOBAL_COMPO[131]=Compo_Codes_postaux_Code_postal_1;

	/* Ce composant repr�sente: des �l�ments de la table codepostal sous le nom "Bureau distributeur" */
 if(ALeDroit(0,"codepostal"))
 {
Compo_Codes_postaux_Bureau_distributeur_2.GenererXUL(top.document.getElementById("Codes_postaux_Liste_des_codes_postaux0_Slaves"));

 }

	/* On l'ajoute au tableau global � l'indice 132*/
top.TAB_GLOBAL_COMPO[132]=Compo_Codes_postaux_Bureau_distributeur_2;

	/* Ce composant repr�sente: ville.undefined sous le nom "Villes disponibles" */
 if(ALeDroit(0,"ville"))
 {
Compo_Codes_postaux_Indpt_Villes_disponibles_3.GenererXUL(top.document.getElementById("ListeDessus_Codes_postaux_Villes_li�es_au_code_postal_4"));

 }

	/* On l'ajoute au tableau global � l'indice 133*/
top.TAB_GLOBAL_COMPO[133]=Compo_Codes_postaux_Indpt_Villes_disponibles_3;

	/* Ce composant repr�sente: ville.undefined sous le nom "Villes li�es au code postal" */
 if(ALeDroit(0,"ville"))
 {
Compo_Codes_postaux_Villes_li�es_au_code_postal_4.GenererXUL(top.document.getElementById("Codes_postaux_Villes_li�es_au_code_postal_4"));

 }

	/* On l'ajoute au tableau global � l'indice 135*/
top.TAB_GLOBAL_COMPO[135]=Compo_Codes_postaux_Villes_li�es_au_code_postal_4;
var Col_N0_Libell�_De_Profils_de_droits_Liste_des_profils_de_droits0=new clAttribut("dp_libelle","droitprofil",null);

var Profils_de_droits_Libell�_1=new clAttribut("dp_libelle","droitprofil",null);


	/* Ce composant repr�sente: droitprofil.dp_libelle sous le nom "Libell�" */
var Compo_Profils_de_droits_Libell�_1=new clCompoTextBox(Profils_de_droits_Libell�_1,null,"Libell�",false,false);
var Col_N0_Droits_De_Profils_de_droits_Droits_2=new clAttribut("dr_droits","droit",null);

var Col_N1_Sur_De_Profils_de_droits_Droits_2=new clAttribut("gt_libelle","groupetable",null);

var Joint_Col_N1_Sur_De_Profils_de_droits_Droits_2=new clJointureMulti("droit",
	new Array(
	new stJointure("groupetable","gt_numero","gt_numero",null,true)
	));
var Profils_de_droits_Module_3=new clAttribut("gt_libelle","groupetable",null);


	/* Ce composant repr�sente: groupetable.gt_libelle sous le nom "Module" */
var Compo_Profils_de_droits_Module_3=new clCompoListeDeroulanteSimple(Profils_de_droits_Module_3,new Array(clCompoListeDeroulanteSimple.prototype.FiltreParDefaut(),Filtre_Dep_Groupe_de_tables_0=new clInterfaceFiltrageRelationOnglet("Groupe de tables",Gerer_Groupe_de_tables,OuvrirOnglet_Profils_de_droits)),"Module");
var Joint_Esclave_Profils_de_droits_Module_3=new clJointureMulti("droit",
	new Array(
	new stJointure("groupetable","gt_numero","gt_numero",null,false)
	));
var Profils_de_droits_Lecture_4=new clAttribut("dr_select","droit",null);


	/* Ce composant repr�sente: droit.dr_select sous le nom "Lecture" */
var Compo_Profils_de_droits_Lecture_4=new clCompoCheckBox(Profils_de_droits_Lecture_4,null,"Lecture");
var Profils_de_droits_Ajout_5=new clAttribut("dr_insert","droit",null);


	/* Ce composant repr�sente: droit.dr_insert sous le nom "Ajout" */
var Compo_Profils_de_droits_Ajout_5=new clCompoCheckBox(Profils_de_droits_Ajout_5,null,"Ajout");
var Profils_de_droits_Modification_6=new clAttribut("dr_update","droit",null);


	/* Ce composant repr�sente: droit.dr_update sous le nom "Modification" */
var Compo_Profils_de_droits_Modification_6=new clCompoCheckBox(Profils_de_droits_Modification_6,null,"Modification");
var Profils_de_droits_Suppression_7=new clAttribut("dr_delete","droit",null);


	/* Ce composant repr�sente: droit.dr_delete sous le nom "Suppression" */
var Compo_Profils_de_droits_Suppression_7=new clCompoCheckBox(Profils_de_droits_Suppression_7,null,"Suppression");
var Profils_de_droits_Droits_2=new clEnsembleAttributs("droit",
	new Array(
	new clLiaison(null,Col_N0_Droits_De_Profils_de_droits_Droits_2)
	,new clLiaison(Joint_Col_N1_Sur_De_Profils_de_droits_Droits_2,Col_N1_Sur_De_Profils_de_droits_Droits_2)
	),
	new Array(
	new clLiaison(Joint_Esclave_Profils_de_droits_Module_3,Profils_de_droits_Module_3)
	,new clLiaison(null,Profils_de_droits_Lecture_4)
	,new clLiaison(null,Profils_de_droits_Ajout_5)
	,new clLiaison(null,Profils_de_droits_Modification_6)
	,new clLiaison(null,Profils_de_droits_Suppression_7)
	));

var Titre_Profils_de_droits_Droits_2=new Array("Droits","Sur");

	/* Ce composant repr�sente: des �l�ments de la table droit sous le nom "Droits" */
var Compo_Profils_de_droits_Droits_2=new clCompoListe(Profils_de_droits_Droits_2,null,Titre_Profils_de_droits_Droits_2,"Droits",true,false);
var Joint_Esclave_Profils_de_droits_Droits_2=new clJointureMulti("droitprofil",
	new Array(
	new stJointure("droit","dp_numero","dp_numero",null,false)
	));
var Profils_de_droits_Liste_des_profils_de_droits0=new clEnsembleAttributs("droitprofil",
	new Array(
	new clLiaison(null,Col_N0_Libell�_De_Profils_de_droits_Liste_des_profils_de_droits0)
	),
	new Array(
	new clLiaison(null,Profils_de_droits_Libell�_1)
	,new clLiaison(Joint_Esclave_Profils_de_droits_Droits_2,Profils_de_droits_Droits_2)
	));

var Titre_Profils_de_droits_Liste_des_profils_de_droits0=new Array("Libell�");

	/* Ce composant repr�sente: des �l�ments de la table droitprofil sous le nom "Liste des profils de droits" */
var Compo_Profils_de_droits_Liste_des_profils_de_droits0=new clCompoListe(Profils_de_droits_Liste_des_profils_de_droits0,new Array(new clInterfaceFiltrageVide()),Titre_Profils_de_droits_Liste_des_profils_de_droits0,"Liste des profils de droits",true,false);

	/* Ce composant repr�sente: droitprofil.undefined sous le nom "Liste des profils de droits" */
 if(ALeDroit(0,"droitprofil"))
 {
Compo_Profils_de_droits_Liste_des_profils_de_droits0.GenererXUL(top.document.getElementById("Profils_de_droits_Liste_des_profils_de_droits0"));

 }

	/* On l'ajoute au tableau global � l'indice 88*/
top.TAB_GLOBAL_COMPO[88]=Compo_Profils_de_droits_Liste_des_profils_de_droits0;

	/* Ce composant repr�sente: des �l�ments de la table droitprofil sous le nom "Libell�" */
 if(ALeDroit(0,"droitprofil"))
 {
Compo_Profils_de_droits_Libell�_1.GenererXUL(top.document.getElementById("Profils_de_droits_Liste_des_profils_de_droits0_Slaves"));

 }

	/* On l'ajoute au tableau global � l'indice 90*/
top.TAB_GLOBAL_COMPO[90]=Compo_Profils_de_droits_Libell�_1;

	/* Ce composant repr�sente: droit.undefined sous le nom "Droits" */
 if(ALeDroit(0,"droit"))
 {
Compo_Profils_de_droits_Droits_2.GenererXUL(top.document.getElementById("Profils_de_droits_Droits_2"));

 }

	/* On l'ajoute au tableau global � l'indice 91*/
top.TAB_GLOBAL_COMPO[91]=Compo_Profils_de_droits_Droits_2;

	/* Ce composant repr�sente: des �l�ments de la table groupetable sous le nom "Module" */
 if(ALeDroit(0,"groupetable"))
 {
Compo_Profils_de_droits_Module_3.GenererXUL(top.document.getElementById("Profils_de_droits_Droits_2_Slaves"));

 }

	/* On l'ajoute au tableau global � l'indice 94*/
top.TAB_GLOBAL_COMPO[94]=Compo_Profils_de_droits_Module_3;

	/* Ce composant repr�sente: des �l�ments de la table droit sous le nom "Lecture" */
 if(ALeDroit(0,"droit"))
 {
Compo_Profils_de_droits_Lecture_4.GenererXUL(top.document.getElementById("Profils_de_droits_Droits_2_Slaves"));

 }

	/* On l'ajoute au tableau global � l'indice 95*/
top.TAB_GLOBAL_COMPO[95]=Compo_Profils_de_droits_Lecture_4;

	/* Ce composant repr�sente: des �l�ments de la table droit sous le nom "Ajout" */
 if(ALeDroit(0,"droit"))
 {
Compo_Profils_de_droits_Ajout_5.GenererXUL(top.document.getElementById("Profils_de_droits_Droits_2_Slaves"));

 }

	/* On l'ajoute au tableau global � l'indice 96*/
top.TAB_GLOBAL_COMPO[96]=Compo_Profils_de_droits_Ajout_5;

	/* Ce composant repr�sente: des �l�ments de la table droit sous le nom "Modification" */
 if(ALeDroit(0,"droit"))
 {
Compo_Profils_de_droits_Modification_6.GenererXUL(top.document.getElementById("Profils_de_droits_Droits_2_Slaves"));

 }

	/* On l'ajoute au tableau global � l'indice 97*/
top.TAB_GLOBAL_COMPO[97]=Compo_Profils_de_droits_Modification_6;

	/* Ce composant repr�sente: des �l�ments de la table droit sous le nom "Suppression" */
 if(ALeDroit(0,"droit"))
 {
Compo_Profils_de_droits_Suppression_7.GenererXUL(top.document.getElementById("Profils_de_droits_Droits_2_Slaves"));

 }

	/* On l'ajoute au tableau global � l'indice 98*/
top.TAB_GLOBAL_COMPO[98]=Compo_Profils_de_droits_Suppression_7;
var Col_N0_Agent_De_Employ�s_Liste_des_employ�s0=new clAttribut("ag_libelle","agent",null);

var Joint_Col_N0_Agent_De_Employ�s_Liste_des_employ�s0=new clJointureMulti("employe",
	new Array(
	new stJointure("agent","em_agent","ag_numero",null,true)
	));
var Col_N1_Emploi_De_Employ�s_Liste_des_employ�s0=new clAttribut("em_emploi","employe",null);

var Col_N2_Service_De_Employ�s_Liste_des_employ�s0=new clAttribut("se_nom","service",null);

var Joint_Col_N2_Service_De_Employ�s_Liste_des_employ�s0=new clJointureMulti("employe",
	new Array(
	new stJointure("service","em_service","se_numero",null,true)
	));
var Employ�s_Agent_1=new clAttribut("ag_libelle","agent",null);


	/* Ce composant repr�sente: agent.ag_libelle sous le nom "Agent" */
var Compo_Employ�s_Agent_1=new clCompoListeDeroulanteSimple(Employ�s_Agent_1,new Array(clCompoListeDeroulanteSimple.prototype.FiltreParDefaut(),Filtre_Dep_Agents_1=new clInterfaceFiltrageRelationOnglet("Agents",Gerer_Agents,OuvrirOnglet_Employ�s)),"Agent");
var Joint_Esclave_Employ�s_Agent_1=new clJointureMulti("employe",
	new Array(
	new stJointure("agent","em_agent","ag_numero",null,false)
	));
var Employ�s_Login_2=new clAttribut("em_login","employe",null);


	/* Ce composant repr�sente: employe.em_login sous le nom "Login" */
var Compo_Employ�s_Login_2=new clCompoTextBox(Employ�s_Login_2,null,"Login",false,false);
var Employ�s_Mot_de_passe_3=new clAttribut("em_password","employe",null);


	/* Ce composant repr�sente: employe.em_password sous le nom "Mot de passe" */
var Compo_Employ�s_Mot_de_passe_3=new clCompoTextBox(Employ�s_Mot_de_passe_3,null,"Mot de passe",false,false);
var Employ�s_Administrateur__Peut_cr�er_d_autres_utilisateurs__4=new clAttribut("em_super","employe",null);


	/* Ce composant repr�sente: employe.em_super sous le nom "Administrateur (Peut cr�er d'autres utilisateurs)" */
var Compo_Employ�s_Administrateur__Peut_cr�er_d_autres_utilisateurs__4=new clCompoCheckBox(Employ�s_Administrateur__Peut_cr�er_d_autres_utilisateurs__4,null,"Administrateur (Peut cr�er d'autres utilisateurs)");
var Employ�s_Emploi_5=new clAttribut("em_emploi","employe",null);


	/* Ce composant repr�sente: employe.em_emploi sous le nom "Emploi" */
var Compo_Employ�s_Emploi_5=new clCompoTextBox(Employ�s_Emploi_5,null,"Emploi",false,false);
var Employ�s_Acc�s_comptabilit�_6=new clAttribut("ac_nom","acces",null);


	/* Ce composant repr�sente: acces.ac_nom sous le nom "Acc�s comptabilit�" */
var Compo_Employ�s_Acc�s_comptabilit�_6=new clCompoListeDeroulanteSimple(Employ�s_Acc�s_comptabilit�_6,new Array(clCompoListeDeroulanteSimple.prototype.FiltreParDefaut(),Filtre_Dep_Acc�s_0=new clInterfaceFiltrageRelationOnglet("Acc�s",Gerer_Acc�s,OuvrirOnglet_Employ�s)),"Acc�s comptabilit�");
var Joint_Esclave_Employ�s_Acc�s_comptabilit�_6=new clJointureMulti("employe",
	new Array(
	new stJointure("acces","em_acces","ac_numero",null,false)
	));
var Employ�s_Profil_de_droits_7=new clAttribut("dp_libelle","droitprofil",null);


	/* Ce composant repr�sente: droitprofil.dp_libelle sous le nom "Profil de droits" */
var Compo_Employ�s_Profil_de_droits_7=new clCompoListeDeroulanteSimple(Employ�s_Profil_de_droits_7,new Array(clCompoListeDeroulanteSimple.prototype.FiltreParDefaut(),Filtre_Dep_Profils_de_droits_0=new clInterfaceFiltrageRelationOnglet("Profils de droits",Gerer_Profils_de_droits,OuvrirOnglet_Employ�s)),"Profil de droits");
var Joint_Esclave_Employ�s_Profil_de_droits_7=new clJointureMulti("employe",
	new Array(
	new stJointure("droitprofil","dp_numero","dp_numero",null,false)
	));
var Employ�s_Liste_des_employ�s0=new clEnsembleAttributs("employe",
	new Array(
	new clLiaison(Joint_Col_N0_Agent_De_Employ�s_Liste_des_employ�s0,Col_N0_Agent_De_Employ�s_Liste_des_employ�s0)
	,new clLiaison(null,Col_N1_Emploi_De_Employ�s_Liste_des_employ�s0)
	,new clLiaison(Joint_Col_N2_Service_De_Employ�s_Liste_des_employ�s0,Col_N2_Service_De_Employ�s_Liste_des_employ�s0)
	),
	new Array(
	new clLiaison(Joint_Esclave_Employ�s_Agent_1,Employ�s_Agent_1)
	,new clLiaison(null,Employ�s_Login_2)
	,new clLiaison(null,Employ�s_Mot_de_passe_3)
	,new clLiaison(null,Employ�s_Administrateur__Peut_cr�er_d_autres_utilisateurs__4)
	,new clLiaison(null,Employ�s_Emploi_5)
	,new clLiaison(Joint_Esclave_Employ�s_Acc�s_comptabilit�_6,Employ�s_Acc�s_comptabilit�_6)
	,new clLiaison(Joint_Esclave_Employ�s_Profil_de_droits_7,Employ�s_Profil_de_droits_7)
	));

var Titre_Employ�s_Liste_des_employ�s0=new Array("Agent","Emploi","Service");

	/* Ce composant repr�sente: des �l�ments de la table employe sous le nom "Liste des employ�s" */
var Compo_Employ�s_Liste_des_employ�s0=new clCompoListe(Employ�s_Liste_des_employ�s0,new Array(new clInterfaceFiltrageVide()),Titre_Employ�s_Liste_des_employ�s0,"Liste des employ�s",true,false);

	/* Ce composant repr�sente: employe.undefined sous le nom "Liste des employ�s" */
 if(ALeDroit(0,"employe"))
 {
Compo_Employ�s_Liste_des_employ�s0.GenererXUL(top.document.getElementById("Employ�s_Liste_des_employ�s0"));

 }

	/* On l'ajoute au tableau global � l'indice 77*/
top.TAB_GLOBAL_COMPO[77]=Compo_Employ�s_Liste_des_employ�s0;

	/* Ce composant repr�sente: des �l�ments de la table agent sous le nom "Agent" */
 if(ALeDroit(0,"agent"))
 {
Compo_Employ�s_Agent_1.GenererXUL(top.document.getElementById("Employ�s_Liste_des_employ�s0_Slaves"));

 }

	/* On l'ajoute au tableau global � l'indice 81*/
top.TAB_GLOBAL_COMPO[81]=Compo_Employ�s_Agent_1;

	/* Ce composant repr�sente: des �l�ments de la table employe sous le nom "Login" */
 if(ALeDroit(0,"employe"))
 {
Compo_Employ�s_Login_2.GenererXUL(top.document.getElementById("Employ�s_Liste_des_employ�s0_Slaves"));

 }

	/* On l'ajoute au tableau global � l'indice 82*/
top.TAB_GLOBAL_COMPO[82]=Compo_Employ�s_Login_2;

	/* Ce composant repr�sente: des �l�ments de la table employe sous le nom "Mot de passe" */
 if(ALeDroit(0,"employe"))
 {
Compo_Employ�s_Mot_de_passe_3.GenererXUL(top.document.getElementById("Employ�s_Liste_des_employ�s0_Slaves"));

 }

	/* On l'ajoute au tableau global � l'indice 83*/
top.TAB_GLOBAL_COMPO[83]=Compo_Employ�s_Mot_de_passe_3;

	/* Ce composant repr�sente: des �l�ments de la table employe sous le nom "Administrateur (Peut cr�er d'autres utilisateurs)" */
 if(ALeDroit(0,"employe"))
 {
Compo_Employ�s_Administrateur__Peut_cr�er_d_autres_utilisateurs__4.GenererXUL(top.document.getElementById("Employ�s_Liste_des_employ�s0_Slaves"));

 }

	/* On l'ajoute au tableau global � l'indice 84*/
top.TAB_GLOBAL_COMPO[84]=Compo_Employ�s_Administrateur__Peut_cr�er_d_autres_utilisateurs__4;

	/* Ce composant repr�sente: des �l�ments de la table employe sous le nom "Emploi" */
 if(ALeDroit(0,"employe"))
 {
Compo_Employ�s_Emploi_5.GenererXUL(top.document.getElementById("Employ�s_Liste_des_employ�s0_Slaves"));

 }

	/* On l'ajoute au tableau global � l'indice 85*/
top.TAB_GLOBAL_COMPO[85]=Compo_Employ�s_Emploi_5;

	/* Ce composant repr�sente: des �l�ments de la table acces sous le nom "Acc�s comptabilit�" */
 if(ALeDroit(0,"acces"))
 {
Compo_Employ�s_Acc�s_comptabilit�_6.GenererXUL(top.document.getElementById("Employ�s_Liste_des_employ�s0_Slaves"));

 }

	/* On l'ajoute au tableau global � l'indice 86*/
top.TAB_GLOBAL_COMPO[86]=Compo_Employ�s_Acc�s_comptabilit�_6;

	/* Ce composant repr�sente: des �l�ments de la table droitprofil sous le nom "Profil de droits" */
 if(ALeDroit(0,"droitprofil"))
 {
Compo_Employ�s_Profil_de_droits_7.GenererXUL(top.document.getElementById("Employ�s_Liste_des_employ�s0_Slaves"));

 }

	/* On l'ajoute au tableau global � l'indice 87*/
top.TAB_GLOBAL_COMPO[87]=Compo_Employ�s_Profil_de_droits_7;
var Col_N0_Nom_De_�quipes_Liste_des_�quipes0=new clAttribut("eq_nom","equipe",null);

var �quipes_Nom_1=new clAttribut("eq_nom","equipe",null);


	/* Ce composant repr�sente: equipe.eq_nom sous le nom "Nom" */
var Compo_�quipes_Nom_1=new clCompoTextBox(�quipes_Nom_1,null,"Nom",false,false);
var �quipes_Liste_des_�quipes0=new clEnsembleAttributs("equipe",
	new Array(
	new clLiaison(null,Col_N0_Nom_De_�quipes_Liste_des_�quipes0)
	),
	new Array(
	new clLiaison(null,�quipes_Nom_1)
	));

var Titre_�quipes_Liste_des_�quipes0=new Array("Nom");

	/* Ce composant repr�sente: des �l�ments de la table equipe sous le nom "Liste des �quipes" */
var Compo_�quipes_Liste_des_�quipes0=new clCompoListe(�quipes_Liste_des_�quipes0,new Array(new clInterfaceFiltrageVide()),Titre_�quipes_Liste_des_�quipes0,"Liste des �quipes",true,false);

	/* Ce composant repr�sente: equipe.undefined sous le nom "Liste des �quipes" */
 if(ALeDroit(0,"equipe"))
 {
Compo_�quipes_Liste_des_�quipes0.GenererXUL(top.document.getElementById("�quipes_Liste_des_�quipes0"));

 }

	/* On l'ajoute au tableau global � l'indice 120*/
top.TAB_GLOBAL_COMPO[120]=Compo_�quipes_Liste_des_�quipes0;

	/* Ce composant repr�sente: des �l�ments de la table equipe sous le nom "Nom" */
 if(ALeDroit(0,"equipe"))
 {
Compo_�quipes_Nom_1.GenererXUL(top.document.getElementById("�quipes_Liste_des_�quipes0_Slaves"));

 }

	/* On l'ajoute au tableau global � l'indice 122*/
top.TAB_GLOBAL_COMPO[122]=Compo_�quipes_Nom_1;
var Col_N0_Libell�_De_Etats_de_personne_Liste_des_�tats_de_personne0=new clAttribut("ep_libelle","etatpersonne",null);

var Etats_de_personne_Libell�_1=new clAttribut("ep_libelle","etatpersonne",null);


	/* Ce composant repr�sente: etatpersonne.ep_libelle sous le nom "Libell�" */
var Compo_Etats_de_personne_Libell�_1=new clCompoTextBox(Etats_de_personne_Libell�_1,null,"Libell�",false,false);
var Etats_de_personne_Liste_des_�tats_de_personne0=new clEnsembleAttributs("etatpersonne",
	new Array(
	new clLiaison(null,Col_N0_Libell�_De_Etats_de_personne_Liste_des_�tats_de_personne0)
	),
	new Array(
	new clLiaison(null,Etats_de_personne_Libell�_1)
	));

var Titre_Etats_de_personne_Liste_des_�tats_de_personne0=new Array("Libell�");

	/* Ce composant repr�sente: des �l�ments de la table etatpersonne sous le nom "Liste des �tats de personne" */
var Compo_Etats_de_personne_Liste_des_�tats_de_personne0=new clCompoListe(Etats_de_personne_Liste_des_�tats_de_personne0,new Array(new clInterfaceFiltrageVide()),Titre_Etats_de_personne_Liste_des_�tats_de_personne0,"Liste des �tats de personne",true,false);

	/* Ce composant repr�sente: etatpersonne.undefined sous le nom "Liste des �tats de personne" */
 if(ALeDroit(0,"etatpersonne"))
 {
Compo_Etats_de_personne_Liste_des_�tats_de_personne0.GenererXUL(top.document.getElementById("Etats_de_personne_Liste_des_�tats_de_personne0"));

 }

	/* On l'ajoute au tableau global � l'indice 50*/
top.TAB_GLOBAL_COMPO[50]=Compo_Etats_de_personne_Liste_des_�tats_de_personne0;

	/* Ce composant repr�sente: des �l�ments de la table etatpersonne sous le nom "Libell�" */
 if(ALeDroit(0,"etatpersonne"))
 {
Compo_Etats_de_personne_Libell�_1.GenererXUL(top.document.getElementById("Etats_de_personne_Liste_des_�tats_de_personne0_Slaves"));

 }

	/* On l'ajoute au tableau global � l'indice 52*/
top.TAB_GLOBAL_COMPO[52]=Compo_Etats_de_personne_Libell�_1;
var Col_N0_Libell�_De_Groupe_de_tables_Liste_des_groupes_de_tables0=new clAttribut("gt_libelle","groupetable",null);

var Col_N1_Tables_De_Groupe_de_tables_Liste_des_groupes_de_tables0=new clAttribut("gt_tables","groupetable",null);

var Groupe_de_tables_Libell�_1=new clAttribut("gt_libelle","groupetable",null);


	/* Ce composant repr�sente: groupetable.gt_libelle sous le nom "Libell�" */
var Compo_Groupe_de_tables_Libell�_1=new clCompoTextBox(Groupe_de_tables_Libell�_1,null,"Libell�",false,false);
var Groupe_de_tables_Tables_2=new clAttribut("gt_tables","groupetable",null);


	/* Ce composant repr�sente: groupetable.gt_tables sous le nom "Tables" */
var Compo_Groupe_de_tables_Tables_2=new clCompoTextBox(Groupe_de_tables_Tables_2,null,"Tables",false,true);
var Groupe_de_tables_Liste_des_groupes_de_tables0=new clEnsembleAttributs("groupetable",
	new Array(
	new clLiaison(null,Col_N0_Libell�_De_Groupe_de_tables_Liste_des_groupes_de_tables0)
	,new clLiaison(null,Col_N1_Tables_De_Groupe_de_tables_Liste_des_groupes_de_tables0)
	),
	new Array(
	new clLiaison(null,Groupe_de_tables_Libell�_1)
	,new clLiaison(null,Groupe_de_tables_Tables_2)
	));

var Titre_Groupe_de_tables_Liste_des_groupes_de_tables0=new Array("Libell�","Tables");

	/* Ce composant repr�sente: des �l�ments de la table groupetable sous le nom "Liste des groupes de tables" */
var Compo_Groupe_de_tables_Liste_des_groupes_de_tables0=new clCompoListe(Groupe_de_tables_Liste_des_groupes_de_tables0,new Array(new clInterfaceFiltrageVide()),Titre_Groupe_de_tables_Liste_des_groupes_de_tables0,"Liste des groupes de tables",true,false);

	/* Ce composant repr�sente: groupetable.undefined sous le nom "Liste des groupes de tables" */
 if(ALeDroit(0,"groupetable"))
 {
Compo_Groupe_de_tables_Liste_des_groupes_de_tables0.GenererXUL(top.document.getElementById("Groupe_de_tables_Liste_des_groupes_de_tables0"));

 }

	/* On l'ajoute au tableau global � l'indice 99*/
top.TAB_GLOBAL_COMPO[99]=Compo_Groupe_de_tables_Liste_des_groupes_de_tables0;

	/* Ce composant repr�sente: des �l�ments de la table groupetable sous le nom "Libell�" */
 if(ALeDroit(0,"groupetable"))
 {
Compo_Groupe_de_tables_Libell�_1.GenererXUL(top.document.getElementById("Groupe_de_tables_Liste_des_groupes_de_tables0_Slaves"));

 }

	/* On l'ajoute au tableau global � l'indice 102*/
top.TAB_GLOBAL_COMPO[102]=Compo_Groupe_de_tables_Libell�_1;

	/* Ce composant repr�sente: des �l�ments de la table groupetable sous le nom "Tables" */
 if(ALeDroit(0,"groupetable"))
 {
Compo_Groupe_de_tables_Tables_2.GenererXUL(top.document.getElementById("Groupe_de_tables_Liste_des_groupes_de_tables0_Slaves"));

 }

	/* On l'ajoute au tableau global � l'indice 103*/
top.TAB_GLOBAL_COMPO[103]=Compo_Groupe_de_tables_Tables_2;
var Col_N0_Libell�_De_Groupes_de_cantons_Liste_des_groupes_de_cantons0=new clAttribut("gc_nom","groupecanton",null);

var Groupes_de_cantons_Libell�_1=new clAttribut("gc_nom","groupecanton",null);


	/* Ce composant repr�sente: groupecanton.gc_nom sous le nom "Libell�" */
var Compo_Groupes_de_cantons_Libell�_1=new clCompoTextBox(Groupes_de_cantons_Libell�_1,null,"Libell�",false,false);
var Col_N0_Nom_De_Groupes_de_cantons_Cantons_appartenant_au_groupe_3=new clAttribut("ct_nom","canton",null);

var Groupes_de_cantons_Cantons_appartenant_au_groupe_3=new clEnsembleAttributs("canton",
	new Array(
	new clLiaison(null,Col_N0_Nom_De_Groupes_de_cantons_Cantons_appartenant_au_groupe_3)
	),
	null);

var Titre_Groupes_de_cantons_Cantons_appartenant_au_groupe_3=new Array("Nom");

	/* Ce composant repr�sente: des �l�ments de la table canton sous le nom "Cantons appartenant au groupe" */
var Compo_Groupes_de_cantons_Cantons_appartenant_au_groupe_3=new clCompoListe(Groupes_de_cantons_Cantons_appartenant_au_groupe_3,null,Titre_Groupes_de_cantons_Cantons_appartenant_au_groupe_3,"Cantons appartenant au groupe",true,true);
var Joint_Esclave_Groupes_de_cantons_Cantons_appartenant_au_groupe_3=new clJointureMulti("groupecanton",
	new Array(
	new stJointure("appartienta","gc_numero","gc_numero",null,false)
	,new stJointure("canton","ct_numero","ct_numero",null,false)
	));
var Groupes_de_cantons_Liste_des_groupes_de_cantons0=new clEnsembleAttributs("groupecanton",
	new Array(
	new clLiaison(null,Col_N0_Libell�_De_Groupes_de_cantons_Liste_des_groupes_de_cantons0)
	),
	new Array(
	new clLiaison(null,Groupes_de_cantons_Libell�_1)
	,new clLiaison(Joint_Esclave_Groupes_de_cantons_Cantons_appartenant_au_groupe_3,Groupes_de_cantons_Cantons_appartenant_au_groupe_3)
	));

var Titre_Groupes_de_cantons_Liste_des_groupes_de_cantons0=new Array("Libell�");

	/* Ce composant repr�sente: des �l�ments de la table groupecanton sous le nom "Liste des groupes de cantons" */
var Compo_Groupes_de_cantons_Liste_des_groupes_de_cantons0=new clCompoListe(Groupes_de_cantons_Liste_des_groupes_de_cantons0,new Array(new clInterfaceFiltrageVide()),Titre_Groupes_de_cantons_Liste_des_groupes_de_cantons0,"Liste des groupes de cantons",true,false);
var Col_N0_Nom_De_Groupes_de_cantons_Indpt_Cantons_disponibles_2=new clAttribut("ct_nom","canton",null);

var Col_N1_N__De_Groupes_de_cantons_Indpt_Cantons_disponibles_2=new clAttribut("ct_numero","canton",null);

var Groupes_de_cantons_Indpt_Cantons_disponibles_2=new clEnsembleAttributs("canton",
	new Array(
	new clLiaison(null,Col_N0_Nom_De_Groupes_de_cantons_Indpt_Cantons_disponibles_2)
	,new clLiaison(null,Col_N1_N__De_Groupes_de_cantons_Indpt_Cantons_disponibles_2)
	),
	null);

var Titre_Groupes_de_cantons_Indpt_Cantons_disponibles_2=new Array("Nom","N�");

	/* Ce composant repr�sente: des �l�ments de la table canton sous le nom "Cantons disponibles" */
var Compo_Groupes_de_cantons_Indpt_Cantons_disponibles_2=new clCompoListe(Groupes_de_cantons_Indpt_Cantons_disponibles_2,new Array(new clInterfaceFiltrageVide()),Titre_Groupes_de_cantons_Indpt_Cantons_disponibles_2,"Cantons disponibles",true,true);

	/* Ce composant repr�sente: groupecanton.undefined sous le nom "Liste des groupes de cantons" */
 if(ALeDroit(0,"groupecanton"))
 {
Compo_Groupes_de_cantons_Liste_des_groupes_de_cantons0.GenererXUL(top.document.getElementById("Groupes_de_cantons_Liste_des_groupes_de_cantons0"));

 }

	/* On l'ajoute au tableau global � l'indice 35*/
top.TAB_GLOBAL_COMPO[35]=Compo_Groupes_de_cantons_Liste_des_groupes_de_cantons0;

	/* Ce composant repr�sente: des �l�ments de la table groupecanton sous le nom "Libell�" */
 if(ALeDroit(0,"groupecanton"))
 {
Compo_Groupes_de_cantons_Libell�_1.GenererXUL(top.document.getElementById("Groupes_de_cantons_Liste_des_groupes_de_cantons0_Slaves"));

 }

	/* On l'ajoute au tableau global � l'indice 37*/
top.TAB_GLOBAL_COMPO[37]=Compo_Groupes_de_cantons_Libell�_1;

	/* Ce composant repr�sente: canton.undefined sous le nom "Cantons disponibles" */
 if(ALeDroit(0,"canton"))
 {
Compo_Groupes_de_cantons_Indpt_Cantons_disponibles_2.GenererXUL(top.document.getElementById("ListeDessus_Groupes_de_cantons_Cantons_appartenant_au_groupe_3"));

 }

	/* On l'ajoute au tableau global � l'indice 38*/
top.TAB_GLOBAL_COMPO[38]=Compo_Groupes_de_cantons_Indpt_Cantons_disponibles_2;

	/* Ce composant repr�sente: canton.undefined sous le nom "Cantons appartenant au groupe" */
 if(ALeDroit(0,"canton"))
 {
Compo_Groupes_de_cantons_Cantons_appartenant_au_groupe_3.GenererXUL(top.document.getElementById("Groupes_de_cantons_Cantons_appartenant_au_groupe_3"));

 }

	/* On l'ajoute au tableau global � l'indice 41*/
top.TAB_GLOBAL_COMPO[41]=Compo_Groupes_de_cantons_Cantons_appartenant_au_groupe_3;
var Col_N0_Libell�_De_Mod�les_d_impressions_Liste_des_mod�les_d_impressions0=new clAttribut("im_libelle","impression",null);

var Mod�les_d_impressions_Libell�_1=new clAttribut("im_libelle","impression",null);


	/* Ce composant repr�sente: impression.im_libelle sous le nom "Libell�" */
var Compo_Mod�les_d_impressions_Libell�_1=new clCompoTextBox(Mod�les_d_impressions_Libell�_1,null,"Libell�",false,false);
var Mod�les_d_impressions_Nom_logique_2=new clAttribut("im_nom","impression",null);


	/* Ce composant repr�sente: impression.im_nom sous le nom "Nom logique" */
var Compo_Mod�les_d_impressions_Nom_logique_2=new clCompoTextBox(Mod�les_d_impressions_Nom_logique_2,null,"Nom logique",false,false);
var Mod�les_d_impressions_Mod�le_3=new clAttribut("im_modele","impression",null);


	/* Ce composant repr�sente: impression.im_modele sous le nom "Mod�le" */
var Compo_Mod�les_d_impressions_Mod�le_3=new clCompoTextBox(Mod�les_d_impressions_Mod�le_3,null,"Mod�le",false,true);
var Mod�les_d_impressions_Mod�le_utilis�_par_d�faut_4=new clAttribut("im_defaut","impression",null);


	/* Ce composant repr�sente: impression.im_defaut sous le nom "Mod�le utilis� par d�faut" */
var Compo_Mod�les_d_impressions_Mod�le_utilis�_par_d�faut_4=new clCompoCheckBox(Mod�les_d_impressions_Mod�le_utilis�_par_d�faut_4,null,"Mod�le utilis� par d�faut");
var Mod�les_d_impressions_Table_utilis�e_5=new clAttribut("im_keytable","impression",null);


	/* Ce composant repr�sente: impression.im_keytable sous le nom "Table utilis�e" */
var Compo_Mod�les_d_impressions_Table_utilis�e_5=new clCompoTextBox(Mod�les_d_impressions_Table_utilis�e_5,null,"Table utilis�e",false,false);
var Mod�les_d_impressions_Sa_cl�_6=new clAttribut("im_keycle","impression",null);


	/* Ce composant repr�sente: impression.im_keycle sous le nom "Sa cl�" */
var Compo_Mod�les_d_impressions_Sa_cl�_6=new clCompoTextBox(Mod�les_d_impressions_Sa_cl�_6,null,"Sa cl�",false,false);
var Mod�les_d_impressions_Son_champs_date_7=new clAttribut("im_keydate","impression",null);


	/* Ce composant repr�sente: impression.im_keydate sous le nom "Son champs date" */
var Compo_Mod�les_d_impressions_Son_champs_date_7=new clCompoTextBox(Mod�les_d_impressions_Son_champs_date_7,null,"Son champs date",false,false);
var Mod�les_d_impressions_Liste_des_mod�les_d_impressions0=new clEnsembleAttributs("impression",
	new Array(
	new clLiaison(null,Col_N0_Libell�_De_Mod�les_d_impressions_Liste_des_mod�les_d_impressions0)
	),
	new Array(
	new clLiaison(null,Mod�les_d_impressions_Libell�_1)
	,new clLiaison(null,Mod�les_d_impressions_Nom_logique_2)
	,new clLiaison(null,Mod�les_d_impressions_Mod�le_3)
	,new clLiaison(null,Mod�les_d_impressions_Mod�le_utilis�_par_d�faut_4)
	,new clLiaison(null,Mod�les_d_impressions_Table_utilis�e_5)
	,new clLiaison(null,Mod�les_d_impressions_Sa_cl�_6)
	,new clLiaison(null,Mod�les_d_impressions_Son_champs_date_7)
	));

var Titre_Mod�les_d_impressions_Liste_des_mod�les_d_impressions0=new Array("Libell�");

	/* Ce composant repr�sente: des �l�ments de la table impression sous le nom "Liste des mod�les d'impressions" */
var Compo_Mod�les_d_impressions_Liste_des_mod�les_d_impressions0=new clCompoListe(Mod�les_d_impressions_Liste_des_mod�les_d_impressions0,new Array(new clInterfaceFiltrageVide()),Titre_Mod�les_d_impressions_Liste_des_mod�les_d_impressions0,"Liste des mod�les d'impressions",true,false);

	/* Ce composant repr�sente: impression.undefined sous le nom "Liste des mod�les d'impressions" */
 if(ALeDroit(0,"impression"))
 {
Compo_Mod�les_d_impressions_Liste_des_mod�les_d_impressions0.GenererXUL(top.document.getElementById("Mod�les_d_impressions_Liste_des_mod�les_d_impressions0"));

 }

	/* On l'ajoute au tableau global � l'indice 217*/
top.TAB_GLOBAL_COMPO[217]=Compo_Mod�les_d_impressions_Liste_des_mod�les_d_impressions0;

	/* Ce composant repr�sente: des �l�ments de la table impression sous le nom "Libell�" */
 if(ALeDroit(0,"impression"))
 {
Compo_Mod�les_d_impressions_Libell�_1.GenererXUL(top.document.getElementById("Mod�les_d_impressions_Liste_des_mod�les_d_impressions0_Slaves"));

 }

	/* On l'ajoute au tableau global � l'indice 219*/
top.TAB_GLOBAL_COMPO[219]=Compo_Mod�les_d_impressions_Libell�_1;

	/* Ce composant repr�sente: des �l�ments de la table impression sous le nom "Nom logique" */
 if(ALeDroit(0,"impression"))
 {
Compo_Mod�les_d_impressions_Nom_logique_2.GenererXUL(top.document.getElementById("Mod�les_d_impressions_Liste_des_mod�les_d_impressions0_Slaves"));

 }

	/* On l'ajoute au tableau global � l'indice 220*/
top.TAB_GLOBAL_COMPO[220]=Compo_Mod�les_d_impressions_Nom_logique_2;

	/* Ce composant repr�sente: des �l�ments de la table impression sous le nom "Mod�le" */
 if(ALeDroit(0,"impression"))
 {
Compo_Mod�les_d_impressions_Mod�le_3.GenererXUL(top.document.getElementById("Mod�les_d_impressions_Liste_des_mod�les_d_impressions0_Slaves"));

 }

	/* On l'ajoute au tableau global � l'indice 221*/
top.TAB_GLOBAL_COMPO[221]=Compo_Mod�les_d_impressions_Mod�le_3;

	/* Ce composant repr�sente: des �l�ments de la table impression sous le nom "Mod�le utilis� par d�faut" */
 if(ALeDroit(0,"impression"))
 {
Compo_Mod�les_d_impressions_Mod�le_utilis�_par_d�faut_4.GenererXUL(top.document.getElementById("Mod�les_d_impressions_Liste_des_mod�les_d_impressions0_Slaves"));

 }

	/* On l'ajoute au tableau global � l'indice 222*/
top.TAB_GLOBAL_COMPO[222]=Compo_Mod�les_d_impressions_Mod�le_utilis�_par_d�faut_4;

	/* Ce composant repr�sente: des �l�ments de la table impression sous le nom "Table utilis�e" */
 if(ALeDroit(0,"impression"))
 {
Compo_Mod�les_d_impressions_Table_utilis�e_5.GenererXUL(top.document.getElementById("Mod�les_d_impressions_Liste_des_mod�les_d_impressions0_Slaves"));

 }

	/* On l'ajoute au tableau global � l'indice 223*/
top.TAB_GLOBAL_COMPO[223]=Compo_Mod�les_d_impressions_Table_utilis�e_5;

	/* Ce composant repr�sente: des �l�ments de la table impression sous le nom "Sa cl�" */
 if(ALeDroit(0,"impression"))
 {
Compo_Mod�les_d_impressions_Sa_cl�_6.GenererXUL(top.document.getElementById("Mod�les_d_impressions_Liste_des_mod�les_d_impressions0_Slaves"));

 }

	/* On l'ajoute au tableau global � l'indice 224*/
top.TAB_GLOBAL_COMPO[224]=Compo_Mod�les_d_impressions_Sa_cl�_6;

	/* Ce composant repr�sente: des �l�ments de la table impression sous le nom "Son champs date" */
 if(ALeDroit(0,"impression"))
 {
Compo_Mod�les_d_impressions_Son_champs_date_7.GenererXUL(top.document.getElementById("Mod�les_d_impressions_Liste_des_mod�les_d_impressions0_Slaves"));

 }

	/* On l'ajoute au tableau global � l'indice 225*/
top.TAB_GLOBAL_COMPO[225]=Compo_Mod�les_d_impressions_Son_champs_date_7;
var Col_N0_Libell�_De_Impressions_Liste_des_mod�les_d_impressions0=new clAttribut("im_libelle","table_impression",null);

var Col_N1_Soci�t�_De_Impressions_Liste_des_mod�les_d_impressions0=new clAttribut("so_libelle","societe",null);

var Joint_Col_N1_Soci�t�_De_Impressions_Liste_des_mod�les_d_impressions0=new clJointureMulti("table_impression",
	new Array(
	new stJointure("societe","im_societe","so_numero",null,true)
	));
var Impressions_Soci�t�_1=new clAttribut("so_libelle","societe",null);


	/* Ce composant repr�sente: societe.so_libelle sous le nom "Soci�t�" */
var Compo_Impressions_Soci�t�_1=new clCompoListeDeroulanteSimple(Impressions_Soci�t�_1,null,"Soci�t�");
var Joint_Esclave_Impressions_Soci�t�_1=new clJointureMulti("table_impression",
	new Array(
	new stJointure("societe","im_societe","so_numero",null,false)
	));
var Impressions_Libell�_2=new clAttribut("im_libelle","table_impression",null);


	/* Ce composant repr�sente: table_impression.im_libelle sous le nom "Libell�" */
var Compo_Impressions_Libell�_2=new clCompoTextBox(Impressions_Libell�_2,null,"Libell�",false,false);
var Impressions_Nom_logique_3=new clAttribut("im_nom","table_impression",null);


	/* Ce composant repr�sente: table_impression.im_nom sous le nom "Nom logique" */
var Compo_Impressions_Nom_logique_3=new clCompoTextBox(Impressions_Nom_logique_3,null,"Nom logique",false,false);
var Impressions_Mod�le_4=new clAttribut("im_modele","table_impression",null);


	/* Ce composant repr�sente: table_impression.im_modele sous le nom "Mod�le" */
var Compo_Impressions_Mod�le_4=new clCompoTextBox(Impressions_Mod�le_4,null,"Mod�le",false,true);
var Impressions_Mod�le_utilis�_par_d�faut_5=new clAttribut("im_defaut","table_impression",null);


	/* Ce composant repr�sente: table_impression.im_defaut sous le nom "Mod�le utilis� par d�faut" */
var Compo_Impressions_Mod�le_utilis�_par_d�faut_5=new clCompoCheckBox(Impressions_Mod�le_utilis�_par_d�faut_5,null,"Mod�le utilis� par d�faut");
var Impressions_Table_utilis�e_6=new clAttribut("im_keytable","table_impression",null);


	/* Ce composant repr�sente: table_impression.im_keytable sous le nom "Table utilis�e" */
var Compo_Impressions_Table_utilis�e_6=new clCompoTextBox(Impressions_Table_utilis�e_6,null,"Table utilis�e",false,false);
var Impressions_Sa_cl�_7=new clAttribut("im_keycle","table_impression",null);


	/* Ce composant repr�sente: table_impression.im_keycle sous le nom "Sa cl�" */
var Compo_Impressions_Sa_cl�_7=new clCompoTextBox(Impressions_Sa_cl�_7,null,"Sa cl�",false,false);
var Impressions_Son_champs_date_8=new clAttribut("im_keydate","table_impression",null);


	/* Ce composant repr�sente: table_impression.im_keydate sous le nom "Son champs date" */
var Compo_Impressions_Son_champs_date_8=new clCompoTextBox(Impressions_Son_champs_date_8,null,"Son champs date",false,false);
var Impressions_Liste_des_mod�les_d_impressions0=new clEnsembleAttributs("table_impression",
	new Array(
	new clLiaison(null,Col_N0_Libell�_De_Impressions_Liste_des_mod�les_d_impressions0)
	,new clLiaison(Joint_Col_N1_Soci�t�_De_Impressions_Liste_des_mod�les_d_impressions0,Col_N1_Soci�t�_De_Impressions_Liste_des_mod�les_d_impressions0)
	),
	new Array(
	new clLiaison(Joint_Esclave_Impressions_Soci�t�_1,Impressions_Soci�t�_1)
	,new clLiaison(null,Impressions_Libell�_2)
	,new clLiaison(null,Impressions_Nom_logique_3)
	,new clLiaison(null,Impressions_Mod�le_4)
	,new clLiaison(null,Impressions_Mod�le_utilis�_par_d�faut_5)
	,new clLiaison(null,Impressions_Table_utilis�e_6)
	,new clLiaison(null,Impressions_Sa_cl�_7)
	,new clLiaison(null,Impressions_Son_champs_date_8)
	));

var Titre_Impressions_Liste_des_mod�les_d_impressions0=new Array("Libell�","Soci�t�");

	/* Ce composant repr�sente: des �l�ments de la table table_impression sous le nom "Liste des mod�les d'impressions" */
var Compo_Impressions_Liste_des_mod�les_d_impressions0=new clCompoListe(Impressions_Liste_des_mod�les_d_impressions0,new Array(new clInterfaceFiltrageVide()),Titre_Impressions_Liste_des_mod�les_d_impressions0,"Liste des mod�les d'impressions",true,false);

	/* Ce composant repr�sente: table_impression.undefined sous le nom "Liste des mod�les d'impressions" */
 if(ALeDroit(0,"table_impression"))
 {
Compo_Impressions_Liste_des_mod�les_d_impressions0.GenererXUL(top.document.getElementById("Impressions_Liste_des_mod�les_d_impressions0"));

 }

	/* On l'ajoute au tableau global � l'indice 226*/
top.TAB_GLOBAL_COMPO[226]=Compo_Impressions_Liste_des_mod�les_d_impressions0;

	/* Ce composant repr�sente: des �l�ments de la table societe sous le nom "Soci�t�" */
 if(ALeDroit(0,"societe"))
 {
Compo_Impressions_Soci�t�_1.GenererXUL(top.document.getElementById("Impressions_Liste_des_mod�les_d_impressions0_Slaves"));

 }

	/* On l'ajoute au tableau global � l'indice 229*/
top.TAB_GLOBAL_COMPO[229]=Compo_Impressions_Soci�t�_1;

	/* Ce composant repr�sente: des �l�ments de la table table_impression sous le nom "Libell�" */
 if(ALeDroit(0,"table_impression"))
 {
Compo_Impressions_Libell�_2.GenererXUL(top.document.getElementById("Impressions_Liste_des_mod�les_d_impressions0_Slaves"));

 }

	/* On l'ajoute au tableau global � l'indice 230*/
top.TAB_GLOBAL_COMPO[230]=Compo_Impressions_Libell�_2;

	/* Ce composant repr�sente: des �l�ments de la table table_impression sous le nom "Nom logique" */
 if(ALeDroit(0,"table_impression"))
 {
Compo_Impressions_Nom_logique_3.GenererXUL(top.document.getElementById("Impressions_Liste_des_mod�les_d_impressions0_Slaves"));

 }

	/* On l'ajoute au tableau global � l'indice 231*/
top.TAB_GLOBAL_COMPO[231]=Compo_Impressions_Nom_logique_3;

	/* Ce composant repr�sente: des �l�ments de la table table_impression sous le nom "Mod�le" */
 if(ALeDroit(0,"table_impression"))
 {
Compo_Impressions_Mod�le_4.GenererXUL(top.document.getElementById("Impressions_Liste_des_mod�les_d_impressions0_Slaves"));

 }

	/* On l'ajoute au tableau global � l'indice 232*/
top.TAB_GLOBAL_COMPO[232]=Compo_Impressions_Mod�le_4;

	/* Ce composant repr�sente: des �l�ments de la table table_impression sous le nom "Mod�le utilis� par d�faut" */
 if(ALeDroit(0,"table_impression"))
 {
Compo_Impressions_Mod�le_utilis�_par_d�faut_5.GenererXUL(top.document.getElementById("Impressions_Liste_des_mod�les_d_impressions0_Slaves"));

 }

	/* On l'ajoute au tableau global � l'indice 233*/
top.TAB_GLOBAL_COMPO[233]=Compo_Impressions_Mod�le_utilis�_par_d�faut_5;

	/* Ce composant repr�sente: des �l�ments de la table table_impression sous le nom "Table utilis�e" */
 if(ALeDroit(0,"table_impression"))
 {
Compo_Impressions_Table_utilis�e_6.GenererXUL(top.document.getElementById("Impressions_Liste_des_mod�les_d_impressions0_Slaves"));

 }

	/* On l'ajoute au tableau global � l'indice 234*/
top.TAB_GLOBAL_COMPO[234]=Compo_Impressions_Table_utilis�e_6;

	/* Ce composant repr�sente: des �l�ments de la table table_impression sous le nom "Sa cl�" */
 if(ALeDroit(0,"table_impression"))
 {
Compo_Impressions_Sa_cl�_7.GenererXUL(top.document.getElementById("Impressions_Liste_des_mod�les_d_impressions0_Slaves"));

 }

	/* On l'ajoute au tableau global � l'indice 235*/
top.TAB_GLOBAL_COMPO[235]=Compo_Impressions_Sa_cl�_7;

	/* Ce composant repr�sente: des �l�ments de la table table_impression sous le nom "Son champs date" */
 if(ALeDroit(0,"table_impression"))
 {
Compo_Impressions_Son_champs_date_8.GenererXUL(top.document.getElementById("Impressions_Liste_des_mod�les_d_impressions0_Slaves"));

 }

	/* On l'ajoute au tableau global � l'indice 236*/
top.TAB_GLOBAL_COMPO[236]=Compo_Impressions_Son_champs_date_8;
var Col_N0_Libell�_De_Mod�les_Liste_des_mod�les0=new clAttribut("mo_libelle","modele",null);

var Mod�les_Libell�_1=new clAttribut("mo_libelle","modele",null);


	/* Ce composant repr�sente: modele.mo_libelle sous le nom "Libell�" */
var Compo_Mod�les_Libell�_1=new clCompoTextBox(Mod�les_Libell�_1,null,"Libell�",false,false);
var Col_N0_Produit_De_Mod�les_Lignes_du_mod�le_2=new clAttribut("pd_libelle","produit",null);

var Joint_Col_N0_Produit_De_Mod�les_Lignes_du_mod�le_2=new clJointureMulti("lignemodele",
	new Array(
	new stJointure("produit","pd_numero","pd_numero",null,true)
	));
var Col_N1_Montant_HT_De_Mod�les_Lignes_du_mod�le_2=new clAttribut("lm_montantht","lignemodele",null);

var Col_N2_Montant_TTC_De_Mod�les_Lignes_du_mod�le_2=new clAttribut("lm_montantttc","lignemodele",null);

var Col_N3_Qt�__De_Mod�les_Lignes_du_mod�le_2=new clAttribut("lm_quantite","lignemodele",null);

var Mod�les_Produit_3=new clAttribut("pd_libelle","produit",null);


	/* Ce composant repr�sente: produit.pd_libelle sous le nom "Produit" */
var Compo_Mod�les_Produit_3=new clCompoListeDeroulanteSimple(Mod�les_Produit_3,new Array(clCompoListeDeroulanteSimple.prototype.FiltreParDefaut(),Filtre_Dep_Produits_1=new clInterfaceFiltrageRelationOnglet("Produits",Gerer_Produits,OuvrirOnglet_Mod�les)),"Produit");
var Joint_Esclave_Mod�les_Produit_3=new clJointureMulti("lignemodele",
	new Array(
	new stJointure("produit","pd_numero","pd_numero",null,false)
	));
var Mod�les_Montant_HT_4=new clAttribut("lm_montantht","lignemodele",null);


	/* Ce composant repr�sente: lignemodele.lm_montantht sous le nom "Montant HT" */
var Compo_Mod�les_Montant_HT_4=new clCompoTextBox(Mod�les_Montant_HT_4,null,"Montant HT",false,false);
var Mod�les_Montant_TTC_5=new clAttribut("lm_montantttc","lignemodele",null);


	/* Ce composant repr�sente: lignemodele.lm_montantttc sous le nom "Montant TTC" */
var Compo_Mod�les_Montant_TTC_5=new clCompoTextBox(Mod�les_Montant_TTC_5,null,"Montant TTC",false,false);
var Mod�les_Quantit�_6=new clAttribut("lm_quantite","lignemodele",null);


	/* Ce composant repr�sente: lignemodele.lm_quantite sous le nom "Quantit�" */
var Compo_Mod�les_Quantit�_6=new clCompoTextBox(Mod�les_Quantit�_6,null,"Quantit�",false,false);
var Mod�les_Lignes_du_mod�le_2=new clEnsembleAttributs("lignemodele",
	new Array(
	new clLiaison(Joint_Col_N0_Produit_De_Mod�les_Lignes_du_mod�le_2,Col_N0_Produit_De_Mod�les_Lignes_du_mod�le_2)
	,new clLiaison(null,Col_N1_Montant_HT_De_Mod�les_Lignes_du_mod�le_2)
	,new clLiaison(null,Col_N2_Montant_TTC_De_Mod�les_Lignes_du_mod�le_2)
	,new clLiaison(null,Col_N3_Qt�__De_Mod�les_Lignes_du_mod�le_2)
	),
	new Array(
	new clLiaison(Joint_Esclave_Mod�les_Produit_3,Mod�les_Produit_3)
	,new clLiaison(null,Mod�les_Montant_HT_4)
	,new clLiaison(null,Mod�les_Montant_TTC_5)
	,new clLiaison(null,Mod�les_Quantit�_6)
	));

var Titre_Mod�les_Lignes_du_mod�le_2=new Array("Produit","Montant HT","Montant TTC","Qt�.");

	/* Ce composant repr�sente: des �l�ments de la table lignemodele sous le nom "Lignes du mod�le" */
var Compo_Mod�les_Lignes_du_mod�le_2=new clCompoListe(Mod�les_Lignes_du_mod�le_2,null,Titre_Mod�les_Lignes_du_mod�le_2,"Lignes du mod�le",true,false);
var Joint_Esclave_Mod�les_Lignes_du_mod�le_2=new clJointureMulti("modele",
	new Array(
	new stJointure("lignemodele","mo_numero","mo_numero",null,false)
	));
var Mod�les_Liste_des_mod�les0=new clEnsembleAttributs("modele",
	new Array(
	new clLiaison(null,Col_N0_Libell�_De_Mod�les_Liste_des_mod�les0)
	),
	new Array(
	new clLiaison(null,Mod�les_Libell�_1)
	,new clLiaison(Joint_Esclave_Mod�les_Lignes_du_mod�le_2,Mod�les_Lignes_du_mod�le_2)
	));

var Titre_Mod�les_Liste_des_mod�les0=new Array("Libell�");

	/* Ce composant repr�sente: des �l�ments de la table modele sous le nom "Liste des mod�les" */
var Compo_Mod�les_Liste_des_mod�les0=new clCompoListe(Mod�les_Liste_des_mod�les0,new Array(new clInterfaceFiltrageVide()),Titre_Mod�les_Liste_des_mod�les0,"Liste des mod�les",true,false);

	/* Ce composant repr�sente: modele.undefined sous le nom "Liste des mod�les" */
 if(ALeDroit(0,"modele"))
 {
Compo_Mod�les_Liste_des_mod�les0.GenererXUL(top.document.getElementById("Mod�les_Liste_des_mod�les0"));

 }

	/* On l'ajoute au tableau global � l'indice 205*/
top.TAB_GLOBAL_COMPO[205]=Compo_Mod�les_Liste_des_mod�les0;

	/* Ce composant repr�sente: des �l�ments de la table modele sous le nom "Libell�" */
 if(ALeDroit(0,"modele"))
 {
Compo_Mod�les_Libell�_1.GenererXUL(top.document.getElementById("Mod�les_Liste_des_mod�les0_Slaves"));

 }

	/* On l'ajoute au tableau global � l'indice 207*/
top.TAB_GLOBAL_COMPO[207]=Compo_Mod�les_Libell�_1;

	/* Ce composant repr�sente: lignemodele.undefined sous le nom "Lignes du mod�le" */
 if(ALeDroit(0,"lignemodele"))
 {
Compo_Mod�les_Lignes_du_mod�le_2.GenererXUL(top.document.getElementById("Mod�les_Lignes_du_mod�le_2"));

 }

	/* On l'ajoute au tableau global � l'indice 208*/
top.TAB_GLOBAL_COMPO[208]=Compo_Mod�les_Lignes_du_mod�le_2;

	/* Ce composant repr�sente: des �l�ments de la table produit sous le nom "Produit" */
 if(ALeDroit(0,"produit"))
 {
Compo_Mod�les_Produit_3.GenererXUL(top.document.getElementById("Mod�les_Lignes_du_mod�le_2_Slaves"));

 }

	/* On l'ajoute au tableau global � l'indice 213*/
top.TAB_GLOBAL_COMPO[213]=Compo_Mod�les_Produit_3;

	/* Ce composant repr�sente: des �l�ments de la table lignemodele sous le nom "Montant HT" */
 if(ALeDroit(0,"lignemodele"))
 {
Compo_Mod�les_Montant_HT_4.GenererXUL(top.document.getElementById("Mod�les_Lignes_du_mod�le_2_Slaves"));

 }

	/* On l'ajoute au tableau global � l'indice 214*/
top.TAB_GLOBAL_COMPO[214]=Compo_Mod�les_Montant_HT_4;

	/* Ce composant repr�sente: des �l�ments de la table lignemodele sous le nom "Montant TTC" */
 if(ALeDroit(0,"lignemodele"))
 {
Compo_Mod�les_Montant_TTC_5.GenererXUL(top.document.getElementById("Mod�les_Lignes_du_mod�le_2_Slaves"));

 }

	/* On l'ajoute au tableau global � l'indice 215*/
top.TAB_GLOBAL_COMPO[215]=Compo_Mod�les_Montant_TTC_5;

	/* Ce composant repr�sente: des �l�ments de la table lignemodele sous le nom "Quantit�" */
 if(ALeDroit(0,"lignemodele"))
 {
Compo_Mod�les_Quantit�_6.GenererXUL(top.document.getElementById("Mod�les_Lignes_du_mod�le_2_Slaves"));

 }

	/* On l'ajoute au tableau global � l'indice 216*/
top.TAB_GLOBAL_COMPO[216]=Compo_Mod�les_Quantit�_6;
var Col_N0_Libell�_De_Mode_de_r�glements_Liste_des_modes_de_r�glement0=new clAttribut("mr_libelle","modereglement",null);

var Col_N1_N_Compte_De_Mode_de_r�glements_Liste_des_modes_de_r�glement0=new clAttribut("cg_numcompte","comptegen",null);

var Joint_Col_N1_N_Compte_De_Mode_de_r�glements_Liste_des_modes_de_r�glement0=new clJointureMulti("modereglement",
	new Array(
	new stJointure("comptegen","cg_numero","cg_numero",null,true)
	));
var Mode_de_r�glements_Libell�_1=new clAttribut("mr_libelle","modereglement",null);


	/* Ce composant repr�sente: modereglement.mr_libelle sous le nom "Libell�" */
var Compo_Mode_de_r�glements_Libell�_1=new clCompoTextBox(Mode_de_r�glements_Libell�_1,null,"Libell�",false,false);
var Mode_de_r�glements_Compte_g�n�ral_2=new clAttribut("cg_numcompte","comptegen",null);


	/* Ce composant repr�sente: comptegen.cg_numcompte sous le nom "Compte g�n�ral" */
var Compo_Mode_de_r�glements_Compte_g�n�ral_2=new clCompoListeDeroulanteSimple(Mode_de_r�glements_Compte_g�n�ral_2,null,"Compte g�n�ral");
var Joint_Esclave_Mode_de_r�glements_Compte_g�n�ral_2=new clJointureMulti("modereglement",
	new Array(
	new stJointure("comptegen","cg_numero","cg_numero",null,false)
	));
var Mode_de_r�glements_Actif_3=new clAttribut("mr_actif","modereglement",null);


	/* Ce composant repr�sente: modereglement.mr_actif sous le nom "Actif" */
var Compo_Mode_de_r�glements_Actif_3=new clCompoCheckBox(Mode_de_r�glements_Actif_3,null,"Actif");
var Mode_de_r�glements_Description_4=new clAttribut("mr_description","modereglement",null);


	/* Ce composant repr�sente: modereglement.mr_description sous le nom "Description" */
var Compo_Mode_de_r�glements_Description_4=new clCompoTextBox(Mode_de_r�glements_Description_4,null,"Description",false,true);
var Mode_de_r�glements_Liste_des_modes_de_r�glement0=new clEnsembleAttributs("modereglement",
	new Array(
	new clLiaison(null,Col_N0_Libell�_De_Mode_de_r�glements_Liste_des_modes_de_r�glement0)
	,new clLiaison(Joint_Col_N1_N_Compte_De_Mode_de_r�glements_Liste_des_modes_de_r�glement0,Col_N1_N_Compte_De_Mode_de_r�glements_Liste_des_modes_de_r�glement0)
	),
	new Array(
	new clLiaison(null,Mode_de_r�glements_Libell�_1)
	,new clLiaison(Joint_Esclave_Mode_de_r�glements_Compte_g�n�ral_2,Mode_de_r�glements_Compte_g�n�ral_2)
	,new clLiaison(null,Mode_de_r�glements_Actif_3)
	,new clLiaison(null,Mode_de_r�glements_Description_4)
	));

var Titre_Mode_de_r�glements_Liste_des_modes_de_r�glement0=new Array("Libell�","N�Compte");

	/* Ce composant repr�sente: des �l�ments de la table modereglement sous le nom "Liste des modes de r�glement" */
var Compo_Mode_de_r�glements_Liste_des_modes_de_r�glement0=new clCompoListe(Mode_de_r�glements_Liste_des_modes_de_r�glement0,new Array(new clInterfaceFiltrageVide()),Titre_Mode_de_r�glements_Liste_des_modes_de_r�glement0,"Liste des modes de r�glement",true,false);

	/* Ce composant repr�sente: modereglement.undefined sous le nom "Liste des modes de r�glement" */
 if(ALeDroit(0,"modereglement"))
 {
Compo_Mode_de_r�glements_Liste_des_modes_de_r�glement0.GenererXUL(top.document.getElementById("Mode_de_r�glements_Liste_des_modes_de_r�glement0"));

 }

	/* On l'ajoute au tableau global � l'indice 8*/
top.TAB_GLOBAL_COMPO[8]=Compo_Mode_de_r�glements_Liste_des_modes_de_r�glement0;

	/* Ce composant repr�sente: des �l�ments de la table modereglement sous le nom "Libell�" */
 if(ALeDroit(0,"modereglement"))
 {
Compo_Mode_de_r�glements_Libell�_1.GenererXUL(top.document.getElementById("Mode_de_r�glements_Liste_des_modes_de_r�glement0_Slaves"));

 }

	/* On l'ajoute au tableau global � l'indice 11*/
top.TAB_GLOBAL_COMPO[11]=Compo_Mode_de_r�glements_Libell�_1;

	/* Ce composant repr�sente: des �l�ments de la table comptegen sous le nom "Compte g�n�ral" */
 if(ALeDroit(0,"comptegen"))
 {
Compo_Mode_de_r�glements_Compte_g�n�ral_2.GenererXUL(top.document.getElementById("Mode_de_r�glements_Liste_des_modes_de_r�glement0_Slaves"));

 }

	/* On l'ajoute au tableau global � l'indice 12*/
top.TAB_GLOBAL_COMPO[12]=Compo_Mode_de_r�glements_Compte_g�n�ral_2;

	/* Ce composant repr�sente: des �l�ments de la table modereglement sous le nom "Actif" */
 if(ALeDroit(0,"modereglement"))
 {
Compo_Mode_de_r�glements_Actif_3.GenererXUL(top.document.getElementById("Mode_de_r�glements_Liste_des_modes_de_r�glement0_Slaves"));

 }

	/* On l'ajoute au tableau global � l'indice 13*/
top.TAB_GLOBAL_COMPO[13]=Compo_Mode_de_r�glements_Actif_3;

	/* Ce composant repr�sente: des �l�ments de la table modereglement sous le nom "Description" */
 if(ALeDroit(0,"modereglement"))
 {
Compo_Mode_de_r�glements_Description_4.GenererXUL(top.document.getElementById("Mode_de_r�glements_Liste_des_modes_de_r�glement0_Slaves"));

 }

	/* On l'ajoute au tableau global � l'indice 14*/
top.TAB_GLOBAL_COMPO[14]=Compo_Mode_de_r�glements_Description_4;
var Col_N0_Libell�_De_Modes_de_r�partition_Liste_des_modes_de_r�partition0=new clAttribut("mp_libelle","moderepartition",null);

var Col_N1_N_Compte_De_Modes_de_r�partition_Liste_des_modes_de_r�partition0=new clAttribut("cg_numcompte","comptegen",null);

var Joint_Col_N1_N_Compte_De_Modes_de_r�partition_Liste_des_modes_de_r�partition0=new clJointureMulti("moderepartition",
	new Array(
	new stJointure("comptegen","cg_numero","cg_numero",null,true)
	));
var Col_N2_Soci�t�_De_Modes_de_r�partition_Liste_des_modes_de_r�partition0=new clAttribut("so_libelle","societe",null);

var Joint_Col_N2_Soci�t�_De_Modes_de_r�partition_Liste_des_modes_de_r�partition0=new clJointureMulti("moderepartition",
	new Array(
	new stJointure("societe","mp_societe","so_numero",null,true)
	));
var Modes_de_r�partition_Libell�_1=new clAttribut("mp_libelle","moderepartition",null);


	/* Ce composant repr�sente: moderepartition.mp_libelle sous le nom "Libell�" */
var Compo_Modes_de_r�partition_Libell�_1=new clCompoTextBox(Modes_de_r�partition_Libell�_1,null,"Libell�",false,false);
var Modes_de_r�partition_Compte_g�n�ral_2=new clAttribut("cg_numcompte","comptegen",null);


	/* Ce composant repr�sente: comptegen.cg_numcompte sous le nom "Compte g�n�ral" */
var Compo_Modes_de_r�partition_Compte_g�n�ral_2=new clCompoListeDeroulanteSimple(Modes_de_r�partition_Compte_g�n�ral_2,null,"Compte g�n�ral");
var Joint_Esclave_Modes_de_r�partition_Compte_g�n�ral_2=new clJointureMulti("moderepartition",
	new Array(
	new stJointure("comptegen","cg_numero","cg_numero",null,false)
	));
var Modes_de_r�partition_Actif_3=new clAttribut("mp_actif","moderepartition",null);


	/* Ce composant repr�sente: moderepartition.mp_actif sous le nom "Actif" */
var Compo_Modes_de_r�partition_Actif_3=new clCompoCheckBox(Modes_de_r�partition_Actif_3,null,"Actif");
var Modes_de_r�partition_Soci�t�_vis�e_4=new clAttribut("so_libelle","societe",null);


	/* Ce composant repr�sente: societe.so_libelle sous le nom "Soci�t� vis�e" */
var Compo_Modes_de_r�partition_Soci�t�_vis�e_4=new clCompoListeDeroulanteSimple(Modes_de_r�partition_Soci�t�_vis�e_4,null,"Soci�t� vis�e");
var Joint_Esclave_Modes_de_r�partition_Soci�t�_vis�e_4=new clJointureMulti("moderepartition",
	new Array(
	new stJointure("societe","mp_societe","so_numero",null,false)
	));
var Modes_de_r�partition_Description_5=new clAttribut("mp_description","moderepartition",null);


	/* Ce composant repr�sente: moderepartition.mp_description sous le nom "Description" */
var Compo_Modes_de_r�partition_Description_5=new clCompoTextBox(Modes_de_r�partition_Description_5,null,"Description",false,true);
var Modes_de_r�partition_Liste_des_modes_de_r�partition0=new clEnsembleAttributs("moderepartition",
	new Array(
	new clLiaison(null,Col_N0_Libell�_De_Modes_de_r�partition_Liste_des_modes_de_r�partition0)
	,new clLiaison(Joint_Col_N1_N_Compte_De_Modes_de_r�partition_Liste_des_modes_de_r�partition0,Col_N1_N_Compte_De_Modes_de_r�partition_Liste_des_modes_de_r�partition0)
	,new clLiaison(Joint_Col_N2_Soci�t�_De_Modes_de_r�partition_Liste_des_modes_de_r�partition0,Col_N2_Soci�t�_De_Modes_de_r�partition_Liste_des_modes_de_r�partition0)
	),
	new Array(
	new clLiaison(null,Modes_de_r�partition_Libell�_1)
	,new clLiaison(Joint_Esclave_Modes_de_r�partition_Compte_g�n�ral_2,Modes_de_r�partition_Compte_g�n�ral_2)
	,new clLiaison(null,Modes_de_r�partition_Actif_3)
	,new clLiaison(Joint_Esclave_Modes_de_r�partition_Soci�t�_vis�e_4,Modes_de_r�partition_Soci�t�_vis�e_4)
	,new clLiaison(null,Modes_de_r�partition_Description_5)
	));

var Titre_Modes_de_r�partition_Liste_des_modes_de_r�partition0=new Array("Libell�","N�Compte","Soci�t�");

	/* Ce composant repr�sente: des �l�ments de la table moderepartition sous le nom "Liste des modes de r�partition" */
var Compo_Modes_de_r�partition_Liste_des_modes_de_r�partition0=new clCompoListe(Modes_de_r�partition_Liste_des_modes_de_r�partition0,new Array(new clInterfaceFiltrageVide()),Titre_Modes_de_r�partition_Liste_des_modes_de_r�partition0,"Liste des modes de r�partition",true,false);

	/* Ce composant repr�sente: moderepartition.undefined sous le nom "Liste des modes de r�partition" */
 if(ALeDroit(0,"moderepartition"))
 {
Compo_Modes_de_r�partition_Liste_des_modes_de_r�partition0.GenererXUL(top.document.getElementById("Modes_de_r�partition_Liste_des_modes_de_r�partition0"));

 }

	/* On l'ajoute au tableau global � l'indice 15*/
top.TAB_GLOBAL_COMPO[15]=Compo_Modes_de_r�partition_Liste_des_modes_de_r�partition0;

	/* Ce composant repr�sente: des �l�ments de la table moderepartition sous le nom "Libell�" */
 if(ALeDroit(0,"moderepartition"))
 {
Compo_Modes_de_r�partition_Libell�_1.GenererXUL(top.document.getElementById("Modes_de_r�partition_Liste_des_modes_de_r�partition0_Slaves"));

 }

	/* On l'ajoute au tableau global � l'indice 19*/
top.TAB_GLOBAL_COMPO[19]=Compo_Modes_de_r�partition_Libell�_1;

	/* Ce composant repr�sente: des �l�ments de la table comptegen sous le nom "Compte g�n�ral" */
 if(ALeDroit(0,"comptegen"))
 {
Compo_Modes_de_r�partition_Compte_g�n�ral_2.GenererXUL(top.document.getElementById("Modes_de_r�partition_Liste_des_modes_de_r�partition0_Slaves"));

 }

	/* On l'ajoute au tableau global � l'indice 20*/
top.TAB_GLOBAL_COMPO[20]=Compo_Modes_de_r�partition_Compte_g�n�ral_2;

	/* Ce composant repr�sente: des �l�ments de la table moderepartition sous le nom "Actif" */
 if(ALeDroit(0,"moderepartition"))
 {
Compo_Modes_de_r�partition_Actif_3.GenererXUL(top.document.getElementById("Modes_de_r�partition_Liste_des_modes_de_r�partition0_Slaves"));

 }

	/* On l'ajoute au tableau global � l'indice 21*/
top.TAB_GLOBAL_COMPO[21]=Compo_Modes_de_r�partition_Actif_3;

	/* Ce composant repr�sente: des �l�ments de la table societe sous le nom "Soci�t� vis�e" */
 if(ALeDroit(0,"societe"))
 {
Compo_Modes_de_r�partition_Soci�t�_vis�e_4.GenererXUL(top.document.getElementById("Modes_de_r�partition_Liste_des_modes_de_r�partition0_Slaves"));

 }

	/* On l'ajoute au tableau global � l'indice 22*/
top.TAB_GLOBAL_COMPO[22]=Compo_Modes_de_r�partition_Soci�t�_vis�e_4;

	/* Ce composant repr�sente: des �l�ments de la table moderepartition sous le nom "Description" */
 if(ALeDroit(0,"moderepartition"))
 {
Compo_Modes_de_r�partition_Description_5.GenererXUL(top.document.getElementById("Modes_de_r�partition_Liste_des_modes_de_r�partition0_Slaves"));

 }

	/* On l'ajoute au tableau global � l'indice 23*/
top.TAB_GLOBAL_COMPO[23]=Compo_Modes_de_r�partition_Description_5;
var Col_N0_Du_De_P�riodes_Liste_des_p�riodes0=new clAttribut("po_debut","periode",null);

var Col_N1_Au_De_P�riodes_Liste_des_p�riodes0=new clAttribut("po_fin","periode",null);

var P�riodes_Du_1=new clAttribut("po_debut","periode",null);


	/* Ce composant repr�sente: periode.po_debut sous le nom "Du" */
var Compo_P�riodes_Du_1=new clCompoTextBox(P�riodes_Du_1,null,"Du",false,false);
var P�riodes_Au_2=new clAttribut("po_fin","periode",null);


	/* Ce composant repr�sente: periode.po_fin sous le nom "Au" */
var Compo_P�riodes_Au_2=new clCompoTextBox(P�riodes_Au_2,null,"Au",false,false);
var P�riodes_Liste_des_p�riodes0=new clEnsembleAttributs("periode",
	new Array(
	new clLiaison(null,Col_N0_Du_De_P�riodes_Liste_des_p�riodes0)
	,new clLiaison(null,Col_N1_Au_De_P�riodes_Liste_des_p�riodes0)
	),
	new Array(
	new clLiaison(null,P�riodes_Du_1)
	,new clLiaison(null,P�riodes_Au_2)
	));

var Titre_P�riodes_Liste_des_p�riodes0=new Array("Du","Au");

	/* Ce composant repr�sente: des �l�ments de la table periode sous le nom "Liste des p�riodes" */
var Compo_P�riodes_Liste_des_p�riodes0=new clCompoListe(P�riodes_Liste_des_p�riodes0,new Array(new clInterfaceFiltrageVide()),Titre_P�riodes_Liste_des_p�riodes0,"Liste des p�riodes",true,false);

	/* Ce composant repr�sente: periode.undefined sous le nom "Liste des p�riodes" */
 if(ALeDroit(0,"periode"))
 {
Compo_P�riodes_Liste_des_p�riodes0.GenererXUL(top.document.getElementById("P�riodes_Liste_des_p�riodes0"));

 }

	/* On l'ajoute au tableau global � l'indice 194*/
top.TAB_GLOBAL_COMPO[194]=Compo_P�riodes_Liste_des_p�riodes0;

	/* Ce composant repr�sente: des �l�ments de la table periode sous le nom "Du" */
 if(ALeDroit(0,"periode"))
 {
Compo_P�riodes_Du_1.GenererXUL(top.document.getElementById("P�riodes_Liste_des_p�riodes0_Slaves"));

 }

	/* On l'ajoute au tableau global � l'indice 197*/
top.TAB_GLOBAL_COMPO[197]=Compo_P�riodes_Du_1;

	/* Ce composant repr�sente: des �l�ments de la table periode sous le nom "Au" */
 if(ALeDroit(0,"periode"))
 {
Compo_P�riodes_Au_2.GenererXUL(top.document.getElementById("P�riodes_Liste_des_p�riodes0_Slaves"));

 }

	/* On l'ajoute au tableau global � l'indice 198*/
top.TAB_GLOBAL_COMPO[198]=Compo_P�riodes_Au_2;
var Col_N0_Nom_De_Pr�fixes_Liste_des_pr�fixes0=new clAttribut("pf_nom","prefixe",null);

var Pr�fixes_Nom_1=new clAttribut("pf_nom","prefixe",null);


	/* Ce composant repr�sente: prefixe.pf_nom sous le nom "Nom" */
var Compo_Pr�fixes_Nom_1=new clCompoTextBox(Pr�fixes_Nom_1,null,"Nom",false,false);
var Pr�fixes_Liste_des_pr�fixes0=new clEnsembleAttributs("prefixe",
	new Array(
	new clLiaison(null,Col_N0_Nom_De_Pr�fixes_Liste_des_pr�fixes0)
	),
	new Array(
	new clLiaison(null,Pr�fixes_Nom_1)
	));

var Titre_Pr�fixes_Liste_des_pr�fixes0=new Array("Nom");

	/* Ce composant repr�sente: des �l�ments de la table prefixe sous le nom "Liste des pr�fixes" */
var Compo_Pr�fixes_Liste_des_pr�fixes0=new clCompoListe(Pr�fixes_Liste_des_pr�fixes0,new Array(new clInterfaceFiltrageVide()),Titre_Pr�fixes_Liste_des_pr�fixes0,"Liste des pr�fixes",true,false);

	/* Ce composant repr�sente: prefixe.undefined sous le nom "Liste des pr�fixes" */
 if(ALeDroit(0,"prefixe"))
 {
Compo_Pr�fixes_Liste_des_pr�fixes0.GenererXUL(top.document.getElementById("Pr�fixes_Liste_des_pr�fixes0"));

 }

	/* On l'ajoute au tableau global � l'indice 202*/
top.TAB_GLOBAL_COMPO[202]=Compo_Pr�fixes_Liste_des_pr�fixes0;

	/* Ce composant repr�sente: des �l�ments de la table prefixe sous le nom "Nom" */
 if(ALeDroit(0,"prefixe"))
 {
Compo_Pr�fixes_Nom_1.GenererXUL(top.document.getElementById("Pr�fixes_Liste_des_pr�fixes0_Slaves"));

 }

	/* On l'ajoute au tableau global � l'indice 204*/
top.TAB_GLOBAL_COMPO[204]=Compo_Pr�fixes_Nom_1;
var Col_N0_Etat_De_Produits_Liste_des_produits0=new clAttribut("pd_etat","produit",null);

var Col_N1_Libell�_De_Produits_Liste_des_produits0=new clAttribut("pd_libelle","produit",null);

var Produits_Libell�_1=new clAttribut("pd_libelle","produit",null);


	/* Ce composant repr�sente: produit.pd_libelle sous le nom "Libell�" */
var Compo_Produits_Libell�_1=new clCompoTextBox(Produits_Libell�_1,null,"Libell�",false,false);
var Produits_Journal_comptable_2=new clAttribut("jo_libelle","journal",null);


	/* Ce composant repr�sente: journal.jo_libelle sous le nom "Journal comptable" */
var Compo_Produits_Journal_comptable_2=new clCompoListeDeroulanteSimple(Produits_Journal_comptable_2,null,"Journal comptable");
var Joint_Esclave_Produits_Journal_comptable_2=new clJointureMulti("produit",
	new Array(
	new stJointure("journal","jo_numero","jo_numero",null,false)
	));
var Produits_Actif_3=new clAttribut("pd_actif","produit",null);


	/* Ce composant repr�sente: produit.pd_actif sous le nom "Actif" */
var Compo_Produits_Actif_3=new clCompoCheckBox(Produits_Actif_3,null,"Actif");
var Produits_Soumis_�_de_potentielles_r�ductions_4=new clAttribut("pd_reduction","produit",null);


	/* Ce composant repr�sente: produit.pd_reduction sous le nom "Soumis � de potentielles r�ductions" */
var Compo_Produits_Soumis_�_de_potentielles_r�ductions_4=new clCompoCheckBox(Produits_Soumis_�_de_potentielles_r�ductions_4,null,"Soumis � de potentielles r�ductions");
var Col_N0_Tarif_HT_De_Produits_Prix_5=new clAttribut("px_tarifht","prix",null);

var Col_N1_Tarif_TTC_De_Produits_Prix_5=new clAttribut("px_tarifttc","prix",null);

var Col_N2_T_V_A__De_Produits_Prix_5=new clAttribut("tv_pourcentage","tva",null);

var Joint_Col_N2_T_V_A__De_Produits_Prix_5=new clJointureMulti("prix",
	new Array(
	new stJointure("tva","tv_numero","tv_numero",null,true)
	));
var Col_N3_Date_application_De_Produits_Prix_5=new clAttribut("px_datedebut","prix",null);

var Produits_Tarif_H_T__6=new clAttribut("px_tarifht","prix",null);


	/* Ce composant repr�sente: prix.px_tarifht sous le nom "Tarif H.T." */
var Compo_Produits_Tarif_H_T__6=new clCompoTextBox(Produits_Tarif_H_T__6,null,"Tarif H.T.",false,false);
var Produits_Tarif_T_T_C__7=new clAttribut("px_tarifttc","prix",null);


	/* Ce composant repr�sente: prix.px_tarifttc sous le nom "Tarif T.T.C." */
var Compo_Produits_Tarif_T_T_C__7=new clCompoTextBox(Produits_Tarif_T_T_C__7,null,"Tarif T.T.C.",false,false);
var Produits_T_V_A__8=new clAttribut("tv_pourcentage","tva",null);


	/* Ce composant repr�sente: tva.tv_pourcentage sous le nom "T.V.A." */
var Compo_Produits_T_V_A__8=new clCompoListeDeroulanteSimple(Produits_T_V_A__8,new Array(clCompoListeDeroulanteSimple.prototype.FiltreParDefaut(),Filtre_ProduitPrixTva=new clInterfaceFiltragePermanantCustom("tv_actif=true"),Filtre_Dep_TVA_0=new clInterfaceFiltrageRelationOnglet("TVA",Gerer_TVA,OuvrirOnglet_Produits)),"T.V.A.");
var Joint_Esclave_Produits_T_V_A__8=new clJointureMulti("prix",
	new Array(
	new stJointure("tva","tv_numero","tv_numero",null,false)
	));
var Produits_Date_d_application_9=new clAttribut("px_datedebut","prix",null);


	/* Ce composant repr�sente: prix.px_datedebut sous le nom "Date d'application" */
var Compo_Produits_Date_d_application_9=new clCompoTextBox(Produits_Date_d_application_9,null,"Date d'application",false,false);
var Produits_Actif_10=new clAttribut("px_actif","prix",null);


	/* Ce composant repr�sente: prix.px_actif sous le nom "Actif" */
var Compo_Produits_Actif_10=new clCompoCheckBox(Produits_Actif_10,null,"Actif");
var Produits_Prix_5=new clEnsembleAttributs("prix",
	new Array(
	new clLiaison(null,Col_N0_Tarif_HT_De_Produits_Prix_5)
	,new clLiaison(null,Col_N1_Tarif_TTC_De_Produits_Prix_5)
	,new clLiaison(Joint_Col_N2_T_V_A__De_Produits_Prix_5,Col_N2_T_V_A__De_Produits_Prix_5)
	,new clLiaison(null,Col_N3_Date_application_De_Produits_Prix_5)
	),
	new Array(
	new clLiaison(null,Produits_Tarif_H_T__6)
	,new clLiaison(null,Produits_Tarif_T_T_C__7)
	,new clLiaison(Joint_Esclave_Produits_T_V_A__8,Produits_T_V_A__8)
	,new clLiaison(null,Produits_Date_d_application_9)
	,new clLiaison(null,Produits_Actif_10)
	));

var Titre_Produits_Prix_5=new Array("Tarif HT","Tarif TTC","T.V.A.","Date application");

	/* Ce composant repr�sente: des �l�ments de la table prix sous le nom "Prix" */
var Compo_Produits_Prix_5=new clCompoListe(Produits_Prix_5,null,Titre_Produits_Prix_5,"Prix",true,false);
var Joint_Esclave_Produits_Prix_5=new clJointureMulti("produit",
	new Array(
	new stJointure("prix","pd_numero","pd_numero",null,false)
	));
var Col_N0_N__Compte_De_Produits_Comptes_g�n�raux_11=new clAttribut("cg_numcompte","comptegen",null);

var Joint_Col_N0_N__Compte_De_Produits_Comptes_g�n�raux_11=new clJointureMulti("compteproduit",
	new Array(
	new stJointure("comptegen","cg_numero","cg_numero",null,true)
	));
var Col_N1_Libell�_De_Produits_Comptes_g�n�raux_11=new clAttribut("cg_libelle","comptegen",null);

var Joint_Col_N1_Libell�_De_Produits_Comptes_g�n�raux_11=new clJointureMulti("compteproduit",
	new Array(
	new stJointure("comptegen","cg_numero","cg_numero",null,true)
	));
var Produits_Compte_12=new clAttribut("cg_nom","comptegen",null);


	/* Ce composant repr�sente: comptegen.cg_nom sous le nom "Compte" */
var Compo_Produits_Compte_12=new clCompoListeDeroulanteSimple(Produits_Compte_12,null,"Compte");
var Joint_Esclave_Produits_Compte_12=new clJointureMulti("compteproduit",
	new Array(
	new stJointure("comptegen","cg_numero","cg_numero",null,false)
	));
var Produits_Actif_13=new clAttribut("ci_actif","compteproduit",null);


	/* Ce composant repr�sente: compteproduit.ci_actif sous le nom "Actif" */
var Compo_Produits_Actif_13=new clCompoCheckBox(Produits_Actif_13,null,"Actif");
var Produits_Comptes_g�n�raux_11=new clEnsembleAttributs("compteproduit",
	new Array(
	new clLiaison(Joint_Col_N0_N__Compte_De_Produits_Comptes_g�n�raux_11,Col_N0_N__Compte_De_Produits_Comptes_g�n�raux_11)
	,new clLiaison(Joint_Col_N1_Libell�_De_Produits_Comptes_g�n�raux_11,Col_N1_Libell�_De_Produits_Comptes_g�n�raux_11)
	),
	new Array(
	new clLiaison(Joint_Esclave_Produits_Compte_12,Produits_Compte_12)
	,new clLiaison(null,Produits_Actif_13)
	));

var Titre_Produits_Comptes_g�n�raux_11=new Array("N� Compte","Libell�");

	/* Ce composant repr�sente: des �l�ments de la table compteproduit sous le nom "Comptes g�n�raux" */
var Compo_Produits_Comptes_g�n�raux_11=new clCompoListe(Produits_Comptes_g�n�raux_11,null,Titre_Produits_Comptes_g�n�raux_11,"Comptes g�n�raux",true,false);
var Joint_Esclave_Produits_Comptes_g�n�raux_11=new clJointureMulti("produit",
	new Array(
	new stJointure("compteproduit","pd_numero","pd_numero",null,false)
	));
var Produits_Liste_des_produits0=new clEnsembleAttributs("produit",
	new Array(
	new clLiaison(null,Col_N0_Etat_De_Produits_Liste_des_produits0)
	,new clLiaison(null,Col_N1_Libell�_De_Produits_Liste_des_produits0)
	),
	new Array(
	new clLiaison(null,Produits_Libell�_1)
	,new clLiaison(Joint_Esclave_Produits_Journal_comptable_2,Produits_Journal_comptable_2)
	,new clLiaison(null,Produits_Actif_3)
	,new clLiaison(null,Produits_Soumis_�_de_potentielles_r�ductions_4)
	,new clLiaison(Joint_Esclave_Produits_Prix_5,Produits_Prix_5)
	,new clLiaison(Joint_Esclave_Produits_Comptes_g�n�raux_11,Produits_Comptes_g�n�raux_11)
	));

var Titre_Produits_Liste_des_produits0=new Array("Etat","Libell�");

	/* Ce composant repr�sente: des �l�ments de la table produit sous le nom "Liste des produits" */
var Compo_Produits_Liste_des_produits0=new clCompoListe(Produits_Liste_des_produits0,new Array(new clInterfaceFiltrageVide()),Titre_Produits_Liste_des_produits0,"Liste des produits",true,false);

	/* Ce composant repr�sente: produit.undefined sous le nom "Liste des produits" */
 if(ALeDroit(0,"produit"))
 {
Compo_Produits_Liste_des_produits0.GenererXUL(top.document.getElementById("Produits_Liste_des_produits0"));

 }

	/* On l'ajoute au tableau global � l'indice 158*/
top.TAB_GLOBAL_COMPO[158]=Compo_Produits_Liste_des_produits0;

	/* Ce composant repr�sente: des �l�ments de la table produit sous le nom "Libell�" */
 if(ALeDroit(0,"produit"))
 {
Compo_Produits_Libell�_1.GenererXUL(top.document.getElementById("Produits_Liste_des_produits0_Slaves"));

 }

	/* On l'ajoute au tableau global � l'indice 161*/
top.TAB_GLOBAL_COMPO[161]=Compo_Produits_Libell�_1;

	/* Ce composant repr�sente: des �l�ments de la table journal sous le nom "Journal comptable" */
 if(ALeDroit(0,"journal"))
 {
Compo_Produits_Journal_comptable_2.GenererXUL(top.document.getElementById("Produits_Liste_des_produits0_Slaves"));

 }

	/* On l'ajoute au tableau global � l'indice 162*/
top.TAB_GLOBAL_COMPO[162]=Compo_Produits_Journal_comptable_2;

	/* Ce composant repr�sente: des �l�ments de la table produit sous le nom "Actif" */
 if(ALeDroit(0,"produit"))
 {
Compo_Produits_Actif_3.GenererXUL(top.document.getElementById("Produits_Liste_des_produits0_Slaves"));

 }

	/* On l'ajoute au tableau global � l'indice 163*/
top.TAB_GLOBAL_COMPO[163]=Compo_Produits_Actif_3;

	/* Ce composant repr�sente: des �l�ments de la table produit sous le nom "Soumis � de potentielles r�ductions" */
 if(ALeDroit(0,"produit"))
 {
Compo_Produits_Soumis_�_de_potentielles_r�ductions_4.GenererXUL(top.document.getElementById("Produits_Liste_des_produits0_Slaves"));

 }

	/* On l'ajoute au tableau global � l'indice 164*/
top.TAB_GLOBAL_COMPO[164]=Compo_Produits_Soumis_�_de_potentielles_r�ductions_4;

	/* Ce composant repr�sente: prix.undefined sous le nom "Prix" */
 if(ALeDroit(0,"prix"))
 {
Compo_Produits_Prix_5.GenererXUL(top.document.getElementById("Produits_Prix_5"));

 }

	/* On l'ajoute au tableau global � l'indice 165*/
top.TAB_GLOBAL_COMPO[165]=Compo_Produits_Prix_5;

	/* Ce composant repr�sente: des �l�ments de la table prix sous le nom "Tarif H.T." */
 if(ALeDroit(0,"prix"))
 {
Compo_Produits_Tarif_H_T__6.GenererXUL(top.document.getElementById("Produits_Prix_5_Slaves"));

 }

	/* On l'ajoute au tableau global � l'indice 170*/
top.TAB_GLOBAL_COMPO[170]=Compo_Produits_Tarif_H_T__6;

	/* Ce composant repr�sente: des �l�ments de la table prix sous le nom "Tarif T.T.C." */
 if(ALeDroit(0,"prix"))
 {
Compo_Produits_Tarif_T_T_C__7.GenererXUL(top.document.getElementById("Produits_Prix_5_Slaves"));

 }

	/* On l'ajoute au tableau global � l'indice 171*/
top.TAB_GLOBAL_COMPO[171]=Compo_Produits_Tarif_T_T_C__7;

	/* Ce composant repr�sente: des �l�ments de la table tva sous le nom "T.V.A." */
 if(ALeDroit(0,"tva"))
 {
Compo_Produits_T_V_A__8.GenererXUL(top.document.getElementById("Produits_Prix_5_Slaves"));

 }

	/* On l'ajoute au tableau global � l'indice 172*/
top.TAB_GLOBAL_COMPO[172]=Compo_Produits_T_V_A__8;

	/* Ce composant repr�sente: des �l�ments de la table prix sous le nom "Date d'application" */
 if(ALeDroit(0,"prix"))
 {
Compo_Produits_Date_d_application_9.GenererXUL(top.document.getElementById("Produits_Prix_5_Slaves"));

 }

	/* On l'ajoute au tableau global � l'indice 173*/
top.TAB_GLOBAL_COMPO[173]=Compo_Produits_Date_d_application_9;

	/* Ce composant repr�sente: des �l�ments de la table prix sous le nom "Actif" */
 if(ALeDroit(0,"prix"))
 {
Compo_Produits_Actif_10.GenererXUL(top.document.getElementById("Produits_Prix_5_Slaves"));

 }

	/* On l'ajoute au tableau global � l'indice 174*/
top.TAB_GLOBAL_COMPO[174]=Compo_Produits_Actif_10;

	/* Ce composant repr�sente: compteproduit.undefined sous le nom "Comptes g�n�raux" */
 if(ALeDroit(0,"compteproduit"))
 {
Compo_Produits_Comptes_g�n�raux_11.GenererXUL(top.document.getElementById("Produits_Comptes_g�n�raux_11"));

 }

	/* On l'ajoute au tableau global � l'indice 175*/
top.TAB_GLOBAL_COMPO[175]=Compo_Produits_Comptes_g�n�raux_11;

	/* Ce composant repr�sente: des �l�ments de la table comptegen sous le nom "Compte" */
 if(ALeDroit(0,"comptegen"))
 {
Compo_Produits_Compte_12.GenererXUL(top.document.getElementById("Produits_Comptes_g�n�raux_11_Slaves"));

 }

	/* On l'ajoute au tableau global � l'indice 178*/
top.TAB_GLOBAL_COMPO[178]=Compo_Produits_Compte_12;

	/* Ce composant repr�sente: des �l�ments de la table compteproduit sous le nom "Actif" */
 if(ALeDroit(0,"compteproduit"))
 {
Compo_Produits_Actif_13.GenererXUL(top.document.getElementById("Produits_Comptes_g�n�raux_11_Slaves"));

 }

	/* On l'ajoute au tableau global � l'indice 179*/
top.TAB_GLOBAL_COMPO[179]=Compo_Produits_Actif_13;
var Col_N0_Code_De_Responsabilit�s_Responsabilit�s0=new clAttribut("re_code","responsabilite",null);

var Col_N1_Nom_De_Responsabilit�s_Responsabilit�s0=new clAttribut("re_nom","responsabilite",null);

var Col_N2_Famille_De_Responsabilit�s_Responsabilit�s0=new clAttribut("re_famille","responsabilite",null);

var Responsabilit�s_Code_1=new clAttribut("re_code","responsabilite",null);


	/* Ce composant repr�sente: responsabilite.re_code sous le nom "Code" */
var Compo_Responsabilit�s_Code_1=new clCompoTextBox(Responsabilit�s_Code_1,null,"Code",false,false);
var Responsabilit�s_Nom_2=new clAttribut("re_nom","responsabilite",null);


	/* Ce composant repr�sente: responsabilite.re_nom sous le nom "Nom" */
var Compo_Responsabilit�s_Nom_2=new clCompoTextBox(Responsabilit�s_Nom_2,null,"Nom",false,false);
var Responsabilit�s_Famille_3=new clAttribut("re_famille","responsabilite",null);


	/* Ce composant repr�sente: responsabilite.re_famille sous le nom "Famille" */
var Compo_Responsabilit�s_Famille_3=new clCompoTextBox(Responsabilit�s_Famille_3,null,"Famille",false,false);
var Responsabilit�s_Responsabilit�s0=new clEnsembleAttributs("responsabilite",
	new Array(
	new clLiaison(null,Col_N0_Code_De_Responsabilit�s_Responsabilit�s0)
	,new clLiaison(null,Col_N1_Nom_De_Responsabilit�s_Responsabilit�s0)
	,new clLiaison(null,Col_N2_Famille_De_Responsabilit�s_Responsabilit�s0)
	),
	new Array(
	new clLiaison(null,Responsabilit�s_Code_1)
	,new clLiaison(null,Responsabilit�s_Nom_2)
	,new clLiaison(null,Responsabilit�s_Famille_3)
	));

var Titre_Responsabilit�s_Responsabilit�s0=new Array("Code","Nom","Famille");

	/* Ce composant repr�sente: des �l�ments de la table responsabilite sous le nom "Responsabilit�s" */
var Compo_Responsabilit�s_Responsabilit�s0=new clCompoListe(Responsabilit�s_Responsabilit�s0,new Array(new clInterfaceFiltrageVide()),Titre_Responsabilit�s_Responsabilit�s0,"Responsabilit�s",true,false);

	/* Ce composant repr�sente: responsabilite.undefined sous le nom "Responsabilit�s" */
 if(ALeDroit(0,"responsabilite"))
 {
Compo_Responsabilit�s_Responsabilit�s0.GenererXUL(top.document.getElementById("Responsabilit�s_Responsabilit�s0"));

 }

	/* On l'ajoute au tableau global � l'indice 143*/
top.TAB_GLOBAL_COMPO[143]=Compo_Responsabilit�s_Responsabilit�s0;

	/* Ce composant repr�sente: des �l�ments de la table responsabilite sous le nom "Code" */
 if(ALeDroit(0,"responsabilite"))
 {
Compo_Responsabilit�s_Code_1.GenererXUL(top.document.getElementById("Responsabilit�s_Responsabilit�s0_Slaves"));

 }

	/* On l'ajoute au tableau global � l'indice 147*/
top.TAB_GLOBAL_COMPO[147]=Compo_Responsabilit�s_Code_1;

	/* Ce composant repr�sente: des �l�ments de la table responsabilite sous le nom "Nom" */
 if(ALeDroit(0,"responsabilite"))
 {
Compo_Responsabilit�s_Nom_2.GenererXUL(top.document.getElementById("Responsabilit�s_Responsabilit�s0_Slaves"));

 }

	/* On l'ajoute au tableau global � l'indice 148*/
top.TAB_GLOBAL_COMPO[148]=Compo_Responsabilit�s_Nom_2;

	/* Ce composant repr�sente: des �l�ments de la table responsabilite sous le nom "Famille" */
 if(ALeDroit(0,"responsabilite"))
 {
Compo_Responsabilit�s_Famille_3.GenererXUL(top.document.getElementById("Responsabilit�s_Responsabilit�s0_Slaves"));

 }

	/* On l'ajoute au tableau global � l'indice 149*/
top.TAB_GLOBAL_COMPO[149]=Compo_Responsabilit�s_Famille_3;
var Col_N0_Nom_De_Services_Liste_des_services0=new clAttribut("se_nom","service",null);

var Col_N1_Responsable_De_Services_Liste_des_services0=new clAttribut("ag_libelle","agent",null);

var Joint_Col_N1_Responsable_De_Services_Liste_des_services0=new clJointureMulti("service",
	new Array(
	new stJointure("agent","se_agent","ag_numero",null,true)
	));
var Col_N2_Soci�t�_De_Services_Liste_des_services0=new clAttribut("so_libelle","societe",null);

var Joint_Col_N2_Soci�t�_De_Services_Liste_des_services0=new clJointureMulti("service",
	new Array(
	new stJointure("societe","se_societe","so_numero",null,true)
	));
var Services_Nom_1=new clAttribut("se_nom","service",null);


	/* Ce composant repr�sente: service.se_nom sous le nom "Nom" */
var Compo_Services_Nom_1=new clCompoTextBox(Services_Nom_1,null,"Nom",false,false);
var Services_Agent_responsable_2=new clAttribut("ag_libelle","agent",null);


	/* Ce composant repr�sente: agent.ag_libelle sous le nom "Agent responsable" */
var Compo_Services_Agent_responsable_2=new clCompoListeDeroulanteSimple(Services_Agent_responsable_2,new Array(clCompoListeDeroulanteSimple.prototype.FiltreParDefaut(),Filtre_Dep_Agents_0=new clInterfaceFiltrageRelationOnglet("Agents",Gerer_Agents,OuvrirOnglet_Services)),"Agent responsable");
var Joint_Esclave_Services_Agent_responsable_2=new clJointureMulti("service",
	new Array(
	new stJointure("agent","se_agent","ag_numero",null,false)
	));
var Col_N0_Agent_De_Services_Employ�s_3=new clAttribut("ag_libelle","agent",null);

var Joint_Col_N0_Agent_De_Services_Employ�s_3=new clJointureMulti("employe",
	new Array(
	new stJointure("agent","em_agent","ag_numero",null,true)
	));
var Col_N1_Emploi_De_Services_Employ�s_3=new clAttribut("em_emploi","employe",null);

var Col_N2_Acc�s_De_Services_Employ�s_3=new clAttribut("ac_nom","acces",null);

var Joint_Col_N2_Acc�s_De_Services_Employ�s_3=new clJointureMulti("employe",
	new Array(
	new stJointure("acces","em_acces","ac_numero",null,true)
	));
var Services_Employ�s_3=new clEnsembleAttributs("employe",
	new Array(
	new clLiaison(Joint_Col_N0_Agent_De_Services_Employ�s_3,Col_N0_Agent_De_Services_Employ�s_3)
	,new clLiaison(null,Col_N1_Emploi_De_Services_Employ�s_3)
	,new clLiaison(Joint_Col_N2_Acc�s_De_Services_Employ�s_3,Col_N2_Acc�s_De_Services_Employ�s_3)
	),
	null);

var Titre_Services_Employ�s_3=new Array("Agent","Emploi","Acc�s");

	/* Ce composant repr�sente: des �l�ments de la table employe sous le nom "Employ�s" */
var Compo_Services_Employ�s_3=new clCompoListe(Services_Employ�s_3,new Array(clCompoListe.prototype.FiltreParDefaut(),Filtre_DepFor_Employ�s_0=new clInterfaceFiltrageRelationOnglet("Employ�s",Gerer_Employ�s,OuvrirOnglet_Services,true)),Titre_Services_Employ�s_3,"Employ�s",true,false);
var Joint_Esclave_Services_Employ�s_3=new clJointureMulti("service",
	new Array(
	new stJointure("employe","se_numero","em_service",null,false)
	));
var Services_Liste_des_services0=new clEnsembleAttributs("service",
	new Array(
	new clLiaison(null,Col_N0_Nom_De_Services_Liste_des_services0)
	,new clLiaison(Joint_Col_N1_Responsable_De_Services_Liste_des_services0,Col_N1_Responsable_De_Services_Liste_des_services0)
	,new clLiaison(Joint_Col_N2_Soci�t�_De_Services_Liste_des_services0,Col_N2_Soci�t�_De_Services_Liste_des_services0)
	),
	new Array(
	new clLiaison(null,Services_Nom_1)
	,new clLiaison(Joint_Esclave_Services_Agent_responsable_2,Services_Agent_responsable_2)
	,new clLiaison(Joint_Esclave_Services_Employ�s_3,Services_Employ�s_3)
	));

var Titre_Services_Liste_des_services0=new Array("Nom","Responsable","Soci�t�");

	/* Ce composant repr�sente: des �l�ments de la table service sous le nom "Liste des services" */
var Compo_Services_Liste_des_services0=new clCompoListe(Services_Liste_des_services0,new Array(new clInterfaceFiltrageVide()),Titre_Services_Liste_des_services0,"Liste des services",true,false);

	/* Ce composant repr�sente: service.undefined sous le nom "Liste des services" */
 if(ALeDroit(0,"service"))
 {
Compo_Services_Liste_des_services0.GenererXUL(top.document.getElementById("Services_Liste_des_services0"));

 }

	/* On l'ajoute au tableau global � l'indice 67*/
top.TAB_GLOBAL_COMPO[67]=Compo_Services_Liste_des_services0;

	/* Ce composant repr�sente: des �l�ments de la table service sous le nom "Nom" */
 if(ALeDroit(0,"service"))
 {
Compo_Services_Nom_1.GenererXUL(top.document.getElementById("Services_Liste_des_services0_Slaves"));

 }

	/* On l'ajoute au tableau global � l'indice 71*/
top.TAB_GLOBAL_COMPO[71]=Compo_Services_Nom_1;

	/* Ce composant repr�sente: des �l�ments de la table agent sous le nom "Agent responsable" */
 if(ALeDroit(0,"agent"))
 {
Compo_Services_Agent_responsable_2.GenererXUL(top.document.getElementById("Services_Liste_des_services0_Slaves"));

 }

	/* On l'ajoute au tableau global � l'indice 72*/
top.TAB_GLOBAL_COMPO[72]=Compo_Services_Agent_responsable_2;

	/* Ce composant repr�sente: employe.undefined sous le nom "Employ�s" */
 if(ALeDroit(0,"employe"))
 {
Compo_Services_Employ�s_3.GenererXUL(top.document.getElementById("Services_Employ�s_3"));

 }

	/* On l'ajoute au tableau global � l'indice 73*/
top.TAB_GLOBAL_COMPO[73]=Compo_Services_Employ�s_3;
var Col_N0_Abbr__De_Soci�t�s_Liste_des_soci�t�s0=new clAttribut("so_abbrev","societe",null);

var Col_N1_Nom_De_Soci�t�s_Liste_des_soci�t�s0=new clAttribut("so_libelle","societe",null);

var Soci�t�s_Type_1=new clAttribut("ts_libelle","typesociete",null);


	/* Ce composant repr�sente: typesociete.ts_libelle sous le nom "Type" */
var Compo_Soci�t�s_Type_1=new clCompoListeDeroulanteSimple(Soci�t�s_Type_1,new Array(clCompoListeDeroulanteSimple.prototype.FiltreParDefaut(),Filtre_Dep_Types_de_soci�t�s_0=new clInterfaceFiltrageRelationOnglet("Types de soci�t�s",Gerer_Types_de_soci�t�s,OuvrirOnglet_Soci�t�s)),"Type");
var Joint_Esclave_Soci�t�s_Type_1=new clJointureMulti("societe",
	new Array(
	new stJointure("typesociete","ts_numero","ts_numero",null,false)
	));
var Soci�t�s_Nom_2=new clAttribut("so_libelle","societe",null);


	/* Ce composant repr�sente: societe.so_libelle sous le nom "Nom" */
var Compo_Soci�t�s_Nom_2=new clCompoTextBox(Soci�t�s_Nom_2,null,"Nom",false,false);
var Soci�t�s_Abbrev_3=new clAttribut("so_abbrev","societe",null);


	/* Ce composant repr�sente: societe.so_abbrev sous le nom "Abbrev" */
var Compo_Soci�t�s_Abbrev_3=new clCompoTextBox(Soci�t�s_Abbrev_3,null,"Abbrev",false,false);
var Soci�t�s_Personne_4=new clAttribut("pe_libelle","personne",null);


	/* Ce composant repr�sente: personne.pe_libelle sous le nom "Personne" */
var Compo_Soci�t�s_Personne_4=new clCompoListeDeroulanteSimple(Soci�t�s_Personne_4,null,"Personne");
var Joint_Esclave_Soci�t�s_Personne_4=new clJointureMulti("societe",
	new Array(
	new stJointure("personne","pe_numero","pe_numero",null,false)
	));
var Soci�t�s_D�tails_5=new clAttribut("so_detail","societe",null);


	/* Ce composant repr�sente: societe.so_detail sous le nom "D�tails" */
var Compo_Soci�t�s_D�tails_5=new clCompoTextBox(Soci�t�s_D�tails_5,null,"D�tails",false,true);
var Col_N0_Nom_De_Soci�t�s_Services_6=new clAttribut("se_nom","service",null);

var Col_N1_Responsable_De_Soci�t�s_Services_6=new clAttribut("ag_libelle","agent",null);

var Joint_Col_N1_Responsable_De_Soci�t�s_Services_6=new clJointureMulti("service",
	new Array(
	new stJointure("agent","se_agent","ag_numero",null,true)
	));
var Soci�t�s_Services_6=new clEnsembleAttributs("service",
	new Array(
	new clLiaison(null,Col_N0_Nom_De_Soci�t�s_Services_6)
	,new clLiaison(Joint_Col_N1_Responsable_De_Soci�t�s_Services_6,Col_N1_Responsable_De_Soci�t�s_Services_6)
	),
	null);

var Titre_Soci�t�s_Services_6=new Array("Nom","Responsable");

	/* Ce composant repr�sente: des �l�ments de la table service sous le nom "Services" */
var Compo_Soci�t�s_Services_6=new clCompoListe(Soci�t�s_Services_6,new Array(clCompoListe.prototype.FiltreParDefaut(),Filtre_DepFor_Services_0=new clInterfaceFiltrageRelationOnglet("Services",Gerer_Services,OuvrirOnglet_Soci�t�s,true)),Titre_Soci�t�s_Services_6,"Services",true,false);
var Joint_Esclave_Soci�t�s_Services_6=new clJointureMulti("societe",
	new Array(
	new stJointure("service","so_numero","se_societe",null,false)
	));
var Soci�t�s_Liste_des_soci�t�s0=new clEnsembleAttributs("societe",
	new Array(
	new clLiaison(null,Col_N0_Abbr__De_Soci�t�s_Liste_des_soci�t�s0)
	,new clLiaison(null,Col_N1_Nom_De_Soci�t�s_Liste_des_soci�t�s0)
	),
	new Array(
	new clLiaison(Joint_Esclave_Soci�t�s_Type_1,Soci�t�s_Type_1)
	,new clLiaison(null,Soci�t�s_Nom_2)
	,new clLiaison(null,Soci�t�s_Abbrev_3)
	,new clLiaison(Joint_Esclave_Soci�t�s_Personne_4,Soci�t�s_Personne_4)
	,new clLiaison(null,Soci�t�s_D�tails_5)
	,new clLiaison(Joint_Esclave_Soci�t�s_Services_6,Soci�t�s_Services_6)
	));

var Titre_Soci�t�s_Liste_des_soci�t�s0=new Array("Abbr.","Nom");

	/* Ce composant repr�sente: des �l�ments de la table societe sous le nom "Liste des soci�t�s" */
var Compo_Soci�t�s_Liste_des_soci�t�s0=new clCompoListe(Soci�t�s_Liste_des_soci�t�s0,new Array(new clInterfaceFiltrageVide()),Titre_Soci�t�s_Liste_des_soci�t�s0,"Liste des soci�t�s",true,false);

	/* Ce composant repr�sente: societe.undefined sous le nom "Liste des soci�t�s" */
 if(ALeDroit(0,"societe"))
 {
Compo_Soci�t�s_Liste_des_soci�t�s0.GenererXUL(top.document.getElementById("Soci�t�s_Liste_des_soci�t�s0"));

 }

	/* On l'ajoute au tableau global � l'indice 56*/
top.TAB_GLOBAL_COMPO[56]=Compo_Soci�t�s_Liste_des_soci�t�s0;

	/* Ce composant repr�sente: des �l�ments de la table typesociete sous le nom "Type" */
 if(ALeDroit(0,"typesociete"))
 {
Compo_Soci�t�s_Type_1.GenererXUL(top.document.getElementById("Soci�t�s_Liste_des_soci�t�s0_Slaves"));

 }

	/* On l'ajoute au tableau global � l'indice 59*/
top.TAB_GLOBAL_COMPO[59]=Compo_Soci�t�s_Type_1;

	/* Ce composant repr�sente: des �l�ments de la table societe sous le nom "Nom" */
 if(ALeDroit(0,"societe"))
 {
Compo_Soci�t�s_Nom_2.GenererXUL(top.document.getElementById("Soci�t�s_Liste_des_soci�t�s0_Slaves"));

 }

	/* On l'ajoute au tableau global � l'indice 60*/
top.TAB_GLOBAL_COMPO[60]=Compo_Soci�t�s_Nom_2;

	/* Ce composant repr�sente: des �l�ments de la table societe sous le nom "Abbrev" */
 if(ALeDroit(0,"societe"))
 {
Compo_Soci�t�s_Abbrev_3.GenererXUL(top.document.getElementById("Soci�t�s_Liste_des_soci�t�s0_Slaves"));

 }

	/* On l'ajoute au tableau global � l'indice 61*/
top.TAB_GLOBAL_COMPO[61]=Compo_Soci�t�s_Abbrev_3;

	/* Ce composant repr�sente: des �l�ments de la table personne sous le nom "Personne" */
 if(ALeDroit(0,"personne"))
 {
Compo_Soci�t�s_Personne_4.GenererXUL(top.document.getElementById("Soci�t�s_Liste_des_soci�t�s0_Slaves"));

 }

	/* On l'ajoute au tableau global � l'indice 62*/
top.TAB_GLOBAL_COMPO[62]=Compo_Soci�t�s_Personne_4;

	/* Ce composant repr�sente: des �l�ments de la table societe sous le nom "D�tails" */
 if(ALeDroit(0,"societe"))
 {
Compo_Soci�t�s_D�tails_5.GenererXUL(top.document.getElementById("Soci�t�s_Liste_des_soci�t�s0_Slaves"));

 }

	/* On l'ajoute au tableau global � l'indice 63*/
top.TAB_GLOBAL_COMPO[63]=Compo_Soci�t�s_D�tails_5;

	/* Ce composant repr�sente: service.undefined sous le nom "Services" */
 if(ALeDroit(0,"service"))
 {
Compo_Soci�t�s_Services_6.GenererXUL(top.document.getElementById("Soci�t�s_Services_6"));

 }

	/* On l'ajoute au tableau global � l'indice 64*/
top.TAB_GLOBAL_COMPO[64]=Compo_Soci�t�s_Services_6;
var Col_N0_Taux_____De_TVA_Liste_des_T_V_A_0=new clAttribut("tv_taux","tva",null);

var Col_N1_Code_De_TVA_Liste_des_T_V_A_0=new clAttribut("tv_code","tva",null);

var Col_N2_Etat_De_TVA_Liste_des_T_V_A_0=new clAttribut("tv_etat","tva",null);

var TVA_Taux_1=new clAttribut("tv_taux","tva",null);


	/* Ce composant repr�sente: tva.tv_taux sous le nom "Taux" */
var Compo_TVA_Taux_1=new clCompoTextBox(TVA_Taux_1,null,"Taux",false,false);
var TVA_Code_2=new clAttribut("tv_code","tva",null);


	/* Ce composant repr�sente: tva.tv_code sous le nom "Code" */
var Compo_TVA_Code_2=new clCompoTextBox(TVA_Code_2,null,"Code",false,false);
var TVA_Compte_g�n�ral_3=new clAttribut("cg_nom","comptegen",null);


	/* Ce composant repr�sente: comptegen.cg_nom sous le nom "Compte g�n�ral" */
var Compo_TVA_Compte_g�n�ral_3=new clCompoListeDeroulanteSimple(TVA_Compte_g�n�ral_3,null,"Compte g�n�ral");
var Joint_Esclave_TVA_Compte_g�n�ral_3=new clJointureMulti("tva",
	new Array(
	new stJointure("comptegen","cg_numero","cg_numero",null,false)
	));
var TVA_Actif_4=new clAttribut("tv_actif","tva",null);


	/* Ce composant repr�sente: tva.tv_actif sous le nom "Actif" */
var Compo_TVA_Actif_4=new clCompoCheckBox(TVA_Actif_4,null,"Actif");
var TVA_Liste_des_T_V_A_0=new clEnsembleAttributs("tva",
	new Array(
	new clLiaison(null,Col_N0_Taux_____De_TVA_Liste_des_T_V_A_0)
	,new clLiaison(null,Col_N1_Code_De_TVA_Liste_des_T_V_A_0)
	,new clLiaison(null,Col_N2_Etat_De_TVA_Liste_des_T_V_A_0)
	),
	new Array(
	new clLiaison(null,TVA_Taux_1)
	,new clLiaison(null,TVA_Code_2)
	,new clLiaison(Joint_Esclave_TVA_Compte_g�n�ral_3,TVA_Compte_g�n�ral_3)
	,new clLiaison(null,TVA_Actif_4)
	));

var Titre_TVA_Liste_des_T_V_A_0=new Array("Taux (%)","Code","Etat");

	/* Ce composant repr�sente: des �l�ments de la table tva sous le nom "Liste des T.V.A." */
var Compo_TVA_Liste_des_T_V_A_0=new clCompoListe(TVA_Liste_des_T_V_A_0,new Array(new clInterfaceFiltrageVide()),Titre_TVA_Liste_des_T_V_A_0,"Liste des T.V.A.",true,false);

	/* Ce composant repr�sente: tva.undefined sous le nom "Liste des T.V.A." */
 if(ALeDroit(0,"tva"))
 {
Compo_TVA_Liste_des_T_V_A_0.GenererXUL(top.document.getElementById("TVA_Liste_des_T_V_A_0"));

 }

	/* On l'ajoute au tableau global � l'indice 150*/
top.TAB_GLOBAL_COMPO[150]=Compo_TVA_Liste_des_T_V_A_0;

	/* Ce composant repr�sente: des �l�ments de la table tva sous le nom "Taux" */
 if(ALeDroit(0,"tva"))
 {
Compo_TVA_Taux_1.GenererXUL(top.document.getElementById("TVA_Liste_des_T_V_A_0_Slaves"));

 }

	/* On l'ajoute au tableau global � l'indice 154*/
top.TAB_GLOBAL_COMPO[154]=Compo_TVA_Taux_1;

	/* Ce composant repr�sente: des �l�ments de la table tva sous le nom "Code" */
 if(ALeDroit(0,"tva"))
 {
Compo_TVA_Code_2.GenererXUL(top.document.getElementById("TVA_Liste_des_T_V_A_0_Slaves"));

 }

	/* On l'ajoute au tableau global � l'indice 155*/
top.TAB_GLOBAL_COMPO[155]=Compo_TVA_Code_2;

	/* Ce composant repr�sente: des �l�ments de la table comptegen sous le nom "Compte g�n�ral" */
 if(ALeDroit(0,"comptegen"))
 {
Compo_TVA_Compte_g�n�ral_3.GenererXUL(top.document.getElementById("TVA_Liste_des_T_V_A_0_Slaves"));

 }

	/* On l'ajoute au tableau global � l'indice 156*/
top.TAB_GLOBAL_COMPO[156]=Compo_TVA_Compte_g�n�ral_3;

	/* Ce composant repr�sente: des �l�ments de la table tva sous le nom "Actif" */
 if(ALeDroit(0,"tva"))
 {
Compo_TVA_Actif_4.GenererXUL(top.document.getElementById("TVA_Liste_des_T_V_A_0_Slaves"));

 }

	/* On l'ajoute au tableau global � l'indice 157*/
top.TAB_GLOBAL_COMPO[157]=Compo_TVA_Actif_4;
var Col_N0_Libell�_De_Types_d_attribut_Liste_des_types_d_attribut_de_personne0=new clAttribut("ta_nom","typeattribut",null);

var Types_d_attribut_Libell�_1=new clAttribut("ta_nom","typeattribut",null);


	/* Ce composant repr�sente: typeattribut.ta_nom sous le nom "Libell�" */
var Compo_Types_d_attribut_Libell�_1=new clCompoTextBox(Types_d_attribut_Libell�_1,null,"Libell�",false,false);
var Col_N0_Libell�_De_Types_d_attribut_Cat�gories_2=new clAttribut("cr_libelle","categorie",null);

var Types_d_attribut_Libell�_3=new clAttribut("cr_libelle","categorie",null);


	/* Ce composant repr�sente: categorie.cr_libelle sous le nom "Libell�" */
var Compo_Types_d_attribut_Libell�_3=new clCompoTextBox(Types_d_attribut_Libell�_3,null,"Libell�",false,false);
var Types_d_attribut_Description_4=new clAttribut("cr_description","categorie",null);


	/* Ce composant repr�sente: categorie.cr_description sous le nom "Description" */
var Compo_Types_d_attribut_Description_4=new clCompoTextBox(Types_d_attribut_Description_4,null,"Description",false,false);
var Types_d_attribut_Cat�gories_2=new clEnsembleAttributs("categorie",
	new Array(
	new clLiaison(null,Col_N0_Libell�_De_Types_d_attribut_Cat�gories_2)
	),
	new Array(
	new clLiaison(null,Types_d_attribut_Libell�_3)
	,new clLiaison(null,Types_d_attribut_Description_4)
	));

var Titre_Types_d_attribut_Cat�gories_2=new Array("Libell�");

	/* Ce composant repr�sente: des �l�ments de la table categorie sous le nom "Cat�gories" */
var Compo_Types_d_attribut_Cat�gories_2=new clCompoListe(Types_d_attribut_Cat�gories_2,null,Titre_Types_d_attribut_Cat�gories_2,"Cat�gories",true,false);
var Joint_Esclave_Types_d_attribut_Cat�gories_2=new clJointureMulti("typeattribut",
	new Array(
	new stJointure("categorie","ta_numero","ta_numero",null,false)
	));
var Types_d_attribut_Liste_des_types_d_attribut_de_personne0=new clEnsembleAttributs("typeattribut",
	new Array(
	new clLiaison(null,Col_N0_Libell�_De_Types_d_attribut_Liste_des_types_d_attribut_de_personne0)
	),
	new Array(
	new clLiaison(null,Types_d_attribut_Libell�_1)
	,new clLiaison(Joint_Esclave_Types_d_attribut_Cat�gories_2,Types_d_attribut_Cat�gories_2)
	));

var Titre_Types_d_attribut_Liste_des_types_d_attribut_de_personne0=new Array("Libell�");

	/* Ce composant repr�sente: des �l�ments de la table typeattribut sous le nom "Liste des types d'attribut de personne" */
var Compo_Types_d_attribut_Liste_des_types_d_attribut_de_personne0=new clCompoListe(Types_d_attribut_Liste_des_types_d_attribut_de_personne0,new Array(new clInterfaceFiltrageVide()),Titre_Types_d_attribut_Liste_des_types_d_attribut_de_personne0,"Liste des types d'attribut de personne",true,false);

	/* Ce composant repr�sente: typeattribut.undefined sous le nom "Liste des types d'attribut de personne" */
 if(ALeDroit(0,"typeattribut"))
 {
Compo_Types_d_attribut_Liste_des_types_d_attribut_de_personne0.GenererXUL(top.document.getElementById("Types_d_attribut_Liste_des_types_d_attribut_de_personne0"));

 }

	/* On l'ajoute au tableau global � l'indice 28*/
top.TAB_GLOBAL_COMPO[28]=Compo_Types_d_attribut_Liste_des_types_d_attribut_de_personne0;

	/* Ce composant repr�sente: des �l�ments de la table typeattribut sous le nom "Libell�" */
 if(ALeDroit(0,"typeattribut"))
 {
Compo_Types_d_attribut_Libell�_1.GenererXUL(top.document.getElementById("Types_d_attribut_Liste_des_types_d_attribut_de_personne0_Slaves"));

 }

	/* On l'ajoute au tableau global � l'indice 30*/
top.TAB_GLOBAL_COMPO[30]=Compo_Types_d_attribut_Libell�_1;

	/* Ce composant repr�sente: categorie.undefined sous le nom "Cat�gories" */
 if(ALeDroit(0,"categorie"))
 {
Compo_Types_d_attribut_Cat�gories_2.GenererXUL(top.document.getElementById("Types_d_attribut_Cat�gories_2"));

 }

	/* On l'ajoute au tableau global � l'indice 31*/
top.TAB_GLOBAL_COMPO[31]=Compo_Types_d_attribut_Cat�gories_2;

	/* Ce composant repr�sente: des �l�ments de la table categorie sous le nom "Libell�" */
 if(ALeDroit(0,"categorie"))
 {
Compo_Types_d_attribut_Libell�_3.GenererXUL(top.document.getElementById("Types_d_attribut_Cat�gories_2_Slaves"));

 }

	/* On l'ajoute au tableau global � l'indice 33*/
top.TAB_GLOBAL_COMPO[33]=Compo_Types_d_attribut_Libell�_3;

	/* Ce composant repr�sente: des �l�ments de la table categorie sous le nom "Description" */
 if(ALeDroit(0,"categorie"))
 {
Compo_Types_d_attribut_Description_4.GenererXUL(top.document.getElementById("Types_d_attribut_Cat�gories_2_Slaves"));

 }

	/* On l'ajoute au tableau global � l'indice 34*/
top.TAB_GLOBAL_COMPO[34]=Compo_Types_d_attribut_Description_4;
var Col_N0_Libell�_De_Types_de_journaux_Liste_des_types_de_journaux0=new clAttribut("tj_libelle","typejournal",null);

var Types_de_journaux_Libell�_1=new clAttribut("tj_libelle","typejournal",null);


	/* Ce composant repr�sente: typejournal.tj_libelle sous le nom "Libell�" */
var Compo_Types_de_journaux_Libell�_1=new clCompoTextBox(Types_de_journaux_Libell�_1,null,"Libell�",false,false);
var Types_de_journaux_Liste_des_types_de_journaux0=new clEnsembleAttributs("typejournal",
	new Array(
	new clLiaison(null,Col_N0_Libell�_De_Types_de_journaux_Liste_des_types_de_journaux0)
	),
	new Array(
	new clLiaison(null,Types_de_journaux_Libell�_1)
	));

var Titre_Types_de_journaux_Liste_des_types_de_journaux0=new Array("Libell�");

	/* Ce composant repr�sente: des �l�ments de la table typejournal sous le nom "Liste des types de journaux" */
var Compo_Types_de_journaux_Liste_des_types_de_journaux0=new clCompoListe(Types_de_journaux_Liste_des_types_de_journaux0,new Array(new clInterfaceFiltrageVide()),Titre_Types_de_journaux_Liste_des_types_de_journaux0,"Liste des types de journaux",true,false);

	/* Ce composant repr�sente: typejournal.undefined sous le nom "Liste des types de journaux" */
 if(ALeDroit(0,"typejournal"))
 {
Compo_Types_de_journaux_Liste_des_types_de_journaux0.GenererXUL(top.document.getElementById("Types_de_journaux_Liste_des_types_de_journaux0"));

 }

	/* On l'ajoute au tableau global � l'indice 199*/
top.TAB_GLOBAL_COMPO[199]=Compo_Types_de_journaux_Liste_des_types_de_journaux0;

	/* Ce composant repr�sente: des �l�ments de la table typejournal sous le nom "Libell�" */
 if(ALeDroit(0,"typejournal"))
 {
Compo_Types_de_journaux_Libell�_1.GenererXUL(top.document.getElementById("Types_de_journaux_Liste_des_types_de_journaux0_Slaves"));

 }

	/* On l'ajoute au tableau global � l'indice 201*/
top.TAB_GLOBAL_COMPO[201]=Compo_Types_de_journaux_Libell�_1;
var Col_N0_Libell�_De_Types_de_lien_Liste_des_types_de_lien_entre_personne0=new clAttribut("tl_libelle","typelien",null);

var Types_de_lien_Libell�_1=new clAttribut("tl_libelle","typelien",null);


	/* Ce composant repr�sente: typelien.tl_libelle sous le nom "Libell�" */
var Compo_Types_de_lien_Libell�_1=new clCompoTextBox(Types_de_lien_Libell�_1,null,"Libell�",false,false);
var Types_de_lien_Description_2=new clAttribut("tl_description","typelien",null);


	/* Ce composant repr�sente: typelien.tl_description sous le nom "Description" */
var Compo_Types_de_lien_Description_2=new clCompoTextBox(Types_de_lien_Description_2,null,"Description",false,false);
var Types_de_lien_Liste_des_types_de_lien_entre_personne0=new clEnsembleAttributs("typelien",
	new Array(
	new clLiaison(null,Col_N0_Libell�_De_Types_de_lien_Liste_des_types_de_lien_entre_personne0)
	),
	new Array(
	new clLiaison(null,Types_de_lien_Libell�_1)
	,new clLiaison(null,Types_de_lien_Description_2)
	));

var Titre_Types_de_lien_Liste_des_types_de_lien_entre_personne0=new Array("Libell�");

	/* Ce composant repr�sente: des �l�ments de la table typelien sous le nom "Liste des types de lien entre personne" */
var Compo_Types_de_lien_Liste_des_types_de_lien_entre_personne0=new clCompoListe(Types_de_lien_Liste_des_types_de_lien_entre_personne0,new Array(new clInterfaceFiltrageVide()),Titre_Types_de_lien_Liste_des_types_de_lien_entre_personne0,"Liste des types de lien entre personne",true,false);

	/* Ce composant repr�sente: typelien.undefined sous le nom "Liste des types de lien entre personne" */
 if(ALeDroit(0,"typelien"))
 {
Compo_Types_de_lien_Liste_des_types_de_lien_entre_personne0.GenererXUL(top.document.getElementById("Types_de_lien_Liste_des_types_de_lien_entre_personne0"));

 }

	/* On l'ajoute au tableau global � l'indice 43*/
top.TAB_GLOBAL_COMPO[43]=Compo_Types_de_lien_Liste_des_types_de_lien_entre_personne0;

	/* Ce composant repr�sente: des �l�ments de la table typelien sous le nom "Libell�" */
 if(ALeDroit(0,"typelien"))
 {
Compo_Types_de_lien_Libell�_1.GenererXUL(top.document.getElementById("Types_de_lien_Liste_des_types_de_lien_entre_personne0_Slaves"));

 }

	/* On l'ajoute au tableau global � l'indice 45*/
top.TAB_GLOBAL_COMPO[45]=Compo_Types_de_lien_Libell�_1;

	/* Ce composant repr�sente: des �l�ments de la table typelien sous le nom "Description" */
 if(ALeDroit(0,"typelien"))
 {
Compo_Types_de_lien_Description_2.GenererXUL(top.document.getElementById("Types_de_lien_Liste_des_types_de_lien_entre_personne0_Slaves"));

 }

	/* On l'ajoute au tableau global � l'indice 46*/
top.TAB_GLOBAL_COMPO[46]=Compo_Types_de_lien_Description_2;
var Col_N0_Libell�_De_Types_de_personne_Liste_des_types_de_personne0=new clAttribut("tp_type","typepersonne",null);

var Types_de_personne_Libell�_1=new clAttribut("tp_type","typepersonne",null);


	/* Ce composant repr�sente: typepersonne.tp_type sous le nom "Libell�" */
var Compo_Types_de_personne_Libell�_1=new clCompoTextBox(Types_de_personne_Libell�_1,null,"Libell�",false,false);
var Types_de_personne_Liste_des_types_de_personne0=new clEnsembleAttributs("typepersonne",
	new Array(
	new clLiaison(null,Col_N0_Libell�_De_Types_de_personne_Liste_des_types_de_personne0)
	),
	new Array(
	new clLiaison(null,Types_de_personne_Libell�_1)
	));

var Titre_Types_de_personne_Liste_des_types_de_personne0=new Array("Libell�");

	/* Ce composant repr�sente: des �l�ments de la table typepersonne sous le nom "Liste des types de personne" */
var Compo_Types_de_personne_Liste_des_types_de_personne0=new clCompoListe(Types_de_personne_Liste_des_types_de_personne0,new Array(new clInterfaceFiltrageVide()),Titre_Types_de_personne_Liste_des_types_de_personne0,"Liste des types de personne",true,false);

	/* Ce composant repr�sente: typepersonne.undefined sous le nom "Liste des types de personne" */
 if(ALeDroit(0,"typepersonne"))
 {
Compo_Types_de_personne_Liste_des_types_de_personne0.GenererXUL(top.document.getElementById("Types_de_personne_Liste_des_types_de_personne0"));

 }

	/* On l'ajoute au tableau global � l'indice 47*/
top.TAB_GLOBAL_COMPO[47]=Compo_Types_de_personne_Liste_des_types_de_personne0;

	/* Ce composant repr�sente: des �l�ments de la table typepersonne sous le nom "Libell�" */
 if(ALeDroit(0,"typepersonne"))
 {
Compo_Types_de_personne_Libell�_1.GenererXUL(top.document.getElementById("Types_de_personne_Liste_des_types_de_personne0_Slaves"));

 }

	/* On l'ajoute au tableau global � l'indice 49*/
top.TAB_GLOBAL_COMPO[49]=Compo_Types_de_personne_Libell�_1;
var Col_N0_Nom_De_Types_de_soci�t�s_Liste_des_types_de_soci�t�s0=new clAttribut("ts_libelle","typesociete",null);

var Types_de_soci�t�s_Nom_1=new clAttribut("ts_libelle","typesociete",null);


	/* Ce composant repr�sente: typesociete.ts_libelle sous le nom "Nom" */
var Compo_Types_de_soci�t�s_Nom_1=new clCompoTextBox(Types_de_soci�t�s_Nom_1,null,"Nom",false,false);
var Types_de_soci�t�s_Liste_des_types_de_soci�t�s0=new clEnsembleAttributs("typesociete",
	new Array(
	new clLiaison(null,Col_N0_Nom_De_Types_de_soci�t�s_Liste_des_types_de_soci�t�s0)
	),
	new Array(
	new clLiaison(null,Types_de_soci�t�s_Nom_1)
	));

var Titre_Types_de_soci�t�s_Liste_des_types_de_soci�t�s0=new Array("Nom");

	/* Ce composant repr�sente: des �l�ments de la table typesociete sous le nom "Liste des types de soci�t�s" */
var Compo_Types_de_soci�t�s_Liste_des_types_de_soci�t�s0=new clCompoListe(Types_de_soci�t�s_Liste_des_types_de_soci�t�s0,new Array(new clInterfaceFiltrageVide()),Titre_Types_de_soci�t�s_Liste_des_types_de_soci�t�s0,"Liste des types de soci�t�s",true,false);

	/* Ce composant repr�sente: typesociete.undefined sous le nom "Liste des types de soci�t�s" */
 if(ALeDroit(0,"typesociete"))
 {
Compo_Types_de_soci�t�s_Liste_des_types_de_soci�t�s0.GenererXUL(top.document.getElementById("Types_de_soci�t�s_Liste_des_types_de_soci�t�s0"));

 }

	/* On l'ajoute au tableau global � l'indice 53*/
top.TAB_GLOBAL_COMPO[53]=Compo_Types_de_soci�t�s_Liste_des_types_de_soci�t�s0;

	/* Ce composant repr�sente: des �l�ments de la table typesociete sous le nom "Nom" */
 if(ALeDroit(0,"typesociete"))
 {
Compo_Types_de_soci�t�s_Nom_1.GenererXUL(top.document.getElementById("Types_de_soci�t�s_Liste_des_types_de_soci�t�s0_Slaves"));

 }

	/* On l'ajoute au tableau global � l'indice 55*/
top.TAB_GLOBAL_COMPO[55]=Compo_Types_de_soci�t�s_Nom_1;
var Col_N0_Libell�_De_Types_de_t�ches_Liste_des_types_de_t�ches0=new clAttribut("th_libelle","typetache",null);

var Types_de_t�ches_Libell�_1=new clAttribut("th_libelle","typetache",null);


	/* Ce composant repr�sente: typetache.th_libelle sous le nom "Libell�" */
var Compo_Types_de_t�ches_Libell�_1=new clCompoTextBox(Types_de_t�ches_Libell�_1,null,"Libell�",false,false);
var Types_de_t�ches_Description_2=new clAttribut("th_description","typetache",null);


	/* Ce composant repr�sente: typetache.th_description sous le nom "Description" */
var Compo_Types_de_t�ches_Description_2=new clCompoTextBox(Types_de_t�ches_Description_2,null,"Description",false,true);
var Types_de_t�ches_Liste_des_types_de_t�ches0=new clEnsembleAttributs("typetache",
	new Array(
	new clLiaison(null,Col_N0_Libell�_De_Types_de_t�ches_Liste_des_types_de_t�ches0)
	),
	new Array(
	new clLiaison(null,Types_de_t�ches_Libell�_1)
	,new clLiaison(null,Types_de_t�ches_Description_2)
	));

var Titre_Types_de_t�ches_Liste_des_types_de_t�ches0=new Array("Libell�");

	/* Ce composant repr�sente: des �l�ments de la table typetache sous le nom "Liste des types de t�ches" */
var Compo_Types_de_t�ches_Liste_des_types_de_t�ches0=new clCompoListe(Types_de_t�ches_Liste_des_types_de_t�ches0,new Array(new clInterfaceFiltrageVide()),Titre_Types_de_t�ches_Liste_des_types_de_t�ches0,"Liste des types de t�ches",true,false);

	/* Ce composant repr�sente: typetache.undefined sous le nom "Liste des types de t�ches" */
 if(ALeDroit(0,"typetache"))
 {
Compo_Types_de_t�ches_Liste_des_types_de_t�ches0.GenererXUL(top.document.getElementById("Types_de_t�ches_Liste_des_types_de_t�ches0"));

 }

	/* On l'ajoute au tableau global � l'indice 24*/
top.TAB_GLOBAL_COMPO[24]=Compo_Types_de_t�ches_Liste_des_types_de_t�ches0;

	/* Ce composant repr�sente: des �l�ments de la table typetache sous le nom "Libell�" */
 if(ALeDroit(0,"typetache"))
 {
Compo_Types_de_t�ches_Libell�_1.GenererXUL(top.document.getElementById("Types_de_t�ches_Liste_des_types_de_t�ches0_Slaves"));

 }

	/* On l'ajoute au tableau global � l'indice 26*/
top.TAB_GLOBAL_COMPO[26]=Compo_Types_de_t�ches_Libell�_1;

	/* Ce composant repr�sente: des �l�ments de la table typetache sous le nom "Description" */
 if(ALeDroit(0,"typetache"))
 {
Compo_Types_de_t�ches_Description_2.GenererXUL(top.document.getElementById("Types_de_t�ches_Liste_des_types_de_t�ches0_Slaves"));

 }

	/* On l'ajoute au tableau global � l'indice 27*/
top.TAB_GLOBAL_COMPO[27]=Compo_Types_de_t�ches_Description_2;
var Col_N0_Nom_De_Villes_Liste_des_villes0=new clAttribut("vi_nom","ville",null);

var Col_N1_Canton_De_Villes_Liste_des_villes0=new clAttribut("ct_nom","canton",null);

var Joint_Col_N1_Canton_De_Villes_Liste_des_villes0=new clJointureMulti("ville",
	new Array(
	new stJointure("canton","ct_numero","ct_numero",null,true)
	));
var Villes_Nom_1=new clAttribut("vi_nom","ville",null);


	/* Ce composant repr�sente: ville.vi_nom sous le nom "Nom" */
var Compo_Villes_Nom_1=new clCompoTextBox(Villes_Nom_1,null,"Nom",false,false);
var Villes_Canton_2=new clAttribut("ct_nom","canton",null);


	/* Ce composant repr�sente: canton.ct_nom sous le nom "Canton" */
var Compo_Villes_Canton_2=new clCompoListeDeroulanteSimple(Villes_Canton_2,new Array(clCompoListeDeroulanteSimple.prototype.FiltreParDefaut(),Filtre_Dep_Cantons_0=new clInterfaceFiltrageRelationOnglet("Cantons",Gerer_Cantons,OuvrirOnglet_Villes)),"Canton");
var Joint_Esclave_Villes_Canton_2=new clJointureMulti("ville",
	new Array(
	new stJointure("canton","ct_numero","ct_numero",null,false)
	));
var Villes_Liste_des_villes0=new clEnsembleAttributs("ville",
	new Array(
	new clLiaison(null,Col_N0_Nom_De_Villes_Liste_des_villes0)
	,new clLiaison(Joint_Col_N1_Canton_De_Villes_Liste_des_villes0,Col_N1_Canton_De_Villes_Liste_des_villes0)
	),
	new Array(
	new clLiaison(null,Villes_Nom_1)
	,new clLiaison(Joint_Esclave_Villes_Canton_2,Villes_Canton_2)
	));

var Titre_Villes_Liste_des_villes0=new Array("Nom","Canton");

	/* Ce composant repr�sente: des �l�ments de la table ville sous le nom "Liste des villes" */
var Compo_Villes_Liste_des_villes0=new clCompoListe(Villes_Liste_des_villes0,new Array(new clInterfaceFiltrageVide()),Titre_Villes_Liste_des_villes0,"Liste des villes",true,false);

	/* Ce composant repr�sente: ville.undefined sous le nom "Liste des villes" */
 if(ALeDroit(0,"ville"))
 {
Compo_Villes_Liste_des_villes0.GenererXUL(top.document.getElementById("Villes_Liste_des_villes0"));

 }

	/* On l'ajoute au tableau global � l'indice 123*/
top.TAB_GLOBAL_COMPO[123]=Compo_Villes_Liste_des_villes0;

	/* Ce composant repr�sente: des �l�ments de la table ville sous le nom "Nom" */
 if(ALeDroit(0,"ville"))
 {
Compo_Villes_Nom_1.GenererXUL(top.document.getElementById("Villes_Liste_des_villes0_Slaves"));

 }

	/* On l'ajoute au tableau global � l'indice 126*/
top.TAB_GLOBAL_COMPO[126]=Compo_Villes_Nom_1;

	/* Ce composant repr�sente: des �l�ments de la table canton sous le nom "Canton" */
 if(ALeDroit(0,"canton"))
 {
Compo_Villes_Canton_2.GenererXUL(top.document.getElementById("Villes_Liste_des_villes0_Slaves"));

 }

	/* On l'ajoute au tableau global � l'indice 127*/
top.TAB_GLOBAL_COMPO[127]=Compo_Villes_Canton_2;
Filtre_Dep_Acc�s_0.setComposant(TAB_GLOBAL_COMPO[3],null);
   /* ARBRE DU DESSUS */
   var box=top.document.getElementById("ListeDessus_Adh�rence_P�riodes_de_validit�_6");
   var Tab=ChercherCompo(box,"tree");
   var tree=Tab[0];
   tree.setAttribute("id","Tree_ListeDessus_Adh�rence_P�riodes_de_validit�_6");
   tree.setAttribute("ondblclick","DoubleClic_ArbreDessus(document.getElementById('Tree_ListeDessus_Adh�rence_P�riodes_de_validit�_6'), document.getElementById('Tree_ListeDessous_Adh�rence_P�riodes_de_validit�_6'))");

   /* ARBRE DU DESSOUS */
   var box=top.document.getElementById("Adh�rence_P�riodes_de_validit�_6");
   var Tab=ChercherCompo(box,"tree");
   var tree=Tab[0];
   tree.setAttribute("id","Tree_ListeDessous_Adh�rence_P�riodes_de_validit�_6");
   tree.setAttribute("onkeypress","Suppr_ListeDessous(event)");

Filtre_Dep_Agents_0.setComposant(TAB_GLOBAL_COMPO[104],null);
Filtre_Dep_Agents_1.setComposant(TAB_GLOBAL_COMPO[104],null);
Filtre_Dep_Cantons_0.setComposant(TAB_GLOBAL_COMPO[137],null);
   /* ARBRE DU DESSUS */
   var box=top.document.getElementById("ListeDessus_Codes_postaux_Villes_li�es_au_code_postal_4");
   var Tab=ChercherCompo(box,"tree");
   var tree=Tab[0];
   tree.setAttribute("id","Tree_ListeDessus_Codes_postaux_Villes_li�es_au_code_postal_4");
   tree.setAttribute("ondblclick","DoubleClic_ArbreDessus(document.getElementById('Tree_ListeDessus_Codes_postaux_Villes_li�es_au_code_postal_4'), document.getElementById('Tree_ListeDessous_Codes_postaux_Villes_li�es_au_code_postal_4'))");

   /* ARBRE DU DESSOUS */
   var box=top.document.getElementById("Codes_postaux_Villes_li�es_au_code_postal_4");
   var Tab=ChercherCompo(box,"tree");
   var tree=Tab[0];
   tree.setAttribute("id","Tree_ListeDessous_Codes_postaux_Villes_li�es_au_code_postal_4");
   tree.setAttribute("onkeypress","Suppr_ListeDessous(event)");

Filtre_Dep_Profils_de_droits_0.setComposant(TAB_GLOBAL_COMPO[88],null);
Filtre_DepFor_Employ�s_0.setComposant(TAB_GLOBAL_COMPO[77],null);
Filtre_Dep_�quipes_0.setComposant(TAB_GLOBAL_COMPO[120],null);
Filtre_Dep_Groupe_de_tables_0.setComposant(TAB_GLOBAL_COMPO[99],null);
   /* ARBRE DU DESSUS */
   var box=top.document.getElementById("ListeDessus_Groupes_de_cantons_Cantons_appartenant_au_groupe_3");
   var Tab=ChercherCompo(box,"tree");
   var tree=Tab[0];
   tree.setAttribute("id","Tree_ListeDessus_Groupes_de_cantons_Cantons_appartenant_au_groupe_3");
   tree.setAttribute("ondblclick","DoubleClic_ArbreDessus(document.getElementById('Tree_ListeDessus_Groupes_de_cantons_Cantons_appartenant_au_groupe_3'), document.getElementById('Tree_ListeDessous_Groupes_de_cantons_Cantons_appartenant_au_groupe_3'))");

   /* ARBRE DU DESSOUS */
   var box=top.document.getElementById("Groupes_de_cantons_Cantons_appartenant_au_groupe_3");
   var Tab=ChercherCompo(box,"tree");
   var tree=Tab[0];
   tree.setAttribute("id","Tree_ListeDessous_Groupes_de_cantons_Cantons_appartenant_au_groupe_3");
   tree.setAttribute("onkeypress","Suppr_ListeDessous(event)");

Filtre_Dep_P�riodes_0.setComposant(TAB_GLOBAL_COMPO[194],null);
Filtre_Dep_Produits_0.setComposant(TAB_GLOBAL_COMPO[158],null);
Filtre_Dep_Produits_1.setComposant(TAB_GLOBAL_COMPO[158],null);
Filtre_DepFor_Services_0.setComposant(TAB_GLOBAL_COMPO[67],null);
Filtre_Dep_TVA_0.setComposant(TAB_GLOBAL_COMPO[150],null);
Filtre_Dep_Types_de_soci�t�s_0.setComposant(TAB_GLOBAL_COMPO[53],null);
Filtre_Dep_Villes_0.setComposant(TAB_GLOBAL_COMPO[123],null);
 if(ALeDroit(5,"acces"))
 {
/* On refresh les composants non d�pendents de l'onget Acc�s*/
var Composant_0 = TAB_GLOBAL_COMPO[3];
if (Composant_0!=null){
Composant_0.ActiverComposant(true);
Composant_0.Refresh();
}

 }
 else
 {
top.document.getElementById("Onglet_Acc�s").hidden=true;
if (top.document.getElementById("Onglet_Acc�s").selected)
	top.document.getElementById("Tous_les_onglets").advanceSelectedTab(1);

 }
var nb_button=0
 if(ALeDroit(2,"acces"))
 {
nb_button++;
top.document.getElementById("Insert_Acc�s_Liste_des_niveaux_d_acc�s0").disabled=false;

 }
 else
 {
top.document.getElementById("Insert_Acc�s_Liste_des_niveaux_d_acc�s0").hidden=true;

 }
 if(ALeDroit(4,"acces"))
 {
nb_button++;
top.document.getElementById("Delete_Acc�s_Liste_des_niveaux_d_acc�s0").disabled=false;

 }
 else
 {
top.document.getElementById("Delete_Acc�s_Liste_des_niveaux_d_acc�s0").hidden=true;

 }
 if(ALeDroit(1,"acces"))
 {
nb_button++;
top.document.getElementById("Update_Acc�s_Liste_des_niveaux_d_acc�s0").disabled=false;

 }
 else
 {
top.document.getElementById("Update_Acc�s_Liste_des_niveaux_d_acc�s0").hidden=true;

 }
if (nb_button==0)
{
	top.document.getElementById("Validate_Acc�s_Liste_des_niveaux_d_acc�s0").hidden=true;
	top.document.getElementById("Annuler_Acc�s_Liste_des_niveaux_d_acc�s0").hidden=true;
}
 if(ALeDroit(5,"adherence"))
 {
/* On refresh les composants non d�pendents de l'onget Adh�rence*/
var Composant_0 = TAB_GLOBAL_COMPO[180];
if (Composant_0!=null){
Composant_0.ActiverComposant(true);
Composant_0.Refresh();
}
var Composant_5 = TAB_GLOBAL_COMPO[188];
if (Composant_5!=null){
Composant_5.ActiverComposant(true);
Composant_5.Refresh();
}

 }
 else
 {
top.document.getElementById("Onglet_Adh�rence").hidden=true;
if (top.document.getElementById("Onglet_Adh�rence").selected)
	top.document.getElementById("Tous_les_onglets").advanceSelectedTab(1);

 }
var nb_button=0
 if(ALeDroit(2,"adherence"))
 {
nb_button++;
top.document.getElementById("Insert_Adh�rence_Liste_des_adh�rences0").disabled=false;

 }
 else
 {
top.document.getElementById("Insert_Adh�rence_Liste_des_adh�rences0").hidden=true;

 }
 if(ALeDroit(4,"adherence"))
 {
nb_button++;
top.document.getElementById("Delete_Adh�rence_Liste_des_adh�rences0").disabled=false;

 }
 else
 {
top.document.getElementById("Delete_Adh�rence_Liste_des_adh�rences0").hidden=true;

 }
 if(ALeDroit(1,"adherence"))
 {
nb_button++;
top.document.getElementById("Update_Adh�rence_Liste_des_adh�rences0").disabled=false;

 }
 else
 {
top.document.getElementById("Update_Adh�rence_Liste_des_adh�rences0").hidden=true;

 }
if (nb_button==0)
{
	top.document.getElementById("Validate_Adh�rence_Liste_des_adh�rences0").hidden=true;
	top.document.getElementById("Annuler_Adh�rence_Liste_des_adh�rences0").hidden=true;
}
 if(ALeDroit(5,"agent"))
 {
/* On refresh les composants non d�pendents de l'onget Agents*/
var Composant_0 = TAB_GLOBAL_COMPO[104];
if (Composant_0!=null){
Composant_0.ActiverComposant(true);
Composant_0.Refresh();
}

 }
 else
 {
top.document.getElementById("Onglet_Agents").hidden=true;
if (top.document.getElementById("Onglet_Agents").selected)
	top.document.getElementById("Tous_les_onglets").advanceSelectedTab(1);

 }
var nb_button=0
 if(ALeDroit(2,"agent"))
 {
nb_button++;
top.document.getElementById("Insert_Agents_Liste_des_agents0").disabled=false;

 }
 else
 {
top.document.getElementById("Insert_Agents_Liste_des_agents0").hidden=true;

 }
 if(ALeDroit(4,"agent"))
 {
nb_button++;
top.document.getElementById("Delete_Agents_Liste_des_agents0").disabled=false;

 }
 else
 {
top.document.getElementById("Delete_Agents_Liste_des_agents0").hidden=true;

 }
 if(ALeDroit(1,"agent"))
 {
nb_button++;
top.document.getElementById("Update_Agents_Liste_des_agents0").disabled=false;

 }
 else
 {
top.document.getElementById("Update_Agents_Liste_des_agents0").hidden=true;

 }
if (nb_button==0)
{
	top.document.getElementById("Validate_Agents_Liste_des_agents0").hidden=true;
	top.document.getElementById("Annuler_Agents_Liste_des_agents0").hidden=true;
}
 if(ALeDroit(5,"canton"))
 {
/* On refresh les composants non d�pendents de l'onget Cantons*/
var Composant_0 = TAB_GLOBAL_COMPO[137];
if (Composant_0!=null){
Composant_0.ActiverComposant(true);
Composant_0.Refresh();
}

 }
 else
 {
top.document.getElementById("Onglet_Cantons").hidden=true;
if (top.document.getElementById("Onglet_Cantons").selected)
	top.document.getElementById("Tous_les_onglets").advanceSelectedTab(1);

 }
var nb_button=0
 if(ALeDroit(2,"canton"))
 {
nb_button++;
top.document.getElementById("Insert_Cantons_Liste_des_cantons0").disabled=false;

 }
 else
 {
top.document.getElementById("Insert_Cantons_Liste_des_cantons0").hidden=true;

 }
 if(ALeDroit(4,"canton"))
 {
nb_button++;
top.document.getElementById("Delete_Cantons_Liste_des_cantons0").disabled=false;

 }
 else
 {
top.document.getElementById("Delete_Cantons_Liste_des_cantons0").hidden=true;

 }
 if(ALeDroit(1,"canton"))
 {
nb_button++;
top.document.getElementById("Update_Cantons_Liste_des_cantons0").disabled=false;

 }
 else
 {
top.document.getElementById("Update_Cantons_Liste_des_cantons0").hidden=true;

 }
if (nb_button==0)
{
	top.document.getElementById("Validate_Cantons_Liste_des_cantons0").hidden=true;
	top.document.getElementById("Annuler_Cantons_Liste_des_cantons0").hidden=true;
}
 if(ALeDroit(5,"codepostal"))
 {
/* On refresh les composants non d�pendents de l'onget Codes postaux*/
var Composant_0 = TAB_GLOBAL_COMPO[128];
if (Composant_0!=null){
Composant_0.ActiverComposant(true);
Composant_0.Refresh();
}
var Composant_3 = TAB_GLOBAL_COMPO[133];
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
top.document.getElementById("Insert_Codes_postaux_Liste_des_codes_postaux0").disabled=false;

 }
 else
 {
top.document.getElementById("Insert_Codes_postaux_Liste_des_codes_postaux0").hidden=true;

 }
 if(ALeDroit(4,"codepostal"))
 {
nb_button++;
top.document.getElementById("Delete_Codes_postaux_Liste_des_codes_postaux0").disabled=false;

 }
 else
 {
top.document.getElementById("Delete_Codes_postaux_Liste_des_codes_postaux0").hidden=true;

 }
 if(ALeDroit(1,"codepostal"))
 {
nb_button++;
top.document.getElementById("Update_Codes_postaux_Liste_des_codes_postaux0").disabled=false;

 }
 else
 {
top.document.getElementById("Update_Codes_postaux_Liste_des_codes_postaux0").hidden=true;

 }
if (nb_button==0)
{
	top.document.getElementById("Validate_Codes_postaux_Liste_des_codes_postaux0").hidden=true;
	top.document.getElementById("Annuler_Codes_postaux_Liste_des_codes_postaux0").hidden=true;
}
 if(ALeDroit(5,"droitprofil"))
 {
/* On refresh les composants non d�pendents de l'onget Profils de droits*/
var Composant_0 = TAB_GLOBAL_COMPO[88];
if (Composant_0!=null){
Composant_0.ActiverComposant(true);
Composant_0.Refresh();
}

 }
 else
 {
top.document.getElementById("Onglet_Profils_de_droits").hidden=true;
if (top.document.getElementById("Onglet_Profils_de_droits").selected)
	top.document.getElementById("Tous_les_onglets").advanceSelectedTab(1);

 }
var nb_button=0
 if(ALeDroit(2,"droitprofil"))
 {
nb_button++;
top.document.getElementById("Insert_Profils_de_droits_Liste_des_profils_de_droits0").disabled=false;

 }
 else
 {
top.document.getElementById("Insert_Profils_de_droits_Liste_des_profils_de_droits0").hidden=true;

 }
 if(ALeDroit(4,"droitprofil"))
 {
nb_button++;
top.document.getElementById("Delete_Profils_de_droits_Liste_des_profils_de_droits0").disabled=false;

 }
 else
 {
top.document.getElementById("Delete_Profils_de_droits_Liste_des_profils_de_droits0").hidden=true;

 }
 if(ALeDroit(1,"droitprofil"))
 {
nb_button++;
top.document.getElementById("Update_Profils_de_droits_Liste_des_profils_de_droits0").disabled=false;

 }
 else
 {
top.document.getElementById("Update_Profils_de_droits_Liste_des_profils_de_droits0").hidden=true;

 }
if (nb_button==0)
{
	top.document.getElementById("Validate_Profils_de_droits_Liste_des_profils_de_droits0").hidden=true;
	top.document.getElementById("Annuler_Profils_de_droits_Liste_des_profils_de_droits0").hidden=true;
}
var nb_button=0
 if(ALeDroit(2,"droit"))
 {
nb_button++;

 }
 else
 {
top.document.getElementById("Insert_Profils_de_droits_Droits_2").hidden=true;

 }
 if(ALeDroit(4,"droit"))
 {
nb_button++;

 }
 else
 {
top.document.getElementById("Delete_Profils_de_droits_Droits_2").hidden=true;

 }
 if(ALeDroit(1,"droit"))
 {
nb_button++;

 }
 else
 {
top.document.getElementById("Update_Profils_de_droits_Droits_2").hidden=true;

 }
if (nb_button==0)
{
	top.document.getElementById("Validate_Profils_de_droits_Droits_2").hidden=true;
	top.document.getElementById("Annuler_Profils_de_droits_Droits_2").hidden=true;
}
 if(ALeDroit(5,"employe"))
 {
/* On refresh les composants non d�pendents de l'onget Employ�s*/
var Composant_0 = TAB_GLOBAL_COMPO[77];
if (Composant_0!=null){
Composant_0.ActiverComposant(true);
Composant_0.Refresh();
}

 }
 else
 {
top.document.getElementById("Onglet_Employ�s").hidden=true;
if (top.document.getElementById("Onglet_Employ�s").selected)
	top.document.getElementById("Tous_les_onglets").advanceSelectedTab(1);

 }
var nb_button=0
 if(ALeDroit(2,"employe"))
 {
nb_button++;
top.document.getElementById("Insert_Employ�s_Liste_des_employ�s0").disabled=false;

 }
 else
 {
top.document.getElementById("Insert_Employ�s_Liste_des_employ�s0").hidden=true;

 }
 if(ALeDroit(4,"employe"))
 {
nb_button++;
top.document.getElementById("Delete_Employ�s_Liste_des_employ�s0").disabled=false;

 }
 else
 {
top.document.getElementById("Delete_Employ�s_Liste_des_employ�s0").hidden=true;

 }
 if(ALeDroit(1,"employe"))
 {
nb_button++;
top.document.getElementById("Update_Employ�s_Liste_des_employ�s0").disabled=false;

 }
 else
 {
top.document.getElementById("Update_Employ�s_Liste_des_employ�s0").hidden=true;

 }
if (nb_button==0)
{
	top.document.getElementById("Validate_Employ�s_Liste_des_employ�s0").hidden=true;
	top.document.getElementById("Annuler_Employ�s_Liste_des_employ�s0").hidden=true;
}
 if(ALeDroit(5,"equipe"))
 {
/* On refresh les composants non d�pendents de l'onget �quipes*/
var Composant_0 = TAB_GLOBAL_COMPO[120];
if (Composant_0!=null){
Composant_0.ActiverComposant(true);
Composant_0.Refresh();
}

 }
 else
 {
top.document.getElementById("Onglet_�quipes").hidden=true;
if (top.document.getElementById("Onglet_�quipes").selected)
	top.document.getElementById("Tous_les_onglets").advanceSelectedTab(1);

 }
var nb_button=0
 if(ALeDroit(2,"equipe"))
 {
nb_button++;
top.document.getElementById("Insert_�quipes_Liste_des_�quipes0").disabled=false;

 }
 else
 {
top.document.getElementById("Insert_�quipes_Liste_des_�quipes0").hidden=true;

 }
 if(ALeDroit(4,"equipe"))
 {
nb_button++;
top.document.getElementById("Delete_�quipes_Liste_des_�quipes0").disabled=false;

 }
 else
 {
top.document.getElementById("Delete_�quipes_Liste_des_�quipes0").hidden=true;

 }
 if(ALeDroit(1,"equipe"))
 {
nb_button++;
top.document.getElementById("Update_�quipes_Liste_des_�quipes0").disabled=false;

 }
 else
 {
top.document.getElementById("Update_�quipes_Liste_des_�quipes0").hidden=true;

 }
if (nb_button==0)
{
	top.document.getElementById("Validate_�quipes_Liste_des_�quipes0").hidden=true;
	top.document.getElementById("Annuler_�quipes_Liste_des_�quipes0").hidden=true;
}
 if(ALeDroit(5,"etatpersonne"))
 {
/* On refresh les composants non d�pendents de l'onget Etats de personne*/
var Composant_0 = TAB_GLOBAL_COMPO[50];
if (Composant_0!=null){
Composant_0.ActiverComposant(true);
Composant_0.Refresh();
}

 }
 else
 {
top.document.getElementById("Onglet_Etats_de_personne").hidden=true;
if (top.document.getElementById("Onglet_Etats_de_personne").selected)
	top.document.getElementById("Tous_les_onglets").advanceSelectedTab(1);

 }
var nb_button=0
 if(ALeDroit(2,"etatpersonne"))
 {
nb_button++;
top.document.getElementById("Insert_Etats_de_personne_Liste_des_�tats_de_personne0").disabled=false;

 }
 else
 {
top.document.getElementById("Insert_Etats_de_personne_Liste_des_�tats_de_personne0").hidden=true;

 }
 if(ALeDroit(4,"etatpersonne"))
 {
nb_button++;
top.document.getElementById("Delete_Etats_de_personne_Liste_des_�tats_de_personne0").disabled=false;

 }
 else
 {
top.document.getElementById("Delete_Etats_de_personne_Liste_des_�tats_de_personne0").hidden=true;

 }
 if(ALeDroit(1,"etatpersonne"))
 {
nb_button++;
top.document.getElementById("Update_Etats_de_personne_Liste_des_�tats_de_personne0").disabled=false;

 }
 else
 {
top.document.getElementById("Update_Etats_de_personne_Liste_des_�tats_de_personne0").hidden=true;

 }
if (nb_button==0)
{
	top.document.getElementById("Validate_Etats_de_personne_Liste_des_�tats_de_personne0").hidden=true;
	top.document.getElementById("Annuler_Etats_de_personne_Liste_des_�tats_de_personne0").hidden=true;
}
 if(ALeDroit(5,"groupetable"))
 {
/* On refresh les composants non d�pendents de l'onget Groupe de tables*/
var Composant_0 = TAB_GLOBAL_COMPO[99];
if (Composant_0!=null){
Composant_0.ActiverComposant(true);
Composant_0.Refresh();
}

 }
 else
 {
top.document.getElementById("Onglet_Groupe_de_tables").hidden=true;
if (top.document.getElementById("Onglet_Groupe_de_tables").selected)
	top.document.getElementById("Tous_les_onglets").advanceSelectedTab(1);

 }
var nb_button=0
 if(ALeDroit(2,"groupetable"))
 {
nb_button++;
top.document.getElementById("Insert_Groupe_de_tables_Liste_des_groupes_de_tables0").disabled=false;

 }
 else
 {
top.document.getElementById("Insert_Groupe_de_tables_Liste_des_groupes_de_tables0").hidden=true;

 }
 if(ALeDroit(4,"groupetable"))
 {
nb_button++;
top.document.getElementById("Delete_Groupe_de_tables_Liste_des_groupes_de_tables0").disabled=false;

 }
 else
 {
top.document.getElementById("Delete_Groupe_de_tables_Liste_des_groupes_de_tables0").hidden=true;

 }
 if(ALeDroit(1,"groupetable"))
 {
nb_button++;
top.document.getElementById("Update_Groupe_de_tables_Liste_des_groupes_de_tables0").disabled=false;

 }
 else
 {
top.document.getElementById("Update_Groupe_de_tables_Liste_des_groupes_de_tables0").hidden=true;

 }
if (nb_button==0)
{
	top.document.getElementById("Validate_Groupe_de_tables_Liste_des_groupes_de_tables0").hidden=true;
	top.document.getElementById("Annuler_Groupe_de_tables_Liste_des_groupes_de_tables0").hidden=true;
}
 if(ALeDroit(5,"groupecanton"))
 {
/* On refresh les composants non d�pendents de l'onget Groupes de cantons*/
var Composant_0 = TAB_GLOBAL_COMPO[35];
if (Composant_0!=null){
Composant_0.ActiverComposant(true);
Composant_0.Refresh();
}
var Composant_2 = TAB_GLOBAL_COMPO[38];
if (Composant_2!=null){
Composant_2.ActiverComposant(true);
Composant_2.Refresh();
}

 }
 else
 {
top.document.getElementById("Onglet_Groupes_de_cantons").hidden=true;
if (top.document.getElementById("Onglet_Groupes_de_cantons").selected)
	top.document.getElementById("Tous_les_onglets").advanceSelectedTab(1);

 }
var nb_button=0
 if(ALeDroit(2,"groupecanton"))
 {
nb_button++;
top.document.getElementById("Insert_Groupes_de_cantons_Liste_des_groupes_de_cantons0").disabled=false;

 }
 else
 {
top.document.getElementById("Insert_Groupes_de_cantons_Liste_des_groupes_de_cantons0").hidden=true;

 }
 if(ALeDroit(4,"groupecanton"))
 {
nb_button++;
top.document.getElementById("Delete_Groupes_de_cantons_Liste_des_groupes_de_cantons0").disabled=false;

 }
 else
 {
top.document.getElementById("Delete_Groupes_de_cantons_Liste_des_groupes_de_cantons0").hidden=true;

 }
 if(ALeDroit(1,"groupecanton"))
 {
nb_button++;
top.document.getElementById("Update_Groupes_de_cantons_Liste_des_groupes_de_cantons0").disabled=false;

 }
 else
 {
top.document.getElementById("Update_Groupes_de_cantons_Liste_des_groupes_de_cantons0").hidden=true;

 }
if (nb_button==0)
{
	top.document.getElementById("Validate_Groupes_de_cantons_Liste_des_groupes_de_cantons0").hidden=true;
	top.document.getElementById("Annuler_Groupes_de_cantons_Liste_des_groupes_de_cantons0").hidden=true;
}
 if(ALeDroit(5,"impression"))
 {
/* On refresh les composants non d�pendents de l'onget Mod�les d'impressions*/
var Composant_0 = TAB_GLOBAL_COMPO[217];
if (Composant_0!=null){
Composant_0.ActiverComposant(true);
Composant_0.Refresh();
}

 }
 else
 {
top.document.getElementById("Onglet_Mod�les_d_impressions").hidden=true;
if (top.document.getElementById("Onglet_Mod�les_d_impressions").selected)
	top.document.getElementById("Tous_les_onglets").advanceSelectedTab(1);

 }
var nb_button=0
 if(ALeDroit(2,"impression"))
 {
nb_button++;
top.document.getElementById("Insert_Mod�les_d_impressions_Liste_des_mod�les_d_impressions0").disabled=false;

 }
 else
 {
top.document.getElementById("Insert_Mod�les_d_impressions_Liste_des_mod�les_d_impressions0").hidden=true;

 }
 if(ALeDroit(4,"impression"))
 {
nb_button++;
top.document.getElementById("Delete_Mod�les_d_impressions_Liste_des_mod�les_d_impressions0").disabled=false;

 }
 else
 {
top.document.getElementById("Delete_Mod�les_d_impressions_Liste_des_mod�les_d_impressions0").hidden=true;

 }
 if(ALeDroit(1,"impression"))
 {
nb_button++;
top.document.getElementById("Update_Mod�les_d_impressions_Liste_des_mod�les_d_impressions0").disabled=false;

 }
 else
 {
top.document.getElementById("Update_Mod�les_d_impressions_Liste_des_mod�les_d_impressions0").hidden=true;

 }
if (nb_button==0)
{
	top.document.getElementById("Validate_Mod�les_d_impressions_Liste_des_mod�les_d_impressions0").hidden=true;
	top.document.getElementById("Annuler_Mod�les_d_impressions_Liste_des_mod�les_d_impressions0").hidden=true;
}
 if(ALeDroit(5,"table_impression"))
 {
/* On refresh les composants non d�pendents de l'onget Impressions*/
var Composant_0 = TAB_GLOBAL_COMPO[226];
if (Composant_0!=null){
Composant_0.ActiverComposant(true);
Composant_0.Refresh();
}

 }
 else
 {
top.document.getElementById("Onglet_Impressions").hidden=true;
if (top.document.getElementById("Onglet_Impressions").selected)
	top.document.getElementById("Tous_les_onglets").advanceSelectedTab(1);

 }
var nb_button=0
 if(ALeDroit(2,"table_impression"))
 {
nb_button++;
top.document.getElementById("Insert_Impressions_Liste_des_mod�les_d_impressions0").disabled=false;

 }
 else
 {
top.document.getElementById("Insert_Impressions_Liste_des_mod�les_d_impressions0").hidden=true;

 }
 if(ALeDroit(4,"table_impression"))
 {
nb_button++;
top.document.getElementById("Delete_Impressions_Liste_des_mod�les_d_impressions0").disabled=false;

 }
 else
 {
top.document.getElementById("Delete_Impressions_Liste_des_mod�les_d_impressions0").hidden=true;

 }
 if(ALeDroit(1,"table_impression"))
 {
nb_button++;
top.document.getElementById("Update_Impressions_Liste_des_mod�les_d_impressions0").disabled=false;

 }
 else
 {
top.document.getElementById("Update_Impressions_Liste_des_mod�les_d_impressions0").hidden=true;

 }
if (nb_button==0)
{
	top.document.getElementById("Validate_Impressions_Liste_des_mod�les_d_impressions0").hidden=true;
	top.document.getElementById("Annuler_Impressions_Liste_des_mod�les_d_impressions0").hidden=true;
}
 if(ALeDroit(5,"modele"))
 {
/* On refresh les composants non d�pendents de l'onget Mod�les*/
var Composant_0 = TAB_GLOBAL_COMPO[205];
if (Composant_0!=null){
Composant_0.ActiverComposant(true);
Composant_0.Refresh();
}

 }
 else
 {
top.document.getElementById("Onglet_Mod�les").hidden=true;
if (top.document.getElementById("Onglet_Mod�les").selected)
	top.document.getElementById("Tous_les_onglets").advanceSelectedTab(1);

 }
var nb_button=0
 if(ALeDroit(2,"modele"))
 {
nb_button++;
top.document.getElementById("Insert_Mod�les_Liste_des_mod�les0").disabled=false;

 }
 else
 {
top.document.getElementById("Insert_Mod�les_Liste_des_mod�les0").hidden=true;

 }
 if(ALeDroit(4,"modele"))
 {
nb_button++;
top.document.getElementById("Delete_Mod�les_Liste_des_mod�les0").disabled=false;

 }
 else
 {
top.document.getElementById("Delete_Mod�les_Liste_des_mod�les0").hidden=true;

 }
 if(ALeDroit(1,"modele"))
 {
nb_button++;
top.document.getElementById("Update_Mod�les_Liste_des_mod�les0").disabled=false;

 }
 else
 {
top.document.getElementById("Update_Mod�les_Liste_des_mod�les0").hidden=true;

 }
if (nb_button==0)
{
	top.document.getElementById("Validate_Mod�les_Liste_des_mod�les0").hidden=true;
	top.document.getElementById("Annuler_Mod�les_Liste_des_mod�les0").hidden=true;
}
var nb_button=0
 if(ALeDroit(2,"lignemodele"))
 {
nb_button++;

 }
 else
 {
top.document.getElementById("Insert_Mod�les_Lignes_du_mod�le_2").hidden=true;

 }
 if(ALeDroit(4,"lignemodele"))
 {
nb_button++;

 }
 else
 {
top.document.getElementById("Delete_Mod�les_Lignes_du_mod�le_2").hidden=true;

 }
 if(ALeDroit(1,"lignemodele"))
 {
nb_button++;

 }
 else
 {
top.document.getElementById("Update_Mod�les_Lignes_du_mod�le_2").hidden=true;

 }
if (nb_button==0)
{
	top.document.getElementById("Validate_Mod�les_Lignes_du_mod�le_2").hidden=true;
	top.document.getElementById("Annuler_Mod�les_Lignes_du_mod�le_2").hidden=true;
}
 if(ALeDroit(5,"modereglement"))
 {
/* On refresh les composants non d�pendents de l'onget Mode de r�glements*/
var Composant_0 = TAB_GLOBAL_COMPO[8];
if (Composant_0!=null){
Composant_0.ActiverComposant(true);
Composant_0.Refresh();
}

 }
 else
 {
top.document.getElementById("Onglet_Mode_de_r�glements").hidden=true;
if (top.document.getElementById("Onglet_Mode_de_r�glements").selected)
	top.document.getElementById("Tous_les_onglets").advanceSelectedTab(1);

 }
var nb_button=0
 if(ALeDroit(2,"modereglement"))
 {
nb_button++;
top.document.getElementById("Insert_Mode_de_r�glements_Liste_des_modes_de_r�glement0").disabled=false;

 }
 else
 {
top.document.getElementById("Insert_Mode_de_r�glements_Liste_des_modes_de_r�glement0").hidden=true;

 }
 if(ALeDroit(4,"modereglement"))
 {
nb_button++;
top.document.getElementById("Delete_Mode_de_r�glements_Liste_des_modes_de_r�glement0").disabled=false;

 }
 else
 {
top.document.getElementById("Delete_Mode_de_r�glements_Liste_des_modes_de_r�glement0").hidden=true;

 }
 if(ALeDroit(1,"modereglement"))
 {
nb_button++;
top.document.getElementById("Update_Mode_de_r�glements_Liste_des_modes_de_r�glement0").disabled=false;

 }
 else
 {
top.document.getElementById("Update_Mode_de_r�glements_Liste_des_modes_de_r�glement0").hidden=true;

 }
if (nb_button==0)
{
	top.document.getElementById("Validate_Mode_de_r�glements_Liste_des_modes_de_r�glement0").hidden=true;
	top.document.getElementById("Annuler_Mode_de_r�glements_Liste_des_modes_de_r�glement0").hidden=true;
}
 if(ALeDroit(5,"moderepartition"))
 {
/* On refresh les composants non d�pendents de l'onget Modes de r�partition*/
var Composant_0 = TAB_GLOBAL_COMPO[15];
if (Composant_0!=null){
Composant_0.ActiverComposant(true);
Composant_0.Refresh();
}

 }
 else
 {
top.document.getElementById("Onglet_Modes_de_r�partition").hidden=true;
if (top.document.getElementById("Onglet_Modes_de_r�partition").selected)
	top.document.getElementById("Tous_les_onglets").advanceSelectedTab(1);

 }
var nb_button=0
 if(ALeDroit(2,"moderepartition"))
 {
nb_button++;
top.document.getElementById("Insert_Modes_de_r�partition_Liste_des_modes_de_r�partition0").disabled=false;

 }
 else
 {
top.document.getElementById("Insert_Modes_de_r�partition_Liste_des_modes_de_r�partition0").hidden=true;

 }
 if(ALeDroit(4,"moderepartition"))
 {
nb_button++;
top.document.getElementById("Delete_Modes_de_r�partition_Liste_des_modes_de_r�partition0").disabled=false;

 }
 else
 {
top.document.getElementById("Delete_Modes_de_r�partition_Liste_des_modes_de_r�partition0").hidden=true;

 }
 if(ALeDroit(1,"moderepartition"))
 {
nb_button++;
top.document.getElementById("Update_Modes_de_r�partition_Liste_des_modes_de_r�partition0").disabled=false;

 }
 else
 {
top.document.getElementById("Update_Modes_de_r�partition_Liste_des_modes_de_r�partition0").hidden=true;

 }
if (nb_button==0)
{
	top.document.getElementById("Validate_Modes_de_r�partition_Liste_des_modes_de_r�partition0").hidden=true;
	top.document.getElementById("Annuler_Modes_de_r�partition_Liste_des_modes_de_r�partition0").hidden=true;
}
 if(ALeDroit(5,"periode"))
 {
/* On refresh les composants non d�pendents de l'onget P�riodes*/
var Composant_0 = TAB_GLOBAL_COMPO[194];
if (Composant_0!=null){
Composant_0.ActiverComposant(true);
Composant_0.Refresh();
}

 }
 else
 {
top.document.getElementById("Onglet_P�riodes").hidden=true;
if (top.document.getElementById("Onglet_P�riodes").selected)
	top.document.getElementById("Tous_les_onglets").advanceSelectedTab(1);

 }
var nb_button=0
 if(ALeDroit(2,"periode"))
 {
nb_button++;
top.document.getElementById("Insert_P�riodes_Liste_des_p�riodes0").disabled=false;

 }
 else
 {
top.document.getElementById("Insert_P�riodes_Liste_des_p�riodes0").hidden=true;

 }
 if(ALeDroit(4,"periode"))
 {
nb_button++;
top.document.getElementById("Delete_P�riodes_Liste_des_p�riodes0").disabled=false;

 }
 else
 {
top.document.getElementById("Delete_P�riodes_Liste_des_p�riodes0").hidden=true;

 }
 if(ALeDroit(1,"periode"))
 {
nb_button++;
top.document.getElementById("Update_P�riodes_Liste_des_p�riodes0").disabled=false;

 }
 else
 {
top.document.getElementById("Update_P�riodes_Liste_des_p�riodes0").hidden=true;

 }
if (nb_button==0)
{
	top.document.getElementById("Validate_P�riodes_Liste_des_p�riodes0").hidden=true;
	top.document.getElementById("Annuler_P�riodes_Liste_des_p�riodes0").hidden=true;
}
 if(ALeDroit(5,"prefixe"))
 {
/* On refresh les composants non d�pendents de l'onget Pr�fixes*/
var Composant_0 = TAB_GLOBAL_COMPO[202];
if (Composant_0!=null){
Composant_0.ActiverComposant(true);
Composant_0.Refresh();
}

 }
 else
 {
top.document.getElementById("Onglet_Pr�fixes").hidden=true;
if (top.document.getElementById("Onglet_Pr�fixes").selected)
	top.document.getElementById("Tous_les_onglets").advanceSelectedTab(1);

 }
var nb_button=0
 if(ALeDroit(2,"prefixe"))
 {
nb_button++;
top.document.getElementById("Insert_Pr�fixes_Liste_des_pr�fixes0").disabled=false;

 }
 else
 {
top.document.getElementById("Insert_Pr�fixes_Liste_des_pr�fixes0").hidden=true;

 }
 if(ALeDroit(4,"prefixe"))
 {
nb_button++;
top.document.getElementById("Delete_Pr�fixes_Liste_des_pr�fixes0").disabled=false;

 }
 else
 {
top.document.getElementById("Delete_Pr�fixes_Liste_des_pr�fixes0").hidden=true;

 }
 if(ALeDroit(1,"prefixe"))
 {
nb_button++;
top.document.getElementById("Update_Pr�fixes_Liste_des_pr�fixes0").disabled=false;

 }
 else
 {
top.document.getElementById("Update_Pr�fixes_Liste_des_pr�fixes0").hidden=true;

 }
if (nb_button==0)
{
	top.document.getElementById("Validate_Pr�fixes_Liste_des_pr�fixes0").hidden=true;
	top.document.getElementById("Annuler_Pr�fixes_Liste_des_pr�fixes0").hidden=true;
}
 if(ALeDroit(5,"produit"))
 {
/* On refresh les composants non d�pendents de l'onget Produits*/
var Composant_0 = TAB_GLOBAL_COMPO[158];
if (Composant_0!=null){
Composant_0.ActiverComposant(true);
Composant_0.Refresh();
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
top.document.getElementById("Insert_Produits_Liste_des_produits0").disabled=false;

 }
 else
 {
top.document.getElementById("Insert_Produits_Liste_des_produits0").hidden=true;

 }
 if(ALeDroit(4,"produit"))
 {
nb_button++;
top.document.getElementById("Delete_Produits_Liste_des_produits0").disabled=false;

 }
 else
 {
top.document.getElementById("Delete_Produits_Liste_des_produits0").hidden=true;

 }
 if(ALeDroit(1,"produit"))
 {
nb_button++;
top.document.getElementById("Update_Produits_Liste_des_produits0").disabled=false;

 }
 else
 {
top.document.getElementById("Update_Produits_Liste_des_produits0").hidden=true;

 }
if (nb_button==0)
{
	top.document.getElementById("Validate_Produits_Liste_des_produits0").hidden=true;
	top.document.getElementById("Annuler_Produits_Liste_des_produits0").hidden=true;
}
var nb_button=0
 if(ALeDroit(2,"prix"))
 {
nb_button++;

 }
 else
 {
top.document.getElementById("Insert_Produits_Prix_5").hidden=true;

 }
 if(ALeDroit(4,"prix"))
 {
nb_button++;

 }
 else
 {
top.document.getElementById("Delete_Produits_Prix_5").hidden=true;

 }
 if(ALeDroit(1,"prix"))
 {
nb_button++;

 }
 else
 {
top.document.getElementById("Update_Produits_Prix_5").hidden=true;

 }
if (nb_button==0)
{
	top.document.getElementById("Validate_Produits_Prix_5").hidden=true;
	top.document.getElementById("Annuler_Produits_Prix_5").hidden=true;
}
var nb_button=0
 if(ALeDroit(2,"compteproduit"))
 {
nb_button++;

 }
 else
 {
top.document.getElementById("Insert_Produits_Comptes_g�n�raux_11").hidden=true;

 }
 if(ALeDroit(4,"compteproduit"))
 {
nb_button++;

 }
 else
 {
top.document.getElementById("Delete_Produits_Comptes_g�n�raux_11").hidden=true;

 }
 if(ALeDroit(1,"compteproduit"))
 {
nb_button++;

 }
 else
 {
top.document.getElementById("Update_Produits_Comptes_g�n�raux_11").hidden=true;

 }
if (nb_button==0)
{
	top.document.getElementById("Validate_Produits_Comptes_g�n�raux_11").hidden=true;
	top.document.getElementById("Annuler_Produits_Comptes_g�n�raux_11").hidden=true;
}
 if(ALeDroit(5,"responsabilite"))
 {
/* On refresh les composants non d�pendents de l'onget Responsabilit�s*/
var Composant_0 = TAB_GLOBAL_COMPO[143];
if (Composant_0!=null){
Composant_0.ActiverComposant(true);
Composant_0.Refresh();
}

 }
 else
 {
top.document.getElementById("Onglet_Responsabilit�s").hidden=true;
if (top.document.getElementById("Onglet_Responsabilit�s").selected)
	top.document.getElementById("Tous_les_onglets").advanceSelectedTab(1);

 }
var nb_button=0
 if(ALeDroit(2,"responsabilite"))
 {
nb_button++;
top.document.getElementById("Insert_Responsabilit�s_Responsabilit�s0").disabled=false;

 }
 else
 {
top.document.getElementById("Insert_Responsabilit�s_Responsabilit�s0").hidden=true;

 }
 if(ALeDroit(4,"responsabilite"))
 {
nb_button++;
top.document.getElementById("Delete_Responsabilit�s_Responsabilit�s0").disabled=false;

 }
 else
 {
top.document.getElementById("Delete_Responsabilit�s_Responsabilit�s0").hidden=true;

 }
 if(ALeDroit(1,"responsabilite"))
 {
nb_button++;
top.document.getElementById("Update_Responsabilit�s_Responsabilit�s0").disabled=false;

 }
 else
 {
top.document.getElementById("Update_Responsabilit�s_Responsabilit�s0").hidden=true;

 }
if (nb_button==0)
{
	top.document.getElementById("Validate_Responsabilit�s_Responsabilit�s0").hidden=true;
	top.document.getElementById("Annuler_Responsabilit�s_Responsabilit�s0").hidden=true;
}
 if(ALeDroit(5,"service"))
 {
/* On refresh les composants non d�pendents de l'onget Services*/
var Composant_0 = TAB_GLOBAL_COMPO[67];
if (Composant_0!=null){
Composant_0.ActiverComposant(true);
Composant_0.Refresh();
}

 }
 else
 {
top.document.getElementById("Onglet_Services").hidden=true;
if (top.document.getElementById("Onglet_Services").selected)
	top.document.getElementById("Tous_les_onglets").advanceSelectedTab(1);

 }
var nb_button=0
 if(ALeDroit(2,"service"))
 {
nb_button++;
top.document.getElementById("Insert_Services_Liste_des_services0").disabled=false;

 }
 else
 {
top.document.getElementById("Insert_Services_Liste_des_services0").hidden=true;

 }
 if(ALeDroit(4,"service"))
 {
nb_button++;
top.document.getElementById("Delete_Services_Liste_des_services0").disabled=false;

 }
 else
 {
top.document.getElementById("Delete_Services_Liste_des_services0").hidden=true;

 }
 if(ALeDroit(1,"service"))
 {
nb_button++;
top.document.getElementById("Update_Services_Liste_des_services0").disabled=false;

 }
 else
 {
top.document.getElementById("Update_Services_Liste_des_services0").hidden=true;

 }
if (nb_button==0)
{
	top.document.getElementById("Validate_Services_Liste_des_services0").hidden=true;
	top.document.getElementById("Annuler_Services_Liste_des_services0").hidden=true;
}
 if(ALeDroit(5,"societe"))
 {
/* On refresh les composants non d�pendents de l'onget Soci�t�s*/
var Composant_0 = TAB_GLOBAL_COMPO[56];
if (Composant_0!=null){
Composant_0.ActiverComposant(true);
Composant_0.Refresh();
}

 }
 else
 {
top.document.getElementById("Onglet_Soci�t�s").hidden=true;
if (top.document.getElementById("Onglet_Soci�t�s").selected)
	top.document.getElementById("Tous_les_onglets").advanceSelectedTab(1);

 }
var nb_button=0
 if(ALeDroit(2,"societe"))
 {
nb_button++;
top.document.getElementById("Insert_Soci�t�s_Liste_des_soci�t�s0").disabled=false;

 }
 else
 {
top.document.getElementById("Insert_Soci�t�s_Liste_des_soci�t�s0").hidden=true;

 }
 if(ALeDroit(4,"societe"))
 {
nb_button++;
top.document.getElementById("Delete_Soci�t�s_Liste_des_soci�t�s0").disabled=false;

 }
 else
 {
top.document.getElementById("Delete_Soci�t�s_Liste_des_soci�t�s0").hidden=true;

 }
 if(ALeDroit(1,"societe"))
 {
nb_button++;
top.document.getElementById("Update_Soci�t�s_Liste_des_soci�t�s0").disabled=false;

 }
 else
 {
top.document.getElementById("Update_Soci�t�s_Liste_des_soci�t�s0").hidden=true;

 }
if (nb_button==0)
{
	top.document.getElementById("Validate_Soci�t�s_Liste_des_soci�t�s0").hidden=true;
	top.document.getElementById("Annuler_Soci�t�s_Liste_des_soci�t�s0").hidden=true;
}
 if(ALeDroit(5,"tva"))
 {
/* On refresh les composants non d�pendents de l'onget TVA*/
var Composant_0 = TAB_GLOBAL_COMPO[150];
if (Composant_0!=null){
Composant_0.ActiverComposant(true);
Composant_0.Refresh();
}

 }
 else
 {
top.document.getElementById("Onglet_TVA").hidden=true;
if (top.document.getElementById("Onglet_TVA").selected)
	top.document.getElementById("Tous_les_onglets").advanceSelectedTab(1);

 }
var nb_button=0
 if(ALeDroit(2,"tva"))
 {
nb_button++;
top.document.getElementById("Insert_TVA_Liste_des_T_V_A_0").disabled=false;

 }
 else
 {
top.document.getElementById("Insert_TVA_Liste_des_T_V_A_0").hidden=true;

 }
 if(ALeDroit(4,"tva"))
 {
nb_button++;
top.document.getElementById("Delete_TVA_Liste_des_T_V_A_0").disabled=false;

 }
 else
 {
top.document.getElementById("Delete_TVA_Liste_des_T_V_A_0").hidden=true;

 }
 if(ALeDroit(1,"tva"))
 {
nb_button++;
top.document.getElementById("Update_TVA_Liste_des_T_V_A_0").disabled=false;

 }
 else
 {
top.document.getElementById("Update_TVA_Liste_des_T_V_A_0").hidden=true;

 }
if (nb_button==0)
{
	top.document.getElementById("Validate_TVA_Liste_des_T_V_A_0").hidden=true;
	top.document.getElementById("Annuler_TVA_Liste_des_T_V_A_0").hidden=true;
}
 if(ALeDroit(5,"typeattribut"))
 {
/* On refresh les composants non d�pendents de l'onget Types d'attribut*/
var Composant_0 = TAB_GLOBAL_COMPO[28];
if (Composant_0!=null){
Composant_0.ActiverComposant(true);
Composant_0.Refresh();
}

 }
 else
 {
top.document.getElementById("Onglet_Types_d_attribut").hidden=true;
if (top.document.getElementById("Onglet_Types_d_attribut").selected)
	top.document.getElementById("Tous_les_onglets").advanceSelectedTab(1);

 }
var nb_button=0
 if(ALeDroit(2,"typeattribut"))
 {
nb_button++;
top.document.getElementById("Insert_Types_d_attribut_Liste_des_types_d_attribut_de_personne0").disabled=false;

 }
 else
 {
top.document.getElementById("Insert_Types_d_attribut_Liste_des_types_d_attribut_de_personne0").hidden=true;

 }
 if(ALeDroit(4,"typeattribut"))
 {
nb_button++;
top.document.getElementById("Delete_Types_d_attribut_Liste_des_types_d_attribut_de_personne0").disabled=false;

 }
 else
 {
top.document.getElementById("Delete_Types_d_attribut_Liste_des_types_d_attribut_de_personne0").hidden=true;

 }
 if(ALeDroit(1,"typeattribut"))
 {
nb_button++;
top.document.getElementById("Update_Types_d_attribut_Liste_des_types_d_attribut_de_personne0").disabled=false;

 }
 else
 {
top.document.getElementById("Update_Types_d_attribut_Liste_des_types_d_attribut_de_personne0").hidden=true;

 }
if (nb_button==0)
{
	top.document.getElementById("Validate_Types_d_attribut_Liste_des_types_d_attribut_de_personne0").hidden=true;
	top.document.getElementById("Annuler_Types_d_attribut_Liste_des_types_d_attribut_de_personne0").hidden=true;
}
var nb_button=0
 if(ALeDroit(2,"categorie"))
 {
nb_button++;

 }
 else
 {
top.document.getElementById("Insert_Types_d_attribut_Cat�gories_2").hidden=true;

 }
 if(ALeDroit(4,"categorie"))
 {
nb_button++;

 }
 else
 {
top.document.getElementById("Delete_Types_d_attribut_Cat�gories_2").hidden=true;

 }
 if(ALeDroit(1,"categorie"))
 {
nb_button++;

 }
 else
 {
top.document.getElementById("Update_Types_d_attribut_Cat�gories_2").hidden=true;

 }
if (nb_button==0)
{
	top.document.getElementById("Validate_Types_d_attribut_Cat�gories_2").hidden=true;
	top.document.getElementById("Annuler_Types_d_attribut_Cat�gories_2").hidden=true;
}
 if(ALeDroit(5,"typejournal"))
 {
/* On refresh les composants non d�pendents de l'onget Types de journaux*/
var Composant_0 = TAB_GLOBAL_COMPO[199];
if (Composant_0!=null){
Composant_0.ActiverComposant(true);
Composant_0.Refresh();
}

 }
 else
 {
top.document.getElementById("Onglet_Types_de_journaux").hidden=true;
if (top.document.getElementById("Onglet_Types_de_journaux").selected)
	top.document.getElementById("Tous_les_onglets").advanceSelectedTab(1);

 }
var nb_button=0
 if(ALeDroit(2,"typejournal"))
 {
nb_button++;
top.document.getElementById("Insert_Types_de_journaux_Liste_des_types_de_journaux0").disabled=false;

 }
 else
 {
top.document.getElementById("Insert_Types_de_journaux_Liste_des_types_de_journaux0").hidden=true;

 }
 if(ALeDroit(4,"typejournal"))
 {
nb_button++;
top.document.getElementById("Delete_Types_de_journaux_Liste_des_types_de_journaux0").disabled=false;

 }
 else
 {
top.document.getElementById("Delete_Types_de_journaux_Liste_des_types_de_journaux0").hidden=true;

 }
 if(ALeDroit(1,"typejournal"))
 {
nb_button++;
top.document.getElementById("Update_Types_de_journaux_Liste_des_types_de_journaux0").disabled=false;

 }
 else
 {
top.document.getElementById("Update_Types_de_journaux_Liste_des_types_de_journaux0").hidden=true;

 }
if (nb_button==0)
{
	top.document.getElementById("Validate_Types_de_journaux_Liste_des_types_de_journaux0").hidden=true;
	top.document.getElementById("Annuler_Types_de_journaux_Liste_des_types_de_journaux0").hidden=true;
}
 if(ALeDroit(5,"typelien"))
 {
/* On refresh les composants non d�pendents de l'onget Types de lien*/
var Composant_0 = TAB_GLOBAL_COMPO[43];
if (Composant_0!=null){
Composant_0.ActiverComposant(true);
Composant_0.Refresh();
}

 }
 else
 {
top.document.getElementById("Onglet_Types_de_lien").hidden=true;
if (top.document.getElementById("Onglet_Types_de_lien").selected)
	top.document.getElementById("Tous_les_onglets").advanceSelectedTab(1);

 }
var nb_button=0
 if(ALeDroit(2,"typelien"))
 {
nb_button++;
top.document.getElementById("Insert_Types_de_lien_Liste_des_types_de_lien_entre_personne0").disabled=false;

 }
 else
 {
top.document.getElementById("Insert_Types_de_lien_Liste_des_types_de_lien_entre_personne0").hidden=true;

 }
 if(ALeDroit(4,"typelien"))
 {
nb_button++;
top.document.getElementById("Delete_Types_de_lien_Liste_des_types_de_lien_entre_personne0").disabled=false;

 }
 else
 {
top.document.getElementById("Delete_Types_de_lien_Liste_des_types_de_lien_entre_personne0").hidden=true;

 }
 if(ALeDroit(1,"typelien"))
 {
nb_button++;
top.document.getElementById("Update_Types_de_lien_Liste_des_types_de_lien_entre_personne0").disabled=false;

 }
 else
 {
top.document.getElementById("Update_Types_de_lien_Liste_des_types_de_lien_entre_personne0").hidden=true;

 }
if (nb_button==0)
{
	top.document.getElementById("Validate_Types_de_lien_Liste_des_types_de_lien_entre_personne0").hidden=true;
	top.document.getElementById("Annuler_Types_de_lien_Liste_des_types_de_lien_entre_personne0").hidden=true;
}
 if(ALeDroit(5,"typepersonne"))
 {
/* On refresh les composants non d�pendents de l'onget Types de personne*/
var Composant_0 = TAB_GLOBAL_COMPO[47];
if (Composant_0!=null){
Composant_0.ActiverComposant(true);
Composant_0.Refresh();
}

 }
 else
 {
top.document.getElementById("Onglet_Types_de_personne").hidden=true;
if (top.document.getElementById("Onglet_Types_de_personne").selected)
	top.document.getElementById("Tous_les_onglets").advanceSelectedTab(1);

 }
var nb_button=0
 if(ALeDroit(2,"typepersonne"))
 {
nb_button++;
top.document.getElementById("Insert_Types_de_personne_Liste_des_types_de_personne0").disabled=false;

 }
 else
 {
top.document.getElementById("Insert_Types_de_personne_Liste_des_types_de_personne0").hidden=true;

 }
 if(ALeDroit(4,"typepersonne"))
 {
nb_button++;
top.document.getElementById("Delete_Types_de_personne_Liste_des_types_de_personne0").disabled=false;

 }
 else
 {
top.document.getElementById("Delete_Types_de_personne_Liste_des_types_de_personne0").hidden=true;

 }
 if(ALeDroit(1,"typepersonne"))
 {
nb_button++;
top.document.getElementById("Update_Types_de_personne_Liste_des_types_de_personne0").disabled=false;

 }
 else
 {
top.document.getElementById("Update_Types_de_personne_Liste_des_types_de_personne0").hidden=true;

 }
if (nb_button==0)
{
	top.document.getElementById("Validate_Types_de_personne_Liste_des_types_de_personne0").hidden=true;
	top.document.getElementById("Annuler_Types_de_personne_Liste_des_types_de_personne0").hidden=true;
}
 if(ALeDroit(5,"typesociete"))
 {
/* On refresh les composants non d�pendents de l'onget Types de soci�t�s*/
var Composant_0 = TAB_GLOBAL_COMPO[53];
if (Composant_0!=null){
Composant_0.ActiverComposant(true);
Composant_0.Refresh();
}

 }
 else
 {
top.document.getElementById("Onglet_Types_de_soci�t�s").hidden=true;
if (top.document.getElementById("Onglet_Types_de_soci�t�s").selected)
	top.document.getElementById("Tous_les_onglets").advanceSelectedTab(1);

 }
var nb_button=0
 if(ALeDroit(2,"typesociete"))
 {
nb_button++;
top.document.getElementById("Insert_Types_de_soci�t�s_Liste_des_types_de_soci�t�s0").disabled=false;

 }
 else
 {
top.document.getElementById("Insert_Types_de_soci�t�s_Liste_des_types_de_soci�t�s0").hidden=true;

 }
 if(ALeDroit(4,"typesociete"))
 {
nb_button++;
top.document.getElementById("Delete_Types_de_soci�t�s_Liste_des_types_de_soci�t�s0").disabled=false;

 }
 else
 {
top.document.getElementById("Delete_Types_de_soci�t�s_Liste_des_types_de_soci�t�s0").hidden=true;

 }
 if(ALeDroit(1,"typesociete"))
 {
nb_button++;
top.document.getElementById("Update_Types_de_soci�t�s_Liste_des_types_de_soci�t�s0").disabled=false;

 }
 else
 {
top.document.getElementById("Update_Types_de_soci�t�s_Liste_des_types_de_soci�t�s0").hidden=true;

 }
if (nb_button==0)
{
	top.document.getElementById("Validate_Types_de_soci�t�s_Liste_des_types_de_soci�t�s0").hidden=true;
	top.document.getElementById("Annuler_Types_de_soci�t�s_Liste_des_types_de_soci�t�s0").hidden=true;
}
 if(ALeDroit(5,"typetache"))
 {
/* On refresh les composants non d�pendents de l'onget Types de t�ches*/
var Composant_0 = TAB_GLOBAL_COMPO[24];
if (Composant_0!=null){
Composant_0.ActiverComposant(true);
Composant_0.Refresh();
}

 }
 else
 {
top.document.getElementById("Onglet_Types_de_t�ches").hidden=true;
if (top.document.getElementById("Onglet_Types_de_t�ches").selected)
	top.document.getElementById("Tous_les_onglets").advanceSelectedTab(1);

 }
var nb_button=0
 if(ALeDroit(2,"typetache"))
 {
nb_button++;
top.document.getElementById("Insert_Types_de_t�ches_Liste_des_types_de_t�ches0").disabled=false;

 }
 else
 {
top.document.getElementById("Insert_Types_de_t�ches_Liste_des_types_de_t�ches0").hidden=true;

 }
 if(ALeDroit(4,"typetache"))
 {
nb_button++;
top.document.getElementById("Delete_Types_de_t�ches_Liste_des_types_de_t�ches0").disabled=false;

 }
 else
 {
top.document.getElementById("Delete_Types_de_t�ches_Liste_des_types_de_t�ches0").hidden=true;

 }
 if(ALeDroit(1,"typetache"))
 {
nb_button++;
top.document.getElementById("Update_Types_de_t�ches_Liste_des_types_de_t�ches0").disabled=false;

 }
 else
 {
top.document.getElementById("Update_Types_de_t�ches_Liste_des_types_de_t�ches0").hidden=true;

 }
if (nb_button==0)
{
	top.document.getElementById("Validate_Types_de_t�ches_Liste_des_types_de_t�ches0").hidden=true;
	top.document.getElementById("Annuler_Types_de_t�ches_Liste_des_types_de_t�ches0").hidden=true;
}
 if(ALeDroit(5,"ville"))
 {
/* On refresh les composants non d�pendents de l'onget Villes*/
var Composant_0 = TAB_GLOBAL_COMPO[123];
if (Composant_0!=null){
Composant_0.ActiverComposant(true);
Composant_0.Refresh();
}

 }
 else
 {
top.document.getElementById("Onglet_Villes").hidden=true;
if (top.document.getElementById("Onglet_Villes").selected)
	top.document.getElementById("Tous_les_onglets").advanceSelectedTab(1);

 }
var nb_button=0
 if(ALeDroit(2,"ville"))
 {
nb_button++;
top.document.getElementById("Insert_Villes_Liste_des_villes0").disabled=false;

 }
 else
 {
top.document.getElementById("Insert_Villes_Liste_des_villes0").hidden=true;

 }
 if(ALeDroit(4,"ville"))
 {
nb_button++;
top.document.getElementById("Delete_Villes_Liste_des_villes0").disabled=false;

 }
 else
 {
top.document.getElementById("Delete_Villes_Liste_des_villes0").hidden=true;

 }
 if(ALeDroit(1,"ville"))
 {
nb_button++;
top.document.getElementById("Update_Villes_Liste_des_villes0").disabled=false;

 }
 else
 {
top.document.getElementById("Update_Villes_Liste_des_villes0").hidden=true;

 }
if (nb_button==0)
{
	top.document.getElementById("Validate_Villes_Liste_des_villes0").hidden=true;
	top.document.getElementById("Annuler_Villes_Liste_des_villes0").hidden=true;
}
Filtre_ProduitPrixTva.setComposant(Compo_Produits_T_V_A__8);
}

var premierdemarrage=true;

function demarrage()
{
	if (premierdemarrage)
		{
		Interface_Chargement();
		}
	premierdemarrage=false;
//	var	outil=top.frames["FrameToolBar"].document.getElementById('barre_carte');
//	alert("outil onload="+outil);
//	ChangerOutils(outil);
//	var	win=top.document.getElementById('AgriSig_Window');
}

/*
function BarreCarteOnLoad()
{
	var	TheDoc=top.frames["FrameToolBar"].document;
	var outil=TheDoc.getElementById('carte_dplt');
	//alert("outil onloadtoolbarcarte="+outil);
	ChangerOutils(outil);
	/* pour ne passer ici qu'une seule fois */
	/*var myframe=TheDoc.getElementById('barre_carte');
	//alert("myframe="+myframe);
}
*/

function DebugAfficherfils(Parent)
{
	var	max=Parent.childNodes.length;
	alert("Nbr enfants="+max);
	var i;
	var fils;
	for(i=0;i<max;i++)
	{
		fils=Parent.childNodes[i];
		alert(fils.getAttribute("id"));
	}
}

function toto()
{
	var FrameConcernee= top.frames["FrameAide"];
	var TheDoc = FrameConcernee.document;
	TheDoc.write('<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN"><HTML><HEAD><H1>Toto Titi Tutu</H1></HEAD></HTML>');
}

function ChangerOutils(Outils)
{
    var id=Outils.getAttribute("id");
    switch(id)
	{
	case "carte_load":
	    svg_init(onSousIlotClick);
	    break;

	case "carte_annuler":
	    svg_annuler();
	    break;

	case "carte_zoomP":
	    svg_zoom(1.2);
	    break;
	case "carte_zoomM":
	    svg_zoom(1/1.2);
	    break;
	    
	case "carte_zoomPC":
	    svg_super_zoom(1.2);
	    break;
	case "carte_zoomMC":
	    svg_super_zoom(1/1.2);
	    break;
	    
	case "carte_angle":
	    svg_detoure_supprimer_dernier_point_temporaire();
	    break;
	    
	case "carte_ref":
	    svg_definir_centre();
	    break;

	case "carte_PtOff":
	    svg_changer_affichage_points(0);
	    break;

	case "carte_PtOn":
	    svg_changer_affichage_points(1);
	    break;

	case "carte_insertion":
	    svg_insertion_point_cote();
	    break;

	case "carte_perpend":
	    svg_insertion_point_perpendiculaire();
	    break;

	case "carte_parall":
	    svg_parallele();
	    break;

	case "carte_distance":
		svg_distance_projete();
		break;

	case "carte_cercle":
	    svg_creation_cercle();
	    break;

	case "carte_DivSimple":
	    svg_diviser_ssilot();
	    break;

	case "carte_bande":
	    svg_selection_point_bande_parallele();
	    break;

	case "carte_DivComplexe":
	    svg_detoure();

// 	      <button onclick="svg_detoure();">DS3</button>
// 	      /* selection de point */
// 	      <button onclick="svg_detoure_chemin_existant();">CI</button>
// 	      /* ajouter un pt  */
// 	      <button onclick="svg_detoure_nouveau_point();">PE</button>
// 	      <button onclick="svg_fin_detoure();">Fin DS3</button>


	    break;

	case "carte_DivComplexeSelectBande":
		svg_detoure_chemin_existant();
		break;

	case "carte_DivComplexeAjPt":
		svg_detoure_nouveau_point();
		break;

	case "carte_DivComplexeSuppPt":
		svg_detoure_supprimer_dernier_point_temporaire();
		break;

	case "carte_DivComplexeFin":
		svg_fin_detoure();
		break;

	case "carte_test":
	    svg_changer_verrouillage();
	    break;

	case "carte_centrer":
		carte_centrervue();
		break;

	case "carte_centrer_select":
		carte_centrervue_sousilot();
		break;

	case "carte_angle":
		svg_definir_angle_base();
		break;

	case "carte_verr0":
	    svg_modifier_verrouillage(0);
	    break;

	case "carte_verr1":
	    svg_modifier_verrouillage(1);
	    break;

	case "carte_verr2":
	    svg_modifier_verrouillage(2);
	    break;

	case "textes":
		carte_rafraichir_texte();//� appeler lors de la modification du nom d'un sous-�lot
	    svg_changer_affichage_textes();
	    break;

	case "carte_bande_fin":
		svg_genere_bande();
		break;
		
	case "carte_bande_supprimer_pt":
		svg_edite_supprime_point_bande();
		break;
	}

// 	id=Outils.getAttribute("id");
// /*
// 	var toolbar=top.document.getElementById("nav-toolbar");
// 	// on connait le nom de l'outils grace au tag
// 	toolbar.setAttribute("tagName",id);
// */
//   var thetree = top.document.getElementById("tool_tree");
//   var fonction;
//   var i, encore;
  
//   i=0;
//   encore = true;
//   while ( encore && i <= thetree.view.rowCount ) {
//     i++;
//     encore = !(thetree.view.getCellText(i, thetree.boxObject.columns.getColumnAt(1)) == id );
//   }
  
//   // si on a une selection on la vire
//   if ( thetree.currentIndex != -1 )
//     thetree.view.selection.clearSelection();
//   // si on a trouv� la ligne, on la selectionne
//   if ( !encore && i<=thetree.view.rowCount ) 
//     thetree.view.selection.toggleSelect(i);
    

}

function selectionOutil() {
  var thetree = top.document.getElementById("tool_tree");
  //var label = thetree.view.getCellText(thetree.currentIndex, thetree.boxObject.columns.getColumnAt(0));
  var fonction = thetree.view.getCellText(thetree.currentIndex, thetree.boxObject.columns.getColumnAt(1));
  ////var onselect = thetree.view.getCellText(thetree.currentIndex, thetree.boxObject.columns.getColumnAt(2));

  //alert( "[ " + col1 + " ] : " + col2 + " (" + col3 + ")");
  onselect = "true";
  if (onselect == "true") {
    //alert(fonction);
    //alert("lancer outil");
    lancerOutil(fonction);
  } 

}

function getOngletCourant()
{
	var mydoc=top.document;
	//on r�cup�re l'onglet s�l�ctionn�
	var tabbox = mydoc.getElementById("milieu");
	var tabcourant = tabbox.selectedTab;
	return tabcourant;
}

function getNomOngletCourant()
{
	return getOngletCourant().getAttribute("label");
}

function getIdOngletCourant()
{
	return getOngletCourant().getAttribute("id");
}


function getChildById(Parent,id)
{
	var	max=Parent.childNodes.length;
	var i;
	var fils;
	for(i=0;i<max;i++)
	{
		fils=Parent.childNodes[i];
		if (fils.getAttribute("id")==id)
		{	
			return fils;
		}
	}
}

// activer=false => on d�sactive tout les fils
function Activerfils(Parent,activer)
{
	var tab;

	if (activer)
	{
		tab=Parent.getElementsByAttribute("disabled","true");
	}
	else
	{
		tab=Parent.getElementsByAttribute("disabled","false");
	}

	var	max=tab.length;
	var i;
	var elt;
	for(i=max-1;i>=0;i--)
	{
		if (activer)
		{
			elt=tab[i];
			
			//elt.disabled=false;
			elt.setAttribute("disabled","false");
		}
		else
		{
			tab[i].setAttribute("disabled","true");
		}
	}
	
}

function GererValider()
{
	var BoutonValider= top.frames["FrameToolBar"].document.getElementById("gerer_valider");

	var NomOnglet=getNomOngletCourant();
	// on r�cup�re la frame
	var FrameConcernee= top.frames["Frame_"+NomOnglet];
	var TheDoc = FrameConcernee.document;
	// on d�sactive tout ses fils
	Activerfils(TheDoc,false);
	BoutonValider.setAttribute("hidden",true);
}


function GererMAJ()
{
	var BoutonValider= top.frames["FrameToolBar"].document.getElementById("gerer_valider");
	BoutonValider.setAttribute("hidden",false);

	var NomOnglet=getNomOngletCourant();
	// on r�cup�re la frame
	var FrameConcernee= top.frames["Frame_"+NomOnglet];
	var TheDoc = FrameConcernee.document;
	// on active tout ses fils
	Activerfils(TheDoc,true);
	
	
}

function GererSuppr()
{
	var NomOnglet=getNomOngletCourant();

	var id="Liste_"+NomOnglet;
	// on r�cup�re la liste o� sont affich�es les valeures existantes
	var FrameConcernee= top.frames["Frame_"+NomOnglet];
	var lst = FrameConcernee.document.getElementById(id);
	var selecteditem=lst.selectedItem;
	if (selecteditem==null)
	{
		alert("Aucun(e) des "+NomOnglet+" n'est selectonn�(e)");
	}
	else
	{
		if (confirm("voulez vous vraiment supprimer "+selecteditem.label+" des "+NomOnglet))
		{
			 lst.removeItemAt(lst.selectedIndex);
		}
	}
}

function GererAdd()
{
	var NomOnglet=getNomOngletCourant();

	var id="Tree_"+NomOnglet;

	// on r�cup�re la liste o� sont affich�es les valeures existantes
	var FrameConcernee= top.frames["Frame_"+NomOnglet];
	var lst = FrameConcernee.document.getElementById(id);

	// on r�cup�re le nombre de colonnes pour savoir le nbr de valeur � demander
	var Cols=getChildById(lst,"Tree_Entete_"+NomOnglet);
	var NbrCol=Cols.childNodes.length;
	var i;
	var NomCol;
	//on creer des item et des cellules

	var valeur = prompt("Entrez une valeur pour le champ "+Cols.childNodes[0].getAttribute("label"), "");
	//var listitem = lst.appendItem(valeur);

	for(i=1;i<NbrCol;i++)
	{
		NomCol=Cols.childNodes[i].getAttribute("label")	
		if (NomCol!="")
			valeur = prompt("Entrez une valeur pour le champ "+Cols.childNodes[i].getAttribute("label"), "");
		//listcell=FrameConcernee.document.createElement("label");
		//listcell.setAttribute("value",valeur);
		//listitem.appendChild(listcell);
	}
}


function FermerAppli()
{
	var Appli=document.getElementById('AgriCool_Window');
	if ( confirm('Etes vous sur de vouloir quitter ?') )
		window.close();
}

function AfficherAide(elt)
{	
    var info=top.document.getElementById('infohint');
    var valeur=elt.getAttribute('tooltiptext');
    info.setAttribute('label',valeur);

	//on met � jour le fichier d'aide
/*	var FrameAide = top.document.getElementById("FrameAide");
	var IdOnglet=getIdOngletCourant();
	var id=elt.getAttribute('id');
	FrameAide.setAttribute("src","Aide\\"+IdOnglet+".html#"+id); */
}

function updateMouseCoordinates(event)
{
	var text = "(" + event.clientX + ";" + event.clientY+")";
	top.document.getElementById("coord").value=text;
/*	var CoordTxt=top.document.getElementById("coord");
	CoordTxt.setElementById("value",text);*/
}

function addOnglet(NomOnglet)
{
	var mydoc=top.document;
	var tabs = mydoc.getElementById("milieu_tabs");
	var tabpanels = mydoc.getElementById("milieu_tabpanels");
	var toolbarframe = mydoc.getElementById("toolbar_frame");
	var id="onglet_"+NomOnglet;
	var idpanel="Onglet_"+NomOnglet+"_Panel";

	var tab = mydoc.getElementById(id);

	// si l'onglet n'existe pas on le recreer
	if (tab==undefined)
		{
			tab = mydoc.createElement("tab");
			tab.setAttribute("id",id);
			tab.setAttribute("label",NomOnglet);
			tab.setAttribute("context","Popup_Fermer_Onglet");

			tabs.appendChild(tab);

			var tabpanel = mydoc.createElement("tabpanel");
			tabpanel.setAttribute("id",idpanel);
			tabpanel.setAttribute("orient","vertical");
			tabpanels.appendChild(tabpanel);
			
			//**** bouton pour fermer l'onglet ****
			var toolbar = mydoc.createElement("toolbar");
			toolbar.setAttribute("pack","end");
			tabpanel.appendChild(toolbar);

			var toolbarbutton = mydoc.createElement("toolbarbutton");
			toolbarbutton.setAttribute("image","../../skin/images/fermer.gif");
			toolbarbutton.setAttribute("oncommand","FermerOnglet();");
			toolbar.appendChild(toolbarbutton);

			//**** contenu de l'onglet ****
			var idDeclarationsOnglets=ChercherOngletParNom(NomOnglet);

			if (idDeclarationsOnglets==-1)
			{
				var iframe = mydoc.createElement("iframe");
				iframe.setAttribute("flex","1");
				iframe.setAttribute("id","Frame_"+NomOnglet);
				iframe.setAttribute("name","Frame_"+NomOnglet);
				iframe.setAttribute("src",id+".xul");
				tabpanel.appendChild(iframe);
			}
			else
			{
				GenererCodeOnglet(tabpanel,idDeclarationsOnglets);

				/* on fait du onload pour la connexion � la BD */
				asyncLoadOnglet(idDeclarationsOnglets);
			}

			// ON DESACTIVE TOUT LES CHAMPS
/*			var FrameConcernee= top.frames["Frame_"+NomOnglet];
			var vboxChamps = FrameConcernee.document.getElementById("Champs_"+NomOnglet);
			alert(vboxChamps);
			// on active tout ses fils
			Activerfils(vboxChamps,false); */

		}
	
	tabs.selectedItem=tab;
}

// Pour avoir le bon menu
function MAJOnglet(Onglet)
{
    var FrameAide = top.document.getElementById("FrameAide");
    /*
    var id=Onglet.getAttribute("id");
    //var toolbarframe = top.document.getElementById("toolbar_frame");
    
    //	FrameAide.setAttribute("src","Aide\\"+id+".html");
    
    if (id=="onglet_Carte"){
	//toolbarframe.setAttribute("src","barre_carte.xul");
    }
    else {
	
	if (id=="onglet_Etats")
	    toolbarframe.setAttribute("src","barre_imprimer.xul");
	else if (id=="onglet_GenContraintes")
	    toolbarframe.setAttribute("src","barre_gencontraintes.xul");
	else if (id=="onglet_Contraintes") {
	    var FrameConcernee= top.frames["Frame_"+getNomOngletCourant()];
	    // mise a jour du tree
	    if ( FrameConcernee.result ) {
		FrameConcernee.result.reload();
		FrameConcernee.document.getElementById("ContraintesTree").builder.rebuild();
	    }
	    
	    //toolbarframe.setAttribute("src","barre_vide.xul");
	}
	//	    else
	//toolbarframe.setAttribute("src","barre_gerer.xul");
    }
 */
}

function FermerOnglet()
{
	var tabs = top.document.getElementById("milieu_tabs");
	var tabpanels = top.document.getElementById("milieu_tabpanels");
	var tabbox = top.document.getElementById("milieu");
	var NewIndex=tabbox.selectedIndex-1;

	tabs.removeChild(tabbox.selectedTab);
	tabpanels.removeChild(tabbox.selectedPanel);

	tabbox.selectedIndex=NewIndex;
}


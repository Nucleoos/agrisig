/*****************************************************************************/
/******* MODULE GERANT L'IMPORT DES ELEMENTS SVG A PARTIR DE LA BASE *********/
/*****************************************************************************/



/*
 * importe une liste de couches et affiche les sous-îlots appartenant à cette liste
 *
 * @args	taille_tab : nombre d'éléments dans tab
 *		tab : tableau contenant les identifiants des couches à afficher (entiers)
 * @modifs	tab est copié dans TABLEAU_COUCHES
 *		taille_tab est copié dans NB_COUCHES
 */

function carte_importer_couches(taille_tab, tab)
{
	myIncluder.carte_supprimer_polygones();
	myIncluder.TABLEAU_COUCHES = new Array(myIncluder.TAILLE_LISTES);
	myIncluder.TABLEAU_COUCHES = tab;
	myIncluder.NB_COUCHES = taille_tab;
	myIncluder.carte_affiche_couches(myIncluder.NB_COUCHES, myIncluder.TABLEAU_COUCHES, 0.5);
	myIncluder.svg_supprime_points();
}



/*
 * met à jour le texte associé à chaque sous-îlot
 *
 * @modifs	l'attribut legende des sous-îlots affichés sur la carte est mis à jour pour correspondre au champ nom de la base
 */

function carte_rafraichir_texte()
{
	var couche;
	var i, j;
	var encore;
	var query;
	var result;
	var enumerator;
	var sousilot;
	var tab = myIncluder.TABLEAU_COUCHES;
	var taille_tab = myIncluder.NB_COUCHES;

	for(i = 0; i < taille_tab; i++)
	{
		couche = tab[i];

		query = "SELECT si_numero, si_nom FROM sousilotfils WHERE si_couche="+couche+";";
		result = pgsql_query(query);

		enumerator = result.enumerate();
		enumerator.beforeFirst();

		if(result.rowCount != 0)
		{
			encore = true;
			while(encore)
			{
				encore = enumerator.next();
				sousilot = myDocument.getElementById("ssilot"+svg_base2svg(enumerator.getVariant(0)));
				sousilot.setAttribute("legende", enumerator.getVariant(1));
			}
		}
	}
}



/*
 * affiche les sous-îlots appartenant à une liste de couches
 *
 * @args	taille_tab : nombre d'éléments dans tab
 *		tab : tableau contenant les identifiants des couches à afficher (entiers)
 * @modifs	les polygones appartenant aux couches de la liste sont ajoutés à la carte SVG
 */

function carte_affiche_couches(taille_tab, tab, opacite)
{
	var couche;
	var i;
	var encore;
	var query;
	var result;
	var enumerator;

	myIncluder.TABLEAU_COUCHES = tab;
	myIncluder.NB_COUCHES = taille_tab;

	for(i = 0; i < taille_tab; i++)
	{
		couche = tab[i];

		query = "SELECT * FROM sousilotfils where si_couche = "+couche+";";
		result = pgsql_query(query);

		enumerator = result.enumerate();
		enumerator.beforeFirst();

		if(result.rowCount != 0)
		{
			encore = true;
			while(encore)
			{
				encore = enumerator.next();
				myIncluder.carte_addpoly(myIncluder.carte_textgeom_to_svgpoly(enumerator.getString(0)), enumerator.getInt(1), enumerator.getVariant(2), enumerator.getVariant(3), enumerator.getVariant(4), couche, opacite);
			}
		}
	}

	myIncluder.svg_active();
	myIncluder.svg_cree_liste_points();
	
	myIncluder.svg_redimensionne();
	myIncluder.mode = "select_ssilot";
}



/*
 * applique les couleurs 
 *
 * @args	taille_tab : nombre d'éléments dans tab
 * 		tab : tableau des couleurs ; tab[1][i] est la valeur de la couleur du sous-îlot dont l'identifiant dans la base est tab[0][i]
 * @modifs	les couleurs des sous-îlots affichés sont mises à jour à partir des données du tableau
 */

function svg_applique_couleurs(taille_tab, tab_couleurs)
{
	var i;
	var couleur;

	for(i = 1; i <= myIncluder.NB_OBJETS; i++)
	{
		myDocument.getElementById("ssilot"+i).setAttribute("fill", myIncluder.carte_recupere_couleur(taille_tab, tab_couleurs, myIncluder.svg_no_ssilot_base_courant(i)));
	}
}



/*
 * retourne la couleur d'un sous-îlot
 *
 * @args	taille_tab : nombre d'éléments dans tab
 *		tab : tableau des couleurs ; tab[1][i] est la valeur de la couleur du sous-îlot dont l'identifiant dans la base est tab[0][i]
 *		identifiant dans la base du sous-îlot dont on cherche la couleur
 * @retour	
 */

function carte_recupere_couleur(taille_tab, tab_couleurs, no_base)
{
	var i = 0;

	while(tab_couleurs[0][i]*1 != no_base && i < taille_tab) i++;

	return tab_couleurs[1][i];
}



/*
 * recrée entièrement la carte à partir des données de la base
 */

function carte_rafraichir_polygones()
{
       	myIncluder.svg_desalloue_points_supplementaires();//supprime la liste des points créés noirs en cours de détourage

       	myIncluder.svg_supprime_points();//supprime les points noirs

	myIncluder.svg_toolbar_defaut();//restore la toolbar par défaut

	myIncluder.svg_supprimer_liste_points_temporaires();//supprime les points oranges

	carte_supprimer_polygones();//supprime les sous-îlots affichés

	carte_importer_couches(myIncluder.NB_COUCHES, myIncluder.TABLEAU_COUCHES);//importe les couches à afficher

	myIncluder.svg_charge_preferences();//charge les variables globales correspondant aux préférences utilisateur
}



/*
 * supprime les sous-îlots affichés
 *
 * @modifs	les objets SVG correspondant aux sous-îlots sont supprimés
 */

function carte_supprimer_polygones()
{
	var i;
	var group = myDocument.getElementById("sousilots");

	for(i = 1; i <= myIncluder.NB_OBJETS; i++)
	{
		group.removeChild(myDocument.getElementById("ssilot"+i));
	}

	NB_OBJETS = 0;
}



/*
 * récupère tous les sous-îlots d'un exploitant ; cette fonction n'est plus utilisée et est conservée pour débugger
 */

function carte_querypolygones()
{
	var i, j;
	var encore = true;
	var chaine = "";
	var query;
	var couche = 1;

	query = "SELECT agriassvg(si_trace), si_numero, a.ms_pere, b.ms_fils FROM sousilot LEFT OUTER JOIN modificationsousilot AS a ON (si_numero=a.ms_fils) LEFT OUTER JOIN modificationsousilot AS b ON (si_numero=b.ms_pere) WHERE b.ms_fils IS NULL;";

	var result = pgsql_query(query);

	var enumerator = result.enumerate();
	enumerator.beforeFirst();

	myIncluder.carte_supprimer_textes();

	while(encore)
	{
		encore = enumerator.next();
		myIncluder.carte_addpoly(myIncluder.carte_textgeom_to_svgpoly(enumerator.getString(0)), enumerator.getInt(1), couche, 0.5);
	}

	myIncluder.svg_active();
	myIncluder.svg_cree_liste_points();
	myIncluder.mode = "select_ssilot";
}



/*
 * création de l'objet SVG représentant un sous-îlot
 *
 * @args	forme : path représentant le(s) contour(s) de l'objet
 *		index : numéro dans la base du sous-îlot
 *		nom : texte associé au sous-îlot
 *		x : abscisse de la position en x du nom du polygone
 *		y : ordonnée de la position en y du nom du polygone
 *		couche : couche à laquelle appartient le sous-îlot
 *		opacite : opacité de la couleur du sous-îlot
 *
 * @modifs	le path correspondant aux paramètres d'entrée est créé
 */

function carte_addpoly(forme, index, nom, x, y, couche, opacite)
{
	var canvas = myDocument.getElementById("canvas");
	var group  = myDocument.getElementById("sousilots");
	var nouvpoly = myDocument.createElementNS("http://www.w3.org/2000/svg", "path");

	myIncluder.NB_OBJETS++;

	nouvpoly.setAttribute("class", "path");
	nouvpoly.setAttribute("d", forme);
	nouvpoly.setAttribute("tagName", forme);//quand on extrait le champ d, les coordonnées sont parsées en entiers ; pour pouvoir extraire les valeurs exactes, on les recopie dans le champ tagName

	var couleur = myIncluder.carte_randomcolor();

	nouvpoly.setAttribute("fill-opacity", opacite);
	nouvpoly.setAttribute("stroke-opacity", 1);
	nouvpoly.setAttribute("fill", couleur );
	nouvpoly.setAttribute("fill-rule", "evenodd");
	nouvpoly.setAttribute("id", 'ssilot'+myIncluder.NB_OBJETS);
	nouvpoly.setAttribute("xCentre", x);
	nouvpoly.setAttribute("yCentre", y);
	nouvpoly.setAttribute("legende", nom);

	svg_ecrit_conversion_indexes(myIncluder.NB_OBJETS, index);
	svg_ecrit_conversion_couche(myIncluder.NB_OBJETS, couche);

	group.appendChild(nouvpoly);

	var group2 = myDocument.getElementById("ensemble");

	group2.appendChild(group);
	canvas.appendChild(group2);
}



/*
 * supprime le polygone temporaire (utilisé pour représenter la bande en cours de détourage)
 *
 * @modifs	le polygone temporaire est supprimé
 */

function carte_supppolytemp()
{
	try
	{
	    myDocument.getElementById("sousilots").removeChild(myDocument.getElementById("ssilottemp"));
	    myIncluder.LISTE_POINTS_POLYTEMP = undefined;
	    myIncluder.POS_LISTE_POINTS_POLYTEMP = 0;
	}
	catch(e)
	{
	}
}



/*
 * crée le polygone temporaire (utilisé pour représenter la bande en cours de détourage)
 *
 * @args	forme : path représentant le(s) contour(s) du sous-îlot
 *
 * @modifs	le polygone temporaire est créé
 */

function carte_addpolytemp(forme)
{
	forme = svg_list2string(forme);

	var canvas = myDocument.getElementById("canvas");
	var group  = myDocument.getElementById("sousilots");
	var nouvpoly = myDocument.createElementNS("http://www.w3.org/2000/svg", "path");

	nouvpoly.setAttribute("class", "path");
	nouvpoly.setAttribute("d", forme);
	nouvpoly.setAttribute("tagName", forme);

	nouvpoly.setAttribute("fill-opacity", 0.2);
	nouvpoly.setAttribute("stroke-opacity", 1);
	nouvpoly.setAttribute("fill", "red");
	nouvpoly.setAttribute("fill-rule", "evenodd");
	nouvpoly.setAttribute("id", "ssilottemp");

	group.appendChild(nouvpoly);

	var group2 = myDocument.getElementById("ensemble");

	group2.appendChild(group);
	canvas.appendChild(group2);
}



/*
 * crée les points correpondant aux angles du polygone temporaire
 *
 * @modifs	les points correspondant aux angles du polygone temporaire ; leurs coordonnées sont stockées dans LISTE_POINTS_SVG[0]
 */

function carte_genere_points_polytemp()
{
	myIncluder.svg_supprime_points();
	myIncluder.POS_LISTE_POINTS_POLYTEMP = 0;
	myIncluder.LISTE_POINTS_POLYTEMP = new Array(myIncluder.TAILLE_LISTES);

	myIncluder.LISTE_POINTS_SVG[0] = new Array(myIncluder.TAILLE_LISTES);
	myIncluder.LISTE_POINTS_SVG[0][0] = new Array(myIncluder.TAILLE_LISTES);

	var i, j, k;
	var l = myIncluder.svg_extrait_points_path_chaine(myDocument.getElementById("ssilottemp").getAttribute("tagName"));

	j = 0;

	while(l[j] != undefined)
	{
		k = 0;

		while(l[j][k] != undefined)
		{
			myIncluder.svg_creer_point(l[j][k], l[j][k+1]);

			myIncluder.LISTE_POINTS_SVG[0][0][k] = l[j][k];
			myIncluder.LISTE_POINTS_SVG[0][0][k+1] = l[j][k+1];

			myIncluder.LISTE_POINTS_POLYTEMP[POS_LISTE_POINTS_POLYTEMP++] = l[j][k];
			myIncluder.LISTE_POINTS_POLYTEMP[POS_LISTE_POINTS_POLYTEMP++] = l[j][k+1];
			k += 2;
		}
		j++;
	}
}



/*
 * centre la vue sur l'ensemble des sous-îlots de l'exploitant
 *
 * @modifs	les paramètres de point de vue (pos_x, pos_y et scal) sont modifiés
 */

function carte_centrervue()
{
	var query  = "SELECT xmin(extent(il_trace)), ymin(extent(il_trace)), xmax(extent(il_trace)), ymax(extent(il_trace)) FROM ilot;";
	var result = pgsql_query (query);
	var enumerator = result.enumerate();

	if(result.rowCount == 0)
	{
		alert ("erreur : impossible de récupérer les coordonnées nécessaires");
		return;
	}
	enumerator.first();

	var xmin = enumerator.getVariant(0);
	var ymin = enumerator.getVariant(1);
	var xmax = enumerator.getVariant(2);
	var ymax = enumerator.getVariant(3);
	var width = Math.abs(xmax-xmin);
	var height= Math.abs(ymax-ymin);
	var sousilots = myDocument.getElementById("sousilots");
	var points = myDocument.getElementById("points");

  	myIncluder.pos_x = -1*xmin;
	myIncluder.pos_y = -1*ymax;//-1*ymin sans l'inversion de signe en Y

	var scal1 = myIncluder.LONG_CADRE/width;
	var scal2 = myIncluder.LARG_CADRE/height;

  	if (scal2 < scal1)
	{
		myIncluder.scal = scal2;
		myIncluder.pos_x += (myIncluder.LONG_CADRE/myIncluder.scal-width)/2;
	}
	else
	{
		myIncluder.scal = scal1;
		myIncluder.pos_y -= (myIncluder.LARG_CADRE/myIncluder.scal-height)/2;
	}

	top.document.getElementById("tab_info_zoom").value = myIncluder.svg_arr100(myIncluder.scal);

	myIncluder.svg_maj_points();
	myIncluder.svg_changer_pt_vue();
	myIncluder.svg_redimensionne();
}



/*
 * centre la vue sur le sous-îlot sélectionné
 *
 * @modifs	les paramètres de point de vue (pos_x, pos_y et scal) sont modifiés
 */

function carte_centrervue_sousilot()
{
	var query  = "SELECT xmin(extent(si_trace)), ymin(extent(si_trace)), xmax(extent(si_trace)), ymax(extent(si_trace)) FROM sousilot WHERE si_numero="+myIncluder.svg_no_ssilot_base();
	var result = pgsql_query (query);
	var enumerator = result.enumerate();

	if (result.rowCount == 0 )
	{
		alert ("erreur : impossible de récupérer les coordonnées nécessaires");
		return;
	}
	enumerator.first();

	var xmin = enumerator.getVariant(0);
	var ymin = enumerator.getVariant(1);
	var xmax = enumerator.getVariant(2);
	var ymax = enumerator.getVariant(3);
	var width = Math.abs(xmax-xmin);
	var height= Math.abs(ymax-ymin);
	var sousilots = myDocument.getElementById("sousilots");
	var points = myDocument.getElementById("points");

	myIncluder.pos_x = -1*xmin;
	myIncluder.pos_y = -1*ymax;//-1*ymin sans l'inversion en Y

	myIncluder.svg_redimensionne();
	var scal1 = myIncluder.LONG_CADRE/width;
	var scal2 = myIncluder.LARG_CADRE/height;

  	if (scal2 < scal1)
	{
		myIncluder.scal = scal2;
		myIncluder.pos_x += (myIncluder.LONG_CADRE/myIncluder.scal-width)/2;
	}
	else
	{
		myIncluder.scal = scal1;
		myIncluder.pos_y -= (myIncluder.LARG_CADRE/myIncluder.scal-height)/2;
	}

	myIncluder.svg_maj_points();
	myIncluder.svg_changer_pt_vue();
	myIncluder.svg_redimensionne();
}



/*
 * transforme une geometry en path SVG
 *
 * @args	geom_text : geometry PostGis
 * @retour	retourne le path SVG correpondant à geom_text
 * Cette transformation a été déportée sur la fonction d'import de la base
 */

function carte_textgeom_to_svgpoly(geom_text)
{
	/*var pos = 0;
	var poly = '';
	var virgule = false;

	while(geom_text[pos] != undefined)
	{
		if(geom_text[pos] == ' ')
		{
			if(virgule)
			{
				poly += ',';
			}
			else
			{
				poly += ' ';
			}
			virgule = !virgule;
			pos++;
		}
		else
		{
			if(geom_text[pos] == 'M' && pos != 0)
			{
				poly += 'z';
				virgule = false;
			}
			poly += geom_text[pos++];
		}
	}
	poly += 'z';
	return poly;*/

	return geom_text;
}

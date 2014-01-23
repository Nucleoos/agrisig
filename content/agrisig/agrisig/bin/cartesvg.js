/*****************************************************************************/
/*************** MODULE GERANT L'AFFICHAGE DE LA CARTE SVG *******************/
/*****************************************************************************/



/*****************************************************************************/
/**************************** VARIABLES GLOBALES *****************************/
/*****************************************************************************/



var myIncluder;
var myDocument;

var NB_OBJETS = 0;//nombre de polygones chargés dans le SVG
var pos_x = 0;//décalage en X de l'affichage de la carte
var pos_y = 0;//décalage en Y de l'affichage de la carte
var scal = 30;//échelle de base
var ssilotcurr = "ssilot0";//id du sous-ilot au-dessus duquel se trouve le curseur
var ssilotselect = "ssilot0";//id du dernier sous-îlot selectionné
var mode = "select_ssilot";//indique l'action en cours
var ancien_mode = "select_ssilot";//indique l'action précédente
var etat = 0;//indique l'étape courante de l'opération en cours d'exécution
var COUCHE_COURANTE = 1;//numéro de la couche de travail
var NB_TEXTES = 0;//nombre de textes chargés dans le SVG
var NB_POINTS = 0;//nombre de points noirs
var RAYON_POINT = 4;//rayon d'un point
var TAILLE_SELECT = 1;//taille relative des points sélectionnés par rapport aux autres points
var LONG_CADRE = 800;//longueur du cadre (cette valeur est mise à jour lors de l'initialisation)
var LARG_CADRE = 600;//largeur du cadre (cette valeur est mise à jour lors de l'initialisation)
var X_DEC = 0;//décalage en X entre les coordonnées de la souris et les coordonnées SVG (doit rester à 0 normalement, peut servir si une bande se crée dans l'iframe contenant le SVG)
var Y_DEC = 0;//décalage en Y entre les coordonnées de la souris et les coordonnées SVG (doit rester à 0 normalement)
var X_CENTRE = 0;//position en X du point de référence
var Y_CENTRE = 0;//position en Y du point de référence
var INFINI = 100000000;//valeur correspondant à l'infini, à ajuster éventuellement en fonction des données
var EPSILON = 1;//1 par défaut, à ajuster éventuellement en fonction des données (augmenter si valeurs très importantes, diminuer si valeurs très faibles)
var ERREUR_SURFACE_ACCEPTABLE = 1;//erreur acceptée lors de la simplification d'un sous-îlot (en m²)
var PI = 3.1416;
var SCAL_MIN = 0.05;//échelle minimale acceptée
var SCAL_MAX = 5;//échelle maximale acceptée
var DOUBLECLIC = false;//détection du double clic en cours
var DUREE_DOUBLECLIC = 300;//durée maximale entre 2 clic consécutifs pour qu'ils soient considérés comme un seul double clic
var mode_selection = 0;//sélectionner ou non tous les points lors de la division d'un sous-îlot (doit rester à 0)
var TAILLE_LISTES = 1000;//taille maximale d'une liste
var VER_POINT = 0;//indique le mode de verrouillage sur les points (0 = pas de verrouillage)
var DEPLACEMENT_CONTINU = false;//rafraîchir ou non l'image en permanence lorsqu'on la glisse
var AFFICHER_TEXTES = false;//afficher ou non les textes (nom des sous-îlots)
var AFFICHE_POINTS = true;//afficher ou non les points sur le sous-îlot sélectionné
var CENTRAGE_TEXTE = false;//sur certains moteurs de rendu SVG le centrage du texte s'effectue mal ; il est alors conseillé de désactiver cette option
var LISTE_POINTS_TEMPORAIRES;//liste des points sélectionnés lors d'un détourage (points oranges)
var POS_LISTE_POINTS_TEMPORAIRES;//première position libre dans la liste des points sélectionnés lors d'un détourage
var LISTE_POINTS_POLYTEMP = new Array(TAILLE_LISTES);//liste des points de la bande temporaire
var POS_LISTE_POINTS_POLYTEMP = 0;//première position libre dans la liste des points de la bande temporaire
var CONVERSION_INDEXES = new Array(TAILLE_LISTES);//conversion entre le numéro d'un sous-îlot dans le SVG et son numéro dans la base
var CONVERSION_COUCHE = new Array(TAILLE_LISTES);//contient la couche à laquelle appartiennet les sous-îlots du SVG



/*****************************************************************************/
/************* VARIABLES UTILISEES COMME RETOUR DE FONCTION ******************/
/*****************************************************************************/



var XG;
var YG;
var p1;
var p2;
var p3;
var tab_coord1;
var tab_coord2;
var retour;
var pos0;
var pos1;
var pos2;
var x_point_courant;
var y_point_courant;
var ok;
var x_projete;
var y_projete;
var x_extremite1;
var y_extremite1;
var x_projete2;
var y_projete2;
var x_extremite2;
var y_extremite2;
var x_extremite_tampon;
var y_extremite_tampon;
var x_intersection;
var y_intersection;
var distance1;
var distance2;
var distance_sup1;
var distance_sup2;
var angle0;
var zoom_fact;
var pointTemp;
var listeTemp;
var compteurLT;
var cycle;
var nb_points_arc;
var prec;
var angle_debut;
var angle_fin;



/*
 *
 *
 * @args	
 * @retour	
 * @modifs	
 */



/*
 * description d'une fonction
 *
 * @args	: arguments de la fonction
 * @retour	: valeur retournée par la fonction
 * @modifs	: évènements activés, variables modifiées par effet de bord
 */



/*****************************************************************************/
/*************************** GESTION DES COUCHES *****************************/
/*****************************************************************************/



/*
 * affecte un sous-îlot à une couche
 *
 * @args	position : numéro dans le SVG du sous-îlot
 *		couche : couche à laquelle ce sous-îlot est affecté
 * @modifs	le tableau CONVERSION_COUCHE est mis à jour
 */

function svg_ecrit_conversion_couche(position, couche)
{
	myIncluder.CONVERSION_COUCHE[position] = couche;
}



/*
 * teste si un sous-îlot appartient à la couche courante (la couche sur laquelle on peut agir)
 *
 * @args	no_ssilot : numéro dans le SVG du sous-îlot dont on teste l'appartenance
 * @retour	true si ce sous-îlot appartient à la couche courante, false sinon
 */

function svg_appartient_couche_courante(no_ssilot)
{
	return(myIncluder.svg_couche_ssilot(no_ssilot) == COUCHE_COURANTE);
}



/*
 * recherche la couche à laquelle appartient un sous-îlot
 *
 * @args	no_ssilot : numéro dans le SVG du sous-îlot dont on recherche la couche
 * @retour	couche à laquelle appartient ce sous-îlot, undefined si ce sous-îlot n'appartient à aucune couche
 */

function svg_couche_ssilot(no_ssilot)
{
	return(myIncluder.CONVERSION_COUCHE[no_ssilot]);
}



/*
 * change la couche courante (la couche sur laquelle on peut agir)
 *
 * @args	no_couche : le numéro de la couche devenant la couche courante
 * @modifs	la variable globale COUCHE_COURANTE est mise à jour
 */

function svg_change_couche(no_couche)
{
	myIncluder.COUCHE_COURANTE = no_couche;
}



/*****************************************************************************/
/********************** CONVERSIONS INDEXES BASE/SVG *************************/
/*****************************************************************************/



/*
 * supprime la liste des points supplémentaires (les points n'appartenant à aucun sous-îlot) de la liste des points du SVG
 *
 * @modifs	le tableau LISTE_POINTS_SVG est mis à jour
 */


function svg_desalloue_points_supplementaires()
{
	myIncluder.LISTE_POINTS_SVG[0] = undefined;
}



/*
 * retourne le numéro dans la base du sous-îlot actuellement sélectionné
 *
 * @retour	numéro dans la base du sous-îlot actuellement sélectionné
 */

function svg_no_ssilot_base()
{
	return myIncluder.CONVERSION_INDEXES[myIncluder.svg_extraire_no()];
}



/*
 * retourne le numéro dans la base d'un sous-îlot
 *
 * @args	no_ssilot : numéro dans le SVG du sous-îlot
 * @retour	numéro dans la base du sous-îlot
 */

function svg_no_ssilot_base_courant(no_ssilot)
{
	return(myIncluder.CONVERSION_INDEXES[no_ssilot]);
}



/*
 * ajoute une conversion numéro de sous-îlot dans le SVG/numéro de sous-îlot dans la base
 *
 * @args	position : numéro du sous-îlot dans le SVG
 *		index : numéro du sous-îlot dans la base
 * @modifs	la liste CONVERSION_INDEXES est mise à jour
 */

function svg_ecrit_conversion_indexes(position, index)
{
	myIncluder.CONVERSION_INDEXES[position] = index;
}



/*
 * recherche le numéro d'un sous-îlot dans la base
 *
 * @args	no_base : numéro du sous-îlot dans la base
 * @retour	numéro du sous-îlot dans le SVG
 */

function svg_base2svg(no_base)
{
	var i = 1;

	while(myIncluder.CONVERSION_INDEXES[i] != no_base && myIncluder.CONVERSION_INDEXES[i] != undefined)
	{
		i++;
	}

	return i;
}



/*
 * sélectionne un sous-îlot (le résultat est le même que si on lui avait cliqué dessus)
 *
 * @args	no_base : numéro dans la base du sous-îlot à sélectionner
 * @modifs	le sous-îlot est sélectionné
 */

function svg_selectionne_ssilot(no_base)
{
	myIncluder.svg_clic_sous_ilot(myIncluder.svg_base2svg(no_base));
}



/*
 * compte le nombre de cycles (contours distincts) dans un sous-îlot
 *
 * @args	ssilot : id du sous-îlot
 * @retour	nombre de cycles dans le sous-îlot
 */

function svg_nb_cycles(ssilot)
{
	var path = myDocument.getElementById(ssilot).getAttribute("d");
	var i = 0;
	var compteur = 0;

	while(path[i] != undefined)
	{
		if(path[i] == 'M') compteur++;
		i++;
	}

	return compteur;
}



/*
 * crée la liste des points du SVG
 * 
 * @modifs	LISTE_POINTS_SVG est créée
 * LISTE_POINTS_SVG[0] : points n'appartenant à aucun sous-îlot
 * LISTE_POINTS_SVG[i][j][k] avec k>0 : abscisse du k/2 ème point du jème cycle du ième sous-îlot dans le SVG si k pair
 *                                      ordonnée du (k-1)/2 ème point du jème cycle du ième sous-îlot dans le SVG si k impair
 */

function svg_cree_liste_points()
{
	var copy = undefined;

	if(myIncluder.LISTE_POINTS_SVG != undefined)
	{
		copy = myIncluder.LISTE_POINTS_SVG[0];
	}

	myIncluder.LISTE_POINTS_SVG = new Array(myIncluder.NB_OBJETS+1);//le champ 0 contient les points n'appartenant à aucun sous-îlot
	myIncluder.LISTE_POINTS_SVG[0] = copy;

	var i;

	for(i = 1; i <= myIncluder.NB_OBJETS; i++)
	{
		myIncluder.LISTE_POINTS_SVG[i] = myIncluder.svg_extrait_points_path(i);
	}
}



/*
 * extrait la liste de points d'un sous-îlot
 *
 * @args	no_ssilot : le numéro du sous-îlot dans le SVG
 * @retour	liste des points du sous-îlot
 */

function svg_extrait_points_path(no_ssilot)
{
	return svg_extrait_points_path_chaine(myDocument.getElementById("ssilot"+no_ssilot).getAttribute("tagName"));
}



/*
 * extrait la liste de points d'un path
 *
 * @args	path : path contenant les points à extraire
 * @retour	liste contenant les points du path
 * l[i][j] : abscisse du j/2 ème point du ième cycle du sous-îlot dans le SVG si j pair
 *           ordonnée du (j-1)/2 ème point du ième cycle du sous-îlot dans le SVG si j impair
 */

function svg_extrait_points_path_chaine(path)
{
	var liste_liste_points = new Array(20);//nombre maximun de cycles dans le path
	var i, j;
	var pos_path = 0;
	var valeur;

	i = -1;
	while(path[pos_path] != undefined)
	{
		if(path[pos_path] == 'z' || path[pos_path] == ' ')
		{
			pos_path++;
		}
		else
		{
			if(path[pos_path] == 'M')
			{
				liste_liste_points[++i] = new Array(myIncluder.TAILLE_LISTES);
				j = 0;
				pos_path++;
			}
			else
			{
				if(path[pos_path] == 'L')
				{
					pos_path++;
				}
			}

			valeur = '';

			while(path[pos_path] != ',') valeur += path[pos_path++];

			liste_liste_points[i][j++] = parseFloat(valeur);

			pos_path++;
			valeur ='';

			while(path[pos_path] != ' ' && path[pos_path] != undefined) valeur += path[pos_path++];

			liste_liste_points[i][j++] = parseFloat(valeur);
			pos_path++;
		}
	}

	return liste_liste_points;
}



/*****************************************************************************/
/****************************** INITIALISATION *******************************/
/*****************************************************************************/



/*
 * initialise la fenêtre d'affichage SVG
 */

function svg_init()//initialise le SVG
{
	myIncluder = top;//préfixe pour les fonctions et les variables globales
	myDocument = top.frames["FrameTab"].document;//préfixe pour les recherches dans l'arbre XML

	myIncluder.mode = "select_ssilot";//mode par défaut

	myDocument.onmousemove = myIncluder.svg_maj_coord_souris;//mise à jour des coordonnées lors du déplacement de la souris

	myIncluder.svg_active_redimensionnement();//mise à jour des propriétés de la fenêtre graphique lors de son redimensionnement

	myIncluder.svg_redimensionne();//calcul des propriétés de la fenêtre graphique

	myIncluder.carte_centrervue();//centre la vue sur les îlots de la personne loggée

	myIncluder.svg_toolbar_defaut();//barre d'outils par défaut

	myIncluder.svg_selection_point_dep_centre1();//activation du déplacement du point de vue par glissage

	myIncluder.svg_charge_preferences();//chargement des préférences utilisateur
}



/*
 * initialise les variables globales correspondant aux préférences utilisateur
 *
 * @modifs	EPSILON, INFINI, ERREUR_SURFACE_ACCEPTABLE, SCAL_MIN, SCAL_MAX, DUREE_DOUBLECLIC, CENTRAGE_TEXTES et DEPLACEMENT_CONTINU sont initialisées avec les valeurs de la base
 */

function svg_charge_preferences()
{
	myIncluder.EPSILON = myIncluder.pref_charge_pref("Epsilon");
	myIncluder.INFINI = myIncluder.pref_charge_pref("Infini");
	myIncluder.ERREUR_SURFACE_ACCEPTABLE = myIncluder.pref_charge_pref("Erreur_surface_acceptable");
	myIncluder.SCAL_MIN = myIncluder.pref_charge_pref("Zoom_minimal");
	myIncluder.SCAL_MAX = myIncluder.pref_charge_pref("Zoom_maximal");
	myIncluder.DUREE_DOUBLECLIC = myIncluder.pref_charge_pref("Duree_doubleclic");
	myIncluder.CENTRAGE_TEXTE = myIncluder.pref_charge_pref_bool("Centrage_textes");
	myIncluder.DEPLACEMENT_CONTINU = myIncluder.pref_charge_pref_bool("Déplacement_continu");
}



/*
 * active la mise à jour des propriétés de la fenêtre graphique lors de son redimensionnement
 */

function svg_active_redimensionnement()
{
	var iframeSVG = top.document.getElementById("carteSVG");

	iframeSVG.contentWindow.onresize = myIncluder.svg_redimensionne;
}



/*
 * met à jour les propriétés de la fenêtre graphique ; cette fonction est appelée lors du redimensionnement de la fenêtre graphique
 *
 * @modifs	LONG_CADRE : prend la valeur de la nouvelle longueur de la fenêtre graphique
 *		LARG_CADRE : prend la valeur de la nouvelle largeur de la fenêtre graphique
 */

function svg_redimensionne()
{
	var iframeSvg=top.document.getElementById("carteSVG");

	myIncluder.LONG_CADRE = iframeSvg.boxObject.width;
	myIncluder.LARG_CADRE = iframeSvg.boxObject.height;

	myDocument.getElementById("canvas").setAttribute("width", myIncluder.LONG_CADRE);
	myDocument.getElementById("canvas").setAttribute("height", myIncluder.LARG_CADRE);
}



/*
 * active la détection du clic sur un sous-îlot et du survol d'un sous-îlot
 */

function svg_active()
{
	for(i = 1; i <= myIncluder.NB_OBJETS; i++)
	{
		if(svg_appartient_couche_courante(i))
		{
			myDocument.getElementById('ssilot'+i).setAttribute('onclick','top.svg_clic_sous_ilot('+i+')');
			myDocument.getElementById('ssilot'+i).setAttribute('onmouseover','top.svg_au_dessus('+i+')');
		}
	}
}



/*
 * désactive la détection du clic sur un sous-îlot et du survol d'un sous-îlot
 */

function svg_desactive()
{
	for(i = 1; i <= myIncluder.NB_OBJETS; i++)
	{
		if(svg_appartient_couche_courante(i))
		{
			myDocument.getElementById('ssilot'+i).setAttribute('onclick', null);
			myDocument.getElementById('ssilot'+i).setAttribute('onmouseover', null);
		}
	}
}



/*
 * met à jour l'affichage des coordonnées de la souris ; cette fonction est appelée lors d'un déplacement de la souris
 *
 * @args	evt : évènement associé au déplacement
 */

function svg_maj_coord_souris(evt)
{
	var x, y, d, a;

	if(myIncluder.VER_POINT == 0)//cas où on ne verrouille pas sur les points existants
	{
		x = myIncluder.svg_conversion_x(evt.clientX);
		y = myIncluder.svg_conversion_y(evt.clientY);
		d = myIncluder.svg_arr100(myIncluder.svg_norme(x-myIncluder.X_CENTRE, y-myIncluder.Y_CENTRE));
		a = myIncluder.svg_arr100(myIncluder.svg_angle(x, y));
	}
	else//cas où on verrouille sur les points d'un sous-îlot existant
	{
		myIncluder.svg_cherche_point_plus_pres(myIncluder.svg_conversion_x(evt.clientX), myIncluder.svg_conversion_y(evt.clientY));
		x = myIncluder.svg_arr100(myIncluder.LISTE_POINTS_SVG[myIncluder.p1][myIncluder.p2][myIncluder.p3]);
		y = myIncluder.svg_arr100(myIncluder.LISTE_POINTS_SVG[myIncluder.p1][myIncluder.p2][myIncluder.p3+1]);
		d = myIncluder.svg_arr100(myIncluder.svg_norme(myIncluder.LISTE_POINTS_SVG[myIncluder.p1][myIncluder.p2][myIncluder.p3]-myIncluder.X_CENTRE, myIncluder.LISTE_POINTS_SVG[p1][p2][p3+1]-myIncluder.Y_CENTRE));
		a = myIncluder.svg_arr100(myIncluder.svg_angle(myIncluder.LISTE_POINTS_SVG[myIncluder.p1][myIncluder.p2][myIncluder.p3], myIncluder.LISTE_POINTS_SVG[p1][p2][p3+1]));

		myDocument.getElementById("curseur2").setAttribute("cx", x);//mise à jour du curseur jaune
		myDocument.getElementById("curseur2").setAttribute("cy", y);
	}

	top.document.getElementById("lb_coord_x").setAttribute("value", x);
	top.document.getElementById("lb_coord_y").setAttribute("value", y);
	top.document.getElementById("lb_angle").setAttribute("value", a);
	top.document.getElementById("lb_distance").setAttribute("value", d);
}



/*
 * recherche le point existant le plus proche d'un point donné
 *
 * @args	x : abscisse du point de référence pour la recherche
 *		y : ordonnée du point de référence pour la recherche
 * @modifs	p1 : numéro du sous-îlot auquel appartient le point le plus proche
 *		p2 : numéro du cycle dans le sous-îlot auquel appartient le point le plus proche
 *		p3 : position dans le cycle de l'abscisse du point le plus proche (l'ordonnée se trouve à la position suivante)
 */

function svg_cherche_point_plus_pres(x, y)
{
	var i, j, k;
	var dist2_plus_pres = myIncluder.INFINI;

	i = myIncluder.svg_extraire_no();
	
	myIncluder.p1 = i;
	myIncluder.p2 = 0;
	myIncluder.p3 = 0;

	switch(myIncluder.VER_POINT)
	{
		case 1://cas où on ne verrouille que sur les points du sous-îlot sélectionné
			j = 0;
			while(myIncluder.LISTE_POINTS_SVG[i][j] != undefined)
			{
				k = 0;
				while(myIncluder.LISTE_POINTS_SVG[i][j][k] != undefined)
				{
					if(myIncluder.svg_carre(x-myIncluder.LISTE_POINTS_SVG[i][j][k])+svg_carre(y-myIncluder.LISTE_POINTS_SVG[i][j][k+1]) < dist2_plus_pres)
					{
						dist2_plus_pres = myIncluder.svg_carre(x-myIncluder.LISTE_POINTS_SVG[i][j][k])+svg_carre(y-myIncluder.LISTE_POINTS_SVG[i][j][k+1]);
						myIncluder.p1 = i;
						myIncluder.p2 = j;
						myIncluder.p3 = k;
					}
					k += 2;
				}
				j++;
			}

			j = 0;
			if(myIncluder.LISTE_POINTS_SVG[0] != undefined)
			{
				while(myIncluder.LISTE_POINTS_SVG[0][j] != undefined)
				{
					k = 0;

					while(myIncluder.LISTE_POINTS_SVG[0][j][k] != undefined)
					{
						if(myIncluder.svg_carre(x-myIncluder.LISTE_POINTS_SVG[0][j][k])+svg_carre(y-myIncluder.LISTE_POINTS_SVG[0][j][k+1]) < dist2_plus_pres)
						{
							dist2_plus_pres = myIncluder.svg_carre(x-myIncluder.LISTE_POINTS_SVG[0][j][k])+svg_carre(y-myIncluder.LISTE_POINTS_SVG[0][j][k+1]);
							myIncluder.p1 = 0;
							myIncluder.p2 = j;
							myIncluder.p3 = k;
						}
						k += 2 ;
					}
					j++;
				}
			}
		break;
		case 2://cas où on verrouille sur les points de tous les sous-îlots
			i = 1;
			while(myIncluder.LISTE_POINTS_SVG[i] != undefined)
			{
				j = 0;
				while(myIncluder.LISTE_POINTS_SVG[i][j] != undefined)
				{
					k = 0;
					while(myIncluder.LISTE_POINTS_SVG[i][j][k] != undefined)
					{
						if(myIncluder.svg_carre(x-myIncluder.LISTE_POINTS_SVG[i][j][k])+svg_carre(y-myIncluder.LISTE_POINTS_SVG[i][j][k+1]) < dist2_plus_pres)
						{
							dist2_plus_pres = myIncluder.svg_carre(x-myIncluder.LISTE_POINTS_SVG[i][j][k])+svg_carre(y-myIncluder.LISTE_POINTS_SVG[i][j][k+1]);
							myIncluder.p1 = i;
							myIncluder.p2 = j;
							myIncluder.p3 = k;
						}
						k += 2;
					}
					j++;
				}
				i++;
			}

			j = 0;
			if(myIncluder.LISTE_POINTS_SVG[0] != undefined)
			{
				while(myIncluder.LISTE_POINTS_SVG[0][j] != undefined)
				{
					k = 0;

					while(myIncluder.LISTE_POINTS_SVG[0][j][k] != undefined)
					{
						if(myIncluder.svg_carre(x-myIncluder.LISTE_POINTS_SVG[0][j][k])+svg_carre(y-myIncluder.LISTE_POINTS_SVG[0][j][k+1]) < dist2_plus_pres)
						{
							dist2_plus_pres = myIncluder.svg_carre(x-myIncluder.LISTE_POINTS_SVG[0][j][k])+svg_carre(y-myIncluder.LISTE_POINTS_SVG[0][j][k+1]);
							myIncluder.p1 = 0;
							myIncluder.p2 = j;
							myIncluder.p3 = k;
						}
						k += 2 ;
					}
					j++;
				}
			}
		break;
		case 3://cas où on verrouille sur un point supplémentaire (cas de la suppression d'un point appartenant à la bande temporaire)
			j = 0;
			if(myIncluder.LISTE_POINTS_SVG[0] != undefined)
			{
				while(myIncluder.LISTE_POINTS_SVG[0][j] != undefined)
				{
					k = 0;

					while(myIncluder.LISTE_POINTS_SVG[0][j][k] != undefined)
					{
						if(myIncluder.svg_carre(x-myIncluder.LISTE_POINTS_SVG[0][j][k])+svg_carre(y-myIncluder.LISTE_POINTS_SVG[0][j][k+1]) < dist2_plus_pres)
						{
							dist2_plus_pres = myIncluder.svg_carre(x-myIncluder.LISTE_POINTS_SVG[0][j][k])+svg_carre(y-myIncluder.LISTE_POINTS_SVG[0][j][k+1]);
							myIncluder.p1 = 0;
							myIncluder.p2 = j;
							myIncluder.p3 = k;
						}
						k += 2 ;
					}
					j++;
				}
			}
		break;
	}
}



/*
 * calcule l'angle entre le point de référence, l'horizontale et un autre point
 *
 * @args	x : abscisse de l'autre point
 *		y : ordonnée de l'autre point
 * @retour	angle entre le point de référence, l'horizontale et l'autre point
 */

function svg_angle(x, y)
{
	sinus = (y-myIncluder.Y_CENTRE)/myIncluder.svg_norme(x-myIncluder.X_CENTRE, y-myIncluder.Y_CENTRE);
	cosinus = (x-myIncluder.X_CENTRE);//seul le signe importe

	if(sinus >= 0 && cosinus >= 0) return Math.asin(sinus)*180/myIncluder.PI;
	if(sinus >= 0 && cosinus < 0) return 180-Math.asin(sinus)*180/myIncluder.PI;
	if(sinus < 0 && cosinus >= 0) return Math.asin(sinus)*180/myIncluder.PI;
	if(sinus < 0 && cosinus < 0) return -180-Math.asin(sinus)*180/myIncluder.PI;
}



/*
 * met à jour le numéro du sous-îlot pointé par la souris dans le panneau d'affichage ; cette fonction est appelée lorsque la souris pointe un nouveau sous-îlot
 *
 * @args	no_ssilot : numéro dans le SVG du sous-îlot pointé oar la souris
 */

function svg_au_dessus(no_ssilot)
{
	top.document.getElementById("tab_info_si").value = myIncluder.svg_no_ssilot_base_courant(no_ssilot);
}



/*
 * fonction appelée lorsque l'on clique sur un sous-îlot
 *
 * @args	no_ssilot : numéro dans le SVG du sous-îlot
 * @modifs	ssilotselect : prend pour nouvelle valeur l'id du sous-îlot
 */

function svg_clic_sous_ilot(no_ssilot)//action lorsqu'on clique sur un sous-ilot
{
	//var handle = myDocument.getElementById("canvas").suspendRedraw(3000);

	if(myIncluder.DOUBLECLIC)//si un double clic est en cours de détection effectuer l'action correspondante
	{
		myIncluder.DOUBLECLIC = false;
		myIncluder.carte_centrervue_sousilot();
	}
	else//sinon activer la détection du double clic pour une durée fixée
	{
		myIncluder.DOUBLECLIC = true;
		setTimeout("myIncluder.DOUBLECLIC = false;", myIncluder.DUREE_DOUBLECLIC);
	}

	if(myIncluder.mode == "select_ssilot" && svg_appartient_couche_courante(no_ssilot) && myDocument.getElementById('ssilot'+no_ssilot).getAttribute("stroke") != "black")
	{
		try//pour éviter les problèmes lorsqu'aucun sous-îlot n'est sélectionné
		{
			myDocument.getElementById(myIncluder.ssilotselect).setAttribute("stroke", "none");
		}
		catch(e)
		{
		}

		myIncluder.svg_supprime_points();
		myDocument.getElementById("canvas").forceRedraw();

		var handle = myDocument.getElementById("canvas").suspendRedraw(3000);

		myIncluder.ssilotselect = 'ssilot'+no_ssilot;

		try//pour éviter les problèmes lorsqu'aucun sous-îlot n'est sélectionné
		{
			myDocument.getElementById(myIncluder.ssilotselect).setAttribute("stroke", "black");
		}
		catch(e)
		{
		}

		if(myIncluder.AFFICHE_POINTS)
		{
			myIncluder.svg_genere_points_select();
		}
		try
		{
			onSousIlotClick();//rafraîchissement du panneau d'information latéral
		}
		catch(e)
		{
		}

		//myIncluder.svg_rafraichir_curseurs();
		myDocument.getElementById("sousilots").appendChild(myDocument.getElementById("ssilot"+no_ssilot));//mettre le sous-îlot sélectionné au premier plan pour que le contour ne soit pas en partie couvert par les autres sous-îlots
		myDocument.getElementById("canvas").unsuspendRedraw(handle);
	}
	else
	{
		if(!svg_appartient_couche_courante(no_ssilot))
		{
			myDocument.getElementById(myIncluder.ssilotselect).setAttribute("stroke", "none");
			myIncluder.svg_supprime_points();
		}
	}
	//myDocument.getElementById("canvas").unsuspendRedraw(handle);
}



/*
 * restaure la toolbar d'outils SVG dans son état précédent ; cette fonction est appelée lors d'une annulation
 */

function svg_restaure_ancienne_toolbar()
{
	switch(myIncluder.ancien_mode)
	{
		case "detourage"://detourage avancé
			svg_toolbar_detourage();
		break;

		case "select_existantX"://division simple de sous-îlot
			svg_toolbar_detourage();
		break;

		default:
			svg_toolbar_defaut();
	}

}



/*
 * met la toolbar d'outils SVG dans son état par défaut
 */

function svg_toolbar_defaut()
{
	top.document.getElementById("carte_centrer").setAttribute("disabled", false);
	top.document.getElementById("carte_centrer_select").setAttribute("disabled", false);

	top.document.getElementById("carte_annuler").setAttribute("disabled", false);
	top.document.getElementById("carte_zoomP").setAttribute("disabled", false);
	top.document.getElementById("carte_zoomM").setAttribute("disabled", false);
	top.document.getElementById("carte_PtOn").setAttribute("disabled", false);
	top.document.getElementById("carte_PtOff").setAttribute("disabled", false);
	top.document.getElementById("carte_verr0").setAttribute("disabled", false);
	top.document.getElementById("carte_verr1").setAttribute("disabled", false);
	top.document.getElementById("carte_verr2").setAttribute("disabled", false);

	top.document.getElementById("carte_ref").setAttribute("disabled", false);

	top.document.getElementById("carte_insertion").setAttribute("disabled", false);
	top.document.getElementById("carte_perpend").setAttribute("disabled", false);
	top.document.getElementById("carte_parall").setAttribute("disabled", false);

	top.document.getElementById("carte_cercle").setAttribute("disabled", false);
	top.document.getElementById("carte_bande").setAttribute("disabled", false);
	top.document.getElementById("carte_bande_supprimer_pt").setAttribute("disabled", true);
	top.document.getElementById("carte_bande_fin").setAttribute("disabled", true);

	top.document.getElementById("carte_DivSimple").setAttribute("disabled", false);

	top.document.getElementById("carte_DivComplexe").setAttribute("disabled", false);
	top.document.getElementById("carte_DivComplexeSelectBande").setAttribute("disabled", true);
	top.document.getElementById("carte_DivComplexeAjPt").setAttribute("disabled", true);
	top.document.getElementById("carte_DivComplexeSuppPt").setAttribute("disabled", true);
	top.document.getElementById("carte_DivComplexeFin").setAttribute("disabled", true);

	top.document.getElementById("carte_distance").setAttribute("disabled", false);
}



/*
 * met la toolbar dans son état correspondant au détourage avancé
 */

function svg_toolbar_detourage()
{
	top.document.getElementById("carte_ref").setAttribute("disabled", false);

	top.document.getElementById("carte_cercle").setAttribute("disabled", true);
	top.document.getElementById("carte_bande").setAttribute("disabled", true);
	top.document.getElementById("carte_bande_supprimer_pt").setAttribute("disabled", true);
	top.document.getElementById("carte_bande_fin").setAttribute("disabled", true);

	top.document.getElementById("carte_insertion").setAttribute("disabled", false);
	top.document.getElementById("carte_perpend").setAttribute("disabled", false);
	top.document.getElementById("carte_parall").setAttribute("disabled", false);

	top.document.getElementById("carte_DivSimple").setAttribute("disabled", true);

	top.document.getElementById("carte_DivComplexe").setAttribute("disabled", true);
	top.document.getElementById("carte_DivComplexeSelectBande").setAttribute("disabled", false);
	top.document.getElementById("carte_DivComplexeAjPt").setAttribute("disabled", false);
	top.document.getElementById("carte_DivComplexeSuppPt").setAttribute("disabled", false);
	top.document.getElementById("carte_DivComplexeFin").setAttribute("disabled", false);

	top.document.getElementById("carte_distance").setAttribute("disabled", true);
}



/*
 * met la toolbar dans son état correspondant à l'utilisation d'un des outils parallèle, perpendiculaire, segment, tracé de bande ou de point supplémentaire dans le cas d'une division complexe ou division simple est en cours d'utilisation
 */

function svg_toolbar_outils()
{
	top.document.getElementById("carte_ref").setAttribute("disabled", true);

	top.document.getElementById("carte_insertion").setAttribute("disabled", true);
	top.document.getElementById("carte_perpend").setAttribute("disabled", true);
	top.document.getElementById("carte_parall").setAttribute("disabled", true);

	top.document.getElementById("carte_cercle").setAttribute("disabled", true);
	top.document.getElementById("carte_bande").setAttribute("disabled", true);
	top.document.getElementById("carte_bande_supprimer_pt").setAttribute("disabled", true);
	top.document.getElementById("carte_bande_fin").setAttribute("disabled", true);

	top.document.getElementById("carte_DivSimple").setAttribute("disabled", true);

	top.document.getElementById("carte_DivComplexe").setAttribute("disabled", true);
	top.document.getElementById("carte_DivComplexeSelectBande").setAttribute("disabled", true);
	top.document.getElementById("carte_DivComplexeAjPt").setAttribute("disabled", true);
	top.document.getElementById("carte_DivComplexeSuppPt").setAttribute("disabled", true);
	top.document.getElementById("carte_DivComplexeFin").setAttribute("disabled", true);

	top.document.getElementById("carte_distance").setAttribute("disabled", true);
}



/*
 * met la toolbar dans son état correspondant à l'utilisation d'une division simple
 */

function svg_toolbar_division()
{
	top.document.getElementById("carte_ref").setAttribute("disabled", false);

	top.document.getElementById("carte_insertion").setAttribute("disabled", false);
	top.document.getElementById("carte_perpend").setAttribute("disabled", false);
	top.document.getElementById("carte_parall").setAttribute("disabled", false);

	top.document.getElementById("carte_cercle").setAttribute("disabled", true);
	top.document.getElementById("carte_bande").setAttribute("disabled", true);
	top.document.getElementById("carte_bande_supprimer_pt").setAttribute("disabled", true);
	top.document.getElementById("carte_bande_fin").setAttribute("disabled", true);

	top.document.getElementById("carte_DivSimple").setAttribute("disabled", true);

	top.document.getElementById("carte_DivComplexe").setAttribute("disabled", true);
	top.document.getElementById("carte_DivComplexeSelectBande").setAttribute("disabled", true);
	top.document.getElementById("carte_DivComplexeAjPt").setAttribute("disabled", true);
	top.document.getElementById("carte_DivComplexeSuppPt").setAttribute("disabled", true);
	top.document.getElementById("carte_DivComplexeFin").setAttribute("disabled", true);

	top.document.getElementById("carte_distance").setAttribute("disabled", true);
}



/*
 * met la toolbar dans son état correspondant à l'utilisation de l'outil pour créer une bande
 */

function svg_toolbar_bande()
{
	top.document.getElementById("carte_ref").setAttribute("disabled", true);

	top.document.getElementById("carte_verr0").setAttribute("disabled", true);
	top.document.getElementById("carte_verr1").setAttribute("disabled", true);
	top.document.getElementById("carte_verr2").setAttribute("disabled", true);

	top.document.getElementById("carte_insertion").setAttribute("disabled", true);
	top.document.getElementById("carte_perpend").setAttribute("disabled", true);
	top.document.getElementById("carte_parall").setAttribute("disabled", true);

	top.document.getElementById("carte_cercle").setAttribute("disabled", true);
	top.document.getElementById("carte_bande").setAttribute("disabled", true);
	top.document.getElementById("carte_bande_supprimer_pt").setAttribute("disabled", false);
	top.document.getElementById("carte_bande_fin").setAttribute("disabled", false);

	top.document.getElementById("carte_DivSimple").setAttribute("disabled", true);

	top.document.getElementById("carte_DivComplexe").setAttribute("disabled", true);
	top.document.getElementById("carte_DivComplexeSelectBande").setAttribute("disabled", true);
	top.document.getElementById("carte_DivComplexeAjPt").setAttribute("disabled", true);
	top.document.getElementById("carte_DivComplexeSuppPt").setAttribute("disabled", true);
	top.document.getElementById("carte_DivComplexeFin").setAttribute("disabled", true);

	top.document.getElementById("carte_distance").setAttribute("disabled", true);
}



/*****************************************************************************/
/******************* EDITION GRAPHIQUE : ANNULATION  *************************/
/*****************************************************************************/



/*
 * annule l'action en cours
 *
 * @modifs	le mode, la toolbar, les évènements souris sont remis à leur valeur par défaut
 */

function svg_annuler()
{
	var mode_temp = myIncluder.mode;//pb pour remettre la bonne toolbar ... tester ancien_mode à la sortie

	myDocument.onmousemove = myIncluder.svg_maj_coord_souris;//remarque : pas d'annulation à un seul niveau possible
	myIncluder.mode = myIncluder.ancien_mode;
	myIncluder.ancien_mode = "select_ssilot";
	myIncluder.svg_desalloue_points_supplementaires();

	myIncluder.svg_toolbar_defaut();
	myIncluder.svg_supprimer_liste_points_temporaires();

	try
	{
		switch(mode_temp)
		{
			case "super_zoom":
				myDocument.removeEventListener("click", myIncluder.svg_super_zoom2, true);
			break;

			case "def_centre":
				myDocument.removeEventListener("click", myIncluder.svg_definir_centre2, true);
			break;

			case "select_existant":
				myDocument.removeEventListener("click", myIncluder.svg_selectionPointExistant2, true);
			break;

			case "select_existantX":
				myDocument.removeEventListener("click", myIncluder.svg_selectionPointExistant2X, true);
			break;

			case "nouveau_ptXX":
				myDocument.removeEventListener("click", myIncluder.svg_nouveau_point2XX, true);
			break;

			case "select_existantXX":
				myDocument.removeEventListener("click", myIncluder.svg_selectionPointExistant2XX, true);
			break;

			case "nouveau_pt_cote":
				myDocument.removeEventListener("click", myIncluder.svg_nouveau_point2, true);
				myIncluder.svg_supprimer_curseur1();
				myIncluder.svg_effacer_lignes();
				myIncluder.svg_supprimer_curseur3();
				myIncluder.svg_supprimer_curseur4();
			break;

			case "nouveau_pt_parallele":
				myDocument.removeEventListener("click", myIncluder.svg_nouveau_point_parallele2, true);
				myIncluder.svg_effacer_lignes();
			break;

			case "parallele":
				myDocument.removeEventListener("click", myIncluder.svg_trace_parallele, true);
				myIncluder.svg_effacer_lignes();
			break;

			case "perpendiculaire":
				//myDocument.removeEventListener("click", myIncluder.svg_nouveau_point_perpendiculaire2, true);
				//myIncluder.svg_supprimer_curseur1();
				//myIncluder.svg_effacer_lignes();
			break;

			case "nouveau_pt_perpendiculaire":
				myDocument.removeEventListener("click", myIncluder.svg_nouveau_point_perpendiculaire2, true);
				myIncluder.svg_supprimer_curseur1();
				myIncluder.svg_supprimer_curseur3();
				myIncluder.svg_supprimer_curseur4();
				myIncluder.svg_effacer_lignes();
			break;

			case "modifier_points_inseres":
				myDocument.removeEventListener("click", myIncluder.svg_ajuster, true);
			break;

			case "select_bande":
				myDocument.removeEventListener("click", myIncluder.svg_selection_point_bande_parallele2, true);
				myIncluder.svg_supprimer_curseur3();
				myIncluder.svg_supprimer_curseur4();
			break;

			case "modif_bande":
				myIncluder.svg_modifier_verrouillage(0);
				myDocument.removeEventListener("click", myIncluder.svg_supprime_point_bande, true);
				myIncluder.carte_supppolytemp();
				myIncluder.svg_supprime_points();
			break;

			case "creation_cercle":
				myDocument.removeEventListener("click", myIncluder.svg_creation_cercle2, true);
			break;

			case "detoure_chemin_existant":
				myDocument.removeEventListener("click", myIncluder.svg_detoure_chemin_existant2, true);
				myIncluder.svg_supprimer_curseur3();
				myIncluder.svg_supprimer_curseur4();
			break;

			case "detoure_nouveau_pt":
				myDocument.removeEventListener("click", myIncluder.svg_detoure_nouveau_point2, true);
				myIncluder.svg_supprimer_point_detourage();
			break;

			case "distance_projete2":
				myDocument.removeEventListener("click", myIncluder.svg_calcule_distance, true);
				myIncluder.svg_effacer_lignes();
			break;

			case "distance_projete":
				myDocument.removeEventListener("click", myIncluder.svg_distance_projete3, true);
				myIncluder.svg_effacer_lignes();
			break;
		}
	}
	catch(e)
	{
	}

    if(myIncluder.AFFICHE_POINTS)
    {
		myIncluder.svg_genere_points_select();
	}
	else
	{
		svg_supprime_points();
	}
}



/*****************************************************************************/
/************* EDITION GRAPHIQUE : POINT DE VUE ET ZOOM **********************/
/*****************************************************************************/



/*
 * applique les transformations correspondant aux paramètres d'affichage sur les objets SVG ; cette fonction est appelée après modification de la position de la fenêtre d'affichage ou du facteur de zoom
 *
 * @modifs	les attributs 'transform', 'stroke-width', 'r' des objets SVG ainsi que la position des textes sont mis à jour
 */

function svg_changer_pt_vue()
{
    var handle = myDocument.getElementById("canvas").suspendRedraw(3000);//bloque le calcul du rendu en continu pendant la durée des modifications

	myDocument.getElementById("sousilots").setAttribute("transform", 'scale('+myIncluder.scal+') '+'translate('+myIncluder.pos_x+','+myIncluder.pos_y+')');
	myDocument.getElementById("points").setAttribute("transform", 'scale('+myIncluder.scal+') '+'translate('+myIncluder.pos_x+','+myIncluder.pos_y+')');
	myDocument.getElementById("points_temporaires").setAttribute("transform", 'scale('+myIncluder.scal+') '+'translate('+myIncluder.pos_x+','+myIncluder.pos_y+')');
	myDocument.getElementById("trace").setAttribute("stroke-width", 3/myIncluder.scal);
	myDocument.getElementById("gcurseur").setAttribute("transform", 'scale('+myIncluder.scal+') '+'translate('+myIncluder.pos_x+','+myIncluder.pos_y+')');
	myDocument.getElementById("lignes").setAttribute("transform", 'scale('+myIncluder.scal+') '+'translate('+myIncluder.pos_x+','+myIncluder.pos_y+')');
	myDocument.getElementById("centre").setAttribute("transform", 'scale('+myIncluder.scal+') '+'translate('+myIncluder.pos_x+','+myIncluder.pos_y+')');
	myDocument.getElementById("centre1").setAttribute("stroke-width", 3/myIncluder.scal);
	myDocument.getElementById("centre2").setAttribute("stroke-width", 3/myIncluder.scal);
	myDocument.getElementById("sousilots").setAttribute("stroke-width", 3/myIncluder.scal);

	myIncluder.svg_deplacer_textes();

	myIncluder.svg_maj_coord_centre();

	//modifications dépendant du contexte

	if(myIncluder.mode == "modif_bande")
	{
		myDocument.getElementById('ssilottemp').setAttribute("stroke-width", 3/myIncluder.scal);
	}

	if(myDocument.getElementById("ligne1").getAttribute("stroke-width") != 0)
	{
		myDocument.getElementById("ligne1").setAttribute("stroke-width", 3/myIncluder.scal);
		myDocument.getElementById("ligne2").setAttribute("stroke-width", 3/myIncluder.scal);
	}

	if(myDocument.getElementById("curseur1").getAttribute("r") != 0)//tester si le curseur existe
	{
		myDocument.getElementById("curseur1").setAttribute("r", myIncluder.TAILLE_SELECT*myIncluder.RAYON_POINT/myIncluder.scal);//si r != 0
	}

	if(myDocument.getElementById("curseur2").getAttribute("r") != 0)
	{
		myDocument.getElementById("curseur2").setAttribute("r", myIncluder.TAILLE_SELECT*myIncluder.RAYON_POINT/myIncluder.scal);//si r != 0
	}

	if(myDocument.getElementById("curseur3").getAttribute("r") != 0)
	{
		myDocument.getElementById("curseur3").setAttribute("r", myIncluder.TAILLE_SELECT*myIncluder.RAYON_POINT/myIncluder.scal);//si r != 0
	}

	if(myDocument.getElementById("curseur4").getAttribute("r") != 0)
	{
		myDocument.getElementById("curseur4").setAttribute("r", myIncluder.TAILLE_SELECT*myIncluder.RAYON_POINT/myIncluder.scal);//si r != 0
	}

	myDocument.getElementById("canvas").unsuspendRedraw(handle);//réactive le calcul du rendu
}



/*
 * met à jour le rayon des points (pour qu'il reste constant à l'affichage quelle que soit l'échelle)
 *
 * @modifs	l'attribut 'r' des points du SVG est mis à jour
 */

function svg_maj_points()
{
	var pt;

	for(i = 1; i <= myIncluder.NB_POINTS; i++)
	{
		myDocument.getElementById("point"+i).setAttribute("r", myIncluder.RAYON_POINT/myIncluder.scal);
	}

	for(i = 0; i < myIncluder.POS_LISTE_POINTS_TEMPORAIRES; i++)
	{
		myDocument.getElementById("point_temporaire"+i).setAttribute("r", myIncluder.RAYON_POINT/myIncluder.scal);
	}
}



/*
 * déplace la position de la fenêtre d'affichage
 *
 * @args	x : déplacement en abscisses
 *		y : déplacement en ordonnées
 * @modifs	pos_x contient la nouvelle valeur de la position en X de la fenêtre d'affichage
 *		pos_y contient la nouvelle valeur de la position en Y de la fenêtre d'affichage
 */

function svg_deplacement(x, y)
{
	myIncluder.pos_x = myIncluder.pos_x + x;
	myIncluder.pos_y = myIncluder.pos_y + y;
	myIncluder.svg_changer_pt_vue(myIncluder.pos_x, myIncluder.pos_y);
}



/*
 * modifie le zoom de la fenêtre d'affichage
 *
 * @args	x : facteur de zoom
 * @modifs	scal contient la nouvelle valeur du facteur de zoom
 */

function svg_zoom(x)
{
	if((myIncluder.scal < myIncluder.SCAL_MIN && x < 1) || (myIncluder.scal > SCAL_MAX && x > 1)) return;

	myIncluder.scal = myIncluder.scal * x;
	myIncluder.pos_x = myIncluder.pos_x + myIncluder.LONG_CADRE/myIncluder.scal * (1-x)/2;
	myIncluder.pos_y = myIncluder.pos_y - myIncluder.LARG_CADRE/myIncluder.scal * (1-x)/2;//myIncluder.pos_y + myIncluder.LARG_CADRE/myIncluder.scal * (1-x)/2 si on n'inverse pas les coordonnées en Y

	top.document.getElementById("tab_info_zoom").value = "1:"+myIncluder.svg_arr100(1/myIncluder.scal);

	myIncluder.svg_maj_points();
	myIncluder.svg_changer_pt_vue();
}



/*
 * initialise le zoom avec centrage
 *
 * @args	z : facteur de zoom
 * @modifs	évènement appelant la fonction svg_super_zoom2 lors du clic suivant activé
 */

function svg_super_zoom(z)
{
	if(myIncluder.mode != "select_ssilot")
	{
		alert("erreur : vous devez etre en mode\n selection pour effectuer cette operation");
		return;
	}

	myIncluder.zoom_fact = z;
	myDocument.addEventListener("click", myIncluder.svg_super_zoom2, true);
	myIncluder.ancien_mode = myIncluder.mode;
	myIncluder.mode = "super_zoom";
}



/*
 * modifie le zoom de la fenêtre d'affichage
 *
 * @args	evt : évènement correspondant au clic
 * @modifs	évènement appelant la fonction svg_super_zoom2 lors du clic désactivé
 *		scal, pos_x et pos_y sont modifiés pour que la fenêtre d'affichage corresponde au zoom
 */

function svg_super_zoom2(evt)
{
	if(myIncluder.mode == "super_zoom" && myIncluder.svg_appartient_cadre(evt.clientX, evt.clientY))
	{
		myDocument.removeEventListener("click", myIncluder.svg_super_zoom2, true);
		myIncluder.x_point_courant = myIncluder.svg_conversion_x(evt.clientX);
		myIncluder.y_point_courant = myIncluder.svg_conversion_y(evt.clientY);
		myIncluder.svg_zoom(myIncluder.zoom_fact);
		myIncluder.mode = myIncluder.ancien_mode;
	}
}



/*****************************************************************************/
/********************* DEPLACEMENT PAR GLISSAGE  *****************************/
/*****************************************************************************/



/*
 * entre dans le mode déplacement et le zoom par glissage
 *
 * @modifs	ancien_mode = mode
 *		mode = select_pt_centre
 */

function svg_selection_point_dep_centre()
{
	if(myIncluder.mode != "select_ssilot")
	{
		alert("erreur : vous devez etre en mode\n selection pour effectuer cette operation");
		return;
	}

	myIncluder.ancien_mode = myIncluder.mode;
	myIncluder.mode = "select_pt_centre";
	myIncluder.svg_selection_point_dep_centre1();
}



/*
 * modifie le déplacement et le zoom lors d'un glissage de la souris
 *
 * @args	evt : évènement correspondant au déplacement de la souris
 * @modifs	pos_x et pos_y ou scal sont modifiés
 * 		x_point_courant contient l'abscisse de la position courante de la souris
 *		y_point_courant contient l'ordonnéd de la position courante de la souris
 */

function svg_maj_coord_depl(evt)
{
	if(evt.shiftKey)//si la touche shift est enfoncée on zoome
	{
		var fact = 1 + (myIncluder.svg_conversion_y(evt.clientY) - myIncluder.y_point_courant) * scal / 100;
		if(fact < 0.1) fact = 0.1;//pour ne pas obtenir des valeurs négatives
		myIncluder.svg_zoom(fact);
	}
	else//sinon on déplace le point de vue
	{
		myIncluder.svg_deplacement(myIncluder.svg_conversion_x(evt.clientX) - myIncluder.x_point_courant, myIncluder.svg_conversion_y(evt.clientY) - myIncluder.y_point_courant);
	}

	myIncluder.x_point_courant = myIncluder.svg_conversion_x(evt.clientX);
	myIncluder.y_point_courant = myIncluder.svg_conversion_y(evt.clientY);

	var x = myIncluder.svg_conversion_x(evt.clientX);
	var y = myIncluder.svg_conversion_y(evt.clientY);

	top.document.getElementById("lb_coord_x").setAttribute("value", x);
	top.document.getElementById("lb_coord_y").setAttribute("value", y);
	top.document.getElementById("lb_angle").setAttribute("value", myIncluder.svg_arr100(myIncluder.svg_angle(x, y)));
	top.document.getElementById("lb_distance").setAttribute("value", myIncluder.svg_arr100(myIncluder.svg_norme(x-myIncluder.X_CENTRE, y-myIncluder.Y_CENTRE)));
}



/*
 * active le déplacement et le zoom par glissage
 *
 * @modifs	évènement appelant svg_sélection_point_dep_centre2 lors de l'enfoncement du bouton gauche activé
 */

function svg_selection_point_dep_centre1()
{
	myDocument.addEventListener("mousedown", myIncluder.svg_selection_point_dep_centre2, true);
}



/*
 * déplacement et zoom par glissage
 *
 * @args	evt : évènement correspondant à l'enfoncement du bouton gauche
 * @modifs	active l'évènement appelant svg_selection_point_dep_centre3 lors du relâchement du bouton gauche
 *		active l'évènement appelant svg_maj_coord_depl lors du déplacement de la souris
 *		désactive l'évènement correspondant à l'enfoncement du bouton gauche
 *		x_point_courant contient l'abscisse de la position courante de la souris
 *		y_point_courant contient l'ordonnéd de la position courante de la souris
 */

function svg_selection_point_dep_centre2(evt)
{
	//if(Frame.mode == "select_pt_centre" && svg_appartient_cadre(evt.clientX, evt.clientY))
	//{
		myDocument.removeEventListener("mousedown", myIncluder.svg_selection_point_dep_centre2, true);
		myIncluder.x_point_courant = myIncluder.svg_conversion_x(evt.clientX);
		myIncluder.y_point_courant = myIncluder.svg_conversion_y(evt.clientY);
		myDocument.addEventListener("mouseup", myIncluder.svg_selection_point_dep_centre3, true);

		if(myIncluder.DEPLACEMENT_CONTINU)
		{
			myDocument.onmousemove = myIncluder.svg_maj_coord_depl;
		}
	//}
}



/*
 * termine le déplacement par glissage
 *
 * @args	evt : évènement correspondant au relâchement du bouton gauche
 * @modifs	désactive l'évènement correspondant au relâchement du bouton gauche
 */

function svg_selection_point_dep_centre3(evt)
{
	//if(Frame.mode == "select_pt_centre" && svg_appartient_cadre(evt.clientX, evt.clientY))
	//{
		myDocument.removeEventListener("mouseup", myIncluder.svg_selection_point_dep_centre3, true);
		myIncluder.x_point_courant = myIncluder.svg_conversion_x(evt.clientX) - myIncluder.x_point_courant;
		myIncluder.y_point_courant = myIncluder.svg_conversion_y(evt.clientY) - myIncluder.y_point_courant;
		myDocument.onmousemove = myIncluder.svg_maj_coord_souris;
		myIncluder.svg_selection_point_dep_centre1();

		myIncluder.x_point_courant = myIncluder.svg_conversion_x(evt.clientX) - myIncluder.x_point_courant;
		myIncluder.y_point_courant = myIncluder.svg_conversion_y(evt.clientY) - myIncluder.y_point_courant;

		if(!myIncluder.DEPLACEMENT_CONTINU)
		{
			if(evt.shiftKey)
			{
				var fact = 1 + (myIncluder.svg_conversion_y(evt.clientY) - myIncluder.y_point_courant) * scal / 100;
				if(fact < 0.1) fact = 0.1;//pour ne pas obtenir des valeurs négatives
				myIncluder.svg_zoom(fact);
			}
			else
			{
				myIncluder.svg_deplacement(myIncluder.svg_conversion_x(evt.clientX) - myIncluder.x_point_courant, myIncluder.svg_conversion_y(evt.clientY) - myIncluder.y_point_courant);
			}
		}
		else
		{
			myIncluder.svg_deplacement(myIncluder.svg_conversion_x(evt.clientX) - myIncluder.x_point_courant, myIncluder.svg_conversion_y(evt.clientY) - myIncluder.y_point_courant);
		}
	//}
}



/*
 * sort du mode déplacement et zoom par glissage
 *
 * @modifs	désactive l'évènement correspondant à l'enfoncement du bouton gauche de la souris
 */

function svg_fin_selection_point_dep_centre()
{
	if(myIncluder.mode != "select_pt_centre")
	{
		return;
	}

	myDocument.removeEventListener("mousedown", myIncluder.svg_selection_point_dep_centre2, true);
	myDocument.removeEventListener("mouseup", myIncluder.svg_selection_point_dep_centre3, true);
	myIncluder.mode = "select_ssilot"
	myIncluder.ancien_mode = "select_ssilot";
}



/*****************************************************************************/
/*************** EDITION GRAPHIQUE : OUTILS DE DETOURAGE *********************/
/*****************************************************************************/



/*
 * initialise le positionnement du centre du repère
 *
 * @modifs	mode = select_ssilot
 *			évènement appelant svg_définir_centre2 lors du clic du bouton gauche activé
 */

function svg_definir_centre()
{
	if(myIncluder.mode != "select_ssilot" && myIncluder.mode == "def_centre")
	{
		alert("erreur : vous devez etre en myIncluder.mode\n selection pour effectuer cette operation");
		return;
	}

	myDocument.addEventListener("click", myIncluder.svg_definir_centre2, true);
	myIncluder.ancien_mode = myIncluder.mode;
	myIncluder.mode = "def_centre";

  	top.document.getElementById("btn_repere").setAttribute("label","Choisissez un point");
	top.document.getElementById("btn_repere").setAttribute("disabled","true");
}



/*
 * positionne le centre du repère
 *
 * @args	evt : évènement correspondant au clic du bouton gauche
 * @modifs	X_CENTRE contient l'abscisse du point du clic
 *		Y_CENTRE contient l'ordonnée du point du clic
 */

function svg_definir_centre2(evt)
{
	if(myIncluder.mode == "def_centre" && myIncluder.svg_appartient_cadre(evt.clientX, evt.clientY))
	{
		myDocument.removeEventListener("click", myIncluder.svg_definir_centre2, true);

		if(myIncluder.VER_POINT == 0)
		{
			myIncluder.X_CENTRE = myIncluder.svg_conversion_x(evt.clientX);
			myIncluder.Y_CENTRE = myIncluder.svg_conversion_y(evt.clientY);
		}
		else
		{
			myIncluder.svg_cherche_point_plus_pres(myIncluder.svg_conversion_x(evt.clientX), myIncluder.svg_conversion_y(evt.clientY));//ppc =
			myIncluder.X_CENTRE = myIncluder.LISTE_POINTS_SVG[myIncluder.p1][myIncluder.p2][myIncluder.p3];//myIncluder.LISTE_POINTS[ppc];
			myIncluder.Y_CENTRE = myIncluder.LISTE_POINTS_SVG[myIncluder.p1][myIncluder.p2][myIncluder.p3+1];//myIncluder.LISTE_POINTS[ppc+1];
		}
		myIncluder.svg_maj_coord_centre();
		myIncluder.mode = myIncluder.ancien_mode;
	}
}



/*
 * met à jour les attributs du point de référence pour qu'il apparaisse de la même manière quelque soit le zoom ; cette fonction est appelée lors d'un changement de zoom
 *
 * @modifs	ajuste les attributs des 2 lignes formant la croix
 */

function svg_maj_coord_centre()
{
	myDocument.getElementById("centre1").setAttribute("x1", myIncluder.X_CENTRE-6 / myIncluder.scal);
	myDocument.getElementById("centre1").setAttribute("y1", myIncluder.Y_CENTRE-6 / myIncluder.scal);
	myDocument.getElementById("centre1").setAttribute("x2", myIncluder.X_CENTRE+6 / myIncluder.scal);
	myDocument.getElementById("centre1").setAttribute("y2", myIncluder.Y_CENTRE+6 / myIncluder.scal);
	myDocument.getElementById("centre2").setAttribute("x1", myIncluder.X_CENTRE-6 / myIncluder.scal);
	myDocument.getElementById("centre2").setAttribute("y1", myIncluder.Y_CENTRE+6 / myIncluder.scal);
	myDocument.getElementById("centre2").setAttribute("x2", myIncluder.X_CENTRE+6 / myIncluder.scal);
	myDocument.getElementById("centre2").setAttribute("y2", myIncluder.Y_CENTRE-6 / myIncluder.scal);
	myIncluder.svg_rafraichir_curseurs();
}



/*
 * change le type de verrouillage
 *
 * @args	type : numéro du type de verrouillage
 * @modifs	VER_POINT = type
 * 0 : pas de verrouillage
 * 1 : verrouillage sur le point le plus proche du sous-îlot sélectionné
 * 2 : verrouillage sur le point le plus proche de n'importe quel sous-îlot affiché
 * 3 : verrouillage sur le point le plus proche de la bande temporaire (ce cas ne se produit que lors du tracé d'une bande)
 */

function svg_modifier_verrouillage(type)
{
	myIncluder.svg_supprimer_curseur2();

	switch(type)
	{
		case 0:
			myIncluder.VER_POINT = 0;
		break;

		case 1:
			myIncluder.VER_POINT = 1;
			myIncluder.svg_creer_curseur2();
			myDocument.getElementById("curseur2").setAttribute("r", myIncluder.TAILLE_SELECT*myIncluder.RAYON_POINT/myIncluder.scal);
		break;

		case 2:
			myIncluder.VER_POINT = 2;
			myIncluder.svg_creer_curseur2();
			myDocument.getElementById("curseur2").setAttribute("r", myIncluder.TAILLE_SELECT*myIncluder.RAYON_POINT/myIncluder.scal);
		break;

		case 3:
			myIncluder.VER_POINT = 3;
			myIncluder.svg_creer_curseur2();
			myDocument.getElementById("curseur2").setAttribute("r", myIncluder.TAILLE_SELECT*myIncluder.RAYON_POINT/myIncluder.scal);
		break;
	}
}



/*****************************************************************************/
/*********************** FONCTIONS AUXILIAIRES * *****************************/
/*****************************************************************************/



/*
 * affiche la liste de points du sous-îlot sélectionné (fonction de débug)
 */

function svg_afficher_liste_points()
{
	var l = myIncluder.LISTE_POINTS_SVG[myIncluder.svg_extraire_no()];
	var i = 0;
	var affiche;

	while(l[i] != undefined)
	{
		affiche = "CHEMIN no"+i+"\n";
		j = 0;

		while(l[i][j] != undefined)
		{
			affiche += "POINT no"+j/2+"="+l[i][j]+","+l[i][j+1]+"\n";
			j+=2;
		}
		alert(affiche);
		i++;
	}
}



/*
 * vérifie si un chemin est simple (càd valide pour un détourage, en particulier il ne doit pas comporter de cycle)
 *
 * @retour	true si le chemin correspondant à la liste de points ne comporte pas de cycle, false sinon
 */

function svg_verifie_cycles(liste_points)
{
	var query = "select IsSimple(GeomFromText('"+myIncluder.svg_svg2linestring(liste_points)+"'));";
	var result = pgsql_query(query);
	var enumerator = result.enumerate();

	enumerator.beforeFirst();
	enumerator.next();

	return enumerator.getVariant(0);
}



/*
 * teste si une valeur est nulle à une approximation près
 *
 * @args	x : valeur à tester
 * @retour	true si x est nul, false sinon
 */

function svg_est_nul(x)
{
	return (x <= myIncluder.EPSILON && -x <= myIncluder.EPSILON);
}



/*
 * teste si un point appartient au cadre SVG
 *
 * @args	x : abscisse de la position du point à tester
 *		y : ordonnée de la position du point à tester
 * @retour	true si le point appartient au cadre, false sinon
 */

function svg_appartient_cadre(x, y)
{
	//return (y > myIncluder.Y_DEC);
	return true;
}



/*
 * convertit l'abscisse d'un point dans le référentiel de l'iframe en une abscisse dans le référentiel SVG
 *
 * @args	x : abscisse à convertir
 * @retour	conversion de x dans le référentiel SVG
 */

function svg_conversion_x(x)
{
	return myIncluder.svg_arr100((x-myIncluder.X_DEC)/myIncluder.scal-myIncluder.pos_x);
}



/*
 * convertit l'ordonnée d'un point dans le référentiel de l'iframe en une ordonnée dans le référentiel SVG
 *
 * @args	y : ordonnée à convertir
 * @retour	conversion de y dans le référentiel SVG
 */

function svg_conversion_y(y)
{
	return myIncluder.svg_arr100(-2*myIncluder.pos_y-((y-myIncluder.Y_DEC)/myIncluder.scal-myIncluder.pos_y));
}



/*
 * convertit l'abscisse d'un point dans le référentiel de l'iframe en une abscisse dans le référentiel du point de référence SVG
 *
 * @args	x : abscisse à convertir
 * @retour	conversion de x dans le référentiel du point de référence SVG
 */

function svg_conversion_x_2(x)
{
	return myIncluder.svg_arr100((x-myIncluder.X_DEC)/myIncluder.scal-myIncluder.pos_x-myIncluder.X_CENTRE);
}



/*
 * convertit l'ordonnée d'un point dans le référentiel de l'iframe en une ordonnée dans le référentiel du point de référence SVG
 *
 * @args	y : ordonnée à convertir
 * @retour	conversion de y dans le référentiel du point de référence SVG
 */

function svg_conversion_y_2(y)
{
	return myIncluder.svg_arr100((y-myIncluder.Y_DEC)/myIncluder.scal-myIncluder.pos_y-myIncluder.Y_CENTRE);
}



/*
 * arrondit une valeur au centième
 *
 * @args	x : valeur à arrondir
 * @retour	x arrondi au centième
 */

function svg_arr100(x)
{
	return Math.round(100*x)/100;
}



/*
 * calcule le carré d'une valeur
 *
 * @args	x : valeur à élever au carré
 * @retour	x²
 */

function svg_carre(x)
{
	return x * x;
}



/*
 * calcule la norme d'une valeur
 *
 * @args	x : abscisse du point dont on veut calculer la norme
 *		y : ordonnée du point dont on veut calculer la norme
 * @retour	norme de (x, y)
 */

function svg_norme(x, y)
{
	return Math.sqrt(x*x + y*y);
}



/*
 * transforme une liste de listes de points en path SVG
 *
 * @args	l : liste de listes de points
 * @retour	path SVG correspondant à l
 * l[i] : ième cycle du path
 * l[i][j] : abscisse du j/2 ème point du ième cycle du path dans le SVG si j pair
 *           ordonnée du (j-1)/2 ème point du ième cycle du path dans le SVG si j impair
 */

function svg_list2string(l)
{
	var nouv_coord = '';
	var c = 0;
	var p = 0;

	while(l[p] != undefined)
	{
		c = 0;
		while(l[p][c] != undefined)
		{
			if(c == 0)
			{
				nouv_coord += 'M';
			}
			else
			{
				//nouv_coord += 'L';//facultatif
			}
			nouv_coord += l[p][c]+','+l[p][c+1]+' ';
			c += 2;
		}
		nouv_coord += 'z';
		p++;
	}

	return nouv_coord;
}



/*
 * affiche tous les points contenus dans les polygones du SVG
 *
 * @modifs	les objets point correspondant aux points des polygones du SVG sont créés
 */

function svg_genere_points()//affiche tous les points
{
	myIncluder.svg_supprime_points();//enleve les points existants

	var i, j, k;

	for(i = 1; i <= myIncluder.NB_OBJETS; i++)
	{
		j = 0;

		while(myIncluder.LISTE_POINTS_SVG[i][j] != undefined)
		{
			k = 0;

			while(myIncluder.LISTE_POINTS_SVG[i][j][k] != undefined)
			{
				myIncluder.svg_creer_point(myIncluder.LISTE_POINTS_SVG[i][j][k], myInclude.LISTE_POINTS_SVG[i][j][k+1]);
				k += 2;
			}
			j++;
		}
	}

	j = 0;

	if(myIncluder.LISTE_POINTS_SVG[0] != undefined)
	{
		while(myIncluder.LISTE_POINTS_SVG[0][j] != undefined)
		{
			k = 0;
			while(myIncluder.LISTE_POINTS_SVG[0][j][k] != undefined)
			{
				myIncluder.svg_creer_point(myIncluder.LISTE_POINTS_SVG[0][j][k], myIncluder.LISTE_POINTS_SVG[0][j][k+1]);
				k += 2;
			}
			j++;
		}
	}
}



/*
 * affiche tous les points contenus dans le polygone du SVG sélectionné
 *
 * @modifs	les objets point correspondant aux points des polygones du SVG sont créés
 */

function svg_genere_points_select()
{
	myIncluder.svg_supprime_points();//enleve les points existants

	var i, j, k;
	var l = myIncluder.LISTE_POINTS_SVG[myIncluder.svg_extraire_no()];

	j = 0;

	while(l[j] != undefined)
	{
		k = 0;

		while(l[j][k] != undefined)
		{
			myIncluder.svg_creer_point(l[j][k], l[j][k+1]);
			k += 2;
		}
		j++;
	}

	j = 0;

	if(myIncluder.LISTE_POINTS_SVG[0] != undefined)
	{
		while(myIncluder.LISTE_POINTS_SVG[0][j] != undefined)
		{
			k = 0;

			while(myIncluder.LISTE_POINTS_SVG[0][j][k] != undefined)
			{
				myIncluder.svg_creer_point(myIncluder.LISTE_POINTS_SVG[0][j][k], myIncluder.LISTE_POINTS_SVG[0][j][k+1]);
				k += 2;
			}
			j++;
		}
	}
}



/*
 * supprime tous les points correspondant aux points des polygones SVG existants (tous les points noirs)
 *
 * @modifs	les objets point correspondant à ces points sont supprimés
 */

function svg_supprime_points()
{
	var group = myDocument.getElementById("points");
	var i;

	for(i = 1; i <= myIncluder.NB_POINTS; i++)
	{
		//alert(i);
		group.removeChild(myDocument.getElementById('point'+i));
	}
	myIncluder.NB_POINTS = 0;
}



/*
 * calcule l'intersection entre 2 droites
 *
 * @args	(x1, y1) point et (vx1, vy1) vecteur définissant la droite d1
 *		(x2, y2) point et (vx2, vy2) vecteur définissant la droite d2
 * @modifs	(x_intersection, y_intersection) coordonnées du point d'intersection de d1 et d2
 */

function svg_intersection(x1, vx1, y1, vy1, x2, vx2, y2, vy2)
{
	myIncluder.x_intersection = x1+((vx2*(y1-y2)-vy2*(x1-x2))/(vx1*vy2-vx2*vy1))*vx1;
	myIncluder.y_intersection = y1+((vx2*(y1-y2)-vy2*(x1-x2))/(vx1*vy2-vx2*vy1))*vy1;
}



/*
 * calcule la projection orthogonale d'un point sur une droite
 *
 * @args	(xp, xp) point p à projeter
 *		(xa, ya) et (xb, yb) points définissant la droite d
 * @modifs	(x_projete, y_projete) coordonnées de la projection orthogonale de p sur d
 *		ok : vaut 1 si la projection est à l'intérieur du segment (xa, ya) et (xb, yb), 0 si la projection est à l'extérieur
 */

function svg_projection(xp, yp, xa, ya, xb, yb)
{
	xh = (myIncluder.svg_carre(xa) * xp - xa * (2*xb*xp+(ya-yb)*(yb-yp)) + xb * (xb*xp+(ya-yp) * (ya-yb)))/(svg_carre(xa) -2*xa*xb + svg_carre(xb) + svg_carre(ya) - 2*ya*yb + svg_carre(yb));
	yh = (myIncluder.svg_carre(xa) * yb - xa * (xb*(ya+yb)-xp*(ya-yb))+svg_carre(xb)*ya - xb*xp*(ya - yb)+(svg_carre(ya)-2*ya*yb+svg_carre(yb))*yp)/(svg_carre(xa) - 2*xa*xb + svg_carre(xb) + svg_carre(ya) -2*ya*yb+svg_carre(yb));

	if(myIncluder.svg_est_nul((myIncluder.svg_norme(xh-xa, yh-ya) + svg_norme(xb-xh, yb-yh) - svg_norme(xb-xa, yb-ya))))
	{
		myIncluder.ok = 1;//la projection est a l'interieur du segment
	}
	else
	{
		myIncluder.ok = 0;//la projection est a l'exterieur du segment
	}

	myIncluder.x_projete = xh;
	myIncluder.y_projete = yh;
}



/*
 * sélectionne le segment la plus proche du point courant (x_point_courant, y_point_courant) dans le polygone sélectionné
 *
 * @modifs	(x_extremite1, y_extremite1) et (x_extremite2, y_extremite2) extrémités du segment le plus proche
 */

function svg_select_droite()
{
	var l = svg_extraire_points_polygone();
	var xt = l[0];
	var yt = l[1];
	var poscurr = 0;
	var distcurr = myIncluder.INFINI;
	var dt;
	var boucle = 0;
	var c = 0;

	while(l[c+2] != undefined)
	{
		myIncluder.svg_projection(myIncluder.x_point_courant, myIncluder.y_point_courant, l[c], l[c+1], l[c+2], l[c+3]);
		dt = myIncluder.svg_norme(myIncluder.x_projete-myIncluder.x_point_courant, myIncluder.y_projete-myIncluder.y_point_courant);

		if((dt < distcurr) && (myIncluder.ok == 1))
		{
			distcurr = dt;
			poscurr = c;
			myIncluder.x_projete2 = x_projete;
			myIncluder.y_projete2 = y_projete;
		}
		c += 2;
	}

	myIncluder.svg_projection(myIncluder.x_point_courant, myIncluder.y_point_courant, l[c], l[c+1], l[0], l[1]);//projection sur le côté formé par le dernier point de la liste et le premier
	dt = myIncluder.svg_norme(myIncluder.x_projete-myIncluder.x_point_courant, myIncluder.y_projete-myIncluder.y_point_courant);

	if((dt < distcurr) && (myIncluder.ok == 1))
	{
		distcurr = dt;
		poscurr = c;
		boucle = 1;
		myIncluder.x_projete2 = x_projete;
		myIncluder.y_projete2 = y_projete;
	}

	if(boucle == 0)
	{
		alert("droite selectionne:"+l[poscurr]+' '+l[poscurr+1]+' '+l[poscurr+2]+' '+l[poscurr+3]);
		myIncluder.x_extremite1 = l[poscurr+2];
		myIncluder.y_extremite1 = l[poscurr+3];
	}
	else
	{
		alert("droite selectionne:"+l[poscurr]+' '+l[poscurr+1]+' '+l[0]+' '+l[1]);
		myIncluder.x_extremite1 = l[0];
		myIncluder.y_extremite1 = l[1];
	}
}



/*
 * transforme un path SVG en geometry
 *
 * @args	path : liste de listes décrivant un path
 * @retour	geometry (polygon) correspondant au path
 */

function svg_svg2geometry(path)
{
	var i = 0;
	var j = 0;
	var geometry = 'POLYGON((';

	while(path[i] != undefined)
	{
		j = 0;

		while(path[i][j] != undefined)
		{
			geometry += path[i][j]+' '+path[i][j+1]+',';
			j += 2;
		}
		geometry += path[i][0]+' '+path[i][1];
		i++;

		if(path[i] != undefined) geometry += '),(';
	}

	geometry += '))';

	return geometry;
}



/*
 * transforme un path SVG en geometry
 *
 * @args	path : liste de listes décrivant un path
 * @retour	geometry (linestring) correspondant au path
 */

function svg_svg2linestring(path)
{
	var i = 0;
	var geometry = 'LINESTRING(';

	while(path[0][i] != undefined)
	{
		geometry += path[0][i]+' '+path[0][i+1];

		if(path[0][i+2] != undefined) geometry += ',';
		i += 2;
	}

	geometry += ')';

	return geometry;
}



/*
 * extrait le numero dans le SVG du sous-ilot sélectionné
 *
 * @retour	numéro dans le SVG du sous-îlot sélectionné
 */

function svg_extraire_no()
{
	var i = 7;
	var valeur = myIncluder.ssilotselect[6];

	while(myIncluder.ssilotselect[i] != undefined)
	{
		valeur += myIncluder.ssilotselect[i++];
	}

	return parseFloat(valeur);
}



/*****************************************************************************/
/******************** GESTION DES OBJETS POUR L'EDITION **********************/
/*****************************************************************************/



/*
 * efface les lignes rouges
 *
 * @modifs	les objets SVG correspondant aux lignes rouges sont supprimés
 */

function svg_effacer_lignes()
{
	var group = myDocument.getElementById("lignes");

	group.removeChild(myDocument.getElementById("ligne1"));
	group.removeChild(myDocument.getElementById("ligne2"));
}



/*
 * crée les lignes rouges
 *
 * @modifs	les objets SVG correspondant aux lignes rouges sont créés avec des coordonnées nulles
 */

function svg_creer_lignes()
{
	var canvas = myDocument.getElementById("canvas");
	var group = myDocument.getElementById("lignes");
	var l1 = myDocument.createElementNS("http://www.w3.org/2000/svg", "line");

	l1.setAttribute("class", "line");
	l1.setAttribute("id", "ligne1");
	l1.setAttribute("x1", 0);
	l1.setAttribute("x2", 0);
	l1.setAttribute("y1", 0);
	l1.setAttribute("y2", 0);
	l1.setAttribute("stroke-width", 3/myIncluder.scal);
	l1.setAttribute("stroke", "red");

	group.appendChild(l1);

	var l2 = myDocument.createElementNS("http://www.w3.org/2000/svg", "line");

	l2.setAttribute("class", "line");
	l2.setAttribute("id", "ligne2");
	l2.setAttribute("x1", 0);
	l2.setAttribute("x2", 0);
	l2.setAttribute("y1", 0);
	l2.setAttribute("y2", 0);
	l2.setAttribute("stroke-width", 3/myIncluder.scal);
	l2.setAttribute("stroke", "red");

	group.appendChild(l2);

	var group2 = myDocument.getElementById("ensemble");

	group2.appendChild(group);
	myDocument.getElementById("canvas").appendChild(group2);
}



/*
 * supprime de l'affichage le curseur 1
 *
 * @modifs	son rayon est passé à 0
 */

function svg_supprimer_curseur1()
{
	myDocument.getElementById("curseur1").setAttribute("r", 0);
}



/*
 * affiche le curseur 1 (le curseur 1 est en dur dans le .xml donc cette fonction ne fait rien)
 */

function svg_creer_curseur1()
{
	return;

	var canvas = myDocument.getElementById("canvas");
	var group = myDocument.getElementById("gcurseur");
 	//var c1 = myDocument.createElementNS("http://www.w3.org/2000/svg", "circle");

	//c1.setAttribute("class", "circle");
	//c1.setAttribute("id", "curseur");
	//c1.setAttribute("cx", 0);
	//c1.setAttribute("cy", 0);*/

	var c1 = myDocument.getElementById("curseur1");

	c1.setAttribute("r", 0);
	c1.setAttribute("style", "fill:red;");

	group.appendChild(c1);
	canvas.appendChild(group);

	myIncluder.svg_rafraichir_curseurs();
}



/*
 * supprime de l'affichage le curseur 2
 *
 * @modifs	son rayon est passé à 0
 */

function svg_supprimer_curseur2()
{
	myDocument.getElementById("curseur2").setAttribute("r", 0);
}



/*
 * affiche le curseur 2 (le curseur 2 est en dur dans le .xml donc cette fonction ne fait rien)
 */

function svg_creer_curseur2()
{
	return;

	var canvas = myDocument.getElementById("canvas");
	var group = myDocument.getElementById("gcurseur");
 	//var c2 = myDocument.createElementNS("http://www.w3.org/2000/svg", "circle");

	//c2.setAttribute("class", "circle");
	//c2.setAttribute("id", "curseur2");
	//c2.setAttribute("cx", 0);
	//c2.setAttribute("cy", 0);

	var c2 = myDocument.getElementById("curseur2");

	c2.setAttribute("r", 0);
	c2.setAttribute("style", "fill:yellow;");

	group.appendChild(c2);
	canvas.appendChild(group);

	myIncluder.svg_rafraichir_curseurs();
}



/*
 * supprime de l'affichage le curseur 3
 *
 * @modifs	son rayon est passé à 0
 */

function svg_supprimer_curseur3()
{
	myDocument.getElementById("curseur3").setAttribute("r", 0);
}



/*
 * modifie la position du curseur 3
 *
 * @args	x : nouvelle abscisse du curseur 3
 *		y : nouvelle ordonnée du curseur 3
 * @modifs	cx contient la nouvelle abscisse du curseur 3
 * 		cy contient la nouvelle ordonnée du curseur 3
 */

function svg_ajuster_curseur3(x, y)
{
	myDocument.getElementById("curseur3").setAttribute("cx", x);
	myDocument.getElementById("curseur3").setAttribute("cy", y);
}



/*
 * crée le curseur 3 (le curseur 3 est en dur dans le .xml donc cette fonction ne fait rien)
 */

function svg_creer_curseur3()
{
	//return;

	var canvas = myDocument.getElementById("canvas");
	var group = myDocument.getElementById("gcurseur");
	//var c3 = myDocument.createElementNS("http://www.w3.org/2000/svg", "circle");

	//c3.setAttribute("class", "circle");
	//c3.setAttribute("id", "curseur3");
	//c3.setAttribute("cx", 0);
	//c3.setAttribute("cy", 0);

	var c3 = myDocument.getElementById("curseur3");

	c3.setAttribute("r", myIncluder.TAILLE_SELECT*myIncluder.RAYON_POINT/myIncluder.scal);
	c3.setAttribute("style", "fill:#00FF00;");

	group.appendChild(c3);
	canvas.appendChild(group);
	myIncluder.svg_rafraichir_curseurs();
}



/*
 * supprime de l'affichage le curseur 4
 *
 * @modifs	son rayon est passé à 0
 */

function svg_supprimer_curseur4()
{
	myDocument.getElementById("curseur4").setAttribute("r", 0);
}



/*
 * modifie la position du curseur 4
 *
 * @args	x : nouvelle abscisse du curseur 3
 *		y : nouvelle ordonnée du curseur 3
 * @modifs	cx contient la nouvelle abscisse du curseur 3
 * 		cy contient la nouvelle ordonnée du curseur 3
 */

function svg_ajuster_curseur4(x, y)
{
	myDocument.getElementById("curseur4").setAttribute("cx", x);
	myDocument.getElementById("curseur4").setAttribute("cy", y);
}



/*
 * affiche le curseur 4 (le curseur 4 est en dur dans le .xml donc cette fonction ne fait rien)
 */

function svg_creer_curseur4()
{
	//return;

	var canvas = myDocument.getElementById("canvas");
	var group = myDocument.getElementById("gcurseur");
	//var c4 = myDocument.createElementNS("http://www.w3.org/2000/svg", "circle");

	//c4.setAttribute("class", "circle");
	//c4.setAttribute("id", "curseur4");
	//c4.setAttribute("cx", 0);
	//c4.setAttribute("cy", 0);

	var c4 = myDocument.getElementById("curseur4");

	c4.setAttribute("r", myIncluder.TAILLE_SELECT*myIncluder.RAYON_POINT/myIncluder.scal);//myIncluder.TAILLE_SELECT*myIncluder.RAYON_POINT/myIncluder.scal
	c4.setAttribute("style", "fill:cyan;");

	group.appendChild(c4);
	canvas.appendChild(group);
	myIncluder.svg_rafraichir_curseurs();
}



/*
 * maximise la priorité des groupes prioritaires (curseurs et textes) pour qu'ils s'affichent au-dessus des autre objets
 *
 * @modifs	les groupes prioritaires sont ré-appliqués sur le canvas (les objets sont affichés dans l'ordre dans lequel ils sont ajoutés au canvas)
 */

function svg_rafraichir_curseurs()
{
	myDocument.getElementById("ensemble").appendChild(myDocument.getElementById("gcurseur"));
	myDocument.getElementById("ensemble").appendChild(myDocument.getElementById("centre"));
	myDocument.getElementById("canvas").appendChild(myDocument.getElementById("texte"));
}



/*
 * supprime de l'affichage le curseur de détourage
 *
 * @modifs	le curseur de détourage est supprimé du canvas
 */

function svg_supprimer_point_detourage()
{
	try
	{
		myDocument.getElementById("points_temporaires").removeChild(myDocument.getElementById("point_detourage"));
	}
	catch(e)
	{
	}
}



/*
 * crée et affiche le curseur de détourage
 *
 * @modifs	le curseur de détourage est créé
 */

function svg_creer_point_detourage(x, y)
{
	var point = myDocument.createElementNS("http://www.w3.org/2000/svg", "circle");

	point.setAttribute("class", "circle");
	point.setAttribute("cx", x);
	point.setAttribute("cy", y);
	point.setAttribute("r", myIncluder.RAYON_POINT/myIncluder.scal);
	point.setAttribute("fill", "red");
	point.setAttribute("fill-opacity", 1);
	point.setAttribute("id", 'point_detourage');

	var group = myDocument.getElementById("points_temporaires");

	group.appendChild(point);

	var group2 = myDocument.getElementById("ensemble");

	group2.appendChild(group);
	myDocument.getElementById("canvas").appendChild(group2);
}



/*
 * crée un nouveau point appartenant à un sous-îlot
 *
 * @args	x : abscisse du nouveau point
 *		y : ordonnée du nouveau point
 * @modifs	le nouveau point est créé avec pointx comme id (x = NB_POINTS + 1)
 *		NB_POINTS est incrémenté de 1
 */

function svg_creer_point(x, y)
{
	var point = myDocument.createElementNS("http://www.w3.org/2000/svg", "circle");

	point.setAttribute("class", "circle");
	point.setAttribute("cx", x);
	point.setAttribute("cy", y);
	point.setAttribute("r", myIncluder.RAYON_POINT/myIncluder.scal);
	point.setAttribute("fill", "black");
	point.setAttribute("fill-opacity", 1);
	point.setAttribute("id", 'point'+ ++myIncluder.NB_POINTS);

	var group = myDocument.getElementById("points");

	group.appendChild(point);

	var group2 = myDocument.getElementById("ensemble");

	group2.appendChild(group);
	myIncluder.svg_rafraichir_curseurs();//pour que les points soient affichés au-dessus des autres objets SVG
}



/*
 * crée et initialise la liste des points temporaires (liste des points oranges affichés pendant un détourage) et le tracé correspondant (la ligne orange qui les relie)
 *
 * @modifs	LISTE_POINTS_TEMPORAIRES créée et initialisée à la liste vide
 *		POS_LISTE_POINTS_TEMPORAIRES initialisée à 0
 *		trace initialisé au path vide
 */

function svg_creer_liste_points_temporaires()
{
	myIncluder.LISTE_POINTS_TEMPORAIRES = new Array(myIncluder.TAILLE_LISTES);
	myIncluder.POS_LISTE_POINTS_TEMPORAIRES = 0;
	myDocument.getElementById("trace").setAttribute("points", "");
	myDocument.getElementById("trace").setAttribute("tagName", "");
}



/*
 * supprime de l'affichage les points temporaires et le tracé correspondant
 *
 * @modifs	LISTE_POINTS_TEMPORAIRES supprimée
 *		POS_LISTE_POINTS_TEMPORAIRES initialisée à 0
 *		trace initialisé au path vide
 *		tous les points temporaires sont supprimés
 */

function svg_supprimer_liste_points_temporaires()
{
	var group = myDocument.getElementById("points_temporaires");
	var i;

	for(i = 0; i <= myIncluder.POS_LISTE_POINTS_TEMPORAIRES - 1; i++)
	{
		group.removeChild(myDocument.getElementById('point_temporaire'+i));
	}

	myIncluder.POS_LISTE_POINTS_TEMPORAIRES = 0;
	myIncluder.LISTE_POINTS_TEMPORAIRES = null;
	myDocument.getElementById("trace").setAttribute("points", "");
	myDocument.getElementById("trace").setAttribute("tagName", "");
}



/*
 * crée un point temporaire (orange)
 *
 * @args	x : abscisse du nouveau point
 *		y : ordonnée du nouveau point
 * @modifs	le nouveau point est créé avec comme id point_temporairex (x = POS_LISTE_POINTS_TEMPORAIRES)
 *		x et y sont ajoutés à LISTE_POINTS_TEMPORAIRES
 *		POS_LISTE_POINTS_TEMPORAIRES est incrémentée de 2
 */

function svg_creer_point_temporaire(x, y)
{
	var point = myDocument.createElementNS("http://www.w3.org/2000/svg", "circle");

	point.setAttribute("class", "circle");
	point.setAttribute("cx", x);
	point.setAttribute("cy", y);
	point.setAttribute("r", myIncluder.RAYON_POINT/myIncluder.scal);
	point.setAttribute("fill", "orange");
	point.setAttribute("fill-opacity", 1);
	myIncluder.LISTE_POINTS_TEMPORAIRES[2*myIncluder.POS_LISTE_POINTS_TEMPORAIRES] = x;
	myIncluder.LISTE_POINTS_TEMPORAIRES[2*myIncluder.POS_LISTE_POINTS_TEMPORAIRES+1] = y;
	point.setAttribute("id", "point_temporaire"+ myIncluder.POS_LISTE_POINTS_TEMPORAIRES++);

	var group = myDocument.getElementById("points_temporaires");

	group.appendChild(point);

	var group2 = myDocument.getElementById("ensemble");

	group2.appendChild(group);

	myDocument.getElementById("canvas").appendChild(group2);
	myDocument.getElementById("trace").setAttribute("tagName", myDocument.getElementById("trace").getAttribute("tagName")+" "+x+","+y)
	myDocument.getElementById("trace").setAttribute("points", myDocument.getElementById("trace").getAttribute("tagName")+" "+x+","+y);
	myIncluder.svg_rafraichir_curseurs();//pour que les points soient affichés au-dessus des autres objets SVG
}



/*
 * supprime le dernier point temporaire de la liste
 *
 * @modifs	le dernier point temporaire de la liste est supprimé de la liste des points temporaires LISTE_POINTS_TEMPORAIRES, du trace temporaire et de la liste des points du SVG LISTE_POINTS_SVG
 */

function svg_detoure_supprimer_dernier_point_temporaire()
{
	if(myIncluder.POS_LISTE_POINTS_TEMPORAIRES >= 0)
	{
		myIncluder.POS_LISTE_POINTS_TEMPORAIRES--;
		myDocument.getElementById("points_temporaires").removeChild(myDocument.getElementById("point_temporaire"+myIncluder.POS_LISTE_POINTS_TEMPORAIRES));

		var anc_trace = myDocument.getElementById("trace").getAttribute("tagName");
		var i = 0;

		while(anc_trace[i] != undefined) i++;
		i -= 2;
		while(anc_trace[i] != ' ') i--;

		var j = 0;
		var nouv_trace = "";

		while(j != i)
		{
			nouv_trace += anc_trace[j];
			j++;
		}

		myDocument.getElementById("trace").setAttribute("points", nouv_trace);
		myDocument.getElementById("trace").setAttribute("tagName", nouv_trace);

		myIncluder.pos0--;
		myIncluder.LISTE_POINTS_SVG[0][0][myIncluder.pos0--] = undefined;
		myIncluder.LISTE_POINTS_SVG[0][0][myIncluder.pos0] = undefined;

		var point = myDocument.getElementById('point'+ myIncluder.NB_POINTS--);
		var group = myDocument.getElementById("points");

		group.removeChild(point);
	}
}



/*****************************************************************************/
/***************** FONCTION DE DETOURAGE NON UTILISEES ***********************/
/*****************************************************************************/
/*
 * ces fonctions permettent de faire un détourage basique (point par point) et sans passer par la base pour la mise à jour de l'affichage ; elles ne sont pas utilisées dans la dernière version du logiciel
 * elles sont conservées pour pouvoir être utilisées pour le débuggage ou dans une extension éventuelle du logiciel
 */



function svg_selectionPointExistant()
{
	myDocument.addEventListener("click", myIncluder.svg_selectionPointExistant2, true);
	myIncluder.mode = "select_existant";
}



function svg_selectionPointExistant2(evt)
{
	if(myIncluder.mode == "select_existant" && myIncluder.svg_appartient_cadre(evt.clientX, evt.clientY))
	{
		var l = svg_extraire_points_polygone();
		var xclic = myIncluder.svg_conversion_x(evt.clientX);
		var yclic = myIncluder.svg_conversion_y(evt.clientY);
		var xt = l[0];
		var yt = l[1];
		var poscurr = 0;
		var distcurr = myIncluder.svg_norme(xt-xclic, yt-yclic);
		var dt;
		var c = 2;

		while(l[c] != undefined)
		{
			xt = l[c++];
			yt = l[c++];
			dt = myIncluder.svg_norme(xt-xclic, yt-yclic)
			if(dt < distcurr)
			{
				distcurr = dt;
				poscurr = c-2;
			}
		}

		alert("point selectionne:"+l[poscurr]+' '+l[poscurr+1]);
		myDocument.removeEventListener("click", myIncluder.svg_selectionPointExistant2, true);
	}
	myIncluder.XG = l[poscurr];
	myIncluder.YG = l[poscurr+1];
}



function svg_diviser_ssilot_path()
{
	if(myIncluder.mode != "select_ssilot")
	{
		alert("erreur : vous devez etre en mode\n selection pour effectuer cette operation");
		return;
	}

	myIncluder.tab_coord1 = new Array(myIncluder.TAILLE_LISTES);
	myIncluder.tab_coord2 = new Array(myIncluder.TAILLE_LISTES);
	myIncluder.pos1 = 0;
	myIncluder.pos2 = 0;
	myIncluder.etat = 0;
	myIncluder.mode = "select_existant_path";
	myIncluder.svg_selectionPointExistantX();
}



function svg_diviser_ssilot()
{
	if(myIncluder.mode != "select_ssilot")
	{
		alert("erreur : vous devez etre en mode\n selection pour effectuer cette operation");
		return;
	}

	myIncluder.tab_coord1 = new Array(myIncluder.TAILLE_LISTES);
	myIncluder.tab_coord2 = new Array(myIncluder.TAILLE_LISTES);
	myIncluder.pos1 = 0;
	myIncluder.pos2 = 0;
	myIncluder.etat = 0;

	myIncluder.mode = "select_existantX";
	myIncluder.svg_selectionPointExistantX();
}



function svg_selectionPointExistantX()
{
	myDocument.addEventListener("click", myIncluder.svg_selectionPointExistant2X, true);
	myIncluder.svg_toolbar_division();
	myIncluder.cycle = 0;
	myIncluder.tab_coord1[myIncluder.cycle] = new Array(myIncluder.TAILLE_LISTES);//faire la même chose après le changement d'état
	myIncluder.mode = "select_existantX";
}



function svg_changer_cycle()
{
	myIncluder.cycle++;
	/*if(myIncluder.mode == nouveau_ptXX)
	{
		myIncluder.LISTE_POINTS_SVG[0][myIncluder.cycle] = new Array[myIncluder.TAILLE_LISTES];
		myIncluder.pos0 = 0;
	}
	else
	{*/
		if(myIncluder.etat == 0)
		{
			myIncluder.tab_coord1[myIncluder.cycle] = new Array(myIncluder.TAILLE_LISTES);
			myIncluder.pos1 = 0;
		}
		else
		{
			myIncluder.tab_coord2[myIncluder.cycle] = new Array(myIncluder.TAILLE_LISTES);
			myIncluder.pos2 = 0;
		}
	//}
}



function svg_selectionPointExistant2X(evt)
{
	if(myIncluder.mode == "select_existantX" && myIncluder.svg_appartient_cadre(evt.clientX, evt.clientY))
	{
		var no_ssilot = myIncluder.svg_extraire_no();
		var l = myIncluder.LISTE_POINTS_SVG[no_ssilot];
		var xclic = myIncluder.svg_conversion_x(evt.clientX);
		var yclic = myIncluder.svg_conversion_y(evt.clientY);
		var xt = l[0][0];
		var yt = l[0][1];
		var poscurr = 0;
		var local_cyclecurr = 0;
		var distcurr = myIncluder.svg_norme(xt-xclic, yt-yclic);
		var dt;
		var c;
		var p;

		p = 0;

		while(l[p] != undefined)
		{
			c = 0;

			while(l[p][c] != undefined)
			{
				xt = l[p][c++];
				yt = l[p][c++];
				dt = myIncluder.svg_norme(xt-xclic, yt-yclic);

				if(dt < distcurr)
				{
					distcurr = dt;
					poscurr = c-2;
					local_cyclecurr = p;
				}
			}
			p++;
		}

		if(myIncluder.etat == 2)
		{
			myDocument.removeEventListener("click", myIncluder.svg_selectionPointExistant2X, true);
		}
		else
		{
			myIncluder.svg_creer_curseur1();
			myDocument.getElementById("curseur1").setAttribute("r", myIncluder.TAILLE_SELECT*myIncluder.RAYON_POINT/myIncluder.scal);
			myDocument.getElementById("curseur1").setAttribute("cx", l[local_cyclecurr][poscurr]);
			myDocument.getElementById("curseur1").setAttribute("cy", l[local_cyclecurr][poscurr+1]);
			setTimeout("svg_supprimer_curseur1();",250);

			if(myIncluder.etat == 0)
			{
				myIncluder.tab_coord1[myIncluder.cycle][myIncluder.pos1++] = l[local_cyclecurr][poscurr];
				myIncluder.tab_coord1[myIncluder.cycle][myIncluder.pos1++] = l[local_cyclecurr][poscurr+1];

				if(myIncluder.mode_selection == 0)
				{
					myIncluder.svg_fin_division1();
				}
			}
			else
			{
				myIncluder.tab_coord2[myIncluder.cycle][myIncluder.pos2++] = l[local_cyclecurr][poscurr];
				myIncluder.tab_coord2[myIncluder.cycle][myIncluder.pos2++] = l[local_cyclecurr][poscurr+1];

				if(myIncluder.mode_selection == 0)
				{
					myIncluder.svg_creer_liste_points();
					myIncluder.svg_fin_division2();
				}
			}
		}
	}
}



function svg_fin_division1()
{
	myIncluder.etat = 1;
	myIncluder.cycle = 0;
	myIncluder.tab_coord2[myIncluder.cycle] = new Array(myIncluder.TAILLE_LISTES);
}



function svg_fin_division2()
{
	var poly1;
	var poly2;
	var index1;
	var index2;

	myIncluder.etat = 2;

	query = "select agriassvg(si_trace), si_numero from AgriDecoupe("+myIncluder.svg_no_ssilot_base()+", GeomFromText('"+myIncluder.svg_svg2geometry(myIncluder.LISTE_POINTS_SVG[myIncluder.svg_extraire_no()])+"'), GeomFromText('"+svg_svg2geometry(myIncluder.tab_coord1)+"'), '"+current_date()+"');";

	result = pgsql_query(query);

	enumerator = result.enumerate();
	enumerator.beforeFirst();

	enumerator.next();
	poly1 = myIncluder.svg_extrait_points_path_chaine(enumerator.getString(0));
	index1 = enumerator.getInt(1);

	enumerator.next();
	poly2 = myIncluder.svg_extrait_points_path_chaine(enumerator.getString(0));
	index2 = enumerator.getInt(1);

	myIncluder.svg_toolbar_defaut();
	myIncluder.carte_rafraichir_polygones();
}



function svg_modifier_points_ajoutes()
{
	myIncluder.mode = "modifier_points_inseres";
	myDocument.addEventListener("click", myIncluder.svg_ajuster, true);
}



function svg_fin_modifier_points_ajoutes()
{
	myDocument.removeEventListener("click", myIncluder.svg_ajuster, true);
	myIncluder.svg_selectionPointExistantXX();
}



function svg_ajuster(evt)
{
	if(myIncluder.mode == "modifier_points_inseres" && myIncluder.svg_appartient_cadre(evt.clientX, evt.clientY))
	{
		var l = myIncluder.LISTE_POINTS_SVG[0];
		var xclic = myIncluder.svg_conversion_x(evt.clientX);
		var yclic = myIncluder.svg_conversion_y(evt.clientY);
		var xt = l[0][0];
		var yt = l[0][1];
		var poscurr = 0;
		var distcurr = myIncluder.svg_norme(xt-xclic, yt-yclic);
		var dt;
		var c = 0;

		while(l[0][c] != undefined)
		{
			xt = l[0][c++];
			yt = l[0][c++];
			dt = myIncluder.svg_norme(xt-xclic, yt-yclic);

			if(dt < distcurr)
			{
				distcurr = dt;
				poscurr = c-2;
			}
		}
		myIncluder.pos0 = poscurr;
		myIncluder.svg_creer_curseur1();
		myDocument.getElementById("curseur1").setAttribute("r", myIncluder.TAILLE_SELECT*myIncluder.RAYON_POINT/myIncluder.scal);
		myDocument.getElementById("curseur1").setAttribute("cx", l[0][poscurr]);
		myDocument.getElementById("curseur1").setAttribute("cy", l[0][poscurr+1]);
		setTimeout("svg_supprimer_curseur1();", 250);
		DialogueFlottants("Coordonnées du point", myIncluder.svg_supprimer_point_supp, myIncluder.svg_ajuster_coordonnees, 0, 0, new stChampFlottant("X", l[0][poscurr]), new stChampFlottant("Y", l[0][poscurr+1]), new stChampFlottant("distance", myIncluder.distance1), new stChampFlottant("angle", myIncluder.angle0));
	}
}



function svg_supprimer_point_supp(x, y, d, a)
{
	var lt = new Array(1);
	lt[0] = new Array(myIncluder.TAILLE_LISTES);
	var it = 0;
	var l = myIncluder.LISTE_POINTS_SVG[0];
	var i = 0;

	while(l[0][i] != undefined)
	{
		if((l[0][i] != x) || (l[0][i+1] != y))
		{
			lt[0][it++] = l[0][i];
			lt[0][it++] = l[0][i+1];
		}
		i += 2;
	}
	myIncluder.LISTE_POINTS_SVG[0] = lt;
}



function svg_changer_affichage_points(p)
{
	if(p != myIncluder.AFFICHE_POINTS)
	{
		if(myIncluder.AFFICHE_POINTS)
		{
			myIncluder.AFFICHE_POINTS = false;
			myIncluder.svg_supprime_points();
		}
		else
		{
			myIncluder.AFFICHE_POINTS = true;
			myIncluder.svg_genere_points_select();
		}
	}
}



function svg_ajuster_coordonnees(x, y, d, a)
{
	var l = myIncluder.LISTE_POINTS_SVG[0];

	if((myIncluder.angle0 != a) || (myIncluder.distance1 != d))//si l'angle ou la distance sont differents alors on insere a partir de l'angle et de la distance
	{
		x_ins = myIncluder.X_CENTRE + d * Math.cos(a * myIncluder.PI/180);
		y_ins = myIncluder.Y_CENTRE + d * Math.sin(a * myIncluder.PI/180);
	}
	else//sinon insertion à partir des coordonnees absolues
	{
		x_ins = x;
		y_ins = y;
	}

	myIncluder.LISTE_POINTS_SVG[0][0][myIncluder.pos0] = x_ins;
	myIncluder.LISTE_POINTS_SVG[0][0][myIncluder.pos0+1] = y_ins;
	myIncluder.svg_genere_points_select();
}



function svg_creer_liste_points()
{
	var l = myIncluder.LISTE_POINTS_SVG[myIncluder.svg_extraire_no()][0];

	myIncluder.pos1 = 0;
	myIncluder.pos2 = 0;

	var i = 0;
	var j;
	var k = 0;

	while((l[i] != myIncluder.tab_coord1[0][0]) || (l[i+1] != tab_coord1[0][1]))
	{
		i += 2;
	}

	while((l[i] != myIncluder.tab_coord2[0][0]) || (l[i+1] != tab_coord2[0][1]))
	{
		myIncluder.tab_coord1[0][myIncluder.pos1++] = l[i];
		myIncluder.tab_coord1[0][myIncluder.pos1++] = l[i+1];
		i += 2;

		if(l[i] == undefined)
		{
			i = 0;
		}
	}

	myIncluder.tab_coord1[0][myIncluder.pos1++] = l[i];
	myIncluder.tab_coord1[0][myIncluder.pos1++] = l[i+1];

	if(myIncluder.LISTE_POINTS_SVG[0] != undefined)
	{
		while(myIncluder.LISTE_POINTS_SVG[0][0][k] != undefined)
		{
			k += 2;
		}

		for(j = k; j > 0; j -= 2)
		{
			myIncluder.tab_coord1[0][myIncluder.pos1++] = myIncluder.LISTE_POINTS_SVG[0][0][j-2];
			myIncluder.tab_coord1[0][myIncluder.pos1++] = myIncluder.LISTE_POINTS_SVG[0][0][j-1];
		}
	}

	while((l[i] != myIncluder.tab_coord1[0][0]) || (l[i+1] != tab_coord1[0][1]))
	{
		myIncluder.tab_coord2[0][myIncluder.pos2++] = l[i];
		myIncluder.tab_coord2[0][myIncluder.pos2++] = l[i+1];
		i += 2;

		if(l[i] == undefined)
		{
			i = 0;
		}
	}

	myIncluder.tab_coord2[0][myIncluder.pos2++] = l[i];
	myIncluder.tab_coord2[0][myIncluder.pos2++] = l[i+1];

	if(myIncluder.LISTE_POINTS_SVG[0] != undefined)
	{
		j = 0;

		while(myIncluder.LISTE_POINTS_SVG[0][0][j] != undefined)
		{
			myIncluder.tab_coord2[0][myIncluder.pos2++] = myIncluder.LISTE_POINTS_SVG[0][0][j];
			myIncluder.tab_coord2[0][myIncluder.pos2++] = myIncluder.LISTE_POINTS_SVG[0][0][j+1];
			j += 2;
		}
	}
}



function svg_creer_polygones_path(path1, path2)
{
	var canvas = myDocument.getElementById("canvas");
	var group = myDocument.getElementById("sousilots");
	var id_current = myDocument.getElementById(myIncluder.ssilotselect).getAttribute("id");
	var query;
	var result;
	var enumerator;

	/*vérification qu'il n'y a pas de cycle dans le chemin
	if(myIncluder.LISTE_POINTS_SVG[0] != undefined)
	{
		query = "select IsSimple(GeomFromText('"+myIncluder.svg_svg2linestring(myIncluder.LISTE_POINTS_SVG[0])+"'));";
		result = pgsql_query(query);

		enumerator = result.enumerate();
		enumerator.beforeFirst();
		enumerator.next();

		if(enumerator.getVariant(0) == false)
		{
			alert("erreur : decoupage incorrect (ligne de decoupage avec des cycles), operation annulee");
			myIncluder.etat = 0;
			myIncluder.mode = "select_ssilot";
			myIncluder.LISTE_POINTS_SVG[0] = null;
			return;
		}
	}*/

	/*//verification que la somme des 2 sous-îlots créés est bien égale au sous-îlot de départ
	query = "select Equals(GeomFromText('"+myIncluder.svg_svg2geometry(myIncluder.LISTE_POINTS_SVG[myIncluder.svg_extraire_no()])+"'),GeomUnion(GeomFromText('"+svg_svg2geometry(liste_pts1)+"'), GeomFromText('"+svg_svg2geometry(liste_pts2)+"')));";
	result = pgsql_query(query);

	enumerator = result.enumerate();
	enumerator.beforeFirst();
	enumerator.next();

	if(enumerator.getVariant(0) != true)
	{
		alert("erreur : decoupage incorrect (sous-ilots ne correspondant pas a l'ilot de depart), operation annulee");
		myIncluder.etat = 0;
		myIncluder.mode = "select_ssilot";
		myIncluder.LISTE_POINTS_SVG[0] = null;
		return;
	}*/

	group.removeChild(myDocument.getElementById(myIncluder.ssilotselect));


	var poly = myDocument.createElementNS("http://www.w3.org/2000/svg", "path");

	poly.setAttribute("class", "path");
	poly.setAttribute("d", myIncluder.carte_textgeom_to_svgpoly(path1));
	poly.setAttribute("tagName", myIncluder.carte_textgeom_to_svgpoly(path1));
	poly.setAttribute("fill", myIncluder.carte_randomcolor());
	poly.setAttribute("fill-rule", "evenodd");
	poly.setAttribute("id", id_current);

	group.appendChild(poly);

	var poly2 = myDocument.createElementNS("http://www.w3.org/2000/svg", "path");

	poly2.setAttribute("class", "path");
	poly2.setAttribute("d", myIncluder.carte_textgeom_to_svgpoly(path2));
	poly2.setAttribute("tagName", myIncluder.carte_textgeom_to_svgpoly(path2));
	poly2.setAttribute("fill", myIncluder.carte_randomcolor());
	poly2.setAttribute("fill-rule", "evenodd");
	myIncluder.NB_OBJETS++;
	poly2.setAttribute("id", 'ssilot'+myIncluder.NB_OBJETS);

	group.appendChild(poly2);

	canvas.appendChild(group);

	myIncluder.svg_active();
	myIncluder.svg_cree_liste_points();
	myIncluder.svg_genere_points_select();

	myIncluder.etat = 0;
	myIncluder.mode = "select_ssilot";
	myIncluder.svg_desalloue_points_supplementaires();
}



function svg_creer_polygones2(liste_pts1, liste_pts2, no1, no2)
{
	var canvas = myDocument.getElementById("canvas");
	var group = myDocument.getElementById("sousilots");
	var id_current = myDocument.getElementById(myIncluder.ssilotselect).getAttribute("id");
	var query;
	var result;
	var enumerator;


	/*//vérification qu'il n'y a pas de cycle dans le chemin
	if(myIncluder.LISTE_POINTS_SVG[0] != undefined)
	{
		query = "select IsSimple(GeomFromText('"+myIncluder.svg_svg2linestring(myIncluder.LISTE_POINTS_SVG[0])+"'));";
		result = pgsql_query(query);

		enumerator = result.enumerate();
		enumerator.beforeFirst();
		enumerator.next();

		if(enumerator.getVariant(0) == false)
		{
			alert("erreur : decoupage incorrect (ligne de decoupage avec des myIncluder.cycles), operation annulee");
			myIncluder.etat = 0;
			myIncluder.mode = "select_ssilot";
			myIncluder.svg_desalloue_points_supplementaires();
			return;
		}
	}*/

	/*//verification que la somme des 2 sous-îlots créés est bien égale au sous-îlot de départ à un arrondi près

	query = "select Area(Difference(GeomFromText('"+myIncluder.svg_svg2geometry(myIncluder.LISTE_POINTS_SVG[myIncluder.svg_extraire_no()])+"'),GeomUnion(GeomFromText('"+svg_svg2geometry(liste_pts1)+"'), GeomFromText('"+svg_svg2geometry(liste_pts2)+"'))));";
	result = pgsql_query(query);

	enumerator = result.enumerate();
	enumerator.beforeFirst();
	enumerator.next();

	if(enumerator.getVariant(0) > myIncluder.ERREUR_SURFACE_ACCEPTABLE)
	{
		alert("erreur : decoupage incorrect (sous-ilots ne correspondant pas a l'ilot de depart), operation annulee");
		myIncluder.etat = 0;
		myIncluder.mode = "select_ssilot";
		myIncluder.LISTE_POINTS_SVG[0] = null;
		return;
	}*/
	
	//suppression dans le SVG de l'ancien sous-îlot
	group.removeChild(myDocument.getElementById(myIncluder.ssilotselect));

	var poly = myDocument.createElementNS("http://www.w3.org/2000/svg", "path");

	poly.setAttribute("class", "path");
	poly.setAttribute("d", myIncluder.svg_list2string(liste_pts1));
	poly.setAttribute("tagName", myIncluder.svg_list2string(liste_pts1));
	poly.setAttribute("fill", myIncluder.carte_randomcolor());
	poly.setAttribute("fill-rule", "evenodd");
	poly.setAttribute("id", id_current);

	group.appendChild(poly);

	var poly2 = myDocument.createElementNS("http://www.w3.org/2000/svg", "path");

	poly2.setAttribute("class", "path");
	poly2.setAttribute("d", myIncluder.svg_list2string(liste_pts2));
	poly2.setAttribute("tagName", myIncluder.svg_list2string(liste_pts2));
	poly2.setAttribute("fill", myIncluder.carte_randomcolor());
	poly2.setAttribute("fill-rule", "evenodd");
	myIncluder.NB_OBJETS++;

	poly2.setAttribute("id", 'ssilot'+myIncluder.NB_OBJETS);

	group.appendChild(poly2);

	//mise à jour de la table de conversion entre no dans le SVG et index dans la base
	myIncluder.svg_ecrit_conversion_indexes(myIncluder.svg_extraire_no(), no1);
	myIncluder.svg_ecrit_conversion_indexes(myIncluder.NB_OBJETS, no2);

	//affichage des modifications
	canvas.appendChild(group);
	myIncluder.svg_active();
	myIncluder.svg_cree_liste_points();
	myIncluder.svg_supprime_points();
	//myIncluder.svg_genere_points_select();
	myIncluder.etat = 0;
	myIncluder.mode = "select_ssilot";
	myIncluder.svg_desalloue_points_supplementaires();
}



function svg_insertion_point_ssilot(x_prev, y_prev, x, y)//dans ssilotselect
{
	var no_ssilot = myIncluder.svg_extraire_no();
	var nouv_coord = '';
	var nouv_point_trouve = 0;
	var c = 0;
	var p = 0;

	while(myIncluder.LISTE_POINTS_SVG[no_ssilot][p] != undefined)
	{
		c = 0;

		while(myIncluder.LISTE_POINTS_SVG[no_ssilot][p][c] != undefined)
		{
			if(c == 0)
			{
				nouv_coord += 'M';
			}
			else
			{
				//nouv_coord += 'L';//facultatif
			}

			if((myIncluder.LISTE_POINTS_SVG[no_ssilot][p][c] == x_prev) && (myIncluder.LISTE_POINTS_SVG[no_ssilot][p][c+1] == y_prev))
			{
				nouv_coord += +x+','+y+' ';//+' L'
			}
			nouv_coord += myIncluder.LISTE_POINTS_SVG[no_ssilot][p][c]+','+LISTE_POINTS_SVG[no_ssilot][p][c+1]+' ';
			c += 2;
		}
		nouv_coord += 'z ';
		p++;
	}

	myDocument.getElementById(myIncluder.ssilotselect).setAttribute("d", nouv_coord);
	myDocument.getElementById(myIncluder.ssilotselect).setAttribute("tagName", nouv_coord);
	myIncluder.svg_cree_liste_points();
	myIncluder.svg_genere_points_select();
}



function svg_fin_points_supp()
{
	if(myIncluder.mode != "nouveau_ptXX")
	{
		alert("erreur : vous devez etre en mode\n detourage pour effectuer cette operation");
		return;
	}

	myIncluder.etat = 1;
	myDocument.removeEventListener("click", myIncluder.svg_nouveau_point2XX, true);
	myIncluder.svg_modifier_points_ajoutes();
}



function svg_diviser_ssilot2()
{
	if(myIncluder.mode != "select_ssilot")
	{
		alert("erreur : vous devez etre en mode\n detourage pour effectuer cette operation");
		return;
	}

	myIncluder.LISTE_POINTS_SVG[0] = new Array(1);
	myIncluder.LISTE_POINTS_SVG[0][0] = new Array(myIncluder.TAILLE_LISTES);
	myIncluder.tab_coord1 = new Array(myIncluder.TAILLE_LISTES);
	myIncluder.tab_coord2 = new Array(myIncluder.TAILLE_LISTES);
	myIncluder.pos0 = 0;
	myIncluder.etat = 0;
	myIncluder.svg_nouveau_pointXX();
}



function svg_nouveau_pointXX()
{
	myIncluder.cycle = 0;
	myIncluder.tab_coord1[myIncluder.cycle] = new Array(myIncluder.TAILLE_LISTES);//faire la même chose après le changement d'état
	myDocument.addEventListener("click", myIncluder.svg_nouveau_point2XX, true);
	myIncluder.mode = "nouveau_ptXX";
}



function svg_nouveau_point2XX(evt)
{
	if(myIncluder.mode == "nouveau_ptXX" && myIncluder.svg_appartient_cadre(evt.clientX, evt.clientY))
	{
		if(myIncluder.etat == 0)
		{
			myIncluder.distance1 = myIncluder.svg_norme(myIncluder.svg_conversion_x(evt.clientX)-myIncluder.X_CENTRE, myIncluder.svg_conversion_y(evt.clientY)-myIncluder.Y_CENTRE);
			myIncluder.angle0 = myIncluder.svg_angle(myIncluder.svg_conversion_x(evt.clientX), myIncluder.svg_conversion_y(evt.clientY));
			DialogueFlottants("Coordonnées du point", myIncluder.svg_insere_nouveau_point, svg_insere_nouveau_point, 0, 0, new stChampFlottant("X", myIncluder.svg_conversion_x(evt.clientX)), new stChampFlottant("Y", myIncluder.svg_conversion_y(evt.clientY)), new stChampFlottant("distance", myIncluder.distance1), new stChampFlottant("angle", myIncluder.angle0));
		}
		/*else
		{
			myDocument.removeEventListener("click", myIncluder.svg_nouveau_point2XX, true);
			myIncluder.svg_selectionPointExistantXX();
		}*/
	}
}



function svg_insere_nouveau_point(X, Y, D, A)
{
	if(myIncluder.mode != "nouveau_ptXX")
	{
		alert("erreur : vous devez etre en mode\n detourage pour effectuer cette operation");
		return;
	}

	var angle_ins = A;
	var distance_ins = D;
	var x_ins;
	var y_ins;

	if((myIncluder.angle0 != angle_ins) || (myIncluder.distance1 != distance_ins))//si l'angle ou la distance sont differents alors on insere a partir de l'angle et de la distance
	{
		x_ins = myIncluder.X_CENTRE + distance_ins * Math.cos(angle_ins*myIncluder.PI/180);
		y_ins = myIncluder.Y_CENTRE + distance_ins * Math.sin(angle_ins*myIncluder.PI/180);
	}
	else//sinon insertion à partir des coordonnees absolues
	{
		x_ins = X;
		y_ins = Y;
	}

	var query = "select Within(GeomFromText('"+"POINT("+x_ins+" "+y_ins+")"+"'),GeomFromText('"+myIncluder.svg_svg2geometry(myIncluder.LISTE_POINTS_SVG[myIncluder.svg_extraire_no()])+"'));";
	var result = pgsql_query(query);

	var enumerator = result.enumerate();
	enumerator.beforeFirst();
	enumerator.next();

	if(enumerator.getVariant(0) != true)
	{
		alert("erreur : point a l'exterieur du sous-ilot selectionne");
		return;
	}

	myIncluder.svg_creer_point(x_ins, y_ins);
	myIncluder.LISTE_POINTS_SVG[0][0][myIncluder.pos0++] = x_ins;
	myIncluder.LISTE_POINTS_SVG[0][0][myIncluder.pos0++] = y_ins;
}



function svg_selectionPointExistantXX()
{
	myIncluder.etat = 0;
	myDocument.addEventListener("click", myIncluder.svg_selectionPointExistant2XX, true);
	myIncluder.mode = "select_existantXX";
	myIncluder.tab_coord1 = new Array(myIncluder.TAILLE_LISTES);
	myIncluder.tab_coord1[0] = new Array(myIncluder.TAILLE_LISTES);
	myIncluder.tab_coord2 = new Array(myIncluder.TAILLE_LISTES);
	myIncluder.cycle = 0;
	myIncluder.pos1 = 0;
	myIncluder.pos2 = 0;
}



function svg_selectionPointExistant2XX(evt)
{
	if(myIncluder.mode == "select_existantXX" && myIncluder.svg_appartient_cadre(evt.clientX, evt.clientY))
	{
		var no_ssilotcurr = myIncluder.svg_extraire_no();
		var l = myIncluder.LISTE_POINTS_SVG;
		var xclic = myIncluder.svg_conversion_x(evt.clientX);
		var yclic = myIncluder.svg_conversion_y(evt.clientY);
		var xt = l[no_ssilotcurr][0][0];
		var yt = l[no_ssilotcurr][0][1];
		var poscurr = 0;
		var locale_cyclecurr = 0;
		var distcurr = myIncluder.svg_norme(xt-xclic, yt-yclic);
		var dt;
		var c;
		var p;

		p = 0;

		while(l[no_ssilotcurr][p] != undefined)
		{
			c = 0;

			while(l[no_ssilotcurr][p][c] != undefined)
			{
				xt = l[no_ssilotcurr][p][c++];
				yt = l[no_ssilotcurr][p][c++];
				dt = myIncluder.svg_norme(xt-xclic, yt-yclic);
				if(dt < distcurr)
				{
					distcurr = dt;
					poscurr = c-2;
					locale_cyclecurr = p;
				}
			}
			p++;
		}
		c = 0;//points dans la liste de points temporaires

		while(l[0][0][c] != undefined)
		{
			xt = l[0][0][c++];
			yt = l[0][0][c++];
			dt = myIncluder.svg_norme(xt-xclic, yt-yclic);

			if(dt < distcurr)
			{
				distcurr = dt;
				poscurr = c-2;
				locale_cyclecurr = 0;
				no_ssilotcurr = 0;
			}
		}

		if(myIncluder.etat == 2)
		{
			myDocument.removeEventListener("click", myIncluder.svg_selectionPointExistant2XX, true);
		}
		else
		{
			myIncluder.svg_creer_curseur1();
			myDocument.getElementById("curseur1").setAttribute("r", myIncluder.TAILLE_SELECT*myIncluder.RAYON_POINT/myIncluder.scal);
			myDocument.getElementById("curseur1").setAttribute("cx", l[no_ssilotcurr][locale_cyclecurr][poscurr]);
			myDocument.getElementById("curseur1").setAttribute("cy", l[no_ssilotcurr][locale_cyclecurr][poscurr+1]);
			setTimeout("svg_supprimer_curseur1();", 250);

			if(myIncluder.etat == 0)
			{
				myIncluder.tab_coord1[myIncluder.cycle][myIncluder.pos1++] = l[no_ssilotcurr][locale_cyclecurr][poscurr];
				myIncluder.tab_coord1[myIncluder.cycle][myIncluder.pos1++] = l[no_ssilotcurr][locale_cyclecurr][poscurr+1];
				if(myIncluder.mode_selection == 0)
				{
					myIncluder.svg_fin_division1();
				}
			}
			else
			{
				myIncluder.tab_coord2[myIncluder.cycle][myIncluder.pos2++] = l[no_ssilotcurr][locale_cyclecurr][poscurr];
				myIncluder.tab_coord2[myIncluder.cycle][myIncluder.pos2++] = l[no_ssilotcurr][locale_cyclecurr][poscurr+1];

				if(myIncluder.mode_selection == 0)
				{
					myIncluder.svg_creer_liste_points();
					myIncluder.svg_fin_division2();
				}
			}
		}
	}
}



/*****************************************************************************/
/**************** INSERTION D'UN POINT SUR UN COTE ***************************/
/*****************************************************************************/



function svg_insertion_point_cote()
{
	if(myIncluder.svg_bloque_outils())
	{
		alert("erreur : vous devez d'abord terminer l'operation en cours");
		return;
	}

	myIncluder.ancien_mode = mode;
	myIncluder.x_extremite_tampon = undefined;//pour que la droite soit toujours affichée la première fois
	myIncluder.svg_toolbar_outils();
	myIncluder.svg_creer_lignes();
	myIncluder.svg_creer_curseur1();
	myIncluder.svg_creer_curseur3();
	myIncluder.svg_creer_curseur4();
	myDocument.getElementById("curseur1").setAttribute("r", myIncluder.TAILLE_SELECT*myIncluder.RAYON_POINT/myIncluder.scal);
	myIncluder.svg_nouveau_point();
	myDocument.onmousemove = myIncluder.svg_maj_projete;
}



function svg_fin_insertion_point_cote()
{
	myDocument.onmousemove = myIncluder.svg_maj_coord_souris;
	myIncluder.svg_effacer_lignes();
	myIncluder.svg_supprimer_curseur1();
	myIncluder.svg_supprimer_curseur3();
	myIncluder.svg_supprimer_curseur4();
}



function svg_maj_projete(evt)
{
	var no_ssilot = myIncluder.svg_extraire_no();
	var l = myIncluder.LISTE_POINTS_SVG[no_ssilot];
	var xt = l[0][0];
	var yt = l[0][1];
	var poscurr = 0;
	var cotecurr = 0;
	var distcurr = myIncluder.INFINI;
	var dt;
	var boucle = 0;
	var modifie = 0;
	var t = 0;
	var c;

	while(l[t] != undefined)
	{
		c = 0;

		while(l[t][c+2] != undefined)
		{
			myIncluder.svg_projection(myIncluder.svg_conversion_x(evt.clientX), myIncluder.svg_conversion_y(evt.clientY), l[t][c], l[t][c+1], l[t][c+2], l[t][c+3]);
			dt = myIncluder.svg_norme(myIncluder.x_projete-myIncluder.svg_conversion_x(evt.clientX), myIncluder.y_projete-myIncluder.svg_conversion_y(evt.clientY));

			if((dt < distcurr) && (myIncluder.ok==1))
			{
				modifie = 1;
				distcurr = dt;
				poscurr = c;
				cotecurr = t;
				boucle = 0;
				myIncluder.x_projete2 = x_projete;
				myIncluder.y_projete2 = y_projete;
			}
			c += 2;
		}

		myIncluder.svg_projection(myIncluder.svg_conversion_x(evt.clientX), myIncluder.svg_conversion_y(evt.clientY), l[t][c], l[t][c+1], l[t][0], l[t][1]);
		dt = myIncluder.svg_norme(myIncluder.x_projete-myIncluder.svg_conversion_x(evt.clientX), myIncluder.y_projete-myIncluder.svg_conversion_y(evt.clientY));

		if((dt < distcurr) && (myIncluder.ok == 1))
		{
			modifie = 1;
			distcurr = dt;
			poscurr = c;
			cotecurr = t;
			boucle = 1;
			myIncluder.x_projete2 = x_projete;
			myIncluder.y_projete2 = y_projete;
		}

		if(boucle == 0)
		{
			myIncluder.x_extremite2 = l[cotecurr][poscurr];
			myIncluder.y_extremite2 = l[cotecurr][poscurr+1];
			myIncluder.x_extremite1 = l[cotecurr][poscurr+2];
			myIncluder.y_extremite1 = l[cotecurr][poscurr+3];
		}        
		else
		{
			myIncluder.x_extremite2 = l[cotecurr][poscurr];
			myIncluder.y_extremite2 = l[cotecurr][poscurr+1];
			myIncluder.x_extremite1 = l[cotecurr][0];
			myIncluder.y_extremite1 = l[cotecurr][1];
		}

		if(modifie == 1)
		{
			//myDocument.getElementById("ligne1").setAttribute("x1", myIncluder.x_extremite1);//cette methode est trop lente
			//myDocument.getElementById("ligne1").setAttribute("y1", myIncluder.y_extremite1);
			//myDocument.getElementById("ligne1").setAttribute("x2", myIncluder.x_projete2);
			//myDocument.getElementById("ligne1").setAttribute("y2", myIncluder.y_projete2);

			//myDocument.getElementById("ligne2").setAttribute("x1", myIncluder.x_extremite2);
			//myDocument.getElementById("ligne2").setAttribute("y1", myIncluder.y_extremite2);
			//myDocument.getElementById("ligne2").setAttribute("x2", myIncluder.x_projete2);
			//myDocument.getElementById("ligne2").setAttribute("y2", myIncluder.y_projete2);

			if(myIncluder.x_extremite_tampon != myIncluder.x_extremite2 || myIncluder.y_extremite_tampon != myIncluder.y_extremite2)
			{
				myDocument.getElementById("ligne2").setAttribute("x1", myIncluder.x_extremite2);
				myDocument.getElementById("ligne2").setAttribute("y1", myIncluder.y_extremite2);
				myDocument.getElementById("ligne2").setAttribute("x2", myIncluder.x_extremite1);
				myDocument.getElementById("ligne2").setAttribute("y2", myIncluder.y_extremite1);
				myIncluder.x_extremite_tampon = myIncluder.x_extremite2;
				myIncluder.y_extremite_tampon = myIncluder.y_extremite2;

				myIncluder.svg_ajuster_curseur3(myIncluder.x_extremite2, myIncluder.y_extremite2);
				myIncluder.svg_ajuster_curseur4(myIncluder.x_extremite1, myIncluder.y_extremite1);
			}

			myDocument.getElementById("curseur1").setAttribute("cx", myIncluder.x_projete2);
			myDocument.getElementById("curseur1").setAttribute("cy", myIncluder.y_projete2);

			top.document.getElementById("tab_distance1").value = myIncluder.svg_arr100(myIncluder.svg_norme(myIncluder.x_extremite1-myIncluder.x_projete2, myIncluder.y_extremite1-myIncluder.y_projete2));
			top.document.getElementById("tab_distance2").value = myIncluder.svg_arr100(myIncluder.svg_norme(myIncluder.x_extremite2-myIncluder.x_projete2, myIncluder.y_extremite2-myIncluder.y_projete2));
			//myDocument.getElementById("coordSouris").firstChild.nodeValue = myIncluder.svg_arr100(myIncluder.x_projete2)+', '+svg_arr100(myIncluder.y_projete2);

		}
		t++;
	}

	//myDocument.getElementById("coordSourisRT").firstChild.nodeValue = myIncluder.svg_conversion_x(evt.clientX)+', '+myIncluder.svg_conversion_y(evt.clientY);
	//myDocument.getElementById("d1").firstChild.nodeValue = myIncluder.svg_arr100(myIncluder.svg_norme(myIncluder.x_extremite1-myIncluder.x_projete2, myIncluder.y_extremite1-myIncluder.y_projete2));
	//myDocument.getElementById("d2").firstChild.nodeValue = myIncluder.svg_arr100(myIncluder.svg_norme(myIncluder.x_extremite2-myIncluder.x_projete2, myIncluder.y_extremite2-myIncluder.y_projete2));
}



function svg_nouveau_point()
{
	//myDocument.getElementById("action").firstChild.nodeValue="inserer un point";
	myDocument.addEventListener("click", myIncluder.svg_nouveau_point2, true);
	myIncluder.mode = "nouveau_pt_cote";
}



function svg_nouveau_point2(evt)
{
	if(myIncluder.mode == "nouveau_pt_cote" && myIncluder.svg_appartient_cadre(evt.clientX, evt.clientY))
	{
		//alert("Coordonnees="+myIncluder.svg_conversion_x(evt.clientX)+','+myIncluder.svg_conversion_y(evt.clientY));
		myDocument.removeEventListener("click", myIncluder.svg_nouveau_point2, true);
		//myDocument.getElementById("dlg1").value = myIncluder.x_projete2;//- myIncluder.X_CENTRE
		//myDocument.getElementById("dlg2").value = myIncluder.y_projete2;//- myIncluder.Y_CENTRE
		myIncluder.distance1 = myIncluder.svg_arr100(myIncluder.svg_norme(myIncluder.x_extremite1-myIncluder.x_projete2, myIncluder.y_extremite1-myIncluder.y_projete2));
		myIncluder.distance2 = myIncluder.svg_arr100(myIncluder.svg_norme(myIncluder.x_extremite2-myIncluder.x_projete2, myIncluder.y_extremite2-myIncluder.y_projete2));
		//myDocument.getElementById("dlg3").value = myIncluder.distance1;
		//myDocument.getElementById("dlg4").value = myIncluder.distance2;
		myIncluder.svg_fin_insertion_point_cote();
		DialogueFlottants("Distance aux extrémités", myIncluder.svg_ajouter_point_seg, svg_ajouter_point_seg, 0, 0, new stChampFlottant("distance point bleu", myIncluder.distance1), new stChampFlottant("distance point vert", myIncluder.distance2));
	}
}



function svg_ajouter_point_seg(d1, d2)
{
	if(myIncluder.mode != "nouveau_pt_cote")
	{
		alert("erreur : vous devez etre en mode\n insertion point sur cote pour effectuer cette operation");
		return;
	}

	var x_ins = myIncluder.x_projete2; //parseFloat(myDocument.getElementById("dlg1").value);
	var y_ins = myIncluder.y_projete2; //parseFloat(myDocument.getElementById("dlg2").value);
	var d1_ins = d1; //parseFloat(myDocument.getElementById("dlg3").value);
	var d2_ins = d2; //parseFloat(myDocument.getElementById("dlg4").value);

	//ajustement en fonction du parametre modifie
	//if(x_ins != myIncluder.x_projete2)
	//{
		//myIncluder.svg_intersection(x_ins, 0, myIncluder.y_projete2, 1, myIncluder.x_extremite1, myIncluder.x_extremite2-x_extremite1, myIncluder.y_extremite1, myIncluder.y_extremite2-y_extremite1);
		//x_ins = myIncluder.x_intersection; 
		//y_ins = myIncluder.y_intersection;
	//}
	//else
	//if(y_ins != myIncluder.y_projete2)
	//{
		//myIncluder.svg_intersection(x_ins, 1, myIncluder.y_projete2, 0, myIncluder.x_extremite1, myIncluder.x_extremite2-x_extremite1, myIncluder.y_extremite1, myIncluder.y_extremite2-y_extremite1);
		//x_ins = myIncluder.x_intersection;
		//y_ins = myIncluder.y_intersection;
	//}
	//else
	if(d1_ins != myIncluder.distance1)
	{
		if(d1_ins<0 || d1_ins>=myIncluder.svg_norme(myIncluder.x_extremite1-myIncluder.x_extremite2, myIncluder.y_extremite1-myIncluder.y_extremite2))
		{
			alert("distance illegale");
			myIncluder.svg_fin_insertion_point_cote();
			return;
		}
		x_ins = myIncluder.x_extremite1 + d1_ins * (myIncluder.x_extremite2-x_extremite1)/myIncluder.svg_norme(x_extremite2-x_extremite1, myIncluder.y_extremite2-myIncluder.y_extremite1);
		y_ins = myIncluder.y_extremite1 + d1_ins * (myIncluder.y_extremite2-y_extremite1)/myIncluder.svg_norme(myIncluder.x_extremite2-myIncluder.x_extremite1, y_extremite2-y_extremite1);
	}
	else
	if(d2_ins != myIncluder.distance2)
	{
		if(d2_ins<0 || d2_ins >= myIncluder.svg_norme(myIncluder.x_extremite1-myIncluder.x_extremite2, myIncluder.y_extremite1-myIncluder.y_extremite2))
		{
			alert("distance illegale");
			myIncluder.svg_fin_insertion_point_cote();
			return;
		}
		x_ins = myIncluder.x_extremite2 + d2_ins * (myIncluder.x_extremite1-x_extremite2)/myIncluder.svg_norme(x_extremite2-x_extremite1, myIncluder.y_extremite2-myIncluder.y_extremite1);
		y_ins = myIncluder.y_extremite2 + d2_ins * (myIncluder.y_extremite1-y_extremite2)/myIncluder.svg_norme(myIncluder.x_extremite2-myIncluder.x_extremite1, y_extremite2-y_extremite1);
	}
	//alert(x_ins, y_ins);
	myIncluder.svg_insertion_point_ssilot(myIncluder.x_extremite1, myIncluder.y_extremite1, x_ins, y_ins);
	//myIncluder.LISTE_POINTS[myIncluder.POS_LISTE_POINTS++] = x_ins;
	//myIncluder.LISTE_POINTS[myIncluder.POS_LISTE_POINTS++] = y_ins;
	myIncluder.svg_restaure_ancienne_toolbar();
	myIncluder.mode = myIncluder.ancien_mode;
	myIncluder.ancien_mode = "select_ssilot";
	//alert("mode="+mode+"\nancien_mode="+ancien_mode);
	//myIncluder.mode = "select_ssilot";
}



/*****************************************************************************/
/******************* TRACAGE D'UNE BANDE PARALLELE ***************************/
/*****************************************************************************/



function svg_selection_point_bande_parallele()
{
	if(myIncluder.mode != "select_ssilot")
	{
		alert("erreur : vous devez etre en mode\n selection pour effectuer cette operation");
		return;
	}

	myIncluder.distance1 = 50;
	myIncluder.nb_points_arc = 10;
	myIncluder.distance_sup1 = 0;
	myIncluder.distance_sup2 = 0;
	myIncluder.svg_toolbar_outils();
	myIncluder.svg_creer_liste_points_temporaires();
	DialogueFlottants("Largeur de la bande", myIncluder.svg_selection_point_bande_parallele1, svg_selection_point_bande_parallele1, 0, 0, new stChampFlottant("distance", myIncluder.distance1), new stChampFlottant("distance supplémentaire au dernier point", myIncluder.distance_sup1), new stChampFlottant("distance supplémentaire au premier point", myIncluder.distance_sup2), new stChampFlottant("nombre de points par arc", myIncluder.nb_points_arc));
}



function svg_selection_point_bande_parallele1(d, ds1, ds2, nb)
{
	myDocument.addEventListener("click", myIncluder.svg_selection_point_bande_parallele2, true);
	myIncluder.mode = "select_bande";
	myIncluder.tab_coord1 = new Array(1);
	myIncluder.tab_coord1[0] = new Array(myIncluder.TAILLE_LISTES);
	myIncluder.cycle = 0;
	myIncluder.pos1 = 0;
	myIncluder.distance2 = d;
	myIncluder.nb_points_arc = nb;
	myIncluder.distance_sup1 = ds1;
	myIncluder.distance_sup2 = ds2;
}



function svg_prolonge_segment(x1, y1, x2, y2, ds, sens)
{
	if(sens == 1)
	{
		myIncluder.x_extremite1 = x1+(x2-x1)/myIncluder.svg_norme(x2-x1, y2-y1)*ds;
		myIncluder.y_extremite1 = y1+(y2-y1)/myIncluder.svg_norme(x2-x1, y2-y1)*ds;
	}
	else
	{
		myIncluder.x_extremite1 = x1-(x2-x1)/myIncluder.svg_norme(x2-x1, y2-y1)*ds;
		myIncluder.y_extremite1 = y1-(y2-y1)/myIncluder.svg_norme(x2-x1, y2-y1)*ds;
	}
}



function svg_selection_point_bande_parallele2(evt)
{
	if(myIncluder.mode == "select_bande" && myIncluder.svg_appartient_cadre(evt.clientX, evt.clientY))
	{
		var no_ssilotcurr = myIncluder.svg_extraire_no();
		var l = myIncluder.LISTE_POINTS_SVG;
		var xclic = myIncluder.svg_conversion_x(evt.clientX);
		var yclic = myIncluder.svg_conversion_y(evt.clientY);
		var xt = l[no_ssilotcurr][0][0];
		var yt = l[no_ssilotcurr][0][1];
		var poscurr = 0;
		var locale_cyclecurr = 0;
		var distcurr = myIncluder.svg_norme(xt-xclic, yt-yclic);
		var dt;
		var c;
		var p;
		var query;
		var result;
		var enumerator;
		var index2;
		var index3;

		p = 0;
		while(l[no_ssilotcurr][p] != undefined)
		{
			c = 0;
			while(l[no_ssilotcurr][p][c] != undefined)
			{
				xt = l[no_ssilotcurr][p][c++];
				yt = l[no_ssilotcurr][p][c++];
				dt = myIncluder.svg_norme(xt-xclic, yt-yclic);
				if(dt < distcurr)
				{
					distcurr = dt;
					poscurr = c-2;
					locale_cyclecurr = p;
				}
			}
			p++;
		}

		myIncluder.svg_creer_curseur1();
		myDocument.getElementById("curseur1").setAttribute("r", myIncluder.TAILLE_SELECT*myIncluder.RAYON_POINT/myIncluder.scal);
		myDocument.getElementById("curseur1").setAttribute("cx", l[no_ssilotcurr][locale_cyclecurr][poscurr]);
		myDocument.getElementById("curseur1").setAttribute("cy", l[no_ssilotcurr][locale_cyclecurr][poscurr+1]);
		setTimeout("svg_supprimer_curseur1();", 250);
		myIncluder.tab_coord1[0][myIncluder.pos1++] = l[no_ssilotcurr][locale_cyclecurr][poscurr];
		myIncluder.tab_coord1[0][myIncluder.pos1++] = l[no_ssilotcurr][locale_cyclecurr][poscurr+1];

		if(myIncluder.pos1 == 2)
		{
			myIncluder.svg_creer_curseur3();
			myIncluder.svg_ajuster_curseur3(myIncluder.tab_coord1[0][0], myIncluder.tab_coord1[0][1]);
		}
		else if(myIncluder.pos1 == 4)
		{
			myIncluder.svg_creer_curseur4();
			myIncluder.svg_ajuster_curseur4(tab_coord1[0][2], tab_coord1[0][3]);
		}

		if(myIncluder.pos1 == 6)//cas où les 3 points sont définis
		{
			myIncluder.svg_supprimer_curseur3();
			myIncluder.svg_supprimer_curseur4();
			myIncluder.svg_affiche_points_bande(myIncluder.tab_coord1[0]);

			var l = myIncluder.svg_extrait_points_path_chaine("M "+myDocument.getElementById("trace").getAttribute("tagName")+" z");

			var fin = 0;
			while(l[0][fin] != undefined) fin++;

			if(myIncluder.distance_sup1 != 0)
			{
				//alert("prolongation du segment 1");
				//myIncluder.svg_prolonge_segment(l[0][fin-4], l[0][fin-3], l[0][fin-2], l[0][fin-1], myIncluder.distance_sup1, 1);
				myIncluder.svg_prolonge_segment(l[0][fin-2], l[0][fin-1], l[0][fin-4], l[0][fin-3], myIncluder.distance_sup1, 2);
				myIncluder.svg_creer_point_temporaire(myIncluder.x_extremite1, myIncluder.y_extremite1);//à recoder : ajouter le point à tagName (et à l'attribut points)
			}

			if(myIncluder.distance_sup2 != 0)
			{
				//alert("prolongation du segment 2");
				//alert("cas à  pb :"+(l[0][5]-l[0][1])+", "+l[0][1]);
				//myIncluder.toto(l);
				//myIncluder.svg_prolonge_segment(l[0][4], l[0][5], l[0][0], l[0][1], myIncluder.distance_sup2);//bug qui fait que le premier point est doublé dans la liste
				myIncluder.svg_prolonge_segment(l[0][0], l[0][1], l[0][4], l[0][5], myIncluder.distance_sup2, 2);//bug qui fait que le premier point est doublé dans la liste
				l = myIncluder.svg_extrait_points_path_chaine("M "+myIncluder.x_extremite1+","+myIncluder.y_extremite1+" "+myDocument.getElementById("trace").getAttribute("tagName")+" z");
				//alert("VERIF");
				//alert("ancien tagName = "+myDocument.getElementById("trace").getAttribute("tagName"));
				////myDocument.getElementById("trace").setAttribute("d", "M "+myIncluder.x_extremite1+","+myIncluder.y_extremite1+" "+myDocument.getElementById("trace").getAttribute("tagName")+" z");
				////alert(myDocument.getElementById("trace").getAttribute("d"));
				//alert("d"+myIncluder.x_extremite1+","+myIncluder.y_extremite1+" "+myDocument.getElementById("trace").getAttribute("tagName"));
				//alert(myDocument.getElementById("trace").getAttribute("d"));
				//alert("FIN VERIF");
				//myIncluder.svg_creer_point_temporaire(myIncluder.x_extremite1, myIncluder.y_extremite1);
			}
			else
			{
				//alert(myDocument.getElementById("trace").getAttribute("tagName"));
				l = myIncluder.svg_extrait_points_path_chaine("M "+myDocument.getElementById("trace").getAttribute("tagName")+" z");
			}

			//alert("extraction de la chaine ok");
			myDocument.removeEventListener("click", myIncluder.svg_selection_point_bande_parallele2, true);

			////query = "select agriassvg(Intersection(GeomFromText('"+myIncluder.svg_svg2geometry(myIncluder.LISTE_POINTS_SVG[no_ssilotcurr])+"'), AgriBande('"+myIncluder.svg_svg2linestring(l)+"', "+myIncluder.distance2+", "+myIncluder.nb_points_arc+")));";
			query = "select agriassvg(AgriBande('"+myIncluder.svg_svg2linestring(l)+"', "+myIncluder.distance2+", "+myIncluder.nb_points_arc+"));";
			//query = "select agriassvg(AgriBande('"+myIncluder.svg_svg2linestring(l)+"', "+myIncluder.distance2+", "+myIncluder.nb_points_arc+"));";
			//prompt("requete1=", query);
			//alert('requete='+query);
			//myDocument.getElementById("dlg3").value = query;
			result = pgsql_query(query);
			//alert("fin requete 1");
			//alert('resultat='+result);
			enumerator = result.enumerate();
			enumerator.next();
			//alert(enumerator.getVariant(0));

			var temp = myIncluder.carte_textgeom_to_svgpoly(enumerator.getVariant(0));
			var poly1 = myIncluder.svg_extrait_points_path_chaine(temp);

			myIncluder.carte_addpolytemp(poly1);
			//myIncluder.carte_genere_points_polytemp();

			myIncluder.svg_edite_bande();
			return;

			//query = "select agriassvg(si_trace), si_numero from AgriDifference("+myIncluder.CONVERSION_INDEXES[myIncluder.svg_extraire_no(no_ssilotcurr)]+",GeomFromText('"+myIncluder.svg_svg2geometry(poly1)+"'), '25/01/2005')";

			query = "select agriassvg(difference(GeomFromText('"+myIncluder.svg_svg2geometry(myIncluder.LISTE_POINTS_SVG[no_ssilotcurr])+"'), GeomFromText('"+myIncluder.svg_svg2geometry(poly1)+"')))";

			prompt("requete2=", query);
			//myDocument.getElementById("dlg1").value = query;
			//alert('requete='+query);
			//alert("requete2");
			result = pgsql_query(query);
			//alert("fin requete 2");
			//alert('resultat='+result);
			enumerator = result.enumerate();
			enumerator.beforeFirst();
			enumerator.next();
			//myDocument.getElementById("dlg2").value = enumerator.getVariant(0);
			//alert(enumerator.getVariant(0));
			////index2 = enumerator.getInt(1);
			temp = myIncluder.carte_textgeom_to_svgpoly(enumerator.getVariant(0));

			var poly2 = myIncluder.svg_extrait_points_path_chaine(temp);//remplacer par quand le probleme de l'extraction des points sera à jour

/*			//alert(poly2);
			enumerator.next();
			index3 = enumerator.getInt(1);
			query = "select agriassvg(Intersection(AgriContourLocalRect(GeomFromText('"+myIncluder.svg_svg2geometry(myIncluder.LISTE_POINTS_SVG[no_ssilotcurr])+"'), GeomFromText('"+myIncluder.svg_svg2linestring(myIncluder.tab_coord1)+"'),"+myIncluder.distance2+"), GeomFromText('"+svg_svg2geometry(myIncluder.LISTE_POINTS_SVG[no_ssilotcurr])+"')));";
			//alert('requete='+query);
			//myDocument.getElementById("dlg3").value = query;
			result = pgsql_query(query);
			//alert('resultat='+result);
			enumerator = result.enumerate();
			enumerator.next();
			//alert(enumerator.getVariant(0));
			//myDocument.getElementById("dlg4").value = enumerator.getString(0);
			temp = myIncluder.carte_textgeom_to_svgpoly(enumerator.getString(0));

			var poly3 = myIncluder.svg_extrait_points_path2(temp);*/

			//alert("Polygone a creer="+poly1);

			//carte_supprimer_polygones();

			myIncluder.svg_toolbar_defaut();
			myIncluder.svg_supprimer_liste_points_temporaires();
			//myIncluder.svg_creer_polygones2(poly3, poly2, index3, index2);//attention : la vérification est coupée
			myIncluder.carte_rafraichir_polygones();
			//if(enumerator.getVariant(0) != true)
			//{
			//	alert("erreur : decoupage incorrect, operation annulee");
			//	myIncluder.etat = 0;
			//	myIncluder.mode = "select_ssilot";
			//	myIncluder.LISTE_POINTS_SVG[0] = undefined;//désallouer
			//	return;
			//}
		}
	}
}



function svg_edite_bande()
{
	//svg_supprimer_liste_points_temporaires();

	myIncluder.svg_toolbar_bande();
	myIncluder.svg_modifier_verrouillage(3);

	myDocument.getElementById(myIncluder.ssilotselect).setAttribute("stroke", "none");
	//myIncluder.svg_supprime_points();

	var si = myDocument.getElementById('ssilottemp');

	myIncluder.mode = "modif_bande";
	si.setAttribute("stroke", "black");
	si.setAttribute("stroke-width", 3/myIncluder.scal);

	//var l = myIncluder.svg_extrait_points_path_chaine(si.getAttribute("tagName"));

	myIncluder.carte_genere_points_polytemp();
	//myIncluder.svg_edite_supprime_point_bande();

	//alert(myIncluder.LISTE_POINTS_POLYTEMP);

	////myIncluder.svg_clic_desactive_verrouillage();
	//myIncluder.svg_verrouille_bande();

	//myIncluder.svg_supprime_point_bande();
	//myIncluder.svg_genere_bande();
}



function svg_edite_supprime_point_bande()
{
	myDocument.addEventListener("click", myIncluder.svg_supprime_point_bande, true);
}



function svg_fin_edite_supprime_point_bande()
{
	myDocument.removeEventListener("click", myIncluder.svg_supprime_point_bande, true);
}



function svg_cherche_point_plus_pres_bande(x, y)
{
	var i = 0;
	var dist2_plus_pres = myIncluder.INFINI;
	myIncluder.p1 = 0;

	while(myIncluder.LISTE_POINTS_POLYTEMP[i] != undefined)
	{
		if(myIncluder.svg_carre(x-myIncluder.LISTE_POINTS_POLYTEMP[i])+svg_carre(y-myIncluder.LISTE_POINTS_POLYTEMP[i+1]) < dist2_plus_pres)
		{
			dist2_plus_pres = myIncluder.svg_carre(x-myIncluder.LISTE_POINTS_POLYTEMP[i])+svg_carre(y-myIncluder.LISTE_POINTS_POLYTEMP[i+1]);
			myIncluder.p1 = i;
		}
		i += 2;
	}
	//alert(p1);
}



function svg_supprime_point_bande(evt)
{
	var lt = new Array(myIncluder.TAILLE_LISTES);
	var it = 0;
	var l = myIncluder.LISTE_POINTS_POLYTEMP;
	var i = 0;

	myIncluder.svg_cherche_point_plus_pres_bande(svg_conversion_x(evt.clientX), svg_conversion_y(evt.clientY));

	while(l[i] != undefined)
	{
		if(i != myIncluder.p1)
		{
			lt[it++] = l[i];
			lt[it++] = l[i+1];
		}
		//else alert("point supprimé");
		i += 2;
	}
	l = lt;

	var ll = new Array(1);
	ll[0] = l;
	var path = myIncluder.svg_list2string(ll);
	//alert(path);
	//alert(myDocument.getElementById("ssilottemp").getAttribute("tagName")+"\n"+path);
	myDocument.getElementById("ssilottemp").setAttribute("d", path);
	myDocument.getElementById("ssilottemp").setAttribute("tagName", path);
	myIncluder.carte_genere_points_polytemp();
	//alert("suppression");
	//alert(l);
	//myIncluder.svg_genere_points_select();
	myIncluder.svg_fin_edite_supprime_point_bande();
}



function svg_genere_bande()
{
	var no_ssilotcurr = myIncluder.svg_extraire_no();
	var query;
	var result;
	var enumerator;
	var index, index2;

	myIncluder.svg_fin_edite_supprime_point_bande();

	/*query = "select agriassvg(Intersection(GeomFromText('"+myIncluder.svg_svg2geometry(myIncluder.LISTE_POINTS_SVG[no_ssilotcurr])+"'), GeomFromText('"+myIncluder.svg_polytemp2geometry()+"')));";
	prompt("requete1b=", query);
	result = pgsql_query(query);

	enumerator = result.enumerate();
	enumerator.beforeFirst();
	enumerator.next();
	alert(enumerator.getVariant(0));

	var temp = myIncluder.carte_textgeom_to_svgpoly(enumerator.getVariant(0));
	var poly1 = myIncluder.svg_extrait_points_path_chaine(temp);*/

	query = "select agriassvg(si_trace), si_numero from AgriDecoupe("+myIncluder.CONVERSION_INDEXES[myIncluder.svg_extraire_no(no_ssilotcurr)]+", GeomFromText('"+myIncluder.svg_svg2geometry(myIncluder.LISTE_POINTS_SVG[no_ssilotcurr])+"'), GeomFromText('"+myIncluder.svg_polytemp2geometry()+"'), '"+current_date()+"');";

	//prompt("requete2=", query);
	result = pgsql_query(query);
	enumerator = result.enumerate();
	enumerator.beforeFirst();
	enumerator.next();

	//temp = myIncluder.carte_textgeom_to_svgpoly(enumerator.getVariant(0));

	index = enumerator.getInt(1);

	enumerator.next();
	index2 = enumerator.getInt(1);

	//query = "select AgriAssvg(si_trace), si_numero from AgriGeneration("+index+")";
	//result = pgsql_query(query);

	//query = "select AgriAssvg(si_trace), si_numero from AgriGeneration("+index2+")";
	//result = pgsql_query(query);

	query = "select agrisimplifie("+index+", "+myIncluder.ERREUR_SURFACE_ACCEPTABLE+");";
	result = pgsql_query(query);

	query = "select agrisimplifie("+index2+", "+myIncluder.ERREUR_SURFACE_ACCEPTABLE+");";
	result = pgsql_query(query);

	//var poly2 = myIncluder.svg_extrait_points_path_chaine(temp);//remplacer par quand le probleme de l'extraction des points sera à jour

	myIncluder.carte_supppolytemp();
	myIncluder.svg_supprime_points();

	myIncluder.svg_toolbar_defaut();
	myIncluder.svg_modifier_verrouillage(0);

	myIncluder.svg_supprimer_liste_points_temporaires();
	myIncluder.carte_rafraichir_polygones();
	myIncluder.mode = myIncluder.ancien_mode;
}



function svg_polytemp2geometry()
{
	var l1 = new Array(1);
	//var l2 = new Array(1);

	l1[0] = myIncluder.LISTE_POINTS_POLYTEMP;
	//l1[0] = l2;
	//l2[0] = myIncluder.LISTE_POINTS_POLYTEMP;

	//alert(l1);

	return myIncluder.svg_svg2geometry(l1);
}



/*function svg_verrouille_bande()
{
	myIncluder.VER_POINT = 3;
}



function svg_deverrouille_bande()
{
	myIncluder.VER_POINT = 0;
}*/



function svg_clic_desactive_verrouillage()
{
	top.document.getElementById("carte_verr0").setAttribute("selected", true);
	//alert("verr sur 0");
}



/*****************************************************************************/
/************** TRACAGE D'UNE BANDE PARALLELE (nouvelle version) *************/
/*****************************************************************************/



function svg_selection_point_bande_parallele_av()
{
	if(myIncluder.mode != "select_ssilot")
	{
		alert("erreur : vous devez etre en mode\n selection pour effectuer cette operation");
		return;
	}

	myIncluder.distance1 = 50;
	myIncluder.svg_toolbar_outils();
	myIncluder.svg_creer_liste_points_temporaires();
	DialogueFlottants("Largeur de la bande", myIncluder.svg_selection_point_bande_parallele1_av, svg_selection_point_bande_parallele1_av, 0, 0, new stChampFlottant("distance", myIncluder.distance1));
}



function svg_selection_point_bande_parallele1_av(D)
{
	myDocument.addEventListener("click", myIncluder.svg_selection_point_bande_parallele2_av, true);
	myIncluder.mode = "select_bande";
	myIncluder.tab_coord1 = new Array(1);
	myIncluder.tab_coord1[0] = new Array(myIncluder.TAILLE_LISTES);
	myIncluder.cycle = 0;
	myIncluder.pos1 = 0;
	myIncluder.distance2 = D;
}



function svg_refresh_bande_parallele()//inclure les coordonnées modifiées, OK->appliquer la bande, Appliquer->recalculer la bande avec des valeurs différentes
{
    var query;
    var result;
    var enumerator;
    var no_ssilotcurr = myIncluder.svg_extraire_no();

    alert("refresh bande parallele");
    myIncluder.carte_supppolytemp();

    query = "select agriassvg(AgriContourLocalRect(GeomFromText('"+myIncluder.svg_svg2geometry(myIncluder.LISTE_POINTS_SVG[no_ssilotcurr])+"'), GeomFromText('"+myIncluder.svg_svg2linestring(myIncluder.tab_coord1)+"'),"+myIncluder.distance2+"));";

    result = pgsql_query(query);

    enumerator = result.enumerate();
    enumerator.next();

    var temp = myIncluder.carte_textgeom_to_svgpoly(enumerator.getVariant(0));
    var poly1 = myIncluder.svg_extrait_points_path_chaine(temp);

    //carte_supprimer_polygones();
    myIncluder.carte_addpolytemp(poly1);

    myIncluder.distance1 = 0;
    myIncluder.distance2 = 0;

    DialogueFlottants("Trace de bande", null, null, 0, 0, new stChampFlottant("décalage au début", myIncluder.distance1), new stChampFlottant("décalage à la fin", myIncluder.distance2));
}



function svg_selection_point_bande_parallele2_av(evt)
{
	if(myIncluder.mode == "select_bande" && myIncluder.svg_appartient_cadre(evt.clientX, evt.clientY))
	{
		var no_ssilotcurr = myIncluder.svg_extraire_no();
		//var l = myIncluder.LISTE_POINTS_SVG[no_ssilot];
		var l = myIncluder.LISTE_POINTS_SVG;
		var xclic = myIncluder.svg_conversion_x(evt.clientX);
		var yclic = myIncluder.svg_conversion_y(evt.clientY);
		//alert("l="+l);
		var xt = l[no_ssilotcurr][0][0];
		var yt = l[no_ssilotcurr][0][1];
		var poscurr = 0;
		var locale_cyclecurr = 0;
		var distcurr = myIncluder.svg_norme(xt-xclic, yt-yclic);
		var dt;
		var c;
		var p;
		var query;
		var result;
		var enumerator;
		var index2;
		var index3;

		p = 0;
		//alert(no_ssilotcurr);
		while(l[no_ssilotcurr][p] != undefined)
		{
			c = 0;
			while(l[no_ssilotcurr][p][c] != undefined)
			{
				//alert(p+'\n'+c);
				xt = l[no_ssilotcurr][p][c++];
				yt = l[no_ssilotcurr][p][c++];
				dt = myIncluder.svg_norme(xt-xclic, yt-yclic);
				if(dt < distcurr)
				{
					distcurr = dt;
					poscurr = c-2;
					locale_cyclecurr = p;
					//alert(dt);
				}
			}
			p++;
		}

		myIncluder.svg_creer_curseur1();
		myDocument.getElementById("curseur1").setAttribute("r", myIncluder.TAILLE_SELECT*myIncluder.RAYON_POINT/myIncluder.scal);
		myDocument.getElementById("curseur1").setAttribute("cx", l[no_ssilotcurr][locale_cyclecurr][poscurr]);
		myDocument.getElementById("curseur1").setAttribute("cy", l[no_ssilotcurr][locale_cyclecurr][poscurr+1]);
		setTimeout("svg_supprimer_curseur1();", 250);
		myIncluder.tab_coord1[0][myIncluder.pos1++] = l[no_ssilotcurr][locale_cyclecurr][poscurr];
		myIncluder.tab_coord1[0][myIncluder.pos1++] = l[no_ssilotcurr][locale_cyclecurr][poscurr+1];

		if(myIncluder.pos1 == 6)//cas où les 3 points sont définis
		{
			myIncluder.svg_affiche_points_bande(myIncluder.tab_coord1[0]);
			myDocument.removeEventListener("click", myIncluder.svg_selection_point_bande_parallele2, true);

			svg_refresh_bande_parallele();
			return;

			query = "select agriassvg(AgriContourLocalRect(GeomFromText('"+myIncluder.svg_svg2geometry(myIncluder.LISTE_POINTS_SVG[no_ssilotcurr])+"'), GeomFromText('"+myIncluder.svg_svg2linestring(myIncluder.tab_coord1)+"'),"+myIncluder.distance2+"));";

			result = pgsql_query(query);

			enumerator = result.enumerate();
			enumerator.next();

			var temp = myIncluder.carte_textgeom_to_svgpoly(enumerator.getVariant(0));
			var poly1 = myIncluder.svg_extrait_points_path_chaine(temp);

			//carte_supprimer_polygones();
			carte_addpolytemp(poly1);
			return;

			query = "select agriassvg(si_trace), si_numero from AgriDifference("+myIncluder.CONVERSION_INDEXES[myIncluder.svg_extraire_no(no_ssilotcurr)]+",GeomFromText('"+myIncluder.svg_svg2geometry(poly1)+"'), '"+current_date()+"')";

			//result = pgsql_query(query);

			myIncluder.svg_toolbar_defaut();
			myIncluder.svg_supprimer_liste_points_temporaires();
			//myIncluder.carte_rafraichir_polygones();
			return;

		}
	}
}



/*****************************************************************************/
/******* INSERTION DES POINTS COUPANT UN POLYGONE SUIVANT UNE PARALLELE ******/
/*****************************************************************************/



function svg_bloque_outils()
{
	return ((myIncluder.mode != "select_ssilot" && myIncluder.ancien_mode != "select_ssilot") || mode == "nouveau_pt_cote" || mode == "nouveau_pt_parallele" || mode == "parallele" || mode =="nouveau_pt_perpendiculaire" || mode == "select_bande" || mode == "modifier_points_inseres" || mode == "creation_cercle" || mode == "super_zoom" || mode =="def_centre")
}



function svg_parallele()
{
	//if(myIncluder.mode != "select_ssilot")
	//{
		//alert("erreur : vous devez etre en myIncluder.mode\n insertion de point sur perpendiculaire pour effectuer cette operation");
		//return;
	//}
	//if(myIncluder.mode != "select_ssilot" && myIncluder.ancien_mode != "select_ssilot")

	if(myIncluder.svg_bloque_outils())
	{
		alert("erreur : vous devez d'abord terminer l'operation en cours");
		return;
	}

	myIncluder.ancien_mode = mode;
	myIncluder.svg_toolbar_outils();
	myIncluder.svg_creer_lignes();
	//myIncluder.pointTemp = myDocument.getElementById("curseur1");
	//myDocument.getElementById("curseur1").setAttribute("r", 0);
	//alert(myDocument.getElementById("point"+myIncluder.NB_POINTS).getAttribute("cx"));
	myIncluder.svg_nouveau_point_parallele();
	myDocument.onmousemove = myIncluder.svg_maj_projete;
}



function svg_maj_projete_parallele(evt)//pas du tout optimise, inutile ???
{
	//myDocument.getElementById("ligne1").setAttribute("stroke-width", 3/myIncluder.scal);
	//myDocument.getElementById("ligne2").setAttribute("stroke-width", 3/myIncluder.scal);
	//myDocument.getElementById("curseur1").setAttribute("r", myIncluder.TAILLE_SELECT*myIncluder.RAYON_POINT/myIncluder.scal);

	var l = svg_extraire_points_polygone();
    var xt = l[0];
    var yt = l[1];
    var poscurr = 0;
    var distcurr = myIncluder.INFINI;
    var dt;
    var boucle = 0;
    var modifie = 0;
    var c = 0;

    while(l[c+2] != undefined)
    {
      myIncluder.svg_projection(myIncluder.svg_conversion_x(evt.clientX), myIncluder.svg_conversion_y(evt.clientY), l[c], l[c+1], l[c+2], l[c+3]);
      dt = myIncluder.svg_norme(myIncluder.x_projete-myIncluder.svg_conversion_x(evt.clientX), myIncluder.y_projete-myIncluder.svg_conversion_y(evt.clientY));
      //alert(dt);

      if((dt < distcurr) && (myIncluder.ok == 1))
      {
        modifie = 1;
        distcurr = dt;
        poscurr = c;
        myIncluder.x_projete2 = x_projete;
        myIncluder.y_projete2 = y_projete;
      }
      c += 2;
    }

	//alert("boucle");

	myIncluder.svg_projection(myIncluder.svg_conversion_x(evt.clientX), myIncluder.svg_conversion_y(evt.clientY), l[c], l[c+1], l[0], l[1]);

	dt = myIncluder.svg_norme(myIncluder.x_projete-myIncluder.svg_conversion_x(evt.clientX), myIncluder.y_projete-myIncluder.svg_conversion_y(evt.clientY));

	//alert(dt);

	if((dt < distcurr) && (myIncluder.ok == 1))
	{
		modifie = 1;
		distcurr = dt;
		poscurr = c;
		boucle = 1;
        myIncluder.x_projete2 = x_projete;
        myIncluder.y_projete2 = y_projete;
	}

    if(boucle == 0)
    {
      //alert("droite selectionne:"+l[poscurr]+' '+l[poscurr+1]+' '+l[poscurr+2]+' '+l[poscurr+3]);
      myIncluder.x_extremite2 = l[poscurr];
      myIncluder.y_extremite2 = l[poscurr+1];
      myIncluder.x_extremite1 = l[poscurr+2];
      myIncluder.y_extremite1 = l[poscurr+3];
    }        
    else
    {
		//alert("droite selectionne:"+l[poscurr]+' '+l[poscurr+1]+' '+l[0]+' '+l[1]);
		myIncluder.x_extremite2 = l[poscurr];
		myIncluder.y_extremite2 = l[poscurr+1];
		myIncluder.x_extremite1 = l[0];
		myIncluder.y_extremite1 = l[1];
    }

	if(modifie == 1)
	{
		myDocument.getElementById("ligne2").setAttribute("x1", myIncluder.x_extremite2);
		myDocument.getElementById("ligne2").setAttribute("y1", myIncluder.y_extremite2);
		myDocument.getElementById("ligne2").setAttribute("x2", myIncluder.x_extremite1);
		myDocument.getElementById("ligne2").setAttribute("y2", myIncluder.y_extremite1);

		myDocument.getElementById("curseur1").setAttribute("cx", myIncluder.x_projete2);
		myDocument.getElementById("curseur1").setAttribute("cy", myIncluder.y_projete2);

		//myDocument.getElementById("coordSouris").firstChild.nodeValue = myIncluder.svg_arr100(myIncluder.x_projete2)+', '+svg_arr100(myIncluder.y_projete2);
	}

	//myDocument.getElementById("coordSourisRT").firstChild.nodeValue = myIncluder.svg_conversion_x(evt.clientX)+', '+myIncluder.svg_conversion_y(evt.clientY);
	//myDocument.getElementById("d1").firstChild.nodeValue = myIncluder.svg_arr100(myIncluder.svg_norme(myIncluder.x_extremite1-myIncluder.x_projete2, myIncluder.y_extremite1-myIncluder.y_projete2));
	//myDocument.getElementById("d2").firstChild.nodeValue = myIncluder.svg_arr100(myIncluder.svg_norme(myIncluder.x_extremite2-myIncluder.x_projete2, myIncluder.y_extremite2-myIncluder.y_projete2));
}



function svg_nouveau_point_parallele()
{
	//myDocument.getElementById("action").firstChild.nodeValue="inserer un point";
	myDocument.addEventListener("click", myIncluder.svg_nouveau_point_parallele2, true);
	myIncluder.mode = "nouveau_pt_parallele";
}



function svg_nouveau_point_parallele2(evt)
{
	if(myIncluder.mode == "nouveau_pt_parallele" && myIncluder.svg_appartient_cadre(evt.clientX, evt.clientY))
	{
		//alert("Coordonnees="+myIncluder.svg_conversion_x(evt.clientX)+','+myIncluder.svg_conversion_y(evt.clientY));
		myDocument.removeEventListener("click", myIncluder.svg_nouveau_point_parallele2, true);
		//myDocument.getElementById("dlg4").value = myIncluder.distance2;
		myIncluder.svg_fin_parallele();
	}
}



function svg_fin_parallele()//selection de la distance a la parallele
{
	myDocument.onmousemove = myIncluder.svg_maj_distance;
    //myDocument.getElementById("points").removeChild(myIncluder.pointTemp);
	//myIncluder.NB_POINTS--;
	//myDocument.getElementById("curseur1").setAttribute("r", 0);
	myDocument.addEventListener("click", myIncluder.svg_trace_parallele, true);
	myIncluder.mode = "parallele";
}



function svg_maj_distance(evt)
{
	myIncluder.svg_projection(myIncluder.svg_conversion_x(evt.clientX), myIncluder.svg_conversion_y(evt.clientY),myIncluder.x_extremite1, myIncluder.y_extremite1, myIncluder.x_extremite2, myIncluder.y_extremite2);
	//myDocument.getElementById("coordSourisRT").firstChild.nodeValue = myIncluder.svg_arr100(myIncluder.svg_norme(myIncluder.x_projete-myIncluder.svg_conversion_x(evt.clientX), myIncluder.y_projete-myIncluder.svg_conversion_y(evt.clientY)));
}



function svg_trace_parallele(evt)
{
	if(myIncluder.mode == "parallele" && myIncluder.svg_appartient_cadre(evt.clientX, evt.clientY))
	{
		myDocument.onmousemove = myIncluder.svg_maj_coord_souris;
		myIncluder.x_projete2 = myIncluder.svg_conversion_x(evt.clientX);
		myIncluder.y_projete2 = myIncluder.svg_conversion_y(evt.clientY);
		myIncluder.distance1 = myIncluder.svg_norme(myIncluder.x_projete-myIncluder.svg_conversion_x(evt.clientX), myIncluder.y_projete-myIncluder.svg_conversion_y(evt.clientY));
		//myDocument.getElementById("dlg1").value = myIncluder.distance1;
		DialogueFlottants("Distance de la parallèle", myIncluder.svg_insere_points_parallele, svg_insere_points_parallele, 0, 0, new stChampFlottant("distance", myIncluder.distance1));
		//insere_points_parallele(evt);
		myDocument.removeEventListener("click", myIncluder.svg_trace_parallele, true);
	}
}



function svg_insere_points_parallele(D)
{
	if(myIncluder.mode != "parallele")
	{
		alert("erreur : vous devez etre en mode\n insertion de point sur parallele pour effectuer cette operation");
		return;
	}
	////myIncluder.distance2 = myDocument.getElementById("dlg1").value;
	myIncluder.distance2 = D;
	//alert(myIncluder.x_projete+', '+myIncluder.y_projete+', '+myIncluder.x_projete2+', '+myIncluder.y_projete2+', '+myIncluder.distance1+', '+myIncluder.distance2);
	if(myIncluder.distance1 != myIncluder.distance2)//distance modifiée à la main
	{
		//alert("distance modifiee");
		myIncluder.x_projete2 = x_projete + myIncluder.distance2*(x_projete2-x_projete)/myIncluder.distance1;
		myIncluder.y_projete2 = y_projete + myIncluder.distance2*(y_projete2-y_projete)/myIncluder.distance1;
	}

	//alert(myIncluder.x_projete2+', '+myIncluder.y_projete2);
	//alert("calcul parallele");

	var l = myIncluder.LISTE_POINTS_SVG;
	var i;
	var p;
	var no_ssilot = myIncluder.svg_extraire_no();

	p = 0;
	while(l[no_ssilot][p] != undefined)
	{
		i = 0;
		while(l[no_ssilot][p][i+3] != undefined)
		{
			myIncluder.svg_intersection(l[no_ssilot][p][i], l[no_ssilot][p][i+2]-l[no_ssilot][p][i], l[no_ssilot][p][i+1], l[no_ssilot][p][i+3]-l[no_ssilot][p][i+1], myIncluder.x_projete2, myIncluder.x_extremite2-myIncluder.x_extremite1, myIncluder.y_projete2, myIncluder.y_extremite2-myIncluder.y_extremite1);
			if(myIncluder.svg_est_nul(myIncluder.svg_norme(myIncluder.x_intersection-l[no_ssilot][p][i], myIncluder.y_intersection-l[no_ssilot][p][i+1])+svg_norme(x_intersection-l[no_ssilot][p][i+2], y_intersection-l[no_ssilot][p][i+3])-svg_norme(l[no_ssilot][p][i]-l[no_ssilot][p][i+2], l[no_ssilot][p][i+1]-l[no_ssilot][p][i+3])))
			{
				//alert(myIncluder.x_intersection+', '+myIncluder.y_intersection);
				myIncluder.svg_insertion_point_ssilot(l[no_ssilot][p][i+2], l[no_ssilot][p][i+3], myIncluder.x_intersection, myIncluder.y_intersection);
				//myIncluder.LISTE_POINTS[myIncluder.POS_LISTE_POINTS++] = myIncluder.x_intersection;
				//myIncluder.LISTE_POINTS[myIncluder.POS_LISTE_POINTS++] = myIncluder.y_intersection;
			}
			i += 2;
		}
		myIncluder.svg_intersection(l[no_ssilot][p][i], l[no_ssilot][p][0]-l[no_ssilot][p][i], l[no_ssilot][p][i+1], l[no_ssilot][p][1]-l[no_ssilot][p][i+1], myIncluder.x_projete2, myIncluder.x_extremite2-myIncluder.x_extremite1, myIncluder.y_projete2, myIncluder.y_extremite2-myIncluder.y_extremite1);

		if(myIncluder.svg_est_nul(myIncluder.svg_norme(myIncluder.x_intersection-l[no_ssilot][p][i], myIncluder.y_intersection-l[no_ssilot][p][i+1])+svg_norme(x_intersection-l[no_ssilot][p][0], y_intersection-l[no_ssilot][p][1])-svg_norme(l[no_ssilot][p][i]-l[no_ssilot][p][0], l[no_ssilot][p][i+1]-l[no_ssilot][p][1])))
		{
			//alert("boucle");
			//alert(myIncluder.x_intersection+', '+myIncluder.y_intersection);
			myIncluder.svg_insertion_point_ssilot(l[no_ssilot][p][0], l[no_ssilot][p][1], myIncluder.x_intersection, myIncluder.y_intersection);
			//myIncluder.LISTE_POINTS[myIncluder.POS_LISTE_POINTS++] = myIncluder.x_intersection;
			//myIncluder.LISTE_POINTS[myIncluder.POS_LISTE_POINTS++] = myIncluder.y_intersection;
		}
		//myDocument.getElementById("ligne1").setAttribute("stroke-width", 0);
		//myDocument.getElementById("ligne2").setAttribute("stroke-width", 0);
		p++;
	}
	myIncluder.svg_effacer_lignes();
	myIncluder.svg_restaure_ancienne_toolbar();
	myIncluder.mode = myIncluder.ancien_mode;
	myIncluder.ancien_mode = "select_ssilot";
	//alert("mode="+mode+"\nancien_mode="+ancien_mode);
	//myIncluder.mode = "select_ssilot";
}



/*****************************************************************************/
/*********** INSERTION DE POINTS PERPENDICULAIREMENT A UN COTE ***************/
/*****************************************************************************/



function svg_insertion_point_perpendiculaire()
{
	//if(myIncluder.mode != "select_ssilot")
	//{
		//alert("erreur : vous devez etre en myIncluder.mode\n insertion de point sur perpendiculaire pour effectuer cette operation");
		//return;
	//}

	//if(myIncluder.mode != "select_ssilot" && myIncluder.ancien_mode != "select_ssilot")

	if(myIncluder.svg_bloque_outils())
	{
		alert("erreur : vous devez d'abord terminer l'operation en cours");
		return;
	}

	myIncluder.ancien_mode = mode;
	myIncluder.svg_toolbar_outils();
	//myIncluder.mode = "perpendiculaire";
	myIncluder.pointTemp = myDocument.getElementById("curseur1");
	myIncluder.svg_creer_lignes();
	myIncluder.svg_creer_curseur1();
	myIncluder.svg_creer_curseur3();
	myIncluder.svg_creer_curseur4();
	myDocument.getElementById("curseur1").setAttribute("r", myIncluder.TAILLE_SELECT*myIncluder.RAYON_POINT/myIncluder.scal);
	//alert(myDocument.getElementById("point"+myIncluder.NB_POINTS).getAttribute("cx"));
	myDocument.onmousemove = myIncluder.svg_maj_projete;//perpendiculaire
	myIncluder.svg_nouveau_point_perpendiculaire();
}



function svg_fin_insertion_point_perpendiculaire()
{
	myDocument.onmousemove = myIncluder.svg_maj_coord_souris;
	//myDocument.getElementById("ligne1").setAttribute("stroke-width", 0);
	//myDocument.getElementById("ligne2").setAttribute("stroke-width", 0);
	myIncluder.svg_effacer_lignes();
	myIncluder.svg_supprimer_curseur1();
	myIncluder.svg_supprimer_curseur3();
	myIncluder.svg_supprimer_curseur4();
	//myDocument.getElementById("curseur1").setAttribute("r", 0);
	myIncluder.mode = "perpendiculaire";
}



function svg_maj_projete_perpendiculaire(evt)
{
    //myDocument.getElementById("ligne1").setAttribute("stroke-width", 3/myIncluder.scal);
    //myDocument.getElementById("ligne2").setAttribute("stroke-width", 3/myIncluder.scal);
    //myDocument.getElementById("curseur1").setAttribute("r", myIncluder.TAILLE_SELECT*myIncluder.RAYON_POINT/myIncluder.scal);

    var l = svg_extraire_points_polygone();
    var xt = l[0];
    var yt = l[1];
    var poscurr = 0;
    var distcurr = myIncluder.INFINI;
    var dt;
    var boucle = 0;
    var modifie = 0;
    var c = 0;

    while(l[c+2] != undefined)
    {
		myIncluder.svg_projection(myIncluder.svg_conversion_x(evt.clientX), myIncluder.svg_conversion_y(evt.clientY), l[c], l[c+1], l[c+2], l[c+3]);
		dt = myIncluder.svg_norme(myIncluder.x_projete-myIncluder.svg_conversion_x(evt.clientX), myIncluder.y_projete-myIncluder.svg_conversion_y(evt.clientY));
		//alert(dt);
		if((dt < distcurr) && (myIncluder.ok == 1))
		{
			modifie = 1;
			distcurr = dt;
			poscurr = c;
			myIncluder.x_projete2 = x_projete;
			myIncluder.y_projete2 = y_projete;
		}
		c += 2;
    }

	//alert("boucle");
	myIncluder.svg_projection(myIncluder.svg_conversion_x(evt.clientX), myIncluder.svg_conversion_y(evt.clientY), l[c], l[c+1], l[0], l[1]);
	dt = myIncluder.svg_norme(myIncluder.x_projete-myIncluder.svg_conversion_x(evt.clientX), myIncluder.y_projete-myIncluder.svg_conversion_y(evt.clientY));
	//alert(dt);
	if((dt < distcurr) && (myIncluder.ok == 1))
	{
		modifie = 1;
		distcurr = dt;
		poscurr = c;
		boucle = 1;
		myIncluder.x_projete2 = x_projete;
		myIncluder.y_projete2 = y_projete;
	}

	if(boucle == 0)
	{
		//alert("droite selectionne:"+l[poscurr]+' '+l[poscurr+1]+' '+l[poscurr+2]+' '+l[poscurr+3]);
		myIncluder.x_extremite2 = l[poscurr];
		myIncluder.y_extremite2 = l[poscurr+1];
		myIncluder.x_extremite1 = l[poscurr+2];
		myIncluder.y_extremite1 = l[poscurr+3];
	}        
	else
	{
		//alert("droite selectionne:"+l[poscurr]+' '+l[poscurr+1]+' '+l[0]+' '+l[1]);
		myIncluder.x_extremite2 = l[poscurr];
		myIncluder.y_extremite2 = l[poscurr+1];
		myIncluder.x_extremite1 = l[0];
		myIncluder.y_extremite1 = l[1];
	}

	if(modifie == 1)
	{
		myDocument.getElementById("ligne2").setAttribute("x1", myIncluder.x_extremite2);
		myDocument.getElementById("ligne2").setAttribute("y1", myIncluder.y_extremite2);
		myDocument.getElementById("ligne2").setAttribute("x2", myIncluder.x_extremite1);
		myDocument.getElementById("ligne2").setAttribute("y2", myIncluder.y_extremite1);

		myDocument.getElementById("curseur1").setAttribute("cx", myIncluder.x_projete2);
		myDocument.getElementById("curseur1").setAttribute("cy", myIncluder.y_projete2);
		//myDocument.getElementById("coordSouris").firstChild.nodeValue = myIncluder.svg_arr100(myIncluder.x_projete2)+', '+svg_arr100(myIncluder.y_projete2);
	}
}



function svg_nouveau_point_perpendiculaire()
{
	myDocument.addEventListener("click", myIncluder.svg_nouveau_point_perpendiculaire2, true);
	myIncluder.mode = "nouveau_pt_perpendiculaire";
}



function svg_nouveau_point_perpendiculaire2(evt)
{
	if(myIncluder.mode == "nouveau_pt_perpendiculaire" && myIncluder.svg_appartient_cadre(evt.clientX, evt.clientY))
	{
		//alert("Coordonnees="+myIncluder.svg_conversion_x(evt.clientX)+','+myIncluder.svg_conversion_y(evt.clientY));
		myDocument.removeEventListener("click", myIncluder.svg_nouveau_point_perpendiculaire2, true);
		//myDocument.getElementById("dlg1").value = myIncluder.x_projete2;//- myIncluder.X_CENTRE
		//myDocument.getElementById("dlg2").value = myIncluder.y_projete2;//- myIncluder.Y_CENTRE
		myIncluder.distance1 = myIncluder.svg_arr100(myIncluder.svg_norme(myIncluder.x_extremite1-myIncluder.x_projete2, myIncluder.y_extremite1-myIncluder.y_projete2));
		myIncluder.distance2 = myIncluder.svg_arr100(myIncluder.svg_norme(myIncluder.x_extremite2-myIncluder.x_projete2, myIncluder.y_extremite2-myIncluder.y_projete2));
		//myDocument.getElementById("dlg3").value = myIncluder.distance1;
		//myDocument.getElementById("dlg4").value = myIncluder.distance2;
		myIncluder.svg_fin_insertion_point_perpendiculaire();
		DialogueFlottants("Distance aux côtés", myIncluder.svg_insere_points_perpendiculaire, svg_insere_points_perpendiculaire, 0, 0, new stChampFlottant("distance point bleu", myIncluder.distance1), new stChampFlottant("distance point vert", myIncluder.distance2));
		//insere_points_perpendiculaire();
	}
}



function svg_insere_points_perpendiculaire(d1, d2)
{
	if(myIncluder.mode != "perpendiculaire")
	{
		alert("erreur : vous devez etre en mode\n insertion de points sur perpendiculaire pour effectuer cette operation");
		return;
	}

	var x_ins = myIncluder.x_projete2; //parseFloat(myDocument.getElementById("dlg1").value);
	var y_ins = myIncluder.y_projete2; //parseFloat(myDocument.getElementById("dlg2").value);
	var d1_ins = d1;//parseFloat(myDocument.getElementById("dlg3").value);
	var d2_ins = d2;//parseFloat(myDocument.getElementById("dlg4").value);

	//ajustement en fonction du parametre modifie
	//if(x_ins != myIncluder.x_projete2)
	//{
		//myIncluder.svg_intersection(x_ins, 0, myIncluder.y_projete2, 1, myIncluder.x_extremite1, myIncluder.x_extremite2-x_extremite1, myIncluder.y_extremite1, myIncluder.y_extremite2-y_extremite1);
		//x_ins = myIncluder.x_intersection; 
		//y_ins = myIncluder.y_intersection;
	//}
	//else
	//if(y_ins != myIncluder.y_projete2)
	//{
		//myIncluder.svg_intersection(x_ins, 1, myIncluder.y_projete2, 0, myIncluder.x_extremite1, myIncluder.x_extremite2-x_extremite1, myIncluder.y_extremite1, myIncluder.y_extremite2-y_extremite1);
		//x_ins = myIncluder.x_intersection;
		//y_ins = myIncluder.y_intersection;
	//}
	//else
	if(d1_ins != myIncluder.distance1)
	{
		if(d1_ins < 0 || d1_ins >= myIncluder.svg_norme(myIncluder.x_extremite1-myIncluder.x_extremite2, myIncluder.y_extremite1-myIncluder.y_extremite2))
		{
			alert("distance illegale");
			myIncluder.svg_fin_insertion_point_cote();
			return;
		}
		x_ins = myIncluder.x_extremite1 + d1_ins * (myIncluder.x_extremite2-x_extremite1)/myIncluder.svg_norme(x_extremite2-x_extremite1, myIncluder.y_extremite2-myIncluder.y_extremite1);
		y_ins = myIncluder.y_extremite1 + d1_ins * (myIncluder.y_extremite2-y_extremite1)/myIncluder.svg_norme(myIncluder.x_extremite2-myIncluder.x_extremite1, y_extremite2-y_extremite1);
	}
	else
	if(d2_ins != myIncluder.distance2)
	{
		if(d2_ins<0 || d2_ins>=myIncluder.svg_norme(myIncluder.x_extremite1-myIncluder.x_extremite2, myIncluder.y_extremite1-myIncluder.y_extremite2))
		{
			alert("distance illegale");
			myIncluder.svg_fin_insertion_point_cote();
			return;
		}
		x_ins = myIncluder.x_extremite2 + d2_ins * (myIncluder.x_extremite1-x_extremite2)/myIncluder.svg_norme(x_extremite2-x_extremite1, myIncluder.y_extremite2-myIncluder.y_extremite1);
		y_ins = myIncluder.y_extremite2 + d2_ins * (myIncluder.y_extremite1-y_extremite2)/myIncluder.svg_norme(myIncluder.x_extremite2-myIncluder.x_extremite1, y_extremite2-y_extremite1);
	}

  	//alert(x_ins, y_ins);
	//myIncluder.svg_insertion_point_ssilot(myIncluder.x_extremite1, myIncluder.y_extremite1, x_ins, y_ins);//bug corrige
	//myIncluder.LISTE_POINTS[myIncluder.POS_LISTE_POINTS++] = x_ins;
	//myIncluder.LISTE_POINTS[myIncluder.POS_LISTE_POINTS++] = y_ins;
	//myIncluder.mode = "select_ssilot";

	//if(myIncluder.mode != "perpendiculaire")
	//{
	//  alert("operation illegale");
	//  return;
	//}

	var l = myIncluder.LISTE_POINTS_SVG;
	var i;
	var p;
	var no_ssilot = myIncluder.svg_extraire_no();

	p = 0;
	while(l[no_ssilot][p] != undefined)
	{
		i = 0;
		while(l[no_ssilot][p][i+3] != undefined)
		{
			myIncluder.svg_intersection(l[no_ssilot][p][i], l[no_ssilot][p][i+2]-l[no_ssilot][p][i], l[no_ssilot][p][i+1], l[no_ssilot][p][i+3]-l[no_ssilot][p][i+1], myIncluder.x_projete2, -1, myIncluder.y_projete2, (myIncluder.x_extremite2-myIncluder.x_extremite1)/(myIncluder.y_extremite2-myIncluder.y_extremite1));

			if(myIncluder.svg_est_nul(myIncluder.svg_norme(myIncluder.x_intersection-l[no_ssilot][p][i], myIncluder.y_intersection-l[no_ssilot][p][i+1])+svg_norme(x_intersection-l[no_ssilot][p][i+2], y_intersection-l[no_ssilot][p][i+3])-svg_norme(l[no_ssilot][p][i]-l[no_ssilot][p][i+2], l[no_ssilot][p][i+1]-l[no_ssilot][p][i+3])))
			{
				//alert(myIncluder.x_intersection+', '+myIncluder.y_intersection);
				myIncluder.svg_insertion_point_ssilot(l[no_ssilot][p][i+2], l[no_ssilot][p][i+3], myIncluder.x_intersection, myIncluder.y_intersection);
				//myIncluder.LISTE_POINTS[myIncluder.POS_LISTE_POINTS++] = myIncluder.x_intersection;
				//myIncluder.LISTE_POINTS[myIncluder.POS_LISTE_POINTS++] = myIncluder.y_intersection;
			}
			i += 2;
		}

		//myIncluder.svg_intersection(l[no_ssilot][p][i], l[no_ssilot][p][0]-l[no_ssilot][p][i], l[no_ssilot][p][i+1], l[no_ssilot][p][1]-l[no_ssilot][p][i+1], myIncluder.x_projete2, myIncluder.x_extremite2-myIncluder.x_extremite1, myIncluder.y_projete2, myIncluder.y_extremite2-myIncluder.y_extremite1);
		//if(myIncluder.svg_est_nul(myIncluder.svg_norme(myIncluder.x_intersection-l[no_ssilot][p][i], myIncluder.y_intersection-l[no_ssilot][p][i+1])+svg_norme(x_intersection-l[no_ssilot][p][0], y_intersection-l[no_ssilot][p][1])-svg_norme(l[no_ssilot][p][i]-l[no_ssilot][p][0], l[no_ssilot][p][i+1]-l[no_ssilot][p][1])))
		myIncluder.svg_intersection(l[no_ssilot][p][i], l[no_ssilot][p][0]-l[no_ssilot][p][i], l[no_ssilot][p][i+1], l[no_ssilot][p][1]-l[no_ssilot][p][i+1], myIncluder.x_projete2, -1, myIncluder.y_projete2, (myIncluder.x_extremite2-myIncluder.x_extremite1)/(myIncluder.y_extremite2-myIncluder.y_extremite1));

		if(myIncluder.svg_est_nul(myIncluder.svg_norme(myIncluder.x_intersection-l[no_ssilot][p][i], myIncluder.y_intersection-l[no_ssilot][p][i+1])+svg_norme(x_intersection-l[no_ssilot][p][0], y_intersection-l[no_ssilot][p][1])-svg_norme(l[no_ssilot][p][i]-l[no_ssilot][p][0], l[no_ssilot][p][i+1]-l[no_ssilot][p][1])))
		{
			//alert("boucle");
			//alert(myIncluder.x_intersection+', '+myIncluder.y_intersection);
			myIncluder.svg_insertion_point_ssilot(l[no_ssilot][p][0], l[no_ssilot][p][1], myIncluder.x_intersection, myIncluder.y_intersection);
			//myIncluder.LISTE_POINTS[myIncluder.POS_LISTE_POINTS++] = myIncluder.x_intersection;
			//myIncluder.LISTE_POINTS[myIncluder.POS_LISTE_POINTS++] = myIncluder.y_intersection;
		}
		p++;
	}
	//myDocument.getElementById("ligne1").setAttribute("stroke-width", 0);
	//myDocument.getElementById("ligne2").setAttribute("stroke-width", 0);
	//effacer_lignes();
	myIncluder.svg_restaure_ancienne_toolbar();
	myIncluder.mode = myIncluder.ancien_mode;
	myIncluder.ancien_mode = "select_ssilot";
	//alert("mode="+mode+"\nancien_mode="+ancien_mode);
	//myIncluder.mode = "select_ssilot";
}



/*

  var l = svg_extraire_points_polygone();

  var i = 0;

  while(l[i+3] != undefined)

  {

    myIncluder.svg_intersection(l[i], l[i+2]-l[i], l[i+1], l[i+3]-l[i+1], myIncluder.x_projete2, -1, myIncluder.y_projete2, (myIncluder.x_extremite2-myIncluder.x_extremite1)/(myIncluder.y_extremite2-myIncluder.y_extremite1));

    if(myIncluder.svg_est_nul(myIncluder.svg_norme(myIncluder.x_intersection-l[i], myIncluder.y_intersection-l[i+1])+svg_norme(x_intersection-l[i+2], y_intersection-l[i+3])-svg_norme(l[i]-l[i+2], l[i+1]-l[i+3])))

    {

      //alert(myIncluder.x_intersection+', '+myIncluder.y_intersection);

      myIncluder.svg_insertion_point_ssilot(l[i+2], l[i+3], myIncluder.x_intersection, myIncluder.y_intersection);

      myIncluder.LISTE_POINTS[myIncluder.POS_LISTE_POINTS++] = myIncluder.x_intersection;

      myIncluder.LISTE_POINTS[myIncluder.POS_LISTE_POINTS++] = myIncluder.y_intersection;

    }

    i += 2;

  }

  myIncluder.svg_intersection(l[i], l[0]-l[i], l[i+1], l[1]-l[i+1], myIncluder.x_projete2, myIncluder.x_extremite2-myIncluder.x_extremite1, myIncluder.y_projete2, myIncluder.y_extremite2-myIncluder.y_extremite1);

  if(myIncluder.svg_est_nul(myIncluder.svg_norme(myIncluder.x_intersection-l[i], myIncluder.y_intersection-l[i+1])+svg_norme(x_intersection-l[0], y_intersection-l[1])-svg_norme(l[i]-l[0], l[i+1]-l[1])))

  {

    //alert("boucle");

    //alert(myIncluder.x_intersection+', '+myIncluder.y_intersection);

    myIncluder.svg_insertion_point_ssilot(l[0], l[1], myIncluder.x_intersection, myIncluder.y_intersection);

    myIncluder.LISTE_POINTS[myIncluder.POS_LISTE_POINTS++] = myIncluder.x_intersection;

    myIncluder.LISTE_POINTS[myIncluder.POS_LISTE_POINTS++] = myIncluder.y_intersection;

  }

*/



/*****************************************************************************/
/****************** CREATION D'UN SOUS-ILOT CIRCULAIRE ***********************/
/*****************************************************************************/



function svg_creation_cercle()
{
	myIncluder.svg_toolbar_outils();
	myDocument.addEventListener("click", myIncluder.svg_creation_cercle2, true);
	myIncluder.mode = "creation_cercle";
}



function svg_creation_cercle2(evt)
{
	if(myIncluder.mode == "creation_cercle" && myIncluder.svg_appartient_cadre(evt.clientX, evt.clientY))
	{
		//alert("Coordonnees="+myIncluder.svg_conversion_x(evt.clientX)+','+myIncluder.svg_conversion_y(evt.clientY));
		var no_ssilotcurr = myIncluder.svg_extraire_no();
		var l = myIncluder.LISTE_POINTS_SVG;
		var xclic = myIncluder.svg_conversion_x(evt.clientX);
		var yclic = myIncluder.svg_conversion_y(evt.clientY);
		var xt = l[no_ssilotcurr][0][0];
		var yt = l[no_ssilotcurr][0][1];
		var poscurr = 0;
		var distcurr = myIncluder.svg_norme(xt-xclic, yt-yclic);
		var dt;
		var c;
		var p;
		var rayon = 50;

		myIncluder.distance1 = myIncluder.svg_norme(myIncluder.svg_conversion_x(evt.clientX)-myIncluder.X_CENTRE, myIncluder.svg_conversion_y(evt.clientY)-myIncluder.Y_CENTRE);
		myIncluder.angle0 = myIncluder.svg_angle(myIncluder.svg_conversion_x(evt.clientX), myIncluder.svg_conversion_y(evt.clientY));
		myIncluder.prec = 10;
		myIncluder.angle_debut = 0;
		myIncluder.angle_fin = 0;

		DialogueFlottants("Coordonnées du centre du cercle", myIncluder.svg_cree_cercle, svg_cree_cercle, 0, 0, new stChampFlottant("X", myIncluder.svg_conversion_x(evt.clientX)), new stChampFlottant("Y", myIncluder.svg_conversion_y(evt.clientY)), new stChampFlottant("distance", myIncluder.distance1), new stChampFlottant("angle", myIncluder.angle0), new stChampFlottant("rayon", rayon), new stChampFlottant("angle début", angle_debut), new stChampFlottant("angle fin", angle_fin), new stChampFlottant("précision", prec));
	}
}



function svg_cree_cercle(x, y, d, a, r, ad, af, pr)
{
	var query;
	var result;
	var enumerator;
	var no_ssilotcurr = myIncluder.svg_extraire_no();
	var cercle;
	var cercle_coupe;
	var poly_cercle;
	var index1, index2;
	var x_ins, y_ins;

	//alert(x+''+"\n"+y+''+"\n"+d+''+"\n"+a+''+"\n");
	if((myIncluder.angle0 != a) || (myIncluder.distance1 != d))//si l'angle ou la distance sont differents alors on insere a partir de l'angle et de la distance
	{
		//alert("cas1");
		x_ins = myIncluder.X_CENTRE + d * Math.cos(a * myIncluder.PI/180);
		y_ins = myIncluder.Y_CENTRE + d * Math.sin(a * myIncluder.PI/180);
	}
	else//sinon insertion à partir des coordonnees absolues
	{
		//alert("cas2");
		x_ins = x;
		y_ins = y;
	}

	/*if(myIncluder.VER_POINT == 0)
	{
		myIncluder.svg_cherche_point_plus_pres(myIncluder.svg_conversion_x(x_ins), myIncluder.svg_conversion_y(y_ins));
		x_ins = myIncluder.LISTE_POINTS_SVG[myIncluder.p1][myIncluder.p2][myIncluder.p3];
		y_ins = myIncluder.LISTE_POINTS_SVG[myIncluder.p1][myIncluder.p2][myIncluder.p3+1];
	}*/

	if(myIncluder.VER_POINT == 1)//cas où on ne verrouille pas sur les points existants $$$
	{
		myIncluder.svg_cherche_point_plus_pres(x_ins, y_ins);
		x_ins = myIncluder.LISTE_POINTS_SVG[myIncluder.p1][myIncluder.p2][myIncluder.p3];
		y_ins = myIncluder.LISTE_POINTS_SVG[myIncluder.p1][myIncluder.p2][myIncluder.p3+1];
	}

	//alert(x_ins+''+y_ins);
	//creation du cercle

	//query = "select agriassvg(AgriCercle("+x_ins+","+y_ins+","+r+"));";

	if(ad == af%360)
	{
		query = "select agriassvg(AgriCercle("+x_ins+","+y_ins+","+r+","+pr+"));";
	}
	else
	{
		query = "select agriassvg(AgriPortion("+x_ins+","+y_ins+","+r+","+ad+","+af+","+pr+"));";
	}

	//alert('requete='+query);
	result = pgsql_query(query);
	//alert('resultat='+result);
	enumerator = result.enumerate();
	enumerator.next();
	cercle = myIncluder.svg_extrait_points_path_chaine(enumerator.getVariant(0));
	//cercle = myIncluder.svg_inverse_signe(enumerator.getVariant(0));
	//alert("cercle a creer="+myIncluder.svg_inverse_signe(enumerator.getVariant(0)));
	/*var cercle = myIncluder.carte_textgeom_to_svgpoly(myIncluder.svg_inverse_signe(enumerator.getVariant(0)));//*** ajouter le z à la fin et supprimer le dernier point ***
	alert("cercle="+cercle);
	alert("creation de la requete, cercle="+myIncluder.svg_svg2geometry(cercle)+"/polygone="+svg_svg2geometry(myIncluder.LISTE_POINTS_SVG[no_ssilotcurr]));
	query = "select assvg(Difference(GeomFromText('"+myIncluder.svg_svg2geometry(myIncluder.LISTE_POINTS_SVG[no_ssilotcurr])+"'), GeomFromText('"+svg_svg2geometry(cercle)+"')));";*/
	//var poly1 = myIncluder.svg_extrait_points_path(myIncluder.svg_inverse_signe(myIncluder.carte_textgeom_to_svgpoly(enumerator.getVariant(0))));
	//cercle_geom = myIncluder.svg_extrait_points_path2(myIncluder.carte_textgeom_to_svgpoly(enumerator.getVariant(0)));//remplacer par quand le probleme de l'extraction des points sera à jour
	//alert("1="+enumerator.getVariant(0));
	//alert("2="+myIncluder.svg_extrait_points_path2(enumerator.getVariant(0)));
	//alert("3="+myIncluder.svg_svg2geometry(myIncluder.svg_extrait_points_path2(enumerator.getVariant(0))));
	//creation du polygone entourant le cercle
	query = "select agriassvg(si_trace), si_numero from AgriDifference("+myIncluder.CONVERSION_INDEXES[myIncluder.svg_extraire_no(no_ssilotcurr)]+", GeomFromText('"+myIncluder.svg_svg2geometry(cercle)+"'), '"+current_date()+"');";
	//alert('requete='+query);
	//myDocument.getElementById("dlg1").value = query;
	result = pgsql_query(query);
	//alert('resultat='+result);
	enumerator = result.enumerate();
	enumerator.next();
	poly_cercle = myIncluder.svg_extrait_points_path_chaine(enumerator.getString(0));
	index1 = enumerator.getInt(1);
	enumerator.next();
	cercle_coupe = myIncluder.svg_extrait_points_path_chaine(enumerator.getString(0));
	index2 = enumerator.getInt(1);
	//alert(enumerator.getInt(1));
	//alert("cercle a creer="+myIncluder.svg_inverse_signe(enumerator.getVariant(0)));
	//poly_cercle = myIncluder.svg_inverse_signe(enumerator.getVariant(0));
	//var poly_cercle = myIncluder.svg_inverse_signe(enumerator.getVariant(0));
/*	query = "select agriassvg(Intersection(GeomFromText('"+myIncluder.svg_svg2geometry(myIncluder.LISTE_POINTS_SVG[no_ssilotcurr])+"'), GeomFromText('"+svg_svg2geometry(cercle)+"')));";
	//alert('requete='+query);
	myDocument.getElementById("dlg2").value = query;
	result = pgsql_query(query);
	//alert('resultat='+result);
	enumerator = result.enumerate();
	enumerator.next();
	cercle_coupe = enumerator.getVariant(0);
	//cercle = myIncluder.svg_inverse_signe(enumerator.getVariant(0));
*/	myIncluder.svg_toolbar_defaut();
	//myIncluder.svg_creer_polygones2(poly_cercle, cercle_coupe, index1, index2);
	//creer le cercle et enlever son intersection avec le polygone de base de ce polygone
	svg_separe_blocs(index1);
	myIncluder.carte_rafraichir_polygones();
}


function svg_separe_blocs(no_ssilot)//à appeler après un découpage pour éviter d'avoir des sous_ilots composés de plusieurs blocs
{
	//myIncluder.ssilotselect = "ssilot"+index_inverse(no_ssilot);//
	var query = "select AgriAssvg(si_trace), si_numero from AgriGeneration("+no_ssilot+")";
	var result = pgsql_query(query);

	if(result.rowCount == 0) return;//évite de recharger la base à chaque fois

	/*var enumerator = result.enumerate();
	enumerator.next();
	var poly1 = myIncluder.svg_extrait_points_path_chaine(enumerator.getString(0));
	var index1 = enumerator.getInt(1);
	enumerator.next();
	myIncluder.svg_creer_polygones2(poly1, myIncluder.svg_extrait_points_path_chaine(enumerator.getString(0)), index1, enumerator.getInt(1));*/
	
	myIncluder.carte_rafraichir_polygones();
}



/*function svg_inverse_signe(path)//inverse le signe des ordonnées du path en argument
{
	//alert("path="+path);
	var i = 0;
	var path_retour = '';
	var moins = false;

	while(path[i] != undefined)
	{
		if(path[i] == ' ')
		{
			if(moins)
			{
				path_retour += ' -';
				i++;
			}
			moins = !moins;
		}
		if(path[i] == 'M')
		{
			moins = false;
		}
		path_retour += path[i];
		i++;
	}
	alert(path_retour);
	return path_retour;
}*/



function svg_inverse_signe(path)//inverse le signe des ordonnées du path en argument
{

	var i = 0;
	var path_retour = '';

	while(path[i] != undefined)
	{
		if(path[i] == ',')
		{
			path_retour += ',-';
			i++;
		}
		path_retour += path[i];
		i++;
	}

	alert(path_retour);
	return path_retour;

}



/*****************************************************************************/
/**************************** DETOURAGE GENERIQUE ****************************/
/*****************************************************************************/



function svg_detoure()
{
	if(myIncluder.mode != "select_ssilot")
	{
		alert("erreur : vous devez etre en mode\n selection pour effectuer cette operation");
		return;
	}

	myIncluder.mode = "detourage";
	myIncluder.LISTE_POINTS_SVG[0] = new Array(1);
	myIncluder.LISTE_POINTS_SVG[0][0] = new Array(myIncluder.TAILLE_LISTES);
	myIncluder.svg_creer_liste_points_temporaires();
	myIncluder.pos0 = 0;
	myIncluder.svg_toolbar_detourage();
}



function svg_fin_detoure()
{
	var poly1;
	var poly2;
	var index1;
	var index2;
	var no_ssilotcurr = myIncluder.svg_extraire_no();
	//poly1 = myIncluder.LISTE_POINTS_SVG[0];

	if(!myIncluder.svg_verifie_cycles(myIncluder.LISTE_POINTS_SVG[0]))
	{
		alert("erreur : decoupage incorrect (ligne de decoupage avec des croisements), operation annulee");
		myIncluder.mode = "select_ssilot";
		//myIncluder.svg_desalloue_points_supplementaires();
		//myIncluder.svg_supprimer_liste_points_temporaires();
		myIncluder.svg_annuler();
		return;
	}

	myIncluder.svg_supprimer_liste_points_temporaires();
	query = "select agriassvg(si_trace), si_numero from AgriDecoupe("+myIncluder.svg_no_ssilot_base()+", GeomFromText('"+myIncluder.svg_svg2geometry(myIncluder.LISTE_POINTS_SVG[no_ssilotcurr])+"'), GeomFromText('"+svg_svg2geometry(myIncluder.LISTE_POINTS_SVG[0])+"'), '"+current_date+"');";
	//alert('requete='+query);
	//myDocument.getElementById("dlg1").value = query;
	result = pgsql_query(query);
	//alert('resultat='+result);
	enumerator = result.enumerate();
	enumerator.next();
	//alert(enumerator.getVariant(0));
	//	myDocument.getElementById("dlg2").value = enumerator.getString(0);
	var temp = myIncluder.carte_textgeom_to_svgpoly(enumerator.getString(0));

	//alert(temp);
	index1 = enumerator.getInt(1);
	//myIncluder.svg_ecrit_conversion_indexes(no_ssilotcurr, enumerator.getInt(1));
	poly1 = myIncluder.svg_extrait_points_path_chaine(enumerator.getString(0));
/*	//alert("poly1="+poly1);
	//query = "select assvg(Difference(GeomFromText('"+myIncluder.svg_svg2geometry(myIncluder.LISTE_POINTS_SVG[no_ssilotcurr])+"'), GeomFromText('"+svg_svg2geometry(poly1)+"')));";
	query = "select agriassvg(Difference(GeomFromText('"+myIncluder.svg_svg2geometry(myIncluder.LISTE_POINTS_SVG[no_ssilotcurr])+"'), GeomFromText('"+svg_svg2geometry(myIncluder.svg_extrait_points_path2(enumerator.getVariant(0)))+"')));";
	//alert('requete='+query);
	myDocument.getElementById("dlg3").value = query;
	result = pgsql_query(query);
	//alert('resultat='+result);
	enumerator = result.enumerate();
	enumerator.next();
	//alert(enumerator.getVariant(0));
	myDocument.getElementById("dlg4").value = enumerator.getVariant(0);
	temp = myIncluder.carte_textgeom_to_svgpoly(enumerator.getVariant(0));
	poly2 = myIncluder.svg_extrait_points_path2(temp);
*/
	enumerator.next();

	var poly2 = myIncluder.svg_extrait_points_path_chaine(enumerator.getString(0));//carte_texttgeom_to_svgpoly

	//alert(poly2);
	//myIncluder.svg_ecrit_conversion_indexes(myIncluder.NB_OBJETS+1, enumerator.getInt(1));
	index2 = enumerator.getInt(1);

	query = "select AgriAssvg(si_trace), si_numero from AgriGeneration("+index2+")";
	result = pgsql_query(query);

/*	myIncluder.LISTE_POINTS_SVG[0][0][myIncluder.pos0] = LISTE_POINTS_SVG[0];//problème si on a un trou au milieu, utiliser la méthode précédente
	myIncluder.LISTE_POINTS_SVG[0][0][myIncluder.pos0+1] = LISTE_POINTS_SVG[1];
	poly2 = myIncluder.LISTE_POINTS_SVG[0][0];
	alert("poly1"+poly1);
	alert("poly2"+poly2);*/
	myIncluder.svg_toolbar_defaut();
	myIncluder.svg_supprime_points();
	//svg_supprime_points();
	//myIncluder.svg_creer_polygones2(poly1, poly2, index1, index2);
	myIncluder.carte_rafraichir_polygones();
}


function svg_fin_detoure_old()
{
	var poly1;
	var poly2;
	var no_ssilotcurr = myIncluder.svg_extraire_no();
	//poly1 = myIncluder.LISTE_POINTS_SVG[0];

	query = "select agriassvg(Difference(GeomFromText('"+myIncluder.svg_svg2geometry(myIncluder.LISTE_POINTS_SVG[no_ssilotcurr])+"'), GeomFromText('"+svg_svg2geometry(myIncluder.LISTE_POINTS_SVG[0])+"')));";
	//alert('requete='+query);
	//	myDocument.getElementById("dlg1").value = query;
	result = pgsql_query(query);
	//alert('resultat='+result);
	enumerator = result.enumerate();
	enumerator.next();
	//alert(enumerator.getVariant(0));
	//	myDocument.getElementById("dlg2").value = enumerator.getVariant(0);
	var temp = myIncluder.carte_textgeom_to_svgpoly(enumerator.getVariant(0));

	//alert(temp);
	poly1 = myIncluder.svg_extrait_points_path_chaine(temp);
	//alert("poly1="+poly1);
	//query = "select assvg(Difference(GeomFromText('"+myIncluder.svg_svg2geometry(myIncluder.LISTE_POINTS_SVG[no_ssilotcurr])+"'), GeomFromText('"+svg_svg2geometry(poly1)+"')));";
	query = "select agriassvg(Difference(GeomFromText('"+myIncluder.svg_svg2geometry(myIncluder.LISTE_POINTS_SVG[no_ssilotcurr])+"'), GeomFromText('"+svg_svg2geometry(myIncluder.svg_extrait_points_path_chaine(enumerator.getVariant(0)))+"')));";
	//alert('requete='+query);
	//	myDocument.getElementById("dlg3").value = query;
	result = pgsql_query(query);
	//alert('resultat='+result);
	enumerator = result.enumerate();
	enumerator.next();
	//alert(enumerator.getVariant(0));
	//	myDocument.getElementById("dlg4").value = enumerator.getVariant(0);
	temp = myIncluder.carte_textgeom_to_svgpoly(enumerator.getVariant(0));
	poly2 = myIncluder.svg_extrait_points_path_chaine(temp);
/*	myIncluder.LISTE_POINTS_SVG[0][0][myIncluder.pos0] = LISTE_POINTS_SVG[0];//problème si on a un trou au milieu, utiliser la méthode précédente
	myIncluder.LISTE_POINTS_SVG[0][0][myIncluder.pos0+1] = LISTE_POINTS_SVG[1];
	poly2 = myIncluder.LISTE_POINTS_SVG[0][0];
	alert("poly1"+poly1);
	alert("poly2"+poly2);*/
	myIncluder.svg_creer_polygones(poly1, poly2);
}



function svg_detoure_nouveau_point()
{
	svg_toolbar_outils();
	myDocument.addEventListener("click", myIncluder.svg_detoure_nouveau_point2, true);
	myIncluder.mode = "detoure_nouveau_pt";
}



function svg_detoure_nouveau_point2(evt)
{
	if(myIncluder.mode == "detoure_nouveau_pt" && myIncluder.svg_appartient_cadre(evt.clientX, evt.clientY))
	{
		var x, y;

		if(myIncluder.VER_POINT == 0)
		{
			x = myIncluder.svg_conversion_x(evt.clientX);
			y = myIncluder.svg_conversion_y(evt.clientY);
		}
		else
		{
			//alert("ok");
			//alert(myIncluder.LISTE_POINTS_SVG[1]);
			myIncluder.svg_cherche_point_plus_pres(myIncluder.svg_conversion_x(evt.clientX), myIncluder.svg_conversion_y(evt.clientY));//ppc =
			x = myIncluder.LISTE_POINTS_SVG[myIncluder.p1][myIncluder.p2][myIncluder.p3];//myIncluder.LISTE_POINTS[ppc];
			y = myIncluder.LISTE_POINTS_SVG[myIncluder.p1][myIncluder.p2][myIncluder.p3+1];//myIncluder.LISTE_POINTS[ppc+1];
		}

		/*myIncluder.distance1 = myIncluder.svg_norme(myIncluder.svg_conversion_x(evt.clientX)-myIncluder.X_CENTRE, myIncluder.svg_conversion_y(evt.clientY)-myIncluder.Y_CENTRE);
		myIncluder.angle0 = myIncluder.svg_angle(myIncluder.svg_conversion_x(evt.clientX), myIncluder.svg_conversion_y(evt.clientY));
		DialogueFlottants("Coordonnées du point", myIncluder.svg_detoure_affiche_nouveau_point, myIncluder.svg_detoure_insere_nouveau_point, 0, 0, new stChampFlottant("X", myIncluder.svg_conversion_x(evt.clientX)), new stChampFlottant("Y", myIncluder.svg_conversion_y(evt.clientY)), new stChampFlottant("distance", myIncluder.distance1), new stChampFlottant("angle", myIncluder.angle0));*/
		myIncluder.distance1 = myIncluder.svg_norme(x-myIncluder.X_CENTRE, y-myIncluder.Y_CENTRE);
		myIncluder.angle0 = myIncluder.svg_angle(x, y);
		DialogueFlottants("Coordonnées du point", myIncluder.svg_detoure_affiche_nouveau_point, myIncluder.svg_detoure_insere_nouveau_point, 0, 0, new stChampFlottant("X", x), new stChampFlottant("Y", y), new stChampFlottant("distance", myIncluder.distance1), new stChampFlottant("angle", myIncluder.angle0));
	}
}



function svg_detoure_affiche_nouveau_point(X, Y, D, A)
{
	var angle_ins = A;
	var distance_ins = D;
	var x_ins;
	var y_ins;
	//alert((myIncluder.angle0-angle_ins)+', '+(myIncluder.distance1-distance_ins));

	if((myIncluder.angle0 != angle_ins) || (myIncluder.distance1 != distance_ins))//si l'angle ou la distance sont differents alors on insere a partir de l'angle et de la distance
	{
		//alert("cas1");
		x_ins = myIncluder.X_CENTRE+distance_ins*Math.cos(angle_ins*myIncluder.PI/180);
		y_ins = myIncluder.Y_CENTRE+distance_ins*Math.sin(angle_ins*myIncluder.PI/180);
	}
	else//sinon insertion à partir des coordonnees absolues
	{
		//alert("cas2");
		x_ins = X;//parseFloat(myDocument.getElementById("dlg1").value);
		y_ins = Y;//parseFloat(myDocument.getElementById("dlg2").value);
	}
	myIncluder.svg_supprimer_point_detourage();
	myIncluder.svg_creer_point_detourage(x_ins, y_ins);
}



function svg_detoure_insere_nouveau_point(X, Y, D, A)
{
	if(myIncluder.mode != "detoure_nouveau_pt")
	{
		alert("erreur : vous devez etre en mode\n detourage pour effectuer cette operation");
		return;
	}

	myDocument.removeEventListener("click", myIncluder.svg_detoure_nouveau_point2, true);
	myIncluder.svg_supprimer_point_detourage();

	var angle_ins = A;
	var distance_ins = D;
	var x_ins;
	var y_ins;
	//alert((myIncluder.angle0-angle_ins)+', '+(myIncluder.distance1-distance_ins));

	if((myIncluder.angle0 != angle_ins) || (myIncluder.distance1 != distance_ins))//si l'angle ou la distance sont differents alors on insere a partir de l'angle et de la distance
	{
		//alert("cas1");
		x_ins = myIncluder.X_CENTRE + distance_ins * Math.cos(angle_ins*myIncluder.PI/180);
		y_ins = myIncluder.Y_CENTRE + distance_ins * Math.sin(angle_ins*myIncluder.PI/180);
	}
	else//sinon insertion à partir des coordonnees absolues
	{
		//alert("cas2");
		x_ins = X;//parseFloat(myDocument.getElementById("dlg1").value);
		y_ins = Y;//parseFloat(myDocument.getElementById("dlg2").value);
	}

	var query = "select Within(GeomFromText('"+"POINT("+x_ins+" "+y_ins+")"+"'),GeomFromText('"+myIncluder.svg_svg2geometry(myIncluder.LISTE_POINTS_SVG[myIncluder.svg_extraire_no()])+"'));";
	//alert('requete='+query);
	var result = pgsql_query(query);
	//alert('resultat='+result);
	var enumerator = result.enumerate();

	enumerator.next();
	//alert(enumerator.getVariant(0));

	if(enumerator.getVariant(0) != true)
	{
		alert("erreur : point a l'exterieur du sous-ilot selectionne");
		myIncluder.svg_toolbar_detourage();
		return;
	}

	myIncluder.svg_creer_point(x_ins, y_ins);
	myIncluder.LISTE_POINTS_SVG[0][0][myIncluder.pos0++] = x_ins;
	myIncluder.LISTE_POINTS_SVG[0][0][myIncluder.pos0++] = y_ins;
	myIncluder.svg_toolbar_detourage();
	myIncluder.mode = "detourage";
	myIncluder.svg_creer_point_temporaire(x_ins, y_ins);
}



function svg_detoure_chemin_existant()
{
	myIncluder.svg_toolbar_outils();

	myDocument.addEventListener("click", myIncluder.svg_detoure_chemin_existant2, true);
	myIncluder.etat = 0;//nombre de points entrés
	myIncluder.mode = "detoure_chemin_existant";
	myIncluder.listeTemp = new Array(6);
	myIncluder.compteurLT = 0;
}



function svg_detoure_chemin_existant2(evt)
{
  if(myIncluder.mode == "detoure_chemin_existant" && myIncluder.svg_appartient_cadre(evt.clientX, evt.clientY))
  {
	var no_ssilotcurr = myIncluder.svg_extraire_no();
    //var l = myIncluder.LISTE_POINTS_SVG[no_ssilot];
    var l = myIncluder.LISTE_POINTS_SVG;
    var xclic = myIncluder.svg_conversion_x(evt.clientX);
    var yclic = myIncluder.svg_conversion_y(evt.clientY);
    //alert("l="+l);
    var xt = l[no_ssilotcurr][0][0];
    var yt = l[no_ssilotcurr][0][1];
    var poscurr = 0;
	var locale_cyclecurr = 0;
    var distcurr = myIncluder.svg_norme(xt-xclic, yt-yclic);
    var dt;
    var c;
	var p;

	p = 0;

	//alert(no_ssilotcurr);
	while(l[no_ssilotcurr][p] != undefined)
	{
		c = 0;

		while(l[no_ssilotcurr][p][c] != undefined)
		{
			//alert(p+'\n'+c);
			xt = l[no_ssilotcurr][p][c++];
			yt = l[no_ssilotcurr][p][c++];
			dt = myIncluder.svg_norme(xt-xclic, yt-yclic);

			if(dt < distcurr)
			{
				distcurr = dt;
				poscurr = c-2;
				locale_cyclecurr = p;
				//alert(dt);
			}
		}
		p++;
	}

	//vérification de l'appartenance au même myIncluder.cycle
	myIncluder.etat++;
	//alert(distcurr);
	//insertion_point(l[poscurr], l[poscurr+1]);
	//alert("point selectionne:"+l[poscurr]+' '+l[poscurr+1]);

	myIncluder.svg_creer_curseur1();
	myDocument.getElementById("curseur1").setAttribute("r", myIncluder.TAILLE_SELECT*myIncluder.RAYON_POINT/myIncluder.scal);
	myDocument.getElementById("curseur1").setAttribute("cx", l[no_ssilotcurr][locale_cyclecurr][poscurr]);
	myDocument.getElementById("curseur1").setAttribute("cy", l[no_ssilotcurr][locale_cyclecurr][poscurr+1]);
	setTimeout("svg_supprimer_curseur1();", 250);

	myIncluder.listeTemp[myIncluder.compteurLT++] = l[no_ssilotcurr][locale_cyclecurr][poscurr];
	myIncluder.listeTemp[myIncluder.compteurLT++] = l[no_ssilotcurr][locale_cyclecurr][poscurr+1];

	if(myIncluder.etat == 1)
	{
		myIncluder.svg_creer_curseur3();
		myIncluder.svg_ajuster_curseur3(myIncluder.listeTemp[myIncluder.compteurLT-2], myIncluder.listeTemp[myIncluder.compteurLT-1]);
	}
	else if(myIncluder.etat == 2)
	{
		myIncluder.svg_creer_curseur4();
		myIncluder.svg_ajuster_curseur4(myIncluder.listeTemp[myIncluder.compteurLT-2], myIncluder.listeTemp[myIncluder.compteurLT-1]);
	}

    if(myIncluder.etat == 3)
    {
		myDocument.removeEventListener("click", myIncluder.svg_detoure_chemin_existant2, true);

		myIncluder.svg_supprimer_curseur3();
		myIncluder.svg_supprimer_curseur4();

		if(myIncluder.listeTemp[0] == listeTemp[2] && listeTemp[1] == listeTemp[3])//cas où les points 1 et 2 sont identiques
		{
			l[0][0][myIncluder.pos0++] = myIncluder.listeTemp[0];
			l[0][0][myIncluder.pos0++] = myIncluder.listeTemp[1];
			l[0][0][myIncluder.pos0++] = myIncluder.listeTemp[4];
			l[0][0][myIncluder.pos0++] = myIncluder.listeTemp[5];
			myIncluder.svg_creer_point(myIncluder.listeTemp[0], myIncluder.listeTemp[1]);
			myIncluder.svg_creer_point(myIncluder.listeTemp[4], myIncluder.listeTemp[5]);
			myIncluder.svg_creer_point_temporaire(myIncluder.listeTemp[0], myIncluder.listeTemp[1]);
			myIncluder.svg_creer_point_temporaire(myIncluder.listeTemp[4], myIncluder.listeTemp[5]);
			//alert(myIncluder.LISTE_POINTS_SVG[0][0]);
		}
		else
		if(myIncluder.listeTemp[2] == listeTemp[4] && listeTemp[3] == listeTemp[5])// cas où les points 2 et 3 sont identiques
		{
			l[0][0][myIncluder.pos0++] = myIncluder.listeTemp[0];
			l[0][0][myIncluder.pos0++] = myIncluder.listeTemp[1];
			l[0][0][myIncluder.pos0++] = myIncluder.listeTemp[4];
			l[0][0][myIncluder.pos0++] = myIncluder.listeTemp[5];
			myIncluder.svg_creer_point(myIncluder.listeTemp[0], myIncluder.listeTemp[1]);
			myIncluder.svg_creer_point(myIncluder.listeTemp[4], myIncluder.listeTemp[5]);
			myIncluder.svg_creer_point_temporaire(myIncluder.listeTemp[0], myIncluder.listeTemp[1]);
			myIncluder.svg_creer_point_temporaire(myIncluder.listeTemp[4], myIncluder.listeTemp[5]);
			//alert(myIncluder.LISTE_POINTS_SVG[0][0]);
		}
		else
		{
			var i = 0;
			var j = 0;
			var i1 = 0;
			var j1 = 0;
			var j2 = 0;

			while(l[no_ssilotcurr][i] != undefined)
			{
				j = 0;

				while(l[no_ssilotcurr][i][j] != undefined)
				{
					if(l[no_ssilotcurr][i][j] == myIncluder.listeTemp[0] && l[no_ssilotcurr][i][j+1] == myIncluder.listeTemp[1])
					{
						i1 = i;
						j1 = j;
					}
					j +=2 ;
				}
				i++;
			}

			var jmax = 0;
			//alert(l[no_ssilotcurr]);
			//alert(myIncluder.listeTemp);

			while(l[no_ssilotcurr][i1][jmax] != undefined) jmax++;
			jmax--;
			//alert(jmax);
			l[0][0][myIncluder.pos0++] = myIncluder.listeTemp[0];
			l[0][0][myIncluder.pos0++] = myIncluder.listeTemp[1];
			myIncluder.svg_creer_point(myIncluder.listeTemp[0], myIncluder.listeTemp[1]);
			myIncluder.svg_creer_point_temporaire(myIncluder.listeTemp[0], myIncluder.listeTemp[1]);
			j = j1 + 2;

			while(l[no_ssilotcurr][i1][j] != l[no_ssilotcurr][i1][j1] || l[no_ssilotcurr][i1][j+1] != l[no_ssilotcurr][i1][j1+1])
			{
				if(l[no_ssilotcurr][i1][j] == myIncluder.listeTemp[4] && l[no_ssilotcurr][i1][j+1] == myIncluder.listeTemp[5])//cas où les points ne sont pas dans l'ordre de parcours de la liste
				{
					//alert("dans l'ordre inverse");
					j = j1;

					while(l[no_ssilotcurr][i1][j] != myIncluder.listeTemp[4] || l[no_ssilotcurr][i1][j+1] != myIncluder.listeTemp[5])
					{
						l[0][0][myIncluder.pos0++] = l[no_ssilotcurr][i1][j];
						l[0][0][myIncluder.pos0++] = l[no_ssilotcurr][i1][j+1];
						myIncluder.svg_creer_point(l[no_ssilotcurr][i1][j], l[no_ssilotcurr][i1][j+1]);
						myIncluder.svg_creer_point_temporaire(l[no_ssilotcurr][i1][j], l[no_ssilotcurr][i1][j+1]);
						//alert("j="+j);
						//myIncluder.bip(l[no_ssilotcurr][i1][j], l[no_ssilotcurr][i1][j+1]);
						j -= 2;
						if(j < 0) j = jmax - 1;
					}
					//alert("break1="+l[0][0]);
					break;
				}
				else
				if(l[no_ssilotcurr][i1][j] == myIncluder.listeTemp[2] && l[no_ssilotcurr][i1][j+1] == myIncluder.listeTemp[3])//cas où les points sont dans l'ordre de parcours de la liste
				{
					//alert("dans l'ordre");
					j = j1;
					while(l[no_ssilotcurr][i1][j] != myIncluder.listeTemp[4] || l[no_ssilotcurr][i1][j+1] != myIncluder.listeTemp[5])
					{
						l[0][0][myIncluder.pos0++] = l[no_ssilotcurr][i1][j];
						l[0][0][myIncluder.pos0++] = l[no_ssilotcurr][i1][j+1];
						myIncluder.svg_creer_point(l[no_ssilotcurr][i1][j], l[no_ssilotcurr][i1][j+1]);
						myIncluder.svg_creer_point_temporaire(l[no_ssilotcurr][i1][j], l[no_ssilotcurr][i1][j+1]);
						//alert("j="+j);
						//myIncluder.bip(l[no_ssilotcurr][i1][j], l[no_ssilotcurr][i1][j+1]);
						j += 2;
						if(j >= jmax) j = 0;
					}
					//alert("break2="+l[0][0]);
					break;
				}
				j += 2;
				if(l[no_ssilotcurr][i1][j] == undefined) j = 0;
			}
			l[0][0][myIncluder.pos0++] = myIncluder.listeTemp[4];
			l[0][0][myIncluder.pos0++] = myIncluder.listeTemp[5];
			myIncluder.svg_creer_point(myIncluder.listeTemp[4], myIncluder.listeTemp[5]);
			myIncluder.svg_creer_point_temporaire(myIncluder.listeTemp[4], myIncluder.listeTemp[5]);
			//alert("pos0="+pos0);
			//alert(l[0][0]);
		}
		myIncluder.svg_toolbar_detourage();
		myIncluder.mode = "detourage";
	}
  }
}



function svg_affiche_points_bande(liste_points)
{
	var l = myIncluder.LISTE_POINTS_SVG;
	var no_ssilotcurr = svg_extraire_no();

	if(liste_points[0] == liste_points[2] && liste_points[1] == liste_points[3])//cas où les points 1 et 2 sont identiques
	{
		/*l[0][0][myIncluder.pos0++] = myIncluder.listeTemp[0];
		l[0][0][myIncluder.pos0++] = myIncluder.listeTemp[1];
		l[0][0][myIncluder.pos0++] = myIncluder.listeTemp[4];
		l[0][0][myIncluder.pos0++] = myIncluder.listeTemp[5];*/
		myIncluder.svg_creer_point_temporaire(liste_points[0], liste_points[1]);
		myIncluder.svg_creer_point_temporaire(liste_points[4], liste_points[5]);
		//alert(myIncluder.LISTE_POINTS_SVG[0][0]);
	}
	else
	if(liste_points[2] == liste_points[4] && liste_points[3] == liste_points[5])// cas où les points 2 et 3 sont identiques
	{
		/*l[0][0][myIncluder.pos0++] = myIncluder.listeTemp[0];
		l[0][0][myIncluder.pos0++] = myIncluder.listeTemp[1];
		l[0][0][myIncluder.pos0++] = myIncluder.listeTemp[4];
		l[0][0][myIncluder.pos0++] = myIncluder.listeTemp[5];*/
		myIncluder.svg_creer_point_temporaire(liste_points[0], liste_points[1]);
		myIncluder.svg_creer_point_temporaire(liste_points[4], liste_points[5]);
		//alert(myIncluder.LISTE_POINTS_SVG[0][0]);
	}
	else
	{

		var i = 0;
		var j = 0;
		var i1 = 0;
		var j1 = 0;
		var j2 = 0;

		while(l[no_ssilotcurr][i] != undefined)
		{
			j = 0;
			while(l[no_ssilotcurr][i][j] != undefined)
			{
				if(l[no_ssilotcurr][i][j] == liste_points[0] && l[no_ssilotcurr][i][j+1] == liste_points[1])
				{
					i1 = i;
					j1 = j;
				}
				j +=2 ;
			}
			i++;
		}

		var jmax = 0;
		//alert(l[no_ssilotcurr]);
		//alert(myIncluder.listeTemp);

		while(l[no_ssilotcurr][i1][jmax] != undefined) jmax++;
		jmax--;
		//alert(jmax);
		/*l[0][0][myIncluder.pos0++] = myIncluder.listeTemp[0];
		l[0][0][myIncluder.pos0++] = myIncluder.listeTemp[1];*/
		myIncluder.svg_creer_point_temporaire(liste_points[0], liste_points[1]);
		j = j1 + 2;

		while(l[no_ssilotcurr][i1][j] != l[no_ssilotcurr][i1][j1] || l[no_ssilotcurr][i1][j+1] != l[no_ssilotcurr][i1][j1+1])
		{
			if(l[no_ssilotcurr][i1][j] == liste_points[4] && l[no_ssilotcurr][i1][j+1] == liste_points[5])//cas où les points ne sont pas dans l'ordre de parcours de la liste
			{
				//alert("dans l'ordre inverse");
				j = j1;

				while(l[no_ssilotcurr][i1][j] != liste_points[4] || l[no_ssilotcurr][i1][j+1] != liste_points[5])
				{
					/*l[0][0][myIncluder.pos0++] = l[no_ssilotcurr][i1][j];
					l[0][0][myIncluder.pos0++] = l[no_ssilotcurr][i1][j+1];*/
					myIncluder.svg_creer_point_temporaire(l[no_ssilotcurr][i1][j], l[no_ssilotcurr][i1][j+1]);
					//alert("j="+j);
					//myIncluder.bip(l[no_ssilotcurr][i1][j], l[no_ssilotcurr][i1][j+1]);
					j -= 2;
					if(j < 0) j = jmax - 1;
				}
				//alert("break1="+l[0][0]);
				break;
			}
			else
			if(l[no_ssilotcurr][i1][j] == liste_points[2] && l[no_ssilotcurr][i1][j+1] == liste_points[3])//cas où les points sont dans l'ordre de parcours de la liste
			{
				//alert("dans l'ordre");
				j = j1;

				while(l[no_ssilotcurr][i1][j] != liste_points[4] || l[no_ssilotcurr][i1][j+1] != liste_points[5])
				{
					/*l[0][0][myIncluder.pos0++] = l[no_ssilotcurr][i1][j];
					l[0][0][myIncluder.pos0++] = l[no_ssilotcurr][i1][j+1];*/
					myIncluder.svg_creer_point_temporaire(l[no_ssilotcurr][i1][j], l[no_ssilotcurr][i1][j+1]);
					//alert("j="+j);
					//myIncluder.bip(l[no_ssilotcurr][i1][j], l[no_ssilotcurr][i1][j+1]);
					j += 2;
					if(j >= jmax) j = 0;
				}
				//alert("break2="+l[0][0]);
				break;
			}
			j += 2;
			if(l[no_ssilotcurr][i1][j] == undefined) j = 0;
		}

		/*l[0][0][myIncluder.pos0++] = myIncluder.listeTemp[4];
		l[0][0][myIncluder.pos0++] = myIncluder.listeTemp[5];*/
		myIncluder.svg_creer_point_temporaire(liste_points[4], liste_points[5]);
		//alert("pos0="+pos0);
		//alert(l[0][0]);
	}
}


/*****************************************************************************/
/************* CALCUL DE LA DISTANCE D'UN POINT A UN COTE ********************/
/*****************************************************************************/



function svg_distance_projete()
{
	//if(myIncluder.mode != "select_ssilot")
	//{
		//alert("erreur : vous devez etre en myIncluder.mode\n insertion de point sur perpendiculaire pour effectuer cette operation");
		//return;
	//}
	//if(myIncluder.mode != "select_ssilot" && myIncluder.ancien_mode != "select_ssilot")

	if(myIncluder.svg_bloque_outils())
	{
		alert("erreur : vous devez d'abord terminer l'operation en cours");
		return;
	}

	myIncluder.ancien_mode = mode;
	myIncluder.svg_toolbar_outils();
	myIncluder.svg_creer_lignes();
	//myIncluder.pointTemp = myDocument.getElementById("curseur1");
	//myDocument.getElementById("curseur1").setAttribute("r", 0);
	//alert(myDocument.getElementById("point"+myIncluder.NB_POINTS).getAttribute("cx"));
	myIncluder.svg_distance_projete2();
	myDocument.onmousemove = myIncluder.svg_maj_projete;
}



function svg_distance_projete2()
{
	//myDocument.getElementById("action").firstChild.nodeValue="inserer un point";
	myDocument.addEventListener("click", myIncluder.svg_distance_projete3, true);
	myIncluder.mode = "distance_projete";
}



function svg_distance_projete3(evt)
{
	if(myIncluder.mode == "distance_projete" && myIncluder.svg_appartient_cadre(evt.clientX, evt.clientY))
	{
		//alert("Coordonnees="+myIncluder.svg_conversion_x(evt.clientX)+','+myIncluder.svg_conversion_y(evt.clientY));
		myDocument.removeEventListener("click", myIncluder.svg_distance_projete3, true);
		//myDocument.getElementById("dlg4").value = myIncluder.distance2;
		myIncluder.svg_fin_distance_projete();
	}
}



function svg_fin_distance_projete()//selection de la distance a la parallele
{
	myDocument.onmousemove = myIncluder.svg_maj_coord_souris;
    //myDocument.getElementById("points").removeChild(myIncluder.pointTemp);
	//myIncluder.NB_POINTS--;
	//myDocument.getElementById("curseur1").setAttribute("r", 0);
	myDocument.addEventListener("click", myIncluder.svg_calcule_distance, true);
	myIncluder.mode = "distance_projete2";
}



function svg_calcule_distance(evt)
{
	var x;
	var y;

	if(myIncluder.mode == "distance_projete2" && myIncluder.svg_appartient_cadre(evt.clientX, evt.clientY))
	{
		myDocument.onmousemove = myIncluder.svg_maj_coord_souris;
		//myIncluder.x_projete2 = myIncluder.svg_conversion_x(evt.clientX);
		//myIncluder.y_projete2 = myIncluder.svg_conversion_y(evt.clientY);
		//myIncluder.distance1 = myIncluder.svg_norme(myIncluder.x_projete-myIncluder.svg_conversion_x(evt.clientX), myIncluder.y_projete-myIncluder.svg_conversion_y(evt.clientY));
		//myDocument.getElementById("dlg1").value = myIncluder.distance1;
		//insere_points_parallele(evt);
		myDocument.removeEventListener("click", myIncluder.svg_calcule_distance, true);

		if(myIncluder.VER_POINT == 0)
		{
			x = myIncluder.svg_conversion_x(evt.clientX);
			y = myIncluder.svg_conversion_y(evt.clientY);
		}
		else
		{
			//alert("ok");
			//alert(myIncluder.LISTE_POINTS_SVG[1]);
			myIncluder.svg_cherche_point_plus_pres(myIncluder.svg_conversion_x(evt.clientX), myIncluder.svg_conversion_y(evt.clientY));//ppc =
			x = myIncluder.LISTE_POINTS_SVG[myIncluder.p1][myIncluder.p2][myIncluder.p3];//myIncluder.LISTE_POINTS[ppc];
			y = myIncluder.LISTE_POINTS_SVG[myIncluder.p1][myIncluder.p2][myIncluder.p3+1];//myIncluder.LISTE_POINTS[ppc+1];
		}

		svg_intersection(myIncluder.x_extremite1,myIncluder.x_extremite2-myIncluder.x_extremite1, myIncluder.y_extremite1, myIncluder.y_extremite2-myIncluder.y_extremite1, x, -1, y, (myIncluder.x_extremite2-myIncluder.x_extremite1)/(myIncluder.y_extremite2-myIncluder.y_extremite1));

		//prompt("x=",x_intersection);
		//prompt("y=",y_intersection);
		prompt("distance", svg_norme(myIncluder.x_intersection-x, myIncluder.y_intersection-y));

		myIncluder.svg_effacer_lignes();
		myIncluder.svg_restaure_ancienne_toolbar();
		myIncluder.mode = myIncluder.ancien_mode;
		myIncluder.ancien_mode = "select_ssilot";
	}
}



function bip(x, y)
{
	myIncluder.svg_creer_curseur1();
	myDocument.getElementById("curseur1").setAttribute("r", myIncluder.TAILLE_SELECT*myIncluder.RAYON_POINT/myIncluder.scal);
	myDocument.getElementById("curseur1").setAttribute("cx", x);
	myDocument.getElementById("curseur1").setAttribute("cy", y);
	setTimeout("svg_supprimer_curseur1();", 250);

	//alert("");
}



function carte_randomcolor()
{
	var r = Math.random()*128;
	var v = Math.random()*128;
	var b = Math.random()*128;

  	r = Math.round(r + (255-r)*0.4);
	v = Math.round(v + (255-v)*0.4);
	b = Math.round(b + (255-b)*0.4);

	return ("#" + myIncluder.svg_RGB2Hex(r, v, b));
}



function svg_changer_mode_selection()
{
	myIncluder.mode_selection =  1 - mode_selection;
}



/**
 * Conversion d'un décimal en hexa
 *
 * @param   d       un nombre décimal entre 0 et 255
 * @return          l'equivalent de d en hexa sur un octet (en chaine)
 */

hexdig='0123456789ABCDEF';

function svg_Dec2Hex(d)
{
	return hexdig.charAt((d-(d%16))/16)+hexdig.charAt(d%16);
}



/**
 * Création d'une chaine définissant la couleur spécifiée par les trois entiers r, g et b
 *
 * @param   r,v,b   trois entier entre 0 et 255 pour définir les niveaux de rouge, vert et bleu
 * @return          une chaine qui concatène les trois code hexa de la forme : "RRVVBB"
 */

function svg_RGB2Hex(r,v,b)
{
	return myIncluder.svg_Dec2Hex(r)+svg_Dec2Hex(v)+svg_Dec2Hex(b);
}


//Cette fonction se charge de transformer un SVGPointList en Chaine de char
//Rem : La fonction prevue myIncluder.retourne une chaine de int et non pas une chaine de double

function svg_getSVGPointList_old(poly)
{
	var liste = "";
	var nb = poly.points.numberOfItems;
	var i = 0;

  	for (i=0; i<nb; i++)
	{
		liste = liste + poly.points.getItem(i).x + "," + poly.points.getItem(i).y + " ";
	}

	return(liste); 
}



function svg_extraire_liste_points(path)
{
	var liste = "";
	//alert(path.d);
	var nb = path.d.numberOfItems;
	var i = 0;  

	/*for (i = 0; i < nb; i++)
	{
		liste = liste + path.d.getItem(i).x + "," + path.d.getItem(i).y + " ";
	}*/

	return(liste);
}



function svg_pointSize()
{

	var taille = 0;

	if ( 4000 < taille_x )
	{
		taille = 0.003;
	}
	else if ( 4000 >= taille_x && taille_x > 1000 )
	{
		taille = 0.005;
	}
	else if ( 1000 >= taille_x )
	{
		taille = 0.008;
	}

	return taille*taille_x;
}



// INTERFACE SVG

function ClicSVG()

{

  ////var thetree = top.document.getElementById("tool_tree");

  //var label = thetree.view.getCellText(thetree.currentIndex, thetree.boxObject.columns.getColumnAt(0));

  ////var fonction = thetree.view.getCellText(thetree.currentIndex, thetree.boxObject.columns.getColumnAt(1));

  //var onselect = thetree.view.getCellText(thetree.currentIndex, thetree.boxObject.columns.getColumnAt(2));



  //alert( "[ " + col1 + " ] : " + col2 + " (" + col3 + ")");

  

/*

	//on récpuère l'outil en cours

	var toolbar=top.document.getElementById("nav-toolbar");

	// on connait le nom de l'outils grace au tag

	Idoutil=toolbar.getAttribute("tagName");



	//il faut se placer sur le myDocument SVG

	var FrameConcernee= top.frames["FrameTab"];

	var TheDoc = FrameConcernee.myDocument;



	if (Idoutil=='carte_zoomP')

		myIncluder.svg_super_zoom(1.4);

	else if (Idoutil=='carte_zoomM')

		myIncluder.svg_super_zoom(1/1.4);

	else if (Idoutil=='carte_dplt')

		myIncluder.svg_super_zoom(1);

	else if (Idoutil=='myIncluder.carte_centrervueG')

		myIncluder.carte_centrervue();

	*/



  //myIncluder.lancerOutil(fonction);

}

function lancerOutil(idOutil)
{
	//alert(idOutil);
	if(idOutil=='carte_zoomP')
		myIncluder.svg_super_zoom(1.4);
	else if(idOutil=='carte_zoomM')
		myIncluder.svg_super_zoom(1/1.4);
	else if(idOutil=='carte_dplt')
		myIncluder.svg_super_zoom(1);
	else if(idOutil=='carte_centrervueG')
		myIncluder.carte_centrervue();
}



function svg_creer_carre(x, y)//sert à tester la vitesse de création des objets SVG
{
	var point = myDocument.createElementNS("http://www.w3.org/2000/svg", "polygon");
	var group = myDocument.getElementById("points");

	point.setAttribute("class", "polygon");
	point.setAttribute("points", "0,0 x,0 x,y 0,y");
	point.setAttribute("fill", "black");
	point.setAttribute("fill-opacity", 1);//0.3

	group.appendChild(point);
	myDocument.getElementById("canvas").appendChild(group);
	myIncluder.svg_rafraichir_curseurs();//pour que les curseurs soient toujours affichés en priorité

}



function svg_tester_clavier()
{
	myDocument.addEventListener("keydown", svg_clavier, false);
}



function svg_clavier(evt)
{
	//alert(evt.keyCode);
	if(evt.keyCode == 16)
	{
		myIncluder.SHIFT = 2;
	}
}



/*****************************************************************************/
/***************** AFFICHAGE DU TEXTE SUR LES SOUS-ILOTS *********************/
/*****************************************************************************/



function svg_creer_droite_repere(x, y, dx, dy)
{
	var canvas = myDocument.getElementById("canvas");
	var group = myDocument.getElementById("droites_repere");
 	//var d = myDocument.createElementNS("http://www.w3.org/2000/svg", "line");
	var d = myDocument.getElementById("droite_repere0");

	//d.setAttribute("class", "line");
	//d.setAttribute("id", "droite_repere"+myIncluder.NB_DROITES_REPERE);
	myIncluder.NB_DROITES_REPERE++;
	/*alert("x="+x);
	alert("y="+y);
	alert("dx="+dx);
	alert("dy="+dy);*/
	d.setAttribute("x1", x-1000*dx);
	d.setAttribute("x2", y-1000*dy);
	d.setAttribute("y1", x+1000*dx);
	d.setAttribute("y2", y+1000*dy);
	//var x1 = x + 1000;
	//d.setAttribute("points", x+" "+y+","+x1+" "+y);
	//alert("points"+d.getAttribute("points"));
	d.setAttribute("stroke-width", 3/myIncluder.scal);
	d.setAttribute("stroke", "red");
	//group.appendChild(d);
	//canvas.appendChild(group);
	alert("ok");
}



/*
function svg_deplacer_texte(dx, dy)
{
	myDocument.getElementById("texte_ssilot").setAttribute("x", myDocument.getElementById("texte_ssilot").getAttribute("x")*1+dx);
	myDocument.getElementById("texte_ssilot").setAttribute("y", myDocument.getElementById("texte_ssilot").getAttribute("y")*1+dy);
}*/



function svg_deplacer_textes()
{
    if(!myIncluder.AFFICHER_TEXTES) return;

    var i;//rem : on ne suspend pas le redraw car cette fonction est appelée par la fonction svg_changer_pt_vue qui s'en charge
    var t1, t2;

    for(i = 0; i < myIncluder.NB_TEXTES; i++)
    {
	    t = myDocument.getElementById("texte"+i);
	    t.setAttribute("x", svg_conversion_texte_x(t.getAttribute("xCentre")*1));
	    t.setAttribute("y", svg_conversion_texte_y(t.getAttribute("yCentre")*1));
    }
}



function svg_creer_texte(x, y, text)
{
	var canvas = myDocument.getElementById("canvas");
	var group = myDocument.getElementById("texte");
	var group2 = myDocument.getElementById("ensemble");
	var t = myDocument.createElementNS("http://www.w3.org/2000/svg", "text");

	t.setAttribute("class", "text");
	t.setAttribute("id", "texte"+myIncluder.NB_TEXTES);
	t.setAttribute("x", svg_conversion_texte_x(x*1));
	t.setAttribute("y", svg_conversion_texte_y(y*1));
	//t.setAttribute("label", "xxx");
	/*t.setAttribute("width", "600cm");
	t.setAttribute("height", "8cm");*/
	t.setAttribute("font-size", "0.3");
	t.setAttribute("style", "fill: black;");
	t.setAttribute("xCentre", x);
	t.setAttribute("yCentre", y);
	//t.setEvent("onclic", null);

	if(myIncluder.CENTRAGE_TEXTE) t.setAttribute("text-anchor", "middle");

	/*group.appendChild(t);
	group2.appendChild(group);
	canvas.appendChild(group2);*/

	group.appendChild(t);
	canvas.appendChild(group);

	//canvas.appendChild(group);

	//if(text != undefined) alert(text);
	myIncluder.svg_ajouter_texte(text, "texte"+myIncluder.NB_TEXTES);

	//alert("texte"+myIncluder.NB_TEXTES);

	myIncluder.NB_TEXTES++;

	return;

	/*var canvas = myDocument.getElementById("canvas");
	var group = myDocument.getElementById("texte");
	var group2 = myDocument.getElementById("ensemble");
 	var t = myDocument.createElementNS("http://www.w3.org/2000/svg", "texte_ssilot");

	t.setAttribute("x", x);
	t.setAttribute("y", y);

	//t.setAttribute("label", "xxx");
	//t.setAttribute("width", "600cm");
	//t.setAttribute("height", "8cm");*/
	t.setAttribute("font-size", "0.4");
	t.setAttribute("style", "fill: black;");

	//group.appendChild(t);
	//group2.appendChild(group);
	//canvas.appendChild(group2);

	group2.appendChild(t);
	canvas.appendChild(group2);*/

	alert("ok0");
	alert(myDocument.getElementById("texte_ssilot"));
	myIncluder.svg_ajouter_texte(text, "texte_ssilot");
	alert("ok1");

	var tp = myDocument.createElementNS("http://www.w3.org/2000/svg", "textPath");
	tp.setAttribute("class", "textPath");
	tp.setAttribute("id", "textpath0");
	alert("ok2");

	tp.setAttribute("xlink:href=", "#ssilot1");

	myIncluder.svg_ajouter_texte("textpath0");

	t.setAttribute("class", "text");
	t.setAttribute("id", "texte_ssilot");

	myDocument.getElementById("texte_ssilot").appendChild("textpath0");

	alert("texte créé");
}



function svg_ajouter_texte(texte, id)
{
	var txt = myDocument.getElementById(id);
	//if(text != undefined) alert(text);
	var text = myDocument.createTextNode(texte);
	txt.appendChild(text);
}



function svg_ajouter_textpath()
{

}



function svg_conversion_texte_x(x)
{
	return (x+myIncluder.pos_x)*myIncluder.scal/30;
}



function svg_conversion_texte_y(y)
{
	return -(y+myIncluder.pos_y)*myIncluder.scal/30;
}



function svg_tester_affichage_texte()
{
	//alert("pos="+myIncluder.pos_x+", scal="+myIncluder.scal);
	//myIncluder.svg_creer_texte((335463.97+myIncluder.pos_x)*myIncluder.scal/30, -(2059282.63+myIncluder.pos_y)*myIncluder.scal/30);
	myIncluder.svg_creer_texte(svg_conversion_texte_x(335463.97), svg_conversion_texte_y(2059282.63), "toto");
}



function carte_supprimer_textes()
{
	var i;

	for(i = 0; i < myIncluder.NB_TEXTES; i++)
	{
		myDocument.getElementById("texte").removeChild(myDocument.getElementById("texte"+i));
	}

	myIncluder.NB_TEXTES = 0;
}



function svg_genere_textes()
{
	var i;
	var ssilot;

	for(i = 1; i <= myIncluder.NB_OBJETS; i++)
	{
		ssilot = myDocument.getElementById("ssilot"+i);
		if(ssilot.getAttribute("legende") != "undefined")
		{
			myIncluder.svg_creer_texte(ssilot.getAttribute("xCentre"), ssilot.getAttribute("yCentre"), ssilot.getAttribute("legende"));
		}
	}
}



function svg_changer_affichage_textes()
{
	if(myIncluder.AFFICHER_TEXTES)
	{
		myIncluder.carte_supprimer_textes();
		top.document.getElementById("textes").setAttribute("checked", false);
	}
	else
	{
	    myIncluder.svg_genere_textes();
		top.document.getElementById("textes").setAttribute("checked", true);
	}

	myIncluder.AFFICHER_TEXTES = !myIncluder.AFFICHER_TEXTES;
}

/*
 * rem : certains éléments et fonctionnalités non prévus dans la conception ont été ajoutés lors de la réalisation de ce module, ce qui explique certaines incohérences
 */

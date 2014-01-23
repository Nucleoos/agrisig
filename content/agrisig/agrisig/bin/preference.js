function pref_charge_pref(nom)
{
    return getPreference(nom);
}

function pref_charge_pref_bool(nom)
{
    var pref = getPreference(nom);

    if(pref == "true")
	return true;
    else
	return false;
}

function pref_get_tab_prefs()
{
    var tab_prefs = new Array();

    tab_prefs.push("Epsilon");
    tab_prefs.push("Infini");
    tab_prefs.push("Erreur_surface_acceptable");
    tab_prefs.push("Zoom_minimal");
    tab_prefs.push("Zoom_maximal");
    tab_prefs.push("Duree_doubleclic");
    tab_prefs.push("Centrage_textes");
    tab_prefs.push("Déplacement_continu");

    return tab_prefs;
}

function pref_load()
{
    pref_initialise();
    pref_affichePartie(document.getElementById('catMap'));
}

function pref_initialise()
{
    var tab_prefs = pref_get_tab_prefs();
    var elt;
    var i;

    for(i = 0; i < tab_prefs.length; i++)
    {
	elt = document.getElementById(tab_prefs[i]);
	if(elt.type == "text")
	    elt.value = opener.getPreference(tab_prefs[i]);
	else
	    if(opener.getPreference(tab_prefs[i]) == "true")
		elt.checked = true;
	    else
		elt.checked = false;
    }
}

function pref_sauvegarde()
{
    var tab_prefs = pref_get_tab_prefs();
    var elt;
    var i;

    for(i = 0; i < tab_prefs.length; i++)
    {
	elt = document.getElementById(tab_prefs[i]);

	if(elt.type == "text")
	    opener.setPreference(tab_prefs[i], elt.value);
	else
	    opener.setPreference(tab_prefs[i], elt.checked);
    }
}

function pref_defaut()
{
    opener.setPreference("Epsilon", "1");
    opener.setPreference("Infini", "1000000000");
    opener.setPreference("Erreur_surface_acceptable", "1");
    opener.setPreference("Zoom_minimal", "0.05");
    opener.setPreference("Zoom_maximal", "5");
    opener.setPreference("Duree_doubleclic", "300");
    opener.setPreference("Centrage_textes", "true");
    opener.setPreference("Déplacement_continu", "false");

    pref_initialise();
}

function pref_affichePartie(button)
{  
    button.checked = true;
    button.focus();
    /* Affichage du titre */
    top.document.getElementById("header").setAttribute("title",button.getAttribute("label"));
    /* Affichage de la case */
    top.document.getElementById("pref-deck").setAttribute("selectedIndex",button.getAttribute("indice"));
}


function pref_switchPage(aButtonID)
{
    var button = top.document.getElementById(aButtonID);
    if(button)
	pref_affichePartie(button);
}    

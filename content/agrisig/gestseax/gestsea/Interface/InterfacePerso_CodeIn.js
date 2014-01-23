function CodeIn()
{
    var It,Maitre;

    /* Nom de l'interface */
    It=new clInterfaceSimple("Gestion des Personnes");
    
    /* Composant 'maitre' cad le composant principal */
    Maitre=It.AjouterMaitre("Personnes existantes","personne");

    /* les colonnes du composant maitre */
    /* Parametres: (Label dans l'interface , nom du champs dans la BD) */

    Maitre.AjouterColonne("Titre","pe_titrenom");
    Maitre.AjouterColonne("Complement","pe_complement");

    /* ComposantSimple= textbox */
    /* Parametres: (Label dans l'interface , nom du champs dans la BD) */

    It.AjouterComposantSimple("Titre","pe_titrenom");
    It.AjouterComposantSimple("Complement","pe_complement");
    It.AjouterComposantSimple("Date de naissance","pe_naissance");
    It.AjouterComposantSimple("Type d'adherent","pe_typeadherent");
    It.AjouterComposantSimple("Regime fiscale","pe_regimefiscale");
    It.AjouterComposantSimple("Position","pe_position");

    /* ComposantComplexe= Liste */
    /* Parametres: (Label dans l'interface,
                    Tableau de Jointure (cle debut, cle fin, table fin)
       retourne le composant
    */

    CompoTel=It.AjouterComposantComplexe("Contact de la personne",
			      new Array("pe_numero","pe_numero","est_joignable",
					"cont_numero","cont_numero","contact")
			      );
    CompoTel.AjouterColonne("Type","cont_type");
    CompoTel.AjouterColonne("Coordonnées","cont_coordonnees");

    /* dernier paramètre: on précise le composant maitre */
    It.AjouterComposantSimple("Coordonnées","cont_coordonnees",null,CompoTel);


    CompoAdresse=
	It.AjouterComposantComplexe("Adresse",
				    new Array("pe_numero","pe_numero","est_localise",
					      "ad_numero","ad_numero","adresse"));

    CompoAdresse.AjouterColonne("Ligne 1","ad_addr1");
    CompoAdresse.AjouterColonne("Ligne 2","ad_addr2");
    CompoAdresse.AjouterColonne("Ligne 3","ad_addr3");
    CompoAdresse.AjouterColonne("CP","cp_codepostal",
				new Array("cp_numero","cp_numero","codepostal"));

    CompoAdresse.AjouterColonne("Ville","vi_nom",
				new Array("vi_numero","vi_numero","ville"));

    CompoAdresse.AjouterColonne("Departement","vi_departement",
				new Array("vi_numero","vi_numero","ville"));


    It.AjouterComposantSimple("Ligne 1","ad_addr1",null,CompoAdresse);
    It.AjouterComposantSimple("Ligne 2","ad_addr2",null,CompoAdresse);
    It.AjouterComposantSimple("Ligne 3","ad_addr3",null,CompoAdresse);


    It.AjouterComposantSimple("code postal","cp_codepostal",
			      new Array("cp_numero","cp_numero","codepostal"),
			      CompoAdresse);


    It.AjouterComposantSimple("Bureaux","cp_bureaudistributeur",
			      new Array("cp_numero","cp_numero","codepostal"),
			      CompoAdresse);

    It.AjouterComposantSimple("Ville","vi_nom",
			      new Array("vi_numero","vi_numero","ville"),CompoAdresse,1);

    It.AjouterComposantSimple("Departement","vi_departement",
				new Array("vi_numero","vi_numero","ville"),CompoAdresse,1);


    return It;

}

alert("Fichier chargé");

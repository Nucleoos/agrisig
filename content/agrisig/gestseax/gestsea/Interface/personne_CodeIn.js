function CodeIn()
{
    var It,Maitre;
    var CompoEstLocalise,CompoTel,CompoObservation,CompoEstLie1,CompoEstLie2;

    /* Nom de l'interface */
    It=new clInterfaceSimple("Gestion des Personnes");
    
    /* Composant 'maitre' cad le composant principal */
    Maitre=It.AjouterMaitre("Personnes existantes","personne");

    /* les colonnes du composant maitre */
    /* Parametres: (Label dans l'interface , nom du champs dans la BD) */

    Maitre.AjouterColonne("N°Adhérent","pe_numerofede");
    Maitre.AjouterColonne("Nom","pe_titrenom");
    Maitre.AjouterColonne("Complement","pe_complement");

    /* ComposantSimple= textbox */
    /* Parametres: (Label dans l'interface , nom du champs dans la BD) */

    It.AjouterComposantSimple("Titre/Nom","pe_titrenom");
    It.AjouterComposantSimple("Complement","pe_complement");
    It.AjouterComposantSimple("Date de naissance","pe_naissance");
    It.AjouterComposantSimple("Type d'adherent","pe_typeadherent");
    It.AjouterComposantSimple("Regime fiscale","pe_regimefiscale");
    It.AjouterComposantSimple("Position","pe_position");
    It.AjouterComposantSimple("Personne morale","pe_morale",null,null,1);
    It.AjouterComposantSimple("Etat actuel","pe_etat");

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


    CompoEstLocalise=
	It.AjouterComposantComplexe("Adresse",
				    new Array("pe_numero","pe_numero","est_localise"));

    CompoEstLocalise.AjouterColonne("Type","el_typeadresse");
    CompoEstLocalise.AjouterColonne("Ligne 1","ad_addr1",
				new Array("ad_numero","ad_numero","adresse")
				);
    CompoEstLocalise.AjouterColonne("Ligne 2","ad_addr2",
				new Array("ad_numero","ad_numero","adresse")
				);
    CompoEstLocalise.AjouterColonne("Ligne 3","ad_addr3",
				new Array("ad_numero","ad_numero","adresse")
				);
    CompoEstLocalise.AjouterColonne("CP","cp_codepostal",
				new Array("ad_numero","ad_numero","adresse","cp_numero","cp_numero","codepostal"));

    CompoEstLocalise.AjouterColonne("Ville","vi_nom",
				new Array("ad_numero","ad_numero","adresse","vi_numero","vi_numero","ville"));

    CompoEstLocalise.AjouterColonne("Departement","vi_departement",
				new Array("ad_numero","ad_numero","adresse","vi_numero","vi_numero","ville"));


    CompoObservation=It.AjouterComposantComplexe("Observation(s)"
						 ,new Array("pe_numero","pe_numero","observation"));

    CompoObservation.AjouterColonne("Importance","ob_niveau");
    CompoObservation.AjouterColonne("Description","ob_observation");


    /*
    CompoEstLie1=It.AjouterComposantComplexe("Lié à",
					    new Array("pe_numero","per_pe_numero","est_lie","pe_numero","pe_numero","personne"));
    CompoEstLie1.AjouterColonne("Nom","pe_nom");

    
    CompoEstLie2=It.AjouterComposantComplexe("Lié à",
					    new Array("pe_numero","pe_numero","est_lie","per_pe_numero","pe_numero","personne"));
    CompoEstLie2.AjouterColonne("Nom","pe_nom");

    */

    return It;

}

function CodeIn()
{
    var It,Maitre;
    var CompoEstLocalise,CompoTel,CompoObservation,CompoEstLie1,CompoEstLie2;
    var CompoCotisation, CompoResponsabilite;

    /* Nom de l'interface */
    It=new clInterfaceSimple("Gestion des Personnes");
    
    /* Composant 'maitre' cad le composant principal */
    Maitre=It.AjouterMaitre("Personnes existantes","personne");

    /* les colonnes du composant maitre */
    /* Parametres: (Label dans l'interface , nom du champs dans la BD) */

    Maitre.AjouterColonne("N�Adh�rent","pe_numerofede");
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
    CompoTel.AjouterColonne("Coordonn�es","cont_coordonnees");

    /* dernier param�tre: on pr�cise le composant maitre */
    /*It.AjouterComposantSimple("Coordonn�es","cont_coordonnees",null,CompoTel);*/


    CompoObservation=It.AjouterComposantComplexe("Observation(s)"
						 ,new Array("pe_numero","pe_numero","observation"));

    CompoObservation.AjouterColonne("Importance","ob_niveau");
    CompoObservation.AjouterColonne("Description","ob_observation");



    CompoCotisation=It.AjouterComposantComplexe("Cotisation(s)", 
						new Array("pe_numero", "pe_numero", "cotisation"));
    CompoCotisation.AjouterColonne("Date d'adh�sion", "co_adhesion");


    
    CompoResponsabilite=It.AjouterComposantComplexe("Responsabilit�(s)",
						    new Array("pe_numero", "pe_numero", "est_responsable"));
    CompoResponsabilite.AjouterColonne("Famille", "re_famille",
					  new Array("re_numero","re_numero", "responsabilite"));
    CompoResponsabilite.AjouterColonne("Responsabilit�", "re_nom",
					  new Array("re_numero","re_numero", "responsabilite"));
    CompoResponsabilite.AjouterColonne("De", "peac_periodedebut");
    CompoResponsabilite.AjouterColonne("A", "peac_periodefin");
    



    /*
    CompoEstLie1=It.AjouterComposantComplexe("Li� �",
					    new Array("pe_numero","per_pe_numero","est_lie","pe_numero","pe_numero","personne"));
    CompoEstLie1.AjouterColonne("Nom","pe_nom");

    
    CompoEstLie2=It.AjouterComposantComplexe("Li� �",
					    new Array("pe_numero","pe_numero","est_lie","per_pe_numero","pe_numero","personne"));
    CompoEstLie2.AjouterColonne("Nom","pe_nom");

    */
    


    /*******************************************************************************************/
    /***         LOCALISATION DE LA PERSONNE   : onglet adresse                              ***/
    /*******************************************************************************************/
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

    

    It.AjouterComposantSimple("Adresse", "ad_addr1", 
			      new Array("ad_numero","ad_numero","adresse"),
			      CompoEstLocalise);

    It.AjouterComposantSimple("      ", "ad_addr2", 
			      new Array("ad_numero","ad_numero","adresse"),
			      CompoEstLocalise);
    
    It.AjouterComposantSimple("      ", "ad_addr3", 
			      new Array("ad_numero","ad_numero","adresse"),
			      CompoEstLocalise);

    It.AjouterComposantSimple("Code Postal", "cp_codepostal", 
			      new Array("ad_numero","ad_numero","adresse","cp_numero","cp_numero","codepostal"),
			      CompoEstLocalise);
    
    It.AjouterComposantSimple("Ville", "vi_nom", 
			      new Array("ad_numero","ad_numero","adresse","vi_numero","vi_numero","ville"),
			      CompoEstLocalise); 
 
    /*******************************************************************************************/
    /***         DOSSIER DE LA PERSONNE : ONGLET DOSSIER                                     ***/
    /*******************************************************************************************/
    CompoDossier=It.AjouterComposantComplexe("Dossier",
					     new Array("pe_numero", "pe_numero", "dossier"));
    CompoDossier.AjouterColonne("Libell�", "do_libelle");
    CompoDossier.AjouterColonne("Date d'ouverture", "do_dateouverture");
    CompoDossier.AjouterColonne("Date de fermeture", "do_datefermeture");
    CompoDossier.AjouterColonne("Type", "do_type");
    CompoDossier.AjouterColonne("Etat", "do_etat");
    
    It.AjouterComposantSimple("Libell�", "do_libelle", null, CompoDossier);
    It.AjouterComposantSimple("Date d'ouverture", "do_dateouverture", null, CompoDossier);
    It.AjouterComposantSimple("Date de fermeture", "do_datefermeture", null, CompoDossier);
    It.AjouterComposantSimple("Type", "do_type", null, CompoDossier);
    It.AjouterComposantSimple("Etat", "do_etat", null, CompoDossier);
    
    CompoTravaux=It.AjouterComposantComplexe("Travaux",
					     new Array("do_numero", "do_numero", "travaux"), 
					     CompoDossier);
    CompoTravaux.AjouterColonne("Libell�", "lt_libelle",
				new Array("tr_numero", "tr_numero", "libeltravaux2", 
					  "lt_numero", "lt_numero", "libeltravaux"), 
				CompoTravaux);
    CompoTravaux.AjouterColonne("Date d�but", "tr_periodedebut", null, CompoTravaux);
    CompoTravaux.AjouterColonne("Date fin", "tr_periodefin", null, CompoTravaux);
    CompoTravaux.AjouterColonne("Dur�e", "tr_temps", null, CompoTravaux);
    CompoTravaux.AjouterColonne("Type", "tr_type", null, CompoTravaux);

    /*******************************************************************************************/
    /***         ABONNEMENT DE LA PERSONNE                                                   ***/
    /*******************************************************************************************/
    CompoAbon=It.AjouterComposantComplexe("Abonnement",
					  new Array("pe_numero", "pe_numero", "abonnement"));
    CompoAbon.AjouterColonne("Date de l'abonnement", "ab_reabonne");
    
    It.AjouterComposantSimple("Cat�gorie", "ab_categorie",null, CompoAbon);
    It.AjouterComposantSimple("Tarif", "tab_tarif",
			      new Array("tab_numero","tab_numero", "tarif_abonnement"),
			      CompoAbon);
    It.AjouterComposantSimple("Date abonnement", "ab_reabonne", null, CompoAbon);
    It.AjouterComposantSimple("Service du", "ab_debutservice", null, CompoAbon);
    It.AjouterComposantSimple("au", "ab_finservice", null, CompoAbon);
    It.AjouterComposantSimple("Reste � livrer", "ab_reste", null, CompoAbon);
    It.AjouterComposantSimple("Nombre d'exemplaire � livrer par service", "ab_nbrexemplaire", null, CompoAbon);
    It.AjouterComposantSimple("Famille", "ab_famille", null, CompoAbon);
    It.AjouterComposantSimple("Origine", "ab_origine", null, CompoAbon);

    CompoDestinataire=It.AjouterComposantComplexe("Destinataire",
						  new Array("ab_numero", "ab_numero", "destinataire"),
						  CompoAbon);
    CompoDestinataire.AjouterColonne("Nom", "de_nom");
    CompoDestinataire.AjouterColonne("Adresse", "ad_addr1",
				     new Array("ad_numero", "ad_numero", "adresse"));

    CompoDestinataire.AjouterColonne("       ", "ad_addr2",
				     new Array("ad_numero", "ad_numero", "adresse"));

    CompoDestinataire.AjouterColonne("       ", "ad_addr3",
				     new Array("ad_numero", "ad_numero", "adresse"));

    CompoDestinataire.AjouterColonne("Code Postal", "cp_codepostal",
				     new Array("ad_numero", "ad_numero", "adresse",
					       "cp_numero", "cp_numero", "codepostal"));

    CompoDestinataire.AjouterColonne("Ville", "vi_nom",
				     new Array("ad_numero", "ad_numero", "adresse",
					       "vi_numero", "vi_numero", "ville"));

    It.AjouterComposantSimple("Nom", "de_nom", null, CompoDestinataire);
    It.AjouterComposantSimple("Adresse", "ad_addr1",
				     new Array("ad_numero", "ad_numero", "adresse"),
				     CompoDestinataire);
    It.AjouterComposantSimple("       ", "ad_addr2",
				     new Array("ad_numero", "ad_numero", "adresse"),
				     CompoDestinataire);
    It.AjouterComposantSimple("       ", "ad_addr3",
				     new Array("ad_numero", "ad_numero", "adresse"),
				     CompoDestinataire);
    It.AjouterComposantSimple("Code Postal", "cp_codepostal",
				     new Array("ad_numero", "ad_numero", "adresse",
					       "cp_numero", "cp_numero", "codepostal"),
				     CompoDestinataire);
    It.AjouterComposantSimple("Ville", "vi_nom",
				     new Array("ad_numero", "ad_numero", "adresse",
					       "vi_numero", "vi_numero", "ville"),
				     CompoDestinataire);

    return It;

}


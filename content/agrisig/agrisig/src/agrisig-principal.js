/*
<button busy="true" id="navigator-throbber"
        oncommand="goClickThrobber('browser.throbber.url', event)"
        onclick="checkForMiddleClick(this, event);" tooltiptext="Go to the Browser home page"/>

*/

function zalert(x){
    alert(x);
}

function CodeIn(overlay)
{
    var AllIt = new clTabInterfaceSimple();

    AllIt.IncludeJs("agrisig_plus.js");
    /*
      AllIt.IncludeJs("Interface_Plus.js");
      AllIt.AjouterCodeUserLoad("AddButonTest();\n");
    */

    /* **************************
       Applique
       *********************** */

    var It_Applique,Maitre_Applique;

    /* Nom de l'interface */
    It_Applique = new clInterfaceSimple("Application de profil");

    /* Composant 'maitre' cad le composant principal */
    Maitre_Applique = It_Applique.AjouterMaitre("Application  de profil","applique");
    Maitre_Applique.AjouterColonne("Sous îlot","si_libelle",new Array("al_sousilot","si_numero","sousilot"));
    Maitre_Applique.AjouterColonne("Profil","pr_nom",new Array("al_profil","pr_numero","profil"));
    Maitre_Applique.AjouterColonne("Debut","al_periodedebut");
    Maitre_Applique.AjouterColonne("Fin","al_periodefin");

    It_Applique.AjouterComposantSimple("Sous îlot","si_libelle",new Array("al_sousilot","si_numero","sousilot"),null,LISTE_DEROULANTE);
    Profil_Applique=It_Applique.AjouterComposantSimple("Profil","pr_nom",new Array("al_profil","pr_numero","profil"),null,LISTE_DEROULANTE);
    It_Applique.AjouterComposantSimple("Debut","al_periodedebut");
    It_Applique.AjouterComposantSimple("Fin","al_periodefin");

    /* LOT */
    var Lot_Applique = It_Applique.AjouterComposantComplexe("Lot(s)",
							    new Array("al_numero","lo_applique","lot"));

    Lot_Applique.AjouterColonne("Article","ar_nom",new Array("lo_article","ar_numero","article"));
    Lot_Applique.AjouterColonne("N°lot","lo_lot");

    Lot_Applique.AddMode(INSERTION);
    Lot_Applique.AddMode(SUPPRESSION);
    Lot_Applique.AddMode(MODIFICATION);

    Article_Applique=It_Applique.AjouterComposantSimple("Article","ar_nom",new Array("lo_article","ar_numero","article"),Lot_Applique,LISTE_DEROULANTE);
    It_Applique.AjouterComposantSimple("N°lot","lo_lot",null,Lot_Applique);


    /* Filtre perso (on filtre les article par rapport au profil )*/
    Profil_Applique.getTheme().AddFiltre('Filtre_Profil_Applique=new clInterfaceFiltragePermanant()');

    var CodeInit_Profil_Applique='';

    CodeInit_Profil_Applique+='var Joint_Profil_Applique=new clJointureMulti("profil",\n';
    CodeInit_Profil_Applique+='	new Array(\n';
    CodeInit_Profil_Applique+='		new stJointure("definiprofil","pr_numero","dp_profil",null,false),\n';
    CodeInit_Profil_Applique+='		new stJointure("article","dp_article","ar_numero",null,false)));\n';
    CodeInit_Profil_Applique+='Filtre_Profil_Applique.setComposant(Compo_'+Article_Applique.getNom_()+',Joint_Profil_Applique);\n';
    Article_Applique.CodeUserOnInit=CodeInit_Profil_Applique;



    AllIt.AjouterInterface(It_Applique);


    /* **************************
       Profils
       *********************** */

    var It_Profils,Maitre_Profil;
    var FamilleProfils_Dessus,ArticleProfils_Dessus,CoucheProfils_Dessus;
    var FamilleProfils,ProduitsProfils,CoucheProfils;

    /* Nom de l'interface */
    It_Profils = new clInterfaceSimple("Profils");

    /* Composant 'maitre' cad le composant principal */
    //Maitre_Profil = It_Profils.AjouterMaitre("Profils existants","profil");
    Maitre_Profil = It_Profils.AjouterMaitre("Profils existants","profil");
    Maitre_Profil.AjouterColonne("Nom","pr_nom");

    Maitre_Profil.ResetMode();
    Maitre_Profil.AddMode(INSERTION);
    Maitre_Profil.AddMode(MODIFICATION);

    It_Profils.AjouterComposantSimple("Nom","pr_nom");
    It_Profils.AjouterComposantSimple("Note","note",null,null,null,null,null,true);
    It_Profils.AjouterComposantSimple("Profil partagé","pr_partage",null,null,CHECKBOX);
    It_Profils.AjouterComposantSimple("Couleur","couleur",null,null,COLOR);

    /* FAMILLE DE PROFIL */
    FamilleProfils_Dessus = It_Profils.AjouterComposantComplexeIndependant("Familles de profil existantes","typeprofil");
    FamilleProfils_Dessus.AjouterColonne("Nom","tp_nom");
    FamilleProfils_Dessus.AjouterColonne("Note","note");

    FamilleProfils = It_Profils.AjouterComposantListeDouble("Familles du profil",
							    new Array("pr_numero","et_profil","estdetype",
								      "et_typeprofil","tp_numero","typeprofil"),null,FamilleProfils_Dessus);
    FamilleProfils.AjouterColonne("Nom","tp_nom");
    FamilleProfils.AjouterColonne("Note","note");

    /* ARTICLES */

    ArticleProfils = It_Profils.AjouterComposantComplexe("Articles présents dans le profil",
							 new Array("pr_numero","dp_profil","definiprofil"));
    ArticleProfils.AjouterColonne("Nom","ar_nom",
				  new Array("dp_article","ar_numero","article"));
    ArticleProfils.AjouterColonne("Densité","dp_densite");

    ArticleProfils.AddMode(INSERTION);
    ArticleProfils.AddMode(SUPPRESSION);
    ArticleProfils.AddMode(MODIFICATION);

    Profil_Article=It_Profils.AjouterComposantSimple("Article","ar_nom",new Array("dp_article","ar_numero","article"),ArticleProfils,LISTE_DEROULANTE);
    It_Profils.AjouterComposantSimple("Densité","dp_densite",null,ArticleProfils);


    /* COUCHES */

    CoucheProfils_Dessus = It_Profils.AjouterComposantComplexeIndependant("Type de couche existants","typecouche");
    CoucheProfils_Dessus.AjouterColonne("Nom","tc_nom" );
    CoucheProfils_Dessus.AjouterColonne("Note","note" );

    CoucheProfils = It_Profils.AjouterComposantListeDouble("Type de couche",new Array("pr_numero","pc_profil","profiltypecouche",
										      "pc_typecouche","tc_numero","typecouche"),null,CoucheProfils_Dessus);
    CoucheProfils.AjouterColonne("Nom","tc_nom" );
    CoucheProfils.AjouterColonne("Note","note" );

    It_Profils.LierA(Profil_Applique,It_Applique);

    AllIt.AjouterInterface(It_Profils);

    /**************************
		Famille de profil
    ***********************/
    var It_Famille_Profil,Maitre_Famille_Profil;

    //    Nom de l'interface
    It_Famille_Profil = new clInterfaceSimple("Famille de profil");

    Maitre_Famille_Profil = It_Famille_Profil.AjouterMaitre("Famille de profil","typeprofil");
    Maitre_Famille_Profil.AjouterColonne("Nom","tp_nom");

    It_Famille_Profil.AjouterComposantSimple("Nom","tp_nom");
    It_Famille_Profil.AjouterComposantSimple("Note","note",null,null,null,null,null,true);

    It_Famille_Profil.AjouterComposantSimple("Couleur","couleur",null,null,COLOR);

    It_Famille_Profil.LierA(FamilleProfils_Dessus,It_Profils);


    AllIt.AjouterInterface(It_Famille_Profil);

    /**************************
		Article
    ***********************/
    var It_Article,Maitre_Article;

    //    Nom de l'interface
    It_Article = new clInterfaceSimple("Articles");

    Maitre_Article = It_Article.AjouterMaitre("Articles","article");
    Maitre_Article.AjouterColonne("Nom","ar_nom");

    It_Article.AjouterComposantSimple("Nom","ar_nom");


    ProduitArticle = It_Article.AjouterComposantSimple("Produit","pd_nom",new Array("ar_produit","pd_numero","produit"),null,LISTE_DEROULANTE);
    ConditionnementArticle = It_Article.AjouterComposantSimple("Conditionnement","ca_nom",new Array("ar_conditionnement","ca_numero","conditionnement"),null,LISTE_DEROULANTE);

    VendeurArticle = It_Article.AjouterComposantComplexe("Vendeur",new Array("ar_personne","pe_numero","personne"),null,LISTE_DEROULANTE_MULTI);
    VendeurArticle.AjouterColonne("Nom","pe_nom");
    VendeurArticle.AjouterColonne("Prenom","pe_prenom");

    It_Article.AjouterComposantSimple("Prix","ar_prix");
    It_Article.AjouterComposantSimple("Code EAN13","ar_codeean13");
    It_Article.AjouterComposantSimple("Code secondaire","ar_code2");
    It_Article.AjouterComposantSimple("Code tertiaire","ar_code3");
    It_Article.AjouterComposantSimple("Note","note",null,null,null,null,null,true);

    It_Article.LierA(Profil_Article,It_Profils);

    var Maitre_Article_BeforeValidate='';
    Maitre_Article_BeforeValidate+='if (!UniteOk_Article('+ComposantDansCode(ConditionnementArticle)+','+ComposantDansCode(ProduitArticle)+'))\n';
    Maitre_Article_BeforeValidate+='{\n';
    Maitre_Article_BeforeValidate+='	alert("L\'unité du conditionnement doit être la même que celle du produit");\n';
    Maitre_Article_BeforeValidate+='	return -1;\n';
    Maitre_Article_BeforeValidate+='}\n';
    Maitre_Article.BeforeValidate=Maitre_Article_BeforeValidate;

    AllIt.AjouterInterface(It_Article);

    /**************************
		Conditionnement
    ***********************/

    var It_Conditionnement,Maitre_Conditionnement;
    var Couche_Type_Couche;

    //    Nom de l'interface
    It_Conditionnement = new clInterfaceSimple("Conditionnements");

    Maitre_Famille_Profil = It_Conditionnement.AjouterMaitre("Conditionnements","conditionnement");
    Maitre_Famille_Profil.AjouterColonne("Nom","ca_nom");
    Maitre_Famille_Profil.AjouterColonne("Quantite","ca_quantite");
    Maitre_Famille_Profil.AjouterColonne("Unite","un_nom",new Array("ca_unite","un_numero","unite"));

    It_Conditionnement.AjouterComposantSimple("Nom","ca_nom");
    It_Conditionnement.AjouterComposantSimple("Quantite","ca_quantite");
    UniteProduit_Conditionnement = It_Conditionnement.AjouterComposantSimple("Unité","un_nom",new Array("ca_unite","un_numero","unite"),null,LISTE_DEROULANTE);
    It_Conditionnement.AjouterComposantSimple("Description","ca_description");
    It_Conditionnement.AjouterComposantSimple("Note","note",null,null,null,null,null,true);

    It_Conditionnement.LierA(ConditionnementArticle,It_Article);

    AllIt.AjouterInterface(It_Conditionnement);

    /**************************
			Produits
    ***********************/
    var It_Produits,Maitre_Produits;
    var TypeProduit_Produit,FirmeProduit_Produit;
    var TiersProduit,ComposeProduit;
    var ComposeProduit_Dessus;

    //    Nom de l'interface
    It_Produits = new clInterfaceSimple("Produits");

    Maitre_Produits = It_Produits.AjouterMaitre("Produits","produit");

    Maitre_Produits.AjouterColonne("Nom","pd_nom");
    Maitre_Produits.AjouterColonne("Code","pd_code");

    It_Produits.AjouterComposantSimple("Nom","pd_nom");
    It_Produits.AjouterComposantSimple("Code","pd_code");
    TypeProduit_Produit = It_Produits.AjouterComposantSimple("Type","td_nom",new Array("pd_typeproduit","td_numero","typeproduit"),null,LISTE_DEROULANTE);
    FirmeProduit_Produit = It_Produits.AjouterComposantSimple("Firme","fi_nom",new Array("pd_firme","fi_numero","firme"),null,LISTE_DEROULANTE);
    UniteProduit_Produit = It_Produits.AjouterComposantSimple("Unité","un_nom",new Array("pd_unite","un_numero","unite"),null,LISTE_DEROULANTE);
    FormeProduit_Produit = It_Produits.AjouterComposantSimple("Sous forme de","fo_nom",new Array("pd_forme","fo_numero","forme"),null,LISTE_DEROULANTE);
    VarieteProduit_Produit = It_Produits.AjouterComposantSimple("Variete","va_nom",new Array("pd_variete","va_numero","variete"),null,LISTE_DEROULANTE);
    CompositionProduit_Produit = It_Produits.AjouterComposantSimple("Composition","cs_nom",new Array("pd_composition","cs_numero","composition"),null,LISTE_DEROULANTE);
    It_Produits.AjouterComposantSimple("Couleur","couleur",null,null,COLOR);
    It_Produits.AjouterComposantSimple("Note","note",null,null,null,null,null,true);


    ClassementProduit_Dessus = It_Produits.AjouterComposantComplexeIndependant("Classements existants","classement");
    ClassementProduit_Dessus.AjouterColonne("Symbole","cl_symbole");
    ClassementProduit_Dessus.AjouterColonne("Nom","cl_nom");

    ClassementProduit = It_Produits.AjouterComposantListeDouble("Classements du produit",
								new Array("pd_numero","dc_produit","declassement",
									  "dc_classement","cl_numero","classement"),null,ClassementProduit_Dessus);

    ClassementProduit.AjouterColonne("Symbole","cl_symbole");
    ClassementProduit.AjouterColonne("Nom","cl_nom");

    It_Produits.LierA(ProduitArticle,It_Article);

    AllIt.AjouterInterface(It_Produits);

    /**************************
		Couches
    ***********************/
    var It_Couche,Maitre_Couche;
    var Couche_Type_Couche;

    //    Nom de l'interface
    It_Couche = new clInterfaceSimple("Couches");

    Maitre_Famille_Profil = It_Couche.AjouterMaitre("Couches","couche");
    Maitre_Famille_Profil.AjouterColonne("Nom","cc_nom");
    Maitre_Famille_Profil.AjouterColonne("Type","tc_nom",new Array("cc_typecouche","tc_numero","typecouche"));

    It_Couche.AjouterComposantSimple("Nom","cc_nom");
    Couche_Type_Couche = It_Couche.AjouterComposantSimple("Type","tc_nom",new Array("cc_typecouche","tc_numero","typecouche"),null,LISTE_DEROULANTE);
    It_Couche.AjouterComposantSimple("Note","note",null,null,null,null,null,true);
    It_Couche.AjouterComposantSimple("Couleur","couleur",null,null,COLOR);


    AllIt.AjouterInterface(It_Couche);

    /**************************
		Type de couche
    ***********************/
    var It_Type_Couche,Maitre_Type_Couche;

    //    Nom de l'interface
    It_Type_Couche = new clInterfaceSimple("Type de couche");

    Maitre_Type_Couche = It_Type_Couche.AjouterMaitre("Type de couches","typecouche");
    Maitre_Type_Couche.AjouterColonne("Nom","tc_nom");
    Maitre_Type_Couche.AjouterColonne("Note","note");

    It_Type_Couche.AjouterComposantSimple("Nom","tc_nom");
    //It_Type_Couche.AjouterComposantSimple("Couche Système","tc_systeme",null,null,CHECKBOX);
    It_Type_Couche.AjouterComposantSimple("Note","note",null,null,null,null,null,true);
    It_Type_Couche.AjouterComposantSimple("Couleur","couleur",null,null,COLOR);
    It_Type_Couche.AjouterComposantSimple("Sans sous-ilots","tc_sansilots",null,null,CHECKBOX);

    It_Type_Couche.LierA(CoucheProfils_Dessus,It_Profils);
    It_Type_Couche.LierA(Couche_Type_Couche,It_Couche);


    AllIt.AjouterInterface(It_Type_Couche);


    /**************************
		Type produit
    ***********************/
    var It_Type_Produit,Maitre_Type_Produit;

    //    Nom de l'interface
    It_Type_Produit = new clInterfaceSimple("Type de produits");

    Maitre_Type_Produit = It_Type_Produit.AjouterMaitre("Type de produits","typeproduit");
    Maitre_Type_Produit.AjouterColonne("Nom","td_nom");
    Maitre_Type_Produit.AjouterColonne("Note","note");

    It_Type_Produit.AjouterComposantSimple("Nom","td_nom");
    It_Type_Produit.AjouterComposantSimple("Couleur","couleur",null,null,COLOR);
    It_Type_Produit.AjouterComposantSimple("Note","note",null,null,null,null,null,true);

    It_Type_Produit.LierA(TypeProduit_Produit,It_Produits);

    AllIt.AjouterInterface(It_Type_Produit);


    /**************************
		Unite
    ***********************/
    var It_Unite,Maitre_Unite;

    //    Nom de l'interface
    It_Unite = new clInterfaceSimple("Unité");

    Maitre_Unite = It_Unite.AjouterMaitre("Unités","unite");
    Maitre_Unite.AjouterColonne("Nom","un_nom");

    It_Unite.AjouterComposantSimple("Nom","un_nom");

    It_Unite.LierA(UniteProduit_Produit,It_Produits);
    It_Unite.LierA(UniteProduit_Conditionnement,It_Conditionnement);

    AllIt.AjouterInterface(It_Unite);

    /**************************
		Forme
    ***********************/
    var It_Forme,Maitre_Forme;

    //    Nom de l'interface
    It_Forme = new clInterfaceSimple("Forme");

    Maitre_Forme = It_Forme.AjouterMaitre("Formes","forme");
    Maitre_Forme.AjouterColonne("Nom","fo_nom");

    It_Forme.AjouterComposantSimple("Nom","fo_nom");
    It_Forme.AjouterComposantSimple("Abbrevation","fo_abbrevation");
    It_Forme.AjouterComposantSimple("Description","fo_description");

    It_Forme.LierA(FormeProduit_Produit,It_Produits);

    AllIt.AjouterInterface(It_Forme);


    /**************************
		Variete
    ***********************/
    var It_Variete,Maitre_Variete;

    //    Nom de l'interface
    It_Variete = new clInterfaceSimple("Varieté");

    Maitre_Variete = It_Variete.AjouterMaitre("Varietés","variete");
    Maitre_Variete.AjouterColonne("Nom","va_nom");

    It_Variete.AjouterComposantSimple("Nom","va_nom");
    Espece_Variete = It_Variete.AjouterComposantSimple("Espèce","es_nom",new Array("va_espece","es_numero","espece"),null,LISTE_DEROULANTE);
    It_Variete.AjouterComposantSimple("Couleur","couleur",null,null,COLOR);

    It_Variete.LierA(VarieteProduit_Produit,It_Produits);

    AllIt.AjouterInterface(It_Variete);


    /**************************
		Composition
    ***********************/
    var It_Composition,Maitre_Composition;

    //    Nom de l'interface
    It_Composition = new clInterfaceSimple("Composition");

    Maitre_Composition = It_Composition.AjouterMaitre("Compositions","composition");
    Maitre_Composition.AjouterColonne("Nom","cs_nom");

    It_Composition.AjouterComposantSimple("Nom","cs_nom");
    It_Composition.AjouterComposantSimple("Note","note",null,null,null,null,null,true);

    /* Compose */

    Compose_Composition = It_Composition.AjouterComposantComplexe("Composants",
								  new Array("cs_numero","ce_composition","compose"));
    Compose_Composition.AjouterColonne("Nom","cm_nom",
				       new Array("ce_composant","cm_numero","composant"));
    Compose_Composition.AjouterColonne("Concentration","ce_concentration");
    Compose_Composition.AjouterColonne("Unité","ce_unite");

    Compose_Composition.AddMode(INSERTION);
    Compose_Composition.AddMode(SUPPRESSION);
    Compose_Composition.AddMode(MODIFICATION);

    It_Composition.AjouterComposantSimple("Concentration","ce_concentration",null,Compose_Composition);
    It_Composition.AjouterComposantSimple("Unité","ce_unite",null,Compose_Composition,LISTE_DEROULANTE_STATIC,null,new Array("gr/L","%"));
    ComposantCompose_Composition = It_Composition.AjouterComposantSimple("Composant","cm_nom",new Array("ce_composant","cm_numero","composant"),Compose_Composition,LISTE_DEROULANTE);

    It_Composition.LierA(CompositionProduit_Produit,It_Produits);

    AllIt.AjouterInterface(It_Composition);


    /* **************************
       Composants
       *********************** */

    var It_Composant,Maitre_Composant;

    /* Nom de l'interface */
    It_Composant = new clInterfaceSimple("Composants");

    /* Composant 'maitre' cad le composant principal */
    Maitre_Composant = It_Composant.AjouterMaitre("Composants","composant");

    Maitre_Composant.AjouterColonne("Nom","cm_nom");

    It_Composant.AjouterComposantSimple("Nom","cm_nom");
    It_Composant.AjouterComposantSimple("Formule","cm_formule");
    It_Composant.AjouterComposantSimple("Description","cm_description");
    It_Composant.AjouterComposantSimple("Note","note",null,null,null,null,null,true);

    /* DAR */
    dar_Composition = It_Composant.AjouterComposantComplexe("Date Avant Récolte",
							    new Array("cm_numero","da_composant","dateavantrecolte"));
    dar_Composition.AjouterColonne("Espèce","es_nom",
				   new Array("da_espece","es_numero","espece"));
    dar_Composition.AjouterColonne("Dar (jours)","da_dar");

    dar_Composition.AddMode(INSERTION);
    dar_Composition.AddMode(SUPPRESSION);
    dar_Composition.AddMode(MODIFICATION);

    It_Composant.AjouterComposantSimple("Dar (jours)","da_dar",null,dar_Composition);
    Especedar_Composition = It_Composant.AjouterComposantSimple("Espèce","es_nom",new Array("da_espece","es_numero","espece"),dar_Composition,LISTE_DEROULANTE);

    It_Composant.LierA( ComposantCompose_Composition,It_Composition );

    AllIt.AjouterInterface(It_Composant);

    /**************************
		Espece
    ***********************/
    var It_Espece,Maitre_Espece;

    //    Nom de l'interface
    It_Espece = new clInterfaceSimple("Espèce");

    Maitre_Espece = It_Espece.AjouterMaitre("Espèces","espece");
    Maitre_Espece.AjouterColonne("Nom","es_nom");

    It_Espece.AjouterComposantSimple("Nom","es_nom");
    It_Espece.AjouterComposantSimple("Couleur","couleur",null,null,COLOR);
    It_Espece.AjouterComposantSimple("Note","note",null,null,null,null,null,true);


    It_Espece.LierA(Espece_Variete,It_Variete);
    It_Espece.LierA(Especedar_Composition,It_Composant);

    AllIt.AjouterInterface(It_Espece);

    /**************************
		Classement
    ***********************/
    var It_Classement,Maitre_Classement;

    //    Nom de l'interface
    It_Classement = new clInterfaceSimple("Classement");

    Maitre_Classement = It_Classement.AjouterMaitre("Classements","classement");
    Maitre_Classement.AjouterColonne("Nom","cl_nom");

    It_Classement.AjouterComposantSimple("Nom","cl_nom");
    It_Classement.AjouterComposantSimple("Symbole","cl_symbole");
    It_Classement.AjouterComposantSimple("Description","cl_description");


    It_Classement.LierA(ClassementProduit_Dessus,It_Produits);

    AllIt.AjouterInterface(It_Classement);


    /**************************
		Materiel
    ***********************/
    var It_Materiel,Maitre_Materiel;
    //    Nom de l'interface
    It_Materiel = new clInterfaceSimple("Materiel");

    Maitre_Materiel = It_Materiel.AjouterMaitre("Materiels","materiel");
    Maitre_Materiel.AjouterColonne("Nom","ma_nom");

    It_Materiel.AjouterComposantSimple("Nom","ma_nom");
    It_Materiel.AjouterComposantSimple("Date d'achat","ma_dateachat");
    It_Materiel.AjouterComposantSimple("Date de mise en service","ma_dateservice");
    It_Materiel.AjouterComposantSimple("Date de mise hors service","ma_datehorsservice");
    It_Materiel.AjouterComposantSimple("Prix","ma_prix");
    It_Materiel.AjouterComposantSimple("Note","note",null,null,null,null,null,true);
    Modele_Materiel = It_Materiel.AjouterComposantSimple("Modele","mo_nom",new Array("ma_modele","mo_numero","modele"),null,LISTE_DEROULANTE);

    AllIt.AjouterInterface(It_Materiel);

    /**************************
		Modele
    ***********************/

    var It_Modele,Maitre_Modele;
    //    Nom de l'interface
    It_Modele = new clInterfaceSimple("Modele");

    Maitre_Modele = It_Modele.AjouterMaitre("Modeles","modele");
    Maitre_Modele.AjouterColonne("Nom","mo_nom");

    It_Modele.AjouterComposantSimple("Nom","mo_nom");
    It_Modele.AjouterComposantSimple("Réference","mo_reference");
    It_Modele.AjouterComposantSimple("Note","note",null,null,null,null,null,true);
    Firme_Modele = It_Modele.AjouterComposantSimple("Firme","fi_nom",new Array("mo_firme","fi_numero","firme"),null,LISTE_DEROULANTE);

    It_Modele.LierA(Modele_Materiel,It_Materiel);

    AllIt.AjouterInterface(It_Modele);


    /**************************
		Firmes
    ***********************/
    var It_Firme,Maitre_Firme;
    //    Nom de l'interface
    It_Firme = new clInterfaceSimple("Firmes");

    Maitre_Firme = It_Firme.AjouterMaitre("Firmes","firme");
    Maitre_Firme.AjouterColonne("Nom","fi_nom");

    It_Firme.AjouterComposantSimple("Nom","fi_nom");

    It_Firme.LierA(FirmeProduit_Produit,It_Produits);
    It_Firme.LierA(Firme_Modele,It_Modele);

    AllIt.AjouterInterface(It_Firme);


    /* **************************
       Personne
       *********************** */

    var It_Personne,Maitre_Personne;
    var AdressePersonne,Contact_Personne,Doc_Personne;
    var Personne_Commune,Personne_CP;

    /* Nom de l'interface */
    It_Personne = new clInterfaceSimple("Personnes");

    /* Composant 'maitre' cad le composant principal */
    Maitre_Personne = It_Personne.AjouterMaitre("Personnes existants","personne");

    Maitre_Personne.AjouterColonne("Nom","pe_nom");
    Maitre_Personne.AjouterColonne("Prenom","pe_prenom");

    It_Personne.AjouterComposantSimple("Nom","pe_nom");
    It_Personne.AjouterComposantSimple("Prenom","pe_prenom");
    It_Personne.AjouterComposantSimple("Siret","pe_siret");
    It_Personne.AjouterComposantSimple("Entreprise","pe_entreprise",null,null,CHECKBOX);

    AdressePersonne = It_Personne.AjouterComposantComplexe("Adresse",
							   new Array("pe_numero","ap_personne","adressepersonne",
								     "ap_adresse","ad_numero","adresse"));
    AdressePersonne.AjouterColonne("Ligne1","ad_addr1");
    AdressePersonne.AjouterColonne("Ligne2","ad_addr2");
    AdressePersonne.AjouterColonne("Ligne3","ad_addr3");
    AdressePersonne.AjouterColonne("Commune","co_nom",new Array("ad_commune","co_numero","commune"));
    AdressePersonne.AjouterColonne("CP","cp_code",new Array("ad_codepostal","cp_numero","codepostal"));

    AdressePersonne.AddMode(INSERTION);
    AdressePersonne.AddMode(SUPPRESSION);
    AdressePersonne.AddMode(MODIFICATION);

    It_Personne.AjouterComposantSimple("Ligne1","ad_addr1",null,AdressePersonne);
    It_Personne.AjouterComposantSimple("Ligne2","ad_addr2",null,AdressePersonne);
    It_Personne.AjouterComposantSimple("Ligne3","ad_addr3",null,AdressePersonne);
    Personne_Commune = It_Personne.AjouterComposantSimple("Commune","co_nom",new Array("ad_commune","co_numero","commune"),AdressePersonne,LISTE_DEROULANTE);
    Personne_CP = It_Personne.AjouterComposantSimple("CP","cp_code",new Array("ad_codepostal","cp_numero","codepostal"),AdressePersonne,LISTE_DEROULANTE);

    Contact_Personne = It_Personne.AjouterComposantComplexe("Contact",
							    new Array("pe_numero","ej_personne","estjoignable",
								      "ej_contact","cn_numero","contact"));
    Contact_Personne.AjouterColonne("Tel","cn_tel");
    Contact_Personne.AjouterColonne("Fax","cn_fax");
    Contact_Personne.AjouterColonne("E-mail","cn_email");

    Contact_Personne.AddMode(INSERTION);
    Contact_Personne.AddMode(SUPPRESSION);
    Contact_Personne.AddMode(MODIFICATION);

    It_Personne.AjouterComposantSimple("Tel","cn_tel",null,Contact_Personne);
    It_Personne.AjouterComposantSimple("Fax","cn_fax",null,Contact_Personne);
    It_Personne.AjouterComposantSimple("E-mail","cn_email",null,Contact_Personne);

    It_Personne.LierA(VendeurArticle,It_Personne);

    AllIt.AjouterInterface(It_Personne);

    /* **************************
       Commune
       *********************** */

    var It_Commune,Maitre_Commune;

    /* Nom de l'interface */
    It_Commune = new clInterfaceSimple("Communes");

    /* Composant 'maitre' cad le composant principal */
    Maitre_Commune = It_Commune.AjouterMaitre("Communes","commune");

    Maitre_Commune.AjouterColonne("Nom","co_nom");
    Maitre_Commune.AjouterColonne("Siret","co_siret");

    It_Commune.AjouterComposantSimple("Nom","co_nom");
    It_Commune.AjouterComposantSimple("Siret","co_siret");

    It_Commune.AjouterComposantSimple("Couleur","couleur",null,null,COLOR);

    It_Commune.LierA(Personne_Commune,It_Personne);

    AllIt.AjouterInterface(It_Commune);

    /* **************************
       CP
       *********************** */

    var It_CP,Maitre_CP;

    /* Nom de l'interface */
    It_CP = new clInterfaceSimple("Codes postaux");

    /* Composant 'maitre' cad le composant principal */
    Maitre_CP = It_CP.AjouterMaitre("Codes postaux","codepostal");

    Maitre_CP.AjouterColonne("CP","cp_code");
    Maitre_CP.AjouterColonne("Bureau dist.","cp_bureau");

    It_CP.AjouterComposantSimple("CP","cp_code");
    It_CP.AjouterComposantSimple("Bureau distributeur","cp_bureau");


    /* Communes */

    CommunesCp_Dessus = It_CP.AjouterComposantComplexeIndependant("Communes existantes","commune");
    CommunesCp_Dessus.AjouterColonne("Nom","co_nom" );
    CommunesCp_Dessus.AjouterColonne("Siret","co_siret");

    CommunesCp = It_CP.AjouterComposantListeDouble("Communes",new Array("cp_numero","mc_codepostal","communecp",
									"mc_commune","co_numero","commune"),null,CommunesCp_Dessus);
    CommunesCp.AjouterColonne("Nom","co_nom" );
    CommunesCp.AjouterColonne("Siret","co_siret");

    It_CP.LierA(Personne_CP,It_Personne);

    AllIt.AjouterInterface(It_CP);

    /* **************************
       ACHAT
       *********************** */

    var It_Achat,Maitre_Achat;

    /* Nom de l'interface */
    It_Achat = new clInterfaceSimple("Achat");

    /* Composant 'maitre' cad le composant principal */
    Maitre_Achat = It_Achat.AjouterMaitre("Achat","achat");
    Maitre_Achat.AjouterColonne("Article","ar_nom",new Array("ac_article","ar_numero","article"));
    Maitre_Achat.AjouterColonne("Quantite","ac_quantite");

    AchatArticle=It_Achat.AjouterComposantSimple("Article","ar_nom",new Array("ac_article","ar_numero","article"),null,LISTE_DEROULANTE);
    It_Achat.AjouterComposantSimple("Quantite","ac_quantite");
    It_Achat.AjouterComposantSimple("Date","ac_date");
    It_Achat.AjouterComposantSimple("Perte après achat","ac_differencequantite");
    It_Achat.AjouterComposantSimple("Quantite","ac_quantite");

    It_Achat.AjouterComposantSimple("Note","note",null,null,null,null,null,true);

    AllIt.AjouterInterface(It_Achat);

    /* liaison achat-article */
    It_Article.LierA(AchatArticle,It_Achat);

    /* **************************
       Document
       *********************** */

    var It_Document,Maitre_Document;

    /* Nom de l'interface */
    It_Document = new clInterfaceSimple("Documents");

    /* Composant 'maitre' cad le composant principal */
    Maitre_Document = It_Document.AjouterMaitre("Documents","document");
    Maitre_Document.AjouterColonne("Nom","do_nom");
    Maitre_Document.AjouterColonne("Type","to_nom",new Array("do_typedocument","to_numero","typedocument"));

    TypeDoc=It_Document.AjouterComposantSimple("Type","to_nom",new Array("do_typedocument","to_numero","typedocument"),null,LISTE_DEROULANTE);
    It_Document.AjouterComposantSimple("Nom","do_nom");
    It_Document.AjouterComposantSimple("Date","do_date");
    It_Document.AjouterComposantSimple("Note","note",null,null,null,null,null,true);

    AllIt.AjouterInterface(It_Document);

    /* **************************
       Type de Document
       *********************** */

    var It_TypeDocument,Maitre_TypeDocument;

    /* Nom de l'interface */
    It_TypeDocument = new clInterfaceSimple("Type de documents");

    /* Composant 'maitre' cad le composant principal */
    Maitre_TypeDocument = It_TypeDocument.AjouterMaitre("Type de documents","typedocument");
    Maitre_TypeDocument.AjouterColonne("Nom","to_nom");

    It_TypeDocument.AjouterComposantSimple("Nom","to_nom");
    It_TypeDocument.AjouterComposantSimple("Date","to_description");
    It_TypeDocument.AjouterComposantSimple("Note","note",null,null,null,null,null,true);

    It_TypeDocument.LierA(TypeDoc,It_Document);

    AllIt.AjouterInterface(It_TypeDocument);

    /* **************************
       Prélèvement
       *********************** */

    var It_Prelevement,Maitre_Prelevement;

    /* Nom de l'interface */
    It_Prelevement = new clInterfaceSimple("Prélèvements");

    /* Composant 'maitre' cad le composant principal */
    Maitre_Prelevement = It_Prelevement.AjouterMaitre("Prélèvements","prelevement");
    Maitre_Prelevement.AjouterColonne("Nom","pv_nom");

    It_Prelevement.AjouterComposantSimple("Nom","pv_nom");
    TypePrelevement_Prelevement=It_Prelevement.AjouterComposantSimple("Type","tv_nom",new Array("pv_typeprelevement","tv_numero","typeprelevement"),null,LISTE_DEROULANTE);
    It_Prelevement.AjouterComposantSimple("Abcisse","pv_x");
    It_Prelevement.AjouterComposantSimple("Ordonnée","pv_y");
    It_Prelevement.AjouterComposantSimple("Altitude","pv_z");
    It_Prelevement.AjouterComposantSimple("Couleur","couleur",null,null,COLOR);
    It_Prelevement.AjouterComposantSimple("Note","note",null,null,null,null,null,true);

    AllIt.AjouterInterface(It_Prelevement);


    /* **************************
       Type de Prélèvement
       *********************** */

    var It_TypePrelevement,Maitre_TypePrelevement;

    /* Nom de l'interface */
    It_TypePrelevement = new clInterfaceSimple("Type de prélèvement");

    /* Composant 'maitre' cad le composant principal */
    Maitre_TypePrelevement = It_TypePrelevement.AjouterMaitre("Type de prélèvement","typeprelevement");
    Maitre_TypePrelevement.AjouterColonne("Nom","tv_nom");

    It_TypePrelevement.AjouterComposantSimple("Nom","tv_nom");
    It_TypePrelevement.AjouterComposantSimple("Couleur","couleur",null,null,COLOR);
    It_TypePrelevement.AjouterComposantSimple("Note","note",null,null,null,null,null,true);

    It_TypePrelevement.LierA(TypePrelevement_Prelevement,It_Prelevement);

    AllIt.AjouterInterface(It_TypePrelevement);

    /* **************************
       Produit de Récolte
       *********************** */

    var It_Produitrecolte,Maitre_Produitrecolte;

    /* Nom de l'interface */
    It_Produitrecolte = new clInterfaceSimple("Produits de récolte");

    /* Composant 'maitre' cad le composant principal */
    Maitre_Produitrecolte = It_Produitrecolte.AjouterMaitre("Produits de récolte","produitrecolte");
    Maitre_Produitrecolte.AjouterColonne("Nom","pl_nom");

    It_Produitrecolte.AjouterComposantSimple("Nom","pl_nom");
    It_Produitrecolte.AjouterComposantSimple("Code","pl_code");
    It_Produitrecolte.AjouterComposantSimple("Prix","pl_prix");

    Unite_Produitrecolte=It_Produitrecolte.AjouterComposantSimple("Unité","un_nom",new Array("pl_unite","un_numero","unite"),null,LISTE_DEROULANTE);
    TypeProduit_Produitrecolte=It_Produitrecolte.AjouterComposantSimple("Type de produit","td_nom",new Array("pl_typeproduit","td_numero","typeproduit"),null,LISTE_DEROULANTE);
    Variete_ProduitrecolteArticle=It_Produitrecolte.AjouterComposantSimple("Variete","va_nom",new Array("pl_variete","va_numero","variete"),null,LISTE_DEROULANTE);

    It_Produitrecolte.AjouterComposantSimple("Couleur","couleur",null,null,COLOR);
    It_Produitrecolte.AjouterComposantSimple("Note","note",null,null,null,null,null,true);

    AllIt.AjouterInterface(It_Produitrecolte);

    /* liaisons avec table prec */
    It_Unite.LierA(Unite_Produitrecolte,It_Produitrecolte);
    It_Type_Produit.LierA(TypeProduit_Produitrecolte,It_Produitrecolte);
    It_Variete.LierA(Variete_ProduitrecolteArticle,It_Produitrecolte);

    /* **************************
       Vente
       *********************** */

    var It_Vente,Maitre_Vente;

    /* Nom de l'interface */
    It_Vente = new clInterfaceSimple("Ventes");

    /* Composant 'maitre' cad le composant principal */
    Maitre_Vente = It_Vente.AjouterMaitre("Ventes","vente");
    Maitre_Vente.AjouterColonne("Quantite","ve_quantite");
    Maitre_Vente.AjouterColonne("Prix","ve_prix");
    Maitre_Vente.AjouterColonne("Personne","pe_nom",new Array("ve_personne","pe_numero","personne"));
    Maitre_Vente.AjouterColonne("Récolte","re_libelle",new Array("ve_recolte","re_numero","recolte"));
    Maitre_Vente.AjouterColonne("Reste","re_reste",new Array("ve_recolte","re_numero","recolte"));

    It_Vente.AjouterComposantSimple("Quantite","ve_quantite");
    It_Vente.AjouterComposantSimple("Prix","ve_prix");
    It_Vente.AjouterComposantSimple("Date","ve_date");

    Personne_Vente=It_Vente.AjouterComposantSimple("Personne","pe_nom",new Array("ve_personne","pe_numero","personne"),null,LISTE_DEROULANTE);
    Recolte_Vente=It_Vente.AjouterComposantSimple("Récolte","re_libelle",new Array("ve_recolte","re_numero","recolte"),null,LISTE_DEROULANTE);

    It_Vente.AjouterComposantSimple("Note","note",null,null,null,null,null,true);

    AllIt.AjouterInterface(It_Vente);

    /* liaisons avec table prec */
    It_Personne.LierA(Personne_Vente,It_Vente);


    /* **************************
       Stock Achat
       *********************** */

    var It_StockAchat,Maitre_StockAchat;

    /* Nom de l'interface */
    It_StockAchat = new clInterfaceSimple("Stock d'achat");

    /* Composant 'maitre' cad le composant principal */
    Maitre_StockAchat = It_StockAchat.AjouterMaitre("Stock d'achat","stockachat");
    Maitre_StockAchat.AjouterColonne("Article","sa_article_nom");
    Maitre_StockAchat.AjouterColonne("Entree","sa_entree");
    Maitre_StockAchat.AjouterColonne("Sortie","sa_sortie");
    Maitre_StockAchat.AjouterColonne("Stock","sa_stock");
    //Maitre_StockAchat.AjouterColonne("Unite","sa_unite");
    Maitre_StockAchat.AjouterColonne("Quantité perdue","sa_quantiteperdue");

    Maitre_StockAchat.ResetMode();

    AllIt.AjouterInterface(It_StockAchat);

    //	return AllIt;

    //==============================================================================================*
    //==============================================================================================*
    //==*                                                                                       //==*
    //==*                         F  I  N  A  L  I  S  A  T  I  O  N                            //==*
    //==*                                                                                       //==*
    //==============================================================================================*
    //==============================================================================================*

    //****************************
    // LIENS
    //****************************


    //****************************
    // AJOUT DES ONGLETS
    //****************************

  
    //****************************
    // FIN
    //****************************
    zalert("Fin");
				 
    if (overlay) AllIt.GenererInterface("agrisig_overlay",true,"AgriSIG");
    else AllIt.GenererInterface("agrisig_window",false,"AgriSIG");
    
}


function Charger_Interface()
{
var Col_0_de_Racine=new clAttribut("pe_numerofede","personne",null);

var Col_1_de_Racine=new clAttribut("pe_titrenom","personne",null);

var Col_2_de_Racine=new clAttribut("pe_complement","personne",null);

var Slave_0_de_Racine=new clAttribut("pe_titrenom","personne",null);


	/* Ce composant représente: personne.pe_titrenom sous le nom "Titre/Nom" */
var Compo_Slave_0_de_Racine=new clCompoTextBox(Slave_0_de_Racine,null,"Titre/Nom");
var Slave_1_de_Racine=new clAttribut("pe_complement","personne",null);


	/* Ce composant représente: personne.pe_complement sous le nom "Complement" */
var Compo_Slave_1_de_Racine=new clCompoTextBox(Slave_1_de_Racine,null,"Complement");
var Slave_2_de_Racine=new clAttribut("pe_naissance","personne",null);


	/* Ce composant représente: personne.pe_naissance sous le nom "Date de naissance" */
var Compo_Slave_2_de_Racine=new clCompoTextBox(Slave_2_de_Racine,null,"Date de naissance");
var Slave_3_de_Racine=new clAttribut("pe_typeadherent","personne",null);


	/* Ce composant représente: personne.pe_typeadherent sous le nom "Type d'adherent" */
var Compo_Slave_3_de_Racine=new clCompoTextBox(Slave_3_de_Racine,null,"Type d'adherent");
var Slave_4_de_Racine=new clAttribut("pe_regimefiscale","personne",null);


	/* Ce composant représente: personne.pe_regimefiscale sous le nom "Regime fiscale" */
var Compo_Slave_4_de_Racine=new clCompoTextBox(Slave_4_de_Racine,null,"Regime fiscale");
var Slave_5_de_Racine=new clAttribut("pe_position","personne",null);


	/* Ce composant représente: personne.pe_position sous le nom "Position" */
var Compo_Slave_5_de_Racine=new clCompoTextBox(Slave_5_de_Racine,null,"Position");
var Slave_6_de_Racine=new clAttribut("pe_morale","personne",null);


	/* Ce composant représente: personne.pe_morale sous le nom "Personne morale" */
var Compo_Slave_6_de_Racine=new clCompoCheckBox(Slave_6_de_Racine,null,"Personne morale");
var Slave_7_de_Racine=new clAttribut("pe_etat","personne",null);


	/* Ce composant représente: personne.pe_etat sous le nom "Etat actuel" */
var Compo_Slave_7_de_Racine=new clCompoTextBox(Slave_7_de_Racine,null,"Etat actuel");
var Col_0_de_Slave_8_de_Racine=new clAttribut("cont_type","contact",null);

var Col_1_de_Slave_8_de_Racine=new clAttribut("cont_coordonnees","contact",null);

var Slave_8_de_Racine=new clEnsembleAttributs("contact",
	new Array(
	new clLiaison(null,Col_0_de_Slave_8_de_Racine)
	,new clLiaison(null,Col_1_de_Slave_8_de_Racine)
	),
	null);

var Titre_Slave_8_de_Racine=new Array("Type","Coordonnées");

	/* Ce composant représente: des éléments de la table contact sous le nom "Contact de la personne" */
var Compo_Slave_8_de_Racine=new clCompoListe(Slave_8_de_Racine,null,Titre_Slave_8_de_Racine,"Contact de la personne",true);
var Joint_De_Slave_8_De_Racine=new clJointureMulti("personne",
	new Array(
	new stJointure("est_joignable","pe_numero","pe_numero",null,false)
	,new stJointure("contact","cont_numero","cont_numero",null,false)
	));
var Col_0_de_Slave_9_de_Racine=new clAttribut("ob_niveau","observation",null);

var Col_1_de_Slave_9_de_Racine=new clAttribut("ob_observation","observation",null);

var Slave_9_de_Racine=new clEnsembleAttributs("observation",
	new Array(
	new clLiaison(null,Col_0_de_Slave_9_de_Racine)
	,new clLiaison(null,Col_1_de_Slave_9_de_Racine)
	),
	null);

var Titre_Slave_9_de_Racine=new Array("Importance","Description");

	/* Ce composant représente: des éléments de la table observation sous le nom "Observation(s)" */
var Compo_Slave_9_de_Racine=new clCompoListe(Slave_9_de_Racine,null,Titre_Slave_9_de_Racine,"Observation(s)",true);
var Joint_De_Slave_9_De_Racine=new clJointureMulti("personne",
	new Array(
	new stJointure("observation","pe_numero","pe_numero",null,false)
	));
var Col_0_de_Slave_10_de_Racine=new clAttribut("co_adhesion","cotisation",null);

var Slave_10_de_Racine=new clEnsembleAttributs("cotisation",
	new Array(
	new clLiaison(null,Col_0_de_Slave_10_de_Racine)
	),
	null);

var Titre_Slave_10_de_Racine=new Array("Date d'adhésion");

	/* Ce composant représente: des éléments de la table cotisation sous le nom "Cotisation(s)" */
var Compo_Slave_10_de_Racine=new clCompoListe(Slave_10_de_Racine,null,Titre_Slave_10_de_Racine,"Cotisation(s)",true);
var Joint_De_Slave_10_De_Racine=new clJointureMulti("personne",
	new Array(
	new stJointure("cotisation","pe_numero","pe_numero",null,false)
	));
var Col_0_de_Slave_11_de_Racine=new clAttribut("re_famille","responsabilite",null);

var Joint_De_Col_0_De_Slave_11_de_Racine=new clJointureMulti("est_responsable",
	new Array(
	new stJointure("responsabilite","re_numero","re_numero",null,true)
	));
var Col_1_de_Slave_11_de_Racine=new clAttribut("re_nom","responsabilite",null);

var Joint_De_Col_1_De_Slave_11_de_Racine=new clJointureMulti("est_responsable",
	new Array(
	new stJointure("responsabilite","re_numero","re_numero",null,true)
	));
var Col_2_de_Slave_11_de_Racine=new clAttribut("peac_periodedebut","est_responsable",null);

var Col_3_de_Slave_11_de_Racine=new clAttribut("peac_periodefin","est_responsable",null);

var Slave_11_de_Racine=new clEnsembleAttributs("est_responsable",
	new Array(
	new clLiaison(Joint_De_Col_0_De_Slave_11_de_Racine,Col_0_de_Slave_11_de_Racine)
	,new clLiaison(Joint_De_Col_1_De_Slave_11_de_Racine,Col_1_de_Slave_11_de_Racine)
	,new clLiaison(null,Col_2_de_Slave_11_de_Racine)
	,new clLiaison(null,Col_3_de_Slave_11_de_Racine)
	),
	null);

var Titre_Slave_11_de_Racine=new Array("Famille","Responsabilité","De","A");

	/* Ce composant représente: des éléments de la table est_responsable sous le nom "Responsabilité(s)" */
var Compo_Slave_11_de_Racine=new clCompoListe(Slave_11_de_Racine,null,Titre_Slave_11_de_Racine,"Responsabilité(s)",true);
var Joint_De_Slave_11_De_Racine=new clJointureMulti("personne",
	new Array(
	new stJointure("est_responsable","pe_numero","pe_numero",null,false)
	));
var Col_0_de_Slave_12_de_Racine=new clAttribut("el_typeadresse","est_localise",null);

var Col_1_de_Slave_12_de_Racine=new clAttribut("ad_addr1","adresse",null);

var Joint_De_Col_1_De_Slave_12_de_Racine=new clJointureMulti("est_localise",
	new Array(
	new stJointure("adresse","ad_numero","ad_numero",null,true)
	));
var Col_2_de_Slave_12_de_Racine=new clAttribut("ad_addr2","adresse",null);

var Joint_De_Col_2_De_Slave_12_de_Racine=new clJointureMulti("est_localise",
	new Array(
	new stJointure("adresse","ad_numero","ad_numero",null,true)
	));
var Col_3_de_Slave_12_de_Racine=new clAttribut("ad_addr3","adresse",null);

var Joint_De_Col_3_De_Slave_12_de_Racine=new clJointureMulti("est_localise",
	new Array(
	new stJointure("adresse","ad_numero","ad_numero",null,true)
	));
var Col_4_de_Slave_12_de_Racine=new clAttribut("cp_codepostal","codepostal",null);

var Joint_De_Col_4_De_Slave_12_de_Racine=new clJointureMulti("est_localise",
	new Array(
	new stJointure("adresse","ad_numero","ad_numero",null,true)
	,new stJointure("codepostal","cp_numero","cp_numero",null,true)
	));
var Col_5_de_Slave_12_de_Racine=new clAttribut("vi_nom","ville",null);

var Joint_De_Col_5_De_Slave_12_de_Racine=new clJointureMulti("est_localise",
	new Array(
	new stJointure("adresse","ad_numero","ad_numero",null,true)
	,new stJointure("ville","vi_numero","vi_numero",null,true)
	));
var Slave_0_de_Slave_12_de_Racine=new clAttribut("ad_addr1","adresse",null);


	/* Ce composant représente: adresse.ad_addr1 sous le nom "Adresse" */
var Compo_Slave_0_de_Slave_12_de_Racine=new clCompoTextBox(Slave_0_de_Slave_12_de_Racine,null,"Adresse");
var Joint_De_Slave_0_De_Slave_12_de_Racine=new clJointureMulti("est_localise",
	new Array(
	new stJointure("adresse","ad_numero","ad_numero",null,false)
	));
var Slave_1_de_Slave_12_de_Racine=new clAttribut("ad_addr2","adresse",null);


	/* Ce composant représente: adresse.ad_addr2 sous le nom "      " */
var Compo_Slave_1_de_Slave_12_de_Racine=new clCompoTextBox(Slave_1_de_Slave_12_de_Racine,null,"      ");
var Joint_De_Slave_1_De_Slave_12_de_Racine=new clJointureMulti("est_localise",
	new Array(
	new stJointure("adresse","ad_numero","ad_numero",null,false)
	));
var Slave_2_de_Slave_12_de_Racine=new clAttribut("ad_addr3","adresse",null);


	/* Ce composant représente: adresse.ad_addr3 sous le nom "      " */
var Compo_Slave_2_de_Slave_12_de_Racine=new clCompoTextBox(Slave_2_de_Slave_12_de_Racine,null,"      ");
var Joint_De_Slave_2_De_Slave_12_de_Racine=new clJointureMulti("est_localise",
	new Array(
	new stJointure("adresse","ad_numero","ad_numero",null,false)
	));
var Slave_3_de_Slave_12_de_Racine=new clAttribut("cp_codepostal","codepostal",null);


	/* Ce composant représente: codepostal.cp_codepostal sous le nom "Code Postal" */
var Compo_Slave_3_de_Slave_12_de_Racine=new clCompoTextBox(Slave_3_de_Slave_12_de_Racine,null,"Code Postal");
var Joint_De_Slave_3_De_Slave_12_de_Racine=new clJointureMulti("est_localise",
	new Array(
	new stJointure("adresse","ad_numero","ad_numero",null,false)
	,new stJointure("codepostal","cp_numero","cp_numero",null,false)
	));
var Slave_4_de_Slave_12_de_Racine=new clAttribut("vi_nom","ville",null);


	/* Ce composant représente: ville.vi_nom sous le nom "Ville" */
var Compo_Slave_4_de_Slave_12_de_Racine=new clCompoTextBox(Slave_4_de_Slave_12_de_Racine,null,"Ville");
var Joint_De_Slave_4_De_Slave_12_de_Racine=new clJointureMulti("est_localise",
	new Array(
	new stJointure("adresse","ad_numero","ad_numero",null,false)
	,new stJointure("ville","vi_numero","vi_numero",null,false)
	));
var Slave_12_de_Racine=new clEnsembleAttributs("est_localise",
	new Array(
	new clLiaison(null,Col_0_de_Slave_12_de_Racine)
	,new clLiaison(Joint_De_Col_1_De_Slave_12_de_Racine,Col_1_de_Slave_12_de_Racine)
	,new clLiaison(Joint_De_Col_2_De_Slave_12_de_Racine,Col_2_de_Slave_12_de_Racine)
	,new clLiaison(Joint_De_Col_3_De_Slave_12_de_Racine,Col_3_de_Slave_12_de_Racine)
	,new clLiaison(Joint_De_Col_4_De_Slave_12_de_Racine,Col_4_de_Slave_12_de_Racine)
	,new clLiaison(Joint_De_Col_5_De_Slave_12_de_Racine,Col_5_de_Slave_12_de_Racine)
	),
	new Array(
	new clLiaison(Joint_De_Slave_0_De_Slave_12_de_Racine,Slave_0_de_Slave_12_de_Racine)
	,new clLiaison(Joint_De_Slave_1_De_Slave_12_de_Racine,Slave_1_de_Slave_12_de_Racine)
	,new clLiaison(Joint_De_Slave_2_De_Slave_12_de_Racine,Slave_2_de_Slave_12_de_Racine)
	,new clLiaison(Joint_De_Slave_3_De_Slave_12_de_Racine,Slave_3_de_Slave_12_de_Racine)
	,new clLiaison(Joint_De_Slave_4_De_Slave_12_de_Racine,Slave_4_de_Slave_12_de_Racine)
	));

var Titre_Slave_12_de_Racine=new Array("Type","Ligne 1","Ligne 2","Ligne 3","CP","Ville");

	/* Ce composant représente: des éléments de la table est_localise sous le nom "Adresse" */
var Compo_Slave_12_de_Racine=new clCompoListe(Slave_12_de_Racine,null,Titre_Slave_12_de_Racine,"Adresse",true);
Compo_Slave_0_de_Slave_12_de_Racine.GenererXUL(top.document.getElementById("5_Slaves"));
Compo_Slave_1_de_Slave_12_de_Racine.GenererXUL(top.document.getElementById("5_Slaves"));
Compo_Slave_2_de_Slave_12_de_Racine.GenererXUL(top.document.getElementById("5_Slaves"));
Compo_Slave_3_de_Slave_12_de_Racine.GenererXUL(top.document.getElementById("5_Slaves"));
Compo_Slave_4_de_Slave_12_de_Racine.GenererXUL(top.document.getElementById("5_Slaves"));
var Joint_De_Slave_12_De_Racine=new clJointureMulti("personne",
	new Array(
	new stJointure("est_localise","pe_numero","pe_numero",null,false)
	));
var Col_0_de_Slave_13_de_Racine=new clAttribut("do_libelle","dossier",null);

var Col_1_de_Slave_13_de_Racine=new clAttribut("do_dateouverture","dossier",null);

var Col_2_de_Slave_13_de_Racine=new clAttribut("do_datefermeture","dossier",null);

var Col_3_de_Slave_13_de_Racine=new clAttribut("do_type","dossier",null);

var Col_4_de_Slave_13_de_Racine=new clAttribut("do_etat","dossier",null);

var Slave_0_de_Slave_13_de_Racine=new clAttribut("do_libelle","dossier",null);


	/* Ce composant représente: dossier.do_libelle sous le nom "Libellé" */
var Compo_Slave_0_de_Slave_13_de_Racine=new clCompoTextBox(Slave_0_de_Slave_13_de_Racine,null,"Libellé");
var Slave_1_de_Slave_13_de_Racine=new clAttribut("do_dateouverture","dossier",null);


	/* Ce composant représente: dossier.do_dateouverture sous le nom "Date d'ouverture" */
var Compo_Slave_1_de_Slave_13_de_Racine=new clCompoTextBox(Slave_1_de_Slave_13_de_Racine,null,"Date d'ouverture");
var Slave_2_de_Slave_13_de_Racine=new clAttribut("do_datefermeture","dossier",null);


	/* Ce composant représente: dossier.do_datefermeture sous le nom "Date de fermeture" */
var Compo_Slave_2_de_Slave_13_de_Racine=new clCompoTextBox(Slave_2_de_Slave_13_de_Racine,null,"Date de fermeture");
var Slave_3_de_Slave_13_de_Racine=new clAttribut("do_type","dossier",null);


	/* Ce composant représente: dossier.do_type sous le nom "Type" */
var Compo_Slave_3_de_Slave_13_de_Racine=new clCompoTextBox(Slave_3_de_Slave_13_de_Racine,null,"Type");
var Slave_4_de_Slave_13_de_Racine=new clAttribut("do_etat","dossier",null);


	/* Ce composant représente: dossier.do_etat sous le nom "Etat" */
var Compo_Slave_4_de_Slave_13_de_Racine=new clCompoTextBox(Slave_4_de_Slave_13_de_Racine,null,"Etat");
var Col_0_de_Slave_5_de_Slave_13_de_Racine=new clAttribut("lt_libelle","libeltravaux",null);

var Joint_De_Col_0_De_Slave_5_de_Slave_13_de_Racine=new clJointureMulti("travaux",
	new Array(
	new stJointure("libeltravaux2","tr_numero","tr_numero",null,true)
	,new stJointure("libeltravaux","lt_numero","lt_numero",null,true)
	));
var Col_1_de_Slave_5_de_Slave_13_de_Racine=new clAttribut("tr_periodedebut","travaux",null);

var Col_2_de_Slave_5_de_Slave_13_de_Racine=new clAttribut("tr_periodefin","travaux",null);

var Col_3_de_Slave_5_de_Slave_13_de_Racine=new clAttribut("tr_temps","travaux",null);

var Col_4_de_Slave_5_de_Slave_13_de_Racine=new clAttribut("tr_type","travaux",null);

var Slave_5_de_Slave_13_de_Racine=new clEnsembleAttributs("travaux",
	new Array(
	new clLiaison(Joint_De_Col_0_De_Slave_5_de_Slave_13_de_Racine,Col_0_de_Slave_5_de_Slave_13_de_Racine)
	,new clLiaison(null,Col_1_de_Slave_5_de_Slave_13_de_Racine)
	,new clLiaison(null,Col_2_de_Slave_5_de_Slave_13_de_Racine)
	,new clLiaison(null,Col_3_de_Slave_5_de_Slave_13_de_Racine)
	,new clLiaison(null,Col_4_de_Slave_5_de_Slave_13_de_Racine)
	),
	null);

var Titre_Slave_5_de_Slave_13_de_Racine=new Array("Libellé","Date début","Date fin","Durée","Type");

	/* Ce composant représente: des éléments de la table travaux sous le nom "Travaux" */
var Compo_Slave_5_de_Slave_13_de_Racine=new clCompoListe(Slave_5_de_Slave_13_de_Racine,null,Titre_Slave_5_de_Slave_13_de_Racine,"Travaux",true);
var Joint_De_Slave_5_De_Slave_13_de_Racine=new clJointureMulti("dossier",
	new Array(
	new stJointure("travaux","do_numero","do_numero",null,false)
	));
var Slave_13_de_Racine=new clEnsembleAttributs("dossier",
	new Array(
	new clLiaison(null,Col_0_de_Slave_13_de_Racine)
	,new clLiaison(null,Col_1_de_Slave_13_de_Racine)
	,new clLiaison(null,Col_2_de_Slave_13_de_Racine)
	,new clLiaison(null,Col_3_de_Slave_13_de_Racine)
	,new clLiaison(null,Col_4_de_Slave_13_de_Racine)
	),
	new Array(
	new clLiaison(null,Slave_0_de_Slave_13_de_Racine)
	,new clLiaison(null,Slave_1_de_Slave_13_de_Racine)
	,new clLiaison(null,Slave_2_de_Slave_13_de_Racine)
	,new clLiaison(null,Slave_3_de_Slave_13_de_Racine)
	,new clLiaison(null,Slave_4_de_Slave_13_de_Racine)
	,new clLiaison(Joint_De_Slave_5_De_Slave_13_de_Racine,Slave_5_de_Slave_13_de_Racine)
	));

var Titre_Slave_13_de_Racine=new Array("Libellé","Date d'ouverture","Date de fermeture","Type","Etat");

	/* Ce composant représente: des éléments de la table dossier sous le nom "Dossier" */
var Compo_Slave_13_de_Racine=new clCompoListe(Slave_13_de_Racine,null,Titre_Slave_13_de_Racine,"Dossier",true);
Compo_Slave_0_de_Slave_13_de_Racine.GenererXUL(top.document.getElementById("6_Slaves"));
Compo_Slave_1_de_Slave_13_de_Racine.GenererXUL(top.document.getElementById("6_Slaves"));
Compo_Slave_2_de_Slave_13_de_Racine.GenererXUL(top.document.getElementById("6_Slaves"));
Compo_Slave_3_de_Slave_13_de_Racine.GenererXUL(top.document.getElementById("6_Slaves"));
Compo_Slave_4_de_Slave_13_de_Racine.GenererXUL(top.document.getElementById("6_Slaves"));
Compo_Slave_5_de_Slave_13_de_Racine.GenererXUL(top.document.getElementById("7_Maitre"));
var Joint_De_Slave_13_De_Racine=new clJointureMulti("personne",
	new Array(
	new stJointure("dossier","pe_numero","pe_numero",null,false)
	));
var Col_0_de_Slave_14_de_Racine=new clAttribut("ab_reabonne","abonnement",null);

var Slave_0_de_Slave_14_de_Racine=new clAttribut("ab_categorie","abonnement",null);


	/* Ce composant représente: abonnement.ab_categorie sous le nom "Catégorie" */
var Compo_Slave_0_de_Slave_14_de_Racine=new clCompoTextBox(Slave_0_de_Slave_14_de_Racine,null,"Catégorie");
var Slave_1_de_Slave_14_de_Racine=new clAttribut("tab_tarif","tarif_abonnement",null);


	/* Ce composant représente: tarif_abonnement.tab_tarif sous le nom "Tarif" */
var Compo_Slave_1_de_Slave_14_de_Racine=new clCompoTextBox(Slave_1_de_Slave_14_de_Racine,null,"Tarif");
var Joint_De_Slave_1_De_Slave_14_de_Racine=new clJointureMulti("abonnement",
	new Array(
	new stJointure("tarif_abonnement","tab_numero","tab_numero",null,false)
	));
var Slave_2_de_Slave_14_de_Racine=new clAttribut("ab_reabonne","abonnement",null);


	/* Ce composant représente: abonnement.ab_reabonne sous le nom "Date abonnement" */
var Compo_Slave_2_de_Slave_14_de_Racine=new clCompoTextBox(Slave_2_de_Slave_14_de_Racine,null,"Date abonnement");
var Slave_3_de_Slave_14_de_Racine=new clAttribut("ab_debutservice","abonnement",null);


	/* Ce composant représente: abonnement.ab_debutservice sous le nom "Service du" */
var Compo_Slave_3_de_Slave_14_de_Racine=new clCompoTextBox(Slave_3_de_Slave_14_de_Racine,null,"Service du");
var Slave_4_de_Slave_14_de_Racine=new clAttribut("ab_finservice","abonnement",null);


	/* Ce composant représente: abonnement.ab_finservice sous le nom "au" */
var Compo_Slave_4_de_Slave_14_de_Racine=new clCompoTextBox(Slave_4_de_Slave_14_de_Racine,null,"au");
var Slave_5_de_Slave_14_de_Racine=new clAttribut("ab_reste","abonnement",null);


	/* Ce composant représente: abonnement.ab_reste sous le nom "Reste à livrer" */
var Compo_Slave_5_de_Slave_14_de_Racine=new clCompoTextBox(Slave_5_de_Slave_14_de_Racine,null,"Reste à livrer");
var Slave_6_de_Slave_14_de_Racine=new clAttribut("ab_nbrexemplaire","abonnement",null);


	/* Ce composant représente: abonnement.ab_nbrexemplaire sous le nom "Nombre d'exemplaire à livrer par service" */
var Compo_Slave_6_de_Slave_14_de_Racine=new clCompoTextBox(Slave_6_de_Slave_14_de_Racine,null,"Nombre d'exemplaire à livrer par service");
var Slave_7_de_Slave_14_de_Racine=new clAttribut("ab_famille","abonnement",null);


	/* Ce composant représente: abonnement.ab_famille sous le nom "Famille" */
var Compo_Slave_7_de_Slave_14_de_Racine=new clCompoTextBox(Slave_7_de_Slave_14_de_Racine,null,"Famille");
var Slave_8_de_Slave_14_de_Racine=new clAttribut("ab_origine","abonnement",null);


	/* Ce composant représente: abonnement.ab_origine sous le nom "Origine" */
var Compo_Slave_8_de_Slave_14_de_Racine=new clCompoTextBox(Slave_8_de_Slave_14_de_Racine,null,"Origine");
var Col_0_de_Slave_9_de_Slave_14_de_Racine=new clAttribut("de_nom","destinataire",null);

var Col_1_de_Slave_9_de_Slave_14_de_Racine=new clAttribut("ad_addr1","adresse",null);

var Joint_De_Col_1_De_Slave_9_de_Slave_14_de_Racine=new clJointureMulti("destinataire",
	new Array(
	new stJointure("adresse","ad_numero","ad_numero",null,true)
	));
var Col_2_de_Slave_9_de_Slave_14_de_Racine=new clAttribut("ad_addr2","adresse",null);

var Joint_De_Col_2_De_Slave_9_de_Slave_14_de_Racine=new clJointureMulti("destinataire",
	new Array(
	new stJointure("adresse","ad_numero","ad_numero",null,true)
	));
var Col_3_de_Slave_9_de_Slave_14_de_Racine=new clAttribut("ad_addr3","adresse",null);

var Joint_De_Col_3_De_Slave_9_de_Slave_14_de_Racine=new clJointureMulti("destinataire",
	new Array(
	new stJointure("adresse","ad_numero","ad_numero",null,true)
	));
var Col_4_de_Slave_9_de_Slave_14_de_Racine=new clAttribut("cp_codepostal","codepostal",null);

var Joint_De_Col_4_De_Slave_9_de_Slave_14_de_Racine=new clJointureMulti("destinataire",
	new Array(
	new stJointure("adresse","ad_numero","ad_numero",null,true)
	,new stJointure("codepostal","cp_numero","cp_numero",null,true)
	));
var Col_5_de_Slave_9_de_Slave_14_de_Racine=new clAttribut("vi_nom","ville",null);

var Joint_De_Col_5_De_Slave_9_de_Slave_14_de_Racine=new clJointureMulti("destinataire",
	new Array(
	new stJointure("adresse","ad_numero","ad_numero",null,true)
	,new stJointure("ville","vi_numero","vi_numero",null,true)
	));
var Slave_0_de_Slave_9_de_Slave_14_de_Racine=new clAttribut("de_nom","destinataire",null);


	/* Ce composant représente: destinataire.de_nom sous le nom "Nom" */
var Compo_Slave_0_de_Slave_9_de_Slave_14_de_Racine=new clCompoTextBox(Slave_0_de_Slave_9_de_Slave_14_de_Racine,null,"Nom");
var Slave_1_de_Slave_9_de_Slave_14_de_Racine=new clAttribut("ad_addr1","adresse",null);


	/* Ce composant représente: adresse.ad_addr1 sous le nom "Adresse" */
var Compo_Slave_1_de_Slave_9_de_Slave_14_de_Racine=new clCompoTextBox(Slave_1_de_Slave_9_de_Slave_14_de_Racine,null,"Adresse");
var Joint_De_Slave_1_De_Slave_9_de_Slave_14_de_Racine=new clJointureMulti("destinataire",
	new Array(
	new stJointure("adresse","ad_numero","ad_numero",null,false)
	));
var Slave_2_de_Slave_9_de_Slave_14_de_Racine=new clAttribut("ad_addr2","adresse",null);


	/* Ce composant représente: adresse.ad_addr2 sous le nom "       " */
var Compo_Slave_2_de_Slave_9_de_Slave_14_de_Racine=new clCompoTextBox(Slave_2_de_Slave_9_de_Slave_14_de_Racine,null,"       ");
var Joint_De_Slave_2_De_Slave_9_de_Slave_14_de_Racine=new clJointureMulti("destinataire",
	new Array(
	new stJointure("adresse","ad_numero","ad_numero",null,false)
	));
var Slave_3_de_Slave_9_de_Slave_14_de_Racine=new clAttribut("ad_addr3","adresse",null);


	/* Ce composant représente: adresse.ad_addr3 sous le nom "       " */
var Compo_Slave_3_de_Slave_9_de_Slave_14_de_Racine=new clCompoTextBox(Slave_3_de_Slave_9_de_Slave_14_de_Racine,null,"       ");
var Joint_De_Slave_3_De_Slave_9_de_Slave_14_de_Racine=new clJointureMulti("destinataire",
	new Array(
	new stJointure("adresse","ad_numero","ad_numero",null,false)
	));
var Slave_4_de_Slave_9_de_Slave_14_de_Racine=new clAttribut("cp_codepostal","codepostal",null);


	/* Ce composant représente: codepostal.cp_codepostal sous le nom "Code Postal" */
var Compo_Slave_4_de_Slave_9_de_Slave_14_de_Racine=new clCompoTextBox(Slave_4_de_Slave_9_de_Slave_14_de_Racine,null,"Code Postal");
var Joint_De_Slave_4_De_Slave_9_de_Slave_14_de_Racine=new clJointureMulti("destinataire",
	new Array(
	new stJointure("adresse","ad_numero","ad_numero",null,false)
	,new stJointure("codepostal","cp_numero","cp_numero",null,false)
	));
var Slave_5_de_Slave_9_de_Slave_14_de_Racine=new clAttribut("vi_nom","ville",null);


	/* Ce composant représente: ville.vi_nom sous le nom "Ville" */
var Compo_Slave_5_de_Slave_9_de_Slave_14_de_Racine=new clCompoTextBox(Slave_5_de_Slave_9_de_Slave_14_de_Racine,null,"Ville");
var Joint_De_Slave_5_De_Slave_9_de_Slave_14_de_Racine=new clJointureMulti("destinataire",
	new Array(
	new stJointure("adresse","ad_numero","ad_numero",null,false)
	,new stJointure("ville","vi_numero","vi_numero",null,false)
	));
var Slave_9_de_Slave_14_de_Racine=new clEnsembleAttributs("destinataire",
	new Array(
	new clLiaison(null,Col_0_de_Slave_9_de_Slave_14_de_Racine)
	,new clLiaison(Joint_De_Col_1_De_Slave_9_de_Slave_14_de_Racine,Col_1_de_Slave_9_de_Slave_14_de_Racine)
	,new clLiaison(Joint_De_Col_2_De_Slave_9_de_Slave_14_de_Racine,Col_2_de_Slave_9_de_Slave_14_de_Racine)
	,new clLiaison(Joint_De_Col_3_De_Slave_9_de_Slave_14_de_Racine,Col_3_de_Slave_9_de_Slave_14_de_Racine)
	,new clLiaison(Joint_De_Col_4_De_Slave_9_de_Slave_14_de_Racine,Col_4_de_Slave_9_de_Slave_14_de_Racine)
	,new clLiaison(Joint_De_Col_5_De_Slave_9_de_Slave_14_de_Racine,Col_5_de_Slave_9_de_Slave_14_de_Racine)
	),
	new Array(
	new clLiaison(null,Slave_0_de_Slave_9_de_Slave_14_de_Racine)
	,new clLiaison(Joint_De_Slave_1_De_Slave_9_de_Slave_14_de_Racine,Slave_1_de_Slave_9_de_Slave_14_de_Racine)
	,new clLiaison(Joint_De_Slave_2_De_Slave_9_de_Slave_14_de_Racine,Slave_2_de_Slave_9_de_Slave_14_de_Racine)
	,new clLiaison(Joint_De_Slave_3_De_Slave_9_de_Slave_14_de_Racine,Slave_3_de_Slave_9_de_Slave_14_de_Racine)
	,new clLiaison(Joint_De_Slave_4_De_Slave_9_de_Slave_14_de_Racine,Slave_4_de_Slave_9_de_Slave_14_de_Racine)
	,new clLiaison(Joint_De_Slave_5_De_Slave_9_de_Slave_14_de_Racine,Slave_5_de_Slave_9_de_Slave_14_de_Racine)
	));

var Titre_Slave_9_de_Slave_14_de_Racine=new Array("Nom","Adresse","       ","       ","Code Postal","Ville");

	/* Ce composant représente: des éléments de la table destinataire sous le nom "Destinataire" */
var Compo_Slave_9_de_Slave_14_de_Racine=new clCompoListe(Slave_9_de_Slave_14_de_Racine,null,Titre_Slave_9_de_Slave_14_de_Racine,"Destinataire",true);
Compo_Slave_0_de_Slave_9_de_Slave_14_de_Racine.GenererXUL(top.document.getElementById("9_Slaves"));
Compo_Slave_1_de_Slave_9_de_Slave_14_de_Racine.GenererXUL(top.document.getElementById("9_Slaves"));
Compo_Slave_2_de_Slave_9_de_Slave_14_de_Racine.GenererXUL(top.document.getElementById("9_Slaves"));
Compo_Slave_3_de_Slave_9_de_Slave_14_de_Racine.GenererXUL(top.document.getElementById("9_Slaves"));
Compo_Slave_4_de_Slave_9_de_Slave_14_de_Racine.GenererXUL(top.document.getElementById("9_Slaves"));
Compo_Slave_5_de_Slave_9_de_Slave_14_de_Racine.GenererXUL(top.document.getElementById("9_Slaves"));
var Joint_De_Slave_9_De_Slave_14_de_Racine=new clJointureMulti("abonnement",
	new Array(
	new stJointure("destinataire","ab_numero","ab_numero",null,false)
	));
var Slave_14_de_Racine=new clEnsembleAttributs("abonnement",
	new Array(
	new clLiaison(null,Col_0_de_Slave_14_de_Racine)
	),
	new Array(
	new clLiaison(null,Slave_0_de_Slave_14_de_Racine)
	,new clLiaison(Joint_De_Slave_1_De_Slave_14_de_Racine,Slave_1_de_Slave_14_de_Racine)
	,new clLiaison(null,Slave_2_de_Slave_14_de_Racine)
	,new clLiaison(null,Slave_3_de_Slave_14_de_Racine)
	,new clLiaison(null,Slave_4_de_Slave_14_de_Racine)
	,new clLiaison(null,Slave_5_de_Slave_14_de_Racine)
	,new clLiaison(null,Slave_6_de_Slave_14_de_Racine)
	,new clLiaison(null,Slave_7_de_Slave_14_de_Racine)
	,new clLiaison(null,Slave_8_de_Slave_14_de_Racine)
	,new clLiaison(Joint_De_Slave_9_De_Slave_14_de_Racine,Slave_9_de_Slave_14_de_Racine)
	));

var Titre_Slave_14_de_Racine=new Array("Date de l'abonnement");

	/* Ce composant représente: des éléments de la table abonnement sous le nom "Abonnement" */
var Compo_Slave_14_de_Racine=new clCompoListe(Slave_14_de_Racine,null,Titre_Slave_14_de_Racine,"Abonnement",true);
Compo_Slave_0_de_Slave_14_de_Racine.GenererXUL(top.document.getElementById("8_Slaves"));
Compo_Slave_1_de_Slave_14_de_Racine.GenererXUL(top.document.getElementById("8_Slaves"));
Compo_Slave_2_de_Slave_14_de_Racine.GenererXUL(top.document.getElementById("8_Slaves"));
Compo_Slave_3_de_Slave_14_de_Racine.GenererXUL(top.document.getElementById("8_Slaves"));
Compo_Slave_4_de_Slave_14_de_Racine.GenererXUL(top.document.getElementById("8_Slaves"));
Compo_Slave_5_de_Slave_14_de_Racine.GenererXUL(top.document.getElementById("8_Slaves"));
Compo_Slave_6_de_Slave_14_de_Racine.GenererXUL(top.document.getElementById("8_Slaves"));
Compo_Slave_7_de_Slave_14_de_Racine.GenererXUL(top.document.getElementById("8_Slaves"));
Compo_Slave_8_de_Slave_14_de_Racine.GenererXUL(top.document.getElementById("8_Slaves"));
Compo_Slave_9_de_Slave_14_de_Racine.GenererXUL(top.document.getElementById("9_Maitre"));
var Joint_De_Slave_14_De_Racine=new clJointureMulti("personne",
	new Array(
	new stJointure("abonnement","pe_numero","pe_numero",null,false)
	));
var Racine=new clEnsembleAttributs("personne",
	new Array(
	new clLiaison(null,Col_0_de_Racine)
	,new clLiaison(null,Col_1_de_Racine)
	,new clLiaison(null,Col_2_de_Racine)
	),
	new Array(
	new clLiaison(null,Slave_0_de_Racine)
	,new clLiaison(null,Slave_1_de_Racine)
	,new clLiaison(null,Slave_2_de_Racine)
	,new clLiaison(null,Slave_3_de_Racine)
	,new clLiaison(null,Slave_4_de_Racine)
	,new clLiaison(null,Slave_5_de_Racine)
	,new clLiaison(null,Slave_6_de_Racine)
	,new clLiaison(null,Slave_7_de_Racine)
	,new clLiaison(Joint_De_Slave_8_De_Racine,Slave_8_de_Racine)
	,new clLiaison(Joint_De_Slave_9_De_Racine,Slave_9_de_Racine)
	,new clLiaison(Joint_De_Slave_10_De_Racine,Slave_10_de_Racine)
	,new clLiaison(Joint_De_Slave_11_De_Racine,Slave_11_de_Racine)
	,new clLiaison(Joint_De_Slave_12_De_Racine,Slave_12_de_Racine)
	,new clLiaison(Joint_De_Slave_13_De_Racine,Slave_13_de_Racine)
	,new clLiaison(Joint_De_Slave_14_De_Racine,Slave_14_de_Racine)
	));

var Titre_Racine=new Array("N°Adhérent","Nom","Complement");

	/* Ce composant représente: des éléments de la table personne sous le nom "Personnes existantes" */
var Compo_Racine=new clCompoListe(Racine,clInterfaceFiltrageVide,Titre_Racine,"Personnes existantes",true);
Compo_Slave_0_de_Racine.GenererXUL(top.document.getElementById("haut_gauche"));
Compo_Slave_1_de_Racine.GenererXUL(top.document.getElementById("haut_gauche"));
Compo_Slave_2_de_Racine.GenererXUL(top.document.getElementById("haut_gauche"));
Compo_Slave_3_de_Racine.GenererXUL(top.document.getElementById("haut_gauche"));
Compo_Slave_4_de_Racine.GenererXUL(top.document.getElementById("haut_droit"));
Compo_Slave_5_de_Racine.GenererXUL(top.document.getElementById("haut_droit"));
Compo_Slave_6_de_Racine.GenererXUL(top.document.getElementById("haut_droit"));
Compo_Slave_7_de_Racine.GenererXUL(top.document.getElementById("haut_droit"));
Compo_Slave_8_de_Racine.GenererXUL(top.document.getElementById("1_Maitre"));
Compo_Slave_9_de_Racine.GenererXUL(top.document.getElementById("2_Maitre"));
Compo_Slave_10_de_Racine.GenererXUL(top.document.getElementById("3_Maitre"));
Compo_Slave_11_de_Racine.GenererXUL(top.document.getElementById("4_Maitre"));
Compo_Slave_12_de_Racine.GenererXUL(top.document.getElementById("5_Maitre"));
Compo_Slave_13_de_Racine.GenererXUL(top.document.getElementById("6_Maitre"));
Compo_Slave_14_de_Racine.GenererXUL(top.document.getElementById("8_Maitre"));
Compo_Racine.GenererXUL(top.document.getElementById("0_Maitre"));
Compo_Racine.Refresh();
Compo_Racine.AfterRefreshByMaitre();
}

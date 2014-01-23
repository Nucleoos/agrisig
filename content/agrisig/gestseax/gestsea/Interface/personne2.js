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
var Col_0_de_Slave_9_de_Racine=new clAttribut("el_typeadresse","est_localise",null);

var Col_1_de_Slave_9_de_Racine=new clAttribut("ad_addr1","adresse",null);

var Joint_De_Col_1_De_Slave_9_de_Racine=new clJointureMulti("est_localise",
	new Array(
	new stJointure("adresse","ad_numero","ad_numero",null,true)
	));
var Col_2_de_Slave_9_de_Racine=new clAttribut("ad_addr2","adresse",null);

var Joint_De_Col_2_De_Slave_9_de_Racine=new clJointureMulti("est_localise",
	new Array(
	new stJointure("adresse","ad_numero","ad_numero",null,true)
	));
var Col_3_de_Slave_9_de_Racine=new clAttribut("ad_addr3","adresse",null);

var Joint_De_Col_3_De_Slave_9_de_Racine=new clJointureMulti("est_localise",
	new Array(
	new stJointure("adresse","ad_numero","ad_numero",null,true)
	));
var Col_4_de_Slave_9_de_Racine=new clAttribut("cp_codepostal","codepostal",null);

var Joint_De_Col_4_De_Slave_9_de_Racine=new clJointureMulti("est_localise",
	new Array(
	new stJointure("adresse","ad_numero","ad_numero",null,true)
	,new stJointure("codepostal","cp_numero","cp_numero",null,true)
	));
var Col_5_de_Slave_9_de_Racine=new clAttribut("vi_nom","ville",null);

var Joint_De_Col_5_De_Slave_9_de_Racine=new clJointureMulti("est_localise",
	new Array(
	new stJointure("adresse","ad_numero","ad_numero",null,true)
	,new stJointure("ville","vi_numero","vi_numero",null,true)
	));
var Col_6_de_Slave_9_de_Racine=new clAttribut("vi_departement","ville",null);

var Joint_De_Col_6_De_Slave_9_de_Racine=new clJointureMulti("est_localise",
	new Array(
	new stJointure("adresse","ad_numero","ad_numero",null,true)
	,new stJointure("ville","vi_numero","vi_numero",null,true)
	));
var Slave_9_de_Racine=new clEnsembleAttributs("est_localise",
	new Array(
	new clLiaison(null,Col_0_de_Slave_9_de_Racine)
	,new clLiaison(Joint_De_Col_1_De_Slave_9_de_Racine,Col_1_de_Slave_9_de_Racine)
	,new clLiaison(Joint_De_Col_2_De_Slave_9_de_Racine,Col_2_de_Slave_9_de_Racine)
	,new clLiaison(Joint_De_Col_3_De_Slave_9_de_Racine,Col_3_de_Slave_9_de_Racine)
	,new clLiaison(Joint_De_Col_4_De_Slave_9_de_Racine,Col_4_de_Slave_9_de_Racine)
	,new clLiaison(Joint_De_Col_5_De_Slave_9_de_Racine,Col_5_de_Slave_9_de_Racine)
	,new clLiaison(Joint_De_Col_6_De_Slave_9_de_Racine,Col_6_de_Slave_9_de_Racine)
	),
	null);

var Titre_Slave_9_de_Racine=new Array("Type","Ligne 1","Ligne 2","Ligne 3","CP","Ville","Departement");

	/* Ce composant représente: des éléments de la table est_localise sous le nom "Adresse" */
var Compo_Slave_9_de_Racine=new clCompoListe(Slave_9_de_Racine,null,Titre_Slave_9_de_Racine,"Adresse",true);
var Joint_De_Slave_9_De_Racine=new clJointureMulti("personne",
	new Array(
	new stJointure("est_localise","pe_numero","pe_numero",null,false)
	));
var Col_0_de_Slave_10_de_Racine=new clAttribut("ob_niveau","observation",null);

var Col_1_de_Slave_10_de_Racine=new clAttribut("ob_observation","observation",null);

var Slave_10_de_Racine=new clEnsembleAttributs("observation",
	new Array(
	new clLiaison(null,Col_0_de_Slave_10_de_Racine)
	,new clLiaison(null,Col_1_de_Slave_10_de_Racine)
	),
	null);

var Titre_Slave_10_de_Racine=new Array("Importance","Description");

	/* Ce composant représente: des éléments de la table observation sous le nom "Observation(s)" */
var Compo_Slave_10_de_Racine=new clCompoListe(Slave_10_de_Racine,null,Titre_Slave_10_de_Racine,"Observation(s)",true);
var Joint_De_Slave_10_De_Racine=new clJointureMulti("personne",
	new Array(
	new stJointure("observation","pe_numero","pe_numero",null,false)
	));
var Col_0_de_Slave_11_de_Racine=new clAttribut("co_adhesion","cotisation",null);

var Slave_11_de_Racine=new clEnsembleAttributs("cotisation",
	new Array(
	new clLiaison(null,Col_0_de_Slave_11_de_Racine)
	),
	null);

var Titre_Slave_11_de_Racine=new Array("Date d'adhésion");

	/* Ce composant représente: des éléments de la table cotisation sous le nom "Cotisation(s)" */
var Compo_Slave_11_de_Racine=new clCompoListe(Slave_11_de_Racine,null,Titre_Slave_11_de_Racine,"Cotisation(s)",true);
var Joint_De_Slave_11_De_Racine=new clJointureMulti("personne",
	new Array(
	new stJointure("cotisation","pe_numero","pe_numero",null,false)
	));
var Col_0_de_Slave_12_de_Racine=new clAttribut("re_famille","responsabilite",null);

var Joint_De_Col_0_De_Slave_12_de_Racine=new clJointureMulti("est_responsable",
	new Array(
	new stJointure("responsabilite","re_numero","re_numero",null,true)
	));
var Col_1_de_Slave_12_de_Racine=new clAttribut("re_nom","responsabilite",null);

var Joint_De_Col_1_De_Slave_12_de_Racine=new clJointureMulti("est_responsable",
	new Array(
	new stJointure("responsabilite","re_numero","re_numero",null,true)
	));
var Col_2_de_Slave_12_de_Racine=new clAttribut("peac_periodedebut","est_responsable",null);

var Col_3_de_Slave_12_de_Racine=new clAttribut("peac_periodefin","est_responsable",null);

var Slave_12_de_Racine=new clEnsembleAttributs("est_responsable",
	new Array(
	new clLiaison(Joint_De_Col_0_De_Slave_12_de_Racine,Col_0_de_Slave_12_de_Racine)
	,new clLiaison(Joint_De_Col_1_De_Slave_12_de_Racine,Col_1_de_Slave_12_de_Racine)
	,new clLiaison(null,Col_2_de_Slave_12_de_Racine)
	,new clLiaison(null,Col_3_de_Slave_12_de_Racine)
	),
	null);

var Titre_Slave_12_de_Racine=new Array("Famille","Responsabilité","De","A");

	/* Ce composant représente: des éléments de la table est_responsable sous le nom "Responsabilité(s)" */
var Compo_Slave_12_de_Racine=new clCompoListe(Slave_12_de_Racine,null,Titre_Slave_12_de_Racine,"Responsabilité(s)",true);
var Joint_De_Slave_12_De_Racine=new clJointureMulti("personne",
	new Array(
	new stJointure("est_responsable","pe_numero","pe_numero",null,false)
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
	));

var Titre_Racine=new Array("N°Adhérent","Nom","Complement");

	/* Ce composant représente: des éléments de la table personne sous le nom "Personnes existantes" */
var Compo_Racine=new clCompoListe(Racine,clInterfaceFiltrageVide,Titre_Racine,"Personnes existantes",true);
Compo_Slave_0_de_Racine.GenererXUL(top.document.getElementById("0_Slaves"));
Compo_Slave_1_de_Racine.GenererXUL(top.document.getElementById("0_Slaves"));
Compo_Slave_2_de_Racine.GenererXUL(top.document.getElementById("0_Slaves"));
Compo_Slave_3_de_Racine.GenererXUL(top.document.getElementById("0_Slaves"));
Compo_Slave_4_de_Racine.GenererXUL(top.document.getElementById("haut_droit"));
Compo_Slave_5_de_Racine.GenererXUL(top.document.getElementById("haut_droit"));
Compo_Slave_6_de_Racine.GenererXUL(top.document.getElementById("haut_droit"));
Compo_Slave_7_de_Racine.GenererXUL(top.document.getElementById("haut_droit"));
Compo_Slave_8_de_Racine.GenererXUL(top.document.getElementById("1_Maitre"));
Compo_Slave_9_de_Racine.GenererXUL(top.document.getElementById("2_Maitre"));
Compo_Slave_10_de_Racine.GenererXUL(top.document.getElementById("3_Maitre"));
Compo_Slave_11_de_Racine.GenererXUL(top.document.getElementById("4_Maitre"));
Compo_Slave_12_de_Racine.GenererXUL(top.document.getElementById("5_Maitre"));
Compo_Racine.GenererXUL(top.document.getElementById("0_Maitre"));
Compo_Racine.Refresh();
Compo_Racine.AfterRefreshByMaitre();
}

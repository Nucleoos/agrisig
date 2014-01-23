function Charger_Interface()
{
var Col_0_de_Racine=new clAttribut("pe_titrenom","personne",null);

var Col_1_de_Racine=new clAttribut("pe_complement","personne",null);

var Slave_0_de_Racine=new clAttribut("pe_titrenom","personne",null);


	/* Ce composant représente: personne.pe_titrenom sous le nom "Titre" */
var Compo_Slave_0_de_Racine=new clCompoTextBox(Slave_0_de_Racine,null,"Titre");
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
var Col_0_de_Slave_6_de_Racine=new clAttribut("cont_type","contact",null);

var Col_1_de_Slave_6_de_Racine=new clAttribut("cont_coordonnees","contact",null);

var Slave_0_de_Slave_6_de_Racine=new clAttribut("cont_coordonnees","contact",null);


	/* Ce composant représente: contact.cont_coordonnees sous le nom "Coordonnées" */
var Compo_Slave_0_de_Slave_6_de_Racine=new clCompoTextBox(Slave_0_de_Slave_6_de_Racine,null,"Coordonnées");
var Slave_6_de_Racine=new clEnsembleAttributs("contact",
	new Array(
	new clLiaison(null,Col_0_de_Slave_6_de_Racine)
	,new clLiaison(null,Col_1_de_Slave_6_de_Racine)
	),
	new Array(
	new clLiaison(null,Slave_0_de_Slave_6_de_Racine)
	));

var Titre_Slave_6_de_Racine=new Array("Type","Coordonnées");

	/* Ce composant représente: des éléments de la table contact sous le nom "Contact de la personne" */
var Compo_Slave_6_de_Racine=new clCompoListe(Slave_6_de_Racine,null,Titre_Slave_6_de_Racine,"Contact de la personne",true);
Compo_Slave_0_de_Slave_6_de_Racine.GenererXUL(top.document.getElementById("1_Slaves"));
var Joint_De_Slave_6_De_Racine=new clJointureMulti("personne",
	new Array(
	new stJointure("est_joignable","pe_numero","pe_numero",false)
	,new stJointure("contact","cont_numero","cont_numero",false)
	));
var Col_0_de_Slave_7_de_Racine=new clAttribut("ad_addr1","adresse",null);

var Col_1_de_Slave_7_de_Racine=new clAttribut("ad_addr2","adresse",null);

var Col_2_de_Slave_7_de_Racine=new clAttribut("ad_addr3","adresse",null);

var Col_3_de_Slave_7_de_Racine=new clAttribut("cp_codepostal","codepostal",null);

var Joint_De_Col_3_De_Slave_7_de_Racine=new clJointureMulti("adresse",
	new Array(
	new stJointure("codepostal","cp_numero","cp_numero",true)
	));
var Col_4_de_Slave_7_de_Racine=new clAttribut("vi_nom","ville",null);

var Joint_De_Col_4_De_Slave_7_de_Racine=new clJointureMulti("adresse",
	new Array(
	new stJointure("ville","vi_numero","vi_numero",true)
	));
var Col_5_de_Slave_7_de_Racine=new clAttribut("vi_departement","ville",null);

var Joint_De_Col_5_De_Slave_7_de_Racine=new clJointureMulti("adresse",
	new Array(
	new stJointure("ville","vi_numero","vi_numero",true)
	));
var Slave_0_de_Slave_7_de_Racine=new clAttribut("ad_addr1","adresse",null);


	/* Ce composant représente: adresse.ad_addr1 sous le nom "Ligne 1" */
var Compo_Slave_0_de_Slave_7_de_Racine=new clCompoTextBox(Slave_0_de_Slave_7_de_Racine,null,"Ligne 1");
var Slave_1_de_Slave_7_de_Racine=new clAttribut("ad_addr2","adresse",null);


	/* Ce composant représente: adresse.ad_addr2 sous le nom "Ligne 2" */
var Compo_Slave_1_de_Slave_7_de_Racine=new clCompoTextBox(Slave_1_de_Slave_7_de_Racine,null,"Ligne 2");
var Slave_2_de_Slave_7_de_Racine=new clAttribut("ad_addr3","adresse",null);


	/* Ce composant représente: adresse.ad_addr3 sous le nom "Ligne 3" */
var Compo_Slave_2_de_Slave_7_de_Racine=new clCompoTextBox(Slave_2_de_Slave_7_de_Racine,null,"Ligne 3");
var Slave_3_de_Slave_7_de_Racine=new clAttribut("cp_codepostal","codepostal",null);


	/* Ce composant représente: codepostal.cp_codepostal sous le nom "code postal" */
var Compo_Slave_3_de_Slave_7_de_Racine=new clCompoTextBox(Slave_3_de_Slave_7_de_Racine,null,"code postal");
var Joint_De_Slave_3_De_Slave_7_de_Racine=new clJointureMulti("adresse",
	new Array(
	new stJointure("codepostal","cp_numero","cp_numero",false)
	));
var Slave_4_de_Slave_7_de_Racine=new clAttribut("cp_bureaudistributeur","codepostal",null);


	/* Ce composant représente: codepostal.cp_bureaudistributeur sous le nom "Bureaux" */
var Compo_Slave_4_de_Slave_7_de_Racine=new clCompoTextBox(Slave_4_de_Slave_7_de_Racine,null,"Bureaux");
var Joint_De_Slave_4_De_Slave_7_de_Racine=new clJointureMulti("adresse",
	new Array(
	new stJointure("codepostal","cp_numero","cp_numero",false)
	));
var Slave_5_de_Slave_7_de_Racine=new clAttribut("vi_nom","ville",null);


	/* Ce composant représente: ville.vi_nom sous le nom "Ville" */
var Compo_Slave_5_de_Slave_7_de_Racine=new clCompoListeDeroulanteSimple(Slave_5_de_Slave_7_de_Racine,null,"Ville");
var Joint_De_Slave_5_De_Slave_7_de_Racine=new clJointureMulti("adresse",
	new Array(
	new stJointure("ville","vi_numero","vi_numero",false)
	));
var Slave_6_de_Slave_7_de_Racine=new clAttribut("vi_departement","ville",null);


	/* Ce composant représente: ville.vi_departement sous le nom "Departement" */
var Compo_Slave_6_de_Slave_7_de_Racine=new clCompoListeDeroulanteSimple(Slave_6_de_Slave_7_de_Racine,null,"Departement");
var Joint_De_Slave_6_De_Slave_7_de_Racine=new clJointureMulti("adresse",
	new Array(
	new stJointure("ville","vi_numero","vi_numero",false)
	));
var Slave_7_de_Racine=new clEnsembleAttributs("adresse",
	new Array(
	new clLiaison(null,Col_0_de_Slave_7_de_Racine)
	,new clLiaison(null,Col_1_de_Slave_7_de_Racine)
	,new clLiaison(null,Col_2_de_Slave_7_de_Racine)
	,new clLiaison(Joint_De_Col_3_De_Slave_7_de_Racine,Col_3_de_Slave_7_de_Racine)
	,new clLiaison(Joint_De_Col_4_De_Slave_7_de_Racine,Col_4_de_Slave_7_de_Racine)
	,new clLiaison(Joint_De_Col_5_De_Slave_7_de_Racine,Col_5_de_Slave_7_de_Racine)
	),
	new Array(
	new clLiaison(null,Slave_0_de_Slave_7_de_Racine)
	,new clLiaison(null,Slave_1_de_Slave_7_de_Racine)
	,new clLiaison(null,Slave_2_de_Slave_7_de_Racine)
	,new clLiaison(Joint_De_Slave_3_De_Slave_7_de_Racine,Slave_3_de_Slave_7_de_Racine)
	,new clLiaison(Joint_De_Slave_4_De_Slave_7_de_Racine,Slave_4_de_Slave_7_de_Racine)
	,new clLiaison(Joint_De_Slave_5_De_Slave_7_de_Racine,Slave_5_de_Slave_7_de_Racine)
	,new clLiaison(Joint_De_Slave_6_De_Slave_7_de_Racine,Slave_6_de_Slave_7_de_Racine)
	));

var Titre_Slave_7_de_Racine=new Array("Ligne 1","Ligne 2","Ligne 3","CP","Ville","Departement");

	/* Ce composant représente: des éléments de la table adresse sous le nom "Adresse" */
var Compo_Slave_7_de_Racine=new clCompoListe(Slave_7_de_Racine,null,Titre_Slave_7_de_Racine,"Adresse",true);
Compo_Slave_0_de_Slave_7_de_Racine.GenererXUL(top.document.getElementById("2_Slaves"));
Compo_Slave_1_de_Slave_7_de_Racine.GenererXUL(top.document.getElementById("2_Slaves"));
Compo_Slave_2_de_Slave_7_de_Racine.GenererXUL(top.document.getElementById("2_Slaves"));
Compo_Slave_3_de_Slave_7_de_Racine.GenererXUL(top.document.getElementById("2_Slaves"));
Compo_Slave_4_de_Slave_7_de_Racine.GenererXUL(top.document.getElementById("2_Slaves"));
Compo_Slave_5_de_Slave_7_de_Racine.GenererXUL(top.document.getElementById("2_Slaves"));
Compo_Slave_6_de_Slave_7_de_Racine.GenererXUL(top.document.getElementById("2_Slaves"));
var Joint_De_Slave_7_De_Racine=new clJointureMulti("personne",
	new Array(
	new stJointure("est_localise","pe_numero","pe_numero",false)
	,new stJointure("adresse","ad_numero","ad_numero",false)
	));
var Racine=new clEnsembleAttributs("personne",
	new Array(
	new clLiaison(null,Col_0_de_Racine)
	,new clLiaison(null,Col_1_de_Racine)
	),
	new Array(
	new clLiaison(null,Slave_0_de_Racine)
	,new clLiaison(null,Slave_1_de_Racine)
	,new clLiaison(null,Slave_2_de_Racine)
	,new clLiaison(null,Slave_3_de_Racine)
	,new clLiaison(null,Slave_4_de_Racine)
	,new clLiaison(null,Slave_5_de_Racine)
	,new clLiaison(Joint_De_Slave_6_De_Racine,Slave_6_de_Racine)
	,new clLiaison(Joint_De_Slave_7_De_Racine,Slave_7_de_Racine)
	));

var Titre_Racine=new Array("Titre","Complement");

	/* Ce composant représente: des éléments de la table personne sous le nom "Personnes existantes" */
var Compo_Racine=new clCompoListe(Racine,clInterfaceFiltrageVide,Titre_Racine,"Personnes existantes",true);
Compo_Slave_0_de_Racine.GenererXUL(top.document.getElementById("0_Slaves"));
Compo_Slave_1_de_Racine.GenererXUL(top.document.getElementById("0_Slaves"));
Compo_Slave_2_de_Racine.GenererXUL(top.document.getElementById("0_Slaves"));
Compo_Slave_3_de_Racine.GenererXUL(top.document.getElementById("0_Slaves"));
Compo_Slave_4_de_Racine.GenererXUL(top.document.getElementById("0_Slaves"));
Compo_Slave_5_de_Racine.GenererXUL(top.document.getElementById("0_Slaves"));
Compo_Slave_6_de_Racine.GenererXUL(top.document.getElementById("1_Maitre"));
Compo_Slave_7_de_Racine.GenererXUL(top.document.getElementById("2_Maitre"));
Compo_Racine.GenererXUL(top.document.getElementById("0_Maitre"));
Compo_Racine.Refresh();
Compo_Racine.AfterRefreshByMaitre();
}

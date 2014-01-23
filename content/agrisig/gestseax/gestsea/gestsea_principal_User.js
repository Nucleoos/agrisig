/*************************************************
  REQUETES UTILSATEUR : Onglet : Personnes
  TAPEZ ICI LE CODE DE LA REQUETE D'INSERTION
***************************************************/
function User_Insert_Personnes_Liste_des_personnes0(Compo_Maitre)
{

/*
***** INFOS ******

Nbr d'esclaves = 20

Id dans le tab: 10;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 11;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 12;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 13;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 14;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 15;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 16;
simple
Nbr Jointure: 1;
    Joint n° 0 = etatpersonne,ep_numero,ep_numero

Id dans le tab: 17;
simple
Nbr Jointure: 1;
    Joint n° 0 = typepersonne,tp_numero,tp_numero

Id dans le tab: 18;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 19;
complexe
Nbr Jointure: 1;
    Joint n° 0 = adhesion,pe_numero,pe_numero

Id dans le tab: 24;
complexe
Nbr Jointure: 1;
    Joint n° 0 = observation,pe_numero,pe_numero

Id dans le tab: 29;
complexe
Nbr Jointure: 1;
    Joint n° 0 = adresse,pe_numero,pe_numero

Id dans le tab: 46;
complexe
Nbr Jointure: 1;
    Joint n° 0 = estjoignable,pe_numero,pe_numero

Id dans le tab: 52;
complexe
Nbr Jointure: 1;
    Joint n° 0 = appel,pe_numero,pe_numero

Id dans le tab: 63;
complexe
Nbr Jointure: 1;
    Joint n° 0 = estresponsable,pe_numero,pe_numero

Id dans le tab: 75;
complexe
Nbr Jointure: 1;
    Joint n° 0 = attribut,pe_numero,pe_numero

Id dans le tab: 81;
complexe
Nbr Jointure: 1;
    Joint n° 0 = devis,pe_numero,pe_numero

Id dans le tab: 87;
complexe
Nbr Jointure: 1;
    Joint n° 0 = facture,pe_numero,pe_numero

Id dans le tab: 94;
complexe
Nbr Jointure: 1;
    Joint n° 0 = reglement,pe_numero,pe_numero

Id dans le tab: 100;
complexe
Nbr Jointure: 1;
    Joint n° 0 = routage,pe_numero,pe_numero

******************
*/

 var Table="personne";
 var CleMaitre = TAB_COMPO_PPTES[3].NewCle;
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var pe_titre=GetValAt(10);
 if (!ValiderChampsObligatoire(Table,"pe_titre",TAB_GLOBAL_COMPO[10],pe_titre,false))
 	return -1;
 if (!ValiderChampsType(Table,"pe_titre",TAB_GLOBAL_COMPO[10],pe_titre))
 	return -1;
 var pe_nom=GetValAt(11);
 if (!ValiderChampsObligatoire(Table,"pe_nom",TAB_GLOBAL_COMPO[11],pe_nom,false))
 	return -1;
 if (!ValiderChampsType(Table,"pe_nom",TAB_GLOBAL_COMPO[11],pe_nom))
 	return -1;
 var pe_prenom=GetValAt(12);
 if (!ValiderChampsObligatoire(Table,"pe_prenom",TAB_GLOBAL_COMPO[12],pe_prenom,false))
 	return -1;
 if (!ValiderChampsType(Table,"pe_prenom",TAB_GLOBAL_COMPO[12],pe_prenom))
 	return -1;
 var pe_complement=GetValAt(13);
 if (!ValiderChampsObligatoire(Table,"pe_complement",TAB_GLOBAL_COMPO[13],pe_complement,false))
 	return -1;
 if (!ValiderChampsType(Table,"pe_complement",TAB_GLOBAL_COMPO[13],pe_complement))
 	return -1;
 var pe_morale=GetValAt(14);
 if (!ValiderChampsObligatoire(Table,"pe_morale",TAB_GLOBAL_COMPO[14],pe_morale,false))
 	return -1;
 if (!ValiderChampsType(Table,"pe_morale",TAB_GLOBAL_COMPO[14],pe_morale))
 	return -1;
 var pe_naissance=GetValAt(15);
 if (!ValiderChampsObligatoire(Table,"pe_naissance",TAB_GLOBAL_COMPO[15],pe_naissance,false))
 	return -1;
 if (!ValiderChampsType(Table,"pe_naissance",TAB_GLOBAL_COMPO[15],pe_naissance))
 	return -1;
 var ep_numero=GetValAt(16);
 if (ep_numero=="-1")
    ep_numero="null";
 if (!ValiderChampsObligatoire(Table,"ep_numero",TAB_GLOBAL_COMPO[16],ep_numero,true))
 	return -1;
 var tp_numero=GetValAt(17);
 if (tp_numero=="-1")
    tp_numero="null";
 if (!ValiderChampsObligatoire(Table,"tp_numero",TAB_GLOBAL_COMPO[17],tp_numero,true))
 	return -1;
 var pe_regimefiscal=GetValAt(18);
 if (!ValiderChampsObligatoire(Table,"pe_regimefiscal",TAB_GLOBAL_COMPO[18],pe_regimefiscal,false))
 	return -1;
 if (!ValiderChampsType(Table,"pe_regimefiscal",TAB_GLOBAL_COMPO[18],pe_regimefiscal))
 	return -1;
 var Req="insert into "+Table+" ";
var TabInsertionEnPlus=new Array();
 Req+="("+NomCleMaitre+",pe_titre,pe_nom,pe_prenom,pe_complement,pe_morale,pe_naissance,ep_numero,tp_numero,pe_regimefiscal"+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[0]:"")+")";
 Req+=" values ("+CleMaitre+","+(pe_titre=="" ? "null" : "'"+ValiderChaine(pe_titre)+"'" )+","+(pe_nom=="" ? "null" : "'"+ValiderChaine(pe_nom)+"'" )+","+(pe_prenom=="" ? "null" : "'"+ValiderChaine(pe_prenom)+"'" )+","+(pe_complement=="" ? "null" : "'"+ValiderChaine(pe_complement)+"'" )+","+(pe_morale=="true" ? "true" : "false")+","+(pe_naissance=="" ? "null" : "'"+ValiderChaine(pe_naissance)+"'" )+","+ep_numero+","+tp_numero+","+(pe_regimefiscal=="" ? "null" : "'"+ValiderChaine(pe_regimefiscal)+"'" )+""+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[1]:"")+")";

 if (pgsql_update(Req)==0)
	alert("Echec lors de l'insertion");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Personnes
  TAPEZ ICI LE CODE DE LA REQUETE DE SUPPRESSION 
***************************************************/
function User_Delete_Personnes_Liste_des_personnes0(Compo_Maitre)
{
 var Table="personne";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var Req="delete from "+Table+" where "+NomCleMaitre+" = "+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la supression");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Personnes
  TAPEZ ICI LE CODE DE LA REQUETE DE MISE A JOUR 
***************************************************/
function User_Update_Personnes_Liste_des_personnes0(Compo_Maitre)
{
 var Table="personne";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var pe_titre=GetValAt(10);
 if (!ValiderChampsObligatoire(Table,"pe_titre",TAB_GLOBAL_COMPO[10],pe_titre,false))
 	return -1;
 if (!ValiderChampsType(Table,"pe_titre",TAB_GLOBAL_COMPO[10],pe_titre))
 	return -1;
 var pe_nom=GetValAt(11);
 if (!ValiderChampsObligatoire(Table,"pe_nom",TAB_GLOBAL_COMPO[11],pe_nom,false))
 	return -1;
 if (!ValiderChampsType(Table,"pe_nom",TAB_GLOBAL_COMPO[11],pe_nom))
 	return -1;
 var pe_prenom=GetValAt(12);
 if (!ValiderChampsObligatoire(Table,"pe_prenom",TAB_GLOBAL_COMPO[12],pe_prenom,false))
 	return -1;
 if (!ValiderChampsType(Table,"pe_prenom",TAB_GLOBAL_COMPO[12],pe_prenom))
 	return -1;
 var pe_complement=GetValAt(13);
 if (!ValiderChampsObligatoire(Table,"pe_complement",TAB_GLOBAL_COMPO[13],pe_complement,false))
 	return -1;
 if (!ValiderChampsType(Table,"pe_complement",TAB_GLOBAL_COMPO[13],pe_complement))
 	return -1;
 var pe_morale=GetValAt(14);
 if (!ValiderChampsObligatoire(Table,"pe_morale",TAB_GLOBAL_COMPO[14],pe_morale,false))
 	return -1;
 if (!ValiderChampsType(Table,"pe_morale",TAB_GLOBAL_COMPO[14],pe_morale))
 	return -1;
 var pe_naissance=GetValAt(15);
 if (!ValiderChampsObligatoire(Table,"pe_naissance",TAB_GLOBAL_COMPO[15],pe_naissance,false))
 	return -1;
 if (!ValiderChampsType(Table,"pe_naissance",TAB_GLOBAL_COMPO[15],pe_naissance))
 	return -1;
 var ep_numero=GetValAt(16);
 if (ep_numero=="-1")
    ep_numero="null";
 if (!ValiderChampsObligatoire(Table,"ep_numero",TAB_GLOBAL_COMPO[16],ep_numero,true))
 	return -1;
 var tp_numero=GetValAt(17);
 if (tp_numero=="-1")
    tp_numero="null";
 if (!ValiderChampsObligatoire(Table,"tp_numero",TAB_GLOBAL_COMPO[17],tp_numero,true))
 	return -1;
 var pe_regimefiscal=GetValAt(18);
 if (!ValiderChampsObligatoire(Table,"pe_regimefiscal",TAB_GLOBAL_COMPO[18],pe_regimefiscal,false))
 	return -1;
 if (!ValiderChampsType(Table,"pe_regimefiscal",TAB_GLOBAL_COMPO[18],pe_regimefiscal))
 	return -1;
 var Req="update "+Table+" set ";
 Req+="pe_titre="+(pe_titre=="" ? "null" : "'"+ValiderChaine(pe_titre)+"'" )+",pe_nom="+(pe_nom=="" ? "null" : "'"+ValiderChaine(pe_nom)+"'" )+",pe_prenom="+(pe_prenom=="" ? "null" : "'"+ValiderChaine(pe_prenom)+"'" )+",pe_complement="+(pe_complement=="" ? "null" : "'"+ValiderChaine(pe_complement)+"'" )+",pe_morale="+(pe_morale=="true" ? "true" : "false")+",pe_naissance="+(pe_naissance=="" ? "null" : "'"+ValiderChaine(pe_naissance)+"'" )+",ep_numero="+ep_numero+",tp_numero="+tp_numero+",pe_regimefiscal="+(pe_regimefiscal=="" ? "null" : "'"+ValiderChaine(pe_regimefiscal)+"'" )+"";
 Req+=" where "+NomCleMaitre+"="+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la mise à jour");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Personnes
  TAPEZ ICI LE CODE DE LA REQUETE D'INSERTION
***************************************************/
function User_Insert_Personnes_Observations_11(Compo_Maitre)
{

/*
***** INFOS ******

Nbr d'esclaves = 2

Id dans le tab: 27;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 28;
simple
Nbr Jointure: PAS DE JOINTURE;

******************
*/

 var Table="observation";
 var CleMaitre = TAB_COMPO_PPTES[24].NewCle;
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 /* COMPOSANT LISTE AVEC JOINTURE SIMPLE */
 var ob_niveau=GetValAt(27);
 if (!ValiderChampsObligatoire(Table,"ob_niveau",TAB_GLOBAL_COMPO[27],ob_niveau,false))
 	return -1;
 if (!ValiderChampsType(Table,"ob_niveau",TAB_GLOBAL_COMPO[27],ob_niveau))
 	return -1;
 var ob_observation=GetValAt(28);
 if (!ValiderChampsObligatoire(Table,"ob_observation",TAB_GLOBAL_COMPO[28],ob_observation,false))
 	return -1;
 if (!ValiderChampsType(Table,"ob_observation",TAB_GLOBAL_COMPO[28],ob_observation))
 	return -1;
 var Req="insert into "+Table+" ";
var TabInsertionEnPlus=new Array();
 Req+="("+NomCleMaitre+",pe_numero,ob_niveau,ob_observation"+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[0]:"")+")";
 Req+=" values ("+CleMaitre+","+TAB_COMPO_PPTES[3].NewCle+","+(ob_niveau=="" ? "null" : "'"+ValiderChaine(ob_niveau)+"'" )+","+(ob_observation=="" ? "null" : "'"+ValiderChaine(ob_observation)+"'" )+""+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[1]:"")+")";

 if (pgsql_update(Req)==0)
	alert("Echec lors de l'insertion");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Personnes
  TAPEZ ICI LE CODE DE LA REQUETE DE SUPPRESSION 
***************************************************/
function User_Delete_Personnes_Observations_11(Compo_Maitre)
{
 var Table="observation";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var Req="delete from "+Table+" where "+NomCleMaitre+" = "+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la supression");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Personnes
  TAPEZ ICI LE CODE DE LA REQUETE DE MISE A JOUR 
***************************************************/
function User_Update_Personnes_Observations_11(Compo_Maitre)
{
 var Table="observation";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var ob_niveau=GetValAt(27);
 if (!ValiderChampsObligatoire(Table,"ob_niveau",TAB_GLOBAL_COMPO[27],ob_niveau,false))
 	return -1;
 if (!ValiderChampsType(Table,"ob_niveau",TAB_GLOBAL_COMPO[27],ob_niveau))
 	return -1;
 var ob_observation=GetValAt(28);
 if (!ValiderChampsObligatoire(Table,"ob_observation",TAB_GLOBAL_COMPO[28],ob_observation,false))
 	return -1;
 if (!ValiderChampsType(Table,"ob_observation",TAB_GLOBAL_COMPO[28],ob_observation))
 	return -1;
 var Req="update "+Table+" set ";
 Req+="ob_niveau="+(ob_niveau=="" ? "null" : "'"+ValiderChaine(ob_niveau)+"'" )+",ob_observation="+(ob_observation=="" ? "null" : "'"+ValiderChaine(ob_observation)+"'" )+"";
 Req+=" where "+NomCleMaitre+"="+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la mise à jour");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Personnes
  TAPEZ ICI LE CODE DE LA REQUETE D'INSERTION
***************************************************/
function User_Insert_Personnes_Adresses_14(Compo_Maitre)
{

/*
***** INFOS ******

Nbr d'esclaves = 8

Id dans le tab: 38;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 39;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 40;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 41;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 42;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 43;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 44;
simple
Nbr Jointure: 1;
    Joint n° 0 = codepostal,cp_numero,cp_numero

Id dans le tab: 45;
simple
Nbr Jointure: 1;
    Joint n° 0 = ville,vi_numero,vi_numero

******************
*/

 var Table="adresse";
 var CleMaitre = TAB_COMPO_PPTES[29].NewCle;
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 /* COMPOSANT LISTE AVEC JOINTURE SIMPLE */
 var ad_addr1=GetValAt(38);
 if (!ValiderChampsObligatoire(Table,"ad_addr1",TAB_GLOBAL_COMPO[38],ad_addr1,false))
 	return -1;
 if (!ValiderChampsType(Table,"ad_addr1",TAB_GLOBAL_COMPO[38],ad_addr1))
 	return -1;
 var ad_addr2=GetValAt(39);
 if (!ValiderChampsObligatoire(Table,"ad_addr2",TAB_GLOBAL_COMPO[39],ad_addr2,false))
 	return -1;
 if (!ValiderChampsType(Table,"ad_addr2",TAB_GLOBAL_COMPO[39],ad_addr2))
 	return -1;
 var ad_addr3=GetValAt(40);
 if (!ValiderChampsObligatoire(Table,"ad_addr3",TAB_GLOBAL_COMPO[40],ad_addr3,false))
 	return -1;
 if (!ValiderChampsType(Table,"ad_addr3",TAB_GLOBAL_COMPO[40],ad_addr3))
 	return -1;
 var ad_active=GetValAt(41);
 if (!ValiderChampsObligatoire(Table,"ad_active",TAB_GLOBAL_COMPO[41],ad_active,false))
 	return -1;
 if (!ValiderChampsType(Table,"ad_active",TAB_GLOBAL_COMPO[41],ad_active))
 	return -1;
 var ad_datestop=GetValAt(42);
 if (!ValiderChampsObligatoire(Table,"ad_datestop",TAB_GLOBAL_COMPO[42],ad_datestop,false))
 	return -1;
 if (!ValiderChampsType(Table,"ad_datestop",TAB_GLOBAL_COMPO[42],ad_datestop))
 	return -1;
 var ad_type=GetValAt(43);
 if (!ValiderChampsObligatoire(Table,"ad_type",TAB_GLOBAL_COMPO[43],ad_type,false))
 	return -1;
 if (!ValiderChampsType(Table,"ad_type",TAB_GLOBAL_COMPO[43],ad_type))
 	return -1;
 var cp_numero=GetValAt(44);
 if (cp_numero=="-1")
    cp_numero="null";
 if (!ValiderChampsObligatoire(Table,"cp_numero",TAB_GLOBAL_COMPO[44],cp_numero,true))
 	return -1;
 var vi_numero=GetValAt(45);
 if (vi_numero=="-1")
    vi_numero="null";
 if (!ValiderChampsObligatoire(Table,"vi_numero",TAB_GLOBAL_COMPO[45],vi_numero,true))
 	return -1;
 var Req="insert into "+Table+" ";
var TabInsertionEnPlus=new Array();
 Req+="("+NomCleMaitre+",pe_numero,ad_addr1,ad_addr2,ad_addr3,ad_active,ad_datestop,ad_type,cp_numero,vi_numero"+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[0]:"")+")";
 Req+=" values ("+CleMaitre+","+TAB_COMPO_PPTES[3].NewCle+","+(ad_addr1=="" ? "null" : "'"+ValiderChaine(ad_addr1)+"'" )+","+(ad_addr2=="" ? "null" : "'"+ValiderChaine(ad_addr2)+"'" )+","+(ad_addr3=="" ? "null" : "'"+ValiderChaine(ad_addr3)+"'" )+","+(ad_active=="true" ? "true" : "false")+","+(ad_datestop=="" ? "null" : "'"+ValiderChaine(ad_datestop)+"'" )+","+(ad_type=="" ? "null" : "'"+ValiderChaine(ad_type)+"'" )+","+cp_numero+","+vi_numero+""+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[1]:"")+")";

 if (pgsql_update(Req)==0)
	alert("Echec lors de l'insertion");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Personnes
  TAPEZ ICI LE CODE DE LA REQUETE DE SUPPRESSION 
***************************************************/
function User_Delete_Personnes_Adresses_14(Compo_Maitre)
{
 var Table="adresse";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var Req="delete from "+Table+" where "+NomCleMaitre+" = "+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la supression");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Personnes
  TAPEZ ICI LE CODE DE LA REQUETE DE MISE A JOUR 
***************************************************/
function User_Update_Personnes_Adresses_14(Compo_Maitre)
{
 var Table="adresse";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var ad_addr1=GetValAt(38);
 if (!ValiderChampsObligatoire(Table,"ad_addr1",TAB_GLOBAL_COMPO[38],ad_addr1,false))
 	return -1;
 if (!ValiderChampsType(Table,"ad_addr1",TAB_GLOBAL_COMPO[38],ad_addr1))
 	return -1;
 var ad_addr2=GetValAt(39);
 if (!ValiderChampsObligatoire(Table,"ad_addr2",TAB_GLOBAL_COMPO[39],ad_addr2,false))
 	return -1;
 if (!ValiderChampsType(Table,"ad_addr2",TAB_GLOBAL_COMPO[39],ad_addr2))
 	return -1;
 var ad_addr3=GetValAt(40);
 if (!ValiderChampsObligatoire(Table,"ad_addr3",TAB_GLOBAL_COMPO[40],ad_addr3,false))
 	return -1;
 if (!ValiderChampsType(Table,"ad_addr3",TAB_GLOBAL_COMPO[40],ad_addr3))
 	return -1;
 var ad_active=GetValAt(41);
 if (!ValiderChampsObligatoire(Table,"ad_active",TAB_GLOBAL_COMPO[41],ad_active,false))
 	return -1;
 if (!ValiderChampsType(Table,"ad_active",TAB_GLOBAL_COMPO[41],ad_active))
 	return -1;
 var ad_datestop=GetValAt(42);
 if (!ValiderChampsObligatoire(Table,"ad_datestop",TAB_GLOBAL_COMPO[42],ad_datestop,false))
 	return -1;
 if (!ValiderChampsType(Table,"ad_datestop",TAB_GLOBAL_COMPO[42],ad_datestop))
 	return -1;
 var ad_type=GetValAt(43);
 if (!ValiderChampsObligatoire(Table,"ad_type",TAB_GLOBAL_COMPO[43],ad_type,false))
 	return -1;
 if (!ValiderChampsType(Table,"ad_type",TAB_GLOBAL_COMPO[43],ad_type))
 	return -1;
 var cp_numero=GetValAt(44);
 if (cp_numero=="-1")
    cp_numero="null";
 if (!ValiderChampsObligatoire(Table,"cp_numero",TAB_GLOBAL_COMPO[44],cp_numero,true))
 	return -1;
 var vi_numero=GetValAt(45);
 if (vi_numero=="-1")
    vi_numero="null";
 if (!ValiderChampsObligatoire(Table,"vi_numero",TAB_GLOBAL_COMPO[45],vi_numero,true))
 	return -1;
 var Req="update "+Table+" set ";
 Req+="ad_addr1="+(ad_addr1=="" ? "null" : "'"+ValiderChaine(ad_addr1)+"'" )+",ad_addr2="+(ad_addr2=="" ? "null" : "'"+ValiderChaine(ad_addr2)+"'" )+",ad_addr3="+(ad_addr3=="" ? "null" : "'"+ValiderChaine(ad_addr3)+"'" )+",ad_active="+(ad_active=="true" ? "true" : "false")+",ad_datestop="+(ad_datestop=="" ? "null" : "'"+ValiderChaine(ad_datestop)+"'" )+",ad_type="+(ad_type=="" ? "null" : "'"+ValiderChaine(ad_type)+"'" )+",cp_numero="+cp_numero+",vi_numero="+vi_numero+"";
 Req+=" where "+NomCleMaitre+"="+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la mise à jour");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Personnes
  TAPEZ ICI LE CODE DE LA REQUETE D'INSERTION
***************************************************/
function User_Insert_Personnes_Contact_23(Compo_Maitre)
{

/*
***** INFOS ******

Nbr d'esclaves = 2

Id dans le tab: 50;
simple
Nbr Jointure: 1;
    Joint n° 0 = contact,cn_numero,cn_numero

Id dans le tab: 51;
simple
Nbr Jointure: PAS DE JOINTURE;

******************
*/

 var Table="estjoignable";
 var CleMaitre = TAB_COMPO_PPTES[46].NewCle;
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 /* COMPOSANT LISTE AVEC JOINTURE SIMPLE */
 var cn_numero=GetValAt(50);
 if (cn_numero=="-1")
    cn_numero="null";
 if (!ValiderChampsObligatoire(Table,"cn_numero",TAB_GLOBAL_COMPO[50],cn_numero,true))
 	return -1;
 var ej_actif=GetValAt(51);
 if (!ValiderChampsObligatoire(Table,"ej_actif",TAB_GLOBAL_COMPO[51],ej_actif,false))
 	return -1;
 if (!ValiderChampsType(Table,"ej_actif",TAB_GLOBAL_COMPO[51],ej_actif))
 	return -1;
 var Req="insert into "+Table+" ";
var TabInsertionEnPlus=new Array();
 Req+="("+NomCleMaitre+",pe_numero,cn_numero,ej_actif"+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[0]:"")+")";
 Req+=" values ("+CleMaitre+","+TAB_COMPO_PPTES[3].NewCle+","+cn_numero+","+(ej_actif=="true" ? "true" : "false")+""+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[1]:"")+")";

 if (pgsql_update(Req)==0)
	alert("Echec lors de l'insertion");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Personnes
  TAPEZ ICI LE CODE DE LA REQUETE DE SUPPRESSION 
***************************************************/
function User_Delete_Personnes_Contact_23(Compo_Maitre)
{
 var Table="estjoignable";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var Req="delete from "+Table+" where "+NomCleMaitre+" = "+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la supression");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Personnes
  TAPEZ ICI LE CODE DE LA REQUETE DE MISE A JOUR 
***************************************************/
function User_Update_Personnes_Contact_23(Compo_Maitre)
{
 var Table="estjoignable";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var cn_numero=GetValAt(50);
 if (cn_numero=="-1")
    cn_numero="null";
 if (!ValiderChampsObligatoire(Table,"cn_numero",TAB_GLOBAL_COMPO[50],cn_numero,true))
 	return -1;
 var ej_actif=GetValAt(51);
 if (!ValiderChampsObligatoire(Table,"ej_actif",TAB_GLOBAL_COMPO[51],ej_actif,false))
 	return -1;
 if (!ValiderChampsType(Table,"ej_actif",TAB_GLOBAL_COMPO[51],ej_actif))
 	return -1;
 var Req="update "+Table+" set ";
 Req+="cn_numero="+cn_numero+",ej_actif="+(ej_actif=="true" ? "true" : "false")+"";
 Req+=" where "+NomCleMaitre+"="+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la mise à jour");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Personnes
  TAPEZ ICI LE CODE DE LA REQUETE D'INSERTION
***************************************************/
function User_Insert_Personnes_Tâches_26(Compo_Maitre)
{

/*
***** INFOS ******

Nbr d'esclaves = 5

Id dans le tab: 58;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 59;
simple
Nbr Jointure: 1;
    Joint n° 0 = typetache,th_numero,th_numero

Id dans le tab: 60;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 61;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 62;
simple
Nbr Jointure: PAS DE JOINTURE;

******************
*/

 var Table="appel";
 var CleMaitre = TAB_COMPO_PPTES[52].NewCle;
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 /* COMPOSANT LISTE AVEC JOINTURE SIMPLE */
 var ap_date=GetValAt(58);
 if (!ValiderChampsObligatoire(Table,"ap_date",TAB_GLOBAL_COMPO[58],ap_date,false))
 	return -1;
 if (!ValiderChampsType(Table,"ap_date",TAB_GLOBAL_COMPO[58],ap_date))
 	return -1;
 var th_numero=GetValAt(59);
 if (th_numero=="-1")
    th_numero="null";
 if (!ValiderChampsObligatoire(Table,"th_numero",TAB_GLOBAL_COMPO[59],th_numero,true))
 	return -1;
 var ap_libelle=GetValAt(60);
 if (!ValiderChampsObligatoire(Table,"ap_libelle",TAB_GLOBAL_COMPO[60],ap_libelle,false))
 	return -1;
 if (!ValiderChampsType(Table,"ap_libelle",TAB_GLOBAL_COMPO[60],ap_libelle))
 	return -1;
 var ap_duree=GetValAt(61);
 if (!ValiderChampsObligatoire(Table,"ap_duree",TAB_GLOBAL_COMPO[61],ap_duree,false))
 	return -1;
 if (!ValiderChampsType(Table,"ap_duree",TAB_GLOBAL_COMPO[61],ap_duree))
 	return -1;
 var ap_description=GetValAt(62);
 if (!ValiderChampsObligatoire(Table,"ap_description",TAB_GLOBAL_COMPO[62],ap_description,false))
 	return -1;
 if (!ValiderChampsType(Table,"ap_description",TAB_GLOBAL_COMPO[62],ap_description))
 	return -1;
 var Req="insert into "+Table+" ";
var TabInsertionEnPlus=new Array();
 Req+="("+NomCleMaitre+",pe_numero,ap_date,th_numero,ap_libelle,ap_duree,ap_description"+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[0]:"")+")";
 Req+=" values ("+CleMaitre+","+TAB_COMPO_PPTES[3].NewCle+","+(ap_date=="" ? "null" : "'"+ValiderChaine(ap_date)+"'" )+","+th_numero+","+(ap_libelle=="" ? "null" : "'"+ValiderChaine(ap_libelle)+"'" )+","+(ap_duree=="" ? "null" : "'"+ValiderChaine(ap_duree)+"'" )+","+(ap_description=="" ? "null" : "'"+ValiderChaine(ap_description)+"'" )+""+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[1]:"")+")";

 if (pgsql_update(Req)==0)
	alert("Echec lors de l'insertion");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Personnes
  TAPEZ ICI LE CODE DE LA REQUETE DE SUPPRESSION 
***************************************************/
function User_Delete_Personnes_Tâches_26(Compo_Maitre)
{
 var Table="appel";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var Req="delete from "+Table+" where "+NomCleMaitre+" = "+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la supression");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Personnes
  TAPEZ ICI LE CODE DE LA REQUETE DE MISE A JOUR 
***************************************************/
function User_Update_Personnes_Tâches_26(Compo_Maitre)
{
 var Table="appel";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var ap_date=GetValAt(58);
 if (!ValiderChampsObligatoire(Table,"ap_date",TAB_GLOBAL_COMPO[58],ap_date,false))
 	return -1;
 if (!ValiderChampsType(Table,"ap_date",TAB_GLOBAL_COMPO[58],ap_date))
 	return -1;
 var th_numero=GetValAt(59);
 if (th_numero=="-1")
    th_numero="null";
 if (!ValiderChampsObligatoire(Table,"th_numero",TAB_GLOBAL_COMPO[59],th_numero,true))
 	return -1;
 var ap_libelle=GetValAt(60);
 if (!ValiderChampsObligatoire(Table,"ap_libelle",TAB_GLOBAL_COMPO[60],ap_libelle,false))
 	return -1;
 if (!ValiderChampsType(Table,"ap_libelle",TAB_GLOBAL_COMPO[60],ap_libelle))
 	return -1;
 var ap_duree=GetValAt(61);
 if (!ValiderChampsObligatoire(Table,"ap_duree",TAB_GLOBAL_COMPO[61],ap_duree,false))
 	return -1;
 if (!ValiderChampsType(Table,"ap_duree",TAB_GLOBAL_COMPO[61],ap_duree))
 	return -1;
 var ap_description=GetValAt(62);
 if (!ValiderChampsObligatoire(Table,"ap_description",TAB_GLOBAL_COMPO[62],ap_description,false))
 	return -1;
 if (!ValiderChampsType(Table,"ap_description",TAB_GLOBAL_COMPO[62],ap_description))
 	return -1;
 var Req="update "+Table+" set ";
 Req+="ap_date="+(ap_date=="" ? "null" : "'"+ValiderChaine(ap_date)+"'" )+",th_numero="+th_numero+",ap_libelle="+(ap_libelle=="" ? "null" : "'"+ValiderChaine(ap_libelle)+"'" )+",ap_duree="+(ap_duree=="" ? "null" : "'"+ValiderChaine(ap_duree)+"'" )+",ap_description="+(ap_description=="" ? "null" : "'"+ValiderChaine(ap_description)+"'" )+"";
 Req+=" where "+NomCleMaitre+"="+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la mise à jour");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Personnes
  TAPEZ ICI LE CODE DE LA REQUETE D'INSERTION
***************************************************/
function User_Insert_Personnes_Responsabilités_32(Compo_Maitre)
{

/*
***** INFOS ******

Nbr d'esclaves = 5

Id dans le tab: 70;
simple
Nbr Jointure: 1;
    Joint n° 0 = responsabilite,re_numero,re_numero

Id dans le tab: 71;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 72;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 73;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 74;
simple
Nbr Jointure: PAS DE JOINTURE;

******************
*/

 var Table="estresponsable";
 var CleMaitre = TAB_COMPO_PPTES[63].NewCle;
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 /* COMPOSANT LISTE AVEC JOINTURE SIMPLE */
 var re_numero=GetValAt(70);
 if (re_numero=="-1")
    re_numero="null";
 if (!ValiderChampsObligatoire(Table,"re_numero",TAB_GLOBAL_COMPO[70],re_numero,true))
 	return -1;
 var peac_titre=GetValAt(71);
 if (!ValiderChampsObligatoire(Table,"peac_titre",TAB_GLOBAL_COMPO[71],peac_titre,false))
 	return -1;
 if (!ValiderChampsType(Table,"peac_titre",TAB_GLOBAL_COMPO[71],peac_titre))
 	return -1;
 var peac_periodedebut=GetValAt(72);
 if (!ValiderChampsObligatoire(Table,"peac_periodedebut",TAB_GLOBAL_COMPO[72],peac_periodedebut,false))
 	return -1;
 if (!ValiderChampsType(Table,"peac_periodedebut",TAB_GLOBAL_COMPO[72],peac_periodedebut))
 	return -1;
 var peac_periodefin=GetValAt(73);
 if (!ValiderChampsObligatoire(Table,"peac_periodefin",TAB_GLOBAL_COMPO[73],peac_periodefin,false))
 	return -1;
 if (!ValiderChampsType(Table,"peac_periodefin",TAB_GLOBAL_COMPO[73],peac_periodefin))
 	return -1;
 var peac_fini=GetValAt(74);
 if (!ValiderChampsObligatoire(Table,"peac_fini",TAB_GLOBAL_COMPO[74],peac_fini,false))
 	return -1;
 if (!ValiderChampsType(Table,"peac_fini",TAB_GLOBAL_COMPO[74],peac_fini))
 	return -1;
 var Req="insert into "+Table+" ";
var TabInsertionEnPlus=new Array();
 Req+="("+NomCleMaitre+",pe_numero,re_numero,peac_titre,peac_periodedebut,peac_periodefin,peac_fini"+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[0]:"")+")";
 Req+=" values ("+CleMaitre+","+TAB_COMPO_PPTES[3].NewCle+","+re_numero+","+(peac_titre=="" ? "null" : "'"+ValiderChaine(peac_titre)+"'" )+","+(peac_periodedebut=="" ? "null" : "'"+ValiderChaine(peac_periodedebut)+"'" )+","+(peac_periodefin=="" ? "null" : "'"+ValiderChaine(peac_periodefin)+"'" )+","+(peac_fini=="true" ? "true" : "false")+""+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[1]:"")+")";

 if (pgsql_update(Req)==0)
	alert("Echec lors de l'insertion");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Personnes
  TAPEZ ICI LE CODE DE LA REQUETE DE SUPPRESSION 
***************************************************/
function User_Delete_Personnes_Responsabilités_32(Compo_Maitre)
{
 var Table="estresponsable";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var Req="delete from "+Table+" where "+NomCleMaitre+" = "+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la supression");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Personnes
  TAPEZ ICI LE CODE DE LA REQUETE DE MISE A JOUR 
***************************************************/
function User_Update_Personnes_Responsabilités_32(Compo_Maitre)
{
 var Table="estresponsable";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var re_numero=GetValAt(70);
 if (re_numero=="-1")
    re_numero="null";
 if (!ValiderChampsObligatoire(Table,"re_numero",TAB_GLOBAL_COMPO[70],re_numero,true))
 	return -1;
 var peac_titre=GetValAt(71);
 if (!ValiderChampsObligatoire(Table,"peac_titre",TAB_GLOBAL_COMPO[71],peac_titre,false))
 	return -1;
 if (!ValiderChampsType(Table,"peac_titre",TAB_GLOBAL_COMPO[71],peac_titre))
 	return -1;
 var peac_periodedebut=GetValAt(72);
 if (!ValiderChampsObligatoire(Table,"peac_periodedebut",TAB_GLOBAL_COMPO[72],peac_periodedebut,false))
 	return -1;
 if (!ValiderChampsType(Table,"peac_periodedebut",TAB_GLOBAL_COMPO[72],peac_periodedebut))
 	return -1;
 var peac_periodefin=GetValAt(73);
 if (!ValiderChampsObligatoire(Table,"peac_periodefin",TAB_GLOBAL_COMPO[73],peac_periodefin,false))
 	return -1;
 if (!ValiderChampsType(Table,"peac_periodefin",TAB_GLOBAL_COMPO[73],peac_periodefin))
 	return -1;
 var peac_fini=GetValAt(74);
 if (!ValiderChampsObligatoire(Table,"peac_fini",TAB_GLOBAL_COMPO[74],peac_fini,false))
 	return -1;
 if (!ValiderChampsType(Table,"peac_fini",TAB_GLOBAL_COMPO[74],peac_fini))
 	return -1;
 var Req="update "+Table+" set ";
 Req+="re_numero="+re_numero+",peac_titre="+(peac_titre=="" ? "null" : "'"+ValiderChaine(peac_titre)+"'" )+",peac_periodedebut="+(peac_periodedebut=="" ? "null" : "'"+ValiderChaine(peac_periodedebut)+"'" )+",peac_periodefin="+(peac_periodefin=="" ? "null" : "'"+ValiderChaine(peac_periodefin)+"'" )+",peac_fini="+(peac_fini=="true" ? "true" : "false")+"";
 Req+=" where "+NomCleMaitre+"="+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la mise à jour");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Personnes
  TAPEZ ICI LE CODE DE LA REQUETE D'INSERTION
***************************************************/
function User_Insert_Personnes_Attributs_38(Compo_Maitre)
{

/*
***** INFOS ******

Nbr d'esclaves = 3

Id dans le tab: 78;
simple
Nbr Jointure: 1;
    Joint n° 0 = typeattribut,ta_numero,ta_numero

Id dans le tab: 79;
simple
Nbr Jointure: 1;
    Joint n° 0 = categorie,cr_numero,cr_numero

Id dans le tab: 80;
simple
Nbr Jointure: PAS DE JOINTURE;

******************
*/

 var Table="attribut";
 var CleMaitre = TAB_COMPO_PPTES[75].NewCle;
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 /* COMPOSANT LISTE AVEC JOINTURE SIMPLE */
 var ta_numero=GetValAt(78);
 if (ta_numero=="-1")
    ta_numero="null";
 if (!ValiderChampsObligatoire(Table,"ta_numero",TAB_GLOBAL_COMPO[78],ta_numero,true))
 	return -1;
 var cr_numero=GetValAt(79);
 if (cr_numero=="-1")
    cr_numero="null";
 if (!ValiderChampsObligatoire(Table,"cr_numero",TAB_GLOBAL_COMPO[79],cr_numero,true))
 	return -1;
 var at_valeur=GetValAt(80);
 if (!ValiderChampsObligatoire(Table,"at_valeur",TAB_GLOBAL_COMPO[80],at_valeur,false))
 	return -1;
 if (!ValiderChampsType(Table,"at_valeur",TAB_GLOBAL_COMPO[80],at_valeur))
 	return -1;
 var Req="insert into "+Table+" ";
var TabInsertionEnPlus=new Array();
 Req+="("+NomCleMaitre+",pe_numero,ta_numero,cr_numero,at_valeur"+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[0]:"")+")";
 Req+=" values ("+CleMaitre+","+TAB_COMPO_PPTES[3].NewCle+","+ta_numero+","+cr_numero+","+(at_valeur=="" ? "null" : "'"+ValiderChaine(at_valeur)+"'" )+""+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[1]:"")+")";

 if (pgsql_update(Req)==0)
	alert("Echec lors de l'insertion");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Personnes
  TAPEZ ICI LE CODE DE LA REQUETE DE SUPPRESSION 
***************************************************/
function User_Delete_Personnes_Attributs_38(Compo_Maitre)
{
 var Table="attribut";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var Req="delete from "+Table+" where "+NomCleMaitre+" = "+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la supression");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Personnes
  TAPEZ ICI LE CODE DE LA REQUETE DE MISE A JOUR 
***************************************************/
function User_Update_Personnes_Attributs_38(Compo_Maitre)
{
 var Table="attribut";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var ta_numero=GetValAt(78);
 if (ta_numero=="-1")
    ta_numero="null";
 if (!ValiderChampsObligatoire(Table,"ta_numero",TAB_GLOBAL_COMPO[78],ta_numero,true))
 	return -1;
 var cr_numero=GetValAt(79);
 if (cr_numero=="-1")
    cr_numero="null";
 if (!ValiderChampsObligatoire(Table,"cr_numero",TAB_GLOBAL_COMPO[79],cr_numero,true))
 	return -1;
 var at_valeur=GetValAt(80);
 if (!ValiderChampsObligatoire(Table,"at_valeur",TAB_GLOBAL_COMPO[80],at_valeur,false))
 	return -1;
 if (!ValiderChampsType(Table,"at_valeur",TAB_GLOBAL_COMPO[80],at_valeur))
 	return -1;
 var Req="update "+Table+" set ";
 Req+="ta_numero="+ta_numero+",cr_numero="+cr_numero+",at_valeur="+(at_valeur=="" ? "null" : "'"+ValiderChaine(at_valeur)+"'" )+"";
 Req+=" where "+NomCleMaitre+"="+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la mise à jour");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Personnes
  TAPEZ ICI LE CODE DE LA REQUETE D'INSERTION
***************************************************/
function User_Insert_Personnes_Routages_45(Compo_Maitre)
{

/*
***** INFOS ******

Nbr d'esclaves = 5

Id dans le tab: 106;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 107;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 108;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 109;
simple
Nbr Jointure: 1;
    Joint n° 0 = adresse,ad_numero,ad_numero

Id dans le tab: 110;
simple
Nbr Jointure: PAS DE JOINTURE;

******************
*/

 var Table="routage";
 var CleMaitre = TAB_COMPO_PPTES[100].NewCle;
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 /* COMPOSANT LISTE AVEC JOINTURE SIMPLE */
 var ro_debutservice=GetValAt(106);
 if (!ValiderChampsObligatoire(Table,"ro_debutservice",TAB_GLOBAL_COMPO[106],ro_debutservice,false))
 	return -1;
 if (!ValiderChampsType(Table,"ro_debutservice",TAB_GLOBAL_COMPO[106],ro_debutservice))
 	return -1;
 var ro_finservice=GetValAt(107);
 if (!ValiderChampsObligatoire(Table,"ro_finservice",TAB_GLOBAL_COMPO[107],ro_finservice,false))
 	return -1;
 if (!ValiderChampsType(Table,"ro_finservice",TAB_GLOBAL_COMPO[107],ro_finservice))
 	return -1;
 var ro_quantite=GetValAt(108);
 if (!ValiderChampsObligatoire(Table,"ro_quantite",TAB_GLOBAL_COMPO[108],ro_quantite,false))
 	return -1;
 if (!ValiderChampsType(Table,"ro_quantite",TAB_GLOBAL_COMPO[108],ro_quantite))
 	return -1;
 var ad_numero=GetValAt(109);
 if (ad_numero=="-1")
    ad_numero="null";
 if (!ValiderChampsObligatoire(Table,"ad_numero",TAB_GLOBAL_COMPO[109],ad_numero,true))
 	return -1;
 var ro_suspendu=GetValAt(110);
 if (!ValiderChampsObligatoire(Table,"ro_suspendu",TAB_GLOBAL_COMPO[110],ro_suspendu,false))
 	return -1;
 if (!ValiderChampsType(Table,"ro_suspendu",TAB_GLOBAL_COMPO[110],ro_suspendu))
 	return -1;
 var Req="insert into "+Table+" ";
var TabInsertionEnPlus=new Array();
 Req+="("+NomCleMaitre+",pe_numero,ro_debutservice,ro_finservice,ro_quantite,ad_numero,ro_suspendu"+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[0]:"")+")";
 Req+=" values ("+CleMaitre+","+TAB_COMPO_PPTES[3].NewCle+","+(ro_debutservice=="" ? "null" : "'"+ValiderChaine(ro_debutservice)+"'" )+","+(ro_finservice=="" ? "null" : "'"+ValiderChaine(ro_finservice)+"'" )+","+(ro_quantite=="" ? "null" : "'"+ValiderChaine(ro_quantite)+"'" )+","+ad_numero+","+(ro_suspendu=="true" ? "true" : "false")+""+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[1]:"")+")";

 if (pgsql_update(Req)==0)
	alert("Echec lors de l'insertion");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Personnes
  TAPEZ ICI LE CODE DE LA REQUETE DE SUPPRESSION 
***************************************************/
function User_Delete_Personnes_Routages_45(Compo_Maitre)
{
 var Table="routage";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var Req="delete from "+Table+" where "+NomCleMaitre+" = "+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la supression");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Personnes
  TAPEZ ICI LE CODE DE LA REQUETE DE MISE A JOUR 
***************************************************/
function User_Update_Personnes_Routages_45(Compo_Maitre)
{
 var Table="routage";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var ro_debutservice=GetValAt(106);
 if (!ValiderChampsObligatoire(Table,"ro_debutservice",TAB_GLOBAL_COMPO[106],ro_debutservice,false))
 	return -1;
 if (!ValiderChampsType(Table,"ro_debutservice",TAB_GLOBAL_COMPO[106],ro_debutservice))
 	return -1;
 var ro_finservice=GetValAt(107);
 if (!ValiderChampsObligatoire(Table,"ro_finservice",TAB_GLOBAL_COMPO[107],ro_finservice,false))
 	return -1;
 if (!ValiderChampsType(Table,"ro_finservice",TAB_GLOBAL_COMPO[107],ro_finservice))
 	return -1;
 var ro_quantite=GetValAt(108);
 if (!ValiderChampsObligatoire(Table,"ro_quantite",TAB_GLOBAL_COMPO[108],ro_quantite,false))
 	return -1;
 if (!ValiderChampsType(Table,"ro_quantite",TAB_GLOBAL_COMPO[108],ro_quantite))
 	return -1;
 var ad_numero=GetValAt(109);
 if (ad_numero=="-1")
    ad_numero="null";
 if (!ValiderChampsObligatoire(Table,"ad_numero",TAB_GLOBAL_COMPO[109],ad_numero,true))
 	return -1;
 var ro_suspendu=GetValAt(110);
 if (!ValiderChampsObligatoire(Table,"ro_suspendu",TAB_GLOBAL_COMPO[110],ro_suspendu,false))
 	return -1;
 if (!ValiderChampsType(Table,"ro_suspendu",TAB_GLOBAL_COMPO[110],ro_suspendu))
 	return -1;
 var Req="update "+Table+" set ";
 Req+="ro_debutservice="+(ro_debutservice=="" ? "null" : "'"+ValiderChaine(ro_debutservice)+"'" )+",ro_finservice="+(ro_finservice=="" ? "null" : "'"+ValiderChaine(ro_finservice)+"'" )+",ro_quantite="+(ro_quantite=="" ? "null" : "'"+ValiderChaine(ro_quantite)+"'" )+",ad_numero="+ad_numero+",ro_suspendu="+(ro_suspendu=="true" ? "true" : "false")+"";
 Req+=" where "+NomCleMaitre+"="+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la mise à jour");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Contacts
  TAPEZ ICI LE CODE DE LA REQUETE D'INSERTION
***************************************************/
function User_Insert_Contacts_Liste_des_contacts0(Compo_Maitre)
{

/*
***** INFOS ******

Nbr d'esclaves = 2

Id dans le tab: 114;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 115;
simple
Nbr Jointure: PAS DE JOINTURE;

******************
*/

 var Table="contact";
 var CleMaitre = TAB_COMPO_PPTES[111].NewCle;
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var cn_type=GetValAt(114);
 if (!ValiderChampsObligatoire(Table,"cn_type",TAB_GLOBAL_COMPO[114],cn_type,false))
 	return -1;
 if (!ValiderChampsType(Table,"cn_type",TAB_GLOBAL_COMPO[114],cn_type))
 	return -1;
 var cn_coordonnee=GetValAt(115);
 if (!ValiderChampsObligatoire(Table,"cn_coordonnee",TAB_GLOBAL_COMPO[115],cn_coordonnee,false))
 	return -1;
 if (!ValiderChampsType(Table,"cn_coordonnee",TAB_GLOBAL_COMPO[115],cn_coordonnee))
 	return -1;
 var Req="insert into "+Table+" ";
var TabInsertionEnPlus=new Array();
 Req+="("+NomCleMaitre+",cn_type,cn_coordonnee"+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[0]:"")+")";
 Req+=" values ("+CleMaitre+","+(cn_type=="" ? "null" : "'"+ValiderChaine(cn_type)+"'" )+","+(cn_coordonnee=="" ? "null" : "'"+ValiderChaine(cn_coordonnee)+"'" )+""+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[1]:"")+")";

 if (pgsql_update(Req)==0)
	alert("Echec lors de l'insertion");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Contacts
  TAPEZ ICI LE CODE DE LA REQUETE DE SUPPRESSION 
***************************************************/
function User_Delete_Contacts_Liste_des_contacts0(Compo_Maitre)
{
 var Table="contact";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var Req="delete from "+Table+" where "+NomCleMaitre+" = "+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la supression");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Contacts
  TAPEZ ICI LE CODE DE LA REQUETE DE MISE A JOUR 
***************************************************/
function User_Update_Contacts_Liste_des_contacts0(Compo_Maitre)
{
 var Table="contact";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var cn_type=GetValAt(114);
 if (!ValiderChampsObligatoire(Table,"cn_type",TAB_GLOBAL_COMPO[114],cn_type,false))
 	return -1;
 if (!ValiderChampsType(Table,"cn_type",TAB_GLOBAL_COMPO[114],cn_type))
 	return -1;
 var cn_coordonnee=GetValAt(115);
 if (!ValiderChampsObligatoire(Table,"cn_coordonnee",TAB_GLOBAL_COMPO[115],cn_coordonnee,false))
 	return -1;
 if (!ValiderChampsType(Table,"cn_coordonnee",TAB_GLOBAL_COMPO[115],cn_coordonnee))
 	return -1;
 var Req="update "+Table+" set ";
 Req+="cn_type="+(cn_type=="" ? "null" : "'"+ValiderChaine(cn_type)+"'" )+",cn_coordonnee="+(cn_coordonnee=="" ? "null" : "'"+ValiderChaine(cn_coordonnee)+"'" )+"";
 Req+=" where "+NomCleMaitre+"="+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la mise à jour");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Devis
  TAPEZ ICI LE CODE DE LA REQUETE D'INSERTION
***************************************************/
function User_Insert_Devis_Liste_des_devis0(Compo_Maitre)
{

/*
***** INFOS ******

Nbr d'esclaves = 8

Id dans le tab: 120;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 121;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 122;
simple
Nbr Jointure: 1;
    Joint n° 0 = employe,em_numero,em_numero

Id dans le tab: 123;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 124;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 125;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 126;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 127;
complexe
Nbr Jointure: 1;
    Joint n° 0 = ligne,de_numero,de_numero

******************
*/

 var Table="devis";
 var CleMaitre = TAB_COMPO_PPTES[116].NewCle;
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var de_date=GetValAt(120);
 if (!ValiderChampsObligatoire(Table,"de_date",TAB_GLOBAL_COMPO[120],de_date,false))
 	return -1;
 if (!ValiderChampsType(Table,"de_date",TAB_GLOBAL_COMPO[120],de_date))
 	return -1;
 var de_libelle=GetValAt(121);
 if (!ValiderChampsObligatoire(Table,"de_libelle",TAB_GLOBAL_COMPO[121],de_libelle,false))
 	return -1;
 if (!ValiderChampsType(Table,"de_libelle",TAB_GLOBAL_COMPO[121],de_libelle))
 	return -1;
 var em_numero=GetValAt(122);
 if (em_numero=="-1")
    em_numero="null";
 if (!ValiderChampsObligatoire(Table,"em_numero",TAB_GLOBAL_COMPO[122],em_numero,true))
 	return -1;
 var de_acompte=GetValAt(123);
 if (!ValiderChampsObligatoire(Table,"de_acompte",TAB_GLOBAL_COMPO[123],de_acompte,false))
 	return -1;
 if (!ValiderChampsType(Table,"de_acompte",TAB_GLOBAL_COMPO[123],de_acompte))
 	return -1;
 var de_lettre=GetValAt(124);
 if (!ValiderChampsObligatoire(Table,"de_lettre",TAB_GLOBAL_COMPO[124],de_lettre,false))
 	return -1;
 if (!ValiderChampsType(Table,"de_lettre",TAB_GLOBAL_COMPO[124],de_lettre))
 	return -1;
 var de_civilites=GetValAt(125);
 if (!ValiderChampsObligatoire(Table,"de_civilites",TAB_GLOBAL_COMPO[125],de_civilites,false))
 	return -1;
 if (!ValiderChampsType(Table,"de_civilites",TAB_GLOBAL_COMPO[125],de_civilites))
 	return -1;
 var de_introduction=GetValAt(126);
 if (!ValiderChampsObligatoire(Table,"de_introduction",TAB_GLOBAL_COMPO[126],de_introduction,false))
 	return -1;
 if (!ValiderChampsType(Table,"de_introduction",TAB_GLOBAL_COMPO[126],de_introduction))
 	return -1;
 var Req="insert into "+Table+" ";
var TabInsertionEnPlus=new Array();
var Asso11=false;
var TabAsso11=new Array();
var CompoLie = GetSQLCompoAt(81);
var CompoLieMaitre = CompoLie.my_Affichable.my_MaitresLiaison.getAttribut().GetComposant();
var CleLiasonForte = CompoLieMaitre.getCleVal();
if (CleLiasonForte!=-1)
{
	Asso11=GenererAssociation11(CompoLie,CleMaitre,CleLiasonForte,TabAsso11);
}
else
{
	alert("Vous devez d'abord valider "+CompoLieMaitre.getLabel()+" puis mettre à jour.");
	return -1;
}
 Req+="("+NomCleMaitre+",de_date,de_libelle,em_numero,de_acompte,de_lettre,de_civilites,de_introduction"+(Asso11?","+TabAsso11[0]:"")+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[0]:"")+")";
 Req+=" values ("+CleMaitre+","+(de_date=="" ? "null" : "'"+ValiderChaine(de_date)+"'" )+","+(de_libelle=="" ? "null" : "'"+ValiderChaine(de_libelle)+"'" )+","+em_numero+","+(de_acompte=="true" ? "true" : "false")+","+(de_lettre=="true" ? "true" : "false")+","+(de_civilites=="" ? "null" : "'"+ValiderChaine(de_civilites)+"'" )+","+(de_introduction=="" ? "null" : "'"+ValiderChaine(de_introduction)+"'" )+""+(Asso11?","+TabAsso11[1]:"")+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[1]:"")+")";

 if (pgsql_update(Req)==0)
	alert("Echec lors de l'insertion");
if (CleLiasonForte!=-1 && !Asso11)
{
	AjouterAssociation(CompoLie,CleMaitre,CleLiasonForte);
}
else
{
	if (CleLiasonForte==-1)
	{
		alert("Attention votre enregistrement ne peux être relié à "+CompoLieMaitre.getLabel()+". Vous devez d'abord ajouter un enregistrement à "+CompoLieMaitre.getLabel()+" puis le mettre à jour");
		return -1;
	}
}
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Devis
  TAPEZ ICI LE CODE DE LA REQUETE DE SUPPRESSION 
***************************************************/
function User_Delete_Devis_Liste_des_devis0(Compo_Maitre)
{
 var Table="devis";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var Req="delete from "+Table+" where "+NomCleMaitre+" = "+CleMaitre;

var CompoLie = GetSQLCompoAt(81);
var CompoLieMaitre = CompoLie.my_Affichable.my_MaitresLiaison.getAttribut().GetComposant();
var CleLiasonForte = CompoLieMaitre.getCleVal();
if (CleLiasonForte!=-1)
{
	SuprimerAssociation(CompoLie,CleMaitre,CleLiasonForte);
}
else
{
	alert("Erreur "+CompoLieMaitre.getLabel()+" correspondant(e) Introuvable");
	return CleMaitre;
}
 if (pgsql_update(Req)==0)
	alert("Echec lors de la supression");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Devis
  TAPEZ ICI LE CODE DE LA REQUETE DE MISE A JOUR 
***************************************************/
function User_Update_Devis_Liste_des_devis0(Compo_Maitre)
{
 var Table="devis";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var de_date=GetValAt(120);
 if (!ValiderChampsObligatoire(Table,"de_date",TAB_GLOBAL_COMPO[120],de_date,false))
 	return -1;
 if (!ValiderChampsType(Table,"de_date",TAB_GLOBAL_COMPO[120],de_date))
 	return -1;
 var de_libelle=GetValAt(121);
 if (!ValiderChampsObligatoire(Table,"de_libelle",TAB_GLOBAL_COMPO[121],de_libelle,false))
 	return -1;
 if (!ValiderChampsType(Table,"de_libelle",TAB_GLOBAL_COMPO[121],de_libelle))
 	return -1;
 var em_numero=GetValAt(122);
 if (em_numero=="-1")
    em_numero="null";
 if (!ValiderChampsObligatoire(Table,"em_numero",TAB_GLOBAL_COMPO[122],em_numero,true))
 	return -1;
 var de_acompte=GetValAt(123);
 if (!ValiderChampsObligatoire(Table,"de_acompte",TAB_GLOBAL_COMPO[123],de_acompte,false))
 	return -1;
 if (!ValiderChampsType(Table,"de_acompte",TAB_GLOBAL_COMPO[123],de_acompte))
 	return -1;
 var de_lettre=GetValAt(124);
 if (!ValiderChampsObligatoire(Table,"de_lettre",TAB_GLOBAL_COMPO[124],de_lettre,false))
 	return -1;
 if (!ValiderChampsType(Table,"de_lettre",TAB_GLOBAL_COMPO[124],de_lettre))
 	return -1;
 var de_civilites=GetValAt(125);
 if (!ValiderChampsObligatoire(Table,"de_civilites",TAB_GLOBAL_COMPO[125],de_civilites,false))
 	return -1;
 if (!ValiderChampsType(Table,"de_civilites",TAB_GLOBAL_COMPO[125],de_civilites))
 	return -1;
 var de_introduction=GetValAt(126);
 if (!ValiderChampsObligatoire(Table,"de_introduction",TAB_GLOBAL_COMPO[126],de_introduction,false))
 	return -1;
 if (!ValiderChampsType(Table,"de_introduction",TAB_GLOBAL_COMPO[126],de_introduction))
 	return -1;
 var Req="update "+Table+" set ";
 Req+="de_date="+(de_date=="" ? "null" : "'"+ValiderChaine(de_date)+"'" )+",de_libelle="+(de_libelle=="" ? "null" : "'"+ValiderChaine(de_libelle)+"'" )+",em_numero="+em_numero+",de_acompte="+(de_acompte=="true" ? "true" : "false")+",de_lettre="+(de_lettre=="true" ? "true" : "false")+",de_civilites="+(de_civilites=="" ? "null" : "'"+ValiderChaine(de_civilites)+"'" )+",de_introduction="+(de_introduction=="" ? "null" : "'"+ValiderChaine(de_introduction)+"'" )+"";
 Req+=" where "+NomCleMaitre+"="+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la mise à jour");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Devis
  TAPEZ ICI LE CODE DE LA REQUETE D'INSERTION
***************************************************/
function User_Insert_Devis_Lignes_du_devis_8(Compo_Maitre)
{

/*
***** INFOS ******

Nbr d'esclaves = 3

Id dans le tab: 132;
simple
Nbr Jointure: 1;
    Joint n° 0 = produit,pd_numero,pd_numero

Id dans le tab: 133;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 134;
simple
Nbr Jointure: PAS DE JOINTURE;

******************
*/

 var Table="ligne";
 var CleMaitre = TAB_COMPO_PPTES[127].NewCle;
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 /* COMPOSANT LISTE AVEC JOINTURE SIMPLE */
 var pd_numero=GetValAt(132);
 if (pd_numero=="-1")
    pd_numero="null";
 if (!ValiderChampsObligatoire(Table,"pd_numero",TAB_GLOBAL_COMPO[132],pd_numero,true))
 	return -1;
 var l_quantite=GetValAt(133);
 if (!ValiderChampsObligatoire(Table,"l_quantite",TAB_GLOBAL_COMPO[133],l_quantite,false))
 	return -1;
 if (!ValiderChampsType(Table,"l_quantite",TAB_GLOBAL_COMPO[133],l_quantite))
 	return -1;
 var l_notes=GetValAt(134);
 if (!ValiderChampsObligatoire(Table,"l_notes",TAB_GLOBAL_COMPO[134],l_notes,false))
 	return -1;
 if (!ValiderChampsType(Table,"l_notes",TAB_GLOBAL_COMPO[134],l_notes))
 	return -1;
 var Req="insert into "+Table+" ";
var TabInsertionEnPlus=new Array();
 Req+="("+NomCleMaitre+",de_numero,pd_numero,l_quantite,l_notes"+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[0]:"")+")";
 Req+=" values ("+CleMaitre+","+TAB_COMPO_PPTES[116].NewCle+","+pd_numero+","+(l_quantite=="" ? "null" : "'"+ValiderChaine(l_quantite)+"'" )+","+(l_notes=="" ? "null" : "'"+ValiderChaine(l_notes)+"'" )+""+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[1]:"")+")";

 if (pgsql_update(Req)==0)
	alert("Echec lors de l'insertion");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Devis
  TAPEZ ICI LE CODE DE LA REQUETE DE SUPPRESSION 
***************************************************/
function User_Delete_Devis_Lignes_du_devis_8(Compo_Maitre)
{
 var Table="ligne";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var Req="delete from "+Table+" where "+NomCleMaitre+" = "+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la supression");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Devis
  TAPEZ ICI LE CODE DE LA REQUETE DE MISE A JOUR 
***************************************************/
function User_Update_Devis_Lignes_du_devis_8(Compo_Maitre)
{
 var Table="ligne";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var pd_numero=GetValAt(132);
 if (pd_numero=="-1")
    pd_numero="null";
 if (!ValiderChampsObligatoire(Table,"pd_numero",TAB_GLOBAL_COMPO[132],pd_numero,true))
 	return -1;
 var l_quantite=GetValAt(133);
 if (!ValiderChampsObligatoire(Table,"l_quantite",TAB_GLOBAL_COMPO[133],l_quantite,false))
 	return -1;
 if (!ValiderChampsType(Table,"l_quantite",TAB_GLOBAL_COMPO[133],l_quantite))
 	return -1;
 var l_notes=GetValAt(134);
 if (!ValiderChampsObligatoire(Table,"l_notes",TAB_GLOBAL_COMPO[134],l_notes,false))
 	return -1;
 if (!ValiderChampsType(Table,"l_notes",TAB_GLOBAL_COMPO[134],l_notes))
 	return -1;
 var Req="update "+Table+" set ";
 Req+="pd_numero="+pd_numero+",l_quantite="+(l_quantite=="" ? "null" : "'"+ValiderChaine(l_quantite)+"'" )+",l_notes="+(l_notes=="" ? "null" : "'"+ValiderChaine(l_notes)+"'" )+"";
 Req+=" where "+NomCleMaitre+"="+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la mise à jour");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Facture
  TAPEZ ICI LE CODE DE LA REQUETE D'INSERTION
***************************************************/
function User_Insert_Facture_Liste_des_factures0(Compo_Maitre)
{

/*
***** INFOS ******

Nbr d'esclaves = 11

Id dans le tab: 141;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 142;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 143;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 144;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 145;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 146;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 147;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 148;
complexe
Nbr Jointure: 1;
    Joint n° 0 = lignefacture,fa_numero,fa_numero

Id dans le tab: 153;
complexe
Nbr Jointure: 1;
    Joint n° 0 = avoir,fa_numero,fa_numero

Id dans le tab: 156;
complexe
Nbr Jointure: 1;
    Joint n° 0 = facturereglement,fa_numero,fa_numero

Id dans le tab: 166;
complexe
Nbr Jointure: 1;
    Joint n° 0 = routage,fa_numero,fa_numero

******************
*/

 var Table="facture";
 var CleMaitre = TAB_COMPO_PPTES[135].NewCle;
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var fa_numfact=GetValAt(141);
 if (!ValiderChampsObligatoire(Table,"fa_numfact",TAB_GLOBAL_COMPO[141],fa_numfact,false))
 	return -1;
 if (!ValiderChampsType(Table,"fa_numfact",TAB_GLOBAL_COMPO[141],fa_numfact))
 	return -1;
 var fa_date=GetValAt(142);
 if (!ValiderChampsObligatoire(Table,"fa_date",TAB_GLOBAL_COMPO[142],fa_date,false))
 	return -1;
 if (!ValiderChampsType(Table,"fa_date",TAB_GLOBAL_COMPO[142],fa_date))
 	return -1;
 var fa_libelle=GetValAt(143);
 if (!ValiderChampsObligatoire(Table,"fa_libelle",TAB_GLOBAL_COMPO[143],fa_libelle,false))
 	return -1;
 if (!ValiderChampsType(Table,"fa_libelle",TAB_GLOBAL_COMPO[143],fa_libelle))
 	return -1;
 var fa_reduction=GetValAt(144);
 if (!ValiderChampsObligatoire(Table,"fa_reduction",TAB_GLOBAL_COMPO[144],fa_reduction,false))
 	return -1;
 if (!ValiderChampsType(Table,"fa_reduction",TAB_GLOBAL_COMPO[144],fa_reduction))
 	return -1;
 var fa_montantht=GetValAt(145);
 if (!ValiderChampsObligatoire(Table,"fa_montantht",TAB_GLOBAL_COMPO[145],fa_montantht,false))
 	return -1;
 if (!ValiderChampsType(Table,"fa_montantht",TAB_GLOBAL_COMPO[145],fa_montantht))
 	return -1;
 var fa_montantttc=GetValAt(146);
 if (!ValiderChampsObligatoire(Table,"fa_montantttc",TAB_GLOBAL_COMPO[146],fa_montantttc,false))
 	return -1;
 if (!ValiderChampsType(Table,"fa_montantttc",TAB_GLOBAL_COMPO[146],fa_montantttc))
 	return -1;
 var fa_annotation=GetValAt(147);
 if (!ValiderChampsObligatoire(Table,"fa_annotation",TAB_GLOBAL_COMPO[147],fa_annotation,false))
 	return -1;
 if (!ValiderChampsType(Table,"fa_annotation",TAB_GLOBAL_COMPO[147],fa_annotation))
 	return -1;
 var Req="insert into "+Table+" ";
var TabInsertionEnPlus=new Array();
var Asso11=false;
var TabAsso11=new Array();
var CompoLie = GetSQLCompoAt(87);
var CompoLieMaitre = CompoLie.my_Affichable.my_MaitresLiaison.getAttribut().GetComposant();
var CleLiasonForte = CompoLieMaitre.getCleVal();
if (CleLiasonForte!=-1)
{
	Asso11=GenererAssociation11(CompoLie,CleMaitre,CleLiasonForte,TabAsso11);
}
else
{
	alert("Vous devez d'abord valider "+CompoLieMaitre.getLabel()+" puis mettre à jour.");
	return -1;
}
 Req+="("+NomCleMaitre+",fa_numfact,fa_date,fa_libelle,fa_reduction,fa_montantht,fa_montantttc,fa_annotation"+(Asso11?","+TabAsso11[0]:"")+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[0]:"")+")";
 Req+=" values ("+CleMaitre+","+(fa_numfact=="" ? "null" : "'"+ValiderChaine(fa_numfact)+"'" )+","+(fa_date=="" ? "null" : "'"+ValiderChaine(fa_date)+"'" )+","+(fa_libelle=="" ? "null" : "'"+ValiderChaine(fa_libelle)+"'" )+","+(fa_reduction=="" ? "null" : "'"+ValiderChaine(fa_reduction)+"'" )+","+(fa_montantht=="" ? "null" : "'"+ValiderChaine(fa_montantht)+"'" )+","+(fa_montantttc=="" ? "null" : "'"+ValiderChaine(fa_montantttc)+"'" )+","+(fa_annotation=="" ? "null" : "'"+ValiderChaine(fa_annotation)+"'" )+""+(Asso11?","+TabAsso11[1]:"")+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[1]:"")+")";

 if (pgsql_update(Req)==0)
	alert("Echec lors de l'insertion");
if (CleLiasonForte!=-1 && !Asso11)
{
	AjouterAssociation(CompoLie,CleMaitre,CleLiasonForte);
}
else
{
	if (CleLiasonForte==-1)
	{
		alert("Attention votre enregistrement ne peux être relié à "+CompoLieMaitre.getLabel()+". Vous devez d'abord ajouter un enregistrement à "+CompoLieMaitre.getLabel()+" puis le mettre à jour");
		return -1;
	}
}
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Facture
  TAPEZ ICI LE CODE DE LA REQUETE DE SUPPRESSION 
***************************************************/
function User_Delete_Facture_Liste_des_factures0(Compo_Maitre)
{
 var Table="facture";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var Req="delete from "+Table+" where "+NomCleMaitre+" = "+CleMaitre;

var CompoLie = GetSQLCompoAt(87);
var CompoLieMaitre = CompoLie.my_Affichable.my_MaitresLiaison.getAttribut().GetComposant();
var CleLiasonForte = CompoLieMaitre.getCleVal();
if (CleLiasonForte!=-1)
{
	SuprimerAssociation(CompoLie,CleMaitre,CleLiasonForte);
}
else
{
	alert("Erreur "+CompoLieMaitre.getLabel()+" correspondant(e) Introuvable");
	return CleMaitre;
}
 if (pgsql_update(Req)==0)
	alert("Echec lors de la supression");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Facture
  TAPEZ ICI LE CODE DE LA REQUETE DE MISE A JOUR 
***************************************************/
function User_Update_Facture_Liste_des_factures0(Compo_Maitre)
{
 var Table="facture";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var fa_numfact=GetValAt(141);
 if (!ValiderChampsObligatoire(Table,"fa_numfact",TAB_GLOBAL_COMPO[141],fa_numfact,false))
 	return -1;
 if (!ValiderChampsType(Table,"fa_numfact",TAB_GLOBAL_COMPO[141],fa_numfact))
 	return -1;
 var fa_date=GetValAt(142);
 if (!ValiderChampsObligatoire(Table,"fa_date",TAB_GLOBAL_COMPO[142],fa_date,false))
 	return -1;
 if (!ValiderChampsType(Table,"fa_date",TAB_GLOBAL_COMPO[142],fa_date))
 	return -1;
 var fa_libelle=GetValAt(143);
 if (!ValiderChampsObligatoire(Table,"fa_libelle",TAB_GLOBAL_COMPO[143],fa_libelle,false))
 	return -1;
 if (!ValiderChampsType(Table,"fa_libelle",TAB_GLOBAL_COMPO[143],fa_libelle))
 	return -1;
 var fa_reduction=GetValAt(144);
 if (!ValiderChampsObligatoire(Table,"fa_reduction",TAB_GLOBAL_COMPO[144],fa_reduction,false))
 	return -1;
 if (!ValiderChampsType(Table,"fa_reduction",TAB_GLOBAL_COMPO[144],fa_reduction))
 	return -1;
 var fa_montantht=GetValAt(145);
 if (!ValiderChampsObligatoire(Table,"fa_montantht",TAB_GLOBAL_COMPO[145],fa_montantht,false))
 	return -1;
 if (!ValiderChampsType(Table,"fa_montantht",TAB_GLOBAL_COMPO[145],fa_montantht))
 	return -1;
 var fa_montantttc=GetValAt(146);
 if (!ValiderChampsObligatoire(Table,"fa_montantttc",TAB_GLOBAL_COMPO[146],fa_montantttc,false))
 	return -1;
 if (!ValiderChampsType(Table,"fa_montantttc",TAB_GLOBAL_COMPO[146],fa_montantttc))
 	return -1;
 var fa_annotation=GetValAt(147);
 if (!ValiderChampsObligatoire(Table,"fa_annotation",TAB_GLOBAL_COMPO[147],fa_annotation,false))
 	return -1;
 if (!ValiderChampsType(Table,"fa_annotation",TAB_GLOBAL_COMPO[147],fa_annotation))
 	return -1;
 var Req="update "+Table+" set ";
 Req+="fa_numfact="+(fa_numfact=="" ? "null" : "'"+ValiderChaine(fa_numfact)+"'" )+",fa_date="+(fa_date=="" ? "null" : "'"+ValiderChaine(fa_date)+"'" )+",fa_libelle="+(fa_libelle=="" ? "null" : "'"+ValiderChaine(fa_libelle)+"'" )+",fa_reduction="+(fa_reduction=="" ? "null" : "'"+ValiderChaine(fa_reduction)+"'" )+",fa_montantht="+(fa_montantht=="" ? "null" : "'"+ValiderChaine(fa_montantht)+"'" )+",fa_montantttc="+(fa_montantttc=="" ? "null" : "'"+ValiderChaine(fa_montantttc)+"'" )+",fa_annotation="+(fa_annotation=="" ? "null" : "'"+ValiderChaine(fa_annotation)+"'" )+"";
 Req+=" where "+NomCleMaitre+"="+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la mise à jour");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Facture
  TAPEZ ICI LE CODE DE LA REQUETE D'INSERTION
***************************************************/
function User_Insert_Facture_Règlements_10(Compo_Maitre)
{

/*
***** INFOS ******

Nbr d'esclaves = 4

Id dans le tab: 162;
simple
Nbr Jointure: 1;
    Joint n° 0 = reglement,rg_numero,rg_numero

Id dans le tab: 163;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 164;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 165;
simple
Nbr Jointure: PAS DE JOINTURE;

******************
*/

 var Table="facturereglement";
 var CleMaitre = TAB_COMPO_PPTES[156].NewCle;
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 /* COMPOSANT LISTE AVEC JOINTURE SIMPLE */
 var rg_numero=GetValAt(162);
 if (rg_numero=="-1")
    rg_numero="null";
 if (!ValiderChampsObligatoire(Table,"rg_numero",TAB_GLOBAL_COMPO[162],rg_numero,true))
 	return -1;
 var fr_acompte=GetValAt(163);
 if (!ValiderChampsObligatoire(Table,"fr_acompte",TAB_GLOBAL_COMPO[163],fr_acompte,false))
 	return -1;
 if (!ValiderChampsType(Table,"fr_acompte",TAB_GLOBAL_COMPO[163],fr_acompte))
 	return -1;
 var fr_partiel=GetValAt(164);
 if (!ValiderChampsObligatoire(Table,"fr_partiel",TAB_GLOBAL_COMPO[164],fr_partiel,false))
 	return -1;
 if (!ValiderChampsType(Table,"fr_partiel",TAB_GLOBAL_COMPO[164],fr_partiel))
 	return -1;
 var fr_montant=GetValAt(165);
 if (!ValiderChampsObligatoire(Table,"fr_montant",TAB_GLOBAL_COMPO[165],fr_montant,false))
 	return -1;
 if (!ValiderChampsType(Table,"fr_montant",TAB_GLOBAL_COMPO[165],fr_montant))
 	return -1;
 var Req="insert into "+Table+" ";
var TabInsertionEnPlus=new Array();
 Req+="("+NomCleMaitre+",fa_numero,rg_numero,fr_acompte,fr_partiel,fr_montant"+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[0]:"")+")";
 Req+=" values ("+CleMaitre+","+TAB_COMPO_PPTES[135].NewCle+","+rg_numero+","+(fr_acompte=="true" ? "true" : "false")+","+(fr_partiel=="true" ? "true" : "false")+","+(fr_montant=="" ? "null" : "'"+ValiderChaine(fr_montant)+"'" )+""+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[1]:"")+")";

 if (pgsql_update(Req)==0)
	alert("Echec lors de l'insertion");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Facture
  TAPEZ ICI LE CODE DE LA REQUETE DE SUPPRESSION 
***************************************************/
function User_Delete_Facture_Règlements_10(Compo_Maitre)
{
 var Table="facturereglement";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var Req="delete from "+Table+" where "+NomCleMaitre+" = "+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la supression");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Facture
  TAPEZ ICI LE CODE DE LA REQUETE DE MISE A JOUR 
***************************************************/
function User_Update_Facture_Règlements_10(Compo_Maitre)
{
 var Table="facturereglement";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var rg_numero=GetValAt(162);
 if (rg_numero=="-1")
    rg_numero="null";
 if (!ValiderChampsObligatoire(Table,"rg_numero",TAB_GLOBAL_COMPO[162],rg_numero,true))
 	return -1;
 var fr_acompte=GetValAt(163);
 if (!ValiderChampsObligatoire(Table,"fr_acompte",TAB_GLOBAL_COMPO[163],fr_acompte,false))
 	return -1;
 if (!ValiderChampsType(Table,"fr_acompte",TAB_GLOBAL_COMPO[163],fr_acompte))
 	return -1;
 var fr_partiel=GetValAt(164);
 if (!ValiderChampsObligatoire(Table,"fr_partiel",TAB_GLOBAL_COMPO[164],fr_partiel,false))
 	return -1;
 if (!ValiderChampsType(Table,"fr_partiel",TAB_GLOBAL_COMPO[164],fr_partiel))
 	return -1;
 var fr_montant=GetValAt(165);
 if (!ValiderChampsObligatoire(Table,"fr_montant",TAB_GLOBAL_COMPO[165],fr_montant,false))
 	return -1;
 if (!ValiderChampsType(Table,"fr_montant",TAB_GLOBAL_COMPO[165],fr_montant))
 	return -1;
 var Req="update "+Table+" set ";
 Req+="rg_numero="+rg_numero+",fr_acompte="+(fr_acompte=="true" ? "true" : "false")+",fr_partiel="+(fr_partiel=="true" ? "true" : "false")+",fr_montant="+(fr_montant=="" ? "null" : "'"+ValiderChaine(fr_montant)+"'" )+"";
 Req+=" where "+NomCleMaitre+"="+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la mise à jour");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Facture
  TAPEZ ICI LE CODE DE LA REQUETE D'INSERTION
***************************************************/
function User_Insert_Facture_Routages_15(Compo_Maitre)
{

/*
***** INFOS ******

Nbr d'esclaves = 4

Id dans le tab: 171;
simple
Nbr Jointure: 1;
    Joint n° 0 = personne,pe_numero,pe_numero

Id dans le tab: 172;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 173;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 174;
simple
Nbr Jointure: PAS DE JOINTURE;

******************
*/

 var Table="routage";
 var CleMaitre = TAB_COMPO_PPTES[166].NewCle;
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 /* COMPOSANT LISTE AVEC JOINTURE SIMPLE */
 var pe_numero=GetValAt(171);
 if (pe_numero=="-1")
    pe_numero="null";
 if (!ValiderChampsObligatoire(Table,"pe_numero",TAB_GLOBAL_COMPO[171],pe_numero,true))
 	return -1;
 var ro_debutservice=GetValAt(172);
 if (!ValiderChampsObligatoire(Table,"ro_debutservice",TAB_GLOBAL_COMPO[172],ro_debutservice,false))
 	return -1;
 if (!ValiderChampsType(Table,"ro_debutservice",TAB_GLOBAL_COMPO[172],ro_debutservice))
 	return -1;
 var ro_finservice=GetValAt(173);
 if (!ValiderChampsObligatoire(Table,"ro_finservice",TAB_GLOBAL_COMPO[173],ro_finservice,false))
 	return -1;
 if (!ValiderChampsType(Table,"ro_finservice",TAB_GLOBAL_COMPO[173],ro_finservice))
 	return -1;
 var ro_quantite=GetValAt(174);
 if (!ValiderChampsObligatoire(Table,"ro_quantite",TAB_GLOBAL_COMPO[174],ro_quantite,false))
 	return -1;
 if (!ValiderChampsType(Table,"ro_quantite",TAB_GLOBAL_COMPO[174],ro_quantite))
 	return -1;
 var Req="insert into "+Table+" ";
var TabInsertionEnPlus=new Array();
 Req+="("+NomCleMaitre+",fa_numero,pe_numero,ro_debutservice,ro_finservice,ro_quantite"+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[0]:"")+")";
 Req+=" values ("+CleMaitre+","+TAB_COMPO_PPTES[135].NewCle+","+pe_numero+","+(ro_debutservice=="" ? "null" : "'"+ValiderChaine(ro_debutservice)+"'" )+","+(ro_finservice=="" ? "null" : "'"+ValiderChaine(ro_finservice)+"'" )+","+(ro_quantite=="" ? "null" : "'"+ValiderChaine(ro_quantite)+"'" )+""+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[1]:"")+")";

 if (pgsql_update(Req)==0)
	alert("Echec lors de l'insertion");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Facture
  TAPEZ ICI LE CODE DE LA REQUETE DE SUPPRESSION 
***************************************************/
function User_Delete_Facture_Routages_15(Compo_Maitre)
{
 var Table="routage";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var Req="delete from "+Table+" where "+NomCleMaitre+" = "+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la supression");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Facture
  TAPEZ ICI LE CODE DE LA REQUETE DE MISE A JOUR 
***************************************************/
function User_Update_Facture_Routages_15(Compo_Maitre)
{
 var Table="routage";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var pe_numero=GetValAt(171);
 if (pe_numero=="-1")
    pe_numero="null";
 if (!ValiderChampsObligatoire(Table,"pe_numero",TAB_GLOBAL_COMPO[171],pe_numero,true))
 	return -1;
 var ro_debutservice=GetValAt(172);
 if (!ValiderChampsObligatoire(Table,"ro_debutservice",TAB_GLOBAL_COMPO[172],ro_debutservice,false))
 	return -1;
 if (!ValiderChampsType(Table,"ro_debutservice",TAB_GLOBAL_COMPO[172],ro_debutservice))
 	return -1;
 var ro_finservice=GetValAt(173);
 if (!ValiderChampsObligatoire(Table,"ro_finservice",TAB_GLOBAL_COMPO[173],ro_finservice,false))
 	return -1;
 if (!ValiderChampsType(Table,"ro_finservice",TAB_GLOBAL_COMPO[173],ro_finservice))
 	return -1;
 var ro_quantite=GetValAt(174);
 if (!ValiderChampsObligatoire(Table,"ro_quantite",TAB_GLOBAL_COMPO[174],ro_quantite,false))
 	return -1;
 if (!ValiderChampsType(Table,"ro_quantite",TAB_GLOBAL_COMPO[174],ro_quantite))
 	return -1;
 var Req="update "+Table+" set ";
 Req+="pe_numero="+pe_numero+",ro_debutservice="+(ro_debutservice=="" ? "null" : "'"+ValiderChaine(ro_debutservice)+"'" )+",ro_finservice="+(ro_finservice=="" ? "null" : "'"+ValiderChaine(ro_finservice)+"'" )+",ro_quantite="+(ro_quantite=="" ? "null" : "'"+ValiderChaine(ro_quantite)+"'" )+"";
 Req+=" where "+NomCleMaitre+"="+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la mise à jour");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Avoir
  TAPEZ ICI LE CODE DE LA REQUETE D'INSERTION
***************************************************/
function User_Insert_Avoir_Liste_des_avoirs0(Compo_Maitre)
{

/*
***** INFOS ******

Nbr d'esclaves = 5

Id dans le tab: 179;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 180;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 181;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 182;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 183;
complexe
Nbr Jointure: 1;
    Joint n° 0 = ligneavoir,av_numero,av_numero

******************
*/

 var Table="avoir";
 var CleMaitre = TAB_COMPO_PPTES[175].NewCle;
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var av_numfact=GetValAt(179);
 if (!ValiderChampsObligatoire(Table,"av_numfact",TAB_GLOBAL_COMPO[179],av_numfact,false))
 	return -1;
 if (!ValiderChampsType(Table,"av_numfact",TAB_GLOBAL_COMPO[179],av_numfact))
 	return -1;
 var av_date=GetValAt(180);
 if (!ValiderChampsObligatoire(Table,"av_date",TAB_GLOBAL_COMPO[180],av_date,false))
 	return -1;
 if (!ValiderChampsType(Table,"av_date",TAB_GLOBAL_COMPO[180],av_date))
 	return -1;
 var av_montantttc=GetValAt(181);
 if (!ValiderChampsObligatoire(Table,"av_montantttc",TAB_GLOBAL_COMPO[181],av_montantttc,false))
 	return -1;
 if (!ValiderChampsType(Table,"av_montantttc",TAB_GLOBAL_COMPO[181],av_montantttc))
 	return -1;
 var av_montantht=GetValAt(182);
 if (!ValiderChampsObligatoire(Table,"av_montantht",TAB_GLOBAL_COMPO[182],av_montantht,false))
 	return -1;
 if (!ValiderChampsType(Table,"av_montantht",TAB_GLOBAL_COMPO[182],av_montantht))
 	return -1;
 var Req="insert into "+Table+" ";
var TabInsertionEnPlus=new Array();
 Req+="("+NomCleMaitre+",av_numfact,av_date,av_montantttc,av_montantht"+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[0]:"")+")";
 Req+=" values ("+CleMaitre+","+(av_numfact=="" ? "null" : "'"+ValiderChaine(av_numfact)+"'" )+","+(av_date=="" ? "null" : "'"+ValiderChaine(av_date)+"'" )+","+(av_montantttc=="" ? "null" : "'"+ValiderChaine(av_montantttc)+"'" )+","+(av_montantht=="" ? "null" : "'"+ValiderChaine(av_montantht)+"'" )+""+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[1]:"")+")";

 if (pgsql_update(Req)==0)
	alert("Echec lors de l'insertion");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Avoir
  TAPEZ ICI LE CODE DE LA REQUETE DE SUPPRESSION 
***************************************************/
function User_Delete_Avoir_Liste_des_avoirs0(Compo_Maitre)
{
 var Table="avoir";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var Req="delete from "+Table+" where "+NomCleMaitre+" = "+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la supression");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Avoir
  TAPEZ ICI LE CODE DE LA REQUETE DE MISE A JOUR 
***************************************************/
function User_Update_Avoir_Liste_des_avoirs0(Compo_Maitre)
{
 var Table="avoir";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var av_numfact=GetValAt(179);
 if (!ValiderChampsObligatoire(Table,"av_numfact",TAB_GLOBAL_COMPO[179],av_numfact,false))
 	return -1;
 if (!ValiderChampsType(Table,"av_numfact",TAB_GLOBAL_COMPO[179],av_numfact))
 	return -1;
 var av_date=GetValAt(180);
 if (!ValiderChampsObligatoire(Table,"av_date",TAB_GLOBAL_COMPO[180],av_date,false))
 	return -1;
 if (!ValiderChampsType(Table,"av_date",TAB_GLOBAL_COMPO[180],av_date))
 	return -1;
 var av_montantttc=GetValAt(181);
 if (!ValiderChampsObligatoire(Table,"av_montantttc",TAB_GLOBAL_COMPO[181],av_montantttc,false))
 	return -1;
 if (!ValiderChampsType(Table,"av_montantttc",TAB_GLOBAL_COMPO[181],av_montantttc))
 	return -1;
 var av_montantht=GetValAt(182);
 if (!ValiderChampsObligatoire(Table,"av_montantht",TAB_GLOBAL_COMPO[182],av_montantht,false))
 	return -1;
 if (!ValiderChampsType(Table,"av_montantht",TAB_GLOBAL_COMPO[182],av_montantht))
 	return -1;
 var Req="update "+Table+" set ";
 Req+="av_numfact="+(av_numfact=="" ? "null" : "'"+ValiderChaine(av_numfact)+"'" )+",av_date="+(av_date=="" ? "null" : "'"+ValiderChaine(av_date)+"'" )+",av_montantttc="+(av_montantttc=="" ? "null" : "'"+ValiderChaine(av_montantttc)+"'" )+",av_montantht="+(av_montantht=="" ? "null" : "'"+ValiderChaine(av_montantht)+"'" )+"";
 Req+=" where "+NomCleMaitre+"="+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la mise à jour");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Réglement
  TAPEZ ICI LE CODE DE LA REQUETE D'INSERTION
***************************************************/
function User_Insert_Réglement_Liste_des_réglements0(Compo_Maitre)
{

/*
***** INFOS ******

Nbr d'esclaves = 8

Id dans le tab: 194;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 195;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 196;
simple
Nbr Jointure: 1;
    Joint n° 0 = modereglement,mr_numero,mr_numero

Id dans le tab: 197;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 198;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 199;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 200;
complexe
Nbr Jointure: 1;
    Joint n° 0 = facturereglement,rg_numero,rg_numero

Id dans le tab: 209;
complexe
Nbr Jointure: 1;
    Joint n° 0 = repartition,rg_numero,rg_numero

******************
*/

 var Table="reglement";
 var CleMaitre = TAB_COMPO_PPTES[188].NewCle;
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var rg_date=GetValAt(194);
 if (!ValiderChampsObligatoire(Table,"rg_date",TAB_GLOBAL_COMPO[194],rg_date,false))
 	return -1;
 if (!ValiderChampsType(Table,"rg_date",TAB_GLOBAL_COMPO[194],rg_date))
 	return -1;
 var rg_montant=GetValAt(195);
 if (!ValiderChampsObligatoire(Table,"rg_montant",TAB_GLOBAL_COMPO[195],rg_montant,false))
 	return -1;
 if (!ValiderChampsType(Table,"rg_montant",TAB_GLOBAL_COMPO[195],rg_montant))
 	return -1;
 var mr_numero=GetValAt(196);
 if (mr_numero=="-1")
    mr_numero="null";
 if (!ValiderChampsObligatoire(Table,"mr_numero",TAB_GLOBAL_COMPO[196],mr_numero,true))
 	return -1;
 var rg_libellebanque=GetValAt(197);
 if (!ValiderChampsObligatoire(Table,"rg_libellebanque",TAB_GLOBAL_COMPO[197],rg_libellebanque,false))
 	return -1;
 if (!ValiderChampsType(Table,"rg_libellebanque",TAB_GLOBAL_COMPO[197],rg_libellebanque))
 	return -1;
 var rg_numerocompte=GetValAt(198);
 if (!ValiderChampsObligatoire(Table,"rg_numerocompte",TAB_GLOBAL_COMPO[198],rg_numerocompte,false))
 	return -1;
 if (!ValiderChampsType(Table,"rg_numerocompte",TAB_GLOBAL_COMPO[198],rg_numerocompte))
 	return -1;
 var rg_reference=GetValAt(199);
 if (!ValiderChampsObligatoire(Table,"rg_reference",TAB_GLOBAL_COMPO[199],rg_reference,false))
 	return -1;
 if (!ValiderChampsType(Table,"rg_reference",TAB_GLOBAL_COMPO[199],rg_reference))
 	return -1;
 var Req="insert into "+Table+" ";
var TabInsertionEnPlus=new Array();
var Asso11=false;
var TabAsso11=new Array();
var CompoLie = GetSQLCompoAt(94);
var CompoLieMaitre = CompoLie.my_Affichable.my_MaitresLiaison.getAttribut().GetComposant();
var CleLiasonForte = CompoLieMaitre.getCleVal();
if (CleLiasonForte!=-1)
{
	Asso11=GenererAssociation11(CompoLie,CleMaitre,CleLiasonForte,TabAsso11);
}
else
{
	alert("Vous devez d'abord valider "+CompoLieMaitre.getLabel()+" puis mettre à jour.");
	return -1;
}
 Req+="("+NomCleMaitre+",rg_date,rg_montant,mr_numero,rg_libellebanque,rg_numerocompte,rg_reference"+(Asso11?","+TabAsso11[0]:"")+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[0]:"")+")";
 Req+=" values ("+CleMaitre+","+(rg_date=="" ? "null" : "'"+ValiderChaine(rg_date)+"'" )+","+(rg_montant=="" ? "null" : "'"+ValiderChaine(rg_montant)+"'" )+","+mr_numero+","+(rg_libellebanque=="" ? "null" : "'"+ValiderChaine(rg_libellebanque)+"'" )+","+(rg_numerocompte=="" ? "null" : "'"+ValiderChaine(rg_numerocompte)+"'" )+","+(rg_reference=="" ? "null" : "'"+ValiderChaine(rg_reference)+"'" )+""+(Asso11?","+TabAsso11[1]:"")+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[1]:"")+")";

 if (pgsql_update(Req)==0)
	alert("Echec lors de l'insertion");
if (CleLiasonForte!=-1 && !Asso11)
{
	AjouterAssociation(CompoLie,CleMaitre,CleLiasonForte);
}
else
{
	if (CleLiasonForte==-1)
	{
		alert("Attention votre enregistrement ne peux être relié à "+CompoLieMaitre.getLabel()+". Vous devez d'abord ajouter un enregistrement à "+CompoLieMaitre.getLabel()+" puis le mettre à jour");
		return -1;
	}
}
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Réglement
  TAPEZ ICI LE CODE DE LA REQUETE DE SUPPRESSION 
***************************************************/
function User_Delete_Réglement_Liste_des_réglements0(Compo_Maitre)
{
 var Table="reglement";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var Req="delete from "+Table+" where "+NomCleMaitre+" = "+CleMaitre;

var CompoLie = GetSQLCompoAt(94);
var CompoLieMaitre = CompoLie.my_Affichable.my_MaitresLiaison.getAttribut().GetComposant();
var CleLiasonForte = CompoLieMaitre.getCleVal();
if (CleLiasonForte!=-1)
{
	SuprimerAssociation(CompoLie,CleMaitre,CleLiasonForte);
}
else
{
	alert("Erreur "+CompoLieMaitre.getLabel()+" correspondant(e) Introuvable");
	return CleMaitre;
}
 if (pgsql_update(Req)==0)
	alert("Echec lors de la supression");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Réglement
  TAPEZ ICI LE CODE DE LA REQUETE DE MISE A JOUR 
***************************************************/
function User_Update_Réglement_Liste_des_réglements0(Compo_Maitre)
{
 var Table="reglement";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var rg_date=GetValAt(194);
 if (!ValiderChampsObligatoire(Table,"rg_date",TAB_GLOBAL_COMPO[194],rg_date,false))
 	return -1;
 if (!ValiderChampsType(Table,"rg_date",TAB_GLOBAL_COMPO[194],rg_date))
 	return -1;
 var rg_montant=GetValAt(195);
 if (!ValiderChampsObligatoire(Table,"rg_montant",TAB_GLOBAL_COMPO[195],rg_montant,false))
 	return -1;
 if (!ValiderChampsType(Table,"rg_montant",TAB_GLOBAL_COMPO[195],rg_montant))
 	return -1;
 var mr_numero=GetValAt(196);
 if (mr_numero=="-1")
    mr_numero="null";
 if (!ValiderChampsObligatoire(Table,"mr_numero",TAB_GLOBAL_COMPO[196],mr_numero,true))
 	return -1;
 var rg_libellebanque=GetValAt(197);
 if (!ValiderChampsObligatoire(Table,"rg_libellebanque",TAB_GLOBAL_COMPO[197],rg_libellebanque,false))
 	return -1;
 if (!ValiderChampsType(Table,"rg_libellebanque",TAB_GLOBAL_COMPO[197],rg_libellebanque))
 	return -1;
 var rg_numerocompte=GetValAt(198);
 if (!ValiderChampsObligatoire(Table,"rg_numerocompte",TAB_GLOBAL_COMPO[198],rg_numerocompte,false))
 	return -1;
 if (!ValiderChampsType(Table,"rg_numerocompte",TAB_GLOBAL_COMPO[198],rg_numerocompte))
 	return -1;
 var rg_reference=GetValAt(199);
 if (!ValiderChampsObligatoire(Table,"rg_reference",TAB_GLOBAL_COMPO[199],rg_reference,false))
 	return -1;
 if (!ValiderChampsType(Table,"rg_reference",TAB_GLOBAL_COMPO[199],rg_reference))
 	return -1;
 var Req="update "+Table+" set ";
 Req+="rg_date="+(rg_date=="" ? "null" : "'"+ValiderChaine(rg_date)+"'" )+",rg_montant="+(rg_montant=="" ? "null" : "'"+ValiderChaine(rg_montant)+"'" )+",mr_numero="+mr_numero+",rg_libellebanque="+(rg_libellebanque=="" ? "null" : "'"+ValiderChaine(rg_libellebanque)+"'" )+",rg_numerocompte="+(rg_numerocompte=="" ? "null" : "'"+ValiderChaine(rg_numerocompte)+"'" )+",rg_reference="+(rg_reference=="" ? "null" : "'"+ValiderChaine(rg_reference)+"'" )+"";
 Req+=" where "+NomCleMaitre+"="+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la mise à jour");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Réglement
  TAPEZ ICI LE CODE DE LA REQUETE D'INSERTION
***************************************************/
function User_Insert_Réglement_Factures_concernées_7(Compo_Maitre)
{

/*
***** INFOS ******

Nbr d'esclaves = 4

Id dans le tab: 205;
simple
Nbr Jointure: 1;
    Joint n° 0 = facture,fa_numero,fa_numero

Id dans le tab: 206;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 207;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 208;
simple
Nbr Jointure: PAS DE JOINTURE;

******************
*/

 var Table="facturereglement";
 var CleMaitre = TAB_COMPO_PPTES[200].NewCle;
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 /* COMPOSANT LISTE AVEC JOINTURE SIMPLE */
 var fa_numero=GetValAt(205);
 if (fa_numero=="-1")
    fa_numero="null";
 if (!ValiderChampsObligatoire(Table,"fa_numero",TAB_GLOBAL_COMPO[205],fa_numero,true))
 	return -1;
 var fr_acompte=GetValAt(206);
 if (!ValiderChampsObligatoire(Table,"fr_acompte",TAB_GLOBAL_COMPO[206],fr_acompte,false))
 	return -1;
 if (!ValiderChampsType(Table,"fr_acompte",TAB_GLOBAL_COMPO[206],fr_acompte))
 	return -1;
 var fr_partiel=GetValAt(207);
 if (!ValiderChampsObligatoire(Table,"fr_partiel",TAB_GLOBAL_COMPO[207],fr_partiel,false))
 	return -1;
 if (!ValiderChampsType(Table,"fr_partiel",TAB_GLOBAL_COMPO[207],fr_partiel))
 	return -1;
 var fr_montant=GetValAt(208);
 if (!ValiderChampsObligatoire(Table,"fr_montant",TAB_GLOBAL_COMPO[208],fr_montant,false))
 	return -1;
 if (!ValiderChampsType(Table,"fr_montant",TAB_GLOBAL_COMPO[208],fr_montant))
 	return -1;
 var Req="insert into "+Table+" ";
var TabInsertionEnPlus=new Array();
 Req+="("+NomCleMaitre+",rg_numero,fa_numero,fr_acompte,fr_partiel,fr_montant"+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[0]:"")+")";
 Req+=" values ("+CleMaitre+","+TAB_COMPO_PPTES[188].NewCle+","+fa_numero+","+(fr_acompte=="true" ? "true" : "false")+","+(fr_partiel=="true" ? "true" : "false")+","+(fr_montant=="" ? "null" : "'"+ValiderChaine(fr_montant)+"'" )+""+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[1]:"")+")";

 if (pgsql_update(Req)==0)
	alert("Echec lors de l'insertion");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Réglement
  TAPEZ ICI LE CODE DE LA REQUETE DE SUPPRESSION 
***************************************************/
function User_Delete_Réglement_Factures_concernées_7(Compo_Maitre)
{
 var Table="facturereglement";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var Req="delete from "+Table+" where "+NomCleMaitre+" = "+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la supression");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Réglement
  TAPEZ ICI LE CODE DE LA REQUETE DE MISE A JOUR 
***************************************************/
function User_Update_Réglement_Factures_concernées_7(Compo_Maitre)
{
 var Table="facturereglement";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var fa_numero=GetValAt(205);
 if (fa_numero=="-1")
    fa_numero="null";
 if (!ValiderChampsObligatoire(Table,"fa_numero",TAB_GLOBAL_COMPO[205],fa_numero,true))
 	return -1;
 var fr_acompte=GetValAt(206);
 if (!ValiderChampsObligatoire(Table,"fr_acompte",TAB_GLOBAL_COMPO[206],fr_acompte,false))
 	return -1;
 if (!ValiderChampsType(Table,"fr_acompte",TAB_GLOBAL_COMPO[206],fr_acompte))
 	return -1;
 var fr_partiel=GetValAt(207);
 if (!ValiderChampsObligatoire(Table,"fr_partiel",TAB_GLOBAL_COMPO[207],fr_partiel,false))
 	return -1;
 if (!ValiderChampsType(Table,"fr_partiel",TAB_GLOBAL_COMPO[207],fr_partiel))
 	return -1;
 var fr_montant=GetValAt(208);
 if (!ValiderChampsObligatoire(Table,"fr_montant",TAB_GLOBAL_COMPO[208],fr_montant,false))
 	return -1;
 if (!ValiderChampsType(Table,"fr_montant",TAB_GLOBAL_COMPO[208],fr_montant))
 	return -1;
 var Req="update "+Table+" set ";
 Req+="fa_numero="+fa_numero+",fr_acompte="+(fr_acompte=="true" ? "true" : "false")+",fr_partiel="+(fr_partiel=="true" ? "true" : "false")+",fr_montant="+(fr_montant=="" ? "null" : "'"+ValiderChaine(fr_montant)+"'" )+"";
 Req+=" where "+NomCleMaitre+"="+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la mise à jour");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Réglement
  TAPEZ ICI LE CODE DE LA REQUETE D'INSERTION
***************************************************/
function User_Insert_Réglement_Dont_reversements____12(Compo_Maitre)
{

/*
***** INFOS ******

Nbr d'esclaves = 2

Id dans le tab: 212;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 213;
simple
Nbr Jointure: 1;
    Joint n° 0 = moderepartition,mp_numero,mp_numero

******************
*/

 var Table="repartition";
 var CleMaitre = TAB_COMPO_PPTES[209].NewCle;
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 /* COMPOSANT LISTE AVEC JOINTURE SIMPLE */
 var rp_montant=GetValAt(212);
 if (!ValiderChampsObligatoire(Table,"rp_montant",TAB_GLOBAL_COMPO[212],rp_montant,false))
 	return -1;
 if (!ValiderChampsType(Table,"rp_montant",TAB_GLOBAL_COMPO[212],rp_montant))
 	return -1;
 var mp_numero=GetValAt(213);
 if (mp_numero=="-1")
    mp_numero="null";
 if (!ValiderChampsObligatoire(Table,"mp_numero",TAB_GLOBAL_COMPO[213],mp_numero,true))
 	return -1;
 var Req="insert into "+Table+" ";
var TabInsertionEnPlus=new Array();
 Req+="("+NomCleMaitre+",rg_numero,rp_montant,mp_numero"+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[0]:"")+")";
 Req+=" values ("+CleMaitre+","+TAB_COMPO_PPTES[188].NewCle+","+(rp_montant=="" ? "null" : "'"+ValiderChaine(rp_montant)+"'" )+","+mp_numero+""+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[1]:"")+")";

 if (pgsql_update(Req)==0)
	alert("Echec lors de l'insertion");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Réglement
  TAPEZ ICI LE CODE DE LA REQUETE DE SUPPRESSION 
***************************************************/
function User_Delete_Réglement_Dont_reversements____12(Compo_Maitre)
{
 var Table="repartition";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var Req="delete from "+Table+" where "+NomCleMaitre+" = "+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la supression");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Réglement
  TAPEZ ICI LE CODE DE LA REQUETE DE MISE A JOUR 
***************************************************/
function User_Update_Réglement_Dont_reversements____12(Compo_Maitre)
{
 var Table="repartition";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var rp_montant=GetValAt(212);
 if (!ValiderChampsObligatoire(Table,"rp_montant",TAB_GLOBAL_COMPO[212],rp_montant,false))
 	return -1;
 if (!ValiderChampsType(Table,"rp_montant",TAB_GLOBAL_COMPO[212],rp_montant))
 	return -1;
 var mp_numero=GetValAt(213);
 if (mp_numero=="-1")
    mp_numero="null";
 if (!ValiderChampsObligatoire(Table,"mp_numero",TAB_GLOBAL_COMPO[213],mp_numero,true))
 	return -1;
 var Req="update "+Table+" set ";
 Req+="rp_montant="+(rp_montant=="" ? "null" : "'"+ValiderChaine(rp_montant)+"'" )+",mp_numero="+mp_numero+"";
 Req+=" where "+NomCleMaitre+"="+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la mise à jour");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Vérification
  TAPEZ ICI LE CODE DE LA REQUETE D'INSERTION
***************************************************/
function User_Insert_Vérification_Liste_des_modifications_sur_les_personnes0(Compo_Maitre)
{

/*
***** INFOS ******

Nbr d'esclaves = 14

Id dans le tab: 245;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 246;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 247;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 248;
simple
Nbr Jointure: 1;
    Joint n° 0 = personne,pe_numero,pe_numero

Id dans le tab: 249;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 250;
simple
Nbr Jointure: 1;
    Joint n° 0 = personne,pe_numero,pe_numero

Id dans le tab: 251;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 252;
simple
Nbr Jointure: 1;
    Joint n° 0 = personne,pe_numero,pe_numero

Id dans le tab: 253;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 254;
simple
Nbr Jointure: 1;
    Joint n° 0 = personne,pe_numero,pe_numero

Id dans le tab: 255;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 256;
simple
Nbr Jointure: 1;
    Joint n° 0 = personne,pe_numero,pe_numero

Id dans le tab: 257;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 258;
simple
Nbr Jointure: 1;
    Joint n° 0 = personne,pe_numero,pe_numero

******************
*/

 var Table="personneupdate";
 var CleMaitre = TAB_COMPO_PPTES[238].NewCle;
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var pu_action=GetValAt(245);
 if (!ValiderChampsObligatoire(Table,"pu_action",TAB_GLOBAL_COMPO[245],pu_action,false))
 	return -1;
 if (!ValiderChampsType(Table,"pu_action",TAB_GLOBAL_COMPO[245],pu_action))
 	return -1;
 var pu_bilan=GetValAt(246);
 if (!ValiderChampsObligatoire(Table,"pu_bilan",TAB_GLOBAL_COMPO[246],pu_bilan,false))
 	return -1;
 if (!ValiderChampsType(Table,"pu_bilan",TAB_GLOBAL_COMPO[246],pu_bilan))
 	return -1;
 var pe_titre=GetValAt(247);
 if (!ValiderChampsObligatoire(Table,"pe_titre",TAB_GLOBAL_COMPO[247],pe_titre,false))
 	return -1;
 if (!ValiderChampsType(Table,"pe_titre",TAB_GLOBAL_COMPO[247],pe_titre))
 	return -1;
 var pe_numero=GetValAt(248);
 if (pe_numero=="-1")
    pe_numero="null";
 if (!ValiderChampsObligatoire(Table,"pe_numero",TAB_GLOBAL_COMPO[248],pe_numero,true))
 	return -1;
 var pe_nom=GetValAt(249);
 if (!ValiderChampsObligatoire(Table,"pe_nom",TAB_GLOBAL_COMPO[249],pe_nom,false))
 	return -1;
 if (!ValiderChampsType(Table,"pe_nom",TAB_GLOBAL_COMPO[249],pe_nom))
 	return -1;
 var pe_numero=GetValAt(250);
 if (pe_numero=="-1")
    pe_numero="null";
 if (!ValiderChampsObligatoire(Table,"pe_numero",TAB_GLOBAL_COMPO[250],pe_numero,true))
 	return -1;
 var pe_prenom=GetValAt(251);
 if (!ValiderChampsObligatoire(Table,"pe_prenom",TAB_GLOBAL_COMPO[251],pe_prenom,false))
 	return -1;
 if (!ValiderChampsType(Table,"pe_prenom",TAB_GLOBAL_COMPO[251],pe_prenom))
 	return -1;
 var pe_numero=GetValAt(252);
 if (pe_numero=="-1")
    pe_numero="null";
 if (!ValiderChampsObligatoire(Table,"pe_numero",TAB_GLOBAL_COMPO[252],pe_numero,true))
 	return -1;
 var pe_regimefiscal=GetValAt(253);
 if (!ValiderChampsObligatoire(Table,"pe_regimefiscal",TAB_GLOBAL_COMPO[253],pe_regimefiscal,false))
 	return -1;
 if (!ValiderChampsType(Table,"pe_regimefiscal",TAB_GLOBAL_COMPO[253],pe_regimefiscal))
 	return -1;
 var pe_numero=GetValAt(254);
 if (pe_numero=="-1")
    pe_numero="null";
 if (!ValiderChampsObligatoire(Table,"pe_numero",TAB_GLOBAL_COMPO[254],pe_numero,true))
 	return -1;
 var pe_naissance=GetValAt(255);
 if (!ValiderChampsObligatoire(Table,"pe_naissance",TAB_GLOBAL_COMPO[255],pe_naissance,false))
 	return -1;
 if (!ValiderChampsType(Table,"pe_naissance",TAB_GLOBAL_COMPO[255],pe_naissance))
 	return -1;
 var pe_numero=GetValAt(256);
 if (pe_numero=="-1")
    pe_numero="null";
 if (!ValiderChampsObligatoire(Table,"pe_numero",TAB_GLOBAL_COMPO[256],pe_numero,true))
 	return -1;
 var pe_morale=GetValAt(257);
 if (!ValiderChampsObligatoire(Table,"pe_morale",TAB_GLOBAL_COMPO[257],pe_morale,false))
 	return -1;
 if (!ValiderChampsType(Table,"pe_morale",TAB_GLOBAL_COMPO[257],pe_morale))
 	return -1;
 var pe_numero=GetValAt(258);
 if (pe_numero=="-1")
    pe_numero="null";
 if (!ValiderChampsObligatoire(Table,"pe_numero",TAB_GLOBAL_COMPO[258],pe_numero,true))
 	return -1;
 var Req="insert into "+Table+" ";
var TabInsertionEnPlus=new Array();
 Req+="("+NomCleMaitre+",pu_action,pu_bilan,pe_titre,pe_numero,pe_nom,pe_numero,pe_prenom,pe_numero,pe_regimefiscal,pe_numero,pe_naissance,pe_numero,pe_morale,pe_numero"+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[0]:"")+")";
 Req+=" values ("+CleMaitre+","+(pu_action=="" ? "null" : "'"+ValiderChaine(pu_action)+"'" )+","+(pu_bilan=="" ? "null" : "'"+ValiderChaine(pu_bilan)+"'" )+","+(pe_titre=="" ? "null" : "'"+ValiderChaine(pe_titre)+"'" )+","+pe_numero+","+(pe_nom=="" ? "null" : "'"+ValiderChaine(pe_nom)+"'" )+","+pe_numero+","+(pe_prenom=="" ? "null" : "'"+ValiderChaine(pe_prenom)+"'" )+","+pe_numero+","+(pe_regimefiscal=="" ? "null" : "'"+ValiderChaine(pe_regimefiscal)+"'" )+","+pe_numero+","+(pe_naissance=="" ? "null" : "'"+ValiderChaine(pe_naissance)+"'" )+","+pe_numero+","+(pe_morale=="true" ? "true" : "false")+","+pe_numero+""+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[1]:"")+")";

 if (pgsql_update(Req)==0)
	alert("Echec lors de l'insertion");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Vérification
  TAPEZ ICI LE CODE DE LA REQUETE DE SUPPRESSION 
***************************************************/
function User_Delete_Vérification_Liste_des_modifications_sur_les_personnes0(Compo_Maitre)
{
 var Table="personneupdate";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var Req="delete from "+Table+" where "+NomCleMaitre+" = "+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la supression");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Vérification
  TAPEZ ICI LE CODE DE LA REQUETE DE MISE A JOUR 
***************************************************/
function User_Update_Vérification_Liste_des_modifications_sur_les_personnes0(Compo_Maitre)
{
 var Table="personneupdate";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var pu_action=GetValAt(245);
 if (!ValiderChampsObligatoire(Table,"pu_action",TAB_GLOBAL_COMPO[245],pu_action,false))
 	return -1;
 if (!ValiderChampsType(Table,"pu_action",TAB_GLOBAL_COMPO[245],pu_action))
 	return -1;
 var pu_bilan=GetValAt(246);
 if (!ValiderChampsObligatoire(Table,"pu_bilan",TAB_GLOBAL_COMPO[246],pu_bilan,false))
 	return -1;
 if (!ValiderChampsType(Table,"pu_bilan",TAB_GLOBAL_COMPO[246],pu_bilan))
 	return -1;
 var pe_titre=GetValAt(247);
 if (!ValiderChampsObligatoire(Table,"pe_titre",TAB_GLOBAL_COMPO[247],pe_titre,false))
 	return -1;
 if (!ValiderChampsType(Table,"pe_titre",TAB_GLOBAL_COMPO[247],pe_titre))
 	return -1;
 var pe_numero=GetValAt(248);
 if (pe_numero=="-1")
    pe_numero="null";
 if (!ValiderChampsObligatoire(Table,"pe_numero",TAB_GLOBAL_COMPO[248],pe_numero,true))
 	return -1;
 var pe_nom=GetValAt(249);
 if (!ValiderChampsObligatoire(Table,"pe_nom",TAB_GLOBAL_COMPO[249],pe_nom,false))
 	return -1;
 if (!ValiderChampsType(Table,"pe_nom",TAB_GLOBAL_COMPO[249],pe_nom))
 	return -1;
 var pe_numero=GetValAt(250);
 if (pe_numero=="-1")
    pe_numero="null";
 if (!ValiderChampsObligatoire(Table,"pe_numero",TAB_GLOBAL_COMPO[250],pe_numero,true))
 	return -1;
 var pe_prenom=GetValAt(251);
 if (!ValiderChampsObligatoire(Table,"pe_prenom",TAB_GLOBAL_COMPO[251],pe_prenom,false))
 	return -1;
 if (!ValiderChampsType(Table,"pe_prenom",TAB_GLOBAL_COMPO[251],pe_prenom))
 	return -1;
 var pe_numero=GetValAt(252);
 if (pe_numero=="-1")
    pe_numero="null";
 if (!ValiderChampsObligatoire(Table,"pe_numero",TAB_GLOBAL_COMPO[252],pe_numero,true))
 	return -1;
 var pe_regimefiscal=GetValAt(253);
 if (!ValiderChampsObligatoire(Table,"pe_regimefiscal",TAB_GLOBAL_COMPO[253],pe_regimefiscal,false))
 	return -1;
 if (!ValiderChampsType(Table,"pe_regimefiscal",TAB_GLOBAL_COMPO[253],pe_regimefiscal))
 	return -1;
 var pe_numero=GetValAt(254);
 if (pe_numero=="-1")
    pe_numero="null";
 if (!ValiderChampsObligatoire(Table,"pe_numero",TAB_GLOBAL_COMPO[254],pe_numero,true))
 	return -1;
 var pe_naissance=GetValAt(255);
 if (!ValiderChampsObligatoire(Table,"pe_naissance",TAB_GLOBAL_COMPO[255],pe_naissance,false))
 	return -1;
 if (!ValiderChampsType(Table,"pe_naissance",TAB_GLOBAL_COMPO[255],pe_naissance))
 	return -1;
 var pe_numero=GetValAt(256);
 if (pe_numero=="-1")
    pe_numero="null";
 if (!ValiderChampsObligatoire(Table,"pe_numero",TAB_GLOBAL_COMPO[256],pe_numero,true))
 	return -1;
 var pe_morale=GetValAt(257);
 if (!ValiderChampsObligatoire(Table,"pe_morale",TAB_GLOBAL_COMPO[257],pe_morale,false))
 	return -1;
 if (!ValiderChampsType(Table,"pe_morale",TAB_GLOBAL_COMPO[257],pe_morale))
 	return -1;
 var pe_numero=GetValAt(258);
 if (pe_numero=="-1")
    pe_numero="null";
 if (!ValiderChampsObligatoire(Table,"pe_numero",TAB_GLOBAL_COMPO[258],pe_numero,true))
 	return -1;
 var Req="update "+Table+" set ";
 Req+="pu_action="+(pu_action=="" ? "null" : "'"+ValiderChaine(pu_action)+"'" )+",pu_bilan="+(pu_bilan=="" ? "null" : "'"+ValiderChaine(pu_bilan)+"'" )+",pe_titre="+(pe_titre=="" ? "null" : "'"+ValiderChaine(pe_titre)+"'" )+",pe_numero="+pe_numero+",pe_nom="+(pe_nom=="" ? "null" : "'"+ValiderChaine(pe_nom)+"'" )+",pe_numero="+pe_numero+",pe_prenom="+(pe_prenom=="" ? "null" : "'"+ValiderChaine(pe_prenom)+"'" )+",pe_numero="+pe_numero+",pe_regimefiscal="+(pe_regimefiscal=="" ? "null" : "'"+ValiderChaine(pe_regimefiscal)+"'" )+",pe_numero="+pe_numero+",pe_naissance="+(pe_naissance=="" ? "null" : "'"+ValiderChaine(pe_naissance)+"'" )+",pe_numero="+pe_numero+",pe_morale="+(pe_morale=="true" ? "true" : "false")+",pe_numero="+pe_numero+"";
 Req+=" where "+NomCleMaitre+"="+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la mise à jour");
return CleMaitre;

}

function LstDouble_Exec_Req(CompoSqlListeDessous,CleMaitre_val)
{
    /* cas ou on a 1 seule table de liaison */
    var TabJointure=CompoSqlListeDessous.my_Affichable.my_MaitresLiaison.getJointure().TabJointure;
    if(TabJointure.length!=2)
	{
	    alert("Erreur de programmation:\nLes listes doubles doivent contenir une et une seule table de liaison");
	    throw "Les listes doubles doivent contenir une et une seule table de liaison";
	}

    var CleRel=TabJointure[1].CleDebut;
    var TableRel=TabJointure[0].TableFin;
    var CleMaitre_nom=TabJointure[0].CleFin;
    var ReqRel="select "+CleRel+" from "+TableRel+" where "+CleMaitre_nom+"="+CleMaitre_val;
    var result=pgsql_query(ReqRel);
    var enumerator=result.enumerate();
    var TabCle=CompoSqlListeDessous.getAllCleVal();

    if (result.rowCount==0)
	{
	    /* cas ou la liste était vide */
	    var i;
	    for(i=0;i<TabCle.length;i++)
		{
		    var ReqInsert="insert into "+TableRel+" ("+CleMaitre_nom+","+CleRel+") values("+CleMaitre_val+","+TabCle[i]+")";
		    if (pgsql_update(ReqInsert)==0)
			{
			    alert("Echec lors de l'insertion");
			    return;
			}
		}
	}
    else
	{

	    /* ON PARCOURS LE TABLEAU EXISTANT */
	    enumerator.beforeFirst();
	    var encore= true;
	    while(encore)
		{
		    encore = enumerator.next();
		    /* on cherche ce qu'on supprime */
		    var i=0;
		    var trouve=false;
		    while(i<TabCle.length && !trouve)
			{
			    if (TabCle[i]==enumerator.getVariant(0))
				{
				    trouve=true;
				}
			    i++;
			}
		    /* si il n'est pas dans le nouveau tableau on l'efface */
		    if (!trouve)
			{
			    var ReqDel="delete from "+TableRel+" where "+CleMaitre_nom+"="+CleMaitre_val+" and "+CleRel+"="+enumerator.getVariant(0);
			    if (pgsql_update(ReqDel)==0)
				{
				    alert("Echec lors de l'insertion");
				    return;
				}
			}
		}


	    /* ON PARCOURS LE DEUXIEME TABLEAU */
	    var i;
	    for(i=0;i<TabCle.length;i++)
		{
		    /* on cherche ce qu'on insert */
		    enumerator.beforeFirst();
		    var encore= true;
		    var trouve=false;
		    while(encore && !trouve)
			{
			    encore = enumerator.next();
			    if(TabCle[i]==enumerator.getVariant(0))
				trouve=true;
			}
		    /* si on ne l'a pas trouver on l'insert */
		    if (!trouve)
			{
			    var ReqIns="insert into "+TableRel+" ("+CleMaitre_nom+","+CleRel+") values("+CleMaitre_val+","+TabCle[i]+")";
			    if (pgsql_update(ReqIns)==0)
				{
				    alert("Echec lors de l'insertion");
				    return;
				}
			}
		}
	}
}
	function GenererAssociation11(ComposantFinal,CleCompoFinal,CleMaitre,TabOut)
{
	/* on regarde dans quel cas on se trouve (clé étrangère: 1 liaison ou asso: 2 liaisons) */
	var TabJointure=ComposantFinal.my_Affichable.my_MaitresLiaison.getJointure().TabJointure;
    if(TabJointure.length>2)
	{
	    alert("Erreur de programmation:\nTrop de liaisons (>2)");
	    throw "Erreur de programmation:\nTrop de liaisons (>2)";
	}
	/* cas de jointure simple */
	if (TabJointure.length==1)
	{
		/* l'enregistrement doit exister */
		var CleEtrangere;
		var TableFinale=ComposantFinal.getTable();
		/* on regarde le sens de la jointure */
		if (TabJointure[0].TableFin==TableFinale)
			CleEtrangere=TabJointure[0].CleFin;
		else
			CleEtrangere=TabJointure[0].CleDebut;

		if (mcd_obligatoire(TableFinale,CleEtrangere))
		{
			TabOut.push(CleEtrangere);
			TabOut.push(CleMaitre);
			return true
		}
	}
	return false;
}
function AjouterAssociation(ComposantFinal,CleCompoFinal,CleMaitre)
{
	/* on regarde dans quel cas on se trouve (clé étrangère: 1 liaison ou asso: 2 liaisons) */
	var TabJointure=ComposantFinal.my_Affichable.my_MaitresLiaison.getJointure().TabJointure;
    if(TabJointure.length>2)
	{
	    alert("Erreur de programmation:\nTrop de liaisons (>2)");
	    throw "Erreur de programmation:\nTrop de liaisons (>2)";
	}
	/* cas de jointure simple */
	if (TabJointure.length==1)
	{
		/* l'enregistrement doit exister */
		var CleEtrangere;
		var TableFinale=ComposantFinal.getTable();
		/* on regarde le sens de la jointure */
		if (TabJointure[0].TableFin==TableFinale)
			CleEtrangere=TabJointure[0].CleFin;
		else
			CleEtrangere=TabJointure[0].CleDebut;
		var req="update "+TableFinale+" set "+CleEtrangere+" = "+CleMaitre+" where "+ComposantFinal.getCle()+" = "+CleCompoFinal;
		if (pgsql_update(req)==0)
		{
			alert("Echec lors de la mise à jour");
			return false;
		}
	}
	else
	{
		/* cas de jointure double */
		var TableFinale=ComposantFinal.getTable();
		var CleAsso_TableFinal;
		var CleAsso_TableMaitre;
		var TableAsso=TabJointure[0].TableFin;
		/* on regarde le sens de la jointure */
		if (TabJointure[1].TableFin==TableFinale)
		{
			CleAsso_TableMaitre=TabJointure[0].CleFin;
			CleAsso_TableFinal=TabJointure[1].CleDebut;
		}
		else
		{
			CleAsso_TableFinal=TabJointure[0].CleFin;
			CleAsso_TableMaitre=TabJointure[1].CleDebut;
		}
		var req="insert into "+TableAsso+" ("+CleAsso_TableMaitre+","+CleAsso_TableFinal+") values ("+CleMaitre+","+CleCompoFinal+")";
		if (pgsql_update(req)==0)
		{
			alert("Echec lors de l'insertion");
			return false;
		}
	}
	return true;
}
function SuprimerAssociation(ComposantFinal,CleCompoFinal,CleMaitre)
{
	/* on regarde dans quel cas on se trouve (clé étrangère: 1 liaison ou asso: 2 liaisons) */
	var TabJointure=ComposantFinal.my_Affichable.my_MaitresLiaison.getJointure().TabJointure;

	/* on ne gère que les doubles jointure */
	if (TabJointure.length!=2)
		return false;

	var TableFinale=ComposantFinal.getTable();
	var CleAsso_TableFinal;
	var CleAsso_TableMaitre;
	var TableAsso=TabJointure[0].TableFin;
	/* on regarde le sens de la jointure */
	if (TabJointure[1].TableFin==TableFinale)
	{
		CleAsso_TableMaitre=TabJointure[0].CleFin;
		CleAsso_TableFinal=TabJointure[1].CleDebut;
	}
	else
	{
		CleAsso_TableFinal=TabJointure[0].CleFin;
		CleAsso_TableMaitre=TabJointure[1].CleDebut;
	}
	var req="delete from "+TableAsso+" where ( ("+CleAsso_TableMaitre+" = "+CleMaitre+") AND ("+CleAsso_TableFinal+" = "+CleCompoFinal+") )";
	if (pgsql_update(req)==0)
	{
		alert("Echec lors de l'insertion");
		return false;
	}
}

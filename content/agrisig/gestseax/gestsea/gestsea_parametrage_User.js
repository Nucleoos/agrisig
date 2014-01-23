/*************************************************
  REQUETES UTILSATEUR : Onglet : Accès
  TAPEZ ICI LE CODE DE LA REQUETE D'INSERTION
***************************************************/
function User_Insert_Accès_Liste_des_niveaux_d_accès0(Compo_Maitre)
{

/*
***** INFOS ******

Nbr d'esclaves = 2

Id dans le tab: 6;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 7;
simple
Nbr Jointure: PAS DE JOINTURE;

******************
*/

 var Table="acces";
 var CleMaitre = TAB_COMPO_PPTES[3].NewCle;
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var ac_libelle=GetValAt(6);
 if (!ValiderChampsObligatoire(Table,"ac_libelle",TAB_GLOBAL_COMPO[6],ac_libelle,false))
 	return -1;
 if (!ValiderChampsType(Table,"ac_libelle",TAB_GLOBAL_COMPO[6],ac_libelle))
 	return -1;
 var ac_niveau=GetValAt(7);
 if (!ValiderChampsObligatoire(Table,"ac_niveau",TAB_GLOBAL_COMPO[7],ac_niveau,false))
 	return -1;
 if (!ValiderChampsType(Table,"ac_niveau",TAB_GLOBAL_COMPO[7],ac_niveau))
 	return -1;
 var Req="insert into "+Table+" ";
var TabInsertionEnPlus=new Array();
 Req+="("+NomCleMaitre+",ac_libelle,ac_niveau"+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[0]:"")+")";
 Req+=" values ("+CleMaitre+","+(ac_libelle=="" ? "null" : "'"+ValiderChaine(ac_libelle)+"'" )+","+(ac_niveau=="" ? "null" : "'"+ValiderChaine(ac_niveau)+"'" )+""+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[1]:"")+")";

 if (pgsql_update(Req)==0)
	alert("Echec lors de l'insertion");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Accès
  TAPEZ ICI LE CODE DE LA REQUETE DE SUPPRESSION 
***************************************************/
function User_Delete_Accès_Liste_des_niveaux_d_accès0(Compo_Maitre)
{
 var Table="acces";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var Req="delete from "+Table+" where "+NomCleMaitre+" = "+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la supression");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Accès
  TAPEZ ICI LE CODE DE LA REQUETE DE MISE A JOUR 
***************************************************/
function User_Update_Accès_Liste_des_niveaux_d_accès0(Compo_Maitre)
{
 var Table="acces";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var ac_libelle=GetValAt(6);
 if (!ValiderChampsObligatoire(Table,"ac_libelle",TAB_GLOBAL_COMPO[6],ac_libelle,false))
 	return -1;
 if (!ValiderChampsType(Table,"ac_libelle",TAB_GLOBAL_COMPO[6],ac_libelle))
 	return -1;
 var ac_niveau=GetValAt(7);
 if (!ValiderChampsObligatoire(Table,"ac_niveau",TAB_GLOBAL_COMPO[7],ac_niveau,false))
 	return -1;
 if (!ValiderChampsType(Table,"ac_niveau",TAB_GLOBAL_COMPO[7],ac_niveau))
 	return -1;
 var Req="update "+Table+" set ";
 Req+="ac_libelle="+(ac_libelle=="" ? "null" : "'"+ValiderChaine(ac_libelle)+"'" )+",ac_niveau="+(ac_niveau=="" ? "null" : "'"+ValiderChaine(ac_niveau)+"'" )+"";
 Req+=" where "+NomCleMaitre+"="+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la mise à jour");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Adhérence
  TAPEZ ICI LE CODE DE LA REQUETE D'INSERTION
***************************************************/
function User_Insert_Adhérence_Liste_des_adhérences0(Compo_Maitre)
{

/*
***** INFOS ******

Nbr d'esclaves = 5

Id dans le tab: 184;
simple
Nbr Jointure: 1;
    Joint n° 0 = produit,pd_numero,pd_numero

Id dans le tab: 185;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 186;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 187;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 191;
complexe
Nbr Jointure: 2;
    Joint n° 0 = periodeadherence,ah_numero,ah_numero
    Joint n° 1 = periode,po_numero,po_numero

******************
*/

 var Table="adherence";
 var CleMaitre = TAB_COMPO_PPTES[180].NewCle;
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var pd_numero=GetValAt(184);
 if (pd_numero=="-1")
    pd_numero="null";
 if (!ValiderChampsObligatoire(Table,"pd_numero",TAB_GLOBAL_COMPO[184],pd_numero,true))
 	return -1;
 var ah_libelle=GetValAt(185);
 if (!ValiderChampsObligatoire(Table,"ah_libelle",TAB_GLOBAL_COMPO[185],ah_libelle,false))
 	return -1;
 if (!ValiderChampsType(Table,"ah_libelle",TAB_GLOBAL_COMPO[185],ah_libelle))
 	return -1;
 var ah_reduction=GetValAt(186);
 if (!ValiderChampsObligatoire(Table,"ah_reduction",TAB_GLOBAL_COMPO[186],ah_reduction,false))
 	return -1;
 if (!ValiderChampsType(Table,"ah_reduction",TAB_GLOBAL_COMPO[186],ah_reduction))
 	return -1;
 var ah_quantite=GetValAt(187);
 if (!ValiderChampsObligatoire(Table,"ah_quantite",TAB_GLOBAL_COMPO[187],ah_quantite,false))
 	return -1;
 if (!ValiderChampsType(Table,"ah_quantite",TAB_GLOBAL_COMPO[187],ah_quantite))
 	return -1;
 var Req="insert into "+Table+" ";
var TabInsertionEnPlus=new Array();
 Req+="("+NomCleMaitre+",pd_numero,ah_libelle,ah_reduction,ah_quantite"+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[0]:"")+")";
 Req+=" values ("+CleMaitre+","+pd_numero+","+(ah_libelle=="" ? "null" : "'"+ValiderChaine(ah_libelle)+"'" )+","+(ah_reduction=="" ? "null" : "'"+ValiderChaine(ah_reduction)+"'" )+","+(ah_quantite=="" ? "null" : "'"+ValiderChaine(ah_quantite)+"'" )+""+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[1]:"")+")";

 if (pgsql_update(Req)==0)
	alert("Echec lors de l'insertion");

/* table periode*/
LstDouble_Exec_Req(GetSQLCompoAt(191),CleMaitre);
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Adhérence
  TAPEZ ICI LE CODE DE LA REQUETE DE SUPPRESSION 
***************************************************/
function User_Delete_Adhérence_Liste_des_adhérences0(Compo_Maitre)
{
 var Table="adherence";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var Req="delete from "+Table+" where "+NomCleMaitre+" = "+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la supression");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Adhérence
  TAPEZ ICI LE CODE DE LA REQUETE DE MISE A JOUR 
***************************************************/
function User_Update_Adhérence_Liste_des_adhérences0(Compo_Maitre)
{
 var Table="adherence";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var pd_numero=GetValAt(184);
 if (pd_numero=="-1")
    pd_numero="null";
 if (!ValiderChampsObligatoire(Table,"pd_numero",TAB_GLOBAL_COMPO[184],pd_numero,true))
 	return -1;
 var ah_libelle=GetValAt(185);
 if (!ValiderChampsObligatoire(Table,"ah_libelle",TAB_GLOBAL_COMPO[185],ah_libelle,false))
 	return -1;
 if (!ValiderChampsType(Table,"ah_libelle",TAB_GLOBAL_COMPO[185],ah_libelle))
 	return -1;
 var ah_reduction=GetValAt(186);
 if (!ValiderChampsObligatoire(Table,"ah_reduction",TAB_GLOBAL_COMPO[186],ah_reduction,false))
 	return -1;
 if (!ValiderChampsType(Table,"ah_reduction",TAB_GLOBAL_COMPO[186],ah_reduction))
 	return -1;
 var ah_quantite=GetValAt(187);
 if (!ValiderChampsObligatoire(Table,"ah_quantite",TAB_GLOBAL_COMPO[187],ah_quantite,false))
 	return -1;
 if (!ValiderChampsType(Table,"ah_quantite",TAB_GLOBAL_COMPO[187],ah_quantite))
 	return -1;
 var Req="update "+Table+" set ";
 Req+="pd_numero="+pd_numero+",ah_libelle="+(ah_libelle=="" ? "null" : "'"+ValiderChaine(ah_libelle)+"'" )+",ah_reduction="+(ah_reduction=="" ? "null" : "'"+ValiderChaine(ah_reduction)+"'" )+",ah_quantite="+(ah_quantite=="" ? "null" : "'"+ValiderChaine(ah_quantite)+"'" )+"";
 Req+=" where "+NomCleMaitre+"="+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la mise à jour");

/* table periode*/
LstDouble_Exec_Req(GetSQLCompoAt(191),CleMaitre);
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Agents
  TAPEZ ICI LE CODE DE LA REQUETE D'INSERTION
***************************************************/
function User_Insert_Agents_Liste_des_agents0(Compo_Maitre)
{

/*
***** INFOS ******

Nbr d'esclaves = 10

Id dans le tab: 110;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 111;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 112;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 113;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 114;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 115;
simple
Nbr Jointure: 1;
    Joint n° 0 = equipe,eq_numero,eq_numero

Id dans le tab: 116;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 117;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 118;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 119;
simple
Nbr Jointure: PAS DE JOINTURE;

******************
*/

 var Table="agent";
 var CleMaitre = TAB_COMPO_PPTES[104].NewCle;
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var ag_nom=GetValAt(110);
 if (!ValiderChampsObligatoire(Table,"ag_nom",TAB_GLOBAL_COMPO[110],ag_nom,false))
 	return -1;
 if (!ValiderChampsType(Table,"ag_nom",TAB_GLOBAL_COMPO[110],ag_nom))
 	return -1;
 var ag_prenom=GetValAt(111);
 if (!ValiderChampsObligatoire(Table,"ag_prenom",TAB_GLOBAL_COMPO[111],ag_prenom,false))
 	return -1;
 if (!ValiderChampsType(Table,"ag_prenom",TAB_GLOBAL_COMPO[111],ag_prenom))
 	return -1;
 var ag_initiales=GetValAt(112);
 if (!ValiderChampsObligatoire(Table,"ag_initiales",TAB_GLOBAL_COMPO[112],ag_initiales,false))
 	return -1;
 if (!ValiderChampsType(Table,"ag_initiales",TAB_GLOBAL_COMPO[112],ag_initiales))
 	return -1;
 var ag_actif=GetValAt(113);
 if (!ValiderChampsObligatoire(Table,"ag_actif",TAB_GLOBAL_COMPO[113],ag_actif,false))
 	return -1;
 if (!ValiderChampsType(Table,"ag_actif",TAB_GLOBAL_COMPO[113],ag_actif))
 	return -1;
 var ag_role=GetValAt(114);
 if (!ValiderChampsObligatoire(Table,"ag_role",TAB_GLOBAL_COMPO[114],ag_role,false))
 	return -1;
 if (!ValiderChampsType(Table,"ag_role",TAB_GLOBAL_COMPO[114],ag_role))
 	return -1;
 var eq_numero=GetValAt(115);
 if (eq_numero=="-1")
    eq_numero="null";
 if (!ValiderChampsObligatoire(Table,"eq_numero",TAB_GLOBAL_COMPO[115],eq_numero,true))
 	return -1;
 var ag_telephone=GetValAt(116);
 if (!ValiderChampsObligatoire(Table,"ag_telephone",TAB_GLOBAL_COMPO[116],ag_telephone,false))
 	return -1;
 if (!ValiderChampsType(Table,"ag_telephone",TAB_GLOBAL_COMPO[116],ag_telephone))
 	return -1;
 var ag_mobile=GetValAt(117);
 if (!ValiderChampsObligatoire(Table,"ag_mobile",TAB_GLOBAL_COMPO[117],ag_mobile,false))
 	return -1;
 if (!ValiderChampsType(Table,"ag_mobile",TAB_GLOBAL_COMPO[117],ag_mobile))
 	return -1;
 var ag_email=GetValAt(118);
 if (!ValiderChampsObligatoire(Table,"ag_email",TAB_GLOBAL_COMPO[118],ag_email,false))
 	return -1;
 if (!ValiderChampsType(Table,"ag_email",TAB_GLOBAL_COMPO[118],ag_email))
 	return -1;
 var ag_commentaire=GetValAt(119);
 if (!ValiderChampsObligatoire(Table,"ag_commentaire",TAB_GLOBAL_COMPO[119],ag_commentaire,false))
 	return -1;
 if (!ValiderChampsType(Table,"ag_commentaire",TAB_GLOBAL_COMPO[119],ag_commentaire))
 	return -1;
 var Req="insert into "+Table+" ";
var TabInsertionEnPlus=new Array();
 Req+="("+NomCleMaitre+",ag_nom,ag_prenom,ag_initiales,ag_actif,ag_role,eq_numero,ag_telephone,ag_mobile,ag_email,ag_commentaire"+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[0]:"")+")";
 Req+=" values ("+CleMaitre+","+(ag_nom=="" ? "null" : "'"+ValiderChaine(ag_nom)+"'" )+","+(ag_prenom=="" ? "null" : "'"+ValiderChaine(ag_prenom)+"'" )+","+(ag_initiales=="" ? "null" : "'"+ValiderChaine(ag_initiales)+"'" )+","+(ag_actif=="true" ? "true" : "false")+","+(ag_role=="" ? "null" : "'"+ValiderChaine(ag_role)+"'" )+","+eq_numero+","+(ag_telephone=="" ? "null" : "'"+ValiderChaine(ag_telephone)+"'" )+","+(ag_mobile=="" ? "null" : "'"+ValiderChaine(ag_mobile)+"'" )+","+(ag_email=="" ? "null" : "'"+ValiderChaine(ag_email)+"'" )+","+(ag_commentaire=="" ? "null" : "'"+ValiderChaine(ag_commentaire)+"'" )+""+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[1]:"")+")";

 if (pgsql_update(Req)==0)
	alert("Echec lors de l'insertion");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Agents
  TAPEZ ICI LE CODE DE LA REQUETE DE SUPPRESSION 
***************************************************/
function User_Delete_Agents_Liste_des_agents0(Compo_Maitre)
{
 var Table="agent";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var Req="delete from "+Table+" where "+NomCleMaitre+" = "+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la supression");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Agents
  TAPEZ ICI LE CODE DE LA REQUETE DE MISE A JOUR 
***************************************************/
function User_Update_Agents_Liste_des_agents0(Compo_Maitre)
{
 var Table="agent";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var ag_nom=GetValAt(110);
 if (!ValiderChampsObligatoire(Table,"ag_nom",TAB_GLOBAL_COMPO[110],ag_nom,false))
 	return -1;
 if (!ValiderChampsType(Table,"ag_nom",TAB_GLOBAL_COMPO[110],ag_nom))
 	return -1;
 var ag_prenom=GetValAt(111);
 if (!ValiderChampsObligatoire(Table,"ag_prenom",TAB_GLOBAL_COMPO[111],ag_prenom,false))
 	return -1;
 if (!ValiderChampsType(Table,"ag_prenom",TAB_GLOBAL_COMPO[111],ag_prenom))
 	return -1;
 var ag_initiales=GetValAt(112);
 if (!ValiderChampsObligatoire(Table,"ag_initiales",TAB_GLOBAL_COMPO[112],ag_initiales,false))
 	return -1;
 if (!ValiderChampsType(Table,"ag_initiales",TAB_GLOBAL_COMPO[112],ag_initiales))
 	return -1;
 var ag_actif=GetValAt(113);
 if (!ValiderChampsObligatoire(Table,"ag_actif",TAB_GLOBAL_COMPO[113],ag_actif,false))
 	return -1;
 if (!ValiderChampsType(Table,"ag_actif",TAB_GLOBAL_COMPO[113],ag_actif))
 	return -1;
 var ag_role=GetValAt(114);
 if (!ValiderChampsObligatoire(Table,"ag_role",TAB_GLOBAL_COMPO[114],ag_role,false))
 	return -1;
 if (!ValiderChampsType(Table,"ag_role",TAB_GLOBAL_COMPO[114],ag_role))
 	return -1;
 var eq_numero=GetValAt(115);
 if (eq_numero=="-1")
    eq_numero="null";
 if (!ValiderChampsObligatoire(Table,"eq_numero",TAB_GLOBAL_COMPO[115],eq_numero,true))
 	return -1;
 var ag_telephone=GetValAt(116);
 if (!ValiderChampsObligatoire(Table,"ag_telephone",TAB_GLOBAL_COMPO[116],ag_telephone,false))
 	return -1;
 if (!ValiderChampsType(Table,"ag_telephone",TAB_GLOBAL_COMPO[116],ag_telephone))
 	return -1;
 var ag_mobile=GetValAt(117);
 if (!ValiderChampsObligatoire(Table,"ag_mobile",TAB_GLOBAL_COMPO[117],ag_mobile,false))
 	return -1;
 if (!ValiderChampsType(Table,"ag_mobile",TAB_GLOBAL_COMPO[117],ag_mobile))
 	return -1;
 var ag_email=GetValAt(118);
 if (!ValiderChampsObligatoire(Table,"ag_email",TAB_GLOBAL_COMPO[118],ag_email,false))
 	return -1;
 if (!ValiderChampsType(Table,"ag_email",TAB_GLOBAL_COMPO[118],ag_email))
 	return -1;
 var ag_commentaire=GetValAt(119);
 if (!ValiderChampsObligatoire(Table,"ag_commentaire",TAB_GLOBAL_COMPO[119],ag_commentaire,false))
 	return -1;
 if (!ValiderChampsType(Table,"ag_commentaire",TAB_GLOBAL_COMPO[119],ag_commentaire))
 	return -1;
 var Req="update "+Table+" set ";
 Req+="ag_nom="+(ag_nom=="" ? "null" : "'"+ValiderChaine(ag_nom)+"'" )+",ag_prenom="+(ag_prenom=="" ? "null" : "'"+ValiderChaine(ag_prenom)+"'" )+",ag_initiales="+(ag_initiales=="" ? "null" : "'"+ValiderChaine(ag_initiales)+"'" )+",ag_actif="+(ag_actif=="true" ? "true" : "false")+",ag_role="+(ag_role=="" ? "null" : "'"+ValiderChaine(ag_role)+"'" )+",eq_numero="+eq_numero+",ag_telephone="+(ag_telephone=="" ? "null" : "'"+ValiderChaine(ag_telephone)+"'" )+",ag_mobile="+(ag_mobile=="" ? "null" : "'"+ValiderChaine(ag_mobile)+"'" )+",ag_email="+(ag_email=="" ? "null" : "'"+ValiderChaine(ag_email)+"'" )+",ag_commentaire="+(ag_commentaire=="" ? "null" : "'"+ValiderChaine(ag_commentaire)+"'" )+"";
 Req+=" where "+NomCleMaitre+"="+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la mise à jour");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Cantons
  TAPEZ ICI LE CODE DE LA REQUETE D'INSERTION
***************************************************/
function User_Insert_Cantons_Liste_des_cantons0(Compo_Maitre)
{

/*
***** INFOS ******

Nbr d'esclaves = 2

Id dans le tab: 140;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 141;
complexe
Nbr Jointure: 1;
    Joint n° 0 = ville,ct_numero,ct_numero

******************
*/

 var Table="canton";
 var CleMaitre = TAB_COMPO_PPTES[137].NewCle;
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var ct_nom=GetValAt(140);
 if (!ValiderChampsObligatoire(Table,"ct_nom",TAB_GLOBAL_COMPO[140],ct_nom,false))
 	return -1;
 if (!ValiderChampsType(Table,"ct_nom",TAB_GLOBAL_COMPO[140],ct_nom))
 	return -1;
 var Req="insert into "+Table+" ";
var TabInsertionEnPlus=new Array();
 Req+="("+NomCleMaitre+",ct_nom"+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[0]:"")+")";
 Req+=" values ("+CleMaitre+","+(ct_nom=="" ? "null" : "'"+ValiderChaine(ct_nom)+"'" )+""+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[1]:"")+")";

 if (pgsql_update(Req)==0)
	alert("Echec lors de l'insertion");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Cantons
  TAPEZ ICI LE CODE DE LA REQUETE DE SUPPRESSION 
***************************************************/
function User_Delete_Cantons_Liste_des_cantons0(Compo_Maitre)
{
 var Table="canton";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var Req="delete from "+Table+" where "+NomCleMaitre+" = "+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la supression");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Cantons
  TAPEZ ICI LE CODE DE LA REQUETE DE MISE A JOUR 
***************************************************/
function User_Update_Cantons_Liste_des_cantons0(Compo_Maitre)
{
 var Table="canton";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var ct_nom=GetValAt(140);
 if (!ValiderChampsObligatoire(Table,"ct_nom",TAB_GLOBAL_COMPO[140],ct_nom,false))
 	return -1;
 if (!ValiderChampsType(Table,"ct_nom",TAB_GLOBAL_COMPO[140],ct_nom))
 	return -1;
 var Req="update "+Table+" set ";
 Req+="ct_nom="+(ct_nom=="" ? "null" : "'"+ValiderChaine(ct_nom)+"'" )+"";
 Req+=" where "+NomCleMaitre+"="+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la mise à jour");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Codes postaux
  TAPEZ ICI LE CODE DE LA REQUETE D'INSERTION
***************************************************/
function User_Insert_Codes_postaux_Liste_des_codes_postaux0(Compo_Maitre)
{

/*
***** INFOS ******

Nbr d'esclaves = 3

Id dans le tab: 131;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 132;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 135;
complexe
Nbr Jointure: 2;
    Joint n° 0 = villecp,cp_numero,cp_numero
    Joint n° 1 = ville,vi_numero,vi_numero

******************
*/

 var Table="codepostal";
 var CleMaitre = TAB_COMPO_PPTES[128].NewCle;
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var cp_codepostal=GetValAt(131);
 if (!ValiderChampsObligatoire(Table,"cp_codepostal",TAB_GLOBAL_COMPO[131],cp_codepostal,false))
 	return -1;
 if (!ValiderChampsType(Table,"cp_codepostal",TAB_GLOBAL_COMPO[131],cp_codepostal))
 	return -1;
 var cp_bureau=GetValAt(132);
 if (!ValiderChampsObligatoire(Table,"cp_bureau",TAB_GLOBAL_COMPO[132],cp_bureau,false))
 	return -1;
 if (!ValiderChampsType(Table,"cp_bureau",TAB_GLOBAL_COMPO[132],cp_bureau))
 	return -1;
 var Req="insert into "+Table+" ";
var TabInsertionEnPlus=new Array();
 Req+="("+NomCleMaitre+",cp_codepostal,cp_bureau"+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[0]:"")+")";
 Req+=" values ("+CleMaitre+","+(cp_codepostal=="" ? "null" : "'"+ValiderChaine(cp_codepostal)+"'" )+","+(cp_bureau=="" ? "null" : "'"+ValiderChaine(cp_bureau)+"'" )+""+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[1]:"")+")";

 if (pgsql_update(Req)==0)
	alert("Echec lors de l'insertion");

/* table ville*/
LstDouble_Exec_Req(GetSQLCompoAt(135),CleMaitre);
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Codes postaux
  TAPEZ ICI LE CODE DE LA REQUETE DE SUPPRESSION 
***************************************************/
function User_Delete_Codes_postaux_Liste_des_codes_postaux0(Compo_Maitre)
{
 var Table="codepostal";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var Req="delete from "+Table+" where "+NomCleMaitre+" = "+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la supression");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Codes postaux
  TAPEZ ICI LE CODE DE LA REQUETE DE MISE A JOUR 
***************************************************/
function User_Update_Codes_postaux_Liste_des_codes_postaux0(Compo_Maitre)
{
 var Table="codepostal";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var cp_codepostal=GetValAt(131);
 if (!ValiderChampsObligatoire(Table,"cp_codepostal",TAB_GLOBAL_COMPO[131],cp_codepostal,false))
 	return -1;
 if (!ValiderChampsType(Table,"cp_codepostal",TAB_GLOBAL_COMPO[131],cp_codepostal))
 	return -1;
 var cp_bureau=GetValAt(132);
 if (!ValiderChampsObligatoire(Table,"cp_bureau",TAB_GLOBAL_COMPO[132],cp_bureau,false))
 	return -1;
 if (!ValiderChampsType(Table,"cp_bureau",TAB_GLOBAL_COMPO[132],cp_bureau))
 	return -1;
 var Req="update "+Table+" set ";
 Req+="cp_codepostal="+(cp_codepostal=="" ? "null" : "'"+ValiderChaine(cp_codepostal)+"'" )+",cp_bureau="+(cp_bureau=="" ? "null" : "'"+ValiderChaine(cp_bureau)+"'" )+"";
 Req+=" where "+NomCleMaitre+"="+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la mise à jour");

/* table ville*/
LstDouble_Exec_Req(GetSQLCompoAt(135),CleMaitre);
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Profils de droits
  TAPEZ ICI LE CODE DE LA REQUETE D'INSERTION
***************************************************/
function User_Insert_Profils_de_droits_Liste_des_profils_de_droits0(Compo_Maitre)
{

/*
***** INFOS ******

Nbr d'esclaves = 2

Id dans le tab: 90;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 91;
complexe
Nbr Jointure: 1;
    Joint n° 0 = droit,dp_numero,dp_numero

******************
*/

 var Table="droitprofil";
 var CleMaitre = TAB_COMPO_PPTES[88].NewCle;
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var dp_libelle=GetValAt(90);
 if (!ValiderChampsObligatoire(Table,"dp_libelle",TAB_GLOBAL_COMPO[90],dp_libelle,false))
 	return -1;
 if (!ValiderChampsType(Table,"dp_libelle",TAB_GLOBAL_COMPO[90],dp_libelle))
 	return -1;
 var Req="insert into "+Table+" ";
var TabInsertionEnPlus=new Array();
 Req+="("+NomCleMaitre+",dp_libelle"+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[0]:"")+")";
 Req+=" values ("+CleMaitre+","+(dp_libelle=="" ? "null" : "'"+ValiderChaine(dp_libelle)+"'" )+""+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[1]:"")+")";

 if (pgsql_update(Req)==0)
	alert("Echec lors de l'insertion");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Profils de droits
  TAPEZ ICI LE CODE DE LA REQUETE DE SUPPRESSION 
***************************************************/
function User_Delete_Profils_de_droits_Liste_des_profils_de_droits0(Compo_Maitre)
{
 var Table="droitprofil";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var Req="delete from "+Table+" where "+NomCleMaitre+" = "+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la supression");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Profils de droits
  TAPEZ ICI LE CODE DE LA REQUETE DE MISE A JOUR 
***************************************************/
function User_Update_Profils_de_droits_Liste_des_profils_de_droits0(Compo_Maitre)
{
 var Table="droitprofil";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var dp_libelle=GetValAt(90);
 if (!ValiderChampsObligatoire(Table,"dp_libelle",TAB_GLOBAL_COMPO[90],dp_libelle,false))
 	return -1;
 if (!ValiderChampsType(Table,"dp_libelle",TAB_GLOBAL_COMPO[90],dp_libelle))
 	return -1;
 var Req="update "+Table+" set ";
 Req+="dp_libelle="+(dp_libelle=="" ? "null" : "'"+ValiderChaine(dp_libelle)+"'" )+"";
 Req+=" where "+NomCleMaitre+"="+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la mise à jour");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Profils de droits
  TAPEZ ICI LE CODE DE LA REQUETE D'INSERTION
***************************************************/
function User_Insert_Profils_de_droits_Droits_2(Compo_Maitre)
{

/*
***** INFOS ******

Nbr d'esclaves = 5

Id dans le tab: 94;
simple
Nbr Jointure: 1;
    Joint n° 0 = groupetable,gt_numero,gt_numero

Id dans le tab: 95;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 96;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 97;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 98;
simple
Nbr Jointure: PAS DE JOINTURE;

******************
*/

 var Table="droit";
 var CleMaitre = TAB_COMPO_PPTES[91].NewCle;
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 /* COMPOSANT LISTE AVEC JOINTURE SIMPLE */
 var gt_numero=GetValAt(94);
 if (gt_numero=="-1")
    gt_numero="null";
 if (!ValiderChampsObligatoire(Table,"gt_numero",TAB_GLOBAL_COMPO[94],gt_numero,true))
 	return -1;
 var dr_select=GetValAt(95);
 if (!ValiderChampsObligatoire(Table,"dr_select",TAB_GLOBAL_COMPO[95],dr_select,false))
 	return -1;
 if (!ValiderChampsType(Table,"dr_select",TAB_GLOBAL_COMPO[95],dr_select))
 	return -1;
 var dr_insert=GetValAt(96);
 if (!ValiderChampsObligatoire(Table,"dr_insert",TAB_GLOBAL_COMPO[96],dr_insert,false))
 	return -1;
 if (!ValiderChampsType(Table,"dr_insert",TAB_GLOBAL_COMPO[96],dr_insert))
 	return -1;
 var dr_update=GetValAt(97);
 if (!ValiderChampsObligatoire(Table,"dr_update",TAB_GLOBAL_COMPO[97],dr_update,false))
 	return -1;
 if (!ValiderChampsType(Table,"dr_update",TAB_GLOBAL_COMPO[97],dr_update))
 	return -1;
 var dr_delete=GetValAt(98);
 if (!ValiderChampsObligatoire(Table,"dr_delete",TAB_GLOBAL_COMPO[98],dr_delete,false))
 	return -1;
 if (!ValiderChampsType(Table,"dr_delete",TAB_GLOBAL_COMPO[98],dr_delete))
 	return -1;
 var Req="insert into "+Table+" ";
var TabInsertionEnPlus=new Array();
 Req+="("+NomCleMaitre+",dp_numero,gt_numero,dr_select,dr_insert,dr_update,dr_delete"+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[0]:"")+")";
 Req+=" values ("+CleMaitre+","+TAB_COMPO_PPTES[88].NewCle+","+gt_numero+","+(dr_select=="true" ? "true" : "false")+","+(dr_insert=="true" ? "true" : "false")+","+(dr_update=="true" ? "true" : "false")+","+(dr_delete=="true" ? "true" : "false")+""+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[1]:"")+")";

 if (pgsql_update(Req)==0)
	alert("Echec lors de l'insertion");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Profils de droits
  TAPEZ ICI LE CODE DE LA REQUETE DE SUPPRESSION 
***************************************************/
function User_Delete_Profils_de_droits_Droits_2(Compo_Maitre)
{
 var Table="droit";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var Req="delete from "+Table+" where "+NomCleMaitre+" = "+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la supression");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Profils de droits
  TAPEZ ICI LE CODE DE LA REQUETE DE MISE A JOUR 
***************************************************/
function User_Update_Profils_de_droits_Droits_2(Compo_Maitre)
{
 var Table="droit";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var gt_numero=GetValAt(94);
 if (gt_numero=="-1")
    gt_numero="null";
 if (!ValiderChampsObligatoire(Table,"gt_numero",TAB_GLOBAL_COMPO[94],gt_numero,true))
 	return -1;
 var dr_select=GetValAt(95);
 if (!ValiderChampsObligatoire(Table,"dr_select",TAB_GLOBAL_COMPO[95],dr_select,false))
 	return -1;
 if (!ValiderChampsType(Table,"dr_select",TAB_GLOBAL_COMPO[95],dr_select))
 	return -1;
 var dr_insert=GetValAt(96);
 if (!ValiderChampsObligatoire(Table,"dr_insert",TAB_GLOBAL_COMPO[96],dr_insert,false))
 	return -1;
 if (!ValiderChampsType(Table,"dr_insert",TAB_GLOBAL_COMPO[96],dr_insert))
 	return -1;
 var dr_update=GetValAt(97);
 if (!ValiderChampsObligatoire(Table,"dr_update",TAB_GLOBAL_COMPO[97],dr_update,false))
 	return -1;
 if (!ValiderChampsType(Table,"dr_update",TAB_GLOBAL_COMPO[97],dr_update))
 	return -1;
 var dr_delete=GetValAt(98);
 if (!ValiderChampsObligatoire(Table,"dr_delete",TAB_GLOBAL_COMPO[98],dr_delete,false))
 	return -1;
 if (!ValiderChampsType(Table,"dr_delete",TAB_GLOBAL_COMPO[98],dr_delete))
 	return -1;
 var Req="update "+Table+" set ";
 Req+="gt_numero="+gt_numero+",dr_select="+(dr_select=="true" ? "true" : "false")+",dr_insert="+(dr_insert=="true" ? "true" : "false")+",dr_update="+(dr_update=="true" ? "true" : "false")+",dr_delete="+(dr_delete=="true" ? "true" : "false")+"";
 Req+=" where "+NomCleMaitre+"="+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la mise à jour");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Employés
  TAPEZ ICI LE CODE DE LA REQUETE D'INSERTION
***************************************************/
function User_Insert_Employés_Liste_des_employés0(Compo_Maitre)
{

/*
***** INFOS ******

Nbr d'esclaves = 7

Id dans le tab: 81;
simple
Nbr Jointure: 1;
    Joint n° 0 = agent,em_agent,ag_numero

Id dans le tab: 82;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 83;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 84;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 85;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 86;
simple
Nbr Jointure: 1;
    Joint n° 0 = acces,em_acces,ac_numero

Id dans le tab: 87;
simple
Nbr Jointure: 1;
    Joint n° 0 = droitprofil,dp_numero,dp_numero

******************
*/

 var Table="employe";
 var CleMaitre = TAB_COMPO_PPTES[77].NewCle;
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var em_agent=GetValAt(81);
 if (em_agent=="-1")
    em_agent="null";
 if (!ValiderChampsObligatoire(Table,"em_agent",TAB_GLOBAL_COMPO[81],em_agent,true))
 	return -1;
 var em_login=GetValAt(82);
 if (!ValiderChampsObligatoire(Table,"em_login",TAB_GLOBAL_COMPO[82],em_login,false))
 	return -1;
 if (!ValiderChampsType(Table,"em_login",TAB_GLOBAL_COMPO[82],em_login))
 	return -1;
 var em_password=GetValAt(83);
 if (!ValiderChampsObligatoire(Table,"em_password",TAB_GLOBAL_COMPO[83],em_password,false))
 	return -1;
 if (!ValiderChampsType(Table,"em_password",TAB_GLOBAL_COMPO[83],em_password))
 	return -1;
 var em_super=GetValAt(84);
 if (!ValiderChampsObligatoire(Table,"em_super",TAB_GLOBAL_COMPO[84],em_super,false))
 	return -1;
 if (!ValiderChampsType(Table,"em_super",TAB_GLOBAL_COMPO[84],em_super))
 	return -1;
 var em_emploi=GetValAt(85);
 if (!ValiderChampsObligatoire(Table,"em_emploi",TAB_GLOBAL_COMPO[85],em_emploi,false))
 	return -1;
 if (!ValiderChampsType(Table,"em_emploi",TAB_GLOBAL_COMPO[85],em_emploi))
 	return -1;
 var em_acces=GetValAt(86);
 if (em_acces=="-1")
    em_acces="null";
 if (!ValiderChampsObligatoire(Table,"em_acces",TAB_GLOBAL_COMPO[86],em_acces,true))
 	return -1;
 var dp_numero=GetValAt(87);
 if (dp_numero=="-1")
    dp_numero="null";
 if (!ValiderChampsObligatoire(Table,"dp_numero",TAB_GLOBAL_COMPO[87],dp_numero,true))
 	return -1;
 var Req="insert into "+Table+" ";
var TabInsertionEnPlus=new Array();
var Asso11=false;
var TabAsso11=new Array();
var CompoLie = GetSQLCompoAt(73);
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
 Req+="("+NomCleMaitre+",em_agent,em_login,em_password,em_super,em_emploi,em_acces,dp_numero"+(Asso11?","+TabAsso11[0]:"")+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[0]:"")+")";
 Req+=" values ("+CleMaitre+","+em_agent+","+(em_login=="" ? "null" : "'"+ValiderChaine(em_login)+"'" )+","+(em_password=="" ? "null" : "'"+ValiderChaine(em_password)+"'" )+","+(em_super=="true" ? "true" : "false")+","+(em_emploi=="" ? "null" : "'"+ValiderChaine(em_emploi)+"'" )+","+em_acces+","+dp_numero+""+(Asso11?","+TabAsso11[1]:"")+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[1]:"")+")";

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
  REQUETES UTILSATEUR : Onglet : Employés
  TAPEZ ICI LE CODE DE LA REQUETE DE SUPPRESSION 
***************************************************/
function User_Delete_Employés_Liste_des_employés0(Compo_Maitre)
{
 var Table="employe";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var Req="delete from "+Table+" where "+NomCleMaitre+" = "+CleMaitre;

var CompoLie = GetSQLCompoAt(73);
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
  REQUETES UTILSATEUR : Onglet : Employés
  TAPEZ ICI LE CODE DE LA REQUETE DE MISE A JOUR 
***************************************************/
function User_Update_Employés_Liste_des_employés0(Compo_Maitre)
{
 var Table="employe";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var em_agent=GetValAt(81);
 if (em_agent=="-1")
    em_agent="null";
 if (!ValiderChampsObligatoire(Table,"em_agent",TAB_GLOBAL_COMPO[81],em_agent,true))
 	return -1;
 var em_login=GetValAt(82);
 if (!ValiderChampsObligatoire(Table,"em_login",TAB_GLOBAL_COMPO[82],em_login,false))
 	return -1;
 if (!ValiderChampsType(Table,"em_login",TAB_GLOBAL_COMPO[82],em_login))
 	return -1;
 var em_password=GetValAt(83);
 if (!ValiderChampsObligatoire(Table,"em_password",TAB_GLOBAL_COMPO[83],em_password,false))
 	return -1;
 if (!ValiderChampsType(Table,"em_password",TAB_GLOBAL_COMPO[83],em_password))
 	return -1;
 var em_super=GetValAt(84);
 if (!ValiderChampsObligatoire(Table,"em_super",TAB_GLOBAL_COMPO[84],em_super,false))
 	return -1;
 if (!ValiderChampsType(Table,"em_super",TAB_GLOBAL_COMPO[84],em_super))
 	return -1;
 var em_emploi=GetValAt(85);
 if (!ValiderChampsObligatoire(Table,"em_emploi",TAB_GLOBAL_COMPO[85],em_emploi,false))
 	return -1;
 if (!ValiderChampsType(Table,"em_emploi",TAB_GLOBAL_COMPO[85],em_emploi))
 	return -1;
 var em_acces=GetValAt(86);
 if (em_acces=="-1")
    em_acces="null";
 if (!ValiderChampsObligatoire(Table,"em_acces",TAB_GLOBAL_COMPO[86],em_acces,true))
 	return -1;
 var dp_numero=GetValAt(87);
 if (dp_numero=="-1")
    dp_numero="null";
 if (!ValiderChampsObligatoire(Table,"dp_numero",TAB_GLOBAL_COMPO[87],dp_numero,true))
 	return -1;
 var Req="update "+Table+" set ";
 Req+="em_agent="+em_agent+",em_login="+(em_login=="" ? "null" : "'"+ValiderChaine(em_login)+"'" )+",em_password="+(em_password=="" ? "null" : "'"+ValiderChaine(em_password)+"'" )+",em_super="+(em_super=="true" ? "true" : "false")+",em_emploi="+(em_emploi=="" ? "null" : "'"+ValiderChaine(em_emploi)+"'" )+",em_acces="+em_acces+",dp_numero="+dp_numero+"";
 Req+=" where "+NomCleMaitre+"="+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la mise à jour");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Équipes
  TAPEZ ICI LE CODE DE LA REQUETE D'INSERTION
***************************************************/
function User_Insert_Équipes_Liste_des_équipes0(Compo_Maitre)
{

/*
***** INFOS ******

Nbr d'esclaves = 1

Id dans le tab: 122;
simple
Nbr Jointure: PAS DE JOINTURE;

******************
*/

 var Table="equipe";
 var CleMaitre = TAB_COMPO_PPTES[120].NewCle;
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var eq_nom=GetValAt(122);
 if (!ValiderChampsObligatoire(Table,"eq_nom",TAB_GLOBAL_COMPO[122],eq_nom,false))
 	return -1;
 if (!ValiderChampsType(Table,"eq_nom",TAB_GLOBAL_COMPO[122],eq_nom))
 	return -1;
 var Req="insert into "+Table+" ";
var TabInsertionEnPlus=new Array();
 Req+="("+NomCleMaitre+",eq_nom"+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[0]:"")+")";
 Req+=" values ("+CleMaitre+","+(eq_nom=="" ? "null" : "'"+ValiderChaine(eq_nom)+"'" )+""+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[1]:"")+")";

 if (pgsql_update(Req)==0)
	alert("Echec lors de l'insertion");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Équipes
  TAPEZ ICI LE CODE DE LA REQUETE DE SUPPRESSION 
***************************************************/
function User_Delete_Équipes_Liste_des_équipes0(Compo_Maitre)
{
 var Table="equipe";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var Req="delete from "+Table+" where "+NomCleMaitre+" = "+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la supression");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Équipes
  TAPEZ ICI LE CODE DE LA REQUETE DE MISE A JOUR 
***************************************************/
function User_Update_Équipes_Liste_des_équipes0(Compo_Maitre)
{
 var Table="equipe";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var eq_nom=GetValAt(122);
 if (!ValiderChampsObligatoire(Table,"eq_nom",TAB_GLOBAL_COMPO[122],eq_nom,false))
 	return -1;
 if (!ValiderChampsType(Table,"eq_nom",TAB_GLOBAL_COMPO[122],eq_nom))
 	return -1;
 var Req="update "+Table+" set ";
 Req+="eq_nom="+(eq_nom=="" ? "null" : "'"+ValiderChaine(eq_nom)+"'" )+"";
 Req+=" where "+NomCleMaitre+"="+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la mise à jour");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Etats de personne
  TAPEZ ICI LE CODE DE LA REQUETE D'INSERTION
***************************************************/
function User_Insert_Etats_de_personne_Liste_des_états_de_personne0(Compo_Maitre)
{

/*
***** INFOS ******

Nbr d'esclaves = 1

Id dans le tab: 52;
simple
Nbr Jointure: PAS DE JOINTURE;

******************
*/

 var Table="etatpersonne";
 var CleMaitre = TAB_COMPO_PPTES[50].NewCle;
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var ep_libelle=GetValAt(52);
 if (!ValiderChampsObligatoire(Table,"ep_libelle",TAB_GLOBAL_COMPO[52],ep_libelle,false))
 	return -1;
 if (!ValiderChampsType(Table,"ep_libelle",TAB_GLOBAL_COMPO[52],ep_libelle))
 	return -1;
 var Req="insert into "+Table+" ";
var TabInsertionEnPlus=new Array();
 Req+="("+NomCleMaitre+",ep_libelle"+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[0]:"")+")";
 Req+=" values ("+CleMaitre+","+(ep_libelle=="" ? "null" : "'"+ValiderChaine(ep_libelle)+"'" )+""+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[1]:"")+")";

 if (pgsql_update(Req)==0)
	alert("Echec lors de l'insertion");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Etats de personne
  TAPEZ ICI LE CODE DE LA REQUETE DE SUPPRESSION 
***************************************************/
function User_Delete_Etats_de_personne_Liste_des_états_de_personne0(Compo_Maitre)
{
 var Table="etatpersonne";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var Req="delete from "+Table+" where "+NomCleMaitre+" = "+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la supression");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Etats de personne
  TAPEZ ICI LE CODE DE LA REQUETE DE MISE A JOUR 
***************************************************/
function User_Update_Etats_de_personne_Liste_des_états_de_personne0(Compo_Maitre)
{
 var Table="etatpersonne";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var ep_libelle=GetValAt(52);
 if (!ValiderChampsObligatoire(Table,"ep_libelle",TAB_GLOBAL_COMPO[52],ep_libelle,false))
 	return -1;
 if (!ValiderChampsType(Table,"ep_libelle",TAB_GLOBAL_COMPO[52],ep_libelle))
 	return -1;
 var Req="update "+Table+" set ";
 Req+="ep_libelle="+(ep_libelle=="" ? "null" : "'"+ValiderChaine(ep_libelle)+"'" )+"";
 Req+=" where "+NomCleMaitre+"="+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la mise à jour");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Groupe de tables
  TAPEZ ICI LE CODE DE LA REQUETE D'INSERTION
***************************************************/
function User_Insert_Groupe_de_tables_Liste_des_groupes_de_tables0(Compo_Maitre)
{

/*
***** INFOS ******

Nbr d'esclaves = 2

Id dans le tab: 102;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 103;
simple
Nbr Jointure: PAS DE JOINTURE;

******************
*/

 var Table="groupetable";
 var CleMaitre = TAB_COMPO_PPTES[99].NewCle;
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var gt_libelle=GetValAt(102);
 if (!ValiderChampsObligatoire(Table,"gt_libelle",TAB_GLOBAL_COMPO[102],gt_libelle,false))
 	return -1;
 if (!ValiderChampsType(Table,"gt_libelle",TAB_GLOBAL_COMPO[102],gt_libelle))
 	return -1;
 var gt_tables=GetValAt(103);
 if (!ValiderChampsObligatoire(Table,"gt_tables",TAB_GLOBAL_COMPO[103],gt_tables,false))
 	return -1;
 if (!ValiderChampsType(Table,"gt_tables",TAB_GLOBAL_COMPO[103],gt_tables))
 	return -1;
 var Req="insert into "+Table+" ";
var TabInsertionEnPlus=new Array();
 Req+="("+NomCleMaitre+",gt_libelle,gt_tables"+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[0]:"")+")";
 Req+=" values ("+CleMaitre+","+(gt_libelle=="" ? "null" : "'"+ValiderChaine(gt_libelle)+"'" )+","+(gt_tables=="" ? "null" : "'"+ValiderChaine(gt_tables)+"'" )+""+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[1]:"")+")";

 if (pgsql_update(Req)==0)
	alert("Echec lors de l'insertion");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Groupe de tables
  TAPEZ ICI LE CODE DE LA REQUETE DE SUPPRESSION 
***************************************************/
function User_Delete_Groupe_de_tables_Liste_des_groupes_de_tables0(Compo_Maitre)
{
 var Table="groupetable";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var Req="delete from "+Table+" where "+NomCleMaitre+" = "+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la supression");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Groupe de tables
  TAPEZ ICI LE CODE DE LA REQUETE DE MISE A JOUR 
***************************************************/
function User_Update_Groupe_de_tables_Liste_des_groupes_de_tables0(Compo_Maitre)
{
 var Table="groupetable";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var gt_libelle=GetValAt(102);
 if (!ValiderChampsObligatoire(Table,"gt_libelle",TAB_GLOBAL_COMPO[102],gt_libelle,false))
 	return -1;
 if (!ValiderChampsType(Table,"gt_libelle",TAB_GLOBAL_COMPO[102],gt_libelle))
 	return -1;
 var gt_tables=GetValAt(103);
 if (!ValiderChampsObligatoire(Table,"gt_tables",TAB_GLOBAL_COMPO[103],gt_tables,false))
 	return -1;
 if (!ValiderChampsType(Table,"gt_tables",TAB_GLOBAL_COMPO[103],gt_tables))
 	return -1;
 var Req="update "+Table+" set ";
 Req+="gt_libelle="+(gt_libelle=="" ? "null" : "'"+ValiderChaine(gt_libelle)+"'" )+",gt_tables="+(gt_tables=="" ? "null" : "'"+ValiderChaine(gt_tables)+"'" )+"";
 Req+=" where "+NomCleMaitre+"="+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la mise à jour");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Groupes de cantons
  TAPEZ ICI LE CODE DE LA REQUETE D'INSERTION
***************************************************/
function User_Insert_Groupes_de_cantons_Liste_des_groupes_de_cantons0(Compo_Maitre)
{

/*
***** INFOS ******

Nbr d'esclaves = 2

Id dans le tab: 37;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 41;
complexe
Nbr Jointure: 2;
    Joint n° 0 = appartienta,gc_numero,gc_numero
    Joint n° 1 = canton,ct_numero,ct_numero

******************
*/

 var Table="groupecanton";
 var CleMaitre = TAB_COMPO_PPTES[35].NewCle;
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var gc_nom=GetValAt(37);
 if (!ValiderChampsObligatoire(Table,"gc_nom",TAB_GLOBAL_COMPO[37],gc_nom,false))
 	return -1;
 if (!ValiderChampsType(Table,"gc_nom",TAB_GLOBAL_COMPO[37],gc_nom))
 	return -1;
 var Req="insert into "+Table+" ";
var TabInsertionEnPlus=new Array();
 Req+="("+NomCleMaitre+",gc_nom"+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[0]:"")+")";
 Req+=" values ("+CleMaitre+","+(gc_nom=="" ? "null" : "'"+ValiderChaine(gc_nom)+"'" )+""+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[1]:"")+")";

 if (pgsql_update(Req)==0)
	alert("Echec lors de l'insertion");

/* table canton*/
LstDouble_Exec_Req(GetSQLCompoAt(41),CleMaitre);
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Groupes de cantons
  TAPEZ ICI LE CODE DE LA REQUETE DE SUPPRESSION 
***************************************************/
function User_Delete_Groupes_de_cantons_Liste_des_groupes_de_cantons0(Compo_Maitre)
{
 var Table="groupecanton";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var Req="delete from "+Table+" where "+NomCleMaitre+" = "+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la supression");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Groupes de cantons
  TAPEZ ICI LE CODE DE LA REQUETE DE MISE A JOUR 
***************************************************/
function User_Update_Groupes_de_cantons_Liste_des_groupes_de_cantons0(Compo_Maitre)
{
 var Table="groupecanton";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var gc_nom=GetValAt(37);
 if (!ValiderChampsObligatoire(Table,"gc_nom",TAB_GLOBAL_COMPO[37],gc_nom,false))
 	return -1;
 if (!ValiderChampsType(Table,"gc_nom",TAB_GLOBAL_COMPO[37],gc_nom))
 	return -1;
 var Req="update "+Table+" set ";
 Req+="gc_nom="+(gc_nom=="" ? "null" : "'"+ValiderChaine(gc_nom)+"'" )+"";
 Req+=" where "+NomCleMaitre+"="+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la mise à jour");

/* table canton*/
LstDouble_Exec_Req(GetSQLCompoAt(41),CleMaitre);
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Modèles d'impressions
  TAPEZ ICI LE CODE DE LA REQUETE D'INSERTION
***************************************************/
function User_Insert_Modèles_d_impressions_Liste_des_modèles_d_impressions0(Compo_Maitre)
{

/*
***** INFOS ******

Nbr d'esclaves = 7

Id dans le tab: 219;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 220;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 221;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 222;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 223;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 224;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 225;
simple
Nbr Jointure: PAS DE JOINTURE;

******************
*/

 var Table="impression";
 var CleMaitre = TAB_COMPO_PPTES[217].NewCle;
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var im_libelle=GetValAt(219);
 if (!ValiderChampsObligatoire(Table,"im_libelle",TAB_GLOBAL_COMPO[219],im_libelle,false))
 	return -1;
 if (!ValiderChampsType(Table,"im_libelle",TAB_GLOBAL_COMPO[219],im_libelle))
 	return -1;
 var im_nom=GetValAt(220);
 if (!ValiderChampsObligatoire(Table,"im_nom",TAB_GLOBAL_COMPO[220],im_nom,false))
 	return -1;
 if (!ValiderChampsType(Table,"im_nom",TAB_GLOBAL_COMPO[220],im_nom))
 	return -1;
 var im_modele=GetValAt(221);
 if (!ValiderChampsObligatoire(Table,"im_modele",TAB_GLOBAL_COMPO[221],im_modele,false))
 	return -1;
 if (!ValiderChampsType(Table,"im_modele",TAB_GLOBAL_COMPO[221],im_modele))
 	return -1;
 var im_defaut=GetValAt(222);
 if (!ValiderChampsObligatoire(Table,"im_defaut",TAB_GLOBAL_COMPO[222],im_defaut,false))
 	return -1;
 if (!ValiderChampsType(Table,"im_defaut",TAB_GLOBAL_COMPO[222],im_defaut))
 	return -1;
 var im_keytable=GetValAt(223);
 if (!ValiderChampsObligatoire(Table,"im_keytable",TAB_GLOBAL_COMPO[223],im_keytable,false))
 	return -1;
 if (!ValiderChampsType(Table,"im_keytable",TAB_GLOBAL_COMPO[223],im_keytable))
 	return -1;
 var im_keycle=GetValAt(224);
 if (!ValiderChampsObligatoire(Table,"im_keycle",TAB_GLOBAL_COMPO[224],im_keycle,false))
 	return -1;
 if (!ValiderChampsType(Table,"im_keycle",TAB_GLOBAL_COMPO[224],im_keycle))
 	return -1;
 var im_keydate=GetValAt(225);
 if (!ValiderChampsObligatoire(Table,"im_keydate",TAB_GLOBAL_COMPO[225],im_keydate,false))
 	return -1;
 if (!ValiderChampsType(Table,"im_keydate",TAB_GLOBAL_COMPO[225],im_keydate))
 	return -1;
 var Req="insert into "+Table+" ";
var TabInsertionEnPlus=new Array();
 Req+="("+NomCleMaitre+",im_libelle,im_nom,im_modele,im_defaut,im_keytable,im_keycle,im_keydate"+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[0]:"")+")";
 Req+=" values ("+CleMaitre+","+(im_libelle=="" ? "null" : "'"+ValiderChaine(im_libelle)+"'" )+","+(im_nom=="" ? "null" : "'"+ValiderChaine(im_nom)+"'" )+","+(im_modele=="" ? "null" : "'"+ValiderChaine(im_modele)+"'" )+","+(im_defaut=="true" ? "true" : "false")+","+(im_keytable=="" ? "null" : "'"+ValiderChaine(im_keytable)+"'" )+","+(im_keycle=="" ? "null" : "'"+ValiderChaine(im_keycle)+"'" )+","+(im_keydate=="" ? "null" : "'"+ValiderChaine(im_keydate)+"'" )+""+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[1]:"")+")";

 if (pgsql_update(Req)==0)
	alert("Echec lors de l'insertion");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Modèles d'impressions
  TAPEZ ICI LE CODE DE LA REQUETE DE SUPPRESSION 
***************************************************/
function User_Delete_Modèles_d_impressions_Liste_des_modèles_d_impressions0(Compo_Maitre)
{
 var Table="impression";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var Req="delete from "+Table+" where "+NomCleMaitre+" = "+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la supression");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Modèles d'impressions
  TAPEZ ICI LE CODE DE LA REQUETE DE MISE A JOUR 
***************************************************/
function User_Update_Modèles_d_impressions_Liste_des_modèles_d_impressions0(Compo_Maitre)
{
 var Table="impression";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var im_libelle=GetValAt(219);
 if (!ValiderChampsObligatoire(Table,"im_libelle",TAB_GLOBAL_COMPO[219],im_libelle,false))
 	return -1;
 if (!ValiderChampsType(Table,"im_libelle",TAB_GLOBAL_COMPO[219],im_libelle))
 	return -1;
 var im_nom=GetValAt(220);
 if (!ValiderChampsObligatoire(Table,"im_nom",TAB_GLOBAL_COMPO[220],im_nom,false))
 	return -1;
 if (!ValiderChampsType(Table,"im_nom",TAB_GLOBAL_COMPO[220],im_nom))
 	return -1;
 var im_modele=GetValAt(221);
 if (!ValiderChampsObligatoire(Table,"im_modele",TAB_GLOBAL_COMPO[221],im_modele,false))
 	return -1;
 if (!ValiderChampsType(Table,"im_modele",TAB_GLOBAL_COMPO[221],im_modele))
 	return -1;
 var im_defaut=GetValAt(222);
 if (!ValiderChampsObligatoire(Table,"im_defaut",TAB_GLOBAL_COMPO[222],im_defaut,false))
 	return -1;
 if (!ValiderChampsType(Table,"im_defaut",TAB_GLOBAL_COMPO[222],im_defaut))
 	return -1;
 var im_keytable=GetValAt(223);
 if (!ValiderChampsObligatoire(Table,"im_keytable",TAB_GLOBAL_COMPO[223],im_keytable,false))
 	return -1;
 if (!ValiderChampsType(Table,"im_keytable",TAB_GLOBAL_COMPO[223],im_keytable))
 	return -1;
 var im_keycle=GetValAt(224);
 if (!ValiderChampsObligatoire(Table,"im_keycle",TAB_GLOBAL_COMPO[224],im_keycle,false))
 	return -1;
 if (!ValiderChampsType(Table,"im_keycle",TAB_GLOBAL_COMPO[224],im_keycle))
 	return -1;
 var im_keydate=GetValAt(225);
 if (!ValiderChampsObligatoire(Table,"im_keydate",TAB_GLOBAL_COMPO[225],im_keydate,false))
 	return -1;
 if (!ValiderChampsType(Table,"im_keydate",TAB_GLOBAL_COMPO[225],im_keydate))
 	return -1;
 var Req="update "+Table+" set ";
 Req+="im_libelle="+(im_libelle=="" ? "null" : "'"+ValiderChaine(im_libelle)+"'" )+",im_nom="+(im_nom=="" ? "null" : "'"+ValiderChaine(im_nom)+"'" )+",im_modele="+(im_modele=="" ? "null" : "'"+ValiderChaine(im_modele)+"'" )+",im_defaut="+(im_defaut=="true" ? "true" : "false")+",im_keytable="+(im_keytable=="" ? "null" : "'"+ValiderChaine(im_keytable)+"'" )+",im_keycle="+(im_keycle=="" ? "null" : "'"+ValiderChaine(im_keycle)+"'" )+",im_keydate="+(im_keydate=="" ? "null" : "'"+ValiderChaine(im_keydate)+"'" )+"";
 Req+=" where "+NomCleMaitre+"="+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la mise à jour");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Impressions
  TAPEZ ICI LE CODE DE LA REQUETE D'INSERTION
***************************************************/
function User_Insert_Impressions_Liste_des_modèles_d_impressions0(Compo_Maitre)
{

/*
***** INFOS ******

Nbr d'esclaves = 8

Id dans le tab: 229;
simple
Nbr Jointure: 1;
    Joint n° 0 = societe,im_societe,so_numero

Id dans le tab: 230;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 231;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 232;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 233;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 234;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 235;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 236;
simple
Nbr Jointure: PAS DE JOINTURE;

******************
*/

 var Table="table_impression";
 var CleMaitre = TAB_COMPO_PPTES[226].NewCle;
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var im_societe=GetValAt(229);
 if (im_societe=="-1")
    im_societe="null";
 if (!ValiderChampsObligatoire(Table,"im_societe",TAB_GLOBAL_COMPO[229],im_societe,true))
 	return -1;
 var im_libelle=GetValAt(230);
 if (!ValiderChampsObligatoire(Table,"im_libelle",TAB_GLOBAL_COMPO[230],im_libelle,false))
 	return -1;
 if (!ValiderChampsType(Table,"im_libelle",TAB_GLOBAL_COMPO[230],im_libelle))
 	return -1;
 var im_nom=GetValAt(231);
 if (!ValiderChampsObligatoire(Table,"im_nom",TAB_GLOBAL_COMPO[231],im_nom,false))
 	return -1;
 if (!ValiderChampsType(Table,"im_nom",TAB_GLOBAL_COMPO[231],im_nom))
 	return -1;
 var im_modele=GetValAt(232);
 if (!ValiderChampsObligatoire(Table,"im_modele",TAB_GLOBAL_COMPO[232],im_modele,false))
 	return -1;
 if (!ValiderChampsType(Table,"im_modele",TAB_GLOBAL_COMPO[232],im_modele))
 	return -1;
 var im_defaut=GetValAt(233);
 if (!ValiderChampsObligatoire(Table,"im_defaut",TAB_GLOBAL_COMPO[233],im_defaut,false))
 	return -1;
 if (!ValiderChampsType(Table,"im_defaut",TAB_GLOBAL_COMPO[233],im_defaut))
 	return -1;
 var im_keytable=GetValAt(234);
 if (!ValiderChampsObligatoire(Table,"im_keytable",TAB_GLOBAL_COMPO[234],im_keytable,false))
 	return -1;
 if (!ValiderChampsType(Table,"im_keytable",TAB_GLOBAL_COMPO[234],im_keytable))
 	return -1;
 var im_keycle=GetValAt(235);
 if (!ValiderChampsObligatoire(Table,"im_keycle",TAB_GLOBAL_COMPO[235],im_keycle,false))
 	return -1;
 if (!ValiderChampsType(Table,"im_keycle",TAB_GLOBAL_COMPO[235],im_keycle))
 	return -1;
 var im_keydate=GetValAt(236);
 if (!ValiderChampsObligatoire(Table,"im_keydate",TAB_GLOBAL_COMPO[236],im_keydate,false))
 	return -1;
 if (!ValiderChampsType(Table,"im_keydate",TAB_GLOBAL_COMPO[236],im_keydate))
 	return -1;
 var Req="insert into "+Table+" ";
var TabInsertionEnPlus=new Array();
 Req+="("+NomCleMaitre+",im_societe,im_libelle,im_nom,im_modele,im_defaut,im_keytable,im_keycle,im_keydate"+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[0]:"")+")";
 Req+=" values ("+CleMaitre+","+im_societe+","+(im_libelle=="" ? "null" : "'"+ValiderChaine(im_libelle)+"'" )+","+(im_nom=="" ? "null" : "'"+ValiderChaine(im_nom)+"'" )+","+(im_modele=="" ? "null" : "'"+ValiderChaine(im_modele)+"'" )+","+(im_defaut=="true" ? "true" : "false")+","+(im_keytable=="" ? "null" : "'"+ValiderChaine(im_keytable)+"'" )+","+(im_keycle=="" ? "null" : "'"+ValiderChaine(im_keycle)+"'" )+","+(im_keydate=="" ? "null" : "'"+ValiderChaine(im_keydate)+"'" )+""+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[1]:"")+")";

 if (pgsql_update(Req)==0)
	alert("Echec lors de l'insertion");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Impressions
  TAPEZ ICI LE CODE DE LA REQUETE DE SUPPRESSION 
***************************************************/
function User_Delete_Impressions_Liste_des_modèles_d_impressions0(Compo_Maitre)
{
 var Table="table_impression";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var Req="delete from "+Table+" where "+NomCleMaitre+" = "+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la supression");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Impressions
  TAPEZ ICI LE CODE DE LA REQUETE DE MISE A JOUR 
***************************************************/
function User_Update_Impressions_Liste_des_modèles_d_impressions0(Compo_Maitre)
{
 var Table="table_impression";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var im_societe=GetValAt(229);
 if (im_societe=="-1")
    im_societe="null";
 if (!ValiderChampsObligatoire(Table,"im_societe",TAB_GLOBAL_COMPO[229],im_societe,true))
 	return -1;
 var im_libelle=GetValAt(230);
 if (!ValiderChampsObligatoire(Table,"im_libelle",TAB_GLOBAL_COMPO[230],im_libelle,false))
 	return -1;
 if (!ValiderChampsType(Table,"im_libelle",TAB_GLOBAL_COMPO[230],im_libelle))
 	return -1;
 var im_nom=GetValAt(231);
 if (!ValiderChampsObligatoire(Table,"im_nom",TAB_GLOBAL_COMPO[231],im_nom,false))
 	return -1;
 if (!ValiderChampsType(Table,"im_nom",TAB_GLOBAL_COMPO[231],im_nom))
 	return -1;
 var im_modele=GetValAt(232);
 if (!ValiderChampsObligatoire(Table,"im_modele",TAB_GLOBAL_COMPO[232],im_modele,false))
 	return -1;
 if (!ValiderChampsType(Table,"im_modele",TAB_GLOBAL_COMPO[232],im_modele))
 	return -1;
 var im_defaut=GetValAt(233);
 if (!ValiderChampsObligatoire(Table,"im_defaut",TAB_GLOBAL_COMPO[233],im_defaut,false))
 	return -1;
 if (!ValiderChampsType(Table,"im_defaut",TAB_GLOBAL_COMPO[233],im_defaut))
 	return -1;
 var im_keytable=GetValAt(234);
 if (!ValiderChampsObligatoire(Table,"im_keytable",TAB_GLOBAL_COMPO[234],im_keytable,false))
 	return -1;
 if (!ValiderChampsType(Table,"im_keytable",TAB_GLOBAL_COMPO[234],im_keytable))
 	return -1;
 var im_keycle=GetValAt(235);
 if (!ValiderChampsObligatoire(Table,"im_keycle",TAB_GLOBAL_COMPO[235],im_keycle,false))
 	return -1;
 if (!ValiderChampsType(Table,"im_keycle",TAB_GLOBAL_COMPO[235],im_keycle))
 	return -1;
 var im_keydate=GetValAt(236);
 if (!ValiderChampsObligatoire(Table,"im_keydate",TAB_GLOBAL_COMPO[236],im_keydate,false))
 	return -1;
 if (!ValiderChampsType(Table,"im_keydate",TAB_GLOBAL_COMPO[236],im_keydate))
 	return -1;
 var Req="update "+Table+" set ";
 Req+="im_societe="+im_societe+",im_libelle="+(im_libelle=="" ? "null" : "'"+ValiderChaine(im_libelle)+"'" )+",im_nom="+(im_nom=="" ? "null" : "'"+ValiderChaine(im_nom)+"'" )+",im_modele="+(im_modele=="" ? "null" : "'"+ValiderChaine(im_modele)+"'" )+",im_defaut="+(im_defaut=="true" ? "true" : "false")+",im_keytable="+(im_keytable=="" ? "null" : "'"+ValiderChaine(im_keytable)+"'" )+",im_keycle="+(im_keycle=="" ? "null" : "'"+ValiderChaine(im_keycle)+"'" )+",im_keydate="+(im_keydate=="" ? "null" : "'"+ValiderChaine(im_keydate)+"'" )+"";
 Req+=" where "+NomCleMaitre+"="+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la mise à jour");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Modèles
  TAPEZ ICI LE CODE DE LA REQUETE D'INSERTION
***************************************************/
function User_Insert_Modèles_Liste_des_modèles0(Compo_Maitre)
{

/*
***** INFOS ******

Nbr d'esclaves = 2

Id dans le tab: 207;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 208;
complexe
Nbr Jointure: 1;
    Joint n° 0 = lignemodele,mo_numero,mo_numero

******************
*/

 var Table="modele";
 var CleMaitre = TAB_COMPO_PPTES[205].NewCle;
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var mo_libelle=GetValAt(207);
 if (!ValiderChampsObligatoire(Table,"mo_libelle",TAB_GLOBAL_COMPO[207],mo_libelle,false))
 	return -1;
 if (!ValiderChampsType(Table,"mo_libelle",TAB_GLOBAL_COMPO[207],mo_libelle))
 	return -1;
 var Req="insert into "+Table+" ";
var TabInsertionEnPlus=new Array();
 Req+="("+NomCleMaitre+",mo_libelle"+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[0]:"")+")";
 Req+=" values ("+CleMaitre+","+(mo_libelle=="" ? "null" : "'"+ValiderChaine(mo_libelle)+"'" )+""+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[1]:"")+")";

 if (pgsql_update(Req)==0)
	alert("Echec lors de l'insertion");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Modèles
  TAPEZ ICI LE CODE DE LA REQUETE DE SUPPRESSION 
***************************************************/
function User_Delete_Modèles_Liste_des_modèles0(Compo_Maitre)
{
 var Table="modele";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var Req="delete from "+Table+" where "+NomCleMaitre+" = "+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la supression");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Modèles
  TAPEZ ICI LE CODE DE LA REQUETE DE MISE A JOUR 
***************************************************/
function User_Update_Modèles_Liste_des_modèles0(Compo_Maitre)
{
 var Table="modele";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var mo_libelle=GetValAt(207);
 if (!ValiderChampsObligatoire(Table,"mo_libelle",TAB_GLOBAL_COMPO[207],mo_libelle,false))
 	return -1;
 if (!ValiderChampsType(Table,"mo_libelle",TAB_GLOBAL_COMPO[207],mo_libelle))
 	return -1;
 var Req="update "+Table+" set ";
 Req+="mo_libelle="+(mo_libelle=="" ? "null" : "'"+ValiderChaine(mo_libelle)+"'" )+"";
 Req+=" where "+NomCleMaitre+"="+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la mise à jour");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Modèles
  TAPEZ ICI LE CODE DE LA REQUETE D'INSERTION
***************************************************/
function User_Insert_Modèles_Lignes_du_modèle_2(Compo_Maitre)
{

/*
***** INFOS ******

Nbr d'esclaves = 4

Id dans le tab: 213;
simple
Nbr Jointure: 1;
    Joint n° 0 = produit,pd_numero,pd_numero

Id dans le tab: 214;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 215;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 216;
simple
Nbr Jointure: PAS DE JOINTURE;

******************
*/

 var Table="lignemodele";
 var CleMaitre = TAB_COMPO_PPTES[208].NewCle;
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 /* COMPOSANT LISTE AVEC JOINTURE SIMPLE */
 var pd_numero=GetValAt(213);
 if (pd_numero=="-1")
    pd_numero="null";
 if (!ValiderChampsObligatoire(Table,"pd_numero",TAB_GLOBAL_COMPO[213],pd_numero,true))
 	return -1;
 var lm_montantht=GetValAt(214);
 if (!ValiderChampsObligatoire(Table,"lm_montantht",TAB_GLOBAL_COMPO[214],lm_montantht,false))
 	return -1;
 if (!ValiderChampsType(Table,"lm_montantht",TAB_GLOBAL_COMPO[214],lm_montantht))
 	return -1;
 var lm_montantttc=GetValAt(215);
 if (!ValiderChampsObligatoire(Table,"lm_montantttc",TAB_GLOBAL_COMPO[215],lm_montantttc,false))
 	return -1;
 if (!ValiderChampsType(Table,"lm_montantttc",TAB_GLOBAL_COMPO[215],lm_montantttc))
 	return -1;
 var lm_quantite=GetValAt(216);
 if (!ValiderChampsObligatoire(Table,"lm_quantite",TAB_GLOBAL_COMPO[216],lm_quantite,false))
 	return -1;
 if (!ValiderChampsType(Table,"lm_quantite",TAB_GLOBAL_COMPO[216],lm_quantite))
 	return -1;
 var Req="insert into "+Table+" ";
var TabInsertionEnPlus=new Array();
 Req+="("+NomCleMaitre+",mo_numero,pd_numero,lm_montantht,lm_montantttc,lm_quantite"+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[0]:"")+")";
 Req+=" values ("+CleMaitre+","+TAB_COMPO_PPTES[205].NewCle+","+pd_numero+","+(lm_montantht=="" ? "null" : "'"+ValiderChaine(lm_montantht)+"'" )+","+(lm_montantttc=="" ? "null" : "'"+ValiderChaine(lm_montantttc)+"'" )+","+(lm_quantite=="" ? "null" : "'"+ValiderChaine(lm_quantite)+"'" )+""+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[1]:"")+")";

 if (pgsql_update(Req)==0)
	alert("Echec lors de l'insertion");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Modèles
  TAPEZ ICI LE CODE DE LA REQUETE DE SUPPRESSION 
***************************************************/
function User_Delete_Modèles_Lignes_du_modèle_2(Compo_Maitre)
{
 var Table="lignemodele";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var Req="delete from "+Table+" where "+NomCleMaitre+" = "+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la supression");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Modèles
  TAPEZ ICI LE CODE DE LA REQUETE DE MISE A JOUR 
***************************************************/
function User_Update_Modèles_Lignes_du_modèle_2(Compo_Maitre)
{
 var Table="lignemodele";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var pd_numero=GetValAt(213);
 if (pd_numero=="-1")
    pd_numero="null";
 if (!ValiderChampsObligatoire(Table,"pd_numero",TAB_GLOBAL_COMPO[213],pd_numero,true))
 	return -1;
 var lm_montantht=GetValAt(214);
 if (!ValiderChampsObligatoire(Table,"lm_montantht",TAB_GLOBAL_COMPO[214],lm_montantht,false))
 	return -1;
 if (!ValiderChampsType(Table,"lm_montantht",TAB_GLOBAL_COMPO[214],lm_montantht))
 	return -1;
 var lm_montantttc=GetValAt(215);
 if (!ValiderChampsObligatoire(Table,"lm_montantttc",TAB_GLOBAL_COMPO[215],lm_montantttc,false))
 	return -1;
 if (!ValiderChampsType(Table,"lm_montantttc",TAB_GLOBAL_COMPO[215],lm_montantttc))
 	return -1;
 var lm_quantite=GetValAt(216);
 if (!ValiderChampsObligatoire(Table,"lm_quantite",TAB_GLOBAL_COMPO[216],lm_quantite,false))
 	return -1;
 if (!ValiderChampsType(Table,"lm_quantite",TAB_GLOBAL_COMPO[216],lm_quantite))
 	return -1;
 var Req="update "+Table+" set ";
 Req+="pd_numero="+pd_numero+",lm_montantht="+(lm_montantht=="" ? "null" : "'"+ValiderChaine(lm_montantht)+"'" )+",lm_montantttc="+(lm_montantttc=="" ? "null" : "'"+ValiderChaine(lm_montantttc)+"'" )+",lm_quantite="+(lm_quantite=="" ? "null" : "'"+ValiderChaine(lm_quantite)+"'" )+"";
 Req+=" where "+NomCleMaitre+"="+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la mise à jour");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Mode de réglements
  TAPEZ ICI LE CODE DE LA REQUETE D'INSERTION
***************************************************/
function User_Insert_Mode_de_réglements_Liste_des_modes_de_réglement0(Compo_Maitre)
{

/*
***** INFOS ******

Nbr d'esclaves = 4

Id dans le tab: 11;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 12;
simple
Nbr Jointure: 1;
    Joint n° 0 = comptegen,cg_numero,cg_numero

Id dans le tab: 13;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 14;
simple
Nbr Jointure: PAS DE JOINTURE;

******************
*/

 var Table="modereglement";
 var CleMaitre = TAB_COMPO_PPTES[8].NewCle;
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var mr_libelle=GetValAt(11);
 if (!ValiderChampsObligatoire(Table,"mr_libelle",TAB_GLOBAL_COMPO[11],mr_libelle,false))
 	return -1;
 if (!ValiderChampsType(Table,"mr_libelle",TAB_GLOBAL_COMPO[11],mr_libelle))
 	return -1;
 var cg_numero=GetValAt(12);
 if (cg_numero=="-1")
    cg_numero="null";
 if (!ValiderChampsObligatoire(Table,"cg_numero",TAB_GLOBAL_COMPO[12],cg_numero,true))
 	return -1;
 var mr_actif=GetValAt(13);
 if (!ValiderChampsObligatoire(Table,"mr_actif",TAB_GLOBAL_COMPO[13],mr_actif,false))
 	return -1;
 if (!ValiderChampsType(Table,"mr_actif",TAB_GLOBAL_COMPO[13],mr_actif))
 	return -1;
 var mr_description=GetValAt(14);
 if (!ValiderChampsObligatoire(Table,"mr_description",TAB_GLOBAL_COMPO[14],mr_description,false))
 	return -1;
 if (!ValiderChampsType(Table,"mr_description",TAB_GLOBAL_COMPO[14],mr_description))
 	return -1;
 var Req="insert into "+Table+" ";
var TabInsertionEnPlus=new Array();
 Req+="("+NomCleMaitre+",mr_libelle,cg_numero,mr_actif,mr_description"+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[0]:"")+")";
 Req+=" values ("+CleMaitre+","+(mr_libelle=="" ? "null" : "'"+ValiderChaine(mr_libelle)+"'" )+","+cg_numero+","+(mr_actif=="true" ? "true" : "false")+","+(mr_description=="" ? "null" : "'"+ValiderChaine(mr_description)+"'" )+""+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[1]:"")+")";

 if (pgsql_update(Req)==0)
	alert("Echec lors de l'insertion");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Mode de réglements
  TAPEZ ICI LE CODE DE LA REQUETE DE SUPPRESSION 
***************************************************/
function User_Delete_Mode_de_réglements_Liste_des_modes_de_réglement0(Compo_Maitre)
{
 var Table="modereglement";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var Req="delete from "+Table+" where "+NomCleMaitre+" = "+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la supression");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Mode de réglements
  TAPEZ ICI LE CODE DE LA REQUETE DE MISE A JOUR 
***************************************************/
function User_Update_Mode_de_réglements_Liste_des_modes_de_réglement0(Compo_Maitre)
{
 var Table="modereglement";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var mr_libelle=GetValAt(11);
 if (!ValiderChampsObligatoire(Table,"mr_libelle",TAB_GLOBAL_COMPO[11],mr_libelle,false))
 	return -1;
 if (!ValiderChampsType(Table,"mr_libelle",TAB_GLOBAL_COMPO[11],mr_libelle))
 	return -1;
 var cg_numero=GetValAt(12);
 if (cg_numero=="-1")
    cg_numero="null";
 if (!ValiderChampsObligatoire(Table,"cg_numero",TAB_GLOBAL_COMPO[12],cg_numero,true))
 	return -1;
 var mr_actif=GetValAt(13);
 if (!ValiderChampsObligatoire(Table,"mr_actif",TAB_GLOBAL_COMPO[13],mr_actif,false))
 	return -1;
 if (!ValiderChampsType(Table,"mr_actif",TAB_GLOBAL_COMPO[13],mr_actif))
 	return -1;
 var mr_description=GetValAt(14);
 if (!ValiderChampsObligatoire(Table,"mr_description",TAB_GLOBAL_COMPO[14],mr_description,false))
 	return -1;
 if (!ValiderChampsType(Table,"mr_description",TAB_GLOBAL_COMPO[14],mr_description))
 	return -1;
 var Req="update "+Table+" set ";
 Req+="mr_libelle="+(mr_libelle=="" ? "null" : "'"+ValiderChaine(mr_libelle)+"'" )+",cg_numero="+cg_numero+",mr_actif="+(mr_actif=="true" ? "true" : "false")+",mr_description="+(mr_description=="" ? "null" : "'"+ValiderChaine(mr_description)+"'" )+"";
 Req+=" where "+NomCleMaitre+"="+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la mise à jour");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Modes de répartition
  TAPEZ ICI LE CODE DE LA REQUETE D'INSERTION
***************************************************/
function User_Insert_Modes_de_répartition_Liste_des_modes_de_répartition0(Compo_Maitre)
{

/*
***** INFOS ******

Nbr d'esclaves = 5

Id dans le tab: 19;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 20;
simple
Nbr Jointure: 1;
    Joint n° 0 = comptegen,cg_numero,cg_numero

Id dans le tab: 21;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 22;
simple
Nbr Jointure: 1;
    Joint n° 0 = societe,mp_societe,so_numero

Id dans le tab: 23;
simple
Nbr Jointure: PAS DE JOINTURE;

******************
*/

 var Table="moderepartition";
 var CleMaitre = TAB_COMPO_PPTES[15].NewCle;
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var mp_libelle=GetValAt(19);
 if (!ValiderChampsObligatoire(Table,"mp_libelle",TAB_GLOBAL_COMPO[19],mp_libelle,false))
 	return -1;
 if (!ValiderChampsType(Table,"mp_libelle",TAB_GLOBAL_COMPO[19],mp_libelle))
 	return -1;
 var cg_numero=GetValAt(20);
 if (cg_numero=="-1")
    cg_numero="null";
 if (!ValiderChampsObligatoire(Table,"cg_numero",TAB_GLOBAL_COMPO[20],cg_numero,true))
 	return -1;
 var mp_actif=GetValAt(21);
 if (!ValiderChampsObligatoire(Table,"mp_actif",TAB_GLOBAL_COMPO[21],mp_actif,false))
 	return -1;
 if (!ValiderChampsType(Table,"mp_actif",TAB_GLOBAL_COMPO[21],mp_actif))
 	return -1;
 var mp_societe=GetValAt(22);
 if (mp_societe=="-1")
    mp_societe="null";
 if (!ValiderChampsObligatoire(Table,"mp_societe",TAB_GLOBAL_COMPO[22],mp_societe,true))
 	return -1;
 var mp_description=GetValAt(23);
 if (!ValiderChampsObligatoire(Table,"mp_description",TAB_GLOBAL_COMPO[23],mp_description,false))
 	return -1;
 if (!ValiderChampsType(Table,"mp_description",TAB_GLOBAL_COMPO[23],mp_description))
 	return -1;
 var Req="insert into "+Table+" ";
var TabInsertionEnPlus=new Array();
 Req+="("+NomCleMaitre+",mp_libelle,cg_numero,mp_actif,mp_societe,mp_description"+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[0]:"")+")";
 Req+=" values ("+CleMaitre+","+(mp_libelle=="" ? "null" : "'"+ValiderChaine(mp_libelle)+"'" )+","+cg_numero+","+(mp_actif=="true" ? "true" : "false")+","+mp_societe+","+(mp_description=="" ? "null" : "'"+ValiderChaine(mp_description)+"'" )+""+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[1]:"")+")";

 if (pgsql_update(Req)==0)
	alert("Echec lors de l'insertion");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Modes de répartition
  TAPEZ ICI LE CODE DE LA REQUETE DE SUPPRESSION 
***************************************************/
function User_Delete_Modes_de_répartition_Liste_des_modes_de_répartition0(Compo_Maitre)
{
 var Table="moderepartition";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var Req="delete from "+Table+" where "+NomCleMaitre+" = "+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la supression");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Modes de répartition
  TAPEZ ICI LE CODE DE LA REQUETE DE MISE A JOUR 
***************************************************/
function User_Update_Modes_de_répartition_Liste_des_modes_de_répartition0(Compo_Maitre)
{
 var Table="moderepartition";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var mp_libelle=GetValAt(19);
 if (!ValiderChampsObligatoire(Table,"mp_libelle",TAB_GLOBAL_COMPO[19],mp_libelle,false))
 	return -1;
 if (!ValiderChampsType(Table,"mp_libelle",TAB_GLOBAL_COMPO[19],mp_libelle))
 	return -1;
 var cg_numero=GetValAt(20);
 if (cg_numero=="-1")
    cg_numero="null";
 if (!ValiderChampsObligatoire(Table,"cg_numero",TAB_GLOBAL_COMPO[20],cg_numero,true))
 	return -1;
 var mp_actif=GetValAt(21);
 if (!ValiderChampsObligatoire(Table,"mp_actif",TAB_GLOBAL_COMPO[21],mp_actif,false))
 	return -1;
 if (!ValiderChampsType(Table,"mp_actif",TAB_GLOBAL_COMPO[21],mp_actif))
 	return -1;
 var mp_societe=GetValAt(22);
 if (mp_societe=="-1")
    mp_societe="null";
 if (!ValiderChampsObligatoire(Table,"mp_societe",TAB_GLOBAL_COMPO[22],mp_societe,true))
 	return -1;
 var mp_description=GetValAt(23);
 if (!ValiderChampsObligatoire(Table,"mp_description",TAB_GLOBAL_COMPO[23],mp_description,false))
 	return -1;
 if (!ValiderChampsType(Table,"mp_description",TAB_GLOBAL_COMPO[23],mp_description))
 	return -1;
 var Req="update "+Table+" set ";
 Req+="mp_libelle="+(mp_libelle=="" ? "null" : "'"+ValiderChaine(mp_libelle)+"'" )+",cg_numero="+cg_numero+",mp_actif="+(mp_actif=="true" ? "true" : "false")+",mp_societe="+mp_societe+",mp_description="+(mp_description=="" ? "null" : "'"+ValiderChaine(mp_description)+"'" )+"";
 Req+=" where "+NomCleMaitre+"="+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la mise à jour");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Périodes
  TAPEZ ICI LE CODE DE LA REQUETE D'INSERTION
***************************************************/
function User_Insert_Périodes_Liste_des_périodes0(Compo_Maitre)
{

/*
***** INFOS ******

Nbr d'esclaves = 2

Id dans le tab: 197;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 198;
simple
Nbr Jointure: PAS DE JOINTURE;

******************
*/

 var Table="periode";
 var CleMaitre = TAB_COMPO_PPTES[194].NewCle;
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var po_debut=GetValAt(197);
 if (!ValiderChampsObligatoire(Table,"po_debut",TAB_GLOBAL_COMPO[197],po_debut,false))
 	return -1;
 if (!ValiderChampsType(Table,"po_debut",TAB_GLOBAL_COMPO[197],po_debut))
 	return -1;
 var po_fin=GetValAt(198);
 if (!ValiderChampsObligatoire(Table,"po_fin",TAB_GLOBAL_COMPO[198],po_fin,false))
 	return -1;
 if (!ValiderChampsType(Table,"po_fin",TAB_GLOBAL_COMPO[198],po_fin))
 	return -1;
 var Req="insert into "+Table+" ";
var TabInsertionEnPlus=new Array();
 Req+="("+NomCleMaitre+",po_debut,po_fin"+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[0]:"")+")";
 Req+=" values ("+CleMaitre+","+(po_debut=="" ? "null" : "'"+ValiderChaine(po_debut)+"'" )+","+(po_fin=="" ? "null" : "'"+ValiderChaine(po_fin)+"'" )+""+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[1]:"")+")";

 if (pgsql_update(Req)==0)
	alert("Echec lors de l'insertion");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Périodes
  TAPEZ ICI LE CODE DE LA REQUETE DE SUPPRESSION 
***************************************************/
function User_Delete_Périodes_Liste_des_périodes0(Compo_Maitre)
{
 var Table="periode";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var Req="delete from "+Table+" where "+NomCleMaitre+" = "+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la supression");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Périodes
  TAPEZ ICI LE CODE DE LA REQUETE DE MISE A JOUR 
***************************************************/
function User_Update_Périodes_Liste_des_périodes0(Compo_Maitre)
{
 var Table="periode";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var po_debut=GetValAt(197);
 if (!ValiderChampsObligatoire(Table,"po_debut",TAB_GLOBAL_COMPO[197],po_debut,false))
 	return -1;
 if (!ValiderChampsType(Table,"po_debut",TAB_GLOBAL_COMPO[197],po_debut))
 	return -1;
 var po_fin=GetValAt(198);
 if (!ValiderChampsObligatoire(Table,"po_fin",TAB_GLOBAL_COMPO[198],po_fin,false))
 	return -1;
 if (!ValiderChampsType(Table,"po_fin",TAB_GLOBAL_COMPO[198],po_fin))
 	return -1;
 var Req="update "+Table+" set ";
 Req+="po_debut="+(po_debut=="" ? "null" : "'"+ValiderChaine(po_debut)+"'" )+",po_fin="+(po_fin=="" ? "null" : "'"+ValiderChaine(po_fin)+"'" )+"";
 Req+=" where "+NomCleMaitre+"="+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la mise à jour");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Préfixes
  TAPEZ ICI LE CODE DE LA REQUETE D'INSERTION
***************************************************/
function User_Insert_Préfixes_Liste_des_préfixes0(Compo_Maitre)
{

/*
***** INFOS ******

Nbr d'esclaves = 1

Id dans le tab: 204;
simple
Nbr Jointure: PAS DE JOINTURE;

******************
*/

 var Table="prefixe";
 var CleMaitre = TAB_COMPO_PPTES[202].NewCle;
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var pf_nom=GetValAt(204);
 if (!ValiderChampsObligatoire(Table,"pf_nom",TAB_GLOBAL_COMPO[204],pf_nom,false))
 	return -1;
 if (!ValiderChampsType(Table,"pf_nom",TAB_GLOBAL_COMPO[204],pf_nom))
 	return -1;
 var Req="insert into "+Table+" ";
var TabInsertionEnPlus=new Array();
 Req+="("+NomCleMaitre+",pf_nom"+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[0]:"")+")";
 Req+=" values ("+CleMaitre+","+(pf_nom=="" ? "null" : "'"+ValiderChaine(pf_nom)+"'" )+""+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[1]:"")+")";

 if (pgsql_update(Req)==0)
	alert("Echec lors de l'insertion");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Préfixes
  TAPEZ ICI LE CODE DE LA REQUETE DE SUPPRESSION 
***************************************************/
function User_Delete_Préfixes_Liste_des_préfixes0(Compo_Maitre)
{
 var Table="prefixe";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var Req="delete from "+Table+" where "+NomCleMaitre+" = "+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la supression");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Préfixes
  TAPEZ ICI LE CODE DE LA REQUETE DE MISE A JOUR 
***************************************************/
function User_Update_Préfixes_Liste_des_préfixes0(Compo_Maitre)
{
 var Table="prefixe";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var pf_nom=GetValAt(204);
 if (!ValiderChampsObligatoire(Table,"pf_nom",TAB_GLOBAL_COMPO[204],pf_nom,false))
 	return -1;
 if (!ValiderChampsType(Table,"pf_nom",TAB_GLOBAL_COMPO[204],pf_nom))
 	return -1;
 var Req="update "+Table+" set ";
 Req+="pf_nom="+(pf_nom=="" ? "null" : "'"+ValiderChaine(pf_nom)+"'" )+"";
 Req+=" where "+NomCleMaitre+"="+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la mise à jour");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Produits
  TAPEZ ICI LE CODE DE LA REQUETE D'INSERTION
***************************************************/
function User_Insert_Produits_Liste_des_produits0(Compo_Maitre)
{

/*
***** INFOS ******

Nbr d'esclaves = 6

Id dans le tab: 161;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 162;
simple
Nbr Jointure: 1;
    Joint n° 0 = journal,jo_numero,jo_numero

Id dans le tab: 163;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 164;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 165;
complexe
Nbr Jointure: 1;
    Joint n° 0 = prix,pd_numero,pd_numero

Id dans le tab: 175;
complexe
Nbr Jointure: 1;
    Joint n° 0 = compteproduit,pd_numero,pd_numero

******************
*/

 var Table="produit";
 var CleMaitre = TAB_COMPO_PPTES[158].NewCle;
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var pd_libelle=GetValAt(161);
 if (!ValiderChampsObligatoire(Table,"pd_libelle",TAB_GLOBAL_COMPO[161],pd_libelle,false))
 	return -1;
 if (!ValiderChampsType(Table,"pd_libelle",TAB_GLOBAL_COMPO[161],pd_libelle))
 	return -1;
 var jo_numero=GetValAt(162);
 if (jo_numero=="-1")
    jo_numero="null";
 if (!ValiderChampsObligatoire(Table,"jo_numero",TAB_GLOBAL_COMPO[162],jo_numero,true))
 	return -1;
 var pd_actif=GetValAt(163);
 if (!ValiderChampsObligatoire(Table,"pd_actif",TAB_GLOBAL_COMPO[163],pd_actif,false))
 	return -1;
 if (!ValiderChampsType(Table,"pd_actif",TAB_GLOBAL_COMPO[163],pd_actif))
 	return -1;
 var pd_reduction=GetValAt(164);
 if (!ValiderChampsObligatoire(Table,"pd_reduction",TAB_GLOBAL_COMPO[164],pd_reduction,false))
 	return -1;
 if (!ValiderChampsType(Table,"pd_reduction",TAB_GLOBAL_COMPO[164],pd_reduction))
 	return -1;
 var Req="insert into "+Table+" ";
var TabInsertionEnPlus=new Array();
 Req+="("+NomCleMaitre+",pd_libelle,jo_numero,pd_actif,pd_reduction"+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[0]:"")+")";
 Req+=" values ("+CleMaitre+","+(pd_libelle=="" ? "null" : "'"+ValiderChaine(pd_libelle)+"'" )+","+jo_numero+","+(pd_actif=="true" ? "true" : "false")+","+(pd_reduction=="true" ? "true" : "false")+""+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[1]:"")+")";

 if (pgsql_update(Req)==0)
	alert("Echec lors de l'insertion");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Produits
  TAPEZ ICI LE CODE DE LA REQUETE DE SUPPRESSION 
***************************************************/
function User_Delete_Produits_Liste_des_produits0(Compo_Maitre)
{
 var Table="produit";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var Req="delete from "+Table+" where "+NomCleMaitre+" = "+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la supression");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Produits
  TAPEZ ICI LE CODE DE LA REQUETE DE MISE A JOUR 
***************************************************/
function User_Update_Produits_Liste_des_produits0(Compo_Maitre)
{
 var Table="produit";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var pd_libelle=GetValAt(161);
 if (!ValiderChampsObligatoire(Table,"pd_libelle",TAB_GLOBAL_COMPO[161],pd_libelle,false))
 	return -1;
 if (!ValiderChampsType(Table,"pd_libelle",TAB_GLOBAL_COMPO[161],pd_libelle))
 	return -1;
 var jo_numero=GetValAt(162);
 if (jo_numero=="-1")
    jo_numero="null";
 if (!ValiderChampsObligatoire(Table,"jo_numero",TAB_GLOBAL_COMPO[162],jo_numero,true))
 	return -1;
 var pd_actif=GetValAt(163);
 if (!ValiderChampsObligatoire(Table,"pd_actif",TAB_GLOBAL_COMPO[163],pd_actif,false))
 	return -1;
 if (!ValiderChampsType(Table,"pd_actif",TAB_GLOBAL_COMPO[163],pd_actif))
 	return -1;
 var pd_reduction=GetValAt(164);
 if (!ValiderChampsObligatoire(Table,"pd_reduction",TAB_GLOBAL_COMPO[164],pd_reduction,false))
 	return -1;
 if (!ValiderChampsType(Table,"pd_reduction",TAB_GLOBAL_COMPO[164],pd_reduction))
 	return -1;
 var Req="update "+Table+" set ";
 Req+="pd_libelle="+(pd_libelle=="" ? "null" : "'"+ValiderChaine(pd_libelle)+"'" )+",jo_numero="+jo_numero+",pd_actif="+(pd_actif=="true" ? "true" : "false")+",pd_reduction="+(pd_reduction=="true" ? "true" : "false")+"";
 Req+=" where "+NomCleMaitre+"="+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la mise à jour");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Produits
  TAPEZ ICI LE CODE DE LA REQUETE D'INSERTION
***************************************************/
function User_Insert_Produits_Prix_5(Compo_Maitre)
{

/*
***** INFOS ******

Nbr d'esclaves = 5

Id dans le tab: 170;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 171;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 172;
simple
Nbr Jointure: 1;
    Joint n° 0 = tva,tv_numero,tv_numero

Id dans le tab: 173;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 174;
simple
Nbr Jointure: PAS DE JOINTURE;

******************
*/

 var Table="prix";
 var CleMaitre = TAB_COMPO_PPTES[165].NewCle;
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 /* COMPOSANT LISTE AVEC JOINTURE SIMPLE */
 var px_tarifht=GetValAt(170);
 if (!ValiderChampsObligatoire(Table,"px_tarifht",TAB_GLOBAL_COMPO[170],px_tarifht,false))
 	return -1;
 if (!ValiderChampsType(Table,"px_tarifht",TAB_GLOBAL_COMPO[170],px_tarifht))
 	return -1;
 var px_tarifttc=GetValAt(171);
 if (!ValiderChampsObligatoire(Table,"px_tarifttc",TAB_GLOBAL_COMPO[171],px_tarifttc,false))
 	return -1;
 if (!ValiderChampsType(Table,"px_tarifttc",TAB_GLOBAL_COMPO[171],px_tarifttc))
 	return -1;
 var tv_numero=GetValAt(172);
 if (tv_numero=="-1")
    tv_numero="null";
 if (!ValiderChampsObligatoire(Table,"tv_numero",TAB_GLOBAL_COMPO[172],tv_numero,true))
 	return -1;
 var px_datedebut=GetValAt(173);
 if (!ValiderChampsObligatoire(Table,"px_datedebut",TAB_GLOBAL_COMPO[173],px_datedebut,false))
 	return -1;
 if (!ValiderChampsType(Table,"px_datedebut",TAB_GLOBAL_COMPO[173],px_datedebut))
 	return -1;
 var px_actif=GetValAt(174);
 if (!ValiderChampsObligatoire(Table,"px_actif",TAB_GLOBAL_COMPO[174],px_actif,false))
 	return -1;
 if (!ValiderChampsType(Table,"px_actif",TAB_GLOBAL_COMPO[174],px_actif))
 	return -1;
 var Req="insert into "+Table+" ";
var TabInsertionEnPlus=new Array();
 Req+="("+NomCleMaitre+",pd_numero,px_tarifht,px_tarifttc,tv_numero,px_datedebut,px_actif"+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[0]:"")+")";
 Req+=" values ("+CleMaitre+","+TAB_COMPO_PPTES[158].NewCle+","+(px_tarifht=="" ? "null" : "'"+ValiderChaine(px_tarifht)+"'" )+","+(px_tarifttc=="" ? "null" : "'"+ValiderChaine(px_tarifttc)+"'" )+","+tv_numero+","+(px_datedebut=="" ? "null" : "'"+ValiderChaine(px_datedebut)+"'" )+","+(px_actif=="true" ? "true" : "false")+""+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[1]:"")+")";

 if (pgsql_update(Req)==0)
	alert("Echec lors de l'insertion");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Produits
  TAPEZ ICI LE CODE DE LA REQUETE DE SUPPRESSION 
***************************************************/
function User_Delete_Produits_Prix_5(Compo_Maitre)
{
 var Table="prix";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var Req="delete from "+Table+" where "+NomCleMaitre+" = "+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la supression");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Produits
  TAPEZ ICI LE CODE DE LA REQUETE DE MISE A JOUR 
***************************************************/
function User_Update_Produits_Prix_5(Compo_Maitre)
{
 var Table="prix";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var px_tarifht=GetValAt(170);
 if (!ValiderChampsObligatoire(Table,"px_tarifht",TAB_GLOBAL_COMPO[170],px_tarifht,false))
 	return -1;
 if (!ValiderChampsType(Table,"px_tarifht",TAB_GLOBAL_COMPO[170],px_tarifht))
 	return -1;
 var px_tarifttc=GetValAt(171);
 if (!ValiderChampsObligatoire(Table,"px_tarifttc",TAB_GLOBAL_COMPO[171],px_tarifttc,false))
 	return -1;
 if (!ValiderChampsType(Table,"px_tarifttc",TAB_GLOBAL_COMPO[171],px_tarifttc))
 	return -1;
 var tv_numero=GetValAt(172);
 if (tv_numero=="-1")
    tv_numero="null";
 if (!ValiderChampsObligatoire(Table,"tv_numero",TAB_GLOBAL_COMPO[172],tv_numero,true))
 	return -1;
 var px_datedebut=GetValAt(173);
 if (!ValiderChampsObligatoire(Table,"px_datedebut",TAB_GLOBAL_COMPO[173],px_datedebut,false))
 	return -1;
 if (!ValiderChampsType(Table,"px_datedebut",TAB_GLOBAL_COMPO[173],px_datedebut))
 	return -1;
 var px_actif=GetValAt(174);
 if (!ValiderChampsObligatoire(Table,"px_actif",TAB_GLOBAL_COMPO[174],px_actif,false))
 	return -1;
 if (!ValiderChampsType(Table,"px_actif",TAB_GLOBAL_COMPO[174],px_actif))
 	return -1;
 var Req="update "+Table+" set ";
 Req+="px_tarifht="+(px_tarifht=="" ? "null" : "'"+ValiderChaine(px_tarifht)+"'" )+",px_tarifttc="+(px_tarifttc=="" ? "null" : "'"+ValiderChaine(px_tarifttc)+"'" )+",tv_numero="+tv_numero+",px_datedebut="+(px_datedebut=="" ? "null" : "'"+ValiderChaine(px_datedebut)+"'" )+",px_actif="+(px_actif=="true" ? "true" : "false")+"";
 Req+=" where "+NomCleMaitre+"="+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la mise à jour");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Produits
  TAPEZ ICI LE CODE DE LA REQUETE D'INSERTION
***************************************************/
function User_Insert_Produits_Comptes_généraux_11(Compo_Maitre)
{

/*
***** INFOS ******

Nbr d'esclaves = 2

Id dans le tab: 178;
simple
Nbr Jointure: 1;
    Joint n° 0 = comptegen,cg_numero,cg_numero

Id dans le tab: 179;
simple
Nbr Jointure: PAS DE JOINTURE;

******************
*/

 var Table="compteproduit";
 var CleMaitre = TAB_COMPO_PPTES[175].NewCle;
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 /* COMPOSANT LISTE AVEC JOINTURE SIMPLE */
 var cg_numero=GetValAt(178);
 if (cg_numero=="-1")
    cg_numero="null";
 if (!ValiderChampsObligatoire(Table,"cg_numero",TAB_GLOBAL_COMPO[178],cg_numero,true))
 	return -1;
 var ci_actif=GetValAt(179);
 if (!ValiderChampsObligatoire(Table,"ci_actif",TAB_GLOBAL_COMPO[179],ci_actif,false))
 	return -1;
 if (!ValiderChampsType(Table,"ci_actif",TAB_GLOBAL_COMPO[179],ci_actif))
 	return -1;
 var Req="insert into "+Table+" ";
var TabInsertionEnPlus=new Array();
 Req+="("+NomCleMaitre+",pd_numero,cg_numero,ci_actif"+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[0]:"")+")";
 Req+=" values ("+CleMaitre+","+TAB_COMPO_PPTES[158].NewCle+","+cg_numero+","+(ci_actif=="true" ? "true" : "false")+""+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[1]:"")+")";

 if (pgsql_update(Req)==0)
	alert("Echec lors de l'insertion");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Produits
  TAPEZ ICI LE CODE DE LA REQUETE DE SUPPRESSION 
***************************************************/
function User_Delete_Produits_Comptes_généraux_11(Compo_Maitre)
{
 var Table="compteproduit";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var Req="delete from "+Table+" where "+NomCleMaitre+" = "+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la supression");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Produits
  TAPEZ ICI LE CODE DE LA REQUETE DE MISE A JOUR 
***************************************************/
function User_Update_Produits_Comptes_généraux_11(Compo_Maitre)
{
 var Table="compteproduit";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var cg_numero=GetValAt(178);
 if (cg_numero=="-1")
    cg_numero="null";
 if (!ValiderChampsObligatoire(Table,"cg_numero",TAB_GLOBAL_COMPO[178],cg_numero,true))
 	return -1;
 var ci_actif=GetValAt(179);
 if (!ValiderChampsObligatoire(Table,"ci_actif",TAB_GLOBAL_COMPO[179],ci_actif,false))
 	return -1;
 if (!ValiderChampsType(Table,"ci_actif",TAB_GLOBAL_COMPO[179],ci_actif))
 	return -1;
 var Req="update "+Table+" set ";
 Req+="cg_numero="+cg_numero+",ci_actif="+(ci_actif=="true" ? "true" : "false")+"";
 Req+=" where "+NomCleMaitre+"="+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la mise à jour");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Responsabilités
  TAPEZ ICI LE CODE DE LA REQUETE D'INSERTION
***************************************************/
function User_Insert_Responsabilités_Responsabilités0(Compo_Maitre)
{

/*
***** INFOS ******

Nbr d'esclaves = 3

Id dans le tab: 147;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 148;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 149;
simple
Nbr Jointure: PAS DE JOINTURE;

******************
*/

 var Table="responsabilite";
 var CleMaitre = TAB_COMPO_PPTES[143].NewCle;
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var re_code=GetValAt(147);
 if (!ValiderChampsObligatoire(Table,"re_code",TAB_GLOBAL_COMPO[147],re_code,false))
 	return -1;
 if (!ValiderChampsType(Table,"re_code",TAB_GLOBAL_COMPO[147],re_code))
 	return -1;
 var re_nom=GetValAt(148);
 if (!ValiderChampsObligatoire(Table,"re_nom",TAB_GLOBAL_COMPO[148],re_nom,false))
 	return -1;
 if (!ValiderChampsType(Table,"re_nom",TAB_GLOBAL_COMPO[148],re_nom))
 	return -1;
 var re_famille=GetValAt(149);
 if (!ValiderChampsObligatoire(Table,"re_famille",TAB_GLOBAL_COMPO[149],re_famille,false))
 	return -1;
 if (!ValiderChampsType(Table,"re_famille",TAB_GLOBAL_COMPO[149],re_famille))
 	return -1;
 var Req="insert into "+Table+" ";
var TabInsertionEnPlus=new Array();
 Req+="("+NomCleMaitre+",re_code,re_nom,re_famille"+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[0]:"")+")";
 Req+=" values ("+CleMaitre+","+(re_code=="" ? "null" : "'"+ValiderChaine(re_code)+"'" )+","+(re_nom=="" ? "null" : "'"+ValiderChaine(re_nom)+"'" )+","+(re_famille=="" ? "null" : "'"+ValiderChaine(re_famille)+"'" )+""+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[1]:"")+")";

 if (pgsql_update(Req)==0)
	alert("Echec lors de l'insertion");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Responsabilités
  TAPEZ ICI LE CODE DE LA REQUETE DE SUPPRESSION 
***************************************************/
function User_Delete_Responsabilités_Responsabilités0(Compo_Maitre)
{
 var Table="responsabilite";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var Req="delete from "+Table+" where "+NomCleMaitre+" = "+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la supression");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Responsabilités
  TAPEZ ICI LE CODE DE LA REQUETE DE MISE A JOUR 
***************************************************/
function User_Update_Responsabilités_Responsabilités0(Compo_Maitre)
{
 var Table="responsabilite";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var re_code=GetValAt(147);
 if (!ValiderChampsObligatoire(Table,"re_code",TAB_GLOBAL_COMPO[147],re_code,false))
 	return -1;
 if (!ValiderChampsType(Table,"re_code",TAB_GLOBAL_COMPO[147],re_code))
 	return -1;
 var re_nom=GetValAt(148);
 if (!ValiderChampsObligatoire(Table,"re_nom",TAB_GLOBAL_COMPO[148],re_nom,false))
 	return -1;
 if (!ValiderChampsType(Table,"re_nom",TAB_GLOBAL_COMPO[148],re_nom))
 	return -1;
 var re_famille=GetValAt(149);
 if (!ValiderChampsObligatoire(Table,"re_famille",TAB_GLOBAL_COMPO[149],re_famille,false))
 	return -1;
 if (!ValiderChampsType(Table,"re_famille",TAB_GLOBAL_COMPO[149],re_famille))
 	return -1;
 var Req="update "+Table+" set ";
 Req+="re_code="+(re_code=="" ? "null" : "'"+ValiderChaine(re_code)+"'" )+",re_nom="+(re_nom=="" ? "null" : "'"+ValiderChaine(re_nom)+"'" )+",re_famille="+(re_famille=="" ? "null" : "'"+ValiderChaine(re_famille)+"'" )+"";
 Req+=" where "+NomCleMaitre+"="+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la mise à jour");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Services
  TAPEZ ICI LE CODE DE LA REQUETE D'INSERTION
***************************************************/
function User_Insert_Services_Liste_des_services0(Compo_Maitre)
{

/*
***** INFOS ******

Nbr d'esclaves = 3

Id dans le tab: 71;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 72;
simple
Nbr Jointure: 1;
    Joint n° 0 = agent,se_agent,ag_numero

Id dans le tab: 73;
complexe
Nbr Jointure: 1;
    Joint n° 0 = employe,se_numero,em_service

******************
*/

 var Table="service";
 var CleMaitre = TAB_COMPO_PPTES[67].NewCle;
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var se_nom=GetValAt(71);
 if (!ValiderChampsObligatoire(Table,"se_nom",TAB_GLOBAL_COMPO[71],se_nom,false))
 	return -1;
 if (!ValiderChampsType(Table,"se_nom",TAB_GLOBAL_COMPO[71],se_nom))
 	return -1;
 var se_agent=GetValAt(72);
 if (se_agent=="-1")
    se_agent="null";
 if (!ValiderChampsObligatoire(Table,"se_agent",TAB_GLOBAL_COMPO[72],se_agent,true))
 	return -1;
 var Req="insert into "+Table+" ";
var TabInsertionEnPlus=new Array();
var Asso11=false;
var TabAsso11=new Array();
var CompoLie = GetSQLCompoAt(64);
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
 Req+="("+NomCleMaitre+",se_nom,se_agent"+(Asso11?","+TabAsso11[0]:"")+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[0]:"")+")";
 Req+=" values ("+CleMaitre+","+(se_nom=="" ? "null" : "'"+ValiderChaine(se_nom)+"'" )+","+se_agent+""+(Asso11?","+TabAsso11[1]:"")+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[1]:"")+")";

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
  REQUETES UTILSATEUR : Onglet : Services
  TAPEZ ICI LE CODE DE LA REQUETE DE SUPPRESSION 
***************************************************/
function User_Delete_Services_Liste_des_services0(Compo_Maitre)
{
 var Table="service";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var Req="delete from "+Table+" where "+NomCleMaitre+" = "+CleMaitre;

var CompoLie = GetSQLCompoAt(64);
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
  REQUETES UTILSATEUR : Onglet : Services
  TAPEZ ICI LE CODE DE LA REQUETE DE MISE A JOUR 
***************************************************/
function User_Update_Services_Liste_des_services0(Compo_Maitre)
{
 var Table="service";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var se_nom=GetValAt(71);
 if (!ValiderChampsObligatoire(Table,"se_nom",TAB_GLOBAL_COMPO[71],se_nom,false))
 	return -1;
 if (!ValiderChampsType(Table,"se_nom",TAB_GLOBAL_COMPO[71],se_nom))
 	return -1;
 var se_agent=GetValAt(72);
 if (se_agent=="-1")
    se_agent="null";
 if (!ValiderChampsObligatoire(Table,"se_agent",TAB_GLOBAL_COMPO[72],se_agent,true))
 	return -1;
 var Req="update "+Table+" set ";
 Req+="se_nom="+(se_nom=="" ? "null" : "'"+ValiderChaine(se_nom)+"'" )+",se_agent="+se_agent+"";
 Req+=" where "+NomCleMaitre+"="+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la mise à jour");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Sociétés
  TAPEZ ICI LE CODE DE LA REQUETE D'INSERTION
***************************************************/
function User_Insert_Sociétés_Liste_des_sociétés0(Compo_Maitre)
{

/*
***** INFOS ******

Nbr d'esclaves = 6

Id dans le tab: 59;
simple
Nbr Jointure: 1;
    Joint n° 0 = typesociete,ts_numero,ts_numero

Id dans le tab: 60;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 61;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 62;
simple
Nbr Jointure: 1;
    Joint n° 0 = personne,pe_numero,pe_numero

Id dans le tab: 63;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 64;
complexe
Nbr Jointure: 1;
    Joint n° 0 = service,so_numero,se_societe

******************
*/

 var Table="societe";
 var CleMaitre = TAB_COMPO_PPTES[56].NewCle;
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var ts_numero=GetValAt(59);
 if (ts_numero=="-1")
    ts_numero="null";
 if (!ValiderChampsObligatoire(Table,"ts_numero",TAB_GLOBAL_COMPO[59],ts_numero,true))
 	return -1;
 var so_libelle=GetValAt(60);
 if (!ValiderChampsObligatoire(Table,"so_libelle",TAB_GLOBAL_COMPO[60],so_libelle,false))
 	return -1;
 if (!ValiderChampsType(Table,"so_libelle",TAB_GLOBAL_COMPO[60],so_libelle))
 	return -1;
 var so_abbrev=GetValAt(61);
 if (!ValiderChampsObligatoire(Table,"so_abbrev",TAB_GLOBAL_COMPO[61],so_abbrev,false))
 	return -1;
 if (!ValiderChampsType(Table,"so_abbrev",TAB_GLOBAL_COMPO[61],so_abbrev))
 	return -1;
 var pe_numero=GetValAt(62);
 if (pe_numero=="-1")
    pe_numero="null";
 if (!ValiderChampsObligatoire(Table,"pe_numero",TAB_GLOBAL_COMPO[62],pe_numero,true))
 	return -1;
 var so_detail=GetValAt(63);
 if (!ValiderChampsObligatoire(Table,"so_detail",TAB_GLOBAL_COMPO[63],so_detail,false))
 	return -1;
 if (!ValiderChampsType(Table,"so_detail",TAB_GLOBAL_COMPO[63],so_detail))
 	return -1;
 var Req="insert into "+Table+" ";
var TabInsertionEnPlus=new Array();
 Req+="("+NomCleMaitre+",ts_numero,so_libelle,so_abbrev,pe_numero,so_detail"+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[0]:"")+")";
 Req+=" values ("+CleMaitre+","+ts_numero+","+(so_libelle=="" ? "null" : "'"+ValiderChaine(so_libelle)+"'" )+","+(so_abbrev=="" ? "null" : "'"+ValiderChaine(so_abbrev)+"'" )+","+pe_numero+","+(so_detail=="" ? "null" : "'"+ValiderChaine(so_detail)+"'" )+""+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[1]:"")+")";

 if (pgsql_update(Req)==0)
	alert("Echec lors de l'insertion");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Sociétés
  TAPEZ ICI LE CODE DE LA REQUETE DE SUPPRESSION 
***************************************************/
function User_Delete_Sociétés_Liste_des_sociétés0(Compo_Maitre)
{
 var Table="societe";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var Req="delete from "+Table+" where "+NomCleMaitre+" = "+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la supression");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Sociétés
  TAPEZ ICI LE CODE DE LA REQUETE DE MISE A JOUR 
***************************************************/
function User_Update_Sociétés_Liste_des_sociétés0(Compo_Maitre)
{
 var Table="societe";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var ts_numero=GetValAt(59);
 if (ts_numero=="-1")
    ts_numero="null";
 if (!ValiderChampsObligatoire(Table,"ts_numero",TAB_GLOBAL_COMPO[59],ts_numero,true))
 	return -1;
 var so_libelle=GetValAt(60);
 if (!ValiderChampsObligatoire(Table,"so_libelle",TAB_GLOBAL_COMPO[60],so_libelle,false))
 	return -1;
 if (!ValiderChampsType(Table,"so_libelle",TAB_GLOBAL_COMPO[60],so_libelle))
 	return -1;
 var so_abbrev=GetValAt(61);
 if (!ValiderChampsObligatoire(Table,"so_abbrev",TAB_GLOBAL_COMPO[61],so_abbrev,false))
 	return -1;
 if (!ValiderChampsType(Table,"so_abbrev",TAB_GLOBAL_COMPO[61],so_abbrev))
 	return -1;
 var pe_numero=GetValAt(62);
 if (pe_numero=="-1")
    pe_numero="null";
 if (!ValiderChampsObligatoire(Table,"pe_numero",TAB_GLOBAL_COMPO[62],pe_numero,true))
 	return -1;
 var so_detail=GetValAt(63);
 if (!ValiderChampsObligatoire(Table,"so_detail",TAB_GLOBAL_COMPO[63],so_detail,false))
 	return -1;
 if (!ValiderChampsType(Table,"so_detail",TAB_GLOBAL_COMPO[63],so_detail))
 	return -1;
 var Req="update "+Table+" set ";
 Req+="ts_numero="+ts_numero+",so_libelle="+(so_libelle=="" ? "null" : "'"+ValiderChaine(so_libelle)+"'" )+",so_abbrev="+(so_abbrev=="" ? "null" : "'"+ValiderChaine(so_abbrev)+"'" )+",pe_numero="+pe_numero+",so_detail="+(so_detail=="" ? "null" : "'"+ValiderChaine(so_detail)+"'" )+"";
 Req+=" where "+NomCleMaitre+"="+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la mise à jour");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : TVA
  TAPEZ ICI LE CODE DE LA REQUETE D'INSERTION
***************************************************/
function User_Insert_TVA_Liste_des_T_V_A_0(Compo_Maitre)
{

/*
***** INFOS ******

Nbr d'esclaves = 4

Id dans le tab: 154;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 155;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 156;
simple
Nbr Jointure: 1;
    Joint n° 0 = comptegen,cg_numero,cg_numero

Id dans le tab: 157;
simple
Nbr Jointure: PAS DE JOINTURE;

******************
*/

 var Table="tva";
 var CleMaitre = TAB_COMPO_PPTES[150].NewCle;
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var tv_taux=GetValAt(154);
 if (!ValiderChampsObligatoire(Table,"tv_taux",TAB_GLOBAL_COMPO[154],tv_taux,false))
 	return -1;
 if (!ValiderChampsType(Table,"tv_taux",TAB_GLOBAL_COMPO[154],tv_taux))
 	return -1;
 var tv_code=GetValAt(155);
 if (!ValiderChampsObligatoire(Table,"tv_code",TAB_GLOBAL_COMPO[155],tv_code,false))
 	return -1;
 if (!ValiderChampsType(Table,"tv_code",TAB_GLOBAL_COMPO[155],tv_code))
 	return -1;
 var cg_numero=GetValAt(156);
 if (cg_numero=="-1")
    cg_numero="null";
 if (!ValiderChampsObligatoire(Table,"cg_numero",TAB_GLOBAL_COMPO[156],cg_numero,true))
 	return -1;
 var tv_actif=GetValAt(157);
 if (!ValiderChampsObligatoire(Table,"tv_actif",TAB_GLOBAL_COMPO[157],tv_actif,false))
 	return -1;
 if (!ValiderChampsType(Table,"tv_actif",TAB_GLOBAL_COMPO[157],tv_actif))
 	return -1;
 var Req="insert into "+Table+" ";
var TabInsertionEnPlus=new Array();
 Req+="("+NomCleMaitre+",tv_taux,tv_code,cg_numero,tv_actif"+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[0]:"")+")";
 Req+=" values ("+CleMaitre+","+(tv_taux=="" ? "null" : "'"+ValiderChaine(tv_taux)+"'" )+","+(tv_code=="" ? "null" : "'"+ValiderChaine(tv_code)+"'" )+","+cg_numero+","+(tv_actif=="true" ? "true" : "false")+""+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[1]:"")+")";

 if (pgsql_update(Req)==0)
	alert("Echec lors de l'insertion");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : TVA
  TAPEZ ICI LE CODE DE LA REQUETE DE SUPPRESSION 
***************************************************/
function User_Delete_TVA_Liste_des_T_V_A_0(Compo_Maitre)
{
 var Table="tva";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var Req="delete from "+Table+" where "+NomCleMaitre+" = "+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la supression");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : TVA
  TAPEZ ICI LE CODE DE LA REQUETE DE MISE A JOUR 
***************************************************/
function User_Update_TVA_Liste_des_T_V_A_0(Compo_Maitre)
{
 var Table="tva";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var tv_taux=GetValAt(154);
 if (!ValiderChampsObligatoire(Table,"tv_taux",TAB_GLOBAL_COMPO[154],tv_taux,false))
 	return -1;
 if (!ValiderChampsType(Table,"tv_taux",TAB_GLOBAL_COMPO[154],tv_taux))
 	return -1;
 var tv_code=GetValAt(155);
 if (!ValiderChampsObligatoire(Table,"tv_code",TAB_GLOBAL_COMPO[155],tv_code,false))
 	return -1;
 if (!ValiderChampsType(Table,"tv_code",TAB_GLOBAL_COMPO[155],tv_code))
 	return -1;
 var cg_numero=GetValAt(156);
 if (cg_numero=="-1")
    cg_numero="null";
 if (!ValiderChampsObligatoire(Table,"cg_numero",TAB_GLOBAL_COMPO[156],cg_numero,true))
 	return -1;
 var tv_actif=GetValAt(157);
 if (!ValiderChampsObligatoire(Table,"tv_actif",TAB_GLOBAL_COMPO[157],tv_actif,false))
 	return -1;
 if (!ValiderChampsType(Table,"tv_actif",TAB_GLOBAL_COMPO[157],tv_actif))
 	return -1;
 var Req="update "+Table+" set ";
 Req+="tv_taux="+(tv_taux=="" ? "null" : "'"+ValiderChaine(tv_taux)+"'" )+",tv_code="+(tv_code=="" ? "null" : "'"+ValiderChaine(tv_code)+"'" )+",cg_numero="+cg_numero+",tv_actif="+(tv_actif=="true" ? "true" : "false")+"";
 Req+=" where "+NomCleMaitre+"="+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la mise à jour");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Types d'attribut
  TAPEZ ICI LE CODE DE LA REQUETE D'INSERTION
***************************************************/
function User_Insert_Types_d_attribut_Liste_des_types_d_attribut_de_personne0(Compo_Maitre)
{

/*
***** INFOS ******

Nbr d'esclaves = 2

Id dans le tab: 30;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 31;
complexe
Nbr Jointure: 1;
    Joint n° 0 = categorie,ta_numero,ta_numero

******************
*/

 var Table="typeattribut";
 var CleMaitre = TAB_COMPO_PPTES[28].NewCle;
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var ta_nom=GetValAt(30);
 if (!ValiderChampsObligatoire(Table,"ta_nom",TAB_GLOBAL_COMPO[30],ta_nom,false))
 	return -1;
 if (!ValiderChampsType(Table,"ta_nom",TAB_GLOBAL_COMPO[30],ta_nom))
 	return -1;
 var Req="insert into "+Table+" ";
var TabInsertionEnPlus=new Array();
 Req+="("+NomCleMaitre+",ta_nom"+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[0]:"")+")";
 Req+=" values ("+CleMaitre+","+(ta_nom=="" ? "null" : "'"+ValiderChaine(ta_nom)+"'" )+""+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[1]:"")+")";

 if (pgsql_update(Req)==0)
	alert("Echec lors de l'insertion");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Types d'attribut
  TAPEZ ICI LE CODE DE LA REQUETE DE SUPPRESSION 
***************************************************/
function User_Delete_Types_d_attribut_Liste_des_types_d_attribut_de_personne0(Compo_Maitre)
{
 var Table="typeattribut";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var Req="delete from "+Table+" where "+NomCleMaitre+" = "+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la supression");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Types d'attribut
  TAPEZ ICI LE CODE DE LA REQUETE DE MISE A JOUR 
***************************************************/
function User_Update_Types_d_attribut_Liste_des_types_d_attribut_de_personne0(Compo_Maitre)
{
 var Table="typeattribut";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var ta_nom=GetValAt(30);
 if (!ValiderChampsObligatoire(Table,"ta_nom",TAB_GLOBAL_COMPO[30],ta_nom,false))
 	return -1;
 if (!ValiderChampsType(Table,"ta_nom",TAB_GLOBAL_COMPO[30],ta_nom))
 	return -1;
 var Req="update "+Table+" set ";
 Req+="ta_nom="+(ta_nom=="" ? "null" : "'"+ValiderChaine(ta_nom)+"'" )+"";
 Req+=" where "+NomCleMaitre+"="+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la mise à jour");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Types d'attribut
  TAPEZ ICI LE CODE DE LA REQUETE D'INSERTION
***************************************************/
function User_Insert_Types_d_attribut_Catégories_2(Compo_Maitre)
{

/*
***** INFOS ******

Nbr d'esclaves = 2

Id dans le tab: 33;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 34;
simple
Nbr Jointure: PAS DE JOINTURE;

******************
*/

 var Table="categorie";
 var CleMaitre = TAB_COMPO_PPTES[31].NewCle;
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 /* COMPOSANT LISTE AVEC JOINTURE SIMPLE */
 var cr_libelle=GetValAt(33);
 if (!ValiderChampsObligatoire(Table,"cr_libelle",TAB_GLOBAL_COMPO[33],cr_libelle,false))
 	return -1;
 if (!ValiderChampsType(Table,"cr_libelle",TAB_GLOBAL_COMPO[33],cr_libelle))
 	return -1;
 var cr_description=GetValAt(34);
 if (!ValiderChampsObligatoire(Table,"cr_description",TAB_GLOBAL_COMPO[34],cr_description,false))
 	return -1;
 if (!ValiderChampsType(Table,"cr_description",TAB_GLOBAL_COMPO[34],cr_description))
 	return -1;
 var Req="insert into "+Table+" ";
var TabInsertionEnPlus=new Array();
 Req+="("+NomCleMaitre+",ta_numero,cr_libelle,cr_description"+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[0]:"")+")";
 Req+=" values ("+CleMaitre+","+TAB_COMPO_PPTES[28].NewCle+","+(cr_libelle=="" ? "null" : "'"+ValiderChaine(cr_libelle)+"'" )+","+(cr_description=="" ? "null" : "'"+ValiderChaine(cr_description)+"'" )+""+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[1]:"")+")";

 if (pgsql_update(Req)==0)
	alert("Echec lors de l'insertion");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Types d'attribut
  TAPEZ ICI LE CODE DE LA REQUETE DE SUPPRESSION 
***************************************************/
function User_Delete_Types_d_attribut_Catégories_2(Compo_Maitre)
{
 var Table="categorie";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var Req="delete from "+Table+" where "+NomCleMaitre+" = "+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la supression");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Types d'attribut
  TAPEZ ICI LE CODE DE LA REQUETE DE MISE A JOUR 
***************************************************/
function User_Update_Types_d_attribut_Catégories_2(Compo_Maitre)
{
 var Table="categorie";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var cr_libelle=GetValAt(33);
 if (!ValiderChampsObligatoire(Table,"cr_libelle",TAB_GLOBAL_COMPO[33],cr_libelle,false))
 	return -1;
 if (!ValiderChampsType(Table,"cr_libelle",TAB_GLOBAL_COMPO[33],cr_libelle))
 	return -1;
 var cr_description=GetValAt(34);
 if (!ValiderChampsObligatoire(Table,"cr_description",TAB_GLOBAL_COMPO[34],cr_description,false))
 	return -1;
 if (!ValiderChampsType(Table,"cr_description",TAB_GLOBAL_COMPO[34],cr_description))
 	return -1;
 var Req="update "+Table+" set ";
 Req+="cr_libelle="+(cr_libelle=="" ? "null" : "'"+ValiderChaine(cr_libelle)+"'" )+",cr_description="+(cr_description=="" ? "null" : "'"+ValiderChaine(cr_description)+"'" )+"";
 Req+=" where "+NomCleMaitre+"="+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la mise à jour");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Types de journaux
  TAPEZ ICI LE CODE DE LA REQUETE D'INSERTION
***************************************************/
function User_Insert_Types_de_journaux_Liste_des_types_de_journaux0(Compo_Maitre)
{

/*
***** INFOS ******

Nbr d'esclaves = 1

Id dans le tab: 201;
simple
Nbr Jointure: PAS DE JOINTURE;

******************
*/

 var Table="typejournal";
 var CleMaitre = TAB_COMPO_PPTES[199].NewCle;
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var tj_libelle=GetValAt(201);
 if (!ValiderChampsObligatoire(Table,"tj_libelle",TAB_GLOBAL_COMPO[201],tj_libelle,false))
 	return -1;
 if (!ValiderChampsType(Table,"tj_libelle",TAB_GLOBAL_COMPO[201],tj_libelle))
 	return -1;
 var Req="insert into "+Table+" ";
var TabInsertionEnPlus=new Array();
 Req+="("+NomCleMaitre+",tj_libelle"+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[0]:"")+")";
 Req+=" values ("+CleMaitre+","+(tj_libelle=="" ? "null" : "'"+ValiderChaine(tj_libelle)+"'" )+""+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[1]:"")+")";

 if (pgsql_update(Req)==0)
	alert("Echec lors de l'insertion");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Types de journaux
  TAPEZ ICI LE CODE DE LA REQUETE DE SUPPRESSION 
***************************************************/
function User_Delete_Types_de_journaux_Liste_des_types_de_journaux0(Compo_Maitre)
{
 var Table="typejournal";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var Req="delete from "+Table+" where "+NomCleMaitre+" = "+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la supression");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Types de journaux
  TAPEZ ICI LE CODE DE LA REQUETE DE MISE A JOUR 
***************************************************/
function User_Update_Types_de_journaux_Liste_des_types_de_journaux0(Compo_Maitre)
{
 var Table="typejournal";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var tj_libelle=GetValAt(201);
 if (!ValiderChampsObligatoire(Table,"tj_libelle",TAB_GLOBAL_COMPO[201],tj_libelle,false))
 	return -1;
 if (!ValiderChampsType(Table,"tj_libelle",TAB_GLOBAL_COMPO[201],tj_libelle))
 	return -1;
 var Req="update "+Table+" set ";
 Req+="tj_libelle="+(tj_libelle=="" ? "null" : "'"+ValiderChaine(tj_libelle)+"'" )+"";
 Req+=" where "+NomCleMaitre+"="+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la mise à jour");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Types de lien
  TAPEZ ICI LE CODE DE LA REQUETE D'INSERTION
***************************************************/
function User_Insert_Types_de_lien_Liste_des_types_de_lien_entre_personne0(Compo_Maitre)
{

/*
***** INFOS ******

Nbr d'esclaves = 2

Id dans le tab: 45;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 46;
simple
Nbr Jointure: PAS DE JOINTURE;

******************
*/

 var Table="typelien";
 var CleMaitre = TAB_COMPO_PPTES[43].NewCle;
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var tl_libelle=GetValAt(45);
 if (!ValiderChampsObligatoire(Table,"tl_libelle",TAB_GLOBAL_COMPO[45],tl_libelle,false))
 	return -1;
 if (!ValiderChampsType(Table,"tl_libelle",TAB_GLOBAL_COMPO[45],tl_libelle))
 	return -1;
 var tl_description=GetValAt(46);
 if (!ValiderChampsObligatoire(Table,"tl_description",TAB_GLOBAL_COMPO[46],tl_description,false))
 	return -1;
 if (!ValiderChampsType(Table,"tl_description",TAB_GLOBAL_COMPO[46],tl_description))
 	return -1;
 var Req="insert into "+Table+" ";
var TabInsertionEnPlus=new Array();
 Req+="("+NomCleMaitre+",tl_libelle,tl_description"+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[0]:"")+")";
 Req+=" values ("+CleMaitre+","+(tl_libelle=="" ? "null" : "'"+ValiderChaine(tl_libelle)+"'" )+","+(tl_description=="" ? "null" : "'"+ValiderChaine(tl_description)+"'" )+""+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[1]:"")+")";

 if (pgsql_update(Req)==0)
	alert("Echec lors de l'insertion");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Types de lien
  TAPEZ ICI LE CODE DE LA REQUETE DE SUPPRESSION 
***************************************************/
function User_Delete_Types_de_lien_Liste_des_types_de_lien_entre_personne0(Compo_Maitre)
{
 var Table="typelien";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var Req="delete from "+Table+" where "+NomCleMaitre+" = "+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la supression");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Types de lien
  TAPEZ ICI LE CODE DE LA REQUETE DE MISE A JOUR 
***************************************************/
function User_Update_Types_de_lien_Liste_des_types_de_lien_entre_personne0(Compo_Maitre)
{
 var Table="typelien";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var tl_libelle=GetValAt(45);
 if (!ValiderChampsObligatoire(Table,"tl_libelle",TAB_GLOBAL_COMPO[45],tl_libelle,false))
 	return -1;
 if (!ValiderChampsType(Table,"tl_libelle",TAB_GLOBAL_COMPO[45],tl_libelle))
 	return -1;
 var tl_description=GetValAt(46);
 if (!ValiderChampsObligatoire(Table,"tl_description",TAB_GLOBAL_COMPO[46],tl_description,false))
 	return -1;
 if (!ValiderChampsType(Table,"tl_description",TAB_GLOBAL_COMPO[46],tl_description))
 	return -1;
 var Req="update "+Table+" set ";
 Req+="tl_libelle="+(tl_libelle=="" ? "null" : "'"+ValiderChaine(tl_libelle)+"'" )+",tl_description="+(tl_description=="" ? "null" : "'"+ValiderChaine(tl_description)+"'" )+"";
 Req+=" where "+NomCleMaitre+"="+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la mise à jour");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Types de personne
  TAPEZ ICI LE CODE DE LA REQUETE D'INSERTION
***************************************************/
function User_Insert_Types_de_personne_Liste_des_types_de_personne0(Compo_Maitre)
{

/*
***** INFOS ******

Nbr d'esclaves = 1

Id dans le tab: 49;
simple
Nbr Jointure: PAS DE JOINTURE;

******************
*/

 var Table="typepersonne";
 var CleMaitre = TAB_COMPO_PPTES[47].NewCle;
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var tp_type=GetValAt(49);
 if (!ValiderChampsObligatoire(Table,"tp_type",TAB_GLOBAL_COMPO[49],tp_type,false))
 	return -1;
 if (!ValiderChampsType(Table,"tp_type",TAB_GLOBAL_COMPO[49],tp_type))
 	return -1;
 var Req="insert into "+Table+" ";
var TabInsertionEnPlus=new Array();
 Req+="("+NomCleMaitre+",tp_type"+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[0]:"")+")";
 Req+=" values ("+CleMaitre+","+(tp_type=="" ? "null" : "'"+ValiderChaine(tp_type)+"'" )+""+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[1]:"")+")";

 if (pgsql_update(Req)==0)
	alert("Echec lors de l'insertion");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Types de personne
  TAPEZ ICI LE CODE DE LA REQUETE DE SUPPRESSION 
***************************************************/
function User_Delete_Types_de_personne_Liste_des_types_de_personne0(Compo_Maitre)
{
 var Table="typepersonne";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var Req="delete from "+Table+" where "+NomCleMaitre+" = "+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la supression");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Types de personne
  TAPEZ ICI LE CODE DE LA REQUETE DE MISE A JOUR 
***************************************************/
function User_Update_Types_de_personne_Liste_des_types_de_personne0(Compo_Maitre)
{
 var Table="typepersonne";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var tp_type=GetValAt(49);
 if (!ValiderChampsObligatoire(Table,"tp_type",TAB_GLOBAL_COMPO[49],tp_type,false))
 	return -1;
 if (!ValiderChampsType(Table,"tp_type",TAB_GLOBAL_COMPO[49],tp_type))
 	return -1;
 var Req="update "+Table+" set ";
 Req+="tp_type="+(tp_type=="" ? "null" : "'"+ValiderChaine(tp_type)+"'" )+"";
 Req+=" where "+NomCleMaitre+"="+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la mise à jour");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Types de sociétés
  TAPEZ ICI LE CODE DE LA REQUETE D'INSERTION
***************************************************/
function User_Insert_Types_de_sociétés_Liste_des_types_de_sociétés0(Compo_Maitre)
{

/*
***** INFOS ******

Nbr d'esclaves = 1

Id dans le tab: 55;
simple
Nbr Jointure: PAS DE JOINTURE;

******************
*/

 var Table="typesociete";
 var CleMaitre = TAB_COMPO_PPTES[53].NewCle;
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var ts_libelle=GetValAt(55);
 if (!ValiderChampsObligatoire(Table,"ts_libelle",TAB_GLOBAL_COMPO[55],ts_libelle,false))
 	return -1;
 if (!ValiderChampsType(Table,"ts_libelle",TAB_GLOBAL_COMPO[55],ts_libelle))
 	return -1;
 var Req="insert into "+Table+" ";
var TabInsertionEnPlus=new Array();
 Req+="("+NomCleMaitre+",ts_libelle"+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[0]:"")+")";
 Req+=" values ("+CleMaitre+","+(ts_libelle=="" ? "null" : "'"+ValiderChaine(ts_libelle)+"'" )+""+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[1]:"")+")";

 if (pgsql_update(Req)==0)
	alert("Echec lors de l'insertion");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Types de sociétés
  TAPEZ ICI LE CODE DE LA REQUETE DE SUPPRESSION 
***************************************************/
function User_Delete_Types_de_sociétés_Liste_des_types_de_sociétés0(Compo_Maitre)
{
 var Table="typesociete";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var Req="delete from "+Table+" where "+NomCleMaitre+" = "+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la supression");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Types de sociétés
  TAPEZ ICI LE CODE DE LA REQUETE DE MISE A JOUR 
***************************************************/
function User_Update_Types_de_sociétés_Liste_des_types_de_sociétés0(Compo_Maitre)
{
 var Table="typesociete";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var ts_libelle=GetValAt(55);
 if (!ValiderChampsObligatoire(Table,"ts_libelle",TAB_GLOBAL_COMPO[55],ts_libelle,false))
 	return -1;
 if (!ValiderChampsType(Table,"ts_libelle",TAB_GLOBAL_COMPO[55],ts_libelle))
 	return -1;
 var Req="update "+Table+" set ";
 Req+="ts_libelle="+(ts_libelle=="" ? "null" : "'"+ValiderChaine(ts_libelle)+"'" )+"";
 Req+=" where "+NomCleMaitre+"="+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la mise à jour");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Types de tâches
  TAPEZ ICI LE CODE DE LA REQUETE D'INSERTION
***************************************************/
function User_Insert_Types_de_tâches_Liste_des_types_de_tâches0(Compo_Maitre)
{

/*
***** INFOS ******

Nbr d'esclaves = 2

Id dans le tab: 26;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 27;
simple
Nbr Jointure: PAS DE JOINTURE;

******************
*/

 var Table="typetache";
 var CleMaitre = TAB_COMPO_PPTES[24].NewCle;
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var th_libelle=GetValAt(26);
 if (!ValiderChampsObligatoire(Table,"th_libelle",TAB_GLOBAL_COMPO[26],th_libelle,false))
 	return -1;
 if (!ValiderChampsType(Table,"th_libelle",TAB_GLOBAL_COMPO[26],th_libelle))
 	return -1;
 var th_description=GetValAt(27);
 if (!ValiderChampsObligatoire(Table,"th_description",TAB_GLOBAL_COMPO[27],th_description,false))
 	return -1;
 if (!ValiderChampsType(Table,"th_description",TAB_GLOBAL_COMPO[27],th_description))
 	return -1;
 var Req="insert into "+Table+" ";
var TabInsertionEnPlus=new Array();
 Req+="("+NomCleMaitre+",th_libelle,th_description"+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[0]:"")+")";
 Req+=" values ("+CleMaitre+","+(th_libelle=="" ? "null" : "'"+ValiderChaine(th_libelle)+"'" )+","+(th_description=="" ? "null" : "'"+ValiderChaine(th_description)+"'" )+""+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[1]:"")+")";

 if (pgsql_update(Req)==0)
	alert("Echec lors de l'insertion");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Types de tâches
  TAPEZ ICI LE CODE DE LA REQUETE DE SUPPRESSION 
***************************************************/
function User_Delete_Types_de_tâches_Liste_des_types_de_tâches0(Compo_Maitre)
{
 var Table="typetache";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var Req="delete from "+Table+" where "+NomCleMaitre+" = "+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la supression");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Types de tâches
  TAPEZ ICI LE CODE DE LA REQUETE DE MISE A JOUR 
***************************************************/
function User_Update_Types_de_tâches_Liste_des_types_de_tâches0(Compo_Maitre)
{
 var Table="typetache";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var th_libelle=GetValAt(26);
 if (!ValiderChampsObligatoire(Table,"th_libelle",TAB_GLOBAL_COMPO[26],th_libelle,false))
 	return -1;
 if (!ValiderChampsType(Table,"th_libelle",TAB_GLOBAL_COMPO[26],th_libelle))
 	return -1;
 var th_description=GetValAt(27);
 if (!ValiderChampsObligatoire(Table,"th_description",TAB_GLOBAL_COMPO[27],th_description,false))
 	return -1;
 if (!ValiderChampsType(Table,"th_description",TAB_GLOBAL_COMPO[27],th_description))
 	return -1;
 var Req="update "+Table+" set ";
 Req+="th_libelle="+(th_libelle=="" ? "null" : "'"+ValiderChaine(th_libelle)+"'" )+",th_description="+(th_description=="" ? "null" : "'"+ValiderChaine(th_description)+"'" )+"";
 Req+=" where "+NomCleMaitre+"="+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la mise à jour");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Villes
  TAPEZ ICI LE CODE DE LA REQUETE D'INSERTION
***************************************************/
function User_Insert_Villes_Liste_des_villes0(Compo_Maitre)
{

/*
***** INFOS ******

Nbr d'esclaves = 2

Id dans le tab: 126;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 127;
simple
Nbr Jointure: 1;
    Joint n° 0 = canton,ct_numero,ct_numero

******************
*/

 var Table="ville";
 var CleMaitre = TAB_COMPO_PPTES[123].NewCle;
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var vi_nom=GetValAt(126);
 if (!ValiderChampsObligatoire(Table,"vi_nom",TAB_GLOBAL_COMPO[126],vi_nom,false))
 	return -1;
 if (!ValiderChampsType(Table,"vi_nom",TAB_GLOBAL_COMPO[126],vi_nom))
 	return -1;
 var ct_numero=GetValAt(127);
 if (ct_numero=="-1")
    ct_numero="null";
 if (!ValiderChampsObligatoire(Table,"ct_numero",TAB_GLOBAL_COMPO[127],ct_numero,true))
 	return -1;
 var Req="insert into "+Table+" ";
var TabInsertionEnPlus=new Array();
 Req+="("+NomCleMaitre+",vi_nom,ct_numero"+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[0]:"")+")";
 Req+=" values ("+CleMaitre+","+(vi_nom=="" ? "null" : "'"+ValiderChaine(vi_nom)+"'" )+","+ct_numero+""+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[1]:"")+")";

 if (pgsql_update(Req)==0)
	alert("Echec lors de l'insertion");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Villes
  TAPEZ ICI LE CODE DE LA REQUETE DE SUPPRESSION 
***************************************************/
function User_Delete_Villes_Liste_des_villes0(Compo_Maitre)
{
 var Table="ville";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var Req="delete from "+Table+" where "+NomCleMaitre+" = "+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la supression");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Villes
  TAPEZ ICI LE CODE DE LA REQUETE DE MISE A JOUR 
***************************************************/
function User_Update_Villes_Liste_des_villes0(Compo_Maitre)
{
 var Table="ville";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var vi_nom=GetValAt(126);
 if (!ValiderChampsObligatoire(Table,"vi_nom",TAB_GLOBAL_COMPO[126],vi_nom,false))
 	return -1;
 if (!ValiderChampsType(Table,"vi_nom",TAB_GLOBAL_COMPO[126],vi_nom))
 	return -1;
 var ct_numero=GetValAt(127);
 if (ct_numero=="-1")
    ct_numero="null";
 if (!ValiderChampsObligatoire(Table,"ct_numero",TAB_GLOBAL_COMPO[127],ct_numero,true))
 	return -1;
 var Req="update "+Table+" set ";
 Req+="vi_nom="+(vi_nom=="" ? "null" : "'"+ValiderChaine(vi_nom)+"'" )+",ct_numero="+ct_numero+"";
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

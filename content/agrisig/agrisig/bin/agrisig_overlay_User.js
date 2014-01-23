/*************************************************
  REQUETES UTILSATEUR : Onglet : Application de profil
  TAPEZ ICI LE CODE DE LA REQUETE D'INSERTION
***************************************************/
function User_Insert_Application_de_profil_Application__de_profil0(Compo_Maitre)
{

/*
***** INFOS ******

Nbr d'esclaves = 5

Id dans le tab: 8;
simple
Nbr Jointure: 1;
    Joint n° 0 = sousilot,al_sousilot,si_numero

Id dans le tab: 9;
simple
Nbr Jointure: 1;
    Joint n° 0 = profil,al_profil,pr_numero

Id dans le tab: 10;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 11;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 12;
complexe
Nbr Jointure: 1;
    Joint n° 0 = lot,al_numero,lo_applique

******************
*/

 var Table="applique";
 var CleMaitre = TAB_COMPO_PPTES[3].NewCle;
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var al_sousilot=GetValAt(8);
 if (al_sousilot=="-1")
    al_sousilot="null";
 if (!ValiderChampsObligatoire(Table,"al_sousilot",TAB_GLOBAL_COMPO[8],al_sousilot,true))
 	return -1;
 var al_profil=GetValAt(9);
 if (al_profil=="-1")
    al_profil="null";
 if (!ValiderChampsObligatoire(Table,"al_profil",TAB_GLOBAL_COMPO[9],al_profil,true))
 	return -1;
 var al_periodedebut=GetValAt(10);
 if (!ValiderChampsObligatoire(Table,"al_periodedebut",TAB_GLOBAL_COMPO[10],al_periodedebut,false))
 	return -1;
 if (!ValiderChampsType(Table,"al_periodedebut",TAB_GLOBAL_COMPO[10],al_periodedebut))
 	return -1;
 var al_periodefin=GetValAt(11);
 if (!ValiderChampsObligatoire(Table,"al_periodefin",TAB_GLOBAL_COMPO[11],al_periodefin,false))
 	return -1;
 if (!ValiderChampsType(Table,"al_periodefin",TAB_GLOBAL_COMPO[11],al_periodefin))
 	return -1;
 var Req="insert into "+Table+" ";
var TabInsertionEnPlus=new Array();
 Req+="("+NomCleMaitre+",al_sousilot,al_profil,al_periodedebut,al_periodefin"+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[0]:"")+")";
 Req+=" values ("+CleMaitre+","+al_sousilot+","+al_profil+","+(al_periodedebut=="" ? "null" : "'"+ValiderChaine(al_periodedebut)+"'" )+","+(al_periodefin=="" ? "null" : "'"+ValiderChaine(al_periodefin)+"'" )+""+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[1]:"")+")";

 if (pgsql_update(Req)==0)
	alert("Echec lors de l'insertion");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Application de profil
  TAPEZ ICI LE CODE DE LA REQUETE DE SUPPRESSION 
***************************************************/
function User_Delete_Application_de_profil_Application__de_profil0(Compo_Maitre)
{
 var Table="applique";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var Req="delete from "+Table+" where "+NomCleMaitre+" = "+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la supression");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Application de profil
  TAPEZ ICI LE CODE DE LA REQUETE DE MISE A JOUR 
***************************************************/
function User_Update_Application_de_profil_Application__de_profil0(Compo_Maitre)
{
 var Table="applique";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var al_sousilot=GetValAt(8);
 if (al_sousilot=="-1")
    al_sousilot="null";
 if (!ValiderChampsObligatoire(Table,"al_sousilot",TAB_GLOBAL_COMPO[8],al_sousilot,true))
 	return -1;
 var al_profil=GetValAt(9);
 if (al_profil=="-1")
    al_profil="null";
 if (!ValiderChampsObligatoire(Table,"al_profil",TAB_GLOBAL_COMPO[9],al_profil,true))
 	return -1;
 var al_periodedebut=GetValAt(10);
 if (!ValiderChampsObligatoire(Table,"al_periodedebut",TAB_GLOBAL_COMPO[10],al_periodedebut,false))
 	return -1;
 if (!ValiderChampsType(Table,"al_periodedebut",TAB_GLOBAL_COMPO[10],al_periodedebut))
 	return -1;
 var al_periodefin=GetValAt(11);
 if (!ValiderChampsObligatoire(Table,"al_periodefin",TAB_GLOBAL_COMPO[11],al_periodefin,false))
 	return -1;
 if (!ValiderChampsType(Table,"al_periodefin",TAB_GLOBAL_COMPO[11],al_periodefin))
 	return -1;
 var Req="update "+Table+" set ";
 Req+="al_sousilot="+al_sousilot+",al_profil="+al_profil+",al_periodedebut="+(al_periodedebut=="" ? "null" : "'"+ValiderChaine(al_periodedebut)+"'" )+",al_periodefin="+(al_periodefin=="" ? "null" : "'"+ValiderChaine(al_periodefin)+"'" )+"";
 Req+=" where "+NomCleMaitre+"="+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la mise à jour");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Application de profil
  TAPEZ ICI LE CODE DE LA REQUETE D'INSERTION
***************************************************/
function User_Insert_Application_de_profil_Lot_s__5(Compo_Maitre)
{

/*
***** INFOS ******

Nbr d'esclaves = 2

Id dans le tab: 15;
simple
Nbr Jointure: 1;
    Joint n° 0 = article,lo_article,ar_numero

Id dans le tab: 16;
simple
Nbr Jointure: PAS DE JOINTURE;

******************
*/

 var Table="lot";
 var CleMaitre = TAB_COMPO_PPTES[12].NewCle;
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 /* COMPOSANT LISTE AVEC JOINTURE SIMPLE */
 var lo_article=GetValAt(15);
 if (lo_article=="-1")
    lo_article="null";
 if (!ValiderChampsObligatoire(Table,"lo_article",TAB_GLOBAL_COMPO[15],lo_article,true))
 	return -1;
 var lo_lot=GetValAt(16);
 if (!ValiderChampsObligatoire(Table,"lo_lot",TAB_GLOBAL_COMPO[16],lo_lot,false))
 	return -1;
 if (!ValiderChampsType(Table,"lo_lot",TAB_GLOBAL_COMPO[16],lo_lot))
 	return -1;
 var Req="insert into "+Table+" ";
var TabInsertionEnPlus=new Array();
 Req+="("+NomCleMaitre+",lo_applique,lo_article,lo_lot"+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[0]:"")+")";
 Req+=" values ("+CleMaitre+","+TAB_COMPO_PPTES[3].NewCle+","+lo_article+","+(lo_lot=="" ? "null" : "'"+ValiderChaine(lo_lot)+"'" )+""+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[1]:"")+")";

 if (pgsql_update(Req)==0)
	alert("Echec lors de l'insertion");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Application de profil
  TAPEZ ICI LE CODE DE LA REQUETE DE SUPPRESSION 
***************************************************/
function User_Delete_Application_de_profil_Lot_s__5(Compo_Maitre)
{
 var Table="lot";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var Req="delete from "+Table+" where "+NomCleMaitre+" = "+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la supression");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Application de profil
  TAPEZ ICI LE CODE DE LA REQUETE DE MISE A JOUR 
***************************************************/
function User_Update_Application_de_profil_Lot_s__5(Compo_Maitre)
{
 var Table="lot";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var lo_article=GetValAt(15);
 if (lo_article=="-1")
    lo_article="null";
 if (!ValiderChampsObligatoire(Table,"lo_article",TAB_GLOBAL_COMPO[15],lo_article,true))
 	return -1;
 var lo_lot=GetValAt(16);
 if (!ValiderChampsObligatoire(Table,"lo_lot",TAB_GLOBAL_COMPO[16],lo_lot,false))
 	return -1;
 if (!ValiderChampsType(Table,"lo_lot",TAB_GLOBAL_COMPO[16],lo_lot))
 	return -1;
 var Req="update "+Table+" set ";
 Req+="lo_article="+lo_article+",lo_lot="+(lo_lot=="" ? "null" : "'"+ValiderChaine(lo_lot)+"'" )+"";
 Req+=" where "+NomCleMaitre+"="+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la mise à jour");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Profils
  TAPEZ ICI LE CODE DE LA REQUETE D'INSERTION
***************************************************/
function User_Insert_Profils_Profils_existants0(Compo_Maitre)
{

/*
***** INFOS ******

Nbr d'esclaves = 7

Id dans le tab: 19;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 20;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 21;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 22;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 26;
complexe
Nbr Jointure: 2;
    Joint n° 0 = estdetype,pr_numero,et_profil
    Joint n° 1 = typeprofil,et_typeprofil,tp_numero

Id dans le tab: 29;
complexe
Nbr Jointure: 1;
    Joint n° 0 = definiprofil,pr_numero,dp_profil

Id dans le tab: 37;
complexe
Nbr Jointure: 2;
    Joint n° 0 = profiltypecouche,pr_numero,pc_profil
    Joint n° 1 = typecouche,pc_typecouche,tc_numero

******************
*/

 var Table="profil";
 var CleMaitre = TAB_COMPO_PPTES[17].NewCle;
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var pr_nom=GetValAt(19);
 if (!ValiderChampsObligatoire(Table,"pr_nom",TAB_GLOBAL_COMPO[19],pr_nom,false))
 	return -1;
 if (!ValiderChampsType(Table,"pr_nom",TAB_GLOBAL_COMPO[19],pr_nom))
 	return -1;
 var note=GetValAt(20);
 if (!ValiderChampsObligatoire(Table,"note",TAB_GLOBAL_COMPO[20],note,false))
 	return -1;
 if (!ValiderChampsType(Table,"note",TAB_GLOBAL_COMPO[20],note))
 	return -1;
 var pr_partage=GetValAt(21);
 if (!ValiderChampsObligatoire(Table,"pr_partage",TAB_GLOBAL_COMPO[21],pr_partage,false))
 	return -1;
 if (!ValiderChampsType(Table,"pr_partage",TAB_GLOBAL_COMPO[21],pr_partage))
 	return -1;
 var couleur=GetValAt(22);
 if (!ValiderChampsObligatoire(Table,"couleur",TAB_GLOBAL_COMPO[22],couleur,false))
 	return -1;
 if (!ValiderChampsType(Table,"couleur",TAB_GLOBAL_COMPO[22],couleur))
 	return -1;
 var Req="insert into "+Table+" ";
var TabInsertionEnPlus=new Array();
 Req+="("+NomCleMaitre+",pr_nom,note,pr_partage,couleur"+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[0]:"")+")";
 Req+=" values ("+CleMaitre+","+(pr_nom=="" ? "null" : "'"+ValiderChaine(pr_nom)+"'" )+","+(note=="" ? "null" : "'"+ValiderChaine(note)+"'" )+","+(pr_partage=="" ? "null" : "'"+ValiderChaine(pr_partage)+"'" )+","+(couleur==null ? "null" : "'"+ValiderChaine(couleur)+"'" )+""+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[1]:"")+")";

 if (pgsql_update(Req)==0)
	alert("Echec lors de l'insertion");

/* table typeprofil*/
LstDouble_Exec_Req(GetSQLCompoAt(26),CleMaitre);

/* table typecouche*/
LstDouble_Exec_Req(GetSQLCompoAt(37),CleMaitre);
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Profils
  TAPEZ ICI LE CODE DE LA REQUETE DE SUPPRESSION 
***************************************************/
function User_Delete_Profils_Profils_existants0(Compo_Maitre)
{
 var Table="profil";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var Req="delete from "+Table+" where "+NomCleMaitre+" = "+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la supression");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Profils
  TAPEZ ICI LE CODE DE LA REQUETE DE MISE A JOUR 
***************************************************/
function User_Update_Profils_Profils_existants0(Compo_Maitre)
{
 var Table="profil";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var pr_nom=GetValAt(19);
 if (!ValiderChampsObligatoire(Table,"pr_nom",TAB_GLOBAL_COMPO[19],pr_nom,false))
 	return -1;
 if (!ValiderChampsType(Table,"pr_nom",TAB_GLOBAL_COMPO[19],pr_nom))
 	return -1;
 var note=GetValAt(20);
 if (!ValiderChampsObligatoire(Table,"note",TAB_GLOBAL_COMPO[20],note,false))
 	return -1;
 if (!ValiderChampsType(Table,"note",TAB_GLOBAL_COMPO[20],note))
 	return -1;
 var pr_partage=GetValAt(21);
 if (!ValiderChampsObligatoire(Table,"pr_partage",TAB_GLOBAL_COMPO[21],pr_partage,false))
 	return -1;
 if (!ValiderChampsType(Table,"pr_partage",TAB_GLOBAL_COMPO[21],pr_partage))
 	return -1;
 var couleur=GetValAt(22);
 if (!ValiderChampsObligatoire(Table,"couleur",TAB_GLOBAL_COMPO[22],couleur,false))
 	return -1;
 if (!ValiderChampsType(Table,"couleur",TAB_GLOBAL_COMPO[22],couleur))
 	return -1;
 var Req="update "+Table+" set ";
 Req+="pr_nom="+(pr_nom=="" ? "null" : "'"+ValiderChaine(pr_nom)+"'" )+",note="+(note=="" ? "null" : "'"+ValiderChaine(note)+"'" )+",pr_partage="+(pr_partage=="" ? "null" : "'"+ValiderChaine(pr_partage)+"'" )+",couleur="+(couleur==null ? "null" : "'"+ValiderChaine(couleur)+"'" )+"";
 Req+=" where "+NomCleMaitre+"="+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la mise à jour");

/* table typeprofil*/
LstDouble_Exec_Req(GetSQLCompoAt(26),CleMaitre);

/* table typecouche*/
LstDouble_Exec_Req(GetSQLCompoAt(37),CleMaitre);
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Profils
  TAPEZ ICI LE CODE DE LA REQUETE D'INSERTION
***************************************************/
function User_Insert_Profils_Articles_présents_dans_le_profil_7(Compo_Maitre)
{

/*
***** INFOS ******

Nbr d'esclaves = 2

Id dans le tab: 32;
simple
Nbr Jointure: 1;
    Joint n° 0 = article,dp_article,ar_numero

Id dans le tab: 33;
simple
Nbr Jointure: PAS DE JOINTURE;

******************
*/

 var Table="definiprofil";
 var CleMaitre = TAB_COMPO_PPTES[29].NewCle;
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 /* COMPOSANT LISTE AVEC JOINTURE SIMPLE */
 var dp_article=GetValAt(32);
 if (dp_article=="-1")
    dp_article="null";
 if (!ValiderChampsObligatoire(Table,"dp_article",TAB_GLOBAL_COMPO[32],dp_article,true))
 	return -1;
 var dp_densite=GetValAt(33);
 if (!ValiderChampsObligatoire(Table,"dp_densite",TAB_GLOBAL_COMPO[33],dp_densite,false))
 	return -1;
 if (!ValiderChampsType(Table,"dp_densite",TAB_GLOBAL_COMPO[33],dp_densite))
 	return -1;
 var Req="insert into "+Table+" ";
var TabInsertionEnPlus=new Array();
 Req+="("+NomCleMaitre+",dp_profil,dp_article,dp_densite"+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[0]:"")+")";
 Req+=" values ("+CleMaitre+","+TAB_COMPO_PPTES[17].NewCle+","+dp_article+","+(dp_densite=="" ? "null" : "'"+ValiderChaine(dp_densite)+"'" )+""+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[1]:"")+")";

 if (pgsql_update(Req)==0)
	alert("Echec lors de l'insertion");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Profils
  TAPEZ ICI LE CODE DE LA REQUETE DE SUPPRESSION 
***************************************************/
function User_Delete_Profils_Articles_présents_dans_le_profil_7(Compo_Maitre)
{
 var Table="definiprofil";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var Req="delete from "+Table+" where "+NomCleMaitre+" = "+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la supression");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Profils
  TAPEZ ICI LE CODE DE LA REQUETE DE MISE A JOUR 
***************************************************/
function User_Update_Profils_Articles_présents_dans_le_profil_7(Compo_Maitre)
{
 var Table="definiprofil";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var dp_article=GetValAt(32);
 if (dp_article=="-1")
    dp_article="null";
 if (!ValiderChampsObligatoire(Table,"dp_article",TAB_GLOBAL_COMPO[32],dp_article,true))
 	return -1;
 var dp_densite=GetValAt(33);
 if (!ValiderChampsObligatoire(Table,"dp_densite",TAB_GLOBAL_COMPO[33],dp_densite,false))
 	return -1;
 if (!ValiderChampsType(Table,"dp_densite",TAB_GLOBAL_COMPO[33],dp_densite))
 	return -1;
 var Req="update "+Table+" set ";
 Req+="dp_article="+dp_article+",dp_densite="+(dp_densite=="" ? "null" : "'"+ValiderChaine(dp_densite)+"'" )+"";
 Req+=" where "+NomCleMaitre+"="+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la mise à jour");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Famille de profil
  TAPEZ ICI LE CODE DE LA REQUETE D'INSERTION
***************************************************/
function User_Insert_Famille_de_profil_Famille_de_profil0(Compo_Maitre)
{

/*
***** INFOS ******

Nbr d'esclaves = 3

Id dans le tab: 42;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 43;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 44;
simple
Nbr Jointure: PAS DE JOINTURE;

******************
*/

 var Table="typeprofil";
 var CleMaitre = TAB_COMPO_PPTES[40].NewCle;
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var tp_nom=GetValAt(42);
 if (!ValiderChampsObligatoire(Table,"tp_nom",TAB_GLOBAL_COMPO[42],tp_nom,false))
 	return -1;
 if (!ValiderChampsType(Table,"tp_nom",TAB_GLOBAL_COMPO[42],tp_nom))
 	return -1;
 var note=GetValAt(43);
 if (!ValiderChampsObligatoire(Table,"note",TAB_GLOBAL_COMPO[43],note,false))
 	return -1;
 if (!ValiderChampsType(Table,"note",TAB_GLOBAL_COMPO[43],note))
 	return -1;
 var couleur=GetValAt(44);
 if (!ValiderChampsObligatoire(Table,"couleur",TAB_GLOBAL_COMPO[44],couleur,false))
 	return -1;
 if (!ValiderChampsType(Table,"couleur",TAB_GLOBAL_COMPO[44],couleur))
 	return -1;
 var Req="insert into "+Table+" ";
var TabInsertionEnPlus=new Array();
 Req+="("+NomCleMaitre+",tp_nom,note,couleur"+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[0]:"")+")";
 Req+=" values ("+CleMaitre+","+(tp_nom=="" ? "null" : "'"+ValiderChaine(tp_nom)+"'" )+","+(note=="" ? "null" : "'"+ValiderChaine(note)+"'" )+","+(couleur==null ? "null" : "'"+ValiderChaine(couleur)+"'" )+""+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[1]:"")+")";

 if (pgsql_update(Req)==0)
	alert("Echec lors de l'insertion");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Famille de profil
  TAPEZ ICI LE CODE DE LA REQUETE DE SUPPRESSION 
***************************************************/
function User_Delete_Famille_de_profil_Famille_de_profil0(Compo_Maitre)
{
 var Table="typeprofil";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var Req="delete from "+Table+" where "+NomCleMaitre+" = "+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la supression");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Famille de profil
  TAPEZ ICI LE CODE DE LA REQUETE DE MISE A JOUR 
***************************************************/
function User_Update_Famille_de_profil_Famille_de_profil0(Compo_Maitre)
{
 var Table="typeprofil";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var tp_nom=GetValAt(42);
 if (!ValiderChampsObligatoire(Table,"tp_nom",TAB_GLOBAL_COMPO[42],tp_nom,false))
 	return -1;
 if (!ValiderChampsType(Table,"tp_nom",TAB_GLOBAL_COMPO[42],tp_nom))
 	return -1;
 var note=GetValAt(43);
 if (!ValiderChampsObligatoire(Table,"note",TAB_GLOBAL_COMPO[43],note,false))
 	return -1;
 if (!ValiderChampsType(Table,"note",TAB_GLOBAL_COMPO[43],note))
 	return -1;
 var couleur=GetValAt(44);
 if (!ValiderChampsObligatoire(Table,"couleur",TAB_GLOBAL_COMPO[44],couleur,false))
 	return -1;
 if (!ValiderChampsType(Table,"couleur",TAB_GLOBAL_COMPO[44],couleur))
 	return -1;
 var Req="update "+Table+" set ";
 Req+="tp_nom="+(tp_nom=="" ? "null" : "'"+ValiderChaine(tp_nom)+"'" )+",note="+(note=="" ? "null" : "'"+ValiderChaine(note)+"'" )+",couleur="+(couleur==null ? "null" : "'"+ValiderChaine(couleur)+"'" )+"";
 Req+=" where "+NomCleMaitre+"="+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la mise à jour");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Articles
  TAPEZ ICI LE CODE DE LA REQUETE D'INSERTION
***************************************************/
function User_Insert_Articles_Articles0(Compo_Maitre)
{

/*
***** INFOS ******

Nbr d'esclaves = 9

Id dans le tab: 47;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 48;
simple
Nbr Jointure: 1;
    Joint n° 0 = produit,ar_produit,pd_numero

Id dans le tab: 49;
simple
Nbr Jointure: 1;
    Joint n° 0 = conditionnement,ar_conditionnement,ca_numero

Id dans le tab: 50;
complexe
Nbr Jointure: 1;
    Joint n° 0 = personne,ar_personne,pe_numero

Id dans le tab: 53;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 54;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 55;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 56;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 57;
simple
Nbr Jointure: PAS DE JOINTURE;

******************
*/

 var Table="article";
 var CleMaitre = TAB_COMPO_PPTES[45].NewCle;
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var ar_nom=GetValAt(47);
 if (!ValiderChampsObligatoire(Table,"ar_nom",TAB_GLOBAL_COMPO[47],ar_nom,false))
 	return -1;
 if (!ValiderChampsType(Table,"ar_nom",TAB_GLOBAL_COMPO[47],ar_nom))
 	return -1;
 var ar_produit=GetValAt(48);
 if (ar_produit=="-1")
    ar_produit="null";
 if (!ValiderChampsObligatoire(Table,"ar_produit",TAB_GLOBAL_COMPO[48],ar_produit,true))
 	return -1;
 var ar_conditionnement=GetValAt(49);
 if (ar_conditionnement=="-1")
    ar_conditionnement="null";
 if (!ValiderChampsObligatoire(Table,"ar_conditionnement",TAB_GLOBAL_COMPO[49],ar_conditionnement,true))
 	return -1;
 var ar_personne=GetValAt(50);
 if (ar_personne=="-1")
    ar_personne="null";
 if (!ValiderChampsObligatoire(Table,"ar_personne",TAB_GLOBAL_COMPO[50],ar_personne,true))
 	return -1;
 var ar_prix=GetValAt(53);
 if (!ValiderChampsObligatoire(Table,"ar_prix",TAB_GLOBAL_COMPO[53],ar_prix,false))
 	return -1;
 if (!ValiderChampsType(Table,"ar_prix",TAB_GLOBAL_COMPO[53],ar_prix))
 	return -1;
 var ar_codeean13=GetValAt(54);
 if (!ValiderChampsObligatoire(Table,"ar_codeean13",TAB_GLOBAL_COMPO[54],ar_codeean13,false))
 	return -1;
 if (!ValiderChampsType(Table,"ar_codeean13",TAB_GLOBAL_COMPO[54],ar_codeean13))
 	return -1;
 var ar_code2=GetValAt(55);
 if (!ValiderChampsObligatoire(Table,"ar_code2",TAB_GLOBAL_COMPO[55],ar_code2,false))
 	return -1;
 if (!ValiderChampsType(Table,"ar_code2",TAB_GLOBAL_COMPO[55],ar_code2))
 	return -1;
 var ar_code3=GetValAt(56);
 if (!ValiderChampsObligatoire(Table,"ar_code3",TAB_GLOBAL_COMPO[56],ar_code3,false))
 	return -1;
 if (!ValiderChampsType(Table,"ar_code3",TAB_GLOBAL_COMPO[56],ar_code3))
 	return -1;
 var note=GetValAt(57);
 if (!ValiderChampsObligatoire(Table,"note",TAB_GLOBAL_COMPO[57],note,false))
 	return -1;
 if (!ValiderChampsType(Table,"note",TAB_GLOBAL_COMPO[57],note))
 	return -1;
 var Req="insert into "+Table+" ";
var TabInsertionEnPlus=new Array();
 Req+="("+NomCleMaitre+",ar_nom,ar_produit,ar_conditionnement,ar_personne,ar_prix,ar_codeean13,ar_code2,ar_code3,note"+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[0]:"")+")";
 Req+=" values ("+CleMaitre+","+(ar_nom=="" ? "null" : "'"+ValiderChaine(ar_nom)+"'" )+","+ar_produit+","+ar_conditionnement+","+ar_personne+","+(ar_prix=="" ? "null" : "'"+ValiderChaine(ar_prix)+"'" )+","+(ar_codeean13=="" ? "null" : "'"+ValiderChaine(ar_codeean13)+"'" )+","+(ar_code2=="" ? "null" : "'"+ValiderChaine(ar_code2)+"'" )+","+(ar_code3=="" ? "null" : "'"+ValiderChaine(ar_code3)+"'" )+","+(note=="" ? "null" : "'"+ValiderChaine(note)+"'" )+""+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[1]:"")+")";

 if (pgsql_update(Req)==0)
	alert("Echec lors de l'insertion");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Articles
  TAPEZ ICI LE CODE DE LA REQUETE DE SUPPRESSION 
***************************************************/
function User_Delete_Articles_Articles0(Compo_Maitre)
{
 var Table="article";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var Req="delete from "+Table+" where "+NomCleMaitre+" = "+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la supression");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Articles
  TAPEZ ICI LE CODE DE LA REQUETE DE MISE A JOUR 
***************************************************/
function User_Update_Articles_Articles0(Compo_Maitre)
{
 var Table="article";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var ar_nom=GetValAt(47);
 if (!ValiderChampsObligatoire(Table,"ar_nom",TAB_GLOBAL_COMPO[47],ar_nom,false))
 	return -1;
 if (!ValiderChampsType(Table,"ar_nom",TAB_GLOBAL_COMPO[47],ar_nom))
 	return -1;
 var ar_produit=GetValAt(48);
 if (ar_produit=="-1")
    ar_produit="null";
 if (!ValiderChampsObligatoire(Table,"ar_produit",TAB_GLOBAL_COMPO[48],ar_produit,true))
 	return -1;
 var ar_conditionnement=GetValAt(49);
 if (ar_conditionnement=="-1")
    ar_conditionnement="null";
 if (!ValiderChampsObligatoire(Table,"ar_conditionnement",TAB_GLOBAL_COMPO[49],ar_conditionnement,true))
 	return -1;
 var ar_personne=GetValAt(50);
 if (ar_personne=="-1")
    ar_personne="null";
 if (!ValiderChampsObligatoire(Table,"ar_personne",TAB_GLOBAL_COMPO[50],ar_personne,true))
 	return -1;
 var ar_prix=GetValAt(53);
 if (!ValiderChampsObligatoire(Table,"ar_prix",TAB_GLOBAL_COMPO[53],ar_prix,false))
 	return -1;
 if (!ValiderChampsType(Table,"ar_prix",TAB_GLOBAL_COMPO[53],ar_prix))
 	return -1;
 var ar_codeean13=GetValAt(54);
 if (!ValiderChampsObligatoire(Table,"ar_codeean13",TAB_GLOBAL_COMPO[54],ar_codeean13,false))
 	return -1;
 if (!ValiderChampsType(Table,"ar_codeean13",TAB_GLOBAL_COMPO[54],ar_codeean13))
 	return -1;
 var ar_code2=GetValAt(55);
 if (!ValiderChampsObligatoire(Table,"ar_code2",TAB_GLOBAL_COMPO[55],ar_code2,false))
 	return -1;
 if (!ValiderChampsType(Table,"ar_code2",TAB_GLOBAL_COMPO[55],ar_code2))
 	return -1;
 var ar_code3=GetValAt(56);
 if (!ValiderChampsObligatoire(Table,"ar_code3",TAB_GLOBAL_COMPO[56],ar_code3,false))
 	return -1;
 if (!ValiderChampsType(Table,"ar_code3",TAB_GLOBAL_COMPO[56],ar_code3))
 	return -1;
 var note=GetValAt(57);
 if (!ValiderChampsObligatoire(Table,"note",TAB_GLOBAL_COMPO[57],note,false))
 	return -1;
 if (!ValiderChampsType(Table,"note",TAB_GLOBAL_COMPO[57],note))
 	return -1;
 var Req="update "+Table+" set ";
 Req+="ar_nom="+(ar_nom=="" ? "null" : "'"+ValiderChaine(ar_nom)+"'" )+",ar_produit="+ar_produit+",ar_conditionnement="+ar_conditionnement+",ar_personne="+ar_personne+",ar_prix="+(ar_prix=="" ? "null" : "'"+ValiderChaine(ar_prix)+"'" )+",ar_codeean13="+(ar_codeean13=="" ? "null" : "'"+ValiderChaine(ar_codeean13)+"'" )+",ar_code2="+(ar_code2=="" ? "null" : "'"+ValiderChaine(ar_code2)+"'" )+",ar_code3="+(ar_code3=="" ? "null" : "'"+ValiderChaine(ar_code3)+"'" )+",note="+(note=="" ? "null" : "'"+ValiderChaine(note)+"'" )+"";
 Req+=" where "+NomCleMaitre+"="+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la mise à jour");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Conditionnements
  TAPEZ ICI LE CODE DE LA REQUETE D'INSERTION
***************************************************/
function User_Insert_Conditionnements_Conditionnements0(Compo_Maitre)
{

/*
***** INFOS ******

Nbr d'esclaves = 5

Id dans le tab: 62;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 63;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 64;
simple
Nbr Jointure: 1;
    Joint n° 0 = unite,ca_unite,un_numero

Id dans le tab: 65;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 66;
simple
Nbr Jointure: PAS DE JOINTURE;

******************
*/

 var Table="conditionnement";
 var CleMaitre = TAB_COMPO_PPTES[58].NewCle;
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var ca_nom=GetValAt(62);
 if (!ValiderChampsObligatoire(Table,"ca_nom",TAB_GLOBAL_COMPO[62],ca_nom,false))
 	return -1;
 if (!ValiderChampsType(Table,"ca_nom",TAB_GLOBAL_COMPO[62],ca_nom))
 	return -1;
 var ca_quantite=GetValAt(63);
 if (!ValiderChampsObligatoire(Table,"ca_quantite",TAB_GLOBAL_COMPO[63],ca_quantite,false))
 	return -1;
 if (!ValiderChampsType(Table,"ca_quantite",TAB_GLOBAL_COMPO[63],ca_quantite))
 	return -1;
 var ca_unite=GetValAt(64);
 if (ca_unite=="-1")
    ca_unite="null";
 if (!ValiderChampsObligatoire(Table,"ca_unite",TAB_GLOBAL_COMPO[64],ca_unite,true))
 	return -1;
 var ca_description=GetValAt(65);
 if (!ValiderChampsObligatoire(Table,"ca_description",TAB_GLOBAL_COMPO[65],ca_description,false))
 	return -1;
 if (!ValiderChampsType(Table,"ca_description",TAB_GLOBAL_COMPO[65],ca_description))
 	return -1;
 var note=GetValAt(66);
 if (!ValiderChampsObligatoire(Table,"note",TAB_GLOBAL_COMPO[66],note,false))
 	return -1;
 if (!ValiderChampsType(Table,"note",TAB_GLOBAL_COMPO[66],note))
 	return -1;
 var Req="insert into "+Table+" ";
var TabInsertionEnPlus=new Array();
 Req+="("+NomCleMaitre+",ca_nom,ca_quantite,ca_unite,ca_description,note"+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[0]:"")+")";
 Req+=" values ("+CleMaitre+","+(ca_nom=="" ? "null" : "'"+ValiderChaine(ca_nom)+"'" )+","+(ca_quantite=="" ? "null" : "'"+ValiderChaine(ca_quantite)+"'" )+","+ca_unite+","+(ca_description=="" ? "null" : "'"+ValiderChaine(ca_description)+"'" )+","+(note=="" ? "null" : "'"+ValiderChaine(note)+"'" )+""+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[1]:"")+")";

 if (pgsql_update(Req)==0)
	alert("Echec lors de l'insertion");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Conditionnements
  TAPEZ ICI LE CODE DE LA REQUETE DE SUPPRESSION 
***************************************************/
function User_Delete_Conditionnements_Conditionnements0(Compo_Maitre)
{
 var Table="conditionnement";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var Req="delete from "+Table+" where "+NomCleMaitre+" = "+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la supression");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Conditionnements
  TAPEZ ICI LE CODE DE LA REQUETE DE MISE A JOUR 
***************************************************/
function User_Update_Conditionnements_Conditionnements0(Compo_Maitre)
{
 var Table="conditionnement";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var ca_nom=GetValAt(62);
 if (!ValiderChampsObligatoire(Table,"ca_nom",TAB_GLOBAL_COMPO[62],ca_nom,false))
 	return -1;
 if (!ValiderChampsType(Table,"ca_nom",TAB_GLOBAL_COMPO[62],ca_nom))
 	return -1;
 var ca_quantite=GetValAt(63);
 if (!ValiderChampsObligatoire(Table,"ca_quantite",TAB_GLOBAL_COMPO[63],ca_quantite,false))
 	return -1;
 if (!ValiderChampsType(Table,"ca_quantite",TAB_GLOBAL_COMPO[63],ca_quantite))
 	return -1;
 var ca_unite=GetValAt(64);
 if (ca_unite=="-1")
    ca_unite="null";
 if (!ValiderChampsObligatoire(Table,"ca_unite",TAB_GLOBAL_COMPO[64],ca_unite,true))
 	return -1;
 var ca_description=GetValAt(65);
 if (!ValiderChampsObligatoire(Table,"ca_description",TAB_GLOBAL_COMPO[65],ca_description,false))
 	return -1;
 if (!ValiderChampsType(Table,"ca_description",TAB_GLOBAL_COMPO[65],ca_description))
 	return -1;
 var note=GetValAt(66);
 if (!ValiderChampsObligatoire(Table,"note",TAB_GLOBAL_COMPO[66],note,false))
 	return -1;
 if (!ValiderChampsType(Table,"note",TAB_GLOBAL_COMPO[66],note))
 	return -1;
 var Req="update "+Table+" set ";
 Req+="ca_nom="+(ca_nom=="" ? "null" : "'"+ValiderChaine(ca_nom)+"'" )+",ca_quantite="+(ca_quantite=="" ? "null" : "'"+ValiderChaine(ca_quantite)+"'" )+",ca_unite="+ca_unite+",ca_description="+(ca_description=="" ? "null" : "'"+ValiderChaine(ca_description)+"'" )+",note="+(note=="" ? "null" : "'"+ValiderChaine(note)+"'" )+"";
 Req+=" where "+NomCleMaitre+"="+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la mise à jour");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Produits
  TAPEZ ICI LE CODE DE LA REQUETE D'INSERTION
***************************************************/
function User_Insert_Produits_Produits0(Compo_Maitre)
{

/*
***** INFOS ******

Nbr d'esclaves = 11

Id dans le tab: 70;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 71;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 72;
simple
Nbr Jointure: 1;
    Joint n° 0 = typeproduit,pd_typeproduit,td_numero

Id dans le tab: 73;
simple
Nbr Jointure: 1;
    Joint n° 0 = firme,pd_firme,fi_numero

Id dans le tab: 74;
simple
Nbr Jointure: 1;
    Joint n° 0 = unite,pd_unite,un_numero

Id dans le tab: 75;
simple
Nbr Jointure: 1;
    Joint n° 0 = forme,pd_forme,fo_numero

Id dans le tab: 76;
simple
Nbr Jointure: 1;
    Joint n° 0 = variete,pd_variete,va_numero

Id dans le tab: 77;
simple
Nbr Jointure: 1;
    Joint n° 0 = composition,pd_composition,cs_numero

Id dans le tab: 78;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 79;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 83;
complexe
Nbr Jointure: 2;
    Joint n° 0 = declassement,pd_numero,dc_produit
    Joint n° 1 = classement,dc_classement,cl_numero

******************
*/

 var Table="produit";
 var CleMaitre = TAB_COMPO_PPTES[67].NewCle;
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var pd_nom=GetValAt(70);
 if (!ValiderChampsObligatoire(Table,"pd_nom",TAB_GLOBAL_COMPO[70],pd_nom,false))
 	return -1;
 if (!ValiderChampsType(Table,"pd_nom",TAB_GLOBAL_COMPO[70],pd_nom))
 	return -1;
 var pd_code=GetValAt(71);
 if (!ValiderChampsObligatoire(Table,"pd_code",TAB_GLOBAL_COMPO[71],pd_code,false))
 	return -1;
 if (!ValiderChampsType(Table,"pd_code",TAB_GLOBAL_COMPO[71],pd_code))
 	return -1;
 var pd_typeproduit=GetValAt(72);
 if (pd_typeproduit=="-1")
    pd_typeproduit="null";
 if (!ValiderChampsObligatoire(Table,"pd_typeproduit",TAB_GLOBAL_COMPO[72],pd_typeproduit,true))
 	return -1;
 var pd_firme=GetValAt(73);
 if (pd_firme=="-1")
    pd_firme="null";
 if (!ValiderChampsObligatoire(Table,"pd_firme",TAB_GLOBAL_COMPO[73],pd_firme,true))
 	return -1;
 var pd_unite=GetValAt(74);
 if (pd_unite=="-1")
    pd_unite="null";
 if (!ValiderChampsObligatoire(Table,"pd_unite",TAB_GLOBAL_COMPO[74],pd_unite,true))
 	return -1;
 var pd_forme=GetValAt(75);
 if (pd_forme=="-1")
    pd_forme="null";
 if (!ValiderChampsObligatoire(Table,"pd_forme",TAB_GLOBAL_COMPO[75],pd_forme,true))
 	return -1;
 var pd_variete=GetValAt(76);
 if (pd_variete=="-1")
    pd_variete="null";
 if (!ValiderChampsObligatoire(Table,"pd_variete",TAB_GLOBAL_COMPO[76],pd_variete,true))
 	return -1;
 var pd_composition=GetValAt(77);
 if (pd_composition=="-1")
    pd_composition="null";
 if (!ValiderChampsObligatoire(Table,"pd_composition",TAB_GLOBAL_COMPO[77],pd_composition,true))
 	return -1;
 var couleur=GetValAt(78);
 if (!ValiderChampsObligatoire(Table,"couleur",TAB_GLOBAL_COMPO[78],couleur,false))
 	return -1;
 if (!ValiderChampsType(Table,"couleur",TAB_GLOBAL_COMPO[78],couleur))
 	return -1;
 var note=GetValAt(79);
 if (!ValiderChampsObligatoire(Table,"note",TAB_GLOBAL_COMPO[79],note,false))
 	return -1;
 if (!ValiderChampsType(Table,"note",TAB_GLOBAL_COMPO[79],note))
 	return -1;
 var Req="insert into "+Table+" ";
var TabInsertionEnPlus=new Array();
 Req+="("+NomCleMaitre+",pd_nom,pd_code,pd_typeproduit,pd_firme,pd_unite,pd_forme,pd_variete,pd_composition,couleur,note"+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[0]:"")+")";
 Req+=" values ("+CleMaitre+","+(pd_nom=="" ? "null" : "'"+ValiderChaine(pd_nom)+"'" )+","+(pd_code=="" ? "null" : "'"+ValiderChaine(pd_code)+"'" )+","+pd_typeproduit+","+pd_firme+","+pd_unite+","+pd_forme+","+pd_variete+","+pd_composition+","+(couleur==null ? "null" : "'"+ValiderChaine(couleur)+"'" )+","+(note=="" ? "null" : "'"+ValiderChaine(note)+"'" )+""+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[1]:"")+")";

 if (pgsql_update(Req)==0)
	alert("Echec lors de l'insertion");

/* table classement*/
LstDouble_Exec_Req(GetSQLCompoAt(83),CleMaitre);
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Produits
  TAPEZ ICI LE CODE DE LA REQUETE DE SUPPRESSION 
***************************************************/
function User_Delete_Produits_Produits0(Compo_Maitre)
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
function User_Update_Produits_Produits0(Compo_Maitre)
{
 var Table="produit";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var pd_nom=GetValAt(70);
 if (!ValiderChampsObligatoire(Table,"pd_nom",TAB_GLOBAL_COMPO[70],pd_nom,false))
 	return -1;
 if (!ValiderChampsType(Table,"pd_nom",TAB_GLOBAL_COMPO[70],pd_nom))
 	return -1;
 var pd_code=GetValAt(71);
 if (!ValiderChampsObligatoire(Table,"pd_code",TAB_GLOBAL_COMPO[71],pd_code,false))
 	return -1;
 if (!ValiderChampsType(Table,"pd_code",TAB_GLOBAL_COMPO[71],pd_code))
 	return -1;
 var pd_typeproduit=GetValAt(72);
 if (pd_typeproduit=="-1")
    pd_typeproduit="null";
 if (!ValiderChampsObligatoire(Table,"pd_typeproduit",TAB_GLOBAL_COMPO[72],pd_typeproduit,true))
 	return -1;
 var pd_firme=GetValAt(73);
 if (pd_firme=="-1")
    pd_firme="null";
 if (!ValiderChampsObligatoire(Table,"pd_firme",TAB_GLOBAL_COMPO[73],pd_firme,true))
 	return -1;
 var pd_unite=GetValAt(74);
 if (pd_unite=="-1")
    pd_unite="null";
 if (!ValiderChampsObligatoire(Table,"pd_unite",TAB_GLOBAL_COMPO[74],pd_unite,true))
 	return -1;
 var pd_forme=GetValAt(75);
 if (pd_forme=="-1")
    pd_forme="null";
 if (!ValiderChampsObligatoire(Table,"pd_forme",TAB_GLOBAL_COMPO[75],pd_forme,true))
 	return -1;
 var pd_variete=GetValAt(76);
 if (pd_variete=="-1")
    pd_variete="null";
 if (!ValiderChampsObligatoire(Table,"pd_variete",TAB_GLOBAL_COMPO[76],pd_variete,true))
 	return -1;
 var pd_composition=GetValAt(77);
 if (pd_composition=="-1")
    pd_composition="null";
 if (!ValiderChampsObligatoire(Table,"pd_composition",TAB_GLOBAL_COMPO[77],pd_composition,true))
 	return -1;
 var couleur=GetValAt(78);
 if (!ValiderChampsObligatoire(Table,"couleur",TAB_GLOBAL_COMPO[78],couleur,false))
 	return -1;
 if (!ValiderChampsType(Table,"couleur",TAB_GLOBAL_COMPO[78],couleur))
 	return -1;
 var note=GetValAt(79);
 if (!ValiderChampsObligatoire(Table,"note",TAB_GLOBAL_COMPO[79],note,false))
 	return -1;
 if (!ValiderChampsType(Table,"note",TAB_GLOBAL_COMPO[79],note))
 	return -1;
 var Req="update "+Table+" set ";
 Req+="pd_nom="+(pd_nom=="" ? "null" : "'"+ValiderChaine(pd_nom)+"'" )+",pd_code="+(pd_code=="" ? "null" : "'"+ValiderChaine(pd_code)+"'" )+",pd_typeproduit="+pd_typeproduit+",pd_firme="+pd_firme+",pd_unite="+pd_unite+",pd_forme="+pd_forme+",pd_variete="+pd_variete+",pd_composition="+pd_composition+",couleur="+(couleur==null ? "null" : "'"+ValiderChaine(couleur)+"'" )+",note="+(note=="" ? "null" : "'"+ValiderChaine(note)+"'" )+"";
 Req+=" where "+NomCleMaitre+"="+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la mise à jour");

/* table classement*/
LstDouble_Exec_Req(GetSQLCompoAt(83),CleMaitre);
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Couches
  TAPEZ ICI LE CODE DE LA REQUETE D'INSERTION
***************************************************/
function User_Insert_Couches_Couches0(Compo_Maitre)
{

/*
***** INFOS ******

Nbr d'esclaves = 4

Id dans le tab: 89;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 90;
simple
Nbr Jointure: 1;
    Joint n° 0 = typecouche,cc_typecouche,tc_numero

Id dans le tab: 91;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 92;
simple
Nbr Jointure: PAS DE JOINTURE;

******************
*/

 var Table="couche";
 var CleMaitre = TAB_COMPO_PPTES[86].NewCle;
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var cc_nom=GetValAt(89);
 if (!ValiderChampsObligatoire(Table,"cc_nom",TAB_GLOBAL_COMPO[89],cc_nom,false))
 	return -1;
 if (!ValiderChampsType(Table,"cc_nom",TAB_GLOBAL_COMPO[89],cc_nom))
 	return -1;
 var cc_typecouche=GetValAt(90);
 if (cc_typecouche=="-1")
    cc_typecouche="null";
 if (!ValiderChampsObligatoire(Table,"cc_typecouche",TAB_GLOBAL_COMPO[90],cc_typecouche,true))
 	return -1;
 var note=GetValAt(91);
 if (!ValiderChampsObligatoire(Table,"note",TAB_GLOBAL_COMPO[91],note,false))
 	return -1;
 if (!ValiderChampsType(Table,"note",TAB_GLOBAL_COMPO[91],note))
 	return -1;
 var couleur=GetValAt(92);
 if (!ValiderChampsObligatoire(Table,"couleur",TAB_GLOBAL_COMPO[92],couleur,false))
 	return -1;
 if (!ValiderChampsType(Table,"couleur",TAB_GLOBAL_COMPO[92],couleur))
 	return -1;
 var Req="insert into "+Table+" ";
var TabInsertionEnPlus=new Array();
 Req+="("+NomCleMaitre+",cc_nom,cc_typecouche,note,couleur"+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[0]:"")+")";
 Req+=" values ("+CleMaitre+","+(cc_nom=="" ? "null" : "'"+ValiderChaine(cc_nom)+"'" )+","+cc_typecouche+","+(note=="" ? "null" : "'"+ValiderChaine(note)+"'" )+","+(couleur==null ? "null" : "'"+ValiderChaine(couleur)+"'" )+""+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[1]:"")+")";

 if (pgsql_update(Req)==0)
	alert("Echec lors de l'insertion");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Couches
  TAPEZ ICI LE CODE DE LA REQUETE DE SUPPRESSION 
***************************************************/
function User_Delete_Couches_Couches0(Compo_Maitre)
{
 var Table="couche";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var Req="delete from "+Table+" where "+NomCleMaitre+" = "+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la supression");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Couches
  TAPEZ ICI LE CODE DE LA REQUETE DE MISE A JOUR 
***************************************************/
function User_Update_Couches_Couches0(Compo_Maitre)
{
 var Table="couche";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var cc_nom=GetValAt(89);
 if (!ValiderChampsObligatoire(Table,"cc_nom",TAB_GLOBAL_COMPO[89],cc_nom,false))
 	return -1;
 if (!ValiderChampsType(Table,"cc_nom",TAB_GLOBAL_COMPO[89],cc_nom))
 	return -1;
 var cc_typecouche=GetValAt(90);
 if (cc_typecouche=="-1")
    cc_typecouche="null";
 if (!ValiderChampsObligatoire(Table,"cc_typecouche",TAB_GLOBAL_COMPO[90],cc_typecouche,true))
 	return -1;
 var note=GetValAt(91);
 if (!ValiderChampsObligatoire(Table,"note",TAB_GLOBAL_COMPO[91],note,false))
 	return -1;
 if (!ValiderChampsType(Table,"note",TAB_GLOBAL_COMPO[91],note))
 	return -1;
 var couleur=GetValAt(92);
 if (!ValiderChampsObligatoire(Table,"couleur",TAB_GLOBAL_COMPO[92],couleur,false))
 	return -1;
 if (!ValiderChampsType(Table,"couleur",TAB_GLOBAL_COMPO[92],couleur))
 	return -1;
 var Req="update "+Table+" set ";
 Req+="cc_nom="+(cc_nom=="" ? "null" : "'"+ValiderChaine(cc_nom)+"'" )+",cc_typecouche="+cc_typecouche+",note="+(note=="" ? "null" : "'"+ValiderChaine(note)+"'" )+",couleur="+(couleur==null ? "null" : "'"+ValiderChaine(couleur)+"'" )+"";
 Req+=" where "+NomCleMaitre+"="+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la mise à jour");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Type de couche
  TAPEZ ICI LE CODE DE LA REQUETE D'INSERTION
***************************************************/
function User_Insert_Type_de_couche_Type_de_couches0(Compo_Maitre)
{

/*
***** INFOS ******

Nbr d'esclaves = 4

Id dans le tab: 96;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 97;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 98;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 99;
simple
Nbr Jointure: PAS DE JOINTURE;

******************
*/

 var Table="typecouche";
 var CleMaitre = TAB_COMPO_PPTES[93].NewCle;
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var tc_nom=GetValAt(96);
 if (!ValiderChampsObligatoire(Table,"tc_nom",TAB_GLOBAL_COMPO[96],tc_nom,false))
 	return -1;
 if (!ValiderChampsType(Table,"tc_nom",TAB_GLOBAL_COMPO[96],tc_nom))
 	return -1;
 var note=GetValAt(97);
 if (!ValiderChampsObligatoire(Table,"note",TAB_GLOBAL_COMPO[97],note,false))
 	return -1;
 if (!ValiderChampsType(Table,"note",TAB_GLOBAL_COMPO[97],note))
 	return -1;
 var couleur=GetValAt(98);
 if (!ValiderChampsObligatoire(Table,"couleur",TAB_GLOBAL_COMPO[98],couleur,false))
 	return -1;
 if (!ValiderChampsType(Table,"couleur",TAB_GLOBAL_COMPO[98],couleur))
 	return -1;
 var tc_sansilots=GetValAt(99);
 if (!ValiderChampsObligatoire(Table,"tc_sansilots",TAB_GLOBAL_COMPO[99],tc_sansilots,false))
 	return -1;
 if (!ValiderChampsType(Table,"tc_sansilots",TAB_GLOBAL_COMPO[99],tc_sansilots))
 	return -1;
 var Req="insert into "+Table+" ";
var TabInsertionEnPlus=new Array();
 Req+="("+NomCleMaitre+",tc_nom,note,couleur,tc_sansilots"+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[0]:"")+")";
 Req+=" values ("+CleMaitre+","+(tc_nom=="" ? "null" : "'"+ValiderChaine(tc_nom)+"'" )+","+(note=="" ? "null" : "'"+ValiderChaine(note)+"'" )+","+(couleur==null ? "null" : "'"+ValiderChaine(couleur)+"'" )+","+(tc_sansilots=="" ? "null" : "'"+ValiderChaine(tc_sansilots)+"'" )+""+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[1]:"")+")";

 if (pgsql_update(Req)==0)
	alert("Echec lors de l'insertion");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Type de couche
  TAPEZ ICI LE CODE DE LA REQUETE DE SUPPRESSION 
***************************************************/
function User_Delete_Type_de_couche_Type_de_couches0(Compo_Maitre)
{
 var Table="typecouche";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var Req="delete from "+Table+" where "+NomCleMaitre+" = "+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la supression");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Type de couche
  TAPEZ ICI LE CODE DE LA REQUETE DE MISE A JOUR 
***************************************************/
function User_Update_Type_de_couche_Type_de_couches0(Compo_Maitre)
{
 var Table="typecouche";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var tc_nom=GetValAt(96);
 if (!ValiderChampsObligatoire(Table,"tc_nom",TAB_GLOBAL_COMPO[96],tc_nom,false))
 	return -1;
 if (!ValiderChampsType(Table,"tc_nom",TAB_GLOBAL_COMPO[96],tc_nom))
 	return -1;
 var note=GetValAt(97);
 if (!ValiderChampsObligatoire(Table,"note",TAB_GLOBAL_COMPO[97],note,false))
 	return -1;
 if (!ValiderChampsType(Table,"note",TAB_GLOBAL_COMPO[97],note))
 	return -1;
 var couleur=GetValAt(98);
 if (!ValiderChampsObligatoire(Table,"couleur",TAB_GLOBAL_COMPO[98],couleur,false))
 	return -1;
 if (!ValiderChampsType(Table,"couleur",TAB_GLOBAL_COMPO[98],couleur))
 	return -1;
 var tc_sansilots=GetValAt(99);
 if (!ValiderChampsObligatoire(Table,"tc_sansilots",TAB_GLOBAL_COMPO[99],tc_sansilots,false))
 	return -1;
 if (!ValiderChampsType(Table,"tc_sansilots",TAB_GLOBAL_COMPO[99],tc_sansilots))
 	return -1;
 var Req="update "+Table+" set ";
 Req+="tc_nom="+(tc_nom=="" ? "null" : "'"+ValiderChaine(tc_nom)+"'" )+",note="+(note=="" ? "null" : "'"+ValiderChaine(note)+"'" )+",couleur="+(couleur==null ? "null" : "'"+ValiderChaine(couleur)+"'" )+",tc_sansilots="+(tc_sansilots=="" ? "null" : "'"+ValiderChaine(tc_sansilots)+"'" )+"";
 Req+=" where "+NomCleMaitre+"="+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la mise à jour");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Type de produits
  TAPEZ ICI LE CODE DE LA REQUETE D'INSERTION
***************************************************/
function User_Insert_Type_de_produits_Type_de_produits0(Compo_Maitre)
{

/*
***** INFOS ******

Nbr d'esclaves = 3

Id dans le tab: 103;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 104;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 105;
simple
Nbr Jointure: PAS DE JOINTURE;

******************
*/

 var Table="typeproduit";
 var CleMaitre = TAB_COMPO_PPTES[100].NewCle;
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var td_nom=GetValAt(103);
 if (!ValiderChampsObligatoire(Table,"td_nom",TAB_GLOBAL_COMPO[103],td_nom,false))
 	return -1;
 if (!ValiderChampsType(Table,"td_nom",TAB_GLOBAL_COMPO[103],td_nom))
 	return -1;
 var couleur=GetValAt(104);
 if (!ValiderChampsObligatoire(Table,"couleur",TAB_GLOBAL_COMPO[104],couleur,false))
 	return -1;
 if (!ValiderChampsType(Table,"couleur",TAB_GLOBAL_COMPO[104],couleur))
 	return -1;
 var note=GetValAt(105);
 if (!ValiderChampsObligatoire(Table,"note",TAB_GLOBAL_COMPO[105],note,false))
 	return -1;
 if (!ValiderChampsType(Table,"note",TAB_GLOBAL_COMPO[105],note))
 	return -1;
 var Req="insert into "+Table+" ";
var TabInsertionEnPlus=new Array();
 Req+="("+NomCleMaitre+",td_nom,couleur,note"+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[0]:"")+")";
 Req+=" values ("+CleMaitre+","+(td_nom=="" ? "null" : "'"+ValiderChaine(td_nom)+"'" )+","+(couleur==null ? "null" : "'"+ValiderChaine(couleur)+"'" )+","+(note=="" ? "null" : "'"+ValiderChaine(note)+"'" )+""+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[1]:"")+")";

 if (pgsql_update(Req)==0)
	alert("Echec lors de l'insertion");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Type de produits
  TAPEZ ICI LE CODE DE LA REQUETE DE SUPPRESSION 
***************************************************/
function User_Delete_Type_de_produits_Type_de_produits0(Compo_Maitre)
{
 var Table="typeproduit";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var Req="delete from "+Table+" where "+NomCleMaitre+" = "+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la supression");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Type de produits
  TAPEZ ICI LE CODE DE LA REQUETE DE MISE A JOUR 
***************************************************/
function User_Update_Type_de_produits_Type_de_produits0(Compo_Maitre)
{
 var Table="typeproduit";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var td_nom=GetValAt(103);
 if (!ValiderChampsObligatoire(Table,"td_nom",TAB_GLOBAL_COMPO[103],td_nom,false))
 	return -1;
 if (!ValiderChampsType(Table,"td_nom",TAB_GLOBAL_COMPO[103],td_nom))
 	return -1;
 var couleur=GetValAt(104);
 if (!ValiderChampsObligatoire(Table,"couleur",TAB_GLOBAL_COMPO[104],couleur,false))
 	return -1;
 if (!ValiderChampsType(Table,"couleur",TAB_GLOBAL_COMPO[104],couleur))
 	return -1;
 var note=GetValAt(105);
 if (!ValiderChampsObligatoire(Table,"note",TAB_GLOBAL_COMPO[105],note,false))
 	return -1;
 if (!ValiderChampsType(Table,"note",TAB_GLOBAL_COMPO[105],note))
 	return -1;
 var Req="update "+Table+" set ";
 Req+="td_nom="+(td_nom=="" ? "null" : "'"+ValiderChaine(td_nom)+"'" )+",couleur="+(couleur==null ? "null" : "'"+ValiderChaine(couleur)+"'" )+",note="+(note=="" ? "null" : "'"+ValiderChaine(note)+"'" )+"";
 Req+=" where "+NomCleMaitre+"="+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la mise à jour");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Unité
  TAPEZ ICI LE CODE DE LA REQUETE D'INSERTION
***************************************************/
function User_Insert_Unité_Unités0(Compo_Maitre)
{

/*
***** INFOS ******

Nbr d'esclaves = 1

Id dans le tab: 108;
simple
Nbr Jointure: PAS DE JOINTURE;

******************
*/

 var Table="unite";
 var CleMaitre = TAB_COMPO_PPTES[106].NewCle;
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var un_nom=GetValAt(108);
 if (!ValiderChampsObligatoire(Table,"un_nom",TAB_GLOBAL_COMPO[108],un_nom,false))
 	return -1;
 if (!ValiderChampsType(Table,"un_nom",TAB_GLOBAL_COMPO[108],un_nom))
 	return -1;
 var Req="insert into "+Table+" ";
var TabInsertionEnPlus=new Array();
 Req+="("+NomCleMaitre+",un_nom"+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[0]:"")+")";
 Req+=" values ("+CleMaitre+","+(un_nom=="" ? "null" : "'"+ValiderChaine(un_nom)+"'" )+""+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[1]:"")+")";

 if (pgsql_update(Req)==0)
	alert("Echec lors de l'insertion");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Unité
  TAPEZ ICI LE CODE DE LA REQUETE DE SUPPRESSION 
***************************************************/
function User_Delete_Unité_Unités0(Compo_Maitre)
{
 var Table="unite";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var Req="delete from "+Table+" where "+NomCleMaitre+" = "+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la supression");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Unité
  TAPEZ ICI LE CODE DE LA REQUETE DE MISE A JOUR 
***************************************************/
function User_Update_Unité_Unités0(Compo_Maitre)
{
 var Table="unite";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var un_nom=GetValAt(108);
 if (!ValiderChampsObligatoire(Table,"un_nom",TAB_GLOBAL_COMPO[108],un_nom,false))
 	return -1;
 if (!ValiderChampsType(Table,"un_nom",TAB_GLOBAL_COMPO[108],un_nom))
 	return -1;
 var Req="update "+Table+" set ";
 Req+="un_nom="+(un_nom=="" ? "null" : "'"+ValiderChaine(un_nom)+"'" )+"";
 Req+=" where "+NomCleMaitre+"="+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la mise à jour");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Forme
  TAPEZ ICI LE CODE DE LA REQUETE D'INSERTION
***************************************************/
function User_Insert_Forme_Formes0(Compo_Maitre)
{

/*
***** INFOS ******

Nbr d'esclaves = 3

Id dans le tab: 111;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 112;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 113;
simple
Nbr Jointure: PAS DE JOINTURE;

******************
*/

 var Table="forme";
 var CleMaitre = TAB_COMPO_PPTES[109].NewCle;
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var fo_nom=GetValAt(111);
 if (!ValiderChampsObligatoire(Table,"fo_nom",TAB_GLOBAL_COMPO[111],fo_nom,false))
 	return -1;
 if (!ValiderChampsType(Table,"fo_nom",TAB_GLOBAL_COMPO[111],fo_nom))
 	return -1;
 var fo_abbrevation=GetValAt(112);
 if (!ValiderChampsObligatoire(Table,"fo_abbrevation",TAB_GLOBAL_COMPO[112],fo_abbrevation,false))
 	return -1;
 if (!ValiderChampsType(Table,"fo_abbrevation",TAB_GLOBAL_COMPO[112],fo_abbrevation))
 	return -1;
 var fo_description=GetValAt(113);
 if (!ValiderChampsObligatoire(Table,"fo_description",TAB_GLOBAL_COMPO[113],fo_description,false))
 	return -1;
 if (!ValiderChampsType(Table,"fo_description",TAB_GLOBAL_COMPO[113],fo_description))
 	return -1;
 var Req="insert into "+Table+" ";
var TabInsertionEnPlus=new Array();
 Req+="("+NomCleMaitre+",fo_nom,fo_abbrevation,fo_description"+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[0]:"")+")";
 Req+=" values ("+CleMaitre+","+(fo_nom=="" ? "null" : "'"+ValiderChaine(fo_nom)+"'" )+","+(fo_abbrevation=="" ? "null" : "'"+ValiderChaine(fo_abbrevation)+"'" )+","+(fo_description=="" ? "null" : "'"+ValiderChaine(fo_description)+"'" )+""+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[1]:"")+")";

 if (pgsql_update(Req)==0)
	alert("Echec lors de l'insertion");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Forme
  TAPEZ ICI LE CODE DE LA REQUETE DE SUPPRESSION 
***************************************************/
function User_Delete_Forme_Formes0(Compo_Maitre)
{
 var Table="forme";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var Req="delete from "+Table+" where "+NomCleMaitre+" = "+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la supression");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Forme
  TAPEZ ICI LE CODE DE LA REQUETE DE MISE A JOUR 
***************************************************/
function User_Update_Forme_Formes0(Compo_Maitre)
{
 var Table="forme";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var fo_nom=GetValAt(111);
 if (!ValiderChampsObligatoire(Table,"fo_nom",TAB_GLOBAL_COMPO[111],fo_nom,false))
 	return -1;
 if (!ValiderChampsType(Table,"fo_nom",TAB_GLOBAL_COMPO[111],fo_nom))
 	return -1;
 var fo_abbrevation=GetValAt(112);
 if (!ValiderChampsObligatoire(Table,"fo_abbrevation",TAB_GLOBAL_COMPO[112],fo_abbrevation,false))
 	return -1;
 if (!ValiderChampsType(Table,"fo_abbrevation",TAB_GLOBAL_COMPO[112],fo_abbrevation))
 	return -1;
 var fo_description=GetValAt(113);
 if (!ValiderChampsObligatoire(Table,"fo_description",TAB_GLOBAL_COMPO[113],fo_description,false))
 	return -1;
 if (!ValiderChampsType(Table,"fo_description",TAB_GLOBAL_COMPO[113],fo_description))
 	return -1;
 var Req="update "+Table+" set ";
 Req+="fo_nom="+(fo_nom=="" ? "null" : "'"+ValiderChaine(fo_nom)+"'" )+",fo_abbrevation="+(fo_abbrevation=="" ? "null" : "'"+ValiderChaine(fo_abbrevation)+"'" )+",fo_description="+(fo_description=="" ? "null" : "'"+ValiderChaine(fo_description)+"'" )+"";
 Req+=" where "+NomCleMaitre+"="+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la mise à jour");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Varieté
  TAPEZ ICI LE CODE DE LA REQUETE D'INSERTION
***************************************************/
function User_Insert_Varieté_Varietés0(Compo_Maitre)
{

/*
***** INFOS ******

Nbr d'esclaves = 3

Id dans le tab: 116;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 117;
simple
Nbr Jointure: 1;
    Joint n° 0 = espece,va_espece,es_numero

Id dans le tab: 118;
simple
Nbr Jointure: PAS DE JOINTURE;

******************
*/

 var Table="variete";
 var CleMaitre = TAB_COMPO_PPTES[114].NewCle;
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var va_nom=GetValAt(116);
 if (!ValiderChampsObligatoire(Table,"va_nom",TAB_GLOBAL_COMPO[116],va_nom,false))
 	return -1;
 if (!ValiderChampsType(Table,"va_nom",TAB_GLOBAL_COMPO[116],va_nom))
 	return -1;
 var va_espece=GetValAt(117);
 if (va_espece=="-1")
    va_espece="null";
 if (!ValiderChampsObligatoire(Table,"va_espece",TAB_GLOBAL_COMPO[117],va_espece,true))
 	return -1;
 var couleur=GetValAt(118);
 if (!ValiderChampsObligatoire(Table,"couleur",TAB_GLOBAL_COMPO[118],couleur,false))
 	return -1;
 if (!ValiderChampsType(Table,"couleur",TAB_GLOBAL_COMPO[118],couleur))
 	return -1;
 var Req="insert into "+Table+" ";
var TabInsertionEnPlus=new Array();
 Req+="("+NomCleMaitre+",va_nom,va_espece,couleur"+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[0]:"")+")";
 Req+=" values ("+CleMaitre+","+(va_nom=="" ? "null" : "'"+ValiderChaine(va_nom)+"'" )+","+va_espece+","+(couleur==null ? "null" : "'"+ValiderChaine(couleur)+"'" )+""+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[1]:"")+")";

 if (pgsql_update(Req)==0)
	alert("Echec lors de l'insertion");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Varieté
  TAPEZ ICI LE CODE DE LA REQUETE DE SUPPRESSION 
***************************************************/
function User_Delete_Varieté_Varietés0(Compo_Maitre)
{
 var Table="variete";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var Req="delete from "+Table+" where "+NomCleMaitre+" = "+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la supression");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Varieté
  TAPEZ ICI LE CODE DE LA REQUETE DE MISE A JOUR 
***************************************************/
function User_Update_Varieté_Varietés0(Compo_Maitre)
{
 var Table="variete";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var va_nom=GetValAt(116);
 if (!ValiderChampsObligatoire(Table,"va_nom",TAB_GLOBAL_COMPO[116],va_nom,false))
 	return -1;
 if (!ValiderChampsType(Table,"va_nom",TAB_GLOBAL_COMPO[116],va_nom))
 	return -1;
 var va_espece=GetValAt(117);
 if (va_espece=="-1")
    va_espece="null";
 if (!ValiderChampsObligatoire(Table,"va_espece",TAB_GLOBAL_COMPO[117],va_espece,true))
 	return -1;
 var couleur=GetValAt(118);
 if (!ValiderChampsObligatoire(Table,"couleur",TAB_GLOBAL_COMPO[118],couleur,false))
 	return -1;
 if (!ValiderChampsType(Table,"couleur",TAB_GLOBAL_COMPO[118],couleur))
 	return -1;
 var Req="update "+Table+" set ";
 Req+="va_nom="+(va_nom=="" ? "null" : "'"+ValiderChaine(va_nom)+"'" )+",va_espece="+va_espece+",couleur="+(couleur==null ? "null" : "'"+ValiderChaine(couleur)+"'" )+"";
 Req+=" where "+NomCleMaitre+"="+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la mise à jour");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Composition
  TAPEZ ICI LE CODE DE LA REQUETE D'INSERTION
***************************************************/
function User_Insert_Composition_Compositions0(Compo_Maitre)
{

/*
***** INFOS ******

Nbr d'esclaves = 3

Id dans le tab: 121;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 122;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 123;
complexe
Nbr Jointure: 1;
    Joint n° 0 = compose,cs_numero,ce_composition

******************
*/

 var Table="composition";
 var CleMaitre = TAB_COMPO_PPTES[119].NewCle;
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var cs_nom=GetValAt(121);
 if (!ValiderChampsObligatoire(Table,"cs_nom",TAB_GLOBAL_COMPO[121],cs_nom,false))
 	return -1;
 if (!ValiderChampsType(Table,"cs_nom",TAB_GLOBAL_COMPO[121],cs_nom))
 	return -1;
 var note=GetValAt(122);
 if (!ValiderChampsObligatoire(Table,"note",TAB_GLOBAL_COMPO[122],note,false))
 	return -1;
 if (!ValiderChampsType(Table,"note",TAB_GLOBAL_COMPO[122],note))
 	return -1;
 var Req="insert into "+Table+" ";
var TabInsertionEnPlus=new Array();
 Req+="("+NomCleMaitre+",cs_nom,note"+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[0]:"")+")";
 Req+=" values ("+CleMaitre+","+(cs_nom=="" ? "null" : "'"+ValiderChaine(cs_nom)+"'" )+","+(note=="" ? "null" : "'"+ValiderChaine(note)+"'" )+""+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[1]:"")+")";

 if (pgsql_update(Req)==0)
	alert("Echec lors de l'insertion");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Composition
  TAPEZ ICI LE CODE DE LA REQUETE DE SUPPRESSION 
***************************************************/
function User_Delete_Composition_Compositions0(Compo_Maitre)
{
 var Table="composition";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var Req="delete from "+Table+" where "+NomCleMaitre+" = "+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la supression");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Composition
  TAPEZ ICI LE CODE DE LA REQUETE DE MISE A JOUR 
***************************************************/
function User_Update_Composition_Compositions0(Compo_Maitre)
{
 var Table="composition";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var cs_nom=GetValAt(121);
 if (!ValiderChampsObligatoire(Table,"cs_nom",TAB_GLOBAL_COMPO[121],cs_nom,false))
 	return -1;
 if (!ValiderChampsType(Table,"cs_nom",TAB_GLOBAL_COMPO[121],cs_nom))
 	return -1;
 var note=GetValAt(122);
 if (!ValiderChampsObligatoire(Table,"note",TAB_GLOBAL_COMPO[122],note,false))
 	return -1;
 if (!ValiderChampsType(Table,"note",TAB_GLOBAL_COMPO[122],note))
 	return -1;
 var Req="update "+Table+" set ";
 Req+="cs_nom="+(cs_nom=="" ? "null" : "'"+ValiderChaine(cs_nom)+"'" )+",note="+(note=="" ? "null" : "'"+ValiderChaine(note)+"'" )+"";
 Req+=" where "+NomCleMaitre+"="+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la mise à jour");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Composition
  TAPEZ ICI LE CODE DE LA REQUETE D'INSERTION
***************************************************/
function User_Insert_Composition_Composants_3(Compo_Maitre)
{

/*
***** INFOS ******

Nbr d'esclaves = 3

Id dans le tab: 127;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 128;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 129;
simple
Nbr Jointure: 1;
    Joint n° 0 = composant,ce_composant,cm_numero

******************
*/

 var Table="compose";
 var CleMaitre = TAB_COMPO_PPTES[123].NewCle;
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 /* COMPOSANT LISTE AVEC JOINTURE SIMPLE */
 var ce_concentration=GetValAt(127);
 if (!ValiderChampsObligatoire(Table,"ce_concentration",TAB_GLOBAL_COMPO[127],ce_concentration,false))
 	return -1;
 if (!ValiderChampsType(Table,"ce_concentration",TAB_GLOBAL_COMPO[127],ce_concentration))
 	return -1;
 var ce_unite=GetValAt(128);
 if (!ValiderChampsObligatoire(Table,"ce_unite",TAB_GLOBAL_COMPO[128],ce_unite,false))
 	return -1;
 if (!ValiderChampsType(Table,"ce_unite",TAB_GLOBAL_COMPO[128],ce_unite))
 	return -1;
 var ce_composant=GetValAt(129);
 if (ce_composant=="-1")
    ce_composant="null";
 if (!ValiderChampsObligatoire(Table,"ce_composant",TAB_GLOBAL_COMPO[129],ce_composant,true))
 	return -1;
 var Req="insert into "+Table+" ";
var TabInsertionEnPlus=new Array();
 Req+="("+NomCleMaitre+",ce_composition,ce_concentration,ce_unite,ce_composant"+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[0]:"")+")";
 Req+=" values ("+CleMaitre+","+TAB_COMPO_PPTES[119].NewCle+","+(ce_concentration=="" ? "null" : "'"+ValiderChaine(ce_concentration)+"'" )+","+(ce_unite=="" ? "null" : "'"+ValiderChaine(ce_unite)+"'" )+","+ce_composant+""+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[1]:"")+")";

 if (pgsql_update(Req)==0)
	alert("Echec lors de l'insertion");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Composition
  TAPEZ ICI LE CODE DE LA REQUETE DE SUPPRESSION 
***************************************************/
function User_Delete_Composition_Composants_3(Compo_Maitre)
{
 var Table="compose";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var Req="delete from "+Table+" where "+NomCleMaitre+" = "+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la supression");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Composition
  TAPEZ ICI LE CODE DE LA REQUETE DE MISE A JOUR 
***************************************************/
function User_Update_Composition_Composants_3(Compo_Maitre)
{
 var Table="compose";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var ce_concentration=GetValAt(127);
 if (!ValiderChampsObligatoire(Table,"ce_concentration",TAB_GLOBAL_COMPO[127],ce_concentration,false))
 	return -1;
 if (!ValiderChampsType(Table,"ce_concentration",TAB_GLOBAL_COMPO[127],ce_concentration))
 	return -1;
 var ce_unite=GetValAt(128);
 if (!ValiderChampsObligatoire(Table,"ce_unite",TAB_GLOBAL_COMPO[128],ce_unite,false))
 	return -1;
 if (!ValiderChampsType(Table,"ce_unite",TAB_GLOBAL_COMPO[128],ce_unite))
 	return -1;
 var ce_composant=GetValAt(129);
 if (ce_composant=="-1")
    ce_composant="null";
 if (!ValiderChampsObligatoire(Table,"ce_composant",TAB_GLOBAL_COMPO[129],ce_composant,true))
 	return -1;
 var Req="update "+Table+" set ";
 Req+="ce_concentration="+(ce_concentration=="" ? "null" : "'"+ValiderChaine(ce_concentration)+"'" )+",ce_unite="+(ce_unite=="" ? "null" : "'"+ValiderChaine(ce_unite)+"'" )+",ce_composant="+ce_composant+"";
 Req+=" where "+NomCleMaitre+"="+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la mise à jour");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Composants
  TAPEZ ICI LE CODE DE LA REQUETE D'INSERTION
***************************************************/
function User_Insert_Composants_Composants0(Compo_Maitre)
{

/*
***** INFOS ******

Nbr d'esclaves = 5

Id dans le tab: 132;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 133;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 134;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 135;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 136;
complexe
Nbr Jointure: 1;
    Joint n° 0 = dateavantrecolte,cm_numero,da_composant

******************
*/

 var Table="composant";
 var CleMaitre = TAB_COMPO_PPTES[130].NewCle;
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var cm_nom=GetValAt(132);
 if (!ValiderChampsObligatoire(Table,"cm_nom",TAB_GLOBAL_COMPO[132],cm_nom,false))
 	return -1;
 if (!ValiderChampsType(Table,"cm_nom",TAB_GLOBAL_COMPO[132],cm_nom))
 	return -1;
 var cm_formule=GetValAt(133);
 if (!ValiderChampsObligatoire(Table,"cm_formule",TAB_GLOBAL_COMPO[133],cm_formule,false))
 	return -1;
 if (!ValiderChampsType(Table,"cm_formule",TAB_GLOBAL_COMPO[133],cm_formule))
 	return -1;
 var cm_description=GetValAt(134);
 if (!ValiderChampsObligatoire(Table,"cm_description",TAB_GLOBAL_COMPO[134],cm_description,false))
 	return -1;
 if (!ValiderChampsType(Table,"cm_description",TAB_GLOBAL_COMPO[134],cm_description))
 	return -1;
 var note=GetValAt(135);
 if (!ValiderChampsObligatoire(Table,"note",TAB_GLOBAL_COMPO[135],note,false))
 	return -1;
 if (!ValiderChampsType(Table,"note",TAB_GLOBAL_COMPO[135],note))
 	return -1;
 var Req="insert into "+Table+" ";
var TabInsertionEnPlus=new Array();
 Req+="("+NomCleMaitre+",cm_nom,cm_formule,cm_description,note"+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[0]:"")+")";
 Req+=" values ("+CleMaitre+","+(cm_nom=="" ? "null" : "'"+ValiderChaine(cm_nom)+"'" )+","+(cm_formule=="" ? "null" : "'"+ValiderChaine(cm_formule)+"'" )+","+(cm_description=="" ? "null" : "'"+ValiderChaine(cm_description)+"'" )+","+(note=="" ? "null" : "'"+ValiderChaine(note)+"'" )+""+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[1]:"")+")";

 if (pgsql_update(Req)==0)
	alert("Echec lors de l'insertion");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Composants
  TAPEZ ICI LE CODE DE LA REQUETE DE SUPPRESSION 
***************************************************/
function User_Delete_Composants_Composants0(Compo_Maitre)
{
 var Table="composant";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var Req="delete from "+Table+" where "+NomCleMaitre+" = "+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la supression");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Composants
  TAPEZ ICI LE CODE DE LA REQUETE DE MISE A JOUR 
***************************************************/
function User_Update_Composants_Composants0(Compo_Maitre)
{
 var Table="composant";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var cm_nom=GetValAt(132);
 if (!ValiderChampsObligatoire(Table,"cm_nom",TAB_GLOBAL_COMPO[132],cm_nom,false))
 	return -1;
 if (!ValiderChampsType(Table,"cm_nom",TAB_GLOBAL_COMPO[132],cm_nom))
 	return -1;
 var cm_formule=GetValAt(133);
 if (!ValiderChampsObligatoire(Table,"cm_formule",TAB_GLOBAL_COMPO[133],cm_formule,false))
 	return -1;
 if (!ValiderChampsType(Table,"cm_formule",TAB_GLOBAL_COMPO[133],cm_formule))
 	return -1;
 var cm_description=GetValAt(134);
 if (!ValiderChampsObligatoire(Table,"cm_description",TAB_GLOBAL_COMPO[134],cm_description,false))
 	return -1;
 if (!ValiderChampsType(Table,"cm_description",TAB_GLOBAL_COMPO[134],cm_description))
 	return -1;
 var note=GetValAt(135);
 if (!ValiderChampsObligatoire(Table,"note",TAB_GLOBAL_COMPO[135],note,false))
 	return -1;
 if (!ValiderChampsType(Table,"note",TAB_GLOBAL_COMPO[135],note))
 	return -1;
 var Req="update "+Table+" set ";
 Req+="cm_nom="+(cm_nom=="" ? "null" : "'"+ValiderChaine(cm_nom)+"'" )+",cm_formule="+(cm_formule=="" ? "null" : "'"+ValiderChaine(cm_formule)+"'" )+",cm_description="+(cm_description=="" ? "null" : "'"+ValiderChaine(cm_description)+"'" )+",note="+(note=="" ? "null" : "'"+ValiderChaine(note)+"'" )+"";
 Req+=" where "+NomCleMaitre+"="+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la mise à jour");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Composants
  TAPEZ ICI LE CODE DE LA REQUETE D'INSERTION
***************************************************/
function User_Insert_Composants_Date_Avant_Récolte_5(Compo_Maitre)
{

/*
***** INFOS ******

Nbr d'esclaves = 2

Id dans le tab: 139;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 140;
simple
Nbr Jointure: 1;
    Joint n° 0 = espece,da_espece,es_numero

******************
*/

 var Table="dateavantrecolte";
 var CleMaitre = TAB_COMPO_PPTES[136].NewCle;
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 /* COMPOSANT LISTE AVEC JOINTURE SIMPLE */
 var da_dar=GetValAt(139);
 if (!ValiderChampsObligatoire(Table,"da_dar",TAB_GLOBAL_COMPO[139],da_dar,false))
 	return -1;
 if (!ValiderChampsType(Table,"da_dar",TAB_GLOBAL_COMPO[139],da_dar))
 	return -1;
 var da_espece=GetValAt(140);
 if (da_espece=="-1")
    da_espece="null";
 if (!ValiderChampsObligatoire(Table,"da_espece",TAB_GLOBAL_COMPO[140],da_espece,true))
 	return -1;
 var Req="insert into "+Table+" ";
var TabInsertionEnPlus=new Array();
 Req+="("+NomCleMaitre+",da_composant,da_dar,da_espece"+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[0]:"")+")";
 Req+=" values ("+CleMaitre+","+TAB_COMPO_PPTES[130].NewCle+","+(da_dar=="" ? "null" : "'"+ValiderChaine(da_dar)+"'" )+","+da_espece+""+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[1]:"")+")";

 if (pgsql_update(Req)==0)
	alert("Echec lors de l'insertion");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Composants
  TAPEZ ICI LE CODE DE LA REQUETE DE SUPPRESSION 
***************************************************/
function User_Delete_Composants_Date_Avant_Récolte_5(Compo_Maitre)
{
 var Table="dateavantrecolte";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var Req="delete from "+Table+" where "+NomCleMaitre+" = "+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la supression");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Composants
  TAPEZ ICI LE CODE DE LA REQUETE DE MISE A JOUR 
***************************************************/
function User_Update_Composants_Date_Avant_Récolte_5(Compo_Maitre)
{
 var Table="dateavantrecolte";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var da_dar=GetValAt(139);
 if (!ValiderChampsObligatoire(Table,"da_dar",TAB_GLOBAL_COMPO[139],da_dar,false))
 	return -1;
 if (!ValiderChampsType(Table,"da_dar",TAB_GLOBAL_COMPO[139],da_dar))
 	return -1;
 var da_espece=GetValAt(140);
 if (da_espece=="-1")
    da_espece="null";
 if (!ValiderChampsObligatoire(Table,"da_espece",TAB_GLOBAL_COMPO[140],da_espece,true))
 	return -1;
 var Req="update "+Table+" set ";
 Req+="da_dar="+(da_dar=="" ? "null" : "'"+ValiderChaine(da_dar)+"'" )+",da_espece="+da_espece+"";
 Req+=" where "+NomCleMaitre+"="+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la mise à jour");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Espèce
  TAPEZ ICI LE CODE DE LA REQUETE D'INSERTION
***************************************************/
function User_Insert_Espèce_Espèces0(Compo_Maitre)
{

/*
***** INFOS ******

Nbr d'esclaves = 3

Id dans le tab: 143;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 144;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 145;
simple
Nbr Jointure: PAS DE JOINTURE;

******************
*/

 var Table="espece";
 var CleMaitre = TAB_COMPO_PPTES[141].NewCle;
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var es_nom=GetValAt(143);
 if (!ValiderChampsObligatoire(Table,"es_nom",TAB_GLOBAL_COMPO[143],es_nom,false))
 	return -1;
 if (!ValiderChampsType(Table,"es_nom",TAB_GLOBAL_COMPO[143],es_nom))
 	return -1;
 var couleur=GetValAt(144);
 if (!ValiderChampsObligatoire(Table,"couleur",TAB_GLOBAL_COMPO[144],couleur,false))
 	return -1;
 if (!ValiderChampsType(Table,"couleur",TAB_GLOBAL_COMPO[144],couleur))
 	return -1;
 var note=GetValAt(145);
 if (!ValiderChampsObligatoire(Table,"note",TAB_GLOBAL_COMPO[145],note,false))
 	return -1;
 if (!ValiderChampsType(Table,"note",TAB_GLOBAL_COMPO[145],note))
 	return -1;
 var Req="insert into "+Table+" ";
var TabInsertionEnPlus=new Array();
 Req+="("+NomCleMaitre+",es_nom,couleur,note"+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[0]:"")+")";
 Req+=" values ("+CleMaitre+","+(es_nom=="" ? "null" : "'"+ValiderChaine(es_nom)+"'" )+","+(couleur==null ? "null" : "'"+ValiderChaine(couleur)+"'" )+","+(note=="" ? "null" : "'"+ValiderChaine(note)+"'" )+""+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[1]:"")+")";

 if (pgsql_update(Req)==0)
	alert("Echec lors de l'insertion");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Espèce
  TAPEZ ICI LE CODE DE LA REQUETE DE SUPPRESSION 
***************************************************/
function User_Delete_Espèce_Espèces0(Compo_Maitre)
{
 var Table="espece";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var Req="delete from "+Table+" where "+NomCleMaitre+" = "+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la supression");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Espèce
  TAPEZ ICI LE CODE DE LA REQUETE DE MISE A JOUR 
***************************************************/
function User_Update_Espèce_Espèces0(Compo_Maitre)
{
 var Table="espece";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var es_nom=GetValAt(143);
 if (!ValiderChampsObligatoire(Table,"es_nom",TAB_GLOBAL_COMPO[143],es_nom,false))
 	return -1;
 if (!ValiderChampsType(Table,"es_nom",TAB_GLOBAL_COMPO[143],es_nom))
 	return -1;
 var couleur=GetValAt(144);
 if (!ValiderChampsObligatoire(Table,"couleur",TAB_GLOBAL_COMPO[144],couleur,false))
 	return -1;
 if (!ValiderChampsType(Table,"couleur",TAB_GLOBAL_COMPO[144],couleur))
 	return -1;
 var note=GetValAt(145);
 if (!ValiderChampsObligatoire(Table,"note",TAB_GLOBAL_COMPO[145],note,false))
 	return -1;
 if (!ValiderChampsType(Table,"note",TAB_GLOBAL_COMPO[145],note))
 	return -1;
 var Req="update "+Table+" set ";
 Req+="es_nom="+(es_nom=="" ? "null" : "'"+ValiderChaine(es_nom)+"'" )+",couleur="+(couleur==null ? "null" : "'"+ValiderChaine(couleur)+"'" )+",note="+(note=="" ? "null" : "'"+ValiderChaine(note)+"'" )+"";
 Req+=" where "+NomCleMaitre+"="+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la mise à jour");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Classement
  TAPEZ ICI LE CODE DE LA REQUETE D'INSERTION
***************************************************/
function User_Insert_Classement_Classements0(Compo_Maitre)
{

/*
***** INFOS ******

Nbr d'esclaves = 3

Id dans le tab: 148;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 149;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 150;
simple
Nbr Jointure: PAS DE JOINTURE;

******************
*/

 var Table="classement";
 var CleMaitre = TAB_COMPO_PPTES[146].NewCle;
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var cl_nom=GetValAt(148);
 if (!ValiderChampsObligatoire(Table,"cl_nom",TAB_GLOBAL_COMPO[148],cl_nom,false))
 	return -1;
 if (!ValiderChampsType(Table,"cl_nom",TAB_GLOBAL_COMPO[148],cl_nom))
 	return -1;
 var cl_symbole=GetValAt(149);
 if (!ValiderChampsObligatoire(Table,"cl_symbole",TAB_GLOBAL_COMPO[149],cl_symbole,false))
 	return -1;
 if (!ValiderChampsType(Table,"cl_symbole",TAB_GLOBAL_COMPO[149],cl_symbole))
 	return -1;
 var cl_description=GetValAt(150);
 if (!ValiderChampsObligatoire(Table,"cl_description",TAB_GLOBAL_COMPO[150],cl_description,false))
 	return -1;
 if (!ValiderChampsType(Table,"cl_description",TAB_GLOBAL_COMPO[150],cl_description))
 	return -1;
 var Req="insert into "+Table+" ";
var TabInsertionEnPlus=new Array();
 Req+="("+NomCleMaitre+",cl_nom,cl_symbole,cl_description"+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[0]:"")+")";
 Req+=" values ("+CleMaitre+","+(cl_nom=="" ? "null" : "'"+ValiderChaine(cl_nom)+"'" )+","+(cl_symbole=="" ? "null" : "'"+ValiderChaine(cl_symbole)+"'" )+","+(cl_description=="" ? "null" : "'"+ValiderChaine(cl_description)+"'" )+""+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[1]:"")+")";

 if (pgsql_update(Req)==0)
	alert("Echec lors de l'insertion");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Classement
  TAPEZ ICI LE CODE DE LA REQUETE DE SUPPRESSION 
***************************************************/
function User_Delete_Classement_Classements0(Compo_Maitre)
{
 var Table="classement";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var Req="delete from "+Table+" where "+NomCleMaitre+" = "+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la supression");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Classement
  TAPEZ ICI LE CODE DE LA REQUETE DE MISE A JOUR 
***************************************************/
function User_Update_Classement_Classements0(Compo_Maitre)
{
 var Table="classement";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var cl_nom=GetValAt(148);
 if (!ValiderChampsObligatoire(Table,"cl_nom",TAB_GLOBAL_COMPO[148],cl_nom,false))
 	return -1;
 if (!ValiderChampsType(Table,"cl_nom",TAB_GLOBAL_COMPO[148],cl_nom))
 	return -1;
 var cl_symbole=GetValAt(149);
 if (!ValiderChampsObligatoire(Table,"cl_symbole",TAB_GLOBAL_COMPO[149],cl_symbole,false))
 	return -1;
 if (!ValiderChampsType(Table,"cl_symbole",TAB_GLOBAL_COMPO[149],cl_symbole))
 	return -1;
 var cl_description=GetValAt(150);
 if (!ValiderChampsObligatoire(Table,"cl_description",TAB_GLOBAL_COMPO[150],cl_description,false))
 	return -1;
 if (!ValiderChampsType(Table,"cl_description",TAB_GLOBAL_COMPO[150],cl_description))
 	return -1;
 var Req="update "+Table+" set ";
 Req+="cl_nom="+(cl_nom=="" ? "null" : "'"+ValiderChaine(cl_nom)+"'" )+",cl_symbole="+(cl_symbole=="" ? "null" : "'"+ValiderChaine(cl_symbole)+"'" )+",cl_description="+(cl_description=="" ? "null" : "'"+ValiderChaine(cl_description)+"'" )+"";
 Req+=" where "+NomCleMaitre+"="+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la mise à jour");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Materiel
  TAPEZ ICI LE CODE DE LA REQUETE D'INSERTION
***************************************************/
function User_Insert_Materiel_Materiels0(Compo_Maitre)
{

/*
***** INFOS ******

Nbr d'esclaves = 7

Id dans le tab: 153;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 154;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 155;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 156;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 157;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 158;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 159;
simple
Nbr Jointure: 1;
    Joint n° 0 = modele,ma_modele,mo_numero

******************
*/

 var Table="materiel";
 var CleMaitre = TAB_COMPO_PPTES[151].NewCle;
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var ma_nom=GetValAt(153);
 if (!ValiderChampsObligatoire(Table,"ma_nom",TAB_GLOBAL_COMPO[153],ma_nom,false))
 	return -1;
 if (!ValiderChampsType(Table,"ma_nom",TAB_GLOBAL_COMPO[153],ma_nom))
 	return -1;
 var ma_dateachat=GetValAt(154);
 if (!ValiderChampsObligatoire(Table,"ma_dateachat",TAB_GLOBAL_COMPO[154],ma_dateachat,false))
 	return -1;
 if (!ValiderChampsType(Table,"ma_dateachat",TAB_GLOBAL_COMPO[154],ma_dateachat))
 	return -1;
 var ma_dateservice=GetValAt(155);
 if (!ValiderChampsObligatoire(Table,"ma_dateservice",TAB_GLOBAL_COMPO[155],ma_dateservice,false))
 	return -1;
 if (!ValiderChampsType(Table,"ma_dateservice",TAB_GLOBAL_COMPO[155],ma_dateservice))
 	return -1;
 var ma_datehorsservice=GetValAt(156);
 if (!ValiderChampsObligatoire(Table,"ma_datehorsservice",TAB_GLOBAL_COMPO[156],ma_datehorsservice,false))
 	return -1;
 if (!ValiderChampsType(Table,"ma_datehorsservice",TAB_GLOBAL_COMPO[156],ma_datehorsservice))
 	return -1;
 var ma_prix=GetValAt(157);
 if (!ValiderChampsObligatoire(Table,"ma_prix",TAB_GLOBAL_COMPO[157],ma_prix,false))
 	return -1;
 if (!ValiderChampsType(Table,"ma_prix",TAB_GLOBAL_COMPO[157],ma_prix))
 	return -1;
 var note=GetValAt(158);
 if (!ValiderChampsObligatoire(Table,"note",TAB_GLOBAL_COMPO[158],note,false))
 	return -1;
 if (!ValiderChampsType(Table,"note",TAB_GLOBAL_COMPO[158],note))
 	return -1;
 var ma_modele=GetValAt(159);
 if (ma_modele=="-1")
    ma_modele="null";
 if (!ValiderChampsObligatoire(Table,"ma_modele",TAB_GLOBAL_COMPO[159],ma_modele,true))
 	return -1;
 var Req="insert into "+Table+" ";
var TabInsertionEnPlus=new Array();
 Req+="("+NomCleMaitre+",ma_nom,ma_dateachat,ma_dateservice,ma_datehorsservice,ma_prix,note,ma_modele"+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[0]:"")+")";
 Req+=" values ("+CleMaitre+","+(ma_nom=="" ? "null" : "'"+ValiderChaine(ma_nom)+"'" )+","+(ma_dateachat=="" ? "null" : "'"+ValiderChaine(ma_dateachat)+"'" )+","+(ma_dateservice=="" ? "null" : "'"+ValiderChaine(ma_dateservice)+"'" )+","+(ma_datehorsservice=="" ? "null" : "'"+ValiderChaine(ma_datehorsservice)+"'" )+","+(ma_prix=="" ? "null" : "'"+ValiderChaine(ma_prix)+"'" )+","+(note=="" ? "null" : "'"+ValiderChaine(note)+"'" )+","+ma_modele+""+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[1]:"")+")";

 if (pgsql_update(Req)==0)
	alert("Echec lors de l'insertion");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Materiel
  TAPEZ ICI LE CODE DE LA REQUETE DE SUPPRESSION 
***************************************************/
function User_Delete_Materiel_Materiels0(Compo_Maitre)
{
 var Table="materiel";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var Req="delete from "+Table+" where "+NomCleMaitre+" = "+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la supression");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Materiel
  TAPEZ ICI LE CODE DE LA REQUETE DE MISE A JOUR 
***************************************************/
function User_Update_Materiel_Materiels0(Compo_Maitre)
{
 var Table="materiel";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var ma_nom=GetValAt(153);
 if (!ValiderChampsObligatoire(Table,"ma_nom",TAB_GLOBAL_COMPO[153],ma_nom,false))
 	return -1;
 if (!ValiderChampsType(Table,"ma_nom",TAB_GLOBAL_COMPO[153],ma_nom))
 	return -1;
 var ma_dateachat=GetValAt(154);
 if (!ValiderChampsObligatoire(Table,"ma_dateachat",TAB_GLOBAL_COMPO[154],ma_dateachat,false))
 	return -1;
 if (!ValiderChampsType(Table,"ma_dateachat",TAB_GLOBAL_COMPO[154],ma_dateachat))
 	return -1;
 var ma_dateservice=GetValAt(155);
 if (!ValiderChampsObligatoire(Table,"ma_dateservice",TAB_GLOBAL_COMPO[155],ma_dateservice,false))
 	return -1;
 if (!ValiderChampsType(Table,"ma_dateservice",TAB_GLOBAL_COMPO[155],ma_dateservice))
 	return -1;
 var ma_datehorsservice=GetValAt(156);
 if (!ValiderChampsObligatoire(Table,"ma_datehorsservice",TAB_GLOBAL_COMPO[156],ma_datehorsservice,false))
 	return -1;
 if (!ValiderChampsType(Table,"ma_datehorsservice",TAB_GLOBAL_COMPO[156],ma_datehorsservice))
 	return -1;
 var ma_prix=GetValAt(157);
 if (!ValiderChampsObligatoire(Table,"ma_prix",TAB_GLOBAL_COMPO[157],ma_prix,false))
 	return -1;
 if (!ValiderChampsType(Table,"ma_prix",TAB_GLOBAL_COMPO[157],ma_prix))
 	return -1;
 var note=GetValAt(158);
 if (!ValiderChampsObligatoire(Table,"note",TAB_GLOBAL_COMPO[158],note,false))
 	return -1;
 if (!ValiderChampsType(Table,"note",TAB_GLOBAL_COMPO[158],note))
 	return -1;
 var ma_modele=GetValAt(159);
 if (ma_modele=="-1")
    ma_modele="null";
 if (!ValiderChampsObligatoire(Table,"ma_modele",TAB_GLOBAL_COMPO[159],ma_modele,true))
 	return -1;
 var Req="update "+Table+" set ";
 Req+="ma_nom="+(ma_nom=="" ? "null" : "'"+ValiderChaine(ma_nom)+"'" )+",ma_dateachat="+(ma_dateachat=="" ? "null" : "'"+ValiderChaine(ma_dateachat)+"'" )+",ma_dateservice="+(ma_dateservice=="" ? "null" : "'"+ValiderChaine(ma_dateservice)+"'" )+",ma_datehorsservice="+(ma_datehorsservice=="" ? "null" : "'"+ValiderChaine(ma_datehorsservice)+"'" )+",ma_prix="+(ma_prix=="" ? "null" : "'"+ValiderChaine(ma_prix)+"'" )+",note="+(note=="" ? "null" : "'"+ValiderChaine(note)+"'" )+",ma_modele="+ma_modele+"";
 Req+=" where "+NomCleMaitre+"="+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la mise à jour");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Modele
  TAPEZ ICI LE CODE DE LA REQUETE D'INSERTION
***************************************************/
function User_Insert_Modele_Modeles0(Compo_Maitre)
{

/*
***** INFOS ******

Nbr d'esclaves = 4

Id dans le tab: 162;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 163;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 164;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 165;
simple
Nbr Jointure: 1;
    Joint n° 0 = firme,mo_firme,fi_numero

******************
*/

 var Table="modele";
 var CleMaitre = TAB_COMPO_PPTES[160].NewCle;
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var mo_nom=GetValAt(162);
 if (!ValiderChampsObligatoire(Table,"mo_nom",TAB_GLOBAL_COMPO[162],mo_nom,false))
 	return -1;
 if (!ValiderChampsType(Table,"mo_nom",TAB_GLOBAL_COMPO[162],mo_nom))
 	return -1;
 var mo_reference=GetValAt(163);
 if (!ValiderChampsObligatoire(Table,"mo_reference",TAB_GLOBAL_COMPO[163],mo_reference,false))
 	return -1;
 if (!ValiderChampsType(Table,"mo_reference",TAB_GLOBAL_COMPO[163],mo_reference))
 	return -1;
 var note=GetValAt(164);
 if (!ValiderChampsObligatoire(Table,"note",TAB_GLOBAL_COMPO[164],note,false))
 	return -1;
 if (!ValiderChampsType(Table,"note",TAB_GLOBAL_COMPO[164],note))
 	return -1;
 var mo_firme=GetValAt(165);
 if (mo_firme=="-1")
    mo_firme="null";
 if (!ValiderChampsObligatoire(Table,"mo_firme",TAB_GLOBAL_COMPO[165],mo_firme,true))
 	return -1;
 var Req="insert into "+Table+" ";
var TabInsertionEnPlus=new Array();
 Req+="("+NomCleMaitre+",mo_nom,mo_reference,note,mo_firme"+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[0]:"")+")";
 Req+=" values ("+CleMaitre+","+(mo_nom=="" ? "null" : "'"+ValiderChaine(mo_nom)+"'" )+","+(mo_reference=="" ? "null" : "'"+ValiderChaine(mo_reference)+"'" )+","+(note=="" ? "null" : "'"+ValiderChaine(note)+"'" )+","+mo_firme+""+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[1]:"")+")";

 if (pgsql_update(Req)==0)
	alert("Echec lors de l'insertion");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Modele
  TAPEZ ICI LE CODE DE LA REQUETE DE SUPPRESSION 
***************************************************/
function User_Delete_Modele_Modeles0(Compo_Maitre)
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
  REQUETES UTILSATEUR : Onglet : Modele
  TAPEZ ICI LE CODE DE LA REQUETE DE MISE A JOUR 
***************************************************/
function User_Update_Modele_Modeles0(Compo_Maitre)
{
 var Table="modele";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var mo_nom=GetValAt(162);
 if (!ValiderChampsObligatoire(Table,"mo_nom",TAB_GLOBAL_COMPO[162],mo_nom,false))
 	return -1;
 if (!ValiderChampsType(Table,"mo_nom",TAB_GLOBAL_COMPO[162],mo_nom))
 	return -1;
 var mo_reference=GetValAt(163);
 if (!ValiderChampsObligatoire(Table,"mo_reference",TAB_GLOBAL_COMPO[163],mo_reference,false))
 	return -1;
 if (!ValiderChampsType(Table,"mo_reference",TAB_GLOBAL_COMPO[163],mo_reference))
 	return -1;
 var note=GetValAt(164);
 if (!ValiderChampsObligatoire(Table,"note",TAB_GLOBAL_COMPO[164],note,false))
 	return -1;
 if (!ValiderChampsType(Table,"note",TAB_GLOBAL_COMPO[164],note))
 	return -1;
 var mo_firme=GetValAt(165);
 if (mo_firme=="-1")
    mo_firme="null";
 if (!ValiderChampsObligatoire(Table,"mo_firme",TAB_GLOBAL_COMPO[165],mo_firme,true))
 	return -1;
 var Req="update "+Table+" set ";
 Req+="mo_nom="+(mo_nom=="" ? "null" : "'"+ValiderChaine(mo_nom)+"'" )+",mo_reference="+(mo_reference=="" ? "null" : "'"+ValiderChaine(mo_reference)+"'" )+",note="+(note=="" ? "null" : "'"+ValiderChaine(note)+"'" )+",mo_firme="+mo_firme+"";
 Req+=" where "+NomCleMaitre+"="+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la mise à jour");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Firmes
  TAPEZ ICI LE CODE DE LA REQUETE D'INSERTION
***************************************************/
function User_Insert_Firmes_Firmes0(Compo_Maitre)
{

/*
***** INFOS ******

Nbr d'esclaves = 1

Id dans le tab: 168;
simple
Nbr Jointure: PAS DE JOINTURE;

******************
*/

 var Table="firme";
 var CleMaitre = TAB_COMPO_PPTES[166].NewCle;
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var fi_nom=GetValAt(168);
 if (!ValiderChampsObligatoire(Table,"fi_nom",TAB_GLOBAL_COMPO[168],fi_nom,false))
 	return -1;
 if (!ValiderChampsType(Table,"fi_nom",TAB_GLOBAL_COMPO[168],fi_nom))
 	return -1;
 var Req="insert into "+Table+" ";
var TabInsertionEnPlus=new Array();
 Req+="("+NomCleMaitre+",fi_nom"+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[0]:"")+")";
 Req+=" values ("+CleMaitre+","+(fi_nom=="" ? "null" : "'"+ValiderChaine(fi_nom)+"'" )+""+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[1]:"")+")";

 if (pgsql_update(Req)==0)
	alert("Echec lors de l'insertion");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Firmes
  TAPEZ ICI LE CODE DE LA REQUETE DE SUPPRESSION 
***************************************************/
function User_Delete_Firmes_Firmes0(Compo_Maitre)
{
 var Table="firme";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var Req="delete from "+Table+" where "+NomCleMaitre+" = "+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la supression");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Firmes
  TAPEZ ICI LE CODE DE LA REQUETE DE MISE A JOUR 
***************************************************/
function User_Update_Firmes_Firmes0(Compo_Maitre)
{
 var Table="firme";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var fi_nom=GetValAt(168);
 if (!ValiderChampsObligatoire(Table,"fi_nom",TAB_GLOBAL_COMPO[168],fi_nom,false))
 	return -1;
 if (!ValiderChampsType(Table,"fi_nom",TAB_GLOBAL_COMPO[168],fi_nom))
 	return -1;
 var Req="update "+Table+" set ";
 Req+="fi_nom="+(fi_nom=="" ? "null" : "'"+ValiderChaine(fi_nom)+"'" )+"";
 Req+=" where "+NomCleMaitre+"="+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la mise à jour");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Personnes
  TAPEZ ICI LE CODE DE LA REQUETE D'INSERTION
***************************************************/
function User_Insert_Personnes_Personnes_existants0(Compo_Maitre)
{

/*
***** INFOS ******

Nbr d'esclaves = 6

Id dans le tab: 172;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 173;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 174;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 175;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 176;
complexe
Nbr Jointure: 2;
    Joint n° 0 = adressepersonne,pe_numero,ap_personne
    Joint n° 1 = adresse,ap_adresse,ad_numero

Id dans le tab: 187;
complexe
Nbr Jointure: 2;
    Joint n° 0 = estjoignable,pe_numero,ej_personne
    Joint n° 1 = contact,ej_contact,cn_numero

******************
*/

 var Table="personne";
 var CleMaitre = TAB_COMPO_PPTES[169].NewCle;
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var pe_nom=GetValAt(172);
 if (!ValiderChampsObligatoire(Table,"pe_nom",TAB_GLOBAL_COMPO[172],pe_nom,false))
 	return -1;
 if (!ValiderChampsType(Table,"pe_nom",TAB_GLOBAL_COMPO[172],pe_nom))
 	return -1;
 var pe_prenom=GetValAt(173);
 if (!ValiderChampsObligatoire(Table,"pe_prenom",TAB_GLOBAL_COMPO[173],pe_prenom,false))
 	return -1;
 if (!ValiderChampsType(Table,"pe_prenom",TAB_GLOBAL_COMPO[173],pe_prenom))
 	return -1;
 var pe_siret=GetValAt(174);
 if (!ValiderChampsObligatoire(Table,"pe_siret",TAB_GLOBAL_COMPO[174],pe_siret,false))
 	return -1;
 if (!ValiderChampsType(Table,"pe_siret",TAB_GLOBAL_COMPO[174],pe_siret))
 	return -1;
 var pe_entreprise=GetValAt(175);
 if (!ValiderChampsObligatoire(Table,"pe_entreprise",TAB_GLOBAL_COMPO[175],pe_entreprise,false))
 	return -1;
 if (!ValiderChampsType(Table,"pe_entreprise",TAB_GLOBAL_COMPO[175],pe_entreprise))
 	return -1;
 var Req="insert into "+Table+" ";
var TabInsertionEnPlus=new Array();
 Req+="("+NomCleMaitre+",pe_nom,pe_prenom,pe_siret,pe_entreprise"+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[0]:"")+")";
 Req+=" values ("+CleMaitre+","+(pe_nom=="" ? "null" : "'"+ValiderChaine(pe_nom)+"'" )+","+(pe_prenom=="" ? "null" : "'"+ValiderChaine(pe_prenom)+"'" )+","+(pe_siret=="" ? "null" : "'"+ValiderChaine(pe_siret)+"'" )+","+(pe_entreprise=="" ? "null" : "'"+ValiderChaine(pe_entreprise)+"'" )+""+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[1]:"")+")";

 if (pgsql_update(Req)==0)
	alert("Echec lors de l'insertion");

/* table adresse*/
LstDouble_Exec_Req(GetSQLCompoAt(176),CleMaitre);

/* table contact*/
LstDouble_Exec_Req(GetSQLCompoAt(187),CleMaitre);
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Personnes
  TAPEZ ICI LE CODE DE LA REQUETE DE SUPPRESSION 
***************************************************/
function User_Delete_Personnes_Personnes_existants0(Compo_Maitre)
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
function User_Update_Personnes_Personnes_existants0(Compo_Maitre)
{
 var Table="personne";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var pe_nom=GetValAt(172);
 if (!ValiderChampsObligatoire(Table,"pe_nom",TAB_GLOBAL_COMPO[172],pe_nom,false))
 	return -1;
 if (!ValiderChampsType(Table,"pe_nom",TAB_GLOBAL_COMPO[172],pe_nom))
 	return -1;
 var pe_prenom=GetValAt(173);
 if (!ValiderChampsObligatoire(Table,"pe_prenom",TAB_GLOBAL_COMPO[173],pe_prenom,false))
 	return -1;
 if (!ValiderChampsType(Table,"pe_prenom",TAB_GLOBAL_COMPO[173],pe_prenom))
 	return -1;
 var pe_siret=GetValAt(174);
 if (!ValiderChampsObligatoire(Table,"pe_siret",TAB_GLOBAL_COMPO[174],pe_siret,false))
 	return -1;
 if (!ValiderChampsType(Table,"pe_siret",TAB_GLOBAL_COMPO[174],pe_siret))
 	return -1;
 var pe_entreprise=GetValAt(175);
 if (!ValiderChampsObligatoire(Table,"pe_entreprise",TAB_GLOBAL_COMPO[175],pe_entreprise,false))
 	return -1;
 if (!ValiderChampsType(Table,"pe_entreprise",TAB_GLOBAL_COMPO[175],pe_entreprise))
 	return -1;
 var Req="update "+Table+" set ";
 Req+="pe_nom="+(pe_nom=="" ? "null" : "'"+ValiderChaine(pe_nom)+"'" )+",pe_prenom="+(pe_prenom=="" ? "null" : "'"+ValiderChaine(pe_prenom)+"'" )+",pe_siret="+(pe_siret=="" ? "null" : "'"+ValiderChaine(pe_siret)+"'" )+",pe_entreprise="+(pe_entreprise=="" ? "null" : "'"+ValiderChaine(pe_entreprise)+"'" )+"";
 Req+=" where "+NomCleMaitre+"="+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la mise à jour");

/* table adresse*/
LstDouble_Exec_Req(GetSQLCompoAt(176),CleMaitre);

/* table contact*/
LstDouble_Exec_Req(GetSQLCompoAt(187),CleMaitre);
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Personnes
  TAPEZ ICI LE CODE DE LA REQUETE D'INSERTION
***************************************************/
function User_Insert_Personnes_Adresse_5(Compo_Maitre)
{

/*
***** INFOS ******

Nbr d'esclaves = 5

Id dans le tab: 182;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 183;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 184;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 185;
simple
Nbr Jointure: 1;
    Joint n° 0 = commune,ad_commune,co_numero

Id dans le tab: 186;
simple
Nbr Jointure: 1;
    Joint n° 0 = codepostal,ad_codepostal,cp_numero

******************
*/

 var Table="adresse";
 var CleMaitre = TAB_COMPO_PPTES[176].NewCle;
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var ad_addr1=GetValAt(182);
 if (!ValiderChampsObligatoire(Table,"ad_addr1",TAB_GLOBAL_COMPO[182],ad_addr1,false))
 	return -1;
 if (!ValiderChampsType(Table,"ad_addr1",TAB_GLOBAL_COMPO[182],ad_addr1))
 	return -1;
 var ad_addr2=GetValAt(183);
 if (!ValiderChampsObligatoire(Table,"ad_addr2",TAB_GLOBAL_COMPO[183],ad_addr2,false))
 	return -1;
 if (!ValiderChampsType(Table,"ad_addr2",TAB_GLOBAL_COMPO[183],ad_addr2))
 	return -1;
 var ad_addr3=GetValAt(184);
 if (!ValiderChampsObligatoire(Table,"ad_addr3",TAB_GLOBAL_COMPO[184],ad_addr3,false))
 	return -1;
 if (!ValiderChampsType(Table,"ad_addr3",TAB_GLOBAL_COMPO[184],ad_addr3))
 	return -1;
 var ad_commune=GetValAt(185);
 if (ad_commune=="-1")
    ad_commune="null";
 if (!ValiderChampsObligatoire(Table,"ad_commune",TAB_GLOBAL_COMPO[185],ad_commune,true))
 	return -1;
 var ad_codepostal=GetValAt(186);
 if (ad_codepostal=="-1")
    ad_codepostal="null";
 if (!ValiderChampsObligatoire(Table,"ad_codepostal",TAB_GLOBAL_COMPO[186],ad_codepostal,true))
 	return -1;
 var Req="insert into "+Table+" ";
var TabInsertionEnPlus=new Array();
 Req+="("+NomCleMaitre+",ad_addr1,ad_addr2,ad_addr3,ad_commune,ad_codepostal"+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[0]:"")+")";
 Req+=" values ("+CleMaitre+","+(ad_addr1=="" ? "null" : "'"+ValiderChaine(ad_addr1)+"'" )+","+(ad_addr2=="" ? "null" : "'"+ValiderChaine(ad_addr2)+"'" )+","+(ad_addr3=="" ? "null" : "'"+ValiderChaine(ad_addr3)+"'" )+","+ad_commune+","+ad_codepostal+""+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[1]:"")+")";

 if (pgsql_update(Req)==0)
	alert("Echec lors de l'insertion");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Personnes
  TAPEZ ICI LE CODE DE LA REQUETE DE SUPPRESSION 
***************************************************/
function User_Delete_Personnes_Adresse_5(Compo_Maitre)
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
function User_Update_Personnes_Adresse_5(Compo_Maitre)
{
 var Table="adresse";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var ad_addr1=GetValAt(182);
 if (!ValiderChampsObligatoire(Table,"ad_addr1",TAB_GLOBAL_COMPO[182],ad_addr1,false))
 	return -1;
 if (!ValiderChampsType(Table,"ad_addr1",TAB_GLOBAL_COMPO[182],ad_addr1))
 	return -1;
 var ad_addr2=GetValAt(183);
 if (!ValiderChampsObligatoire(Table,"ad_addr2",TAB_GLOBAL_COMPO[183],ad_addr2,false))
 	return -1;
 if (!ValiderChampsType(Table,"ad_addr2",TAB_GLOBAL_COMPO[183],ad_addr2))
 	return -1;
 var ad_addr3=GetValAt(184);
 if (!ValiderChampsObligatoire(Table,"ad_addr3",TAB_GLOBAL_COMPO[184],ad_addr3,false))
 	return -1;
 if (!ValiderChampsType(Table,"ad_addr3",TAB_GLOBAL_COMPO[184],ad_addr3))
 	return -1;
 var ad_commune=GetValAt(185);
 if (ad_commune=="-1")
    ad_commune="null";
 if (!ValiderChampsObligatoire(Table,"ad_commune",TAB_GLOBAL_COMPO[185],ad_commune,true))
 	return -1;
 var ad_codepostal=GetValAt(186);
 if (ad_codepostal=="-1")
    ad_codepostal="null";
 if (!ValiderChampsObligatoire(Table,"ad_codepostal",TAB_GLOBAL_COMPO[186],ad_codepostal,true))
 	return -1;
 var Req="update "+Table+" set ";
 Req+="ad_addr1="+(ad_addr1=="" ? "null" : "'"+ValiderChaine(ad_addr1)+"'" )+",ad_addr2="+(ad_addr2=="" ? "null" : "'"+ValiderChaine(ad_addr2)+"'" )+",ad_addr3="+(ad_addr3=="" ? "null" : "'"+ValiderChaine(ad_addr3)+"'" )+",ad_commune="+ad_commune+",ad_codepostal="+ad_codepostal+"";
 Req+=" where "+NomCleMaitre+"="+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la mise à jour");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Personnes
  TAPEZ ICI LE CODE DE LA REQUETE D'INSERTION
***************************************************/
function User_Insert_Personnes_Contact_11(Compo_Maitre)
{

/*
***** INFOS ******

Nbr d'esclaves = 3

Id dans le tab: 191;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 192;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 193;
simple
Nbr Jointure: PAS DE JOINTURE;

******************
*/

 var Table="contact";
 var CleMaitre = TAB_COMPO_PPTES[187].NewCle;
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var cn_tel=GetValAt(191);
 if (!ValiderChampsObligatoire(Table,"cn_tel",TAB_GLOBAL_COMPO[191],cn_tel,false))
 	return -1;
 if (!ValiderChampsType(Table,"cn_tel",TAB_GLOBAL_COMPO[191],cn_tel))
 	return -1;
 var cn_fax=GetValAt(192);
 if (!ValiderChampsObligatoire(Table,"cn_fax",TAB_GLOBAL_COMPO[192],cn_fax,false))
 	return -1;
 if (!ValiderChampsType(Table,"cn_fax",TAB_GLOBAL_COMPO[192],cn_fax))
 	return -1;
 var cn_email=GetValAt(193);
 if (!ValiderChampsObligatoire(Table,"cn_email",TAB_GLOBAL_COMPO[193],cn_email,false))
 	return -1;
 if (!ValiderChampsType(Table,"cn_email",TAB_GLOBAL_COMPO[193],cn_email))
 	return -1;
 var Req="insert into "+Table+" ";
var TabInsertionEnPlus=new Array();
 Req+="("+NomCleMaitre+",cn_tel,cn_fax,cn_email"+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[0]:"")+")";
 Req+=" values ("+CleMaitre+","+(cn_tel=="" ? "null" : "'"+ValiderChaine(cn_tel)+"'" )+","+(cn_fax=="" ? "null" : "'"+ValiderChaine(cn_fax)+"'" )+","+(cn_email=="" ? "null" : "'"+ValiderChaine(cn_email)+"'" )+""+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[1]:"")+")";

 if (pgsql_update(Req)==0)
	alert("Echec lors de l'insertion");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Personnes
  TAPEZ ICI LE CODE DE LA REQUETE DE SUPPRESSION 
***************************************************/
function User_Delete_Personnes_Contact_11(Compo_Maitre)
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
  REQUETES UTILSATEUR : Onglet : Personnes
  TAPEZ ICI LE CODE DE LA REQUETE DE MISE A JOUR 
***************************************************/
function User_Update_Personnes_Contact_11(Compo_Maitre)
{
 var Table="contact";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var cn_tel=GetValAt(191);
 if (!ValiderChampsObligatoire(Table,"cn_tel",TAB_GLOBAL_COMPO[191],cn_tel,false))
 	return -1;
 if (!ValiderChampsType(Table,"cn_tel",TAB_GLOBAL_COMPO[191],cn_tel))
 	return -1;
 var cn_fax=GetValAt(192);
 if (!ValiderChampsObligatoire(Table,"cn_fax",TAB_GLOBAL_COMPO[192],cn_fax,false))
 	return -1;
 if (!ValiderChampsType(Table,"cn_fax",TAB_GLOBAL_COMPO[192],cn_fax))
 	return -1;
 var cn_email=GetValAt(193);
 if (!ValiderChampsObligatoire(Table,"cn_email",TAB_GLOBAL_COMPO[193],cn_email,false))
 	return -1;
 if (!ValiderChampsType(Table,"cn_email",TAB_GLOBAL_COMPO[193],cn_email))
 	return -1;
 var Req="update "+Table+" set ";
 Req+="cn_tel="+(cn_tel=="" ? "null" : "'"+ValiderChaine(cn_tel)+"'" )+",cn_fax="+(cn_fax=="" ? "null" : "'"+ValiderChaine(cn_fax)+"'" )+",cn_email="+(cn_email=="" ? "null" : "'"+ValiderChaine(cn_email)+"'" )+"";
 Req+=" where "+NomCleMaitre+"="+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la mise à jour");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Communes
  TAPEZ ICI LE CODE DE LA REQUETE D'INSERTION
***************************************************/
function User_Insert_Communes_Communes0(Compo_Maitre)
{

/*
***** INFOS ******

Nbr d'esclaves = 3

Id dans le tab: 197;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 198;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 199;
simple
Nbr Jointure: PAS DE JOINTURE;

******************
*/

 var Table="commune";
 var CleMaitre = TAB_COMPO_PPTES[194].NewCle;
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var co_nom=GetValAt(197);
 if (!ValiderChampsObligatoire(Table,"co_nom",TAB_GLOBAL_COMPO[197],co_nom,false))
 	return -1;
 if (!ValiderChampsType(Table,"co_nom",TAB_GLOBAL_COMPO[197],co_nom))
 	return -1;
 var co_siret=GetValAt(198);
 if (!ValiderChampsObligatoire(Table,"co_siret",TAB_GLOBAL_COMPO[198],co_siret,false))
 	return -1;
 if (!ValiderChampsType(Table,"co_siret",TAB_GLOBAL_COMPO[198],co_siret))
 	return -1;
 var couleur=GetValAt(199);
 if (!ValiderChampsObligatoire(Table,"couleur",TAB_GLOBAL_COMPO[199],couleur,false))
 	return -1;
 if (!ValiderChampsType(Table,"couleur",TAB_GLOBAL_COMPO[199],couleur))
 	return -1;
 var Req="insert into "+Table+" ";
var TabInsertionEnPlus=new Array();
 Req+="("+NomCleMaitre+",co_nom,co_siret,couleur"+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[0]:"")+")";
 Req+=" values ("+CleMaitre+","+(co_nom=="" ? "null" : "'"+ValiderChaine(co_nom)+"'" )+","+(co_siret=="" ? "null" : "'"+ValiderChaine(co_siret)+"'" )+","+(couleur==null ? "null" : "'"+ValiderChaine(couleur)+"'" )+""+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[1]:"")+")";

 if (pgsql_update(Req)==0)
	alert("Echec lors de l'insertion");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Communes
  TAPEZ ICI LE CODE DE LA REQUETE DE SUPPRESSION 
***************************************************/
function User_Delete_Communes_Communes0(Compo_Maitre)
{
 var Table="commune";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var Req="delete from "+Table+" where "+NomCleMaitre+" = "+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la supression");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Communes
  TAPEZ ICI LE CODE DE LA REQUETE DE MISE A JOUR 
***************************************************/
function User_Update_Communes_Communes0(Compo_Maitre)
{
 var Table="commune";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var co_nom=GetValAt(197);
 if (!ValiderChampsObligatoire(Table,"co_nom",TAB_GLOBAL_COMPO[197],co_nom,false))
 	return -1;
 if (!ValiderChampsType(Table,"co_nom",TAB_GLOBAL_COMPO[197],co_nom))
 	return -1;
 var co_siret=GetValAt(198);
 if (!ValiderChampsObligatoire(Table,"co_siret",TAB_GLOBAL_COMPO[198],co_siret,false))
 	return -1;
 if (!ValiderChampsType(Table,"co_siret",TAB_GLOBAL_COMPO[198],co_siret))
 	return -1;
 var couleur=GetValAt(199);
 if (!ValiderChampsObligatoire(Table,"couleur",TAB_GLOBAL_COMPO[199],couleur,false))
 	return -1;
 if (!ValiderChampsType(Table,"couleur",TAB_GLOBAL_COMPO[199],couleur))
 	return -1;
 var Req="update "+Table+" set ";
 Req+="co_nom="+(co_nom=="" ? "null" : "'"+ValiderChaine(co_nom)+"'" )+",co_siret="+(co_siret=="" ? "null" : "'"+ValiderChaine(co_siret)+"'" )+",couleur="+(couleur==null ? "null" : "'"+ValiderChaine(couleur)+"'" )+"";
 Req+=" where "+NomCleMaitre+"="+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la mise à jour");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Codes postaux
  TAPEZ ICI LE CODE DE LA REQUETE D'INSERTION
***************************************************/
function User_Insert_Codes_postaux_Codes_postaux0(Compo_Maitre)
{

/*
***** INFOS ******

Nbr d'esclaves = 3

Id dans le tab: 203;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 204;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 208;
complexe
Nbr Jointure: 2;
    Joint n° 0 = communecp,cp_numero,mc_codepostal
    Joint n° 1 = commune,mc_commune,co_numero

******************
*/

 var Table="codepostal";
 var CleMaitre = TAB_COMPO_PPTES[200].NewCle;
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var cp_code=GetValAt(203);
 if (!ValiderChampsObligatoire(Table,"cp_code",TAB_GLOBAL_COMPO[203],cp_code,false))
 	return -1;
 if (!ValiderChampsType(Table,"cp_code",TAB_GLOBAL_COMPO[203],cp_code))
 	return -1;
 var cp_bureau=GetValAt(204);
 if (!ValiderChampsObligatoire(Table,"cp_bureau",TAB_GLOBAL_COMPO[204],cp_bureau,false))
 	return -1;
 if (!ValiderChampsType(Table,"cp_bureau",TAB_GLOBAL_COMPO[204],cp_bureau))
 	return -1;
 var Req="insert into "+Table+" ";
var TabInsertionEnPlus=new Array();
 Req+="("+NomCleMaitre+",cp_code,cp_bureau"+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[0]:"")+")";
 Req+=" values ("+CleMaitre+","+(cp_code=="" ? "null" : "'"+ValiderChaine(cp_code)+"'" )+","+(cp_bureau=="" ? "null" : "'"+ValiderChaine(cp_bureau)+"'" )+""+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[1]:"")+")";

 if (pgsql_update(Req)==0)
	alert("Echec lors de l'insertion");

/* table commune*/
LstDouble_Exec_Req(GetSQLCompoAt(208),CleMaitre);
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Codes postaux
  TAPEZ ICI LE CODE DE LA REQUETE DE SUPPRESSION 
***************************************************/
function User_Delete_Codes_postaux_Codes_postaux0(Compo_Maitre)
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
function User_Update_Codes_postaux_Codes_postaux0(Compo_Maitre)
{
 var Table="codepostal";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var cp_code=GetValAt(203);
 if (!ValiderChampsObligatoire(Table,"cp_code",TAB_GLOBAL_COMPO[203],cp_code,false))
 	return -1;
 if (!ValiderChampsType(Table,"cp_code",TAB_GLOBAL_COMPO[203],cp_code))
 	return -1;
 var cp_bureau=GetValAt(204);
 if (!ValiderChampsObligatoire(Table,"cp_bureau",TAB_GLOBAL_COMPO[204],cp_bureau,false))
 	return -1;
 if (!ValiderChampsType(Table,"cp_bureau",TAB_GLOBAL_COMPO[204],cp_bureau))
 	return -1;
 var Req="update "+Table+" set ";
 Req+="cp_code="+(cp_code=="" ? "null" : "'"+ValiderChaine(cp_code)+"'" )+",cp_bureau="+(cp_bureau=="" ? "null" : "'"+ValiderChaine(cp_bureau)+"'" )+"";
 Req+=" where "+NomCleMaitre+"="+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la mise à jour");

/* table commune*/
LstDouble_Exec_Req(GetSQLCompoAt(208),CleMaitre);
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Achat
  TAPEZ ICI LE CODE DE LA REQUETE D'INSERTION
***************************************************/
function User_Insert_Achat_Achat0(Compo_Maitre)
{

/*
***** INFOS ******

Nbr d'esclaves = 6

Id dans le tab: 214;
simple
Nbr Jointure: 1;
    Joint n° 0 = article,ac_article,ar_numero

Id dans le tab: 215;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 216;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 217;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 218;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 219;
simple
Nbr Jointure: PAS DE JOINTURE;

******************
*/

 var Table="achat";
 var CleMaitre = TAB_COMPO_PPTES[211].NewCle;
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var ac_article=GetValAt(214);
 if (ac_article=="-1")
    ac_article="null";
 if (!ValiderChampsObligatoire(Table,"ac_article",TAB_GLOBAL_COMPO[214],ac_article,true))
 	return -1;
 var ac_quantite=GetValAt(215);
 if (!ValiderChampsObligatoire(Table,"ac_quantite",TAB_GLOBAL_COMPO[215],ac_quantite,false))
 	return -1;
 if (!ValiderChampsType(Table,"ac_quantite",TAB_GLOBAL_COMPO[215],ac_quantite))
 	return -1;
 var ac_date=GetValAt(216);
 if (!ValiderChampsObligatoire(Table,"ac_date",TAB_GLOBAL_COMPO[216],ac_date,false))
 	return -1;
 if (!ValiderChampsType(Table,"ac_date",TAB_GLOBAL_COMPO[216],ac_date))
 	return -1;
 var ac_differencequantite=GetValAt(217);
 if (!ValiderChampsObligatoire(Table,"ac_differencequantite",TAB_GLOBAL_COMPO[217],ac_differencequantite,false))
 	return -1;
 if (!ValiderChampsType(Table,"ac_differencequantite",TAB_GLOBAL_COMPO[217],ac_differencequantite))
 	return -1;
 var ac_quantite=GetValAt(218);
 if (!ValiderChampsObligatoire(Table,"ac_quantite",TAB_GLOBAL_COMPO[218],ac_quantite,false))
 	return -1;
 if (!ValiderChampsType(Table,"ac_quantite",TAB_GLOBAL_COMPO[218],ac_quantite))
 	return -1;
 var note=GetValAt(219);
 if (!ValiderChampsObligatoire(Table,"note",TAB_GLOBAL_COMPO[219],note,false))
 	return -1;
 if (!ValiderChampsType(Table,"note",TAB_GLOBAL_COMPO[219],note))
 	return -1;
 var Req="insert into "+Table+" ";
var TabInsertionEnPlus=new Array();
 Req+="("+NomCleMaitre+",ac_article,ac_quantite,ac_date,ac_differencequantite,ac_quantite,note"+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[0]:"")+")";
 Req+=" values ("+CleMaitre+","+ac_article+","+(ac_quantite=="" ? "null" : "'"+ValiderChaine(ac_quantite)+"'" )+","+(ac_date=="" ? "null" : "'"+ValiderChaine(ac_date)+"'" )+","+(ac_differencequantite=="" ? "null" : "'"+ValiderChaine(ac_differencequantite)+"'" )+","+(ac_quantite=="" ? "null" : "'"+ValiderChaine(ac_quantite)+"'" )+","+(note=="" ? "null" : "'"+ValiderChaine(note)+"'" )+""+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[1]:"")+")";

 if (pgsql_update(Req)==0)
	alert("Echec lors de l'insertion");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Achat
  TAPEZ ICI LE CODE DE LA REQUETE DE SUPPRESSION 
***************************************************/
function User_Delete_Achat_Achat0(Compo_Maitre)
{
 var Table="achat";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var Req="delete from "+Table+" where "+NomCleMaitre+" = "+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la supression");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Achat
  TAPEZ ICI LE CODE DE LA REQUETE DE MISE A JOUR 
***************************************************/
function User_Update_Achat_Achat0(Compo_Maitre)
{
 var Table="achat";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var ac_article=GetValAt(214);
 if (ac_article=="-1")
    ac_article="null";
 if (!ValiderChampsObligatoire(Table,"ac_article",TAB_GLOBAL_COMPO[214],ac_article,true))
 	return -1;
 var ac_quantite=GetValAt(215);
 if (!ValiderChampsObligatoire(Table,"ac_quantite",TAB_GLOBAL_COMPO[215],ac_quantite,false))
 	return -1;
 if (!ValiderChampsType(Table,"ac_quantite",TAB_GLOBAL_COMPO[215],ac_quantite))
 	return -1;
 var ac_date=GetValAt(216);
 if (!ValiderChampsObligatoire(Table,"ac_date",TAB_GLOBAL_COMPO[216],ac_date,false))
 	return -1;
 if (!ValiderChampsType(Table,"ac_date",TAB_GLOBAL_COMPO[216],ac_date))
 	return -1;
 var ac_differencequantite=GetValAt(217);
 if (!ValiderChampsObligatoire(Table,"ac_differencequantite",TAB_GLOBAL_COMPO[217],ac_differencequantite,false))
 	return -1;
 if (!ValiderChampsType(Table,"ac_differencequantite",TAB_GLOBAL_COMPO[217],ac_differencequantite))
 	return -1;
 var ac_quantite=GetValAt(218);
 if (!ValiderChampsObligatoire(Table,"ac_quantite",TAB_GLOBAL_COMPO[218],ac_quantite,false))
 	return -1;
 if (!ValiderChampsType(Table,"ac_quantite",TAB_GLOBAL_COMPO[218],ac_quantite))
 	return -1;
 var note=GetValAt(219);
 if (!ValiderChampsObligatoire(Table,"note",TAB_GLOBAL_COMPO[219],note,false))
 	return -1;
 if (!ValiderChampsType(Table,"note",TAB_GLOBAL_COMPO[219],note))
 	return -1;
 var Req="update "+Table+" set ";
 Req+="ac_article="+ac_article+",ac_quantite="+(ac_quantite=="" ? "null" : "'"+ValiderChaine(ac_quantite)+"'" )+",ac_date="+(ac_date=="" ? "null" : "'"+ValiderChaine(ac_date)+"'" )+",ac_differencequantite="+(ac_differencequantite=="" ? "null" : "'"+ValiderChaine(ac_differencequantite)+"'" )+",ac_quantite="+(ac_quantite=="" ? "null" : "'"+ValiderChaine(ac_quantite)+"'" )+",note="+(note=="" ? "null" : "'"+ValiderChaine(note)+"'" )+"";
 Req+=" where "+NomCleMaitre+"="+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la mise à jour");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Documents
  TAPEZ ICI LE CODE DE LA REQUETE D'INSERTION
***************************************************/
function User_Insert_Documents_Documents0(Compo_Maitre)
{

/*
***** INFOS ******

Nbr d'esclaves = 4

Id dans le tab: 223;
simple
Nbr Jointure: 1;
    Joint n° 0 = typedocument,do_typedocument,to_numero

Id dans le tab: 224;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 225;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 226;
simple
Nbr Jointure: PAS DE JOINTURE;

******************
*/

 var Table="document";
 var CleMaitre = TAB_COMPO_PPTES[220].NewCle;
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var do_typedocument=GetValAt(223);
 if (do_typedocument=="-1")
    do_typedocument="null";
 if (!ValiderChampsObligatoire(Table,"do_typedocument",TAB_GLOBAL_COMPO[223],do_typedocument,true))
 	return -1;
 var do_nom=GetValAt(224);
 if (!ValiderChampsObligatoire(Table,"do_nom",TAB_GLOBAL_COMPO[224],do_nom,false))
 	return -1;
 if (!ValiderChampsType(Table,"do_nom",TAB_GLOBAL_COMPO[224],do_nom))
 	return -1;
 var do_date=GetValAt(225);
 if (!ValiderChampsObligatoire(Table,"do_date",TAB_GLOBAL_COMPO[225],do_date,false))
 	return -1;
 if (!ValiderChampsType(Table,"do_date",TAB_GLOBAL_COMPO[225],do_date))
 	return -1;
 var note=GetValAt(226);
 if (!ValiderChampsObligatoire(Table,"note",TAB_GLOBAL_COMPO[226],note,false))
 	return -1;
 if (!ValiderChampsType(Table,"note",TAB_GLOBAL_COMPO[226],note))
 	return -1;
 var Req="insert into "+Table+" ";
var TabInsertionEnPlus=new Array();
 Req+="("+NomCleMaitre+",do_typedocument,do_nom,do_date,note"+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[0]:"")+")";
 Req+=" values ("+CleMaitre+","+do_typedocument+","+(do_nom=="" ? "null" : "'"+ValiderChaine(do_nom)+"'" )+","+(do_date=="" ? "null" : "'"+ValiderChaine(do_date)+"'" )+","+(note=="" ? "null" : "'"+ValiderChaine(note)+"'" )+""+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[1]:"")+")";

 if (pgsql_update(Req)==0)
	alert("Echec lors de l'insertion");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Documents
  TAPEZ ICI LE CODE DE LA REQUETE DE SUPPRESSION 
***************************************************/
function User_Delete_Documents_Documents0(Compo_Maitre)
{
 var Table="document";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var Req="delete from "+Table+" where "+NomCleMaitre+" = "+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la supression");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Documents
  TAPEZ ICI LE CODE DE LA REQUETE DE MISE A JOUR 
***************************************************/
function User_Update_Documents_Documents0(Compo_Maitre)
{
 var Table="document";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var do_typedocument=GetValAt(223);
 if (do_typedocument=="-1")
    do_typedocument="null";
 if (!ValiderChampsObligatoire(Table,"do_typedocument",TAB_GLOBAL_COMPO[223],do_typedocument,true))
 	return -1;
 var do_nom=GetValAt(224);
 if (!ValiderChampsObligatoire(Table,"do_nom",TAB_GLOBAL_COMPO[224],do_nom,false))
 	return -1;
 if (!ValiderChampsType(Table,"do_nom",TAB_GLOBAL_COMPO[224],do_nom))
 	return -1;
 var do_date=GetValAt(225);
 if (!ValiderChampsObligatoire(Table,"do_date",TAB_GLOBAL_COMPO[225],do_date,false))
 	return -1;
 if (!ValiderChampsType(Table,"do_date",TAB_GLOBAL_COMPO[225],do_date))
 	return -1;
 var note=GetValAt(226);
 if (!ValiderChampsObligatoire(Table,"note",TAB_GLOBAL_COMPO[226],note,false))
 	return -1;
 if (!ValiderChampsType(Table,"note",TAB_GLOBAL_COMPO[226],note))
 	return -1;
 var Req="update "+Table+" set ";
 Req+="do_typedocument="+do_typedocument+",do_nom="+(do_nom=="" ? "null" : "'"+ValiderChaine(do_nom)+"'" )+",do_date="+(do_date=="" ? "null" : "'"+ValiderChaine(do_date)+"'" )+",note="+(note=="" ? "null" : "'"+ValiderChaine(note)+"'" )+"";
 Req+=" where "+NomCleMaitre+"="+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la mise à jour");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Type de documents
  TAPEZ ICI LE CODE DE LA REQUETE D'INSERTION
***************************************************/
function User_Insert_Type_de_documents_Type_de_documents0(Compo_Maitre)
{

/*
***** INFOS ******

Nbr d'esclaves = 3

Id dans le tab: 229;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 230;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 231;
simple
Nbr Jointure: PAS DE JOINTURE;

******************
*/

 var Table="typedocument";
 var CleMaitre = TAB_COMPO_PPTES[227].NewCle;
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var to_nom=GetValAt(229);
 if (!ValiderChampsObligatoire(Table,"to_nom",TAB_GLOBAL_COMPO[229],to_nom,false))
 	return -1;
 if (!ValiderChampsType(Table,"to_nom",TAB_GLOBAL_COMPO[229],to_nom))
 	return -1;
 var to_description=GetValAt(230);
 if (!ValiderChampsObligatoire(Table,"to_description",TAB_GLOBAL_COMPO[230],to_description,false))
 	return -1;
 if (!ValiderChampsType(Table,"to_description",TAB_GLOBAL_COMPO[230],to_description))
 	return -1;
 var note=GetValAt(231);
 if (!ValiderChampsObligatoire(Table,"note",TAB_GLOBAL_COMPO[231],note,false))
 	return -1;
 if (!ValiderChampsType(Table,"note",TAB_GLOBAL_COMPO[231],note))
 	return -1;
 var Req="insert into "+Table+" ";
var TabInsertionEnPlus=new Array();
 Req+="("+NomCleMaitre+",to_nom,to_description,note"+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[0]:"")+")";
 Req+=" values ("+CleMaitre+","+(to_nom=="" ? "null" : "'"+ValiderChaine(to_nom)+"'" )+","+(to_description=="" ? "null" : "'"+ValiderChaine(to_description)+"'" )+","+(note=="" ? "null" : "'"+ValiderChaine(note)+"'" )+""+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[1]:"")+")";

 if (pgsql_update(Req)==0)
	alert("Echec lors de l'insertion");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Type de documents
  TAPEZ ICI LE CODE DE LA REQUETE DE SUPPRESSION 
***************************************************/
function User_Delete_Type_de_documents_Type_de_documents0(Compo_Maitre)
{
 var Table="typedocument";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var Req="delete from "+Table+" where "+NomCleMaitre+" = "+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la supression");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Type de documents
  TAPEZ ICI LE CODE DE LA REQUETE DE MISE A JOUR 
***************************************************/
function User_Update_Type_de_documents_Type_de_documents0(Compo_Maitre)
{
 var Table="typedocument";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var to_nom=GetValAt(229);
 if (!ValiderChampsObligatoire(Table,"to_nom",TAB_GLOBAL_COMPO[229],to_nom,false))
 	return -1;
 if (!ValiderChampsType(Table,"to_nom",TAB_GLOBAL_COMPO[229],to_nom))
 	return -1;
 var to_description=GetValAt(230);
 if (!ValiderChampsObligatoire(Table,"to_description",TAB_GLOBAL_COMPO[230],to_description,false))
 	return -1;
 if (!ValiderChampsType(Table,"to_description",TAB_GLOBAL_COMPO[230],to_description))
 	return -1;
 var note=GetValAt(231);
 if (!ValiderChampsObligatoire(Table,"note",TAB_GLOBAL_COMPO[231],note,false))
 	return -1;
 if (!ValiderChampsType(Table,"note",TAB_GLOBAL_COMPO[231],note))
 	return -1;
 var Req="update "+Table+" set ";
 Req+="to_nom="+(to_nom=="" ? "null" : "'"+ValiderChaine(to_nom)+"'" )+",to_description="+(to_description=="" ? "null" : "'"+ValiderChaine(to_description)+"'" )+",note="+(note=="" ? "null" : "'"+ValiderChaine(note)+"'" )+"";
 Req+=" where "+NomCleMaitre+"="+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la mise à jour");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Prélèvements
  TAPEZ ICI LE CODE DE LA REQUETE D'INSERTION
***************************************************/
function User_Insert_Prélèvements_Prélèvements0(Compo_Maitre)
{

/*
***** INFOS ******

Nbr d'esclaves = 7

Id dans le tab: 234;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 235;
simple
Nbr Jointure: 1;
    Joint n° 0 = typeprelevement,pv_typeprelevement,tv_numero

Id dans le tab: 236;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 237;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 238;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 239;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 240;
simple
Nbr Jointure: PAS DE JOINTURE;

******************
*/

 var Table="prelevement";
 var CleMaitre = TAB_COMPO_PPTES[232].NewCle;
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var pv_nom=GetValAt(234);
 if (!ValiderChampsObligatoire(Table,"pv_nom",TAB_GLOBAL_COMPO[234],pv_nom,false))
 	return -1;
 if (!ValiderChampsType(Table,"pv_nom",TAB_GLOBAL_COMPO[234],pv_nom))
 	return -1;
 var pv_typeprelevement=GetValAt(235);
 if (pv_typeprelevement=="-1")
    pv_typeprelevement="null";
 if (!ValiderChampsObligatoire(Table,"pv_typeprelevement",TAB_GLOBAL_COMPO[235],pv_typeprelevement,true))
 	return -1;
 var pv_x=GetValAt(236);
 if (!ValiderChampsObligatoire(Table,"pv_x",TAB_GLOBAL_COMPO[236],pv_x,false))
 	return -1;
 if (!ValiderChampsType(Table,"pv_x",TAB_GLOBAL_COMPO[236],pv_x))
 	return -1;
 var pv_y=GetValAt(237);
 if (!ValiderChampsObligatoire(Table,"pv_y",TAB_GLOBAL_COMPO[237],pv_y,false))
 	return -1;
 if (!ValiderChampsType(Table,"pv_y",TAB_GLOBAL_COMPO[237],pv_y))
 	return -1;
 var pv_z=GetValAt(238);
 if (!ValiderChampsObligatoire(Table,"pv_z",TAB_GLOBAL_COMPO[238],pv_z,false))
 	return -1;
 if (!ValiderChampsType(Table,"pv_z",TAB_GLOBAL_COMPO[238],pv_z))
 	return -1;
 var couleur=GetValAt(239);
 if (!ValiderChampsObligatoire(Table,"couleur",TAB_GLOBAL_COMPO[239],couleur,false))
 	return -1;
 if (!ValiderChampsType(Table,"couleur",TAB_GLOBAL_COMPO[239],couleur))
 	return -1;
 var note=GetValAt(240);
 if (!ValiderChampsObligatoire(Table,"note",TAB_GLOBAL_COMPO[240],note,false))
 	return -1;
 if (!ValiderChampsType(Table,"note",TAB_GLOBAL_COMPO[240],note))
 	return -1;
 var Req="insert into "+Table+" ";
var TabInsertionEnPlus=new Array();
 Req+="("+NomCleMaitre+",pv_nom,pv_typeprelevement,pv_x,pv_y,pv_z,couleur,note"+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[0]:"")+")";
 Req+=" values ("+CleMaitre+","+(pv_nom=="" ? "null" : "'"+ValiderChaine(pv_nom)+"'" )+","+pv_typeprelevement+","+(pv_x=="" ? "null" : "'"+ValiderChaine(pv_x)+"'" )+","+(pv_y=="" ? "null" : "'"+ValiderChaine(pv_y)+"'" )+","+(pv_z=="" ? "null" : "'"+ValiderChaine(pv_z)+"'" )+","+(couleur==null ? "null" : "'"+ValiderChaine(couleur)+"'" )+","+(note=="" ? "null" : "'"+ValiderChaine(note)+"'" )+""+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[1]:"")+")";

 if (pgsql_update(Req)==0)
	alert("Echec lors de l'insertion");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Prélèvements
  TAPEZ ICI LE CODE DE LA REQUETE DE SUPPRESSION 
***************************************************/
function User_Delete_Prélèvements_Prélèvements0(Compo_Maitre)
{
 var Table="prelevement";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var Req="delete from "+Table+" where "+NomCleMaitre+" = "+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la supression");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Prélèvements
  TAPEZ ICI LE CODE DE LA REQUETE DE MISE A JOUR 
***************************************************/
function User_Update_Prélèvements_Prélèvements0(Compo_Maitre)
{
 var Table="prelevement";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var pv_nom=GetValAt(234);
 if (!ValiderChampsObligatoire(Table,"pv_nom",TAB_GLOBAL_COMPO[234],pv_nom,false))
 	return -1;
 if (!ValiderChampsType(Table,"pv_nom",TAB_GLOBAL_COMPO[234],pv_nom))
 	return -1;
 var pv_typeprelevement=GetValAt(235);
 if (pv_typeprelevement=="-1")
    pv_typeprelevement="null";
 if (!ValiderChampsObligatoire(Table,"pv_typeprelevement",TAB_GLOBAL_COMPO[235],pv_typeprelevement,true))
 	return -1;
 var pv_x=GetValAt(236);
 if (!ValiderChampsObligatoire(Table,"pv_x",TAB_GLOBAL_COMPO[236],pv_x,false))
 	return -1;
 if (!ValiderChampsType(Table,"pv_x",TAB_GLOBAL_COMPO[236],pv_x))
 	return -1;
 var pv_y=GetValAt(237);
 if (!ValiderChampsObligatoire(Table,"pv_y",TAB_GLOBAL_COMPO[237],pv_y,false))
 	return -1;
 if (!ValiderChampsType(Table,"pv_y",TAB_GLOBAL_COMPO[237],pv_y))
 	return -1;
 var pv_z=GetValAt(238);
 if (!ValiderChampsObligatoire(Table,"pv_z",TAB_GLOBAL_COMPO[238],pv_z,false))
 	return -1;
 if (!ValiderChampsType(Table,"pv_z",TAB_GLOBAL_COMPO[238],pv_z))
 	return -1;
 var couleur=GetValAt(239);
 if (!ValiderChampsObligatoire(Table,"couleur",TAB_GLOBAL_COMPO[239],couleur,false))
 	return -1;
 if (!ValiderChampsType(Table,"couleur",TAB_GLOBAL_COMPO[239],couleur))
 	return -1;
 var note=GetValAt(240);
 if (!ValiderChampsObligatoire(Table,"note",TAB_GLOBAL_COMPO[240],note,false))
 	return -1;
 if (!ValiderChampsType(Table,"note",TAB_GLOBAL_COMPO[240],note))
 	return -1;
 var Req="update "+Table+" set ";
 Req+="pv_nom="+(pv_nom=="" ? "null" : "'"+ValiderChaine(pv_nom)+"'" )+",pv_typeprelevement="+pv_typeprelevement+",pv_x="+(pv_x=="" ? "null" : "'"+ValiderChaine(pv_x)+"'" )+",pv_y="+(pv_y=="" ? "null" : "'"+ValiderChaine(pv_y)+"'" )+",pv_z="+(pv_z=="" ? "null" : "'"+ValiderChaine(pv_z)+"'" )+",couleur="+(couleur==null ? "null" : "'"+ValiderChaine(couleur)+"'" )+",note="+(note=="" ? "null" : "'"+ValiderChaine(note)+"'" )+"";
 Req+=" where "+NomCleMaitre+"="+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la mise à jour");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Type de prélèvement
  TAPEZ ICI LE CODE DE LA REQUETE D'INSERTION
***************************************************/
function User_Insert_Type_de_prélèvement_Type_de_prélèvement0(Compo_Maitre)
{

/*
***** INFOS ******

Nbr d'esclaves = 3

Id dans le tab: 243;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 244;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 245;
simple
Nbr Jointure: PAS DE JOINTURE;

******************
*/

 var Table="typeprelevement";
 var CleMaitre = TAB_COMPO_PPTES[241].NewCle;
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var tv_nom=GetValAt(243);
 if (!ValiderChampsObligatoire(Table,"tv_nom",TAB_GLOBAL_COMPO[243],tv_nom,false))
 	return -1;
 if (!ValiderChampsType(Table,"tv_nom",TAB_GLOBAL_COMPO[243],tv_nom))
 	return -1;
 var couleur=GetValAt(244);
 if (!ValiderChampsObligatoire(Table,"couleur",TAB_GLOBAL_COMPO[244],couleur,false))
 	return -1;
 if (!ValiderChampsType(Table,"couleur",TAB_GLOBAL_COMPO[244],couleur))
 	return -1;
 var note=GetValAt(245);
 if (!ValiderChampsObligatoire(Table,"note",TAB_GLOBAL_COMPO[245],note,false))
 	return -1;
 if (!ValiderChampsType(Table,"note",TAB_GLOBAL_COMPO[245],note))
 	return -1;
 var Req="insert into "+Table+" ";
var TabInsertionEnPlus=new Array();
 Req+="("+NomCleMaitre+",tv_nom,couleur,note"+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[0]:"")+")";
 Req+=" values ("+CleMaitre+","+(tv_nom=="" ? "null" : "'"+ValiderChaine(tv_nom)+"'" )+","+(couleur==null ? "null" : "'"+ValiderChaine(couleur)+"'" )+","+(note=="" ? "null" : "'"+ValiderChaine(note)+"'" )+""+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[1]:"")+")";

 if (pgsql_update(Req)==0)
	alert("Echec lors de l'insertion");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Type de prélèvement
  TAPEZ ICI LE CODE DE LA REQUETE DE SUPPRESSION 
***************************************************/
function User_Delete_Type_de_prélèvement_Type_de_prélèvement0(Compo_Maitre)
{
 var Table="typeprelevement";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var Req="delete from "+Table+" where "+NomCleMaitre+" = "+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la supression");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Type de prélèvement
  TAPEZ ICI LE CODE DE LA REQUETE DE MISE A JOUR 
***************************************************/
function User_Update_Type_de_prélèvement_Type_de_prélèvement0(Compo_Maitre)
{
 var Table="typeprelevement";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var tv_nom=GetValAt(243);
 if (!ValiderChampsObligatoire(Table,"tv_nom",TAB_GLOBAL_COMPO[243],tv_nom,false))
 	return -1;
 if (!ValiderChampsType(Table,"tv_nom",TAB_GLOBAL_COMPO[243],tv_nom))
 	return -1;
 var couleur=GetValAt(244);
 if (!ValiderChampsObligatoire(Table,"couleur",TAB_GLOBAL_COMPO[244],couleur,false))
 	return -1;
 if (!ValiderChampsType(Table,"couleur",TAB_GLOBAL_COMPO[244],couleur))
 	return -1;
 var note=GetValAt(245);
 if (!ValiderChampsObligatoire(Table,"note",TAB_GLOBAL_COMPO[245],note,false))
 	return -1;
 if (!ValiderChampsType(Table,"note",TAB_GLOBAL_COMPO[245],note))
 	return -1;
 var Req="update "+Table+" set ";
 Req+="tv_nom="+(tv_nom=="" ? "null" : "'"+ValiderChaine(tv_nom)+"'" )+",couleur="+(couleur==null ? "null" : "'"+ValiderChaine(couleur)+"'" )+",note="+(note=="" ? "null" : "'"+ValiderChaine(note)+"'" )+"";
 Req+=" where "+NomCleMaitre+"="+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la mise à jour");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Produits de récolte
  TAPEZ ICI LE CODE DE LA REQUETE D'INSERTION
***************************************************/
function User_Insert_Produits_de_récolte_Produits_de_récolte0(Compo_Maitre)
{

/*
***** INFOS ******

Nbr d'esclaves = 8

Id dans le tab: 248;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 249;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 250;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 251;
simple
Nbr Jointure: 1;
    Joint n° 0 = unite,pl_unite,un_numero

Id dans le tab: 252;
simple
Nbr Jointure: 1;
    Joint n° 0 = typeproduit,pl_typeproduit,td_numero

Id dans le tab: 253;
simple
Nbr Jointure: 1;
    Joint n° 0 = variete,pl_variete,va_numero

Id dans le tab: 254;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 255;
simple
Nbr Jointure: PAS DE JOINTURE;

******************
*/

 var Table="produitrecolte";
 var CleMaitre = TAB_COMPO_PPTES[246].NewCle;
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var pl_nom=GetValAt(248);
 if (!ValiderChampsObligatoire(Table,"pl_nom",TAB_GLOBAL_COMPO[248],pl_nom,false))
 	return -1;
 if (!ValiderChampsType(Table,"pl_nom",TAB_GLOBAL_COMPO[248],pl_nom))
 	return -1;
 var pl_code=GetValAt(249);
 if (!ValiderChampsObligatoire(Table,"pl_code",TAB_GLOBAL_COMPO[249],pl_code,false))
 	return -1;
 if (!ValiderChampsType(Table,"pl_code",TAB_GLOBAL_COMPO[249],pl_code))
 	return -1;
 var pl_prix=GetValAt(250);
 if (!ValiderChampsObligatoire(Table,"pl_prix",TAB_GLOBAL_COMPO[250],pl_prix,false))
 	return -1;
 if (!ValiderChampsType(Table,"pl_prix",TAB_GLOBAL_COMPO[250],pl_prix))
 	return -1;
 var pl_unite=GetValAt(251);
 if (pl_unite=="-1")
    pl_unite="null";
 if (!ValiderChampsObligatoire(Table,"pl_unite",TAB_GLOBAL_COMPO[251],pl_unite,true))
 	return -1;
 var pl_typeproduit=GetValAt(252);
 if (pl_typeproduit=="-1")
    pl_typeproduit="null";
 if (!ValiderChampsObligatoire(Table,"pl_typeproduit",TAB_GLOBAL_COMPO[252],pl_typeproduit,true))
 	return -1;
 var pl_variete=GetValAt(253);
 if (pl_variete=="-1")
    pl_variete="null";
 if (!ValiderChampsObligatoire(Table,"pl_variete",TAB_GLOBAL_COMPO[253],pl_variete,true))
 	return -1;
 var couleur=GetValAt(254);
 if (!ValiderChampsObligatoire(Table,"couleur",TAB_GLOBAL_COMPO[254],couleur,false))
 	return -1;
 if (!ValiderChampsType(Table,"couleur",TAB_GLOBAL_COMPO[254],couleur))
 	return -1;
 var note=GetValAt(255);
 if (!ValiderChampsObligatoire(Table,"note",TAB_GLOBAL_COMPO[255],note,false))
 	return -1;
 if (!ValiderChampsType(Table,"note",TAB_GLOBAL_COMPO[255],note))
 	return -1;
 var Req="insert into "+Table+" ";
var TabInsertionEnPlus=new Array();
 Req+="("+NomCleMaitre+",pl_nom,pl_code,pl_prix,pl_unite,pl_typeproduit,pl_variete,couleur,note"+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[0]:"")+")";
 Req+=" values ("+CleMaitre+","+(pl_nom=="" ? "null" : "'"+ValiderChaine(pl_nom)+"'" )+","+(pl_code=="" ? "null" : "'"+ValiderChaine(pl_code)+"'" )+","+(pl_prix=="" ? "null" : "'"+ValiderChaine(pl_prix)+"'" )+","+pl_unite+","+pl_typeproduit+","+pl_variete+","+(couleur==null ? "null" : "'"+ValiderChaine(couleur)+"'" )+","+(note=="" ? "null" : "'"+ValiderChaine(note)+"'" )+""+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[1]:"")+")";

 if (pgsql_update(Req)==0)
	alert("Echec lors de l'insertion");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Produits de récolte
  TAPEZ ICI LE CODE DE LA REQUETE DE SUPPRESSION 
***************************************************/
function User_Delete_Produits_de_récolte_Produits_de_récolte0(Compo_Maitre)
{
 var Table="produitrecolte";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var Req="delete from "+Table+" where "+NomCleMaitre+" = "+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la supression");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Produits de récolte
  TAPEZ ICI LE CODE DE LA REQUETE DE MISE A JOUR 
***************************************************/
function User_Update_Produits_de_récolte_Produits_de_récolte0(Compo_Maitre)
{
 var Table="produitrecolte";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var pl_nom=GetValAt(248);
 if (!ValiderChampsObligatoire(Table,"pl_nom",TAB_GLOBAL_COMPO[248],pl_nom,false))
 	return -1;
 if (!ValiderChampsType(Table,"pl_nom",TAB_GLOBAL_COMPO[248],pl_nom))
 	return -1;
 var pl_code=GetValAt(249);
 if (!ValiderChampsObligatoire(Table,"pl_code",TAB_GLOBAL_COMPO[249],pl_code,false))
 	return -1;
 if (!ValiderChampsType(Table,"pl_code",TAB_GLOBAL_COMPO[249],pl_code))
 	return -1;
 var pl_prix=GetValAt(250);
 if (!ValiderChampsObligatoire(Table,"pl_prix",TAB_GLOBAL_COMPO[250],pl_prix,false))
 	return -1;
 if (!ValiderChampsType(Table,"pl_prix",TAB_GLOBAL_COMPO[250],pl_prix))
 	return -1;
 var pl_unite=GetValAt(251);
 if (pl_unite=="-1")
    pl_unite="null";
 if (!ValiderChampsObligatoire(Table,"pl_unite",TAB_GLOBAL_COMPO[251],pl_unite,true))
 	return -1;
 var pl_typeproduit=GetValAt(252);
 if (pl_typeproduit=="-1")
    pl_typeproduit="null";
 if (!ValiderChampsObligatoire(Table,"pl_typeproduit",TAB_GLOBAL_COMPO[252],pl_typeproduit,true))
 	return -1;
 var pl_variete=GetValAt(253);
 if (pl_variete=="-1")
    pl_variete="null";
 if (!ValiderChampsObligatoire(Table,"pl_variete",TAB_GLOBAL_COMPO[253],pl_variete,true))
 	return -1;
 var couleur=GetValAt(254);
 if (!ValiderChampsObligatoire(Table,"couleur",TAB_GLOBAL_COMPO[254],couleur,false))
 	return -1;
 if (!ValiderChampsType(Table,"couleur",TAB_GLOBAL_COMPO[254],couleur))
 	return -1;
 var note=GetValAt(255);
 if (!ValiderChampsObligatoire(Table,"note",TAB_GLOBAL_COMPO[255],note,false))
 	return -1;
 if (!ValiderChampsType(Table,"note",TAB_GLOBAL_COMPO[255],note))
 	return -1;
 var Req="update "+Table+" set ";
 Req+="pl_nom="+(pl_nom=="" ? "null" : "'"+ValiderChaine(pl_nom)+"'" )+",pl_code="+(pl_code=="" ? "null" : "'"+ValiderChaine(pl_code)+"'" )+",pl_prix="+(pl_prix=="" ? "null" : "'"+ValiderChaine(pl_prix)+"'" )+",pl_unite="+pl_unite+",pl_typeproduit="+pl_typeproduit+",pl_variete="+pl_variete+",couleur="+(couleur==null ? "null" : "'"+ValiderChaine(couleur)+"'" )+",note="+(note=="" ? "null" : "'"+ValiderChaine(note)+"'" )+"";
 Req+=" where "+NomCleMaitre+"="+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la mise à jour");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Ventes
  TAPEZ ICI LE CODE DE LA REQUETE D'INSERTION
***************************************************/
function User_Insert_Ventes_Ventes0(Compo_Maitre)
{

/*
***** INFOS ******

Nbr d'esclaves = 6

Id dans le tab: 262;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 263;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 264;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 265;
simple
Nbr Jointure: 1;
    Joint n° 0 = personne,ve_personne,pe_numero

Id dans le tab: 266;
simple
Nbr Jointure: 1;
    Joint n° 0 = recolte,ve_recolte,re_numero

Id dans le tab: 267;
simple
Nbr Jointure: PAS DE JOINTURE;

******************
*/

 var Table="vente";
 var CleMaitre = TAB_COMPO_PPTES[256].NewCle;
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var ve_quantite=GetValAt(262);
 if (!ValiderChampsObligatoire(Table,"ve_quantite",TAB_GLOBAL_COMPO[262],ve_quantite,false))
 	return -1;
 if (!ValiderChampsType(Table,"ve_quantite",TAB_GLOBAL_COMPO[262],ve_quantite))
 	return -1;
 var ve_prix=GetValAt(263);
 if (!ValiderChampsObligatoire(Table,"ve_prix",TAB_GLOBAL_COMPO[263],ve_prix,false))
 	return -1;
 if (!ValiderChampsType(Table,"ve_prix",TAB_GLOBAL_COMPO[263],ve_prix))
 	return -1;
 var ve_date=GetValAt(264);
 if (!ValiderChampsObligatoire(Table,"ve_date",TAB_GLOBAL_COMPO[264],ve_date,false))
 	return -1;
 if (!ValiderChampsType(Table,"ve_date",TAB_GLOBAL_COMPO[264],ve_date))
 	return -1;
 var ve_personne=GetValAt(265);
 if (ve_personne=="-1")
    ve_personne="null";
 if (!ValiderChampsObligatoire(Table,"ve_personne",TAB_GLOBAL_COMPO[265],ve_personne,true))
 	return -1;
 var ve_recolte=GetValAt(266);
 if (ve_recolte=="-1")
    ve_recolte="null";
 if (!ValiderChampsObligatoire(Table,"ve_recolte",TAB_GLOBAL_COMPO[266],ve_recolte,true))
 	return -1;
 var note=GetValAt(267);
 if (!ValiderChampsObligatoire(Table,"note",TAB_GLOBAL_COMPO[267],note,false))
 	return -1;
 if (!ValiderChampsType(Table,"note",TAB_GLOBAL_COMPO[267],note))
 	return -1;
 var Req="insert into "+Table+" ";
var TabInsertionEnPlus=new Array();
 Req+="("+NomCleMaitre+",ve_quantite,ve_prix,ve_date,ve_personne,ve_recolte,note"+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[0]:"")+")";
 Req+=" values ("+CleMaitre+","+(ve_quantite=="" ? "null" : "'"+ValiderChaine(ve_quantite)+"'" )+","+(ve_prix=="" ? "null" : "'"+ValiderChaine(ve_prix)+"'" )+","+(ve_date=="" ? "null" : "'"+ValiderChaine(ve_date)+"'" )+","+ve_personne+","+ve_recolte+","+(note=="" ? "null" : "'"+ValiderChaine(note)+"'" )+""+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[1]:"")+")";

 if (pgsql_update(Req)==0)
	alert("Echec lors de l'insertion");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Ventes
  TAPEZ ICI LE CODE DE LA REQUETE DE SUPPRESSION 
***************************************************/
function User_Delete_Ventes_Ventes0(Compo_Maitre)
{
 var Table="vente";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var Req="delete from "+Table+" where "+NomCleMaitre+" = "+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la supression");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Ventes
  TAPEZ ICI LE CODE DE LA REQUETE DE MISE A JOUR 
***************************************************/
function User_Update_Ventes_Ventes0(Compo_Maitre)
{
 var Table="vente";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var ve_quantite=GetValAt(262);
 if (!ValiderChampsObligatoire(Table,"ve_quantite",TAB_GLOBAL_COMPO[262],ve_quantite,false))
 	return -1;
 if (!ValiderChampsType(Table,"ve_quantite",TAB_GLOBAL_COMPO[262],ve_quantite))
 	return -1;
 var ve_prix=GetValAt(263);
 if (!ValiderChampsObligatoire(Table,"ve_prix",TAB_GLOBAL_COMPO[263],ve_prix,false))
 	return -1;
 if (!ValiderChampsType(Table,"ve_prix",TAB_GLOBAL_COMPO[263],ve_prix))
 	return -1;
 var ve_date=GetValAt(264);
 if (!ValiderChampsObligatoire(Table,"ve_date",TAB_GLOBAL_COMPO[264],ve_date,false))
 	return -1;
 if (!ValiderChampsType(Table,"ve_date",TAB_GLOBAL_COMPO[264],ve_date))
 	return -1;
 var ve_personne=GetValAt(265);
 if (ve_personne=="-1")
    ve_personne="null";
 if (!ValiderChampsObligatoire(Table,"ve_personne",TAB_GLOBAL_COMPO[265],ve_personne,true))
 	return -1;
 var ve_recolte=GetValAt(266);
 if (ve_recolte=="-1")
    ve_recolte="null";
 if (!ValiderChampsObligatoire(Table,"ve_recolte",TAB_GLOBAL_COMPO[266],ve_recolte,true))
 	return -1;
 var note=GetValAt(267);
 if (!ValiderChampsObligatoire(Table,"note",TAB_GLOBAL_COMPO[267],note,false))
 	return -1;
 if (!ValiderChampsType(Table,"note",TAB_GLOBAL_COMPO[267],note))
 	return -1;
 var Req="update "+Table+" set ";
 Req+="ve_quantite="+(ve_quantite=="" ? "null" : "'"+ValiderChaine(ve_quantite)+"'" )+",ve_prix="+(ve_prix=="" ? "null" : "'"+ValiderChaine(ve_prix)+"'" )+",ve_date="+(ve_date=="" ? "null" : "'"+ValiderChaine(ve_date)+"'" )+",ve_personne="+ve_personne+",ve_recolte="+ve_recolte+",note="+(note=="" ? "null" : "'"+ValiderChaine(note)+"'" )+"";
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

/*************************************************
  REQUETES UTILSATEUR : Onglet : Classes
  TAPEZ ICI LE CODE DE LA REQUETE D'INSERTION
***************************************************/
function User_Insert_Classes_Liste_des_classes0(Compo_Maitre)
{

/*
***** INFOS ******

Nbr d'esclaves = 8

Id dans le tab: 7;
simple
Nbr Jointure: 1;
    Joint n° 0 = societe,cl_societe,so_numero

Id dans le tab: 8;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 9;
simple
Nbr Jointure: PAS DE JOINTURE;

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
complexe
Nbr Jointure: 1;
    Joint n° 0 = propriete,cl_numero,pr_classe

******************
*/

 var Table="classe";
 var CleMaitre = TAB_COMPO_PPTES[3].NewCle;
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var cl_societe=GetValAt(7);
 if (cl_societe=="-1")
    cl_societe="null";
 if (!ValiderChampsObligatoire(Table,"cl_societe",TAB_GLOBAL_COMPO[7],cl_societe,true))
 	return -1;
 var cl_libelle=GetValAt(8);
 if (!ValiderChampsObligatoire(Table,"cl_libelle",TAB_GLOBAL_COMPO[8],cl_libelle,false))
 	return -1;
 if (!ValiderChampsType(Table,"cl_libelle",TAB_GLOBAL_COMPO[8],cl_libelle))
 	return -1;
 var cl_nom=GetValAt(9);
 if (!ValiderChampsObligatoire(Table,"cl_nom",TAB_GLOBAL_COMPO[9],cl_nom,false))
 	return -1;
 if (!ValiderChampsType(Table,"cl_nom",TAB_GLOBAL_COMPO[9],cl_nom))
 	return -1;
 var cl_represente=GetValAt(10);
 if (!ValiderChampsObligatoire(Table,"cl_represente",TAB_GLOBAL_COMPO[10],cl_represente,false))
 	return -1;
 if (!ValiderChampsType(Table,"cl_represente",TAB_GLOBAL_COMPO[10],cl_represente))
 	return -1;
 var cl_mere=GetValAt(11);
 if (!ValiderChampsObligatoire(Table,"cl_mere",TAB_GLOBAL_COMPO[11],cl_mere,false))
 	return -1;
 if (!ValiderChampsType(Table,"cl_mere",TAB_GLOBAL_COMPO[11],cl_mere))
 	return -1;
 var cl_assoc=GetValAt(12);
 if (!ValiderChampsObligatoire(Table,"cl_assoc",TAB_GLOBAL_COMPO[12],cl_assoc,false))
 	return -1;
 if (!ValiderChampsType(Table,"cl_assoc",TAB_GLOBAL_COMPO[12],cl_assoc))
 	return -1;
 var cl_ordre=GetValAt(13);
 if (!ValiderChampsObligatoire(Table,"cl_ordre",TAB_GLOBAL_COMPO[13],cl_ordre,false))
 	return -1;
 if (!ValiderChampsType(Table,"cl_ordre",TAB_GLOBAL_COMPO[13],cl_ordre))
 	return -1;
 var Req="insert into "+Table+" ";
var TabInsertionEnPlus=new Array();
 Req+="("+NomCleMaitre+",cl_societe,cl_libelle,cl_nom,cl_represente,cl_mere,cl_assoc,cl_ordre"+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[0]:"")+")";
 Req+=" values ("+CleMaitre+","+cl_societe+","+(cl_libelle=="" ? "null" : "'"+ValiderChaine(cl_libelle)+"'" )+","+(cl_nom=="" ? "null" : "'"+ValiderChaine(cl_nom)+"'" )+","+(cl_represente=="" ? "null" : "'"+ValiderChaine(cl_represente)+"'" )+","+(cl_mere=="true" ? "true" : "false")+","+(cl_assoc=="true" ? "true" : "false")+","+(cl_ordre=="" ? "null" : "'"+ValiderChaine(cl_ordre)+"'" )+""+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[1]:"")+")";

 if (pgsql_update(Req)==0)
	alert("Echec lors de l'insertion");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Classes
  TAPEZ ICI LE CODE DE LA REQUETE DE SUPPRESSION 
***************************************************/
function User_Delete_Classes_Liste_des_classes0(Compo_Maitre)
{
 var Table="classe";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var Req="delete from "+Table+" where "+NomCleMaitre+" = "+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la supression");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Classes
  TAPEZ ICI LE CODE DE LA REQUETE DE MISE A JOUR 
***************************************************/
function User_Update_Classes_Liste_des_classes0(Compo_Maitre)
{
 var Table="classe";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var cl_societe=GetValAt(7);
 if (cl_societe=="-1")
    cl_societe="null";
 if (!ValiderChampsObligatoire(Table,"cl_societe",TAB_GLOBAL_COMPO[7],cl_societe,true))
 	return -1;
 var cl_libelle=GetValAt(8);
 if (!ValiderChampsObligatoire(Table,"cl_libelle",TAB_GLOBAL_COMPO[8],cl_libelle,false))
 	return -1;
 if (!ValiderChampsType(Table,"cl_libelle",TAB_GLOBAL_COMPO[8],cl_libelle))
 	return -1;
 var cl_nom=GetValAt(9);
 if (!ValiderChampsObligatoire(Table,"cl_nom",TAB_GLOBAL_COMPO[9],cl_nom,false))
 	return -1;
 if (!ValiderChampsType(Table,"cl_nom",TAB_GLOBAL_COMPO[9],cl_nom))
 	return -1;
 var cl_represente=GetValAt(10);
 if (!ValiderChampsObligatoire(Table,"cl_represente",TAB_GLOBAL_COMPO[10],cl_represente,false))
 	return -1;
 if (!ValiderChampsType(Table,"cl_represente",TAB_GLOBAL_COMPO[10],cl_represente))
 	return -1;
 var cl_mere=GetValAt(11);
 if (!ValiderChampsObligatoire(Table,"cl_mere",TAB_GLOBAL_COMPO[11],cl_mere,false))
 	return -1;
 if (!ValiderChampsType(Table,"cl_mere",TAB_GLOBAL_COMPO[11],cl_mere))
 	return -1;
 var cl_assoc=GetValAt(12);
 if (!ValiderChampsObligatoire(Table,"cl_assoc",TAB_GLOBAL_COMPO[12],cl_assoc,false))
 	return -1;
 if (!ValiderChampsType(Table,"cl_assoc",TAB_GLOBAL_COMPO[12],cl_assoc))
 	return -1;
 var cl_ordre=GetValAt(13);
 if (!ValiderChampsObligatoire(Table,"cl_ordre",TAB_GLOBAL_COMPO[13],cl_ordre,false))
 	return -1;
 if (!ValiderChampsType(Table,"cl_ordre",TAB_GLOBAL_COMPO[13],cl_ordre))
 	return -1;
 var Req="update "+Table+" set ";
 Req+="cl_societe="+cl_societe+",cl_libelle="+(cl_libelle=="" ? "null" : "'"+ValiderChaine(cl_libelle)+"'" )+",cl_nom="+(cl_nom=="" ? "null" : "'"+ValiderChaine(cl_nom)+"'" )+",cl_represente="+(cl_represente=="" ? "null" : "'"+ValiderChaine(cl_represente)+"'" )+",cl_mere="+(cl_mere=="true" ? "true" : "false")+",cl_assoc="+(cl_assoc=="true" ? "true" : "false")+",cl_ordre="+(cl_ordre=="" ? "null" : "'"+ValiderChaine(cl_ordre)+"'" )+"";
 Req+=" where "+NomCleMaitre+"="+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la mise à jour");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Classes
  TAPEZ ICI LE CODE DE LA REQUETE D'INSERTION
***************************************************/
function User_Insert_Classes_Propriétés_8(Compo_Maitre)
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
Nbr Jointure: 1;
    Joint n° 0 = typepropriete,pr_type,tr_numero

Id dans le tab: 22;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 23;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 24;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 25;
simple
Nbr Jointure: PAS DE JOINTURE;

******************
*/

 var Table="propriete";
 var CleMaitre = TAB_COMPO_PPTES[14].NewCle;
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 /* COMPOSANT LISTE AVEC JOINTURE SIMPLE */
 var pr_libelle=GetValAt(19);
 if (!ValiderChampsObligatoire(Table,"pr_libelle",TAB_GLOBAL_COMPO[19],pr_libelle,false))
 	return -1;
 if (!ValiderChampsType(Table,"pr_libelle",TAB_GLOBAL_COMPO[19],pr_libelle))
 	return -1;
 var pr_nom=GetValAt(20);
 if (!ValiderChampsObligatoire(Table,"pr_nom",TAB_GLOBAL_COMPO[20],pr_nom,false))
 	return -1;
 if (!ValiderChampsType(Table,"pr_nom",TAB_GLOBAL_COMPO[20],pr_nom))
 	return -1;
 var pr_type=GetValAt(21);
 if (pr_type=="-1")
    pr_type="null";
 if (!ValiderChampsObligatoire(Table,"pr_type",TAB_GLOBAL_COMPO[21],pr_type,true))
 	return -1;
 var pr_obligatoire=GetValAt(22);
 if (!ValiderChampsObligatoire(Table,"pr_obligatoire",TAB_GLOBAL_COMPO[22],pr_obligatoire,false))
 	return -1;
 if (!ValiderChampsType(Table,"pr_obligatoire",TAB_GLOBAL_COMPO[22],pr_obligatoire))
 	return -1;
 var pr_colonne=GetValAt(23);
 if (!ValiderChampsObligatoire(Table,"pr_colonne",TAB_GLOBAL_COMPO[23],pr_colonne,false))
 	return -1;
 if (!ValiderChampsType(Table,"pr_colonne",TAB_GLOBAL_COMPO[23],pr_colonne))
 	return -1;
 var pr_colesclave=GetValAt(24);
 if (!ValiderChampsObligatoire(Table,"pr_colesclave",TAB_GLOBAL_COMPO[24],pr_colesclave,false))
 	return -1;
 if (!ValiderChampsType(Table,"pr_colesclave",TAB_GLOBAL_COMPO[24],pr_colesclave))
 	return -1;
 var pr_ordre=GetValAt(25);
 if (!ValiderChampsObligatoire(Table,"pr_ordre",TAB_GLOBAL_COMPO[25],pr_ordre,false))
 	return -1;
 if (!ValiderChampsType(Table,"pr_ordre",TAB_GLOBAL_COMPO[25],pr_ordre))
 	return -1;
 var Req="insert into "+Table+" ";
var TabInsertionEnPlus=new Array();
 Req+="("+NomCleMaitre+",pr_classe,pr_libelle,pr_nom,pr_type,pr_obligatoire,pr_colonne,pr_colesclave,pr_ordre"+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[0]:"")+")";
 Req+=" values ("+CleMaitre+","+TAB_COMPO_PPTES[3].NewCle+","+(pr_libelle=="" ? "null" : "'"+ValiderChaine(pr_libelle)+"'" )+","+(pr_nom=="" ? "null" : "'"+ValiderChaine(pr_nom)+"'" )+","+pr_type+","+(pr_obligatoire=="true" ? "true" : "false")+","+(pr_colonne=="true" ? "true" : "false")+","+(pr_colesclave=="true" ? "true" : "false")+","+(pr_ordre=="" ? "null" : "'"+ValiderChaine(pr_ordre)+"'" )+""+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[1]:"")+")";

 if (pgsql_update(Req)==0)
	alert("Echec lors de l'insertion");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Classes
  TAPEZ ICI LE CODE DE LA REQUETE DE SUPPRESSION 
***************************************************/
function User_Delete_Classes_Propriétés_8(Compo_Maitre)
{
 var Table="propriete";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var Req="delete from "+Table+" where "+NomCleMaitre+" = "+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la supression");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Classes
  TAPEZ ICI LE CODE DE LA REQUETE DE MISE A JOUR 
***************************************************/
function User_Update_Classes_Propriétés_8(Compo_Maitre)
{
 var Table="propriete";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var pr_libelle=GetValAt(19);
 if (!ValiderChampsObligatoire(Table,"pr_libelle",TAB_GLOBAL_COMPO[19],pr_libelle,false))
 	return -1;
 if (!ValiderChampsType(Table,"pr_libelle",TAB_GLOBAL_COMPO[19],pr_libelle))
 	return -1;
 var pr_nom=GetValAt(20);
 if (!ValiderChampsObligatoire(Table,"pr_nom",TAB_GLOBAL_COMPO[20],pr_nom,false))
 	return -1;
 if (!ValiderChampsType(Table,"pr_nom",TAB_GLOBAL_COMPO[20],pr_nom))
 	return -1;
 var pr_type=GetValAt(21);
 if (pr_type=="-1")
    pr_type="null";
 if (!ValiderChampsObligatoire(Table,"pr_type",TAB_GLOBAL_COMPO[21],pr_type,true))
 	return -1;
 var pr_obligatoire=GetValAt(22);
 if (!ValiderChampsObligatoire(Table,"pr_obligatoire",TAB_GLOBAL_COMPO[22],pr_obligatoire,false))
 	return -1;
 if (!ValiderChampsType(Table,"pr_obligatoire",TAB_GLOBAL_COMPO[22],pr_obligatoire))
 	return -1;
 var pr_colonne=GetValAt(23);
 if (!ValiderChampsObligatoire(Table,"pr_colonne",TAB_GLOBAL_COMPO[23],pr_colonne,false))
 	return -1;
 if (!ValiderChampsType(Table,"pr_colonne",TAB_GLOBAL_COMPO[23],pr_colonne))
 	return -1;
 var pr_colesclave=GetValAt(24);
 if (!ValiderChampsObligatoire(Table,"pr_colesclave",TAB_GLOBAL_COMPO[24],pr_colesclave,false))
 	return -1;
 if (!ValiderChampsType(Table,"pr_colesclave",TAB_GLOBAL_COMPO[24],pr_colesclave))
 	return -1;
 var pr_ordre=GetValAt(25);
 if (!ValiderChampsObligatoire(Table,"pr_ordre",TAB_GLOBAL_COMPO[25],pr_ordre,false))
 	return -1;
 if (!ValiderChampsType(Table,"pr_ordre",TAB_GLOBAL_COMPO[25],pr_ordre))
 	return -1;
 var Req="update "+Table+" set ";
 Req+="pr_libelle="+(pr_libelle=="" ? "null" : "'"+ValiderChaine(pr_libelle)+"'" )+",pr_nom="+(pr_nom=="" ? "null" : "'"+ValiderChaine(pr_nom)+"'" )+",pr_type="+pr_type+",pr_obligatoire="+(pr_obligatoire=="true" ? "true" : "false")+",pr_colonne="+(pr_colonne=="true" ? "true" : "false")+",pr_colesclave="+(pr_colesclave=="true" ? "true" : "false")+",pr_ordre="+(pr_ordre=="" ? "null" : "'"+ValiderChaine(pr_ordre)+"'" )+"";
 Req+=" where "+NomCleMaitre+"="+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la mise à jour");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Types de propriétés
  TAPEZ ICI LE CODE DE LA REQUETE D'INSERTION
***************************************************/
function User_Insert_Types_de_propriétés_Liste_des_types_de_propriétés0(Compo_Maitre)
{

/*
***** INFOS ******

Nbr d'esclaves = 2

Id dans le tab: 28;
simple
Nbr Jointure: PAS DE JOINTURE;

Id dans le tab: 29;
complexe
Nbr Jointure: 1;
    Joint n° 0 = listechoix,tr_numero,lc_typepropriete

******************
*/

 var Table="typepropriete";
 var CleMaitre = TAB_COMPO_PPTES[26].NewCle;
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var tr_libelle=GetValAt(28);
 if (!ValiderChampsObligatoire(Table,"tr_libelle",TAB_GLOBAL_COMPO[28],tr_libelle,false))
 	return -1;
 if (!ValiderChampsType(Table,"tr_libelle",TAB_GLOBAL_COMPO[28],tr_libelle))
 	return -1;
 var Req="insert into "+Table+" ";
var TabInsertionEnPlus=new Array();
 Req+="("+NomCleMaitre+",tr_libelle"+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[0]:"")+")";
 Req+=" values ("+CleMaitre+","+(tr_libelle=="" ? "null" : "'"+ValiderChaine(tr_libelle)+"'" )+""+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[1]:"")+")";

 if (pgsql_update(Req)==0)
	alert("Echec lors de l'insertion");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Types de propriétés
  TAPEZ ICI LE CODE DE LA REQUETE DE SUPPRESSION 
***************************************************/
function User_Delete_Types_de_propriétés_Liste_des_types_de_propriétés0(Compo_Maitre)
{
 var Table="typepropriete";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var Req="delete from "+Table+" where "+NomCleMaitre+" = "+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la supression");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Types de propriétés
  TAPEZ ICI LE CODE DE LA REQUETE DE MISE A JOUR 
***************************************************/
function User_Update_Types_de_propriétés_Liste_des_types_de_propriétés0(Compo_Maitre)
{
 var Table="typepropriete";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var tr_libelle=GetValAt(28);
 if (!ValiderChampsObligatoire(Table,"tr_libelle",TAB_GLOBAL_COMPO[28],tr_libelle,false))
 	return -1;
 if (!ValiderChampsType(Table,"tr_libelle",TAB_GLOBAL_COMPO[28],tr_libelle))
 	return -1;
 var Req="update "+Table+" set ";
 Req+="tr_libelle="+(tr_libelle=="" ? "null" : "'"+ValiderChaine(tr_libelle)+"'" )+"";
 Req+=" where "+NomCleMaitre+"="+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la mise à jour");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Types de propriétés
  TAPEZ ICI LE CODE DE LA REQUETE D'INSERTION
***************************************************/
function User_Insert_Types_de_propriétés_Liste_des_choix_2(Compo_Maitre)
{

/*
***** INFOS ******

Nbr d'esclaves = 1

Id dans le tab: 31;
simple
Nbr Jointure: PAS DE JOINTURE;

******************
*/

 var Table="listechoix";
 var CleMaitre = TAB_COMPO_PPTES[29].NewCle;
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 /* COMPOSANT LISTE AVEC JOINTURE SIMPLE */
 var lc_libelle=GetValAt(31);
 if (!ValiderChampsObligatoire(Table,"lc_libelle",TAB_GLOBAL_COMPO[31],lc_libelle,false))
 	return -1;
 if (!ValiderChampsType(Table,"lc_libelle",TAB_GLOBAL_COMPO[31],lc_libelle))
 	return -1;
 var Req="insert into "+Table+" ";
var TabInsertionEnPlus=new Array();
 Req+="("+NomCleMaitre+",lc_typepropriete,lc_libelle"+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[0]:"")+")";
 Req+=" values ("+CleMaitre+","+TAB_COMPO_PPTES[26].NewCle+","+(lc_libelle=="" ? "null" : "'"+ValiderChaine(lc_libelle)+"'" )+""+(TabInsertionEnPlus.length!=0?","+TabInsertionEnPlus[1]:"")+")";

 if (pgsql_update(Req)==0)
	alert("Echec lors de l'insertion");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Types de propriétés
  TAPEZ ICI LE CODE DE LA REQUETE DE SUPPRESSION 
***************************************************/
function User_Delete_Types_de_propriétés_Liste_des_choix_2(Compo_Maitre)
{
 var Table="listechoix";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var Req="delete from "+Table+" where "+NomCleMaitre+" = "+CleMaitre;

 if (pgsql_update(Req)==0)
	alert("Echec lors de la supression");
return CleMaitre;

}
/*************************************************
  REQUETES UTILSATEUR : Onglet : Types de propriétés
  TAPEZ ICI LE CODE DE LA REQUETE DE MISE A JOUR 
***************************************************/
function User_Update_Types_de_propriétés_Liste_des_choix_2(Compo_Maitre)
{
 var Table="listechoix";
 var CleMaitre = Compo_Maitre.getCleVal();
 var NomCleMaitre = DePrefixerChamp(Compo_Maitre.getCle());
 var lc_libelle=GetValAt(31);
 if (!ValiderChampsObligatoire(Table,"lc_libelle",TAB_GLOBAL_COMPO[31],lc_libelle,false))
 	return -1;
 if (!ValiderChampsType(Table,"lc_libelle",TAB_GLOBAL_COMPO[31],lc_libelle))
 	return -1;
 var Req="update "+Table+" set ";
 Req+="lc_libelle="+(lc_libelle=="" ? "null" : "'"+ValiderChaine(lc_libelle)+"'" )+"";
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

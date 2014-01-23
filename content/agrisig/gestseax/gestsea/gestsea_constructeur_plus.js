const GSEA='gsea_';
const REF='Reference';
var codejs="";
var code="";

function zprompt(x){
    zprompt("Requête",x);
}

/*  Header
 *  - gbp_ListeChoix(numero) @return string
 *
 *  - LancerGeneSEA() @return nothing
 */



/* Renvoie la liste de la base correspondant au numero
 * @param numero clé dans la table ListeChoix
 */
function gbp_ListeChoix(numero){
    var lst="";
    query="SELECT LC_Libelle FROM ListeChoix WHERE LC_TypePropriete="+numero+";";
    result=pgsql_query(query);
    if (result.rowCount>0){
	var enul=result.enumerate();
	enul.first();
	var encl=true;
	lst="'"+enul.getVariant(0)+"'";
	while(encl){
	    encl=enul.next();
	    lst+=",'"+enul.getVariant(0)+"'";
	}
    }
    return lst;
}


function LancerGeneSEA(){
    /* Creation du code principal évalué dans gestsea-general.js */
    var tabclasse=new Array();
    /* Recuperation des sociétés auxquelles appartient l'agent*/
    
    var query="SELECT EM_Super FROM Employe WHERE EM_Login=CURRENT_USER;";
    var result=pgsql_query(query);
    if (result.rowCount>0){
	var enumr=result.enumerate();
	enumr.first();
	var superuser=enumr.getBool(0);
	if (!superuser){
	    alert("Vous n'etes pas un super-utilisateur.\nVous n'avez pas le droit de générer l'application.");
	    return null;
	}
    }else{
	alert("Vous n'appartenez à aucune société.\nVous n'avez pas le droit de générer l'application.");
	return null;
    }
    
    if (confirm("Voulez-vous vraiment continuer la génération?")) {
	/* Creation des fonctions mcd.js importantes */
	codejs="";
	var codetype="";
	var codemust="";
	query="SELECT CL_Nom, CL_Numero FROM Classe;";
	result=pgsql_query(query);
	if (result.rowCount>0){
	    enumr=result.enumerate();
	    enumr.beforeFirst();
	    codetype+="function gsea_getType(table,champs){\n";
	    codetype+="  var type;\n";
	    codetype+="  switch(table.toLowerCase()){\n";
	    codemust+="function gsea_obligatoire(table,champs){\n";	    
	    codemust+="  var obligatoire;\n";
	    codemust+="  switch(table.toLowerCase()){\n";
	    var encore=true;
	    while(encore){
		encore=enumr.next();
		//		var pref="";//enumr.getVariant(0).substr(0,2)+"_";
		codetype+="    case '"+(GSEA+enumr.getVariant(0)).toLowerCase()+"' :\n";
		codetype+="      switch(champs.toLowerCase()){\n";
		codemust+="    case '"+(GSEA+enumr.getVariant(0)).toLowerCase()+"' :\n";
		codemust+="      switch(champs.toLowerCase()){\n";
	        // Recuperation des champs 
		query="SELECT PR_Nom, PR_Type, PR_Obligatoire, TR_Code FROM Propriete,TypePropriete WHERE PR_Classe="+enumr.getVariant(1)+" AND TR_Numero=PR_Type;";
		result=pgsql_query(query);
		if (result.rowCount>0) {
		    var enup=result.enumerate();
		    enup.beforeFirst();
		    var encp=true;
		    while(encp){
			encp=enup.next();
			codetype+="        case '"+(enup.getVariant(0)).toLowerCase()+"' : type="+enup.getVariant(3)+";break;\n";
			codemust+="        case '"+(enup.getVariant(0)).toLowerCase()+"' : obligatoire="+enup.getVariant(2)+";break;\n";
		    }          
		}
		codetype+="        default:\n        type=TYPE_UNDEFINED;\n      }\n      break;\n";
	        codemust+="        default:\n        obligatoire = false;\n      }\n      break;\n";
	    }
	    codetype+="    default:\n      type=TYPE_UNDEFINED;\n  };\n  return type;\n}";
	    codemust+="    default:\n      obligatoire = false;\n  };\n  return obligatoire\n}";
	}
	codejs+=codetype+"\n\n"+codemust;
	//alert(codejs);





	/* Récupération des classes donnant lieu à des onglets */
	query="SELECT CL_Nom, CL_Represente, CL_Libelle, CL_Numero FROM Classe WHERE CL_Mere ORDER BY CL_Ordre;";
	result=pgsql_query(query);
	if (result.rowCount>0){
	    var reg = new RegExp("\\(|\\)", "i");
	    code="";
	    var codeajout="";
	    var codeliaison="";
	    enumr=result.enumerate();
	    enumr.beforeFirst();
	    var encore=true;
	    // Code global au systeme
	    code+="AllIt.IncludeJs('gestsea_principal_mcd.js');\n";
	    while(encore){
		encore=enumr.next();
		// Recuperation et enregistrement
		var classe_nom     = enumr.getVariant(0);
		var classe_libelle = enumr.getVariant(2);
		var classe_numero  = enumr.getVariant(3);
		//	var classe_pref    = classe_nom.substr(0,2)+"_";
		code+="/* "+classe_libelle+" */\n";
		code+="var It_"+classe_nom+", Maitre_"+classe_nom+";\n";
		code+="It_"+classe_nom+" = new clInterfaceSimple('"+classe_libelle+"');\n";
		code+="Maitre_"+classe_nom+" = It_"+classe_nom+".AjouterMaitre('Liste des "+classe_libelle.toLowerCase()+"','"+(GSEA+classe_nom).toLowerCase()+"');\n";
		var codecolonne="";
		var codecompo="";

		/* Création des composants directs */
		// On recupere les proprietes directes de la classe en cours
		query="SELECT PR_Nom, PR_Libelle, PR_Colonne, TR_EstClef, TR_Liste, TR_Numero, CASE WHEN TR_EstClef AND TR_Systeme THEN SUBSTRING(TR_SQL FROM 7) ELSE TR_SQL END AS TR_VraiSQL, TR_Classe, CASE WHEN tr_numero<100 THEN true ELSE cl_mere END AS TR_Onglet, CL_Nom FROM propriete LEFT OUTER JOIN typepropriete ON (pr_type=tr_numero) LEFT OUTER JOIN classe ON (tr_classe=cl_numero) WHERE PR_Classe="+classe_numero+" ORDER BY PR_Ordre;";
		result=pgsql_query(query);
		if (result.rowCount>0){
		    var enu=result.enumerate();
		    enu.beforeFirst();
		    var enc=true;
		    while(enc){
			enc=enu.next();
			var propriete_nom     = enu.getVariant(0);
			var propriete_libelle = enu.getVariant(1);
			var propriete_colonne = enu.getBool(2);
			var propriete_estcle  = enu.getBool(3);
			var propriete_liste   = enu.getBool(4);
			var propriete_type    = enu.getVariant(5)*1;
			var propriete_sql     = enu.getVariant(6);
			var fk_classe         = enu.getVariant(7);
			var propriete_onglet  = enu.getBool(8);
			var fk_classe_nom     = enu.getVariant(9);
			var splited=propriete_sql.split(reg);
			var fk_table=splited[0];
			var fk_cle=splited[1];

			
			// Colonne
			if (propriete_estcle){
			    if (fk_classe!=null && fk_classe!=undefined)
				query="SELECT PR_Libelle, PR_Nom, TR_EstClef FROM Propriete, TypePropriete WHERE TR_Numero=PR_Type AND PR_Classe="+fk_classe+" AND PR_ColEsclave ORDER BY PR_Ordre;";
			    else
				query="SELECT CY_Libelle, CY_Nom, CY_EstClef FROM ColonneType, Propriete WHERE CY_TypePropriete="+propriete_type+" GROUP BY cy_nom,cy_libelle,cy_estclef,cy_ordre ORDER BY CY_Ordre;"
			    result=pgsql_query(query);
			    if (result.rowCount>0){
				codecompo+="var "+classe_nom+propriete_nom+"=It_"+classe_nom+".AjouterComposantComplexe('"+propriete_libelle+"', new Array('"+propriete_nom.toLowerCase()+"','"+fk_cle.toLowerCase()+"','"+fk_table.toLowerCase()+"'), null, LISTE_DEROULANTE_MULTI);\n";
				var enump=result.enumerate();
				enump.beforeFirst();
				var encop=true;
				while(encop){
				    encop=enump.next();
				    var prop_libelle = enump.getVariant(0);
				    var prop_nom     = enump.getVariant(1);
				    var prop_estcle  = enump.getBool(2);
				    if (!prop_estcle){
					if (propriete_colonne)
					    codecolonne+="Maitre_"+classe_nom+".AjouterColonne('"+prop_libelle+" - "+propriete_nom+"','"+prop_nom.toLowerCase()+"', new Array('"+propriete_nom.toLowerCase()+"','"+fk_cle.toLowerCase()+"','"+fk_table.toLowerCase()+"'));\n";
					codecompo+=classe_nom+propriete_nom+".AjouterColonne('"+prop_libelle+"','"+prop_nom.toLowerCase()+"');\n";
				    }
				}
			    }
			} else codecolonne+="Maitre_"+classe_nom+".AjouterColonne('"+propriete_libelle+"','"+propriete_nom.toLowerCase()+"');\n";
			
			// Composant
			if (propriete_estcle)
			    // Le code a été généré en même temps que pour la colonne
			    codecompo+="";//, new Array('cle','"+fk_cle.toLowerCase()+"','"+fk_table.toLowerCase()+"')";
			else{
			    codecompo+="It_"+classe_nom+".AjouterComposantSimple('"+propriete_libelle+"','"+propriete_nom.toLowerCase()+"',null,null";
			    if (propriete_liste)
				codecompo+=",LISTE_DEROULANTE_STATIC,null,new Array("+gbp_ListeChoix(propriete_type)+")";
			    else{
				switch(1*propriete_type+0){
				case 5: codecompo+=",null,null,null,true"; break; //Texte long
				case 8: codecompo+=",CHECKBOX"; break; //Booléen
				}
			    }
			    codecompo+=");\n";
			}
		    }
		}		

		//alert("Composants directs créés");

		/* Création des composants indirects (Pointé par une autre table) */
		query="SELECT DISTINCT CL_Nom, CL_Libelle, CL_Mere, CL_Assoc, PR_Nom, CL_Numero, TR_SQL FROM Classe,Propriete,TypePropriete WHERE PR_Classe=CL_Numero AND PR_Type=TR_Numero AND TR_Classe="+classe_numero+";";
		result=pgsql_query(query);
		if (result.rowCount>0){
		    var enuclind=result.enumerate();
		    enuclind.beforeFirst();
		    var encclind=true;
		    
		    while(encclind){
			encclind=enuclind.next();
			var clind_nom     = enuclind.getVariant(0);
			var clind_libelle = enuclind.getVariant(1);
			var clind_mere    = enuclind.getBool(2);
			var clind_assoc   = enuclind.getBool(3);
			var clind_prop    = enuclind.getVariant(4);
			var clind_numero  = enuclind.getVariant(5);
			var clind_sql     = enuclind.getVariant(6);
			//			var clind_pref    = clind_nom.substr(0,2)+"_";
			//var reg=
			var splited=clind_sql.split(reg);
			fk_table=splited[0];
			fk_cle=splited[1];
			
			alert("Table "+clind_nom+" est :\n- une association : "+clind_assoc+"\n- un onglet : "+clind_mere);
			//			if (!clind_assoc) {
			//query="SELECT PR_Libelle, PR_Nom, TR_EstClef, PR_Colonne FROM Propriete,TypePropriete WHERE TR_Numero=PR_Type AND PR_Classe="+clind_numero+";";
			query="SELECT PR_Nom, PR_Libelle, PR_Colonne, TR_EstClef, TR_Liste, TR_Numero, TR_SQL, TR_Classe, CASE WHEN tr_numero<100 THEN true ELSE cl_mere END AS TR_Onglet, COALESCE(CL_Nom,'') FROM propriete LEFT OUTER JOIN typepropriete ON (pr_type=tr_numero) LEFT OUTER JOIN classe ON (tr_classe=cl_numero) WHERE PR_Type=TR_Numero AND PR_Classe="+clind_numero+" ORDER BY PR_Ordre;";
			result=pgsql_query(query);
			if (result.rowCount>0) {
			    var codecol="";
			    var codecomp="";
			    var coderef="";
			    var codeasso="";
			    if (!clind_assoc) codecompo+="var "+classe_nom+clind_nom+"=It_"+classe_nom+".AjouterComposantComplexe('"+clind_libelle+"', new Array('cle','"+clind_prop.toLowerCase()+"','"+(GSEA+clind_nom).toLowerCase()+"'));\n";
			    if (!clind_mere){
				codecomp+=classe_nom+clind_nom+".AddMode(INSERTION);\n";
				codecomp+=classe_nom+clind_nom+".AddMode(SUPPRESSION);\n";
				codecomp+=classe_nom+clind_nom+".AddMode(MODIFICATION);\n";
			    }
			    
			    var enu=result.enumerate();
			    enu.beforeFirst();
			    var enc=true;
			    while(enc) {
				enc=enu.next();
				var propriete_nom     = enu.getVariant(0);
				var propriete_libelle = enu.getVariant(1);
				var propriete_colonne = enu.getBool(2);
				var propriete_estcle  = enu.getBool(3);
				var propriete_liste   = enu.getBool(4);
				var propriete_type    = enu.getVariant(5)*1;
				var propriete_sql     = enu.getVariant(6);
				var fk_classe         = enu.getVariant(7);
				//alert(fk_classe);
				var propriete_onglet  = enu.getBool(8);
				var fk_classe_nom     = enu.getVariant(9);
				//var reg = new RegExp("\\(|\\)", "i");
				var splited=propriete_sql.split(reg);
				var fk_table=splited[0];
				var fk_cle=splited[1];
				
				if (fk_classe!=classe_numero) { // Evite la redondance des informations
				    // Si on est dans une association
				    if (clind_assoc){
					coderef+="var "+classe_nom+clind_nom+REF+"=It_"+classe_nom+".AjouterComposantComplexeIndependant('"+clind_libelle+" (Référence)','"+fk_table.toLowerCase()+"');\n";
					codeasso+="var "+classe_nom+clind_nom+"=It_"+classe_nom+".AjouterComposantListeDouble('"+clind_libelle+"', new Array('cle','"+clind_prop.toLowerCase()+"','"+(GSEA+clind_nom).toLowerCase()+"','"+propriete_nom.toLowerCase()+"','"+fk_cle.toLowerCase()+"','"+fk_table.toLowerCase()+"'), null,"+classe_nom+clind_nom+REF+");\n";
					//codeliaison+="It_"+classe_nom+".LierA"+";";
				    }

				    // Colonne
				    if (propriete_estcle) {
					if (fk_classe!=null && fk_classe!=undefined){
					    query="SELECT PR_Libelle, PR_Nom, TR_EstClef FROM Propriete,TypePropriete WHERE TR_Numero=PR_Type AND PR_Classe="+fk_classe+" AND PR_ColEsclave ORDER BY PR_Ordre;";
					    //clas_pref = fk_classe_nom.substr(0,2)+"_";//clind_pref;//clind_nom.substr(0,2)+"_";//fk_classe_nom.substr(0,2)+"_";
					}else{
					    query="SELECT CY_Libelle, CY_Nom, CY_EstClef FROM ColonneType, Propriete WHERE CY_TypePropriete="+propriete_type+" GROUP BY cy_nom,cy_libelle,cy_estclef,cy_ordre ORDER BY CY_Ordre;";
					    //clas_pref = "";
					}
					//  alert(clas_pref+"\n"+query);
					result=pgsql_query(query);
					if (result.rowCount>0){
					    if (!clind_mere) codecomp+="var "+classe_nom+clind_nom+propriete_nom+"=It_"+classe_nom+".AjouterComposantComplexe('"+propriete_libelle+"', new Array('"+propriete_nom.toLowerCase()+"','"+fk_cle.toLowerCase()+"','"+fk_table.toLowerCase()+"'), "+classe_nom+clind_nom+", LISTE_DEROULANTE_MULTI);\n";
					    var enump=result.enumerate();
					    enump.beforeFirst();
					    var encop=true;
					    while(encop){
						encop=enump.next();
						var prop_libelle = enump.getVariant(0);
						var prop_nom     = enump.getVariant(1);
						var prop_estcle  = enump.getBool(2);
						if (!prop_estcle){
						    //alert(prop_nom);
						    if (propriete_colonne){
							codecol+=classe_nom+clind_nom+".AjouterColonne('"+propriete_libelle+" :: "+prop_libelle+"','"+prop_nom.toLowerCase()+"', new Array('"+propriete_nom.toLowerCase()+"','"+fk_cle.toLowerCase()+"','"+fk_table.toLowerCase()+"'));\n";
							coderef+=classe_nom+clind_nom+REF+".AjouterColonne('"+prop_libelle+"','"+prop_nom.toLowerCase()+"');\n";
							codeasso+=classe_nom+clind_nom+".AjouterColonne('"+prop_libelle+"','"+prop_nom.toLowerCase()+"');\n";
						    }
						    if (!clind_mere) 
							codecomp+=classe_nom+clind_nom+propriete_nom+".AjouterColonne('"+prop_libelle+"','"+prop_nom.toLowerCase()+"');\n";
						}
					    }
					}
				    }
				    else{
					if (propriete_colonne)
					    codecol+=classe_nom+clind_nom+".AjouterColonne('"+propriete_libelle+"','"+propriete_nom.toLowerCase()+"');\n";
					//coderef+=classe_nom+clind_nom+REF+".AjouterColonne('"+propriete_libelle+"','"+(propriete_nom).toLowerCase()+"')";
					//codeasso+=classe_nom+clind_nom+".AjouterColonne('"+propriete_libelle+"','"+(propriete_nom).toLowerCase()+"');\n";
				    }
				    
				    
				    
				    // Composant
				    if (!clind_mere && !clind_assoc) {
					if (propriete_estcle)
					    codecomp+="";//, new Array('cle','"+fk_cle.toLowerCase()+"','"+fk_table.toLowerCase()+"')";
					else{
					    codecomp+="It_"+classe_nom+".AjouterComposantSimple('"+propriete_libelle+"','"+propriete_nom.toLowerCase()+"',null,"+classe_nom+clind_nom;
					    if (propriete_liste)
						codecomp+=",LISTE_DEROULANTE_STATIC,null,new Array("+gbp_ListeChoix(propriete_type)+")";
					    else{
						switch(1*propriete_type+0){
						case 5: codecomp+=",null,null,null,true"; break; //Texte long
						case 8: codecomp+=",CHECKBOX"; break; //Booléen
						}
					    }
					    codecomp+=");\n";
					}
				    }
				    
				    // Fini 
				}
			    }// Fin du while
			    if (clind_assoc)
				codecompo+=coderef+codeasso;
			    else
				codecompo+=codecol+codecomp;
			    //	}
			    //			}else{ // Si c'est une association
			    //  codecompo+="";//"var "+classe_nom+clind_nom+REF+" = It"+classe_nom+".AjouterComposantComplexeIndependant('"+clind_libelle+"','"+clind_nom+"');\n";
			}
		    }
		}
		
		
		code+=codecolonne+"\n"+codecompo;
		code+="zalert('"+classe_nom+"...OK!');\n";
		codeajout+="AllIt.AjouterInterface(It_"+classe_nom+");\n";
		code+="\n";
	    }
	}
	/* Generation et enregistrement des fichiers */
	code+=codeliaison+codeajout;
  	alert(code);
	//	SaveFileDirectly("codein.js",code);
	//  	CodeInGeneral(code);
	/* Ouverture de la fenetre de génération */
	window.openDialog('genesea.xul','showmore','modal,centerscreen,chrome');
    }
}

alert("'gestsea_builder_plus.js' chargé");

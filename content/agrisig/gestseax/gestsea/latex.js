const KW_P="%"
const KW_S=":"
const KW_BEGIN="BEGIN";
const KW_END="END";
const KW_IF="IF";
const KW_ELSE="ELSE";

const DELIM=":";
const KW_KEY=DELIM+"KEY"+DELIM;
const KW_NUMBER=DELIM+"NUMBER"+DELIM;

var reg_begin = new RegExp(KW_P+"[ \\b]*"+KW_BEGIN+"[ \\b]*"+KW_S, "");
var reg_end   = new RegExp(KW_P+"[ \\b]*"+KW_END+"[ \\b]*", "");
var reg_if    = new RegExp(KW_P+"[ \\b]*"+KW_IF+"[ \\b]*"+KW_S, "");
var reg_else  = new RegExp(KW_P+"[ \\b]*"+KW_ELSE+"[ \\b]*", "");

/* Retourne si une ligne est un debut de bloc ou non */
function latex_DebutBloc(chaine){
    return (chaine.search(reg_begin)>=0 || chaine.search(reg_if)>=0);
}

/* Retourne si une ligne est une fin de bloc ou non */
function latex_FinBloc(chaine){
    return (chaine.search(reg_end)>=0);
}

/* Retourne le type balise de la ligne */
function latex_TypeBalise(chaine){
    if (chaine==null || chaine=='')  return "NULL";
    if (chaine.search(reg_begin)>=0) return KW_BEGIN;
    if (chaine.search(reg_end)>=0)   return KW_END;
    if (chaine.search(reg_if)>=0)    return KW_IF;
    if (chaine.search(reg_else)>=0)  return KW_ELSE;
    return "XXXX";
}

/* Traite une requete en remplacant les mot-clés */
function latex_TraiterRequete(query,key,number){   
    var reg_key = new RegExp("("+KW_KEY+")", "");
    var reg_number = new RegExp("("+KW_NUMBER+")", "");
    var result = query.replace(reg_key, key);
    result = result.replace(reg_number, number);
    return result;
}

/* Traite une ligne */
function latex_TraiterTexte(texte,key,num,coltab){
    if (texte==null) return "";
    var i,reg;
    //    alert(KW_KEY+" "+KW_NUMBER);
    var reg_key = new RegExp("("+KW_KEY+")", "g");
    var reg_number = new RegExp("("+KW_NUMBER+")", "g");
    if (key!=null) texte = texte.replace(reg_key, key);
    if (num!=null) texte = texte.replace(reg_number, num);
    if (coltab!=null){
	/* Remplacement spécifique */
	for(i=0;i<coltab.length;i++){
	    reg = new RegExp("<"+i+">","ig");
	    texte=texte.replace(reg, coltab[i]);
	}
	/* Test */
	/*
	reg = new RegExp("<"+i+">","ig");
	if (texte.search(reg)>1 && coltab.length>0){
	    alert("Attention! le modèle est mauvais. Il se peut que des erreurs apparaissent.\n Des champs <X> (ici <"+i+">) sont utilisés alors que le nombre de colonne de la requête est insuffisant.");
	}
	*/
    }
    /* Traitement des évaluations |****| */
    /*
    var reg_eval = new RegExp("\\|[\\(\\b\\"+DELIM+".\\*\\/\\d\\w\\+\\-\\) ]*\\|", "ig");
    var evals = texte.match(reg_eval);
    if (evals!=null){
	//	alert(texte);
	var evaluation="";
	var splited=texte.split(reg_eval);
	var clear=splited[0];
	for(i=1;i<splited.length;i++){
	    //	    alert("evals "+evals[i-1]);
	    evaluation="a="+evals[i-1].substring(1,evals[i-1].length-1)+";";
	    //	    alert("evaluation "+evaluation);
	    eval(evaluation);
	    clear+=a+splited[i];
	}
	//	alert(clear);
	texte=clear;
    }
    */
    return texte;
}

/* Traite récursivement les blocs */
/* Un bloc commence toujours par BEGIN ou IF et se finit toujours par END. */
function latex_TraiterBloc(bloc,key,number,columns){
    var result="";
    /* Extraction du type de la balise */
    var typebalise=latex_TypeBalise(bloc[0]);
    var splited;
    switch(typebalise){
    case KW_BEGIN: splited = bloc[0].split(reg_begin); break;
    case KW_IF: splited = bloc[0].split(reg_if); break;
    default:
	alert("Type de bloc inconnu ou non attendu ("+typebalise+") : \n"+bloc[0]);
    }
    var param=splited[splited.length-1];

    switch(typebalise){
    case KW_IF:
	// Cas d'une condition
	var cond;
	//	alert(param);
	var condition = latex_TraiterTexte(param,key,number,columns);
	// alert("Condition <"+condition+">");
	if (condition=="" || condition==null || condition==undefined) {
	    cond=false;
	    alert("La condition '"+param+"' n'est pas évaluable. \nDonc elle sera considérée fausse pour le document "+number+".");
	} else eval("cond=("+condition+");");
	var bloc_vrai=new Array();
	var i=1;
	var compte=0;
	if (cond){
	    while (i<bloc.length){
		if (latex_DebutBloc(bloc[i])) compte++;
		if (latex_FinBloc(bloc[i])) compte--;
		if ((latex_FinBloc(bloc[i]) || latex_TypeBalise(bloc[i])==KW_ELSE) && compte==0)
		    break;
		bloc_vrai.push(bloc[i]);
		i++;
	    }
	}else{
	    while (i<bloc.length){ //latex_TypeBalise(bloc[i])!=KW_ELSE && i<bloc.length){
		if (latex_DebutBloc(bloc[i])) compte++;
		if (latex_FinBloc(bloc[i])) compte--;
		if (latex_TypeBalise(bloc[i])==KW_ELSE && compte==0) {
		    //i++;
		    while (i<bloc.length-1){
			bloc_vrai.push(bloc[i]);
			i++;
		    }
		}
		i++;
	    }
	    /*
	    if (i==bloc.length && compte!=0) {
		alert("Le document est mal formé absence d'un END pour le 'IF:"+param+"'.");
		return "";
	    }
	    */
	    i++;
	    //while (latex_TypeBalise(bloc[i])!=KW_END && latex_TypeBalise(bloc[i])!=KW_ELSE) i++;
	}
	// Traitement du bloc
	//alert(bloc);
	//alert(bloc_vrai);
	if (bloc_vrai.length>0)
	    result+=latex_Traitement(bloc_vrai,key,number,columns);
	break;
    case KW_BEGIN:
	// Cas d'un bloc
	var query = latex_TraiterTexte(param,key,number,columns);
	/* Calcul du nombre de paramètre de la requete = (nombre de virgule + 1) entre le SELECT et le FROM */
	var reg_requete = new RegExp("\\bSELECT\\b|\\bFROM\\b", "i");
	var select = query.split(reg_requete);
	var colonnes = select[1].split(new RegExp(",", "i"));
	var nb_cols = colonnes.length;
	var resultat=pgsql_query(query);
	if (resultat.rowCount>0){
	    var ok = true;
	    var enum=resultat.enumerate();
	    var nb = -1;
	    if (resultat.rowCount==1) enum.first();
	    else enum.beforeFirst();
	    while(ok){
		if (resultat.rowCount==1) ok=false;
		else ok=enum.next();
		nb++;
		/* Recuperation du resultat dans un tableau */
		var coltab=new Array();
		var val;
		for(c=0;c<nb_cols;c++){
		    val=enum.getVariant(c);
		    if (val==null || val==undefined) val="";
		    if (isNaN(val)) {
			// alert("Avant : "+val);
			// Nettoyage pour les caracteres speciaux
			reg = new RegExp("\\\\", "ig");
			val = val.replace(reg, "$\\backslash$");
			val = val.replace(new RegExp("&", "ig"), "\\&");
			val = val.replace(new RegExp("%", "ig"), "\\%");
			val = val.replace(new RegExp("_", "ig"), "\\_");
			val = val.replace(new RegExp("#", "ig"), "\\#");
			val = val.replace(new RegExp("{", "ig"), "\\{");
			val = val.replace(new RegExp("}", "ig"), "\\}");
			val = val.replace(new RegExp("~", "ig"), "\\char'176 ");
			val = val.replace(new RegExp("^", "ig"), " ");
			val = val.replace(new RegExp("\\$", "ig"), "\\$");
			// alert("Après : "+val);
		    }
		    coltab.push(val);
		}
		/* Parcours de la suite du bloc avec remplacement*/
		result+=latex_Traitement(bloc,key,nb,coltab);
	    }
	    
	}
	break;
    default:
	alert("ERREUR :\nTraitement d'un bloc d'un type inconnu : "+typebalise);
	
    }
    return result;
}

/* Traitement de base d'un bloc */
function latex_Traitement(bloc,key,nb,coltab){
    //    alert("Traitement de \n"+bloc);
    var result="";
    var i,max=bloc.length;
    for(i=1;i<max;i++){
	if (!latex_DebutBloc(bloc[i])){
	    if (!latex_FinBloc(bloc[i]))
		result+=latex_TraiterTexte(bloc[i],key,nb,coltab)+"\n";
	}
	else{
	    var lignes=new Array();
	    var compte=1;
	    lignes.push(bloc[i]);
	    while (compte!=0){
		i++;
		if (latex_DebutBloc(bloc[i])) compte++;
		if (latex_FinBloc(bloc[i])) compte--;
		lignes.push(bloc[i]);
	    }
	    result+=latex_TraiterBloc(lignes,key,nb,coltab);
	}
    }
    return result;
}


/* Créer le document à compiler */
function latex_ConstruireDocument(modele,keytab){
    //alert(modele);
    //alert(keytab);
    //alert("Construire document");
    var reg = new RegExp("[\\f\\n\\r\\t\\v]", "");
    var lignes = modele.split(reg);
    var i,j,max=lignes.length;
    var result="";
    //    alert(lignes);
    for(i=0;i<max;i++){
	if (!latex_DebutBloc(lignes[i]))
	    result+=lignes[i]+"\n";
	else{
	    //	    alert("Y'a un bloc");
	    RefLigne=i;
	    RefBalise=latex_TypeBalise(lignes[i]);
	    /* Recuperation du bloc */
	    var bloc=new Array();
	    var compte=1;
	    bloc.push(lignes[i]);
	    while (compte!=0 && i<lignes.length){
		i++;
		if (latex_DebutBloc(lignes[i])) compte++;
		if (latex_FinBloc(lignes[i])) compte--;
		bloc.push(lignes[i]);
	    }
	    if (compte==0) {
		/* Traitement du bloc */
		for(k=0;k<keytab.length;k++)
		    result+=latex_TraiterBloc(bloc,keytab[k],k);
	    }else alert("Le document est mal formé.\nPas de 'END' pour le '"+RefBalise+"'  de la ligne "+RefLigne);
	}
    }
    //    alert(result);
    return result;
}

function latex_Genere(nom,modele,keytab){
    // alert("Generation");

    /* Enregistrement du fichier temporaire */
    var directory="/tmp/";

    var query="SELECT CURRENT_USER||to_char(CURRENT_TIMESTAMP,'-YYYYMMDD-HH24MISS-SSSS');";
    var result=pgsql_query(query);
    var source=nom;
    if (result.rowCount>0){
	var enum=result.enumerate();
	enum.first();
	source+="-"+enum.getVariant(0);
    } else
	source+="_"+Math.floor(1000000*Math.random())+"."+Math.floor(1000*Math.random());//+".pdf";

    var cible=source+".pdf";
    source+=".tex";
    
    //alert("Nom du fichier source : "+source);
    //    alert("Création du fichier latex \n"+modele);
    var texfile=latex_ConstruireDocument(modele,keytab);
    //prompt("tex",texfile);
    // SaveFile("test-impression-"+source,texfile);

    // Mise aux normes du fichier texfile
    var reg = new RegExp("\\\\", "ig");
    texfile = texfile.replace(reg, "\\\\");
    reg = new RegExp("'", "ig");
    texfile = texfile.replace(reg, "''");
    

    
    // Compilation du document : Requete de base exemple 
    // sh3.00$ cd $DIRECTORY && pdfelatex -jobname=$NAME "$TEXFILE" && pdfelatex -jobname=$NAME "$TEXFILE" && chmod 777 $NAME.pdf
    if (navigator.platform=="Win32")
	alert("Non disponible pour ce système d'exploitation");
    else {
	// Enregistrement du fichier latex sur le disque dur
	query="SELECT writefile('"+directory+source+"','"+texfile+"');";
	pgsql_query(query);
	// Compilation du fichier latex
	query="SELECT execution('cd "+directory+" ; chmod 660 "+source+" ; chgrp maintenance "+source+" ; pdfelatex "+source+" ; pdfelatex "+source+" ; chmod 644 "+cible+"');";
	//	query="SELECT execution('cd "+directory+" ; chmod 700 "+source+" ; pdfelatex "+source+" ; pdfelatex "+source+" ; rm -f "+source+" ; chmod 644 "+cible+"');";
	//prompt("Requete",query);
	pgsql_query(query);
	var adressepdf = "file://"+directory+cible;
	window.open(adressepdf);
	return adressepdf;
    }
}


// Imprime un document
function latex_ImprimerUnDocument(modele_numero, numero) {
    var query="SELECT IM_Nom, IM_Modele FROM Impression WHERE IM_Numero="+modele_numero+";";
    var result=pgsql_query(query);
    if (result.rowCount>0) {
	var enum = result.enumerate();
	enum.first();
	var modele_nom      = enum.getVariant(0);
	var modele_modele   = enum.getVariant(1);
	return latex_Genere(modele_nom,modele_modele,new Array(numero));
    } else alert("Le modèle que vous avez choisi n'existe plus.");
    return "";
}


// Si date_fin est nulle on considère que date_debut est un tableau de numero
function latex_ImprimerPlusieursDocuments(modele_numero, date_debut, date_fin){
    var query="SELECT IM_Nom, IM_Modele, IM_KeyTable, IM_KeyCle, IM_KeyDate FROM Impression WHERE IM_Numero="+modele_numero+";";
    var result=pgsql_query(query);
    if (result.rowCount>0) {
	var enum = result.enumerate();
	enum.first();
	var modele_nom      = enum.getVariant(0);
	var modele_modele   = enum.getVariant(1);
	var modele_keytable = enum.getVariant(2);
	var modele_keycle   = enum.getVariant(3);
	var modele_keydate  = enum.getVariant(4);
	
	if (date_fin==null){
	    return latex_Genere(modele_nom,modele_modele,date_debut);
	}else{
	    // Recuperation de la liste des numeros
	    var keytab=new Array();
	    query="SELECT DISTINCT "+modele_keycle+" FROM "+modele_keytable+" WHERE '"+date_fin+"'>"+modele_keydate+" AND "+modele_keydate+">'"+date_debut+"';";
	    if (result.rowCount>0) {
		enum = result.enumerate();
		enum.beforeFirst();
		var encore=true;
		while(encore){
		    encore=enum.next();
		    keytab.push(enum.getVariant(0));
		}
		return latex_Genere(modele_nom,modele_modele,keytab);
	    } else alert("Pour la période spécifiée, il n'y a rien à imprimer.");
	}
    } else alert("Le modèle que vous avez choisi n'existe plus.");
    return "";
}


//alert("'latex.js' chargé");

function user_init(){
    pgsql_init(true);
    if (pgsql_getConnectionState()){
	/* Verification des droits de la personne connectée */
	var query="SELECT AU_Admin FROM AgrisigUser;";
	var result=pgsql_query(query); 
	if (result.rowCount>0){
	    var enum=result.enumerate();
            enum.first();
	    var superuser=enum.getBool(0);
	    if (!superuser){
		alert('Vous devez impérativement être un administrateur pour accéder aux fonctionnalités de cette fenêtre.');
		pgsql_setConnectionState(false);
		user_init();
	    }
	    else{
		/* Remplir la table */
		user_tree_update();
		/* Remplir les champs */
		user_annule();
	    }
	}else window.close('user.js');
    } else window.close('user.js');
}

function user_tree_update(){
    var query="SELECT us_login,us_nom,us_prenom,us_niveau,us_validite,us_statut,us_exclu FROM ExploitantUser;";
    fill_tree("user-tree",query);
}

function user_insert(){
    user_edite(true);
}

function user_update(){
    user_edite(false);
}

function user_delete(){
    tree       = top.document.getElementById("user-tree");
    prop_login = top.document.getElementById("user-prop-login");
    var query="SELECT AU_Login FROM AgrisigUser;";
    var result=pgsql_query(query); 
    if (result.rowCount>0){
	var enum=result.enumerate();
	enum.first();
	var login=enum.getVariant(0);
	if (login!=prop_login.value){
	    if (tree.currentIndex>=0){
		if (confirm("Etes-vous sur de vouloir supprimer le compte "+prop_login.value+"?")){
		    var query;
		    query="DELETE FROM table_exploitant WHERE ex_login='"+prop_login.value+"';";
		    pgsql_update(query);
		    if (confirm("Faut-il complètement supprimer l'utilisateur de la base de données?")){
			query="DROP USER "+prop_login.value+";";
			pgsql_update(query);
		    }
		}
	    } else alert("Vous devez sélectionner une ligne de la table pour supprimer un exploitant.");
	} else alert("Vous ne pouvez pas vous supprimer vous-même.");
    } else{
	alert("Impossible de récupérer vos informations personnelles.\nEst-ce que votre compte n'aurez pas été supprimé?");
	window.close();
    }
    user_tree_update();
}



function user_active(){
    tree       = top.document.getElementById("user-tree");
    prop_login = top.document.getElementById("user-prop-login");    
    var query="SELECT AU_Login FROM AgrisigUser;";
    var result=pgsql_query(query); 
    if (result.rowCount>0){
	var enum=result.enumerate();
	enum.first();
	var login=enum.getVariant(0);
	if (login!=prop_login.value){
	    if (tree.currentIndex>=0){
		var query;
		var exclu = top.document.getElementById("user-button-active").getAttribute("status");
		query="UPDATE table_exploitant SET EX_Exclu='"+exclu+"' WHERE ex_login='"+prop_login.value+"';";
		pgsql_update(query);
	    } else alert("Vous devez sélectionner une ligne de la table pour désactiver un exploitant.");
	} else alert("Vous ne pouvez pas vous désactiver vous-même.");
    } else {
	alert("Impossible de récupérer vos informations personnelles.\nEst-ce que votre compte n'aurez pas été supprimé?");
	window.close();
    }
    user_tree_update();
}





function user_finish(){
    if (user_sauve()){
	user_annule();
	user_tree_update();
	user_annule();
    }
}

function user_cancel(){
    user_annule();
}



function texteClair(chaine){
    if (chaine==null)
	return "";
    else
	return chaine;
}


function user_charge(){
    var rien=false;
    tree = top.document.getElementById("user-tree");
    prop_login       = top.document.getElementById("user-prop-login");
    prop_nom         = top.document.getElementById("user-prop-nom");
    prop_prenom      = top.document.getElementById("user-prop-prenom");
    prop_pac         = top.document.getElementById("user-prop-pac");
    prop_mdp         = top.document.getElementById("user-prop-mdp");
    prop_mdpv        = top.document.getElementById("user-prop-mdpv");
    prop_admin       = top.document.getElementById("user-prop-admin");
    prop_valide      = top.document.getElementById("user-prop-valide");
    prop_valide_date = top.document.getElementById("user-prop-valide-date");
    button_update = top.document.getElementById("user-button-update");
    button_delete = top.document.getElementById("user-button-delete");
    button_active = top.document.getElementById("user-button-active");
   if (tree.view.rowCount>0 && tree.currentIndex>=0){
	/* On remplit les champs */
	var login=tree.view.getCellValue(tree.currentIndex,tree.columns.getColumnAt(0));
	var query="SELECT us_login,us_nom,us_prenom,us_admin,us_validite,us_numeropac,us_exclu FROM ExploitantUser WHERE us_login='"+login+"';";
	var result=pgsql_query(query); 
	if (result.rowCount>0){
	    var enum=result.enumerate();
            enum.first();
	    prop_login.value = texteClair(enum.getVariant(0));
	    prop_nom.value = texteClair(enum.getVariant(1));
	    prop_prenom.value = texteClair(enum.getVariant(2));
	    prop_admin.checked = enum.getBool(3);
	    var date = texteClair(enum.getVariant(4));
	    prop_valide.checked=!(date=="");
	    prop_valide_date.value=date;
	    prop_pac.value = texteClair(enum.getVariant(5));
	    var exclu = enum.getBool(6);
	    if (exclu)
		button_active.label="Activer";
	    else
		button_active.label="Désactiver";
	    button_active.setAttribute("status",!exclu);
	}
	else rien=true;
   }
   else rien=true;
   if (rien){
       button_update.setAttribute("disabled","true");
       button_delete.setAttribute("disabled","true");
       button_active.setAttribute("disabled","true");
   }else{
       button_update.setAttribute("disabled","false");
       button_delete.setAttribute("disabled","false");  
       button_active.setAttribute("disabled","false");
   }
}

function user_sauve(){
    prop_login       = top.document.getElementById("user-prop-login");
    prop_nom         = top.document.getElementById("user-prop-nom");
    prop_prenom      = top.document.getElementById("user-prop-prenom");
    prop_pac         = top.document.getElementById("user-prop-pac");
    prop_usemdp      = top.document.getElementById("user-prop-usemdp");
    prop_mdp         = top.document.getElementById("user-prop-mdp");
    prop_mdpv        = top.document.getElementById("user-prop-mdpv");
    prop_admin       = top.document.getElementById("user-prop-admin");
    prop_valide      = top.document.getElementById("user-prop-valide");
    prop_valide_date = top.document.getElementById("user-prop-valide-date");
    var query;

    /* Tests de validité */
    var erreur="";
    var warning="";
    /* Du bas vers le haut */
    if (prop_pac.value=="")
	warning="numéro PAC";
    if (prop_prenom.value=="")
	erreur="prénom";
    if (prop_nom.value=="")
	erreur="nom";
    if (prop_login.value=="")
	erreur="login";
    if (erreur!=""){
	alert("Vous devez compléter le champs "+erreur+".");
	return false;
    }
    if (warning!=""){
	if (!confirm("Il est fortement conseillé de compléter le champs "+warning+".\nVoulez-vous continuer ?"))
	    return false;
    }
    /* Mot de passe */
    if (prop_mdp.value!=prop_mdpv.value && prop_usemdp.checked){
	alert("Votre mot de passe est incorrect.");
	prop_mdp.value="";
	prop_mdpv.value="";
	return false;
    }
    prop_login.value=prop_login.value.toLowerCase();
    
    /* On regarde dans quel mode on est */
    if (!prop_login.disabled){
	/* Mode création */
	/* Verification de la précédente existence d'un login */
	var query="SELECT usename FROM pg_user WHERE usename='"+prop_login.value+"';";
	var result=pgsql_query(query); 
	if (result.rowCount>0){
	    alert("Un utilisateur de la base de données possède déjà le même login. Vous devez en changer.");
	    return false;
	}
	query="SELECT us_login FROM ExploitantUser WHERE us_login='"+prop_login.value+"';";
	result=pgsql_query(query); 
	if (result.rowCount>0){
	    alert("Un exploitant possède déjà le même login. Vous devez en changer.");
	    return false;	    
	}
	query = "CREATE USER "+prop_login.value;
        query +=" NOCREATEDB";
	if (prop_admin.checked) query+=" CREATEUSER";
	else query+=" NOCREATEUSER";
	query +=" IN GROUP agrisig";
	query +=" ENCRYPTED PASSWORD '"+prop_mdp.value+"'";
	if (prop_valide.checked) query+=" VALID UNTIL '"+prop_valide_date.value+" 23:59:59'";
	else query +=" VALID UNTIL 'infinity'";
	query +=";";
	pgsql_update(query);
	query ="INSERT INTO exploitant VALUES (nextval('seq_exploitant')";
	query+=", lower('"+prop_login.value+"')";
	query+=", '"+prop_nom.value+"'";
	query+=", '"+prop_prenom.value+"'";
	query+=", '"+prop_pac.value+"'";
	query+=");"
	pgsql_update(query);
	return true;
    }
    else{
	/* Mode modification */
	query = "ALTER USER "+prop_login.value;
	if (prop_admin.checked) query+=" CREATEUSER";
	else query+=" NOCREATEUSER";
	if (prop_usemdp.checked) query +=" ENCRYPTED PASSWORD '"+prop_mdp.value+"'";
	if (prop_valide.checked) query+=" VALID UNTIL '"+prop_valide_date.value+" 23:59:59'";
	else query +=" VALID UNTIL 'infinity'";
	query +=";";
	pgsql_update(query);
	query ="UPDATE exploitant SET ";
	query+="ex_nom='"+prop_nom.value+"'";
	query+=", ex_prenom='"+prop_prenom.value+"'";
	query+=", ex_numpac='"+prop_pac.value+"'";
	query+=" WHERE ex_login='"+prop_login.value+"';"
	pgsql_update(query);
	return true;
    }
}

function user_annule(){
    /* On recupere les elements */
    table     = top.document.getElementById("user-table");
    user      = top.document.getElementById("user-user");
    button_insert = top.document.getElementById("user-button-insert");
    button_update = top.document.getElementById("user-button-update");
    button_active = top.document.getElementById("user-button-active");
    button_delete = top.document.getElementById("user-button-delete");
    button_finish = top.document.getElementById("user-button-finish");
    button_cancel = top.document.getElementById("user-button-cancel");

    /* On desactive les champs */
    user.setAttribute("hidden","true");
    table.setAttribute("hidden","false");

    /* On affiche ceux qui faut */
    button_insert.setAttribute("hidden","false");
    button_update.setAttribute("hidden","false");
    button_active.setAttribute("hidden","false");
    button_delete.setAttribute("hidden","false");
    button_finish.setAttribute("hidden","true");
    button_cancel.setAttribute("hidden","true");    

    user_charge();
}

function user_edite(nouveau){
    var clear=false;
    if (nouveau!=null) clear=nouveau;
    /* On recupere les elements */
    table     = top.document.getElementById("user-table");
    user      = top.document.getElementById("user-user");
    prop_login       = top.document.getElementById("user-prop-login");
    prop_nom         = top.document.getElementById("user-prop-nom");
    prop_prenom      = top.document.getElementById("user-prop-prenom");
    prop_pac         = top.document.getElementById("user-prop-pac");
    prop_usemdp      = top.document.getElementById("user-prop-usemdp");
    prop_mdp         = top.document.getElementById("user-prop-mdp");
    prop_mdpv        = top.document.getElementById("user-prop-mdpv");
    prop_admin       = top.document.getElementById("user-prop-admin");
    prop_valide      = top.document.getElementById("user-prop-valide");
    prop_valide_date = top.document.getElementById("user-prop-valide-date");
    button_insert = top.document.getElementById("user-button-insert");
    button_update = top.document.getElementById("user-button-update");
    button_active = top.document.getElementById("user-button-active");
    button_delete = top.document.getElementById("user-button-delete");
    button_finish = top.document.getElementById("user-button-finish");
    button_cancel = top.document.getElementById("user-button-cancel");

    prop_mdp.value         = "";
    prop_mdpv.value        = "";
    if (clear){
	prop_login.value       = "";
	prop_nom.value         = "";
	prop_prenom.value      = "";
	prop_pac.value         = "";
	prop_admin.checked     = false;
	prop_valide.checked    = false;
	prop_valide_date.value = "";
	prop_login.disabled    = false;
	prop_usemdp.disabled   = true;
	prop_usemdp.checked    = true;
    }
    else{
	prop_login.disabled    = true;
	prop_usemdp.disabled   = false;
	prop_usemdp.checked    = false;
    }

    table.setAttribute("hidden","true");
    user.setAttribute("hidden","false");

    button_insert.setAttribute("hidden","true");
    button_update.setAttribute("hidden","true");
    button_delete.setAttribute("hidden","true");
    button_active.setAttribute("hidden","true");
    button_finish.setAttribute("hidden","false");
    button_cancel.setAttribute("hidden","false");
}

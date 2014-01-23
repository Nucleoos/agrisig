
function GenererGestSEA(){
    //alert(opener.code);
    //alert(opener.codejs);
    //    SaveFileDirectly("codeinprincipal.js",opener.code);
    
    CodeInPrincipal(opener.code);
    SaveFileDirectly("gestsea_principal_mcd.js",opener.codejs);
    top.document.getElementById("res").value+="Génération du module MCD JavaScript...\n";
    top.document.getElementById("res").value+="Génération de l'interface terminée avec succès.\n"; 	
}

//alert("'genesea.js' chargé");

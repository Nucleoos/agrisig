
function GenererGestSEA(){
    //alert(opener.code);
    //alert(opener.codejs);
    //    SaveFileDirectly("codeinprincipal.js",opener.code);
    
    CodeInPrincipal(opener.code);
    SaveFileDirectly("gestsea_principal_mcd.js",opener.codejs);
    top.document.getElementById("res").value+="G�n�ration du module MCD JavaScript...\n";
    top.document.getElementById("res").value+="G�n�ration de l'interface termin�e avec succ�s.\n"; 	
}

//alert("'genesea.js' charg�");

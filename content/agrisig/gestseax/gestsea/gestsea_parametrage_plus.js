function DroitsUpdate()
{
    var query="UPDATE droit SET update_user='postgres' WHERE dr_numero=0;";
    pgsql_update(query);
    alert("Les droits ont été mis à jour pour tout le monde.");
}

function DroitsUpdate()
{
    var query="SELECT fc_creerimpressions('/tmp');";
    pgsql_update(query);
    alert("Les fonctions d'impressions ont été mises à jour pour tout le monde.");
}



function MiseAJourAdhesion(){
    pgsql_query("SELECT FC_MAJ_Adhesion();");
    alert("Les adhésions ont été mises à jour.");
}


function UniteOk_Article(CompoCond,CompoProduit)
{
	var CleCond,CleProduit;
	CleCond=CompoCond.getCleVal();
	CleProduit=CompoProduit.getCleVal();

	var req='select pd_unite from produit, conditionnement where pd_unite=ca_unite and pd_numero='+CleProduit+' and ca_numero='+CleCond;
	var res=pgsql_query(req);
	return (res.rowCount!=0);
}
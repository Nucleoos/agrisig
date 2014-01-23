var fa_numfact;

function val(id)
{
    return top.document.getElementById(id).value;
}

function reglement_onload()
{
    // Selection de la dernière données banquaire utilisée
    var ladate=new Date();
    top.document.getElementById('datereglement')=ladate.getDate()+"/"+(ladate.getMonth()+1)+"/"+ladate.getFullYear();
    // Récupération du numéro de facture
    top.document.getElementById('numfact').value=opener.FactureEnCours;
    fa_numfact=opener.FactureEnCours;
}


function enregistre()
{
    if (confirm("Voulez-vous vraiment enregistrer le règlement ?"))
	{
	    var libban = val('libellebanque');
	    var numcpt = val('numerocompte');
	    var modrgt = val('modereglement');
	    var banque = val('banque');
	    var refchq = val('reference');
	    var date   = val('datereglement');
	    if (isDateValid(date))
		{
		    var query="SELECT ReglementFacture("+fa_numfact+",'"+libban+"','"+numcpt+"',"+modrgt+","+banque+",'"+refchq+"','"+date+"');";
		    opener.pgsql_query(query);
		    window.close();
		}
	    else alert("La date inscrite n'est pas valide. Veuillez la corriger.");
	}
}


function annule()
{
    if(confirm("Voulez-vous vraiment ne pas saisir de règlement ?"))
	window.close();
}

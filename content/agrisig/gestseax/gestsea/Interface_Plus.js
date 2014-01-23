function RemplirAvecDate(Composant)
{
    var ladate=new Date()
	var jj,mm,aa;
    var jjstr,mmstr,aastr;
    jjstr='';
    mmstr='';
    aastr='';
    jj=ladate.getDate();
    mm=ladate.getMonth()+1;
    aa=ladate.getFullYear();

    if (jj<10)
	jjstr='0'+jj;
    else
	jjstr=''+jj;

    if (mm<10)
	mmstr='0'+mm;
    else
	mmstr=''+mm;

    aastr=aa;

    Composant.my_CompoXUL.value=jjstr+'/'+mmstr+'/'+aastr;
}

function RemplirAvecAnnee(Composant)
{
    var ladate=new Date()
	Composant.my_CompoXUL.value=ladate.getFullYear();
}

function RemplirDateEch(TabParam)
{
    var Composant=TabParam[0];
    var CompoAnnee=TabParam[1];
    var Annee=''+CompoAnnee.getValue();
    if (Annee.length>=4)
	Composant.my_CompoXUL.value='31/12/'+Annee;
}

function GenererUneFacture(TabParam)
{
    if (TabParam[0].getValue()!=null && TabParam[0].getValue()!="")
	{
	    alert("La facture existe déjà");
	    return;
	}
    TabParam[0].my_CompoXUL.value=getNewCle("facture");
    /* date de la facture */
    if(TabParam.length>1)
	{
	    RemplirAvecDate(TabParam[1]);
	    TabParam[1].ActiverComposant(true);
	}
}

function CalculerReduction(CompoReduct,CompoPerso)
{
    var Cle=CompoPerso.getCleVal();
    var Req='select ts_numero from personne join cotisation on (personne.pe_numero=cotisation.pe_numero) ';
    Req+='where cotisation.co_annee=(extract(year from current_date)) and personne.pe_numero='+Cle;
    var res=pgsql_query(Req);
    if (res.rowCount==0)
	{
	    CompoReduct.my_CompoXUL.value='0';
	}
    else
	{
	    var enumerator=res.enumerate();
	    enumerator.beforeFirst();
	    enumerator.next();
	    if (enumerator.getVariant(0)==null)
		{
		    CompoReduct.my_CompoXUL.value='15';
		}
	    else
		{
		    CompoReduct.my_CompoXUL.value='25';
		}
	}
}

function ColorierObservation(Compo)
{
    var tree=Compo.my_CompoXUL;
    //ColObId=tree.treeBoxObject.columns.getColumnIndex('observation.ob_observation');
    //tree.treeBoxObject.columns.getNamedColumn('observation.ob_observation')
    var ColObId=tree.treeBoxObject.columns.getNamedColumn('observation.ob_observation');
    //properties="makeItRed"
    if (tree.view!=null)
	{
	    for(i=0;i<tree.view.rowCount;i++)
		{
		    alert(tree.view.getCellValue(i, ColObId));
		}
	}
}

/* POUR l'ONGLET TRAVAUX */

function MettreAgentParDefaut(Compo)
{
    var Req='select ag_numero from agent where ag_login = current_user';
    var res=pgsql_query(Req);
    if (res.rowCount!=0)
	{
	    var enumerator=res.enumerate();
	    enumerator.beforeFirst();
	    enumerator.next();
	    Compo.ForceNextSelection(enumerator.getVariant(0));
	    Compo.SelectItem(enumerator.getVariant(0));
	}
}

function OnChangeLibel(Compo,Params)
{
    var Cle=Compo.getCleVal();
    var Req='select tariftravaux.tt_type, tariftravaux.tt_prix from tariftravaux join libeltravaux on (tariftravaux.lt_numero=libeltravaux.lt_numero) where tariftravaux.tt_actif=true and libeltravaux.lt_numero='+Cle;
    var res=pgsql_query(Req);
    if (res.rowCount!=0)
	{
	    Params.ActiverComposant(true);
	    var enumerator=res.enumerate();
	    enumerator.beforeFirst();
	    enumerator.next();
	    var Type=enumerator.getVariant(0);
	    if (Type=='MANUEL')
		{
		    Params.my_CompoXUL.value='<Entrez le Montant ICI>';
		    //Params.ActiverComposant(true);
		    Params.Focus();
		}
	    else
		{
		    /* on recopie le prix */
		    if (enumerator.getVariant(1)==null || enumerator.getVariant(1)=="")
			Params.my_CompoXUL.value=0;
		    else
			Params.my_CompoXUL.value=enumerator.getVariant(1);

		    //Params.ActiverComposant(false);
		}
	}
    else
	{
	    Params.my_CompoXUL.value=0;
	    Params.ActiverComposant(false);
	}
}

function CopierLienVersTarifDansTravaux(Compo,TabOut)
{
    var Cle=Compo.getCleVal();
    var Req='select tariftravaux.tt_numero from tariftravaux join libeltravaux on (tariftravaux.lt_numero=libeltravaux.lt_numero) where tariftravaux.tt_actif=true and libeltravaux.lt_numero='+Cle;
    var res=pgsql_query(Req);
    TabOut.push('tt_numero');
    if (res.rowCount!=0)
	{
	    var enumerator=res.enumerate();
	    enumerator.beforeFirst();
	    enumerator.next();
	    TabOut.push(enumerator.getVariant(0));
	}
    else
	{
	    TabOut.push('NULL');
	}
}

function GenererUneFactureAcc(TabParam)
{
    if (TabParam[0].my_CompoXUL.checked)
	{
	    TabParam[1].my_CompoXUL.value=getNewCle("factureaccompte");
	    TabParam[1].ActiverComposant(true);
	    TabParam[2].ActiverComposant(true);
	}
    else
	{
	    TabParam[1].my_CompoXUL.value=null;
	    TabParam[2].my_CompoXUL.value=null;
	    TabParam[1].ActiverComposant(false);
	    TabParam[2].ActiverComposant(false);
	}
}

function GenererUneFactureAvoir(TabParam)
{
    if (TabParam[0].my_CompoXUL.checked)
	{
	    TabParam[1].my_CompoXUL.value=getNewCle("facture");
	}
    else
	{
	    TabParam[1].my_CompoXUL.value=null;
	}
}

/* ligne de vente*/

function GenererTarifArticle(CompoArticle,CompoTarif)
{
    var Cle=CompoArticle.getCleVal();
    var Req='select ta_numero from tarifarticle where ar_numero='+Cle+' and ta_actif';
    var res=pgsql_query(Req);
    if (res.rowCount!=0)
	{
	    var enumerator=res.enumerate();
	    enumerator.beforeFirst();
	    enumerator.next();
	    //CompoTarif.ForceNextSelection(enumerator.getVariant(0));
	    CompoTarif.SelectItem(enumerator.getVariant(0));
	}
    else
	{
	    CompoTarif.ForceNextSelection(enumerator.getVariant(0));
	    alert('<Pas de tarif sur cet article>');
	    CompoTarif.SelectItem('-1');//'<Pas de tarif sur cet article>';
	}
}

/* cotisation et abonnement */
function ClientPayeurParDefaut(CompoCltPy,CompoPerso)
{
    var Cle=CompoPerso.getCleVal();
    var Req='select pe_titre,pe_nom,pe_prenom from personne where pe_numero='+Cle;
    var res=pgsql_query(Req);
    if (res.rowCount==0)
	{
	    alert("Erreur interne");
	}
    else
	{
	    var enumerator=res.enumerate();
	    enumerator.beforeFirst();
	    enumerator.next();
	    CompoCltPy.my_CompoXUL.value=enumerator.getVariant(0)+' '+enumerator.getVariant(1)+(enumerator.getVariant(2)!=null?' '+enumerator.getVariant(2):'');
	}
}

/* abonnement */
function GenererMontantPayéAbon(CompoTarAbon,CompoMntPyé)
{
    var Cle=CompoTarAbon.getCleVal();
    var Req='select tab_tarif from tarif_abonnement where tab_numero = '+Cle;

    var res=pgsql_query(Req);
    if (res.rowCount!=0)
	{
	    var enumerator=res.enumerate();
	    enumerator.beforeFirst();
	    enumerator.next();
	    CompoMntPyé.my_CompoXUL.value=enumerator.getVariant(0);
	}
    else
	{
	    CompoMntPyé.my_CompoXUL.value=0;
	}
}

/* personne */
function Recherche_Num(CompoPerso)
{
    var Cle=prompt("Entrez un numéro de personne","");
    if (Cle==null)
	return;
    Cle=Cle*1+1000000;
    var Req='select pe_numero from personne where pe_numero = '+Cle;
    var res=pgsql_query(Req);
    if (res.rowCount!=0)
	{
	    var enumerator=res.enumerate();
	    enumerator.beforeFirst();
	    enumerator.next();
	    //CompoPerso.ConserverLaSelection=false;
	    CompoPerso.ForceNextSelection(enumerator.getVariant(0));
	    CompoPerso.SelectItem(enumerator.getVariant(0));
	    //CompoPerso.ConserverLaSelection=true;
	}
    else
	{
	    alert("Personne non trouvée");
	}
}

function Open_Rechercher(Req,CompoPerso)
{
    var res=pgsql_query(Req);
    if (res.rowCount!=0)
	{
	    window.openDialog("RecherchePop.xul", "showmore", "centerscreen, modal, chrome,scrollbars,resizable",CompoPerso,res);
	}
    else
	{
	    alert("Personne non trouvée");
	}
}

function Recherche_Nom(CompoPerso)
{
    var NomPerso=prompt("Entrez le nom de la personne","");
    if (NomPerso==null)
	return;
    var Req="select pe_numero,pe_titre,pe_nom,pe_complement from personne where pe_nom ilike('%"+NomPerso+"%') order by pe_nom";
    Open_Rechercher(Req,CompoPerso);
}

function Recherche_CP(CompoPerso)
{
    var CpPerso=prompt("Entrez un code postal","");
    if (CpPerso==null)
	return;
    var Req="select personne.pe_numero,pe_titre,pe_nom,pe_complement from personne join adresse on (adresse.pe_numero=personne.pe_numero) join codepostal on (adresse.cp_numero=codepostal.cp_numero) where cp_codepostal="+CpPerso+"  order by pe_nom";
    Open_Rechercher(Req,CompoPerso);
}

function Recherche_Ville(CompoPerso)
{
    var NomVille=prompt("Entrez le nom de la ville","");
    if (NomVille==null)
	return;
    var Req="select personne.pe_numero,pe_titre,pe_nom,pe_complement from personne join adresse on (adresse.pe_numero=personne.pe_numero) join ville on (adresse.vi_numero=ville.vi_numero) where vi_nom ilike('%"+NomVille+"%')  order by pe_nom";
    Open_Rechercher(Req,CompoPerso);
}

function Recherche_Contact(CompoPerso)
{
    var NumCont=prompt("Entrez un numéro de téléphone/fax/portable","");
    if (NumCont==null)
	return;
    var Req="select personne.pe_numero,pe_titre,pe_nom,pe_complement from personne join est_joignable on (personne.pe_numero=est_joignable.pe_numero) join contact on (est_joignable.cont_numero=contact.cont_numero) where contact.cont_coordonnees ilike('"+NumCont+"%')  order by pe_nom";
    Open_Rechercher(Req,CompoPerso);
}

/* personne : relation recursive */
function RefreshOngletEstLie(CompoPerso)
{
    if (!ALeDroit(DT_SELECT,'est_lie'))
	{
	    return;
	}
    var Cle=CompoPerso.getCleVal();
    
    var query="(select personne.pe_numero,pe_titre,personne.pe_nom,pe_complement from est_lie join personne on (est_lie.per_pe_numero=personne.pe_numero) where est_lie.pe_numero="+Cle+")";
    query+=" UNION ";
    query+="(select personne.pe_numero,pe_titre,personne.pe_nom,pe_complement from est_lie join personne on (est_lie.pe_numero=personne.pe_numero) where est_lie.per_pe_numero="+Cle+")";
    
    var result=pgsql_query(query);
    
    var tree=top.document.getElementById("arbre_lierA");
    
    var sources=tree.database.GetDataSources();
    var oldds;
    
    while (sources.hasMoreElements()) {
	oldds = sources.getNext();
	tree.database.RemoveDataSource(oldds);
    }
    
    var ds=result.QueryInterface(Components.interfaces.nsIRDFDataSource);
    tree.database.AddDataSource(ds);
    
    tree.builder.rebuild();
}

function Insert_LierA()
{
    if (!ALeDroit(DT_INSERT,'est_lie'))
	{
	    alert("Vous n'avez pas le droit d'ajouter une liaison");
	    return;
	}
    var tree=top.document.getElementById("arbre_lierA");
    var Id=tree.getAttribute("IdTab");
    CompoPerso=GetSQLCompoAt(Id);
    var Cle1=CompoPerso.getCleVal();
    if (Cle1==-1)
	{
	    alert("Vous devez être sur la personne à lier \n(si vous êtes en train d'inserer la personne passez en mode mise à jour pour ajouter une liaison)");
	    return;
	}
    var CleFede=prompt("Entrez le n° de la personne à lier");
    CleFede=CleFede*1+1000000;
    var query,res;
    if (CleFede!=null)
	{
	    query='select pe_numero from personne where pe_numero='+CleFede;
	    res=pgsql_query(query);
	    if (res.rowCount!=0)
		{
		    var enumerator=res.enumerate();
		    enumerator.first();
		    var Cle2=enumerator.getVariant(0);
		    
		    /* on vérifie que le lien n'existe pas déjà */
		    query='(select * from est_lie where pe_numero='+Cle1+' and per_pe_numero='+Cle2+')';
		    query+=' UNION ';
		    query+='(select * from est_lie where pe_numero='+Cle2+' and per_pe_numero='+Cle1+')';
		    res=pgsql_query(query);
		    if (res.rowCount==0)
			{
			    query='insert into est_lie (pe_numero,per_pe_numero) values('+Cle1+','+Cle2+')';
			    pgsql_update(query);
			    RefreshOngletEstLie(CompoPerso);
			}
		    else
			{
			    alert('Ce lien existe déjà');
			}
		    
		}
	    else
		{
		    alert('Ce numéro n\'existe pas');
		}
	}
}

function Delete_LierA()
{
    if (!ALeDroit(DT_DELETE,'est_lie'))
	{
	    alert("Vous n'avez pas le droit de supprimer une liaison");
	    return;
	}
    var tree=top.document.getElementById("arbre_lierA");
    var Id=tree.getAttribute("IdTab");
    CompoPerso=GetSQLCompoAt(Id);
    var Cle1=CompoPerso.getCleVal();
    var Cle2;
    if (tree.view!=null && tree.currentIndex!=-1)
	{
	    if (confirm("Voulez-vous vraiment supprimer cette liaison ?"))
		{
		    Cle2=tree.view.getCellValue(tree.currentIndex, tree.treeBoxObject.columns.getColumnAt(0));
		    query='delete from est_lie where pe_numero='+Cle1+' and per_pe_numero='+Cle2;
		    pgsql_update(query);
		    query='delete from est_lie where pe_numero='+Cle2+' and per_pe_numero='+Cle1;
		    pgsql_update(query);
		    RefreshOngletEstLie(CompoPerso);
		}
	}
    else
	{
	    alert("Selectionnez la personne à délier");
	}
}

function ConstruireOngletEstLie(Nom_tabbox,IdTab)
{
    alert("Ca construit");
    var tabbox=top.document.getElementById(Nom_tabbox);
    var mydoc=top.document;
    var tab,tabpanel,tree,treecols,treecol,splitter,template,treechildren,treeitem,treerow,treecell,button,hbox;
    
    tab=mydoc.createElement("tab");
    tab.setAttribute("label","Lié à");
    /* Onsait qu'il ya une hbox d'overflow car on a créer plus de 8 onglets dans la tabbox */
    tabbox.firstChild.firstChild.appendChild(tab);
    
    tabpanel=mydoc.createElement("tabpanel");
    tabpanel.setAttribute("flex","1");
    tabpanel.setAttribute("orient","vertical");
    tabbox.childNodes[1].appendChild(tabpanel);
    
    tree = mydoc.createElement("tree");
    tree.setAttribute("flex","1");
    tree.setAttribute("IdTab",IdTab);
    tree.setAttribute("id","arbre_lierA");
    tree.setAttribute("style","min-height:100px;min-width:300px");
    tree.setAttribute("enableColumnDrag","true");
    tree.setAttribute("datasources","rdf:null");
    tree.setAttribute("ref","SQL:ResultRoot");
    tree.setAttribute("flags","dont-build-content");
    tabpanel.appendChild(tree);
    
    /* on génère les colonnes */
    treecols = mydoc.createElement("treecols");
    tree.appendChild(treecols);
    
    /* les colonnes */
    treecol = mydoc.createElement("treecol");
    treecol.setAttribute("flex","1");
    treecol.setAttribute("label","N°Adhérent");
    treecol.setAttribute("sortDirection","ascending");
    treecol.setAttribute("sortActive","true");
    treecols.appendChild(treecol);
    
    splitter = mydoc.createElement("splitter");
    splitter.setAttribute("class","tree-splitter");
    treecols.appendChild(splitter);
    
    treecol = mydoc.createElement("treecol");
    treecol.setAttribute("flex","1");
    treecol.setAttribute("label","Titre");
    treecols.appendChild(treecol);
    
    splitter = mydoc.createElement("splitter");
    splitter.setAttribute("class","tree-splitter");
    treecols.appendChild(splitter);
    
    treecol = mydoc.createElement("treecol");
    treecol.setAttribute("flex","1");
    treecol.setAttribute("label","Nom");
    treecols.appendChild(treecol);

    splitter = mydoc.createElement("splitter");
    splitter.setAttribute("class","tree-splitter");
    treecols.appendChild(splitter);

    treecol = mydoc.createElement("treecol");
    treecol.setAttribute("flex","1");
    treecol.setAttribute("label","Complement");
    treecols.appendChild(treecol);

    template = mydoc.createElement("template");
    tree.appendChild(template);

    treechildren = mydoc.createElement("treechildren");
    template.appendChild(treechildren);

    treeitem = mydoc.createElement("treeitem");
    treeitem.setAttribute("uri","rdf:*");
    treechildren.appendChild(treeitem);

    /* on génère les lignes */

    treerow = mydoc.createElement("treerow");
    treeitem.appendChild(treerow);

    treecell = mydoc.createElement("treecell");
    treecell.setAttribute("label","rdf:http://www.mozilla.org/SQL-rdf#pe_numero");
    treecell.setAttribute("value","rdf:http://www.mozilla.org/SQL-rdf#pe_numero");
    treerow.appendChild(treecell);

    treecell = mydoc.createElement("treecell");
    treecell.setAttribute("label","rdf:http://www.mozilla.org/SQL-rdf#pe_titre");
    treecell.setAttribute("value","rdf:http://www.mozilla.org/SQL-rdf#pe_numero");
    treerow.appendChild(treecell);

    treecell = mydoc.createElement("treecell");
    treecell.setAttribute("label","rdf:http://www.mozilla.org/SQL-rdf#pe_nom");
    treecell.setAttribute("value","rdf:http://www.mozilla.org/SQL-rdf#pe_numero");
    treerow.appendChild(treecell);

    treecell = mydoc.createElement("treecell");
    treecell.setAttribute("label","rdf:http://www.mozilla.org/SQL-rdf#pe_complement");
    treecell.setAttribute("value","rdf:http://www.mozilla.org/SQL-rdf#pe_numero");
    treerow.appendChild(treecell);

    hbox = mydoc.createElement("hbox");
    hbox.setAttribute("flex","1");
    hbox.setAttribute("pack","end");
    hbox.setAttribute("align","end");
    tabpanel.appendChild(hbox);

    button = mydoc.createElement("button");
    button.setAttribute("class","icon_Ajouter");
    button.setAttribute("label","Ajouter");
    button.setAttribute("oncommand","Insert_LierA()");
    hbox.appendChild(button);

    button = mydoc.createElement("button");
    button.setAttribute("class","icon_Supprimer");
    button.setAttribute("label","Supprimer");
    button.setAttribute("oncommand","Delete_LierA()");
    hbox.appendChild(button);
}


/* COTISATION */
function ActiverDonneeProd(TabParam)
{
    var CompoHect=TabParam[0];
    var ParentXul=TabParam[1];
    if (CompoHect.getValue())
	{
	    top.document.getElementById('Validate_'+ParentXul).disabled=true;
	    top.document.getElementById('Annuler_'+ParentXul).disabled=true;
	    top.document.getElementById('Insert_'+ParentXul).disabled=false;
	    top.document.getElementById('Delete_'+ParentXul).disabled=false;
	    top.document.getElementById('Update_'+ParentXul).disabled=false;
	}
    else
	{
	    top.document.getElementById('Validate_'+ParentXul).disabled=true;
	    top.document.getElementById('Annuler_'+ParentXul).disabled=true;
	    top.document.getElementById('Insert_'+ParentXul).disabled=true;
	    top.document.getElementById('Delete_'+ParentXul).disabled=true;
	    top.document.getElementById('Update_'+ParentXul).disabled=true;
	}

}

/* ADRESSE ABONNEMENT */
function AdresseAbonnementDefaut(CompoPerso,CompoLigne1,CompoLigne2,CompoLigne3,CompoCp,CompoVille,CompoDestinataire,CompoType)
{
    var Cle=CompoPerso.getCleVal();
    var Req='select pe_titre,pe_nom,pe_prenom,ad_addr1,ad_addr2,ad_addr3,cp_numero,vi_numero from personne left outer join adresse on (personne.pe_numero=adresse.pe_numero) where el_type=\'DEFAUT\' AND personne.pe_numero='+Cle;
    var res=pgsql_query(Req);
    if (res.rowCount==0)
	{
	    alert("Erreur interne");
	}
    else
	{
	    var enumerator=res.enumerate();
	    enumerator.beforeFirst();
	    enumerator.next();

	    if (enumerator.getVariant(3)!=null)
		CompoLigne1.my_CompoXUL.value=enumerator.getVariant(3);
	    if (enumerator.getVariant(4)!=null)
		CompoLigne2.my_CompoXUL.value=enumerator.getVariant(4);
	    if (enumerator.getVariant(5)!=null)
		CompoLigne3.my_CompoXUL.value=enumerator.getVariant(5);
	    if (enumerator.getVariant(6)!=null)
		{
		    //CompoCp.ForceNextSelection(enumerator.getVariant(5));
		    CompoCp.SelectItem(enumerator.getVariant(6));
		}
	    if (enumerator.getVariant(7)!=null)
		{
		    //CompoVille.ForceNextSelection(enumerator.getVariant(6));
		    CompoVille.SelectItem(enumerator.getVariant(7));
		}
	    CompoDestinataire.my_CompoXUL.value=enumerator.getVariant(0)+' '+enumerator.getVariant(1)+(enumerator.getVariant(2)!=null?' '+enumerator.getVariant(2):'');
	    CompoType.my_CompoXUL.value='DEFAUT';
	}
}

/* ABONNEMENT */
function Abonnement_Suspendu(TabParam)
{
    var CompoCheck=TabParam[0];
    var CompoDate=TabParam[1];
    if (CompoCheck.getValue())
	{
	    CompoDate.ActiverComposant(true);
	    RemplirAvecDate(CompoDate);
	}
    else
	{
	    CompoDate.ActiverComposant(false);
	    CompoDate.my_CompoXUL.value=null;
	}

}


/* FONCTIONS D'IMPRESSION */
function impression_factureAv(TabParams)
{
    if (TabParams[1].getValue()==null || TabParams[1].getValue()=='')
	{
	    alert("Il n'y a pas de facture");
	    return;
	}
    var Cle=TabParams[0].getCleVal();
    if (Cle==-1)
	{
	    alert("Vous devez selectionner l'enregistrement à imprimer");
	    return;
	}
    /* on appelle la fonction d'impression */
    TabParams[2](Cle);
    window.open("file:///tmp/"+Cle+".html");
}


/* extracteur */
function LancerExtracteur()
{
    window.openDialog("chrome://agrisig/content/BdJean/Interface/extracteur.xul");
}

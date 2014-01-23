/* Structure pour la boite de dialogue de saisie des flottants  */
/* pour la valeur par default on rentre directement valeur */
function stChampFlottant(texte,valeur){
    this.texte = texte;
    if (valeur==null)
	this.valeur=0;
    else
	this.valeur = valeur;
}

function Saisie_Construire(Parametres)
{
    var i,mydoc;
    var fenetre,grid,columns,column,rows,row,hbox,label,textbox,button;

    mydoc=document;
    fenetre=mydoc.getElementById("Saisie_Float_Window");

    /* le 1er paramètre est le titre */
    fenetre.setAttribute("title",Parametres[0]);

    /* Pour l'alignement en colonne */
    grid = mydoc.createElement("grid");
    fenetre.appendChild(grid);

    columns = mydoc.createElement("columns");
    grid.appendChild(columns);

    column = mydoc.createElement("column");
    column.setAttribute("flex","1");
    columns.appendChild(column);
    column = mydoc.createElement("column");
    column.setAttribute("flex","2");
    columns.appendChild(column);

    rows = mydoc.createElement("rows");
    rows.setAttribute("id","Rows");
    grid.appendChild(rows);

    /* On genere la boite de dialogue */
    for(i=5;i<Parametres.length;i++)
	{
	    row = mydoc.createElement("row");
	    rows.appendChild(row);
	    
	    label = mydoc.createElement("label");
	    label.setAttribute("value",Parametres[i].texte);
	    row.appendChild(label);

	    textbox = mydoc.createElement("textbox");
	    textbox.setAttribute("value",Parametres[i].valeur);
	    row.appendChild(textbox);
	}
}

function Saisie_Valider(fonction)
{
    /* on vérifie tout les champs */
    var Parent=document.getElementById("Rows");
    
    var LesRow=Parent.childNodes;

    var AExec="fonction(";
    var max=LesRow.length;
    var i,val,msg,result;
    var textbox,label;
    result=true;
    msg="Saisie(s) incorrecte(s):\n";
    for(i=0;i<max;i++)
	{
	    /* on récupère le label et le textbox */
	    label=LesRow[i].childNodes[0];
	    textbox=LesRow[i].childNodes[1];
	    val=textbox.value;
	    if (i!=0)
		AExec=AExec+",";
	    AExec=AExec+val;
	    /* si la valeur n'est pas valide */
	    if (isNaN(val))
		{
		    msg=msg+"> La valeur '"+val+"' du champ '"+label.value+"' doit etre un nombre\n";
		    result=false;
		}

	}
    AExec=AExec+");";
    if (!result)
	alert(msg);
    else
	{
	    eval(AExec);
	}

    return result;
}

function Saisie_Annuler()
{
    return confirm("Voulez vous vraiment annuler la saisie ?");
}

/* on passe un titre puis une suite de ChampFlottant */
function DialogueFlottants(titre,fonctionAppliquer,fonctionOK,x,y,LesChampFlottants)
{
    var Parametres=DialogueFlottants.arguments;
    //window.openDialog("SaisieFloat.xul", "showmore", "left="+x+"px,top="+y+"px,chrome,scrollbars,resizable",Parametres);
    window.openDialog("SaisieFloat.xul", "showmore", "centerscreen, modal, chrome,scrollbars,resizable",Parametres);
}

AllIt.IncludeJs('gestsea_principal_mcd.js');
/* Dossiers */
var It_Dossier, Maitre_Dossier;
It_Dossier = new clInterfaceSimple('Dossiers');
Maitre_Dossier = It_Dossier.AjouterMaitre('Liste des dossiers','gsea_dossier');
Maitre_Dossier.AjouterColonne('Libell�','do_libelle');

It_Dossier.AjouterComposantSimple('Libell�','do_libelle',null,null);
var DossierDO_Agent=It_Dossier.AjouterComposantComplexe('Agent', new Array('do_agent','ag_numero','agent'), null, LISTE_DEROULANTE_MULTI);
DossierDO_Agent.AjouterColonne('D�signation','ag_libelle');
var DossierDO_Client=It_Dossier.AjouterComposantComplexe('Client', new Array('do_client','pe_numero','personne'), null, LISTE_DEROULANTE_MULTI);
DossierDO_Client.AjouterColonne('D�signation','pe_libelle');
var DossierTravail=It_Dossier.AjouterComposantComplexe('Travaux', new Array('cle','tr_dossier','gsea_travail'));
DossierTravail.AjouterColonne('Cat�gorie :: Nom','ca_nom', new Array('tr_categorie','cle','gsea_categorie'));
DossierTravail.AjouterColonne('Libell�','tr_libelle');
DossierTravail.AddMode(INSERTION);
DossierTravail.AddMode(SUPPRESSION);
DossierTravail.AddMode(MODIFICATION);
var DossierTravailTR_Categorie=It_Dossier.AjouterComposantComplexe('Cat�gorie', new Array('tr_categorie','cle','gsea_categorie'), DossierTravail, LISTE_DEROULANTE_MULTI);
DossierTravailTR_Categorie.AjouterColonne('Nom','ca_nom');
It_Dossier.AjouterComposantSimple('Libell�','tr_libelle',null,DossierTravail);
It_Dossier.AjouterComposantSimple('Dur�e (min)','tr_duree',null,DossierTravail);
zalert('Dossier...OK!');

/* Cat�gories */
var It_Categorie, Maitre_Categorie;
It_Categorie = new clInterfaceSimple('Cat�gories');
Maitre_Categorie = It_Categorie.AjouterMaitre('Liste des cat�gories','gsea_categorie');
Maitre_Categorie.AjouterColonne('Nom','ca_nom');
Maitre_Categorie.AjouterColonne('Description','ca_description');

It_Categorie.AjouterComposantSimple('Nom','ca_nom',null,null);
It_Categorie.AjouterComposantSimple('Description','ca_description',null,null,null,null,null,true);
var CategorieTravail=It_Categorie.AjouterComposantComplexe('Travaux', new Array('cle','tr_categorie','gsea_travail'));
CategorieTravail.AjouterColonne('Dossier :: Libell�','do_libelle', new Array('tr_dossier','cle','gsea_dossier'));
CategorieTravail.AjouterColonne('Libell�','tr_libelle');
CategorieTravail.AddMode(INSERTION);
CategorieTravail.AddMode(SUPPRESSION);
CategorieTravail.AddMode(MODIFICATION);
var CategorieTravailTR_Dossier=It_Categorie.AjouterComposantComplexe('Dossier', new Array('tr_dossier','cle','gsea_dossier'), CategorieTravail, LISTE_DEROULANTE_MULTI);
CategorieTravailTR_Dossier.AjouterColonne('Libell�','do_libelle');
It_Categorie.AjouterComposantSimple('Libell�','tr_libelle',null,CategorieTravail);
It_Categorie.AjouterComposantSimple('Dur�e (min)','tr_duree',null,CategorieTravail);
zalert('Categorie...OK!');

AllIt.AjouterInterface(It_Dossier);
AllIt.AjouterInterface(It_Categorie);

function zalert(x){
    //  alert(x);
}

function CodeInConstructeur()
{
  zalert("Début de la construction");
  var AllIt = new clTabInterfaceSimple();
  /****************************
   * AJOUTS SPECIAUX
   ****************************/        
  AllIt.IncludeJs("gestsea_constructeur_plus.js");// inclus un javascript qui genere gesea general
  AllIt.IncludeJs("export.js"); // interieur des boutons d'export

  AllIt.AjouterMenu("Générer 'GestSEA - Général'...","LancerGeneSEA","");
    
  /****************************
   * CLASSES
   ****************************/
  var It_Classe, Maitre_Classe;
  It_Classe = new clInterfaceSimple("Classes") ;// titre de l'onglet
  Maitre_Classe = It_Classe.AjouterMaitre("Liste des classes","classe");
  //                                                           table maitre
  Maitre_Classe.AjouterColonne("Libellé","cl_libelle");
  //  Maitre_Classe.AjouterColonne("Nom","cl_nom");
  Maitre_Classe.AjouterColonne("Statut","cl_statut");
  Maitre_Classe.AjouterColonne("Société","so_libelle",new Array("cl_societe","so_numero","societe"));


  // definition  sur les clefs      Libellé , champ table jointure(  cle_local   cle_distante  table_distante)
  It_Classe.AjouterComposantSimple("Société","so_libelle",new Array("cl_societe","so_numero","societe"),null,LISTE_DEROULANTE);
  It_Classe.AjouterComposantSimple("Libellé (Ex. : 'Livraisons')","cl_libelle");
  //
  It_Classe.AjouterComposantSimple("Nom logique (Ex. : 'Livraison')","cl_nom");
  It_Classe.AjouterComposantSimple("Represente (Ex. : 'une livraison')","cl_represente");
  It_Classe.AjouterComposantSimple("La table doit apparaitre en tant qu'onglet indépendant","cl_mere",null,null,CHECKBOX);
  It_Classe.AjouterComposantSimple("La table est une association","cl_assoc",null,null,CHECKBOX);
  It_Classe.AjouterComposantSimple("Ordre d'apparence","cl_ordre");
  
  Classe_Propriete = It_Classe.AjouterComposantComplexe("Propriétés",new Array("cl_numero","pr_classe","propriete"));
  Classe_Propriete.AjouterColonne("Ordre","pr_ordre");
  Classe_Propriete.AjouterColonne("Libellé","pr_libelle");
  Classe_Propriete.AjouterColonne("Nom logique","pr_nom");
  Classe_Propriete.AjouterColonne("Type","tr_libelle",new Array("pr_type","tr_numero","typepropriete"));
  
  Classe_Propriete.AddMode(INSERTION); // sans mode = visualisation uniquement
  Classe_Propriete.AddMode(SUPPRESSION);
  Classe_Propriete.AddMode(MODIFICATION);
  
  It_Classe.AjouterComposantSimple("Libellé","pr_libelle",null,Classe_Propriete);
  It_Classe.AjouterComposantSimple("Nom logique","pr_nom",null,Classe_Propriete);
  It_Classe.AjouterComposantSimple("Type","tr_libelle",new Array("pr_type","tr_numero","typepropriete"),Classe_Propriete,LISTE_DEROULANTE);
  It_Classe.AjouterComposantSimple("Obligatoire","pr_obligatoire",null,Classe_Propriete,CHECKBOX);
  It_Classe.AjouterComposantSimple("Colonne de la liste","pr_colonne",null,Classe_Propriete,CHECKBOX);
  It_Classe.AjouterComposantSimple("Colonne indispensable en affichage","pr_colesclave",null,Classe_Propriete,CHECKBOX);
  It_Classe.AjouterComposantSimple("Ordre","pr_ordre",null,Classe_Propriete);
   
  zalert("Classes...OK!");

  /****************************
   * TYPES DE PROPRIETES
   ****************************/
   
  var It_Typepropriete, Maitre_Typepropriete;
  It_Typepropriete = new clInterfaceSimple("Types de propriétés");
  Maitre_Typepropriete = It_Typepropriete.AjouterMaitre("Liste des types de propriétés","typepropriete");
  Maitre_Typepropriete.AjouterColonne("Libellé","tr_libelle");
  // Maitre_Typepropriete.AjouterColonne("SQL","tr_sql");

  It_Typepropriete.AjouterComposantSimple("Libellé de la liste","tr_libelle");
  //It_Typepropriete.AjouterComposantSimple("Code SQL","tr_sql");
  //  It_Typepropriete.AjouterComposantSimple("Liste à choix multiple","tr_liste",null,null,CHECKBOX);
  
  Typepropriete_Listechoix = It_Typepropriete.AjouterComposantComplexe("Liste des choix",new Array("tr_numero","lc_typepropriete","listechoix"));
  Typepropriete_Listechoix.AjouterColonne("Choix","lc_libelle");
  
  Typepropriete_Listechoix.AddMode(INSERTION);
  Typepropriete_Listechoix.AddMode(SUPPRESSION);
  Typepropriete_Listechoix.AddMode(MODIFICATION);

  It_Typepropriete.AjouterComposantSimple("Choix","lc_libelle",null,Typepropriete_Listechoix);

  zalert("Types de propriétés...OK!");

  /****************************
   * FIN
   ****************************/
  // Liaisons
  
  
  
  // Ajouts à l'interface
   AllIt.AjouterInterface(It_Classe);
   AllIt.AjouterInterface(It_Typepropriete);
   
   
  zalert("Génération terminée");
  AllIt.GenererInterface("gestsea_constructeur",null,"GestSEA Constructeur - Génération d'interfaces spécifiques");
}

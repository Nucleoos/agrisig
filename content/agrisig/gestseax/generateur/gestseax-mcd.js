/* Constantes de types */
const TYPE_UNKNOWN       = -1;
const TYPE_UNDEFINED     = 0;
const TYPE_STRING        = 1;
const TYPE_INT           = 2;
const TYPE_FLOAT         = 3;
const TYPE_DECIMAL       = 4;
const TYPE_DATE	         = 5;
const TYPE_TIME          = 6;
const TYPE_DATETIME      = 7;
const TYPE_BOOL          = 8;
const TYPE_GEOMETRY      = 9;

/*
Les fonctions renvoient des chaines avec Majuscules

function mcd_getType(table,champs);
function mcd_obligatoire(table,champs);
function mcd_getTables();
function mcd_getTablesLabel();
function mcd_getChampsLogique(table);
function mcd_getChampsLabel(table);
function mcd_getMinChampsLogique(table);
function mcd_getMinChampsLabel(table);
function mcd_getLiens();
function mcd_getTablesCouleur();
function mcd_getTablesNote();
*/

/* Renvoie le type d'un attribut */
function mcd_getType(table,champs)
{
  var type;
  switch(table.toLowerCase()){
    case 'table_constante':
    case 'constante':
      switch(champs.toLowerCase()){
        case 'cs_numero': type=TYPE_INT;break;
        case 'cs_type': type=TYPE_INT;break;
        case 'cs_valeur': type=TYPE_STRING;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'table_adresse':
    case 'adresse':
      switch(champs.toLowerCase()){
        case 'ad_numero': type=TYPE_INT;break;
        case 'ad_type': type=TYPE_STRING;break;
        case 'cp_numero': type=TYPE_INT;break;
        case 'vi_numero': type=TYPE_INT;break;
        case 'pe_numero': type=TYPE_INT;break;
        case 'ad_active': type=TYPE_BOOL;break;
        case 'ad_addr1': type=TYPE_STRING;break;
        case 'ad_addr2': type=TYPE_STRING;break;
        case 'ad_addr3': type=TYPE_STRING;break;
        case 'ad_datestop': type=TYPE_DATE;break;
        case 'update_time': type=TYPE_DATETIME;break;
        case 'update_user': type=TYPE_STRING;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'table_canton':
    case 'canton':
      switch(champs.toLowerCase()){
        case 'ct_numero': type=TYPE_INT;break;
        case 'ct_nom': type=TYPE_STRING;break;
        case 'update_time': type=TYPE_DATETIME;break;
        case 'update_user': type=TYPE_STRING;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'table_appartienta':
    case 'appartienta':
      switch(champs.toLowerCase()){
        case 'ct_numero': type=TYPE_INT;break;
        case 'gc_numero': type=TYPE_INT;break;
        case 'update_time': type=TYPE_DATETIME;break;
        case 'update_user': type=TYPE_STRING;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'table_groupecanton':
    case 'groupecanton':
      switch(champs.toLowerCase()){
        case 'gc_numero': type=TYPE_INT;break;
        case 'gc_nom': type=TYPE_STRING;break;
        case 'update_time': type=TYPE_DATETIME;break;
        case 'update_user': type=TYPE_STRING;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'table_codepostal':
    case 'codepostal':
      switch(champs.toLowerCase()){
        case 'cp_numero': type=TYPE_INT;break;
        case 'cp_codepostal': type=TYPE_INT;break;
        case 'cp_bureau': type=TYPE_STRING;break;
        case 'update_time': type=TYPE_DATETIME;break;
        case 'update_user': type=TYPE_STRING;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'table_villecp':
    case 'villecp':
      switch(champs.toLowerCase()){
        case 'vi_numero': type=TYPE_INT;break;
        case 'cp_numero': type=TYPE_INT;break;
        case 'update_time': type=TYPE_DATETIME;break;
        case 'update_user': type=TYPE_STRING;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'table_ville':
    case 'ville':
      switch(champs.toLowerCase()){
        case 'vi_numero': type=TYPE_INT;break;
        case 'vi_nom': type=TYPE_STRING;break;
        case 'ct_numero': type=TYPE_INT;break;
        case 'update_time': type=TYPE_DATETIME;break;
        case 'update_user': type=TYPE_STRING;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'table_contact':
    case 'contact':
      switch(champs.toLowerCase()){
        case 'cn_numero': type=TYPE_INT;break;
        case 'cn_coordonnee': type=TYPE_STRING;break;
        case 'cn_type': type=TYPE_STRING;break;
        case 'update_time': type=TYPE_DATETIME;break;
        case 'update_user': type=TYPE_STRING;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'table_estjoignable':
    case 'estjoignable':
      switch(champs.toLowerCase()){
        case 'ej_numero': type=TYPE_INT;break;
        case 'pe_numero': type=TYPE_INT;break;
        case 'cn_numero': type=TYPE_INT;break;
        case 'ej_actif': type=TYPE_BOOL;break;
        case 'update_time': type=TYPE_DATETIME;break;
        case 'update_user': type=TYPE_STRING;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'table_typelien':
    case 'typelien':
      switch(champs.toLowerCase()){
        case 'tl_numero': type=TYPE_INT;break;
        case 'tl_libelle': type=TYPE_STRING;break;
        case 'tl_description': type=TYPE_STRING;break;
        case 'update_time': type=TYPE_DATETIME;break;
        case 'update_user': type=TYPE_STRING;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'table_estlie':
    case 'estlie':
      switch(champs.toLowerCase()){
        case 'el_personne1': type=TYPE_INT;break;
        case 'el_personne2': type=TYPE_INT;break;
        case 'el_actif': type=TYPE_BOOL;break;
        case 'tl_numero': type=TYPE_INT;break;
        case 'el_debut': type=TYPE_DATE;break;
        case 'el_fin': type=TYPE_DATE;break;
        case 'update_time': type=TYPE_DATETIME;break;
        case 'update_user': type=TYPE_STRING;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'table_etatpersonne':
    case 'etatpersonne':
      switch(champs.toLowerCase()){
        case 'ep_numero': type=TYPE_INT;break;
        case 'ep_libelle': type=TYPE_STRING;break;
        case 'update_time': type=TYPE_DATETIME;break;
        case 'update_user': type=TYPE_STRING;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'table_personne':
    case 'personne':
      switch(champs.toLowerCase()){
        case 'pe_numero': type=TYPE_INT;break;
        case 'tp_numero': type=TYPE_INT;break;
        case 'pe_titre': type=TYPE_STRING;break;
        case 'pe_nom': type=TYPE_STRING;break;
        case 'pe_regimefiscal': type=TYPE_STRING;break;
        case 'ep_numero': type=TYPE_INT;break;
        case 'pe_morale': type=TYPE_BOOL;break;
        case 'pe_prenom': type=TYPE_STRING;break;
        case 'pe_complement': type=TYPE_STRING;break;
        case 'pe_naissance': type=TYPE_DATE;break;
        case 'update_time': type=TYPE_DATETIME;break;
        case 'update_user': type=TYPE_STRING;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'table_personneupdate':
    case 'personneupdate':
      switch(champs.toLowerCase()){
        case 'pu_numero': type=TYPE_INT;break;
        case 'pu_action': type=TYPE_STRING;break;
        case 'pu_bilan': type=TYPE_STRING;break;
        case 'pe_numero': type=TYPE_INT;break;
        case 'tp_numero': type=TYPE_INT;break;
        case 'pe_titre': type=TYPE_STRING;break;
        case 'pe_nom': type=TYPE_STRING;break;
        case 'pe_regimefiscal': type=TYPE_STRING;break;
        case 'ep_numero': type=TYPE_INT;break;
        case 'pe_morale': type=TYPE_BOOL;break;
        case 'pe_prenom': type=TYPE_STRING;break;
        case 'pe_complement': type=TYPE_STRING;break;
        case 'pe_naissance': type=TYPE_DATE;break;
        case 'update_time': type=TYPE_DATETIME;break;
        case 'update_user': type=TYPE_STRING;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'table_estresponsable':
    case 'estresponsable':
      switch(champs.toLowerCase()){
        case 'peac_numero': type=TYPE_INT;break;
        case 'pe_numero': type=TYPE_INT;break;
        case 're_numero': type=TYPE_INT;break;
        case 'peac_periodedebut': type=TYPE_DATE;break;
        case 'peac_periodefin': type=TYPE_DATE;break;
        case 'peac_titre': type=TYPE_STRING;break;
        case 'peac_fini': type=TYPE_BOOL;break;
        case 'update_time': type=TYPE_DATETIME;break;
        case 'update_user': type=TYPE_STRING;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'table_responsabilite':
    case 'responsabilite':
      switch(champs.toLowerCase()){
        case 're_numero': type=TYPE_INT;break;
        case 're_code': type=TYPE_STRING;break;
        case 're_nom': type=TYPE_STRING;break;
        case 're_famille': type=TYPE_STRING;break;
        case 'update_time': type=TYPE_DATETIME;break;
        case 'update_user': type=TYPE_STRING;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'table_attribut':
    case 'attribut':
      switch(champs.toLowerCase()){
        case 'at_numero': type=TYPE_INT;break;
        case 'pe_numero': type=TYPE_INT;break;
        case 'ta_numero': type=TYPE_INT;break;
        case 'cr_numero': type=TYPE_INT;break;
        case 'at_valeur': type=TYPE_STRING;break;
        case 'update_time': type=TYPE_DATETIME;break;
        case 'update_user': type=TYPE_STRING;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'table_typeattribut':
    case 'typeattribut':
      switch(champs.toLowerCase()){
        case 'ta_numero': type=TYPE_INT;break;
        case 'ta_nom': type=TYPE_STRING;break;
        case 'update_time': type=TYPE_DATETIME;break;
        case 'update_user': type=TYPE_STRING;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'table_categorie':
    case 'categorie':
      switch(champs.toLowerCase()){
        case 'cr_numero': type=TYPE_INT;break;
        case 'cr_libelle': type=TYPE_STRING;break;
        case 'ta_numero': type=TYPE_INT;break;
        case 'cr_description': type=TYPE_STRING;break;
        case 'update_time': type=TYPE_DATETIME;break;
        case 'update_user': type=TYPE_STRING;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'table_tva':
    case 'tva':
      switch(champs.toLowerCase()){
        case 'tv_numero': type=TYPE_INT;break;
        case 'tv_code': type=TYPE_INT;break;
        case 'tv_taux': type=TYPE_FLOAT;break;
        case 'tv_actif': type=TYPE_BOOL;break;
        case 'so_numero': type=TYPE_INT;break;
        case 'cg_numero': type=TYPE_INT;break;
        case 'update_time': type=TYPE_DATETIME;break;
        case 'update_user': type=TYPE_STRING;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'table_typepersonne':
    case 'typepersonne':
      switch(champs.toLowerCase()){
        case 'tp_numero': type=TYPE_INT;break;
        case 'tp_type': type=TYPE_STRING;break;
        case 'update_time': type=TYPE_DATETIME;break;
        case 'update_user': type=TYPE_STRING;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'table_typetache':
    case 'typetache':
      switch(champs.toLowerCase()){
        case 'th_numero': type=TYPE_INT;break;
        case 'th_libelle': type=TYPE_STRING;break;
        case 'th_description': type=TYPE_STRING;break;
        case 'update_time': type=TYPE_DATETIME;break;
        case 'update_user': type=TYPE_STRING;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'table_appel':
    case 'appel':
      switch(champs.toLowerCase()){
        case 'ap_numero': type=TYPE_INT;break;
        case 'ap_libelle': type=TYPE_STRING;break;
        case 'th_numero': type=TYPE_INT;break;
        case 'ap_date': type=TYPE_DATE;break;
        case 'ap_description': type=TYPE_STRING;break;
        case 'ap_duree': type=TYPE_FLOAT;break;
        case 'pe_numero': type=TYPE_INT;break;
        case 'update_time': type=TYPE_DATETIME;break;
        case 'update_user': type=TYPE_STRING;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'table_societe':
    case 'societe':
      switch(champs.toLowerCase()){
        case 'so_numero': type=TYPE_INT;break;
        case 'so_libelle': type=TYPE_STRING;break;
        case 'so_abbrev': type=TYPE_STRING;break;
        case 'pe_numero': type=TYPE_INT;break;
        case 'so_detail': type=TYPE_STRING;break;
        case 'so_sequence': type=TYPE_STRING;break;
        case 'ts_numero': type=TYPE_INT;break;
        case 'update_time': type=TYPE_DATETIME;break;
        case 'update_user': type=TYPE_STRING;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'table_typesociete':
    case 'typesociete':
      switch(champs.toLowerCase()){
        case 'ts_numero': type=TYPE_INT;break;
        case 'ts_libelle': type=TYPE_STRING;break;
        case 'update_time': type=TYPE_DATETIME;break;
        case 'update_user': type=TYPE_STRING;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'table_classe':
    case 'classe':
      switch(champs.toLowerCase()){
        case 'cl_numero': type=TYPE_INT;break;
        case 'cl_nom': type=TYPE_STRING;break;
        case 'cl_represente': type=TYPE_STRING;break;
        case 'cl_libelle': type=TYPE_STRING;break;
        case 'cl_societe': type=TYPE_INT;break;
        case 'cl_mere': type=TYPE_BOOL;break;
        case 'cl_ordre': type=TYPE_INT;break;
        case 'cl_assoc': type=TYPE_BOOL;break;
        case 'update_time': type=TYPE_DATETIME;break;
        case 'update_user': type=TYPE_STRING;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'table_propriete':
    case 'propriete':
      switch(champs.toLowerCase()){
        case 'pr_numero': type=TYPE_INT;break;
        case 'pr_classe': type=TYPE_INT;break;
        case 'pr_type': type=TYPE_INT;break;
        case 'pr_nom': type=TYPE_STRING;break;
        case 'pr_libelle': type=TYPE_STRING;break;
        case 'pr_obligatoire': type=TYPE_BOOL;break;
        case 'pr_colonne': type=TYPE_BOOL;break;
        case 'pr_colesclave': type=TYPE_BOOL;break;
        case 'pr_ordre': type=TYPE_INT;break;
        case 'update_time': type=TYPE_DATETIME;break;
        case 'update_user': type=TYPE_STRING;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'table_typepropriete':
    case 'typepropriete':
      switch(champs.toLowerCase()){
        case 'tr_numero': type=TYPE_INT;break;
        case 'tr_libelle': type=TYPE_STRING;break;
        case 'tr_sql': type=TYPE_STRING;break;
        case 'tr_systeme': type=TYPE_BOOL;break;
        case 'tr_estclef': type=TYPE_BOOL;break;
        case 'tr_liste': type=TYPE_BOOL;break;
        case 'tr_code': type=TYPE_INT;break;
        case 'tr_classe': type=TYPE_INT;break;
        case 'update_time': type=TYPE_DATETIME;break;
        case 'update_user': type=TYPE_STRING;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'table_colonnetype':
    case 'colonnetype':
      switch(champs.toLowerCase()){
        case 'cy_numero': type=TYPE_INT;break;
        case 'cy_typepropriete': type=TYPE_INT;break;
        case 'cy_libelle': type=TYPE_STRING;break;
        case 'cy_nom': type=TYPE_STRING;break;
        case 'cy_estclef': type=TYPE_BOOL;break;
        case 'cy_ordre': type=TYPE_INT;break;
        case 'update_time': type=TYPE_DATETIME;break;
        case 'update_user': type=TYPE_STRING;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'table_listechoix':
    case 'listechoix':
      switch(champs.toLowerCase()){
        case 'lc_numero': type=TYPE_INT;break;
        case 'lc_typepropriete': type=TYPE_INT;break;
        case 'lc_libelle': type=TYPE_STRING;break;
        case 'update_time': type=TYPE_DATETIME;break;
        case 'update_user': type=TYPE_STRING;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'table_adherence':
    case 'adherence':
      switch(champs.toLowerCase()){
        case 'ah_numero': type=TYPE_INT;break;
        case 'pd_numero': type=TYPE_INT;break;
        case 'ah_libelle': type=TYPE_STRING;break;
        case 'ah_reduction': type=TYPE_FLOAT;break;
        case 'ah_quantite': type=TYPE_FLOAT;break;
        case 'update_time': type=TYPE_DATETIME;break;
        case 'update_user': type=TYPE_STRING;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'table_periodeadherence':
    case 'periodeadherence':
      switch(champs.toLowerCase()){
        case 'po_numero': type=TYPE_INT;break;
        case 'ah_numero': type=TYPE_INT;break;
        case 'update_time': type=TYPE_DATETIME;break;
        case 'update_user': type=TYPE_STRING;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'table_adhesion':
    case 'adhesion':
      switch(champs.toLowerCase()){
        case 'as_numero': type=TYPE_INT;break;
        case 'as_reductionmax': type=TYPE_FLOAT;break;
        case 'pe_numero': type=TYPE_INT;break;
        case 'po_numero': type=TYPE_INT;break;
        case 'ah_numero': type=TYPE_INT;break;
        case 'update_time': type=TYPE_DATETIME;break;
        case 'update_user': type=TYPE_STRING;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'table_periode':
    case 'periode':
      switch(champs.toLowerCase()){
        case 'po_numero': type=TYPE_INT;break;
        case 'po_debut': type=TYPE_DATE;break;
        case 'po_fin': type=TYPE_DATE;break;
        case 'update_time': type=TYPE_DATETIME;break;
        case 'update_user': type=TYPE_STRING;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'table_observation':
    case 'observation':
      switch(champs.toLowerCase()){
        case 'ob_numero': type=TYPE_INT;break;
        case 'pe_numero': type=TYPE_INT;break;
        case 'ob_observation': type=TYPE_STRING;break;
        case 'ob_niveau': type=TYPE_INT;break;
        case 'update_time': type=TYPE_DATETIME;break;
        case 'update_user': type=TYPE_STRING;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'table_prix':
    case 'prix':
      switch(champs.toLowerCase()){
        case 'px_numero': type=TYPE_INT;break;
        case 'tv_numero': type=TYPE_INT;break;
        case 'pd_numero': type=TYPE_INT;break;
        case 'px_tarifht': type=TYPE_FLOAT;break;
        case 'px_tarifttc': type=TYPE_FLOAT;break;
        case 'px_actif': type=TYPE_BOOL;break;
        case 'px_datedebut': type=TYPE_DATE;break;
        case 'update_time': type=TYPE_DATETIME;break;
        case 'update_user': type=TYPE_STRING;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'table_typejournal':
    case 'typejournal':
      switch(champs.toLowerCase()){
        case 'tj_numero': type=TYPE_INT;break;
        case 'tj_libelle': type=TYPE_STRING;break;
        case 'update_time': type=TYPE_DATETIME;break;
        case 'update_user': type=TYPE_STRING;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'table_modele':
    case 'modele':
      switch(champs.toLowerCase()){
        case 'mo_numero': type=TYPE_INT;break;
        case 'mo_libelle': type=TYPE_STRING;break;
        case 'so_numero': type=TYPE_INT;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'table_lignemodele':
    case 'lignemodele':
      switch(champs.toLowerCase()){
        case 'lm_numero': type=TYPE_INT;break;
        case 'pd_numero': type=TYPE_INT;break;
        case 'mo_numero': type=TYPE_INT;break;
        case 'lm_quantite': type=TYPE_FLOAT;break;
        case 'lm_montantht': type=TYPE_FLOAT;break;
        case 'lm_montantttc': type=TYPE_FLOAT;break;
        case 'update_time': type=TYPE_DATETIME;break;
        case 'update_user': type=TYPE_STRING;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'table_produit':
    case 'produit':
      switch(champs.toLowerCase()){
        case 'pd_libelle': type=TYPE_STRING;break;
        case 'pd_numero': type=TYPE_INT;break;
        case 'jo_numero': type=TYPE_INT;break;
        case 'so_numero': type=TYPE_INT;break;
        case 'pd_actif': type=TYPE_BOOL;break;
        case 'pd_sansquantite': type=TYPE_BOOL;break;
        case 'pd_reduction': type=TYPE_BOOL;break;
        case 'update_time': type=TYPE_DATETIME;break;
        case 'update_user': type=TYPE_STRING;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'table_ligne':
    case 'ligne':
      switch(champs.toLowerCase()){
        case 'l_numero': type=TYPE_INT;break;
        case 'pd_numero': type=TYPE_INT;break;
        case 'de_numero': type=TYPE_INT;break;
        case 'l_quantite': type=TYPE_FLOAT;break;
        case 'l_montantht': type=TYPE_FLOAT;break;
        case 'l_montantttc': type=TYPE_FLOAT;break;
        case 'px_numero': type=TYPE_INT;break;
        case 'l_notes': type=TYPE_STRING;break;
        case 'update_time': type=TYPE_DATETIME;break;
        case 'update_user': type=TYPE_STRING;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'table_devis':
    case 'devis':
      switch(champs.toLowerCase()){
        case 'de_numero': type=TYPE_INT;break;
        case 'pe_numero': type=TYPE_INT;break;
        case 'de_date': type=TYPE_DATE;break;
        case 'de_libelle': type=TYPE_STRING;break;
        case 'de_reduction': type=TYPE_FLOAT;break;
        case 'de_montantht': type=TYPE_FLOAT;break;
        case 'de_montantttc': type=TYPE_FLOAT;break;
        case 'em_numero': type=TYPE_INT;break;
        case 'de_locked': type=TYPE_BOOL;break;
        case 'de_acompte': type=TYPE_BOOL;break;
        case 'de_lettre': type=TYPE_BOOL;break;
        case 'de_civilites': type=TYPE_STRING;break;
        case 'de_introduction': type=TYPE_STRING;break;
        case 'update_time': type=TYPE_DATETIME;break;
        case 'update_user': type=TYPE_STRING;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'table_lignefacture':
    case 'lignefacture':
      switch(champs.toLowerCase()){
        case 'lf_numero': type=TYPE_INT;break;
        case 'fa_numero': type=TYPE_INT;break;
        case 'px_numero': type=TYPE_INT;break;
        case 'pd_numero': type=TYPE_INT;break;
        case 'lf_quantite': type=TYPE_FLOAT;break;
        case 'lf_montantht': type=TYPE_FLOAT;break;
        case 'lf_montantttc': type=TYPE_FLOAT;break;
        case 'update_time': type=TYPE_DATETIME;break;
        case 'update_user': type=TYPE_STRING;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'table_facture':
    case 'facture':
      switch(champs.toLowerCase()){
        case 'fa_numero': type=TYPE_INT;break;
        case 'de_numero': type=TYPE_INT;break;
        case 'pe_numero': type=TYPE_INT;break;
        case 'ag_numero': type=TYPE_INT;break;
        case 'fa_numfact': type=TYPE_INT;break;
        case 'fa_date': type=TYPE_DATE;break;
        case 'fa_reduction': type=TYPE_FLOAT;break;
        case 'fa_montantht': type=TYPE_FLOAT;break;
        case 'fa_montantttc': type=TYPE_FLOAT;break;
        case 'fa_accompte': type=TYPE_FLOAT;break;
        case 'fa_annotation': type=TYPE_STRING;break;
        case 'fa_libelle': type=TYPE_STRING;break;
        case 'so_numero': type=TYPE_INT;break;
        case 'update_time': type=TYPE_DATETIME;break;
        case 'update_user': type=TYPE_STRING;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'table_ligneavoir':
    case 'ligneavoir':
      switch(champs.toLowerCase()){
        case 'la_numero': type=TYPE_INT;break;
        case 'pd_numero': type=TYPE_INT;break;
        case 'av_numero': type=TYPE_INT;break;
        case 'px_numero': type=TYPE_INT;break;
        case 'la_quantite': type=TYPE_FLOAT;break;
        case 'la_montantht': type=TYPE_FLOAT;break;
        case 'la_montantttc': type=TYPE_FLOAT;break;
        case 'update_time': type=TYPE_DATETIME;break;
        case 'update_user': type=TYPE_STRING;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'table_avoir':
    case 'avoir':
      switch(champs.toLowerCase()){
        case 'av_numero': type=TYPE_INT;break;
        case 'fa_numero': type=TYPE_INT;break;
        case 'av_numfact': type=TYPE_INT;break;
        case 'av_date': type=TYPE_DATE;break;
        case 'av_montantht': type=TYPE_FLOAT;break;
        case 'av_montantttc': type=TYPE_FLOAT;break;
        case 'av_reduction': type=TYPE_FLOAT;break;
        case 'update_time': type=TYPE_DATETIME;break;
        case 'update_user': type=TYPE_STRING;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'table_routage':
    case 'routage':
      switch(champs.toLowerCase()){
        case 'ro_numero': type=TYPE_INT;break;
        case 'ad_numero': type=TYPE_INT;break;
        case 'pe_numero': type=TYPE_INT;break;
        case 'ro_debutservice': type=TYPE_INT;break;
        case 'ro_finservice': type=TYPE_INT;break;
        case 'ro_quantite': type=TYPE_INT;break;
        case 'ro_suspendu': type=TYPE_BOOL;break;
        case 'ro_dernierroute': type=TYPE_INT;break;
        case 'fa_numero': type=TYPE_INT;break;
        case 'update_time': type=TYPE_DATETIME;break;
        case 'update_user': type=TYPE_STRING;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'table_service':
    case 'service':
      switch(champs.toLowerCase()){
        case 'se_numero': type=TYPE_INT;break;
        case 'se_nom': type=TYPE_STRING;break;
        case 'se_societe': type=TYPE_INT;break;
        case 'se_agent': type=TYPE_INT;break;
        case 'update_time': type=TYPE_DATETIME;break;
        case 'update_user': type=TYPE_STRING;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'table_employe':
    case 'employe':
      switch(champs.toLowerCase()){
        case 'em_numero': type=TYPE_INT;break;
        case 'dp_numero': type=TYPE_INT;break;
        case 'em_emploi': type=TYPE_STRING;break;
        case 'em_service': type=TYPE_INT;break;
        case 'em_agent': type=TYPE_INT;break;
        case 'em_login': type=TYPE_STRING;break;
        case 'em_acces': type=TYPE_INT;break;
        case 'em_password': type=TYPE_STRING;break;
        case 'em_super': type=TYPE_BOOL;break;
        case 'update_time': type=TYPE_DATETIME;break;
        case 'update_user': type=TYPE_STRING;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'table_agent':
    case 'agent':
      switch(champs.toLowerCase()){
        case 'ag_numero': type=TYPE_INT;break;
        case 'ag_nom': type=TYPE_STRING;break;
        case 'ag_prenom': type=TYPE_STRING;break;
        case 'ag_initiales': type=TYPE_STRING;break;
        case 'ag_actif': type=TYPE_BOOL;break;
        case 'eq_numero': type=TYPE_INT;break;
        case 'ag_role': type=TYPE_STRING;break;
        case 'ag_telephone': type=TYPE_STRING;break;
        case 'ag_mobile': type=TYPE_STRING;break;
        case 'ag_email': type=TYPE_STRING;break;
        case 'ag_commentaire': type=TYPE_STRING;break;
        case 'update_time': type=TYPE_DATETIME;break;
        case 'update_user': type=TYPE_STRING;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'table_equipe':
    case 'equipe':
      switch(champs.toLowerCase()){
        case 'eq_numero': type=TYPE_INT;break;
        case 'eq_nom': type=TYPE_STRING;break;
        case 'update_time': type=TYPE_DATETIME;break;
        case 'update_user': type=TYPE_STRING;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'table_exercice':
    case 'exercice':
      switch(champs.toLowerCase()){
        case 'ex_numero': type=TYPE_INT;break;
        case 'so_numero': type=TYPE_INT;break;
        case 'ex_datedebut': type=TYPE_DATE;break;
        case 'ex_datefin': type=TYPE_DATE;break;
        case 'ex_cloture': type=TYPE_BOOL;break;
        case 'ex_password': type=TYPE_STRING;break;
        case 'ex_compteattente': type=TYPE_INT;break;
        case 'ex_actif': type=TYPE_BOOL;break;
        case 'update_time': type=TYPE_DATETIME;break;
        case 'update_user': type=TYPE_STRING;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'table_journal':
    case 'journal':
      switch(champs.toLowerCase()){
        case 'jo_numero': type=TYPE_INT;break;
        case 'jo_abbrev': type=TYPE_STRING;break;
        case 'jo_libelle': type=TYPE_STRING;break;
        case 'jo_debit': type=TYPE_FLOAT;break;
        case 'jo_credit': type=TYPE_FLOAT;break;
        case 'so_numero': type=TYPE_INT;break;
        case 'tj_numero': type=TYPE_INT;break;
        case 'cg_numero': type=TYPE_INT;break;
        case 'jo_mois': type=TYPE_INT;break;
        case 'jo_annee': type=TYPE_INT;break;
        case 'jo_contrepartie': type=TYPE_BOOL;break;
        case 'jo_provisoire': type=TYPE_BOOL;break;
        case 'jo_visible': type=TYPE_BOOL;break;
        case 'jo_sequence': type=TYPE_STRING;break;
        case 'update_time': type=TYPE_DATETIME;break;
        case 'update_user': type=TYPE_STRING;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'table_piece':
    case 'piece':
      switch(champs.toLowerCase()){
        case 'pi_numero': type=TYPE_INT;break;
        case 'jo_numero': type=TYPE_INT;break;
        case 'pi_numpiece': type=TYPE_INT;break;
        case 'ex_numero': type=TYPE_INT;break;
        case 'pi_libelle': type=TYPE_STRING;break;
        case 'pi_debit': type=TYPE_FLOAT;break;
        case 'pi_credit': type=TYPE_FLOAT;break;
        case 'pi_date': type=TYPE_DATE;break;
        case 'pi_numseq': type=TYPE_INT;break;
        case 'update_time': type=TYPE_DATETIME;break;
        case 'update_user': type=TYPE_STRING;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'table_ecriture':
    case 'ecriture':
      switch(champs.toLowerCase()){
        case 'ec_numero': type=TYPE_INT;break;
        case 'ec_numecriture': type=TYPE_INT;break;
        case 'pi_numero': type=TYPE_INT;break;
        case 'ex_numero': type=TYPE_INT;break;
        case 'cg_numero': type=TYPE_INT;break;
        case 'ca_numero': type=TYPE_INT;break;
        case 'ec_aux': type=TYPE_BOOL;break;
        case 'pf_numero': type=TYPE_INT;break;
        case 'ec_compte': type=TYPE_STRING;break;
        case 'ec_libelle': type=TYPE_STRING;break;
        case 'ec_debit': type=TYPE_FLOAT;break;
        case 'ec_credit': type=TYPE_FLOAT;break;
        case 'pt_numero': type=TYPE_INT;break;
        case 'av_numero': type=TYPE_INT;break;
        case 'lt_numero': type=TYPE_INT;break;
        case 'db_numero': type=TYPE_INT;break;
        case 'rg_numero': type=TYPE_INT;break;
        case 'fa_numero': type=TYPE_INT;break;
        case 'update_time': type=TYPE_DATETIME;break;
        case 'update_user': type=TYPE_STRING;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'table_comptegen':
    case 'comptegen':
      switch(champs.toLowerCase()){
        case 'cg_numero': type=TYPE_INT;break;
        case 'cg_numcompte': type=TYPE_INT;break;
        case 'cg_libelle': type=TYPE_STRING;break;
        case 'ac_numero': type=TYPE_INT;break;
        case 'cg_accepteaux': type=TYPE_BOOL;break;
        case 'cg_utilisable': type=TYPE_BOOL;break;
        case 'cg_lettrable': type=TYPE_BOOL;break;
        case 'cg_pointable': type=TYPE_BOOL;break;
        case 'so_numero': type=TYPE_INT;break;
        case 'cg_groupable': type=TYPE_BOOL;break;
        case 'cg_debit': type=TYPE_BOOL;break;
        case 'update_time': type=TYPE_DATETIME;break;
        case 'update_user': type=TYPE_STRING;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'table_compteproduit':
    case 'compteproduit':
      switch(champs.toLowerCase()){
        case 'ci_numero': type=TYPE_INT;break;
        case 'pd_numero': type=TYPE_INT;break;
        case 'cg_numero': type=TYPE_INT;break;
        case 'ci_actif': type=TYPE_BOOL;break;
        case 'update_time': type=TYPE_DATETIME;break;
        case 'update_user': type=TYPE_STRING;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'table_compteaux':
    case 'compteaux':
      switch(champs.toLowerCase()){
        case 'ca_numero': type=TYPE_INT;break;
        case 'cg_numero': type=TYPE_INT;break;
        case 'ca_numcompte': type=TYPE_STRING;break;
        case 'ca_libelle': type=TYPE_STRING;break;
        case 'ac_numero': type=TYPE_INT;break;
        case 'ca_debit': type=TYPE_BOOL;break;
        case 'update_time': type=TYPE_DATETIME;break;
        case 'update_user': type=TYPE_STRING;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'table_acces':
    case 'acces':
      switch(champs.toLowerCase()){
        case 'ac_numero': type=TYPE_INT;break;
        case 'ac_libelle': type=TYPE_STRING;break;
        case 'ac_niveau': type=TYPE_INT;break;
        case 'update_time': type=TYPE_DATETIME;break;
        case 'update_user': type=TYPE_STRING;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'table_pointage':
    case 'pointage':
      switch(champs.toLowerCase()){
        case 'pt_numero': type=TYPE_INT;break;
        case 'pt_date': type=TYPE_DATE;break;
        case 'pt_releve': type=TYPE_STRING;break;
        case 'pt_debit': type=TYPE_FLOAT;break;
        case 'pt_credit': type=TYPE_FLOAT;break;
        case 'update_time': type=TYPE_DATETIME;break;
        case 'update_user': type=TYPE_STRING;break;
        case 'so_numero': type=TYPE_INT;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'table_lettrage':
    case 'lettrage':
      switch(champs.toLowerCase()){
        case 'lt_numero': type=TYPE_INT;break;
        case 'lt_lettre': type=TYPE_STRING;break;
        case 'update_time': type=TYPE_DATETIME;break;
        case 'update_user': type=TYPE_STRING;break;
        case 'so_numero': type=TYPE_INT;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'table_prefixe':
    case 'prefixe':
      switch(champs.toLowerCase()){
        case 'pf_numero': type=TYPE_INT;break;
        case 'pf_nom': type=TYPE_STRING;break;
        case 'update_time': type=TYPE_DATETIME;break;
        case 'update_user': type=TYPE_STRING;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'table_facturereglement':
    case 'facturereglement':
      switch(champs.toLowerCase()){
        case 'fr_numero': type=TYPE_INT;break;
        case 'rg_numero': type=TYPE_INT;break;
        case 'fa_numero': type=TYPE_INT;break;
        case 'fr_acompte': type=TYPE_BOOL;break;
        case 'fr_partiel': type=TYPE_BOOL;break;
        case 'fr_montant': type=TYPE_FLOAT;break;
        case 'update_time': type=TYPE_DATETIME;break;
        case 'update_user': type=TYPE_STRING;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'table_modereglement':
    case 'modereglement':
      switch(champs.toLowerCase()){
        case 'mr_numero': type=TYPE_INT;break;
        case 'mr_libelle': type=TYPE_STRING;break;
        case 'cg_numero': type=TYPE_INT;break;
        case 'so_numero': type=TYPE_INT;break;
        case 'mr_actif': type=TYPE_BOOL;break;
        case 'mr_description': type=TYPE_STRING;break;
        case 'update_time': type=TYPE_DATETIME;break;
        case 'update_user': type=TYPE_STRING;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'table_reglement':
    case 'reglement':
      switch(champs.toLowerCase()){
        case 'rg_numero': type=TYPE_INT;break;
        case 'pe_numero': type=TYPE_INT;break;
        case 'rg_montant': type=TYPE_FLOAT;break;
        case 'rg_date': type=TYPE_DATE;break;
        case 'mr_numero': type=TYPE_INT;break;
        case 'so_numero': type=TYPE_INT;break;
        case 'rg_encompta': type=TYPE_BOOL;break;
        case 'rg_libellebanque': type=TYPE_STRING;break;
        case 'rg_numerocompte': type=TYPE_STRING;break;
        case 'rg_reference': type=TYPE_STRING;break;
        case 'update_time': type=TYPE_DATETIME;break;
        case 'update_user': type=TYPE_STRING;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'table_moderepartition':
    case 'moderepartition':
      switch(champs.toLowerCase()){
        case 'mp_numero': type=TYPE_INT;break;
        case 'mp_libelle': type=TYPE_STRING;break;
        case 'cg_numero': type=TYPE_INT;break;
        case 'so_numero': type=TYPE_INT;break;
        case 'mp_actif': type=TYPE_BOOL;break;
        case 'mp_societe': type=TYPE_INT;break;
        case 'mp_description': type=TYPE_STRING;break;
        case 'update_time': type=TYPE_DATETIME;break;
        case 'update_user': type=TYPE_STRING;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'table_repartition':
    case 'repartition':
      switch(champs.toLowerCase()){
        case 'rp_numero': type=TYPE_INT;break;
        case 'rg_numero': type=TYPE_INT;break;
        case 'mp_numero': type=TYPE_INT;break;
        case 'rp_montant': type=TYPE_FLOAT;break;
        case 'update_time': type=TYPE_DATETIME;break;
        case 'update_user': type=TYPE_STRING;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'table_impression':
    case 'impression':
      switch(champs.toLowerCase()){
        case 'im_numero': type=TYPE_INT;break;
        case 'im_libelle': type=TYPE_STRING;break;
        case 'im_nom': type=TYPE_STRING;break;
        case 'im_societe': type=TYPE_INT;break;
        case 'im_modele': type=TYPE_STRING;break;
        case 'im_defaut': type=TYPE_BOOL;break;
        case 'im_keytable': type=TYPE_STRING;break;
        case 'im_keycle': type=TYPE_STRING;break;
        case 'im_keydate': type=TYPE_STRING;break;
        case 'update_time': type=TYPE_DATETIME;break;
        case 'update_user': type=TYPE_STRING;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'table_groupetable':
    case 'groupetable':
      switch(champs.toLowerCase()){
        case 'gt_numero': type=TYPE_INT;break;
        case 'gt_libelle': type=TYPE_STRING;break;
        case 'gt_tables': type=TYPE_STRING;break;
        case 'update_time': type=TYPE_DATETIME;break;
        case 'update_user': type=TYPE_STRING;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'table_droit':
    case 'droit':
      switch(champs.toLowerCase()){
        case 'dr_numero': type=TYPE_INT;break;
        case 'dp_numero': type=TYPE_INT;break;
        case 'gt_numero': type=TYPE_INT;break;
        case 'dr_select': type=TYPE_BOOL;break;
        case 'dr_insert': type=TYPE_BOOL;break;
        case 'dr_update': type=TYPE_BOOL;break;
        case 'dr_delete': type=TYPE_BOOL;break;
        case 'update_time': type=TYPE_DATETIME;break;
        case 'update_user': type=TYPE_STRING;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'table_droitprofil':
    case 'droitprofil':
      switch(champs.toLowerCase()){
        case 'dp_numero': type=TYPE_INT;break;
        case 'dp_libelle': type=TYPE_STRING;break;
        case 'dp_notes': type=TYPE_STRING;break;
        case 'update_time': type=TYPE_DATETIME;break;
        case 'update_user': type=TYPE_STRING;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'table_activite':
    case 'activite':
      switch(champs.toLowerCase()){
        case 'za_numero': type=TYPE_INT;break;
        case 'za_heuredebut': type=TYPE_UNKNOWN;break;
        case 'za_heurefin': type=TYPE_UNKNOWN;break;
        case 'za_date': type=TYPE_DATE;break;
        case 'za_duree': type=TYPE_INT;break;
        case 'em_numero': type=TYPE_INT;break;
        case 'zt_numero': type=TYPE_INT;break;
        case 'zs_numero': type=TYPE_INT;break;
        case 'zl_numero': type=TYPE_INT;break;
        case 'za_pour': type=TYPE_STRING;break;
        case 'za_qui': type=TYPE_INT;break;
        case 'za_champ': type=TYPE_STRING;break;
        case 'fa_numero': type=TYPE_INT;break;
        case 'de_numero': type=TYPE_INT;break;
        case 'pe_numero': type=TYPE_INT;break;
        case 'zg_numero': type=TYPE_INT;break;
        case 'update_time': type=TYPE_DATETIME;break;
        case 'update_user': type=TYPE_STRING;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'table_tache':
    case 'tache':
      switch(champs.toLowerCase()){
        case 'zt_numero': type=TYPE_INT;break;
        case 'zt_libelle': type=TYPE_STRING;break;
        case 'zt_phrase': type=TYPE_STRING;break;
        case 'zt_notes': type=TYPE_STRING;break;
        case 'update_time': type=TYPE_DATETIME;break;
        case 'update_user': type=TYPE_STRING;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'table_typesujet':
    case 'typesujet':
      switch(champs.toLowerCase()){
        case 'zu_numero': type=TYPE_INT;break;
        case 'zu_libelle': type=TYPE_STRING;break;
        case 'zu_notes': type=TYPE_STRING;break;
        case 'update_time': type=TYPE_DATETIME;break;
        case 'update_user': type=TYPE_STRING;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'table_sujet':
    case 'sujet':
      switch(champs.toLowerCase()){
        case 'zs_numero': type=TYPE_INT;break;
        case 'zs_libelle': type=TYPE_STRING;break;
        case 'zu_numero': type=TYPE_INT;break;
        case 'zs_notes': type=TYPE_STRING;break;
        case 'update_time': type=TYPE_DATETIME;break;
        case 'update_user': type=TYPE_STRING;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'table_lieu':
    case 'lieu':
      switch(champs.toLowerCase()){
        case 'zl_numero': type=TYPE_INT;break;
        case 'zl_libelle': type=TYPE_STRING;break;
        case 'zl_notes': type=TYPE_STRING;break;
        case 'update_time': type=TYPE_DATETIME;break;
        case 'update_user': type=TYPE_STRING;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'table_groupe':
    case 'groupe':
      switch(champs.toLowerCase()){
        case 'zg_numero': type=TYPE_INT;break;
        case 'zg_libelle': type=TYPE_STRING;break;
        case 'zg_notes': type=TYPE_STRING;break;
        case 'update_time': type=TYPE_DATETIME;break;
        case 'update_user': type=TYPE_STRING;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
  
    default: 
      type=TYPE_UNDEFINED;
      try{type=gsea_getType(table,champs);} 
      catch(e){type=TYPE_UNDEFINED;};
  }
  return type;
}

/* Renvoie le label d'un attribut */
function mcd_getLabel(table,champs)
{
  var label;
  switch(table.toLowerCase()){
    case 'table_constante':
    case 'constante':
      switch(champs.toLowerCase()){
        case 'cs_numero': label="";break;
        case 'cs_type': label="";break;
        case 'cs_valeur': label="";break;
        default: label="";
      }
      break;
    case 'table_adresse':
    case 'adresse':
      switch(champs.toLowerCase()){
        case 'ad_numero': label="";break;
        case 'ad_type': label="";break;
        case 'cp_numero': label="";break;
        case 'vi_numero': label="";break;
        case 'pe_numero': label="";break;
        case 'ad_active': label="";break;
        case 'ad_addr1': label="";break;
        case 'ad_addr2': label="";break;
        case 'ad_addr3': label="";break;
        case 'ad_datestop': label="";break;
        case 'update_time': label="";break;
        case 'update_user': label="";break;
        default: label="";
      }
      break;
    case 'table_canton':
    case 'canton':
      switch(champs.toLowerCase()){
        case 'ct_numero': label="";break;
        case 'ct_nom': label="";break;
        case 'update_time': label="";break;
        case 'update_user': label="";break;
        default: label="";
      }
      break;
    case 'table_appartienta':
    case 'appartienta':
      switch(champs.toLowerCase()){
        case 'ct_numero': label="";break;
        case 'gc_numero': label="";break;
        case 'update_time': label="";break;
        case 'update_user': label="";break;
        default: label="";
      }
      break;
    case 'table_groupecanton':
    case 'groupecanton':
      switch(champs.toLowerCase()){
        case 'gc_numero': label="";break;
        case 'gc_nom': label="";break;
        case 'update_time': label="";break;
        case 'update_user': label="";break;
        default: label="";
      }
      break;
    case 'table_codepostal':
    case 'codepostal':
      switch(champs.toLowerCase()){
        case 'cp_numero': label="";break;
        case 'cp_codepostal': label="";break;
        case 'cp_bureau': label="";break;
        case 'update_time': label="";break;
        case 'update_user': label="";break;
        default: label="";
      }
      break;
    case 'table_villecp':
    case 'villecp':
      switch(champs.toLowerCase()){
        case 'vi_numero': label="";break;
        case 'cp_numero': label="";break;
        case 'update_time': label="";break;
        case 'update_user': label="";break;
        default: label="";
      }
      break;
    case 'table_ville':
    case 'ville':
      switch(champs.toLowerCase()){
        case 'vi_numero': label="";break;
        case 'vi_nom': label="";break;
        case 'ct_numero': label="";break;
        case 'update_time': label="";break;
        case 'update_user': label="";break;
        default: label="";
      }
      break;
    case 'table_contact':
    case 'contact':
      switch(champs.toLowerCase()){
        case 'cn_numero': label="";break;
        case 'cn_coordonnee': label="";break;
        case 'cn_type': label="";break;
        case 'update_time': label="";break;
        case 'update_user': label="";break;
        default: label="";
      }
      break;
    case 'table_estjoignable':
    case 'estjoignable':
      switch(champs.toLowerCase()){
        case 'ej_numero': label="";break;
        case 'pe_numero': label="";break;
        case 'cn_numero': label="";break;
        case 'ej_actif': label="";break;
        case 'update_time': label="";break;
        case 'update_user': label="";break;
        default: label="";
      }
      break;
    case 'table_typelien':
    case 'typelien':
      switch(champs.toLowerCase()){
        case 'tl_numero': label="";break;
        case 'tl_libelle': label="";break;
        case 'tl_description': label="";break;
        case 'update_time': label="";break;
        case 'update_user': label="";break;
        default: label="";
      }
      break;
    case 'table_estlie':
    case 'estlie':
      switch(champs.toLowerCase()){
        case 'el_personne1': label="";break;
        case 'el_personne2': label="";break;
        case 'el_actif': label="";break;
        case 'tl_numero': label="";break;
        case 'el_debut': label="";break;
        case 'el_fin': label="";break;
        case 'update_time': label="";break;
        case 'update_user': label="";break;
        default: label="";
      }
      break;
    case 'table_etatpersonne':
    case 'etatpersonne':
      switch(champs.toLowerCase()){
        case 'ep_numero': label="";break;
        case 'ep_libelle': label="";break;
        case 'update_time': label="";break;
        case 'update_user': label="";break;
        default: label="";
      }
      break;
    case 'table_personne':
    case 'personne':
      switch(champs.toLowerCase()){
        case 'pe_numero': label="";break;
        case 'tp_numero': label="";break;
        case 'pe_titre': label="";break;
        case 'pe_nom': label="";break;
        case 'pe_regimefiscal': label="";break;
        case 'ep_numero': label="";break;
        case 'pe_morale': label="";break;
        case 'pe_prenom': label="";break;
        case 'pe_complement': label="";break;
        case 'pe_naissance': label="";break;
        case 'update_time': label="";break;
        case 'update_user': label="";break;
        default: label="";
      }
      break;
    case 'table_personneupdate':
    case 'personneupdate':
      switch(champs.toLowerCase()){
        case 'pu_numero': label="";break;
        case 'pu_action': label="";break;
        case 'pu_bilan': label="";break;
        case 'pe_numero': label="";break;
        case 'tp_numero': label="";break;
        case 'pe_titre': label="";break;
        case 'pe_nom': label="";break;
        case 'pe_regimefiscal': label="";break;
        case 'ep_numero': label="";break;
        case 'pe_morale': label="";break;
        case 'pe_prenom': label="";break;
        case 'pe_complement': label="";break;
        case 'pe_naissance': label="";break;
        case 'update_time': label="";break;
        case 'update_user': label="";break;
        default: label="";
      }
      break;
    case 'table_estresponsable':
    case 'estresponsable':
      switch(champs.toLowerCase()){
        case 'peac_numero': label="";break;
        case 'pe_numero': label="";break;
        case 're_numero': label="";break;
        case 'peac_periodedebut': label="";break;
        case 'peac_periodefin': label="";break;
        case 'peac_titre': label="";break;
        case 'peac_fini': label="";break;
        case 'update_time': label="";break;
        case 'update_user': label="";break;
        default: label="";
      }
      break;
    case 'table_responsabilite':
    case 'responsabilite':
      switch(champs.toLowerCase()){
        case 're_numero': label="";break;
        case 're_code': label="";break;
        case 're_nom': label="";break;
        case 're_famille': label="";break;
        case 'update_time': label="";break;
        case 'update_user': label="";break;
        default: label="";
      }
      break;
    case 'table_attribut':
    case 'attribut':
      switch(champs.toLowerCase()){
        case 'at_numero': label="";break;
        case 'pe_numero': label="";break;
        case 'ta_numero': label="";break;
        case 'cr_numero': label="";break;
        case 'at_valeur': label="";break;
        case 'update_time': label="";break;
        case 'update_user': label="";break;
        default: label="";
      }
      break;
    case 'table_typeattribut':
    case 'typeattribut':
      switch(champs.toLowerCase()){
        case 'ta_numero': label="";break;
        case 'ta_nom': label="";break;
        case 'update_time': label="";break;
        case 'update_user': label="";break;
        default: label="";
      }
      break;
    case 'table_categorie':
    case 'categorie':
      switch(champs.toLowerCase()){
        case 'cr_numero': label="";break;
        case 'cr_libelle': label="";break;
        case 'ta_numero': label="";break;
        case 'cr_description': label="";break;
        case 'update_time': label="";break;
        case 'update_user': label="";break;
        default: label="";
      }
      break;
    case 'table_tva':
    case 'tva':
      switch(champs.toLowerCase()){
        case 'tv_numero': label="";break;
        case 'tv_code': label="";break;
        case 'tv_taux': label="";break;
        case 'tv_actif': label="";break;
        case 'so_numero': label="";break;
        case 'cg_numero': label="";break;
        case 'update_time': label="";break;
        case 'update_user': label="";break;
        default: label="";
      }
      break;
    case 'table_typepersonne':
    case 'typepersonne':
      switch(champs.toLowerCase()){
        case 'tp_numero': label="";break;
        case 'tp_type': label="";break;
        case 'update_time': label="";break;
        case 'update_user': label="";break;
        default: label="";
      }
      break;
    case 'table_typetache':
    case 'typetache':
      switch(champs.toLowerCase()){
        case 'th_numero': label="";break;
        case 'th_libelle': label="";break;
        case 'th_description': label="";break;
        case 'update_time': label="";break;
        case 'update_user': label="";break;
        default: label="";
      }
      break;
    case 'table_appel':
    case 'appel':
      switch(champs.toLowerCase()){
        case 'ap_numero': label="";break;
        case 'ap_libelle': label="";break;
        case 'th_numero': label="";break;
        case 'ap_date': label="";break;
        case 'ap_description': label="";break;
        case 'ap_duree': label="";break;
        case 'pe_numero': label="";break;
        case 'update_time': label="";break;
        case 'update_user': label="";break;
        default: label="";
      }
      break;
    case 'table_societe':
    case 'societe':
      switch(champs.toLowerCase()){
        case 'so_numero': label="";break;
        case 'so_libelle': label="";break;
        case 'so_abbrev': label="";break;
        case 'pe_numero': label="";break;
        case 'so_detail': label="";break;
        case 'so_sequence': label="";break;
        case 'ts_numero': label="";break;
        case 'update_time': label="";break;
        case 'update_user': label="";break;
        default: label="";
      }
      break;
    case 'table_typesociete':
    case 'typesociete':
      switch(champs.toLowerCase()){
        case 'ts_numero': label="";break;
        case 'ts_libelle': label="";break;
        case 'update_time': label="";break;
        case 'update_user': label="";break;
        default: label="";
      }
      break;
    case 'table_classe':
    case 'classe':
      switch(champs.toLowerCase()){
        case 'cl_numero': label="";break;
        case 'cl_nom': label="";break;
        case 'cl_represente': label="";break;
        case 'cl_libelle': label="";break;
        case 'cl_societe': label="";break;
        case 'cl_mere': label="";break;
        case 'cl_ordre': label="";break;
        case 'cl_assoc': label="";break;
        case 'update_time': label="";break;
        case 'update_user': label="";break;
        default: label="";
      }
      break;
    case 'table_propriete':
    case 'propriete':
      switch(champs.toLowerCase()){
        case 'pr_numero': label="";break;
        case 'pr_classe': label="";break;
        case 'pr_type': label="";break;
        case 'pr_nom': label="";break;
        case 'pr_libelle': label="";break;
        case 'pr_obligatoire': label="";break;
        case 'pr_colonne': label="";break;
        case 'pr_colesclave': label="";break;
        case 'pr_ordre': label="";break;
        case 'update_time': label="";break;
        case 'update_user': label="";break;
        default: label="";
      }
      break;
    case 'table_typepropriete':
    case 'typepropriete':
      switch(champs.toLowerCase()){
        case 'tr_numero': label="";break;
        case 'tr_libelle': label="";break;
        case 'tr_sql': label="";break;
        case 'tr_systeme': label="";break;
        case 'tr_estclef': label="";break;
        case 'tr_liste': label="";break;
        case 'tr_code': label="";break;
        case 'tr_classe': label="";break;
        case 'update_time': label="";break;
        case 'update_user': label="";break;
        default: label="";
      }
      break;
    case 'table_colonnetype':
    case 'colonnetype':
      switch(champs.toLowerCase()){
        case 'cy_numero': label="";break;
        case 'cy_typepropriete': label="";break;
        case 'cy_libelle': label="";break;
        case 'cy_nom': label="";break;
        case 'cy_estclef': label="";break;
        case 'cy_ordre': label="";break;
        case 'update_time': label="";break;
        case 'update_user': label="";break;
        default: label="";
      }
      break;
    case 'table_listechoix':
    case 'listechoix':
      switch(champs.toLowerCase()){
        case 'lc_numero': label="";break;
        case 'lc_typepropriete': label="";break;
        case 'lc_libelle': label="";break;
        case 'update_time': label="";break;
        case 'update_user': label="";break;
        default: label="";
      }
      break;
    case 'table_adherence':
    case 'adherence':
      switch(champs.toLowerCase()){
        case 'ah_numero': label="";break;
        case 'pd_numero': label="";break;
        case 'ah_libelle': label="";break;
        case 'ah_reduction': label="";break;
        case 'ah_quantite': label="";break;
        case 'update_time': label="";break;
        case 'update_user': label="";break;
        default: label="";
      }
      break;
    case 'table_periodeadherence':
    case 'periodeadherence':
      switch(champs.toLowerCase()){
        case 'po_numero': label="";break;
        case 'ah_numero': label="";break;
        case 'update_time': label="";break;
        case 'update_user': label="";break;
        default: label="";
      }
      break;
    case 'table_adhesion':
    case 'adhesion':
      switch(champs.toLowerCase()){
        case 'as_numero': label="";break;
        case 'as_reductionmax': label="";break;
        case 'pe_numero': label="";break;
        case 'po_numero': label="";break;
        case 'ah_numero': label="";break;
        case 'update_time': label="";break;
        case 'update_user': label="";break;
        default: label="";
      }
      break;
    case 'table_periode':
    case 'periode':
      switch(champs.toLowerCase()){
        case 'po_numero': label="";break;
        case 'po_debut': label="";break;
        case 'po_fin': label="";break;
        case 'update_time': label="";break;
        case 'update_user': label="";break;
        default: label="";
      }
      break;
    case 'table_observation':
    case 'observation':
      switch(champs.toLowerCase()){
        case 'ob_numero': label="";break;
        case 'pe_numero': label="";break;
        case 'ob_observation': label="";break;
        case 'ob_niveau': label="";break;
        case 'update_time': label="";break;
        case 'update_user': label="";break;
        default: label="";
      }
      break;
    case 'table_prix':
    case 'prix':
      switch(champs.toLowerCase()){
        case 'px_numero': label="";break;
        case 'tv_numero': label="";break;
        case 'pd_numero': label="";break;
        case 'px_tarifht': label="";break;
        case 'px_tarifttc': label="";break;
        case 'px_actif': label="";break;
        case 'px_datedebut': label="";break;
        case 'update_time': label="";break;
        case 'update_user': label="";break;
        default: label="";
      }
      break;
    case 'table_typejournal':
    case 'typejournal':
      switch(champs.toLowerCase()){
        case 'tj_numero': label="";break;
        case 'tj_libelle': label="";break;
        case 'update_time': label="";break;
        case 'update_user': label="";break;
        default: label="";
      }
      break;
    case 'table_modele':
    case 'modele':
      switch(champs.toLowerCase()){
        case 'mo_numero': label="";break;
        case 'mo_libelle': label="";break;
        case 'so_numero': label="";break;
        default: label="";
      }
      break;
    case 'table_lignemodele':
    case 'lignemodele':
      switch(champs.toLowerCase()){
        case 'lm_numero': label="";break;
        case 'pd_numero': label="";break;
        case 'mo_numero': label="";break;
        case 'lm_quantite': label="";break;
        case 'lm_montantht': label="";break;
        case 'lm_montantttc': label="";break;
        case 'update_time': label="";break;
        case 'update_user': label="";break;
        default: label="";
      }
      break;
    case 'table_produit':
    case 'produit':
      switch(champs.toLowerCase()){
        case 'pd_libelle': label="";break;
        case 'pd_numero': label="";break;
        case 'jo_numero': label="";break;
        case 'so_numero': label="";break;
        case 'pd_actif': label="";break;
        case 'pd_sansquantite': label="";break;
        case 'pd_reduction': label="";break;
        case 'update_time': label="";break;
        case 'update_user': label="";break;
        default: label="";
      }
      break;
    case 'table_ligne':
    case 'ligne':
      switch(champs.toLowerCase()){
        case 'l_numero': label="";break;
        case 'pd_numero': label="";break;
        case 'de_numero': label="";break;
        case 'l_quantite': label="";break;
        case 'l_montantht': label="";break;
        case 'l_montantttc': label="";break;
        case 'px_numero': label="";break;
        case 'l_notes': label="";break;
        case 'update_time': label="";break;
        case 'update_user': label="";break;
        default: label="";
      }
      break;
    case 'table_devis':
    case 'devis':
      switch(champs.toLowerCase()){
        case 'de_numero': label="";break;
        case 'pe_numero': label="";break;
        case 'de_date': label="";break;
        case 'de_libelle': label="";break;
        case 'de_reduction': label="";break;
        case 'de_montantht': label="";break;
        case 'de_montantttc': label="";break;
        case 'em_numero': label="";break;
        case 'de_locked': label="";break;
        case 'de_acompte': label="";break;
        case 'de_lettre': label="";break;
        case 'de_civilites': label="";break;
        case 'de_introduction': label="";break;
        case 'update_time': label="";break;
        case 'update_user': label="";break;
        default: label="";
      }
      break;
    case 'table_lignefacture':
    case 'lignefacture':
      switch(champs.toLowerCase()){
        case 'lf_numero': label="";break;
        case 'fa_numero': label="";break;
        case 'px_numero': label="";break;
        case 'pd_numero': label="";break;
        case 'lf_quantite': label="";break;
        case 'lf_montantht': label="";break;
        case 'lf_montantttc': label="";break;
        case 'update_time': label="";break;
        case 'update_user': label="";break;
        default: label="";
      }
      break;
    case 'table_facture':
    case 'facture':
      switch(champs.toLowerCase()){
        case 'fa_numero': label="";break;
        case 'de_numero': label="";break;
        case 'pe_numero': label="";break;
        case 'ag_numero': label="";break;
        case 'fa_numfact': label="";break;
        case 'fa_date': label="";break;
        case 'fa_reduction': label="";break;
        case 'fa_montantht': label="";break;
        case 'fa_montantttc': label="";break;
        case 'fa_accompte': label="";break;
        case 'fa_annotation': label="";break;
        case 'fa_libelle': label="";break;
        case 'so_numero': label="";break;
        case 'update_time': label="";break;
        case 'update_user': label="";break;
        default: label="";
      }
      break;
    case 'table_ligneavoir':
    case 'ligneavoir':
      switch(champs.toLowerCase()){
        case 'la_numero': label="";break;
        case 'pd_numero': label="";break;
        case 'av_numero': label="";break;
        case 'px_numero': label="";break;
        case 'la_quantite': label="";break;
        case 'la_montantht': label="";break;
        case 'la_montantttc': label="";break;
        case 'update_time': label="";break;
        case 'update_user': label="";break;
        default: label="";
      }
      break;
    case 'table_avoir':
    case 'avoir':
      switch(champs.toLowerCase()){
        case 'av_numero': label="";break;
        case 'fa_numero': label="";break;
        case 'av_numfact': label="";break;
        case 'av_date': label="";break;
        case 'av_montantht': label="";break;
        case 'av_montantttc': label="";break;
        case 'av_reduction': label="";break;
        case 'update_time': label="";break;
        case 'update_user': label="";break;
        default: label="";
      }
      break;
    case 'table_routage':
    case 'routage':
      switch(champs.toLowerCase()){
        case 'ro_numero': label="";break;
        case 'ad_numero': label="";break;
        case 'pe_numero': label="";break;
        case 'ro_debutservice': label="";break;
        case 'ro_finservice': label="";break;
        case 'ro_quantite': label="";break;
        case 'ro_suspendu': label="";break;
        case 'ro_dernierroute': label="";break;
        case 'fa_numero': label="";break;
        case 'update_time': label="";break;
        case 'update_user': label="";break;
        default: label="";
      }
      break;
    case 'table_service':
    case 'service':
      switch(champs.toLowerCase()){
        case 'se_numero': label="";break;
        case 'se_nom': label="";break;
        case 'se_societe': label="";break;
        case 'se_agent': label="";break;
        case 'update_time': label="";break;
        case 'update_user': label="";break;
        default: label="";
      }
      break;
    case 'table_employe':
    case 'employe':
      switch(champs.toLowerCase()){
        case 'em_numero': label="";break;
        case 'dp_numero': label="";break;
        case 'em_emploi': label="";break;
        case 'em_service': label="";break;
        case 'em_agent': label="";break;
        case 'em_login': label="";break;
        case 'em_acces': label="";break;
        case 'em_password': label="";break;
        case 'em_super': label="";break;
        case 'update_time': label="";break;
        case 'update_user': label="";break;
        default: label="";
      }
      break;
    case 'table_agent':
    case 'agent':
      switch(champs.toLowerCase()){
        case 'ag_numero': label="";break;
        case 'ag_nom': label="";break;
        case 'ag_prenom': label="";break;
        case 'ag_initiales': label="";break;
        case 'ag_actif': label="";break;
        case 'eq_numero': label="";break;
        case 'ag_role': label="";break;
        case 'ag_telephone': label="";break;
        case 'ag_mobile': label="";break;
        case 'ag_email': label="";break;
        case 'ag_commentaire': label="";break;
        case 'update_time': label="";break;
        case 'update_user': label="";break;
        default: label="";
      }
      break;
    case 'table_equipe':
    case 'equipe':
      switch(champs.toLowerCase()){
        case 'eq_numero': label="";break;
        case 'eq_nom': label="";break;
        case 'update_time': label="";break;
        case 'update_user': label="";break;
        default: label="";
      }
      break;
    case 'table_exercice':
    case 'exercice':
      switch(champs.toLowerCase()){
        case 'ex_numero': label="";break;
        case 'so_numero': label="";break;
        case 'ex_datedebut': label="";break;
        case 'ex_datefin': label="";break;
        case 'ex_cloture': label="";break;
        case 'ex_password': label="";break;
        case 'ex_compteattente': label="";break;
        case 'ex_actif': label="";break;
        case 'update_time': label="";break;
        case 'update_user': label="";break;
        default: label="";
      }
      break;
    case 'table_journal':
    case 'journal':
      switch(champs.toLowerCase()){
        case 'jo_numero': label="";break;
        case 'jo_abbrev': label="";break;
        case 'jo_libelle': label="";break;
        case 'jo_debit': label="";break;
        case 'jo_credit': label="";break;
        case 'so_numero': label="";break;
        case 'tj_numero': label="";break;
        case 'cg_numero': label="";break;
        case 'jo_mois': label="";break;
        case 'jo_annee': label="";break;
        case 'jo_contrepartie': label="";break;
        case 'jo_provisoire': label="";break;
        case 'jo_visible': label="";break;
        case 'jo_sequence': label="";break;
        case 'update_time': label="";break;
        case 'update_user': label="";break;
        default: label="";
      }
      break;
    case 'table_piece':
    case 'piece':
      switch(champs.toLowerCase()){
        case 'pi_numero': label="";break;
        case 'jo_numero': label="";break;
        case 'pi_numpiece': label="";break;
        case 'ex_numero': label="";break;
        case 'pi_libelle': label="";break;
        case 'pi_debit': label="";break;
        case 'pi_credit': label="";break;
        case 'pi_date': label="";break;
        case 'pi_numseq': label="";break;
        case 'update_time': label="";break;
        case 'update_user': label="";break;
        default: label="";
      }
      break;
    case 'table_ecriture':
    case 'ecriture':
      switch(champs.toLowerCase()){
        case 'ec_numero': label="";break;
        case 'ec_numecriture': label="";break;
        case 'pi_numero': label="";break;
        case 'ex_numero': label="";break;
        case 'cg_numero': label="";break;
        case 'ca_numero': label="";break;
        case 'ec_aux': label="";break;
        case 'pf_numero': label="";break;
        case 'ec_compte': label="";break;
        case 'ec_libelle': label="";break;
        case 'ec_debit': label="";break;
        case 'ec_credit': label="";break;
        case 'pt_numero': label="";break;
        case 'av_numero': label="";break;
        case 'lt_numero': label="";break;
        case 'db_numero': label="";break;
        case 'rg_numero': label="";break;
        case 'fa_numero': label="";break;
        case 'update_time': label="";break;
        case 'update_user': label="";break;
        default: label="";
      }
      break;
    case 'table_comptegen':
    case 'comptegen':
      switch(champs.toLowerCase()){
        case 'cg_numero': label="";break;
        case 'cg_numcompte': label="";break;
        case 'cg_libelle': label="";break;
        case 'ac_numero': label="";break;
        case 'cg_accepteaux': label="";break;
        case 'cg_utilisable': label="";break;
        case 'cg_lettrable': label="";break;
        case 'cg_pointable': label="";break;
        case 'so_numero': label="";break;
        case 'cg_groupable': label="";break;
        case 'cg_debit': label="";break;
        case 'update_time': label="";break;
        case 'update_user': label="";break;
        default: label="";
      }
      break;
    case 'table_compteproduit':
    case 'compteproduit':
      switch(champs.toLowerCase()){
        case 'ci_numero': label="";break;
        case 'pd_numero': label="";break;
        case 'cg_numero': label="";break;
        case 'ci_actif': label="";break;
        case 'update_time': label="";break;
        case 'update_user': label="";break;
        default: label="";
      }
      break;
    case 'table_compteaux':
    case 'compteaux':
      switch(champs.toLowerCase()){
        case 'ca_numero': label="";break;
        case 'cg_numero': label="";break;
        case 'ca_numcompte': label="";break;
        case 'ca_libelle': label="";break;
        case 'ac_numero': label="";break;
        case 'ca_debit': label="";break;
        case 'update_time': label="";break;
        case 'update_user': label="";break;
        default: label="";
      }
      break;
    case 'table_acces':
    case 'acces':
      switch(champs.toLowerCase()){
        case 'ac_numero': label="";break;
        case 'ac_libelle': label="";break;
        case 'ac_niveau': label="";break;
        case 'update_time': label="";break;
        case 'update_user': label="";break;
        default: label="";
      }
      break;
    case 'table_pointage':
    case 'pointage':
      switch(champs.toLowerCase()){
        case 'pt_numero': label="";break;
        case 'pt_date': label="";break;
        case 'pt_releve': label="";break;
        case 'pt_debit': label="";break;
        case 'pt_credit': label="";break;
        case 'update_time': label="";break;
        case 'update_user': label="";break;
        case 'so_numero': label="";break;
        default: label="";
      }
      break;
    case 'table_lettrage':
    case 'lettrage':
      switch(champs.toLowerCase()){
        case 'lt_numero': label="";break;
        case 'lt_lettre': label="";break;
        case 'update_time': label="";break;
        case 'update_user': label="";break;
        case 'so_numero': label="";break;
        default: label="";
      }
      break;
    case 'table_prefixe':
    case 'prefixe':
      switch(champs.toLowerCase()){
        case 'pf_numero': label="";break;
        case 'pf_nom': label="";break;
        case 'update_time': label="";break;
        case 'update_user': label="";break;
        default: label="";
      }
      break;
    case 'table_facturereglement':
    case 'facturereglement':
      switch(champs.toLowerCase()){
        case 'fr_numero': label="";break;
        case 'rg_numero': label="";break;
        case 'fa_numero': label="";break;
        case 'fr_acompte': label="";break;
        case 'fr_partiel': label="";break;
        case 'fr_montant': label="";break;
        case 'update_time': label="";break;
        case 'update_user': label="";break;
        default: label="";
      }
      break;
    case 'table_modereglement':
    case 'modereglement':
      switch(champs.toLowerCase()){
        case 'mr_numero': label="";break;
        case 'mr_libelle': label="";break;
        case 'cg_numero': label="";break;
        case 'so_numero': label="";break;
        case 'mr_actif': label="";break;
        case 'mr_description': label="";break;
        case 'update_time': label="";break;
        case 'update_user': label="";break;
        default: label="";
      }
      break;
    case 'table_reglement':
    case 'reglement':
      switch(champs.toLowerCase()){
        case 'rg_numero': label="";break;
        case 'pe_numero': label="";break;
        case 'rg_montant': label="";break;
        case 'rg_date': label="";break;
        case 'mr_numero': label="";break;
        case 'so_numero': label="";break;
        case 'rg_encompta': label="";break;
        case 'rg_libellebanque': label="";break;
        case 'rg_numerocompte': label="";break;
        case 'rg_reference': label="";break;
        case 'update_time': label="";break;
        case 'update_user': label="";break;
        default: label="";
      }
      break;
    case 'table_moderepartition':
    case 'moderepartition':
      switch(champs.toLowerCase()){
        case 'mp_numero': label="";break;
        case 'mp_libelle': label="";break;
        case 'cg_numero': label="";break;
        case 'so_numero': label="";break;
        case 'mp_actif': label="";break;
        case 'mp_societe': label="";break;
        case 'mp_description': label="";break;
        case 'update_time': label="";break;
        case 'update_user': label="";break;
        default: label="";
      }
      break;
    case 'table_repartition':
    case 'repartition':
      switch(champs.toLowerCase()){
        case 'rp_numero': label="";break;
        case 'rg_numero': label="";break;
        case 'mp_numero': label="";break;
        case 'rp_montant': label="";break;
        case 'update_time': label="";break;
        case 'update_user': label="";break;
        default: label="";
      }
      break;
    case 'table_impression':
    case 'impression':
      switch(champs.toLowerCase()){
        case 'im_numero': label="";break;
        case 'im_libelle': label="";break;
        case 'im_nom': label="";break;
        case 'im_societe': label="";break;
        case 'im_modele': label="";break;
        case 'im_defaut': label="";break;
        case 'im_keytable': label="";break;
        case 'im_keycle': label="";break;
        case 'im_keydate': label="";break;
        case 'update_time': label="";break;
        case 'update_user': label="";break;
        default: label="";
      }
      break;
    case 'table_groupetable':
    case 'groupetable':
      switch(champs.toLowerCase()){
        case 'gt_numero': label="";break;
        case 'gt_libelle': label="";break;
        case 'gt_tables': label="";break;
        case 'update_time': label="";break;
        case 'update_user': label="";break;
        default: label="";
      }
      break;
    case 'table_droit':
    case 'droit':
      switch(champs.toLowerCase()){
        case 'dr_numero': label="";break;
        case 'dp_numero': label="";break;
        case 'gt_numero': label="";break;
        case 'dr_select': label="";break;
        case 'dr_insert': label="";break;
        case 'dr_update': label="";break;
        case 'dr_delete': label="";break;
        case 'update_time': label="";break;
        case 'update_user': label="";break;
        default: label="";
      }
      break;
    case 'table_droitprofil':
    case 'droitprofil':
      switch(champs.toLowerCase()){
        case 'dp_numero': label="";break;
        case 'dp_libelle': label="";break;
        case 'dp_notes': label="";break;
        case 'update_time': label="";break;
        case 'update_user': label="";break;
        default: label="";
      }
      break;
    case 'table_activite':
    case 'activite':
      switch(champs.toLowerCase()){
        case 'za_numero': label="";break;
        case 'za_heuredebut': label="";break;
        case 'za_heurefin': label="";break;
        case 'za_date': label="";break;
        case 'za_duree': label="";break;
        case 'em_numero': label="";break;
        case 'zt_numero': label="";break;
        case 'zs_numero': label="";break;
        case 'zl_numero': label="";break;
        case 'za_pour': label="";break;
        case 'za_qui': label="";break;
        case 'za_champ': label="";break;
        case 'fa_numero': label="";break;
        case 'de_numero': label="";break;
        case 'pe_numero': label="";break;
        case 'zg_numero': label="";break;
        case 'update_time': label="";break;
        case 'update_user': label="";break;
        default: label="";
      }
      break;
    case 'table_tache':
    case 'tache':
      switch(champs.toLowerCase()){
        case 'zt_numero': label="";break;
        case 'zt_libelle': label="";break;
        case 'zt_phrase': label="";break;
        case 'zt_notes': label="";break;
        case 'update_time': label="";break;
        case 'update_user': label="";break;
        default: label="";
      }
      break;
    case 'table_typesujet':
    case 'typesujet':
      switch(champs.toLowerCase()){
        case 'zu_numero': label="";break;
        case 'zu_libelle': label="";break;
        case 'zu_notes': label="";break;
        case 'update_time': label="";break;
        case 'update_user': label="";break;
        default: label="";
      }
      break;
    case 'table_sujet':
    case 'sujet':
      switch(champs.toLowerCase()){
        case 'zs_numero': label="";break;
        case 'zs_libelle': label="";break;
        case 'zu_numero': label="";break;
        case 'zs_notes': label="";break;
        case 'update_time': label="";break;
        case 'update_user': label="";break;
        default: label="";
      }
      break;
    case 'table_lieu':
    case 'lieu':
      switch(champs.toLowerCase()){
        case 'zl_numero': label="";break;
        case 'zl_libelle': label="";break;
        case 'zl_notes': label="";break;
        case 'update_time': label="";break;
        case 'update_user': label="";break;
        default: label="";
      }
      break;
    case 'table_groupe':
    case 'groupe':
      switch(champs.toLowerCase()){
        case 'zg_numero': label="";break;
        case 'zg_libelle': label="";break;
        case 'zg_notes': label="";break;
        case 'update_time': label="";break;
        case 'update_user': label="";break;
        default: label="";
      }
      break;
  
    default: label="";
  }
  return label;
}

/* Renvoie si c'est obligatoire de renseigner le champs */
function mcd_obligatoire(table,champs)
{
  var obligatoire;
  switch(table.toLowerCase()){
    case 'table_constante':
    case 'constante':
      switch(champs.toLowerCase()){
        case 'cs_numero': obligatoire=true;break;
        case 'cs_type': obligatoire=true;break;
        case 'cs_valeur': obligatoire=true;break;
        default: obligatoire=false;
      }
      break;
    case 'table_adresse':
    case 'adresse':
      switch(champs.toLowerCase()){
        case 'ad_numero': obligatoire=true;break;
        case 'ad_type': obligatoire=true;break;
        case 'cp_numero': obligatoire=true;break;
        case 'vi_numero': obligatoire=true;break;
        case 'pe_numero': obligatoire=true;break;
        case 'ad_active': obligatoire=true;break;
        case 'ad_addr1': obligatoire=true;break;
        case 'ad_addr2': obligatoire=false;break;
        case 'ad_addr3': obligatoire=false;break;
        case 'ad_datestop': obligatoire=false;break;
        case 'update_time': obligatoire=false;break;
        case 'update_user': obligatoire=false;break;
        default: obligatoire=false;
      }
      break;
    case 'table_canton':
    case 'canton':
      switch(champs.toLowerCase()){
        case 'ct_numero': obligatoire=true;break;
        case 'ct_nom': obligatoire=true;break;
        case 'update_time': obligatoire=false;break;
        case 'update_user': obligatoire=false;break;
        default: obligatoire=false;
      }
      break;
    case 'table_appartienta':
    case 'appartienta':
      switch(champs.toLowerCase()){
        case 'ct_numero': obligatoire=true;break;
        case 'gc_numero': obligatoire=true;break;
        case 'update_time': obligatoire=false;break;
        case 'update_user': obligatoire=false;break;
        default: obligatoire=false;
      }
      break;
    case 'table_groupecanton':
    case 'groupecanton':
      switch(champs.toLowerCase()){
        case 'gc_numero': obligatoire=true;break;
        case 'gc_nom': obligatoire=true;break;
        case 'update_time': obligatoire=false;break;
        case 'update_user': obligatoire=false;break;
        default: obligatoire=false;
      }
      break;
    case 'table_codepostal':
    case 'codepostal':
      switch(champs.toLowerCase()){
        case 'cp_numero': obligatoire=true;break;
        case 'cp_codepostal': obligatoire=true;break;
        case 'cp_bureau': obligatoire=false;break;
        case 'update_time': obligatoire=false;break;
        case 'update_user': obligatoire=false;break;
        default: obligatoire=false;
      }
      break;
    case 'table_villecp':
    case 'villecp':
      switch(champs.toLowerCase()){
        case 'vi_numero': obligatoire=true;break;
        case 'cp_numero': obligatoire=true;break;
        case 'update_time': obligatoire=false;break;
        case 'update_user': obligatoire=false;break;
        default: obligatoire=false;
      }
      break;
    case 'table_ville':
    case 'ville':
      switch(champs.toLowerCase()){
        case 'vi_numero': obligatoire=true;break;
        case 'vi_nom': obligatoire=true;break;
        case 'ct_numero': obligatoire=false;break;
        case 'update_time': obligatoire=false;break;
        case 'update_user': obligatoire=false;break;
        default: obligatoire=false;
      }
      break;
    case 'table_contact':
    case 'contact':
      switch(champs.toLowerCase()){
        case 'cn_numero': obligatoire=true;break;
        case 'cn_coordonnee': obligatoire=true;break;
        case 'cn_type': obligatoire=true;break;
        case 'update_time': obligatoire=false;break;
        case 'update_user': obligatoire=false;break;
        default: obligatoire=false;
      }
      break;
    case 'table_estjoignable':
    case 'estjoignable':
      switch(champs.toLowerCase()){
        case 'ej_numero': obligatoire=true;break;
        case 'pe_numero': obligatoire=true;break;
        case 'cn_numero': obligatoire=true;break;
        case 'ej_actif': obligatoire=true;break;
        case 'update_time': obligatoire=false;break;
        case 'update_user': obligatoire=false;break;
        default: obligatoire=false;
      }
      break;
    case 'table_typelien':
    case 'typelien':
      switch(champs.toLowerCase()){
        case 'tl_numero': obligatoire=true;break;
        case 'tl_libelle': obligatoire=true;break;
        case 'tl_description': obligatoire=false;break;
        case 'update_time': obligatoire=false;break;
        case 'update_user': obligatoire=false;break;
        default: obligatoire=false;
      }
      break;
    case 'table_estlie':
    case 'estlie':
      switch(champs.toLowerCase()){
        case 'el_personne1': obligatoire=true;break;
        case 'el_personne2': obligatoire=true;break;
        case 'el_actif': obligatoire=true;break;
        case 'tl_numero': obligatoire=false;break;
        case 'el_debut': obligatoire=false;break;
        case 'el_fin': obligatoire=false;break;
        case 'update_time': obligatoire=false;break;
        case 'update_user': obligatoire=false;break;
        default: obligatoire=false;
      }
      break;
    case 'table_etatpersonne':
    case 'etatpersonne':
      switch(champs.toLowerCase()){
        case 'ep_numero': obligatoire=true;break;
        case 'ep_libelle': obligatoire=true;break;
        case 'update_time': obligatoire=false;break;
        case 'update_user': obligatoire=false;break;
        default: obligatoire=false;
      }
      break;
    case 'table_personne':
    case 'personne':
      switch(champs.toLowerCase()){
        case 'pe_numero': obligatoire=true;break;
        case 'tp_numero': obligatoire=true;break;
        case 'pe_titre': obligatoire=false;break;
        case 'pe_nom': obligatoire=true;break;
        case 'pe_regimefiscal': obligatoire=true;break;
        case 'ep_numero': obligatoire=false;break;
        case 'pe_morale': obligatoire=true;break;
        case 'pe_prenom': obligatoire=false;break;
        case 'pe_complement': obligatoire=false;break;
        case 'pe_naissance': obligatoire=false;break;
        case 'update_time': obligatoire=false;break;
        case 'update_user': obligatoire=false;break;
        default: obligatoire=false;
      }
      break;
    case 'table_personneupdate':
    case 'personneupdate':
      switch(champs.toLowerCase()){
        case 'pu_numero': obligatoire=true;break;
        case 'pu_action': obligatoire=false;break;
        case 'pu_bilan': obligatoire=false;break;
        case 'pe_numero': obligatoire=true;break;
        case 'tp_numero': obligatoire=true;break;
        case 'pe_titre': obligatoire=true;break;
        case 'pe_nom': obligatoire=true;break;
        case 'pe_regimefiscal': obligatoire=true;break;
        case 'ep_numero': obligatoire=false;break;
        case 'pe_morale': obligatoire=true;break;
        case 'pe_prenom': obligatoire=false;break;
        case 'pe_complement': obligatoire=false;break;
        case 'pe_naissance': obligatoire=false;break;
        case 'update_time': obligatoire=false;break;
        case 'update_user': obligatoire=false;break;
        default: obligatoire=false;
      }
      break;
    case 'table_estresponsable':
    case 'estresponsable':
      switch(champs.toLowerCase()){
        case 'peac_numero': obligatoire=true;break;
        case 'pe_numero': obligatoire=true;break;
        case 're_numero': obligatoire=true;break;
        case 'peac_periodedebut': obligatoire=true;break;
        case 'peac_periodefin': obligatoire=false;break;
        case 'peac_titre': obligatoire=false;break;
        case 'peac_fini': obligatoire=true;break;
        case 'update_time': obligatoire=false;break;
        case 'update_user': obligatoire=false;break;
        default: obligatoire=false;
      }
      break;
    case 'table_responsabilite':
    case 'responsabilite':
      switch(champs.toLowerCase()){
        case 're_numero': obligatoire=true;break;
        case 're_code': obligatoire=true;break;
        case 're_nom': obligatoire=true;break;
        case 're_famille': obligatoire=true;break;
        case 'update_time': obligatoire=false;break;
        case 'update_user': obligatoire=false;break;
        default: obligatoire=false;
      }
      break;
    case 'table_attribut':
    case 'attribut':
      switch(champs.toLowerCase()){
        case 'at_numero': obligatoire=true;break;
        case 'pe_numero': obligatoire=true;break;
        case 'ta_numero': obligatoire=true;break;
        case 'cr_numero': obligatoire=true;break;
        case 'at_valeur': obligatoire=false;break;
        case 'update_time': obligatoire=false;break;
        case 'update_user': obligatoire=false;break;
        default: obligatoire=false;
      }
      break;
    case 'table_typeattribut':
    case 'typeattribut':
      switch(champs.toLowerCase()){
        case 'ta_numero': obligatoire=true;break;
        case 'ta_nom': obligatoire=true;break;
        case 'update_time': obligatoire=false;break;
        case 'update_user': obligatoire=false;break;
        default: obligatoire=false;
      }
      break;
    case 'table_categorie':
    case 'categorie':
      switch(champs.toLowerCase()){
        case 'cr_numero': obligatoire=true;break;
        case 'cr_libelle': obligatoire=true;break;
        case 'ta_numero': obligatoire=true;break;
        case 'cr_description': obligatoire=false;break;
        case 'update_time': obligatoire=false;break;
        case 'update_user': obligatoire=false;break;
        default: obligatoire=false;
      }
      break;
    case 'table_tva':
    case 'tva':
      switch(champs.toLowerCase()){
        case 'tv_numero': obligatoire=true;break;
        case 'tv_code': obligatoire=true;break;
        case 'tv_taux': obligatoire=true;break;
        case 'tv_actif': obligatoire=true;break;
        case 'so_numero': obligatoire=true;break;
        case 'cg_numero': obligatoire=true;break;
        case 'update_time': obligatoire=false;break;
        case 'update_user': obligatoire=false;break;
        default: obligatoire=false;
      }
      break;
    case 'table_typepersonne':
    case 'typepersonne':
      switch(champs.toLowerCase()){
        case 'tp_numero': obligatoire=true;break;
        case 'tp_type': obligatoire=true;break;
        case 'update_time': obligatoire=false;break;
        case 'update_user': obligatoire=false;break;
        default: obligatoire=false;
      }
      break;
    case 'table_typetache':
    case 'typetache':
      switch(champs.toLowerCase()){
        case 'th_numero': obligatoire=true;break;
        case 'th_libelle': obligatoire=true;break;
        case 'th_description': obligatoire=false;break;
        case 'update_time': obligatoire=false;break;
        case 'update_user': obligatoire=false;break;
        default: obligatoire=false;
      }
      break;
    case 'table_appel':
    case 'appel':
      switch(champs.toLowerCase()){
        case 'ap_numero': obligatoire=true;break;
        case 'ap_libelle': obligatoire=true;break;
        case 'th_numero': obligatoire=true;break;
        case 'ap_date': obligatoire=true;break;
        case 'ap_description': obligatoire=false;break;
        case 'ap_duree': obligatoire=false;break;
        case 'pe_numero': obligatoire=true;break;
        case 'update_time': obligatoire=false;break;
        case 'update_user': obligatoire=false;break;
        default: obligatoire=false;
      }
      break;
    case 'table_societe':
    case 'societe':
      switch(champs.toLowerCase()){
        case 'so_numero': obligatoire=true;break;
        case 'so_libelle': obligatoire=true;break;
        case 'so_abbrev': obligatoire=true;break;
        case 'pe_numero': obligatoire=false;break;
        case 'so_detail': obligatoire=false;break;
        case 'so_sequence': obligatoire=true;break;
        case 'ts_numero': obligatoire=false;break;
        case 'update_time': obligatoire=false;break;
        case 'update_user': obligatoire=false;break;
        default: obligatoire=false;
      }
      break;
    case 'table_typesociete':
    case 'typesociete':
      switch(champs.toLowerCase()){
        case 'ts_numero': obligatoire=true;break;
        case 'ts_libelle': obligatoire=true;break;
        case 'update_time': obligatoire=false;break;
        case 'update_user': obligatoire=false;break;
        default: obligatoire=false;
      }
      break;
    case 'table_classe':
    case 'classe':
      switch(champs.toLowerCase()){
        case 'cl_numero': obligatoire=true;break;
        case 'cl_nom': obligatoire=true;break;
        case 'cl_represente': obligatoire=true;break;
        case 'cl_libelle': obligatoire=true;break;
        case 'cl_societe': obligatoire=true;break;
        case 'cl_mere': obligatoire=true;break;
        case 'cl_ordre': obligatoire=true;break;
        case 'cl_assoc': obligatoire=true;break;
        case 'update_time': obligatoire=false;break;
        case 'update_user': obligatoire=false;break;
        default: obligatoire=false;
      }
      break;
    case 'table_propriete':
    case 'propriete':
      switch(champs.toLowerCase()){
        case 'pr_numero': obligatoire=true;break;
        case 'pr_classe': obligatoire=true;break;
        case 'pr_type': obligatoire=true;break;
        case 'pr_nom': obligatoire=true;break;
        case 'pr_libelle': obligatoire=true;break;
        case 'pr_obligatoire': obligatoire=true;break;
        case 'pr_colonne': obligatoire=true;break;
        case 'pr_colesclave': obligatoire=true;break;
        case 'pr_ordre': obligatoire=true;break;
        case 'update_time': obligatoire=false;break;
        case 'update_user': obligatoire=false;break;
        default: obligatoire=false;
      }
      break;
    case 'table_typepropriete':
    case 'typepropriete':
      switch(champs.toLowerCase()){
        case 'tr_numero': obligatoire=true;break;
        case 'tr_libelle': obligatoire=true;break;
        case 'tr_sql': obligatoire=true;break;
        case 'tr_systeme': obligatoire=true;break;
        case 'tr_estclef': obligatoire=true;break;
        case 'tr_liste': obligatoire=true;break;
        case 'tr_code': obligatoire=true;break;
        case 'tr_classe': obligatoire=false;break;
        case 'update_time': obligatoire=false;break;
        case 'update_user': obligatoire=false;break;
        default: obligatoire=false;
      }
      break;
    case 'table_colonnetype':
    case 'colonnetype':
      switch(champs.toLowerCase()){
        case 'cy_numero': obligatoire=true;break;
        case 'cy_typepropriete': obligatoire=true;break;
        case 'cy_libelle': obligatoire=true;break;
        case 'cy_nom': obligatoire=true;break;
        case 'cy_estclef': obligatoire=true;break;
        case 'cy_ordre': obligatoire=true;break;
        case 'update_time': obligatoire=false;break;
        case 'update_user': obligatoire=false;break;
        default: obligatoire=false;
      }
      break;
    case 'table_listechoix':
    case 'listechoix':
      switch(champs.toLowerCase()){
        case 'lc_numero': obligatoire=true;break;
        case 'lc_typepropriete': obligatoire=true;break;
        case 'lc_libelle': obligatoire=true;break;
        case 'update_time': obligatoire=false;break;
        case 'update_user': obligatoire=false;break;
        default: obligatoire=false;
      }
      break;
    case 'table_adherence':
    case 'adherence':
      switch(champs.toLowerCase()){
        case 'ah_numero': obligatoire=true;break;
        case 'pd_numero': obligatoire=true;break;
        case 'ah_libelle': obligatoire=true;break;
        case 'ah_reduction': obligatoire=true;break;
        case 'ah_quantite': obligatoire=true;break;
        case 'update_time': obligatoire=false;break;
        case 'update_user': obligatoire=false;break;
        default: obligatoire=false;
      }
      break;
    case 'table_periodeadherence':
    case 'periodeadherence':
      switch(champs.toLowerCase()){
        case 'po_numero': obligatoire=true;break;
        case 'ah_numero': obligatoire=true;break;
        case 'update_time': obligatoire=false;break;
        case 'update_user': obligatoire=false;break;
        default: obligatoire=false;
      }
      break;
    case 'table_adhesion':
    case 'adhesion':
      switch(champs.toLowerCase()){
        case 'as_numero': obligatoire=true;break;
        case 'as_reductionmax': obligatoire=false;break;
        case 'pe_numero': obligatoire=true;break;
        case 'po_numero': obligatoire=true;break;
        case 'ah_numero': obligatoire=true;break;
        case 'update_time': obligatoire=false;break;
        case 'update_user': obligatoire=false;break;
        default: obligatoire=false;
      }
      break;
    case 'table_periode':
    case 'periode':
      switch(champs.toLowerCase()){
        case 'po_numero': obligatoire=true;break;
        case 'po_debut': obligatoire=true;break;
        case 'po_fin': obligatoire=true;break;
        case 'update_time': obligatoire=false;break;
        case 'update_user': obligatoire=false;break;
        default: obligatoire=false;
      }
      break;
    case 'table_observation':
    case 'observation':
      switch(champs.toLowerCase()){
        case 'ob_numero': obligatoire=true;break;
        case 'pe_numero': obligatoire=true;break;
        case 'ob_observation': obligatoire=true;break;
        case 'ob_niveau': obligatoire=true;break;
        case 'update_time': obligatoire=false;break;
        case 'update_user': obligatoire=false;break;
        default: obligatoire=false;
      }
      break;
    case 'table_prix':
    case 'prix':
      switch(champs.toLowerCase()){
        case 'px_numero': obligatoire=true;break;
        case 'tv_numero': obligatoire=true;break;
        case 'pd_numero': obligatoire=true;break;
        case 'px_tarifht': obligatoire=true;break;
        case 'px_tarifttc': obligatoire=true;break;
        case 'px_actif': obligatoire=true;break;
        case 'px_datedebut': obligatoire=false;break;
        case 'update_time': obligatoire=false;break;
        case 'update_user': obligatoire=false;break;
        default: obligatoire=false;
      }
      break;
    case 'table_typejournal':
    case 'typejournal':
      switch(champs.toLowerCase()){
        case 'tj_numero': obligatoire=true;break;
        case 'tj_libelle': obligatoire=false;break;
        case 'update_time': obligatoire=false;break;
        case 'update_user': obligatoire=false;break;
        default: obligatoire=false;
      }
      break;
    case 'table_modele':
    case 'modele':
      switch(champs.toLowerCase()){
        case 'mo_numero': obligatoire=true;break;
        case 'mo_libelle': obligatoire=true;break;
        case 'so_numero': obligatoire=true;break;
        default: obligatoire=false;
      }
      break;
    case 'table_lignemodele':
    case 'lignemodele':
      switch(champs.toLowerCase()){
        case 'lm_numero': obligatoire=true;break;
        case 'pd_numero': obligatoire=true;break;
        case 'mo_numero': obligatoire=true;break;
        case 'lm_quantite': obligatoire=false;break;
        case 'lm_montantht': obligatoire=true;break;
        case 'lm_montantttc': obligatoire=true;break;
        case 'update_time': obligatoire=false;break;
        case 'update_user': obligatoire=false;break;
        default: obligatoire=false;
      }
      break;
    case 'table_produit':
    case 'produit':
      switch(champs.toLowerCase()){
        case 'pd_libelle': obligatoire=true;break;
        case 'pd_numero': obligatoire=true;break;
        case 'jo_numero': obligatoire=true;break;
        case 'so_numero': obligatoire=true;break;
        case 'pd_actif': obligatoire=true;break;
        case 'pd_sansquantite': obligatoire=true;break;
        case 'pd_reduction': obligatoire=true;break;
        case 'update_time': obligatoire=false;break;
        case 'update_user': obligatoire=false;break;
        default: obligatoire=false;
      }
      break;
    case 'table_ligne':
    case 'ligne':
      switch(champs.toLowerCase()){
        case 'l_numero': obligatoire=true;break;
        case 'pd_numero': obligatoire=true;break;
        case 'de_numero': obligatoire=true;break;
        case 'l_quantite': obligatoire=false;break;
        case 'l_montantht': obligatoire=true;break;
        case 'l_montantttc': obligatoire=true;break;
        case 'px_numero': obligatoire=false;break;
        case 'l_notes': obligatoire=false;break;
        case 'update_time': obligatoire=false;break;
        case 'update_user': obligatoire=false;break;
        default: obligatoire=false;
      }
      break;
    case 'table_devis':
    case 'devis':
      switch(champs.toLowerCase()){
        case 'de_numero': obligatoire=true;break;
        case 'pe_numero': obligatoire=true;break;
        case 'de_date': obligatoire=false;break;
        case 'de_libelle': obligatoire=false;break;
        case 'de_reduction': obligatoire=true;break;
        case 'de_montantht': obligatoire=true;break;
        case 'de_montantttc': obligatoire=true;break;
        case 'em_numero': obligatoire=false;break;
        case 'de_locked': obligatoire=false;break;
        case 'de_acompte': obligatoire=true;break;
        case 'de_lettre': obligatoire=true;break;
        case 'de_civilites': obligatoire=false;break;
        case 'de_introduction': obligatoire=false;break;
        case 'update_time': obligatoire=false;break;
        case 'update_user': obligatoire=false;break;
        default: obligatoire=false;
      }
      break;
    case 'table_lignefacture':
    case 'lignefacture':
      switch(champs.toLowerCase()){
        case 'lf_numero': obligatoire=true;break;
        case 'fa_numero': obligatoire=true;break;
        case 'px_numero': obligatoire=false;break;
        case 'pd_numero': obligatoire=false;break;
        case 'lf_quantite': obligatoire=true;break;
        case 'lf_montantht': obligatoire=true;break;
        case 'lf_montantttc': obligatoire=true;break;
        case 'update_time': obligatoire=false;break;
        case 'update_user': obligatoire=false;break;
        default: obligatoire=false;
      }
      break;
    case 'table_facture':
    case 'facture':
      switch(champs.toLowerCase()){
        case 'fa_numero': obligatoire=true;break;
        case 'de_numero': obligatoire=true;break;
        case 'pe_numero': obligatoire=true;break;
        case 'ag_numero': obligatoire=true;break;
        case 'fa_numfact': obligatoire=true;break;
        case 'fa_date': obligatoire=true;break;
        case 'fa_reduction': obligatoire=true;break;
        case 'fa_montantht': obligatoire=true;break;
        case 'fa_montantttc': obligatoire=true;break;
        case 'fa_accompte': obligatoire=false;break;
        case 'fa_annotation': obligatoire=false;break;
        case 'fa_libelle': obligatoire=false;break;
        case 'so_numero': obligatoire=true;break;
        case 'update_time': obligatoire=false;break;
        case 'update_user': obligatoire=false;break;
        default: obligatoire=false;
      }
      break;
    case 'table_ligneavoir':
    case 'ligneavoir':
      switch(champs.toLowerCase()){
        case 'la_numero': obligatoire=true;break;
        case 'pd_numero': obligatoire=true;break;
        case 'av_numero': obligatoire=true;break;
        case 'px_numero': obligatoire=true;break;
        case 'la_quantite': obligatoire=true;break;
        case 'la_montantht': obligatoire=false;break;
        case 'la_montantttc': obligatoire=false;break;
        case 'update_time': obligatoire=false;break;
        case 'update_user': obligatoire=false;break;
        default: obligatoire=false;
      }
      break;
    case 'table_avoir':
    case 'avoir':
      switch(champs.toLowerCase()){
        case 'av_numero': obligatoire=true;break;
        case 'fa_numero': obligatoire=true;break;
        case 'av_numfact': obligatoire=true;break;
        case 'av_date': obligatoire=true;break;
        case 'av_montantht': obligatoire=false;break;
        case 'av_montantttc': obligatoire=false;break;
        case 'av_reduction': obligatoire=false;break;
        case 'update_time': obligatoire=false;break;
        case 'update_user': obligatoire=false;break;
        default: obligatoire=false;
      }
      break;
    case 'table_routage':
    case 'routage':
      switch(champs.toLowerCase()){
        case 'ro_numero': obligatoire=true;break;
        case 'ad_numero': obligatoire=true;break;
        case 'pe_numero': obligatoire=true;break;
        case 'ro_debutservice': obligatoire=true;break;
        case 'ro_finservice': obligatoire=true;break;
        case 'ro_quantite': obligatoire=true;break;
        case 'ro_suspendu': obligatoire=true;break;
        case 'ro_dernierroute': obligatoire=false;break;
        case 'fa_numero': obligatoire=false;break;
        case 'update_time': obligatoire=false;break;
        case 'update_user': obligatoire=false;break;
        default: obligatoire=false;
      }
      break;
    case 'table_service':
    case 'service':
      switch(champs.toLowerCase()){
        case 'se_numero': obligatoire=true;break;
        case 'se_nom': obligatoire=true;break;
        case 'se_societe': obligatoire=true;break;
        case 'se_agent': obligatoire=false;break;
        case 'update_time': obligatoire=false;break;
        case 'update_user': obligatoire=false;break;
        default: obligatoire=false;
      }
      break;
    case 'table_employe':
    case 'employe':
      switch(champs.toLowerCase()){
        case 'em_numero': obligatoire=true;break;
        case 'dp_numero': obligatoire=true;break;
        case 'em_emploi': obligatoire=true;break;
        case 'em_service': obligatoire=true;break;
        case 'em_agent': obligatoire=true;break;
        case 'em_login': obligatoire=true;break;
        case 'em_acces': obligatoire=true;break;
        case 'em_password': obligatoire=true;break;
        case 'em_super': obligatoire=true;break;
        case 'update_time': obligatoire=false;break;
        case 'update_user': obligatoire=false;break;
        default: obligatoire=false;
      }
      break;
    case 'table_agent':
    case 'agent':
      switch(champs.toLowerCase()){
        case 'ag_numero': obligatoire=true;break;
        case 'ag_nom': obligatoire=true;break;
        case 'ag_prenom': obligatoire=true;break;
        case 'ag_initiales': obligatoire=true;break;
        case 'ag_actif': obligatoire=true;break;
        case 'eq_numero': obligatoire=false;break;
        case 'ag_role': obligatoire=false;break;
        case 'ag_telephone': obligatoire=false;break;
        case 'ag_mobile': obligatoire=false;break;
        case 'ag_email': obligatoire=false;break;
        case 'ag_commentaire': obligatoire=false;break;
        case 'update_time': obligatoire=false;break;
        case 'update_user': obligatoire=false;break;
        default: obligatoire=false;
      }
      break;
    case 'table_equipe':
    case 'equipe':
      switch(champs.toLowerCase()){
        case 'eq_numero': obligatoire=true;break;
        case 'eq_nom': obligatoire=true;break;
        case 'update_time': obligatoire=false;break;
        case 'update_user': obligatoire=false;break;
        default: obligatoire=false;
      }
      break;
    case 'table_exercice':
    case 'exercice':
      switch(champs.toLowerCase()){
        case 'ex_numero': obligatoire=true;break;
        case 'so_numero': obligatoire=true;break;
        case 'ex_datedebut': obligatoire=true;break;
        case 'ex_datefin': obligatoire=true;break;
        case 'ex_cloture': obligatoire=true;break;
        case 'ex_password': obligatoire=true;break;
        case 'ex_compteattente': obligatoire=true;break;
        case 'ex_actif': obligatoire=true;break;
        case 'update_time': obligatoire=false;break;
        case 'update_user': obligatoire=false;break;
        default: obligatoire=false;
      }
      break;
    case 'table_journal':
    case 'journal':
      switch(champs.toLowerCase()){
        case 'jo_numero': obligatoire=true;break;
        case 'jo_abbrev': obligatoire=true;break;
        case 'jo_libelle': obligatoire=true;break;
        case 'jo_debit': obligatoire=true;break;
        case 'jo_credit': obligatoire=true;break;
        case 'so_numero': obligatoire=true;break;
        case 'tj_numero': obligatoire=false;break;
        case 'cg_numero': obligatoire=false;break;
        case 'jo_mois': obligatoire=true;break;
        case 'jo_annee': obligatoire=true;break;
        case 'jo_contrepartie': obligatoire=true;break;
        case 'jo_provisoire': obligatoire=true;break;
        case 'jo_visible': obligatoire=true;break;
        case 'jo_sequence': obligatoire=false;break;
        case 'update_time': obligatoire=false;break;
        case 'update_user': obligatoire=false;break;
        default: obligatoire=false;
      }
      break;
    case 'table_piece':
    case 'piece':
      switch(champs.toLowerCase()){
        case 'pi_numero': obligatoire=true;break;
        case 'jo_numero': obligatoire=true;break;
        case 'pi_numpiece': obligatoire=true;break;
        case 'ex_numero': obligatoire=true;break;
        case 'pi_libelle': obligatoire=true;break;
        case 'pi_debit': obligatoire=true;break;
        case 'pi_credit': obligatoire=true;break;
        case 'pi_date': obligatoire=true;break;
        case 'pi_numseq': obligatoire=false;break;
        case 'update_time': obligatoire=false;break;
        case 'update_user': obligatoire=false;break;
        default: obligatoire=false;
      }
      break;
    case 'table_ecriture':
    case 'ecriture':
      switch(champs.toLowerCase()){
        case 'ec_numero': obligatoire=true;break;
        case 'ec_numecriture': obligatoire=true;break;
        case 'pi_numero': obligatoire=true;break;
        case 'ex_numero': obligatoire=true;break;
        case 'cg_numero': obligatoire=false;break;
        case 'ca_numero': obligatoire=false;break;
        case 'ec_aux': obligatoire=true;break;
        case 'pf_numero': obligatoire=true;break;
        case 'ec_compte': obligatoire=true;break;
        case 'ec_libelle': obligatoire=true;break;
        case 'ec_debit': obligatoire=true;break;
        case 'ec_credit': obligatoire=true;break;
        case 'pt_numero': obligatoire=false;break;
        case 'av_numero': obligatoire=false;break;
        case 'lt_numero': obligatoire=false;break;
        case 'db_numero': obligatoire=false;break;
        case 'rg_numero': obligatoire=false;break;
        case 'fa_numero': obligatoire=false;break;
        case 'update_time': obligatoire=false;break;
        case 'update_user': obligatoire=false;break;
        default: obligatoire=false;
      }
      break;
    case 'table_comptegen':
    case 'comptegen':
      switch(champs.toLowerCase()){
        case 'cg_numero': obligatoire=true;break;
        case 'cg_numcompte': obligatoire=true;break;
        case 'cg_libelle': obligatoire=true;break;
        case 'ac_numero': obligatoire=true;break;
        case 'cg_accepteaux': obligatoire=true;break;
        case 'cg_utilisable': obligatoire=true;break;
        case 'cg_lettrable': obligatoire=true;break;
        case 'cg_pointable': obligatoire=true;break;
        case 'so_numero': obligatoire=true;break;
        case 'cg_groupable': obligatoire=false;break;
        case 'cg_debit': obligatoire=false;break;
        case 'update_time': obligatoire=false;break;
        case 'update_user': obligatoire=false;break;
        default: obligatoire=false;
      }
      break;
    case 'table_compteproduit':
    case 'compteproduit':
      switch(champs.toLowerCase()){
        case 'ci_numero': obligatoire=true;break;
        case 'pd_numero': obligatoire=true;break;
        case 'cg_numero': obligatoire=true;break;
        case 'ci_actif': obligatoire=false;break;
        case 'update_time': obligatoire=false;break;
        case 'update_user': obligatoire=false;break;
        default: obligatoire=false;
      }
      break;
    case 'table_compteaux':
    case 'compteaux':
      switch(champs.toLowerCase()){
        case 'ca_numero': obligatoire=true;break;
        case 'cg_numero': obligatoire=true;break;
        case 'ca_numcompte': obligatoire=true;break;
        case 'ca_libelle': obligatoire=true;break;
        case 'ac_numero': obligatoire=true;break;
        case 'ca_debit': obligatoire=false;break;
        case 'update_time': obligatoire=false;break;
        case 'update_user': obligatoire=false;break;
        default: obligatoire=false;
      }
      break;
    case 'table_acces':
    case 'acces':
      switch(champs.toLowerCase()){
        case 'ac_numero': obligatoire=true;break;
        case 'ac_libelle': obligatoire=true;break;
        case 'ac_niveau': obligatoire=true;break;
        case 'update_time': obligatoire=false;break;
        case 'update_user': obligatoire=false;break;
        default: obligatoire=false;
      }
      break;
    case 'table_pointage':
    case 'pointage':
      switch(champs.toLowerCase()){
        case 'pt_numero': obligatoire=true;break;
        case 'pt_date': obligatoire=true;break;
        case 'pt_releve': obligatoire=true;break;
        case 'pt_debit': obligatoire=true;break;
        case 'pt_credit': obligatoire=true;break;
        case 'update_time': obligatoire=false;break;
        case 'update_user': obligatoire=false;break;
        case 'so_numero': obligatoire=true;break;
        default: obligatoire=false;
      }
      break;
    case 'table_lettrage':
    case 'lettrage':
      switch(champs.toLowerCase()){
        case 'lt_numero': obligatoire=true;break;
        case 'lt_lettre': obligatoire=false;break;
        case 'update_time': obligatoire=false;break;
        case 'update_user': obligatoire=false;break;
        case 'so_numero': obligatoire=true;break;
        default: obligatoire=false;
      }
      break;
    case 'table_prefixe':
    case 'prefixe':
      switch(champs.toLowerCase()){
        case 'pf_numero': obligatoire=true;break;
        case 'pf_nom': obligatoire=true;break;
        case 'update_time': obligatoire=false;break;
        case 'update_user': obligatoire=false;break;
        default: obligatoire=false;
      }
      break;
    case 'table_facturereglement':
    case 'facturereglement':
      switch(champs.toLowerCase()){
        case 'fr_numero': obligatoire=true;break;
        case 'rg_numero': obligatoire=true;break;
        case 'fa_numero': obligatoire=true;break;
        case 'fr_acompte': obligatoire=true;break;
        case 'fr_partiel': obligatoire=true;break;
        case 'fr_montant': obligatoire=false;break;
        case 'update_time': obligatoire=false;break;
        case 'update_user': obligatoire=false;break;
        default: obligatoire=false;
      }
      break;
    case 'table_modereglement':
    case 'modereglement':
      switch(champs.toLowerCase()){
        case 'mr_numero': obligatoire=true;break;
        case 'mr_libelle': obligatoire=true;break;
        case 'cg_numero': obligatoire=true;break;
        case 'so_numero': obligatoire=true;break;
        case 'mr_actif': obligatoire=true;break;
        case 'mr_description': obligatoire=false;break;
        case 'update_time': obligatoire=false;break;
        case 'update_user': obligatoire=false;break;
        default: obligatoire=false;
      }
      break;
    case 'table_reglement':
    case 'reglement':
      switch(champs.toLowerCase()){
        case 'rg_numero': obligatoire=true;break;
        case 'pe_numero': obligatoire=true;break;
        case 'rg_montant': obligatoire=true;break;
        case 'rg_date': obligatoire=true;break;
        case 'mr_numero': obligatoire=true;break;
        case 'so_numero': obligatoire=true;break;
        case 'rg_encompta': obligatoire=true;break;
        case 'rg_libellebanque': obligatoire=false;break;
        case 'rg_numerocompte': obligatoire=false;break;
        case 'rg_reference': obligatoire=false;break;
        case 'update_time': obligatoire=false;break;
        case 'update_user': obligatoire=false;break;
        default: obligatoire=false;
      }
      break;
    case 'table_moderepartition':
    case 'moderepartition':
      switch(champs.toLowerCase()){
        case 'mp_numero': obligatoire=true;break;
        case 'mp_libelle': obligatoire=true;break;
        case 'cg_numero': obligatoire=true;break;
        case 'so_numero': obligatoire=true;break;
        case 'mp_actif': obligatoire=true;break;
        case 'mp_societe': obligatoire=false;break;
        case 'mp_description': obligatoire=false;break;
        case 'update_time': obligatoire=false;break;
        case 'update_user': obligatoire=false;break;
        default: obligatoire=false;
      }
      break;
    case 'table_repartition':
    case 'repartition':
      switch(champs.toLowerCase()){
        case 'rp_numero': obligatoire=true;break;
        case 'rg_numero': obligatoire=true;break;
        case 'mp_numero': obligatoire=true;break;
        case 'rp_montant': obligatoire=true;break;
        case 'update_time': obligatoire=false;break;
        case 'update_user': obligatoire=false;break;
        default: obligatoire=false;
      }
      break;
    case 'table_impression':
    case 'impression':
      switch(champs.toLowerCase()){
        case 'im_numero': obligatoire=true;break;
        case 'im_libelle': obligatoire=true;break;
        case 'im_nom': obligatoire=true;break;
        case 'im_societe': obligatoire=true;break;
        case 'im_modele': obligatoire=true;break;
        case 'im_defaut': obligatoire=true;break;
        case 'im_keytable': obligatoire=true;break;
        case 'im_keycle': obligatoire=true;break;
        case 'im_keydate': obligatoire=false;break;
        case 'update_time': obligatoire=false;break;
        case 'update_user': obligatoire=false;break;
        default: obligatoire=false;
      }
      break;
    case 'table_groupetable':
    case 'groupetable':
      switch(champs.toLowerCase()){
        case 'gt_numero': obligatoire=true;break;
        case 'gt_libelle': obligatoire=true;break;
        case 'gt_tables': obligatoire=true;break;
        case 'update_time': obligatoire=false;break;
        case 'update_user': obligatoire=false;break;
        default: obligatoire=false;
      }
      break;
    case 'table_droit':
    case 'droit':
      switch(champs.toLowerCase()){
        case 'dr_numero': obligatoire=true;break;
        case 'dp_numero': obligatoire=true;break;
        case 'gt_numero': obligatoire=true;break;
        case 'dr_select': obligatoire=true;break;
        case 'dr_insert': obligatoire=true;break;
        case 'dr_update': obligatoire=true;break;
        case 'dr_delete': obligatoire=true;break;
        case 'update_time': obligatoire=false;break;
        case 'update_user': obligatoire=false;break;
        default: obligatoire=false;
      }
      break;
    case 'table_droitprofil':
    case 'droitprofil':
      switch(champs.toLowerCase()){
        case 'dp_numero': obligatoire=true;break;
        case 'dp_libelle': obligatoire=true;break;
        case 'dp_notes': obligatoire=false;break;
        case 'update_time': obligatoire=false;break;
        case 'update_user': obligatoire=false;break;
        default: obligatoire=false;
      }
      break;
    case 'table_activite':
    case 'activite':
      switch(champs.toLowerCase()){
        case 'za_numero': obligatoire=true;break;
        case 'za_heuredebut': obligatoire=false;break;
        case 'za_heurefin': obligatoire=false;break;
        case 'za_date': obligatoire=true;break;
        case 'za_duree': obligatoire=true;break;
        case 'em_numero': obligatoire=true;break;
        case 'zt_numero': obligatoire=true;break;
        case 'zs_numero': obligatoire=true;break;
        case 'zl_numero': obligatoire=true;break;
        case 'za_pour': obligatoire=false;break;
        case 'za_qui': obligatoire=true;break;
        case 'za_champ': obligatoire=true;break;
        case 'fa_numero': obligatoire=false;break;
        case 'de_numero': obligatoire=false;break;
        case 'pe_numero': obligatoire=false;break;
        case 'zg_numero': obligatoire=false;break;
        case 'update_time': obligatoire=false;break;
        case 'update_user': obligatoire=false;break;
        default: obligatoire=false;
      }
      break;
    case 'table_tache':
    case 'tache':
      switch(champs.toLowerCase()){
        case 'zt_numero': obligatoire=true;break;
        case 'zt_libelle': obligatoire=true;break;
        case 'zt_phrase': obligatoire=true;break;
        case 'zt_notes': obligatoire=false;break;
        case 'update_time': obligatoire=false;break;
        case 'update_user': obligatoire=false;break;
        default: obligatoire=false;
      }
      break;
    case 'table_typesujet':
    case 'typesujet':
      switch(champs.toLowerCase()){
        case 'zu_numero': obligatoire=true;break;
        case 'zu_libelle': obligatoire=true;break;
        case 'zu_notes': obligatoire=false;break;
        case 'update_time': obligatoire=false;break;
        case 'update_user': obligatoire=false;break;
        default: obligatoire=false;
      }
      break;
    case 'table_sujet':
    case 'sujet':
      switch(champs.toLowerCase()){
        case 'zs_numero': obligatoire=true;break;
        case 'zs_libelle': obligatoire=true;break;
        case 'zu_numero': obligatoire=true;break;
        case 'zs_notes': obligatoire=false;break;
        case 'update_time': obligatoire=false;break;
        case 'update_user': obligatoire=false;break;
        default: obligatoire=false;
      }
      break;
    case 'table_lieu':
    case 'lieu':
      switch(champs.toLowerCase()){
        case 'zl_numero': obligatoire=true;break;
        case 'zl_libelle': obligatoire=true;break;
        case 'zl_notes': obligatoire=false;break;
        case 'update_time': obligatoire=false;break;
        case 'update_user': obligatoire=false;break;
        default: obligatoire=false;
      }
      break;
    case 'table_groupe':
    case 'groupe':
      switch(champs.toLowerCase()){
        case 'zg_numero': obligatoire=true;break;
        case 'zg_libelle': obligatoire=true;break;
        case 'zg_notes': obligatoire=false;break;
        case 'update_time': obligatoire=false;break;
        case 'update_user': obligatoire=false;break;
        default: obligatoire=false;
      }
      break;
  
    default: 
      obligatoire=false;
      try{obligatoire=gsea_obligatoire(table,champs);}
      catch(e) {obligatoire=false;}
  }
  return obligatoire;
}

/* Renvoie la clé primaire de la table*/
function mcd_getCle(table)
{
  var champs;
  switch(table.toLowerCase()){
      case 'table_constante': 
    case 'constante': champs='CS_Numero';break;
    case 'table_adresse': 
    case 'adresse': champs='AD_Numero';break;
    case 'table_canton': 
    case 'canton': champs='CT_Numero';break;
    case 'table_appartienta': 
    case 'appartienta': champs='';break;
    case 'table_groupecanton': 
    case 'groupecanton': champs='GC_Numero';break;
    case 'table_codepostal': 
    case 'codepostal': champs='CP_Numero';break;
    case 'table_villecp': 
    case 'villecp': champs='';break;
    case 'table_ville': 
    case 'ville': champs='VI_Numero';break;
    case 'table_contact': 
    case 'contact': champs='CN_Numero';break;
    case 'table_estjoignable': 
    case 'estjoignable': champs='EJ_Numero';break;
    case 'table_typelien': 
    case 'typelien': champs='TL_Numero';break;
    case 'table_estlie': 
    case 'estlie': champs='';break;
    case 'table_etatpersonne': 
    case 'etatpersonne': champs='EP_Numero';break;
    case 'table_personne': 
    case 'personne': champs='PE_Numero';break;
    case 'table_personneupdate': 
    case 'personneupdate': champs='PU_Numero';break;
    case 'table_estresponsable': 
    case 'estresponsable': champs='PEAC_Numero';break;
    case 'table_responsabilite': 
    case 'responsabilite': champs='RE_Numero';break;
    case 'table_attribut': 
    case 'attribut': champs='AT_Numero';break;
    case 'table_typeattribut': 
    case 'typeattribut': champs='TA_Numero';break;
    case 'table_categorie': 
    case 'categorie': champs='CR_Numero';break;
    case 'table_tva': 
    case 'tva': champs='TV_Numero';break;
    case 'table_typepersonne': 
    case 'typepersonne': champs='TP_Numero';break;
    case 'table_typetache': 
    case 'typetache': champs='TH_Numero';break;
    case 'table_appel': 
    case 'appel': champs='AP_Numero';break;
    case 'table_societe': 
    case 'societe': champs='SO_Numero';break;
    case 'table_typesociete': 
    case 'typesociete': champs='TS_Numero';break;
    case 'table_classe': 
    case 'classe': champs='CL_Numero';break;
    case 'table_propriete': 
    case 'propriete': champs='PR_Numero';break;
    case 'table_typepropriete': 
    case 'typepropriete': champs='TR_Numero';break;
    case 'table_colonnetype': 
    case 'colonnetype': champs='CY_Numero';break;
    case 'table_listechoix': 
    case 'listechoix': champs='LC_Numero';break;
    case 'table_adherence': 
    case 'adherence': champs='AH_Numero';break;
    case 'table_periodeadherence': 
    case 'periodeadherence': champs='';break;
    case 'table_adhesion': 
    case 'adhesion': champs='AS_Numero';break;
    case 'table_periode': 
    case 'periode': champs='PO_Numero';break;
    case 'table_observation': 
    case 'observation': champs='OB_Numero';break;
    case 'table_prix': 
    case 'prix': champs='PX_Numero';break;
    case 'table_typejournal': 
    case 'typejournal': champs='TJ_Numero';break;
    case 'table_modele': 
    case 'modele': champs='MO_Numero';break;
    case 'table_lignemodele': 
    case 'lignemodele': champs='LM_Numero';break;
    case 'table_produit': 
    case 'produit': champs='PD_Numero';break;
    case 'table_ligne': 
    case 'ligne': champs='L_Numero';break;
    case 'table_devis': 
    case 'devis': champs='DE_Numero';break;
    case 'table_lignefacture': 
    case 'lignefacture': champs='LF_Numero';break;
    case 'table_facture': 
    case 'facture': champs='FA_Numero';break;
    case 'table_ligneavoir': 
    case 'ligneavoir': champs='LA_Numero';break;
    case 'table_avoir': 
    case 'avoir': champs='AV_Numero';break;
    case 'table_routage': 
    case 'routage': champs='RO_Numero';break;
    case 'table_service': 
    case 'service': champs='SE_Numero';break;
    case 'table_employe': 
    case 'employe': champs='EM_Numero';break;
    case 'table_agent': 
    case 'agent': champs='AG_Numero';break;
    case 'table_equipe': 
    case 'equipe': champs='EQ_Numero';break;
    case 'table_exercice': 
    case 'exercice': champs='EX_Numero';break;
    case 'table_journal': 
    case 'journal': champs='JO_Numero';break;
    case 'table_piece': 
    case 'piece': champs='PI_Numero';break;
    case 'table_ecriture': 
    case 'ecriture': champs='EC_Numero';break;
    case 'table_comptegen': 
    case 'comptegen': champs='CG_Numero';break;
    case 'table_compteproduit': 
    case 'compteproduit': champs='CI_Numero';break;
    case 'table_compteaux': 
    case 'compteaux': champs='CA_Numero';break;
    case 'table_acces': 
    case 'acces': champs='AC_Numero';break;
    case 'table_pointage': 
    case 'pointage': champs='PT_Numero';break;
    case 'table_lettrage': 
    case 'lettrage': champs='LT_Numero';break;
    case 'table_prefixe': 
    case 'prefixe': champs='PF_Numero';break;
    case 'table_facturereglement': 
    case 'facturereglement': champs='FR_Numero';break;
    case 'table_modereglement': 
    case 'modereglement': champs='MR_Numero';break;
    case 'table_reglement': 
    case 'reglement': champs='RG_Numero';break;
    case 'table_moderepartition': 
    case 'moderepartition': champs='MP_Numero';break;
    case 'table_repartition': 
    case 'repartition': champs='RP_Numero';break;
    case 'table_impression': 
    case 'impression': champs='IM_Numero';break;
    case 'table_groupetable': 
    case 'groupetable': champs='GT_Numero';break;
    case 'table_droit': 
    case 'droit': champs='DR_Numero';break;
    case 'table_droitprofil': 
    case 'droitprofil': champs='DP_Numero';break;
    case 'table_activite': 
    case 'activite': champs='ZA_Numero';break;
    case 'table_tache': 
    case 'tache': champs='ZT_Numero';break;
    case 'table_typesujet': 
    case 'typesujet': champs='ZU_Numero';break;
    case 'table_sujet': 
    case 'sujet': champs='ZS_Numero';break;
    case 'table_lieu': 
    case 'lieu': champs='ZL_Numero';break;
    case 'table_groupe': 
    case 'groupe': champs='ZG_Numero';break;

    default: return null;
  }
  return champs.toLowerCase();
}

/* Renvoie toutes les tables sous forme de tableau de chaines de caractères */
function mcd_getTables(){
  var tab=new Array();
  
  tab.push("Acces");
  tab.push("Activite");
  tab.push("Adherence");
  tab.push("Adhesion");
  tab.push("Adresse");
  tab.push("Agent");
  tab.push("AppartientA");
  tab.push("Appel");
  tab.push("Attribut");
  tab.push("Avoir");
  tab.push("Canton");
  tab.push("Categorie");
  tab.push("Classe");
  tab.push("CodePostal");
  tab.push("ColonneType");
  tab.push("CompteAux");
  tab.push("CompteGen");
  tab.push("CompteProduit");
  tab.push("Constante");
  tab.push("Contact");
  tab.push("Devis");
  tab.push("Droit");
  tab.push("DroitProfil");
  tab.push("Ecriture");
  tab.push("Employe");
  tab.push("Equipe");
  tab.push("EstJoignable");
  tab.push("EstLie");
  tab.push("EstResponsable");
  tab.push("EtatPersonne");
  tab.push("Exercice");
  tab.push("Facture");
  tab.push("FactureReglement");
  tab.push("Groupe");
  tab.push("GroupeCanton");
  tab.push("GroupeTable");
  tab.push("Impression");
  tab.push("Journal");
  tab.push("Lettrage");
  tab.push("Lieu");
  tab.push("Ligne");
  tab.push("LigneAvoir");
  tab.push("LigneFacture");
  tab.push("LigneModele");
  tab.push("ListeChoix");
  tab.push("ModeReglement");
  tab.push("ModeRepartition");
  tab.push("Modele");
  tab.push("Observation");
  tab.push("Periode");
  tab.push("PeriodeAdherence");
  tab.push("Personne");
  tab.push("PersonneUpdate");
  tab.push("Piece");
  tab.push("Pointage");
  tab.push("Prefixe");
  tab.push("Prix");
  tab.push("Produit");
  tab.push("Propriete");
  tab.push("Reglement");
  tab.push("Repartition");
  tab.push("Responsabilite");
  tab.push("Routage");
  tab.push("Service");
  tab.push("Societe");
  tab.push("Sujet");
  tab.push("TVA");
  tab.push("Tache");
  tab.push("TypeAttribut");
  tab.push("TypeJournal");
  tab.push("TypeLien");
  tab.push("TypePersonne");
  tab.push("TypePropriete");
  tab.push("TypeSociete");
  tab.push("TypeSujet");
  tab.push("TypeTache");
  tab.push("Ville");
  tab.push("VilleCP");
  return tab;
}

/* Renvoie toutes les labels des tables sous forme de tableau de chaines de caractères */
function mcd_getTablesLabel(){
  var tab=new Array();
  
  tab.push("Niveaux d'accès");
  tab.push("Activités");
  tab.push("Adhérences");
  tab.push("Adhésions de personnes");
  tab.push("Adresses");
  tab.push("Agents");
  tab.push("Liens entre cantons et groupements de canton");
  tab.push("Appels");
  tab.push("Attributs d'une personne");
  tab.push("Avoirs");
  tab.push("Cantons");
  tab.push("Catégories des types d'attributs");
  tab.push("Classes");
  tab.push("Codes postaux");
  tab.push("Colonnes visibles des tables étrangères fixes");
  tab.push("Comptes auxiliaires");
  tab.push("Comptes généraux");
  tab.push("Comptes liés aux produits");
  tab.push("Constantes personnelles");
  tab.push("Contacts");
  tab.push("Devis");
  tab.push("Droits par profils");
  tab.push("Profils de droits");
  tab.push("Ecritures comptables");
  tab.push("Employés");
  tab.push("Equipes");
  tab.push("Liens entre les personnes et leurs contacts");
  tab.push("Liens entre personnes");
  tab.push("Liens des responsabilités");
  tab.push("Etats des personnes (INACTIF, ACTIF, etc.)");
  tab.push("Exercices comptables");
  tab.push("Factures");
  tab.push("Liens entre factures et règlements");
  tab.push("Groupes de personnes");
  tab.push("Groupements de canton");
  tab.push("Groupe de tables");
  tab.push("Modèles d'impression");
  tab.push("Journaux comptables");
  tab.push("");
  tab.push("Lieux");
  tab.push("Lignes de Devis");
  tab.push("Lignes d'avoirs");
  tab.push("Lignes de factures");
  tab.push("Lignes de modèle");
  tab.push("Listes à choix multiples");
  tab.push("Modes de règlement");
  tab.push("Modes de répartition");
  tab.push("Modèle de devis");
  tab.push("Observations");
  tab.push("Périodes");
  tab.push("Périodes d'adhérences");
  tab.push("Personnes");
  tab.push("Personnes modifiées");
  tab.push("Pièces comptables");
  tab.push("Pointages");
  tab.push("Préfixes d'écriture comptable");
  tab.push("Prix");
  tab.push("Produits");
  tab.push("Propriétés");
  tab.push("Réglements");
  tab.push("Répartitions");
  tab.push("Responsabilités");
  tab.push("Routages");
  tab.push("Services");
  tab.push("Sociétés");
  tab.push("Sujets");
  tab.push("Taux de TVA");
  tab.push("Tâches");
  tab.push("Types d'attributs");
  tab.push("Types de journaux");
  tab.push("Types de liens entre personnes");
  tab.push("Types de personnes");
  tab.push("Types de propriétés");
  tab.push("Types de société");
  tab.push("Catégories de sujets");
  tab.push("Type de tâches (anciennement appels)");
  tab.push("Villes");
  tab.push("Liens entre les villes et leur code postal");
  return tab;
}

/* Renvoie les noms physique des champs d'une table */
function mcd_getChampsLogique(table){
  var tab=new Array();
  switch(table.toLowerCase()){
    case 'acces':
      tab.push("AC_Libelle");
      tab.push("AC_Niveau");
      tab.push("AC_Numero");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'activite':
      tab.push("DE_Numero");
      tab.push("EM_Numero");
      tab.push("FA_Numero");
      tab.push("PE_Numero");
      tab.push("ZA_Champ");
      tab.push("ZA_Date");
      tab.push("ZA_Duree");
      tab.push("ZA_HeureDebut");
      tab.push("ZA_HeureFin");
      tab.push("ZA_Numero");
      tab.push("ZA_Pour");
      tab.push("ZA_Qui");
      tab.push("ZG_Numero");
      tab.push("ZL_Numero");
      tab.push("ZS_Numero");
      tab.push("ZT_Numero");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'adherence':
      tab.push("AH_Libelle");
      tab.push("AH_Numero");
      tab.push("AH_Quantite");
      tab.push("AH_Reduction");
      tab.push("PD_Numero");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'adhesion':
      tab.push("AH_Numero");
      tab.push("AS_Numero");
      tab.push("AS_ReductionMax");
      tab.push("PE_Numero");
      tab.push("PO_Numero");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'adresse':
      tab.push("AD_Active");
      tab.push("AD_Addr1");
      tab.push("AD_Addr2");
      tab.push("AD_Addr3");
      tab.push("AD_DateStop");
      tab.push("AD_Numero");
      tab.push("AD_Type");
      tab.push("CP_Numero");
      tab.push("PE_Numero");
      tab.push("VI_Numero");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'agent':
      tab.push("AG_Actif");
      tab.push("AG_Commentaire");
      tab.push("AG_Email");
      tab.push("AG_Initiales");
      tab.push("AG_Mobile");
      tab.push("AG_Nom");
      tab.push("AG_Numero");
      tab.push("AG_Prenom");
      tab.push("AG_Role");
      tab.push("AG_Telephone");
      tab.push("EQ_Numero");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'appartienta':
      tab.push("CT_Numero");
      tab.push("GC_Numero");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'appel':
      tab.push("AP_Date");
      tab.push("AP_Description");
      tab.push("AP_Duree");
      tab.push("AP_Libelle");
      tab.push("AP_Numero");
      tab.push("PE_Numero");
      tab.push("TH_Numero");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'attribut':
      tab.push("AT_Numero");
      tab.push("AT_Valeur");
      tab.push("CR_Numero");
      tab.push("PE_Numero");
      tab.push("TA_Numero");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'avoir':
      tab.push("AV_Date");
      tab.push("AV_MontantHT");
      tab.push("AV_MontantTTC");
      tab.push("AV_NumFact");
      tab.push("AV_Numero");
      tab.push("AV_Reduction");
      tab.push("FA_Numero");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'canton':
      tab.push("CT_Nom");
      tab.push("CT_Numero");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'categorie':
      tab.push("CR_Description");
      tab.push("CR_Libelle");
      tab.push("CR_Numero");
      tab.push("TA_Numero");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'classe':
      tab.push("CL_Assoc");
      tab.push("CL_Libelle");
      tab.push("CL_Mere");
      tab.push("CL_Nom");
      tab.push("CL_Numero");
      tab.push("CL_Ordre");
      tab.push("CL_Represente");
      tab.push("CL_Societe");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'codepostal':
      tab.push("CP_Bureau");
      tab.push("CP_CodePostal");
      tab.push("CP_Numero");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'colonnetype':
      tab.push("CY_EstClef");
      tab.push("CY_Libelle");
      tab.push("CY_Nom");
      tab.push("CY_Numero");
      tab.push("CY_Ordre");
      tab.push("CY_TypePropriete");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'compteaux':
      tab.push("AC_Numero");
      tab.push("CA_Debit");
      tab.push("CA_Libelle");
      tab.push("CA_NumCompte");
      tab.push("CA_Numero");
      tab.push("CG_Numero");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'comptegen':
      tab.push("AC_Numero");
      tab.push("CG_AccepteAux");
      tab.push("CG_Debit");
      tab.push("CG_Groupable");
      tab.push("CG_Lettrable");
      tab.push("CG_Libelle");
      tab.push("CG_NumCompte");
      tab.push("CG_Numero");
      tab.push("CG_Pointable");
      tab.push("CG_Utilisable");
      tab.push("SO_Numero");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'compteproduit':
      tab.push("CG_Numero");
      tab.push("CI_Actif");
      tab.push("CI_Numero");
      tab.push("PD_Numero");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'constante':
      tab.push("CS_Numero");
      tab.push("CS_Type");
      tab.push("CS_Valeur");
      break;
    case 'contact':
      tab.push("CN_Coordonnee");
      tab.push("CN_Numero");
      tab.push("CN_Type");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'devis':
      tab.push("DE_Acompte");
      tab.push("DE_Civilites");
      tab.push("DE_Date");
      tab.push("DE_Introduction");
      tab.push("DE_Lettre");
      tab.push("DE_Libelle");
      tab.push("DE_Locked");
      tab.push("DE_MontantHT");
      tab.push("DE_MontantTTC");
      tab.push("DE_Numero");
      tab.push("DE_Reduction");
      tab.push("EM_Numero");
      tab.push("PE_Numero");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'droit':
      tab.push("DP_Numero");
      tab.push("DR_Delete");
      tab.push("DR_Insert");
      tab.push("DR_Numero");
      tab.push("DR_Select");
      tab.push("DR_Update");
      tab.push("GT_Numero");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'droitprofil':
      tab.push("DP_Libelle");
      tab.push("DP_Notes");
      tab.push("DP_Numero");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'ecriture':
      tab.push("AV_Numero");
      tab.push("CA_Numero");
      tab.push("CG_Numero");
      tab.push("DB_Numero");
      tab.push("EC_Aux");
      tab.push("EC_Compte");
      tab.push("EC_Credit");
      tab.push("EC_Debit");
      tab.push("EC_Libelle");
      tab.push("EC_NumEcriture");
      tab.push("EC_Numero");
      tab.push("EX_Numero");
      tab.push("FA_Numero");
      tab.push("LT_Numero");
      tab.push("PF_Numero");
      tab.push("PI_Numero");
      tab.push("PT_Numero");
      tab.push("RG_Numero");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'employe':
      tab.push("DP_Numero");
      tab.push("EM_Acces");
      tab.push("EM_Agent");
      tab.push("EM_Emploi");
      tab.push("EM_Login");
      tab.push("EM_Numero");
      tab.push("EM_Password");
      tab.push("EM_Service");
      tab.push("EM_Super");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'equipe':
      tab.push("EQ_Nom");
      tab.push("EQ_Numero");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'estjoignable':
      tab.push("CN_Numero");
      tab.push("EJ_Actif");
      tab.push("EJ_Numero");
      tab.push("PE_Numero");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'estlie':
      tab.push("EL_Actif");
      tab.push("EL_Debut");
      tab.push("EL_Fin");
      tab.push("EL_Personne1");
      tab.push("EL_Personne2");
      tab.push("TL_Numero");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'estresponsable':
      tab.push("PEAC_Fini");
      tab.push("PEAC_Numero");
      tab.push("PEAC_PeriodeDebut");
      tab.push("PEAC_PeriodeFin");
      tab.push("PEAC_Titre");
      tab.push("PE_Numero");
      tab.push("RE_Numero");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'etatpersonne':
      tab.push("EP_Libelle");
      tab.push("EP_Numero");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'exercice':
      tab.push("EX_Actif");
      tab.push("EX_Cloture");
      tab.push("EX_CompteAttente");
      tab.push("EX_DateDebut");
      tab.push("EX_DateFin");
      tab.push("EX_Numero");
      tab.push("EX_Password");
      tab.push("SO_Numero");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'facture':
      tab.push("AG_Numero");
      tab.push("DE_Numero");
      tab.push("FA_Accompte");
      tab.push("FA_Annotation");
      tab.push("FA_Date");
      tab.push("FA_Libelle");
      tab.push("FA_MontantHT");
      tab.push("FA_MontantTTC");
      tab.push("FA_NumFact");
      tab.push("FA_Numero");
      tab.push("FA_Reduction");
      tab.push("PE_Numero");
      tab.push("SO_Numero");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'facturereglement':
      tab.push("FA_Numero");
      tab.push("FR_Acompte");
      tab.push("FR_Montant");
      tab.push("FR_Numero");
      tab.push("FR_Partiel");
      tab.push("RG_Numero");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'groupe':
      tab.push("ZG_Libelle");
      tab.push("ZG_Notes");
      tab.push("ZG_Numero");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'groupecanton':
      tab.push("GC_Nom");
      tab.push("GC_Numero");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'groupetable':
      tab.push("GT_Libelle");
      tab.push("GT_Numero");
      tab.push("GT_Tables");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'impression':
      tab.push("IM_Defaut");
      tab.push("IM_KeyCle");
      tab.push("IM_KeyDate");
      tab.push("IM_KeyTable");
      tab.push("IM_Libelle");
      tab.push("IM_Modele");
      tab.push("IM_Nom");
      tab.push("IM_Numero");
      tab.push("IM_Societe");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'journal':
      tab.push("CG_Numero");
      tab.push("JO_Abbrev");
      tab.push("JO_Annee");
      tab.push("JO_Contrepartie");
      tab.push("JO_Credit");
      tab.push("JO_Debit");
      tab.push("JO_Libelle");
      tab.push("JO_Mois");
      tab.push("JO_Numero");
      tab.push("JO_Provisoire");
      tab.push("JO_Sequence");
      tab.push("JO_Visible");
      tab.push("SO_Numero");
      tab.push("TJ_Numero");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'lettrage':
      tab.push("LT_Lettre");
      tab.push("LT_Numero");
      tab.push("SO_Numero");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'lieu':
      tab.push("ZL_Libelle");
      tab.push("ZL_Notes");
      tab.push("ZL_Numero");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'ligne':
      tab.push("DE_Numero");
      tab.push("L_MontantHT");
      tab.push("L_MontantTTC");
      tab.push("L_Notes");
      tab.push("L_Numero");
      tab.push("L_Quantite");
      tab.push("PD_Numero");
      tab.push("PX_Numero");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'ligneavoir':
      tab.push("AV_Numero");
      tab.push("LA_MontantHT");
      tab.push("LA_MontantTTC");
      tab.push("LA_Numero");
      tab.push("LA_Quantite");
      tab.push("PD_Numero");
      tab.push("PX_Numero");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'lignefacture':
      tab.push("FA_Numero");
      tab.push("LF_MontantHT");
      tab.push("LF_MontantTTC");
      tab.push("LF_Numero");
      tab.push("LF_Quantite");
      tab.push("PD_Numero");
      tab.push("PX_Numero");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'lignemodele':
      tab.push("LM_MontantHT");
      tab.push("LM_MontantTTC");
      tab.push("LM_Numero");
      tab.push("LM_Quantite");
      tab.push("MO_Numero");
      tab.push("PD_Numero");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'listechoix':
      tab.push("LC_Libelle");
      tab.push("LC_Numero");
      tab.push("LC_TypePropriete");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'modereglement':
      tab.push("CG_Numero");
      tab.push("MR_Actif");
      tab.push("MR_Description");
      tab.push("MR_Libelle");
      tab.push("MR_Numero");
      tab.push("SO_Numero");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'moderepartition':
      tab.push("CG_Numero");
      tab.push("MP_Actif");
      tab.push("MP_Description");
      tab.push("MP_Libelle");
      tab.push("MP_Numero");
      tab.push("MP_Societe");
      tab.push("SO_Numero");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'modele':
      tab.push("MO_Libelle");
      tab.push("MO_Numero");
      tab.push("SO_Numero");
      break;
    case 'observation':
      tab.push("OB_Niveau");
      tab.push("OB_Numero");
      tab.push("OB_Observation");
      tab.push("PE_Numero");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'periode':
      tab.push("PO_Debut");
      tab.push("PO_Fin");
      tab.push("PO_Numero");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'periodeadherence':
      tab.push("AH_Numero");
      tab.push("PO_Numero");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'personne':
      tab.push("EP_Numero");
      tab.push("PE_Complement");
      tab.push("PE_Morale");
      tab.push("PE_Naissance");
      tab.push("PE_Nom");
      tab.push("PE_Numero");
      tab.push("PE_Prenom");
      tab.push("PE_RegimeFiscal");
      tab.push("PE_Titre");
      tab.push("TP_Numero");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'personneupdate':
      tab.push("EP_Numero");
      tab.push("PE_Complement");
      tab.push("PE_Morale");
      tab.push("PE_Naissance");
      tab.push("PE_Nom");
      tab.push("PE_Numero");
      tab.push("PE_Prenom");
      tab.push("PE_RegimeFiscal");
      tab.push("PE_Titre");
      tab.push("PU_Action");
      tab.push("PU_Bilan");
      tab.push("PU_Numero");
      tab.push("TP_Numero");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'piece':
      tab.push("EX_Numero");
      tab.push("JO_Numero");
      tab.push("PI_Credit");
      tab.push("PI_Date");
      tab.push("PI_Debit");
      tab.push("PI_Libelle");
      tab.push("PI_NumPiece");
      tab.push("PI_NumSeq");
      tab.push("PI_Numero");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'pointage':
      tab.push("PT_Credit");
      tab.push("PT_Date");
      tab.push("PT_Debit");
      tab.push("PT_Numero");
      tab.push("PT_Releve");
      tab.push("SO_Numero");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'prefixe':
      tab.push("PF_Nom");
      tab.push("PF_Numero");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'prix':
      tab.push("PD_Numero");
      tab.push("PX_Actif");
      tab.push("PX_DateDebut");
      tab.push("PX_Numero");
      tab.push("PX_TarifHT");
      tab.push("PX_TarifTTC");
      tab.push("TV_Numero");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'produit':
      tab.push("JO_Numero");
      tab.push("PD_Actif");
      tab.push("PD_Libelle");
      tab.push("PD_Numero");
      tab.push("PD_Reduction");
      tab.push("PD_SansQuantite");
      tab.push("SO_Numero");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'propriete':
      tab.push("PR_Classe");
      tab.push("PR_ColEsclave");
      tab.push("PR_Colonne");
      tab.push("PR_Libelle");
      tab.push("PR_Nom");
      tab.push("PR_Numero");
      tab.push("PR_Obligatoire");
      tab.push("PR_Ordre");
      tab.push("PR_Type");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'reglement':
      tab.push("MR_Numero");
      tab.push("PE_Numero");
      tab.push("RG_Date");
      tab.push("RG_EnCompta");
      tab.push("RG_LibelleBanque");
      tab.push("RG_Montant");
      tab.push("RG_Numero");
      tab.push("RG_NumeroCompte");
      tab.push("RG_Reference");
      tab.push("SO_Numero");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'repartition':
      tab.push("MP_Numero");
      tab.push("RG_Numero");
      tab.push("RP_Montant");
      tab.push("RP_Numero");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'responsabilite':
      tab.push("RE_Code");
      tab.push("RE_Famille");
      tab.push("RE_Nom");
      tab.push("RE_Numero");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'routage':
      tab.push("AD_Numero");
      tab.push("FA_Numero");
      tab.push("PE_Numero");
      tab.push("RO_DebutService");
      tab.push("RO_DernierRoute");
      tab.push("RO_FinService");
      tab.push("RO_Numero");
      tab.push("RO_Quantite");
      tab.push("RO_Suspendu");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'service':
      tab.push("SE_Agent");
      tab.push("SE_Nom");
      tab.push("SE_Numero");
      tab.push("SE_Societe");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'societe':
      tab.push("PE_Numero");
      tab.push("SO_Abbrev");
      tab.push("SO_Detail");
      tab.push("SO_Libelle");
      tab.push("SO_Numero");
      tab.push("SO_Sequence");
      tab.push("TS_Numero");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'sujet':
      tab.push("ZS_Libelle");
      tab.push("ZS_Notes");
      tab.push("ZS_Numero");
      tab.push("ZU_Numero");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'tva':
      tab.push("CG_Numero");
      tab.push("SO_Numero");
      tab.push("TV_Actif");
      tab.push("TV_Code");
      tab.push("TV_Numero");
      tab.push("TV_Taux");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'tache':
      tab.push("ZT_Libelle");
      tab.push("ZT_Notes");
      tab.push("ZT_Numero");
      tab.push("ZT_Phrase");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'typeattribut':
      tab.push("TA_Nom");
      tab.push("TA_Numero");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'typejournal':
      tab.push("TJ_Libelle");
      tab.push("TJ_Numero");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'typelien':
      tab.push("TL_Description");
      tab.push("TL_Libelle");
      tab.push("TL_Numero");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'typepersonne':
      tab.push("TP_Numero");
      tab.push("TP_Type");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'typepropriete':
      tab.push("TR_Classe");
      tab.push("TR_Code");
      tab.push("TR_EstClef");
      tab.push("TR_Libelle");
      tab.push("TR_Liste");
      tab.push("TR_Numero");
      tab.push("TR_SQL");
      tab.push("TR_Systeme");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'typesociete':
      tab.push("TS_Libelle");
      tab.push("TS_Numero");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'typesujet':
      tab.push("ZU_Libelle");
      tab.push("ZU_Notes");
      tab.push("ZU_Numero");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'typetache':
      tab.push("TH_Description");
      tab.push("TH_Libelle");
      tab.push("TH_Numero");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'ville':
      tab.push("CT_Numero");
      tab.push("VI_Nom");
      tab.push("VI_Numero");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'villecp':
      tab.push("CP_Numero");
      tab.push("VI_Numero");
      tab.push("update_time");
      tab.push("update_user");
      break;

  }
  return tab;
}

/* Renvoie les 'label' des champs d'une table */
function mcd_getChampsLabel(table){
  var tab=new Array();
  switch(table.toLowerCase()){
    case 'acces':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'activite':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'adherence':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'adhesion':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'adresse':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'agent':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'appartienta':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'appel':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'attribut':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'avoir':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'canton':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'categorie':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'classe':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'codepostal':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'colonnetype':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'compteaux':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'comptegen':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'compteproduit':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'constante':
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'contact':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'devis':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'droit':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'droitprofil':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'ecriture':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'employe':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'equipe':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'estjoignable':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'estlie':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'estresponsable':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'etatpersonne':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'exercice':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'facture':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'facturereglement':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'groupe':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'groupecanton':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'groupetable':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'impression':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'journal':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'lettrage':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'lieu':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'ligne':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'ligneavoir':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'lignefacture':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'lignemodele':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'listechoix':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'modereglement':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'moderepartition':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'modele':
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'observation':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'periode':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'periodeadherence':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'personne':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'personneupdate':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'piece':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'pointage':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'prefixe':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'prix':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'produit':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'propriete':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'reglement':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'repartition':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'responsabilite':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'routage':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'service':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'societe':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'sujet':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'tva':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'tache':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'typeattribut':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'typejournal':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'typelien':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'typepersonne':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'typepropriete':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'typesociete':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'typesujet':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'typetache':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'ville':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'villecp':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;

  }
  return tab;
}

/* Renvoie les noms physique des champs nécessaires d'une table */
function mcd_getMinChampsLogique(table){
  var tab=new Array();
  switch(table.toLowerCase()){
    case 'acces':
      tab.push("AC_Libelle");
      tab.push("AC_Niveau");
      tab.push("AC_Numero");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'activite':
      tab.push("ZA_Champ");
      tab.push("ZA_Date");
      tab.push("ZA_Duree");
      tab.push("ZA_HeureDebut");
      tab.push("ZA_HeureFin");
      tab.push("ZA_Numero");
      tab.push("ZA_Pour");
      tab.push("ZA_Qui");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'adherence':
      tab.push("AH_Libelle");
      tab.push("AH_Numero");
      tab.push("AH_Reduction");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'adhesion':
      tab.push("AS_Numero");
      tab.push("AS_ReductionMax");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'adresse':
      tab.push("AD_Active");
      tab.push("AD_Addr1");
      tab.push("AD_Addr2");
      tab.push("AD_Addr3");
      tab.push("AD_DateStop");
      tab.push("AD_Numero");
      tab.push("AD_Type");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'agent':
      tab.push("AG_Actif");
      tab.push("AG_Commentaire");
      tab.push("AG_Email");
      tab.push("AG_Initiales");
      tab.push("AG_Mobile");
      tab.push("AG_Nom");
      tab.push("AG_Numero");
      tab.push("AG_Prenom");
      tab.push("AG_Role");
      tab.push("AG_Telephone");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'appartienta':
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'appel':
      tab.push("AP_Date");
      tab.push("AP_Description");
      tab.push("AP_Duree");
      tab.push("AP_Libelle");
      tab.push("AP_Numero");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'attribut':
      tab.push("AT_Numero");
      tab.push("AT_Valeur");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'avoir':
      tab.push("AV_Date");
      tab.push("AV_MontantHT");
      tab.push("AV_MontantTTC");
      tab.push("AV_NumFact");
      tab.push("AV_Numero");
      tab.push("AV_Reduction");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'canton':
      tab.push("CT_Nom");
      tab.push("CT_Numero");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'categorie':
      tab.push("CR_Description");
      tab.push("CR_Libelle");
      tab.push("CR_Numero");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'classe':
      tab.push("CL_Assoc");
      tab.push("CL_Libelle");
      tab.push("CL_Mere");
      tab.push("CL_Nom");
      tab.push("CL_Numero");
      tab.push("CL_Ordre");
      tab.push("CL_Represente");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'codepostal':
      tab.push("CP_Bureau");
      tab.push("CP_CodePostal");
      tab.push("CP_Numero");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'colonnetype':
      tab.push("CY_EstClef");
      tab.push("CY_Libelle");
      tab.push("CY_Nom");
      tab.push("CY_Numero");
      tab.push("CY_Ordre");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'compteaux':
      tab.push("CA_Debit");
      tab.push("CA_Libelle");
      tab.push("CA_NumCompte");
      tab.push("CA_Numero");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'comptegen':
      tab.push("CG_AccepteAux");
      tab.push("CG_Debit");
      tab.push("CG_Groupable");
      tab.push("CG_Lettrable");
      tab.push("CG_Libelle");
      tab.push("CG_NumCompte");
      tab.push("CG_Numero");
      tab.push("CG_Pointable");
      tab.push("CG_Utilisable");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'compteproduit':
      tab.push("CI_Actif");
      tab.push("CI_Numero");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'constante':
      tab.push("CS_Numero");
      tab.push("CS_Type");
      tab.push("CS_Valeur");
      break;
    case 'contact':
      tab.push("CN_Coordonnee");
      tab.push("CN_Numero");
      tab.push("CN_Type");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'devis':
      tab.push("DE_Acompte");
      tab.push("DE_Civilites");
      tab.push("DE_Date");
      tab.push("DE_Introduction");
      tab.push("DE_Lettre");
      tab.push("DE_Libelle");
      tab.push("DE_Locked");
      tab.push("DE_Numero");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'droit':
      tab.push("DR_Delete");
      tab.push("DR_Insert");
      tab.push("DR_Numero");
      tab.push("DR_Select");
      tab.push("DR_Update");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'droitprofil':
      tab.push("DP_Libelle");
      tab.push("DP_Notes");
      tab.push("DP_Numero");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'ecriture':
      tab.push("EC_Aux");
      tab.push("EC_Compte");
      tab.push("EC_Credit");
      tab.push("EC_Debit");
      tab.push("EC_Libelle");
      tab.push("EC_NumEcriture");
      tab.push("EC_Numero");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'employe':
      tab.push("EM_Emploi");
      tab.push("EM_Login");
      tab.push("EM_Numero");
      tab.push("EM_Password");
      tab.push("EM_Super");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'equipe':
      tab.push("EQ_Nom");
      tab.push("EQ_Numero");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'estjoignable':
      tab.push("EJ_Actif");
      tab.push("EJ_Numero");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'estlie':
      tab.push("EL_Actif");
      tab.push("EL_Debut");
      tab.push("EL_Fin");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'estresponsable':
      tab.push("PEAC_Fini");
      tab.push("PEAC_Numero");
      tab.push("PEAC_PeriodeDebut");
      tab.push("PEAC_PeriodeFin");
      tab.push("PEAC_Titre");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'etatpersonne':
      tab.push("EP_Libelle");
      tab.push("EP_Numero");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'exercice':
      tab.push("EX_Cloture");
      tab.push("EX_DateDebut");
      tab.push("EX_DateFin");
      tab.push("EX_Numero");
      tab.push("EX_Password");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'facture':
      tab.push("FA_Accompte");
      tab.push("FA_Annotation");
      tab.push("FA_Date");
      tab.push("FA_Libelle");
      tab.push("FA_MontantHT");
      tab.push("FA_MontantTTC");
      tab.push("FA_NumFact");
      tab.push("FA_Numero");
      tab.push("FA_Reduction");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'facturereglement':
      tab.push("FR_Acompte");
      tab.push("FR_Montant");
      tab.push("FR_Numero");
      tab.push("FR_Partiel");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'groupe':
      tab.push("ZG_Libelle");
      tab.push("ZG_Notes");
      tab.push("ZG_Numero");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'groupecanton':
      tab.push("GC_Nom");
      tab.push("GC_Numero");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'groupetable':
      tab.push("GT_Libelle");
      tab.push("GT_Numero");
      tab.push("GT_Tables");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'impression':
      tab.push("IM_Defaut");
      tab.push("IM_KeyCle");
      tab.push("IM_KeyDate");
      tab.push("IM_KeyTable");
      tab.push("IM_Libelle");
      tab.push("IM_Modele");
      tab.push("IM_Nom");
      tab.push("IM_Numero");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'journal':
      tab.push("JO_Abbrev");
      tab.push("JO_Annee");
      tab.push("JO_Contrepartie");
      tab.push("JO_Credit");
      tab.push("JO_Debit");
      tab.push("JO_Libelle");
      tab.push("JO_Mois");
      tab.push("JO_Numero");
      tab.push("JO_Provisoire");
      tab.push("JO_Sequence");
      tab.push("JO_Visible");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'lettrage':
      tab.push("LT_Lettre");
      tab.push("LT_Numero");
      tab.push("SO_Numero");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'lieu':
      tab.push("ZL_Libelle");
      tab.push("ZL_Notes");
      tab.push("ZL_Numero");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'ligne':
      tab.push("L_Notes");
      tab.push("L_Numero");
      tab.push("L_Quantite");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'ligneavoir':
      tab.push("LA_MontantHT");
      tab.push("LA_MontantTTC");
      tab.push("LA_Numero");
      tab.push("LA_Quantite");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'lignefacture':
      tab.push("LF_Numero");
      tab.push("LF_Quantite");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'lignemodele':
      tab.push("LM_Numero");
      tab.push("LM_Quantite");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'listechoix':
      tab.push("LC_Libelle");
      tab.push("LC_Numero");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'modereglement':
      tab.push("MR_Actif");
      tab.push("MR_Description");
      tab.push("MR_Libelle");
      tab.push("MR_Numero");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'moderepartition':
      tab.push("MP_Actif");
      tab.push("MP_Description");
      tab.push("MP_Libelle");
      tab.push("MP_Numero");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'modele':
      tab.push("MO_Libelle");
      tab.push("MO_Numero");
      break;
    case 'observation':
      tab.push("OB_Niveau");
      tab.push("OB_Numero");
      tab.push("OB_Observation");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'periode':
      tab.push("PO_Debut");
      tab.push("PO_Fin");
      tab.push("PO_Numero");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'periodeadherence':
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'personne':
      tab.push("PE_Complement");
      tab.push("PE_Morale");
      tab.push("PE_Naissance");
      tab.push("PE_Nom");
      tab.push("PE_Numero");
      tab.push("PE_Prenom");
      tab.push("PE_RegimeFiscal");
      tab.push("PE_Titre");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'personneupdate':
      tab.push("EP_Numero");
      tab.push("PE_Complement");
      tab.push("PE_Morale");
      tab.push("PE_Naissance");
      tab.push("PE_Nom");
      tab.push("PE_Numero");
      tab.push("PE_Prenom");
      tab.push("PE_RegimeFiscal");
      tab.push("PE_Titre");
      tab.push("PU_Action");
      tab.push("PU_Bilan");
      tab.push("PU_Numero");
      tab.push("TP_Numero");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'piece':
      tab.push("PI_Credit");
      tab.push("PI_Date");
      tab.push("PI_Debit");
      tab.push("PI_Libelle");
      tab.push("PI_NumPiece");
      tab.push("PI_NumSeq");
      tab.push("PI_Numero");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'pointage':
      tab.push("PT_Credit");
      tab.push("PT_Date");
      tab.push("PT_Debit");
      tab.push("PT_Numero");
      tab.push("PT_Releve");
      tab.push("SO_Numero");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'prefixe':
      tab.push("PF_Nom");
      tab.push("PF_Numero");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'prix':
      tab.push("PX_Actif");
      tab.push("PX_DateDebut");
      tab.push("PX_Numero");
      tab.push("PX_TarifHT");
      tab.push("PX_TarifTTC");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'produit':
      tab.push("PD_Actif");
      tab.push("PD_Libelle");
      tab.push("PD_Numero");
      tab.push("PD_Reduction");
      tab.push("PD_SansQuantite");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'propriete':
      tab.push("PR_ColEsclave");
      tab.push("PR_Colonne");
      tab.push("PR_Libelle");
      tab.push("PR_Nom");
      tab.push("PR_Numero");
      tab.push("PR_Obligatoire");
      tab.push("PR_Ordre");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'reglement':
      tab.push("RG_Date");
      tab.push("RG_EnCompta");
      tab.push("RG_LibelleBanque");
      tab.push("RG_Montant");
      tab.push("RG_Numero");
      tab.push("RG_NumeroCompte");
      tab.push("RG_Reference");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'repartition':
      tab.push("RP_Montant");
      tab.push("RP_Numero");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'responsabilite':
      tab.push("RE_Code");
      tab.push("RE_Famille");
      tab.push("RE_Nom");
      tab.push("RE_Numero");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'routage':
      tab.push("RO_DebutService");
      tab.push("RO_DernierRoute");
      tab.push("RO_FinService");
      tab.push("RO_Numero");
      tab.push("RO_Quantite");
      tab.push("RO_Suspendu");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'service':
      tab.push("SE_Nom");
      tab.push("SE_Numero");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'societe':
      tab.push("SO_Abbrev");
      tab.push("SO_Detail");
      tab.push("SO_Libelle");
      tab.push("SO_Numero");
      tab.push("SO_Sequence");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'sujet':
      tab.push("ZS_Libelle");
      tab.push("ZS_Notes");
      tab.push("ZS_Numero");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'tva':
      tab.push("TV_Actif");
      tab.push("TV_Code");
      tab.push("TV_Numero");
      tab.push("TV_Taux");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'tache':
      tab.push("ZT_Libelle");
      tab.push("ZT_Notes");
      tab.push("ZT_Numero");
      tab.push("ZT_Phrase");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'typeattribut':
      tab.push("TA_Nom");
      tab.push("TA_Numero");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'typejournal':
      tab.push("TJ_Libelle");
      tab.push("TJ_Numero");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'typelien':
      tab.push("TL_Description");
      tab.push("TL_Libelle");
      tab.push("TL_Numero");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'typepersonne':
      tab.push("TP_Numero");
      tab.push("TP_Type");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'typepropriete':
      tab.push("TR_Code");
      tab.push("TR_EstClef");
      tab.push("TR_Libelle");
      tab.push("TR_Liste");
      tab.push("TR_Numero");
      tab.push("TR_SQL");
      tab.push("TR_Systeme");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'typesociete':
      tab.push("TS_Libelle");
      tab.push("TS_Numero");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'typesujet':
      tab.push("ZU_Libelle");
      tab.push("ZU_Notes");
      tab.push("ZU_Numero");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'typetache':
      tab.push("TH_Description");
      tab.push("TH_Libelle");
      tab.push("TH_Numero");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'ville':
      tab.push("VI_Nom");
      tab.push("VI_Numero");
      tab.push("update_time");
      tab.push("update_user");
      break;
    case 'villecp':
      tab.push("update_time");
      tab.push("update_user");
      break;

  }
  return tab;
}

/* Renvoie les 'label' des champs nécessaires d'une table */
function mcd_getMinChampsLabel(table){
  var tab=new Array();
  switch(table.toLowerCase()){
    case 'acces':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'activite':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'adherence':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'adhesion':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'adresse':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'agent':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'appartienta':
      tab.push("");
      tab.push("");
      break;
    case 'appel':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'attribut':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'avoir':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'canton':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'categorie':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'classe':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'codepostal':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'colonnetype':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'compteaux':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'comptegen':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'compteproduit':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'constante':
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'contact':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'devis':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'droit':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'droitprofil':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'ecriture':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'employe':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'equipe':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'estjoignable':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'estlie':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'estresponsable':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'etatpersonne':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'exercice':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'facture':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'facturereglement':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'groupe':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'groupecanton':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'groupetable':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'impression':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'journal':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'lettrage':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'lieu':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'ligne':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'ligneavoir':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'lignefacture':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'lignemodele':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'listechoix':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'modereglement':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'moderepartition':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'modele':
      tab.push("");
      tab.push("");
      break;
    case 'observation':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'periode':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'periodeadherence':
      tab.push("");
      tab.push("");
      break;
    case 'personne':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'personneupdate':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'piece':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'pointage':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'prefixe':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'prix':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'produit':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'propriete':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'reglement':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'repartition':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'responsabilite':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'routage':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'service':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'societe':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'sujet':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'tva':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'tache':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'typeattribut':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'typejournal':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'typelien':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'typepersonne':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'typepropriete':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'typesociete':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'typesujet':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'typetache':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'ville':
      tab.push("");
      tab.push("");
      tab.push("");
      tab.push("");
      break;
    case 'villecp':
      tab.push("");
      tab.push("");
      break;

  }
  return tab;
}


/* Renvoie la liste des liens pour arriver d'une table à une autre */
function mcd_getLiens(){
  var liens=new Array();
  liens.push(new Array());
  liens.push(new Array());
  // Chargement du tableau
  liens[0].push('Adresse.CP_Numero');
  liens[1].push('CodePostal.CP_Numero');
  liens[0].push('Adresse.VI_Numero');
  liens[1].push('Ville.VI_Numero');
  liens[0].push('Adresse.PE_Numero');
  liens[1].push('Personne.PE_Numero');
  liens[0].push('AppartientA.CT_Numero');
  liens[1].push('Canton.CT_Numero');
  liens[0].push('AppartientA.GC_Numero');
  liens[1].push('GroupeCanton.GC_Numero');
  liens[0].push('VilleCP.VI_Numero');
  liens[1].push('Ville.VI_Numero');
  liens[0].push('VilleCP.CP_Numero');
  liens[1].push('CodePostal.CP_Numero');
  liens[0].push('Ville.CT_Numero');
  liens[1].push('Canton.CT_Numero');
  liens[0].push('EstJoignable.PE_Numero');
  liens[1].push('Personne.PE_Numero');
  liens[0].push('EstJoignable.CN_Numero');
  liens[1].push('Contact.CN_Numero');
  liens[0].push('EstLie.EL_Personne1');
  liens[1].push('Personne.PE_Numero');
  liens[0].push('EstLie.EL_Personne2');
  liens[1].push('Personne.PE_Numero');
  liens[0].push('EstLie.TL_Numero');
  liens[1].push('TypeLien.TL_Numero');
  liens[0].push('Personne.TP_Numero');
  liens[1].push('TypePersonne.TP_Numero');
  liens[0].push('Personne.EP_Numero');
  liens[1].push('EtatPersonne.EP_Numero');
  liens[0].push('EstResponsable.PE_Numero');
  liens[1].push('Personne.PE_Numero');
  liens[0].push('EstResponsable.RE_Numero');
  liens[1].push('Responsabilite.RE_Numero');
  liens[0].push('Attribut.PE_Numero');
  liens[1].push('Personne.PE_Numero');
  liens[0].push('Attribut.TA_Numero');
  liens[1].push('TypeAttribut.TA_Numero');
  liens[0].push('Attribut.CR_Numero');
  liens[1].push('Categorie.CR_Numero');
  liens[0].push('Categorie.TA_Numero');
  liens[1].push('TypeAttribut.TA_Numero');
  liens[0].push('TVA.SO_Numero');
  liens[1].push('Societe.SO_Numero');
  liens[0].push('TVA.CG_Numero');
  liens[1].push('CompteGen.CG_Numero');
  liens[0].push('Appel.TH_Numero');
  liens[1].push('TypeTache.TH_Numero');
  liens[0].push('Appel.PE_Numero');
  liens[1].push('Personne.PE_Numero');
  liens[0].push('Societe.PE_Numero');
  liens[1].push('Personne.PE_Numero');
  liens[0].push('Societe.TS_Numero');
  liens[1].push('TypeSociete.TS_Numero');
  liens[0].push('Classe.CL_Societe');
  liens[1].push('Societe.SO_Numero');
  liens[0].push('Propriete.PR_Classe');
  liens[1].push('Classe.CL_Numero');
  liens[0].push('Propriete.PR_Type');
  liens[1].push('TypePropriete.TR_Numero');
  liens[0].push('TypePropriete.TR_Classe');
  liens[1].push('Classe.CL_Numero');
  liens[0].push('ColonneType.CY_TypePropriete');
  liens[1].push('TypePropriete.TR_Numero');
  liens[0].push('ListeChoix.LC_TypePropriete');
  liens[1].push('TypePropriete.TR_Numero');
  liens[0].push('Adherence.PD_Numero');
  liens[1].push('Produit.PD_Numero');
  liens[0].push('PeriodeAdherence.PO_Numero');
  liens[1].push('Periode.PO_Numero');
  liens[0].push('PeriodeAdherence.AH_Numero');
  liens[1].push('Adherence.AH_Numero');
  liens[0].push('Adhesion.PE_Numero');
  liens[1].push('Personne.PE_Numero');
  liens[0].push('Adhesion.PO_Numero');
  liens[1].push('Periode.PO_Numero');
  liens[0].push('Adhesion.AH_Numero');
  liens[1].push('Adherence.AH_Numero');
  liens[0].push('Observation.PE_Numero');
  liens[1].push('Personne.PE_Numero');
  liens[0].push('Prix.TV_Numero');
  liens[1].push('TVA.TV_Numero');
  liens[0].push('Prix.PD_Numero');
  liens[1].push('Produit.PD_Numero');
  liens[0].push('Modele.SO_Numero');
  liens[1].push('Societe.SO_Numero');
  liens[0].push('LigneModele.PD_Numero');
  liens[1].push('Produit.PD_Numero');
  liens[0].push('LigneModele.MO_Numero');
  liens[1].push('Modele.MO_Numero');
  liens[0].push('Produit.JO_Numero');
  liens[1].push('Journal.JO_Numero');
  liens[0].push('Produit.SO_Numero');
  liens[1].push('Societe.SO_Numero');
  liens[0].push('Ligne.PD_Numero');
  liens[1].push('Produit.PD_Numero');
  liens[0].push('Ligne.DE_Numero');
  liens[1].push('Devis.DE_Numero');
  liens[0].push('Ligne.PX_Numero');
  liens[1].push('Prix.PX_Numero');
  liens[0].push('Devis.PE_Numero');
  liens[1].push('Personne.PE_Numero');
  liens[0].push('Devis.EM_Numero');
  liens[1].push('Employe.EM_Numero');
  liens[0].push('LigneFacture.FA_Numero');
  liens[1].push('Facture.FA_Numero');
  liens[0].push('LigneFacture.PX_Numero');
  liens[1].push('Prix.PX_Numero');
  liens[0].push('LigneFacture.PD_Numero');
  liens[1].push('Produit.PD_Numero');
  liens[0].push('Facture.DE_Numero');
  liens[1].push('Devis.DE_Numero');
  liens[0].push('Facture.PE_Numero');
  liens[1].push('Personne.PE_Numero');
  liens[0].push('Facture.AG_Numero');
  liens[1].push('Agent.AG_Numero');
  liens[0].push('Facture.SO_Numero');
  liens[1].push('Societe.SO_Numero');
  liens[0].push('LigneAvoir.PD_Numero');
  liens[1].push('Produit.PD_Numero');
  liens[0].push('LigneAvoir.AV_Numero');
  liens[1].push('Avoir.AV_Numero');
  liens[0].push('LigneAvoir.PX_Numero');
  liens[1].push('Prix.PX_Numero');
  liens[0].push('Avoir.FA_Numero');
  liens[1].push('Facture.FA_Numero');
  liens[0].push('Routage.AD_Numero');
  liens[1].push('Adresse.AD_Numero');
  liens[0].push('Routage.PE_Numero');
  liens[1].push('Personne.PE_Numero');
  liens[0].push('Routage.FA_Numero');
  liens[1].push('Facture.FA_Numero');
  liens[0].push('Service.SE_Societe');
  liens[1].push('Societe.SO_Numero');
  liens[0].push('Service.SE_Agent');
  liens[1].push('Agent.AG_Numero');
  liens[0].push('Employe.DP_Numero');
  liens[1].push('DroitProfil.DP_Numero');
  liens[0].push('Employe.EM_Service');
  liens[1].push('Service.SE_Numero');
  liens[0].push('Employe.EM_Agent');
  liens[1].push('Agent.AG_Numero');
  liens[0].push('Employe.EM_Acces');
  liens[1].push('Acces.AC_Numero');
  liens[0].push('Agent.EQ_Numero');
  liens[1].push('Equipe.EQ_Numero');
  liens[0].push('Exercice.SO_Numero');
  liens[1].push('Societe.SO_Numero');
  liens[0].push('Journal.SO_Numero');
  liens[1].push('Societe.SO_Numero');
  liens[0].push('Journal.TJ_Numero');
  liens[1].push('TypeJournal.TJ_Numero');
  liens[0].push('Journal.CG_Numero');
  liens[1].push('CompteGen.CG_Numero');
  liens[0].push('Piece.JO_Numero');
  liens[1].push('Journal.JO_Numero');
  liens[0].push('Piece.EX_Numero');
  liens[1].push('Exercice.EX_Numero');
  liens[0].push('Ecriture.PI_Numero');
  liens[1].push('Piece.PI_Numero');
  liens[0].push('Ecriture.EX_Numero');
  liens[1].push('Exercice.EX_Numero');
  liens[0].push('Ecriture.CG_Numero');
  liens[1].push('CompteGen.CG_Numero');
  liens[0].push('Ecriture.CA_Numero');
  liens[1].push('CompteAux.CA_Numero');
  liens[0].push('Ecriture.PF_Numero');
  liens[1].push('Prefixe.PF_Numero');
  liens[0].push('Ecriture.PT_Numero');
  liens[1].push('Pointage.PT_Numero');
  liens[0].push('Ecriture.AV_Numero');
  liens[1].push('Avoir.AV_Numero');
  liens[0].push('Ecriture.LT_Numero');
  liens[1].push('Lettrage.LT_Numero');
  liens[0].push('Ecriture.DB_Numero');
  liens[1].push('DonneesBancaires.DB_Numero');
  liens[0].push('Ecriture.RG_Numero');
  liens[1].push('Reglement.RG_Numero');
  liens[0].push('Ecriture.FA_Numero');
  liens[1].push('Facture.FA_Numero');
  liens[0].push('CompteGen.AC_Numero');
  liens[1].push('Acces.AC_Numero');
  liens[0].push('CompteGen.SO_Numero');
  liens[1].push('Societe.SO_Numero');
  liens[0].push('CompteProduit.PD_Numero');
  liens[1].push('Produit.PD_Numero');
  liens[0].push('CompteProduit.CG_Numero');
  liens[1].push('CompteGen.CG_Numero');
  liens[0].push('CompteAux.CG_Numero');
  liens[1].push('CompteGen.CG_Numero');
  liens[0].push('CompteAux.AC_Numero');
  liens[1].push('Acces.AC_Numero');
  liens[0].push('FactureReglement.RG_Numero');
  liens[1].push('Reglement.RG_Numero');
  liens[0].push('FactureReglement.FA_Numero');
  liens[1].push('Facture.FA_Numero');
  liens[0].push('ModeReglement.CG_Numero');
  liens[1].push('CompteGen.CG_Numero');
  liens[0].push('ModeReglement.SO_Numero');
  liens[1].push('Societe.SO_Numero');
  liens[0].push('Reglement.PE_Numero');
  liens[1].push('Personne.PE_Numero');
  liens[0].push('Reglement.MR_Numero');
  liens[1].push('ModeReglement.MR_Numero');
  liens[0].push('Reglement.SO_Numero');
  liens[1].push('Societe.SO_Numero');
  liens[0].push('ModeRepartition.CG_Numero');
  liens[1].push('CompteGen.CG_Numero');
  liens[0].push('ModeRepartition.SO_Numero');
  liens[1].push('Societe.SO_Numero');
  liens[0].push('ModeRepartition.MP_Societe');
  liens[1].push('Societe.SO_Numero');
  liens[0].push('Repartition.RG_Numero');
  liens[1].push('Reglement.RG_Numero');
  liens[0].push('Repartition.MP_Numero');
  liens[1].push('ModeRepartition.MP_Numero');
  liens[0].push('Impression.IM_Societe');
  liens[1].push('Societe.SO_Numero');
  liens[0].push('Droit.DP_Numero');
  liens[1].push('DroitProfil.DP_Numero');
  liens[0].push('Droit.GT_Numero');
  liens[1].push('GroupeTable.GT_Numero');
  liens[0].push('Activite.EM_Numero');
  liens[1].push('Employe.EM_Numero');
  liens[0].push('Activite.ZT_Numero');
  liens[1].push('Tache.ZT_Numero');
  liens[0].push('Activite.ZS_Numero');
  liens[1].push('Sujet.ZS_Numero');
  liens[0].push('Activite.ZL_Numero');
  liens[1].push('Lieu.ZL_Numero');
  liens[0].push('Activite.FA_Numero');
  liens[1].push('Facture.FA_Numero');
  liens[0].push('Activite.DE_Numero');
  liens[1].push('Devis.DE_Numero');
  liens[0].push('Activite.PE_Numero');
  liens[1].push('Personne.PE_Numero');
  liens[0].push('Activite.ZG_Numero');
  liens[1].push('Groupe.ZG_Numero');
  liens[0].push('Sujet.ZU_Numero');
  liens[1].push('TypeSujet.ZU_Numero');
  return liens;
}


/* Renvoie les tables contenants le champs 'couleur' */
function mcd_getTablesCouleur(){
  var tab=new Array();
  tab.push(new Array());
  tab.push(new Array());
  return tab;
}

/* Renvoie les tables contenants le champs 'note' */
function mcd_getTablesNote(){
  var tab=new Array();
  tab.push(new Array());
  tab.push(new Array());
  return tab;
}

/* Renvoie les requêtes de jointure des différents */
function mcd_getRequeteCouleur(table){
  switch(table.toLowerCase()){
      default:
      return '';
  }
  return '';
}

  
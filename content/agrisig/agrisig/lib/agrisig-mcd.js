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
    case 'vue_commune':
    case 'commune':
      switch(champs.toLowerCase()){
        case 'co_numero': type=TYPE_INT;break;
        case 'co_nom': type=TYPE_STRING;break;
        case 'co_siret': type=TYPE_STRING;break;
        case 'couleur': type=TYPE_STRING;break;
        case 'date_creation': type=TYPE_DATETIME;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'vue_codepostal':
    case 'codepostal':
      switch(champs.toLowerCase()){
        case 'cp_numero': type=TYPE_INT;break;
        case 'cp_code': type=TYPE_STRING;break;
        case 'cp_bureau': type=TYPE_STRING;break;
        case 'date_creation': type=TYPE_DATETIME;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'vue_personne':
    case 'personne':
      switch(champs.toLowerCase()){
        case 'pe_numero': type=TYPE_INT;break;
        case 'pe_nom': type=TYPE_STRING;break;
        case 'pe_prenom': type=TYPE_STRING;break;
        case 'pe_siret': type=TYPE_STRING;break;
        case 'pe_entreprise': type=TYPE_BOOL;break;
        case 'pe_exploitant_login': type=TYPE_STRING;break;
        case 'date_creation': type=TYPE_DATETIME;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'vue_contact':
    case 'contact':
      switch(champs.toLowerCase()){
        case 'cn_numero': type=TYPE_INT;break;
        case 'cn_tel': type=TYPE_STRING;break;
        case 'cn_fax': type=TYPE_STRING;break;
        case 'cn_email': type=TYPE_STRING;break;
        case 'date_creation': type=TYPE_DATETIME;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'vue_profil':
    case 'profil':
      switch(champs.toLowerCase()){
        case 'pr_numero': type=TYPE_INT;break;
        case 'pr_nom': type=TYPE_STRING;break;
        case 'pr_exploitant_login': type=TYPE_STRING;break;
        case 'pr_partage': type=TYPE_BOOL;break;
        case 'pr_systeme': type=TYPE_BOOL;break;
        case 'couleur': type=TYPE_STRING;break;
        case 'note': type=TYPE_STRING;break;
        case 'date_creation': type=TYPE_DATETIME;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'vue_profiltypecouche':
    case 'profiltypecouche':
      switch(champs.toLowerCase()){
        case 'pc_profil': type=TYPE_INT;break;
        case 'pc_typecouche': type=TYPE_INT;break;
        case 'date_creation': type=TYPE_DATETIME;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'vue_typeprofil':
    case 'typeprofil':
      switch(champs.toLowerCase()){
        case 'tp_numero': type=TYPE_INT;break;
        case 'tp_nom': type=TYPE_STRING;break;
        case 'couleur': type=TYPE_STRING;break;
        case 'note': type=TYPE_STRING;break;
        case 'date_creation': type=TYPE_DATETIME;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'vue_typeproduit':
    case 'typeproduit':
      switch(champs.toLowerCase()){
        case 'td_numero': type=TYPE_INT;break;
        case 'td_nom': type=TYPE_STRING;break;
        case 'couleur': type=TYPE_STRING;break;
        case 'note': type=TYPE_STRING;break;
        case 'date_creation': type=TYPE_DATETIME;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'vue_firme':
    case 'firme':
      switch(champs.toLowerCase()){
        case 'fi_numero': type=TYPE_INT;break;
        case 'fi_nom': type=TYPE_STRING;break;
        case 'date_creation': type=TYPE_DATETIME;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'vue_contrainte':
    case 'contrainte':
      switch(champs.toLowerCase()){
        case 'ct_numero': type=TYPE_INT;break;
        case 'ct_nom': type=TYPE_STRING;break;
        case 'ct_requete': type=TYPE_STRING;break;
        case 'ct_pointcontrole': type=TYPE_STRING;break;
        case 'ct_formule': type=TYPE_STRING;break;
        case 'ct_description': type=TYPE_STRING;break;
        case 'ct_exploitant_login': type=TYPE_STRING;break;
        case 'ct_systeme': type=TYPE_BOOL;break;
        case 'note': type=TYPE_STRING;break;
        case 'date_creation': type=TYPE_DATETIME;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'vue_document':
    case 'document':
      switch(champs.toLowerCase()){
        case 'do_numero': type=TYPE_INT;break;
        case 'do_nom': type=TYPE_STRING;break;
        case 'do_date': type=TYPE_DATE;break;
        case 'do_typedocument': type=TYPE_INT;break;
        case 'do_exploitant_login': type=TYPE_STRING;break;
        case 'note': type=TYPE_STRING;break;
        case 'date_creation': type=TYPE_DATETIME;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'vue_typedocument':
    case 'typedocument':
      switch(champs.toLowerCase()){
        case 'to_numero': type=TYPE_INT;break;
        case 'to_nom': type=TYPE_STRING;break;
        case 'to_description': type=TYPE_STRING;break;
        case 'note': type=TYPE_STRING;break;
        case 'date_creation': type=TYPE_DATETIME;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'vue_adresse':
    case 'adresse':
      switch(champs.toLowerCase()){
        case 'ad_numero': type=TYPE_INT;break;
        case 'ad_codepostal': type=TYPE_INT;break;
        case 'ad_commune': type=TYPE_INT;break;
        case 'ad_addr1': type=TYPE_STRING;break;
        case 'ad_addr2': type=TYPE_STRING;break;
        case 'ad_addr3': type=TYPE_STRING;break;
        case 'date_creation': type=TYPE_DATETIME;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'vue_exploitant':
    case 'exploitant':
      switch(champs.toLowerCase()){
        case 'ex_numero': type=TYPE_INT;break;
        case 'ex_login': type=TYPE_STRING;break;
        case 'ex_nom': type=TYPE_STRING;break;
        case 'ex_prenom': type=TYPE_STRING;break;
        case 'ex_numpac': type=TYPE_STRING;break;
        case 'ex_exclu': type=TYPE_BOOL;break;
        case 'ex_adresse': type=TYPE_INT;break;
        case 'date_creation': type=TYPE_DATETIME;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'vue_preference':
    case 'preference':
      switch(champs.toLowerCase()){
        case 'pf_champs': type=TYPE_STRING;break;
        case 'pf_valeur': type=TYPE_STRING;break;
        case 'pf_exploitant_login': type=TYPE_STRING;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'vue_couche':
    case 'couche':
      switch(champs.toLowerCase()){
        case 'cc_numero': type=TYPE_INT;break;
        case 'cc_nom': type=TYPE_STRING;break;
        case 'cc_typecouche': type=TYPE_INT;break;
        case 'cc_exploitant_login': type=TYPE_STRING;break;
        case 'cc_systeme': type=TYPE_BOOL;break;
        case 'cc_version': type=TYPE_INT;break;
        case 'cc_mere': type=TYPE_INT;break;
        case 'cc_date': type=TYPE_DATE;break;
        case 'couleur': type=TYPE_STRING;break;
        case 'note': type=TYPE_STRING;break;
        case 'date_creation': type=TYPE_DATETIME;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'vue_typecouche':
    case 'typecouche':
      switch(champs.toLowerCase()){
        case 'tc_numero': type=TYPE_INT;break;
        case 'tc_nom': type=TYPE_STRING;break;
        case 'tc_sansilots': type=TYPE_BOOL;break;
        case 'tc_systeme': type=TYPE_BOOL;break;
        case 'couleur': type=TYPE_STRING;break;
        case 'note': type=TYPE_STRING;break;
        case 'date_creation': type=TYPE_DATETIME;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'vue_groupe':
    case 'groupe':
      switch(champs.toLowerCase()){
        case 'gr_numero': type=TYPE_INT;break;
        case 'gr_nom': type=TYPE_STRING;break;
        case 'gr_couche': type=TYPE_INT;break;
        case 'couleur': type=TYPE_STRING;break;
        case 'note': type=TYPE_STRING;break;
        case 'date_creation': type=TYPE_DATETIME;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'vue_ilot':
    case 'ilot':
      switch(champs.toLowerCase()){
        case 'il_numero': type=TYPE_INT;break;
        case 'il_code': type=TYPE_STRING;break;
        case 'il_trace': type=TYPE_GEOMETRY;break;
        case 'il_surfaceref': type=TYPE_FLOAT;break;
        case 'il_exploitant_login': type=TYPE_STRING;break;
        case 'il_commune': type=TYPE_INT;break;
        case 'il_nom': type=TYPE_STRING;break;
        case 'couleur': type=TYPE_STRING;break;
        case 'note': type=TYPE_STRING;break;
        case 'date_creation': type=TYPE_DATETIME;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'vue_modificationilot':
    case 'modificationilot':
      switch(champs.toLowerCase()){
        case 'mi_date': type=TYPE_DATE;break;
        case 'mi_pere': type=TYPE_INT;break;
        case 'mi_fils': type=TYPE_INT;break;
        case 'date_creation': type=TYPE_DATETIME;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'vue_sousilot':
    case 'sousilot':
      switch(champs.toLowerCase()){
        case 'si_numero': type=TYPE_INT;break;
        case 'si_trace': type=TYPE_GEOMETRY;break;
        case 'si_ilot': type=TYPE_INT;break;
        case 'si_adresse': type=TYPE_INT;break;
        case 'si_couche': type=TYPE_INT;break;
        case 'si_nom': type=TYPE_STRING;break;
        case 'couleur': type=TYPE_STRING;break;
        case 'note': type=TYPE_STRING;break;
        case 'date_creation': type=TYPE_DATETIME;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'vue_modificationsousilot':
    case 'modificationsousilot':
      switch(champs.toLowerCase()){
        case 'ms_date': type=TYPE_DATE;break;
        case 'ms_pere': type=TYPE_INT;break;
        case 'ms_fils': type=TYPE_INT;break;
        case 'date_creation': type=TYPE_DATETIME;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'vue_communecp':
    case 'communecp':
      switch(champs.toLowerCase()){
        case 'mc_commune': type=TYPE_INT;break;
        case 'mc_codepostal': type=TYPE_INT;break;
        case 'date_creation': type=TYPE_DATETIME;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'vue_estjoignable':
    case 'estjoignable':
      switch(champs.toLowerCase()){
        case 'ej_personne': type=TYPE_INT;break;
        case 'ej_contact': type=TYPE_INT;break;
        case 'date_creation': type=TYPE_DATETIME;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'vue_adressepersonne':
    case 'adressepersonne':
      switch(champs.toLowerCase()){
        case 'ap_personne': type=TYPE_INT;break;
        case 'ap_adresse': type=TYPE_INT;break;
        case 'date_creation': type=TYPE_DATETIME;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'vue_applique':
    case 'applique':
      switch(champs.toLowerCase()){
        case 'al_numero': type=TYPE_INT;break;
        case 'al_sousilot': type=TYPE_INT;break;
        case 'al_profil': type=TYPE_INT;break;
        case 'al_exploitant_login': type=TYPE_STRING;break;
        case 'al_periodedebut': type=TYPE_DATE;break;
        case 'al_periodefin': type=TYPE_DATE;break;
        case 'date_creation': type=TYPE_DATETIME;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'vue_estdetype':
    case 'estdetype':
      switch(champs.toLowerCase()){
        case 'et_typeprofil': type=TYPE_INT;break;
        case 'et_profil': type=TYPE_INT;break;
        case 'date_creation': type=TYPE_DATETIME;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'vue_composant':
    case 'composant':
      switch(champs.toLowerCase()){
        case 'cm_numero': type=TYPE_INT;break;
        case 'cm_nom': type=TYPE_STRING;break;
        case 'cm_formule': type=TYPE_STRING;break;
        case 'cm_description': type=TYPE_STRING;break;
        case 'note': type=TYPE_STRING;break;
        case 'date_creation': type=TYPE_DATETIME;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'vue_compose':
    case 'compose':
      switch(champs.toLowerCase()){
        case 'ce_numero': type=TYPE_INT;break;
        case 'ce_composition': type=TYPE_INT;break;
        case 'ce_composant': type=TYPE_INT;break;
        case 'ce_concentration': type=TYPE_FLOAT;break;
        case 'ce_unite': type=TYPE_STRING;break;
        case 'date_creation': type=TYPE_DATETIME;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'vue_composition':
    case 'composition':
      switch(champs.toLowerCase()){
        case 'cs_numero': type=TYPE_INT;break;
        case 'cs_nom': type=TYPE_STRING;break;
        case 'note': type=TYPE_STRING;break;
        case 'date_creation': type=TYPE_DATETIME;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'vue_classement':
    case 'classement':
      switch(champs.toLowerCase()){
        case 'cl_numero': type=TYPE_INT;break;
        case 'cl_nom': type=TYPE_STRING;break;
        case 'cl_symbole': type=TYPE_STRING;break;
        case 'cl_description': type=TYPE_STRING;break;
        case 'date_creation': type=TYPE_DATETIME;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'vue_declassement':
    case 'declassement':
      switch(champs.toLowerCase()){
        case 'dc_produit': type=TYPE_INT;break;
        case 'dc_classement': type=TYPE_INT;break;
        case 'date_creation': type=TYPE_DATETIME;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'vue_incompatibleavec':
    case 'incompatibleavec':
      switch(champs.toLowerCase()){
        case 'ia_produit': type=TYPE_INT;break;
        case 'ia_classement': type=TYPE_INT;break;
        case 'date_creation': type=TYPE_DATETIME;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'vue_forme':
    case 'forme':
      switch(champs.toLowerCase()){
        case 'fo_numero': type=TYPE_INT;break;
        case 'fo_nom': type=TYPE_STRING;break;
        case 'fo_abbrevation': type=TYPE_STRING;break;
        case 'fo_description': type=TYPE_STRING;break;
        case 'date_creation': type=TYPE_DATETIME;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'vue_espece':
    case 'espece':
      switch(champs.toLowerCase()){
        case 'es_numero': type=TYPE_INT;break;
        case 'es_nom': type=TYPE_STRING;break;
        case 'couleur': type=TYPE_STRING;break;
        case 'note': type=TYPE_STRING;break;
        case 'date_creation': type=TYPE_DATETIME;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'vue_variete':
    case 'variete':
      switch(champs.toLowerCase()){
        case 'va_numero': type=TYPE_INT;break;
        case 'va_nom': type=TYPE_STRING;break;
        case 'va_espece': type=TYPE_INT;break;
        case 'couleur': type=TYPE_STRING;break;
        case 'date_creation': type=TYPE_DATETIME;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'vue_dateavantrecolte':
    case 'dateavantrecolte':
      switch(champs.toLowerCase()){
        case 'da_numero': type=TYPE_INT;break;
        case 'da_composant': type=TYPE_INT;break;
        case 'da_espece': type=TYPE_INT;break;
        case 'da_dar': type=TYPE_INT;break;
        case 'date_creation': type=TYPE_DATETIME;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'vue_produit':
    case 'produit':
      switch(champs.toLowerCase()){
        case 'pd_numero': type=TYPE_INT;break;
        case 'pd_code': type=TYPE_STRING;break;
        case 'pd_nom': type=TYPE_STRING;break;
        case 'pd_unite': type=TYPE_INT;break;
        case 'pd_typeproduit': type=TYPE_INT;break;
        case 'pd_forme': type=TYPE_INT;break;
        case 'pd_firme': type=TYPE_INT;break;
        case 'pd_variete': type=TYPE_INT;break;
        case 'pd_composition': type=TYPE_INT;break;
        case 'couleur': type=TYPE_STRING;break;
        case 'note': type=TYPE_STRING;break;
        case 'date_creation': type=TYPE_DATETIME;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'vue_produitrecolte':
    case 'produitrecolte':
      switch(champs.toLowerCase()){
        case 'pl_numero': type=TYPE_INT;break;
        case 'pl_code': type=TYPE_STRING;break;
        case 'pl_nom': type=TYPE_STRING;break;
        case 'pl_unite': type=TYPE_INT;break;
        case 'pl_prix': type=TYPE_FLOAT;break;
        case 'pl_typeproduit': type=TYPE_INT;break;
        case 'pl_variete': type=TYPE_INT;break;
        case 'pl_exploitant_login': type=TYPE_STRING;break;
        case 'couleur': type=TYPE_STRING;break;
        case 'note': type=TYPE_STRING;break;
        case 'date_creation': type=TYPE_DATETIME;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'vue_recolte':
    case 'recolte':
      switch(champs.toLowerCase()){
        case 're_numero': type=TYPE_INT;break;
        case 're_date': type=TYPE_DATE;break;
        case 're_quantite': type=TYPE_FLOAT;break;
        case 're_sousilot': type=TYPE_INT;break;
        case 're_produitrecolte': type=TYPE_INT;break;
        case 're_differencequantite': type=TYPE_FLOAT;break;
        case 're_humidite': type=TYPE_FLOAT;break;
        case 'note': type=TYPE_STRING;break;
        case 'date_creation': type=TYPE_DATETIME;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'vue_recolteapplique':
    case 'recolteapplique':
      switch(champs.toLowerCase()){
        case 'ra_recolte': type=TYPE_INT;break;
        case 'ra_applique': type=TYPE_INT;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'vue_vente':
    case 'vente':
      switch(champs.toLowerCase()){
        case 've_numero': type=TYPE_INT;break;
        case 've_quantite': type=TYPE_FLOAT;break;
        case 've_prix': type=TYPE_FLOAT;break;
        case 've_personne': type=TYPE_INT;break;
        case 've_recolte': type=TYPE_INT;break;
        case 've_date': type=TYPE_DATE;break;
        case 'note': type=TYPE_STRING;break;
        case 'date_creation': type=TYPE_DATETIME;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'vue_article':
    case 'article':
      switch(champs.toLowerCase()){
        case 'ar_numero': type=TYPE_INT;break;
        case 'ar_nom': type=TYPE_STRING;break;
        case 'ar_prix': type=TYPE_FLOAT;break;
        case 'ar_exploitant_login': type=TYPE_STRING;break;
        case 'ar_produit': type=TYPE_INT;break;
        case 'ar_conditionnement': type=TYPE_INT;break;
        case 'ar_personne': type=TYPE_INT;break;
        case 'ar_codeean13': type=TYPE_STRING;break;
        case 'ar_code2': type=TYPE_STRING;break;
        case 'ar_code3': type=TYPE_STRING;break;
        case 'note': type=TYPE_STRING;break;
        case 'date_creation': type=TYPE_DATETIME;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'vue_achat':
    case 'achat':
      switch(champs.toLowerCase()){
        case 'ac_numero': type=TYPE_INT;break;
        case 'ac_quantite': type=TYPE_FLOAT;break;
        case 'ac_article': type=TYPE_INT;break;
        case 'ac_date': type=TYPE_DATE;break;
        case 'ac_differencequantite': type=TYPE_FLOAT;break;
        case 'ac_exploitant_login': type=TYPE_STRING;break;
        case 'note': type=TYPE_STRING;break;
        case 'date_creation': type=TYPE_DATETIME;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'vue_conditionnement':
    case 'conditionnement':
      switch(champs.toLowerCase()){
        case 'ca_numero': type=TYPE_INT;break;
        case 'ca_nom': type=TYPE_STRING;break;
        case 'ca_quantite': type=TYPE_FLOAT;break;
        case 'ca_unite': type=TYPE_INT;break;
        case 'ca_description': type=TYPE_STRING;break;
        case 'note': type=TYPE_STRING;break;
        case 'date_creation': type=TYPE_DATETIME;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'vue_unite':
    case 'unite':
      switch(champs.toLowerCase()){
        case 'un_numero': type=TYPE_INT;break;
        case 'un_nom': type=TYPE_STRING;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'vue_definiprofil':
    case 'definiprofil':
      switch(champs.toLowerCase()){
        case 'dp_numero': type=TYPE_INT;break;
        case 'dp_profil': type=TYPE_INT;break;
        case 'dp_article': type=TYPE_INT;break;
        case 'dp_densite': type=TYPE_FLOAT;break;
        case 'date_creation': type=TYPE_DATETIME;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'vue_lot':
    case 'lot':
      switch(champs.toLowerCase()){
        case 'lo_numero': type=TYPE_INT;break;
        case 'lo_definiprofil': type=TYPE_INT;break;
        case 'lo_applique': type=TYPE_INT;break;
        case 'lo_lot': type=TYPE_STRING;break;
        case 'date_creation': type=TYPE_DATETIME;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'vue_contraintesousilot':
    case 'contraintesousilot':
      switch(champs.toLowerCase()){
        case 'ci_contrainte': type=TYPE_INT;break;
        case 'ci_sousilot': type=TYPE_INT;break;
        case 'date_creation': type=TYPE_DATETIME;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'vue_documente':
    case 'documente':
      switch(champs.toLowerCase()){
        case 'de_contrainte': type=TYPE_INT;break;
        case 'de_document': type=TYPE_INT;break;
        case 'date_creation': type=TYPE_DATETIME;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'vue_sousilotgroupe':
    case 'sousilotgroupe':
      switch(champs.toLowerCase()){
        case 'sg_sousilot': type=TYPE_INT;break;
        case 'sg_groupe': type=TYPE_INT;break;
        case 'date_creation': type=TYPE_DATETIME;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'vue_contrainteprofil':
    case 'contrainteprofil':
      switch(champs.toLowerCase()){
        case 'cr_contrainte': type=TYPE_INT;break;
        case 'cr_profil': type=TYPE_INT;break;
        case 'date_creation': type=TYPE_DATETIME;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'vue_contrainteexploitant':
    case 'contrainteexploitant':
      switch(champs.toLowerCase()){
        case 'cx_contrainte': type=TYPE_INT;break;
        case 'cx_exploitant': type=TYPE_INT;break;
        case 'date_creation': type=TYPE_DATETIME;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'vue_materiel':
    case 'materiel':
      switch(champs.toLowerCase()){
        case 'ma_numero': type=TYPE_INT;break;
        case 'ma_nom': type=TYPE_STRING;break;
        case 'ma_modele': type=TYPE_INT;break;
        case 'ma_dateachat': type=TYPE_DATE;break;
        case 'ma_dateservice': type=TYPE_DATE;break;
        case 'ma_datehorsservice': type=TYPE_DATE;break;
        case 'ma_prix': type=TYPE_FLOAT;break;
        case 'ma_exploitant_login': type=TYPE_STRING;break;
        case 'note': type=TYPE_STRING;break;
        case 'date_creation': type=TYPE_DATETIME;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'vue_modele':
    case 'modele':
      switch(champs.toLowerCase()){
        case 'mo_numero': type=TYPE_INT;break;
        case 'mo_nom': type=TYPE_STRING;break;
        case 'mo_reference': type=TYPE_STRING;break;
        case 'mo_firme': type=TYPE_INT;break;
        case 'note': type=TYPE_STRING;break;
        case 'date_creation': type=TYPE_DATETIME;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'vue_prelevement':
    case 'prelevement':
      switch(champs.toLowerCase()){
        case 'pv_numero': type=TYPE_INT;break;
        case 'pv_nom': type=TYPE_STRING;break;
        case 'pv_typeprelevement': type=TYPE_INT;break;
        case 'pv_x': type=TYPE_FLOAT;break;
        case 'pv_y': type=TYPE_FLOAT;break;
        case 'pv_z': type=TYPE_FLOAT;break;
        case 'pv_exploitant_login': type=TYPE_STRING;break;
        case 'couleur': type=TYPE_STRING;break;
        case 'note': type=TYPE_STRING;break;
        case 'date_creation': type=TYPE_DATETIME;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'vue_typeprelevement':
    case 'typeprelevement':
      switch(champs.toLowerCase()){
        case 'tv_numero': type=TYPE_INT;break;
        case 'tv_nom': type=TYPE_STRING;break;
        case 'couleur': type=TYPE_STRING;break;
        case 'note': type=TYPE_STRING;break;
        case 'date_creation': type=TYPE_DATETIME;break;
        default: type=TYPE_UNDEFINED;
      }
      break;
    case 'vue_irrigation':
    case 'irrigation':
      switch(champs.toLowerCase()){
        case 'ir_numero': type=TYPE_INT;break;
        case 'ir_sousilot': type=TYPE_INT;break;
        case 'ir_prelevement': type=TYPE_INT;break;
        case 'ir_debit': type=TYPE_FLOAT;break;
        case 'ir_periodedebut': type=TYPE_DATETIME;break;
        case 'ir_periodefin': type=TYPE_DATETIME;break;
        case 'note': type=TYPE_STRING;break;
        case 'date_creation': type=TYPE_DATETIME;break;
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
    case 'vue_commune':
    case 'commune':
      switch(champs.toLowerCase()){
        case 'co_numero': label="Numéro";break;
        case 'co_nom': label="Nom";break;
        case 'co_siret': label="Numéro SIRET";break;
        case 'couleur': label="Couleur";break;
        case 'date_creation': label="Date de création";break;
        default: label="";
      }
      break;
    case 'vue_codepostal':
    case 'codepostal':
      switch(champs.toLowerCase()){
        case 'cp_numero': label="Numéro";break;
        case 'cp_code': label="Code postal";break;
        case 'cp_bureau': label="Bureau de poste";break;
        case 'date_creation': label="Date de création";break;
        default: label="";
      }
      break;
    case 'vue_personne':
    case 'personne':
      switch(champs.toLowerCase()){
        case 'pe_numero': label="Numéro";break;
        case 'pe_nom': label="Nom";break;
        case 'pe_prenom': label="Prénom";break;
        case 'pe_siret': label="Numéro SIRET";break;
        case 'pe_entreprise': label="Entreprise";break;
        case 'pe_exploitant_login': label="Login de l'exploitant";break;
        case 'date_creation': label="Date de création";break;
        default: label="";
      }
      break;
    case 'vue_contact':
    case 'contact':
      switch(champs.toLowerCase()){
        case 'cn_numero': label="Numéro";break;
        case 'cn_tel': label="N° Téléphone";break;
        case 'cn_fax': label="N° Fax";break;
        case 'cn_email': label="Adresse e-mail";break;
        case 'date_creation': label="Date de création";break;
        default: label="";
      }
      break;
    case 'vue_profil':
    case 'profil':
      switch(champs.toLowerCase()){
        case 'pr_numero': label="Numéro";break;
        case 'pr_nom': label="Nom";break;
        case 'pr_exploitant_login': label="Login de l'exploitant";break;
        case 'pr_partage': label="Partagé";break;
        case 'pr_systeme': label="Profil système";break;
        case 'couleur': label="Couleur";break;
        case 'note': label="Note";break;
        case 'date_creation': label="Date de création";break;
        default: label="";
      }
      break;
    case 'vue_profiltypecouche':
    case 'profiltypecouche':
      switch(champs.toLowerCase()){
        case 'pc_profil': label="Profil";break;
        case 'pc_typecouche': label="Type de couche";break;
        case 'date_creation': label="Date de création";break;
        default: label="";
      }
      break;
    case 'vue_typeprofil':
    case 'typeprofil':
      switch(champs.toLowerCase()){
        case 'tp_numero': label="Numéro";break;
        case 'tp_nom': label="Nom";break;
        case 'couleur': label="Couleur";break;
        case 'note': label="Note";break;
        case 'date_creation': label="Date de création";break;
        default: label="";
      }
      break;
    case 'vue_typeproduit':
    case 'typeproduit':
      switch(champs.toLowerCase()){
        case 'td_numero': label="Numéro";break;
        case 'td_nom': label="Nom";break;
        case 'couleur': label="Couleur";break;
        case 'note': label="Note";break;
        case 'date_creation': label="Date de création";break;
        default: label="";
      }
      break;
    case 'vue_firme':
    case 'firme':
      switch(champs.toLowerCase()){
        case 'fi_numero': label="Numéro";break;
        case 'fi_nom': label="Nom";break;
        case 'date_creation': label="Date de création";break;
        default: label="";
      }
      break;
    case 'vue_contrainte':
    case 'contrainte':
      switch(champs.toLowerCase()){
        case 'ct_numero': label="Numéro";break;
        case 'ct_nom': label="Nom";break;
        case 'ct_requete': label="Requête";break;
        case 'ct_pointcontrole': label="Point de contrôle";break;
        case 'ct_formule': label="Formule logique";break;
        case 'ct_description': label="Description";break;
        case 'ct_exploitant_login': label="Login de l'exploitant";break;
        case 'ct_systeme': label="Contrainte système";break;
        case 'note': label="Note";break;
        case 'date_creation': label="Date de création";break;
        default: label="";
      }
      break;
    case 'vue_document':
    case 'document':
      switch(champs.toLowerCase()){
        case 'do_numero': label="Numéro";break;
        case 'do_nom': label="Nom";break;
        case 'do_date': label="Date";break;
        case 'do_typedocument': label="Type de document";break;
        case 'do_exploitant_login': label="Exploitant";break;
        case 'note': label="Note";break;
        case 'date_creation': label="Date de création";break;
        default: label="";
      }
      break;
    case 'vue_typedocument':
    case 'typedocument':
      switch(champs.toLowerCase()){
        case 'to_numero': label="Numéro";break;
        case 'to_nom': label="Nom";break;
        case 'to_description': label="Description";break;
        case 'note': label="Note";break;
        case 'date_creation': label="Date de création";break;
        default: label="";
      }
      break;
    case 'vue_adresse':
    case 'adresse':
      switch(champs.toLowerCase()){
        case 'ad_numero': label="Numéro";break;
        case 'ad_codepostal': label="Code postal";break;
        case 'ad_commune': label="Commune";break;
        case 'ad_addr1': label="Adresse";break;
        case 'ad_addr2': label="Complément d'adresse n°1";break;
        case 'ad_addr3': label="Complément d'adresse n°2";break;
        case 'date_creation': label="Date de création";break;
        default: label="";
      }
      break;
    case 'vue_exploitant':
    case 'exploitant':
      switch(champs.toLowerCase()){
        case 'ex_numero': label="Numéro";break;
        case 'ex_login': label="Login";break;
        case 'ex_nom': label="Nom";break;
        case 'ex_prenom': label="Prénom";break;
        case 'ex_numpac': label="Numéro P.A.C.";break;
        case 'ex_exclu': label="Exclu";break;
        case 'ex_adresse': label="Adresse";break;
        case 'date_creation': label="Date de création";break;
        default: label="";
      }
      break;
    case 'vue_preference':
    case 'preference':
      switch(champs.toLowerCase()){
        case 'pf_champs': label="Champs";break;
        case 'pf_valeur': label="Valeur";break;
        case 'pf_exploitant_login': label="Exploitant";break;
        default: label="";
      }
      break;
    case 'vue_couche':
    case 'couche':
      switch(champs.toLowerCase()){
        case 'cc_numero': label="Numéro";break;
        case 'cc_nom': label="Nom";break;
        case 'cc_typecouche': label="Type de couche";break;
        case 'cc_exploitant_login': label="Exploitant";break;
        case 'cc_systeme': label="Partagée";break;
        case 'cc_version': label="Numéro de version";break;
        case 'cc_mere': label="Couche mère";break;
        case 'cc_date': label="Date de séparation";break;
        case 'couleur': label="Couleur";break;
        case 'note': label="Note";break;
        case 'date_creation': label="Date de création";break;
        default: label="";
      }
      break;
    case 'vue_typecouche':
    case 'typecouche':
      switch(champs.toLowerCase()){
        case 'tc_numero': label="Numéro";break;
        case 'tc_nom': label="Nom";break;
        case 'tc_sansilots': label="Ilots non-nécessaires";break;
        case 'tc_systeme': label="Type de couche système";break;
        case 'couleur': label="Couleur";break;
        case 'note': label="Note";break;
        case 'date_creation': label="Date de création";break;
        default: label="";
      }
      break;
    case 'vue_groupe':
    case 'groupe':
      switch(champs.toLowerCase()){
        case 'gr_numero': label="Numéro";break;
        case 'gr_nom': label="Nom";break;
        case 'gr_couche': label="Couche contenante";break;
        case 'couleur': label="Couleur";break;
        case 'note': label="Note";break;
        case 'date_creation': label="Date de création";break;
        default: label="";
      }
      break;
    case 'vue_ilot':
    case 'ilot':
      switch(champs.toLowerCase()){
        case 'il_numero': label="Numéro";break;
        case 'il_code': label="Code P.A.C.";break;
        case 'il_trace': label="Tracé géographique";break;
        case 'il_surfaceref': label="Surface de référence";break;
        case 'il_exploitant_login': label="Exploitant";break;
        case 'il_commune': label="Commune";break;
        case 'il_nom': label="Nom";break;
        case 'couleur': label="Couleur";break;
        case 'note': label="Note";break;
        case 'date_creation': label="Date de création";break;
        default: label="";
      }
      break;
    case 'vue_modificationilot':
    case 'modificationilot':
      switch(champs.toLowerCase()){
        case 'mi_date': label="Date";break;
        case 'mi_pere': label="Ilot père";break;
        case 'mi_fils': label="Ilot fils";break;
        case 'date_creation': label="Date de création";break;
        default: label="";
      }
      break;
    case 'vue_sousilot':
    case 'sousilot':
      switch(champs.toLowerCase()){
        case 'si_numero': label="Numéro";break;
        case 'si_trace': label="Tracé géographique";break;
        case 'si_ilot': label="Ilot père";break;
        case 'si_adresse': label="Adresse";break;
        case 'si_couche': label="Couche";break;
        case 'si_nom': label="Nom";break;
        case 'couleur': label="Couleur";break;
        case 'note': label="Note";break;
        case 'date_creation': label="Date de création";break;
        default: label="";
      }
      break;
    case 'vue_modificationsousilot':
    case 'modificationsousilot':
      switch(champs.toLowerCase()){
        case 'ms_date': label="Date";break;
        case 'ms_pere': label="Sous-îlot père";break;
        case 'ms_fils': label="Sous-îlot fils";break;
        case 'date_creation': label="Date de création";break;
        default: label="";
      }
      break;
    case 'vue_communecp':
    case 'communecp':
      switch(champs.toLowerCase()){
        case 'mc_commune': label="Commune";break;
        case 'mc_codepostal': label="Code postal";break;
        case 'date_creation': label="Date de création";break;
        default: label="";
      }
      break;
    case 'vue_estjoignable':
    case 'estjoignable':
      switch(champs.toLowerCase()){
        case 'ej_personne': label="Personne";break;
        case 'ej_contact': label="Contact";break;
        case 'date_creation': label="Date de création";break;
        default: label="";
      }
      break;
    case 'vue_adressepersonne':
    case 'adressepersonne':
      switch(champs.toLowerCase()){
        case 'ap_personne': label="Personne";break;
        case 'ap_adresse': label="Adresse";break;
        case 'date_creation': label="Date de création";break;
        default: label="";
      }
      break;
    case 'vue_applique':
    case 'applique':
      switch(champs.toLowerCase()){
        case 'al_numero': label="Numéro";break;
        case 'al_sousilot': label="Sous-îlot cible";break;
        case 'al_profil': label="Profil appliqué";break;
        case 'al_exploitant_login': label="Exploitant";break;
        case 'al_periodedebut': label="Date de début";break;
        case 'al_periodefin': label="Date de fin";break;
        case 'date_creation': label="Date de création";break;
        default: label="";
      }
      break;
    case 'vue_estdetype':
    case 'estdetype':
      switch(champs.toLowerCase()){
        case 'et_typeprofil': label="Famille de profil";break;
        case 'et_profil': label="Profil";break;
        case 'date_creation': label="Date de création";break;
        default: label="";
      }
      break;
    case 'vue_composant':
    case 'composant':
      switch(champs.toLowerCase()){
        case 'cm_numero': label="Numéro";break;
        case 'cm_nom': label="Nom";break;
        case 'cm_formule': label="Formule chimique";break;
        case 'cm_description': label="Description";break;
        case 'note': label="Note";break;
        case 'date_creation': label="Date de création";break;
        default: label="";
      }
      break;
    case 'vue_compose':
    case 'compose':
      switch(champs.toLowerCase()){
        case 'ce_numero': label="Numéro";break;
        case 'ce_composition': label="Composition";break;
        case 'ce_composant': label="Composant";break;
        case 'ce_concentration': label="Concentration";break;
        case 'ce_unite': label="Unité";break;
        case 'date_creation': label="Date de création";break;
        default: label="";
      }
      break;
    case 'vue_composition':
    case 'composition':
      switch(champs.toLowerCase()){
        case 'cs_numero': label="Numéro";break;
        case 'cs_nom': label="Nom";break;
        case 'note': label="Note";break;
        case 'date_creation': label="Date de création";break;
        default: label="";
      }
      break;
    case 'vue_classement':
    case 'classement':
      switch(champs.toLowerCase()){
        case 'cl_numero': label="Numéro";break;
        case 'cl_nom': label="Nom";break;
        case 'cl_symbole': label="Symbole";break;
        case 'cl_description': label="Description";break;
        case 'date_creation': label="Date de création";break;
        default: label="";
      }
      break;
    case 'vue_declassement':
    case 'declassement':
      switch(champs.toLowerCase()){
        case 'dc_produit': label="Produit";break;
        case 'dc_classement': label="Classement";break;
        case 'date_creation': label="Date de création";break;
        default: label="";
      }
      break;
    case 'vue_incompatibleavec':
    case 'incompatibleavec':
      switch(champs.toLowerCase()){
        case 'ia_produit': label="Produit";break;
        case 'ia_classement': label="Classement";break;
        case 'date_creation': label="Date de création";break;
        default: label="";
      }
      break;
    case 'vue_forme':
    case 'forme':
      switch(champs.toLowerCase()){
        case 'fo_numero': label="Numero";break;
        case 'fo_nom': label="Nom";break;
        case 'fo_abbrevation': label="Abbréviation";break;
        case 'fo_description': label="Description";break;
        case 'date_creation': label="Date de création";break;
        default: label="";
      }
      break;
    case 'vue_espece':
    case 'espece':
      switch(champs.toLowerCase()){
        case 'es_numero': label="Numéro";break;
        case 'es_nom': label="Nom";break;
        case 'couleur': label="Couleur";break;
        case 'note': label="Note";break;
        case 'date_creation': label="Date de création";break;
        default: label="";
      }
      break;
    case 'vue_variete':
    case 'variete':
      switch(champs.toLowerCase()){
        case 'va_numero': label="Numéro";break;
        case 'va_nom': label="Nom";break;
        case 'va_espece': label="Espèce";break;
        case 'couleur': label="Couleur";break;
        case 'date_creation': label="Date de création";break;
        default: label="";
      }
      break;
    case 'vue_dateavantrecolte':
    case 'dateavantrecolte':
      switch(champs.toLowerCase()){
        case 'da_numero': label="Numéro";break;
        case 'da_composant': label="Composant";break;
        case 'da_espece': label="Espèce";break;
        case 'da_dar': label="Période avant récolte";break;
        case 'date_creation': label="Date de création";break;
        default: label="";
      }
      break;
    case 'vue_produit':
    case 'produit':
      switch(champs.toLowerCase()){
        case 'pd_numero': label="Numéro";break;
        case 'pd_code': label="Code";break;
        case 'pd_nom': label="Nom";break;
        case 'pd_unite': label="Unité";break;
        case 'pd_typeproduit': label="Famille de produit";break;
        case 'pd_forme': label="Sous forme de";break;
        case 'pd_firme': label="Firme productrice";break;
        case 'pd_variete': label="Variété";break;
        case 'pd_composition': label="Composition";break;
        case 'couleur': label="Couleur";break;
        case 'note': label="Note";break;
        case 'date_creation': label="Date de création";break;
        default: label="";
      }
      break;
    case 'vue_produitrecolte':
    case 'produitrecolte':
      switch(champs.toLowerCase()){
        case 'pl_numero': label="Numéro";break;
        case 'pl_code': label="Code";break;
        case 'pl_nom': label="Nom";break;
        case 'pl_unite': label="Unité";break;
        case 'pl_prix': label="Prix";break;
        case 'pl_typeproduit': label="Famille de produit";break;
        case 'pl_variete': label="Variété";break;
        case 'pl_exploitant_login': label="Exploitant";break;
        case 'couleur': label="Couleur";break;
        case 'note': label="Note";break;
        case 'date_creation': label="Date de création";break;
        default: label="";
      }
      break;
    case 'vue_recolte':
    case 'recolte':
      switch(champs.toLowerCase()){
        case 're_numero': label="Numéro";break;
        case 're_date': label="Date";break;
        case 're_quantite': label="Quantité";break;
        case 're_sousilot': label="Sous-ilot";break;
        case 're_produitrecolte': label="Produit récolté";break;
        case 're_differencequantite': label="Différence de quantité après vente";break;
        case 're_humidite': label="Humidité";break;
        case 'note': label="Note";break;
        case 'date_creation': label="Date de création";break;
        default: label="";
      }
      break;
    case 'vue_recolteapplique':
    case 'recolteapplique':
      switch(champs.toLowerCase()){
        case 'ra_recolte': label="Récolte";break;
        case 'ra_applique': label="Applique";break;
        default: label="";
      }
      break;
    case 'vue_vente':
    case 'vente':
      switch(champs.toLowerCase()){
        case 've_numero': label="Numéro";break;
        case 've_quantite': label="Quantité";break;
        case 've_prix': label="Prix par unité(Euros)";break;
        case 've_personne': label="Personne/Entreprise";break;
        case 've_recolte': label="Récolte";break;
        case 've_date': label="Date de vente";break;
        case 'note': label="Note";break;
        case 'date_creation': label="Date de création";break;
        default: label="";
      }
      break;
    case 'vue_article':
    case 'article':
      switch(champs.toLowerCase()){
        case 'ar_numero': label="Numéro";break;
        case 'ar_nom': label="Nom";break;
        case 'ar_prix': label="Prix par unité";break;
        case 'ar_exploitant_login': label="Exploitant";break;
        case 'ar_produit': label="Produit";break;
        case 'ar_conditionnement': label="Conditionnement";break;
        case 'ar_personne': label="Personne/Entreprise";break;
        case 'ar_codeean13': label="Code barre EAN13";break;
        case 'ar_code2': label="Code secondaire";break;
        case 'ar_code3': label="Code tertiaire";break;
        case 'note': label="Note";break;
        case 'date_creation': label="Date de création";break;
        default: label="";
      }
      break;
    case 'vue_achat':
    case 'achat':
      switch(champs.toLowerCase()){
        case 'ac_numero': label="Numéro";break;
        case 'ac_quantite': label="Quantité";break;
        case 'ac_article': label="Article";break;
        case 'ac_date': label="Date d'achat";break;
        case 'ac_differencequantite': label="Différence de quantité après achat";break;
        case 'ac_exploitant_login': label="Exploitant";break;
        case 'note': label="Note";break;
        case 'date_creation': label="Date de création";break;
        default: label="";
      }
      break;
    case 'vue_conditionnement':
    case 'conditionnement':
      switch(champs.toLowerCase()){
        case 'ca_numero': label="Numéro";break;
        case 'ca_nom': label="Nom";break;
        case 'ca_quantite': label="Quantité";break;
        case 'ca_unite': label="Unité";break;
        case 'ca_description': label="Description";break;
        case 'note': label="Note";break;
        case 'date_creation': label="Date de création";break;
        default: label="";
      }
      break;
    case 'vue_unite':
    case 'unite':
      switch(champs.toLowerCase()){
        case 'un_numero': label="Numéro";break;
        case 'un_nom': label="Numéro";break;
        default: label="";
      }
      break;
    case 'vue_definiprofil':
    case 'definiprofil':
      switch(champs.toLowerCase()){
        case 'dp_numero': label="Numéro";break;
        case 'dp_profil': label="Profil";break;
        case 'dp_article': label="Produit";break;
        case 'dp_densite': label="Densité";break;
        case 'date_creation': label="Date de création";break;
        default: label="";
      }
      break;
    case 'vue_lot':
    case 'lot':
      switch(champs.toLowerCase()){
        case 'lo_numero': label="Numéro";break;
        case 'lo_definiprofil': label="Partie de profil";break;
        case 'lo_applique': label="Application";break;
        case 'lo_lot': label="Numéro de lot";break;
        case 'date_creation': label="Date de création";break;
        default: label="";
      }
      break;
    case 'vue_contraintesousilot':
    case 'contraintesousilot':
      switch(champs.toLowerCase()){
        case 'ci_contrainte': label="Contrainte";break;
        case 'ci_sousilot': label="Sous-îlot";break;
        case 'date_creation': label="Date de création";break;
        default: label="";
      }
      break;
    case 'vue_documente':
    case 'documente':
      switch(champs.toLowerCase()){
        case 'de_contrainte': label="Contrainte";break;
        case 'de_document': label="Document";break;
        case 'date_creation': label="Date de création";break;
        default: label="";
      }
      break;
    case 'vue_sousilotgroupe':
    case 'sousilotgroupe':
      switch(champs.toLowerCase()){
        case 'sg_sousilot': label="Sous-îlot";break;
        case 'sg_groupe': label="Groupe";break;
        case 'date_creation': label="Date de création";break;
        default: label="";
      }
      break;
    case 'vue_contrainteprofil':
    case 'contrainteprofil':
      switch(champs.toLowerCase()){
        case 'cr_contrainte': label="Contrainte";break;
        case 'cr_profil': label="Profil";break;
        case 'date_creation': label="Date de création";break;
        default: label="";
      }
      break;
    case 'vue_contrainteexploitant':
    case 'contrainteexploitant':
      switch(champs.toLowerCase()){
        case 'cx_contrainte': label="Contrainte";break;
        case 'cx_exploitant': label="Exploitant";break;
        case 'date_creation': label="Date de création";break;
        default: label="";
      }
      break;
    case 'vue_materiel':
    case 'materiel':
      switch(champs.toLowerCase()){
        case 'ma_numero': label="Numéro";break;
        case 'ma_nom': label="Nom";break;
        case 'ma_modele': label="Modèle";break;
        case 'ma_dateachat': label="Date d'achat";break;
        case 'ma_dateservice': label="Date de mise en service";break;
        case 'ma_datehorsservice': label="Date de mise hors service";break;
        case 'ma_prix': label="Prix d'achat";break;
        case 'ma_exploitant_login': label="Exploitant";break;
        case 'note': label="Note";break;
        case 'date_creation': label="Date de création";break;
        default: label="";
      }
      break;
    case 'vue_modele':
    case 'modele':
      switch(champs.toLowerCase()){
        case 'mo_numero': label="Numéro";break;
        case 'mo_nom': label="Nom";break;
        case 'mo_reference': label="N° Référence";break;
        case 'mo_firme': label="Firme productrice";break;
        case 'note': label="Note";break;
        case 'date_creation': label="Date de création";break;
        default: label="";
      }
      break;
    case 'vue_prelevement':
    case 'prelevement':
      switch(champs.toLowerCase()){
        case 'pv_numero': label="Numéro";break;
        case 'pv_nom': label="Nom";break;
        case 'pv_typeprelevement': label="Type de prélèvement";break;
        case 'pv_x': label="X";break;
        case 'pv_y': label="Y";break;
        case 'pv_z': label="Z";break;
        case 'pv_exploitant_login': label="Exploitant";break;
        case 'couleur': label="Couleur";break;
        case 'note': label="Note";break;
        case 'date_creation': label="Date de création";break;
        default: label="";
      }
      break;
    case 'vue_typeprelevement':
    case 'typeprelevement':
      switch(champs.toLowerCase()){
        case 'tv_numero': label="Numéro";break;
        case 'tv_nom': label="Nom";break;
        case 'couleur': label="Couleur";break;
        case 'note': label="Note";break;
        case 'date_creation': label="Date de création";break;
        default: label="";
      }
      break;
    case 'vue_irrigation':
    case 'irrigation':
      switch(champs.toLowerCase()){
        case 'ir_numero': label="Numéro";break;
        case 'ir_sousilot': label="Sous-ilot irrigué";break;
        case 'ir_prelevement': label="Provenance de l'eau";break;
        case 'ir_debit': label="Débit";break;
        case 'ir_periodedebut': label="Date de début";break;
        case 'ir_periodefin': label="Date de fin";break;
        case 'note': label="Note";break;
        case 'date_creation': label="Date de création";break;
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
    case 'vue_commune':
    case 'commune':
      switch(champs.toLowerCase()){
        case 'co_numero': obligatoire=true;break;
        case 'co_nom': obligatoire=true;break;
        case 'co_siret': obligatoire=false;break;
        case 'couleur': obligatoire=false;break;
        case 'date_creation': obligatoire=false;break;
        default: obligatoire=false;
      }
      break;
    case 'vue_codepostal':
    case 'codepostal':
      switch(champs.toLowerCase()){
        case 'cp_numero': obligatoire=true;break;
        case 'cp_code': obligatoire=true;break;
        case 'cp_bureau': obligatoire=false;break;
        case 'date_creation': obligatoire=false;break;
        default: obligatoire=false;
      }
      break;
    case 'vue_personne':
    case 'personne':
      switch(champs.toLowerCase()){
        case 'pe_numero': obligatoire=true;break;
        case 'pe_nom': obligatoire=true;break;
        case 'pe_prenom': obligatoire=false;break;
        case 'pe_siret': obligatoire=false;break;
        case 'pe_entreprise': obligatoire=false;break;
        case 'pe_exploitant_login': obligatoire=true;break;
        case 'date_creation': obligatoire=false;break;
        default: obligatoire=false;
      }
      break;
    case 'vue_contact':
    case 'contact':
      switch(champs.toLowerCase()){
        case 'cn_numero': obligatoire=true;break;
        case 'cn_tel': obligatoire=false;break;
        case 'cn_fax': obligatoire=false;break;
        case 'cn_email': obligatoire=false;break;
        case 'date_creation': obligatoire=false;break;
        default: obligatoire=false;
      }
      break;
    case 'vue_profil':
    case 'profil':
      switch(champs.toLowerCase()){
        case 'pr_numero': obligatoire=true;break;
        case 'pr_nom': obligatoire=true;break;
        case 'pr_exploitant_login': obligatoire=true;break;
        case 'pr_partage': obligatoire=false;break;
        case 'pr_systeme': obligatoire=false;break;
        case 'couleur': obligatoire=false;break;
        case 'note': obligatoire=false;break;
        case 'date_creation': obligatoire=false;break;
        default: obligatoire=false;
      }
      break;
    case 'vue_profiltypecouche':
    case 'profiltypecouche':
      switch(champs.toLowerCase()){
        case 'pc_profil': obligatoire=true;break;
        case 'pc_typecouche': obligatoire=true;break;
        case 'date_creation': obligatoire=false;break;
        default: obligatoire=false;
      }
      break;
    case 'vue_typeprofil':
    case 'typeprofil':
      switch(champs.toLowerCase()){
        case 'tp_numero': obligatoire=true;break;
        case 'tp_nom': obligatoire=true;break;
        case 'couleur': obligatoire=false;break;
        case 'note': obligatoire=false;break;
        case 'date_creation': obligatoire=false;break;
        default: obligatoire=false;
      }
      break;
    case 'vue_typeproduit':
    case 'typeproduit':
      switch(champs.toLowerCase()){
        case 'td_numero': obligatoire=true;break;
        case 'td_nom': obligatoire=true;break;
        case 'couleur': obligatoire=false;break;
        case 'note': obligatoire=false;break;
        case 'date_creation': obligatoire=false;break;
        default: obligatoire=false;
      }
      break;
    case 'vue_firme':
    case 'firme':
      switch(champs.toLowerCase()){
        case 'fi_numero': obligatoire=true;break;
        case 'fi_nom': obligatoire=true;break;
        case 'date_creation': obligatoire=false;break;
        default: obligatoire=false;
      }
      break;
    case 'vue_contrainte':
    case 'contrainte':
      switch(champs.toLowerCase()){
        case 'ct_numero': obligatoire=true;break;
        case 'ct_nom': obligatoire=true;break;
        case 'ct_requete': obligatoire=true;break;
        case 'ct_pointcontrole': obligatoire=true;break;
        case 'ct_formule': obligatoire=true;break;
        case 'ct_description': obligatoire=false;break;
        case 'ct_exploitant_login': obligatoire=true;break;
        case 'ct_systeme': obligatoire=false;break;
        case 'note': obligatoire=false;break;
        case 'date_creation': obligatoire=false;break;
        default: obligatoire=false;
      }
      break;
    case 'vue_document':
    case 'document':
      switch(champs.toLowerCase()){
        case 'do_numero': obligatoire=true;break;
        case 'do_nom': obligatoire=true;break;
        case 'do_date': obligatoire=true;break;
        case 'do_typedocument': obligatoire=true;break;
        case 'do_exploitant_login': obligatoire=true;break;
        case 'note': obligatoire=false;break;
        case 'date_creation': obligatoire=false;break;
        default: obligatoire=false;
      }
      break;
    case 'vue_typedocument':
    case 'typedocument':
      switch(champs.toLowerCase()){
        case 'to_numero': obligatoire=true;break;
        case 'to_nom': obligatoire=true;break;
        case 'to_description': obligatoire=false;break;
        case 'note': obligatoire=false;break;
        case 'date_creation': obligatoire=false;break;
        default: obligatoire=false;
      }
      break;
    case 'vue_adresse':
    case 'adresse':
      switch(champs.toLowerCase()){
        case 'ad_numero': obligatoire=true;break;
        case 'ad_codepostal': obligatoire=true;break;
        case 'ad_commune': obligatoire=true;break;
        case 'ad_addr1': obligatoire=false;break;
        case 'ad_addr2': obligatoire=false;break;
        case 'ad_addr3': obligatoire=false;break;
        case 'date_creation': obligatoire=false;break;
        default: obligatoire=false;
      }
      break;
    case 'vue_exploitant':
    case 'exploitant':
      switch(champs.toLowerCase()){
        case 'ex_numero': obligatoire=true;break;
        case 'ex_login': obligatoire=true;break;
        case 'ex_nom': obligatoire=true;break;
        case 'ex_prenom': obligatoire=true;break;
        case 'ex_numpac': obligatoire=true;break;
        case 'ex_exclu': obligatoire=true;break;
        case 'ex_adresse': obligatoire=false;break;
        case 'date_creation': obligatoire=false;break;
        default: obligatoire=false;
      }
      break;
    case 'vue_preference':
    case 'preference':
      switch(champs.toLowerCase()){
        case 'pf_champs': obligatoire=true;break;
        case 'pf_valeur': obligatoire=false;break;
        case 'pf_exploitant_login': obligatoire=true;break;
        default: obligatoire=false;
      }
      break;
    case 'vue_couche':
    case 'couche':
      switch(champs.toLowerCase()){
        case 'cc_numero': obligatoire=true;break;
        case 'cc_nom': obligatoire=true;break;
        case 'cc_typecouche': obligatoire=true;break;
        case 'cc_exploitant_login': obligatoire=true;break;
        case 'cc_systeme': obligatoire=true;break;
        case 'cc_version': obligatoire=true;break;
        case 'cc_mere': obligatoire=false;break;
        case 'cc_date': obligatoire=false;break;
        case 'couleur': obligatoire=false;break;
        case 'note': obligatoire=false;break;
        case 'date_creation': obligatoire=false;break;
        default: obligatoire=false;
      }
      break;
    case 'vue_typecouche':
    case 'typecouche':
      switch(champs.toLowerCase()){
        case 'tc_numero': obligatoire=true;break;
        case 'tc_nom': obligatoire=true;break;
        case 'tc_sansilots': obligatoire=false;break;
        case 'tc_systeme': obligatoire=false;break;
        case 'couleur': obligatoire=false;break;
        case 'note': obligatoire=false;break;
        case 'date_creation': obligatoire=false;break;
        default: obligatoire=false;
      }
      break;
    case 'vue_groupe':
    case 'groupe':
      switch(champs.toLowerCase()){
        case 'gr_numero': obligatoire=true;break;
        case 'gr_nom': obligatoire=true;break;
        case 'gr_couche': obligatoire=true;break;
        case 'couleur': obligatoire=false;break;
        case 'note': obligatoire=false;break;
        case 'date_creation': obligatoire=false;break;
        default: obligatoire=false;
      }
      break;
    case 'vue_ilot':
    case 'ilot':
      switch(champs.toLowerCase()){
        case 'il_numero': obligatoire=true;break;
        case 'il_code': obligatoire=true;break;
        case 'il_trace': obligatoire=true;break;
        case 'il_surfaceref': obligatoire=true;break;
        case 'il_exploitant_login': obligatoire=true;break;
        case 'il_commune': obligatoire=true;break;
        case 'il_nom': obligatoire=false;break;
        case 'couleur': obligatoire=false;break;
        case 'note': obligatoire=false;break;
        case 'date_creation': obligatoire=false;break;
        default: obligatoire=false;
      }
      break;
    case 'vue_modificationilot':
    case 'modificationilot':
      switch(champs.toLowerCase()){
        case 'mi_date': obligatoire=true;break;
        case 'mi_pere': obligatoire=true;break;
        case 'mi_fils': obligatoire=true;break;
        case 'date_creation': obligatoire=false;break;
        default: obligatoire=false;
      }
      break;
    case 'vue_sousilot':
    case 'sousilot':
      switch(champs.toLowerCase()){
        case 'si_numero': obligatoire=true;break;
        case 'si_trace': obligatoire=true;break;
        case 'si_ilot': obligatoire=true;break;
        case 'si_adresse': obligatoire=true;break;
        case 'si_couche': obligatoire=true;break;
        case 'si_nom': obligatoire=false;break;
        case 'couleur': obligatoire=false;break;
        case 'note': obligatoire=false;break;
        case 'date_creation': obligatoire=false;break;
        default: obligatoire=false;
      }
      break;
    case 'vue_modificationsousilot':
    case 'modificationsousilot':
      switch(champs.toLowerCase()){
        case 'ms_date': obligatoire=true;break;
        case 'ms_pere': obligatoire=true;break;
        case 'ms_fils': obligatoire=true;break;
        case 'date_creation': obligatoire=false;break;
        default: obligatoire=false;
      }
      break;
    case 'vue_communecp':
    case 'communecp':
      switch(champs.toLowerCase()){
        case 'mc_commune': obligatoire=true;break;
        case 'mc_codepostal': obligatoire=true;break;
        case 'date_creation': obligatoire=false;break;
        default: obligatoire=false;
      }
      break;
    case 'vue_estjoignable':
    case 'estjoignable':
      switch(champs.toLowerCase()){
        case 'ej_personne': obligatoire=true;break;
        case 'ej_contact': obligatoire=true;break;
        case 'date_creation': obligatoire=false;break;
        default: obligatoire=false;
      }
      break;
    case 'vue_adressepersonne':
    case 'adressepersonne':
      switch(champs.toLowerCase()){
        case 'ap_personne': obligatoire=true;break;
        case 'ap_adresse': obligatoire=true;break;
        case 'date_creation': obligatoire=false;break;
        default: obligatoire=false;
      }
      break;
    case 'vue_applique':
    case 'applique':
      switch(champs.toLowerCase()){
        case 'al_numero': obligatoire=true;break;
        case 'al_sousilot': obligatoire=true;break;
        case 'al_profil': obligatoire=true;break;
        case 'al_exploitant_login': obligatoire=true;break;
        case 'al_periodedebut': obligatoire=true;break;
        case 'al_periodefin': obligatoire=true;break;
        case 'date_creation': obligatoire=false;break;
        default: obligatoire=false;
      }
      break;
    case 'vue_estdetype':
    case 'estdetype':
      switch(champs.toLowerCase()){
        case 'et_typeprofil': obligatoire=true;break;
        case 'et_profil': obligatoire=true;break;
        case 'date_creation': obligatoire=false;break;
        default: obligatoire=false;
      }
      break;
    case 'vue_composant':
    case 'composant':
      switch(champs.toLowerCase()){
        case 'cm_numero': obligatoire=true;break;
        case 'cm_nom': obligatoire=true;break;
        case 'cm_formule': obligatoire=false;break;
        case 'cm_description': obligatoire=false;break;
        case 'note': obligatoire=false;break;
        case 'date_creation': obligatoire=false;break;
        default: obligatoire=false;
      }
      break;
    case 'vue_compose':
    case 'compose':
      switch(champs.toLowerCase()){
        case 'ce_numero': obligatoire=true;break;
        case 'ce_composition': obligatoire=true;break;
        case 'ce_composant': obligatoire=true;break;
        case 'ce_concentration': obligatoire=false;break;
        case 'ce_unite': obligatoire=false;break;
        case 'date_creation': obligatoire=false;break;
        default: obligatoire=false;
      }
      break;
    case 'vue_composition':
    case 'composition':
      switch(champs.toLowerCase()){
        case 'cs_numero': obligatoire=true;break;
        case 'cs_nom': obligatoire=true;break;
        case 'note': obligatoire=false;break;
        case 'date_creation': obligatoire=false;break;
        default: obligatoire=false;
      }
      break;
    case 'vue_classement':
    case 'classement':
      switch(champs.toLowerCase()){
        case 'cl_numero': obligatoire=true;break;
        case 'cl_nom': obligatoire=true;break;
        case 'cl_symbole': obligatoire=false;break;
        case 'cl_description': obligatoire=false;break;
        case 'date_creation': obligatoire=false;break;
        default: obligatoire=false;
      }
      break;
    case 'vue_declassement':
    case 'declassement':
      switch(champs.toLowerCase()){
        case 'dc_produit': obligatoire=true;break;
        case 'dc_classement': obligatoire=true;break;
        case 'date_creation': obligatoire=false;break;
        default: obligatoire=false;
      }
      break;
    case 'vue_incompatibleavec':
    case 'incompatibleavec':
      switch(champs.toLowerCase()){
        case 'ia_produit': obligatoire=true;break;
        case 'ia_classement': obligatoire=true;break;
        case 'date_creation': obligatoire=false;break;
        default: obligatoire=false;
      }
      break;
    case 'vue_forme':
    case 'forme':
      switch(champs.toLowerCase()){
        case 'fo_numero': obligatoire=true;break;
        case 'fo_nom': obligatoire=true;break;
        case 'fo_abbrevation': obligatoire=false;break;
        case 'fo_description': obligatoire=false;break;
        case 'date_creation': obligatoire=false;break;
        default: obligatoire=false;
      }
      break;
    case 'vue_espece':
    case 'espece':
      switch(champs.toLowerCase()){
        case 'es_numero': obligatoire=true;break;
        case 'es_nom': obligatoire=true;break;
        case 'couleur': obligatoire=false;break;
        case 'note': obligatoire=false;break;
        case 'date_creation': obligatoire=false;break;
        default: obligatoire=false;
      }
      break;
    case 'vue_variete':
    case 'variete':
      switch(champs.toLowerCase()){
        case 'va_numero': obligatoire=true;break;
        case 'va_nom': obligatoire=true;break;
        case 'va_espece': obligatoire=true;break;
        case 'couleur': obligatoire=false;break;
        case 'date_creation': obligatoire=false;break;
        default: obligatoire=false;
      }
      break;
    case 'vue_dateavantrecolte':
    case 'dateavantrecolte':
      switch(champs.toLowerCase()){
        case 'da_numero': obligatoire=true;break;
        case 'da_composant': obligatoire=true;break;
        case 'da_espece': obligatoire=true;break;
        case 'da_dar': obligatoire=true;break;
        case 'date_creation': obligatoire=false;break;
        default: obligatoire=false;
      }
      break;
    case 'vue_produit':
    case 'produit':
      switch(champs.toLowerCase()){
        case 'pd_numero': obligatoire=true;break;
        case 'pd_code': obligatoire=false;break;
        case 'pd_nom': obligatoire=true;break;
        case 'pd_unite': obligatoire=true;break;
        case 'pd_typeproduit': obligatoire=true;break;
        case 'pd_forme': obligatoire=true;break;
        case 'pd_firme': obligatoire=false;break;
        case 'pd_variete': obligatoire=false;break;
        case 'pd_composition': obligatoire=false;break;
        case 'couleur': obligatoire=false;break;
        case 'note': obligatoire=false;break;
        case 'date_creation': obligatoire=false;break;
        default: obligatoire=false;
      }
      break;
    case 'vue_produitrecolte':
    case 'produitrecolte':
      switch(champs.toLowerCase()){
        case 'pl_numero': obligatoire=true;break;
        case 'pl_code': obligatoire=false;break;
        case 'pl_nom': obligatoire=true;break;
        case 'pl_unite': obligatoire=true;break;
        case 'pl_prix': obligatoire=true;break;
        case 'pl_typeproduit': obligatoire=true;break;
        case 'pl_variete': obligatoire=true;break;
        case 'pl_exploitant_login': obligatoire=true;break;
        case 'couleur': obligatoire=false;break;
        case 'note': obligatoire=false;break;
        case 'date_creation': obligatoire=false;break;
        default: obligatoire=false;
      }
      break;
    case 'vue_recolte':
    case 'recolte':
      switch(champs.toLowerCase()){
        case 're_numero': obligatoire=true;break;
        case 're_date': obligatoire=true;break;
        case 're_quantite': obligatoire=true;break;
        case 're_sousilot': obligatoire=true;break;
        case 're_produitrecolte': obligatoire=true;break;
        case 're_differencequantite': obligatoire=true;break;
        case 're_humidite': obligatoire=false;break;
        case 'note': obligatoire=false;break;
        case 'date_creation': obligatoire=false;break;
        default: obligatoire=false;
      }
      break;
    case 'vue_recolteapplique':
    case 'recolteapplique':
      switch(champs.toLowerCase()){
        case 'ra_recolte': obligatoire=true;break;
        case 'ra_applique': obligatoire=true;break;
        default: obligatoire=false;
      }
      break;
    case 'vue_vente':
    case 'vente':
      switch(champs.toLowerCase()){
        case 've_numero': obligatoire=true;break;
        case 've_quantite': obligatoire=true;break;
        case 've_prix': obligatoire=true;break;
        case 've_personne': obligatoire=true;break;
        case 've_recolte': obligatoire=true;break;
        case 've_date': obligatoire=true;break;
        case 'note': obligatoire=false;break;
        case 'date_creation': obligatoire=false;break;
        default: obligatoire=false;
      }
      break;
    case 'vue_article':
    case 'article':
      switch(champs.toLowerCase()){
        case 'ar_numero': obligatoire=true;break;
        case 'ar_nom': obligatoire=true;break;
        case 'ar_prix': obligatoire=true;break;
        case 'ar_exploitant_login': obligatoire=true;break;
        case 'ar_produit': obligatoire=true;break;
        case 'ar_conditionnement': obligatoire=true;break;
        case 'ar_personne': obligatoire=true;break;
        case 'ar_codeean13': obligatoire=false;break;
        case 'ar_code2': obligatoire=false;break;
        case 'ar_code3': obligatoire=false;break;
        case 'note': obligatoire=false;break;
        case 'date_creation': obligatoire=false;break;
        default: obligatoire=false;
      }
      break;
    case 'vue_achat':
    case 'achat':
      switch(champs.toLowerCase()){
        case 'ac_numero': obligatoire=true;break;
        case 'ac_quantite': obligatoire=true;break;
        case 'ac_article': obligatoire=true;break;
        case 'ac_date': obligatoire=true;break;
        case 'ac_differencequantite': obligatoire=true;break;
        case 'ac_exploitant_login': obligatoire=true;break;
        case 'note': obligatoire=false;break;
        case 'date_creation': obligatoire=false;break;
        default: obligatoire=false;
      }
      break;
    case 'vue_conditionnement':
    case 'conditionnement':
      switch(champs.toLowerCase()){
        case 'ca_numero': obligatoire=true;break;
        case 'ca_nom': obligatoire=true;break;
        case 'ca_quantite': obligatoire=true;break;
        case 'ca_unite': obligatoire=true;break;
        case 'ca_description': obligatoire=false;break;
        case 'note': obligatoire=false;break;
        case 'date_creation': obligatoire=false;break;
        default: obligatoire=false;
      }
      break;
    case 'vue_unite':
    case 'unite':
      switch(champs.toLowerCase()){
        case 'un_numero': obligatoire=true;break;
        case 'un_nom': obligatoire=false;break;
        default: obligatoire=false;
      }
      break;
    case 'vue_definiprofil':
    case 'definiprofil':
      switch(champs.toLowerCase()){
        case 'dp_numero': obligatoire=true;break;
        case 'dp_profil': obligatoire=true;break;
        case 'dp_article': obligatoire=true;break;
        case 'dp_densite': obligatoire=true;break;
        case 'date_creation': obligatoire=false;break;
        default: obligatoire=false;
      }
      break;
    case 'vue_lot':
    case 'lot':
      switch(champs.toLowerCase()){
        case 'lo_numero': obligatoire=true;break;
        case 'lo_definiprofil': obligatoire=true;break;
        case 'lo_applique': obligatoire=true;break;
        case 'lo_lot': obligatoire=true;break;
        case 'date_creation': obligatoire=false;break;
        default: obligatoire=false;
      }
      break;
    case 'vue_contraintesousilot':
    case 'contraintesousilot':
      switch(champs.toLowerCase()){
        case 'ci_contrainte': obligatoire=true;break;
        case 'ci_sousilot': obligatoire=true;break;
        case 'date_creation': obligatoire=false;break;
        default: obligatoire=false;
      }
      break;
    case 'vue_documente':
    case 'documente':
      switch(champs.toLowerCase()){
        case 'de_contrainte': obligatoire=true;break;
        case 'de_document': obligatoire=true;break;
        case 'date_creation': obligatoire=false;break;
        default: obligatoire=false;
      }
      break;
    case 'vue_sousilotgroupe':
    case 'sousilotgroupe':
      switch(champs.toLowerCase()){
        case 'sg_sousilot': obligatoire=true;break;
        case 'sg_groupe': obligatoire=true;break;
        case 'date_creation': obligatoire=false;break;
        default: obligatoire=false;
      }
      break;
    case 'vue_contrainteprofil':
    case 'contrainteprofil':
      switch(champs.toLowerCase()){
        case 'cr_contrainte': obligatoire=true;break;
        case 'cr_profil': obligatoire=true;break;
        case 'date_creation': obligatoire=false;break;
        default: obligatoire=false;
      }
      break;
    case 'vue_contrainteexploitant':
    case 'contrainteexploitant':
      switch(champs.toLowerCase()){
        case 'cx_contrainte': obligatoire=true;break;
        case 'cx_exploitant': obligatoire=true;break;
        case 'date_creation': obligatoire=false;break;
        default: obligatoire=false;
      }
      break;
    case 'vue_materiel':
    case 'materiel':
      switch(champs.toLowerCase()){
        case 'ma_numero': obligatoire=true;break;
        case 'ma_nom': obligatoire=true;break;
        case 'ma_modele': obligatoire=true;break;
        case 'ma_dateachat': obligatoire=false;break;
        case 'ma_dateservice': obligatoire=false;break;
        case 'ma_datehorsservice': obligatoire=false;break;
        case 'ma_prix': obligatoire=false;break;
        case 'ma_exploitant_login': obligatoire=true;break;
        case 'note': obligatoire=false;break;
        case 'date_creation': obligatoire=false;break;
        default: obligatoire=false;
      }
      break;
    case 'vue_modele':
    case 'modele':
      switch(champs.toLowerCase()){
        case 'mo_numero': obligatoire=true;break;
        case 'mo_nom': obligatoire=true;break;
        case 'mo_reference': obligatoire=true;break;
        case 'mo_firme': obligatoire=true;break;
        case 'note': obligatoire=false;break;
        case 'date_creation': obligatoire=false;break;
        default: obligatoire=false;
      }
      break;
    case 'vue_prelevement':
    case 'prelevement':
      switch(champs.toLowerCase()){
        case 'pv_numero': obligatoire=true;break;
        case 'pv_nom': obligatoire=true;break;
        case 'pv_typeprelevement': obligatoire=true;break;
        case 'pv_x': obligatoire=true;break;
        case 'pv_y': obligatoire=true;break;
        case 'pv_z': obligatoire=true;break;
        case 'pv_exploitant_login': obligatoire=true;break;
        case 'couleur': obligatoire=false;break;
        case 'note': obligatoire=false;break;
        case 'date_creation': obligatoire=false;break;
        default: obligatoire=false;
      }
      break;
    case 'vue_typeprelevement':
    case 'typeprelevement':
      switch(champs.toLowerCase()){
        case 'tv_numero': obligatoire=true;break;
        case 'tv_nom': obligatoire=true;break;
        case 'couleur': obligatoire=false;break;
        case 'note': obligatoire=false;break;
        case 'date_creation': obligatoire=false;break;
        default: obligatoire=false;
      }
      break;
    case 'vue_irrigation':
    case 'irrigation':
      switch(champs.toLowerCase()){
        case 'ir_numero': obligatoire=true;break;
        case 'ir_sousilot': obligatoire=true;break;
        case 'ir_prelevement': obligatoire=true;break;
        case 'ir_debit': obligatoire=true;break;
        case 'ir_periodedebut': obligatoire=true;break;
        case 'ir_periodefin': obligatoire=true;break;
        case 'note': obligatoire=false;break;
        case 'date_creation': obligatoire=false;break;
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
      case 'table_commune': 
    case 'commune': champs='CO_Numero';break;
    case 'table_codepostal': 
    case 'codepostal': champs='CP_Numero';break;
    case 'table_personne': 
    case 'personne': champs='PE_Numero';break;
    case 'table_contact': 
    case 'contact': champs='CN_Numero';break;
    case 'table_profil': 
    case 'profil': champs='PR_Numero';break;
    case 'table_profiltypecouche': 
    case 'profiltypecouche': champs='';break;
    case 'table_typeprofil': 
    case 'typeprofil': champs='TP_Numero';break;
    case 'table_typeproduit': 
    case 'typeproduit': champs='TD_Numero';break;
    case 'table_firme': 
    case 'firme': champs='FI_Numero';break;
    case 'table_contrainte': 
    case 'contrainte': champs='CT_Numero';break;
    case 'table_document': 
    case 'document': champs='DO_Numero';break;
    case 'table_typedocument': 
    case 'typedocument': champs='TO_Numero';break;
    case 'table_adresse': 
    case 'adresse': champs='AD_Numero';break;
    case 'table_exploitant': 
    case 'exploitant': champs='EX_Numero';break;
    case 'table_preference': 
    case 'preference': champs='';break;
    case 'table_couche': 
    case 'couche': champs='CC_Numero';break;
    case 'table_typecouche': 
    case 'typecouche': champs='TC_Numero';break;
    case 'table_groupe': 
    case 'groupe': champs='GR_Numero';break;
    case 'table_ilot': 
    case 'ilot': champs='IL_Numero';break;
    case 'table_modificationilot': 
    case 'modificationilot': champs='';break;
    case 'table_sousilot': 
    case 'sousilot': champs='SI_Numero';break;
    case 'table_modificationsousilot': 
    case 'modificationsousilot': champs='';break;
    case 'table_communecp': 
    case 'communecp': champs='';break;
    case 'table_estjoignable': 
    case 'estjoignable': champs='';break;
    case 'table_adressepersonne': 
    case 'adressepersonne': champs='';break;
    case 'table_applique': 
    case 'applique': champs='AL_Numero';break;
    case 'table_estdetype': 
    case 'estdetype': champs='';break;
    case 'table_composant': 
    case 'composant': champs='CM_Numero';break;
    case 'table_compose': 
    case 'compose': champs='CE_Numero';break;
    case 'table_composition': 
    case 'composition': champs='CS_Numero';break;
    case 'table_classement': 
    case 'classement': champs='CL_Numero';break;
    case 'table_declassement': 
    case 'declassement': champs='';break;
    case 'table_incompatibleavec': 
    case 'incompatibleavec': champs='';break;
    case 'table_forme': 
    case 'forme': champs='FO_Numero';break;
    case 'table_espece': 
    case 'espece': champs='ES_Numero';break;
    case 'table_variete': 
    case 'variete': champs='VA_Numero';break;
    case 'table_dateavantrecolte': 
    case 'dateavantrecolte': champs='DA_Numero';break;
    case 'table_produit': 
    case 'produit': champs='PD_Numero';break;
    case 'table_produitrecolte': 
    case 'produitrecolte': champs='PL_Numero';break;
    case 'table_recolte': 
    case 'recolte': champs='RE_Numero';break;
    case 'table_recolteapplique': 
    case 'recolteapplique': champs='';break;
    case 'table_vente': 
    case 'vente': champs='VE_Numero';break;
    case 'table_article': 
    case 'article': champs='AR_Numero';break;
    case 'table_achat': 
    case 'achat': champs='AC_Numero';break;
    case 'table_conditionnement': 
    case 'conditionnement': champs='CA_Numero';break;
    case 'table_unite': 
    case 'unite': champs='UN_Numero';break;
    case 'table_definiprofil': 
    case 'definiprofil': champs='DP_Numero';break;
    case 'table_lot': 
    case 'lot': champs='LO_Numero';break;
    case 'table_contraintesousilot': 
    case 'contraintesousilot': champs='';break;
    case 'table_documente': 
    case 'documente': champs='';break;
    case 'table_sousilotgroupe': 
    case 'sousilotgroupe': champs='';break;
    case 'table_contrainteprofil': 
    case 'contrainteprofil': champs='';break;
    case 'table_contrainteexploitant': 
    case 'contrainteexploitant': champs='';break;
    case 'table_materiel': 
    case 'materiel': champs='MA_Numero';break;
    case 'table_modele': 
    case 'modele': champs='MO_Numero';break;
    case 'table_prelevement': 
    case 'prelevement': champs='PV_Numero';break;
    case 'table_typeprelevement': 
    case 'typeprelevement': champs='TV_Numero';break;
    case 'table_irrigation': 
    case 'irrigation': champs='IR_Numero';break;

    default: return null;
  }
  return champs.toLowerCase();
}

/* Renvoie toutes les tables sous forme de tableau de chaines de caractères */
function mcd_getTables(){
  var tab=new Array();
  
  tab.push("Achat");
  tab.push("Adresse");
  tab.push("Applique");
  tab.push("Article");
  tab.push("Classement");
  tab.push("CodePostal");
  tab.push("Commune");
  tab.push("Composant");
  tab.push("Compose");
  tab.push("Composition");
  tab.push("Conditionnement");
  tab.push("Contact");
  tab.push("Contrainte");
  tab.push("Couche");
  tab.push("DateAvantRecolte");
  tab.push("DefiniProfil");
  tab.push("Document");
  tab.push("Espece");
  tab.push("Exploitant");
  tab.push("Firme");
  tab.push("Forme");
  tab.push("Groupe");
  tab.push("Ilot");
  tab.push("Irrigation");
  tab.push("Lot");
  tab.push("Materiel");
  tab.push("Modele");
  tab.push("Personne");
  tab.push("Prelevement");
  tab.push("Produit");
  tab.push("ProduitRecolte");
  tab.push("Profil");
  tab.push("Recolte");
  tab.push("SousIlot");
  tab.push("TypeCouche");
  tab.push("TypeDocument");
  tab.push("TypePrelevement");
  tab.push("TypeProduit");
  tab.push("TypeProfil");
  tab.push("Unite");
  tab.push("Variete");
  tab.push("Vente");
  return tab;
}

/* Renvoie toutes les labels des tables sous forme de tableau de chaines de caractères */
function mcd_getTablesLabel(){
  var tab=new Array();
  
  tab.push("Achats");
  tab.push("Adresses");
  tab.push("Applications de profil");
  tab.push("Articles");
  tab.push("Classements");
  tab.push("Codes postaux");
  tab.push("Communes");
  tab.push("Composants");
  tab.push("Liens entre composants et produits");
  tab.push("Compositions");
  tab.push("Conditionnements");
  tab.push("Contacts");
  tab.push("Contraintes");
  tab.push("Couches");
  tab.push("Dates applicables avant récoltes sur especes");
  tab.push("Liens entre profils et articles");
  tab.push("Documents");
  tab.push("Espèces");
  tab.push("Exploitants");
  tab.push("Firmes");
  tab.push("Formes");
  tab.push("Groupes");
  tab.push("Ilots");
  tab.push("Irrigations");
  tab.push("Numéros de lot des articles appliqués");
  tab.push("Appareils matériels");
  tab.push("Modèles");
  tab.push("Personnes");
  tab.push("Prélèvement d'eau");
  tab.push("Produits achétés");
  tab.push("Produits de récolte");
  tab.push("Profils");
  tab.push("Récoltes");
  tab.push("Sous-îlots");
  tab.push("Types de couches");
  tab.push("Types de document");
  tab.push("Types de prélèvements");
  tab.push("Familles de produits");
  tab.push("Familles de profils");
  tab.push("Unités");
  tab.push("Variétés");
  tab.push("Ventes");
  return tab;
}

/* Renvoie les noms physique des champs d'une table */
function mcd_getChampsLogique(table){
  var tab=new Array();
  switch(table.toLowerCase()){
    case 'achat':
      tab.push("AC_Article");
      tab.push("AC_Date");
      tab.push("AC_DifferenceQuantite");
      tab.push("AC_Exploitant_Login");
      tab.push("AC_Numero");
      tab.push("AC_Quantite");
      tab.push("note");
      break;
    case 'adresse':
      tab.push("AD_Addr1");
      tab.push("AD_Addr2");
      tab.push("AD_Addr3");
      tab.push("AD_CodePostal");
      tab.push("AD_Commune");
      tab.push("AD_Numero");
      break;
    case 'adressepersonne':
      tab.push("AP_Adresse");
      tab.push("AP_Personne");
      break;
    case 'applique':
      tab.push("AL_Exploitant_Login");
      tab.push("AL_Numero");
      tab.push("AL_PeriodeDebut");
      tab.push("AL_PeriodeFin");
      tab.push("AL_Profil");
      tab.push("AL_SousIlot");
      break;
    case 'article':
      tab.push("AR_Code2");
      tab.push("AR_Code3");
      tab.push("AR_CodeEAN13");
      tab.push("AR_Conditionnement");
      tab.push("AR_Exploitant_Login");
      tab.push("AR_Nom");
      tab.push("AR_Numero");
      tab.push("AR_Personne");
      tab.push("AR_Prix");
      tab.push("AR_Produit");
      tab.push("note");
      break;
    case 'classement':
      tab.push("CL_Description");
      tab.push("CL_Nom");
      tab.push("CL_Numero");
      tab.push("CL_Symbole");
      break;
    case 'codepostal':
      tab.push("CP_Bureau");
      tab.push("CP_Code");
      tab.push("CP_Numero");
      break;
    case 'commune':
      tab.push("CO_Nom");
      tab.push("CO_Numero");
      tab.push("CO_SIRET");
      tab.push("couleur");
      break;
    case 'communecp':
      tab.push("MC_CodePostal");
      tab.push("MC_Commune");
      break;
    case 'composant':
      tab.push("CM_Description");
      tab.push("CM_Formule");
      tab.push("CM_Nom");
      tab.push("CM_Numero");
      tab.push("note");
      break;
    case 'compose':
      tab.push("CE_Composant");
      tab.push("CE_Composition");
      tab.push("CE_Concentration");
      tab.push("CE_Numero");
      tab.push("CE_Unite");
      break;
    case 'composition':
      tab.push("CS_Nom");
      tab.push("CS_Numero");
      tab.push("note");
      break;
    case 'conditionnement':
      tab.push("CA_Description");
      tab.push("CA_Nom");
      tab.push("CA_Numero");
      tab.push("CA_Quantite");
      tab.push("CA_Unite");
      tab.push("note");
      break;
    case 'contact':
      tab.push("CN_Email");
      tab.push("CN_Fax");
      tab.push("CN_Numero");
      tab.push("CN_Tel");
      break;
    case 'contrainte':
      tab.push("CT_Description");
      tab.push("CT_Exploitant_Login");
      tab.push("CT_Formule");
      tab.push("CT_Nom");
      tab.push("CT_Numero");
      tab.push("CT_PointControle");
      tab.push("CT_Requete");
      tab.push("CT_Systeme");
      tab.push("note");
      break;
    case 'contrainteexploitant':
      tab.push("CX_Contrainte");
      tab.push("CX_Exploitant");
      break;
    case 'contrainteprofil':
      tab.push("CR_Contrainte");
      tab.push("CR_Profil");
      break;
    case 'contraintesousilot':
      tab.push("CI_Contrainte");
      tab.push("CI_SousIlot");
      break;
    case 'couche':
      tab.push("CC_Date");
      tab.push("CC_Exploitant_Login");
      tab.push("CC_Mere");
      tab.push("CC_Nom");
      tab.push("CC_Numero");
      tab.push("CC_Systeme");
      tab.push("CC_TypeCouche");
      tab.push("CC_Version");
      tab.push("couleur");
      tab.push("note");
      break;
    case 'dateavantrecolte':
      tab.push("DA_Composant");
      tab.push("DA_DAR");
      tab.push("DA_Espece");
      tab.push("DA_Numero");
      break;
    case 'declassement':
      tab.push("DC_Classement");
      tab.push("DC_Produit");
      break;
    case 'definiprofil':
      tab.push("DP_Article");
      tab.push("DP_Densite");
      tab.push("DP_Numero");
      tab.push("DP_Profil");
      break;
    case 'document':
      tab.push("DO_Date");
      tab.push("DO_Exploitant_Login");
      tab.push("DO_Nom");
      tab.push("DO_Numero");
      tab.push("DO_TypeDocument");
      tab.push("note");
      break;
    case 'documente':
      tab.push("DE_Contrainte");
      tab.push("DE_Document");
      break;
    case 'espece':
      tab.push("ES_Nom");
      tab.push("ES_Numero");
      tab.push("couleur");
      tab.push("note");
      break;
    case 'estdetype':
      tab.push("ET_Profil");
      tab.push("ET_TypeProfil");
      break;
    case 'estjoignable':
      tab.push("EJ_Contact");
      tab.push("EJ_Personne");
      break;
    case 'exploitant':
      tab.push("EX_Adresse");
      tab.push("EX_Exclu");
      tab.push("EX_Login");
      tab.push("EX_Nom");
      tab.push("EX_NumPAC");
      tab.push("EX_Numero");
      tab.push("EX_Prenom");
      break;
    case 'firme':
      tab.push("FI_Nom");
      tab.push("FI_Numero");
      break;
    case 'forme':
      tab.push("FO_Abbrevation");
      tab.push("FO_Description");
      tab.push("FO_Nom");
      tab.push("FO_Numero");
      break;
    case 'groupe':
      tab.push("GR_Couche");
      tab.push("GR_Nom");
      tab.push("GR_Numero");
      tab.push("couleur");
      tab.push("note");
      break;
    case 'ilot':
      tab.push("IL_Code");
      tab.push("IL_Commune");
      tab.push("IL_Exploitant_Login");
      tab.push("IL_Nom");
      tab.push("IL_Numero");
      tab.push("IL_SurfaceRef");
      tab.push("IL_Trace");
      tab.push("couleur");
      tab.push("note");
      break;
    case 'incompatibleavec':
      tab.push("IA_Classement");
      tab.push("IA_Produit");
      break;
    case 'irrigation':
      tab.push("IR_Debit");
      tab.push("IR_Numero");
      tab.push("IR_PeriodeDebut");
      tab.push("IR_PeriodeFin");
      tab.push("IR_Prelevement");
      tab.push("IR_SousIlot");
      tab.push("note");
      break;
    case 'lot':
      tab.push("LO_Applique");
      tab.push("LO_DefiniProfil");
      tab.push("LO_Lot");
      tab.push("LO_Numero");
      break;
    case 'materiel':
      tab.push("MA_DateAchat");
      tab.push("MA_DateHorsService");
      tab.push("MA_DateService");
      tab.push("MA_Exploitant_Login");
      tab.push("MA_Modele");
      tab.push("MA_Nom");
      tab.push("MA_Numero");
      tab.push("MA_Prix");
      tab.push("note");
      break;
    case 'modele':
      tab.push("MO_Firme");
      tab.push("MO_Nom");
      tab.push("MO_Numero");
      tab.push("MO_Reference");
      tab.push("note");
      break;
    case 'modificationilot':
      tab.push("MI_Date");
      tab.push("MI_Fils");
      tab.push("MI_Pere");
      break;
    case 'modificationsousilot':
      tab.push("MS_Date");
      tab.push("MS_Fils");
      tab.push("MS_Pere");
      break;
    case 'personne':
      tab.push("PE_Entreprise");
      tab.push("PE_Exploitant_Login");
      tab.push("PE_Nom");
      tab.push("PE_Numero");
      tab.push("PE_Prenom");
      tab.push("PE_SIRET");
      break;
    case 'preference':
      tab.push("PF_Champs");
      tab.push("PF_Exploitant_Login");
      tab.push("PF_Valeur");
      break;
    case 'prelevement':
      tab.push("PV_Exploitant_Login");
      tab.push("PV_Nom");
      tab.push("PV_Numero");
      tab.push("PV_TypePrelevement");
      tab.push("PV_X");
      tab.push("PV_Y");
      tab.push("PV_Z");
      tab.push("couleur");
      tab.push("note");
      break;
    case 'produit':
      tab.push("PD_Code");
      tab.push("PD_Composition");
      tab.push("PD_Firme");
      tab.push("PD_Forme");
      tab.push("PD_Nom");
      tab.push("PD_Numero");
      tab.push("PD_TypeProduit");
      tab.push("PD_Unite");
      tab.push("PD_Variete");
      tab.push("couleur");
      tab.push("note");
      break;
    case 'produitrecolte':
      tab.push("PL_Code");
      tab.push("PL_Exploitant_Login");
      tab.push("PL_Nom");
      tab.push("PL_Numero");
      tab.push("PL_Prix");
      tab.push("PL_TypeProduit");
      tab.push("PL_Unite");
      tab.push("PL_Variete");
      tab.push("couleur");
      tab.push("note");
      break;
    case 'profil':
      tab.push("PR_Exploitant_Login");
      tab.push("PR_Nom");
      tab.push("PR_Numero");
      tab.push("PR_Partage");
      tab.push("PR_Systeme");
      tab.push("couleur");
      tab.push("note");
      break;
    case 'profiltypecouche':
      tab.push("PC_Profil");
      tab.push("PC_TypeCouche");
      break;
    case 'recolte':
      tab.push("RE_Date");
      tab.push("RE_DifferenceQuantite");
      tab.push("RE_Humidite");
      tab.push("RE_Numero");
      tab.push("RE_ProduitRecolte");
      tab.push("RE_Quantite");
      tab.push("RE_SousIlot");
      tab.push("note");
      break;
    case 'recolteapplique':
      tab.push("RA_Applique");
      tab.push("RA_Recolte");
      break;
    case 'sousilot':
      tab.push("SI_Adresse");
      tab.push("SI_Couche");
      tab.push("SI_Ilot");
      tab.push("SI_Nom");
      tab.push("SI_Numero");
      tab.push("SI_Trace");
      tab.push("couleur");
      tab.push("note");
      break;
    case 'sousilotgroupe':
      tab.push("SG_Groupe");
      tab.push("SG_SousIlot");
      break;
    case 'typecouche':
      tab.push("TC_Nom");
      tab.push("TC_Numero");
      tab.push("TC_SansIlots");
      tab.push("TC_Systeme");
      tab.push("couleur");
      tab.push("note");
      break;
    case 'typedocument':
      tab.push("TO_Description");
      tab.push("TO_Nom");
      tab.push("TO_Numero");
      tab.push("note");
      break;
    case 'typeprelevement':
      tab.push("TV_Nom");
      tab.push("TV_Numero");
      tab.push("couleur");
      tab.push("note");
      break;
    case 'typeproduit':
      tab.push("TD_Nom");
      tab.push("TD_Numero");
      tab.push("couleur");
      tab.push("note");
      break;
    case 'typeprofil':
      tab.push("TP_Nom");
      tab.push("TP_Numero");
      tab.push("couleur");
      tab.push("note");
      break;
    case 'unite':
      tab.push("UN_Nom");
      tab.push("UN_Numero");
      break;
    case 'variete':
      tab.push("VA_Espece");
      tab.push("VA_Nom");
      tab.push("VA_Numero");
      tab.push("couleur");
      break;
    case 'vente':
      tab.push("VE_Date");
      tab.push("VE_Numero");
      tab.push("VE_Personne");
      tab.push("VE_Prix");
      tab.push("VE_Quantite");
      tab.push("VE_Recolte");
      tab.push("note");
      break;

  }
  return tab;
}

/* Renvoie les 'label' des champs d'une table */
function mcd_getChampsLabel(table){
  var tab=new Array();
  switch(table.toLowerCase()){
    case 'achat':
      tab.push("Article");
      tab.push("Date d'achat");
      tab.push("Différence de quantité après achat");
      tab.push("Exploitant");
      tab.push("Numéro");
      tab.push("Quantité");
      tab.push("Note");
      break;
    case 'adresse':
      tab.push("Adresse");
      tab.push("Complément d'adresse n°1");
      tab.push("Complément d'adresse n°2");
      tab.push("Code postal");
      tab.push("Commune");
      tab.push("Numéro");
      break;
    case 'adressepersonne':
      tab.push("Adresse");
      tab.push("Personne");
      break;
    case 'applique':
      tab.push("Exploitant");
      tab.push("Numéro");
      tab.push("Date de début");
      tab.push("Date de fin");
      tab.push("Profil appliqué");
      tab.push("Sous-îlot cible");
      break;
    case 'article':
      tab.push("Code secondaire");
      tab.push("Code tertiaire");
      tab.push("Code barre EAN13");
      tab.push("Conditionnement");
      tab.push("Exploitant");
      tab.push("Nom");
      tab.push("Numéro");
      tab.push("Personne/Entreprise");
      tab.push("Prix par unité");
      tab.push("Produit");
      tab.push("Note");
      break;
    case 'classement':
      tab.push("Description");
      tab.push("Nom");
      tab.push("Numéro");
      tab.push("Symbole");
      break;
    case 'codepostal':
      tab.push("Bureau de poste");
      tab.push("Code postal");
      tab.push("Numéro");
      break;
    case 'commune':
      tab.push("Nom");
      tab.push("Numéro");
      tab.push("Numéro SIRET");
      tab.push("Couleur");
      break;
    case 'communecp':
      tab.push("Code postal");
      tab.push("Commune");
      break;
    case 'composant':
      tab.push("Description");
      tab.push("Formule chimique");
      tab.push("Nom");
      tab.push("Numéro");
      tab.push("Note");
      break;
    case 'compose':
      tab.push("Composant");
      tab.push("Composition");
      tab.push("Concentration");
      tab.push("Numéro");
      tab.push("Unité");
      break;
    case 'composition':
      tab.push("Nom");
      tab.push("Numéro");
      tab.push("Note");
      break;
    case 'conditionnement':
      tab.push("Description");
      tab.push("Nom");
      tab.push("Numéro");
      tab.push("Quantité");
      tab.push("Unité");
      tab.push("Note");
      break;
    case 'contact':
      tab.push("Adresse e-mail");
      tab.push("N° Fax");
      tab.push("Numéro");
      tab.push("N° Téléphone");
      break;
    case 'contrainte':
      tab.push("Description");
      tab.push("Login de l'exploitant");
      tab.push("Formule logique");
      tab.push("Nom");
      tab.push("Numéro");
      tab.push("Point de contrôle");
      tab.push("Requête");
      tab.push("Contrainte système");
      tab.push("Note");
      break;
    case 'contrainteexploitant':
      tab.push("Contrainte");
      tab.push("Exploitant");
      break;
    case 'contrainteprofil':
      tab.push("Contrainte");
      tab.push("Profil");
      break;
    case 'contraintesousilot':
      tab.push("Contrainte");
      tab.push("Sous-îlot");
      break;
    case 'couche':
      tab.push("Date de séparation");
      tab.push("Exploitant");
      tab.push("Couche mère");
      tab.push("Nom");
      tab.push("Numéro");
      tab.push("Partagée");
      tab.push("Type de couche");
      tab.push("Numéro de version");
      tab.push("Couleur");
      tab.push("Note");
      break;
    case 'dateavantrecolte':
      tab.push("Composant");
      tab.push("Période avant récolte");
      tab.push("Espèce");
      tab.push("Numéro");
      break;
    case 'declassement':
      tab.push("Classement");
      tab.push("Produit");
      break;
    case 'definiprofil':
      tab.push("Produit");
      tab.push("Densité");
      tab.push("Numéro");
      tab.push("Profil");
      break;
    case 'document':
      tab.push("Date");
      tab.push("Exploitant");
      tab.push("Nom");
      tab.push("Numéro");
      tab.push("Type de document");
      tab.push("Note");
      break;
    case 'documente':
      tab.push("Contrainte");
      tab.push("Document");
      break;
    case 'espece':
      tab.push("Nom");
      tab.push("Numéro");
      tab.push("Couleur");
      tab.push("Note");
      break;
    case 'estdetype':
      tab.push("Profil");
      tab.push("Famille de profil");
      break;
    case 'estjoignable':
      tab.push("Contact");
      tab.push("Personne");
      break;
    case 'exploitant':
      tab.push("Adresse");
      tab.push("Exclu");
      tab.push("Login");
      tab.push("Nom");
      tab.push("Numéro P.A.C.");
      tab.push("Numéro");
      tab.push("Prénom");
      break;
    case 'firme':
      tab.push("Nom");
      tab.push("Numéro");
      break;
    case 'forme':
      tab.push("Abbréviation");
      tab.push("Description");
      tab.push("Nom");
      tab.push("Numero");
      break;
    case 'groupe':
      tab.push("Couche contenante");
      tab.push("Nom");
      tab.push("Numéro");
      tab.push("Couleur");
      tab.push("Note");
      break;
    case 'ilot':
      tab.push("Code P.A.C.");
      tab.push("Commune");
      tab.push("Exploitant");
      tab.push("Nom");
      tab.push("Numéro");
      tab.push("Surface de référence");
      tab.push("Tracé géographique");
      tab.push("Couleur");
      tab.push("Note");
      break;
    case 'incompatibleavec':
      tab.push("Classement");
      tab.push("Produit");
      break;
    case 'irrigation':
      tab.push("Débit");
      tab.push("Numéro");
      tab.push("Date de début");
      tab.push("Date de fin");
      tab.push("Provenance de l'eau");
      tab.push("Sous-ilot irrigué");
      tab.push("Note");
      break;
    case 'lot':
      tab.push("Application");
      tab.push("Partie de profil");
      tab.push("Numéro de lot");
      tab.push("Numéro");
      break;
    case 'materiel':
      tab.push("Date d'achat");
      tab.push("Date de mise hors service");
      tab.push("Date de mise en service");
      tab.push("Exploitant");
      tab.push("Modèle");
      tab.push("Nom");
      tab.push("Numéro");
      tab.push("Prix d'achat");
      tab.push("Note");
      break;
    case 'modele':
      tab.push("Firme productrice");
      tab.push("Nom");
      tab.push("Numéro");
      tab.push("N° Référence");
      tab.push("Note");
      break;
    case 'modificationilot':
      tab.push("Date");
      tab.push("Ilot fils");
      tab.push("Ilot père");
      break;
    case 'modificationsousilot':
      tab.push("Date");
      tab.push("Sous-îlot fils");
      tab.push("Sous-îlot père");
      break;
    case 'personne':
      tab.push("Entreprise");
      tab.push("Login de l'exploitant");
      tab.push("Nom");
      tab.push("Numéro");
      tab.push("Prénom");
      tab.push("Numéro SIRET");
      break;
    case 'preference':
      tab.push("Champs");
      tab.push("Exploitant");
      tab.push("Valeur");
      break;
    case 'prelevement':
      tab.push("Exploitant");
      tab.push("Nom");
      tab.push("Numéro");
      tab.push("Type de prélèvement");
      tab.push("X");
      tab.push("Y");
      tab.push("Z");
      tab.push("Couleur");
      tab.push("Note");
      break;
    case 'produit':
      tab.push("Code");
      tab.push("Composition");
      tab.push("Firme productrice");
      tab.push("Sous forme de");
      tab.push("Nom");
      tab.push("Numéro");
      tab.push("Famille de produit");
      tab.push("Unité");
      tab.push("Variété");
      tab.push("Couleur");
      tab.push("Note");
      break;
    case 'produitrecolte':
      tab.push("Code");
      tab.push("Exploitant");
      tab.push("Nom");
      tab.push("Numéro");
      tab.push("Prix");
      tab.push("Famille de produit");
      tab.push("Unité");
      tab.push("Variété");
      tab.push("Couleur");
      tab.push("Note");
      break;
    case 'profil':
      tab.push("Login de l'exploitant");
      tab.push("Nom");
      tab.push("Numéro");
      tab.push("Partagé");
      tab.push("Profil système");
      tab.push("Couleur");
      tab.push("Note");
      break;
    case 'profiltypecouche':
      tab.push("Profil");
      tab.push("Type de couche");
      break;
    case 'recolte':
      tab.push("Date");
      tab.push("Différence de quantité après vente");
      tab.push("Humidité");
      tab.push("Numéro");
      tab.push("Produit récolté");
      tab.push("Quantité");
      tab.push("Sous-ilot");
      tab.push("Note");
      break;
    case 'recolteapplique':
      tab.push("Applique");
      tab.push("Récolte");
      break;
    case 'sousilot':
      tab.push("Adresse");
      tab.push("Couche");
      tab.push("Ilot père");
      tab.push("Nom");
      tab.push("Numéro");
      tab.push("Tracé géographique");
      tab.push("Couleur");
      tab.push("Note");
      break;
    case 'sousilotgroupe':
      tab.push("Groupe");
      tab.push("Sous-îlot");
      break;
    case 'typecouche':
      tab.push("Nom");
      tab.push("Numéro");
      tab.push("Ilots non-nécessaires");
      tab.push("Type de couche système");
      tab.push("Couleur");
      tab.push("Note");
      break;
    case 'typedocument':
      tab.push("Description");
      tab.push("Nom");
      tab.push("Numéro");
      tab.push("Note");
      break;
    case 'typeprelevement':
      tab.push("Nom");
      tab.push("Numéro");
      tab.push("Couleur");
      tab.push("Note");
      break;
    case 'typeproduit':
      tab.push("Nom");
      tab.push("Numéro");
      tab.push("Couleur");
      tab.push("Note");
      break;
    case 'typeprofil':
      tab.push("Nom");
      tab.push("Numéro");
      tab.push("Couleur");
      tab.push("Note");
      break;
    case 'unite':
      tab.push("Numéro");
      tab.push("Numéro");
      break;
    case 'variete':
      tab.push("Espèce");
      tab.push("Nom");
      tab.push("Numéro");
      tab.push("Couleur");
      break;
    case 'vente':
      tab.push("Date de vente");
      tab.push("Numéro");
      tab.push("Personne/Entreprise");
      tab.push("Prix par unité(Euros)");
      tab.push("Quantité");
      tab.push("Récolte");
      tab.push("Note");
      break;

  }
  return tab;
}

/* Renvoie les noms physique des champs nécessaires d'une table */
function mcd_getMinChampsLogique(table){
  var tab=new Array();
  switch(table.toLowerCase()){
    case 'achat':
      tab.push("AC_Date");
      tab.push("AC_DifferenceQuantite");
      tab.push("AC_Numero");
      tab.push("AC_Quantite");
      break;
    case 'adresse':
      tab.push("AD_Addr1");
      tab.push("AD_Addr2");
      tab.push("AD_Addr3");
      tab.push("AD_Numero");
      break;
    case 'adressepersonne':
      break;
    case 'applique':
      tab.push("AL_Numero");
      tab.push("AL_PeriodeDebut");
      tab.push("AL_PeriodeFin");
      break;
    case 'article':
      tab.push("AR_Code2");
      tab.push("AR_Code3");
      tab.push("AR_CodeEAN13");
      tab.push("AR_Nom");
      tab.push("AR_Numero");
      tab.push("AR_Prix");
      break;
    case 'classement':
      tab.push("CL_Description");
      tab.push("CL_Nom");
      tab.push("CL_Numero");
      tab.push("CL_Symbole");
      break;
    case 'codepostal':
      tab.push("CP_Bureau");
      tab.push("CP_Code");
      tab.push("CP_Numero");
      break;
    case 'commune':
      tab.push("CO_Nom");
      tab.push("CO_Numero");
      tab.push("CO_SIRET");
      break;
    case 'communecp':
      break;
    case 'composant':
      tab.push("CM_Description");
      tab.push("CM_Formule");
      tab.push("CM_Nom");
      tab.push("CM_Numero");
      break;
    case 'compose':
      tab.push("CE_Concentration");
      tab.push("CE_Numero");
      tab.push("CE_Unite");
      break;
    case 'composition':
      tab.push("CS_Nom");
      tab.push("CS_Numero");
      break;
    case 'conditionnement':
      tab.push("CA_Description");
      tab.push("CA_Nom");
      tab.push("CA_Numero");
      tab.push("CA_Quantite");
      break;
    case 'contact':
      tab.push("CN_Email");
      tab.push("CN_Fax");
      tab.push("CN_Numero");
      tab.push("CN_Tel");
      break;
    case 'contrainte':
      tab.push("CT_Description");
      tab.push("CT_Formule");
      tab.push("CT_Nom");
      tab.push("CT_Numero");
      tab.push("CT_PointControle");
      tab.push("CT_Requete");
      tab.push("CT_Systeme");
      break;
    case 'contrainteexploitant':
      break;
    case 'contrainteprofil':
      break;
    case 'contraintesousilot':
      break;
    case 'couche':
      tab.push("CC_Date");
      tab.push("CC_Nom");
      tab.push("CC_Numero");
      tab.push("CC_Systeme");
      tab.push("CC_Version");
      break;
    case 'dateavantrecolte':
      tab.push("DA_DAR");
      tab.push("DA_Numero");
      break;
    case 'declassement':
      break;
    case 'definiprofil':
      tab.push("DP_Densite");
      tab.push("DP_Numero");
      break;
    case 'document':
      tab.push("DO_Date");
      tab.push("DO_Nom");
      tab.push("DO_Numero");
      break;
    case 'documente':
      break;
    case 'espece':
      tab.push("ES_Nom");
      tab.push("ES_Numero");
      break;
    case 'estdetype':
      break;
    case 'estjoignable':
      break;
    case 'exploitant':
      tab.push("EX_Exclu");
      tab.push("EX_Login");
      tab.push("EX_Nom");
      tab.push("EX_NumPAC");
      tab.push("EX_Numero");
      tab.push("EX_Prenom");
      break;
    case 'firme':
      tab.push("FI_Nom");
      tab.push("FI_Numero");
      break;
    case 'forme':
      tab.push("FO_Abbrevation");
      tab.push("FO_Description");
      tab.push("FO_Nom");
      tab.push("FO_Numero");
      break;
    case 'groupe':
      tab.push("GR_Nom");
      tab.push("GR_Numero");
      break;
    case 'ilot':
      tab.push("IL_Code");
      tab.push("IL_Nom");
      tab.push("IL_Numero");
      tab.push("IL_SurfaceRef");
      tab.push("IL_Trace");
      break;
    case 'incompatibleavec':
      break;
    case 'irrigation':
      tab.push("IR_Debit");
      tab.push("IR_Numero");
      tab.push("IR_PeriodeDebut");
      tab.push("IR_PeriodeFin");
      break;
    case 'lot':
      tab.push("LO_Lot");
      tab.push("LO_Numero");
      break;
    case 'materiel':
      tab.push("MA_DateAchat");
      tab.push("MA_DateHorsService");
      tab.push("MA_DateService");
      tab.push("MA_Nom");
      tab.push("MA_Numero");
      tab.push("MA_Prix");
      break;
    case 'modele':
      tab.push("MO_Nom");
      tab.push("MO_Numero");
      tab.push("MO_Reference");
      break;
    case 'modificationilot':
      tab.push("MI_Date");
      break;
    case 'modificationsousilot':
      tab.push("MS_Date");
      break;
    case 'personne':
      tab.push("PE_Entreprise");
      tab.push("PE_Nom");
      tab.push("PE_Numero");
      tab.push("PE_Prenom");
      tab.push("PE_SIRET");
      break;
    case 'preference':
      tab.push("PF_Champs");
      tab.push("PF_Valeur");
      break;
    case 'prelevement':
      tab.push("PV_Nom");
      tab.push("PV_Numero");
      tab.push("PV_X");
      tab.push("PV_Y");
      tab.push("PV_Z");
      break;
    case 'produit':
      tab.push("PD_Code");
      tab.push("PD_Nom");
      tab.push("PD_Numero");
      break;
    case 'produitrecolte':
      tab.push("PL_Code");
      tab.push("PL_Nom");
      tab.push("PL_Numero");
      tab.push("PL_Prix");
      break;
    case 'profil':
      tab.push("PR_Nom");
      tab.push("PR_Numero");
      tab.push("PR_Partage");
      tab.push("PR_Systeme");
      break;
    case 'profiltypecouche':
      break;
    case 'recolte':
      tab.push("RE_Date");
      tab.push("RE_DifferenceQuantite");
      tab.push("RE_Humidite");
      tab.push("RE_Numero");
      tab.push("RE_Quantite");
      break;
    case 'recolteapplique':
      break;
    case 'sousilot':
      tab.push("SI_Nom");
      tab.push("SI_Numero");
      tab.push("SI_Trace");
      break;
    case 'sousilotgroupe':
      break;
    case 'typecouche':
      tab.push("TC_Nom");
      tab.push("TC_Numero");
      tab.push("TC_SansIlots");
      tab.push("TC_Systeme");
      break;
    case 'typedocument':
      tab.push("TO_Description");
      tab.push("TO_Nom");
      tab.push("TO_Numero");
      break;
    case 'typeprelevement':
      tab.push("TV_Nom");
      tab.push("TV_Numero");
      break;
    case 'typeproduit':
      tab.push("TD_Nom");
      tab.push("TD_Numero");
      break;
    case 'typeprofil':
      tab.push("TP_Nom");
      tab.push("TP_Numero");
      break;
    case 'unite':
      tab.push("UN_Nom");
      tab.push("UN_Numero");
      break;
    case 'variete':
      tab.push("VA_Nom");
      tab.push("VA_Numero");
      break;
    case 'vente':
      tab.push("VE_Date");
      tab.push("VE_Numero");
      tab.push("VE_Prix");
      tab.push("VE_Quantite");
      break;

  }
  return tab;
}

/* Renvoie les 'label' des champs nécessaires d'une table */
function mcd_getMinChampsLabel(table){
  var tab=new Array();
  switch(table.toLowerCase()){
    case 'achat':
      tab.push("Date d'achat");
      tab.push("Différence de quantité après achat");
      tab.push("Numéro");
      tab.push("Quantité");
      break;
    case 'adresse':
      tab.push("Adresse");
      tab.push("Complément d'adresse n°1");
      tab.push("Complément d'adresse n°2");
      tab.push("Numéro");
      break;
    case 'adressepersonne':
      break;
    case 'applique':
      tab.push("Numéro");
      tab.push("Date de début");
      tab.push("Date de fin");
      break;
    case 'article':
      tab.push("Code secondaire");
      tab.push("Code tertiaire");
      tab.push("Code barre EAN13");
      tab.push("Nom");
      tab.push("Numéro");
      tab.push("Prix par unité");
      break;
    case 'classement':
      tab.push("Description");
      tab.push("Nom");
      tab.push("Numéro");
      tab.push("Symbole");
      break;
    case 'codepostal':
      tab.push("Bureau de poste");
      tab.push("Code postal");
      tab.push("Numéro");
      break;
    case 'commune':
      tab.push("Nom");
      tab.push("Numéro");
      tab.push("Numéro SIRET");
      break;
    case 'communecp':
      break;
    case 'composant':
      tab.push("Description");
      tab.push("Formule chimique");
      tab.push("Nom");
      tab.push("Numéro");
      break;
    case 'compose':
      tab.push("Concentration");
      tab.push("Numéro");
      tab.push("Unité");
      break;
    case 'composition':
      tab.push("Nom");
      tab.push("Numéro");
      break;
    case 'conditionnement':
      tab.push("Description");
      tab.push("Nom");
      tab.push("Numéro");
      tab.push("Quantité");
      break;
    case 'contact':
      tab.push("Adresse e-mail");
      tab.push("N° Fax");
      tab.push("Numéro");
      tab.push("N° Téléphone");
      break;
    case 'contrainte':
      tab.push("Description");
      tab.push("Formule logique");
      tab.push("Nom");
      tab.push("Numéro");
      tab.push("Point de contrôle");
      tab.push("Requête");
      tab.push("Contrainte système");
      break;
    case 'contrainteexploitant':
      break;
    case 'contrainteprofil':
      break;
    case 'contraintesousilot':
      break;
    case 'couche':
      tab.push("Date de séparation");
      tab.push("Nom");
      tab.push("Numéro");
      tab.push("Partagée");
      tab.push("Numéro de version");
      break;
    case 'dateavantrecolte':
      tab.push("Période avant récolte");
      tab.push("Numéro");
      break;
    case 'declassement':
      break;
    case 'definiprofil':
      tab.push("Densité");
      tab.push("Numéro");
      break;
    case 'document':
      tab.push("Date");
      tab.push("Nom");
      tab.push("Numéro");
      break;
    case 'documente':
      break;
    case 'espece':
      tab.push("Nom");
      tab.push("Numéro");
      break;
    case 'estdetype':
      break;
    case 'estjoignable':
      break;
    case 'exploitant':
      tab.push("Exclu");
      tab.push("Login");
      tab.push("Nom");
      tab.push("Numéro P.A.C.");
      tab.push("Numéro");
      tab.push("Prénom");
      break;
    case 'firme':
      tab.push("Nom");
      tab.push("Numéro");
      break;
    case 'forme':
      tab.push("Abbréviation");
      tab.push("Description");
      tab.push("Nom");
      tab.push("Numero");
      break;
    case 'groupe':
      tab.push("Nom");
      tab.push("Numéro");
      break;
    case 'ilot':
      tab.push("Code P.A.C.");
      tab.push("Nom");
      tab.push("Numéro");
      tab.push("Surface de référence");
      tab.push("Tracé géographique");
      break;
    case 'incompatibleavec':
      break;
    case 'irrigation':
      tab.push("Débit");
      tab.push("Numéro");
      tab.push("Date de début");
      tab.push("Date de fin");
      break;
    case 'lot':
      tab.push("Numéro de lot");
      tab.push("Numéro");
      break;
    case 'materiel':
      tab.push("Date d'achat");
      tab.push("Date de mise hors service");
      tab.push("Date de mise en service");
      tab.push("Nom");
      tab.push("Numéro");
      tab.push("Prix d'achat");
      break;
    case 'modele':
      tab.push("Nom");
      tab.push("Numéro");
      tab.push("N° Référence");
      break;
    case 'modificationilot':
      tab.push("Date");
      break;
    case 'modificationsousilot':
      tab.push("Date");
      break;
    case 'personne':
      tab.push("Entreprise");
      tab.push("Nom");
      tab.push("Numéro");
      tab.push("Prénom");
      tab.push("Numéro SIRET");
      break;
    case 'preference':
      tab.push("Champs");
      tab.push("Valeur");
      break;
    case 'prelevement':
      tab.push("Nom");
      tab.push("Numéro");
      tab.push("X");
      tab.push("Y");
      tab.push("Z");
      break;
    case 'produit':
      tab.push("Code");
      tab.push("Nom");
      tab.push("Numéro");
      break;
    case 'produitrecolte':
      tab.push("Code");
      tab.push("Nom");
      tab.push("Numéro");
      tab.push("Prix");
      break;
    case 'profil':
      tab.push("Nom");
      tab.push("Numéro");
      tab.push("Partagé");
      tab.push("Profil système");
      break;
    case 'profiltypecouche':
      break;
    case 'recolte':
      tab.push("Date");
      tab.push("Différence de quantité après vente");
      tab.push("Humidité");
      tab.push("Numéro");
      tab.push("Quantité");
      break;
    case 'recolteapplique':
      break;
    case 'sousilot':
      tab.push("Nom");
      tab.push("Numéro");
      tab.push("Tracé géographique");
      break;
    case 'sousilotgroupe':
      break;
    case 'typecouche':
      tab.push("Nom");
      tab.push("Numéro");
      tab.push("Ilots non-nécessaires");
      tab.push("Type de couche système");
      break;
    case 'typedocument':
      tab.push("Description");
      tab.push("Nom");
      tab.push("Numéro");
      break;
    case 'typeprelevement':
      tab.push("Nom");
      tab.push("Numéro");
      break;
    case 'typeproduit':
      tab.push("Nom");
      tab.push("Numéro");
      break;
    case 'typeprofil':
      tab.push("Nom");
      tab.push("Numéro");
      break;
    case 'unite':
      tab.push("Numéro");
      tab.push("Numéro");
      break;
    case 'variete':
      tab.push("Nom");
      tab.push("Numéro");
      break;
    case 'vente':
      tab.push("Date de vente");
      tab.push("Numéro");
      tab.push("Prix par unité(Euros)");
      tab.push("Quantité");
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
  liens[0].push('Personne.PE_Exploitant_Login');
  liens[1].push('Exploitant.EX_Login');
  liens[0].push('Profil.PR_Exploitant_Login');
  liens[1].push('Exploitant.EX_Login');
  liens[0].push('ProfilTypeCouche.PC_Profil');
  liens[1].push('Profil.PR_Numero');
  liens[0].push('ProfilTypeCouche.PC_TypeCouche');
  liens[1].push('TypeCouche.TC_Numero');
  liens[0].push('Contrainte.CT_Exploitant_Login');
  liens[1].push('Exploitant.EX_Login');
  liens[0].push('Document.DO_TypeDocument');
  liens[1].push('TypeDocument.TO_Numero');
  liens[0].push('Document.DO_Exploitant_Login');
  liens[1].push('Exploitant.EX_Login');
  liens[0].push('Adresse.AD_CodePostal');
  liens[1].push('CodePostal.CP_Numero');
  liens[0].push('Adresse.AD_Commune');
  liens[1].push('Commune.CO_Numero');
  liens[0].push('Exploitant.EX_Adresse');
  liens[1].push('Adresse.AD_Numero');
  liens[0].push('Preference.PF_Exploitant_Login');
  liens[1].push('Exploitant.EX_Login');
  liens[0].push('Couche.CC_TypeCouche');
  liens[1].push('TypeCouche.TC_Numero');
  liens[0].push('Couche.CC_Exploitant_Login');
  liens[1].push('Exploitant.EX_Login');
  liens[0].push('Couche.CC_Mere');
  liens[1].push('Couche.CC_Numero');
  liens[0].push('Groupe.GR_Couche');
  liens[1].push('Couche.CC_Numero');
  liens[0].push('Ilot.IL_Exploitant_Login');
  liens[1].push('Exploitant.EX_Login');
  liens[0].push('Ilot.IL_Commune');
  liens[1].push('Commune.CO_Numero');
  liens[0].push('ModificationIlot.MI_Pere');
  liens[1].push('Ilot.IL_Numero');
  liens[0].push('ModificationIlot.MI_Fils');
  liens[1].push('Ilot.IL_Numero');
  liens[0].push('SousIlot.SI_Ilot');
  liens[1].push('Ilot.IL_Numero');
  liens[0].push('SousIlot.SI_Adresse');
  liens[1].push('Adresse.AD_Numero');
  liens[0].push('SousIlot.SI_Couche');
  liens[1].push('Couche.CC_Numero');
  liens[0].push('ModificationSousIlot.MS_Pere');
  liens[1].push('SousIlot.SI_Numero');
  liens[0].push('ModificationSousIlot.MS_Fils');
  liens[1].push('SousIlot.SI_Numero');
  liens[0].push('CommuneCP.MC_Commune');
  liens[1].push('Commune.CO_Numero');
  liens[0].push('CommuneCP.MC_CodePostal');
  liens[1].push('CodePostal.CP_Numero');
  liens[0].push('EstJoignable.EJ_Personne');
  liens[1].push('Personne.PE_Numero');
  liens[0].push('EstJoignable.EJ_Contact');
  liens[1].push('Contact.CN_Numero');
  liens[0].push('AdressePersonne.AP_Personne');
  liens[1].push('Personne.PE_Numero');
  liens[0].push('AdressePersonne.AP_Adresse');
  liens[1].push('Adresse.AD_Numero');
  liens[0].push('Applique.AL_SousIlot');
  liens[1].push('SousIlot.SI_Numero');
  liens[0].push('Applique.AL_Profil');
  liens[1].push('Profil.PR_Numero');
  liens[0].push('Applique.AL_Exploitant_Login');
  liens[1].push('Exploitant.EX_Login');
  liens[0].push('EstDeType.ET_TypeProfil');
  liens[1].push('TypeProfil.TP_Numero');
  liens[0].push('EstDeType.ET_Profil');
  liens[1].push('Profil.PR_Numero');
  liens[0].push('Compose.CE_Composition');
  liens[1].push('Composition.CS_Numero');
  liens[0].push('Compose.CE_Composant');
  liens[1].push('Composant.CM_Numero');
  liens[0].push('DeClassement.DC_Produit');
  liens[1].push('Produit.PD_Numero');
  liens[0].push('DeClassement.DC_Classement');
  liens[1].push('Classement.CL_Numero');
  liens[0].push('IncompatibleAvec.IA_Produit');
  liens[1].push('Produit.PD_Numero');
  liens[0].push('IncompatibleAvec.IA_Classement');
  liens[1].push('Classement.CL_Numero');
  liens[0].push('Variete.VA_Espece');
  liens[1].push('Espece.ES_Numero');
  liens[0].push('DateAvantRecolte.DA_Composant');
  liens[1].push('Composant.CM_Numero');
  liens[0].push('DateAvantRecolte.DA_Espece');
  liens[1].push('Espece.ES_Numero');
  liens[0].push('Produit.PD_Unite');
  liens[1].push('Unite.UN_Numero');
  liens[0].push('Produit.PD_TypeProduit');
  liens[1].push('TypeProduit.TD_Numero');
  liens[0].push('Produit.PD_Forme');
  liens[1].push('Forme.FO_Numero');
  liens[0].push('Produit.PD_Firme');
  liens[1].push('Firme.FI_Numero');
  liens[0].push('Produit.PD_Variete');
  liens[1].push('Variete.VA_Numero');
  liens[0].push('Produit.PD_Composition');
  liens[1].push('Composition.CS_Numero');
  liens[0].push('ProduitRecolte.PL_Unite');
  liens[1].push('Unite.UN_Numero');
  liens[0].push('ProduitRecolte.PL_TypeProduit');
  liens[1].push('TypeProduit.TD_Numero');
  liens[0].push('ProduitRecolte.PL_Variete');
  liens[1].push('Variete.VA_Numero');
  liens[0].push('ProduitRecolte.PL_Exploitant_Login');
  liens[1].push('Exploitant.EX_Login');
  liens[0].push('Recolte.RE_SousIlot');
  liens[1].push('SousIlot.SI_Numero');
  liens[0].push('Recolte.RE_ProduitRecolte');
  liens[1].push('ProduitRecolte.PL_Numero');
  liens[0].push('RecolteApplique.RA_Recolte');
  liens[1].push('Recolte.RE_Numero');
  liens[0].push('RecolteApplique.RA_Applique');
  liens[1].push('Applique.AL_Numero');
  liens[0].push('Vente.VE_Personne');
  liens[1].push('Personne.PE_Numero');
  liens[0].push('Vente.VE_Recolte');
  liens[1].push('Recolte.RE_Numero');
  liens[0].push('Article.AR_Exploitant_Login');
  liens[1].push('Exploitant.EX_Login');
  liens[0].push('Article.AR_Produit');
  liens[1].push('Produit.PD_Numero');
  liens[0].push('Article.AR_Conditionnement');
  liens[1].push('Conditionnement.CA_Numero');
  liens[0].push('Article.AR_Personne');
  liens[1].push('Personne.PE_Numero');
  liens[0].push('Achat.AC_Article');
  liens[1].push('Article.AR_Numero');
  liens[0].push('Achat.AC_Exploitant_Login');
  liens[1].push('Exploitant.EX_Login');
  liens[0].push('Conditionnement.CA_Unite');
  liens[1].push('Unite.UN_Numero');
  liens[0].push('DefiniProfil.DP_Profil');
  liens[1].push('Profil.PR_Numero');
  liens[0].push('DefiniProfil.DP_Article');
  liens[1].push('Article.AR_Numero');
  liens[0].push('Lot.LO_DefiniProfil');
  liens[1].push('DefiniProfil.DP_Numero');
  liens[0].push('Lot.LO_Applique');
  liens[1].push('Applique.AL_Numero');
  liens[0].push('ContrainteSousIlot.CI_Contrainte');
  liens[1].push('Contrainte.CT_Numero');
  liens[0].push('ContrainteSousIlot.CI_SousIlot');
  liens[1].push('SousIlot.SI_Numero');
  liens[0].push('Documente.DE_Contrainte');
  liens[1].push('Contrainte.CT_Numero');
  liens[0].push('Documente.DE_Document');
  liens[1].push('Document.DO_Numero');
  liens[0].push('SousIlotGroupe.SG_SousIlot');
  liens[1].push('SousIlot.SI_Numero');
  liens[0].push('SousIlotGroupe.SG_Groupe');
  liens[1].push('Groupe.GR_Numero');
  liens[0].push('ContrainteProfil.CR_Contrainte');
  liens[1].push('Contrainte.CT_Numero');
  liens[0].push('ContrainteProfil.CR_Profil');
  liens[1].push('Profil.PR_Numero');
  liens[0].push('ContrainteExploitant.CX_Contrainte');
  liens[1].push('Contrainte.CT_Numero');
  liens[0].push('ContrainteExploitant.CX_Exploitant');
  liens[1].push('Exploitant.EX_Numero');
  liens[0].push('Materiel.MA_Modele');
  liens[1].push('Modele.MO_Numero');
  liens[0].push('Materiel.MA_Exploitant_Login');
  liens[1].push('Exploitant.EX_Login');
  liens[0].push('Modele.MO_Firme');
  liens[1].push('Firme.FI_Numero');
  liens[0].push('Prelevement.PV_TypePrelevement');
  liens[1].push('TypePrelevement.TV_Numero');
  liens[0].push('Prelevement.PV_Exploitant_Login');
  liens[1].push('Exploitant.EX_Login');
  liens[0].push('Irrigation.IR_SousIlot');
  liens[1].push('SousIlot.SI_Numero');
  liens[0].push('Irrigation.IR_Prelevement');
  liens[1].push('Prelevement.PV_Numero');
  return liens;
}


/* Renvoie les tables contenants le champs 'couleur' */
function mcd_getTablesCouleur(){
  var tab=new Array();
  tab.push(new Array());
  tab.push(new Array());
  tab[0].push("Communes");
  tab[1].push('Commune');
  tab[0].push("Couches");
  tab[1].push('Couche');
  tab[0].push("Espèces");
  tab[1].push('Espece');
  tab[0].push("Familles de produits");
  tab[1].push('TypeProduit');
  tab[0].push("Familles de profils");
  tab[1].push('TypeProfil');
  tab[0].push("Groupes");
  tab[1].push('Groupe');
  tab[0].push("Ilots");
  tab[1].push('Ilot');
  tab[0].push("Produits achétés");
  tab[1].push('Produit');
  tab[0].push("Produits de récolte");
  tab[1].push('ProduitRecolte');
  tab[0].push("Profils");
  tab[1].push('Profil');
  tab[0].push("Prélèvement d'eau");
  tab[1].push('Prelevement');
  tab[0].push("Sous-îlots");
  tab[1].push('SousIlot');
  tab[0].push("Types de couches");
  tab[1].push('TypeCouche');
  tab[0].push("Types de prélèvements");
  tab[1].push('TypePrelevement');
  tab[0].push("Variétés");
  tab[1].push('Variete');
  return tab;
}

/* Renvoie les tables contenants le champs 'note' */
function mcd_getTablesNote(){
  var tab=new Array();
  tab.push(new Array());
  tab.push(new Array());
  tab[0].push("Achats");
  tab[1].push('Achat');
  tab[0].push("Appareils matériels");
  tab[1].push('Materiel');
  tab[0].push("Articles");
  tab[1].push('Article');
  tab[0].push("Composants");
  tab[1].push('Composant');
  tab[0].push("Compositions");
  tab[1].push('Composition');
  tab[0].push("Conditionnements");
  tab[1].push('Conditionnement');
  tab[0].push("Contraintes");
  tab[1].push('Contrainte');
  tab[0].push("Couches");
  tab[1].push('Couche');
  tab[0].push("Documents");
  tab[1].push('Document');
  tab[0].push("Espèces");
  tab[1].push('Espece');
  tab[0].push("Familles de produits");
  tab[1].push('TypeProduit');
  tab[0].push("Familles de profils");
  tab[1].push('TypeProfil');
  tab[0].push("Groupes");
  tab[1].push('Groupe');
  tab[0].push("Ilots");
  tab[1].push('Ilot');
  tab[0].push("Irrigations");
  tab[1].push('Irrigation');
  tab[0].push("Modèles");
  tab[1].push('Modele');
  tab[0].push("Produits achétés");
  tab[1].push('Produit');
  tab[0].push("Produits de récolte");
  tab[1].push('ProduitRecolte');
  tab[0].push("Profils");
  tab[1].push('Profil');
  tab[0].push("Prélèvement d'eau");
  tab[1].push('Prelevement');
  tab[0].push("Récoltes");
  tab[1].push('Recolte');
  tab[0].push("Sous-îlots");
  tab[1].push('SousIlot');
  tab[0].push("Types de couches");
  tab[1].push('TypeCouche');
  tab[0].push("Types de document");
  tab[1].push('TypeDocument');
  tab[0].push("Types de prélèvements");
  tab[1].push('TypePrelevement');
  tab[0].push("Ventes");
  tab[1].push('Vente');
  return tab;
}

/* Renvoie les requêtes de jointure des différents */
function mcd_getRequeteCouleur(table){
  switch(table.toLowerCase()){
    case 'commune':
      return 'SELECT commune.couleur, si_numero FROM commune,adresse,sousilot WHERE si_adresse=ad_numero AND ad_commune=co_numero;';
      break;
    case 'couche':
      return 'SELECT couche.couleur, si_numero FROM couche,sousilot WHERE si_couche=cc_numero;';
      break;
    case 'espece':
      return 'SELECT espece.couleur, si_numero FROM espece, variete, produit, article, definiprofil, profil, applique, sousilot WHERE ES_Numero=VA_Espece AND VA_Numero=PD_Variete AND PD_Numero=AR_Produit AND AR_Numero=DP_Article AND DP_Profil=PR_Numero AND PR_Numero=AL_Profil AND AL_SousIlot=SI_Numero;';
      break;
    case 'typeproduit':
      return 'SELECT typeproduit.couleur, si_numero FROM typeproduit,produit,article,definiprofil,profil,applique,sousilot WHERE si_numero=al_sousilot AND al_profil=pr_numero AND pr_numero=dp_profil AND dp_article=ar_numero AND ar_produit=pd_numero AND pd_typeproduit=td_numero;';
      break;
    case 'typeprofil':
      return 'SELECT typeprofil.couleur, si_numero FROM typeprofil,estdetype,profil,applique,sousilot WHERE si_numero=al_sousilot AND al_profil=pr_numero AND pr_numero=et_profil AND et_typeprofil=tp_numero;';
      break;
    case 'groupe':
      return 'SELECT groupe.couleur, si_numero FROM groupe,sousilotgroupe,sousilot WHERE si_numero=sg_sousilot AND sg_groupe=gr_numero;';
      break;
    case 'ilot':
      return 'SELECT ilot.couleur, si_numero FROM ilot,sousilot WHERE il_numero=si_ilot;';
      break;
    case 'produit':
      return 'SELECT produit.couleur, si_numero FROM produit,article,definiprofil,profil,applique,sousilot WHERE si_numero=al_sousilot AND al_profil=pr_numero AND pr_numero=dp_profil AND dp_article=ar_numero AND ar_produit=pd_numero;';
      break;
    case 'produitrecolte':
      return 'SELECT produitrecolte.couleur, si_numero FROM produitrecolte,recolte,sousilot WHERE si_numero=re_sousilot AND re_produitrecolte=pl_numero;';
      break;
    case 'profil':
      return 'SELECT profil.couleur, si_numero FROM profil,applique,sousilot WHERE si_numero=al_sousilot AND al_profil=pr_numero;';
      break;
    case 'prelevement':
      return 'SELECT prelevement.couleur, si_numero FROM prelevement,irrigation,sousilot WHERE si_numero=ir_sousilot AND ir_prelevement=pv_numero;';
      break;
    case 'sousilot':
      return 'SELECT sousilot.couleur, si_numero FROM sousilot;';
      break;
    case 'typecouche':
      return 'SELECT typecouche.couleur, si_numero FROM typecouche,couche,sousilot WHERE si_couche=cc_numero AND cc_typecouche=tc_numero;';
      break;
    case 'typeprelevement':
      return 'SELECT typeprelevement.couleur, si_numero FROM typeprelevement,prelevement,irrigation,sousilot WHERE si_numero=ir_sousilot AND ir_prelevement=pv_numero AND pv_typeprelevement=tv_numero;';
      break;
    case 'variete':
      return 'SELECT variete.couleur, si_numero FROM variete, produit, article, definiprofil, profil, applique, sousilot WHERE VA_Numero=PD_Variete AND PD_Numero=AR_Produit AND AR_Numero=DP_Article AND DP_Profil=PR_Numero AND PR_Numero=AL_Profil AND AL_SousIlot=SI_Numero;';
      break;
      default:
      return '';
  }
  return '';
}

  
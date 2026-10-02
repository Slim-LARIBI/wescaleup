import type { SeoDictionary } from '../../en/services/seo'

export const seo: SeoDictionary = {
  meta: {
    title: 'SEO — Technique, sémantique, GEO & automatisation',
    description:
      'Des systèmes SEO avancés qui combinent SEO technique, architecture sémantique, Core Web Vitals, GEO SEO, pipelines Search Console, Google Apps Script, workflows n8n et dashboards de performance.',
  },
  hero: {
    label: 'Systèmes SEO',
    titleLine1: 'Le SEO pensé',
    titleLine2: 'comme un système de croissance.',
    text: 'Nous ne faisons pas du SEO « case à cocher ». Nous construisons des systèmes SEO techniques, sémantiques et opérationnels, où santé du crawl, Core Web Vitals, structure de l’intention de recherche, stratégie GEO, automatisation et reporting travaillent ensemble pour une croissance organique durable.',
    primaryCta: 'Demander un audit SEO',
    secondaryCta: 'Retour aux services',
    metrics: [
      { value: '+220 %', label: 'Potentiel de croissance organique' },
      { value: 'Plus rapide', label: 'Clarté de l’indexation' },
      { value: 'Meilleure', label: 'Qualité du trafic' },
      { value: 'Évolutive', label: 'Production de contenu' },
    ],
  },
  panel: {
    eyebrow: 'Pilotage SEO',
    title: 'Technique. Sémantique. Mesurable.',
    badge: 'Croissance organique',
    healthEyebrow: 'État de santé',
    healthText: 'Les positions progressent quand la structure progresse.',
    health: [
      { label: 'Indexation', value: 'Plus propre' },
      { label: 'CWV', value: 'Plus solides' },
      { label: 'Visibilité', value: 'En hausse' },
    ],
    cards: [
      {
        title: 'Core Web Vitals',
        meta: 'LCP · CLS · INP',
        text: 'Une meilleure UX et un rendu stable renforcent les positions et la qualité des conversions.',
      },
      {
        title: 'Opérations automatisées',
        meta: 'Apps Script · n8n',
        text: 'Reporting, monitoring et opérations SEO peuvent passer à l’échelle grâce à l’automatisation.',
      },
    ],
  },
  problems: {
    label: 'Ce qui freine la performance',
    title: 'La plupart des stratégies SEO sous-performent parce que le système est fragmenté.',
    text: 'Les positions ne progressent pas durablement quand la santé technique, la structure sémantique, le maillage interne et la mesure sont traités comme des chantiers séparés.',
    items: [
      'Les pages existent, mais Google n’indexe pas les bonnes',
      'Les Core Web Vitals dégradent les positions et l’expérience utilisateur',
      'L’intention de recherche est mélangée entre pages, catégories et articles',
      'Le maillage interne ne distribue pas l’autorité de manière stratégique',
      'Le reporting SEO ne relie pas le trafic aux conversions ni au chiffre d’affaires',
      'Trop de travail SEO manuel, sans automatisation ni système d’alertes',
    ],
  },
  layers: {
    label: 'Architecture du système',
    title: 'Notre système SEO se construit par couches.',
    text: 'Une croissance organique durable naît de l’interaction entre qualité technique, clarté sémantique, structure d’autorité, performance, reporting et automatisation.',
    items: [
      {
        title: 'Couche technique',
        description:
          'Crawlabilité, indexation, rendu, données structurées, canonicals, sitemap, robots, navigation à facettes et maîtrise de l’architecture.',
      },
      {
        title: 'Couche sémantique',
        description:
          'Regroupement par intention de recherche, cartographie des SERP, structure thématique, hiérarchie des mots-clés et architecture de contenu alignée sur la demande.',
      },
      {
        title: 'Couche d’autorité',
        description:
          'Sculpture du maillage interne, hiérarchie des pages, hubs de contenu, pages de soutien aux catégories et répartition de l’autorité selon les priorités business.',
      },
      {
        title: 'Couche performance',
        description:
          'Core Web Vitals, performance de rendu, comportement JS, optimisation LCP/CLS/INP, stratégie d’images et temps de réponse serveur.',
      },
      {
        title: 'Couche tracking',
        description:
          'Search Console, GA4, performance des pages d’atterrissage, visibilité sur les conversions, valeur assistée et mesure de la contribution organique.',
      },
      {
        title: 'Couche automatisation',
        description:
          'Apps Script, workflows n8n, pipelines de reporting SEO, alertes de positionnement, suivi de l’indexation et automatisation opérationnelle.',
      },
    ],
  },
  technical: {
    label: 'Exécution technique',
    title: 'Le SEO technique n’est pas une checklist.',
    text: 'Nous traitons le SEO technique comme une couche de performance qui influence l’efficacité du crawl, l’éligibilité des pages, le rendu, l’UX et la capacité de Google à faire confiance aux bonnes URL et à les positionner.',
    items: [
      'Audit de crawl complet avec segmentation des URL par type et par priorité',
      'Analyse de l’indexation : pages indexées vs pages utiles vs pages inutiles',
      'Nettoyage des canonicals, doublons, paginations et contenus pauvres',
      'Contrôle du rendu JavaScript et optimisation des chemins de crawl',
      'Feuille de route de correction des Core Web Vitals (LCP / CLS / INP)',
      'Mise en place des données structurées (Product, FAQ, Breadcrumb, Article)',
      'Revue de la logique du robots.txt et du sitemap',
      'Architecture de maillage interne par intention et priorité commerciale',
    ],
  },
  timeline: {
    label: 'Déroulé de la mission',
    title: 'Comment nous construisons la machine SEO.',
    text: 'Une vraie croissance SEO se construit dans l’ordre : d’abord le diagnostic, puis la structure, puis l’accélération.',
    stepLabel: 'Étape',
    items: [
      {
        title: 'Audit & diagnostic du crawl',
        description:
          'Nous auditons la santé technique, la crawlabilité, l’indexation, le rendu, la structure des mots-clés, la profondeur des contenus et les pertes de conversion organique.',
      },
      {
        title: 'Assainissement technique',
        description:
          'Nous consolidons les fondations : logique d’indexation, canonicals, schema, priorités CWV, pages inutiles et structure de crawl.',
      },
      {
        title: 'Architecture sémantique',
        description:
          'Nous cartographions les intentions de recherche, attribuons chaque mot-clé à une page, structurons correctement les pages et réduisons la cannibalisation dans les SERP.',
      },
      {
        title: 'Conception du système de contenu',
        description:
          'Nous définissons les hubs de contenu, les pages de soutien, le maillage interne et les leviers de croissance sur la longue traîne et les catégories.',
      },
      {
        title: 'Tracking & dashboards',
        description:
          'Nous relions Search Console, GA4, positions, pages d’atterrissage et conversions dans un reporting plus lisible.',
      },
      {
        title: 'Accélérer & automatiser',
        description:
          'Nous automatisons le reporting, le monitoring et les tâches SEO répétitives avec Apps Script et n8n lorsque c’est pertinent.',
      },
    ],
  },
  advanced: {
    label: 'Exécution avancée',
    title: 'Au-delà des tâches SEO de base.',
    text: 'Nous travaillons sur les couches que la plupart des équipes négligent : celles qui créent un avantage structurel en matière de positionnement.',
    items: [
      {
        title: 'Ingénierie des Core Web Vitals',
        description:
          'Nous optimisons LCP, CLS et INP grâce à la stratégie de chargement des ressources, au dimensionnement des images, au travail sur le chemin de rendu critique et au nettoyage du front-end.',
      },
      {
        title: 'Regroupement par intention de recherche',
        description:
          'Nous ne ciblons pas des mots-clés isolés. Nous regroupons les intentions, attribuons chaque sujet à une page et construisons l’autorité grâce à la structure sémantique.',
      },
      {
        title: 'SEO programmatique & évolutif',
        description:
          'Lorsque le modèle économique s’y prête, nous concevons des systèmes de génération de pages à grande échelle, alignés sur la demande réelle.',
      },
      {
        title: 'Sculpture du maillage interne',
        description:
          'Nous redistribuons l’autorité interne de manière stratégique pour soutenir les URL les plus importantes commercialement.',
      },
    ],
  },
  automation: {
    label: 'Automatisation & reporting',
    title: 'Les opérations SEO deviennent plus solides quand elles deviennent mesurables.',
    text: 'Nous pouvons automatiser le reporting SEO répétitif, suivre la performance des mots-clés et des pages, détecter les chutes et centraliser la visibilité organique dans un outil de décision plus clair.',
    items: [
      'Pipelines API Google Search Console vers Google Sheets / dashboards',
      'Google Apps Script pour un reporting SEO automatisé et des relevés de positions',
      'Workflows n8n pour les alertes d’indexation, les chutes et l’automatisation des tâches SEO',
      'Suivi des pages d’atterrissage et reporting des mouvements de mots-clés',
      'Reporting de santé technique avec une visibilité régulière sur les opérations SEO',
      'Dashboards de direction combinant trafic, positions et qualité des conversions',
    ],
    optionalLabel: 'Option avancée',
    optionalText:
      'Nous pouvons aussi connecter le reporting SEO à vos workflows opérationnels : alertes, synthèses, suivi des problèmes SEO et automatisation de l’aide à la décision.',
  },
  geo: {
    label: 'GEO SEO',
    title: 'La visibilité organique peut aussi se travailler géographiquement.',
    text: 'Le GEO SEO devient essentiel quand votre demande est régionale, locale, multilingue ou internationale. Nous structurons cette couche en tenant compte de l’intention, de la géographie et de la langue.',
    items: [
      'SEO local et ciblage des requêtes à intention géographique',
      'Stratégie SEO multi-pays et structure hreflang',
      'Clusters de contenu régionaux alignés sur les comportements de recherche locaux',
      'Architecture de pages locales pour une visibilité GEO évolutive',
      'Segmentation de la demande par ville, pays ou langue',
      'Gouvernance SEO internationale pour les marchés en croissance',
    ],
  },
  cta: {
    label: 'Audit SEO',
    title: 'Prêt à faire du SEO un vrai système de croissance ?',
    text: 'Nous pouvons auditer votre crawl, vos Core Web Vitals, votre structure sémantique, votre maillage interne, votre stratégie GEO et votre reporting, puis vous montrer où se trouve le vrai potentiel.',
    button: 'Réserver un appel stratégique',
  },
}

import type { MetaAdsDictionary } from '../../en/services/meta-ads'

export const metaAds: MetaAdsDictionary = {
  meta: {
    title: 'Meta Ads — Acquisition e-commerce avancée & architecture du signal',
    description:
      'Des systèmes Meta Ads performants pour les e-commerces : optimisation du ROAS, Pixel Meta, Conversion API, publicités catalogue, flux XML, A/B testing, attribution claire et dashboards automatisés.',
  },
  hero: {
    label: 'Meta Ads',
    titleLine1: 'Des Meta Ads conçues',
    titleLine2: 'pour une croissance rentable.',
    text: 'Nous construisons des systèmes Meta Ads avancés pour les e-commerces, en réunissant optimisation du ROAS, tests créatifs, Pixel Meta, Conversion API, architecture du catalogue, qualité du flux XML, attribution claire et dashboards automatisés dans une seule machine d’acquisition évolutive.',
    primaryCta: 'Demander un audit Meta Ads',
    secondaryCta: 'Retour aux services',
    metrics: [
      { value: '3,2×', label: 'de ROAS' },
      { value: '–42 %', label: 'de CAC' },
      { value: '99,8 %', label: 'Précision du signal' },
      { value: 'Meilleure', label: 'Qualité de correspondance' },
    ],
  },
  panel: {
    eyebrow: 'Pilotage Meta',
    title: 'Accélérer grâce à un meilleur signal',
    badge: 'Spécial e-commerce',
    performanceEyebrow: 'Vue de performance',
    performanceText: 'L’efficacité sur Meta commence par la qualité du signal.',
    performance: [
      { label: 'ROAS', value: '3,2×' },
      { label: 'CPC', value: 'En baisse' },
      { label: 'CVR', value: 'En hausse' },
    ],
    cards: [
      {
        title: 'Architecture du signal',
        meta: 'Pixel + CAPI + EMQ',
        text: 'Un signal de meilleure qualité améliore l’optimisation et stabilise la montée en puissance.',
      },
      {
        title: 'Couche catalogue',
        meta: 'DPA + flux XML',
        text: 'La structure du flux produits influence directement la qualité des DPA, le retargeting et la pertinence des produits.',
      },
    ],
    tags: ['Pixel Meta', 'CAPI', 'Publicités catalogue', 'Flux XML', 'A/B testing', 'Dashboard'],
  },
  problems: {
    label: 'Ce qui freine la performance',
    title: 'La plupart des comptes Meta n’ont pas un problème de publicité.',
    text: 'Ils ont un problème de signal, de flux, de mesure ou de méthode de test. Nous corrigeons le système complet, pas seulement les réglages des campagnes.',
    items: [
      'Pixel Meta mal installé ou incomplet',
      'CAPI mal configurée, avec une déduplication défaillante',
      'Flux catalogue de mauvaise qualité et ensembles de produits non optimisés',
      'Décisions de campagne prises sur une attribution incomplète',
      'Tests créatifs sans cadre clair',
      'Budgets augmentés avant que la couche de signal soit stable',
    ],
  },
  layers: {
    label: 'Architecture du système',
    title: 'Notre système Meta Ads se construit par couches.',
    text: 'Les campagnes ne sont qu’une couche. La performance vient de la façon dont les données, la structure du flux, les tests, la mesure et l’automatisation fonctionnent ensemble.',
    items: [
      {
        title: 'Couche signal',
        description:
          'Pixel Meta, CAPI, priorités d’événements, déduplication, qualité de correspondance, cohérence des événements navigateur et server-side.',
      },
      {
        title: 'Couche flux',
        description:
          'Structure du catalogue, qualité du flux XML, disponibilité des produits, segmentation par marge, catégorie et best-sellers.',
      },
      {
        title: 'Couche campagnes',
        description:
          'Prospection, retargeting, DPA, logique d’audiences, répartition du budget et architecture de campagnes pensée pour grandir.',
      },
      {
        title: 'Couche tests',
        description:
          'Tests d’angles créatifs, variations d’accroches, tests d’offres, tests de pages d’atterrissage et comparaison des signaux d’audience.',
      },
      {
        title: 'Couche mesure',
        description:
          'ROAS, MER, CAC, CPC, CVR, panier moyen, contribution par étape du tunnel, comparaison Meta vs GA4 vs back-office.',
      },
      {
        title: 'Couche automatisation',
        description:
          'Dashboards automatisés, alertes en cas d’anomalie, flux de reporting, automatisation opérationnelle et outils d’aide à la décision.',
      },
    ],
  },
  stack: {
    label: 'Stack avancée',
    title: 'Une exécution technique qui améliore la qualité du ROAS.',
    text: 'Nous allons au-delà de la gestion de campagnes. Nous travaillons la couche de signal, l’architecture des événements e-commerce, la logique du flux, la fiabilité de l’attribution et la visibilité automatisée sur la performance.',
    boxTitle: 'Le signal d’abord',
    boxMeta: 'Meta a besoin de meilleures données, pas d’une accélération à l’aveugle.',
    boxText:
      'Des événements de meilleure qualité améliorent l’apprentissage, un flux produits solide améliore les DPA, et une mesure plus propre améliore chaque décision d’augmentation de budget.',
    items: [
      'Pixel Meta',
      'Meta Conversion API',
      'GTM',
      'GA4',
      'GTM server-side',
      'Publicités catalogue',
      'Dynamic Product Ads',
      'Flux produits XML',
      'Event Match Quality',
      'Logique de déduplication',
      'n8n / Make',
      'Dashboards automatisés',
    ],
  },
  timeline: {
    label: 'Déroulé de la mission',
    title: 'Comment nous construisons la machine Meta Ads.',
    text: 'Les meilleurs résultats sur Meta viennent de la méthode et de la structure, pas d’optimisations au hasard.',
    stepLabel: 'Étape',
    items: [
      {
        title: 'Audit & diagnostic',
        description:
          'Nous auditons la structure du compte, le Pixel Meta, la CAPI, la qualité du flux, les trous d’attribution, les inefficacités des campagnes et les pertes de signal.',
      },
      {
        title: 'Refonte du tracking & de la CAPI',
        description:
          'Nous corrigeons l’architecture des événements, la déduplication, la qualité des paramètres, le routage server-side du signal et les bases de la qualité de correspondance.',
      },
      {
        title: 'Optimisation du catalogue & du flux',
        description:
          'Nous améliorons la propreté du flux, la catégorisation des produits, la cohérence XML, la logique des ensembles dynamiques et la préparation des produits à la diffusion.',
      },
      {
        title: 'Architecture des campagnes',
        description:
          'Nous structurons prospection, retargeting, tests créatifs, répartition du budget et une logique de campagnes alignée sur le tunnel e-commerce.',
      },
      {
        title: 'Tests & accélération',
        description:
          'Nous menons des A/B tests méthodiques sur les créations, accroches, formats, offres, audiences et pages d’atterrissage.',
      },
      {
        title: 'Dashboard & automatisation',
        description:
          'Nous centralisons les KPI, automatisons le reporting et apportons de la visibilité sur la performance Meta, GA4 et back-office e-commerce.',
      },
    ],
  },
  testing: {
    label: 'Méthode d’A/B testing',
    title: 'Un test ne s’improvise pas. Il se conçoit.',
    text: 'Nous mettons en place des systèmes de test qui isolent correctement les variables et vous apportent des enseignements clairs sur les créations, les audiences, les offres et les pages d’atterrissage.',
    items: [
      {
        title: 'Tests créatifs',
        description:
          'Accroches, offres, variations UGC, image vs vidéo, rotation des angles, suivi de la fatigue créative.',
      },
      {
        title: 'Tests d’audiences',
        description:
          'Audiences larges, lookalikes, centres d’intérêt, découpage par pays, exclusion des listes clients, logique par étape du tunnel.',
      },
      {
        title: 'Tests d’offres',
        description:
          'Stratégie promotionnelle, packs, logique d’urgence, positionnement produit d’appel vs produit phare.',
      },
      {
        title: 'Tests de pages d’atterrissage',
        description:
          'Page collection vs fiche produit, landing pages dédiées, regroupement des produits, continuité du message.',
      },
    ],
  },
  ecommerce: {
    label: 'Exécution e-commerce',
    title: 'Pensé pour la réalité du e-commerce, pas pour une gestion publicitaire générique.',
    text: 'Flux produits, publicités dynamiques, événements du tunnel, panier moyen, marge et qualité du chiffre d’affaires réel : tout compte. Nous construisons autour de votre véritable moteur e-commerce.',
    items: [
      'Campagnes de prospection construites autour des groupes de produits les plus rentables',
      'Dynamic Product Ads avec une logique de retargeting plus propre',
      'Segmentation du catalogue par catégorie, best-seller, niveau de stock ou rentabilité',
      'Cohérence du tracking ViewContent / AddToCart / InitiateCheckout / Purchase',
      'Renouvellement régulier des créations pour limiter la fatigue et stabiliser la pression sur le CPM/CPC',
      'Reporting relié au back-office pour comparer l’attribution de la plateforme aux ventes réelles',
    ],
  },
  reporting: {
    label: 'Reporting & workflows MCP',
    title: 'Une visibilité automatisée pour décider plus vite.',
    text: 'Nous pouvons centraliser la performance Meta Ads dans un outil de pilotage plus clair : dashboards, alertes, reporting automatisé et vision d’ensemble du système.',
    items: [
      'ROAS / dépenses / CPC / CPA / CVR Meta',
      'MER et efficacité d’acquisition globale',
      'Analyse du panier moyen et de la contribution au chiffre d’affaires',
      'Visibilité sur la performance du catalogue et des DPA',
      'Comparaison Meta vs GA4 vs back-office de la boutique',
      'Alertes automatiques en cas d’anomalie ou de perte de signal',
    ],
    optionalLabel: 'Option avancée',
    optionalText:
      'Nous pouvons aussi connecter le reporting Meta à des systèmes d’automatisation plus larges : notifications, détection d’anomalies, synthèses de KPI et reporting pour la direction.',
  },
  cta: {
    label: 'Audit Meta Ads',
    title: 'Prêt à faire de Meta un vrai système de croissance ?',
    text: 'Nous pouvons auditer votre couche de signal, la structure de vos campagnes, la qualité de votre catalogue, votre méthode de test et votre reporting, puis vous montrer où se trouve le vrai potentiel de performance.',
    button: 'Réserver un appel stratégique',
  },
}

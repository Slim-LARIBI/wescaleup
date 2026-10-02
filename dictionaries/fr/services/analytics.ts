import type { AnalyticsDictionary } from '../../en/services/analytics'

export const analytics: AnalyticsDictionary = {
  meta: {
    title: 'Analytics & Tracking — GTM, GA4, CAPI, server-side & architecture data',
    description:
      'Des systèmes d’analytics et de tracking avancés : GTM, GA4, Pixel Meta, CAPI, tracking server-side, conception du dataLayer, plan de marquage, attribution, filtres, dashboards et QA.',
  },
  hero: {
    label: 'Analytics & Tracking',
    titleLine1: 'Le tracking pensé',
    titleLine2: 'comme un système de données.',
    text: 'Nous construisons des systèmes de mesure avancés avec GTM, GA4, le Pixel Meta, la CAPI, le dataLayer, le tracking server-side, des filtres, une logique d’attribution et des dashboards, pour que vos décisions marketing reposent sur des données propres, fiables et prêtes pour la production.',
    primaryCta: 'Demander un audit tracking',
    secondaryCta: 'Retour aux services',
    metrics: [
      { value: '99,8 %', label: 'Précision du tracking' },
      { value: 'Plus claire', label: 'Attribution' },
      { value: 'Meilleure', label: 'Qualité de correspondance' },
      { value: 'Fiable', label: 'Base de décision' },
    ],
  },
  panel: {
    eyebrow: 'Pilotage du tracking',
    title: 'GTM. GA4. CAPI. Server-side.',
    badge: 'Stack de mesure',
    trackingEyebrow: 'Vue du tracking',
    trackingText: 'De meilleures décisions commencent par un signal de meilleure qualité.',
    tracking: [
      { label: 'GA4', value: 'Propre' },
      { label: 'CAPI', value: 'Alignée' },
      { label: 'Événements', value: 'Fiables' },
    ],
    cards: [
      {
        title: 'Server-side',
        meta: 'Addingwell / VPS / Docker',
        text: 'Un meilleur routage des événements, plus de contrôle et un signal plus propre.',
      },
      {
        title: 'Gouvernance GA4',
        meta: 'Filtres / exclusions / QA',
        text: 'Le trafic interne et les événements parasites doivent être éliminés pour que l’analyse devienne fiable.',
      },
    ],
  },
  problems: {
    label: 'Ce qui dégrade la qualité des données',
    title: 'La plupart des stacks analytics échouent avant même le reporting.',
    text: 'Une gouvernance défaillante, des événements mal conçus, un server-side mal implémenté et l’absence de QA produisent un reporting qui semble complet, mais auquel on ne peut pas se fier.',
    items: [
      'Des conteneurs GTM construits sans règles de marquage ni logique de QA',
      'GA4 configuré sans événements, conversions, filtres ni rigueur d’attribution',
      'Un Pixel Meta et une CAPI qui envoient des événements incohérents ou en double',
      'Aucun plan de marquage, aucune structure dataLayer, aucune documentation de référence',
      'Du trafic interne qui pollue l’analytics faute de filtres IP ou d’exclusions',
      'Un tracking server-side évoqué, mais jamais mis en production de façon stable',
    ],
  },
  layers: {
    label: 'Architecture du système',
    title: 'Notre système de tracking se construit par couches.',
    text: 'La mesure ne devient fiable que lorsque stratégie, modèle de données, tracking, routage server-side, gouvernance et monitoring fonctionnent ensemble.',
    items: [
      {
        title: 'Stratégie de marquage',
        description:
          'Objectifs business, cartographie du tunnel, plan de mesure, nommage des événements, définition des paramètres et gouvernance de la source de vérité.',
      },
      {
        title: 'Architecture DataLayer',
        description:
          'Des données e-commerce et d’interaction structurées, envoyées de façon cohérente à GTM, avec des variables propres et une implémentation évolutive.',
      },
      {
        title: 'Couche tracking',
        description:
          'GTM, GA4, Pixel Meta, balises Google Ads, événements personnalisés, tracking e-commerce et événements conçus pour l’attribution.',
      },
      {
        title: 'Couche server-side',
        description:
          'GTM server-side via Addingwell ou sur VPS / Docker, avec un meilleur routage du signal, une architecture respectueuse de la vie privée et des données mieux transmises.',
      },
      {
        title: 'Gouvernance analytics',
        description:
          'Filtres GA4, exclusion du trafic interne, réduction du bruit des bots, logique d’attribution, clarté des canaux et bases de reporting plus saines.',
      },
      {
        title: 'Monitoring & automatisation',
        description:
          'Workflows de QA, détection d’anomalies, dashboards, alertes, reporting automatisé et visibilité sur la santé du tracking.',
      },
    ],
  },
  technical: {
    label: 'Exécution technique',
    title: 'Un bon tracking commence par un vrai plan de marquage.',
    text: 'Nous concevons la mesure à partir de la logique business, puis nous implémentons événements, paramètres, destinations et modèles de données de manière réellement évolutive.',
    items: [
      'Cadre de mesure aligné sur les objectifs business et les étapes du tunnel',
      'Plan de marquage détaillé : noms d’événements, déclencheurs, paramètres et destinations',
      'Spécification complète du dataLayer pour l’e-commerce et les interactions personnalisées',
      'Architecture du conteneur GTM avec des conventions de nommage évolutives et une gouvernance des variables',
      'Configuration de la propriété GA4 : événements, conversions, dimensions personnalisées, paramètres d’attribution',
      'Cohérence Pixel Meta + CAPI avec logique de déduplication et qualité des paramètres',
      'Exclusion du trafic interne par IP et filtres GA4',
      'Déploiement respectueux des cookies et du consentement, orchestration des balises soucieuse de la vie privée',
    ],
  },
  serverSide: {
    label: 'Architecture server-side',
    title: 'Le tracking server-side n’est pas une configuration unique. C’est un choix d’architecture.',
    text: 'Selon votre maturité, nous pouvons déployer via une plateforme managée comme Addingwell ou construire un setup server-side sur mesure sur VPS / Docker pour plus de contrôle et de flexibilité.',
    items: [
      {
        title: 'Déploiement Addingwell',
        description:
          'Un déploiement rapide de GTM server-side sur une infrastructure managée, avec contrôle du routage et une mise en place simplifiée.',
      },
      {
        title: 'Setup sur mesure VPS / Docker',
        description:
          'Une architecture de tagging server-side entièrement maîtrisée, pour les équipes qui veulent posséder leur infrastructure, gagner en flexibilité et personnaliser le routage.',
      },
      {
        title: 'Logique de routage des événements',
        description:
          'Transmission server-side des événements vers Meta, GA4, Google Ads et d’autres destinations, avec un meilleur contrôle de la qualité du signal.',
      },
      {
        title: 'Déduplication & qualité de correspondance',
        description:
          'Identifiants d’événements, normalisation des données utilisateur et cohérence navigateur/serveur pour améliorer la qualité de la CAPI et éviter les conversions en double.',
      },
    ],
  },
  timeline: {
    label: 'Déroulé de la mission',
    title: 'Comment nous construisons la machine analytics.',
    text: 'Un tracking fiable se construit dans l’ordre : d’abord la gouvernance, ensuite l’implémentation, et le monitoring en continu.',
    stepLabel: 'Étape',
    items: [
      {
        title: 'Audit & diagnostic de la mesure',
        description:
          'Nous auditons GTM, GA4, le Pixel, la CAPI, le comportement de l’attribution, la pollution par le trafic interne, la cohérence des événements et la qualité du reporting.',
      },
      {
        title: 'Plan de marquage & modèle de données',
        description:
          'Nous définissons le cadre de mesure, la logique du tunnel, la taxonomie des événements, les paramètres et les besoins du dataLayer.',
      },
      {
        title: 'Implémentation du tracking côté client',
        description:
          'Nous reconstruisons GTM, GA4, les événements e-commerce, les interactions personnalisées, les conversions et les pixels des plateformes avec une logique plus propre.',
      },
      {
        title: 'Déploiement du tracking server-side',
        description:
          'Nous mettons en place GTM server-side via Addingwell ou sur VPS / Docker, selon l’architecture et le niveau de contrôle souhaités.',
      },
      {
        title: 'QA, filtres & assainissement de l’attribution',
        description:
          'Nous validons les événements, supprimons les doublons, appliquons les exclusions GA4 et rendons l’attribution plus lisible.',
      },
      {
        title: 'Dashboards & monitoring',
        description:
          'Nous centralisons la santé du tracking, les KPI, la qualité des événements et le reporting opérationnel dans un outil de décision plus clair.',
      },
    ],
  },
  ga4: {
    label: 'Gouvernance GA4',
    title: 'GA4 ne devient utile qu’une fois le bruit éliminé.',
    text: 'Filtres, gestion du trafic interne, paramètres d’attribution, définition des conversions et rigueur du débogage déterminent si vos rapports sont fiables.',
    items: [
      {
        title: 'Architecture de la propriété GA4',
        description:
          'Événements, conversions, dimensions personnalisées, audiences, paramètres des canaux et structure de reporting pensés pour la visibilité business.',
      },
      {
        title: 'Filtrage du trafic interne',
        description:
          'Exclusions par IP, logique par environnement et séparation nette des comportements internes / externes pour des rapports plus fiables.',
      },
      {
        title: 'Rigueur d’attribution',
        description:
          'Nous alignons la structure des événements et la logique de reporting pour que les équipes acquisition lisent plus clairement la contribution réelle.',
      },
      {
        title: 'Débogage & QA',
        description:
          'Validation en temps réel, DebugView, Tag Assistant, contrôles réseau, vérification des paramètres et contrôle qualité événement par événement.',
      },
    ],
  },
  capi: {
    label: 'Exécution Pixel & CAPI',
    title: 'La performance Meta dépend de la cohérence du signal.',
    text: 'Le tracking côté navigateur seul ne suffit plus. Nous améliorons la qualité du signal Meta grâce à un meilleur alignement Pixel + CAPI, à la parité des événements et à une logique de déduplication.',
    items: [
      'Parité des événements Pixel Meta + CAPI',
      'Déduplication via la logique event_id',
      'Normalisation des données utilisateur pour une meilleure qualité de correspondance',
      'Cohérence Purchase / AddToCart / InitiateCheckout',
      'Alignement du signal côté navigateur et côté serveur',
      'Contrôle et suivi de la qualité des données envoyées',
    ],
  },
  monitoring: {
    label: 'Monitoring & dashboards',
    title: 'Le tracking ne s’arrête pas à l’implémentation.',
    text: 'Nous construisons des dashboards et des outils de QA pour que les événements défaillants, les écarts d’attribution ou les pertes de signal ne restent pas invisibles pendant des semaines.',
    items: [
      'Dashboards de santé du tracking par plateforme et par événement',
      'Comparaison GA4 vs Meta vs back-office',
      'Suivi de la complétude et du déclenchement des événements',
      'Visibilité sur les écarts d’attribution et de conversions',
      'Alertes en cas d’événements manquants ou de perte de signal',
      'Reporting de direction sur la qualité de l’acquisition et de la mesure',
    ],
    optionalLabel: 'Option avancée',
    optionalText:
      'Nous pouvons ajouter des alertes et des workflows de QA opérationnels pour détecter plus tôt les événements manquants, les problèmes server-side ou les écarts analytics.',
  },
  cta: {
    label: 'Audit tracking',
    title: 'Prêt à reconstruire votre couche de mesure dans les règles de l’art ?',
    text: 'Nous pouvons auditer votre GTM, GA4, Pixel, CAPI, architecture server-side, plan de marquage, filtres, attribution et dashboards, puis vous montrer précisément où se trouvent les points faibles.',
    button: 'Réserver un appel stratégique',
  },
}

import type { CustomSaasDictionary } from '../../en/services/custom-saas'

export const customSaas: CustomSaasDictionary = {
  meta: {
    title: 'SaaS sur mesure — Outils internes, portails, dashboards & logiciels métier',
    description:
      'Des solutions SaaS sur mesure pour vos opérations, workflows internes, reporting, dashboards, portails, automatisations et processus métier évolutifs.',
  },
  hero: {
    label: 'SaaS sur mesure',
    titleLine1: 'Des logiciels conçus',
    titleLine2: 'autour de votre logique métier.',
    text: 'Nous développons des SaaS sur mesure, des outils internes, des portails, des logiciels de workflow, des dashboards et des plateformes métier pensés pour la façon dont vos opérations fonctionnent réellement, et non pour les limites des outils génériques.',
    primaryCta: 'Réserver un appel produit',
    secondaryCta: 'Retour aux services',
    metrics: [
      { value: 'Plus rapides', label: 'Opérations' },
      { value: 'Centralisés', label: 'Workflows métier' },
      { value: 'Évolutive', label: 'Architecture' },
      { value: 'Sur mesure', label: 'Adapté à votre activité' },
    ],
  },
  panel: {
    eyebrow: 'Pilotage produit',
    title: 'Produit. Workflow. Opérations.',
    badge: 'Sur mesure',
    systemEyebrow: 'Vue d’ensemble',
    systemText: 'Un meilleur logiciel réduit les frictions opérationnelles.',
    system: [
      { label: 'Opérations', value: 'Plus rapides' },
      { label: 'Logique', value: 'Structurée' },
      { label: 'Croissance', value: 'Prête' },
    ],
    cards: [
      {
        title: 'Modules du système',
        meta: 'Rôles · entités · actions',
        text: 'Un bon SaaS se construit autour de modules métier structurés, pas d’écrans assemblés au hasard.',
      },
      {
        title: 'Logique métier',
        meta: 'États · règles · workflow',
        text: 'La vraie valeur d’un SaaS sur mesure, c’est de traduire en logiciel la façon dont votre entreprise fonctionne réellement.',
      },
    ],
    tags: ['Dashboards', 'Portails', 'Rôles', 'Workflow', 'Base de données', 'Déploiements'],
  },
  problems: {
    label: 'Ce qui crée des frictions',
    title: 'La plupart des entreprises ont déjà des problèmes logiciels.',
    text: 'La vraie question est de savoir si ces problèmes doivent rester manuels, éparpillés et invisibles, ou devenir une véritable couche logicielle.',
    items: [
      'Les équipes gèrent leurs processus clés avec des tableurs, des emails et des outils éparpillés',
      'Les workflows internes sont trop manuels, trop lents et impossibles à faire grandir proprement',
      'Les SaaS génériques ne correspondent pas à la vraie logique métier',
      'Le reporting est déconnecté des opérations et de la prise de décision',
      'Il n’existe aucun système central pour les utilisateurs, les rôles, les actions et le suivi des processus',
      'L’entreprise subit des frictions récurrentes qui devraient devenir un logiciel',
    ],
  },
  layers: {
    label: 'Architecture du système',
    title: 'Nos SaaS sur mesure se construisent par couches.',
    text: 'Un bon logiciel n’est pas une collection d’écrans. C’est l’alliance des couches produit, processus, données, interface et infrastructure.',
    items: [
      {
        title: 'Couche produit',
        description:
          'Nous définissons le problème business, les rôles utilisateurs, les workflows, le périmètre et la bonne architecture de MVP avant de développer.',
      },
      {
        title: 'Couche processus',
        description:
          'Nous transformons la logique métier répétitive en flux logiciels : validations, routage, statuts, actions, notifications et règles opérationnelles.',
      },
      {
        title: 'Couche accès',
        description:
          'Authentification, rôles, permissions, logique d’administration, vues clients, accès des équipes internes et cloisonnement opérationnel.',
      },
      {
        title: 'Couche données',
        description:
          'Conception de base de données structurée, entités, logique relationnelle, états métier, traçabilité et données prêtes pour le reporting.',
      },
      {
        title: 'Couche interface',
        description:
          'Une UX/UI soignée pour les dashboards, les back-offices, les portails clients et les interfaces riches en processus, pensée pour la clarté et la rapidité.',
      },
      {
        title: 'Couche infrastructure',
        description:
          'Déploiement, environnements, VPS ou hébergement managé, architecture compatible Docker, mises à jour et évolutivité sur le long terme.',
      },
    ],
  },
  technical: {
    label: 'Exécution technique',
    title: 'Nous partons d’abord de la réalité de votre activité.',
    text: 'Les meilleurs logiciels naissent d’une vraie compréhension des processus, pas d’un modèle générique. Nous définissons workflows, rôles, données et architecture avant de penser aux écrans.',
    items: [
      'Cartographie des processus métier avant la conception de l’interface',
      'Périmètre du MVP fondé sur les vrais workflows, sans surcharge de fonctionnalités',
      'Conception de l’authentification, des rôles, des permissions et du contrôle d’accès',
      'Modélisation de la base de données : entités métier, statuts et changements d’état',
      'UX des dashboards et du back-office adaptée au fonctionnement réel de l’équipe',
      'Conception d’API, intégrations et points d’accroche prêts pour l’automatisation',
      'Architecture de déploiement pensée pour la production',
      'Base de code évolutive, prête pour l’itération, de nouveaux modules et la croissance du produit',
    ],
  },
  buildTypes: {
    label: 'Ce que nous construisons',
    title: 'Des produits différents, une même logique système.',
    text: 'Qu’il s’agisse d’un logiciel interne ou d’un SaaS commercialisé, l’approche reste la même : structurer le processus, puis construire le produit autour.',
    items: [
      {
        title: 'Outils internes',
        description:
          'Dashboards, panneaux d’administration, outils opérationnels, outils de type CRM, outils de reporting et interfaces de workflow pour vos équipes.',
      },
      {
        title: 'Portails clients',
        description:
          'Des portails sécurisés où vos clients se connectent, transmettent des données, suivent l’avancement, accèdent à des fichiers ou interagissent avec vos services.',
      },
      {
        title: 'Logiciels de workflow',
        description:
          'Des applications sur mesure construites autour de circuits de validation, d’états de tâches, de routage interne et de flux d’exécution opérationnelle.',
      },
      {
        title: 'SaaS pensé pour l’automatisation',
        description:
          'Des logiciels connectés dès le premier jour à l’automatisation, au reporting, aux alertes, aux API et à l’intelligence opérationnelle.',
      },
    ],
  },
  timeline: {
    label: 'Déroulé de la mission',
    title: 'Comment nous construisons votre logiciel.',
    text: 'Un bon logiciel sur mesure se construit dans l’ordre : d’abord comprendre, puis structurer, puis développer le produit.',
    stepLabel: 'Étape',
    items: [
      {
        title: 'Découverte & cartographie',
        description:
          'Nous cartographions le processus, les utilisateurs, les points de friction, les règles métier et la logique opérationnelle que le logiciel doit prendre en charge.',
      },
      {
        title: 'Périmètre produit & architecture',
        description:
          'Nous définissons le périmètre du MVP, les écrans, les modules, les entités, les rôles et l’architecture des données avant de commencer le développement.',
      },
      {
        title: 'UI / UX & parcours clés',
        description:
          'Nous concevons l’interface et l’expérience des workflows pour un produit rapide, simple à utiliser et clair au quotidien.',
      },
      {
        title: 'Développement & intégrations',
        description:
          'Nous développons le produit, connectons les API, structurons la base de données, implémentons la logique et préparons le logiciel à un usage réel.',
      },
      {
        title: 'Tests & mise en production',
        description:
          'Nous validons les parcours, les rôles, les cas particuliers et la logique métier, puis déployons le système en production.',
      },
      {
        title: 'Itération & croissance',
        description:
          'Une fois le cœur du produit en ligne, nous l’enrichissons avec de nouveaux modules, de l’automatisation, des dashboards et des améliorations continues.',
      },
    ],
  },
  advanced: {
    label: 'Exécution avancée',
    title: 'Une vision produit au-delà du développement.',
    text: 'Un SaaS sur mesure prend toute sa valeur quand son architecture soutient le modèle économique, pas seulement l’interface.',
    items: [
      {
        title: 'Conception produit centrée sur les workflows',
        description:
          'Nous concevons le logiciel autour de l’exécution métier, pas autour d’écrans génériques déconnectés des processus réels.',
      },
      {
        title: 'Alignement opérations + reporting',
        description:
          'Nous structurons les produits pour que les actions opérationnelles et les données de reporting vivent dans le même système, et non dans deux mondes séparés.',
      },
      {
        title: 'Architecture prête pour l’automatisation',
        description:
          'Nous veillons à ce que le logiciel puisse se connecter aux API, webhooks, systèmes de reporting et futures couches d’automatisation.',
      },
      {
        title: 'Architecture pensée pour la production',
        description:
          'Déploiement, environnements, montée en charge, permissions et maintenabilité sont pris en compte dès le départ.',
      },
    ],
  },
  useCases: {
    label: 'Cas d’usage',
    title: 'Conçu pour la réalité opérationnelle et les opportunités de marché.',
    text: 'Nous développons des logiciels là où il existe une friction claire, une logique métier récurrente ou une opportunité produit qui mérite d’être saisie.',
    items: [
      'Plateformes de recrutement et de gestion des talents',
      'Dashboards opérationnels internes et systèmes de reporting',
      'Portails d’onboarding client et plateformes de délivrance de services',
      'Outils sur mesure de CRM / pipeline / circuits de validation',
      'Logiciels métier qui remplacent tableurs et tâches manuelles',
      'SaaS sectoriels construits autour d’un workflow de niche ou d’un besoin de marché',
    ],
  },
  dashboards: {
    label: 'Dashboards & visibilité',
    title: 'Un bon logiciel a besoin de visibilité opérationnelle.',
    text: 'Nous concevons reporting et dashboards pour que vos équipes voient ce qui se passe, ce qui bloque, ce qui convertit et où l’exécution ralentit.',
    items: [
      'Visibilité sur l’activité des utilisateurs et le statut des workflows',
      'Dashboards de KPI connectés aux opérations',
      'Reporting par rôle, équipe, client ou processus',
      'Alertes et visibilité sur les actions en échec ou en retard',
      'Indicateurs de performance des processus métier',
      'Vision d’ensemble du système pour la direction',
    ],
    optionalLabel: 'Option avancée',
    optionalText:
      'Nous pouvons aussi connecter le SaaS à l’automatisation, au reporting, aux alertes, à l’analytics et à des outils de monitoring opérationnel au fil de la croissance du produit.',
  },
  cta: {
    label: 'Stratégie produit',
    title: 'Prêt à transformer votre workflow en logiciel ?',
    text: 'Nous pouvons cartographier votre processus, définir le bon MVP et vous montrer comment un SaaS sur mesure peut réduire les frictions, centraliser vos opérations et créer un avantage durable.',
    button: 'Réserver un appel stratégique',
  },
}

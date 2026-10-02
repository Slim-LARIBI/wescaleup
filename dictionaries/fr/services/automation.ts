import type { AutomationDictionary } from '../../en/services/automation'

export const automation: AutomationDictionary = {
  meta: {
    title: 'Automatisation marketing — n8n, Make, Apps Script & workflows opérationnels',
    description:
      'Des systèmes d’automatisation avancés avec n8n, Make, Google Apps Script, API, webhooks, routage CRM, dashboards, alertes et workflows opérationnels conçus pour grandir.',
  },
  hero: {
    label: 'Systèmes d’automatisation',
    titleLine1: 'L’automatisation pensée',
    titleLine2: 'comme un système d’exploitation.',
    text: 'Nous construisons des systèmes d’automatisation avec n8n, Make, Google Apps Script, des API, des webhooks, des flux CRM, des pipelines de reporting, des alertes et vos processus internes, pour que votre entreprise avance plus vite, avec moins de tâches manuelles et plus de maîtrise opérationnelle.',
    primaryCta: 'Demander un audit automatisation',
    secondaryCta: 'Retour aux services',
    metrics: [
      { value: '24/7', label: 'Workflows actifs' },
      { value: 'Plus rapides', label: 'Opérations des équipes' },
      { value: 'Moins', label: 'd’erreurs manuelles' },
      { value: 'Évolutifs', label: 'Processus' },
    ],
  },
  panel: {
    eyebrow: 'Pilotage de l’automatisation',
    title: 'Flux. Routage. Visibilité.',
    badge: 'n8n / Make / Apps Script',
    opsEyebrow: 'Vue des opérations',
    opsText: 'De meilleures opérations réduisent les délais et les frictions humaines.',
    ops: [
      { label: 'Routage', value: 'Instantané' },
      { label: 'Rapports', value: 'Auto' },
      { label: 'Opérations', value: 'Plus rapides' },
    ],
    cards: [
      {
        title: 'Logique des workflows',
        meta: 'Déclencheurs · conditions · actions',
        text: 'Une bonne automatisation repose sur une logique claire, pas seulement sur la connexion de deux outils.',
      },
      {
        title: 'Automatisation des opérations',
        meta: 'Alertes · CRM · reporting',
        text: 'L’automatisation doit alléger la charge opérationnelle, pas créer une complexité cachée.',
      },
    ],
  },
  problems: {
    label: 'Ce qui freine l’efficacité',
    title: 'La plupart des opérations coincent parce qu’il manque une couche de workflows.',
    text: 'Les équipes ne manquent généralement pas d’outils. Elles manquent d’orchestration, de logique de routage, de monitoring et de rigueur d’automatisation entre les systèmes qu’elles utilisent déjà.',
    items: [
      'Le routage manuel des leads ralentit la réactivité des équipes commerciales et marketing',
      'Les équipes copient-collent des données entre outils sans aucune orchestration',
      'Le reporting dépend encore d’exports manuels et de tableurs',
      'Les notifications sont réactives au lieu d’être pilotées par le système',
      'CRM, publicités, formulaires et outils internes sont déconnectés',
      'L’activité grandit, mais les processus internes ne suivent pas',
    ],
  },
  layers: {
    label: 'Architecture du système',
    title: 'Notre système d’automatisation se construit par couches.',
    text: 'Une automatisation fiable vient de l’architecture, pas seulement des connecteurs. Nous concevons ensemble les processus, la circulation des données, la logique de routage, le monitoring et la gouvernance.',
    items: [
      {
        title: 'Architecture des workflows',
        description:
          'Nous cartographions les processus de bout en bout et définissons déclencheurs, actions, logique de décision, solutions de repli et besoins de monitoring.',
      },
      {
        title: 'Couche intégrations',
        description:
          'API, webhooks, connecteurs SaaS, Google Workspace, CRM, plateformes publicitaires et systèmes internes connectés proprement.',
      },
      {
        title: 'Couche routage',
        description:
          'Attribution des leads, évolution dans le cycle de vie, enrichissement, validations internes et routage des tâches selon des règles et des événements.',
      },
      {
        title: 'Couche alertes',
        description:
          'Notifications opérationnelles, alertes d’anomalies, messages Slack / email, avertissements sur les KPI et escalade des incidents.',
      },
      {
        title: 'Couche données',
        description:
          'Synchronisation, normalisation, correspondance des champs, déduplication, cohérence des sources et fiabilité entre outils.',
      },
      {
        title: 'Couche gouvernance',
        description:
          'Gestion des erreurs, relances automatiques, règles de repli, traçabilité, journalisation et robustesse des automatisations en production.',
      },
    ],
  },
  technical: {
    label: 'Exécution technique',
    title: 'Une bonne automatisation commence par la logique du processus, pas par les outils.',
    text: 'Nous commençons par comprendre le processus, puis nous construisons l’orchestration, les intégrations, la logique des champs, les alertes et la gestion des erreurs nécessaires à un usage en production.',
    items: [
      'Conception de workflows n8n et orchestration prête pour la production',
      'Scénarios Make pour le marketing, le CRM, le reporting et les opérations internes',
      'Automatisations Google Apps Script dans Sheets / Drive / Gmail / Agenda',
      'Gestion des webhooks et exécution de processus d’API à API',
      'Routage des leads par source de formulaire, pays, produit ou priorité commerciale',
      'Synchronisation des données entre CRM, publicités, analytics et reporting',
      'Reporting automatisé des KPI et synthèses de performance programmées',
      'Gestion des erreurs, relances, journalisation et QA des workflows',
    ],
  },
  orchestration: {
    label: 'Orchestration des workflows',
    title: 'L’automatisation a de la valeur quand elle fait avancer de vrais processus business.',
    text: 'Nous construisons les workflows autour de votre réalité opérationnelle : leads, reporting, notifications, statuts CRM, validations internes et exécution des tâches.',
    items: [
      {
        title: 'Routage des leads',
        description:
          'Attribuez automatiquement les leads selon la zone géographique, l’étape du tunnel, le type de service, le score, la langue ou le responsable.',
      },
      {
        title: 'Automatisation marketing',
        description:
          'Déclenchez des actions après une soumission de formulaire, une mise à jour CRM, un événement de campagne, un achat ou un changement de segment.',
      },
      {
        title: 'Pipelines de reporting',
        description:
          'Envoyez automatiquement les KPI de plusieurs outils vers Sheets, des dashboards, des synthèses par email ou un reporting de direction.',
      },
      {
        title: 'Automatisation des opérations',
        description:
          'Réduisez les tâches répétitives dans les opérations internes, la production de contenu, les contrôles de données, les notifications et les mises à jour de statut.',
      },
    ],
  },
  timeline: {
    label: 'Déroulé de la mission',
    title: 'Comment nous construisons la machine d’automatisation.',
    text: 'Une vraie automatisation se construit dans l’ordre : d’abord l’audit, ensuite l’architecture, et le monitoring en continu.',
    stepLabel: 'Étape',
    items: [
      {
        title: 'Audit des processus',
        description:
          'Nous cartographions le workflow actuel et identifions les goulots d’étranglement, le travail en double, les délais, les déclencheurs manquants et les étapes manuelles fragiles.',
      },
      {
        title: 'Logique & architecture',
        description:
          'Nous concevons la logique d’automatisation : déclencheurs, conditions, actions, règles de routage, structure des données et gestion des cas particuliers.',
      },
      {
        title: 'Construction des intégrations',
        description:
          'Nous connectons les outils via API, webhooks, n8n, Make, Apps Script et une logique sur mesure si nécessaire.',
      },
      {
        title: 'Validation & QA',
        description:
          'Nous testons la stabilité des workflows, les solutions de repli, l’exactitude de la correspondance des données, la logique des notifications et la fiabilité opérationnelle.',
      },
      {
        title: 'Monitoring & alertes',
        description:
          'Nous ajoutons de la visibilité, de la détection d’incidents, des alertes d’anomalies et une gouvernance pour que les automatisations restent fiables dans le temps.',
      },
      {
        title: 'Accélérer & étendre',
        description:
          'Une fois les workflows stabilisés, nous étendons l’automatisation aux fonctions voisines : ventes, reporting, opérations, marketing et support.',
      },
    ],
  },
  advanced: {
    label: 'Exécution avancée',
    title: 'Des outils différents pour des rôles différents.',
    text: 'Nous choisissons la bonne couche d’automatisation selon la complexité, la flexibilité, la gouvernance et les besoins d’exécution.',
    items: [
      {
        title: 'Orchestration n8n',
        description:
          'Pour des automatisations flexibles et riches en logique, où les embranchements, la profondeur des API et le contrôle opérationnel comptent.',
      },
      {
        title: 'Scénarios Make',
        description:
          'Pour des automatisations rapides à mettre en place, où les intégrations SaaS et la lisibilité visuelle sont prioritaires.',
      },
      {
        title: 'Google Apps Script',
        description:
          'Pour les opérations sur tableurs, le reporting automatisé, les pipelines de données légers et les workflows Google Workspace.',
      },
      {
        title: 'MCP / processus multi-étapes',
        description:
          'Pour les flux orchestrés où plusieurs agents, actions, outils ou états doivent se coordonner tout au long d’un processus métier.',
      },
    ],
  },
  useCases: {
    label: 'Cas d’usage',
    title: 'Conçu pour de vraies opérations, pas pour des démos.',
    text: 'L’automatisation devient stratégique quand elle supprime les frictions de votre quotidien.',
    items: [
      'Envoyer automatiquement les leads enrichis dans le CRM et les attribuer instantanément',
      'Générer chaque matin les rapports de KPI sans export manuel',
      'Prévenir les équipes quand le CPL s’envole, que les dépenses dérivent ou que le tracking tombe',
      'Synchroniser automatiquement formulaires, étapes CRM, analytics et reporting',
      'Créer des workflows de contenu ou de tâches internes après une validation',
      'Lancer des workflows opérationnels déclenchés par un achat, un changement dans le pipeline ou une alerte business',
    ],
  },
  monitoring: {
    label: 'Monitoring & reporting',
    title: 'De bonnes automatisations ont besoin de visibilité.',
    text: 'Nous construisons des outils de reporting autour des workflows pour que les échecs, retards, erreurs de routage ou problèmes de synchronisation soient visibles avant de devenir une dette opérationnelle.',
    items: [
      'Statut d’exécution et taux de réussite des workflows',
      'Visibilité sur le routage des leads et les opérations de conversion',
      'Journaux d’erreurs et suivi des relances',
      'Statut du reporting automatisé par source',
      'Santé des synchronisations entre outils et points de défaillance',
      'Synthèses de direction et rapports de KPI programmés',
    ],
    optionalLabel: 'Option avancée',
    optionalText:
      'Nous pouvons ajouter des alertes sur les workflows, des rapports de synthèse, des contrôles de santé du routage et une gouvernance de l’automatisation pour les organisations plus matures.',
  },
  cta: {
    label: 'Audit automatisation',
    title: 'Prêt à faire de l’automatisation un avantage opérationnel ?',
    text: 'Nous pouvons auditer vos workflows, intégrations, logiques de routage, reporting et goulots d’étranglement, puis vous montrer précisément où l’automatisation aura le plus d’impact.',
    button: 'Réserver un appel stratégique',
  },
}

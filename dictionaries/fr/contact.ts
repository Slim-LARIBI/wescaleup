import type { ContactDictionary } from '../en/contact'

export const contact: ContactDictionary = {
  meta: {
    title: 'Contact — Réserver un appel stratégique',
    description:
      'Réservez un appel stratégique gratuit avec Wescaleup. Parlez-nous de vos objectifs de croissance, de votre stack actuelle et de vos priorités commerciales : nous reviendrons vers vous avec un plan d’action plus clair.',
  },
  hero: {
    label: 'Contact',
    titleLine1: 'Réservez un appel stratégique,',
    titleLine2: 'pas une simple prise de contact.',
    text: 'Parlez-nous de votre activité, de votre stack actuelle et des freins à votre croissance. Nous analysons la situation, identifions les leviers les plus rentables et revenons vers vous avec un plan d’action plus clair.',
  },
  sidebar: {
    badge: 'À quoi vous attendre',
    title: 'Un premier échange de qualité, avec une vraie valeur stratégique.',
    text: 'Ce n’est pas un formulaire de contact générique. C’est la première étape pour comprendre comment votre acquisition, votre tracking, votre SEO, votre automatisation ou vos outils logiciels doivent évoluer.',
    details: [
      {
        title: 'Appel stratégique offert',
        description:
          'Un échange ciblé de 30 minutes pour comprendre votre configuration actuelle, vos objectifs de croissance et vos principaux leviers.',
      },
      {
        title: 'Réponse rapide',
        description:
          'Nous étudions chaque demande avec attention et revenons généralement vers vous sous 24 heures ouvrées.',
      },
      {
        title: '100 % à distance',
        description:
          'Nous accompagnons des marques à l’international dans l’e-commerce, le SaaS, la génération de leads et les opérations de croissance internes.',
      },
      {
        title: 'Aucune pression commerciale',
        description:
          'L’appel est là pour apporter de la clarté. Si nous sommes le bon partenaire, nous vous le disons. Sinon, nous vous le disons aussi.',
      },
    ],
    onTheCall: 'Pendant l’appel',
    expectations: [
      'Nous passons en revue votre dispositif de croissance et votre contexte business',
      'Nous identifions en priorité les leviers les plus prometteurs',
      'Nous vous disons ce qu’il faut corriger maintenant et ce qui peut attendre',
      'Nous vous recommandons le bon format d’accompagnement, si c’est pertinent',
      'Vous repartez avec une vision plus claire, que nous travaillions ensemble ou non',
    ],
    proofTitle: 'Quelques résultats',
    proofSubtitle: 'Exemples de résultats à l’échelle du système',
    proofPoints: [
      {
        title: 'Refontes du tracking',
        metric: '99,8 %',
        description:
          'De précision du signal après assainissement de la logique d’événements, de GTM, de GA4 et de l’architecture CAPI.',
      },
      {
        title: 'Efficacité publicitaire',
        metric: '3,2×',
        description:
          'De ROAS après correction de la structure, de l’attribution et de la logique d’acquisition.',
      },
      {
        title: 'Workflows opérationnels',
        metric: '24/7',
        description:
          'Des automatisations qui tournent en continu pour le routage, le reporting et l’exécution interne.',
      },
    ],
  },
  form: {
    successTitle: 'Demande bien reçue.',
    successText:
      'Merci pour ces informations. Nous allons étudier votre projet, vérifier que nous sommes le bon partenaire et revenir vers vous sous 24 heures ouvrées avec la prochaine étape.',
    eyebrow: 'Votre projet',
    title: 'Dites-nous ce que vous cherchez à résoudre.',
    subtitle: 'Plus vous partagez de contexte, plus notre premier échange sera utile.',
    reviewedBadge: 'Étudié personnellement',
    basicDetails: 'Vos coordonnées',
    name: 'Votre nom',
    namePlaceholder: 'Marie Dupont',
    company: 'Entreprise',
    companyPlaceholder: 'Votre entreprise',
    email: 'Adresse email',
    emailPlaceholder: 'marie@entreprise.com',
    website: 'Site web',
    websitePlaceholder: 'https://votresite.com',
    qualification: 'Votre besoin',
    projectType: 'Que recherchez-vous ?',
    projectTypePlaceholder: 'Choisissez un domaine...',
    businessType: 'Type d’activité',
    businessTypePlaceholder: 'Choisissez votre activité...',
    budget: 'Budget',
    budgetPlaceholder: 'Choisissez un budget...',
    timeline: 'Délai',
    timelinePlaceholder: 'Choisissez un délai...',
    adSpend: 'Dépenses publicitaires mensuelles',
    adSpendPlaceholder: 'Choisissez un niveau...',
    currentStack: 'Stack actuelle',
    currentStackPlaceholder: 'Choisissez votre outil principal...',
    strategicContext: 'Contexte stratégique',
    goals: 'Votre objectif prioritaire',
    goalsPlaceholder:
      'Exemple : améliorer le ROAS, corriger le tracking, développer le SEO, automatiser le reporting, créer un outil interne...',
    message: 'Contexte & défis actuels',
    messagePlaceholder:
      'Décrivez votre situation actuelle, ce qui bloque, les outils que vous utilisez déjà et le résultat qui ferait de cette collaboration un succès.',
    error: 'Une erreur est survenue lors de l’envoi de votre demande. Merci de réessayer.',
    consent:
      'En envoyant ce formulaire, vous acceptez d’être recontacté au sujet de votre projet. Vos données servent uniquement à traiter votre demande. Elles ne sont jamais vendues.',
    consentPrivacyPrefix: 'Voir notre',
    consentPrivacyLink: 'politique de confidentialité',
    sending: 'Envoi en cours...',
    submit: 'Envoyer ma demande',
    options: {
      projectTypes: [
        'Meta Ads',
        'SEA / Google Ads',
        'SEO',
        'Analytics / Tracking',
        'Automatisation marketing',
        'SaaS sur mesure',
        'Système de croissance complet',
        'Je ne sais pas encore',
      ],
      businessTypes: [
        'E-commerce / DTC',
        'SaaS B2B',
        'Génération de leads',
        'Agence / Prestataire de services',
        'Marketplace / Plateforme',
        'Opérations internes / Reporting',
        'Autre',
      ],
      budgets: [
        'Moins de 2 000 €',
        '2 000 € – 5 000 €',
        '5 000 € – 10 000 €',
        '10 000 € – 20 000 €',
        'Plus de 20 000 €',
        'Selon le projet',
        'Je ne sais pas encore',
      ],
      timelines: [
        'Au plus vite — urgent',
        'Sous 2 semaines',
        'Sous 1 mois',
        '1 à 3 mois',
        'J’explore les options',
      ],
      adSpendRanges: [
        'Pas encore de publicité',
        'Moins de 5 000 €/mois',
        '5 000 € – 15 000 €/mois',
        '15 000 € – 50 000 €/mois',
        'Plus de 50 000 €/mois',
        'Non concerné',
      ],
      currentStacks: [
        'Shopify',
        'WooCommerce',
        'GA4',
        'GTM',
        'Meta Ads',
        'Google Ads',
        'Klaviyo',
        'HubSpot',
        'n8n / Make',
        'Stack sur mesure',
      ],
    },
  },
}

export const contact = {
  meta: {
    title: 'Contact — Book a Strategy Call',
    description:
      'Book a free strategy call with Wescaleup. Tell us about your growth goals, current stack, and commercial priorities — and we will come back with a clearer path forward.',
  },
  hero: {
    label: 'Contact',
    titleLine1: 'Book a strategy call,',
    titleLine2: 'not just a contact request.',
    text: 'Tell us about your business, your current stack, and the growth bottlenecks you are facing. We will review the situation, identify the highest-leverage opportunities, and come back with a clearer path forward.',
  },
  sidebar: {
    badge: 'What to expect',
    title: 'A premium first conversation, with real strategic value.',
    text: 'This is not a generic discovery form. It is the first step in understanding how your acquisition, tracking, SEO, automation, or software layer should evolve.',
    details: [
      {
        title: 'Free strategy call',
        description:
          'A focused 30-minute session to understand your current setup, growth goals, and where the biggest leverage sits.',
      },
      {
        title: 'Fast response',
        description:
          'We review every inquiry carefully and usually come back within 24 business hours.',
      },
      {
        title: 'Remote-first',
        description:
          'We work with brands internationally across ecommerce, SaaS, lead generation, and internal growth operations.',
      },
      {
        title: 'No hard sell',
        description:
          'The call is designed to create clarity. If there is a fit, we tell you. If not, we tell you that too.',
      },
    ],
    onTheCall: 'On the call',
    expectations: [
      'We review your current growth setup and business context',
      'We identify the most likely leverage points first',
      'We tell you what should be fixed now vs later',
      'We recommend the right engagement path, if relevant',
      'You leave with more clarity, whether we work together or not',
    ],
    proofTitle: 'Selected proof points',
    proofSubtitle: 'Examples of system-level outcomes',
    proofPoints: [
      {
        title: 'Tracking rebuilds',
        metric: '99.8%',
        description: 'Signal accuracy after cleaning event logic, GTM, GA4, and CAPI architecture.',
      },
      {
        title: 'Paid media efficiency',
        metric: '3.2×',
        description: 'ROAS lift after fixing structure, attribution clarity, and acquisition logic.',
      },
      {
        title: 'Operational workflows',
        metric: '24/7',
        description: 'Automations running continuously across routing, reporting, and internal execution.',
      },
    ],
  },
  form: {
    successTitle: 'Strategy request received.',
    successText:
      'Thank you for the context. We will review your project, assess the fit, and come back to you within 24 business hours with the next step.',
    eyebrow: 'Strategy intake',
    title: 'Tell us what you are solving for.',
    subtitle: 'The more context you share, the more useful the first conversation becomes.',
    reviewedBadge: 'Reviewed manually',
    basicDetails: 'Basic details',
    name: 'Your name',
    namePlaceholder: 'Jane Smith',
    company: 'Company',
    companyPlaceholder: 'Acme Inc.',
    email: 'Email address',
    emailPlaceholder: 'jane@company.com',
    website: 'Website URL',
    websitePlaceholder: 'https://yoursite.com',
    qualification: 'Qualification',
    projectType: 'What are you looking for?',
    projectTypePlaceholder: 'Select a service area...',
    businessType: 'Business type',
    businessTypePlaceholder: 'Select business type...',
    budget: 'Budget range',
    budgetPlaceholder: 'Select budget...',
    timeline: 'Timeline',
    timelinePlaceholder: 'Select timeline...',
    adSpend: 'Monthly ad spend',
    adSpendPlaceholder: 'Select spend level...',
    currentStack: 'Current stack',
    currentStackPlaceholder: 'Select main stack...',
    strategicContext: 'Strategic context',
    goals: 'Biggest objective right now',
    goalsPlaceholder:
      'Example: improve ROAS, fix tracking, scale SEO, automate reporting, build internal tool...',
    message: 'Context & current challenges',
    messagePlaceholder:
      'Tell us what is happening today, what feels blocked, what tools you already use, and what outcome would make this engagement a success.',
    error: 'Something went wrong while sending your request. Please try again.',
    consent:
      'By submitting this form, you agree to be contacted about your project. Your data is only used to handle your request and is never sold.',
    consentPrivacyPrefix: 'See our',
    consentPrivacyLink: 'privacy policy',
    sending: 'Sending...',
    submit: 'Send strategy request',
    /** Labels shown in the dropdowns, in the same order as the values sent to the API */
    options: {
      projectTypes: [
        'Meta Ads',
        'SEA / Google Ads',
        'SEO',
        'Analytics / Tracking',
        'Marketing Automation',
        'Custom SaaS',
        'Full Growth System',
        'Not sure yet',
      ],
      businessTypes: [
        'E-commerce / DTC',
        'B2B SaaS',
        'Lead Generation',
        'Agency / Service Business',
        'Marketplace / Platform',
        'Internal Ops / Reporting',
        'Other',
      ],
      budgets: [
        'Under €2,000',
        '€2,000 – €5,000',
        '€5,000 – €10,000',
        '€10,000 – €20,000',
        '€20,000+',
        'Project-based',
        'Not sure yet',
      ],
      timelines: [
        'ASAP — urgent',
        'Within 2 weeks',
        'Within 1 month',
        '1–3 months',
        'Exploring options',
      ],
      adSpendRanges: [
        'Not running ads yet',
        'Under €5,000/mo',
        '€5,000 – €15,000/mo',
        '€15,000 – €50,000/mo',
        '€50,000+/mo',
        'Not relevant',
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
        'Custom stack',
      ],
    },
  },
}

export type ContactDictionary = typeof contact

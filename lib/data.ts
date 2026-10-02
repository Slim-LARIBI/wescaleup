export type ServiceId =
  | 'seo'
  | 'google-ads'
  | 'meta-ads'
  | 'analytics'
  | 'tracking'
  | 'server-side'
  | 'automation'
  | 'email'
  | 'dashboards'
  | 'cro'

export interface Service {
  id: ServiceId
  href: string
  title: string
  shortDescription: string
  description: string
  outcome: string
  technicalScope: string[]
  deliverables: string[]
  icon: string
  color: 'blue' | 'orange' | 'violet' | 'emerald' | 'rose' | 'amber' | 'cyan' | 'indigo' | 'teal' | 'fuchsia'
}

export const services: Service[] = [
  {
    id: 'seo',
    href: '/services/seo',
    title: 'Search Growth & Technical SEO',
    shortDescription: 'Turn organic search into a durable growth channel through technical clarity, stronger architecture, and content built to rank and convert.',
    description:
      'We do not treat SEO as a checklist. We build search foundations that support visibility, acquisition, and long-term performance. From technical health and crawlability to site architecture and content structure, every action is designed to strengthen discoverability and business impact.',
    outcome:
      'A stronger organic growth engine, better search visibility, and a site structure designed to support compounding acquisition over time.',
    technicalScope: [
      'Technical SEO audit & opportunity mapping',
      'Core Web Vitals optimization',
      'Crawl budget & indexation strategy',
      'On-page optimization & content structure',
      'E-commerce SEO (Shopify, WooCommerce)',
      'Site architecture & internal linking',
      'Schema markup implementation',
      'International SEO & hreflang',
    ],
    deliverables: [
      'Full technical SEO audit report',
      'Prioritized fix roadmap',
      'On-page optimization templates',
      'Keyword strategy document',
      'Monthly performance report',
    ],
    icon: '🔍',
    color: 'blue',
  },
  {
    id: 'google-ads',
    href: '/services/sea',
    title: 'Google Ads Performance',
    shortDescription: 'Build a more efficient acquisition engine with campaigns structured for conversion quality, budget control, and scalable returns.',
    description:
      'We build Google Ads systems with performance and measurement at the core. From Search and Performance Max to remarketing and landing page alignment, we focus on what actually improves efficiency: clean structure, reliable conversion tracking, and disciplined optimization.',
    outcome:
      'A better-performing Google Ads setup with stronger visibility, cleaner conversion signals, and more scalable acquisition economics.',
    technicalScope: [
      'Account structure & campaign architecture',
      'Search, Shopping & Performance Max',
      'Remarketing & audience layering',
      'Conversion tracking implementation',
      'Negative keyword strategy',
      'Landing page alignment & CRO',
      'Budget efficiency & bid strategy',
      'Competitor analysis & keyword research',
    ],
    deliverables: [
      'Full account audit & restructure',
      'Campaign build-out documentation',
      'Conversion tracking QA report',
      'Monthly performance dashboard',
      'Optimization log & weekly insights',
    ],
    icon: '🎯',
    color: 'orange',
  },
  {
    id: 'meta-ads',
    href: '/services/meta-ads',
    title: 'Paid Social Growth',
    shortDescription: 'Scale paid social with stronger signal quality, smarter audience logic, and campaigns built for acquisition and profitable growth.',
    description:
      'Paid social performance depends on more than creative alone. We build Meta Ads systems around signal quality, audience structure, retargeting logic, and conversion-focused optimization. The result is a more reliable growth channel with better conditions for scaling.',
    outcome:
      'Stronger paid social performance, better attribution quality, and a Meta setup designed to scale with more confidence.',
    technicalScope: [
      'Campaign architecture & audience strategy',
      'Prospecting & retargeting flows',
      'Catalog & dynamic product ads',
      'Meta Pixel + Conversion API setup',
      'Creative testing framework',
      'Budget scaling strategy',
      'Attribution analysis & optimization',
    ],
    deliverables: [
      'Account structure documentation',
      'Pixel + CAPI implementation report',
      'Creative testing playbook',
      'Audience strategy map',
      'Monthly reporting dashboard',
    ],
    icon: '📱',
    color: 'violet',
  },
  {
    id: 'analytics',
    href: '/services/analytics',
    title: 'Analytics & Decision Intelligence',
    shortDescription: 'Transform fragmented reporting into a reliable analytics foundation that supports faster, sharper marketing and business decisions.',
    description:
      'Most analytics setups produce noise instead of clarity. We create measurement systems that reflect real user behavior, meaningful conversion points, and business-critical outcomes. With a cleaner GA4 setup and stronger reporting logic, your team can finally act with confidence.',
    outcome:
      'Reliable performance visibility, better decision-making, and analytics that become useful to leadership, marketing, and growth teams alike.',
    technicalScope: [
      'GA4 property setup & configuration',
      'Event strategy & tracking plan',
      'Conversion & goal setup',
      'Funnel analysis & reporting',
      'Custom dimensions & metrics',
      'Google Signals & cross-device tracking',
      'Data integrity audits',
    ],
    deliverables: [
      'GA4 audit & setup documentation',
      'Event tracking plan',
      'Conversion measurement report',
      'Looker Studio dashboard',
      'Analytics maintenance guide',
    ],
    icon: '📊',
    color: 'emerald',
  },
  {
    id: 'tracking',
    href: '/services/analytics',
    title: 'Tracking Architecture & GTM',
    shortDescription: 'Build a clean measurement layer with GTM, DataLayer strategy, and event tracking that supports every growth channel.',
    description:
      'When tracking is messy, every decision downstream becomes weaker. We design and implement robust tracking architecture through Google Tag Manager, structured DataLayer planning, and quality assurance across your key user journeys. This creates a foundation your campaigns and dashboards can actually rely on.',
    outcome:
      'A more trustworthy measurement infrastructure with clean event collection, better platform integrations, and less guesswork across your marketing stack.',
    technicalScope: [
      'Google Tag Manager audit & rebuild',
      'DataLayer architecture & documentation',
      'E-commerce event tracking',
      'Custom event & interaction tracking',
      'Meta Pixel implementation',
      'LinkedIn Insight Tag & other pixels',
      'Tracking QA & debugging',
    ],
    deliverables: [
      'GTM container documentation',
      'DataLayer specification',
      'Tracking QA test report',
      'Tag inventory & audit',
      'Implementation guide for developers',
    ],
    icon: '🏷️',
    color: 'amber',
  },
  {
    id: 'server-side',
    href: '/services/analytics',
    title: 'Server-Side Measurement',
    shortDescription: 'Strengthen signal resilience, improve data quality, and future-proof measurement with a more reliable server-side setup.',
    description:
      'Client-side tracking is increasingly fragile. Between browser restrictions, consent friction, and signal loss, many brands are operating with incomplete data. We implement server-side measurement systems that improve reliability, strengthen match quality, and support more resilient performance tracking.',
    outcome:
      'Higher-quality data, stronger event delivery, and a measurement infrastructure that performs better in today’s privacy-first environment.',
    technicalScope: [
      'Server-Side GTM deployment & configuration',
      'Meta Conversion API integration',
      'Google Ads Enhanced Conversions',
      'First-party data routing',
      'Signal deduplication strategy',
      'Privacy-aware setup (GDPR-aligned)',
      'Event match quality optimization',
    ],
    deliverables: [
      'Server container setup documentation',
      'CAPI integration report',
      'Event match quality audit',
      'Data flow architecture diagram',
      'QA & validation report',
    ],
    icon: '⚡',
    color: 'cyan',
  },
  {
    id: 'automation',
    href: '/services/automation',
    title: 'Automation Systems',
    shortDescription: 'Design smarter workflows that reduce manual work, improve speed, and connect your marketing stack into one scalable operating system.',
    description:
      'We build automation systems that remove bottlenecks across lead handling, reporting, internal alerts, CRM routing, and tool-to-tool synchronization. Using n8n, Make, Google Apps Script, and API-based logic, we help teams move faster with cleaner processes and fewer operational gaps.',
    outcome:
      'Less manual friction, faster execution, and scalable workflows that support growth without increasing complexity at the same pace.',
    technicalScope: [
      'n8n & Make workflow design & build',
      'CRM automation & lead routing',
      'Marketing stack integration',
      'Webhook & API connections',
      'Alert & notification systems',
      'Google Workspace automation',
      'Data sync & cleanup workflows',
    ],
    deliverables: [
      'Automation architecture map',
      'Workflow documentation & runbooks',
      'Integration credentials & setup guide',
      'Testing & QA report',
      'Maintenance & error handling guide',
    ],
    icon: '🤖',
    color: 'indigo',
  },
  {
    id: 'email',
    href: '/services/automation',
    title: 'Lifecycle & Email Automation',
    shortDescription: 'Create automated email journeys that improve conversion, retention, and customer value across the full lifecycle.',
    description:
      'Email works best when it is connected to behavior, segmentation, and timing. We design lifecycle systems that welcome, convert, retain, and reactivate users through structured flows tailored to business goals. The focus is not just sending emails, but building a channel that supports growth continuously.',
    outcome:
      'A stronger retention engine, more email-driven revenue, and lifecycle journeys that run intelligently in the background.',
    technicalScope: [
      'Lifecycle flow design & mapping',
      'Welcome & onboarding sequences',
      'Abandoned cart & browse abandonment',
      'Retention & loyalty flows',
      'Re-engagement & reactivation',
      'Segmentation strategy & list hygiene',
      'Email performance analytics',
    ],
    deliverables: [
      'Email flow architecture document',
      'Segmentation strategy',
      'Copywriting briefs per flow',
      'Implementation in Klaviyo/Brevo/other',
      'Performance baseline & optimization plan',
    ],
    icon: '✉️',
    color: 'teal',
  },
  {
    id: 'dashboards',
    href: '/services/analytics',
    title: 'Reporting & Growth Visibility',
    shortDescription: 'Bring your KPIs into one clear reporting system so teams can act faster with less noise and more confidence.',
    description:
      'We build reporting systems that replace scattered spreadsheets and disconnected dashboards. By centralizing the metrics that matter across acquisition, tracking, and business performance, we give teams a clearer operational view of what is working, what is changing, and where to act next.',
    outcome:
      'A stronger decision layer for your business, with unified visibility across channels, cleaner reporting, and better stakeholder alignment.',
    technicalScope: [
      'Looker Studio dashboard design & build',
      'Multi-source data connectors (GA4, Ads, etc.)',
      'KPI definition & business logic',
      'Executive & operational dashboard variants',
      'Acquisition & funnel reporting',
      'Channel attribution reporting',
      'Automated report distribution',
    ],
    deliverables: [
      'Dashboard design mockup',
      'Live Looker Studio dashboard',
      'Data source connection documentation',
      'KPI glossary & metric definitions',
      'Walkthrough & training session',
    ],
    icon: '📈',
    color: 'rose',
  },
  {
    id: 'cro',
    href: '/services',
    title: 'Conversion Optimization',
    shortDescription: 'Improve the performance of your existing traffic by reducing friction and strengthening the paths that drive conversion.',
    description:
      'Traffic is expensive, and weak conversion paths quietly destroy efficiency. We analyze your journeys, identify friction points, and improve the experience through structured optimizations across landing pages, forms, checkout paths, and messaging. The goal is simple: help more of your visitors become customers.',
    outcome:
      'Higher conversion rates, better marketing efficiency, and a more effective funnel across acquisition and retention touchpoints.',
    technicalScope: [
      'Conversion path & funnel audit',
      'Landing page design & optimization',
      'Form & checkout optimization',
      'Heatmap & session recording analysis',
      'A/B test design & implementation',
      'Mobile UX review',
      'CTA & copy optimization',
    ],
    deliverables: [
      'CRO audit report with prioritized recommendations',
      'Landing page redesign',
      'A/B test results documentation',
      'Friction reduction roadmap',
      'Conversion baseline & uplift report',
    ],
    icon: '⚙️',
    color: 'fuchsia',
  },
]

export const processSteps = [
  {
    number: '01',
    title: 'Audit & Discovery',
    description:
      'We start with a deep audit of your current setup — tracking, analytics, campaigns, and funnel. No assumptions. Just clear findings and a shared understanding of where you are.',
  },
  {
    number: '02',
    title: 'Strategy & Roadmap',
    description:
      'Based on the audit, we define a prioritized growth roadmap. Clear objectives, measurable targets, and a sequenced plan built around your business goals.',
  },
  {
    number: '03',
    title: 'Implementation',
    description:
      'We execute with precision — tracking infrastructure, campaign builds, automation workflows, analytics foundations. Clean, documented, and built to last.',
  },
  {
    number: '04',
    title: 'Optimize & Improve',
    description:
      'Growth is not a one-time event. We monitor, test, and optimize continuously — using real data to improve performance across every channel and system.',
  },
  {
    number: '05',
    title: 'Scale',
    description:
      'Once systems are performing and reliable, we scale — more budget, broader reach, expanded automation, and compounding results across your acquisition channels.',
  },
]

export const outcomes = [
  {
    title: 'Cleaner Attribution',
    description:
      'Know exactly which channels are driving conversions — with accurate, first-party data flowing correctly across all platforms.',
    icon: '🎯',
  },
  {
    title: 'Stronger Campaign Performance',
    description:
      'Better data means better optimization. Campaigns improve faster when the measurement is reliable and the audience signals are clean.',
    icon: '📈',
  },
  {
    title: 'Automated Marketing Workflows',
    description:
      'Remove manual tasks from your team\'s plate. Lead routing, email flows, data syncs, and alerts running automatically — 24/7.',
    icon: '⚡',
  },
  {
    title: 'Better Reporting Clarity',
    description:
      'Replace scattered spreadsheets with unified dashboards that give your team a single source of truth for all performance data.',
    icon: '📊',
  },
  {
    title: 'Scalable Acquisition Systems',
    description:
      'Build a growth engine that can be turned up. With the right systems in place, scaling ad spend or traffic channels is predictable.',
    icon: '🚀',
  },
  {
    title: 'Reduced Acquisition Costs',
    description:
      'Better tracking, smarter audiences, and continuous CRO combine to lower your CPL and CAC across all performance channels.',
    icon: '💰',
  },
]

export const faqs = [
  {
    question: 'What makes Wescaleup different from a typical marketing agency?',
    answer:
      'Most agencies focus on a single service. We combine performance marketing, advanced tracking, automation, and analytics into a unified growth system. The result is that every part of your marketing stack works together — and your decisions are backed by reliable data.',
  },
  {
    question: 'Do you work with e-commerce brands or lead generation businesses?',
    answer:
      'Both. We have experience across e-commerce (Shopify, WooCommerce, custom stores) and B2B / lead generation businesses. Our tracking and analytics work is platform-agnostic, and our campaigns are tailored to your specific conversion model.',
  },
  {
    question: 'How important is tracking before running paid ads?',
    answer:
      'Tracking is the foundation. Running ad campaigns without reliable measurement is like optimizing blind — you cannot tell what is working. We often fix tracking infrastructure before or alongside campaign work to ensure every euro spent is measurable.',
  },
  {
    question: 'What tools and platforms do you work with?',
    answer:
      'Google Ads, Meta Ads, Google Tag Manager, GA4, Looker Studio, n8n, Make, Klaviyo, Brevo, HubSpot, Shopify, WooCommerce, Server-Side GTM, Meta Conversion API, and more. We are tool-agnostic and will work with what is already in your stack.',
  },
  {
    question: 'How long does it take to see results?',
    answer:
      'It depends on the service. Tracking and analytics improvements can show impact within weeks. SEO typically takes 3–6 months to gain momentum. Paid media campaigns can start generating data and improving within the first month. We are transparent about timelines from day one.',
  },
  {
    question: 'Do you offer monthly retainers or project-based work?',
    answer:
      'Both. Some clients work with us on project basis (e.g. tracking implementation, dashboard build). Others engage on ongoing retainers for campaign management, analytics, and continuous optimization. We will recommend the right model for your situation on the discovery call.',
  },
]

export const whyPoints = [
  {
    title: 'Systems Over Tactics',
    description:
      'We build durable growth engines — not short-term hacks. Every engagement is designed to deliver compounding value over time.',
    icon: '🏗️',
  },
  {
    title: 'Data Quality First',
    description:
      'Decisions are only as good as the data behind them. We prioritize tracking accuracy and measurement integrity in everything we do.',
    icon: '🔬',
  },
  {
    title: 'Cross-Channel Thinking',
    description:
      'We connect SEO, paid media, analytics, and automation into a coherent system — not isolated silos that pull in different directions.',
    icon: '🔗',
  },
  {
    title: 'Technical Depth',
    description:
      'We go deeper than most agencies. Server-side tracking, DataLayer architecture, automation pipelines — we thrive in technical complexity.',
    icon: '⚙️',
  },
  {
    title: 'Business-Oriented Execution',
    description:
      'Every metric we track ties back to business outcomes: revenue, CAC, ROAS, retention. We care about what actually moves the needle for you.',
    icon: '💼',
  },
  {
    title: 'Transparent Partnership',
    description:
      'Clear reporting, honest communication, and documentation you actually own. No black boxes — you understand what we are doing and why.',
    icon: '🤝',
  },
]
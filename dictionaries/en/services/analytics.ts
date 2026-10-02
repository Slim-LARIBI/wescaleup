export const analytics = {
  meta: {
    title: 'Analytics & Tracking — GTM, GA4, CAPI, Server-Side & Data Architecture',
    description:
      'Advanced web analytics and tracking systems: GTM, GA4, Meta Pixel, CAPI, server-side tracking, dataLayer design, tagging plan, attribution, filters, dashboards, and QA.',
  },
  hero: {
    label: 'Analytics & Tracking',
    titleLine1: 'Tracking engineered',
    titleLine2: 'as a data system.',
    text: 'We build advanced measurement systems across GTM, GA4, Meta Pixel, CAPI, dataLayer, server-side tracking, filters, attribution logic, and dashboards — so your marketing decisions are based on clean, trusted, production-grade data.',
    primaryCta: 'Book a tracking audit',
    secondaryCta: 'Back to services',
    metrics: [
      { value: '99.8%', label: 'Tracking accuracy' },
      { value: 'Cleaner', label: 'Attribution clarity' },
      { value: 'Higher', label: 'Event match quality' },
      { value: 'Reliable', label: 'Decision layer' },
    ],
  },
  panel: {
    eyebrow: 'Tracking command layer',
    title: 'GTM. GA4. CAPI. Server-side.',
    badge: 'Measurement stack',
    trackingEyebrow: 'Core tracking view',
    trackingText: 'Better decisions start with better signal quality.',
    tracking: [
      { label: 'GA4', value: 'Clean' },
      { label: 'CAPI', value: 'Aligned' },
      { label: 'Events', value: 'Reliable' },
    ],
    cards: [
      {
        title: 'Server-Side',
        meta: 'Addingwell / VPS / Docker',
        text: 'Better event routing, stronger control, and cleaner signal delivery.',
      },
      {
        title: 'GA4 Governance',
        meta: 'Filters / exclusions / QA',
        text: 'Internal traffic and event pollution must be removed before analysis becomes trustworthy.',
      },
    ],
  },
  problems: {
    label: 'What kills data quality',
    title: 'Most analytics stacks fail before reporting even starts.',
    text: 'Broken governance, weak event design, bad server-side implementation, and missing QA create reporting that looks complete but cannot be trusted.',
    items: [
      'GTM containers built without tagging governance or QA logic',
      'GA4 configured without proper events, conversions, filters, or attribution discipline',
      'Meta Pixel and CAPI sending inconsistent or duplicated events',
      'No tagging plan, no dataLayer structure, and no source-of-truth documentation',
      'Internal traffic polluting analytics because IP filters or exclusions are missing',
      'Server-side tracking discussed, but never implemented in a stable production setup',
    ],
  },
  layers: {
    label: 'System architecture',
    title: 'Our tracking system is built in layers.',
    text: 'Measurement becomes reliable only when strategy, data model, tracking, server-side routing, governance, and monitoring work together.',
    items: [
      {
        title: 'Tagging Strategy',
        description:
          'Business goals, funnel mapping, measurement plan, event naming, parameter definitions, and source-of-truth governance.',
      },
      {
        title: 'DataLayer Architecture',
        description:
          'Structured ecommerce and interaction data pushed consistently to GTM with clean variables and scalable implementation logic.',
      },
      {
        title: 'Tracking Layer',
        description:
          'GTM, GA4, Meta Pixel, Google Ads tags, custom events, ecommerce tracking, and attribution-ready event design.',
      },
      {
        title: 'Server-Side Layer',
        description:
          'Server-Side GTM via Addingwell or custom VPS / Docker setups with stronger signal routing, privacy-aware architecture, and cleaner data delivery.',
      },
      {
        title: 'Analytics Governance',
        description:
          'GA4 filters, internal traffic exclusion, bot noise reduction, attribution logic, channel clarity, and cleaner reporting foundations.',
      },
      {
        title: 'Monitoring & Automation',
        description:
          'QA workflows, anomaly checks, dashboards, alerting, reporting automation, and tracking health visibility.',
      },
    ],
  },
  technical: {
    label: 'Technical execution',
    title: 'Good tracking starts with a real tagging plan.',
    text: 'We design measurement around business logic first, then implement events, parameters, destinations, and data models in a way that can actually scale.',
    items: [
      'Measurement framework aligned with business goals and funnel stages',
      'Detailed tagging plan with event names, triggers, parameters, and destinations',
      'Full dataLayer specification for ecommerce and custom user interactions',
      'GTM container architecture with scalable naming conventions and variable governance',
      'GA4 property setup: events, conversions, custom dimensions, attribution settings',
      'Meta Pixel + CAPI consistency with deduplication logic and parameter quality',
      'Internal traffic exclusion using IP logic and GA4 filters',
      'Cookie / consent-aware deployment and privacy-conscious tag orchestration',
    ],
  },
  serverSide: {
    label: 'Server-side architecture',
    title: 'Server-side tracking is not one setup. It is an architecture choice.',
    text: 'Depending on your maturity, we can deploy through managed platforms like Addingwell or build a custom server-side setup on VPS / Docker for more control and flexibility.',
    items: [
      {
        title: 'Addingwell deployment',
        description:
          'Fast server-side GTM deployment with managed infrastructure, routing control, and lower implementation friction.',
      },
      {
        title: 'Custom VPS / Docker setup',
        description:
          'Full-control server-side tagging architecture for teams needing infrastructure ownership, flexibility, and custom routing logic.',
      },
      {
        title: 'Event routing logic',
        description:
          'Server-side event forwarding to Meta, GA4, Google Ads, and other endpoints with stronger control over signal quality.',
      },
      {
        title: 'Deduplication & match quality',
        description:
          'Event IDs, user data normalization, and browser/server consistency to improve CAPI quality and reduce duplicate conversions.',
      },
    ],
  },
  timeline: {
    label: 'Execution timeline',
    title: 'How we build the analytics machine.',
    text: 'Reliable tracking is built in sequence — governance first, implementation second, monitoring always.',
    stepLabel: 'Step',
    items: [
      {
        title: 'Audit & measurement diagnosis',
        description:
          'We audit GTM, GA4, Pixel, CAPI, attribution behavior, internal traffic pollution, event consistency, and reporting quality.',
      },
      {
        title: 'Tagging plan & data model',
        description:
          'We define the measurement framework, funnel logic, event taxonomy, parameters, and dataLayer requirements.',
      },
      {
        title: 'Client-side tracking implementation',
        description:
          'We rebuild GTM, GA4, ecommerce events, custom interactions, conversions, and platform pixels with cleaner logic.',
      },
      {
        title: 'Server-side tracking deployment',
        description:
          'We implement server-side GTM via Addingwell or custom VPS / Docker depending on the architecture and control needed.',
      },
      {
        title: 'QA, filters & attribution cleanup',
        description:
          'We validate events, remove duplicate behavior, apply GA4 exclusions, and improve attribution readability.',
      },
      {
        title: 'Dashboard & monitoring layer',
        description:
          'We centralize tracking health, KPI visibility, event quality, and operational reporting into one cleaner decision layer.',
      },
    ],
  },
  ga4: {
    label: 'GA4 governance',
    title: 'GA4 only becomes useful when noise is removed.',
    text: 'Filters, internal traffic handling, attribution settings, conversion definitions, and debugging discipline all affect whether your reports can be trusted.',
    items: [
      {
        title: 'GA4 property architecture',
        description:
          'Events, conversions, custom dimensions, audiences, channel settings, and reporting structure designed for business visibility.',
      },
      {
        title: 'Internal traffic filtering',
        description:
          'IP-based exclusions, environment logic, and clean separation of internal / external behavior to improve reporting trust.',
      },
      {
        title: 'Attribution discipline',
        description:
          'We align event structure and reporting logic so acquisition teams can read real contribution more clearly.',
      },
      {
        title: 'Debugging & QA',
        description:
          'Realtime validation, DebugView, tag assistant flows, network checks, parameter verification, and event-level quality control.',
      },
    ],
  },
  capi: {
    label: 'Pixel & CAPI execution',
    title: 'Meta performance depends on signal consistency.',
    text: 'Browser-only tracking is no longer enough. We improve Meta signal quality through stronger Pixel + CAPI alignment, event parity, and deduplication logic.',
    items: [
      'Meta Pixel + CAPI event parity',
      'Deduplication using event_id logic',
      'User data normalization for stronger match quality',
      'Purchase / AddToCart / InitiateCheckout consistency',
      'Browser-side + server-side signal alignment',
      'Event payload quality checks and monitoring',
    ],
  },
  monitoring: {
    label: 'Monitoring & dashboards',
    title: 'Tracking is not finished when implementation is done.',
    text: 'We build dashboards and QA visibility layers so event failures, attribution discrepancies, or signal drops do not stay hidden for weeks.',
    items: [
      'Tracking health dashboards by platform and event',
      'GA4 vs Meta vs backend comparison views',
      'Event completeness and firing quality monitoring',
      'Attribution and conversion discrepancy visibility',
      'Anomaly alerts for missing events or signal drops',
      'Executive reporting for acquisition and measurement quality',
    ],
    optionalLabel: 'Optional advanced layer',
    optionalText:
      'We can add alerting logic and operational QA workflows to catch missing events, server-side issues, or analytics discrepancies earlier.',
  },
  cta: {
    label: 'Tracking Audit',
    title: 'Ready to rebuild your measurement layer properly?',
    text: 'We can audit your GTM, GA4, Pixel, CAPI, server-side architecture, tagging plan, filters, attribution, and dashboard logic — then show you exactly where the weak points are.',
    button: 'Book a strategy call',
  },
}

export type AnalyticsDictionary = typeof analytics

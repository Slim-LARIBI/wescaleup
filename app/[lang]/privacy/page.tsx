import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { LegalPage, type LegalSection } from '@/components/legal/LegalPage'
import { pageMetadata, type Locale } from '@/lib/i18n'

// English-only page (French version: /fr/confidentialite)
interface PageProps {
  params: { lang: Locale }
}

const title = 'Privacy Policy'
const description =
  'How Wescaleup collects, uses, and protects the personal data submitted through its website and contact form.'

export function generateMetadata({ params }: PageProps): Metadata {
  if (params.lang !== 'en') return {}
  return pageMetadata({ lang: 'en', path: '/privacy', title, description })
}

const sections: LegalSection[] = [
  {
    title: 'Who we are',
    paragraphs: [
      'The website www.wescaleup.tech is published by WESCALEUP SARL, a limited liability company (SARL) with a share capital of TND 1,000, registered office at 08, rue de l’Université, El Manar 1, 2092 El Menzah, Tunis, Tunisia, registered with the National Business Register (RNE) under the unique identifier 1725825X.',
      'WESCALEUP SARL is the data controller for the personal data described in this policy. For any question, you can email us at slim.laribi@wescaleup.tech or call us on +216 22 354 833.',
    ],
  },
  {
    title: 'The data we collect',
    paragraphs: ['When you fill in our contact form, we collect:'],
    list: [
      'your name, email address, company name, and website URL;',
      'information about your project: service area, business type, budget, timeline, ad spend, and current tools;',
      'your main objective and the message you send us.',
    ],
    after: [
      'While you browse the site, technical data may also be collected: IP address, browser and device type, pages visited, and identifiers from cookies or trackers when you have consented to them (see "Cookies and analytics").',
      'We do not intentionally collect any sensitive data. Please do not include any in the message field.',
    ],
  },
  {
    title: 'Why we use your data',
    list: [
      'To answer your contact request and prepare the strategy call — legal basis: pre-contractual steps taken at your request and our legitimate interest in responding to inquiries.',
      'To follow up on your request commercially (follow-ups, engagement proposal) — legal basis: our legitimate interest.',
      'To measure site audience and improve our content and campaigns — legal basis: your consent.',
      'To keep the site secure and working properly — legal basis: our legitimate interest.',
    ],
    after: ['Your data is never sold or rented.'],
  },
  {
    title: 'Who can access your data',
    paragraphs: [
      'Your data is only accessible to the Wescaleup team. We rely on the following technical providers, who act as processors and only process your data on our behalf:',
    ],
    list: [
      'Airtable (Formagrid Inc., United States): storage and organization of requests received through the form;',
      'Resend (United States): sending the internal notification email when you submit the form;',
      'Vercel Inc. (United States): website hosting;',
      'Google (Google Ireland Ltd / Google LLC): Google Tag Manager, the tool that loads the analytics and marketing services;',
      'only with your consent: the providers of the analytics and marketing tools listed in "Cookies and analytics" (Google, Meta, LinkedIn, Microsoft, and Hotjar).',
    ],
    after: [
      'Some of these providers, in particular Google, Meta, and LinkedIn, may also use the data collected by their tools for their own purposes, in accordance with their own privacy policies.',
    ],
  },
  {
    title: 'International data transfers',
    paragraphs: [
      'Some of our providers are located in the United States. These transfers rely on the safeguards offered by each provider, including the Standard Contractual Clauses adopted by the European Commission and, where applicable, the EU–U.S. Data Privacy Framework.',
      'Your data is processed in accordance with Tunisian Organic Law No. 2004-63 of July 27, 2004 on the protection of personal data. Anyone may refer a matter to the Tunisian National Authority for the Protection of Personal Data (INPDP).',
    ],
  },
  {
    title: 'How long we keep your data',
    list: [
      'Contact requests that do not lead to a project: 3 years from our last exchange.',
      'Client data: for the duration of the business relationship, then for the periods required by our legal obligations (accounting and tax in particular).',
      'Analytics cookies and trackers: 13 months maximum.',
    ],
  },
  {
    title: 'Cookies and analytics',
    paragraphs: [
      'The website uses Google Tag Manager, a tool that loads analytics and marketing services. The following tools may be enabled through Google Tag Manager:',
    ],
    list: [
      'Google Analytics 4 (Google): audience measurement and website traffic analysis;',
      'Google Ads – conversion tracking and remarketing (Google): measuring the performance of our Google Ads campaigns and showing our ads to people who visited the website;',
      'Meta Pixel and Conversions API (Meta): measuring the performance of our Facebook and Instagram campaigns and showing our ads to people who visited the website;',
      'LinkedIn Insight Tag (LinkedIn): measuring the performance of our LinkedIn campaigns and website visitor statistics;',
      'Microsoft Clarity (Microsoft): browsing behavior analysis (heatmaps, session recordings) to improve the website;',
      'Hotjar (Hotjar): browsing behavior analysis (heatmaps, session recordings) to improve the user experience.',
    ],
    after: [
      'These tools are only enabled after you give your consent through the cookie banner. Without your consent, no analytics or marketing cookies are placed.',
      'You can change your choices at any time via the "Cookie settings" link at the bottom of the page.',
    ],
  },
  {
    title: 'Your rights',
    paragraphs: ['Under the GDPR and Tunisian Organic Law No. 2004-63 of July 27, 2004 on the protection of personal data, you have the following rights:'],
    list: [
      'right of access to your data;',
      'right to rectification;',
      'right to erasure;',
      'right to object and to restrict processing;',
      'right to data portability;',
      'right to withdraw your consent at any time.',
    ],
    after: [
      'To exercise these rights, email us at slim.laribi@wescaleup.tech. We will reply within one month.',
      'If you believe your rights are not respected, you can file a complaint with the CNIL (France, https://www.cnil.fr) or the INPDP (Tunisia, https://www.inpdp.tn).',
    ],
  },
  {
    title: 'Security',
    paragraphs: [
      'We apply appropriate technical and organizational measures to protect your data: encrypted connection (HTTPS), access restricted to authorized people only, and the use of reputable providers.',
    ],
  },
  {
    title: 'Changes to this policy',
    paragraphs: [
      'We may update this policy, for example when our tools change. The date of the latest update is shown at the top of this page.',
    ],
  },
]

export default function PrivacyPage({ params }: PageProps) {
  if (params.lang !== 'en') notFound()

  return (
    <LegalPage
      label="Personal data"
      title={title}
      updated="Last updated: October 2, 2026"
      intro="Protecting your personal data matters to us. This page explains, in plain language, what data we collect through this website, why, and what your rights are."
      sections={sections}
    />
  )
}

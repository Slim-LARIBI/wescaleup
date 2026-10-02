import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { LegalPage, type LegalSection } from '@/components/legal/LegalPage'
import { pageMetadata, type Locale } from '@/lib/i18n'

// English-only page (French version: /fr/mentions-legales)
interface PageProps {
  params: { lang: Locale }
}

const title = 'Terms of Service'
const description =
  'Legal notice and terms of use of the Wescaleup website: publisher, hosting provider, intellectual property, and liability.'

export function generateMetadata({ params }: PageProps): Metadata {
  if (params.lang !== 'en') return {}
  return pageMetadata({ lang: 'en', path: '/terms', title, description })
}

const sections: LegalSection[] = [
  {
    title: 'Website publisher',
    list: [
      'Trade name: Wescaleup',
      'Legal company name: WESCALEUP SARL',
      'Legal form: limited liability company (SARL)',
      'Share capital: TND 1,000',
      'Registered office: 08, rue de l’Université, El Manar 1, 2092 El Menzah, Tunis, Tunisia',
      'Unique identifier (RNE): 1725825X',
      'Tax ID (matricule fiscal): 1725825X',
      'Email: slim.laribi@wescaleup.tech',
      'Phone: +216 22 354 833',
    ],
  },
  {
    title: 'Publication director',
    paragraphs: ['Slim LARIBI, Managing Director (CEO)'],
  },
  {
    title: 'Hosting',
    paragraphs: [
      'The website is hosted by Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, United States — https://vercel.com',
    ],
  },
  {
    title: 'Purpose of the website',
    paragraphs: [
      'The website www.wescaleup.tech presents the services of the Wescaleup agency (performance marketing, tracking, analytics, SEO, automation, and custom software) and lets you contact us. The information published is provided for general information purposes and does not constitute a contractual offer. Every engagement is subject to a separate commercial proposal.',
    ],
  },
  {
    title: 'Intellectual property',
    paragraphs: [
      'All content on the website (text, visuals, logo, layout, code) is the property of Wescaleup unless stated otherwise. Any reproduction, representation, or adaptation, in whole or in part, without prior written permission is prohibited.',
      'Third-party trademarks and logos mentioned on the website (Google, Meta, Shopify, etc.) remain the property of their respective owners.',
    ],
  },
  {
    title: 'Use of the website',
    paragraphs: [
      'You agree to use the website fairly and not to interfere with its operation (intrusion attempts, mass form submissions, unlawful content, etc.).',
      'The information you submit through the contact form must be accurate. Its processing is described in our Privacy Policy.',
    ],
  },
  {
    title: 'Liability',
    paragraphs: [
      'Wescaleup makes every effort to keep the published information accurate and up to date, but cannot guarantee that it is complete. Results and figures shown come from past projects and are not a guarantee of future results.',
      'Wescaleup cannot be held liable for any temporary unavailability of the website or for damages resulting from its use.',
    ],
  },
  {
    title: 'External links',
    paragraphs: [
      'The website may contain links to third-party websites. Wescaleup has no control over these websites and is not responsible for their content.',
    ],
  },
  {
    title: 'Personal data and cookies',
    paragraphs: [
      'How we process your personal data and use cookies is described in our Privacy Policy, available from the website footer.',
    ],
  },
  {
    title: 'Governing law',
    paragraphs: [
      'These terms are governed by Tunisian law. In the event of a dispute, and failing an amicable solution, the courts of Tunis shall have exclusive jurisdiction.',
    ],
  },
]

export default function TermsPage({ params }: PageProps) {
  if (params.lang !== 'en') notFound()

  return (
    <LegalPage
      label="Legal information"
      title={title}
      updated="Last updated: October 2, 2026"
      sections={sections}
    />
  )
}

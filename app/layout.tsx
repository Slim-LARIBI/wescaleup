import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { FloatingCTA } from '@/components/layout/FloatingCTA'
import { Footer } from '@/components/layout/Footer'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['400', '500', '600'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://wescaleup.tech'),
  title: {
    default: 'Wescaleup — Growth systems, not just campaigns',
    template: '%s | Wescaleup',
  },
  description:
    'Wescaleup is a data-driven growth agency combining performance marketing, advanced tracking, analytics, technical SEO, and automation into scalable systems that grow your business.',
  keywords: [
    'growth agency',
    'performance marketing',
    'SEO agency',
    'technical SEO',
    'Google Ads',
    'Meta Ads',
    'server-side tracking',
    'GTM',
    'GA4',
    'marketing automation',
    'web analytics',
    'conversion optimization',
    'n8n automation',
    'data-driven agency',
  ],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://wescaleup.tech',
    siteName: 'Wescaleup',
    title: 'Wescaleup — Growth systems, not just campaigns',
    description:
      'We build advanced tracking, analytics, paid media, technical SEO, and automation systems for ambitious brands.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Wescaleup — Growth systems, not just campaigns',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wescaleup — Growth systems, not just campaigns',
    description:
      'Advanced tracking, analytics, paid media, technical SEO, and automation systems built for measurable growth.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  )
}
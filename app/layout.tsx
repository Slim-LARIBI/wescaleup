import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
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
  title: {
    default: 'Wescaleup — Engineered Growth for Ambitious Brands',
    template: '%s | Wescaleup',
  },
  description:
    'Wescaleup is a data-driven growth agency combining performance marketing, advanced tracking, marketing automation, and analytics into scalable systems that grow your business.',
  keywords: [
    'growth agency',
    'performance marketing',
    'SEO agency',
    'Google Ads',
    'Meta Ads',
    'server-side tracking',
    'GTM',
    'GA4',
    'marketing automation',
    'web analytics',
    'conversion optimization',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://wescaleup.com',
    siteName: 'Wescaleup',
    title: 'Wescaleup — Engineered Growth for Ambitious Brands',
    description:
      'We build performance systems that combine advanced tracking, data-driven acquisition, and intelligent automation — so your growth is reliable, scalable, and measurable.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wescaleup — Engineered Growth for Ambitious Brands',
    description:
      'Performance marketing, advanced tracking, analytics and automation built into scalable growth systems.',
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
      </body>
    </html>
  )
}

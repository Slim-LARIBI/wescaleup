import type { Metadata } from 'next'
import Script from 'next/script'
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
  metadataBase: new URL('https://www.wescaleup.tech'),
  title: {
    default: 'Wescaleup — Growth systems, not just campaigns',
    template: '%s | Wescaleup',
  },
  description:
    'Wescaleup is a data-driven growth agency combining performance marketing, advanced tracking, analytics, technical SEO, and automation into scalable systems that grow your business.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.wescaleup.tech',
    siteName: 'Wescaleup',
    title: 'Wescaleup — Growth systems, not just campaigns',
    description:
      'We build advanced tracking, analytics, paid media, technical SEO, and automation systems for ambitious brands.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wescaleup — Growth systems, not just campaigns',
    description:
      'Advanced tracking, analytics, paid media, technical SEO, and automation systems built for measurable growth.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        {GTM_ID && (
          <>
            <Script id="gtm" strategy="afterInteractive">
              {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
            </Script>
            <noscript>
              <iframe
                src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
                height="0"
                width="0"
                style={{ display: 'none', visibility: 'hidden' }}
              />
            </noscript>
          </>
        )}
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  )
}
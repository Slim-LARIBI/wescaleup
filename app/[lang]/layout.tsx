import type { Metadata } from 'next'
import Script from 'next/script'
import { notFound } from 'next/navigation'
import '../globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { FloatingCTA } from '@/components/layout/FloatingCTA'
import { Footer } from '@/components/layout/Footer'
import { getDictionary } from '@/dictionaries'
import { isLocale, localizedHref, locales, SITE_URL, translatePath } from '@/lib/i18n'
import { CONSENT_INIT_SCRIPT } from '@/lib/consent'
import { CookieConsent } from '@/components/consent/CookieConsent'

// Self-hosted fonts (served from our own domain, nothing is downloaded from Google at build time).
// The --font-plus-jakarta and --font-inter variables are defined in globals.css.
import '@fontsource/plus-jakarta-sans/300.css'
import '@fontsource/plus-jakarta-sans/400.css'
import '@fontsource/plus-jakarta-sans/500.css'
import '@fontsource/plus-jakarta-sans/600.css'
import '@fontsource/plus-jakarta-sans/700.css'
import '@fontsource/plus-jakarta-sans/800.css'
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'

export const dynamicParams = false

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  if (!isLocale(params.lang)) return {}
  const { common } = getDictionary(params.lang)
  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: common.meta.defaultTitle,
      template: '%s | Wescaleup',
    },
    description: common.meta.description,
    robots: {
      index: true,
      follow: true,
    },
  }
}

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  if (!isLocale(params.lang)) notFound()
  const lang = params.lang
  const { common } = getDictionary(lang)

  return (
    <html lang={lang}>
      <head>
        {/* Google Consent Mode v2: "denied" defaults + stored choice, before GTM loads */}
        <script id="consent-default" dangerouslySetInnerHTML={{ __html: CONSENT_INIT_SCRIPT }} />
      </head>
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
        {/* First in the page so keyboard users reach the banner first */}
        <CookieConsent
          t={common.cookies}
          privacyHref={localizedHref(lang, translatePath('/privacy', 'en', lang))}
        />
        <Navbar t={common.nav} switcherLabel={common.languageSwitcher.label} lang={lang} />
        <main>{children}</main>
        <Footer t={common.footer} serviceLabels={common.nav.serviceLinks} lang={lang} />
        <FloatingCTA label={common.floatingCta} lang={lang} />
      </body>
    </html>
  )
}
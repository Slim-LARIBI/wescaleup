import type { Metadata } from 'next'
import { Hero } from '@/components/sections/Hero'
import { TrustBar } from '@/components/sections/TrustBar'
import { ServicesGrid } from '@/components/sections/ServicesGrid'
import { WhyWescaleup } from '@/components/sections/WhyWescaleup'
import { Process } from '@/components/sections/Process'
import { Outcomes } from '@/components/sections/Outcomes'
import { FAQ } from '@/components/sections/FAQ'
import { ClosingCTA } from '@/components/sections/ClosingCTA'
import { getDictionary } from '@/dictionaries'
import { pageMetadata, type Locale } from '@/lib/i18n'

interface PageProps {
  params: { lang: Locale }
}

export function generateMetadata({ params }: PageProps): Metadata {
  const { home } = getDictionary(params.lang)
  return pageMetadata({
    lang: params.lang,
    path: '/',
    title: home.meta.title,
    description: home.meta.description,
    absoluteTitle: true,
    ogDescription: home.meta.ogDescription,
    twitterDescription: home.meta.twitterDescription,
  })
}

export default function HomePage({ params }: PageProps) {
  const { lang } = params
  const { home, common } = getDictionary(lang)

  return (
    <>
      <Hero t={home.hero} lang={lang} />
      <TrustBar t={home.trustBar} />
      <ServicesGrid t={home.servicesGrid} lang={lang} />
      <WhyWescaleup t={home.why} lang={lang} />
      <Process t={home.process} />
      <Outcomes t={home.outcomes} lang={lang} />
      <FAQ t={home.faq} />
      <ClosingCTA t={common.closingCta} lang={lang} />
    </>
  )
}

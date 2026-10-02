import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { FadeIn, StaggerChildren, StaggerItem } from '@/components/ui/FadeIn'
import { SectionHeader, SectionLabel } from '@/components/ui/SectionLabel'
import { ClosingCTA } from '@/components/sections/ClosingCTA'
import { getDictionary } from '@/dictionaries'
import { localizedHref, pageMetadata, type Locale } from '@/lib/i18n'

interface PageProps {
  params: { lang: Locale }
}

export function generateMetadata({ params }: PageProps): Metadata {
  const { meta } = getDictionary(params.lang).servicesIndex
  return pageMetadata({
    lang: params.lang,
    path: '/services',
    title: meta.title,
    description: meta.description,
  })
}

const servicePages = [
  {
    href: '/services/meta-ads',
    icon: '📱',
    bg: 'bg-violet-50',
    border: 'border-violet-200/50',
    text: 'text-violet-600',
  },
  {
    href: '/services/sea',
    icon: '🎯',
    bg: 'bg-brand-orange-light',
    border: 'border-brand-orange-mid/30',
    text: 'text-brand-orange',
  },
  {
    href: '/services/seo',
    icon: '🔍',
    bg: 'bg-brand-blue-light',
    border: 'border-brand-blue-mid/30',
    text: 'text-brand-blue',
  },
  {
    href: '/services/analytics',
    icon: '📊',
    bg: 'bg-emerald-50',
    border: 'border-emerald-200/50',
    text: 'text-emerald-600',
  },
  {
    href: '/services/automation',
    icon: '🤖',
    bg: 'bg-indigo-50',
    border: 'border-indigo-200/50',
    text: 'text-indigo-600',
  },
  {
    href: '/services/custom-saas',
    icon: '🧩',
    bg: 'bg-fuchsia-50',
    border: 'border-fuchsia-200/50',
    text: 'text-fuchsia-600',
  },
]

const philosophyIcons = ['📐', '🎯', '🚀']

export default function ServicesPage({ params }: PageProps) {
  const { lang } = params
  const { servicesIndex: t, common } = getDictionary(lang)

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-hero-mesh pt-32 pb-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 right-0 w-[600px] h-[600px] rounded-full bg-gradient-orb-blue opacity-30 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-gradient-orb-orange opacity-20 blur-3xl" />
        </div>

        <div className="container-site relative z-10">
          <FadeIn className="flex flex-col items-center text-center">
            <SectionLabel variant="blue">{t.hero.label}</SectionLabel>

            <h1
              className="font-display font-bold text-ink text-balance mt-5 mb-6"
              style={{
                fontSize: 'clamp(2.4rem, 5vw, 4.2rem)',
                lineHeight: '1.04',
                letterSpacing: '-0.04em',
              }}
            >
              {t.hero.titleLine1}{' '}
              <span className="text-gradient-brand block">
                {t.hero.titleLine2}
              </span>
            </h1>

            <p className="text-ink-muted text-lg leading-relaxed max-w-2xl mb-10">
              {t.hero.text}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href={localizedHref(lang, '/contact')}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-brand-blue text-white font-semibold text-base shadow-button hover:bg-brand-blue-dark hover:shadow-button-hover transition-all duration-200 ease-premium"
              >
                {t.hero.cta}
                <ArrowRight size={15} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Service hub */}
      <section className="py-16 bg-white border-b border-surface-border">
        <div className="container-site">
          <FadeIn className="mb-10 text-center">
            <SectionLabel variant="blue">{t.hub.label}</SectionLabel>
            <h2 className="font-display font-bold text-ink text-2xl lg:text-3xl mt-4 mb-3">
              {t.hub.title}
            </h2>
            <p className="text-ink-muted max-w-2xl mx-auto text-sm lg:text-base">
              {t.hub.text}
            </p>
          </FadeIn>

          <StaggerChildren
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5"
            staggerDelay={0.08}
          >
            {servicePages.map((service, i) => (
              <StaggerItem key={service.href}>
                <Link
                  href={localizedHref(lang, service.href)}
                  className="group block rounded-2xl border border-surface-border bg-white p-6 hover:shadow-card-hover hover:border-brand-blue-mid/30 transition-all duration-300 h-full"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 rounded-xl border flex items-center justify-center text-2xl shrink-0 transition-transform duration-200 group-hover:scale-105 ${service.bg} ${service.border}`}
                    >
                      {service.icon}
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="text-[11px] uppercase tracking-[0.16em] text-ink-light font-semibold mb-2">
                        {t.hub.services[i].label}
                      </div>

                      <h3 className="font-display font-bold text-ink text-lg leading-tight mb-2 group-hover:text-brand-blue transition-colors duration-200">
                        {t.hub.services[i].title}
                      </h3>

                      <p className="text-sm text-ink-muted leading-relaxed mb-4">
                        {t.hub.services[i].description}
                      </p>

                      <div className={`inline-flex items-center gap-2 text-sm font-semibold transition-all duration-200 ${service.text}`}>
                        {t.hub.explore}
                        <ArrowRight
                          size={14}
                          className="transition-transform duration-200 group-hover:translate-x-0.5"
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Capability strip */}
      <section className="py-16 bg-surface-warm border-b border-surface-border">
        <div className="container-site">
          <FadeIn className="mb-10 text-center">
            <SectionLabel variant="orange">{t.capabilities.label}</SectionLabel>
            <h2 className="font-display font-bold text-ink text-2xl lg:text-3xl mt-4 mb-3">
              {t.capabilities.title}
            </h2>
            <p className="text-ink-muted max-w-2xl mx-auto text-sm lg:text-base">
              {t.capabilities.text}
            </p>
          </FadeIn>

          <div className="flex flex-wrap justify-center gap-3">
            {t.capabilities.items.map((item) => (
              <div
                key={item}
                className="px-4 py-2 rounded-full border border-surface-border bg-white text-sm font-medium text-ink-secondary shadow-card"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-pad bg-white border-t border-surface-border">
        <div className="container-site">
          <FadeIn className="mb-14 flex flex-col items-center">
            <SectionHeader
              label={t.philosophy.label}
              title={
                <>
                  {t.philosophy.titleStart}{' '}
                  <span className="text-gradient-brand">{t.philosophy.titleHighlight}</span>
                </>
              }
              subtitle={t.philosophy.subtitle}
            />
          </FadeIn>

          <StaggerChildren
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            staggerDelay={0.1}
          >
            {t.philosophy.items.map((item, i) => (
              <StaggerItem key={item.title}>
                <div className="card p-8 text-center h-full hover:shadow-card-hover transition-shadow duration-300">
                  <div className="text-4xl mb-5">{philosophyIcons[i]}</div>
                  <h3 className="font-display font-bold text-ink text-lg mb-3">
                    {item.title}
                  </h3>
                  <p className="text-ink-muted text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <ClosingCTA t={common.closingCta} lang={lang} />
    </>
  )
}
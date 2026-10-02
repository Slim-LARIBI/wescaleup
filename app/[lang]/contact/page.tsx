import type { Metadata } from 'next'
import { ContactForm } from '@/components/sections/ContactForm'
import { FadeIn } from '@/components/ui/FadeIn'
import { SectionLabel } from '@/components/ui/SectionLabel'
import {
  Calendar,
  Clock3,
  Globe,
  ShieldCheck,
  LineChart,
  Sparkles,
} from 'lucide-react'
import { getDictionary } from '@/dictionaries'
import { localizedHref, pageMetadata, translatePath, type Locale } from '@/lib/i18n'

interface PageProps {
  params: { lang: Locale }
}

export function generateMetadata({ params }: PageProps): Metadata {
  const { meta } = getDictionary(params.lang).contact
  return pageMetadata({
    lang: params.lang,
    path: '/contact',
    title: meta.title,
    description: meta.description,
  })
}

const detailIcons = [Calendar, Clock3, Globe, ShieldCheck]

export default function ContactPage({ params }: PageProps) {
  const t = getDictionary(params.lang).contact

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-hero-mesh pt-32 pb-16 lg:pt-36 lg:pb-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 right-0 w-[520px] h-[520px] rounded-full bg-gradient-orb-blue opacity-25 blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-[420px] h-[420px] rounded-full bg-gradient-orb-violet opacity-15 blur-3xl" />
          <div className="absolute top-[25%] left-[55%] w-[280px] h-[280px] rounded-full bg-gradient-orb-orange opacity-10 blur-3xl" />
        </div>

        <div className="container-site relative z-10">
          <div className="max-w-3xl">
            <FadeIn>
              <SectionLabel variant="blue">{t.hero.label}</SectionLabel>

              <h1
                className="font-display font-bold text-ink text-balance mt-5 mb-5"
                style={{
                  fontSize: 'clamp(2.5rem, 5vw, 4.4rem)',
                  lineHeight: '1.02',
                  letterSpacing: '-0.045em',
                }}
              >
                {t.hero.titleLine1}{' '}
                <span className="text-gradient-brand block">
                  {t.hero.titleLine2}
                </span>
              </h1>

              <p className="text-ink-muted text-lg lg:text-[1.12rem] leading-relaxed max-w-2xl">
                {t.hero.text}
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="section-pad bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left column */}
            <FadeIn direction="right" className="lg:col-span-4 space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-blue-light border border-brand-blue-mid/20 text-xs font-semibold text-brand-blue mb-5">
                  <Sparkles size={14} />
                  {t.sidebar.badge}
                </div>

                <h2 className="font-display font-bold text-ink text-2xl mb-3">
                  {t.sidebar.title}
                </h2>

                <p className="text-ink-muted text-sm leading-relaxed">
                  {t.sidebar.text}
                </p>
              </div>

              <div className="space-y-5">
                {t.sidebar.details.map((detail, i) => {
                  const DetailIcon = detailIcons[i]
                  return (
                  <div
                    key={detail.title}
                    className="flex items-start gap-4 rounded-2xl border border-surface-border bg-surface-warm p-4"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white border border-surface-border flex items-center justify-center flex-shrink-0">
                      <DetailIcon size={16} className="text-brand-blue" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-ink text-sm mb-1.5">{detail.title}</h3>
                      <p className="text-ink-muted text-xs leading-relaxed">{detail.description}</p>
                    </div>
                  </div>
                  )
                })}
              </div>

              <div className="rounded-[24px] border border-surface-border bg-surface-warm p-6">
                <p className="text-[11px] uppercase tracking-[0.18em] text-ink-light font-semibold mb-4">
                  {t.sidebar.onTheCall}
                </p>
                <ul className="space-y-3">
                  {t.sidebar.expectations.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-brand-blue-light border border-brand-blue-mid/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
                      </div>
                      <span className="text-sm text-ink-secondary leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[24px] border border-surface-border bg-white p-6 shadow-card">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-brand-blue-light border border-brand-blue-mid/20 flex items-center justify-center">
                    <LineChart size={18} className="text-brand-blue" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-ink">{t.sidebar.proofTitle}</p>
                    <p className="text-xs text-ink-muted">{t.sidebar.proofSubtitle}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {t.sidebar.proofPoints.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-surface-border bg-surface-warm p-4"
                    >
                      <div className="flex items-end justify-between gap-3 mb-2">
                        <p className="text-sm font-semibold text-ink">{item.title}</p>
                        <p className="text-lg font-bold text-brand-blue">{item.metric}</p>
                      </div>
                      <p className="text-xs text-ink-muted leading-relaxed">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Right column */}
            <FadeIn direction="left" delay={0.08} className="lg:col-span-8">
              <ContactForm
                t={t.form}
                privacyHref={localizedHref(params.lang, translatePath('/privacy', 'en', params.lang))}
              />
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  )
}
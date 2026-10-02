import { FadeIn, StaggerChildren, StaggerItem } from '@/components/ui/FadeIn'
import { SectionHeader } from '@/components/ui/SectionLabel'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'
import type { HomeDictionary } from '@/dictionaries/en/home'
import { localizedHref, type Locale } from '@/lib/i18n'

const accents = ['blue', 'orange', 'emerald']

function accentClasses(accent: string) {
  switch (accent) {
    case 'orange':
      return {
        tag: 'bg-brand-orange-light text-brand-orange border-brand-orange-mid/30',
        metric: 'text-brand-orange',
      }
    case 'emerald':
      return {
        tag: 'bg-emerald-50 text-emerald-600 border-emerald-200/50',
        metric: 'text-emerald-600',
      }
    default:
      return {
        tag: 'bg-brand-blue-light text-brand-blue border-brand-blue-mid/30',
        metric: 'text-brand-blue',
      }
  }
}

interface OutcomesProps {
  t: HomeDictionary['outcomes']
  lang: Locale
}

export function Outcomes({ t, lang }: OutcomesProps) {
  return (
    <section className="section-pad bg-white">
      <div className="container-site">
        <FadeIn className="mb-16 flex flex-col items-center">
          <SectionHeader
            label={t.label}
            labelVariant="orange"
            title={
              <>
                {t.titleStart}{' '}
                <span className="text-gradient-warm">{t.titleHighlight}</span>
              </>
            }
            subtitle={t.subtitle}
          />
        </FadeIn>

        <StaggerChildren
          className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-20"
          staggerDelay={0.08}
        >
          {t.caseStudies.map((item, i) => {
            const accent = accentClasses(accents[i])

            return (
              <StaggerItem key={item.title}>
                <div className="card p-7 h-full hover:shadow-card-hover transition-shadow duration-300 group">
                  <div
                    className={`inline-flex items-center px-3 py-1.5 rounded-full border text-[11px] font-bold tracking-[0.14em] uppercase mb-5 ${accent.tag}`}
                  >
                    {item.tag}
                  </div>

                  <h3 className="font-display font-bold text-ink text-xl mb-5 group-hover:text-brand-blue transition-colors duration-200">
                    {item.title}
                  </h3>

                  <div className="space-y-4 mb-6">
                    <div>
                      <p className="text-[11px] font-bold tracking-[0.16em] uppercase text-ink-light mb-2">
                        {t.problem}
                      </p>
                      <p className="text-sm text-ink-muted leading-relaxed">{item.problem}</p>
                    </div>

                    <div>
                      <p className="text-[11px] font-bold tracking-[0.16em] uppercase text-ink-light mb-2">
                        {t.action}
                      </p>
                      <p className="text-sm text-ink-muted leading-relaxed">{item.action}</p>
                    </div>

                    <div>
                      <p className="text-[11px] font-bold tracking-[0.16em] uppercase text-ink-light mb-2">
                        {t.result}
                      </p>
                      <p className="text-sm text-ink-secondary leading-relaxed">{item.result}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3 pt-5 border-t border-surface-border">
                    {item.metrics.map((metric) => (
                      <div key={metric.label}>
                        <div className={`text-lg font-bold tracking-tight ${accent.metric}`}>
                          {metric.value}
                        </div>
                        <div className="text-[11px] text-ink-muted mt-1">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            )
          })}
        </StaggerChildren>

        <FadeIn>
          <div className="rounded-[28px] border border-surface-border bg-surface-warm p-8 lg:p-10 mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-ink-light mb-3">
                  {t.whyEyebrow}
                </p>
                <h3 className="font-display font-bold text-ink text-2xl lg:text-3xl mb-4">
                  {t.whyTitle}
                </h3>
                <p className="text-ink-muted leading-relaxed max-w-3xl">
                  {t.whyText}
                </p>
              </div>

              <div className="lg:col-span-4 flex lg:justify-end">
                <Link
                  href={localizedHref(lang, '/contact')}
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-brand-blue text-white font-semibold shadow-button hover:bg-brand-blue-dark hover:shadow-button-hover transition-all duration-200"
                >
                  {t.whyCta}
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="border-t border-surface-border pt-16">
            <p className="text-center text-xs font-semibold tracking-widest uppercase text-ink-light mb-8">
              {t.industriesTitle}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {t.industries.map((industry) => (
                <div
                  key={industry}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-surface-muted border border-surface-border text-sm font-medium text-ink-secondary"
                >
                  <CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" />
                  {industry}
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
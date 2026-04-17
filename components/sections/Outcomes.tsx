import { FadeIn, StaggerChildren, StaggerItem } from '@/components/ui/FadeIn'
import { SectionHeader } from '@/components/ui/SectionLabel'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'

const caseStudies = [
  {
    title: 'Ecommerce tracking rebuild',
    tag: 'Tracking / GA4 / GTM / CAPI',
    problem:
      'The brand was scaling paid media with fragmented attribution, incomplete event tracking, and weak signal quality across Meta and Google.',
    action:
      'We rebuilt the measurement layer with GTM, GA4, Meta Pixel, Conversion API, cleaner event logic, and stronger reporting visibility.',
    result: '99.8% tracking accuracy, stronger event match quality, and clearer acquisition reporting for faster decisions.',
    metrics: [
      { value: '99.8%', label: 'Tracking accuracy' },
      { value: 'Cleaner', label: 'Attribution' },
      { value: 'Higher', label: 'Signal quality' },
    ],
    accent: 'blue',
  },
  {
    title: 'Paid acquisition efficiency lift',
    tag: 'Meta Ads / Google Ads',
    problem:
      'Campaigns were generating spend, but CPC pressure, weak structure, and poor measurement clarity were limiting profitable scale.',
    action:
      'We restructured campaign architecture, cleaned the signal layer, and aligned acquisition strategy with more reliable conversion data.',
    result: 'ROAS improved while acquisition costs dropped, giving the team a more stable path to scale profitable traffic.',
    metrics: [
      { value: '3.2×', label: 'ROAS uplift' },
      { value: '–42%', label: 'CAC reduction' },
      { value: 'Faster', label: 'Optimization cycles' },
    ],
    accent: 'orange',
  },
  {
    title: 'Automation-driven operations',
    tag: 'n8n / Apps Script / Reporting',
    problem:
      'Lead routing, KPI reporting, and internal follow-up relied on manual actions, which slowed execution and created operational friction.',
    action:
      'We designed workflow automations for routing, reporting, alerts, and team visibility using automation-first logic.',
    result: 'Operations became faster, reporting more consistent, and repetitive execution moved into a scalable workflow layer.',
    metrics: [
      { value: '24/7', label: 'Workflow execution' },
      { value: 'Less', label: 'Manual work' },
      { value: 'Faster', label: 'Ops speed' },
    ],
    accent: 'emerald',
  },
]

const industries = [
  'E-commerce & DTC',
  'B2B SaaS',
  'Lead Generation',
  'Retail & Fashion',
  'Travel & Hospitality',
  'Health & Wellness',
  'Professional Services',
  'Tech & Startups',
]

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

export function Outcomes() {
  return (
    <section className="section-pad bg-white">
      <div className="container-site">
        <FadeIn className="mb-16 flex flex-col items-center">
          <SectionHeader
            label="Proof & Case Studies"
            labelVariant="orange"
            title={
              <>
                Real systems,{' '}
                <span className="text-gradient-warm">real business impact.</span>
              </>
            }
            subtitle="A better growth system changes more than one metric. It improves signal quality, decision-making, campaign efficiency, and operational speed at the same time."
          />
        </FadeIn>

        <StaggerChildren
          className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-20"
          staggerDelay={0.08}
        >
          {caseStudies.map((item) => {
            const accent = accentClasses(item.accent)

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
                        Problem
                      </p>
                      <p className="text-sm text-ink-muted leading-relaxed">{item.problem}</p>
                    </div>

                    <div>
                      <p className="text-[11px] font-bold tracking-[0.16em] uppercase text-ink-light mb-2">
                        Action
                      </p>
                      <p className="text-sm text-ink-muted leading-relaxed">{item.action}</p>
                    </div>

                    <div>
                      <p className="text-[11px] font-bold tracking-[0.16em] uppercase text-ink-light mb-2">
                        Result
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
                  Why this matters
                </p>
                <h3 className="font-display font-bold text-ink text-2xl lg:text-3xl mb-4">
                  We improve the system behind the performance.
                </h3>
                <p className="text-ink-muted leading-relaxed max-w-3xl">
                  Better growth results rarely come from one isolated tactic. They come from
                  cleaner measurement, stronger acquisition structure, better workflow execution,
                  and clearer reporting. That is the layer we focus on.
                </p>
              </div>

              <div className="lg:col-span-4 flex lg:justify-end">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-brand-blue text-white font-semibold shadow-button hover:bg-brand-blue-dark hover:shadow-button-hover transition-all duration-200"
                >
                  Discuss your growth system
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="border-t border-surface-border pt-16">
            <p className="text-center text-xs font-semibold tracking-widest uppercase text-ink-light mb-8">
              Industries we work with
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {industries.map((industry) => (
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
import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { services } from '@/lib/data'
import { FadeIn, StaggerChildren, StaggerItem } from '@/components/ui/FadeIn'
import { SectionHeader, SectionLabel } from '@/components/ui/SectionLabel'
import { ClosingCTA } from '@/components/sections/ClosingCTA'

export const metadata: Metadata = {
  title: 'Services — Performance Marketing, Tracking & Automation',
  description:
    'SEO, Google Ads, Meta Ads, server-side tracking, GA4, GTM, marketing automation, email flows, dashboards, and CRO. Every growth service you need, built as a system.',
}

const colorStyles: Record<string, { accent: string; bg: string; border: string; badge: string; labelVariant: 'blue' | 'orange' | 'neutral' }> = {
  blue: { accent: 'text-brand-blue', bg: 'bg-brand-blue-light', border: 'border-brand-blue-mid/30', badge: 'bg-brand-blue-light text-brand-blue', labelVariant: 'blue' },
  orange: { accent: 'text-brand-orange', bg: 'bg-brand-orange-light', border: 'border-brand-orange-mid/30', badge: 'bg-brand-orange-light text-brand-orange', labelVariant: 'orange' },
  violet: { accent: 'text-violet-600', bg: 'bg-violet-50', border: 'border-violet-200/50', badge: 'bg-violet-50 text-violet-600', labelVariant: 'neutral' },
  emerald: { accent: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-200/50', badge: 'bg-emerald-50 text-emerald-600', labelVariant: 'neutral' },
  amber: { accent: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-200/50', badge: 'bg-amber-50 text-amber-600', labelVariant: 'neutral' },
  cyan: { accent: 'text-cyan-600', bg: 'bg-cyan-50', border: 'border-cyan-200/50', badge: 'bg-cyan-50 text-cyan-600', labelVariant: 'neutral' },
  indigo: { accent: 'text-indigo-600', bg: 'bg-indigo-50', border: 'border-indigo-200/50', badge: 'bg-indigo-50 text-indigo-600', labelVariant: 'neutral' },
  teal: { accent: 'text-teal-600', bg: 'bg-teal-50', border: 'border-teal-200/50', badge: 'bg-teal-50 text-teal-600', labelVariant: 'neutral' },
  rose: { accent: 'text-rose-600', bg: 'bg-rose-50', border: 'border-rose-200/50', badge: 'bg-rose-50 text-rose-600', labelVariant: 'neutral' },
  fuchsia: { accent: 'text-fuchsia-600', bg: 'bg-fuchsia-50', border: 'border-fuchsia-200/50', badge: 'bg-fuchsia-50 text-fuchsia-600', labelVariant: 'neutral' },
}

export default function ServicesPage() {
  return (
    <>
      {/* Page hero */}
      <section className="relative overflow-hidden bg-hero-mesh pt-32 pb-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 right-0 w-[600px] h-[600px] rounded-full bg-gradient-orb-blue opacity-30 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-gradient-orb-orange opacity-20 blur-3xl" />
        </div>
        <div className="container-site relative z-10">
          <FadeIn className="flex flex-col items-center text-center">
            <SectionLabel variant="blue">Services</SectionLabel>
            <h1
              className="font-display font-bold text-ink text-balance mt-5 mb-6"
              style={{ fontSize: 'clamp(2.25rem, 5vw, 4rem)', lineHeight: '1.08', letterSpacing: '-0.03em' }}
            >
              Every Growth Layer,
              <span className="text-gradient-brand block">
                Engineered to Perform.
              </span>
            </h1>
            <p className="text-ink-muted text-lg leading-relaxed max-w-2xl mb-10">
              We do not offer isolated services. We build interconnected growth systems —
              where tracking feeds acquisition, acquisition informs automation, and
              analytics drives every decision.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-brand-blue text-white font-semibold text-base shadow-button hover:bg-brand-blue-dark hover:shadow-button-hover transition-all duration-200 ease-premium"
              >
                Book a discovery call <ArrowRight size={15} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Quick nav */}
      <section className="bg-white border-b border-surface-border sticky top-16 lg:top-20 z-30">
        <div className="container-site">
          <div className="flex items-center gap-1 overflow-x-auto py-3 scrollbar-hide">
            {services.map((service) => (
              <a
                key={service.id}
                href={`#${service.id}`}
                className="flex-shrink-0 px-4 py-2 rounded-full text-xs font-semibold text-ink-muted hover:text-brand-blue hover:bg-brand-blue-light transition-all duration-200 whitespace-nowrap"
              >
                {service.icon} {service.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Services detail sections */}
      <div className="bg-surface-warm">
        {services.map((service, i) => {
          const c = colorStyles[service.color]
          const isEven = i % 2 === 0

          return (
            <section
              key={service.id}
              id={service.id}
              className={`section-pad ${isEven ? 'bg-white' : 'bg-surface-warm'} scroll-mt-36`}
            >
              <div className="container-site">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                  {/* Content */}
                  <FadeIn
                    direction={isEven ? 'right' : 'left'}
                    className="lg:col-span-6"
                  >
                    {/* Service badge */}
                    <div className={`inline-flex items-center gap-2.5 px-4 py-2 rounded-full border mb-6 ${c.bg} ${c.border}`}>
                      <span className="text-lg">{service.icon}</span>
                      <span className={`text-xs font-bold tracking-widest uppercase ${c.accent}`}>
                        {service.title}
                      </span>
                    </div>

                    <h2 className="font-display font-bold text-ink text-2xl lg:text-3xl tracking-tight mb-5">
                      {service.title}
                    </h2>

                    <p className="text-ink-secondary text-base leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Outcome highlight */}
                    <div className={`p-5 rounded-xl border ${c.bg} ${c.border} mb-8`}>
                      <p className={`text-xs font-bold tracking-widest uppercase mb-2 ${c.accent}`}>
                        Business Outcome
                      </p>
                      <p className="text-sm text-ink-secondary leading-relaxed">
                        {service.outcome}
                      </p>
                    </div>

                    <Link
                      href="/contact"
                      className={`inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm transition-all duration-200 ease-premium shadow-button hover:shadow-button-hover text-white bg-brand-blue hover:bg-brand-blue-dark`}
                    >
                      Discuss this service <ArrowRight size={14} />
                    </Link>
                  </FadeIn>

                  {/* Technical scope + deliverables */}
                  <FadeIn
                    direction={isEven ? 'left' : 'right'}
                    delay={0.1}
                    className="lg:col-span-6 space-y-5"
                  >
                    {/* Technical scope */}
                    <div className="card p-7">
                      <h3 className="font-display font-bold text-ink text-sm mb-5 flex items-center gap-2">
                        <span className={`w-5 h-5 rounded-full flex items-center justify-center text-white ${c.accent} text-xs`}>⚙</span>
                        Technical Scope
                      </h3>
                      <ul className="space-y-2.5">
                        {service.technicalScope.map((item) => (
                          <li key={item} className="flex items-start gap-3">
                            <CheckCircle2 size={15} className={`flex-shrink-0 mt-0.5 ${c.accent}`} />
                            <span className="text-sm text-ink-secondary">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Deliverables */}
                    <div className="card p-7">
                      <h3 className="font-display font-bold text-ink text-sm mb-5 flex items-center gap-2">
                        <span>📦</span>
                        What You Get
                      </h3>
                      <ul className="space-y-2.5">
                        {service.deliverables.map((item) => (
                          <li key={item} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-2 flex-shrink-0" />
                            <span className="text-sm text-ink-secondary">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </FadeIn>
                </div>
              </div>
            </section>
          )
        })}
      </div>

      {/* Philosophy section */}
      <section className="section-pad bg-white border-t border-surface-border">
        <div className="container-site">
          <FadeIn className="mb-14 flex flex-col items-center">
            <SectionHeader
              label="Our Philosophy"
              title={
                <>
                  Services that work{' '}
                  <span className="text-gradient-brand">together.</span>
                </>
              }
              subtitle="Each service we offer is designed to integrate with the others. A well-tracked site feeds better ad campaigns. Better campaigns inform automation. Everything compounds."
            />
          </FadeIn>

          <StaggerChildren
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            staggerDelay={0.1}
          >
            {[
              {
                title: 'Measure First',
                description:
                  'We always start with tracking and analytics. Without reliable data, every other effort is guesswork.',
                icon: '📐',
              },
              {
                title: 'Acquire with Precision',
                description:
                  'Performance marketing campaigns built on solid measurement outperform those running on incomplete data — always.',
                icon: '🎯',
              },
              {
                title: 'Automate and Scale',
                description:
                  'Once acquisition is working, automation multiplies efficiency. Your marketing stack runs smarter, not just harder.',
                icon: '🚀',
              },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="card p-8 text-center h-full hover:shadow-card-hover transition-shadow duration-300">
                  <div className="text-4xl mb-5">{item.icon}</div>
                  <h3 className="font-display font-bold text-ink text-lg mb-3">{item.title}</h3>
                  <p className="text-ink-muted text-sm leading-relaxed">{item.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <ClosingCTA />
    </>
  )
}

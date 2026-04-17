import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { FadeIn, StaggerChildren, StaggerItem } from '@/components/ui/FadeIn'
import { SectionHeader, SectionLabel } from '@/components/ui/SectionLabel'
import { ClosingCTA } from '@/components/sections/ClosingCTA'

export const metadata: Metadata = {
  title: 'Services — Growth Systems, Tracking, Ads, SEO & Automation',
  description:
    'Explore Wescaleup services: Meta Ads, Google Ads, SEO, Analytics & Tracking, Marketing Automation, and Custom SaaS.',
}

const servicePages = [
  {
    title: 'Meta Ads',
    href: '/services/meta-ads',
    icon: '📱',
    label: 'Paid Social',
    description:
      'Advanced Meta Ads systems for ecommerce brands, with Pixel, CAPI, catalog logic, creative testing, and ROAS-focused scaling.',
    bg: 'bg-violet-50',
    border: 'border-violet-200/50',
    text: 'text-violet-600',
  },
  {
    title: 'SEA / Google Ads',
    href: '/services/sea',
    icon: '🎯',
    label: 'Paid Search',
    description:
      'Search, Performance Max, Shopping, Display, and keyword architecture built for scalable acquisition and cleaner conversion signals.',
    bg: 'bg-brand-orange-light',
    border: 'border-brand-orange-mid/30',
    text: 'text-brand-orange',
  },
  {
    title: 'SEO',
    href: '/services/seo',
    icon: '🔍',
    label: 'Organic Growth',
    description:
      'Technical SEO, semantic architecture, Core Web Vitals, GEO SEO, automation, and reporting designed as one scalable organic system.',
    bg: 'bg-brand-blue-light',
    border: 'border-brand-blue-mid/30',
    text: 'text-brand-blue',
  },
  {
    title: 'Analytics & Tracking',
    href: '/services/analytics',
    icon: '📊',
    label: 'Measurement',
    description:
      'GTM, GA4, Meta Pixel, CAPI, server-side tracking, dataLayer design, filters, attribution cleanup, and dashboard visibility.',
    bg: 'bg-emerald-50',
    border: 'border-emerald-200/50',
    text: 'text-emerald-600',
  },
  {
    title: 'Marketing Automation',
    href: '/services/automation',
    icon: '🤖',
    label: 'Automation',
    description:
      'n8n, Make, Apps Script, CRM routing, alerts, reporting pipelines, and workflow systems that reduce manual operational friction.',
    bg: 'bg-indigo-50',
    border: 'border-indigo-200/50',
    text: 'text-indigo-600',
  },
  {
    title: 'Custom SaaS',
    href: '/services/custom-saas',
    icon: '🧩',
    label: 'Software Systems',
    description:
      'Custom platforms, internal tools, dashboards, portals, and workflow software engineered around your business logic.',
    bg: 'bg-fuchsia-50',
    border: 'border-fuchsia-200/50',
    text: 'text-fuchsia-600',
  },
]

const capabilities = [
  'Server-side tracking',
  'GA4 / GTM architecture',
  'Meta CAPI & Pixel',
  'Performance Max & Search',
  'Technical SEO & GEO SEO',
  'n8n / Make automation',
  'Reporting dashboards',
  'Custom internal tools',
]

export default function ServicesPage() {
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
            <SectionLabel variant="blue">Services</SectionLabel>

            <h1
              className="font-display font-bold text-ink text-balance mt-5 mb-6"
              style={{
                fontSize: 'clamp(2.4rem, 5vw, 4.2rem)',
                lineHeight: '1.04',
                letterSpacing: '-0.04em',
              }}
            >
              Growth systems,
              <span className="text-gradient-brand block">
                built layer by layer.
              </span>
            </h1>

            <p className="text-ink-muted text-lg leading-relaxed max-w-2xl mb-10">
              We do not sell isolated execution. We design growth systems where
              acquisition, measurement, automation, and infrastructure work together
              to create clearer decisions and stronger performance.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-brand-blue text-white font-semibold text-base shadow-button hover:bg-brand-blue-dark hover:shadow-button-hover transition-all duration-200 ease-premium"
              >
                Book a strategy call
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
            <SectionLabel variant="blue">Explore our services</SectionLabel>
            <h2 className="font-display font-bold text-ink text-2xl lg:text-3xl mt-4 mb-3">
              Choose your growth layer
            </h2>
            <p className="text-ink-muted max-w-2xl mx-auto text-sm lg:text-base">
              Each page goes deeper into the strategy, technical stack, execution model,
              and business outcomes behind the service.
            </p>
          </FadeIn>

          <StaggerChildren
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5"
            staggerDelay={0.08}
          >
            {servicePages.map((service) => (
              <StaggerItem key={service.href}>
                <Link
                  href={service.href}
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
                        {service.label}
                      </div>

                      <h3 className="font-display font-bold text-ink text-lg leading-tight mb-2 group-hover:text-brand-blue transition-colors duration-200">
                        {service.title}
                      </h3>

                      <p className="text-sm text-ink-muted leading-relaxed mb-4">
                        {service.description}
                      </p>

                      <div className={`inline-flex items-center gap-2 text-sm font-semibold transition-all duration-200 ${service.text}`}>
                        Explore service
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
            <SectionLabel variant="orange">Core capabilities</SectionLabel>
            <h2 className="font-display font-bold text-ink text-2xl lg:text-3xl mt-4 mb-3">
              Cross-functional expertise, one system mindset.
            </h2>
            <p className="text-ink-muted max-w-2xl mx-auto text-sm lg:text-base">
              Some capabilities live inside multiple services because real performance
              comes from systems that reinforce each other.
            </p>
          </FadeIn>

          <div className="flex flex-wrap justify-center gap-3">
            {capabilities.map((item) => (
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
              label="Our Philosophy"
              title={
                <>
                  Services that work{' '}
                  <span className="text-gradient-brand">together.</span>
                </>
              }
              subtitle="A well-tracked site improves paid acquisition. Better acquisition improves automation logic. Better automation improves operations. Everything compounds when the system is connected."
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
                  'We start with signal quality, tracking clarity, and decision-ready data before scaling execution.',
                icon: '📐',
              },
              {
                title: 'Execute with Precision',
                description:
                  'Paid media, SEO, and automation work better when the underlying system is structured correctly.',
                icon: '🎯',
              },
              {
                title: 'Scale with Systems',
                description:
                  'The goal is not isolated wins. The goal is to build durable growth infrastructure that compounds.',
                icon: '🚀',
              },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="card p-8 text-center h-full hover:shadow-card-hover transition-shadow duration-300">
                  <div className="text-4xl mb-5">{item.icon}</div>
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

      <ClosingCTA />
    </>
  )
}
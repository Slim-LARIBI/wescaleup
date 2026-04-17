import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  CheckCircle2,
  Radar,
  Database,
  LineChart,
  Workflow,
  Server,
  ShieldCheck,
  BarChart3,
  Layers3,
  Filter,
  Bug,
} from 'lucide-react'
import { FadeIn } from '@/components/ui/FadeIn'
import { SectionLabel } from '@/components/ui/SectionLabel'

export const metadata: Metadata = {
  title: 'Analytics & Tracking — GTM, GA4, CAPI, Server-Side & Data Architecture',
  description:
    'Advanced web analytics and tracking systems: GTM, GA4, Meta Pixel, CAPI, server-side tracking, dataLayer design, tagging plan, attribution, filters, dashboards, and QA.',
}

const topMetrics = [
  { value: '99.8%', label: 'Tracking accuracy' },
  { value: 'Cleaner', label: 'Attribution clarity' },
  { value: 'Higher', label: 'Event match quality' },
  { value: 'Reliable', label: 'Decision layer' },
]

const problems = [
  'GTM containers built without tagging governance or QA logic',
  'GA4 configured without proper events, conversions, filters, or attribution discipline',
  'Meta Pixel and CAPI sending inconsistent or duplicated events',
  'No tagging plan, no dataLayer structure, and no source-of-truth documentation',
  'Internal traffic polluting analytics because IP filters or exclusions are missing',
  'Server-side tracking discussed, but never implemented in a stable production setup',
]

const systemLayers = [
  {
    icon: Layers3,
    title: 'Tagging Strategy',
    description:
      'Business goals, funnel mapping, measurement plan, event naming, parameter definitions, and source-of-truth governance.',
  },
  {
    icon: Database,
    title: 'DataLayer Architecture',
    description:
      'Structured ecommerce and interaction data pushed consistently to GTM with clean variables and scalable implementation logic.',
  },
  {
    icon: Radar,
    title: 'Tracking Layer',
    description:
      'GTM, GA4, Meta Pixel, Google Ads tags, custom events, ecommerce tracking, and attribution-ready event design.',
  },
  {
    icon: Server,
    title: 'Server-Side Layer',
    description:
      'Server-Side GTM via Addingwell or custom VPS / Docker setups with stronger signal routing, privacy-aware architecture, and cleaner data delivery.',
  },
  {
    icon: Filter,
    title: 'Analytics Governance',
    description:
      'GA4 filters, internal traffic exclusion, bot noise reduction, attribution logic, channel clarity, and cleaner reporting foundations.',
  },
  {
    icon: Workflow,
    title: 'Monitoring & Automation',
    description:
      'QA workflows, anomaly checks, dashboards, alerting, reporting automation, and tracking health visibility.',
  },
]

const technicalExecution = [
  'Measurement framework aligned with business goals and funnel stages',
  'Detailed tagging plan with event names, triggers, parameters, and destinations',
  'Full dataLayer specification for ecommerce and custom user interactions',
  'GTM container architecture with scalable naming conventions and variable governance',
  'GA4 property setup: events, conversions, custom dimensions, attribution settings',
  'Meta Pixel + CAPI consistency with deduplication logic and parameter quality',
  'Internal traffic exclusion using IP logic and GA4 filters',
  'Cookie / consent-aware deployment and privacy-conscious tag orchestration',
]

const serverSideBlocks = [
  {
    title: 'Addingwell deployment',
    description:
      'Fast server-side GTM deployment with managed infrastructure, routing control, and lower implementation friction.',
  },
  {
    title: 'Custom VPS / Docker setup',
    description:
      'Full-control server-side tagging architecture for teams needing infrastructure ownership, flexibility, and custom routing logic.',
  },
  {
    title: 'Event routing logic',
    description:
      'Server-side event forwarding to Meta, GA4, Google Ads, and other endpoints with stronger control over signal quality.',
  },
  {
    title: 'Deduplication & match quality',
    description:
      'Event IDs, user data normalization, and browser/server consistency to improve CAPI quality and reduce duplicate conversions.',
  },
]

const timeline = [
  {
    step: '01',
    title: 'Audit & measurement diagnosis',
    description:
      'We audit GTM, GA4, Pixel, CAPI, attribution behavior, internal traffic pollution, event consistency, and reporting quality.',
  },
  {
    step: '02',
    title: 'Tagging plan & data model',
    description:
      'We define the measurement framework, funnel logic, event taxonomy, parameters, and dataLayer requirements.',
  },
  {
    step: '03',
    title: 'Client-side tracking implementation',
    description:
      'We rebuild GTM, GA4, ecommerce events, custom interactions, conversions, and platform pixels with cleaner logic.',
  },
  {
    step: '04',
    title: 'Server-side tracking deployment',
    description:
      'We implement server-side GTM via Addingwell or custom VPS / Docker depending on the architecture and control needed.',
  },
  {
    step: '05',
    title: 'QA, filters & attribution cleanup',
    description:
      'We validate events, remove duplicate behavior, apply GA4 exclusions, and improve attribution readability.',
  },
  {
    step: '06',
    title: 'Dashboard & monitoring layer',
    description:
      'We centralize tracking health, KPI visibility, event quality, and operational reporting into one cleaner decision layer.',
  },
]

const ga4Blocks = [
  {
    title: 'GA4 property architecture',
    description:
      'Events, conversions, custom dimensions, audiences, channel settings, and reporting structure designed for business visibility.',
  },
  {
    title: 'Internal traffic filtering',
    description:
      'IP-based exclusions, environment logic, and clean separation of internal / external behavior to improve reporting trust.',
  },
  {
    title: 'Attribution discipline',
    description:
      'We align event structure and reporting logic so acquisition teams can read real contribution more clearly.',
  },
  {
    title: 'Debugging & QA',
    description:
      'Realtime validation, DebugView, tag assistant flows, network checks, parameter verification, and event-level quality control.',
  },
]

const capiBlocks = [
  'Meta Pixel + CAPI event parity',
  'Deduplication using event_id logic',
  'User data normalization for stronger match quality',
  'Purchase / AddToCart / InitiateCheckout consistency',
  'Browser-side + server-side signal alignment',
  'Event payload quality checks and monitoring',
]

const dashboardItems = [
  'Tracking health dashboards by platform and event',
  'GA4 vs Meta vs backend comparison views',
  'Event completeness and firing quality monitoring',
  'Attribution and conversion discrepancy visibility',
  'Anomaly alerts for missing events or signal drops',
  'Executive reporting for acquisition and measurement quality',
]

export default function AnalyticsPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-hero-mesh pt-32 pb-20 lg:pt-36 lg:pb-24">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-28 right-[-100px] h-[420px] w-[420px] rounded-full bg-gradient-orb-blue opacity-30 blur-3xl" />
          <div className="absolute bottom-[-120px] left-[-60px] h-[300px] w-[300px] rounded-full bg-gradient-orb-orange opacity-20 blur-3xl" />
          <div className="absolute top-[35%] left-[58%] h-[360px] w-[360px] rounded-full bg-gradient-orb-violet opacity-10 blur-3xl" />
        </div>

        <div className="container-site relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <FadeIn className="lg:col-span-7">
              <SectionLabel variant="blue">Analytics & Tracking</SectionLabel>

              <h1
                className="font-display font-bold text-ink mt-6 mb-6"
                style={{
                  fontSize: 'clamp(2.7rem, 6vw, 5.3rem)',
                  lineHeight: '0.96',
                  letterSpacing: '-0.05em',
                }}
              >
                Tracking engineered
                <span className="block text-gradient-brand">
                  as a data system.
                </span>
              </h1>

              <p className="text-lg lg:text-[1.15rem] text-ink-muted leading-relaxed max-w-2xl mb-8">
                We build advanced measurement systems across GTM, GA4, Meta Pixel,
                CAPI, dataLayer, server-side tracking, filters, attribution logic,
                and dashboards — so your marketing decisions are based on clean,
                trusted, production-grade data.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-brand-blue text-white font-semibold shadow-button hover:bg-brand-blue-dark hover:shadow-button-hover transition-all duration-200"
                >
                  Book a tracking audit
                  <ArrowRight size={16} />
                </Link>

                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-surface-border bg-white text-ink font-semibold hover:border-brand-blue-mid hover:bg-brand-blue-light hover:text-brand-blue transition-all duration-200"
                >
                  Back to services
                </Link>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl">
                {topMetrics.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-surface-border bg-white/90 backdrop-blur-sm p-4 shadow-card"
                  >
                    <div className="text-xl lg:text-2xl font-bold text-ink tracking-tight">
                      {item.value}
                    </div>
                    <div className="text-xs text-ink-muted mt-1">{item.label}</div>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.1} className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-[30px] border border-surface-border bg-white/90 shadow-[0_30px_80px_rgba(24,39,75,0.10)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.10),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(234,88,12,0.08),transparent_24%),linear-gradient(to_bottom,rgba(255,255,255,0.95),rgba(250,250,248,0.96))]" />

                <div className="relative p-6">
                  <div className="flex items-center justify-between mb-5">
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-ink-light font-semibold">
                        Tracking command layer
                      </p>
                      <h2 className="font-display font-bold text-ink text-xl mt-1">
                        GTM. GA4. CAPI. Server-side.
                      </h2>
                    </div>

                    <div className="rounded-full border border-surface-border bg-white px-3 py-1.5 text-xs font-semibold text-ink-secondary shadow-card">
                      Measurement stack
                    </div>
                  </div>

                  <div className="rounded-2xl border border-surface-border bg-white p-4 mb-4">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <p className="text-xs uppercase tracking-[0.16em] text-ink-light font-semibold">
                          Core tracking view
                        </p>
                        <p className="text-sm text-ink-muted mt-1">
                          Better decisions start with better signal quality.
                        </p>
                      </div>
                      <LineChart size={18} className="text-brand-blue" />
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                      <div className="rounded-xl border border-surface-border bg-surface-warm p-3">
                        <div className="text-[11px] text-ink-light mb-1">GA4</div>
                        <div className="text-lg font-bold text-brand-blue">Clean</div>
                      </div>
                      <div className="rounded-xl border border-surface-border bg-surface-warm p-3">
                        <div className="text-[11px] text-ink-light mb-1">CAPI</div>
                        <div className="text-lg font-bold text-emerald-600">Aligned</div>
                      </div>
                      <div className="rounded-xl border border-surface-border bg-surface-warm p-3">
                        <div className="text-[11px] text-ink-light mb-1">Events</div>
                        <div className="text-lg font-bold text-brand-orange">Reliable</div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div className="rounded-2xl border border-surface-border bg-white p-4 shadow-card">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-xl bg-brand-blue-light border border-brand-blue-mid/20 flex items-center justify-center">
                          <Server size={18} className="text-brand-blue" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-ink">Server-Side</div>
                          <div className="text-xs text-ink-muted">Addingwell / VPS / Docker</div>
                        </div>
                      </div>
                      <p className="text-sm text-ink-muted">
                        Better event routing, stronger control, and cleaner signal delivery.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-surface-border bg-white p-4 shadow-card">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-xl bg-brand-orange-light border border-brand-orange-mid/20 flex items-center justify-center">
                          <ShieldCheck size={18} className="text-brand-orange" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-ink">GA4 Governance</div>
                          <div className="text-xs text-ink-muted">Filters / exclusions / QA</div>
                        </div>
                      </div>
                      <p className="text-sm text-ink-muted">
                        Internal traffic and event pollution must be removed before analysis becomes trustworthy.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {['GTM', 'GA4', 'Pixel', 'CAPI', 'Server-Side', 'dataLayer'].map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 rounded-full border border-surface-border bg-white text-xs font-semibold text-ink-muted"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* What kills tracking quality */}
      <section className="section-pad bg-white border-t border-surface-border">
        <div className="container-site">
          <FadeIn className="mb-12 max-w-3xl">
            <SectionLabel variant="orange">What kills data quality</SectionLabel>
            <h2 className="font-display font-bold text-ink text-3xl mt-5 mb-5">
              Most analytics stacks fail before reporting even starts.
            </h2>
            <p className="text-ink-muted text-lg leading-relaxed">
              Broken governance, weak event design, bad server-side implementation,
              and missing QA create reporting that looks complete but cannot be trusted.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
            {problems.map((item) => (
              <FadeIn key={item}>
                <div className="rounded-2xl border border-surface-border bg-surface-warm p-6 h-full">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-brand-orange mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-ink-secondary leading-relaxed">{item}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* System architecture */}
      <section className="section-pad bg-surface-warm">
        <div className="container-site">
          <FadeIn className="mb-14 flex flex-col items-center text-center">
            <SectionLabel variant="blue">System architecture</SectionLabel>
            <h2 className="font-display font-bold text-ink text-3xl mt-5 mb-5">
              Our tracking system is built in layers.
            </h2>
            <p className="text-ink-muted text-lg leading-relaxed max-w-3xl">
              Measurement becomes reliable only when strategy, data model, tracking,
              server-side routing, governance, and monitoring work together.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {systemLayers.map((layer) => (
              <FadeIn key={layer.title}>
                <div className="rounded-2xl border border-surface-border bg-white p-6 h-full shadow-card hover:shadow-card-hover transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-brand-blue-light border border-brand-blue-mid/20 flex items-center justify-center mb-4">
                    <layer.icon size={20} className="text-brand-blue" />
                  </div>
                  <h3 className="font-display font-bold text-ink text-lg mb-3">
                    {layer.title}
                  </h3>
                  <p className="text-sm text-ink-muted leading-relaxed">
                    {layer.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Technical execution */}
      <section className="section-pad bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <FadeIn className="lg:col-span-5">
              <SectionLabel variant="blue">Technical execution</SectionLabel>
              <h2 className="font-display font-bold text-ink text-3xl mt-5 mb-5">
                Good tracking starts with a real tagging plan.
              </h2>
              <p className="text-ink-muted text-lg leading-relaxed">
                We design measurement around business logic first, then implement events,
                parameters, destinations, and data models in a way that can actually scale.
              </p>
            </FadeIn>

            <FadeIn delay={0.1} className="lg:col-span-7">
              <div className="grid sm:grid-cols-2 gap-4">
                {technicalExecution.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-surface-border bg-surface-warm p-5"
                  >
                    <div className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-brand-blue mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-ink-secondary leading-relaxed">{item}</span>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Server-side tracking */}
      <section className="section-pad bg-surface-warm border-y border-surface-border">
        <div className="container-site">
          <FadeIn className="mb-12 max-w-3xl">
            <SectionLabel variant="orange">Server-side architecture</SectionLabel>
            <h2 className="font-display font-bold text-ink text-3xl mt-5 mb-5">
              Server-side tracking is not one setup. It is an architecture choice.
            </h2>
            <p className="text-ink-muted text-lg leading-relaxed">
              Depending on your maturity, we can deploy through managed platforms like Addingwell
              or build a custom server-side setup on VPS / Docker for more control and flexibility.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6">
            {serverSideBlocks.map((item) => (
              <FadeIn key={item.title}>
                <div className="rounded-2xl border border-surface-border bg-white p-6 h-full">
                  <h3 className="font-display font-bold text-ink text-lg mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-ink-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-pad bg-white">
        <div className="container-site">
          <FadeIn className="mb-14 flex flex-col items-center text-center">
            <SectionLabel variant="blue">Execution timeline</SectionLabel>
            <h2 className="font-display font-bold text-ink text-3xl mt-5 mb-5">
              How we build the analytics machine.
            </h2>
            <p className="text-ink-muted text-lg max-w-3xl leading-relaxed">
              Reliable tracking is built in sequence — governance first, implementation second, monitoring always.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {timeline.map((item) => (
              <FadeIn key={item.step}>
                <div className="rounded-2xl border border-surface-border bg-surface-warm p-6 h-full relative overflow-hidden">
                  <div className="absolute top-0 left-0 h-1 w-full bg-gradient-brand" />
                  <div className="text-xs font-bold tracking-[0.18em] uppercase text-ink-light mb-3">
                    Step {item.step}
                  </div>
                  <h3 className="font-display font-bold text-ink text-lg mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-ink-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* GA4 governance */}
      <section className="section-pad bg-surface-warm">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <FadeIn className="lg:col-span-5">
              <SectionLabel variant="orange">GA4 governance</SectionLabel>
              <h2 className="font-display font-bold text-ink text-3xl mt-5 mb-5">
                GA4 only becomes useful when noise is removed.
              </h2>
              <p className="text-ink-muted text-lg leading-relaxed">
                Filters, internal traffic handling, attribution settings, conversion definitions,
                and debugging discipline all affect whether your reports can be trusted.
              </p>
            </FadeIn>

            <FadeIn delay={0.1} className="lg:col-span-7">
              <div className="grid sm:grid-cols-2 gap-5">
                {ga4Blocks.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-surface-border bg-white p-6"
                  >
                    <h3 className="font-display font-bold text-ink text-lg mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm text-ink-muted leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CAPI & Pixel */}
      <section className="section-pad bg-white border-t border-surface-border">
        <div className="container-site">
          <FadeIn className="mb-12 max-w-3xl">
            <SectionLabel variant="blue">Pixel & CAPI execution</SectionLabel>
            <h2 className="font-display font-bold text-ink text-3xl mt-5 mb-5">
              Meta performance depends on signal consistency.
            </h2>
            <p className="text-ink-muted text-lg leading-relaxed">
              Browser-only tracking is no longer enough. We improve Meta signal quality
              through stronger Pixel + CAPI alignment, event parity, and deduplication logic.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
            {capiBlocks.map((item) => (
              <FadeIn key={item}>
                <div className="rounded-2xl border border-surface-border bg-surface-warm p-6 h-full">
                  <div className="flex items-start gap-3">
                    <ShieldCheck size={18} className="text-brand-blue mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-ink-secondary leading-relaxed">{item}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Monitoring & dashboards */}
      <section className="section-pad bg-surface-warm">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <FadeIn className="lg:col-span-5">
              <SectionLabel variant="blue">Monitoring & dashboards</SectionLabel>
              <h2 className="font-display font-bold text-ink text-3xl mt-5 mb-5">
                Tracking is not finished when implementation is done.
              </h2>
              <p className="text-ink-muted text-lg leading-relaxed">
                We build dashboards and QA visibility layers so event failures,
                attribution discrepancies, or signal drops do not stay hidden for weeks.
              </p>
            </FadeIn>

            <FadeIn delay={0.1} className="lg:col-span-7">
              <div className="rounded-3xl border border-surface-border bg-white p-6 lg:p-8">
                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  {dashboardItems.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-surface-border bg-surface-warm p-4"
                    >
                      <div className="flex items-start gap-3">
                        <BarChart3 size={16} className="text-brand-blue mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-ink-secondary">{item}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="rounded-2xl border border-brand-blue-mid/20 bg-brand-blue-light p-5">
                  <div className="flex items-start gap-3">
                    <Bug size={16} className="text-brand-blue mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-brand-blue font-bold mb-2">
                        Optional advanced layer
                      </p>
                      <p className="text-sm text-ink-secondary leading-relaxed">
                        We can add alerting logic and operational QA workflows to catch missing events,
                        server-side issues, or analytics discrepancies earlier.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad bg-white">
        <div className="container-site">
          <FadeIn className="rounded-[32px] border border-surface-border bg-hero-mesh p-10 lg:p-14 text-center relative overflow-hidden">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -top-16 right-0 w-[260px] h-[260px] rounded-full bg-gradient-orb-blue opacity-20 blur-3xl" />
              <div className="absolute -bottom-16 left-0 w-[240px] h-[240px] rounded-full bg-gradient-orb-orange opacity-20 blur-3xl" />
            </div>

            <div className="relative z-10">
              <SectionLabel variant="blue">Tracking Audit</SectionLabel>
              <h2 className="font-display font-bold text-ink text-3xl lg:text-4xl mt-5 mb-5">
                Ready to rebuild your measurement layer properly?
              </h2>
              <p className="text-ink-muted text-lg max-w-2xl mx-auto leading-relaxed mb-8">
                We can audit your GTM, GA4, Pixel, CAPI, server-side architecture,
                tagging plan, filters, attribution, and dashboard logic — then show you exactly where the weak points are.
              </p>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-brand-blue text-white font-semibold shadow-button hover:bg-brand-blue-dark hover:shadow-button-hover transition-all duration-200"
              >
                Book a strategy call
                <ArrowRight size={16} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  )
}
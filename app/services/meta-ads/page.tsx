import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  CheckCircle2,
  BarChart3,
  Radar,
  Database,
  ShoppingCart,
  Workflow,
  Target,
  Layers3,
  LineChart,
} from 'lucide-react'
import { FadeIn } from '@/components/ui/FadeIn'
import { SectionLabel } from '@/components/ui/SectionLabel'

export const metadata: Metadata = {
  title: 'Meta Ads — Advanced Ecommerce Acquisition & Signal Architecture',
  description:
    'High-performance Meta Ads systems for ecommerce brands: ROAS optimization, Meta Pixel, Conversion API, catalog ads, XML feeds, A/B testing, attribution clarity, and automated dashboards.',
}

const topMetrics = [
  { value: '3.2×', label: 'ROAS uplift' },
  { value: '–42%', label: 'CAC reduction' },
  { value: '99.8%', label: 'Signal accuracy' },
  { value: 'Higher', label: 'Event match quality' },
]

const problemPoints = [
  'Broken or incomplete Meta Pixel implementation',
  'Weak CAPI setup with poor deduplication',
  'Low-quality catalog feed and unoptimized product sets',
  'Campaign decisions made on incomplete attribution',
  'Creative testing without a clear framework',
  'Scaling budgets before the signal layer is stable',
]

const systemLayers = [
  {
    icon: Radar,
    title: 'Signal Layer',
    description:
      'Meta Pixel, CAPI, event priorities, deduplication, match quality, browser + server-side event consistency.',
  },
  {
    icon: ShoppingCart,
    title: 'Feed Layer',
    description:
      'Catalog structure, XML feed quality, product availability, segmentation by margin, category, bestseller logic.',
  },
  {
    icon: Layers3,
    title: 'Campaign Layer',
    description:
      'Prospecting, retargeting, DPA, audience logic, budget allocation, campaign architecture built for scale.',
  },
  {
    icon: Target,
    title: 'Testing Layer',
    description:
      'Creative angle testing, hook variation, offer testing, landing page tests, audience signal comparison.',
  },
  {
    icon: BarChart3,
    title: 'Measurement Layer',
    description:
      'ROAS, MER, CAC, CPC, CVR, AOV, contribution by funnel stage, Meta vs GA4 vs backend reality checks.',
  },
  {
    icon: Workflow,
    title: 'Automation Layer',
    description:
      'Automated dashboards, anomaly alerts, reporting flows, operational automation, decision support systems.',
  },
]

const technicalStack = [
  'Meta Pixel',
  'Meta Conversion API',
  'GTM',
  'GA4',
  'Server-Side GTM',
  'Catalog Ads',
  'Dynamic Product Ads',
  'XML Product Feed',
  'Event Match Quality',
  'Deduplication Logic',
  'n8n / Make',
  'Automated Dashboards',
]

const timeline = [
  {
    step: '01',
    title: 'Audit & diagnosis',
    description:
      'We audit account structure, Meta Pixel, CAPI, feed quality, attribution gaps, campaign inefficiencies, and signal leakage.',
  },
  {
    step: '02',
    title: 'Tracking & CAPI rebuild',
    description:
      'We fix event architecture, deduplication, parameter quality, server-side signal routing, and match quality foundations.',
  },
  {
    step: '03',
    title: 'Catalog & feed optimization',
    description:
      'We improve feed hygiene, product categorization, XML consistency, dynamic set logic, and product-level ad readiness.',
  },
  {
    step: '04',
    title: 'Campaign architecture',
    description:
      'We structure prospecting, retargeting, creative testing, budget distribution, and ecommerce funnel-based campaign logic.',
  },
  {
    step: '05',
    title: 'Testing & scaling',
    description:
      'We run systematic A/B testing across creatives, hooks, formats, offers, audiences, and landing experiences.',
  },
  {
    step: '06',
    title: 'Dashboard & automation',
    description:
      'We centralize KPIs, automate reporting, and create visibility across Meta, GA4, and ecommerce backend performance.',
  },
]

const testingFramework = [
  {
    title: 'Creative testing',
    description:
      'Hooks, offers, UGC variations, static vs video, angle rotation, creative fatigue monitoring.',
  },
  {
    title: 'Audience testing',
    description:
      'Broad, lookalikes, interest layers, country splits, customer list exclusions, funnel logic by stage.',
  },
  {
    title: 'Offer testing',
    description:
      'Promo strategy, bundles, urgency logic, entry product vs hero product positioning.',
  },
  {
    title: 'Landing testing',
    description:
      'Collection page vs PDP, dedicated landing pages, product grouping, message continuity.',
  },
]

const ecommerceUseCases = [
  'Prospecting campaigns built around margin-friendly product groups',
  'Dynamic Product Ads with cleaner retargeting logic',
  'Catalog segmentation by category, bestseller, stock level, or profitability',
  'ViewContent / AddToCart / InitiateCheckout / Purchase tracking consistency',
  'Creative refresh systems to reduce fatigue and stabilize CPM/CPC pressure',
  'Backend-aware reporting to compare platform attribution with real sales',
]

const dashboardItems = [
  'Meta ROAS / spend / CPC / CPA / CVR',
  'MER and blended acquisition efficiency',
  'AOV and revenue contribution analysis',
  'Catalog and DPA performance visibility',
  'Meta vs GA4 vs store backend comparison',
  'Automated alerts for anomalies and signal drops',
]

export default function MetaAdsPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-hero-mesh pt-32 pb-20 lg:pt-36 lg:pb-24">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-32 right-[-80px] h-[420px] w-[420px] rounded-full bg-gradient-orb-blue opacity-30 blur-3xl" />
          <div className="absolute bottom-[-120px] left-[-60px] h-[300px] w-[300px] rounded-full bg-gradient-orb-orange opacity-20 blur-3xl" />
          <div className="absolute top-[30%] left-[55%] h-[360px] w-[360px] rounded-full bg-gradient-orb-violet opacity-10 blur-3xl" />
        </div>

        <div className="container-site relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <FadeIn className="lg:col-span-7">
              <SectionLabel variant="blue">Meta Ads</SectionLabel>

              <h1
                className="font-display font-bold text-ink mt-6 mb-6"
                style={{
                  fontSize: 'clamp(2.7rem, 6vw, 5.3rem)',
                  lineHeight: '0.96',
                  letterSpacing: '-0.05em',
                }}
              >
                Meta Ads engineered
                <span className="block text-gradient-brand">
                  for profitable scale.
                </span>
              </h1>

              <p className="text-lg lg:text-[1.15rem] text-ink-muted leading-relaxed max-w-2xl mb-8">
                We build advanced Meta Ads systems for ecommerce brands —
                combining ROAS optimization, creative testing, Meta Pixel,
                Conversion API, catalog architecture, XML feed quality,
                attribution clarity, and automated dashboards into one
                scalable acquisition machine.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-brand-blue text-white font-semibold shadow-button hover:bg-brand-blue-dark hover:shadow-button-hover transition-all duration-200"
                >
                  Book a Meta Ads audit
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
                        Meta command layer
                      </p>
                      <h2 className="font-display font-bold text-ink text-xl mt-1">
                        Scale with better signals
                      </h2>
                    </div>

                    <div className="rounded-full border border-surface-border bg-white px-3 py-1.5 text-xs font-semibold text-ink-secondary shadow-card">
                      Ecommerce focus
                    </div>
                  </div>

                  <div className="rounded-2xl border border-surface-border bg-white p-4 mb-4">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <p className="text-xs uppercase tracking-[0.16em] text-ink-light font-semibold">
                          Core performance view
                        </p>
                        <p className="text-sm text-ink-muted mt-1">
                          Meta efficiency starts with signal quality.
                        </p>
                      </div>
                      <LineChart size={18} className="text-brand-blue" />
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                      <div className="rounded-xl border border-surface-border bg-surface-warm p-3">
                        <div className="text-[11px] text-ink-light mb-1">ROAS</div>
                        <div className="text-lg font-bold text-brand-blue">3.2×</div>
                      </div>
                      <div className="rounded-xl border border-surface-border bg-surface-warm p-3">
                        <div className="text-[11px] text-ink-light mb-1">CPC</div>
                        <div className="text-lg font-bold text-brand-orange">Lower</div>
                      </div>
                      <div className="rounded-xl border border-surface-border bg-surface-warm p-3">
                        <div className="text-[11px] text-ink-light mb-1">CVR</div>
                        <div className="text-lg font-bold text-emerald-600">Higher</div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div className="rounded-2xl border border-surface-border bg-white p-4 shadow-card">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-xl bg-brand-blue-light border border-brand-blue-mid/20 flex items-center justify-center">
                          <Radar size={18} className="text-brand-blue" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-ink">Signal Architecture</div>
                          <div className="text-xs text-ink-muted">Pixel + CAPI + EMQ</div>
                        </div>
                      </div>
                      <p className="text-sm text-ink-muted">
                        Better signal quality improves optimization depth and stabilizes scaling.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-surface-border bg-white p-4 shadow-card">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-xl bg-brand-orange-light border border-brand-orange-mid/20 flex items-center justify-center">
                          <ShoppingCart size={18} className="text-brand-orange" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-ink">Catalog Layer</div>
                          <div className="text-xs text-ink-muted">DPA + XML Feed</div>
                        </div>
                      </div>
                      <p className="text-sm text-ink-muted">
                        Product feed structure directly affects DPA quality, retargeting, and product relevance.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {['Meta Pixel', 'CAPI', 'Catalog Ads', 'XML Feed', 'A/B Testing', 'Dashboard'].map(
                      (item) => (
                        <span
                          key={item}
                          className="px-3 py-1 rounded-full border border-surface-border bg-white text-xs font-semibold text-ink-muted"
                        >
                          {item}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* What kills performance */}
      <section className="section-pad bg-white border-t border-surface-border">
        <div className="container-site">
          <FadeIn className="mb-12 max-w-3xl">
            <SectionLabel variant="orange">What kills performance</SectionLabel>
            <h2 className="font-display font-bold text-ink text-3xl mt-5 mb-5">
              Most Meta accounts do not have an ads problem.
            </h2>
            <p className="text-ink-muted text-lg leading-relaxed">
              They have a signal problem, a feed problem, a measurement problem,
              or a testing problem. We fix the full system — not just the campaign settings.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
            {problemPoints.map((item) => (
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
              Our Meta Ads system is built in layers.
            </h2>
            <p className="text-ink-muted text-lg leading-relaxed max-w-3xl">
              Campaigns are only one layer. Performance actually comes from the way
              data, feed structure, testing, measurement, and automation work together.
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

      {/* Technical stack */}
      <section className="section-pad bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <FadeIn className="lg:col-span-5">
              <SectionLabel variant="blue">Advanced stack</SectionLabel>
              <h2 className="font-display font-bold text-ink text-3xl mt-5 mb-5">
                Technical execution that improves ROAS quality.
              </h2>
              <p className="text-ink-muted text-lg leading-relaxed mb-6">
                We go beyond campaign management. We work on the signal layer,
                ecommerce event architecture, feed logic, attribution reliability,
                and automated performance visibility.
              </p>

              <div className="rounded-2xl border border-surface-border bg-surface-warm p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-white border border-surface-border flex items-center justify-center">
                    <Database size={18} className="text-brand-blue" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-ink">Signal-first approach</p>
                    <p className="text-xs text-ink-muted">Meta needs better inputs, not blind scaling.</p>
                  </div>
                </div>

                <p className="text-sm text-ink-secondary leading-relaxed">
                  Better event quality improves learning, stronger product feeds improve DPA quality,
                  and cleaner measurement improves the decisions behind every budget increase.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.1} className="lg:col-span-7">
              <div className="grid sm:grid-cols-2 gap-4">
                {technicalStack.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-surface-border bg-white p-4 shadow-card"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-brand-blue-light border border-brand-blue-mid/20 flex items-center justify-center">
                        <CheckCircle2 size={14} className="text-brand-blue" />
                      </div>
                      <span className="text-sm font-medium text-ink">{item}</span>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-pad bg-surface-warm border-y border-surface-border">
        <div className="container-site">
          <FadeIn className="mb-14 flex flex-col items-center text-center">
            <SectionLabel variant="orange">Execution timeline</SectionLabel>
            <h2 className="font-display font-bold text-ink text-3xl mt-5 mb-5">
              How we build the Meta Ads machine.
            </h2>
            <p className="text-ink-muted text-lg max-w-3xl leading-relaxed">
              The best Meta results come from sequence and structure — not random optimization.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {timeline.map((item) => (
              <FadeIn key={item.step}>
                <div className="rounded-2xl border border-surface-border bg-white p-6 h-full relative overflow-hidden">
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

      {/* A/B testing */}
      <section className="section-pad bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <FadeIn className="lg:col-span-5">
              <SectionLabel variant="blue">A/B testing framework</SectionLabel>
              <h2 className="font-display font-bold text-ink text-3xl mt-5 mb-5">
                Testing is not random. It is engineered.
              </h2>
              <p className="text-ink-muted text-lg leading-relaxed">
                We create testing systems that isolate variables properly and give
                you clearer learnings across creatives, audiences, offers, and landing experiences.
              </p>
            </FadeIn>

            <FadeIn delay={0.1} className="lg:col-span-7">
              <div className="grid sm:grid-cols-2 gap-5">
                {testingFramework.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-surface-border bg-surface-warm p-6"
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

      {/* Ecommerce specifics */}
      <section className="section-pad bg-surface-warm">
        <div className="container-site">
          <FadeIn className="mb-12 max-w-3xl">
            <SectionLabel variant="orange">Ecommerce execution</SectionLabel>
            <h2 className="font-display font-bold text-ink text-3xl mt-5 mb-5">
              Built for ecommerce reality, not generic ads management.
            </h2>
            <p className="text-ink-muted text-lg leading-relaxed">
              Product feeds, dynamic ads, funnel events, AOV, margin, and backend revenue quality
              all matter. We build around the actual ecommerce engine.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
            {ecommerceUseCases.map((item) => (
              <FadeIn key={item}>
                <div className="rounded-2xl border border-surface-border bg-white p-6 h-full shadow-card">
                  <div className="flex items-start gap-3">
                    <ShoppingCart size={18} className="text-brand-blue mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-ink-secondary leading-relaxed">{item}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Automated dashboards */}
      <section className="section-pad bg-white border-t border-surface-border">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <FadeIn className="lg:col-span-5">
              <SectionLabel variant="blue">Reporting & MCP workflows</SectionLabel>
              <h2 className="font-display font-bold text-ink text-3xl mt-5 mb-5">
                Automated visibility for faster decisions.
              </h2>
              <p className="text-ink-muted text-lg leading-relaxed">
                We can centralize Meta Ads performance into a cleaner operating layer —
                with dashboards, alerts, automated reporting flows, and system-level visibility.
              </p>
            </FadeIn>

            <FadeIn delay={0.1} className="lg:col-span-7">
              <div className="rounded-3xl border border-surface-border bg-surface-warm p-6 lg:p-8">
                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  {dashboardItems.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-surface-border bg-white p-4"
                    >
                      <div className="flex items-start gap-3">
                        <BarChart3 size={16} className="text-brand-blue mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-ink-secondary">{item}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="rounded-2xl border border-brand-blue-mid/20 bg-brand-blue-light p-5">
                  <p className="text-xs uppercase tracking-[0.18em] text-brand-blue font-bold mb-2">
                    Optional advanced layer
                  </p>
                  <p className="text-sm text-ink-secondary leading-relaxed">
                    We can also plug Meta reporting into broader automation systems for notifications,
                    anomaly detection, KPI summaries, and executive-level reporting workflows.
                  </p>
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
              <SectionLabel variant="blue">Meta Ads Audit</SectionLabel>
              <h2 className="font-display font-bold text-ink text-3xl lg:text-4xl mt-5 mb-5">
                Ready to turn Meta into a real growth system?
              </h2>
              <p className="text-ink-muted text-lg max-w-2xl mx-auto leading-relaxed mb-8">
                We can audit your signal layer, campaign structure, catalog quality,
                testing framework, and reporting stack — then show you where the real performance lift is.
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
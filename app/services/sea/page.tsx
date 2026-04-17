import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  CheckCircle2,
  Search,
  BarChart3,
  LineChart,
  Target,
  ShoppingCart,
  Workflow,
  Database,
  Layers3,
} from 'lucide-react'
import { FadeIn } from '@/components/ui/FadeIn'
import { SectionLabel } from '@/components/ui/SectionLabel'

export const metadata: Metadata = {
  title: 'SEA / Google Ads — Search, PMAX, Ecommerce Tracking & Scalable Acquisition',
  description:
    'Advanced Google Ads systems for ecommerce and lead generation: Search, Performance Max, Display, keyword architecture, GTM, GA4, enhanced conversions, feed optimization, attribution clarity, and automated reporting.',
}

const topMetrics = [
  { value: 'Higher intent', label: 'Traffic quality' },
  { value: '–28%', label: 'CPA pressure' },
  { value: 'Cleaner', label: 'Search term control' },
  { value: 'Stable', label: 'Scale efficiency' },
]

const problemPoints = [
  'Search campaigns built without a real query architecture',
  'Performance Max launched without feed, tracking, or audience readiness',
  'Conversion tracking disconnected from business reality',
  'No clarity between branded, generic, competitor, and high-intent clusters',
  'Keyword expansion done blindly without search term discipline',
  'Budget scaling applied before the account structure is stable',
]

const systemLayers = [
  {
    icon: Search,
    title: 'Query Layer',
    description:
      'Keyword structure, search intent mapping, match-type logic, STAG / SKAG strategy, negatives, and search term sculpting.',
  },
  {
    icon: ShoppingCart,
    title: 'Commerce Layer',
    description:
      'Shopping and Performance Max built on feed quality, product grouping, margin logic, category segmentation, and ecommerce priorities.',
  },
  {
    icon: Target,
    title: 'Campaign Layer',
    description:
      'Search, PMAX, Display, remarketing, audience layering, and budget architecture designed around conversion intent.',
  },
  {
    icon: Database,
    title: 'Tracking Layer',
    description:
      'Google Ads conversion tracking, GTM, GA4, enhanced conversions, offline sync potential, and cleaner attribution.',
  },
  {
    icon: BarChart3,
    title: 'Measurement Layer',
    description:
      'ROAS, CPA, CVR, CPC, impression share, search term quality, PMAX asset performance, and channel contribution logic.',
  },
  {
    icon: Workflow,
    title: 'Automation Layer',
    description:
      'Bid strategy governance, scripts, dashboards, alerts, pacing logic, and reporting automation for faster decision-making.',
  },
]

const technicalStack = [
  'Google Ads',
  'Search Campaigns',
  'Performance Max',
  'Display Remarketing',
  'Google Merchant Center',
  'Product Feed Optimization',
  'Keyword Planner',
  'Semrush',
  'Search Console',
  'GTM',
  'GA4',
  'Enhanced Conversions',
]

const timeline = [
  {
    step: '01',
    title: 'Account & intent audit',
    description:
      'We audit search intent coverage, campaign structure, tracking quality, PMAX configuration, feed readiness, and search term leakage.',
  },
  {
    step: '02',
    title: 'Tracking & conversion rebuild',
    description:
      'We fix conversion tracking, GTM events, GA4 consistency, enhanced conversions, and business-aligned attribution logic.',
  },
  {
    step: '03',
    title: 'Keyword & query architecture',
    description:
      'We rebuild account logic across branded, generic, competitor, category, and high-intent keyword clusters.',
  },
  {
    step: '04',
    title: 'Campaign system design',
    description:
      'We structure Search, PMAX, Shopping, Display, and remarketing based on intent, margin, and conversion economics.',
  },
  {
    step: '05',
    title: 'Testing & optimization',
    description:
      'We test ads, landing pages, query clusters, asset groups, DKI logic, audience signals, and bid strategy behavior.',
  },
  {
    step: '06',
    title: 'Dashboard & scaling',
    description:
      'We centralize core KPIs, monitor efficiency, automate reporting, and scale what is truly profitable.',
  },
]

const rareTactics = [
  {
    title: 'Search term sculpting',
    description:
      'We actively shape intent flow with negative keyword logic to improve control across campaigns and protect budget quality.',
  },
  {
    title: 'STAG / controlled SKAG logic',
    description:
      'Where useful, we isolate high-value terms or tightly themed groups to sharpen copy relevance and bid control.',
  },
  {
    title: 'DKI with intent discipline',
    description:
      'Dynamic keyword insertion is used selectively — only where relevance helps, never where it breaks messaging quality.',
  },
  {
    title: 'PMAX with feed intelligence',
    description:
      'We do not treat PMAX as magic. Product feed structure, margin logic, exclusions, and asset discipline matter.',
  },
]

const ecommerceUseCases = [
  'Search campaigns mapped by category, product intent, brand, competitor, and commercial search depth',
  'Performance Max configured around feed quality and business priorities rather than default automation',
  'Shopping / PMAX logic aligned with bestseller, stock, profitability, and seasonality',
  'Enhanced conversions and ecommerce tracking set up for better signal depth',
  'Search term review processes to control waste and uncover scaling opportunities',
  'Remarketing and Display layers used as part of a controlled funnel, not as random add-ons',
]

const dashboardItems = [
  'CPC / CPA / CVR / ROAS performance visibility',
  'Brand vs non-brand efficiency split',
  'Search term waste and intent quality tracking',
  'PMAX / Shopping contribution analysis',
  'Feed-driven performance review by product group',
  'GA4 vs Google Ads conversion comparison',
]

const toolCards = [
  {
    title: 'Semrush',
    description:
      'Keyword gap analysis, competitor discovery, SERP behavior, demand mapping, and strategic opportunity identification.',
  },
  {
    title: 'Google Keyword Planner',
    description:
      'Volume estimation, cluster validation, commercial intent modeling, and campaign build input.',
  },
  {
    title: 'Search Console',
    description:
      'Organic query intelligence used to enrich paid search coverage and identify high-intent opportunities.',
  },
]

export default function SeaPage() {
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
              <SectionLabel variant="blue">SEA / Google Ads</SectionLabel>

              <h1
                className="font-display font-bold text-ink mt-6 mb-6"
                style={{
                  fontSize: 'clamp(2.7rem, 6vw, 5.3rem)',
                  lineHeight: '0.96',
                  letterSpacing: '-0.05em',
                }}
              >
                Google Ads systems
                <span className="block text-gradient-brand">
                  built for scalable intent.
                </span>
              </h1>

              <p className="text-lg lg:text-[1.15rem] text-ink-muted leading-relaxed max-w-2xl mb-8">
                We build advanced Google Ads systems across Search, Performance Max,
                Display, Shopping, and remarketing — combining keyword architecture,
                GTM, GA4, enhanced conversions, feed optimization, and performance
                reporting into a cleaner acquisition engine.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-brand-blue text-white font-semibold shadow-button hover:bg-brand-blue-dark hover:shadow-button-hover transition-all duration-200"
                >
                  Book a SEA audit
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
                        Search command layer
                      </p>
                      <h2 className="font-display font-bold text-ink text-xl mt-1">
                        Intent. Tracking. Scale.
                      </h2>
                    </div>

                    <div className="rounded-full border border-surface-border bg-white px-3 py-1.5 text-xs font-semibold text-ink-secondary shadow-card">
                      Search + PMAX
                    </div>
                  </div>

                  <div className="rounded-2xl border border-surface-border bg-white p-4 mb-4">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <p className="text-xs uppercase tracking-[0.16em] text-ink-light font-semibold">
                          Core efficiency view
                        </p>
                        <p className="text-sm text-ink-muted mt-1">
                          Better structure improves better bidding outcomes.
                        </p>
                      </div>
                      <LineChart size={18} className="text-brand-blue" />
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                      <div className="rounded-xl border border-surface-border bg-surface-warm p-3">
                        <div className="text-[11px] text-ink-light mb-1">CPC</div>
                        <div className="text-lg font-bold text-brand-blue">Controlled</div>
                      </div>
                      <div className="rounded-xl border border-surface-border bg-surface-warm p-3">
                        <div className="text-[11px] text-ink-light mb-1">CVR</div>
                        <div className="text-lg font-bold text-emerald-600">Higher</div>
                      </div>
                      <div className="rounded-xl border border-surface-border bg-surface-warm p-3">
                        <div className="text-[11px] text-ink-light mb-1">ROAS</div>
                        <div className="text-lg font-bold text-brand-orange">Stronger</div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div className="rounded-2xl border border-surface-border bg-white p-4 shadow-card">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-xl bg-brand-blue-light border border-brand-blue-mid/20 flex items-center justify-center">
                          <Search size={18} className="text-brand-blue" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-ink">Query Architecture</div>
                          <div className="text-xs text-ink-muted">Intent clusters + negatives</div>
                        </div>
                      </div>
                      <p className="text-sm text-ink-muted">
                        Search performance depends on the structure behind the keywords, not just bids.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-surface-border bg-white p-4 shadow-card">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-xl bg-brand-orange-light border border-brand-orange-mid/20 flex items-center justify-center">
                          <ShoppingCart size={18} className="text-brand-orange" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-ink">Commerce Layer</div>
                          <div className="text-xs text-ink-muted">PMAX + feed + merchant logic</div>
                        </div>
                      </div>
                      <p className="text-sm text-ink-muted">
                        PMAX and Shopping perform better when feed structure matches business priorities.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {['Search', 'PMAX', 'Shopping', 'Enhanced Conv.', 'GTM', 'GA4'].map((item) => (
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

      {/* What kills performance */}
      <section className="section-pad bg-white border-t border-surface-border">
        <div className="container-site">
          <FadeIn className="mb-12 max-w-3xl">
            <SectionLabel variant="orange">What kills efficiency</SectionLabel>
            <h2 className="font-display font-bold text-ink text-3xl mt-5 mb-5">
              Most Google Ads accounts are not structured to learn well.
            </h2>
            <p className="text-ink-muted text-lg leading-relaxed">
              Weak query architecture, poor conversion signals, shallow PMAX setups,
              and no search-term discipline create wasted spend long before scaling becomes possible.
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
              Our SEA system is built in layers.
            </h2>
            <p className="text-ink-muted text-lg leading-relaxed max-w-3xl">
              Search performance improves when keyword architecture, feed quality, tracking,
              and measurement work together — not when campaigns are optimized in isolation.
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

      {/* Advanced tactics */}
      <section className="section-pad bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <FadeIn className="lg:col-span-5">
              <SectionLabel variant="blue">Advanced tactics</SectionLabel>
              <h2 className="font-display font-bold text-ink text-3xl mt-5 mb-5">
                Rare agency-level details that change the result.
              </h2>
              <p className="text-ink-muted text-lg leading-relaxed">
                The difference is rarely one setting. It is usually a set of structural decisions
                that improve query control, message relevance, conversion quality, and scale behavior.
              </p>
            </FadeIn>

            <FadeIn delay={0.1} className="lg:col-span-7">
              <div className="grid sm:grid-cols-2 gap-5">
                {rareTactics.map((item) => (
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

      {/* Technical stack */}
      <section className="section-pad bg-surface-warm border-y border-surface-border">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <FadeIn className="lg:col-span-5">
              <SectionLabel variant="orange">Tracking & tooling</SectionLabel>
              <h2 className="font-display font-bold text-ink text-3xl mt-5 mb-5">
                Better bidding starts with better inputs.
              </h2>
              <p className="text-ink-muted text-lg leading-relaxed mb-6">
                We improve Google Ads performance through stronger conversion architecture,
                enhanced conversions, cleaner GA4 alignment, and better feed + merchant execution.
              </p>

              <div className="rounded-2xl border border-surface-border bg-white p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-brand-blue-light border border-brand-blue-mid/20 flex items-center justify-center">
                    <Database size={18} className="text-brand-blue" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-ink">Tracking-first discipline</p>
                    <p className="text-xs text-ink-muted">Google Ads learns better with better conversion quality.</p>
                  </div>
                </div>

                <p className="text-sm text-ink-secondary leading-relaxed">
                  We align Google Ads, GTM, GA4, ecommerce events, and enhanced conversions
                  so the bidding system receives stronger, more usable signals.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.1} className="lg:col-span-7">
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
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

              <div className="grid sm:grid-cols-3 gap-4">
                {toolCards.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-surface-border bg-white p-5"
                  >
                    <h3 className="font-semibold text-ink mb-2">{item.title}</h3>
                    <p className="text-sm text-ink-muted leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-pad bg-white">
        <div className="container-site">
          <FadeIn className="mb-14 flex flex-col items-center text-center">
            <SectionLabel variant="blue">Execution timeline</SectionLabel>
            <h2 className="font-display font-bold text-ink text-3xl mt-5 mb-5">
              How we build the Google Ads machine.
            </h2>
            <p className="text-ink-muted text-lg max-w-3xl leading-relaxed">
              We do not jump straight into bidding changes. We rebuild the system in the right order.
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

      {/* Ecommerce specifics */}
      <section className="section-pad bg-surface-warm">
        <div className="container-site">
          <FadeIn className="mb-12 max-w-3xl">
            <SectionLabel variant="orange">Ecommerce execution</SectionLabel>
            <h2 className="font-display font-bold text-ink text-3xl mt-5 mb-5">
              Built for real ecommerce economics.
            </h2>
            <p className="text-ink-muted text-lg leading-relaxed">
              Search and PMAX only become profitable at scale when campaign logic reflects
              product reality, feed structure, conversion depth, and margin discipline.
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

      {/* Reporting */}
      <section className="section-pad bg-white border-t border-surface-border">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <FadeIn className="lg:col-span-5">
              <SectionLabel variant="blue">Reporting & automation</SectionLabel>
              <h2 className="font-display font-bold text-ink text-3xl mt-5 mb-5">
                Better decisions need cleaner visibility.
              </h2>
              <p className="text-ink-muted text-lg leading-relaxed">
                We can centralize Search, PMAX, Shopping, and ecommerce efficiency metrics
                into automated dashboards and reporting systems built for operational clarity.
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
                    We can also connect Google Ads performance into broader automation workflows for
                    reporting, anomaly alerts, budget pacing visibility, and executive-level summaries.
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
              <SectionLabel variant="blue">SEA Audit</SectionLabel>
              <h2 className="font-display font-bold text-ink text-3xl lg:text-4xl mt-5 mb-5">
                Ready to rebuild Google Ads as a real acquisition system?
              </h2>
              <p className="text-ink-muted text-lg max-w-2xl mx-auto leading-relaxed mb-8">
                We can audit your search intent structure, PMAX readiness, conversion tracking,
                feed quality, and efficiency layer — then show you where the next performance lift is.
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
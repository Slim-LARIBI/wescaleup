import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  Search,
  Activity,
  Database,
  LineChart,
  Globe,
  Workflow,
  CheckCircle2,
  Layers3,
  Bot,
  FileSearch,
  Gauge,
} from 'lucide-react'
import { FadeIn } from '@/components/ui/FadeIn'
import { SectionLabel } from '@/components/ui/SectionLabel'

export const metadata: Metadata = {
  title: 'SEO — Technical, Semantic, GEO & Automation Systems',
  description:
    'Advanced SEO systems combining technical SEO, semantic architecture, Core Web Vitals, GEO SEO, Search Console pipelines, Google Apps Script, n8n workflows, and performance dashboards.',
}

const topMetrics = [
  { value: '+220%', label: 'Organic growth potential' },
  { value: 'Faster', label: 'Indexation clarity' },
  { value: 'Higher', label: 'Traffic quality' },
  { value: 'Scalable', label: 'Content operations' },
]

const problems = [
  'Pages exist but Google is not indexing the right ones',
  'Core Web Vitals degrade rankings and weaken UX',
  'Search intent is mixed across pages, categories, and articles',
  'Internal linking does not distribute authority strategically',
  'SEO reporting does not connect traffic to conversions or revenue',
  'Too much manual SEO work with no automation or alerting layer',
]

const systemLayers = [
  {
    icon: FileSearch,
    title: 'Technical Layer',
    description:
      'Crawlability, indexation, rendering, structured data, canonicals, sitemap, robots, faceted navigation, and architecture control.',
  },
  {
    icon: Search,
    title: 'Semantic Layer',
    description:
      'Search intent clustering, SERP mapping, topical structure, keyword hierarchy, and content architecture aligned with demand.',
  },
  {
    icon: Layers3,
    title: 'Authority Layer',
    description:
      'Internal linking sculpting, page hierarchy, content hubs, category support pages, and authority distribution by business priority.',
  },
  {
    icon: Gauge,
    title: 'Performance Layer',
    description:
      'Core Web Vitals, rendering performance, JS behavior, LCP/CLS/INP optimization, image strategy, and server response efficiency.',
  },
  {
    icon: Database,
    title: 'Tracking Layer',
    description:
      'Search Console, GA4, landing page performance, conversion visibility, assisted value, and organic contribution measurement.',
  },
  {
    icon: Workflow,
    title: 'Automation Layer',
    description:
      'Apps Script, n8n workflows, SEO reporting pipelines, ranking alerts, indexation monitoring, and operational automation.',
  },
]

const technicalExecution = [
  'Full crawl audit with URL segmentation by type and priority',
  'Indexation analysis: indexed vs. useful pages vs. waste pages',
  'Canonical, duplicate, pagination, and thin content cleanup',
  'JavaScript rendering checks and crawl path optimization',
  'Core Web Vitals remediation roadmap (LCP / CLS / INP)',
  'Structured data implementation (Product, FAQ, Breadcrumb, Article)',
  'Robots.txt and sitemap logic review',
  'Internal linking architecture by intent and commercial priority',
]

const timeline = [
  {
    step: '01',
    title: 'Audit & crawl diagnosis',
    description:
      'We audit technical health, crawlability, indexation, rendering, keyword structure, content depth, and organic conversion gaps.',
  },
  {
    step: '02',
    title: 'Technical cleanup',
    description:
      'We fix the foundation: indexing logic, canonicals, schema, CWV priorities, page waste, and crawl structure.',
  },
  {
    step: '03',
    title: 'Semantic architecture',
    description:
      'We map search intent clusters, assign keyword ownership, structure pages correctly, and reduce SERP cannibalization.',
  },
  {
    step: '04',
    title: 'Content system design',
    description:
      'We define content hubs, supporting pages, internal linking, and scale paths for long-tail and category-level visibility.',
  },
  {
    step: '05',
    title: 'Tracking & dashboards',
    description:
      'We connect Search Console, GA4, rankings, landing pages, and conversion visibility into a cleaner reporting layer.',
  },
  {
    step: '06',
    title: 'Scale & automate',
    description:
      'We automate reporting, monitoring, and repetitive SEO operations with Apps Script and n8n where relevant.',
  },
]

const advancedBlocks = [
  {
    title: 'Core Web Vitals engineering',
    description:
      'We optimize LCP, CLS, and INP through asset loading strategy, image sizing, critical rendering path work, and frontend cleanup.',
  },
  {
    title: 'Search intent clustering',
    description:
      'We do not target isolated keywords. We cluster intent, define page ownership, and build authority through semantic structure.',
  },
  {
    title: 'Programmatic & scalable SEO',
    description:
      'When the business model supports it, we design scalable page generation systems aligned with real search demand.',
  },
  {
    title: 'Internal linking sculpting',
    description:
      'We redistribute internal authority strategically to support the URLs that matter most commercially.',
  },
]

const automationItems = [
  'Google Search Console API pipelines into Google Sheets / dashboards',
  'Google Apps Script for automated SEO reporting and ranking snapshots',
  'n8n workflows for indexation alerts, drops, and SEO task automation',
  'Landing page monitoring and keyword movement reporting',
  'Technical health reporting with recurring visibility into SEO operations',
  'Executive dashboards combining traffic, rankings, and conversion quality',
]

const geoItems = [
  'Local SEO and geo-intent query targeting',
  'Multi-country SEO strategy and hreflang structure',
  'Regional content clusters aligned with local search behavior',
  'Location landing page architecture for scalable GEO visibility',
  'Search demand segmentation by city, country, or language',
  'International SEO governance for growing markets',
]

export default function SeoPage() {
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
              <SectionLabel variant="blue">SEO Systems</SectionLabel>

              <h1
                className="font-display font-bold text-ink mt-6 mb-6"
                style={{
                  fontSize: 'clamp(2.7rem, 6vw, 5.3rem)',
                  lineHeight: '0.96',
                  letterSpacing: '-0.05em',
                }}
              >
                SEO engineered
                <span className="block text-gradient-brand">
                  as a growth system.
                </span>
              </h1>

              <p className="text-lg lg:text-[1.15rem] text-ink-muted leading-relaxed max-w-2xl mb-8">
                We do not do checklist SEO. We build technical, semantic, and
                operational SEO systems — where crawl health, Core Web Vitals,
                search intent structure, GEO strategy, automation, and reporting
                work together to create scalable organic growth.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-brand-blue text-white font-semibold shadow-button hover:bg-brand-blue-dark hover:shadow-button-hover transition-all duration-200"
                >
                  Book an SEO audit
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
                        SEO command layer
                      </p>
                      <h2 className="font-display font-bold text-ink text-xl mt-1">
                        Technical. Semantic. Measurable.
                      </h2>
                    </div>

                    <div className="rounded-full border border-surface-border bg-white px-3 py-1.5 text-xs font-semibold text-ink-secondary shadow-card">
                      Organic growth
                    </div>
                  </div>

                  <div className="rounded-2xl border border-surface-border bg-white p-4 mb-4">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <p className="text-xs uppercase tracking-[0.16em] text-ink-light font-semibold">
                          Health overview
                        </p>
                        <p className="text-sm text-ink-muted mt-1">
                          Rankings improve when structure improves.
                        </p>
                      </div>
                      <LineChart size={18} className="text-brand-blue" />
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                      <div className="rounded-xl border border-surface-border bg-surface-warm p-3">
                        <div className="text-[11px] text-ink-light mb-1">Indexation</div>
                        <div className="text-lg font-bold text-brand-blue">Cleaner</div>
                      </div>
                      <div className="rounded-xl border border-surface-border bg-surface-warm p-3">
                        <div className="text-[11px] text-ink-light mb-1">CWV</div>
                        <div className="text-lg font-bold text-emerald-600">Stronger</div>
                      </div>
                      <div className="rounded-xl border border-surface-border bg-surface-warm p-3">
                        <div className="text-[11px] text-ink-light mb-1">Visibility</div>
                        <div className="text-lg font-bold text-brand-orange">Higher</div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div className="rounded-2xl border border-surface-border bg-white p-4 shadow-card">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-xl bg-brand-blue-light border border-brand-blue-mid/20 flex items-center justify-center">
                          <Activity size={18} className="text-brand-blue" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-ink">Core Web Vitals</div>
                          <div className="text-xs text-ink-muted">LCP · CLS · INP</div>
                        </div>
                      </div>
                      <p className="text-sm text-ink-muted">
                        Better UX and rendering stability reinforce rankings and conversion quality.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-surface-border bg-white p-4 shadow-card">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-xl bg-brand-orange-light border border-brand-orange-mid/20 flex items-center justify-center">
                          <Bot size={18} className="text-brand-orange" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-ink">Automation Ops</div>
                          <div className="text-xs text-ink-muted">Apps Script · n8n</div>
                        </div>
                      </div>
                      <p className="text-sm text-ink-muted">
                        Reporting, monitoring, and SEO operations can be scaled with automation.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {['GSC', 'GA4', 'Apps Script', 'n8n', 'Schema', 'CWV'].map((item) => (
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

      {/* What kills SEO performance */}
      <section className="section-pad bg-white border-t border-surface-border">
        <div className="container-site">
          <FadeIn className="mb-12 max-w-3xl">
            <SectionLabel variant="orange">What kills performance</SectionLabel>
            <h2 className="font-display font-bold text-ink text-3xl mt-5 mb-5">
              Most SEO underperforms because the system is fragmented.
            </h2>
            <p className="text-ink-muted text-lg leading-relaxed">
              Rankings do not improve consistently when technical health, semantic structure,
              internal linking, and measurement are treated as separate tasks.
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
              Our SEO system is built in layers.
            </h2>
            <p className="text-ink-muted text-lg leading-relaxed max-w-3xl">
              Sustainable organic growth comes from the interaction between technical quality,
              semantic clarity, authority structure, performance, reporting, and automation.
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
                Technical SEO is not a checklist.
              </h2>
              <p className="text-ink-muted text-lg leading-relaxed">
                We treat technical SEO as a performance layer that affects crawl efficiency,
                page eligibility, rendering, UX, and the ability of Google to trust and rank the right URLs.
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

      {/* Timeline */}
      <section className="section-pad bg-surface-warm border-y border-surface-border">
        <div className="container-site">
          <FadeIn className="mb-14 flex flex-col items-center text-center">
            <SectionLabel variant="orange">Execution timeline</SectionLabel>
            <h2 className="font-display font-bold text-ink text-3xl mt-5 mb-5">
              How we build the SEO machine.
            </h2>
            <p className="text-ink-muted text-lg max-w-3xl leading-relaxed">
              Real SEO growth is built in sequence — diagnosis first, then structure, then scale.
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

      {/* Advanced blocks */}
      <section className="section-pad bg-white">
        <div className="container-site">
          <FadeIn className="mb-12 max-w-3xl">
            <SectionLabel variant="blue">Advanced execution</SectionLabel>
            <h2 className="font-display font-bold text-ink text-3xl mt-5 mb-5">
              Beyond basic SEO tasks.
            </h2>
            <p className="text-ink-muted text-lg leading-relaxed">
              We work on the layers that most teams skip — the ones that create structural ranking advantage.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6">
            {advancedBlocks.map((item) => (
              <FadeIn key={item.title}>
                <div className="rounded-2xl border border-surface-border bg-surface-warm p-6 h-full">
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

      {/* Automation & reporting */}
      <section className="section-pad bg-surface-warm">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <FadeIn className="lg:col-span-5">
              <SectionLabel variant="orange">Automation & reporting</SectionLabel>
              <h2 className="font-display font-bold text-ink text-3xl mt-5 mb-5">
                SEO operations become stronger when they become measurable.
              </h2>
              <p className="text-ink-muted text-lg leading-relaxed">
                We can automate repetitive SEO reporting, track keyword and page performance,
                monitor drops, and centralize organic visibility into a cleaner decision layer.
              </p>
            </FadeIn>

            <FadeIn delay={0.1} className="lg:col-span-7">
              <div className="rounded-3xl border border-surface-border bg-white p-6 lg:p-8">
                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  {automationItems.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-surface-border bg-surface-warm p-4"
                    >
                      <div className="flex items-start gap-3">
                        <Workflow size={16} className="text-brand-blue mt-0.5 flex-shrink-0" />
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
                    We can also connect SEO reporting into broader operating workflows for alerts,
                    summaries, SEO issue monitoring, and decision support automation.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* GEO SEO */}
      <section className="section-pad bg-white border-t border-surface-border">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <FadeIn className="lg:col-span-5">
              <SectionLabel variant="blue">GEO SEO</SectionLabel>
              <h2 className="font-display font-bold text-ink text-3xl mt-5 mb-5">
                Organic visibility can also be engineered geographically.
              </h2>
              <p className="text-ink-muted text-lg leading-relaxed">
                GEO SEO matters when your demand is regional, local, multilingual, or international.
                We structure this layer with intent, geography, and language in mind.
              </p>
            </FadeIn>

            <FadeIn delay={0.1} className="lg:col-span-7">
              <div className="grid sm:grid-cols-2 gap-4">
                {geoItems.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-surface-border bg-surface-warm p-5"
                  >
                    <div className="flex items-start gap-3">
                      <Globe size={16} className="text-brand-blue mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-ink-secondary leading-relaxed">{item}</span>
                    </div>
                  </div>
                ))}
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
              <SectionLabel variant="blue">SEO Audit</SectionLabel>
              <h2 className="font-display font-bold text-ink text-3xl lg:text-4xl mt-5 mb-5">
                Ready to turn SEO into a real growth system?
              </h2>
              <p className="text-ink-muted text-lg max-w-2xl mx-auto leading-relaxed mb-8">
                We can audit your crawl layer, Core Web Vitals, semantic structure,
                internal linking, GEO strategy, and reporting stack — then show you where the real lift is.
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
import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  CheckCircle2,
  Workflow,
  Bot,
  Database,
  LineChart,
  BellRing,
  Route,
  PlugZap,
  Boxes,
  Clock3,
  ShieldCheck,
} from 'lucide-react'
import { FadeIn } from '@/components/ui/FadeIn'
import { SectionLabel } from '@/components/ui/SectionLabel'

export const metadata: Metadata = {
  title: 'Marketing Automation — n8n, Make, Apps Script & Operational Workflows',
  description:
    'Advanced automation systems using n8n, Make, Google Apps Script, APIs, webhooks, CRM routing, dashboards, alerts, and operational workflows built for scale.',
}

const topMetrics = [
  { value: '24/7', label: 'Workflow execution' },
  { value: 'Faster', label: 'Team operations' },
  { value: 'Less', label: 'Manual errors' },
  { value: 'Scalable', label: 'Process layer' },
]

const problems = [
  'Manual lead routing slows down sales and marketing response time',
  'Teams copy-paste data between tools with no workflow orchestration',
  'Reporting still depends on manual exports and spreadsheets',
  'Notifications are reactive instead of system-driven',
  'CRM, ads, forms, and internal tools are disconnected',
  'Operations grow, but internal processes do not scale with them',
]

const systemLayers = [
  {
    icon: Workflow,
    title: 'Workflow Architecture',
    description:
      'We map processes end-to-end, define triggers, actions, decision logic, fallbacks, and monitoring requirements.',
  },
  {
    icon: PlugZap,
    title: 'Integrations Layer',
    description:
      'APIs, webhooks, SaaS connectors, Google Workspace, CRM tools, ad platforms, and internal systems connected cleanly.',
  },
  {
    icon: Route,
    title: 'Routing Layer',
    description:
      'Lead assignment, lifecycle movement, enrichment flows, internal approvals, and task routing based on rules and events.',
  },
  {
    icon: BellRing,
    title: 'Alerting Layer',
    description:
      'Operational notifications, anomaly alerts, Slack / email updates, KPI warnings, and issue escalation workflows.',
  },
  {
    icon: Database,
    title: 'Data Layer',
    description:
      'Data sync, normalization, field mapping, deduplication, source consistency, and cross-tool reliability.',
  },
  {
    icon: ShieldCheck,
    title: 'Governance Layer',
    description:
      'Error handling, retry logic, fallback rules, auditability, logging, and automation resilience for production use.',
  },
]

const technicalExecution = [
  'n8n workflow design and production-ready orchestration',
  'Make scenarios for marketing, CRM, reporting, and internal ops',
  'Google Apps Script automations inside Sheets / Drive / Gmail / Calendar',
  'Webhook handling and API-to-API process execution',
  'Lead routing by form source, country, product, or commercial priority',
  'Data sync between CRM, ads, analytics, and reporting layers',
  'Automated KPI reporting and scheduled performance summaries',
  'Error handling, retry logic, logging, and workflow QA',
]

const orchestrationBlocks = [
  {
    title: 'Lead routing systems',
    description:
      'Assign leads automatically by geography, funnel stage, service type, score, language, or owner logic.',
  },
  {
    title: 'Marketing automation',
    description:
      'Trigger actions after form submissions, CRM updates, campaign events, purchase flows, or segmentation changes.',
  },
  {
    title: 'Reporting pipelines',
    description:
      'Push KPIs from multiple tools into Sheets, dashboards, email summaries, or executive reporting layers automatically.',
  },
  {
    title: 'Ops automation',
    description:
      'Reduce repetitive tasks across internal operations, content workflows, data checks, notifications, and status updates.',
  },
]

const timeline = [
  {
    step: '01',
    title: 'Process audit',
    description:
      'We map the current workflow, identify bottlenecks, duplicated work, delays, missing triggers, and fragile manual steps.',
  },
  {
    step: '02',
    title: 'Logic & architecture',
    description:
      'We design the automation logic: triggers, conditions, actions, routing rules, data structure, and edge-case handling.',
  },
  {
    step: '03',
    title: 'Integration build',
    description:
      'We connect tools through APIs, webhooks, n8n, Make, Apps Script, and custom logic where required.',
  },
  {
    step: '04',
    title: 'Validation & QA',
    description:
      'We test workflow stability, fallback behavior, data mapping accuracy, notification logic, and operational reliability.',
  },
  {
    step: '05',
    title: 'Monitoring & alerting',
    description:
      'We add reporting visibility, issue detection, anomaly alerts, and governance so automations can be trusted over time.',
  },
  {
    step: '06',
    title: 'Scale & extend',
    description:
      'Once workflows are stable, we extend automation to adjacent functions: sales, reporting, operations, marketing, and support.',
  },
]

const advancedBlocks = [
  {
    title: 'n8n orchestration',
    description:
      'For flexible, logic-heavy automations where branching, API depth, and operational control matter.',
  },
  {
    title: 'Make scenarios',
    description:
      'For fast-moving workflow automation where SaaS integrations and visual execution speed are priorities.',
  },
  {
    title: 'Google Apps Script',
    description:
      'For spreadsheet operations, reporting automation, lightweight data pipelines, and Google Workspace workflows.',
  },
  {
    title: 'MCP / multi-step process logic',
    description:
      'For orchestrated flows where multiple agents, actions, tools, or states need to coordinate across a business process.',
  },
]

const useCases = [
  'Auto-send enriched leads into CRM and assign them instantly',
  'Generate KPI reports every morning without manual exports',
  'Notify teams when CPL spikes, spend shifts, or tracking breaks',
  'Sync form data, CRM stages, analytics, and reporting automatically',
  'Create internal content or task workflows after approval events',
  'Run operational workflows triggered by purchases, pipeline changes, or business alerts',
]

const dashboardItems = [
  'Workflow execution status and success rate',
  'Lead routing and conversion operations visibility',
  'Error logs and retry monitoring',
  'Reporting automation status by source',
  'Cross-tool sync health and failure points',
  'Executive summaries and scheduled KPI reports',
]

export default function AutomationPage() {
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
              <SectionLabel variant="blue">Automation Systems</SectionLabel>

              <h1
                className="font-display font-bold text-ink mt-6 mb-6"
                style={{
                  fontSize: 'clamp(2.7rem, 6vw, 5.3rem)',
                  lineHeight: '0.96',
                  letterSpacing: '-0.05em',
                }}
              >
                Automation engineered
                <span className="block text-gradient-brand">
                  as an operating system.
                </span>
              </h1>

              <p className="text-lg lg:text-[1.15rem] text-ink-muted leading-relaxed max-w-2xl mb-8">
                We build automation systems across n8n, Make, Google Apps Script,
                APIs, webhooks, CRM flows, reporting pipelines, alerts, and internal
                processes — so your business moves faster with less manual friction
                and more operational control.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-brand-blue text-white font-semibold shadow-button hover:bg-brand-blue-dark hover:shadow-button-hover transition-all duration-200"
                >
                  Book an automation audit
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
                        Automation command layer
                      </p>
                      <h2 className="font-display font-bold text-ink text-xl mt-1">
                        Flows. Routing. Visibility.
                      </h2>
                    </div>

                    <div className="rounded-full border border-surface-border bg-white px-3 py-1.5 text-xs font-semibold text-ink-secondary shadow-card">
                      n8n / Make / Apps Script
                    </div>
                  </div>

                  <div className="rounded-2xl border border-surface-border bg-white p-4 mb-4">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <p className="text-xs uppercase tracking-[0.16em] text-ink-light font-semibold">
                          Ops overview
                        </p>
                        <p className="text-sm text-ink-muted mt-1">
                          Better operations reduce latency and human friction.
                        </p>
                      </div>
                      <LineChart size={18} className="text-brand-blue" />
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                      <div className="rounded-xl border border-surface-border bg-surface-warm p-3">
                        <div className="text-[11px] text-ink-light mb-1">Routing</div>
                        <div className="text-lg font-bold text-brand-blue">Instant</div>
                      </div>
                      <div className="rounded-xl border border-surface-border bg-surface-warm p-3">
                        <div className="text-[11px] text-ink-light mb-1">Reports</div>
                        <div className="text-lg font-bold text-emerald-600">Auto</div>
                      </div>
                      <div className="rounded-xl border border-surface-border bg-surface-warm p-3">
                        <div className="text-[11px] text-ink-light mb-1">Ops</div>
                        <div className="text-lg font-bold text-brand-orange">Faster</div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div className="rounded-2xl border border-surface-border bg-white p-4 shadow-card">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-xl bg-brand-blue-light border border-brand-blue-mid/20 flex items-center justify-center">
                          <Workflow size={18} className="text-brand-blue" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-ink">Workflow Logic</div>
                          <div className="text-xs text-ink-muted">Triggers · conditions · actions</div>
                        </div>
                      </div>
                      <p className="text-sm text-ink-muted">
                        Good automation depends on logic clarity, not just connecting two tools.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-surface-border bg-white p-4 shadow-card">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-xl bg-brand-orange-light border border-brand-orange-mid/20 flex items-center justify-center">
                          <Bot size={18} className="text-brand-orange" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-ink">Ops Automation</div>
                          <div className="text-xs text-ink-muted">Alerts · CRM · reporting</div>
                        </div>
                      </div>
                      <p className="text-sm text-ink-muted">
                        Automation should reduce operational load, not create hidden complexity.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {['n8n', 'Make', 'Apps Script', 'Webhooks', 'CRM', 'Dashboards'].map((item) => (
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

      {/* What kills ops performance */}
      <section className="section-pad bg-white border-t border-surface-border">
        <div className="container-site">
          <FadeIn className="mb-12 max-w-3xl">
            <SectionLabel variant="orange">What kills efficiency</SectionLabel>
            <h2 className="font-display font-bold text-ink text-3xl mt-5 mb-5">
              Most operations break because the workflow layer is missing.
            </h2>
            <p className="text-ink-muted text-lg leading-relaxed">
              Teams do not usually lack tools. They lack orchestration, routing logic,
              monitoring, and automation discipline across the systems they already use.
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
              Our automation system is built in layers.
            </h2>
            <p className="text-ink-muted text-lg leading-relaxed max-w-3xl">
              Reliable automation comes from architecture, not just connectors.
              We design processes, data movement, routing logic, monitoring, and governance together.
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
                Good automation starts with process logic, not random tools.
              </h2>
              <p className="text-ink-muted text-lg leading-relaxed">
                We start by understanding the process, then we build the orchestration,
                tool integrations, field logic, alerts, and error handling needed for production use.
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

      {/* Orchestration */}
      <section className="section-pad bg-surface-warm border-y border-surface-border">
        <div className="container-site">
          <FadeIn className="mb-12 max-w-3xl">
            <SectionLabel variant="orange">Workflow orchestration</SectionLabel>
            <h2 className="font-display font-bold text-ink text-3xl mt-5 mb-5">
              Automation is valuable when it moves real business processes.
            </h2>
            <p className="text-ink-muted text-lg leading-relaxed">
              We build workflows around the actual operating layer: leads, reporting,
              notifications, CRM status, internal approvals, and task execution.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6">
            {orchestrationBlocks.map((item) => (
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
              How we build the automation machine.
            </h2>
            <p className="text-ink-muted text-lg max-w-3xl leading-relaxed">
              Real automation is built in sequence — audit first, architecture second, monitoring always.
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

      {/* Advanced blocks */}
      <section className="section-pad bg-surface-warm">
        <div className="container-site">
          <FadeIn className="mb-12 max-w-3xl">
            <SectionLabel variant="orange">Advanced execution</SectionLabel>
            <h2 className="font-display font-bold text-ink text-3xl mt-5 mb-5">
              Different tools, different roles.
            </h2>
            <p className="text-ink-muted text-lg leading-relaxed">
              We use the right automation layer depending on complexity, flexibility, governance, and execution needs.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6">
            {advancedBlocks.map((item) => (
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

      {/* Use cases */}
      <section className="section-pad bg-white border-t border-surface-border">
        <div className="container-site">
          <FadeIn className="mb-12 max-w-3xl">
            <SectionLabel variant="blue">Use cases</SectionLabel>
            <h2 className="font-display font-bold text-ink text-3xl mt-5 mb-5">
              Built for real operations, not demo workflows.
            </h2>
            <p className="text-ink-muted text-lg leading-relaxed">
              Automation becomes strategic when it removes friction from your actual day-to-day execution.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
            {useCases.map((item) => (
              <FadeIn key={item}>
                <div className="rounded-2xl border border-surface-border bg-surface-warm p-6 h-full">
                  <div className="flex items-start gap-3">
                    <Boxes size={18} className="text-brand-blue mt-0.5 flex-shrink-0" />
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
              <SectionLabel variant="blue">Monitoring & reporting</SectionLabel>
              <h2 className="font-display font-bold text-ink text-3xl mt-5 mb-5">
                Good automations need visibility.
              </h2>
              <p className="text-ink-muted text-lg leading-relaxed">
                We build reporting layers around workflows so failures, delays,
                routing errors, or sync issues are visible before they become operational debt.
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
                        <LineChart size={16} className="text-brand-blue mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-ink-secondary">{item}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="rounded-2xl border border-brand-blue-mid/20 bg-brand-blue-light p-5">
                  <div className="flex items-start gap-3">
                    <Clock3 size={16} className="text-brand-blue mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-brand-blue font-bold mb-2">
                        Optional advanced layer
                      </p>
                      <p className="text-sm text-ink-secondary leading-relaxed">
                        We can add workflow alerting, summary reporting, routing health checks,
                        and automation governance for more mature operating environments.
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
              <SectionLabel variant="blue">Automation Audit</SectionLabel>
              <h2 className="font-display font-bold text-ink text-3xl lg:text-4xl mt-5 mb-5">
                Ready to turn automation into an operating advantage?
              </h2>
              <p className="text-ink-muted text-lg max-w-2xl mx-auto leading-relaxed mb-8">
                We can audit your workflows, integrations, routing logic, reporting layers,
                and process bottlenecks — then show you exactly where automation creates the biggest lift.
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
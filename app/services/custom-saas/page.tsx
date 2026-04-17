import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  CheckCircle2,
  Blocks,
  Database,
  LayoutDashboard,
  Users,
  Workflow,
  ShieldCheck,
  Server,
  LineChart,
  Boxes,
  Cpu,
} from 'lucide-react'
import { FadeIn } from '@/components/ui/FadeIn'
import { SectionLabel } from '@/components/ui/SectionLabel'

export const metadata: Metadata = {
  title: 'Custom SaaS — Internal Tools, Portals, Dashboards & Workflow Software',
  description:
    'Custom SaaS systems built for operations, internal workflows, reporting, dashboards, portals, automation, and scalable business processes.',
}

const topMetrics = [
  { value: 'Faster', label: 'Operations' },
  { value: 'Centralized', label: 'Business workflows' },
  { value: 'Scalable', label: 'System design' },
  { value: 'Custom', label: 'Business fit' },
]

const problems = [
  'Teams run core processes through spreadsheets, email, and fragmented tools',
  'Internal workflows are too manual, too slow, and impossible to scale cleanly',
  'Generic SaaS tools do not fit the actual business logic',
  'Reporting is disconnected from operations and decision-making',
  'There is no central system for users, roles, actions, and process visibility',
  'The business has recurring friction that should be turned into software',
]

const systemLayers = [
  {
    icon: Blocks,
    title: 'Product Layer',
    description:
      'We define the business problem, user roles, workflows, scope, and the right MVP architecture before building.',
  },
  {
    icon: Workflow,
    title: 'Process Layer',
    description:
      'We turn repeated business logic into software flows: approvals, routing, statuses, actions, notifications, and operational rules.',
  },
  {
    icon: Users,
    title: 'Access Layer',
    description:
      'Authentication, roles, permissions, admin logic, client views, internal team access, and operational separation.',
  },
  {
    icon: Database,
    title: 'Data Layer',
    description:
      'Structured database design, system entities, relational logic, business states, auditability, and reporting-ready data.',
  },
  {
    icon: LayoutDashboard,
    title: 'Interface Layer',
    description:
      'Clean UX/UI for dashboards, back-office tools, client portals, and process-heavy interfaces built for clarity and speed.',
  },
  {
    icon: Server,
    title: 'Infrastructure Layer',
    description:
      'Deployment, environments, VPS or managed hosting, Docker-ready architecture, updates, and long-term scalability.',
  },
]

const technicalExecution = [
  'Business process mapping before UI design',
  'MVP scoping based on real workflows, not feature overload',
  'Authentication, roles, permissions, and access control design',
  'Database modeling for business entities, statuses, and operational state changes',
  'Dashboard and back-office UX tailored to the actual team workflow',
  'API design, integrations, and automation-ready system hooks',
  'Deployment architecture with production-readiness in mind',
  'Scalable codebase prepared for iteration, new modules, and future product growth',
]

const buildTypes = [
  {
    title: 'Internal tools',
    description:
      'Dashboards, admin panels, ops systems, CRM-like tools, reporting tools, and workflow interfaces for internal teams.',
  },
  {
    title: 'Client portals',
    description:
      'Secure portals where clients can log in, submit data, track progress, access files, or interact with your service layer.',
  },
  {
    title: 'Workflow software',
    description:
      'Custom applications built around approval logic, task states, internal routing, and operational execution flows.',
  },
  {
    title: 'Automation-first SaaS',
    description:
      'Software products connected to automation, reporting, alerts, APIs, and operational intelligence from day one.',
  },
]

const timeline = [
  {
    step: '01',
    title: 'Discovery & system mapping',
    description:
      'We map the process, users, friction points, business rules, and the operational logic the software needs to support.',
  },
  {
    step: '02',
    title: 'Product scope & architecture',
    description:
      'We define MVP scope, screens, modules, entities, roles, and data architecture before development starts.',
  },
  {
    step: '03',
    title: 'UI / UX & core flows',
    description:
      'We design the interface and workflow experience so the product is fast, usable, and operationally clear.',
  },
  {
    step: '04',
    title: 'Build & integrations',
    description:
      'We build the product, connect APIs, structure the database, implement logic, and prepare the software for real usage.',
  },
  {
    step: '05',
    title: 'Testing & deployment',
    description:
      'We validate flows, roles, edge cases, business logic, and deploy the system into a production environment.',
  },
  {
    step: '06',
    title: 'Iteration & scale',
    description:
      'Once the core product is live, we improve the system with new modules, automation, dashboards, and product refinement.',
  },
]

const advancedBlocks = [
  {
    title: 'Workflow-first product design',
    description:
      'We design the software around business execution, not around generic UI screens disconnected from real processes.',
  },
  {
    title: 'Ops + reporting alignment',
    description:
      'We structure products so operational actions and reporting data live in the same system, not in separate worlds.',
  },
  {
    title: 'Automation-ready architecture',
    description:
      'We make sure the software can connect to APIs, webhooks, reporting systems, and future automation layers.',
  },
  {
    title: 'Production-minded architecture',
    description:
      'We think about deployment, environments, scaling, permissions, and maintainability from the beginning.',
  },
]

const useCases = [
  'Recruitment and talent management platforms',
  'Internal operations dashboards and reporting systems',
  'Client onboarding portals and service delivery platforms',
  'Custom CRM / pipeline / approval workflow tools',
  'Business process software replacing spreadsheets and manual execution',
  'Industry-specific SaaS products built around a niche workflow or market need',
]

const dashboardItems = [
  'User activity and workflow status visibility',
  'KPI dashboards connected to the operational layer',
  'Role-based reporting by team, client, or process',
  'Alerts and anomaly visibility for failed or delayed actions',
  'Business process performance metrics',
  'Executive visibility across the software system',
]

export default function CustomSaasPage() {
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
              <SectionLabel variant="blue">Custom SaaS</SectionLabel>

              <h1
                className="font-display font-bold text-ink mt-6 mb-6"
                style={{
                  fontSize: 'clamp(2.7rem, 6vw, 5.3rem)',
                  lineHeight: '0.96',
                  letterSpacing: '-0.05em',
                }}
              >
                Software engineered
                <span className="block text-gradient-brand">
                  around your business logic.
                </span>
              </h1>

              <p className="text-lg lg:text-[1.15rem] text-ink-muted leading-relaxed max-w-2xl mb-8">
                We build custom SaaS systems, internal tools, portals, workflow software,
                dashboards, and productized business platforms designed around the way your
                operations actually work — not around the limitations of generic tools.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-brand-blue text-white font-semibold shadow-button hover:bg-brand-blue-dark hover:shadow-button-hover transition-all duration-200"
                >
                  Book a product strategy call
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
                        Product command layer
                      </p>
                      <h2 className="font-display font-bold text-ink text-xl mt-1">
                        Product. Workflow. Operations.
                      </h2>
                    </div>

                    <div className="rounded-full border border-surface-border bg-white px-3 py-1.5 text-xs font-semibold text-ink-secondary shadow-card">
                      Custom-built
                    </div>
                  </div>

                  <div className="rounded-2xl border border-surface-border bg-white p-4 mb-4">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <p className="text-xs uppercase tracking-[0.16em] text-ink-light font-semibold">
                          System overview
                        </p>
                        <p className="text-sm text-ink-muted mt-1">
                          Better software reduces operational friction.
                        </p>
                      </div>
                      <LineChart size={18} className="text-brand-blue" />
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                      <div className="rounded-xl border border-surface-border bg-surface-warm p-3">
                        <div className="text-[11px] text-ink-light mb-1">Ops</div>
                        <div className="text-lg font-bold text-brand-blue">Faster</div>
                      </div>
                      <div className="rounded-xl border border-surface-border bg-surface-warm p-3">
                        <div className="text-[11px] text-ink-light mb-1">Logic</div>
                        <div className="text-lg font-bold text-emerald-600">Structured</div>
                      </div>
                      <div className="rounded-xl border border-surface-border bg-surface-warm p-3">
                        <div className="text-[11px] text-ink-light mb-1">Scale</div>
                        <div className="text-lg font-bold text-brand-orange">Ready</div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div className="rounded-2xl border border-surface-border bg-white p-4 shadow-card">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-xl bg-brand-blue-light border border-brand-blue-mid/20 flex items-center justify-center">
                          <Boxes size={18} className="text-brand-blue" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-ink">System Modules</div>
                          <div className="text-xs text-ink-muted">Roles · entities · actions</div>
                        </div>
                      </div>
                      <p className="text-sm text-ink-muted">
                        Good SaaS products are built around structured business modules, not random screens.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-surface-border bg-white p-4 shadow-card">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-xl bg-brand-orange-light border border-brand-orange-mid/20 flex items-center justify-center">
                          <Cpu size={18} className="text-brand-orange" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-ink">Business Logic</div>
                          <div className="text-xs text-ink-muted">States · rules · workflow</div>
                        </div>
                      </div>
                      <p className="text-sm text-ink-muted">
                        The real value of custom SaaS comes from encoding how the business actually runs.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {['Dashboards', 'Portals', 'Roles', 'Workflow', 'Database', 'Deployments'].map((item) => (
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

      {/* What kills product efficiency */}
      <section className="section-pad bg-white border-t border-surface-border">
        <div className="container-site">
          <FadeIn className="mb-12 max-w-3xl">
            <SectionLabel variant="orange">What creates friction</SectionLabel>
            <h2 className="font-display font-bold text-ink text-3xl mt-5 mb-5">
              Most businesses already have software problems.
            </h2>
            <p className="text-ink-muted text-lg leading-relaxed">
              The question is whether those problems should stay manual, fragmented,
              and hidden — or be turned into a real software layer.
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
              Our custom SaaS systems are built in layers.
            </h2>
            <p className="text-ink-muted text-lg leading-relaxed max-w-3xl">
              Good software is not a collection of screens. It is the product, process,
              data, interface, and infrastructure layers working together.
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
                We build around business reality first.
              </h2>
              <p className="text-ink-muted text-lg leading-relaxed">
                The best software is built from process understanding — not from a generic template.
                We define workflow, roles, data, and architecture before screens become the priority.
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

      {/* Build types */}
      <section className="section-pad bg-surface-warm border-y border-surface-border">
        <div className="container-site">
          <FadeIn className="mb-12 max-w-3xl">
            <SectionLabel variant="orange">What we build</SectionLabel>
            <h2 className="font-display font-bold text-ink text-3xl mt-5 mb-5">
              Different products, same systems thinking.
            </h2>
            <p className="text-ink-muted text-lg leading-relaxed">
              Whether it is internal software or a market-facing SaaS, the approach stays the same:
              structure the process, then build the product around it.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6">
            {buildTypes.map((item) => (
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
              How we build the software system.
            </h2>
            <p className="text-ink-muted text-lg max-w-3xl leading-relaxed">
              Good custom software is built in sequence — understanding first, then structure, then product execution.
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
              Product thinking beyond development.
            </h2>
            <p className="text-ink-muted text-lg leading-relaxed">
              Custom SaaS becomes valuable when software architecture supports the business model, not just the UI.
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
              Built for operational reality and market opportunities.
            </h2>
            <p className="text-ink-muted text-lg leading-relaxed">
              We build software where there is clear friction, recurring business logic, or a product opportunity worth owning.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
            {useCases.map((item) => (
              <FadeIn key={item}>
                <div className="rounded-2xl border border-surface-border bg-surface-warm p-6 h-full">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-brand-blue mt-0.5 flex-shrink-0" />
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
              <SectionLabel variant="blue">Dashboards & visibility</SectionLabel>
              <h2 className="font-display font-bold text-ink text-3xl mt-5 mb-5">
                Good software needs operational visibility.
              </h2>
              <p className="text-ink-muted text-lg leading-relaxed">
                We design reporting and dashboards so teams can see what is happening,
                what is blocked, what is converting, and where execution slows down.
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
                        <LayoutDashboard size={16} className="text-brand-blue mt-0.5 flex-shrink-0" />
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
                    We can also connect the SaaS to automation, reporting, alerts, analytics,
                    and operational monitoring systems as the product grows.
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
              <SectionLabel variant="blue">Product Strategy</SectionLabel>
              <h2 className="font-display font-bold text-ink text-3xl lg:text-4xl mt-5 mb-5">
                Ready to turn your workflow into software?
              </h2>
              <p className="text-ink-muted text-lg max-w-2xl mx-auto leading-relaxed mb-8">
                We can map your process, define the right MVP, and show you how a custom SaaS
                system could reduce friction, centralize operations, and create long-term leverage.
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
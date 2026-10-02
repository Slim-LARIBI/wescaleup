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
import { getDictionary } from '@/dictionaries'
import { localizedHref, pageMetadata, type Locale } from '@/lib/i18n'

interface PageProps {
  params: { lang: Locale }
}

export function generateMetadata({ params }: PageProps): Metadata {
  const { meta } = getDictionary(params.lang).services.automation
  return pageMetadata({
    lang: params.lang,
    path: '/services/automation',
    title: meta.title,
    description: meta.description,
  })
}

const layerIcons = [Workflow, PlugZap, Route, BellRing, Database, ShieldCheck]

export default function AutomationPage({ params }: PageProps) {
  const { lang } = params
  const t = getDictionary(lang).services.automation

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
              <SectionLabel variant="blue">{t.hero.label}</SectionLabel>

              <h1
                className="font-display font-bold text-ink mt-6 mb-6"
                style={{
                  fontSize: 'clamp(2.7rem, 6vw, 5.3rem)',
                  lineHeight: '0.96',
                  letterSpacing: '-0.05em',
                }}
              >
                {t.hero.titleLine1}{' '}
                <span className="block text-gradient-brand">
                  {t.hero.titleLine2}
                </span>
              </h1>

              <p className="text-lg lg:text-[1.15rem] text-ink-muted leading-relaxed max-w-2xl mb-8">
                {t.hero.text}
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <Link
                  href={localizedHref(lang, '/contact')}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-brand-blue text-white font-semibold shadow-button hover:bg-brand-blue-dark hover:shadow-button-hover transition-all duration-200"
                >
                  {t.hero.primaryCta}
                  <ArrowRight size={16} />
                </Link>

                <Link
                  href={localizedHref(lang, '/services')}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-surface-border bg-white text-ink font-semibold hover:border-brand-blue-mid hover:bg-brand-blue-light hover:text-brand-blue transition-all duration-200"
                >
                  {t.hero.secondaryCta}
                </Link>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl">
                {t.hero.metrics.map((item) => (
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
                        {t.panel.eyebrow}
                      </p>
                      <h2 className="font-display font-bold text-ink text-xl mt-1">
                        {t.panel.title}
                      </h2>
                    </div>

                    <div className="rounded-full border border-surface-border bg-white px-3 py-1.5 text-xs font-semibold text-ink-secondary shadow-card">
                      {t.panel.badge}
                    </div>
                  </div>

                  <div className="rounded-2xl border border-surface-border bg-white p-4 mb-4">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <p className="text-xs uppercase tracking-[0.16em] text-ink-light font-semibold">
                          {t.panel.opsEyebrow}
                        </p>
                        <p className="text-sm text-ink-muted mt-1">
                          {t.panel.opsText}
                        </p>
                      </div>
                      <LineChart size={18} className="text-brand-blue" />
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                      <div className="rounded-xl border border-surface-border bg-surface-warm p-3">
                        <div className="text-[11px] text-ink-light mb-1">{t.panel.ops[0].label}</div>
                        <div className="text-lg font-bold text-brand-blue">{t.panel.ops[0].value}</div>
                      </div>
                      <div className="rounded-xl border border-surface-border bg-surface-warm p-3">
                        <div className="text-[11px] text-ink-light mb-1">{t.panel.ops[1].label}</div>
                        <div className="text-lg font-bold text-emerald-600">{t.panel.ops[1].value}</div>
                      </div>
                      <div className="rounded-xl border border-surface-border bg-surface-warm p-3">
                        <div className="text-[11px] text-ink-light mb-1">{t.panel.ops[2].label}</div>
                        <div className="text-lg font-bold text-brand-orange">{t.panel.ops[2].value}</div>
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
                          <div className="text-sm font-semibold text-ink">{t.panel.cards[0].title}</div>
                          <div className="text-xs text-ink-muted">{t.panel.cards[0].meta}</div>
                        </div>
                      </div>
                      <p className="text-sm text-ink-muted">
                        {t.panel.cards[0].text}
                      </p>
                    </div>

                    <div className="rounded-2xl border border-surface-border bg-white p-4 shadow-card">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-xl bg-brand-orange-light border border-brand-orange-mid/20 flex items-center justify-center">
                          <Bot size={18} className="text-brand-orange" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-ink">{t.panel.cards[1].title}</div>
                          <div className="text-xs text-ink-muted">{t.panel.cards[1].meta}</div>
                        </div>
                      </div>
                      <p className="text-sm text-ink-muted">
                        {t.panel.cards[1].text}
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
            <SectionLabel variant="orange">{t.problems.label}</SectionLabel>
            <h2 className="font-display font-bold text-ink text-3xl mt-5 mb-5">
              {t.problems.title}
            </h2>
            <p className="text-ink-muted text-lg leading-relaxed">
              {t.problems.text}
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
            {t.problems.items.map((item) => (
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
            <SectionLabel variant="blue">{t.layers.label}</SectionLabel>
            <h2 className="font-display font-bold text-ink text-3xl mt-5 mb-5">
              {t.layers.title}
            </h2>
            <p className="text-ink-muted text-lg leading-relaxed max-w-3xl">
              {t.layers.text}
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {t.layers.items.map((layer, i) => {
              const LayerIcon = layerIcons[i]
              return (
              <FadeIn key={layer.title}>
                <div className="rounded-2xl border border-surface-border bg-white p-6 h-full shadow-card hover:shadow-card-hover transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-brand-blue-light border border-brand-blue-mid/20 flex items-center justify-center mb-4">
                    <LayerIcon size={20} className="text-brand-blue" />
                  </div>
                  <h3 className="font-display font-bold text-ink text-lg mb-3">
                    {layer.title}
                  </h3>
                  <p className="text-sm text-ink-muted leading-relaxed">
                    {layer.description}
                  </p>
                </div>
              </FadeIn>
              )
            })}
          </div>
        </div>
      </section>

      {/* Technical execution */}
      <section className="section-pad bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <FadeIn className="lg:col-span-5">
              <SectionLabel variant="blue">{t.technical.label}</SectionLabel>
              <h2 className="font-display font-bold text-ink text-3xl mt-5 mb-5">
                {t.technical.title}
              </h2>
              <p className="text-ink-muted text-lg leading-relaxed">
                {t.technical.text}
              </p>
            </FadeIn>

            <FadeIn delay={0.1} className="lg:col-span-7">
              <div className="grid sm:grid-cols-2 gap-4">
                {t.technical.items.map((item) => (
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
            <SectionLabel variant="orange">{t.orchestration.label}</SectionLabel>
            <h2 className="font-display font-bold text-ink text-3xl mt-5 mb-5">
              {t.orchestration.title}
            </h2>
            <p className="text-ink-muted text-lg leading-relaxed">
              {t.orchestration.text}
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6">
            {t.orchestration.items.map((item) => (
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
            <SectionLabel variant="blue">{t.timeline.label}</SectionLabel>
            <h2 className="font-display font-bold text-ink text-3xl mt-5 mb-5">
              {t.timeline.title}
            </h2>
            <p className="text-ink-muted text-lg max-w-3xl leading-relaxed">
              {t.timeline.text}
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {t.timeline.items.map((item, i) => (
              <FadeIn key={item.title}>
                <div className="rounded-2xl border border-surface-border bg-surface-warm p-6 h-full relative overflow-hidden">
                  <div className="absolute top-0 left-0 h-1 w-full bg-gradient-brand" />
                  <div className="text-xs font-bold tracking-[0.18em] uppercase text-ink-light mb-3">
                    {t.timeline.stepLabel} {String(i + 1).padStart(2, '0')}
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
            <SectionLabel variant="orange">{t.advanced.label}</SectionLabel>
            <h2 className="font-display font-bold text-ink text-3xl mt-5 mb-5">
              {t.advanced.title}
            </h2>
            <p className="text-ink-muted text-lg leading-relaxed">
              {t.advanced.text}
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6">
            {t.advanced.items.map((item) => (
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
            <SectionLabel variant="blue">{t.useCases.label}</SectionLabel>
            <h2 className="font-display font-bold text-ink text-3xl mt-5 mb-5">
              {t.useCases.title}
            </h2>
            <p className="text-ink-muted text-lg leading-relaxed">
              {t.useCases.text}
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
            {t.useCases.items.map((item) => (
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
              <SectionLabel variant="blue">{t.monitoring.label}</SectionLabel>
              <h2 className="font-display font-bold text-ink text-3xl mt-5 mb-5">
                {t.monitoring.title}
              </h2>
              <p className="text-ink-muted text-lg leading-relaxed">
                {t.monitoring.text}
              </p>
            </FadeIn>

            <FadeIn delay={0.1} className="lg:col-span-7">
              <div className="rounded-3xl border border-surface-border bg-white p-6 lg:p-8">
                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  {t.monitoring.items.map((item) => (
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
                        {t.monitoring.optionalLabel}
                      </p>
                      <p className="text-sm text-ink-secondary leading-relaxed">
                        {t.monitoring.optionalText}
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
              <SectionLabel variant="blue">{t.cta.label}</SectionLabel>
              <h2 className="font-display font-bold text-ink text-3xl lg:text-4xl mt-5 mb-5">
                {t.cta.title}
              </h2>
              <p className="text-ink-muted text-lg max-w-2xl mx-auto leading-relaxed mb-8">
                {t.cta.text}
              </p>

              <Link
                href={localizedHref(lang, '/contact')}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-brand-blue text-white font-semibold shadow-button hover:bg-brand-blue-dark hover:shadow-button-hover transition-all duration-200"
              >
                {t.cta.button}
                <ArrowRight size={16} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  )
}
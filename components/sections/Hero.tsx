'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  ArrowRight,
  Activity,
  BarChart3,
  MousePointerClick,
  Radar,
  Workflow,
  ShieldCheck,
} from 'lucide-react'

const headlineStats = [
  { value: '3.2×', label: 'ROAS lift' },
  { value: '99.8%', label: 'Signal accuracy' },
  { value: '–42%', label: 'CAC reduction' },
]

const signalCards = [
  {
    icon: Radar,
    title: 'Tracking Health',
    value: '99.8%',
    meta: 'GTM · GA4 · CAPI',
    tone: 'blue',
  },
  {
    icon: MousePointerClick,
    title: 'Paid Media Efficiency',
    value: '3.2×',
    meta: 'Google Ads · Meta Ads',
    tone: 'orange',
  },
  {
    icon: Workflow,
    title: 'Automation Flows',
    value: '24/7',
    meta: 'n8n · Make · Apps Script',
    tone: 'violet',
  },
  {
    icon: ShieldCheck,
    title: 'Server-Side Signal',
    value: 'Live',
    meta: 'SS-GTM · CAPI · Enhanced Conv.',
    tone: 'emerald',
  },
]

function toneClasses(tone: string) {
  switch (tone) {
    case 'blue':
      return {
        iconWrap: 'bg-brand-blue-light border-brand-blue-mid/30',
        icon: 'text-brand-blue',
        pill: 'bg-brand-blue-light text-brand-blue border-brand-blue-mid/20',
      }
    case 'orange':
      return {
        iconWrap: 'bg-brand-orange-light border-brand-orange-mid/30',
        icon: 'text-brand-orange',
        pill: 'bg-brand-orange-light text-brand-orange border-brand-orange-mid/20',
      }
    case 'violet':
      return {
        iconWrap: 'bg-violet-50 border-violet-200/60',
        icon: 'text-violet-600',
        pill: 'bg-violet-50 text-violet-600 border-violet-200/50',
      }
    default:
      return {
        iconWrap: 'bg-emerald-50 border-emerald-200/60',
        icon: 'text-emerald-600',
        pill: 'bg-emerald-50 text-emerald-600 border-emerald-200/50',
      }
  }
}

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero-mesh pt-20 lg:pt-20 pb-10 lg:pb-12">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 right-[-120px] h-[420px] w-[420px] rounded-full bg-gradient-orb-blue opacity-35 blur-3xl" />
        <div className="absolute bottom-[-120px] left-[-80px] h-[320px] w-[320px] rounded-full bg-gradient-orb-orange opacity-20 blur-3xl" />
        <div className="absolute top-[28%] left-[52%] h-[420px] w-[420px] rounded-full bg-gradient-orb-violet opacity-10 blur-3xl" />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-subtle-dots bg-dot-sm opacity-[0.28]" />

      <div className="container-site relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left */}
          <div className="lg:col-span-6 xl:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-surface-border shadow-card text-xs font-semibold text-ink-secondary tracking-wide">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-slow" />
                  <span className="text-emerald-600 font-bold">Data-Driven</span>
                </span>
                <span className="text-surface-border">|</span>
                Performance Marketing · Tracking · Automation
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="font-display font-bold text-ink mb-5"
              style={{
                fontSize: 'clamp(2.6rem, 5.2vw, 4.9rem)',
                lineHeight: '0.92',
                letterSpacing: '-0.055em',
              }}
            >
              We build
              <span className="block">growth systems.</span>
              <span className="block text-gradient-brand">Not just campaigns.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.15 }}
              className="max-w-xl text-ink-muted text-base lg:text-[1.12rem] leading-relaxed mb-6"
            >
              Wescaleup helps ambitious brands scale through advanced tracking,
              analytics, paid media, technical SEO, and automation systems built
              for clarity, efficiency, and measurable growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.22 }}
              className="flex flex-wrap gap-4 mb-6"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-brand-blue text-white font-semibold text-base shadow-button hover:bg-brand-blue-dark hover:shadow-button-hover transition-all duration-200 ease-premium group"
              >
                Book a strategy call
                <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white text-ink font-semibold text-base border border-surface-border hover:border-brand-blue-mid hover:bg-brand-blue-light hover:text-brand-blue transition-all duration-200 ease-premium"
              >
                View our services
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.3 }}
              className="grid grid-cols-3 gap-3 max-w-lg"
            >
              {headlineStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-surface-border bg-white/90 backdrop-blur-sm px-4 py-4 shadow-card"
                >
                  <div className="text-xl lg:text-2xl font-bold text-ink tracking-tight">{stat.value}</div>
                  <div className="text-xs text-ink-muted mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>

<motion.div
  initial={{ opacity: 0, y: 8 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.55, delay: 0.38 }}
  className="mt-6 flex items-center gap-3"
>
  <div className="w-10 h-10 rounded-full bg-gradient-brand flex items-center justify-center shadow-card shrink-0">
    <span className="text-white text-sm font-bold">SL</span>
  </div>

  <div className="leading-tight">
    <p className="text-sm text-ink">
      Founded by{' '}
      <a
        href="https://laribislim.com"
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold text-ink hover:text-brand-blue transition-colors duration-200 underline-offset-4 hover:underline"
      >
        Slim Laribi
      </a>
    </p>
    <p className="text-sm text-ink-muted">
      Ecommerce, analytics & automation operator
    </p>
  </div>
</motion.div>
          </div>

          {/* Right */}
          <div className="lg:col-span-6 xl:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.12 }}
              className="relative mx-auto max-w-[620px]"
            >
              {/* Main panel */}
              <div className="relative overflow-hidden rounded-[32px] border border-surface-border bg-white/85 backdrop-blur-md shadow-[0_30px_80px_rgba(24,39,75,0.10)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.10),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(234,88,12,0.08),transparent_24%),linear-gradient(to_bottom,rgba(255,255,255,0.95),rgba(250,250,248,0.96))]" />

                <div className="relative p-5 lg:p-6">
                  {/* Top bar */}
                  <div className="flex items-center justify-between mb-5">
                    <div>
                      <p className="text-xs uppercase tracking-[0.22em] text-ink-light font-semibold">
                        Growth Command Layer
                      </p>
                      <h3 className="text-xl font-display font-bold text-ink mt-1">
                        Tracking. Ads. Analytics. Automation.
                      </h3>
                    </div>
                    <div className="hidden sm:flex items-center gap-2 rounded-full border border-surface-border bg-white px-3 py-1.5 shadow-card">
                      <Activity size={14} className="text-emerald-600" />
                      <span className="text-xs font-semibold text-ink-secondary">Systems live</span>
                    </div>
                  </div>

                  {/* Hero chart strip */}
                  <div className="rounded-2xl border border-surface-border bg-[linear-gradient(180deg,rgba(37,99,235,0.04),rgba(255,255,255,0.8))] p-4 mb-4">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <p className="text-xs text-ink-light uppercase tracking-[0.18em] font-semibold">
                          Signal & Performance Overview
                        </p>
                        <p className="text-sm text-ink-muted mt-1">
                          Cleaner attribution, stronger optimization, better decisions.
                        </p>
                      </div>
                      <div className="rounded-full border border-brand-blue-mid/20 bg-brand-blue-light px-3 py-1 text-xs font-semibold text-brand-blue">
                        Live stack
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-3 mb-4">
                      <div className="rounded-xl bg-white border border-surface-border p-3 shadow-card">
                        <div className="text-xs text-ink-light mb-1">ROAS</div>
                        <div className="text-lg font-bold text-brand-blue">3.2×</div>
                      </div>
                      <div className="rounded-xl bg-white border border-surface-border p-3 shadow-card">
                        <div className="text-xs text-ink-light mb-1">Signal Match</div>
                        <div className="text-lg font-bold text-emerald-600">99.8%</div>
                      </div>
                      <div className="rounded-xl bg-white border border-surface-border p-3 shadow-card">
                        <div className="text-xs text-ink-light mb-1">CAC</div>
                        <div className="text-lg font-bold text-brand-orange">–42%</div>
                      </div>
                    </div>
                  </div>

                  {/* Cards grid */}
                  <div className="mb-4 flex flex-wrap gap-2">
                  {['GTM', 'GA4', 'Server-Side', 'Meta CAPI', 'n8n', 'Make'].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-semibold rounded-full border border-surface-border bg-white text-ink-muted"
                    >
                      {tech}
                    </span>
                  ))}
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {signalCards.map((card, index) => {
                      const tone = toneClasses(card.tone)
                      return (
                        <motion.div
                          key={card.title}
                          initial={{ opacity: 0, y: 16 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.28 + index * 0.08, duration: 0.45 }}
                          className="rounded-2xl border border-surface-border bg-white p-4 shadow-card hover:shadow-card-hover transition-all duration-200"
                        >
                          <div className="flex items-start justify-between gap-3 mb-3">
                            <div className={`w-11 h-11 rounded-xl border flex items-center justify-center ${tone.iconWrap}`}>
                              <card.icon size={18} className={tone.icon} />
                            </div>
                            <span className={`inline-flex rounded-full border px-2.5 py-1 text-[11px] font-semibold ${tone.pill}`}>
                              {card.meta}
                            </span>
                          </div>

                          <div className="text-sm text-ink-secondary font-medium mb-1">{card.title}</div>
                          <div className="text-2xl font-bold text-ink tracking-tight">{card.value}</div>
                        </motion.div>
                      )
                    })}
                  </div>
                </div>
              </div>

              {/* Floating mini badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, duration: 0.4 }}
                className="hidden lg:flex absolute -top-5 -right-5 rounded-2xl border border-surface-border bg-white px-4 py-3 shadow-card items-center gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-blue-light border border-brand-blue-mid/20 flex items-center justify-center">
                  <BarChart3 size={18} className="text-brand-blue" />
                </div>
                <div>
                  <div className="text-xs text-ink-light">Measurement stack</div>
                  <div className="text-sm font-semibold text-ink">Built for scale</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
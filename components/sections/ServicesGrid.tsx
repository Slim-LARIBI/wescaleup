import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { HomeDictionary } from '@/dictionaries/en/home'
import { localizedHref, type Locale } from '@/lib/i18n'
import { FadeIn, StaggerChildren, StaggerItem } from '@/components/ui/FadeIn'
import { SectionHeader } from '@/components/ui/SectionLabel'

type ServiceId = keyof HomeDictionary['servicesGrid']['items']

const services: { id: ServiceId; href: string; icon: string; color: string }[] = [
  { id: 'seo', href: '/services/seo', icon: '🔍', color: 'blue' },
  { id: 'google-ads', href: '/services/sea', icon: '🎯', color: 'orange' },
  { id: 'meta-ads', href: '/services/meta-ads', icon: '📱', color: 'violet' },
  { id: 'analytics', href: '/services/analytics', icon: '📊', color: 'emerald' },
  { id: 'tracking', href: '/services/analytics', icon: '🏷️', color: 'amber' },
  { id: 'server-side', href: '/services/analytics', icon: '⚡', color: 'cyan' },
  { id: 'automation', href: '/services/automation', icon: '🤖', color: 'indigo' },
  { id: 'email', href: '/services/automation', icon: '✉️', color: 'teal' },
  { id: 'dashboards', href: '/services/analytics', icon: '📈', color: 'rose' },
  { id: 'cro', href: '/services', icon: '⚙️', color: 'fuchsia' },
]

const colorMap: Record<string, { bg: string; text: string; border: string; badge: string }> = {
  blue: {
    bg: 'bg-brand-blue-light',
    text: 'text-brand-blue',
    border: 'group-hover:border-brand-blue-mid',
    badge: 'bg-brand-blue-light text-brand-blue',
  },
  orange: {
    bg: 'bg-brand-orange-light',
    text: 'text-brand-orange',
    border: 'group-hover:border-brand-orange-mid',
    badge: 'bg-brand-orange-light text-brand-orange',
  },
  violet: {
    bg: 'bg-violet-50',
    text: 'text-violet-600',
    border: 'group-hover:border-violet-200',
    badge: 'bg-violet-50 text-violet-600',
  },
  emerald: {
    bg: 'bg-emerald-50',
    text: 'text-emerald-600',
    border: 'group-hover:border-emerald-200',
    badge: 'bg-emerald-50 text-emerald-600',
  },
  amber: {
    bg: 'bg-amber-50',
    text: 'text-amber-600',
    border: 'group-hover:border-amber-200',
    badge: 'bg-amber-50 text-amber-600',
  },
  cyan: {
    bg: 'bg-cyan-50',
    text: 'text-cyan-600',
    border: 'group-hover:border-cyan-200',
    badge: 'bg-cyan-50 text-cyan-600',
  },
  indigo: {
    bg: 'bg-indigo-50',
    text: 'text-indigo-600',
    border: 'group-hover:border-indigo-200',
    badge: 'bg-indigo-50 text-indigo-600',
  },
  teal: {
    bg: 'bg-teal-50',
    text: 'text-teal-600',
    border: 'group-hover:border-teal-200',
    badge: 'bg-teal-50 text-teal-600',
  },
  rose: {
    bg: 'bg-rose-50',
    text: 'text-rose-600',
    border: 'group-hover:border-rose-200',
    badge: 'bg-rose-50 text-rose-600',
  },
  fuchsia: {
    bg: 'bg-fuchsia-50',
    text: 'text-fuchsia-600',
    border: 'group-hover:border-fuchsia-200',
    badge: 'bg-fuchsia-50 text-fuchsia-600',
  },
}

interface ServicesGridProps {
  t: HomeDictionary['servicesGrid']
  lang: Locale
}

export function ServicesGrid({ t, lang }: ServicesGridProps) {
  return (
    <section id="services" className="section-pad bg-surface-warm">
      <div className="container-site">
        <FadeIn className="mb-16 flex flex-col items-center">
          <SectionHeader
            label={t.label}
            title={
              <>
                {t.titleStart}{' '}
                <span className="text-gradient-brand">{t.titleHighlight}</span>
              </>
            }
            subtitle={t.subtitle}
          />
        </FadeIn>

        <StaggerChildren
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          staggerDelay={0.07}
        >
          {services.map((service) => {
            const c = colorMap[service.color]
            const text = t.items[service.id]
            return (
              <StaggerItem key={service.id}>
                <Link
                  href={localizedHref(lang, service.href)}
                  className="group card-hover flex flex-col h-full p-7 transition-all duration-300"
                >
                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-5 ${c.bg} border border-transparent ${c.border} transition-colors duration-300`}
                  >
                    {service.icon}
                  </div>

                  {/* Content */}
                  <h3 className="font-display font-bold text-ink text-lg mb-3 group-hover:text-brand-blue transition-colors duration-200">
                    {text.title}
                  </h3>
                  <p className="text-ink-muted text-sm leading-relaxed flex-1">
                    {text.shortDescription}
                  </p>

                  {/* CTA */}
                  <div className={`mt-5 flex items-center gap-1.5 text-sm font-semibold ${c.text} opacity-0 group-hover:opacity-100 transition-all duration-200 translate-x-0 group-hover:translate-x-0.5`}>
                    {t.learnMore}
                    <ArrowRight size={13} />
                  </div>
                </Link>
              </StaggerItem>
            )
          })}
        </StaggerChildren>

        <FadeIn delay={0.2} className="mt-12 flex justify-center">
          <Link
            href={localizedHref(lang, '/services')}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-surface-border bg-white text-ink font-semibold text-sm hover:border-brand-blue-mid hover:bg-brand-blue-light hover:text-brand-blue transition-all duration-200 ease-premium"
          >
            {t.viewAll}
            <ArrowRight size={14} />
          </Link>
        </FadeIn>
      </div>
    </section>
  )
}

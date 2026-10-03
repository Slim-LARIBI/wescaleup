import Link from 'next/link'
import { ArrowRight, Mail, MapPin, Linkedin } from 'lucide-react'
import type { CommonDictionary } from '@/dictionaries/en/common'
import { localizedHref, translatePath, type Locale } from '@/lib/i18n'
import { CookieSettingsButton } from '@/components/consent/CookieSettingsButton'

interface FooterProps {
  t: CommonDictionary['footer']
  serviceLabels: CommonDictionary['nav']['serviceLinks']
  lang: Locale
}

export function Footer({ t, serviceLabels, lang }: FooterProps) {
  const year = new Date().getFullYear()

  const services = [
    { label: serviceLabels.metaAds, href: localizedHref(lang, '/services/meta-ads') },
    { label: serviceLabels.sea, href: localizedHref(lang, '/services/sea') },
    { label: serviceLabels.seo, href: localizedHref(lang, '/services/seo') },
    { label: serviceLabels.analytics, href: localizedHref(lang, '/services/analytics') },
    { label: serviceLabels.automation, href: localizedHref(lang, '/services/automation') },
    { label: serviceLabels.customSaas, href: localizedHref(lang, '/services/custom-saas') },
  ]

  const company = [
    { label: t.company.home, href: localizedHref(lang, '/') },
    { label: t.company.services, href: localizedHref(lang, '/services') },
    { label: t.company.process, href: localizedHref(lang, '/#process') },
    { label: t.company.why, href: localizedHref(lang, '/#why') },
    { label: t.company.contact, href: localizedHref(lang, '/contact') },
  ]

  return (
    <footer className="bg-ink text-white">
      {/* Main footer */}
      <div className="container-site py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-4">
            <Link href={localizedHref(lang, '/')} className="inline-flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-brand flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm">W</span>
              </div>
              <span className="font-display font-bold text-xl tracking-tight">Wescaleup</span>
            </Link>
            <p className="text-ink-light text-sm leading-relaxed max-w-xs mb-8">
              {t.tagline}
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-ink-light">
                <Mail size={15} className="text-brand-blue flex-shrink-0" />
                <a href="mailto:slim.laribi@wescaleup.tech" className="hover:text-white transition-colors">
                  slim.laribi@wescaleup.tech
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm text-ink-light">
                <MapPin size={15} className="text-brand-blue flex-shrink-0" />
                <span>{t.location}</span>
              </div>
            </div>
            {/* Social */}
            <div className="flex items-center gap-3 mt-8">
              <a
                href="https://www.linkedin.com/company/scaleup-data-driven-academy/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-blue transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={15} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-4">
            <h3 className="text-sm font-semibold tracking-widest uppercase text-ink-light mb-6">
              {t.servicesTitle}
            </h3>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-ink-light hover:text-white transition-colors duration-200 underline-hover"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company + CTA */}
          <div className="lg:col-span-4">
            <h3 className="text-sm font-semibold tracking-widest uppercase text-ink-light mb-6">
              {t.companyTitle}
            </h3>
            <ul className="space-y-3 mb-10">
              {company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-ink-light hover:text-white transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mini CTA */}
            <div className="p-5 rounded-xl bg-white/5 border border-white/10">
              <p className="text-sm font-semibold text-white mb-1">{t.miniCtaTitle}</p>
              <p className="text-xs text-ink-light mb-4 leading-relaxed">
                {t.miniCtaText}
              </p>
              <Link
                href={localizedHref(lang, '/contact')}
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand-blue-mid hover:text-white transition-colors"
              >
                {t.miniCtaLink} <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-site py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-ink-light">
            © {year} {t.rights}
          </p>
          <div className="flex items-center gap-6">
            <Link href={localizedHref(lang, translatePath('/privacy', 'en', lang))} className="text-xs text-ink-light hover:text-white transition-colors">
              {t.privacy}
            </Link>
            <Link href={localizedHref(lang, translatePath('/terms', 'en', lang))} className="text-xs text-ink-light hover:text-white transition-colors">
              {t.terms}
            </Link>
            <CookieSettingsButton
              label={t.cookieSettings}
              className="text-xs text-ink-light hover:text-white transition-colors"
            />
          </div>
        </div>
      </div>
    </footer>
  )
}

'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react'
import type { CommonDictionary } from '@/dictionaries/en/common'
import { localizedHref, type Locale } from '@/lib/i18n'
import { LanguageSwitcher } from '@/components/layout/LanguageSwitcher'

interface NavbarProps {
  t: CommonDictionary['nav']
  switcherLabel: string
  lang: Locale
}

export function Navbar({ t, switcherLabel, lang }: NavbarProps) {
  const navLinks = [
    { label: t.links.process, href: localizedHref(lang, '/#process') },
    { label: t.links.why, href: localizedHref(lang, '/#why') },
    { label: t.links.contact, href: localizedHref(lang, '/contact') },
  ]

  const serviceLinks = [
    { label: t.serviceLinks.metaAds, href: localizedHref(lang, '/services/meta-ads') },
    { label: t.serviceLinks.sea, href: localizedHref(lang, '/services/sea') },
    { label: t.serviceLinks.seo, href: localizedHref(lang, '/services/seo') },
    { label: t.serviceLinks.analytics, href: localizedHref(lang, '/services/analytics') },
    { label: t.serviceLinks.automation, href: localizedHref(lang, '/services/automation') },
    { label: t.serviceLinks.customSaas, href: localizedHref(lang, '/services/custom-saas') },
  ]

  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    setServicesOpen(false)
  }, [pathname])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const servicesHref = localizedHref(lang, '/services')
  const isServicesActive =
    pathname === servicesHref || pathname.startsWith(`${servicesHref}/`)

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-premium ${
          scrolled ? 'bg-white/95 backdrop-blur-md shadow-nav' : 'bg-transparent'
        }`}
      >
        <div className="container-site">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link href={localizedHref(lang, '/')} className="flex items-center gap-2 group flex-shrink-0">
              <div className="w-8 h-8 rounded-lg bg-gradient-brand flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm">W</span>
              </div>
              <span className="font-display font-bold text-xl text-ink tracking-tight">
                Wescaleup
              </span>
            </Link>

            <nav className="hidden lg:flex items-center gap-1">
              <div
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                  <Link
                    href={servicesHref}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                      isServicesActive
                        ? 'text-brand-blue bg-brand-blue-light'
                        : 'text-ink-secondary hover:text-ink hover:bg-surface-muted'
                    }`}
                    aria-expanded={servicesOpen}
                    aria-haspopup="menu"
                  >
                    {t.services}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${
                        servicesOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </Link>

                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.18 }}
                      className="absolute top-full left-0 pt-3"
                    >
                      <div className="w-[320px] rounded-2xl border border-surface-border bg-white/95 backdrop-blur-md shadow-[0_20px_60px_rgba(24,39,75,0.12)] p-3">
                        <div className="px-3 pt-2 pb-3 border-b border-surface-border">
                          <p className="text-[11px] uppercase tracking-[0.18em] text-ink-light font-semibold">
                            {t.ourServices}
                          </p>
                          <p className="text-sm text-ink-muted mt-1">
                            {t.servicesIntro}
                          </p>
                        </div>

                        <div className="pt-2 space-y-1">
                          {serviceLinks.map((link) => {
                            const active = pathname === link.href
                            return (
                              <Link
                                key={link.href}
                                href={link.href}
                                className={`block rounded-xl px-3 py-3 text-sm transition-all duration-200 ${
                                  active
                                    ? 'bg-brand-blue-light text-brand-blue font-semibold'
                                    : 'text-ink-secondary hover:bg-surface-muted hover:text-ink'
                                }`}
                              >
                                {link.label}
                              </Link>
                            )
                          })}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                    pathname === link.href
                      ? 'text-brand-blue bg-brand-blue-light'
                      : 'text-ink-secondary hover:text-ink hover:bg-surface-muted'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <LanguageSwitcher lang={lang} label={switcherLabel} />
              <Link
                href={localizedHref(lang, '/contact')}
                className="group inline-flex flex-col items-start rounded-2xl bg-brand-blue text-white px-5 py-3 shadow-button hover:bg-brand-blue-dark hover:shadow-button-hover transition-all duration-200 ease-premium"
              >
                <span className="text-[11px] leading-none font-semibold uppercase tracking-[0.18em] text-white/70 mb-1.5">
                  {t.ctaEyebrow}
                </span>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-white">
                  {t.cta}
                  <ArrowRight
                    size={14}
                    className="transition-transform duration-200 group-hover:translate-x-0.5"
                  />
                </span>
              </Link>
            </div>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 rounded-lg text-ink hover:bg-surface-muted transition-colors"
              aria-label={t.toggleMenu}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white pt-16 lg:hidden overflow-y-auto"
          >
            <div className="container-site py-8 flex flex-col gap-2">
              <div className="mb-2">
                <div className="px-4 pb-2">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-ink-light font-semibold">
                    {t.services}
                  </p>
                </div>

                <div className="space-y-1">
                  {serviceLinks.map((link, i) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04 + 0.04 }}
                    >
                      <Link
                        href={link.href}
                        className={`flex items-center justify-between py-4 px-4 rounded-xl text-base font-semibold transition-colors ${
                          pathname === link.href
                            ? 'text-brand-blue bg-brand-blue-light'
                            : 'text-ink hover:bg-surface-muted'
                        }`}
                      >
                        {link.label}
                        <ArrowRight size={18} className="text-ink-light" />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="h-px bg-surface-border my-3" />

              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 + 0.18 }}
                >
                  <Link
                    href={link.href}
                    className={`block py-4 px-4 rounded-xl text-base font-semibold transition-colors ${
                      pathname === link.href
                        ? 'text-brand-blue bg-brand-blue-light'
                        : 'text-ink hover:bg-surface-muted'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.22 }}
                className="px-4 pt-3"
              >
                <LanguageSwitcher lang={lang} label={switcherLabel} className="text-sm" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="mt-4"
              >
                <Link
                  href={localizedHref(lang, '/contact')}
                  className="flex flex-col items-center justify-center w-full rounded-2xl border border-brand-blue-mid/20 bg-brand-blue text-white px-5 py-4 shadow-button"
                >
                  <span className="text-[11px] uppercase tracking-[0.18em] text-white/75 font-semibold mb-1">
                    {t.ctaEyebrow}
                  </span>
                  <span className="inline-flex items-center gap-2 font-semibold text-base">
                    {t.cta}
                    <ArrowRight size={16} />
                  </span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
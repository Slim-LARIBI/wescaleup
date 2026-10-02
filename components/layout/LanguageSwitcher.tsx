'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { clsx } from 'clsx'
import { locales, localizedHref, translatePath, type Locale } from '@/lib/i18n'

interface LanguageSwitcherProps {
  lang: Locale
  label: string
  className?: string
}

export function LanguageSwitcher({ lang, label, className }: LanguageSwitcherProps) {
  const pathname = usePathname()
  // '/fr/services/seo' → '/services/seo'
  const currentPath = pathname.replace(new RegExp(`^/${lang}(?=/|$)`), '') || '/'

  return (
    <nav
      aria-label={label}
      className={clsx(
        'inline-flex items-center rounded-full border border-surface-border bg-white/80 p-0.5 text-xs font-semibold',
        className
      )}
    >
      {locales.map((locale) => {
        const active = locale === lang
        return (
          <Link
            key={locale}
            href={localizedHref(locale, translatePath(currentPath, lang, locale))}
            hrefLang={locale}
            lang={locale}
            aria-current={active ? 'true' : undefined}
            className={clsx(
              'px-2.5 py-1 rounded-full uppercase tracking-wide transition-colors duration-200',
              active ? 'bg-brand-blue-light text-brand-blue' : 'text-ink-muted hover:text-ink'
            )}
          >
            {locale}
          </Link>
        )
      })}
    </nav>
  )
}

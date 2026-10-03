'use client'

import { useCallback, useEffect, useId, useRef, useState } from 'react'
import Link from 'next/link'
import { X } from 'lucide-react'
import type { CommonDictionary } from '@/dictionaries/en/common'
import { OPEN_SETTINGS_EVENT, readConsent, saveConsent, type ConsentChoice } from '@/lib/consent'

type Mode = 'hidden' | 'banner' | 'panel'

interface CookieConsentProps {
  t: CommonDictionary['cookies']
  privacyHref: string
}

/** The banner / panel buttons share exactly the same style (same visual weight). */
const choiceButton =
  'inline-flex w-full items-center justify-center rounded-full border border-surface-border bg-white px-1 py-2.5 text-[12px] font-semibold min-[360px]:px-2 min-[360px]:text-[13px] text-ink transition-colors duration-200 hover:border-brand-blue-mid hover:bg-brand-blue-light hover:text-brand-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 sm:px-4 sm:text-sm'

/** Short label on mobile, full label from the "sm" breakpoint up. */
function ResponsiveLabel({ short, full }: { short: string; full: string }) {
  return (
    <>
      <span className="sm:hidden">{short}</span>
      <span className="hidden sm:inline">{full}</span>
    </>
  )
}

const focusRing =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2'

function Toggle({
  checked,
  onChange,
  labelledBy,
  describedBy,
}: {
  checked: boolean
  onChange: (value: boolean) => void
  labelledBy: string
  describedBy: string
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-labelledby={labelledBy}
      aria-describedby={describedBy}
      onClick={() => onChange(!checked)}
      className={`relative inline-flex h-6 w-11 flex-shrink-0 items-center rounded-full transition-colors duration-200 ${focusRing} ${
        checked ? 'bg-brand-blue' : 'bg-surface-border-mid'
      }`}
    >
      <span
        aria-hidden="true"
        className={`inline-block h-5 w-5 rounded-full bg-white shadow transition-transform duration-200 ${
          checked ? 'translate-x-[22px]' : 'translate-x-0.5'
        }`}
      />
    </button>
  )
}

export function CookieConsent({ t, privacyHref }: CookieConsentProps) {
  const [mode, setMode] = useState<Mode>('hidden')
  const [choice, setChoice] = useState<ConsentChoice>({ analytics: false, marketing: false })
  // Panel opened from the banner (first visit) or from the footer link
  const [openedFromBanner, setOpenedFromBanner] = useState(false)
  const panelRef = useRef<HTMLDivElement>(null)
  const returnFocusRef = useRef<HTMLElement | null>(null)
  const ids = useId()

  // First visit (or expired / outdated choice): show the banner
  useEffect(() => {
    if (!readConsent()) setMode('banner')
  }, [])

  // Footer link "Cookie settings": reopen the panel with the current choices
  useEffect(() => {
    const open = () => {
      returnFocusRef.current = document.activeElement as HTMLElement | null
      setChoice(readConsent() ?? { analytics: false, marketing: false })
      setOpenedFromBanner(false)
      setMode('panel')
    }
    window.addEventListener(OPEN_SETTINGS_EVENT, open)
    return () => window.removeEventListener(OPEN_SETTINGS_EVENT, open)
  }, [])

  // Lets the CSS hide the floating "Book a call" button on mobile while the banner is shown
  useEffect(() => {
    if (mode === 'banner') document.body.dataset.cookieBanner = 'open'
    else delete document.body.dataset.cookieBanner
  }, [mode])

  // Panel: move focus inside when it opens
  useEffect(() => {
    if (mode === 'panel') panelRef.current?.focus()
  }, [mode])

  const closePanel = useCallback(() => {
    if (openedFromBanner) {
      setMode('banner')
    } else {
      setMode('hidden')
      returnFocusRef.current?.focus()
    }
  }, [openedFromBanner])

  const save = (next: ConsentChoice) => {
    const withdrawn = saveConsent(next)
    setMode('hidden')
    // A category was withdrawn: reload so that tools already running in the page stop
    if (withdrawn) window.location.reload()
    else if (!openedFromBanner) returnFocusRef.current?.focus()
  }

  // Panel keyboard handling: Escape closes without saving, Tab stays inside the dialog
  const onPanelKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Escape') {
      e.preventDefault()
      closePanel()
      return
    }
    if (e.key !== 'Tab' || !panelRef.current) return
    const focusable = panelRef.current.querySelectorAll<HTMLElement>('button, a[href]')
    if (!focusable.length) return
    const first = focusable[0]
    const last = focusable[focusable.length - 1]
    if (e.shiftKey && (document.activeElement === first || document.activeElement === panelRef.current)) {
      e.preventDefault()
      last.focus()
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault()
      first.focus()
    }
  }

  if (mode === 'hidden') return null

  if (mode === 'banner') {
    return (
      <div
        role="dialog"
        aria-modal="false"
        aria-labelledby={`${ids}-banner-title`}
        aria-describedby={`${ids}-banner-text`}
        className="fixed inset-x-0 bottom-0 z-[70] p-2 sm:p-4 lg:inset-x-auto lg:bottom-5 lg:left-5 lg:max-w-[560px] lg:p-0"
      >
        <div className="rounded-2xl border border-surface-border bg-white p-3 shadow-[0_24px_60px_rgba(24,39,75,0.18)] min-[360px]:p-4 sm:p-6">
          <h2 id={`${ids}-banner-title`} className="font-display text-sm font-bold text-ink mb-1 sm:text-base sm:mb-2">
            {t.bannerTitle}
          </h2>
          <p id={`${ids}-banner-text`} className="text-[13px] leading-snug text-ink-secondary mb-3 sm:text-sm sm:leading-relaxed sm:mb-4">
            <span className="sm:hidden">{t.bannerTextShort}</span>
            <span className="hidden sm:inline">{t.bannerText}</span>{' '}
            <Link href={privacyHref} className={`font-semibold text-brand-blue underline underline-offset-2 rounded ${focusRing}`}>
              {t.privacyLink}
            </Link>
          </p>
          <div className="grid grid-cols-3 gap-1.5 min-[360px]:gap-2">
            <button type="button" className={choiceButton} onClick={() => save({ analytics: true, marketing: true })}>
              <ResponsiveLabel short={t.acceptShort} full={t.acceptAll} />
            </button>
            <button type="button" className={choiceButton} onClick={() => save({ analytics: false, marketing: false })}>
              <ResponsiveLabel short={t.rejectShort} full={t.rejectAll} />
            </button>
            <button
              type="button"
              className={choiceButton}
              onClick={() => {
                setChoice({ analytics: false, marketing: false })
                setOpenedFromBanner(true)
                setMode('panel')
              }}
            >
              <ResponsiveLabel short={t.customizeShort} full={t.customize} />
            </button>
          </div>
        </div>
      </div>
    )
  }

  const categories = [
    { key: 'analytics' as const, ...t.categories.analytics },
    { key: 'marketing' as const, ...t.categories.marketing },
  ]

  return (
    <div className="fixed inset-0 z-[80] flex items-end justify-center bg-ink/40 p-3 sm:items-center sm:p-4">
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={`${ids}-panel-title`}
        aria-describedby={`${ids}-panel-intro`}
        tabIndex={-1}
        onKeyDown={onPanelKeyDown}
        className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-surface-border bg-white p-5 shadow-[0_24px_60px_rgba(24,39,75,0.22)] focus:outline-none sm:p-7"
      >
        <div className="mb-3 flex items-start justify-between gap-4">
          <h2 id={`${ids}-panel-title`} className="font-display text-lg font-bold text-ink">
            {t.panelTitle}
          </h2>
          <button
            type="button"
            onClick={closePanel}
            aria-label={t.close}
            title={t.close}
            className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-ink-muted transition-colors hover:bg-surface-muted hover:text-ink ${focusRing}`}
          >
            <X size={16} />
          </button>
        </div>
        <p id={`${ids}-panel-intro`} className="mb-5 text-sm leading-relaxed text-ink-secondary">
          {t.panelIntro}{' '}
          <Link href={privacyHref} className={`font-semibold text-brand-blue underline underline-offset-2 rounded ${focusRing}`}>
            {t.privacyLink}
          </Link>
        </p>

        <div className="space-y-3 mb-6">
          <div className="rounded-xl border border-surface-border bg-surface-warm p-4">
            <div className="mb-1.5 flex items-center justify-between gap-4">
              <h3 className="text-sm font-semibold text-ink">{t.categories.necessary.title}</h3>
              <span className="rounded-full bg-brand-blue-light px-2.5 py-1 text-[11px] font-semibold text-brand-blue">
                {t.alwaysActive}
              </span>
            </div>
            <p className="text-xs leading-relaxed text-ink-muted">{t.categories.necessary.description}</p>
          </div>

          {categories.map((category) => (
            <div key={category.key} className="rounded-xl border border-surface-border p-4">
              <div className="mb-1.5 flex items-center justify-between gap-4">
                <h3 id={`${ids}-${category.key}-title`} className="text-sm font-semibold text-ink">
                  {category.title}
                </h3>
                <Toggle
                  checked={choice[category.key]}
                  onChange={(value) => setChoice((prev) => ({ ...prev, [category.key]: value }))}
                  labelledBy={`${ids}-${category.key}-title`}
                  describedBy={`${ids}-${category.key}-text`}
                />
              </div>
              <p id={`${ids}-${category.key}-text`} className="text-xs leading-relaxed text-ink-muted">
                {category.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          <button type="button" className={choiceButton} onClick={() => save(choice)}>
            {t.save}
          </button>
          <button type="button" className={choiceButton} onClick={() => save({ analytics: true, marketing: true })}>
            {t.acceptAll}
          </button>
        </div>
      </div>
    </div>
  )
}

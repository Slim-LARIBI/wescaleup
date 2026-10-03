'use client'

import { OPEN_SETTINGS_EVENT } from '@/lib/consent'

/** Footer link that reopens the cookie panel with the current choices. */
export function CookieSettingsButton({ label, className }: { label: string; className?: string }) {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(OPEN_SETTINGS_EVENT))}
      className={className}
    >
      {label}
    </button>
  )
}

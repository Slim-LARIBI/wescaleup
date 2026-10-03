/**
 * Cookie consent (GDPR / CNIL) with Google Consent Mode v2.
 *
 * - CONSENT_INIT_SCRIPT runs in <head>, before GTM: it declares the "denied" defaults and,
 *   if a valid choice is stored in the wsu_consent cookie, applies it right away.
 * - The banner (components/consent/CookieConsent.tsx) uses the helpers below to save a choice.
 */

export const CONSENT_COOKIE = 'wsu_consent'
/** Increase this number to ask every visitor again (e.g. when a new tool is added). */
export const CONSENT_VERSION = 1
/** 6 months */
export const CONSENT_MAX_AGE_SECONDS = 183 * 24 * 60 * 60
/** Event used by the footer link "Cookie settings" to reopen the panel. */
export const OPEN_SETTINGS_EVENT = 'wsu:open-cookie-settings'

export interface ConsentChoice {
  analytics: boolean
  marketing: boolean
}

interface StoredConsent {
  v: number
  /** Date of the choice (timestamp in ms) */
  d: number
  a: boolean
  m: boolean
}

/** First-party cookies set by each category's tools, deleted when consent is withdrawn. */
const CATEGORY_COOKIES: Record<keyof ConsentChoice, RegExp> = {
  // GA4 (_ga, _ga_*, _gid), Clarity (_clck, _clsk), Hotjar (_hj*)
  analytics: /^(_ga|_ga_.+|_gid|_clck|_clsk|_hj.*)$/,
  // Google Ads (_gcl_au, _gcl_*), Meta (_fbp, _fbc), LinkedIn (li_fat_id, li_sugr)
  marketing: /^(_gcl_.+|_fbp|_fbc|li_fat_id|li_sugr)$/,
}

type Gtag = (...args: unknown[]) => void

declare global {
  interface Window {
    dataLayer: unknown[]
    gtag?: Gtag
  }
}

function consentState({ analytics, marketing }: ConsentChoice) {
  const ads = marketing ? 'granted' : 'denied'
  return {
    analytics_storage: analytics ? 'granted' : 'denied',
    ad_storage: ads,
    ad_user_data: ads,
    ad_personalization: ads,
  }
}

/** Returns the stored choice, or null if there is none, it is outdated or older than 6 months. */
export function readConsent(): ConsentChoice | null {
  const match = document.cookie.match(new RegExp(`(?:^|; )${CONSENT_COOKIE}=([^;]*)`))
  if (!match) return null
  try {
    const stored = JSON.parse(decodeURIComponent(match[1])) as StoredConsent
    const isValid =
      stored.v === CONSENT_VERSION &&
      typeof stored.d === 'number' &&
      Date.now() - stored.d < CONSENT_MAX_AGE_SECONDS * 1000
    return isValid ? { analytics: Boolean(stored.a), marketing: Boolean(stored.m) } : null
  } catch {
    return null
  }
}

function writeConsent({ analytics, marketing }: ConsentChoice) {
  const value: StoredConsent = { v: CONSENT_VERSION, d: Date.now(), a: analytics, m: marketing }
  const secure = window.location.protocol === 'https:' ? '; Secure' : ''
  document.cookie =
    `${CONSENT_COOKIE}=${encodeURIComponent(JSON.stringify(value))}; Max-Age=${CONSENT_MAX_AGE_SECONDS}` +
    `; Path=/; SameSite=Lax${secure}`
}

/** Sends the choice to Google Consent Mode and pushes the consent_update event for GTM. */
export function applyConsent(choice: ConsentChoice) {
  window.dataLayer = window.dataLayer || []
  const gtag: Gtag =
    window.gtag ||
    function () {
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer.push(arguments)
    }
  gtag('consent', 'update', consentState(choice))
  window.dataLayer.push({
    event: 'consent_update',
    consent_analytics: choice.analytics,
    consent_marketing: choice.marketing,
  })
}

/** Deletes a cookie on the current host and on every parent domain (e.g. .wescaleup.tech). */
function deleteCookie(name: string) {
  const parts = window.location.hostname.split('.')
  const domains: (string | null)[] = [null]
  for (let i = 0; i < parts.length - 1; i++) {
    const domain = parts.slice(i).join('.')
    domains.push(domain, `.${domain}`)
  }
  for (const domain of domains) {
    document.cookie =
      `${name}=; Max-Age=0; Expires=Thu, 01 Jan 1970 00:00:00 GMT; Path=/` +
      (domain ? `; Domain=${domain}` : '')
  }
}

function deleteCategoryCookies(category: keyof ConsentChoice) {
  document.cookie
    .split('; ')
    .map((cookie) => cookie.split('=')[0])
    .filter((name) => name !== CONSENT_COOKIE && CATEGORY_COOKIES[category].test(name))
    .forEach(deleteCookie)
}

/**
 * Saves a choice. Returns true when a previously accepted category was withdrawn:
 * its cookies are deleted and the page should be reloaded so that already-running tools stop.
 */
export function saveConsent(choice: ConsentChoice): boolean {
  const previous = readConsent()
  writeConsent(choice)
  applyConsent(choice)

  let withdrawn = false
  for (const category of ['analytics', 'marketing'] as const) {
    if (!choice[category]) {
      deleteCategoryCookies(category)
      if (previous?.[category]) withdrawn = true
    }
  }
  return withdrawn
}

/**
 * Inline script placed in <head>, before GTM (plain ES5, no dependencies).
 * Same logic as readConsent() + applyConsent(), so a returning visitor's choice is
 * known by GTM from the very first tag.
 */
export const CONSENT_INIT_SCRIPT = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
gtag('consent', 'default', {
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  analytics_storage: 'denied',
  functionality_storage: 'granted',
  security_storage: 'granted',
  wait_for_update: 500
});
gtag('set', 'ads_data_redaction', true);
gtag('set', 'url_passthrough', true);
try {
  var m = document.cookie.match(/(?:^|; )${CONSENT_COOKIE}=([^;]*)/);
  if (m) {
    var c = JSON.parse(decodeURIComponent(m[1]));
    if (c && c.v === ${CONSENT_VERSION} && typeof c.d === 'number' && Date.now() - c.d < ${CONSENT_MAX_AGE_SECONDS * 1000}) {
      var ads = c.m ? 'granted' : 'denied';
      gtag('consent', 'update', {
        analytics_storage: c.a ? 'granted' : 'denied',
        ad_storage: ads,
        ad_user_data: ads,
        ad_personalization: ads
      });
      dataLayer.push({ event: 'consent_update', consent_analytics: !!c.a, consent_marketing: !!c.m });
    }
  }
} catch (e) {}
`

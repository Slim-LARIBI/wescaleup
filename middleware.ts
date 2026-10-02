import { NextResponse, type NextRequest } from 'next/server'
import {
  defaultLocale,
  isKnownPath,
  isLocale,
  localizedHref,
  localizedSlugs,
  locales,
  sharedRoutes,
  translatePath,
  type Locale,
} from '@/lib/i18n'

/** Old addresses without a language prefix that redirect (308) to their French version. */
const legacyPaths = new Set([
  ...sharedRoutes,
  ...localizedSlugs.flatMap((slugs) => Object.values(slugs)),
])

/** Shows the translated "page not found" page with a real 404 status, without changing the URL. */
function notFound(request: NextRequest, lang: Locale) {
  const url = request.nextUrl.clone()
  url.pathname = `/${lang}/introuvable`
  return NextResponse.rewrite(url, { status: 404 })
}

function redirect(request: NextRequest, pathname: string) {
  const url = request.nextUrl.clone()
  url.pathname = pathname
  return NextResponse.redirect(url, 308)
}

/**
 *   /                   → /fr                  (308)
 *   /services/seo       → /fr/services/seo     (308)
 *   /privacy            → /fr/confidentialite  (308)
 *   /en/confidentialite → /en/privacy          (308)
 *   unknown address     → translated 404 page  (404)
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const [, firstSegment] = pathname.split('/')

  if (isLocale(firstSegment)) {
    const lang = firstSegment
    const path = pathname.slice(lang.length + 1) || '/'
    if (isKnownPath(path, lang)) return NextResponse.next()

    // Legal page requested with the slug of the other language
    for (const other of locales) {
      const translated = translatePath(path, other, lang)
      if (translated !== path) return redirect(request, localizedHref(lang, translated))
    }

    return notFound(request, lang)
  }

  if (legacyPaths.has(pathname)) {
    return redirect(request, localizedHref(defaultLocale, translatePath(pathname, 'en', defaultLocale)))
  }

  return notFound(request, defaultLocale)
}

export const config = {
  // Skip API routes, Next.js internals, root metadata files and any file with an extension
  matcher: ['/((?!api|_next/static|_next/image|icon.svg|robots.txt|sitemap.xml|.*\\..*).*)'],
}

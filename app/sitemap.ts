import type { MetadataRoute } from 'next'
import { absoluteUrl, localizedSlugs, locales, sharedRoutes, type Locale } from '@/lib/i18n'

/** One entry per page and per language, each listing its fr / en / x-default alternates. */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  // Same slug in every language (/fr/services ↔ /en/services) or a different one (/fr/confidentialite ↔ /en/privacy)
  const pages: Record<Locale, string>[] = [
    ...sharedRoutes.map((path) => ({ fr: path, en: path })),
    ...localizedSlugs,
  ]

  return pages.flatMap((paths) => {
    const languages = {
      fr: absoluteUrl('fr', paths.fr),
      en: absoluteUrl('en', paths.en),
      'x-default': absoluteUrl('fr', paths.fr),
    }
    return locales.map((lang) => ({
      url: absoluteUrl(lang, paths[lang]),
      lastModified,
      alternates: { languages },
    }))
  })
}

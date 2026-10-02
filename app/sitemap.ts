import type { MetadataRoute } from 'next'

const BASE_URL = 'https://www.wescaleup.tech'

const routes = [
  '/',
  '/services',
  '/services/meta-ads',
  '/services/sea',
  '/services/seo',
  '/services/analytics',
  '/services/automation',
  '/services/custom-saas',
  '/contact',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  return routes.map((route) => ({
    url: route === '/' ? BASE_URL : `${BASE_URL}${route}`,
    lastModified,
  }))
}

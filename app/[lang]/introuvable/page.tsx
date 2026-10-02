import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { getDictionary } from '@/dictionaries'
import { localizedHref, type Locale } from '@/lib/i18n'

// Shown by the middleware (with a 404 status) for any address that matches no page
interface PageProps {
  params: { lang: Locale }
}

export function generateMetadata({ params }: PageProps): Metadata {
  const { notFound } = getDictionary(params.lang).common
  return {
    title: notFound.title,
    robots: { index: false, follow: true },
  }
}

export default function NotFoundPage({ params }: PageProps) {
  const { lang } = params
  const t = getDictionary(lang).common.notFound

  return (
    <section className="relative overflow-hidden bg-hero-mesh pt-40 pb-28">
      <div className="container-narrow text-center">
        <p className="font-display font-bold text-gradient-brand text-7xl mb-6">404</p>
        <h1 className="font-display font-bold text-ink text-3xl lg:text-4xl mb-4">{t.title}</h1>
        <p className="text-ink-muted text-lg mb-10">{t.text}</p>
        <Link
          href={localizedHref(lang, '/')}
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-brand-blue text-white font-semibold shadow-button hover:bg-brand-blue-dark hover:shadow-button-hover transition-all duration-200"
        >
          {t.cta}
          <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  )
}

import { whyPoints } from '@/lib/data'
import { FadeIn, StaggerChildren, StaggerItem } from '@/components/ui/FadeIn'
import { SectionHeader } from '@/components/ui/SectionLabel'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export function WhyWescaleup() {
  return (
    <section id="why" className="section-pad bg-white">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left column — sticky header */}
          <FadeIn className="lg:col-span-5 lg:sticky lg:top-28">
            <SectionHeader
              label="Why Wescaleup"
              labelVariant="orange"
              title={
                <>
                  We build growth{' '}
                  <span className="text-gradient-warm">systems,</span>
                  {' '}not guesswork.
                </>
              }
              subtitle="Most agencies execute tactics. We engineer durable growth systems that combine technical precision, reliable data, and business-driven execution."
              align="left"
            />

            <div className="mt-8 p-6 rounded-2xl bg-ink text-white">
              <p className="text-sm leading-relaxed text-white/80 mb-4">
                Our approach ensures that every campaign, every tracking pixel, and every
                automation workflow serves a single purpose: predictable, measurable growth.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand-blue-mid hover:text-white transition-colors"
              >
                Discuss your growth goals <ArrowRight size={14} />
              </Link>
            </div>
          </FadeIn>

          {/* Right column — feature grid */}
          <StaggerChildren
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5"
            staggerDelay={0.08}
          >
            {whyPoints.map((point) => (
              <StaggerItem key={point.title}>
                <div className="card p-7 h-full hover:shadow-card-hover transition-shadow duration-300">
                  <div className="text-3xl mb-4">{point.icon}</div>
                  <h3 className="font-display font-bold text-ink text-base mb-2.5">
                    {point.title}
                  </h3>
                  <p className="text-ink-muted text-sm leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </div>
    </section>
  )
}

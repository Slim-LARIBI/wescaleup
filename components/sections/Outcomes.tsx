import { outcomes } from '@/lib/data'
import { FadeIn, StaggerChildren, StaggerItem } from '@/components/ui/FadeIn'
import { SectionHeader } from '@/components/ui/SectionLabel'
import { CheckCircle2 } from 'lucide-react'

const industries = [
  'E-commerce & DTC',
  'B2B SaaS',
  'Lead Generation',
  'Retail & Fashion',
  'Travel & Hospitality',
  'Health & Wellness',
  'Professional Services',
  'Tech & Startups',
]

export function Outcomes() {
  return (
    <section className="section-pad bg-white">
      <div className="container-site">
        <FadeIn className="mb-16 flex flex-col items-center">
          <SectionHeader
            label="Business Outcomes"
            labelVariant="orange"
            title={
              <>
                Real results,{' '}
                <span className="text-gradient-warm">measurable impact.</span>
              </>
            }
            subtitle="Here is what happens when tracking, marketing, and automation work together as a unified system."
          />
        </FadeIn>

        <StaggerChildren
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-20"
          staggerDelay={0.08}
        >
          {outcomes.map((outcome) => (
            <StaggerItem key={outcome.title}>
              <div className="card p-7 h-full hover:shadow-card-hover transition-shadow duration-300 group">
                <div className="text-3xl mb-5">{outcome.icon}</div>
                <h3 className="font-display font-bold text-ink text-base mb-3 group-hover:text-brand-blue transition-colors duration-200">
                  {outcome.title}
                </h3>
                <p className="text-ink-muted text-sm leading-relaxed">{outcome.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>

        {/* Industries */}
        <FadeIn>
          <div className="border-t border-surface-border pt-16">
            <p className="text-center text-xs font-semibold tracking-widest uppercase text-ink-light mb-8">
              Industries we work with
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {industries.map((industry) => (
                <div
                  key={industry}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-surface-muted border border-surface-border text-sm font-medium text-ink-secondary"
                >
                  <CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" />
                  {industry}
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

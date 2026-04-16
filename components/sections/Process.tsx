import { processSteps } from '@/lib/data'
import { FadeIn, StaggerChildren, StaggerItem } from '@/components/ui/FadeIn'
import { SectionHeader } from '@/components/ui/SectionLabel'
import { ArrowRight } from 'lucide-react'

export function Process() {
  return (
    <section id="process" className="section-pad bg-surface-muted">
      <div className="container-site">
        <FadeIn className="mb-16 flex flex-col items-center">
          <SectionHeader
            label="How We Work"
            title={
              <>
                A clear process,{' '}
                <span className="text-gradient-brand">measurable progress.</span>
              </>
            }
            subtitle="We follow a structured engagement model that ensures clarity, alignment, and results at every stage of the project."
          />
        </FadeIn>

        {/* Desktop: horizontal steps */}
        <div className="hidden lg:block">
          <StaggerChildren
            className="grid grid-cols-5 gap-4 relative"
            staggerDelay={0.1}
          >
            {/* Connecting line */}
            <div
              className="absolute top-8 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-brand-blue-mid via-brand-blue to-violet-400 opacity-30"
              aria-hidden
            />

            {processSteps.map((step) => (
              <StaggerItem key={step.number}>
                <div className="relative flex flex-col items-center text-center group">
                  {/* Number circle */}
                  <div className="w-16 h-16 rounded-full bg-white border-2 border-brand-blue-mid/30 flex items-center justify-center mb-6 shadow-card group-hover:border-brand-blue group-hover:shadow-card-hover transition-all duration-300 relative z-10">
                    <span className="font-display font-bold text-brand-blue text-lg">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-ink text-sm mb-3">{step.title}</h3>
                  <p className="text-ink-muted text-xs leading-relaxed">{step.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>

        {/* Mobile: vertical steps */}
        <div className="lg:hidden space-y-4">
          {processSteps.map((step, i) => (
            <FadeIn key={step.number} delay={i * 0.08}>
              <div className="card p-6">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-full bg-gradient-brand flex items-center justify-center flex-shrink-0 shadow-button">
                    <span className="text-white font-bold text-sm">{step.number}</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-display font-bold text-ink text-base">{step.title}</h3>
                      {i < processSteps.length - 1 && (
                        <ArrowRight size={14} className="text-ink-light" />
                      )}
                    </div>
                    <p className="text-ink-muted text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Bottom trust note */}
        <FadeIn delay={0.3} className="mt-14">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 p-8 rounded-2xl bg-white border border-surface-border">
            {[
              { value: 'Week 1', label: 'Full audit delivered' },
              { value: 'Week 2–3', label: 'Strategy aligned & approved' },
              { value: 'Week 4+', label: 'Implementation underway' },
              { value: 'Ongoing', label: 'Optimize, report & scale' },
            ].map((item, i) => (
              <div key={item.value} className="flex items-center gap-4">
                <div className="text-center">
                  <div className="font-display font-bold text-brand-blue text-sm">{item.value}</div>
                  <div className="text-xs text-ink-muted mt-0.5">{item.label}</div>
                </div>
                {i < 3 && (
                  <ArrowRight size={16} className="text-surface-border-mid hidden sm:block flex-shrink-0" />
                )}
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

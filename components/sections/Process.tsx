import { FadeIn, StaggerChildren, StaggerItem } from '@/components/ui/FadeIn'
import { SectionHeader } from '@/components/ui/SectionLabel'
import { ArrowRight } from 'lucide-react'
import type { HomeDictionary } from '@/dictionaries/en/home'

export function Process({ t }: { t: HomeDictionary['process'] }) {
  return (
    <section id="process" className="section-pad bg-surface-muted">
      <div className="container-site">
        <FadeIn className="mb-16 flex flex-col items-center">
          <SectionHeader
            label={t.label}
            title={
              <>
                {t.titleStart}{' '}
                <span className="text-gradient-brand">{t.titleHighlight}</span>
              </>
            }
            subtitle={t.subtitle}
          />
        </FadeIn>

        {/* Steps: vertical cards on mobile, 5 horizontal columns on desktop */}
        <StaggerChildren
          className="relative grid grid-cols-1 lg:grid-cols-5 gap-4"
          staggerDelay={0.1}
        >
          {/* Connecting line (desktop only) */}
          <div
            className="hidden lg:block absolute top-8 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-brand-blue-mid via-brand-blue to-violet-400 opacity-30"
            aria-hidden
          />

          {t.steps.map((step, i) => (
            <StaggerItem key={step.title}>
              <div className="card p-6 lg:p-0 lg:bg-transparent lg:border-0 lg:shadow-none lg:rounded-none group">
                <div className="flex items-start gap-5 lg:relative lg:flex-col lg:items-center lg:gap-0 lg:text-center">
                  {/* Number circle */}
                  <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-gradient-brand shadow-button lg:bg-none lg:bg-white lg:border-2 lg:border-brand-blue-mid/30 lg:shadow-card lg:mb-6 lg:group-hover:border-brand-blue lg:group-hover:shadow-card-hover flex items-center justify-center flex-shrink-0 transition-all duration-300 relative z-10">
                    <span className="font-bold text-white text-sm lg:font-display lg:text-brand-blue lg:text-lg">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2 lg:mb-3 lg:justify-center">
                      <h3 className="font-display font-bold text-ink text-base lg:text-sm">{step.title}</h3>
                      {i < t.steps.length - 1 && (
                        <ArrowRight size={14} className="text-ink-light lg:hidden" />
                      )}
                    </div>
                    <p className="text-ink-muted text-sm lg:text-xs leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>

        {/* Bottom trust note */}
        <FadeIn delay={0.3} className="mt-14">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 p-8 rounded-2xl bg-white border border-surface-border">
            {t.timeline.map((item, i) => (
              <div key={item.value} className="flex items-center gap-4">
                <div className="text-center">
                  <div className="font-display font-bold text-brand-blue text-sm">{item.value}</div>
                  <div className="text-xs text-ink-muted mt-0.5">{item.label}</div>
                </div>
                {i < t.timeline.length - 1 && (
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

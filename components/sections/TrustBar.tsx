import { FadeIn } from '@/components/ui/FadeIn'
import { CheckCircle2 } from 'lucide-react'
import type { HomeDictionary } from '@/dictionaries/en/home'

export function TrustBar({ t }: { t: HomeDictionary['trustBar'] }) {
  return (
    <section className="bg-white border-y border-surface-border section-pad-sm">
      <div className="container-site">
        <FadeIn>
          <p className="text-center text-xs font-semibold tracking-widest uppercase text-ink-light mb-8">
            {t.title}
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="flex flex-wrap items-center justify-center gap-3 lg:gap-4">
            {t.pillars.map((pillar) => (
              <div
                key={pillar}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-surface-muted border border-surface-border text-sm font-medium text-ink-secondary"
              >
                <CheckCircle2 size={14} className="text-brand-blue flex-shrink-0" />
                {pillar}
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

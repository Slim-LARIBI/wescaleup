import type { Metadata } from 'next'
import { ContactForm } from '@/components/sections/ContactForm'
import { FadeIn } from '@/components/ui/FadeIn'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Mail, Calendar, Clock, Globe } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact — Book a Discovery Call',
  description:
    'Book a free 30-minute discovery call with Wescaleup. Share your growth goals and we will show you the path forward.',
}

const details = [
  {
    icon: Calendar,
    title: 'Discovery Call',
    description: 'Free 30-minute call to understand your goals, current setup, and growth opportunities.',
  },
  {
    icon: Clock,
    title: 'Fast Response',
    description: 'We respond to every inquiry within 24 hours on business days.',
  },
  {
    icon: Globe,
    title: 'Remote-First',
    description: 'We work with brands worldwide. All engagements are fully remote.',
  },
  {
    icon: Mail,
    title: 'Direct Contact',
    description: 'Prefer email? Reach us directly at hello@wescaleup.com',
  },
]

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-hero-mesh pt-32 pb-16">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 right-0 w-[500px] h-[500px] rounded-full bg-gradient-orb-blue opacity-25 blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-gradient-orb-violet opacity-15 blur-3xl" />
        </div>

        <div className="container-site relative z-10">
          <FadeIn className="max-w-2xl">
            <SectionLabel variant="blue">Contact</SectionLabel>
            <h1
              className="font-display font-bold text-ink text-balance mt-5 mb-5"
              style={{ fontSize: 'clamp(2.25rem, 5vw, 3.75rem)', lineHeight: '1.08', letterSpacing: '-0.03em' }}
            >
              Let&apos;s discuss
              <span className="text-gradient-brand block">your growth.</span>
            </h1>
            <p className="text-ink-muted text-lg leading-relaxed max-w-lg">
              Tell us about your brand, your current challenges, and your growth goals.
              We will come back to you with honest clarity and a clear path forward.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Main content */}
      <section className="section-pad bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left — info */}
            <FadeIn direction="right" className="lg:col-span-4 space-y-8">
              <div>
                <h2 className="font-display font-bold text-ink text-xl mb-2">
                  How it works
                </h2>
                <p className="text-ink-muted text-sm leading-relaxed">
                  Fill out the form and we will reach out within 24 hours to
                  schedule your free discovery call.
                </p>
              </div>

              <div className="space-y-5">
                {details.map((detail) => (
                  <div key={detail.title} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-blue-light border border-brand-blue-mid/30 flex items-center justify-center flex-shrink-0">
                      <detail.icon size={16} className="text-brand-blue" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-ink text-sm mb-1">{detail.title}</h3>
                      <p className="text-ink-muted text-xs leading-relaxed">{detail.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Reassurance block */}
              <div className="p-5 rounded-2xl bg-surface-muted border border-surface-border">
                <p className="text-sm font-semibold text-ink mb-2">
                  What to expect on the call
                </p>
                <ul className="space-y-2 text-xs text-ink-muted">
                  {[
                    'We listen to your situation and goals',
                    'We audit your current tracking & marketing setup',
                    'We share our honest assessment',
                    'We propose a clear engagement path',
                    'No hard sell — just clarity',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <div className="w-1 h-1 rounded-full bg-brand-blue mt-1.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Trust */}
              <div className="pt-4 border-t border-surface-border">
                <p className="text-xs text-ink-light mb-3 font-medium">Trusted by brands across</p>
                <div className="flex flex-wrap gap-2">
                  {['E-commerce', 'B2B SaaS', 'Lead Gen', 'Retail', 'Tech'].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 rounded-full bg-surface-muted border border-surface-border text-xs font-medium text-ink-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Right — form */}
            <FadeIn direction="left" delay={0.1} className="lg:col-span-8">
              <ContactForm />
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  )
}

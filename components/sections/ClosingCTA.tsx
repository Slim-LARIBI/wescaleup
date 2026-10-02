import Link from 'next/link'
import { ArrowRight, Calendar, MessageSquare } from 'lucide-react'
import { FadeIn } from '@/components/ui/FadeIn'

export function ClosingCTA() {
  return (
    <section className="section-pad relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-cta-mesh" />
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-brand-blue/20 blur-3xl" />
      </div>

      <div className="container-narrow relative z-10">
        <FadeIn className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-xs font-semibold tracking-widest uppercase text-white/70 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Currently accepting new projects
          </div>

          <h2
            className="font-display font-bold text-white text-balance mb-6"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: '1.1', letterSpacing: '-0.025em' }}
          >
            Ready to build your
            <br />
            <span className="text-brand-blue-mid">growth engine?</span>
          </h2>

          <p className="text-white/70 text-lg leading-relaxed max-w-xl mx-auto mb-12">
            Start with a free 30-minute discovery call. We will audit your current setup,
            identify the highest-leverage opportunities, and share a clear path forward.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white text-ink font-semibold text-base hover:bg-brand-blue-light transition-all duration-200 ease-premium shadow-lg hover:shadow-xl group"
            >
              <Calendar size={16} />
              Book a discovery call
              <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="mailto:slim.laribi@wescaleup.tech"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white/10 border border-white/20 text-white font-semibold text-base hover:bg-white/20 transition-all duration-200 ease-premium"
            >
              <MessageSquare size={16} />
              Send us a message
            </Link>
          </div>

          {/* Trust points */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/50">
            {[
              'No commitment required',
              'Free audit included',
              'Response within 24h',
              'Remote-first, worldwide',
            ].map((point) => (
              <div key={point} className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-brand-blue-mid" />
                {point}
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

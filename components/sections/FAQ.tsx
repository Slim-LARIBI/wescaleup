'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { faqs } from '@/lib/data'
import { FadeIn } from '@/components/ui/FadeIn'
import { SectionHeader } from '@/components/ui/SectionLabel'

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="section-pad bg-surface-muted">
      <div className="container-narrow">
        <FadeIn className="mb-14 flex flex-col items-center">
          <SectionHeader
            label="FAQ"
            labelVariant="neutral"
            title="Common questions"
            subtitle="Everything you need to know before we start working together."
          />
        </FadeIn>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FadeIn key={i} delay={i * 0.04}>
              <div className="card overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left hover:bg-surface-warm transition-colors duration-200"
                  aria-expanded={openIndex === i}
                >
                  <span className="font-display font-semibold text-ink text-sm sm:text-base pr-4">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === i ? 180 : 0 }}
                    transition={{ duration: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
                    className="flex-shrink-0 w-7 h-7 rounded-full bg-surface-muted flex items-center justify-center"
                  >
                    <ChevronDown size={15} className="text-ink-muted" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
                    >
                      <div className="px-6 pb-6">
                        <div className="h-px bg-surface-border mb-5" />
                        <p className="text-ink-secondary text-sm leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

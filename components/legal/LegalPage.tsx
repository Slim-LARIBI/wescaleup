import { Fragment } from 'react'
import { FadeIn } from '@/components/ui/FadeIn'
import { SectionLabel } from '@/components/ui/SectionLabel'

export interface LegalSection {
  title: string
  paragraphs?: string[]
  list?: string[]
  /** Paragraphs displayed after the list */
  after?: string[]
}

interface LegalPageProps {
  label: string
  title: string
  updated: string
  intro?: string
  sections: LegalSection[]
}

const TOKEN = /([\w.+-]+@[\w-]+(?:\.[\w-]+)+|https?:\/\/[^\s)]*[^\s).,;])/g

/** Turns emails and URLs into links. */
function RichText({ text }: { text: string }) {
  return (
    <>
      {text.split(TOKEN).map((part, i) => {
        if (/^[\w.+-]+@[\w-]+(?:\.[\w-]+)+$/.test(part)) {
          return (
            <a key={i} href={`mailto:${part}`} className="text-brand-blue hover:underline">
              {part}
            </a>
          )
        }
        if (/^https?:\/\//.test(part)) {
          return (
            <a
              key={i}
              href={part}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-blue hover:underline"
            >
              {part}
            </a>
          )
        }
        return <Fragment key={i}>{part}</Fragment>
      })}
    </>
  )
}

export function LegalPage({ label, title, updated, intro, sections }: LegalPageProps) {
  return (
    <>
      <section className="relative overflow-hidden bg-hero-mesh pt-32 pb-14 lg:pt-36 lg:pb-16">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 right-0 w-[520px] h-[520px] rounded-full bg-gradient-orb-blue opacity-25 blur-3xl" />
        </div>
        <div className="container-narrow relative z-10">
          <FadeIn>
            <SectionLabel variant="neutral">{label}</SectionLabel>
            <h1
              className="font-display font-bold text-ink mt-5 mb-4"
              style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)', lineHeight: '1.05', letterSpacing: '-0.035em' }}
            >
              {title}
            </h1>
            <p className="text-sm text-ink-muted">{updated}</p>
          </FadeIn>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-narrow">
          {intro && (
            <p className="text-ink-secondary text-base leading-relaxed mb-12">
              <RichText text={intro} />
            </p>
          )}

          <div className="space-y-10">
            {sections.map((section, i) => (
              <div key={section.title}>
                <h2 className="font-display font-bold text-ink text-xl lg:text-2xl mb-4">
                  {i + 1}. {section.title}
                </h2>
                <div className="space-y-3 text-ink-secondary text-[15px] leading-relaxed">
                  {section.paragraphs?.map((paragraph, j) => (
                    <p key={j}>
                      <RichText text={paragraph} />
                    </p>
                  ))}
                  {section.list && (
                    <ul className="space-y-2 pl-1">
                      {section.list.map((item, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-blue flex-shrink-0" />
                          <span>
                            <RichText text={item} />
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {section.after?.map((paragraph, j) => (
                    <p key={j}>
                      <RichText text={paragraph} />
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

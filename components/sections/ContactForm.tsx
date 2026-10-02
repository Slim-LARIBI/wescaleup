'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Loader2, ShieldCheck } from 'lucide-react'
import type { ContactDictionary } from '@/dictionaries/en/contact'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

// Values sent to the API / Airtable — kept in English in every language.
// The labels shown to the visitor come from the dictionary (same order).

const projectTypes = [
  'Meta Ads',
  'SEA / Google Ads',
  'SEO',
  'Analytics / Tracking',
  'Marketing Automation',
  'Custom SaaS',
  'Full Growth System',
  'Not sure yet',
]

const businessTypes = [
  'E-commerce / DTC',
  'B2B SaaS',
  'Lead Generation',
  'Agency / Service Business',
  'Marketplace / Platform',
  'Internal Ops / Reporting',
  'Other',
]

const budgets = [
  'Under €2,000',
  '€2,000 – €5,000',
  '€5,000 – €10,000',
  '€10,000 – €20,000',
  '€20,000+',
  'Project-based',
  'Not sure yet',
]

const timelines = [
  'ASAP — urgent',
  'Within 2 weeks',
  'Within 1 month',
  '1–3 months',
  'Exploring options',
]

const adSpendRanges = [
  'Not running ads yet',
  'Under €5,000/mo',
  '€5,000 – €15,000/mo',
  '€15,000 – €50,000/mo',
  '€50,000+/mo',
  'Not relevant',
]

const currentStacks = [
  'Shopify',
  'WooCommerce',
  'GA4',
  'GTM',
  'Meta Ads',
  'Google Ads',
  'Klaviyo',
  'HubSpot',
  'n8n / Make',
  'Custom stack',
]

interface ContactFormProps {
  t: ContactDictionary['form']
  privacyHref: string
}

export function ContactForm({ t, privacyHref }: ContactFormProps) {
  const [formState, setFormState] = useState<FormState>('idle')
  // Anti-spam: time at which the form was displayed (checked by the API)
  const formStartedAt = useRef<number | null>(null)

  useEffect(() => {
    formStartedAt.current = Date.now()
  }, [])
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    website: '',
    projectType: '',
    businessType: '',
    budget: '',
    timeline: '',
    adSpend: '',
    currentStack: '',
    goals: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Honeypot value read straight from the DOM (robots fill it without triggering React events)
    const fax = new FormData(e.currentTarget).get('fax') ?? ''
    setFormState('submitting')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          fax,
          formStartedAt: formStartedAt.current,
          formSubmittedAt: Date.now(),
        }),
      })

      const data = await response.json()

      if (!response.ok || !data.success) {
        throw new Error(data?.error || 'Submission failed')
      }

      console.log('Contact API response:', data)
      setFormState('success')
    } catch (error) {
      console.error(error)
      setFormState('error')
    }
  }

  if (formState === 'success') {
    return (
      <div className="rounded-[28px] border border-surface-border bg-white p-10 lg:p-14 shadow-[0_24px_60px_rgba(24,39,75,0.08)] flex flex-col items-center text-center">
        <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center mb-6">
          <CheckCircle2 size={28} className="text-emerald-500" />
        </div>

        <h3 className="font-display font-bold text-ink text-2xl mb-3">
          {t.successTitle}
        </h3>

        <p className="text-ink-muted text-base leading-relaxed max-w-md">
          {t.successText}
        </p>
      </div>
    )
  }

  return (
    <div className="rounded-[28px] border border-surface-border bg-white shadow-[0_24px_60px_rgba(24,39,75,0.08)] overflow-hidden">
      <div className="border-b border-surface-border px-8 lg:px-10 py-6 bg-[linear-gradient(180deg,rgba(37,99,235,0.03),rgba(255,255,255,0.9))]">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
          <div>
            <p className="text-[11px] uppercase tracking-[0.18em] text-ink-light font-semibold mb-2">
              {t.eyebrow}
            </p>
            <h2 className="font-display font-bold text-ink text-2xl">
              {t.title}
            </h2>
            <p className="text-sm text-ink-muted mt-2 max-w-2xl">
              {t.subtitle}
            </p>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-brand-blue-light border border-brand-blue-mid/20 text-xs font-semibold text-brand-blue">
            <ShieldCheck size={14} />
            {t.reviewedBadge}
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="p-8 lg:p-10 space-y-8">
        {/* Identity */}
        <div>
          <p className="text-[11px] uppercase tracking-[0.18em] text-ink-light font-semibold mb-4">
            {t.basicDetails}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label
                htmlFor="name"
                className="block text-xs font-semibold text-ink-secondary mb-2 uppercase tracking-wide"
              >
                {t.name} <span className="text-brand-orange">*</span>
              </label>
              <input
                id="name"
                name="name"
                maxLength={100}
                type="text"
                required
                placeholder={t.namePlaceholder}
                value={form.name}
                onChange={handleChange}
                className="w-full px-4 py-3.5 rounded-2xl border border-surface-border bg-surface-warm text-ink text-sm placeholder:text-ink-light focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue/30 transition-all duration-200"
              />
            </div>

            <div>
              <label
                htmlFor="company"
                className="block text-xs font-semibold text-ink-secondary mb-2 uppercase tracking-wide"
              >
                {t.company}
              </label>
              <input
                id="company"
                name="company"
                maxLength={150}
                type="text"
                placeholder={t.companyPlaceholder}
                value={form.company}
                onChange={handleChange}
                className="w-full px-4 py-3.5 rounded-2xl border border-surface-border bg-surface-warm text-ink text-sm placeholder:text-ink-light focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue/30 transition-all duration-200"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-xs font-semibold text-ink-secondary mb-2 uppercase tracking-wide"
              >
                {t.email} <span className="text-brand-orange">*</span>
              </label>
              <input
                id="email"
                name="email"
                maxLength={254}
                type="email"
                required
                placeholder={t.emailPlaceholder}
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-3.5 rounded-2xl border border-surface-border bg-surface-warm text-ink text-sm placeholder:text-ink-light focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue/30 transition-all duration-200"
              />
            </div>

            <div>
              <label
                htmlFor="website"
                className="block text-xs font-semibold text-ink-secondary mb-2 uppercase tracking-wide"
              >
                {t.website}
              </label>
              <input
                id="website"
                name="website"
                maxLength={300}
                type="url"
                placeholder={t.websitePlaceholder}
                value={form.website}
                onChange={handleChange}
                className="w-full px-4 py-3.5 rounded-2xl border border-surface-border bg-surface-warm text-ink text-sm placeholder:text-ink-light focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue/30 transition-all duration-200"
              />
            </div>
          </div>
        </div>

        {/* Qualification */}
        <div>
          <p className="text-[11px] uppercase tracking-[0.18em] text-ink-light font-semibold mb-4">
            {t.qualification}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label
                htmlFor="projectType"
                className="block text-xs font-semibold text-ink-secondary mb-2 uppercase tracking-wide"
              >
                {t.projectType} <span className="text-brand-orange">*</span>
              </label>
              <select
                id="projectType"
                name="projectType"
                required
                value={form.projectType}
                onChange={handleChange}
                className="w-full px-4 py-3.5 rounded-2xl border border-surface-border bg-surface-warm text-ink text-sm focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue/30 transition-all duration-200 appearance-none cursor-pointer"
              >
                <option value="" disabled>
                  {t.projectTypePlaceholder}
                </option>
                {projectTypes.map((type, i) => (
                  <option key={type} value={type}>
                    {t.options.projectTypes[i]}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="businessType"
                className="block text-xs font-semibold text-ink-secondary mb-2 uppercase tracking-wide"
              >
                {t.businessType}
              </label>
              <select
                id="businessType"
                name="businessType"
                value={form.businessType}
                onChange={handleChange}
                className="w-full px-4 py-3.5 rounded-2xl border border-surface-border bg-surface-warm text-ink text-sm focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue/30 transition-all duration-200 appearance-none cursor-pointer"
              >
                <option value="">{t.businessTypePlaceholder}</option>
                {businessTypes.map((type, i) => (
                  <option key={type} value={type}>
                    {t.options.businessTypes[i]}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="budget"
                className="block text-xs font-semibold text-ink-secondary mb-2 uppercase tracking-wide"
              >
                {t.budget}
              </label>
              <select
                id="budget"
                name="budget"
                value={form.budget}
                onChange={handleChange}
                className="w-full px-4 py-3.5 rounded-2xl border border-surface-border bg-surface-warm text-ink text-sm focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue/30 transition-all duration-200 appearance-none cursor-pointer"
              >
                <option value="">{t.budgetPlaceholder}</option>
                {budgets.map((item, i) => (
                  <option key={item} value={item}>
                    {t.options.budgets[i]}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="timeline"
                className="block text-xs font-semibold text-ink-secondary mb-2 uppercase tracking-wide"
              >
                {t.timeline}
              </label>
              <select
                id="timeline"
                name="timeline"
                value={form.timeline}
                onChange={handleChange}
                className="w-full px-4 py-3.5 rounded-2xl border border-surface-border bg-surface-warm text-ink text-sm focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue/30 transition-all duration-200 appearance-none cursor-pointer"
              >
                <option value="">{t.timelinePlaceholder}</option>
                {timelines.map((item, i) => (
                  <option key={item} value={item}>
                    {t.options.timelines[i]}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="adSpend"
                className="block text-xs font-semibold text-ink-secondary mb-2 uppercase tracking-wide"
              >
                {t.adSpend}
              </label>
              <select
                id="adSpend"
                name="adSpend"
                value={form.adSpend}
                onChange={handleChange}
                className="w-full px-4 py-3.5 rounded-2xl border border-surface-border bg-surface-warm text-ink text-sm focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue/30 transition-all duration-200 appearance-none cursor-pointer"
              >
                <option value="">{t.adSpendPlaceholder}</option>
                {adSpendRanges.map((item, i) => (
                  <option key={item} value={item}>
                    {t.options.adSpendRanges[i]}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="currentStack"
                className="block text-xs font-semibold text-ink-secondary mb-2 uppercase tracking-wide"
              >
                {t.currentStack}
              </label>
              <select
                id="currentStack"
                name="currentStack"
                value={form.currentStack}
                onChange={handleChange}
                className="w-full px-4 py-3.5 rounded-2xl border border-surface-border bg-surface-warm text-ink text-sm focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue/30 transition-all duration-200 appearance-none cursor-pointer"
              >
                <option value="">{t.currentStackPlaceholder}</option>
                {currentStacks.map((item, i) => (
                  <option key={item} value={item}>
                    {t.options.currentStacks[i]}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Goals */}
        <div>
          <p className="text-[11px] uppercase tracking-[0.18em] text-ink-light font-semibold mb-4">
            {t.strategicContext}
          </p>

          <div className="space-y-5">
            <div>
              <label
                htmlFor="goals"
                className="block text-xs font-semibold text-ink-secondary mb-2 uppercase tracking-wide"
              >
                {t.goals} <span className="text-brand-orange">*</span>
              </label>
              <input
                id="goals"
                name="goals"
                maxLength={500}
                type="text"
                required
                placeholder={t.goalsPlaceholder}
                value={form.goals}
                onChange={handleChange}
                className="w-full px-4 py-3.5 rounded-2xl border border-surface-border bg-surface-warm text-ink text-sm placeholder:text-ink-light focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue/30 transition-all duration-200"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-xs font-semibold text-ink-secondary mb-2 uppercase tracking-wide"
              >
                {t.message} <span className="text-brand-orange">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                maxLength={5000}
                required
                rows={6}
                placeholder={t.messagePlaceholder}
                value={form.message}
                onChange={handleChange}
                className="w-full px-4 py-3.5 rounded-2xl border border-surface-border bg-surface-warm text-ink text-sm placeholder:text-ink-light focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue/30 transition-all duration-200 resize-none leading-relaxed"
              />
            </div>
          </div>
        </div>

        {formState === 'error' && (
          <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {t.error}
          </div>
        )}

        {/* Footer */}
        <div className="pt-2 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
          <p className="text-xs text-ink-light leading-relaxed max-w-md">
            {t.consent} {t.consentPrivacyPrefix}{' '}
            <Link href={privacyHref} className="underline underline-offset-2 hover:text-ink transition-colors">
              {t.consentPrivacyLink}
            </Link>
            .
          </p>

          <button
            type="submit"
            disabled={formState === 'submitting'}
            className="flex-shrink-0 inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-brand-blue text-white font-semibold text-sm shadow-button hover:bg-brand-blue-dark hover:shadow-button-hover transition-all duration-200 ease-premium disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {formState === 'submitting' ? (
              <>
                <Loader2 size={15} className="animate-spin" />
                {t.sending}
              </>
            ) : (
              <>
                {t.submit}
                <ArrowRight size={15} />
              </>
            )}
          </button>
        </div>

        {/* Anti-spam honeypot: invisible to visitors, robots fill it in */}
        <div aria-hidden="true" className="absolute -left-[9999px] top-auto w-px h-px overflow-hidden">
          <label htmlFor="fax">Fax</label>
          <input id="fax" name="fax" type="text" tabIndex={-1} autoComplete="off" defaultValue="" />
        </div>
      </form>
    </div>
  )
}
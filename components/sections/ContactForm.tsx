'use client'

import { useState } from 'react'
import { ArrowRight, CheckCircle2, Loader2, ShieldCheck } from 'lucide-react'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

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

export function ContactForm() {
  const [formState, setFormState] = useState<FormState>('idle')
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState('submitting')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
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
          Strategy request received.
        </h3>

        <p className="text-ink-muted text-base leading-relaxed max-w-md">
          Thank you for the context. We will review your project, assess the fit,
          and come back to you within 24 business hours with the next step.
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
              Strategy intake
            </p>
            <h2 className="font-display font-bold text-ink text-2xl">
              Tell us what you are solving for.
            </h2>
            <p className="text-sm text-ink-muted mt-2 max-w-2xl">
              The more context you share, the more useful the first conversation becomes.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-brand-blue-light border border-brand-blue-mid/20 text-xs font-semibold text-brand-blue">
            <ShieldCheck size={14} />
            Reviewed manually
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="p-8 lg:p-10 space-y-8">
        {/* Identity */}
        <div>
          <p className="text-[11px] uppercase tracking-[0.18em] text-ink-light font-semibold mb-4">
            Basic details
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label
                htmlFor="name"
                className="block text-xs font-semibold text-ink-secondary mb-2 uppercase tracking-wide"
              >
                Your name <span className="text-brand-orange">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Jane Smith"
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
                Company
              </label>
              <input
                id="company"
                name="company"
                type="text"
                placeholder="Acme Inc."
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
                Email address <span className="text-brand-orange">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="jane@company.com"
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
                Website URL
              </label>
              <input
                id="website"
                name="website"
                type="url"
                placeholder="https://yoursite.com"
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
            Qualification
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label
                htmlFor="projectType"
                className="block text-xs font-semibold text-ink-secondary mb-2 uppercase tracking-wide"
              >
                What are you looking for? <span className="text-brand-orange">*</span>
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
                  Select a service area...
                </option>
                {projectTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="businessType"
                className="block text-xs font-semibold text-ink-secondary mb-2 uppercase tracking-wide"
              >
                Business type
              </label>
              <select
                id="businessType"
                name="businessType"
                value={form.businessType}
                onChange={handleChange}
                className="w-full px-4 py-3.5 rounded-2xl border border-surface-border bg-surface-warm text-ink text-sm focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue/30 transition-all duration-200 appearance-none cursor-pointer"
              >
                <option value="">Select business type...</option>
                {businessTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="budget"
                className="block text-xs font-semibold text-ink-secondary mb-2 uppercase tracking-wide"
              >
                Budget range
              </label>
              <select
                id="budget"
                name="budget"
                value={form.budget}
                onChange={handleChange}
                className="w-full px-4 py-3.5 rounded-2xl border border-surface-border bg-surface-warm text-ink text-sm focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue/30 transition-all duration-200 appearance-none cursor-pointer"
              >
                <option value="">Select budget...</option>
                {budgets.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="timeline"
                className="block text-xs font-semibold text-ink-secondary mb-2 uppercase tracking-wide"
              >
                Timeline
              </label>
              <select
                id="timeline"
                name="timeline"
                value={form.timeline}
                onChange={handleChange}
                className="w-full px-4 py-3.5 rounded-2xl border border-surface-border bg-surface-warm text-ink text-sm focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue/30 transition-all duration-200 appearance-none cursor-pointer"
              >
                <option value="">Select timeline...</option>
                {timelines.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="adSpend"
                className="block text-xs font-semibold text-ink-secondary mb-2 uppercase tracking-wide"
              >
                Monthly ad spend
              </label>
              <select
                id="adSpend"
                name="adSpend"
                value={form.adSpend}
                onChange={handleChange}
                className="w-full px-4 py-3.5 rounded-2xl border border-surface-border bg-surface-warm text-ink text-sm focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue/30 transition-all duration-200 appearance-none cursor-pointer"
              >
                <option value="">Select spend level...</option>
                {adSpendRanges.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="currentStack"
                className="block text-xs font-semibold text-ink-secondary mb-2 uppercase tracking-wide"
              >
                Current stack
              </label>
              <select
                id="currentStack"
                name="currentStack"
                value={form.currentStack}
                onChange={handleChange}
                className="w-full px-4 py-3.5 rounded-2xl border border-surface-border bg-surface-warm text-ink text-sm focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue/30 transition-all duration-200 appearance-none cursor-pointer"
              >
                <option value="">Select main stack...</option>
                {currentStacks.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Goals */}
        <div>
          <p className="text-[11px] uppercase tracking-[0.18em] text-ink-light font-semibold mb-4">
            Strategic context
          </p>

          <div className="space-y-5">
            <div>
              <label
                htmlFor="goals"
                className="block text-xs font-semibold text-ink-secondary mb-2 uppercase tracking-wide"
              >
                Biggest objective right now <span className="text-brand-orange">*</span>
              </label>
              <input
                id="goals"
                name="goals"
                type="text"
                required
                placeholder="Example: improve ROAS, fix tracking, scale SEO, automate reporting, build internal tool..."
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
                Context & current challenges <span className="text-brand-orange">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                placeholder="Tell us what is happening today, what feels blocked, what tools you already use, and what outcome would make this engagement a success."
                value={form.message}
                onChange={handleChange}
                className="w-full px-4 py-3.5 rounded-2xl border border-surface-border bg-surface-warm text-ink text-sm placeholder:text-ink-light focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue/30 transition-all duration-200 resize-none leading-relaxed"
              />
            </div>
          </div>
        </div>

        {formState === 'error' && (
          <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            Something went wrong while sending your request. Please try again.
          </div>
        )}

        {/* Footer */}
        <div className="pt-2 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
          <p className="text-xs text-ink-light leading-relaxed max-w-md">
            By submitting this form, you agree to be contacted about your project.
            We review requests manually and do not share your data with third parties.
          </p>

          <button
            type="submit"
            disabled={formState === 'submitting'}
            className="flex-shrink-0 inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-brand-blue text-white font-semibold text-sm shadow-button hover:bg-brand-blue-dark hover:shadow-button-hover transition-all duration-200 ease-premium disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {formState === 'submitting' ? (
              <>
                <Loader2 size={15} className="animate-spin" />
                Sending...
              </>
            ) : (
              <>
                Send strategy request
                <ArrowRight size={15} />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  )
}
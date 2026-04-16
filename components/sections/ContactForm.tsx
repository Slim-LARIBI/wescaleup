'use client'

import { useState } from 'react'
import { ArrowRight, CheckCircle2, Loader2 } from 'lucide-react'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

const projectTypes = [
  'SEO & Technical SEO',
  'Google Ads',
  'Meta Ads',
  'Web Analytics / GA4',
  'Advanced Tracking / GTM',
  'Server-Side Tracking',
  'Marketing Automation',
  'Email Automation',
  'Dashboards & Reporting',
  'CRO',
  'Full Growth System',
  'Other / Not sure yet',
]

const budgets = [
  'Under €1,000/mo',
  '€1,000 – €3,000/mo',
  '€3,000 – €7,500/mo',
  '€7,500 – €15,000/mo',
  '€15,000+/mo',
  'Project-based',
  'Not sure yet',
]

const timelines = [
  'ASAP — urgent',
  'Within 1 month',
  '1–3 months',
  '3–6 months',
  'Exploring options',
]

export function ContactForm() {
  const [formState, setFormState] = useState<FormState>('idle')
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    website: '',
    projectType: '',
    budget: '',
    timeline: '',
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
    // Simulate async submission — wire to your email/CRM API
    await new Promise((r) => setTimeout(r, 1500))
    setFormState('success')
  }

  if (formState === 'success') {
    return (
      <div className="card p-12 flex flex-col items-center text-center">
        <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center mb-6">
          <CheckCircle2 size={28} className="text-emerald-500" />
        </div>
        <h3 className="font-display font-bold text-ink text-2xl mb-3">Message received!</h3>
        <p className="text-ink-muted text-base leading-relaxed max-w-sm">
          Thank you for reaching out. We will review your project and get back to you within
          24 hours to schedule your discovery call.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="card p-8 lg:p-10 space-y-6">
      {/* Row 1: Name + Company */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-xs font-semibold text-ink-secondary mb-2 uppercase tracking-wide">
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
            className="w-full px-4 py-3 rounded-xl border border-surface-border bg-surface-warm text-ink text-sm placeholder:text-ink-light focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue/30 transition-all duration-200"
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-xs font-semibold text-ink-secondary mb-2 uppercase tracking-wide">
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            placeholder="Acme Inc."
            value={form.company}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-surface-border bg-surface-warm text-ink text-sm placeholder:text-ink-light focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue/30 transition-all duration-200"
          />
        </div>
      </div>

      {/* Row 2: Email + Website */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className="block text-xs font-semibold text-ink-secondary mb-2 uppercase tracking-wide">
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
            className="w-full px-4 py-3 rounded-xl border border-surface-border bg-surface-warm text-ink text-sm placeholder:text-ink-light focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue/30 transition-all duration-200"
          />
        </div>
        <div>
          <label htmlFor="website" className="block text-xs font-semibold text-ink-secondary mb-2 uppercase tracking-wide">
            Website URL
          </label>
          <input
            id="website"
            name="website"
            type="url"
            placeholder="https://yoursite.com"
            value={form.website}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-surface-border bg-surface-warm text-ink text-sm placeholder:text-ink-light focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue/30 transition-all duration-200"
          />
        </div>
      </div>

      {/* Row 3: Project type */}
      <div>
        <label htmlFor="projectType" className="block text-xs font-semibold text-ink-secondary mb-2 uppercase tracking-wide">
          Project type <span className="text-brand-orange">*</span>
        </label>
        <select
          id="projectType"
          name="projectType"
          required
          value={form.projectType}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-surface-border bg-surface-warm text-ink text-sm focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue/30 transition-all duration-200 appearance-none cursor-pointer"
        >
          <option value="" disabled>Select a service area...</option>
          {projectTypes.map((type) => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </div>

      {/* Row 4: Budget + Timeline */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="budget" className="block text-xs font-semibold text-ink-secondary mb-2 uppercase tracking-wide">
            Monthly budget
          </label>
          <select
            id="budget"
            name="budget"
            value={form.budget}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-surface-border bg-surface-warm text-ink text-sm focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue/30 transition-all duration-200 appearance-none cursor-pointer"
          >
            <option value="">Select range...</option>
            {budgets.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="timeline" className="block text-xs font-semibold text-ink-secondary mb-2 uppercase tracking-wide">
            Timeline
          </label>
          <select
            id="timeline"
            name="timeline"
            value={form.timeline}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-surface-border bg-surface-warm text-ink text-sm focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue/30 transition-all duration-200 appearance-none cursor-pointer"
          >
            <option value="">Select timeline...</option>
            {timelines.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Row 5: Message */}
      <div>
        <label htmlFor="message" className="block text-xs font-semibold text-ink-secondary mb-2 uppercase tracking-wide">
          Tell us about your project <span className="text-brand-orange">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Describe your current situation, challenges, and what you are hoping to achieve. The more context you share, the more useful our first call will be."
          value={form.message}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-surface-border bg-surface-warm text-ink text-sm placeholder:text-ink-light focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue/30 transition-all duration-200 resize-none leading-relaxed"
        />
      </div>

      {/* Submit */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
        <p className="text-xs text-ink-light leading-relaxed max-w-xs">
          By submitting this form, you agree to be contacted about your project.
          We do not share your data with third parties.
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
              Send my project brief
              <ArrowRight size={15} />
            </>
          )}
        </button>
      </div>
    </form>
  )
}

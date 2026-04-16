import Link from 'next/link'
import { ArrowRight, Mail, MapPin, Linkedin, Twitter } from 'lucide-react'

const services = [
  { label: 'SEO & Technical SEO', href: '/services#seo' },
  { label: 'Google Ads', href: '/services#google-ads' },
  { label: 'Meta Ads', href: '/services#meta-ads' },
  { label: 'Web Analytics & GA4', href: '/services#analytics' },
  { label: 'Advanced Tracking', href: '/services#tracking' },
  { label: 'Server-Side Tracking', href: '/services#server-side' },
  { label: 'Marketing Automation', href: '/services#automation' },
  { label: 'Email Automation', href: '/services#email' },
  { label: 'Dashboards & Reporting', href: '/services#dashboards' },
  { label: 'CRO', href: '/services#cro' },
]

const company = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Process', href: '/#process' },
  { label: 'Why Wescaleup', href: '/#why' },
  { label: 'Contact', href: '/contact' },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-ink text-white">
      {/* Main footer */}
      <div className="container-site py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-brand flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm">W</span>
              </div>
              <span className="font-display font-bold text-xl tracking-tight">Wescaleup</span>
            </Link>
            <p className="text-ink-light text-sm leading-relaxed max-w-xs mb-8">
              We build scalable growth systems through data, advanced tracking,
              performance marketing, and intelligent automation.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-ink-light">
                <Mail size={15} className="text-brand-blue flex-shrink-0" />
                <a href="mailto:hello@wescaleup.com" className="hover:text-white transition-colors">
                  hello@wescaleup.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm text-ink-light">
                <MapPin size={15} className="text-brand-blue flex-shrink-0" />
                <span>Remote-first · Worldwide</span>
              </div>
            </div>
            {/* Social */}
            <div className="flex items-center gap-3 mt-8">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-blue transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={15} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-blue transition-colors duration-200"
                aria-label="Twitter/X"
              >
                <Twitter size={15} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-4">
            <h3 className="text-sm font-semibold tracking-widest uppercase text-ink-light mb-6">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-ink-light hover:text-white transition-colors duration-200 underline-hover"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company + CTA */}
          <div className="lg:col-span-4">
            <h3 className="text-sm font-semibold tracking-widest uppercase text-ink-light mb-6">
              Company
            </h3>
            <ul className="space-y-3 mb-10">
              {company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-ink-light hover:text-white transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mini CTA */}
            <div className="p-5 rounded-xl bg-white/5 border border-white/10">
              <p className="text-sm font-semibold text-white mb-1">Ready to scale?</p>
              <p className="text-xs text-ink-light mb-4 leading-relaxed">
                Let&apos;s discuss your growth goals in a free 30-minute discovery call.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand-blue-mid hover:text-white transition-colors"
              >
                Book a call <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-site py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-ink-light">
            © {year} Wescaleup. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-xs text-ink-light hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-ink-light hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

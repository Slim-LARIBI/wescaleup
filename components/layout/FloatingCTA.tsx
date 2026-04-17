'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { usePathname } from 'next/navigation'

export function FloatingCTA() {
  const pathname = usePathname()

  if (pathname === '/contact') return null

  return (
    <div className="fixed bottom-5 right-5 z-[60]">
      <Link
        href="/contact"
        className="group inline-flex items-center gap-2 rounded-full bg-brand-blue px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(37,99,235,0.28)] transition-all duration-200 hover:bg-brand-blue-dark hover:-translate-y-0.5"
      >
        Book a strategy call
        <ArrowRight
          size={15}
          className="transition-transform duration-200 group-hover:translate-x-0.5"
        />
      </Link>
    </div>
  )
}
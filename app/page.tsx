import type { Metadata } from 'next'
import { Hero } from '@/components/sections/Hero'
import { TrustBar } from '@/components/sections/TrustBar'
import { ServicesGrid } from '@/components/sections/ServicesGrid'
import { WhyWescaleup } from '@/components/sections/WhyWescaleup'
import { Process } from '@/components/sections/Process'
import { Outcomes } from '@/components/sections/Outcomes'
import { FAQ } from '@/components/sections/FAQ'
import { ClosingCTA } from '@/components/sections/ClosingCTA'

export const metadata: Metadata = {
  alternates: { canonical: '/' },
  title: { absolute: 'Wescaleup — Growth systems, not just campaigns' },
  description:
    'We build scalable growth systems through advanced tracking, performance marketing, data analytics, and intelligent automation. Book a free discovery call.',
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesGrid />
      <WhyWescaleup />
      <Process />
      <Outcomes />
      <FAQ />
      <ClosingCTA />
    </>
  )
}

import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Body Reclaimed',
  description: 'Coming soon.',
}

export default function BodyReclaimedPage() {
  return (
    <section className="min-h-screen bg-cream flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <p className="text-sand text-[11px] font-sans font-medium tracking-[0.3em] uppercase mb-6">
          Coming Soon
        </p>
        <h1 className="font-serif text-midnight text-5xl md:text-6xl leading-[1.08] mb-8">
          Body Reclaimed
        </h1>
        <p className="text-charcoal/70 font-sans text-lg leading-relaxed mb-10">
          This page is on its way. In the meantime, start with a free Body Brief.
        </p>
        <Link
          href="/body-brief"
          className="inline-block bg-sand text-midnight font-sans font-medium text-sm tracking-wide uppercase rounded-full px-10 py-4 hover:bg-bark hover:text-cream transition-colors duration-300"
        >
          Get Your Free Body Brief
        </Link>
      </div>
    </section>
  )
}

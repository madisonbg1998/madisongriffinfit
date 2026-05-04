import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Welcome | Body Reclaimed',
  description: 'Welcome to Body Reclaimed.',
  robots: { index: false, follow: false },
}

const STRIPE_URL = 'https://buy.stripe.com/5kQ7sNfbf2Q30oe1g97Zu01'

export default function BodyReclaimedWelcomePage() {
  return (
    <section className="bg-cream min-h-screen flex items-center justify-center px-6 py-28">
      <div className="max-w-xl w-full text-center">
        <p className="text-sand text-[11px] font-sans font-medium tracking-[0.3em] uppercase mb-6">
          Body Reclaimed
        </p>

        <h1 className="font-serif text-midnight text-5xl md:text-6xl leading-[1.05] mb-8">
          You&rsquo;re in.
        </h1>

        <div className="space-y-5 text-charcoal/75 font-sans text-[17px] leading-[1.85] mb-14">
          <p>
            Check your email &mdash; I&rsquo;ll be in touch within 24 hours with everything you need to get started.
          </p>
          <p>
            In the meantime, you can complete your sign-up below and lock in your founding member rate before it closes.
          </p>
        </div>

        <div className="border-t border-bark/10 pt-12">
          <p className="text-bark text-[11px] font-sans font-medium tracking-[0.3em] uppercase mb-6">
            Ready to jump straight in?
          </p>
          <div className="flex flex-col items-center gap-3 mb-8">
            <div className="flex items-baseline gap-3">
              <span className="text-charcoal/30 font-sans text-base line-through">$297</span>
              <span className="font-serif text-midnight text-4xl">$197</span>
              <span className="text-charcoal/50 font-sans text-base">/month</span>
            </div>
            <p className="text-charcoal/40 font-sans text-[11px] tracking-[0.2em] uppercase">
              Founding member pricing &middot; 8 week minimum
            </p>
          </div>
          <Link
            href={STRIPE_URL}
            className="inline-flex items-center bg-bark text-cream font-sans font-medium text-[11px] tracking-[0.18em] uppercase rounded-sm px-10 py-4 hover:bg-bark/90 transition-colors duration-300"
          >
            Complete Sign-Up
          </Link>
        </div>

        <p className="mt-10 text-charcoal/35 font-sans text-sm">
          Questions?{' '}
          <Link
            href="https://calendly.com/madisongriffinfit/client-check-ins"
            className="underline underline-offset-4 hover:text-charcoal/60 transition-colors duration-200"
          >
            Book a call with Madison
          </Link>
        </p>
      </div>
    </section>
  )
}

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
          You&rsquo;re one step away.
        </h1>

        <div className="space-y-5 text-charcoal/75 font-sans text-[17px] leading-[1.85] mb-14">
          <p>
            Your spot is reserved but it&rsquo;s not locked in until you complete your payment.
          </p>
          <p>
            Founding member pricing closes when this cohort fills. Here&rsquo;s how to make it official:
          </p>
        </div>

        <div className="border-t border-bark/10 pt-12">
          <p className="text-bark text-[11px] font-sans font-medium tracking-[0.3em] uppercase mb-6">
            Ready to lock it in?
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
            className="inline-flex items-center gap-2 bg-bark text-cream font-sans font-medium text-[11px] tracking-[0.18em] uppercase rounded-sm px-10 py-4 hover:bg-bark/90 transition-colors duration-300"
          >
            Complete My Sign-Up &rarr;
          </Link>
        </div>

        <p className="mt-10 text-charcoal/35 font-sans text-sm">
          Questions before you commit?{' '}
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

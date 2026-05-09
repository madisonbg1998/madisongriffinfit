import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Thank You | Madison Griffin Fit',
  robots: { index: false, follow: false },
}

export default function IntakeThankYouPage() {
  return (
    <section className="bg-cream min-h-screen flex items-center justify-center px-6 py-28">
      <div className="max-w-lg text-center">

        <p className="text-bark text-[11px] font-sans font-medium tracking-[0.3em] uppercase mb-8">
          Client Intake
        </p>

        <h1 className="font-serif text-midnight text-5xl md:text-6xl leading-[1.05] mb-8">
          You&rsquo;re all in.
        </h1>

        <div className="space-y-5 text-charcoal/70 font-sans text-[17px] leading-[1.85]">
          <p>
            Thank you for filling that in. I know it wasn&rsquo;t a quick form, and the fact
            that you took the time to answer honestly tells me everything I need to know
            about the kind of client you are.
          </p>
          <p>
            Your start date is locked in. Get some good sleep, drink your water, and get
            ready. We&rsquo;re about to do something really good.
          </p>
        </div>

      </div>
    </section>
  )
}

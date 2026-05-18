import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Check-In Submitted | Body Unmuted',
  robots: { index: false, follow: false },
}

export default function CheckInSubmittedPage() {
  return (
    <section className="bg-cream min-h-screen flex items-center justify-center px-6 py-28">
      <div className="max-w-lg">

        <p className="text-bark text-[11px] font-sans font-medium tracking-[0.3em] uppercase mb-8">
          Body Unmuted
        </p>

        <h1 className="font-serif text-midnight text-4xl sm:text-5xl leading-[1.1] mb-10">
          Check-in received!
        </h1>

        <div className="space-y-5 text-charcoal/70 font-sans text-[17px] leading-[1.85] mb-12">
          <p>
            Your Loom will be with you by Monday!
          </p>
          <p>
            You know where I am if anything comes up before then.
          </p>
        </div>

        <p className="font-serif italic text-midnight text-2xl">
          xx Madison
        </p>

      </div>
    </section>
  )
}

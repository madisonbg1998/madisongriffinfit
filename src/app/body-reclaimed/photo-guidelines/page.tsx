import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Progress Photo Guidelines | Body Reclaimed',
  description: 'How to take your progress photos for Body Reclaimed.',
  robots: { index: false, follow: false },
}

const rules = [
  {
    lead: 'Same spot, every time.',
    body: 'Pick a wall, a corner, a door. Make it your spot. Consistency here is everything. Travelling? Do your best with what you have. A consistent position matters more than a perfect backdrop.',
  },
  {
    lead: 'Same outfit (or as close as possible).',
    body: 'A bikini is ideal. Sports bra and shorts works great too. Whatever you choose, keep it consistent and keep it minimal. The less in the way, the more we can actually see.',
  },
  {
    lead: 'Good lighting.',
    body: 'Natural light is your best friend. Face a window, not away from it. No harsh shadows across your body.',
  },
  {
    lead: 'Prop your phone or get someone to help.',
    body: 'Awkward angles make it impossible to compare photos over time. Eye-level is the goal.',
  },
  {
    lead: 'Take them on the same day each month.',
    body: 'First thing in the morning, before eating, works best. Consistent timing, consistent results.',
  },
  {
    lead: 'Flex in every single shot.',
    body: "Relaxed photos don't show muscle. You worked for this, show it.",
  },
  {
    lead: 'No filters, no editing.',
    body: "I know. But this is data, not content. Keep it real so we can track what's actually changing.",
  },
]

export default function PhotoGuidelinesPage() {
  return (
    <main className="bg-cream min-h-screen">

      {/* Header */}
      <section className="px-6 pt-20 pb-16 text-center max-w-2xl mx-auto">
        <p className="text-bark text-[11px] font-sans font-medium tracking-[0.3em] uppercase mb-8">
          Body Reclaimed &middot; Madison Griffin Fit
        </p>
        <h1 className="font-serif text-midnight text-5xl md:text-6xl leading-[1.05] mb-6">
          Progress Photo<br />Guidelines
        </h1>
        <p className="text-sand font-sans text-[15px] italic mb-10">
          Your photos are your data. Let&rsquo;s make them count.
        </p>
        <div className="w-12 h-px bg-bark/20 mx-auto mb-10" />
        <p className="text-charcoal/70 font-sans text-[17px] leading-[1.9]">
          Progress photos are one of the most powerful tools we have together. They show what the scale never will. To make sure yours are actually useful and that I can track what&rsquo;s changing month to month, here&rsquo;s exactly how to take them.
        </p>
      </section>

      <div className="border-t border-bark/10" />

      {/* Three Shots */}
      <section className="px-6 py-20 max-w-3xl mx-auto text-center">
        <p className="text-bark text-[11px] font-sans font-medium tracking-[0.3em] uppercase mb-12">
          The Three Shots You Need
        </p>

        <div className="relative w-full max-w-xl mx-auto aspect-[4/3] mb-10">
          <Image
            src="/photo-guidelines.webp"
            alt="Front, side, and back progress photo poses"
            fill
            className="object-contain"
          />
        </div>

        <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto mb-10">
          <div className="border-t border-bark/15 pt-4">
            <p className="font-sans font-semibold text-midnight text-[11px] tracking-[0.18em] uppercase mb-2">Front</p>
            <p className="text-charcoal/55 font-sans text-sm leading-relaxed">face forward, flex everything</p>
          </div>
          <div className="border-t border-bark/15 pt-4">
            <p className="font-sans font-semibold text-midnight text-[11px] tracking-[0.18em] uppercase mb-2">Side</p>
            <p className="text-charcoal/55 font-sans text-sm leading-relaxed">turn 90&deg;, core engaged</p>
          </div>
          <div className="border-t border-bark/15 pt-4">
            <p className="font-sans font-semibold text-midnight text-[11px] tracking-[0.18em] uppercase mb-2">Back</p>
            <p className="text-charcoal/55 font-sans text-sm leading-relaxed">squeeze those glutes</p>
          </div>
        </div>

        <p className="text-charcoal/45 font-sans text-sm italic">
          Take all three every single time. One without the others makes it really hard to track progress properly.
        </p>
      </section>

      <div className="border-t border-bark/10" />

      {/* Golden Rules */}
      <section className="px-6 py-20 max-w-2xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="font-serif text-midnight text-4xl md:text-5xl mb-5">
            The Golden Rules
          </h2>
          <p className="text-sand font-sans text-[15px] italic">
            Follow these every time and your photos will actually be comparable.
          </p>
        </div>

        <div className="space-y-0">
          {rules.map((rule, i) => (
            <div key={i} className="flex gap-5 py-6 border-b border-bark/10 last:border-0">
              <div className="w-1.5 h-1.5 rounded-sm bg-bark mt-2.5 shrink-0" />
              <p className="text-charcoal/75 font-sans text-[16px] leading-[1.85]">
                <strong className="text-midnight font-semibold">{rule.lead}</strong>{' '}{rule.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="border-t border-bark/10" />

      {/* Upload instructions */}
      <section className="px-6 py-20 max-w-2xl mx-auto">
        <div className="border border-bark/15 rounded-sm px-8 py-10 text-center">
          <p className="text-bark text-[11px] font-sans font-medium tracking-[0.3em] uppercase mb-6">
            Uploading Your Photos
          </p>
          <p className="text-charcoal/70 font-sans text-[16px] leading-[1.9]">
            Head to the Progress section in Trainerize, tap the camera icon, and upload all three shots. Please do this as soon as you can after setting up your account. I use your photos to guide your programming, so the sooner I have them, the better I can build something that works for you from day one. Then repeat once a month on check-in day.
          </p>
        </div>
      </section>

    </main>
  )
}

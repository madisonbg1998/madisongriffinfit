import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Work With Me | Madison Griffin Fit',
  description:
    'Personalized 1:1 strength training and nutrition coaching for women who want real, lasting results. Apply to work with Madison Griffin.',
}

const included = [
  {
    number: '01',
    title: 'Personalized Strength Training Program',
    description:
      'A program built around your body, your goals, and where you actually train. No cookie-cutter templates. Every rep has a reason.',
  },
  {
    number: '02',
    title: 'Nutrition Guidance Without Restriction',
    description:
      'A flexible approach to eating that fuels your training and fits your life. No food rules, no guilt, no meal plans that expire in a week.',
  },
  {
    number: '03',
    title: 'Ongoing Coaching + Support',
    description:
      'Direct access to me throughout the week. Questions answered, form checks reviewed, and real-time adjustments so you never feel stuck.',
  },
  {
    number: '04',
    title: 'Systems That Adapt to Your Lifestyle',
    description:
      'Travel weeks, busy seasons, schedule changes. Your program flexes with you instead of breaking when life gets real.',
  },
]

const steps = [
  {
    step: 1,
    title: 'Apply & Connect',
    description:
      'Submit your application so I can learn about you, your goals, and what you need.',
  },
  {
    step: 2,
    title: 'Strategy Call',
    description:
      'A deep dive into your goals, history, and lifestyle so we can build the right plan from day one.',
  },
  {
    step: 3,
    title: 'Custom Program',
    description:
      'Receive your personalized training and nutrition plan, built specifically for you.',
  },
  {
    step: 4,
    title: 'Ongoing Support',
    description:
      'Weekly check-ins, program adjustments, and continuous coaching as your body and life evolve.',
  },
]

const whoItsFor = [
  'Are tired of starting over every few months',
  'Want real, lasting results they can maintain',
  'Value their time, energy, and life outside the gym',
]

export default function WorkWithMePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <Image
          src="/Madison-157.webp"
          alt="Madison Griffin overlooking mountains and ocean"
          fill
          className="object-cover object-[center_35%]"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-midnight/55" />
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <p className="text-sand text-[11px] font-medium tracking-[0.25em] uppercase mb-6">
            Work With Me
          </p>
          <h1 className="font-serif text-cream text-5xl sm:text-6xl lg:text-7xl font-medium mb-6">
            1:1 Coaching
          </h1>
          <p className="text-cream/80 text-lg sm:text-xl leading-relaxed max-w-xl mx-auto">
            Personalized support to build a body that actually lasts
          </p>
        </div>
      </section>

      {/* What's Included */}
      <section className="bg-cream py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-center mb-16 sm:mb-20">
            <p className="text-bark text-[11px] font-medium tracking-[0.25em] uppercase mb-4">
              The Details
            </p>
            <h2 className="font-serif text-midnight text-3xl sm:text-4xl lg:text-5xl font-medium">
              What&apos;s Included
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto">
            {included.map((item) => (
              <div
                key={item.number}
                className="bg-white rounded-lg p-8 sm:p-10 border border-bark/8 shadow-[0_2px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_4px_30px_rgba(0,0,0,0.06)] transition-shadow duration-500"
              >
                <span className="text-sand font-serif text-3xl font-medium">
                  {item.number}
                </span>
                <h3 className="font-serif text-midnight text-xl sm:text-2xl font-medium mt-4 mb-3">
                  {item.title}
                </h3>
                <p className="text-charcoal/70 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Experience - Timeline */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-center mb-16 sm:mb-20">
            <p className="text-bark text-[11px] font-medium tracking-[0.25em] uppercase mb-4">
              The Process
            </p>
            <h2 className="font-serif text-midnight text-3xl sm:text-4xl lg:text-5xl font-medium">
              The Experience
            </h2>
          </div>
          <div className="max-w-2xl mx-auto">
            {steps.map((item, index) => (
              <div key={item.step} className="relative flex gap-8 pb-14 last:pb-0">
                {/* Vertical line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-[15px] top-10 bottom-0 w-px bg-sand/30" />
                )}
                {/* Dot */}
                <div className="flex-shrink-0 w-[31px] h-[31px] rounded-full bg-sand/20 flex items-center justify-center mt-1">
                  <div className="w-3 h-3 rounded-full bg-sand" />
                </div>
                {/* Content */}
                <div className="pt-0.5">
                  <p className="text-bark text-[11px] font-medium tracking-[0.2em] uppercase mb-1">
                    Step {item.step}
                  </p>
                  <h3 className="font-serif text-midnight text-xl sm:text-2xl font-medium mb-2">
                    {item.title}
                  </h3>
                  <p className="text-charcoal/70 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
              <Image
                src="/Madison-249.webp"
                alt="Madison eating on the beach"
                fill
                className="object-cover object-center"
                quality={85}
              />
            </div>
            <div>
              <p className="text-bark text-[11px] font-medium tracking-[0.25em] uppercase mb-4">
                Is This You?
              </p>
              <h2 className="font-serif text-midnight text-3xl sm:text-4xl lg:text-5xl font-medium mb-10">
                Who It&apos;s For
              </h2>
              <p className="text-charcoal/70 text-base mb-8 leading-relaxed">
                This coaching experience is built for women who:
              </p>
              <ul className="space-y-5">
                {whoItsFor.map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-2 h-2 rounded-full bg-sand mt-2" />
                    <span className="text-midnight text-lg font-medium leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Investment */}
      <section className="bg-midnight py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-10 text-center">
          <p className="text-sand text-[11px] font-medium tracking-[0.25em] uppercase mb-6">
            Investment
          </p>
          <h2 className="font-serif text-cream text-3xl sm:text-4xl lg:text-5xl font-medium mb-8">
            This isn&apos;t about cost&thinsp;&mdash;&thinsp;it&apos;s about commitment.
          </h2>
          <p className="text-cream/60 text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-4">
            Coaching spots are limited and offered through an application process.
            This ensures we&apos;re the right fit for each other and that you get the
            attention you deserve.
          </p>
          <p className="text-cream/40 text-sm">
            Pricing and program details are shared after your application is reviewed.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cream py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-10 text-center">
          <h2 className="font-serif text-midnight text-3xl sm:text-4xl lg:text-5xl font-medium mb-6">
            Ready to start?
          </h2>
          <p className="text-charcoal/70 text-base sm:text-lg leading-relaxed mb-10 max-w-lg mx-auto">
            Take the first step toward building a body and routine that actually fits your life.
          </p>
          <Link
            href="/apply"
            className="inline-flex items-center bg-bark text-cream text-[12px] font-medium tracking-[0.2em] uppercase px-12 py-4 rounded-sm hover:bg-bark/90 transition-colors duration-300"
          >
            Apply Now
          </Link>
        </div>
      </section>
    </>
  )
}

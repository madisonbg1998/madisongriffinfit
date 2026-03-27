import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'The Body Unmuted Method',
  description:
    'Build a body that supports your life — not one that depends on controlling it. Structured strength, smart nutrition, and sustainable mindset shifts.',
  openGraph: {
    images: [{ url: '/Madison-73.webp', width: 1200, height: 630, alt: 'The Body Unmuted Method — Madison Griffin Fit' }],
  },
}

export default function MethodPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        <Image
          src="/Madison-73.webp"
          alt="Madison with arms spread, radiating joy"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-midnight/60" />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p className="text-sand text-[11px] font-sans font-medium tracking-[0.3em] uppercase mb-6">
            The Method
          </p>
          <h1 className="font-serif text-cream text-5xl md:text-7xl lg:text-8xl leading-[1.05] mb-8">
            The Body Unmuted Method
          </h1>
          <p className="text-cream/80 font-sans text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Build a body that supports your life&nbsp;&mdash; not one that depends on controlling it.
          </p>
        </div>
      </section>

      {/* ── Core Idea ── */}
      <section className="bg-cream py-28 md:py-36">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-4 mb-10">
            <span className="block w-12 h-px bg-sand" />
            <span className="text-sand text-[11px] font-sans font-medium tracking-[0.3em] uppercase">
              Core Philosophy
            </span>
            <span className="block w-12 h-px bg-sand" />
          </div>
          <h2 className="font-serif text-midnight text-3xl md:text-5xl lg:text-6xl leading-[1.1] text-balance">
            Most bodies are built on control.
            <br />
            <span className="text-bark">This one is built on support.</span>
          </h2>
        </div>
      </section>

      {/* ── The Problem ── */}
      <section className="bg-midnight py-28 md:py-36">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-sand text-[11px] font-sans font-medium tracking-[0.3em] uppercase mb-6">
            The Problem
          </p>
          <h2 className="font-serif text-cream text-3xl md:text-5xl leading-[1.15] mb-10">
            Why your results haven&rsquo;t lasted
          </h2>
          <div className="space-y-8 text-cream/70 font-sans text-lg leading-relaxed text-left md:text-center">
            <p>
              Because they were built on restriction. On over-control. On routines that demanded
              perfection just to maintain what you had.
            </p>
            <p>
              You followed the meal plans. You tracked every macro. You showed up at the gym six
              days a week. And it worked&nbsp;&mdash; until life got in the way.
            </p>
            <p>
              A trip. A stressful season. A week where you just didn&rsquo;t have it in you.
              And everything unraveled. Not because you lacked discipline, but because the system
              was never designed to hold up in real life.
            </p>
          </div>
        </div>
      </section>

      {/* ── The Shift ── */}
      <section className="bg-cream py-28 md:py-36">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="block w-16 h-px bg-sand mx-auto mb-12" />
          <h2 className="font-serif text-midnight text-3xl md:text-5xl lg:text-[3.5rem] leading-[1.15] text-balance">
            We don&rsquo;t chase results.
            <br />
            We build a body that <em className="text-bark">holds</em> them.
          </h2>
          <span className="block w-16 h-px bg-sand mx-auto mt-12" />
        </div>
      </section>

      {/* ── Pillar 1: Strength ── */}
      <section className="bg-cream py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative aspect-[3/4] lg:aspect-[4/5] overflow-hidden rounded-sm">
              <Image
                src="/Madison-88.webp"
                alt="Madison in athletic pose, confident and strong"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="lg:pl-4">
              <p className="text-sand text-[11px] font-sans font-medium tracking-[0.3em] uppercase mb-4">
                Pillar One
              </p>
              <h3 className="font-serif text-midnight text-3xl md:text-4xl lg:text-5xl mb-8">
                Strength
              </h3>
              <div className="space-y-5 text-charcoal/80 font-sans text-[17px] leading-relaxed">
                <p>
                  Structured training that builds lean muscle, shapes your physique, and makes you
                  feel powerful in your body. Not random workouts. Not &ldquo;sweating it
                  out.&rdquo;
                </p>
                <p>
                  Intentional, progressive programming designed to build a defined waist, strong
                  glutes, sculpted arms&nbsp;&mdash; and a body that performs as good as it looks.
                </p>
                <p>
                  Every training block is periodized around your goals, your schedule, and your
                  access to equipment&nbsp;&mdash; whether you&rsquo;re in your home gym or a hotel
                  fitness center halfway across the world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pillar 2: Fuel ── */}
      <section className="bg-cream py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="lg:order-2 relative aspect-[3/4] lg:aspect-[4/5] overflow-hidden rounded-sm">
              <Image
                src="/Madison-243.webp"
                alt="Madison eating on the beach, enjoying food freely"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="lg:order-1 lg:pr-4">
              <p className="text-sand text-[11px] font-sans font-medium tracking-[0.3em] uppercase mb-4">
                Pillar Two
              </p>
              <h3 className="font-serif text-midnight text-3xl md:text-4xl lg:text-5xl mb-8">
                Fuel
              </h3>
              <div className="space-y-5 text-charcoal/80 font-sans text-[17px] leading-relaxed">
                <p>
                  Nutrition that supports fat loss without food fear. No rigid meal plans. No
                  cutting out entire food groups. No guilt over dinner with friends.
                </p>
                <p>
                  You&rsquo;ll learn how to eat in a way that fuels your training, supports your
                  metabolism, and fits the way you actually live&nbsp;&mdash; including travel,
                  social events, and the occasional glass of wine on a Tuesday.
                </p>
                <p>
                  This is about building a sustainable relationship with food that lets you stay
                  lean, energized, and free.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pillar 3: Mindset ── */}
      <section className="bg-cream py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative aspect-[3/4] lg:aspect-[4/5] overflow-hidden rounded-sm">
              <Image
                src="/Madison-201.webp"
                alt="Madison in peaceful close-up, calm and centered"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="lg:pl-4">
              <p className="text-sand text-[11px] font-sans font-medium tracking-[0.3em] uppercase mb-4">
                Pillar Three
              </p>
              <h3 className="font-serif text-midnight text-3xl md:text-4xl lg:text-5xl mb-8">
                Mindset
              </h3>
              <div className="space-y-5 text-charcoal/80 font-sans text-[17px] leading-relaxed">
                <p>
                  We address the patterns that keep you stuck&nbsp;&mdash; the all-or-nothing
                  thinking, the need for perfection, the belief that discipline means white-knuckling
                  your way through every decision.
                </p>
                <p>
                  Real consistency isn&rsquo;t about never falling off. It&rsquo;s about building a
                  relationship with yourself where getting back on track is effortless.
                </p>
                <p>
                  This is the piece most programs skip entirely. And it&rsquo;s the reason most
                  results don&rsquo;t last.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Outcome ── */}
      <section className="relative py-32 md:py-44 overflow-hidden">
        <Image
          src="/Madison-178.webp"
          alt="Madison reaching toward the sunset, silhouette on the beach"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-midnight/65" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <p className="text-sand text-[11px] font-sans font-medium tracking-[0.3em] uppercase mb-6">
            The Outcome
          </p>
          <h2 className="font-serif text-cream text-3xl md:text-5xl leading-[1.15] mb-12">
            What happens when it clicks
          </h2>
          <ul className="space-y-5 text-cream/85 font-sans text-lg text-left max-w-md mx-auto">
            {[
              'You feel strong, athletic, and feminine',
              'Your body feels stable across every season',
              'You trust yourself with food',
              'Confidence that comes from the inside out',
              'Fitness that fits your life — not the other way around',
              'Results that are yours to keep',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="block w-1.5 h-1.5 rounded-full bg-sand mt-2.5 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-bark py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-cream text-3xl md:text-4xl mb-6">
            Ready to build a body that lasts?
          </h2>
          <p className="text-cream/70 font-sans text-lg mb-10 max-w-xl mx-auto">
            Apply for coaching and find out if the Body Unmuted Method is right for you.
          </p>
          <Link
            href="/apply"
            className="inline-flex items-center bg-cream text-bark text-[12px] font-sans font-medium tracking-[0.2em] uppercase px-10 py-4 rounded-sm hover:bg-cream/90 transition-colors duration-300"
          >
            Apply for Coaching
          </Link>
        </div>
      </section>
    </>
  )
}

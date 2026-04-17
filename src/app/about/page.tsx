import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Madison',
  description:
    'Meet Madison Griffin — strength and nutrition coach for women who travel, build businesses, and want a body that keeps up with their life.',
  openGraph: {
    images: [{ url: '/Madison-134.webp', width: 1200, height: 630, alt: 'About Madison Griffin' }],
  },
}

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-cream pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-sand text-[11px] font-sans font-medium tracking-[0.3em] uppercase mb-6">
                About
              </p>
              <h1 className="font-serif text-midnight text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-8">
                Hi, I&rsquo;m Madison
              </h1>
              <p className="text-charcoal/80 font-sans text-lg md:text-xl leading-relaxed max-w-lg">
                Strength &amp; nutrition coach for women who want a strong, lean
                body without making fitness their whole personality.
              </p>
            </div>
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
              <Image
                src="/Madison-134.webp"
                alt="Madison smiling in a green dress along the coast"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Story ── */}
      <section className="bg-cream py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-7 space-y-7 text-charcoal/80 font-sans text-[17px] leading-[1.75]">
              <p>
                Fitness has always been part of my life &mdash; but it was never
                supposed to be my whole identity. I wanted to travel. I wanted to
                eat pasta and drink wine and actually enjoy the places I was visiting.
                I didn&rsquo;t want to spend my twenties obsessively tracking macros
                and skipping social dinners because they didn&rsquo;t fit my plan.
              </p>
              <p>
                But I also wanted to look and feel strong. I wanted a body that
                felt capable. And for a long time, I couldn&rsquo;t figure out
                how to have both.
              </p>

              <blockquote className="border-l-2 border-sand pl-6 my-10">
                <p className="font-serif text-bark text-xl md:text-2xl italic leading-relaxed">
                  &ldquo;Every time I traveled or life got full, my results fell
                  apart. I kept starting over. I couldn&rsquo;t figure out why
                  nothing ever stuck.&rdquo;
                </p>
              </blockquote>

              <p>
                So I did something that changed everything &mdash; I hired a coach.
                Not because I needed someone to hand me a workout plan, but because
                I needed someone to help me figure out a completely different way of
                approaching this.
              </p>
              <p>
                That year, I visited 21 countries. And for the first time, everything
                worked. My training adapted to wherever I was. My nutrition wasn&rsquo;t
                a source of anxiety &mdash; it was just something I understood. I was
                getting stronger, leaner, and more consistent than I&rsquo;d ever been.
                Not despite my lifestyle. Because of how I was working with it.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm sticky top-28">
                <Image
                  src="/Madison-153.webp"
                  alt="Madison in a casual pose with the ocean behind her"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── What I Learned ── */}
      <section className="bg-cream py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-sand text-[11px] font-sans font-medium tracking-[0.3em] uppercase mb-6">
            What Changed
          </p>
          <h2 className="font-serif text-midnight text-3xl md:text-4xl lg:text-5xl leading-[1.15] mb-12">
            What I learned that year:
          </h2>
          <ul className="space-y-6">
            {[
              'You don\'t need a perfect routine — you need a flexible system',
              'Strength training (done right) changes everything faster than cardio ever did',
              'You can eat pasta and wine and travel and still get lean — it\'s about how, not what',
              'The all-or-nothing mindset is the actual thing keeping most women stuck',
              'Results that last are built around your life, not in spite of it',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-5">
                <span className="block w-2 h-2 rounded-full bg-sand mt-2 shrink-0" />
                <span className="text-charcoal/80 font-sans text-lg leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── The Result ── */}
      <section className="bg-midnight py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-sand text-[11px] font-sans font-medium tracking-[0.3em] uppercase mb-6">
                Now
              </p>
              <blockquote className="font-serif text-cream text-2xl md:text-3xl lg:text-4xl leading-[1.3] mb-8">
                I built a body I&rsquo;m proud of &mdash; and I never had to
                choose between it and the life I actually wanted.
              </blockquote>
              <p className="text-cream/60 font-sans text-lg leading-relaxed">
                That&rsquo;s what I help my clients build now. Not a rigid plan
                that only works when everything is perfect. A system that travels,
                adapts, and compounds &mdash; so you never have to start over again.
              </p>
            </div>
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
              <Image
                src="/Madison-167.webp"
                alt="Madison looking down in a dress with the ocean behind her"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Who I Work With ── */}
      <section className="bg-cream py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
              <Image
                src="/Madison-102.webp"
                alt="Madison laughing naturally, full of life"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="font-serif text-midnight text-3xl md:text-4xl lg:text-5xl leading-[1.15] mb-8">
                I work with women who have a full life and want their body to match it.
              </h2>
              <ul className="space-y-5 mb-10">
                {[
                  'Women who travel and refuse to put their goals on hold every time they do',
                  'Women who want to feel strong and look lean — without obsessing over it',
                  'Women who have tried everything and need something that actually holds',
                  'Women who want to enjoy food, life, and still feel incredible in their body',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="block w-1.5 h-1.5 rounded-full bg-sand mt-2.5 shrink-0" />
                    <span className="text-charcoal/80 font-sans text-[17px] leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="font-serif text-bark text-xl md:text-2xl italic leading-relaxed">
                If that sounds like you &mdash; you&rsquo;re in the right place.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-bark py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-cream text-3xl md:text-4xl mb-6">
            Ready to work together?
          </h2>
          <p className="text-cream/70 font-sans text-lg mb-10 max-w-xl mx-auto">
            Start with a free Body Brief &mdash; a personalised snapshot of where
            you are and what it will take to get where you want to go.
          </p>
          <Link
            href="/body-brief"
            className="inline-flex items-center bg-cream text-bark text-[12px] font-sans font-medium tracking-[0.2em] uppercase px-10 py-4 rounded-sm hover:bg-cream/90 transition-colors duration-300"
          >
            Get Your Free Body Brief
          </Link>
        </div>
      </section>
    </>
  )
}

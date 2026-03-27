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
                Strength &amp; nutrition coach for women who live full, expansive lives&nbsp;&mdash;
                and want a body that can keep up.
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
                I did everything the fitness industry told women to do. I tracked every calorie. I
                cut carbs, then cut fats, then cut whatever was next on the list. I worked out six
                or seven days a week. I measured my body, weighed my food, and tied my entire sense
                of self-worth to a number on a scale.
              </p>
              <p>
                And here&rsquo;s the thing&nbsp;&mdash; it worked. For a while. I looked lean. I
                looked fit. But I was exhausted. I was anxious around food. I couldn&rsquo;t enjoy
                dinner without calculating what I&rsquo;d &ldquo;have to do&rdquo; the next morning
                to make up for it.
              </p>

              <blockquote className="border-l-2 border-sand pl-6 my-10">
                <p className="font-serif text-bark text-xl md:text-2xl italic leading-relaxed">
                  &ldquo;I looked like I had it together. But my relationship with my body was built
                  entirely on control.&rdquo;
                </p>
              </blockquote>

              <p>
                And control doesn&rsquo;t travel well. It breaks down when your routine changes.
                When you&rsquo;re in a new city, eating at restaurants you didn&rsquo;t plan for. When
                life gets full and messy and beautiful&nbsp;&mdash; and you can&rsquo;t meal-prep
                your way through it.
              </p>
              <p>
                I spent years in that cycle. Restrict, control, fall apart, start over. Each time
                feeling a little more broken. Each time trusting myself a little less.
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

      {/* ── What Changed ── */}
      <section className="bg-cream py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-sand text-[11px] font-sans font-medium tracking-[0.3em] uppercase mb-6">
            The Turning Point
          </p>
          <h2 className="font-serif text-midnight text-3xl md:text-4xl lg:text-5xl leading-[1.15] mb-12">
            Everything changed when I learned how to:
          </h2>
          <ul className="space-y-6">
            {[
              'Build real strength — not just "tone" — through structured, progressive training',
              'Fuel my body properly, without food fear, restriction, or guilt',
              'Stop approaching fitness from a place of control and punishment',
              'Create systems that held up when life got unpredictable',
              'Trust myself enough to let go of the rigidity',
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
                The Result
              </p>
              <blockquote className="font-serif text-cream text-2xl md:text-3xl lg:text-4xl leading-[1.3] mb-8">
                The result wasn&rsquo;t just a better physique. It was a body that felt
                powerful, resilient, and stable&nbsp;&mdash; no matter where I was in the world.
              </blockquote>
              <p className="text-cream/60 font-sans text-lg leading-relaxed">
                And that&rsquo;s exactly what I help my clients build now.
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

      {/* ── Positioning ── */}
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
                I work with women who live full, expansive lives.
              </h2>
              <ul className="space-y-5 mb-10">
                {[
                  'Women who travel and refuse to put their life on pause for a program',
                  'Women who build businesses and need energy, not depletion',
                  'Women who crave freedom — in how they eat, move, and live',
                  'Women who want to feel strong, not small',
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
                And want a body that can keep up with it.
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
            If this resonates, I&rsquo;d love to hear from you. Apply for coaching and
            let&rsquo;s talk about what&rsquo;s possible.
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

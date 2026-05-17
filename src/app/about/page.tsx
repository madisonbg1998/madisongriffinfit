import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Madison',
  description:
    'Former data scientist, current fitness coach, wine nerd, serial traveller, and firm believer that getting real results and actually living your life were never supposed to be in competition.',
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
                Hi, I&rsquo;m Madison.
              </h1>
              <p className="text-charcoal/80 font-sans text-lg md:text-xl leading-relaxed max-w-lg">
                Former data scientist, current fitness coach, wine nerd, serial traveller, and firm believer that getting real results and actually living your life were never supposed to be in competition.
              </p>
            </div>
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
              <Image
                src="/morocco_2.webp"
                alt="Madison in Morocco"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Story Part 1 ── */}
      <section className="bg-cream py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-7 lg:order-2 space-y-8 text-charcoal/80 font-sans text-[17px] leading-[1.75]">
              <p>I&rsquo;m a fitness coach. But I don&rsquo;t think your entire personality should be fitness. Honestly, the whole &ldquo;gym is my life&rdquo; thing? Kind of boring.</p>
              <p>I care about getting women real results. But not at the cost of their life, their joy, or the things that actually make them them. I don&rsquo;t want you bonding over pre-workout. I want you bonding over wine, travel, long dinners, and everything else that makes life worth living.</p>
              <p>I intentionally leave fitness off my dating profile. I&rsquo;m obsessed with travelling. I love pasta. I could talk about wine for hours.</p>

              <p className="font-serif text-midnight text-2xl md:text-3xl leading-snug">
                For a long time though, my body didn&rsquo;t match that life.
              </p>

              <p>I spent years trying everything. Different approaches, different programs, different ways of eating. Nothing was really changing my body in the way I wanted and I couldn&rsquo;t figure out why. I was putting in the effort. It just wasn&rsquo;t working.</p>
              <p>So I decided to finally figure it out properly and hired a coach, a WBFF fitness athlete who completely changed my understanding of fitness and nutrition.</p>

              <blockquote className="border-l-2 border-sand pl-6 font-serif italic text-xl md:text-2xl text-midnight/80 leading-snug">
                My body finally started changing. But I completely lost myself in the process.
              </blockquote>

              <p>But I became hyperfixated. Any deviation from the plan caused me real stress. A meal out, a missed session, an unplanned weekend. Things that should have been enjoyable became sources of anxiety. I was getting the results I&rsquo;d wanted for years, but I wasn&rsquo;t actually free. I was just trading one kind of stuck for another. Obsessing over my body instead of living in it.</p>

              <p className="font-serif italic text-xl md:text-2xl text-bark leading-snug">
                That wasn&rsquo;t the answer either.
              </p>
            </div>

            <div className="lg:col-span-5 lg:order-1">
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm sticky top-28">
                <Image
                  src="/Madison-281.webp"
                  alt="Madison walking on the beach"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── The Shift ── */}
      <section className="bg-midnight py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6 space-y-12">
          <p className="text-cream/75 font-sans text-[17px] leading-[1.75]">What eventually shifted everything was going into a proper muscle building phase. For the first time I stopped equating my weight with my progress. I started pulling flexibility back in, little by little. And something unexpected happened. My body kept changing, actually changing in ways I loved, but I wasn&rsquo;t grinding my way through it anymore. I was eating the foods I loved. I was enjoying my life. And my body was responding better than it ever had when I was controlling everything.</p>
          <p className="font-serif text-cream text-2xl md:text-3xl lg:text-4xl leading-snug text-center">
            The scanning stopped. The hyperfixation stopped. I just was.
          </p>
        </div>
      </section>

      {/* ── Story Part 2 ── */}
      <section className="bg-cream py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5 lg:order-1">
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm sticky top-28">
                <Image
                  src="/Madison-167.webp"
                  alt="Madison looking toward the ocean in a dress"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>

            <div className="lg:col-span-7 lg:order-2 space-y-8 text-charcoal/80 font-sans text-[17px] leading-[1.75]">
              <p>That&rsquo;s when it really clicked. Not just what was working, but why. I was a data scientist and a total data nerd, and I couldn&rsquo;t help myself. I went deep. Into the research, into the science, into understanding the mechanisms behind everything I&rsquo;d been experiencing. I got obsessed, as I do. And the more I understood, the more I realised that what I&rsquo;d stumbled into wasn&rsquo;t just a personal breakthrough. It was something other women needed too. So I got my certifications, and started building something around it.</p>
              <p>I packed up and started travelling through 21 countries, building the business while still working my day job. All at once. It was a lot. But for the first time in a long time I felt genuinely alive. Excited. Like time was finally mine.</p>

              <blockquote className="border-l-2 border-sand pl-6 font-serif italic text-xl md:text-2xl text-midnight/80 leading-snug">
                The next decision was easy. I quit my job with zero hesitation and ran full force toward the life I actually wanted.
              </blockquote>

              <p>Now I lift, I eat really well, I drink good wine, I travel constantly, and it just works. My body gives me the energy and the confidence to show up fully in my life. To be present, to perform, to enjoy every bit of it. That&rsquo;s what I&rsquo;d always wanted. Not a body instead of my life. A body that makes my life better.</p>
              <p>That&rsquo;s what I help women build. Not just a body that looks different. A body that feels like theirs. That supports their life instead of competing with it. That holds up when everything gets full and loud and honestly better than it&rsquo;s ever been.</p>
              <p>And the way I coach has kept evolving as I have, getting sharper, going deeper, getting closer to what I believe great coaching actually is.</p>
              <p>Because the version of you who has the body she wants and the version of you who actually lives her life were never supposed to be different people.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Who I Work With ── */}
      <section className="bg-midnight py-24 md:py-32">
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
              <h2 className="font-serif text-cream text-3xl md:text-4xl lg:text-5xl leading-[1.15] mb-8">
                Who I Work With
              </h2>
              <div className="space-y-5 text-cream/70 font-sans text-[17px] leading-relaxed mb-8">
                <p>I work with women who are done treating their body like a separate project. Women who have a full life &mdash; a career, a business, travel, relationships, ambitions &mdash; and want their body to actually match it. Not just look the part. Feel the part.</p>
                <p>Women who show up fully in every other area of their life and can&rsquo;t figure out why this one thing won&rsquo;t click. Who have tried coaches before, followed the plans, gotten some results, and still don&rsquo;t feel at home in themselves. Who want to stop starting over and start building something that actually holds.</p>
                <p>Women who refuse to put their life on hold to get results. Who want the wine and the pasta and the dinners and the travel, and a body that supports all of it.</p>
              </div>
              <p className="font-serif text-sand text-xl md:text-2xl italic leading-relaxed">
                If that sounds like you, you&rsquo;re in the right place.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-bark py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-cream text-3xl md:text-4xl mb-6">
            The best place to start is the Body Brief.
          </h2>
          <p className="text-cream/70 font-sans text-lg mb-10 max-w-xl mx-auto">
            Free, five minutes, and it gives you the clearest picture you&rsquo;ve ever had of where you actually are and what it&rsquo;s going to take to get where you want to go.
          </p>
          <Link
            href="/body-brief"
            className="inline-flex items-center bg-cream text-bark text-[12px] font-sans font-medium tracking-[0.2em] uppercase px-10 py-4 rounded-sm hover:bg-cream/90 transition-colors duration-300"
          >
            Get Your Free Body Brief
          </Link>
          <p className="mt-5 text-cream/40 font-sans text-xs tracking-wide">
            Free &middot; Takes 5 minutes
          </p>
        </div>
      </section>
    </>
  )
}

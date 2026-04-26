import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Madison',
  description:
    'Fitness coach, wine nerd, serial traveller, and firm believer that you shouldn\'t have to become a more boring version of yourself to get results.',
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
                Fitness coach, wine nerd, serial traveller, and firm believer that you shouldn&rsquo;t have to become a more boring version of yourself to get results.
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
              <p>So I decided to finally figure it out properly and hired a coach.</p>

              <blockquote className="border-l-2 border-sand pl-6 font-serif italic text-xl md:text-2xl text-midnight/80 leading-snug">
                My body finally started changing. But I completely lost myself in the process.
              </blockquote>

              <p>I became hyperfixated. Any deviation from the plan caused me real stress. A meal out, a missed session, an unplanned weekend. Things that should have been enjoyable became sources of anxiety. I was getting the results I&rsquo;d wanted for years, but I wasn&rsquo;t actually free. I was just trading one kind of stuck for another. Obsessing over my body instead of living in it.</p>

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
          <p className="text-cream/75 font-sans text-[17px] leading-[1.75]">What eventually shifted everything was going into a proper muscle building phase. For the first time I stopped equating my weight with my progress. I started pulling flexibility back in, little by little. And something unexpected happened. My body kept changing, actually changing in ways I loved, but I wasn&rsquo;t white-knuckling my way through it anymore. I was eating the foods I loved. I was enjoying my life. And my body was responding better than it ever had when I was controlling everything.</p>
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
              <p>And as that shift happened in my body, something started shifting in my life too. I was a data scientist, and I felt completely flat. Uninspired. Not excited to get up most mornings. Time was sprinting by and nothing felt like mine. The same pattern I&rsquo;d broken in my fitness &mdash; forcing myself into something that was never built for me &mdash; was playing out everywhere else.</p>
              <p>All I wanted to do was travel the world. But I kept wondering, how could I do that and still do this?</p>
              <p>So I started testing how much flexibility I could actually give myself and still get results. And it surprised me. Not only did my body keep responding, it got better. I was building a body I genuinely loved and felt confident in. Eating all the good food. Travelling. Supporting a strong, healthy, fit body and doing it in a way that felt calm and completely mine.</p>
              <p>That&rsquo;s when I started building a business around what I&rsquo;d figured out. I packed up and started travelling through 21 countries, working my job and building this alongside it. All at once. It was a lot. But for the first time in a long time I felt genuinely alive. Excited. Like time was finally mine.</p>

              <blockquote className="border-l-2 border-sand pl-6 font-serif italic text-xl md:text-2xl text-midnight/80 leading-snug">
                The next decision was easy. I quit my job with zero hesitation and ran full force toward the life I actually wanted.
              </blockquote>

              <p>Now I lift, I eat really well, I drink good wine, I travel constantly, and it just works. Not because I finally got disciplined enough. Because I stopped fighting my body and started actually working with it.</p>
              <p>That&rsquo;s what I help women do. Not just change their bodies. Change their whole relationship with their bodies. Build something sustainable, something that holds up when life gets full and unpredictable and honestly better than it&rsquo;s ever been.</p>
              <p>Because you don&rsquo;t need to become a more boring version of yourself to get results. You just need a way of doing this that was actually built for you.</p>
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
                <p>I work with women who have a full life and want their body to match it. Women who travel and refuse to put their goals on hold every time they do. Women who want to feel strong and look incredible without obsessing over it. Women who have tried everything and need something that actually holds.</p>
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

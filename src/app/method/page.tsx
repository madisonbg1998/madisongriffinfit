import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'The Body Unmuted Method',
  description:
    'Build a body that loves your life. Not one that\'s constantly fighting it. Strength, fuel, and body relationship — woven together so your results hold.',
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
            Build a body that loves your life, not one that&rsquo;s constantly fighting it.
          </p>
        </div>
      </section>

      {/* ── Core Philosophy ── */}
      <section className="bg-cream py-28 md:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-20">
            <div className="lg:col-span-3 space-y-7">
              <h2 className="font-serif text-midnight text-3xl md:text-[2.75rem] leading-[1.15] tracking-tight text-balance">
                Why your results haven&rsquo;t lasted
              </h2>

              <div className="space-y-5 text-charcoal/80 font-sans text-base md:text-[17px] leading-relaxed">
                <p>The fitness industry has spent decades teaching women to manage, restrict, track, and override. Eat less. Push harder. White-knuckle your way to results.</p>
                <p>And for a while, it works.</p>
                <p>But it was never actually fixing anything. Because the problem was never your discipline. It was that nobody ever taught you to actually understand your body. To feel what&rsquo;s working. To know what it needs. To live inside it instead of just managing it from the outside.</p>
                <p>So when life moved &mdash; a trip, a stressful season, a week where you just didn&rsquo;t have it in you &mdash; everything unravelled. Not because you failed. Because you&rsquo;d been given a bandaid, not a foundation.</p>
                <p>That&rsquo;s not a you problem. That&rsquo;s a design problem.</p>
                <p>The Body Unmuted Method is built differently. Instead of handing you a plan and telling you to follow it, we build your ability to actually understand your body. To feel what&rsquo;s working, know what it needs, and trust yourself enough to keep going when life gets real. That&rsquo;s not motivation. That&rsquo;s body literacy. And it&rsquo;s the only foundation results actually stick to.</p>
              </div>

              <blockquote className="border-l-2 border-sand pl-6 font-serif italic text-xl md:text-2xl text-midnight/80 leading-snug">
                &ldquo;You were never taught to inhabit your body. Just to manage it. That&rsquo;s not a personal failing. That&rsquo;s what every woman was handed.&rdquo;
              </blockquote>
            </div>

            <div className="lg:col-span-2">
              <div className="relative aspect-[3/4] rounded-sm overflow-hidden">
                <Image
                  src="/Madison-249.webp"
                  alt="Madison in golden light"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pillars Intro ── */}
      <section className="bg-midnight py-20 md:py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-cream text-3xl md:text-[2.75rem] leading-[1.15] tracking-tight text-balance">
            Three pillars. Woven together so your results build on themselves instead of collapsing every time life gets real.
          </h2>
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
                <p>Most women end up stuck between two options. A program that actually changes their body but falls apart the moment they travel or life gets busy, or workouts they can do anywhere that feel good but don&rsquo;t actually do much.</p>
                <p>We do neither.</p>
                <p>Your training is built around your goals, your schedule, and wherever you are in the world. Full gym access? We push. Hotel gym or living room floor? We adjust. Nothing falls apart. Nothing gets lost. You just keep building.</p>
                <p>But here&rsquo;s what actually makes the difference: it&rsquo;s not just doing the workouts. It&rsquo;s how you execute them.</p>
                <p>Results come from training close enough to failure that your body has a reason to change. That requires real muscle activation, genuine effort, and knowing the difference between pushing hard and pushing through something your body is actually signalling you to pay attention to. Most women are never taught any of this. Most coaches never teach it.</p>
                <p>We do. Because that&rsquo;s what actually unlocks results. Not just showing up. Showing up and being inside your body when you do.</p>
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
                <p>Most approaches teach you to eat less. Which works until you actually want a life.</p>
                <p>We do the opposite.</p>
                <p>I spent years as a data scientist before becoming a coach, which means your nutrition isn&rsquo;t built on trends or guesswork. It&rsquo;s built on what the research actually shows, specific to your body, your training volume, and how you&rsquo;re actually responding. Your numbers move as you do.</p>
                <p>We build a metabolism that can handle more over time &mdash; more food, more flexibility, more freedom &mdash; while still getting leaner and changing shape. So you can go out, order what you want, enjoy pasta in Italy and wine on a Tuesday, and not spend the rest of the night doing mental math about what you just ate.</p>
                <p>This is about building a sustainable relationship with food that travels with you, holds up in social situations, and never asks you to choose between your goals and your life.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pillar 3: Body Relationship ── */}
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
                Body Relationship
              </h3>
              <div className="space-y-5 text-charcoal/80 font-sans text-[17px] leading-relaxed">
                <p>This is the piece most programs skip entirely. And it&rsquo;s the reason most results don&rsquo;t last.</p>
                <p>We work on the patterns that keep you starting over. The all-or-nothing thinking. The belief that one bad day means you&rsquo;ve ruined everything. The perfectionism that makes rest feel like failure and imperfection feel like proof that you&rsquo;re not cut out for this.</p>
                <p>But we go deeper than the cycles. We work on who you are in relation to your body. The identity you&rsquo;ve carried &mdash; that fitness is always the thing you can&rsquo;t quite crack, that your body is something to be managed and controlled rather than lived in. That changes here.</p>
                <p>You are cut out for this. You just need to stop fighting your body and start actually inhabiting it. Feeling it. Trusting it. Building a relationship with yourself where your body isn&rsquo;t the enemy. It&rsquo;s home.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── What life looks like on the other side ── */}
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
            What life looks like on the other side.
          </h2>
          <div className="space-y-6 text-cream/80 font-sans text-lg leading-relaxed text-left">
            <p>You stop scanning when you walk into a room. You stop doing the mental inventory of how you look, whether your stomach is flat, whether you should have worn something else. You&rsquo;re just there. Present. In the conversation.</p>
            <p>You have energy that matches your life. You travel, you eat out, you enjoy things, and none of it sends you into a spiral. Your body feels stable across every season, not just the ones where everything goes to plan.</p>
            <p>You trust yourself with food. You trust yourself in the gym. And that trust starts to bleed into everything else.</p>
            <p>Your body stops being the thing that costs you energy and starts being the thing that gives it back. More capacity for your work, your relationships, your life. Not instead of everything you love. Because of it.</p>
            <p>This is what it feels like when your fitness is actually working for you instead of against you.</p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-bark py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-cream text-3xl md:text-4xl mb-6">
            Ready to find out what this looks like for you?
          </h2>
          <p className="text-cream/70 font-sans text-lg mb-10 max-w-xl mx-auto">
            Start with the Body Brief. It&rsquo;s free, it takes five minutes, and it gives you a clear picture of where you are and exactly what it will take to get where you want to go.
          </p>
          <Link
            href="/body-brief"
            className="inline-flex items-center bg-cream text-bark text-[12px] font-sans font-medium tracking-[0.2em] uppercase px-10 py-4 rounded-sm hover:bg-cream/90 transition-colors duration-300"
          >
            Get Your Free Body Brief
          </Link>
          <p className="mt-5 text-cream/40 font-sans text-xs tracking-wide">
            Takes 5 minutes &middot; No commitment required
          </p>
        </div>
      </section>
    </>
  )
}

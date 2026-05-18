import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'The Body Unmuted Method',
  description:
    "Build a body that loves your life. Not one that's constantly fighting it. Strength, fuel, and body relationship — woven together so your results hold.",
  openGraph: {
    images: [{ url: '/Madison-73.webp', width: 1200, height: 630, alt: 'The Body Unmuted Method — Madison Griffin Fit' }],
  },
}

const gaps = [
  {
    lead: 'A knowledge gap.',
    body: 'Wrong information, conflicting advice, nobody ever explaining how her body actually works as the specific kind of woman she is.',
  },
  {
    lead: 'A strategy gap.',
    body: "She knows the principles, but training, nutrition, and recovery fall apart under the pressure of building a real life.",
  },
  {
    lead: 'A relationship gap.',
    body: "A complicated, often unexamined dynamic with her body that no amount of strategy fixes until it's named and worked through.",
  },
]

// Two distinct text treatments used throughout
const body = 'text-charcoal/70 font-sans text-[17px] leading-[2]'
const statement = 'font-sans font-medium text-midnight text-xl md:text-2xl leading-snug'

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
            Built for women who are done shrinking their life to fit their fitness.
          </p>
        </div>
      </section>

      {/* ── Core Philosophy ── */}
      <section className="bg-cream py-28 md:py-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-24">

            <div className="lg:col-span-3 space-y-10">
              <h2 className="font-serif text-midnight text-3xl md:text-[2.75rem] leading-[1.15] tracking-tight text-balance">
                Why your results haven&rsquo;t lasted
              </h2>

              <p className={body}>
                The fitness industry has spent decades teaching women to <em>manage, restrict, track, and override</em>. Eat less. Push harder. White-knuckle your way to results.
              </p>

              <p className={statement}>And for a while, it works.</p>

              <p className={body}>
                But it was never actually fixing anything. Because the problem was never your discipline. It was that nobody ever taught you to actually understand your body — to feel what&rsquo;s working, to know what it needs, to live inside it instead of just managing it from the outside.
              </p>

              <p className={body}>
                So when life moved — a trip, a stressful season, a week where you just didn&rsquo;t have it in you — everything unravelled. Not because you failed. Because you&rsquo;d been given <em>a bandaid, not a foundation</em>.
              </p>

              <p className="font-serif text-midnight text-xl md:text-[1.7rem] leading-snug">
                That&rsquo;s not a you problem. That&rsquo;s a design problem.
              </p>

              <p className={body}>
                After working with high-performing women on this for years, I found that getting stuck in your body consistently comes down to one of three things.
              </p>

              <div className="space-y-5">
                {gaps.map(({ lead, body: gapBody }) => (
                  <div key={lead} className="pl-6 border-l-2 border-sand py-1">
                    <p className="text-charcoal/80 font-sans text-base md:text-[17px] leading-[2]">
                      <strong className="text-midnight font-semibold">{lead}</strong>{' '}{gapBody}
                    </p>
                  </div>
                ))}
              </div>

              <p className={statement}>
                Most coaches address one. Usually the most obvious one. That&rsquo;s why results don&rsquo;t last.
              </p>

              <p className={body}>
                The Body Unmuted Method addresses all three. Not as separate tracks, but woven through everything. The way you train, the way you eat, and the way you relate to your body are not three different problems — they&rsquo;re <em>three expressions of the same one</em>. So that&rsquo;s how we work on them.
              </p>
            </div>

            <div className="lg:col-span-2">
              <div className="relative aspect-[3/4] rounded-sm overflow-hidden lg:sticky lg:top-24">
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

      {/* ── Pull Quote ── */}
      <section className="bg-cream border-t border-b border-bark/12 py-20 md:py-28">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <blockquote className="font-serif italic text-midnight text-2xl md:text-[1.9rem] leading-[1.5]">
            &ldquo;You were never taught to inhabit your body. Just to manage it. That&rsquo;s not a personal failing. That&rsquo;s what every woman was handed.&rdquo;
          </blockquote>
        </div>
      </section>

      {/* ── Pillars Intro ── */}
      <section className="bg-midnight py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-cream leading-[1.25] tracking-tight text-balance">
            <span className="block text-4xl md:text-5xl mb-4">Three pillars.</span>
            <span className="block text-xl md:text-2xl text-cream/65 font-sans font-normal tracking-normal">
              Each one working on all three gaps at once, because that&rsquo;s the only way results actually hold when life gets real.
            </span>
          </h2>
        </div>
      </section>

      {/* ── Pillar 1: Strength ── */}
      <section className="bg-cream py-24 md:py-36">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
            <div className="relative aspect-[3/4] lg:aspect-[4/5] overflow-hidden rounded-sm lg:sticky lg:top-24">
              <Image
                src="/Madison-88.webp"
                alt="Madison in athletic pose, confident and strong"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="lg:pl-4 space-y-10">
              <div>
                <p className="text-sand text-[11px] font-sans font-medium tracking-[0.3em] uppercase mb-5">
                  Pillar One
                </p>
                <h3 className="font-serif text-midnight text-4xl md:text-5xl lg:text-6xl">
                  Strength
                </h3>
              </div>

              <p className={body}>
                Most women end up stuck between two options. A programme that actually changes their body but falls apart the moment they travel or life gets busy, or workouts they can do anywhere that feel good but don&rsquo;t actually do much.
              </p>

              <p className={statement}>We do neither.</p>

              <p className={body}>
                Your training is built around your goals, your schedule, and wherever you are in the world. Full gym access? We push. Hotel gym or living room floor? We adjust. Nothing falls apart. Nothing gets lost. You just keep building.
              </p>

              <p className={statement}>
                But here&rsquo;s what actually makes the difference. It&rsquo;s not just doing the workouts. It&rsquo;s <em className="not-italic">how you execute them</em>.
              </p>

              <p className={body}>
                Results come from training close enough to failure that your body has a reason to change. That requires real muscle activation, genuine effort, and knowing the difference between pushing hard and pushing through something your body is actually signalling you to pay attention to. Most women are never taught any of this. Most coaches never teach it.
              </p>

              <div className="pt-8 border-t border-bark/10 space-y-8">
                <p className={body}>
                  <span className="text-bark font-medium">Body literacy</span> starts here. It means being able to feel what&rsquo;s working — knowing whether a set was genuinely hard or just uncomfortable, understanding the difference between a signal worth listening to and one worth pushing through. It&rsquo;s the <em>invisible layer</em> underneath every programme, and the reason good programmes on paper so often produce mediocre results in practice.
                </p>
                <p className={body}>
                  We teach it. Because that&rsquo;s what actually unlocks results. Not just showing up. Showing up and being inside your body when you do.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pillar 2: Fuel ── */}
      <section className="bg-cream border-t border-bark/8 py-24 md:py-36">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
            <div className="lg:order-2 relative aspect-[3/4] lg:aspect-[4/5] overflow-hidden rounded-sm lg:sticky lg:top-24">
              <Image
                src="/Madison-243.webp"
                alt="Madison eating on the beach, enjoying food freely"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="lg:order-1 lg:pr-4 space-y-10">
              <div>
                <p className="text-sand text-[11px] font-sans font-medium tracking-[0.3em] uppercase mb-5">
                  Pillar Two
                </p>
                <h3 className="font-serif text-midnight text-4xl md:text-5xl lg:text-6xl">
                  Fuel
                </h3>
              </div>

              <p className={statement}>
                Most approaches teach you to eat less. Which works until you actually want a life. We build the opposite: a metabolism that handles more over time, not less.
              </p>

              <p className={body}>
                I spent years as a data scientist before becoming a coach, which means your nutrition isn&rsquo;t built on trends or guesswork. It&rsquo;s built on what the research actually shows, specific to your body, your training volume, and how you&rsquo;re actually responding. Your numbers move as you do.
              </p>

              <p className={body}>
                The knowledge gap shows up most clearly in nutrition. Most women have been given rules designed for a generic body in a controlled environment — not theirs, not now. Your nutrition framework is built on your actual data, adjusted as you respond, and designed to get more flexible over time, not less. That&rsquo;s what makes it hold.
              </p>

              <p className={body}>
                We build a metabolism that can handle more over time — more food, more flexibility, more freedom — while still getting leaner and changing shape. So you can go out, order what you want, enjoy <em>pasta in Italy and wine on a Tuesday</em>, and not spend the rest of the night doing mental math about what you just ate.
              </p>

              <p className={body}>
                This is about building a sustainable relationship with food that travels with you, holds up in social situations, and <em>never asks you to choose between your goals and your life</em>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pillar 3: Body Relationship ── */}
      <section className="bg-cream border-t border-bark/8 py-24 md:py-36">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
            <div className="relative aspect-[3/4] lg:aspect-[4/5] overflow-hidden rounded-sm lg:sticky lg:top-24">
              <Image
                src="/Madison-201.webp"
                alt="Madison in peaceful close-up, calm and centered"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="lg:pl-4 space-y-10">
              <div>
                <p className="text-sand text-[11px] font-sans font-medium tracking-[0.3em] uppercase mb-5">
                  Pillar Three
                </p>
                <h3 className="font-serif text-midnight text-4xl md:text-5xl lg:text-6xl">
                  Body Relationship
                </h3>
              </div>

              <p className={statement}>
                This is the piece most programmes skip entirely. And it&rsquo;s the reason most results don&rsquo;t last.
              </p>

              <p className={body}>
                We work on the patterns that keep you starting over. The <em>all-or-nothing thinking</em>. The belief that one bad day means you&rsquo;ve ruined everything. The perfectionism that makes rest feel like failure and imperfection feel like proof that you&rsquo;re not cut out for this.
              </p>

              <p className={body}>
                But we go deeper than the cycles. We work on who you are in relation to your body. The identity you&rsquo;ve carried — that fitness is always the thing you can&rsquo;t quite crack, that your body is something to be managed and controlled rather than lived in. That changes here.
              </p>

              <p className="font-serif text-midnight text-xl md:text-[1.7rem] leading-snug">
                This is not a motivation problem. It is a <span className="text-bark">relationship problem</span>. And it is solvable, but not by pushing harder.
              </p>
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
          <p className="text-sand text-[11px] font-sans font-medium tracking-[0.3em] uppercase mb-8">
            The Outcome
          </p>
          <h2 className="font-serif text-cream text-3xl md:text-5xl leading-[1.15] mb-14">
            What life looks like on the other side.
          </h2>
          <div className="space-y-8 text-cream/75 font-sans text-lg leading-[2] text-left">
            <p>You stop scanning when you walk into a room. You stop doing the mental inventory of how you look, whether your stomach is flat, whether you should have worn something else. You&rsquo;re just there. <em>Present. In the conversation.</em></p>

            <p>You have energy that matches your life. You travel, you eat out, you enjoy things, and none of it sends you into a spiral. Your body feels stable across every season, not just the ones where everything goes to plan.</p>

            <p>You trust yourself with food. You trust yourself in the gym. And that trust starts to bleed into everything else.</p>

            <p>Your body stops being the thing that costs you energy and starts being the thing that gives it back. More capacity for your work, your relationships, your life. <em>Not instead of everything you love. Because of it.</em></p>

            <p className="font-sans font-medium text-cream text-xl md:text-2xl leading-snug">The knowledge gap closes. The strategy holds. And the relationship with your body shifts from something you manage to something you trust.</p>
          </div>
          <p className="mt-14 font-serif italic text-cream text-xl md:text-2xl leading-snug">
            This is what it feels like when your fitness is actually working for you instead of against you.
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-bark py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-cream text-3xl md:text-4xl mb-8">
            Ready to find out what this looks like for you?
          </h2>
          <p className="text-cream/70 font-sans text-[17px] leading-[1.9] mb-10 max-w-xl mx-auto">
            If any of this resonates, start with the Body Brief. It&rsquo;s free, it takes five minutes, and at the end of it you&rsquo;ll have a clearer picture of which of these three areas is actually holding you back and where to start.
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

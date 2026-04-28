'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

/* ------------------------------------------------------------------ */
/*  useInView hook — triggers once when element enters viewport        */
/* ------------------------------------------------------------------ */
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(node)
        }
      },
      { threshold }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, isVisible }
}

/* helper: animation classes driven by visibility */
function anim(visible: boolean, delay = 0) {
  return {
    className: `transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
      visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
    }`,
    style: { transitionDelay: `${delay}ms` },
  }
}

/* ================================================================== */
/*  HOME PAGE                                                          */
/* ================================================================== */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <DreamOutcomeSection />
      <MethodSection />
      <WhoThisIsForSection />
      <BodyBriefSection />
      <OffersSection />
      <SocialProofSection />
      <FinalCTASection />
    </>
  )
}

/* ================================================================== */
/*  1. HERO                                                            */
/* ================================================================== */
function HeroSection() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/Madison-29.webp"
          alt="Madison Griffin on mountain trail in athletic wear"
          fill
          priority
          className="object-cover object-[center_20%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-midnight/40 via-midnight/45 to-midnight/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-midnight/50 via-midnight/20 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl w-full px-6 md:px-12 lg:px-20 text-left pt-20">
        <div className="max-w-2xl">
          <h1
            className={`font-serif text-5xl md:text-7xl lg:text-[5.25rem] leading-[1.08] text-cream tracking-tight text-balance transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ textShadow: '0 2px 20px rgba(0,0,0,0.5), 0 1px 4px rgba(0,0,0,0.3)' }}
          >
            You Shouldn&rsquo;t Have to Slow Your Life Down to Get Results
          </h1>

          <p
            className={`mt-7 text-lg md:text-xl text-cream/85 font-sans font-light leading-relaxed max-w-xl transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] delay-200 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ textShadow: '0 1px 10px rgba(0,0,0,0.4)' }}
          >
            Strength and nutrition coaching for women who travel, build businesses, and refuse to put their lives on hold to get results.
          </p>

          <div
            className={`mt-10 transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] delay-500 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <Link
              href="/body-brief"
              className="inline-block bg-sand text-midnight font-sans font-medium text-sm tracking-wide uppercase rounded-full px-10 py-4 hover:bg-bark hover:text-cream transition-colors duration-400"
            >
              Get Your Free Body Brief
            </Link>
          </div>
        </div>
      </div>

      <div
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-opacity duration-1000 delay-[800ms] ${
          loaded ? 'opacity-60' : 'opacity-0'
        }`}
      >
        <span className="text-cream/50 text-[10px] tracking-[0.2em] uppercase font-sans">Scroll</span>
        <svg
          className="w-5 h-5 text-cream/50 animate-bounce"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </div>
    </section>
  )
}

/* ================================================================== */
/*  2. PROBLEM                                                         */
/* ================================================================== */
function ProblemSection() {
  const s1 = useInView()
  const s2 = useInView()

  return (
    <section className="bg-cream py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-20 items-center">
          <div ref={s1.ref} className="lg:col-span-3 space-y-7">
            <h2
              className={`font-serif text-3xl md:text-[2.75rem] leading-[1.15] text-midnight tracking-tight text-balance ${anim(s1.isVisible).className}`}
              style={anim(s1.isVisible).style}
            >
              Most fitness approaches quietly expect you to shrink your life to fit them.
            </h2>

            <div
              className={`space-y-5 text-charcoal/80 font-sans text-base md:text-[17px] leading-relaxed ${anim(s1.isVisible, 120).className}`}
              style={anim(s1.isVisible, 120).style}
            >
              <p>They work&hellip; If your schedule never changes. If you eat the same meals every week. If you never travel, never have a big work season, never have a night where everything falls apart.</p>
              <p>But your life doesn&rsquo;t look like that. Some weeks you&rsquo;re in a rhythm. Some weeks you&rsquo;re in three different time zones. And the fitness industry has spent years telling you that the reason you&rsquo;re not getting results is you.</p>
              <p>It isn&rsquo;t.</p>
              <p>The problem isn&rsquo;t your discipline. It isn&rsquo;t your consistency. It isn&rsquo;t that you don&rsquo;t want it badly enough.</p>
              <p>The problem is you&rsquo;ve been given a system that was never designed for the way you actually live.</p>
            </div>

            <blockquote
              className={`border-l-2 border-sand pl-6 font-serif italic text-xl md:text-2xl text-midnight/80 leading-snug ${anim(s1.isVisible, 240).className}`}
              style={anim(s1.isVisible, 240).style}
            >
              &ldquo;The problem was never your discipline. It was a system built for a life you don&rsquo;t actually live.&rdquo;
            </blockquote>
          </div>

          <div
            ref={s2.ref}
            className={`lg:col-span-2 ${anim(s2.isVisible, 200).className}`}
            style={anim(s2.isVisible, 200).style}
          >
            <div className="relative aspect-[3/4] rounded-sm overflow-hidden">
              <Image
                src="/Madison-38.webp"
                alt="Madison leaning against rock in golden light"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ================================================================== */
/*  3. DREAM OUTCOME                                                   */
/* ================================================================== */
function DreamOutcomeSection() {
  const s1 = useInView()
  const s2 = useInView()

  return (
    <section className="bg-midnight py-28 md:py-36 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <div
            ref={s1.ref}
            className={`relative aspect-[4/5] rounded-sm overflow-hidden ${anim(s1.isVisible).className}`}
            style={anim(s1.isVisible).style}
          >
            <Image
              src="/Madison-73.webp"
              alt="Madison with arms spread wide, eyes closed, joyful in nature"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div ref={s2.ref} className="space-y-7">
            <h2
              className={`font-serif text-3xl md:text-[2.75rem] leading-[1.15] text-cream tracking-tight text-balance ${anim(s2.isVisible).className}`}
              style={anim(s2.isVisible).style}
            >
              Picture what it feels like when it actually works.
            </h2>

            <div
              className={`space-y-5 text-cream/70 font-sans text-base md:text-[17px] leading-relaxed ${anim(s2.isVisible, 120).className}`}
              style={anim(s2.isVisible, 120).style}
            >
              <p>Not just how you look. How you feel.</p>
              <p>You walk into a room and you&rsquo;re just there. Fully present. Not doing the mental inventory of whether your stomach looks flat, whether you should have worn something else, whether you look as tired as you feel.</p>
              <p>You stop scanning. You stop starting over. You stop negotiating with yourself every Sunday about what this week is going to be different.</p>
              <p>You have energy that matches your life. You eat out, you travel, you enjoy things, and none of it sends you into a spiral. You feel strong in your body. Comfortable in it. Like it belongs to the life you&rsquo;ve built.</p>
              <p>That&rsquo;s not a fantasy. That&rsquo;s what happens when the way you train and eat is actually built around you.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ================================================================== */
/*  4. BODY UNMUTED METHOD                                             */
/* ================================================================== */
const pillars = [
  {
    image: '/Madison-88.webp',
    alt: 'Madison showing athletic physique, smiling and confident',
    label: 'Strength',
    paragraphs: [
      'Most women end up doing one of two things: a program that gets results but falls apart the moment they travel, or workouts they can do anywhere that don’t actually change their body.',
      'We do neither.',
      'Your training adapts to what you have, so when you’re in a full gym we push for real change, and when you’re not, we adjust without everything falling apart.',
    ],
  },
  {
    image: '/Madison-243.webp',
    alt: 'Madison eating from a bowl on the beach at sunset',
    label: 'Fuel',
    paragraphs: [
      'Most approaches teach you to eat less. Which works until you actually want a life.',
      'We do the opposite.',
      'We build a body that can eat more over time while still getting leaner and changing shape. So you can go out, order what you want, and not spend the rest of the night doing mental math.',
    ],
  },
  {
    image: '/Madison-201.webp',
    alt: 'Madison close-up, eyes closed, peaceful in golden light',
    label: 'Mindset',
    paragraphs: [
      'This is where lasting change actually lives.',
      'We dismantle the all-or-nothing thinking, the guilt cycles, and the perfectionism that have kept you starting over. One bad meal doesn’t ruin the day. One bad week doesn’t ruin the month.',
      'We build the mental foundation that makes everything else stick.',
    ],
  },
]

function MethodSection() {
  const heading = useInView()
  const cards = useInView(0.1)
  const cta = useInView()

  return (
    <section className="bg-cream py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div ref={heading.ref} className="text-center max-w-3xl mx-auto mb-20">
          <p
            className={`text-sand text-[11px] font-sans font-medium tracking-[0.25em] uppercase mb-5 ${anim(heading.isVisible).className}`}
            style={anim(heading.isVisible).style}
          >
            The Method
          </p>
          <h2
            className={`font-serif text-4xl md:text-5xl lg:text-[3.5rem] text-midnight tracking-tight ${anim(heading.isVisible, 100).className}`}
            style={anim(heading.isVisible, 100).style}
          >
            The Body Unmuted Method.
          </h2>
          <p
            className={`mt-6 text-charcoal/70 font-sans text-base md:text-lg leading-relaxed max-w-2xl mx-auto ${anim(heading.isVisible, 200).className}`}
            style={anim(heading.isVisible, 200).style}
          >
            Three pillars. Woven together so your results build on themselves instead of collapsing every time life gets real.
          </p>
        </div>

        <div ref={cards.ref} className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {pillars.map((pillar, i) => (
            <div
              key={pillar.label}
              className={`group rounded-sm border border-charcoal/8 bg-white shadow-[0_2px_20px_rgba(0,0,0,0.04)] overflow-hidden hover:shadow-[0_8px_40px_rgba(0,0,0,0.08)] transition-shadow duration-500 ${anim(cards.isVisible, i * 150).className}`}
              style={anim(cards.isVisible, i * 150).style}
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={pillar.image}
                  alt={pillar.alt}
                  fill
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-7 md:p-8">
                <p className="text-sand text-[11px] font-sans font-semibold tracking-[0.2em] uppercase mb-3">
                  {pillar.label}
                </p>
                <div className="space-y-3">
                  {pillar.paragraphs.map((para, j) => (
                    <p key={j} className="text-charcoal/75 font-sans text-[15px] leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          ref={cta.ref}
          className={`mt-14 text-center ${anim(cta.isVisible).className}`}
          style={anim(cta.isVisible).style}
        >
          <Link
            href="/method"
            className="inline-block border border-bark text-bark font-sans font-medium text-sm tracking-wide uppercase rounded-full px-10 py-4 hover:bg-bark hover:text-cream transition-colors duration-300"
          >
            Read more about the method
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ================================================================== */
/*  5. WHO THIS IS FOR                                                 */
/* ================================================================== */
function WhoThisIsForSection() {
  const s1 = useInView()
  const s2 = useInView()

  return (
    <section className="bg-white py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <div ref={s1.ref} className="space-y-7">
            <h2
              className={`font-serif text-3xl md:text-[2.75rem] leading-[1.15] text-midnight tracking-tight text-balance ${anim(s1.isVisible).className}`}
              style={anim(s1.isVisible).style}
            >
              This is for you if&hellip;
            </h2>

            <div
              className={`space-y-5 text-charcoal/80 font-sans text-base md:text-[17px] leading-relaxed ${anim(s1.isVisible, 120).className}`}
              style={anim(s1.isVisible, 120).style}
            >
              <p>You&rsquo;ve tried things before and they&rsquo;ve worked&hellip; Until your routine changed, a work trip came up, or life just got loud. And then you were back at square one wondering what was wrong with you.</p>
              <p>Nothing is wrong with you.</p>
              <p>You&rsquo;re a woman with a full life. A career, travel, things you care about that have nothing to do with the gym. You want to feel incredible in your body. You want results that are real and that hold. But you&rsquo;re not willing to become a more boring version of yourself to get them.</p>
              <p>You&rsquo;re tired of fitness content that treats you like you just need more motivation. You&rsquo;re tired of starting over. You&rsquo;re tired of feeling like your body and your life are in conflict.</p>
              <p>They don&rsquo;t have to be.</p>
            </div>
          </div>

          <div
            ref={s2.ref}
            className={`relative aspect-[4/5] rounded-sm overflow-hidden ${anim(s2.isVisible, 200).className}`}
            style={anim(s2.isVisible, 200).style}
          >
            <Image
              src="/Madison-83.webp"
              alt="Madison laughing and running with mountain behind her"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ================================================================== */
/*  6. BODY BRIEF CTA                                                  */
/* ================================================================== */
function BodyBriefSection() {
  const s1 = useInView()
  const s2 = useInView()

  return (
    <section className="bg-midnight py-28 md:py-36 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div ref={s1.ref} className="space-y-7 order-2 lg:order-1">
            <p
              className={`text-sand text-[11px] font-sans font-medium tracking-[0.25em] uppercase ${anim(s1.isVisible).className}`}
              style={anim(s1.isVisible).style}
            >
              Your First Step
            </p>

            <h2
              className={`font-serif text-3xl md:text-[2.75rem] leading-[1.15] text-cream tracking-tight text-balance ${anim(s1.isVisible, 100).className}`}
              style={anim(s1.isVisible, 100).style}
            >
              Before we build anything, let&rsquo;s figure out where you actually are.
            </h2>

            <div
              className={`space-y-5 text-cream/70 font-sans text-base md:text-[17px] leading-relaxed ${anim(s1.isVisible, 200).className}`}
              style={anim(s1.isVisible, 200).style}
            >
              <p>Most coaches hand you a program and tell you to start Monday. That&rsquo;s not how I work.</p>
              <p>The Body Brief is a free, personalised snapshot of where you stand right now. You fill out a five minute form about your life, your goals, and what&rsquo;s been falling apart. I send you back a custom brief: what you&rsquo;re doing well, what&rsquo;s missing, what your actual needle movers are, and a starting point built around you.</p>
              <p>No commitment. No pitch. Just clarity.</p>
            </div>

            <div
              className={`pt-2 ${anim(s1.isVisible, 300).className}`}
              style={anim(s1.isVisible, 300).style}
            >
              <Link
                href="/body-brief"
                className="inline-block bg-sand text-midnight font-sans font-medium text-sm tracking-wide uppercase rounded-full px-10 py-4 hover:bg-bark hover:text-cream transition-colors duration-400"
              >
                Get Your Free Body Brief
              </Link>
              <p className="mt-4 text-cream/35 font-sans text-xs tracking-wide">
                Takes 5 minutes &middot; No commitment required
              </p>
            </div>
          </div>

          <div
            ref={s2.ref}
            className={`relative aspect-[3/4] rounded-sm overflow-hidden order-1 lg:order-2 ${anim(s2.isVisible, 150).className}`}
            style={anim(s2.isVisible, 150).style}
          >
            <Image
              src="/Madison-157.webp"
              alt="Madison Griffin"
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-midnight/30 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ================================================================== */
/*  7. OFFERS                                                          */
/* ================================================================== */
function OffersSection() {
  const heading = useInView()
  const cards = useInView(0.1)

  return (
    <section className="bg-cream py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div ref={heading.ref} className="text-center mb-16">
          <h2
            className={`font-serif text-3xl md:text-[2.75rem] text-midnight tracking-tight ${anim(heading.isVisible).className}`}
            style={anim(heading.isVisible).style}
          >
            Two ways to work together.
          </h2>
        </div>

        <div ref={cards.ref} className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <div
            className={`rounded-sm border border-charcoal/10 bg-white p-10 md:p-12 space-y-5 ${anim(cards.isVisible, 0).className}`}
            style={anim(cards.isVisible, 0).style}
          >
            <h3 className="font-serif text-2xl md:text-3xl text-midnight">Body Reclaimed</h3>
            <p className="text-charcoal/70 font-sans text-base md:text-[17px] leading-relaxed">
              For the woman who&rsquo;s ready to stop winging it and finally have a real system that&rsquo;s built around her life, not someone else&rsquo;s template.
            </p>
            <Link
              href="/body-reclaimed"
              className="inline-block text-bark font-sans font-medium text-sm tracking-wide underline underline-offset-4 hover:text-bark/70 transition-colors duration-300"
            >
              Learn more about Body Reclaimed &rarr;
            </Link>
          </div>

          <div
            className={`rounded-sm border border-charcoal/10 bg-midnight p-10 md:p-12 space-y-5 ${anim(cards.isVisible, 150).className}`}
            style={anim(cards.isVisible, 150).style}
          >
            <h3 className="font-serif text-2xl md:text-3xl text-cream">Body Unmuted: 1:1 Coaching</h3>
            <p className="text-cream/70 font-sans text-base md:text-[17px] leading-relaxed">
              For the woman who&rsquo;s ready to stop wondering what she&rsquo;d look like if she actually went all in&hellip; and just go all in. Full transformation, full support, zero settling.
            </p>
            <Link
              href="/work-with-me"
              className="inline-block text-sand font-sans font-medium text-sm tracking-wide underline underline-offset-4 hover:text-sand/70 transition-colors duration-300"
            >
              Explore 1:1 Coaching &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ================================================================== */
/*  8. SOCIAL PROOF                                                    */
/* ================================================================== */
const testimonials = [
  {
    quote:
      'Working with Madison has genuinely changed my life. Over the last year I’ve lost 20 pounds, built real strength, and found a confidence I didn’t know I was missing. She doesn’t just give you workouts. She helped me completely overhaul my nutrition and actually understand what my body needs. I feel better at 36 than I did at 26. I didn’t think that was possible.',
    name: 'Liz',
  },
  {
    quote:
      'I was traveling through seven countries in three months, losing muscle, losing confidence, and it was starting to affect my business and my speaking events. Madison reminded me I could still enjoy life, still travel, and still feel strong, confident, and sexy while actually being in a routine. She helped me move past so many mindset blocks around consistency. Now I eat high protein foods I actually love and do personalised workouts that work. I feel in such amazing shape, and it’s had a huge ripple effect on everything. If you’re even thinking about it, take the dive. She’ll not only change your body. She’ll change your life.',
    name: 'Ashleigh',
  },
  {
    quote:
      'Madison was the first person who ever got me genuinely excited about fitness. She explains nutrition in a way that actually makes sense and feels doable in real life. She’s a trainer who’s also a foodie, so she won’t just tell you to diet. She understands that we’re human, and especially as women, we’re not operating at 100% all the time. Instead of the all-or-nothing cycle, she helps you stay consistent and keep moving forward. I’ve tried getting into the gym so many times and always fell off because I didn’t know what I was doing. Madison gave me the foundation I was missing. I finally understand what I’m supposed to be doing and what a good workout should actually FEEL like, not just look like. I honestly can’t recommend her enough.',
    name: 'Sierra',
  },
]

function SocialProofSection() {
  const heading = useInView()
  const cards = useInView(0.1)

  return (
    <section className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/Madison-281.webp"
          alt="Madison walking on beach, arm raised in freedom"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-midnight/65 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        <div ref={heading.ref} className="text-center mb-16">
          <p
            className={`text-sand text-[11px] font-sans font-medium tracking-[0.25em] uppercase mb-5 ${anim(heading.isVisible).className}`}
            style={anim(heading.isVisible).style}
          >
            Client Stories
          </p>
          <h2
            className={`font-serif text-3xl md:text-[2.75rem] text-cream tracking-tight ${anim(heading.isVisible, 100).className}`}
            style={anim(heading.isVisible, 100).style}
          >
            Real women. Real results.
          </h2>
        </div>

        <div ref={cards.ref} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`rounded-sm bg-cream/10 backdrop-blur-md border border-cream/15 p-8 md:p-10 ${anim(cards.isVisible, i * 150).className}`}
              style={anim(cards.isVisible, i * 150).style}
            >
              <span className="block font-serif text-5xl text-sand/40 leading-none mb-4">&ldquo;</span>
              <p className="text-cream/90 font-sans text-[15px] leading-relaxed mb-8">{t.quote}</p>
              <p className="text-cream font-sans font-medium text-sm">&mdash;{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ================================================================== */
/*  9. FINAL CTA                                                       */
/* ================================================================== */
function FinalCTASection() {
  const s = useInView()
  const madison = useInView()

  return (
    <>
      <section className="relative py-32 md:py-44 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/Madison-114.webp"
            alt="Madison with arm raised triumphantly on hillside"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-midnight/60 via-midnight/50 to-midnight/75" />
        </div>

        <div ref={s.ref} className="relative z-10 mx-auto max-w-3xl px-6 text-center">
          <h2
            className={`font-serif text-3xl md:text-5xl lg:text-[3.25rem] text-cream leading-[1.12] tracking-tight text-balance ${anim(s.isVisible).className}`}
            style={anim(s.isVisible).style}
          >
            Not sure where to start?
          </h2>

          <p
            className={`mt-7 text-cream/70 font-sans text-base md:text-lg leading-relaxed max-w-2xl mx-auto ${anim(s.isVisible, 120).className}`}
            style={anim(s.isVisible, 120).style}
          >
            Start with the Body Brief. It&rsquo;s free, it takes five minutes, and it gives you a clearer picture of where you are and what it will actually take to get where you want to go. No pressure, no pitch. Just the truth about your starting point.
          </p>

          <div
            className={`mt-10 ${anim(s.isVisible, 300).className}`}
            style={anim(s.isVisible, 300).style}
          >
            <Link
              href="/body-brief"
              className="inline-block bg-sand text-midnight font-sans font-medium text-sm tracking-wide uppercase rounded-full px-12 py-5 hover:bg-bark hover:text-cream transition-colors duration-400 shadow-[0_4px_24px_rgba(212,165,116,0.3)]"
            >
              Get Your Free Body Brief
            </Link>
          </div>

          <p
            className={`mt-8 text-cream/35 font-sans text-xs tracking-wide ${anim(s.isVisible, 400).className}`}
            style={anim(s.isVisible, 400).style}
          >
            No commitment required.
          </p>
        </div>
      </section>

      <section className="bg-cream py-20 md:py-24">
        <div ref={madison.ref} className="mx-auto max-w-2xl px-6 text-center">
          <p
            className={`text-charcoal/80 font-sans text-base md:text-[17px] leading-relaxed mb-6 ${anim(madison.isVisible).className}`}
            style={anim(madison.isVisible).style}
          >
            Hi, I&rsquo;m Madison. I help women build bodies that hold up to their real lives, not an idealised version of them.
          </p>
          <Link
            href="/about"
            className={`inline-block text-bark font-sans font-medium text-sm tracking-wide underline underline-offset-4 hover:text-bark/70 transition-colors duration-300 ${anim(madison.isVisible, 100).className}`}
            style={anim(madison.isVisible, 100).style}
          >
            Learn more about me &rarr;
          </Link>
        </div>
      </section>
    </>
  )
}

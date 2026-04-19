'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
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
      visible
        ? 'opacity-100 translate-y-0'
        : 'opacity-0 translate-y-8'
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
      <ReframeSection />
      <MethodSection />
      <ImageDivider />
      <ResultsSection />
      <DifferentiatorSection />
      <SocialProofSection />
      <FAQSection />
      <BodyBriefSection />
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
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/Madison-29.webp"
          alt="Madison Griffin on mountain trail in athletic wear"
          fill
          priority
          className="object-cover object-[center_20%]"
          sizes="100vw"
        />
        {/* Dark gradient overlay — bottom-heavy */}
        {/* Gradient: heavier on left for text readability, lighter on right to show Madison */}
        <div className="absolute inset-0 bg-gradient-to-b from-midnight/40 via-midnight/45 to-midnight/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-midnight/50 via-midnight/20 to-transparent" />
      </div>

      {/* Content — left-aligned so Madison is visible on right */}
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
            You&rsquo;ve built a full life. Work, travel, plans, people. It all
            moves. And you don&rsquo;t want to give that up just to feel better
            in your body.
          </p>

          <div
            className={`mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-5 transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] delay-500 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <Link
              href="/body-brief"
              className="inline-block bg-sand text-midnight font-sans font-medium text-sm tracking-wide uppercase rounded-full px-10 py-4 hover:bg-bark hover:text-cream transition-colors duration-400"
            >
              Get Your Free Body Brief
            </Link>
            <Link
              href="/apply"
              className="text-cream/65 font-sans text-sm tracking-wide hover:text-cream/90 transition-colors duration-300 underline underline-offset-4 decoration-cream/30"
            >
              Or apply for 1:1 coaching →
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-opacity duration-1000 delay-[800ms] ${
          loaded ? 'opacity-60' : 'opacity-0'
        }`}
      >
        <span className="text-cream/50 text-[10px] tracking-[0.2em] uppercase font-sans">
          Scroll
        </span>
        <svg
          className="w-5 h-5 text-cream/50 animate-bounce"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
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
          {/* Text — 60 % */}
          <div ref={s1.ref} className="lg:col-span-3 space-y-7">
            <h2
              {...anim(s1.isVisible)}
              className={`font-serif text-3xl md:text-[2.75rem] leading-[1.15] text-midnight tracking-tight text-balance ${anim(s1.isVisible).className}`}
              style={anim(s1.isVisible).style}
            >
              Most fitness approaches quietly expect you to.
            </h2>

            <div
              {...anim(s1.isVisible, 120)}
              className={`space-y-5 text-charcoal/80 font-sans text-base md:text-[17px] leading-relaxed ${anim(s1.isVisible, 120).className}`}
              style={anim(s1.isVisible, 120).style}
            >
              <p>
                They work&hellip; if your routine is fixed. If your schedule is
                predictable. If your weeks all look the same.
              </p>
              <p>
                But yours don&rsquo;t.
              </p>
              <p>
                Some weeks you&rsquo;re in a rhythm &mdash; some weeks
                you&rsquo;re not. And that&rsquo;s normal.
              </p>
              <p>
                The problem is you&rsquo;ve been given two options: something
                that gets results, but doesn&rsquo;t fit your life &mdash; or
                something that fits your life, but doesn&rsquo;t change your
                body. So you end up stuck between the two.
              </p>
              <p>
                You don&rsquo;t need to choose.
              </p>
            </div>

            <blockquote
              {...anim(s1.isVisible, 240)}
              className={`border-l-2 border-sand pl-6 font-serif italic text-xl md:text-2xl text-midnight/80 leading-snug ${anim(s1.isVisible, 240).className}`}
              style={anim(s1.isVisible, 240).style}
            >
              &ldquo;The problem was never your discipline. It was a system
              designed for a life you don&rsquo;t actually live.&rdquo;
            </blockquote>
          </div>

          {/* Image — 40 % */}
          <div
            ref={s2.ref}
            {...anim(s2.isVisible, 200)}
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
/*  3. REFRAME                                                         */
/* ================================================================== */
function ReframeSection() {
  const s1 = useInView()
  const s2 = useInView()

  return (
    <section className="bg-midnight py-28 md:py-36 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Image */}
          <div
            ref={s1.ref}
            {...anim(s1.isVisible)}
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

          {/* Text */}
          <div ref={s2.ref} className="space-y-7">
            <h2
              {...anim(s2.isVisible)}
              className={`font-serif text-3xl md:text-[2.75rem] leading-[1.15] text-cream tracking-tight text-balance ${anim(s2.isVisible).className}`}
              style={anim(s2.isVisible).style}
            >
              Picture waking up and actually liking what you see.
            </h2>

            <div
              {...anim(s2.isVisible, 120)}
              className={`space-y-5 text-cream/70 font-sans text-base md:text-[17px] leading-relaxed ${anim(s2.isVisible, 120).className}`}
              style={anim(s2.isVisible, 120).style}
            >
              <p>
                You wake up, look in the mirror&hellip; and you&rsquo;re not
                immediately picking yourself apart. Your body looks tighter,
                leaner, more defined. Your arms look good in a tank top. Your
                waist feels smaller. Your clothes sit better.
              </p>
              <p>
                You put something on and think: <em>okay&hellip; I actually look
                pretty damn good.</em> Not sucking in. Not overthinking it. Not
                changing outfits three times. Just&hellip; comfortable in your
                body. Confident.
              </p>
              <p>
                You walk into a room and feel put together, attractive, like
                yourself again. Not because you&rsquo;re trying to hide
                anything &mdash; but because you&rsquo;re not thinking about it
                anymore.
              </p>
            </div>

            <div
              {...anim(s2.isVisible, 240)}
              className={`border-l-2 border-sand/60 pl-6 ${anim(s2.isVisible, 240).className}`}
              style={anim(s2.isVisible, 240).style}
            >
              <p className="font-serif italic text-xl md:text-2xl text-sand leading-snug">
                Without having to pull back on your life to do it. Because your
                life isn&rsquo;t the thing that needs to change. What you&rsquo;re
                doing is.
              </p>
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
      'Most women end up stuck doing one of two things: a \u201cperfect\u201d gym routine they can\u2019t keep up with, or workouts they can do anywhere that don\u2019t actually change their body.',
      'I don\u2019t do either.',
      'We use a more flexible approach where your training adapts to what you have, so when you\u2019ve got access to a full gym, we push for real physique change, and when you don\u2019t, we adjust without everything falling apart.',
      'That way you\u2019re not choosing between results or something you can stick to.',
    ],
  },
  {
    image: '/Madison-243.webp',
    alt: 'Madison eating from a bowl on the beach at sunset',
    label: 'Fuel',
    paragraphs: [
      'Most approaches just teach you how to eat less. Which works\u2026 until you actually want a life.',
      'I do the opposite.',
      'We focus on building a body that can eat more over time while still getting leaner and actually changing shape.',
      'So you can go out, order what you want, enjoy your food\u2026 and not have that low-key panic about what it\u2019s doing to your body. You know what you\u2019re doing, you know how to adjust, and nothing feels off track.',
    ],
  },
  {
    image: '/Madison-201.webp',
    alt: 'Madison close-up, eyes closed, peaceful in golden light',
    label: 'Mindset',
    paragraphs: [
      'The inner game that makes the outer results stick. We dismantle the all-or-nothing thinking, the guilt cycles, and the perfectionism that have kept you starting over.',
      'This is where lasting change actually lives. We will not only be working on strengthening your body but strengthening your mind.',
    ],
  },
]

function MethodSection() {
  const heading = useInView()
  const cards = useInView(0.1)

  return (
    <section className="bg-cream py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Heading */}
        <div ref={heading.ref} className="text-center max-w-3xl mx-auto mb-20">
          <p
            {...anim(heading.isVisible)}
            className={`text-sand text-[11px] font-sans font-medium tracking-[0.25em] uppercase mb-5 ${anim(heading.isVisible).className}`}
            style={anim(heading.isVisible).style}
          >
            The Method
          </p>
          <h2
            {...anim(heading.isVisible, 100)}
            className={`font-serif text-4xl md:text-5xl lg:text-[3.5rem] text-midnight tracking-tight ${anim(heading.isVisible, 100).className}`}
            style={anim(heading.isVisible, 100).style}
          >
            Introducing: Body Unmuted
          </h2>
          <p
            {...anim(heading.isVisible, 200)}
            className={`mt-6 text-charcoal/70 font-sans text-base md:text-lg leading-relaxed max-w-2xl mx-auto ${anim(heading.isVisible, 200).className}`}
            style={anim(heading.isVisible, 200).style}
          >
            A three-pillar coaching method built for women whose lives are too
            full for cookie-cutter fitness. Strength. Fuel. Mindset. Woven
            together so your results compound &mdash; not collapse.
          </p>
        </div>

        {/* Pillar cards */}
        <div
          ref={cards.ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10"
        >
          {pillars.map((pillar, i) => (
            <div
              key={pillar.label}
              {...anim(cards.isVisible, i * 150)}
              className={`group rounded-sm border border-charcoal/8 bg-white shadow-[0_2px_20px_rgba(0,0,0,0.04)] overflow-hidden hover:shadow-[0_8px_40px_rgba(0,0,0,0.08)] transition-shadow duration-500 ${anim(cards.isVisible, i * 150).className}`}
              style={anim(cards.isVisible, i * 150).style}
            >
              {/* Image */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={pillar.image}
                  alt={pillar.alt}
                  fill
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              {/* Text */}
              <div className="p-7 md:p-8">
                <p className="text-sand text-[11px] font-sans font-semibold tracking-[0.2em] uppercase mb-3">
                  {pillar.label}
                </p>
                <div className="space-y-3">
                  {pillar.paragraphs.map((para, i) => (
                    <p key={i} className="text-charcoal/75 font-sans text-[15px] leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

/* ================================================================== */
/*  5. FULL-WIDTH IMAGE DIVIDER                                        */
/* ================================================================== */
function ImageDivider() {
  const s = useInView(0.1)

  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Parallax-style bg (uses fixed attachment on desktop) */}
      <div className="absolute inset-0">
        <Image
          src="/Madison-170.webp"
          alt="Dramatic sunset silhouette of Madison on mountain"
          fill
          className="object-cover md:object-[center_30%]"
          sizes="100vw"
          style={{
            /* CSS backgroundAttachment: fixed doesn't work with next/image fill,
               so we simulate depth with a subtle scale */
          }}
        />
        <div className="absolute inset-0 bg-midnight/50" />
      </div>

      <div ref={s.ref} className="relative z-10 px-6 text-center max-w-3xl mx-auto">
        <p
          {...anim(s.isVisible)}
          className={`font-serif italic text-2xl md:text-4xl lg:text-[2.75rem] text-cream leading-snug tracking-tight ${anim(s.isVisible).className}`}
          style={anim(s.isVisible).style}
        >
          &ldquo;The goal was never to force your life around your fitness. It
          was to finally feel at home in the body you&rsquo;re building your
          life in.&rdquo;
        </p>
      </div>
    </section>
  )
}

/* ================================================================== */
/*  6. RESULTS                                                         */
/* ================================================================== */
const resultsList = [
  'A strong, lean physique that doesn\u2019t require perfection to maintain',
  'The confidence to walk into any room and feel like yourself',
  'Energy that actually matches the life you\u2019re living',
  'Freedom from food guilt, binge-restrict cycles, and all-or-nothing thinking',
  'A workout routine that travels with you and adapts to real life',
  'The ability to eat out, enjoy vacations, and still hit your goals',
  'A body that performs for the life you\u2019ve built \u2014 not one that holds you back from it',
]

function ResultsSection() {
  const s1 = useInView()
  const s2 = useInView()

  return (
    <section className="bg-cream py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Image */}
          <div
            ref={s1.ref}
            {...anim(s1.isVisible)}
            className={`relative aspect-[4/5] rounded-sm overflow-hidden ${anim(s1.isVisible).className}`}
            style={anim(s1.isVisible).style}
          >
            <Image
              src="/Madison-83.webp"
              alt="Madison laughing and running with mountain behind her"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Text */}
          <div ref={s2.ref} className="space-y-8">
            <h2
              {...anim(s2.isVisible)}
              className={`font-serif text-3xl md:text-[2.75rem] leading-[1.15] text-midnight tracking-tight ${anim(s2.isVisible).className}`}
              style={anim(s2.isVisible).style}
            >
              What You Actually Want
            </h2>

            <p
              {...anim(s2.isVisible, 100)}
              className={`text-charcoal/70 font-sans text-base md:text-[17px] leading-relaxed ${anim(s2.isVisible, 100).className}`}
              style={anim(s2.isVisible, 100).style}
            >
              Forget the six-week challenge results that vanish by week eight.
              Here&rsquo;s what life looks like when your fitness actually works
              for you:
            </p>

            <ul className="space-y-4">
              {resultsList.map((item, i) => (
                <li
                  key={i}
                  {...anim(s2.isVisible, 150 + i * 80)}
                  className={`flex items-start gap-4 ${anim(s2.isVisible, 150 + i * 80).className}`}
                  style={anim(s2.isVisible, 150 + i * 80).style}
                >
                  <span className="mt-1.5 block h-2 w-2 rounded-full bg-sand flex-shrink-0" />
                  <span className="text-charcoal/80 font-sans text-[15px] md:text-base leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ================================================================== */
/*  7. DIFFERENTIATOR                                                  */
/* ================================================================== */
const differentiators = [
  {
    icon: (
      <svg className="w-7 h-7 text-sand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    title: 'Built for Real Life',
    description:
      'Every program is designed around your schedule, your travel, and your actual life \u2014 not an idealized version of it. Missed a workout? We adapt. Changed time zones? We adjust. No guilt, no starting over.',
  },
  {
    icon: (
      <svg className="w-7 h-7 text-sand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.047 8.287 8.287 0 009 9.601a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.468 5.99 5.99 0 00-1.925 3.547 5.975 5.975 0 01-2.133-1.001A3.75 3.75 0 0012 18z" />
      </svg>
    ),
    title: 'Science-Backed, Human-Led',
    description:
      'Evidence-based strength and nutrition principles delivered with the nuance that only 1:1 coaching provides. No templates. No bots. A real coach who knows your name, your history, and your goals.',
  },
  {
    icon: (
      <svg className="w-7 h-7 text-sand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    title: 'Results That Compound',
    description:
      'Most programs peak at week six and crash by week ten. Body Unmuted builds momentum that compounds. Six months in, you\u2019re not maintaining \u2014 you\u2019re still growing. A year in, you\u2019re unrecognizable.',
  },
]

function DifferentiatorSection() {
  const heading = useInView()
  const items = useInView(0.1)

  return (
    <section className="bg-white py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        {/* Heading */}
        <div ref={heading.ref} className="text-center mb-20">
          <p
            {...anim(heading.isVisible)}
            className={`text-sand text-[11px] font-sans font-medium tracking-[0.25em] uppercase mb-5 ${anim(heading.isVisible).className}`}
            style={anim(heading.isVisible).style}
          >
            Why It Works
          </p>
          <h2
            {...anim(heading.isVisible, 100)}
            className={`font-serif text-3xl md:text-[2.75rem] text-midnight tracking-tight ${anim(heading.isVisible, 100).className}`}
            style={anim(heading.isVisible, 100).style}
          >
            This is where everything changes.
          </h2>
        </div>

        {/* Feature items */}
        <div
          ref={items.ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16"
        >
          {differentiators.map((d, i) => (
            <div
              key={d.title}
              {...anim(items.isVisible, i * 150)}
              className={`text-center ${anim(items.isVisible, i * 150).className}`}
              style={anim(items.isVisible, i * 150).style}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-sand/10 mb-6">
                {d.icon}
              </div>
              <h3 className="font-serif text-xl md:text-2xl text-midnight mb-4">
                {d.title}
              </h3>
              <p className="text-charcoal/70 font-sans text-[15px] leading-relaxed">
                {d.description}
              </p>
            </div>
          ))}
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
      'I traveled to three countries in two months and didn\u2019t miss a beat. For the first time, my fitness actually came with me instead of waiting at home.',
    name: 'Sarah K.',
    detail: 'Entrepreneur & World Traveler',
  },
  {
    quote:
      'I used to lose all my progress every time work got intense. Now I\u2019m stronger than I was in my twenties \u2014 and I didn\u2019t have to sacrifice my career to get here.',
    name: 'Jessica M.',
    detail: 'VP of Marketing',
  },
  {
    quote:
      'Madison didn\u2019t just change my body. She changed the way I think about myself. I stopped fighting food and started fueling a life I\u2019m genuinely proud of.',
    name: 'Lauren T.',
    detail: 'Creative Director',
  },
]

function SocialProofSection() {
  const heading = useInView()
  const cards = useInView(0.1)

  return (
    <section className="relative py-28 md:py-36 overflow-hidden">
      {/* Background image */}
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
        {/* Heading */}
        <div ref={heading.ref} className="text-center mb-16">
          <p
            {...anim(heading.isVisible)}
            className={`text-sand text-[11px] font-sans font-medium tracking-[0.25em] uppercase mb-5 ${anim(heading.isVisible).className}`}
            style={anim(heading.isVisible).style}
          >
            Client Stories
          </p>
          <h2
            {...anim(heading.isVisible, 100)}
            className={`font-serif text-3xl md:text-[2.75rem] text-cream tracking-tight ${anim(heading.isVisible, 100).className}`}
            style={anim(heading.isVisible, 100).style}
          >
            Women like you are building bodies that last.
          </h2>
        </div>

        {/* Testimonial cards */}
        <div
          ref={cards.ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              {...anim(cards.isVisible, i * 150)}
              className={`rounded-sm bg-cream/10 backdrop-blur-md border border-cream/15 p-8 md:p-10 ${anim(cards.isVisible, i * 150).className}`}
              style={anim(cards.isVisible, i * 150).style}
            >
              {/* Quote marks */}
              <span className="block font-serif text-5xl text-sand/40 leading-none mb-4">
                &ldquo;
              </span>
              <p className="text-cream/90 font-sans text-[15px] leading-relaxed mb-8">
                {t.quote}
              </p>
              <div>
                <p className="text-cream font-sans font-medium text-sm">
                  {t.name}
                </p>
                <p className="text-cream/50 font-sans text-xs tracking-wide mt-0.5">
                  {t.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ================================================================== */
/*  FAQ                                                                 */
/* ================================================================== */
const faqs = [
  {
    q: 'Who is this coaching for?',
    a: 'This is for women who live full, busy lives — women who travel, build businesses, and want a body that keeps up. If you\'re tired of starting over every time your routine gets disrupted, this is for you.',
  },
  {
    q: 'I travel a lot — will this still work for me?',
    a: 'Absolutely. The Body Unmuted method is specifically designed to adapt to your lifestyle. Your training and nutrition plans flex with your schedule, whether you\'re at home, in a hotel gym, or on the go.',
  },
  {
    q: 'How is this different from other coaching programs?',
    a: 'Most programs give you a rigid plan that only works in perfect conditions. Body Unmuted builds a system that holds — even when life is messy. We focus on strength, fueling your body properly, and breaking the all-or-nothing patterns that keep most women stuck.',
  },
  {
    q: 'What does the coaching actually include?',
    a: 'You\'ll receive a personalized strength training program, nutrition guidance without restriction, ongoing coaching and support, and systems that adapt as your life changes. Everything is tailored to you.',
  },
  {
    q: 'How long is the coaching commitment?',
    a: 'I recommend a minimum of 3–6 months to see lasting results. This isn\'t a quick fix — it\'s a sustainable shift in how you train, eat, and think about your body.',
  },
  {
    q: 'Do I need gym experience?',
    a: 'No. Whether you\'re brand new to strength training or have years of experience, your program is built for where you are right now. I meet you exactly where you\'re at.',
  },
]

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false)
  const s = useInView(0.1)

  return (
    <div
      ref={s.ref}
      {...anim(s.isVisible, index * 80)}
      className={`border-b border-bark/15 ${anim(s.isVisible, index * 80).className}`}
      style={anim(s.isVisible, index * 80).style}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-6 text-left group"
      >
        <span className="font-serif text-lg md:text-xl text-midnight pr-8">{q}</span>
        <span
          className={`flex-shrink-0 w-8 h-8 rounded-full border border-bark/30 flex items-center justify-center transition-transform duration-300 ${
            open ? 'rotate-45 bg-bark border-bark' : 'group-hover:border-bark'
          }`}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            className={open ? 'text-cream' : 'text-bark'}
          >
            <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          open ? 'max-h-60 opacity-100 pb-6' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-midnight/70 font-sans leading-relaxed pr-12">{a}</p>
      </div>
    </div>
  )
}

function FAQSection() {
  const s = useInView()

  return (
    <section className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <div ref={s.ref} className="text-center mb-16">
          <p
            {...anim(s.isVisible)}
            className={`text-bark text-[11px] font-medium tracking-[0.25em] uppercase mb-4 ${anim(s.isVisible).className}`}
            style={anim(s.isVisible).style}
          >
            Common Questions
          </p>
          <h2
            {...anim(s.isVisible, 100)}
            className={`font-serif text-3xl md:text-5xl text-midnight ${anim(s.isVisible, 100).className}`}
            style={anim(s.isVisible, 100).style}
          >
            Everything you need to know
          </h2>
        </div>

        <div>
          {faqs.map((faq, i) => (
            <FAQItem key={i} q={faq.q} a={faq.a} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ================================================================== */
/*  9. BODY BRIEF CTA                                                  */
/* ================================================================== */
function BodyBriefSection() {
  const s1 = useInView()
  const s2 = useInView()

  return (
    <section className="bg-midnight py-28 md:py-36 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Text */}
          <div ref={s1.ref} className="space-y-7 order-2 lg:order-1">
            <p
              {...anim(s1.isVisible)}
              className={`text-sand text-[11px] font-sans font-medium tracking-[0.25em] uppercase ${anim(s1.isVisible).className}`}
              style={anim(s1.isVisible).style}
            >
              Your First Step
            </p>

            <h2
              {...anim(s1.isVisible, 100)}
              className={`font-serif text-3xl md:text-[2.75rem] leading-[1.15] text-cream tracking-tight text-balance ${anim(s1.isVisible, 100).className}`}
              style={anim(s1.isVisible, 100).style}
            >
              Before we build anything &mdash; let&rsquo;s find out where you
              actually are.
            </h2>

            <div
              {...anim(s1.isVisible, 200)}
              className={`space-y-5 text-cream/70 font-sans text-base md:text-[17px] leading-relaxed ${anim(s1.isVisible, 200).className}`}
              style={anim(s1.isVisible, 200).style}
            >
              <p>
                Most coaches hand you a program and tell you to start on Monday.
                That&rsquo;s not how I work.
              </p>
              <p>
                Before we do anything, I want to understand you &mdash; your
                schedule, your history, what&rsquo;s worked, what&rsquo;s
                fallen apart, and what you&rsquo;re actually working toward.
                That&rsquo;s what the Body Brief is for.
              </p>
              <p>
                Fill out a five-minute intake form and within 24&ndash;48 hours
                I&rsquo;ll send you a personalized Body Brief: a clear picture
                of where you stand and exactly what it will take to get where
                you want to go.
              </p>
            </div>

            <div
              {...anim(s1.isVisible, 300)}
              className={`pt-2 ${anim(s1.isVisible, 300).className}`}
              style={anim(s1.isVisible, 300).style}
            >
              <Link
                href="/body-brief"
                className="inline-block bg-sand text-midnight font-sans font-medium text-sm tracking-wide uppercase rounded-full px-10 py-4 hover:bg-bark hover:text-cream transition-colors duration-400"
              >
                Fill Out Your Body Brief
              </Link>
              <p className="mt-4 text-cream/35 font-sans text-xs tracking-wide">
                Free &middot; Takes 5 minutes &middot; No commitment required
              </p>
            </div>
          </div>

          {/* Image */}
          <div
            ref={s2.ref}
            {...anim(s2.isVisible, 150)}
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
/*  10. FINAL CTA                                                      */
/* ================================================================== */
function FinalCTASection() {
  const s = useInView()

  return (
    <section className="relative py-32 md:py-44 overflow-hidden">
      {/* Background image */}
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

      <div
        ref={s.ref}
        className="relative z-10 mx-auto max-w-3xl px-6 text-center"
      >
        <h2
          {...anim(s.isVisible)}
          className={`font-serif text-3xl md:text-5xl lg:text-[3.25rem] text-cream leading-[1.12] tracking-tight text-balance ${anim(s.isVisible).className}`}
          style={anim(s.isVisible).style}
        >
          Not sure where to start? Let&rsquo;s figure it out together.
        </h2>

        <p
          {...anim(s.isVisible, 120)}
          className={`mt-7 text-cream/70 font-sans text-base md:text-lg leading-relaxed max-w-2xl mx-auto ${anim(s.isVisible, 120).className}`}
          style={anim(s.isVisible, 120).style}
        >
          Fill out the Body Brief form and I&rsquo;ll send you a personalised
          snapshot of where you stand &mdash; your training, your nutrition, and
          exactly what it will take to get the results you&rsquo;re after.
        </p>

        <p
          {...anim(s.isVisible, 200)}
          className={`mt-5 text-cream/50 font-sans text-sm leading-relaxed max-w-xl mx-auto ${anim(s.isVisible, 200).className}`}
          style={anim(s.isVisible, 200).style}
        >
          Takes 5 minutes. You&rsquo;ll hear back within 24&ndash;48 hours.
        </p>

        <div
          {...anim(s.isVisible, 300)}
          className={`mt-10 ${anim(s.isVisible, 300).className}`}
          style={anim(s.isVisible, 300).style}
        >
          <Link
            href="/body-brief"
            className="inline-block bg-sand text-midnight font-sans font-medium text-sm tracking-wide uppercase rounded-full px-12 py-5 hover:bg-bark hover:text-cream transition-colors duration-400 shadow-[0_4px_24px_rgba(212,165,116,0.3)]"
          >
            Fill Out Your Body Brief
          </Link>
        </div>

        <p
          {...anim(s.isVisible, 400)}
          className={`mt-8 text-cream/35 font-sans text-xs tracking-wide ${anim(s.isVisible, 400).className}`}
          style={anim(s.isVisible, 400).style}
        >
          Free &middot; No commitment required
        </p>
      </div>
    </section>
  )
}

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
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Dark gradient overlay — bottom-heavy */}
        <div className="absolute inset-0 bg-gradient-to-b from-midnight/30 via-midnight/20 to-midnight/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center pt-20">
        <h1
          className={`font-serif text-5xl md:text-7xl lg:text-[5.25rem] leading-[1.08] text-cream tracking-tight text-balance transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Build a Strong, Lean Body That Actually Lasts
        </h1>

        <p
          className={`mt-7 text-lg md:text-xl text-cream/85 font-sans font-light leading-relaxed max-w-2xl mx-auto transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] delay-200 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Stop starting over every time life gets chaotic. Get strong, lean, and
          confident without putting your life on pause.
        </p>

        <p
          className={`mt-5 text-base md:text-lg text-cream/65 font-serif italic leading-relaxed max-w-xl mx-auto transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] delay-400 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          You&rsquo;ve built a life you love. Your body should feel like it
          belongs in it.
        </p>

        <div
          className={`mt-10 transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] delay-500 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <Link
            href="/apply"
            className="inline-block bg-sand text-midnight font-sans font-medium text-sm tracking-wide uppercase rounded-full px-10 py-4 hover:bg-bark hover:text-cream transition-colors duration-400"
          >
            Apply for 1:1 Coaching
          </Link>
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
              You&rsquo;re not inconsistent. You&rsquo;ve just never been
              taught how to build a body that holds.
            </h2>

            <div
              {...anim(s1.isVisible, 120)}
              className={`space-y-5 text-charcoal/80 font-sans text-base md:text-[17px] leading-relaxed ${anim(s1.isVisible, 120).className}`}
              style={anim(s1.isVisible, 120).style}
            >
              <p>
                You start a new routine. You meal prep. You get consistent for a
                few weeks. Then a work trip happens, or your schedule shifts, or
                life just... life&rsquo;s. And everything unravels. Again.
              </p>
              <p>
                You tell yourself you need more discipline. More willpower. A
                stricter plan. But deep down, you know that&rsquo;s not it. You
                have the drive &mdash; you&rsquo;ve built a career, a life, and
                a reputation on it.
              </p>
              <p>
                The real problem? Everything you&rsquo;ve been taught about
                fitness was designed for people whose lives never change. Rigid
                plans. All-or-nothing rules. Strategies that collapse the moment
                life stops being perfectly controlled.
              </p>
            </div>

            <blockquote
              {...anim(s1.isVisible, 240)}
              className={`border-l-2 border-sand pl-6 font-serif italic text-xl md:text-2xl text-midnight/80 leading-snug ${anim(s1.isVisible, 240).className}`}
              style={anim(s1.isVisible, 240).style}
            >
              &ldquo;The problem isn&rsquo;t your discipline. It&rsquo;s that
              everything you&rsquo;ve been taught only works when life is
              perfectly controlled.&rdquo;
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
              Your fitness routine should work on your messiest weeks.
            </h2>

            <div
              {...anim(s2.isVisible, 120)}
              className={`space-y-5 text-cream/70 font-sans text-base md:text-[17px] leading-relaxed ${anim(s2.isVisible, 120).className}`}
              style={anim(s2.isVisible, 120).style}
            >
              <p>
                Most fitness advice sounds the same: eat less, move more, do
                more cardio, cut the carbs. It works &mdash; until it
                doesn&rsquo;t. Until you&rsquo;re traveling for two weeks, or
                running on four hours of sleep, or simply living the full,
                ambitious life you&rsquo;ve built.
              </p>
              <p>
                Those approaches create fragile results. They require perfect
                conditions. And when conditions change &mdash; which they always
                do &mdash; you&rsquo;re left starting from scratch.
              </p>
              <p>
                What if your body could get stronger, leaner, and more capable
                even when life is unpredictable? What if the way you trained and
                fueled actually adapted with you instead of breaking down?
              </p>
            </div>

            <div
              {...anim(s2.isVisible, 240)}
              className={`border-l-2 border-sand/60 pl-6 ${anim(s2.isVisible, 240).className}`}
              style={anim(s2.isVisible, 240).style}
            >
              <p className="font-serif italic text-xl md:text-2xl text-sand leading-snug">
                Inside Body Unmuted, we do the opposite. We build a body that
                becomes stronger, more capable, and more resilient over time.
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
    description:
      'Progressive, periodized strength training designed around your real life. Not cookie-cutter programs — intelligent programming that adapts whether you have a full gym or a hotel room. We build lean muscle, increase your metabolism, and create a body that performs.',
  },
  {
    image: '/Madison-243.webp',
    alt: 'Madison eating from a bowl on the beach at sunset',
    label: 'Fuel',
    description:
      'Nutrition that fuels performance and fat loss without restriction. No meal plans that fall apart on day four. Instead, a flexible framework that teaches you how to eat for your goals at home, at restaurants, while traveling, and everywhere in between.',
  },
  {
    image: '/Madison-201.webp',
    alt: 'Madison close-up, eyes closed, peaceful in golden light',
    label: 'Mindset',
    description:
      'The inner game that makes the outer results stick. We dismantle the all-or-nothing thinking, the guilt cycles, and the perfectionism that have kept you starting over. This is where lasting change actually lives.',
  },
]

function MethodSection() {
  const heading = useInView()
  const cards = useInView(0.1)
  const closing = useInView()

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
                <p className="text-charcoal/75 font-sans text-[15px] leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Closing line */}
        <div ref={closing.ref} className="mt-20 text-center">
          <p
            {...anim(closing.isVisible)}
            className={`font-serif italic text-xl md:text-2xl text-midnight/70 leading-snug max-w-3xl mx-auto ${anim(closing.isVisible).className}`}
            style={anim(closing.isVisible).style}
          >
            &ldquo;This isn&rsquo;t just a transformation. It&rsquo;s a body
            that holds its results &mdash; even as your life changes.&rdquo;
          </p>
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
          &ldquo;The goal was never to shrink yourself. It was to finally feel
          at home in the body you&rsquo;re building your life in.&rdquo;
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
/*  9. FINAL CTA                                                       */
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
          If you&rsquo;re done starting over &mdash; this is your next step.
        </h2>

        <p
          {...anim(s.isVisible, 120)}
          className={`mt-7 text-cream/70 font-sans text-base md:text-lg leading-relaxed max-w-2xl mx-auto ${anim(s.isVisible, 120).className}`}
          style={anim(s.isVisible, 120).style}
        >
          Body Unmuted is an application-only 1:1 coaching experience for women
          who are ready to build strength, confidence, and a body that keeps up
          with the life they&rsquo;ve built. If that sounds like you, I&rsquo;d
          love to hear from you.
        </p>

        <p
          {...anim(s.isVisible, 200)}
          className={`mt-5 text-cream/50 font-sans text-sm leading-relaxed max-w-xl mx-auto ${anim(s.isVisible, 200).className}`}
          style={anim(s.isVisible, 200).style}
        >
          Limited spots available. Applications are reviewed personally and
          responded to within 48 hours.
        </p>

        <div
          {...anim(s.isVisible, 300)}
          className={`mt-10 ${anim(s.isVisible, 300).className}`}
          style={anim(s.isVisible, 300).style}
        >
          <Link
            href="/apply"
            className="inline-block bg-sand text-midnight font-sans font-medium text-sm tracking-wide uppercase rounded-full px-12 py-5 hover:bg-bark hover:text-cream transition-colors duration-400 shadow-[0_4px_24px_rgba(212,165,116,0.3)]"
          >
            Apply for 1:1 Coaching
          </Link>
        </div>

        <p
          {...anim(s.isVisible, 400)}
          className={`mt-8 text-cream/35 font-sans text-xs tracking-wide ${anim(s.isVisible, 400).className}`}
          style={anim(s.isVisible, 400).style}
        >
          Free to apply &middot; No commitment required
        </p>
      </div>
    </section>
  )
}

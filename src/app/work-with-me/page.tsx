import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Body Unmuted 1:1 Coaching',
  description:
    'Full transformation coaching with daily support, total personalisation, and a coach who treats your goals like her own.',
  openGraph: {
    images: [{ url: '/Madison-157.webp', width: 1200, height: 630, alt: 'Body Unmuted 1:1 Coaching — Madison Griffin Fit' }],
  },
}

const included = [
  {
    num: '01',
    title: 'Fully custom training program',
    body: 'Progressive, periodised strength programming built around your goals and adapted to wherever you are in the world. Full gym, hotel gym, or anywhere in between — your program travels with you and keeps building.',
  },
  {
    num: '02',
    title: 'Custom nutrition framework',
    body: 'A flexible approach built around your metabolism, your goals, and how you actually eat. No rigid meal plans. No cutting out the things you love. A strategy that gets you results and lets you live your life.',
  },
  {
    num: '03',
    title: 'Daily messaging access',
    body: "Text or voice note me whenever you need. Questions, updates, hard days, big wins. I'm there. This is what makes everything move faster.",
  },
  {
    num: '04',
    title: 'One SOS call per month',
    body: 'For the moments when you just need to talk it through.',
  },
  {
    num: '05',
    title: 'Weekly check-ins and continuous adjustments',
    body: "Every week we check in on how you're feeling and how your body is responding. Your program adapts in real time — nothing is set and forget, everything keeps moving with you.",
  },
  {
    num: '06',
    title: 'Mindset work woven throughout',
    body: "We work on your body and the patterns that have been keeping you stuck — the all-or-nothing thinking, the perfectionism, the guilt cycles. This is the part most coaches skip. It's usually the part that changes everything.",
  },
]

const steps = [
  {
    num: '01',
    title: 'Apply',
    body: "Fill in a short application so I can understand your goals, your history, and what you're looking for. I read every single one personally.",
  },
  {
    num: '02',
    title: 'Discovery call',
    body: "If it feels like a fit, we jump on a call and chat about your goals, your life, what the coaching experience looks like, and whether we're right for each other. No pressure, just a real conversation.",
  },
  {
    num: '03',
    title: 'We build',
    body: "Once you're in, everything is built from scratch around you. We get started within a week.",
  },
]

export default function WorkWithMePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        <Image
          src="/Madison-157.webp"
          alt="Madison Griffin overlooking mountains and ocean"
          fill
          priority
          className="object-cover object-[center_35%]"
          sizes="100vw"
          quality={90}
        />
        <div className="absolute inset-0 bg-midnight/58" />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p className="text-sand text-[11px] font-sans font-medium tracking-[0.3em] uppercase mb-6">
            1:1 Coaching
          </p>
          <h1 className="font-serif text-cream text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-8 text-balance">
            For the woman who&rsquo;s ready to go all in on her body the way she goes all in on her life.
          </h1>
          <p className="text-cream/80 font-sans text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-12">
            Full transformation coaching with daily support, total personalisation, and a coach who treats your goals like her own.
          </p>
          <Link
            href="/apply"
            className="inline-flex items-center bg-sand text-midnight font-sans font-medium text-[11px] tracking-[0.18em] uppercase rounded-sm px-10 py-4 hover:bg-sand/90 transition-colors duration-300"
          >
            Apply for Coaching
          </Link>
        </div>
      </section>

      {/* ── Opening ── */}
      <section className="bg-midnight py-28 md:py-40">
        <div className="max-w-3xl mx-auto px-6 space-y-16">
          <p className="text-cream/75 font-sans text-[17px] leading-[1.85]">
            You&rsquo;re the woman who fully commits to everything she does. Your career. Your business. Your relationships. The life you&rsquo;re building.
          </p>

          <p className="font-serif text-cream text-4xl md:text-5xl lg:text-[3.5rem] leading-snug text-center py-2">
            And then there&rsquo;s your body.
          </p>

          <div className="space-y-7 text-cream/75 font-sans text-[17px] leading-[1.85]">
            <p>Not because you don&rsquo;t care. You care a lot. But nothing has ever quite clicked the way everything else has. You&rsquo;ve put in the effort. You&rsquo;ve seen some results. But you&rsquo;ve never fully cracked it. Never felt like your body truly matched the woman you are in every other area of your life.</p>
          </div>

          <p className="font-serif italic text-sand text-2xl md:text-3xl leading-snug text-center">
            That&rsquo;s exactly what Body Unmuted is built for.
          </p>
        </div>
      </section>

      {/* ── What It Is ── */}
      <section className="bg-cream py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-bark text-[11px] font-sans font-medium tracking-[0.3em] uppercase mb-6">
            The Coaching
          </p>
          <h2 className="font-serif text-midnight text-3xl md:text-4xl lg:text-5xl leading-[1.1] mb-10">
            This is the real thing.
          </h2>
          <div className="space-y-5 text-charcoal/80 font-sans text-[17px] leading-[1.85]">
            <p>Body Unmuted is the most personalised coaching experience I offer. Everything &mdash; your training, your nutrition, your mindset work &mdash; is built completely around you and adjusted in real time as your life changes.</p>
            <p>Because your life doesn&rsquo;t stay still. And your coaching shouldn&rsquo;t either.</p>
            <p>You have a coach who knows you, who&rsquo;s paying attention, and who&rsquo;s genuinely in your corner every single day. The kind of support that means nothing falls through the cracks, and you never start over.</p>
          </div>
        </div>
      </section>

      {/* ── What's Included ── */}
      <section className="bg-midnight py-24 md:py-36">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-cream/10 pb-10">
            <div>
              <p className="text-sand text-[11px] font-sans font-medium tracking-[0.3em] uppercase mb-4">
                What&rsquo;s Included
              </p>
              <h2 className="font-serif text-cream text-3xl md:text-4xl lg:text-5xl leading-[1.1]">
                Everything you need.
              </h2>
            </div>
            <p className="text-cream/40 font-sans text-[13px] leading-relaxed md:max-w-[260px]">
              Six elements, all working together — one complete system built around you.
            </p>
          </div>

          {included.map((item) => (
            <div
              key={item.num}
              className="grid grid-cols-1 md:grid-cols-[56px_1fr_2fr] gap-3 md:gap-14 py-10 border-b border-cream/10 last:border-b-0"
            >
              <span className="text-sand text-[10px] font-sans font-medium tracking-[0.25em] uppercase md:pt-1.5">
                {item.num}
              </span>
              <h3 className="font-serif text-cream text-xl md:text-[1.35rem] leading-snug">{item.title}</h3>
              <p className="text-cream/58 font-sans text-[15px] leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Testimonial ── */}
      <section className="bg-cream py-24 md:py-36">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <span className="font-serif text-bark/12 text-[9rem] md:text-[11rem] leading-none block -mb-6 select-none" aria-hidden="true">
            &ldquo;
          </span>
          <blockquote className="font-serif text-midnight text-xl md:text-2xl lg:text-[1.6rem] leading-[1.6] italic mb-10">
            Madison reminded me I could still enjoy life, still travel, and still feel strong, confident, and sexy while actually being in a routine. She helped me move past so many mindset blocks around consistency. It&rsquo;s had a huge ripple effect on everything.
          </blockquote>
          <p className="text-bark text-[11px] font-sans font-medium tracking-[0.3em] uppercase">— Ashleigh</p>
          <p className="text-charcoal/35 font-sans text-[12px] tracking-wide mt-2">Body Unmuted Client</p>
        </div>
      </section>

      {/* ── Investment ── */}
      <section className="bg-midnight py-24 md:py-36">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-sand text-[11px] font-sans font-medium tracking-[0.3em] uppercase mb-6">
            The Investment
          </p>
          <h2 className="font-serif text-cream text-3xl md:text-4xl lg:text-5xl leading-[1.1] mb-14">
            Your body. Unmuted.
          </h2>

          <div className="flex items-center justify-center gap-6 md:gap-16 mb-14 pb-14 border-b border-cream/10">
            <div className="text-center">
              <p className="font-serif text-cream text-5xl md:text-6xl lg:text-7xl leading-none">6</p>
              <p className="text-sand text-[10px] font-sans font-medium tracking-[0.25em] uppercase mt-3">Month Minimum</p>
            </div>
            <div className="w-px h-12 md:h-16 bg-cream/10" />
            <div className="text-center">
              <p className="font-serif text-cream text-5xl md:text-6xl lg:text-7xl leading-none">7</p>
              <p className="text-sand text-[10px] font-sans font-medium tracking-[0.25em] uppercase mt-3">Days a Week</p>
            </div>
            <div className="w-px h-12 md:h-16 bg-cream/10" />
            <div className="text-center">
              <p className="font-serif text-cream text-5xl md:text-6xl lg:text-7xl leading-none">1</p>
              <p className="text-sand text-[10px] font-sans font-medium tracking-[0.25em] uppercase mt-3">Dedicated Coach</p>
            </div>
          </div>

          <div className="space-y-5 text-cream/70 font-sans text-[17px] leading-[1.85] text-left max-w-2xl mx-auto mb-14">
            <p>Body Unmuted is a minimum 6 month commitment. Real transformation takes time and I want to make sure you&rsquo;re getting everything you need to see it through.</p>
            <p>Pricing isn&rsquo;t listed here, intentionally. Every woman I work with is different and I want to make sure we&rsquo;re genuinely the right fit before we talk numbers. If you&rsquo;re accepted, we&rsquo;ll go through everything on a call together.</p>
          </div>

          <Link
            href="/apply"
            className="inline-flex items-center bg-sand text-midnight font-sans font-medium text-[11px] tracking-[0.18em] uppercase rounded-sm px-10 py-4 hover:bg-sand/90 transition-colors duration-300"
          >
            Apply for Coaching
          </Link>
        </div>
      </section>

      {/* ── Who This Is For ── */}
      <section className="bg-cream py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
              <Image
                src="/Madison-114.webp"
                alt="Madison with arm raised toward the sky, confident and expansive"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <p className="text-bark text-[11px] font-sans font-medium tracking-[0.3em] uppercase mb-6">
                Who This Is For
              </p>
              <h2 className="font-serif text-midnight text-3xl md:text-4xl lg:text-5xl leading-[1.1] mb-10">
                This is for you if&hellip;
              </h2>
              <div className="space-y-5 text-charcoal/75 font-sans text-[17px] leading-[1.85]">
                <p>You&rsquo;re done with almost. You want your body to feel as good as everything else in your life feels: strong, confident, like it actually belongs to you. You&rsquo;re ready to fully invest in yourself and you want to work with someone who will take that as seriously as you do.</p>
                <p>You travel. You have a full, demanding life. You&rsquo;ve tried things before. And you&rsquo;re ready to do it properly this time.</p>
              </div>
              <div className="mt-10">
                <Link
                  href="/apply"
                  className="inline-flex items-center bg-bark text-cream font-sans font-medium text-[11px] tracking-[0.18em] uppercase rounded-sm px-8 py-3.5 hover:bg-bark/90 transition-colors duration-300"
                >
                  Apply for Coaching
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="bg-midnight py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-sand text-[11px] font-sans font-medium tracking-[0.3em] uppercase mb-6">
            The Process
          </p>
          <h2 className="font-serif text-cream text-3xl md:text-4xl lg:text-5xl leading-[1.1] mb-16">
            How it works.
          </h2>

          <div className="space-y-0">
            {steps.map((step, index) => (
              <div key={step.num} className="relative flex gap-8 pb-14 last:pb-0">
                {index < steps.length - 1 && (
                  <div className="absolute left-[15px] top-10 bottom-0 w-px bg-sand/20" />
                )}
                <div className="flex-shrink-0 w-[31px] h-[31px] rounded-full bg-sand/15 flex items-center justify-center mt-1">
                  <div className="w-3 h-3 rounded-full bg-sand" />
                </div>
                <div className="pt-0.5">
                  <p className="text-sand text-[11px] font-sans font-medium tracking-[0.2em] uppercase mb-2">
                    {step.num}
                  </p>
                  <h3 className="font-serif text-cream text-xl md:text-2xl mb-3">{step.title}</h3>
                  <p className="text-cream/65 font-sans text-[15px] leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="relative py-36 md:py-52 overflow-hidden">
        <Image
          src="/Madison-283.webp"
          alt="Madison Griffin"
          fill
          className="object-cover object-[center_60%]"
          sizes="100vw"
          quality={85}
        />
        <div className="absolute inset-0 bg-midnight/62" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <p className="text-sand text-[11px] font-sans font-medium tracking-[0.3em] uppercase mb-8">
            Ready to Begin
          </p>
          <h2 className="font-serif text-cream text-3xl md:text-4xl lg:text-[3.25rem] leading-[1.1] mb-12">
            Your body should feel as good as your life does. Let&rsquo;s make that happen.
          </h2>
          <Link
            href="/apply"
            className="inline-flex items-center bg-sand text-midnight font-sans font-medium text-[11px] tracking-[0.18em] uppercase px-10 py-4 rounded-sm hover:bg-sand/90 transition-colors duration-300"
          >
            Apply for Coaching
          </Link>
          <p className="mt-6 text-cream/40 font-sans text-xs tracking-wide">
            Application only &middot; Spots are limited
          </p>
        </div>
      </section>

      {/* ── Book a Call ── */}
      <section className="bg-cream py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
              <Image
                src="/Madison-102.webp"
                alt="Madison Griffin"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <p className="text-bark text-[11px] font-sans font-medium tracking-[0.3em] uppercase mb-6">
                Not quite ready?
              </p>
              <h2 className="font-serif text-midnight text-3xl md:text-4xl lg:text-5xl leading-[1.1] mb-6">
                Let&rsquo;s figure it out together.
              </h2>
              <p className="text-charcoal/70 font-sans text-[17px] leading-[1.85] mb-10">
                Book a free call with me. I&rsquo;ll ask you a few questions, you ask me whatever you want, and we&rsquo;ll work out if this is the right fit for you right now. No pressure. No pitch.
              </p>
              <Link
                href="https://calendly.com/madisongriffinfit/client-check-ins"
                className="inline-flex items-center text-bark border border-bark/25 font-sans font-medium text-[11px] tracking-[0.18em] uppercase rounded-sm px-8 py-3.5 hover:bg-bark/5 transition-colors duration-300"
              >
                Book a Call with Madison
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { FaqAccordion } from '@/components/FaqAccordion'

export const metadata: Metadata = {
  title: 'Body Reclaimed | Monthly Coaching System',
  description:
    'A custom monthly coaching system built around your actual life. Custom programming, macro targets, and personalised monthly check-ins.',
}

const included = [
  {
    title: 'Custom training program',
    body: "The same custom programming system my 1:1 clients get, built around your goals, your schedule, and wherever you're training that month. Delivered through Trainerize so everything is in one place, always with you.",
  },
  {
    title: 'Custom macro targets',
    body: "Not a generic calculator. Your nutrition numbers based on your goal, your training volume, and what the data shows about how your body is actually responding. A clear, flexible framework you can take anywhere.",
  },
  {
    title: 'The Body Literacy Guide',
    body: "Every Body Reclaimed client receives this. A guide to muscle activation, reading real effort, understanding your body's signals, and building the felt relationship with your body that makes everything else work. Because a custom program is only as good as your ability to actually execute it, and execution starts with being inside your body, not just going through the motions.",
  },
  {
    title: 'Monthly check-in form',
    body: "At the end of every month you fill in a short check-in: what went well, what was hard, how your body responded. This is how we make sure your plan keeps working as you progress.",
  },
  {
    title: 'Personalised Loom response from me',
    body: "I go through your check-in personally and record a Loom video walking you through exactly what we're adjusting and why. You're never left guessing what to do next.",
  },
]

const faqs = [
  {
    q: "How is this different from Body Unmuted 1:1 coaching?",
    a: "Body Reclaimed gives you a fully custom plan and a monthly check-in with a personalised Loom response from me. Body Unmuted gives you daily messaging access, real-time adjustments, and a coach in your corner every single day. Body Reclaimed is the system. Body Unmuted is the full relationship.",
  },
  {
    q: "What's the minimum commitment?",
    a: "8 weeks. This gives your body enough time to actually respond to the program and gives us enough data to make meaningful adjustments in your second month.",
  },
  {
    q: "Do I need a gym?",
    a: "Ideally yes, but not required. Access to a gym with progressive weight options will get you the best results. But if your setup changes month to month, your program will always be adapted to what you have.",
  },
  {
    q: "When do I hear from you?",
    a: "You submit your check-in at the end of each month and receive your personalised Loom response within 48 hours.",
  },
  {
    q: "How does it work once I join?",
    a: "You'll receive your intake form within 24 hours of joining. Once I have your answers, your first month's program will be built and delivered within 5 to 7 days.",
  },
]

const STRIPE_URL = 'https://buy.stripe.com/5kQ7sNfbf2Q30oe1g97Zu01'
const CALENDLY_URL = 'https://calendly.com/madisongriffinfit/client-check-ins'

export default function BodyReclaimedPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        <Image
          src="/Madison-174.webp"
          alt="Madison Griffin"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
          quality={90}
        />
        <div className="absolute inset-0 bg-midnight/60" />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p className="text-sand text-[11px] font-sans font-medium tracking-[0.3em] uppercase mb-6">
            Body Reclaimed
          </p>
          <h1 className="font-serif text-cream text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6 text-balance">
            Stop piecing it together. Start actually building.
          </h1>
          <p className="text-cream/80 font-sans text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-8">
            A custom monthly coaching system built around your actual life. Because winging it clearly isn&rsquo;t working and neither is everyone else&rsquo;s advice.
          </p>
          <div className="flex flex-col items-center gap-3 mb-10">
            <div className="flex items-baseline gap-3">
              <span className="text-cream/40 font-sans text-lg line-through">$297</span>
              <span className="font-serif text-sand text-4xl">$197</span>
              <span className="text-cream/60 font-sans text-base">/month</span>
            </div>
            <p className="text-cream/45 font-sans text-[11px] tracking-[0.2em] uppercase">
              Founding member pricing &middot; 8 week minimum commitment
            </p>
          </div>
          <Link
            href={STRIPE_URL}
            className="inline-flex items-center bg-sand text-midnight font-sans font-medium text-[11px] tracking-[0.18em] uppercase rounded-sm px-10 py-4 hover:bg-sand/90 transition-colors duration-300"
          >
            Join Now
          </Link>
        </div>
      </section>

      {/* ── The Problem ── */}
      <section className="bg-cream py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-bark text-[11px] font-sans font-medium tracking-[0.3em] uppercase mb-6">
            Sound familiar?
          </p>
          <div className="space-y-6 text-charcoal/80 font-sans text-[17px] leading-[1.85]">
            <p>You know enough to know that what you&rsquo;ve been doing isn&rsquo;t working. Not because you haven&rsquo;t tried. But because you&rsquo;ve been piecing together a fitness strategy from a hundred different sources that were never designed to work together for your specific body, your specific life, and your specific goals.</p>
            <p>The result is noise. Conflicting advice, contradicting coaches, strategies that work for everyone except you. And underneath all of it, the feeling that your body is something you&rsquo;re constantly trying to figure out rather than something you actually understand.</p>
            <p className="font-serif italic text-midnight text-2xl md:text-3xl leading-snug pt-4">
              Body Reclaimed gives you one clear system. Built for you. Adjusted every month as you progress. And designed to do something most programs never bother with &mdash; teach you to actually understand your body in the process.
            </p>
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
                Everything works together.
              </h2>
            </div>
            <p className="text-cream/40 font-sans text-[13px] leading-relaxed md:max-w-[240px]">
              Everything works together &mdash; one system, not four separate things.
            </p>
          </div>

          {included.map((item, i) => (
            <div
              key={i}
              className="grid grid-cols-1 md:grid-cols-[56px_1fr_2fr] gap-3 md:gap-14 py-10 border-b border-cream/10 last:border-b-0"
            >
              <span className="text-sand text-[10px] font-sans font-medium tracking-[0.25em] uppercase md:pt-1.5">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="font-serif text-cream text-xl md:text-[1.35rem] leading-snug">{item.title}</h3>
              <p className="text-cream/60 font-sans text-[15px] leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Who It's For ── */}
      <section className="bg-cream py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
              <Image
                src="/Madison-94.webp"
                alt="Madison Griffin"
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
              <div className="space-y-5 text-charcoal/80 font-sans text-[17px] leading-[1.85]">
                <p>You&rsquo;re done piecing it together.</p>
                <p>You want a real system &mdash; not a template, not generic advice, not something built for a body and life that looks nothing like yours. You want programming that&rsquo;s actually custom, nutrition that&rsquo;s built on your specific data, and a monthly touchpoint that keeps everything moving as you do.</p>
                <p>You&rsquo;re someone who will show up and do the work. You don&rsquo;t need someone in your ear every day, but you do need to know that someone is paying attention, that your plan is actually built for you, and that you&rsquo;re not just following a program blindly without understanding what it&rsquo;s doing or why.</p>
                <p>You want to get results. And you want to actually understand your body in the process.</p>
              </div>
              <div className="mt-10">
                <Link
                  href={STRIPE_URL}
                  className="inline-flex items-center bg-bark text-cream font-sans font-medium text-[11px] tracking-[0.18em] uppercase rounded-sm px-8 py-3.5 hover:bg-bark/90 transition-colors duration-300"
                >
                  Join Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Founding Member Pricing ── */}
      <section className="bg-midnight py-24 md:py-36">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-sand text-[11px] font-sans font-medium tracking-[0.3em] uppercase mb-6">
            Pricing
          </p>
          <h2 className="font-serif text-cream text-3xl md:text-4xl lg:text-5xl leading-[1.1] mb-10">
            Founding member pricing, for now.
          </h2>
          <div className="space-y-5 text-cream/70 font-sans text-[17px] leading-[1.85] text-center max-w-2xl mx-auto mb-14">
            <p>Body Reclaimed is a brand new offer. I&rsquo;m launching it at $197 per month while I bring the first group of women through it. When founding member pricing closes, pricing moves to $297.</p>
            <p className="font-serif italic text-sand text-xl md:text-2xl leading-snug">
              If you&rsquo;ve been waiting for the right time, this is it.
            </p>
          </div>

          <div className="flex flex-col items-center gap-3 mb-10 pb-12 border-b border-cream/10">
            <div className="flex items-baseline gap-4">
              <span className="text-cream/35 font-sans text-xl line-through">$297</span>
              <span className="font-serif text-cream text-6xl md:text-7xl">$197</span>
              <span className="text-cream/50 font-sans text-lg">/month</span>
            </div>
            <p className="text-sand text-[10px] font-sans font-medium tracking-[0.25em] uppercase">
              8 week minimum commitment
            </p>
          </div>

          <Link
            href={STRIPE_URL}
            className="inline-flex items-center bg-sand text-midnight font-sans font-medium text-[11px] tracking-[0.18em] uppercase rounded-sm px-10 py-4 hover:bg-sand/90 transition-colors duration-300"
          >
            Join Now
          </Link>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-cream py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-bark text-[11px] font-sans font-medium tracking-[0.3em] uppercase mb-6">
            Questions
          </p>
          <h2 className="font-serif text-midnight text-3xl md:text-4xl leading-[1.1] mb-14">
            Everything you need to know.
          </h2>

          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      {/* ── Join CTA ── */}
      <section className="relative py-28 md:py-36 overflow-hidden">
        <Image
          src="/Madison-130.webp"
          alt="Madison Griffin"
          fill
          className="object-cover object-center"
          sizes="100vw"
          quality={90}
        />
        <div className="absolute inset-0 bg-midnight/65" />
        <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
          <h2 className="font-serif text-cream text-3xl md:text-4xl lg:text-[3rem] leading-[1.1] mb-6">
            One clear plan. Built for you. Adjusted every month.
          </h2>
          <div className="flex flex-col items-center gap-2 mb-10">
            <div className="flex items-baseline gap-3">
              <span className="text-cream/40 font-sans text-base line-through">$297</span>
              <span className="font-serif text-cream text-3xl">$197</span>
              <span className="text-cream/60 font-sans text-sm">/month</span>
            </div>
            <p className="text-cream/45 font-sans text-[10px] tracking-[0.2em] uppercase">
              Founding member pricing &middot; 8 week minimum
            </p>
          </div>
          <Link
            href={STRIPE_URL}
            className="inline-flex items-center bg-sand text-midnight font-sans font-medium text-[11px] tracking-[0.18em] uppercase rounded-sm px-10 py-4 hover:bg-sand/90 transition-colors duration-300"
          >
            Join Now
          </Link>
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
                Still not sure?
              </p>
              <h2 className="font-serif text-midnight text-3xl md:text-4xl lg:text-5xl leading-[1.1] mb-6">
                Let&rsquo;s figure it out together.
              </h2>
              <p className="text-charcoal/70 font-sans text-[17px] leading-[1.85] mb-10">
                Book a free call with me. I&rsquo;ll ask you a few questions, you ask me whatever you want, and we&rsquo;ll work out if this is the right fit for you right now. No pressure. No pitch.
              </p>
              <Link
                href={CALENDLY_URL}
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

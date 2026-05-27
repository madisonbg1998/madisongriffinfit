import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Body Decoded 1:1',
  description:
    'An integrated approach to strength, nutrition, and functional health for the woman whose body has stopped responding.',
  openGraph: {
    images: [
      { url: '/Body_Decoded.webp', width: 1200, height: 630, alt: 'Body Decoded' },
    ],
  },
}

const included = [
  {
    num: '01',
    title: 'An integrated nutrition framework',
    body: 'Most women who come to us have tried eating well. The problem is that a nutrition plan built only for body composition cannot fix an internal environment that is working against her. And a therapeutic protocol built only for healing does not necessarily move her body the way she wants. We build one nutrition plan that serves both goals at the same time: supporting what Jamie is addressing on the inside while driving the body composition results Madison specialises in.',
  },
  {
    num: '02',
    title: 'Custom strength programming',
    body: 'Progressive training built around her body, her schedule, and where she is right now. Adapted in real time as her internal environment shifts and her body starts to respond differently. Not a generic template. A programme that evolves with her.',
  },
  {
    num: '03',
    title: 'Functional health sessions and labs',
    body: 'Jamie works through her case history in depth, runs functional testing where indicated, and reviews labs with her eyes on the full picture. Ongoing sessions address what the investigation uncovers: gut dysfunction, hormonal dysregulation, thyroid issues, or whatever else has been quietly running the show.',
  },
  {
    num: '04',
    title: 'A joint team chat',
    body: 'One shared channel. Both of us. She messages us together, we respond as a unit, and we talk to each other about her behind the scenes. She is not bouncing between two experts hoping they are aligned. She has a team that is genuinely working together on her body. When something is not responding, we figure it out together.',
  },
  {
    num: '05',
    title: 'Mindset and body relationship work',
    body: 'This is not a bolt-on. Both Madison and Jamie bring deep expertise in the patterns that keep women stuck: the all-or-nothing spirals, the guilt cycles, the complicated history with food and movement, and the deeper identity underneath the behaviour. This runs through everything we do, not just when it comes up.',
  },
  {
    num: '06',
    title: 'Ongoing check-ins and adjustments',
    body: 'Regular touchpoints where both sides of her programme are reviewed together. Nothing is set and forget. Everything moves with her.',
  },
]

export default function BodyDecodedPage() {
  return (
    <>
      {/* ── 1. HERO ── */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        <Image
          src="/Madison-29.webp"
          alt="Madison Griffin"
          fill
          priority
          className="object-cover"
          style={{ objectPosition: '50% 25%' }}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-midnight/65" />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p className="text-sand text-[11px] font-sans font-medium tracking-[0.3em] uppercase mb-6">
            A Collaboration
          </p>
          <h1 className="font-serif text-cream text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight text-balance">
            Body Decoded
          </h1>
          <p className="text-cream/75 font-sans text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mt-8">
            The first offer that treats your gut, your hormones, and your body composition as one system.
          </p>
        </div>
      </section>

      {/* ── 2. WHAT LED HER HERE ── */}
      <section className="bg-midnight py-28 md:py-40">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-sand text-[11px] font-sans font-medium tracking-[0.3em] uppercase mb-10">
            The Problem
          </p>
          <div className="space-y-7 text-cream/70 font-sans text-[17px] leading-[1.85]">
            <p>
              Most women who find their way here already know something is off. They are not coming in blind. They know they have gut issues. They know their hormones feel dysregulated. Some have a diagnosis: perimenopause, PCOS, thyroid dysfunction. Others just know something is wrong without having been able to name it yet.
            </p>
            <p>
              And almost all of them have also tried to change their body. They have strength trained. They have dieted. They have hired coaches. They cannot lose weight. They cannot shift their body composition. They cannot figure out why what works for other women is not working for them.
            </p>
            <p className="font-serif italic text-sand text-2xl md:text-3xl leading-snug py-2">
              They know both things are true. They just have no idea how to solve either one, let alone both at the same time.
            </p>
            <p>
              The reason nothing has worked is not lack of effort. It is that the two problems have always been treated separately, if they were treated at all. A coach builds a programme for a body that is not set up to respond. A practitioner addresses the internal dysfunction without understanding what the physical goals actually require. The client sits in the middle, trying to hold both together, getting partial results at best.
            </p>
            <p className="font-serif text-cream text-xl md:text-2xl leading-snug">
              We solve them together. At the same time. As one team.
            </p>
          </div>
        </div>
      </section>

      {/* ── 3. INTRODUCING BODY DECODED ── */}
      <section className="bg-cream py-28 md:py-40">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <p className="text-sand text-[11px] font-sans font-medium tracking-[0.3em] uppercase mb-6">
            Introducing
          </p>
          <h2 className="font-serif text-midnight text-4xl md:text-6xl leading-[1.08] tracking-tight mb-10">
            Body Decoded
          </h2>

          <p className="text-charcoal/55 font-sans text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-20">
            An integrated coaching programme that addresses the internal environment and the body composition goals at the same time, with two specialists working on her as one team.
          </p>

          {/* Circles — centered */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-14 sm:gap-10 md:gap-20 mb-16">
            <div className="flex flex-col items-center text-center">
              <div className="relative w-48 h-48 md:w-60 md:h-60 rounded-full overflow-hidden ring-1 ring-bark/15 mb-6 shadow-[0_12px_48px_rgba(0,0,0,0.1)]">
                <Image
                  src="/Madison-88.webp"
                  alt="Madison Griffin"
                  fill
                  className="object-cover"
                  style={{ objectPosition: '50% 75%' }}
                  sizes="(max-width: 768px) 192px, 240px"
                />
              </div>
              <p className="font-serif text-midnight text-2xl mb-1">Madison Griffin</p>
              <p className="text-bark/70 font-sans text-[11px] tracking-[0.18em] uppercase mb-1">CPT, CNC</p>
              <p className="text-charcoal/40 font-sans text-[11px] tracking-[0.15em] uppercase">Strength and Nutrition Coach</p>
            </div>

            <div className="text-sand/40 font-serif text-4xl font-light">&amp;</div>

            <div className="flex flex-col items-center text-center">
              <div className="relative w-48 h-48 md:w-60 md:h-60 rounded-full overflow-hidden ring-1 ring-bark/15 mb-6 shadow-[0_12px_48px_rgba(0,0,0,0.1)]">
                <Image
                  src="/jamie-headshot.webp"
                  alt="Jamie Foti"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 192px, 240px"
                />
              </div>
              <p className="font-serif text-midnight text-2xl mb-1">Jamie Foti</p>
              <p className="text-bark/70 font-sans text-[11px] tracking-[0.18em] uppercase mb-1">MS, RD, IFNCP</p>
              <p className="text-charcoal/40 font-sans text-[11px] tracking-[0.15em] uppercase">Functional Dietitian</p>
            </div>
          </div>

          {/* Partnership narrative */}
          <div className="max-w-2xl mx-auto space-y-6 text-charcoal/65 font-sans text-[17px] leading-[1.85] text-left">
            <p>
              Body Decoded came out of a conversation Madison and Jamie kept having about the same woman. She was doing everything right. The training was solid. The nutrition was dialled in. And her body was not moving. Madison kept hitting a wall she could not coach through. Jamie kept seeing women who had a plan for their internal health but no real path to the physical results they were also after.
            </p>
            <p>
              The answer was not to refer out and hope the two sides would talk to each other. The answer was to build a programme where they were never separate in the first place.
            </p>
          </div>
        </div>
      </section>

      {/* ── 4. THE INTEGRATED APPROACH ── */}
      <section className="bg-midnight py-28 md:py-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-24 items-start">
            <div className="lg:col-span-3 space-y-7 text-cream/70 font-sans text-[17px] leading-[1.85]">
              <p className="font-serif text-cream text-3xl md:text-4xl leading-snug">
                One team. One programme. One goal.
              </p>
              <p>
                Most people assume that working with two specialists means getting two separate things. One nutrition plan from this person, one protocol from that one, and a whole lot of hoping they do not contradict each other.
              </p>
              <p>
                Body Decoded does not work like that.
              </p>
              <p>
                Jamie is addressing the internal environment: the gut dysfunction, the hormonal dysregulation, the thyroid issues, whatever the investigation uncovers. Madison is building the strength programme and the overarching nutrition strategy. But the nutrition plan they build together is designed to serve both goals simultaneously: supporting the healing work Jamie is doing on the inside while driving the body composition results Madison specialises in.
              </p>
              <p>
                There is one shared chat. Both of us. The client messages us together, we respond as a unit, and we are talking to each other behind the scenes about her. When something is not responding, we work it out together rather than each assuming it falls under the other person.
              </p>
              <p className="font-serif italic text-sand text-2xl md:text-3xl leading-snug py-2">
                She is not a client shared between two coaches. She is one person with one team.
              </p>
              <p>
                The mindset work, the body relationship patterns, the spirals and the guilt cycles and the complicated history with food and movement: that sits inside both of our expertise. It runs through everything we do. It is not something either of us hands off.
              </p>
            </div>

            <div className="lg:col-span-2">
              <div className="relative aspect-[3/4] rounded-sm overflow-hidden lg:sticky lg:top-24">
                <Image
                  src="/Madison-249.webp"
                  alt="Madison Griffin"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. WHAT'S INCLUDED ── */}
      <section className="bg-cream py-28 md:py-40">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-sand text-[11px] font-sans font-medium tracking-[0.3em] uppercase mb-6">
            What Is Included
          </p>
          <h2 className="font-serif text-midnight text-4xl md:text-5xl leading-[1.08] mb-20 tracking-tight text-balance">
            Everything works together, because that is the whole point.
          </h2>

          <div className="space-y-0">
            {included.map((item, i) => (
              <div
                key={item.num}
                className={`py-10 md:py-12 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-16 ${
                  i < included.length - 1 ? 'border-b border-charcoal/8' : ''
                }`}
              >
                <div className="md:col-span-1">
                  <p className="text-sand text-[10px] font-sans font-medium tracking-[0.22em] uppercase mt-1">{item.num}</p>
                </div>
                <div className="md:col-span-11">
                  <h3 className="font-serif text-midnight text-xl md:text-2xl mb-4">{item.title}</h3>
                  <p className="text-charcoal/60 font-sans text-[16px] leading-[1.85]">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. MEET JAMIE ── */}
      <section className="bg-midnight py-28 md:py-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

            <div className="lg:col-span-5">
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm lg:sticky lg:top-24">
                <Image
                  src="/jamie-headshot.webp"
                  alt="Jamie Foti"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-8">
              <p className="text-sand text-[11px] font-sans font-medium tracking-[0.3em] uppercase">
                Meet Jamie
              </p>
              <h2 className="font-serif text-cream text-4xl md:text-5xl leading-[1.08] tracking-tight">
                Jamie Foti
              </h2>
              <p className="text-sand/70 font-sans text-sm tracking-[0.06em]">
                MS, RD, IFNCP — Functional Dietitian and Autoimmune Specialist
              </p>

              <div className="space-y-6 text-cream/65 font-sans text-[16px] leading-[1.9] pt-2">
                <p>
                  Jamie knows exactly what brought you here. Not in a vague way. She knows because she spent over a decade living it. Debilitating gut pain at sixteen. Two years of appointments that led nowhere. Diagnoses that did not fit. Symptoms dismissed or attributed to anxiety by the very people who were supposed to help her.
                </p>

                <blockquote className="border-l-2 border-sand pl-6 py-1 my-8">
                  <p className="font-serif italic text-cream/80 text-xl md:text-2xl leading-snug">
                    After she vomited blood, a doctor asked if maybe she had fruit punch beforehand.
                  </p>
                </blockquote>

                <p>
                  What followed was over a decade of searching. Functional medicine eventually gave her a real diagnosis and a path toward actual improvement, not just management. Going back to school, becoming a registered dietitian, and refusing to accept dismissal as an adequate answer finished the job.
                </p>

                <p className="font-serif text-cream text-xl md:text-2xl leading-snug">
                  She did not just get her old life back. She built a better one.
                </p>

                <p>
                  Today Jamie is a board-certified functional and integrative dietitian with advanced training in health and behaviour change. She is trained to treat not just your body, but your nervous system and the emotional patterns that most protocols never touch, because those are often exactly where healing stalls.
                </p>

                <p>
                  When you tell Jamie something feels off, even if your labs are normal, even if other practitioners have brushed it off, she believes you. She has been that person. She knows what it costs to lose years searching for answers that should have been available so much sooner.
                </p>

                <p className="font-serif text-cream text-lg md:text-xl leading-snug">
                  Every client she works with gets the version of care she wishes she had.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. THE TRANSFORMATION ── */}
      <section className="bg-cream py-28 md:py-40">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-sand text-[11px] font-sans font-medium tracking-[0.3em] uppercase mb-6">
            The Transformation
          </p>
          <h2 className="font-serif text-midnight text-4xl md:text-5xl leading-[1.08] mb-20 tracking-tight text-balance">
            What changes for her is everything.
          </h2>

          <div className="space-y-0">
            {[
              {
                label: 'Physically',
                heading: 'Her body starts responding.',
                body: 'The weight that has been stuck starts moving. Body composition shifts she has been chasing actually happen and hold. She builds real, visible muscle. Bloating settles. Energy stabilises. Sleep deepens. Skin clears. Periods regulate or become less painful. The symptoms she had normalised as just how she is turn out not to be permanent. They were signals. We finally read them and address what is causing them.',
              },
              {
                label: 'Mentally and emotionally',
                heading: 'The war with her body ends.',
                body: 'The guilt cycles stop. The all-or-nothing spirals stop. The constant starting over stops. She develops a real felt sense of her own body: what it needs, what it is telling her, when to push and when to listen. She stops blaming herself. She stops thinking she is broken. For many women, finally having a clear answer for what has been going on is transformative on its own. They have been failed by practitioners who could not give them clarity, or who solved one piece without addressing the whole picture. We change that.',
              },
              {
                label: 'In her life and work',
                heading: 'The capacity comes back.',
                body: 'The energy she was spending managing her body, overriding it, pushing through, comes back to her as presence, confidence, and bandwidth for the things that actually matter. Her body stops being the thing that quietly costs her and starts being the thing that gives back.',
              },
            ].map((item, i, arr) => (
              <div
                key={item.label}
                className={`py-10 md:py-14 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-16 ${
                  i < arr.length - 1 ? 'border-b border-charcoal/8' : ''
                }`}
              >
                <div className="md:col-span-3">
                  <p className="text-sand text-[10px] font-sans font-medium tracking-[0.25em] uppercase mt-1">{item.label}</p>
                </div>
                <div className="md:col-span-9">
                  <h3 className="font-serif text-midnight text-2xl md:text-3xl leading-snug mb-4">{item.heading}</h3>
                  <p className="text-charcoal/60 font-sans text-[16px] leading-[1.85]">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. CTA ── */}
      <section className="bg-midnight py-28 md:py-40">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-sand text-[11px] font-sans font-medium tracking-[0.3em] uppercase mb-8">
            This Is for You If
          </p>
          <h2 className="font-serif text-cream text-4xl md:text-5xl leading-[1.08] mb-12 tracking-tight text-balance">
            You have done everything right and your body still will not change.
          </h2>

          <div className="space-y-4 text-left max-w-lg mx-auto mb-14">
            {[
              'You know something is off internally but have never been able to get a clear answer.',
              'You have strength trained, eaten well, and hired coaches. Nothing is shifting.',
              'You have a diagnosis and cannot figure out how to build the body you want alongside it.',
              'You are ready for one team that addresses everything at the same time.',
            ].map((line) => (
              <div key={line} className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-sand mt-2.5 flex-shrink-0" />
                <p className="text-cream/65 font-sans text-[16px] leading-relaxed">{line}</p>
              </div>
            ))}
          </div>

          <Link
            href="/apply"
            className="inline-block bg-sand text-midnight font-sans font-medium text-[11px] tracking-[0.18em] uppercase px-12 py-4 rounded-sm hover:bg-sand/90 transition-colors duration-300"
          >
            Apply to Work Together
          </Link>
          <p className="mt-5 text-cream/30 font-sans text-xs tracking-wide">
            We review every application personally.
          </p>
        </div>
      </section>
    </>
  )
}

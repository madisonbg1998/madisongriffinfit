import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Madison',
  description:
    'Former data scientist, current fitness coach, certified wine nerd, and yes, I used to be a cheese monger. This is how I got here.',
  openGraph: {
    images: [{ url: '/Madison-134.webp', width: 1200, height: 630, alt: 'About Madison Griffin' }],
  },
}

export default function AboutPage() {
  return (
    <>

      {/* ══════════════════════════════════════════ */}
      {/*  HERO                                      */}
      {/* ══════════════════════════════════════════ */}
      <section className="min-h-screen flex flex-col lg:flex-row overflow-hidden" style={{ background: '#1C0D06' }}>

        {/* Left: text */}
        <div className="flex-1 flex flex-col justify-center px-8 md:px-14 lg:px-16 xl:px-20 pt-36 pb-16 lg:py-0">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-8 h-px bg-sand/40" />
            <p className="text-sand text-[10px] font-sans font-medium tracking-[0.3em] uppercase">About Madison</p>
          </div>
          <h1 className="font-serif text-cream text-5xl md:text-6xl lg:text-[4.5rem] xl:text-[5.25rem] leading-[1.05] tracking-tight mb-8">
            Hi, I&rsquo;m Madison.
          </h1>
          <p className="text-cream/60 font-sans text-lg md:text-xl leading-relaxed max-w-md">
            Former data scientist, current fitness coach, certified wine nerd, and yes, I used to be a cheese monger. It&rsquo;s a fun combination. Bear with me.
          </p>
        </div>

        {/* Right: photo */}
        <div className="relative lg:w-[42%] flex-shrink-0 h-[65vw] lg:h-auto overflow-hidden">
          <Image
            src="/madison_smiling_on_couch.webp"
            alt="Madison Griffin"
            fill
            priority
            className="object-cover object-[center_30%]"
            sizes="(max-width: 1024px) 100vw, 42vw"
          />
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to right, #1C0D06 0%, transparent 30%)' }} />
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to bottom, #1C0D06 0%, transparent 22%)' }} />
          <div className="absolute inset-0 pointer-events-none lg:hidden" style={{ background: 'linear-gradient(to top, #1C0D06 0%, transparent 40%)' }} />
        </div>

      </section>


      {/* ══════════════════════════════════════════ */}
      {/*  01 — THE BEGINNING  (cream)              */}
      {/* ══════════════════════════════════════════ */}
      <section className="bg-cream py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">

          {/* Chapter label */}
          <div className="flex items-center gap-3 mb-14">
            <span className="font-sans text-[10px] text-bark tracking-[0.25em] font-medium">01</span>
            <div className="w-6 h-px bg-bark/40" />
            <span className="font-sans text-[10px] text-bark/70 tracking-[0.2em] uppercase">The Beginning</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

            <div className="lg:col-span-7 lg:order-2 space-y-7 text-charcoal/80 font-sans text-[17px] leading-[1.75]">
              <p>I was not a fitness person growing up. Like, at all. I was the girl <span className="text-bark font-medium">eating salt and vinegar chips and skipping gym class.</span> I got an A in literally everything except PE. Got a B. Honestly, deserved.</p>
              <p>So how did I end up here? The short version is I spent years not loving my body and not understanding why nothing I tried was actually working. I was putting in the effort. Following the plans. Doing all the things. And <span className="text-bark font-medium">my body just wasn&rsquo;t changing the way I wanted it to.</span></p>
              <p>So I finally did what any former data scientist would do. I hired someone who actually knew what they were doing — a WBFF pro fitness athlete who completely changed my understanding of how body transformation actually works. And <span className="text-bark font-medium">my body finally started changing.</span></p>
              <p>The problem? <span className="text-bark font-medium">I completely lost myself in the process.</span></p>
              <p>I became obsessed. And not in a cute way. Any deviation from the plan sent me into a spiral. A dinner out. A missed session. A weekend that didn&rsquo;t go perfectly. I was getting the results I&rsquo;d wanted for years but I was <span className="text-bark font-medium">miserable and stressed and honestly kind of boring to be around.</span></p>

              {/* Pull quote */}
              <div className="py-8 border-y border-bark/12 my-2">
                <p className="font-serif italic text-midnight/80 text-xl md:text-2xl leading-snug">
                  I was eating overnight oats alone in a winery parking lot so I wouldn&rsquo;t fall off my plan while my friends were inside having the time of their lives.
                </p>
              </div>

              <p>That&rsquo;s when I realized this approach was never going to work for the life I actually wanted to build. I wanted to travel. Eat everything. Drink great wine. Sit at long dinners. A fitness approach that had me stressed in a winery parking lot on a Sunday was not going to survive that life.</p>
            </div>

            <div className="lg:col-span-5 lg:order-1">
              <div className="overflow-hidden rounded-sm sticky top-28">
                <Image
                  src="/madison-wine.webp"
                  alt="Madison with wine"
                  width={0}
                  height={0}
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="w-full h-auto"
                />
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════ */}
      {/*  THE QUESTION  (choco)                    */}
      {/* ══════════════════════════════════════════ */}
      <section className="bg-choco py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-8">
          <p className="text-cream/60 font-sans text-[17px] leading-relaxed">
            So I changed the question I was asking. Instead of <span className="text-cream/80 italic">what do I need to cut out to get results</span>, I started asking:
          </p>
          <p className="font-serif text-sand text-xl md:text-2xl lg:text-[1.75rem] leading-[1.4]">
            How do I get to have the life I want and be in the best shape of my life at the same time?
          </p>
          <p className="text-cream/60 font-sans text-[17px] leading-relaxed">
            Turns out those two things don&rsquo;t actually compete. They work together.
          </p>
        </div>
      </section>


      {/* ══════════════════════════════════════════ */}
      {/*  02 — THE MUSCLE TRUTH  (cream)           */}
      {/* ══════════════════════════════════════════ */}
      <section className="bg-cream py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">

          {/* Chapter label */}
          <div className="flex items-center gap-3 mb-14">
            <span className="font-sans text-[10px] text-bark tracking-[0.25em] font-medium">02</span>
            <div className="w-6 h-px bg-bark/40" />
            <span className="font-sans text-[10px] text-bark/70 tracking-[0.2em] uppercase">The Muscle Truth</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            <div className="lg:col-span-5 lg:order-2">
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm sticky top-28">
                <Image
                  src="/Madison-73.webp"
                  alt="Madison joyful in nature"
                  fill
                  className="object-cover object-bottom"
                  style={{ transform: 'scale(1.2)', transformOrigin: 'bottom center' }}
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>

            <div className="lg:col-span-7 lg:order-1 space-y-7 text-charcoal/80 font-sans text-[17px] leading-[1.75]">
              <p>Here&rsquo;s what I figured out, and this is where the data scientist brain came in handy. The fitness advice pushed at women is <span className="text-bark font-medium">almost universally centered around weight loss.</span> Eat less, move more, shrink yourself down. And it keeps women working incredibly hard while <span className="text-bark font-medium">tanking their metabolism, losing muscle,</span> and throwing their whole body out of whack. They&rsquo;re trying harder and harder and never seeing real lasting change because they&rsquo;re chasing the wrong thing.</p>

              {/* Display moment */}
              <div className="py-10 border-y border-bark/12 my-2 text-center">
                <p className="font-serif text-midnight text-[1.75rem] md:text-[2.1rem] leading-[1.2] tracking-tight">
                  The actual answer is building muscle.
                </p>
              </div>

              <p>I know. Women have been told to be afraid of it forever and it makes me insane. Because <span className="text-bark font-medium">building muscle is genuinely the answer to everything.</span> It lets you eat more. It balances your hormones. It completely transforms your physique in a way that cardio and restriction never will. It gives you energy. It lets you travel and eat pasta and drink wine and not stress about it constantly because your body actually knows how to use food now.</p>
              <p className="font-medium text-bark">It&rsquo;s basically an 11 out of 10.</p>
              <p>I went deep on all of this — the research, the science, the mechanisms behind everything I&rsquo;d been experiencing. Because of course I did. <span className="text-bark font-medium">Data scientist. Can&rsquo;t help it.</span> And the more I understood, the more I realized that what I&rsquo;d stumbled into wasn&rsquo;t just my own breakthrough. It was something other women desperately needed too.</p>
              <p>So I got my certifications, packed up, and started traveling. <span className="text-bark font-medium">21 countries. Incredible food. Great wine.</span> And I woke up every single morning <span className="text-bark font-medium">genuinely confident in my body.</span> Not because I was perfect. Because I finally understood how my body actually worked.</p>
            </div>

          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════ */}
      {/*  03 — THE LIFE  (choco)                   */}
      {/* ══════════════════════════════════════════ */}
      <section className="bg-choco py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          {/* Chapter label */}
          <div className="flex items-center gap-3 mb-12">
            <span className="font-sans text-[10px] text-sand tracking-[0.25em] font-medium">03</span>
            <div className="w-6 h-px bg-sand/40" />
            <span className="font-sans text-[10px] text-sand/70 tracking-[0.2em] uppercase">The Life</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5 lg:order-1">
              <div className="overflow-hidden rounded-sm">
                <Image
                  src="/madison-pool.webp"
                  alt="Madison at the pool"
                  width={0}
                  height={0}
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div className="lg:col-span-7 lg:order-2 space-y-8">
              <div className="space-y-6 text-cream/70 font-sans text-[17px] leading-[1.75]">
                <p>When you understand what actually drives results, you stop stressing about the things that don&rsquo;t. Suddenly <span className="text-sand">the pasta isn&rsquo;t the enemy and the wine isn&rsquo;t a setback</span> and your body starts working with you in a way it never did when you were fighting it.</p>
                <p>Eventually <span className="text-sand">I quit my job, went all in on this,</span> and haven&rsquo;t looked back.</p>
                <p>Now I <span className="text-sand">lift, eat really well, travel constantly, drink great wine, still geek out over cheese,</span> and my body gives me the energy and confidence to show up fully in everything I&rsquo;m building.</p>
              </div>

              <p className="font-serif text-cream text-2xl md:text-3xl leading-snug">
                Not a body instead of a life.<br />A body that makes my life better.
              </p>

              <div className="space-y-5 text-cream/70 font-sans text-[17px] leading-[1.75] pt-6 border-t border-cream/10">
                <p>I don&rsquo;t just give you a workout plan. I <span className="text-sand">teach you how to actually change your body over time,</span> even when you&rsquo;re busy, traveling, and have a completely full life. I help you understand your body well enough that <span className="text-sand">you never have to outsource it again.</span></p>
                <p className="font-serif text-sand text-xl leading-snug">Because when you&rsquo;re finally living in a body you love, everything shifts.</p>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* ══════════════════════════════════════════ */}
      {/*  CTA  (cream)                             */}
      {/* ══════════════════════════════════════════ */}
      <section className="bg-cream py-32 md:py-44">
        <div className="max-w-2xl mx-auto px-6 text-center">

          {/* Decorative anchor */}
          <div className="flex items-center justify-center gap-5 mb-14">
            <div className="w-16 h-px bg-bark/15" />
            <span className="font-sans text-[10px] text-bark/40 tracking-[0.25em] uppercase">Start Here</span>
            <div className="w-16 h-px bg-bark/15" />
          </div>

          <h2 className="font-serif text-midnight text-3xl md:text-4xl lg:text-[2.75rem] leading-[1.1] tracking-tight mb-4">
            There&rsquo;s a reason it hasn&rsquo;t worked.
          </h2>
          <p className="font-serif italic text-bark text-xl md:text-2xl mb-10">
            Want to know what it is?
          </p>

          <p className="text-charcoal/60 font-sans text-[17px] leading-relaxed mb-5">
            The Body Brief is a free personalized diagnostic — and honestly it&rsquo;s the starting point I wish I&rsquo;d had before years of trying everything and getting nowhere. You tell me about your body, your life, your history, and what you&rsquo;ve already tried. I look at the full picture. And you get back a clear, specific breakdown of exactly what&rsquo;s been getting in the way and what to actually do about it.
          </p>
          <p className="text-midnight font-sans text-[17px] font-semibold mb-12">
            You&rsquo;ve been waiting long enough to figure this out.
          </p>

          <Link
            href="/body-brief"
            className="inline-flex items-center gap-3 bg-bark text-cream font-sans font-medium text-[11px] tracking-[0.18em] uppercase rounded-sm px-10 py-4 hover:bg-bark/85 transition-colors duration-300"
          >
            I want to know why
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 7h10M8 3l4 4-4 4" />
            </svg>
          </Link>
          <p className="mt-5 text-charcoal/30 font-sans text-[11px] tracking-wide">Free &middot; Takes 5 minutes</p>

        </div>
      </section>

    </>
  )
}

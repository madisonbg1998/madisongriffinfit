import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Nutrition Guide | Body Reclaimed',
  robots: { index: false, follow: false },
}

// ── Schedule data ─────────────────────────────────────────────────────────────

type ScheduleItem = {
  time: string
  label: string
  desc?: string
  isSession?: boolean
}

const MORNING_SCHEDULE: ScheduleItem[] = [
  { time: '7:00am', label: 'Breakfast', desc: '3 eggs scrambled with smoked salmon, sourdough toast, avocado, and Greek yoghurt' },
  { time: '8:00am', label: 'Gym session', isSession: true },
  { time: '9:00am', label: 'Post-workout shake', desc: 'Protein powder' },
  { time: '12:30pm', label: 'Lunch', desc: 'Grilled chicken or salmon, rice or quinoa, roasted vegetables, olive oil dressing' },
  { time: '4:00pm', label: 'Snack', desc: 'Tuna with crackers' },
  { time: '7:30pm', label: 'Dinner', desc: 'Lean protein, sweet potato or pasta, plenty of vegetables' },
]

const LUNCHTIME_SCHEDULE: ScheduleItem[] = [
  { time: '8:00am', label: 'Breakfast', desc: '3 eggs scrambled with smoked salmon, sourdough toast, avocado, and Greek yoghurt' },
  { time: '11:00am', label: 'Pre-workout snack', desc: 'Tuna with crackers' },
  { time: '12:30pm', label: 'Gym session', isSession: true },
  { time: '1:30pm', label: 'Post-workout shake', desc: 'Protein powder' },
  { time: '4:30pm', label: 'Lunch', desc: 'Grilled chicken or salmon, rice or quinoa, roasted vegetables, olive oil dressing' },
  { time: '7:30pm', label: 'Dinner', desc: 'Lean protein, sweet potato or pasta, plenty of vegetables' },
]

const EVENING_SCHEDULE: ScheduleItem[] = [
  { time: '8:00am', label: 'Breakfast', desc: '3 eggs scrambled with smoked salmon, sourdough toast, avocado, and Greek yoghurt' },
  { time: '12:30pm', label: 'Lunch', desc: 'Grilled chicken or salmon, rice or quinoa, roasted vegetables, olive oil dressing' },
  { time: '4:00pm', label: 'Snack', desc: 'Tuna with crackers' },
  { time: '6:30pm', label: 'Gym session', isSession: true },
  { time: '7:30pm', label: 'Post-workout shake', desc: 'Protein powder' },
  { time: '9:00pm', label: 'Dinner', desc: 'Lean protein, sweet potato or pasta, plenty of vegetables' },
]

// ── Components ────────────────────────────────────────────────────────────────

function SectionLabel({ num, title }: { num: string; title: string }) {
  return (
    <div className="flex items-center gap-4 mb-10">
      <span className="text-sand font-serif text-2xl">{num}</span>
      <div className="flex-1 h-px bg-bark/10" />
      <span className="text-bark text-[10px] font-medium tracking-[0.25em] uppercase">{title}</span>
      <div className="flex-1 h-px bg-bark/10" />
    </div>
  )
}

function ScheduleCard({ title, items }: { title: string; items: ScheduleItem[] }) {
  return (
    <div className="bg-white border border-bark/10 rounded-sm overflow-hidden h-full">
      <div className="px-5 py-4 border-b border-bark/10">
        <p className="text-bark text-[10px] font-medium tracking-[0.2em] uppercase">{title}</p>
      </div>
      <div className="px-5 py-2">
        {items.map((item, i) => (
          <div
            key={i}
            className={`flex gap-4 py-3 ${i < items.length - 1 ? 'border-b border-bark/8' : ''}`}
          >
            <span className="text-charcoal/35 font-sans text-xs w-12 shrink-0 pt-0.5 tabular-nums">
              {item.time}
            </span>
            <div>
              <p className={`font-sans text-sm font-semibold ${item.isSession ? 'text-bark' : 'text-midnight'}`}>
                {item.label}
              </p>
              {item.desc && (
                <p className="text-charcoal/55 font-sans text-xs leading-relaxed mt-0.5">{item.desc}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function NutritionGuidePage() {
  return (
    <main className="bg-cream min-h-screen">

      {/* ── Hero: header + intro + photo ── */}
      <section className="pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-bark text-[11px] font-sans font-medium tracking-[0.3em] uppercase mb-6">
                Body Reclaimed &middot; Madison Griffin Fit
              </p>
              <h1 className="font-serif text-midnight text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-8">
                Nutrition Guide
              </h1>
              <div className="space-y-5 text-charcoal/70 font-sans text-[17px] leading-[1.9] mb-8">
                <p>Most of my clients come to me having tried a lot of things.</p>
                <p>
                  Counted calories. Cut carbs. Done Whole30. Tracked macros obsessively for three weeks
                  and then abandoned it completely.
                </p>
                <p>
                  They&rsquo;re smart, motivated women who have thrown a lot of effort at this and are
                  still not where they want to be.
                </p>
                <p>
                  Almost every single time, the issue isn&rsquo;t effort. It&rsquo;s that nobody ever
                  actually explained how to eat in a way that works for a real, full, unpredictable life.
                </p>
              </div>
              <p className="font-serif italic text-midnight text-xl sm:text-2xl leading-[1.5]">
                So that&rsquo;s what we&rsquo;re going to do here.
              </p>
            </div>
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
              <Image
                src="/Madison-237.webp"
                alt="Madison"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 01: Your Macros ── */}
      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-6">
          <SectionLabel num="01" title="Your Macros" />

          <p className="text-charcoal/70 font-sans text-[17px] leading-[1.9] mb-5">
            Your custom targets are in your programme notes in Trainerize. They were built
            specifically for you, your body, your goal, and your lifestyle.
          </p>
          <p className="text-charcoal/70 font-sans text-[17px] leading-[1.9] mb-12">
            Not a generic calculator. Yours.
          </p>

          <div className="border-t border-bark/10 pt-8 mb-8">
            <p className="text-bark text-[10px] font-medium tracking-[0.2em] uppercase mb-4">Protein</p>
            <p className="font-sans font-semibold text-midnight text-base mb-3">Anchor everything around this.</p>
            <p className="text-charcoal/70 font-sans text-[16px] leading-[1.9] mb-4">
              It preserves and builds the muscle we&rsquo;re working for in training, keeps you
              genuinely full, and stabilises your blood sugar in a way that makes everything else easier.
            </p>
            <p className="text-charcoal/70 font-sans text-[16px] leading-[1.9]">
              When you&rsquo;re unsure about a meal, ask yourself one question: where is the protein
              coming from? That question alone will take you most of the way there, most of the time.
            </p>
          </div>

          <div className="border-t border-bark/10 pt-8 mb-8">
            <p className="text-bark text-[10px] font-medium tracking-[0.2em] uppercase mb-4">Carbohydrates</p>
            <p className="font-sans font-semibold text-midnight text-base mb-3">Don&rsquo;t cut them.</p>
            <p className="text-charcoal/70 font-sans text-[16px] leading-[1.9] mb-4">
              Carbohydrates fuel your training, support your mood, and keep your energy consistent
              throughout the day.
            </p>
            <p className="text-charcoal/70 font-sans text-[16px] leading-[1.9] mb-4">
              I know it&rsquo;s tempting. We&rsquo;ve all been told that fewer carbs equals faster
              results. But chronically under-eating carbs makes you feel terrible, tanks your
              performance in the gym, and signals to your body that resources are scarce.
            </p>
            <p className="text-charcoal/70 font-sans text-[16px] leading-[1.9]">
              That&rsquo;s the exact opposite of what we need. Keep your carbs. Use them.
              They&rsquo;re doing a job.
            </p>
          </div>

          <div className="border-t border-bark/10 pt-8">
            <p className="text-bark text-[10px] font-medium tracking-[0.2em] uppercase mb-4">Fats</p>
            <p className="font-sans font-semibold text-midnight text-base mb-3">Don&rsquo;t be afraid. Just be aware.</p>
            <p className="text-charcoal/70 font-sans text-[16px] leading-[1.9] mb-4">
              Fats support your hormones, your brain, your skin, and your cycle. They make food
              taste good and keep you satisfied after meals.
            </p>
            <p className="text-charcoal/70 font-sans text-[16px] leading-[1.9]">
              Fat is the most calorie-dense of the three macros — a little goes a long way and
              it&rsquo;s easy to overshoot without realising. You don&rsquo;t need to avoid it.
              You just need to be aware of it in a way you don&rsquo;t need to be with protein or carbs.
            </p>
          </div>
        </div>
      </section>

      {/* ── On Tracking + Photo 243 ── */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5 lg:order-1">
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm sticky top-28">
                <Image
                  src="/Madison-243.webp"
                  alt="Madison"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>
            <div className="lg:col-span-7 lg:order-2">
              <p className="text-bark text-[10px] font-medium tracking-[0.2em] uppercase mb-6">On tracking</p>
              <div className="space-y-5 text-charcoal/70 font-sans text-[17px] leading-[1.9]">
                <p>
                  How closely you track is up to you. But I&rsquo;ll be honest: I recommend at
                  least starting with logging, even if it&rsquo;s just for the first few weeks.
                </p>
                <p>
                  Most women are genuinely surprised by what they find. Not because they&rsquo;re
                  eating badly, but because they&rsquo;ve never seen what a day of eating looks like
                  mapped against their targets.
                </p>
                <p>
                  A rough, honest food log is infinitely more useful to me than a perfect one that
                  only exists half the week. If you&rsquo;re going to track, track honestly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 02: Meal Timing ── */}
      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-6">
          <SectionLabel num="02" title="Meal Timing" />

          <p className="font-serif italic text-midnight text-2xl sm:text-3xl leading-[1.4] text-center mb-12">
            This is the piece that makes the biggest difference and gets talked about the least.
          </p>

          <div className="space-y-5 text-charcoal/70 font-sans text-[17px] leading-[1.9] mb-10">
            <p>The goal is to fuel yourself consistently throughout the day.</p>
            <p>Not running on empty and then wondering why you can&rsquo;t stop eating after dinner.</p>
            <p>
              When you under-fuel during the day, your blood sugar drops, your cortisol rises,
              and by the time evening comes your body is in a deficit it urgently needs to fill.
            </p>
            <p>
              Those cravings that hit at 9pm and feel completely out of your control? Not a
              willpower problem. A biology problem. Your body will always get what it needs.
              The only question is whether it does it gracefully at lunch or desperately after dinner.
            </p>
          </div>

          <div className="space-y-4 mb-10">
            {[
              'A solid breakfast with protein within an hour or two of waking.',
              'A proper lunch. Not something you inhaled standing up between calls.',
              'An afternoon snack if you need one, rather than white-knuckling it to dinner.',
            ].map((point, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="w-1.5 h-1.5 rounded-full bg-bark mt-2.5 shrink-0" />
                <p className="text-midnight font-sans text-[16px] leading-[1.85]">{point}</p>
              </div>
            ))}
          </div>

          <p className="text-charcoal/70 font-sans text-[17px] leading-[1.9]">
            The evening cravings that feel like a self-control problem are almost always a
            morning and afternoon problem.
          </p>
        </div>
      </section>

      
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-7 space-y-6">
              <p className="text-bark text-[10px] font-medium tracking-[0.2em] uppercase">Around training</p>
              <div className="space-y-5 text-charcoal/70 font-sans text-[17px] leading-[1.9]">
                <p>
                  Get some carbohydrates and protein in during the two hours before your session.
                  Training completely fasted, especially for harder sessions, limits what you can
                  actually get out of it.
                </p>
                <p>
                  After training, get protein in within the hour or two that follow. A meal is ideal.
                  A shake works if that&rsquo;s more practical.
                </p>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm sticky top-28">
                <Image
                  src="/Madison-247.webp"
                  alt="Madison"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 03: Food Quality ── */}
      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-6">
          <SectionLabel num="03" title="Food Quality" />

          <div className="space-y-5 text-charcoal/70 font-sans text-[17px] leading-[1.9] mb-10">
            <p>You don&rsquo;t need to eat perfectly to get results.</p>
            <p>You need to eat well most of the time. And that looks different for everyone.</p>
          </div>

          <div className="bg-white border border-bark/10 rounded-sm px-6 py-6 mb-10">
            <p className="text-bark text-[10px] font-medium tracking-[0.2em] uppercase mb-5">Build most meals around</p>
            <div className="space-y-3">
              {[
                'A quality protein source',
                'Plenty of vegetables',
                'A source of complex carbohydrates',
                'Some healthy fat',
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-sand shrink-0" />
                  <p className="text-midnight font-sans text-[15px]">{item}</p>
                </div>
              ))}
            </div>
            <p className="text-charcoal/50 font-sans text-sm mt-5 pt-5 border-t border-bark/8">
              Cook when you can. Choose things that give you energy that lasts. That&rsquo;s genuinely it.
            </p>
          </div>

          <div className="space-y-5 text-charcoal/70 font-sans text-[17px] leading-[1.9]">
            <p>
              You&rsquo;re a woman with a full life who travels, eats out, and sits at dinners
              where the point is not the food.
            </p>
            <p>Restriction is not the goal here and it never will be.</p>
            <p>
              The goal is to build enough of a foundation throughout the week that the meals that
              aren&rsquo;t perfectly on plan don&rsquo;t derail anything.
            </p>
          </div>
        </div>
      </section>

      
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5 lg:order-1">
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm sticky top-28">
                <Image
                  src="/Madison-249.webp"
                  alt="Madison"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>
            <div className="lg:col-span-7 lg:order-2">
              <p className="font-serif italic text-midnight text-2xl sm:text-3xl leading-[1.4] mb-8">
                One dinner out doesn&rsquo;t undo a week.<br />
                One holiday doesn&rsquo;t undo a month.
              </p>
              <p className="text-charcoal/70 font-sans text-[17px] leading-[1.9]">
                The women who make consistent progress are not the ones who never slip. They&rsquo;re
                the ones who don&rsquo;t let a slip become a spiral.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 04: Eating on the Road ── */}
      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-6">
          <SectionLabel num="04" title="Eating on the Road" />

          <div className="space-y-5 text-charcoal/70 font-sans text-[17px] leading-[1.9] mb-10">
            <p>This is where most women come unstuck.</p>
            <p>
              Which makes sense, because eating well while travelling genuinely requires more
              thought than eating at home.
            </p>
            <p>Protein is the hardest macro to hit when you&rsquo;re moving around and the most important one to protect.</p>
            <p>
              Before you travel, spend two minutes thinking about where your protein is coming from.
              Greek yoghurt, hard boiled eggs, smoked salmon, rotisserie chicken, eggs at breakfast,
              grilled fish or meat when you eat out. Available in almost every city in the world.
              Your anchors when everything else is unpredictable.
            </p>
          </div>

          <div className="bg-bark/5 border-l-2 border-bark/30 pl-5 pr-5 py-6 rounded-sm mb-10">
            <p className="text-bark text-[10px] font-medium tracking-[0.2em] uppercase mb-4">Pack before you go</p>
            <div className="space-y-4 text-charcoal/70 font-sans text-[16px] leading-[1.9]">
              <p>
                On travel days especially, you&rsquo;re at the mercy of airports, motorway service
                stations, and whatever happens to be near your hotel.
              </p>
              <p>
                I always leave with a small kit: jerky, a couple of single-serve protein powder
                sachets or bars, and usually some fruit to keep me full and energised throughout the day.
              </p>
              <p>
                It takes five minutes to pack and it changes the whole experience. Arriving fuelled
                rather than depleted makes everything else easier.
              </p>
            </div>
          </div>

          <div className="space-y-5 text-charcoal/70 font-sans text-[17px] leading-[1.9]">
            <p>
              When you&rsquo;re eating at restaurants, order something with a solid protein source,
              ask for extra vegetables if the dish is light on them, and enjoy the meal.
            </p>
            <p>
              Most places will accommodate simple requests without any drama. You are allowed to
              ask for what you need without making it a whole thing.
            </p>
            <p>Alcohol is part of life and I am not here to tell you not to drink.</p>
            <p>
              What I will say is that it affects your sleep quality, your recovery, your hunger
              signals the next day, and your ability to make good decisions in the hours after.
              None of that means you can&rsquo;t have a glass of wine at dinner. It just means
              it&rsquo;s worth being honest with yourself about how much and how often.
            </p>
            <p>
              When everything goes sideways, and sometimes it will, the goal is to find the most
              supportive option available and move on. A tough travel week followed by a solid week
              at home is just a normal month.
            </p>
          </div>
        </div>
      </section>

      {/* ── Section 05: What This Actually Looks Like ── */}
      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-6">
          <SectionLabel num="05" title="What This Actually Looks Like" />
          <p className="text-charcoal/70 font-sans text-[17px] leading-[1.9] mb-5">
            The structure of your day stays the same regardless of your goal.
          </p>
          <p className="text-charcoal/70 font-sans text-[17px] leading-[1.9]">
            What changes based on your custom macros is portion sizes, not the framework itself.
            Here are three versions depending on when you train.
          </p>
        </div>
      </section>

      {/* ── Schedule cards ── */}
      <section className="pb-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            <ScheduleCard title="Morning training" items={MORNING_SCHEDULE} />
            <ScheduleCard title="Lunchtime training" items={LUNCHTIME_SCHEDULE} />
            <ScheduleCard title="Evening training" items={EVENING_SCHEDULE} />
          </div>
        </div>
      </section>

      {/* ── Notes ── */}
      <section className="pb-28">
        <div className="max-w-3xl mx-auto px-6">
          <div className="border border-bark/10 rounded-sm px-6 py-6 space-y-4">
            <p className="text-bark text-[10px] font-medium tracking-[0.2em] uppercase mb-2">Worth noting</p>
            <p className="text-charcoal/65 font-sans text-[15px] leading-[1.85]">
              The shake is a practical tool, not a necessity. If you&rsquo;d rather eat a meal
              after training, do that. The goal is just to get protein in.
            </p>
            <p className="text-charcoal/65 font-sans text-[15px] leading-[1.85]">
              The snack is there because it matters, not as an optional extra you skip when
              you&rsquo;re busy.
            </p>
          </div>
        </div>
      </section>

    </main>
  )
}

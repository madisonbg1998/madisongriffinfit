'use client'

import Image from 'next/image'

const topics = [
  {
    title: 'Why Your Energy Levels Are a Training Problem, Not a Sleep Problem',
    gradient: 'from-bark/10 to-sand/10',
  },
  {
    title: 'The Real Reason Your Results Don\u2019t Hold When Life Gets Busy',
    gradient: 'from-sage/10 to-bark/10',
  },
  {
    title: 'What Training to Failure Actually Feels Like (And Why Most Women Never Get There)',
    gradient: 'from-sand/10 to-cream',
  },
  {
    title: 'How to Build a Body That Travels With You Instead of Against You',
    gradient: 'from-bark/10 to-sage/10',
  },
  {
    title: 'The Business Case for Actually Taking Care of Your Body',
    gradient: 'from-sage/10 to-sand/10',
  },
  {
    title: 'What Body Literacy Is and Why It’s the Missing Piece in Every Program You’ve Tried',
    gradient: 'from-bark/10 to-cream',
  },
]

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <Image
          src="/Madison-201.webp"
          alt="Madison Griffin peaceful close-up"
          fill
          className="object-cover object-top"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-midnight/50" />
        <div className="relative z-10 text-center px-6">
          <p className="text-sand text-[11px] font-medium tracking-[0.25em] uppercase mb-5">
            Thoughts & Insights
          </p>
          <h1 className="font-serif text-cream text-5xl sm:text-6xl lg:text-7xl font-medium">
            The Journal
          </h1>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="bg-cream py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-10 text-center">
          <div className="inline-flex items-center gap-2 bg-sand/15 text-bark text-[11px] font-medium tracking-[0.2em] uppercase px-5 py-2 rounded-full mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-sand animate-pulse" />
            Coming Soon
          </div>
          <p className="text-charcoal/70 text-lg sm:text-xl leading-relaxed max-w-xl mx-auto">
            Insights on strength, nutrition, and why your body is the most underrated asset in your business and your life.
          </p>
        </div>
      </section>

      {/* Topic Preview */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-center mb-14 sm:mb-18">
            <p className="text-bark text-[11px] font-medium tracking-[0.25em] uppercase mb-4">
              On the Horizon
            </p>
            <h2 className="font-serif text-midnight text-3xl sm:text-4xl font-medium">
              What to Expect
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {topics.map((topic, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${topic.gradient} rounded-lg p-8 sm:p-10 border border-bark/6 flex items-end min-h-[200px] hover:shadow-[0_4px_24px_rgba(0,0,0,0.04)] transition-shadow duration-500`}
              >
                <h3 className="font-serif text-midnight text-xl sm:text-2xl font-medium leading-snug">
                  {topic.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-cream py-20 sm:py-28">
        <div className="mx-auto max-w-xl px-6 lg:px-10 text-center">
          <h2 className="font-serif text-midnight text-3xl sm:text-4xl font-medium mb-4">
            Be the First to Know
          </h2>
          <p className="text-charcoal/70 text-base leading-relaxed mb-10">
            Get notified when new articles drop. No spam, just real insights
            delivered to your inbox.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row gap-3"
          >
            <input
              type="email"
              placeholder="Your email address"
              required
              className="flex-1 bg-white border border-bark/20 text-midnight placeholder:text-charcoal/35 text-sm px-5 py-3.5 rounded-sm focus:outline-none focus:ring-2 focus:ring-bark/20 focus:border-bark transition-all duration-300"
            />
            <button
              type="submit"
              className="bg-bark text-cream text-[11px] font-medium tracking-[0.18em] uppercase px-8 py-3.5 rounded-sm hover:bg-bark/90 transition-colors duration-300 whitespace-nowrap"
            >
              Notify Me
            </button>
          </form>
        </div>
      </section>
    </>
  )
}

import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Results',
  description:
    'Real women, real results. See what happens when you build a body designed to last — not just look good for a photo.',
  openGraph: {
    images: [{ url: '/Madison-83.webp', width: 1200, height: 630, alt: 'Client Results — Madison Griffin Fit' }],
  },
}

const benefits = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: 'Lost fat and built lean muscle',
    description: 'Real body recomposition — not just weight loss.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
      </svg>
    ),
    title: 'Feel strong, athletic, and feminine',
    description: 'A physique that looks as powerful as it feels.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1.001A3.75 3.75 0 0012 18z" />
      </svg>
    ),
    title: 'Have a defined waist and strong glutes',
    description: 'Sculpted, proportional physique built through progressive training.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
      </svg>
    ),
    title: 'Walk into any gym knowing exactly what to do',
    description: 'Confidence in your training, anywhere in the world.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
      </svg>
    ),
    title: 'Fitness that works when you travel',
    description: 'Systems designed for real life, not a perfect schedule.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Consistency that doesn't require perfection",
    description: 'Sustainable habits that hold up in every season.',
  },
]

const testimonials = [
  {
    quote:
      "I've tried so many programs before, but this is the first time I actually feel like the results are mine to keep. I travel constantly for work and nothing has ever stuck like this.",
    name: 'Sarah K.',
    timeframe: '6-month client',
  },
  {
    quote:
      "Madison helped me completely rewrite my relationship with food and fitness. I'm stronger than I've ever been, I eat without guilt, and I finally feel at home in my body.",
    name: 'Elena M.',
    timeframe: '8-month client',
  },
  {
    quote:
      "For the first time in my life, I'm not starting over every Monday. The Body Unmuted Method gave me a foundation that doesn't crumble when life gets chaotic.",
    name: 'Jordan L.',
    timeframe: '4-month client',
  },
]

const galleryImages = [
  { src: '/Madison-88.webp', alt: 'Athletic physique, abs showing', className: 'col-span-2 row-span-2' },
  { src: '/Madison-281.webp', alt: 'On the beach with arm raised', className: 'col-span-1 row-span-1' },
  { src: '/Madison-283.webp', alt: 'Dancing on the beach', className: 'col-span-1 row-span-2' },
  { src: '/Madison-29.webp', alt: 'On a mountain trail', className: 'col-span-1 row-span-1' },
]

export default function ResultsPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        <Image
          src="/Madison-83.webp"
          alt="Madison laughing and running freely"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-midnight/55" />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p className="text-sand text-[11px] font-sans font-medium tracking-[0.3em] uppercase mb-6">
            Client Results
          </p>
          <h1 className="font-serif text-cream text-5xl md:text-7xl lg:text-8xl leading-[1.05] mb-8">
            Real Women. Real Results.
          </h1>
          <p className="text-cream/80 font-sans text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Bodies built to last&nbsp;&mdash; not just look good for a photo.
          </p>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="bg-cream py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 text-center">
            {[
              { number: '50+', label: 'Women Coached' },
              { number: '15+', label: 'Countries' },
              { number: '1', label: 'Method That Works' },
            ].map((stat, i) => (
              <div key={i}>
                <p className="font-serif text-sand text-6xl md:text-7xl lg:text-8xl leading-none mb-3">
                  {stat.number}
                </p>
                <p className="text-charcoal/60 font-sans text-[13px] font-medium tracking-[0.2em] uppercase">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What Clients Experience ── */}
      <section className="bg-cream pb-24 md:pb-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sand text-[11px] font-sans font-medium tracking-[0.3em] uppercase mb-6">
              What You Can Expect
            </p>
            <h2 className="font-serif text-midnight text-3xl md:text-5xl leading-[1.15]">
              What clients experience
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, i) => (
              <div
                key={i}
                className="group p-8 rounded-sm border border-charcoal/[0.06] hover:border-sand/30 transition-colors duration-300"
              >
                <div className="text-sand mb-5">{benefit.icon}</div>
                <h3 className="font-serif text-midnight text-xl mb-3">{benefit.title}</h3>
                <p className="text-charcoal/60 font-sans text-[15px] leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Photo Gallery ── */}
      <section className="bg-cream pb-24 md:pb-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sand text-[11px] font-sans font-medium tracking-[0.3em] uppercase mb-6">
              The Lifestyle
            </p>
            <h2 className="font-serif text-midnight text-3xl md:text-5xl leading-[1.15]">
              Built for the life you actually live
            </h2>
          </div>
          <div className="grid grid-cols-3 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[280px]">
            {galleryImages.map((img, i) => (
              <div key={i} className={`relative overflow-hidden rounded-sm ${img.className}`}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 33vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="bg-midnight py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sand text-[11px] font-sans font-medium tracking-[0.3em] uppercase mb-6">
              In Their Words
            </p>
            <h2 className="font-serif text-cream text-3xl md:text-5xl leading-[1.15]">
              What clients are saying
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="relative p-8 md:p-10 rounded-sm bg-white/[0.04] backdrop-blur-md border border-white/[0.08]"
              >
                {/* Decorative quote mark */}
                <span className="absolute top-6 right-8 font-serif text-sand/20 text-7xl leading-none select-none">
                  &ldquo;
                </span>
                <p className="text-cream/80 font-sans text-[15px] leading-[1.75] mb-8 relative z-10">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="border-t border-white/[0.08] pt-5">
                  <p className="text-cream font-sans text-sm font-medium">{t.name}</p>
                  <p className="text-cream/40 font-sans text-xs tracking-wide uppercase mt-1">
                    {t.timeframe}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-bark py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-cream text-3xl md:text-4xl mb-6">
            Ready to build a body that lasts?
          </h2>
          <p className="text-cream/70 font-sans text-lg mb-10 max-w-xl mx-auto">
            Apply for coaching and start building results you never have to start over on.
          </p>
          <Link
            href="/apply"
            className="inline-flex items-center bg-cream text-bark text-[12px] font-sans font-medium tracking-[0.2em] uppercase px-10 py-4 rounded-sm hover:bg-cream/90 transition-colors duration-300"
          >
            Apply for Coaching
          </Link>
        </div>
      </section>
    </>
  )
}

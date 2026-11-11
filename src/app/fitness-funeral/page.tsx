import type { Metadata } from 'next'
import { bodoni, script } from '../fonts'

// Tickets are sold through Luma
const RSVP_URL = 'https://luma.com/hzpdkn85'

export const metadata: Metadata = {
  title: 'You Are Summoned to a Fitness Funeral',
  description: 'A farewell service & Sweat Equity launch celebration.',
  openGraph: {
    title: 'You are hereby summoned to a fitness funeral.',
    description: 'A farewell service & Sweat Equity launch celebration.',
  },
}

const CREAM = '#f4eee3'
const TAUPE = '#b9ad9a'
const BLACK = '#0a0a0a'

// Pearls per strand, left to right: a loose curtain that dips toward the center
const STRANDS = [4, 3, 6, 7, 8, 6, 5, 7, 9, 8, 11, 9, 10, 8, 7, 9, 10, 8, 6, 7, 5, 3, 4]
const PEARL_GAP = 15
const PEARL_R = 4.4

function PearlGradient({ id }: { id: string }) {
  return (
    <defs>
      <radialGradient id={id} cx="35%" cy="30%" r="75%">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="45%" stopColor="#e9e2d4" />
        <stop offset="100%" stopColor="#8f8676" />
      </radialGradient>
    </defs>
  )
}

function PearlCurtain() {
  const width = 800
  const step = width / STRANDS.length
  const height = Math.max(...STRANDS) * PEARL_GAP + 20
  return (
    <svg aria-hidden viewBox={`0 0 ${width} ${height}`} className="w-full max-w-4xl mx-auto block" preserveAspectRatio="xMidYMin meet">
      <PearlGradient id="pearl" />
      {STRANDS.map((count, i) => {
        const x = step * i + step / 2
        const lastY = 10 + (count - 1) * PEARL_GAP
        return (
          <g key={i}>
            <line x1={x} y1={0} x2={x} y2={lastY} stroke="#9a9182" strokeWidth={0.6} />
            {Array.from({ length: count }, (_, j) => (
              <circle key={j} cx={x} cy={10 + j * PEARL_GAP} r={PEARL_R} fill="url(#pearl)" />
            ))}
          </g>
        )
      })}
    </svg>
  )
}

// Three pearls on a thread, used to break the letter into short passages
function PearlBreak() {
  return (
    <svg aria-hidden viewBox="0 0 120 12" className="block w-24 mx-auto my-14">
      <PearlGradient id="pearl-break" />
      <line x1="0" y1="6" x2="120" y2="6" stroke={`${CREAM}40`} strokeWidth="0.6" />
      {[44, 60, 76].map((cx) => (
        <circle key={cx} cx={cx} cy="6" r={cx === 60 ? 4.6 : 3.6} fill="url(#pearl-break)" />
      ))}
    </svg>
  )
}

function Rule({ className = '' }: { className?: string }) {
  return <div aria-hidden className={`mx-auto h-px w-28 ${className}`} style={{ backgroundColor: `${CREAM}99` }} />
}

// Key phrase: brighter, slightly heavier ink against the softer body text
function Mark({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-medium" style={{ color: CREAM }}>
      {children}
    </span>
  )
}

// Short standalone line, set apart from the paragraphs around it
function Aside({ children }: { children: React.ReactNode }) {
  return (
    <p className="italic text-center text-[1.3rem] sm:text-[1.45rem] leading-snug max-w-md mx-auto" style={{ color: CREAM }}>
      {children}
    </p>
  )
}

const LABEL = 'font-sans uppercase tracking-[0.32em] text-[11px] sm:text-xs'

export default function FitnessFuneralPage() {
  return (
    <div
      className={`${bodoni.className} min-h-screen pb-24`}
      style={{
        color: `${CREAM}e0`,
        backgroundColor: BLACK,
        backgroundImage: `radial-gradient(ellipse at 50% 30%, #161514 0%, ${BLACK} 65%)`,
      }}
    >
      <PearlCurtain />

      <article className="max-w-2xl mx-auto px-6 sm:px-10">
        <header className="text-center pt-10 sm:pt-14">
          <p className={`${LABEL} mb-7`} style={{ color: TAUPE }}>
            In Loving Memory
          </p>
          <p className="text-xl sm:text-2xl mb-4" style={{ color: CREAM }}>
            You are hereby summoned to a
          </p>
          <h1
            className="font-normal leading-[0.98] tracking-[-0.01em] text-[clamp(4rem,18vw,8rem)] mb-8"
            style={{ color: CREAM }}
          >
            <span className="block">Fitness</span>
            <span className="block">Funeral</span>
          </h1>
          <p className="text-xl sm:text-2xl leading-snug" style={{ color: CREAM }}>
            A Farewell Service &amp;
            <br />
            Sweat Equity Launch Celebration
          </p>
        </header>

        <Rule className="my-14" />

        <div className="max-w-xl mx-auto text-[1.15rem] sm:text-[1.25rem] leading-[1.85] text-pretty">
          {/* The deceased */}
          <section className="space-y-7">
            <p className="italic text-center text-[1.4rem] sm:text-[1.6rem]" style={{ color: CREAM }}>
              Dearly beloved founder,
            </p>
            <p>
              <span className="float-left text-[4.4rem] leading-[0.8] mr-3 mt-1.5" style={{ color: CREAM }}>
                P
              </span>
              lease join us in laying to rest{' '}
              <Mark>“I’ll work on my body when things calm down.”</Mark>
            </p>
            <p>
              She has tragically died in an accident, by <Mark>calendar strangulation</Mark> from three
              upcoming speaking gigs, two flights, and the event you just agreed to host.
            </p>
            <Aside>We did everything we could. You kept booking things.</Aside>
          </section>

          <PearlBreak />

          {/* Also being buried */}
          <section className="space-y-7">
            <p>
              Also being lowered into the ground– the expectation that you’ll{' '}
              <Mark>decline dinner with your dream collaborator</Mark> because your fitness plan had you
              home with some chicken.
            </p>
            <p>
              <Mark>“Just use the hotel gym”</Mark> will serve as pallbearer, provided he can make it before
              your 8 a.m. panel.
            </p>
          </section>

          <PearlBreak />

          {/* Why we gather */}
          <section className="space-y-7">
            <p>
              We’re gathering because <Mark>you actually like the life you’re building.</Mark>
            </p>
            <p>
              You want the speaking gig, the trip, the business, and to{' '}
              <Mark>love how you look in the photos afterward.</Mark>
            </p>
            <p>
              We will observe a moment of silence for the years spent believing you needed{' '}
              <Mark>a quieter calendar</Mark> to have that.
            </p>
          </section>

          <PearlBreak />

          {/* The service */}
          <section className="space-y-7">
            <p>
              We’ll pay our respects to some spectacularly unhelpful advice, then I’ll introduce you to{' '}
              <span className="font-sans uppercase tracking-[0.2em] text-[0.78em]" style={{ color: CREAM }}>
                Sweat Equity
              </span>
              —and show you how we handle{' '}
              <Mark>the flights, full calendars, and last-minute opportunities</Mark> the deceased failed to
              account for.
            </p>
            <p>
              A wake will follow, with wine, cheese, and{' '}
              <Mark>a room full of women founders who move faster than the speed of light.</Mark>
            </p>
            <Aside>
              Please don’t feel obligated to remain sad. We plan on transitioning to happy tears within the
              first 6 seconds of the service.
            </Aside>
          </section>

          {/* Memorial portrait, hotlinked from Giphy with attribution */}
          <figure className="flex flex-col items-center pt-16">
            <div
              className="w-44 h-56 sm:w-52 sm:h-64 rounded-[50%] overflow-hidden"
              style={{ boxShadow: `0 0 0 1px ${CREAM}cc, 0 0 0 7px ${BLACK}, 0 0 0 8px ${CREAM}55` }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://media.giphy.com/media/g8SpAwIpdMcP6xlvDt/giphy.gif"
                alt="Francesca from Bridgerton in black mourning attire, smiling with a glass in hand"
                className="w-full h-full object-cover"
              />
            </div>
            <figcaption className={`${LABEL} !text-[10px] mt-5`} style={{ color: TAUPE }}>
              <a href="https://giphy.com/gifs/bridgerton-franchaela-francesca-g8SpAwIpdMcP6xlvDt" target="_blank" rel="noopener noreferrer">
                via Giphy
              </a>
            </figcaption>
          </figure>

          <p className="text-center text-[1.3rem] sm:text-[1.45rem] leading-snug pt-10" style={{ color: CREAM }}>
            Your presence is requested.
            <br />
            Your old fitness rules have already been notified.
          </p>
        </div>

        <Rule className="my-14" />

        <footer className="text-center">
          <p className="italic text-lg sm:text-xl mb-2">With deepest condolences for the advice,</p>
          <p className={`${script.className} text-6xl sm:text-7xl leading-[1.3] -rotate-3 mb-14`} style={{ color: CREAM }}>
            Madison
          </p>

          <div className="mb-14 space-y-2" style={{ color: CREAM }}>
            <p className={`${LABEL} mb-4`} style={{ color: TAUPE }}>
              The service will be held
            </p>
            <p className="text-2xl sm:text-[1.75rem]">Sunday, the Fifteenth of November</p>
            <p className="text-xl sm:text-[1.35rem]">six o’clock until nine in the evening</p>
            <p className="text-xl sm:text-[1.35rem]">Hillside Farmacy · Austin, Texas</p>
          </div>

          <a
            href={RSVP_URL}
            className="inline-block font-sans uppercase text-xs sm:text-[13px] tracking-[0.28em] px-9 py-4 text-white transition-colors duration-500 hover:bg-[#f4eee3] hover:text-[#0a0a0a]"
            style={{ border: `1px solid ${CREAM}`, outline: `1px solid ${CREAM}55`, outlineOffset: '5px' }}
          >
            Kindly RSVP to the Funeral
          </a>
        </footer>
      </article>
    </div>
  )
}

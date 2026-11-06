import type { Metadata } from 'next'
import { script, garamond, smallCaps } from '../fonts'

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

const INK = '#2a211b'
const GOLD = '#a8875a'
const PAPER = '#f2e9d8'

// Fractal noise used for paper grain and the velvet backdrop
const GRAIN = `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.25  0 0 0 0 0.18  0 0 0 0 0.1  0 0 0 0.55 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>")`

function Flourish({ className = '' }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 220 24" className={className} fill="none" stroke="currentColor" strokeWidth="1">
      <path d="M2 12 H86" />
      <path d="M218 12 H134" />
      <path d="M86 12 C96 2, 104 2, 110 12 C116 22, 124 22, 134 12" />
      <path d="M86 12 C96 22, 104 22, 110 12 C116 2, 124 2, 134 12" />
      <circle cx="110" cy="12" r="2" fill="currentColor" />
      <circle cx="80" cy="12" r="1.2" fill="currentColor" />
      <circle cx="140" cy="12" r="1.2" fill="currentColor" />
    </svg>
  )
}

// Key phrase: heavier ink with a soft gold highlighter wash
function Mark({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="font-semibold box-decoration-clone px-0.5"
      style={{ backgroundImage: `linear-gradient(transparent 58%, ${GOLD}40 58%)` }}
    >
      {children}
    </span>
  )
}

function Corner({ className }: { className: string }) {
  return (
    <svg aria-hidden viewBox="0 0 60 60" className={`absolute w-10 h-10 sm:w-14 sm:h-14 ${className}`} fill="none" stroke={GOLD} strokeWidth="1">
      <path d="M4 56 V12 C4 7, 7 4, 12 4 H56" />
      <path d="M10 56 V18 C10 13, 13 10, 18 10 H56" opacity="0.6" />
      <path d="M18 18 C26 18, 30 22, 30 30 C24 30, 18 26, 18 18 Z" fill={GOLD} fillOpacity="0.25" />
    </svg>
  )
}

export default function FitnessFuneralPage() {
  return (
    <div
      className={`${garamond.className} relative isolate min-h-screen px-4 py-10 sm:py-20`}
      style={{ backgroundColor: '#140d09' }}
    >
      {/* Chocolate satin backdrop, pinned so the card scrolls over it */}
      <div
        aria-hidden
        className="fixed inset-0 -z-10 bg-cover bg-center"
        style={{
          backgroundImage: `radial-gradient(ellipse at center, transparent 35%, rgba(10,6,4,0.7) 100%), linear-gradient(rgba(14,9,6,0.62), rgba(14,9,6,0.62)), ${GRAIN}, url('/chocolate-satin.jpg')`,
          backgroundSize: 'cover, cover, 240px 240px, cover',
        }}
      />
      {/* Mourning card: black band, then ivory paper */}
      <article
        className="relative max-w-2xl mx-auto p-3 sm:p-4 rounded-[3px] shadow-[0_30px_80px_rgba(0,0,0,0.55)]"
        style={{ background: '#1f120b' }}
      >
        <div
          className="relative px-7 sm:px-16 py-14 sm:py-20 rounded-[2px]"
          style={{
            color: INK,
            backgroundColor: PAPER,
            backgroundImage: `radial-gradient(ellipse at 15% 10%, rgba(255,250,238,0.7), transparent 55%), radial-gradient(ellipse at 90% 95%, rgba(176,140,90,0.22), transparent 50%), radial-gradient(ellipse at center, transparent 60%, rgba(140,105,60,0.22) 100%), ${GRAIN}`,
            boxShadow: `inset 0 0 0 1px ${GOLD}66, inset 0 0 0 7px ${PAPER}, inset 0 0 0 8px ${GOLD}40`,
          }}
        >
          <Corner className="top-4 left-4" />
          <Corner className="top-4 right-4 rotate-90" />
          <Corner className="bottom-4 right-4 rotate-180" />
          <Corner className="bottom-4 left-4 -rotate-90" />

          <header className="text-center">
            <p className={`${smallCaps.className} text-sm tracking-[0.35em] mb-6`} style={{ color: GOLD }}>
              In Loving Memory
            </p>
            <p className="italic text-xl sm:text-2xl mb-1">You are hereby summoned to a</p>
            <h1 className={`${script.className} font-normal whitespace-nowrap leading-[1.2] text-[clamp(2.1rem,8.5vw,4.25rem)] mb-4`}>
              Fitness Funeral
            </h1>
            <p className={`${smallCaps.className} text-base sm:text-lg tracking-[0.18em]`}>
              A Farewell Service &amp; Sweat Equity Launch Celebration
            </p>
          </header>

          <Flourish className="w-48 mx-auto my-10" />

          <div className="text-[1.2rem] sm:text-[1.3rem] leading-[1.7] space-y-6 text-pretty">
            <p className="italic text-[1.35rem] sm:text-[1.45rem]">Dearly beloved founder,</p>

            <p>
              <span className="float-left text-[4.6rem] leading-[0.75] font-medium mr-3 mt-2" style={{ color: GOLD }}>
                P
              </span>
              lease join us in laying to rest{' '}
              <Mark>“I’ll work on my body when things calm down.”</Mark> She has tragically died in an
              accident, by <Mark>calendar strangulation</Mark> from three upcoming speaking gigs, two flights,
              and the event you just agreed to host.
            </p>

            <p className="italic text-center">We did everything we could. You kept booking things.</p>

            <p>
              Also being lowered into the ground– the expectation that you’ll{' '}
              <Mark>decline dinner with your dream collaborator</Mark> because your fitness plan had you
              home with some chicken.
            </p>

            <p>
              <Mark>“Just use the hotel gym”</Mark> will serve as pallbearer, provided he can make it before
              your 8 a.m. panel.
            </p>

            <p>
              We’re gathering because <Mark>you actually like the life you’re building.</Mark> You want the
              speaking gig, the trip, the business, and to{' '}
              <Mark>love how you look in the photos afterward.</Mark>
            </p>

            <p>
              We will observe a moment of silence for the years spent believing you needed{' '}
              <Mark>a quieter calendar</Mark> to have that.
            </p>

            <p>
              We’ll pay our respects to some spectacularly unhelpful advice, then I’ll introduce you to{' '}
              <span className={`${smallCaps.className} tracking-wider font-semibold`} style={{ color: GOLD }}>
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

            <p className="italic text-center">
              Please don’t feel obligated to remain sad. We plan on transitioning to happy tears within the
              first 6 seconds of the service.
            </p>

            {/* Memorial portrait, hotlinked from Giphy with attribution */}
            <figure className="flex flex-col items-center pt-2">
              <div
                className="w-44 h-56 sm:w-52 sm:h-64 rounded-[50%] overflow-hidden"
                style={{ boxShadow: `0 0 0 1px ${GOLD}, 0 0 0 6px ${PAPER}, 0 0 0 7px ${GOLD}99, 0 12px 30px rgba(60,40,20,0.35)` }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://media.giphy.com/media/g8SpAwIpdMcP6xlvDt/giphy.gif"
                  alt="Francesca from Bridgerton in black mourning attire, smiling with a glass in hand"
                  className="w-full h-full object-cover sepia-[0.25]"
                />
              </div>
              <figcaption className={`${smallCaps.className} text-[11px] tracking-[0.2em] mt-4`} style={{ color: GOLD }}>
                <a href="https://giphy.com/gifs/bridgerton-franchaela-francesca-g8SpAwIpdMcP6xlvDt" target="_blank" rel="noopener noreferrer">
                  via Giphy
                </a>
              </figcaption>
            </figure>

            <p className="text-center italic pt-2">
              Your presence is requested.
              <br />
              Your old fitness rules have already been notified.
            </p>
          </div>

          <Flourish className="w-48 mx-auto my-10" />

          <footer className="text-center">
            <p className="italic text-xl mb-1">With deepest condolences for the advice,</p>
            <p className={`${script.className} text-5xl sm:text-6xl mb-10`}>Madison</p>

            <div className="mb-10 space-y-1">
              <p className="italic text-lg">The service will be held</p>
              <p className={`${smallCaps.className} text-xl sm:text-2xl tracking-[0.12em] font-semibold`}>
                Sunday, the Fifteenth of November
              </p>
              <p className="italic text-lg">six o’clock until nine in the evening</p>
              <p className={`${smallCaps.className} text-base tracking-[0.18em] pt-1`} style={{ color: GOLD }}>
                Hillside Farmacy · Austin, Texas
              </p>
            </div>

            <a
              href={RSVP_URL}
              className={`${smallCaps.className} inline-block text-base tracking-[0.25em] px-9 py-3.5 text-[#2a211b] transition-colors duration-500 hover:bg-[#2a211b] hover:text-[#f2e9d8]`}
              style={{ border: `1px solid ${INK}`, outline: `1px solid ${GOLD}80`, outlineOffset: '4px' }}
            >
              Kindly RSVP to the Funeral
            </a>
          </footer>
        </div>
      </article>
    </div>
  )
}

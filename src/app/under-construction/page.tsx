import type { Metadata } from 'next'
import { Archivo_Black, Fredoka, Space_Mono } from 'next/font/google'

const display = Archivo_Black({ subsets: ['latin'], weight: '400' })
const rounded = Fredoka({ subsets: ['latin'], weight: ['500', '700'] })
const mono = Space_Mono({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
  title: 'Coming Soon',
  robots: { index: false, follow: false },
}

const CHARTREUSE = '#B4DC5D'
const LIME = '#E3FD75'
const FOREST = '#023F35'
const BLUE = '#1F43F7'

export default function UnderConstructionPage() {
  return (
    <div
      className="relative min-h-screen overflow-hidden flex flex-col"
      style={{ background: CHARTREUSE, color: FOREST }}
    >
      {/* Floating stickers */}
      <span
        aria-hidden
        className={`${rounded.className} absolute top-[12%] right-[8%] hidden sm:block text-lg font-bold px-5 py-2 rounded-full border-4 border-white rotate-12 shadow-[0_6px_0_rgba(2,63,53,0.25)]`}
        style={{ background: BLUE, color: LIME }}
      >
        new era ✦
      </span>
      <span
        aria-hidden
        className={`${rounded.className} absolute bottom-[14%] left-[6%] hidden sm:block text-lg font-bold px-5 py-2 rounded-full border-4 border-white -rotate-6 shadow-[0_6px_0_rgba(2,63,53,0.25)]`}
        style={{ background: LIME, color: FOREST }}
      >
        hard hats on
      </span>
      <span
        aria-hidden
        className="absolute -top-16 -left-16 w-56 h-56 rounded-full opacity-60"
        style={{ background: LIME }}
      />
      <span
        aria-hidden
        className="absolute -bottom-20 -right-20 w-40 h-40 sm:-bottom-24 sm:w-72 sm:h-72 rounded-[3rem] rotate-12"
        style={{ background: FOREST }}
      />

      <div className="relative flex-1 flex flex-col items-center justify-center text-center px-6 py-20">
        <p className={`${mono.className} text-xs tracking-[0.2em] uppercase mb-8`}>
          Madison Griffin Fit
        </p>

        <span
          className={`${rounded.className} inline-block text-base sm:text-lg font-bold px-5 py-1.5 rounded-full border-4 border-white -rotate-3 mb-8`}
          style={{ background: BLUE, color: LIME }}
        >
          🚧 under construction 🚧
        </span>

        <h1
          className={`${display.className} uppercase leading-[0.9] tracking-tight text-[clamp(3rem,11vw,8rem)] mb-8`}
        >
          Something
          <br />
          <span style={{ color: BLUE }}>new</span> is
          <br />
          coming
        </h1>

        <p className={`${rounded.className} text-xl sm:text-2xl font-medium max-w-md mb-10`}>
          The site is getting a glow up. Come hang out on Instagram while I build it!
        </p>

        <a
          href="https://www.instagram.com/madisongriffinfitness/"
          target="_blank"
          rel="noopener noreferrer"
          className={`${rounded.className} inline-block text-lg font-bold px-8 py-3 rounded-full border-4 border-white shadow-[0_6px_0_rgba(2,63,53,0.35)] hover:-translate-y-0.5 hover:rotate-[-2deg] active:translate-y-1 active:shadow-none transition-all duration-200`}
          style={{ background: FOREST, color: LIME }}
        >
          Follow along →
        </a>
      </div>
    </div>
  )
}

import type { Metadata } from 'next'
import { doblegh, geistMono } from '../fonts'

export const metadata: Metadata = {
  title: 'Coming Soon',
  robots: { index: false, follow: false },
}

export default function UnderConstructionPage() {
  return (
    <main className={`${geistMono.className} flex min-h-screen flex-col items-center justify-between bg-black px-6 py-10 text-center text-xs text-white/50`}>
      <p>Madison Griffin Fit</p>

      <div>
        <h1 className={`${doblegh.className} text-2xl font-medium text-white sm:text-3xl`}>Something new is coming</h1>
        <p className="mx-auto mt-5 max-w-xs leading-relaxed">The site is getting a glow up. Come hang out on Instagram while I build it!</p>
        <a
          href="https://www.instagram.com/madisongriffinfitness/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block text-white underline underline-offset-4 transition-opacity duration-300 hover:opacity-60"
        >
          Follow along
        </a>
      </div>

      <p>Under construction</p>
    </main>
  )
}

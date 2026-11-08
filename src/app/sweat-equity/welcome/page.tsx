import type { Metadata } from 'next'
import Image from 'next/image'
import { doblegh, elza, geistMono } from '../../fonts'

export const metadata: Metadata = {
  title: { absolute: 'Welcome | Sweat Equity' },
  robots: { index: false, follow: false },
}

export default function SweatEquityWelcomePage() {
  return (
    <main className={`${doblegh.className} flex min-h-screen flex-col items-center justify-center bg-[#E4FF72] px-6 py-16 text-center text-[#004238]`}>
      <Image src="/sweat-equity/logo-pine.svg" alt="Sweat Equity" width={170} height={57} priority className="h-auto w-[170px]" />
      <p className={`${geistMono.className} mt-12 text-sm`}>Payment Received</p>
      <h1 className={`${elza.className} mt-4 max-w-3xl text-5xl uppercase leading-none sm:text-7xl`}>Your shares are claimed.</h1>
      <p className="mt-6 max-w-md text-lg leading-relaxed">Welcome to Sweat Equity. Your welcome is waiting for you in your inbox.</p>
    </main>
  )
}

import type { Metadata } from 'next'
import Image from 'next/image'
import { doblegh, elza } from '../../../fonts'

export const metadata: Metadata = {
  title: 'Check-In Submitted | Sweat Equity',
  robots: { index: false, follow: false },
}

export default function CheckInSubmittedPage() {
  return (
    <main className={`${doblegh.className} flex min-h-screen flex-col items-center justify-center bg-[#E4FF72] px-6 py-16 text-center text-[#004238]`}>
      <Image src="/sweat-equity/logo-pine.svg" alt="Sweat Equity" width={170} height={57} priority className="h-auto w-[170px]" />
      <h1 className={`${elza.className} mt-12 max-w-3xl text-5xl uppercase leading-none sm:text-7xl`}>Check-in received!</h1>

      <div className="mt-6 max-w-md space-y-2 text-lg leading-relaxed">
        <p>Your Loom will be with you by Monday!</p>
        <p>You know where I am if anything comes up before then.</p>
      </div>

      <p className="mt-10 text-2xl font-bold">xx Madison</p>
    </main>
  )
}

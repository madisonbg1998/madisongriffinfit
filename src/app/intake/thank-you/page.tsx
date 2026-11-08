import type { Metadata } from 'next'
import Image from 'next/image'
import { doblegh, elza, geistMono } from '../../fonts'

export const metadata: Metadata = {
  title: 'Thank You | Madison Griffin Fit',
  robots: { index: false, follow: false },
}

export default function IntakeThankYouPage() {
  return (
    <main className={`${doblegh.className} flex min-h-screen flex-col items-center justify-center bg-[#E4FF72] px-6 py-16 text-center text-[#004238]`}>
      <Image src="/sweat-equity/logo-pine.svg" alt="Sweat Equity" width={170} height={57} priority className="h-auto w-[170px]" />
      <p className={`${geistMono.className} mt-12 text-sm`}>Client Intake</p>
      <h1 className={`${elza.className} mt-4 max-w-3xl text-5xl uppercase leading-none sm:text-7xl`}>You&rsquo;re all in.</h1>
      <div className="mt-6 max-w-lg space-y-5 text-lg leading-relaxed">
        <p>
          Thank you for filling that in. I know it wasn&rsquo;t a quick form, and the fact
          that you took the time to answer honestly tells me everything I need to know
          about the kind of client you are.
        </p>
        <p>
          Your start date is locked in. Get some good sleep, drink your water, and get
          ready. We&rsquo;re about to do something really good.
        </p>
      </div>
    </main>
  )
}

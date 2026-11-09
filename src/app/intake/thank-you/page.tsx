import type { Metadata } from 'next'
import Image from 'next/image'
import { doblegh, elza, geistMono } from '../../fonts'

const SCHEDULE_CALL_URL = 'https://calendar.app.google/myySAkhNztGR19uf6'

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
        <p className="font-bold">
          Last step: grab your strategy call. Pick a time on my calendar so we can go over everything together.
        </p>
      </div>
      <a
        href={SCHEDULE_CALL_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`${geistMono.className} mt-8 inline-block rounded-full bg-[#004238] px-8 py-4 text-sm text-[#FCF8F5] transition-colors duration-300 hover:bg-[#1E0F10] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#004238]/25`}
      >
        Book Your Strategy Call
      </a>
    </main>
  )
}

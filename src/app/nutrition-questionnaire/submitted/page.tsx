import type { Metadata } from 'next'
import Image from 'next/image'
import { doblegh, elza } from '../../fonts'

export const metadata: Metadata = {
  title: 'Questionnaire Received | Sweat Equity',
  robots: { index: false, follow: false },
}

export default function NutritionQuestionnaireSubmittedPage() {
  return (
    <main className={`${doblegh.className} flex min-h-screen flex-col items-center justify-center bg-[#E4FF72] px-6 py-16 text-center text-[#004238]`}>
      <Image src="/sweat-equity/logo-pine.svg" alt="Sweat Equity" width={170} height={57} priority className="h-auto w-[170px]" />
      <h1 className={`${elza.className} mt-12 max-w-3xl text-5xl uppercase leading-none sm:text-7xl`}>Got it, thank you!</h1>
      <p className="mt-6 max-w-md text-lg leading-relaxed">I&rsquo;ll go through your answers and be in touch soon.</p>
      <p className="mt-10 text-2xl font-bold">xx Madison</p>
    </main>
  )
}

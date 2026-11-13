import type { Metadata } from 'next'
import Image from 'next/image'
import { doblegh, elza, geistMono } from '../../fonts'
import { addToKitSequence, KIT_SEQUENCES } from '@/lib/kit'

export const metadata: Metadata = {
  title: { absolute: 'Welcome | Sweat Equity' },
  robots: { index: false, follow: false },
}

const WORKSPACE_SLUG = 'madisongriffinfitcom'

// Confirms the Stripe session was paid, then adds the buyer to the Kit welcome sequence.
async function enrollPaidBuyer(sessionId: string, firstName: string) {
  const kitApiKey = process.env.CONVERTKIT_API_KEY
  if (!kitApiKey) {
    console.error('CONVERTKIT_API_KEY not configured — Sweat Equity welcome email not sent')
    return
  }
  if (!/^cs_(live|test)_\w+$/.test(sessionId)) return

  const baseUrl = process.env.ADHARA_BASE_URL || 'https://api.adharaweb.com'
  const statusRes = await fetch(`${baseUrl}/api/v1/public/checkout/${WORKSPACE_SLUG}/checkout-session/${sessionId}/status`, {
    cache: 'no-store',
  })
  if (!statusRes.ok) {
    console.error('Sweat Equity payment check failed:', statusRes.status, await statusRes.text())
    return
  }
  const { payment_status: paymentStatus, customer_email: email } = await statusRes.json()
  // "no_payment_required" is a $0 checkout (100%-off code); the subscription is still created
  if ((paymentStatus !== 'paid' && paymentStatus !== 'no_payment_required') || !email) return

  await addToKitSequence(KIT_SEQUENCES.sweatEquityWelcome, email, firstName || undefined)
}

export default async function SweatEquityWelcomePage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string; first_name?: string }>
}) {
  const { session_id: sessionId, first_name: firstName } = await searchParams

  if (typeof sessionId === 'string') {
    // A problem sending the email must never break the buyer's welcome page.
    await enrollPaidBuyer(sessionId, typeof firstName === 'string' ? firstName.trim().slice(0, 50) : '').catch((error) => {
      console.error('Sweat Equity welcome enrollment error:', error)
    })
  }

  return (
    <main className={`${doblegh.className} flex min-h-screen flex-col items-center justify-center bg-[#E4FF72] px-6 py-16 text-center text-[#004238]`}>
      <Image src="/sweat-equity/logo-pine.svg" alt="Sweat Equity" width={170} height={57} priority className="h-auto w-[170px]" />
      <p className={`${geistMono.className} mt-12 text-sm`}>Payment Received</p>
      <h1 className={`${elza.className} mt-4 max-w-3xl text-5xl uppercase leading-none sm:text-7xl`}>Your shares are claimed.</h1>
      <p className="mt-6 max-w-md text-lg leading-relaxed">Welcome to Sweat Equity. Your welcome is waiting for you in your inbox.</p>
    </main>
  )
}

'use client'

import { type FormEvent, useState } from 'react'
import Image from 'next/image'
import { doblegh, elza, geistMono } from '../../fonts'

export default function SweatEquityCheckoutPage() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle')
  const [firstName, setFirstName] = useState('')

  async function startCheckout(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/sweat-equity-checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName }),
      })
      const data = await res.json()
      if (!res.ok || !data.checkoutUrl) throw new Error(data.error)
      window.location.href = data.checkoutUrl
    } catch {
      setStatus('error')
    }
  }

  return (
    <main className={`${doblegh.className} relative min-h-screen overflow-hidden bg-[#004238] text-[#FCF8F5]`}>
      <Image src="/sweat-equity/pattern-pine.jpg" alt="" fill priority sizes="100vw" className="object-cover" />

      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-8 md:px-10">
        <Image src="/sweat-equity/logo-lime.svg" alt="Sweat Equity" width={150} height={50} priority className="h-auto w-[130px] md:w-[150px]" />

        <div className="grid flex-1 items-center gap-10 py-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
          <section>
            <p className={`${geistMono.className} text-xs text-[#C7D2FF] md:text-sm`}>Sweat Equity - For The On-The-Go Woman</p>
            <h1 className={`${elza.className} mt-5 text-[2.75rem] uppercase leading-none text-[#E4FF72] sm:text-6xl`}>
              Fitness for the woman with no off season.
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed md:text-lg">
              A personalized fitness program for on-the-go women where hectic is the baseline.
            </p>
          </section>

          <section className="rounded-2xl bg-[#FCF8F5] p-7 text-[#004238] shadow-2xl md:p-9">
            <div className="flex items-center gap-4">
              <h2 className={`${geistMono.className} text-sm`}>Your Order</h2>
              <span aria-hidden className="h-px flex-1 bg-[#FF5E3E]" />
            </div>

            <div className="mt-7 flex items-start justify-between gap-4">
              <div>
                <p className="text-xl font-bold md:text-2xl">Sweat Equity</p>
                <p className="mt-1 text-sm">Monthly membership</p>
              </div>
              <p className={`${elza.className} text-3xl md:text-4xl`}>$750</p>
            </div>

            <dl className={`${geistMono.className} mt-7 space-y-3 border-t border-[#004238]/15 pt-5 text-sm`}>
              <div className="flex justify-between gap-4">
                <dt>Billed</dt>
                <dd>Monthly</dd>
              </div>
              <div className="flex justify-between gap-4 font-bold">
                <dt>Due today</dt>
                <dd>$750.00 USD</dd>
              </div>
            </dl>

            <form onSubmit={startCheckout} className="mt-7">
              <label htmlFor="first-name" className={`${geistMono.className} block text-sm`}>First Name</label>
              <input
                id="first-name"
                name="firstName"
                type="text"
                autoComplete="given-name"
                required
                maxLength={50}
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
                className="mt-2 w-full rounded-lg border border-[#004238]/25 bg-white px-4 py-3 text-base text-[#1E0F10] transition-all duration-300 focus:border-[#004238] focus:outline-none focus:ring-2 focus:ring-[#004238]/20"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className={`${geistMono.className} mt-4 w-full cursor-pointer rounded-full bg-[#004238] px-8 py-4 text-sm text-[#FCF8F5] transition-colors duration-300 hover:bg-[#1E0F10] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#C7D2FF] disabled:cursor-wait disabled:opacity-70`}
              >
                {status === 'loading' ? 'One Moment...' : 'Claim My Shares'}
              </button>
            </form>

            <div aria-live="polite">
              {status === 'error' && (
                <p className="mt-4 text-center text-sm font-bold text-[#C5381C]">
                  Checkout isn&rsquo;t available right now. You have not been charged. Please try again shortly.
                </p>
              )}
            </div>

            <p className="mt-5 text-center text-xs leading-relaxed text-[#004238]/75">
              You&rsquo;ll be charged $750 today and $750 every month after until you cancel. Payment is securely processed by Stripe.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}

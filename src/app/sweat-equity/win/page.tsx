'use client'

import { type FormEvent, useState } from 'react'
import Image from 'next/image'
import { doblegh, elza, geistMono } from '../../fonts'

const FIELDS = [
  { name: 'fullName', label: 'Name', type: 'text', autoComplete: 'name', placeholder: '' },
  { name: 'email', label: 'Email', type: 'email', autoComplete: 'email', placeholder: '' },
  { name: 'instagram', label: 'Instagram', type: 'text', autoComplete: 'off', placeholder: '@yourhandle' },
] as const

type FieldName = (typeof FIELDS)[number]['name']

export default function SweatEquityWinPage() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'error' | 'done'>('idle')
  const [values, setValues] = useState<Record<FieldName, string>>({ fullName: '', email: '', instagram: '' })
  const [emailOptIn, setEmailOptIn] = useState(false)

  async function enter(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/sweat-equity-giveaway', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...values, emailOptIn }),
      })
      if (!res.ok) throw new Error()
      setStatus('done')
    } catch {
      setStatus('error')
    }
  }

  return (
    <main className={`${doblegh.className} relative min-h-screen overflow-hidden bg-[#FF5E3E] text-[#FCF8F5]`}>
      <Image src="/sweat-equity/pattern-tangerine.jpg" alt="" fill priority sizes="100vw" className="object-cover" />

      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-8 md:px-10">
        <Image src="/sweat-equity/logo-lime.svg" alt="Sweat Equity" width={150} height={50} priority className="h-auto w-[130px] md:w-[150px]" />

        <div className="grid flex-1 items-center gap-10 py-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
          <section>
            <p className={`${geistMono.className} text-xs md:text-sm`}>Sweat Equity Giveaway</p>
            <h1 className={`${elza.className} mt-5 text-[2.75rem] uppercase leading-none text-[#C7D2FF] sm:text-6xl`}>
              Win a free month of Sweat Equity.
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed md:text-lg">
              A personalized fitness program for on-the-go women where hectic is the baseline.
              Enter for a chance to get your first month on me, a{' '}
              <span className="rounded-sm bg-[#E4FF72] px-1.5 font-bold text-[#004238]">$750 value</span>.
            </p>
          </section>

          <section className="rounded-2xl bg-[#FCF8F5] p-7 text-[#1E0F10] shadow-2xl md:p-9">
            {status === 'done' ? (
              <div className="py-6 text-center" aria-live="polite">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#FF5E3E]">
                  <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="#FCF8F5" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                </div>
                <h2 className={`${elza.className} mt-6 text-4xl uppercase leading-none`}>You&rsquo;re in.</h2>
                <p className="mt-4 text-base leading-relaxed">
                  Keep an eye on your inbox and your DMs. If you win, that&rsquo;s where I&rsquo;ll reach you.
                </p>
              </div>
            ) : (
              <>
                <div className="flex items-center gap-4">
                  <h2 className={`${geistMono.className} text-sm`}>Enter To Win</h2>
                  <span aria-hidden className="h-px flex-1 bg-[#E4FF72]" />
                </div>

                <form onSubmit={enter} className="mt-7 space-y-5">
                  {FIELDS.map((field) => (
                    <div key={field.name}>
                      <label htmlFor={field.name} className={`${geistMono.className} block text-sm`}>{field.label}</label>
                      <input
                        id={field.name}
                        name={field.name}
                        type={field.type}
                        autoComplete={field.autoComplete}
                        placeholder={field.placeholder}
                        required
                        maxLength={100}
                        value={values[field.name]}
                        onChange={(event) => setValues((prev) => ({ ...prev, [field.name]: event.target.value }))}
                        className="mt-2 w-full rounded-lg border border-[#1E0F10]/25 bg-white px-4 py-3 text-base text-[#1E0F10] placeholder:text-[#1E0F10]/35 transition-all duration-300 focus:border-[#1E0F10] focus:outline-none focus:ring-2 focus:ring-[#1E0F10]/20"
                      />
                    </div>
                  ))}
                  <label className="flex cursor-pointer items-start gap-3 text-sm leading-snug">
                    <input
                      type="checkbox"
                      name="emailOptIn"
                      checked={emailOptIn}
                      onChange={(event) => setEmailOptIn(event.target.checked)}
                      className="mt-0.5 h-5 w-5 shrink-0 cursor-pointer accent-[#FF5E3E]"
                    />
                    <span>
                      Yes, Madison can email me fitness tips, offers and Sweat Equity updates. I can unsubscribe
                      anytime.
                    </span>
                  </label>
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className={`${geistMono.className} w-full cursor-pointer rounded-full bg-[#004238] px-8 py-4 text-sm text-[#FCF8F5] transition-colors duration-300 hover:bg-[#1E0F10] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#C7D2FF] disabled:cursor-wait disabled:opacity-70`}
                  >
                    {status === 'loading' ? 'One Moment...' : 'Enter To Win'}
                  </button>
                </form>

                <div aria-live="polite">
                  {status === 'error' && (
                    <p className="mt-4 text-center text-sm font-bold text-[#C5381C]">
                      Something went wrong and your entry didn&rsquo;t go through. Please check your details and try again.
                    </p>
                  )}
                </div>

                <p className="mt-5 text-center text-xs leading-relaxed text-[#1E0F10]/75">
                  One winner will be chosen and contacted by email.
                </p>
              </>
            )}
          </section>
        </div>
      </div>
    </main>
  )
}

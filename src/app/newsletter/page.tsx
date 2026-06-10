'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function NewsletterPage() {
  const [firstName, setFirstName] = useState('')
  const [email, setEmail]         = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [sent, setSent]           = useState(false)
  const [error, setError]         = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitting(true)
    setError(null)
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, firstName }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Something went wrong.')
      setSent(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col" style={{ background: '#1C0D06' }}>

      {/* Top bar */}
      <div className="flex items-center justify-between px-8 pt-8 flex-shrink-0">
        <Link
          href="/"
          className="text-cream/25 font-sans text-[10px] tracking-[0.2em] uppercase hover:text-cream/55 transition-colors duration-300 flex items-center gap-2"
        >
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          Back
        </Link>
        <p className="text-cream/15 font-sans text-[10px] tracking-[0.2em] uppercase">
          Body Unmuted
        </p>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col justify-center px-8 sm:px-12 lg:px-20 py-12 max-w-5xl mx-auto w-full">

        {sent ? (
          <div className="text-center max-w-sm mx-auto">
            <div className="w-14 h-14 rounded-full mx-auto mb-8 flex items-center justify-center" style={{ background: 'rgba(212,165,116,0.15)' }}>
              <svg className="w-6 h-6 text-sand" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            <h1 className="font-serif text-cream text-3xl mb-4">You&apos;re in.</h1>
            <p className="text-cream/40 font-sans text-sm leading-relaxed">
              Check your inbox to confirm your subscription. Can&apos;t wait to be in your corner every week.
            </p>
          </div>
        ) : (
          <>
            {/* Label */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-px bg-sand/25" />
              <p className="text-sand text-[10px] font-sans font-medium tracking-[0.3em] uppercase">
                The Newsletter
              </p>
            </div>

            {/* Headline — full width */}
            <h1 className="font-serif text-cream text-4xl md:text-5xl leading-tight mb-10 max-w-xl">
              Actually though... you should be on this list.
            </h1>

            {/* Photo + form row */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">

              {/* Photo — fixed size, no stretching */}
              <div className="relative w-[260px] h-[260px] rounded-sm overflow-hidden flex-shrink-0">
                <Image
                  src="/madison_smiling_on_couch.webp"
                  alt="Madison Griffin"
                  fill
                  className="object-cover object-top"
                  priority
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, rgba(28,13,6,0.4) 0%, transparent 50%)' }}
                />
              </div>

              {/* Form — takes remaining space */}
              <div className="flex-1 flex flex-col gap-3">
                <p className="text-cream/45 font-sans text-sm leading-relaxed mb-2">
                  Every week we&apos;re dismantling the BS fitness beliefs that have been keeping you restricted, stressed, and living smaller than you should be.
                </p>
                <input
                  type="text"
                  value={firstName}
                  onChange={e => setFirstName(e.target.value)}
                  placeholder="First name"
                  className="w-full border border-cream/10 rounded-lg px-4 py-3.5 text-cream placeholder:text-cream/25 text-sm focus:outline-none focus:ring-1 focus:ring-sand/40 focus:border-sand/40 transition-all duration-300"
                  style={{ background: 'rgba(255,255,255,0.06)' }}
                />
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Email address"
                  required
                  className="w-full border border-cream/10 rounded-lg px-4 py-3.5 text-cream placeholder:text-cream/25 text-sm focus:outline-none focus:ring-1 focus:ring-sand/40 focus:border-sand/40 transition-all duration-300"
                  style={{ background: 'rgba(255,255,255,0.06)' }}
                />

                {error && <p className="text-red-400 text-xs px-1">{error}</p>}

                <button
                  type="submit"
                  onClick={handleSubmit}
                  disabled={submitting || !email.trim()}
                  className="w-full mt-1 bg-sand text-midnight font-sans text-[11px] font-semibold tracking-[0.2em] uppercase py-4 rounded-lg hover:bg-sand/85 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-300"
                >
                  {submitting ? 'Joining...' : 'Join the Actually Though Newsletter'}
                </button>

                <p className="text-cream/20 font-sans text-[11px] text-center mt-1">
                  Weekly. No spam. Unsubscribe any time.
                </p>
              </div>

            </div>
          </>
        )}
      </div>

      {/* Footer */}
      <div className="pb-8 text-center flex-shrink-0">
        <p className="text-cream/12 font-sans text-[10px] tracking-wide">
          Body Unmuted
        </p>
      </div>

    </div>
  )
}

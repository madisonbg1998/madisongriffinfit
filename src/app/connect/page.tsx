'use client'

import { useState, useCallback } from 'react'
import Image from 'next/image'


const inputClass =
  'w-full bg-white border border-bark/20 rounded-lg px-4 py-3 text-midnight placeholder:text-charcoal/30 text-sm focus:outline-none focus:ring-2 focus:ring-bark/20 focus:border-bark transition-all duration-300'

export default function ConnectPage() {
  const [formData, setFormData] = useState({ fullName: '', email: '', instagram: '', whatsapp: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const updateField = useCallback((field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    setError(null)
  }, [])

  const handleSubmit = useCallback(async () => {
    if (!formData.fullName.trim()) { setError('Please enter your name.'); return }
    if (!formData.email.trim()) { setError('Please enter your email.'); return }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) { setError('Please enter a valid email address.'); return }

    setIsSubmitting(true)
    setError(null)

    try {
      const response = await fetch('/api/connect', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      const data = await response.json()
      if (!response.ok) throw new Error(data.error || 'Something went wrong.')
      setIsSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }, [formData])

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center px-6">
        <div className="max-w-sm w-full text-center">
          <div className="mx-auto w-16 h-16 rounded-full bg-sage/15 flex items-center justify-center mb-7 animate-scale-in">
            <svg className="w-8 h-8 text-sage" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
                style={{ strokeDasharray: 30, strokeDashoffset: 30, animation: 'draw 0.6s ease-out 0.3s forwards' }}
              />
            </svg>
          </div>
          <h1 className="font-serif text-midnight text-3xl mb-4">So good to meet you.</h1>
          <p className="text-charcoal/60 font-sans text-[15px] leading-relaxed">
            I&rsquo;ll be in touch soon. In the meantime, feel free to explore the site or follow along on Instagram.
          </p>
        </div>
        <style jsx>{`
          @keyframes draw { to { stroke-dashoffset: 0; } }
        `}</style>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-cream flex flex-col items-center justify-center px-6 py-20">
      <div className="w-full max-w-sm">

        {/* Header */}
        <div className="text-center mb-10">
          <div className="relative w-16 h-16 rounded-full overflow-hidden mx-auto mb-5">
            <Image
              src="/Madison-29.webp"
              alt="Madison Griffin"
              fill
              className="object-cover object-top"
              sizes="64px"
            />
          </div>
          <p className="text-bark text-[10px] font-sans font-medium tracking-[0.25em] uppercase mb-3">
            Madison Griffin Fit
          </p>
          <h1 className="font-serif text-midnight text-3xl mb-3">
            Nice to meet you.
          </h1>
          <p className="text-charcoal/55 font-sans text-[15px] leading-relaxed">
            Drop your details and I&rsquo;ll be in touch.
          </p>
        </div>

        {/* Form */}
        <div className="space-y-4">
          <div>
            <label htmlFor="fullName" className="block text-midnight text-xs font-medium tracking-wide uppercase mb-2">
              Name <span className="text-sand">*</span>
            </label>
            <input
              id="fullName"
              type="text"
              autoComplete="name"
              value={formData.fullName}
              onChange={(e) => updateField('fullName', e.target.value)}
              placeholder="Your name"
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-midnight text-xs font-medium tracking-wide uppercase mb-2">
              Email <span className="text-sand">*</span>
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              value={formData.email}
              onChange={(e) => updateField('email', e.target.value)}
              placeholder="you@example.com"
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="instagram" className="block text-midnight text-xs font-medium tracking-wide uppercase mb-2">
              Instagram <span className="text-charcoal/30 font-normal normal-case tracking-normal">(optional)</span>
            </label>
            <input
              id="instagram"
              type="text"
              autoComplete="off"
              value={formData.instagram}
              onChange={(e) => updateField('instagram', e.target.value)}
              placeholder="@yourhandle"
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="whatsapp" className="block text-midnight text-xs font-medium tracking-wide uppercase mb-2">
              WhatsApp <span className="text-charcoal/30 font-normal normal-case tracking-normal">(optional)</span>
            </label>
            <input
              id="whatsapp"
              type="tel"
              autoComplete="tel"
              value={formData.whatsapp}
              onChange={(e) => updateField('whatsapp', e.target.value)}
              placeholder="+1 234 567 8900"
              className={inputClass}
            />
          </div>

          {error && (
            <p className="text-red-600 text-sm">{error}</p>
          )}

          <button
            type="button"
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="w-full bg-bark text-cream text-[11px] font-sans font-medium tracking-[0.18em] uppercase py-3.5 rounded-sm hover:bg-bark/90 transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed mt-2"
          >
            {isSubmitting ? 'Sending…' : 'Send'}
          </button>
        </div>

      </div>
    </div>
  )
}

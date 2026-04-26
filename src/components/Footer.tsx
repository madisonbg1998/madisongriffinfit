'use client'

import { useState } from 'react'
import Link from 'next/link'

const footerNav = [
  { href: '/method', label: 'Method' },
  { href: '/about', label: 'About' },
  { href: '/body-brief', label: 'Body Brief' },
  { href: '/body-reclaimed', label: 'Body Reclaimed' },
  { href: '/work-with-me', label: '1:1 Coaching' },
  { href: '/blog', label: 'Blog' },
]

export function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('')

  const [contactName, setContactName] = useState('')
  const [contactEmail, setContactEmail] = useState('')
  const [contactPhone, setContactPhone] = useState('')
  const [contactMessage, setContactMessage] = useState('')
  const [contactSubmitting, setContactSubmitting] = useState(false)
  const [contactSent, setContactSent] = useState(false)
  const [contactError, setContactError] = useState<string | null>(null)

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault()
    setNewsletterEmail('')
  }

  const handleContact = async (e: React.FormEvent) => {
    e.preventDefault()
    setContactSubmitting(true)
    setContactError(null)
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: contactName, email: contactEmail, phone: contactPhone, message: contactMessage }),
      })
      const data = await response.json()
      if (!response.ok) throw new Error(data.error || 'Something went wrong.')
      setContactSent(true)
    } catch (err) {
      setContactError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    } finally {
      setContactSubmitting(false)
    }
  }

  const inputClass = 'w-full bg-charcoal/60 border border-charcoal/80 text-cream placeholder:text-cream/30 text-sm px-4 py-3 rounded-sm focus:outline-none focus:border-sand/50 transition-colors duration-300'

  return (
    <footer className="bg-midnight text-cream/80">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-20">

          {/* Navigate */}
          <div>
            <h3 className="text-cream text-[11px] font-medium tracking-[0.2em] uppercase mb-8">
              Navigate
            </h3>
            <ul className="space-y-4">
              {footerNav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-cream/60 text-sm hover:text-sand transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-cream text-[11px] font-medium tracking-[0.2em] uppercase mb-8">
              Connect
            </h3>
            <a
              href="https://www.instagram.com/madisongriffinfitness/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/60 text-sm hover:text-sand transition-colors duration-300"
            >
              Instagram
            </a>

            <div className="mt-8 pt-8 border-t border-charcoal/40">
              <p className="text-cream/50 text-sm mb-5">Or leave a message here.</p>

              {contactSent ? (
                <p className="text-sand text-sm leading-relaxed">
                  Got it — I&apos;ll be in touch soon.
                </p>
              ) : (
                <form onSubmit={handleContact} className="flex flex-col gap-3">
                  <input
                    type="text"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    placeholder="Your name"
                    required
                    suppressHydrationWarning
                    className={inputClass}
                  />
                  <input
                    type="email"
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    placeholder="Your email (optional)"
                    suppressHydrationWarning
                    className={inputClass}
                  />
                  <input
                    type="tel"
                    value={contactPhone}
                    onChange={(e) => setContactPhone(e.target.value)}
                    placeholder="Your phone number (optional)"
                    suppressHydrationWarning
                    className={inputClass}
                  />
                  <textarea
                    value={contactMessage}
                    onChange={(e) => setContactMessage(e.target.value)}
                    placeholder="Your message"
                    required
                    rows={4}
                    className={`${inputClass} resize-none`}
                  />
                  {contactError && (
                    <p className="text-red-400 text-xs">{contactError}</p>
                  )}
                  <button
                    type="submit"
                    disabled={contactSubmitting}
                    suppressHydrationWarning
                    className="w-full bg-bark text-cream text-[11px] font-medium tracking-[0.15em] uppercase px-6 py-3 rounded-sm hover:bg-sand transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {contactSubmitting ? 'Sending...' : 'Message Madison'}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-cream text-[11px] font-medium tracking-[0.2em] uppercase mb-8">
              Stay in the Loop
            </h3>
            <p className="text-cream/50 text-sm leading-relaxed mb-6">
              Weekly insights on strength, nutrition, and building a life you
              don&apos;t need a vacation from.
            </p>
            <form onSubmit={handleNewsletter} className="flex flex-col gap-3">
              <input
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Your email"
                required
                suppressHydrationWarning
                className={inputClass}
              />
              <button
                type="submit"
                suppressHydrationWarning
                className="w-full bg-bark text-cream text-[11px] font-medium tracking-[0.15em] uppercase px-6 py-3 rounded-sm hover:bg-sand transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-charcoal/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-cream/40 text-xs tracking-wide">
            &copy; 2026 Madison Griffin Fit. All rights reserved.
          </p>
          <Link
            href="/"
            className="text-cream/40 text-[10px] font-medium tracking-[0.2em] uppercase hover:text-cream/60 transition-colors duration-300"
          >
            Madison Griffin Fit
          </Link>
        </div>
      </div>
    </footer>
  )
}

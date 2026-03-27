'use client'

import { useState } from 'react'
import Link from 'next/link'

const footerNav = [
  { href: '/method', label: 'Method' },
  { href: '/about', label: 'About' },
  { href: '/results', label: 'Results' },
  { href: '/work-with-me', label: 'Work With Me' },
  { href: '/blog', label: 'Blog' },
  { href: '/apply', label: 'Apply' },
]

const socialLinks = [
  { href: 'https://instagram.com', label: 'Instagram' },
  { href: 'https://tiktok.com', label: 'TikTok' },
  { href: 'https://youtube.com', label: 'YouTube' },
  { href: 'https://pinterest.com', label: 'Pinterest' },
]

export function Footer() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Newsletter submission logic
    setEmail('')
  }

  return (
    <footer className="bg-midnight text-cream/80">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-20">
          {/* Navigation Column */}
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

          {/* Connect Column */}
          <div>
            <h3 className="text-cream text-[11px] font-medium tracking-[0.2em] uppercase mb-8">
              Connect
            </h3>
            <ul className="space-y-4">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cream/60 text-sm hover:text-sand transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h3 className="text-cream text-[11px] font-medium tracking-[0.2em] uppercase mb-8">
              Stay in the Loop
            </h3>
            <p className="text-cream/50 text-sm leading-relaxed mb-6">
              Weekly insights on strength, nutrition, and building a life you
              don&apos;t need a vacation from.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                required
                className="w-full bg-charcoal/60 border border-charcoal text-cream placeholder:text-cream/30 text-sm px-4 py-3 rounded-sm focus:outline-none focus:border-sand/50 transition-colors duration-300"
              />
              <button
                type="submit"
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

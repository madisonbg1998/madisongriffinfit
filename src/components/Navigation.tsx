'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/method', label: 'Method' },
  { href: '/about', label: 'About' },
  { href: '/body-brief', label: 'Body Brief' },
  { href: '/body-reclaimed', label: 'Body Reclaimed' },
  { href: '/work-with-me', label: '1:1 Coaching' },
  { href: '/blog', label: 'Blog' },
]

const LIGHT_TOP_PAGES = ['/apply']

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const pathname = usePathname()
  const forceDark = LIGHT_TOP_PAGES.includes(pathname)

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 40)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileOpen])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled || forceDark
          ? 'bg-cream/95 backdrop-blur-md shadow-[0_1px_12px_rgba(0,0,0,0.06)]'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className={`text-[13px] font-medium tracking-[0.25em] uppercase transition-colors duration-500 ${
              isScrolled || forceDark ? 'text-midnight' : 'text-cream'
            }`}
          >
            Madison Griffin
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[11px] font-medium tracking-[0.18em] uppercase transition-colors duration-500 hover:opacity-60 ${
                  isScrolled || forceDark ? 'text-charcoal' : 'text-cream/90'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA + Mobile Toggle */}
          <div className="flex items-center gap-6">
            <Link
              href="/apply"
              className={`hidden lg:inline-flex items-center text-[11px] font-medium tracking-[0.18em] uppercase px-6 py-2.5 rounded-sm transition-all duration-500 ${
                isScrolled || forceDark
                  ? 'bg-bark text-cream hover:bg-bark/90'
                  : 'bg-cream/15 text-cream backdrop-blur-sm border border-cream/25 hover:bg-cream/25'
              }`}
            >
              Apply
            </Link>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="lg:hidden relative w-8 h-8 flex flex-col justify-center items-center"
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileOpen}
            >
              <span
                className={`block h-[1.5px] w-6 transition-all duration-400 ease-out ${
                  isScrolled || forceDark ? 'bg-midnight' : 'bg-cream'
                } ${isMobileOpen ? 'rotate-45 translate-y-[0px]' : '-translate-y-[5px]'}`}
              />
              <span
                className={`block h-[1.5px] w-6 transition-all duration-400 ease-out ${
                  isScrolled || forceDark ? 'bg-midnight' : 'bg-cream'
                } ${isMobileOpen ? 'opacity-0 scale-x-0' : 'opacity-100'}`}
              />
              <span
                className={`block h-[1.5px] w-6 transition-all duration-400 ease-out ${
                  isScrolled || forceDark ? 'bg-midnight' : 'bg-cream'
                } ${isMobileOpen ? '-rotate-45 translate-y-[0px]' : 'translate-y-[5px]'}`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 top-0 bg-cream z-40 transition-all duration-500 ease-out lg:hidden ${
          isMobileOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileOpen(false)}
              className="text-midnight text-[13px] font-medium tracking-[0.2em] uppercase hover:text-bark transition-colors duration-300"
              style={{
                transitionDelay: isMobileOpen ? `${index * 60 + 100}ms` : '0ms',
                opacity: isMobileOpen ? 1 : 0,
                transform: isMobileOpen ? 'translateY(0)' : 'translateY(12px)',
                transition: 'opacity 0.4s ease-out, transform 0.4s ease-out, color 0.3s ease',
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/apply"
            onClick={() => setIsMobileOpen(false)}
            className="mt-4 bg-bark text-cream text-[11px] font-medium tracking-[0.18em] uppercase px-10 py-3.5 rounded-sm hover:bg-bark/90 transition-all duration-300"
            style={{
              transitionDelay: isMobileOpen ? `${navLinks.length * 60 + 100}ms` : '0ms',
              opacity: isMobileOpen ? 1 : 0,
              transform: isMobileOpen ? 'translateY(0)' : 'translateY(12px)',
              transition: 'opacity 0.4s ease-out, transform 0.4s ease-out, background-color 0.3s ease',
            }}
          >
            Apply Now
          </Link>
        </div>
      </div>
    </header>
  )
}

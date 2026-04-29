'use client'

import { useState } from 'react'

type FaqItem = { q: string; a: string }

export function FaqAccordion({ faqs }: { faqs: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div>
      {faqs.map((faq, i) => (
        <div key={i} className="border-b border-charcoal/10 last:border-b-0">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full text-left py-7 flex items-start justify-between gap-6 group"
            aria-expanded={open === i}
          >
            <span className="font-serif text-midnight text-xl md:text-2xl leading-snug">
              {faq.q}
            </span>
            <span
              className={`flex-shrink-0 mt-1.5 transition-transform duration-300 ease-out ${
                open === i ? 'rotate-45' : ''
              }`}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M7 1v12M1 7h12" stroke="#8B7355" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ease-out ${
              open === i ? 'max-h-96 pb-8' : 'max-h-0'
            }`}
          >
            <p className="text-charcoal/70 font-sans text-[15px] leading-relaxed">{faq.a}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'

/* ── Types ── */
type Mode = 'portal' | 'chat'
type Role  = 'bot' | 'user'

interface Message {
  id:      string
  role:    Role
  content: string
}

/* ── Portal options ── */
const OPTIONS = [
  {
    label: 'I just joined',
    sub:   'Help me get started',
    value: 'I just joined — help me get started',
  },
  {
    label: 'Monthly check-in',
    sub:   'End of month review',
    value: 'I want to do my monthly check-in',
  },
  {
    label: 'I have a question',
    sub:   'Nutrition, training, or anything else',
    value: 'I have a question',
  },
]

/* ── Bot responses ── */
const RESPONSES: Record<string, string> = {
  'I just joined — help me get started':
    "Welcome to Body Reclaimed. So glad you're here.\n\n01 — Your custom training program is in Trainerize. Check your email for login details and download the app.\n\n02 — Your custom macro targets are in your welcome pack. Built for your goals specifically, not a generic calculator.\n\n03 — Read through The Body Literacy Guide before your first session. It changes how you execute your training.\n\nAny questions about getting set up?",
  'I want to do my monthly check-in':
    "Let's do it. I'll walk you through step by step.\n\nFirst: how did this month feel overall? Give me an honest read — what went well, what was hard, and how consistent were you with your training and nutrition?",
  'I have a question':
    "Of course — what's on your mind? The more context you give me, the more useful I can be.",
}

const FALLBACK =
  "That's a great question. Could you tell me a little more about what's going on? The more context you share, the more I can help."

function uid() {
  return Math.random().toString(36).slice(2)
}

/* ================================================================ */
/*  Brand Orb — the custom chat symbol                              */
/* ================================================================ */
function BrandOrb({ size }: { size: 'xs' | 'sm' | 'lg' }) {
  const dims: Record<string, string> = {
    xs: 'w-7 h-7',
    sm: 'w-8 h-8',
    lg: 'w-[190px] h-[190px] md:w-[220px] md:h-[220px]',
  }

  return (
    <div
      className={`${dims[size]} rounded-full flex-shrink-0`}
      style={{
        background:
          'radial-gradient(circle at 34% 30%, #FAF7F2 0%, #EDD5A8 18%, #D4A574 42%, #AA7A50 65%, #7A5030 83%, #3E2710 100%)',
        boxShadow:
          size === 'lg'
            ? '0 0 0 1px rgba(212,165,116,0.25), 0 0 0 10px rgba(212,165,116,0.07), 0 0 0 22px rgba(212,165,116,0.04), 0 0 60px rgba(212,165,116,0.25)'
            : '0 0 0 1px rgba(212,165,116,0.2)',
      }}
    />
  )
}

/* ================================================================ */
/*  Root                                                             */
/* ================================================================ */
export default function ChatPage() {
  const [mode, setMode]         = useState<Mode>('portal')
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput]       = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isTyping])

  function startConversation(value: string) {
    setMode('chat')
    const greeting: Message = {
      id:      uid(),
      role:    'bot',
      content: "Hi! I'm your Body Reclaimed assistant. I'm here to help you get settled in, walk you through your monthly check-ins, and answer any questions you have along the way.",
    }
    const userMsg: Message = { id: uid(), role: 'user', content: value }
    setMessages([greeting, userMsg])
    setIsTyping(true)
    setTimeout(() => {
      setIsTyping(false)
      setMessages(prev => [
        ...prev,
        { id: uid(), role: 'bot', content: RESPONSES[value] ?? FALLBACK },
      ])
    }, 1500)
  }

  function send(content: string) {
    const trimmed = content.trim()
    if (!trimmed || isTyping) return
    setInput('')
    setMessages(prev => [...prev, { id: uid(), role: 'user', content: trimmed }])
    setIsTyping(true)
    setTimeout(() => {
      setIsTyping(false)
      setMessages(prev => [
        ...prev,
        { id: uid(), role: 'bot', content: FALLBACK },
      ])
    }, 1500)
  }

  return mode === 'portal'
    ? <Portal onSelect={startConversation} />
    : <Chat
        messages={messages}
        isTyping={isTyping}
        input={input}
        setInput={setInput}
        send={send}
        onBack={() => { setMode('portal'); setMessages([]) }}
        bottomRef={bottomRef}
      />
}

/* ================================================================ */
/*  Portal — landing screen                                          */
/* ================================================================ */
function Portal({ onSelect }: { onSelect: (v: string) => void }) {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: '#1C0D06' }}>

      {/* Top bar */}
      <div className="flex items-center justify-between px-8 pt-8">
        <Link
          href="/body-reclaimed"
          className="text-cream/25 font-sans text-[10px] tracking-[0.2em] uppercase hover:text-cream/55 transition-colors duration-300 flex items-center gap-2"
        >
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          Back
        </Link>
        <p className="text-cream/15 font-sans text-[10px] tracking-[0.2em] uppercase">
          Body Reclaimed
        </p>
      </div>

      {/* Center */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-12">

        {/* Orb */}
        <div className="relative mb-12">
          {/* Ambient glow — much stronger on dark bg */}
          <div
            className="absolute rounded-full -z-10 blur-3xl"
            style={{
              inset: '-40%',
              background: 'radial-gradient(circle, rgba(212,165,116,0.55) 0%, transparent 70%)',
            }}
          />
          {/* Sparkle top-right */}
          <svg
            className="absolute -top-1 -right-1 text-sand"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2L13.09 9.26L20 10L13.09 10.74L12 18L10.91 10.74L4 10L10.91 9.26L12 2Z" />
          </svg>
          {/* Sparkle bottom-left */}
          <svg
            className="absolute bottom-2 -left-3 text-sand/50"
            width="8"
            height="8"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2L13.09 9.26L20 10L13.09 10.74L12 18L10.91 10.74L4 10L10.91 9.26L12 2Z" />
          </svg>
          <BrandOrb size="lg" />
        </div>

        {/* Label */}
        <div className="flex items-center gap-4 mb-5">
          <div className="w-10 h-px bg-sand/30" />
          <p className="text-sand text-[10px] font-sans font-medium tracking-[0.3em] uppercase">
            Body Reclaimed
          </p>
          <div className="w-10 h-px bg-sand/30" />
        </div>

        {/* Greeting */}
        <h1 className="font-serif text-cream text-4xl md:text-5xl mb-3 tracking-tight">
          Hi there.
        </h1>
        <p className="text-cream/35 font-sans text-base mb-14 text-center max-w-xs leading-relaxed">
          What would you like to work on today?
        </p>

        {/* Options */}
        <div className="w-full max-w-xs">
          {OPTIONS.map((opt, i) => (
            <button
              key={opt.value}
              onClick={() => onSelect(opt.value)}
              className={`w-full text-left py-5 flex items-center justify-between group transition-all duration-300 hover:pl-1.5 ${
                i === 0 ? 'border-t border-cream/8' : ''
              } border-b border-cream/8`}
            >
              <div>
                <p className="text-cream font-serif text-lg leading-tight mb-0.5 group-hover:text-sand transition-colors duration-300">
                  {opt.label}
                </p>
                <p className="text-cream/30 font-sans text-[11px]">{opt.sub}</p>
              </div>
              <svg
                className="w-3.5 h-3.5 text-cream/25 group-hover:text-sand group-hover:translate-x-1 transition-all duration-300 flex-shrink-0 ml-4"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </button>
          ))}
        </div>

      </div>

      {/* Footer */}
      <div className="pb-8 text-center">
        <p className="text-cream/12 font-sans text-[10px] tracking-wide">
          Powered by Madison Griffin Fit
        </p>
      </div>

    </div>
  )
}

/* ================================================================ */
/*  Chat — conversation screen                                       */
/* ================================================================ */
interface ChatProps {
  messages:  Message[]
  isTyping:  boolean
  input:     string
  setInput:  (v: string) => void
  send:      (v: string) => void
  onBack:    () => void
  bottomRef: React.RefObject<HTMLDivElement | null>
}

function Chat({ messages, isTyping, input, setInput, send, onBack, bottomRef }: ChatProps) {

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      send(input)
    }
  }

  return (
    <div className="h-screen flex flex-col" style={{ background: '#1C0D06' }}>

      {/* Header */}
      <header className="flex-shrink-0 border-b border-cream/8 px-5 py-4 flex items-center gap-3" style={{ background: '#1C0D06' }}>
        <button
          onClick={onBack}
          className="text-cream/25 hover:text-cream/60 transition-colors duration-300 p-1"
          aria-label="Back"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
        </button>

        <div className="flex-1 flex items-center justify-center gap-2.5">
          <BrandOrb size="xs" />
          <p className="font-serif text-cream text-[15px]">Body Reclaimed</p>
        </div>

        <div className="w-6" />
      </header>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-10">
        <div className="max-w-xl mx-auto space-y-8">

          {messages.map((msg) =>
            msg.role === 'bot'
              ? <BotBubble key={msg.id} content={msg.content} />
              : <UserBubble key={msg.id} content={msg.content} />
          )}

          {/* Typing indicator */}
          {isTyping && (
            <div className="flex items-end gap-3">
              <BrandOrb size="sm" />
              <div className="rounded-2xl rounded-bl-sm px-5 py-4 border border-cream/8" style={{ background: 'rgba(255,255,255,0.06)' }}>
                <div className="flex items-center gap-1.5">
                  {[0, 150, 300].map((d) => (
                    <span
                      key={d}
                      className="w-1.5 h-1.5 rounded-full bg-sand/70 animate-bounce"
                      style={{ animationDelay: `${d}ms` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}

          <div ref={bottomRef} />
        </div>
      </div>

      {/* Input */}
      <div className="flex-shrink-0 border-t border-cream/8 px-4 sm:px-6 py-4" style={{ background: '#1C0D06' }}>
        <form
          onSubmit={(e) => { e.preventDefault(); send(input) }}
          className="max-w-xl mx-auto flex items-end gap-3"
        >
          <textarea
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Message..."
            rows={1}
            className="flex-1 border border-cream/10 rounded-xl px-4 py-3 text-cream placeholder:text-cream/25 text-sm focus:outline-none focus:ring-1 focus:ring-sand/40 focus:border-sand/40 transition-all duration-300 resize-none leading-relaxed"
            style={{ minHeight: '48px', maxHeight: '120px', background: 'rgba(255,255,255,0.06)' }}
            onInput={e => {
              const el = e.currentTarget
              el.style.height = 'auto'
              el.style.height = Math.min(el.scrollHeight, 120) + 'px'
            }}
          />
          <button
            type="submit"
            disabled={!input.trim() || isTyping}
            className="flex-shrink-0 w-10 h-10 rounded-full bg-sand flex items-center justify-center hover:bg-sand/80 disabled:opacity-25 disabled:cursor-not-allowed transition-all duration-300"
            aria-label="Send"
          >
            <svg className="w-3.5 h-3.5 text-midnight -rotate-90" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
            </svg>
          </button>
        </form>
      </div>

    </div>
  )
}

/* ── Bot bubble ── */
function BotBubble({ content }: { content: string }) {
  return (
    <div className="flex items-end gap-3">
      <BrandOrb size="sm" />
      <div className="rounded-2xl rounded-bl-sm px-5 py-4 border border-cream/8 max-w-[88%]" style={{ background: 'rgba(255,255,255,0.06)' }}>
        <p className="text-cream font-sans text-[14px] leading-[1.8] whitespace-pre-line">{content}</p>
      </div>
    </div>
  )
}

/* ── User bubble ── */
function UserBubble({ content }: { content: string }) {
  return (
    <div className="flex justify-end">
      <div className="bg-sand rounded-2xl rounded-br-sm px-5 py-4 max-w-[88%] shadow-[0_2px_20px_rgba(0,0,0,0.25)]">
        <p className="text-midnight font-sans text-[14px] leading-[1.8] whitespace-pre-line">{content}</p>
      </div>
    </div>
  )
}

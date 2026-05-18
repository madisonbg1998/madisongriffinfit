'use client'

import { useState, useCallback } from 'react'
import Image from 'next/image'

const STEP_LABELS = ['About You', 'Your Goals', 'Your History', 'Why You', 'Anything Else']

const READINESS_OPTIONS = [
  "I'm fully ready, I've been building toward this and I'm done waiting",
  "I'm ready but want to make sure we're the right fit, the call will tell me",
  "I'm not quite ready yet but I want to get the process started",
]

const MOTIVATION_OPTIONS = [
  "This is the most important thing I could be working on, I'm done waiting",
  "I'm motivated but balancing other priorities",
  "I'm still figuring out if the timing is right",
]

const START_TIMING_OPTIONS = [
  "As soon as possible",
  "Within the next month",
  "Within the next 3 months",
  "I'm not sure yet",
]

interface FormData {
  fullName: string
  email: string
  instagram: string
  lifeDescription: string
  bodyFeeling: string
  goals: string
  successVision: string
  pastAttempts: string
  barriers: string
  whyMadison: string
  whyNow: string
  readinessLevel: string
  motivationLevel: string
  startTiming: string
  anythingElse: string
}

const initialFormData: FormData = {
  fullName: '',
  email: '',
  instagram: '',
  lifeDescription: '',
  bodyFeeling: '',
  goals: '',
  successVision: '',
  pastAttempts: '',
  barriers: '',
  whyMadison: '',
  whyNow: '',
  readinessLevel: '',
  motivationLevel: '',
  startTiming: '',
  anythingElse: '',
}

const inputClass =
  'w-full bg-white border border-bark/20 rounded-lg px-4 py-3 text-midnight placeholder:text-charcoal/30 text-sm focus:outline-none focus:ring-2 focus:ring-bark/20 focus:border-bark transition-all duration-300'

const textareaClass =
  'w-full bg-white border border-bark/20 rounded-lg px-4 py-3 text-midnight placeholder:text-charcoal/30 text-sm min-h-[140px] resize-y focus:outline-none focus:ring-2 focus:ring-bark/20 focus:border-bark transition-all duration-300'

function QLabel({ num }: { num: string }) {
  return (
    <p className="text-bark text-[10px] font-medium tracking-[0.2em] uppercase mb-2">
      {num} —
    </p>
  )
}

function RadioOption({
  name,
  value,
  checked,
  onChange,
  label,
}: {
  name: string
  value: string
  checked: boolean
  onChange: (value: string) => void
  label: string
}) {
  return (
    <label
      className={`flex items-start gap-3 cursor-pointer group px-4 py-3.5 rounded-lg border transition-all duration-300 ${
        checked
          ? 'border-bark bg-bark/5'
          : 'border-bark/10 bg-white hover:border-bark/25'
      }`}
    >
      <div
        className={`mt-0.5 w-[18px] h-[18px] rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
          checked ? 'border-bark' : 'border-bark/25 group-hover:border-bark/40'
        }`}
      >
        {checked && <div className="w-2.5 h-2.5 rounded-full bg-bark animate-scale-in" />}
      </div>
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={() => onChange(value)}
        className="sr-only"
      />
      <span className="text-midnight text-sm leading-relaxed">{label}</span>
    </label>
  )
}

export default function ApplyPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const updateField = useCallback((field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    setError(null)
  }, [])

  const validateStep = useCallback((): boolean => {
    if (step === 1) {
      if (!formData.fullName.trim()) { setError('Please enter your name.'); return false }
      if (!formData.email.trim()) { setError('Please enter your email address.'); return false }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) { setError('Please enter a valid email address.'); return false }
      if (!formData.lifeDescription.trim()) { setError('Please tell me about your life.'); return false }
    }
    if (step === 2) {
      if (!formData.bodyFeeling.trim()) { setError('Please share how you feel in your body.'); return false }
      if (!formData.goals.trim()) { setError('Please share your goals.'); return false }
      if (!formData.successVision.trim()) { setError('Please describe what success looks like for you.'); return false }
    }
    if (step === 3) {
      if (!formData.pastAttempts.trim()) { setError("Please share what you've tried before."); return false }
      if (!formData.barriers.trim()) { setError('Please share what has gotten in the way.'); return false }
    }
    if (step === 4) {
      if (!formData.whyMadison.trim()) { setError('Please share why you want to work with me.'); return false }
      if (!formData.whyNow.trim()) { setError("Please share why now is the right time."); return false }
    }
    return true
  }, [step, formData])

  const handleNext = useCallback(() => {
    if (validateStep()) {
      setStep((s) => Math.min(s + 1, 5))
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [validateStep])

  const handleBack = useCallback(() => {
    setError(null)
    setStep((s) => Math.max(s - 1, 1))
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const handleSubmit = useCallback(async () => {
    if (!validateStep()) return
    setIsSubmitting(true)
    setError(null)
    try {
      const response = await fetch('/api/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      const data = await response.json()
      if (!response.ok) throw new Error(data.error || 'Something went wrong. Please try again.')
      setIsSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }, [formData, validateStep])

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center px-6">
        <div className="max-w-lg text-center">
          <div className="mx-auto w-20 h-20 rounded-full bg-sage/15 flex items-center justify-center mb-8 animate-scale-in">
            <svg className="w-10 h-10 text-sage" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
                style={{ strokeDasharray: 30, strokeDashoffset: 30, animation: 'draw 0.6s ease-out 0.3s forwards' }}
              />
            </svg>
          </div>
          <h1 className="font-serif text-midnight text-4xl sm:text-5xl font-medium mb-4">Application Received</h1>
          <p className="text-charcoal/70 text-base sm:text-lg leading-relaxed mb-3">
            I read every application personally and will be in touch within 48 hours. Keep an eye on your inbox.
          </p>
          <p className="text-charcoal/50 text-sm">If you don&apos;t hear back, check your spam folder.</p>
        </div>
        <style jsx>{`
          @keyframes draw { to { stroke-dashoffset: 0; } }
        `}</style>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-cream flex">
      {/* Form Side */}
      <div className="w-full lg:w-[60%] px-6 sm:px-10 lg:px-16 xl:px-24 py-28 sm:py-32">
        <div className="max-w-lg mx-auto lg:mx-0">
          {/* Header */}
          <p className="text-bark text-[11px] font-medium tracking-[0.25em] uppercase mb-4">1:1 Coaching</p>
          <h1 className="font-serif text-midnight text-4xl sm:text-5xl font-medium mb-4">Apply for Coaching</h1>
          <p className="text-charcoal/60 text-base leading-relaxed mb-12">
            I read every application personally. Be as honest and specific as you can — the more real you are, the better I can assess whether we&apos;re the right fit for each other.
          </p>

          {/* Step Progress */}
          <div className="flex items-center mb-12">
            {STEP_LABELS.map((label, index) => {
              const stepNum = index + 1
              const isCompleted = step > stepNum
              const isCurrent = step === stepNum
              return (
                <div key={label} className="flex items-center">
                  {index > 0 && (
                    <div className={`w-5 sm:w-7 h-px transition-colors duration-300 ${isCompleted ? 'bg-sand' : 'bg-bark/15'}`} />
                  )}
                  <div className="flex flex-col items-center gap-2">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium transition-all duration-300 ${
                        isCompleted ? 'bg-sand text-cream' : isCurrent ? 'bg-bark text-cream' : 'bg-bark/10 text-charcoal/40'
                      }`}
                    >
                      {isCompleted ? (
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      ) : stepNum}
                    </div>
                    <span className={`text-[8px] tracking-[0.08em] uppercase font-medium transition-colors duration-300 whitespace-nowrap hidden sm:block ${isCurrent || isCompleted ? 'text-bark' : 'text-charcoal/30'}`}>
                      {label}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Error */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-lg mb-6 animate-fade-in">
              {error}
            </div>
          )}

          {/* ── Step 1: About You ── */}
          {step === 1 && (
            <div className="space-y-8 animate-fade-in">
              <div>
                <QLabel num="01" />
                <label htmlFor="fullName" className="block text-midnight text-sm font-medium mb-2">
                  What&apos;s your name? <span className="text-sand">*</span>
                </label>
                <input
                  id="fullName"
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => updateField('fullName', e.target.value)}
                  placeholder="Your name"
                  className={inputClass}
                />
              </div>

              <div>
                <QLabel num="02" />
                <label htmlFor="email" className="block text-midnight text-sm font-medium mb-2">
                  What&apos;s your best email address? <span className="text-sand">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => updateField('email', e.target.value)}
                  placeholder="you@example.com"
                  className={inputClass}
                />
              </div>

              <div>
                <QLabel num="03" />
                <label htmlFor="instagram" className="block text-midnight text-sm font-medium mb-2">
                  Instagram handle{' '}
                  <span className="text-charcoal/30 font-normal">(optional)</span>
                </label>
                <input
                  id="instagram"
                  type="text"
                  value={formData.instagram}
                  onChange={(e) => updateField('instagram', e.target.value)}
                  placeholder="@yourhandle"
                  className={inputClass}
                />
              </div>

              <div>
                <QLabel num="04" />
                <label htmlFor="lifeDescription" className="block text-midnight text-sm font-medium mb-1">
                  Tell me about your life. <span className="text-sand">*</span>
                </label>
                <p className="text-charcoal/40 text-xs mb-3">
                  What does your day to day look like, how do you work, how much do you travel, and what makes it full and chaotic?
                </p>
                <textarea
                  id="lifeDescription"
                  required
                  value={formData.lifeDescription}
                  onChange={(e) => updateField('lifeDescription', e.target.value)}
                  placeholder="Tell me about your world..."
                  className={textareaClass}
                />
              </div>
            </div>
          )}

          {/* ── Step 2: Your Goals ── */}
          {step === 2 && (
            <div className="space-y-8 animate-fade-in">
              <div>
                <QLabel num="05" />
                <label htmlFor="bodyFeeling" className="block text-midnight text-sm font-medium mb-1">
                  How do you feel in your body right now? <span className="text-sand">*</span>
                </label>
                <p className="text-charcoal/40 text-xs mb-3">
                  Not what you want to change, just an honest snapshot of what it actually feels like to live in it today.
                </p>
                <textarea
                  id="bodyFeeling"
                  required
                  value={formData.bodyFeeling}
                  onChange={(e) => updateField('bodyFeeling', e.target.value)}
                  placeholder="How does it feel to live in your body right now..."
                  className={textareaClass}
                />
              </div>

              <div>
                <QLabel num="06" />
                <label htmlFor="goals" className="block text-midnight text-sm font-medium mb-1">
                  What are your goals? <span className="text-sand">*</span>
                </label>
                <p className="text-charcoal/40 text-xs mb-3">
                  Tell me about the physical results you want, and also how you want to feel, show up, and live. Nothing is too surface or too deep here.
                </p>
                <textarea
                  id="goals"
                  required
                  value={formData.goals}
                  onChange={(e) => updateField('goals', e.target.value)}
                  placeholder="What do you want for your body, your energy, your life..."
                  className={textareaClass}
                />
              </div>

              <div>
                <QLabel num="07" />
                <label htmlFor="successVision" className="block text-midnight text-sm font-medium mb-1">
                  What would need to be true in 6 months for you to feel like this was the best investment you made this year? <span className="text-sand">*</span>
                </label>
                <p className="text-charcoal/40 text-xs mb-3">
                  Be specific — what would you be doing, how would you be feeling, what would have changed?
                </p>
                <textarea
                  id="successVision"
                  required
                  value={formData.successVision}
                  onChange={(e) => updateField('successVision', e.target.value)}
                  placeholder="Describe what your life looks and feels like in 6 months..."
                  className={textareaClass}
                />
              </div>
            </div>
          )}

          {/* ── Step 3: Your History ── */}
          {step === 3 && (
            <div className="space-y-8 animate-fade-in">
              <div>
                <QLabel num="08" />
                <label htmlFor="pastAttempts" className="block text-midnight text-sm font-medium mb-1">
                  What have you tried before? <span className="text-sand">*</span>
                </label>
                <p className="text-charcoal/40 text-xs mb-3">
                  What worked, what never stuck, and why do you think that is?
                </p>
                <textarea
                  id="pastAttempts"
                  required
                  value={formData.pastAttempts}
                  onChange={(e) => updateField('pastAttempts', e.target.value)}
                  placeholder="Programs, approaches, what you've tried and why it didn't last..."
                  className={textareaClass}
                />
              </div>

              <div>
                <QLabel num="09" />
                <label htmlFor="barriers" className="block text-midnight text-sm font-medium mb-1">
                  What has consistently gotten in the way of reaching this, and do you have a sense of why it keeps happening? <span className="text-sand">*</span>
                </label>
                <textarea
                  id="barriers"
                  required
                  value={formData.barriers}
                  onChange={(e) => updateField('barriers', e.target.value)}
                  placeholder="What keeps getting in the way..."
                  className={textareaClass}
                />
              </div>
            </div>
          )}

          {/* ── Step 4: Why You, Why Now ── */}
          {step === 4 && (
            <div className="space-y-8 animate-fade-in">
              <div>
                <QLabel num="10" />
                <label htmlFor="whyMadison" className="block text-midnight text-sm font-medium mb-2">
                  Why do you want to work with me specifically? <span className="text-sand">*</span>
                </label>
                <textarea
                  id="whyMadison"
                  required
                  value={formData.whyMadison}
                  onChange={(e) => updateField('whyMadison', e.target.value)}
                  placeholder="What drew you to me and my approach..."
                  className={textareaClass}
                />
              </div>

              <div>
                <QLabel num="11" />
                <label htmlFor="whyNow" className="block text-midnight text-sm font-medium mb-2">
                  Why now? What&apos;s made this the moment? <span className="text-sand">*</span>
                </label>
                <textarea
                  id="whyNow"
                  required
                  value={formData.whyNow}
                  onChange={(e) => updateField('whyNow', e.target.value)}
                  placeholder="What's shifted or what's made this feel like the right time..."
                  className={textareaClass}
                />
              </div>

              <div>
                <QLabel num="12" />
                <p className="text-midnight text-sm font-medium mb-3">
                  How ready are you to commit?
                </p>
                <div className="space-y-2.5">
                  {READINESS_OPTIONS.map((opt) => (
                    <RadioOption
                      key={opt}
                      name="readinessLevel"
                      value={opt}
                      checked={formData.readinessLevel === opt}
                      onChange={(v) => updateField('readinessLevel', v)}
                      label={opt}
                    />
                  ))}
                </div>
              </div>

              <div>
                <QLabel num="13" />
                <p className="text-midnight text-sm font-medium mb-1">
                  One practical question before we wrap up. How motivated are you to solve this right now?
                </p>
                <div className="space-y-2.5 mt-3">
                  {MOTIVATION_OPTIONS.map((opt) => (
                    <RadioOption
                      key={opt}
                      name="motivationLevel"
                      value={opt}
                      checked={formData.motivationLevel === opt}
                      onChange={(v) => updateField('motivationLevel', v)}
                      label={opt}
                    />
                  ))}
                </div>
              </div>

              <div>
                <QLabel num="14" />
                <p className="text-midnight text-sm font-medium mb-3">
                  When are you looking to start?
                </p>
                <div className="space-y-2.5">
                  {START_TIMING_OPTIONS.map((opt) => (
                    <RadioOption
                      key={opt}
                      name="startTiming"
                      value={opt}
                      checked={formData.startTiming === opt}
                      onChange={(v) => updateField('startTiming', v)}
                      label={opt}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ── Step 5: Anything Else ── */}
          {step === 5 && (
            <div className="space-y-8 animate-fade-in">
              <div>
                <QLabel num="15" />
                <label htmlFor="anythingElse" className="block text-midnight text-sm font-medium mb-1">
                  Is there anything you want me to know that would help me understand why this is the right moment for you? Or anything that feels important that the questions didn&apos;t ask.{' '}
                  <span className="text-charcoal/30 font-normal">(optional)</span>
                </label>
                <textarea
                  id="anythingElse"
                  value={formData.anythingElse}
                  onChange={(e) => updateField('anythingElse', e.target.value)}
                  placeholder="Share anything that feels important..."
                  className={`${textareaClass} min-h-[200px]`}
                />
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex items-center justify-between mt-10 pt-6 border-t border-bark/10">
            {step > 1 ? (
              <button
                type="button"
                onClick={handleBack}
                className="inline-flex items-center gap-2 text-bark text-[11px] font-medium tracking-[0.18em] uppercase px-6 py-3 rounded-sm border border-bark/25 hover:bg-bark/5 transition-all duration-300"
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
                Back
              </button>
            ) : <div />}

            {step < 5 ? (
              <button
                type="button"
                onClick={handleNext}
                className="inline-flex items-center gap-2 bg-bark text-cream text-[11px] font-medium tracking-[0.18em] uppercase px-8 py-3 rounded-sm hover:bg-bark/90 transition-all duration-300"
              >
                Next
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 bg-bark text-cream text-[11px] font-medium tracking-[0.18em] uppercase px-8 py-3 rounded-sm hover:bg-bark/90 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Submitting...
                  </>
                ) : 'Submit Application'}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Photo Side - Desktop only */}
      <div className="hidden lg:block w-[40%] relative">
        <div className="fixed top-0 right-0 w-[40%] h-screen">
          <Image
            src="/Madison-134.webp"
            alt="Madison Griffin"
            fill
            className="object-cover object-center"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-midnight/20 via-transparent to-midnight/10" />
        </div>
      </div>
    </div>
  )
}

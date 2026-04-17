'use client'

import { useState, useCallback } from 'react'
import Image from 'next/image'

const STEP_LABELS = ['About You', 'Your Goals', 'Your Lifestyle']

const TRAVEL_OPTIONS = [
  'Rarely',
  'A few times a year',
  'Monthly',
  'Constantly on the go',
]

const COMMITMENT_OPTIONS = [
  '1–2 months — I want to try it out first',
  "3–6 months — I'm serious and ready to commit",
  '6–12 months — I want a full transformation',
  "As long as it takes — I'm here for results",
]

const COACH_OPTIONS = [
  'Yes, I currently work with a coach',
  'I have in the past, but not currently',
  'No, never',
]

const INVESTMENT_OPTIONS = [
  'Yes, absolutely',
  'Yes, if it feels like the right fit',
  "I'm still figuring out my budget",
]

interface FormData {
  fullName: string
  email: string
  instagram: string
  fitnessGoals: string
  currentRoutine: string
  biggestStruggle: string
  pastAttempts: string
  travelFrequency: string
  commitmentLevel: string
  workingWithCoach: string
  openToInvestment: string
  anythingElse: string
}

const initialFormData: FormData = {
  fullName: '',
  email: '',
  instagram: '',
  fitnessGoals: '',
  currentRoutine: '',
  biggestStruggle: '',
  pastAttempts: '',
  travelFrequency: '',
  commitmentLevel: '',
  workingWithCoach: '',
  openToInvestment: '',
  anythingElse: '',
}

export default function ApplyPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const updateField = useCallback(
    (field: keyof FormData, value: string) => {
      setFormData((prev) => ({ ...prev, [field]: value }))
      setError(null)
    },
    []
  )

  const validateStep = useCallback((): boolean => {
    if (step === 1) {
      if (!formData.fullName.trim()) {
        setError('Please enter your full name.')
        return false
      }
      if (!formData.email.trim()) {
        setError('Please enter your email address.')
        return false
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        setError('Please enter a valid email address.')
        return false
      }
    }
    if (step === 2) {
      if (!formData.fitnessGoals.trim()) {
        setError('Please share your fitness goals.')
        return false
      }
      if (!formData.currentRoutine.trim()) {
        setError('Please describe your current routine.')
        return false
      }
      if (!formData.biggestStruggle.trim()) {
        setError('Please share what you struggle with most.')
        return false
      }
    }
    return true
  }, [step, formData])

  const handleNext = useCallback(() => {
    if (validateStep()) {
      setStep((s) => Math.min(s + 1, 3))
    }
  }, [validateStep])

  const handleBack = useCallback(() => {
    setError(null)
    setStep((s) => Math.max(s - 1, 1))
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

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong. Please try again.')
      }

      setIsSubmitted(true)
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : 'Something went wrong. Please try again.'
      )
    } finally {
      setIsSubmitting(false)
    }
  }, [formData, validateStep])

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center px-6">
        <div className="max-w-lg text-center">
          {/* Checkmark animation */}
          <div className="mx-auto w-20 h-20 rounded-full bg-sage/15 flex items-center justify-center mb-8 animate-scale-in">
            <svg
              className="w-10 h-10 text-sage"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
                className="animate-[draw_0.6s_ease-out_0.3s_forwards]"
                style={{
                  strokeDasharray: 30,
                  strokeDashoffset: 30,
                  animation: 'draw 0.6s ease-out 0.3s forwards',
                }}
              />
            </svg>
          </div>
          <h1 className="font-serif text-midnight text-4xl sm:text-5xl font-medium mb-4">
            Thank You
          </h1>
          <p className="text-charcoal/70 text-base sm:text-lg leading-relaxed mb-3">
            Your application has been received. I review every submission
            personally and will be in touch soon.
          </p>
          <p className="text-charcoal/50 text-sm">
            Keep an eye on your inbox for next steps.
          </p>
        </div>
        <style jsx>{`
          @keyframes draw {
            to {
              stroke-dashoffset: 0;
            }
          }
        `}</style>
      </div>
    )
  }

  return (
    <>
      <div className="min-h-screen bg-cream flex">
        {/* Form Side */}
        <div className="w-full lg:w-[60%] px-6 sm:px-10 lg:px-16 xl:px-24 py-28 sm:py-32">
          <div className="max-w-lg mx-auto lg:mx-0">
            {/* Header */}
            <p className="text-bark text-[11px] font-medium tracking-[0.25em] uppercase mb-4">
              Start Here
            </p>
            <h1 className="font-serif text-midnight text-4xl sm:text-5xl font-medium mb-4">
              Apply for Coaching
            </h1>
            <p className="text-charcoal/60 text-base leading-relaxed mb-12">
              This is for women who are ready to stop guessing and start building
              a body that actually works.
            </p>

            {/* Step Progress */}
            <div className="flex items-center gap-0 mb-12">
              {STEP_LABELS.map((label, index) => {
                const stepNum = index + 1
                const isCompleted = step > stepNum
                const isCurrent = step === stepNum
                return (
                  <div key={label} className="flex items-center">
                    {index > 0 && (
                      <div
                        className={`w-12 sm:w-16 h-px transition-colors duration-300 ${
                          isCompleted ? 'bg-sand' : 'bg-bark/15'
                        }`}
                      />
                    )}
                    <div className="flex flex-col items-center gap-2">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium transition-all duration-300 ${
                          isCompleted
                            ? 'bg-sand text-cream'
                            : isCurrent
                            ? 'bg-bark text-cream'
                            : 'bg-bark/10 text-charcoal/40'
                        }`}
                      >
                        {isCompleted ? (
                          <svg
                            className="w-3.5 h-3.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2.5}
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M4.5 12.75l6 6 9-13.5"
                            />
                          </svg>
                        ) : (
                          stepNum
                        )}
                      </div>
                      <span
                        className={`text-[10px] tracking-[0.1em] uppercase font-medium transition-colors duration-300 whitespace-nowrap ${
                          isCurrent || isCompleted
                            ? 'text-bark'
                            : 'text-charcoal/30'
                        }`}
                      >
                        {label}
                      </span>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-lg mb-6 animate-fade-in">
                {error}
              </div>
            )}

            {/* Step 1: About You */}
            {step === 1 && (
              <div className="space-y-6 animate-fade-in">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-midnight text-sm font-medium mb-2"
                  >
                    Full Name <span className="text-sand">*</span>
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => updateField('fullName', e.target.value)}
                    placeholder="Your full name"
                    className="w-full bg-white border border-bark/20 rounded-lg px-4 py-3 text-midnight placeholder:text-charcoal/30 text-sm focus:outline-none focus:ring-2 focus:ring-bark/20 focus:border-bark transition-all duration-300"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-midnight text-sm font-medium mb-2"
                  >
                    Email Address <span className="text-sand">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => updateField('email', e.target.value)}
                    placeholder="you@example.com"
                    className="w-full bg-white border border-bark/20 rounded-lg px-4 py-3 text-midnight placeholder:text-charcoal/30 text-sm focus:outline-none focus:ring-2 focus:ring-bark/20 focus:border-bark transition-all duration-300"
                  />
                </div>
                <div>
                  <label
                    htmlFor="instagram"
                    className="block text-midnight text-sm font-medium mb-2"
                  >
                    Instagram Handle{' '}
                    <span className="text-charcoal/30 font-normal">
                      (optional)
                    </span>
                  </label>
                  <input
                    id="instagram"
                    type="text"
                    value={formData.instagram}
                    onChange={(e) => updateField('instagram', e.target.value)}
                    placeholder="@yourhandle"
                    className="w-full bg-white border border-bark/20 rounded-lg px-4 py-3 text-midnight placeholder:text-charcoal/30 text-sm focus:outline-none focus:ring-2 focus:ring-bark/20 focus:border-bark transition-all duration-300"
                  />
                </div>
              </div>
            )}

            {/* Step 2: Your Goals */}
            {step === 2 && (
              <div className="space-y-6 animate-fade-in">
                <div>
                  <label
                    htmlFor="fitnessGoals"
                    className="block text-midnight text-sm font-medium mb-2"
                  >
                    What are your top fitness goals right now?{' '}
                    <span className="text-sand">*</span>
                  </label>
                  <textarea
                    id="fitnessGoals"
                    required
                    value={formData.fitnessGoals}
                    onChange={(e) => updateField('fitnessGoals', e.target.value)}
                    placeholder="Tell me what you're working toward..."
                    className="w-full bg-white border border-bark/20 rounded-lg px-4 py-3 text-midnight placeholder:text-charcoal/30 text-sm min-h-[120px] resize-y focus:outline-none focus:ring-2 focus:ring-bark/20 focus:border-bark transition-all duration-300"
                  />
                </div>
                <div>
                  <label
                    htmlFor="currentRoutine"
                    className="block text-midnight text-sm font-medium mb-2"
                  >
                    What does your current fitness routine look like?{' '}
                    <span className="text-sand">*</span>
                  </label>
                  <textarea
                    id="currentRoutine"
                    required
                    value={formData.currentRoutine}
                    onChange={(e) =>
                      updateField('currentRoutine', e.target.value)
                    }
                    placeholder="How often do you train, what kind of workouts..."
                    className="w-full bg-white border border-bark/20 rounded-lg px-4 py-3 text-midnight placeholder:text-charcoal/30 text-sm min-h-[120px] resize-y focus:outline-none focus:ring-2 focus:ring-bark/20 focus:border-bark transition-all duration-300"
                  />
                </div>
                <div>
                  <label
                    htmlFor="biggestStruggle"
                    className="block text-midnight text-sm font-medium mb-2"
                  >
                    What have you struggled with most when it comes to staying
                    consistent? <span className="text-sand">*</span>
                  </label>
                  <textarea
                    id="biggestStruggle"
                    required
                    value={formData.biggestStruggle}
                    onChange={(e) =>
                      updateField('biggestStruggle', e.target.value)
                    }
                    placeholder="What keeps getting in the way..."
                    className="w-full bg-white border border-bark/20 rounded-lg px-4 py-3 text-midnight placeholder:text-charcoal/30 text-sm min-h-[120px] resize-y focus:outline-none focus:ring-2 focus:ring-bark/20 focus:border-bark transition-all duration-300"
                  />
                </div>
                <div>
                  <label
                    htmlFor="pastAttempts"
                    className="block text-midnight text-sm font-medium mb-2"
                  >
                    What have you tried in the past to reach your goals?
                  </label>
                  <textarea
                    id="pastAttempts"
                    value={formData.pastAttempts}
                    onChange={(e) =>
                      updateField('pastAttempts', e.target.value)
                    }
                    placeholder="Programs, diets, approaches — what have you already tried?"
                    className="w-full bg-white border border-bark/20 rounded-lg px-4 py-3 text-midnight placeholder:text-charcoal/30 text-sm min-h-[120px] resize-y focus:outline-none focus:ring-2 focus:ring-bark/20 focus:border-bark transition-all duration-300"
                  />
                </div>
              </div>
            )}

            {/* Step 3: Your Lifestyle */}
            {step === 3 && (
              <div className="space-y-8 animate-fade-in">
                <div>
                  <label
                    htmlFor="travelFrequency"
                    className="block text-midnight text-sm font-medium mb-2"
                  >
                    How often do you travel or deal with schedule changes?
                  </label>
                  <div className="relative">
                    <select
                      id="travelFrequency"
                      value={formData.travelFrequency}
                      onChange={(e) =>
                        updateField('travelFrequency', e.target.value)
                      }
                      className="w-full bg-white border border-bark/20 rounded-lg px-4 py-3 text-midnight text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-bark/20 focus:border-bark transition-all duration-300 cursor-pointer"
                    >
                      <option value="">Select one...</option>
                      {TRAVEL_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                    <svg
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal/40 pointer-events-none"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </div>
                </div>

                <div>
                  <label className="block text-midnight text-sm font-medium mb-3">
                    How many months are you willing to commit to when it comes
                    to reaching your fitness goals?
                  </label>
                  <div className="space-y-3">
                    {COMMITMENT_OPTIONS.map((opt) => (
                      <label
                        key={opt}
                        className={`flex items-center gap-3 cursor-pointer group px-4 py-3.5 rounded-lg border transition-all duration-300 ${
                          formData.commitmentLevel === opt
                            ? 'border-bark bg-bark/5'
                            : 'border-bark/10 bg-white hover:border-bark/25'
                        }`}
                      >
                        <div
                          className={`w-[18px] h-[18px] rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                            formData.commitmentLevel === opt
                              ? 'border-bark'
                              : 'border-bark/25 group-hover:border-bark/40'
                          }`}
                        >
                          {formData.commitmentLevel === opt && (
                            <div className="w-2.5 h-2.5 rounded-full bg-bark animate-scale-in" />
                          )}
                        </div>
                        <input
                          type="radio"
                          name="commitmentLevel"
                          value={opt}
                          checked={formData.commitmentLevel === opt}
                          onChange={(e) =>
                            updateField('commitmentLevel', e.target.value)
                          }
                          className="sr-only"
                        />
                        <span className="text-midnight text-sm">{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-midnight text-sm font-medium mb-3">
                    Have you or are you currently working with a fitness coach?
                  </label>
                  <div className="space-y-3">
                    {COACH_OPTIONS.map((opt) => (
                      <label
                        key={opt}
                        className={`flex items-center gap-3 cursor-pointer group px-4 py-3.5 rounded-lg border transition-all duration-300 ${
                          formData.workingWithCoach === opt
                            ? 'border-bark bg-bark/5'
                            : 'border-bark/10 bg-white hover:border-bark/25'
                        }`}
                      >
                        <div
                          className={`w-[18px] h-[18px] rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                            formData.workingWithCoach === opt
                              ? 'border-bark'
                              : 'border-bark/25 group-hover:border-bark/40'
                          }`}
                        >
                          {formData.workingWithCoach === opt && (
                            <div className="w-2.5 h-2.5 rounded-full bg-bark animate-scale-in" />
                          )}
                        </div>
                        <input
                          type="radio"
                          name="workingWithCoach"
                          value={opt}
                          checked={formData.workingWithCoach === opt}
                          onChange={(e) =>
                            updateField('workingWithCoach', e.target.value)
                          }
                          className="sr-only"
                        />
                        <span className="text-midnight text-sm">{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-midnight text-sm font-medium mb-3">
                    If this feels like the right fit, are you open to investing
                    in coaching to get long-term results?
                  </label>
                  <div className="space-y-3">
                    {INVESTMENT_OPTIONS.map((opt) => (
                      <label
                        key={opt}
                        className={`flex items-center gap-3 cursor-pointer group px-4 py-3.5 rounded-lg border transition-all duration-300 ${
                          formData.openToInvestment === opt
                            ? 'border-bark bg-bark/5'
                            : 'border-bark/10 bg-white hover:border-bark/25'
                        }`}
                      >
                        <div
                          className={`w-[18px] h-[18px] rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                            formData.openToInvestment === opt
                              ? 'border-bark'
                              : 'border-bark/25 group-hover:border-bark/40'
                          }`}
                        >
                          {formData.openToInvestment === opt && (
                            <div className="w-2.5 h-2.5 rounded-full bg-bark animate-scale-in" />
                          )}
                        </div>
                        <input
                          type="radio"
                          name="openToInvestment"
                          value={opt}
                          checked={formData.openToInvestment === opt}
                          onChange={(e) =>
                            updateField('openToInvestment', e.target.value)
                          }
                          className="sr-only"
                        />
                        <span className="text-midnight text-sm">{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="anythingElse"
                    className="block text-midnight text-sm font-medium mb-2"
                  >
                    Anything else you want me to know?{' '}
                    <span className="text-charcoal/30 font-normal">
                      (optional)
                    </span>
                  </label>
                  <textarea
                    id="anythingElse"
                    value={formData.anythingElse}
                    onChange={(e) =>
                      updateField('anythingElse', e.target.value)
                    }
                    placeholder="Share anything else that feels important..."
                    className="w-full bg-white border border-bark/20 rounded-lg px-4 py-3 text-midnight placeholder:text-charcoal/30 text-sm min-h-[120px] resize-y focus:outline-none focus:ring-2 focus:ring-bark/20 focus:border-bark transition-all duration-300"
                  />
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between mt-10 pt-6 border-t border-bark/10">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={handleBack}
                  className="inline-flex items-center gap-2 text-bark text-[11px] font-medium tracking-[0.18em] uppercase px-6 py-3 rounded-sm border border-bark/25 hover:bg-bark/5 transition-all duration-300"
                >
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                    />
                  </svg>
                  Back
                </button>
              ) : (
                <div />
              )}

              {step < 3 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="inline-flex items-center gap-2 bg-bark text-cream text-[11px] font-medium tracking-[0.18em] uppercase px-8 py-3 rounded-sm hover:bg-bark/90 transition-all duration-300"
                >
                  Next
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
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
                      <svg
                        className="w-4 h-4 animate-spin"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    'Submit Application'
                  )}
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
              alt="Madison Griffin smiling in green dress"
              fill
              className="object-cover object-center"
              priority
              quality={90}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-midnight/20 via-transparent to-midnight/10" />
          </div>
        </div>
      </div>
    </>
  )
}

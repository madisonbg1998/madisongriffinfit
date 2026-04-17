'use client'

import { useState, useCallback } from 'react'
import Image from 'next/image'

const STEP_LABELS = [
  'You & Your Life',
  'Your Goal',
  'Training & Nutrition',
  'Patterns & Mindset',
]

const WEEK_STRUCTURE_OPTIONS = [
  "Pretty structured — I have a consistent routine most days",
  "Somewhat structured — consistent at home but falls apart when I travel or get busy",
  "Unpredictable — my schedule changes constantly and I rarely have two weeks the same",
  "Chaotic — I'm in a particularly intense season right now",
]

const ACTIVITY_LEVEL_OPTIONS = [
  "Mostly sedentary — desk job, minimal movement day to day",
  "Lightly active — some walking but nothing intentional",
  "Moderately active — regularly hitting 7,000-10,000 steps",
  "Very active — on my feet most of the day",
]

const PRIMARY_GOAL_OPTIONS = [
  "Lose body fat and get leaner",
  "Build muscle and change my body composition",
  "Both — lose fat and build muscle simultaneously",
  "Get consistent and build sustainable habits first",
  "Improve my energy, strength, and how I feel overall",
]

const TRAINING_FREQUENCY_OPTIONS = [
  "Not at all right now",
  "1-2x per week inconsistently",
  "2-3x per week fairly regularly",
  "3-4x per week consistently",
  "4-5x per week consistently",
]

const PROTEIN_INTAKE_OPTIONS = [
  "I have no idea — I don't track anything",
  "Very little — protein isn't something I focus on",
  "Some — probably 60-80g",
  "Moderate — around 100-120g",
  "High — 130g+ consistently",
]

const NUTRITION_CONSISTENCY_OPTIONS = [
  "Very consistent — I eat well most days regardless of what's going on",
  "Good during the week, falls apart on weekends or when I travel",
  "On and off — I have good stretches then completely fall off",
  "Struggling — nutrition feels really hard right now",
]

const FALL_OFF_TRIGGERS = [
  "Travel or being out of my routine",
  "A stressful or busy period at work",
  "Social events, eating out, or weekends",
  "One bad day snowballing into more",
  "Not seeing results fast enough",
  "Feeling like I've already ruined it so I'll start again Monday",
  "Injury, illness, or low energy",
]

const RESPONSE_TO_FALLING_OPTIONS = [
  "I shake it off pretty quickly and get back on track",
  "I beat myself up but eventually bounce back",
  "One bad day or week tends to turn into much longer",
  "I go all-in to compensate — restrict more, train harder — then crash again",
]

interface FormData {
  fullName: string
  email: string
  whatYouDo: string
  weekStructure: string
  activityLevel: string
  primaryGoal: string
  successDescription: string
  trainingFrequency: string
  trainingDescription: string
  proteinIntake: string
  nutritionConsistency: string
  fallOffTriggers: string[]
  responseToFalling: string
  whatDidntWork: string
  anythingElse: string
}

const initialFormData: FormData = {
  fullName: '',
  email: '',
  whatYouDo: '',
  weekStructure: '',
  activityLevel: '',
  primaryGoal: '',
  successDescription: '',
  trainingFrequency: '',
  trainingDescription: '',
  proteinIntake: '',
  nutritionConsistency: '',
  fallOffTriggers: [],
  responseToFalling: '',
  whatDidntWork: '',
  anythingElse: '',
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
          checked
            ? 'border-bark'
            : 'border-bark/25 group-hover:border-bark/40'
        }`}
      >
        {checked && (
          <div className="w-2.5 h-2.5 rounded-full bg-bark animate-scale-in" />
        )}
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

function CheckboxOption({
  value,
  checked,
  onChange,
  label,
}: {
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
        className={`mt-0.5 w-[18px] h-[18px] rounded-sm border-2 flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
          checked
            ? 'border-bark bg-bark'
            : 'border-bark/25 group-hover:border-bark/40'
        }`}
      >
        {checked && (
          <svg
            className="w-3 h-3 text-cream"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        )}
      </div>
      <input
        type="checkbox"
        value={value}
        checked={checked}
        onChange={() => onChange(value)}
        className="sr-only"
      />
      <span className="text-midnight text-sm leading-relaxed">{label}</span>
    </label>
  )
}

function QuestionLabel({ number, children }: { number: string; children: React.ReactNode }) {
  return (
    <div className="mb-3">
      <p className="text-bark text-[10px] font-medium tracking-[0.2em] uppercase mb-1">
        {number} —
      </p>
      {children}
    </div>
  )
}

export default function BodyBriefPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const updateField = useCallback((field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    setError(null)
  }, [])

  const toggleTrigger = useCallback((trigger: string) => {
    setFormData((prev) => ({
      ...prev,
      fallOffTriggers: prev.fallOffTriggers.includes(trigger)
        ? prev.fallOffTriggers.filter((t) => t !== trigger)
        : [...prev.fallOffTriggers, trigger],
    }))
    setError(null)
  }, [])

  const validateStep = useCallback((): boolean => {
    if (step === 1) {
      if (!formData.fullName.trim()) {
        setError('Please enter your name.')
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
    return true
  }, [step, formData])

  const handleNext = useCallback(() => {
    if (validateStep()) {
      setStep((s) => Math.min(s + 1, 4))
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
      const response = await fetch('/api/body-brief', {
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
            Thank you for your submission. You&apos;ll get a response with your body
            brief and opportunity to schedule a call to discuss it in 24-48
            hours.
          </p>
          <p className="text-charcoal/50 text-sm">
            Check your inbox — a confirmation is on its way.
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
              Body Brief
            </p>
            <h1 className="font-serif text-midnight text-4xl sm:text-5xl font-medium mb-4">
              The Intake Form
            </h1>
            <p className="text-charcoal/60 text-base leading-relaxed mb-12">
              This takes about 5 minutes. The more honest you are, the more
              useful your Body Brief will be — there are no wrong answers, just
              your real life.
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
                        className={`w-8 sm:w-10 h-px transition-colors duration-300 ${
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
                        className={`text-[9px] tracking-[0.1em] uppercase font-medium transition-colors duration-300 whitespace-nowrap hidden sm:block ${
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

            {/* Step 1: You & Your Life */}
            {step === 1 && (
              <div className="space-y-8 animate-fade-in">
                <QuestionLabel number="01">
                  <label
                    htmlFor="fullName"
                    className="block text-midnight text-sm font-medium"
                  >
                    What&apos;s your name?{' '}
                    <span className="text-sand">*</span>
                  </label>
                </QuestionLabel>
                <div className="-mt-5">
                  <input
                    id="fullName"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => updateField('fullName', e.target.value)}
                    placeholder="Your name"
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
                    htmlFor="whatYouDo"
                    className="block text-midnight text-sm font-medium mb-1"
                  >
                    What do you do?
                  </label>
                  <p className="text-charcoal/40 text-xs mb-2">
                    A sentence is enough — just helps me understand your world.
                  </p>
                  <input
                    id="whatYouDo"
                    type="text"
                    value={formData.whatYouDo}
                    onChange={(e) => updateField('whatYouDo', e.target.value)}
                    placeholder="e.g. I'm a nurse, work from home in finance, run my own business..."
                    className="w-full bg-white border border-bark/20 rounded-lg px-4 py-3 text-midnight placeholder:text-charcoal/30 text-sm focus:outline-none focus:ring-2 focus:ring-bark/20 focus:border-bark transition-all duration-300"
                  />
                </div>

                <div>
                  <QuestionLabel number="02">
                    <p className="text-midnight text-sm font-medium">
                      How would you describe your typical week?
                    </p>
                  </QuestionLabel>
                  <div className="space-y-2.5">
                    {WEEK_STRUCTURE_OPTIONS.map((opt) => (
                      <RadioOption
                        key={opt}
                        name="weekStructure"
                        value={opt}
                        checked={formData.weekStructure === opt}
                        onChange={(v) => updateField('weekStructure', v)}
                        label={opt}
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <QuestionLabel number="03">
                    <p className="text-midnight text-sm font-medium">
                      How active are you outside of structured exercise?
                    </p>
                  </QuestionLabel>
                  <div className="space-y-2.5">
                    {ACTIVITY_LEVEL_OPTIONS.map((opt) => (
                      <RadioOption
                        key={opt}
                        name="activityLevel"
                        value={opt}
                        checked={formData.activityLevel === opt}
                        onChange={(v) => updateField('activityLevel', v)}
                        label={opt}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Your Goal */}
            {step === 2 && (
              <div className="space-y-8 animate-fade-in">
                <div>
                  <QuestionLabel number="04">
                    <p className="text-midnight text-sm font-medium">
                      What is your primary goal right now?
                    </p>
                  </QuestionLabel>
                  <div className="space-y-2.5">
                    {PRIMARY_GOAL_OPTIONS.map((opt) => (
                      <RadioOption
                        key={opt}
                        name="primaryGoal"
                        value={opt}
                        checked={formData.primaryGoal === opt}
                        onChange={(v) => updateField('primaryGoal', v)}
                        label={opt}
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <QuestionLabel number="05">
                    <label
                      htmlFor="successDescription"
                      className="block text-midnight text-sm font-medium"
                    >
                      In your own words — what does success look like for you?
                    </label>
                  </QuestionLabel>
                  <p className="text-charcoal/40 text-xs mb-3 -mt-2">
                    How do you want to look, feel, and show up? Be specific.
                  </p>
                  <textarea
                    id="successDescription"
                    value={formData.successDescription}
                    onChange={(e) =>
                      updateField('successDescription', e.target.value)
                    }
                    placeholder="Tell me what success really looks like for you..."
                    className="w-full bg-white border border-bark/20 rounded-lg px-4 py-3 text-midnight placeholder:text-charcoal/30 text-sm min-h-[140px] resize-y focus:outline-none focus:ring-2 focus:ring-bark/20 focus:border-bark transition-all duration-300"
                  />
                </div>
              </div>
            )}

            {/* Step 3: Training & Nutrition */}
            {step === 3 && (
              <div className="space-y-8 animate-fade-in">
                <div>
                  <QuestionLabel number="06">
                    <p className="text-midnight text-sm font-medium">
                      How often are you currently training?
                    </p>
                  </QuestionLabel>
                  <div className="space-y-2.5">
                    {TRAINING_FREQUENCY_OPTIONS.map((opt) => (
                      <RadioOption
                        key={opt}
                        name="trainingFrequency"
                        value={opt}
                        checked={formData.trainingFrequency === opt}
                        onChange={(v) => updateField('trainingFrequency', v)}
                        label={opt}
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <QuestionLabel number="07">
                    <label
                      htmlFor="trainingDescription"
                      className="block text-midnight text-sm font-medium"
                    >
                      What does your training actually look like right now?
                    </label>
                  </QuestionLabel>
                  <p className="text-charcoal/40 text-xs mb-3 -mt-2">
                    What are you doing, and what equipment do you have access
                    to?
                  </p>
                  <textarea
                    id="trainingDescription"
                    value={formData.trainingDescription}
                    onChange={(e) =>
                      updateField('trainingDescription', e.target.value)
                    }
                    placeholder="Describe your workouts and available equipment..."
                    className="w-full bg-white border border-bark/20 rounded-lg px-4 py-3 text-midnight placeholder:text-charcoal/30 text-sm min-h-[120px] resize-y focus:outline-none focus:ring-2 focus:ring-bark/20 focus:border-bark transition-all duration-300"
                  />
                </div>

                <div>
                  <QuestionLabel number="08">
                    <p className="text-midnight text-sm font-medium">
                      How much protein do you roughly eat per day?
                    </p>
                  </QuestionLabel>
                  <div className="space-y-2.5">
                    {PROTEIN_INTAKE_OPTIONS.map((opt) => (
                      <RadioOption
                        key={opt}
                        name="proteinIntake"
                        value={opt}
                        checked={formData.proteinIntake === opt}
                        onChange={(v) => updateField('proteinIntake', v)}
                        label={opt}
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <QuestionLabel number="09">
                    <p className="text-midnight text-sm font-medium">
                      How consistent is your nutrition overall?
                    </p>
                  </QuestionLabel>
                  <div className="space-y-2.5">
                    {NUTRITION_CONSISTENCY_OPTIONS.map((opt) => (
                      <RadioOption
                        key={opt}
                        name="nutritionConsistency"
                        value={opt}
                        checked={formData.nutritionConsistency === opt}
                        onChange={(v) =>
                          updateField('nutritionConsistency', v)
                        }
                        label={opt}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Patterns & Mindset */}
            {step === 4 && (
              <div className="space-y-8 animate-fade-in">
                <div>
                  <QuestionLabel number="10">
                    <p className="text-midnight text-sm font-medium">
                      What usually triggers you falling off track?
                    </p>
                  </QuestionLabel>
                  <p className="text-charcoal/40 text-xs mb-3 -mt-2">
                    Select all that apply
                  </p>
                  <div className="space-y-2.5">
                    {FALL_OFF_TRIGGERS.map((trigger) => (
                      <CheckboxOption
                        key={trigger}
                        value={trigger}
                        checked={formData.fallOffTriggers.includes(trigger)}
                        onChange={toggleTrigger}
                        label={trigger}
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <QuestionLabel number="11">
                    <p className="text-midnight text-sm font-medium">
                      When things fall apart, how do you typically respond?
                    </p>
                  </QuestionLabel>
                  <div className="space-y-2.5">
                    {RESPONSE_TO_FALLING_OPTIONS.map((opt) => (
                      <RadioOption
                        key={opt}
                        name="responseToFalling"
                        value={opt}
                        checked={formData.responseToFalling === opt}
                        onChange={(v) => updateField('responseToFalling', v)}
                        label={opt}
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <QuestionLabel number="12">
                    <label
                      htmlFor="whatDidntWork"
                      className="block text-midnight text-sm font-medium"
                    >
                      What have you tried before that didn&apos;t work, and why
                      did it fall apart?
                    </label>
                  </QuestionLabel>
                  <p className="text-charcoal/40 text-xs mb-3 -mt-2">
                    Be specific — this is one of the most useful things you can
                    tell me.
                  </p>
                  <textarea
                    id="whatDidntWork"
                    value={formData.whatDidntWork}
                    onChange={(e) =>
                      updateField('whatDidntWork', e.target.value)
                    }
                    placeholder="What you tried, why it didn't last..."
                    className="w-full bg-white border border-bark/20 rounded-lg px-4 py-3 text-midnight placeholder:text-charcoal/30 text-sm min-h-[120px] resize-y focus:outline-none focus:ring-2 focus:ring-bark/20 focus:border-bark transition-all duration-300"
                  />
                </div>

                <div>
                  <QuestionLabel number="13">
                    <label
                      htmlFor="anythingElse"
                      className="block text-midnight text-sm font-medium"
                    >
                      Is there anything else you want me to know before I put
                      your brief together?{' '}
                      <span className="text-charcoal/30 font-normal">
                        (optional)
                      </span>
                    </label>
                  </QuestionLabel>
                  <p className="text-charcoal/40 text-xs mb-3 -mt-2">
                    Injuries, health conditions, life context, what you really
                    need right now — anything at all.
                  </p>
                  <textarea
                    id="anythingElse"
                    value={formData.anythingElse}
                    onChange={(e) =>
                      updateField('anythingElse', e.target.value)
                    }
                    placeholder="Share anything that feels important..."
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

              {step < 4 ? (
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
                    'Submit Brief'
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
              src="/Madison-88.webp"
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
    </>
  )
}

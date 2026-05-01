'use client'

import { useState, useCallback } from 'react'
import Image from 'next/image'

const STEP_LABELS = [
  'About You',
  'Your Month',
  'Your Training',
  'Your Nutrition',
  'Goals & Mindset',
]

// ── Section 1: About You ──────────────────────────────────────────────────────

const LIFE_DESCRIPTION_OPTIONS = [
  "Full-time job with a pretty structured schedule",
  "Work from home / remote work",
  "Frequently traveling for work",
  "Running my own business",
  "Student",
  "Stay-at-home mum or primary caregiver",
  "In a really full or hectic season right now",
  "Things are relatively calm",
  "Other",
]

// ── Section 2: Your Month ─────────────────────────────────────────────────────

const LOCATION_OPTIONS = [
  "Home the whole time",
  "Traveling a little (1–2 trips this month)",
  "Traveling a lot (3+ trips or mostly away)",
  "Other",
]

const GYM_SITUATION_OPTIONS = [
  "Full gym with good equipment",
  "Home gym or limited equipment",
  "Mix of both depending on where I am",
  "No gym or equipment right now",
  "Other",
]

const PROGRESSIVE_OVERLOAD_OPTIONS = [
  "Yes — it's the foundation of how I train",
  "I've heard of it but not sure I'm actually doing it",
  "No — this is new to me",
]

const ENERGY_OPTIONS = [
  "Good — I feel energised most days",
  "Up and down — some good days, some not",
  "Low — I'm running on empty a lot",
  "Really struggling — I'm exhausted consistently",
  "Other",
]

// ── Section 3: Your Training ──────────────────────────────────────────────────

const CURRENT_TRAINING_OPTIONS = [
  "Lifting / strength training",
  "Pilates or yoga",
  "Cardio (running, cycling, etc.)",
  "Group fitness classes",
  "Sport or recreational activity",
  "Nothing right now — I'm not training",
  "Other",
]

const TRAINING_DAYS_OPTIONS = [
  "0 — not training right now",
  "1–2 days",
  "3–4 days",
  "5+ days",
]

const SESSION_LENGTH_OPTIONS = [
  "Under 30 minutes",
  "30–45 minutes",
  "45–60 minutes",
  "60–90 minutes",
  "90+ minutes",
]

const WORKOUT_TIMING_OPTIONS = [
  "Morning (before work or anything else)",
  "Midday / lunch",
  "Afternoon / after work",
  "Evening",
  "It varies — no consistent time",
]

const STRENGTH_PROGRESSION_OPTIONS = [
  "Yes — I'm consistently getting stronger",
  "Not really — I use the same weights most sessions",
  "Hard to tell — I don't track it",
  "I'm not doing strength training",
  "Other",
]

// ── Section 4: Your Nutrition ─────────────────────────────────────────────────

const EATING_DESCRIPTION_OPTIONS = [
  "Pretty healthy and consistent — I eat well most of the time",
  "Healthy during the week, off track on weekends",
  "I track calories or macros",
  "I eat quite restrictively and struggle with flexibility",
  "All over the place — no real structure",
  "Other",
]

const PROTEIN_SERVINGS_OPTIONS = [
  "0–1 servings",
  "2–3 servings",
  "4–5 servings",
  "5+ servings",
]

const DAILY_HABITS_OPTIONS = [
  "Eat breakfast",
  "Drink 2L+ of water",
  "Get 7–9 hours of sleep",
  "Limit alcohol during the week",
  "Eat vegetables with most meals",
  "Take supplements or protein powder",
  "Other",
]

const FOOD_FEELING_OPTIONS = [
  "Pretty relaxed — food is food, I enjoy it without overthinking",
  "I enjoy food but feel guilty sometimes",
  "I have a lot of anxiety around food and eating",
  "I'm constantly starting over and can't find consistency",
  "Other",
]

const HORMONAL_HEALTH_OPTIONS = [
  "No, nothing significant",
  "I'm on the pill or hormonal contraception",
  "I've been diagnosed with PCOS",
  "I'm peri-menopausal or menopausal",
  "Yes, something else",
]

// ── Section 5: Goals & Mindset ────────────────────────────────────────────────

const MAIN_FOCUS_OPTIONS = [
  "Losing body fat and getting leaner",
  "Building muscle and changing my shape",
  "Both — lose fat and build muscle",
  "Getting consistent first",
  "Improving how I feel and my energy",
  "Other",
]

const PHYSIQUE_GOALS_OPTIONS = [
  "Flatter stomach / less belly fat",
  "Leaner legs",
  "More defined arms and shoulders",
  "A rounder or fuller glutes",
  "Overall leanness",
  "More muscle definition generally",
  "Other",
]

const FITNESS_FEELING_OPTIONS = [
  "Like something I enjoy and feel pretty good about",
  "Like a constant source of stress or frustration",
  "Like something I don't think about much",
  "Like an ongoing project I can never quite get right",
  "Other",
]

const OFF_TRACK_RESPONSE_OPTIONS = [
  "I get back on it pretty quickly — it doesn't spiral",
  "I feel bad about it but come back eventually",
  "One off day tends to become a week or more",
  "I go hard to compensate — restrict more or overtrain — then crash",
  "Other",
]

const TRIP_UP_TRIGGERS_OPTIONS = [
  "Travel or being away from home",
  "Busy or stressful periods",
  "Social events and eating out",
  "One bad day snowballing",
  "Motivation dipping",
  "Not seeing results fast enough",
  "Life generally feeling out of control",
  "Other",
]

// ── Card data ─────────────────────────────────────────────────────────────────

const briefCards = [
  {
    num: '01',
    title: 'Your audit',
    body: "What's working right now and what isn't. Most women are a lot closer than they think — they're just missing one or two key things. You'll finally know exactly where you stand.",
  },
  {
    num: '02',
    title: 'Your needle movers',
    body: "Not twenty things to change. The two or three things that will actually make a difference for you this month, based on exactly where you are right now.",
  },
  {
    num: '03',
    title: 'Your training framework',
    body: "A simple, repeatable structure built around your schedule, your equipment, and your goals. Something you can actually start this week, not when life calms down.",
  },
  {
    num: '04',
    title: 'Your nutrition anchors',
    body: "No tracking, no meal plan, no overhaul. Three simple anchors that support your goals without asking you to give up the life you've built.",
  },
  {
    num: '05',
    title: 'A note from me',
    body: "Every brief ends with something personal. Something I noticed in your answers. Something I want you to know. It's usually the part women screenshot.",
  },
]

// ── Style constants ───────────────────────────────────────────────────────────

const inputClass =
  'w-full bg-white border border-bark/20 rounded-lg px-4 py-3 text-midnight placeholder:text-charcoal/30 text-sm focus:outline-none focus:ring-2 focus:ring-bark/20 focus:border-bark transition-all duration-300'

const textareaClass =
  'w-full bg-white border border-bark/20 rounded-lg px-4 py-3 text-midnight placeholder:text-charcoal/30 text-sm min-h-[120px] resize-y focus:outline-none focus:ring-2 focus:ring-bark/20 focus:border-bark transition-all duration-300'

// ── FormData ──────────────────────────────────────────────────────────────────

interface FormData {
  // Section 1: About You
  fullName: string
  email: string
  instagram: string
  lifeDescription: string[]
  lifeDescriptionOther: string
  // Section 2: Your Month
  location: string
  locationOther: string
  gymSituation: string
  gymSituationOther: string
  progressiveOverload: string
  weekdaySchedule: string
  energy: string
  energyOther: string
  // Section 3: Your Training
  currentTraining: string[]
  currentTrainingOther: string
  trainingDays: string
  sessionLength: string
  workoutTiming: string
  strengthProgression: string
  strengthProgressionOther: string
  // Section 4: Your Nutrition
  eatingDescription: string
  eatingDescriptionOther: string
  proteinServings: string
  dailyHabits: string[]
  dailyHabitsOther: string
  foodFeeling: string
  foodFeelingOther: string
  hormonalHealth: string
  hormonalHealthOther: string
  // Section 5: Goals & Mindset
  mainFocus: string
  mainFocusOther: string
  physiqueGoals: string[]
  physiqueGoalsOther: string
  bodyGifts: string
  fitnessFeeling: string
  fitnessFeelingOther: string
  offTrackResponse: string
  offTrackResponseOther: string
  tripUpTriggers: string[]
  tripUpTriggersOther: string
  notWorkingDescription: string
  anythingElse: string
}

const initialFormData: FormData = {
  fullName: '',
  email: '',
  instagram: '',
  lifeDescription: [],
  lifeDescriptionOther: '',
  location: '',
  locationOther: '',
  gymSituation: '',
  gymSituationOther: '',
  progressiveOverload: '',
  weekdaySchedule: '',
  energy: '',
  energyOther: '',
  currentTraining: [],
  currentTrainingOther: '',
  trainingDays: '',
  sessionLength: '',
  workoutTiming: '',
  strengthProgression: '',
  strengthProgressionOther: '',
  eatingDescription: '',
  eatingDescriptionOther: '',
  proteinServings: '',
  dailyHabits: [],
  dailyHabitsOther: '',
  foodFeeling: '',
  foodFeelingOther: '',
  hormonalHealth: '',
  hormonalHealthOther: '',
  mainFocus: '',
  mainFocusOther: '',
  physiqueGoals: [],
  physiqueGoalsOther: '',
  bodyGifts: '',
  fitnessFeeling: '',
  fitnessFeelingOther: '',
  offTrackResponse: '',
  offTrackResponseOther: '',
  tripUpTriggers: [],
  tripUpTriggersOther: '',
  notWorkingDescription: '',
  anythingElse: '',
}

// ── Sub-components ────────────────────────────────────────────────────────────

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
          checked ? 'border-bark bg-bark' : 'border-bark/25 group-hover:border-bark/40'
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

// ── Page component ────────────────────────────────────────────────────────────

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

  const toggleArrayField = useCallback((field: keyof FormData, value: string) => {
    setFormData((prev) => {
      const current = prev[field] as string[]
      return {
        ...prev,
        [field]: current.includes(value)
          ? current.filter((v) => v !== value)
          : [...current, value],
      }
    })
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
      setStep((s) => Math.min(s + 1, 5))
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
            Thank you for your submission. You&apos;ll get a response with your
            body brief and opportunity to schedule a call to discuss it in
            24–48 hours.
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
      {/* ── Hero ── */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/Madison-170.webp"
          alt="Madison on mountain at sunset"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-midnight/55" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center py-28">
          <p className="text-sand text-[11px] font-sans font-medium tracking-[0.3em] uppercase mb-6">
            The Body Brief
          </p>
          <h1 className="font-serif text-cream text-5xl md:text-7xl lg:text-[5rem] leading-[1.08] tracking-tight text-balance mb-8">
            Finally figure out why you&rsquo;re stuck.
          </h1>
          <p className="text-cream/80 font-sans text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-12">
            A free, personalised deep dive into your training, your nutrition, and what your body is actually telling you. You fill in a five minute form. I tell you the truth.
          </p>
          <a
            href="#form"
            className="inline-block bg-sand text-midnight font-sans font-medium text-sm tracking-wide uppercase rounded-full px-10 py-4 hover:bg-bark hover:text-cream transition-colors duration-300"
          >
            Get Your Free Body Brief
          </a>
        </div>
      </section>

      {/* ── The Copy ── */}
      <section className="bg-midnight py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6">
          <div className="space-y-6 text-cream/75 font-sans text-[17px] leading-[1.75] mb-14">
            <p>Think of it as the conversation I&rsquo;d have with you if we sat down to lunch and you told me you were feeling stuck, didn&rsquo;t love your body, and couldn&rsquo;t figure out why nothing was working.</p>
            <p>That&rsquo;s exactly what this is.</p>
            <p>You tell me about your life. Your goals, your training, your nutrition, your patterns, the things that keep tripping you up. I go through every answer and put together something completely personalised: what you&rsquo;re already doing well, what&rsquo;s actually missing, what your real needle movers are, and a training and nutrition framework built around how you actually live.</p>
            <p>Not a generic plan. Not a list of things to fix. The specific, honest picture of where you are and that &ldquo;ohhhh, that makes sense&rdquo; moment most women have never had about their own body.</p>
            <p>It takes five minutes to fill in. You&rsquo;ll hear back within 48 hours. And it&rsquo;s completely free.</p>
          </div>
          <a
            href="#form"
            className="inline-block bg-sand text-midnight font-sans font-medium text-sm tracking-wide uppercase rounded-full px-10 py-4 hover:bg-bark hover:text-cream transition-colors duration-300"
          >
            Get Your Free Body Brief
          </a>
        </div>
      </section>

      {/* ── What You Get ── */}
      <section className="bg-cream py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-serif text-midnight text-3xl md:text-4xl lg:text-5xl leading-[1.15] mb-16">
            What&rsquo;s inside your Body Brief.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
            {briefCards.map((item, i) => (
              <div
                key={item.title}
                className={`bg-white border border-charcoal/8 rounded-sm p-8 md:p-10 shadow-[0_2px_20px_rgba(0,0,0,0.04)] ${i === briefCards.length - 1 ? 'md:col-span-2' : ''}`}
              >
                <p className="text-sand text-[11px] font-sans font-semibold tracking-[0.2em] uppercase mb-5">
                  {item.num}
                </p>
                <h3 className="font-serif text-midnight text-xl md:text-2xl mb-3">{item.title}</h3>
                <p className="text-charcoal/70 font-sans text-[15px] leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-14">
            <a
              href="#form"
              className="inline-block bg-sand text-midnight font-sans font-medium text-sm tracking-wide uppercase rounded-full px-10 py-4 hover:bg-bark hover:text-cream transition-colors duration-300"
            >
              Get Your Free Body Brief
            </a>
          </div>
        </div>
      </section>

      {/* ── This Is For You If ── */}
      <section className="bg-midnight py-24 md:py-32">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="space-y-5 text-cream/70 font-sans text-[17px] leading-[1.75] mb-10">
            <p>You&rsquo;re tired of not knowing why. You want someone to actually look at your situation, cut through the noise, and give you something real to work with.</p>
            <p>Fill in the form. It&rsquo;s free. You might finally get the answer you&rsquo;ve been looking for.</p>
          </div>
          <p className="font-serif italic text-cream text-xl md:text-2xl leading-snug mb-12">
            &ldquo;The more honest you are, the more useful your brief will be.&rdquo;
          </p>
          <a
            href="#form"
            className="inline-block bg-sand text-midnight font-sans font-medium text-sm tracking-wide uppercase rounded-full px-10 py-4 hover:bg-bark hover:text-cream transition-colors duration-300"
          >
            Get Your Free Body Brief
          </a>
          <p className="mt-5 text-cream/35 font-sans text-xs tracking-wide">Takes about five minutes.</p>
        </div>
      </section>

      {/* ── Form ── */}
      <div id="form" className="min-h-screen bg-cream flex">
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
            <div className="flex items-center mb-12">
              {STEP_LABELS.map((label, index) => {
                const stepNum = index + 1
                const isCompleted = step > stepNum
                const isCurrent = step === stepNum
                return (
                  <div key={label} className="flex items-center">
                    {index > 0 && (
                      <div
                        className={`w-5 sm:w-7 h-px transition-colors duration-300 ${
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
                        className={`text-[8px] tracking-[0.08em] uppercase font-medium transition-colors duration-300 whitespace-nowrap hidden sm:block ${
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

            {/* ── Step 1: About You ── */}
            {step === 1 && (
              <div className="space-y-6 animate-fade-in">
                <div>
                  <p className="text-bark text-[10px] font-medium tracking-[0.2em] uppercase mb-2">
                    01 —
                  </p>
                  <label
                    htmlFor="fullName"
                    className="block text-midnight text-sm font-medium mb-2"
                  >
                    What&apos;s your full name? <span className="text-sand">*</span>
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
                  <p className="text-bark text-[10px] font-medium tracking-[0.2em] uppercase mb-2">
                    02 —
                  </p>
                  <label
                    htmlFor="email"
                    className="block text-midnight text-sm font-medium mb-2"
                  >
                    What&apos;s your email address? <span className="text-sand">*</span>
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
                  <p className="text-bark text-[10px] font-medium tracking-[0.2em] uppercase mb-2">
                    03 —
                  </p>
                  <label
                    htmlFor="instagram"
                    className="block text-midnight text-sm font-medium mb-1"
                  >
                    Instagram handle{' '}
                    <span className="text-charcoal/30 font-normal">(optional)</span>
                  </label>
                  <p className="text-charcoal/40 text-xs mb-3">
                    Helps me put a face to a name.
                  </p>
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
                  <p className="text-bark text-[10px] font-medium tracking-[0.2em] uppercase mb-2">
                    04 —
                  </p>
                  <p className="text-midnight text-sm font-medium mb-1">
                    How would you describe your life right now?
                  </p>
                  <p className="text-charcoal/40 text-xs mb-3">Select all that apply.</p>
                  <div className="space-y-2.5">
                    {LIFE_DESCRIPTION_OPTIONS.map((opt) => (
                      <CheckboxOption
                        key={opt}
                        value={opt}
                        checked={formData.lifeDescription.includes(opt)}
                        onChange={(v) => toggleArrayField('lifeDescription', v)}
                        label={opt}
                      />
                    ))}
                  </div>
                  {formData.lifeDescription.includes('Other') && (
                    <input
                      type="text"
                      value={formData.lifeDescriptionOther}
                      onChange={(e) => updateField('lifeDescriptionOther', e.target.value)}
                      placeholder="Tell me a little more..."
                      className={`${inputClass} mt-2`}
                    />
                  )}
                </div>
              </div>
            )}

            {/* ── Step 2: Your Month ── */}
            {step === 2 && (
              <div className="space-y-8 animate-fade-in">
                <div>
                  <p className="text-bark text-[10px] font-medium tracking-[0.2em] uppercase mb-2">
                    05 —
                  </p>
                  <p className="text-midnight text-sm font-medium mb-1">
                    Where are you based, and where will you be this month?
                  </p>
                  <p className="text-charcoal/40 text-xs mb-3">
                    This helps me understand your context right now.
                  </p>
                  <div className="space-y-2.5">
                    {LOCATION_OPTIONS.map((opt) => (
                      <RadioOption
                        key={opt}
                        name="location"
                        value={opt}
                        checked={formData.location === opt}
                        onChange={(v) => updateField('location', v)}
                        label={opt}
                      />
                    ))}
                  </div>
                  {formData.location === 'Other' && (
                    <input
                      type="text"
                      value={formData.locationOther}
                      onChange={(e) => updateField('locationOther', e.target.value)}
                      placeholder="Tell me a little more..."
                      className={`${inputClass} mt-2`}
                    />
                  )}
                </div>

                <div>
                  <p className="text-bark text-[10px] font-medium tracking-[0.2em] uppercase mb-2">
                    06 —
                  </p>
                  <p className="text-midnight text-sm font-medium mb-3">
                    What&apos;s your gym situation like?
                  </p>
                  <div className="space-y-2.5">
                    {GYM_SITUATION_OPTIONS.map((opt) => (
                      <RadioOption
                        key={opt}
                        name="gymSituation"
                        value={opt}
                        checked={formData.gymSituation === opt}
                        onChange={(v) => updateField('gymSituation', v)}
                        label={opt}
                      />
                    ))}
                  </div>
                  {formData.gymSituation === 'Other' && (
                    <input
                      type="text"
                      value={formData.gymSituationOther}
                      onChange={(e) => updateField('gymSituationOther', e.target.value)}
                      placeholder="Tell me a little more..."
                      className={`${inputClass} mt-2`}
                    />
                  )}
                </div>

                <div>
                  <p className="text-bark text-[10px] font-medium tracking-[0.2em] uppercase mb-2">
                    07 —
                  </p>
                  <p className="text-midnight text-sm font-medium mb-3">
                    Are you familiar with progressive overload?
                  </p>
                  <div className="space-y-2.5">
                    {PROGRESSIVE_OVERLOAD_OPTIONS.map((opt) => (
                      <RadioOption
                        key={opt}
                        name="progressiveOverload"
                        value={opt}
                        checked={formData.progressiveOverload === opt}
                        onChange={(v) => updateField('progressiveOverload', v)}
                        label={opt}
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-bark text-[10px] font-medium tracking-[0.2em] uppercase mb-2">
                    08 —
                  </p>
                  <label
                    htmlFor="weekdaySchedule"
                    className="block text-midnight text-sm font-medium mb-1"
                  >
                    Walk me through what a typical weekday looks like for you.
                  </label>
                  <p className="text-charcoal/40 text-xs mb-3">
                    What time do you wake up, work, eat, train? Where does everything fall?
                  </p>
                  <textarea
                    id="weekdaySchedule"
                    value={formData.weekdaySchedule}
                    onChange={(e) => updateField('weekdaySchedule', e.target.value)}
                    placeholder="Walk me through a typical day..."
                    className={textareaClass}
                  />
                </div>

                <div>
                  <p className="text-bark text-[10px] font-medium tracking-[0.2em] uppercase mb-2">
                    09 —
                  </p>
                  <p className="text-midnight text-sm font-medium mb-3">
                    How&apos;s your energy been lately?
                  </p>
                  <div className="space-y-2.5">
                    {ENERGY_OPTIONS.map((opt) => (
                      <RadioOption
                        key={opt}
                        name="energy"
                        value={opt}
                        checked={formData.energy === opt}
                        onChange={(v) => updateField('energy', v)}
                        label={opt}
                      />
                    ))}
                  </div>
                  {formData.energy === 'Other' && (
                    <input
                      type="text"
                      value={formData.energyOther}
                      onChange={(e) => updateField('energyOther', e.target.value)}
                      placeholder="Tell me a little more..."
                      className={`${inputClass} mt-2`}
                    />
                  )}
                </div>
              </div>
            )}

            {/* ── Step 3: Your Training ── */}
            {step === 3 && (
              <div className="space-y-8 animate-fade-in">
                <div>
                  <p className="text-bark text-[10px] font-medium tracking-[0.2em] uppercase mb-2">
                    10 —
                  </p>
                  <p className="text-midnight text-sm font-medium mb-1">
                    What does your current training look like?
                  </p>
                  <p className="text-charcoal/40 text-xs mb-3">Select all that apply.</p>
                  <div className="space-y-2.5">
                    {CURRENT_TRAINING_OPTIONS.map((opt) => (
                      <CheckboxOption
                        key={opt}
                        value={opt}
                        checked={formData.currentTraining.includes(opt)}
                        onChange={(v) => toggleArrayField('currentTraining', v)}
                        label={opt}
                      />
                    ))}
                  </div>
                  {formData.currentTraining.includes('Other') && (
                    <input
                      type="text"
                      value={formData.currentTrainingOther}
                      onChange={(e) => updateField('currentTrainingOther', e.target.value)}
                      placeholder="Tell me a little more..."
                      className={`${inputClass} mt-2`}
                    />
                  )}
                </div>

                <div>
                  <p className="text-bark text-[10px] font-medium tracking-[0.2em] uppercase mb-2">
                    11 —
                  </p>
                  <p className="text-midnight text-sm font-medium mb-3">
                    How many days per week are you training?
                  </p>
                  <div className="space-y-2.5">
                    {TRAINING_DAYS_OPTIONS.map((opt) => (
                      <RadioOption
                        key={opt}
                        name="trainingDays"
                        value={opt}
                        checked={formData.trainingDays === opt}
                        onChange={(v) => updateField('trainingDays', v)}
                        label={opt}
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-bark text-[10px] font-medium tracking-[0.2em] uppercase mb-2">
                    12 —
                  </p>
                  <p className="text-midnight text-sm font-medium mb-3">
                    How long are your sessions typically?
                  </p>
                  <div className="space-y-2.5">
                    {SESSION_LENGTH_OPTIONS.map((opt) => (
                      <RadioOption
                        key={opt}
                        name="sessionLength"
                        value={opt}
                        checked={formData.sessionLength === opt}
                        onChange={(v) => updateField('sessionLength', v)}
                        label={opt}
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-bark text-[10px] font-medium tracking-[0.2em] uppercase mb-2">
                    13 —
                  </p>
                  <p className="text-midnight text-sm font-medium mb-3">
                    When do you typically train?
                  </p>
                  <div className="space-y-2.5">
                    {WORKOUT_TIMING_OPTIONS.map((opt) => (
                      <RadioOption
                        key={opt}
                        name="workoutTiming"
                        value={opt}
                        checked={formData.workoutTiming === opt}
                        onChange={(v) => updateField('workoutTiming', v)}
                        label={opt}
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-bark text-[10px] font-medium tracking-[0.2em] uppercase mb-2">
                    14 —
                  </p>
                  <p className="text-midnight text-sm font-medium mb-1">
                    Are you progressing in your strength training?
                  </p>
                  <p className="text-charcoal/40 text-xs mb-3">
                    Getting heavier over time, or staying the same?
                  </p>
                  <div className="space-y-2.5">
                    {STRENGTH_PROGRESSION_OPTIONS.map((opt) => (
                      <RadioOption
                        key={opt}
                        name="strengthProgression"
                        value={opt}
                        checked={formData.strengthProgression === opt}
                        onChange={(v) => updateField('strengthProgression', v)}
                        label={opt}
                      />
                    ))}
                  </div>
                  {formData.strengthProgression === 'Other' && (
                    <input
                      type="text"
                      value={formData.strengthProgressionOther}
                      onChange={(e) => updateField('strengthProgressionOther', e.target.value)}
                      placeholder="Tell me a little more..."
                      className={`${inputClass} mt-2`}
                    />
                  )}
                </div>
              </div>
            )}

            {/* ── Step 4: Your Nutrition ── */}
            {step === 4 && (
              <div className="space-y-8 animate-fade-in">
                <div>
                  <p className="text-bark text-[10px] font-medium tracking-[0.2em] uppercase mb-2">
                    15 —
                  </p>
                  <p className="text-midnight text-sm font-medium mb-3">
                    How would you describe the way you eat overall?
                  </p>
                  <div className="space-y-2.5">
                    {EATING_DESCRIPTION_OPTIONS.map((opt) => (
                      <RadioOption
                        key={opt}
                        name="eatingDescription"
                        value={opt}
                        checked={formData.eatingDescription === opt}
                        onChange={(v) => updateField('eatingDescription', v)}
                        label={opt}
                      />
                    ))}
                  </div>
                  {formData.eatingDescription === 'Other' && (
                    <input
                      type="text"
                      value={formData.eatingDescriptionOther}
                      onChange={(e) => updateField('eatingDescriptionOther', e.target.value)}
                      placeholder="Tell me a little more..."
                      className={`${inputClass} mt-2`}
                    />
                  )}
                </div>

                <div>
                  <p className="text-bark text-[10px] font-medium tracking-[0.2em] uppercase mb-2">
                    16 —
                  </p>
                  <p className="text-midnight text-sm font-medium mb-1">
                    How many protein-rich servings do you eat per day?
                  </p>
                  <p className="text-charcoal/40 text-xs mb-3">
                    Think: chicken, fish, eggs, Greek yoghurt, protein shake, tofu, legumes.
                  </p>
                  <div className="space-y-2.5">
                    {PROTEIN_SERVINGS_OPTIONS.map((opt) => (
                      <RadioOption
                        key={opt}
                        name="proteinServings"
                        value={opt}
                        checked={formData.proteinServings === opt}
                        onChange={(v) => updateField('proteinServings', v)}
                        label={opt}
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-bark text-[10px] font-medium tracking-[0.2em] uppercase mb-2">
                    17 —
                  </p>
                  <p className="text-midnight text-sm font-medium mb-1">
                    Which of these do you do most days?
                  </p>
                  <p className="text-charcoal/40 text-xs mb-3">Select all that apply.</p>
                  <div className="space-y-2.5">
                    {DAILY_HABITS_OPTIONS.map((opt) => (
                      <CheckboxOption
                        key={opt}
                        value={opt}
                        checked={formData.dailyHabits.includes(opt)}
                        onChange={(v) => toggleArrayField('dailyHabits', v)}
                        label={opt}
                      />
                    ))}
                  </div>
                  {formData.dailyHabits.includes('Other') && (
                    <input
                      type="text"
                      value={formData.dailyHabitsOther}
                      onChange={(e) => updateField('dailyHabitsOther', e.target.value)}
                      placeholder="Tell me a little more..."
                      className={`${inputClass} mt-2`}
                    />
                  )}
                </div>

                <div>
                  <p className="text-bark text-[10px] font-medium tracking-[0.2em] uppercase mb-2">
                    18 —
                  </p>
                  <p className="text-midnight text-sm font-medium mb-3">
                    How do you feel about food and eating?
                  </p>
                  <div className="space-y-2.5">
                    {FOOD_FEELING_OPTIONS.map((opt) => (
                      <RadioOption
                        key={opt}
                        name="foodFeeling"
                        value={opt}
                        checked={formData.foodFeeling === opt}
                        onChange={(v) => updateField('foodFeeling', v)}
                        label={opt}
                      />
                    ))}
                  </div>
                  {formData.foodFeeling === 'Other' && (
                    <input
                      type="text"
                      value={formData.foodFeelingOther}
                      onChange={(e) => updateField('foodFeelingOther', e.target.value)}
                      placeholder="Tell me a little more..."
                      className={`${inputClass} mt-2`}
                    />
                  )}
                </div>

                <div>
                  <p className="text-bark text-[10px] font-medium tracking-[0.2em] uppercase mb-2">
                    19 —
                  </p>
                  <p className="text-midnight text-sm font-medium mb-1">
                    Any hormonal health things I should know about?
                  </p>
                  <p className="text-charcoal/40 text-xs mb-3">
                    This can affect training and nutrition responses more than people realise.
                  </p>
                  <div className="space-y-2.5">
                    {HORMONAL_HEALTH_OPTIONS.map((opt) => (
                      <RadioOption
                        key={opt}
                        name="hormonalHealth"
                        value={opt}
                        checked={formData.hormonalHealth === opt}
                        onChange={(v) => updateField('hormonalHealth', v)}
                        label={opt}
                      />
                    ))}
                  </div>
                  {formData.hormonalHealth === 'Yes, something else' && (
                    <input
                      type="text"
                      value={formData.hormonalHealthOther}
                      onChange={(e) => updateField('hormonalHealthOther', e.target.value)}
                      placeholder="Tell me a little more..."
                      className={`${inputClass} mt-2`}
                    />
                  )}
                </div>
              </div>
            )}

            {/* ── Step 5: Goals & Mindset ── */}
            {step === 5 && (
              <div className="space-y-8 animate-fade-in">
                <div>
                  <p className="text-bark text-[10px] font-medium tracking-[0.2em] uppercase mb-2">
                    20 —
                  </p>
                  <p className="text-midnight text-sm font-medium mb-3">
                    What&apos;s your main focus right now?
                  </p>
                  <div className="space-y-2.5">
                    {MAIN_FOCUS_OPTIONS.map((opt) => (
                      <RadioOption
                        key={opt}
                        name="mainFocus"
                        value={opt}
                        checked={formData.mainFocus === opt}
                        onChange={(v) => updateField('mainFocus', v)}
                        label={opt}
                      />
                    ))}
                  </div>
                  {formData.mainFocus === 'Other' && (
                    <input
                      type="text"
                      value={formData.mainFocusOther}
                      onChange={(e) => updateField('mainFocusOther', e.target.value)}
                      placeholder="Tell me a little more..."
                      className={`${inputClass} mt-2`}
                    />
                  )}
                </div>

                <div>
                  <p className="text-bark text-[10px] font-medium tracking-[0.2em] uppercase mb-2">
                    21 —
                  </p>
                  <p className="text-midnight text-sm font-medium mb-1">
                    What physique goals are you working toward?
                  </p>
                  <p className="text-charcoal/40 text-xs mb-3">Select all that apply.</p>
                  <div className="space-y-2.5">
                    {PHYSIQUE_GOALS_OPTIONS.map((opt) => (
                      <CheckboxOption
                        key={opt}
                        value={opt}
                        checked={formData.physiqueGoals.includes(opt)}
                        onChange={(v) => toggleArrayField('physiqueGoals', v)}
                        label={opt}
                      />
                    ))}
                  </div>
                  {formData.physiqueGoals.includes('Other') && (
                    <input
                      type="text"
                      value={formData.physiqueGoalsOther}
                      onChange={(e) => updateField('physiqueGoalsOther', e.target.value)}
                      placeholder="Tell me a little more..."
                      className={`${inputClass} mt-2`}
                    />
                  )}
                </div>

                <div>
                  <p className="text-bark text-[10px] font-medium tracking-[0.2em] uppercase mb-2">
                    22 —
                  </p>
                  <label
                    htmlFor="bodyGifts"
                    className="block text-midnight text-sm font-medium mb-1"
                  >
                    What do you love about your body right now?
                  </label>
                  <p className="text-charcoal/40 text-xs mb-3">
                    Even one thing. Or something you appreciate about what it can do.
                  </p>
                  <textarea
                    id="bodyGifts"
                    value={formData.bodyGifts}
                    onChange={(e) => updateField('bodyGifts', e.target.value)}
                    placeholder="Tell me something you appreciate about your body..."
                    className={textareaClass}
                  />
                </div>

                <div>
                  <p className="text-bark text-[10px] font-medium tracking-[0.2em] uppercase mb-2">
                    23 —
                  </p>
                  <p className="text-midnight text-sm font-medium mb-3">
                    How does fitness feel in your life right now?
                  </p>
                  <div className="space-y-2.5">
                    {FITNESS_FEELING_OPTIONS.map((opt) => (
                      <RadioOption
                        key={opt}
                        name="fitnessFeeling"
                        value={opt}
                        checked={formData.fitnessFeeling === opt}
                        onChange={(v) => updateField('fitnessFeeling', v)}
                        label={opt}
                      />
                    ))}
                  </div>
                  {formData.fitnessFeeling === 'Other' && (
                    <input
                      type="text"
                      value={formData.fitnessFeelingOther}
                      onChange={(e) => updateField('fitnessFeelingOther', e.target.value)}
                      placeholder="Tell me a little more..."
                      className={`${inputClass} mt-2`}
                    />
                  )}
                </div>

                <div>
                  <p className="text-bark text-[10px] font-medium tracking-[0.2em] uppercase mb-2">
                    24 —
                  </p>
                  <p className="text-midnight text-sm font-medium mb-3">
                    When things fall off track, how do you typically respond?
                  </p>
                  <div className="space-y-2.5">
                    {OFF_TRACK_RESPONSE_OPTIONS.map((opt) => (
                      <RadioOption
                        key={opt}
                        name="offTrackResponse"
                        value={opt}
                        checked={formData.offTrackResponse === opt}
                        onChange={(v) => updateField('offTrackResponse', v)}
                        label={opt}
                      />
                    ))}
                  </div>
                  {formData.offTrackResponse === 'Other' && (
                    <input
                      type="text"
                      value={formData.offTrackResponseOther}
                      onChange={(e) => updateField('offTrackResponseOther', e.target.value)}
                      placeholder="Tell me a little more..."
                      className={`${inputClass} mt-2`}
                    />
                  )}
                </div>

                <div>
                  <p className="text-bark text-[10px] font-medium tracking-[0.2em] uppercase mb-2">
                    25 —
                  </p>
                  <p className="text-midnight text-sm font-medium mb-1">
                    What tends to trip you up?
                  </p>
                  <p className="text-charcoal/40 text-xs mb-3">Select all that apply.</p>
                  <div className="space-y-2.5">
                    {TRIP_UP_TRIGGERS_OPTIONS.map((opt) => (
                      <CheckboxOption
                        key={opt}
                        value={opt}
                        checked={formData.tripUpTriggers.includes(opt)}
                        onChange={(v) => toggleArrayField('tripUpTriggers', v)}
                        label={opt}
                      />
                    ))}
                  </div>
                  {formData.tripUpTriggers.includes('Other') && (
                    <input
                      type="text"
                      value={formData.tripUpTriggersOther}
                      onChange={(e) => updateField('tripUpTriggersOther', e.target.value)}
                      placeholder="Tell me a little more..."
                      className={`${inputClass} mt-2`}
                    />
                  )}
                </div>

                <div>
                  <p className="text-bark text-[10px] font-medium tracking-[0.2em] uppercase mb-2">
                    26 —
                  </p>
                  <label
                    htmlFor="notWorkingDescription"
                    className="block text-midnight text-sm font-medium mb-1"
                  >
                    In your own words — what isn&apos;t working right now?
                  </label>
                  <p className="text-charcoal/40 text-xs mb-3">
                    Be as specific as you can. This is the most useful part.
                  </p>
                  <textarea
                    id="notWorkingDescription"
                    value={formData.notWorkingDescription}
                    onChange={(e) => updateField('notWorkingDescription', e.target.value)}
                    placeholder="What have you tried, why hasn't it worked, what feels stuck..."
                    className={textareaClass}
                    style={{ minHeight: '140px' }}
                  />
                </div>

                <div>
                  <p className="text-bark text-[10px] font-medium tracking-[0.2em] uppercase mb-2">
                    27 —
                  </p>
                  <label
                    htmlFor="anythingElse"
                    className="block text-midnight text-sm font-medium mb-1"
                  >
                    Anything else you want me to know?{' '}
                    <span className="text-charcoal/30 font-normal">(optional)</span>
                  </label>
                  <p className="text-charcoal/40 text-xs mb-3">
                    Injuries, health things, life context, what you really need right now — anything at all.
                  </p>
                  <textarea
                    id="anythingElse"
                    value={formData.anythingElse}
                    onChange={(e) => updateField('anythingElse', e.target.value)}
                    placeholder="Share anything that feels important..."
                    className={textareaClass}
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

              {step < 5 ? (
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
        <div className="hidden lg:block w-[40%]">
          <div className="sticky top-0 h-screen">
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

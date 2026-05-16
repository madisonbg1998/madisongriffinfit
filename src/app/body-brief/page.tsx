'use client'

import { useState, useCallback } from 'react'
import Image from 'next/image'

const STEP_LABELS = [
  'About You',
  'Your Life',
  'Your Training',
  'Nutrition & Body',
  'Goals & Mindset',
]

// ── Options ───────────────────────────────────────────────────────────────────

const LIFE_DESCRIPTION_OPTIONS = [
  'Running my own business',
  'Working remotely or from home',
  'Frequently travelling',
  'In a full or demanding season',
  'Things are relatively settled',
  'Other',
]

const LOCATION_OPTIONS = [
  'Home the whole time',
  'Travelling a little (1–2 trips)',
  'Travelling a lot (3+ trips)',
  'Constantly shifting, no two weeks look the same',
]

const GYM_SITUATION_OPTIONS = [
  'Full gym with good equipment',
  'Home gym or limited equipment',
  'Mix depending on where I am',
  'No gym or equipment right now',
]

const ENERGY_OPTIONS = [
  'Consistent and good most days',
  'Good in the morning, crashes in the afternoon',
  'Wired but tired, exhausted but can\'t switch off',
  'Flat from the moment I wake up',
  'Fluctuates week to week with no clear pattern',
]

const ENERGY_CHANGE_OPTIONS = [
  'Yes and I know why',
  'Yes and I don\'t know why',
  'No, it\'s always been like this',
  'It\'s always shifting, I have no real baseline',
]

const CURRENT_TRAINING_OPTIONS = [
  'Lifting or strength training',
  'Pilates or yoga',
  'Cardio',
  'Group fitness',
  'Sport or recreational',
  'Nothing right now',
  'Other',
]

const SESSION_FEELING_OPTIONS = [
  'I pushed hard and I knew I worked',
  'Moderate, comfortable but not challenging',
  'Easy, I didn\'t really push',
  'I\'m not sure what hard should feel like',
]

const STRUCTURED_PROGRAMME_OPTIONS = [
  'Yes and I stuck to it',
  'I\'ve started them but don\'t finish',
  'I\'ve tried but they don\'t fit my life',
  'No, I\'ve always done my own thing',
]

const TRAINING_CONFIDENCE_OPTIONS = [
  'Very, I know what to do and how to advance it',
  'Somewhat, I have a rough idea but I\'m not sure I\'m doing it right',
  'I rely on workouts I find online',
  'I genuinely don\'t know where to start',
]

const EATING_DESCRIPTION_OPTIONS = [
  'Structured and intentional, I\'m pretty dialled in',
  'Good at home, unravels when I travel or get busy',
  'I eat well during the day but struggle with evenings',
  'I restrict, then I\'m off the rails, then I start over',
  'No real structure, I eat reactively',
  'I\'m doing all the right things but nothing is changing',
]

const PROTEIN_SERVINGS_OPTIONS = [
  '0 to 1',
  '2 to 3',
  '4 to 5',
  '5 or more',
]

const FOOD_FEELING_OPTIONS = [
  'Relaxed, food is food and I enjoy it without overthinking',
  'I enjoy food but feel guilty sometimes',
  'I have a lot of anxiety around food',
  'I\'m constantly starting over and can\'t find consistency',
  'Food is more complicated than I usually admit',
]

const SLEEP_OPTIONS = [
  '7 or more hours and I feel rested',
  '7 or more hours but I wake up tired',
  'Under 7 hours most nights',
  'I can\'t switch off, I lie awake even when I\'m exhausted',
  'It varies week to week',
]

const SYMPTOMS_OPTIONS = [
  'Bloating or gut discomfort after eating',
  'Skin changes, breakouts, dullness, or sudden changes',
  'Low mood or flat affect not explained by my circumstances',
  'Cravings I can\'t override especially at night',
  'Holding weight I can\'t shift despite doing everything right',
  'Hair thinning or changes in hair quality',
  'Brain fog or difficulty focusing',
  'Irregular, painful, or dramatically changed periods',
  'Feeling cold when others aren\'t',
  'None of these',
]

const HEALTH_CONDITIONS_OPTIONS = [
  'Hormonal contraception (pill, IUD, implant)',
  'PCOS or suspected PCOS',
  'Endometriosis',
  'Perimenopause or menopause',
  'Thyroid condition diagnosed or suspected',
  'Gut issues, IBS, diagnosed sensitivities, or chronic bloating',
  'Iron deficiency or anaemia',
  'Autoimmune condition',
  'I\'m not sure, I\'ve never looked into it',
  'None of the above',
]

const BODY_FEELING_OPTIONS = [
  'Pride or appreciation',
  'Frustration or disappointment',
  'Disconnection, I don\'t think about it much',
  'Complicated, it\'s both',
  'Something I\'d rather not sit with',
]

const BODY_IN_LIFE_OPTIONS = [
  'I feel sharp, strong, and capable — my body supports what I\'m building',
  'I push through but I know I\'m running on less than I should be',
  'My energy and physical state are genuinely limiting what I can do',
  'I\'ve learned to ignore it and I just get on with things',
  'I don\'t think I\'ve ever made the connection between the two before',
]

const HOW_LONG_OPTIONS = [
  'Under 6 months',
  '6 to 12 months',
  '1 to 3 years',
  'More than 3 years',
  'Most of my adult life',
]

const CONSISTENCY_BREAKDOWN_OPTIONS = [
  'Being away or travelling',
  'High stress or a heavy work period',
  'Social eating and drinking',
  'One bad day becoming a full reset',
  'Not seeing results despite the effort',
  'Feeling like it\'s too much on top of everything else',
  'I don\'t really lose consistency',
  'Something else',
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
  // Step 1
  fullName: string
  email: string
  instagram: string
  lifeDescription: string[]
  lifeDescriptionOther: string
  // Step 2
  location: string
  gymSituation: string
  weekdayWalkthrough: string
  energy: string
  energyChange: string
  // Step 3
  currentTraining: string[]
  currentTrainingOther: string
  trainingFrequency: string
  sessionFeeling: string
  structuredProgramme: string
  trainingConfidence: string
  // Step 4
  eatingDescription: string
  proteinServings: string
  foodFeeling: string
  sleep: string
  symptoms: string[]
  healthConditions: string[]
  bodyChanges: string
  // Step 5
  bodyFeeling: string
  bodyInLife: string
  whatToChange: string
  howLong: string
  whatTried: string
  consistencyBreakdown: string[]
  consistencyBreakdownOther: string
  whatYouWant: string
  anythingElse: string
}

const initialFormData: FormData = {
  fullName: '',
  email: '',
  instagram: '',
  lifeDescription: [],
  lifeDescriptionOther: '',
  location: '',
  gymSituation: '',
  weekdayWalkthrough: '',
  energy: '',
  energyChange: '',
  currentTraining: [],
  currentTrainingOther: '',
  trainingFrequency: '',
  sessionFeeling: '',
  structuredProgramme: '',
  trainingConfidence: '',
  eatingDescription: '',
  proteinServings: '',
  foodFeeling: '',
  sleep: '',
  symptoms: [],
  healthConditions: [],
  bodyChanges: '',
  bodyFeeling: '',
  bodyInLife: '',
  whatToChange: '',
  howLong: '',
  whatTried: '',
  consistencyBreakdown: [],
  consistencyBreakdownOther: '',
  whatYouWant: '',
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

function Q({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <p className="text-bark text-[10px] font-medium tracking-[0.2em] uppercase mb-2">{n} —</p>
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

  const scrollToForm = useCallback(() => {
    document.getElementById('form')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [])

  const handleNext = useCallback(() => {
    if (validateStep()) {
      setStep((s) => Math.min(s + 1, 5))
      scrollToForm()
    }
  }, [validateStep, scrollToForm])

  const handleBack = useCallback(() => {
    setError(null)
    setStep((s) => Math.max(s - 1, 1))
    scrollToForm()
  }, [scrollToForm])

  const handleSubmit = useCallback(async () => {
    if (!validateStep()) return

    setIsSubmitting(true)
    setError(null)

    try {
      const payload = Object.fromEntries(
        Object.entries(formData).map(([k, v]) => [k, Array.isArray(v) ? v.join(', ') : v])
      )

      const response = await fetch('/api/body-brief', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
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
          <h1 className="font-serif text-midnight text-4xl sm:text-5xl font-medium mb-6">
            Thank You
          </h1>
          <p className="text-charcoal/70 text-base sm:text-lg leading-relaxed mb-8">
            Now schedule your complimentary call so we can go over your results together.
          </p>
          <a
            href="https://calendly.com/madisongriffinfit/client-check-ins"
            className="inline-block bg-bark text-cream text-[11px] font-sans font-medium tracking-[0.18em] uppercase px-8 py-3 rounded-sm hover:bg-bark/90 transition-colors duration-300"
          >
            Schedule Your Call
          </a>
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
            <h2 className="font-serif text-midnight text-4xl sm:text-5xl font-medium mb-4">
              The Intake Form
            </h2>
            <p className="text-charcoal/60 text-base leading-relaxed mb-12">
              The more honest you are, the more useful your Body Brief will be. There are no wrong answers, just your real life.
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
              <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-lg mb-6">
                {error}
              </div>
            )}

            {/* ── Step 1: About You ── */}
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <p className="text-bark text-[10px] font-medium tracking-[0.2em] uppercase mb-2">01 —</p>
                  <label htmlFor="fullName" className="block text-midnight text-sm font-medium mb-2">
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
                  <p className="text-bark text-[10px] font-medium tracking-[0.2em] uppercase mb-2">02 —</p>
                  <label htmlFor="email" className="block text-midnight text-sm font-medium mb-2">
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
                  <p className="text-bark text-[10px] font-medium tracking-[0.2em] uppercase mb-2">03 —</p>
                  <label htmlFor="instagram" className="block text-midnight text-sm font-medium mb-1">
                    Instagram handle <span className="text-charcoal/30 font-normal">(optional)</span>
                  </label>
                  <p className="text-charcoal/40 text-xs mb-3">Helps me put a face to a name.</p>
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
                  <p className="text-bark text-[10px] font-medium tracking-[0.2em] uppercase mb-2">04 —</p>
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

            {/* ── Step 2: Your Life Right Now ── */}
            {step === 2 && (
              <div className="space-y-8">
                <div>
                  <p className="text-bark text-[10px] font-medium tracking-[0.2em] uppercase mb-2">05 —</p>
                  <p className="text-midnight text-sm font-medium mb-3">Where will you be this month?</p>
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
                </div>

                <div>
                  <p className="text-bark text-[10px] font-medium tracking-[0.2em] uppercase mb-2">06 —</p>
                  <p className="text-midnight text-sm font-medium mb-3">What&apos;s your gym situation?</p>
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
                </div>

                <div>
                  <p className="text-bark text-[10px] font-medium tracking-[0.2em] uppercase mb-2">07 —</p>
                  <label htmlFor="weekdayWalkthrough" className="block text-midnight text-sm font-medium mb-1">
                    Walk me through a typical weekday.
                  </label>
                  <p className="text-charcoal/40 text-xs mb-3">
                    Not just the logistics — where does your body fit in? When do you eat, train, crash, reach for something you don&apos;t need? Where does it tend to break down?
                  </p>
                  <textarea
                    id="weekdayWalkthrough"
                    value={formData.weekdayWalkthrough}
                    onChange={(e) => updateField('weekdayWalkthrough', e.target.value)}
                    placeholder="Walk me through a typical day..."
                    className={textareaClass}
                  />
                </div>

                <div>
                  <p className="text-bark text-[10px] font-medium tracking-[0.2em] uppercase mb-2">08 —</p>
                  <p className="text-midnight text-sm font-medium mb-3">How would you describe your energy?</p>
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
                </div>

                <div>
                  <p className="text-bark text-[10px] font-medium tracking-[0.2em] uppercase mb-2">09 —</p>
                  <p className="text-midnight text-sm font-medium mb-3">
                    Has your energy changed noticeably in the last 6 to 12 months?
                  </p>
                  <div className="space-y-2.5">
                    {ENERGY_CHANGE_OPTIONS.map((opt) => (
                      <RadioOption
                        key={opt}
                        name="energyChange"
                        value={opt}
                        checked={formData.energyChange === opt}
                        onChange={(v) => updateField('energyChange', v)}
                        label={opt}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* ── Step 3: Your Training ── */}
            {step === 3 && (
              <div className="space-y-8">
                <div>
                  <p className="text-bark text-[10px] font-medium tracking-[0.2em] uppercase mb-2">10 —</p>
                  <p className="text-midnight text-sm font-medium mb-1">What does your current training look like?</p>
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
                  <p className="text-bark text-[10px] font-medium tracking-[0.2em] uppercase mb-2">11 —</p>
                  <label htmlFor="trainingFrequency" className="block text-midnight text-sm font-medium mb-1">
                    How many days per week are you training, and how long are your sessions typically?
                  </label>
                  <textarea
                    id="trainingFrequency"
                    value={formData.trainingFrequency}
                    onChange={(e) => updateField('trainingFrequency', e.target.value)}
                    placeholder="e.g. 3 days a week, about 45–60 minutes each"
                    className={textareaClass}
                    style={{ minHeight: '80px' }}
                  />
                </div>

                <div>
                  <p className="text-bark text-[10px] font-medium tracking-[0.2em] uppercase mb-2">12 —</p>
                  <p className="text-midnight text-sm font-medium mb-3">
                    When you finish a strength session, how does it typically feel?
                  </p>
                  <div className="space-y-2.5">
                    {SESSION_FEELING_OPTIONS.map((opt) => (
                      <RadioOption
                        key={opt}
                        name="sessionFeeling"
                        value={opt}
                        checked={formData.sessionFeeling === opt}
                        onChange={(v) => updateField('sessionFeeling', v)}
                        label={opt}
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-bark text-[10px] font-medium tracking-[0.2em] uppercase mb-2">13 —</p>
                  <p className="text-midnight text-sm font-medium mb-1">
                    Have you ever followed a structured strength training programme?
                  </p>
                  <p className="text-charcoal/40 text-xs mb-3">
                    One that told you what to lift, how many reps, and how to progress week by week.
                  </p>
                  <div className="space-y-2.5">
                    {STRUCTURED_PROGRAMME_OPTIONS.map((opt) => (
                      <RadioOption
                        key={opt}
                        name="structuredProgramme"
                        value={opt}
                        checked={formData.structuredProgramme === opt}
                        onChange={(v) => updateField('structuredProgramme', v)}
                        label={opt}
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-bark text-[10px] font-medium tracking-[0.2em] uppercase mb-2">14 —</p>
                  <p className="text-midnight text-sm font-medium mb-3">
                    How confident are you in how to structure and progress your training?
                  </p>
                  <div className="space-y-2.5">
                    {TRAINING_CONFIDENCE_OPTIONS.map((opt) => (
                      <RadioOption
                        key={opt}
                        name="trainingConfidence"
                        value={opt}
                        checked={formData.trainingConfidence === opt}
                        onChange={(v) => updateField('trainingConfidence', v)}
                        label={opt}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* ── Step 4: Nutrition & Body ── */}
            {step === 4 && (
              <div className="space-y-8">
                <div>
                  <p className="text-bark text-[10px] font-medium tracking-[0.2em] uppercase mb-2">15 —</p>
                  <p className="text-midnight text-sm font-medium mb-3">
                    Which of these most accurately describes how you eat day to day?
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
                </div>

                <div>
                  <p className="text-bark text-[10px] font-medium tracking-[0.2em] uppercase mb-2">16 —</p>
                  <p className="text-midnight text-sm font-medium mb-1">
                    How many protein-rich servings do you eat per day?
                  </p>
                  <p className="text-charcoal/40 text-xs mb-3">
                    Think chicken, fish, eggs, Greek yoghurt, protein shake, tofu, legumes.
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
                  <p className="text-bark text-[10px] font-medium tracking-[0.2em] uppercase mb-2">17 —</p>
                  <p className="text-midnight text-sm font-medium mb-3">How do you feel about food and eating?</p>
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
                </div>

                <div>
                  <p className="text-bark text-[10px] font-medium tracking-[0.2em] uppercase mb-2">18 —</p>
                  <p className="text-midnight text-sm font-medium mb-3">How is your sleep?</p>
                  <div className="space-y-2.5">
                    {SLEEP_OPTIONS.map((opt) => (
                      <RadioOption
                        key={opt}
                        name="sleep"
                        value={opt}
                        checked={formData.sleep === opt}
                        onChange={(v) => updateField('sleep', v)}
                        label={opt}
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-bark text-[10px] font-medium tracking-[0.2em] uppercase mb-2">19 —</p>
                  <p className="text-midnight text-sm font-medium mb-1">
                    Do any of these show up for you regularly?
                  </p>
                  <p className="text-charcoal/40 text-xs mb-3">Select all that apply.</p>
                  <div className="space-y-2.5">
                    {SYMPTOMS_OPTIONS.map((opt) => (
                      <CheckboxOption
                        key={opt}
                        value={opt}
                        checked={formData.symptoms.includes(opt)}
                        onChange={(v) => toggleArrayField('symptoms', v)}
                        label={opt}
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-bark text-[10px] font-medium tracking-[0.2em] uppercase mb-2">20 —</p>
                  <p className="text-midnight text-sm font-medium mb-1">
                    Are any of the following relevant to you?
                  </p>
                  <p className="text-charcoal/40 text-xs mb-3">Select all that apply.</p>
                  <div className="space-y-2.5">
                    {HEALTH_CONDITIONS_OPTIONS.map((opt) => (
                      <CheckboxOption
                        key={opt}
                        value={opt}
                        checked={formData.healthConditions.includes(opt)}
                        onChange={(v) => toggleArrayField('healthConditions', v)}
                        label={opt}
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-bark text-[10px] font-medium tracking-[0.2em] uppercase mb-2">21 —</p>
                  <label htmlFor="bodyChanges" className="block text-midnight text-sm font-medium mb-1">
                    Has anything changed noticeably in your body in the last one to two years that you haven&apos;t been able to explain or fix?{' '}
                    <span className="text-charcoal/30 font-normal">(optional)</span>
                  </label>
                  <textarea
                    id="bodyChanges"
                    value={formData.bodyChanges}
                    onChange={(e) => updateField('bodyChanges', e.target.value)}
                    placeholder="Share anything that feels significant..."
                    className={`${textareaClass} mt-3`}
                  />
                </div>
              </div>
            )}

            {/* ── Step 5: Goals & Mindset ── */}
            {step === 5 && (
              <div className="space-y-8">
                <div>
                  <p className="text-bark text-[10px] font-medium tracking-[0.2em] uppercase mb-2">22 —</p>
                  <p className="text-midnight text-sm font-medium mb-3">
                    When you think about your body right now, what&apos;s the first feeling that comes up?
                  </p>
                  <div className="space-y-2.5">
                    {BODY_FEELING_OPTIONS.map((opt) => (
                      <RadioOption
                        key={opt}
                        name="bodyFeeling"
                        value={opt}
                        checked={formData.bodyFeeling === opt}
                        onChange={(v) => updateField('bodyFeeling', v)}
                        label={opt}
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-bark text-[10px] font-medium tracking-[0.2em] uppercase mb-2">23 —</p>
                  <p className="text-midnight text-sm font-medium mb-3">
                    How is your body showing up in your work and life right now?
                  </p>
                  <div className="space-y-2.5">
                    {BODY_IN_LIFE_OPTIONS.map((opt) => (
                      <RadioOption
                        key={opt}
                        name="bodyInLife"
                        value={opt}
                        checked={formData.bodyInLife === opt}
                        onChange={(v) => updateField('bodyInLife', v)}
                        label={opt}
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-bark text-[10px] font-medium tracking-[0.2em] uppercase mb-2">24 —</p>
                  <label htmlFor="whatToChange" className="block text-midnight text-sm font-medium mb-1">
                    What do you most want to change about how your body looks, feels, or functions?
                  </label>
                  <p className="text-charcoal/40 text-xs mb-3">Be honest. You don&apos;t have to frame it perfectly.</p>
                  <textarea
                    id="whatToChange"
                    value={formData.whatToChange}
                    onChange={(e) => updateField('whatToChange', e.target.value)}
                    placeholder="Tell me what you really want..."
                    className={textareaClass}
                  />
                </div>

                <div>
                  <p className="text-bark text-[10px] font-medium tracking-[0.2em] uppercase mb-2">25 —</p>
                  <p className="text-midnight text-sm font-medium mb-3">How long have you been working toward this?</p>
                  <div className="space-y-2.5">
                    {HOW_LONG_OPTIONS.map((opt) => (
                      <RadioOption
                        key={opt}
                        name="howLong"
                        value={opt}
                        checked={formData.howLong === opt}
                        onChange={(v) => updateField('howLong', v)}
                        label={opt}
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-bark text-[10px] font-medium tracking-[0.2em] uppercase mb-2">26 —</p>
                  <label htmlFor="whatTried" className="block text-midnight text-sm font-medium mb-1">
                    What have you already tried?
                  </label>
                  <p className="text-charcoal/40 text-xs mb-3">
                    List anything — programmes, approaches, coaching, diets, phases. And what happened with each?
                  </p>
                  <textarea
                    id="whatTried"
                    value={formData.whatTried}
                    onChange={(e) => updateField('whatTried', e.target.value)}
                    placeholder="What have you tried, and what happened..."
                    className={textareaClass}
                  />
                </div>

                <div>
                  <p className="text-bark text-[10px] font-medium tracking-[0.2em] uppercase mb-2">27 —</p>
                  <p className="text-midnight text-sm font-medium mb-1">
                    When your consistency breaks down, what&apos;s usually driving it?
                  </p>
                  <p className="text-charcoal/40 text-xs mb-3">Select all that apply.</p>
                  <div className="space-y-2.5">
                    {CONSISTENCY_BREAKDOWN_OPTIONS.map((opt) => (
                      <CheckboxOption
                        key={opt}
                        value={opt}
                        checked={formData.consistencyBreakdown.includes(opt)}
                        onChange={(v) => toggleArrayField('consistencyBreakdown', v)}
                        label={opt}
                      />
                    ))}
                  </div>
                  {formData.consistencyBreakdown.includes('Something else') && (
                    <input
                      type="text"
                      value={formData.consistencyBreakdownOther}
                      onChange={(e) => updateField('consistencyBreakdownOther', e.target.value)}
                      placeholder="Tell me a little more..."
                      className={`${inputClass} mt-2`}
                    />
                  )}
                </div>

                <div>
                  <p className="text-bark text-[10px] font-medium tracking-[0.2em] uppercase mb-2">28 —</p>
                  <label htmlFor="whatYouWant" className="block text-midnight text-sm font-medium mb-1">
                    What do you actually want from this?
                  </label>
                  <p className="text-charcoal/40 text-xs mb-3">
                    Not the surface answer. The real one. A feeling, a result, a version of your life, something you haven&apos;t said out loud yet.
                  </p>
                  <textarea
                    id="whatYouWant"
                    value={formData.whatYouWant}
                    onChange={(e) => updateField('whatYouWant', e.target.value)}
                    placeholder="Tell me what you really want..."
                    className={textareaClass}
                    style={{ minHeight: '140px' }}
                  />
                </div>

                <div>
                  <p className="text-bark text-[10px] font-medium tracking-[0.2em] uppercase mb-2">29 —</p>
                  <label htmlFor="anythingElse" className="block text-midnight text-sm font-medium mb-1">
                    Anything else you want me to know?{' '}
                    <span className="text-charcoal/30 font-normal">(optional)</span>
                  </label>
                  <p className="text-charcoal/40 text-xs mb-3">
                    Injuries, medications, context I haven&apos;t asked about.
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
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
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

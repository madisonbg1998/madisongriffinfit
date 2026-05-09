'use client'

import { useState, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

// ── Step labels ───────────────────────────────────────────────────────────────

const STEP_LABELS = ['Basics', 'History', 'Goals', 'Wellbeing', 'Inside', 'Lifestyle', 'Mindset', 'Logistics']

// ── Step 1: The Basics ────────────────────────────────────────────────────────

const TIMEZONE_OPTIONS = [
  'Los Angeles / Vancouver (UTC−8/−7)',
  'Denver / Phoenix (UTC−7/−6)',
  'Chicago / Mexico City (UTC−6/−5)',
  'New York / Toronto (UTC−5/−4)',
  'Halifax / Atlantic (UTC−4/−3)',
  'São Paulo / Buenos Aires (UTC−3)',
  'Reykjavik / Lisbon (UTC+0)',
  'London / Dublin (UTC+0/+1)',
  'Paris / Amsterdam / Berlin (UTC+1/+2)',
  'Athens / Cairo / Helsinki (UTC+2/+3)',
  'Moscow / Riyadh (UTC+3)',
  'Dubai / Muscat (UTC+4)',
  'Karachi (UTC+5)',
  'Mumbai / New Delhi (UTC+5:30)',
  'Bangkok / Jakarta (UTC+7)',
  'Singapore / Kuala Lumpur (UTC+8)',
  'Hong Kong / Taipei / Perth (UTC+8)',
  'Tokyo / Seoul (UTC+9)',
  'Sydney / Melbourne (UTC+10/+11)',
  'Auckland / Wellington (UTC+12/+13)',
]

// ── Step 2: Your History ──────────────────────────────────────────────────────

const TRAINING_BACKGROUND_OPTIONS = [
  'Complete beginner',
  'Some experience — on and off over the years',
  'Intermediate — fairly consistent for 1–3 years',
  'Experienced — training consistently for 3+ years',
  'Athletic background — sport or performance training',
]

// ── Step 3: Your Goals ────────────────────────────────────────────────────────

const PRIMARY_GOAL_OPTIONS = [
  'Fat loss / body recomposition',
  'Building muscle / getting stronger',
  'Both — lose fat and build muscle',
  'Improve fitness and endurance',
  'Feel better in my body day to day',
  'Build consistency and healthy habits',
  'Other',
]

// ── Step 4: Health & Wellbeing ────────────────────────────────────────────────

const SLEEP_QUALITY_OPTIONS = [
  'Great — I fall asleep easily and wake rested',
  'Okay — mostly fine but not always restful',
  'Broken — I wake through the night',
  'Poor — I struggle to fall or stay asleep',
  'It varies a lot',
]

// ── Step 5: The Inside Stuff ──────────────────────────────────────────────────

const BOWEL_MOVEMENT_OPTIONS = [
  'Multiple times a day',
  'Once a day — regular and consistent',
  'Every couple of days',
  'Every 3+ days — I struggle to go regularly',
  'It varies a lot',
]

const DIGESTIVE_DISCOMFORT_OPTIONS = [
  'Rarely or never',
  'Occasionally',
  'Often — most days',
  'Almost always',
]

const MENSTRUAL_CYCLE_OPTIONS = [
  'Yes — regular cycle',
  'Yes — but irregular',
  'No — on hormonal contraception that stops my period',
  'No — post-menopausal',
  'No — perimenopause',
  'No — other reason',
  'Prefer not to say',
]

// ── Step 6: Your Lifestyle ────────────────────────────────────────────────────

const JOB_ACTIVITY_OPTIONS = [
  'Mostly desk-based — I sit most of the day',
  'Mixed — some sitting, some moving',
  'On my feet a lot',
  'Physically demanding',
]

const TRAVEL_FREQUENCY_OPTIONS = [
  "Rarely — I'm mostly in one place",
  'Occasionally — a few times a year',
  'Often — at least once a month',
  "Constantly — I'm location-free or always on the move",
]

const COOKING_FOR_OPTIONS = [
  'Just me',
  'Me and a partner',
  'A family with kids',
  'Housemates with different eating habits',
  'I mostly eat out or order in',
  'It varies',
]

const EATING_OUT_OPTIONS = [
  'Rarely — I cook almost everything myself',
  'A couple of times a week',
  'Most days involve a meal out or with others',
  'Almost every meal is out or social',
]

const ALCOHOL_INTAKE_OPTIONS = [
  "I don't drink",
  'Rarely — special occasions only',
  'Socially — a few times a week',
  'Most evenings, usually a glass or two',
  'It varies a lot',
]

// ── Step 7: Mindset & Food ────────────────────────────────────────────────────

const EATING_PATTERNS_OPTIONS = [
  'Pretty consistent — I eat similar things most days',
  'Good during the week, looser on weekends',
  'All-or-nothing — either on track or off the rails',
  'I graze throughout the day rather than meals',
  'Chaotic — it really varies',
]

const EMOTIONAL_EATING_OPTIONS = [
  'Rarely or never',
  'Sometimes — I notice it but can manage it',
  "Often — food is my go-to when stressed or overwhelmed",
  "Yes, and it's something I really struggle with",
]

const DISORDERED_EATING_OPTIONS = [
  'No, not really',
  'In the past, but I feel fairly resolved now',
  "Yes, it's something I'm navigating currently",
  "I'd rather not say",
]

// ── Step 8: Logistics ─────────────────────────────────────────────────────────

const EQUIPMENT_OPTIONS = [
  'Full commercial gym',
  'Home gym with weights and rack',
  'Dumbbells and/or kettlebells at home',
  'Resistance bands only',
  'Hotel gyms — varies when I travel',
  'Bodyweight only',
]

const TRAINING_DAYS_OPTIONS = [
  '2',
  '3',
  '4',
  '5',
  '6',
  'It varies week to week',
]

const SESSION_LENGTH_OPTIONS = [
  '30 minutes or less',
  'Around 45 minutes',
  'Around 60 minutes',
  '60–75 minutes',
  "As long as needed — time isn't a constraint",
]

// ── Style constants ───────────────────────────────────────────────────────────

const inputClass =
  'w-full bg-white border border-bark/20 rounded-lg px-4 py-3 text-midnight placeholder:text-charcoal/30 text-sm focus:outline-none focus:ring-2 focus:ring-bark/20 focus:border-bark transition-all duration-300'

const textareaClass =
  'w-full bg-white border border-bark/20 rounded-lg px-4 py-3 text-midnight placeholder:text-charcoal/30 text-sm min-h-[120px] resize-y focus:outline-none focus:ring-2 focus:ring-bark/20 focus:border-bark transition-all duration-300'

// ── FormData interface ────────────────────────────────────────────────────────

interface FormData {
  // Step 1
  fullName: string
  email: string
  instagram: string
  age: string
  timezone: string
  height: string
  currentWeight: string
  scaleRelationship: string
  // Step 2
  trainingBackground: string
  trainingTypes: string
  whatWorked: string
  whatDidntWork: string
  foodRelationship: string
  // Step 3
  primaryGoal: string
  goalDescription: string
  nonScaleGoals: string
  timeline: string
  biggestBlocker: string
  // Step 4
  injuries: string
  healthConditions: string
  medications: string
  energyLevel: number | null
  sleepHours: string
  sleepQuality: string
  stressLevel: number | null
  stressDescription: string
  // Step 5
  bowelMovements: string
  digestiveDiscomfort: string
  foodIntolerances: string
  waterIntake: string
  menstrualCycle: string
  hormoneNotes: string
  // Step 6
  workDescription: string
  jobActivity: string
  travelFrequency: string
  cookingFor: string
  eatingOut: string
  alcoholIntake: string
  lifestyleNotes: string
  // Step 7
  eatingPatterns: string
  emotionalEating: string
  disorderedEatingHistory: string
  offPlanResponse: string
  foodBodyNotes: string
  // Step 8
  equipment: string[]
  trainingDaysPerWeek: string
  sessionLength: string
  movementsToAvoid: string
  otherExercise: string
  anythingElse: string
}

const initialFormData: FormData = {
  fullName: '',
  email: '',
  instagram: '',
  age: '',
  timezone: '',
  height: '',
  currentWeight: '',
  scaleRelationship: '',
  trainingBackground: '',
  trainingTypes: '',
  whatWorked: '',
  whatDidntWork: '',
  foodRelationship: '',
  primaryGoal: '',
  goalDescription: '',
  nonScaleGoals: '',
  timeline: '',
  biggestBlocker: '',
  injuries: '',
  healthConditions: '',
  medications: '',
  energyLevel: null,
  sleepHours: '',
  sleepQuality: '',
  stressLevel: null,
  stressDescription: '',
  bowelMovements: '',
  digestiveDiscomfort: '',
  foodIntolerances: '',
  waterIntake: '',
  menstrualCycle: '',
  hormoneNotes: '',
  workDescription: '',
  jobActivity: '',
  travelFrequency: '',
  cookingFor: '',
  eatingOut: '',
  alcoholIntake: '',
  lifestyleNotes: '',
  eatingPatterns: '',
  emotionalEating: '',
  disorderedEatingHistory: '',
  offPlanResponse: '',
  foodBodyNotes: '',
  equipment: [],
  trainingDaysPerWeek: '',
  sessionLength: '',
  movementsToAvoid: '',
  otherExercise: '',
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

function ScaleInput({
  value,
  onChange,
  lowLabel,
  highLabel,
}: {
  value: number | null
  onChange: (val: number) => void
  lowLabel: string
  highLabel: string
}) {
  return (
    <div>
      <div className="flex gap-1.5">
        {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
          <button
            key={n}
            type="button"
            onClick={() => onChange(n)}
            className={`flex-1 h-9 rounded-lg text-xs font-medium border transition-all duration-200 ${
              value === n
                ? 'bg-bark border-bark text-cream'
                : 'bg-white border-bark/20 text-charcoal/60 hover:border-bark/40'
            }`}
          >
            {n}
          </button>
        ))}
      </div>
      <div className="flex justify-between mt-2">
        <span className="text-charcoal/40 text-[11px]">{lowLabel}</span>
        <span className="text-charcoal/40 text-[11px]">{highLabel}</span>
      </div>
    </div>
  )
}

function StepHeader({
  subtitle,
  desc,
}: {
  subtitle?: string
  desc?: string
}) {
  if (!subtitle && !desc) return null
  return (
    <div className="mb-8">
      {subtitle && (
        <p className="font-serif italic text-charcoal/60 text-base mb-1">{subtitle}</p>
      )}
      {desc && (
        <p className="text-charcoal/50 text-sm">{desc}</p>
      )}
    </div>
  )
}

function QNum({ num }: { num: string }) {
  return (
    <p className="text-bark text-[10px] font-medium tracking-[0.2em] uppercase mb-2">
      {num} —
    </p>
  )
}

// ── Main component ────────────────────────────────────────────────────────────

export default function IntakeForm() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const updateField = useCallback((field: keyof FormData, value: string | number | null) => {
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
      setStep((s) => Math.min(s + 1, 8))
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

    const payload = {
      ...formData,
      energyLevel: formData.energyLevel !== null ? `${formData.energyLevel}/10` : '',
      stressLevel: formData.stressLevel !== null ? `${formData.stressLevel}/10` : '',
    }

    try {
      const response = await fetch('/api/intake', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong. Please try again.')
      }

      router.push('/intake/thank-you')
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

  // ── Main form layout ──────────────────────────────────────────────────────

  return (
    <div className="min-h-screen bg-cream flex">
      {/* Form side */}
      <div className="w-full lg:w-[60%] px-6 sm:px-10 lg:px-16 xl:px-24 py-16 sm:py-20">
        <div className="max-w-lg mx-auto lg:mx-0">

          {/* Static header */}
          <p className="text-bark text-[10px] font-medium tracking-[0.2em] uppercase mb-3">
            Client Intake
          </p>
          <h1 className="font-serif text-midnight text-3xl sm:text-4xl font-medium mb-3">
            Intake Form
          </h1>
          <p className="text-charcoal/60 text-base leading-relaxed mb-10">
            Take your time — there are no wrong answers. The more honest you are, the better I can support you.
          </p>

          {/* Step progress bar */}
          <div className="flex items-center mb-10">
            {STEP_LABELS.map((label, index) => {
              const stepNum = index + 1
              const isCompleted = step > stepNum
              const isCurrent = step === stepNum
              return (
                <div key={label} className="flex items-center">
                  {index > 0 && (
                    <div
                      className={`w-3 sm:w-4 h-px transition-colors duration-300 ${
                        isCompleted ? 'bg-sand' : 'bg-bark/15'
                      }`}
                    />
                  )}
                  <div className="flex flex-col items-center">
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
                  </div>
                </div>
              )
            })}
          </div>

          {/* Error message */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-lg mb-6 animate-fade-in">
              {error}
            </div>
          )}

          {/* ── Step 1: The Basics ──────────────────────────────────────────── */}
          {step === 1 && (
            <div className="space-y-6 animate-fade-in">
              <StepHeader />

              <div>
                <QNum num="01" />
                <label htmlFor="fullName" className="block text-midnight text-sm font-medium mb-2">
                  Full name <span className="text-sand">*</span>
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
                <QNum num="02" />
                <label htmlFor="email" className="block text-midnight text-sm font-medium mb-2">
                  Email address <span className="text-sand">*</span>
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
                <QNum num="03" />
                <label htmlFor="instagram" className="block text-midnight text-sm font-medium mb-1">
                  Instagram handle{' '}
                  <span className="text-charcoal/30 font-normal">(optional)</span>
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
                <QNum num="04" />
                <label htmlFor="age" className="block text-midnight text-sm font-medium mb-2">
                  Age
                </label>
                <input
                  id="age"
                  type="text"
                  value={formData.age}
                  onChange={(e) => updateField('age', e.target.value)}
                  placeholder="e.g. 32"
                  className={inputClass}
                />
              </div>

              <div>
                <QNum num="05" />
                <label htmlFor="timezone" className="block text-midnight text-sm font-medium mb-2">
                  Timezone
                </label>
                <div className="relative">
                  <select
                    id="timezone"
                    value={formData.timezone}
                    onChange={(e) => updateField('timezone', e.target.value)}
                    className={`${inputClass} appearance-none cursor-pointer`}
                  >
                    <option value="" disabled>Select your timezone</option>
                    {TIMEZONE_OPTIONS.map((tz) => (
                      <option key={tz} value={tz}>{tz}</option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
                    <svg
                      className="w-4 h-4 text-bark/50"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </div>
                </div>
              </div>

              <div>
                <QNum num="06" />
                <label htmlFor="height" className="block text-midnight text-sm font-medium mb-2">
                  Height
                </label>
                <input
                  id="height"
                  type="text"
                  value={formData.height}
                  onChange={(e) => updateField('height', e.target.value)}
                  placeholder="e.g. 5'6&quot; or 168cm"
                  className={inputClass}
                />
              </div>

              <div>
                <QNum num="07" />
                <label htmlFor="currentWeight" className="block text-midnight text-sm font-medium mb-2">
                  Current weight
                </label>
                <input
                  id="currentWeight"
                  type="text"
                  value={formData.currentWeight}
                  onChange={(e) => updateField('currentWeight', e.target.value)}
                  placeholder="e.g. 65kg or 143lbs"
                  className={inputClass}
                />
              </div>

              <div>
                <QNum num="08" />
                <label htmlFor="scaleRelationship" className="block text-midnight text-sm font-medium mb-1">
                  What&apos;s your relationship with the scale?
                </label>
                <p className="text-charcoal/40 text-xs mb-3">
                  Do you weigh yourself regularly? Does the number affect your mood or behaviour? Be honest — this helps me a lot.
                </p>
                <textarea
                  id="scaleRelationship"
                  value={formData.scaleRelationship}
                  onChange={(e) => updateField('scaleRelationship', e.target.value)}
                  placeholder="Share how you feel about the scale..."
                  className={textareaClass}
                />
              </div>
            </div>
          )}

          {/* ── Step 2: Your History ────────────────────────────────────────── */}
          {step === 2 && (
            <div className="space-y-8 animate-fade-in">
              <StepHeader
                subtitle="Where you've been."
                desc="Your history tells me a lot about what's going to work for you. Don't hold back."
              />

              <div>
                <QNum num="09" />
                <p className="text-midnight text-sm font-medium mb-3">
                  How would you describe your training background?
                </p>
                <div className="space-y-2.5">
                  {TRAINING_BACKGROUND_OPTIONS.map((opt) => (
                    <RadioOption
                      key={opt}
                      name="trainingBackground"
                      value={opt}
                      checked={formData.trainingBackground === opt}
                      onChange={(v) => updateField('trainingBackground', v)}
                      label={opt}
                    />
                  ))}
                </div>
              </div>

              <div>
                <QNum num="10" />
                <label htmlFor="trainingTypes" className="block text-midnight text-sm font-medium mb-1">
                  What kinds of training have you done before?
                </label>
                <p className="text-charcoal/40 text-xs mb-3">
                  Gym, running, Pilates, CrossFit, sport — anything counts.
                </p>
                <textarea
                  id="trainingTypes"
                  value={formData.trainingTypes}
                  onChange={(e) => updateField('trainingTypes', e.target.value)}
                  placeholder="Tell me what you've tried..."
                  className={textareaClass}
                />
              </div>

              <div>
                <QNum num="11" />
                <label htmlFor="whatWorked" className="block text-midnight text-sm font-medium mb-1">
                  What has worked for you in the past?
                </label>
                <p className="text-charcoal/40 text-xs mb-3">
                  Even if it was short-lived — what felt good, what got results?
                </p>
                <textarea
                  id="whatWorked"
                  value={formData.whatWorked}
                  onChange={(e) => updateField('whatWorked', e.target.value)}
                  placeholder="What clicked, even temporarily..."
                  className={textareaClass}
                />
              </div>

              <div>
                <QNum num="12" />
                <label htmlFor="whatDidntWork" className="block text-midnight text-sm font-medium mb-2">
                  What hasn&apos;t worked, and why do you think that is?
                </label>
                <textarea
                  id="whatDidntWork"
                  value={formData.whatDidntWork}
                  onChange={(e) => updateField('whatDidntWork', e.target.value)}
                  placeholder="What you've tried that didn't stick or didn't work..."
                  className={textareaClass}
                />
              </div>

              <div>
                <QNum num="13" />
                <label htmlFor="foodRelationship" className="block text-midnight text-sm font-medium mb-1">
                  How would you describe your relationship with food and dieting?
                </label>
                <p className="text-charcoal/40 text-xs mb-3">
                  Any history of restriction, calorie counting, yo-yo dieting, fad diets — all relevant and all safe to share here.
                </p>
                <textarea
                  id="foodRelationship"
                  value={formData.foodRelationship}
                  onChange={(e) => updateField('foodRelationship', e.target.value)}
                  placeholder="Your history with food and dieting..."
                  className={textareaClass}
                />
              </div>
            </div>
          )}

          {/* ── Step 3: Your Goals ──────────────────────────────────────────── */}
          {step === 3 && (
            <div className="space-y-8 animate-fade-in">
              <StepHeader
                subtitle="Where you're going."
                desc="The more specific you are here, the better. Vague goals get vague results — let's get clear."
              />

              <div>
                <QNum num="14" />
                <p className="text-midnight text-sm font-medium mb-3">
                  What is your primary goal right now?
                </p>
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
                <QNum num="15" />
                <label htmlFor="goalDescription" className="block text-midnight text-sm font-medium mb-1">
                  Describe your goal in your own words.
                </label>
                <p className="text-charcoal/40 text-xs mb-3">
                  What does success actually look and feel like for you? Paint the picture.
                </p>
                <textarea
                  id="goalDescription"
                  value={formData.goalDescription}
                  onChange={(e) => updateField('goalDescription', e.target.value)}
                  placeholder="Describe what success looks and feels like..."
                  className={textareaClass}
                />
              </div>

              <div>
                <QNum num="16" />
                <label htmlFor="nonScaleGoals" className="block text-midnight text-sm font-medium mb-1">
                  Non-scale goals
                </label>
                <p className="text-charcoal/40 text-xs mb-3">
                  Beyond the number, what else matters to you? Energy, confidence, strength, how your clothes fit, keeping up with your kids, a specific lift?
                </p>
                <textarea
                  id="nonScaleGoals"
                  value={formData.nonScaleGoals}
                  onChange={(e) => updateField('nonScaleGoals', e.target.value)}
                  placeholder="What matters beyond the scale..."
                  className={textareaClass}
                />
              </div>

              <div>
                <QNum num="17" />
                <label htmlFor="timeline" className="block text-midnight text-sm font-medium mb-1">
                  Is there a timeline you&apos;re working towards?
                </label>
                <p className="text-charcoal/40 text-xs mb-3">
                  A trip, an event, a milestone — or just a general timeframe you have in mind.
                </p>
                <input
                  id="timeline"
                  type="text"
                  value={formData.timeline}
                  onChange={(e) => updateField('timeline', e.target.value)}
                  placeholder="e.g. 3 months, a holiday in June..."
                  className={inputClass}
                />
              </div>

              <div>
                <QNum num="18" />
                <label htmlFor="biggestBlocker" className="block text-midnight text-sm font-medium mb-2">
                  What do you think has been the biggest thing holding you back?
                </label>
                <textarea
                  id="biggestBlocker"
                  value={formData.biggestBlocker}
                  onChange={(e) => updateField('biggestBlocker', e.target.value)}
                  placeholder="Be honest — what's really been in the way?"
                  className={textareaClass}
                />
              </div>
            </div>
          )}

          {/* ── Step 4: Health & Wellbeing ───────────────────────────────────── */}
          {step === 4 && (
            <div className="space-y-8 animate-fade-in">
              <StepHeader
                subtitle="Your body's story."
                desc="Everything here stays between us. The more I know, the safer and smarter your programming will be."
              />

              <div>
                <QNum num="19" />
                <label htmlFor="injuries" className="block text-midnight text-sm font-medium mb-1">
                  Any injuries, chronic pain, or physical limitations?
                </label>
                <p className="text-charcoal/40 text-xs mb-3">
                  Past or present — anything that affects how you move or train.
                </p>
                <textarea
                  id="injuries"
                  value={formData.injuries}
                  onChange={(e) => updateField('injuries', e.target.value)}
                  placeholder="None, or describe..."
                  className={textareaClass}
                />
              </div>

              <div>
                <QNum num="20" />
                <label htmlFor="healthConditions" className="block text-midnight text-sm font-medium mb-1">
                  Any diagnosed health conditions?
                </label>
                <p className="text-charcoal/40 text-xs mb-3">
                  PCOS, thyroid issues, diabetes, autoimmune conditions, anything relevant.
                </p>
                <textarea
                  id="healthConditions"
                  value={formData.healthConditions}
                  onChange={(e) => updateField('healthConditions', e.target.value)}
                  placeholder="None, or describe..."
                  className={textareaClass}
                />
              </div>

              <div>
                <QNum num="21" />
                <label htmlFor="medications" className="block text-midnight text-sm font-medium mb-1">
                  Are you currently taking any medications or supplements?
                </label>
                <p className="text-charcoal/40 text-xs mb-3">
                  Including the pill, HRT, thyroid medication, creatine, antidepressants, anything you take regularly.
                </p>
                <textarea
                  id="medications"
                  value={formData.medications}
                  onChange={(e) => updateField('medications', e.target.value)}
                  placeholder="None, or list them..."
                  className={textareaClass}
                />
              </div>

              <div>
                <QNum num="22" />
                <p className="text-midnight text-sm font-medium mb-1">
                  How are your energy levels generally?
                </p>
                <p className="text-charcoal/40 text-xs mb-4">
                  Select a number from 1 to 10.
                </p>
                <ScaleInput
                  value={formData.energyLevel}
                  onChange={(v) => updateField('energyLevel', v)}
                  lowLabel="Running on empty"
                  highLabel="Energised and firing"
                />
              </div>

              <div>
                <QNum num="23" />
                <label htmlFor="sleepHours" className="block text-midnight text-sm font-medium mb-2">
                  How many hours of sleep do you get on average?
                </label>
                <input
                  id="sleepHours"
                  type="text"
                  value={formData.sleepHours}
                  onChange={(e) => updateField('sleepHours', e.target.value)}
                  placeholder="e.g. 7 hours"
                  className={inputClass}
                />
              </div>

              <div>
                <QNum num="24" />
                <p className="text-midnight text-sm font-medium mb-3">
                  How would you describe your sleep quality?
                </p>
                <div className="space-y-2.5">
                  {SLEEP_QUALITY_OPTIONS.map((opt) => (
                    <RadioOption
                      key={opt}
                      name="sleepQuality"
                      value={opt}
                      checked={formData.sleepQuality === opt}
                      onChange={(v) => updateField('sleepQuality', v)}
                      label={opt}
                    />
                  ))}
                </div>
              </div>

              <div>
                <QNum num="25" />
                <p className="text-midnight text-sm font-medium mb-1">
                  How would you rate your current stress levels?
                </p>
                <p className="text-charcoal/40 text-xs mb-4">
                  Select a number from 1 to 10.
                </p>
                <ScaleInput
                  value={formData.stressLevel}
                  onChange={(v) => updateField('stressLevel', v)}
                  lowLabel="Very calm"
                  highLabel="Overwhelmed"
                />
              </div>

              <div>
                <QNum num="26" />
                <label htmlFor="stressDescription" className="block text-midnight text-sm font-medium mb-2">
                  What does a stressful period look like for you, and how does it affect your habits?
                </label>
                <textarea
                  id="stressDescription"
                  value={formData.stressDescription}
                  onChange={(e) => updateField('stressDescription', e.target.value)}
                  placeholder="How stress shows up in your life and habits..."
                  className={textareaClass}
                />
              </div>
            </div>
          )}

          {/* ── Step 5: The Inside Stuff ─────────────────────────────────────── */}
          {step === 5 && (
            <div className="space-y-8 animate-fade-in">
              <StepHeader
                subtitle="What's happening under the hood."
                desc="This is the stuff most coaches never ask about — and exactly why we're asking. No TMI here, I promise."
              />

              <div>
                <QNum num="27" />
                <p className="text-midnight text-sm font-medium mb-3">
                  How often are you having a bowel movement?
                </p>
                <div className="space-y-2.5">
                  {BOWEL_MOVEMENT_OPTIONS.map((opt) => (
                    <RadioOption
                      key={opt}
                      name="bowelMovements"
                      value={opt}
                      checked={formData.bowelMovements === opt}
                      onChange={(v) => updateField('bowelMovements', v)}
                      label={opt}
                    />
                  ))}
                </div>
              </div>

              <div>
                <QNum num="28" />
                <p className="text-midnight text-sm font-medium mb-3">
                  Do you experience bloating, gas, or digestive discomfort?
                </p>
                <div className="space-y-2.5">
                  {DIGESTIVE_DISCOMFORT_OPTIONS.map((opt) => (
                    <RadioOption
                      key={opt}
                      name="digestiveDiscomfort"
                      value={opt}
                      checked={formData.digestiveDiscomfort === opt}
                      onChange={(v) => updateField('digestiveDiscomfort', v)}
                      label={opt}
                    />
                  ))}
                </div>
              </div>

              <div>
                <QNum num="29" />
                <label htmlFor="foodIntolerances" className="block text-midnight text-sm font-medium mb-2">
                  Any known food intolerances, sensitivities, or allergies?
                </label>
                <textarea
                  id="foodIntolerances"
                  value={formData.foodIntolerances}
                  onChange={(e) => updateField('foodIntolerances', e.target.value)}
                  placeholder="None, or describe..."
                  className={textareaClass}
                />
              </div>

              <div>
                <QNum num="30" />
                <label htmlFor="waterIntake" className="block text-midnight text-sm font-medium mb-2">
                  How much water do you drink on a typical day?
                </label>
                <input
                  id="waterIntake"
                  type="text"
                  value={formData.waterIntake}
                  onChange={(e) => updateField('waterIntake', e.target.value)}
                  placeholder="e.g. 2 litres, 8 glasses..."
                  className={inputClass}
                />
              </div>

              <div>
                <QNum num="31" />
                <p className="text-midnight text-sm font-medium mb-3">
                  Do you have a menstrual cycle?
                </p>
                <div className="space-y-2.5">
                  {MENSTRUAL_CYCLE_OPTIONS.map((opt) => (
                    <RadioOption
                      key={opt}
                      name="menstrualCycle"
                      value={opt}
                      checked={formData.menstrualCycle === opt}
                      onChange={(v) => updateField('menstrualCycle', v)}
                      label={opt}
                    />
                  ))}
                </div>
              </div>

              <div>
                <QNum num="32" />
                <label htmlFor="hormoneNotes" className="block text-midnight text-sm font-medium mb-1">
                  Anything about your cycle or hormones you&apos;d like me to know?
                </label>
                <p className="text-charcoal/40 text-xs mb-3">
                  PMS symptoms, PMDD, hormonal acne, mood shifts, energy crashes — anything that affects your life and training.
                </p>
                <textarea
                  id="hormoneNotes"
                  value={formData.hormoneNotes}
                  onChange={(e) => updateField('hormoneNotes', e.target.value)}
                  placeholder="Nothing relevant, or share here..."
                  className={textareaClass}
                />
              </div>
            </div>
          )}

          {/* ── Step 6: Your Lifestyle ───────────────────────────────────────── */}
          {step === 6 && (
            <div className="space-y-8 animate-fade-in">
              <StepHeader
                subtitle="How you actually live."
                desc="Your programme needs to fit your life — not the other way around. Tell me what real life looks like."
              />

              <div>
                <QNum num="33" />
                <label htmlFor="workDescription" className="block text-midnight text-sm font-medium mb-1">
                  What do you do for work?
                </label>
                <p className="text-charcoal/40 text-xs mb-3">
                  This helps me understand your schedule, activity level, and stress profile.
                </p>
                <input
                  id="workDescription"
                  type="text"
                  value={formData.workDescription}
                  onChange={(e) => updateField('workDescription', e.target.value)}
                  placeholder="Your job or what you do day-to-day..."
                  className={inputClass}
                />
              </div>

              <div>
                <QNum num="34" />
                <p className="text-midnight text-sm font-medium mb-3">
                  How active is your job day-to-day?
                </p>
                <div className="space-y-2.5">
                  {JOB_ACTIVITY_OPTIONS.map((opt) => (
                    <RadioOption
                      key={opt}
                      name="jobActivity"
                      value={opt}
                      checked={formData.jobActivity === opt}
                      onChange={(v) => updateField('jobActivity', v)}
                      label={opt}
                    />
                  ))}
                </div>
              </div>

              <div>
                <QNum num="35" />
                <p className="text-midnight text-sm font-medium mb-3">
                  How often do you travel?
                </p>
                <div className="space-y-2.5">
                  {TRAVEL_FREQUENCY_OPTIONS.map((opt) => (
                    <RadioOption
                      key={opt}
                      name="travelFrequency"
                      value={opt}
                      checked={formData.travelFrequency === opt}
                      onChange={(v) => updateField('travelFrequency', v)}
                      label={opt}
                    />
                  ))}
                </div>
              </div>

              <div>
                <QNum num="36" />
                <p className="text-midnight text-sm font-medium mb-3">
                  Who are you cooking for?
                </p>
                <div className="space-y-2.5">
                  {COOKING_FOR_OPTIONS.map((opt) => (
                    <RadioOption
                      key={opt}
                      name="cookingFor"
                      value={opt}
                      checked={formData.cookingFor === opt}
                      onChange={(v) => updateField('cookingFor', v)}
                      label={opt}
                    />
                  ))}
                </div>
              </div>

              <div>
                <QNum num="37" />
                <p className="text-midnight text-sm font-medium mb-3">
                  How often do you eat out or eat socially?
                </p>
                <div className="space-y-2.5">
                  {EATING_OUT_OPTIONS.map((opt) => (
                    <RadioOption
                      key={opt}
                      name="eatingOut"
                      value={opt}
                      checked={formData.eatingOut === opt}
                      onChange={(v) => updateField('eatingOut', v)}
                      label={opt}
                    />
                  ))}
                </div>
              </div>

              <div>
                <QNum num="38" />
                <p className="text-midnight text-sm font-medium mb-3">
                  How would you describe your alcohol intake?
                </p>
                <div className="space-y-2.5">
                  {ALCOHOL_INTAKE_OPTIONS.map((opt) => (
                    <RadioOption
                      key={opt}
                      name="alcoholIntake"
                      value={opt}
                      checked={formData.alcoholIntake === opt}
                      onChange={(v) => updateField('alcoholIntake', v)}
                      label={opt}
                    />
                  ))}
                </div>
              </div>

              <div>
                <QNum num="39" />
                <label htmlFor="lifestyleNotes" className="block text-midnight text-sm font-medium mb-1">
                  Anything else about your lifestyle I should know?
                </label>
                <p className="text-charcoal/40 text-xs mb-3">
                  Shift work, young kids, caring responsibilities, a very social job, night owl tendencies — anything that shapes your reality.
                </p>
                <textarea
                  id="lifestyleNotes"
                  value={formData.lifestyleNotes}
                  onChange={(e) => updateField('lifestyleNotes', e.target.value)}
                  placeholder="Nothing else, or share here..."
                  className={textareaClass}
                />
              </div>
            </div>
          )}

          {/* ── Step 7: Mindset & Food ───────────────────────────────────────── */}
          {step === 7 && (
            <div className="space-y-8 animate-fade-in">
              <StepHeader
                subtitle="Your head space."
                desc="This is the part most people skip. We're not skipping it. The more honest you are, the more I can actually help."
              />

              <div>
                <QNum num="40" />
                <p className="text-midnight text-sm font-medium mb-3">
                  How would you describe your eating patterns day to day?
                </p>
                <div className="space-y-2.5">
                  {EATING_PATTERNS_OPTIONS.map((opt) => (
                    <RadioOption
                      key={opt}
                      name="eatingPatterns"
                      value={opt}
                      checked={formData.eatingPatterns === opt}
                      onChange={(v) => updateField('eatingPatterns', v)}
                      label={opt}
                    />
                  ))}
                </div>
              </div>

              <div>
                <QNum num="41" />
                <p className="text-midnight text-sm font-medium mb-3">
                  Do you eat emotionally or in response to stress?
                </p>
                <div className="space-y-2.5">
                  {EMOTIONAL_EATING_OPTIONS.map((opt) => (
                    <RadioOption
                      key={opt}
                      name="emotionalEating"
                      value={opt}
                      checked={formData.emotionalEating === opt}
                      onChange={(v) => updateField('emotionalEating', v)}
                      label={opt}
                    />
                  ))}
                </div>
              </div>

              <div>
                <QNum num="42" />
                <p className="text-midnight text-sm font-medium mb-1">
                  Do you have any history with disordered eating or a difficult relationship with food?
                </p>
                <p className="text-charcoal/40 text-xs mb-3">
                  You don&apos;t have to share details — a simple answer helps me understand how to approach nutrition with you.
                </p>
                <div className="space-y-2.5">
                  {DISORDERED_EATING_OPTIONS.map((opt) => (
                    <RadioOption
                      key={opt}
                      name="disorderedEatingHistory"
                      value={opt}
                      checked={formData.disorderedEatingHistory === opt}
                      onChange={(v) => updateField('disorderedEatingHistory', v)}
                      label={opt}
                    />
                  ))}
                </div>
              </div>

              <div>
                <QNum num="43" />
                <label htmlFor="offPlanResponse" className="block text-midnight text-sm font-medium mb-1">
                  How do you tend to respond when things go off plan?
                </label>
                <p className="text-charcoal/40 text-xs mb-3">
                  Do you dust yourself off, or does one bad day become a bad week?
                </p>
                <textarea
                  id="offPlanResponse"
                  value={formData.offPlanResponse}
                  onChange={(e) => updateField('offPlanResponse', e.target.value)}
                  placeholder="How you typically respond when things go sideways..."
                  className={textareaClass}
                />
              </div>

              <div>
                <QNum num="44" />
                <label htmlFor="foodBodyNotes" className="block text-midnight text-sm font-medium mb-2">
                  Is there anything about your relationship with food or your body that you think I should know going in?
                </label>
                <textarea
                  id="foodBodyNotes"
                  value={formData.foodBodyNotes}
                  onChange={(e) => updateField('foodBodyNotes', e.target.value)}
                  placeholder="Nothing else, or share here..."
                  className={textareaClass}
                />
              </div>
            </div>
          )}

          {/* ── Step 8: Logistics ───────────────────────────────────────────── */}
          {step === 8 && (
            <div className="space-y-8 animate-fade-in">
              <StepHeader
                subtitle="Making it work."
                desc="Last page! Let's talk about the practical stuff so your programme actually fits into your real life."
              />

              <div>
                <QNum num="45" />
                <p className="text-midnight text-sm font-medium mb-1">
                  What equipment do you have access to?
                </p>
                <p className="text-charcoal/40 text-xs mb-3">Select all that apply.</p>
                <div className="space-y-2.5">
                  {EQUIPMENT_OPTIONS.map((opt) => (
                    <CheckboxOption
                      key={opt}
                      value={opt}
                      checked={formData.equipment.includes(opt)}
                      onChange={(v) => toggleArrayField('equipment', v)}
                      label={opt}
                    />
                  ))}
                </div>
              </div>

              <div>
                <QNum num="46" />
                <p className="text-midnight text-sm font-medium mb-3">
                  How many days per week can you realistically commit to training?
                </p>
                <div className="space-y-2.5">
                  {TRAINING_DAYS_OPTIONS.map((opt) => (
                    <RadioOption
                      key={opt}
                      name="trainingDaysPerWeek"
                      value={opt}
                      checked={formData.trainingDaysPerWeek === opt}
                      onChange={(v) => updateField('trainingDaysPerWeek', v)}
                      label={opt}
                    />
                  ))}
                </div>
              </div>

              <div>
                <QNum num="47" />
                <p className="text-midnight text-sm font-medium mb-3">
                  How long do you have for each session?
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
                <QNum num="48" />
                <label htmlFor="movementsToAvoid" className="block text-midnight text-sm font-medium mb-2">
                  Are there any movements or exercises you can&apos;t do or really dislike?
                </label>
                <textarea
                  id="movementsToAvoid"
                  value={formData.movementsToAvoid}
                  onChange={(e) => updateField('movementsToAvoid', e.target.value)}
                  placeholder="None, or describe..."
                  className={textareaClass}
                />
              </div>

              <div>
                <QNum num="49" />
                <label htmlFor="otherExercise" className="block text-midnight text-sm font-medium mb-1">
                  Do you do any other exercise outside of your training sessions?
                </label>
                <p className="text-charcoal/40 text-xs mb-3">
                  Walking, yoga, swimming, sport, cycling — anything that&apos;s part of your regular routine.
                </p>
                <textarea
                  id="otherExercise"
                  value={formData.otherExercise}
                  onChange={(e) => updateField('otherExercise', e.target.value)}
                  placeholder="Nothing else, or describe..."
                  className={textareaClass}
                />
              </div>

              <div>
                <QNum num="50" />
                <label htmlFor="anythingElse" className="block text-midnight text-sm font-medium mb-1">
                  Is there anything else you&apos;d like me to know before we get started?
                </label>
                <p className="text-charcoal/40 text-xs mb-3">
                  Anything this form didn&apos;t cover that feels important. The floor is yours.
                </p>
                <textarea
                  id="anythingElse"
                  value={formData.anythingElse}
                  onChange={(e) => updateField('anythingElse', e.target.value)}
                  placeholder="Nothing else..."
                  className={textareaClass}
                />
              </div>
            </div>
          )}

          {/* Navigation buttons */}
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

            {step < 8 ? (
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
                  'Submit'
                )}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Photo side — desktop only, sticky */}
      <div className="hidden lg:block w-[40%]">
        <div className="sticky top-0 h-screen">
          <Image
            src="/Madison-157.webp"
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

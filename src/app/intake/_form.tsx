'use client'

import { useCallback, useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { doblegh, elza, geistMono } from '../fonts'

type FieldType = 'text' | 'email' | 'number' | 'textarea' | 'radio' | 'checkbox' | 'dropdown' | 'rating'

interface FieldDef {
  id: string
  label: string
  type: FieldType
  required?: boolean
  placeholder?: string
  help?: string
  options?: string[]
  min?: string
  max?: string
}

interface StepDef {
  title: string
  fields: FieldDef[]
}

type Answers = Record<string, string | string[]>

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

// Field ids are the keys the Adhara intake form already receives; keep them stable.
const STEPS: StepDef[] = [
  {
    title: 'About You',
    fields: [
      { id: 'fullName', label: 'Full name', type: 'text', required: true, placeholder: 'Your name' },
      { id: 'email', label: 'Email address', type: 'email', required: true, placeholder: 'you@example.com' },
      { id: 'instagram', label: 'Instagram handle', type: 'text', placeholder: '@yourhandle' },
      { id: 'age', label: 'Age', type: 'number', placeholder: 'e.g. 32' },
      { id: 'timezone', label: 'Timezone', type: 'dropdown', options: TIMEZONE_OPTIONS },
      { id: 'height', label: 'Height', type: 'text', placeholder: "e.g. 5'6\" or 168cm" },
      { id: 'currentWeight', label: 'Current weight', type: 'text', placeholder: 'e.g. 65kg or 143lbs' },
      {
        id: 'scaleRelationship',
        label: "What's your relationship with the scale?",
        type: 'textarea',
        help: 'Do you weigh yourself regularly? Does the number affect your mood or behaviour? Be honest — this helps me a lot.',
        placeholder: 'Share how you feel about the scale...',
      },
    ],
  },
  {
    title: 'Training History',
    fields: [
      {
        id: 'trainingBackground',
        label: 'How would you describe your training background?',
        type: 'radio',
        options: [
          'Complete beginner',
          'Some experience — on and off over the years',
          'Intermediate — fairly consistent for 1–3 years',
          'Experienced — training consistently for 3+ years',
          'Athletic background — sport or performance training',
        ],
      },
      { id: 'trainingTypes', label: 'What kinds of training have you done before?', type: 'textarea', help: 'Gym, running, Pilates, CrossFit, sport — anything counts.', placeholder: "Tell me what you've tried..." },
      { id: 'whatWorked', label: 'What has worked for you in the past?', type: 'textarea', help: 'Even if it was short-lived — what felt good, what got results?', placeholder: 'What clicked, even temporarily...' },
      { id: 'whatDidntWork', label: "What hasn't worked, and why do you think that is?", type: 'textarea', placeholder: "What you've tried that didn't stick or didn't work..." },
      { id: 'foodRelationship', label: 'How would you describe your relationship with food and dieting?', type: 'textarea', help: 'Any history of restriction, calorie counting, yo-yo dieting, fad diets — all relevant and all safe to share here.', placeholder: 'Your history with food and dieting...' },
    ],
  },
  {
    title: 'Your Goals',
    fields: [
      {
        id: 'primaryGoal',
        label: 'What is your primary goal right now?',
        type: 'radio',
        options: [
          'Fat loss / body recomposition',
          'Building muscle / getting stronger',
          'Both — lose fat and build muscle',
          'Improve fitness and endurance',
          'Feel better in my body day to day',
          'Build consistency and healthy habits',
          'Other',
        ],
      },
      { id: 'goalDescription', label: 'Describe your goal in your own words.', type: 'textarea', help: 'What does success actually look and feel like for you? Paint the picture.', placeholder: 'Describe what success looks and feels like...' },
      { id: 'nonScaleGoals', label: 'Non-scale goals', type: 'textarea', help: 'Beyond the number, what else matters to you? Energy, confidence, strength, how your clothes fit, keeping up with your kids, a specific lift?', placeholder: 'What matters beyond the scale...' },
      { id: 'timeline', label: 'Is there a timeline you’re working towards?', type: 'text', help: 'A trip, an event, a milestone — or just a general timeframe you have in mind.', placeholder: 'e.g. 3 months, a holiday in June...' },
      { id: 'biggestBlocker', label: 'What do you think has been the biggest thing holding you back?', type: 'textarea', placeholder: "Be honest — what's really been in the way?" },
    ],
  },
  {
    title: 'Health',
    fields: [
      { id: 'injuries', label: 'Any injuries, chronic pain, or physical limitations?', type: 'textarea', help: 'Past or present — anything that affects how you move or train.', placeholder: 'None, or describe...' },
      { id: 'healthConditions', label: 'Any diagnosed health conditions?', type: 'textarea', help: 'PCOS, thyroid issues, diabetes, autoimmune conditions, anything relevant.', placeholder: 'None, or describe...' },
      { id: 'medications', label: 'Are you currently taking any medications or supplements?', type: 'textarea', help: 'Including the pill, HRT, thyroid medication, creatine, antidepressants, anything you take regularly.', placeholder: 'None, or list them...' },
      { id: 'energyLevel', label: 'How are your energy levels generally?', type: 'rating', help: 'Select a number from 1 to 10.', min: 'Running on empty', max: 'Energised and firing' },
      { id: 'sleepHours', label: 'How many hours of sleep do you get on average?', type: 'text', placeholder: 'e.g. 7 hours' },
      {
        id: 'sleepQuality',
        label: 'How would you describe your sleep quality?',
        type: 'radio',
        options: [
          'Great — I fall asleep easily and wake rested',
          'Okay — mostly fine but not always restful',
          'Broken — I wake through the night',
          'Poor — I struggle to fall or stay asleep',
          'It varies a lot',
        ],
      },
      { id: 'stressLevel', label: 'How would you rate your current stress levels?', type: 'rating', help: 'Select a number from 1 to 10.', min: 'Very calm', max: 'Overwhelmed' },
      { id: 'stressDescription', label: 'What does a stressful period look like for you, and how does it affect your habits?', type: 'textarea', placeholder: 'How stress shows up in your life and habits...' },
    ],
  },
  {
    title: 'Nutrition & Digestion',
    fields: [
      {
        id: 'bowelMovements',
        label: 'How often are you having a bowel movement?',
        type: 'radio',
        options: ['Multiple times a day', 'Once a day — regular and consistent', 'Every couple of days', 'Every 3+ days — I struggle to go regularly', 'It varies a lot'],
      },
      {
        id: 'digestiveDiscomfort',
        label: 'Do you experience bloating, gas, or digestive discomfort?',
        type: 'radio',
        options: ['Rarely or never', 'Occasionally', 'Often — most days', 'Almost always'],
      },
      { id: 'foodIntolerances', label: 'Any known food intolerances, sensitivities, or allergies?', type: 'textarea', placeholder: 'None, or describe...' },
      { id: 'waterIntake', label: 'How much water do you drink on a typical day?', type: 'text', placeholder: 'e.g. 2 litres, 8 glasses...' },
      {
        id: 'menstrualCycle',
        label: 'Do you have a menstrual cycle?',
        type: 'radio',
        options: [
          'Yes — regular cycle',
          'Yes — but irregular',
          'No — on hormonal contraception that stops my period',
          'No — post-menopausal',
          'No — perimenopause',
          'No — other reason',
          'Prefer not to say',
        ],
      },
      { id: 'hormoneNotes', label: 'Anything about your cycle or hormones you’d like me to know?', type: 'textarea', help: 'PMS symptoms, PMDD, hormonal acne, mood shifts, energy crashes — anything that affects your life and training.', placeholder: 'Nothing relevant, or share here...' },
    ],
  },
  {
    title: 'Lifestyle',
    fields: [
      { id: 'workDescription', label: 'What do you do for work?', type: 'text', help: 'This helps me understand your schedule, activity level, and stress profile.', placeholder: 'Your job or what you do day-to-day...' },
      {
        id: 'jobActivity',
        label: 'How active is your job day-to-day?',
        type: 'radio',
        options: ['Mostly desk-based — I sit most of the day', 'Mixed — some sitting, some moving', 'On my feet a lot', 'Physically demanding'],
      },
      {
        id: 'travelFrequency',
        label: 'How often do you travel?',
        type: 'radio',
        options: ["Rarely — I'm mostly in one place", 'Occasionally — a few times a year', 'Often — at least once a month', "Constantly — I'm location-free or always on the move"],
      },
      {
        id: 'cookingFor',
        label: 'Who are you cooking for?',
        type: 'radio',
        options: ['Just me', 'Me and a partner', 'A family with kids', 'Housemates with different eating habits', 'I mostly eat out or order in', 'It varies'],
      },
      {
        id: 'eatingOut',
        label: 'How often do you eat out or eat socially?',
        type: 'radio',
        options: ['Rarely — I cook almost everything myself', 'A couple of times a week', 'Most days involve a meal out or with others', 'Almost every meal is out or social'],
      },
      {
        id: 'alcoholIntake',
        label: 'How would you describe your alcohol intake?',
        type: 'radio',
        options: ["I don't drink", 'Rarely — special occasions only', 'Socially — a few times a week', 'Most evenings, usually a glass or two', 'It varies a lot'],
      },
      { id: 'lifestyleNotes', label: 'Anything else about your lifestyle I should know?', type: 'textarea', help: 'Shift work, young kids, caring responsibilities, a very social job, night owl tendencies — anything that shapes your reality.', placeholder: 'Nothing else, or share here...' },
    ],
  },
  {
    title: 'Mindset',
    fields: [
      {
        id: 'eatingPatterns',
        label: 'How would you describe your eating patterns day to day?',
        type: 'radio',
        options: [
          'Pretty consistent — I eat similar things most days',
          'Good during the week, looser on weekends',
          'All-or-nothing — either on track or off the rails',
          'I graze throughout the day rather than meals',
          'Chaotic — it really varies',
        ],
      },
      {
        id: 'emotionalEating',
        label: 'Do you eat emotionally or in response to stress?',
        type: 'radio',
        options: ['Rarely or never', 'Sometimes — I notice it but can manage it', "Often — food is my go-to when stressed or overwhelmed", "Yes, and it's something I really struggle with"],
      },
      {
        id: 'disorderedEatingHistory',
        label: 'Do you have any history with disordered eating or a difficult relationship with food?',
        type: 'radio',
        help: "You don't have to share details — a simple answer helps me understand how to approach nutrition with you.",
        options: ['No, not really', 'In the past, but I feel fairly resolved now', "Yes, it's something I'm navigating currently", "I'd rather not say"],
      },
      { id: 'offPlanResponse', label: 'How do you tend to respond when things go off plan?', type: 'textarea', help: 'Do you dust yourself off, or does one bad day become a bad week?', placeholder: 'How you typically respond when things go sideways...' },
      { id: 'foodBodyNotes', label: 'Is there anything about your relationship with food or your body that you think I should know going in?', type: 'textarea', placeholder: 'Nothing else, or share here...' },
    ],
  },
  {
    title: 'Training Preferences',
    fields: [
      {
        id: 'equipment',
        label: 'What equipment do you have access to?',
        type: 'checkbox',
        help: 'Select all that apply.',
        options: ['Full commercial gym', 'Home gym with weights and rack', 'Dumbbells and/or kettlebells at home', 'Resistance bands only', 'Hotel gyms — varies when I travel', 'Bodyweight only'],
      },
      {
        id: 'trainingDaysPerWeek',
        label: 'How many days per week can you realistically commit to training?',
        type: 'radio',
        options: ['2', '3', '4', '5', '6', 'It varies week to week'],
      },
      {
        id: 'sessionLength',
        label: 'How long do you have for each session?',
        type: 'radio',
        options: ['30 minutes or less', 'Around 45 minutes', 'Around 60 minutes', '60–75 minutes', "As long as needed — time isn't a constraint"],
      },
      { id: 'movementsToAvoid', label: "Are there any movements or exercises you can't do or really dislike?", type: 'textarea', placeholder: 'None, or describe...' },
      { id: 'otherExercise', label: 'Do you do any other exercise outside of your training sessions?', type: 'textarea', help: "Walking, yoga, swimming, sport, cycling — anything that's part of your regular routine.", placeholder: 'Nothing else, or describe...' },
      { id: 'anythingElse', label: "Is there anything else you'd like me to know before we get started?", type: 'textarea', help: "Anything this form didn't cover that feels important. The floor is yours.", placeholder: 'Nothing else...' },
    ],
  },
]

const ALL_FIELDS = STEPS.flatMap((step) => step.fields)

const INPUT_CLASS =
  'w-full rounded-lg border border-[#004238]/25 bg-white px-4 py-3 text-base text-[#1E0F10] placeholder:text-[#1E0F10]/35 transition-all duration-300 focus:border-[#004238] focus:outline-none focus:ring-2 focus:ring-[#004238]/20'

const LABEL_CLASS = 'block text-base font-bold leading-snug text-[#004238]'
const HELP_CLASS = 'mt-1 text-sm leading-relaxed text-[#1E0F10]/65'

function CheckIcon({ className }: { className: string }) {
  return (
    <svg aria-hidden className={className} fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  )
}

function Stepper({ current }: { current: number }) {
  return (
    <ol aria-label={`Step ${current} of ${STEPS.length}`} className={`${geistMono.className} flex items-center`}>
      {STEPS.map((step, index) => {
        const stepNumber = index + 1
        const isDone = stepNumber < current
        const isCurrent = stepNumber === current
        return (
          <li key={step.title} className="flex items-center">
            {index > 0 && <span aria-hidden className={`h-px w-2 sm:w-4 ${isDone || isCurrent ? 'bg-[#004238]' : 'bg-[#004238]/20'}`} />}
            <span
              className={`flex h-7 w-7 items-center justify-center rounded-full text-xs transition-colors duration-300 sm:h-8 sm:w-8 ${
                isDone ? 'bg-[#FF5E3E] text-[#FCF8F5]' : isCurrent ? 'bg-[#004238] text-[#FCF8F5]' : 'bg-[#004238]/10 text-[#004238]/60'
              }`}
            >
              {isDone ? <CheckIcon className="h-3.5 w-3.5" /> : stepNumber}
            </span>
          </li>
        )
      })}
    </ol>
  )
}

function ChoiceCard({
  type,
  name,
  option,
  checked,
  onChange,
}: {
  type: 'radio' | 'checkbox'
  name: string
  option: string
  checked: boolean
  onChange: () => void
}) {
  return (
    <label
      className={`group flex cursor-pointer items-start gap-3 rounded-lg border px-4 py-3.5 transition-all duration-300 focus-within:ring-2 focus-within:ring-[#004238]/30 ${
        checked ? 'border-[#004238] bg-[#E4FF72]/40' : 'border-[#004238]/15 bg-white hover:border-[#004238]/40'
      }`}
    >
      <span
        aria-hidden
        className={`mt-0.5 flex h-[18px] w-[18px] flex-shrink-0 items-center justify-center border-2 transition-all duration-300 ${
          type === 'radio' ? 'rounded-full' : 'rounded-sm'
        } ${checked ? `border-[#FF5E3E] ${type === 'checkbox' ? 'bg-[#FF5E3E]' : ''}` : 'border-[#004238]/30 group-hover:border-[#004238]/50'}`}
      >
        {checked && (type === 'radio' ? <span className="h-2.5 w-2.5 animate-scale-in rounded-full bg-[#FF5E3E]" /> : <CheckIcon className="h-3 w-3 text-[#FCF8F5]" />)}
      </span>
      <input type={type} name={name} value={option} checked={checked} onChange={onChange} className="sr-only" />
      <span className="text-sm leading-relaxed text-[#1E0F10] sm:text-base">{option}</span>
    </label>
  )
}

function Field({
  field,
  number,
  value,
  onChange,
}: {
  field: FieldDef
  number: number
  value: string | string[] | undefined
  onChange: (value: string | string[]) => void
}) {
  const heading = (
    <>
      {field.label}
      {field.required && <span className="text-[#C5381C]"> *</span>}
    </>
  )
  const eyebrow = <p className={`${geistMono.className} mb-2 text-xs text-[#004238]/70`}>{String(number).padStart(2, '0')} —</p>
  const helpId = field.help ? `${field.id}-help` : undefined
  const help = field.help && <p id={helpId} className={HELP_CLASS}>{field.help}</p>

  if (field.type === 'radio' || field.type === 'checkbox' || field.type === 'rating') {
    const selected = Array.isArray(value) ? value : []
    return (
      <fieldset>
        {eyebrow}
        <legend className={LABEL_CLASS}>{heading}</legend>
        {help}

        {field.type === 'rating' ? (
          <div className="mt-3">
            <div className="grid grid-cols-5 gap-2 sm:grid-cols-10">
              {Array.from({ length: 10 }, (_, i) => String(i + 1)).map((n) => (
                <button
                  key={n}
                  type="button"
                  aria-pressed={value === n}
                  onClick={() => onChange(n)}
                  className={`${geistMono.className} h-11 cursor-pointer rounded-lg border text-sm transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#004238]/40 ${
                    value === n ? 'border-[#004238] bg-[#004238] text-[#E4FF72]' : 'border-[#004238]/25 bg-white text-[#004238] hover:border-[#004238]/50'
                  }`}
                >
                  {n}
                </button>
              ))}
            </div>
            <div className="mt-2 flex justify-between gap-4 text-xs text-[#1E0F10]/65">
              <span>{field.min}</span>
              <span className="text-right">{field.max}</span>
            </div>
          </div>
        ) : (
          <div className="mt-3 flex flex-col gap-2.5">
            {field.options?.map((option) => {
              const checked = field.type === 'radio' ? value === option : selected.includes(option)
              return (
                <ChoiceCard
                  key={option}
                  type={field.type as 'radio' | 'checkbox'}
                  name={field.id}
                  option={option}
                  checked={checked}
                  onChange={() => {
                    if (field.type === 'radio') onChange(option)
                    else onChange(checked ? selected.filter((item) => item !== option) : [...selected, option])
                  }}
                />
              )
            })}
          </div>
        )}
      </fieldset>
    )
  }

  const textValue = typeof value === 'string' ? value : ''
  return (
    <div>
      {eyebrow}
      <label htmlFor={field.id} className={LABEL_CLASS}>{heading}</label>
      {help}
      <div className="mt-3">
        {field.type === 'textarea' ? (
          <textarea
            id={field.id}
            rows={4}
            aria-describedby={helpId}
            value={textValue}
            onChange={(event) => onChange(event.target.value)}
            placeholder={field.placeholder}
            className={`${INPUT_CLASS} min-h-[120px] resize-y`}
          />
        ) : field.type === 'dropdown' ? (
          <select id={field.id} aria-describedby={helpId} value={textValue} onChange={(event) => onChange(event.target.value)} className={INPUT_CLASS}>
            <option value="">Select your timezone</option>
            {field.options?.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        ) : (
          <input
            id={field.id}
            type={field.type}
            aria-describedby={helpId}
            value={textValue}
            onChange={(event) => onChange(event.target.value)}
            placeholder={field.placeholder}
            className={INPUT_CLASS}
          />
        )}
      </div>
    </div>
  )
}

export default function IntakeForm() {
  const router = useRouter()
  const [stepIndex, setStepIndex] = useState(0)
  const [answers, setAnswers] = useState<Answers>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const step = STEPS[stepIndex]
  const isFirst = stepIndex === 0
  const isLast = stepIndex === STEPS.length - 1

  const firstFieldNumber = useMemo(
    () => STEPS.slice(0, stepIndex).reduce((total, previous) => total + previous.fields.length, 1),
    [stepIndex]
  )

  const updateField = useCallback((id: string, value: string | string[]) => {
    setAnswers((previous) => ({ ...previous, [id]: value }))
    setError(null)
  }, [])

  const goToStep = useCallback((index: number) => {
    setError(null)
    setStepIndex(index)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const handleNext = useCallback(() => {
    if (isFirst) {
      if (!String(answers.fullName ?? '').trim()) return setError('Please enter your name.')
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(answers.email ?? ''))) {
        return setError('Please enter a valid email address.')
      }
    }
    goToStep(Math.min(stepIndex + 1, STEPS.length - 1))
  }, [answers, goToStep, isFirst, stepIndex])

  const handleSubmit = useCallback(async () => {
    setIsSubmitting(true)
    setError(null)

    const payload = Object.fromEntries(
      ALL_FIELDS.map((field) => {
        const value = answers[field.id]
        if (field.type === 'rating') return [field.id, value ? `${value}/10` : '']
        return [field.id, value ?? (field.type === 'checkbox' ? [] : '')]
      })
    )

    try {
      const response = await fetch('/api/intake', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await response.json()
      if (!response.ok) throw new Error(data.error || 'Something went wrong. Please try again.')
      router.push('/intake/thank-you')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }, [answers, router])

  const buttonClass = `${geistMono.className} cursor-pointer rounded-full px-8 py-3.5 text-sm transition-colors duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#004238]/25`
  const primaryButtonClass = `${buttonClass} bg-[#004238] text-[#FCF8F5] hover:bg-[#1E0F10] disabled:cursor-wait disabled:opacity-70`

  return (
    <div className={`${doblegh.className} min-h-screen bg-[#FCF8F5] text-[#1E0F10]`}>
      <header className="relative overflow-hidden bg-[#004238]">
        <Image src="/sweat-equity/pattern-pine.jpg" alt="" fill priority sizes="100vw" className="object-cover" />
        <div className="relative mx-auto max-w-2xl px-6 pb-14 pt-8 md:px-10">
          <Image src="/sweat-equity/logo-lime.svg" alt="Sweat Equity" width={150} height={50} priority className="h-auto w-[130px] md:w-[150px]" />
          <p className={`${geistMono.className} mt-14 text-xs text-[#C7D2FF] md:text-sm`}>Client Intake</p>
          <h1 className={`${elza.className} mt-3 text-5xl uppercase leading-none text-[#E4FF72] sm:text-6xl`}>Intake Form</h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-[#FCF8F5] md:text-lg">
            Take your time — there are no wrong answers. The more honest you are, the better I can support you.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-2xl px-6 pb-20 pt-10 md:px-10">
        <Stepper current={stepIndex + 1} />
        <h2 className={`${doblegh.className} mt-8 text-2xl font-bold text-[#004238] sm:text-3xl`}>{step.title}</h2>

        <div className="mt-8 flex flex-col gap-9">
          {step.fields.map((field, index) => (
            <Field key={field.id} field={field} number={firstFieldNumber + index} value={answers[field.id]} onChange={(value) => updateField(field.id, value)} />
          ))}
        </div>

        <div aria-live="polite">
          {error && <p className="mt-8 rounded-lg border border-[#C5381C]/30 bg-[#FF5E3E]/10 px-4 py-3 text-sm font-bold text-[#A52A12]">{error}</p>}
        </div>

        <div className="mt-10 flex items-center justify-between gap-4 border-t border-[#004238]/15 pt-7">
          {isFirst ? (
            <span />
          ) : (
            <button type="button" onClick={() => goToStep(stepIndex - 1)} className={`${buttonClass} bg-[#C7D2FF] text-[#004238] hover:bg-[#B5C3FA]`}>
              Back
            </button>
          )}
          {isLast ? (
            <button type="button" onClick={handleSubmit} disabled={isSubmitting} className={primaryButtonClass}>
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          ) : (
            <button type="button" onClick={handleNext} className={primaryButtonClass}>
              Next
            </button>
          )}
        </div>
      </main>
    </div>
  )
}

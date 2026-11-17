'use client'

import { type FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { doblegh, elza, geistMono } from '../fonts'

const inputClass =
  'w-full bg-white border border-[#004238]/25 rounded-lg px-4 py-3 text-[#1E0F10] placeholder:text-[#1E0F10]/35 text-base focus:outline-none focus:ring-2 focus:ring-[#004238]/20 focus:border-[#004238] transition-all duration-300'
const textareaClass = `${inputClass} min-h-[110px] resize-y`
const cardClass = 'rounded-2xl bg-[#FCF8F5] p-6 shadow-lg shadow-[#004238]/10 sm:p-8'
const labelClass = 'block text-[#1E0F10] text-base font-bold leading-snug mb-2'

type Question = {
  name: string
  label: string
  placeholder?: string
  long?: boolean // textarea instead of a one-line input
  short?: boolean // narrow input for quick answers
  required?: boolean
  type?: string
  autoComplete?: string
}

const GOALS = ['Lose body fat', 'Build muscle', 'Maintain and feel better']

const SECTIONS: { title: string; questions: Question[] }[] = [
  {
    title: 'About You',
    questions: [
      { name: 'age', label: 'Age', placeholder: 'e.g. 32', short: true },
      { name: 'height', label: 'Height', placeholder: `e.g. 5'6"`, short: true },
      { name: 'currentWeight', label: 'Current weight', placeholder: 'e.g. 150 lbs', short: true },
      { name: 'postpartum', label: 'How many weeks or months postpartum are you?', placeholder: 'e.g. 4 months', short: true },
    ],
  },
  // Main goal (multiple choice) renders between these sections
  {
    title: 'Health and Food Notes',
    questions: [
      { name: 'allergies', label: 'Any allergies?', placeholder: 'None, or list them...', long: true },
      { name: 'medicalConditions', label: 'Any medical conditions?', placeholder: 'None, or share here...', long: true },
      { name: 'foodsYouDontEat', label: 'Any foods you don’t eat?', placeholder: 'None, or list them...', long: true },
    ],
  },
  {
    title: 'A Typical Day of Eating',
    questions: [
      { name: 'firstMealTime', label: 'What time do you usually eat your first meal?', placeholder: 'e.g. 9am', short: true },
      { name: 'firstMeal', label: 'What does your first meal typically look like?', placeholder: 'Walk me through it...', long: true },
      { name: 'lunch', label: 'What does a typical lunch look like for you?', placeholder: 'Walk me through it...', long: true },
      { name: 'dinner', label: 'What does a typical dinner look like for you?', placeholder: 'Walk me through it...', long: true },
      { name: 'snacks', label: 'What snacks do you usually reach for?', placeholder: 'Whatever you usually grab...', long: true },
      { name: 'snackTimes', label: 'What times of day do you usually snack?', placeholder: 'e.g. mid-afternoon and after dinner' },
    ],
  },
  {
    title: 'Drinks and Protein',
    questions: [
      { name: 'drinks', label: 'What do you usually drink throughout the day?', placeholder: 'Water, coffee, juice, alcohol, etc.', long: true },
      { name: 'proteinSources', label: 'What are your go-to protein sources?', placeholder: 'e.g. eggs, chicken, Greek yogurt...', long: true },
    ],
  },
]

function SectionHeader({ num, title }: { num: string; title: string }) {
  return (
    <div className="pt-6">
      <div className="flex items-center gap-4">
        <p className={`${geistMono.className} text-sm text-[#004238]`}>Section {num}</p>
        <span aria-hidden className="h-px flex-1 bg-[#FF5E3E]" />
      </div>
      <h2 className={`${elza.className} mt-3 text-3xl uppercase leading-none text-[#004238] sm:text-4xl`}>{title}</h2>
    </div>
  )
}

export default function NutritionQuestionnaireForm() {
  const router = useRouter()
  const [values, setValues] = useState<Record<string, string>>({})
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const update = (name: string, value: string) => setValues((prev) => ({ ...prev, [name]: value }))

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/nutrition-questionnaire', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(data.error)
      router.push('/nutrition-questionnaire/submitted')
    } catch (error) {
      setErrorMessage(error instanceof Error && error.message ? error.message : 'Something went wrong. Please try again.')
      setStatus('error')
    }
  }

  const renderQuestion = (q: Question) => (
    <div key={q.name} className={cardClass}>
      <label htmlFor={q.name} className={labelClass}>{q.label}</label>
      {q.long ? (
        <textarea
          id={q.name}
          value={values[q.name] ?? ''}
          onChange={(e) => update(q.name, e.target.value)}
          placeholder={q.placeholder}
          maxLength={2000}
          className={textareaClass}
        />
      ) : (
        <input
          id={q.name}
          type={q.type ?? 'text'}
          required={q.required}
          autoComplete={q.autoComplete}
          value={values[q.name] ?? ''}
          onChange={(e) => update(q.name, e.target.value)}
          placeholder={q.placeholder}
          maxLength={200}
          className={`${inputClass} ${q.short ? 'max-w-xs' : ''}`}
        />
      )}
    </div>
  )

  return (
    <main className={`${doblegh.className} relative min-h-screen bg-[#C7D2FF] px-6 py-8 text-[#004238] md:px-10`}>
      <form onSubmit={handleSubmit} className="relative mx-auto max-w-2xl">
        <Image src="/sweat-equity/logo-tangerine-pine.svg" alt="Sweat Equity" width={150} height={50} priority className="h-auto w-[130px] md:w-[150px]" />

        <h1 className={`${elza.className} mt-14 text-[2.75rem] uppercase leading-none sm:text-6xl`}>Nutrition Questionnaire</h1>
        <p className="mt-6 mb-12 max-w-lg text-lg leading-relaxed">
          Be honest. The more detail you give me, the better I can build a plan around your real life.
        </p>

        <div className="space-y-5">
          <div className={cardClass}>
            <div className="grid gap-5 sm:grid-cols-2">
              {[
                { name: 'fullName', label: 'Your name', placeholder: 'First and last name', autoComplete: 'name' },
                { name: 'email', label: 'Email', placeholder: 'you@example.com', type: 'email', autoComplete: 'email' },
              ].map((q) => (
                <div key={q.name}>
                  <label htmlFor={q.name} className={labelClass}>{q.label}</label>
                  <input
                    id={q.name}
                    type={q.type ?? 'text'}
                    required
                    autoComplete={q.autoComplete}
                    value={values[q.name] ?? ''}
                    onChange={(e) => update(q.name, e.target.value)}
                    placeholder={q.placeholder}
                    maxLength={200}
                    className={inputClass}
                  />
                </div>
              ))}
            </div>
          </div>

          <SectionHeader num="01" title={SECTIONS[0].title} />
          {SECTIONS[0].questions.map(renderQuestion)}

          <SectionHeader num="02" title="Your Goal" />
          <fieldset className={cardClass}>
            <legend className="sr-only">Main goal</legend>
            <p className={labelClass}>What&rsquo;s your main goal right now?</p>
            <div className="mt-3 grid gap-3">
              {GOALS.map((goal) => {
                const selected = values.mainGoal === goal
                return (
                  <label
                    key={goal}
                    className={`flex cursor-pointer items-center gap-3 rounded-lg border px-4 py-3 transition-all duration-200 ${
                      selected ? 'border-[#004238] bg-[#004238] text-[#E4FF72]' : 'border-[#004238]/25 bg-white text-[#1E0F10] hover:border-[#004238]'
                    }`}
                  >
                    <input type="radio" name="mainGoal" value={goal} checked={selected} onChange={() => update('mainGoal', goal)} className="sr-only" />
                    <span
                      aria-hidden
                      className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 ${selected ? 'border-[#E4FF72]' : 'border-[#004238]/40'}`}
                    >
                      {selected && <span className="h-2.5 w-2.5 rounded-full bg-[#E4FF72]" />}
                    </span>
                    <span className="text-base font-bold">{goal}</span>
                  </label>
                )
              })}
            </div>
          </fieldset>

          {SECTIONS.slice(1).map((section, i) => (
            <div key={section.title} className="space-y-5">
              <SectionHeader num={`0${i + 3}`} title={section.title} />
              {section.questions.map(renderQuestion)}
            </div>
          ))}
        </div>

        <div className="mt-12 pb-16">
          <button
            type="submit"
            disabled={status === 'loading'}
            className={`${geistMono.className} inline-flex w-full cursor-pointer items-center justify-center rounded-full bg-[#004238] px-10 py-4 text-sm text-[#E4FF72] transition-colors duration-300 hover:bg-[#1E0F10] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#FF5E3E] disabled:cursor-wait disabled:opacity-70 sm:w-auto`}
          >
            {status === 'loading' ? 'Sending...' : 'Submit Questionnaire'}
          </button>
          <div aria-live="polite">
            {status === 'error' && <p className="mt-4 text-sm font-bold text-[#C5381C]">{errorMessage}</p>}
          </div>
        </div>
      </form>
    </main>
  )
}

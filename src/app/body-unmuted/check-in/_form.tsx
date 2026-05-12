'use client'

import { useState, useCallback } from 'react'

// Update this each week to reflect when clients can expect their Loom
const LOOM_DAY = 'Friday'

// ── Style constants ───────────────────────────────────────────────────────────

const inputClass =
  'w-full bg-white border border-bark/20 rounded-lg px-4 py-3 text-midnight placeholder:text-charcoal/30 text-sm focus:outline-none focus:ring-2 focus:ring-bark/20 focus:border-bark transition-all duration-300'

const textareaClass =
  'w-full bg-white border border-bark/20 rounded-lg px-4 py-3 text-midnight placeholder:text-charcoal/30 text-sm min-h-[110px] resize-y focus:outline-none focus:ring-2 focus:ring-bark/20 focus:border-bark transition-all duration-300'

// ── FormData ──────────────────────────────────────────────────────────────────

interface FormData {
  // Section 1
  weekWord: string
  weekRating: number | null
  mostImportant: string
  // Section 2
  trainingFeeling: number | null
  goodSessions: string
  hardSessions: string
  trainingObstacles: string
  physicalNotes: string
  // Section 3
  nutritionFeeling: number | null
  hungerCravings: string
  nutritionPatterns: string
  alcoholDrinks: string
  nutritionDerail: string
  // Section 4
  sleepHours: string
  sleepQuality: number | null
  energyLevels: number | null
  digestionBloating: string
  cycleDay: string
  cycleNotes: string
  // Section 5
  stressCup: number | null
  stressors: string
  upcoming: string
  // Section 6
  biggestWin: string
  biggestStruggle: string
  offPlanResponse: string
  // Section 7
  focusNextWeek: string
  needFromMe: string
}

const initialFormData: FormData = {
  weekWord: '',
  weekRating: null,
  mostImportant: '',
  trainingFeeling: null,
  goodSessions: '',
  hardSessions: '',
  trainingObstacles: '',
  physicalNotes: '',
  nutritionFeeling: null,
  hungerCravings: '',
  nutritionPatterns: '',
  alcoholDrinks: '',
  nutritionDerail: '',
  sleepHours: '',
  sleepQuality: null,
  energyLevels: null,
  digestionBloating: '',
  cycleDay: '',
  cycleNotes: '',
  stressCup: null,
  stressors: '',
  upcoming: '',
  biggestWin: '',
  biggestStruggle: '',
  offPlanResponse: '',
  focusNextWeek: '',
  needFromMe: '',
}

// ── Sub-components ────────────────────────────────────────────────────────────

function SectionHeader({ num, title }: { num: string; title: string }) {
  return (
    <div className="border-t border-bark/10 pt-10 pb-2">
      <p className="text-bark text-[10px] font-medium tracking-[0.25em] uppercase mb-1">
        Section {num}
      </p>
      <h2 className="font-serif text-midnight text-2xl">{title}</h2>
    </div>
  )
}

function ScaleInput({
  value,
  onChange,
  lowLabel,
  highLabel,
}: {
  value: number | null
  onChange: (value: number) => void
  lowLabel: string
  highLabel: string
}) {
  return (
    <div>
      <div className="flex gap-1.5">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
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

// ── Main component ────────────────────────────────────────────────────────────

export default function CheckInForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const updateField = useCallback(
    (field: keyof FormData, value: string | number | null) => {
      setFormData((prev) => ({ ...prev, [field]: value }))
    },
    []
  )

  const handleSubmit = useCallback(async () => {
    setIsSubmitting(true)
    setError(null)

    const payload = {
      ...formData,
      weekRating: formData.weekRating !== null ? `${formData.weekRating}/10` : '',
      trainingFeeling: formData.trainingFeeling !== null ? `${formData.trainingFeeling}/10` : '',
      nutritionFeeling: formData.nutritionFeeling !== null ? `${formData.nutritionFeeling}/10` : '',
      sleepQuality: formData.sleepQuality !== null ? `${formData.sleepQuality}/10` : '',
      energyLevels: formData.energyLevels !== null ? `${formData.energyLevels}/10` : '',
      stressCup: formData.stressCup !== null ? `${formData.stressCup}/10` : '',
    }

    try {
      const response = await fetch('/api/body-unmuted-check-in', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong. Please try again.')
      }

      setIsSubmitted(true)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } catch (err) {
      setError(
        err instanceof Error ? err.message : 'Something went wrong. Please try again.'
      )
    } finally {
      setIsSubmitting(false)
    }
  }, [formData])

  // ── Success state ─────────────────────────────────────────────────────────

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center px-6 py-28">
        <div className="max-w-lg">
          <p className="text-bark text-[11px] font-sans font-medium tracking-[0.3em] uppercase mb-8">
            Body Unmuted
          </p>
          <h1 className="font-serif text-midnight text-4xl sm:text-5xl leading-[1.1] mb-10">
            Submitted.
          </h1>
          <div className="space-y-5 text-charcoal/70 font-sans text-[17px] leading-[1.85] mb-12">
            <p>
              Thank you for taking the time to reflect properly. It makes a real difference
              to how I coach you.
            </p>
            <p>
              I&rsquo;ll be back with your Loom by {LOOM_DAY}. If anything urgent comes up
              before then, you know where to find me.
            </p>
          </div>
          <p className="font-serif italic text-midnight text-2xl">
            Madison
          </p>
        </div>
      </div>
    )
  }

  // ── Form ──────────────────────────────────────────────────────────────────

  return (
    <div className="bg-cream min-h-screen px-6 py-28">
      <div className="max-w-2xl mx-auto">

        {/* Header */}
        <p className="text-bark text-[11px] font-sans font-medium tracking-[0.3em] uppercase mb-6">
          Body Unmuted
        </p>
        <h1 className="font-serif text-midnight text-4xl sm:text-5xl leading-[1.08] mb-4">
          Weekly Check-In
        </h1>
        <p className="text-charcoal/60 font-sans text-base leading-relaxed mb-14">
          Be honest. The more detail you give me, the better I can support you.
        </p>

        {/* Error */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-lg mb-8">
            {error}
          </div>
        )}

        <div className="space-y-8">

          {/* ── Section 1: The Week Overall ── */}
          <SectionHeader num="01" title="The Week Overall" />

          <div>
            <label className="block text-midnight text-sm font-medium mb-2">
              One word that sums up your week
            </label>
            <input
              type="text"
              value={formData.weekWord}
              onChange={(e) => updateField('weekWord', e.target.value)}
              placeholder="e.g. chaotic, solid, tired, focused..."
              className={inputClass}
            />
          </div>

          <div>
            <label className="block text-midnight text-sm font-medium mb-3">
              How would you rate your week overall?
            </label>
            <ScaleInput
              value={formData.weekRating}
              onChange={(v) => updateField('weekRating', v)}
              lowLabel="Really tough"
              highLabel="Really great"
            />
          </div>

          <div>
            <label className="block text-midnight text-sm font-medium mb-2">
              What&rsquo;s the one thing you most want me to know about this week?
            </label>
            <textarea
              value={formData.mostImportant}
              onChange={(e) => updateField('mostImportant', e.target.value)}
              placeholder="Whatever feels most important..."
              className={textareaClass}
            />
          </div>

          {/* ── Section 2: Training ── */}
          <SectionHeader num="02" title="Training" />

          <div>
            <label className="block text-midnight text-sm font-medium mb-3">
              How did your training feel this week overall?
            </label>
            <ScaleInput
              value={formData.trainingFeeling}
              onChange={(v) => updateField('trainingFeeling', v)}
              lowLabel="Flat and difficult"
              highLabel="Strong and energised"
            />
          </div>

          <div>
            <label className="block text-midnight text-sm font-medium mb-2">
              Which sessions felt good, and what made them feel that way?
            </label>
            <textarea
              value={formData.goodSessions}
              onChange={(e) => updateField('goodSessions', e.target.value)}
              placeholder="Walk me through what stood out..."
              className={textareaClass}
            />
          </div>

          <div>
            <label className="block text-midnight text-sm font-medium mb-2">
              Which sessions felt hard, flat, or off — and do you have a sense of why?
            </label>
            <textarea
              value={formData.hardSessions}
              onChange={(e) => updateField('hardSessions', e.target.value)}
              placeholder="Be specific if you can..."
              className={textareaClass}
            />
          </div>

          <div>
            <label className="block text-midnight text-sm font-medium mb-1">
              Did anything get in the way of training this week?
            </label>
            <p className="text-charcoal/40 text-xs mb-3">
              Schedule, energy, travel, motivation, life.
            </p>
            <textarea
              value={formData.trainingObstacles}
              onChange={(e) => updateField('trainingObstacles', e.target.value)}
              placeholder="Nothing, or tell me what came up..."
              className={textareaClass}
            />
          </div>

          <div>
            <label className="block text-midnight text-sm font-medium mb-2">
              Any pain, tightness, discomfort, or anything physical I should know about?
            </label>
            <textarea
              value={formData.physicalNotes}
              onChange={(e) => updateField('physicalNotes', e.target.value)}
              placeholder="Nothing, or describe..."
              className={textareaClass}
            />
          </div>

          {/* ── Section 3: Nutrition ── */}
          <SectionHeader num="03" title="Nutrition" />

          <div>
            <label className="block text-midnight text-sm font-medium mb-3">
              How did your nutrition feel this week?
            </label>
            <ScaleInput
              value={formData.nutritionFeeling}
              onChange={(v) => updateField('nutritionFeeling', v)}
              lowLabel="Really off track"
              highLabel="Fully on point"
            />
          </div>

          <div>
            <label className="block text-midnight text-sm font-medium mb-2">
              How were your hunger and cravings throughout the week?
            </label>
            <textarea
              value={formData.hungerCravings}
              onChange={(e) => updateField('hungerCravings', e.target.value)}
              placeholder="Normal, elevated, absent..."
              className={textareaClass}
            />
          </div>

          <div>
            <label className="block text-midnight text-sm font-medium mb-1">
              Any patterns you noticed?
            </label>
            <p className="text-charcoal/40 text-xs mb-3">
              Evening eating, stress eating, skipping meals, anything like that.
            </p>
            <textarea
              value={formData.nutritionPatterns}
              onChange={(e) => updateField('nutritionPatterns', e.target.value)}
              placeholder="Nothing notable, or share what you noticed..."
              className={textareaClass}
            />
          </div>

          <div>
            <label className="block text-midnight text-sm font-medium mb-2">
              How many alcoholic drinks did you have across the week?
            </label>
            <input
              type="text"
              value={formData.alcoholDrinks}
              onChange={(e) => updateField('alcoholDrinks', e.target.value)}
              placeholder="e.g. none, 2, 6..."
              className={`${inputClass} max-w-xs`}
            />
          </div>

          <div>
            <label className="block text-midnight text-sm font-medium mb-2">
              Did anything derail your nutrition this week, and what do you think was behind it?
            </label>
            <textarea
              value={formData.nutritionDerail}
              onChange={(e) => updateField('nutritionDerail', e.target.value)}
              placeholder="Nothing, or walk me through it..."
              className={textareaClass}
            />
          </div>

          {/* ── Section 4: Body and Recovery ── */}
          <SectionHeader num="04" title="Body and Recovery" />

          <div>
            <label className="block text-midnight text-sm font-medium mb-2">
              How many hours of sleep did you get on average?
            </label>
            <input
              type="text"
              value={formData.sleepHours}
              onChange={(e) => updateField('sleepHours', e.target.value)}
              placeholder="e.g. 7 hours"
              className={`${inputClass} max-w-xs`}
            />
          </div>

          <div>
            <label className="block text-midnight text-sm font-medium mb-3">
              How would you rate your sleep quality?
            </label>
            <ScaleInput
              value={formData.sleepQuality}
              onChange={(v) => updateField('sleepQuality', v)}
              lowLabel="Broken and restless"
              highLabel="Deep and restorative"
            />
          </div>

          <div>
            <label className="block text-midnight text-sm font-medium mb-3">
              How were your energy levels across the week?
            </label>
            <ScaleInput
              value={formData.energyLevels}
              onChange={(v) => updateField('energyLevels', v)}
              lowLabel="Running on empty"
              highLabel="Firing on all cylinders"
            />
          </div>

          <div>
            <label className="block text-midnight text-sm font-medium mb-2">
              How has your digestion and bloating been this week?
            </label>
            <textarea
              value={formData.digestionBloating}
              onChange={(e) => updateField('digestionBloating', e.target.value)}
              placeholder="Normal, better than usual, rough..."
              className={textareaClass}
            />
          </div>

          <div>
            <label className="block text-midnight text-sm font-medium mb-2">
              If applicable, where are you in your cycle right now?
            </label>
            <input
              type="text"
              value={formData.cycleDay}
              onChange={(e) => updateField('cycleDay', e.target.value)}
              placeholder="e.g. day 14, luteal phase, not applicable..."
              className={inputClass}
            />
          </div>

          <div>
            <label className="block text-midnight text-sm font-medium mb-2">
              Any PMS symptoms, hormonal shifts, or anything cycle-related that affected your week?
            </label>
            <textarea
              value={formData.cycleNotes}
              onChange={(e) => updateField('cycleNotes', e.target.value)}
              placeholder="Nothing, or share here..."
              className={textareaClass}
            />
          </div>

          {/* ── Section 5: Stress and Life ── */}
          <SectionHeader num="05" title="Stress and Life" />

          <div>
            <label className="block text-midnight text-sm font-medium mb-3">
              How full is your stress cup right now?
            </label>
            <ScaleInput
              value={formData.stressCup}
              onChange={(v) => updateField('stressCup', v)}
              lowLabel="Very calm and spacious"
              highLabel="Completely full"
            />
          </div>

          <div>
            <label className="block text-midnight text-sm font-medium mb-1">
              Any big stressors this week I should factor into your programming?
            </label>
            <p className="text-charcoal/40 text-xs mb-3">
              Work, personal, emotional — anything relevant.
            </p>
            <textarea
              value={formData.stressors}
              onChange={(e) => updateField('stressors', e.target.value)}
              placeholder="Nothing notable, or share here..."
              className={textareaClass}
            />
          </div>

          <div>
            <label className="block text-midnight text-sm font-medium mb-1">
              Anything coming up in the next week or two I should plan around?
            </label>
            <p className="text-charcoal/40 text-xs mb-3">
              Travel, events, big deadlines, social commitments — anything that might affect training or nutrition.
            </p>
            <textarea
              value={formData.upcoming}
              onChange={(e) => updateField('upcoming', e.target.value)}
              placeholder="Nothing, or let me know..."
              className={textareaClass}
            />
          </div>

          {/* ── Section 6: Wins and Struggles ── */}
          <SectionHeader num="06" title="Wins and Struggles" />

          <div>
            <label className="block text-midnight text-sm font-medium mb-1">
              What&rsquo;s your biggest win this week?
            </label>
            <p className="text-charcoal/40 text-xs mb-3">
              Training, nutrition, mindset, life. Anything counts.
            </p>
            <textarea
              value={formData.biggestWin}
              onChange={(e) => updateField('biggestWin', e.target.value)}
              placeholder="Own it..."
              className={textareaClass}
            />
          </div>

          <div>
            <label className="block text-midnight text-sm font-medium mb-2">
              What did you struggle with most?
            </label>
            <textarea
              value={formData.biggestStruggle}
              onChange={(e) => updateField('biggestStruggle', e.target.value)}
              placeholder="Be honest..."
              className={textareaClass}
            />
          </div>

          <div>
            <label className="block text-midnight text-sm font-medium mb-2">
              How did you respond when things went off plan?
            </label>
            <textarea
              value={formData.offPlanResponse}
              onChange={(e) => updateField('offPlanResponse', e.target.value)}
              placeholder="Dusted yourself off, spiralled, somewhere in between..."
              className={textareaClass}
            />
          </div>

          {/* ── Section 7: Looking Ahead ── */}
          <SectionHeader num="07" title="Looking Ahead" />

          <div>
            <label className="block text-midnight text-sm font-medium mb-2">
              One thing you want to focus on or improve next week
            </label>
            <textarea
              value={formData.focusNextWeek}
              onChange={(e) => updateField('focusNextWeek', e.target.value)}
              placeholder="Keep it specific..."
              className={textareaClass}
            />
          </div>

          <div>
            <label className="block text-midnight text-sm font-medium mb-2">
              Anything you need from me this week?
            </label>
            <textarea
              value={formData.needFromMe}
              onChange={(e) => updateField('needFromMe', e.target.value)}
              placeholder="Nothing, or let me know..."
              className={textareaClass}
            />
          </div>

        </div>

        {/* Submit */}
        <div className="mt-14 pt-10 border-t border-bark/10">
          <button
            type="button"
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="inline-flex items-center gap-2 bg-bark text-cream font-sans font-medium text-[11px] tracking-[0.18em] uppercase px-10 py-4 rounded-sm hover:bg-bark/90 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
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
              'Submit Check-In'
            )}
          </button>
        </div>

      </div>
    </div>
  )
}

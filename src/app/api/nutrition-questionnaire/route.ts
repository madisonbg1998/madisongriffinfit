import { NextRequest, NextResponse } from 'next/server'

// Every question on /nutrition-questionnaire, with a max length so nothing oversized reaches Adhara
const FIELDS: Record<string, number> = {
  fullName: 100,
  email: 200,
  age: 20,
  height: 30,
  currentWeight: 30,
  postpartum: 60,
  mainGoal: 60,
  allergies: 2000,
  medicalConditions: 2000,
  foodsYouDontEat: 2000,
  firstMealTime: 60,
  firstMeal: 2000,
  lunch: 2000,
  dinner: 2000,
  snacks: 2000,
  snackTimes: 200,
  drinks: 2000,
  proteinSources: 2000,
}

export async function POST(request: NextRequest) {
  const baseUrl = process.env.ADHARA_BASE_URL || 'https://api.adharaweb.com'
  const apiKey = process.env.ADHARA_API_KEY
  const workspaceId = process.env.ADHARA_WORKSPACE_ID
  if (!apiKey || !workspaceId) {
    console.error('Missing Adhara environment variables')
    return NextResponse.json({ error: 'Server configuration error' }, { status: 500 })
  }

  const body = await request.json().catch(() => ({}))
  const data: Record<string, string> = {}
  for (const [name, max] of Object.entries(FIELDS)) {
    const value = body[name]
    if (typeof value === 'string' && value.trim()) data[name] = value.trim().slice(0, max)
  }

  if (!data.fullName) return NextResponse.json({ error: 'Please add your name.' }, { status: 400 })
  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    return NextResponse.json({ error: 'Please add a valid email.' }, { status: 400 })
  }

  try {
    const res = await fetch(`${baseUrl}/api/v1/forms/nutrition-questionnaire/submit`, {
      method: 'POST',
      headers: { 'X-API-Key': apiKey, 'X-Workspace-ID': workspaceId, 'Content-Type': 'application/json' },
      body: JSON.stringify({ response_data: data }),
    })
    if (!res.ok) {
      const text = await res.text()
      console.error('Adhara nutrition questionnaire failed:', res.status, text)
      // Adhara validation (e.g. a throwaway email address): show its message so the person can fix it
      if (res.status === 422) {
        let message: unknown
        try {
          message = JSON.parse(text)?.detail?.message
        } catch {}
        if (typeof message === 'string' && message) return NextResponse.json({ error: message }, { status: 400 })
      }
      return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 502 })
    }
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Nutrition questionnaire error:', error)
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 })
  }
}

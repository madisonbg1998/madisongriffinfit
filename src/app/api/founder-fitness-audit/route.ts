import { NextRequest, NextResponse } from 'next/server'
import { addToKitTag, KIT_TAGS } from '@/lib/kit'

// Adhara form "Founder Fitness Audit"
const FORM_SLUG = 'founder-fitness-audit'

// Field name → max length. Anything not listed here is dropped.
const FIELDS: Record<string, number> = {
  firstName: 100,
  email: 200,
  goal: 300,
  travel: 50,
  biggestLever: 200,
  possibleTakeaway: 200,
  effectiveTakeaway: 200,
  livableTakeaway: 200,
  possibleGutPick: 2000,
  effectiveGutPick: 2000,
  livableGutPick: 2000,
  normalWeek: 5000,
  triedBefore: 5000,
  oneThingToFix: 5000,
  answers: 5000,
  snapshot: 20000,
}

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null)
  if (!body || typeof body !== 'object') {
    return NextResponse.json({ error: 'Invalid audit.' }, { status: 400 })
  }

  const responseData: Record<string, string> = {}
  for (const [name, max] of Object.entries(FIELDS)) {
    const value = body[name]
    if (typeof value === 'string' && value.trim()) responseData[name] = value.trim().slice(0, max)
  }
  if (!responseData.snapshot || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(responseData.email || '')) {
    return NextResponse.json({ error: 'Invalid audit.' }, { status: 400 })
  }
  const emailOptIn = body.emailOptIn === true
  responseData.emailOptIn = emailOptIn ? 'Yes' : 'No'

  const baseUrl = process.env.ADHARA_BASE_URL || 'https://api.adharaweb.com'
  const apiKey = process.env.ADHARA_API_KEY
  const workspaceId = process.env.ADHARA_WORKSPACE_ID
  if (!apiKey || !workspaceId) {
    console.error('Missing Adhara environment variables')
    return NextResponse.json({ error: 'Saving is unavailable right now.' }, { status: 500 })
  }

  try {
    const res = await fetch(`${baseUrl}/api/v1/forms/${FORM_SLUG}/submit`, {
      method: 'POST',
      headers: { 'X-API-Key': apiKey, 'X-Workspace-ID': workspaceId, 'Content-Type': 'application/json' },
      body: JSON.stringify({ response_data: responseData }),
    })
    if (!res.ok) {
      console.error('Adhara audit submission failed:', res.status, await res.text())
      return NextResponse.json({ error: 'Saving is unavailable right now.' }, { status: 502 })
    }
    // Only people who ticked the consent box go to the Kit list
    if (emailOptIn) await addToKitTag(KIT_TAGS.founderFitnessAudit, responseData.email, responseData.firstName)
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Founder fitness audit save error:', error)
    return NextResponse.json({ error: 'Saving is unavailable right now.' }, { status: 500 })
  }
}

import { NextRequest, NextResponse } from 'next/server'

// Adhara form "Sweat Equity — Win a Free Month"
const FORM_SLUG = 'sweat-equity-giveaway'

function clean(value: unknown, max: number) {
  return typeof value === 'string' ? value.trim().slice(0, max) : ''
}

// Accepts "handle", "@handle" or an instagram.com link and returns "@handle"
function normalizeInstagram(value: string) {
  const handle = value
    .replace(/^https?:\/\/(www\.)?instagram\.com\//i, '')
    .replace(/^@+/, '')
    .split(/[/?#]/)[0]
  return /^[A-Za-z0-9._]{1,30}$/.test(handle) ? `@${handle}` : ''
}

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null)
  const fullName = clean(body?.fullName, 100)
  const email = clean(body?.email, 200)
  const instagram = normalizeInstagram(clean(body?.instagram, 200))

  if (!fullName || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !instagram) {
    return NextResponse.json({ error: 'Please fill in your name, email and Instagram handle.' }, { status: 400 })
  }

  const baseUrl = process.env.ADHARA_BASE_URL || 'https://api.adharaweb.com'
  const apiKey = process.env.ADHARA_API_KEY
  const workspaceId = process.env.ADHARA_WORKSPACE_ID
  if (!apiKey || !workspaceId) {
    console.error('Missing Adhara environment variables')
    return NextResponse.json({ error: 'Entries are unavailable right now.' }, { status: 500 })
  }

  try {
    const res = await fetch(`${baseUrl}/api/v1/forms/${FORM_SLUG}/submit`, {
      method: 'POST',
      headers: { 'X-API-Key': apiKey, 'X-Workspace-ID': workspaceId, 'Content-Type': 'application/json' },
      body: JSON.stringify({ response_data: { fullName, email, instagram } }),
    })
    if (!res.ok) {
      console.error('Adhara giveaway submission failed:', res.status, await res.text())
      return NextResponse.json({ error: 'Entries are unavailable right now.' }, { status: 502 })
    }
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Giveaway submission error:', error)
    return NextResponse.json({ error: 'Entries are unavailable right now.' }, { status: 500 })
  }
}

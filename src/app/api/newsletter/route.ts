import { NextRequest, NextResponse } from 'next/server'

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, firstName } = body

    if (!email || typeof email !== 'string' || email.trim() === '') {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 })
    }

    if (!validateEmail(email.trim())) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 })
    }

    const cleanEmail = email.trim()
    const cleanFirstName = firstName?.trim() || ''

    // ── 1. ConvertKit / Kit ──────────────────────────────────────────
    const kitParams = new URLSearchParams()
    kitParams.append('email_address', cleanEmail)
    if (cleanFirstName) kitParams.append('fields[first_name]', cleanFirstName)

    const kitPromise = fetch('https://app.kit.com/forms/9538302/subscriptions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: kitParams.toString(),
    })

    // ── 2. Adhara ────────────────────────────────────────────────────
    const baseUrl   = process.env.ADHARA_BASE_URL
    const formSlug  = process.env.ADHARA_NEWSLETTER_FORM_SLUG
    const apiKey    = process.env.ADHARA_API_KEY
    const workspaceId = process.env.ADHARA_WORKSPACE_ID

    const adharaPromise = (baseUrl && formSlug && apiKey && workspaceId)
      ? fetch(`${baseUrl}/api/v1/forms/${formSlug}/submit`, {
          method: 'POST',
          headers: {
            'X-API-Key': apiKey,
            'X-Workspace-ID': workspaceId,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            response_data: { email: cleanEmail, fullName: cleanFirstName },
          }),
        })
      : Promise.resolve(null)

    // Fire both at the same time
    const [kitRes, adharaRes] = await Promise.all([kitPromise, adharaPromise])

    if (!kitRes.ok) {
      const errorText = await kitRes.text()
      console.error('ConvertKit subscription failed:', kitRes.status, errorText)
      return NextResponse.json({ error: 'Failed to subscribe' }, { status: kitRes.status })
    }

    if (adharaRes && !adharaRes.ok) {
      // Log but don't fail — Kit succeeded, Adhara is secondary
      const errorText = await adharaRes.text()
      console.error('Adhara newsletter submission failed:', adharaRes.status, errorText)
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Newsletter submission error:', error)
    return NextResponse.json({ error: 'An unexpected error occurred' }, { status: 500 })
  }
}

import { NextRequest, NextResponse } from 'next/server'

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone } = await request.json()

    if (!name || typeof name !== 'string' || name.trim() === '') {
      return NextResponse.json({ error: 'Name is required' }, { status: 400 })
    }

    if (!email || !validateEmail(email)) {
      return NextResponse.json({ error: 'Valid email is required' }, { status: 400 })
    }

    const baseUrl = process.env.ADHARA_BASE_URL
    const formSlug = process.env.ADHARA_BODY_RECLAIMED_FORM_SLUG
    const apiKey = process.env.ADHARA_API_KEY
    const workspaceId = process.env.ADHARA_WORKSPACE_ID

    if (baseUrl && formSlug && apiKey && workspaceId) {
      const res = await fetch(`${baseUrl}/api/v1/forms/${formSlug}/submit`, {
        method: 'POST',
        headers: {
          'X-API-Key': apiKey,
          'X-Workspace-ID': workspaceId,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          response_data: {
            fullName: name.trim(),
            email: email.trim(),
            phone: phone?.trim() ?? '',
          },
        }),
      })

      if (!res.ok) {
        console.error('Adhara body-reclaimed-join submission failed:', res.status, await res.text())
      }
    } else {
      console.warn('ADHARA_BODY_RECLAIMED_FORM_SLUG not configured — lead not captured in Adhara')
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('body-reclaimed-join error:', error)
    return NextResponse.json({ error: 'An unexpected error occurred' }, { status: 500 })
  }
}

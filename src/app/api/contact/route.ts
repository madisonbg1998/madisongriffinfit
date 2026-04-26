import { NextRequest, NextResponse } from 'next/server'

const REQUIRED_FIELDS = ['name', 'message']

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const missing = REQUIRED_FIELDS.filter(
      (field) => !body[field] || (typeof body[field] === 'string' && body[field].trim() === '')
    )

    if (missing.length > 0) {
      return NextResponse.json(
        { error: `Missing required fields: ${missing.join(', ')}` },
        { status: 400 }
      )
    }

    if (body.email && !validateEmail(body.email)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 })
    }

    const baseUrl = process.env.ADHARA_BASE_URL
    const formSlug = process.env.ADHARA_CONTACT_FORM_SLUG
    const apiKey = process.env.ADHARA_API_KEY
    const workspaceId = process.env.ADHARA_WORKSPACE_ID

    if (!baseUrl || !formSlug || !apiKey || !workspaceId) {
      console.error('Missing Adhara environment variables for contact form')
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 })
    }

    const response = await fetch(`${baseUrl}/api/v1/forms/${formSlug}/submit`, {
      method: 'POST',
      headers: {
        'X-API-Key': apiKey,
        'X-Workspace-ID': workspaceId,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ response_data: body }),
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error('Adhara contact submission failed:', response.status, errorText)
      return NextResponse.json({ error: 'Failed to send message' }, { status: response.status })
    }

    const data = await response.json()
    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error('Contact submission error:', error)
    return NextResponse.json({ error: 'An unexpected error occurred' }, { status: 500 })
  }
}

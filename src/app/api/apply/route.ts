import { NextRequest, NextResponse } from 'next/server'

const REQUIRED_FIELDS = [
  'fullName',
  'email',
  'fitnessGoals',
  'currentRoutine',
  'biggestStruggle',
]

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate required fields
    const missing = REQUIRED_FIELDS.filter(
      (field) => !body[field] || (typeof body[field] === 'string' && body[field].trim() === '')
    )

    if (missing.length > 0) {
      return NextResponse.json(
        { error: `Missing required fields: ${missing.join(', ')}` },
        { status: 400 }
      )
    }

    // Validate email format
    if (!validateEmail(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Check environment variables
    const baseUrl = process.env.ADHARA_BASE_URL
    const formSlug = process.env.ADHARA_FORM_SLUG
    const apiKey = process.env.ADHARA_API_KEY
    const workspaceId = process.env.ADHARA_WORKSPACE_ID

    if (!baseUrl || !formSlug || !apiKey || !workspaceId) {
      console.error('Missing Adhara environment variables')
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      )
    }

    // Submit to Adhara authenticated endpoint
    const response = await fetch(
      `${baseUrl}/api/v1/forms/${formSlug}/submit`,
      {
        method: 'POST',
        headers: {
          'X-API-Key': apiKey,
          'X-Workspace-ID': workspaceId,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          response_data: body,
        }),
      }
    )

    if (!response.ok) {
      const errorText = await response.text()
      console.error('Adhara submission failed:', response.status, errorText)
      return NextResponse.json(
        { error: 'Failed to submit application' },
        { status: response.status }
      )
    }

    const data = await response.json()
    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error('Application submission error:', error)
    return NextResponse.json(
      { error: 'An unexpected error occurred' },
      { status: 500 }
    )
  }
}

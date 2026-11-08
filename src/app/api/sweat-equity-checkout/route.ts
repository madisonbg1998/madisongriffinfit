import { NextRequest, NextResponse } from 'next/server'

// Adhara commerce records for the Sweat Equity $750/month subscription
const WORKSPACE_SLUG = 'madisongriffinfitcom'
const PRODUCT_ID = '8a8a4047-d4ae-442b-89a4-d73cb83bcc45'
const PRICE_ID = '6400175c-5b11-45b4-83a4-ca7b6beccea0'

export async function POST(request: NextRequest) {
  const baseUrl = process.env.ADHARA_BASE_URL || 'https://api.adharaweb.com'
  const origin = request.nextUrl.origin

  const body = await request.json().catch(() => ({}))
  const firstName = typeof body.firstName === 'string' ? body.firstName.trim().slice(0, 50) : ''
  if (!firstName) {
    return NextResponse.json({ error: 'First name is required.' }, { status: 400 })
  }

  try {
    const res = await fetch(`${baseUrl}/api/v1/public/shop/${WORKSPACE_SLUG}/checkout`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        item_type: 'product',
        item_id: PRODUCT_ID,
        price_id: PRICE_ID,
        quantity: 1,
        // Stripe fills in {CHECKOUT_SESSION_ID}; the welcome page uses it to verify payment
        success_url: `${origin}/sweat-equity/welcome?session_id={CHECKOUT_SESSION_ID}&first_name=${encodeURIComponent(firstName)}`,
        cancel_url: `${origin}/sweat-equity/checkout`,
      }),
    })

    if (!res.ok) {
      console.error('Adhara Sweat Equity checkout failed:', res.status, await res.text())
      return NextResponse.json({ error: 'Checkout is unavailable right now.' }, { status: 502 })
    }

    const { checkout_url: checkoutUrl } = await res.json()
    return NextResponse.json({ checkoutUrl })
  } catch (error) {
    console.error('Sweat Equity checkout error:', error)
    return NextResponse.json({ error: 'Checkout is unavailable right now.' }, { status: 500 })
  }
}

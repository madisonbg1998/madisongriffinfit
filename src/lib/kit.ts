// Kit (ConvertKit) tags for people who opted in to email
export const KIT_TAGS = {
  founderFitnessAudit: 25706982,
  sweatEquityGiveaway: 25706983,
} as const

// Adds (or updates) a subscriber in Kit and applies the tag. Never throws: a Kit
// problem is logged and must not block the form the person just submitted.
export async function addToKitTag(tagId: number, email: string, firstName?: string) {
  const apiKey = process.env.CONVERTKIT_API_KEY
  if (!apiKey) {
    console.error('CONVERTKIT_API_KEY not configured — subscriber not added to Kit')
    return
  }
  try {
    const res = await fetch(`https://api.convertkit.com/v3/tags/${tagId}/subscribe`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ api_key: apiKey, email, ...(firstName ? { first_name: firstName } : {}) }),
    })
    if (!res.ok) console.error('Kit tag subscribe failed:', res.status, await res.text())
  } catch (error) {
    console.error('Kit tag subscribe error:', error)
  }
}

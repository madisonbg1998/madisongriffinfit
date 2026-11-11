// Kit (ConvertKit) helpers. Works with either key type stored in CONVERTKIT_API_KEY:
// a V4 key (starts with "kit_") or a legacy v3 API key.

export const KIT_TAGS = {
  founderFitnessAudit: 25706982,
  sweatEquityGiveaway: 25706983,
} as const

export const KIT_SEQUENCES = {
  sweatEquityWelcome: 2962783,
} as const

type Target = { kind: 'tags' | 'sequences'; id: number }

async function check(res: Response, what: string) {
  if (!res.ok) {
    console.error(`Kit ${what} failed:`, res.status, await res.text())
    return false
  }
  return true
}

async function subscribe(target: Target, email: string, firstName?: string) {
  const apiKey = process.env.CONVERTKIT_API_KEY?.trim()
  if (!apiKey) {
    console.error('CONVERTKIT_API_KEY not configured — subscriber not added to Kit')
    return
  }

  try {
    if (apiKey.startsWith('kit_')) {
      // V4: create/update the subscriber first, then add them to the tag or sequence
      const headers = { 'Content-Type': 'application/json', 'X-Kit-Api-Key': apiKey }
      const created = await fetch('https://api.kit.com/v4/subscribers', {
        method: 'POST',
        headers,
        body: JSON.stringify({ email_address: email, ...(firstName ? { first_name: firstName } : {}) }),
      })
      if (!(await check(created, 'v4 create subscriber'))) return
      const added = await fetch(`https://api.kit.com/v4/${target.kind}/${target.id}/subscribers`, {
        method: 'POST',
        headers,
        body: JSON.stringify({ email_address: email }),
      })
      await check(added, `v4 add to ${target.kind} ${target.id}`)
      return
    }

    // Legacy v3 key
    const res = await fetch(`https://api.convertkit.com/v3/${target.kind}/${target.id}/subscribe`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ api_key: apiKey, email, ...(firstName ? { first_name: firstName } : {}) }),
    })
    await check(res, `v3 subscribe to ${target.kind} ${target.id}`)
  } catch (error) {
    console.error('Kit request error:', error)
  }
}

// Never throws: a Kit problem is logged and must not block the form the person just submitted.
export function addToKitTag(tagId: number, email: string, firstName?: string) {
  return subscribe({ kind: 'tags', id: tagId }, email, firstName)
}

export function addToKitSequence(sequenceId: number, email: string, firstName?: string) {
  return subscribe({ kind: 'sequences', id: sequenceId }, email, firstName)
}

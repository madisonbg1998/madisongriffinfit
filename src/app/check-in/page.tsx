import type { Metadata } from 'next'
import CheckInForm from '../body-unmuted/check-in/_form'

// Same weekly check-in as /body-unmuted/check-in, at a shorter URL
export const metadata: Metadata = {
  title: 'Weekly Check-In | Sweat Equity',
  robots: { index: false, follow: false },
}

export default function CheckInPage() {
  return <CheckInForm submittedPath="/check-in/submitted" />
}

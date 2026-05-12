import type { Metadata } from 'next'
import CheckInForm from './_form'

export const metadata: Metadata = {
  title: 'Weekly Check-In | Body Unmuted',
  robots: { index: false, follow: false },
}

export default function CheckInPage() {
  return <CheckInForm />
}

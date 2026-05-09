import type { Metadata } from 'next'
import IntakeForm from './_form'

export const metadata: Metadata = {
  title: 'Client Intake | Madison Griffin Fit',
  robots: { index: false, follow: false },
}

export default function IntakePage() {
  return <IntakeForm />
}

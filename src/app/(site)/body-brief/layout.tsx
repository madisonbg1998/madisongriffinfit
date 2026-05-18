import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Body Brief — Intake Form',
  description:
    'Get your personalized Body Brief from Madison Griffin. Answer a few honest questions and receive a custom plan overview and opportunity to schedule a call within 24-48 hours.',
}

export default function BodyBriefLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

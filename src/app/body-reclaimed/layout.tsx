import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Body Reclaimed | Monthly Coaching System',
  description:
    'A custom monthly coaching system built around your actual life. Custom programming, macro targets, and personalised monthly check-ins.',
}

export default function BodyReclaimedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

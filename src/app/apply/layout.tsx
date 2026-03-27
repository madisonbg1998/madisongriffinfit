import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Apply for Coaching | Madison Griffin Fit',
  description:
    'Apply for personalized 1:1 strength training and nutrition coaching with Madison Griffin. For women ready to build a body that actually works.',
}

export default function ApplyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

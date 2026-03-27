import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Insights on strength training, nutrition, and building a body that keeps up with your life. Coming soon from Madison Griffin.',
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

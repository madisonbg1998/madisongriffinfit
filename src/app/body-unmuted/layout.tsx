import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Body Unmuted | Madison Griffin Fit',
  description: 'Body Unmuted coaching by Madison Griffin.',
}

export default function BodyUnmutedLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

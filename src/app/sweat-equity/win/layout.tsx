import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'Win a Free Month | Sweat Equity' },
  description: 'Enter to win a free month inside Sweat Equity, fitness for the woman with no off season.',
}

export default function SweatEquityWinLayout({ children }: { children: React.ReactNode }) {
  return children
}

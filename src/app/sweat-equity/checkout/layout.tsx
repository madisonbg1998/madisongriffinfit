import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'Checkout | Sweat Equity' },
  description: 'Claim your shares in Sweat Equity. Fitness for the woman with no off season.',
  robots: { index: false, follow: false },
}

export default function SweatEquityCheckoutLayout({ children }: { children: React.ReactNode }) {
  return children
}

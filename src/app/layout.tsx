import type { Metadata } from 'next'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: 'Madison Griffin Fit | Strength & Nutrition Coach',
  description:
    'Personalized strength training and nutrition coaching for ambitious women who travel and build businesses. Build a body that performs — no matter where life takes you.',
  keywords: [
    'strength coach for women',
    'nutrition coaching',
    'online fitness coach',
    'women who travel',
    'female entrepreneur fitness',
    'Madison Griffin',
  ],
  authors: [{ name: 'Madison Griffin' }],
  openGraph: {
    title: 'Madison Griffin Fit | Strength & Nutrition Coach',
    description:
      'Personalized strength training and nutrition coaching for ambitious women who travel and build businesses. Build a body that performs — no matter where life takes you.',
    url: 'https://madisongriffin.fit',
    siteName: 'Madison Griffin Fit',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Madison Griffin Fit | Strength & Nutrition Coach',
    description:
      'Personalized strength training and nutrition coaching for ambitious women who travel and build businesses.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans bg-cream text-midnight antialiased">
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

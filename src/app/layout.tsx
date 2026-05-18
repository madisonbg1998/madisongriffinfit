import type { Metadata } from 'next'
import './globals.css'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://madison-griffin.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Madison Griffin Fit | Strength & Nutrition Coach',
    template: '%s | Madison Griffin Fit',
  },
  description:
    'Build a strong, lean body that actually lasts. Personalized strength training and nutrition coaching for women who travel, build businesses, and refuse to put life on pause.',
  keywords: [
    'strength coach for women',
    'nutrition coaching',
    'online fitness coach',
    'women who travel',
    'female entrepreneur fitness',
    'body unmuted',
    'Madison Griffin',
    'strength training for women',
    'fitness coaching',
    'nutrition without restriction',
  ],
  authors: [{ name: 'Madison Griffin' }],
  creator: 'Madison Griffin',
  openGraph: {
    title: 'Madison Griffin Fit | Build a Body That Actually Lasts',
    description:
      'Personalized strength training and nutrition coaching for women who live full, expansive lives. Stop starting over — build a body that holds.',
    url: siteUrl,
    siteName: 'Madison Griffin Fit',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/Madison-29.webp',
        width: 1200,
        height: 630,
        alt: 'Madison Griffin — Strength & Nutrition Coach for Women',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Madison Griffin Fit | Build a Body That Actually Lasts',
    description:
      'Personalized strength & nutrition coaching for women who refuse to put life on pause.',
    images: ['/Madison-29.webp'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
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
        {children}
      </body>
    </html>
  )
}

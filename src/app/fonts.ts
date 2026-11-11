import { Archivo_Black, Bodoni_Moda, Cormorant_Garamond, Cormorant_SC, Fredoka, Pinyon_Script, Space_Mono } from 'next/font/google'
import localFont from 'next/font/local'

// Sweat Equity brand fonts from the brand guide
export const elza = localFont({ src: './fonts/sweat-equity/Elza-Black.ttf', weight: '900' })
export const doblegh = localFont({
  src: [
    { path: './fonts/sweat-equity/doblegh-medium.otf', weight: '500' },
    { path: './fonts/sweat-equity/doblegh-bold.otf', weight: '700' },
  ],
})
export const geistMono = localFont({ src: './fonts/sweat-equity/GeistMono-Regular.ttf', weight: '400' })

// Sweat Equity brand fonts
export const display = Archivo_Black({ subsets: ['latin'], weight: '400' })
export const rounded = Fredoka({ subsets: ['latin'], weight: ['400', '500', '700'] })
export const mono = Space_Mono({ subsets: ['latin'], weight: '400' })

// Regency stationery fonts (fitness funeral invite)
export const script = Pinyon_Script({ subsets: ['latin'], weight: '400' })
export const garamond = Cormorant_Garamond({ subsets: ['latin'], weight: ['400', '500', '600'], style: ['normal', 'italic'] })
export const smallCaps = Cormorant_SC({ subsets: ['latin'], weight: ['500', '600'] })

// Pearl-strand poster serif (fitness funeral invite)
export const bodoni = Bodoni_Moda({ subsets: ['latin'], weight: ['400', '500'], style: ['normal', 'italic'] })

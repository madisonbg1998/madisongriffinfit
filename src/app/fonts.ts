import { Archivo_Black, Cormorant_Garamond, Cormorant_SC, Fredoka, Pinyon_Script, Space_Mono } from 'next/font/google'

// Sweat Equity brand fonts
export const display = Archivo_Black({ subsets: ['latin'], weight: '400' })
export const rounded = Fredoka({ subsets: ['latin'], weight: ['400', '500', '700'] })
export const mono = Space_Mono({ subsets: ['latin'], weight: '400' })

// Regency stationery fonts (fitness funeral invite)
export const script = Pinyon_Script({ subsets: ['latin'], weight: '400' })
export const garamond = Cormorant_Garamond({ subsets: ['latin'], weight: ['400', '500', '600'], style: ['normal', 'italic'] })
export const smallCaps = Cormorant_SC({ subsets: ['latin'], weight: ['500', '600'] })

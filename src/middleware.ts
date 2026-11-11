import { NextResponse, type NextRequest } from 'next/server'

// Flip to false to bring the full site back.
const UNDER_CONSTRUCTION = true

// Public pages that show the under construction page while the flag is on.
// Pages not listed here (intake, chat, connect, newsletter) stay live.
const HIDDEN_PATHS = [
  '/',
  '/about',
  '/method',
  '/work-with-me',
  '/body-decoded',
  '/body-brief',
  '/blog',
  '/apply',
  '/body-unmuted',
  '/body-reclaimed',
]

// Exceptions inside hidden sections that stay live (weekly check-in form + its confirmation page).
const LIVE_PATHS = ['/body-unmuted/check-in']

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Founder Fitness Audit is a standalone HTML page in /public; serve it at a clean URL
  if (pathname === '/founder-fitness-audit') {
    return NextResponse.rewrite(new URL('/founder-fitness-audit.html', request.url))
  }

  if (!UNDER_CONSTRUCTION) return NextResponse.next()

  if (LIVE_PATHS.some((p) => pathname === p || pathname.startsWith(`${p}/`))) {
    return NextResponse.next()
  }

  const hidden = HIDDEN_PATHS.some((p) =>
    p === '/' ? pathname === '/' : pathname === p || pathname.startsWith(`${p}/`)
  )
  if (!hidden) return NextResponse.next()

  return NextResponse.rewrite(new URL('/under-construction', request.url))
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
}

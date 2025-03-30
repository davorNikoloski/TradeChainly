import { NextResponse } from 'next/server';
import exchangeCardsData from './data/exchangeCards.json'; // Adjust the path if needed

const allowedPaths = [
  '/404',
  '/',
  '/features',
  '/contact',
  '/exchangeSupport',
  '/pricing',
  '/privacyPolicy',
  '/termsAndConditions',
  '/api/auth/[...nextauth]',
  '/api/webhook',
];

// Dynamically get the integration names
const allowedIntegrations = exchangeCardsData.map((exchange) =>
  exchange.name.toLowerCase()
);

export function middleware(request) {
  const { pathname } = request.nextUrl;
  const isApiRoute = pathname.startsWith('/api/');

  if (
    pathname.startsWith('/_next/') ||
    pathname.startsWith('/favicon.ico') ||
    pathname.startsWith('/images/') ||
    pathname.startsWith('/fonts/')
  ) {
    return NextResponse.next();
  }

  if (isApiRoute) {
    return NextResponse.next();
  }

  // Check singleIntegration routes dynamically
  if (pathname.startsWith('/singleIntegration/')) {
    const integrationName = pathname.split('/')[2]?.toLowerCase();
    if (!allowedIntegrations.includes(integrationName)) {
      return NextResponse.redirect(new URL('/404', request.url));
    }
    return NextResponse.next();
  }

  if (!allowedPaths.includes(pathname)) {
    return NextResponse.redirect(new URL('/404', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|images/|fonts/).*)',
  ],
};

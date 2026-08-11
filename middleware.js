import { NextResponse } from 'next/server';

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Intercept browser extension polling & WordPress scanner pings to prevent terminal 404 logs
  if (
    pathname === '/wp-json' ||
    pathname.startsWith('/wp-json/') ||
    pathname.startsWith('/api/extension')
  ) {
    return new NextResponse(null, { status: 204 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/wp-json', '/wp-json/:path*', '/api/extension/:path*'],
};

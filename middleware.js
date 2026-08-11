import { NextResponse } from 'next/server';

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Intercept browser extension polling to prevent terminal 404 logs
  if (pathname.startsWith('/api/extension')) {
    return new NextResponse(null, { status: 204 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/api/extension/:path*'],
};

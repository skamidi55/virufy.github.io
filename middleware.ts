import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {

    /* /accessible-webdesign --> /for-disabled-persons */
    if (request.nextUrl.pathname.startsWith('/plain-language/accessible-webdesign')) {
        return NextResponse.redirect(new URL('/plain-language/for-disabled-persons', request.url));
    }

    /* /another-url --> /another-redirect */
    if (request.nextUrl.pathname.startsWith('/plain-language/another-url')) {
        return NextResponse.redirect(new URL('/plain-language/another-redirect', request.url));
    }
}
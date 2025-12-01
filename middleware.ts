// middleware.ts
import { createI18nMiddleware } from 'next-international/middleware';
import { NextRequest, NextResponse } from 'next/server';

// --- Configuration I18n ---
const I18nMiddleware = createI18nMiddleware({
    locales: ['en', 'fr', 'mg'],
    defaultLocale: 'fr',
});

// --- Middleware principal ---
export async function middleware(request: NextRequest) {
   // Sinon, appliquer la gestion de langue
    return I18nMiddleware(request);
}

// --- Config matcher ---
export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\.).*)',
    ],
};

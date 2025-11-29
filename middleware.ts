// middleware.ts
import { createI18nMiddleware } from 'next-international/middleware';
import { NextRequest, NextResponse } from 'next/server';
import appConfig from "@/app/config/app.config";
import { User } from "@/app/interfaces";

// --- Configuration I18n ---
const I18nMiddleware = createI18nMiddleware({
    locales: ['en', 'fr', 'mg'],
    defaultLocale: 'fr',
});

// --- Routes publiques et protégées ---
const PUBLIC_PATHS = [
    '/login',
    '/signup',
    '/forgot-password',
    '/reset-password',
    '/reactivate',
];
const PROTECTED_PATHS = [
    '/dashboard',
    '/admin',
    '/profile',
    '/settings',
    '/chat',
];

// --- Helper : supprimer la locale du chemin ---
function getPathWithoutLocale(pathname: string): string {
    const segments = pathname.split('/').filter(Boolean);
    const locales = ['en', 'fr', 'mg'];
    if (locales.includes(segments[0])) segments.shift();
    return '/' + segments.join('/');
}

// --- Vérifier l'authentification ---
async function checkAuthentication(request: NextRequest): Promise<User | false> {
    const token = request.cookies.get(appConfig.TOKEN_KEY);
    if (!token) return false;

    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/check-me`, {
            headers: {
                'Authorization': `Bearer ${token.value}`,
                'Accept': 'application/json',
            },
            cache: 'no-store',
        });

        if (response.ok) {
            return await response.json();
        }
        return false;
    } catch (error) {
        console.error('Erreur lors de la vérification du token:', error);
        return false;
    }
}

// --- Construire une URL avec la bonne locale ---
function buildLocalizedUrl(request: NextRequest, path: string, locale?: string): URL {
    const locales = ['en', 'fr', 'mg'];
    const currentLocale = request.nextUrl.pathname.split('/')[1];
    const selectedLocale =
        locale && locales.includes(locale)
            ? locale
            : locales.includes(currentLocale)
                ? currentLocale
                : 'fr';

    return new URL(`/${selectedLocale}${path}`, request.nextUrl.origin);
}

// --- Middleware principal ---
export async function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;
    const pathWithoutLocale = getPathWithoutLocale(pathname);

    // Vérifier si la route est publique ou protégée
    const isPublicPath = PUBLIC_PATHS.some(path => pathWithoutLocale.startsWith(path));
    const isProtectedPath = PROTECTED_PATHS.some(path => pathWithoutLocale.startsWith(path));

    // Vérifier l'authentification
    const user = await checkAuthentication(request);
    const isAuthenticated = !!user;

    // Si non connecté et route protégée → rediriger vers login
    if (!isAuthenticated && isProtectedPath) {
        const loginUrl = buildLocalizedUrl(request, '/login');
        loginUrl.searchParams.set('redirect', pathWithoutLocale);
        return NextResponse.redirect(loginUrl);
    }

    // // Si connecté et route publique → rediriger vers dashboard (ou redirect param)
    // if (isAuthenticated && !isPublicPath) {
    //     const redirectParam = request.nextUrl.searchParams.get('redirect');
    //     const targetPath =
    //         redirectParam && redirectParam.startsWith('/')
    //             ? redirectParam
    //             : '/admin/dashboard';
    //     return NextResponse.redirect(buildLocalizedUrl(request, targetPath));
    // }

    // // Si route racine → rediriger selon état d'authentification
    // if (pathWithoutLocale === '/' || pathWithoutLocale === '') {
    //     const targetPath = isAuthenticated ? '/admin/dashboard' : '';
    //     return NextResponse.redirect(buildLocalizedUrl(request, targetPath));
    // }

    // Sinon, appliquer la gestion de langue
    return I18nMiddleware(request);
}

// --- Config matcher ---
export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\.).*)',
    ],
};

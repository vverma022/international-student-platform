/**
 * Next.js Middleware for Internationalization
 * 
 * Handles automatic locale detection and routing.
 * Redirects users to the appropriate locale-prefixed URL.
 * 
 * Features:
 * - Automatic locale detection from Accept-Language header
 * - URL-based locale routing (e.g., /en, /fr, /es, /ru)
 * - Default locale fallback (English)
 * 
 * This middleware runs on every request to ensure proper locale routing.
 */

import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n/config';

export default createMiddleware({
  // List of all supported locales
  locales,
  
  // Default locale to use when none is detected
  defaultLocale,
  
  // Always show locale in URL (e.g., /en/about instead of /about)
  localePrefix: 'always'
});

export const config = {
  // Match all pathnames except for:
  // - API routes
  // - Static files (_next/static)
  // - Image optimization files (_next/image)
  // - Favicon and other public assets
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)']
};


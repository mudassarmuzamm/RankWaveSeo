import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { BreadcrumbItem } from '../types';

interface RouterContextType {
  currentPath: string;
  navigate: (to: string) => void;
  breadcrumbs: BreadcrumbItem[];
  canonicalUrl: string;
}

const RouterContext = createContext<RouterContextType | undefined>(undefined);

export const BASE_URL = 'https://rankwaveseo.com';

const KNOWN_ROUTE_ROOTS = [
  'about',
  'services',
  'seo-packages',
  'case-studies',
  'blog',
  'contact',
  'free-seo-audit',
  'privacy-policy',
  'terms-and-conditions',
];

export function resolveRoutePath(rawPath: string): string {
  if (!rawPath) return '/';
  
  // Clean query params and hashes
  let clean = rawPath.split('?')[0].split('#')[0].trim();
  // Strip index.html if present
  clean = clean.replace(/\/index\.html$/, '').replace(/^index\.html$/, '');

  const segments = clean.split('/').filter(Boolean);
  if (segments.length === 0) return '/';

  // Check if any segment matches a known route root (e.g. /repo-name/services/ -> finds services)
  const knownIndex = segments.findIndex(s => KNOWN_ROUTE_ROOTS.includes(s.toLowerCase()));
  if (knownIndex !== -1) {
    const relevant = segments.slice(knownIndex);
    return `/${relevant.join('/')}/`.toLowerCase();
  }

  // If there is only 1 segment and it's not a known route (like /repo-name/ on GitHub Pages), map to Home
  if (segments.length === 1 && !KNOWN_ROUTE_ROOTS.includes(segments[0].toLowerCase())) {
    return '/';
  }

  return normalizePath(clean);
}

export function extractCurrentPath(): string {
  if (typeof window === 'undefined') return '/';

  // 1. Support hash fallback e.g. #/about or #/services/technical-seo/
  if (window.location.hash) {
    const hashClean = window.location.hash.replace(/^#\/?!?/, '');
    if (hashClean && hashClean !== '/') {
      return normalizePath(hashClean.startsWith('/') ? hashClean : `/${hashClean}`);
    }
  }

  // 2. Check window.location.pathname
  return resolveRoutePath(window.location.pathname);
}

export function normalizePath(path: string): string {
  if (!path) return '/';
  // Strip query string and hash for path matching
  const cleanPath = path.split('?')[0].split('#')[0];
  if (cleanPath === '' || cleanPath === '/') return '/';
  
  // Ensure starts with / and ends with /
  let normalized = cleanPath.startsWith('/') ? cleanPath : `/${cleanPath}`;
  if (!normalized.endsWith('/')) {
    normalized = `${normalized}/`;
  }
  return normalized.toLowerCase();
}

export function computeBreadcrumbs(path: string): BreadcrumbItem[] {
  const norm = normalizePath(path);
  if (norm === '/') {
    return [{ name: 'Home', path: '/' }];
  }

  const parts = norm.split('/').filter(Boolean);
  const crumbs: BreadcrumbItem[] = [{ name: 'Home', path: '/' }];
  
  let currentAcc = '';
  parts.forEach((part, index) => {
    currentAcc += `/${part}`;
    const fullCrumbPath = `${currentAcc}/`;

    // Map common slug segments to clean readable names
    let name = part
      .replace(/-/g, ' ')
      .replace(/\b\w/g, (char) => char.toUpperCase());

    if (part === 'seo-packages') name = 'SEO Packages';
    if (part === 'free-seo-audit') name = 'Free SEO Audit';
    if (part === 'on-page-seo') name = 'On-Page SEO';
    if (part === 'off-page-seo') name = 'Off-Page SEO';
    if (part === 'technical-seo') name = 'Technical SEO';
    if (part === 'local-seo') name = 'Local SEO';
    if (part === 'case-studies') name = 'Case Studies';
    if (part === 'privacy-policy') name = 'Privacy Policy';
    if (part === 'terms-and-conditions') name = 'Terms & Conditions';

    crumbs.push({
      name,
      path: fullCrumbPath,
    });
  });

  return crumbs;
}

export const RouterProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return extractCurrentPath();
  });

  useEffect(() => {
    const handleUrlChange = () => {
      setCurrentPath(extractCurrentPath());
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', handleUrlChange);
    window.addEventListener('hashchange', handleUrlChange);
    return () => {
      window.removeEventListener('popstate', handleUrlChange);
      window.removeEventListener('hashchange', handleUrlChange);
    };
  }, []);

  const navigate = (to: string) => {
    const targetNorm = normalizePath(to);
    if (targetNorm !== currentPath) {
      if (typeof window !== 'undefined') {
        // If we are currently in a hash router context or on GitHub Pages subfolder
        const isGitHubPagesSubpath = window.location.pathname.length > 1 && !window.location.pathname.startsWith('/about') && !window.location.pathname.startsWith('/services') && !window.location.pathname.startsWith('/blog') && !window.location.pathname.startsWith('/contact') && !window.location.pathname.startsWith('/seo-packages') && !window.location.pathname.startsWith('/free-seo-audit') && !window.location.pathname.startsWith('/case-studies') && !window.location.pathname.startsWith('/privacy-policy') && !window.location.pathname.startsWith('/terms-and-conditions');

        if (window.location.hash || isGitHubPagesSubpath) {
          window.location.hash = targetNorm;
        } else {
          try {
            window.history.pushState({}, '', targetNorm);
          } catch {
            window.location.hash = targetNorm;
          }
        }
      }
      setCurrentPath(targetNorm);
      window.scrollTo({ top: 0, behavior: 'instant' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const breadcrumbs = computeBreadcrumbs(currentPath);
  const canonicalUrl = `${BASE_URL}${currentPath === '/' ? '' : currentPath}`;

  return (
    <RouterContext.Provider value={{ currentPath, navigate, breadcrumbs, canonicalUrl }}>
      {children}
    </RouterContext.Provider>
  );
};

export const useRouter = (): RouterContextType => {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error('useRouter must be used within a RouterProvider');
  }
  return context;
};

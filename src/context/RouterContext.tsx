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
    if (typeof window !== 'undefined') {
      return normalizePath(window.location.pathname);
    }
    return '/';
  });

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(normalizePath(window.location.pathname));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (to: string) => {
    const targetNorm = normalizePath(to);
    if (targetNorm !== currentPath) {
      if (typeof window !== 'undefined') {
        window.history.pushState({}, '', targetNorm);
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

import React, { useEffect } from 'react';
import { RouterProvider, useRouter } from './context/RouterContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesHubPage } from './pages/ServicesHubPage';
import { OnPageSeoPage } from './pages/OnPageSeoPage';
import { OffPageSeoPage } from './pages/OffPageSeoPage';
import { TechnicalSeoPage } from './pages/TechnicalSeoPage';
import { LocalSeoPage } from './pages/LocalSeoPage';
import { SeoPackagesPage } from './pages/SeoPackagesPage';
import { CaseStudiesPage } from './pages/CaseStudiesPage';
import { BlogIndexPage } from './pages/BlogIndexPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { ContactPage } from './pages/ContactPage';
import { FreeSeoAuditPage } from './pages/FreeSeoAuditPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';
import { NotFoundPage } from './pages/NotFoundPage';

const AppContent: React.FC = () => {
  const { currentPath } = useRouter();

  // Scroll to top upon page navigation
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [currentPath]);

  const renderActivePage = () => {
    // Exact path mapping
    switch (currentPath) {
      case '/':
        return <HomePage />;
      case '/about/':
      case '/about':
        return <AboutPage />;
      case '/services/':
      case '/services':
        return <ServicesHubPage />;
      case '/services/on-page-seo/':
      case '/services/on-page-seo':
        return <OnPageSeoPage />;
      case '/services/off-page-seo/':
      case '/services/off-page-seo':
        return <OffPageSeoPage />;
      case '/services/technical-seo/':
      case '/services/technical-seo':
        return <TechnicalSeoPage />;
      case '/services/local-seo/':
      case '/services/local-seo':
        return <LocalSeoPage />;
      case '/seo-packages/':
      case '/seo-packages':
        return <SeoPackagesPage />;
      case '/case-studies/':
      case '/case-studies':
        return <CaseStudiesPage />;
      case '/blog/':
      case '/blog':
        return <BlogIndexPage />;
      case '/contact/':
      case '/contact':
        return <ContactPage />;
      case '/free-seo-audit/':
      case '/free-seo-audit':
        return <FreeSeoAuditPage />;
      case '/privacy-policy/':
      case '/privacy-policy':
        return <PrivacyPolicyPage />;
      case '/terms-and-conditions/':
      case '/terms-and-conditions':
        return <TermsPage />;
      default:
        // Check dynamic blog slug pattern
        if (currentPath.startsWith('/blog/')) {
          const rawSlug = currentPath.replace(/^\/blog\//, '').replace(/\/$/, '');
          if (rawSlug) {
            return <BlogPostPage slug={rawSlug} />;
          }
        }
        return <NotFoundPage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-blue-600 selection:text-white">
      <Navbar />
      <main className="flex-1 w-full" id="main-content">
        {renderActivePage()}
      </main>
      <Footer />
    </div>
  );
};

export function App() {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
}

export default App;

import React from 'react';
import { useRouter } from '../context/RouterContext';
import { SEOHead } from '../components/SEOHead';
import {
  FileQuestion,
  Home,
  ArrowRight,
  Sparkles,
  Search,
  BookOpen,
} from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  const { navigate } = useRouter();

  const meta = {
    title: '404 - Page Not Found | RankWave SEO',
    description: 'The requested page could not be found on RankWave SEO. Explore our core SEO services, free website audit tool, or return to the homepage.',
    keywords: '404 not found, rankwave seo',
    canonicalUrl: 'https://rankwaveseo.com/404/',
    schemaType: 'WebPage',
  };

  return (
    <>
      <SEOHead meta={meta} />

      <section className="py-24 sm:py-32 bg-slate-50 min-h-[70vh] flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="w-20 h-20 rounded-2xl bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center mx-auto shadow-sm">
            <FileQuestion className="w-10 h-10" />
          </div>

          <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200 inline-block">
            HTTP 404 Error
          </span>

          {/* EXACTLY ONE H1 */}
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Page Not Found
          </h1>

          <p className="text-base text-slate-600 max-w-md mx-auto leading-relaxed">
            The page you are looking for might have been moved, renamed, or is temporarily unavailable. Let’s get you back on track.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => navigate('/')}
              className="w-full sm:w-auto px-6 py-3 rounded-xl font-semibold text-sm text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-500/20 flex items-center justify-center gap-2"
            >
              <Home className="w-4 h-4" />
              <span>Return to Homepage</span>
            </button>

            <button
              type="button"
              onClick={() => navigate('/free-seo-audit/')}
              className="w-full sm:w-auto px-6 py-3 rounded-xl font-semibold text-sm text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 shadow-sm flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span>Get a Free SEO Audit</span>
            </button>
          </div>

          <div className="pt-8 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
            <button
              type="button"
              onClick={() => navigate('/services/')}
              className="p-3.5 rounded-xl bg-white border border-slate-200 hover:border-blue-300 shadow-sm flex items-center justify-between text-xs font-medium text-slate-700 hover:text-blue-600 transition-colors"
            >
              <span>Explore SEO Services</span>
              <ArrowRight className="w-3.5 h-3.5 text-blue-600" />
            </button>
            <button
              type="button"
              onClick={() => navigate('/seo-packages/')}
              className="p-3.5 rounded-xl bg-white border border-slate-200 hover:border-blue-300 shadow-sm flex items-center justify-between text-xs font-medium text-slate-700 hover:text-blue-600 transition-colors"
            >
              <span>View SEO Packages</span>
              <ArrowRight className="w-3.5 h-3.5 text-blue-600" />
            </button>
            <button
              type="button"
              onClick={() => navigate('/blog/')}
              className="p-3.5 rounded-xl bg-white border border-slate-200 hover:border-blue-300 shadow-sm flex items-center justify-between text-xs font-medium text-slate-700 hover:text-blue-600 transition-colors"
            >
              <span>Read SEO Guides</span>
              <ArrowRight className="w-3.5 h-3.5 text-blue-600" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

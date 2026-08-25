import React, { ReactNode } from 'react';

interface PageHeroProps {
  badge?: string;
  h1: string;
  subtitle: string;
  primaryAction?: {
    label: string;
    onClick: () => void;
    id?: string;
  };
  secondaryAction?: {
    label: string;
    onClick: () => void;
    id?: string;
  };
  extraChildren?: ReactNode;
}

export const PageHero: React.FC<PageHeroProps> = ({
  badge,
  h1,
  subtitle,
  primaryAction,
  secondaryAction,
  extraChildren,
}) => {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 sm:pt-16 sm:pb-20 bg-gradient-to-b from-blue-50/50 via-slate-50 to-slate-50 border-b border-slate-200">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-blue-500/10 blur-[120px] pointer-events-none -z-10 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
        <div className="max-w-3xl">
          {badge && (
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200/80 mb-5 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              {badge}
            </div>
          )}

          {/* EXACTLY ONE H1 */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15] mb-6">
            {h1}
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl">
            {subtitle}
          </p>

          {(primaryAction || secondaryAction) && (
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
              {primaryAction && (
                <button
                  type="button"
                  id={primaryAction.id || 'hero-primary-cta'}
                  onClick={primaryAction.onClick}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-500/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                >
                  {primaryAction.label}
                </button>
              )}
              {secondaryAction && (
                <button
                  type="button"
                  id={secondaryAction.id || 'hero-secondary-cta'}
                  onClick={secondaryAction.onClick}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-700 bg-white border border-slate-300 hover:border-blue-400 hover:text-blue-600 hover:bg-slate-50 active:scale-[0.98] shadow-sm transition-all flex items-center justify-center gap-2"
                >
                  {secondaryAction.label}
                </button>
              )}
            </div>
          )}

          {extraChildren && <div className="mt-8">{extraChildren}</div>}
        </div>
      </div>
    </section>
  );
};

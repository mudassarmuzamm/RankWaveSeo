import React from 'react';
import { useRouter } from '../context/RouterContext';
import { ChevronRight, Home } from 'lucide-react';

export const Breadcrumbs: React.FC = () => {
  const { breadcrumbs, navigate, currentPath } = useRouter();

  if (currentPath === '/' || breadcrumbs.length <= 1) {
    return null;
  }

  return (
    <nav aria-label="Breadcrumb" className="w-full bg-white border-b border-slate-200 py-2.5 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex items-center gap-1.5 text-xs sm:text-sm text-slate-500 overflow-x-auto whitespace-nowrap scrollbar-none">
        {breadcrumbs.map((crumb, idx) => {
          const isLast = idx === breadcrumbs.length - 1;
          const isFirst = idx === 0;

          return (
            <React.Fragment key={crumb.path}>
              {idx > 0 && (
                <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" aria-hidden="true" />
              )}
              {isLast ? (
                <span
                  aria-current="page"
                  className="font-semibold text-blue-600 truncate max-w-[200px] sm:max-w-md"
                >
                  {crumb.name}
                </span>
              ) : (
                <button
                  type="button"
                  onClick={() => navigate(crumb.path)}
                  className="hover:text-blue-600 transition-colors flex items-center gap-1 text-slate-600 focus:outline-none focus:text-blue-600"
                >
                  {isFirst && <Home className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />}
                  <span>{crumb.name}</span>
                </button>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </nav>
  );
};

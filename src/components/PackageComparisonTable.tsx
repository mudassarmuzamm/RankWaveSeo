import React from 'react';
import { useRouter } from '../context/RouterContext';
import { PACKAGE_COMPARISON_MATRIX, SEO_PACKAGES } from '../data/packagesData';
import { Check, HelpCircle, ArrowRight } from 'lucide-react';

export const PackageComparisonTable: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <div className="w-full overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-lg">
      <table className="w-full text-left border-collapse min-w-[720px]">
        <thead>
          <tr className="border-b border-slate-200 bg-slate-50">
            <th className="p-4 sm:p-5 text-sm font-bold text-slate-800 w-1/4">
              Strategic Capability
            </th>
            {SEO_PACKAGES.map((pkg) => (
              <th key={pkg.id} className="p-4 sm:p-5 text-sm font-bold text-slate-900 w-1/4">
                <div className="flex items-center gap-2">
                  <span>{pkg.name}</span>
                  {pkg.popular && (
                    <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200">
                      Popular
                    </span>
                  )}
                </div>
                <span className="block text-xs font-semibold text-blue-600 mt-1">
                  {pkg.startingPrice} <span className="text-slate-400 font-normal">/ mo</span>
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
          {PACKAGE_COMPARISON_MATRIX.map((row, idx) => (
            <tr
              key={idx}
              className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/60 hover:bg-slate-100/50'}
            >
              <td className="p-4 sm:p-5 font-medium text-slate-900">
                {row.feature}
              </td>
              <td className="p-4 sm:p-5 text-slate-600">
                {row.starter}
              </td>
              <td className="p-4 sm:p-5 text-blue-700 font-semibold bg-blue-50/30">
                {row.growth}
              </td>
              <td className="p-4 sm:p-5 text-slate-600">
                {row.advanced}
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr className="border-t border-slate-200 bg-slate-50">
            <td className="p-4 sm:p-5 text-xs text-slate-500 font-medium">
              Ready to take action?
            </td>
            {SEO_PACKAGES.map((pkg) => (
              <td key={pkg.id} className="p-4 sm:p-5">
                <button
                  type="button"
                  onClick={() => navigate('/contact/')}
                  className={`w-full py-2.5 px-3 rounded-lg text-xs font-semibold flex items-center justify-center gap-1 transition-all shadow-sm ${
                    pkg.popular
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : 'bg-white border border-slate-300 hover:bg-slate-100 text-slate-700'
                  }`}
                >
                  <span>Select {pkg.name.split(' ')[0]}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </td>
            ))}
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

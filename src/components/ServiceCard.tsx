import React from 'react';
import { useRouter } from '../context/RouterContext';
import { LucideIcon, ArrowRight, Check } from 'lucide-react';

interface ServiceCardProps {
  name: string;
  path: string;
  icon: LucideIcon;
  badge: string;
  description: string;
  benefits: string[];
  ctaLabel?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  name,
  path,
  icon: Icon,
  badge,
  description,
  benefits,
  ctaLabel = 'Explore Service',
}) => {
  const { navigate } = useRouter();

  return (
    <div className="group relative bg-white border border-slate-200 hover:border-blue-400/80 rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-200 hover:shadow-xl hover:shadow-blue-500/10">
      <div>
        <div className="flex items-center justify-between mb-5">
          <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all">
            <Icon className="w-6 h-6" />
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">
            {badge}
          </span>
        </div>

        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
          {name}
        </h3>

        <p className="text-sm text-slate-600 leading-relaxed mb-6">
          {description}
        </p>

        <div className="space-y-2.5 mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
            Key Focus Areas
          </span>
          {benefits.map((benefit, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
              <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
              <span>{benefit}</span>
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={() => navigate(path)}
        className="w-full py-3 px-4 rounded-xl text-sm font-semibold text-slate-700 bg-slate-50 border border-slate-200 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all flex items-center justify-center gap-2 group-hover:shadow-md"
      >
        <span>{ctaLabel}</span>
        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
      </button>
    </div>
  );
};

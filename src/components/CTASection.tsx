import React from 'react';
import { useRouter } from '../context/RouterContext';
import { Sparkles, ArrowRight, ShieldCheck, PhoneCall } from 'lucide-react';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  primaryCtaText?: string;
  secondaryCtaText?: string;
}

export const CTASection: React.FC<CTASectionProps> = ({
  title = 'Ready to Grow Your Search Visibility?',
  subtitle = 'Stop guessing what search engines want. Partner with RankWave SEO for data-driven, engineering-grade optimization that builds sustainable organic revenue.',
  primaryCtaText = 'Get a Free SEO Audit',
  secondaryCtaText = 'Speak to an SEO Strategist',
}) => {
  const { navigate } = useRouter();

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 bg-slate-900 border-t border-b border-slate-800 text-white">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-blue-400 bg-blue-950/80 border border-blue-800/60 mb-5">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Sustainable Search Growth</span>
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
          {title}
        </h2>

        <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed mb-8">
          {subtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            id="cta-section-audit-btn"
            onClick={() => navigate('/free-seo-audit/')}
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-sm text-white bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/25 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-blue-200" />
            <span>{primaryCtaText}</span>
          </button>

          <button
            type="button"
            id="cta-section-contact-btn"
            onClick={() => navigate('/contact/')}
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-slate-800 border border-slate-700 hover:bg-slate-750 hover:text-white active:scale-[0.98] transition-all flex items-center justify-center gap-2"
          >
            <PhoneCall className="w-4 h-4 text-slate-400" />
            <span>{secondaryCtaText}</span>
          </button>
        </div>
      </div>
    </section>
  );
};

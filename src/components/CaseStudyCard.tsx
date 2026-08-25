import React, { useState } from 'react';
import { CaseStudy } from '../types';
import { useRouter } from '../context/RouterContext';
import {
  TrendingUp,
  Clock,
  Layers,
  ChevronDown,
  ArrowRight,
  Lightbulb,
  CheckCircle2,
} from 'lucide-react';

export const CaseStudyCard: React.FC<{ caseStudy: CaseStudy }> = ({ caseStudy }) => {
  const [expanded, setExpanded] = useState(false);
  const { navigate } = useRouter();

  return (
    <article className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 hover:border-blue-300 transition-all shadow-md hover:shadow-lg">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
          {caseStudy.industry}
        </span>
        <div className="flex items-center gap-1.5 text-xs text-slate-400">
          <Clock className="w-3.5 h-3.5 text-slate-400" />
          <span>{caseStudy.timeline}</span>
        </div>
      </div>

      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 leading-snug">
        {caseStudy.title}
      </h3>

      <div className="text-xs font-medium text-slate-500 mb-6 flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
        <span>{caseStudy.clientType}</span>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200 mb-6">
        {caseStudy.results.map((res, idx) => (
          <div key={idx} className="text-center sm:text-left">
            <span className="block text-xl sm:text-2xl font-extrabold text-blue-600">
              {res.value}
            </span>
            <span className="block text-xs font-semibold text-slate-800 mt-0.5">
              {res.label}
            </span>
            <span className="block text-[11px] text-slate-500 mt-0.5 line-clamp-1">
              {res.context}
            </span>
          </div>
        ))}
      </div>

      {/* Summary Narrative */}
      <div className="space-y-3 text-sm text-slate-600 mb-6">
        <div>
          <strong className="text-slate-900 font-semibold block text-xs uppercase tracking-wider mb-1">
            Challenge
          </strong>
          <p className="text-slate-600 leading-relaxed">{caseStudy.challenge}</p>
        </div>

        <div>
          <strong className="text-slate-900 font-semibold block text-xs uppercase tracking-wider mb-1">
            Strategy
          </strong>
          <p className="text-slate-600 leading-relaxed">{caseStudy.strategy}</p>
        </div>
      </div>

      {/* Expandable Deep-Dive Section */}
      {expanded && (
        <div className="mt-6 pt-6 border-t border-slate-200 space-y-6 animate-in fade-in-50 duration-200">
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-blue-700 flex items-center gap-2 mb-3">
              <Layers className="w-4 h-4" />
              <span>Multi-Phase Implementation Breakdown</span>
            </h4>
            <div className="space-y-4">
              {caseStudy.implementation.map((phase, pIdx) => (
                <div key={pIdx} className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <span className="text-xs font-bold text-slate-900 block mb-2">
                    {phase.phase}
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {phase.actions.map((act, aIdx) => (
                      <li key={aIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <span>{act}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-blue-700 flex items-center gap-2 mb-3">
              <Lightbulb className="w-4 h-4" />
              <span>Key Methodological Learnings</span>
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
              {caseStudy.keyLearnings.map((learn, lIdx) => (
                <li key={lIdx} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0 mt-2" />
                  <span>{learn}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Card Actions */}
      <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-200 mt-4">
        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          className="text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1.5 transition-colors focus:outline-none"
        >
          <span>{expanded ? 'Collapse Full Case Breakdown' : 'Read Full Implementation Details'}</span>
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-200 ${
              expanded ? 'rotate-180' : ''
            }`}
          />
        </button>

        <button
          type="button"
          onClick={() => navigate(caseStudy.relatedServicePath)}
          className="text-xs text-slate-500 hover:text-blue-600 flex items-center gap-1 transition-colors"
        >
          <span>Learn about {caseStudy.relatedServiceName}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </article>
  );
};

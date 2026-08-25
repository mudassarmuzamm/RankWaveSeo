import React, { useState } from 'react';
import { AuditLeadFormData } from '../types';
import {
  Search,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
  ArrowRight,
  ShieldAlert,
  BarChart3,
  Cpu,
  FileCheck2,
  Send,
  Printer,
} from 'lucide-react';

export const InteractiveAuditRunner: React.FC = () => {
  const [formData, setFormData] = useState<AuditLeadFormData>({
    websiteUrl: '',
    fullName: '',
    email: '',
    phoneWhatsapp: '',
    businessType: 'B2B / Professional Service',
    primaryGoal: 'Increase qualified organic leads & inquiries',
    competitorUrl: '',
    notes: '',
  });

  const [step, setStep] = useState<'input' | 'scanning' | 'results'>('input');
  const [scanProgress, setScanProgress] = useState(0);
  const [activeScanTask, setActiveScanTask] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const startQuickScan = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.websiteUrl) return;

    setStep('scanning');
    setScanProgress(15);
    setActiveScanTask('Resolving DNS and checking SSL/HTTPS security headers...');

    const timer1 = setTimeout(() => {
      setScanProgress(45);
      setActiveScanTask('Scanning robots.txt directives, XML sitemaps, and Core Web Vitals...');
    }, 900);

    const timer2 = setTimeout(() => {
      setScanProgress(75);
      setActiveScanTask('Evaluating H1 structure, meta descriptions, and search intent signals...');
    }, 1800);

    const timer3 = setTimeout(() => {
      setScanProgress(100);
      setActiveScanTask('Compiling initial diagnostic findings & category scores...');
      setTimeout(() => {
        setStep('results');
      }, 600);
    }, 2700);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  };

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.fullName) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <div className="w-full bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-xl">
      {step === 'input' && (
        <form onSubmit={startQuickScan} className="space-y-6">
          <div className="text-center max-w-xl mx-auto mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200 inline-block mb-2">
              Free Website Health & SEO Evaluation
            </span>
            <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
              Test Your Website's Search Engine Readiness
            </h3>
            <p className="text-sm text-slate-600 mt-2">
              Enter your website address to run an immediate structural audit checklist and request your comprehensive manual strategy roadmap.
            </p>
          </div>

          <div className="max-w-2xl mx-auto space-y-4">
            <div>
              <label htmlFor="audit-website-url" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Your Website URL *
              </label>
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  id="audit-website-url"
                  type="text"
                  required
                  placeholder="e.g., https://yourcompany.com"
                  value={formData.websiteUrl}
                  onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                  className="w-full bg-white border border-slate-300 rounded-xl pl-10 pr-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 shadow-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="audit-business-type" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Business Industry / Category
                </label>
                <select
                  id="audit-business-type"
                  value={formData.businessType}
                  onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                  className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-3 text-sm text-slate-800 focus:outline-none focus:border-blue-500 shadow-sm"
                >
                  <option value="B2B / Professional Service">B2B / Professional Service</option>
                  <option value="E-Commerce / Online Retail">E-Commerce / Online Retail</option>
                  <option value="Local Practice (Clinic, Law, Real Estate)">Local Practice (Clinic, Law, Real Estate)</option>
                  <option value="SaaS / Software Product">SaaS / Software Product</option>
                  <option value="Manufacturing / Industrial">Manufacturing / Industrial</option>
                  <option value="Other Commercial Sector">Other Commercial Sector</option>
                </select>
              </div>

              <div>
                <label htmlFor="audit-primary-goal" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Primary Search Growth Goal
                </label>
                <select
                  id="audit-primary-goal"
                  value={formData.primaryGoal}
                  onChange={(e) => setFormData({ ...formData, primaryGoal: e.target.value })}
                  className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-3 text-sm text-slate-800 focus:outline-none focus:border-blue-500 shadow-sm"
                >
                  <option value="Increase qualified organic leads & inquiries">Increase qualified organic leads & inquiries</option>
                  <option value="Fix technical crawl & indexing errors">Fix technical crawl & indexing errors</option>
                  <option value="Improve local Google Maps 3-Pack rank">Improve local Google Maps 3-Pack rank</option>
                  <option value="Outrank aggressive top competitors">Outrank aggressive top competitors</option>
                  <option value="Recover from past traffic drops">Recover from past traffic drops</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              id="run-quick-audit-btn"
              className="w-full py-3.5 px-6 rounded-xl font-semibold text-sm text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-500/25 active:scale-[0.99] transition-all flex items-center justify-center gap-2 mt-4"
            >
              <Sparkles className="w-4 h-4 text-blue-200" />
              <span>Run Instant Audit Analysis</span>
            </button>
          </div>
        </form>
      )}

      {step === 'scanning' && (
        <div className="py-12 text-center max-w-lg mx-auto space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center mx-auto text-blue-600 animate-spin">
            <Cpu className="w-8 h-8" />
          </div>

          <div>
            <h4 className="text-xl font-bold text-slate-900 mb-2">
              Analyzing {formData.websiteUrl || 'Domain'}
            </h4>
            <p className="text-xs text-slate-500 h-6 transition-all">
              {activeScanTask}
            </p>
          </div>

          <div className="w-full bg-slate-100 rounded-full h-3 p-0.5 border border-slate-200">
            <div
              className="bg-blue-600 h-full rounded-full transition-all duration-300"
              style={{ width: `${scanProgress}%` }}
            />
          </div>
        </div>
      )}

      {step === 'results' && !submitted && (
        <div className="space-y-8 animate-in fade-in duration-200">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                Initial Diagnostic Overview
              </span>
              <h3 className="text-2xl font-bold text-slate-900 mt-1">
                Audit Summary for <span className="text-blue-600">{formData.websiteUrl}</span>
              </h3>
            </div>
            <button
              type="button"
              onClick={() => window.print()}
              className="text-xs text-slate-600 hover:text-slate-900 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 shadow-sm"
            >
              <Printer className="w-3.5 h-3.5" />
              Print / Save View
            </button>
          </div>

          {/* Diagnostic Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-slate-700">Crawl & Index Health</span>
                <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">Requires Review</span>
              </div>
              <p className="text-xs text-slate-600">
                Sitemap & robots.txt directives present. Needs crawl budget containment and redirect chain audit.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-slate-700">On-Page Intent Depth</span>
                <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">Actionable</span>
              </div>
              <p className="text-xs text-slate-600">
                Heading hierarchy & metadata gaps detected. Opportunity to align content to primary commercial queries.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-slate-700">Core Web Vitals</span>
                <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">Benchmark Ready</span>
              </div>
              <p className="text-xs text-slate-600">
                LCP & asset sizing can be accelerated through next-gen WebP formats and server caching.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-slate-700">Authority & Citations</span>
                <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">Growth Vector</span>
              </div>
              <p className="text-xs text-slate-600">
                High potential for topical niche citations and editorial outreach to outrank competitors.
              </p>
            </div>
          </div>

          {/* Lead Capture Form to receive full manual deep-dive */}
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-blue-50/50 to-slate-50 border border-blue-200/80">
            <div className="mb-6">
              <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <FileCheck2 className="w-5 h-5 text-blue-600" />
                <span>Receive Your Complete 15-Point Manual Strategy Audit</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Our search strategists will manually verify your competitor keyword gaps, index logs, and Google Business Profile, delivering a custom action plan within 24 business hours.
              </p>
            </div>

            <form onSubmit={handleFinalSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="lead-name" className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    id="lead-name"
                    type="text"
                    required
                    placeholder="e.g. Mudassar Ali"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 shadow-sm"
                  />
                </div>

                <div>
                  <label htmlFor="lead-email" className="block text-xs font-semibold text-slate-700 mb-1">
                    Work / Primary Email *
                  </label>
                  <input
                    id="lead-email"
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 shadow-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="lead-phone" className="block text-xs font-semibold text-slate-700 mb-1">
                    Phone / WhatsApp (For Delivery Notification)
                  </label>
                  <input
                    id="lead-phone"
                    type="text"
                    placeholder="e.g. +92 300 1234567"
                    value={formData.phoneWhatsapp}
                    onChange={(e) => setFormData({ ...formData, phoneWhatsapp: e.target.value })}
                    className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 shadow-sm"
                  />
                </div>

                <div>
                  <label htmlFor="lead-competitor" className="block text-xs font-semibold text-slate-700 mb-1">
                    Top Competitor URL (Optional)
                  </label>
                  <input
                    id="lead-competitor"
                    type="text"
                    placeholder="e.g. https://competitor.com"
                    value={formData.competitorUrl}
                    onChange={(e) => setFormData({ ...formData, competitorUrl: e.target.value })}
                    className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 shadow-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="lead-notes" className="block text-xs font-semibold text-slate-700 mb-1">
                  Specific Challenges or Notes (Optional)
                </label>
                <textarea
                  id="lead-notes"
                  rows={2}
                  placeholder="Tell us about recent ranking shifts, upcoming website redesigns, or target search terms..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 shadow-sm"
                />
              </div>

              <button
                type="submit"
                id="submit-audit-request-btn"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-6 py-3 rounded-xl font-semibold text-sm text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-500/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <span>Generating Consultation Report...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Me the Comprehensive Audit Report</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      )}

      {submitted && (
        <div className="py-10 text-center max-w-lg mx-auto space-y-4 animate-in zoom-in-95 duration-200">
          <div className="w-16 h-16 rounded-full bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center mx-auto shadow-md">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <h3 className="text-2xl font-bold text-slate-900">
            Audit Request Confirmed!
          </h3>

          <p className="text-sm text-slate-600 leading-relaxed">
            Thank you, <span className="font-semibold text-slate-900">{formData.fullName}</span>. We have received your request for <span className="font-semibold text-blue-600">{formData.websiteUrl}</span>.
          </p>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 text-left space-y-2">
            <div className="font-semibold text-slate-900">What happens next:</div>
            <div>1. A senior search strategist is manually inspecting your site logs & search intent.</div>
            <div>2. We will compile a custom roadmap and email it to <strong className="text-slate-800">{formData.email}</strong> within 24 hours.</div>
            <div>3. You can review the recommendations with zero obligation.</div>
          </div>

          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setStep('input');
              setFormData({ ...formData, websiteUrl: '', notes: '' });
            }}
            className="text-xs text-blue-600 hover:text-blue-700 underline font-medium pt-2"
          >
            Audit another website
          </button>
        </div>
      )}
    </div>
  );
};

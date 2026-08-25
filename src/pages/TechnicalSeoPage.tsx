import React from 'react';
import { useRouter } from '../context/RouterContext';
import { SERVICES_DATA } from '../data/servicesData';
import { SEOHead } from '../components/SEOHead';
import { PageHero } from '../components/PageHero';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { FAQAccordion } from '../components/FAQAccordion';
import { CTASection } from '../components/CTASection';
import {
  Cpu,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Terminal,
  Zap,
  Code2,
  Layers,
  FileCheck2,
  Check,
} from 'lucide-react';

export const TechnicalSeoPage: React.FC = () => {
  const { navigate } = useRouter();
  const service = SERVICES_DATA['technical-seo'];

  const auditChecklist = [
    { title: 'Robots.txt & Meta Robots Directives', desc: 'Prevent unintentional blocking of high-priority commercial URLs.' },
    { title: 'XML Sitemap Hygiene & Submission', desc: 'Ensure clean sitemaps containing only canonical 200 OK URLs.' },
    { title: 'Canonical Tag Implementation', desc: 'Eliminate duplicate content across parameter filters and staging copies.' },
    { title: 'Core Web Vitals Benchmarks (LCP, INP, CLS)', desc: 'Accelerate render performance to meet Google PageSpeed thresholds.' },
    { title: 'JavaScript Rendering & Hydration Audit', desc: 'Verify that client-side dynamic frameworks render complete DOMs for Googlebot.' },
    { title: 'HTTPS & Mixed Content Security Validation', desc: 'Enforce SSL certificates and resolve insecure passive resources.' },
    { title: '301 Redirect Loop & Chain Elimination', desc: 'Flatten multi-hop redirect chains to conserve crawl budget and PageRank.' },
    { title: 'Custom 404 Error Handling & Orphan Pages', desc: 'Identify isolated pages missing internal link pathways.' },
    { title: 'JSON-LD Structured Data Schema Validation', desc: 'Implement Organization, Service, Breadcrumb, and FAQ schemas.' },
    { title: 'Mobile Viewport & Touch Target Optimization', desc: 'Pass Google Mobile-First indexing criteria across all device classes.' },
  ];

  return (
    <>
      <SEOHead meta={service.meta} faqs={service.faqs} />
      <Breadcrumbs />

      <PageHero
        badge={service.heroBadge}
        h1={service.h1}
        subtitle={service.shortDescription}
        primaryAction={{
          label: 'Request Technical Crawl Audit',
          onClick: () => navigate('/free-seo-audit/'),
          id: 'tech-hero-audit-cta',
        }}
        secondaryAction={{
          label: 'Explore SEO Packages',
          onClick: () => navigate('/seo-packages/'),
          id: 'tech-hero-packages-cta',
        }}
      />

      {/* What Is Technical SEO? */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200 inline-block">
              Engineered Infrastructure
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              {service.whatIsTitle}
            </h2>
            {service.whatIsParagraphs.map((para, idx) => (
              <p key={idx} className="text-base sm:text-lg text-slate-700 leading-relaxed">
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Our Technical SEO Services */}
      <section className="py-16 sm:py-20 bg-slate-50/60 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200 inline-block mb-3">
              Developer-Grade Capabilities
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              {service.deliverablesTitle}
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              We diagnose and fix complex architectural issues across frontend frameworks, backend servers, and CMS engines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.deliverables.map((del, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-blue-300 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {del.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {del.description}
                  </p>
                </div>
                {del.details && (
                  <ul className="space-y-1.5 pt-3 border-t border-slate-100 text-xs text-slate-600">
                    {del.details.map((item, iIdx) => (
                      <li key={iIdx} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical SEO Audit Checklist */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200 inline-block mb-3">
              Diagnostic Matrix
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              Our 10-Point Technical SEO Audit Checklist
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Every audit rigorously evaluates these core structural checkpoints to guarantee zero crawl barriers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
            {auditChecklist.map((item, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200 shadow-sm flex items-start gap-3">
                <span className="w-6 h-6 rounded-lg bg-blue-50 text-blue-600 text-xs font-bold font-mono flex items-center justify-center shrink-0 mt-0.5 border border-blue-200">
                  {idx + 1}
                </span>
                <div>
                  <strong className="text-xs sm:text-sm font-semibold text-slate-900 block">
                    {item.title}
                  </strong>
                  <span className="text-xs text-slate-600">
                    {item.desc}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 sm:py-20 bg-slate-50/60 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200 inline-block mb-3">
              Remediation Workflow
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              {service.processTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.process.map((step, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <span className="text-2xl font-black text-blue-600/30 font-mono block mb-2">
                  {step.stepNumber}
                </span>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical SEO Benefits */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200 inline-block mb-3">
              ROI & Scalability
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              {service.benefitsTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {service.benefits.map((benefit, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm">
                <h3 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                  <span>{benefit.title}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing / Packages */}
      <section className="py-16 sm:py-20 bg-slate-50/60 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200 inline-block mb-3">
              Investment Options
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              {service.pricingTitle}
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              {service.pricingDescription}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.pricingTiers.map((tier, idx) => (
              <div
                key={idx}
                className={`p-6 sm:p-8 rounded-2xl flex flex-col justify-between ${
                  tier.isPopular
                    ? 'bg-blue-50/40 border-2 border-blue-600 shadow-lg'
                    : 'bg-white border border-slate-200 shadow-sm'
                }`}
              >
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">{tier.tierName}</h3>
                  <div className="mb-4">
                    <span className="text-2xl sm:text-3xl font-extrabold text-blue-600">{tier.price}</span>
                    <span className="text-xs text-slate-500 block">{tier.period}</span>
                  </div>
                  <ul className="space-y-2 mb-6 pt-4 border-t border-slate-200 text-xs sm:text-sm text-slate-700">
                    {tier.deliverables.map((del, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  type="button"
                  onClick={() => navigate('/contact/')}
                  className="w-full py-3 rounded-xl text-xs sm:text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white shadow-sm shadow-blue-500/20 transition-colors"
                >
                  Select Audit Sprint
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services Internal Links */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200 inline-block mb-2">
              Connected Capabilities
            </span>
            <h2 className="text-2xl font-bold text-slate-900">
              Related SEO Solutions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.relatedServices.map((rel, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">{rel.name}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">{rel.description}</p>
                </div>
                <button
                  type="button"
                  onClick={() => navigate(rel.path)}
                  className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1"
                >
                  <span>Explore {rel.name}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FAQAccordion items={service.faqs} />

      {/* Fix Your Technical SEO */}
      <section className="py-16 bg-slate-50/60 border-b border-slate-200 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4">
            Fix Your Technical SEO
          </h2>
          <p className="text-sm text-slate-600 max-w-xl mx-auto mb-8">
            Eliminate crawl traps, accelerate Core Web Vitals, and ensure Google indexes every valuable page on your domain.
          </p>
          <button
            type="button"
            onClick={() => navigate('/free-seo-audit/')}
            className="px-7 py-3.5 rounded-xl font-semibold text-sm text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-500/20 inline-flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-blue-200" />
            <span>Request Developer Technical Crawl</span>
          </button>
        </div>
      </section>

      <CTASection />
    </>
  );
};

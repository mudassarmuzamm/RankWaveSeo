import React from 'react';
import { useRouter } from '../context/RouterContext';
import { PAGES_META } from '../data/pagesMeta';
import { SEO_PACKAGES } from '../data/packagesData';
import { PACKAGES_FAQS } from '../data/faqData';
import { SEOHead } from '../components/SEOHead';
import { PageHero } from '../components/PageHero';
import { PackageComparisonTable } from '../components/PackageComparisonTable';
import { FAQAccordion } from '../components/FAQAccordion';
import { CTASection } from '../components/CTASection';
import {
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  HelpCircle,
  Layers,
  FileCheck2,
  Building,
  Globe2,
  ShoppingBag,
  Zap,
  Check,
} from 'lucide-react';

export const SeoPackagesPage: React.FC = () => {
  const { navigate } = useRouter();
  const meta = PAGES_META['/seo-packages/'];

  const standardInclusions = [
    { title: 'Google Search Console Access', desc: 'Direct integration with your Search Console for unedited, raw organic traffic and impression data.' },
    { title: '100% White-Hat Compliance', desc: 'Strict adherence to Google Search Essentials. No automated link schemes, no private blog networks.' },
    { title: 'Dedicated Search Strategist', desc: 'Direct communication with practicing SEO specialists who execute your optimizations.' },
    { title: 'Month-to-Month Retainers', desc: 'Zero long-term lock-in contracts. You retain full freedom to scale or pause as your business evolves.' },
    { title: 'Live Deliverable Tracking', desc: 'Real-time access to spreadsheets documenting completed on-page edits, metadata updates, and backlink URLs.' },
    { title: 'Structured Monthly Reporting', desc: 'Comprehensive monthly performance review covering organic clicks, keyword movements, and strategic next steps.' },
  ];

  return (
    <>
      <SEOHead meta={meta} faqs={PACKAGES_FAQS} />

      <PageHero
        badge="Deliverable-Backed Retainers"
        h1="Transparent SEO Packages for Sustainable Growth"
        subtitle="No hidden fees, no generic promises. Choose a structured monthly search marketing package designed to increase organic visibility, commercial leads, and revenue."
        primaryAction={{
          label: 'Request Custom Proposal',
          onClick: () => navigate('/contact/'),
          id: 'packages-hero-contact-cta',
        }}
        secondaryAction={{
          label: 'Get Free Website Audit',
          onClick: () => navigate('/free-seo-audit/'),
          id: 'packages-hero-audit-cta',
        }}
      />

      {/* Monthly SEO Packages Cards */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200 inline-block mb-3">
              Standard Retainers
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              Monthly SEO Packages
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Clear scope, transparent deliverables, and dedicated senior search engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {SEO_PACKAGES.map((pkg) => (
              <div
                key={pkg.id}
                className={`p-6 sm:p-8 rounded-2xl flex flex-col justify-between transition-all ${
                  pkg.popular
                    ? 'bg-blue-50/40 border-2 border-blue-600 shadow-xl relative'
                    : 'bg-white border border-slate-200 shadow-sm'
                }`}
              >
                <div>
                  {pkg.popular && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-xs font-bold uppercase tracking-wider text-white bg-blue-600 px-3.5 py-1 rounded-full shadow-md">
                      Most Popular
                    </span>
                  )}

                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-bold text-slate-900">
                      {pkg.name}
                    </h3>
                  </div>

                  <div className="mb-4">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl sm:text-4xl font-extrabold text-blue-600">
                        {pkg.startingPrice}
                      </span>
                      <span className="text-sm text-slate-500">/ month</span>
                    </div>
                    <span className="text-xs text-slate-500 block mt-1">
                      {pkg.priceNote}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 pb-6 border-b border-slate-200">
                    {pkg.tagline}
                  </p>

                  <div className="space-y-3 mb-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-800 block">
                      Core Monthly Inclusions:
                    </span>
                    {pkg.monthlyDeliverables.map((del, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-slate-200 space-y-2 text-xs text-slate-500 mb-8">
                    <div className="flex items-start justify-between gap-2">
                      <span className="shrink-0">Ideal For:</span>
                      <strong className="text-slate-800 text-right">{pkg.targetAudience}</strong>
                    </div>
                    <div className="flex items-start justify-between gap-2">
                      <span className="shrink-0">Reporting:</span>
                      <strong className="text-slate-800 text-right">{pkg.reportingCadence}</strong>
                    </div>
                    <div className="flex items-start justify-between gap-2">
                      <span className="shrink-0">Terms:</span>
                      <strong className="text-slate-800 text-right">Month-to-Month (No Lock-in)</strong>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => navigate('/contact/')}
                  className={`w-full py-3.5 rounded-xl text-sm font-semibold transition-all flex items-center justify-center gap-2 ${
                    pkg.popular
                      ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/20'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-900'
                  }`}
                >
                  <span>Select {pkg.name}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Package Comparison Table Section */}
      <section className="py-16 sm:py-20 bg-slate-50/60 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200 inline-block mb-3">
              Detailed Feature Matrix
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              Package Comparison
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Compare exact monthly deliverables, keyword capacities, and strategic inclusions side-by-side.
            </p>
          </div>

          <PackageComparisonTable />
        </div>
      </section>

      {/* What's Included in Every Package */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200 inline-block mb-3">
              Standard Baseline
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              What's Included in Every Package
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Regardless of your investment tier, every RankWave SEO client receives these non-negotiable guarantees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {standardInclusions.map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom SEO Packages */}
      <section className="py-16 sm:py-20 bg-slate-50/60 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200 inline-block mb-3">
              Specialized Scopes
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              Custom SEO Packages
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              For complex website architectures, rapid international expansion, or multi-location brands requiring custom engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <ShoppingBag className="w-6 h-6 text-blue-600 mb-3" />
              <h3 className="text-base font-bold text-slate-900 mb-2">E-Commerce Catalogs</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Faceted navigation rules, product schema, canonicalization for 10,000+ SKUs, and category hub optimization.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <Globe2 className="w-6 h-6 text-blue-600 mb-3" />
              <h3 className="text-base font-bold text-slate-900 mb-2">Multilingual & Global</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Hreflang implementation, international geotargeting, and country-specific editorial outreach campaigns.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <Building className="w-6 h-6 text-blue-600 mb-3" />
              <h3 className="text-base font-bold text-slate-900 mb-2">Multi-Location Chains</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Automated Google Business Profile synchronization and dedicated local landing pages for 10+ regional branches.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <Zap className="w-6 h-6 text-blue-600 mb-3" />
              <h3 className="text-base font-bold text-slate-900 mb-2">Enterprise Stacks</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Headless CMS / Next.js / Angular SEO audits, continuous migration support, and custom data warehouse pipelines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Package FAQs */}
      <FAQAccordion items={PACKAGES_FAQS} />

      {/* Request a Custom Quote */}
      <section className="py-16 bg-white border-b border-slate-200 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4">
            Request a Custom Quote
          </h2>
          <p className="text-sm text-slate-600 max-w-xl mx-auto mb-8">
            Tell us about your website size, platform, target market, and growth objectives. We will deliver a bespoke scope within 24 business hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => navigate('/contact/')}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-sm text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-500/20 flex items-center justify-center gap-2"
            >
              <span>Speak to an SEO Strategist</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => navigate('/free-seo-audit/')}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-sm text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200"
            >
              <span>Get Free Site Audit First</span>
            </button>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

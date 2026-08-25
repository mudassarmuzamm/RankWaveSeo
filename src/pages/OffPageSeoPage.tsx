import React from 'react';
import { useRouter } from '../context/RouterContext';
import { SERVICES_DATA } from '../data/servicesData';
import { SEOHead } from '../components/SEOHead';
import { PageHero } from '../components/PageHero';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { FAQAccordion } from '../components/FAQAccordion';
import { CTASection } from '../components/CTASection';
import {
  Share2,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldAlert,
  BarChart3,
  Globe2,
  Check,
} from 'lucide-react';

export const OffPageSeoPage: React.FC = () => {
  const { navigate } = useRouter();
  const service = SERVICES_DATA['off-page-seo'];

  return (
    <>
      <SEOHead meta={service.meta} faqs={service.faqs} />
      <Breadcrumbs />

      <PageHero
        badge={service.heroBadge}
        h1={service.h1}
        subtitle={service.shortDescription}
        primaryAction={{
          label: 'Request Backlink & Authority Audit',
          onClick: () => navigate('/free-seo-audit/'),
          id: 'offpage-hero-audit-cta',
        }}
        secondaryAction={{
          label: 'Explore SEO Packages',
          onClick: () => navigate('/seo-packages/'),
          id: 'offpage-hero-packages-cta',
        }}
      />

      {/* What Is Off-Page SEO? */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200 inline-block">
              Trust & Domain Equity
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

      {/* Our Off-Page SEO Services */}
      <section className="py-16 sm:py-20 bg-slate-50/60 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200 inline-block mb-3">
              Editorial Capabilities
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              {service.deliverablesTitle}
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Safe, high-impact outreach strategies tailored to your industry vertical and target audience.
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

      {/* Quality Over Quantity: Our Link Criteria */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200 inline-block mb-3">
                Zero-Spam Standards
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
                Quality Over Quantity: Our Link Criteria
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                A single contextual editorial link on an authoritative publication with genuine organic traffic will outperform 500 low-quality automated directory links every single time.
              </p>

              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 shadow-sm flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-xs font-bold text-slate-900 block">Real Traffic Verification</strong>
                    <span className="text-xs text-slate-600">Every referring domain must demonstrate real search impressions and organic visitors via Ahrefs / SEMrush.</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 shadow-sm flex items-start gap-3">
                  <ShieldAlert className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-xs font-bold text-slate-900 block">Strict Zero-PBN Policy</strong>
                    <span className="text-xs text-slate-600">We never purchase private blog networks, low-quality footer links, or automated Web 2.0 submissions.</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 shadow-sm flex items-start gap-3">
                  <BarChart3 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-xs font-bold text-slate-900 block">Topical Relevance First</strong>
                    <span className="text-xs text-slate-600">Links must sit inside contextually relevant articles written by subject-matter experts.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-50/40 to-slate-50 border border-blue-200/80 shadow-md">
              <h3 className="text-lg font-bold text-slate-900 mb-4">
                Our Link Outreach Criteria Checklist
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Domain Rating (DR) 30+ to 80+</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Minimum 1,000+ monthly organic search visitors</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Balanced backlink-to-outbound link ratio</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Indexed by Google with zero manual spam penalties</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Custom written, unique editorial placement copy</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* White-Hat Link Building Process */}
      <section className="py-16 sm:py-20 bg-slate-50/60 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200 inline-block mb-3">
              Outreach Methodology
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

      {/* Off-Page SEO Benefits */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200 inline-block mb-3">
              Strategic Value
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
                  Select Outreach Tier
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

      {/* Build Domain Authority Today */}
      <section className="py-16 bg-slate-50/60 border-b border-slate-200 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4">
            Build Domain Authority Today
          </h2>
          <p className="text-sm text-slate-600 max-w-xl mx-auto mb-8">
            Request an audit of your existing backlink profile, anchor text diversity, and competitor link gaps.
          </p>
          <button
            type="button"
            onClick={() => navigate('/free-seo-audit/')}
            className="px-7 py-3.5 rounded-xl font-semibold text-sm text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-500/20 inline-flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-blue-200" />
            <span>Request Your Free Backlink Audit</span>
          </button>
        </div>
      </section>

      <CTASection />
    </>
  );
};

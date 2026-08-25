import React from 'react';
import { useRouter } from '../context/RouterContext';
import { PAGES_META } from '../data/pagesMeta';
import { CASE_STUDIES } from '../data/caseStudiesData';
import { SEOHead } from '../components/SEOHead';
import { PageHero } from '../components/PageHero';
import { CaseStudyCard } from '../components/CaseStudyCard';
import { FAQAccordion } from '../components/FAQAccordion';
import { CTASection } from '../components/CTASection';
import {
  TrendingUp,
  BarChart3,
  Search,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Target,
  FileCheck2,
  LineChart,
} from 'lucide-react';

export const CaseStudiesPage: React.FC = () => {
  const { navigate } = useRouter();
  const meta = PAGES_META['/case-studies/'];

  const caseStudyFaqs = [
    {
      id: 'cs-faq-1',
      question: 'How do you verify the accuracy of the SEO results shown in these case studies?',
      answer: 'All metrics shown are verified directly through first-party data tools, predominantly Google Search Console (clicks, impressions, average position) and Google Analytics 4 (conversions, session duration). We never use fabricated percentages or unverified third-party estimates.',
    },
    {
      id: 'cs-faq-2',
      question: 'Why are some client names anonymized as industry descriptions?',
      answer: 'Many of our enterprise and B2B clients operate in highly competitive commercial markets and maintain strict non-disclosure agreements (NDAs) to protect their proprietary keyword and revenue strategies from aggressive competitors.',
    },
    {
      id: 'cs-faq-3',
      question: 'How long does it typically take to see measurable SEO results for my website?',
      answer: 'Most websites begin seeing initial crawl and impression improvements within 4 to 8 weeks following technical and on-page remediation. Significant commercial rankings and revenue-generating organic conversions typically compound between months 3 and 6.',
    },
  ];

  return (
    <>
      <SEOHead meta={meta} faqs={caseStudyFaqs} />

      <PageHero
        badge="Evidence-Based Methodology"
        h1="SEO Case Studies: Real Growth Through Data-Driven Search Strategy"
        subtitle="Explore detailed breakdowns of how our technical optimizations, search intent alignment, and editorial authority building generated measurable organic growth across diverse industries."
        primaryAction={{
          label: 'Request Free Website Audit',
          onClick: () => navigate('/free-seo-audit/'),
          id: 'case-studies-hero-audit-cta',
        }}
        secondaryAction={{
          label: 'View SEO Packages',
          onClick: () => navigate('/seo-packages/'),
          id: 'case-studies-hero-packages-cta',
        }}
      />

      {/* Results Narrative */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200 inline-block">
              Analytical Discipline
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Our Results Speak Through Data, Not Speculation
            </h2>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
              Sustainable search engine optimization is not accidental. It is the predictable outcome of meticulous technical hygiene, thorough search intent coverage, and high-integrity editorial authority.
            </p>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Below are real client case studies detailing the specific baseline challenges, tactical multi-phase roadmaps, verified Search Console outcomes, and methodological takeaways.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Detailed Cards */}
      <section className="py-16 sm:py-20 bg-slate-50/60 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            {CASE_STUDIES.map((cs) => (
              <CaseStudyCard key={cs.id} caseStudy={cs} />
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach to Measuring SEO Success */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200 inline-block mb-3">
              Performance Verification
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              Our Approach to Measuring SEO Success
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              We hold ourselves accountable to business metrics that directly impact your bottom line.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm">
              <Search className="w-6 h-6 text-blue-600 mb-3" />
              <h3 className="text-base font-bold text-slate-900 mb-2">Search Console Clicks</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Raw, unedited organic visitors arriving on commercial landing pages directly from Google search results.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm">
              <Target className="w-6 h-6 text-blue-600 mb-3" />
              <h3 className="text-base font-bold text-slate-900 mb-2">Qualified Inquiries</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Lead form submissions, demo bookings, phone calls, and e-commerce transactions generated by organic traffic.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm">
              <LineChart className="w-6 h-6 text-blue-600 mb-3" />
              <h3 className="text-base font-bold text-slate-900 mb-2">Commercial Keyword Rank</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Progress tracking across transactional and commercial-investigation keyword clusters with actual buying intent.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm">
              <BarChart3 className="w-6 h-6 text-blue-600 mb-3" />
              <h3 className="text-base font-bold text-slate-900 mb-2">Core Web Vitals Pass</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Empirical site speed scores ensuring 100% compliance with Google's mobile user experience criteria.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study FAQs */}
      <FAQAccordion items={caseStudyFaqs} />

      {/* Ready for Similar Results? */}
      <section className="py-16 bg-white border-b border-slate-200 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4">
            Ready for Similar Results?
          </h2>
          <p className="text-sm text-slate-600 max-w-xl mx-auto mb-8">
            Request an audit to see how our engineering-first SEO strategy can help your website outrank established competitors.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => navigate('/free-seo-audit/')}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-sm text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-500/20 flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Get Your Free SEO Audit</span>
            </button>
            <button
              type="button"
              onClick={() => navigate('/contact/')}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-sm text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200"
            >
              <span>Schedule Strategy Call</span>
            </button>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

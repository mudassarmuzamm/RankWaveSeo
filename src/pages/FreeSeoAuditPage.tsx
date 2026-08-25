import React from 'react';
import { useRouter } from '../context/RouterContext';
import { PAGES_META } from '../data/pagesMeta';
import { AUDIT_FAQS } from '../data/faqData';
import { SEOHead } from '../components/SEOHead';
import { PageHero } from '../components/PageHero';
import { InteractiveAuditRunner } from '../components/InteractiveAuditRunner';
import { FAQAccordion } from '../components/FAQAccordion';
import { CTASection } from '../components/CTASection';
import {
  FileCode2,
  Cpu,
  Share2,
  MapPin,
  Smartphone,
  Search,
  CheckCircle2,
  Clock,
  Sparkles,
  FileCheck2,
  ShieldCheck,
} from 'lucide-react';

export const FreeSeoAuditPage: React.FC = () => {
  const { navigate } = useRouter();
  const meta = PAGES_META['/free-seo-audit/'];

  const auditCovers = [
    {
      icon: Cpu,
      title: 'Technical Crawl & Index Health',
      desc: 'Inspection of robots.txt directives, XML sitemaps, index coverage errors, HTTP status codes, and crawl traps.',
    },
    {
      icon: FileCode2,
      title: 'On-Page Search Intent & Structure',
      desc: 'Evaluation of single H1 usage, heading nesting, title tag lengths, meta descriptions, and image alt attributes.',
    },
    {
      icon: Search,
      title: 'Content & Keyword Opportunity Gaps',
      desc: 'Topical keyword mapping, semantic depth analysis, and competitor content gap identification.',
    },
    {
      icon: Share2,
      title: 'Backlink Quality & Domain Equity',
      desc: 'Referring domain authority, anchor text distribution, toxic link signals, and unlinked mention opportunities.',
    },
    {
      icon: MapPin,
      title: 'Local SEO & Google Business Profile',
      desc: 'Local 3-Pack rank potential, NAP consistency across citations, and Google Maps category optimization.',
    },
    {
      icon: Smartphone,
      title: 'Core Web Vitals & Mobile UX',
      desc: 'Largest Contentful Paint (LCP), Interaction to Next Paint (INP), Cumulative Layout Shift (CLS), and mobile responsiveness.',
    },
  ];

  const deliverablesReceived = [
    {
      title: 'Comprehensive Strategy Report',
      desc: 'A detailed manual document outlining exact diagnostic findings with actionable code and copy recommendations.',
    },
    {
      title: 'Prioritized Impact Roadmap',
      desc: 'A clear high-to-low priority matrix ranking issues by organic revenue impact and technical complexity.',
    },
    {
      title: 'Competitor Keyword Comparison',
      desc: 'A side-by-side gap matrix revealing high-intent commercial terms your competitors rank for that you are missing.',
    },
    {
      title: 'Optional 30-Minute Strategy Sync',
      desc: 'A direct 1-on-1 consultation with a senior search strategist to answer questions with zero sales pressure.',
    },
  ];

  return (
    <>
      <SEOHead meta={meta} faqs={AUDIT_FAQS} />

      <PageHero
        badge="Zero-Risk Diagnostic"
        h1="Get a Free SEO Audit: Discover What's Holding Your Site Back"
        subtitle="Stop guessing why competitors outrank you. Get a thorough, developer-tested analysis of your technical foundation, on-page intent, and organic search opportunities."
      />

      {/* Interactive Audit Tool Section */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <InteractiveAuditRunner />
        </div>
      </section>

      {/* What Our Free Audit Covers */}
      <section className="py-16 sm:py-20 bg-slate-50/60 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200 inline-block mb-3">
              Diagnostic Scope
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              What Our Free SEO Audit Covers
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Unlike generic automated checkers that spit out superficial reports, our audit examines the core pillars governing Google rankings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {auditCovers.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What You'll Receive */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200 inline-block mb-3">
              Deliverables
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              What You Will Receive
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Delivered straight to your inbox within 24 business hours.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {deliverablesReceived.map((del, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
                <div>
                  <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 font-bold text-xs flex items-center justify-center mb-3 border border-blue-200">
                    0{idx + 1}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">{del.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{del.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audit FAQs */}
      <FAQAccordion items={AUDIT_FAQS} />

      <CTASection
        title="Ready to Unlock Your Website's Search Potential?"
        subtitle="Speak directly with our strategy team or request your free manual diagnostic report today."
      />
    </>
  );
};

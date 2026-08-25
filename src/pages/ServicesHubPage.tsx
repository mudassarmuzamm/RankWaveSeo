import React from 'react';
import { useRouter } from '../context/RouterContext';
import { PAGES_META } from '../data/pagesMeta';
import { SERVICES_DATA } from '../data/servicesData';
import { SEOHead } from '../components/SEOHead';
import { PageHero } from '../components/PageHero';
import { ServiceCard } from '../components/ServiceCard';
import { FAQAccordion } from '../components/FAQAccordion';
import { CTASection } from '../components/CTASection';
import {
  FileCode2,
  Share2,
  Cpu,
  MapPin,
  Layers,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  HelpCircle,
  ShieldCheck,
} from 'lucide-react';

export const ServicesHubPage: React.FC = () => {
  const { navigate } = useRouter();
  const meta = PAGES_META['/services/'];

  const servicesFaqs = [
    {
      id: 'svc-hub-1',
      question: 'Can I engage RankWave for a single specific SEO service (e.g., Technical SEO only)?',
      answer: 'Yes. We offer both modular single-service project sprints (such as a standalone Technical SEO Audit or On-Page Optimization Sprint) as well as integrated multi-channel monthly retainers that combine all four services.',
    },
    {
      id: 'svc-hub-2',
      question: 'How do you determine which SEO services my website needs first?',
      answer: 'We begin with a comprehensive diagnostic audit of your domain. We assess whether technical indexation issues are blocking search bots, whether existing content lacks intent alignment, or whether domain authority gaps are preventing rankings against competitors.',
    },
    {
      id: 'svc-hub-3',
      question: 'Do your SEO services include direct code and content implementation?',
      answer: 'Yes. For supported CMS platforms (WordPress, Shopify, Webflow) and standard codebases, we can implement optimizations directly. For proprietary software or enterprise stacks, we provide comprehensive developer specifications with exact code snippets.',
    },
  ];

  return (
    <>
      <SEOHead meta={meta} faqs={servicesFaqs} />

      <PageHero
        badge="Full-Spectrum Search Capabilities"
        h1="SEO Services Built Around Your Business Goals"
        subtitle="Turn search intent into compounding organic revenue. Explore our dedicated On-Page, Off-Page, Technical, and Local SEO solutions designed to scale your search engine presence."
        primaryAction={{
          label: 'Request Free Website Audit',
          onClick: () => navigate('/free-seo-audit/'),
          id: 'services-hub-audit-cta',
        }}
        secondaryAction={{
          label: 'View SEO Packages',
          onClick: () => navigate('/seo-packages/'),
          id: 'services-hub-packages-cta',
        }}
      />

      {/* Services Grid */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ServiceCard
              name="On-Page SEO Services"
              path="/services/on-page-seo/"
              icon={FileCode2}
              badge="Search Intent & Content"
              description="Make every strategic page work harder. We optimize headings, metadata, content depth, internal link siloing, and search intent alignment."
              benefits={[
                'Topical keyword mapping & search intent classification',
                'Title tag, meta description, and single H1 restructuring',
                'Internal link architecture and orphan page resolution',
                'Content gap analysis against top SERP competitors',
              ]}
              ctaLabel="View On-Page SEO Details"
            />

            <ServiceCard
              name="Off-Page SEO Services"
              path="/services/off-page-seo/"
              icon={Share2}
              badge="Domain Authority & PR"
              description="Build enduring search authority through white-hat editorial outreach, digital PR, brand mentions, and niche citations. Zero PBNs."
              benefits={[
                'Vetted contextual editorial backlinks on real-traffic sites',
                'Digital PR outreach and industry thought leadership',
                'Unlinked brand mention reclamation',
                'Complete monthly placement transparency with live URLs',
              ]}
              ctaLabel="View Off-Page SEO Details"
            />

            <ServiceCard
              name="Technical SEO Services"
              path="/services/technical-seo/"
              icon={Cpu}
              badge="Crawl & Performance"
              description="Keep your website search-ready. We audit crawlability, resolve indexation errors, optimize Core Web Vitals, and deploy rich JSON-LD schema."
              benefits={[
                'Crawl budget optimization & robots.txt / sitemap tuning',
                'Core Web Vitals speed acceleration (LCP, INP, CLS)',
                'Canonical tag & 301 redirect chain resolution',
                'Structured data deployment (Organization, Service, FAQ)',
              ]}
              ctaLabel="View Technical SEO Details"
            />

            <ServiceCard
              name="Local SEO Services"
              path="/services/local-seo/"
              icon={MapPin}
              badge="Local 3-Pack & Maps"
              description="Dominate local search in your city and service areas. Full Google Business Profile optimization, local citations, and geo-targeted landing pages."
              benefits={[
                'Google Business Profile setup, category optimization & posts',
                'Strict NAP consistency across authoritative local directories',
                'Geo-targeted location landing pages with LocalBusiness schema',
                'Systematic customer review collection & reputation workflows',
              ]}
              ctaLabel="View Local SEO Details"
            />
          </div>
        </div>
      </section>

      {/* How Our SEO Services Work Together */}
      <section className="py-16 sm:py-20 bg-slate-50/60 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200 inline-block mb-3">
              Holistic Synergy
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              How Our SEO Services Work Together
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Search engine algorithms evaluate hundreds of interconnected signals. Maximum ranking velocity occurs when all four pillars function in complete harmony.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm relative">
              <span className="text-2xl font-black text-blue-600/20 font-mono block mb-2">01</span>
              <h3 className="text-base font-bold text-slate-900 mb-2">Technical Health</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Opens the door so search crawlers can discover, render, and index your website without errors.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm relative">
              <span className="text-2xl font-black text-blue-600/20 font-mono block mb-2">02</span>
              <h3 className="text-base font-bold text-slate-900 mb-2">On-Page Relevance</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Demonstrates that your content is the most authoritative, complete answer to the search query.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm relative">
              <span className="text-2xl font-black text-blue-600/20 font-mono block mb-2">03</span>
              <h3 className="text-base font-bold text-slate-900 mb-2">Off-Page Trust</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Validates your website credibility through third-party citations, editorial backlinks, and media mentions.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm relative">
              <span className="text-2xl font-black text-blue-600/20 font-mono block mb-2">04</span>
              <h3 className="text-base font-bold text-slate-900 mb-2">Local Dominance</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Captures high-intent nearby customers actively searching for immediate services in your geographic market.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Which SEO Service Does Your Business Need? */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200 inline-block mb-3">
              Diagnostic Guidance
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              Which SEO Service Does Your Business Need?
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Match your current operational bottleneck to the most effective search optimization service.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm">
              <h3 className="text-sm font-bold text-slate-900 mb-2">
                If pages are not getting indexed or site speed is slow:
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-4">
                You need <strong className="text-slate-900">Technical SEO</strong> to eliminate crawl traps, fix canonical tags, accelerate Core Web Vitals, and resolve server response lag.
              </p>
              <button
                type="button"
                onClick={() => navigate('/services/technical-seo/')}
                className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1"
              >
                Learn about Technical SEO <ArrowRight className="w-3 h-3" />
              </button>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm">
              <h3 className="text-sm font-bold text-slate-900 mb-2">
                If you have rankings stuck on Page 2 or 3:
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-4">
                You need <strong className="text-slate-900">On-Page SEO</strong> to restructure headings, satisfy exact search intent, add semantic entities, and optimize title tags.
              </p>
              <button
                type="button"
                onClick={() => navigate('/services/on-page-seo/')}
                className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1"
              >
                Learn about On-Page SEO <ArrowRight className="w-3 h-3" />
              </button>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm">
              <h3 className="text-sm font-bold text-slate-900 mb-2">
                If high-authority competitors dominate top keywords:
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-4">
                You need <strong className="text-slate-900">Off-Page SEO</strong> to earn high-trust editorial backlinks, digital PR mentions, and establish competitive domain equity.
              </p>
              <button
                type="button"
                onClick={() => navigate('/services/off-page-seo/')}
                className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1"
              >
                Learn about Off-Page SEO <ArrowRight className="w-3 h-3" />
              </button>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm">
              <h3 className="text-sm font-bold text-slate-900 mb-2">
                If you serve customers in a specific city or region:
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-4">
                You need <strong className="text-slate-900">Local SEO</strong> to rank in Google Maps 3-Pack, optimize your Google Business Profile, and capture direct local inquiries.
              </p>
              <button
                type="button"
                onClick={() => navigate('/services/local-seo/')}
                className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1"
              >
                Learn about Local SEO <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Hub FAQs */}
      <FAQAccordion items={servicesFaqs} />

      <CTASection />
    </>
  );
};

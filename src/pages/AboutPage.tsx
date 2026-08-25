import React from 'react';
import { useRouter } from '../context/RouterContext';
import { PAGES_META } from '../data/pagesMeta';
import { ABOUT_FAQS } from '../data/faqData';
import { SEOHead } from '../components/SEOHead';
import { PageHero } from '../components/PageHero';
import { FAQAccordion } from '../components/FAQAccordion';
import { CTASection } from '../components/CTASection';
import {
  ShieldCheck,
  Target,
  Cpu,
  Layers,
  CheckCircle2,
  Users,
  Compass,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Award,
  Eye,
  FileCheck,
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { navigate } = useRouter();
  const meta = PAGES_META['/about/'];

  return (
    <>
      <SEOHead meta={meta} faqs={ABOUT_FAQS} />

      <PageHero
        badge="About RankWave SEO"
        h1="About RankWave SEO"
        subtitle="We are a search engine optimization agency in Pakistan dedicated to transparent, data-driven organic growth. We bridge the gap between technical web engineering, topical content relevance, and ethical domain authority."
        primaryAction={{
          label: 'Request a Free SEO Audit',
          onClick: () => navigate('/free-seo-audit/'),
          id: 'about-hero-audit-cta',
        }}
        secondaryAction={{
          label: 'Explore Our Services',
          onClick: () => navigate('/services/'),
          id: 'about-hero-services-cta',
        }}
      />

      {/* Who We Are */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200 inline-block">
                Agency Background
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Who We Are
              </h2>
              <p className="text-base text-slate-700 leading-relaxed">
                RankWave SEO was founded on a simple conviction: modern search engine optimization is an engineering discipline, not a collection of marketing buzzwords or automated shortcut tricks.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Based in Pakistan and serving local, regional, and international organizations, our focus is building resilient digital assets that earn organic search trust. We partner with ambitious businesses across B2B, e-commerce, healthcare, and technology to convert search engine visibility into predictable commercial growth.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row gap-4 text-xs font-medium text-slate-700">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3 shadow-sm">
                  <div className="p-2 rounded-lg bg-blue-50 text-blue-600 border border-blue-100">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <span>100% Policy-Compliant White-Hat SEO</span>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3 shadow-sm">
                  <div className="p-2 rounded-lg bg-blue-50 text-blue-600 border border-blue-100">
                    <Eye className="w-5 h-5" />
                  </div>
                  <span>Zero-Hidden Retainer Transparency</span>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-50/40 to-slate-50 border border-blue-200/80 shadow-md space-y-6">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <Target className="w-5 h-5 text-blue-600" />
                <span>Our Core Operating Commitments</span>
              </h3>
              <ul className="space-y-3.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>No Unrealistic Guarantees:</strong> We never promise overnight #1 positions, because search algorithms evaluate hundreds of dynamic factors. We guarantee rigorous execution and clear accountability.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>No Private Blog Networks (PBNs):</strong> We never jeopardize client domains by purchasing shady automated links or private networks that lead to manual penalties.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>Full Data Ownership:</strong> You retain complete, unrestricted access to all your analytics accounts, Search Console properties, content assets, and documentation.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our SEO Philosophy */}
      <section className="py-16 sm:py-20 bg-slate-50/60 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200 inline-block mb-3">
              Core Principles
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              Our SEO Philosophy
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Google’s core objective is to deliver the most helpful, reliable, and fast-loading answer to the searcher. We align every optimization effort directly with that fundamental principle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block mb-2 font-mono">
                Pillar 01
              </span>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Technical Foundation
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                If search engines cannot crawl, render, and index your code cleanly, even world-class content will remain invisible. Technical health is the prerequisite of all search success.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block mb-2 font-mono">
                Pillar 02
              </span>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Search Intent Relevance
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Keywords are clues to human needs. We structure pages to fulfill the specific informational or transactional intent behind every search query with unparalleled depth and clarity.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block mb-2 font-mono">
                Pillar 03
              </span>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Editorial Authority & Trust
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Trust is earned through legitimate industry relationships, digital PR mentions, and authentic brand citations that strengthen domain equity sustainably.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Approach Search Marketing */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200 inline-block mb-3">
              Strategic Methodology
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              How We Approach Search Marketing
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              We treat SEO as a continuous feedback loop between website architecture, content performance, and search engine algorithm evolutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm">
              <h3 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
                <FileCheck className="w-5 h-5 text-blue-600" />
                <span>Single-Intent URL Architecture</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We eliminate keyword cannibalization by ensuring each commercial keyword cluster has one clear, definitive canonical URL mapped to it with a single H1 and clean heading hierarchy.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm">
              <h3 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
                <Cpu className="w-5 h-5 text-blue-600" />
                <span>Developer-Grade Implementation</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Instead of delivering theoretical PDF slide decks, we supply structured code snippets, JSON-LD schemas, htaccess directives, and direct CMS optimization to get changes live quickly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 sm:py-20 bg-slate-50/60 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200 inline-block mb-3">
              Workflow
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              Our Process
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              From day one discovery through monthly sprint execution, we follow a transparent sprint cadence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-5 rounded-xl bg-white border border-slate-200 text-center shadow-sm">
              <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 font-bold text-xs flex items-center justify-center mx-auto mb-3 border border-blue-200">
                1
              </div>
              <h3 className="text-sm font-bold text-slate-900 mb-1">Diagnostic Audit</h3>
              <p className="text-xs text-slate-600">Baseline analysis of index logs, keywords, and technical health.</p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-slate-200 text-center shadow-sm">
              <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 font-bold text-xs flex items-center justify-center mx-auto mb-3 border border-blue-200">
                2
              </div>
              <h3 className="text-sm font-bold text-slate-900 mb-1">Strategy Blueprint</h3>
              <p className="text-xs text-slate-600">Keyword-to-URL mapping, competitor gap matrix, and technical sprint plan.</p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-slate-200 text-center shadow-sm">
              <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 font-bold text-xs flex items-center justify-center mx-auto mb-3 border border-blue-200">
                3
              </div>
              <h3 className="text-sm font-bold text-slate-900 mb-1">Sprint Execution</h3>
              <p className="text-xs text-slate-600">On-page content optimization, schema deployment, and editorial outreach.</p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-slate-200 text-center shadow-sm">
              <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 font-bold text-xs flex items-center justify-center mx-auto mb-3 border border-blue-200">
                4
              </div>
              <h3 className="text-sm font-bold text-slate-900 mb-1">Measurement & Scaling</h3>
              <p className="text-xs text-slate-600">Search Console tracking, rank movements, and ongoing sprint refinement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Clients Work With Us */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200 inline-block mb-3">
              Value Proposition
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              Why Clients Work With Us
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              We operate as a transparent extension of your team, providing actionable clarity instead of smoke and mirrors.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm">
              <h3 className="text-base font-bold text-slate-900 mb-2">Real Search Console Data</h3>
              <p className="text-xs sm:text-sm text-slate-600">Unfiltered reporting directly from Google Search Console, tracking real clicks, impressions, and positions.</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm">
              <h3 className="text-base font-bold text-slate-900 mb-2">Month-to-Month Flexibility</h3>
              <p className="text-xs sm:text-sm text-slate-600">No multi-year lock-in agreements. We earn your partnership through month-over-month performance.</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm">
              <h3 className="text-base font-bold text-slate-900 mb-2">Direct Strategist Access</h3>
              <p className="text-xs sm:text-sm text-slate-600">Collaborate directly with senior search specialists who perform the actual analysis and implementation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team & Values */}
      <section className="py-16 sm:py-20 bg-slate-50/60 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200 inline-block mb-3">
                Team Structure
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
                Our Team
              </h2>
              <p className="text-sm text-slate-700 leading-relaxed mb-4">
                RankWave brings together technical search architects, content strategists, and digital PR specialists working in close coordination.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                Our multidisciplinary structure ensures that every website receives dedicated attention across frontend performance, semantic intent research, and safe authority acquisition.
              </p>
              <div className="p-4 rounded-xl bg-white border border-slate-200 text-xs text-slate-600 shadow-sm">
                <strong className="text-slate-900 block mb-1">Our Practice Disciplines:</strong>
                <span>Technical SEO Engineering • Content & Search Intent Strategy • Local Pack & Citation Management • Digital PR & Editorial Outreach</span>
              </div>
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200 inline-block mb-3">
                Ethical Core
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
                Our Values
              </h2>
              <ul className="space-y-4 text-xs sm:text-sm text-slate-700">
                <li className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <strong className="text-slate-900 block font-semibold mb-1">Integrity in Methodology</strong>
                  <span className="text-slate-600">We never compromise a client's long-term domain equity for short-term vanity metrics.</span>
                </li>
                <li className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <strong className="text-slate-900 block font-semibold mb-1">Clarity Over Jargon</strong>
                  <span className="text-slate-600">We explain search engineering in straightforward business terms focused on commercial outcomes.</span>
                </li>
                <li className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <strong className="text-slate-900 block font-semibold mb-1">Scientific Continuous Learning</strong>
                  <span className="text-slate-600">We continuously test, audit, and refine our methods in response to confirmed search engine ranking systems.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About FAQs */}
      <FAQAccordion items={ABOUT_FAQS} />

      {/* Start Your SEO Journey */}
      <section className="py-16 bg-white border-b border-slate-200 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4">
            Start Your SEO Journey
          </h2>
          <p className="text-sm text-slate-600 max-w-xl mx-auto mb-8">
            Let’s review your website together and identify the exact technical and content opportunities holding back your organic search traffic.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => navigate('/free-seo-audit/')}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-500/20 flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-blue-200" />
              <span>Get Free Website Audit</span>
            </button>
            <button
              type="button"
              onClick={() => navigate('/contact/')}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 hover:text-blue-600 shadow-sm"
            >
              <span>Schedule Initial Consultation</span>
            </button>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

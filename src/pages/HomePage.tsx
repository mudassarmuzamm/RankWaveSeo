import React from 'react';
import { useRouter } from '../context/RouterContext';
import { PAGES_META } from '../data/pagesMeta';
import { SERVICES_DATA } from '../data/servicesData';
import { SEO_PACKAGES } from '../data/packagesData';
import { CASE_STUDIES } from '../data/caseStudiesData';
import { GENERAL_FAQS } from '../data/faqData';
import { SEOHead } from '../components/SEOHead';
import { ServiceCard } from '../components/ServiceCard';
import { CaseStudyCard } from '../components/CaseStudyCard';
import { FAQAccordion } from '../components/FAQAccordion';
import { CTASection } from '../components/CTASection';
import { HeroMeetingCalendar } from '../components/HeroMeetingCalendar';
import {
  FileCode2,
  Share2,
  Cpu,
  MapPin,
  TrendingUp,
  ShieldCheck,
  BarChart3,
  Terminal,
  Compass,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Building2,
  ShoppingCart,
  Stethoscope,
  Briefcase,
  Layers,
  Search,
  Video,
  Calendar,
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const { navigate } = useRouter();
  const meta = PAGES_META['/'];

  const serviceIconMap = {
    'on-page-seo': FileCode2,
    'off-page-seo': Share2,
    'technical-seo': Cpu,
    'local-seo': MapPin,
  };

  const processSteps = [
    {
      step: '01',
      title: 'SEO Discovery & Commercial Mapping',
      desc: 'We analyze your target market, buyer personas, commercial search intent, and revenue goals.',
    },
    {
      step: '02',
      title: 'In-Depth Technical & Content Audit',
      desc: 'We inspect crawl logs, Core Web Vitals, index directives, and competitor content gaps.',
    },
    {
      step: '03',
      title: 'Topical Keyword Strategy',
      desc: 'We map distinct search intent clusters to dedicated canonical URLs to eliminate keyword cannibalization.',
    },
    {
      step: '04',
      title: 'On-Page & Technical Optimization',
      desc: 'We implement structured heading hierarchies, schema markup, Core Web Vitals speed tuning, and internal link silos.',
    },
    {
      step: '05',
      title: 'Ethical Authority & PR Building',
      desc: 'We secure high-relevance editorial mentions and niche citations through personalized outreach.',
    },
    {
      step: '06',
      title: 'Continuous Monitoring & Reporting',
      desc: 'We track keyword positions, search impressions, and organic conversions directly via Google Search Console.',
    },
  ];

  const industries = [
    {
      icon: Briefcase,
      title: 'B2B & Professional Services',
      desc: 'Lead-generation strategies capturing high-value corporate decision makers researching solutions.',
    },
    {
      icon: ShoppingCart,
      title: 'E-Commerce & Retail Brands',
      desc: 'Category architecture, product schema, and faceted navigation optimization for commercial transactions.',
    },
    {
      icon: Stethoscope,
      title: 'Healthcare & Medical Clinics',
      desc: 'Local 3-Pack domination, practitioner reputation management, and geo-targeted service area rankings.',
    },
    {
      icon: Terminal,
      title: 'SaaS & Technology Platforms',
      desc: 'Feature comparison hubs, technical documentation optimization, and bottom-of-funnel conversion pillars.',
    },
    {
      icon: Building2,
      title: 'Real Estate & Property Agencies',
      desc: 'District and localized property search targeting, Google Business Profiles, and neighborhood landing pages.',
    },
    {
      icon: Layers,
      title: 'Industrial & Manufacturing',
      desc: 'Niche product specification keyword mapping, supplier directory citations, and international reach.',
    },
  ];

  return (
    <>
      <SEOHead meta={meta} faqs={GENERAL_FAQS} />

      {/* Hero Section */}
      <section className="relative pt-10 pb-16 sm:pt-14 sm:pb-20 overflow-hidden bg-gradient-to-b from-blue-50/50 via-slate-50 to-slate-50 border-b border-slate-200">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-blue-500/10 blur-[130px] pointer-events-none -z-10 rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Left Content Column */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200 mb-5 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                <span>Data-Driven Organic Growth</span>
              </div>

              {/* STRICTLY SINGLE H1 FOR HOMEPAGE */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15] mb-5">
                SEO Agency in Pakistan That Helps Your Business Grow
              </h1>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-7 max-w-2xl">
                RankWave SEO engineers search visibility from the ground up. We combine technical rigor, search intent mapping, and white-hat authority building to capture high-intent customers and drive compounding revenue.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-8">
                <button
                  type="button"
                  id="home-primary-audit-cta"
                  onClick={() => navigate('/free-seo-audit/')}
                  className="px-6 py-3.5 rounded-xl font-semibold text-xs sm:text-sm text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-500/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-blue-200" />
                  <span>Get a Free SEO Audit</span>
                </button>

                <button
                  type="button"
                  id="home-secondary-services-cta"
                  onClick={() => navigate('/services/')}
                  className="px-6 py-3.5 rounded-xl font-semibold text-xs sm:text-sm text-slate-700 bg-white border border-slate-300 hover:border-blue-400 hover:text-blue-600 hover:bg-slate-50 active:scale-[0.98] shadow-sm transition-all flex items-center justify-center gap-2"
                >
                  <span>Explore SEO Services</span>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </button>
              </div>

              {/* Google Meet Direct Banner Link */}
              <div className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-100 flex items-center justify-between gap-3 text-xs mb-8">
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded-lg bg-blue-600 text-white shrink-0">
                    <Video className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block">Instant Google Meet Strategy Call</span>
                    <span className="text-slate-500 text-[11px]">Free 30-min discovery session with our Lead SEO Strategist</span>
                  </div>
                </div>
                <a
                  href="https://meet.google.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs shrink-0 flex items-center gap-1 shadow-sm transition-all"
                >
                  <span>Meet Now</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>

              {/* Value Indicators */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 pt-6 border-t border-slate-200 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>100% White-Hat Standards</span>
                </div>
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Search Console Reporting</span>
                </div>
                <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Month-to-Month Flexibility</span>
                </div>
              </div>
            </div>

            {/* Right Interactive Calendar Widget */}
            <div className="lg:col-span-5 w-full">
              <HeroMeetingCalendar id="hero-meeting-scheduler" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 bg-slate-50/50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200 inline-block mb-3">
              Core Capabilities
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              SEO Services That Build Sustainable Growth
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Every search channel requires specialized execution. We deliver tailored strategies across technical infrastructure, on-page relevance, editorial authority, and localized visibility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <ServiceCard
              name="On-Page SEO"
              path="/services/on-page-seo/"
              icon={FileCode2}
              badge="Search Intent"
              description="Align your headings, metadata, content depth, and internal links to ensure search engines rank every strategic page for commercial queries."
              benefits={[
                'Keyword research & semantic intent mapping',
                'Single H1 and clear heading hierarchies',
                'Contextual internal linking siloing',
                'Elimination of keyword cannibalization',
              ]}
              ctaLabel="Explore On-Page SEO"
            />

            <ServiceCard
              name="Off-Page SEO"
              path="/services/off-page-seo/"
              icon={Share2}
              badge="Domain Authority"
              description="Earn authentic editorial mentions, niche-relevant backlinks, and digital PR placements that strengthen domain trust without risky link schemes."
              benefits={[
                'Vetted, high-quality editorial guest placements',
                'Strict zero-PBN, white-hat outreach policy',
                'Unlinked brand mention reclamation',
                'Transparent live URL placement reports',
              ]}
              ctaLabel="Explore Off-Page SEO"
            />

            <ServiceCard
              name="Technical SEO"
              path="/services/technical-seo/"
              icon={Cpu}
              badge="Crawl & Performance"
              description="Ensure search bots crawl, render, and index your website flawlessly. Fix crawl traps, Core Web Vitals, schema markup, and redirect chains."
              benefits={[
                'Crawl budget & index coverage optimization',
                'Core Web Vitals speed diagnostics (LCP, INP, CLS)',
                'Structured JSON-LD schema implementation',
                'Direct code & CMS implementation support',
              ]}
              ctaLabel="Explore Technical SEO"
            />

            <ServiceCard
              name="Local SEO & Google Business"
              path="/services/local-seo/"
              icon={MapPin}
              badge="Local 3-Pack"
              description="Dominate local search in your target city or service area. Optimize Google Business Profiles, build consistent citations, and capture ready-to-buy local leads."
              benefits={[
                'Google Business Profile complete setup & posts',
                'Rigorous NAP consistency across business directories',
                'Geo-targeted location landing pages & schema',
                'Ethical customer review collection systems',
              ]}
              ctaLabel="Explore Local SEO"
            />
          </div>
        </div>
      </section>

      {/* Why Businesses Choose RankWave */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200 inline-block mb-3">
              Strategic Advantage
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              Why Businesses Choose RankWave
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              We reject short-term tricks and empty keyword guarantees. We operate as your dedicated search engineering team, focused on compounding value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-300 transition-all shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 mb-4">
                <BarChart3 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Data-Driven SEO
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Every optimization decision is grounded in real Google Search Console metrics, searcher intent analysis, and competitive gap discovery.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-300 transition-all shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                White-Hat Strategies
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We strictly adhere to Google Search Essentials and Webmaster guidelines. Zero private blog networks (PBNs), zero spam, zero algorithmic penalty risks.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-300 transition-all shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 mb-4">
                <Terminal className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Technical Expertise
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We understand JavaScript rendering, Core Web Vitals, server response times, and schema architectures, enabling developer-level fixes.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-300 transition-all shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 mb-4">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Transparent Reporting
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                No vanity metrics or confusing dashboards. You receive direct access to completed deliverables, exact backlink URLs, and unedited search impressions.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-300 transition-all shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 mb-4">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Local Search Expertise
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Deep expertise in regional and city-level search landscapes in Pakistan (Lahore, Karachi, Islamabad) and international geo-targeted markets.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-300 transition-all flex flex-col justify-between shadow-sm">
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 mb-4">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  No Long-Term Contracts
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  We earn your business month-to-month through proven deliverables, accountability, and demonstrable search progress.
                </p>
              </div>
              <button
                type="button"
                onClick={() => navigate('/about/')}
                className="text-xs text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-1 mt-4 pt-2 border-t border-slate-200"
              >
                Learn more about our team & philosophy <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Our 6-Step SEO Process */}
      <section className="py-20 bg-slate-50/60 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200 inline-block mb-3">
              Execution Roadmap
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              Our SEO Process
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              A systematic 6-stage framework engineered to turn disorganized websites into authoritative search powerhouses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((stepItem, idx) => (
              <div
                key={idx}
                className="relative p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 transition-all shadow-sm"
              >
                <div className="text-3xl font-extrabold text-blue-600/30 mb-3 font-mono">
                  {stepItem.step}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {stepItem.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {stepItem.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200 inline-block mb-3">
              Market Versatility
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              Industries We Serve
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              We apply customized search models tailored to the specific commercial intent, transaction cycles, and compliance needs of diverse verticals.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind, idx) => {
              const Icon = ind.icon;
              return (
                <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {ind.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {ind.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Studies Teaser */}
      <section className="py-20 bg-slate-50/60 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200 inline-block mb-3">
                Methodology & Outgrowth
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                SEO Results & Case Studies
              </h2>
            </div>
            <button
              type="button"
              onClick={() => navigate('/case-studies/')}
              className="text-sm font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1.5"
            >
              <span>View All Detailed Case Studies</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <CaseStudyCard caseStudy={CASE_STUDIES[0]} />
            <CaseStudyCard caseStudy={CASE_STUDIES[1]} />
          </div>
        </div>
      </section>

      {/* SEO Packages Teaser */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200 inline-block mb-3">
              Clear Investment Tiers
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              SEO Packages
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Transparent, deliverable-backed retainers tailored for early-stage sites, scaling SMBs, and enterprise platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {SEO_PACKAGES.map((pkg) => (
              <div
                key={pkg.id}
                className={`p-6 sm:p-8 rounded-2xl flex flex-col justify-between transition-all ${
                  pkg.popular
                    ? 'bg-white border-2 border-blue-600 shadow-xl shadow-blue-500/10 relative'
                    : 'bg-slate-50 border border-slate-200 shadow-sm'
                }`}
              >
                <div>
                  {pkg.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold uppercase tracking-wider text-white bg-blue-600 px-3 py-0.5 rounded-full shadow-md">
                      Most Popular
                    </span>
                  )}
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {pkg.name}
                  </h3>
                  <div className="mb-4">
                    <span className="text-3xl font-extrabold text-slate-900">
                      {pkg.startingPrice}
                    </span>
                    <span className="text-xs text-slate-500 block mt-1">
                      {pkg.priceNote}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 pb-6 border-b border-slate-200">
                    {pkg.tagline}
                  </p>

                  <div className="space-y-2 mb-8">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                      Core Inclusions:
                    </span>
                    {pkg.monthlyDeliverables.map((del, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => navigate('/seo-packages/')}
                  className={`w-full py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 shadow-sm ${
                    pkg.popular
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : 'bg-white border border-slate-300 hover:bg-slate-100 text-slate-700'
                  }`}
                >
                  <span>View Package Deliverables</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <button
              type="button"
              onClick={() => navigate('/seo-packages/')}
              className="text-sm font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1.5"
            >
              <span>Compare all features in the full comparison matrix</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Ethical Standards & Client Commitments */}
      <section className="py-16 bg-slate-50/80 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200 inline-block mb-3">
            Search Marketing Standards
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
            What Our Clients Say About Our Principles
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto mb-8">
            We hold ourselves to rigorous standards of truthfulness. We do not manufacture fake review stars, publish unverified awards, or make false guarantees of permanent #1 Google rankings.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
              <span className="text-xs font-bold text-blue-700 block mb-1">Direct Communication</span>
              <p className="text-xs text-slate-600">Regular strategy syncs with practicing search engineers, not account middlemen.</p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
              <span className="text-xs font-bold text-blue-700 block mb-1">Complete Data Ownership</span>
              <p className="text-xs text-slate-600">You retain full administrative ownership of your Google Search Console, Analytics, and website assets.</p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
              <span className="text-xs font-bold text-blue-700 block mb-1">Algorithmic Resilience</span>
              <p className="text-xs text-slate-600">White-hat compliance ensures your rankings are protected from Google core and spam algorithm updates.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Global FAQs */}
      <FAQAccordion items={GENERAL_FAQS} />

      {/* Closing CTA Banner */}
      <CTASection />
    </>
  );
};

import { CaseStudy } from '../types';

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'b2b-saas-technical-turnaround',
    slug: 'b2b-saas-technical-turnaround',
    title: 'Technical SEO Overhaul & Search Intent Restructuring for B2B Software Platform',
    clientType: 'Representative Case Framework: B2B Enterprise SaaS',
    industry: 'Software & Technology Services',
    businessContext: 'A mid-market B2B software provider had accumulated significant technical debt after multiple frontend redesigns. Crawl errors and cannibalized product keywords were depressing organic lead acquisition.',
    challenge: 'The platform suffered from severe index bloat (over 45,000 auto-generated facet pages), low Core Web Vitals performance (LCP over 4.2s), and internal keyword competition between commercial product pages and generic legacy blog articles.',
    strategy: 'Execute a multi-stage technical remediation sprint, enforce a clean canonical and noindex hierarchy, consolidate overlapping content into high-intent solution pillars, and implement comprehensive Service and FAQ schema.',
    implementation: [
      {
        phase: 'Phase 1: Technical Cleanup & Index Pruning (Weeks 1–4)',
        actions: [
          'Audited full crawl logs and identified 42,000 thin, dynamic facet URLs consuming Google bot crawl budget.',
          'Configured robots.txt directives and noindex meta tags on search filter parameters.',
          'Resolved 180+ internal 404 broken links and eliminated 4-step redirect chains across top navigation.'
        ]
      },
      {
        phase: 'Phase 2: On-Page Intent Realignment (Weeks 5–10)',
        actions: [
          'Mapped 24 core commercial features to dedicated solution landing pages with single-H1 structures.',
          'Rewrote title tags and meta descriptions to improve SERP click-through rates.',
          'Created structured comparison pages answering search queries comparing the software to legacy competitors.'
        ]
      },
      {
        phase: 'Phase 3: Authority Outreach & Performance Tuning (Weeks 11–20)',
        actions: [
          'Secured editorial mentions in software evaluation publications and industry tech portals.',
          'Optimized server response times and deferred non-critical JavaScript to bring LCP under 2.1 seconds.'
        ]
      }
    ],
    results: [
      { label: 'Crawl Efficiency', value: '+310%', context: 'Index bloat eliminated, prioritizing commercial URLs' },
      { label: 'Organic Search Impressions', value: '+184%', context: 'Demonstrated in Google Search Console over 6 months' },
      { label: 'Core Web Vitals Pass Rate', value: '100%', context: 'Transitioned from failing to fully passing on mobile' },
      { label: 'Organic Demo Requests', value: '+76%', context: 'Direct form submissions from high-intent solution pages' }
    ],
    timeline: '6-Month Execution & Ongoing Optimization',
    keyLearnings: [
      'Eliminating low-quality index bloat enables search engines to crawl and re-evaluate commercial money pages significantly faster.',
      'Aligning content format to search intent (e.g. detailed software feature comparisons vs. generic fluff) generates higher-converting organic traffic.',
      'Technical performance and Core Web Vitals stability directly reduce mobile bounce rates.'
    ],
    relatedServicePath: '/services/technical-seo/',
    relatedServiceName: 'Technical SEO Services'
  },
  {
    id: 'local-services-market-expansion',
    slug: 'local-services-market-expansion',
    title: 'Multi-Location Local SEO Strategy for Specialized Medical & Healthcare Practice',
    clientType: 'Representative Case Framework: Multi-Location Healthcare Provider',
    industry: 'Healthcare & Specialized Local Services',
    businessContext: 'A regional healthcare network with three physical clinics was struggling to capture local 3-Pack rankings in surrounding metropolitan districts against established competitors.',
    challenge: 'Inconsistent NAP (Name, Address, Phone) citations across older directory listings, missing category sub-classifications in Google Business Profile, and generic single-page website architecture lacking dedicated clinic location pages.',
    strategy: 'Perform complete NAP cleanup across 50+ local portals, optimize individual Google Business Profiles for each clinic location, build geo-targeted location pages with localized schema, and initiate an authentic review collection framework.',
    implementation: [
      {
        phase: 'Phase 1: Google Business Profile Architecture (Weeks 1–3)',
        actions: [
          'Claimed and updated 3 clinic Google Business Profiles with accurate categories, opening hours, and direct booking links.',
          'Uploaded professional geotagged photography and published weekly localized updates and health tips.',
          'Established automated review request templates via patient SMS follow-ups.'
        ]
      },
      {
        phase: 'Phase 2: Geo-Targeted Website Infrastructure (Weeks 4–8)',
        actions: [
          'Built dedicated location landing pages for each city district with unique doctor bios, localized patient testimonials, and embedded Google Maps.',
          'Integrated LocalBusiness and MedicalClinic structured schema with geo-coordinates and service catalog items.',
          'Optimized on-page headings for localized query modifiers (e.g. "pediatric specialist in [District]").'
        ]
      },
      {
        phase: 'Phase 3: Local Authority & Citation Building (Weeks 9–16)',
        actions: [
          'Submitted cleaned NAP data to 40+ national and medical-specific healthcare directories in Pakistan & region.',
          'Partnered with local health blogs and community publications for editorial brand mentions.'
        ]
      }
    ],
    results: [
      { label: 'Google Maps 3-Pack Rankings', value: '#1–#3', context: 'Across 14 priority local healthcare search queries' },
      { label: 'Inbound Phone Calls', value: '+142%', context: 'Direct click-to-call actions via Google Business Profile' },
      { label: 'Direction Requests', value: '+95%', context: 'Google Maps route requests to clinic locations' },
      { label: 'Verified Local Reviews', value: '4.9 ★', context: 'Consistent positive patient feedback velocity' }
    ],
    timeline: '4-Month Launch & 6-Month Steady Scale',
    keyLearnings: [
      'Accurate NAP consistency combined with active Google Business Profile management remains the single most effective local acquisition channel.',
      'Dedicated location pages with unique, non-templated content prevent local keyword cannibalization across adjacent service territories.',
      'Consistent review generation builds trust with both human searchers and local algorithmic rank models.'
    ],
    relatedServicePath: '/services/local-seo/',
    relatedServiceName: 'Local SEO Services'
  },
  {
    id: 'ecommerce-category-onpage-expansion',
    slug: 'ecommerce-category-onpage-expansion',
    title: 'On-Page Topical Optimization & Editorial Authority for Direct-to-Consumer Brand',
    clientType: 'Representative Case Framework: Retail & DTC E-Commerce',
    industry: 'E-Commerce & Consumer Goods',
    businessContext: 'An online retailer had thousands of product SKU pages but was losing top-of-funnel traffic due to unoptimized category descriptions, thin product copy, and zero internal content siloing.',
    challenge: 'E-commerce category pages were competing against high-domain-authority marketplaces. Product pages lacked structured product schema, title tags were uninformative, and there were no educational buying guides.',
    strategy: 'Restructure category taxonomies, inject comprehensive buying guide content above and below product grids, deploy Product and Review schema, and implement an internal link silo connecting lifestyle guides directly to category collections.',
    implementation: [
      {
        phase: 'Phase 1: Keyword Mapping & Taxonomy Restructuring (Weeks 1–4)',
        actions: [
          'Mapped 60+ parent and child category URLs to commercial search intent clusters.',
          'Crafted unique, conversion-focused category descriptions answering common buyer questions.',
          'Standardized title tags and meta descriptions with price and brand qualifiers.'
        ]
      },
      {
        phase: 'Phase 2: Content Hub & Internal Link Silos (Weeks 5–12)',
        actions: [
          'Published 12 comprehensive buying guides and comparison reviews targeting informational queries.',
          'Built contextual internal links from educational guides to high-margin collection pages using descriptive anchor text.',
          'Resolved duplicate content caused by multi-variant product URLs using self-referential canonicals.'
        ]
      },
      {
        phase: 'Phase 3: Digital PR & Product Mentions (Weeks 13–24)',
        actions: [
          'Conducted outreach to lifestyle publications and consumer review blogs for product round-up placements.',
          'Optimized image sizes and converted hero banners to next-gen WebP formats.'
        ]
      }
    ],
    results: [
      { label: 'Organic Revenue Growth', value: '+128%', context: 'Direct attribution via Google Analytics 4 tracking' },
      { label: 'Category Page 1 Rankings', value: '+44 terms', context: 'High-intent commercial keywords moved into top 10' },
      { label: 'Average Page Load Time', value: '-1.8s', context: 'From 3.4s down to 1.6s across collection grids' },
      { label: 'Organic CTR', value: '+2.4%', context: 'Improved snippet visibility through Product schema' }
    ],
    timeline: '6-Month Comprehensive Strategy',
    keyLearnings: [
      'Category pages with substantive, intent-satisfying copy substantially outperform empty product grids in organic SERPs.',
      'Connecting top-of-funnel informational blog posts to transactional categories captures buyers earlier in their decision journeys.',
      'Rich Product schema (price, availability, ratings) significantly increases SERP click-through rates.'
    ],
    relatedServicePath: '/services/on-page-seo/',
    relatedServiceName: 'On-Page SEO Services'
  }
];

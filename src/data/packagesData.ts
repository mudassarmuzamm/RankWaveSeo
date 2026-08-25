import { SEOPackageTier } from '../types';

export const SEO_PACKAGES: SEOPackageTier[] = [
  {
    id: 'starter',
    name: 'Starter SEO',
    tagline: 'Ideal for local businesses and early-stage websites establishing organic search foundations.',
    targetAudience: 'Small businesses, single-location practices, and niche service providers.',
    startingPrice: '$450',
    priceNote: 'Starting from / month (No lock-in contract)',
    popular: false,
    idealFor: [
      'New websites under 20 pages',
      'Local service area businesses',
      'Initial search keyword ranking foundation',
      'Budget-conscious startups seeking sustainable momentum'
    ],
    deliverables: [
      {
        category: 'Strategy & Audit',
        features: [
          'Comprehensive initial technical & on-page audit',
          'Up to 15 target commercial keyword clusters',
          'Competitor baseline benchmarking (top 3 competitors)'
        ]
      },
      {
        category: 'On-Page & Content',
        features: [
          'Optimization of up to 8 priority pages per month',
          'Title, meta description, and heading restructuring',
          '1 in-depth blog post or landing page copy brief per month',
          'Image alt text & internal linking optimization'
        ]
      },
      {
        category: 'Technical & Local',
        features: [
          'Robots.txt, XML sitemap, and crawl error cleanup',
          'Core Web Vitals health monitoring',
          'Google Business Profile setup & optimization',
          '15+ local directory citation submissions'
        ]
      },
      {
        category: 'Authority & Links',
        features: [
          '2–3 high-quality contextual editorial placements per month',
          'Backlink hygiene and toxic link monitoring'
        ]
      }
    ],
    monthlyDeliverables: [
      '8 Optimized pages',
      '1 New strategic blog/content piece',
      '2–3 Quality editorial backlinks',
      'Google Search Console monthly performance report'
    ],
    reportingCadence: 'Monthly executive summary report with Search Console keyword impression metrics, click growth, and prioritized next-month action items.'
  },
  {
    id: 'growth',
    name: 'Growth SEO',
    tagline: 'Designed for scaling SMBs looking to capture competitive commercial search traffic and outrank established players.',
    targetAudience: 'Expanding service businesses, B2B companies, and growing e-commerce stores.',
    startingPrice: '$850',
    priceNote: 'Starting from / month (Recommended)',
    popular: true,
    idealFor: [
      'Websites with 20–100 pages',
      'Companies facing aggressive search competitors',
      'Businesses requiring steady monthly content & PR links',
      'Brands expanding into regional or national search terms'
    ],
    deliverables: [
      {
        category: 'Strategy & Audit',
        features: [
          'Full-depth technical audit & continuous crawl monitoring',
          'Up to 35 commercial & informational keyword clusters',
          'Deep competitor content gap & link velocity analysis'
        ]
      },
      {
        category: 'On-Page & Content',
        features: [
          'Optimization of up to 18 priority pages per month',
          'Topical cluster architecture & internal link siloing',
          '2 publication-ready, search-intent articles per month (1,500+ words)',
          'JSON-LD schema deployment (Service, FAQ, Article)'
        ]
      },
      {
        category: 'Technical & Local',
        features: [
          'Direct developer assistance or implementation for speed & CWV',
          'Canonical, redirect chain, and index coverage remediation',
          'Multi-location Google Business Profile management',
          '30+ verified local citations and NAP consistency monitoring'
        ]
      },
      {
        category: 'Authority & Links',
        features: [
          '5–7 verified high-domain-authority editorial backlinks per month',
          'Digital PR outreach & unlinked brand mention reclamation',
          'Competitor link conquesting strategy'
        ]
      }
    ],
    monthlyDeliverables: [
      '18 Optimized pages & schema markup',
      '2 Comprehensive content assets published',
      '5–7 Authoritative editorial backlinks',
      'Bi-weekly monitoring + full monthly strategy call'
    ],
    reportingCadence: 'Comprehensive monthly dashboard with keyword position tracking, organic conversions, search share of voice, and direct strategic consultation call.'
  },
  {
    id: 'advanced',
    name: 'Advanced & Enterprise',
    tagline: 'Comprehensive search optimization for high-traffic platforms, large e-commerce catalogs, and multi-market brands.',
    targetAudience: 'National brands, multi-location organizations, large e-commerce platforms, and high-stakes SaaS companies.',
    startingPrice: '$1,600',
    priceNote: 'Starting from / month (Dedicated Search Strategist)',
    popular: false,
    idealFor: [
      'Complex websites with 100+ to thousands of URLs',
      'High-competition national or global search terms',
      'Large-scale e-commerce category & faceted navigation',
      'Brands requiring custom digital PR and developer-level execution'
    ],
    deliverables: [
      {
        category: 'Strategy & Audit',
        features: [
          'Custom search engine roadmap & log file analysis',
          'Unlimited keyword tracking across multiple geographical markets',
          'Comprehensive enterprise competitive intelligence & SERP feature strategy'
        ]
      },
      {
        category: 'On-Page & Content',
        features: [
          'Full site on-page governance & scalable page optimization',
          '4 in-depth thought leadership or high-intent content assets per month',
          'Custom programmatic schema templates and dynamic metadata rules',
          'Conversion Rate Optimization (CRO) UX recommendations'
        ]
      },
      {
        category: 'Technical & Local',
        features: [
          'Dedicated technical developer coordination & sprint management',
          'Faceted navigation, crawl budget optimization & international hreflang',
          'Advanced Core Web Vitals profiling & JS rendering optimization',
          'Enterprise multi-location & international search governance'
        ]
      },
      {
        category: 'Authority & Links',
        features: [
          '10–15 top-tier digital PR mentions & editorial links per month',
          'Data-driven industry study production for natural link attraction',
          'Executive thought leadership placement & podcast/media outreach'
        ]
      }
    ],
    monthlyDeliverables: [
      'Scalable on-page execution & content governance',
      '4 High-impact content pieces',
      '10–15 Tier-1 editorial & PR backlinks',
      'Weekly check-ins + real-time live reporting dashboard'
    ],
    reportingCadence: 'Real-time interactive dashboard, weekly Slack/email check-ins, monthly executive presentation, and quarterly strategic growth reviews.'
  }
];

export const PACKAGE_COMPARISON_MATRIX = [
  { feature: 'Keyword Strategy & Research', starter: '15 Clusters', growth: '35 Clusters', advanced: 'Unlimited / Multi-Market' },
  { feature: 'Monthly Page Optimizations', starter: 'Up to 8 Pages', growth: 'Up to 18 Pages', advanced: 'Scalable Site-Wide' },
  { feature: 'Search-Intent Content Creation', starter: '1 Piece / mo', growth: '2 Pieces / mo', advanced: '4 Pieces / mo' },
  { feature: 'Vetted Editorial Backlinks', starter: '2–3 Links / mo', growth: '5–7 Links / mo', advanced: '10–15 Tier-1 Links / mo' },
  { feature: 'Technical Audit & Log Analysis', starter: 'Standard Audit', growth: 'Deep Audit + CWV', advanced: 'Continuous + Log Analysis' },
  { feature: 'Schema Markup (JSON-LD)', starter: 'Basic (Org / WebPage)', growth: 'Advanced (Service, FAQ, Article)', advanced: 'Custom Enterprise & Nested' },
  { feature: 'Google Business Profile / Local', starter: '1 Location', growth: 'Up to 3 Locations', advanced: 'Multi-Location / Enterprise' },
  { feature: 'Local Directory Citations', starter: '15 Submissions', growth: '30+ Submissions', advanced: 'Bespoke Citation Network' },
  { feature: 'Reporting & Strategy Calls', starter: 'Monthly Report', growth: 'Monthly Report + Call', advanced: 'Real-Time Dashboard + Weekly Sync' },
  { feature: 'Contract Terms', starter: 'Month-to-Month', growth: 'Month-to-Month', advanced: 'Month-to-Month / Custom SLA' },
];

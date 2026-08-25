import { ServiceDetail } from '../types';
import { PAGES_META } from './pagesMeta';

export const SERVICES_DATA: Record<string, ServiceDetail> = {
  'on-page-seo': {
    slug: 'on-page-seo',
    path: '/services/on-page-seo/',
    name: 'On-Page SEO',
    meta: PAGES_META['/services/on-page-seo/'],
    h1: 'On-Page SEO Services That Make Every Page Work Harder',
    shortDescription: 'Align your page architecture, metadata, topical relevance, and internal linking to rank for search queries that generate actual conversions.',
    heroBadge: 'Search Intent & Content Alignment',
    whatIsTitle: 'What Is On-Page SEO?',
    whatIsParagraphs: [
      'On-Page SEO is the practice of optimizing individual web pages to earn higher search engine rankings and attract relevant, qualified organic traffic. Unlike off-page signals such as backlinks, on-page optimization focuses entirely on elements within your direct control on your own website.',
      'Modern search algorithms do not evaluate pages based on repetitive keyword density. Instead, search engines analyze search intent, semantic entity relationships, contextual depth, schema clarity, and content structure. Our on-page SEO services turn every strategic landing page and informational guide into an authoritative, easily understandable asset for both search spiders and human visitors.'
    ],
    deliverablesTitle: 'Our On-Page SEO Services',
    deliverables: [
      {
        title: 'Keyword Research & Semantic Mapping',
        description: 'Identifying primary, secondary, and long-tail query clusters, mapping each commercial or informational intent to its dedicated URL.',
        details: ['Search volume & difficulty benchmarking', 'Commercial vs informational intent classification', 'Canonical mapping to eliminate keyword cannibalization']
      },
      {
        title: 'Search Intent Analysis',
        description: 'Evaluating top-ranking Search Engine Results Pages (SERPs) to ensure content format, depth, and tone exactly fulfill what searchers are looking for.',
        details: ['SERP feature analysis', 'Content type alignment (guide, product, comparison)', 'User journey stage mapping']
      },
      {
        title: 'Title Tag Optimization',
        description: 'Crafting compelling, keyword-relevant title tags within character limits to maximize organic Click-Through Rates (CTR) in search results.',
        details: ['Primary entity placement', 'Brand reinforcement', 'SERP pixel-width compliance']
      },
      {
        title: 'Meta Description Optimization',
        description: 'Writing clear, human-first meta descriptions with natural secondary keywords and persuasive calls to action.',
        details: ['Search snippet click incentives', 'Active voice copywriting', 'Unique descriptions per indexable URL']
      },
      {
        title: 'Heading Structure (H1 - H4)',
        description: 'Enforcing a strict, single-H1 heading hierarchy with logical H2 and H3 subsections for clear document outlines.',
        details: ['Single H1 audit', 'Topical hierarchy cleanup', 'Semantic subheadings answering user questions']
      },
      {
        title: 'Content Depth & Topical Optimization',
        description: 'Refining body copy with semantic entities, supporting concepts, clear lists, and comprehensive answers to user queries.',
        details: ['Topical completeness evaluation', 'Entity & co-occurrence optimization', 'Elimination of thin or fluffy filler text']
      },
      {
        title: 'Internal Linking Architecture',
        description: 'Building strategic internal link silos that distribute page authority (PageRank) and establish clear parent-child topical relationships.',
        details: ['Descriptive anchor text strategy', 'Contextual in-body links', 'Orphan page resolution']
      },
      {
        title: 'Image SEO & Media Optimization',
        description: 'Optimizing descriptive image filenames, accurate alt attributes, modern format delivery, and responsive sizing.',
        details: ['Contextual alt text writing', 'Dimension attributes to avoid layout shifts (CLS)', 'Lazy-loading compliance']
      },
      {
        title: 'URL Structure Optimization',
        description: 'Streamlining URL slugs to be clean, short, lowercase, hyphenated, and free of unnecessary parameters or dates.',
        details: ['Clean subdirectory taxonomy', '301 redirect map for legacy URLs', 'Removal of redundant query strings']
      },
      {
        title: 'Content Gap Analysis',
        description: 'Benchmarking top-ranking competitors to discover missing subtopics, unanswered questions, and unique value differentiators.',
        details: ['Competitor heading matrix', 'Uncovered long-tail opportunities', 'Content expansion briefs']
      }
    ],
    processTitle: 'Our On-Page SEO Process',
    process: [
      {
        stepNumber: '01',
        title: 'Website & Keyword Analysis',
        description: 'We audit your existing content inventory, current search impressions, indexation status, and ranking keyword baseline.'
      },
      {
        stepNumber: '02',
        title: 'Topical Keyword Mapping',
        description: 'We build a master keyword-to-URL map ensuring every target keyword has one definitive, dedicated landing page.'
      },
      {
        stepNumber: '03',
        title: 'Page-Level Optimization',
        description: 'We rewrite metadata, restructure headings, enrich copy with semantic entities, and optimize image assets.'
      },
      {
        stepNumber: '04',
        title: 'Internal Link Siloing',
        description: 'We connect informational articles to core commercial service pages using natural, descriptive anchor text.'
      },
      {
        stepNumber: '05',
        title: 'Quality & Technical Review',
        description: 'We verify readability, schema validity, mobile rendering, and absence of duplicate or canonical conflicts.'
      },
      {
        stepNumber: '06',
        title: 'Performance Monitoring',
        description: 'We track keyword position shifts, organic CTR in Google Search Console, and user engagement metrics.'
      }
    ],
    benefitsTitle: 'On-Page SEO Benefits',
    benefits: [
      {
        title: 'Higher Search Engine Rankings',
        description: 'Clear topical signals and structured content help search engines accurately understand and rank your pages for target queries.'
      },
      {
        title: 'Improved Organic Click-Through Rates',
        description: 'Engaging, intent-focused title tags and meta descriptions entice qualified searchers to click your listings over competitors.'
      },
      {
        title: 'Enhanced User Experience & Dwell Time',
        description: 'Logical headings, fast-loading media, and scannable formatting keep visitors engaged and reduce bounce rates.'
      },
      {
        title: 'Stronger Conversion Rates',
        description: 'Directly satisfying search intent guides warm organic visitors seamlessly into consultation and lead-generation flows.'
      }
    ],
    whyChooseRankWave: {
      title: 'Why Choose RankWave for On-Page SEO',
      points: [
        {
          title: 'Intent-First Engineering',
          desc: 'We never stuff arbitrary keywords into awkward sentences; we engineer content to solve searcher queries with absolute clarity.'
        },
        {
          title: 'Custom Page-by-Page Roadmaps',
          desc: 'No generic automated rewrite scripts. Every priority page receives dedicated manual analysis and strategic refinement.'
        },
        {
          title: 'Measurable Search Console Tracking',
          desc: 'Transparent reporting showing real impressions, average positions, and query expansions directly from Google Search Console.'
        }
      ]
    },
    pricingTitle: 'On-Page SEO Pricing Approach',
    pricingDescription: 'We provide structured on-page optimization packages based on the size of your website and the depth of content needed.',
    pricingTiers: [
      {
        tierName: 'Starter On-Page Sprint',
        price: 'Starting from $350',
        period: 'one-time / project',
        deliverables: [
          'Up to 10 priority pages fully optimized',
          'Primary & secondary keyword mapping',
          'Title, meta description & heading structure',
          'Internal link strategy',
          'Image alt text & URL optimization report'
        ]
      },
      {
        tierName: 'Growth On-Page Suite',
        price: 'Starting from $650',
        period: 'one-time / project',
        isPopular: true,
        deliverables: [
          'Up to 25 core service & commercial pages',
          'In-depth competitor content gap analysis',
          'Semantic entity enrichment & FAQ schema',
          'Full internal linking siloing & orphan repair',
          '30-day post-implementation monitoring'
        ]
      },
      {
        tierName: 'Comprehensive / Enterprise',
        price: 'Custom Scope',
        period: 'tailored roadmap',
        deliverables: [
          '50+ pages & complex e-commerce taxonomies',
          'Category & faceted navigation optimization',
          'Custom content briefs & programmatic templates',
          'Dedicated search strategist & developer handover'
        ]
      }
    ],
    faqs: [
      {
        id: 'op-1',
        question: 'How quickly does On-Page SEO show ranking improvements?',
        answer: 'Search engines typically re-crawl and re-evaluate updated pages within a few days to several weeks. Measurable position improvements and organic impression gains are typically observed within 4 to 8 weeks following search re-indexing.'
      },
      {
        id: 'op-2',
        question: 'Will on-page SEO require rewriting all of our website content?',
        answer: 'Not necessarily. In most cases, we preserve your core brand voice and existing value proposition, while restructuring headings, adding topical sub-sections, eliminating thin filler, and optimizing metadata for search clarity.'
      },
      {
        id: 'op-3',
        question: 'What is the difference between On-Page SEO and Technical SEO?',
        answer: 'On-Page SEO focuses on page-level content, keyword alignment, headings, meta tags, and internal links that users and crawlers read. Technical SEO focuses on website infrastructure, crawlability, indexing directives, server response times, and Core Web Vitals.'
      },
      {
        id: 'op-4',
        question: 'Can On-Page SEO alone get me to position 1 on Google?',
        answer: 'On-page SEO is the foundational bedrock of search visibility. In low-to-medium competition niches, robust on-page SEO can achieve strong page 1 positions. In highly competitive sectors, on-page optimization must be paired with technical excellence and high-quality off-page authority.'
      }
    ],
    relatedServices: [
      {
        name: 'Technical SEO',
        path: '/services/technical-seo/',
        description: 'Ensure search crawlers can index and render your newly optimized on-page content without technical hurdles.'
      },
      {
        name: 'Off-Page SEO',
        path: '/services/off-page-seo/',
        description: 'Amplify the authority of your top landing pages through editorial mentions and contextual backlinks.'
      },
      {
        name: 'Local SEO',
        path: '/services/local-seo/',
        description: 'Optimize geo-targeted service pages to capture high-intent customers in your geographic territory.'
      }
    ]
  },

  'off-page-seo': {
    slug: 'off-page-seo',
    path: '/services/off-page-seo/',
    name: 'Off-Page SEO',
    meta: PAGES_META['/services/off-page-seo/'],
    h1: 'Off-Page SEO Services That Build Website Authority',
    shortDescription: 'Establish real search trust and domain credibility through ethical digital PR, niche-relevant link outreach, and authoritative brand mentions.',
    heroBadge: 'Ethical Authority & Trust Building',
    whatIsTitle: 'What Is Off-Page SEO?',
    whatIsParagraphs: [
      'Off-Page SEO encompasses all optimization activities conducted outside the boundaries of your own website to influence search engine perception of your domain popularity, relevance, trustworthiness, and authority.',
      'Search engines treat external citations, digital PR mentions, and contextual backlinks as digital votes of confidence. However, algorithmic updates heavily penalize manipulative link schemes. Our off-page strategies strictly emphasize editorial relevance, authoritative publisher relationships, and organic brand citations that withstand algorithm changes.'
    ],
    deliverablesTitle: 'Our Off-Page SEO Services',
    deliverables: [
      {
        title: 'Editorial Link Building',
        description: 'Securing contextual placements on established, industry-relevant publications with genuine readership and organic traffic.',
        details: ['Topical relevance screening', 'Zero private blog networks (PBNs)', 'Natural editorial anchor text distribution']
      },
      {
        title: 'High-Quality Guest Posting',
        description: 'Authoring in-depth, expert-level articles for reputable industry blogs that provide genuine value to their audiences.',
        details: ['Manual outreach to verified editors', 'Original research & comprehensive copy', 'Contextual resource citations']
      },
      {
        title: 'Digital PR & Story Outreach',
        description: 'Pitching industry insights, market commentary, and company announcements to journalists, editors, and industry publications.',
        details: ['Press outreach lists', 'Thought leadership positioning', 'High-authority media mentions']
      },
      {
        title: 'Unlinked Brand Mention Reclamation',
        description: 'Finding online mentions of your brand name or executive team that lack a hyperlink and requesting updated editorial attribution.',
        details: ['Brand monitoring audits', 'Direct editorial outreach', 'High-conversion link conversion']
      },
      {
        title: 'Local Citation & Directory Building',
        description: 'Registering consistent business citations across authoritative business directories and industry-specific portals.',
        details: ['Strict NAP (Name, Address, Phone) consistency', 'Removal of duplicate listings', 'High-domain-authority directory submissions']
      },
      {
        title: 'Backlink Profile Auditing',
        description: 'Analyzing your current link profile to identify toxic footprints, spam flags, and potential algorithm penalty risks.',
        details: ['Anchor text over-optimization check', 'Toxic link risk scoring', 'Google Disavow file preparation if necessary']
      },
      {
        title: 'Competitor Backlink Gap Analysis',
        description: 'Uncovering the authoritative referral sources powering your top competitors to engineer superior outreach opportunities.',
        details: ['Overlap matrix analysis', 'Replicable link prospect identification', 'Targeted outreach pitch strategy']
      }
    ],
    processTitle: 'Our Link Building & Outreach Process',
    process: [
      {
        stepNumber: '01',
        title: 'Backlink Audit & Baseline',
        description: 'We analyze your existing link profile, domain trust, anchor text distribution, and competitor authority gaps.'
      },
      {
        stepNumber: '02',
        title: 'Prospect Discovery & Vetting',
        description: 'We curate a list of verified websites, checking organic traffic trends, domain history, and editorial standards.'
      },
      {
        stepNumber: '03',
        title: 'Value-Led Content Creation',
        description: 'We develop rich, data-backed guides, case studies, and editorial articles worthy of being cited by industry authorities.'
      },
      {
        stepNumber: '04',
        title: 'Manual Relationship Outreach',
        description: 'We conduct personalized outreach to webmasters and editors without automated spam templates.'
      },
      {
        stepNumber: '05',
        title: 'Placement Verification & Indexing',
        description: 'We verify that secured links are live, do-follow where appropriate, and indexed by search engines.'
      },
      {
        stepNumber: '06',
        title: 'Monthly Authority Reporting',
        description: 'You receive a transparent monthly report with exact live URLs, target landing pages, and domain metrics.'
      }
    ],
    benefitsTitle: 'What Makes a Quality Backlink?',
    benefits: [
      {
        title: 'Topical Relevance',
        description: 'The linking website and article must operate in an industry closely related to your products or services.'
      },
      {
        title: 'Real Organic Traffic',
        description: 'The referring domain must receive consistent organic search traffic from Google, proving it is not a hollow link farm.'
      },
      {
        title: 'Editorial Context',
        description: 'The link must be naturally integrated into the body of the article, providing genuine educational value to the reader.'
      },
      {
        title: 'Natural Anchor Text',
        description: 'A diversified anchor profile mixing brand names, partial phrases, and generic terms rather than aggressive exact-match keywords.'
      }
    ],
    whyChooseRankWave: {
      title: 'Safe vs. Risky Link Building at RankWave',
      points: [
        {
          title: 'Zero Private Blog Networks (PBNs)',
          desc: 'We never place links on artificial PBN networks or automated link wheels that risk manual Google penalties.'
        },
        {
          title: 'No Guaranteed Exact Rankings Gimmicks',
          desc: 'We do not promise artificial rank overnight. We build lasting domain equity through legitimate editorial partnerships.'
        },
        {
          title: 'Full Placement Transparency',
          desc: 'Every link acquired is documented with live URL, target landing page, domain authority metrics, and live status.'
        }
      ]
    },
    pricingTitle: 'Off-Page SEO Pricing Approach',
    pricingDescription: 'Off-page campaigns are structured on a monthly retainer basis, reflecting the level of outreach and editorial effort required.',
    pricingTiers: [
      {
        tierName: 'Foundational Outreach',
        price: 'Starting from $500',
        period: 'per month',
        deliverables: [
          '3–5 vetted high-quality editorial placements',
          'Monthly backlink profile hygiene monitoring',
          'Niche citation building & verification',
          'Live URL delivery report with metrics'
        ]
      },
      {
        tierName: 'Authority Acceleration',
        price: 'Starting from $950',
        period: 'per month',
        isPopular: true,
        deliverables: [
          '6–10 high-tier editorial & guest placements',
          'Digital PR & thought leadership outreach',
          'Competitor backlink gap conquesting',
          'Unlinked brand mention reclamation',
          'Strategic anchor text distribution plan'
        ]
      },
      {
        tierName: 'Enterprise Authority Suite',
        price: 'Custom Scope',
        period: 'custom retainer',
        deliverables: [
          '12+ Tier-1 authoritative media placements',
          'Bespoke data studies & PR link magnets',
          'International or multi-market outreach',
          'Direct PR specialist & executive reporting'
        ]
      }
    ],
    faqs: [
      {
        id: 'off-1',
        question: 'Are backlinks still important for Google rankings?',
        answer: 'Yes. Backlinks remain one of Google’s primary signals for evaluating domain trust, topical authority, and organic credibility. However, quality and topical relevance far outweigh sheer link volume.'
      },
      {
        id: 'off-2',
        question: 'How do you protect websites from Google link penalties?',
        answer: 'We adhere strictly to white-hat link acquisition principles: manual prospect vetting, editorial content contribution, no automated spam software, no PBNs, and balanced anchor text distributions.'
      },
      {
        id: 'off-3',
        question: 'Do you provide reports showing the exact websites that link to us?',
        answer: 'Yes. Every month you receive a comprehensive report listing the exact live URLs, domain metrics, anchor texts, and destination pages.'
      },
      {
        id: 'off-4',
        question: 'Do you guarantee a #1 ranking from link building?',
        answer: 'No ethical SEO agency guarantees specific ranking positions, as Google algorithms weigh hundreds of signals including searcher location, search history, and technical health. We guarantee transparent, high-standard execution that steadily elevates domain authority.'
      }
    ],
    relatedServices: [
      {
        name: 'On-Page SEO',
        path: '/services/on-page-seo/',
        description: 'Maximize link equity by ensuring destination pages have optimized content and conversion structures.'
      },
      {
        name: 'Technical SEO',
        path: '/services/technical-seo/',
        description: 'Ensure internal PageRank flows smoothly through clean canonicalization and redirect architectures.'
      },
      {
        name: 'SEO Packages',
        path: '/seo-packages/',
        description: 'Bundle off-page link building with technical optimization and content strategy under a unified retainer.'
      }
    ]
  },

  'technical-seo': {
    slug: 'technical-seo',
    path: '/services/technical-seo/',
    name: 'Technical SEO',
    meta: PAGES_META['/services/technical-seo/'],
    h1: 'Technical SEO Services That Keep Your Website Search-Ready',
    shortDescription: 'Eliminate crawl bottlenecks, optimize Core Web Vitals, fix indexation errors, and establish structured schema to give search engines a clear path to your content.',
    heroBadge: 'Crawlability, Performance & Architecture',
    whatIsTitle: 'What Is Technical SEO?',
    whatIsParagraphs: [
      'Technical SEO refers to website and server optimizations that enable search engine spiders to crawl, render, index, and interpret your web pages with maximum efficiency. Even the highest-quality content will fail to rank if technical roadblocks prevent search bots from reaching or understanding it.',
      'From JavaScript rendering bottlenecks and pagination loops to broken canonical directives and slow Core Web Vitals, technical deficiencies drain crawl budget and diminish organic visibility. Our technical SEO services resolve foundational infrastructure issues to ensure your website is fully search-ready.'
    ],
    deliverablesTitle: 'Comprehensive Technical SEO Audit & Implementation',
    deliverables: [
      {
        title: 'Crawlability & Crawl Budget Optimization',
        description: 'Auditing server log files and crawler behavior to ensure bot resources are directed toward high-value commercial pages.',
        details: ['Crawl frequency analysis', 'Faceted navigation containment', 'Elimination of infinite crawl traps']
      },
      {
        title: 'Indexation Directives & Control',
        description: 'Managing robots meta tags, X-Robots headers, and noindex instructions so only canonical, quality URLs enter Google’s index.',
        details: ['Index coverage diagnostic', 'Noindex & nofollow parameter audit', 'Removal of thin auto-generated pages']
      },
      {
        title: 'XML Sitemap Configuration',
        description: 'Generating dynamic, error-free XML sitemaps that prioritize indexable URLs and notify search engines of recent content updates.',
        details: ['Exclusion of 404s and redirects', 'Image & video sitemap integration', 'Search Console sitemap submission']
      },
      {
        title: 'Robots.txt Architecture',
        description: 'Crafting clean robots.txt directives that allow essential asset rendering while protecting private or duplicate server paths.',
        details: ['CSS/JS resource blocking check', 'Crawl delay tuning if necessary', 'Sitemap location referencing']
      },
      {
        title: 'Canonical URL Implementation',
        description: 'Implementing self-referencing and cross-domain canonical tags to prevent duplicate content penalties across dynamic URLs.',
        details: ['HTTP vs HTTPS canonical alignment', 'Trailing slash standardization', 'URL parameter canonicalization']
      },
      {
        title: 'Redirect Chains & Broken Link Resolution',
        description: 'Auditing 301/302 redirects, flattening redirect chains, and resolving internal 404 broken links to preserve PageRank flow.',
        details: ['Redirect loop elimination', '302 temporary to 301 permanent migration', 'Internal broken link repair']
      },
      {
        title: 'Core Web Vitals & Speed Optimization',
        description: 'Optimizing Largest Contentful Paint (LCP), Interaction to Next Paint (INP), and Cumulative Layout Shift (CLS) for fast page delivery.',
        details: ['Server Response Time (TTFB) reduction', 'Critical CSS & script deferral', 'Layout shift stabilization']
      },
      {
        title: 'Structured Data & Schema Markup',
        description: 'Deploying JSON-LD schema (Organization, LocalBusiness, BreadcrumbList, FAQPage, Article, Service) for rich search snippets.',
        details: ['Google Rich Results validation', 'Entity schema nesting', 'Zero schema syntax warnings']
      },
      {
        title: 'Mobile SEO & Responsive Rendering',
        description: 'Ensuring seamless mobile-first indexing, responsive layout rendering, and touch-target accessibility across all viewports.',
        details: ['Viewport meta configuration', 'Mobile usability testing', 'Dynamic font and tap target checks']
      },
      {
        title: 'HTTPS & Security Protocols',
        description: 'Validating SSL/TLS certificates, resolving mixed-content warnings, and ensuring secure connection handshakes.',
        details: ['HSTS header configuration', 'Mixed content resolution (HTTP assets)', 'Security header implementation']
      }
    ],
    processTitle: 'Our Technical SEO Process',
    process: [
      {
        stepNumber: '01',
        title: 'Full Site Crawl & Log Diagnostic',
        description: 'We perform deep multi-threaded crawls using industry-standard tools to map every URL, response code, and directive.'
      },
      {
        stepNumber: '02',
        title: 'Issue Prioritization Matrix',
        description: 'We classify findings into Critical (blocking indexation), High Impact (Core Web Vitals, redirects), and Maintenance items.'
      },
      {
        stepNumber: '03',
        title: 'Developer Handover / Direct Fixes',
        description: 'We deliver clear code snippets, htaccess/server rules, or directly implement changes in your CMS and codebase.'
      },
      {
        stepNumber: '04',
        title: 'Re-Crawl & Validation',
        description: 'We perform validation crawls to verify that 404s, redirect chains, canonical discrepancies, and errors have been resolved.'
      },
      {
        stepNumber: '05',
        title: 'Google Search Console Validation',
        description: 'We submit validation requests in Google Search Console for Page Indexing and Core Web Vitals issues.'
      },
      {
        stepNumber: '06',
        title: 'Ongoing Technical Monitoring',
        description: 'Continuous monitoring for server spikes, unexpected 5xx errors, accidental noindex tags, or schema breakages.'
      }
    ],
    benefitsTitle: 'Technical SEO Issues We Fix',
    benefits: [
      {
        title: 'Crawl Budget Wastage',
        description: 'Stopping search bots from burning crawler limits on faceted search filters, internal query URLs, and duplicate pages.'
      },
      {
        title: 'Slow Page Speeds & High Bounce Rates',
        description: 'Accelerating load times to keep mobile visitors on site and satisfy Google Core Web Vitals ranking criteria.'
      },
      {
        title: 'Lost Link Equity from Broken Links',
        description: 'Recovering PageRank trapped in 404 error pages or degraded through multi-hop redirect chains.'
      },
      {
        title: 'Missing Rich Snippet Opportunities',
        description: 'Implementing valid structured data to help your listings stand out with star ratings, FAQs, and breadcrumbs.'
      }
    ],
    whyChooseRankWave: {
      title: 'Why Work With RankWave on Technical SEO',
      points: [
        {
          title: 'Engineering-Grade Technical Audits',
          desc: 'We do not hand you an automated PDF export. We provide actionable, developer-ready specifications with exact line-by-line fixes.'
        },
        {
          title: 'Direct Implementation Capabilities',
          desc: 'Our team understands WordPress, Shopify, Next.js, React, Node, and custom CMS architectures, allowing us to implement fixes directly.'
        },
        {
          title: 'Search Console Health Verification',
          desc: 'We track fixes through Google Search Console index coverage reports until clean validation is confirmed.'
        }
      ]
    },
    pricingTitle: 'Technical SEO Pricing Approach',
    pricingDescription: 'Technical SEO can be executed as a comprehensive one-time technical overhaul sprint or as an ongoing monthly retainer.',
    pricingTiers: [
      {
        tierName: 'Technical Sprint Audit',
        price: 'Starting from $400',
        period: 'one-time sprint',
        deliverables: [
          'Full site crawl up to 5,000 URLs',
          'Core Web Vitals & speed diagnostic',
          'Robots.txt & XML sitemap reconstruction',
          '404 and redirect chain resolution roadmap',
          'Developer action checklist'
        ]
      },
      {
        tierName: 'Technical Audit & Fix Execution',
        price: 'Starting from $750',
        period: 'one-time / sprint',
        isPopular: true,
        deliverables: [
          'Full audit up to 25,000 URLs',
          'Direct implementation of canonicals & redirects',
          'JSON-LD structured data deployment',
          'Core Web Vitals code optimizations',
          'Search Console issue validation'
        ]
      },
      {
        tierName: 'Enterprise Site Architecture',
        price: 'Custom Scope',
        period: 'custom project',
        deliverables: [
          'Large-scale eCommerce / multi-language sites',
          'Log file analysis & server configuration',
          'Migration support & re-platforming architecture',
          'Ongoing sprint engineering support'
        ]
      }
    ],
    faqs: [
      {
        id: 'tech-1',
        question: 'Do I need a developer to implement technical SEO recommendations?',
        answer: 'For many CMS platforms (such as WordPress or Shopify), our team can implement technical fixes directly. For custom codebases, we provide clean, unambiguous developer documentation with exact code snippets and directives.'
      },
      {
        id: 'tech-2',
        question: 'What are Core Web Vitals and why do they matter?',
        answer: 'Core Web Vitals are Google’s standardized metrics measuring real-world user experience: loading performance (LCP), visual stability (CLS), and responsiveness to user input (INP). Passing these metrics is an established Google ranking signal.'
      },
      {
        id: 'tech-3',
        question: 'How often should a website undergo a technical SEO audit?',
        answer: 'We recommend a comprehensive technical audit at least every 6 months, or immediately before and after any website redesign, CMS migration, or major feature deployment.'
      },
      {
        id: 'tech-4',
        question: 'Can technical SEO fix pages that are not being indexed by Google?',
        answer: 'Yes. Most indexation issues stem from robots.txt blocks, accidental noindex tags, improper canonical tags, low internal link depth, or server timeout errors, all of which are resolved through technical SEO.'
      }
    ],
    relatedServices: [
      {
        name: 'On-Page SEO',
        path: '/services/on-page-seo/',
        description: 'Maximize crawl efficiency by pairing clean technical code with search-intent aligned content.'
      },
      {
        name: 'Off-Page SEO',
        path: '/services/off-page-seo/',
        description: 'Channel external backlink equity through a pristine, redirect-free internal link architecture.'
      },
      {
        name: 'Free SEO Audit',
        path: '/free-seo-audit/',
        description: 'Receive an initial technical snapshot of your website’s crawlability, speed, and index status.'
      }
    ]
  },

  'local-seo': {
    slug: 'local-seo',
    path: '/services/local-seo/',
    name: 'Local SEO & Google Business Profile',
    meta: PAGES_META['/services/local-seo/'],
    h1: 'Local SEO Services That Help Customers Find Your Business',
    shortDescription: 'Capture high-intent local buyers in your geographic area. Comprehensive Google Business Profile optimization, local citations, and geo-targeted ranking strategies.',
    heroBadge: 'Local Pack & Map Visibility',
    whatIsTitle: 'What Is Local SEO?',
    whatIsParagraphs: [
      'Local SEO is the process of optimizing your online presence to attract more business from relevant local searches on Google and Google Maps. When consumers search for products or services near them (e.g., "SEO agency in Lahore" or "plumbing service near me"), Google displays the localized 3-Pack and geo-targeted organic results.',
      'Winning local search visibility requires more than basic directory submissions. It demands an optimized Google Business Profile, consistent Name-Address-Phone (NAP) citations across local directories, localized on-page content, authentic customer review generation, and localized link signals.'
    ],
    deliverablesTitle: 'Our Local SEO Services',
    deliverables: [
      {
        title: 'Google Business Profile (GBP) Optimization',
        description: 'Complete setup and strategic optimization of your Google Business Profile to maximize visibility in Google Search and Google Maps.',
        details: [
          'Primary & secondary business category selection',
          'Keyword-rich, policy-compliant business description',
          'Service catalog & product listing configuration',
          'High-resolution geotagged photo uploads',
          'Regular Google Business Profile updates & posts'
        ]
      },
      {
        title: 'Local Citation & Directory Building',
        description: 'Creating and claiming consistent citations across national, regional, and industry-specific business directories.',
        details: [
          'Rigorous NAP (Name, Address, Phone) consistency',
          'Elimination of duplicate or outdated business listings',
          'Submissions to high-trust local directories in Pakistan & international markets'
        ]
      },
      {
        title: 'Local Keyword Research & Intent Mapping',
        description: 'Discovering localized queries, city-specific modifiers, and "near me" search terms that high-intent local customers use.',
        details: [
          'City, district, and neighbourhood search volumes',
          'Local competitive ranking analysis',
          'Service-area keyword clustering'
        ]
      },
      {
        title: 'Location Landing Page Optimization',
        description: 'Developing and optimizing dedicated landing pages for each service area, complete with localized schema, maps, and testimonials.',
        details: [
          'LocalBusiness schema integration',
          'Localized content, FAQs, and case summaries',
          'Embedded Google Map and driving direction signals'
        ]
      },
      {
        title: 'Local Link & Community Authority Building',
        description: 'Acquiring localized backlinks from regional chambers of commerce, local news outlets, local partner organizations, and sponsorships.',
        details: [
          'Local sponsorship outreach',
          'Regional business association links',
          'Geo-specific guest contributions'
        ]
      },
      {
        title: 'Review Strategy & Reputation Guidance',
        description: 'Implementing an ethical customer review generation system that builds authentic Google reviews without violating policies.',
        details: [
          'Review request email & SMS templates',
          'Negative review response best practices',
          'Review velocity monitoring'
        ]
      }
    ],
    processTitle: 'Our Local SEO Process',
    process: [
      {
        stepNumber: '01',
        title: 'Local Presence & Citation Audit',
        description: 'We audit your Google Business Profile, citation consistency across directories, and existing local rankings.'
      },
      {
        stepNumber: '02',
        title: 'Google Business Profile Enhancement',
        description: 'We optimize categories, descriptions, attributes, services, photos, and ensure verification status is secure.'
      },
      {
        stepNumber: '03',
        title: 'NAP Cleanup & Citation Distribution',
        description: 'We clean up inconsistent legacy citations and distribute accurate business data across authoritative local directories.'
      },
      {
        stepNumber: '04',
        title: 'Geo-Targeted Content & Schema',
        description: 'We optimize website location pages with structured LocalBusiness JSON-LD markup and localized headings.'
      },
      {
        stepNumber: '05',
        title: 'Local Review & Engagement Strategy',
        description: 'We help you launch customer review collection workflows to steadily build positive social proof.'
      },
      {
        stepNumber: '06',
        title: 'Map Pack Tracking & Monthly Reporting',
        description: 'We track localized ranking coordinates in Google Maps and deliver monthly phone call and direction request metrics.'
      }
    ],
    benefitsTitle: 'Why Local Search Matters for Your Business',
    benefits: [
      {
        title: 'Capture High-Intent Ready-to-Buy Leads',
        description: 'Local searchers have immediate commercial intent and frequently contact or visit businesses on the same day.'
      },
      {
        title: 'Prominent Google Maps 3-Pack Placement',
        description: 'Stand out above standard organic listings directly within the interactive Google Map pack on mobile and desktop.'
      },
      {
        title: 'Build Local Consumer Trust',
        description: 'Consistent business information, authentic customer reviews, and clear location data build confidence.'
      },
      {
        title: 'Dominate Multi-Location Markets',
        description: 'Scale your visibility across multiple cities, branches, or service territories with dedicated location pages.'
      }
    ],
    whyChooseRankWave: {
      title: 'Why Choose RankWave for Local SEO',
      points: [
        {
          title: 'Google Policy Compliance',
          desc: 'We follow Google Business Profile guidelines strictly, avoiding risky name stuffing that can cause profile suspensions.'
        },
        {
          title: 'Pakistan & Global Local Reach',
          desc: 'Deep understanding of local search landscapes in Pakistan (Lahore, Karachi, Islamabad) and international service areas.'
        },
        {
          title: 'Transparent Local Tracking',
          desc: 'Geo-grid ranking trackers showing exact position heatmaps across specific neighbourhoods and mile radiuses.'
        }
      ]
    },
    pricingTitle: 'Local SEO Pricing Approach',
    pricingDescription: 'Our local SEO packages are structured per business location, with multi-location enterprise discounts available.',
    pricingTiers: [
      {
        tierName: 'Single Location Starter',
        price: 'Starting from $300',
        period: 'per month',
        deliverables: [
          '1 Google Business Profile fully optimized',
          '20+ verified local citation submissions',
          'NAP consistency audit & cleanup',
          'LocalBusiness schema integration',
          'Monthly local ranking & calls report'
        ]
      },
      {
        tierName: 'Local Market Dominator',
        price: 'Starting from $550',
        period: 'per month',
        isPopular: true,
        deliverables: [
          'Comprehensive GBP optimization & weekly posts',
          '40+ high-authority citation submissions',
          'Dedicated location landing page optimization',
          'Local link outreach & review strategy guidance',
          'Geo-grid map ranking heatmap reporting'
        ]
      },
      {
        tierName: 'Multi-Location Enterprise',
        price: 'Custom Scope',
        period: 'custom per branch',
        deliverables: [
          '3+ physical locations or broad service areas',
          'Centralized citation management system',
          'Individual location page silos & local schema',
          'Dedicated local campaign manager'
        ]
      }
    ],
    faqs: [
      {
        id: 'loc-1',
        question: 'Why do you use "Google Business Profile" instead of "Google My Business (GMB)"?',
        answer: 'Google rebranded Google My Business (GMB) to Google Business Profile (GBP) in late 2021 to allow direct profile management directly in Google Search and Maps. We use current Google terminology.'
      },
      {
        id: 'loc-2',
        question: 'Can I do Local SEO if I operate a service business without a physical storefront?',
        answer: 'Yes. Google Business Profile allows Service Area Businesses (SABs) to define geographic delivery or service radiuses while hiding the physical residential address from public view.'
      },
      {
        id: 'loc-3',
        question: 'What is NAP consistency and why does it matter?',
        answer: 'NAP stands for Name, Address, and Phone number. When your NAP details match identically across Google, directories, and social profiles, search engines gain high confidence in your real-world business entity.'
      },
      {
        id: 'loc-4',
        question: 'How do customer reviews affect Google Maps rankings?',
        answer: 'Review count, star rating, keyword mentions inside reviews, and steady review velocity are significant ranking factors for Google Local Pack rankings.'
      }
    ],
    relatedServices: [
      {
        name: 'On-Page SEO',
        path: '/services/on-page-seo/',
        description: 'Optimize your location pages with geo-targeted headings, content, and conversion forms.'
      },
      {
        name: 'Technical SEO',
        path: '/services/technical-seo/',
        description: 'Implement LocalBusiness structured schema to communicate your address, hours, and geo-coordinates.'
      },
      {
        name: 'SEO Packages',
        path: '/seo-packages/',
        description: 'Bundle local SEO with ongoing on-page and off-page optimization for maximum market coverage.'
      }
    ]
  }
};

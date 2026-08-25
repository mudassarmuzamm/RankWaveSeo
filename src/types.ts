/**
 * Core TypeScript definitions for RankWave SEO Agency
 */

export interface SEOMeta {
  title: string;
  description: string;
  canonical: string;
  h1: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  ogTitle?: string;
  ogDescription?: string;
  schemaType?: 'Organization' | 'WebPage' | 'Service' | 'Article' | 'FAQPage';
}

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface ServiceDeliverable {
  title: string;
  description: string;
  details?: string[];
  iconName?: string;
}

export interface ServiceProcessStep {
  stepNumber: string;
  title: string;
  description: string;
}

export interface ServiceBenefit {
  title: string;
  description: string;
}

export interface ServiceDetail {
  slug: string;
  path: string;
  name: string;
  meta: SEOMeta;
  h1: string;
  shortDescription: string;
  heroBadge: string;
  whatIsTitle: string;
  whatIsParagraphs: string[];
  deliverablesTitle: string;
  deliverables: ServiceDeliverable[];
  processTitle: string;
  process: ServiceProcessStep[];
  benefitsTitle: string;
  benefits: ServiceBenefit[];
  whyChooseRankWave: {
    title: string;
    points: { title: string; desc: string }[];
  };
  pricingTitle: string;
  pricingDescription: string;
  pricingTiers: {
    tierName: string;
    price: string;
    period: string;
    deliverables: string[];
    isPopular?: boolean;
  }[];
  faqs: FAQItem[];
  relatedServices: {
    name: string;
    path: string;
    description: string;
  }[];
}

export interface SEOPackageTier {
  id: string;
  name: string;
  tagline: string;
  targetAudience: string;
  startingPrice: string;
  priceNote: string;
  popular?: boolean;
  idealFor: string[];
  deliverables: {
    category: string;
    features: string[];
  }[];
  monthlyDeliverables: string[];
  reportingCadence: string;
}

export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  clientType: string;
  industry: string;
  businessContext: string;
  challenge: string;
  strategy: string;
  implementation: {
    phase: string;
    actions: string[];
  }[];
  results: {
    label: string;
    value: string;
    context: string;
  }[];
  timeline: string;
  keyLearnings: string[];
  relatedServicePath: string;
  relatedServiceName: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  path: string;
  title: string;
  h1: string;
  metaDescription: string;
  primaryKeyword: string;
  category: 'On-Page SEO' | 'Technical SEO' | 'Off-Page SEO' | 'Local SEO' | 'SEO Strategy' | 'Keyword Research';
  author: {
    name: string;
    role: string;
  };
  publishDate: string;
  readTime: string;
  excerpt: string;
  keyTakeaways: string[];
  contentSections: {
    h2: string;
    paragraphs: string[];
    subSections?: {
      h3: string;
      content: string[];
    }[];
  }[];
  relatedServices: {
    name: string;
    path: string;
  }[];
}

export interface AuditLeadFormData {
  websiteUrl: string;
  fullName: string;
  email: string;
  phoneWhatsapp: string;
  businessType: string;
  primaryGoal: string;
  competitorUrl?: string;
  notes?: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phoneWhatsapp: string;
  websiteUrl: string;
  selectedService: string;
  monthlyBudget?: string;
  message: string;
}

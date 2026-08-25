import React, { useEffect } from 'react';
import { SEOMeta, BreadcrumbItem, FAQItem } from '../types';
import { BASE_URL } from '../context/RouterContext';

interface SEOHeadProps {
  meta: SEOMeta;
  breadcrumbs?: BreadcrumbItem[];
  faqs?: FAQItem[];
  articleData?: {
    publishDate: string;
    authorName: string;
  };
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  meta,
  breadcrumbs,
  faqs,
  articleData,
}) => {
  useEffect(() => {
    // 1. Update Document Title
    document.title = meta.title;

    // 2. Helper to set or create meta tag
    const setMetaTag = (attrName: string, attrVal: string, content: string) => {
      let element = document.querySelector(`meta[${attrName}="${attrVal}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrVal);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 3. Helper for canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', meta.canonical);

    // 4. Update basic & OG meta tags
    setMetaTag('name', 'description', meta.description);
    setMetaTag('name', 'keywords', [meta.primaryKeyword, ...meta.secondaryKeywords].join(', '));
    setMetaTag('property', 'og:title', meta.ogTitle || meta.title);
    setMetaTag('property', 'og:description', meta.ogDescription || meta.description);
    setMetaTag('property', 'og:url', meta.canonical);
    setMetaTag('property', 'og:type', meta.schemaType === 'Article' ? 'article' : 'website');
    setMetaTag('name', 'twitter:title', meta.ogTitle || meta.title);
    setMetaTag('name', 'twitter:description', meta.ogDescription || meta.description);

    // 5. Inject Structured Data (JSON-LD)
    const existingScripts = document.querySelectorAll('script[data-schema="rankwave-dynamic"]');
    existingScripts.forEach((el) => el.remove());

    const schemas: object[] = [];

    // Base Organization Schema
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'RankWave SEO',
      url: BASE_URL,
      logo: `${BASE_URL}/logo.png`,
      description: 'Professional SEO agency in Pakistan providing technical, on-page, off-page, and local search optimization services.',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'PK',
      },
      sameAs: [
        'https://twitter.com/rankwaveseo',
        'https://linkedin.com/company/rankwaveseo',
      ],
    });

    // BreadcrumbList Schema if breadcrumbs exist
    if (breadcrumbs && breadcrumbs.length > 0) {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((crumb, idx) => ({
          '@type': 'ListItem',
          position: idx + 1,
          name: crumb.name,
          item: `${BASE_URL}${crumb.path === '/' ? '' : crumb.path}`,
        })),
      });
    }

    // FAQPage Schema if FAQs exist on the page
    if (faqs && faqs.length > 0) {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      });
    }

    // Specific schema per page type
    if (meta.schemaType === 'Service') {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: meta.h1,
        provider: {
          '@type': 'Organization',
          name: 'RankWave SEO',
          url: BASE_URL,
        },
        description: meta.description,
        areaServed: ['Pakistan', 'Global'],
        serviceType: meta.primaryKeyword,
      });
    } else if (meta.schemaType === 'Article' && articleData) {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: meta.h1,
        description: meta.description,
        datePublished: articleData.publishDate,
        author: {
          '@type': 'Person',
          name: articleData.authorName,
        },
        publisher: {
          '@type': 'Organization',
          name: 'RankWave SEO',
          url: BASE_URL,
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': meta.canonical,
        },
      });
    }

    // Create script tag
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-schema', 'rankwave-dynamic');
    script.textContent = JSON.stringify(schemas.length === 1 ? schemas[0] : schemas);
    document.head.appendChild(script);

    return () => {
      // Clean up script on unmount
      script.remove();
    };
  }, [meta, breadcrumbs, faqs, articleData]);

  return null;
};

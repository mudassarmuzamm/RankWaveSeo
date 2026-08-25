import React from 'react';
import { useRouter } from '../context/RouterContext';
import { PAGES_META } from '../data/pagesMeta';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { PageHero } from '../components/PageHero';
import { ShieldCheck } from 'lucide-react';

export const PrivacyPolicyPage: React.FC = () => {
  const { navigate } = useRouter();
  const meta = PAGES_META['/privacy-policy/'];

  return (
    <>
      <SEOHead meta={meta} />
      <Breadcrumbs />

      <PageHero
        badge="Legal Transparency"
        h1="Privacy Policy"
        subtitle="Last Updated: January 2026. This Privacy Policy outlines how RankWave SEO collects, uses, protects, and handles personal data and client information across our website and services."
      />

      <article className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-sm text-slate-700 leading-relaxed">
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              1. Information We Collect
            </h2>
            <p>
              RankWave SEO collects information provided directly by users and website visitors when submitting inquiry forms, requesting free SEO audits, subscribing to newsletters, or engaging our consulting services.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-600">
              <li><strong>Contact Information:</strong> Full name, corporate email address, telephone/WhatsApp contact numbers, and company affiliation.</li>
              <li><strong>Website Diagnostics:</strong> Domain URLs, primary commercial competitors, target geographical locations, and existing analytics or Search Console access credentials provided under client authorization.</li>
              <li><strong>Automated Telemetry:</strong> Standard browser request data including IP addresses, browser types, referring pages, and session durations collected via privacy-compliant analytics tools.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              2. How We Use Your Information
            </h2>
            <p>
              We utilize collected information strictly for legitimate commercial and diagnostic purposes, including:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-600">
              <li>Conducting technical and on-page search engine optimization audits.</li>
              <li>Delivering requested custom proposals, strategy roadmaps, and monthly performance deliverables.</li>
              <li>Communicating project milestones, campaign updates, and scheduled strategy consultations.</li>
              <li>Maintaining operational compliance with applicable data protection regulations.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              3. Data Protection & Confidentiality
            </h2>
            <p>
              We treat all client proprietary data, keyword strategies, traffic analytics, and technical architectures with the highest confidentiality standards. We never sell, rent, or lease client data to third-party brokers, advertisers, or competing organizations.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              4. Cookies and Analytical Tracking
            </h2>
            <p>
              Our website uses essential and analytical cookies to remember user preferences and measure overall site usability. You may configure your browser settings to refuse cookies; however, certain diagnostic features may function with reduced performance.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              5. Your Data Rights
            </h2>
            <p>
              You have the right to request access to any personal data held by RankWave SEO, request corrections of inaccuracies, or request complete deletion of your records from our systems by contacting us at contact@rankwaveseo.com.
            </p>
          </section>

          <section className="space-y-4 pt-6 border-t border-slate-200">
            <h2 className="text-xl font-bold text-slate-900">
              6. Contact Information
            </h2>
            <p>
              If you have any questions regarding this Privacy Policy, please contact:
            </p>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600">
              <strong className="text-slate-900 block font-semibold mb-1">RankWave SEO Data Officer</strong>
              <span>Email: contact@rankwaveseo.com</span><br />
              <span>Headquarters: Lahore, Punjab, Pakistan</span>
            </div>
          </section>
        </div>
      </article>
    </>
  );
};

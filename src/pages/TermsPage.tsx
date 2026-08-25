import React from 'react';
import { useRouter } from '../context/RouterContext';
import { PAGES_META } from '../data/pagesMeta';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { PageHero } from '../components/PageHero';

export const TermsPage: React.FC = () => {
  const { navigate } = useRouter();
  const meta = PAGES_META['/terms-and-conditions/'];

  return (
    <>
      <SEOHead meta={meta} />
      <Breadcrumbs />

      <PageHero
        badge="Legal Terms"
        h1="Terms and Conditions"
        subtitle="Last Updated: January 2026. These Terms and Conditions govern your access to the RankWave SEO website and the terms of our search marketing consulting engagements."
      />

      <article className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-sm text-slate-700 leading-relaxed">
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing the RankWave SEO website (rankwaveseo.com) or engaging our search marketing services, you agree to be bound by these Terms and Conditions and all applicable laws and regulations.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              2. Scope of SEO Services & Deliverables
            </h2>
            <p>
              RankWave SEO provides professional search engine optimization consulting, technical audits, on-page optimization, local search setup, and digital PR outreach. Specific deliverables, keyword volumes, and reporting schedules are explicitly detailed in individual client Service Agreements or selected monthly retainers.
            </p>
            <p>
              <strong>Search Engine Algorithm Disclaimers:</strong> While RankWave SEO employs industry-leading, 100% white-hat methodologies, Google and other search engines continuously modify their ranking algorithms. We do not guarantee permanent or specific numerical rank placements, as algorithmic evaluations involve dynamic third-party competitive factors.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              3. Client Responsibilities
            </h2>
            <p>
              Successful SEO campaigns depend on timely collaboration. Clients agree to provide reasonable access to web analytics, Search Console properties, CMS platforms, and timely approvals for on-page content updates.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              4. Payment, Invoicing, & Cancellation
            </h2>
            <p>
              Monthly SEO retainers are billed at the beginning of each 30-day billing cycle. Clients may cancel or adjust their monthly engagement with 14 days' written notice prior to the start of the subsequent billing period.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              5. Intellectual Property & Asset Ownership
            </h2>
            <p>
              Upon receipt of full payment for completed services, all bespoke content, custom code snippets, and strategy documents created specifically for the client become the sole property of the client.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              6. Limitation of Liability
            </h2>
            <p>
              RankWave SEO shall not be held liable for indirect, incidental, or consequential damages resulting from third-party search engine algorithmic changes, server hosting outages, or unapproved website alterations made by third-party developer teams.
            </p>
          </section>

          <section className="space-y-4 pt-6 border-t border-slate-200">
            <h2 className="text-xl font-bold text-slate-900">
              7. Governing Law
            </h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of Pakistan, without regard to its conflict of law provisions.
            </p>
          </section>
        </div>
      </article>
    </>
  );
};

import React from 'react';
import { useRouter } from '../context/RouterContext';
import { COMPANY_INFO } from '../data/companyData';
import {
  TrendingUp,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <footer className="w-full bg-slate-950 border-t border-slate-800 text-slate-300 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand & Mission Column */}
          <div className="lg:col-span-2 space-y-4">
            <button
              type="button"
              id="footer-brand-btn"
              onClick={() => navigate('/')}
              className="flex items-center gap-2.5 text-left focus:outline-none group"
            >
              <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
                <div className="w-4 h-4 border-2 border-white rounded-sm rotate-45 flex items-center justify-center">
                  <TrendingUp className="w-2.5 h-2.5 text-white -rotate-45" />
                </div>
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-white flex items-center">
                  RankWave<span className="text-blue-500">SEO</span>
                </span>
                <span className="block text-[11px] text-slate-400 font-medium">
                  Search Engine Optimization Agency
                </span>
              </div>
            </button>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              RankWave SEO delivers engineering-grounded, white-hat search engine optimization in Pakistan and worldwide. We build sustainable organic search visibility through technical rigor, search intent mapping, and high-trust authority outreach.
            </p>

            <div className="pt-2 flex flex-col gap-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
                <span>100% White-Hat Search Strategies</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Transparent Search Console Reporting</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href={COMPANY_INFO.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-blue-500 hover:text-white text-xs font-semibold text-slate-400 transition-colors flex items-center gap-1.5"
              >
                <span>Facebook</span>
              </a>
              <a
                href={COMPANY_INFO.socials.pinterest}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-blue-500 hover:text-white text-xs font-semibold text-slate-400 transition-colors flex items-center gap-1.5"
              >
                <span>Pinterest</span>
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-200 block">
              SEO Services
            </span>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  type="button"
                  id="footer-svc-onpage"
                  onClick={() => navigate('/services/on-page-seo/')}
                  className="text-slate-400 hover:text-blue-400 transition-colors text-left"
                >
                  On-Page SEO
                </button>
              </li>
              <li>
                <button
                  type="button"
                  id="footer-svc-offpage"
                  onClick={() => navigate('/services/off-page-seo/')}
                  className="text-slate-400 hover:text-blue-400 transition-colors text-left"
                >
                  Off-Page SEO
                </button>
              </li>
              <li>
                <button
                  type="button"
                  id="footer-svc-tech"
                  onClick={() => navigate('/services/technical-seo/')}
                  className="text-slate-400 hover:text-blue-400 transition-colors text-left"
                >
                  Technical SEO
                </button>
              </li>
              <li>
                <button
                  type="button"
                  id="footer-svc-local"
                  onClick={() => navigate('/services/local-seo/')}
                  className="text-slate-400 hover:text-blue-400 transition-colors text-left"
                >
                  Local SEO & Google Business
                </button>
              </li>
              <li>
                <button
                  type="button"
                  id="footer-svc-hub"
                  onClick={() => navigate('/services/')}
                  className="text-blue-400 hover:text-blue-300 transition-colors text-left font-medium flex items-center gap-1 text-xs pt-1"
                >
                  View All Services <ArrowRight className="w-3 h-3" />
                </button>
              </li>
            </ul>
          </div>

          {/* Company & Resources */}
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-200 block">
              Company & Strategy
            </span>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  type="button"
                  id="footer-link-about"
                  onClick={() => navigate('/about/')}
                  className="text-slate-400 hover:text-blue-400 transition-colors text-left"
                >
                  About RankWave
                </button>
              </li>
              <li>
                <button
                  type="button"
                  id="footer-link-packages"
                  onClick={() => navigate('/seo-packages/')}
                  className="text-slate-400 hover:text-blue-400 transition-colors text-left"
                >
                  SEO Packages & Pricing
                </button>
              </li>
              <li>
                <button
                  type="button"
                  id="footer-link-cases"
                  onClick={() => navigate('/case-studies/')}
                  className="text-slate-400 hover:text-blue-400 transition-colors text-left"
                >
                  Case Studies & Results
                </button>
              </li>
              <li>
                <button
                  type="button"
                  id="footer-link-blog"
                  onClick={() => navigate('/blog/')}
                  className="text-slate-400 hover:text-blue-400 transition-colors text-left"
                >
                  SEO Blog & Guides
                </button>
              </li>
              <li>
                <button
                  type="button"
                  id="footer-link-audit"
                  onClick={() => navigate('/free-seo-audit/')}
                  className="text-blue-400 hover:text-blue-300 transition-colors text-left font-medium flex items-center gap-1"
                >
                  Free SEO Audit Tool
                </button>
              </li>
            </ul>
          </div>

          {/* Direct Consultation / Contact Column */}
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-200 block">
              Direct Contact
            </span>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span className="text-xs leading-relaxed">
                  {COMPANY_INFO.address.full}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-blue-400 transition-colors text-xs">
                  {COMPANY_INFO.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <a href={`tel:${COMPANY_INFO.phoneTel}`} className="hover:text-blue-400 transition-colors text-xs font-medium">
                  {COMPANY_INFO.phone} ({COMPANY_INFO.phoneFormatted})
                </a>
              </li>
              <li>
                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-emerald-400 hover:text-emerald-300 transition-colors font-medium pt-1"
                >
                  <span>Direct WhatsApp Chat</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </li>
              <li className="pt-2">
                <button
                  type="button"
                  id="footer-contact-cta"
                  onClick={() => navigate('/contact/')}
                  className="w-full py-2 px-3 rounded-lg text-xs font-semibold text-center text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-sm"
                >
                  Schedule Strategy Call
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} RankWave SEO. All rights reserved. Built for organic search excellence.</p>
          <div className="flex items-center gap-4 flex-wrap">
            <button
              type="button"
              id="footer-legal-privacy"
              onClick={() => navigate('/privacy-policy/')}
              className="hover:text-slate-300 transition-colors"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              type="button"
              id="footer-legal-terms"
              onClick={() => navigate('/terms-and-conditions/')}
              className="hover:text-slate-300 transition-colors"
            >
              Terms & Conditions
            </button>
            <span>•</span>
            <a
              href="/sitemap.xml"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-300 transition-colors"
            >
              XML Sitemap
            </a>
            <span>•</span>
            <a
              href="/robots.txt"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-300 transition-colors"
            >
              Robots.txt
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

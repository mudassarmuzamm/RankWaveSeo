import React, { useState } from 'react';
import { useRouter } from '../context/RouterContext';
import { PAGES_META } from '../data/pagesMeta';
import { CONTACT_FAQS } from '../data/faqData';
import { SEOHead } from '../components/SEOHead';
import { PageHero } from '../components/PageHero';
import { FAQAccordion } from '../components/FAQAccordion';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Building2,
  Calendar,
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const { navigate } = useRouter();
  const meta = PAGES_META['/contact/'];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneWhatsapp: '',
    websiteUrl: '',
    service: 'Full-Service Monthly SEO Retainer',
    monthlyTraffic: 'Under 5,000 visitors / mo',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 900);
  };

  return (
    <>
      <SEOHead meta={meta} faqs={CONTACT_FAQS} />

      <PageHero
        badge="Direct Strategic Inquiry"
        h1="Contact RankWave SEO: Start Your Search Growth"
        subtitle="Speak directly with senior search engine optimization specialists. Tell us about your website, business objectives, and current growth obstacles."
      />

      {/* Main Contact Grid */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-sm">
              <div className="mb-8">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200 inline-block mb-2">
                  Inquiry Submission
                </span>
                <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                  Get in Touch With Our Strategy Team
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Fill out the form below. We will review your website and reply within 24 business hours.
                </p>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-in zoom-in-95 duration-200">
                  <div className="w-16 h-16 rounded-full bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Thank You, {formData.name}!
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Your inquiry has been routed to our senior search strategist. We have received your project details and will email you at <strong className="text-blue-600">{formData.email}</strong> shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phoneWhatsapp: '',
                        websiteUrl: '',
                        service: 'Full-Service Monthly SEO Retainer',
                        monthlyTraffic: 'Under 5,000 visitors / mo',
                        message: '',
                      });
                    }}
                    className="mt-4 text-xs font-semibold text-blue-600 hover:underline inline-block"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        placeholder="e.g. Mudassar Ali"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-phone" className="block text-xs font-semibold text-slate-700 mb-1">
                        Phone / WhatsApp (Optional)
                      </label>
                      <input
                        id="contact-phone"
                        type="text"
                        placeholder="+92 300 1234567"
                        value={formData.phoneWhatsapp}
                        onChange={(e) => setFormData({ ...formData, phoneWhatsapp: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-website" className="block text-xs font-semibold text-slate-700 mb-1">
                        Website URL
                      </label>
                      <input
                        id="contact-website"
                        type="text"
                        placeholder="https://yourwebsite.com"
                        value={formData.websiteUrl}
                        onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-service" className="block text-xs font-semibold text-slate-700 mb-1">
                        Service of Interest
                      </label>
                      <select
                        id="contact-service"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white"
                      >
                        <option value="Full-Service Monthly SEO Retainer">Full-Service Monthly SEO Retainer</option>
                        <option value="On-Page SEO Optimization Sprint">On-Page SEO Optimization Sprint</option>
                        <option value="Off-Page Editorial Link Outreach">Off-Page Editorial Link Outreach</option>
                        <option value="Technical SEO & Core Web Vitals Audit">Technical SEO & Core Web Vitals Audit</option>
                        <option value="Local SEO & Google Business 3-Pack">Local SEO & Google Business 3-Pack</option>
                        <option value="Custom Enterprise Search Scope">Custom Enterprise Search Scope</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="contact-traffic" className="block text-xs font-semibold text-slate-700 mb-1">
                        Current Monthly Organic Traffic
                      </label>
                      <select
                        id="contact-traffic"
                        value={formData.monthlyTraffic}
                        onChange={(e) => setFormData({ ...formData, monthlyTraffic: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white"
                      >
                        <option value="Under 1,000 visitors / mo (New Website)">Under 1,000 visitors / mo (New Website)</option>
                        <option value="1,000 - 5,000 visitors / mo">1,000 - 5,000 visitors / mo</option>
                        <option value="5,000 - 25,000 visitors / mo">5,000 - 25,000 visitors / mo</option>
                        <option value="25,000+ visitors / mo (Established)">25,000+ visitors / mo (Established)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-700 mb-1">
                      Primary Goal or Current Obstacle
                    </label>
                    <textarea
                      id="contact-message"
                      rows={3}
                      placeholder="Tell us about specific target queries, past ranking fluctuations, or technical obstacles..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white"
                    />
                  </div>

                  <button
                    type="submit"
                    id="submit-contact-form-btn"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl font-semibold text-sm text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-500/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span>Sending inquiry...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Strategic Consultation Request</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Direct Contact Information */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200 inline-block mb-2">
                    Direct Channels
                  </span>
                  <h2 className="text-xl font-bold text-slate-900">
                    Direct Contact Information
                  </h2>
                </div>

                <div className="space-y-4 text-xs sm:text-sm">
                  <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm">
                    <div className="p-2 rounded-lg bg-blue-50 text-blue-600 shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-slate-500 block text-xs">Official Email</span>
                      <a
                        href="mailto:contact@rankwaveseo.com"
                        className="font-semibold text-slate-900 hover:text-blue-600 transition-colors"
                      >
                        contact@rankwaveseo.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm">
                    <div className="p-2 rounded-lg bg-blue-50 text-blue-600 shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-slate-500 block text-xs">Phone & WhatsApp Inquiries</span>
                      <a
                        href="tel:+923001234567"
                        className="font-semibold text-slate-900 hover:text-blue-600 transition-colors"
                      >
                        +92 300 1234567
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm">
                    <div className="p-2 rounded-lg bg-blue-50 text-blue-600 shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-slate-500 block text-xs">Headquarters</span>
                      <span className="font-semibold text-slate-900">
                        Lahore, Punjab, Pakistan
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm">
                    <div className="p-2 rounded-lg bg-blue-50 text-blue-600 shrink-0">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-slate-500 block text-xs">Business Hours</span>
                      <span className="font-semibold text-slate-900">
                        Monday – Friday: 9:00 AM – 6:00 PM (PKT)
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Instant Free Audit Banner */}
              <div className="p-6 rounded-2xl bg-blue-50/60 border border-blue-200 shadow-sm">
                <div className="flex items-center gap-2 text-blue-700 text-xs font-bold uppercase tracking-wider mb-2">
                  <Sparkles className="w-4 h-4" />
                  <span>Looking for an Instant Diagnostic?</span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  Try our Free Interactive Audit Checker
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Run a real-time heuristic assessment of your SSL, sitemap directives, heading hierarchies, and Core Web Vitals.
                </p>
                <button
                  type="button"
                  onClick={() => navigate('/free-seo-audit/')}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>Launch Free Audit Tool</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Happens Next? */}
      <section className="py-16 sm:py-20 bg-slate-50/60 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200 inline-block mb-3">
              Onboarding Process
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              What Happens Next?
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              A transparent, 3-step consultation pathway with zero high-pressure sales tactics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <span className="text-2xl font-black text-blue-600/20 font-mono block mb-2">01</span>
              <h3 className="text-base font-bold text-slate-900 mb-2">Inquiry Review (Within 24h)</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                A senior search strategist manually inspects your domain and reviews your stated growth objectives.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <span className="text-2xl font-black text-blue-600/20 font-mono block mb-2">02</span>
              <h3 className="text-base font-bold text-slate-900 mb-2">Initial Diagnostic Scan</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We generate a baseline evaluation of your index health, top ranking keywords, and competitor gap opportunities.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <span className="text-2xl font-black text-blue-600/20 font-mono block mb-2">03</span>
              <h3 className="text-base font-bold text-slate-900 mb-2">Strategy Consultation</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We schedule a direct call to walk you through findings, answer technical questions, and present a custom roadmap.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact FAQs */}
      <FAQAccordion items={CONTACT_FAQS} />
    </>
  );
};

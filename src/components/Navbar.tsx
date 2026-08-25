import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from '../context/RouterContext';
import {
  Menu,
  X,
  ChevronDown,
  TrendingUp,
  FileCode2,
  Share2,
  Cpu,
  MapPin,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const { currentPath, navigate } = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setMobileServicesOpen(false);
  }, [currentPath]);

  const serviceItems = [
    {
      name: 'On-Page SEO',
      path: '/services/on-page-seo/',
      desc: 'Search intent, headings, metadata, and content depth',
      icon: FileCode2,
      badge: 'Intent Mapping',
      iconBg: 'bg-blue-50 text-blue-600',
    },
    {
      name: 'Off-Page SEO',
      path: '/services/off-page-seo/',
      desc: 'Editorial link outreach, brand mentions, and PR',
      icon: Share2,
      badge: 'Authority',
      iconBg: 'bg-indigo-50 text-indigo-600',
    },
    {
      name: 'Technical SEO',
      path: '/services/technical-seo/',
      desc: 'Crawlability, Core Web Vitals, speed, and schema',
      icon: Cpu,
      badge: 'Architecture',
      iconBg: 'bg-teal-50 text-teal-600',
    },
    {
      name: 'Local SEO & Google Business',
      path: '/services/local-seo/',
      desc: 'Google Business Profile, local citations, and 3-Pack',
      icon: MapPin,
      badge: 'Local Pack',
      iconBg: 'bg-orange-50 text-orange-600',
    },
  ];

  const isServiceActive = currentPath.startsWith('/services/');

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <button
            type="button"
            id="brand-logo-btn"
            onClick={() => navigate('/')}
            className="flex items-center gap-2.5 group text-left focus:outline-none"
          >
            <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <div className="w-4 h-4 border-2 border-white rounded-sm rotate-45 flex items-center justify-center">
                <TrendingUp className="w-2.5 h-2.5 text-white -rotate-45" />
              </div>
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-slate-900 flex items-center">
                RankWave<span className="text-blue-600">SEO</span>
              </span>
              <span className="block text-[11px] text-slate-500 -mt-0.5 font-medium tracking-wide">
                Organic Search Agency
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            <button
              type="button"
              id="nav-home-btn"
              onClick={() => navigate('/')}
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                currentPath === '/'
                  ? 'text-blue-600 bg-blue-50/80 font-semibold'
                  : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
              }`}
            >
              Home
            </button>

            <button
              type="button"
              id="nav-about-btn"
              onClick={() => navigate('/about/')}
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                currentPath === '/about/'
                  ? 'text-blue-600 bg-blue-50/80 font-semibold'
                  : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
              }`}
            >
              About
            </button>

            {/* Services Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <div className="flex items-center">
                <button
                  type="button"
                  id="nav-services-btn"
                  onClick={() => navigate('/services/')}
                  className={`px-3 py-2 text-sm font-medium rounded-l-lg transition-colors ${
                    isServiceActive
                      ? 'text-blue-600 bg-blue-50/80 font-semibold'
                      : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
                  }`}
                >
                  Services
                </button>
                <button
                  type="button"
                  id="nav-services-toggle-btn"
                  onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                  aria-expanded={servicesDropdownOpen}
                  aria-haspopup="true"
                  className={`p-2 text-sm rounded-r-lg transition-colors ${
                    isServiceActive
                      ? 'text-blue-600 bg-blue-50/80'
                      : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
                  }`}
                >
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      servicesDropdownOpen ? 'rotate-180 text-blue-600' : ''
                    }`}
                  />
                </button>
              </div>

              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-84 bg-white border border-slate-200 rounded-2xl shadow-2xl p-2.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-3 py-2 border-b border-slate-100 mb-1 flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Core SEO Capabilities
                    </span>
                    <button
                      type="button"
                      onClick={() => navigate('/services/')}
                      className="text-xs text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-1"
                    >
                      Hub Overview <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                  <div className="space-y-1">
                    {serviceItems.map((item) => {
                      const Icon = item.icon;
                      const isActive = currentPath === item.path;
                      return (
                        <button
                          key={item.path}
                          type="button"
                          onClick={() => {
                            setServicesDropdownOpen(false);
                            navigate(item.path);
                          }}
                          className={`w-full text-left p-2.5 rounded-xl flex items-start gap-3 transition-colors ${
                            isActive
                              ? 'bg-blue-50/80 text-blue-900 border border-blue-100'
                              : 'hover:bg-slate-50 text-slate-700'
                          }`}
                        >
                          <div className={`p-2 rounded-xl shrink-0 mt-0.5 ${item.iconBg}`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-bold text-slate-900">
                                {item.name}
                              </span>
                              <span className="text-[10px] uppercase font-bold text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded border border-blue-100">
                                {item.badge}
                              </span>
                            </div>
                            <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">
                              {item.desc}
                            </p>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            <button
              type="button"
              id="nav-packages-btn"
              onClick={() => navigate('/seo-packages/')}
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                currentPath === '/seo-packages/'
                  ? 'text-blue-600 bg-blue-50/80 font-semibold'
                  : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
              }`}
            >
              SEO Packages
            </button>

            <button
              type="button"
              id="nav-casestudies-btn"
              onClick={() => navigate('/case-studies/')}
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                currentPath === '/case-studies/'
                  ? 'text-blue-600 bg-blue-50/80 font-semibold'
                  : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
              }`}
            >
              Case Studies
            </button>

            <button
              type="button"
              id="nav-blog-btn"
              onClick={() => navigate('/blog/')}
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                currentPath.startsWith('/blog/')
                  ? 'text-blue-600 bg-blue-50/80 font-semibold'
                  : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
              }`}
            >
              Blog
            </button>

            <button
              type="button"
              id="nav-contact-btn"
              onClick={() => navigate('/contact/')}
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                currentPath === '/contact/'
                  ? 'text-blue-600 bg-blue-50/80 font-semibold'
                  : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Primary CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              type="button"
              id="header-free-audit-cta"
              onClick={() => navigate('/free-seo-audit/')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-500/20 active:scale-[0.98] transition-all"
            >
              <Sparkles className="w-4 h-4 text-blue-200" />
              Free SEO Audit
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              type="button"
              id="mobile-audit-quick-btn"
              onClick={() => navigate('/free-seo-audit/')}
              className="px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 rounded-lg shadow-sm"
            >
              Free Audit
            </button>
            <button
              type="button"
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3 animate-in slide-in-from-top-4 duration-200 max-h-[85vh] overflow-y-auto">
          <div className="space-y-1">
            <button
              type="button"
              onClick={() => navigate('/')}
              className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium ${
                currentPath === '/' ? 'bg-blue-50 text-blue-600 font-semibold' : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              Home
            </button>

            <button
              type="button"
              onClick={() => navigate('/about/')}
              className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium ${
                currentPath === '/about/' ? 'bg-blue-50 text-blue-600 font-semibold' : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              About RankWave
            </button>

            {/* Mobile Services Accordion */}
            <div className="border border-slate-200 rounded-xl p-2 bg-slate-50/50">
              <div className="flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => navigate('/services/')}
                  className="text-left text-sm font-semibold text-blue-600 py-1"
                >
                  SEO Services Overview
                </button>
                <button
                  type="button"
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="p-1 text-slate-500 hover:text-slate-900"
                  aria-label="Expand Services"
                >
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      mobileServicesOpen ? 'rotate-180 text-blue-600' : ''
                    }`}
                  />
                </button>
              </div>

              {mobileServicesOpen && (
                <div className="mt-2 pt-2 border-t border-slate-200 space-y-1.5">
                  {serviceItems.map((item) => (
                    <button
                      key={item.path}
                      type="button"
                      onClick={() => navigate(item.path)}
                      className={`w-full text-left px-2.5 py-2 rounded-lg text-xs font-medium flex items-center justify-between ${
                        currentPath === item.path
                          ? 'bg-blue-50 text-blue-700 font-semibold'
                          : 'text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      <span>{item.name}</span>
                      <span className="text-[10px] text-blue-700 bg-blue-100/60 px-1.5 py-0.5 rounded font-semibold">
                        {item.badge}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              type="button"
              onClick={() => navigate('/seo-packages/')}
              className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium ${
                currentPath === '/seo-packages/' ? 'bg-blue-50 text-blue-600 font-semibold' : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              SEO Packages & Pricing
            </button>

            <button
              type="button"
              onClick={() => navigate('/case-studies/')}
              className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium ${
                currentPath === '/case-studies/' ? 'bg-blue-50 text-blue-600 font-semibold' : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              Case Studies
            </button>

            <button
              type="button"
              onClick={() => navigate('/blog/')}
              className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium ${
                currentPath.startsWith('/blog/') ? 'bg-blue-50 text-blue-600 font-semibold' : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              SEO Blog & Guides
            </button>

            <button
              type="button"
              onClick={() => navigate('/contact/')}
              className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium ${
                currentPath === '/contact/' ? 'bg-blue-50 text-blue-600 font-semibold' : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              Contact Us
            </button>
          </div>

          <div className="pt-3 border-t border-slate-200">
            <button
              type="button"
              id="mobile-menu-free-audit-btn"
              onClick={() => navigate('/free-seo-audit/')}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-md"
            >
              <Sparkles className="w-4 h-4" />
              Request Free SEO Audit
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

import React, { useState } from 'react';
import { useRouter } from '../context/RouterContext';
import { PAGES_META } from '../data/pagesMeta';
import { BLOG_POSTS } from '../data/blogData';
import { SEOHead } from '../components/SEOHead';
import { PageHero } from '../components/PageHero';
import { BlogCard } from '../components/BlogCard';
import { CTASection } from '../components/CTASection';
import { Search, Sparkles, BookOpen, Tag } from 'lucide-react';

export const BlogIndexPage: React.FC = () => {
  const { navigate } = useRouter();
  const meta = PAGES_META['/blog/'];
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'On-Page SEO', 'Technical SEO', 'Off-Page SEO', 'Local SEO'];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory =
      selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <SEOHead meta={meta} />

      <PageHero
        badge="Search Intelligence Hub"
        h1="SEO Guides, Strategies, and Industry Insights"
        subtitle="Practical, developer-tested search engine optimization tutorials, technical deep-dives, and strategic playbooks written by senior search practitioners."
        primaryAction={{
          label: 'Request Free Website Audit',
          onClick: () => navigate('/free-seo-audit/'),
          id: 'blog-hero-audit-cta',
        }}
        secondaryAction={{
          label: 'Explore Our Services',
          onClick: () => navigate('/services/'),
          id: 'blog-hero-services-cta',
        }}
      />

      {/* Filter & Search Bar */}
      <section className="py-8 bg-white border-b border-slate-200 sticky top-16 z-20 backdrop-blur-md bg-white/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Category Pills */}
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all whitespace-nowrap ${
                    selectedCategory === cat
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'bg-slate-100 text-slate-600 border border-slate-200 hover:border-slate-300 hover:text-slate-900'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 sm:py-20 bg-slate-50/60 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 shadow-sm max-w-xl mx-auto">
              <BookOpen className="w-10 h-10 text-slate-400 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-slate-900 mb-1">No articles found</h3>
              <p className="text-xs text-slate-500">
                Try selecting a different category or clearing your search term.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="mt-4 text-xs font-semibold text-blue-600 hover:underline"
              >
                Reset filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>

      <CTASection
        title="Want Custom SEO Guidance for Your Website?"
        subtitle="Our team can audit your technical architecture and help you execute an end-to-end organic search roadmap."
      />
    </>
  );
};

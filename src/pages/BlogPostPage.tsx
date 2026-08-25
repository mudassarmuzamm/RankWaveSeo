import React from 'react';
import { useRouter } from '../context/RouterContext';
import { BLOG_POSTS } from '../data/blogData';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { BlogCard } from '../components/BlogCard';
import { CTASection } from '../components/CTASection';
import { SEOMeta } from '../types';
import {
  Calendar,
  Clock,
  ArrowLeft,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  BookmarkCheck,
} from 'lucide-react';

export const BlogPostPage: React.FC<{ slug: string }> = ({ slug }) => {
  const { currentPath, navigate } = useRouter();

  const post = BLOG_POSTS.find(
    (p) => p.slug === slug || p.path === currentPath || p.path === `/blog/${slug}/` || p.path === `/blog/${slug}`
  ) || BLOG_POSTS[0];

  const postMeta: SEOMeta = {
    title: `${post.title} | RankWave SEO`,
    description: post.metaDescription,
    canonical: `https://rankwaveseo.com${post.path}`,
    h1: post.h1,
    primaryKeyword: post.primaryKeyword,
    secondaryKeywords: [],
    schemaType: 'Article',
  };

  const relatedPosts = BLOG_POSTS.filter((p) => p.id !== post.id).slice(0, 2);

  return (
    <>
      <SEOHead meta={postMeta} />
      <Breadcrumbs />

      {/* Article Header */}
      <header className="relative pt-10 pb-12 sm:pt-14 sm:pb-16 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <button
              type="button"
              onClick={() => navigate('/blog/')}
              className="text-xs font-semibold text-slate-500 hover:text-slate-900 flex items-center gap-1.5 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to all guides</span>
            </button>
            <span className="text-slate-300">•</span>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              {post.category}
            </span>
          </div>

          {/* EXACTLY ONE H1 FOR BLOG POST */}
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.18] mb-6">
            {post.h1}
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6">
            {post.excerpt}
          </p>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-slate-200 text-xs sm:text-sm text-slate-500">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 font-bold text-xs">
                  {post.author.name.charAt(0)}
                </div>
                <div>
                  <strong className="text-slate-900 block font-semibold leading-none">{post.author.name}</strong>
                  <span className="text-[11px] text-slate-500 leading-none">{post.author.role}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                <span>{post.publishDate}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Article Body */}
      <article className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Key Takeaways Callout */}
          {post.keyTakeaways && post.keyTakeaways.length > 0 && (
            <div className="p-6 rounded-2xl bg-blue-50/50 border border-blue-200 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-blue-700 font-bold text-xs uppercase tracking-wider">
                <BookmarkCheck className="w-4 h-4" />
                <span>Executive Summary & Key Takeaways</span>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                {post.keyTakeaways.map((takeaway, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Structured Content Sections */}
          <div className="space-y-10 text-sm sm:text-base text-slate-700 leading-relaxed">
            {post.contentSections.map((sec, sIdx) => (
              <section key={sIdx} className="space-y-4 pt-4 first:pt-0">
                <h2 className="text-xl sm:text-3xl font-extrabold text-slate-900 tracking-tight pt-2 border-t border-slate-200 first:border-0 first:pt-0">
                  {sec.h2}
                </h2>
                {sec.paragraphs.map((pText, pIdx) => (
                  <p key={pIdx} className="text-slate-600 leading-relaxed">
                    {pText}
                  </p>
                ))}

                {sec.subSections && sec.subSections.length > 0 && (
                  <div className="space-y-6 pt-3">
                    {sec.subSections.map((sub, subIdx) => (
                      <div key={subIdx} className="p-5 sm:p-6 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                        <h3 className="text-base sm:text-lg font-bold text-slate-900">
                          {sub.h3}
                        </h3>
                        {sub.content.map((subP, subPIdx) => (
                          <p key={subPIdx} className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                            {subP}
                          </p>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </section>
            ))}
          </div>

          {/* In-Article Callout Box */}
          <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-blue-50/50 border border-blue-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center sm:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
                Actionable Next Step
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                Want our team to audit your website's search performance?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Get an objective, developer-level breakdown of your technical health, on-page gaps, and ranking barriers.
              </p>
            </div>
            <button
              type="button"
              onClick={() => navigate('/free-seo-audit/')}
              className="shrink-0 px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-500/20 flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Get Free SEO Audit</span>
            </button>
          </div>

          {/* Related Services Links */}
          {post.relatedServices && post.relatedServices.length > 0 && (
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
                Related Search Marketing Services:
              </span>
              <div className="flex flex-wrap gap-2.5">
                {post.relatedServices.map((rel, rIdx) => (
                  <button
                    key={rIdx}
                    type="button"
                    onClick={() => navigate(rel.path)}
                    className="px-3.5 py-1.5 rounded-lg bg-white border border-slate-200 hover:bg-slate-100 text-xs font-medium text-blue-600 transition-colors flex items-center gap-1.5"
                  >
                    <span>{rel.name}</span>
                    <ArrowRight className="w-3 h-3 text-blue-600" />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      {/* Related Posts */}
      <section className="py-16 bg-slate-50/60 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              Related Search Guides
            </h3>
            <button
              type="button"
              onClick={() => navigate('/blog/')}
              className="text-xs font-semibold text-blue-600 hover:underline flex items-center gap-1"
            >
              <span>View all guides</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedPosts.map((rPost) => (
              <BlogCard key={rPost.id} post={rPost} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

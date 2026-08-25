import React from 'react';
import { BlogPost } from '../types';
import { useRouter } from '../context/RouterContext';
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';

export const BlogCard: React.FC<{ post: BlogPost }> = ({ post }) => {
  const { navigate } = useRouter();

  return (
    <article className="group bg-white border border-slate-200 hover:border-blue-400/80 rounded-2xl p-6 flex flex-col justify-between transition-all duration-200 hover:shadow-xl hover:shadow-blue-500/10">
      <div>
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">
            {post.category}
          </span>
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <Clock className="w-3.5 h-3.5" />
            <span>{post.readTime}</span>
          </div>
        </div>

        <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors leading-snug">
          <button
            type="button"
            onClick={() => navigate(post.path)}
            className="text-left focus:outline-none"
          >
            {post.title}
          </button>
        </h3>

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 line-clamp-3">
          {post.excerpt}
        </p>
      </div>

      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <Calendar className="w-3.5 h-3.5 text-slate-400" />
          <span>{post.publishDate}</span>
        </div>

        <button
          type="button"
          onClick={() => navigate(post.path)}
          className="text-xs font-semibold text-blue-600 group-hover:text-blue-700 flex items-center gap-1 transition-colors"
        >
          <span>Read Guide</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </article>
  );
};

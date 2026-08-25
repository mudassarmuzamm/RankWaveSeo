import React, { useState } from 'react';
import { FAQItem } from '../types';
import { ChevronDown, HelpCircle, Search } from 'lucide-react';

interface FAQAccordionProps {
  items: FAQItem[];
  title?: string;
  subtitle?: string;
  showSearch?: boolean;
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({
  items,
  title = 'Frequently Asked Questions',
  subtitle = 'Clear answers to common questions about our search engine optimization processes, deliverables, and outcomes.',
  showSearch = false,
}) => {
  const [openIds, setOpenIds] = useState<string[]>(() => (items.length > 0 ? [items[0].id] : []));
  const [searchQuery, setSearchQuery] = useState('');

  const toggleItem = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredItems = searchQuery
    ? items.filter(
        (item) =>
          item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : items;

  return (
    <section className="py-16 bg-slate-100/50 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200 mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Search Clarifications</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-3">
            {title}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            {subtitle}
          </p>

          {showSearch && (
            <div className="mt-6 max-w-md mx-auto relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search questions (e.g., contracts, pricing, timeline)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-slate-300 rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 shadow-sm"
              />
            </div>
          )}
        </div>

        <div className="space-y-3.5">
          {filteredItems.length === 0 ? (
            <div className="text-center py-8 bg-white rounded-xl border border-slate-200 text-slate-500 text-sm shadow-sm">
              No matching questions found. Feel free to contact our team directly.
            </div>
          ) : (
            filteredItems.map((item) => {
              const isOpen = openIds.includes(item.id);
              return (
                <div
                  key={item.id}
                  className={`rounded-xl border transition-all ${
                    isOpen
                      ? 'bg-white border-blue-200 shadow-md'
                      : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleItem(item.id)}
                    aria-expanded={isOpen}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className="text-base font-semibold text-slate-900 pr-2">
                      {item.question}
                    </span>
                    <div
                      className={`p-1.5 rounded-lg bg-slate-100 text-slate-500 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-blue-600 bg-blue-50' : ''
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4 animate-in fade-in-50 duration-150">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
};

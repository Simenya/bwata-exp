import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, ChevronUp, Search, MessageSquare, PhoneCall, ArrowLeft } from "lucide-react";
import { faqs } from "../content";

interface FAQProps {
  onBackToHome?: () => void;
}

export default function FAQ({ onBackToHome }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="faq" className={`pb-20 lg:pb-28 bg-brand-cream relative ${onBackToHome ? "pt-32 sm:pt-40" : "py-20 lg:py-28"}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
 
        
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif font-black text-white tracking-tight">
            Frequently Asked Questions
          </h2> 
        </div>

        {/* Search bar inside FAQ */}
        <div className="relative mb-10 max-w-md mx-auto">
          <Search className="absolute left-3.5 top-3.5 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search FAQs (e.g. permits, packing)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-brand-charcoal border border-white/5 rounded-xl pl-10 pr-4 py-3 text-xs text-gray-200 outline-none focus:border-brand-gold/50 transition-all shadow-sm placeholder:text-gray-500 font-medium"
          />
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.question}
                className="bg-brand-charcoal border border-white/5 rounded-2xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                   className="flex items-center justify-between w-full p-5 sm:p-6 text-left hover:bg-white/5 transition-colors cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-bold text-white pr-4">
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-lg ${isOpen ? "bg-brand-gold text-[#080C0A]" : "bg-white/5 text-brand-gold border border-white/10"}`}>
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-gray-400 font-light leading-relaxed border-t border-white/5">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Custom Helpline Block matching chat elements */}
        <div className="mt-12 text-center p-6 bg-brand-charcoal border border-white/5 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3 text-left">
            <MessageSquare className="w-5 h-5 text-brand-gold shrink-0" />
            <p className="text-xs text-gray-400 font-light leading-normal">
              <strong className="text-white">Need custom adjustments?</strong> Get 1-on-1 assistance. We are just a click away to help you customize your itinerary to your preferences.
            </p>
          </div>
          <a
            href="https://wa.me/256769805075"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center space-x-1.5 px-4 py-2.5 bg-brand-gold hover:bg-white text-[#080C0A] text-[11px] font-black uppercase tracking-wider rounded-lg shadow-sm shrink-0 transition-all"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Chat Live with Us</span>
          </a>
        </div>

      </div>
    </section>
  );
}

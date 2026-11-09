import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";
import { testimonials } from "../content";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-brand-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-2xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-white tracking-tight">
              What Our Travelers Say
            </h2>
          </div>
          <p className="text-gray-400 max-w-sm font-light text-sm leading-relaxed self-start md:self-end">
            Words from guests who have explored East Africa with us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((test, i) => (
            <motion.div
              key={test.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-brand-charcoal p-8 rounded-3xl border border-white/5 shadow-md relative flex flex-col justify-between"
            >
              {/* Quote Mark Decoration */}
              <div className="absolute top-6 right-6 text-brand-gold/5">
                <Quote className="w-12 h-12 stroke-[3px]" />
              </div>

              {/* Content */}
              <div className="space-y-6">
                {/* Stars */}
                <div className="flex items-center space-x-1 text-brand-gold">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star
                      key={idx}
                      className={`w-4 h-4 ${
                        idx < test.rating ? "fill-current" : "opacity-30"
                      }`}
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-sm text-gray-300 font-light leading-relaxed italic relative z-10">
                  "{test.quote}"
                </p>
              </div>

              {/* Reviewer Details */}
              <div className="mt-8 pt-6 border-t border-white/5 flex flex-col space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="font-serif font-black text-white text-base">
                    {test.name}
                  </span>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

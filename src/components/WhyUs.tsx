import { motion } from "motion/react";
import { Compass, Users, BadgeCheck } from "lucide-react";

export default function WhyUs() {
  const cards = [
    {
      title: "Curated Destinations",
      description: "Hand-picked locations that showcase the absolute best of Africa, connecting primate canopies to volcanic ridges.",
      icon: Compass,
      color: "bg-brand-gold/15 text-brand-gold border-brand-gold/20"
    },
    {
      title: "Expert Guides",
      description: "Local certified experts with deep-seated knowledge, wildlife passion, and official primatologist accreditations.",
      icon: Users,
      color: "bg-brand-gold/15 text-brand-gold border-brand-gold/20"
    },
    {
      title: "Quality Assured",
      description: "Rigorous standards for high-end transport safety, boutique accommodations, and official park permit guarantees.",
      icon: BadgeCheck,
      color: "bg-brand-gold/15 text-brand-gold border-brand-gold/20"
    }
  ];

  return (
    <section id="why-us" className="py-20 lg:py-24 bg-brand-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-serif font-black text-white tracking-tight">
            Why Travel With Us
          </h2>
          <p className="text-gray-400 font-light text-sm sm:text-base leading-relaxed">
            We make your African adventure seamless, memorable, and safe. Co-branded with elite operators to ensure direct local benefits.
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, i) => {
            const IconComponent = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col p-8 bg-brand-charcoal border border-white/5 rounded-3xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`p-4 rounded-2xl w-14 h-14 flex items-center justify-center border mb-6 ${card.color}`}>
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white font-serif mb-3">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-400 font-light leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

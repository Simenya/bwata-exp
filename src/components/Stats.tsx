import { motion } from "motion/react";
import { Award, Users, Compass } from "lucide-react";

export default function Stats() {
  const stats = [
    {
      id: "stat-1",
      number: "30+",
      label: "Popular Destinations",
      description: "Carefully vetted sites spanning East Africa, led by experienced local guides and wildlife experts",
      icon: Compass,
      className: "bg-brand-gold text-[#080C0A] border-none",
      numClass: "text-[#080C0A]",
      labelClass: "text-[#080C0A]/80",
      descClass: "text-[#080C0A]/70",
      iconBg: "bg-black/10 text-black",
    },
    {
      id: "stat-2",
      number: "5k+",
      label: "Happy Travelers",
      description: "International explorers who designed their dream itineraries with confidence",
      icon: Users,
      className: "bg-brand-green text-white border-white/5",
      numClass: "text-brand-gold-light",
      labelClass: "text-white/95",
      descClass: "text-gray-300",
      iconBg: "bg-white/10 text-brand-gold",
    },
    {
      id: "stat-3",
      number: "4.5+",
      label: "Customer Rating",
      description: "Expert local operations & deep-seated relationships with luxury boutique lodges",
      icon: Award,
      className: "bg-brand-charcoal text-[#E0E5E2] border-white/5",
      numClass: "text-white",
      labelClass: "text-brand-gold-light",
      descClass: "text-gray-400",
      iconBg: "bg-brand-gold/15 text-brand-gold",
    },
  ];

  return (
    <section id="stats" className="relative z-20 -mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, i) => {
          const IconComponent = stat.icon;
          return (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`flex flex-col items-center md:items-start text-center md:text-left p-8 rounded-3xl border shadow-xl ${stat.className}`}
            >
              <div className={`p-3 rounded-2xl mb-5 ${stat.iconBg}`}>
                <IconComponent className="w-6 h-6" />
              </div>
              <span className={`text-4xl lg:text-5xl font-serif font-black tracking-tight mb-2 ${stat.numClass}`}>
                {stat.number}
              </span>
              <span className={`text-xs uppercase font-mono tracking-widest font-bold mb-2 ${stat.labelClass}`}>
                {stat.label}
              </span>
              <p className={`text-sm font-light leading-relaxed ${stat.descClass}`}>
                {stat.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

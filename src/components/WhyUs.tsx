import { motion } from "motion/react";
import { Compass, Users, BadgeCheck, HeartHandshake } from "lucide-react";

const cards = [
  {
    title: "Local Kampala Experts",
    description: "Our head office is in Kampala. You deal directly with the owners, not a call centre.",
    icon: Users,
  },
  {
    title: "One Booking, Four Countries",
    description: "Kenya, Rwanda, Uganda and Tanzania, planned together so you book once.",
    icon: Compass,
  },
  {
    title: "Honest Community Tourism",
    description: "We are not a Batwa organisation, we are partners. Part of every visit goes straight to the community.",
    icon: HeartHandshake,
  },
  {
    title: "Clear, Itemised Quotes",
    description: "Every quote lists what is and is not included, such as gorilla permits and flights.",
    icon: BadgeCheck,
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-16 lg:py-24 bg-brand-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-serif font-black text-white tracking-tight">Why Travel With Us</h2>
          <p className="text-gray-400 font-light text-sm sm:text-base leading-relaxed">
            Seamless, memorable, safe, and honest about who does what.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col p-7 bg-brand-charcoal border border-white/10 rounded-3xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="p-4 rounded-2xl w-14 h-14 flex items-center justify-center border mb-5 bg-brand-gold/15 text-brand-gold border-brand-gold/20">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white font-serif mb-2">{card.title}</h3>
                <p className="text-sm text-gray-400 font-light leading-relaxed">{card.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

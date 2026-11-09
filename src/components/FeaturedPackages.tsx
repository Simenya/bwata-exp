import { motion } from "motion/react";
import { Clock, MapPin } from "lucide-react";
import { packages } from "../content";
import { useBooking } from "./BookingModal";
import { Page } from "../types";

interface Props {
  onNavigate: (p: Page, id?: string) => void;
  /** show only featured ones */
  featuredOnly?: boolean;
}

export default function FeaturedPackages({ onNavigate, featuredOnly = true }: Props) {
  const { openBooking } = useBooking();
  const list = featuredOnly
    ? packages.filter((p) => p.featured)
    : packages;

  return (
    <section className="py-16 lg:py-24 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-white tracking-tight">Featured Safaris</h2>
          <p className="text-gray-400 max-w-md font-light text-sm">Hand-built journeys across Kenya, Rwanda, Uganda and Tanzania.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {list.map((p, i) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex flex-col rounded-3xl overflow-hidden bg-brand-charcoal gold-card transition-all"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-brand-green">
                <img src={p.image} alt={p.name} loading="lazy" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-brand-gold text-[#080C0A] text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-lg">
                  <Clock className="w-3 h-3" /> {p.duration}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1 space-y-3">
                <div className="flex items-center gap-1.5 text-xs text-gray-400">
                  <MapPin className="w-3.5 h-3.5 text-brand-gold" /> {p.countries.join(" + ")}
                </div>
                <h3 className="text-xl font-serif font-bold text-white"><button onClick={() => onNavigate("packages", p.id)} className="text-left hover:text-brand-gold transition-colors cursor-pointer">{p.name}</button></h3>
                <p className="text-sm text-gray-400 font-light leading-relaxed">{p.overview}</p>
                <div className="flex gap-3 mt-auto pt-4">
                  <button
                    onClick={() => onNavigate("packages", p.id)}
                    className="flex-1 rounded-xl border border-white/15 py-3 text-[11px] font-bold uppercase tracking-wider text-white hover:bg-white/10 transition-colors cursor-pointer"
                  >
                    View Itinerary
                  </button>
                  <button
                    onClick={() => openBooking(p.name)}
                    className="flex-1 text-center rounded-xl bg-brand-gold py-3 text-[11px] font-black uppercase tracking-wider text-[#080C0A] hover:bg-white transition-colors cursor-pointer"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

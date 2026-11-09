import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { MapPin, ArrowUpRight } from "lucide-react";
import { destinations } from "../content";
import { useBooking } from "./BookingModal";
import { Country } from "../types";

const countries: Country[] = ["Uganda", "Kenya", "Rwanda", "Tanzania"];

const toCountry = (v?: string): Country | undefined => countries.find((c) => c.toLowerCase() === v?.toLowerCase());

interface Props {
  /** Limit the number of cards (used on the home page) */
  limit?: number;
  heading?: string;
  intro?: string;
  onSeeAll?: () => void;
  /** country to show first (e.g. from the menu), case-insensitive */
  initialCountry?: string;
}

export default function DestinationsList({
  limit,
  heading = "Destinations Across East Africa",
  intro = "Kenya, Rwanda, Uganda and Tanzania. Pick a country to see where we go.",
  onSeeAll,
  initialCountry,
}: Props) {
  const { openBooking } = useBooking();
  const [active, setActive] = useState<Country>(toCountry(initialCountry) ?? "Uganda");
  useEffect(() => {
    const c = toCountry(initialCountry);
    if (c) setActive(c);
  }, [initialCountry]);
  const filtered = destinations.filter((d) => d.country === active);
  const shown = limit ? filtered.slice(0, limit) : filtered;

  return (
    <section id="destinations" className="py-16 lg:py-24 bg-brand-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-white tracking-tight">{heading}</h2>
          <p className="text-gray-400 max-w-md font-light text-sm">{intro}</p>
        </div>

        <div className="flex items-center space-x-2 mb-10 overflow-x-auto pb-2 no-scrollbar" role="tablist" aria-label="Filter by country">
          {countries.map((c) => (
            <button
              key={c}
              role="tab"
              aria-selected={active === c}
              onClick={() => setActive(c)}
              className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-bold transition-all whitespace-nowrap border cursor-pointer ${
                active === c
                  ? "bg-brand-gold text-[#080C0A] border-brand-gold shadow-lg shadow-brand-gold/10"
                  : "bg-brand-charcoal border-white/10 text-gray-400 hover:border-brand-gold/40 hover:text-white"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {shown.map((d, i) => (
            <motion.article
              key={d.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
              className="group flex flex-col rounded-3xl bg-brand-charcoal overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 gold-card"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-brand-green">
                <img
                  src={d.image}
                  alt={d.name}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 px-3 py-1 bg-brand-green text-brand-gold text-[10px] font-bold uppercase tracking-wider rounded-lg">
                  {d.tag}
                </div>
                <div className="absolute bottom-3 left-4 flex items-center space-x-1 text-xs font-semibold" style={{ color: "#fff" }}>
                  <MapPin className="w-3.5 h-3.5 text-brand-gold" />
                  <span>{d.country}</span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col space-y-3">
                <h3 className="text-lg font-serif font-bold text-white group-hover:text-brand-gold transition-colors leading-snug">{d.name}</h3>
                <p className="text-sm text-gray-400 font-light leading-relaxed">{d.summary}</p>
                <ul className="text-xs text-gray-400 space-y-1 pt-1">
                  {d.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-gold shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-gray-500">{d.country}</span>
                  <button
                    onClick={() => openBooking(d.name)}
                    aria-label={`Ask about ${d.name}`}
                    className="flex items-center justify-center w-10 h-10 rounded-xl bg-brand-gold/15 text-brand-gold group-hover:bg-brand-gold group-hover:text-[#080C0A] transition-all cursor-pointer"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {limit && onSeeAll && (
          <div className="text-center mt-12">
            <button
              onClick={onSeeAll}
              className="px-7 py-3.5 rounded-xl border border-brand-gold/40 text-brand-gold text-xs font-black uppercase tracking-wider hover:bg-brand-gold hover:text-[#080C0A] transition-colors cursor-pointer"
            >
              See All Destinations
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

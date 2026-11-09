import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, X, Compass, MapPin, Moon, Utensils, Send, MessageSquare, Clock } from "lucide-react";
import { packages } from "../content";
import { useBooking } from "./BookingModal";

export default function InteractivePlanner() {
  const { openBooking } = useBooking();
  const [selectedId, setSelectedId] = useState("6-day-circuit");
  const [dayIdx, setDayIdx] = useState(0);

  const pkg = packages.find((p) => p.id === selectedId) || packages[0];
  const day = pkg.days[dayIdx] || pkg.days[0];

  return (
    <section id="itinerary-planner" className="py-16 lg:py-24 bg-brand-cream text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black tracking-tight text-white leading-tight">Packages & Itineraries</h2>
          <p className="text-gray-400 font-light text-sm">
            Choose a package and browse it day by day. Every itinerary can be tailored to you.
          </p>
        </div>

        <div className="flex justify-center mb-10">
          <div role="tablist" aria-label="Packages" className="flex flex-wrap justify-center bg-brand-charcoal border border-white/10 p-1.5 rounded-2xl shadow-xl gap-1.5">
            {packages.map((p) => (
              <button
                key={p.id}
                role="tab"
                aria-selected={selectedId === p.id}
                onClick={() => {
                  setSelectedId(p.id);
                  setDayIdx(0);
                }}
                className={`px-4 sm:px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  selectedId === p.id ? "bg-brand-gold text-[#080C0A] font-black shadow-lg" : "text-gray-400 hover:text-white"
                }`}
              >
                <span className="flex items-center gap-2">
                  <Compass className="w-4 h-4" />
                  {p.duration}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="mb-8 text-center space-y-2">
          <h3 className="text-2xl sm:text-3xl font-serif font-black text-white">{pkg.name}</h3>
          <p className="text-sm text-gray-400 font-light max-w-2xl mx-auto">{pkg.overview}</p>
          <div className="flex flex-wrap justify-center gap-2 pt-2">
            {pkg.highlights.map((h) => (
              <span key={h} className="px-3 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/25 text-[11px] font-semibold text-brand-gold">
                {h}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-12 gap-6 bg-brand-charcoal border border-white/10 p-6 sm:p-8 rounded-3xl shadow-xl">
            <div className="md:col-span-3 flex md:flex-col overflow-x-auto md:overflow-visible pb-4 md:pb-0 gap-2 border-b md:border-b-0 md:border-r border-white/10 md:pr-4 no-scrollbar">
              <span className="hidden md:block text-[10px] uppercase font-mono tracking-widest text-brand-gold font-bold mb-3">Daily route</span>
              {pkg.days.map((d, idx) => (
                <button
                  key={d.dayNumber}
                  onClick={() => setDayIdx(idx)}
                  className={`flex items-center space-x-3 w-full px-3.5 py-3 rounded-xl text-left text-[10px] font-bold uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer ${
                    dayIdx === idx ? "bg-brand-gold text-[#080C0A] shadow-md" : "text-gray-400 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-mono ${dayIdx === idx ? "bg-[#080C0A] text-brand-gold" : "bg-white/10"}`}>
                    {d.dayNumber}
                  </span>
                  <span>Day {d.dayNumber}</span>
                </button>
              ))}
            </div>

            <div className="md:col-span-9">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${selectedId}-${dayIdx}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-5"
                >
                  <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-white/10 bg-brand-green">
                    <img src={day.image} alt={day.title} referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 flex items-center gap-1 text-xs font-semibold" style={{ color: "#fff" }}>
                      <MapPin className="w-4 h-4 text-brand-gold" />
                      <span>{day.overnight}</span>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="text-[10px] font-mono text-brand-gold font-bold uppercase tracking-widest">Day {day.dayNumber}</div>
                    <h4 className="text-xl sm:text-2xl font-serif font-black text-white leading-tight">{day.title}</h4>
                  </div>

                  <div className="relative pl-4 border-l border-brand-gold/30 space-y-4">
                    {[
                      ["Morning", day.morning],
                      ["Afternoon", day.afternoon],
                    ].map(([label, text]) => (
                      <div key={label} className="relative">
                        <div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-brand-gold" />
                        <h5 className="text-xs font-bold text-brand-gold uppercase tracking-wider">{label}</h5>
                        <p className="text-sm text-gray-300 font-light mt-0.5 leading-relaxed">{text}</p>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10 text-xs text-gray-400">
                    <div className="flex items-center space-x-2">
                      <Moon className="w-4 h-4 text-brand-gold shrink-0" />
                      <div>
                        <div className="font-bold text-gray-200">Overnight</div>
                        <div className="font-light">{day.overnight}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Utensils className="w-4 h-4 text-brand-gold shrink-0" />
                      <div>
                        <div className="font-bold text-gray-200">Meals</div>
                        <div className="font-light">{day.meals}</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <aside className="lg:col-span-4 space-y-5 lg:sticky lg:top-28">
            <div className="bg-brand-charcoal border border-brand-gold/30 rounded-3xl p-6 sm:p-7 space-y-5 shadow-xl">
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-serif font-bold text-white">What's included</h4>
                <span className="flex items-center gap-1 text-[10px] font-mono uppercase text-brand-gold font-bold">
                  <Clock className="w-3.5 h-3.5" /> {pkg.duration}
                </span>
              </div>
              <ul className="space-y-2 text-xs text-gray-300">
                {pkg.inclusions.map((x) => (
                  <li key={x} className="flex gap-2">
                    <Check className="w-4 h-4 text-green-500 shrink-0" /> {x}
                  </li>
                ))}
              </ul>
              <h4 className="text-sm font-serif font-bold text-white pt-2">Not included</h4>
              <ul className="space-y-2 text-xs text-gray-400">
                {pkg.exclusions.map((x) => (
                  <li key={x} className="flex gap-2">
                    <X className="w-4 h-4 text-red-400 shrink-0" /> {x}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => openBooking(pkg.name)}
                className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-brand-gold text-[#080C0A] font-black uppercase tracking-wider hover:bg-white transition-all text-xs cursor-pointer"
              >
                <Send className="w-4 h-4" /> Book This Safari
              </button>
              <div className="flex items-start gap-2.5 text-left rounded-2xl border border-white/10 p-3">
                <MessageSquare className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" />
                <p className="text-xs leading-relaxed text-gray-400">
                  <span className="font-semibold text-white">Want it different?</span> Every itinerary can be adjusted. Accommodation level and meals are confirmed in your booking.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Calendar,
  Users,
  Check,
  X,
  Compass,
  ArrowRight,
  MapPin,
  Moon,
  Utensils,
  BookOpen,
  Send,
  Sparkles,
  MessageSquare,
  PhoneCall
} from "lucide-react";
import { itineraries } from "../data";

export default function InteractivePlanner() {
  const [selectedItineraryId, setSelectedItineraryId] = useState("1-day-gorilla");
  const [activeDayIndex, setActiveDayIndex] = useState(0);
  const [groupSize, setGroupSize] = useState(2);

  const selectedItinerary = itineraries.find((it) => it.id === selectedItineraryId) || itineraries[0];
  const activeDay = selectedItinerary.days[activeDayIndex] || selectedItinerary.days[0];

  const getBasePrice = () => {
    if (selectedItineraryId === "1-day-gorilla") return 700;
    if (selectedItineraryId === "3-day-gorilla-chimp") return 1200;
    if (selectedItineraryId === "7-day-classic") return 2600;
    return 5200;
  };
  const basePricePerPerson = getBasePrice();

  let discountPercent = 0;
  if (groupSize >= 4 && groupSize < 8) discountPercent = 5;
  else if (groupSize >= 8) discountPercent = 10;

  const discountedPricePerPerson = basePricePerPerson * (1 - discountPercent / 100);
  const totalCost = discountedPricePerPerson * groupSize;

  const getTabLabel = (it: (typeof itineraries)[0]) => {
    if (it.id === "1-day-gorilla") return "1 Day";
    if (it.id === "3-day-gorilla-chimp") return "3 Days";
    if (it.id === "7-day-classic") return "7 Days Classic";
    return "7 Days Luxury";
  };

  const generateWhatsAppMessage = () => {
    const text = `Hello Pearl Gorilla Safaris! I am planning an international travel itinerary with Pearl Gorilla.
- Package: ${selectedItinerary.name} (${selectedItinerary.style})
- Number of guests: ${groupSize}
- Price pp: $${discountedPricePerPerson.toLocaleString()} USD
- Total Projected Price: $${totalCost.toLocaleString()} USD
Please check permit availability and advise on booking procedures.`;
    return `https://wa.me/256769805075?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="itinerary-planner" className="py-20 lg:py-28 bg-brand-cream text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(194,159,67,0.07),transparent_50%)] pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-green/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black tracking-tight text-white leading-tight">
            Design Your Dream Expedition
          </h2>
          <p className="text-gray-400 font-light text-sm">
            Compare packages, select day-by-day activities, adjust your travel party size, and instantly calculate estimated quotes with our premium itinerary visualizer.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center mb-12 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-gold font-bold">
            Itineraries & Options
          </span>
          <div className="flex flex-wrap justify-center bg-brand-charcoal border border-white/5 p-1.5 rounded-2xl shadow-xl gap-1.5">
            {itineraries.map((it) => (
              <button
                key={it.id}
                onClick={() => {
                  setSelectedItineraryId(it.id);
                  setActiveDayIndex(0);
                }}
                className={`relative px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  selectedItineraryId === it.id
                    ? "bg-brand-gold text-brand-cream font-black shadow-lg shadow-brand-gold/15"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {selectedItineraryId === it.id && (
                  <span className="absolute -top-1 -right-1 flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-gold"></span>
                  </span>
                )}
                <div className="flex items-center space-x-2">
                  <Compass className="w-4 h-4" />
                  <span>{getTabLabel(it)}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 bg-brand-charcoal border border-white/5 p-6 sm:p-8 rounded-3xl shadow-2xl relative">
              <div className="md:col-span-3 flex md:flex-col overflow-x-auto md:overflow-visible pb-4 md:pb-0 gap-2 border-b md:border-b-0 md:border-r border-white/5 md:pr-4 no-scrollbar">
                <span className="hidden md:block text-[10px] uppercase font-mono tracking-widest text-brand-gold font-bold mb-3">
                  DAILY ROUTE
                </span>
                {selectedItinerary.days.map((day, idx) => (
                  <button
                    key={day.dayNumber}
                    onClick={() => setActiveDayIndex(idx)}
                    className={`flex items-center space-x-3 w-full px-3.5 py-3 rounded-xl text-left text-[10px] font-bold uppercase tracking-wider whitespace-nowrap transition-all ${
                      activeDayIndex === idx
                        ? "bg-brand-gold text-brand-cream shadow-md shadow-brand-gold/15"
                        : "bg-brand-charcoal/50 text-gray-400 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-mono ${
                      activeDayIndex === idx ? "bg-brand-cream text-brand-gold font-bold" : "bg-white/10"
                    }`}>
                      {day.dayNumber}
                    </span>
                    <span>Day {day.dayNumber}</span>
                  </button>
                ))}
              </div>

              <div className="md:col-span-9 flex flex-col justify-between">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeDayIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-5"
                  >
                    <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-lg border border-white/5">
                      <img
                        src={activeDay.image}
                        alt={activeDay.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-transparent to-transparent opacity-90" />
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                        <div className="flex items-center space-x-1 text-xs text-brand-gold-light font-semibold">
                          <MapPin className="w-4 h-4 text-brand-gold" />
                          <span>{activeDay.overnight}</span>
                        </div>
                        <span className="px-2.5 py-1 bg-brand-green text-brand-gold text-[10px] font-bold rounded uppercase tracking-wider">
                          {activeDay.meals}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="text-[10px] font-mono text-brand-gold font-bold uppercase tracking-widest">
                        DAY {activeDay.dayNumber} ACTIVITY
                      </div>
                      <h3 className="text-xl sm:text-2xl font-serif font-black text-white leading-tight">
                        {activeDay.title}
                      </h3>
                    </div>

                    <div className="space-y-4 pt-1">
                      <div className="relative pl-4 border-l border-brand-gold/30 space-y-3.5">
                        <div className="relative">
                          <div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-brand-gold animate-pulse" />
                          <h4 className="text-xs font-bold text-brand-gold uppercase tracking-wider">Morning</h4>
                          <p className="text-sm text-gray-300 font-light mt-0.5 leading-relaxed">{activeDay.morning}</p>
                        </div>
                        <div className="relative">
                          <div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-brand-gold animate-pulse" />
                          <h4 className="text-xs font-bold text-brand-gold uppercase tracking-wider">Afternoon</h4>
                          <p className="text-sm text-gray-300 font-light mt-0.5 leading-relaxed">{activeDay.afternoon}</p>
                        </div>
                        {activeDay.evening && (
                          <div className="relative">
                            <div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-brand-gold animate-pulse" />
                            <h4 className="text-xs font-bold text-brand-gold uppercase tracking-wider">Evening</h4>
                            <p className="text-sm text-gray-300 font-light mt-0.5 leading-relaxed">{activeDay.evening}</p>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5 text-xs text-gray-400">
                      <div className="flex items-center space-x-2">
                        <Moon className="w-4 h-4 text-brand-gold" />
                        <div>
                          <div className="font-bold text-gray-200">Overnight Cabin</div>
                          <div className="font-light truncate max-w-[180px]">{activeDay.overnight}</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Utensils className="w-4 h-4 text-brand-gold" />
                        <div>
                          <div className="font-bold text-gray-200">Meals Included</div>
                          <div className="font-light">{activeDay.meals}</div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
            <div className="bg-brand-charcoal border border-brand-gold/30 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl relative">
              <div className="space-y-1.5">
                <h3 className="text-lg font-serif font-bold text-white">Expedition Price Planner</h3>
              </div>

              <div className="space-y-4 border-y border-white/5 py-5 text-xs">
                <div className="space-y-2">
                  <label className="flex items-center justify-between font-bold text-gray-300 uppercase tracking-wider">
                    <span>Travelers / Guests</span>
                    <span className="text-brand-gold text-sm font-mono font-black">{groupSize} Person(s)</span>
                  </label>
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => setGroupSize(Math.max(1, groupSize - 1))}
                      className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center font-bold text-base hover:bg-white/10 active:scale-95 transition-all"
                    >
                      -
                    </button>
                    <input
                      type="range"
                      min="1"
                      max="10"
                      value={groupSize}
                      onChange={(e) => setGroupSize(parseInt(e.target.value))}
                      className="flex-1 accent-brand-gold"
                    />
                    <button
                      onClick={() => setGroupSize(Math.min(10, groupSize + 1))}
                      className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center font-bold text-base hover:bg-white/10 active:scale-95 transition-all"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              <div className="space-y-3.5 bg-white/5 rounded-2xl p-4 border border-white/5">
                <div className="flex justify-between text-xs text-gray-400">
                  <span>Base Package Cost / guest</span>
                  <span className="text-white font-mono">${basePricePerPerson.toLocaleString()}</span>
                </div>

                {discountPercent > 0 && (
                  <div className="flex justify-between text-xs text-brand-gold-light font-semibold">
                    <span>Group Discount ({discountPercent}%)</span>
                    <span className="font-mono">-${((basePricePerPerson * discountPercent) / 100).toLocaleString()}</span>
                  </div>
                )}

                <div className="flex justify-between text-xs text-gray-400">
                  <span>Gorilla Permit ($800 value)</span>
                  <span className="text-brand-gold-light font-bold">Included</span>
                </div>

                <div className="flex justify-between text-xs text-gray-400">
                  <span>Chimp Permit ($200 value)</span>
                  <span className="text-brand-gold-light font-bold">Included</span>
                </div>

                <div className="border-t border-white/10 pt-3.5 flex justify-between items-end">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-wider text-gray-400">Total Projected Estimate</span>
                    <span className="text-xs font-mono text-gray-500">${discountedPricePerPerson.toLocaleString()} pp × {groupSize}</span>
                  </div>
                  <span className="text-2xl font-serif font-black text-brand-gold font-mono tracking-tight">
                    ${totalCost.toLocaleString()}
                  </span>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <a
                  href={generateWhatsAppMessage()}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center space-x-2 w-full py-4 rounded-xl bg-brand-gold text-[#080C0A] font-black uppercase tracking-wider hover:bg-white hover:scale-[1.02] active:scale-[0.98] transition-all text-xs"
                >
                  <Send className="w-4 h-4" />
                  <span>Secure Permit & Quote (WhatsApp)</span>
                </a>

                <a
                  href="mailto:wilfredvictor@gmail.com?subject=Pearl%20Gorilla%20Safari%20Inquiry&body=Hi%20Pearl%20Gorilla%20Safaris!%20I%20am%20inquiring%20about%20booking%20the%20signature%20package."
                  className="flex items-center justify-center space-x-2 w-full py-3.5 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 text-white font-bold uppercase tracking-wider transition-all text-xs"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Send Professional Email</span>
                </a>
              </div>

              <div className="rounded-2xl border border-white/5 bg-brand-charcoal/80 p-3 shadow-sm sm:p-4">
                <div className="flex items-start gap-2.5 text-left">
                  <MessageSquare className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" />
                  <p className="text-xs leading-relaxed text-gray-400">
                    <span className="font-semibold text-white">Need help tailoring your safari?</span> Our team is ready to adjust your itinerary to match your travel style.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

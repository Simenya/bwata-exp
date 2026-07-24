import { useState } from "react";
import { motion } from "motion/react";
import { Star, MapPin, CheckCircle, Bed, Flame } from "lucide-react";
import { luxuryLodges, comfortLodges } from "../data";

export default function LodgeShowcase() {
  const [selectedTier, setSelectedTier] = useState<"luxury" | "comfort">("luxury");
  const currentLodges = selectedTier === "luxury" ? luxuryLodges : comfortLodges;

  return (
    <section id="lodges" className="py-20 lg:py-28 bg-brand-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-2xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-white tracking-tight">
              Where You Will Stay
            </h2>
            <p className="text-gray-400 font-light text-sm">
              We hand-select premier boutique lodges and intimate eco-resorts close to the gorillas and chimpanzee tracking trailheads. Browse our Luxury and Comfort options.
            </p>
          </div>

          <div className="inline-flex bg-brand-charcoal border border-white/5 p-1.5 rounded-2xl shadow-md shrink-0 self-start lg:self-end">
            <button
              onClick={() => setSelectedTier("luxury")}
              className={`flex items-center space-x-2 px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                selectedTier === "luxury"
                  ? "bg-brand-gold text-brand-cream"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <Flame className="w-3.5 h-3.5" />
              <span>Luxury (5-Star)</span>
            </button>
            <button
              onClick={() => setSelectedTier("comfort")}
              className={`flex items-center space-x-2 px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                selectedTier === "comfort"
                  ? "bg-brand-gold text-brand-cream"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <Bed className="w-3.5 h-3.5" />
              <span>Comfort (3-4 Star)</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {currentLodges.map((lodge, idx) => (
            <motion.div
              key={lodge.name}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="flex flex-col bg-brand-charcoal rounded-3xl overflow-hidden border border-white/5 shadow-md hover:shadow-xl hover:border-brand-gold/25 transition-all duration-300"
            >
              <div className="relative h-64 sm:h-72 overflow-hidden group">
                <img
                  src={lodge.image}
                  alt={lodge.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                <div className="absolute top-4 left-4 z-10 flex items-center space-x-1.5 bg-[#080C0A]/80 backdrop-blur-md px-3 py-1.5 rounded-lg text-white text-xs font-semibold border border-white/10">
                  <MapPin className="w-3.5 h-3.5 text-brand-gold" />
                  <span>{lodge.location}</span>
                </div>

                <div className="absolute top-4 right-4 z-10">
                  <span className="text-[10px] uppercase tracking-wider font-mono font-bold bg-brand-gold text-[#080C0A] px-2.5 py-1 rounded-md shadow-sm">
                    {selectedTier === "luxury" ? "Luxury Standard" : "Comfort Standard"}
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center space-x-1 text-brand-gold">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3.5 h-3.5 ${i < Math.floor(lodge.stars) ? "fill-current" : "opacity-30"}`}
                      />
                    ))}
                    <span className="text-[11px] text-gray-400 font-semibold ml-2">{lodge.stars} Star Rating</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-serif font-black text-white tracking-tight">{lodge.name}</h3>
                  <p className="text-sm text-gray-400 font-light leading-relaxed">{lodge.description}</p>
                </div>

                <div className="pt-5 border-t border-white/5">
                  <div className="flex flex-wrap gap-1.5">
                    {lodge.amenities.map((amenity) => (
                      <span
                        key={amenity}
                        className="inline-flex items-center space-x-1 px-2 py-0.5 rounded-md bg-white/5 border border-white/5 text-[10px] text-gray-300 font-semibold"
                      >
                        <CheckCircle className="w-3 h-3 text-brand-gold" />
                        <span>{amenity}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

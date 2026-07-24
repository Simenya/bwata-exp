import { useState } from "react";
import { motion } from "motion/react";
import { Star, MapPin, ArrowUpRight, Award, Flame } from "lucide-react";
import { popularDestinations } from "../data";

export default function DestinationsList() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Safari", "Adventure", "Culture"];

  const filteredDestinations = popularDestinations.filter((dest) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Safari") return dest.tag === "Safari" || dest.id === "fortportal-kibale";
    if (activeFilter === "Adventure") return dest.tag === "Adventure";
    if (activeFilter === "Culture") return dest.tag === "Culture";
    return true;
  });

  return (
    <section id="destinations" className="py-20 lg:py-28 bg-brand-cream relative">
      {/* Decorative leafy/safari background pattern */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-green/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 space-y-4 md:space-y-0">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-white mt-3 tracking-tight">
              Popular Destinations
            </h2>
          </div>
          <p className="text-gray-400 max-w-md font-light text-sm">
            Embark on vetted African adventures, specially curated to connect you directly to local operations. Featuring our signature combined Kibale & Fort Portal packages.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex items-center space-x-2 mb-10 overflow-x-auto pb-2 no-scrollbar">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-bold transition-all whitespace-nowrap border ${
                activeFilter === filter
                  ? "bg-brand-gold text-brand-cream border-brand-gold shadow-lg shadow-brand-gold/10"
                  : "bg-brand-charcoal border-white/5 text-gray-400 hover:border-brand-gold/35 hover:text-white"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredDestinations.map((dest, i) => {
            const isFeatured = dest.id === "fortportal-kibale";
            return (
              <motion.div
                key={dest.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`group relative flex flex-col rounded-3xl bg-brand-charcoal overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 border ${
                  isFeatured
                    ? "border-brand-gold/60 ring-4 ring-brand-gold/5 lg:col-span-1"
                    : "border-white/5"
                }`}
              >
                {/* Special Tag for Featured Item */}
                {isFeatured && (
                  <div className="absolute top-4 left-4 z-20 flex items-center space-x-1 px-3 py-1.5 bg-brand-gold text-brand-cream text-[10px] font-black uppercase tracking-wider rounded-lg shadow-md animate-pulse">
                    <Flame className="w-3.5 h-3.5" />
                    <span>Focus Package</span>
                  </div>
                )}

                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={dest.image}
                    alt={dest.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Subtle vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-transparent to-transparent opacity-90" />
                  
                  {/* Standard Tag */}
                  {!isFeatured && (
                    <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-brand-green text-brand-gold text-[10px] font-bold uppercase tracking-wider rounded-lg shadow-sm">
                      {dest.tag}
                    </div>
                  )}

                  {/* Rating Badge */}
                  <div className="absolute bottom-3 left-4 z-10 flex items-center space-x-1.5 bg-brand-cream/80 backdrop-blur-sm px-2.5 py-1 rounded-lg text-white text-xs font-semibold">
                    <Star className="w-3.5 h-3.5 fill-current text-brand-gold" />
                    <span>{dest.rating.toFixed(1)}</span>
                    <span className="text-gray-400">({dest.reviews})</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-1 text-gray-400 text-xs">
                      <MapPin className="w-3.5 h-3.5 text-brand-gold" />
                      <span>{dest.country}</span>
                    </div>
                    <h3 className="text-lg font-serif font-bold text-white group-hover:text-brand-gold transition-colors leading-snug">
                      {dest.title}
                    </h3>
                  </div>

                  {/* Pricing and Action */}
                  <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/5">
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase tracking-wider text-gray-500 font-mono">
                        From
                      </span>
                      <span className="text-xl font-black text-brand-gold">
                        ${dest.price}
                        <span className="text-xs font-normal text-gray-500"> / pp</span>
                      </span>
                    </div>

                    <a
                      href="#itinerary-planner"
                      className="flex items-center justify-center w-11 h-11 rounded-xl bg-brand-gold/15 text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-cream transition-all duration-300"
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

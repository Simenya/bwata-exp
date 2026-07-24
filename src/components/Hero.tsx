import { motion } from "motion/react";
import { ArrowRight, Play, MapPin, Compass, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#080C0A] pt-24 pb-16"
    >
      {/* Background Image with beautiful responsive gradient overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=1920"
          alt="African Safari Sunset Background"
          className="w-full h-full object-cover object-center opacity-65 scale-105"
        />
        {/* Beautiful gradient overlay: reduced top opacity (10%) to reveal the sunset, keeping the bottom dark (100%) */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#080C0A]/10 via-[#080C0A]/60 to-[#080C0A]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        <div className="h-10 sm:h-12" aria-hidden="true" />

        {/* Main Heading */}
        <div className="space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-serif font-black tracking-tight text-white leading-[1.15]"
          >
            Explore Africa <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-brand-gold-light to-brand-gold">
              with Confidence
            </span>
          </motion.h1>

          {/* simplified paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto font-light leading-relaxed"
          >
            A single premium platform to discover, trust, and book authentic Ugandan safaris. Specializing in Fort Portal's volcanic craters and Kibale's primate canopy tracks.
          </motion.p>
        </div>

        {/* Checklist of premium highlights */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-x-8 gap-y-3 max-w-3xl mx-auto text-xs text-gray-300 font-semibold uppercase tracking-wider"
        >
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-4 h-4 text-brand-gold" />
            <span>Gorilla & Chimp Permits</span>
          </div>
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-4 h-4 text-brand-gold" />
            <span>Private 4x4 Land Cruisers</span>
          </div>
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-4 h-4 text-brand-gold" />
            <span>Crater Lake Luxury Lodges</span>
          </div>
          
        </motion.div>

        <div className="h-20 sm:h-24" aria-hidden="true" />

      </div>
      
      {/* Scroll indicator with subtle motion */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center space-y-2">
        <span className="text-[10px] uppercase font-mono tracking-widest text-gray-400">
          Scroll to explore
        </span>
        <div className="w-6 h-10 rounded-full border border-gray-400/30 flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-2 bg-brand-gold rounded-full"
          />
        </div>
      </div>
    </section>
  );
}

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { images } from "../content";
import { useBooking } from "./BookingModal";
import { Page } from "../types";

const slides = [
  { image: images.gorilla, title: "Gorilla & Primate Trekking", text: "From Rwanda's volcanoes to Uganda's Bwindi forest" },
  { image: images.lions, title: "The Masai Mara & the Big Five", text: "Wildlife adventures in Kenya and Tanzania" },
  { image: images.cultural, title: "Authentic Cultural Journeys", text: "Community-led, respectful and unforgettable" },
  { image: images.savannahSunset, title: "Safaris Across East Africa", text: "Kenya · Rwanda · Uganda · Tanzania" },
];

interface HeroProps {
  onNavigate: (page: Page) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const [i, setI] = useState(0);
  const { openBooking } = useBooking();

  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % slides.length), 7000);
    return () => clearInterval(t);
  }, []);

  const slide = slides[i];
  const step = (d: number) => setI((n) => (n + d + slides.length) % slides.length);

  return (
    <section id="home" className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-[#080C0A] pt-28 pb-24">
      <AnimatePresence mode="sync">
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 z-0"
        >
          <img src={slide.image} alt="" className="w-full h-full object-cover object-center opacity-70" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#080C0A]/40 via-[#080C0A]/55 to-[#080C0A]" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-7">
        <AnimatePresence mode="wait">
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-black tracking-tight leading-[1.12]" style={{ color: "#fff" }}>
              {slide.title}
            </h1>
            <p className="text-lg sm:text-xl max-w-2xl mx-auto font-light tracking-wide" style={{ color: "#D4AF37" }}>{slide.text}</p>
          </motion.div>
        </AnimatePresence>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => openBooking()}
            className="w-full sm:w-auto rounded-xl bg-brand-gold px-7 py-4 text-xs font-black uppercase tracking-wider text-[#080C0A] hover:bg-white transition-colors cursor-pointer"
          >
            Book Your Safari
          </button>
          <button
            onClick={() => onNavigate("packages")}
            className="w-full sm:w-auto rounded-xl border border-white/30 bg-white/5 px-7 py-4 text-xs font-bold uppercase tracking-wider text-white backdrop-blur hover:bg-white/15 transition-colors cursor-pointer"
          >
            View Safaris
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex items-center gap-4">
        <button onClick={() => step(-1)} aria-label="Previous slide" className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 cursor-pointer">
          <ChevronLeft className="w-4 h-4" />
        </button>
        <div className="flex gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all cursor-pointer ${idx === i ? "w-8 bg-brand-gold" : "w-3 bg-white/40"}`}
            />
          ))}
        </div>
        <button onClick={() => step(1)} aria-label="Next slide" className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 cursor-pointer">
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}

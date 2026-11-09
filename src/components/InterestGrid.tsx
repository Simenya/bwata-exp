import { motion } from "motion/react";
import { interests } from "../content";
import { useBooking } from "./BookingModal";

export default function InterestGrid() {
  const { openBooking } = useBooking();
  return (
    <section className="py-16 lg:py-20 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-serif font-black text-white tracking-tight">Safari Categories</h2>
          <p className="text-gray-400 font-light text-sm sm:text-base">Choose the kind of journey you want. We build the route.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {interests.map((it, i) => (
            <motion.button
              key={it.id}
              onClick={() => openBooking(it.title)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
              className="group relative aspect-[4/3] rounded-3xl overflow-hidden text-left cursor-pointer gold-card"
            >
              <img src={it.image} alt="" loading="lazy" referrerPolicy="no-referrer" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
              <div className="absolute bottom-0 p-6 space-y-1">
                <h3 className="text-xl font-serif font-black" style={{ color: "#fff" }}>{it.title}</h3>
                <p className="text-xs font-light" style={{ color: "#e5e7eb" }}>{it.blurb}</p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}

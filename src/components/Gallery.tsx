import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ZoomIn, X, MapPin } from "lucide-react";
import { galleryPhotos as photos } from "../content";

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <section id="gallery" className="py-16 lg:py-24 bg-brand-cream text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-gray-400 font-light max-w-2xl text-sm leading-relaxed mb-10">
          A taste of what waits for you across East Africa. More photos from our own safaris are being added.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <motion.button
              key={photo.id}
              onClick={() => setActive(index)}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (index % 3) * 0.06 }}
              className="group relative overflow-hidden rounded-3xl aspect-[4/3] cursor-pointer border border-white/10 text-left bg-brand-green"
              aria-label={`Open photo: ${photo.title}`}
            >
              <img src={photo.image} alt={photo.title} loading="lazy" referrerPolicy="no-referrer" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between">
                <div className="space-y-1">
                  <div className="flex items-center space-x-1.5 text-xs font-semibold" style={{ color: "#E5C158" }}>
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{photo.location}</span>
                  </div>
                  <h3 className="text-lg font-serif font-bold leading-tight" style={{ color: "#fff" }}>{photo.title}</h3>
                </div>
                <div className="w-10 h-10 rounded-full bg-brand-gold flex items-center justify-center text-[#080C0A] shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-5 h-5" />
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[70] bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
          >
            <button onClick={() => setActive(null)} className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 cursor-pointer" aria-label="Close" style={{ color: "#fff" }}>
              <X className="w-6 h-6" />
            </button>
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative border border-white/10"
            >
              <img src={photos[active].image} alt={photos[active].title} referrerPolicy="no-referrer" className="w-full h-full object-cover" />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent text-left space-y-2">
                <div className="flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider" style={{ color: "#E5C158" }}>
                  <MapPin className="w-4 h-4" />
                  <span>{photos[active].location}</span>
                </div>
                <h3 className="text-2xl font-serif font-black" style={{ color: "#fff" }}>{photos[active].title}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ZoomIn, X, Camera, MapPin } from "lucide-react";

export default function Gallery() {
  const [activePhoto, setActivePhoto] = useState<number | null>(null);

  const photos = [
    {
      id: 1,
      title: "Primate Canopy Tracks",
      location: "Kibale Rainforest, Uganda",
      image: "https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?auto=format&fit=crop&q=80&w=1200"
    },
    {
      id: 2,
      title: "Mountain Gorilla Majesty",
      location: "Bwindi Impenetrable, Uganda",
      image: "https://ik.imagekit.io/simenya/assets/bwindi_climbing_chimp.jpg"
    },
    {
      id: 3,
      title: "Ancient Volcanic Craters",
      location: "Fort Portal Lakes, Uganda",
      image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 4,
      title: "Savannah Lions lounging",
      location: "Queen Elizabeth NP, Uganda",
      image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 5,
      title: "Lakeside Sunset Zebras",
      location: "Lake Mburo, Uganda",
      image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&q=80&w=1200"
    }
  ];

  const renderPhotoCard = (photo: typeof photos[0], index: number, desktopHeightClass: string) => (
    <motion.div
      key={photo.id}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      onClick={() => setActivePhoto(index)}
      className={`group relative overflow-hidden rounded-3xl aspect-[4/3] md:aspect-auto cursor-pointer border border-white/5 w-full ${desktopHeightClass}`}
    >
      <img
        src={photo.image}
        alt={photo.title}
        referrerPolicy="no-referrer"
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      {/* Overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-[#080C0A]/40 to-transparent opacity-0 group-hover:opacity-90 transition-all duration-300 flex flex-col justify-end p-6" />
      
      {/* Info appearing on Hover */}
      <div className="absolute bottom-0 left-0 right-0 p-6 z-10 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-between">
        <div className="space-y-1 text-left">
          <div className="flex items-center space-x-1.5 text-xs text-brand-gold-light font-semibold">
            <MapPin className="w-3.5 h-3.5 text-brand-gold" />
            <span>{photo.location}</span>
          </div>
          <h3 className="text-lg font-serif font-bold text-white leading-tight">
            {photo.title}
          </h3>
        </div>
        <div className="w-10 h-10 rounded-full bg-brand-gold flex items-center justify-center text-[#080C0A] shadow-md">
          <ZoomIn className="w-5 h-5" />
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-brand-cream text-white relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(194,159,67,0.03),transparent_50%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black tracking-tight text-white">
              Travelers Photo Gallery
            </h2>
            <p className="text-gray-400 font-light max-w-xl text-sm leading-relaxed">
              Real moments captured from actual safaris. Witness the vibrant color, wild closeups, and magnificent vistas waiting for you in Uganda.
            </p>
          </div>
          <div className="flex items-center space-x-2 text-[10px] text-brand-gold font-mono font-bold shrink-0 self-start md:self-end bg-brand-gold/10 border border-brand-gold/20 px-3 py-1.5 rounded-full">
            <Camera className="w-4 h-4" />
            <span>REAL MOMENTS • REAL ADVENTURES</span>
          </div>
        </div>

        {/* Mobile Layout (simple grid) */}
        <div className="grid grid-cols-1 gap-6 md:hidden">
          {photos.map((photo, index) => renderPhotoCard(photo, index, "h-[300px]"))}
        </div>

        {/* Desktop Layout (Perfect 3-Column Masonry) */}
        <div className="hidden md:grid grid-cols-3 gap-6">
          {/* Column 1 */}
          <div className="flex flex-col gap-6">
            {renderPhotoCard(photos[0], 0, "md:h-[260px]")}
            {renderPhotoCard(photos[3], 3, "md:h-[236px]")}
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-6">
            {renderPhotoCard(photos[1], 1, "md:h-[180px]")}
            {renderPhotoCard(photos[4], 4, "md:h-[316px]")}
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-6">
            {renderPhotoCard(photos[2], 2, "md:h-[520px]")}
          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activePhoto !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#080C0A]/95 backdrop-blur-md flex items-center justify-center p-4"
          >
            <button
              onClick={() => setActivePhoto(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="max-w-4xl w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative border border-white/5"
            >
              <img
                src={photos[activePhoto].image}
                alt={photos[activePhoto].title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent text-left space-y-2">
                <div className="flex items-center space-x-1.5 text-xs text-brand-gold-light font-bold uppercase tracking-wider">
                  <MapPin className="w-4 h-4 text-brand-gold" />
                  <span>{photos[activePhoto].location}</span>
                </div>
                <h3 className="text-2xl font-serif font-black text-white">
                  {photos[activePhoto].title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

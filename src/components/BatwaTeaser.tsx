import { Page } from "../types";
import { images } from "../content";

export default function BatwaTeaser({ onNavigate }: { onNavigate: (p: Page) => void }) {
  return (
    <section className="py-16 lg:py-20 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] bg-brand-green">
          <img src={images.batwa} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-green via-brand-green/70 to-transparent" />
          <div className="relative p-8 sm:p-14 lg:p-20 max-w-2xl space-y-5">
            <h2 className="text-3xl sm:text-5xl font-serif font-black leading-tight" style={{ color: "#fff" }}>
              The Batwa Cultural Experience
            </h2>
            <p className="text-lg font-light" style={{ color: "#D4AF37" }}>
              Community-led. Respectful. Unforgettable.
            </p>
            <button
              onClick={() => onNavigate("batwa")}
              className="rounded-xl bg-[#D4AF37] px-7 py-3.5 text-xs font-black uppercase tracking-wider text-[#080C0A] hover:bg-white transition-colors cursor-pointer"
            >
              Discover More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

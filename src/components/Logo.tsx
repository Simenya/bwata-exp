interface LogoProps {
  className?: string;
  /** hide the written name next to the round logo */
  markOnly?: boolean;
}

/** Circular company logo (public/logo.jpg), cropped to its outer ring. */
export function LogoMark({ className = "h-12 w-12" }: { className?: string }) {
  return (
    <span className={`block shrink-0 overflow-hidden rounded-full bg-white ring-2 ring-[#D4AF37] ${className}`}>
      <img
        src="/logo.jpg"
        alt="Batwa Wider Expedition Tour Ltd logo"
        className="h-full w-full scale-[1.1] object-cover"
      />
    </span>
  );
}

export default function Logo({ className = "", markOnly = false }: LogoProps) {
  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <LogoMark className="h-12 w-12 sm:h-14 sm:w-14" />
      {!markOnly && (
        <span className="flex flex-col leading-tight text-left">
          <span className="font-serif text-base sm:text-lg font-black tracking-tight text-white">Batwa Wider Expedition</span>
          <span className="text-[9px] uppercase tracking-[0.2em] text-brand-gold font-mono font-bold">Tour Ltd · East Africa</span>
        </span>
      )}
    </span>
  );
}

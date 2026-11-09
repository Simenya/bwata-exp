interface Props {
  kicker?: string;
  title: string;
  subtitle?: string;
  image?: string;
}

export default function PageHeader({ kicker, title, subtitle, image }: Props) {
  return (
    <header className="relative pt-36 pb-16 sm:pt-44 sm:pb-20 overflow-hidden bg-[#0A3D2A]">
      {image && <img src={image} alt="" referrerPolicy="no-referrer" className="absolute inset-0 w-full h-full object-cover opacity-30" />}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A3D2A]/60 to-[#0A3D2A]" />
      <div className="relative max-w-4xl mx-auto px-4 text-center space-y-4">
        {kicker && <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#D4AF37]">{kicker}</span>}
        <h1 className="text-4xl sm:text-5xl font-serif font-black tracking-tight" style={{ color: "#fff" }}>
          {title}
        </h1>
        {subtitle && (
          <p className="max-w-2xl mx-auto text-base font-light leading-relaxed" style={{ color: "#d1d5db" }}>
            {subtitle}
          </p>
        )}
      </div>
    </header>
  );
}

interface LogoProps {
  className?: string;
  /** kept for compatibility; the full logo already includes the company name */
  markOnly?: boolean;
}

/** Company logo (public/logo.jpg), shown in full so the ring lettering is not cropped. */
export function LogoMark({ className = "h-12 w-12" }: { className?: string }) {
  return (
    <span className={`block shrink-0 ${className}`}>
      <img
        src={`${import.meta.env.BASE_URL}logo.jpg`}
        alt="Batwa Tours and Travel logo"
        className="h-full w-full object-contain"
      />
    </span>
  );
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <span className={`flex items-center ${className}`}>
      <LogoMark className="h-14 w-14 sm:h-16 sm:w-16" />
    </span>
  );
}

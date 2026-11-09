import { Facebook, Instagram, Star, MapPin, Phone, Mail } from "lucide-react";
import Logo from "./Logo";
import { BRAND } from "../brand";
import { team } from "../content";
import { Page } from "../types";

interface Props {
  onNavigate: (p: Page) => void;
}

const quick: { label: string; page: Page }[] = [
  { label: "About Us", page: "about" },
  { label: "Batwa Experience", page: "batwa" },
  { label: "Destinations", page: "destinations" },
  { label: "Packages", page: "packages" },
  { label: "FAQ", page: "faq" },
  { label: "Contact & Booking", page: "contact" },
];

const regions = ["Kenya Safaris", "Rwanda Safaris", "Uganda Safaris", "Tanzania Safaris", "Gorilla Trekking", "Birding Checklist"];

export default function Footer({ onNavigate }: Props) {
  const year = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-brand-green text-gray-300 relative z-20" style={{ color: "#d1d5db" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16" style={{ color: "#e5e7eb" }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 border-b border-white/10 pb-12 mb-10">
          <div className="lg:col-span-4 space-y-5">
            <span className="[&_*]:!text-white [&_.font-mono]:!text-[#D4AF37] inline-block">
              <Logo />
            </span>
            <p className="text-sm font-light leading-relaxed max-w-sm" style={{ color: "#d1d5db" }}>
              {BRAND.tagline}. Gorilla trekking, wildlife and honest cultural experiences across East Africa.
            </p>
            <div className="flex items-center space-x-3">
              {[
                { icon: Facebook, href: BRAND.social.facebook, label: "Facebook" },
                { icon: Instagram, href: BRAND.social.instagram, label: "Instagram" },
                { icon: Star, href: BRAND.social.tripadvisor, label: "TripAdvisor" },
              ].map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="w-9 h-9 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center hover:bg-white/20 transition-colors" style={{ color: "#D4AF37" }}>
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase font-mono tracking-widest font-bold" style={{ color: "#D4AF37" }}>Quick Links</h4>
            <ul className="space-y-2.5 text-sm font-light">
              {quick.map((q) => (
                <li key={q.label}>
                  <button onClick={() => onNavigate(q.page)} className="hover:underline cursor-pointer text-left" style={{ color: "#e5e7eb" }}>{q.label}</button>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase font-mono tracking-widest font-bold" style={{ color: "#D4AF37" }}>Explore East Africa</h4>
            <ul className="space-y-2.5 text-sm font-light">
              {regions.map((r) => (
                <li key={r}>
                  <button onClick={() => onNavigate(r.startsWith("Birding") ? "birding" : "destinations")} className="hover:underline cursor-pointer text-left" style={{ color: "#e5e7eb" }}>{r}</button>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase font-mono tracking-widest font-bold" style={{ color: "#D4AF37" }}>Address & Bookings</h4>
            <ul className="space-y-3 text-sm font-light">
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#D4AF37" }} />
                <span style={{ color: "#e5e7eb" }}>Head Office: {BRAND.office}</span>
              </li>
              {team.map((m) => (
                <li key={m.tel} className="flex items-start space-x-2">
                  <Phone className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#D4AF37" }} />
                  <a href={`tel:${m.tel}`} className="hover:underline" style={{ color: "#e5e7eb" }}>{m.phone}</a>
                </li>
              ))}
              <li className="flex items-start space-x-2">
                <Mail className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#D4AF37" }} />
                <a href={`mailto:${BRAND.email}`} className="hover:underline break-all" style={{ color: "#e5e7eb" }}>{BRAND.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-light" style={{ color: "#9ca3af" }}>
          <span>© {year} {BRAND.name}. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}

import { useEffect, useState } from "react";
import { MessageCircle, CalendarCheck } from "lucide-react";
import { whatsappLink } from "../brand";
import { useBooking } from "./BookingModal";

/** Mobile-only bottom bar (WhatsApp + Plan your trip), shown once the visitor scrolls past the hero. */
export default function MobileActionBar() {
  const [visible, setVisible] = useState(false);
  const { openBooking } = useBooking();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-[59] border-t border-white/10 bg-[#0b120f]/95 px-4 pb-[max(env(safe-area-inset-bottom),0.75rem)] pt-3 backdrop-blur transition-transform duration-300 md:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="flex gap-3">
        <a
          href={whatsappLink("Hello Batwa Wider Expedition! I would like to plan a safari.")}
          target="_blank"
          rel="noreferrer"
          className="flex flex-1 items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 py-3 text-sm font-bold"
          style={{ color: "#ffffff" }}
        >
          <MessageCircle className="h-5 w-5" style={{ color: "#25D366" }} />
          <span style={{ color: "#ffffff" }}>WhatsApp</span>
        </a>
        <button
          type="button"
          onClick={() => openBooking()}
          className="flex flex-1 items-center justify-center gap-2 rounded-full bg-brand-gold py-3 text-sm font-bold text-[#0b120f]"
        >
          <CalendarCheck className="h-5 w-5" />
          Plan your trip
        </button>
      </div>
    </div>
  );
}

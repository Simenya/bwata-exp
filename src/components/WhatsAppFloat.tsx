import { MessageCircle } from "lucide-react";
import { whatsappLink } from "../brand";

export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink("Hello Batwa Wider Expedition! I would like to plan a safari.")}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-[60] flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3.5 text-white shadow-xl shadow-black/30 transition-transform hover:scale-105 active:scale-95"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="hidden text-xs font-bold uppercase tracking-wider sm:inline" style={{ color: "#fff" }}>
        WhatsApp
      </span>
    </a>
  );
}

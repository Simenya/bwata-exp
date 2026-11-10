import { Phone, Mail, MapPin, MessageCircle, Facebook, Instagram, Star } from "lucide-react";
import PageHeader from "./PageHeader";
import InquiryForm from "./InquiryForm";
import { BRAND, whatsappLink } from "../brand";
import { team, images } from "../content";

export default function ContactPage() {
  const [, edith, bukenya] = team;
  return (
    <>
      <PageHeader kicker="Contact & Booking" title="Plan Your Safari" subtitle="Message us, call us, or send the form. We reply with a tailored quote." image={images.savannahSunset} />

      <section className="py-16 bg-brand-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <InquiryForm />

          <div className="flex flex-col gap-6">
            <div className="rounded-3xl bg-brand-charcoal border border-white/10 shadow-xl divide-y divide-white/10 overflow-hidden">
              <a
                href={whatsappLink("Hello Batwa Wider Expedition!")}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 bg-[#25D366] px-6 py-5 font-bold hover:brightness-105 transition"
                style={{ color: "#fff" }}
              >
                <MessageCircle className="w-6 h-6 shrink-0" />
                <span>
                  WhatsApp Us
                  <span className="block text-xs font-normal opacity-90">{BRAND.whatsappDisplay}</span>
                </span>
              </a>
              <a href={`tel:${edith.tel}`} className="flex items-center gap-4 px-6 py-5 text-white hover:bg-white/5 transition">
                <Phone className="w-5 h-5 text-brand-gold shrink-0" />
                <span className="text-sm">
                  Call {edith.name.split(" ")[0]} <span className="text-gray-400 text-xs">({edith.role})</span>
                  <span className="block text-xs text-gray-400">{edith.phone}</span>
                </span>
              </a>
              <a href={`tel:${bukenya.tel}`} className="flex items-center gap-4 px-6 py-5 text-white hover:bg-white/5 transition">
                <Phone className="w-5 h-5 text-brand-gold shrink-0" />
                <span className="text-sm">
                  Call {bukenya.name.split(" ")[0]} <span className="text-gray-400 text-xs">(USA liaison)</span>
                  <span className="block text-xs text-gray-400">{bukenya.phone}</span>
                </span>
              </a>
              <a href={`mailto:${BRAND.email}`} className="flex items-center gap-4 px-6 py-5 text-white hover:bg-white/5 transition">
                <Mail className="w-5 h-5 text-brand-gold shrink-0" />
                <span className="text-sm break-all">{BRAND.email}</span>
              </a>
              <div className="flex items-center gap-4 px-6 py-5 text-white">
                <MapPin className="w-5 h-5 text-brand-gold shrink-0" />
                <span className="text-sm">Head Office: {BRAND.office}</span>
              </div>
              <div className="flex divide-x divide-white/10">
                {[
                  { icon: Facebook, href: BRAND.social.facebook, label: "Facebook" },
                  { icon: Instagram, href: BRAND.social.instagram, label: "Instagram" },
                  { icon: Star, href: BRAND.social.tripadvisor, label: "TripAdvisor" },
                ].map(({ icon: Icon, href, label }) => (
                  <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="flex-1 flex items-center justify-center gap-2 py-4 text-xs text-gray-300 hover:text-brand-gold hover:bg-white/5 transition">
                    <Icon className="w-4 h-4" /> {label}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex-1 min-h-[260px] overflow-hidden rounded-3xl border border-white/10 shadow-md">
              <iframe
                title="Batwa Wider Expedition head office, Kampala"
                src="https://www.google.com/maps?q=Kampala,Uganda&output=embed"
                className="w-full h-full min-h-[260px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

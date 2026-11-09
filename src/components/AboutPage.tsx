import PageHeader from "./PageHeader";
import WhyUs from "./WhyUs";
import { team, images } from "../content";
import { whatsappLink } from "../brand";

export default function AboutPage() {
  return (
    <>
      <PageHeader
        kicker="About Us"
        title="Who We Are"
        subtitle="An East African tour operator, honest about who we are and who we work with."
        image={images.batwa}
      />

      <section className="py-16 bg-brand-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-6 text-gray-300 font-light leading-relaxed text-base">
          <p>
            Batwa Wider Expedition Tour Ltd is a tour operator with its head office in Kampala, organizing gorilla trekking, wildlife safaris and cultural experiences across Kenya, Rwanda, Uganda and Tanzania, from the Masai Mara and the Serengeti to Volcanoes National Park and Bwindi Impenetrable Forest.
          </p>
          <p className="border-l-4 border-brand-gold pl-5 text-white font-normal">
            We are not a Batwa organization — we are partners. Our head office is in Kampala, and we partner with Batwa communities living near Bwindi to offer the <strong>Batwa Wider Experience</strong>: an immersive 2-3 hour cultural journey led entirely by Batwa community members. You will experience traditional fire making, forest herbs, dance, storytelling and hunting skills in a Batwa homestead.
          </p>
          <p>
            Part of every visit goes <strong className="text-white">directly to the Batwa community</strong>, and 100% of craft sales go to the artisans. When you travel with us, you support real community livelihoods, education and cultural preservation.
          </p>
          <p>
            Led by CEO Victor Wifred, Co-Owner Edith Kabahenda and USA Representative Bukenya Brain, we are committed to honest, respectful and community-based tourism.
          </p>
        </div>
      </section>

      <section className="pb-16 bg-brand-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-serif font-black text-white text-center mb-10">Meet the Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {team.map((m) => (
              <div key={m.name} className="bg-brand-charcoal border border-white/10 rounded-3xl p-7 text-center space-y-3 shadow-md">
                {/* Replace with team photos when supplied */}
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-brand-green border-2 border-brand-gold text-2xl font-serif font-black" style={{ color: "#D4AF37" }}>
                  {m.initials}
                </div>
                <h3 className="text-lg font-serif font-bold text-white">{m.name}</h3>
                <p className="text-xs uppercase tracking-wider font-mono text-brand-gold font-bold">{m.role}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              href={whatsappLink("Hello Batwa Wider Expedition! I'd like to talk about a safari.")}
              target="_blank"
              rel="noreferrer"
              className="inline-block px-7 py-3.5 rounded-xl bg-brand-gold text-[#080C0A] text-xs font-black uppercase tracking-wider hover:bg-white transition-colors"
            >
              Chat With Us
            </a>
          </div>
        </div>
      </section>

      <WhyUs />
    </>
  );
}

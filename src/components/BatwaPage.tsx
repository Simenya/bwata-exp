import { Flame, Music, BookOpen, Leaf, Crosshair, Camera, Users } from "lucide-react";
import PageHeader from "./PageHeader";
import InquiryForm from "./InquiryForm";
import { images } from "../content";

const activities = [
  { icon: Flame, label: "Fire making" },
  { icon: Music, label: "Dance & drums" },
  { icon: BookOpen, label: "Storytelling" },
  { icon: Leaf, label: "Forest herbs" },
  { icon: Crosshair, label: "Archery" },
];

export default function BatwaPage() {
  return (
    <>
      <PageHeader
        kicker="Cultural Experience"
        title="Authentic Batwa Cultural Experience"
        subtitle="Not a performance. A 2-3 hour visit led by Batwa elders and community members near Bwindi."
        image={images.batwa}
      />

      <section className="py-16 bg-brand-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-3xl font-serif font-black text-white">What you will do</h2>
            <p className="text-gray-300 font-light leading-relaxed">
              Step into a traditional Batwa homestead and learn the forest skills passed down for generations: make fire without a match, discover healing herbs, listen to ancient stories and dance to drum rhythms. Led by Batwa elders.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {activities.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2.5 rounded-2xl bg-brand-charcoal border border-white/10 px-4 py-3 text-sm text-gray-200">
                  <Icon className="w-4 h-4 text-brand-gold shrink-0" /> {label}
                </div>
              ))}
            </div>
            <div className="rounded-2xl bg-brand-charcoal border border-white/10 p-6 space-y-3">
              <h3 className="font-serif font-bold text-white text-lg flex items-center gap-2">
                <Users className="w-5 h-5 text-brand-gold" /> Honest partnership
              </h3>
              <p className="text-sm text-gray-400 font-light leading-relaxed">
                We are not a Batwa organization. We are partners, with our head office in Kampala. The experience is community-led.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-serif font-black text-white">Where your visit goes</h2>
            <div className="rounded-3xl bg-brand-green p-7 shadow-lg" style={{ color: "#fff" }}>
              <ul className="space-y-3 text-sm" style={{ color: "#fff" }}>
                <li className="flex gap-3"><span className="text-[#D4AF37] font-black">→</span> A share of every visit is paid <strong>directly to the Batwa community</strong></li>
                <li className="flex gap-3"><span className="text-[#D4AF37] font-black">→</span> <strong>100% of craft sales</strong> go to the artisans who made them</li>
                <li className="flex gap-3"><span className="text-[#D4AF37] font-black">→</span> Your visit also covers your local guide and a handmade bracelet</li>
              </ul>
            </div>

            <div className="rounded-2xl bg-brand-charcoal border border-white/10 p-6 space-y-3">
              <h3 className="font-serif font-bold text-white text-lg flex items-center gap-2">
                <Camera className="w-5 h-5 text-brand-gold" /> Respectful tourism
              </h3>
              <ul className="text-sm text-gray-400 font-light space-y-1.5 list-disc pl-5">
                <li>Ask permission before taking photos</li>
                <li>The visit is community-led: follow your hosts</li>
                <li>Buy crafts directly from the artisans</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 bg-brand-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <InquiryForm
            variant="batwa"
            defaultPackage="Batwa Cultural Experience (add-on to my Bwindi trip)"
            title="Book the Batwa Experience"
            subtitle="Tell us when you will be near Bwindi and how many are in your group."
          />
        </div>
      </section>
    </>
  );
}

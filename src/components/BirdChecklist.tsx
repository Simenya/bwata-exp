import { useState } from "react";
import { motion } from "motion/react";
import { Search, CheckSquare, Square, Info, ShieldAlert, Award, ArrowDownToLine, Flame, RefreshCw, Check, ArrowLeft } from "lucide-react";
import { ugandaBirds } from "../data";

interface BirdChecklistProps {
  onBackToHome?: () => void;
}

export default function BirdChecklist({ onBackToHome }: BirdChecklistProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSection, setSelectedSection] = useState("All");
  const [tickedBirds, setTickedBirds] = useState<number[]>([1, 3, 21]); // default ticked ones
  const [showToast, setShowToast] = useState(false);

  const sections = ["All", "The Big 5 Must-Sees", "Forest Birds (Bwindi & Kibale)", "Waterbirds & Lakes", "Savanna & Parks", "Colorful & Iconic", "Sunbirds & Weavers"];

  const handleToggleBird = (id: number) => {
    if (tickedBirds.includes(id)) {
      setTickedBirds(tickedBirds.filter((b) => b !== id));
    } else {
      setTickedBirds([...tickedBirds, id]);
    }
  };

  const handleReset = () => {
    setTickedBirds([]);
  };

  const handleSave = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 4000);
  };

  const filteredBirds = ugandaBirds.filter((bird) => {
    const matchesSearch = bird.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          bird.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSection = selectedSection === "All" || bird.section === selectedSection;
    return matchesSearch && matchesSection;
  });

  // Calculate stats
  const totalBirds = ugandaBirds.length;
  const tickedCount = tickedBirds.length;
  const progressPercent = Math.round((tickedCount / totalBirds) * 100);

  return (
    <section id="birding" className="pt-32 sm:pt-40 pb-20 lg:pb-28 bg-brand-cream text-white relative overflow-hidden min-h-screen">
      {/* Decorative vector background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(194,159,67,0.06),transparent_50%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Back navigation button if standalone page */}
        {onBackToHome && (
          <button
            onClick={onBackToHome}
            className="group mb-8 inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-brand-gold hover:text-white transition-colors cursor-pointer bg-brand-charcoal/50 border border-white/5 px-4 py-2.5 rounded-xl hover:bg-brand-charcoal"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </button>
        )}
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          <div className="lg:col-span-8 space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black tracking-tight leading-tight">
              Top 100 Birds of Uganda Checklist
            </h2>
            <p className="text-gray-400 font-light max-w-2xl text-sm leading-relaxed">
              Uganda hosts over 1,073 bird species (nearly half of Africa’s total). Below is your "Must-See 100" bird checklist from Mabamba, Kibale, Bwindi, and Lake Mburo. Shortlist your target species for your professional guide!
            </p>
          </div>

          {/* Checklist Progress Tracker Card */}
          <div className="lg:col-span-4 bg-brand-charcoal border border-white/5 p-6 rounded-3xl space-y-4 shadow-xl relative">
            <div className="flex items-center justify-between text-xs">
              <span className="font-mono text-gray-400 font-bold uppercase tracking-wider text-[10px]">YOUR SHORTLIST</span>
              <span className="text-brand-gold font-mono font-bold">{tickedCount} / {totalBirds} Targeted</span>
            </div>

            {/* Progress bar */}
            <div className="space-y-2">
              <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progressPercent}%` }}
                  transition={{ duration: 0.5 }}
                  className="h-full bg-brand-gold rounded-full"
                />
              </div>
              <div className="flex justify-between text-[11px] text-gray-400 font-semibold">
                <span>0%</span>
                <span className="text-brand-gold">{progressPercent}% Selected</span>
                <span>100%</span>
              </div>
            </div>

            {/* Reset button & download */}
            <div className="flex gap-2">
              <button
                onClick={handleReset}
                className="flex items-center justify-center space-x-1.5 px-3 py-2.5 border border-white/10 hover:border-white/20 bg-white/5 rounded-xl text-xs font-bold text-gray-300 hover:text-white transition-colors"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
              
              <button
                onClick={handleSave}
                className="flex-1 flex items-center justify-center space-x-1.5 px-3.5 py-2.5 bg-brand-gold text-[#080C0A] hover:bg-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all"
              >
                <ArrowDownToLine className="w-3.5 h-3.5" />
                <span>Save Checklist</span>
              </button>
            </div>

            {/* Custom toast inside the card */}
            {showToast && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute inset-x-4 bottom-4 bg-brand-green border border-brand-gold/20 text-brand-gold font-medium rounded-xl p-3 flex items-center space-x-2 text-xs shadow-lg z-30"
              >
                <Check className="w-4 h-4 text-brand-gold shrink-0" />
                <span>Saved {tickedCount} targeted birds to your itinerary planner!</span>
              </motion.div>
            )}
          </div>
        </div>

        {/* Dashboard Filter Bar */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center mb-10 bg-brand-charcoal/50 border border-white/5 p-4 rounded-2xl">
          
          {/* Search bar */}
          <div className="md:col-span-4 relative">
            <Search className="absolute left-3.5 top-3.5 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name or swamp/forest..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-brand-charcoal border border-white/10 rounded-xl pl-10 pr-4 py-3.5 text-xs text-gray-200 outline-none focus:border-brand-gold/50 transition-all placeholder:text-gray-500"
            />
          </div>

          {/* Section dropdown filter */}
          <div className="md:col-span-8 flex overflow-x-auto pb-1 md:pb-0 gap-2 no-scrollbar">
            {sections.map((sec) => (
              <button
                key={sec}
                onClick={() => setSelectedSection(sec)}
                className={`px-3.5 py-2.5 rounded-xl text-[10px] font-bold uppercase tracking-wider whitespace-nowrap transition-all border ${
                  selectedSection === sec
                    ? "bg-brand-gold text-[#080C0A] border-brand-gold"
                    : "bg-brand-charcoal border-white/5 text-gray-400 hover:text-white"
                }`}
              >
                {sec}
              </button>
            ))}
          </div>

        </div>

        {/* Birds list bento-grid / layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-[500px] overflow-y-auto pr-2 no-scrollbar border-y border-white/5 py-4">
          {filteredBirds.map((bird) => {
            const isTicked = tickedBirds.includes(bird.id);
            const isMustSee = bird.section === "The Big 5 Must-Sees";
            
            return (
              <div
                key={bird.id}
                onClick={() => handleToggleBird(bird.id)}
                className={`flex items-center justify-between p-4 rounded-xl cursor-pointer transition-all border ${
                  isTicked
                    ? "bg-[#1E3A2F] border-brand-gold/40 text-white shadow-md"
                    : "bg-brand-charcoal/40 border-white/5 text-gray-200 hover:bg-brand-charcoal/65 hover:border-white/15"
                }`}
              >
                <div className="flex items-center space-x-3.5">
                  {/* Custom Checkbox */}
                  <div className="text-brand-gold">
                    {isTicked ? (
                      <CheckSquare className="w-5 h-5 fill-current text-brand-gold" />
                    ) : (
                      <Square className="w-5 h-5 text-gray-500" />
                    )}
                  </div>

                  {/* Bird Details */}
                  <div className="space-y-0.5">
                    <div className="flex items-center space-x-1.5">
                      <span className="text-sm font-bold tracking-tight">
                        {bird.name}
                      </span>
                      {isMustSee && (
                        <span className="px-1.5 py-0.5 bg-brand-gold/20 border border-brand-gold/30 text-brand-gold text-[8px] font-black uppercase rounded">
                          MUST-SEE
                        </span>
                      )}
                    </div>
                    <div className="flex items-center space-x-1.5 text-[10px] text-gray-400 font-medium">
                      <span>{bird.location}</span>
                      <span>•</span>
                      <span className="text-brand-gold-light">{bird.month}</span>
                    </div>
                  </div>
                </div>

                <div className="text-gray-500 text-[10px] font-mono font-semibold">
                  #{bird.id}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footnote matching OCR metadata */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between bg-brand-charcoal/30 border border-white/5 p-5 rounded-2xl text-xs gap-4 text-gray-300 font-light">
          <div className="flex items-center space-x-3">
            <Award className="w-5 h-5 text-brand-gold shrink-0" />
            <p>
              <strong>Tour Africa Birding Expedition:</strong> All checklists are delivered on full-board 4x4 packages. Contact agent for custom birding scopes.
            </p>
          </div>
          <a
            href="https://wa.me/256782380577?text=Hi! I am interested in booking a dedicated birding safari in Uganda based on the Top 100 Checklist."
            target="_blank"
            rel="noreferrer"
            className="px-4.5 py-2.5 bg-brand-gold hover:bg-white text-[#080C0A] text-[11px] font-black uppercase tracking-widest rounded-lg transition-colors shrink-0"
          >
            Inquire for Birding Safaris
          </a>
        </div>

      </div>
    </section>
  );
}

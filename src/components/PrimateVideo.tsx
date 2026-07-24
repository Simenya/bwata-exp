import { useState } from "react";
import { motion } from "motion/react";
import { Play, QrCode, Sparkles, Smartphone, Eye, Flame } from "lucide-react";

export default function PrimateVideo() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="video-section" className="py-20 lg:py-28 bg-brand-cream text-white relative overflow-hidden">
      {/* Glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-gold/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text / Info (5 Columns) */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <h2 className="text-3xl sm:text-4xl font-serif font-black tracking-tight leading-tight">
              Bring the Wild into <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-yellow-400 to-brand-gold">
                Your Living Room
              </span>
            </h2>
            <p className="text-gray-400 font-light text-sm leading-relaxed">
              We partnered with Pearl Gorilla Tours to construct breathtaking 3D AR filters. Scan the QR code to project a full-scale Mountain Gorilla or Great Blue Turaco right into your home!
            </p>

            {/* Feature lists */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start space-x-3 bg-brand-charcoal border border-white/5 p-4 rounded-2xl">
                <div className="p-2.5 rounded-xl bg-brand-gold/15 text-brand-gold mt-0.5">
                  <Smartphone className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">No Custom Apps Required</h4>
                  <p className="text-xs text-gray-400 font-light mt-0.5 leading-relaxed">
                    Utilizes standard WebAR. Simply scan with your native iOS or Android camera app.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 bg-brand-charcoal border border-white/5 p-4 rounded-2xl">
                <div className="p-2.5 rounded-xl bg-brand-gold/15 text-brand-gold mt-0.5">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Live AR Gorilla & Turaco Models</h4>
                  <p className="text-xs text-gray-400 font-light mt-0.5 leading-relaxed">
                    Perfect for educating children and preparing yourself for the size of a real Bwindi Silverback.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Simulated Player & QR scan code (7 Columns) */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              
              {/* simulated player (Col 8) */}
              <div className="md:col-span-8 relative aspect-[16/10] bg-brand-charcoal rounded-3xl overflow-hidden border border-white/5 shadow-2xl">
                {!isPlaying ? (
                  <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-6 text-center">
                    <img
                      src="https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?auto=format&fit=crop&q=80&w=800"
                      alt="Chimpanzee video poster"
                      className="absolute inset-0 w-full h-full object-cover opacity-65 scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-brand-charcoal/40 to-transparent" />
                    
                    {/* Glowing play button */}
                    <button
                      onClick={() => setIsPlaying(true)}
                      className="relative z-20 w-16 h-16 rounded-full bg-brand-gold hover:bg-white text-[#080C0A] flex items-center justify-center pl-1 hover:scale-115 active:scale-90 transition-all cursor-pointer shadow-xl shadow-brand-gold/20"
                    >
                      <Play className="w-6 h-6 fill-current" />
                    </button>
                    
                    <span className="relative z-20 text-xs uppercase font-mono tracking-widest text-brand-gold font-bold mt-4">
                      PLAY INTRODUCTORY VIDEO
                    </span>
                    <span className="relative z-20 text-[10px] text-gray-300 mt-1 font-light">
                      Kibale Forest & Fort Portal Craters (2:45 Min)
                    </span>
                  </div>
                ) : (
                  <div className="absolute inset-0 bg-brand-charcoal flex flex-col items-center justify-center p-6 text-center">
                    {/* Simulated playing screen with rotating loading ring */}
                    <div className="w-12 h-12 rounded-full border-4 border-brand-gold border-t-transparent animate-spin mb-4" />
                    <span className="text-sm font-mono tracking-wider text-brand-gold font-bold uppercase animate-pulse">
                      STREAMING PRIMATE EXPEDITION AUDIO
                    </span>
                    <span className="text-xs text-gray-400 mt-1 font-light">
                      Experiencing 5.1 Wilderness Sounds...
                    </span>
                    <button
                      onClick={() => setIsPlaying(false)}
                      className="mt-6 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/25 border border-white/15 text-xs text-gray-300 transition-all"
                    >
                      Close Player
                    </button>
                  </div>
                )}
              </div>

              {/* QR scanner block (Col 4) */}
              <div className="md:col-span-4 p-6 rounded-3xl bg-brand-charcoal border border-white/5 text-center space-y-4 flex flex-col items-center shadow-xl">
                <div className="p-3 bg-white rounded-xl shadow-md">
                  {/* Styled SVG QR Code */}
                  <svg viewBox="0 0 100 100" className="w-24 h-24 text-brand-charcoal fill-current">
                    <rect x="0" y="0" width="25" height="25" />
                    <rect x="5" y="5" width="15" height="15" fill="#ffffff" />
                    <rect x="8" y="8" width="9" height="9" />
                    
                    <rect x="75" y="0" width="25" height="25" />
                    <rect x="80" y="5" width="15" height="15" fill="#ffffff" />
                    <rect x="83" y="8" width="9" height="9" />
 
                    <rect x="0" y="75" width="25" height="25" />
                    <rect x="5" y="80" width="15" height="15" fill="#ffffff" />
                    <rect x="8" y="83" width="9" height="9" />
 
                    {/* QR Noise blocks */}
                    <rect x="40" y="0" width="10" height="15" />
                    <rect x="60" y="10" width="5" height="15" />
                    <rect x="30" y="25" width="15" height="10" />
                    <rect x="55" y="30" width="10" height="20" />
                    <rect x="15" y="45" width="20" height="10" />
                    <rect x="40" y="60" width="20" height="15" />
                    <rect x="70" y="55" width="15" height="25" />
                    <rect x="50" y="80" width="20" height="10" />
                    <rect x="30" y="85" width="10" height="15" />
                    <rect x="85" y="40" width="15" height="10" />
                  </svg>
                </div>
                
                <div className="space-y-1">
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center justify-center space-x-1 text-brand-gold">
                    <QrCode className="w-4 h-4" />
                    <span>Scan for AR</span>
                  </h4>
                  <p className="text-[10px] text-gray-400 font-light leading-snug">
                    Point camera here to see the giant Bwindi gorilla model in 3D.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

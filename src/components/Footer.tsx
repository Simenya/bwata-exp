import { Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail, Award } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-brand-cream text-gray-300 border-t border-white/5 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 border-b border-white/5 pb-12 mb-12">
          
          {/* Brand Info (Col 4) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center space-x-3">
              <img
                src="https://ik.imagekit.io/simenya/logos/Logo_Pearl_Gorilla_Tours.png"
                alt="Pearl Gorilla Tours & Travel Safaris"
                className="h-12 sm:h-14 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
              <div className="flex flex-col">
                <span className="font-serif text-xl sm:text-2xl font-black text-white tracking-tight">
                  Pearl Gorilla
                </span>
                <span className="text-[8px] uppercase tracking-widest text-brand-gold font-mono -mt-1 font-bold">
                  Tours & Travel Safaris Ltd.
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed max-w-sm">
              "One premium platform to discover, trust, and book authentic African travel experiences. Restoring trust in primate trails and volcanic crater expeditions."
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-3.5 pt-2">
              {[
                { icon: Facebook, href: "https://facebook.com" },
                { icon: Twitter, href: "https://twitter.com" },
                { icon: Instagram, href: "https://instagram.com" },
                { icon: Youtube, href: "https://youtube.com" }
              ].map((soc, idx) => {
                const IconComponent = soc.icon;
                return (
                  <a
                    key={idx}
                    href={soc.href}
                    target="_blank"
                    rel="noreferrer"
                    className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-brand-gold hover:bg-white/10 transition-colors"
                  >
                    <IconComponent className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links (Col 2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase font-mono tracking-widest text-brand-gold font-bold">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs font-light text-gray-400">
              <li>
                <a href="#destinations" className="hover:text-white transition-colors">
                  Destinations
                </a>
              </li>
              <li>
                <a href="#itinerary-planner" className="hover:text-white transition-colors">
                  Experiences
                </a>
              </li>
              <li>
                <a href="#lodges" className="hover:text-white transition-colors">
                  Operators & Lodges
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-white transition-colors">
                  Trust & Safety
                </a>
              </li>
            </ul>
          </div>

          {/* Destination Categories (Col 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase font-mono tracking-widest text-brand-gold font-bold">
              Destination Categories
            </h4>
            <ul className="space-y-2.5 text-xs font-light text-gray-400">
              <li>
                <a href="#itinerary-planner" className="hover:text-white transition-colors">
                  Road Trips & Transits
                </a>
              </li>
              <li>
                <a href="#itinerary-planner" className="hover:text-white transition-colors">
                  Art & Primate Culture
                </a>
              </li>
              <li>
                <a href="#itinerary-planner" className="hover:text-white transition-colors">
                  Mountain Adventure
                </a>
              </li>
              <li>
                <a href="#itinerary-planner" className="hover:text-white transition-colors">
                  Savannah Wildlife Safari
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Address (Col 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase font-mono tracking-widest text-brand-gold font-bold">
              Address & Bookings
            </h4>
            <ul className="space-y-3.5 text-xs font-light text-gray-400">
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span>Main Office: Fort Portal, Uganda</span>
                  
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <Phone className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span>+256 769 805 075 (WhatsApp | Call)</span>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <Mail className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                <div className="flex flex-col"> 
                  <span>info@pearlgorillatours.com</span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Base bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-light pt-2">
          <div className="flex items-center space-x-1.5"> 
            <span>© {currentYear} Pearl Gorilla Tours & Travel Safaris Ltd. All rights reserved.</span>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#faq" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#faq" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

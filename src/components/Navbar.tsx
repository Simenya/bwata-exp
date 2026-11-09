import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, PhoneCall, Sun, Moon } from "lucide-react";
import Logo from "./Logo";
import { whatsappLink, BRAND } from "../brand";
import { useBooking } from "./BookingModal";
import { Page } from "../types";

interface NavbarProps {
  theme: "light" | "dark";
  onToggleTheme: () => void;
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const menuItems: { name: string; page: Page }[] = [
  { name: "Home", page: "home" },
  { name: "About", page: "about" },
  { name: "Experience", page: "batwa" },
  { name: "Destinations", page: "destinations" },
  { name: "Contact", page: "contact" },
];

export default function Navbar({ theme, onToggleTheme, currentPage, onNavigate }: NavbarProps) {
  const { openBooking } = useBooking();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (page: Page) => {
    setIsOpen(false);
    onNavigate(page);
  };

  // On the home hero (dark photo) the bar stays transparent; elsewhere it is solid
  const solid = isScrolled || currentPage !== "home";

  return (
    <nav
      id="main-nav"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        solid ? "bg-brand-cream/95 border-b border-white/5 shadow-md py-2 backdrop-blur-md" : "bg-gradient-to-b from-black/60 to-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => go("home")}
            className="cursor-pointer bg-transparent border-0 p-0 outline-none"
            aria-label={`${BRAND.name} home`}
          >
            <span className={solid ? "" : "[&_*]:!text-white"}>
              <Logo />
            </span>
          </button>

          <div className="hidden xl:flex items-center space-x-1">
            {menuItems.map((item) => {
              const isActive = currentPage === item.page;
              return (
                <button
                  key={item.name}
                  onClick={() => go(item.page)}
                  className={`px-3 py-2 rounded-lg text-[11px] font-bold uppercase tracking-wider cursor-pointer transition-colors duration-300 relative ${
                    isActive
                      ? "text-brand-gold font-extrabold"
                      : solid
                      ? "text-gray-300 hover:text-brand-gold"
                      : "!text-white/90 hover:!text-brand-gold"
                  }`}
                >
                  <span className="relative z-10">{item.name}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeUnderline"
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-brand-gold rounded-full"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => openBooking()}
              className="hidden sm:inline-flex items-center px-4 py-2.5 rounded-lg bg-brand-gold text-[#080C0A] text-[11px] font-black uppercase tracking-wider hover:bg-white transition-colors cursor-pointer"
            >
              Book
            </button>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="hidden md:flex xl:hidden 2xl:flex items-center space-x-1.5 px-3 py-2.5 rounded-lg border border-brand-gold/30 text-xs font-semibold text-brand-gold hover:bg-brand-gold/10 transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>{BRAND.whatsappDisplay}</span>
            </a>
            <button
              onClick={onToggleTheme}
              className={`p-2 rounded-lg border border-white/10 hover:border-brand-gold/40 hover:bg-brand-gold/10 transition-all cursor-pointer ${
                solid ? "text-brand-gold" : "!text-white"
              }`}
              aria-label="Toggle theme"
            >
              {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`xl:hidden p-2 rounded-lg hover:text-brand-gold focus:outline-none cursor-pointer ${
                solid ? "text-gray-200" : "!text-white"
              }`}
              aria-label="Open menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="xl:hidden bg-brand-cream border-b border-white/5 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-4 space-y-1 sm:px-6">
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => go(item.page)}
                  className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-bold uppercase tracking-wider transition-all ${
                    currentPage === item.page
                      ? "text-brand-gold bg-brand-gold/10 border-l-4 border-brand-gold pl-3"
                      : "text-gray-300 hover:bg-brand-gold/10 pl-4"
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-3 px-1 space-y-2">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    openBooking();
                  }}
                  className="flex items-center justify-center w-full py-3 rounded-lg bg-brand-gold text-[#080C0A] text-xs font-black uppercase tracking-wider cursor-pointer"
                >
                  Book
                </button>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center space-x-2 w-full py-3 rounded-lg border border-brand-gold/40 text-brand-gold text-xs font-black uppercase tracking-wider"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>WhatsApp: {BRAND.whatsappDisplay}</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

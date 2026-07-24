import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Globe, PhoneCall, CheckCircle, Sun, Moon } from "lucide-react";

interface NavbarProps {
  theme: "light" | "dark";
  onToggleTheme: () => void;
  currentPage: "home" | "birding" | "faq";
  onPageChange: (page: "home" | "birding" | "faq", hash?: string) => void;
}

export default function Navbar({ theme, onToggleTheme, currentPage, onPageChange }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScrollAndSpy = () => {
      // 1. Scroll header highlight
      setIsScrolled(window.scrollY > 20);

      // 2. Active section spy logic
      if (currentPage === "birding") {
        setActiveSection("birding");
        return;
      }
      if (currentPage === "faq") {
        setActiveSection("faq");
        return;
      }

      const sections = ["home", "destinations", "itinerary-planner", "testimonials"];
      const scrollPosition = window.scrollY + 200; // offset for navbar height + buffer

      // Special check: if at the absolute top of page, force 'home'
      if (window.scrollY < 100) {
        setActiveSection("home");
        return;
      }

      let found = false;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            found = true;
            break;
          }
        }
      }

      if (!found && window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 50) {
        setActiveSection("testimonials"); // fallthrough for the bottom of the page
      }
    };

    window.addEventListener("scroll", handleScrollAndSpy);
    // Trigger on mount and when currentPage changes
    handleScrollAndSpy();

    return () => window.removeEventListener("scroll", handleScrollAndSpy);
  }, [currentPage]);

  const menuItems = [
    { name: "Home", href: "#home", page: "home" as const },
    { name: "Destinations", href: "#destinations", page: "home" as const },
    { name: "Itinerary Planner", href: "#itinerary-planner", page: "home" as const },
    { name: "Testimonials", href: "#testimonials", page: "home" as const },
    { name: "FAQ", href: "#faq", page: "faq" as const },
    { name: "Birding Checklist", href: "#birding", page: "birding" as const }
  ];

  return (
    <nav
      id="main-nav"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-brand-cream/90 border-b border-white/5 shadow-md py-3 backdrop-blur-md"
          : "bg-gradient-to-b from-brand-cream/80 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <button onClick={() => onPageChange("home", "#home")} className="flex items-center group cursor-pointer bg-transparent border-0 p-0 outline-none">
              <img
                src="https://ik.imagekit.io/simenya/logos/Logo_Pearl_Gorilla_Tours.png"
                alt="Pearl Gorilla Tours & Travel Safaris"
                className="h-16 sm:h-20 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                referrerPolicy="no-referrer"
              />
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {menuItems.map((item) => {
              const isActive = (currentPage === item.page && (item.page === "birding" || item.page === "faq")) || 
                               (currentPage === "home" && activeSection === item.href.slice(1));
              return (
                <button
                  key={item.name}
                  onClick={() => onPageChange(item.page, item.href)}
                  className={`px-3 py-2 rounded-lg text-xs font-bold uppercase tracking-wider cursor-pointer transition-colors duration-300 relative group ${
                    isActive
                      ? "text-brand-gold font-extrabold"
                      : "text-gray-300 hover:text-brand-gold"
                  }`}
                >
                  <span className="relative z-10">{item.name}</span>
                  {/* Sliding Underline Animation */}
                  {isActive ? (
                    <motion.div
                      layoutId="activeUnderline"
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-brand-gold rounded-full"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  ) : (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-brand-gold/50 rounded-full transition-all duration-300 group-hover:w-3/4" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href="https://wa.me/256769805075"
              target="_blank"
              rel="noreferrer"
              className="flex items-center space-x-1.5 px-3 py-2 rounded-lg border border-brand-gold/30 bg-brand-charcoal/40 text-xs font-semibold text-brand-gold hover:bg-brand-gold/10 transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Contact Us</span>
            </a>
            {/* Theme Toggle Button */}
            <button
              onClick={onToggleTheme}
              className="p-2 rounded-lg border border-white/10 hover:border-brand-gold/40 bg-brand-charcoal/40 text-brand-gold hover:bg-brand-gold/10 transition-all cursor-pointer flex items-center justify-center shadow-sm"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <Moon className="w-4 h-4" />
              ) : (
                <Sun className="w-4 h-4" />
              )}
            </button>
          </div>

          {/* Mobile hamburger menu toggle */}
          <div className="flex lg:hidden items-center space-x-2">
            {/* Mobile Theme Toggle Button */}
            <button
              onClick={onToggleTheme}
              className="p-2 text-brand-gold hover:bg-white/10 rounded-lg sm:hidden"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5" />
              )}
            </button>
            <a
              href="https://wa.me/256769805075"
              target="_blank"
              rel="noreferrer"
              className="p-2 text-brand-gold hover:bg-white/10 rounded-lg sm:hidden"
            >
              <PhoneCall className="w-5 h-5" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-200 hover:text-brand-gold hover:bg-white/5 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-brand-cream border-b border-white/5"
          >
            <div className="px-4 pt-2 pb-4 space-y-1 sm:px-6">
              {menuItems.map((item) => {
                const isActive = (currentPage === item.page && (item.page === "birding" || item.page === "faq")) || 
                                 (currentPage === "home" && activeSection === item.href.slice(1));
                return (
                  <button
                    key={item.name}
                    onClick={() => {
                      setIsOpen(false);
                      onPageChange(item.page, item.href);
                    }}
                    className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                      isActive
                        ? "text-brand-gold bg-brand-gold/10 font-extrabold border-l-4 border-brand-gold pl-3"
                        : "text-gray-300 hover:text-white hover:bg-brand-gold/10 pl-4"
                    }`}
                  >
                    {item.name}
                  </button>
                );
              })}
              <div className="pt-4 flex flex-col gap-3 px-3">
                <a
                  href="https://wa.me/256769805075"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center space-x-2 w-full py-3 rounded-lg border border-brand-gold/30 bg-brand-gold/5 text-xs font-semibold text-brand-gold"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Call/WhatsApp Victor: 0769805075</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

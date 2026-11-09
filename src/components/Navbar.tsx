import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, PhoneCall, Sun, Moon, ChevronDown } from "lucide-react";
import Logo from "./Logo";
import { useBooking } from "./BookingModal";
import { whatsappLink, BRAND } from "../brand";
import { packages } from "../content";
import { Page } from "../types";

interface NavbarProps {
  theme: "light" | "dark";
  onToggleTheme: () => void;
  currentPage: Page;
  onNavigate: (page: Page, param?: string) => void;
}

/** One clickable entry inside a dropdown */
interface Entry {
  label: string;
  go?: { page: Page; param?: string };
  /** open the booking form pre-selected with this interest */
  book?: string;
}
interface Group {
  heading?: string;
  entries: Entry[];
}
interface MenuDef {
  name: string;
  /** plain link when there is no dropdown */
  page?: Page;
  /** pages that make this menu look "active" */
  active?: Page[];
  groups?: Group[];
}

const menus: MenuDef[] = [
  { name: "Home", page: "home" },
  { name: "About", page: "about" },
  {
    name: "Experience",
    active: ["batwa", "birding"],
    groups: [
      {
        entries: [
          { label: "Cultural Experience (Batwa)", go: { page: "batwa" } },
          { label: "Birding & Nature", go: { page: "birding" } },
          { label: "Gorilla & Primate Trekking", book: "Gorilla & Primate Trekking" },
          { label: "Active Adventure", book: "Active Adventure" },
        ],
      },
    ],
  },
  {
    name: "Destinations",
    active: ["destinations"],
    groups: [
      {
        entries: [
          { label: "Uganda", go: { page: "destinations", param: "uganda" } },
          { label: "Kenya", go: { page: "destinations", param: "kenya" } },
          { label: "Rwanda", go: { page: "destinations", param: "rwanda" } },
          { label: "Tanzania", go: { page: "destinations", param: "tanzania" } },
        ],
      },
    ],
  },
  {
    name: "Safaris",
    active: ["packages"],
    groups: [
      {
        heading: "Safari Journeys",
        entries: packages.map((p) => ({ label: p.name, go: { page: "packages" as Page, param: p.id } })),
      },
      {
        heading: "Safaris by Interest",
        entries: [
          { label: "Wildlife Safari", book: "Wildlife Safari" },
          { label: "Luxury & Photography", book: "Luxury & Photography" },
          { label: "Honeymoon", book: "Honeymoon" },
          { label: "Family Safari", book: "Family Safari" },
          { label: "Eco Tours", book: "Eco Tours" },
        ],
      },
    ],
  },
  { name: "Contact", page: "contact" },
];

export default function Navbar({ theme, onToggleTheme, currentPage, onNavigate }: NavbarProps) {
  const { openBooking } = useBooking();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeAll = () => {
    setIsOpen(false);
    setHovered(null);
    setMobileOpen(null);
  };

  const choose = (e: Entry) => {
    closeAll();
    if (e.go) onNavigate(e.go.page, e.go.param);
    else if (e.book) openBooking(e.book);
  };

  const go = (page: Page) => {
    closeAll();
    onNavigate(page);
  };

  const isActive = (m: MenuDef) => (m.page ? currentPage === m.page : !!m.active?.includes(currentPage));

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

          {/* Desktop menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {menus.map((m) => {
              const active = isActive(m);
              const cls = `px-3 py-2 rounded-lg text-[11px] font-bold uppercase tracking-wider cursor-pointer transition-colors duration-300 relative inline-flex items-center gap-1 ${
                active ? "text-brand-gold font-extrabold" : solid ? "text-gray-300 hover:text-brand-gold" : "!text-white/90 hover:!text-brand-gold"
              }`;
              if (!m.groups) {
                return (
                  <button key={m.name} onClick={() => go(m.page!)} className={cls}>
                    {m.name}
                    {active && <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-brand-gold rounded-full" />}
                  </button>
                );
              }
              const open = hovered === m.name;
              return (
                <div
                  key={m.name}
                  className="relative"
                  onMouseEnter={() => setHovered(m.name)}
                  onMouseLeave={() => setHovered(null)}
                  onKeyDown={(e) => e.key === "Escape" && setHovered(null)}
                >
                  <button className={cls} aria-haspopup="true" aria-expanded={open} onClick={() => setHovered(open ? null : m.name)}>
                    {m.name}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
                    {active && <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-brand-gold rounded-full" />}
                  </button>
                  <AnimatePresence>
                    {open && (
                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.15 }}
                        className={`absolute top-full pt-2 z-50 ${m.groups.length > 1 ? "right-0" : "left-0"}`}
                      >
                        <div className={`bg-brand-cream border border-white/10 border-t-2 !border-t-brand-gold rounded-b-2xl shadow-2xl p-5 grid gap-x-8 ${m.groups.length > 1 ? "grid-cols-2 w-[34rem]" : "w-64"}`}>
                          {m.groups.map((g, gi) => (
                            <div key={gi} className="space-y-1 min-w-0">
                              {g.heading && (
                                <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-brand-gold pb-2 mb-1 border-b border-brand-gold/30">
                                  {g.heading}
                                </div>
                              )}
                              {g.entries.map((e) => (
                                <button
                                  key={e.label}
                                  onClick={() => choose(e)}
                                  className="block w-full text-left px-3 py-2 rounded-lg text-xs font-semibold text-gray-300 hover:bg-brand-gold/10 hover:text-brand-gold transition-colors cursor-pointer"
                                >
                                  {e.label}
                                </button>
                              ))}
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => {
                closeAll();
                openBooking();
              }}
              className="hidden sm:inline-flex items-center px-4 py-2.5 rounded-lg bg-brand-gold text-[#080C0A] text-[11px] font-black uppercase tracking-wider hover:bg-white transition-colors cursor-pointer"
            >
              Book
            </button>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="hidden 2xl:flex items-center space-x-1.5 px-3 py-2.5 rounded-lg border border-brand-gold/30 text-xs font-semibold text-brand-gold hover:bg-brand-gold/10 transition-colors"
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
              className={`lg:hidden p-2 rounded-lg hover:text-brand-gold focus:outline-none cursor-pointer ${
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

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-brand-cream border-b border-white/5 overflow-hidden max-h-[80vh] overflow-y-auto"
          >
            <div className="px-4 pt-2 pb-4 space-y-1 sm:px-6">
              {menus.map((m) => {
                const active = isActive(m);
                const base = `flex items-center justify-between w-full text-left px-4 py-3 rounded-lg text-sm font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  active ? "text-brand-gold bg-brand-gold/10" : "text-gray-300 hover:bg-brand-gold/10"
                }`;
                if (!m.groups) {
                  return (
                    <button key={m.name} onClick={() => go(m.page!)} className={base}>
                      {m.name}
                    </button>
                  );
                }
                const open = mobileOpen === m.name;
                return (
                  <div key={m.name}>
                    <button onClick={() => setMobileOpen(open ? null : m.name)} className={base} aria-expanded={open}>
                      {m.name}
                      <ChevronDown className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`} />
                    </button>
                    {open && (
                      <div className="ml-4 pl-3 border-l border-brand-gold/30 py-1 space-y-0.5">
                        {m.groups.map((g, gi) => (
                          <div key={gi}>
                            {g.heading && (
                              <div className="px-3 pt-2 pb-1 text-[10px] font-mono font-bold uppercase tracking-widest text-brand-gold">{g.heading}</div>
                            )}
                            {g.entries.map((e) => (
                              <button
                                key={e.label}
                                onClick={() => choose(e)}
                                className="block w-full text-left px-3 py-2.5 rounded-lg text-xs font-semibold text-gray-300 hover:text-brand-gold cursor-pointer"
                              >
                                {e.label}
                              </button>
                            ))}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
              <div className="pt-3 px-1 space-y-2">
                <button
                  onClick={() => {
                    closeAll();
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

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import DestinationsList from "./components/DestinationsList";
import InteractivePlanner from "./components/InteractivePlanner";
import LodgeShowcase from "./components/LodgeShowcase";
import PrimateVideo from "./components/PrimateVideo";
import BirdChecklist from "./components/BirdChecklist";
import WhyUs from "./components/WhyUs";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function App() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [currentPage, setCurrentPage] = useState<"home" | "birding" | "faq">("home");

  useEffect(() => {
    // Read from localStorage on mount, default to dark
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (savedTheme === "light") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const handlePageChange = (page: "home" | "birding" | "faq", hash?: string) => {
    setCurrentPage(page);
    if (page === "home") {
      if (hash && hash !== "#home") {
        setTimeout(() => {
          const el = document.querySelector(hash);
          if (el) {
            el.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-brand-cream overflow-x-hidden selection:bg-brand-gold selection:text-brand-charcoal transition-colors duration-300">
      {/* 1. Glass Floating Navigation */}
      <Navbar theme={theme} onToggleTheme={toggleTheme} currentPage={currentPage} onPageChange={handlePageChange} />

      {currentPage === "home" ? (
        <>
          {/* 2. Hero Header with Interactive Coordinate Map */}
          <Hero />

          {/* 3. Global Statistics counter bar */}
          <Stats />

          {/* 4. Popular Destinations Grid with Fort Portal Highlight */}
          <DestinationsList />

          {/* 5. Core Attraction: Interactive Day-by-Day Itinerary Planner */}
          <InteractivePlanner />

          {/* 6. Lodge Compare Segment (Luxury vs Classic Comfort) */}
          <LodgeShowcase />

          {/* 7. Augmented Reality (AR) & Video media compartment */}
          <PrimateVideo />

          {/* 8. Core Value Proposition Grid */}
          <WhyUs />

          {/* 9. Travel Photo Chronicles Gallery with lightbox */}
          <Gallery />

          {/* 10. Guest testimonial sliders */}
          <Testimonials />
        </>
      ) : currentPage === "birding" ? (
        /* Standalone Birdwatching Checklist Page */
        <BirdChecklist onBackToHome={() => handlePageChange("home")} />
      ) : (
        /* Standalone FAQ Page */
        <FAQ onBackToHome={() => handlePageChange("home")} />
      )}

      {/* Rich Responsive Footer */}
      <Footer />
    </div>
  );
}

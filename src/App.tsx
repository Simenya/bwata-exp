/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useCallback } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import InterestGrid from "./components/InterestGrid";
import DestinationsList from "./components/DestinationsList";
import FeaturedPackages from "./components/FeaturedPackages";
import BatwaTeaser from "./components/BatwaTeaser";
import InteractivePlanner from "./components/InteractivePlanner";
import BirdChecklist from "./components/BirdChecklist";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import AboutPage from "./components/AboutPage";
import BatwaPage from "./components/BatwaPage";
import ContactPage from "./components/ContactPage";
import PageHeader from "./components/PageHeader";
import InquiryForm from "./components/InquiryForm";
import { BookingProvider } from "./components/BookingModal";
import WhatsAppFloat from "./components/WhatsAppFloat";
import { images } from "./content";
import { BRAND } from "./brand";
import { Page } from "./types";

const PAGES: Page[] = ["home", "about", "batwa", "destinations", "packages", "faq", "contact", "birding"];

const TITLES: Record<Page, string> = {
  home: `${BRAND.short} | East Africa Safaris: Kenya, Rwanda, Uganda & Tanzania`,
  about: `About Us | ${BRAND.short}`,
  batwa: `Batwa Cultural Experience, Bwindi | ${BRAND.short}`,
  destinations: `Safari Destinations: Kenya, Rwanda, Uganda, Tanzania | ${BRAND.short}`,
  packages: `Safari Packages & Itineraries | ${BRAND.short}`,
  faq: `FAQ | ${BRAND.short}`,
  contact: `Contact & Booking | ${BRAND.short}`,
  birding: `Top 100 Birds of Uganda Checklist | ${BRAND.short}`,
};

const pageFromHash = (): Page => {
  const raw = window.location.hash.replace(/^#\/?/, "");
  return (PAGES as string[]).includes(raw) ? (raw as Page) : "home";
};

export default function App() {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    try {
      return localStorage.getItem("bwe-theme") === "dark" ? "dark" : "light";
    } catch {
      return "light";
    }
  });
  const [page, setPage] = useState<Page>(pageFromHash);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    try {
      localStorage.setItem("bwe-theme", theme);
    } catch {
      /* storage unavailable */
    }
  }, [theme]);

  useEffect(() => {
    const onHash = () => setPage(pageFromHash());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  useEffect(() => {
    document.title = TITLES[page];
    window.scrollTo({ top: 0 });
  }, [page]);

  const navigate = useCallback((p: Page) => {
    window.location.hash = p === "home" ? "" : `/${p}`;
    setPage(p);
  }, []);

  const goHome = useCallback(() => navigate("home"), [navigate]);

  return (
    <BookingProvider>
    <div className="min-h-screen bg-brand-cream overflow-x-hidden selection:bg-brand-gold selection:text-brand-charcoal transition-colors duration-300">
      <Navbar
        theme={theme}
        onToggleTheme={() => setTheme((t) => (t === "light" ? "dark" : "light"))}
        currentPage={page}
        onNavigate={navigate}
      />

      <main>
        {page === "home" && (
          <>
            <Hero onNavigate={navigate} />
            <InterestGrid />
            <DestinationsList
              limit={6}
              heading="Where We Take You"
              onSeeAll={() => navigate("destinations")}
            />
            <FeaturedPackages onNavigate={navigate} />
            <BatwaTeaser onNavigate={navigate} />
            <Testimonials />
            <section className="py-16 lg:py-24 bg-brand-cream">
              <div className="max-w-6xl mx-auto px-4 sm:px-6 grid gap-10 lg:grid-cols-2 lg:items-center">
                <div className="space-y-5 text-center lg:text-left">
                  <h2 className="text-3xl sm:text-5xl font-serif font-black text-white leading-tight">Ready to Start Your Journey?</h2>
                  <p className="text-gray-400 font-light max-w-md mx-auto lg:mx-0">
                    Tell us where and when. We will build the route and reply with a tailored itinerary.
                  </p>
                  <div className="text-sm text-gray-300 space-y-1">
                    <p>{BRAND.email}</p>
                    <p>{BRAND.whatsappDisplay} · WhatsApp &amp; calls</p>
                  </div>
                </div>
                <InquiryForm />
              </div>
            </section>
          </>
        )}

        {page === "about" && <AboutPage />}
        {page === "batwa" && <BatwaPage />}

        {page === "destinations" && (
          <>
            <PageHeader
              kicker="Safari Destinations"
              title="Kenya, Rwanda, Uganda & Tanzania"
              subtitle="The Masai Mara, Rwanda's volcanoes, Uganda's forests and Tanzania's Serengeti."
              image={images.savannahSunset}
            />
            <DestinationsList heading="All Destinations" />
            <InterestGrid />
          </>
        )}

        {page === "packages" && (
          <>
            <PageHeader
              kicker="Packages"
              title="Safari Packages"
              subtitle="From 3-day escapes to 10-day multi-country journeys across East Africa."
              image={images.savannahSunset}
            />
            <InteractivePlanner />
            <FeaturedPackages onNavigate={navigate} featuredOnly={false} />
          </>
        )}

        {page === "faq" && <FAQ onBackToHome={goHome} />}
        {page === "contact" && <ContactPage />}
        {page === "birding" && <BirdChecklist onBackToHome={goHome} />}
      </main>

      <Footer onNavigate={navigate} />
      <WhatsAppFloat />
    </div>
    </BookingProvider>
  );
}

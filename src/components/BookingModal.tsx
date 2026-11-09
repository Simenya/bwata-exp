import { createContext, useCallback, useContext, useEffect, useState, ReactNode } from "react";
import { X } from "lucide-react";
import InquiryForm from "./InquiryForm";

interface BookingCtx {
  /** Open the booking form, optionally pre-selecting a package / category / destination */
  openBooking: (interest?: string) => void;
}

const Ctx = createContext<BookingCtx>({ openBooking: () => {} });
export const useBooking = () => useContext(Ctx);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [interest, setInterest] = useState("");
  const [nonce, setNonce] = useState(0);

  const openBooking = useCallback((i = "") => {
    setInterest(i);
    setNonce((n) => n + 1);
    setOpen(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <Ctx.Provider value={{ openBooking }}>
      {children}
      {open && (
        <div
          className="fixed inset-0 z-[80] flex items-start sm:items-center justify-center overflow-y-auto bg-black/70 p-4 backdrop-blur-sm"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Book your safari"
        >
          <div className="relative my-6 w-full max-w-xl" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute right-3 top-3 z-10 rounded-full bg-brand-cream p-2 text-gray-300 hover:text-brand-gold cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>
            <div key={nonce}><InquiryForm defaultPackage={interest} title="Book Your Safari" /></div>
          </div>
        </div>
      )}
    </Ctx.Provider>
  );
}

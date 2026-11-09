import { FormEvent, useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { BRAND } from "../brand";
import { packages, interests } from "../content";

interface InquiryFormProps {
  /** Pre-selected package id or label */
  defaultPackage?: string;
  /** "batwa" tweaks the copy and adds the Batwa experience option */
  variant?: "general" | "batwa";
  title?: string;
  subtitle?: string;
}

const ENDPOINT =
  (import.meta.env.VITE_FORM_ENDPOINT as string | undefined) || `https://formsubmit.co/ajax/${BRAND.email}`;

const inputCls =
  "w-full bg-brand-cream border border-white/10 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-brand-gold/60 transition-colors placeholder:text-gray-500";

export default function InquiryForm({
  defaultPackage = "",
  variant = "general",
  title = "Book Your Safari",
  subtitle = "Tell us your dates and group size. We reply with a tailored quote, usually within a day.",
}: InquiryFormProps) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    dates: "",
    pkg: defaultPackage,
    people: "2",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const set = (k: keyof typeof form) => (e: { target: { value: string } }) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const buildMessage = () =>
    [
      variant === "batwa"
        ? "Hello Batwa Wider Expedition! I would like to book the Batwa Cultural Experience."
        : "Hello Batwa Wider Expedition! I would like a safari quote.",
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Travel dates: ${form.dates || "flexible"}`,
      `Package / interest: ${form.pkg || "not sure yet"}`,
      `Number of people: ${form.people}`,
      form.message ? `Notes: ${form.message}` : "",
    ]
      .filter(Boolean)
      .join("\n");

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: variant === "batwa" ? "Batwa Cultural Experience booking" : "New safari booking enquiry",
          _replyto: form.email,
          _template: "table",
          Name: form.name,
          Email: form.email,
          "Travel dates": form.dates || "flexible",
          "Package / interest": form.pkg || "not sure yet",
          "Number of people": form.people,
          Notes: form.message,
        }),
      });
      if (!res.ok) throw new Error("bad response");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  const mailto = `mailto:${BRAND.email}?subject=${encodeURIComponent(
    variant === "batwa" ? "Batwa Cultural Experience booking" : "Safari enquiry"
  )}&body=${encodeURIComponent(buildMessage())}`;

  const options = [
    ...(variant === "batwa" ? ["Batwa Cultural Experience (add-on to my Bwindi trip)"] : []),
    ...packages.map((p) => p.name),
    ...interests.map((i) => i.title),
    "Kenya",
    "Rwanda",
    "Uganda",
    "Tanzania",
    "Custom / not sure yet",
  ];

  if (status === "sent") {
    return (
      <div className="bg-brand-charcoal border border-white/10 rounded-3xl p-8 shadow-xl text-center space-y-3">
        <CheckCircle2 className="mx-auto h-12 w-12 text-brand-gold" />
        <h3 className="text-2xl font-serif font-black text-white">Thank you, {form.name.split(" ")[0] || "traveller"}!</h3>
        <p className="text-sm text-gray-400 font-light">We have received your request and will reply to {form.email} shortly.</p>
      </div>
    );
  }

  return (
    <form
      id="inquiry"
      onSubmit={onSubmit}
      className="bg-brand-charcoal border border-white/10 rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col gap-5 h-full"
    >
      <div className="space-y-1">
        <h3 className="text-2xl font-serif font-black text-white">{title}</h3>
        <p className="text-sm text-gray-400 font-light">{subtitle}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <label className="space-y-1.5 text-xs font-bold uppercase tracking-wider text-gray-300">
          Name
          <input required value={form.name} onChange={set("name")} className={inputCls} placeholder="Your full name" autoComplete="name" />
        </label>
        <label className="space-y-1.5 text-xs font-bold uppercase tracking-wider text-gray-300">
          Email
          <input required type="email" value={form.email} onChange={set("email")} className={inputCls} placeholder="you@example.com" autoComplete="email" />
        </label>
        <label className="space-y-1.5 text-xs font-bold uppercase tracking-wider text-gray-300">
          Travel dates
          <input value={form.dates} onChange={set("dates")} className={inputCls} placeholder="e.g. 10-19 Aug 2027" />
        </label>
        <label className="space-y-1.5 text-xs font-bold uppercase tracking-wider text-gray-300">
          Number of people
          <input type="number" min={1} max={40} value={form.people} onChange={set("people")} className={inputCls} />
        </label>
      </div>

      <label className="block space-y-1.5 text-xs font-bold uppercase tracking-wider text-gray-300">
        Package or interest
        <select value={form.pkg} onChange={set("pkg")} className={inputCls}>
          <option value="">Select a package or interest</option>
          {options.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </label>

      <label className="flex flex-col flex-1 gap-1.5 text-xs font-bold uppercase tracking-wider text-gray-300">
        Anything else? (optional)
        <textarea rows={3} style={{ minHeight: "5rem" }} value={form.message} onChange={set("message")} className={`${inputCls} flex-1 resize-none`} placeholder="Interests, budget, special occasions..." />
      </label>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-brand-gold px-5 py-3.5 text-xs font-black uppercase tracking-wider text-[#080C0A] transition-all hover:bg-white active:scale-[0.98] disabled:opacity-60 cursor-pointer"
      >
        <Send className="h-4 w-4" /> {status === "sending" ? "Sending..." : "Send Request"}
      </button>
      {status === "error" && (
        <p className="text-xs text-red-400">
          Sorry, that did not go through. Please try again or email us directly at{" "}
          <a href={mailto} className="underline">{BRAND.email}</a>.
        </p>
      )}
    </form>
  );
}

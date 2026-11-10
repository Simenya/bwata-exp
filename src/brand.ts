export const BRAND = {
  name: "Batwa Wider Expedition Tour Ltd",
  short: "Batwa Wider Expedition",
  tagline: "Safaris & Cultural Journeys Across East Africa",
  email: "info@batwawiderexpedition.com",
  domain: "https://www.batwawiderexpedition.com",
  office: "Kampala, Uganda",
  whatsappNumber: "256782380577", // WhatsApp line (international format, no leading 0)
  whatsappDisplay: "0782 380 577",
  social: {
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    tripadvisor: "https://www.tripadvisor.com/",
  },
} as const;

export const whatsappLink = (message?: string) =>
  `https://wa.me/${BRAND.whatsappNumber}${message ? `?text=${encodeURIComponent(message)}` : ""}`;

export interface ItineraryDay {
  dayNumber: number;
  title: string;
  activity: string;
  morning: string;
  afternoon: string;
  evening?: string;
  overnight: string;
  meals: string;
  image: string;
}

export interface Itinerary {
  id: string;
  name: string;
  subtitle: string;
  duration: string;
  countries: string[];
  overview: string;
  highlights: string[];
  days: ItineraryDay[];
  inclusions: string[];
  exclusions: string[];
  featured?: boolean;
  image: string;
}

export interface Bird {
  id: number;
  name: string;
  location: string;
  month: string;
  section: string;
}

export type Country = "Uganda" | "Kenya" | "Tanzania" | "Rwanda";

export interface Destination {
  id: string;
  name: string;
  country: Country;
  tag: string;
  summary: string;
  highlights: string[];
  image: string;
  /** "direct" = we run it from Kampala; "partner" = arranged with regional partners */
  operation: "direct" | "partner";
}

export interface Interest {
  id: string;
  title: string;
  blurb: string;
  image: string;
}

export interface TeamMember {
  name: string;
  role: string;
  phone: string;
  tel: string;
  initials: string;
}

export type Page =
  | "home"
  | "about"
  | "batwa"
  | "destinations"
  | "packages"
  | "gallery"
  | "faq"
  | "contact"
  | "birding";

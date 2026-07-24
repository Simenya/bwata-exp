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

export interface Lodge {
  name: string;
  location: string;
  stars: number;
  price: string;
  description: string;
  image: string;
  amenities: string[];
}

export interface Itinerary {
  id: string;
  name: string;
  subtitle: string;
  price: string;
  style: string;
  overview: string;
  days: ItineraryDay[];
  inclusions: string[];
  exclusions: string[];
  hotels: { location: string; name: string; why: string; tier: string }[];
}

export interface Bird {
  id: number;
  name: string;
  location: string;
  month: string;
  section: string;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  quote: string;
  tripType: string;
  date: string;
}

export interface Destination {
  id: string;
  title: string;
  country: string;
  price: string;
  rating: number;
  reviews: number;
  tag: string;
  image: string;
}

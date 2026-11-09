import { Destination, Interest, Itinerary, TeamMember } from "./types";

/**
 * NOTE: photos below are stock / existing placeholders. Swap them for the
 * company's own banners and photos (requested from the CEO) when available.
 */
const IMG = {
  savannahSunset: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=1200",
  chimp: "https://ik.imagekit.io/simenya/assets/bwindi_climbing_chimp.jpg",
  lions: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&q=80&w=1200",
  forest: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&q=80&w=1200",
  hills: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=1200",
  plains: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&q=80&w=1200",
  zebras: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&q=80&w=1200",
  gorilla: "https://ik.imagekit.io/simenya/assets/bwindi_ug.jpg",
  lodge: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=1200",
  bwindi: "https://ik.imagekit.io/simenya/assets/bwindi_ug.jpg",
  bwindiTrek: "https://ik.imagekit.io/simenya/assets/bwindi_climbing_chimp.jpg",
  mburo: "https://ik.imagekit.io/simenya/assets/lake_mburo_np.png",
  gameDrive: "https://ik.imagekit.io/simenya/assets/Featured-Game-Drive-Sunrise-Safari-Jeep.jpg",
  mweya: "https://ik.imagekit.io/simenya/assets/mweya_safari_lodge.jpg",
  batwa: `${import.meta.env.BASE_URL}batwa-experience.jpg`,
  cultural: `${import.meta.env.BASE_URL}cultural.jpg`,
};

export const images = IMG;

export const destinations: Destination[] = [
  // ---------------- UGANDA (operated directly from Kampala) ----------------
  {
    id: "murchison",
    name: "Murchison Falls National Park",
    country: "Uganda",
    tag: "Big Game & the Nile",
    summary:
      "Uganda's largest park, split by the Nile as it thunders through a 7-metre gap. Game drives on the northern bank, a boat cruise to the base of the falls, and a hike to the top.",
    highlights: [
      "Boat cruise to the base of Murchison Falls",
      "Game drives: lions, elephants, giraffe, buffalo",
      "Add Ziwa Rhino Sanctuary on the way to complete a Big 5 circuit",
    ],
    image: IMG.lions,
    operation: "direct",
  },
  {
    id: "kibale",
    name: "Kibale Forest & Fort Portal",
    country: "Uganda",
    tag: "Chimpanzee Trekking",
    summary:
      "The primate capital of the world, with 13 primate species and the highest density of chimpanzees in Africa, set among crater lakes and tea estates around Fort Portal.",
    highlights: [
      "Chimpanzee trekking in Kibale",
      "Bigodi Wetland Sanctuary swamp walk",
      "Crater lakes and Fort Portal tea country",
    ],
    image: IMG.chimp,
    operation: "direct",
  },
  {
    id: "queen-elizabeth",
    name: "Queen Elizabeth National Park",
    country: "Uganda",
    tag: "Tree-Climbing Lions",
    summary:
      "Savannah, crater lakes and the Kazinga Channel, famous for the tree-climbing lions of the Ishasha sector and huge concentrations of hippos and elephants.",
    highlights: [
      "Tree-climbing lions in Ishasha",
      "Kazinga Channel boat cruise",
      "Morning and evening game drives",
    ],
    image: IMG.mweya,
    operation: "direct",
  },
  {
    id: "bwindi",
    name: "Bwindi Impenetrable National Park",
    country: "Uganda",
    tag: "Gorilla Trekking & Batwa",
    summary:
      "Ancient mist-covered rainforest and home to roughly half of the world's mountain gorillas. It is also home territory of the Batwa people, our cultural partners.",
    highlights: [
      "Mountain gorilla trekking (permits arranged separately)",
      "Batwa Cultural Experience led by Batwa elders",
      "Scenic Kigezi highlands",
    ],
    image: IMG.bwindi,
    operation: "direct",
  },
  {
    id: "bunyonyi",
    name: "Lake Bunyonyi",
    country: "Uganda",
    tag: "Rest & Scenery",
    summary:
      "A terraced-hill lake with 29 islands and no hippos or crocodiles, so it is safe for swimming and canoeing. The perfect recovery stop after gorilla trekking.",
    highlights: ["Dug-out canoe trips", "Island visits", "Sunset viewpoints"],
    image: IMG.forest,
    operation: "direct",
  },
  {
    id: "jinja",
    name: "Jinja & the Source of the Nile",
    country: "Uganda",
    tag: "Adventure",
    summary:
      "The adventure capital of East Africa, where the Nile leaves Lake Victoria. White-water rafting, quad biking, boat trips and bungee jumping.",
    highlights: ["White-water rafting", "Source of the Nile boat trip", "Quad biking & bungee"],
    image: IMG.plains,
    operation: "direct",
  },
  {
    id: "mburo",
    name: "Lake Mburo National Park",
    country: "Uganda",
    tag: "Walking Safari",
    summary:
      "The closest savannah park to Kampala, where you can walk, ride a horse or bike among zebras, impalas and elands. A great stop on the way to or from Bwindi.",
    highlights: ["Guided walking safari", "Lake boat cruise", "Night game drive"],
    image: IMG.mburo,
    operation: "direct",
  },

  // ---------------- KENYA (via Kenyan partners) ----------------
  {
    id: "masai-mara",
    name: "Masai Mara National Reserve",
    country: "Kenya",
    tag: "Great Migration & Big 5",
    summary:
      "Kenya's flagship reserve and a home of the Big 5. From roughly July to October the Great Wildebeest Migration crosses the Mara River.",
    highlights: ["Big 5 game drives", "Great Migration season (approx. Jul–Oct)", "Maasai cultural visit"],
    image: IMG.savannahSunset,
    operation: "partner",
  },
  {
    id: "amboseli",
    name: "Amboseli National Park",
    country: "Kenya",
    tag: "Elephants & Kilimanjaro",
    summary:
      "Big elephant herds in front of Mount Kilimanjaro's snowcap, the classic East African postcard.",
    highlights: ["Elephant herds", "Kilimanjaro views", "Observation Hill"],
    image: IMG.plains,
    operation: "partner",
  },
  {
    id: "nakuru",
    name: "Lake Nakuru & Naivasha",
    country: "Kenya",
    tag: "Rift Valley Lakes",
    summary:
      "Rift Valley lakes with great birdlife, rhinos and giraffes, easy to add to a Mara trip.",
    highlights: ["Rhino and giraffe viewing", "Birdlife", "Boat rides on Lake Naivasha"],
    image: IMG.zebras,
    operation: "partner",
  },

  // ---------------- TANZANIA (regional partners) ----------------
  {
    id: "serengeti",
    name: "Serengeti National Park",
    country: "Tanzania",
    tag: "Endless Plains",
    summary:
      "The endless plains of the Serengeti, the classic wildebeest migration landscape and one of the best big-cat parks on earth.",
    highlights: ["Big cat game drives", "Migration herds", "Optional balloon safari"],
    image: IMG.savannahSunset,
    operation: "partner",
  },
  {
    id: "ngorongoro",
    name: "Ngorongoro Crater",
    country: "Tanzania",
    tag: "Wildlife Amphitheatre",
    summary:
      "A collapsed volcano whose floor holds dense wildlife year-round, including black rhino.",
    highlights: ["Crater floor game drive", "Black rhino chance", "Maasai highlands"],
    image: IMG.lions,
    operation: "partner",
  },
  {
    id: "zanzibar",
    name: "Zanzibar",
    country: "Tanzania",
    tag: "Beach Finish",
    summary:
      "Spice tours, historic Stone Town and white-sand beaches. A natural end to a safari.",
    highlights: ["Stone Town walking tour", "Spice farm visit", "Beach time"],
    image: IMG.lodge,
    operation: "partner",
  },

  // ---------------- RWANDA (regional partners) ----------------
  {
    id: "volcanoes",
    name: "Volcanoes National Park",
    country: "Rwanda",
    tag: "Gorillas & Golden Monkeys",
    summary:
      "Mountain gorilla trekking and golden monkey tracking in the Virunga volcano range. Easy to combine with Uganda's Bwindi on one trip.",
    highlights: ["Mountain gorilla trekking", "Golden monkey tracking", "Dian Fossey hike"],
    image: IMG.gorilla,
    operation: "partner",
  },
  {
    id: "nyungwe",
    name: "Nyungwe Forest",
    country: "Rwanda",
    tag: "Canopy & Chimps",
    summary:
      "One of Africa's oldest rainforests, with chimpanzee trekking and a canopy walkway above the treetops.",
    highlights: ["Chimpanzee trekking", "Canopy walkway", "13 primate species"],
    image: IMG.forest,
    operation: "partner",
  },
  {
    id: "kigali",
    name: "Kigali",
    country: "Rwanda",
    tag: "City & Memory",
    summary:
      "A clean, welcoming capital with the Kigali Genocide Memorial, craft markets and coffee tours.",
    highlights: ["Genocide Memorial", "Craft markets", "Coffee tour"],
    image: IMG.lodge,
    operation: "partner",
  },
];

export const interests: Interest[] = [
  { id: "gorilla", title: "Gorilla & Primate Trekking", blurb: "Mountain gorillas in Uganda and Rwanda, chimps in Kibale and Nyungwe.", image: IMG.gorilla },
  { id: "wildlife", title: "Wildlife Safari", blurb: "Big Five game drives from the Masai Mara to the Serengeti.", image: IMG.lions },
  { id: "eco", title: "Eco Tours", blurb: "Low-impact trips that protect wild places and support local people.", image: IMG.forest },
  { id: "family", title: "Family Safari", blurb: "Gentle pacing and child-friendly stops for all ages.", image: IMG.gameDrive },
  { id: "honeymoon", title: "Honeymoon", blurb: "Romantic lodges, sunsets and private game drives for two.", image: IMG.savannahSunset },
  { id: "cultural", title: "Cultural Tours", blurb: "Meet Batwa, Maasai and local communities, respectfully.", image: IMG.cultural },
  { id: "birding", title: "Birding & Nature", blurb: "Shoebill, turacos and endless birdlife across the region.", image: IMG.mweya },
  { id: "adventure", title: "Active Adventure", blurb: "Rafting, hiking, canoeing and cycling.", image: IMG.hills },
  { id: "luxury", title: "Luxury & Photography", blurb: "Premium lodges and photo-focused safaris.", image: IMG.lodge },
];

const day = (
  dayNumber: number,
  title: string,
  morning: string,
  afternoon: string,
  overnight: string,
  image: string,
  activity = title
) => ({ dayNumber, title, activity, morning, afternoon, overnight, meals: "Full board (confirmed in quote)", image });

const COMMON_INCLUSIONS = [
  "Ground transport in a 4x4 safari vehicle (from Kampala on Uganda routes)",
  "Professional English-speaking driver/guide",
  "Park entrance fees as itemised in your quote",
  "Batwa community fee (where the Batwa visit is part of the itinerary)",
  "Accommodation and meals as itemised in your quote",
];

const COMMON_EXCLUSIONS = [
  "Gorilla trekking permits (we arrange them separately)",
  "International and domestic flights",
  "Visas, travel insurance, tips and personal items",
];

const NO_PERMIT_EXCLUSIONS = ["International and domestic flights", "Visas, travel insurance, tips and personal items"];

export const packages: Itinerary[] = [
  {
    id: "3-day-murchison",
    name: "3 Days Murchison Falls",
    subtitle: "A short Nile safari from Kampala",
    duration: "3 Days",
    countries: ["Uganda"],
    overview: "A compact Big Game safari: game drive, the Nile boat cruise to Murchison Falls and a Ziwa Rhino Sanctuary stop.",
    highlights: ["Boat to the falls", "Game drive", "Ziwa Rhino Sanctuary stop"],
    image: IMG.lions,
    days: [
      day(1, "Kampala to Murchison via Ziwa", "Depart Kampala heading north.", "Walk to see white rhino at Ziwa Rhino Sanctuary, then continue to Murchison Falls.", "Lodge, Murchison Falls area", IMG.plains, "Drive & Rhino Tracking"),
      day(2, "Game Drive & Nile Cruise", "Early game drive for lions, elephants, giraffe and buffalo.", "Afternoon boat cruise to the base of the falls.", "Lodge, Murchison Falls area", IMG.lions, "Game Drive & Boat Cruise"),
      day(3, "Top of the Falls & Return", "Hike to the top of the falls.", "Drive back to Kampala.", "Departure", IMG.savannahSunset, "Falls Hike & Return"),
    ],
    inclusions: COMMON_INCLUSIONS,
    exclusions: NO_PERMIT_EXCLUSIONS,
  },
  {
    id: "4-day-rwanda",
    name: "4 Days Rwanda Gorillas & Kigali",
    subtitle: "Volcanoes National Park and the capital",
    duration: "4 Days",
    countries: ["Rwanda"],
    overview: "Mountain gorilla trekking in the Virunga volcanoes, with time in Kigali. Arranged with our Rwandan partners.",
    highlights: ["Gorilla trekking", "Golden monkeys", "Kigali city & memorial"],
    image: IMG.gorilla,
    days: [
      day(1, "Arrive in Kigali", "Meet at Kigali airport.", "Kigali city tour including the Genocide Memorial and craft markets.", "Hotel, Kigali", IMG.lodge),
      day(2, "Kigali to Volcanoes", "Scenic drive north to Musanze.", "Visit the twin lakes or a cultural village.", "Lodge, Volcanoes National Park", IMG.forest),
      day(3, "Gorilla Trekking", "Briefing and mountain gorilla trek (permit required).", "Rest, or golden monkey tracking another day if arranged.", "Lodge, Volcanoes National Park", IMG.gorilla),
      day(4, "Return to Kigali", "Drive back to Kigali.", "Coffee tour or airport transfer.", "Departure", IMG.plains),
    ],
    inclusions: COMMON_INCLUSIONS,
    exclusions: ["Rwanda gorilla permits (we arrange them separately)", ...NO_PERMIT_EXCLUSIONS],
  },
  {
    id: "5-day-mara",
    name: "5 Days Masai Mara & Lake Nakuru",
    subtitle: "Big Five and the Rift Valley",
    duration: "5 Days",
    countries: ["Kenya"],
    overview: "Kenya's classic: Lake Nakuru's rhinos and birdlife, then full days in the Masai Mara. Great Migration in season. Arranged with our Kenyan partners.",
    highlights: ["Big Five game drives", "Lake Nakuru", "Maasai cultural visit"],
    featured: true,
    image: IMG.savannahSunset,
    days: [
      day(1, "Nairobi to Lake Nakuru", "Depart Nairobi for the Rift Valley.", "Afternoon game drive at Lake Nakuru for rhino, giraffe and flamingo.", "Lodge, Lake Nakuru", IMG.zebras),
      day(2, "To the Masai Mara", "Drive to the Masai Mara.", "Afternoon game drive.", "Camp / lodge, Masai Mara", IMG.savannahSunset),
      day(3, "Masai Mara Full Day", "Full-day game drives for lions, elephants and more (Great Migration in season).", "Sundowner in the reserve.", "Camp / lodge, Masai Mara", IMG.lions),
      day(4, "Mara & Maasai Village", "Morning game drive.", "Visit a Maasai community.", "Camp / lodge, Masai Mara", IMG.plains),
      day(5, "Return to Nairobi", "Early drive back to Nairobi.", "Airport transfer.", "Departure", IMG.gameDrive),
    ],
    inclusions: ["Ground transport and park fees as itemised in your quote", "Professional driver/guide", "Accommodation and meals as itemised in your quote"],
    exclusions: [...NO_PERMIT_EXCLUSIONS, "Kenya visa / eTA"],
  },
  {
    id: "6-day-circuit",
    name: "6 Days Uganda Circuit",
    subtitle: "Murchison, Kibale, Queen, Bwindi + Batwa",
    duration: "6 Days",
    countries: ["Uganda"],
    overview: "Our core Uganda circuit: the Nile, chimps, lions, gorillas and a Batwa Cultural Experience led by Batwa elders.",
    highlights: ["Murchison Falls", "Kibale chimps", "Queen Elizabeth", "Bwindi + Batwa Experience"],
    featured: true,
    image: IMG.bwindi,
    days: [
      day(1, "Kampala to Murchison", "Drive north with a Ziwa Rhino Sanctuary stop.", "Arrive at Murchison Falls.", "Lodge, Murchison Falls", IMG.plains, "Drive North"),
      day(2, "Murchison Game Drive & Nile Cruise", "Morning game drive.", "Boat to the base of the falls.", "Lodge, Murchison Falls", IMG.lions, "Safari Day"),
      day(3, "To Kibale", "Long scenic drive to Fort Portal.", "Bigodi Wetland walk.", "Lodge, Kibale", IMG.forest, "Transfer to Kibale"),
      day(4, "Chimps to Queen Elizabeth", "Chimpanzee trekking.", "Kazinga Channel cruise.", "Lodge, Queen Elizabeth NP", IMG.mweya, "Chimp Trek & Kazinga Cruise"),
      day(5, "Ishasha to Bwindi", "Tree-climbing lion search in Ishasha.", "Arrive in Bwindi.", "Lodge, Bwindi", IMG.bwindi, "Ishasha & Bwindi"),
      day(6, "Gorillas & Batwa Experience", "Mountain gorilla trekking (permit required).", "Batwa Cultural Experience, then depart or extend.", "Departure / onward", IMG.bwindiTrek, "Gorillas & Batwa"),
    ],
    inclusions: COMMON_INCLUSIONS,
    exclusions: COMMON_EXCLUSIONS,
  },
  {
    id: "7-day-tanzania",
    name: "7 Days Serengeti & Ngorongoro",
    subtitle: "Tanzania's northern circuit",
    duration: "7 Days",
    countries: ["Tanzania"],
    overview: "Lake Manyara, the Ngorongoro Crater and the endless Serengeti plains. Arranged with our Tanzanian partners.",
    highlights: ["Serengeti game drives", "Ngorongoro Crater floor", "Lake Manyara"],
    image: IMG.lions,
    days: [
      day(1, "Arrive in Arusha", "Meet at Kilimanjaro or Arusha airport.", "Briefing and rest.", "Hotel, Arusha", IMG.lodge),
      day(2, "Lake Manyara", "Drive to Lake Manyara National Park.", "Game drive: elephants, baboons and birdlife.", "Lodge, Karatu", IMG.zebras),
      day(3, "Ngorongoro Crater", "Descend into the crater for a full game drive.", "Picnic lunch on the crater floor.", "Lodge, Karatu", IMG.lions),
      day(4, "To the Serengeti", "Drive via Olduvai Gorge to the Serengeti.", "Afternoon game drive.", "Camp / lodge, Serengeti", IMG.savannahSunset),
      day(5, "Serengeti Full Day", "Full-day game drives following the herds.", "Look for big cats at sunset.", "Camp / lodge, Serengeti", IMG.plains),
      day(6, "Serengeti to Arusha", "Morning game drive.", "Return to Arusha.", "Hotel, Arusha", IMG.gameDrive),
      day(7, "Departure", "Transfer to the airport.", "Onward travel.", "Departure", IMG.lodge),
    ],
    inclusions: ["Ground transport and park fees as itemised in your quote", "Professional driver/guide", "Accommodation and meals as itemised in your quote"],
    exclusions: NO_PERMIT_EXCLUSIONS,
  },
  {
    id: "8-day-uganda-rwanda",
    name: "8 Days Uganda & Rwanda Primates",
    subtitle: "Chimps, gorillas and golden monkeys across two countries",
    duration: "8 Days",
    countries: ["Uganda", "Rwanda"],
    overview: "Kibale chimps, Queen Elizabeth, Bwindi gorillas and a Batwa visit, then across the border to Rwanda's Volcanoes and Kigali.",
    highlights: ["Kibale chimps", "Bwindi gorillas + Batwa", "Rwanda Volcanoes", "Kigali"],
    featured: true,
    image: IMG.bwindiTrek,
    days: [
      day(1, "Kampala to Kibale", "Drive west to Fort Portal.", "Bigodi Wetland walk.", "Lodge, Kibale", IMG.forest),
      day(2, "Chimps to Queen Elizabeth", "Chimpanzee trekking.", "Kazinga Channel cruise.", "Lodge, Queen Elizabeth NP", IMG.mweya),
      day(3, "Ishasha to Bwindi", "Tree-climbing lions in Ishasha.", "Arrive in Bwindi.", "Lodge, Bwindi", IMG.bwindi),
      day(4, "Gorillas & Batwa Experience", "Mountain gorilla trekking (permit required).", "Batwa Cultural Experience.", "Lodge, Bwindi", IMG.bwindiTrek),
      day(5, "Lake Bunyonyi to Rwanda", "Scenic drive via Lake Bunyonyi.", "Cross into Rwanda and arrive in Volcanoes area.", "Lodge, Volcanoes", IMG.forest),
      day(6, "Rwanda Primates", "Golden monkey tracking or a second gorilla trek (permit required).", "Free afternoon.", "Lodge, Volcanoes", IMG.gorilla),
      day(7, "To Kigali", "Drive to Kigali.", "City tour and Genocide Memorial.", "Hotel, Kigali", IMG.lodge),
      day(8, "Departure", "Craft market or coffee tour.", "Airport transfer.", "Departure", IMG.plains),
    ],
    inclusions: COMMON_INCLUSIONS,
    exclusions: ["Gorilla trekking permits in Uganda and Rwanda (we arrange them separately)", "Visas (East Africa Tourist Visa where applicable), flights, insurance, tips"],
  },
  {
    id: "10-day-uganda-kenya",
    name: "10 Days Uganda + Kenya",
    subtitle: "Uganda Grand Safari + Masai Mara, one booking",
    duration: "10 Days",
    countries: ["Uganda", "Kenya"],
    overview: "The Uganda circuit with Batwa Experience, then onward to the Masai Mara through our Kenyan partners, all on a single booking.",
    highlights: ["Murchison, Kibale, Queen, Bwindi", "Batwa Cultural Experience", "Masai Mara game drives"],
    image: IMG.savannahSunset,
    days: [
      day(1, "Kampala to Murchison", "Drive north via Ziwa Rhino Sanctuary.", "Arrive at Murchison Falls.", "Lodge, Murchison Falls", IMG.plains),
      day(2, "Murchison Safari Day", "Morning game drive.", "Nile cruise to the falls.", "Lodge, Murchison Falls", IMG.lions),
      day(3, "To Kibale", "Drive to Fort Portal.", "Bigodi Wetland walk.", "Lodge, Kibale", IMG.forest),
      day(4, "Chimps to Queen Elizabeth", "Chimpanzee trekking.", "Kazinga Channel cruise.", "Lodge, Queen Elizabeth NP", IMG.mweya),
      day(5, "Ishasha to Bwindi", "Tree-climbing lions in Ishasha.", "Arrive in Bwindi.", "Lodge, Bwindi", IMG.bwindi),
      day(6, "Gorillas & Batwa Experience", "Mountain gorilla trekking (permit required).", "Batwa Cultural Experience.", "Lodge, Bwindi", IMG.bwindiTrek),
      day(7, "Return to Entebbe", "Drive back toward Kampala/Entebbe.", "Evening flight arrangements to Nairobi (flight not included).", "Nairobi (partner-arranged)", IMG.gameDrive),
      day(8, "Nairobi to Masai Mara", "Transfer to the Masai Mara with our Kenyan partners.", "Afternoon game drive.", "Camp / lodge, Masai Mara", IMG.savannahSunset),
      day(9, "Masai Mara Full Day", "Full-day game drives for the Big Five (Great Migration in season).", "Optional Maasai cultural visit.", "Camp / lodge, Masai Mara", IMG.lions),
      day(10, "Departure", "Morning game drive, then transfer to Nairobi.", "Onward flights.", "Departure", IMG.plains),
    ],
    inclusions: [...COMMON_INCLUSIONS, "Masai Mara portion arranged through Kenyan partners on the same booking"],
    exclusions: [...COMMON_EXCLUSIONS, "Kenya visa / eTA"],
  },
];

export const faqs = [
  {
    question: "Who is Batwa Wider Expedition Tour Ltd?",
    answer:
      "We are a tour operator with our head office in Kampala, organising gorilla trekking, wildlife and cultural safaris across East Africa: Kenya, Rwanda, Uganda and Tanzania. We are not a Batwa organisation. We are partners with Batwa communities near Bwindi, and we aim to be honest about that.",
  },
  {
    question: "Which countries do you cover?",
    answer:
      "Kenya, Rwanda, Uganda and Tanzania. You can book one country or combine several on a single booking, for example Uganda + Rwanda gorillas, or Uganda + Kenya's Masai Mara.",
  },
  {
    question: "What is the Batwa Cultural Experience?",
    answer:
      "A 2-3 hour visit led by Batwa elders and community members near Bwindi: fire making, forest herbs, dance, storytelling and archery. It is not staged for cameras. Photos are taken with permission and the visit is community-led.",
  },
  {
    question: "Where does the money for the Batwa visit go?",
    answer:
      "A share of every visit goes directly to the Batwa community, and 100% of craft sales go to the artisans who make them.",
  },
  {
    question: "Are gorilla permits included?",
    answer:
      "No. Gorilla trekking permits are sold by the national wildlife authorities and sell out early. We can arrange your permit for you. Tell us your dates as early as possible.",
  },
  {
    question: "How do I get a quote?",
    answer:
      "Use the Book Your Safari form, or contact us by email, phone or WhatsApp with your dates and group size. We reply with an itemised, tailored quote.",
  },
  {
    question: "What should I pack for primate tracking?",
    answer:
      "Sturdy waterproof hiking boots, long sleeves and trousers (against nettles), light gardening gloves, a rain jacket, insect repellent, a hat, and binoculars. Tell us if you need porter support.",
  },
];

export const team: TeamMember[] = [
  { name: "Victor Wifred", role: "CEO", phone: "0769 805 075", tel: "+256769805075", initials: "VW" },
  { name: "Edith Kabahenda", role: "Co-Owner / Partnerships", phone: "0782 380 577", tel: "+256782380577", initials: "EK" },
  { name: "Bukenya Brain", role: "International Liaison, USA", phone: "0773 336 979", tel: "+256773336979", initials: "BB" },
];

export const galleryPhotos = [
  { id: 1, title: "Batwa Cultural Experience", location: "Bwindi, Uganda", image: IMG.batwa },
  { id: 2, title: "Primate Trekking", location: "Uganda & Rwanda", image: IMG.chimp },
  { id: 3, title: "Mountain Gorilla Country", location: "Bwindi, Uganda / Volcanoes, Rwanda", image: IMG.bwindiTrek },
  { id: 4, title: "Savannah Sunset", location: "Masai Mara, Kenya", image: IMG.savannahSunset },
  { id: 5, title: "Zebras on the Plains", location: "East Africa", image: IMG.zebras },
  { id: 6, title: "Forest & Crater Lakes", location: "Fort Portal, Uganda", image: IMG.forest },
];

export const testimonials = [
  { id: "1", name: "Jameson Reynolds", rating: 5, quote: "Absolutely magical experience! The chimpanzee trekking in Kibale Forest and standing next to mountain gorillas in Bwindi was a soul-stirring journey. The team took care of everything seamlessly—the Ndali lodge was out of this world, with volcanic crater views that I'll remember forever." },
  { id: "2", name: "Elena Rostova", rating: 5, quote: "Kibale chimpanzees are remarkable! Our expert primatologist guide was incredibly knowledgeable and we saw multiple chimp groups feeding and nesting. The Bigodi Wetlands swamp walk in Fort Portal was a birdwatcher's dream. We spotted 14 lifers in just one afternoon, including the majestic Great Blue Turaco!" },
  { id: "3", name: "Dr. Arthur Pendelton", rating: 5, quote: "Our private tour of Fort Portal and Kibale attractions as one package was perfectly designed. As an avid birder, having the interactive checklist was a brilliant addition. The hospitality at Clouds Mountain Gorilla Lodge in Bwindi was absolute 5-star perfection—from the private log fireplaces to our dedicated guides." },
];

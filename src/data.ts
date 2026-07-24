import { Itinerary, Lodge, Bird, Testimonial, Destination } from "./types";

export const popularDestinations: Destination[] = [
  {
    id: "bwindi-forest",
    title: "Bwindi Impenetrable National Park",
    country: "Uganda",
    price: "1800",
    rating: 4.99,
    reviews: 421,
    tag: "Mountain Gorillas",
    image: "https://ik.imagekit.io/simenya/assets/bwindi_ug.jpg"
  },
  {
    id: "fortportal-kibale",
    title: "Fort Portal & Kibale Forest",
    country: "Uganda",
    price: "1200",
    rating: 4.95,
    reviews: 342,
    tag: "Chimps & Craters",
    image: "https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "queen-elizabeth",
    title: "Queen Elizabeth National Park",
    country: "Uganda",
    price: "1450",
    rating: 4.88,
    reviews: 289,
    tag: "Savannah & Kazinga",
    image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "lake-mburo",
    title: "Lake Mburo National Park",
    country: "Uganda",
    price: "950",
    rating: 4.82,
    reviews: 154,
    tag: "Walking Safari & Zebras",
    // image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&q=80&w=800" tree scenery unsplash
    image: "https://ik.imagekit.io/simenya/assets/lake_mburo_np.png"
  }
];

export const luxuryLodges: Lodge[] = [
  {
    name: "Kampala Serena Hotel",
    location: "Kampala",
    stars: 5,
    price: "$450+",
    description: "An oasis of 5-star luxury in the city center. Featuring lush botanical gardens, a free-form swimming pool, superb gourmet dining, and private spa therapies.",
    image: "https://ik.imagekit.io/simenya/assets/serena_hotel_kla.jpg",
    amenities: ["Spas & Wellness", "Swimming Pool", "Gourmet Dining", "Grounded Gardens", "City Tours"]
  },
  {
    name: "Kibale Ndali Lodge",
    location: "Fort Portal / Kibale",
    stars: 5,
    price: "$650+",
    description: "Perched dramatically on the rim of an ancient crater lake. Handcrafted thatched stone cottages, breathtaking volcanic ridge views, infinity pool, and tea estate walks.",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=600",
    amenities: ["Crater Lake Views", "Infinity Pool", "Gourmet Kitchen", "Private Decks", "Volcanic Ridge Walks"]
  },
  {
    name: "Queen Elizabeth Mweya Safari Lodge",
    location: "Queen Elizabeth National Park",
    stars: 5,
    price: "$550+",
    description: "Located on a peninsula in the heart of Queen Elizabeth Park. Offers spectacular, panoramic views of the Kazinga Channel, private game departures, and a rich infinity pool.",
    image: "https://ik.imagekit.io/simenya/assets/mweya_safari_lodge.jpg",
    amenities: ["Kazinga Channel Views", "Private Sundowner Deck", "Game Safari Access", "Airstrips Closeby", "Lounge & Bar"]
  },
  {
    name: "Bwindi Clouds Mountain Gorilla Lodge",
    location: "Bwindi Impenetrable Forest",
    stars: 5,
    price: "$850+",
    description: "Uganda's highest lodge, set over 2,000 meters above sea level with private stone cottages, cozy log fireplaces, personal butler service, and a short walk to gorilla tracking.",
    image: "https://ik.imagekit.io/simenya/assets/Bwindi%20Clouds%20Mountain%20Gorilla%20Lodge.jpg",
    amenities: ["Private Fireplace", "Personal Butler", "Spas & Wellness", "Gorilla Trailhead Access", "Mist-filled Balconies"]
  },
  {
    name: "Lake Mburo Mihingo Lodge",
    location: "Lake Mburo National Park",
    stars: 5,
    price: "$500+",
    description: "An architectural marvel perched high on a granite kopje. Exclusive luxury tents overlooking savannah valleys, custom horseback safaris, and a spectacular infinity pool.",
    image: "https://ik.imagekit.io/simenya/assets/Mihingo%20Lodge-lake%20mburo.jpg",
    amenities: ["Granite Kopje Views", "Horseback Safaris", "Infinity Pool", "Open-air Bathrooms", "Night Game Drives"]
  }
];

export const comfortLodges: Lodge[] = [
  {
    name: "Kampala Cassia Lodge",
    location: "Kampala",
    stars: 4,
    price: "$180+",
    description: "Situated on Buziga Hill, offering a superb panoramic view of Lake Victoria. Features comfortable modern rooms, a swimming pool, and a cozy cocktail terrace.",
    image: "https://ik.imagekit.io/simenya/assets/cassialogde_1.jpg",
    amenities: ["Lake Victoria Views", "Swimming Pool", "Boutique Bar", "Safe Storage", "Air Conditioning"]
  },
  {
    name: "Kibale Chimpanzee Forest Guesthouse",
    location: "Kibale Forest",
    stars: 3.5,
    price: "$150+",
    description: "Bordering Kibale Forest National Park on a historical tea estate. Clean, rustic cottages, friendly local service, and excellent views of the primate canopy.",
    image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&q=80&w=800",
    amenities: ["Tea Garden Views", "Rustic Stone Cottages", "Primate Spotting", "Home-cooked Meals", "Campfires"]
  },
  {
    name: "Queen Elizabeth Bush Lodge",
    location: "Queen Elizabeth National Park",
    stars: 4,
    price: "$165+",
    description: "Ecology-oriented bush tents and banda huts tucked along the border of the park. Surrounded by nature, offering game sounds at night and delicious local cuisine.",
    image: "https://ik.imagekit.io/simenya/assets/Queen%20Elizabeth%20Bush%20Lodge.png",
    amenities: ["Eco-friendly Tents", "Wildlife Sightings", "Outdoor Showers", "Candlelit Dinners", "Bush Walkways"]
  },
  {
    name: "Bwindi Rushaga Gorilla Havens Lodge",
    location: "Bwindi Impenetrable Forest",
    stars: 4,
    price: "$190+",
    description: "Perched beautifully on a mist-shrouded hillside overlooking the Bwindi canopy. Friendly staff, cozy rooms, and quick access to the Rushaga gorilla gate.",
    image: "https://ik.imagekit.io/simenya/assets/Rushaga-Gorilla-Haven-Lodgea.jpg",
    amenities: ["Mist Hillside Views", "Local Craft Shop", "Gorilla Gate Proximity", "Traditional Dances", "Firepit"]
  },
  {
    name: "Lake Mburo Rwakobo Rock Lodge",
    location: "Lake Mburo National Park",
    stars: 4,
    price: "$175+",
    description: "An eco-friendly resort built on a majestic outcrop of volcanic rock. Features thatched cottages, a cliffside pool, and frequent zebras wandering around the site.",
    image: "https://ik.imagekit.io/simenya/assets/Rwakobo-Rock-Lodge.jpg",
    amenities: ["Rock Outcrop Balcony", "Cliffside Pool", "Zebra Spotting", "Eco Cottages", "Hiking Trails"]
  }
];

export const itineraries: Itinerary[] = [
  {
    id: "1-day-gorilla",
    name: "1 Day Gorilla Trek – Bwindi",
    subtitle: "Intensive Single-Day Primate Tracking",
    price: "$700 pp",
    style: "1 Day",
    overview: "An intensive single-day gorilla tracking tour designed for those with limited time. Includes gorilla permit, professional guiding, and private 4x4 transport.",
    days: [
      {
        dayNumber: 1,
        title: "Epic Bwindi Gorilla Trekking Day",
        activity: "Briefing, gorilla tracking, and return",
        morning: "Early morning transfer from your lodge to Bwindi Impenetrable Forest National Park headquarters. Attend a briefing with park rangers regarding safety guidelines and gorilla family assignments.",
        afternoon: "Embark on an incredible gorilla trek into the ancient jungle. Spend 1 life-changing hour standing yards from a majestic mountain gorilla family.",
        overnight: "Same-day Departure",
        meals: "Lunch",
        // image: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&q=80&w=800" *lion splash photo*
        image: "https://ik.imagekit.io/simenya/assets/bwindi_climbing_chimp.jpg"
      }
    ],
    inclusions: [
      "Official Mountain Gorilla tracking permit included",
      "Professional English-speaking driver/guide",
      "All transport in a 4x4 safari vehicle",
      "Packed lunch and bottled mineral water",
      "Park entry fees and activity permits"
    ],
    exclusions: [
      "International flights",
      "Uganda entry visa (~$50)",
      "Tips and personal expenses",
      "Travel insurance"
    ],
    hotels: []
  },
  {
    id: "3-day-gorilla-chimp",
    name: "Gorilla + Chimp Trek",
    subtitle: "Combined Primate Tracking Adventure",
    price: "$1,200 pp",
    style: "3 Days / 2 Nights",
    overview: "A fast-paced 3-day adventure combining Uganda's premier primate experiences: chimpanzee trekking in Kibale and mountain gorilla tracking in Bwindi.",
    days: [
      {
        dayNumber: 1,
        title: "Kibale Chimp Trek & Primate Encounter",
        activity: "Chimp tracking in the Primate Capital",
        morning: "Briefing at the Kibale National Park headquarters before walking into the rainforest to track chimpanzees.",
        afternoon: "Spend an hour observing our closest primate relatives, then take a scenic drive toward Bwindi.",
        overnight: "Rushaga Gorilla Havens Lodge",
        meals: "Lunch, Dinner",
        image: "https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?auto=format&fit=crop&q=80&w=800"
      },
      {
        dayNumber: 2,
        title: "Bwindi Mountain Gorilla Trekking",
        activity: "Standing yards from a Giant Silverback",
        morning: "Head to the park headquarters for a private briefing. Trek into Bwindi's ancient mist-veiled jungle to find mountain gorillas.",
        afternoon: "Spend 1 magical, intimate hour with the gorillas. Afterwards, enjoy a quiet afternoon resting.",
        overnight: "Rushaga Gorilla Havens Lodge",
        meals: "Breakfast, Lunch, Dinner",
        image: "https://ik.imagekit.io/simenya/assets/bwindi_ug.jpg"
      },
      {
        dayNumber: 3,
        title: "Return Scenic Drive & Departure",
        activity: "Equator Crossing & Transfer to Entebbe",
        morning: "Breakfast at the lodge before embarking on your scenic drive back to Kampala/Entebbe.",
        afternoon: "Pause for a delicious lunch and photo session at the Equator crossing monument.",
        overnight: "Departure Flight",
        meals: "Breakfast, Lunch",
        image: "https://ik.imagekit.io/simenya/assets/Featured-Game-Drive-Sunrise-Safari-Jeep.jpg"
      }
    ],
    inclusions: [
      "Official Mountain Gorilla tracking permit and Chimpanzee tracking permit included",
      "Comfortable en-suite full board lodge accommodation",
      "Professional English-speaking driver/guide",
      "All transport in a 4x4 safari vehicle",
      "All park entry fees, national reserve taxes, & activity permits",
      "Bottled mineral water"
    ],
    exclusions: [
      "International flights to/from Entebbe",
      "Uganda entry visa ($50 standard)",
      "Tips and personal expenses",
      "Travel insurance"
    ],
    hotels: [
      { location: "Bwindi", name: "Rushaga Gorilla Havens Lodge", why: "Cozy rooms and close to the gorilla trailheads", tier: "Comfort" }
    ]
  },
  {
    id: "7-day-classic",
    name: "Uganda Wildlife + Gorilla + Chimp Safari",
    subtitle: "Immersive Classic Wildlife Tour",
    price: "$2,600 pp",
    style: "7 Days / 6 Nights",
    overview: "Experience the best of Uganda — gorillas, chimps, lions, and the Big 5 — in just seven days. Ideal for first-time visitors to the Pearl of Africa.",
    days: [
      {
        dayNumber: 1,
        title: "Arrival, Kampala",
        activity: "Airport pick up & Hilltop Check-in",
        morning: "Pick up from Entebbe International Airport by our friendly guide.",
        afternoon: "Transfer of 1-2 hours to Kampala. Check into Cassia Lodge, located high on Buziga Hill.",
        overnight: "Kampala Cassia Lodge",
        meals: "Dinner",
        image: "https://ik.imagekit.io/simenya/assets/cassialogde_0.jpg"
      },
      {
        dayNumber: 2,
        title: "Kampala to Kibale Forest",
        activity: "Scenic Primate Capital Drive & Bigodi Wetlands",
        morning: "Depart Kampala on a 5-hour drive to Kibale Forest 'Primate Capital'. Enjoy the countryside scenery.",
        afternoon: "Arrive and check into the lodge. Embark on the Bigodi Wetlands Swamp walk to spot exotic blue turacos and monkeys.",
        overnight: "Kibale Chimpanzee Forest Guesthouse",
        meals: "Breakfast, Lunch, Dinner",
        image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=800"
      },
      {
        dayNumber: 3,
        title: "Kibale Chimp Trek to Queen Elizabeth",
        activity: "Chimp Trekking & Wildlife Boat Cruise",
        morning: "Morning Chimpanzee trekking in the magnificent rainforest. Watch them feed and play on the jungle floor.",
        afternoon: "Drive 3 hours to Queen Elizabeth National Park. Embark on a spectacular group boat cruise on Kazinga Channel.",
        overnight: "Queen Elizabeth Bush Lodge",
        meals: "Breakfast, Lunch, Dinner",
        image: "https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?auto=format&fit=crop&q=80&w=800"
      },
      {
        dayNumber: 4,
        title: "Queen Elizabeth, Ishasha, Bwindi",
        activity: "Morning Game Drive & Bwindi Impenetrable",
        morning: "Game drive in Queen Elizabeth Park to spot elephants, lions, waterbucks, and buffaloes.",
        afternoon: "Continue through the scenic southern Ishasha sector on a 4-hour drive to Bwindi forest.",
        overnight: "Bwindi Rushaga Gorilla Havens Lodge",
        meals: "Breakfast, Lunch, Dinner",
        image: "https://ik.imagekit.io/simenya/assets/Rushaga-Gorilla-Haven-Lodgea.jpg"
      },
      {
        dayNumber: 5,
        title: "Bwindi Gorilla Trek & Community Visit",
        activity: "Life-changing Gorilla Trek & Batwa Visit",
        morning: "Gorilla trekking briefing at 7:45 AM. Enter the mountain forest for an epic 2-6 hour trek to spend an hour with gorillas.",
        afternoon: "Return to the lodge to rest. Later, experience a local Batwa community cultural visit.",
        overnight: "Bwindi Rushaga Gorilla Havens Lodge",
        meals: "Breakfast, Lunch, Dinner",
        image: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&q=80&w=800"
      },
      {
        dayNumber: 6,
        title: "Bwindi to Lake Mburo",
        activity: "Transfer, Boat Cruise & Game Outings",
        morning: "Scenic morning drive (4 hours) from Bwindi to Lake Mburo National Park, Uganda's smallest savannah gem.",
        afternoon: "Boat cruise on Lake Mburo to see birds, hippos, and otters. Followed by a sunset savannah game drive.",
        overnight: "Lake Mburo Rwakobo Rock Lodge",
        meals: "Breakfast, Lunch, Dinner",
        image: "https://ik.imagekit.io/simenya/assets/Rwakobo-Rock-Lodge.jpg"
      },
      {
        dayNumber: 7,
        title: "Lake Mburo to Entebbe / Departure",
        activity: "Walking Safari, Lunch at Equator & Transfer to Entebbe",
        morning: "Morning walking safari alongside zebras, topis, and impalas. Beautiful photo opportunities.",
        afternoon: "Drive to Entebbe with a stop for lunch and photos at the Equator monument.",
        overnight: "Departure Flight",
        meals: "Breakfast, Lunch",
        image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=800"
      }
    ],
    inclusions: [
      "Gorilla permit ($800) and chimpanzee permit",
      "Accommodation on full board",
      "Professional English-speaking driver/guide",
      "All transport in a 4x4 safari vehicle",
      "Game drives, boat cruise and park fees",
      "Bottled water"
    ],
    exclusions: [
      "International flights",
      "Uganda visa (~$50)",
      "Tips and personal expenses",
      "Travel insurance"
    ],
    hotels: [
      { location: "Kampala", name: "Cassia Lodge", why: "Boutique, pool, safe", tier: "Comfort" },
      { location: "Kibale", name: "Chimpanzee Forest Guesthouse", why: "Clean, close to park", tier: "Comfort" },
      { location: "Queen Elizabeth", name: "Bush Lodge QENP", why: "Good value, game drives", tier: "Comfort" },
      { location: "Bwindi", name: "Rushaga Gorilla Havens Lodge", why: "Good food, friendly staff", tier: "Comfort" },
      { location: "Lake Mburo", name: "Rwakobo Rock", why: "Nice rooms, lake view", tier: "Comfort" }
    ]
  },
  {
    id: "7-day-luxury",
    name: "Luxury Uganda Grand Safari",
    subtitle: "Private, Exclusive & Once-in-a-Lifetime Adventure",
    price: "Inquire",
    style: "7 Days / 6 Nights",
    overview: "A fully private journey through Uganda in style: private 4x4 vehicle, luxury lodges, expert guides, and intimate wildlife encounters.",
    days: [
      {
        dayNumber: 1,
        title: "Welcome to Uganda, Kampala",
        activity: "Airport Transfer & Gourmet Guide Greeting",
        morning: "Touch down at Entebbe International Airport (EBB). You will be met by our VIP host at the airport gate with cold towels and refreshments.",
        afternoon: "Private scenic transfer in our luxury cruiser to the Kampala Serena Hotel. Take the afternoon to unwind by the palm-fringed tropical pools.",
        overnight: "Serena Hotel Kampala",
        meals: "Dinner",
        image: "https://ik.imagekit.io/simenya/assets/serena_hotel_kla.jpg"
      },
      {
        dayNumber: 2,
        title: "Kibale Forest, Primate Paradise",
        activity: "Scenic Drive to Primate Haven & Wetlands Tour",
        morning: "Scenic 5-hour drive through lush tea estates and rolling crater hills to Fort Portal, the Gateway to the Rwenzori Mountains, pausing for a gourmet picnic lunch.",
        afternoon: "Guided canopy and swamp walk through Bigodi Wetlands Sanctuary. Spot up to 8 primate species including the Red Colobus and Grey-cheeked Mangabey, plus rare birdlife.",
        overnight: "Ndali Lodge, Kibale",
        meals: "Breakfast, Lunch, Dinner",
        image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&q=80&w=800"
      },
      {
        dayNumber: 3,
        title: "Chimpanzee Trek + Queen Elizabeth",
        activity: "Chimp Tracking with Primatologist & Kazinga Channel Cruise",
        morning: "Enter Kibale Forest, Primate Capital of the World, for chimpanzee tracking with an expert primatologist. Witness chimps swinging in high branches and communicating.",
        afternoon: "Scenic 3-hour transfer to Queen Elizabeth National Park. Embark on a private afternoon boat cruise along Kazinga Channel, seeing herds of elephants, hippos, and crocodiles.",
        overnight: "Mweya Safari Lodge, QENP",
        meals: "Breakfast, Lunch, Dinner",
        image: "https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?auto=format&fit=crop&q=80&w=800"
      },
      {
        dayNumber: 4,
        title: "Queen Elizabeth, Ishasha, Lion Country",
        activity: "Savannah Game Drive & Ascent to Mountain Gorilla Realm",
        morning: "Sunrise game drive through the Ishasha Sector of Queen Elizabeth, looking up into ancient fig trees to spot the rare, magnificent tree-climbing lions.",
        afternoon: "Gourmet bush lunch, followed by a dramatic afternoon drive ascending into the mist-veiled peaks of Bwindi Impenetrable Forest.",
        overnight: "Clouds Mountain Gorilla Lodge, Bwindi",
        meals: "Breakfast, Lunch, Dinner",
        image: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&q=80&w=800"
      },
      {
        dayNumber: 5,
        title: "Gorilla Trek, Once-in-a-Lifetime",
        activity: "Exclusive Gorilla Tracking & Batwa Forest Culture",
        morning: "Awake to hot coffee. Head to the park headquarters for a private briefing. Trek into Bwindi's ancient jungle for 1 magical, intimate hour standing yards from a Giant Silverback.",
        afternoon: "Return to the lodge for a massage. Later, embark on an exclusive private Batwa Forest cultural experience, learning ancient hunting and survival secrets.",
        overnight: "Clouds Mountain Gorilla Lodge, Bwindi",
        meals: "Breakfast, Lunch, Dinner",
        image: "https://ik.imagekit.io/simenya/assets/Bwindi%20Clouds%20Mountain%20Gorilla%20Lodge.jpg"
      },
      {
        dayNumber: 6,
        title: "Lake Mburo, Private Walking Safari",
        activity: "Transfer, Armed Ranger Walking Safari & Boat Cruise",
        morning: "Drive through the beautifully manicured terraced hills of Kigezi, often called the 'Switzerland of Africa,' entering Lake Mburo National Park.",
        afternoon: "Embark on an exclusive walking safari with an armed ranger, walking alongside zebras and impalas, followed by a quiet private boat cruise on Lake Mburo.",
        overnight: "Mihingo Lodge, Lake Mburo",
        meals: "Breakfast, Lunch, Dinner",
        image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&q=80&w=800"
      },
      {
        dayNumber: 7,
        title: "Farewell, Entebbe Departure",
        activity: "Morning Game Cruise, Equator Stop & Airport Transfer",
        morning: "Final sunrise game walk or short drive to catch sights of elands, topis, and herds of zebras roaming the lakeside slopes.",
        afternoon: "Drive back toward Entebbe, pausing for a fun gourmet lunch and photo session at the Equator crossing.",
        overnight: "Departure Flight",
        meals: "Breakfast, Lunch",
        image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=800"
      }
    ],
    inclusions: [
      "Private 4x4 safari vehicle with pop-up roof",
      "Gorilla permit ($800) and chimpanzee permit included",
      "6 nights in hand-picked luxury lodges",
      "All meals plus premium drinks and wines",
      "Private English-speaking guide",
      "All park fees, activities and transfers",
      "24/7 concierge WhatsApp support"
    ],
    exclusions: [
      "International flights",
      "Uganda visa (~$50)",
      "Tips and personal expenses",
      "Travel insurance"
    ],
    hotels: [
      { location: "Kampala", name: "Serena Hotel Kampala", why: "5-star, pool, city views", tier: "Luxury" },
      { location: "Kibale", name: "Ndali Lodge", why: "Luxury cottages, crater lake views", tier: "Luxury" },
      { location: "Queen Elizabeth", name: "Mweya Safari Lodge", why: "Lakeside, game drives from the lodge", tier: "Luxury" },
      { location: "Bwindi", name: "Buhoma Lodge / Clouds Mountain Gorilla Lodge", why: "Walking distance to gorillas, spa", tier: "Luxury" },
      { location: "Lake Mburo", name: "Mihingo Lodge", why: "Rock lodge, private deck, views", tier: "Luxury" }
    ]
  }
];

export const ugandaBirds: Bird[] = [
  // SECTION 1: THE BIG 5 MUST-SEES
  { id: 1, name: "Shoebill Stork", location: "Mabamba Swamp", month: "Dec – Feb", section: "The Big 5 Must-Sees" },
  { id: 2, name: "African Green Broadbill", location: "Bwindi Forest", month: "Jun – Aug", section: "The Big 5 Must-Sees" },
  { id: 3, name: "Great Blue Turaco", location: "Kibale Forest", month: "Jan – Mar", section: "The Big 5 Must-Sees" },
  { id: 4, name: "Standard-winged Nightjar", location: "Lake Mburo NP", month: "Mar – May", section: "The Big 5 Must-Sees" },
  { id: 5, name: "Shelley's Crimsonwing", location: "Bwindi Forest", month: "All year", section: "The Big 5 Must-Sees" },

  // SECTION 2: FOREST BIRDS
  { id: 6, name: "Bar-tailed Trogon", location: "Bwindi", month: "All year", section: "Forest Birds (Bwindi & Kibale)" },
  { id: 7, name: "Red-throat Alethe", location: "Kibale", month: "All year", section: "Forest Birds (Bwindi & Kibale)" },
  { id: 8, name: "African Green-breasted Pitta", location: "Kibale", month: "Mar – Jun", section: "Forest Birds (Bwindi & Kibale)" },
  { id: 9, name: "Grauer's Rush Warbler", location: "Bwindi", month: "All year", section: "Forest Birds (Bwindi & Kibale)" },
  { id: 10, name: "Handsome Francolin", location: "Rwenzori / Bwindi", month: "All year", section: "Forest Birds (Bwindi & Kibale)" },
  { id: 11, name: "Yellow-eyed Black Flycatcher", location: "Bwindi", month: "All year", section: "Forest Birds (Bwindi & Kibale)" },
  { id: 12, name: "White-tailed Ant Thrush", location: "Bwindi", month: "All year", section: "Forest Birds (Bwindi & Kibale)" },
  { id: 13, name: "Rwenzori Batis", location: "Bwindi", month: "All year", section: "Forest Birds (Bwindi & Kibale)" },
  { id: 14, name: "Collared Apalis", location: "Bwindi", month: "All year", section: "Forest Birds (Bwindi & Kibale)" },
  { id: 15, name: "Mountain Masked Apalis", location: "Bwindi", month: "All year", section: "Forest Birds (Bwindi & Kibale)" },
  { id: 16, name: "Kivu Ground Thrush", location: "Bwindi", month: "All year", section: "Forest Birds (Bwindi & Kibale)" },
  { id: 17, name: "Archer's Robin-chat", location: "Bwindi", month: "All year", section: "Forest Birds (Bwindi & Kibale)" },
  { id: 18, name: "Equatorial Akalat", location: "Kibale", month: "All year", section: "Forest Birds (Bwindi & Kibale)" },
  { id: 19, name: "Grey-throated Tit-flycatcher", location: "Kibale", month: "All year", section: "Forest Birds (Bwindi & Kibale)" },
  { id: 20, name: "Purple-breasted Sunbird", location: "Bwindi", month: "All year", section: "Forest Birds (Bwindi & Kibale)" },

  // SECTION 3: WATERBIRDS & LAKES
  { id: 21, name: "African Fish Eagle", location: "Lake Victoria, Mburo", month: "All year", section: "Waterbirds & Lakes" },
  { id: 22, name: "Pink-backed Pelican", location: "Queen Elizabeth", month: "All year", section: "Waterbirds & Lakes" },
  { id: 23, name: "African Jacana", location: "Mabamba, Mburo", month: "All year", section: "Waterbirds & Lakes" },
  { id: 24, name: "Papyrus Gonolek", location: "Mabamba, Lake Mburo", month: "All year", section: "Waterbirds & Lakes" },
  { id: 25, name: "White-winged Swamp Warbler", location: "Mabamba", month: "All year", section: "Waterbirds & Lakes" },
  { id: 26, name: "African Finfoot", location: "Lake Mburo, Kazinga", month: "All year", section: "Waterbirds & Lakes" },
  { id: 27, name: "Goliath Heron", location: "Kazinga Channel", month: "All year", section: "Waterbirds & Lakes" },
  { id: 28, name: "Saddle-billed Stork", location: "Queen Elizabeth", month: "All year", section: "Waterbirds & Lakes" },
  { id: 29, name: "African Skimmer", location: "Kazinga Channel", month: "All year", section: "Waterbirds & Lakes" },
  { id: 30, name: "Yellow-billed Stork", location: "Queen Elizabeth", month: "All year", section: "Waterbirds & Lakes" },

  // SECTION 4: SAVANNA & PARKS
  { id: 31, name: "Secretary Bird", location: "Queen Elizabeth", month: "All year", section: "Savanna & Parks" },
  { id: 32, name: "Martial Eagle", location: "Queen Elizabeth", month: "All year", section: "Savanna & Parks" },
  { id: 33, name: "Bateleur", location: "Queen Elizabeth", month: "All year", section: "Savanna & Parks" },
  { id: 34, name: "Lappet-faced Vulture", location: "Queen Elizabeth", month: "All year", section: "Savanna & Parks" },
  { id: 35, name: "White-headed Vulture", location: "Queen Elizabeth", month: "All year", section: "Savanna & Parks" },
  { id: 36, name: "Red-necked Falcon", location: "Lake Mburo", month: "All year", section: "Savanna & Parks" },
  { id: 37, name: "Black-headed Gonolek", location: "Queen Elizabeth", month: "All year", section: "Savanna & Parks" },
  { id: 38, name: "Red-faced Barbet", location: "Lake Mburo", month: "All year", section: "Savanna & Parks" },
  { id: 39, name: "Brown-chested Lapwing", location: "Queen Elizabeth", month: "All year", section: "Savanna & Parks" },
  { id: 40, name: "Black Bee-eater", location: "Queen Elizabeth", month: "All year", section: "Savanna & Parks" },

  // SECTION 5: COLORFUL & ICONIC
  { id: 41, name: "Lilac-breasted Roller", location: "Queen Elizabeth", month: "All year", section: "Colorful & Iconic" },
  { id: 42, name: "Abyssinian Roller", location: "Murchison Falls", month: "All year", section: "Colorful & Iconic" },
  { id: 43, name: "Northern Carmine Bee-eater", location: "Albert Nile", month: "Mar – May", section: "Colorful & Iconic" },
  { id: 44, name: "Blue-headed Coucal", location: "Kibale", month: "All year", section: "Colorful & Iconic" },
  { id: 45, name: "Ross's Turaco", location: "Queen Elizabeth", month: "All year", section: "Colorful & Iconic" },
  { id: 46, name: "Hartlaub's Turaco", location: "Kibale", month: "All year", section: "Colorful & Iconic" },
  { id: 47, name: "Bare-faced Go-away-bird", location: "Lake Mburo", month: "All year", section: "Colorful & Iconic" },
  { id: 48, name: "Giant Kingfisher", location: "Kazinga Channel", month: "All year", section: "Colorful & Iconic" },
  { id: 49, name: "Malachite Kingfisher", location: "Everywhere", month: "All year", section: "Colorful & Iconic" },
  { id: 50, name: "African Pygmy Kingfisher", location: "Kibale", month: "All year", section: "Colorful & Iconic" },

  // SECTION 6: SUNBIRDS & WEAVERS
  { id: 51, name: "Marico Sunbird", location: "Lake Mburo", month: "All year", section: "Sunbirds & Weavers" },
  { id: 52, name: "Beautiful Sunbird", location: "Queen Elizabeth", month: "All year", section: "Sunbirds & Weavers" },
  { id: 53, name: "Variable Sunbird", location: "Everywhere", month: "All year", section: "Sunbirds & Weavers" },
  { id: 54, name: "Northern Double-collared Sunbird", location: "Bwindi", month: "All year", section: "Sunbirds & Weavers" },
  { id: 55, name: "Eastern Double-collared Sunbird", location: "Kibale", month: "All year", section: "Sunbirds & Weavers" },
  { id: 56, name: "Black-headed Weaver", location: "Entebbe", month: "All year", section: "Sunbirds & Weavers" },
  { id: 57, name: "Grosbeak Weaver", location: "Mabamba", month: "All year", section: "Sunbirds & Weavers" },
  { id: 58, name: "Vieillot's Black Weaver", location: "Kibale", month: "All year", section: "Sunbirds & Weavers" },
  { id: 59, name: "Yellow-backed Weaver", location: "Queen Elizabeth", month: "All year", section: "Sunbirds & Weavers" },
  { id: 60, name: "Compact Weaver", location: "Bwindi", month: "All year", section: "Sunbirds & Weavers" },

  // SECTION 7: RAPTORS
  { id: 61, name: "African Crowned Eagle", location: "Kibale, Bwindi", month: "All year", section: "Raptors" },
  { id: 62, name: "Long-crested Eagle", location: "Queen Elizabeth", month: "All year", section: "Raptors" },
  { id: 63, name: "African Harrier-Hawk", location: "Forest edges", month: "All year", section: "Raptors" },
  { id: 64, name: "Ovambo Sparrowhawk", location: "Kampala", month: "All year", section: "Raptors" },
  { id: 65, name: "Lizard Buzzard", location: "Forest edges", month: "All year", section: "Raptors" },
  { id: 66, name: "Grasshopper Buzzard", location: "Queen Elizabeth", month: "Dec – Mar", section: "Raptors" },
  { id: 67, name: "European Honey Buzzard", location: "Migratory", month: "Oct – Mar", section: "Raptors" },
  { id: 68, name: "Gabar Goshawk", location: "Lake Mburo", month: "All year", section: "Raptors" },
  { id: 69, name: "Dark Chanting Goshawk", location: "Queen Elizabeth", month: "All year", section: "Raptors" },
  { id: 70, name: "Peregrine Falcon", location: "Murchison", month: "All year", section: "Raptors" },

  // SECTION 8: OTHERS
  { id: 71, name: "Abyssinian Ground Hornbill", location: "Queen Elizabeth", month: "All year", section: "Others" },
  { id: 72, name: "Silvery-cheeked Hornbill", location: "Kibale", month: "All year", section: "Others" },
  { id: 73, name: "African Grey Parrot", location: "Mabira Forest", month: "All year", section: "Others" },
  { id: 74, name: "Red-headed Lovebird", location: "Queen Elizabeth", month: "All year", section: "Others" },
  { id: 75, name: "Narina Trogon", location: "Kibale", month: "All year", section: "Others" },
  { id: 76, name: "Green Wood Hoopoe", location: "Queen Elizabeth", month: "All year", section: "Others" },
  { id: 77, name: "Black-billed Barbet", location: "Lake Mburo", month: "All year", section: "Others" },
  { id: 78, name: "Speckled Tinkerbird", location: "Bwindi", month: "All year", section: "Others" },
  { id: 79, name: "Yellow-throated Tinkerbird", location: "Kibale", month: "All year", section: "Others" },
  { id: 80, name: "Grey Woodpecker", location: "Queen Elizabeth", month: "All year", section: "Others" },
  { id: 81, name: "Brown-backed Woodpecker", location: "Kibale", month: "All year", section: "Others" },
  { id: 82, name: "African Pitta", location: "Kibale", month: "Mar – Jun", section: "Others" },
  { id: 83, name: "White-throated Bee-eater", location: "Queen Elizabeth", month: "All year", section: "Others" },
  { id: 84, name: "Blue-breasted Bee-eater", location: "Kibale", month: "All year", section: "Others" },
  { id: 85, name: "African Broadbill", location: "Kibale", month: "All year", section: "Others" },
  { id: 86, name: "Black-and-white Casqued Hornbill", location: "Kibale", month: "All year", section: "Others" },
  { id: 87, name: "White-thighed Hornbill", location: "Kibale", month: "All year", section: "Others" },
  { id: 88, name: "Yellow-rumped Tinkerbird", location: "Bwindi", month: "All year", section: "Others" },
  { id: 89, name: "Grey-backed Camaroptera", location: "Kibale", month: "All year", section: "Others" },
  { id: 90, name: "White-chinned Prinia", location: "Queen Elizabeth", month: "All year", section: "Others" },
  { id: 91, name: "Buff-throated Apalis", location: "Kibale", month: "All year", section: "Others" },
  { id: 92, name: "Grey Apalis", location: "Bwindi", month: "All year", section: "Others" },
  { id: 93, name: "Yellow-breasted Apalis", location: "Queen Elizabeth", month: "All year", section: "Others" },
  { id: 94, name: "Red-faced Woodland Warbler", location: "Bwindi", month: "All year", section: "Others" },
  { id: 95, name: "Mountain Illadopsis", location: "Bwindi", month: "All year", section: "Others" },
  { id: 96, name: "Brown Illadopsis", location: "Kibale", month: "All year", section: "Others" },
  { id: 97, name: "Black-faced Rufous Warbler", location: "Bwindi", month: "All year", section: "Others" },
  { id: 98, name: "Red-faced Barbet", location: "Lake Mburo", month: "All year", section: "Others" },
  { id: 99, name: "Dusky Crimsonwing", location: "Bwindi", month: "All year", section: "Others" },
  { id: 100, name: "African Emerald Cuckoo", location: "Kibale", month: "Mar – May", section: "Others" }
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Jameson Reynolds",
    rating: 5,
    quote: "Absolutely magical experience! The chimpanzee trekking in Kibale Forest and standing next to mountain gorillas in Bwindi was a soul-stirring journey. Pearl Gorilla Tours took care of everything seamlessly—the Ndali lodge was out of this world, with volcanic crater views that I'll remember forever.",
    tripType: "Luxury 7-Day Uganda Grand Safari",
    date: "May 2026"
  },
  {
    id: "2",
    name: "Elena Rostova",
    rating: 5,
    quote: "Kibale chimpanzees are remarkable! Our expert primatologist guide was incredibly knowledgeable and we saw multiple chimp groups feeding and nesting. The Bigodi Wetlands swamp walk in Fort Portal was a birdwatcher's dream. We spotted 14 lifers in just one afternoon, including the majestic Great Blue Turaco!",
    tripType: "Classic 7-Day Uganda Safari",
    date: "June 2026"
  },
  {
    id: "3",
    name: "Dr. Arthur Pendelton",
    rating: 5,
    quote: "Our private tour of Fort Portal and Kibale attractions as one package was perfectly designed. As an avid birder, having the interactive checklist was a brilliant addition. The hospitality at Clouds Mountain Gorilla Lodge in Bwindi was absolute 5-star perfection—from the private log fireplaces to our dedicated guides.",
    tripType: "Luxury Custom Safari",
    date: "April 2026"
  }
];

export const faqs = [
  {
    question: "What is included in the Pearl Gorilla safari package?",
    answer: "Our standard 7-day tour packages are highly inclusive. The Luxury package includes standard items like full board premium luxury lodges, professional 4x4 private transport, airport lounge access, all national park fees, private boat cruise, and crucially, both the gorilla permit ($800 value) and chimp trekking permits fully integrated with no hidden charges. Our Classic package includes comfortable en-suite boutique eco-tents, full board meals, a reliable 4x4 safari cruiser, and professional guiding."
  },
  {
    question: "How do I secure and book my mountain gorilla and chimpanzee permits?",
    answer: "Uganda Wildlife Authority gorilla and chimpanzee permits are highly limited (only 8 visitors per gorilla family per day) and sell out months in advance. When you book with Pearl Gorilla Safaris, we instantly secure and purchase your official permits on your behalf through our verified local operator network. We handle all the administration, so your permits are guaranteed on your arrival."
  },
  {
    question: "What is your reservation and cancellation policy?",
    answer: "Due to the strict non-refundable nature of gorilla and chimpanzee permits ($800 for gorillas, $200 for chimps), a 30% deposit is required at booking to secure these immediately. For the remaining booking costs, cancellations made more than 60 days prior to departure receive a 100% refund (minus permit fees). Within 30 to 60 days, we provide a 50% refund. We strongly recommend travel insurance to protect your investment."
  },
  {
    question: "Do you offer emergency medical evacuation and travel insurance?",
    answer: "Yes, we partner directly with AMREF Flying Doctors to provide emergency evacuation coverage to international level hospitals in Entebbe or Nairobi for all our tour clients. This is fully included in our Luxury package. However, we still require all tourists to maintain comprehensive international medical insurance for standard hospital treatments and travel disruptions."
  },
  {
    question: "What should I pack for a primate tracking and birding safari in Uganda?",
    answer: "Primate tracking involves walking through thick tropical rainforests. We strongly recommend: sturdy, waterproof hiking boots with good grip; long-sleeved lightweight safari shirts and long trousers to protect against nettles and insects; tough gardening gloves (for gripping vines during steep hikes); a high-quality lightweight rain jacket; insect repellent with DEET; a wide-brimmed hat; sunglasses; and a good pair of binoculars for birding. Don't forget your camera with plenty of memory cards!"
  }
];

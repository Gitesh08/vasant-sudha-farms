export const DEMO_MODE = true;
export const SHOW_IMAGE_CAPTIONS = false;

export interface StayType {
  id: string;
  slug: string;
  name: string;
  tier: string;
  summary: string;
  bedrooms: number;
  baseOccupancy: number;
  maxOccupancy: number;
  unitsTotal: number;
  features: string[];
  imageSlot: string;
  demo: true;
}

export interface FaqItem {
  id: string;
  category: "stays" | "picnics" | "events" | "general";
  question: string;
  answer: string;
}

export const SITE_FACTS = {
  name: "Vasant Sudha Farms",
  tagline: "Where Comfort Meets Nature",
  address: "House No. 638, Nandgaon Beach, Nandgaon, Boisar, Palghar, Maharashtra 401501",
  shortPlace: "Nandgaon Beach, Boisar",
  region: "Palghar district, Konkan coast",
  coordinates: { lat: 19.76659, lng: 72.68853 },
  operatingSince: "2018",
  checkInTime: "2:00 PM",
  checkOutTime: "12:00 PM",
  picnicTimings: "9:30 AM to 5:30 PM",
  instagramHandle: "vasant.sudha_farms.resort",
  instagramUrl: "https://www.instagram.com/vasant.sudha_farms.resort/",
  mapsUrl: "https://maps.google.com/?q=19.76659,72.68853",
  mandapUrl: "https://www.mandap.com/mumbai/vasant-sudha-farm-boisar-in-boisar",
  demoWhatsapp: "+91 98200 00000",
  venueSpecs: {
    seatingCapacity: "800 guests",
    floatingCapacity: "800 guests",
    diningCapacity: "800 guests",
    hallLocation: "Ground-floor hall and open green lawn",
    parkingCars: "100 cars",
    parkingBikes: "300 bikes",
    roomTypes: "Air-conditioned and natural breeze cottages with lockers",
  },
} as const;

export const DEMO_STAYS: StayType[] = [
  {
    id: "palm-villa-suite",
    slug: "palm-villa-suite",
    name: "The Palm Villa Suite",
    tier: "Master Family Villa",
    summary:
      "A spacious two-bedroom air-conditioned suite opening onto the palm courtyard and pool, designed for family retreats and bridal preparations.",
    bedrooms: 2,
    baseOccupancy: 4,
    maxOccupancy: 6,
    unitsTotal: 2,
    features: [
      "Two private AC bedrooms",
      "Direct pool & courtyard views",
      "Private secure locker",
      "En-suite baths & high-speed Wi-Fi",
    ],
    imageSlot: "STAY-VILLA-01",
    demo: true,
  },
  {
    id: "orchard-cottage",
    slug: "orchard-cottage",
    name: "The Orchard Cottage",
    tier: "Independent Garden Retreat",
    summary:
      "A serene standalone cottage sheltered by coconut palms and fruit trees with a shaded sit-out verandah, perfect for couples and small families.",
    bedrooms: 1,
    baseOccupancy: 2,
    maxOccupancy: 4,
    unitsTotal: 4,
    features: [
      "Private garden verandah",
      "Climate control & natural ventilation",
      "Dedicated secure locker",
      "Quiet orchard pathway access",
    ],
    imageSlot: "STAY-COTTAGE-01",
    demo: true,
  },
  {
    id: "courtyard-suite",
    slug: "courtyard-suite",
    name: "Courtyard Garden Rooms",
    tier: "Ground-Floor Garden Living",
    summary:
      "Ground-floor rooms stepping out directly to the expansive central lawn and poolside, ideal for multi-generational families and group stays.",
    bedrooms: 1,
    baseOccupancy: 2,
    maxOccupancy: 3,
    unitsTotal: 6,
    features: [
      "Step-free ground-floor access",
      "Lawn & swimming pool adjacency",
      "Private en-suite bathroom",
      "Ample parking proximity",
    ],
    imageSlot: "STAY-GARDEN-01",
    demo: true,
  },
];

export const EXPERIENCE_PILLARS = [
  {
    title: "Day Picnics & Leisure",
    subtitle: "9:30 AM to 5:30 PM",
    description:
      "Spend the day under coconut palms with freshwater pool access, authentic Konkan lunch, and a sunset walk to Nandgaon Beach.",
    highlights: ["Freshwater swimming pool", "Konkan lunch & high tea", "Changing facilities", "Lawn games & shade"],
    tag: "Day Outing",
  },
  {
    title: "Private Stays & Getaways",
    subtitle: "Overnight coastal retreat",
    description:
      "Air-conditioned villas and garden cottages with private lockers, unhurried mornings, and starry coastal nights two hours from Mumbai.",
    highlights: ["AC cottages & villas", "Courtyard pool access", "Private secure lockers", "Steps to shoreline"],
    tag: "Overnight Stay",
  },
  {
    title: "Celebrations & Banquets",
    subtitle: "Gatherings up to 800 guests",
    description:
      "Expansive celebration lawn and indoor banquet hall for birthdays, anniversaries, and destination weddings with 100+ car parking.",
    highlights: ["800-capacity lawn & hall", "100+ car parking", "Bridal prep suites", "Full banqueting support"],
    tag: "Celebrations",
  },
] as const;

export const DINING_HIGHLIGHTS = [
  {
    name: "Konkan coastal & farm banquets",
    note: "Authentic coastal fish curries, local spices, and fresh seasonal preparations",
  },
  {
    name: "Farm-fresh vegetarian thalis",
    note: "Wholesome, home-style regional dishes cooked fresh on the estate",
  },
  {
    name: "Poolside high-tea & sundowner snacks",
    note: "Hot tea, coastal snacks, and evening savouries under the coconut palms",
  },
  {
    name: "Custom event & wedding banqueting",
    note: "Comprehensive buffet dining service capable of hosting up to 800 guests",
  },
] as const;

export const FAQS: FaqItem[] = [
  {
    id: "suitability",
    category: "general",
    question: "Who is Vasant Sudha Farms ideal for?",
    answer:
      "Vasant Sudha Farms is crafted for everyone: couples seeking a quiet coastal retreat, families on weekend getaways, friend groups planning pool day picnics, and host families organizing celebrations or destination weddings up to 800 guests.",
  },
  {
    id: "day-picnics",
    category: "picnics",
    question: "Do you offer day picnic packages without overnight stay?",
    answer:
      "Yes. Day picnic guests enjoy full farm access from 9:30 AM to 5:30 PM, including freshwater pool use, lawn games, shaded orchard seating, changing facilities, and freshly prepared Konkan lunch with evening tea.",
  },
  {
    id: "capacity-events",
    category: "events",
    question: "What is the capacity for weddings, receptions, and parties?",
    answer:
      "Our expansive open lawn and ground-floor indoor banquet hall comfortably host up to 800 seating, floating, and dining guests. We have dedicated parking for over 100 cars and 300 two-wheelers.",
  },
  {
    id: "stay-rooms",
    category: "stays",
    question: "What room options are available on the property?",
    answer:
      "We offer two-bedroom family suites, private garden cottages, and courtyard rooms. Both air-conditioned and well-ventilated options are available, all equipped with secure private lockers and modern en-suite bathrooms.",
  },
  {
    id: "beach-distance",
    category: "general",
    question: "How close is the farm to Nandgaon Beach?",
    answer:
      "The farm is located at House No. 638 right by Nandgaon Beach in Boisar. The peaceful shoreline is a gentle 3-minute stroll from our gates, perfect for morning runs or sunset strolls.",
  },
  {
    id: "food-options",
    category: "general",
    question: "What kind of food and dining is served?",
    answer:
      "We serve fresh, authentic Konkan cuisine alongside rich vegetarian spreads, prepared on-site by experienced regional cooks. Custom menus can be tailored for family gatherings, day groups, and large wedding banquets.",
  },
  {
    id: "reach-location",
    category: "general",
    question: "How do we reach the property from Mumbai or Thane?",
    answer:
      "By train, Boisar Station on the Western Railway Line is approximately 90 km from Mumbai, followed by a 20-minute auto ride to Nandgaon Beach. By car, it is a smooth 2.5-hour drive via National Highway 48.",
  },
];

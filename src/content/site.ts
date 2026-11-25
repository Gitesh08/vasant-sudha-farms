export const DEMO_MODE = true;
export const SHOW_IMAGE_CAPTIONS = false;

export interface StayType {
  id: string;
  slug: string;
  name: string;
  summary: string;
  bedrooms: number;
  baseOccupancy: number;
  maxOccupancy: number;
  unitsTotal: number;
  rateWeekday: number;
  rateWeekend: number;
  extraGuestFee: number;
  amenities: string[];
  imageSlot: string;
  demo: true;
}

export interface ExperienceItem {
  id: string;
  title: string;
  description: string;
  detail: string;
  imageSlot: string;
  verified: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  status: "verified" | "to-confirm";
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
  instagramHandle: "vasant.sudha_farms.resort",
  instagramUrl: "https://www.instagram.com/vasant.sudha_farms.resort/",
  mapsUrl: "https://maps.google.com/?q=19.76659,72.68853",
  demoWhatsapp: "+91 00000 00000",
  facilitiesVerified: [
    "Swimming pool",
    "Kids play area",
    "Kitchenette",
    "Parking",
    "WiFi",
    "Laundry",
    "Luggage storage",
    "Doctor on call",
  ],
} as const;

export const DEMO_STAYS: StayType[] = [
  {
    id: "sea-breeze-villa",
    slug: "sea-breeze-villa",
    name: "Sea Breeze Villa",
    summary: "Two-bedroom villa facing the pool with a wide veranda for families or small groups.",
    bedrooms: 2,
    baseOccupancy: 4,
    maxOccupancy: 6,
    unitsTotal: 2,
    rateWeekday: 2400,
    rateWeekend: 3200,
    extraGuestFee: 400,
    amenities: ["Pool-facing", "Balcony", "Kitchenette", "WiFi", "Parking"],
    imageSlot: "STAY-VILLA-01",
    demo: true,
  },
  {
    id: "farm-cottage",
    slug: "farm-cottage",
    name: "Farm Cottage",
    summary: "Quiet garden-side cottage shaded by coconut palms, suited to couples or a family of four.",
    bedrooms: 1,
    baseOccupancy: 2,
    maxOccupancy: 4,
    unitsTotal: 4,
    rateWeekday: 1600,
    rateWeekend: 2200,
    extraGuestFee: 400,
    amenities: ["Garden side", "Private sit-out", "WiFi", "Parking"],
    imageSlot: "STAY-COTTAGE-01",
    demo: true,
  },
  {
    id: "garden-room",
    slug: "garden-room",
    name: "Garden Room",
    summary: "Simple, airy room close to the lawn and play area for an easy weekend by the coast.",
    bedrooms: 1,
    baseOccupancy: 2,
    maxOccupancy: 3,
    unitsTotal: 6,
    rateWeekday: 1200,
    rateWeekend: 1700,
    extraGuestFee: 400,
    amenities: ["Ground floor", "Lawn access", "WiFi", "Parking"],
    imageSlot: "STAY-GARDEN-01",
    demo: true,
  },
];

export const FARM_EXPERIENCES: ExperienceItem[] = [
  {
    id: "pool",
    title: "Swimming pool under the palms",
    description:
      "An outdoor pool set in the middle of the grounds, with shallow space for children and shade along the edge.",
    detail: "Listed facility · Timings to be confirmed with owner",
    imageSlot: "POOL-01",
    verified: true,
  },
  {
    id: "beach",
    title: "A short walk to Nandgaon Beach",
    description:
      "Nandgaon’s wide Konkan shoreline is right down the road, quiet at low tide in the morning and open for sunset walks.",
    detail: "Nandgaon Beach, Boisar",
    imageSlot: "BEACH-01",
    verified: true,
  },
  {
    id: "orchard",
    title: "Coconut and chikoo grounds",
    description:
      "Green, tree-lined paths across the farm property with space to sit out, read, or let kids run around safely.",
    detail: "Farm grounds · Since 2018",
    imageSlot: "FARM-01",
    verified: true,
  },
  {
    id: "kids",
    title: "Children’s play area",
    description:
      "Dedicated play space away from parking so families can keep an easy eye on younger kids.",
    detail: "Listed facility · Family-friendly",
    imageSlot: "KIDS-01",
    verified: true,
  },
];

export const SAMPLE_FOOD_ITEMS = [
  { name: "Kanda poha & masala chai", note: "Morning breakfast (sample)" },
  { name: "Konkan-style veg or fish thali", note: "Lunch / dinner (sample)" },
  { name: "Fresh coconut water from the grounds", note: "Afternoon (sample)" },
  { name: "Simple kids’ meals on request", note: "To confirm with kitchen" },
] as const;

export const FAQS: FaqItem[] = [
  {
    id: "pool",
    question: "Is there a swimming pool on the property?",
    answer:
      "Yes, Vasant Sudha Farms has an outdoor swimming pool on the grounds. Exact pool timings and swimwear rules are to be confirmed with the owner.",
    status: "verified",
  },
  {
    id: "beach",
    question: "How close is Nandgaon Beach?",
    answer:
      "The property is located at Nandgaon Beach, Boisar (House No. 638). You can walk down to the shore directly from the farm.",
    status: "verified",
  },
  {
    id: "checkin",
    question: "What are the check-in and check-out times?",
    answer:
      "Standard check-in is 2:00 PM and check-out is 12:00 PM. Early check-in or late check-out depends on availability.",
    status: "verified",
  },
  {
    id: "food",
    question: "Are meals included or available on-site?",
    answer:
      "To confirm with the owner. A kitchenette is listed among facilities; home-style Konkan meals and group packages will be confirmed here before launch.",
    status: "to-confirm",
  },
  {
    id: "groups",
    question: "Do you host family groups or day visits?",
    answer:
      "To confirm with the owner. Group enquiries can be sent via the booking request drawer with your headcount and preferred dates.",
    status: "to-confirm",
  },
  {
    id: "cancellation",
    question: "What is the cancellation policy?",
    answer:
      "Sample policy for demo only. The owner’s actual cancellation and advance-payment terms will replace this text before launch.",
    status: "to-confirm",
  },
];

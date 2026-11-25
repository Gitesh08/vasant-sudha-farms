export type PhotoShape = "arch" | "rect" | "circle";
export type PhotoTint = "wave" | "sand" | "sun";

export interface ImageSlot {
  id: string;
  src: string | null;
  alt: string;
  aspect: string;
  shape: PhotoShape;
  caption: string;
  tint: PhotoTint;
}

export const IMAGE_MANIFEST: Record<string, ImageSlot> = {
  "HERO-01": {
    id: "HERO-01",
    src: null,
    alt: "Coconut palms at Vasant Sudha Farms in late afternoon light",
    aspect: "4 / 5",
    shape: "arch",
    caption: "HERO-01 · Palm line at golden hour, wide",
    tint: "sun",
  },
  "STAY-VILLA-01": {
    id: "STAY-VILLA-01",
    src: null,
    alt: "Exterior of the sample Sea Breeze Villa facing the pool",
    aspect: "4 / 5",
    shape: "arch",
    caption: "STAY-VILLA-01 · Pool-facing villa exterior",
    tint: "wave",
  },
  "STAY-COTTAGE-01": {
    id: "STAY-COTTAGE-01",
    src: null,
    alt: "Garden-side cottage shaded by coconut palms",
    aspect: "4 / 5",
    shape: "arch",
    caption: "STAY-COTTAGE-01 · Garden cottage veranda",
    tint: "sand",
  },
  "STAY-GARDEN-01": {
    id: "STAY-GARDEN-01",
    src: null,
    alt: "Ground-floor garden room opening to the lawn",
    aspect: "4 / 5",
    shape: "arch",
    caption: "STAY-GARDEN-01 · Garden room & lawn",
    tint: "wave",
  },
  "POOL-01": {
    id: "POOL-01",
    src: null,
    alt: "Swimming pool surrounded by coconut palms",
    aspect: "3 / 2",
    shape: "rect",
    caption: "POOL-01 · Pool mid-morning, palm shade",
    tint: "wave",
  },
  "BEACH-01": {
    id: "BEACH-01",
    src: null,
    alt: "Nandgaon Beach at low tide near sunset",
    aspect: "16 / 9",
    shape: "rect",
    caption: "BEACH-01 · Nandgaon Beach at low tide",
    tint: "sand",
  },
  "FARM-01": {
    id: "FARM-01",
    src: null,
    alt: "Chikoo and coconut trees along the farm path",
    aspect: "3 / 2",
    shape: "rect",
    caption: "FARM-01 · Chikoo & coconut orchard path",
    tint: "sun",
  },
  "KIDS-01": {
    id: "KIDS-01",
    src: null,
    alt: "Children’s play area on the farm grounds",
    aspect: "3 / 2",
    shape: "rect",
    caption: "KIDS-01 · Play area near the lawn",
    tint: "sand",
  },
  "EVENING-01": {
    id: "EVENING-01",
    src: null,
    alt: "Outdoor seating area lit warmly at dusk",
    aspect: "16 / 9",
    shape: "rect",
    caption: "EVENING-01 · Seating area lit at dusk",
    tint: "sun",
  },
  "FOOD-01": {
    id: "FOOD-01",
    src: null,
    alt: "Home-style breakfast served on the terrace",
    aspect: "4 / 3",
    shape: "rect",
    caption: "FOOD-01 · Morning tea & breakfast spread",
    tint: "sand",
  },
  "LOC-01": {
    id: "LOC-01",
    src: null,
    alt: "Entrance gate to Vasant Sudha Farms at Nandgaon Beach",
    aspect: "16 / 9",
    shape: "rect",
    caption: "LOC-01 · Entrance gate & village road",
    tint: "wave",
  },
};

export function getImageSlot(slotId: string): ImageSlot {
  return (
    IMAGE_MANIFEST[slotId] ?? {
      id: slotId,
      src: null,
      alt: "Vasant Sudha Farms placeholder",
      aspect: "3 / 2",
      shape: "rect",
      caption: `${slotId} · Photo slot`,
      tint: "sand",
    }
  );
}

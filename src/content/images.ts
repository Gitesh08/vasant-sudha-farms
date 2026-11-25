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
    src: "https://res.cloudinary.com/db7h39kx9/image/upload/v1795617591/hero-image-1_jowaea.jpg",
    alt: "Vasant Sudha Farms coastal resort estate with swimming pool and palm groves",
    aspect: "16 / 10",
    shape: "rect",
    caption: "HERO-01 · Estate pool & coconut grounds",
    tint: "wave",
  },
  "POOL-01": {
    id: "POOL-01",
    src: "https://res.cloudinary.com/db7h39kx9/image/upload/v1795617598/swimming-pool_gksjwr.jpg",
    alt: "Freshwater swimming pool framed by coconut palms and open sky",
    aspect: "16 / 10",
    shape: "rect",
    caption: "POOL-01 · Freshwater swimming pool",
    tint: "wave",
  },
  "POOL-02": {
    id: "POOL-02",
    src: "https://res.cloudinary.com/db7h39kx9/image/upload/v1795617588/swimming-pool-sideview_q1z8zf.jpg",
    alt: "Poolside loungers and shaded courtyard garden",
    aspect: "4 / 3",
    shape: "rect",
    caption: "POOL-02 · Poolside lounge view",
    tint: "wave",
  },
  "PROPERTY-01": {
    id: "PROPERTY-01",
    src: "https://res.cloudinary.com/db7h39kx9/image/upload/v1795617593/property-view-1_dchzx1.jpg",
    alt: "Expansive green estate grounds with tropical tree canopy",
    aspect: "4 / 3",
    shape: "rect",
    caption: "PROPERTY-01 · Estate lawn and trees",
    tint: "sand",
  },
  "PROPERTY-02": {
    id: "PROPERTY-02",
    src: "https://res.cloudinary.com/db7h39kx9/image/upload/v1795617588/property-view-2_vfm96r.jpg",
    alt: "Sun-dappled farm pathways through coconut orchards",
    aspect: "4 / 3",
    shape: "rect",
    caption: "PROPERTY-02 · Orchard paths and lawns",
    tint: "sand",
  },
  "EVENT-01": {
    id: "EVENT-01",
    src: "https://res.cloudinary.com/db7h39kx9/image/upload/v1795617589/wedding-decor-image_ibeugl.jpg",
    alt: "Celebration floral arch and ceremony setup on the lawn",
    aspect: "4 / 3",
    shape: "rect",
    caption: "EVENT-01 · Wedding & celebration stage decor",
    tint: "sun",
  },
  "EVENT-02": {
    id: "EVENT-02",
    src: "https://res.cloudinary.com/db7h39kx9/image/upload/v1795617588/property-view-with-decor_jlmbks.jpg",
    alt: "Open banquet lawn decorated for evening functions",
    aspect: "16 / 10",
    shape: "rect",
    caption: "EVENT-02 · Open banquet lawn",
    tint: "sand",
  },
  "EVENING-01": {
    id: "EVENING-01",
    src: "https://res.cloudinary.com/db7h39kx9/image/upload/v1795617588/property-view-evening_oghuzz.jpg",
    alt: "Estate softly illuminated under the twilight sky",
    aspect: "16 / 9",
    shape: "rect",
    caption: "EVENING-01 · Evening ambiance under the palms",
    tint: "sun",
  },
  "FOOD-01": {
    id: "FOOD-01",
    src: "https://res.cloudinary.com/db7h39kx9/image/upload/v1795617587/prawns-food_ugn3nf.jpg",
    alt: "Freshly prepared Konkan coastal prawns delicacy",
    aspect: "4 / 3",
    shape: "rect",
    caption: "FOOD-01 · Fresh Konkan coastal seafood",
    tint: "sand",
  },
  "STAY-VILLA-01": {
    id: "STAY-VILLA-01",
    src: "https://res.cloudinary.com/db7h39kx9/image/upload/v1795617593/property-view-1_dchzx1.jpg",
    alt: "The Palm Villa Suite overlooking the lush courtyard grounds",
    aspect: "4 / 3",
    shape: "rect",
    caption: "STAY-VILLA-01 · The Palm Villa Suite",
    tint: "wave",
  },
  "STAY-COTTAGE-01": {
    id: "STAY-COTTAGE-01",
    src: "https://res.cloudinary.com/db7h39kx9/image/upload/v1795617588/property-view-2_vfm96r.jpg",
    alt: "The Orchard Cottage nestled in quiet palm shade",
    aspect: "4 / 3",
    shape: "rect",
    caption: "STAY-COTTAGE-01 · The Orchard Cottage",
    tint: "sand",
  },
  "STAY-GARDEN-01": {
    id: "STAY-GARDEN-01",
    src: "https://res.cloudinary.com/db7h39kx9/image/upload/v1795617588/swimming-pool-sideview_q1z8zf.jpg",
    alt: "Courtyard Guest Room steps from the swimming pool",
    aspect: "4 / 3",
    shape: "rect",
    caption: "STAY-GARDEN-01 · Courtyard Garden Rooms",
    tint: "wave",
  },
  "BEACH-01": {
    id: "BEACH-01",
    src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9e/Koh_Mak_%28island%29%2C_Thailand%2C_Sunset_on_the_beach_with_coconut_palms.jpg/1920px-Koh_Mak_%28island%29%2C_Thailand%2C_Sunset_on_the_beach_with_coconut_palms.jpg",
    alt: "Nandgaon Beach shoreline at sunset 3 minutes from the estate",
    aspect: "4 / 3",
    shape: "rect",
    caption: "BEACH-01 · Nandgaon Beach sunset stroll",
    tint: "sand",
  },
  "FARM-01": {
    id: "FARM-01",
    src: "https://res.cloudinary.com/db7h39kx9/image/upload/v1795617593/property-view-1_dchzx1.jpg",
    alt: "Coconut and chikoo orchards across Vasant Sudha Farms",
    aspect: "4 / 3",
    shape: "rect",
    caption: "FARM-01 · Coconut and chikoo orchards",
    tint: "sun",
  },
  "KIDS-01": {
    id: "KIDS-01",
    src: "https://res.cloudinary.com/db7h39kx9/image/upload/v1795617588/property-view-2_vfm96r.jpg",
    alt: "Expansive green lawn grounds for recreation and picnics",
    aspect: "16 / 10",
    shape: "rect",
    caption: "KIDS-01 · Expansive green lawn grounds",
    tint: "sand",
  },
  "LOC-01": {
    id: "LOC-01",
    src: "https://res.cloudinary.com/db7h39kx9/image/upload/v1795617588/property-view-2_vfm96r.jpg",
    alt: "Peaceful coastal approach to Vasant Sudha Farms at Nandgaon Beach",
    aspect: "16 / 10",
    shape: "rect",
    caption: "LOC-01 · Nandgaon Beach coastal approach",
    tint: "wave",
  },
};

export function getImageSlot(slotId: string): ImageSlot {
  return (
    IMAGE_MANIFEST[slotId] ?? {
      id: slotId,
      src: null,
      alt: "Vasant Sudha Farms",
      aspect: "16 / 10",
      shape: "rect",
      caption: `${slotId} · Photo slot`,
      tint: "sand",
    }
  );
}

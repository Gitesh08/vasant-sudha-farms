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
    src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/39/Chalets_facing_the_seaside_and_swimming_pool.jpg/1920px-Chalets_facing_the_seaside_and_swimming_pool.jpg",
    alt: "Coastal estate chalets facing tropical gardens and freshwater swimming pool",
    aspect: "4 / 5",
    shape: "arch",
    caption: "HERO-01 · Coastal estate & freshwater pool",
    tint: "wave",
  },
  "EVENT-01": {
    id: "EVENT-01",
    src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c0/Indian_Wedding_Mandap_Decoration.jpg/1920px-Indian_Wedding_Mandap_Decoration.jpg",
    alt: "Outdoor celebration stage and gathering grounds",
    aspect: "4 / 5",
    shape: "rect",
    caption: "EVENT-01 · Open lawns for celebrations up to 800 guests",
    tint: "sand",
  },
  "STAY-VILLA-01": {
    id: "STAY-VILLA-01",
    src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/39/Chalets_facing_the_seaside_and_swimming_pool.jpg/1920px-Chalets_facing_the_seaside_and_swimming_pool.jpg",
    alt: "The Palm Villa Suite exterior overlooking courtyard and pool",
    aspect: "4 / 5",
    shape: "arch",
    caption: "STAY-VILLA-01 · The Palm Villa Suite",
    tint: "wave",
  },
  "STAY-COTTAGE-01": {
    id: "STAY-COTTAGE-01",
    src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/72/Gardener%27s_Cottage%2C_Rotorua_128.jpg/1920px-Gardener%27s_Cottage%2C_Rotorua_128.jpg",
    alt: "The Orchard Cottage nestled among lush trees and gardens",
    aspect: "4 / 5",
    shape: "arch",
    caption: "STAY-COTTAGE-01 · The Orchard Cottage",
    tint: "sand",
  },
  "STAY-GARDEN-01": {
    id: "STAY-GARDEN-01",
    src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c4/Cottage_garden_border_at_Boreham%2C_Essex%2C_England.jpg/1920px-Cottage_garden_border_at_Boreham%2C_Essex%2C_England.jpg",
    alt: "Courtyard Guest Room with step-free garden access",
    aspect: "4 / 5",
    shape: "arch",
    caption: "STAY-GARDEN-01 · Courtyard Garden Rooms",
    tint: "wave",
  },
  "POOL-01": {
    id: "POOL-01",
    src: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Palm_Springs_pool_2015.jpg",
    alt: "Freshwater swimming pool framed by coconut palms and sunshine",
    aspect: "3 / 2",
    shape: "rect",
    caption: "POOL-01 · Freshwater courtyard pool",
    tint: "wave",
  },
  "BEACH-01": {
    id: "BEACH-01",
    src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9e/Koh_Mak_%28island%29%2C_Thailand%2C_Sunset_on_the_beach_with_coconut_palms.jpg/1920px-Koh_Mak_%28island%29%2C_Thailand%2C_Sunset_on_the_beach_with_coconut_palms.jpg",
    alt: "Nandgaon Beach shoreline at sunset just steps from the property",
    aspect: "4 / 5",
    shape: "rect",
    caption: "BEACH-01 · Nandgaon Beach sunset stroll",
    tint: "sand",
  },
  "FARM-01": {
    id: "FARM-01",
    src: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Coconut_Grove_in_Wakenaam_-_panoramio_%282%29.jpg",
    alt: "Lush coconut and chikoo groves across the estate",
    aspect: "4 / 5",
    shape: "rect",
    caption: "FARM-01 · Coconut and chikoo orchards",
    tint: "sun",
  },
  "KIDS-01": {
    id: "KIDS-01",
    src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8f/Chairs_are_neatly_arranged_in_a_garden_for_an_outdoor_wedding_ceremony.jpg/1920px-Chairs_are_neatly_arranged_in_a_garden_for_an_outdoor_wedding_ceremony.jpg",
    alt: "Expansive green lawn arranged for family gatherings and celebrations",
    aspect: "3 / 2",
    shape: "rect",
    caption: "KIDS-01 · Expansive green lawn grounds",
    tint: "sand",
  },
  "EVENING-01": {
    id: "EVENING-01",
    src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0c/DFC_3024_A_peaceful_tree-lined_courtyard_softly_lit_at_night_beside_a_modern_building.jpg/1920px-DFC_3024_A_peaceful_tree-lined_courtyard_softly_lit_at_night_beside_a_modern_building.jpg",
    alt: "Tree-lined courtyard and lawns illuminated warmly at dusk",
    aspect: "16 / 9",
    shape: "rect",
    caption: "EVENING-01 · Courtyard illumination at dusk",
    tint: "sun",
  },
  "FOOD-01": {
    id: "FOOD-01",
    src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/95/Poha_in_Maharashtra.JPG/1920px-Poha_in_Maharashtra.JPG",
    alt: "Authentic coastal Konkan breakfast and freshly prepared delicacies",
    aspect: "4 / 3",
    shape: "rect",
    caption: "FOOD-01 · Farm-to-table coastal cuisine",
    tint: "sand",
  },
  "LOC-01": {
    id: "LOC-01",
    src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bc/Garden_cottage_near_Holkham_Hall_-_geograph.org.uk_-_3394473.jpg/1920px-Garden_cottage_near_Holkham_Hall_-_geograph.org.uk_-_3394473.jpg",
    alt: "Tranquil coastal lane leading to Vasant Sudha Farms at Nandgaon Beach",
    aspect: "16 / 9",
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
      aspect: "3 / 2",
      shape: "rect",
      caption: `${slotId} · Photo slot`,
      tint: "sand",
    }
  );
}

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
    src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/31/Palm_tree_sunset_%286762518259%29.jpg/1920px-Palm_tree_sunset_%286762518259%29.jpg",
    alt: "Coconut palm silhouette against a warm coastal sunset sky",
    aspect: "4 / 5",
    shape: "arch",
    caption: "HERO-01 · Palm line at golden hour",
    tint: "sun",
  },
  "STAY-VILLA-01": {
    id: "STAY-VILLA-01",
    src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/39/Chalets_facing_the_seaside_and_swimming_pool.jpg/1920px-Chalets_facing_the_seaside_and_swimming_pool.jpg",
    alt: "Sample pool-facing villa exterior with veranda",
    aspect: "4 / 5",
    shape: "arch",
    caption: "STAY-VILLA-01 · Pool-facing villa exterior (sample photo)",
    tint: "wave",
  },
  "STAY-COTTAGE-01": {
    id: "STAY-COTTAGE-01",
    src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/72/Gardener%27s_Cottage%2C_Rotorua_128.jpg/1920px-Gardener%27s_Cottage%2C_Rotorua_128.jpg",
    alt: "Sample garden cottage surrounded by greenery",
    aspect: "4 / 5",
    shape: "arch",
    caption: "STAY-COTTAGE-01 · Garden cottage (sample photo)",
    tint: "sand",
  },
  "STAY-GARDEN-01": {
    id: "STAY-GARDEN-01",
    src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c4/Cottage_garden_border_at_Boreham%2C_Essex%2C_England.jpg/1920px-Cottage_garden_border_at_Boreham%2C_Essex%2C_England.jpg",
    alt: "Sample garden room opening onto planted lawn",
    aspect: "4 / 5",
    shape: "arch",
    caption: "STAY-GARDEN-01 · Garden room & lawn (sample photo)",
    tint: "wave",
  },
  "POOL-01": {
    id: "POOL-01",
    src: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Palm_Springs_pool_2015.jpg",
    alt: "Outdoor swimming pool framed by palm trees",
    aspect: "3 / 2",
    shape: "rect",
    caption: "POOL-01 · Pool under palms (sample photo)",
    tint: "wave",
  },
  "BEACH-01": {
    id: "BEACH-01",
    src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9e/Koh_Mak_%28island%29%2C_Thailand%2C_Sunset_on_the_beach_with_coconut_palms.jpg/1920px-Koh_Mak_%28island%29%2C_Thailand%2C_Sunset_on_the_beach_with_coconut_palms.jpg",
    alt: "Quiet sandy shoreline with coconut palms at sunset",
    aspect: "16 / 9",
    shape: "rect",
    caption: "BEACH-01 · Coastal shoreline at sunset (sample photo)",
    tint: "sand",
  },
  "FARM-01": {
    id: "FARM-01",
    src: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Coconut_Grove_in_Wakenaam_-_panoramio_%282%29.jpg",
    alt: "Green coconut grove and shady farm path",
    aspect: "3 / 2",
    shape: "rect",
    caption: "FARM-01 · Coconut grove grounds (sample photo)",
    tint: "sun",
  },
  "KIDS-01": {
    id: "KIDS-01",
    src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4a/Children%27s_playground_in_the_sanatorium_park_in_Shklo.jpg/1920px-Children%27s_playground_in_the_sanatorium_park_in_Shklo.jpg",
    alt: "Outdoor children's play area in a leafy garden",
    aspect: "3 / 2",
    shape: "rect",
    caption: "KIDS-01 · Play area near the lawn (sample photo)",
    tint: "sand",
  },
  "EVENING-01": {
    id: "EVENING-01",
    src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0c/DFC_3024_A_peaceful_tree-lined_courtyard_softly_lit_at_night_beside_a_modern_building.jpg/1920px-DFC_3024_A_peaceful_tree-lined_courtyard_softly_lit_at_night_beside_a_modern_building.jpg",
    alt: "Tree-lined courtyard softly lit at dusk",
    aspect: "16 / 9",
    shape: "rect",
    caption: "EVENING-01 · Courtyard lit at dusk (sample photo)",
    tint: "sun",
  },
  "FOOD-01": {
    id: "FOOD-01",
    src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/95/Poha_in_Maharashtra.JPG/1920px-Poha_in_Maharashtra.JPG",
    alt: "Traditional Maharashtrian kanda poha breakfast",
    aspect: "4 / 3",
    shape: "rect",
    caption: "FOOD-01 · Sample breakfast plate (sample photo)",
    tint: "sand",
  },
  "LOC-01": {
    id: "LOC-01",
    src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bc/Garden_cottage_near_Holkham_Hall_-_geograph.org.uk_-_3394473.jpg/1920px-Garden_cottage_near_Holkham_Hall_-_geograph.org.uk_-_3394473.jpg",
    alt: "Tree-lined approach to a quiet countryside stay",
    aspect: "16 / 9",
    shape: "rect",
    caption: "LOC-01 · Approach road (sample photo)",
    tint: "wave",
  },
  "EVENT-01": {
    id: "EVENT-01",
    src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8f/Chairs_are_neatly_arranged_in_a_garden_for_an_outdoor_wedding_ceremony.jpg/1920px-Chairs_are_neatly_arranged_in_a_garden_for_an_outdoor_wedding_ceremony.jpg",
    alt: "Outdoor garden seating arranged for an intimate celebration",
    aspect: "4 / 5",
    shape: "rect",
    caption: "EVENT-01 · Garden celebration setup (sample photo)",
    tint: "sand",
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

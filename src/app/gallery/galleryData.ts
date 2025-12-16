export type GalleryImage = {
  slug: string;
  images: string[];
  primaryImage: number;
  title: string;
  description: string;
};

export const galleryImages: GalleryImage[] = [
  {
    slug: 'warm-living-room-vignette',
    images: ['/gallery/warm-living-room-vignette/primary.jpeg'],
    primaryImage: 0,
    title: 'Warm living room vignette',
    description: 'Soft seating and warm wood tones perfect for everyday gathering.',
  },
  {
    slug: 'cozy-bedroom-corner',
    images: ['/gallery/cozy-bedroom-corner/primary.jpeg'],
    primaryImage: 0,
    title: 'Cozy bedroom corner',
    description: 'Layered textiles and a grounded bed frame for restful nights.',
  },
  {
    slug: 'showroom-display',
    images: ['/gallery/showroom-display/primary.jpeg'],
    primaryImage: 0,
    title: 'Showroom display',
    description: 'Curated mix of storage, seating, and accent pieces in the showroom.',
  },
  {
    slug: 'dining-and-storage-pairing',
    images: ['/gallery/dining-and-storage-pairing/primary.jpeg'],
    primaryImage: 0,
    title: 'Dining and storage pairing',
    description: 'Everyday dining setup with practical, beautiful storage alongside.',
  },
  {
    slug: 'customize-closet',
    images: [
      '/gallery/Customize closet/WhatsApp Image 2025-12-15 at 21.55.24.jpeg',
      '/gallery/Customize closet/WhatsApp Image 2025-12-15 at 21.55.24 (1).jpeg',
    ],
    primaryImage: 0,
    title: 'Custom closet storage',
    description: 'Tailored closet solution with adjustable shelving and clean, natural finishes.',
  },
  {
    slug: 'natural-pinewood-5-drawer-chest',
    images: ['/gallery/Natural pinewood 5 draw chest./WhatsApp Image 2025-12-15 at 21.58.24.jpeg'],
    primaryImage: 0,
    title: 'Natural pinewood 5-drawer chest',
    description: 'Solid pine chest with five deep drawers for everyday clothing and linen storage.',
  },
  {
    slug: 'kitchen-pantry-storage',
    images: [
      '/gallery/pantry/WhatsApp Image 2025-12-15 at 21.48.49.jpeg',
      '/gallery/pantry/WhatsApp Image 2025-12-15 at 21.48.50.jpeg',
      '/gallery/pantry/WhatsApp Image 2025-12-15 at 21.48.50 (1).jpeg',
    ],
    primaryImage: 0,
    title: 'Kitchen pantry storage',
    description: 'Organized pantry cabinetry with generous shelving for everyday kitchen essentials.',
  },
];



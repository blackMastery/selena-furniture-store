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
];



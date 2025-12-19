export type GalleryImage = {
  slug: string;
  images: string[];
  primaryImage: number;
  title: string;
  description: string;
  details?: string[];
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
    details: [
      'Size: 4ft length × 6ft height × 13" width',
    ],
  },
  {
    slug: '9-drawer-chest',
    images: ['/gallery/9 draw chest/WhatsApp Image 2025-12-16 at 10.33.37.jpeg'],
    primaryImage: 0,
    title: '9-drawer chest',
    description: 'Spacious nine-drawer chest with ample storage for clothing, linens, and bedroom essentials.',
  },
  {
    slug: '9pc-dining-set',
    images: ['/gallery/9pc dinning set/WhatsApp Image 2025-12-16 at 10.47.06.jpeg'],
    primaryImage: 0,
    title: '9-piece dining set',
    description: 'Complete dining room ensemble with table and chairs, perfect for family meals and gatherings.',
  },
  {
    slug: 'bedroom-set',
    images: [
      '/gallery/Bedroom set/WhatsApp Image 2025-12-16 at 10.32.25.jpeg',
      '/gallery/Bedroom set/WhatsApp Image 2025-12-16 at 10.32.25 (1).jpeg',
      '/gallery/Bedroom set/WhatsApp Image 2025-12-16 at 10.32.25 (2).jpeg',
    ],
    primaryImage: 0,
    title: 'Bedroom set',
    description: 'Complete bedroom furniture collection with bed, dresser, and matching pieces for a cohesive look.',
    details: [
      'King size bed (76" × 80")',
      'Two night stands',
      'Closet (8ft × 8ft)',
    ],
  },
  {
    slug: 'center-table',
    images: ['/gallery/Center table available/WhatsApp Image 2025-12-16 at 10.41.21.jpeg'],
    primaryImage: 0,
    title: 'Center table',
    description: 'Versatile center table perfect for living rooms, offering both style and functionality.',
  },
  {
    slug: 'custom-made-cabinet',
    images: [
      '/gallery/Custom make cabinet/WhatsApp Image 2025-12-16 at 10.37.52.jpeg',
      '/gallery/Custom make cabinet/WhatsApp Image 2025-12-16 at 10.37.53.jpeg',
      '/gallery/Custom make cabinet/WhatsApp Image 2025-12-16 at 10.37.53 (1).jpeg',
      '/gallery/Custom make cabinet/WhatsApp Image 2025-12-16 at 10.37.53 (2).jpeg',
      '/gallery/Custom make cabinet/WhatsApp Image 2025-12-16 at 10.37.54.jpeg',
      '/gallery/Custom make cabinet/WhatsApp Image 2025-12-16 at 10.37.54 (1).jpeg',
      '/gallery/Custom make cabinet/WhatsApp Image 2025-12-16 at 10.37.54 (2).jpeg',
      '/gallery/Custom make cabinet/WhatsApp Image 2025-12-16 at 10.37.54 (3).jpeg',
      '/gallery/Custom make cabinet/WhatsApp Image 2025-12-16 at 10.37.55.jpeg',
      '/gallery/Custom make cabinet/WhatsApp Image 2025-12-16 at 10.37.55 (2).jpeg',
      '/gallery/Custom make cabinet/WhatsApp Image 2025-12-16 at 10.37.55 (3).jpeg',
      '/gallery/Custom make cabinet/WhatsApp Image 2025-12-16 at 10.37.56.jpeg',
      '/gallery/Custom make cabinet/WhatsApp Image 2025-12-16 at 10.37.56 (1).jpeg',
      '/gallery/Custom make cabinet/WhatsApp Image 2025-12-16 at 10.37.56 (2).jpeg',
      '/gallery/Custom make cabinet/WhatsApp Image 2025-12-16 at 10.37.57.jpeg',
    ],
    primaryImage: 0,
    title: 'Custom-made cabinet',
    description: 'Bespoke cabinet solution tailored to your space, featuring quality craftsmanship and thoughtful design.',
  },
  {
    slug: 'customize-kitchen-cabinets',
    images: ['/gallery/Customize kitchen cabinets/WhatsApp Image 2025-12-16 at 10.25.57.jpeg'],
    primaryImage: 0,
    title: 'Custom kitchen cabinets',
    description: 'Tailored kitchen cabinetry designed to maximize storage and complement your kitchen layout.',
  },
  {
    slug: 'entertainment-center',
    images: ['/gallery/Entertainment center/WhatsApp Image 2025-12-16 at 10.42.24.jpeg'],
    primaryImage: 0,
    title: 'Entertainment center',
    description: 'Stylish entertainment center with storage for media equipment and display space for your living room.',
  },
  {
    slug: 'single-size-bed-with-rail',
    images: ['/gallery/Single size bed with rail and underneath /WhatsApp Image 2025-12-16 at 10.28.56.jpeg'],
    primaryImage: 0,
    title: 'Single size bed with rail and storage',
    description: 'Compact single bed with safety rail and convenient underneath storage, ideal for children\'s rooms.',
    details: [
      'Size: 74" × 38"',
    ],
  },
  {
    slug: 'wardrobe-4ft-by-6-5ft',
    images: ['/gallery/Wardrobe 4ft length by 6½ft height/WhatsApp Image 2025-12-16 at 10.55.38.jpeg'],
    primaryImage: 0,
    title: 'Wardrobe 4ft × 6½ft',
    description: 'Spacious wardrobe measuring 4 feet in length and 6½ feet in height, offering ample hanging and storage space.',
  },
  {
    slug: 'white-bedroom-set',
    images: [
      '/gallery/white Bedroom set/WhatsApp Image 2025-12-16 at 10.40.00.jpeg',
      '/gallery/white Bedroom set/WhatsApp Image 2025-12-16 at 10.40.01.jpeg',
      '/gallery/white Bedroom set/WhatsApp Image 2025-12-16 at 10.40.01 (1).jpeg',
      '/gallery/white Bedroom set/WhatsApp Image 2025-12-16 at 10.40.01 (2).jpeg',
      '/gallery/white Bedroom set/WhatsApp Image 2025-12-16 at 10.40.02.jpeg',
      '/gallery/white Bedroom set/WhatsApp Image 2025-12-16 at 10.40.02 (1).jpeg',
    ],
    primaryImage: 0,
    title: 'White bedroom set',
    description: 'Elegant white bedroom furniture collection creating a fresh, clean aesthetic for your sleeping space.',
  },
  {
    slug: 'white-pantry',
    images: ['/gallery/White pantry/WhatsApp Image 2025-12-16 at 10.57.40.jpeg'],
    primaryImage: 0,
    title: 'White pantry',
    description: 'Clean white pantry storage solution with organized shelving for kitchen essentials and dry goods.',
  },
];



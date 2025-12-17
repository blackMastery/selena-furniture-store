import { use } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { galleryImages } from '../galleryData';
import ImageGallery from '@/components/ImageGallery';

type GalleryDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return galleryImages.map((image) => ({
    slug: image.slug,
  }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const item = galleryImages.find((image) => image.slug === slug);

  if (!item) {
    return {
      title: "Gallery item not found | Selena's Furniture Store Guyana",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const baseTitle = "Selena's Furniture Store Guyana";
  const title = `${item.title} | Gallery | ${baseTitle}`;
  const description = `${item.description} Styled with handcrafted furniture from Selena's Furniture Store in Lagrange, West Bank Demerara, Guyana.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      url: `https://selenafurniturestore.com/gallery/${slug}`,
      images: item.images.map((url) => ({
        url,
        width: 1200,
        height: 630,
        alt: item.title,
      })),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: item.images,
    },
    alternates: {
      canonical: `https://selenafurniturestore.com/gallery/${slug}`,
    },
  };
}

export default function GalleryDetailPage({ params }: GalleryDetailPageProps) {
  const { slug } = use(params);
  const item = galleryImages.find((image) => image.slug === slug);

  if (!item) {
    notFound();
  }

  return (
    <div className="bg-brand-sand py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-4">
        <Link
          href="/gallery"
          className="text-xs font-medium text-brand-olive underline-offset-4 hover:underline md:text-sm"
        >
          ← Back to gallery
        </Link>

        <div className="mt-6 grid gap-10 lg:mt-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:items-start">
          <ImageGallery
            images={item.images}
            primaryIndex={item.primaryImage}
            productTitle={item.title}
          />

          <div className="space-y-4 md:space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-olive">
              Gallery Detail
            </p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl">{item.title}</h1>
            <p className="text-sm leading-relaxed text-slate-700 md:text-base">
              {item.description} This vignette highlights the balance we aim for in every room: comfort,
              durability, and a warm, grounded palette that works beautifully in everyday Guyanese homes.
            </p>

            <div className="mt-4 space-y-3 rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-700 md:p-5">
              <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Styling Notes
              </h2>
              <ul className="list-disc space-y-1 pl-5">
                <li>Thoughtfully chosen pieces that anchor the room without feeling heavy.</li>
                <li>Natural finishes that pair well with both light and deeper wall colors.</li>
                <li>Proportions that work in a range of room sizes across local homes.</li>
              </ul>
            </div>

            <div className="mt-4 rounded-xl border border-brand-olive/40 bg-brand-cream p-4 text-sm md:p-5">
              <p className="font-medium text-brand-charcoal">
                Interested in a similar look for your space?
              </p>
              <p className="mt-1 text-slate-700">
                Share a photo of your room and we&apos;ll help you recreate this feeling with pieces that fit
                your layout and budget.
              </p>
              <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://wa.me/5926817995"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary w-full justify-center text-xs sm:text-sm"
                >
                  Chat on WhatsApp
                </a>
                <Link href="/contact" className="btn-secondary w-full justify-center text-xs sm:text-sm">
                  Send a message
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



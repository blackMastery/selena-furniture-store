'use client';

import Link from 'next/link';
import Image from 'next/image';
import { galleryImages } from './galleryData';

export default function Gallery() {
  return (
    <div className="bg-brand-sand py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-olive">
            Gallery
          </p>
          <h1 className="mt-2 text-3xl md:text-4xl">Rooms and moments we&apos;ve furnished.</h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-700 md:text-base">
            A look at pieces we love—from simple storage to statement seating—styled in real homes and
            showroom vignettes across Guyana.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((img) => (
            <Link key={img.slug} href={`/gallery/${img.slug}`} className="block focus:outline-none focus:ring-2 focus:ring-brand-olive focus:ring-offset-2 focus:ring-offset-brand-sand rounded-xl">
              <article className="card-elevated overflow-hidden p-0 h-full">
                <div className="relative h-56 w-full sm:h-64">
                  <Image
                    src={img.src}
                    alt={img.title}
                    fill
                    sizes="(min-inline-size: 1024px) 33vw, (min-inline-size: 640px) 50vw, 100vw"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-4 sm:p-5">
                  <h3 className="text-sm font-semibold text-brand-charcoal sm:text-base">{img.title}</h3>
                  <p className="mt-1 text-xs text-slate-600 sm:text-sm">
                    {img.description} – styled by the Selena&apos;s team.
                  </p>
                  <span className="mt-3 inline-block text-xs font-medium text-brand-olive sm:text-sm">
                    View details →
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
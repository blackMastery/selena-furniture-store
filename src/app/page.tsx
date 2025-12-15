'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {

  return (
    <div className="min-h-screen bg-brand-sand">
      {/* Hero */}
      <section className="bg-brand-cream">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-4 py-16 md:flex-row md:py-20">
          <div className="w-full md:w-1/2">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-brand-olive">
              Handcrafted in Guyana
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl">
              Furniture for a warm, natural home.
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-700 md:text-lg">
              Selena&apos;s Furniture Store Guyana offers thoughtfully made beds, sofas, storage, and
              more—designed for comfort, durability, and everyday living.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/gallery" className="btn-primary w-full sm:w-auto">
                Explore the collection
              </Link>
              <Link href="/services" className="btn-secondary w-full sm:w-auto">
                Free room planning
              </Link>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white">
              <Image
                src="/window.svg"
                alt="Warm living room furniture vignette"
                width={900}
                height={700}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h2 className="text-3xl md:text-4xl">Rooms we love to furnish.</h2>
              <p className="mt-2 max-w-xl text-sm text-slate-600 md:text-base">
                Build a cohesive look across your home with pieces that share the same warm palette, simple
                silhouettes, and thoughtful details.
              </p>
            </div>
            <Link href="/contact" className="text-sm font-medium text-brand-olive underline-offset-4 hover:underline">
              Talk with a design expert
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'Bedroom',
                body: 'Beds, nightstands, and storage that create a restful retreat.',
                href: '/gallery',
              },
              {
                title: 'Living',
                body: 'Sofas, chairs, and tables for everyday gatherings and quiet evenings.',
                href: '/gallery',
              },
              {
                title: 'Dining',
                body: 'Tables and seating that make every meal feel like an occasion.',
                href: '/gallery',
              },
            ].map((item) => (
              <Link key={item.title} href={item.href} className="card-elevated">
                <h3 className="text-lg font-semibold text-brand-charcoal">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.body}</p>
                <span className="mt-4 inline-block text-sm font-medium text-brand-olive">
                  View inspiration →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* The Difference band */}
      <section className="border-y border-slate-200 bg-white py-14">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-olive">
                The Selena&apos;s Difference
              </p>
              <h2 className="mt-3 text-2xl md:text-3xl">Considered pieces. Honest pricing.</h2>
            </div>
            <div className="space-y-4 text-sm text-slate-700">
              <p>
                Every item we carry is selected for strength, comfort, and timeless appeal—so you can invest
                once and enjoy it for years.
              </p>
              <p>
                We keep our pricing straightforward, with options for homes of all sizes across Guyana.
              </p>
            </div>
            <div className="space-y-3 text-sm text-slate-700">
              <p>• Locally run showroom with real-world experience.</p>
              <p>• Delivery and setup for a seamless move-in.</p>
              <p>• Guidance on fabrics, finishes, and room layout.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
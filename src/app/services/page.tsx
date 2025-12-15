import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Services | Selena's Furniture Store Guyana",
  description:
    "Explore services from Selena's Furniture Store Guyana, including furniture selection support, delivery & in-home setup, and custom considerations for your space.",
  openGraph: {
    title: "Services | Selena's Furniture Store Guyana",
    description:
      "From furniture selection to delivery and setup, Selena's Furniture Store supports you at every step of furnishing your home in Guyana.",
    url: '/services',
    type: 'website',
  },
  alternates: {
    canonical: '/services',
  },
};

export default function Services() {
  return (
    <div className="bg-brand-cream py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        {/* Hero */}
        <div className="max-w-3xl text-center md:text-left">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand-olive">
            Services
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl">Support at every step of furnishing your home.</h1>
          <p className="mt-4 text-base leading-relaxed text-slate-700 md:text-lg">
            From first measurements to final styling, our team is here to help you make thoughtful decisions—
            without the pressure.
          </p>
        </div>

        {/* Services grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="card-elevated bg-white">
            <h2 className="text-lg font-semibold text-brand-charcoal">Furniture selection</h2>
            <p className="mt-3 text-sm text-slate-700">
              Explore a curated mix of bedroom, living, and dining pieces with guidance on sizing and finishes
              that fit your space.
            </p>
          </div>

          <div className="card-elevated bg-white">
            <h2 className="text-lg font-semibold text-brand-charcoal">Delivery & setup</h2>
            <p className="mt-3 text-sm text-slate-700">
              We coordinate delivery across Georgetown and surrounding areas, including careful in-home setup
              so everything lands exactly where it should.
            </p>
          </div>

          <div className="card-elevated bg-white">
            <h2 className="text-lg font-semibold text-brand-charcoal">Custom considerations</h2>
            <p className="mt-3 text-sm text-slate-700">
              Have specific measurements or a special request? Talk with us about options tailored to your
              layout and lifestyle.
            </p>
          </div>
        </div>

        {/* Design services style callout */}
        <div className="mt-14 rounded-3xl bg-brand-sand px-6 py-8 md:px-10 md:py-10">
          <div className="grid gap-6 md:grid-cols-[minmax(0,2fr)_minmax(0,1.3fr)] md:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-olive">
                Complimentary design support
              </p>
              <h2 className="mt-3 text-2xl md:text-3xl">Need a second set of eyes on your space?</h2>
              <p className="mt-3 text-sm text-slate-700 md:text-base">
                Share a few photos, room measurements, or inspiration, and we&apos;ll help you put together a
                simple plan—from anchor pieces to finishing touches.
              </p>
            </div>
            <div className="space-y-3 text-sm text-slate-700">
              <p>• One-on-one guidance in-store or over the phone.</p>
              <p>• Suggestions tailored to your budget and timeline.</p>
              <p>• Clear next steps so you know exactly what to order.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
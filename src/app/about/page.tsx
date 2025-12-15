export const metadata = {
  title: 'About - Selena\'s Furniture Store Guyana',
  description: 'Learn about Selena\'s Furniture Store, your trusted source for affordable furniture in Georgetown, Guyana.',
};

export default function About() {
  return (
    <div className="bg-brand-sand py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        {/* Hero */}
        <div className="max-w-3xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand-olive">
            About Selena&apos;s
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl">A neighborhood furniture store with a modern perspective.</h1>
          <p className="mt-4 text-base leading-relaxed text-slate-700 md:text-lg">
            At Selena&apos;s Furniture Store Guyana, we believe every home deserves thoughtful, comfortable
            pieces—no matter the square footage or budget. From first apartments to family homes, we&apos;re
            here to help you furnish well.
          </p>
        </div>

        {/* Story + Values */}
        <div className="mt-12 grid gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,1.4fr)]">
          <div className="space-y-6 text-sm leading-relaxed text-slate-700 md:text-base">
            <p>
              What started as a small shop serving friends and family has grown into a trusted destination
              for quality furniture across Georgetown and beyond. We focus on pieces that feel grounded,
              inviting, and easy to live with—because furniture should work just as hard as you do.
            </p>
            <p>
              Our team carefully selects beds, sofas, storage, and accent pieces that balance comfort and
              durability. We pay attention to how things feel, how they age, and how they fit into the way
              you actually use your home.
            </p>
            <p>
              Whether you&apos;re refreshing a single room or starting from scratch, we offer guidance to
              help you make confident choices without the overwhelm.
            </p>
          </div>

          <div className="card-elevated bg-white">
            <h2 className="text-xl font-semibold text-brand-charcoal">Our commitments</h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-700">
              <li>• Honest, approachable pricing.</li>
              <li>• Reliable delivery and in-home setup across key regions.</li>
              <li>• Practical advice on layout, sizing, and finishes.</li>
              <li>• A curated assortment that favors lasting style over trends.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
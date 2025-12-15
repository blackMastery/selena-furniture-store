import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact | Selena's Furniture Store Guyana",
  description:
    "Contact Selena's Furniture Store in Lagrange, West Bank Demerara, Guyana for furniture inquiries, delivery details, and room planning support.",
  openGraph: {
    title: "Contact | Selena's Furniture Store Guyana",
    description:
      "Reach Selena's Furniture Store in Guyana by phone, email, WhatsApp, or Facebook to discuss products, availability, and delivery.",
    url: '/contact',
    type: 'website',
  },
  alternates: {
    canonical: '/contact',
  },
};

export default function Contact() {
  return (
    <div className="bg-brand-cream py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-3xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand-olive">
            Contact
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl">We&apos;re here to help you furnish well.</h1>
          <p className="mt-4 text-base leading-relaxed text-slate-700 md:text-lg">
            Reach out with questions about products, availability, delivery, or putting a room together—we&apos;re
            glad to talk through the details.
          </p>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)]">
          <div className="space-y-4 text-sm text-slate-700 md:text-base">
            <h2 className="text-xl font-semibold text-brand-charcoal">Visit or call us</h2>
            <p>We&apos;d love to hear from you.</p>
            <p>
              <span className="font-semibold">Address:</span> Lot 52, Lagrange, West Bank Demerara, Guyana
            </p>
            <p>
              <span className="font-semibold">Phone:</span> +592 681 7995
            </p>
            <p>
              <span className="font-semibold">Email:</span> nathaneelbb@gmail.com
            </p>

            <div className="mt-6 space-y-1 text-sm text-slate-700">
              <h3 className="text-sm font-semibold text-brand-charcoal">Hours</h3>
              <p>Monday – Saturday: 10am – 6pm</p>
              <p>Sunday: 12pm – 5pm</p>
            </div>

            <div className="mt-8">
              <h3 className="text-sm font-semibold text-brand-charcoal">Find us</h3>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.123456789!2d-58.123456789!3d6.7890123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNDMnMTguNCJOIPNkwNzcnMjAuNSJX!5e0!3m2!1sen!2sgy!4v1234567890"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          <div className="rounded-3xl bg-white p-6 shadow-sm lg:p-8">
            <h2 className="text-lg font-semibold text-brand-charcoal">Message us directly</h2>
            <p className="mt-2 text-sm text-slate-600">
              The fastest way to reach us is by WhatsApp or Facebook. Tap below to start a conversation.
            </p>
            <div className="mt-6 space-y-3">
              <a
                href="https://wa.me/5926817995"
                target="_blank"
                rel="noreferrer"
                className="btn-primary flex w-full justify-center text-sm"
              >
                Chat on WhatsApp (+592 681 7995)
              </a>
              <a
                href="https://www.facebook.com/neilbestfurniture"
                target="_blank"
                rel="noreferrer"
                className="btn-secondary flex w-full justify-center text-sm"
              >
                Message us on Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
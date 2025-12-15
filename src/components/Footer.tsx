'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand / story */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.jpg"
                alt="Selena's Furniture Store Logo"
                width={40}
                height={40}
                className="rounded-full object-cover"
              />
              <div>
                <h3 className="text-sm font-semibold tracking-wide text-brand-charcoal">
                  Selena&apos;s Furniture Store Guyana
                </h3>
                <p className="text-xs text-slate-500">Handcrafted, thoughtfully sourced pieces.</p>
              </div>
            </div>
            <p className="text-sm text-slate-600">
              We curate durable, comfortable furniture and decor to make every room in your home feel warm,
              grounded, and personal.
            </p>
          </div>

          {/* Helpful links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Helpful Links
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>
                <Link href="/about" className="hover:text-brand-olive">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-brand-olive">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-brand-olive">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand-olive">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* The Difference */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              The Difference
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>Locally crafted pieces</li>
              <li>Thoughtful materials & finishes</li>
              <li>Guided design support</li>
              <li>Furniture built to last</li>
            </ul>
          </div>

          {/* Direct contact + social */}
          <div className="space-y-4">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Stay in Touch
              </h4>
              <p className="mt-3 text-sm text-slate-600">
                Reach out on WhatsApp or follow us on Facebook for new arrivals and styling ideas.
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
                <a
                  href="https://www.facebook.com/neilbestfurniture"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary w-full justify-center text-xs sm:text-sm"
                >
                  Visit Facebook
                </a>
              </div>
            </div>
            <div className="space-y-1 text-sm text-slate-600">
              <p>Lot 52, Lagrange, West Bank Demerara, Guyana</p>
              <p>+592 681 7995</p>
              <p>nathaneelbb@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-6 text-xs text-slate-500 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Selena&apos;s Furniture Store Guyana. All rights reserved.</p>
          <div className="flex gap-4">
            <button type="button" className="hover:text-brand-olive">
              Privacy
            </button>
            <button type="button" className="hover:text-brand-olive">
              Terms
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
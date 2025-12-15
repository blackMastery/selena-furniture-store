'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ['Home', 'About', 'Services', 'Gallery', 'Contact'];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      {/* Promo / identity strip */}
      <div className="border-b border-slate-200 bg-brand-cream">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-xs sm:text-sm text-slate-700">
          <span className="uppercase tracking-[0.15em] text-slate-600">
            Selena&apos;s Furniture Store Guyana
          </span>
          <span className="hidden sm:inline text-slate-500">
            Handcrafted, sustainable furniture for every room.
          </span>
        </div>
      </div>

      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.jpg"
            alt="Selena's Furniture Store Logo"
            width={44}
            height={44}
            className="rounded-full object-cover"
            priority
          />
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-wide text-brand-charcoal">
              Selena&apos;s Furniture
            </span>
            <span className="text-xs text-slate-500">Lagrange, West Bank Demerara</span>
          </div>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => {
            const href = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
            return (
              <Link
                key={item}
                href={href}
                className="text-sm font-medium text-slate-700 transition-colors hover:text-brand-olive"
              >
                {item}
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link href="/contact" className="btn-secondary text-xs sm:text-sm">
            Free design chat
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center justify-center rounded-full border border-slate-300 p-2 text-slate-700 md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile nav panel */}
      {isOpen && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3">
            {navItems.map((item) => {
              const href = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
              return (
                <Link
                  key={item}
                  href={href}
                  className="rounded-full px-3 py-2 text-sm font-medium text-slate-700 hover:bg-brand-cream hover:text-brand-olive"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="btn-primary mt-2 w-full justify-center text-sm"
              onClick={() => setIsOpen(false)}
            >
              Free design chat
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
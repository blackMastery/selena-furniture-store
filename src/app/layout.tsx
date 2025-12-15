import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://selena-furniture-store.vercel.app'),
  title:
    "Selena's Furniture Store Guyana | Handcrafted Beds, Sofas & Home Furniture in Lagrange, West Bank Demerara",
  description:
    "Selena's Furniture Store in Lagrange, West Bank Demerara offers thoughtfully made beds, sofas, storage and more—handcrafted for warm, comfortable homes across Guyana.",
  openGraph: {
    title: "Selena's Furniture Store Guyana | Handcrafted Home Furniture",
    description:
      "Explore beds, sofas, storage and dining furniture handcrafted for warm, natural homes across Guyana.",
    url: '/',
    siteName: "Selena's Furniture Store Guyana",
    type: 'website',
    locale: 'en_GY',
    images: [
      {
        url: '/logo.jpg',
        width: 1200,
        height: 630,
        alt: "Selena's Furniture Store Guyana logo",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Selena's Furniture Store Guyana | Handcrafted Home Furniture",
    description:
      "Handcrafted, sustainable furniture for every room. Beds, sofas, storage and more in Lagrange, West Bank Demerara, Guyana.",
    images: ['/logo.jpg'],
  },
  alternates: {
    canonical: '/',
  },
  keywords: [
    "Selena's Furniture Store",
    'furniture Guyana',
    'Lagrange furniture store',
    'beds Georgetown Guyana',
    'living room furniture Guyana',
    'dining tables Guyana',
    'home furniture West Bank Demerara',
  ],
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/logo.jpg',
    shortcut: '/logo.jpg',
    apple: '/logo.jpg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} font-sans`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Selena\'s Furniture Store Guyana - Affordable Household Furniture in Guyana',
  description: 'Selena\'s Furniture Store: Easy, simple, and affordable household furniture in Georgetown, Guyana. Beds, sofas, and more.',
  openGraph: {
    title: 'Selena\'s Furniture Store Guyana',
    description: 'Quality furniture for your home in Guyana.',
    images: ['/og-image.jpg'], // Add an OG image
    url: 'https://neilbestfurniture.com',
    type: 'website',
  },
  keywords: ['furniture guyana', 'beds georgetown', 'affordable furniture'],
  robots: 'index, follow',
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
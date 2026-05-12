import type { Metadata, Viewport } from "next";
import { Inter, Cormorant_Garamond, Noto_Sans_Ethiopic } from 'next/font/google';
import "./globals.css";

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({ 
  subsets: ['latin'], 
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});

const ethiopic = Noto_Sans_Ethiopic({ 
  subsets: ['ethiopic'], 
  variable: '--font-ethiopic',
  display: 'swap',
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#CB410B",
};

export const metadata: Metadata = {
  title: "Gursha Kitchen | Authentic Ethiopian Luxury Dining",
  description: "Experience the soul of Ethiopia opposite Hyatt Regency, Addis Ababa. Premium dining and hospitality.",
  keywords: ["Ethiopian Cuisine", "Gursha Kitchen", "Addis Ababa Restaurant", "Hyatt Regency Addis Ababa", "Luxury Dining"],
  authors: [{ name: "Gursha Kitchen Team" }],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${inter.variable} ${cormorant.variable} ${ethiopic.variable}`}>
        {children}
      </body>
    </html>
  );
}

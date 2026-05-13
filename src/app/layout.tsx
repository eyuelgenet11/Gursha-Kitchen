import type { Metadata, Viewport } from "next";
import { Bebas_Neue } from 'next/font/google';
import "./globals.css";

const bebas = Bebas_Neue({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-bebas',
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={bebas.variable}>
        {children}
      </body>
    </html>
  );
}

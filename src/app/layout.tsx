import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import StructuredData from "@/components/structured-data";

const inter = Inter({ subsets: ["latin"] });

import { Analytics } from '@vercel/analytics/react';

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export const metadata: Metadata = {
  title: {
    template: "%s | Sushmitha",
    default: " Sushmitha | BI & Data Analyst",
  },
  description:
    "Senior Business Intelligence Analyst | Data Storytelling | Power BI | SQL | Tableau | Python",
  icons: {
    icon: '/headshot/sushmitha.jpg',
    apple: '/headshot/sushmitha.jpg',
  },
  openGraph: {
    type: 'website',
    title: 'Sushmitha - Business Intelligence and Data Analyst',
    description: 'Business Intelligence Analyst | Power BI, SQL, Python | Helping companies turn raw data into strategic insights and decisions',
    images: [{
      url: '/headshot/preview.png',
      width: 400,
      height: 400,
      alt: 'Sushmitha - Portfolio Hero Section'
    }]
  },
  twitter: {
    card: 'summary',
    title: 'Sushmitha - Business Intelligence and Data Analyst',
    description: 'Business Intelligence Analyst | Power BI, SQL, Python | Helping companies turn raw data into strategic insights and decisions',
    images: ['/headshot/preview.png']
  },
  keywords: [
    "Business Intelligence",
    "Data Analytics",
    "Data Visualization",
    "Data Engineering",
    "Data Warehousing",
    "Data Modeling",
    "Data Integration",
    "Data Governance",
    "Cloud Architecture",
    "Data Science",
    "Python",
    "SQL",
    "Tableau",
    "Power BI",
    "Looker",
    "Data Science",
    "Data Engineering",
    "Data Warehousing",
    "Data Modeling",
    "Data Integration",
    "Data Governance",
    "Statistical Modeling",
    "Clustering & Dimensionality Reduction",
    "Innovation & Cloud Computing",
    "Cloud Computing",
    "Cloud Architecture"
  ],
  authors: [{ name: "Sushmitha" }],
  creator: "Sushmitha",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <div className="relative min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow container mx-auto px-4 pt-16 pb-8">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
        <StructuredData type="both" />
        <Analytics />
      </body>
    </html>
  );
}

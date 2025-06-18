import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sushmitha Birudala - Business Intelligence and Data Analyst",
  description:
    "Portfolio of Sushmitha Birudala, a Business Intelligence and Data Analyst.",
  openGraph: {
    type: 'website',
    title: 'Sushmitha Birudala - Business Intelligence and Data Analyst',
    description: 'Portfolio of Sushmitha Birudala, a Business Intelligence and Data Analyst.',
    images: [{
      url: '/screenshots/hero-preview.png',
      width: 1200,
      height: 630,
      alt: 'Sushmitha Birudala - Portfolio Hero Section'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sushmitha Birudala - Business Intelligence and Data Analyst',
    description: 'Portfolio of Sushmitha Birudala, a Business Intelligence and Data Analyst.',
    images: ['/screenshots/hero-preview.png']
  }
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <About />
      <FeaturedProjects />
    </main>
  );
}

import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sushmitha - Business Intelligence and Data Analyst",
  description:
    "Portfolio of Sushmitha, a Business Intelligence and Data Analyst.",
  openGraph: {
    type: 'website',
    title: 'Sushmitha - Business Intelligence and Data Analyst',
    description: 'Portfolio of Sushmitha, a Business Intelligence and Data Analyst.',
    images: [{
      url: '/headshot/preview.png',
      width: 1200,
      height: 630,
      alt: 'Sushmitha - Portfolio Hero Section'
    }]
  },
  twitter: {
    card: 'summary',
    title: 'Sushmitha - Business Intelligence and Data Analyst',
    description: 'Portfolio of Sushmitha, a Business Intelligence and Data Analyst.',
    images: ['/headshot/preview.png']
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

import { Metadata } from "next";
import { AboutDetail } from "@/components/sections/about-detail";

export const metadata: Metadata = {
  title: "About - Sushmitha Birudala | Business Intelligence and Data Analyst",
  description:
    "Learn more about Sushmitha Birudala, a Business Intelligence and Data Analyst.",
};

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <AboutDetail />
    </main>
  );
}

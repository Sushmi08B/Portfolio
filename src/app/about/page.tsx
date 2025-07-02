import { Metadata } from "next";
import { AboutDetail } from "@/components/sections/about-detail";

export const metadata: Metadata = {
  title: "About - Sushmitha | Data and Business Intelligence Analyst",
  description:
    "Learn more about Sushmitha, a Data and Business Intelligence Analyst.",
};

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <AboutDetail />
    </main>
  );
}

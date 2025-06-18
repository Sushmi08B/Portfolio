import { Metadata } from "next";
import { ProjectGrid } from "@/components/projects/project-grid";
import { projectsData } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects - Sushmitha Birudala",
  description:
    "Explore my portfolio of projects in machine learning and AI, cloud architecture, and web development.",
};

export default function ProjectsPage() {
  return (
    <div className="container py-12">
      <div className="space-y-6 pl-4">
        <h1 className="font-heading text-4xl font-bold md:text-6xl">
        Projects
        </h1>
        <p className="text-xl text-muted-foreground">
          A collection of projects showcasing my work in Business Intelligence and Data Analytics These projects reflect my passion for transforming data into actionable insights and building scalable solutions. From end-to-end analytics pipelines to interactive dashboards, each project showcases my commitment to quality, innovation, and measurable impact..
        </p>
      </div>
      <div className="mt-16 pl-4">
        <ProjectGrid projects={projectsData} />
      </div>
    </div>
  );
}

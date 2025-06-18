export function generatePersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Sushmitha Birudala",
    url: "https://sushmithabirudala.vercel.app/",
    jobTitle: "Business Intelligence and Data Analyst",
    description:
      "Business Intelligence and Data Analyst",
    sameAs: [],
    knowsAbout: [
      "Business Intelligence",
      "Data Analytics",
      "Data Visualization",
      "Data Engineering",
      "Data Science",
      "Data Warehousing",
      "Data Modeling",
      "Data Integration",
      "Data Governance",
      "Python Development",
      "SQL Development",
      "Power BI Development",
      "Tableau Development",
      "Looker Development",
      "Statistical Modeling",
      "Clustering & Dimensionality Reduction",
      "Innovation & Cloud Computing", 
      "Data Science",
      "Data Engineering",
      "Data Warehousing",
      "Data Modeling",
      "Data Integration",
      "Data Governance",
    ],
  };
}

export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Sushmitha Birudala - Portfolio",
    url: "https://sushmithabirudala.vercel.app/",
    description:
      "Personal portfolio of Sushmitha Birudala, Business Intelligence and Data Analyst.",
    author: {
      "@type": "Person",
      name: "Sushmitha Birudala",
    },
  };
}

interface StructuredDataProps {
  type: "person" | "website" | "both";
}

export default function StructuredData({ type }: StructuredDataProps) {
  const schemas = [];

  if (type === "person" || type === "both") {
    schemas.push(generatePersonSchema());
  }

  if (type === "website" || type === "both") {
    schemas.push(generateWebsiteSchema());
  }

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}

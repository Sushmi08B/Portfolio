export function generatePersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Sushmitha",
    url: "https://bsushmitha.vercel.app/",
    jobTitle: "Business Intelligence and Data Analyst",
    description:
      "Proficient in Python, SQL, and Apache Spark, with expertise in data structures, algorithms, cloud technologies, \
      and machine learning. Dedicated to building scalable applications, optimizingdata pipelines, and delivering impactful \
      insights. Eager to contribute, learn, and prove my skills in dynamic environments while solving real-world challenges.",
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
    name: "Sushmitha - Portfolio",
    url: "https://bsushmitha.vercel.app/",
    description:
      "Personal portfolio of Sushmitha, Business Intelligence and Data Analyst.",
    author: {
      "@type": "Person",
      name: "Sushmitha",
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

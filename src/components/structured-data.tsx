export function generatePersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Sushmitha Birudala",
    url: "https://bjornmelin.com",
    jobTitle: "Senior Data Scientist & Cloud Solutions Architect",
    description:
      "Senior Data Scientist and Cloud Solutions Architect specializing in neuro-symbolic AI, deep learning, and MLOps. AWS Machine Learning Engineer and 6x AWS Certified professional with expertise in cloud architecture, AI engineering, and modern development practices.",
    sameAs: [
      "https://github.com/bjornmelin",
      "https://linkedin.com/in/bjornmelin",
      "https://orcid.org/0000-0003-3891-5522",
      "https://www.coursera.org/learner/bjorn-melin",
    ],
    knowsAbout: [
      "Neuro-symbolic AI",
      "Deep Learning",
      "Reinforcement Learning",
      "Machine Learning Engineering",
      "AWS Cloud Architecture",
      "Serverless Computing",
      "MLOps",
      "Data Science",
      "Full Stack Development",
      "Python Development",
      "TensorFlow & PyTorch",
      "LangChain & Vector Databases",
      "CI/CD & Infrastructure as Code",
      "Kubernetes & Docker",
      "Next.js & React Development",
      "Node.js Development",
      "Statistical Modeling",
      "Clustering & Dimensionality Reduction",
      "Innovation & Cloud Computing",
    ],
  };
}

export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Sushmitha Birudala - Portfolio",
    url: "https://bjornmelin.com",
    description:
      "Personal portfolio of Sushmitha Birudala, Senior Data Scientist and AWS Machine Learning Engineer specializing in neuro-symbolic AI, deep learning, and cloud architecture.",
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

import { type Metadata } from 'next';

interface GenerateMetadataProps {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
}

export function generateMetadata({
  title,
  description,
  path = '',
  image,
}: GenerateMetadataProps): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://bsushmitha.vercel.app/'; // Update if using a custom domain
  const fullTitle = title ? `${title} | Sushmitha` : 'Sushmitha - Senior BI & Data Analyst';

  return {
    title: fullTitle,
    description:
      description ||
      'Senior Business Intelligence Analyst with expertise in Power BI, SQL, Python, and Data Storytelling. Helping companies unlock insights and drive decisions through impactful dashboards and analytics.',
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: `${baseUrl}${path}`,
    },
    openGraph: {
      title: fullTitle,
      description:
        description ||
        'Explore the portfolio of Sushmitha — Senior BI Analyst skilled in Power BI, SQL, Python, and advanced data visualization techniques.',
      url: `${baseUrl}${path}`,
      siteName: 'Sushmitha',
      type: 'website',
      ...(image && { images: [{ url: image }] }),
    },
    twitter: {
      card: 'summary',
      title: fullTitle,
      description:
        description ||
        'BI Portfolio | Power BI • SQL • Python • Data Storytelling',
      ...(image && { images: [image] }),
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}
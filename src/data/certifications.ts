export interface EarlyAdopterBadge {
  name: string;
  image: string;
  link: string;
  issuedDate: string;
}

export interface Certification {
  name: string;
  image: string;
  link: string;
  issuedBy: string;
  issuedDate: string;
  earlyAdopterBadge?: EarlyAdopterBadge;
}

export const certifications: Certification[] = [
  {
    name: "AWS Cloud Practitioner",
    image: "/certifications/aws-cp.png",
    link: "https://www.credly.com/badges/80883f97-e12d-4b5f-8502-ec75b6e1e3",
    issuedBy: "Amazon Web Services",
    issuedDate: "2025",
  },
  {
    "name": "Google Data Analytics Certificate",
    "issuedBy": "Coursera | Google",
    "issuedDate": "2025",
    "image": "/certifications/google-da.png",
    "link": "https://www.coursera.org/professional-certificates/google-data-analytics"
  },
  {
    "name": "Lean Six Sigma Yellow Belt",
    "issuedBy": "GoLeanSixSigma",
    "issuedDate": "2025",
    "image": "/certifications/yellow.png",
    "link": "https://goleansixsigma.com/free-lean-six-sigma-yellow-belt-training/"
  },
  {
    "name": "Lean Six Sigma White Belt",
    "issuedBy": "GoLeanSixSigma",
    "issuedDate": "2025",
    "image": "/certifications/white.png",
    "link": "https://goleansixsigma.com/free-lean-six-sigma-yellow-belt-training/"
  },
  {
    "name": "Microsoft Power BI Data Analyst Associate (PL-300)",
    "issuedBy": "Microsoft",
    "issuedDate": "2025",
    "image": "/certifications/da.png",
    "link": "https://learn.microsoft.com/en-us/certifications/power-bi-data-analyst-associate/"
  }
];

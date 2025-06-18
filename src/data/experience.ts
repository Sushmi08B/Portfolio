export interface Achievement {
  text: string;
}

export interface Skill {
  name: string;
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  isRemote?: boolean;
  achievements: Achievement[];
  skills: Skill[];
}

export const experiences: Experience[] = [
  {
    title: "Orientation Intern",
    company: "Northern Illinois University",
    location: "Dekalb, IL",
    startDate: "May 2024",
    endDate: "Aug 2024",
    achievements: [
      { text: "Assisted in organizing and managing orientation programs for over 100 incoming students." },
      { text: "Provided guidance and resolved queries related to campus policies, services, and academic resources." },
      { text: "Conducted presentations, tours, and support sessions to help new students integrate into campus life." },
      { text: "Coordinated with multiple departments to schedule events and workshops." },
      { text: "Created and distributed onboarding materials to enhance resource accessibility." },
      { text: "Managed event logistics, schedules, and communications for seamless operations." },
      { text: "Helped build a welcoming and inclusive environment, leaving a strong first impression on students." }
    ],
    skills: [
      { name: "Stakeholder Communication" },
      { name: "Event Management" },
      { name: "Scheduling" },
      { name: "Documentation" },
      { name: "Presentation Skills" },
      { name: "Team Coordination" }
    ]
  },
  {
    title: "Graduate Assistant",
    company: "Northern Illinois University",
    location: "Dekalb, IL",
    startDate: "Jan 2024",
    endDate: "May 2024",
    achievements: [
      { text: "Supported academic instruction by grading, preparing materials, and occasionally leading discussions or labs." },
      { text: "Collaborated with faculty on data collection and analysis for ongoing research projects." },
      { text: "Compiled reports and organized departmental data for presentations and decision-making support." },
      { text: "Performed administrative tasks including recordkeeping, scheduling, and event coordination." }
    ],
    skills: [
      { name: "Data Analysis" },
      { name: "Academic Research" },
      { name: "Excel" },
      { name: "Time Management" },
      { name: "Communication" },
      { name: "Report Writing" }
    ]
  },
  {
    title: "Data Analyst",
    company: "Walmart",
    location: "Chennai, India",
    startDate: "Jul 2021",
    endDate: "Jul 2023",
    achievements: [
      { text: "Developed and maintained dashboards in Power BI to track compliance KPIs across teams, enabling real-time visibility." },
      { text: "Built automated SQL pipelines to clean and transform raw data from GCP into structured reporting tables." },
      { text: "Performed data validation, cleansing, and analysis to ensure accuracy in reporting for compliance audits." },
      { text: "Collaborated with cross-functional teams to identify key data metrics and built visual reports consumed by 20+ stakeholders." },
      { text: "Used Airflow to schedule and monitor ETL workflows, reducing manual intervention and improving reliability." },
      { text: "Authored Confluence documentation and SOPs to support internal knowledge sharing and onboarding." }
    ],
    skills: [
      { name: "Power BI" },
      { name: "SQL" },
      { name: "Airflow" },
      { name: "Data Cleaning" },
      { name: "Data Visualization" },
      { name: "Data Analysis" },
      { name: "GCP" },
      { name: "Business Intelligence" },
      { name: "ETL" }
    ]
  }
];

export const previousExperiences: Experience[] = [];
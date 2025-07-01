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
    title: "Business Data Analyst",
    company: "Caterpillar",
    location: "Chicago, IL",
    startDate: "June 2024",
    endDate: "May 2025",
    achievements: [
      { text: "Partnered with product and marketing stakeholders to gather reporting requirements and define KPIs aligned with business objectives." },
      { text: "Designed and deployed automated dashboards (Yearly, Quarterly, Monthly, Weekly) using Power BI." },
      { text: "Authored complex SQL transformations and built DAX-based measures and computed tables for dynamic, filter-responsive visuals." },
      { text: "Led customer cohort and campaign performance analyses, improving retention tracking accuracy by 25% through segmentation and behavioral insights." },
      { text: "Collaborated with data engineers to validate and ingest raw event data into BI pipelines, improving reporting SLA compliance by 15%." },
      { text: "Implemented data refresh schedules, row-level security, and access controls in Power BI Service to ensure secure, timely data access across business units." },
      { text: "Delivered ad hoc analytical reports using Power BI and SQL Server, supporting senior leadership and cross-functional initiatives." },
      { text: "Conducted stakeholder walkthroughs and dashboard training sessions to promote self-service BI and data literacy across non-technical teams." },
      { text: "Created documentation of KPI definitions, data sources, and report logic to support BI governance and team onboarding." }
    ],
    skills: [
      { name: "Power BI" },
      { name: "SQL" },
      { name: "DAX" },
      { name: "KPI Development" },
      { name: "Data Modeling" },
      { name: "Business Intelligence" },
      { name: "Stakeholder Communication" },
      { name: "Dashboarding" },
      { name: "BI Governance" }
    ]
  },
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
      { text: "Handled teaching, research, and administration tasks, utilizing Excel for data management and contributing to efficient departmental operations." },
      { text: "Supported faculty by grading assignments, preparing instructional materials, and leading class discussions, which improved student engagement and enhanced my teaching skills." },
      { text: "Collaborated with professors on data collection and analysis, contributing to meaningful academic findings and enhancing research methodologies." },
      { text: "Coordinated logistics and maintained departmental records using productivity tools (Google Workspace, Microsoft Office)." },

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
    startDate: "Mar 2021",
    endDate: "Jul 2023",
    achievements: [
      { text: "Designed and maintained retail performance dashboards in Tableau, supporting over 50 business users across marketing, sales, and supply chain teams." },
      { text: "Extracted, cleaned, and analyzed over 10M+ monthly transactions using SQL and Python to uncover fraud indicators and inventory anomalies." },
      { text: "Partnered with data engineering to define robust data models and staging layers, improving report accuracy and reducing refresh failures by 20%." },
      { text: "Conducted stockout and overstock trend analysis, enabling inventory optimization and reducing waste by 12%." },
      { text: "Performed customer segmentation and behavioral analysis, identifying high-value cohorts and informing targeted retention strategies."},
      { text: "Collaborated with business stakeholders to track key metrics such as revenue per region, product conversion rates, and promotion impact." },
      { text: "Participated in regular data quality audits, resolving inconsistencies and improving trust in BI reporting." },
      { text: "Developed and maintained dashboards in Power BI to track compliance KPIs across teams, enabling real-time visibility." },
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
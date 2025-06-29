import {
  BarChart3,
  Database,
  Settings,
  Cloud,
  Cpu,
  Users,
  Wrench
} from "lucide-react";
import { ElementType } from "react";

export interface SkillCategory {
  name: string;
  Icon: ElementType;
  skills: string[];
  color: string;
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Business Intelligence Tools",
    Icon: BarChart3,
    color: "bg-white-500/10 text-green-600",
    skills: [
      "Power BI",
      "Tableau",
      "Excel (PivotTables, PowerQuery)",
      "Google Data Studio",
      "Looker"
    ],
  },
  {
    name: "Data & SQL",
    Icon: Database,
    color: "bg-green-500/10 text-green-600",
    skills: [
      "SQL",
      "PostgreSQL",
      "MySQL",
      "Snowflake",
      "SQL Server",
      "MongoDB",
      "Google BigQuery",
      "DAX",
      "M Query"
    ],
  },
  {
    name: "Automation & Scripting",
    Icon: Settings,
    color: "bg-green-500/10 text-green-600",
    skills: [
      "Python (Pandas, NumPy)",
      "R",
      "ETL Pipelines",
      "Apache Spark / PySpark",
      "Kafka",
      "Airflow",
      "dbt",
      "Jupyter Notebook",
      "Power Automate"
    ],
  },
  {
    name: "Cloud Platforms",
    Icon: Cloud,
    color: "bg-green-500/10 text-green-600",
    skills: [
      "Amazon Web Services (AWS)",
      "Google Cloud Platform (GCP)",
      "Microsoft Azure"
    ],
  },
  {
    name: "Data Science & Machine Learning",
    Icon: Cpu,
    color: "bg-green-500/10 text-green-600",
    skills: [
      "Scikit-learn",
      "TensorFlow",
      "Regression / Classification",
      "Decision Trees",
      "A/B Testing",
      "Time Series Forecasting",
      "NLP"
    ],
  },
  {
    name: "Tools & Collaboration",
    Icon: Wrench,
    color: "bg-green-500/10 text-green-600",
    skills: [
      "Git / GitHub",
      "Jira / Confluence",
      "Docker",
      "Jenkins",
      "Google Analytics",
      "Microsoft Visio",
      "APIs"
    ],
  },
  {
    name: "Soft Skills",
    Icon: Users,
    color: "bg-green-500/10 text-green-600",
    skills: [
      "Data Storytelling",
      "Stakeholder Communication",
      "Agile/Scrum",
      "Requirements Gathering",
      "Dashboard Design",
      "Cross-functional Collaboration"
    ],
  },
];
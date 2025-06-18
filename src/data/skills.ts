import { BarChart3, Database, Settings, Users } from "lucide-react";
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
      "Snowflake",
      "MySQL",
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
      "ETL Pipelines",
      "Jupyter Notebook",
      "Airflow",
      "dbt",
      "Power Automate"
    ],
  },
  {
    name: "Soft Skills & Collaboration",
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
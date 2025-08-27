import { Project } from "@/types/project";

export const projectsData: Project[] = [
  {
    id: "1",
    title: "Cyclistic Company Analysis",
    description:
      "A Tableau dashboard analyzing ride-sharing trends, customer segmentation, and seasonal usage patterns for Cyclistic Bike-Share. Insights guided targeted marketing strategies.",
    image: "/projects/cyclist copy.png",
    technologies: [
      "Tableau",
      "Data Visualization",
      "Data Cleaning",
      "Excel",
      "Business Analysis",
      "Time Series Analysis",
      "Segmentation"
    ],
    category: "Business Intelligence",
    links: {
      live: "https://public.tableau.com/app/profile/sushmitha.birudala/viz/CyclisticCompanyAnalysis_17497842812140/CyclisticCompanyAnalysis"
    },
    featured: true,
  },
  {
    id: "2",
    title: "NYC Yellow Taxi Data ETL Pipeline",
    description:
      "Built an end-to-end ETL pipeline using PySpark and PostgreSQL to process NYC Yellow Taxi trip data. Included schema validation, partitioned writes, and enriched features like trip duration.",
    image: "/projects/NYC_ETL.png",
    technologies: [
      "PySpark",
      "Airflow",
      "ETL",
      "PostgreSQL",
      "AWS S3",
      "Partitioning",
      "Schema Validation",
      "Feature Engineering",
      "Data Pipelines"
    ],
    category: "Data Engineering",
    links: {
      github: "https://github.com/Sushmi08B/NYC-YELLOWTAXI-DATA-ETL"
    },
    featured: true,
  },
  {
    id: "3",
    title: "Fake Tweet Detection using NLP",
    description:
      "Implemented a machine learning model to detect fake tweets using text classification, TF-IDF, CNN, hybrid CNN, Random Forest and logistic regression. Focused on misinformation detection in social media.",
    image: "/projects/FakeTweet.png",
    technologies: [
      "Python",
      "Natural Language Processing",
      "TF-IDF",
      "Logistic Regression",
      "Scikit-learn",
      "Text Preprocessing",
      "Exploratory Data Analysis"
    ],
    category: "Data Science & ML",
    links: {
      github: "https://github.com/Sushmi08B/Fake-Tweet-Detection"
    },
    featured: false,
  },

  {
    id: "4",
    title: "Customer Order Prediction",
    description:
      "Designed and implemented an end-to-end Data Engineering & Machine Learning pipeline on Azure using Synapse, ADLS Gen2, and Azure ML, with insights visualized in Tableau.",
    image: "/projects/customerPrediction.png",
    technologies: [
      "Python",
      "PySpark",
      "SQL",
      "Azure Synapse",
      "Azure Data Lake Storage",
      "Azure Machine Learning",
      "Tableau"
    ],
    category: "Data Science & ML",
    links: {
      github: "https://github.com/Sushmi08B/Customer-Order-Prediction-Analysis"
    },
    featured: false,
  },

  {
    id: "5",
    title: "Netflix Azure Data Engineering Project",
    description:
      "Developed a scalable data pipeline using Azure Data Factory, Blob Storage, and Databricks to process Netflix viewing activity logs. Loaded curated data into Azure SQL for BI reporting.",
    image: "/projects/azure_etl.png",
    technologies: [
      "Azure Data Factory",
      "Azure Blob Storage",
      "Azure Databricks",
      "PySpark",
      "Azure SQL",
      "Delta Lake",
      "Data Lake",
      "CI/CD"
    ],
    category: "Data Engineering",
    links: {
      github: "https://github.com/Sushmi08B/Netflix_Azure_DE_Project"
    },
    featured: true,
  },
  {
    id: "6",
    title: "Weather Data ETL Pipeline",
    description:
      "Designed an ETL workflow using Python and PostgreSQL to process daily weather data, including data cleaning, loading, and time-based aggregation.",
    image: "/projects/weather_etl.png",
    technologies: [
      "Python",
      "ETL",
      "PostgreSQL",
      "Pandas",
      "Datetime Handling",
      "Data Aggregation",
      "Matplotlib",
      "Data Formatting"
    ],
    category: "Data Engineering",
    links: {
      github: "https://github.com/Sushmi08B/Weather-ETL"
    },
    featured: false,
  },
  {
    id: "7",
    title: "Minnesota Traffic Analysis",
    description:
      "Visualized Minnesota traffic data to identify congestion hotspots, seasonal variations, and accident-prone zones using interactive Tableau dashboards.",
    image: "/projects/minnesota_trafic_analysis.png",
    technologies: [
      "Tableau",
      "Geospatial Analysis",
      "Heat Maps",
      "Time Filters",
      "Public Safety Data",
      "Storytelling"
    ],
    category: "Data Analysis",
    links: {
      live: "https://public.tableau.com/app/profile/sushmitha.birudala/viz/MinnesotaTrafic/Dashboard1"
    },
    featured: false,
  },
  {
    id: "8",
    title: "HR Data Dashboard",
    description:
      "Analyzed employee data to visualize hiring trends, attrition patterns, and department-wise distributions using Tableau dashboards.",
    image: "/projects/HR Data.png",
    technologies: [
      "Tableau",
      "Excel",
      "KPIs",
      "Dashboard Design",
      "Attrition Analysis",
      "Departmental Performance",
      "HR Analytics"
    ],
    category: "Business Intelligence",
    links: {
      live: "https://public.tableau.com/app/profile/sushmitha.birudala/viz/HRDataDashboard_17495632152790/Dashboard1"
    },
    featured: false,
  },
  {
    id: "9",
    title: "King County Housing Analysis",
    description:
      "Created a Tableau dashboard to analyze housing prices and trends in King County. Explored impact of variables like location, sqft, and condition on house prices.",
    image: "/projects/housing_data.png",
    technologies: [
      "Tableau",
      "EDA",
      "Real Estate Analytics",
      "Price Trends",
      "Categorical Filtering",
      "Heat Maps",
      "Histograms"
    ],
    category: "Data Analysis",
    links: {
      live: "https://public.tableau.com/app/profile/sushmitha.birudala/viz/KingCountyHousingAnalysis_17495605806570/KingCountyHouseSales"
    },
    featured: false,
  }
];
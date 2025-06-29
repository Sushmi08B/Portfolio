export interface Honor {
  name: string;
}

export interface Activity {
  name: string;
}

export interface Education {
  degree: string;
  school: string;
  location: string;
  startDate: string;
  endDate: string;
  gpa: string;
  honors: Honor[];
  activities: Activity[];
}

export const education: Education[] = [
  {
  degree: "Master of Science - MS, Computer Science",
  school: "Northern Illinois University",
  location: "DeKalb, Illinois, United States",
  startDate: "August 2023",
  endDate: "May 2025",
  gpa: "3.5",
  honors: [
    { name: "Graduate Assistant" },
    { name: "Orientation Intern" },
  ],
  activities: [
    { name: "Graduate Assistant - Data Analytics Lab" },
    { name: "Orientation Intern - NIU International Student Services" },
    { name: "NIU Data Science Club - Member" },
    { name: "AI & Machine Learning Reading Group - Participant" },
    { name: "Tableau & Power BI Workshops - Attendee" }
  ]
},
  {
  degree: "Bachelor of Technology - BTech, Electronics and Communication Engineering",
  school: "Sri Padmavathi Mahila Visvavidyalayam",
  location: "Tirupati, India",
  startDate: "August 2017",
  endDate: "May 2021",          
  gpa: "3.4",
  honors: [
    { name: "Top of the Class" },
    { name: "Academic Excellence Award" }
  ],
  activities: [
    { name: "IEEE - Member" },
    { name: "Tech Fest Volunteer" },
    { name: "Coding Competitions - Participant" }
  ]
}
];

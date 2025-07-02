
"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  BarChart3,
  Database,
  Code,
  Settings,
  GraduationCap,
  Award,
  Users,
  Pencil,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { certifications } from "@/data/certifications";
import { experiences } from "@/data/experience";
import { education } from "@/data/education";
import { hobbies } from "@/data/hobbies";
import { skillCategories } from "@/data/skills";

export function AboutDetail() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-background">
      <div className="container mx-auto px-4 py-24">

        {/* Profile Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-20">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-primary/10">
              <Image src="/headshot/sushmitha.jpg" alt="Sushmitha" fill sizes="192px" priority className="object-cover" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Sushmitha</h1>
              <p className="text-xl text-muted-foreground mb-4">
                 Data Analyst | Business Data Analyst | Business Intelligence Specialist
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="bg-primary/10"><Users className="w-3 h-3 mr-2" /> Data & BI Analysis</Badge>
                <Badge variant="outline" className="bg-primary/10"><BarChart3 className="w-3 h-3 mr-2" /> Data Visualization Expert</Badge>
                <Badge variant="outline" className="bg-primary/10"><Database className="w-3 h-3 mr-2" /> SQL Specialist</Badge>
                <Badge variant="outline" className="bg-primary/10"><Code className="w-3 h-3 mr-2" /> Data Storyteller</Badge>
                <Badge variant="outline" className="bg-primary/10"><Code className="w-3 h-3 mr-2" /> Dashboard Developer</Badge>
                <Badge variant="outline" className="bg-primary/10"><Settings className="w-3 h-3 mr-2" /> Reporting Automation</Badge>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Professional Summary */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="mb-20">
          <Card className="p-8 backdrop-blur-xl bg-card/50 border-primary/10">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <Users className="w-6 h-6 text-primary" />
              Professional Summary
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>I’m a  Data & Business Intelligence Analyst with over 4 years of experience helping companies unlock actionable insights through dashboards, SQL data models, and Python-based automation.</p>
              <p>Experience transforming raw data into actionable insights that support strategic decision-making.</p>
              <p>Strong foundation in data cleaning, exploratory data analysis (EDA), KPI development, and dashboard creation, optimizing reporting pipelines to designing executive dashboards across sales, operations, and finance departments.</p>
              <p>I hold a Master's in Computer Science and am passionate about data storytelling, stakeholder engagement, and driving real-world impact with clean, automated insights.</p>

            </div>
          </Card>
        </motion.div>

        {/* Skills Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="mb-20">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
            <Code className="w-8 h-8 text-primary" />
            Skills & Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((category) => (
              <Card key={category.name} className="p-6 backdrop-blur-xl bg-card/50 border-primary/10">
                <div className="flex items-center gap-3 mb-4">
                  <category.Icon className={`w-6 h-6 ${category.color}`} />
                  <h3 className="text-xl font-semibold">{category.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="outline" className={`${category.color}`}>{skill}</Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Work Experience */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="mb-20">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
            <BarChart3 className="w-8 h-8 text-primary" />
            Work Experience
          </h2>
          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <Card key={i} className="p-6 backdrop-blur-xl bg-card/50 border-primary/10">
                <div className="flex flex-col md:flex-row justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{experiences[i].title}</h3>
                    <p className="text-primary">{experiences[i].company}</p>
                    <p className="text-sm text-muted-foreground">{experiences[i].location}{experiences[i].isRemote ? " (Remote)" : ""}
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground">{experiences[i].startDate} - {experiences[i].endDate}</p>
                </div>
                <ul className="space-y-2 text-muted-foreground ml-4">{experiences[i].achievements.map((achievement, index) => (
                    <li key={index} className="flex">
                      <span className="mr-2">•</span>
                      <span className="flex-1">{achievement.text}</span>
                    </li>
                  ))}
                </ul>
                {experiences[i].skills.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {experiences[i].skills.map((skill, index) => (
                      <Badge key={index} variant="outline" className="bg-primary/5">
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                )}
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className="mb-20">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
            <Award className="w-8 h-8 text-primary" />
            Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <Card key={cert.name} className="p-6 backdrop-blur-xl bg-card/50 border-primary/10 hover:border-primary/30 transition-colors">
                <div className="flex items-start gap-4">
                  <Image src={cert.image} alt={cert.name} width={60} height={60} className="rounded-lg" />
                  <div>
                    <h3 className="font-semibold mb-1">{cert.name}</h3>
                    <p className="text-sm text-muted-foreground">{cert.issuedBy}</p>
                    <p className="text-sm text-muted-foreground">Issued: {cert.issuedDate}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Education */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }} className="mb-20">
          <Card className="p-8 backdrop-blur-xl bg-card/50 border-primary/10">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-primary" />
              Education
            </h2>
            <div className="space-y-6">
              {education.map((edu, idx) => (
                <div key={idx}>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                    <div>
                      <h3 className="font-semibold text-lg">{edu.degree}</h3>
                      <p className="text-muted-foreground">{edu.school}</p>
                    </div>
                    <div className="text-right mt-1 md:mt-0">
                      <p className="text-sm text-muted-foreground">{edu.startDate} - {edu.endDate}</p>
                      <p className="text-sm font-medium text-primary">GPA: {edu.gpa}</p>
                    </div>
                  </div>
                  <div className="mt-3">
                    {edu.honors.map((honor, index) => (
                      <Badge key={index} variant="outline" className={`bg-primary/5 mb-2 ${index > 0 ? "ml-2" : ""}`}>{honor.name}</Badge>
                    ))}
                  </div>
                  <div className="mt-4">
                    <p className="text-sm font-medium mb-2">Activities and Societies:</p>
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-2">
                      {edu.activities.map((activity, index) => (
                        <li key={index}>{activity.name}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Hobbies */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.6 }} className="mb-20">
          <Card className="p-8 backdrop-blur-xl bg-card/50 border-primary/10">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Pencil className="w-6 h-6 text-primary" />
              Hobbies & Interests
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {hobbies.map((hobby, index) => (
                <div key={index} className="space-y-2">
                  <Badge variant="outline" className="bg-primary/5 text-base py-2 px-3">
                    {hobby.emoji} {hobby.name}
                  </Badge>
                  <p className="text-sm text-muted-foreground pl-2">
                    {hobby.description}
                  </p>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Blog Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.7 }}>
          <Card className="p-8 backdrop-blur-xl bg-card/50 border-primary/10">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Pencil className="w-6 h-6 text-primary" />
              Blog & Writing
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I write about data storytelling, Power BI, and automation. Check out my insights on{" "}
                <a
                  href="https://medium.com/@sushmithareddybirudala"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline hover:text-primary/80 transition"
                >
                  Medium
                </a>.
              </p>
            </div>
          </Card>
        </motion.div>

      </div>
    </div>
  );
}

"use client";

import React from "react";
import Link from "next/link";
import { GraduationCap, Sparkles, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { skillCategories } from "@/data/skills";

export function About() {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-background via-primary/5 to-background">
      {/* Background Effects */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute right-0 top-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />
        <div className="absolute left-0 bottom-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -z-10" />
      </div>

      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20 relative">
          <Badge variant="outline" className="mb-4">
            <Sparkles className="w-3 h-3 mr-2 text-primary" />
            About Me
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            I don’t just analyze data — I interrogate it until it confesses
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Skilled Data and Business Analyst passionate about transforming data into actionable insights through dashboards, automation, and storytelling.
          </p>
        </div>

        {/* Main Content */}
        <div className="flex justify-center mb-16">
          {/* Professional Summary */}
          <Card className="max-w-xl w-full p-6 hover:shadow-md transition-shadow text-center">
            <div className="flex flex-col items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-primary/10">
          <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold">Background</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              I make data behave.
              With 4 years of experience as a Data & BI Analyst, I’ve wrestled with messy spreadsheets, tamed SQL queries, and turned chaotic datasets into sleek dashboards that actually make sense. Armed with data wizardry skills, I decode patterns, design KPIs, and deliver insights that make business teams say, “Whoa, we didn’t know that.” Whether it’s churn, campaigns, or customer chaos — I ask the right questions, let the data speak, and tell the story behind the numbers. Because numbers are cool 
            </p>
          </Card>
        </div>

        {/* CTA Button */}
        <div className="text-center relative z-10">
          <Link
            href="/about"
            className="inline-flex h-12 items-center justify-center rounded-lg bg-primary px-8 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors group pointer-events-auto"
          >
            Learn More About Me
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
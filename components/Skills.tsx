"use client";

import { motion } from "framer-motion";
import { SkillsData } from "@/lib/getAssets";
import { Badge } from "./ui/badge";

export function Skills({ data }: { data: SkillsData }) {
  const customCategories = [
    { title: "Languages", skills: data.languages },
    { title: "Frontend", skills: data.frontend },
    { title: "Backend", skills: data.backend },
    { title: "DevOps & Infrastructure", skills: data.devops },
    { title: "Cloud", skills: data.cloud },
    { title: "Databases", skills: data.databases },
  ];

  return (
    <section id="skills" className="py-24 bg-[#fafafa]">
      <div className="container px-6 mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900">
            Technical Skills
          </h2>
          <div className="w-16 h-1 bg-blue-600 rounded-full mx-auto"></div>
          <p className="text-zinc-600 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and the tools I use to build scalable solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {customCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white p-6 rounded-2xl border border-zinc-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-semibold text-zinc-900 mb-4 border-b border-zinc-100 pb-2">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => (
                  <Badge key={sIdx} variant="secondary" className="px-3 py-1 font-medium bg-zinc-100/80 text-zinc-800 hover:bg-zinc-200/80">
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { ExperienceData } from "@/lib/getAssets";
import { Briefcase } from "lucide-react";

export function Experience({ data }: { data: ExperienceData[] }) {
  return (
    <section id="experience" className="py-24 bg-[#fafafa]">
      <div className="container px-6 mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900">
            Professional Experience
          </h2>
          <div className="w-16 h-1 bg-blue-600 rounded-full mx-auto"></div>
        </motion.div>

        <div className="relative border-l border-zinc-200 ml-3 md:ml-0 md:pl-0">
          {data.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="mb-12 relative pl-8 md:pl-10"
            >
              {/* Timeline dot */}
              <div className="absolute w-6 h-6 bg-white rounded-full border-4 border-blue-600 left-[-12px] md:left-[-12px] top-1 flex items-center justify-center shadow-sm"></div>
              
              <div className="bg-white p-6 md:p-8 rounded-2xl border border-zinc-100 shadow-sm transition-shadow hover:shadow-md">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-zinc-900 group flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-blue-600" />
                      {exp.role}
                    </h3>
                    <h4 className="text-lg font-medium text-zinc-600">{exp.company}</h4>
                  </div>
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold border border-blue-100 h-fit w-fit">
                    {exp.duration}
                  </div>
                </div>
                <p className="text-zinc-600 leading-relaxed pt-4 border-t border-zinc-100">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

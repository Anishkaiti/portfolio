"use client";

import { motion } from "framer-motion";
import { AboutData } from "@/lib/getAssets";
import { CheckCircle2 } from "lucide-react";

export function About({ data }: { data: AboutData }) {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container px-6 mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row gap-12 items-center"
        >
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900">
              About Me
            </h2>
            <div className="w-16 h-1 bg-blue-600 rounded-full"></div>
            <p className="text-lg text-zinc-600 leading-relaxed">
              {data.description}
            </p>
          </div>
          
          <div className="flex-1 w-full bg-[#fafafa] rounded-2xl p-8 border border-zinc-100 shadow-sm">
            <h3 className="text-xl font-semibold mb-6 text-zinc-900">Key Focus Areas</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {data.highlights.map((highlight, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center gap-3 text-zinc-700"
                >
                  <CheckCircle2 className="text-blue-600 w-5 h-5 flex-shrink-0" />
                  <span className="font-medium">{highlight}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

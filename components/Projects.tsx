"use client";

import { motion } from "framer-motion";
import { ProjectData } from "@/lib/getAssets";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

export function Projects({ data }: { data: ProjectData[] }) {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container px-6 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900">
            Featured Projects
          </h2>
          <div className="w-16 h-1 bg-blue-600 rounded-full mx-auto"></div>
          <p className="text-zinc-600 max-w-2xl mx-auto">
            A selection of recent projects showcasing my expertise in building scalable, real-world applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Card className="h-full flex flex-col group overflow-hidden border-zinc-200/60 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="relative h-60 w-full overflow-hidden bg-zinc-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-6">
                    <div className="flex gap-3">
                      <Button size="icon" variant="secondary" asChild className="rounded-full shadow-lg">
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-5 h-5 text-zinc-900" />
                          <span className="sr-only">GitHub</span>
                        </a>
                      </Button>
                      <Button size="icon" variant="secondary" asChild className="rounded-full shadow-lg">
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-5 h-5 text-zinc-900" />
                          <span className="sr-only">Live Demo</span>
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-base text-zinc-600 leading-relaxed mb-6">
                    {project.description}
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-100 w-full">
                    {project.tech.map((tech, tIdx) => (
                      <Badge key={tIdx} variant="outline" className="bg-white text-zinc-700">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

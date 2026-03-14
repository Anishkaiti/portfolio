"use client";

import { motion } from "framer-motion";
import { ContactData, SocialsData } from "@/lib/getAssets";
import { Button } from "./ui/button";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

export function Contact({ contact, socials }: { contact: ContactData; socials: SocialsData }) {
  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent"></div>
      
      <div className="container px-6 mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="space-y-8 bg-[#fafafa] p-10 md:p-16 rounded-3xl border border-zinc-100 shadow-sm"
        >
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-900">
              Let's build something together
            </h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              I'm always open to discussing product design work, backend architecture, or partnership opportunities. Feel free to reach out.
            </p>
          </div>

          <div className="pt-8">
            <Button size="lg" className="rounded-full text-base px-8 h-14 bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/20" asChild>
              <a href={`mailto:orochianish103@gmail.com`}>
                <Mail className="mr-2 h-5 w-5" />
                Say Hello
              </a>
            </Button>
          </div>

          <div className="pt-12 border-t border-zinc-200/60 mt-12 flex justify-center gap-6">
            <a href={socials.github} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-900 transition-colors bg-white p-3 rounded-full border border-zinc-200 shadow-sm hover:shadow-md">
              <Github className="w-6 h-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-blue-600 transition-colors bg-white p-3 rounded-full border border-zinc-200 shadow-sm hover:shadow-md">
              <Linkedin className="w-6 h-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href={socials.twitter} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-blue-400 transition-colors bg-white p-3 rounded-full border border-zinc-200 shadow-sm hover:shadow-md">
              <Twitter className="w-6 h-6" />
              <span className="sr-only">Twitter</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

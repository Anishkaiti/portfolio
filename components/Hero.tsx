"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { HeroData } from "@/lib/getAssets";
import { ArrowRight, Mail } from "lucide-react";

export function Hero({ data }: { data: HeroData }) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16"
    >
      {/* Background gradients */}
      <div className="absolute inset-0 -z-10 bg-white"></div>
      
      <div className="container px-6 mx-auto flex flex-col items-center text-center gap-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-xl"
        >
          <img
            src={data.profileImage}
            alt={data.name}
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-4"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-zinc-900">
            Hi, I'm {data.name}
          </h1>
          <h2 className="text-xl md:text-3xl font-medium text-blue-600">
            {data.title}
          </h2>
          <p className="text-lg md:text-xl text-zinc-600 max-w-2xl mx-auto leading-relaxed">
            {data.tagline}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 mt-4"
        >
          <Button asChild size="lg" className="rounded-full gap-2">
            <a href="#projects">
              {data.ctaPrimary}
              <ArrowRight size={18} />
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full gap-2 bg-white">
            <a href="#contact">
              {data.ctaSecondary}
              <Mail size={18} />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

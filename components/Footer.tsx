import { SocialsData } from "@/lib/getAssets";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export function Footer({ socials }: { socials: SocialsData }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#fafafa] border-t border-zinc-200 py-12">
      <div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-zinc-500 text-sm font-medium">
          © {currentYear} All rights reserved.
        </div>
        
        <div className="flex items-center gap-6 text-sm font-medium text-zinc-500">
          <a href={socials.github} target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 transition-colors hover:underline underline-offset-4">
            GitHub
          </a>
          <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors hover:underline underline-offset-4">
            LinkedIn
          </a>
          <a href={socials.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors hover:underline underline-offset-4">
            Twitter
          </a>
          <a href={`mailto:${socials.email}`} className="hover:text-zinc-900 transition-colors hover:underline underline-offset-4">
            Email
          </a>
        </div>
        
        <div className="text-zinc-400 text-sm">
          Built with Next.js & Tailwind CSS
        </div>
      </div>
    </footer>
  );
}

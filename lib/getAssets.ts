import assetsData from '../assets/assets.json';

export interface SeoData {
  title: string;
  description: string;
}

export interface HeroData {
  name: string;
  title: string;
  tagline: string;
  profileImage: string;
  ctaPrimary: string;
  ctaSecondary: string;
}

export interface AboutData {
  description: string;
  highlights: string[];
}

export interface SkillsData {
  languages: string[];
  frontend: string[];
  backend: string[];
  devops: string[];
  cloud: string[];
  databases: string[];
}

export interface ProjectData {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
  image: string;
}

export interface ExperienceData {
  role: string;
  company: string;
  duration: string;
  description: string;
}

export interface SocialsData {
  github: string;
  linkedin: string;
  twitter: string;
  email: string;
}

export interface ContactData {
  email: string;
}

export interface PortfolioData {
  seo: SeoData;
  hero: HeroData;
  about: AboutData;
  skills: SkillsData;
  projects: ProjectData[];
  experience: ExperienceData[];
  socials: SocialsData;
  contact: ContactData;
}

export function getAssets(): PortfolioData {
  return assetsData as PortfolioData;
}

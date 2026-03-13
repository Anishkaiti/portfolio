import { getAssets } from "@/lib/getAssets";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  const assets = getAssets();

  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen">
        <Hero data={assets.hero} />
        <About data={assets.about} />
        <Skills data={assets.skills} />
        <Projects data={assets.projects} />
        <Experience data={assets.experience} />
        <Contact contact={assets.contact} socials={assets.socials} />
      </main>
      <Footer socials={assets.socials} />
    </>
  );
}

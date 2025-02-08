// import Image from "next/image";
import Hero from "@/components/Hero";
import About from "@/components/about/About";
import Techs from "@/components/techs/Techs";
import ProjectsSection from "@/components/projects/ProjectsSection";
import Reviews from "@/components/review/Reviews";
import Contact from "@/components/contact/Contact";


export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Techs />
      <ProjectsSection />
      <Reviews />
      <Contact />
    </>
  );
}

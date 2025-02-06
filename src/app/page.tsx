// import Image from "next/image";
import {Hero} from "@/components/Hero";
import {TechStack} from "@/components/TechStack";
import {Projects} from "@/components/Projects";
import {Testimonials} from "@/components/Testimonials";
import {Contact} from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <TechStack />
      <Projects />
      <Testimonials />
      <Contact />
    </>
  );
}

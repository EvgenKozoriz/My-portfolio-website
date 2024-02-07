import About from "@/components/About";
import Intro from "@/components/Intro";
import SectionDivider from "@/components/SectionDivider";
import MyProjects from "@/components/MyProjects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <MyProjects />
      <Skills />
      <Experience />
      <Education />
      <Contact/>
    </main>
  );
}

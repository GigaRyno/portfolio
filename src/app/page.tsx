import Headline from "@/components/headline";
import About from "@/components/pages/about";
import Experiences from "@/components/pages/experience";
import Projects from "@/components/pages/projects";
import Skills from "@/components/pages/skills";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Headline/>
      <About/>
      <Projects/>
      <Skills/>
      <Experiences/>
    </main>
  );
}

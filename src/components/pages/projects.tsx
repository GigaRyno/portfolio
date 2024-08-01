"use client";

import React from "react";
import { projectData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import ProjectCard from "../project-card";
import { LargeSectionHeading } from "../ui/heading";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-32 mb-20 mt-20">
      <LargeSectionHeading>My projects</LargeSectionHeading>
      <div>
        {projectData.map((project, index) => (
          <React.Fragment key={index}>
            <ProjectCard {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

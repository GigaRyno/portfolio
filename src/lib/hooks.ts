import { useSectionContext } from "@/context/section-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { SectionName } from "./types";

export function useSectionInView(sectionName: SectionName, threshold = 0.75) {
  const { ref, inView } = useInView({
    threshold,
  });
  const { setCurrentSection, timeOfLastClick } = useSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setCurrentSection(sectionName);
    }
  }, [inView, setCurrentSection, timeOfLastClick, sectionName]);

  return {
    ref,
  };
}

"use client";

import React from 'react'
import { useSectionInView } from '@/lib/hooks'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { LargeSectionHeading, ExtraSmallSectionHeading } from '../ui/heading';
import { experienceData } from '@/lib/data';
import { useTheme } from '@/context/theme-context';


export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();
  
  return (
    <section
      ref={ref}
      id='skills'
      className='mb-6 mt-4 text-center scroll-mt-28'
    >
      <LargeSectionHeading>My Experience</LargeSectionHeading>
      <VerticalTimeline lineColor={(theme === "light" ? "rgba(0, 0, 0, 0.5)" : "rgba(255, 255, 255, 0.5)")}>
        {experienceData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible={true}
              contentStyle={{
                background: theme === "light" ? "#F1F5F9" : "rgba(0, 0, 0, 0.05)",
                boxShadow: "none",
                border: theme === "light" ? "1px solid rgba(0, 0, 0, 0.15)" : "1px solid rgba(255, 255, 255, 0.15)",
                textAlign: "left",
                padding: "1.3rem 1.3rem",
              }}
              contentArrowStyle={{
                borderRight: 
                  theme === "light" ? "0.4rem solid rgba(0, 0, 0, .75)" : "0.4rem solid rgba(255, 255, 255, 0.5)"
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                boxShadow: theme === "light" ? "0px 0px 7px rgba(0, 0, 0, 0.5)" : "0px 0px 7px rgba(255, 255, 255, 0.5)",
                background: theme === "light" ? "white" : "#111827",
                fontSize: "1.5rem",
                border: theme === "light" ? "4px solid black" : "4px solid white",
              }}
            >
            <ExtraSmallSectionHeading className='text-black dark:text-white'>{item.title}</ExtraSmallSectionHeading>
            <p className="font-normal !mt-0 flex flex-row gap-3 items-center">
              {item.degreeIcon}
              {item.degree}
            </p>
            <p className="font-normal !mt-0 flex flex-row gap-3 items-center">
              {item.companyicon}
              {item.company}
            </p>
            <p className="font-normal !mt-0 flex flex-row gap-3 items-center">
              {item.locationicon}
              {item.location}
            </p>
            {item.description && Array.isArray(item.description) && item.description.length > 0 ? (
              <div>
                {(!item.degree || item.degree.trim().length === 0) && (
                  <div className='text-normal font-bold pt-1'> 
                    Experience:
                  </div>
                )}
                <div className="!mt-1 !font-normal !text-sm text-black dark:text-white/75">
                  <ol>
                    {item.description.map((desc, index) => (
                      <li key={index}>{desc}</li>
                    ))}
                  </ol>
                </div>
              </div>
            ) : null}
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  )
}
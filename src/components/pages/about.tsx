"use client"

import { useSectionInView } from '@/lib/hooks'
import React from 'react'
import { LargeSectionHeading } from '../ui/heading';

export default function About() {
  const { ref } = useSectionInView("About");
  return (
    <section
      ref={ref}
      id='about'
      className='mb-20 mt-4 text-center scroll-mt-28'
    >
      <LargeSectionHeading>About Me</LargeSectionHeading>
      <p className="mb-3 mx-5 xxl:w-[1200px]">
        After graduating with a degree in{" "}
        <span className="font-medium">Computer Science and Innovation</span>, I decided to pursue my
        passion for programming. I started learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Typescript, MongoDB, and Prisma
        </span>
        . I am also familiar with Node.js and Javascript. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
        <span className="italic"> When I'm not coding</span>, I enjoy playing
        video games, anything cars, and being around my friends and family. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">screen printing and graphic design</span>. I'm also
        learning how to start and run a business.
      </p>
    </section>
  )
}
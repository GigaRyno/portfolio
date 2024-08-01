"use client";

import React from 'react'
import { motion } from "framer-motion";
import { useSectionInView } from '@/lib/hooks';
import { useSectionContext } from "@/context/section-context";
import Link from 'next/link';

export default function Headline() {
    const { ref } = useSectionInView("Home", 0.5);
    const { setCurrentSection, setTimeOfLastClick } = useSectionContext();

  return (
    <section
        ref={ref} 
        id="home" 
        className="mb-20 max-w-[800px] text-center scroll-mt-[1600px]"
    >
        <div className='flex items-center justify-center'>
            <div className='relative'>

            </div>
        </div>
        <motion.h1
            className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
        >
            <span className="font-semibold">Hello, I'm </span><span className='bg-clip-text text-transparent bg-gradient-to-r from-accent_pink via-accent_navy to-accent_light_blue'>Ryan LaVigne</span>. I'm a{" "}
            <span className="font-bold">full-stack developer</span> with{" "}
            <span className="font-bold">2 years</span> of experience. I enjoy
            building <span className="italic">Responsive & Innovative Webites</span>.
        </motion.h1>

        <motion.div>
            <Link 
                href="#skills"
                onClick={() => {
                    setCurrentSection("Skills");
                    setTimeOfLastClick(Date.now());
                }}
            >
                Contact Me Here{" "}
            </Link>
        </motion.div>
    </section>
  )
}
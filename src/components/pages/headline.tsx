"use client";

import React from 'react'
import { motion } from "framer-motion";
import { useSectionInView } from '@/lib/hooks';
import { useSectionContext } from "@/context/section-context";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { Roboto } from "next/font/google";
import { FaGithubSquare } from "react-icons/fa";
import Link from 'next/link';
import { githubData, linkedInData } from '@/lib/data';

const roboto = Roboto({ 
    subsets: ["latin"],
    weight: ['100', '300', '400', '500', '700', '900'],
    variable: '--font-roboto'
});

export default function Headline() {
    const { ref } = useSectionInView("Home", 0.5);
    const { setCurrentSection, setTimeOfLastClick } = useSectionContext();

  return (
    <section
        ref={ref} 
        id="home" 
        className={`${roboto.variable} font-sans mt-28 mb-28 max-w-[800px] text-center scroll-mt-[1600px]`}
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
            <span className="font-semibold">Hello, I'm </span><span className='!underline !underline-offset-[3px] bg-clip-text text-transparent text-accent_light_blue bg-accent_light_blue'>Ryan LaVigne</span>. I'm a{" "}
            <span className="font-bold">full-stack developer</span> with{" "}
            <span className="font-bold">2 years</span> of experience. I enjoy
            building <span className="italic">Responsive & Innovative Webites</span>.
        </motion.h1>

        <motion.div className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium'>
            <Link 
                href="#skills"
                className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none 
                           focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition
                         dark:bg-gray-200 dark:text-gray-900'
                onClick={() => {
                    setCurrentSection("Skills");
                    setTimeOfLastClick(Date.now());
                }}
            >
                Contact Me Here{" "}
                <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
            </Link>

            {/* <a
            className="group bg-gray-200 px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
            href="/CV.pdf"
            download
            >
            Download CV{" "}
            <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
            </a> */}
        </motion.div>
        <motion.div className='flex flex-col sm:flex-row items-center justify-center gap-2 mt-[1rem] text-[1.35rem]'>
            <a
                className="bg-gray-200 p-4 h-12 w-12 text-gray-700 flex items-center rounded-full transition cursor-pointer borderBlack
                           hover:text-gray-950 focus:scale-[1.15] hover:scale-[1.15] active:scale-105  
                           dark:bg-white/10 dark:text-white/60 dark:hover:text-white"
                href={`${linkedInData.url}`}
                target="_blank"
                >
                <BsLinkedin />
            </a>

            <a
                className="bg-gray-200 p-4 h-12 w-12 text-gray-700 flex items-center rounded-full transition cursor-pointer borderBlack
                             focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105  
                           dark:bg-white/10 dark:text-white/60 dark:hover:text-white"
                href={`${githubData.url}`}
                target="_blank"
            >
                <FaGithubSquare />
            </a>
        </motion.div>
    </section>
  )
}
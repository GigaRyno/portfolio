"use client";
import Link from 'next/link'
import { links } from "@/lib/data";
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { useSectionContext } from '@/context/section-context';

export default function Nav() {
    const { currentSection, setCurrentSection, setTimeOfLastClick } = useSectionContext();

    return (
        <header className="z-[999] relative">
            <div className='fixed top-[1.7rem] left-[-0.25rem] text-3xl bg-gray-50 dark:bg-gray-900 px-3 pl-8 py-2 rounded-lg bg-opacity-80 border-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] font-bold'>
                Ryan<span className='bg-clip-text text-transparent bg-accent_light_blue'>.</span>
            </div>
            <motion.div
                className="fixed top-0 -right-[12.75rem] h-[4.5rem] w-full rounded-lg border border-white border-opacity-40 bg-gray-50 bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] 
                           sm:top-[1.75rem] sm:h-[3.25rem] sm:w-[36rem] sm:rounded-lg 
                         dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
                initial={{ y: -100, x: "25%", opacity: 0 }}
                animate={{ y: 0, x: "-25%", opacity: 1 }}
            ></motion.div>
            {/* </div> */}

      <nav className="flex fixed top-[0.15rem] right-2 h-12 -translate-x py-2 pr-8 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li
              className="h-4/6 flex items-center justify-center relative"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  "flex z-10 w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-50 dark:hover:text-gray-300",
                  {
                    "text-gray-950 dark:text-accent_light_blue":
                      currentSection === link.name,
                  }
                )}
                href={link.hash}
                onClick={() => {
                  setCurrentSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}

                {link.name === currentSection && (
                  <motion.span
                    className="bg-gray-200 rounded-lg absolute inset-0 -z-10 dark:bg-gray-700"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 40,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
    )
}
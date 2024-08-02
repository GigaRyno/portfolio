"use client";
import Link from 'next/link';
import { links } from "@/lib/data";
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { FiMenu, FiX } from 'react-icons/fi';
import { useSectionContext } from '@/context/section-context';
import { useEffect, useState } from 'react';

export default function Nav() {
    const { currentSection, setCurrentSection, setTimeOfLastClick } = useSectionContext();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Closes menu when resizing above mobile sizing
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= screen.width) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <header className="z-[999] relative">
            {/* Ryan Logo */}
            <motion.div 
                className={isMenuOpen ? 
                    'fixed top-[1.7rem] right-[8.5rem] text-3xl px-3 pl-8 py-2 rounded-lg font-bold z-[1001]' : 
                    'fixed top-[1.7rem] left-[-0.25rem] text-3xl bg-gray-50 dark:bg-gray-950 px-3 pl-8 py-2 rounded-lg bg-opacity-80 dark:bg-opacity-75 shadow-lg shadow-black/[0.1] backdrop-blur-[0.5rem] font-bold'}
                initial={isMenuOpen ? { y: -100, x: "0%", opacity: 0} : { y: 0, x: "0%", opacity: 1}}
                animate={isMenuOpen ? { y: 0, x: "4rem", opacity: 1} : { y: 0, x: "-0.25rem", opacity: 1}}
                transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                }}
            >
                Ryan<span className='bg-clip-text text-transparent bg-accent_light_blue'>.</span>
            </motion.div>

            
            <motion.div
                className="fixed top-0 -right-[14.5rem] rounded-lg border border-white border-opacity-40 bg-gray-50 bg-opacity-80 shadow-lg shadow-black/[0.1] backdrop-blur-[0.5rem] 
                           sm:top-[1.75rem] sm:h-[3.25rem] sm:w-[36rem] sm:rounded-lg 
                           dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
                initial={{ y: -100, x: "25%", opacity: 0 }}
                animate={{ y: 0, x: "-25%", opacity: 1 }}
            ></motion.div>

            <motion.nav 
                className={isMenuOpen ? "flex fixed pr-8 pl-5 h-12 top-[1.7rem] -right-[1rem]" : "flex fixed pr-8 pl-5 !bg-opacity-80 rounded-lg top-[1.7rem] -right-[1rem] -translate-x sm:top-[1.7rem] sm:h-[initial] sm:py-0"}
                initial={{ y: 100, x: "-50%", opacity: 0 }}
                animate={{ y: 0, x: "0%", opacity: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                }}
            >
                <ul className="hidden sm:flex w-[22rem] sm:items-center sm:justify-center sm:gap-y-1 sm:text-[0.9rem] sm:font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
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
                <motion.div
                    className="sm:hidden flex items-center"
                    initial={{ x: 0 }}
                    animate={{ x: isMenuOpen ? -275 : 0 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                >
                    {/* Hamburger Menu Button */}
                    <button
                        className={isMenuOpen ? /*Menu Open*/ `dark:bg-gray-950 bg-gray-50 shadow-xl text-3xl !bg-opacity-80 w-[4rem] z-10 p-3 rounded-l-lg backdrop-blur-[0.5rem] translate-x-[6.27rem]` : 
                                                /*Menu Closed*/ `text-3xl text-gray-700 translate-x-[4rem] w-[8rem] dark:text-gray-300 rounded-lg !bg-opacity-80 !backdrop-blur-[0.5rem] bg-gray-50 shadow-lg dark:bg-gray-950 p-3 pr-4`}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle Menu"
                    >
                        {isMenuOpen ? <FiX /> : <FiMenu />}
                    </button>
                </motion.div>
            </motion.nav>

            {/* Hamburger Menu Background & Links */}
            <motion.nav
                initial={{ x: '100%' }}
                animate={{ x: isMenuOpen ? 0 : '100%' }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className="fixed top-0 right-0 bottom-0 w-[12rem] h-[25rem] rounded-lg bg-white !bg-opacity-80 backdrop-blur-[0.5rem] dark:bg-gray-950 shadow-lg z-[1000] p-5 sm:hidden"
            >
                <ul className="flex flex-col space-y-4 mt-20">
                    {links.map((link) => (
                        <li key={link.hash}>
                            <Link
                                className={clsx(
                                    "block text-lg px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg",
                                    {
                                        "text-gray-900 dark:text-accent_light_blue":
                                            currentSection === link.name,
                                    }
                                )}
                                href={link.hash}
                                onClick={() => {
                                    setCurrentSection(link.name);
                                    setTimeOfLastClick(Date.now());
                                    // setIsMenuOpen(false); // Close the menu when a link is clicked
                                }}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </motion.nav>
        </header>
    );
}
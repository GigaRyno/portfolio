"use client";

import { useTheme } from "@/context/theme-context";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeButton() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button 
            className="fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 border border-black dark:border-white border-opacity-40 shadow-2xl rounded-lg flex items-center justify-center active:scale-105 transition-all dark:bg-gray-950"
            onClick={toggleTheme}    
        >
            {theme === "light" ? <BsSun/> : <BsMoon/>}
        </button>
    )
}

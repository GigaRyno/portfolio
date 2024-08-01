"use client";

import { SectionName } from "@/lib/types";
import React, { useState, useContext, createContext } from "react";

type CurrentSectionContextProviderProps = {
    children: React.ReactNode;
};

type CurrentSectionContextType = {
    currentSection: SectionName;
    setCurrentSection: React.Dispatch<React.SetStateAction<SectionName>>;
    timeOfLastClick: number;
    setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>
};

export const CurrentSectionContext = createContext<CurrentSectionContextType | null>(null);

export default function CurrentSectionContextProvider({
    children,
}: CurrentSectionContextProviderProps) {
    const [currentSection, setCurrentSection] = useState<SectionName>("Home");
    const [timeOfLastClick, setTimeOfLastClick] = useState(0);

    return(
        <CurrentSectionContext.Provider
            value={{
                currentSection,
                setCurrentSection,
                timeOfLastClick,
                setTimeOfLastClick
            }}
        >
            {children}
        </CurrentSectionContext.Provider>
    );
}

export function useSectionContext() {
    const context = useContext(CurrentSectionContext);

    if(context === null) {
        throw new Error(
            "useSectionContext must be used within an CurrentSectionContextProvider"
        );
    }

    return context;
}
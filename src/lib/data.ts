import { LuGraduationCap } from "react-icons/lu";
import { FaHtml5, FaNodeJs, FaRust, FaGitAlt, FaSalesforce, FaRegFileExcel, FaTshirt, FaBuilding, FaLaptopCode } from "react-icons/fa";
import { FaDatabase, FaLocationDot, FaGithub  } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
import { SiPrisma, SiCplusplus } from "react-icons/si";
import { MdDesignServices } from "react-icons/md";
import { VscVscode } from "react-icons/vsc";
import { HiCommandLine } from "react-icons/hi2";
import { BsPersonFill } from "react-icons/bs";
import { BiLogoPostgresql, BiLogoReact, BiLogoMongodb, BiLogoTypescript, BiLogoPython, BiLogoTailwindCss, BiLogoCss3, BiLogoJavascript } from "react-icons/bi";
import corpcommentImg from "@/public/corpcomment.png";
import React from "react";

export const colors = [
    "#F72585",
    "#7209b7",
    "#3a0ca3",
    "#4361ee",
    "#4cc9f0",
    "#00e187",
]

export const links = [
    {
        name: "Home",
        hash: "#home"
    },
    {
        name: "About",
        hash: "#about"
    },
    {
        name: "Projects",
        hash: "#projects"
    },
    {
        name: "Skills",
        hash: "#skills"
    },
    {
        name: "Experience",
        hash: "#experience"
    },
    
    
] as const;

export const experienceData = [
    {
        title: "Bachelor Of Science",
        degree: "Computer Science and Innovation",
        degreeIcon: React.createElement(LuGraduationCap),
        company: "Champlain College",
        companyicon: React.createElement(FaBuilding),
        location: "Burlington, VT",
        locationicon: React.createElement(FaLocationDot),
        description:  [ "Deans List: Spring 2022 -> Fall 2023" ],
        icon: React.createElement(LuGraduationCap),
        date: "2019 - 2023"

    },
    {
        title: "Software Engineer Intern",
        degreeIcon: "",
        degree: "",
        description: [
            "Salesforce Development: Developed custom applications and features on the Salesforce Platform. Wrote Apex classes, triggers and Visualforce pages. Worked with Salesforce Lightning components to create interfaces.",
            "Data Management: Ensured data quality and accuracy within the system. Created and maintained dashboards for reporting and tracking.",
            "Configuration and Customization: Configured Salesforce objects, fields, page layouts, and record types. Customized Salesforce workflows, processes and validation rules.",
            "Quality Assurance and Testing: Conducted unit testing and quality checks.",
            "Research and Learning: Participated in specific Salesforce training courses.",
        ],
        company: "Farm Credit Financial Partners",
        companyicon: React.createElement(FaBuilding),
        location: "Remote",
        locationicon: React.createElement(FaLocationDot),
        icon: React.createElement(FaLaptopCode),
        date: "June 2022 - Dec 2022"
    },
    {
        title: "Office Manager",
        degreeIcon: "",
        degree: "",
        description: [
            "Financial Management: Process invoices, manage accounts payable and receivable. Maintain Quickbooks for streamlined business operations.",
            "Customer Service: Discuss client needs, answer questions and deliver excellent customer service.",
            "Inventory Management: Oversee inventory levels for materials and supplies. Update inventory in Quickbooks system.",
            "Technology Management: Manage office technology systems.",
        ],
        company: "Recovery Room",
        companyicon: React.createElement(FaBuilding),
        location: "Colchester, VT",
        locationicon: React.createElement(FaLocationDot),
        icon: React.createElement(BsPersonFill),
        date: "May 2022 - Present"
    },
    {
        title: "Owner/CEO",
        degreeIcon: "",
        degree: "",
        description: [
            "Graphic Design: Create and design company logos. Determine appropriate logo usage on apparel.",
            "Financial Management: Completed paperwork and formed an LLC. Process apparel orders. Manage accounts payable and receivable. Maintain Quickbooks.",
            "Inventory Management: Oversee apparel inventory levels. Update inventory in Quickbooks system. Order apparel as needed.",
        ],
        company: "Northern Apparel, LLC",
        companyicon: React.createElement(FaBuilding),
        location: "Colchester, VT",
        locationicon: React.createElement(FaLocationDot),
        icon: React.createElement(FaTshirt),
        date: "January 2023 - Present"
    }
] as const;

export const projectData = [
    {
        title: "Twitter Clone",
        description: [ 
            "Description: Developed a full-stack Twitter clone with user authentication, tweet posting, commenting, liking, following features. Integrated a real-time feed using Next.js and designed a responsive front-end with Tailwind and React.js",
            "Key achievements: Implemented user authentication using NextAuth. Designed a scalable database schema to manage user relationships and content.",
        ],
        tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma", "NextAuth"],
        imageUrl: corpcommentImg,
    }
] as const;

export const frontEndData = [
    {
        skill: "HTML",
        icon: React.createElement(FaHtml5),
    },
    {
        skill: "CSS",
        icon: React.createElement(BiLogoCss3),
    },
    {
        skill: "Javascript",
        icon: React.createElement(BiLogoJavascript),
    },
    {
        skill: "React.js",
        icon: React.createElement(BiLogoReact),
    },
    {
        skill: "Next.js",
        icon: React.createElement(RiNextjsFill),
    },
    {
        skill: "Tailwind",
        icon: React.createElement(BiLogoTailwindCss),
    },
    {
        skill: "Typescript",
        icon: React.createElement(BiLogoTypescript),
    }
]

export const backEndData = [
    {
        skill: "SQL",
        icon: React.createElement(FaDatabase),
    },
    {
        skill: "NoSQL",
        icon: React.createElement(FaDatabase),
    },
    {
        skill: "MongoDB",
        icon: React.createElement(BiLogoMongodb),
    },
    {
        skill: "Prisma",
        icon: React.createElement(SiPrisma),
    },
    {
        skill: "Postgresql",
        icon: React.createElement(BiLogoPostgresql),
    },
    {
        skill: "Node.js",
        icon: React.createElement(FaNodeJs),
    },
    {
        skill: "Python",
        icon: React.createElement(BiLogoPython),
    },
    {
        skill: "C++",
        icon: React.createElement(SiCplusplus),
    },
    {
        skill: "Rust",
        icon: React.createElement(FaRust),
    }
]

export const linkedInData = { url: "https://www.linkedin.com/in/ryanrlavigne/" } as const;

export const githubData = { url: "https://github.com/GigaRyno" } as const;

export const toolsData = [
    {
        skill: "Git",
        icon: React.createElement(FaGitAlt),
    },
    {
        skill: "GitHub",
        icon: React.createElement(FaGithub),
    },
    {
        skill: "Software Design",
        icon: React.createElement(MdDesignServices),
    },
    {
        skill: "VS Code",
        icon: React.createElement(VscVscode),
    },
    {
        skill: "CLI",
        icon: React.createElement(HiCommandLine),
    },
    {
        skill: "Salesforce",
        icon: React.createElement(FaSalesforce),
    },
    {
        skill: "Google Sheets/Excel",
        icon: React.createElement(FaRegFileExcel),
    }
]
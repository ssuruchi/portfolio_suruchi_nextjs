import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import wordanalyticsImg from "@/public/chitchat.png";
import corpcommentImg from "@/public/askmeanything.png";
import rmtdevImg from "@/public/canva.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Data Analyst Intern | SLB",
    location: "Pune, India",
    description:
      "I contributed to a automatiopn project that involved software development, data analysis and visualization. I also learned about the oil and gas industry.",
    icon: React.createElement(LuGraduationCap),
    date: "2024",
  },
  {
    title: "Data Science Intern | Intellithink IIoT Labs",
    location: "Bengaluru, India",
    description:
      "I worked on applying data science techniques such as EDA, preprocessing, Data augumentation to build a classification model for predictive maintenance task leverging Transfer Learning.",
    icon: React.createElement(CgWorkAlt),
    date: "June 2023 - July 2023",
  },
  {
    title: "Full-Stack Developer | Yantromitra",
    location: "Remote",
    description:
      "I designed and developed interactive web applications for clients. I worked on both front-end and back-end technologies.",
    icon: React.createElement(FaReact),
    date: "Dec 2022 - Feb 2023",
  },
] as const;

export const projectsData = [
  {
    title: "Canva Clone",
    description:
      " Implemented Sign Up and Sign In features for users to register and authenticate themselves. Designed and Built interactive dashboards for users to create, customize, and save designs, including the ability to add shapes, text, and images through a personal dashboard.",
    tags: [" React.js", "TypeScript", "CSS", "Node.js", "Express.js", "MongoDB", "Docker"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Ask Me Anything",
    description:
      "Developed a Gen AI based chatbot application providing context based responses to questions asked by researchers and faculties on the pdf(research papers) input provided by them. Ensured up to date information using Vector Database and chaining in LLM.",
    tags: [" Python", "OpenAI", "RAG", "Streamlit"],
    imageUrl: corpcommentImg,
  },
  {
    title: "ChitChat",
    description:
      " Developed a chat application for users to communicate in real time using web sockets.io– Implemented user authentication feature for users to set their avatar in profile.",
    tags: ["MERN stack", "Websocket.io"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "REST API",
  "Express",
  "MySQL",
  "Python",
  "Docker",
] as const;

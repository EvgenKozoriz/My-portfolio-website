import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import scheduleImg from "@/public/schedule.png";
import gamesImg from "@/public/games.png";
import todoimg from "@/public/todolist.png";

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
    name: "Education",
    hash: "#education",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Junior Front-End Developer",
    location: "Ukraine",
    description:
      "I am a member of a startup project as Junior Front-End Developer with the following technology stack (React, TypeScript, Redux-toolkit, Rtk-query, SCSS, Git).",
    icon: React.createElement(FaReact),
    date: "March 2023 - present",
  },
] as const;

export const educationData = [
  {
    title: "Romny college KNEU",
    location: "Romny, Ukraine",
    description: "Speciality: maintenance of computer systems and networks",
    icon: React.createElement(LuGraduationCap),
    date: "2014-2018",
  },
  {
    title: "NURE",
    location: "Kharkiv, Ukraine",
    description: "Speciality: cybersecurity (bachelor)",
    icon: React.createElement(LuGraduationCap),
    date: "2018-2021",
  },
  {
    title: "NURE",
    location: "Kharkiv, Ukraine",
    description: "Speciality: cybersecurity (master of science)",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - 2023",
  },
] as const;

export const projectsData = [
  {
    title: "Schedule(in progress)",
    description:
      "Advanced schedule where we can add todos for day week month add tags to them have a sticky wall with any information",
    tags: ["React", "Redux", "SCSS", "TypeScrpipt"],
    imageUrl: scheduleImg,
    link: "https://advanced-todo-hazel.vercel.app/",
  },
  {
    title: "Test Task",
    description:
      "Test task where I need to use MERN to do registration and authorization and fetching data",
    tags: ["React", "TypeScript", "Express", "MongoDb", "Node js"],
    imageUrl: gamesImg,
    link: "https://miraplay-test-client-six.vercel.app/auth",
  },
  {
    title: "Todo List",
    description: "My old pet project to try react and github pages",
    tags: ["React", "githubPages"],
    imageUrl: todoimg,
    link: "https://evgenkozoriz.github.io/react-todo-task/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "SCSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Material UI",
  "Figma",
  "MongoDB",
  "Redux",
] as const;

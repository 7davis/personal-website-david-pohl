import React, { useState } from 'react';

import Head from 'next/head'
import { BsCircle, BsCircleFill } from "react-icons/bs"
import { FaGraduationCap, FaGithub, FaArrowAltCircleDown, FaDownload } from "react-icons/fa"
import Start from '@/components/start'
import Education from '@/components/education'
import { EducationStation, ProfessionalStation } from '@/components/education-station'

export default function Home() {
    return (
        <div className="flex flex-col h-screen overflow-auto min-w-screen bg-blue-zodiac-900">
            <Head>
                <title>David Pohl</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div id="loading-overlay" className="absolute bg-darkest-blue h-screen w-screen flex justify-center items-center z-50">
                <svg className="m-10" viewBox="0 0 70 70" width="140" height="140" xmlns="http://www.w3.org/2000/svg">
                    <g><path id="dav-d" d="m10,60l25,-50l25,50" stroke="white" stroke-width="6" fill="none" /></g>
                </svg>
                <svg className="m-10" viewBox="0 0 70 70" width="140" height="140" xmlns="http://www.w3.org/2000/svg">
                    <g><path id="dav-a" d="m60,10l-50,25l50,25" stroke="white" stroke-width="6" fill="none" />
                    </g></svg>
                <svg className="m-10" viewBox="0 0 70 70" width="140" height="140" xmlns="http://www.w3.org/2000/svg">
                    <g><path id="dav-v" d="m10,10l50,25l-50,25" stroke="white" stroke-width="6" fill="none" />
                    </g></svg>
            </div>
            <nav className="px-52 py-2.5 fixed w-full z-20 top-0 left-0 backdrop-blur-lg bg-blue-zodiac-900 bg-opacity-75 shadow-md">
                <div className="container flex flex-wrap items-center justify-between mx-auto">
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                        <ul className="flex flex-col p-4 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 text-dav-text">
                            <li>
                                <a
                                    href="#start-section"
                                    className="whitespace-nowrap font-semibold transition-all delay-150 duration-300 uppercase hover:text-white">start</a>
                            </li>
                            <li>
                                <a
                                    href="#education-section"
                                    className="whitespace-nowrap font-semibold transition-all delay-150 duration-300 uppercase hover:text-white">education</a>
                            </li>
                            <li>
                                <a
                                    href="#professional-section"
                                    className="whitespace-nowrap font-semibold transition-all delay-150 duration-300 uppercase hover:text-white">professional</a>
                            </li>
                            <li>
                                <a
                                    href="#projects-section"
                                    className="whitespace-nowrap font-semibold transition-all delay-150 duration-300 uppercase hover:text-white">projects</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <main id="main" className="flex-grow overflow-auto flex flex-col px-52 scroll-smooth">
                <section id="start-section" className="min-h-full flex flex-col justify-center max-w-4xl mb-20">
                    <div>
                        <h1 className="text-8xl font-extrabold text-white">David Pohl</h1>
                    </div>
                    <div>
                        <h2 className="text-5xl font-bold text-gray-400 mt-2">Computer Science Student</h2>
                    </div>
                    <div>
                        <p className="text-xl text-dav-text mt-10">
                            I'm a German Computer Science Student at <a href="https://www.uni-heidelberg.de/en" className="whitespace-nowrap font-semibold text-dav-aquamarine-400 transition-all delay-150 duration-300 hover:text-white">Heidelberg University</a> specializing in <a href="https://en.wikipedia.org/wiki/Natural_language_processing" className="whitespace-nowrap font-semibold text-dav-aquamarine-400 transition-all delay-150 duration-300 hover:text-white">Natural Language Processing</a> and <a href="https://en.wikipedia.org/wiki/Artificial_intelligence" className="whitespace-nowrap font-semibold text-dav-aquamarine-400 transition-all delay-150 duration-300 hover:text-white">Artificial Intelligence</a>.
                            <br />Currently, I am working on my Bachelor's Thesis.
                        </p>
                    </div>
                    <button type="button" className="mt-20 text-xl font-bold mr-2 px-5 py-2.5 w-48 rounded dark:bg-dav-aquamarine-700 dark:text-white uppercase transition ease-in-out delay-150 hover:scale-110 hover:bg-dav-aquamarine-600 duration-300">cv</button>
                </section>
                <section id="education-section" className="flex flex-col mb-20">
                    <div className="flex flex-row items-center">
                        <h1 className="flex items-center text-6xl font-extrabold dark:text-white mr-2 uppercase">education</h1>

                    </div>

                    <ol className="mt-10">
                        <EducationStation
                            startDate="oct 2020"
                            endDate="jul 2023"
                            institution="heidelberg university"
                            level="b.sc. computer science"
                            facts={[
                                { key: "grade", value: "3.9/4.0" },
                                { key: "focus", value: "natural language processing, artificial intelligence" },
                                { key: "thesis", value: "\"resolving disambiguity in medical texts\"" },
                                { key: "honors", value: "germany scholarships 2021 & 2022 (merit-based, governmental)" },
                            ]}
                        />
                        <EducationStation
                            startDate="aug 2022"
                            endDate="dec 2022"
                            institution="north carolina state university"
                            level="exchange student"
                            facts={[
                                { key: "grade", value: "4.0/4.0" },
                                { key: "focus", value: "frontend development, statistics, programming language theory" },
                                { key: "honors", value: "baden-wuerttemberg scholarship (merit-based, governmental)" },
                            ]}
                        />
                        <EducationStation
                            startDate="aug 2012"
                            endDate="jun 2020"
                            institution="schiller-gymnasium cologne"
                            level="general university entrance qualification"
                            facts={[
                                { key: "grade", value: "3.9/4.0 (valedictorian)" },
                                { key: "focus", value: "mathematics, computer science, german" },
                                { key: "honors", value: "valedictorian (among ~120 graduates)" },
                            ]}
                        />
                    </ol>
                </section>
                <section id="professional-section" className="flex flex-col mb-20">
                    <div className="flex flex-row items-center">
                        <h1 className="flex items-center text-6xl font-extrabold dark:text-white mr-2 uppercase">professional</h1>
                    </div>

                    <ol className="mt-10">
                        <ProfessionalStation
                            startDate="aug 2021"
                            endDate="feb 2022"
                            institution="t-systems mms (deutsche telekom)"
                            level="software engineering intern"
                            points={[
                                "Developed a tool for managing the company's server structures",
                                "Implemented an automated pipeline for fetching, processing and visualizing the current structure",
                                "Intensively worked with the company's internal knowledge base Confluence",
                                "Continuously communicated the project's status and results to technical and non-technical colleagues"
                            ]}
                        />
                    </ol>
                </section>
                <section id="projects-section" className="flex flex-col justify-center mb-20">
                    <div className="flex flex-row items-center">
                        <h1 className="flex items-center text-5xl font-extrabold dark:text-white mr-2 uppercase">projects</h1>
                        <div className="flex-grow border-t border-gray-700"></div>
                    </div>
                    <div class="container flex flex-col items-center mt-10">
                        <div class="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <div class="p-5 flex flex-col">
                                <a href="#">
                                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white uppercase">state-of-the-art keyphrase extraction</h5>
                                </a>
                                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                    In this project, I meticulously examined a range of <span className="font-semibold text-gray-200">research papers</span> tackling the issue of <span className="font-semibold text-gray-200">keyphrase extraction</span> from various angles.
                                    I implemented the most noteworthy findings while enriching my <span className="font-semibold text-gray-200">Python module</span> and constructed a <span className="font-semibold text-gray-200">benchmarking module</span> to evaluate the performance of various algorithms.
                                    To provide tangible access to my results, I have developed a neatly designed <span className="font-semibold text-gray-200">user interface</span>.
                                </p>
                                <div className="gap-1 mt-5 break-words block">
                                    <a href="https://www.python.org/" className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded border dark:border-dav-aquamarine-900 dark:bg-transparent dark:text-dav-aquamarine-500 uppercase transition-all hover:bg-dav-aquamarine-900 hover:text-white">python</a>
                                    <a href="https://www.docker.com/" className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded border dark:border-dav-aquamarine-900 dark:bg-transparent dark:text-dav-aquamarine-500 uppercase transition-all hover:bg-dav-aquamarine-900 hover:text-white">spaCy</a>
                                    <a href="https://git-scm.com/" className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded border dark:border-dav-aquamarine-900 dark:bg-transparent dark:text-dav-aquamarine-500 uppercase transition-all hover:bg-dav-aquamarine-900 hover:text-white">NumPy</a>
                                    <a href="https://www.ansible.com/" className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded border dark:border-dav-aquamarine-900 dark:bg-transparent dark:text-dav-aquamarine-500 uppercase transition-all hover:bg-dav-aquamarine-900 hover:text-white">pandas</a>
                                    <a href="https://concourse-ci.org/" className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded border dark:border-dav-aquamarine-900 dark:bg-transparent dark:text-dav-aquamarine-500 uppercase transition-all hover:bg-dav-aquamarine-900 hover:text-white">Hugging Face</a>
                                </div>
                                <div className="gap-1 mt-2 break-words block">
                                    <a href="https://reactjs.org/" className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded border dark:border-dav-aquamarine-900 dark:bg-transparent dark:text-dav-aquamarine-500 uppercase transition-all hover:bg-dav-aquamarine-900 hover:text-white">React</a>
                                    <a href="https://www.javascript.com/" className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded border dark:border-dav-aquamarine-900 dark:bg-transparent dark:text-dav-aquamarine-500 uppercase transition-all hover:bg-dav-aquamarine-900 hover:text-white">JavaScript</a>
                                    <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded border dark:border-dav-aquamarine-900 dark:bg-transparent dark:text-dav-aquamarine-500 uppercase transition-all hover:bg-dav-aquamarine-900 hover:text-white">HTML</a>
                                    <a href="https://tailwindcss.com/" className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded border dark:border-dav-aquamarine-900 dark:bg-transparent dark:text-dav-aquamarine-500 uppercase transition-all hover:bg-dav-aquamarine-900 hover:text-white">tailwindcss</a>
                                </div>
                                <a href="/keyphrases" className="mt-8 text-center text-lg font-medium mr-2 px-2 py-2.5 w-48 rounded border dark:border-dav-aquamarine-900 dark:bg-dav-aquamarine-900 dark:text-white uppercase transition ease-in-out delay-150 hover:scale-110 hover:bg-dav-aquamarine-800 duration-300">demo</a>

                            </div>
                        </div>
                    </div>
                </section>
                <footer className="mb-5">
                    <a href="https://github.com/7davis" className="flex flex-col items-center gap-1 text-sm text-gray-500 sm:text-center dark:text-gray-400 mt-5 transition-all duration-300 hover:text-dav-aquamarine-300">
                        <FaGithub className="text-lg" /><span>Designed & Built by David Pohl</span>
                    </a>
                </footer>
            </main>
        </div>
    )
}
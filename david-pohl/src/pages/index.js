import Head from 'next/head'
import { BsFillMoonStarsFill, BsLinkedin, BsGithub } from "react-icons/bs"
import { FaGraduationCap, FaGithub } from "react-icons/fa"
import Start from '@/components/start'
import Education from '@/components/education'
import EducationStation from '@/components/education-station'

export default function Home() {
    return (
        <div className="min-h-screen min-w-screen bg-blue-zodiac-900">
            <Head>
                <title>David Pohl</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="px-14">
                <section className="h-screen flex flex-col justify-center py-10">
                    <div>
                        <h1 className="text-6xl font-extrabold text-white text-opacity-70">David Pohl</h1>
                    </div>
                    <div>
                        <h2 className="text-4xl font-bold text-gray-400 text-opacity-70 mt-2">Computer Science Student</h2>
                    </div>
                    <div>
                        <p className="text-lg text-dav-text mt-10">
                            I'm a German Computer Science Student at <span className="text-dav-link">Heidelberg University</span> specializing in <span className="text-dav-link">Natural Language Processing</span> and <span className="text-dav-link">Artificial Intelligence</span>.
                            Currently, I am working on my Bachelor's Thesis.
                        </p>
                    </div>
                </section>
                <section className="h-screen flex flex-col py-10">
                    <div className="flex flex-row items-center">
                        <h1 className="flex items-center text-5xl font-extrabold dark:text-white mr-2 uppercase">education</h1>
                        <div className="flex-grow border-t border-gray-700"></div>
                    </div>

                    <ol className="relative border-l border-gray-200 dark:border-gray-700 mt-20">
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
                                { key: "honors", value: "valedictorian (among approx. 120 graduates)" },
                            ]}
                        />
                    </ol>
                </section>
                <section className="h-screen flex flex-col py-10">
                    <div className="flex flex-row items-center">
                        <h1 className="flex items-center text-5xl font-extrabold dark:text-white mr-2 uppercase">professional</h1>
                        <div className="flex-grow border-t border-gray-700"></div>
                    </div>

                    <ol className="relative border-l border-gray-200 dark:border-gray-700 mt-20">
                        <li className="mb-6 ml-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 uppercase">aug 2021 - feb 2022</time>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white uppercase">T-Systems MMS (Deutsche Telekom)</h3>
                            <h3 className="text-gray-900 dark:text-gray-400 uppercase">software engineering intern</h3>
                            <ul class="max-w-md mt-2 space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                                <li>
                                    Developed a tool for managing the company's server structures
                                </li>
                                <li>
                                    Implemented an automated pipeline for fetching, processing and visualizing the current structure
                                </li>
                                <li>
                                    Intensively worked with the company's internal knowledge base Confluence
                                </li>
                                <li>
                                    Continuously communicated the project's status and results to technical and non-technical colleagues
                                </li>
                            </ul>
                            <div className="flex flex-row gap-1 mt-5">
                                <a href="https://www.python.org/" className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded border dark:border-dav-aquamarine-900 dark:bg-transparent dark:text-dav-aquamarine-500 uppercase transition-all hover:bg-dav-aquamarine-900 hover:text-white">python</a>
                                <a href="https://www.docker.com/" className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded border dark:border-dav-aquamarine-900 dark:bg-transparent dark:text-dav-aquamarine-500 uppercase transition-all hover:bg-dav-aquamarine-900 hover:text-white">docker</a>
                                <a href="https://git-scm.com/" className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded border dark:border-dav-aquamarine-900 dark:bg-transparent dark:text-dav-aquamarine-500 uppercase transition-all hover:bg-dav-aquamarine-900 hover:text-white">git</a>
                                <a href="https://www.ansible.com/" className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded border dark:border-dav-aquamarine-900 dark:bg-transparent dark:text-dav-aquamarine-500 uppercase transition-all hover:bg-dav-aquamarine-900 hover:text-white">ansible</a>
                                <a href="https://concourse-ci.org/" className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded border dark:border-dav-aquamarine-900 dark:bg-transparent dark:text-dav-aquamarine-500 uppercase transition-all hover:bg-dav-aquamarine-900 hover:text-white">concourse</a>
                            </div>
                        </li>
                    </ol>
                </section>
                <section className="h-screen flex flex-col py-10 justify-between">
                    <div className="flex flex-row items-center">
                        <h1 className="flex items-center text-5xl font-extrabold dark:text-white mr-2 uppercase">contact me</h1>
                        <div className="flex-grow border-t border-gray-700"></div>
                    </div>

                    <ol className="relative border-l border-gray-200 dark:border-gray-700 mt-20">
                        <li className="mb-6 ml-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 uppercase">aug 2021 - feb 2022</time>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white uppercase">T-Systems MMS (Deutsche Telekom)</h3>
                            <h3 className="text-gray-900 dark:text-gray-400 uppercase">software engineering intern</h3>
                            <ul class="max-w-md mt-2 space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                                <li>
                                    Developed a tool for managing the company's server structures
                                </li>
                                <li>
                                    Implemented an automated pipeline for fetching, processing and visualizing the current structure
                                </li>
                                <li>
                                    Intensively worked with the company's internal knowledge base Confluence
                                </li>
                                <li>
                                    Continuously communicated the project's status and results to technical and non-technical colleagues
                                </li>
                            </ul>
                            <div className="flex flex-row gap-1 mt-5">
                                <a href="https://www.python.org/" className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded border dark:border-dav-aquamarine-900 dark:bg-transparent dark:text-dav-aquamarine-500 uppercase transition-all hover:bg-dav-aquamarine-900 hover:text-white">python</a>
                                <a href="https://www.docker.com/" className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded border dark:border-dav-aquamarine-900 dark:bg-transparent dark:text-dav-aquamarine-500 uppercase transition-all hover:bg-dav-aquamarine-900 hover:text-white">docker</a>
                                <a href="https://git-scm.com/" className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded border dark:border-dav-aquamarine-900 dark:bg-transparent dark:text-dav-aquamarine-500 uppercase transition-all hover:bg-dav-aquamarine-900 hover:text-white">git</a>
                                <a href="https://www.ansible.com/" className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded border dark:border-dav-aquamarine-900 dark:bg-transparent dark:text-dav-aquamarine-500 uppercase transition-all hover:bg-dav-aquamarine-900 hover:text-white">ansible</a>
                                <a href="https://concourse-ci.org/" className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded border dark:border-dav-aquamarine-900 dark:bg-transparent dark:text-dav-aquamarine-500 uppercase transition-all hover:bg-dav-aquamarine-900 hover:text-white">concourse</a>
                            </div>
                        </li>
                    </ol>
                    <footer className="">
                        <div className="border-t border-gray-700"></div>
                        <a href="https://github.com/7davis" class="flex flex-col items-center gap-1 text-sm text-gray-500 sm:text-center dark:text-gray-400 mt-5 transition-all duration-300 hover:text-dav-aquamarine-300">
                            <FaGithub className="text-lg" /><span>Designed & Built by David Pohl</span>
                        </a>
                    </footer>

                </section>
            </main>
        </div>
    )
}
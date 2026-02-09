import Link from "next/link";
import { JSX } from "react";

const Skills = (): JSX.Element => {
    return (
        <section
            id="skills"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            aria-label="Skills"
        >
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold tracking-widest text-slate-200 uppercase lg:sr-only">
                    Skills
                </h2>
                <p className="mt-2 text-sm leading-normal text-slate-400 lg:sr-only">
                    Core technologies and tools I use to build intuitive and responsive user interfaces.
                </p>
            </div>
            <ul className="mt-2 flex flex-wrap" aria-label="Technologies used:">
                <li className="mt-2 mr-1.5">
                    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs leading-5 font-medium text-teal-300">
                        HTML/CSS
                    </div>
                </li>
                <li className="mt-2 mr-1.5">
                    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs leading-5 font-medium text-teal-300">
                        JavaScript
                    </div>
                </li>
                <li className="mt-2 mr-1.5">
                    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs leading-5 font-medium text-teal-300">
                        React
                    </div>
                </li>
                <li className="mt-2 mr-1.5">
                    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs leading-5 font-medium text-teal-300">
                        Next.js
                    </div>
                </li>
                <li className="mt-2 mr-1.5">
                    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs leading-5 font-medium text-teal-300">
                        Tailwind CSS
                    </div>
                </li>
                <li className="mt-2 mr-1.5">
                    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs leading-5 font-medium text-teal-300">
                        Figma
                    </div>
                </li>
                <li className="mt-2 mr-1.5">
                    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs leading-5 font-medium text-teal-300">
                        Styled Components
                    </div>
                </li>
                <li className="mt-2 mr-1.5">
                    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs leading-5 font-medium text-teal-300">
                        Accessibility (A11y)
                    </div>
                </li>
            </ul>

        </section>
    );
};

export default Skills;

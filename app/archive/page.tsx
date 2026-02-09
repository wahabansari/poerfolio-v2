import Link from "next/link"

const ArchiveProjects = () => {
    return (
        <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
            <a href="#content" className="absolute top-0 left-0 block -translate-x-full rounded bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600 px-4 py-3 text-sm font-bold tracking-widest text-white uppercase focus-visible:translate-x-0">Skip to Content</a>
            <div className="lg:py-24">
                <Link className="group mb-2 inline-flex items-center leading-tight font-semibold text-teal-300" href="/"
                ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="mr-1 h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-2" aria-hidden="true"><path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd"></path></svg>Wahab Ansari</Link>
                <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">All Projects</h1>
                <table id="content" className="mt-12 w-full border-collapse text-left">
                    <thead className="sticky top-0 z-10 border-b border-slate-300/10 bg-slate-900/75 px-6 py-5 backdrop-blur">
                        <tr>
                            <th className="py-4 pr-8 text-sm font-semibold text-slate-200">Year</th>
                            <th className="py-4 pr-8 text-sm font-semibold text-slate-200">Project</th>
                            <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell">Made at</th>
                            <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell">Built with</th>
                            <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 sm:table-cell">Link</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b border-slate-300/10 last:border-none">
                            <td className="py-4 pr-4 align-top text-sm"><div className="translate-y-px">2023</div></td>
                            <td className="py-4 pr-4 align-top leading-snug font-semibold text-slate-200">
                                <div>
                                    <div className="block sm:hidden">
                                        <Link className="group/link inline-flex items-baseline text-base leading-tight font-medium text-slate-200 hover:text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 focus-visible:text-teal-300 sm:hidden" href="https://www.sunhub.com/" target="_blank" rel="noreferrer noopener" aria-label="Sunhub Ecommerce App (opens in a new tab)"
                                        ><span
                                        >Sunhub
                                                <span className="inline-block"
                                                >Ecommerce App<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 group-focus-visible/link:translate-x-1 group-focus-visible/link:-translate-y-1 motion-reduce:transition-none" aria-hidden="true"><path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path></svg></span></span>
                                        </Link>
                                    </div>
                                    <div className="hidden sm:block">Sunhub Ecommerce App</div>
                                </div>
                            </td>
                            <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell"><div className="translate-y-px whitespace-nowrap">Sunhub</div></td>
                            <td className="hidden py-4 pr-4 align-top lg:table-cell">
                                <ul className="flex -translate-y-1.5 flex-wrap">
                                    <li className="my-1 mr-1.5"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs leading-5 font-medium text-teal-300">ReactJS</div></li>
                                    <li className="my-1 mr-1.5"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs leading-5 font-medium text-teal-300">Javascript</div></li>
                                    <li className="my-1 mr-1.5"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs leading-5 font-medium text-teal-300">SCSS</div></li>
                                    <li className="my-1 mr-1.5"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs leading-5 font-medium text-teal-300">Ant Design</div></li>
                                </ul>
                            </td>
                            <td className="hidden py-4 align-top sm:table-cell">
                                <ul className="translate-y-1">
                                    <li className="mb-1 flex items-center">
                                        <Link className="group/link inline-flex items-baseline text-sm text-sm leading-tight font-medium text-slate-200 text-slate-400 hover:text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 focus-visible:text-teal-300" href="https://www.sunhub.com/" target="_blank" rel="noreferrer noopener" aria-label="sunhub.com (opens in a new tab)"
                                        ><span>
                                                <span className="inline-block"
                                                >sunhub.com<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="ml-0.5 inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 group-focus-visible/link:translate-x-1 group-focus-visible/link:-translate-y-1 motion-reduce:transition-none" aria-hidden="true"><path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path></svg></span></span>
                                        </Link>
                                    </li>
                                </ul>
                            </td>
                        </tr>
                        <tr className="border-b border-slate-300/10 last:border-none">
                            <td className="py-4 pr-4 align-top text-sm"><div className="translate-y-px">2022</div></td>
                            <td className="py-4 pr-4 align-top leading-snug font-semibold text-slate-200">
                                <div>
                                    <div className="block sm:hidden">
                                        <Link className="group/link inline-flex items-baseline text-base leading-tight sm:text-sm font-medium text-slate-200 hover:text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 focus-visible:text-teal-300 sm:hidden" href="https://imranjamilmd.com/demo/" target="_blank" rel="noreferrer noopener" aria-label="Imran Jamil MD(opens in a new tab)"
                                        ><span
                                        >Imran Jamil MD
                                                <span className="inline-block"
                                                >Ecommerce App<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 group-focus-visible/link:translate-x-1 group-focus-visible/link:-translate-y-1 motion-reduce:transition-none" aria-hidden="true"><path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path></svg></span></span>
                                        </Link>
                                    </div>
                                    <div className="hidden sm:block">Imran Jamil MD</div>
                                </div>
                            </td>
                            <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell"><div className="translate-y-px whitespace-nowrap">Individual</div></td>
                            <td className="hidden py-4 pr-4 align-top lg:table-cell">
                                <ul className="flex -translate-y-1.5 flex-wrap">
                                    <li className="my-1 mr-1.5"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs leading-5 font-medium text-teal-300">Wordpress</div></li>
                                    <li className="my-1 mr-1.5"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs leading-5 font-medium text-teal-300">UI Design</div></li>
                                    <li className="my-1 mr-1.5"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs leading-5 font-medium text-teal-300">HTML/CSS</div></li>                                </ul>
                            </td>
                            <td className="hidden py-4 align-top sm:table-cell">
                                <ul className="translate-y-1">
                                    <li className="mb-1 flex items-center">
                                        <Link className="group/link inline-flex items-baseline text-sm text-sm leading-tight font-medium text-slate-200 text-slate-400 hover:text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 focus-visible:text-teal-300" href="https://imranjamilmd.com/demo/" target="_blank" rel="noreferrer noopener" aria-label="Imran Jamil MD (opens in a new tab)"
                                        ><span>
                                                <span className="inline-block"
                                                >Imran Jamil MD<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="ml-0.5 inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 group-focus-visible/link:translate-x-1 group-focus-visible/link:-translate-y-1 motion-reduce:transition-none" aria-hidden="true"><path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path></svg></span></span>
                                        </Link>
                                    </li>
                                </ul>
                            </td>
                        </tr>

                        <tr className="border-b border-slate-300/10 last:border-none">
                            <td className="py-4 pr-4 align-top text-sm"><div className="translate-y-px">2021</div></td>
                            <td className="py-4 pr-4 align-top leading-snug font-semibold text-slate-200">
                                <div>
                                    <div className="block sm:hidden">
                                        <Link className="group/link inline-flex items-baseline text-base leading-tight sm:text-sm font-medium text-slate-200 hover:text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 focus-visible:text-teal-300 sm:hidden" href="https://www.behance.net/gallery/108063507/Instavest-Design" target="_blank" rel="noreferrer noopener" aria-label="Instavest Money Exchange App(opens in a new tab)"
                                        ><span
                                        >Instavest Money Exchange App
                                                <span className="inline-block"
                                                ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 group-focus-visible/link:translate-x-1 group-focus-visible/link:-translate-y-1 motion-reduce:transition-none" aria-hidden="true"><path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path></svg></span></span>
                                        </Link>
                                    </div>
                                    <div className="hidden sm:block">Instavest Money Exchange App</div>
                                </div>
                            </td>
                            <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell"><div className="translate-y-px whitespace-nowrap">Upwork</div></td>
                            <td className="hidden py-4 pr-4 align-top lg:table-cell">
                                <ul className="flex -translate-y-1.5 flex-wrap">
                                    <li className="my-1 mr-1.5"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs leading-5 font-medium text-teal-300">Figma</div></li>
                                    <li className="my-1 mr-1.5"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs leading-5 font-medium text-teal-300">Adobe XD</div></li>
                                </ul>
                            </td>
                            <td className="hidden py-4 align-top sm:table-cell">
                                <ul className="translate-y-1">
                                    <li className="mb-1 flex items-center">
                                        <Link className="group/link inline-flex items-baseline text-sm text-sm leading-tight font-medium text-slate-200 text-slate-400 hover:text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 focus-visible:text-teal-300" href="https://www.behance.net/gallery/108063507/Instavest-Design" target="_blank" rel="noreferrer noopener" aria-label="imranjamilmd.com (opens in a new tab)"
                                        ><span>
                                                <span className="inline-block"
                                                >Behance<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="ml-0.5 inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 group-focus-visible/link:translate-x-1 group-focus-visible/link:-translate-y-1 motion-reduce:transition-none" aria-hidden="true"><path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path></svg></span></span>
                                        </Link>
                                    </li>
                                </ul>
                            </td>
                        </tr>

                        <tr className="border-b border-slate-300/10 last:border-none">
                            <td className="py-4 pr-4 align-top text-sm"><div className="translate-y-px">2021</div></td>
                            <td className="py-4 pr-4 align-top leading-snug font-semibold text-slate-200">
                                <div>
                                    <div className="block sm:hidden">
                                        <Link className="group/link inline-flex items-baseline text-base leading-tight sm:text-sm font-medium text-slate-200 hover:text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 focus-visible:text-teal-300 sm:hidden" href="https://www.behance.net/gallery/132202945/Artesian-Software-Consultancy/modules/748521687" target="_blank" rel="noreferrer noopener" aria-label="Artesian Software Consultancy (opens in a new tab)"
                                        ><span
                                        >Artesian Software Consultancy
                                                <span className="inline-block"
                                                ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 group-focus-visible/link:translate-x-1 group-focus-visible/link:-translate-y-1 motion-reduce:transition-none" aria-hidden="true"><path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path></svg></span></span>
                                        </Link>
                                    </div>
                                    <div className="hidden sm:block">Artesian Software Consultancy</div>
                                </div>
                            </td>
                            <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell"><div className="translate-y-px whitespace-nowrap">Upwork</div></td>
                            <td className="hidden py-4 pr-4 align-top lg:table-cell">
                                <ul className="flex -translate-y-1.5 flex-wrap">
                                    <li className="my-1 mr-1.5"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs leading-5 font-medium text-teal-300">Figma</div></li>
                                    <li className="my-1 mr-1.5"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs leading-5 font-medium text-teal-300">Adobe XD</div></li>
                                </ul>
                            </td>
                            <td className="hidden py-4 align-top sm:table-cell">
                                <ul className="translate-y-1">
                                    <li className="mb-1 flex items-center">
                                        <Link className="group/link inline-flex items-baseline text-sm text-sm leading-tight font-medium text-slate-200 text-slate-400 hover:text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 focus-visible:text-teal-300" href="https://www.behance.net/gallery/132202945/Artesian-Software-Consultancy/modules/748521687" target="_blank" rel="noreferrer noopener" aria-label="Artesian Software Consultancy (opens in a new tab)"
                                        ><span>
                                                <span className="inline-block"
                                                >Behance<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="ml-0.5 inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 group-focus-visible/link:translate-x-1 group-focus-visible/link:-translate-y-1 motion-reduce:transition-none" aria-hidden="true"><path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path></svg></span></span>
                                        </Link>
                                    </li>
                                </ul>
                            </td>
                        </tr>


                        <tr className="border-b border-slate-300/10 last:border-none">
                            <td className="py-4 pr-4 align-top text-sm"><div className="translate-y-px">2021</div></td>
                            <td className="py-4 pr-4 align-top leading-snug font-semibold text-slate-200">
                                <div>
                                    <div className="block sm:hidden">
                                        <Link className="group/link inline-flex items-baseline text-base leading-tight sm:text-sm font-medium text-slate-200 hover:text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 focus-visible:text-teal-300 sm:hidden" href="https://www.talhaestate.com/" target="_blank" rel="noreferrer noopener" aria-label="Talha Estate (opens in a new tab)"
                                        ><span
                                        >Talha Estate
                                                <span className="inline-block"
                                                >Talha Estate<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 group-focus-visible/link:translate-x-1 group-focus-visible/link:-translate-y-1 motion-reduce:transition-none" aria-hidden="true"><path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path></svg></span></span>
                                        </Link>
                                    </div>
                                    <div className="hidden sm:block">Talha Estate</div>
                                </div>
                            </td>
                            <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell"><div className="translate-y-px whitespace-nowrap">Out Sourced</div></td>
                            <td className="hidden py-4 pr-4 align-top lg:table-cell">
                                <ul className="flex -translate-y-1.5 flex-wrap">
                                    <li className="my-1 mr-1.5"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs leading-5 font-medium text-teal-300">Wordpress</div></li>
                                    <li className="my-1 mr-1.5"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs leading-5 font-medium text-teal-300">UI Design</div></li>
                                    <li className="my-1 mr-1.5"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs leading-5 font-medium text-teal-300">Custom Theme</div></li>
                                    <li className="my-1 mr-1.5"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs leading-5 font-medium text-teal-300">SASS/SCSS</div></li>
                                </ul>
                            </td>
                            <td className="hidden py-4 align-top sm:table-cell">
                                <ul className="translate-y-1">
                                    <li className="mb-1 flex items-center">
                                        <Link className="group/link inline-flex items-baseline text-sm text-sm leading-tight font-medium text-slate-200 text-slate-400 hover:text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 focus-visible:text-teal-300" href="https://www.talhaestate.com/" target="_blank" rel="noreferrer noopener" aria-label="Talha Estate (opens in a new tab)"
                                        ><span>
                                                <span className="inline-block"
                                                >Talha Estate<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="ml-0.5 inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 group-focus-visible/link:translate-x-1 group-focus-visible/link:-translate-y-1 motion-reduce:transition-none" aria-hidden="true"><path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path></svg></span></span>
                                        </Link>
                                    </li>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ArchiveProjects
import { Footer } from "@/components/Footer";
import { Info } from "@/components/Info";
import { QuickLinks } from "@/components/QuickLinks";
import { Social } from "@/components/Social";
import AboutMe from "@/sections/AboutMe";
import { Experience } from "@/sections/Experience";
import { Projects } from "@/sections/Projects";
import { Writting } from "@/sections/Writting";
import Skills from "@/sections/Skills";

export default function Home() {
  return (
    <>

      <div className="group/spotlight relative">
        <div className="mx-auto min-h-screen max-w-7xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
          <a
            href="#content"
            className="absolute top-0 left-0 block -translate-x-full rounded bg-linear-to-br from-teal-400 via-blue-500 to-purple-600 px-4 py-3 text-sm font-bold tracking-widest text-white uppercase focus-visible:translate-x-0"
          >
            Skip to Content
          </a>
          <div className="lg:flex lg:justify-between lg:gap-4">
            <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
              <div>
                {/* INFO */}
                <Info />
                {/* QUICK LINKS */}
                <QuickLinks />
              </div>
              {/* SOCIAL ICONS */}
              <Social />
            </header>
            <main id="content" className="pt-24 lg:w-[52%] lg:py-24">
              {/* ABOUT ME */}
              <AboutMe />
              {/* EXPERIENCE */}
              <Experience />
              {/* PROJECTS */}
              <Projects />
              {/* WRITING
                <Writting /> */}
              {/* SKills */}
              {/* <Skills /> */}
              {/* FOOTER */}
              <Footer />
            </main>
          </div>
        </div>
      </div>

    </>
  );
}

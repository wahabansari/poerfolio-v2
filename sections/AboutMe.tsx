import Link from "next/link";
import { JSX } from "react";

const AboutMe = (): JSX.Element => {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="About me"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold tracking-widest text-slate-200 uppercase lg:sr-only">
          About
        </h2>
      </div>
      <div>
        <p className="mb-4">
          I build fast, accessible, and user-focused web experiences that turn great
          design into great products. My focus is on creating interfaces that are
          visually polished, scalable, performant, and easy to maintain.
        </p>

        <p className="mb-4">
          I’m a frontend developer specializing in pixel-perfect, responsive UI and
          clean, reusable code. Currently, I work at
          <Link
            className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
            href="https://www.sunhub.com/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="SunHub (opens in a new tab)"
          >
            {" "}
            Sunhub
          </Link>
          , where I contribute to the component library and design system, partnering
          closely with designers and engineers to ensure consistency, usability, and
          accessibility across products.
        </p>

        <p className="mb-4">
          With experience in startup and product-driven environments, I’ve delivered
          real-world, API-powered applications and complex frontend systems. These
          experiences have shaped my approach to building reliable, inclusive, and
          high-impact digital solutions that support both users and business goals.
        </p>

        <p>
          Outside of work, you’ll usually find me exploring new technologies, improving
          my craft, and working on personal projects that challenge me to grow as a
          developer.
        </p>

      </div>
    </section>
  );
};

export default AboutMe;

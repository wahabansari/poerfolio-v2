import Link from "next/link";

const Footer = (): React.ReactElement => {
  return (
    <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
      <p>
        Let’s build something amazing together —{" "}
        <Link
          href="mailto:wahab0421690@gmail.com"
          className="inline-block underline decoration-slate-400 underline-offset-4 transition-colors duration-200 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
        >
          Get in touch!
        </Link>
      </p>
    </footer>
  );
};

export { Footer };

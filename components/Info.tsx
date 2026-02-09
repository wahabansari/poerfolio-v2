import { JSX } from "react";

export const Info = (): JSX.Element => {
  return (
    <>
      <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
        <a href="/">M. Wahab Ansari</a>
      </h1>
      <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
        Frontend Developer
      </h2>
      <p className="mt-4 max-w-xs leading-normal">
        I build accessible, pixel-perfect digital experiences for the web.
      </p>
    </>
  );
};

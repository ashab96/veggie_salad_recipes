import React from "react";
import { urlFor } from "../../../lib/client";

const HomeHero = ({ homepage }) => {
  return (
    <div className="relative">
      <div className="text-center md:text-left md:absolute md:font-brandon font-[1000] text-[32px] md:text-[48px] text-black-300 md:text-black-10 leading-[2.5rem] md:leading-[3.75rem] md:pl-16 py-4 md:w-3/4 lg:w-3/4 flex flex-col flex-nowrap items-start justify-center md:bg-gradient-to-r from-black-900 to-black-10/0 md:top-0 md:bottom-0 left-0">
        <h1>{homepage.h1}</h1>
      </div>
      {/* <img
        className="pt-4 md:pt-0"
        alt={homepage.imagealt}
        src={urlFor(homepage.heroimage)}
      ></img> */}
      <img
        className="pt-4 md:pt-0 w-full"
        alt={homepage.imagealt}
        src={urlFor(homepage.gif)}
      ></img>
    </div>
  );
};

export default HomeHero;

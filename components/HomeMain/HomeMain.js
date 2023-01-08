import React from "react";
import HomeHero from "./HomeHero/HomeHero";
import TopRecipes from "./TopRecipes.js/TopRecipes";
const HomeMain = ({ homepage, recipefirst3Data }) => {
  return (
    <div className="px-6 md:px-12 lg:px-14">
      <div className="pt-6 md:pt-8 lg:px-16">
        <HomeHero homepage={homepage.length && homepage[0]} />
      </div>
      <div className="pt-6 md:pt-16">
        <TopRecipes recipefirst3Data={recipefirst3Data} />
      </div>
    </div>
  );
};

export default HomeMain;

import React from "react";
import RecipesHero from "./RecipesHero/RecipesHero";
import SaladsList from "./SaladsList/SaladsList";

const RecipesMain = ({ recipepage, saladlistdata }) => {
  return (
    <div className="px-6 md:px-12 lg:px-14">
      <div className="pt-6 md:pt-8 lg:px-16">
        <RecipesHero recipepage={recipepage.length && recipepage[0]} />
      </div>
      <div className="pt-8 md:pt-16">
        <SaladsList saladlistdata={saladlistdata} />
      </div>
    </div>
  );
};

export default RecipesMain;

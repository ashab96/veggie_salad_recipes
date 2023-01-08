import React from "react";
import SaladDetailsHero from "./SaladDetailsHero/SaladDetailsHero";
import SaladRecipeContent from "./SaladRecipeContent/SaladRecipeContent";

const SaladDetailsMain = ({ recipedetails }) => {
  return (
    <div className="px-6 md:px-20 lg:px-28">
      <div className="pt-8 md:pt-10">
        <SaladDetailsHero recipedetails={recipedetails} />
      </div>
      <div className="pt-8 md:pt-10">
        <SaladRecipeContent recipedetails={recipedetails} />
      </div>
    </div>
  );
};

export default SaladDetailsMain;

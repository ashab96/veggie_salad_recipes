import React from "react";
import { urlFor } from "../../../lib/client";

const SaladDetailsHero = ({ recipedetails }) => {
  return (
    <div>
      <div className="text-center font-[1000] text-[32px] md:text-[48px] text-green-400 leading-[2.5rem] md:leading-[3.75rem] py-4">
        {/* <h1>Kosambari Recipe | Kosambari Salad | Moong Dal Salad</h1> */}
        <h1>{recipedetails.h1}</h1>
      </div>
      <div className="pt-4 md:pt-8 md:px-2">
        <img
          className="rounded-md md:h-96 ml-auto mr-auto"
          alt={recipedetails.imagealt}
          // src="https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_1280,ar_16:9/v1/img/recipes/53/91/93/UU8SBx95TMuhIsAEKkg9_shishitos3.jpg"
          src={urlFor(recipedetails.image)}
        ></img>
      </div>
    </div>
  );
};

export default SaladDetailsHero;

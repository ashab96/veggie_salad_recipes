import React from "react";
import Link from "next/link";
import { urlFor } from "../../../lib/client";

const SaladsList = ({ saladlistdata }) => {
  return (
    <div>
      <div>
        <h2 className="text-black-300 font-semibold text-center text-[26px] md:text-[32px] leading-[2rem] md:leading-[2.25rem]">
          Collection of Vegetarian Salad Recipes from around the World. Salads
          are one of the healthiest food options you can add to your meals.
        </h2>
      </div>
      <div className="pt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-12 lg:gap-16">
          {saladlistdata?.map((salad) => (
            <Link
              key={salad._id}
              href={`/${salad.slug.current}`}
              className="mt-6 md:mt-0 flex flex-col flex-nowrap bg-black-10 rounded-xl shadow-sm shadow-light_green-600 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-[1.02] duration-100 hover:shadow-green-400"
            >
              <img
                className="rounded-xl h-52"
                alt={salad.imagealt}
                src={urlFor(salad.image)}
              ></img>
              <h3 className="p-4 text-green-300 font-brandon font-bold text-[20px] leading-[2rem] tracking-[0.02em] uppercase">
                {salad.h1}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SaladsList;

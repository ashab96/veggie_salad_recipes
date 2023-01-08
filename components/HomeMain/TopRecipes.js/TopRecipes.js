import React from "react";
import Link from "next/link";
import { urlFor } from "../../../lib/client";

const ToprRecipes = ({ recipefirst3Data }) => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h2 className="text-black-300 font-brandon font-bold text-[26px] md:text-[32px] leading-[2rem] md:leading-[3rem]">
          TOP SALADS
        </h2>
        <Link
          href="/recipes"
          className="hidden md:block text-green-800 hover:text-yellow-50 font-semibold text-[16px] leading-[1.6rem]"
        >
          View All
        </Link>
      </div>
      <div className="md:pt-4">
        <div className="md:flex md:gap-8 lg:gap-20">
          {recipefirst3Data?.map((recipe) => (
            <Link
              key={recipe._id}
              href={`/${recipe.slug.current}`}
              className="mt-10 md:mt-0 flex flex-col flex-nowrap bg-black-10 rounded-xl shadow-sm shadow-light_green-600 md:w-1/3 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-[1.02] duration-100 hover:shadow-green-400"
            >
              <img
                className="rounded-xl md:h-36 lg:h-52"
                src={urlFor(recipe.image)}
                alt={recipe.imagealt}
              ></img>
              <h3 className="p-4 text-green-400 font-brandon font-bold text-[20px] leading-[2rem] tracking-[0.02em] uppercase">
                {recipe.h1}
              </h3>
            </Link>
          ))}
          {/* <Link
            href="/"
            className="mt-6 md:mt-0 flex flex-col flex-nowrap bg-black-10 rounded-xl shadow-sm shadow-light_green-600 lg:w-1/3 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-[1.02] duration-100 hover:shadow-green-400"
          >
            <img
              className="rounded-xl "
              src="https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_500,ar_4:3/v1/img/recipes/53/47/3/wnQFB0niQ863e7Vnfhch_0S9A7844.jpg"
            ></img>
            <h3 className="p-4 text-black-900 font-brandon font-bold text-[20px] leading-[2rem] tracking-[0.02em]">
              ULTIMATE VEGETARIAN BROCCLI SALAD
            </h3>
          </Link>
          <Link
            href="/"
            className="mt-6 md:mt-0 flex flex-col flex-nowrap bg-black-10 rounded-xl shadow-sm shadow-light_green-600 lg:w-1/3 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-[1.02] duration-100 hover:shadow-green-400"
          >
            <img
              className="rounded-xl"
              src="https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_500,ar_4:3/v1/img/recipes/53/47/3/wnQFB0niQ863e7Vnfhch_0S9A7844.jpg"
            ></img>
            <h3 className="p-4 text-black-900 font-brandon font-bold text-[20px] leading-[2rem] tracking-[0.02em]">
              ULTIMATE VEGETARIAN BROCCLI SALAD
            </h3>
          </Link>
          <Link
            href="/"
            className="mt-6 md:mt-0 flex flex-col flex-nowrap bg-black-10 rounded-xl shadow-sm shadow-light_green-600 lg:w-1/3 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-[1.02] duration-100 hover:shadow-green-400"
          >
            <img
              className="rounded-xl"
              src="https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_500,ar_4:3/v1/img/recipes/53/47/3/wnQFB0niQ863e7Vnfhch_0S9A7844.jpg"
            ></img>
            <h3 className="p-4 text-black-900 font-brandon font-bold text-[20px] leading-[2rem] tracking-[0.02em]">
              ULTIMATE VEGETARIAN BROCCLI SALAD
            </h3>
          </Link> */}
        </div>
      </div>
      <div className="md:hidden pt-6 text-center">
        <Link
          href="/recipes"
          className="text-green-600 hover:text-yellow-50  font-semibold text-[16px] leading-[1.6rem]"
        >
          See all Recipes
        </Link>
      </div>
    </div>
  );
};

export default ToprRecipes;

import Link from "next/link";
import React from "react";
import SimilarSaladList from "../SimilarSaladsList/SimilarSaladList";
import { PortableText } from "@portabletext/react";

const components = {
  listItem: {
    // Ex. 1: customizing common list types
    bullet: ({ children }) => (
      <li className="text-black-700 font-normal text-[18px] leading-9 pt-2 list-disc">
        {children}
      </li>
    ),
    number: ({ children }) => (
      <li className="text-black-700 font-normal text-[18px] leading-9 pt-2 list-decimal">
        {children}
      </li>
    ),
  },
  marks: {
    // link: ({ value, children }) => (
    //   <a href={value?.href} className="text-green-300 hover:text-yellow-400">
    //     {children}
    //   </a>
    // ),
    link: ({ value, children }) => {
      const target = (value?.href || "").startsWith("http")
        ? "_blank"
        : undefined;
      return (
        <a
          href={value?.href}
          target={target}
          rel={target === "_blank" && "noindex nofollow"}
          className="text-green-300 hover:text-yellow-400"
        >
          {children}
        </a>
      );
    },
  },
  block: {
    normal: ({ children }) => (
      <p className="text-black-700 font-normal text-[18px] leading-10">
        {children}
      </p>
    ),
    h4: ({ children }) => (
      <h4 className="text-black-700 font-medium tracking-wide text-[24px] leading-8 pt-4">
        {children}
      </h4>
    ),
  },
};

const SaladRecipeContent = ({ recipedetails }) => {
  return (
    <div>
      <div>
        {/* <p className="text-black-700 font-normal text-[18px] leading-9">
          {recipedetails.intro}
        </p> */}
        <PortableText
          value={recipedetails.intro}
          components={components}
        ></PortableText>
      </div>
      <div className="pt-8 md:pt-10">
        <div className="grid grid-cols-1 gap-8 md:gap-10">
          <div>
            <h3 className="text-black-700 font-medium tracking-wide text-[26px] leading-9">
              INGREDIENTS
            </h3>
            {/* <ul className="px-4">
              {recipedetails.ingredients?.map((ingredient, i) => (
                <li
                  key={i}
                  className="text-black-700 font-normal text-[18px] leading-9 pt-2 list-disc"
                >
                  {ingredient.children[0].text}
                </li>
              ))}
            </ul> */}
            <div className="px-4">
              <PortableText
                value={recipedetails.ingredients}
                components={components}
              ></PortableText>
            </div>
          </div>
          <div>
            <h3 className="text-black-700 font-medium tracking-wide text-[26px] leading-8">
              DIRECTIONS
            </h3>
            {/* <ol className="px-4">
              {recipedetails.directions?.map((direction, i) => (
                <li
                  key={i}
                  className="text-black-700 font-normal text-[18px] leading-9 pt-2 list-decimal"
                >
                  {direction.children[0].text}
                </li>
              ))}
            </ol> */}
            <div className="px-4">
              <PortableText
                value={recipedetails.directions}
                components={components}
              ></PortableText>
            </div>
          </div>
        </div>
        <div className="pt-10 md:pt-14 ml-auto mr-auto">
          <iframe
            className="ml-auto mr-auto md:w-[32rem] md:h-[18rem]"
            src={`${recipedetails.videoUrl[0]}`}
          ></iframe>
        </div>
        <div className="pt-10 md:pt-14">
          {/* <p className="text-black-700 font-normal text-[18px] leading-10">
            {recipedetails.conclusion}
          </p> */}
          <PortableText
            value={recipedetails.conclusion[0]}
            components={components}
          ></PortableText>
        </div>
      </div>
      <div className="pt-8 md:pt-10">
        <SimilarSaladList similarsaladlist={recipedetails.similarSalads} />
      </div>
    </div>
  );
};

export default SaladRecipeContent;

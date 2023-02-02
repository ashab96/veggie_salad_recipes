import React from "react";
import Head from "next/head";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import RecipesMain from "../components/RecipesMain/RecipesMain";
import { client, urlFor } from "../lib/client";
import { favicon } from "../constants/IconUrl";

const recipes = ({ recipespagedata, saladlist }) => {
  return (
    <>
      <Head>
        <title>{recipespagedata[0].title}</title>
        <meta
          content={recipespagedata[0].metadescription}
          name="description"
        ></meta>
        <meta content={recipespagedata[0].title} property="og:title"></meta>
        <meta
          content={recipespagedata[0].metadescription}
          property="og:description"
        ></meta>
        <meta
          content={urlFor(recipespagedata[0].ogimage)}
          property="og:image"
        ></meta>
        <meta property="og:type" content="website"></meta>
        <meta property="og:site_name" content="Vegetarian Salad Recipes"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={favicon} />
      </Head>
      <div>
        <NavBar />
        <RecipesMain
          recipepage={recipespagedata.length && recipespagedata}
          saladlistdata={saladlist.length && saladlist}
        />
        <div className="pt-6 md:pt-8">
          <Footer />
        </div>
      </div>
    </>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "recipesherosection"]';
  const recipespagedata = await client.fetch(query);

  const recipequery =
    '*[_type == "saladrecipe"] | order(_updatedAt desc){ _id,slug,image,imagealt,h1}';
  const saladlist = await client.fetch(recipequery);

  return {
    props: { recipespagedata, saladlist },
  };
};

export default recipes;

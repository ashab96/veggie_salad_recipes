import React from "react";
import Head from "next/head";
import { client, urlFor } from "../lib/client";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import SaladDetailsMain from "../components/SaladDetailsMain/SaladDetailsMain";
import { favicon } from "../constants/IconUrl";
import { format } from "date-fns";

const RecipeDetails = ({ recipedetails, similarsalad }) => {
  // console.log(format(new Date(recipedetails._createdAt), "dd MMMM yyyy"));
  // console.log(recipedetails._createdAt);
  return (
    <>
      <Head>
        <title>{recipedetails.title}</title>
        <meta content={recipedetails.meta} name="description"></meta>
        <meta content={recipedetails.title} property="og:title"></meta>
        <meta content={recipedetails.meta} property="og:description"></meta>
        <meta content={urlFor(recipedetails.image)} property="og:image"></meta>
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="200" />
        {/* <meta property="og:type" content="website"></meta> */}
        <meta property="og:site_name" content="Vegetarian Salad Recipes"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={favicon} />
      </Head>
      <div>
        <NavBar />
        <SaladDetailsMain recipedetails={recipedetails} />
        <div className="pt-6 md:pt-8">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default RecipeDetails;

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "saladrecipe" && slug.current == '${slug}'][0] {...,similarSalads[]->{_id,slug,image,imagealt,h1}}`;
  const recipedetails = await client.fetch(query);

  // const querysimilarsalad = `*[_type == "saladrecipe" && slug.current == '${slug}'][0] {...,similarSalads[]->}`;
  // const similarsalad = await client.fetch(querysimilarsalad);

  return {
    props: { recipedetails },
    revalidate: 10,
  };
};

export const getStaticPaths = async () => {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: "blocking", //indicates the type of fallback
  };
};

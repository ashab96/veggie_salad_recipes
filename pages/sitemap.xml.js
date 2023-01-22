import React from "react";
import * as fs from "fs";
import { client, urlFor } from "../lib/client";

const Sitemap = () => {
  return null;
};

export const getServerSideProps = async ({ res }) => {
  const BASE_URL = process.env.PUBCLIC_URL || "http://localhost:3000";

  const staticPaths = fs
    .readdirSync("pages")
    .filter((staticPage) => {
      return ![
        "api",
        "[slug].js",
        "_app.js",
        "_document.js",
        "404.js",
        "sitemap.xml.js",
      ].includes(staticPage);
    })
    .map((staticPagePath) => {
      return `${BASE_URL}/${staticPagePath}`;
    });

  // const products = await getAllProducts() // some remote API call maybe!
  const recipequery = '*[_type == "saladrecipe"] | order(_updatedAt desc)';
  const saladlist = await client.fetch(recipequery);
  const dynamicPaths = saladlist.map((singleSalad) => {
    return `${BASE_URL}/${singleSalad.slug.current}`;
  });

  const allPaths = [...dynamicPaths];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
    <loc>https://veggiesaladrecipes.com/</loc>
    <lastmod>2023-01-16T03:29:04+00:00</lastmod>
    <priority>1.00</priority>
  </url>
  <url>
    <loc>https://veggiesaladrecipes.com/recipes</loc>
    <lastmod>2023-01-16T03:29:04+00:00</lastmod>
    <priority>0.80</priority>
  </url>
      ${allPaths
        .map((url) => {
          return `
            <url>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>1.0</priority>
              <priority>1.0</priority>
            </url>
          `;
        })
        .join("")}
    </urlset>
`;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;

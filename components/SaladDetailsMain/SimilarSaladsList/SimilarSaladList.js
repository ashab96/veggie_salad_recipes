import React from "react";
import Link from "next/link";
import { urlFor } from "../../../lib/client";
import Image from "next/image";

const SimilarSaladList = ({ similarsaladlist }) => {
  return (
    <div>
      <h3 className="text-green-400 font-medium tracking-wide text-[26px] leading-8">
        YOU&apos;LL ALSO LOVE
      </h3>
      <div className="pt-4 md:pt-10 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-12 lg:gap-16">
          {similarsaladlist?.map((salad) => (
            <Link
              key={salad._id}
              href={`/${salad.slug.current}`}
              className="mt-6 md:mt-0 flex flex-col flex-nowrap bg-black-10 rounded-xl shadow-sm shadow-light_green-600 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-[1.02] duration-100 hover:shadow-green-400"
            >
              {/* <img
                className="rounded-xl h-52"
                alt={salad.imagealt}
                src={urlFor(salad.image)}
              ></img> */}
              <Image
                className="rounded-xl h-52"
                alt={salad.imagealt}
                src={urlFor(salad.image).url()}
                width={500}
                height={500}
              />
              <h3 className="p-4 text-black-900 font-brandon font-bold text-[20px] leading-[2rem] tracking-[0.02em] uppercase">
                {salad.h1}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SimilarSaladList;

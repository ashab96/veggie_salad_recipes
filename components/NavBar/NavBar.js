import React, { useState } from "react";
import { logo } from "../../constants/IconUrl";
import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky z-10 font-brandon font-medium top-0 text-green-800 text-[19px] bg-green-30 rounded-md backdrop-filter backdrop-blur-xl bg-opacity-30 border border-gray-100">
      <div className=" px-6 md:px-12 lg:px-14">
        <nav className="flex justify-between flex-wrap">
          <Link href="/">
            {/* <img
              src={logo}
              alt="Veggie-Salads-Logo"
              className="w-36 my-3 h-auto"
            /> */}
            <Image
              src={logo}
              alt="Veggie-Salads-Logo"
              className="w-36 my-3 h-auto"
              width={500}
              height={500}
            />
          </Link>
          <div className="block lg:hidden">
            <button
              id="nav-toggle"
              className=" px-3 py-2 mt-6 border-[1.5px] rounded  border-green-400 hover:border-green-200 flex items-center"
              onClick={() => setOpen(!open)}
            >
              <svg
                className="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div
            className={`${
              open ? "block" : "hidden"
            } w-full lg:flex lg:items-center flex-grow lg:w-auto`}
          >
            <ul className="lg:flex justify-end flex-1 items-center">
              <li className="lg:mr-4 lg:m-5 my-3 ml-2">
                <Link href="/recipes" className="hover:text-yellow-50">
                  Recipes
                </Link>
              </li>
              {/* <li className="lg:mr-4 lg:m-5 my-4 ml-2">
                <Link href="/listicles" className="hover:hover:text-yellow-50">
                  Listicles
                </Link>
              </li> */}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;

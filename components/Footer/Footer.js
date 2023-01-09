import React from "react";
import { logo } from "../../constants/IconUrl";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-light_green-40 h-44 text-green-800 font-brandon font-medium text-[14px]">
      <div className="px-6 md:px-12 lg:px-14">
        <div>
          <Link className="flex " href="/">
            {/* <img
              src={logo}
              alt="veggie-Salads-Logo"
              className="w-36 my-3 h-auto mt-12"
            /> */}
            <Image
              src={logo}
              alt="veggie-Salads-Logo"
              className="w-36 my-3 h-auto mt-12"
              width={500}
              height={500}
            />
          </Link>
          <div className="py-2 pl-1">
            Copyright © {new Date().getFullYear()} Veggie Salads. All rights
            reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

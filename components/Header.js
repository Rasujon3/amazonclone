import React from "react";
import Image from "next/image";
import logo from "../public/amazon_PNG11.png";
import { SearchIcon, ShoppingCartIcon } from "@heroicons/react/solid";

const Header = () => {
  return (
    <header>
      {/* Top Header */}
      <div className="bg-[#232F3E] flex items-center p-1 flex-grow py-2">
        {/* Image */}
        <div className="flex mt-2 items-center flex-grow sm:flex-grow-0">
          <Image
            src={logo}
            width={150}
            height={40}
            alt="Logo Image"
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>
        {/* Search */}
        <div className="hidden sm:flex items-center h-10 cursor-pointer flex-grow rounded-md bg-yellow-400 hover:bg-yellow-500">
          <input
            type="text"
            className="p-2 h-full flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
          />
          <SearchIcon className="h-12 p-4" />
        </div>

        {/* Other Menu */}
        <div className="text-white flex items-center text-xs space-x-8 whitespace-nowrap relative mx-6">
          <div className="relative link">
            <p className="hover:underline">Sign In</p>
            <br />
            <span className="absolute -bottom-3 bg-yellow-400 text-center cursor-pointer w-12 text-black font-bold px-1 h-5">
              Log Out
            </span>
          </div>
          <div className="link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>
          <div className="link relative flex items-center">
            <span className="absolute top-0 right-0 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">
              0
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="hidden md:inline font-extrabold md:text-sm mt-2">
              Basket
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Header */}
      <div></div>
    </header>
  );
};

export default Header;
import React from "react";
import KnifeForkIcon from "../assets/Icons/KnifeForkIcon";
import BagIcon from "../assets/Icons/BagIcon";
import ShopIcon from "../assets/Icons/ShopIcon";

function Footer() {
  return (
    <div className="w-full flex justify-center mb-12">
      <div className="max-w-7xl w-full bg-gray-800 p-14 rounded-3xl text-white">
        <p className="font-bold text-5xl">We Fullfil</p>
        <div className="mt-20 grid grid-cols-4 gap-12">
          <div className="flex flex-col items-center justify-center">
            <KnifeForkIcon />
            <p>Restaurants</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <BagIcon />
            <p>Retail</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <ShopIcon />
            <p>Supermarkets</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <KnifeForkIcon />
            <p>Restaurants</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <KnifeForkIcon />
            <p>Restaurants</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <KnifeForkIcon />
            <p>Restaurants</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <KnifeForkIcon />
            <p>Restaurants</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <KnifeForkIcon />
            <p>Restaurants</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

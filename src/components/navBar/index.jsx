import React from "react";
import {AiOutlineMenu} from "react-icons/ai";

function Navbar() {
  return (
    <div className="max-w-[1600px] mx-auto flex justify-between items-center p-1">
      <div className="flex items-center">
        <div className="cursor-pointer ">
         <AiOutlineMenu size={30}/>
        </div>
        <h1 className="text-2xl px-2 sm:text-3xl lg:text-4xl">
          Tasty <span className="font-bold">GO</span>
        </h1>
        <div className="hidden sm:flex items-center bg-gray-300 rounded-full p-1 text-[15px] ">
          <p className="bg-black rounded-full text-white p-1">Delivery</p>
          <p className="px-2">Pickup</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
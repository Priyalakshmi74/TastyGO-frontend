import React from "react";
import {AiOutlineMenu, AiOutlineSearch} from "react-icons/ai";

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
      <div className="flex items-center ml-10 rounded-full bg-gray-200 p-1 w-[200px] sm:w-[400px]">
            <AiOutlineSearch size={20}/>
            <input type="text" className="p-1 w-full bg-transparent focus:outline-none" placeholder="Search"/>
        </div>
    </div>
  );
}

export default Navbar;
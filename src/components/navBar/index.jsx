import React from "react";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
function Navbar() {
  return (
    <div className="max-w-[1600px] mx-auto flex justify-between items-center p-1">
      <div className="flex items-center">
        <div className="cursor-pointer ">
          <AiOutlineMenu size={30} />
        </div>
        <h1 className="text-2xl px-4 sm:text-3xl lg:text-4xl">
          Tasty <span className="font-bold">GO</span>
        </h1>
        <div className="hidden sm:flex items-center bg-gray-300 rounded-full  text-[15px] ">
          <p className="bg-black rounded-full text-white p-1 px-2">Delivery</p>
          <p className="px-2">Pickup</p>
        </div>
      </div>
      <div className="flex items-center rounded-full bg-gray-200 p-1 w-[200px] sm:w-[400px] lg:w-[500px] px-2 ml-[600px]">
        <AiOutlineSearch size={20} />
        <input
          type="text"
          className="p-1 w-full bg-transparent focus:outline-none"
          placeholder="Search"
        />
      </div>
      <button className="hidden items-center bg-black text-white  md:flex rounded-full p-1 px-3 mr-0">
        <BsFillCartFill size={20} className="mr-2" />
        Cart
      </button>
    </div>
  );
}

export default Navbar;

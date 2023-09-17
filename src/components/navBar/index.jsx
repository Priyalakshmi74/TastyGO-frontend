import React from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { FaWallet, FaUserFriends } from "react-icons/fa";
import { MdFavorite, MdFoodBank, MdHelp } from "react-icons/md";

function Navbar() {

  const [nav, setNav] = React.useState(false);

  const handleNavToggle = () => {
    setNav(!nav);
  }

  return (
    <div className="max-w-[1600px] mx-auto flex justify-between items-center p-1">
      <div className="flex items-center">
        <div className="cursor-pointer ">
          <AiOutlineMenu size={30} onClick={handleNavToggle} />
        </div>
        <h1 className="text-2xl px-4 sm:text-3xl lg:text-4xl flex items-center">
          Tasty
          <span className="font-bold ml-1 flex items-center">
            G
            <span>
              <MdFoodBank size={32} className="rounded-full" />
            </span>
          </span>
        </h1>

        <div className="hidden sm:flex items-center bg-gray-300 rounded-full  text-[15px] ml-10">
          <p className="bg-black rounded-full text-white p-1 px-2">Delivery</p>
          <p className="px-2">Pickup</p>
        </div>
      </div>
      <div className="flex items-center rounded-full bg-gray-200 p-1 w-[200px] sm:w-[400px] lg:w-[500px] px-2 ">
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
      {nav ? (
        <div className="bg-black/70 fixed top-0 left-0 w-full h-screen z-10"></div>
      ) : null}
      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        }
      >
        <AiOutlineClose
          size={30}
          className="absolute right-4 top-4 cursor-pointer"
          onClick={handleNavToggle}
        />
        <h1 className="text-2xl px-4 flex items-center mt-6 text-semi-bold">
          Tasty
          <span className="font-bold ml-1 flex items-center">
            G
            <span>
              <MdFoodBank size={30} className="rounded-full" />
            </span>
          </span>
        </h1>

        <nav>
          <ul className="flex flex-col p-4 text-gray-900">
            <li className="text-[20px] flex  py-4 ">
              <TbTruckDelivery size={25} className="mr-4" /> Orders
            </li>
            <li className="text-[20px] flex  py-4 ">
              <FaWallet size={25} className="mr-4" /> Wallet
            </li>
            <li className="text-[20px] flex  py-4 ">
              <MdFavorite size={25} className="mr-4" /> Favorites
            </li>
            <li className="text-[20px] flex  py-4 ">
              <MdHelp size={25} className="mr-4" /> Help
            </li>
            <li className="text-[20px] flex  py-4 ">
              <FaUserFriends size={25} className="mr-4" /> Invite friends
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;

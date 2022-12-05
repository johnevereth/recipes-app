import React from "react";
import { Link } from "react-router-dom";
import { FaBirthdayCake } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="flex fixed top-0 left-0 w-screen bg-melon z-10">
      <Link
        className="bg-seashell hover:bg-black text-black hover:text-white slant w-[20%] h-16 flex justify-center items-center mr-auto"
        to="/"
      >
        <FaBirthdayCake className="p-1 text-5xl" />
      </Link>
      <div className="w-[75%] flex flex-row justify-around text-white font-playfair tracking-widest font-medium mr-10">
        <Link
          className="w-[100%] h-16 other-slant hover:bg-seashell hover:text-black flex justify-center items-center"
          to="/all"
        >
          All
        </Link>

        <Link
          className="w-[100%] h-16 other-slant hover:bg-seashell hover:text-black flex justify-center items-center"
          to="/baking"
        >
          Baking
        </Link>

        <Link
          className="w-[100%] h-16 other-slant hover:bg-seashell hover:text-black flex justify-center items-center"
          to="/cakes"
        >
          Cakes
        </Link>

        <Link
          className="w-[100%] h-16 other-slant hover:bg-seashell hover:text-black flex justify-center items-center"
          to="/cookies"
        >
          Cookies
        </Link>

        <Link
          className="w-[100%] h-16 other-slant hover:bg-seashell hover:text-black flex justify-center items-center"
          to="/dinners"
        >
          Dinners
        </Link>

        <Link
          className="w-[100%] h-16 other-slant hover:bg-seashell hover:text-black flex justify-center items-center"
          to="/fillings"
        >
          Fillings
        </Link>

        <Link
          className="w-[100%] h-16 other-slant hover:bg-seashell hover:text-black flex justify-center items-center"
          to="/soups"
        >
          Soups
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

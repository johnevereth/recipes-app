import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBirthdayCake } from "react-icons/fa";

const Navbar = () => {
  const location = useLocation();

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
          className={`w-[100%] h-16 other-slant flex justify-center items-center ${
            location.pathname === "/all"
              ? "bg-seashell text-black"
              : "bg-melon text-white"
          } ${
            location.pathname === "/all"
              ? "hover:bg-seashell"
              : "hover:bg-black"
          }`}
          to="/all"
        >
          All
        </Link>

        <Link
          className={`w-[100%] h-16 other-slant flex justify-center items-center ${
            location.pathname === "/baking"
              ? "bg-seashell text-black"
              : "bg-melon text-white"
          } ${
            location.pathname === "/baking"
              ? "hover:bg-seashell"
              : "hover:bg-black"
          }`}
          to="/baking"
        >
          Baking
        </Link>

        <Link
          className={`w-[100%] h-16 other-slant flex justify-center items-center ${
            location.pathname === "/cakes"
              ? "bg-seashell text-black"
              : "bg-melon text-white"
          } ${
            location.pathname === "/cakes"
              ? "hover:bg-seashell"
              : "hover:bg-black"
          }`}
          to="/cakes"
        >
          Cakes
        </Link>

        <Link
          className={`w-[100%] h-16 other-slant flex justify-center items-center ${
            location.pathname === "/cookies"
              ? "bg-seashell text-black"
              : "bg-melon text-white"
          } ${
            location.pathname === "/cookies"
              ? "hover:bg-seashell"
              : "hover:bg-black"
          }`}
          to="/cookies"
        >
          Cookies
        </Link>

        <Link
          className={`w-[100%] h-16 other-slant flex justify-center items-center ${
            location.pathname === "/dinners"
              ? "bg-seashell text-black"
              : "bg-melon text-white"
          } ${
            location.pathname === "/dinners"
              ? "hover:bg-seashell"
              : "hover:bg-black"
          }`}
          to="/dinners"
        >
          Dinners
        </Link>

        <Link
          className={`w-[100%] h-16 other-slant flex justify-center items-center ${
            location.pathname === "/fillings"
              ? "bg-seashell text-black"
              : "bg-melon text-white"
          } ${
            location.pathname === "/fillings"
              ? "hover:bg-seashell"
              : "hover:bg-black"
          }`}
          to="/fillings"
        >
          Fillings
        </Link>

        <Link
          className={`w-[100%] h-16 other-slant flex justify-center items-center ${
            location.pathname === "/soups"
              ? "bg-seashell text-black"
              : "bg-melon text-white"
          } ${
            location.pathname === "/soups"
              ? "hover:bg-seashell"
              : "hover:bg-black"
          }`}
          to="/soups"
        >
          Soups
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

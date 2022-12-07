import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBirthdayCake } from "react-icons/fa";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const location = useLocation();

  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <div className="hidden md:flex fixed top-0 left-0 w-screen bg-melon z-10">
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
      <div className="bg-melon flex flex-col md:hidden z-10 fixed top-0 left-0 w-screen">
        <div className="flex flex-row md:hidden justify-between items-center">
          <Link
            className="bg-seashell text-black w-[15%] h-16 flex justify-center items-center"
            to="/"
          >
            <FaBirthdayCake className="p-1 text-5xl" />
          </Link>
          <h2 className="text-white font-playfair capitalize text-4xl tracking-wider">
            {location.pathname.startsWith("/all") ||
            location.pathname.startsWith("/baking") ||
            location.pathname.startsWith("/cakes") ||
            location.pathname.startsWith("/cookies") ||
            location.pathname.startsWith("/dinners") ||
            location.pathname.startsWith("/fillings") ||
            location.pathname.startsWith("/soups")
              ? location.pathname.slice(1)
              : location.pathname.startsWith("/recipe")
              ? "Recipe"
              : ""}
          </h2>
          {showMenu ? (
            <AiOutlineClose
              onClick={() => setShowMenu((prevState) => !prevState)}
              className="text-black text-2xl mr-3"
            />
          ) : (
            <AiOutlineMenu
              onClick={() => setShowMenu((prevState) => !prevState)}
              className="text-black text-2xl mr-3"
            />
          )}
        </div>
        <div
          className={`${
            showMenu
              ? "flex flex-col bg-seashell text-black text-center font-playfair font-semibold text-2xl"
              : "hidden"
          }`}
        >
          <Link className="my-2" to="/all">
            All
          </Link>
          <hr />
          <Link className="my-2" to="/baking">
            Baking
          </Link>
          <hr />
          <Link className="my-2" to="/cakes">
            Cakes
          </Link>
          <hr />
          <Link className="my-2" to="/cookies">
            Cookies
          </Link>
          <hr />
          <Link className="my-2" to="/dinners">
            Dinners
          </Link>
          <hr />
          <Link className="my-2" to="/fillings">
            Fillings
          </Link>
          <hr />
          <Link className="my-2" to="/soups">
            Soups
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;

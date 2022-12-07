import React from "react";

const Home = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-background-cake bg-cover bg-top bg-blend-darken">
      <div className="w-full h-full flex flex-col justify-center items-center backdrop-brightness-50">
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-shrikhand text-white tracking-wider">
          Jade's Recipes
        </h1>
        <h3 className="text-md lg:text-lg font-playfair text-white tracking-widest">
          Developed by John Evereth
        </h3>
      </div>
    </div>
  );
};

export default Home;

import React from "react";

const NotFound = () => {
  return (
    <div className="h-screen bg-seashell flex justify-center items-center flex-col tracking-wide">
      <h2 className="font-shrikhand text-center text-2xl md:text-5xl">
        You've taken a wrong turn!
      </h2>
      <p className="font-playfair text-center text-md md:text-xl">
        This page doesn't exist. Navigate back to the homepage.
      </p>
    </div>
  );
};

export default NotFound;

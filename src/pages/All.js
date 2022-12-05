import React from "react";
import recipeList from "../recipeList";

const All = () => {
  const recipes = recipeList.map((eachRecipe) => {
    return (
      <div
        key={eachRecipe.name}
        className="flex flex-row w-[30%] h-[150px] bg-peach-crayola my-3 mx-3 overflow-hidden rounded-xl"
      >
        <div className="w-[60%] relative">
          <h2 className="font-shrikhand tracking-wider text-2xl text-center mt-5 px-3">
            {eachRecipe.name}
          </h2>
          <p className="absolute bottom-5 left-5 font-playfair text-md">
            {eachRecipe.category}
          </p>
        </div>
        <div className="w-[40%]">
          <img
            className="w-full h-full"
            src={eachRecipe.image}
            alt="Recipe Item"
          />
        </div>
      </div>
    );
  });

  return (
    <div className="bg-seashell">
      <h1>All Recipes</h1>
      <div className="flex flex-row flex-wrap justify-center items-center mt-12">
        {recipes}
      </div>
    </div>
  );
};

export default All;

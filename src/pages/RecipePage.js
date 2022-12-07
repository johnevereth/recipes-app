import React from "react";
import { useParams } from "react-router-dom";
import recipeList from "../recipeList";

const RecipePage = () => {
  const { id } = useParams();

  const recipeNeeded = recipeList.find((recipeItem) => recipeItem.id === id);

  return (
    <div className="bg-seashell pb-12">
      <div className="flex flex-col flex-wrap justify-center items-center pt-20">
        <h1 className="font-shrikhand tracking-wider text-6xl text-center mt-5 px-3 text-black">
          {recipeNeeded.name}
        </h1>
        <h3 className="font-playfair text-2xl text-black">
          {recipeNeeded.category}
        </h3>
        <div className="w-[65%] flex flex-row justify-around mt-6">
          <ul className="text-xl font-playfair text-black">
            {recipeNeeded.ingredients.map((ingredient) => {
              return (
                <li key={ingredient}>
                  <b className="font-bold text-2xl">{ingredient[0]}</b>{" "}
                  {ingredient[1]}
                </li>
              );
            })}
          </ul>
          <img
            src={`.${recipeNeeded.image}`}
            alt="Recipe"
            className="h-[375px] rounded-lg"
          />
        </div>
        <div className="">
          <h2 className="text-3xl text-black underline font-shrikhand mt-8">
            Instructions:
          </h2>
          <ul className="list-decimal text-black text-3xl font-playfair mt-2">
            {recipeNeeded.instructions.map((instruction) => {
              return <li>{instruction}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RecipePage;

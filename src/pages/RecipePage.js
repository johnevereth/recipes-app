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
        <div className="w-[80%] lg:w-[55%] flex flex-col-reverse lg:flex-row justify-between mt-6 rounded-xl px-5 lg:px-16 py-8 bg-peach-crayola">
          <ul className="text-xl font-playfair pt-5 lg:pt-0 text-black">
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
            loading="lazy"
            src={`.${recipeNeeded.image}`}
            alt="Recipe"
            className="lg:h-[375px] rounded-lg ml-2"
          />
        </div>
        <div className="bg-peach-crayola rounded-xl mt-5 px-5 lg:px-16 py-8 w-[85%] lg:w-[70%]">
          <h2 className="text-2xl md:text-3xl text-black underline font-shrikhand text-center">
            Instructions:
          </h2>
          <ul className="list-decimal text-black text-lg md:text-2xl px-3 md:px-0 font-playfair mt-2">
            {recipeNeeded.instructions.map((instruction) => {
              return <li key={instruction}>{instruction}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RecipePage;

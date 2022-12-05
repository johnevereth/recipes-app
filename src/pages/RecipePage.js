import React from "react";
import recipeList from "../recipeList";

const RecipePage = () => {
  const recipes = recipeList.map((eachRecipe) => {
    return (
      <div>
        {eachRecipe.name}
        {eachRecipe.image}
        {eachRecipe.category}
        {eachRecipe.ingredients.map((eachIngredientArray) => {
          for (let i = 0; i < eachRecipe.ingredients.length; i++) {
            return (
              <div>
                {eachIngredientArray[i][0]} {eachIngredientArray[i][1]}
              </div>
            );
          }
        })}
        {eachRecipe.instructions} {/* COMPLETE THIS IT'S NOT DONE */}
        {eachRecipe.serves}
        {eachRecipe.time} {/* COMPLETE THIS IT'S NOT DONE */}
      </div>
    );
  });

  return (
    <div>
      <p>ya</p>
      {recipes}
    </div>
  );
};

export default RecipePage;

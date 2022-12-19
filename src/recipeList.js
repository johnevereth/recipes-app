const recipeList = [
  {
    id: "1",
    name: "Carrot Cake",
    image: "./images/carrot-cake.webp",
    category: "Cakes",
    ingredients: [
      ["4", "cups of flour"],
      ["2", "tbsp of baking powder"],
      ["1 ½", "tsp of baking soda"],
      ["2", "tsp salt"],
      ["2", "tsp cinnamon"],
      ["½", "tsp nutmeg"],
      ["4", "cups of sugar"],
      ["2", "cups of oil"],
      ["10", "whole eggs"],
      ["8", "cups of shredded carrot"],
    ],
    instructions: [
      "Mix oil, sugar, and eggs.",
      "Mix dry ingredients.",
      "Fold together, then fold in shredded carrot.",
      "Bake at 350F° until toothpick comes out clean.",
    ],
    serves: "Unknown",
    time: { prep: "25 minutes", cook: "25 minutes" },
  },
  {
    id: "2",
    name: "Vanilla Cake",
    image: "./images/vanilla-cake.webp",
    category: "Cakes",
    ingredients: [
      ["2 ½", "cups of flour"],
      ["2", "cups of sugar"],
      ["1", "tbsp of baking powder"],
      ["1", "tsp of salt"],
      ["1", "cup of milk"],
      ["½", "cup of oil"],
      ["1", "tbsp of vanilla"],
      ["2", "whole eggs"],
      ["½", "cup of water"],
    ],
    instructions: [
      "Add all dry ingredients to mixer, mix on low for 1 minute.",
      "Seperately mix milk, oil, vanilla, and eggs.",
      "Add wet to dry and mix until combined.",
      "Slowly add water to batter.",
      "Bake at 350F° until toothpick comes out clean.",
    ],
    serves: "Unknown",
    time: { prep: "20 minutes", cook: "25 minutes" },
  },
  {
    id: "3",
    name: "Lemon Curd",
    image: "./images/lemon-curd.webp",
    category: "Fillings",
    ingredients: [
      ["⅔", "cup of white sugar"],
      ["2", "egg yolks"],
      ["1", "whole egg"],
      ["1", "zest of a whole lemon"],
      ["⅓", "cup of lemon juice"],
      ["6", "tbsp of butter cut into small chunks"],
    ],
    instructions: [
      "You mix everything except for the butter.",
      "Then you cook it all over a double boiler until it thickens.",
      "Once it's thickened you stir in the butter.",
    ],
    serves: "Unknown",
    time: { prep: "10 minutes", cook: "15 minutes" },
  },
  {
    id: "4",
    name: "Fudge Filling",
    image: "./images/fudge-filling.webp",
    category: "Fillings",
    ingredients: [
      ["1", "cup of powdered sugar"],
      ["125g", "of butter"],
      ["250g", "of chopped chocolate"],
      ["1", "tsp of vanilla"],
      ["1", "pinch of salt"],
      ["6 ¾", "oz of whipping cream"],
    ],
    instructions: [
      "You put everything in a pot and you melt it over medium heat.",
      "It's finished when everything is well combined and there are no lumps.",
    ],
    serves: "Unknown",
    time: { prep: "10 minutes", cook: "5 minutes" },
  },
  {
    id: "5",
    name: "Peanut Butter Cookies",
    image: "./images/peanut-butter-cookies.webp",
    category: "Cookies",
    ingredients: [
      ["2 ½", "cups of flour"],
      ["½", "tsp of baking soda"],
      ["½", "tsp of salt"],
      ["1", "cup of butter"],
      ["1", "cup of peanut butter"],
      ["¾", "of a cup of white sugar"],
      ["¾", "of a cup of brown sugar"],
      ["1", "whole egg"],
      ["1", "tsp of vanilla"],
    ],
    instructions: [
      "Mix the butter and the sugar, add the peanut butter, add the egg and vanilla.",
      "Mix all the dry ingredients and then add all the dry ingredients to the cookie dough.",
      "Roll the dough into balls and smush them down, after that, freeze them.",
      "Once frozen, bake them at 350F° for 15 minutes.",
    ],
    serves: "Unknown",
    time: { prep: "15 minutes", cook: "15 minutes" },
  },
  {
    id: "6",
    name: "Chocolate Chip Cookies",
    image: "./images/chocolate-chip-cookies.webp",
    category: "Cookies",
    ingredients: [
      ["2 ½", "cups of flour"],
      ["1", "tsp of baking soda"],
      ["½", "tsp of salt"],
      ["1", "cup of butter"],
      ["¾", "cup of white sugar"],
      ["¾", "cup of brown sugar"],
      ["1", "whole egg"],
      ["1", "tsp vanilla"],
      ["2", "cups of semi-sweet chocolate chips"],
    ],
    instructions: [
      "Mix the butter and the sugar. Add the egg and the vanilla.",
      "Then mix all your dry ingredients and fold in the chocolate chips.",
      "Bake for 15 minutes.",
    ],
    serves: "Unknown",
    time: { prep: "15 minutes", cook: "15 minutes" },
  },
  {
    id: "7",
    name: "Salted Caramel Filling",
    image: "./images/salted-caramel-filling.webp",
    category: "Fillings",
    ingredients: [
      ["1", "cup of white sugar"],
      ["6", "tbsp of salted butter cut into pieces"],
      ["½", "cup of heavy cream"],
      ["1", "tsp of sea salt"],
    ],
    instructions: [
      "Put the sugar into a pot and melt it until it's caramel colored.",
      "Add the butter into the caramel slowly.",
      "Take the caramel off of the heat and whisk the butter in until it's combined.",
      "Put the caramel back onto the heat and add the cream slowly.",
      "Mix until combined and boil for 1 minute.",
      "Mix in the salt.",
    ],
    serves: "Unknown",
    time: { prep: "5 minutes", cook: "15 minutes" },
  },
  {
    id: "8",
    name: "Swiss Macarons",
    image: "./images/swiss-macarons.webp",
    category: "Cookies",
    ingredients: [
      ["100g", "of almond flour"],
      ["100g", "of white sugar"],
      ["100g", "of powdered sugar"],
      ["100g", "of egg whites"],
    ],
    instructions: [
      "Mix the egg whites and white sugar over a double boiler until the sugar is dissolved.",
      "Then sift the almond flour and the icing sugar after the sugar is dissolved in the egg whites.",
      "Whip it on high speed until the merangue has stiff peaks.",
      "Then fold the merangue into the dry ingredients.",
      "Pipe the batter into circles, let them rest until the tops are dry, bake at 300F° for 16 minutes.",
    ],
    serves: "Unknown",
    time: { prep: "35 minutes", cook: "16 minutes" },
  },
  {
    id: "9",
    name: "Scottish Short Bread",
    image: "./images/scottish-short-bread.webp",
    category: "Cookies",
    ingredients: [
      ["4", "cups of cold butter"],
      ["2", "cups of brown sugar"],
      ["9", "cups of flour"],
    ],
    instructions: [
      "Mix the butter and sugar until combined, then add flour.",
      "Roll out dough and cut into desired shapes.",
      "Bake at 350F° for approximately 12-15 minutes depending on cookie size.",
      "Flatten cookies after baking while still warm.",
    ],
    serves: "24",
    time: { prep: "10 minutes", cook: "15 minutes" },
  },
  {
    id: "10",
    name: "Basic Scone",
    image: "./images/basic-scone.webp",
    category: "Baking",
    ingredients: [
      ["6", "cups of flour"],
      ["1", "cup of white sugar -- sweet scones"],
      ["¼", "cup of white sugar -- savoury scones"],
      ["2", "heaping tbsp of baking powder"],
      ["2", "tsp baking soda"],
      ["1", "tsp of salt"],
      ["1 ½", "cups of cold butter, grated"],
      ["2", "cups of buttermilk"],
      ["1", "cup mix ins (optional)"],
      ["1", "bit of turbinado sugar (optional)"],
    ],
    instructions: [
      "Mix all dry ingredients in large bowl, grate in cold butter. Coat butter in flour ensuring no large chunks of butter.",
      "Add mix ins and coat in flour. Finally slowly add buttermilk, carefully mixing just until all flour is combined. Dough should not be crumbly or sticky.",
      "Transfer to floured cutting board, cut into 16 triangles. Transfer to baking sheet, brush tops with buttermilk and sprinkle with turbinado sugar.",
      "Bake at 400F° for approximately 16 minutes until tops are browned and solid.",
    ],
    serves: "16",
    time: { prep: "15 minutes", cook: "16 minutes" },
  },
  {
    id: "11",
    name: "Banana Muffins",
    image: "./images/banana-muffins.webp",
    category: "Baking",
    ingredients: [
      ["3", "large mashed bananas"],
      ["¾", "cup of white sugar"],
      ["1", "whole egg"],
      ["⅓", "cup of melted butter"],
      ["1", "cup of semi-sweet chocolate chips"],
      ["1", "tsp of baking powder"],
      ["½", "tsp of salt"],
      ["1 ½", "cups of flour"],
    ],
    instructions: [
      "Mix wet and dry ingredients seperately, and then fold them together.",
      "Fold in chocolate chips.",
      "Bake at 375F° for 20 minutes.",
    ],
    serves: "12",
    time: { prep: "15 minutes", cook: "20 minutes" },
  },
  {
    id: "12",
    name: "Dinner Rolls",
    image: "./images/dinner-rolls.webp",
    category: "Baking",
    ingredients: [
      ["¼", "cup of water at 110F°"],
      ["2 ¼", "tsp of yeast"],
      ["¼", "cup of soft butter"],
      ["½", "cup of melted butter"],
      ["2", "tbsp of sugar"],
      ["1", "tsp of sugar"],
      ["1", "whole egg"],
      ["1", "egg yolk"],
      ["⅓", "cup of warm milk"],
      ["2 ¼", "cups of flour"],
      ["1", "tsp of salt"],
    ],
    instructions: [
      "Bloom yeast with 1 tsp sugar in warm water for 10 mins.",
      "Cream butter and remaining sugar, then add the egg and yolk, then the milk.",
      "Mix for 2 mins.",
      "Add yeast mixture to the mixer, then add 1 cup of the flour, then the salt, then the remaining flour.",
      "Mix with dough hook for 5-7 mins.",
      "Let rise covered in greased bowl approx 1.5 hours, until doubled in size.",
      "Divide into 12 balls, and put touching side by side into a pan to rise again.",
      "Brush melted butter over balls and allow to rise 45 more mins.",
      "Bake at 350F° for 18 minutes.",
    ],
    serves: "12",
    time: { prep: "2.5 hours", cook: "18 minutes" },
  },
  {
    id: "13",
    name: "Lasagna",
    image: "./images/lasagna.webp",
    category: "Dinner",
    ingredients: [
      ["12", "sheets of lasagna noodles"],
      ["1", "cup of grated parmasean cheese"],
      ["8", "cups of mozzerella cheese"],
      ["2", "tbsp of olive oil"],
      ["6", "cloves of garlic"],
      ["1", "can of tomato paste"],
      ["1", "tsp of sugar"],
      ["1", "tsp of oregano"],
      ["1", "tsp of salt"],
      ["¼", "tsp of red pepper flakes"],
      ["3 ½", "cups of crushed tomatoes"],
      ["1", "bunch of fresh basil chopped"],
      ["1", "lb of ground beef"],
      ["1", "lb of italian sausage"],
      ["1", "large onion"],
      ["¼", "cup of butter"],
      ["¼", "cup of flour"],
      ["3", "cups of milk"],
      ["1", "pinch of salt"],
      ["¼", "tsp of black pepper"],
      ["1", "pinch of nutmeg"],
      ["¼", "tsp curry powder"],
    ],
    instructions: [
      "Heat the olive oil and add the garlic.",
      "Saute for 2 minutes.",
      "Add the ground beef and sausage and brown for 8 minutes.",
      "Then add chopped onion.",
      "Then add tomato paste, sugar, salt, oregano, and red pepper flakes.",
      "Cook for 2 more minutes.",
      "Add the crushed tomatoes.",
      "Simmer for 20 minutes.",
      "Add chopped basil.",
      "Add curry powder.",
      "Let it simmer while you make the rest of the lasagna.",
      "Make the bechamel sauce -- you melt the butter, then whisk in the flour, and cook for 2 minutes. Then slowly add the milk, and salt, and pepper, and nutmeg",
      "Whisk for 5 minutes until the sauce thickens. Shred all of your cheese. Then assemble the lasagna.",
      "Bake the lasagna at 350F° for 45 minutes covered with tinfoil, then another 15 minutes to brown the cheese.",
    ],
    serves: "Unknown",
    time: { prep: "60 minutes", cook: "60 minutes" },
  },
  {
    id: "14",
    name: "Chicken Pot Pie Soup",
    image: "./images/chicken-pot-pie-soup.webp",
    category: "Soups",
    ingredients: [
      ["5", "carrots cut into cubes"],
      ["6", "potatoes cut into cubes"],
      ["1", "tbsp of oil"],
      ["½", "tsp of salt"],
      ["½", "tsp of pepper"],
      ["4", "chicken breasts"],
      ["½", "cup of butter"],
      ["2", "stalks of celery chopped finely"],
      ["1", "onion chopped finely"],
      ["4", "cloves of minced garlic"],
      ["1", "tbsp of fresh rosemary chopped"],
      ["½", "tbsp of fresh thyme chopped"],
      ["½", "cup of flour"],
      ["5", "cups of chicken stock"],
      ["1", "liter of milk"],
      ["1", "tbsp of chicken bouillon"],
      ["½", "tsp of sweet paprika"],
      ["½", "tsp of garlic powder"],
      ["1", "pinch of nutmeg"],
      ["1", "cup of frozen peas"],
      ["1", "cup of frozen corn"],
    ],
    instructions: [
      "Coat the potatoes and carrots in oil and salt and pepper and roast at 350F° until tender.",
      "Fry your chicken breasts in oil with salt and pepper and garlic powder until they reach 170F° internally, and remove from the pan.",
      "Add the butter and the celery and the minced garlic and onion and then the rosemary and then the thyme. Cook for 2 minutes.",
      "Then add the flour. Cook for another 2 minutes.",
      "Start adding chicken stock and milk slowly, and then add the chicken boiullon, and add the paprika and salt and pepper and nutmeg.",
      "Then add in the carrots and potatoes and the frozen peas and corn.",
      "Then chop up the chicken and add it to the soup.",
    ],
    serves: "Unknown",
    time: { prep: "40 minutes", cook: "30 minutes" },
  },
  {
    id: "15",
    name: "Beef Stew",
    image: "./images/beef-stew.webp",
    category: "Dinners",
    ingredients: [
      ["4", "carrots chopped"],
      ["2", "stalks of celery"],
      ["1", "onion"],
      ["2", "lbs of potatoes"],
      ["2", "tbsp of olive oil"],
      ["4", "cloves of garlic"],
      ["1 ½", "lbs of beef stewing meat"],
      ["½", "tsp of salt"],
      ["½", "tsp of pepper"],
      ["¼", "cup of flour"],
      ["2", "cups of beef broth"],
      ["2", "tbsp dijon mustard"],
      ["1", "tbsp worchester sauce"],
      ["1", "tbsp of soy sauce"],
      ["1", "tbsp of brown sugar"],
      ["½", "tbsp of dried rosemary"],
      ["½", "tsp of dried thyme"],
    ],
    instructions: [
      "Dice all the vegetables and place all the vegetables into a large slow cooker.",
      "In a large bowl, coat the meat in the salt and pepper and flour.",
      "Heat olive oil in a pan and cook the garlic for 1 minute. Then add the meat and sear on all sides.",
      "Add the browned beef to the slow cooker.",
      "Then add the beef broth, dijon, worchester sauce, soy sauce, brown sugar, rosemary, and thyme to the pan.",
      "Stir to combine. Cook for 2 minutes.",
      "Then pour the sauce over your meat and vegetables in the slow cooker.",
      "Cook on low for 8 hours.",
    ],
    serves: "Unknown",
    time: { prep: "30 minutes", cook: "8 hours" },
  },
  {
    id: "16",
    name: "Chicken Noodle Soup",
    image: "./images/chicken-noodle-soup.webp",
    category: "Soups",
    ingredients: [
      ["5", "carrots"],
      ["4", "celery stalks"],
      ["1", "red pepper"],
      ["2", "onions"],
      ["3", "cloves of garlic"],
      ["3", "chicken breasts"],
      ["8", "cups of chicken broth"],
      ["1", "bag of egg noodles"],
      ["½", "tsp of salt"],
      ["½", "tsp of pepper"],
      ["2", "bay leaves"],
      ["¼", "tsp of red chili flakes"],
      ["½", "tsp of dried thyme"],
      ["¼", "cup of butter"],
    ],
    instructions: [
      "Chop all your vegetables. Heat the oil in a pan. Put salt and pepper on the chicken breasts and fry them on high heat until they're browned on both sides but not cooked all the way through. Then remove them from the pan.",
      "Then add the chopped vegetables and chili flakes and cook for 5 minutes. Then add the chicken stock, and then the bay leaves, and then put the chicken breast in the stock. Bring it to a boil and simmer for 20 minutes until the vegetables and chicken are fully cooked.",
      "Then boil the pasta in a seperate pot for about 10 minutes and take the chicken out and shred it and then add the pasta and the chicken to the soup and add the thyme and remove the bay leaves.",
    ],
    serves: "Unknown",
    time: { prep: "30 minutes", cook: "40 minutes" },
  },
  {
    id: "17",
    name: "Tomato Soup",
    image: "./images/tomato-soup.webp",
    category: "Soups",
    ingredients: [
      ["10", "roma tomatoes"],
      ["2", "small onions"],
      ["2", "heads of garlic"],
      ["2", "cups of cherry tomatoes"],
      ["3", "tbsp of olive oil"],
      ["1", "tbsp of balsamic vinegar"],
      ["½", "tsp of salt"],
      ["½", "tsp of pepper"],
      ["¼", "tsp of dried basil"],
      ["¼", "tsp of red pepper flakes"],
      ["2", "tbsp of butter"],
      ["2", "shallots"],
      ["2", "stalks of celery"],
      ["⅛", "sherry cooking wine"],
      ["1", "can of tomato paste"],
      ["2", "tbsp of fresh basil"],
      ["2", "cups of chicken stock"],
      ["1", "cup of heavy cream"],
      ["½", "cup of grated parmesean cheese"],
      ["¼", "tsp of curry powder"],
    ],
    instructions: [
      "Chop the top of the garlic heads off, drizzle with a little bit of the oil, wrap them in foil, and then put them on a baking sheet.",
      "Chop the rest of the vegetables and coat them in the rest of the oil and the salt and pepper and red pepper flakes and basil and balsamic vinegar.",
      "Add them to the baking sheet and roast for 1 hour at 375F°",
      "Melt butter in a large pot, cook diced shallots and celery until soft, add tomato paste and cook 2 mins, then add sherry and cook until the alcohol cooks off.",
      "Squeeze roasted garlic into blender along with roasted onion and tomatoes and cooked celery and shallots.",
      "Blend until smooth.",
      "Add the blended mixture to the pot, cook for 5 mins. Then add chicken stock, cream, parmesan cheese, chopped fresh basil and curry powder.",
    ],
    serves: "Unknown",
    time: { prep: "30 minutes", cook: "90 minutes" },
  },
  {
    id: "18",
    name: "Tuscan Chicken Pasta",
    image: "./images/tuscan-chicken-pasta.webp",
    category: "Dinners",
    ingredients: [
      ["4", "chicken breasts"],
      ["3", "tbsp olive oil"],
      ["1", "tsp paprika"],
      ["1", "tsp garlic powder"],
      ["½", "tsp salt"],
      ["½", "tsp italian seasoning"],
      ["¼", "tsp red pepper flakes"],
      ["½", "tsp pepper"],
      ["¼", "tsp oregano"],
      ["1", "box orzo pasta"],
      ["1", "box chicken stock"],
      ["½", "cup of heavy cream"],
      ["1", "red onion"],
      ["1", "red bell pepper"],
      ["1", "bit of fresh basil"],
      ["3", "tbsp lemon juice"],
      ["2", "cups cherry tomatoes"],
      ["2 ½", "cups grated parmeason cheese"],
      ["1", "cup chopped spinach"],
      ["1", "tbsp honey dijon mustard"],
      ["1", "shallot"],
      ["4", "cloves of garlic"],
    ],
    instructions: [
      "Chop vegetables and basil.",
      "Mix the seasonings together.",
      "Coat chicken in olive oil and and the seasoning mix.",
      "Cook chicken in large frying pan until internal temp is 170F°",
      "Pour 1 tbsp lemon juice over chicken then remove chicken from pan.",
      "Add shallot, garlic, red pepper and red onion to the pan. Cook until tender.",
      "Add orzo, toast for 2 mins.",
      "Deglaze pan with 1 tbsp lemon juice, then add chicken stock and cherry tomatoes. Bring to a boil and cook about 8 mins until orzo is al dente.",
      "Add cream and parmesan cheese, mix sauce well.",
      "Add spinach and let it cook. Finish with fresh basil, mustard and remaining lemon juice.",
      "Add chicken to sauce, cook a few more minutes to reheat chicken. Top with extra parmesan cheese.",
    ],
    serves: "Unknown",
    time: { prep: "15 minutes", cook: "20 minutes" },
  },
];

export default recipeList;

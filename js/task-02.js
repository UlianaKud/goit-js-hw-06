const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");

const itemsArr = ingredients.map((element) => {
  const ingredientsItems = document.createElement("li");
  ingredientsItems.textContent = element;
  ingredientsItems.classList.add("item");

  return ingredientsItems;
});

ingredientsList.append(...itemsArr);
console.log(ingredientsList);

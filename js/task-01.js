const categoryItems = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach((element) => {
  const headerElement = element.firstElementChild.textContent;
  console.log(`Category: ${headerElement}`);

  const elementsCount = element.lastElementChild.children.length;
  console.log(`Elements: ${elementsCount}`);
});

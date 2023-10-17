const categoriesCount = document.querySelectorAll(".item");

console.log(`Number of categories: ${categoriesCount.length}`);

categoriesCount.forEach(function (category, index) {
  const categoryName = category.querySelector("h2").textContent
  const elementsCount = category.lastElementChild.childElementCount;
  console.log(`Category: ${categoryName} \nElements: ${elementsCount}`);
});




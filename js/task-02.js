const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

createMarkup(ingredients);

function createMarkup(args) {
  const li = args.map((arg) => {
    const liEl = document.createElement("li");
    liEl.textContent = arg;
    liEl.classList.add("item");
    return liEl;
  });
  list.append(...li);
}

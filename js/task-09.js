function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btn = document.querySelector(".change-color");
const textColor = document.querySelector(".color");
const bodyClass = document.querySelector("body");

btn.addEventListener("click", handleClick);

function handleClick(event) {
  const currentColor = getRandomHexColor();
  bodyClass.style.backgroundColor = currentColor;
  textColor.textContent = currentColor;
}

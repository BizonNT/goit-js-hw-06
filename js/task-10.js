function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const form = document.querySelector("#controls");
const boxes = document.querySelector("#boxes");
const inputField = form.firstElementChild;

createBtn.addEventListener("click", handleClickCreate);
destroyBtn.addEventListener("click", destroyBoxes);

function handleClickCreate(event) {
  event.preventDefault();
  boxes.innerHTML = createBoxes(Number(inputField.value));
  inputField.value = "";
}

function destroyBoxes(event) {
  event.preventDefault();
  boxes.innerHTML = "";
}

function createBoxes(amount) {
  const step = Number(inputField.attributes.step.value);
  let markup = "";
  const minSize = 30;
  if (amount > Number(inputField.attributes.max.value)) {
    amount = Number(inputField.attributes.max.value);
  }
  for (let i = 1; i <= amount; i += step) {
    let size = minSize + 10 * (i - 1);
    let color = getRandomHexColor();
    markup = `<div style="
        display: flex;
        align-items: end;
        width: ${size}px;
        height: ${size}px;
        background-color: ${color};
      ">${markup}</div>`;
  }
  return markup;
}

let counterValue = 0;
const counterData = document.querySelector("#value");

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const decrementClick = () => {
  counterValue -= 1;
  counterData.textContent = counterValue;
};

const incrementBtn = document.querySelector('button[data-action="increment"]');
const incrementClick = () => {
  counterValue += 1;
  counterData.textContent = counterValue;
};

decrementBtn.addEventListener("click", decrementClick);
incrementBtn.addEventListener("click", incrementClick);

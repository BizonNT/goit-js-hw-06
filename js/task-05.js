const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");

inputName.addEventListener("input", keyPush);

function keyPush(event) {
  const handleInput = event.currentTarget.value;
  outputName.textContent = handleInput !== "" ? handleInput : "Anonymous";
  return outputName.textContent;
}

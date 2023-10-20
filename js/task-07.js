const sizeControl = document.querySelector("#font-size-control");
const textField = document.querySelector("#text");

sizeControl.addEventListener("input", handleChange);
function handleChange(event) {
  textField.style.fontSize = `${event.currentTarget.value}px`;
}

const inputForm = document.querySelector("#validation-input");

inputForm.addEventListener("blur", handleBlur);

function handleBlur(event) {
  let validationInput = event.currentTarget;
  if (validationInput.value.length === Number(validationInput.dataset.length)) {
    validationInput.classList.replace("invalid", "valid");
  } else {
    validationInput.classList.remove("valid");
    validationInput.classList.add("invalid");
  }
}

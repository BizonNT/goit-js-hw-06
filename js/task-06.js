const inputForm = document.querySelector("#validation-input");

inputForm.addEventListener("blur", handleBlur);

function handleBlur(event) {
  let validationInput = event.currentTarget;
  validationInput.classList.add("invalid");
  if (validationInput.value.length === Number(validationInput.dataset.length)) {
    validationInput.classList.replace("invalid", "valid");
  } else {
    validationInput.classList.remove("valid");
  }
}

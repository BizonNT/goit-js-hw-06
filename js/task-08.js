const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", handeleBtn);

function handeleBtn(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();

  if (email === "" || password === "") {
    alert("Заповніть всі необхідні поля!");
    return;
  }
  const user = {
    email,
    password,
  };
  form.reset();
  console.log(user);
}

const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", handeleBtn);

function handeleBtn(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (email === "" || password === "") {
    alert("Заповніть всі необхідні поля!");
  } else {
    const user = {
      email: email,
      password: password,
    };
    form.reset();
    console.log(`email: ${user.email}\npassword: ${user.password}`);
  }
}

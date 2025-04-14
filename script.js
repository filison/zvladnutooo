import { auth } from "./firebase-config.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const registerBtn = document.getElementById("registerBtn");
const statusText = document.getElementById("status");

registerBtn.addEventListener("click", () => {
  const email = emailInput.value;
  const password = passwordInput.value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      statusText.style.color = "green";
      statusText.textContent = "Úspěšně zaregistrováno!";
    })
    .catch((error) => {
      statusText.style.color = "red";
      statusText.textContent = "Chyba: " + error.message;
    });
});
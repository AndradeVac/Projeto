const loginForm = document.getElementById("loginForm");
const btnSubmit = document.getElementById("btn-Submit");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const forgotLink = document.getElementById("forgotLink");
const createAccountLink = document.getElementById("createAccountLink");

loginForm.addEventListener("submit", function (event) {
    // Reset error messages
    emailError.style.display = "none";
    passwordError.style.display = "none";

    // Check email
    if (!emailInput.value) {
        emailError.style.display = "block";
        event.preventDefault(); // Prevent form submission
    }

    // Check password
    if (!passwordInput.value) {
        passwordError.style.display = "block";
        event.preventDefault(); // Prevent form submission
    }
});

forgotLink.addEventListener("click", function (event) {
    event.preventDefault();
    // Coloque o código para lidar com o link de esquecimento de usuário/senha aqui
    console.log("Link 'Forgot Username / Password?' clicado!");
});

createAccountLink.addEventListener("click", function (event) {
    event.preventDefault();
    // Coloque o código para lidar com o link de criação de conta aqui
    console.log("Link 'Create your Account' clicado!");
});


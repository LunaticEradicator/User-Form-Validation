const newPassword = document.getElementById("newPassword");
const confirmPassword = document.getElementById("confirmPassword");
const errorMessage = document.querySelector(".error-Message");


function validatePassword() {
    if (newPassword.value !== confirmPassword.value) {
        confirmPassword.setCustomValidity(errorMessage);
    }
    else {
        confirmPassword.setCustomValidity("undefined");
    }
}

newPassword.onchange = validatePassword;
confirmPassword.onkeyup = validatePassword;


const newPassword = document.getElementById("newPassword");
const confirmPassword = document.getElementById("confirmPassword");
const errorMessage = document.querySelector(".error-Message");


const eye1 = document.getElementById("eye1");
const eye1Slash = document.getElementById("eye1Slash");
const eye2 = document.getElementById("eye2");
const eye2Slash = document.getElementById("eye2Slash");



function validatePassword() {
    console.log(newPassword.value)
    console.log(newPassword.value)

    confirmPassword.value !== newPassword.value ? confirmPassword.setCustomValidity(errorMessage) : confirmPassword.setCustomValidity("");

    //     if (confirmPassword.value !== newPassword.value) {
    //         confirmPassword.setCustomValidity(errorMessage);
    //     }
    //     else {
    //         confirmPassword.setCustomValidity("");
    //     }
}

newPassword.onchange = validatePassword;
confirmPassword.onkeyup = validatePassword;
showPassword();

function showPassword() {
    eye1Slash.addEventListener("click", e => {
        console.log("clicked");
        if (newPassword.type === "password") {
            eye1Slash.style.fontSize = "0px";
            eye1.style.fontSize = "1.2rem";
            newPassword.type = "text";
        }
        eye1.addEventListener("click", e => {
            eye1Slash.style.fontSize = "1.2rem";
            eye1.style.fontSize = "0px";
            newPassword.type = "password";
        })
    })

    eye2Slash.addEventListener("click", e => {
        console.log("clicked");
        if (confirmPassword.type === "password") {
            eye2Slash.style.fontSize = "0px";
            eye2.style.fontSize = "1.2rem";
            confirmPassword.type = "text";
        }
        eye2.addEventListener("click", e => {
            eye2Slash.style.fontSize = "1.2rem";
            eye2.style.fontSize = "0px";
            confirmPassword.type = "password";
        })
    })

}



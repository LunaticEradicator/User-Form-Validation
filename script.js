const newPassword = document.getElementById("newPassword");
const confirmPassword = document.getElementById("confirmPassword");
const errorMessage = document.querySelector(".error-Message");

const eye1 = document.getElementById("eye1");
const eye1Slash = document.getElementById("eye1Slash");
const eye2 = document.getElementById("eye2");
const eye2Slash = document.getElementById("eye2Slash");

const form = document.querySelector(".formed");
const pAll = document.querySelectorAll('p');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const emailId = document.getElementById('emailId');
const phoneNumber = document.getElementById('phoneNumber');




function validatePassword() {
    console.log(newPassword.value)
    console.log(newPassword.value)
    confirmPassword.value !== newPassword.value ? confirmPassword.setCustomValidity(errorMessage) : confirmPassword.setCustomValidity("");
    // if (confirmPassword.value !== newPassword.value) {
    //     confirmPassword.setCustomValidity(errorMessage);
    // }
    // else {
    //     confirmPassword.setCustomValidity("");
    // }
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

function ElementValueNull(elementName, elementIndex, e, pAll) {
    e.preventDefault();
    pAll[elementIndex].style.visibility = 'visible'; // removes this 
    elementName.addEventListener("click", e => {
        pAll[elementIndex].style.removeProperty('visibility');// remove the css element property [remove above]
    })
}

form.addEventListener("submit", e => {
    pAll.forEach(pp => {
        if (firstName.value.trim() === '') {
            ElementValueNull(firstName, 0, e, pAll)
        }
        if (lastName.value.trim() === '') {
            ElementValueNull(lastName, 1, e, pAll)
        }
        if (emailId.value.trim() === '') {
            ElementValueNull(emailId, 2, e, pAll)
        }
        if (phoneNumber.value.trim() === '') {
            ElementValueNull(phoneNumber, 3, e, pAll)
        }
        if (newPassword.value.trim() === '') {
            ElementValueNull(newPassword, 4, e, pAll)
        }
        if (confirmPassword.value.trim() === '') {
            ElementValueNull(confirmPassword, 5, e, pAll)
        }
    })
})

//prevent the browser from showing default error bubble / hint
document.addEventListener('invalid', (function () {
    return function (e) {
        e.preventDefault();
        // optionally fire off some custom validation handler
        // myValidation();
    };
})(), true);



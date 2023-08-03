/** @format */

let sButton = document.getElementById("submitbutton");
let passwordFields = document.querySelectorAll('input[type="password"]');
let errorDiv = document.querySelector(".error-message-before");
console.log(errorDiv);
console.log(passwordFields);

sButton.addEventListener("click", () => {
  comparePasswords();
});

comparePasswords = () => {
  let passwordInput = document.getElementById("original").value;
  let confirmpasswordInput = document.getElementById("confirm").value;

  if (passwordInput !== confirmpasswordInput) {
    errorDiv.classList.add("error-message-after");
    passwordFields.forEach((feild) => {
      feild.classList.add("password-error");
    });
  } else {
    errorDiv.classList.remove("error-message-after");
    passwordFields.forEach((feild) => {
      feild.classList.remove("password-error");
    });
  }
};

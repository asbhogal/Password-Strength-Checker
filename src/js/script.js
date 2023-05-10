import variables from "../styles/partials/_variables.scss?inline";

const passwordStrengthMeter = document.getElementById(
  "password-strength-check"
);
const passwordInput = document.getElementById("password-entry");
const passwordStrengthValue = variables.passwordStrengthValue;
const passwordResponse = document.getElementById("password-response");

const toggleShowOrHidePassword = document.querySelector(
  "#password-show-or-hide-section"
);
let passwordState = false;
let hideOrShowIcon = document.querySelector(".fa-eye");

passwordInput.addEventListener("input", updateStrengthMeter);

function updateStrengthMeter() {
  const passwordVulnerabilities = calculatePasswordStrength(
    passwordInput.value
  );
  passwordVulnerabilities;
  let passwordStrength = 100;
  passwordVulnerabilities.forEach((passwordVulnerabilities) => {
    passwordStrength -= passwordVulnerabilities.deduction;
  });
  passwordStrengthMeter.style.setProperty(
    '--password-strength',
    passwordStrength
  );
}

function calculatePasswordStrength(password) {
  const passwordVulnerabilities = [];
  passwordVulnerabilities.push(lengthVulnerabilities(password));
  return passwordVulnerabilities;
}

function lengthVulnerabilities(password) {
  const passwordLength = password.length;

  const message =
    passwordLength <= 5
      ? "Please enter a stronger password"
      : passwordLength <= 10
      ? "Your password could be stronger"
      : "Your password is strong. Good job!";
  const deduction = passwordLength <= 5 ? 40 : passwordLength <= 10 ? 15 : 0;

  return { message, deduction };
}

/****** PASSWORD HIDE/SHOW TOGGLE ******/

toggleShowOrHidePassword.addEventListener("click", () => {
  if (passwordState) {
    document.getElementById("password-entry").setAttribute("type", "password");
    hideOrShowIcon.classList.add("fa-eye");
    hideOrShowIcon.classList.remove("fa-eye-slash");
    passwordState = false;
  } else {
    document.getElementById("password-entry").setAttribute("type", "text");
    hideOrShowIcon.classList.add("fa-eye-slash");
    hideOrShowIcon.classList.remove("fa-eye");
    passwordState = true;
  }
});

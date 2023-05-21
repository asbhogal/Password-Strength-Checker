// import variables from "../styles/partials/_variables.scss?inline";

const passwordStrengthMeter = document.getElementById(
  "password-strength-check"
);
const passwordInput = document.getElementById("password-entry");
const passwordResponse = document.getElementById("password-response");
const toggleShowOrHidePassword = document.querySelector(
  "#password-show-or-hide-section"
);
let passwordState = false;
let hideOrShowIcon = document.querySelector(".fa-eye");

passwordInput.addEventListener("input", updateStrengthMeter);
updateStrengthMeter();

function updateStrengthMeter() {
  const passwordVulnerabilities = calculatePasswordStrength(
    passwordInput.value
  );
  passwordVulnerabilities;
  let passwordStrength = 100;
  passwordResponse.innerHTML = "";
  passwordVulnerabilities.forEach((passwordVulnerabilities) => {
    if (passwordVulnerabilities == null) return;
    passwordStrength -= passwordVulnerabilities.deduction;
    const messageElement = document.createElement("div");
    messageElement.innerText = passwordVulnerabilities.passwordResponse;
    passwordResponse.appendChild(messageElement);
  });
  passwordStrengthMeter.style.setProperty(
    "--password-strength",
    passwordStrength
  );
}

function calculatePasswordStrength(password) {
  const passwordVulnerabilities = [];
  passwordVulnerabilities.push(lengthVulnerabilities(password));
  passwordVulnerabilities.push(lowercaseWeakness(password));
  passwordVulnerabilities.push(uppercaseWeaknesses(password));
  passwordVulnerabilities.push(numberWeaknesses(password));
  passwordVulnerabilities.push(specialCharacterWeaknesses(password));
  passwordVulnerabilities.push(repeatCharacterCheck(password));
  return passwordVulnerabilities;
}

function lengthVulnerabilities(password) {
  const passwordLength = password.length;

  const passwordResponse =
    passwordLength <= 5
      ? "Please enter a stronger password"
      : passwordLength <= 10
      ? "Your password could be stronger"
      : "Your password is strong. Good job!";
  const deduction = passwordLength <= 5 ? 40 : passwordLength <= 10 ? 15 : 0;

  return { passwordResponse, deduction };
}

function lowercaseWeakness(password) {
  return characterTypeWeaknesses(password, /[a-z]/g, "lowercase characters");
}

function uppercaseWeaknesses(password) {
  return characterTypeWeaknesses(password, /[A-Z]/g, "uppercase characters");
}

function numberWeaknesses(password) {
  return characterTypeWeaknesses(password, /[0-9]/g, "numbers");
}

function specialCharacterWeaknesses(password) {
  return characterTypeWeaknesses(
    password,
    /[^0-9a-zA-Z\s]/g,
    "special characters"
  );
}

function repeatCharacterCheck(password) {
  const passwordMatches = password.match(/(.)\1/g) || [];

  return passwordMatches.length > 0
    ? {
        passwordResponse: "Your password has repeat characters",
        deduction: passwordMatches.length * 10,
      }
    : null;
}

function characterTypeWeaknesses(password, regex, type) {
  const passwordMatches = password.match(regex) || [];

  return passwordMatches.length <= 8
    ? {
        passwordResponse: `Please enter at least 8 ${type}`,
        deduction: 20,
      }
    : null;
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

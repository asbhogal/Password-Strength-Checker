/****** PASSWORD STRENGTH CHECK VARIABLES ******/

const passwordStrengthMeter = document.getElementById('password-strength-check');
const passwordInput = document.getElementById('password-entry');
const passwordResponse = document.getElementById('password-response');

/****** PASSWORD HIDE/SHOW TOGGLE VARIABLES ******/

const toggleShowOrHidePWD = document.querySelector('#password-show-or-hide-section');
let passwordState = false;
let hideOrShowIcon = document.querySelector('.fa-eye');

/****** PASSWORD STRENGTH CHECK ******/

passwordInput.addEventListener('input', updateStrengthMeter);

function updateStrengthMeter() {
    const passwordVulnerabilities = calculatePasswordStrength(passwordInput.value);

    let passwordStrength = 100;
    passwordVulnerabilities.forEach(weakness => {
        passwordStrength -= passwordVulnerabilities.deduction;
    });
    passwordStrengthMeter.style.setProperty('$password-strength', passwordStrength);
    console.log(passwordStrengthMeter.style.setProperty("$password-strength", passwordStrength));
}

function calculatePasswordStrength(password) {
    const passwordVulnerabilities = [];
    passwordVulnerabilities.push(lengthVulnerabilities(password));
    return passwordVulnerabilities;
}

function lengthVulnerabilities(password) {
    const passwordLength = password.length;

    if (passwordLength <= 5) {
        return {
            message: 'Your password is too weak',
            deduction: 40
        }
    }

    if (passwordLength <= 10) {
        return {
            message: 'Your password is getting stronger',
            deduction: 20
        }
    }
}

/****** PASSWORD HIDE/SHOW TOGGLE ******/

toggleShowOrHidePWD.addEventListener('click', () => {
    if (passwordState) {
        document.getElementById("password-entry").setAttribute("type", "password");
        hideOrShowIcon.classList.add('fa-eye');
        hideOrShowIcon.classList.remove('fa-eye-slash');
        passwordState = false;
        
    } else {
        document.getElementById("password-entry").setAttribute("type", "text");
        hideOrShowIcon.classList.add('fa-eye-slash')
        hideOrShowIcon.classList.remove('fa-eye');
        passwordState = true;
    }
})


const toggleShowOrHidePWD = document.querySelector('#password-show-or-hide-section');
let passwordState = false;

toggleShowOrHidePWD.addEventListener('click', () => {
    if (passwordState) {
        document.getElementById("password-entry").setAttribute("type", "password");
        passwordState = false;
    } else {
        document.getElementById("password-entry").setAttribute("type", "text");
        passwordState = true;
    }
})


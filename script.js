const toggleShowOrHidePWD = document.querySelector('#password-show-or-hide-section');
let passwordState = false;
let hideOrShowIcon = document.querySelector('.fa-eye');

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


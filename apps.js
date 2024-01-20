const submitBtn = document.getElementById('submitBtn');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passError = document.getElementById('passError');

const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');


submitBtn.addEventListener('click', (e) =>{
    e.preventDefault();
    if(validateName() && validateEmail() && validatePassword()){
        alert("Form Submitted Successfully");
        clearInputFields();
    }

});

// Function for validation of Name 
function validateName(){
    let name = document.getElementById('name').value;

    if(name.length == 0){
        nameError.innerHTML = "Name is required!";
        nameError.previousElementSibling.classList.add('fa-xmark');
        return false;
    }

    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = "write full Name";
        nameError.previousElementSibling.classList.add('fa-xmark');
        return false;

    }
    nameError.innerHTML = "";
    nameError.previousElementSibling.classList.add('fa-check');
    return true;

}


// Function for validation of Email
function validateEmail(){
    let email = document.getElementById('email').value;

    if(email.length == 0){
        emailError.innerHTML = "Email is required!";
        emailError.previousElementSibling.classList.add('fa-xmark');
        return false;
    }

    if(!email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )){
        emailError.innerHTML = "Enter Valid Email";
        emailError.previousElementSibling.classList.add('fa-xmark');
        return false;

    }
    emailError.innerHTML = "";
    emailError.previousElementSibling.classList.add('fa-check');
    return true;

}


// Function for validation of Password
function validatePassword(){
    let password = document.getElementById('password').value;

    if(password.length == 0){
        passError.innerHTML = "Password is required!";
        passError.previousElementSibling.classList.add('fa-xmark');
        return false;
    }

    if(!password.match( /^[a-zA-Z0-9!@#$%^&*]{6,16}$/)){
        passError.innerHTML = "Password should contain 1 Uppercase, 1 lowercase, 1 Digit & 1 Alphabet";
        passError.previousElementSibling.classList.add('fa-xmark');
        return false;

    }
    passError.innerHTML = "";
    passError.previousElementSibling.classList.add('fa-check');
    return true;
}



/* For Clearing the input fields after the Submitting the form Successfully */

function clearInputFields(){
    //Clearing the input value
    nameInput.value = '';
    emailInput.value = '';
    passwordInput.value = '';

    //Clearing the error message and Icons
    nameError.innerHTML = '';
    emailError.innerHTML = '';
    passError.innerHTML = '';



    nameError.previousElementSibling.classList.remove('fa-xmark', 'fa-check');
    emailError.previousElementSibling.classList.remove('fa-xmark', 'fa-check');
    passError.previousElementSibling.classList.remove('fa-xmark', 'fa-check');
    
}

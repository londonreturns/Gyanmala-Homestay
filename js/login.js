// passwordValidation function
function passwordValidation(password) {
    // set value for isCorrect
    var isCorrect = true;
    // If password's length is less than 8
    if (password.length < 8){
        // alert user
        alert('Password length need to be greater than seven');
        isCorrect = false;
    }
    // If password does not have a lowercase
    if (!/[a-z]/.test(password)){
        // alert user
        alert('Password needs atleast one lowercase character');
        isCorrect = false;
    }
    // If password does not have a uppercase
    if (!/[A-Z]/.test(password)) {
        // alert user
        alert('Password needs atleast one uppercase character');
        isCorrect = false;
    }
    // If password does not have a number
    if (!/[0-9]/.test(password)) {
        // alert user
        alert('Password needs atleast one digit.');
        isCorrect = false;
    }
    // return value of isCorrect
    return isCorrect;
}

// login function
function login() {
    // do not reload the page after button is pressed
    event.preventDefault();
    // get the values of password1 and password2
    var password1 = document.getElementById('password1').value;
    var password2 = document.getElementById('password2').value;
    // check if password1 and password2 are the same
    if (password1 != password2){
        // alert user
        alert('Passwords do not match');
    }else{
        // call passwordValidation function
        if (passwordValidation(password1)){
            window.location.href = "adminPanelAmenities.html";
        }
    }
}
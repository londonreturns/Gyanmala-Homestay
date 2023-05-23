// select the ham and dropdown class
const ham = document.querySelector('.ham');
const dropDown = document.querySelector('.dropdown');

// if click on ham trigger the function
ham.onclick = function() {
    // toggle open drop_open class
    dropDown.classList.toggle('drop_open');    
}
const ham = document.querySelector('.ham');
const dropDown = document.querySelector('.dropdown');

ham.onclick = function(){
    dropDown.classList.toggle('open');    
}
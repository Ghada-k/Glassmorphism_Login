let signup = document.querySelector('#signup');
let signin = document.querySelector('#signin');
let body = document.querySelector('body');
signup.onclick = function(){
    body.classList.add('signup');//to change the styling of the webpage when the user clicks the "signup" button.
}
signin.onclick = function(){
    body.classList.remove('signup');//to change the styling of the webpage when the user clicks the "signup" button.
}
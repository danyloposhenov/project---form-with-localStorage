'use strict';

//Variables

const sel = selector => document.querySelector(selector);

const formSignUp = sel('#formSignUp');
const formSignIn = sel('#formSignIn');
const firstName = sel('#firstName');
const lastName = sel('#lastName');
const emailSignUp = sel('#emailSignUp');
const passwordSignUp = sel('#passwordSignUp');
const emailSignIn = sel('#emailSignIn');
const passwordSignIn = sel('#passwordSignIn');
const signUp = sel('#signUp');
const signIn = sel('#signIn');
const refSignIn = sel('#refSignIn');
const refSignUp = sel('#refSignUp');

//RegExp

const nameRegExp = /^[a-zA-Z]{1,20}$/;
const emailRegExp = /^[\w-.]+@[a-zA-Z].+$/;
const passRegExp = /^\w{8,15}$/;

firstName.addEventListener('change', firstNameFunc);
lastName.addEventListener('change', lastNameFunc);
emailSignUp.addEventListener('change', emailFunc);
passwordSignUp.addEventListener('change', passFunc);
emailSignIn.addEventListener('change', emailFunc);
passwordSignIn.addEventListener('change', passFunc);

function firstNameFunc() {
    let testName = nameRegExp.test(firstName.value);
    if (testName) {
        firstName.style.border = '1px solid green';
    } else {
        firstName.style.border = '1px solid red';
    }
}
function lastNameFunc() {
    let testName = nameRegExp.test(lastName.value);
    if (testName) {
        lastName.style.border = '1px solid green';
    } else {
        lastName.style.border = '1px solid red';
    }
}
function emailFunc() {
    let testName = emailRegExp.test(emailSignUp.value);
    let testName2 = emailRegExp.test(emailSignIn.value);
    if (testName || testName2) {
        emailSignUp.style.border = '1px solid green';
        emailSignIn.style.border = '1px solid green';
    } else {
        emailSignUp.style.border = '1px solid red';
        emailSignIn.style.border = '1px solid red';
    }
}
function passFunc() {
    let testName = passRegExp.test(passwordSignUp.value);
    let testName2 = passRegExp.test(passwordSignIn.value);
    if (testName || testName2) {
        passwordSignUp.style.border = '1px solid green';
        passwordSignIn.style.border = '1px solid green';
    } else {
        passwordSignUp.style.border = '1px solid red';
        passwordSignIn.style.border = '1px solid red';
    }
}

function checkInput() {
    let testName = nameRegExp.test(firstName.value);
    let testLastName = nameRegExp.test(lastName.value);
    let testEmail = emailRegExp.test(emailSignUp.value);
    let testPassword = passRegExp.test(passwordSignUp.value);
    if (testName && testLastName && testEmail && testPassword) {
        signUp.disabled = false;
        signUp.style.background = 'rgb(40, 99, 148)';
    }
}

function clearInput(){
    firstName.value = '';
    lastName.value = '';
    emailSignUp.value = '';
    passwordSignUp.value = '';
    firstName.style.border = 'none';
    lastName.style.border = 'none';
    emailSignUp.style.border = 'none';
    passwordSignUp.style.border = 'none';
    signUp.disabled = true;
    signUp.style.background = 'rgb(89, 152, 203)';
}

formSignUp.addEventListener('input', checkInput);

formSignIn.style.display = 'none';
refSignIn.addEventListener('click', function(){
    formSignIn.style.display = 'flex';
    formSignUp.style.display = 'none';
})
refSignUp.addEventListener('click', function(){
    formSignIn.style.display = 'none';
    formSignUp.style.display = 'flex';
})


// LocalStorage

let arrEmail = [];
let date = [];

signUp.addEventListener('click', function(){
    let otherDate = {
        firstName: firstName.value,
        lastName: lastName.value,
        email: emailSignUp.value,
        password: passwordSignUp.value
    }
    date.push(otherDate);
    console.log(date);
    console.log(arrEmail);

    if(localStorage.length > 0 && localStorage.getItem('date')){
        date = JSON.parse(localStorage.getItem('date'));
    }
    if(!arrEmail.some(name => name.toLowerCase() === emailSignUp.value.toLowerCase())){
        arrEmail.push(emailSignUp.value);
    }
    localStorage.setItem('date', JSON.stringify(date));
    
    clearInput();
});



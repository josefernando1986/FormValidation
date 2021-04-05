const submit = document.querySelector('#submit');
let text = document.querySelector('#name');
let email = document.querySelector('#email');
let password = document.querySelector('#password');
let confirmP = document.querySelector('#confirm');
const errorName = document.querySelector('.errorName');
const errorEmail = document.querySelector('.errorEmail');
const errorPassword = document.querySelector('.errorPassword');
const errorEqual = document.querySelector('.errorEqual');


let textValue;
let emailValue;
let passwordValue;
let confirmValue;


text.addEventListener('DOMFocusOut', ()=> {
        textValue = text.value;
        if(validarText() === false){
            errorName.style.display = 'block';
        }else{
            errorName.style.display = 'none'
        }
});

email.addEventListener('DOMFocusOut', ()=> {
    emailValue = email.value;
    if(validarEmail() === false){
        errorEmail.style.display = 'block';
    }else{
        errorEmail.style.display = 'none';
    }
})

password.addEventListener('DOMFocusOut', () => {
    passwordValue = password.value;
    if(validarPassword() === false){
        errorPassword.style.display = 'block';
    }else{
        errorPassword.style.display = 'none';
    }
})


confirmP.addEventListener('DOMFocusOut', () => {
    confirmValue = confirmP.value;
        if(validarText() === true && validarEmail() === true && validarPassword() === true && validarConfirm() === true){
            submit.disabled = false;
            errorEqual.style.display = 'none';
        }else{
             errorEqual.style.display = 'block';
             submit.disabled = true;
        }
})

const validarText = () => {
    if(textValue === undefined || textValue === ''){
        return false;
    }else{
        return true;
    }
}

const validarEmail = () => {
    if(emailValue.includes('@gmail.com') || emailValue.includes('@hotmail.com') || emailValue.includes('yahoo.com')){
        return true;
    }else{
        return false;
    }
}

const validarPassword = () => {
    if(passwordValue.length < 6){
        return false;
    }else{
        return true;
    }
}

const validarConfirm = () => {
    if(passwordValue !== confirmValue){
        return false;
    }else{
        return true;
    }
}




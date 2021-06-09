
//selecting elements
let form = document.querySelector("#form");
let userName = document.getElementById("fullname");
let email = document.getElementById("email");
let password = document.getElementById("password");
let password2 = document.getElementById("password2");

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    formValidation()
})

function formValidation(){
    let userNameValue = userName.value;
    let emailValue = email.value;
    let passwordValue = password.value;
    let password2Value = password2.value;

    if(userNameValue === ''){
        errorValidation(userName, "Full Name can not be blank")
    }else{
        successValidation(userName);
    }

    function errorValidation(input, message){
        const formFlow = input.parentElement;
        const small = formFlow.querySelector("small");

        small.innerText = message;
        formFlow.className = "form-flow error";

    }
    function successValidation(input, message){
        const formFlow = input.parentElement;
        const small = formFlow.querySelector("small");

        small.innerText = message;
        formFlow.className = "form-flow success";

    }

    if(emailValue === ''){
        errorValidation(email, "Email can not be blank")
    }else{
        successValidation(email);
    }

    function errorValidation(input, message){
        const formFlow = input.parentElement;
        const small = formFlow.querySelector("small");

        small.innerText = message;
        formFlow.className = "form-flow error";

    }
    function successValidation(input, message){
        const formFlow = input.parentElement;
        const small = formFlow.querySelector("small");

        small.innerText = message;
        formFlow.className = "form-flow success";

    }

    if(passwordValue === ''){
        errorValidation(password, "Password can not be blank")
    }else{
        successValidation(password);
    }

    function errorValidation(input, message){
        const formFlow = input.parentElement;
        const small = formFlow.querySelector("small");

        small.innerText = message;
        formFlow.className = "form-flow error";

    }
    function successValidation(input, message){
        const formFlow = input.parentElement;
        const small = formFlow.querySelector("small");

        small.innerText = message;
        formFlow.className = "form-flow success";

    }

    if(password2Value === ''){
        errorValidation(password2, "Password can not be blank")
    }else if(password2Value != passwordValue){
        errorPassword(password2, 'passwords do not match')
    }
    else{
        successValidation(password2);
    }

    function errorValidation(input, message){
        const formFlow = input.parentElement;
        const small = formFlow.querySelector("small");

        small.innerText = message;
        formFlow.className = "form-flow error";

    }
    function successValidation(input, message){
        const formFlow = input.parentElement;
        const small = formFlow.querySelector("small");

        small.innerText = message;
        formFlow.className = "form-flow success";

    }

    function errorPassword(input, message){
        const formFlow = input.parentElement;
        const small = formFlow.querySelector("small");
        small.innerText = message;
        formFlow.className = "form-flow error"
    }

}
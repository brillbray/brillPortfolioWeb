function checkAlphaNum(passwordS){
    var Alpha = 0;
    var Num = 0;
    for(var i = 0; i<passwordS.length;i++){
        if(isNaN(passwordS[i])){    
            Alpha = 1;
        }else{
            Num = 1;
        }
        if(Alpha && Num)
            return 1;
    }
    return 0;
}

//Formulir
var FnameError = document.getElementById('FirstN-Error');
var LnameError = document.getElementById('LastN-Error');
var EmailError = document.getElementById('Email-Error');
var PasswordError = document.getElementById('Password-Error');
var AddressError = document.getElementById('Address-Error');
var GenderError = document.getElementById('Gender-Error');
var AgreeDailyLetterError = document.getElementById('agreeDailyL-Error');
var AgreeTermsError = document.getElementById('agreeTerms-Error');

function validateFirstName(){
    var firstN = document.getElementById('firstname').value;
    if(firstN.length < 1){
        FnameError.innerHTML = 'First name must be filled';
        return 0;
    }
    FnameError.innerHTML = '<i class="fa-solid fa-circle-check">  Valid</i>';
    return 1;
}

function validateLastName(){
    var lastN = document.getElementById('lastname').value;
    if(lastN.length < 1){
        LnameError.innerHTML = 'Last name must be filled';
        return 0;
    }
    LnameError.innerHTML = '<i class="fa-solid fa-circle-check">  Valid</i>';
    return 1;
}

function validateEmail(){
    var emailVal = document.getElementById('email').value;

    if(emailVal.length < 1){
        EmailError.innerHTML = 'Email must be filled';
        return 0;
    }
    if(!emailVal.endsWith("@gmail.com") && !emailVal.endsWith("@yahoo.com")){
        EmailError.innerHTML = 'Email must be @gmail.com or @yahoo.com';
        return 0;
    }
    EmailError.innerHTML = '<i class="fa-solid fa-circle-check">  Valid</i>';
    return 1;
}

function validatePassword(){
    var pass = document.getElementById('password');

    if(!checkAlphaNum(pass.value)){
        PasswordError.innerHTML = 'Password must contain alphanumeric';
        return 0;
    }
    PasswordError.innerHTML = '<i class="fa-solid fa-circle-check">  Valid</i>';
    return 1;
}

function validateAddress(){
    var addr = document.getElementById('address').value;
    var checkAdrWord = 10;
 
    var addrLength = checkAdrWord - addr.length;
    
    if(addr.length <  10){
        AddressError.innerHTML =  addrLength + " more characters to continue";
        return 0;
    }
    AddressError.innerHTML = '<i class="fa-solid fa-circle-check">  Valid</i>';
    return 1;
}

function checkGenderValid(){
    var checkM = document.getElementById('male');
    var checkF = document.getElementById('female');
    var checkO = document.getElementById('others');

    if(!checkM.checked && !checkF.checked && !checkO.checked){
        GenderError.innerHTML = 'Please choose one';
        return 0;
    } 
    GenderError.innerHTML = '<i class="fa-solid fa-circle-check">  Valid</i>';
    return 1;   
}

function checkAgreement(){
    var checkAgreeDailyLetter = document.getElementById('agreeDailyLetter');

    if(!checkAgreeDailyLetter.checked){
        AgreeDailyLetterError.innerHTML = 'Check the box to continue';
        return 0;
    }
    AgreeDailyLetterError.innerHTML = '<i class="fa-solid fa-circle-check">  Valid</i>';
    return 1;
}

function checkAgreementTerms(){
    var checkAgreeTerms = document.getElementById('agreeTerms');

    if(!checkAgreeTerms.checked){
        AgreeTermsError.innerHTML = 'You must accept the terms and conditions to continue';
        return 0;
    }
    AgreeTermsError.innerHTML = '<i class="fa-solid fa-circle-check">  Valid</i>';
    return 1;
}

//Warnings Button
var btn = document.getElementById('btn');

btn.addEventListener('click',function(e){
    e.preventDefault();
    alert("Check all answer and once you submitted, form can't be deleted");


    e.target.reset()
})

function burgerMenu(){
    var burgerMenu = document.querySelector('.burger');
    var nav = document.querySelector('.nav');
    burgerMenu.classList.toggle('active'); 
    nav.classList.toggle('active'); 
}


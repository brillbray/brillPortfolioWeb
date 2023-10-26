function burgerMenu(){
    var burgerMenu = document.querySelector('.burger');
    var nav = document.querySelector('.nav');
    burgerMenu.classList.toggle('active'); 
    nav.classList.toggle('active'); 
}

function checkAlphaNum(ccn){
    var Alpha = 0;
    var Num = 0;
    for(var i = 0; i<ccn.length;i++){
        if(isNaN(ccn[i])){    
            Alpha = 1;
        }else{
            Num = Num + 1;
        }
        if(Num == 16){
            return 1; 
        }
    }
    return 0;
}

function validateCCN(){
    var CCN = document.getElementById('CCN').value;
    var CCNError = document.getElementById('CCN-Error');
 
    if(CCN.length <19 || !checkAlphaNum(CCN)){
        CCNError.innerHTML = 'Credit Card Number must be 16 digit and only contain numbers (Input "-" after 4 digit number)';        
        return 0;
    }else if(!checkAlphaNum(CCN)){
        CCNError.innerHTML = 'Credit Card Number must be contain "-" after each 4 digit number';        
        return 0;
    }    
    else{
        CCNError.innerHTML = '<i class="fa-solid fa-circle-check">  Valid</i>';
        return 1;
    }
}

function btnAlert(){
    var btnAlert = document.getElementsByClassName('btn');
    if(btnAlert){
        alert('Added Payment Method to our system');
    }
}

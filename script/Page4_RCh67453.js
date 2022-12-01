////////////////////////////////////////////////////////////////////////
//Function for validation purposes
//perform the following function when use click the submit button
function validation(form){
    validateName(form);
    validatedate(form);
    validateemail(form);
    validatemobile(form);
}

//function for validaing the name
function validateName(form){
    var name = form.elements["Name"];
    if(name.validity.valueMissing){
        name.setCustomValidity("Please enter your name for easier communication");
        return false;
    }
    else{
        name.setCustomValidity("");
        return true;
    }
}

//function for validaing the mobile number
function validatemobile(form){
    var mob = form.elements["mobile"];

    if(mob.validity.valueMissing){
        mob.setCustomValidity("Please enter your mobile number");
        return false;
    }
    else if(mob.validity.patternMismatch){
        mob.setCustomValidity("Mobile number must be in 10 digit format");
        return false;
    }
    else{
        mob.setCustomValidity("");
        return true;
    }
}

//function for validating the email
function validateemail(form){
    var email = form.elements["email"];
    if(email.validity.valueMissing){
        email.setCustomValidity("Please enter your email address, email format must contain '@' symbol");
        return false;
    }
    else{
        email.setCustomValidity("");
        return true;
    }
}

//function for  validating the date
function validatedate(form){
    var date = form.elements["date"];
    if(date.validity.valueMissing){
        date.setCustomValidity("Please select the date");
        return false;
    }
    else{
        date.setCustomValidity("");
        return true;
    }
}
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

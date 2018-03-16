// Uses querySelector so enter a string for each parameter. If getting form by id the parameter would be entered as "#formid"
var FormValidator = function (form,emailField,passwordField) {
    this.form = document.querySelector(form);
    this.email = document.querySelector(emailField);
    this.password = document.querySelector(passwordField); 

    this.validEmail = function() {
        // validate email and add error class if not valid
    }
    
    this.validPassword = function() {
        // validate password and add error class if not valid
    }
    this.validateForm = function() {
        // validate form using previous two functions and if valid send asychronous post request 
    }
}

 function validateForm () {
    var form = document.querySelector("form");
    var formData = new FormData(form);
    console.log(formData.values);
    var pswrd = document.querySelector("#pswrd");
    var pswrdCnfrm = document.querySelector("#pswrdcnfrm");
    if (pswrdCnfrm) {
        var match = (pswrd.value == pswrdCnfrm.value);
        if (!match) {
            var pswrdLabel = document.querySelector("#pswrdlbl") 
        }
    }
}




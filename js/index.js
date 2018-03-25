

window.onload = function () {
// Selectors 
    var form = document.querySelector("form");
    var pswrd = document.querySelector("#pswrd");
    var pswrdCnfrm = document.querySelector("#pswrdcnfrm");
    var submitButton = document.querySelector("form").querySelector(".grdnt-btn");
    var pswrdLabel = document.querySelector("#pswrdlbl"), pswrdCnfrmLabel = document.querySelector("#pswrdcnfrmlbl");

//Functions
    function validateForm (e) {
        // Make form data object to send to server side 
        if (pswrdCnfrm) {
            var match = (pswrd.value == pswrdCnfrm.value);
            if (!match) {
                pswrdLabel.textContent = "Passwords Need to match!";
                pswrdCnfrmLabel.textContent = "Passwords Need to match!";
                pswrdCnfrm.classList.add("error");
                pswrd.classList.add("error");
                e.preventDefault();
            }
            // send ajax request to php file for server side validation 
            // if response = ok - sign in 
        }
    }
    
// Call functions
    submitButton.addEventListener("click",validateForm,false);
}





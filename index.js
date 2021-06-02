var firstName = document.querySelector(".first-name");
var lastName = document.querySelector(".last-name");
var emailAddress = document.querySelector(".email-address");
var password = document.querySelector(".password");
var submitButton = document.querySelector(".submit-button");


submitButton.addEventListener("click", function() {

    if (firstName.value == "") {
        document.querySelector(".error-first").classList.add("active");
        firstName.classList.add("active-border");
        document.querySelector(".error-first").classList.remove("inactive");
    } else {
        document.querySelector(".error-first").classList.remove("active");
        firstName.classList.remove("active-border");
        document.querySelector(".error-first").classList.add("inactive");
    }
});

submitButton.addEventListener("click", function() {

    if (lastName.value == "") {
        document.querySelector(".error-last").classList.add("active");
        lastName.classList.add("active-border");
        document.querySelector(".error-last").classList.remove("inactive");
    } else {
        document.querySelector(".error-last").classList.remove("active");
        lastName.classList.remove("active-border");
        document.querySelector(".error-last").classList.add("inactive");
    }
});

submitButton.addEventListener("click", function() {

    var email = emailAddress.value;

    function validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };

    if (email == "" || validateEmail(email) == false) {
        document.querySelector(".error-email").classList.add("active");
        emailAddress.classList.add("active-border");
        document.querySelector(".error-email").classList.remove("inactive");
    } else {
        document.querySelector(".error-email").classList.remove("active");
        emailAddress.classList.remove("active-border");
        document.querySelector(".error-email").classList.add("inactive");
    }
});

submitButton.addEventListener("click", function() {

    if (password.value == "") {
        document.querySelector(".error-password").classList.add("active");
        password.classList.add("active-border");
        document.querySelector(".error-password").classList.remove("inactive");
    } else {
        document.querySelector(".error-password").classList.remove("active");
        password.classList.remove("active-border");
        document.querySelector(".error-password").classList.add("inactive");
    }
});
var btnSend = document.querySelector("#btnSend");
var message = document.querySelector("#mensage");
var emailborder = document.querySelector("#email");

btnSend.addEventListener ("click", function (){
    var email = document.querySelector("#email").value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(email)){
        message.textContent="";
        emailborder.style.border = "border: 1px solid hsl(0, 0%, 59%)";
    }
    else {
        message.textContent="Provide a valid email address";
        emailborder.style.border = "1px solid hsl(354, 100%, 66%)";
    }
})
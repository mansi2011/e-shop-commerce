var menuItems = document.getElementById("menu-item")
menuItems.style.maxHeight = "0px";

function menutoggle(){
if(menuItems.style.maxHeight == "0px"){
    menuItems.style.maxHeight = "300px"
}
else{
    menuItems.style.maxHeight = "0px";
}
}


var loginForm = document.getElementById("login-form");
var registerForm = document.getElementById("register-form");
var registerBtn = document.getElementById("register");
var accountExist = document.getElementById("account-boolean");
var displayLogin = document.getElementById("display-login");
var displayRegister = document.getElementById("display-register")

registerBtn.addEventListener("click", register);

function register(){
    registerForm.style.display = "block";
    displayRegister.style.display = "block";
    loginForm.style.display = "none";
    accountExist.style.display="none";
    displayLogin.style.display="none";

}


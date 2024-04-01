let signin = document.getElementById ("signin");

let signup = document.getElementById ("signup");

let tosignup = document.getElementById ("tosignup");

let tosignin = document.getElementById ("tosignin");

tosignup.onclick = function() {
    signin.classList.add("hide");
    signup.classList.remove("hide");
}

tosignin.onclick = function() {
    signup.classList.add("hide");
    signin.classList.remove("hide");
}
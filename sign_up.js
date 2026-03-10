const loginMenu = document.getElementById("form-login");
const signupButton = document.getElementById("signup-button")
function validateUsername(username){
    
    let regex = /^[a-zA-Z][a-zA-Z0-9_-]{2,19}$/;
    if(!regex.test(username)){
        return false;
    }

    return true
}

function validatePassword(password){
    
    if(password.length < 8){
        return false
    }
    if(/\s/.test(password)){
        return false
    }

    if(!/[A-Z]/.test(password)) return false;
    if(!/[a-z]/.test(password)) return false;
    if (!/[0-9]/.test(password)) return false;
    
    let specialChars = /[!@#$%^&*()\-\_=+\[\]{}\|;:'",.<>\/\?`~]/;
    if(!specialChars.test(password)){
        return false;
    }

    return true;

}

function confirmPass(p, cp){
    return p === cp;

}

function confirmEmail(email){
    let regex = /^[A-Za-z0-9._-]+@(.*)\.(com|net|io)$/;
    return regex.test(email);
}


function ValidateSignup(){
    let last = loginMenu.lastElementChild;

    if(last && (last.classList.contains("error-message") || last.classList.contains("success-message"))){
        loginMenu.removeChild(last);
    }
    
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let email = document.getElementById("email").value;
    let confirmPassword = document.getElementById("confirm-password").value;
    let div = document.createElement("div");

    if(!validateUsername(username)){
        div.textContent = "Invalid username(3-20 characters, only letters, numbers, underscores, and hyphens, first charachter must be a letter)";
        div.classList.add("error-message");
        loginMenu.appendChild(div)
        return;
    }
    
    if(!confirmEmail(email)){
        div.textContent = "Invalid email(Must be a valid email address format (e.g., username@example.com))";
        div.classList.add("error-message");
        loginMenu.appendChild(div)
        return;
    }

    if(!validatePassword(password)){
        div.textContent = "Invalid password (Min 8 characters, one capital letter, one lowercase, and one special charachter from : !@#$%^&*()-_=+[]{}|;:\'\",.<>?/`~.)";
        div.classList.add("error-message");
        loginMenu.appendChild(div)
        return;
    }
    

    if(!confirmPass(password, confirmPassword)){
        div.textContent = "Passwords do not match";
        div.classList.add("error-message");
        loginMenu.appendChild(div)
        return; 
    }
    
    div.textContent = "Successful Signup!";
    div.classList.add("success-message");
    loginMenu.appendChild(div);
    setTimeout(()=>{
        window.location.href = "login.html";
    }, 2000);

}

signupButton.addEventListener("click", function (event){
    ValidateSignup();
});
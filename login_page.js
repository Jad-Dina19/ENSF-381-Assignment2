
const loginButton = document.getElementById("login-button");
const loginMenu = document.getElementById("form-login");
const signupButton = document.getElementById("signup-button");

async function getData(){
    let data = await fetch("https://jsonplaceholder.typicode.com/users");
    return await data.json();
}
function validateLogin(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    getData().then((users) => {

        let found = false
        users.forEach(user => {
            if(user.username.toLowerCase() === username.toLowerCase()){
                found = true
                let div = document.createElement("div");
                if(user.email === password){
                    div.textContent = "Login successful.";
                    div.classList.add("success-message");
                       setTimeout(() => {
                        window.location.href = "menu_view.html";
                    }, 2000);
                    loginMenu.appendChild(div);
                   
                }
                else{
                    div.textContent = "Incorrect password.";
                    div.classList.add("error-message");
                    loginMenu.appendChild(div);
                }
            }
            
        });
        if(!found){
            let div = document.createElement("div");
            div.textContent = "Username not found.";
            div.classList.add("error-message");
            loginMenu.appendChild(div);
        }
    }); 
}

loginButton.addEventListener("click", function(event){
    validateLogin();
});

signupButton.addEventListener("click", function(event){
    window.location.href = "signup.html";
});
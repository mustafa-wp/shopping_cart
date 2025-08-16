let username = document.querySelector("#username");
let password = document.querySelector("#password");
let loginBtn = document.querySelector("#Sign_in");

let getUser = localStorage.getItem("username");
let getPassword = localStorage.getItem("password");

loginBtn.addEventListener("click", Login);

function Login(e) {
    e.preventDefault();
    if (username.value === "" || password.value === "") {
        alert("Please Fill Data");
    } else {
        if (
            getUser &&
            getUser.trim() === username.value.trim() &&
            getPassword &&
            getPassword.trim() === password.value.trim()
        ) {
            setTimeout(() => {
                window.location = "index.html";
            }, 500);
        } else {
            alert("username or password is wrong !!");
        }
    }
}

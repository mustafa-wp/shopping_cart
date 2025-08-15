let username = document.querySelector("#username");
let password = document.querySelector("#password");
let loginBtn = document.querySelector("#Sign_in");

let getUser = localStorage.getItem("username");
let getPassword = localStorage.getItem("password");

loginBtn.addEventListener("click", function (e) {
    e.preventDefault();
    if (username.value === "" || password.value === "") {
        alert("Please Fill Data");
    } else {
        if (
            getUser &&
            getUser.trim() === "mostafa" &&
            getPassword &&
            getPassword === "123"
        ) {
            setTimeout(() => {
                window.location = "index.html";
            });
        } else {
            alert("username or password is wrong !!");
        }
    }
});

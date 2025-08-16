// let userInfo = document.querySelector("#user_info");
// let userDom = document.querySelector("#user");
// let links = document.querySelector("#links");
// let logOutBtn = document.querySelector("#logOut");

// let username = localStorage.getItem("username");

// if (username) {
//   links.remove();
//   userInfo.style.display = "flex";
//   userDom.innerHTML = username;
// }

// logOutBtn.addEventListener("click", function () {
// localStorage.clear();  // يمسح كل شيء من localStorage

//   setTimeout(() => {
//     window.location = "register.html";
//   }, 1500);
//   console.log(localStorage.getItem("password")); 
// });


document.addEventListener("DOMContentLoaded", () => {
  let userInfo = document.querySelector("#user_info");
  let userDom = document.querySelector("#user");
  let links = document.querySelector("#links");

  let username = localStorage.getItem("username");

  if (username) {
    if (links) links.remove();
    if (userInfo) userInfo.style.display = "flex";
    if (userDom) userDom.innerHTML = username;
  }

  // اتأكد إن زرار تسجيل الخروج شغال
  let logOutBtn = document.querySelector("#logOut");
  if (logOutBtn) {
    logOutBtn.addEventListener("click", function () {
      localStorage.clear(); // يمسح البيانات كلها
      alert("تم تسجيل الخروج بنجاح ✅"); // عشان تتأكد أنه اشتغل

      setTimeout(() => {
        window.location = "register.html";
      }, 1500);
    });
  } 
});

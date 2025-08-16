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

  let logOutBtn = document.querySelector("#logOut");
  if (logOutBtn) {
    logOutBtn.addEventListener("click", function () {
      localStorage.clear();
      alert("Logged out successfully ✅");

      setTimeout(() => {
        window.location = "register.html";
      }, 1500);
    });
  }
});

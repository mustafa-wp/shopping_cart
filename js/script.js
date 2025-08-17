let products = []; // global علشان addtocart تقدر توصلها
let cartproductDom; // global
let badgeDom; // global للبادج
let cartMenuDom; // global للقائمة الجانبية
let shoppingcartIcon; // global لايقونة الكارت

document.addEventListener("DOMContentLoaded", () => {
  let userInfo = document.querySelector("#user_info");
  let userDom = document.querySelector("#user");
  let links = document.querySelector("#links");

  let username = localStorage.getItem("username");

  badgeDom = document.querySelector(".badge");
  cartproductDom = document.querySelector(".cats-products-tite");
  cartMenuDom = document.querySelector(".cats-products");
  shoppingcartIcon = document.querySelector(".shoppingcart");

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

  if (shoppingcartIcon) {
    shoppingcartIcon.addEventListener("click", toggleCartMenu);
  }
});

/**********Products************/
async function fetchProducts() {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    products = await res.json(); // save in global
    const productsDiv = document.getElementById("products");

    products.forEach((product) => {
      const col = document.createElement("div");
      col.className = "col-md-3";
      col.innerHTML = `
        <div class="product-card">
          <div>
            <img src="${product.image}" alt="${product.title}" class="img-fluid">
            <h5 class="mt-2">${product.title}</h5>
            <p><strong>$${product.price}</strong></p>
          </div>
          <div class="actions mt-3">
            <button onclick="checkLogedUser(${product.id}); this.classList.add('addtocart')" class="btn btn-success">
              Add to Cart
            </button>
            <button class="btn-heart"><i class="fa-regular fa-heart"></i></button>
          </div>
        </div>
      `;
      productsDiv.appendChild(col);
    });
  } catch (err) {
    console.error("Error fetching products:", err);
  }
}
fetchProducts();

/*******checked in user*******/
function checkLogedUser(id) {
  if (localStorage.getItem("username")) {
    addtocart(id);
  } else {
    window.location = "register.html";
  }
}

/********** add to cart ***********/
function addtocart(id) {
  let chosenItem = products.find((item) => item.id === id);
  if (chosenItem && cartproductDom) {
    let p = document.createElement("p");
    p.textContent = chosenItem.title;
    cartproductDom.appendChild(p);

    let cartproductLength = document.querySelectorAll(".cats-products-tite p");

    if (badgeDom) {
      badgeDom.style.display = "inline-block";
      badgeDom.innerHTML = cartproductLength.length;
    }
  }
}

/********** toggle cart menu ***********/
function toggleCartMenu() {
  if (cartproductDom && cartproductDom.innerHTML.trim() !== "") {
    cartMenuDom.style.display = cartMenuDom.style.display === "block" ? "none" : "block";
  }
}

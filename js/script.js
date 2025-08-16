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


/**********Products************/

async function fetchProducts() {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    const products = await res.json();
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
            <button onclick="checkLogedUser()" class="btn btn-success">Add to Cart</button>
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
function checkLogedUser() {
  if (localStorage.getItem('username')) {
    console.log("add to cart");
  } else {
    window.location = "register.html";
  }
}
// End of code
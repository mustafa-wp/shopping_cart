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
          col.className = "col-md-3 mb-4";
          col.innerHTML = `
            <div class="product-card border p-3 rounded">
              <div class="text-center">
                <img src="${product.image}" alt="${product.title}" class="img-fluid" style="height:150px;object-fit:contain;">
                <h6 class="mt-2">${product.title}</h6>
                <p><strong>$${product.price}</strong></p>
              </div>
              <div class="actions mt-3 d-flex justify-content-between">
                <button class="btn btn-success add-to-cart" data-id="${product.id}">Add to Cart</button>
                <button class="btn-heart btn btn-outline-danger"><i class="fa-regular fa-heart"></i></button>
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

    // Event delegation: يطبع الـ id في الكونسول
    document.addEventListener("click", function(e) {
      if (e.target.classList.contains("add-to-cart")) {
        const productId = e.target.getAttribute("data-id");
        console.log(productId);
      }
    });
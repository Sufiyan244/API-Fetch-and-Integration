let Api = "https://fakestoreapi.com/products";
const productContainer = document.getElementById("product-container");
const loading = document.getElementById("loading");

async function getApi(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();

    // Hide loading spinner
    loading.style.display = "none";

    // Display products
    data.forEach(product => {
      const card = document.createElement("div");
      card.classList.add("col-md-3", "col-sm-6");

      card.innerHTML = `
        <div class="card h-100 shadow-sm">
          <img src="${product.image}" class="card-img-top" alt="${product.title}">
          <div class="card-body">
            <h6 class="card-title text-truncate">${product.title}</h6>
            <p class="price">$${product.price}</p>
            <button class="btn btn-primary w-100">View Details</button>
          </div>
        </div>
      `;
      productContainer.appendChild(card);
    });

  } catch (error) {
    console.error("Error fetching API:", error);
    loading.innerHTML = `<p class="text-danger">⚠️ Failed to load products. Please try again.</p>`;
  }
}

getApi(Api);

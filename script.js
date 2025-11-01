let Api = "https://fakestoreapi.com/products";

async function getApi(url) {
  try {
    // Show loading spinner
    document.getElementById("loading").style.display = "block";

    let response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    let data = await response.json();
    displayProducts(data);

  } catch (error) {
    console.error("Error fetching data:", error);
    document.getElementById("loading").innerHTML = `
      <div class="alert alert-danger">Failed to load products. Please try again later.</div>
    `;
  } finally {
    // Hide loading spinner after loading
    document.getElementById("loading").style.display = "none";
  }
}

// Function to display products in cards
function displayProducts(products) {
  let container = document.getElementById("product-container");
  container.innerHTML = "";

  products.forEach((product) => {
    let card = document.createElement("div");
    card.classList.add("col-sm-6", "col-md-4", "col-lg-3");

    card.innerHTML = `
      <div class="card product-card h-100">
        <img src="${product.image}" class="card-img-top product-img" alt="${product.title}">
        <div class="card-body d-flex flex-column">
          <h6 class="card-title text-truncate text-center" title="${product.title}">${product.title}</h6>
          <p class="card-text text-muted small text-center">${product.category}</p>
          <p class="price mb-2 text-center">$${product.price}</p>
          <button class="btn btn-primary mt-auto">Add to cart</button>
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}

getApi(Api);

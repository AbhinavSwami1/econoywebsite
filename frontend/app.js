// Fetching products from the backend
document.addEventListener("DOMContentLoaded", function() {
    fetch('http://localhost:5000/products')
        .then(response => response.json())
        .then(products => {
            const productList = document.getElementById('productList');
            products.forEach(product => {
                const productCard = document.createElement('div');
                productCard.classList.add('product-card');
                productCard.innerHTML = `
                    <img src="${product.image_url}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>₹${product.price}</p>
                    <button onclick="addToCart(${product.id})">Add to Cart</button>
                `;
                productList.appendChild(productCard);
            });
        })
        .catch(error => console.error('Error:', error));
});

// Add to cart logic
function addToCart(productId) {
    console.log(`Product ${productId} added to cart`);
}

// Toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

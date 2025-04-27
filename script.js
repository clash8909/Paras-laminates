// Mobile Menu Toggle
document.querySelector('.mobile-menu').addEventListener('click', () => {
    document.querySelector('nav ul').classList.toggle('show');
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Product Data
const products = [
    {
        name: "Royal Oak",
        price: "₹45/sq.ft",
        image: "images/product1.jpg",
        category: "wood"
    },
    // Add more products
];

// Load Products
function loadProducts() {
    const grid = document.querySelector('.product-grid');
    grid.innerHTML = products.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
        </div>
    `).join('');
}

// Initialize
document.addEventListener('DOMContentLoaded', loadProducts);
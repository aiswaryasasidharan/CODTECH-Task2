let cart = [];

// Add product to cart
function addToCart(productId) {
    // Assuming a simple product structure
    const product = {
        id: productId,
        name: "Product " + productId,
        price: 29.99,
        quantity: 1
    };

    // Check if product is already in cart
    const existingProduct = cart.find(p => p.id === productId);
    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cart.push(product);
    }

    alert("Product added to cart!");
    updateCart();
}

// Update cart display
function updateCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    if (!cartItemsContainer) return;

    cartItemsContainer.innerHTML = '';
    cart.forEach(product => {
        const item = document.createElement('div');
        item.className = 'cart-item';
        item.innerHTML = `
            <h3>${product.name}</h3>
            <p>Price: $${product.price}</p>
            <p>Quantity: ${product.quantity}</p>
        `;
        cartItemsContainer.appendChild(item);
    });
}

// Proceed to checkout
function proceedToCheckout() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    // Redirect to checkout page
    window.location.href = "checkout.html";
}

// Handle checkout form submission
document.getElementById('checkout-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Order placed successfully!");
    cart = [];
    window.location.href = "index.html";
});


// image slider 

let currentIndex = 0;

function moveSlide(step) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;

    currentIndex += step;

    // Loop back to the first slide if we're on the last one
    if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }

    // Loop back to the last slide if we're on the first one
    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    }

    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

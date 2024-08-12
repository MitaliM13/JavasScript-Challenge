document.addEventListener('DOMContentLoaded', function () {
    const cartItems = [];
    const cartCount = document.getElementById('cart-count');
    const cartTotal = document.getElementById('cart-total');
    const cartItemsContainer = document.getElementById('cart-items');
    const productListContainer = document.querySelector('.product-list');
    const checkoutForm = document.getElementById('checkout-form');
    const confirmationMessage = document.getElementById('confirmation-message');

    // Fetch product data from JSON file
    fetch('products.json')
        .then(response => response.json())
        .then(products => {
            products.forEach(product => {
                const productItem = document.createElement('div');
                productItem.classList.add('product-item');

                productItem.innerHTML = `
                    <img src="${product.imageUrl}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <p>$${product.price.toFixed(2)}</p>
                    <button class="add-to-cart" data-id="${product.id}" data-name="${product.name}" data-price="${product.price.toFixed(2)}">Add to Cart</button>
                `;

                productListContainer.appendChild(productItem);
            });

            // Add event listeners to dynamically created buttons
            document.querySelectorAll('.add-to-cart').forEach(button => {
                button.addEventListener('click', function () {
                    const productId = this.dataset.id;
                    const productName = this.dataset.name;
                    const productPrice = parseFloat(this.dataset.price);

                    addToCart(productId, productName, productPrice);
                });
            });
        });

    function addToCart(productId, productName, productPrice) {
        const cartItem = cartItems.find(item => item.id === productId);

        if (cartItem) {
            cartItem.quantity += 1;
        } else {
            cartItems.push({ id: productId, name: productName, price: productPrice, quantity: 1 });
        }

        updateCart();
    }

    function updateCart() {
        cartItemsContainer.innerHTML = '';
        let total = 0;
        cartItems.forEach(item => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;
            const cartItemElement = document.createElement('div');
            cartItemElement.classList.add('cart-item');

            cartItemElement.innerHTML = `
                <span>${item.name}</span>
                <span>$${item.price.toFixed(2)}</span>
                <span>Quantity: 
                    <button class="quantity-decrease" data-id="${item.id}">-</button>
                    ${item.quantity}
                    <button class="quantity-increase" data-id="${item.id}">+</button>
                </span>
                <span>Total: $${itemTotal.toFixed(2)}</span>
                <button class="remove-item" data-id="${item.id}">Remove</button>
            `;

            cartItemsContainer.appendChild(cartItemElement);
        });
        cartCount.innerText = cartItems.length;
        cartTotal.innerText = total.toFixed(2);

        // Add event listeners for quantity increase/decrease and remove buttons
        document.querySelectorAll('.quantity-increase').forEach(button => {
            button.addEventListener('click', function () {
                const productId = this.dataset.id;
                increaseQuantity(productId);
            });
        });

        document.querySelectorAll('.quantity-decrease').forEach(button => {
            button.addEventListener('click', function () {
                const productId = this.dataset.id;
                decreaseQuantity(productId);
            });
        });

        document.querySelectorAll('.remove-item').forEach(button => {
            button.addEventListener('click', function () {
                const productId = this.dataset.id;
                removeFromCart(productId);
            });
        });
    }

    function increaseQuantity(productId) {
        const cartItem = cartItems.find(item => item.id === productId);
        if (cartItem) {
            cartItem.quantity += 1;
            updateCart();
        }
    }

    function decreaseQuantity(productId) {
        const cartItem = cartItems.find(item => item.id === productId);
        if (cartItem && cartItem.quantity > 1) {
            cartItem.quantity -= 1;
        } else if (cartItem && cartItem.quantity === 1) {
            removeFromCart(productId);
        }
        updateCart();
    }

    function removeFromCart(productId) {
        const itemIndex = cartItems.findIndex(item => item.id === productId);
        if (itemIndex > -1) {
            cartItems.splice(itemIndex, 1);
            updateCart();
        }
    }

    // Handle form submission
    checkoutForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const address = document.getElementById('address').value;
        const payment = document.getElementById('payment').value;

        if (cartItems.length === 0) {
            alert('Your cart is empty. Please add some products before checking out.');
            return;
        }

        // Simulate checkout process
        confirmationMessage.innerHTML = `
            <h3>Order Confirmation</h3>
            <p>Thank you, ${name}, for your purchase!</p>
            <p>Shipping to: ${address}</p>
            <p>Payment method: ${payment}</p>
            <p>Total Amount: $${cartTotal.innerText}</p>
            <h4>Order Details:</h4>
            <ul>
                ${cartItems.map(item => `<li>${item.name} x ${item.quantity} - $${(item.price * item.quantity).toFixed(2)}</li>`).join('')}
            </ul>
        `;

        // Clear cart after checkout
        cartItems.length = 0;
        updateCart();

        // Reset form
        checkoutForm.reset();
    });
});

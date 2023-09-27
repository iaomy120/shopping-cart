let products = [
    { name: "iPhone 15 Pro Max", price: 2099 },
    { name: "iPhone 14 Pro Max", price: 1599 },
    { name: "iPhone 13 Pro Max", price: 1299 },
    { name: "Samsung S23 Ultra", price: 1899 },
    // add more products as needed
];

let cart = [];

function addToCart(product) {
    cart.push(product);
    displayCart();
}

function removeFromCart(product) {
    let index = cart.indexOf(product);
    if (index > -1) {
        cart.splice(index, 1);
    }
    displayCart();
}

function displayProducts() {
    let productsDiv = document.getElementById("products");
    productsDiv.innerHTML = "";
    products.forEach((product) => {
        let productDiv = document.createElement("div");
        productDiv.textContent = product.name + " - " + product.price;
        let button = document.createElement("button");
        button.textContent = "Add to Cart";
        button.onclick = function () {
            addToCart(product);
        };
        productDiv.appendChild(button);
        productsDiv.appendChild(productDiv);
    });
}

function displayCart() {
    let cartDiv = document.getElementById("cart");
    cartDiv.innerHTML = "";
    cart.forEach((product) => {
        let productDiv = document.createElement("div");
        productDiv.textContent = product.name + " - " + product.price;
        let button = document.createElement("button");
        button.textContent = "Remove";
        button.onclick = function () {
            removeFromCart(product);
        };
        productDiv.appendChild(button);
        cartDiv.appendChild(productDiv);
    });
}

displayProducts();
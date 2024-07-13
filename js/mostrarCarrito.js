import { showCustomAlert } from './alert.js';


const productCards = document.getElementById('productCards');
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function removeFromCart(productName, productSize) {
    // Filtrar el carrito para eliminar el producto seleccionado
    cart = cart.filter(product => !(product.name === productName && product.size === productSize));
    
    // Actualizar el localStorage con el nuevo carrito
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Actualizar visualmente el carrito sin recargar la página
    renderCart(); // Suponiendo que tienes una función para actualizar la vista del carrito
}

// Función para renderizar el carrito
function renderCart() {
    productCards.innerHTML = ''; // Limpiar el contenido actual del carrito
    
    if (cart.length > 0) {
        let total = 0;

        cart.forEach(product => {
            const totalPrice = product.price; // El precio total ya se calcula en addToCart
            total += totalPrice;

            const itemDiv = document.createElement('div');
            itemDiv.className = 'row align-items-center mb-3';
            itemDiv.innerHTML = `
            <div  class="d-none d-md-flex d-flex justify-content-between align-items-center">
            <div class="col-md-2">${product.name}</div>
            <div class="col-md-2 text-center">${product.size}</div>
            <div class="col-md-2 text-center">${product.quantity}</div>
            <div class="col-md-2 text-center">$${(product.price / product.quantity).toLocaleString()}</div>
            <div class="col-md-1 text-end">$${totalPrice.toLocaleString()}</div>
            <div class="col-md-1 text-end">
            <button class="btn btn-outline-dark btn-sm">Eliminar</button>
            </div>
            </div>
            `;
            
            const deleteButton = itemDiv.querySelector('button');
            deleteButton.addEventListener('click', () => {
                removeFromCart(product.name, product.size);
            });

            productCards.appendChild(itemDiv);
        });

        const cartTotal = document.getElementById('cartTotal');
        cartTotal.innerHTML = `<h4>Total: $${total.toLocaleString()}</h4>`;
    } else {
        productCards.innerHTML = '<p>El carrito está vacío.</p>';
        const cartTotal = document.getElementById('cartTotal');
        cartTotal.innerHTML = ''; // Limpiar el total si el carrito está vacío
    }
}

// Llamar a renderCart para inicializar la vista del carrito
renderCart();




document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.btn-pagar').addEventListener('click', function (event) {
        event.preventDefault();
        localStorage.removeItem('cart');

        showCustomAlert('exito','Compra realizada','#6DDA72');

        setTimeout(() => {
            location.reload(); // Actualizar la página
        },2500);

      
    });
});

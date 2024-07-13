import { showCustomAlert } from './alert.js';


let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(productName,size, price,productQuantity) {
    const existingItem = cart.find(item => item.name === productName && item.size === size);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ name: productName, price: price, size: size, quantity: productQuantity });
    }
    updateCartStorage();
    updateCartDisplay();
    
    showCustomAlert('Éxito', 'Se agrego en el carrito', '#6DDA72');
}

function updateCartStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function updateCartDisplay() {
    const cartCounter = document.getElementById('cart-counter');
    if (cartCounter) {
        const itemCount = cart.reduce((total, item) => total + item.quantity, 0);
        cartCounter.textContent = itemCount;
        
    }
}


document.querySelectorAll('.btn-agregar').forEach(button => {
    button.addEventListener('click', function() {

        const card = this.closest('.card-single');
        const productName = card.querySelector('.product-name-class').textContent;
        const talleSelect = card.querySelector('#talle'); 
        const size = talleSelect.value;
        const productPrice = parseFloat(document.getElementById('product-price').innerText.replace('$', '').replace(',', ''));
        const productQuantity = parseInt(document.getElementById('product-cantidad').value);

        if (!size) {
            showCustomAlert('error','Por eliga un talle','#CE1212');
            return;
        }else{
            addToCart(productName,size, productPrice,productQuantity);

        }

    });
});

// Actualiza el display cuando la página se carga
document.addEventListener('DOMContentLoaded', function() {
    updateCartDisplay();
});

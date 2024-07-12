// import products from './js/productos.js';

window.products = products;

// Función para almacenar los datos del producto seleccionado en localStorage
window.showProduct = function(product) {
  localStorage.setItem('selectedProduct', JSON.stringify(product));
  window.location.href = 'single_product.html';
};

// Evento al cargar el contenido de la página
document.addEventListener('DOMContentLoaded', function() {
    // Obtener los datos del producto desde localStorage
    const product = JSON.parse(localStorage.getItem('selectedProduct'));
    
    if (product) {
        document.getElementById('product-img').src = product.image;
        document.getElementById('product-img').alt = product.name;
        document.getElementById('product-name').textContent = product.name;
        document.getElementById('product-description').textContent = product.description;
        document.getElementById('product-price').textContent = '$' + product.price;
        document.getElementById('product-size-1').textContent = product.size[0];
        document.getElementById('product-size-2').textContent = product.size[1];
        document.getElementById('product-size-3').textContent = product.size[2];
        document.getElementById('product-size-4').textContent = product.size[3];
    }
    
    const product_cantidad = document.getElementById('product-cantidad');
    
    // Permitir solo el uso de los botones de incremento/decremento
    product_cantidad.addEventListener('wheel', function(event) {
        event.preventDefault();
    });
    
    // Capturar los eventos de teclado para prevenir la edición directa
    product_cantidad.addEventListener('keydown', function(event) {
        event.preventDefault();
    });
});
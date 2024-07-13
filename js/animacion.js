// JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const cartBtn = document.querySelector('.cartBtn');
  
    // Agregar clase al hacer hover para iniciar la animación de la "product"
    cartBtn.addEventListener('mouseenter', function() {
      cartBtn.classList.add('hovered');
    });
  
    // Remover clase al dejar de hacer hover
    cartBtn.addEventListener('mouseleave', function() {
      cartBtn.classList.remove('hovered');
    });
  });
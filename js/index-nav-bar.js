// menu.js
document.addEventListener('DOMContentLoaded', function() {
    const menu = document.querySelector('#menu-icon-header');
    const navbar = document.querySelector('.navbar');

    menu.onclick = () => {
        menu.classList.toggle('bx-x');
        navbar.classList.toggle('open');
    };
});
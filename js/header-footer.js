

// header.js
document.addEventListener('DOMContentLoaded', function() {
    const headerHTML = `
    <header>
        <a href="index.html">
            <img class="img-header" src="./img/imgLogos/LogoHeader.png" alt="Logo">
        </a>

        <ul class="navbar">
            <li><a href="index.html">HOME</a></li>
            <li><a href="contacto.html">CONTACTO</a></li>
            <li><a href="index.html#idIndexProducto"> PRODUCTOS</a></li>
            <li><a href="registro.html">REGISTRARSE</a></li>
            <li><a href="login.html">LOGIN</a></li>
        </ul>
        <div class="custon-div-header m-0 ">
            <a>BLAZEBOARD</a>
            <a href="carrito.html" class="car text-decoration-none"><i class="ri-shopping-cart-fill float-end"></i></a>
            <div class="bx bx-menu" id="menu-icon-header"></div>
        </div>

    </header> 
    `;
    document.getElementById('header-container').innerHTML = headerHTML;
});



// footer.js
document.addEventListener('DOMContentLoaded', function() {
    const footerHTML = `
        <footer class="footer mt-auto">
            <div>
                <div class="d-flex justify-content-between align-items-center">
                    <img src="./img/imgLogos/circa.jpg" class="img-fluid footer-img-logos" alt="Circa Logo">
                    <img src="./img/imgLogos/dc.jpg" class="img-fluid footer-img-logos" alt="DC Logo">
                    <img src="./img/imgLogos/stacz.jpg" class="img-fluid footer-img-logos" alt="Stacz Logo">
                    <img src="./img/imgLogos/vans.jpg" class="img-fluid footer-img-logos" alt="Vans Logo">
                </div>
            </div>
            <div class="div-footer">
                <div class="custom-row">
                    <div class="footer-div-info">
                        <img class="img-footer" src="./img/imgLogos/LogoHeader.png" alt="Logo">
                        <div>
                            <p>Dirección: Av. Moda 123, Ciudad Fashion, CP 54321</p>
                            <p>Teléfono: +1 (555) 123-4567</p>
                            <p>Email: info@miempresa.com</p>
                        </div>
                        <div>
                            <button type="button" class="btn btn-icon btn-lg">
                                <a href="https://www.whatsapp.com/">
                                    <i class="bi bi-whatsapp fs-1"></i>
                                </a>
                            </button>
                            <button type="button" class="btn btn-icon btn-lg">
                                <a href="https://www.instagram.com/">
                                    <i class="bi bi-instagram fs-1"></i>
                                </a>
                            </button>
                            <button type="button" class="btn btn-icon btn-lg">
                                <a href="https://twitter.com/">
                                    <i class="bi bi-twitter-x fs-1"></i>
                                </a>
                            </button>
                        </div>
                    </div>
                    <div class="footer-div-custom">
                        <h3>NOSOTROS</h3>
                        <ul class="p-0">
                            <li><a href="contacto.html">Contacto</a></li>
                        </ul>
                    </div>
                    <div class="footer-div-custom">
                        <h3>CATEGORIA</h3>
                        <ul class="p-0">
                            <li><a href="remeras.html">Remeras</a></li>
                            <li><a href="zapatillas.html">Zapatillas</a></li>
                            <li><a href="buzos.html">Buzos</a></li>
                        </ul>
                    </div>
                    <div class="footer-div-custom" id="div-plcd">
                        <h3>POLITICAS Y CONDICIONES</h3>
                        <ul class="p-0">
                            <li><a href="preguntasFrecuentes.html">Preguntas Frecuentes</a></li>
                        </ul>
                    </div>
                    <div class="footer-div-custom" id="div-inbz">
                        <h3>INCRIBITE A BLAZEBOARD</h3>
                        <p>Inscríbete a BlazeBoard para recibir promociones y descuentos para tus futuras compras</p>
                        <form>
                            <input type="email" id="emailInput" class="form-control" placeholder="Tu correo electrónico">
                            <button type="submit" class="btn btn-primary mt-2">Enviar</button>
                        </form>
                    </div>
                </div>
            </div>
            <div class="text-center div-footer-bootom">
                <p>Derechos reservados 2025 &copy;</p>
            </div>
        </footer>
    `;
    document.getElementById('footer-container').innerHTML = footerHTML;
});
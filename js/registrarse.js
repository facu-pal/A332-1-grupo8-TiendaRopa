import { showCustomAlert } from './alert.js';


document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.btnRegistrarse').addEventListener('click', function (event) {
        event.preventDefault();
        
        let nombre = document.querySelector('input[name="nombre"]').value.trim();
        let apellido = document.querySelector('input[name="apellido"]').value.trim();
        let direccion = document.querySelector('input[name="direccion"]').value.trim();
        let telefono = document.querySelector('input[name="telefono"]').value.trim();
        let email = document.querySelector('input[name="email"]').value.trim();
        let repetirEmail = document.querySelectorAll('input[name="email"]')[1].value.trim();
        let contrasena = document.querySelector('input[name="contrasena"]').value.trim();
        let repetirContrasena = document.querySelectorAll('input[name="contrasena"]')[1].value.trim();

        let missingFields = [];

        if (nombre === '') missingFields.push('Nombre');
        if (apellido === '') missingFields.push('Apellido');
        if (direccion === '') missingFields.push('Dirección');
        if (telefono === '') missingFields.push('Teléfono');
        if (email === '') missingFields.push('Email');
        if (repetirEmail === '') missingFields.push('Repetir Email');
        if (contrasena === '') missingFields.push('Contraseña');
        if (repetirContrasena === '') missingFields.push('Repetir Contraseña');

        if (missingFields.length > 0) {
            showCustomAlert('error','Por favor complete los siguientes campos: ' + missingFields.join(', '),'#CE1212');
        } else {
            showCustomAlert('exito','Registro completado','#6DDA72');
            document.querySelector('input[name="nombre"]').value = '';
            document.querySelector('input[name="apellido"]').value = '';
            document.querySelector('input[name="direccion"]').value = '';
            document.querySelector('input[name="telefono"]').value = '';
            document.querySelector('input[name="email"]').value = '';
            document.querySelectorAll('input[name="email"]')[1].value = '';
            document.querySelector('input[name="contrasena"]').value = '';
            document.querySelectorAll('input[name="contrasena"]')[1].value = '';

        }
    });
});

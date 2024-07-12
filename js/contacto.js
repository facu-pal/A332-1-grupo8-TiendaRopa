
import { showCustomAlert } from './alert.js';

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.btnEnviar').addEventListener('click', function (event) {
        event.preventDefault();

        let nombre = document.querySelector('input[name="nombre"]').value.trim();
        let email = document.querySelector('input[name="email"]').value.trim();
        let telefono = document.querySelector('input[name="telefono"]').value.trim();
        let asunto = document.querySelector('input[name="asunto"]').value.trim();
        let mensaje = document.querySelector('textarea[name="mensaje"]').value.trim();

        let missingFields = [];

        if (nombre === '') missingFields.push('Nombre');
        if (email === '') missingFields.push('Email');
        if (telefono === '') missingFields.push('Teléfono');
        if (asunto === '') missingFields.push('Asunto');
        if (mensaje === '') missingFields.push('Mensaje');

        if (missingFields.length > 0) {
            showCustomAlert('Error', 'Por favor complete los siguientes campos: ' + missingFields.join(', '), '#CE1212');
        } else {
            showCustomAlert('Éxito', 'Mensaje enviado', '#6DDA72');

            // Limpiar los campos después de mostrar el alert de éxito
            document.querySelector('input[name="nombre"]').value = '';
            document.querySelector('input[name="email"]').value = '';
            document.querySelector('input[name="telefono"]').value = '';
            document.querySelector('input[name="asunto"]').value = '';
            document.querySelector('textarea[name="mensaje"]').value = '';
        }
    });
});

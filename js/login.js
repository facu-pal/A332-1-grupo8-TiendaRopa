import { showCustomAlert } from './alert.js';

const API_URL = "https://jsonplaceholder.typicode.com";

const fetchUserData = async () => {
  try {
    const response = await fetch(`${API_URL}/users`);
    const users = await response.json();
    const userInfoArray2 = users.map((user) => ({
      email: user.email,
      password: user.address.zipcode
    }));

    const loginButton = document.querySelector('.btnInicio');
    loginButton.addEventListener('click', (event) => {
      event.preventDefault();

      const emailInput = document.querySelector('input[name="email"]').value.trim();
      const passwordInput = document.querySelector('input[name="password"]').value.trim();

      if (emailInput === "") {
        showCustomAlert('Error', 'Falta completar el campo email', '#CE1212');
        return;
      }

      if (passwordInput === "") {
        showCustomAlert('Error', 'Falta completar el campo password', '#CE1212');
        return;
      }

      const userFound = userInfoArray2.some(user => user.email === emailInput && user.password === passwordInput);

      if (userFound) {
        showCustomAlert('Éxito', 'Inicio de sesión exitoso', '#6DDA72');
        document.querySelector('input[name="email"]').value = '';
        document.querySelector('input[name="password"]').value = '';

      } else {
        showCustomAlert('Error', 'Correo electrónico o contraseña incorrectos', '#CE1212');
      }
    });
  } catch (error) {
    console.error('Error fetching user data:', error);
  }
};



fetchUserData();
















document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Evita el envío del formulario por defecto

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorMessage = document.getElementById("error-message");

    // Simulación de datos de usuario válidos
    const validUser = {
      username: "admin",
      password: "12345",
    };

    if (username === validUser.username && password === validUser.password) {
      errorMessage.style.color = "green";
      errorMessage.textContent = "Inicio de sesión exitoso.";
      // Redirigir o realizar acción deseada
      setTimeout(() => {
        window.location.href = "dashboard.html"; // Cambia a la página principal
      }, 1500);
    } else {
      errorMessage.style.color = "red";
      errorMessage.textContent = "Usuario o contraseña incorrectos.";
    }
  });

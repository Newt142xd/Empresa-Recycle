//Se muestra el menu dentro del boton hamburguesa
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".menu");
  menuToggle.addEventListener("click", function () {
    menu.classList.toggle("show");
  });

  arrows.forEach((arrow) => {
    arrow.addEventListener("click", function (event) {
      event.preventDefault();
      const submenu = this.parentElement.nextElementSibling;
      submenu.classList.toggle("show");
      this.classList.toggle("open");
    });
  });

  document.addEventListener("click", function (event) {
    if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
      menu.classList.remove("show");
      document.querySelectorAll(".menu ul").forEach((submenu) => {
        submenu.classList.remove("show");
      });
      document.querySelectorAll(".arrow").forEach((arrow) => {
        arrow.classList.remove("open");
      });
    }
  });
});

//Funcion para mostrar la informacion de los mapas

function showInfor(infoId) {
  // Oculta todos los divs de información
  const infoDivs = document.querySelectorAll(".info");
  infoDivs.forEach((div) => {
    div.classList.remove("active");
  });

  // Muestra solo el div seleccionado
  const selectedDiv = document.getElementById(infoId);
  if (selectedDiv) {
    selectedDiv.classList.add("active");
  }
}

// Alternar barra lateral
function toggleChat() {
  const sidebar = document.getElementById("whatsappSidebar");
  sidebar.style.right = sidebar.style.right === "0px" ? "-300px" : "0px";
}

// Abrir chat en WhatsApp
function startChat() {
  window.open("https://wa.me/+573214474576", "_blank");
}

// Mostrar modal informativo
function showInfo() {
  const modal = document.getElementById("infoModal");
  modal.style.display = "flex";
}

// Cerrar modal informativo
function closeInfo() {
  const modal = document.getElementById("infoModal");
  modal.style.display = "none";
}

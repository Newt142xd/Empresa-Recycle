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

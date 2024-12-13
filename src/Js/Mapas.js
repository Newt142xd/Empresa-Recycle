function showInfo(infoId) {
  // Ocultamos todas las secciones
  const sections = document.querySelectorAll(".info");
  sections.forEach((section) => section.classList.remove("active"));

  // Mostramos la sección correspondiente al botón
  const target = document.getElementById(infoId);
  if (target) {
    target.classList.add("active");
  }
}

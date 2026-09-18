const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const navItems = document.querySelectorAll(".nav-links a");
const year = document.getElementById("year");

/* ==================== MOBILE MENU ==================== */
menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    const menuIsOpen = navLinks.classList.contains("active");
    menuToggle.textContent = menuIsOpen ? "✕" : "☰";
    menuToggle.setAttribute(
        "aria-label",
        menuIsOpen
            ? "Cerrar menú de navegación"
            : "Abrir menú de navegación"
    );
});

/* Cerrar menú al seleccionar una sección */
navItems.forEach((item) => {
    item.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuToggle.textContent = "☰";
    });
});

/* ==================== CURRENT YEAR ==================== */
year.textContent = new Date().getFullYear();
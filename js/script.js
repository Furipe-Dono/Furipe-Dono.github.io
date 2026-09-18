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

/* ==================== SCROLL REVEAL ==================== */
const revealElements = document.querySelectorAll(
    ".skill-card, .project-card, .timeline-item, .education-card, .about-content"
);
revealElements.forEach((element) => {
    element.classList.add("reveal");
});
const revealObserver = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.12
    }
);
revealElements.forEach((element) => {
    revealObserver.observe(element);
});

/* ==================== NAVBAR SCROLL ==================== */
const header = document.querySelector(".header");
window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

const navLinks = document.querySelectorAll('.nav-menu-link');

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");

    if(navMenu.classList.contains("nav-menu_visible")) {
        navToggle.setAttribute("aria-label", "Cerrar menú");
    } else {
        navToggle.setAttribute("aria-label", "Abrir menú");
    }
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {

        navLinks.forEach(linkk => {
            if(linkk.classList.contains("nav-menu-link_active")){
                linkk.classList.remove("nav-menu-link_active");
            }
        });
        link.classList.toggle("nav-menu-link_active");
        navMenu.classList.remove("nav-menu_visible");
    });
});
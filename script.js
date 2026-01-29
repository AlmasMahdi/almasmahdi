function toggleMenu() {
    const menu = document.getElementById("navMenu");
    menu.classList.toggle("active");
}

// Optional: Close menu when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById("navMenu").classList.remove("active");
    });
});
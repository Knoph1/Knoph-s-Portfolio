// Preloader
window.addEventListener('load', () => {
    document.querySelector('.preloader').style.display = 'none';
});

// Toggle hamburger menu
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
}

// Toggle dark/light mode
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    themeToggle.textContent = document.body.classList.contains('dark-mode') ? 'Dark Mode' : 'Light Mode';
});

// Dynamic year for footer
document.getElementById('year').textContent = new Date().getFullYear();

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Contact form
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Your message has been sent!');
    this.reset();
});

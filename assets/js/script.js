// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');

// Check for saved theme in local storage
const currentTheme = localStorage.getItem('theme') || 'light';
document.body.classList.add(currentTheme);
themeToggle.textContent = currentTheme === 'dark' ? 'Light Mode' : 'Dark Mode';

// Toggle theme on button click
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const newTheme = document.body.classList.contains('dark') ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
    themeToggle.textContent = newTheme === 'dark' ? 'Light Mode' : 'Dark Mode';
});

// Smooth scrolling for nav links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Hero section animation on load
window.addEventListener('load', () => {
    const hero = document.querySelector('.hero');
    hero.classList.add('fade-in');
});

// Add active class to navbar links on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const scrollPos = window.scrollY + 100;

    sections.forEach(section => {
        if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
            document.querySelector('.nav-links a[href*="' + section.id + '"]').classList.add('active');
        } else {
            document.querySelector('.nav-links a[href*="' + section.id + '"]').classList.remove('active');
        }
    });
});

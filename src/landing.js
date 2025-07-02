// landing.js - Interatividade exclusiva para a landing page TH CONSERVAÇÃO
// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Header scroll effect
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
// Scroll reveal animation
const scrollRevealElements = document.querySelectorAll('.scroll-reveal');
const revealOnScroll = () => {
    for (let i = 0; i < scrollRevealElements.length; i++) {
        const element = scrollRevealElements[i];
        const elementTop = element.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;
        if (elementTop < viewportHeight - 100) {
            element.classList.add('revealed');
        }
    }
};
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

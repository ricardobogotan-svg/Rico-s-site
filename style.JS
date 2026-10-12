/**
 * 1. MOBILE MENU NAVIGATION
 * Handles the opening and closing of the mobile burger menu
 */
function toggleMenu() {
    document.body.classList.toggle("menu--open");
}

/**
 * 2. INTERSECTION OBSERVER (Scroll Animations)
 * This makes elements "fade in" as they enter the viewport,
 * which is a signature look of the Blinker platform.
 */
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal--visible');
        }
    });
}, observerOptions);

// Initialize observer on page load
window.onload = () => {
    // Select all sections you want to animate
    const sections = document.querySelectorAll('.section, .hero__section, .step, .feature');
    sections.forEach(section => {
        section.classList.add('reveal'); // Initial hidden state
        observer.observe(section);
    });
};

/**
 * 3. DYNAMIC YEAR UPDATE
 * Keeps the footer copyright current without manual updates
 */
const yearEl = document.querySelector('.footer__bottom p');
if (yearEl) {
    const currentYear = new Date().getFullYear();
    yearEl.innerHTML = `&copy; ${currentYear} Blinker. All rights reserved.`;
}

/**
 * 4. FORM SUBMISSION HANDLING
 * Prevents default reload and simulates a contact request
 */
const contactForm = document.querySelector('#contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const submitBtn = document.querySelector('.nav__link--primary');
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        
        setTimeout(() => {
            alert("Thanks for reaching out! A Blinker representative will contact you shortly.");
            submitBtn.innerHTML = 'Contact';
        }, 1500);
    });
}
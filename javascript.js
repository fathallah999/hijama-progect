// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form submission handling with validation
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = this.querySelector('input[name="name"]').value.trim();
        const email = this.querySelector('input[name="email"]').value.trim();
        const phone = this.querySelector('input[name="phone"]').value.trim();
        const message = this.querySelector('textarea[name="message"]').value.trim();
        
        // Validate form
        if (!name || !email || !phone || !message) {
            alert('Please fill in all fields | يرجى ملء جميع الحقول');
            return;
        }
        
        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email | يرجى إدخال بريد إلكتروني صحيح');
            return;
        }
        
        // In a real application, you would send the form data to a server
        alert('Thank you for your message! We will get back to you soon.\nشكراً لرسالتك! سنتواصل معك قريباً.');
        this.reset();
    });
}

// Add smooth fade-in animations on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe sections for animation
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Ensure form is properly submitted without default page reload
document.addEventListener('DOMContentLoaded', function() {
    console.log('Page loaded successfully - All scripts initialized');
});

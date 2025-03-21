// Initialize AOS
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        once: false,
        duration: 800,
        offset: 100
    });
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Progress bar animations
    document.querySelectorAll('.progress-bar').forEach(function(bar) {
        const finalWidth = bar.getAttribute('data-aos-final-width');
        bar.addEventListener('aos:in', function() {
            bar.style.width = finalWidth;
        });
    });
});

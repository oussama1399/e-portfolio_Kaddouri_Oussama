// Initialize AOS
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        once: false,
        duration: 800,
        offset: 100
    });
    
    // Navbar scroll effect optimization
    let lastScrollY = 0;
    window.addEventListener('scroll', function () {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50 && window.scrollY > lastScrollY) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        lastScrollY = window.scrollY;
    });
    
    // Progress bar animations
    document.querySelectorAll('.progress-bar').forEach(function(bar) {
        const finalWidth = bar.getAttribute('data-aos-final-width');
        bar.addEventListener('aos:in', function() {
            bar.style.width = finalWidth;
        });
    });
    
    // Enhanced typing effect with blinking cursor
    if (document.querySelector('.typing-text')) {
        const text = document.querySelector('.typing-text').innerHTML;
        document.querySelector('.typing-text').innerHTML = '';
        let i = 0;
        function typeWriter() {
            if (i < text.length) {
                document.querySelector('.typing-text').innerHTML += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            } else {
                document.querySelector('.typing-text').classList.add('blinking-cursor');
            }
        }
        setTimeout(typeWriter, 1000);
    }
    
    // Splash screen
    if (document.querySelector('.splash-screen')) {
        setTimeout(() => {
            document.querySelector('.splash-screen').classList.add('fade-out');
            setTimeout(() => {
                document.querySelector('.splash-screen').style.display = 'none';
                document.body.style.overflow = 'auto';
            }, 500);
        }, 2000);
    }
    
    // Project modals
    document.querySelectorAll('.project-modal-trigger').forEach(function(trigger) {
        trigger.addEventListener('click', function() {
            const modalId = this.getAttribute('data-modal');
            document.getElementById(modalId).classList.add('show');
            document.body.style.overflow = 'hidden';
        });
    });
    
    document.querySelectorAll('.modal-close').forEach(function(close) {
        close.addEventListener('click', function() {
            document.querySelectorAll('.project-modal').forEach(function(modal) {
                modal.classList.remove('show');
            });
            document.body.style.overflow = 'auto';
        });
    });
    
    // Skill cards popup info
    document.querySelectorAll('.skill-info-trigger').forEach(function(trigger) {
        trigger.addEventListener('mouseover', function() {
            const infoId = this.getAttribute('data-info');
            document.getElementById(infoId).style.opacity = '1';
            document.getElementById(infoId).style.visibility = 'visible';
        });
        
        trigger.addEventListener('mouseout', function() {
            const infoId = this.getAttribute('data-info');
            document.getElementById(infoId).style.opacity = '0';
            document.getElementById(infoId).style.visibility = 'hidden';
        });
    });
    
    // Form validation
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            let valid = true;
            
            contactForm.querySelectorAll('[required]').forEach(function(field) {
                if (!field.value.trim()) {
                    valid = false;
                    field.classList.add('is-invalid');
                } else {
                    field.classList.remove('is-invalid');
                }
            });
            
            const email = contactForm.querySelector('[type="email"]');
            if (email && email.value) {
                const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!regex.test(email.value)) {
                    valid = false;
                    email.classList.add('is-invalid');
                }
            }
            
            if (valid) {
                // Simulate form submission
                contactForm.querySelector('button[type="submit"]').disabled = true;
                contactForm.querySelector('button[type="submit"]').innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi...';
                
                // Here you would typically send the form data to a backend service like Formspree
                setTimeout(() => {
                    contactForm.reset();
                    contactForm.querySelector('button[type="submit"]').disabled = false;
                    contactForm.querySelector('button[type="submit"]').innerHTML = '<i class="fas fa-paper-plane me-2"></i>Envoyé!';
                    
                    // Show success message
                    const successMessage = document.createElement('div');
                    successMessage.className = 'alert alert-success mt-3';
                    successMessage.innerHTML = 'Votre message a été envoyé avec succès!';
                    contactForm.appendChild(successMessage);
                    
                    setTimeout(() => {
                        contactForm.removeChild(successMessage);
                        contactForm.querySelector('button[type="submit"]').innerHTML = '<i class="fas fa-paper-plane me-2"></i>Envoyer Message';
                    }, 3000);
                }, 1500);
            }
        });
    }
    
    // Project filtering
    const filterBtns = document.querySelectorAll('.btn-filter');
    const projectItems = document.querySelectorAll('.project-item');
    
    if(filterBtns.length && projectItems.length) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                // Remove active class from all buttons
                filterBtns.forEach(b => b.classList.remove('active'));
                // Add active class to clicked button
                this.classList.add('active');
                
                // Get filter value
                const filterValue = this.getAttribute('data-filter');
                
                // Show/hide projects based on filter
                projectItems.forEach(item => {
                    if(filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                        item.style.display = 'block';
                        setTimeout(() => {
                            item.style.opacity = '1';
                        }, 50);
                    } else {
                        item.style.opacity = '0';
                        setTimeout(() => {
                            item.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
    }
    
    // Enhanced modal functionality with keyboard navigation
    const projectModals = document.querySelectorAll('.project-modal');
    if(projectModals.length) {
        // Close modal with Escape key
        document.addEventListener('keydown', function(e) {
            if(e.key === 'Escape') {
                projectModals.forEach(modal => {
                    if(modal.classList.contains('show')) {
                        modal.classList.remove('show');
                        document.body.style.overflow = 'auto';
                    }
                });
            }
        });
        
        // Close modal when clicking outside
        projectModals.forEach(modal => {
            modal.addEventListener('click', function(e) {
                if(e.target === this) {
                    this.classList.remove('show');
                    document.body.style.overflow = 'auto';
                }
            });
        });
    }
    
    // Set active nav link based on current page
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    navLinks.forEach(link => {
        // Remove active class from all links first
        link.classList.remove('active');
        
        // Get the href value
        const href = link.getAttribute('href');
        
        // Check if the current path ends with the href
        if (currentPath.endsWith(href)) {
            link.classList.add('active');
        }
        
        // Special case for index/home
        if (currentPath.endsWith('/') || currentPath.endsWith('index.html')) {
            if (href === 'index.html') {
                link.classList.add('active');
            }
        }
    });
});

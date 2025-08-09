// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }));
});

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

// Form submission handler
document.querySelector('.contact-form form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const phone = this.querySelector('input[type="tel"]').value;
    const department = this.querySelector('select').value;
    const message = this.querySelector('textarea').value;
    
    // Basic validation
    if (!name || !email || !phone || !department) {
        alert('Please fill in all required fields.');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }
    
    // Phone validation (basic)
    const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
    if (!phoneRegex.test(phone)) {
        alert('Please enter a valid phone number.');
        return;
    }
    
    // Simulate form submission
    alert(`Thank you ${name}! Your appointment request has been submitted. We will contact you shortly to confirm your appointment for ${department}.`);
    
    // Reset form
    this.reset();
});

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = '#fff';
        header.style.backdropFilter = 'none';
    }
});

// Animate elements on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.service-card, .doctor-card, .stat');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Initialize animations
document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.service-card, .doctor-card, .stat');
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
});

window.addEventListener('scroll', animateOnScroll);

// Emergency call button functionality
function createEmergencyButton() {
    const emergencyBtn = document.createElement('div');
    emergencyBtn.innerHTML = `
        <div class="emergency-btn">
            <a href="tel:+919876543210">
                <i class="fas fa-phone"></i>
                <span>Emergency</span>
            </a>
        </div>
    `;
    
    // Add emergency button styles
    const style = document.createElement('style');
    style.textContent = `
        .emergency-btn {
            position: fixed;
            bottom: 20px;
            right: 20px;
            z-index: 1000;
            animation: pulse 2s infinite;
        }
        
        .emergency-btn a {
            background: #e74c3c;
            color: white;
            padding: 15px 20px;
            border-radius: 50px;
            text-decoration: none;
            display: flex;
            align-items: center;
            gap: 10px;
            box-shadow: 0 4px 15px rgba(231, 76, 60, 0.3);
            font-weight: 600;
            transition: all 0.3s ease;
        }
        
        .emergency-btn a:hover {
            background: #c0392b;
            transform: scale(1.05);
        }
        
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
        }
        
        @media (max-width: 480px) {
            .emergency-btn {
                bottom: 10px;
                right: 10px;
            }
            
            .emergency-btn a {
                padding: 12px 16px;
                font-size: 0.9rem;
            }
        }
    `;
    
    document.head.appendChild(style);
    document.body.appendChild(emergencyBtn);
}

// Initialize emergency button
document.addEventListener('DOMContentLoaded', createEmergencyButton);

import { inject } from "@vercel/analytics"

// Toggle FAQ accordion functionality
function toggleFaq(btn) {
    var answer = btn.nextElementSibling;
    var arrow = btn.querySelector('.faq-arrow');
    if (answer.style.display === 'none' || answer.style.display === '') {
        answer.style.display = 'block';
        arrow.classList.add('open');
        btn.classList.add('active');
    } else {
        answer.style.display = 'none';
        arrow.classList.remove('open');
        btn.classList.remove('active');
    }
}

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling to all navigation links
    const navLinks = document.querySelectorAll('nav a');
    
    for (const link of navLinks) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Adjust for header height
                    behavior: 'smooth'
                });
            }
        });
    }
    
    // WhatsApp button functionality
    const allButtons = document.querySelectorAll('a.btn');

    for (const button of allButtons) {
        if (button.textContent.includes('WhatsApp')) {
            button.addEventListener('click', function(e) {
                e.preventDefault();

                // Use the fixed phone number
                const phone = '27835406714';

                // Create the proper WhatsApp URL
                const whatsappUrl = `https://wa.me/${phone}?text=Hello, I'm interested in your services.`;

                // Open the WhatsApp chat
                window.open(whatsappUrl, '_blank');
            });
        }
    }
    
    // Make phone numbers clickable on mobile
    const phoneElements = document.querySelectorAll('a[href^="+"]');
    
    for (const element of phoneElements) {
        // Check if it's a phone number link that hasn't been processed
        if (element.href.startsWith('+')) {
            const phoneNumber = element.getAttribute('href');
            element.setAttribute('href', 'tel:' + phoneNumber);
        }
    }
});

// Sticky header functionality
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});

// Add CSS for sticky header
const style = document.createElement('style');
style.textContent = `
    header.sticky {
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 1000;
        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        background: rgba(255, 255, 255, 0.95);
    }
    
    /* Adjust body padding to prevent content jump when header becomes fixed */
    body {
        padding-top: 80px;
    }
    
    header.sticky + * {
        padding-top: 80px;
    }
`;
document.head.appendChild(style);

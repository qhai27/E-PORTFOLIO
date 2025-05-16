// Mobile Navigation
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
    // Toggle Nav
    navLinks.classList.toggle('nav-active');
    
    // Burger Animation
    burger.classList.toggle('toggle');
    
    // Animate Links
    navLinksItems.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (navLinks.classList.contains('nav-active')) {
                navLinks.classList.remove('nav-active');
                burger.classList.remove('toggle');
                navLinksItems.forEach(link => {
                    link.style.animation = '';
                });
            }
        }
    });
});

// Current Year for Footer
document.querySelector('.copyright p').innerHTML = `&copy; ${new Date().getFullYear()} Khairunniza Binti Khairol Anuar. All rights reserved.`;

// Add animation to nav links
const navAnimation = () => {
    navLinksItems.forEach((link, index) => {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
    });
};

// Initialize functions when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Add any initialization code here
});

// Animate Skill Bars on Scroll
const animateSkillBars = () => {
    const skillsSection = document.querySelector('.skills');
    const skillBars = document.querySelectorAll('.skill-level');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                skillBars.forEach(bar => {
                    const level = bar.parentElement.parentElement.getAttribute('data-level');
                    bar.style.width = `${level}%`;
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    if (skillsSection) {
        observer.observe(skillsSection);
    }
};

// Initialize Profile Page
document.addEventListener('DOMContentLoaded', () => {
    animateSkillBars();
    

});

// Function to display the current date and time
    function displayDateTime() {
        const now = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
        const formattedDateTime = now.toLocaleDateString('en-US', options);
        document.getElementById('current-date-time').textContent = formattedDateTime;
    }

    // Call the function to display the date and time
    displayDateTime();

    // Update the date and time every second
    setInterval(displayDateTime, 1000);
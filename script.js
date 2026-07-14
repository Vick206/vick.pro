// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    const navButtons = document.querySelectorAll('.nav-btn');
    const contentSections = document.querySelectorAll('.content-section');

    // Initialize: show home section
    showSection('home');

    // Add click listeners to navigation buttons
    navButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const section = this.getAttribute('data-section');
            showSection(section);
        });
    });

    function showSection(sectionId) {
        // Hide all sections
        contentSections.forEach(section => {
            section.classList.remove('active');
        });

        // Remove active class from all buttons
        navButtons.forEach(btn => {
            btn.classList.remove('active');
        });

        // Show selected section
        const selectedSection = document.getElementById(sectionId);
        if (selectedSection) {
            selectedSection.classList.add('active');
        }

        // Add active class to corresponding button
        const selectedBtn = document.querySelector(`[data-section="${sectionId}"]`);
        if (selectedBtn) {
            selectedBtn.classList.add('active');
        }

        // Scroll to top of content
        const contentArea = document.querySelector('.console-content');
        if (contentArea) {
            contentArea.scrollTop = 0;
        }

        // Add scanning effect
        addScanningEffect();
    }

    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;

            // Create a mailto link (in a real scenario, you'd send this to a server)
            const mailtoLink = `mailto:contact@vick.pro?subject=${encodeURIComponent('Portfolio Inquiry: ' + subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;

            // Show confirmation message
            alert(`Message prepared!\n\nTo: contact@vick.pro\nSubject: Portfolio Inquiry: ${subject}\n\nYour message has been composed. Click OK to open your email client.`);

            // Open email client
            window.location.href = mailtoLink;

            // Reset form
            contactForm.reset();
        });
    }

    // Uptime counter
    let uptime = {
        hours: 0,
        minutes: 0,
        seconds: 0
    };

    setInterval(function() {
        uptime.seconds++;
        if (uptime.seconds >= 60) {
            uptime.seconds = 0;
            uptime.minutes++;
        }
        if (uptime.minutes >= 60) {
            uptime.minutes = 0;
            uptime.hours++;
        }

        const uptimeDisplay = document.getElementById('uptime');
        if (uptimeDisplay) {
            uptimeDisplay.textContent = `${uptime.hours}h ${uptime.minutes}m ${uptime.seconds}s`;
        }
    }, 1000);

    // Enhanced keyboard controls
    const sections = ['home', 'magic', 'security', 'social', 'contact'];
    let currentSectionIndex = 0;

    document.addEventListener('keydown', function(e) {
        // Arrow keys and WASD for navigation
        // Up/W = previous, Down/S = next, Left/A = previous, Right/D = next
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key.toLowerCase() === 'd' || e.key.toLowerCase() === 's') {
            e.preventDefault();
            currentSectionIndex = (currentSectionIndex + 1) % sections.length;
            showSection(sections[currentSectionIndex]);
        }

        if (e.key === 'ArrowLeft' || e.key === 'ArrowUp' || e.key.toLowerCase() === 'a' || e.key.toLowerCase() === 'w') {
            e.preventDefault();
            currentSectionIndex = (currentSectionIndex - 1 + sections.length) % sections.length;
            showSection(sections[currentSectionIndex]);
        }

        // Tab key for cycling
        if (e.key === 'Tab') {
            e.preventDefault();
            if (e.shiftKey) {
                currentSectionIndex = (currentSectionIndex - 1 + sections.length) % sections.length;
            } else {
                currentSectionIndex = (currentSectionIndex + 1) % sections.length;
            }
            showSection(sections[currentSectionIndex]);
        }
    });

    // Add cursor blinking effect to terminal prompts
    const prompts = document.querySelectorAll('.terminal-prompt');
    prompts.forEach(prompt => {
        const text = prompt.textContent;
        prompt.innerHTML = text + '<span class="cursor">_</span>';
    });

    // Add cursor scanning effect on section change
    function addScanningEffect() {
        const crtScreen = document.querySelector('.crt-screen');
        if (crtScreen) {
            crtScreen.style.animation = 'none';
            setTimeout(() => {
                crtScreen.style.animation = 'screenScan 0.3s ease-out';
            }, 10);
        }
    }

    // Animate typing effect for initial load
    const typingElements = document.querySelectorAll('.typing-effect');
    typingElements.forEach((element, index) => {
        const text = element.textContent;
        element.textContent = '';
        let charIndex = 0;

        function typeText() {
            if (charIndex < text.length) {
                element.textContent += text.charAt(charIndex);
                charIndex++;
                setTimeout(typeText, 20);
            }
        }

        setTimeout(typeText, index * 200);
    });

    // Add glitch effect on click
    const glitchTitle = document.querySelector('.glitch');
    if (glitchTitle) {
        glitchTitle.addEventListener('click', function() {
            this.style.animation = 'none';
            setTimeout(() => {
                this.style.animation = 'glow 2s ease-in-out infinite';
            }, 10);
        });
    }
});

// Add CSS for cursor styling
const style = document.createElement('style');
style.textContent = `
    .cursor {
        animation: blink-cursor 1s infinite;
        margin-left: 2px;
    }

    @keyframes blink-cursor {
        0%, 49% { opacity: 1; }
        50%, 100% { opacity: 0; }
    }
`;
document.head.appendChild(style);

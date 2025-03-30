// JavaScript for Alcami website clone

document.addEventListener('DOMContentLoaded', function() {
    // Dropdown functionality for Shop menu
    const dropdownLink = document.querySelector('.dropdown');
    
    if (dropdownLink) {
        dropdownLink.addEventListener('click', function(e) {
            e.preventDefault();
            // Add dropdown menu functionality if needed
        });
    }

    // Search icon functionality
    const searchIcon = document.querySelector('.search-icon');
    
    if (searchIcon) {
        searchIcon.addEventListener('click', function() {
            // Add search functionality if needed
        });
    }

    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Responsive menu toggle (for mobile)
    // This would need to be implemented if a mobile menu button is added
});

// Main JavaScript file for Alcami website

document.addEventListener('DOMContentLoaded', function() {
    // FAQ accordion functionality
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Close all other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
        });
    });
    
    // Testimonial slider functionality
    const sliderDots = document.querySelectorAll('.slider-dot');
    const prevButton = document.querySelector('.slider-prev');
    const nextButton = document.querySelector('.slider-next');
    const testimonialSlider = document.querySelector('.testimonials-slider');
    
    if (sliderDots.length > 0) {
        sliderDots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                // Remove active class from all dots
                sliderDots.forEach(d => d.classList.remove('active'));
                
                // Add active class to current dot
                dot.classList.add('active');
                
                // Scroll to the corresponding testimonial
                const testimonialWidth = testimonialSlider.querySelector('.testimonial-card').offsetWidth;
                const gap = 20; // Gap between testimonials
                testimonialSlider.scrollTo({
                    left: index * (testimonialWidth + gap),
                    behavior: 'smooth'
                });
            });
        });
        
        // Previous button functionality
        if (prevButton) {
            prevButton.addEventListener('click', () => {
                // Find current active dot
                const activeDotIndex = Array.from(sliderDots).findIndex(dot => dot.classList.contains('active'));
                
                // Calculate previous index
                const prevIndex = (activeDotIndex > 0) ? activeDotIndex - 1 : sliderDots.length - 1;
                
                // Trigger click on previous dot
                sliderDots[prevIndex].click();
            });
        }
        
        // Next button functionality
        if (nextButton) {
            nextButton.addEventListener('click', () => {
                // Find current active dot
                const activeDotIndex = Array.from(sliderDots).findIndex(dot => dot.classList.contains('active'));
                
                // Calculate next index
                const nextIndex = (activeDotIndex < sliderDots.length - 1) ? activeDotIndex + 1 : 0;
                
                // Trigger click on next dot
                sliderDots[nextIndex].click();
            });
        }
    }
});

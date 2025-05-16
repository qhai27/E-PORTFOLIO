// Gallery Tab Functionality
const setupGalleryTabs = () => {
    const galleryTabs = document.querySelectorAll('.gallery-tab');
    const galleryCategories = document.querySelectorAll('.gallery-category');
    
    galleryTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs and categories
            galleryTabs.forEach(t => t.classList.remove('active'));
            galleryCategories.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding category
            tab.classList.add('active');
            const categoryId = tab.getAttribute('data-category');
            document.getElementById(categoryId).classList.add('active');
        });
    });
};

// Initialize LightGallery
const initLightGallery = () => {
    if (typeof lightGallery !== 'undefined') {
        lightGallery(document.querySelector('[data-lightbox="art"]'), {
            selector: '.gallery-item',
            download: false,
            counter: false
        });
    }
};

// Initialize Gallery Page
document.addEventListener('DOMContentLoaded', () => {
    setupGalleryTabs();
    initLightGallery();
});
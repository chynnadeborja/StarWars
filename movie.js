const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
const slider = document.querySelector('.carousel .list');
const thumbnails = document.querySelectorAll('.thumbnail .item');

// Helper function to update active thumbnail
function updateActiveThumbnail(index) {
    thumbnails.forEach((thumbnail, i) => {
        if (i === index) {
            thumbnail.classList.add('active');
        } else {
            thumbnail.classList.remove('active');
        }
    });
}

// Initialize the slider index
let currentIndex = 0;

// Function to navigate the slider
function navigateSlider(direction) {
    const sliderItems = Array.from(slider.children);
    const totalSlides = sliderItems.length;

    if (direction === 'next') {
        currentIndex = (currentIndex + 1) % totalSlides;
    } else if (direction === 'prev') {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    }

    // Move slider to the current index
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    slider.style.transition = 'transform 0.5s ease';

    // Update active thumbnail
    updateActiveThumbnail(currentIndex);

    // Update thumbnail positions for visible three
    updateVisibleThumbnails(currentIndex);
}

// Function to show only three thumbnails
function updateVisibleThumbnails(index) {
    const totalThumbnails = thumbnails.length;
    thumbnails.forEach((thumbnail, i) => {
        if (i >= index && i < index + 3) {
            thumbnail.style.display = 'block';
        } else {
            thumbnail.style.display = 'none';
        }
    });
}

// Attach click events to navigation buttons
nextBtn.addEventListener('click', () => navigateSlider('next'));
prevBtn.addEventListener('click', () => navigateSlider('prev'));

// Initialize the slider and thumbnails
updateActiveThumbnail(currentIndex);
updateVisibleThumbnails(currentIndex);

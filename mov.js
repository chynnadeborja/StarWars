document.addEventListener('DOMContentLoaded', () => {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const movieImage = document.getElementById('movie-image');
    const movieDescription = document.getElementById('movie-description');
    const movieTitle = document.getElementById('movie-title');
    const movieDetailedDescription = document.getElementById('movie-detailed-description');
    const leftBtn = document.getElementById('left-btn');
    const rightBtn = document.getElementById('right-btn');

    let currentIndex = 0;

    const updateMovieDisplay = (index) => {
        // Remove active class from all thumbnails
        thumbnails.forEach((thumbnail) => thumbnail.classList.remove('active'));

        // Add active class to the current thumbnail
        thumbnails[index].classList.add('active');

        // Update movie display elements
        const thumbnail = thumbnails[index];
        const title = thumbnail.getAttribute('data-title');
        const description = thumbnail.getAttribute('data-description');
        const detailedDescription = thumbnail.getAttribute('data-detailed-description');
        const image = thumbnail.getAttribute('data-image');

        movieTitle.textContent = title;
        movieDescription.textContent = description;
        movieDetailedDescription.textContent = detailedDescription;
        movieImage.src = image;
    };

    const changeMovie = (direction) => {
        currentIndex = (currentIndex + direction + thumbnails.length) % thumbnails.length;
        updateMovieDisplay(currentIndex);
    };

    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', () => {
            currentIndex = index;
            updateMovieDisplay(index);
        });
    });

    leftBtn.addEventListener('click', () => changeMovie(-1));
    rightBtn.addEventListener('click', () => changeMovie(1));

    // Initialize with the first movie
    updateMovieDisplay(currentIndex);
});

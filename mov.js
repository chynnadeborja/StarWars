
document.addEventListener('DOMContentLoaded', () => {
    // Select elements
    const thumbnails = document.querySelectorAll('.thumbnail');
    const thumbnailsWrapper = document.getElementById('thumbnails');
    const movieImage = document.getElementById('movie-image');
    const movieTitle = document.getElementById('movie-title');
    const movieDescription = document.getElementById('movie-detailed-description');
    const leftBtn = document.getElementById('left-btn');
    const rightBtn = document.getElementById('right-btn');
    const sortChronoBtn = document.getElementById('sort-chrono');
    const sortReleaseBtn = document.getElementById('sort-release');

    let activeIndex = 0;

    // Function to update the main display
    function updateMainDisplay(index) {
        if (thumbnails[index]) {
            const thumbnail = thumbnails[index];
            movieImage.src = thumbnail.dataset.image;
            movieTitle.textContent = thumbnail.dataset.title;
            movieDescription.textContent = thumbnail.dataset.description;

            // Highlight active thumbnail
            thumbnails.forEach((thumb) => thumb.classList.remove('active'));
            thumbnail.classList.add('active');
        }
    }

    // Function to slide thumbnails
    function slideThumbnails() {
        const scrollAmount = activeIndex * (150 + 10); // Thumbnail width + gap
        thumbnailsWrapper.style.transform = `translateX(-${scrollAmount}px)`;
    }

    // Event listeners for navigation buttons
    leftBtn.addEventListener('click', () => {
        activeIndex = activeIndex > 0 ? activeIndex - 1 : thumbnails.length - 1;
        updateMainDisplay(activeIndex);
        slideThumbnails();
    });

    rightBtn.addEventListener('click', () => {
        activeIndex = (activeIndex + 1) % thumbnails.length;
        updateMainDisplay(activeIndex);
        slideThumbnails();
    });

    // Event listeners for thumbnails
    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', () => {
            activeIndex = index;
            updateMainDisplay(activeIndex);
            slideThumbnails();
        });
    });

    // Sorting: Chronological Order
    sortChronoBtn.addEventListener('click', () => {
        const sorted = Array.from(thumbnails).sort((a, b) => a.dataset.order - b.dataset.order);
        sorted.forEach((thumb) => thumbnailsWrapper.appendChild(thumb));
        activeIndex = 0;
        updateMainDisplay(activeIndex);
        slideThumbnails();
    });

    // Sorting: Release Date Order
    sortReleaseBtn.addEventListener('click', () => {
        const sorted = Array.from(thumbnails).sort((a, b) => a.dataset.release - b.dataset.release);
        sorted.forEach((thumb) => thumbnailsWrapper.appendChild(thumb));
        activeIndex = 0;
        updateMainDisplay(activeIndex);
        slideThumbnails();
    });

    // Initialize display with the first movie
    updateMainDisplay(activeIndex);
});
const trailerLinks = {
    "Episode I: The Phantom Menace (1999)": "https://www.youtube.com/watch?v=bD7bpG-zDJQ",
    "Episode II: Attack of the Clones (2002)": "https://www.youtube.com/watch?v=gYbW1F_c9eM",
    "Episode III: Revenge of the Sith (2005)": "https://www.youtube.com/watch?v=5UnjrG_N8hU",
    "Solo: A Star Wars Story (2018)": "https://www.youtube.com/watch?v=jPEYpryMp2s",
    "Rogue One: A Star Wars Story (2016) ": "https://www.youtube.com/watch?v=frdj1zb9sMY",
    "Episode IV: A New Hope (1977)": "https://www.youtube.com/watch?v=vZ734NWnAHA",
    "Episode V: The Empire Strikes Back (1980)": "https://youtu.be/JNwNXF9Y6kY?si=hm2FF8Ovnfw1_41H",
    "Episode VI: Return of the Jedi (1983)": "https://www.youtube.com/watch?v=XgB4gaY2dWE",
    "Episode VII: The Force Awakens (2015)": "https://www.youtube.com/watch?v=sGbxmsDFVnE",
    "Episode VIII: The Last Jedi (2017)": "https://www.youtube.com/watch?v=Q0CbN8sfihY",
    "Episode IX: The Rise of Skywalker (2019)": "https://www.youtube.com/watch?v=8Qn_spdM5Zg",
    // Add more links for other movies
};

document.getElementById("trailer-button").addEventListener("click", () => {
    const movieTitle = document.getElementById("movie-title").textContent;
    const trailerURL = trailerLinks[movieTitle];
    if (trailerURL) {
        window.open(trailerURL, "_blank");
    } else {
        alert("Trailer not available for this movie.");
    }
});
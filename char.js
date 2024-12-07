// Button click functionality
const allBtn = document.querySelector('[data-category="all"]');
const empireBtn = document.querySelector('[data-category="empire"]');
const rebelBtn = document.querySelector('[data-category="rebel"]');
const botsBtn = document.querySelector('[data-category="bots"]');

const characterCards = document.querySelectorAll('.character-card');

allBtn.addEventListener('click', () => {
    characterCards.forEach(card => card.style.display = 'block');
});

empireBtn.addEventListener('click', () => {
    characterCards.forEach(card => {
        if (card.getAttribute('data-category') === 'empire') {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});

rebelBtn.addEventListener('click', () => {
    characterCards.forEach(card => {
        if (card.getAttribute('data-category') === 'rebel') {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});

botsBtn.addEventListener('click', () => {
    characterCards.forEach(card => {
        if (card.getAttribute('data-category') === 'bots') {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});
// Popup details functionality
const characterDetailsPopup = document.getElementById('character-details');
const closeBtn = document.getElementById('close-btn');

// Open popup with character details
characterCards.forEach(card => {
    card.addEventListener('click', () => {
        const name = card.querySelector('h3').innerText;
        const imgSrc = card.querySelector('img').src;
        const category = card.getAttribute('data-category');

        // Set the content of the popup dynamically
        characterDetailsPopup.querySelector('.details-content').innerHTML = `
            <img src="${imgSrc}" alt="${name}">
            <div>
                <h2>${name}</h2>
                <p>Category: ${category}</p>
                <p>More details about ${name} will go here.</p>
            </div>
        `;

        // Show the popup
        characterDetailsPopup.style.display = 'block';
    });
});

// Close the popup when the close button is clicked
closeBtn.addEventListener('click', () => {
    characterDetailsPopup.style.display = 'none';
});
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let carousel = document.querySelector('.carousel');
let items = document.querySelectorAll('.carousel .item');
let countItem = items.length;
let active = 1;
let other_1 = null;
let other_2 = null;

// Function to manage the transition between slides
const changeSlider = () => {
    let itemOldActive = document.querySelector('.carousel .item.active');
    if (itemOldActive) itemOldActive.classList.remove('active');

    let itemOldOther_1 = document.querySelector('.carousel .item.other_1');
    if (itemOldOther_1) itemOldOther_1.classList.remove('other_1');

    let itemOldOther_2 = document.querySelector('.carousel .item.other_2');
    if (itemOldOther_2) itemOldOther_2.classList.remove('other_2');

    items.forEach((e) => {
        e.querySelector('.image img').style.animation = 'none';
        e.querySelector('.image figcaption').style.animation = 'none';
        void e.offsetWidth; // Trigger reflow for animation reset
        e.querySelector('.image img').style.animation = '';
        e.querySelector('.image figcaption').style.animation = '';
    });

    // Update the new active, other_1, and other_2 slides
    items[active].classList.add('active');
    items[other_1].classList.add('other_1');
    items[other_2].classList.add('other_2');
};

// Function for handling the "next" transition
next.onclick = () => {
    carousel.classList.remove('prev');
    carousel.classList.add('next');

    active = (active + 1) % countItem;  // Wrapping around using modulo
    other_1 = (active - 1 + countItem) % countItem;  // Ensure we get valid indexes
    other_2 = (active + 1) % countItem;  // Ensure we get valid indexes

    changeSlider();
};

// Function for handling the "prev" transition
prev.onclick = () => {
    carousel.classList.remove('next');
    carousel.classList.add('prev');

    active = (active - 1 + countItem) % countItem;  // Wrapping around using modulo
    other_1 = (active - 1 + countItem) % countItem;  // Ensure we get valid indexes
    other_2 = (active + 1) % countItem;  // Ensure we get valid indexes

    changeSlider();
};

// Initialize the slider position
const initSlider = () => {
    active = 1;
    other_1 = (active - 1 + countItem) % countItem;  // Ensure valid indexes
    other_2 = (active + 1) % countItem;  // Ensure valid indexes

    items[active].classList.add('active');
    items[other_1].classList.add('other_1');
    items[other_2].classList.add('other_2');
};

// Run the initialization on load
initSlider();

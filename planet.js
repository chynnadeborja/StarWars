// Data for each planet
const planetsData = {
    tatooine: {
        title: "Tatooine",
        image: "assets/tatooine.jpeg",
        description: "The twin-sun desert planet, home to Luke Skywalker and a key setting for many epic tales."
    },
    coruscant: {
        title: "Coruscant",
        image: "assets/coruscant.jpeg",
        description: "The galactic capital, a sprawling metropolis where politics and power converge."
    },
    hoth: {
        title: "Hoth",
        image: "assets/hoth.jpeg",
        description: "A frozen wasteland and the site of the Rebel Alliance's iconic Echo Base."
    },
    endor: {
        title: "Endor",
        image: "assets/endor.jpeg",
        description: "The forest moon where the Ewoks helped defeat the Empire in the Battle of Endor."
    },
    mustafar: {
        title: "Mustafar",
        image: "assets/mustafar.jpeg",
        description: "A volcanic world where Anakin Skywalker met his fateful transformation into Darth Vader."
    },
    kamino: {
        title: "Kamino",
        image: "assets/kamino.jpeg",
        description: "The water-covered planet known for its cloning facilities and endless storms."
    }
};

// Show details of a planet
function showDetails(planetKey) {
    const detailsSection = document.getElementById('planet-details');
    const { title, image, description } = planetsData[planetKey];
    document.getElementById('planet-title').innerText = title;
    document.getElementById('planet-image').src = image;
    document.getElementById('planet-image').alt = title;
    document.getElementById('planet-description').innerText = description;
    detailsSection.classList.remove('hidden');
}

// Hide the details section
function hideDetails() {
    const detailsSection = document.getElementById('planet-details');
    detailsSection.classList.add('hidden');
}

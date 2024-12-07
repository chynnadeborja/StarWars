// Array storing character details
const characterDetails = [
  {
    name: "Luke Skywalker",
    category: "rebel",
    image: "char/lukeskywalker.jpg",
    details: "Luke Skywalker is a Jedi Knight who plays a central role in defeating the Galactic Empire. He is the son of Anakin Skywalker and Padmé Amidala."
  },
  {
    name: "Leia Organa",
    category: "rebel",
    image: "char/princessleia.jpg",
    details: "Leia Organa is a leader of the Rebel Alliance and a princess of Alderaan. She is known for her courage and strategic mind."
  },
  {
    name: "Han Solo",
    category: "rebel",
    image: "char/hansolo.jpg",
    details: "A smuggler who becomes a hero of the Rebel Alliance. Known for his charm and piloting skills, he plays a key role in destroying the Death Star and defeating the Empire."
  },
  {
    name: "Rey",
    category: "rebel",
    image: "char/hansolo.jpg",
    details: "A scavenger from Jakku who discovers her strong connection to the Force. She trains as a Jedi and ultimately defeats Emperor Palpatine, bringing balance to the Force."
  },
  {
    "name": "Jyn Erso",
    "category": "rebel",
    "details": "The daughter of Galen Erso, an Imperial scientist, who leads a band of rebels on a mission to steal the Death Star plans in Rogue One. Her efforts pave the way for the Rebel Alliance's victory."
  },
  {
    "name": "Poe Dameron",
    "category": "rebel",
    "details": "A skilled pilot for the Resistance and a loyal leader in the fight against the First Order. Known for his bravery and loyalty to Leia Organa."
  },
  {
    name: "Darth Vader/ Anakin Skywalker",
    category: "empire",
    image: "char/vader.jpg",
    details:  "A fallen Jedi Knight turned Sith Lord who serves as the Emperor's enforcer. Despite his dark deeds, he is redeemed by his son, Luke Skywalker, and sacrifices himself to destroy the Emperor."
  },
  {
    name: "Emperor Palpatine",
    category: "empire",
    image: "char/palpatine.jpeg",
    details: "Emperor Palpatine is the Dark Lord of the Sith who orchestrated the rise of the Galactic Empire."
  },
  {

    name: "Grand Moff Tarkin",
    category: "Empire",
    image:"",
    details: "A ruthless commander of the Galactic Empire, responsible for overseeing the construction and operation of the Death Star. Known for his cold efficiency and loyalty to Emperor Palpatine."
  },
  {
    name: "Kylo Ren / Ben Solo",
    category: "Empire",
    image: "char/c3po.jpeg",
    details: "The son of Leia Organa and Han Solo, he turns to the dark side and becomes a leader of the First Order. Struggles with his identity and eventually redeems himself by helping Rey defeat Emperor Palpatine."
  },
  {
    name: "Captain Phasma",
    category: "Empire",
    image: "char/c3po.jpeg",
    details: "A high-ranking stormtrooper commander in the First Order, known for her chrome armor and strict discipline. She oversees the First Order's stormtrooper corps."
  },
  {
    name: "General Hux",
    category: "Empire",
    image: "char/c3po.jpeg",
    details:  "A calculating and ambitious leader in the First Order, responsible for the Starkiller Base. He harbors a bitter rivalry with Kylo Ren."
  },
  {
    name: "General Hux",
    category: "Empire",
    image: "char/c3po.jpeg",
    details:  "A calculating and ambitious leader in the First Order, responsible for the Starkiller Base. He harbors a bitter rivalry with Kylo Ren."
  },

  {
    name: "R2-D2",
    category: "Bots",
    image: "char/r2d2.jpeg",
    details: "R2-D2 is a resourceful astromech droid who assists the Rebel Alliance and the Jedi Order in countless missions."
  },
  {
    name: "C-3PO",
    category: "Bots",
    image: "char/c3po.jpeg",
    details: "C-3PO is a protocol droid fluent in over six million forms of communication and is often found alongside R2-D2."
  },
  {
    name: "BB-8",
    category: "Bots",
    image: "char/BB8.jpeg",
    details: "A spherical astromech droid loyal to Poe Dameron. BB-8 provides vital assistance to the Resistance during their fight against the First Order."
  },
  {
    name: "K-2SO",
    category: "Bots",
    image: "char/K2SO.jpg",
    details: "A reprogrammed Imperial security droid who aids Jyn Erso and Cassian Andor in Rogue One. Known for his sarcastic wit and combat skills."
  },


   
];

// Select all the character cards
const characterCards = document.querySelectorAll('.character-card');

// Popup functionality
const characterDetailsPopup = document.getElementById('character-details');
const closeBtn = document.getElementById('close-btn');

// Open popup with character details
characterCards.forEach(card => {
  card.addEventListener('click', () => {
    const name = card.querySelector('h3').innerText;

    // Find the character details
    const character = characterDetails.find(c => c.name === name);

    if (character) {
      // Set the content of the popup dynamically
      characterDetailsPopup.querySelector('.details-content').innerHTML = `
        <img src="${character.image}" alt="${character.name}">
        <div>
          <h2>${character.name}</h2>
          <p>Category: ${character.category}</p>
          <p>${character.details}</p>
        </div>
      `;

      // Show the popup
      characterDetailsPopup.style.display = 'block';
    }
  });
});

// Close the popup when the close button is clicked
closeBtn.addEventListener('click', () => {
  characterDetailsPopup.style.display = 'none';
});

// Filtering functionality
const allBtn = document.querySelector('[data-category="all"]');
const empireBtn = document.querySelector('[data-category="empire"]');
const rebelBtn = document.querySelector('[data-category="rebel"]');
const botsBtn = document.querySelector('[data-category="bots"]');

allBtn.addEventListener('click', () => {
  characterCards.forEach(card => card.style.display = 'block');
});

empireBtn.addEventListener('click', () => {
  characterCards.forEach(card => {
    card.style.display = card.getAttribute('data-category') === 'empire' ? 'block' : 'none';
  });
});

rebelBtn.addEventListener('click', () => {
  characterCards.forEach(card => {
    card.style.display = card.getAttribute('data-category') === 'rebel' ? 'block' : 'none';
  });
});

botsBtn.addEventListener('click', () => {
  characterCards.forEach(card => {
    card.style.display = card.getAttribute('data-category') === 'bots' ? 'block' : 'none';
  });
});

// Highlight active card
characterCards.forEach(card => {
  card.addEventListener('click', () => {
    characterCards.forEach(c => c.classList.remove('active'));
    card.classList.add('active');
  });
});

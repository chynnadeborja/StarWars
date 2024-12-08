// Array storing character details
const characterDetails = [
      {
        "name": "Luke Skywalker",
        "category": "Rebel",
        "image": "char/lukeskywalker.jpg",
        "details": "Luke Skywalker is a Jedi Knight central to the Rebel Alliance's fight against the Galactic Empire. He is the son of Anakin Skywalker and Padmé Amidala and plays a critical role in restoring peace to the galaxy."
      },
      {
        "name": "Leia Organa",
        "category": "Rebel",
        "image": "char/princessleia.jpg",
        "details": "Leia Organa is a fearless leader of the Rebel Alliance, a princess of Alderaan, and a skilled diplomat and strategist. She is also the twin sister of Luke Skywalker."
      },
      {
        "name": "Han Solo",
        "category": "Rebel",
        "image": "char/hansolo.jpg",
        "details": "Han Solo, a charismatic smuggler turned Rebel hero, is known for his piloting skills and bravery. He played a crucial role in destroying the Death Star and leading the fight against the Empire."
      },
      {
        "name": "Chewbacca",
       "category": "Rebel",
        "image": "char/chewbacca.jpg",
        "details": "Chewbacca is a loyal Wookiee warrior and co-pilot of the Millennium Falcon. As Han Solo's trusted friend, he aids the Rebel Alliance in its struggle against the Empire."
      },
      {
        "name": "Rey",
        "category": "Rebel",
        "image": "char/rey.jpg",
        "details": "Rey is a powerful Force-sensitive scavenger who becomes a key figure in the Resistance. She discovers her true lineage as the granddaughter of Emperor Palpatine but chooses the Jedi path, defeating her dark heritage to bring hope to the galaxy."
      },
      {
        "name": "Jyn Erso",
        "category": "Rebel",
        "image": "char/jynerso.jpg",
        "details": "Jyn Erso leads a daring mission to steal the Death Star plans in Rogue One. The daughter of Galen Erso, her bravery ensures the Rebel Alliance gains the critical information needed to defeat the Empire."
      },
      {
        "name": "Poe Dameron",
        "category": "Rebel",
        "image": "char/poedameron.jpg",
        "details": "Poe Dameron is a skilled Resistance pilot known for his bravery and leadership. A loyal ally to Leia Organa, he plays a vital role in the fight against the First Order."
      },
      {
        "name": "Cassian Andor",
        "category": "Rebel",
        "image": "char/cassianandor.jpg",
        "details": "Cassian Andor is a Rebel intelligence officer dedicated to the cause. He partners with Jyn Erso on the mission to retrieve the Death Star plans in Rogue One."
      },
      {
        "name": "Obi-Wan Kenobi",
        "category": "Rebel",
        "image": "char/obiwan.jpg",
        "details": "Obi-Wan Kenobi is a wise Jedi Master who trained both Anakin and Luke Skywalker. His guidance helps Luke embrace his destiny as a Jedi."
      },
      {
        "name": "Mon Mothma",
        "category": "Rebel",
        "image": "char/monmothma.jpg",
        "details": "Mon Mothma is a prominent political leader of the Rebel Alliance, orchestrating its efforts against the Empire."
      },
      {
        "name": "Lando Calrissian",
        "category": "Rebel",
        "image": "char/landocalrissian.jpg",
        "details": "Lando Calrissian is a former smuggler turned hero of the Rebel Alliance. He plays a key role in the destruction of the second Death Star."
      },
      {
        "name": "Yoda",
        "category": "Rebel",
        "image": "char/yoda.jpg",
        "details": "Yoda is a legendary Jedi Master, known for his wisdom and strength in the Force. He trains Luke Skywalker and unlocks the secret to immortality."
      },
      {
        "name": "Wedge Antilles",
        "category": "Rebel",
        "image": "char/wedgeantilles.jpg",
        "details": "Wedge Antilles is a talented Rebel pilot who contributes significantly to victories in key battles, including the destruction of both Death Stars."
      },
      {
        "name": "Ahsoka Tano",
        "category": "Rebel",
        "image": "char/ahsokatano.jpg",
        "details": "Ahsoka Tano, once a Jedi apprentice to Anakin Skywalker, becomes a key figure in the Rebellion after leaving the Jedi Order."
      },
      {
        "name": "Qui-Gon Jinn",
        "category": "Rebel",
        "image": "char/quigon.jpg",
        "details": "Qui-Gon Jinn was a maverick Jedi Master who discovered Anakin Skywalker and believed him to be the Chosen One."
      },
      {
        "name": "Padmé Amidala",
        "category": "Rebel",
        "image": "char/padmeamidala.jpg",
        "details": "Padmé Amidala was a Queen of Naboo and later a senator. A dedicated advocate for peace, she is the mother of Luke Skywalker and Leia Organa."
      },
      {
        "name": "Mace Windu",
        "category": "Rebel",
        "image": "char/macewindu.jpg",
        "details": "Mace Windu was a senior Jedi Master known for his combat skills and strong leadership during the Clone Wars."
      },
      {
        "name": "Darth Vader",
        "category": "Empire",
        "image": "char/vader.jpg",
        "details": "Once the Jedi Anakin Skywalker, Darth Vader becomes a powerful Sith Lord. He redeems himself by saving his son, Luke, and destroying Emperor Palpatine."
      },
      {
        "name": "Emperor Palpatine",
        "category": "Empire",
        "image": "char/palpatine.jpeg",
        "details": "Emperor Palpatine, also known as Darth Sidious, is the Dark Lord of the Sith who manipulates events to rise to power and create the Galactic Empire."
      },
      {
        "name": "Grand Moff Tarkin",
        "category": "Empire",
        "image": "char/grandmoff.jpg",
        "details": "A ruthless Imperial commander, Grand Moff Tarkin oversees the construction and operation of the Death Star."
      },
      {
        "name": "Kylo Ren",
        "category": "Empire",
        "image": "char/kyloren (1).jpg",
        "details": "The son of Leia Organa and Han Solo, Kylo Ren struggles with his dark side as a leader of the First Order. He redeems himself by aiding Rey in defeating Emperor Palpatine."
      },
      {
        "name": "Boba Fett",
        "category": "Empire",
        "image": "char/bobafett.jpg",
        "details": "Boba Fett is a notorious bounty hunter, initially working for the Empire and later carving his own path in the galaxy."
      },
      {
        "name": "Darth Maul",
        "category": "Empire",
        "image": "char/darthmaul.jpg",
        "details": "Darth Maul is a Sith apprentice to Emperor Palpatine. Known for his iconic double-bladed lightsaber, he plays a pivotal role in The Phantom Menace."
      },
      {
        "name": "Admiral Piett",
        "category": "Empire",
        "image": "char/admiralpiett.jpg",
        "details": "Admiral Piett is a loyal officer in the Galactic Empire, serving under Darth Vader in The Empire Strikes Back and Return of the Jedi."
      },
      {
        "name": "Stormtroopers",
        "category": "Empire",
        "image": "char/storm.jpg",
        "details": "Stormtroopers are the elite soldiers of the Galactic Empire, known for their iconic white armor and loyalty to the Emperor."
      },
      {
        "name": "Count Dooku",
        "category": "Empire",
        "image": "char/countdooku.jpg",
        "details": "Count Dooku, also known as Darth Tyranus, is a Sith Lord and former Jedi who leads the Separatist movement during the Clone Wars."
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
      image: "char/1bb8.jpg",
      details: "A spherical astromech droid loyal to Poe Dameron. BB-8 provides vital assistance to the Resistance during their fight against the First Order."
    },
    {
      name: "K-2SO",
      category: "Bots",
      image: "char/K2SO.jpg",
      details: "A reprogrammed Imperial security droid who aids Jyn Erso and Cassian Andor in Rogue One. Known for his sarcastic wit and combat skills."
    },
    {
      name: "R4-P17",
      category: "Bots",
      image: "char/R4-P17.png",
      details: "Astromech droid serving Jedi Master Obi-Wan Kenobi."
    },
    {
      name: "Chopper",
      category: "Bots",
      image: "char/chop.jpeg",
      details: " Astromech droid, member of the Star Wars Rebels crew."
    },
    {
      name: "General Grievous",
      category: "Bots",
      image: "char/generalgrievous.jpg",
      details: "Droid General in The Clone Wars, leader of the Separatist army."
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

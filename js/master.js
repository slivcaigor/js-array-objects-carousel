const images = [
  {
    "image": './img/01.webp',
    "title": 'Marvel\'s Spiderman Miles Morale',
    "text": 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
  },
  {
    "image": './img/02.webp',
    "title": 'Ratchet & Clank: Rift Apart',
    "text": 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
  },
  {
    "image": './img/03.webp',
    "title": 'Fortnite',
    "text": "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  },
  {
    "image": './img/04.webp',
    "title": 'Stray',
    "text": 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
  },
  {
    "image": './img/05.webp',
    "title": "Marvel's Avengers",
    "text": 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
  }
];

document.getElementById("card_slider").innerHTML = images.map(slide =>
  `
      <div class="card">
        <img src="${slide.image}" class="card-img" alt="${slide.title}">
        <div class="overlay text-end px-3 py-2 position-absolute">
          <h5 class="text-warning fw-bold">${slide.title}</h5>
          <p class="text-info">${slide.text}</p>
        </div>
      </div>
  `
).join('')

let totalSlides = 5;
let currentSlide = 1;

document.querySelector(".ms_next").addEventListener('click', function next() {
  currentSlide++;
  if (currentSlide > totalSlides) {
    currentSlide = 1;
  }

  for (let i = totalSlides; i > 0; i--) {
    document.querySelector("#card_slider .card:nth-child(" + i + ")").style.display = "none";
  }
  document.querySelector("#card_slider .card:nth-child(" + currentSlide + ")").style.display = "block";
})

document.querySelector(".ms_prev").addEventListener('click', function prev() {
  currentSlide--;
  if (currentSlide == 0) {
    currentSlide = totalSlides;
  }

  for (let i = totalSlides; i > 0; i--) {
    document.querySelector("#card_slider .card:nth-child(" + i + ")").style.display = "none";
  }
  document.querySelector("#card_slider .card:nth-child(" + currentSlide + ")").style.display = "block";
})


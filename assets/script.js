const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];
//    étape 2 Ajoutez des Event Listeners sur les flèches
let slide = 0;
const banner = document.getElementById("banner");
const precedent = document.querySelector(".arrow_left");
const suivant = document.querySelector(".arrow_right");
const bannerImg = document.querySelector(".banner-img");
const texte = document.querySelector("#banner p");
const dots = document.querySelector(".dots");

let interval;

// console.log(slides[0]);
precedent.addEventListener("click", () => {
  slide = (slide - 1 + slides.length) % slides.length; // change "slide" lorsque la fleche de gauche est cliqué
  texte.innerHTML = slides[slide].tagLine;
  bannerImg.src = `./assets/images/slideshow/${slides[slide].image}`;
  console.log(slide);
  const allDot = document.querySelectorAll(".dot");
  allDot.forEach((dot, index) => {
    dot.classList.toggle("dot_selected", index === slide);
  });
});

suivant.addEventListener("click", () => {
  slide = (slide + 1) % slides.length; //change "slide" lorsque la fleche de droite est cliqué
  texte.innerHTML = slides[slide].tagLine; // change le texte par rapport a la valeur de slide.
  bannerImg.src = `./assets/images/slideshow/${slides[slide].image}`; // change l'image par rapport a la valeur de slide.
  // updateSlide();
  const allDot = document.querySelectorAll(".dot");
  allDot.forEach((dot, index) => {
    dot.classList.toggle("dot_selected", index === slide);
  });
});

//    étape 3 : Ajoutez des bullet points au slider

//Création des dots.

slides.forEach(() => {
  // pour chaque slides, tu me fait :
  const dot = document.createElement("div"); //création d'une constante dot en créant une division
  dot.classList.add("dot"); // ajout de la classe "dot"
  dots.appendChild(dot); // ajoute une division avec la classe dot
});

// étape4 Modifiez le slide au clic sur le bouton

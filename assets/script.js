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
//étape 2
let slide = 0;
const banner = document.getElementById("banner");
const precedent = document.querySelector(".arrow_left");
const suivant = document.querySelector(".arrow_right");

precedent.addEventListener("click", () => {
  slide = (slide - 1 + slides.length) % slides.length; // change "slide" lorsque la fleche de gauche est cliqué
  console.log(slide);
  console.log("left");
});

suivant.addEventListener("click", () => {
  slide = (slide + 1) % slides.length; //change "slide" lorsque la fleche de droite est cliqué
  console.log(slide);
  console.log("right");
});

//étape 3 :
const dots = document.querySelector(".dots");

"use strict";
// create DB with image квадратная, портретная, альбомная
const imagesDB = [
  "https://img.freepik.com/premium-photo/blue-ocean-water-background-digital-illustration-artwork-nature-sea-ocean_743855-10946.jpg",
  "https://images.nationalgeographic.org/image/upload/v1652341068/EducationHub/photos/ocean-waves.jpg",
  "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/calm-red-sea-1x1-hannes-cmarits.jpg",
];
//create slider
const slider = new Slider(imagesDB);
// img
const image = document.querySelector(".slide>img");
// prev, next
const [prevBtn, nextBtn] = document.querySelectorAll(
  ".slider-container>button"
);

const btnSliderHandler =
  (direction = "next") =>
  () => {
    slider.currentIndex =
      slider[direction === "next" ? "nextIndex" : "prevIndex"];
    updateView();
  };

prevBtn.addEventListener("click", btnSliderHandler("prev"));
nextBtn.addEventListener("click", btnSliderHandler("next"));

function updateView() {
  image.setAttribute("src", slider.currentSlide);
}
updateView();

/*----------------------------------------------------------------------------- */

const unique = document.getElementById("unique");

function btnUniqueHandlet(e) {
  // e = e || event;
  e.stopPropagation();
  console.group();
  console.log("target:", e.target); // Елемент по которому кликнули
  console.log("currentTarget:", e.currentTarget); // Елемент чем обработчик обработал
  console.groupEnd();
}

unique.addEventListener("click", btnUniqueHandlet);
window.addEventListener("click", btnUniqueHandlet);
document.addEventListener("click", btnUniqueHandlet);
document.body.addEventListener("click", btnUniqueHandlet);

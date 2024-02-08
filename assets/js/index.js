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

const btns = document.querySelectorAll("body>button");
for (const btn of btns) {
  btn.addEventListener("click", ({ target: { dataset }, target }) => {
    console.log(dataset.path);
    console.log(dataset.securePath);
    target.style.borderColor = "red";
    target.style.paddingLeft = "1rem";
  });
}

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

prevBtn.addEventListener("click", () => {
  console.log(slider.currentIndex);
  slider.currentIndex = slider.prev();
  updateView();
});
nextBtn.addEventListener("click", () => {
	console.log(slider.currentIndex);
  slider.currentIndex = slider.next();
  updateView();
});

// установить путь в атрибут src=''
function updateView() {
  image.setAttribute("src", slider.currentSlide);
}
updateView();

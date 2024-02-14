"use strict";

const message = [];
const form = document.forms.rootForm;
const list = document.getElementById("list");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputValue = e.target.elements.inputText.value.trim();
  if (inputValue) {
    message.push(inputValue);
    e.target.reset();
  }
  console.log(message);
});

// function renderList(data, container) {
//   data.forEach((item) => {
//     const listItem = document.createElement("li");
//     listItem.textContent = item;
//     container.appendChild(listItem);
//   });
// }

// function renderList(data, container) {
//   container.innerHTML = "";
//   const listHTML = data.map((item) => `<li>${item}</li>`).join("");
//   container.innerHTML = listHTML;
// }

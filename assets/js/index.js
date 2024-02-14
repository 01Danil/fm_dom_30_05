"use strict";

const message = [];
const form = document.forms.rootForm;
const list = document.getElementById("list");

//const pattern = /^([A-Z][a-z]+ [A-Z]\.)|([А-Я][а-я]+ [А-Я]\.)$/;
const pattern = /^(19[2-9][0-9])|(20([01][0-9]|2[0-2]))$/;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputValue = e.target.elements.inputText.value.trim();
  if (pattern.test(inputValue)) {
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

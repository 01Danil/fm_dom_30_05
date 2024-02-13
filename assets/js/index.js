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

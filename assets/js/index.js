"use strict";

const state = [];
const form = document.getElementById("rootForm");
const list = document.getElementById("list");
const pattern = /^[A-Z][a-z]{1,12}$/;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const {
    target,
    target: {
      elements: { inputText },
    },
  } = e;
  const inputValue = inputText.value.trim();
  if (pattern.test(inputValue)) {
    state.push(inputValue);
    target.reset();
    const li = createElement(
      "li",
      { classNames: ["item"] },
      document.createTextNode(inputValue)
    );
    /* Добавить в li кнопку с крестиком */
    const btn = createElement("button", {}, document.createTextNode("x"));
    li.append(btn);
    list.append(li);
  }
});

/**
 *
 * @param {string} tag
 * @param {object} options
 * @param {string[]} options.classNames
 * @param {string} options.typeEvent
 * @param {function} options.handlerEvent
 * @param {objects} children
 * @returns
 */
function createElement(
  tag,
  { classNames = [], typeEvent = "", handlerEvent = null },
  ...children
) {
  const element = document.createElement(tag);
  if (classNames.length) {
    element.classList.add(...classNames);
  }
  element.append(...children);
  return element;
}

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

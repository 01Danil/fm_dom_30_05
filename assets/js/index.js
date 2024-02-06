"use strict";

function logMessager() {
  alert("message");
}

// const [,button] = document.getElementsByTagName("button");
// button.addEventListener("click", logMessager);

// const id = "unique";
// const unique = document.getElementById("unique"); //0(1) -константная сложность (лучшая)
// const unique = document.getElementById(id);
// unique.addEventListener("click", logMessager);

// const unique = document.querySelector("#unique"); //0(1) - медленее, но больше возможностей CSS свойства
// const btn = document.querySelector("button:last-of-type");

// const btns1 = document.getElementsByClassName("btn");
// const btns2 = document.querySelectorAll(".btn");

const img1 = document.querySelector("img");
const [img] = document.getElementsByTagName("img");

const [, text] = document.getElementsByClassName("text");

const li2 = document.querySelector("li:nth-child(2)");

const ps = document.querySelectorAll("#main p");

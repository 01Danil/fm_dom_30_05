"use strict";

let i = 123;

function createCounter() {
  let i = 0;
  return {
    increment() {
      return ++i;
    },
    decrement() {
      return --i;
    },
  };
}

const counter = createCounter(); // let initial = 10;
console.log(counter.increment());
console.log(counter.decrement());

const counter2 = createCounter();
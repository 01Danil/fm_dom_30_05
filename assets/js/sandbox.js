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

// const counter = createCounter(); // let initial = 10;
// console.log(counter.increment());
// console.log(counter.decrement());

// const counter2 = createCounter();

// function createAdder(n) {
// let sum = n;
//   return function adder(m) {
//     return n += m;
//   };
// }

// function createAdder(n) {
//   return (m) => (n += m);
// }

// const createAdder = (n) => (m) => (n += m);

// const adder = createAdder(100);
// console.log(adder(15));
// console.log(adder(50));
// console.log(adder(10));

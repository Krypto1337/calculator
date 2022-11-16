/* Math functions */
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

//Variables
let numb1 = 0;
let numb2 = 0;
let result = 0;
let decision = "";

const currentScreen = document.querySelector(".screen-current");
const lastScreen = document.querySelector(".screen-last");
const buttons = document.querySelectorAll(".btn");
const clear = document.querySelector(".btn-clear");

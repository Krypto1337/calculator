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

buttons.forEach((element) => {
  element.addEventListener("click", function (e) {
    if (!isNaN(this.textContent)) {
      if (currentScreen.textContent == "0") {
        currentScreen.textContent = this.textContent;
      } else {
        currentScreen.textContent += this.textContent;
      }
    } else if (this.textContent == "+") {
      numb1 = Number(currentScreen.textContent);
      lastScreen.textContent = numb1 + " + ";
      currentScreen.textContent = "0";
      decision = "+";
    } else if (this.textContent == "-") {
      numb1 = Number(currentScreen.textContent);
      lastScreen.textContent = numb1 + " - ";
      currentScreen.textContent = "0";
      decision = "-";
    } else if (this.textContent == "×") {
      numb1 = Number(currentScreen.textContent);
      lastScreen.textContent = numb1 + " × ";
      currentScreen.textContent = "0";
      decision = "×";
    } else if (this.textContent == "÷") {
      numb1 = Number(currentScreen.textContent);
      lastScreen.textContent = numb1 + " ÷ ";
      currentScreen.textContent = "0";
      decision = "÷";
    } else if (this.textContent == "=") {
      numb2 = Number(currentScreen.textContent);
      lastScreen.textContent += numb2;
      switch (decision) {
        case "+":
          currentScreen.textContent = add(numb1, numb2);
          return;
        case "-":
          currentScreen.textContent = subtract(numb1, numb2);
          return;
        case "÷":
          currentScreen.textContent = divide(numb1, numb2);
          return;
        case "×":
          currentScreen.textContent = multiply(numb1, numb2);
          return;
      }
    }
  });
});

clear.addEventListener("click", function (e) {
  currentScreen.textContent = "0";
  lastScreen.textContent = "";
});

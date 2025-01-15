"use strict";

function noInput() {
  document.querySelector(".answer-text").textContent =
    "You must type in a number first!";
}

document.querySelector(".g-o").addEventListener("click", function () {
  const amount = Number(document.querySelector(".input-box").value);
  if (!amount) {
    noInput();
  } else {
    const answer = amount / 28.35;
    document.querySelector(
      ".answer-text"
    ).textContent = `${amount} gramms is ${answer.toFixed(2)} ounces`;

    document.querySelector(".answer").textContent = `${answer.toFixed(2)}oz`;
  }
});

document.querySelector(".o-g").addEventListener("click", function () {
  const amount = Number(document.querySelector(".input-box").value);
  if (!amount) {
    noInput();
  } else {
    const answer = amount * 28.35;
    document.querySelector(
      ".answer-text"
    ).textContent = `${amount} ounces is ${answer.toFixed(2)} gramms`;

    document.querySelector(".answer").textContent = `${answer.toFixed(2)}g`;
  }
});

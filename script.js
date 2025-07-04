const textArray = ["UI-UX DESIGNER", "FRONT-END DEVELOPER", "CREATOR"];
let textIndex = 0;
let charIndex = 0;
const typedText = document.querySelector(".typed-text");
const cursor = document.querySelector(".cursor");

function typeEffect() {
  if (charIndex < textArray[textIndex].length) {
    typedText.textContent += textArray[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 100);
  } else {
    setTimeout(eraseEffect, 1500);
  }
}

function eraseEffect() {
  if (charIndex > 0) {
    typedText.textContent = textArray[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseEffect, 50);
  } else {
    textIndex++;
    if (textIndex >= textArray.length) textIndex = 0;
    setTimeout(typeEffect, 500);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  if (textArray.length) setTimeout(typeEffect, 1000);
});
// Animate separate skill chart percentages
document.addEventListener("DOMContentLoaded", () => {
  const charts = document.querySelectorAll(".chart-box");

  charts.forEach((chart) => {
    const percent = parseInt(chart.getAttribute("data-percent"));
    const circle = chart.querySelector(".circle");
    const text = chart.querySelector(".percentage");
    let current = 0;

    const interval = setInterval(() => {
      if (current <= percent) {
        circle.setAttribute("stroke-dasharray", `${current}, 100`);
        text.textContent = `${current}%`;
        current++;
      } else {
        clearInterval(interval);
      }
    }, 20);
  });
});
document.querySelector(".contact-form").addEventListener("submit", function () {
  alert("Thanks for reaching out! I’ll get back to you soon.");
});

// Simple counter example
let count = 0;
const button = document.getElementById("clickMe");
const counter = document.getElementById("counter");

button.addEventListener("click", () => {
  count++;
  counter.textContent = `Clicks: ${count}`;
});

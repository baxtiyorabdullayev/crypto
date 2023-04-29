const output = document.querySelector(".out-text");
let input = document.querySelector(".input-text");
const btn = document.querySelector(".run-btn");
const form = document.querySelector("form");

function run(e) {
  e.privetnDefault();
  alert(input.value);
  console.log(input.value);
  output.textContent = input.value;
}

btn.addEventListener("submit", run);
// form.addEventListener("submit", run);

const outputText = document.querySelector(".out-text");
let inputText = document.querySelector(".input-text");
const btn = document.querySelector(".run-btn");

btn.addEventListener("click", decrtiption);

function decrtiption(e) {
  e.preventDefault();

  let inputLength = inputText.value.length;
  let inputSqrt = Math.sqrt(inputLength);

  if (Math.pow(inputSqrt, 2) === inputLength) {
    console.log(`${inputSqrt} x ${inputSqrt} kvadrat yasadik`);
  } else {
    console.log("bad");
  }
}

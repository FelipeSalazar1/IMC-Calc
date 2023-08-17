//imports
import { alertError } from "./alertError.js";
import { Modal } from "./modal.js";
import { notNumber, calcIMC } from "./utils.js";

// váriaveis
const form = document.querySelector("form");
const inputWeight = document.querySelector("#weight");
const inputHeight = document.querySelector("#height");


//eventos
form.onsubmit = handleSubmit;
handleErrorClose();

//funções
function handleSubmit(event) {
  event.preventDefault();

  const weight = inputWeight.value;
  const height = inputHeight.value;

  const weightOrHeightIsNotANumber = notNumber(weight) || notNumber(height);
  if (weightOrHeightIsNotANumber) {
    alertError.open();
    return;
  }

  alertError.close();

  const result = calcIMC(weight, height);
  const message = `Seu imc é de ${result}!`;

  Modal.message.innerText = message;
  Modal.open();
}

function handleErrorClose() {
  inputWeight.oninput = () => {alertError.close()};
  inputHeight.oninput = () => {alertError.close()};
}
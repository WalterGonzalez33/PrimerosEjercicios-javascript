// usuario ingresa un numero
const dividing = parseInt(prompt("enter number: "));

let messageResult = `${dividing} is divisible `;
let divisible = [2, 3, 5, 7];
let numbersDivisible = [];

// devuelve los numeros que encuantra divisible
for (let i = 0; i < divisible.length; i++) {
  if (dividing % divisible[i] === 0) {
    numbersDivisible.push(divisible[i]);
  }
}

// genera un texto acorde a la cantidad de numeros por el cual se puede dividir
if (numbersDivisible.length > 1) {
  for (let i = 0; i < numbersDivisible.length; i++) {
    if (i === 0) {
      messageResult += `for `;
    }
    if (i != 0 && i + 1 != numbersDivisible.length) {
      messageResult += ", ";
    }
    if (i + 1 === numbersDivisible.length) {
      messageResult += ` and ${numbersDivisible[i]}`;
    } else {
      messageResult += `${numbersDivisible[i]}`;
    }
  }
} else {
  messageResult += `only for ${numbersDivisible[0]}.`;
}

// si no es divisible por los numero anteriores devuelve un mensaje al usuario
if (messageResult === `${dividing} is divisible `) {
  messageResult = `${dividing} is not divisible`;
}

// imprime por consola
console.log(messageResult);

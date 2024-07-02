// ingresar el primer numero
const firstNumber = parseInt(prompt("enter the first number: "));

// ingresar el segundo numero
const secondNumber = parseInt(prompt("enter the second number: "));

// muestra por pantalla el numero mayor
if (firstNumber > secondNumber) {
  document.write(`the number ${firstNumber} is the greatest`);
} else {
  document.write(`the number ${secondNumber} is the greatest`);
}

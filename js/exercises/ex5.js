const markdownContent = `
\`\`\`
// ingresar el primer numero
const firstNumber = parseInt(prompt("enter the first number: "));

// ingresar el segundo numero
const secondNumber = parseInt(prompt("enter the second number: "));

// se suman los dos numeros ingresados
document.write(
  \`the sum \${firstNumber} + \${secondNumber} = \${firstNumber + secondNumber}\`
);
`;

document.getElementById("content").innerHTML = marked.parse(markdownContent);
document.querySelector("code").className += "language-js";

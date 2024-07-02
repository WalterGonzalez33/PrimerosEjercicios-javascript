const markdownContent = `
\`\`\`
// usuario ingresa un numero
const dividing = parseInt(prompt("enter number: "));

let messageResult = "";

// devuelve el primer numero que encuentra divisible
for (let i = 0; i < 4; i++) {
  let numDivisible = i == 0 ? 2 : i === 1 ? 3 : i === 2 ? 5 : 7;
  if (dividing % numDivisible === 0) {
    messageResult = \`\${dividing} is divisible by \${numDivisible}.\`;
    break;
  }
}

// si no es divisible por los numero anteriores devuelve un mensaje al usuario
if (messageResult === "") {
  messageResult = \`\${dividing} is not divisible\`;
}

// muestra por consola
console.log(messageResult);
`;

document.getElementById("content").innerHTML = marked.parse(markdownContent);
document.querySelector("code").className += "language-js";

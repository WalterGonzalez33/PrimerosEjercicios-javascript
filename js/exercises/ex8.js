const markdownContent = `
\`\`\`
// usuario ingresa un numero
const dividingNumber = parseInt(prompt("enter number: "));

// devuelve si es o no divisible por 2
if (dividingNumber % 2 === 0) {
  document.write(\`the number \${dividingNumber} is divisible by 2\`);
} else {
  document.write(\`the number \${dividingNumber} is not divisible by 2\`);
}
`;

document.getElementById("content").innerHTML = marked.parse(markdownContent);
document.querySelector("code").className += "language-js";

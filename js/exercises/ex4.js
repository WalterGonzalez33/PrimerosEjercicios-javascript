const markdownContent = `
\`\`\`
// usuario ingresa su nombre
const nameUser = prompt('What is your name?')

// saluda al usuario
document.write('Hello ' + nameUser)
`;

document.getElementById("content").innerHTML = marked.parse(markdownContent);
document.querySelector("code").className += "language-js";

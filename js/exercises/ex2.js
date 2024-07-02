const markdownContent = `
\`\`\`
// impresion por pantalla
document.write('hello world')
`;

document.getElementById("content").innerHTML = marked.parse(markdownContent);
document.querySelector("code").className += "language-js";

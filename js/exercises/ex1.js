const markdownContent = `
\`\`\`
// Hola mundo ^_~
alert('hello world 😎')
`;

document.getElementById("content").innerHTML = marked.parse(markdownContent);
document.querySelector("code").className += "language-js";

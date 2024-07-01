// alert('hello world')

const markdownContent = `
\`\`\`
alert('hello world')
`;

document.getElementById("content").innerHTML = marked.parse(markdownContent);
document.querySelector("code").className += "language-js";
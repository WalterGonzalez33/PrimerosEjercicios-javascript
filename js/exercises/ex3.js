const markdownContent = `
\`\`\`
// 3 + 5 = 8
document.write('3 + 5 = ' + (3 + 5))
`;

document.getElementById("content").innerHTML = marked.parse(markdownContent);
document.querySelector("code").className += "language-js";

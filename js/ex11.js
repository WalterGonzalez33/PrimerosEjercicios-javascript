const dividing = parseInt(prompt("enter number: "));

let messageResult = `${dividing} is divisible `;
let divisible = [2, 3, 5, 7];
let numbersDivisible = [];

for (let i = 0; i < divisible.length; i++) {
  if (dividing % divisible[i] === 0) {
    numbersDivisible.push(divisible[i]);
  }
}

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

if (messageResult === `${dividing} is divisible `) {
  messageResult = `${dividing} is not divisible`;
}
console.log(messageResult);

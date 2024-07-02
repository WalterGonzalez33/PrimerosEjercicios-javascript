const dividing = parseInt(prompt('enter number: '))

let messageResult = '';

for (let i = 0; i < 4; i++) {
    let numDivisible = i == 0 ? 2 : i === 1 ? 3 : i === 2 ? 5 :  7 ;
    if(dividing % numDivisible === 0){
        messageResult = `${dividing} is divisible by ${numDivisible}.`
        break
    }
}

if(messageResult === ''){
    messageResult = `${dividing} is not divisible`;
}
console.log(messageResult);
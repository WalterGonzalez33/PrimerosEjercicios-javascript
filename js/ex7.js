const firstNumber = parseInt(prompt('enter the first number: '))
const secondNumber = parseInt(prompt('enter the second number: '))
const thirdNumber = parseInt(prompt('enter the third number: '))
if(firstNumber > secondNumber){
    if(firstNumber > thirdNumber){
        document.write(`the number ${firstNumber} is the greatest`)
    }else{
        document.write(`the number ${thirdNumber} is the greatest`)
    }
}else{
    if(secondNumber > thirdNumber){
        document.write(`the number ${secondNumber} is the greatest`)
    }else{
        document.write(`the number ${thirdNumber} is the greatest`)
    }
}
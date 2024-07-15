function calculator(numOne, numTwo, operator) {
    let result = 0;
    switch (operator) {
        case 'multiply':
            let multiply = (numOne, numTwo) => numOne * numTwo;
            result = multiply(numOne, numTwo);
            console.log(result);
            break;
        case 'divide':
            let divide = (numOne, numTwo) => numOne / numTwo;
            result = divide(numOne, numTwo);
            console.log(result);
            break;
        case 'add':
            let add = (numOne, numTwo) => numOne + numTwo;
            result = add(numOne, numTwo)
            console.log(result);
            break;
        case 'subtract':
            let subtract = (numOne, numTwo) => numOne - numTwo;
            result = subtract(numOne, numTwo)
            console.log(result);
            break;
        default:
            break;
    }
}
calculator(
50,
13,
'subtract'
)
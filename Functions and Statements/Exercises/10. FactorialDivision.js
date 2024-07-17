function factorial (numOne, numTwo){
    let resultOne = numOne;
    let resultTwo = numTwo;
    let finalResult = 0;

    for (let index = 1; index < numOne; index++) {
        resultOne *= index
    }
     for (let i = 1; i < numTwo; i++) {
       resultTwo *= i
     }
     
     finalResult = resultOne / resultTwo
     console.log(`${finalResult.toFixed(2)}`)
}
factorial(6, 2)
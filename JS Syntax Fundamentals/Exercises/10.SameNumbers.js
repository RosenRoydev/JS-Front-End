function sameNumbers(number) {
    let currentNumber = number % 10;
    let previousNumber = currentNumber;
    let sameNumber = true;
    let sum = 0;
    while (number > 0) {

        sum += currentNumber;

        number = Math.trunc(number / 10)
        if (previousNumber !== currentNumber) {
            sameNumber = false  
        }
        previousNumber = currentNumber;
        currentNumber = number % 10;
        
        
    }
        console.log(sameNumber)
        console.log(sum)
}
sameNumbers(232222)
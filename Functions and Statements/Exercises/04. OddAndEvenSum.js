function sum(number) {
    let digit = 0;
    let sumOdd = 0;
    let sumEven = 0;
    while (number > 0) {
        digit = number % 10;
        if (digit % 2 === 0) {
            sumEven += digit;
            number /= 10;
           number = Math.floor(number);
        } else {
            sumOdd += digit;
            number /= 10;
           number = Math.floor(number);
        } 
    }
    console.log(`Odd sum = ${sumOdd.toFixed(0)}, Even sum = ${sumEven.toFixed(0)}`)
}
sum(3495892137259234);
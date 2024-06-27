function SumDigits(number){
    let currentNumber=1;
    
    let sum = 0
    while(number > 0){
      currentNumber = number % 10
      number = Math.trunc(number/10)
      sum += currentNumber
    }
 console.log(sum)
}

SumDigits(245678)
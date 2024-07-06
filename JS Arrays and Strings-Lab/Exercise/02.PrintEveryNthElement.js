function solve(numbers, specialNumber) {
    let newNumbers = [];

    for (let index = 0; index < numbers.length; index++) {
        if ([index] % specialNumber === 0) {
            let numberForPush = numbers[index]
            newNumbers.push(numberForPush)
            
        }
    }
 return(newNumbers);
}
solve(['5', '20', '31', '4', '20'], 2)
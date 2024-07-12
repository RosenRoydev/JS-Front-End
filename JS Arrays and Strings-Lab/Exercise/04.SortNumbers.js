function solve(numbers) {
    let newNum = [];
    let i = 0;
    numbers.sort((a, b) => a - b)
    
    for (let index = 0; index < numbers.length; index++) {
        newNum[i++] = numbers[index]
        if (i === numbers.length) {
            break;
        }
        newNum[i++] = numbers[numbers.length - index - 1]
        if (i === numbers.length) {
            break;
        }
    }

    return newNum;
}
solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])
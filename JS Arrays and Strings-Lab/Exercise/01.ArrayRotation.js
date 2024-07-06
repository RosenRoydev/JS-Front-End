function solve(numbers,rotations){
    let numberForBack
    for (let index = 0; index < rotations; index++) {
       numberForBack = numbers.shift();
       numbers.push(numberForBack);
    }
    console.log(numbers.join(' '))
}
solve([51, 47, 32, 61, 21], 2)
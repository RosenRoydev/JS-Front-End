function solve(numbers){
    let sum = 0;
    for(let number of numbers) {
        if(number % 2 == 0){
          sum += number
        }
        else{
            sum -= number
        }
    }
    console.log(sum)
}
solve([2,4,6,8,10])
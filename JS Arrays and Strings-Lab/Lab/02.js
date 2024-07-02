function solve(n,numbers){
    let result = ''
    for(i = n-1 ; n > 0 ; n--){

       result += `${numbers[n-1]} `
    } 
    console.log(result)
}

solve(2, [66, 43, 75, 89, 47])
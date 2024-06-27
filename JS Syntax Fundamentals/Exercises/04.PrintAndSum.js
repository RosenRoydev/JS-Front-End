function printAndSum(num1, num2){
   let result='';
   let sum = 0;

    for(index = num1; index <= num2; index++){
      result += `${index} `;
      sum +=index;
    }
    console.log(result)
    console.log(`Sum: ${sum}`)
}
printAndSum(50, 60)
function perfectNumber(number){
    let sum = 0;
    for (let index = 1; index <= number; index++) {
        if(number % index === 0){
            sum += index
        }
    }
    if(sum / 2 === number){
        console.log("We have a perfect number!");
    }else{
        console.log("It's not so perfect.");
    }
}
perfectNumber(1236498)
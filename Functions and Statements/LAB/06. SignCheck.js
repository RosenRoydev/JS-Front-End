function PositiveOrNegative(a,b,c){
    let counter = 0;
    if(a < 0){
        counter ++;
    }
    if(b < 0){
        counter ++;
    }
    if(c < 0){
        counter ++;
    }
    if(counter === 0 || counter ===2){
        console.log("Positive")
    }else{
        console.log("Negative")
    }
}
PositiveOrNegative(-6,
    -12,
     14   
    )
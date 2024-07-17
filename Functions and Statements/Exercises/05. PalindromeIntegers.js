function palindrome(numbers){
    let number = 0;
   for (let i = 0; i < numbers.length; i++) {
    number = numbers[i];
   number = number.toString();
    let numberFromBegin = [];
    let numberFromEnd = [];
    for (let y = 0; y < number.length; y++) {
        numberFromBegin.push(number[y]);
    }
    for (let z = number.length-1; z >= 0; z--) {
        numberFromEnd.push(number[z]);
    }
    if(numberFromBegin.join(', ') === numberFromEnd.join(', ')){
        console.log("true");
    }else{
        console.log("false");
    }
   }
}
palindrome([32,2,232,1010])
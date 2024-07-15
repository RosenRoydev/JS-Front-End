function smallestNumber(numOne, numTwo, numThree){
    let smallerNumber = (a, b) => a > b? b : a;
    let result = smallerNumber (smallerNumber(numOne, numTwo), numThree);
    console.log(result);
}
smallestNumber(2, 2, 2)
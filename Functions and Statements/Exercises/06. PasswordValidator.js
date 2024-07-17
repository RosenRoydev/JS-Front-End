function validator(input) {
    let isValid = true;
    const regex = /^[a-z A-Z \d]*$/gm;
    let counterDigit = 0;
    if (input.length < 6 || input.length > 10) {
        console.log("Password must be between 6 and 10 characters");
        isValid = 'false';
    }
    for (let index = 0; index < input.length; index++) {
        if (input[index] == 0 || input[index] == 1 || input[index] == 2 || input[index] == 3 || input[index] == 4 ||
            input[index] == 5 || input[index] == 6 || input[index] == 7 || input[index] == 8 || input[index] == 9){
                counterDigit++;
            }
    }
    if (!regex.test(input)){
        console.log("Password must consist only of letters and digits");
        isValid = false;
     }
    if(counterDigit < 2){
        console.log("Password must have at least 2 digits");
        isValid = false;
    }
    
    if(isValid){
        console.log("Password is valid");
    }
}
validator('Pa$s$s')

function matrix(number){
    let numbers = '';
    for (let i = 0; i < number; i++) {
        numbers += number + ' '
    }
    for (let index = 0; index < number; index++) {
        console.log(numbers);
    }
}
matrix(3);
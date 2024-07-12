function Pascal(text){
    const regEx = /[A-Z][a-z]*/g;
    let array = text.matchAll(regEx);
    let newArr=[];
    for(let word of array) {
            newArr.push(word[0])
        }
   
    console.log(newArr.join(', '))
}
Pascal('ThisIsSoAnnoyingToDo');
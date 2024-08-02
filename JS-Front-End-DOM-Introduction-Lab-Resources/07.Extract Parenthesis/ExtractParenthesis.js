function extract(content) {
    let input = document.getElementById(content).textContent
    let word = '';
    let startIndex = 0;
    let endIndex = 0;
    let words = [];
    console.log(input)
    for (let index = 0; index < input.length; index++) {

        if (input[index] === '(') {
            startIndex = index + 1
        }
        if (input[index] === ')') {
            endIndex = index;
            word = input.substring(startIndex, endIndex)
            words.push(word)
        }
    }
    return(words.join('; '));
}
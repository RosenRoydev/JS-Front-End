function solve(specialWords, text) {
    let wordsForChange = specialWords.split(', ');
    let textForChange = text.split(' ');

    for (let i = 0; i < textForChange.length; i++) {
        let element = textForChange[i];
        if (element[0] === '*') {

            for (let specialWord of wordsForChange) {
                
                if (element.length === specialWord.length) {
                    textForChange[i] = specialWord;
                }

            }
        }
    }
    let output = '';
    for(let finalWord of textForChange){
        output += finalWord + ' ';
    }
    console.log(output)
}
solve('great, learning',
    'softuni is ***** place for ******** new programming languages')
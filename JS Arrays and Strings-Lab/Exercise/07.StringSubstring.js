function solve(word,text){
    text = text.toLowerCase();
    const searchedText = text.split(' ');
    for ( let searchedWord of searchedText) {
        if(searchedWord === word){
            console.log(searchedWord)
            return;
        }        
    }
    console.log(`${word} not found!`);
}
solve('python',
'JavaScript is the best programming language'
)
function tracker(input) {
    let searchedWords = input[0].split(' ');
    let words = {};
   for (const item of searchedWords) {
    words[item] = 0;
   }
   for (let index = 1; index < input.length; index++) {
    let searchedWord = input[index]
   if(words.hasOwnProperty(searchedWord))
    words[searchedWord] += 1;
   }
   let sortedWords = Object.entries(words);
   sortedWords = sortedWords.sort((a,b) => b[1] - a[1])
   for (const [word,repeats] of sortedWords) {
     console.log(`${word} - ${repeats}`)
   }
}
tracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]
)
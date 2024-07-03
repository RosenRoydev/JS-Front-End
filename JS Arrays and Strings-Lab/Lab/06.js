function countWord(text, word){
    let counter = 0;
    let newText = text.split(' ')
    for (const item of newText) {
        if(item === word){
            counter++;
        }
    }
    console.log(counter)
}
countWord('softuni is great place for learning new programming languages',
'softuni'

)
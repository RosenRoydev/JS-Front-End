function solve(input){
let word = input.shift();
for (let i = 0; i < input.length; i++) {
    if(input[i].includes ('TakeEven')){
        let newWord = ''
        for (let index = 0; index < word.length; index++) {
            if(index % 2 === 0){
                newWord += word[index];
            }
        }
        word = newWord;
        console.log(word)
    }
    else if(input[i].includes('ChangeAll')){
        const command = input[i].split('?')
        const substring = command[1];
        const replaceSymbols = command[2]
        word = word.split(substring).join(replaceSymbols);
       console.log(word)
    }
    else if(input[i].includes('Reverse')){
        const command = input[i].split('?')
        const substring = command[1];
        if(word.includes(substring)){
           word = word.replace(substring,'');
            for (let i = substring.length-1; i >= 0; i--) {
               word += substring[i];   
            }
            console.log(word)
        }else{
            console.log('error')
        }
    }else{
        console.log(`The cryptocurrency is: ${word}`)
        return;
    }
    

}
}
solve(["z2tdsfndoctsB6z7tjc8ojzdngzhtjsyVjek!snfzsafhscs", 
    "TakeEven",
    "Reverse?!nzahc",
    "ChangeAll?m?g",
    "Reverse?adshk",
    "ChangeAll?z?i",
    "Buy"])
    
function odd(input){
    let words = {}
    for (let item of input.split(' ')) {
        item = item.toLowerCase();
        if(words.hasOwnProperty(item)){
            words[item] += 1;
        }else{
           words[item] = 1;
        }   
    }
    let entries = Object.entries(words)
    let arr = []
    for (const word of entries) {
        [wordA,repeats] = word
        if(repeats % 2 != 0 ){
            arr.push(wordA)
        }
    }
    console.log(arr.join(' '));
}
odd('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')
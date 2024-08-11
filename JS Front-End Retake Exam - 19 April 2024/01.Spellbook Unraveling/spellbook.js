function solve(input) {
    let word = input[0];
    for (let index = 1; index < input.length; index++) {
       let command = input[index]
        
        if ( command === 'RemoveEven') {
            let newWord = '';
            for (let i = 0; i < word.length; i++) {
                if (i % 2 === 0) {
                    newWord += word[i];
                }
            }
            word = newWord
            console.log(word)
        }
        if(command.includes('TakePart')){
            let numbers = command.split('!')
            let num1 = Number(numbers[1]);
            let num2 = Number(numbers[2]);
            word = word.substring(num1,num2);
            console.log(word)
        }
        if(command.includes('Reverse')){
            let subs = command.split('!');
            let substr = subs[1]
            if(!word.includes(substr)){
                console.log('Error')
            }else{
                word = word.replace(substr,'');
               let  revSubstr = substr.split('').reverse().join('');
                word += revSubstr
                console.log(word);
            }
        }
        if(command === 'End'){
            console.log(`The concealed spell is: ${word}`);
            
        }
    }
}
solve(["asAsl2adkda2mdaczsa",
    "RemoveEven",
    "TakePart!1!9",
    "Reverse!maz",
    "End"]
)
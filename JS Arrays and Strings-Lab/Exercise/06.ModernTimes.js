function regX (text){
const regex = /#[A-Z,a-z]+/g;
let arrayWithRegX = text.matchAll(regex)

for(let word of arrayWithRegX) {
    
    console.log(word[0].substring(1,word[0].length))
}
}

regX('Nowadays everyone uses # to tag a #special word in #socialMedia')